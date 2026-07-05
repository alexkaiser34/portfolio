import { createClient } from '@supabase/supabase-js';
import { serverEnv } from './env';

/**
 * Server-side Supabase client used inside Vercel functions to read portfolio
 * content for the AI assistant. Uses the publishable key (respecting RLS) since
 * it only reads public, read-only content — no secret/service-role key needed.
 */
export const supabaseServer = createClient(
  serverEnv.VITE_SUPABASE_URL,
  serverEnv.VITE_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: { persistSession: false },
  }
);
