import { createClient } from '@supabase/supabase-js';
import { env } from './env';

/**
 * Browser Supabase client using the publishable key. All content tables are
 * exposed via RLS with read-only (SELECT) policies, so this client can only
 * read public portfolio data — never write.
 */
export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY);
