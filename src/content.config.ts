import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resources = defineCollection({
  loader: glob({
    base: './src/content/resources',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['lead-magnet', 'video', 'case-study', 'link', 'guide', 'template']),
    format: z.string().optional(),
    status: z.enum(['coming-soon']).optional(),
    bullets: z.array(z.string()).default([]),
    order: z.number().default(0),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
    example: z.boolean().default(false),
    youtubeId: z.string().optional(),
    externalUrl: z.string().url().optional(),
    gated: z.boolean().default(false),
    notice: z.string().optional(),
    gate: z
      .object({
        title: z.string(),
        body: z.string(),
        button: z.string(),
      })
      .optional(),
  }),
});

export const collections = { resources };
