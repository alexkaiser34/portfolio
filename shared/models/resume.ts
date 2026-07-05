import { z } from 'zod';
import { defineList } from '../model';

export const workItemSchema = z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  location: z.string(),
  description: z.string(),
  points: z.array(z.string()),
  tech: z.array(z.string()),
});

export type WorkItem = z.infer<typeof workItemSchema>;

export const educationItemSchema = z.object({
  school: z.string(),
  degree: z.string(),
  period: z.string(),
  location: z.string(),
  link: z.string(),
  points: z.array(z.string()),
});

export type EducationItem = z.infer<typeof educationItemSchema>;

/** Composite shape consumed by the Resume section of the site. */
export interface Resume {
  work: WorkItem[];
  education: EducationItem[];
}

export const workModel = defineList({
  table: 'work_experience',
  schema: workItemSchema,
  section: 'WORK EXPERIENCE',
  renderItem: (w) =>
    `- ${w.role} at ${w.company} (${w.period}, ${w.location})\n  ${w.description}\n  ${w.points
      .map((p) => `• ${p}`)
      .join('\n  ')}\n  Tech: ${w.tech.join(', ')}`,
});

export const educationModel = defineList({
  table: 'education',
  schema: educationItemSchema,
  section: 'EDUCATION',
  renderItem: (e) =>
    `- ${e.degree}, ${e.school} (${e.period}, ${e.location})\n  ${e.points
      .map((p) => `• ${p}`)
      .join('\n  ')}`,
});
