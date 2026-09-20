/**
 * Table of contents for WISO Wirtschaft (Wirtschaft verstehen, Aufnahmeprüfung 2026).
 */

export type WisoEconomicsSubtopic = {
  id: string;
  chapter: number;
  title: string;
};

export type WisoEconomicsChapterToc = {
  num: number;
  title: string;
  enabled: boolean;
  subtopics: WisoEconomicsSubtopic[];
};

export const WISO_ECONOMICS_BOOK_TOC: WisoEconomicsChapterToc[] = [
  {
    num: 1,
    title: "Warum wir wirtschaften und was Wirtschaften bedeutet",
    enabled: true,
    subtopics: [
      { id: "1.1", chapter: 1, title: "Jeder Mensch ist Teil der Wirtschaft" },
      { id: "1.2", chapter: 1, title: "Arbeitsteilung und Spezialisierung" },
      { id: "1.3", chapter: 1, title: "Knappheit, Entscheidungen und Opportunitätskosten" },
      { id: "1.4", chapter: 1, title: "Der Wirtschaftskreislauf" },
      { id: "1.5", chapter: 1, title: "Geld als Tauschmittel" },
    ],
  },
  {
    num: 2,
    title: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    enabled: true,
    subtopics: [
      { id: "2.1", chapter: 2, title: "Einbettung der Wirtschaft in Gesellschaft und Umwelt" },
      { id: "2.2", chapter: 2, title: "Nachhaltigkeit" },
      { id: "2.3", chapter: 2, title: "Entkopplung von Wirtschaftswachstum und Umweltschäden" },
      { id: "2.4", chapter: 2, title: "Wirtschaften innerhalb der Erdsystemgrenzen" },
      { id: "2.5", chapter: 2, title: "Soziales Wohlbefinden" },
      { id: "2.6", chapter: 2, title: "Gesellschaftliche Voraussetzungen" },
    ],
  },
  {
    num: 3,
    title: "Was Wirtschaften für Unternehmen bedeutet",
    enabled: true,
    subtopics: [
      { id: "3.1", chapter: 3, title: "Arten von Unternehmen" },
      { id: "3.2", chapter: 3, title: "Rechtsformen von Unternehmen" },
      { id: "3.3", chapter: 3, title: "Finanzielle Mittel" },
      { id: "3.4", chapter: 3, title: "Rechnungswesen" },
      { id: "3.5", chapter: 3, title: "Marketing" },
    ],
  },
  {
    num: 4,
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    enabled: true,
    subtopics: [
      { id: "4.1", chapter: 4, title: "Digitale Transformation" },
      { id: "4.2", chapter: 4, title: "Neue Produkte, Dienstleistungen und Geschäftsmodelle" },
      { id: "4.3", chapter: 4, title: "Das Internet als Plattform" },
      { id: "4.4", chapter: 4, title: "Wirtschaftsinformatik" },
    ],
  },
];

export function getEnabledWisoBookChapters(): WisoEconomicsChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled);
}

export function findWisoSubtopic(id: string): WisoEconomicsSubtopic | undefined {
  for (const ch of WISO_ECONOMICS_BOOK_TOC) {
    const s = ch.subtopics.find((t) => t.id === id);
    if (s) return s;
  }
  return undefined;
}
