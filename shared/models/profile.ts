import { z } from 'zod';
import { defineSingle } from '../model';

export const profileSchema = z.object({
  name: z.string(),
  title: z.array(z.string()),
  location: z.string(),
  email: z.string(),
  linkedin: z.string(),
  github: z.string(),
  resumeUrl: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;

export const profileModel = defineSingle({
  table: 'profile',
  schema: profileSchema,
  section: 'PROFILE',
  render: (p) =>
    [
      `- Name: ${p.name}`,
      `- Titles: ${p.title.join(', ')}`,
      `- Location: ${p.location}`,
      `- Email: ${p.email}`,
      `- LinkedIn: ${p.linkedin}`,
      `- GitHub: ${p.github}`,
    ].join('\n'),
});
