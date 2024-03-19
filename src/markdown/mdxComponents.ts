import Heading1 from '~/components/ui/headings/Heading1.astro';
import Heading2 from '~/components/ui/headings/Heading2.astro';
import Heading3 from '~/components/ui/headings/Heading3.astro';
import Heading4 from '~/components/ui/headings/Heading4.astro';
import Heading5 from '~/components/ui/headings/Heading5.astro';
import Paragraph from '~/components/ui/Paragraph.astro';
import Quote from '~/components/ui/Quote.astro';
import Link from '~/components/ui/Link.astro';
import UnorderedList from '~/components/ui/UnorderedList.astro';
import OrderedList from '~/components/ui/OrderedList.astro';
import ListItem from '~/components/ui/ListItem.astro';

export const mdxComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  p: Paragraph,
  a: Link,
  blockquote: Quote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
};
