import { z } from 'zod';

/**
 * Server-side environment variables read from `process.env` inside Vercel
 * functions. The Supabase URL and publishable key are shared with the client
 * via the `VITE_` vars, which are also present in `process.env` at runtime. The
 * server only reads public, RLS-protected content, so the publishable key is
 * sufficient — no secret/service-role key is needed. `OPENAI_API_KEY` and the
 * Upstash credentials are true secrets (never `VITE_`-prefixed).
 */
const serverEnvSchema = z.object({
  OPENAI_API_KEY: z.string().min(1, 'OPENAI_API_KEY is required'),
  VITE_SUPABASE_URL: z.string().min(1, 'VITE_SUPABASE_URL is required'),
  VITE_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .min(1, 'VITE_SUPABASE_PUBLISHABLE_KEY is required'),
  UPSTASH_REDIS_REST_URL: z.string().min(1, 'UPSTASH_REDIS_REST_URL is required'),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1, 'UPSTASH_REDIS_REST_TOKEN is required'),
});

export const serverEnv = serverEnvSchema.parse(process.env);
