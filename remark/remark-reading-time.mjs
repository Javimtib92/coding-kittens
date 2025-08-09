import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export const translateReadingTime = (text, locale) => {
  if (locale === "en") {
    return text;
  }

  if (locale === "es" || locale === "ca") {
    return text.replace("read", "de lectura");
  }
};

export function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = mdastToString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
