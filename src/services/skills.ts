import { supabase } from '@/lib/supabase';
import { fetchList } from '@shared/repository';
import { skillGroupsModel, softSkillsModel, type Skills } from '@shared/models';
import { cached } from './cache';

export type { Skills, SkillGroup, SoftSkill } from '@shared/models';

export const getSkills = () =>
  cached('skills', async (): Promise<Skills> => {
    const [technical, soft] = await Promise.all([
      fetchList(supabase, skillGroupsModel),
      fetchList(supabase, softSkillsModel),
    ]);
    return { technical, soft };
  });
