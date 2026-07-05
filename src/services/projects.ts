import { supabase } from '@/lib/supabase';
import { fetchList } from '@shared/repository';
import { projectsModel } from '@shared/models';
import { cached } from './cache';

export type { ProjectType } from '@shared/models';

export const getAllProjects = () => cached('projects', () => fetchList(supabase, projectsModel));
