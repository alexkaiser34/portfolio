import { z } from 'zod';
import { defineList } from '../model';

export const skillGroupSchema = z.object({
  label: z.string(),
  items: z.array(z.string()),
});

export type SkillGroup = z.infer<typeof skillGroupSchema>;

export const softSkillSchema = z.object({
  title: z.string(),
  description: z.string(),
  /** Icon name resolved via the icon registry in components/shared/icons. */
  icon: z.string(),
});

export type SoftSkill = z.infer<typeof softSkillSchema>;

/** Composite shape consumed by the Skills section of the site. */
export interface Skills {
  technical: SkillGroup[];
  soft: SoftSkill[];
}

export const skillGroupsModel = defineList({
  table: 'skill_groups',
  schema: skillGroupSchema,
  section: 'TECHNICAL SKILLS',
  renderItem: (g) => `- ${g.label}: ${g.items.join(', ')}`,
});

export const softSkillsModel = defineList({
  table: 'soft_skills',
  schema: softSkillSchema,
  section: 'STRENGTHS',
  renderItem: (s) => `- ${s.title}: ${s.description}`,
});
