/**
 * Wirtschaft verstehen (WU WiSo Aufnahmeprüfung 2026/27) TOC for Full WiSo Course.
 * Chapters 2 and 4 have no BBE/Fuhrmann counterpart — banks stay empty until authored.
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
        title: "Arbeitsteilung und Spezialisierung kennzeichnen unsere Wirtschaft",
        hasMappedBank: true,
      },
      {
        id: "1.3",
        chapter: 1,
        title:
          "Wirtschaften bedeutet Entscheidungen zu treffen, wofür die knappen Ressourcen eingesetzt werden",
        hasMappedBank: true,
      },
      {
        id: "1.4",
        chapter: 1,
        title: "Der Wirtschaftskreislauf – am Wirtschaftsleben sind viele beteiligt",
        hasMappedBank: true,
      },
      {
        id: "1.5",
        chapter: 1,
        title: "Geld als Tauschmittel im Wirtschaftskreislauf",
        hasMappedBank: false,
      },
    ],
  },
  {
    num: 2,
    title: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    enabled: true,
    blank: true,
    subtopics: [
      {
        id: "2.1",
        chapter: 2,
        title: "Einbettung der Wirtschaft in Gesellschaft und Umwelt",
        hasMappedBank: false,
      },
      { id: "2.2", chapter: 2, title: "Nachhaltigkeit", hasMappedBank: false },
      {
        id: "2.3",
        chapter: 2,
        title: "Entkopplung von Wirtschaftswachstum und Umweltschäden?",
        hasMappedBank: false,
      },
      {
        id: "2.4",
        chapter: 2,
        title: "Wirtschaften innerhalb der Erdsystemgrenzen",
        hasMappedBank: false,
      },
      {
        id: "2.5",
        chapter: 2,
        title: "Soziales Wohlbefinden als Ziel nachhaltigen Wirtschaftens",
        hasMappedBank: false,
      },
      {
        id: "2.6",
        chapter: 2,
        title: "Gesellschaftliche Voraussetzungen für subjektives Wohlbefinden und Nachhaltigkeit",
        hasMappedBank: false,
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
        title: "Was ist ein Unternehmen und welche Arten von Unternehmen gibt es?",
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
        title: "Wie Unternehmen finanzielle Mittel aufbringen",
        hasMappedBank: true,
      },
      {
        id: "3.4",
        chapter: 3,
        title: "Welche Fragen das Rechnungswesen beantwortet",
        hasMappedBank: true,
      },
      {
        id: "3.5",
        chapter: 3,
        title: "Marketing – kein Erfolg ohne Marktorientierung",
        hasMappedBank: true,
      },
    ],
  },
  {
    num: 4,
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    enabled: true,
    blank: true,
    subtopics: [
      { id: "4.1", chapter: 4, title: "Digitale Transformation", hasMappedBank: false },
      {
        id: "4.2",
        chapter: 4,
        title: "Neue Produkte, Dienstleistungen und Geschäftsmodelle",
        hasMappedBank: false,
      },
      {
        id: "4.3",
        chapter: 4,
        title: "Das Internet als Plattform für Unternehmen",
        hasMappedBank: false,
      },
      {
        id: "4.4",
        chapter: 4,
        title: "Wirtschaftsinformatik als übergreifende Disziplin",
        hasMappedBank: false,
      },
    ],
  },
];

/**
 * BBE Fuhrmann subsection → Wirtschaft verstehen subsection.
 * Ch.2 sustainability and Ch.4 digitalisation intentionally omitted (blank).
 * BBE has no dedicated money/inflation bank → 1.5 stays empty.
 */
export const BBE_TO_WISO_ECON_SUBSECTION: Record<string, string> = {
  // WiSo 1.x ← BBE ch.2 basics
  "2.1": "1.1",
  "2.2": "1.3",
  "2.3": "1.3",
  "2.4": "1.4", // circular flow + division of labour → split below via script override for 1.2
  "2.5": "1.4",
  "2.6": "1.4",
  "2.7": "1.4",
  // WiSo 3.x ← BBE businesses / ownership / marketing / accounting
  "3.1": "3.1",
  "3.2": "3.1",
  "3.3": "3.1",
  "3.4": "3.1",
  "3.5": "3.1",
  "3.6": "3.1",
  "4.1": "3.2",
  "4.2": "3.2",
  "4.3": "3.2",
  "4.4": "3.2",
  "4.5": "3.3",
  "4.6": "3.3",
  "5.1": "3.5",
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

/** Keywords that pull a 2.4 case into WiSo 1.2 (specialisation / division of labour). */
export const WISO_1_2_KEYWORDS = [
  "division of labour",
  "division of labor",
  "specialisation",
  "specialization",
  "specialise",
  "specialize",
  "arbeitsteilung",
] as const;

export function getEnabledWisoEconomicsChapters(): WisoEconomicsChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}
