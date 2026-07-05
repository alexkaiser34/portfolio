import { supabaseServer } from './supabase';
import { fetchSingle, fetchList } from '@shared/repository';
import { renderSection } from '@shared/model';
import { CONTENT_MODELS, profileModel, type Profile } from '@shared/models';
import { buildSystemPrompt } from './prompt';

const TTL_MS = 5 * 60 * 1000;
let cache: { prompt: string; expires: number } | null = null;

/**
 * Assemble the assistant's system prompt by iterating the model registry:
 * each model is fetched from Supabase and rendered to its own markdown section.
 * Cached in-memory per warm function instance.
 *
 * Adding a new content type requires no change here — just define a model and
 * add it to `CONTENT_MODELS`.
 */
export async function loadSystemPrompt(): Promise<string> {
  if (cache && cache.expires > Date.now()) {
    return cache.prompt;
  }

  const rendered = await Promise.all(
    CONTENT_MODELS.map(async (model) => {
      if (model.kind === 'single') {
        const data = await fetchSingle(supabaseServer, model);
        return { model, section: renderSection(model, data), data };
      }
      const data = await fetchList(supabaseServer, model);
      return { model, section: renderSection(model, data), data };
    })
  );

  const context = rendered
    .map((entry) => entry.section)
    .filter((section) => section.length > 0)
    .join('\n\n');

  const profile = rendered.find((entry) => entry.model === profileModel)?.data as
    | Profile
    | undefined;
  const name = profile?.name ?? 'Alex Kaiser';

  const prompt = buildSystemPrompt(name, context);
  cache = { prompt, expires: Date.now() + TTL_MS };
  return prompt;
}
