/**
 * Lightweight WiSo Custom Mock Builder table of contents.
 * Do not import Full Course task banks here — those stay server-only.
 */

import { WISO_ECONOMICS_BOOK_TOC } from "@/data/wiso-economics-subtopics";
import type { WisoCustomMockSubjectId } from "@/config/wiso-custom-mock-builder";

export type WisoBuilderSubjectId = WisoCustomMockSubjectId;

export type WisoCustomMockSubtopic = {
  id: string;
  chapter: number;
  title: string;
};

export type WisoCustomMockChapterToc = {
  num: number;
  title: string;
  /** Picker heading, e.g. "Kapitel 2" or "Texte". */
  heading: string;
  enabled: boolean;
  subtopics: WisoCustomMockSubtopic[];
};

function toChapterToc(
  num: number,
  title: string,
  heading: string,
  subtopics: WisoCustomMockSubtopic[],
): WisoCustomMockChapterToc {
  return { num, title, heading, enabled: true, subtopics };
}

function subs(
  chapter: number,
  items: { id: string; title: string }[],
): WisoCustomMockSubtopic[] {
  return items.map((s) => ({ id: s.id, chapter, title: s.title }));
}

/** Client-safe German reading TOC (titles only — no Full Course bank). */
const WISO_GERMAN_TEXT_TOPICS: { id: string; title: string }[] = [
  { id: "t.1", title: "Die Vier-Tage-Woche und die Produktivitätsdebatte" },
  { id: "t.2", title: "Dynamische Preise und algorithmische Preisdiskriminierung" },
  { id: "t.3", title: "Der klassische Goldstandard und sein Zusammenbruch" },
  { id: "t.4", title: "Reshoring, Nearshoring und die Neuordnung globaler Lieferketten" },
  { id: "t.5", title: "Der Marshallplan und die Politik der wirtschaftlichen Erholung" },
  { id: "t.6", title: "Nudging und die Grenzen verhaltensökonomischer Politik" },
  { id: "t.7", title: "Antibiotikaresistenz und die Ökonomie der Entdeckungslücke" },
  { id: "t.8", title: "Fachkräftemangel, Zuwanderung und der deutsche Arbeitsmarkt" },
  { id: "t.9", title: "CO₂-Bepreisung und die Debatte um klimapolitische Instrumente" },
  { id: "t.10", title: "Plattformökonomie, Gig-Work und die Zukunft der Erwerbsarbeit" },
];

export function getWisoEconomicsBuilderChapters(): WisoCustomMockChapterToc[] {
  return WISO_ECONOMICS_BOOK_TOC.filter((c) => c.enabled && !c.blank).map((c) =>
    toChapterToc(
      c.num,
      c.title,
      `Kapitel ${c.num}`,
      c.subtopics
        .filter((s) => s.hasMappedBank)
        .map((s) => ({
          id: s.id,
          chapter: s.chapter,
          title: s.title,
        })),
    ),
  );
}

