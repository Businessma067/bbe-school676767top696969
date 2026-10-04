/** Exam Flip sprint: shared statements scored under BBE or WiSo framing. */

export type FlipItem = {
  id: string;
  textEn: string;
  textDe: string;
  answer: boolean;
  explanationEn: string;
  explanationDe: string;
  trapFamily: "partial-credit" | "wording" | "math-speed" | "concept";
};

export const HYBRID_EXAM_FLIP_ITEMS: FlipItem[] = [
  {
    id: "flip-1",
    textEn: "Under partial-credit scoring, randomly guessing every statement is usually a good strategy.",
    textDe: "Beim Teilpunktesystem ist es meist sinnvoll, jede Aussage zufällig zu raten.",
    answer: false,
    explanationEn: "Wrong answers can subtract points; selective answering often beats blind guessing.",
    explanationDe: "Falsche Antworten können Punkte abziehen; gezieltes Antworten schlägt Blindraten oft.",
    trapFamily: "partial-credit",
  },
  {
    id: "flip-2",
    textEn: "If you are unsure, leaving a statement unanswered can protect points you already earned.",
    textDe: "Wenn du unsicher bist, kann Nicht-Ankreuzen bereits verdiente Punkte schützen.",
    answer: true,
    explanationEn: "Skipping avoids the downside of a wrong mark under penalty scoring.",
    explanationDe: "Auslassen vermeidet den Malus einer falschen Markierung.",
    trapFamily: "partial-credit",
  },
  {
    id: "flip-3",
    textEn: "BBE and WiSo both use English reading as their language pillar.",
    textDe: "BBE und WiSo nutzen beide Englischlesen als Sprachteil.",
    answer: false,
    explanationEn: "BBE tests English; WiSo tests German reading comprehension.",
    explanationDe: "BBE prüft Englisch; WiSo prüft deutsches Leseverständnis.",
    trapFamily: "wording",
  },
  {
    id: "flip-4",
    textEn: "Mathematics content overlaps heavily between the two entrance exams.",
    textDe: "Die Mathematik überschneidet sich zwischen beiden Aufnahmeprüfungen stark.",
    answer: true,
    explanationEn: "Shared math is the core reason Hybrid studies math once.",
    explanationDe: "Gemeinsame Mathematik ist der Kern des Hybrid-Ansatzes.",
    trapFamily: "concept",
  },
  {
    id: "flip-5",
    textEn: "A statement that is 'often true in real life' is automatically true in exam logic.",
    textDe: "Was im echten Leben oft stimmt, ist in der Prüfungslogik automatisch wahr.",
    answer: false,
    explanationEn: "Exam statements are scored on precise economic/math definitions, not vibes.",
    explanationDe: "Prüfungsaussagen folgen präzisen Definitionen, nicht Alltagsintuition.",
    trapFamily: "wording",
  },
  {
    id: "flip-6",
    textEn: "Spending too long on one hard math case can destroy your score even if that case is correct.",
    textDe: "Zu lange an einem schweren Mathefall kann die Punktzahl ruinieren, selbst wenn er stimmt.",
    answer: true,
    explanationEn: "Time management is a scoring skill under a fixed clock.",
    explanationDe: "Zeitmanagement ist unter fester Uhr eine Bewertungsfähigkeit.",
    trapFamily: "math-speed",
  },
  {
    id: "flip-7",
    textEn: "WiSo economics wording follows Wirtschaft verstehen; BBE economics is in English.",
    textDe: "WiSo-Wirtschaft folgt Wirtschaft verstehen; BBE-Economics ist auf Englisch.",
    answer: true,
    explanationEn: "Language overlay is the main econ difference Hybrid trains with Bridge Cases.",
    explanationDe: "Die Sprachschicht ist der Hauptunterschied — dafür gibt es Bridge Cases.",
    trapFamily: "concept",
  },
  {
    id: "flip-8",
    textEn: "You should always answer every statement because unanswered items always score zero with no downside.",
    textDe: "Man sollte jede Aussage ankreuzen, weil Auslassen immer null Punkte ohne Nachteil bedeutet.",
    answer: false,
    explanationEn: "With penalties, unanswered can be better than a wrong guess.",
    explanationDe: "Mit Malus kann Auslassen besser sein als falsch raten.",
    trapFamily: "partial-credit",
  },
];

export type FlipMode = "bbe" | "wiso";

/** Simple flip scoring: +1 correct, −0.5 wrong, 0 skipped — teaches penalty mindset. */
export function scoreFlip(
  answers: Record<string, boolean | null>,
  items: FlipItem[],
): { earned: number; max: number; correct: number; wrong: number; skipped: number } {
  let earned = 0;
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  for (const item of items) {
    const a = answers[item.id];
    if (a === null || a === undefined) {
      skipped += 1;
      continue;
    }
    if (a === item.answer) {
      earned += 1;
      correct += 1;
    } else {
      earned -= 0.5;
      wrong += 1;
    }
  }
  return { earned, max: items.length, correct, wrong, skipped };
}
