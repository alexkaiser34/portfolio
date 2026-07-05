import { z } from 'zod';
import { defineList } from '../model';

export const recommendationSchema = z.object({
  initials: z.string(),
  name: z.string(),
  title: z.string(),
  description: z.string(),
  /** Key resolved to a bundled PDF asset in the RecommendationPage component. */
  fileKey: z.string(),
});

export type Recommendation = z.infer<typeof recommendationSchema>;

export const recommendationsModel = defineList({
  table: 'recommendations',
  schema: recommendationSchema,
  section: 'RECOMMENDATIONS',
  renderItem: (r) => `- ${r.name} (${r.title}): ${r.description}`,
});
