import { z } from 'zod';
import { defineList } from '../model';

export const expertiseSchema = z.object({
  title: z.string(),
  description: z.string(),
  /** Icon name resolved via the icon registry in components/shared/icons. */
  icon: z.string(),
});

export type Expertise = z.infer<typeof expertiseSchema>;

export const expertiseModel = defineList({
  table: 'expertise',
  schema: expertiseSchema,
  section: 'AREAS OF EXPERTISE',
  renderItem: (e) => `- ${e.title}: ${e.description}`,
});
