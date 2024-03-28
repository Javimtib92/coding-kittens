import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '~/constants';
import { getBlogCollection } from '~/utils/content';
import { languages } from '~/i18n/ui';

export const getStaticPaths = () =>
  Object.keys(languages).map((locale) => ({ params: { locale } }));

export async function GET(context) {
  const { locale } = context.params;

  const posts = await getBlogCollection(locale);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${locale}/blog/${post.category}/${post.slug}/`,
    })),
  });
}
