import { z } from 'zod';

/**
 * Client-side environment variables. Only `VITE_`-prefixed values are exposed
 * to the browser by Vite. Validated once at startup so misconfiguration fails
 * fast and loudly instead of surfacing as confusing runtime errors.
 */
const clientEnvSchema = z.object({
  VITE_SUPABASE_URL: z.string().min(1, 'VITE_SUPABASE_URL is required'),
  VITE_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .min(1, 'VITE_SUPABASE_PUBLISHABLE_KEY is required'),
});

export const env = clientEnvSchema.parse(import.meta.env);
