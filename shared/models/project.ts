import { z } from 'zod';
import { defineList } from '../model';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  role: z.string(),
  category: z.string(),
  alignment: z.string(),
  timeline: z.string(),
  image: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  contributions: z.array(z.string()),
  responsibilities: z.array(z.string()),
  company: z
    .string()
    .nullable()
    .optional()
    .transform((v) => v ?? undefined),
});

export type ProjectType = z.infer<typeof projectSchema>;

export const projectsModel = defineList({
  table: 'projects',
  schema: projectSchema,
  section: 'PROJECTS',
  renderItem: (p) =>
    `- ${p.title}${p.company ? ` (${p.company})` : ''} — ${p.role}, ${p.category}, ${p.timeline}\n  ${p.shortDescription}\n  ${p.longDescription}\n  Contributions: ${p.contributions.join(
      ', '
    )}\n  Responsibilities: ${p.responsibilities.join(', ')}`,
});
