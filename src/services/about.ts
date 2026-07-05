import { supabase } from '@/lib/supabase';
import { fetchSingle, fetchList } from '@shared/repository';
import { aboutModel, aboutStatsModel, type About } from '@shared/models';
import { cached } from './cache';

export type { About, AboutStat } from '@shared/models';

export const getAbout = () =>
  cached('about', async (): Promise<About> => {
    const [about, stats] = await Promise.all([
      fetchSingle(supabase, aboutModel),
      fetchList(supabase, aboutStatsModel),
    ]);
    return { paragraphs: about.paragraphs, stats };
  });
