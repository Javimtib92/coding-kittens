import { type CollectionEntry, defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),

  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDescription: z.string(),
      subtitle: z.string(),
      pubDate: z.coerce.date(),
      draft: z.boolean().optional(),
      updatedDate: z.coerce.date().optional(),
      thumbnail: image(),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/home' }),
});

export function createIsLangEntry(lang: string) {
  return (entry: CollectionEntry<'blog'>): boolean =>
    entry.id.startsWith(`${lang}/`);
}

export const isEnglishEntry = createIsLangEntry('en');

export const collections = { blog, home };
