import { getCollection } from "astro:content";
import { isEnglishEntry } from "~/content.config";

export const allPages = await getCollection("blog");

export const englishPages = allPages.filter(isEnglishEntry);
