import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    subtitle: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
    updatedDate: z.coerce.date().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { blog };
