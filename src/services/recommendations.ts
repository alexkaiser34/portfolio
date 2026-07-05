import { supabase } from '@/lib/supabase';
import { fetchList } from '@shared/repository';
import { recommendationsModel } from '@shared/models';
import { cached } from './cache';

export type { Recommendation } from '@shared/models';

export const getRecommendations = () =>
  cached('recommendations', () => fetchList(supabase, recommendationsModel));
