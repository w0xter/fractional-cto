import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), summary: z.string(), role: z.string(), stage: z.string(),
    client: z.string().optional(), context: z.string().optional(),
    capabilities: z.array(z.string()), kind: z.enum(['deep', 'summary']),
    featured: z.boolean().default(false), order: z.number(),
    facts: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  }),
});
const decisions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/decisions' }),
  schema: z.object({
    title: z.string(), summary: z.string(), domain: z.string(),
    projectIds: z.array(z.string()), order: z.number(),
  }),
});
export const collections = { projects, decisions };
