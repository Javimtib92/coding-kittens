import { defineCollection, z, type CollectionEntry } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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

export function createIsLangEntry(lang: string) {
  return (entry: CollectionEntry<'blog'>): boolean =>
    entry.slug.startsWith(lang + '/');
}

export const isEnglishEntry = createIsLangEntry('en');

export const collections = { blog };
