import { z } from 'zod';
import { defineSingle } from '../model';

/**
 * Personal / narrative content that lets the assistant answer "who is Alex",
 * where he's from, what he's interested in, and his current availability.
 * Consumed primarily by the AI assistant rather than rendered on the site.
 */
export const personalSchema = z.object({
  headline: z.string(),
  bio: z.string(),
  origin: z.string(),
  interests: z.array(z.string()),
  availability: z.string(),
  workPreferences: z.array(z.string()),
});

export type Personal = z.infer<typeof personalSchema>;

export const personalModel = defineSingle({
  table: 'personal',
  schema: personalSchema,
  section: 'WHO ALEX IS',
  render: (p) =>
    [
      `- Headline: ${p.headline}`,
      `- Bio: ${p.bio}`,
      `- Origin: ${p.origin}`,
      `- Interests: ${p.interests.join(', ')}`,
      `- Availability: ${p.availability}`,
      `- Looking for: ${p.workPreferences.join(', ')}`,
    ].join('\n'),
});
