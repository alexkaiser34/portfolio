import { openai } from '@ai-sdk/openai';
import { streamText, type ModelMessage } from 'ai';
import { loadSystemPrompt } from './content';
import { openaiEnv } from './env';

/** Model used by the assistant. Optimized for efficient portfolio Q&A and job-fit analysis. */
export const ASSISTANT_MODEL = 'gpt-5.6-luna';

/**
 * Stream an assistant reply for a conversation. Loads the cached system prompt
 * assembled from Supabase content and streams a completion. Shared by the
 * `/api/chat` endpoint and the local test script so model configuration lives
 * in exactly one place.
 */
export async function streamAssistantReply(messages: ModelMessage[]) {
  openaiEnv();
  const system = await loadSystemPrompt();

  return streamText({
    model: openai(ASSISTANT_MODEL),
    system,
    messages,
    maxOutputTokens: 700,
    providerOptions: {
      openai: {
        reasoningEffort: 'low',
      },
    },
  });
}
