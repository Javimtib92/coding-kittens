import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const translateReadingTime = (text, locale) => {
  if (locale === 'en') {
    return text;
  }

  if (locale === 'es' || locale === 'ca') {
    return text.replace('read', 'de lectura');
  }
};

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
