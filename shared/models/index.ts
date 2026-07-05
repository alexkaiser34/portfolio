import { profileModel } from './profile';
import { personalModel } from './personal';
import { aboutModel, aboutStatsModel } from './about';
import { expertiseModel } from './expertise';
import { skillGroupsModel, softSkillsModel } from './skills';
import { workModel, educationModel } from './resume';
import { projectsModel } from './project';
import { recommendationsModel } from './recommendation';
import type { ContentModel } from '../model';

export * from './profile';
export * from './personal';
export * from './about';
export * from './expertise';
export * from './skills';
export * from './recommendation';
export * from './resume';
export * from './project';

/**
 * Ordered registry of every content model. The AI assistant iterates this list
 * to fetch and render the full corpus, and adding a new content type is as
 * simple as defining a model and appending it here.
 */
export const CONTENT_MODELS: ContentModel[] = [
  profileModel,
  personalModel,
  aboutModel,
  aboutStatsModel,
  expertiseModel,
  skillGroupsModel,
  softSkillsModel,
  workModel,
  educationModel,
  projectsModel,
  recommendationsModel,
];
