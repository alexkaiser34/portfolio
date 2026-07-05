import { z } from 'zod';
import { defineSingle, defineList } from '../model';

export const aboutSchema = z.object({
  paragraphs: z.array(z.string()),
});

export const aboutStatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export type AboutStat = z.infer<typeof aboutStatSchema>;

/** Composite shape consumed by the About section of the site. */
export interface About {
  paragraphs: string[];
  stats: AboutStat[];
}

export const aboutModel = defineSingle({
  table: 'about',
  schema: aboutSchema,
  section: 'ABOUT',
  render: (a) => a.paragraphs.map((p) => `- ${p}`).join('\n'),
});

export const aboutStatsModel = defineList({
  table: 'about_stats',
  schema: aboutStatSchema,
  section: 'HIGHLIGHTS',
  renderItem: (s) => `- ${s.value} ${s.label}`,
});
