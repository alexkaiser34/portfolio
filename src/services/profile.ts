import { supabase } from '@/lib/supabase';
import { fetchSingle } from '@shared/repository';
import { profileModel } from '@shared/models';
import { cached } from './cache';

export type { Profile } from '@shared/models';

export const getProfile = () => cached('profile', () => fetchSingle(supabase, profileModel));
