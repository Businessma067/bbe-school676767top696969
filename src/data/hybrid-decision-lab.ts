/** Decision Lab: comparative diagnostic lean BBE vs WiSo. */

export type DecisionQuestion = {
  id: string;
  prompt: string;
  options: { id: string; label: string; lean: "bbe" | "wiso" | "neutral"; weight: number }[];
};

export const HYBRID_DECISION_QUESTIONS: DecisionQuestion[] = [
  {
    id: "d1",
    prompt: "Which language do you want to study your bachelor programme in?",
    options: [
      { id: "a", label: "Fully in English", lean: "bbe", weight: 3 },
      { id: "b", label: "Fully in German", lean: "wiso", weight: 3 },
      { id: "c", label: "Still deciding / bilingual comfort", lean: "neutral", weight: 1 },
    ],
  },
  {
    id: "d2",
    prompt: "How do you feel about a highly selective intake (~240 places)?",
    options: [
      { id: "a", label: "I want that competitive English track", lean: "bbe", weight: 2 },
      { id: "b", label: "I prefer a broader intake (~2,703)", lean: "wiso", weight: 2 },
      { id: "c", label: "Selectivity is not my main filter", lean: "neutral", weight: 1 },
    ],
  },
  {
    id: "d3",
    prompt: "Which language section feels more natural under time pressure?",
    options: [
      { id: "a", label: "English grammar / reading", lean: "bbe", weight: 3 },
      { id: "b", label: "German reading comprehension", lean: "wiso", weight: 3 },
      { id: "c", label: "Roughly similar / untested", lean: "neutral", weight: 1 },
    ],
  },
  {
    id: "d4",
    prompt: "Do you need a possible summer-semester start after admission?",
    options: [
      { id: "a", label: "Winter start only is fine", lean: "bbe", weight: 1 },
      { id: "b", label: "Winter or summer flexibility matters", lean: "wiso", weight: 2 },
      { id: "c", label: "Not sure yet", lean: "neutral", weight: 1 },
    ],
  },
  {
    id: "d5",
    prompt: "How is your German for academic reading right now?",
    options: [
      { id: "a", label: "Weak / would need heavy work for WiSo", lean: "bbe", weight: 2 },
      { id: "b", label: "Strong enough for dense German passages", lean: "wiso", weight: 2 },
      { id: "c", label: "Improving — Hybrid helps me keep both open", lean: "neutral", weight: 1 },
    ],
  },
  {
    id: "d6",
    prompt: "What is your main reason for considering both exams?",
    options: [
      { id: "a", label: "Backup if BBE is too selective", lean: "wiso", weight: 1 },
      { id: "b", label: "Backup if German track fits better later", lean: "bbe", weight: 1 },
      { id: "c", label: "I genuinely might sit either", lean: "neutral", weight: 2 },
    ],
  },
];

export type DecisionResult = {
  lean: "bbe" | "wiso" | "close";
  bbeScore: number;
  wisoScore: number;
  summary: string;
};

export function scoreDecision(answers: Record<string, string>): DecisionResult {
  let bbeScore = 0;
  let wisoScore = 0;
  for (const q of HYBRID_DECISION_QUESTIONS) {
    const chosen = q.options.find((o) => o.id === answers[q.id]);
    if (!chosen) continue;
    if (chosen.lean === "bbe") bbeScore += chosen.weight;
    if (chosen.lean === "wiso") wisoScore += chosen.weight;
  }
  const diff = bbeScore - wisoScore;
  if (Math.abs(diff) <= 2) {
    return {
      lean: "close",
      bbeScore,
      wisoScore,
      summary:
        "Too close to call — keep Hybrid shared-first training and re-run Decision Lab after two weeks of Bridge + language lanes.",
    };
  }
  if (diff > 0) {
    return {
      lean: "bbe",
      bbeScore,
      wisoScore,
      summary:
        "Current edge: BBE. Keep Shared Math + Bridge, push the English lane harder, and still maintain light German so WiSo stays open as a backup.",
    };
  }
  return {
    lean: "wiso",
    bbeScore,
    wisoScore,
    summary:
      "Current edge: WiSo. Keep Shared Math + Bridge, push German reading, and keep light English so you do not close the BBE door too early.",
  };
}
