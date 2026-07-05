import { openai } from '@ai-sdk/openai';
import { streamText, type ModelMessage } from 'ai';
import { loadSystemPrompt } from './content';
import { openaiEnv } from './env';

/** Model used by the assistant. Cheap and capable for this Q&A workload. */
export const ASSISTANT_MODEL = 'gpt-4o-mini';

/**
 * Stream an assistant reply for a conversation. Loads the (cached) system prompt
 * assembled from Supabase content and streams a completion. Shared by the
 * `/api/chat` endpoint and the local test script so the model configuration
 * lives in exactly one place.
 */
export async function streamAssistantReply(messages: ModelMessage[]) {
  openaiEnv();
  const system = await loadSystemPrompt();

  return streamText({
    model: openai(ASSISTANT_MODEL),
    system,
    messages,
    temperature: 0.4,
    maxOutputTokens: 700,
  });
}
