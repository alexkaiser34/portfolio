import { supabase } from '@/lib/supabase';
import { fetchList } from '@shared/repository';
import { workModel, educationModel, type Resume } from '@shared/models';
import { cached } from './cache';

export type { Resume, WorkItem, EducationItem } from '@shared/models';

export const getResume = () =>
  cached('resume', async (): Promise<Resume> => {
    const [work, education] = await Promise.all([
      fetchList(supabase, workModel),
      fetchList(supabase, educationModel),
    ]);
    return { work, education };
  });
