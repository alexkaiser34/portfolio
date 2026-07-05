import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText } from 'ai';
import { loadSystemPrompt } from './_lib/content';
import { checkRateLimit } from './_lib/ratelimit';
import { ChatValidationError, parseChatRequest } from './_lib/guardrails';

export const config = { runtime: 'edge' };

const MODEL = 'gpt-4o-mini';

function jsonError(message: string, status: number): Response {
  return Response.json({ error: message }, { status });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return jsonError('Method not allowed.', 405);
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { success } = await checkRateLimit(ip);
  if (!success) {
    return jsonError('Too many requests. Please slow down and try again shortly.', 429);
  }

  let messages;
  try {
    const body = await req.json();
    messages = parseChatRequest(body);
  } catch (err) {
    if (err instanceof ChatValidationError) {
      return jsonError(err.message, 400);
    }
    return jsonError('Invalid request body.', 400);
  }

  let systemPrompt: string;
  try {
    systemPrompt = await loadSystemPrompt();
  } catch (err) {
    console.error('Failed to load portfolio context:', err);
    return jsonError('The assistant is temporarily unavailable. Please try again soon.', 503);
  }

  const result = streamText({
    model: openai(MODEL),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    temperature: 0.4,
    maxOutputTokens: 700,
  });

  return result.toUIMessageStreamResponse();
}
