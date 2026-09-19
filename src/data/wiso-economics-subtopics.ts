/**
 * Wirtschaft verstehen 2026 (WU WiSo Aufnahmeprüfung) TOC for Full WiSo Course.
 * Subsection IDs match the official Lernunterlage Inhaltsverzeichnis.
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
      {
        id: "1.1",
        chapter: 1,
        title: "Jeder Mensch ist Teil der Wirtschaft",
        hasMappedBank: true,
      },
      {
        id: "1.2",
        chapter: 1,
        title: "Arbeitsteilung und Spezialisierung",
        hasMappedBank: true,
      },
      {
        id: "1.3",
        chapter: 1,
        title: "Knappheit und ökonomische Entscheidungen",
        hasMappedBank: true,
      },
      {
        id: "1.4",
        chapter: 1,
        title: "Der Wirtschaftskreislauf",
        hasMappedBank: true,
      },
      {
        id: "1.5",
        chapter: 1,
        title: "Geld als Tauschmittel im Wirtschaftskreislauf",
        hasMappedBank: true,
      },
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
      {
        id: "2.2",
        chapter: 2,
        title: "Nachhaltigkeit",
        hasMappedBank: true,
      },
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
      {
        id: "2.5",
        chapter: 2,
        title: "Soziales Wohlbefinden als Ziel nachhaltigen Wirtschaftens",
        hasMappedBank: true,
      },
      {
        id: "2.6",
        chapter: 2,
        title:
          "Gesellschaftliche Voraussetzungen für subjektives Wohlbefinden und Nachhaltigkeit",
        hasMappedBank: true,
      },
    ],
  },
  {
    num: 3,
    title: "Was Wirtschaften für Unternehmen bedeutet",
    enabled: true,
    blank: false,
    subtopics: [
      {
        id: "3.1",
        chapter: 3,
        title: "Unternehmensarten",
        hasMappedBank: true,
      },
      {
        id: "3.2",
        chapter: 3,
        title: "Rechtsformen von Unternehmen",
        hasMappedBank: true,
      },
      {
        id: "3.3",
        chapter: 3,
        title: "Finanzielle Mittel aufbringen",
        hasMappedBank: true,
      },
      {
        id: "3.4",
        chapter: 3,
        title: "Rechnungswesen",
        hasMappedBank: true,
      },
      {
        id: "3.5",
        chapter: 3,
        title: "Marketing",
        hasMappedBank: true,
      },
    ],
  },
  {
    num: 4,
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    enabled: true,
    blank: false,
    subtopics: [
      {
        id: "4.1",
        chapter: 4,
        title: "Digitale Transformation",
        hasMappedBank: true,
      },
      {
        id: "4.2",
        chapter: 4,
        title: "Neue Produkte, Dienstleistungen und Geschäftsmodelle",
        hasMappedBank: true,
      },
      {
        id: "4.3",
        chapter: 4,
        title: "Das Internet als Plattform für Unternehmen",
        hasMappedBank: true,
      },
      {
        id: "4.4",
        chapter: 4,
        title: "Wirtschaftsinformatik als übergreifende Disziplin",
        hasMappedBank: true,
      },
    ],
  },
];

/**
 * BBE Fuhrmann subsection → Wirtschaft verstehen 2026 subsection.
 * Ch.2 is WiSo-native (not remapped from BBE).
 * Ch.4 digitalisation has no BBE counterpart — authored from the Lernunterlage.
 */
export const BBE_TO_WISO_ECON_SUBSECTION: Record<string, string> = {
  // WiSo 1.x ← BBE ch.2 basics
  "2.1": "1.1", // every person is part of the economy / households & firms
  "2.2": "1.3", // scarcity & opportunity cost
  "2.3": "1.3", // economic decisions under scarcity
  "2.4": "1.4", // circular flow (+ specialisation override → 1.2)
  "2.5": "1.4", // economic systems in the circular-flow picture
  "2.6": "1.4", // supply & demand / market meeting
  "2.7": "1.4", // competition
  // WiSo 3.x ← BBE businesses / ownership / accounting / marketing
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.2", // legal forms
  "4.2": "3.2",
  "4.3": "3.2",
  "4.4": "3.2",
  "4.5": "3.3", // sources of finance
  "4.6": "3.3",
  "5.1": "3.5", // marketing
  "5.2": "3.5",
  "5.3": "3.5",
  "5.4": "3.5",
  "5.5": "3.5",
  "5.6": "3.5",
  "5.7": "3.5",
  "6.1": "3.4",
  "6.2": "3.4",
  "6.3": "3.4",
  "6.4": "3.4",
  "6.5": "3.4",
};

/** Keywords that pull a 2.4 case into WiSo 1.2 (Arbeitsteilung / Spezialisierung). */
export const WISO_1_2_KEYWORDS = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "arbeitsteilung",
  "spezialisierung",
] as const;

/** @deprecated Alias kept for older build scripts. */
export const WISO_1_3_KEYWORDS = WISO_1_2_KEYWORDS;

/**
 * Keywords that pull a basics case into WiSo 1.5 (Geld).
 * Prefer title/strong topical hits over incidental euro amounts.
 */
export const WISO_1_5_TITLE_KEYWORDS = [
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
  "geld",
  "zins",
  "inflation",
  "deflation",
  "kaufkraft",
  "tauschmittel",
  "wertaufbewahrung",
  "rechnungseinheit",
] as const;

/** @deprecated Alias kept for older build scripts. */
export const WISO_1_4_TITLE_KEYWORDS = WISO_1_5_TITLE_KEYWORDS;

export function getEnabledWisoEconomicsChapters(): WisoEconomicsChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}
