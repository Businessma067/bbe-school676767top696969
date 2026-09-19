/**
 * Wirtschaft verstehen (WU WiSo Aufnahmeprüfung) TOC for Full WiSo Course.
 * Chapter 4 has no BBE/Fuhrmann counterpart — bank stays empty until authored.
 * Chapter 2 is WiSo-native (authored §2.1–§2.6).
 */

export type WisoEconomicsSubtopic = {
  id: string;
  chapter: number;
  title: string;
  /** True when BBE Full Course cases have been remapped into this subsection. */
  hasMappedBank: boolean;
};

export type WisoEconomicsChapterToc = {
  num: number;
  title: string;
  enabled: boolean;
  /** Empty bank until WiSo-native content exists (sustainability / digitalisation). */
  blank: boolean;
  subtopics: WisoEconomicsSubtopic[];
};

export const WISO_ECONOMICS_BOOK_TOC: WisoEconomicsChapterToc[] = [
  {
    num: 1,
    title: "Grundlagen der Wirtschaft",
    enabled: true,
    blank: false,
    subtopics: [
      {
        id: "1.1",
        chapter: 1,
        title: "Wirtschaftskreislauf",
        hasMappedBank: true,
      },
      {
        id: "1.2",
        chapter: 1,
        title: "Knappheit und Opportunitätskosten",
        hasMappedBank: true,
      },
      {
        id: "1.3",
        chapter: 1,
        title: "Arbeitsteilung und Spezialisierung",
        hasMappedBank: true,
      },
      {
        id: "1.4",
        chapter: 1,
        title: "Geld, Zinsen und Inflation",
        hasMappedBank: true,
      },
    ],
  },
  {
    num: 2,
    title: "Wirtschaft, Gesellschaft und Umwelt",
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
        title: "Nachhaltigkeit und planetare Grenzen",
        hasMappedBank: true,
      },
      {
        id: "2.3",
        chapter: 2,
        title: "Entkopplung von Wachstum und Umweltschäden",
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
    title: "Unternehmensgrundlagen",
    enabled: true,
    blank: false,
    subtopics: [
      {
        id: "3.1",
        chapter: 3,
        title: "Unternehmensarten und Rechtsformen",
        hasMappedBank: true,
      },
      {
        id: "3.2",
        chapter: 3,
        title: "Eigentum und Finanzierungsquellen",
        hasMappedBank: true,
      },
      {
        id: "3.3",
        chapter: 3,
        title: "Rechnungswesen",
        hasMappedBank: true,
      },
    ],
  },
  {
    num: 4,
    title: "Digitalisierung",
    enabled: true,
    blank: true,
    subtopics: [
      {
        id: "4.1",
        chapter: 4,
        title: "Digitale Transformation und Geschäftsmodelle",
        hasMappedBank: false,
      },
      {
        id: "4.2",
        chapter: 4,
        title: "Internetplattformen",
        hasMappedBank: false,
      },
      {
        id: "4.3",
        chapter: 4,
        title: "Wirtschaftsinformatik",
        hasMappedBank: false,
      },
    ],
  },
];

/**
 * BBE Fuhrmann subsection → Wirtschaft verstehen subsection.
 * Ch.4 digitalisation intentionally omitted until authored.
 * BBE marketing (5.x) is not part of the WiSo foundations TOC — excluded.
 * Money/inflation cases are reclassified from basics via keyword override in the build script.
 */
export const BBE_TO_WISO_ECON_SUBSECTION: Record<string, string> = {
  // WiSo 1.x ← BBE ch.2 basics
  "2.1": "1.2", // being part of the economy → scarcity / economising
  "2.2": "1.2", // scarcity & opportunity cost
  "2.3": "1.2", // economic decisions under scarcity
  "2.4": "1.1", // circular flow (+ specialisation override → 1.3)
  "2.5": "1.1", // economic systems in the circular-flow picture
  "2.6": "1.1", // supply & demand / market meeting
  "2.7": "1.1", // competition
  // WiSo 3.x ← BBE businesses / ownership / accounting (no marketing)
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.1", // legal forms with Unternehmensarten
  "4.2": "3.1",
  "4.3": "3.1",
  "4.4": "3.1",
  "4.5": "3.2", // sources of finance
  "4.6": "3.2",
  "6.1": "3.3",
  "6.2": "3.3",
  "6.3": "3.3",
  "6.4": "3.3",
  "6.5": "3.3",
};

/** Keywords that pull a 2.4 case into WiSo 1.3 (specialisation / division of labour). */
export const WISO_1_3_KEYWORDS = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "arbeitsteilung",
  "spezialisierung",
] as const;

/**
 * Keywords that pull a basics case into WiSo 1.4 (money, interest, inflation).
 * Prefer title/strong topical hits over incidental euro amounts.
 */
/** Title-only cues used by the build script for WiSo 1.4. */
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

export function getEnabledWisoEconomicsChapters(): WisoEconomicsChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}
