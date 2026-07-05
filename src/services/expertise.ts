import { supabase } from '@/lib/supabase';
import { fetchList } from '@shared/repository';
import { expertiseModel } from '@shared/models';
import { cached } from './cache';

export type { Expertise } from '@shared/models';

export const getExpertise = () => cached('expertise', () => fetchList(supabase, expertiseModel));
