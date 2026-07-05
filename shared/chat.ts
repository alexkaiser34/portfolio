/**
 * Chat contract shared between the frontend (`AIAssistant`) and the backend
 * (`/api/chat`). Keeping the route and limits here means the UI can enforce
 * them for a better experience while the server re-enforces them for safety.
 */

export const CHAT_API_ROUTE = '/api/chat';

export const CHAT_LIMITS = {
  /** Max characters allowed in a single user message. */
  maxMessageChars: 4000,
  /** Max number of messages accepted in a conversation payload. */
  maxMessages: 24,
} as const;
