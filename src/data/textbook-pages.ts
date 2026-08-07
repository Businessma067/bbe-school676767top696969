/**
 * BBE School Economics Full Course — theory page map.
 * Pages are rendered from the branded BBE textbook (public/bbe-theory).
 */
import generated from "./textbook-pages.generated.json";

const pages = generated.CHAPTER_PAGES as Record<string, string[]>;
const titles = generated.CHAPTER_TITLES as Record<string, string>;

export const CHAPTER_TITLES: Record<number, string> = {
  1: "Introduction to business matters",
  2: titles["2"] ?? "Basic economic concepts",
  3: titles["3"] ?? "Focus on different types of businesses",
  4: titles["4"] ?? "Forms of business ownership and sources of finance",
  5: titles["5"] ?? "Marketing",
  6: titles["6"] ?? "Accounting — keeping record of business transactions",
};

export const CHAPTER_PAGES: Record<number, string[]> = {
  2: pages["2"] ?? [],
  3: pages["3"] ?? [],
  4: pages["4"] ?? [],
  5: pages["5"] ?? [],
  6: pages["6"] ?? [],
};
