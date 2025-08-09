import { type CollectionEntry, getCollection, getEntry } from "astro:content";

type RemoveLocale<S extends string> =
  S extends `${infer Category}/${infer Slug}/${infer _Locale}`
    ? `${Category}/${Slug}`
    : S;

export type ExtendedBlogEntry = CollectionEntry<"blog"> & {
  id: RemoveLocale<string>;
  category: string;
  locale: string;
};

export async function getBlogCollection(
  locale?: string,
  filter?: (entry: CollectionEntry<"blog">) => boolean,
): Promise<ExtendedBlogEntry[]> {
  return (await getCollection("blog", filter))
    .map((post) => {
      const segments = post.id.split("/");

      const category = segments[0];
      const id = segments[1] as RemoveLocale<CollectionEntry<"blog">["id"]>;
      const locale = segments[2];

      return {
        ...post,
        id,
        category,
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

export async function getHomePage(locale = "en") {
  return getEntry("home", locale);
}
