import { z } from 'zod';

/**
 * Server-side environment variables read from `process.env` inside Vercel
 * functions. Split by concern and validated lazily, so a module only requires
 * the variables it actually uses — e.g. importing the content pipeline needs
 * only the Supabase vars, not the Upstash rate-limit credentials.
 *
 * Supabase URL/key are shared with the client via the `VITE_` vars (also present
 * in `process.env` at runtime); the server only reads public, RLS-protected
 * content, so the publishable key is sufficient. `OPENAI_API_KEY` and the
 * Upstash credentials are true secrets (never `VITE_`-prefixed).
 */
function createEnv<T extends z.ZodType>(schema: T): () => z.infer<T> {
  let cached: z.infer<T> | undefined;
  return () => (cached ??= schema.parse(process.env));
}

export const supabaseEnv = createEnv(
  z.object({
    VITE_SUPABASE_URL: z.string().min(1, 'VITE_SUPABASE_URL is required'),
    VITE_SUPABASE_PUBLISHABLE_KEY: z
      .string()
      .min(1, 'VITE_SUPABASE_PUBLISHABLE_KEY is required'),
  })
);

export const openaiEnv = createEnv(
  z.object({
    OPENAI_API_KEY: z.string().min(1, 'OPENAI_API_KEY is required'),
  })
);

export const upstashEnv = createEnv(
  z.object({
    UPSTASH_REDIS_REST_URL: z.string().min(1, 'UPSTASH_REDIS_REST_URL is required'),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1, 'UPSTASH_REDIS_REST_TOKEN is required'),
  })
);
