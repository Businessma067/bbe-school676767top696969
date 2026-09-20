/**
 * Table of contents for WISO Wirtschaft (Wirtschaft verstehen, Aufnahmeprüfung 2026).
 */

export type WisoEconomicsSubtopic = {
  id: string;
  chapter: number;
  title: string;
  /** True when practice cases exist for this subsection. */
  hasMappedBank: boolean;
};

export type WisoEconomicsChapterToc = {
  num: number;
  title: string;
  enabled: boolean;
  /** Empty bank until WiSo-native content exists. */
  blank: boolean;
  subtopics: WisoEconomicsSubtopic[];
};

export const WISO_ECONOMICS_BOOK_TOC: WisoEconomicsChapterToc[] = [
  {
    num: 1,
    title: "Warum wir wirtschaften und was Wirtschaften bedeutet",
    enabled: true,
    blank: false,
    subtopics: [
      { id: "1.1", chapter: 1, title: "Jeder Mensch ist Teil der Wirtschaft", hasMappedBank: true },
      { id: "1.2", chapter: 1, title: "Arbeitsteilung und Spezialisierung", hasMappedBank: true },
      {
        id: "1.3",
        chapter: 1,
        title: "Knappheit, Entscheidungen und Opportunitätskosten",
        hasMappedBank: true,
      },
      { id: "1.4", chapter: 1, title: "Der Wirtschaftskreislauf", hasMappedBank: true },
      { id: "1.5", chapter: 1, title: "Geld als Tauschmittel", hasMappedBank: true },
    ],
  },
  {
    num: 2,
    title: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    enabled: true,
    blank: false,
    subtopics: [
      {
        id: "2.1",
        chapter: 2,
        title: "Einbettung der Wirtschaft in Gesellschaft und Umwelt",
        hasMappedBank: true,
      },
      { id: "2.2", chapter: 2, title: "Nachhaltigkeit", hasMappedBank: true },
      {
        id: "2.3",
        chapter: 2,
        title: "Entkopplung von Wirtschaftswachstum und Umweltschäden",
        hasMappedBank: true,
      },
      {
        id: "2.4",
        chapter: 2,
        title: "Wirtschaften innerhalb der Erdsystemgrenzen",
        hasMappedBank: true,
      },
      { id: "2.5", chapter: 2, title: "Soziales Wohlbefinden", hasMappedBank: true },
      { id: "2.6", chapter: 2, title: "Gesellschaftliche Voraussetzungen", hasMappedBank: true },
    ],
  },
  {
    num: 3,
    title: "Was Wirtschaften für Unternehmen bedeutet",
    enabled: true,
    blank: false,
    subtopics: [
      { id: "3.1", chapter: 3, title: "Arten von Unternehmen", hasMappedBank: true },
      { id: "3.2", chapter: 3, title: "Rechtsformen von Unternehmen", hasMappedBank: true },
      { id: "3.3", chapter: 3, title: "Finanzielle Mittel", hasMappedBank: true },
      { id: "3.4", chapter: 3, title: "Rechnungswesen", hasMappedBank: true },
      { id: "3.5", chapter: 3, title: "Marketing", hasMappedBank: true },
    ],
  },
  {
    num: 4,
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    enabled: true,
    blank: false,
    subtopics: [
      { id: "4.1", chapter: 4, title: "Digitale Transformation", hasMappedBank: true },
      {
        id: "4.2",
        chapter: 4,
        title: "Neue Produkte, Dienstleistungen und Geschäftsmodelle",
        hasMappedBank: true,
      },
      { id: "4.3", chapter: 4, title: "Das Internet als Plattform", hasMappedBank: true },
      { id: "4.4", chapter: 4, title: "Wirtschaftsinformatik", hasMappedBank: true },
    ],
  },
];

export function getEnabledWisoBookChapters(): WisoEconomicsChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}

export function getEnabledWisoEconomicsChapters(): WisoEconomicsChapterToc[] {
  return getEnabledWisoBookChapters();
}

export function findWisoSubtopic(id: string): WisoEconomicsSubtopic | undefined {
  for (const ch of WISO_ECONOMICS_BOOK_TOC) {
    const s = ch.subtopics.find((t) => t.id === id);
    if (s) return s;
  }
  return undefined;
}

/**
 * BBE Fuhrmann subsection → Wirtschaft verstehen subsection (legacy build mapping).
 */
export const BBE_TO_WISO_ECON_SUBSECTION: Record<string, string> = {
  "2.1": "1.2",
  "2.2": "1.2",
  "2.3": "1.2",
  "2.4": "1.1",
  "2.5": "1.1",
  "2.6": "1.1",
  "2.7": "1.1",
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.1",
  "4.2": "3.1",
  "4.3": "3.1",
  "4.4": "3.1",
  "4.5": "3.2",
  "4.6": "3.2",
  "6.1": "3.3",
  "6.2": "3.3",
  "6.3": "3.3",
  "6.4": "3.3",
  "6.5": "3.3",
};

export const WISO_1_3_KEYWORDS = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "arbeitsteilung",
  "spezialisierung",
] as const;

export const WISO_1_4_TITLE_KEYWORDS = [
  "inflation",
  "hyperinflation",
  "deflation",
  "purchasing power",
  "price level",
  "interest rate",
  "interest rates",
  "monetary policy",
  "central bank",
  "ecb",
  "money's three",
  "three functions",
  "functions of money",
  "medium of exchange",
  "unit of account",
  "store of value",
  "too much money",
  "note-issuance",
  "note issuance",
  "mortgage rate",
  "rate rise",
  "barter",
] as const;
