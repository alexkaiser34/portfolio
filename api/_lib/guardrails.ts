import type { UIMessage } from 'ai';
import { CHAT_LIMITS } from '@shared/chat';

/** Thrown when an incoming chat request fails validation (maps to HTTP 400). */
export class ChatValidationError extends Error {}

function textLength(message: UIMessage): number {
  if (!Array.isArray(message.parts)) return 0;
  return message.parts.reduce((sum, part) => {
    if (part.type === 'text' && typeof part.text === 'string') {
      return sum + part.text.length;
    }
    return sum;
  }, 0);
}

/**
 * Validate and narrow an incoming request body into a typed `UIMessage[]`.
 * Enforces the shared conversation limits so oversized or malformed payloads
 * are rejected before they ever reach the model.
 */
export function parseChatRequest(body: unknown): UIMessage[] {
  if (!body || typeof body !== 'object' || !('messages' in body)) {
    throw new ChatValidationError('Request must include a "messages" array.');
  }

  const { messages } = body as { messages: unknown };

  if (!Array.isArray(messages) || messages.length === 0) {
    throw new ChatValidationError('At least one message is required.');
  }
  if (messages.length > CHAT_LIMITS.maxMessages) {
    throw new ChatValidationError('Conversation is too long. Please start a new chat.');
  }

  for (const message of messages as UIMessage[]) {
    if (
      !message ||
      (message.role !== 'user' && message.role !== 'assistant' && message.role !== 'system')
    ) {
      throw new ChatValidationError('Invalid message role.');
    }
    if (textLength(message) > CHAT_LIMITS.maxMessageChars) {
      throw new ChatValidationError('Message exceeds the maximum allowed length.');
    }
  }

  return messages as UIMessage[];
}