/** Same chapter map as WiSo Full Course math practice (German titles). */
export function getWisoMathBuilderChapters(): WisoCustomMockChapterToc[] {
  return [
    toChapterToc(
      1,
      "Logik",
      "Kapitel 1",
      subs(1, [
        { id: "1.1", title: "Mengen: Elemente, Teilmengen & Potenzmengen" },
        { id: "1.2", title: "Mengenoperationen, Komplemente & Abzählen" },
        { id: "1.3", title: "Aussagenlogik & Implikationen" },
        { id: "1.4", title: "Quantoren, Gültigkeit & Schlussfolgern" },
        { id: "1.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      2,
      "Elementare Algebra",
      "Kapitel 2",
      subs(2, [
        { id: "2.1", title: "Ausmultiplizieren, Faktorisieren und Identitäten" },
        { id: "2.2", title: "Rationale Ausdrücke und algebraische Brüche" },
        { id: "2.3", title: "Potenzen, Wurzeln und negative Exponenten" },
        { id: "2.4", title: "Betrag und algebraisches Umformen" },
        { id: "2.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      3,
      "Finanzmathematik",
      "Kapitel 3",
      subs(3, [
        { id: "3.1", title: "Zinsperioden und Effektivzinsen" },
        { id: "3.2", title: "Stetige Verzinsung" },
        { id: "3.3", title: "Barwert" },
        { id: "3.4", title: "Geometrische Reihen" },
        { id: "3.5", title: "Renten, vorschüssige Renten & ewige Renten" },
        { id: "3.6", title: "Hypothekenrückzahlung" },
        { id: "3.7", title: "Interner Zinsfuß" },
        { id: "3.8", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      4,
      "Gleichungen",
      "Kapitel 4",
      subs(4, [
        { id: "4.1", title: "Lineare Gleichungen mit einer Unbekannten" },
        { id: "4.2", title: "Quadratische Gleichungen" },
        { id: "4.3", title: "Rationale, Wurzel- und Betragsgleichungen" },
        { id: "4.4", title: "Exponential- und Logarithmusgleichungen" },
        { id: "4.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      5,
      "Lineare Gleichungen mit zwei Unbekannten",
      "Kapitel 5",
      subs(5, [
        { id: "5", title: "Lineare Gleichungen mit zwei Unbekannten" },
        { id: "5.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      6,
      "Ungleichungen",
      "Kapitel 6",
      subs(6, [
        { id: "6.1", title: "Rationale Ungleichungen" },
        { id: "6.2", title: "Quadratische Vorzeichen-Ungleichungen" },
        { id: "6.3", title: "Zusammengesetzte & spezielle Ungleichungen" },
        { id: "6.4", title: "Textaufgaben" },
        { id: "6.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      7,
      "Lineare und quadratische Funktionen",
      "Kapitel 7",
      subs(7, [
        { id: "7", title: "Lineare und quadratische Funktionen" },
        { id: "7.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      8,
      "Potenzfunktionen",
      "Kapitel 8",
      subs(8, [
        { id: "8", title: "Potenzfunktionen" },
        { id: "8.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      9,
      "Polynomfunktionen",
      "Kapitel 9",
      subs(9, [
        { id: "9", title: "Polynomfunktionen" },
        { id: "9.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      10,
      "Exponential- und Logarithmusfunktionen",
      "Kapitel 10",
      subs(10, [
        { id: "10.1", title: "Exponentialfunktionen" },
        { id: "10.2", title: "Logarithmusfunktionen" },
        { id: "10.3", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      11,
      "Differenzialrechnung und Optimierung",
      "Kapitel 11",
      subs(11, [
        { id: "11.1", title: "Differenziationsregeln & Technik" },
        { id: "11.2", title: "Ökonomische Interpretation der Ableitung" },
        { id: "11.3", title: "Optima finden und klassifizieren" },
        { id: "11.4", title: "Graphen ohne Algebra lesen" },
        { id: "11.5", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      12,
      "Elementare Wahrscheinlichkeitsrechnung",
      "Kapitel 12",
      subs(12, [
        { id: "12.1", title: "Kombinatorische Wahrscheinlichkeit" },
        { id: "12.2", title: "Einschluss-Ausschluss" },
        { id: "12.3", title: "Bedingte Wahrscheinlichkeit" },
        { id: "12.4", title: "Erwartungswert, Varianz & Standardabweichung" },
        { id: "12.5", title: "Satz von Bayes" },
        { id: "12.6", title: "Prüfungsstil" },
      ]),
    ),
    toChapterToc(
      13,
      "Binomialverteilung",
      "Kapitel 13",
      subs(13, [
        { id: "13", title: "Binomialverteilung" },
        { id: "13.5", title: "Prüfungsstil" },
      ]),
    ),
  ];
}

export function getWisoGermanBuilderChapters(): WisoCustomMockChapterToc[] {
  return [
    toChapterToc(
      1,
      "Texte",
      "Texte",
      WISO_GERMAN_TEXT_TOPICS.map((s) => ({
        id: s.id,
        chapter: 1,
        title: s.title,
      })),
    ),
  ];
}

export function getWisoCustomMockChapters(
  subject: WisoBuilderSubjectId,
): WisoCustomMockChapterToc[] {
  if (subject === "economics") return getWisoEconomicsBuilderChapters();
  if (subject === "math") return getWisoMathBuilderChapters();
  return getWisoGermanBuilderChapters();
}

export function findWisoCustomMockSubtopic(
  subject: WisoBuilderSubjectId,
  id: string,
): WisoCustomMockSubtopic | undefined {
  for (const ch of getWisoCustomMockChapters(subject)) {
    const s = ch.subtopics.find((t) => t.id === id);
    if (s) return s;
  }
  return undefined;
}

export function wisoChaptersFromSubtopicIds(
  subject: WisoBuilderSubjectId,
  ids: string[],
): number[] {
  const set = new Set<number>();
  for (const id of ids) {
    const s = findWisoCustomMockSubtopic(subject, id);
    if (s) set.add(s.chapter);
  }
  return [...set].sort((a, b) => a - b);
}

export function sortWisoSubtopicIds(subject: WisoBuilderSubjectId, ids: string[]): string[] {
  const order = getWisoCustomMockChapters(subject).flatMap((c) => c.subtopics.map((s) => s.id));
  const rank = new Map(order.map((id, i) => [id, i]));
  return [...new Set(ids)].sort((a, b) => (rank.get(a) ?? 999) - (rank.get(b) ?? 999));
}
