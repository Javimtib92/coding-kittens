import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

type RemoveLocale<S extends string> =
  S extends `${infer Category}/${infer Slug}/${infer _Locale}`
    ? `${Category}/${Slug}`
    : S;

export type ExtendedBlogEntry = {
  [K in keyof Omit<
    CollectionEntry<'blog'>,
    'slug'
  >]: CollectionEntry<'blog'>[K];
} & {
  category: string;
  slug: RemoveLocale<string>;
  locale: string;
};

export async function getBlogCollection(
  locale?: string,
  filter?: (entry: CollectionEntry<'blog'>) => boolean
): Promise<ExtendedBlogEntry[]> {
  return (await getCollection('blog', filter))
    .map((post) => {
      const segments = post.slug.split('/');
      const category = segments[0];
      const slug = segments[1] as RemoveLocale<CollectionEntry<'blog'>['slug']>;
      const locale = segments[2];

      return {
        ...post,
        category,
        slug,
        locale,
      };
    })
    .filter((post) => {
      if (!locale) {
        return true;
      }
      return post.locale === locale;
    });
}

export async function getHomePage(locale = 'en') {
  return getEntry('home', locale);
}
