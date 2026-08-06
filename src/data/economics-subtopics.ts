/**
 * Textbook table of contents for Fuhrmann — Introduction to Business and Economics.
 * Used by Custom Mock Builder for chapter / subtopic selection (not DB case serials).
 */

export type EconomicsSubtopic = {
  id: string; // e.g. "2.1"
  chapter: number;
  title: string;
};

export type EconomicsChapterToc = {
  num: number;
  title: string;
  /** Chapters with a complete Full Course question bank. */
  enabled: boolean;
  subtopics: EconomicsSubtopic[];
};

export const ECONOMICS_BOOK_TOC: EconomicsChapterToc[] = [
  {
    num: 2,
    title: "Basic economic concepts",
    enabled: true,
    subtopics: [
      { id: "2.1", chapter: 2, title: "Being part of the economy" },
      { id: "2.2", chapter: 2, title: "Scarcity of resources and opportunity cost" },
      { id: "2.3", chapter: 2, title: "Economics is the study of economic decisions" },
      {
        id: "2.4",
        chapter: 2,
        title: "Exchanging goods and services creates a circular flow and division of labour",
      },
      { id: "2.5", chapter: 2, title: "Different economic systems" },
      {
        id: "2.6",
        chapter: 2,
        title: "Supply and demand: households, businesses and the government meet in the market",
      },
      { id: "2.7", chapter: 2, title: "Competition in the market" },
    ],
  },
  {
    num: 3,
    title: "Focus on different types of businesses",
    enabled: true,
    subtopics: [
      { id: "3.1", chapter: 3, title: "Businesses combine different factors of production" },
      {
        id: "3.2",
        chapter: 3,
        title: "Businesses operate in the primary, secondary and/or tertiary sector",
      },
      { id: "3.3", chapter: 3, title: "Businesses can be profit-oriented or not-for-profit" },
      { id: "3.4", chapter: 3, title: 'Businesses come "in all sizes": large and small' },
      { id: "3.5", chapter: 3, title: "Businesses may be local, national or international" },
      {
        id: "3.6",
        chapter: 3,
        title: "Businesses operate in an environment – stakeholders are important",
      },
    ],
  },
  {
    num: 4,
    title: "Forms of business ownership and sources of finance",
    enabled: true,
    subtopics: [
      { id: "4.1", chapter: 4, title: "Sole proprietorship / sole traders" },
      { id: "4.2", chapter: 4, title: "Partnership" },
      { id: "4.3", chapter: 4, title: "Corporations" },
      { id: "4.4", chapter: 4, title: "Summary: Overview of forms of business ownership" },
      { id: "4.5", chapter: 4, title: "Overview of sources of finance" },
      { id: "4.6", chapter: 4, title: "The choice of the source of finance" },
    ],
  },
  {
    num: 5,
    title: "Marketing",
    enabled: true,
    subtopics: [
      { id: "5.1", chapter: 5, title: "What a product is" },
      { id: "5.2", chapter: 5, title: "Objectives of marketing" },
      { id: "5.3", chapter: 5, title: "Product orientation versus market orientation" },
      { id: "5.4", chapter: 5, title: "The need for more responsibility and sustainability" },
      { id: "5.5", chapter: 5, title: "Market research" },
      { id: "5.6", chapter: 5, title: "Market segmentation and targeting strategies" },
      { id: "5.7", chapter: 5, title: "The marketing mix" },
    ],
  },
  {
    num: 6,
    title: "Accounting — keeping record of business transactions",
    enabled: false,
    subtopics: [
      { id: "6.1", chapter: 6, title: "What a balance sheet is" },
      { id: "6.2", chapter: 6, title: "Other components of the financial statement of a business" },
      {
        id: "6.3",
        chapter: 6,
        title: "What can be learnt from reading a balance sheet and an income statement",
      },
      { id: "6.4", chapter: 6, title: "Use of these accounts – types of accounting" },
      { id: "6.5", chapter: 6, title: "Analysis of financial statements" },
    ],
  },
];

export function getEnabledBookChapters(): EconomicsChapterToc[] {
  return ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}

/** Custom Mock Builder currently ships subtopic banks for chapters 2–3 only. */
export function getCustomMockBookChapters(): EconomicsChapterToc[] {
  return ECONOMICS_BOOK_TOC.filter((c) => c.enabled && (c.num === 2 || c.num === 3));
}

export function findSubtopic(id: string): EconomicsSubtopic | undefined {
  for (const ch of ECONOMICS_BOOK_TOC) {
    const s = ch.subtopics.find((t) => t.id === id);
    if (s) return s;
  }
  return undefined;
}

export function chaptersFromSubtopicIds(ids: string[]): number[] {
  const set = new Set<number>();
  for (const id of ids) {
    const s = findSubtopic(id);
    if (s) set.add(s.chapter);
  }
  return [...set].sort((a, b) => a - b);
}
