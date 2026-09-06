/**
 * Lightweight Custom Mock Builder table of contents.
 * Do not import Full Course task banks here — those stay server-only.
 */

import {
  getCustomMockBookChapters,
  type EconomicsChapterToc,
  type EconomicsSubtopic,
} from "@/data/economics-subtopics";

export type BuilderSubjectId = "economics" | "math" | "english";

export type CustomMockSubtopic = {
  id: string;
  chapter: number;
  title: string;
};

export type CustomMockChapterToc = {
  num: number;
  title: string;
  /** Picker heading, e.g. "Chapter 2" or "Grammar". */
  heading: string;
  enabled: boolean;
  subtopics: CustomMockSubtopic[];
};

function toChapterToc(
  num: number,
  title: string,
  heading: string,
  subtopics: CustomMockSubtopic[],
): CustomMockChapterToc {
  return { num, title, heading, enabled: true, subtopics };
}

function subs(
  chapter: number,
  items: { id: string; title: string }[],
): CustomMockSubtopic[] {
  return items.map((s) => ({ id: s.id, chapter, title: s.title }));
}

export function getEconomicsBuilderChapters(): CustomMockChapterToc[] {
  return getCustomMockBookChapters().map((c: EconomicsChapterToc) =>
    toChapterToc(
      c.num,
      c.title,
      `Chapter ${c.num}`,
      c.subtopics.map((s: EconomicsSubtopic) => ({
        id: s.id,
        chapter: s.chapter,
        title: s.title,
      })),
    ),
  );
}

/** Populated Full Course math chapters (same map as the practice sidebar). */
export function getMathBuilderChapters(): CustomMockChapterToc[] {
  return [
    toChapterToc(
      1,
      "Logic",
      "Chapter 1",
      subs(1, [
        { id: "1.1", title: "Sets: Elements, Subsets & Power Sets" },
        { id: "1.2", title: "Set Operations, Complements & Counting" },
        { id: "1.3", title: "Propositional Logic & Implications" },
        { id: "1.4", title: "Quantifiers, Validity & Deduction" },
        { id: "1.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      2,
      "Elementary algebra",
      "Chapter 2",
      subs(2, [
        { id: "2.1", title: "Expanding, factoring, and identities" },
        { id: "2.2", title: "Rational expressions and algebraic fractions" },
        { id: "2.3", title: "Powers, roots, and negative exponents" },
        { id: "2.4", title: "Absolute value and algebraic rewriting" },
        { id: "2.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      3,
      "Financial mathematics",
      "Chapter 3",
      subs(3, [
        { id: "3.1", title: "Interest Periods and Effective Rates" },
        { id: "3.2", title: "Continuous Compounding" },
        { id: "3.3", title: "Present Value" },
        { id: "3.4", title: "Geometric Series" },
        { id: "3.5", title: "Annuities, Annuities Due & Perpetuities" },
        { id: "3.6", title: "Mortgage Repayments" },
        { id: "3.7", title: "Internal Rate of Return" },
        { id: "3.8", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      4,
      "Equations",
      "Chapter 4",
      subs(4, [
        { id: "4.1", title: "Linear equations in one unknown" },
        { id: "4.2", title: "Quadratic equations" },
        { id: "4.3", title: "Rational, radical and absolute-value equations" },
        { id: "4.4", title: "Exponential and logarithmic equations" },
        { id: "4.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      5,
      "Linear equations in two unknowns",
      "Chapter 5",
      subs(5, [
        { id: "5", title: "Linear equations in two unknowns" },
        { id: "5.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      6,
      "Inequalities",
      "Chapter 6",
      subs(6, [
        { id: "6.1", title: "Rational Inequalities" },
        { id: "6.2", title: "Quadratic Sign Inequalities" },
        { id: "6.3", title: "Compound & Special Inequalities" },
        { id: "6.4", title: "Word Problems" },
        { id: "6.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      7,
      "Linear and quadratic functions",
      "Chapter 7",
      // Flat chapter (no book subtopics) — single picker row for the whole bank.
      subs(7, [{ id: "7", title: "Linear and quadratic functions" }]),
    ),
    toChapterToc(
      8,
      "Power functions",
      "Chapter 8",
      subs(8, [
        { id: "8", title: "Power functions" },
        { id: "8.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      9,
      "Polynomial functions",
      "Chapter 9",
      subs(9, [
        { id: "9", title: "Polynomial functions" },
        { id: "9.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      10,
      "Exponential and logarithmic functions",
      "Chapter 10",
      subs(10, [
        { id: "10.1", title: "Exponential functions" },
        { id: "10.2", title: "Logarithmic functions" },
        { id: "10.3", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      11,
      "Differentiation and single-variable optimization",
      "Chapter 11",
      subs(11, [
        { id: "11.1", title: "Differentiation rules & mechanics" },
        { id: "11.2", title: "Economic interpretation of the derivative" },
        { id: "11.3", title: "Finding and classifying optima" },
        { id: "11.4", title: "Interpreting graphs without algebra" },
        { id: "11.5", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      12,
      "Elementary probability",
      "Chapter 12",
      subs(12, [
        { id: "12.1", title: "Combinatorial Probability" },
        { id: "12.2", title: "Inclusion–Exclusion" },
        { id: "12.3", title: "Conditional Probability" },
        { id: "12.4", title: "Expected Value, Variance & SD" },
        { id: "12.5", title: "Bayes' Theorem" },
        { id: "12.6", title: "Exam-Style" },
      ]),
    ),
    toChapterToc(
      13,
      "Binomial distribution",
      "Chapter 13",
      subs(13, [
        { id: "13", title: "Binomial distribution" },
        { id: "13.5", title: "Exam-Style" },
      ]),
    ),
  ];
}

export function getEnglishBuilderChapters(): CustomMockChapterToc[] {
  return [
    toChapterToc(
      1,
      "Texts",
      "Texts",
      subs(1, [
        { id: "t.1", title: "The Rise of the Four-Day Workweek" },
        { id: "t.2", title: "Dynamic Pricing and the Rise of Algorithmic Price Discrimination" },
        { id: "t.3", title: "The Rise and Fall of the Classical Gold Standard" },
        { id: "t.4", title: "Reshoring, Nearshoring, and the Post-Pandemic Reordering of Global Supply Chains" },
        { id: "t.5", title: "The Marshall Plan and the Politics of Economic Recovery" },
        { id: "t.6", title: "Nudge Theory and the Limits of Behavioural Public Policy" },
        { id: "t.7", title: "The Antibiotic Discovery Void and the Economics of Resistance" },
        { id: "t.8", title: "The Astonishing Navigation of the Arctic Tern" },
        { id: "t.9", title: "A Century Aloft — The Compressed Evolution of Powered Flight" },
        { id: "t.10", title: "The Improbable Global Conquest of the Potato" },
        { id: "t.11", title: "The Silicon Chokepoint — How a Few Factories Reshaped Global Power" },
        { id: "t.12", title: "The Doomsday Glacier — Racing to Predict a Silent Collapse" },
        { id: "t.13", title: "Living Light — Bioluminescence in the Deep Ocean" },
        { id: "t.14", title: "The Alien Mind — Cognition and Camouflage in Octopuses" },
        { id: "t.15", title: "The Shifting Anatomy of Economic Sectors" },
        { id: "t.16", title: "Voyager — Humanity's Longest-Running Conversation with the Void" },
      ]),
    ),
    toChapterToc(
      2,
      "Grammar",
      "Grammar",
      subs(2, [
        { id: "g.1", title: "Tenses & Aspect" },
        { id: "g.2", title: "Conditionals" },
        { id: "g.3", title: "Subject–Verb Agreement" },
        { id: "g.4", title: "Modals" },
        { id: "g.5", title: "Passive Voice" },
        { id: "g.6", title: "Relative Clauses" },
        { id: "g.7", title: "Gerunds vs Infinitives" },
        { id: "g.8", title: "Reported Speech" },
        { id: "g.9", title: "Articles & Determiners" },
        { id: "g.10", title: "Countable / Uncountable & Quantifiers" },
        { id: "g.11", title: "Comparatives & Superlatives" },
        { id: "g.12", title: "Linking Words" },
        { id: "g.13", title: "Parallel Structure" },
        { id: "g.14", title: "Formal Subjunctive" },
        { id: "g.15", title: "Negative Inversion" },
        { id: "g.16", title: "Participial Phrases" },
        { id: "g.17", title: "so / such / too / enough" },
        { id: "g.18", title: "Prepositions & Fixed Patterns" },
        { id: "g.19", title: "Indirect Questions & Word Order" },
        { id: "g.20", title: "Confusable Structures" },
      ]),
    ),
    toChapterToc(
      3,
      "Vocabulary",
      "Vocabulary",
      subs(3, [
        { id: "v.1", title: "Confusable Pairs" },
        { id: "v.2", title: "Usage in Context" },
        { id: "v.3", title: "Business Collocations" },
        { id: "v.4", title: "Academic & Formal Vocabulary" },
        { id: "v.5", title: "Near-Synonyms & Nuance" },
        { id: "v.6", title: "Word Formation & Affixes" },
      ]),
    ),
  ];
}

export function getCustomMockChapters(subject: BuilderSubjectId): CustomMockChapterToc[] {
  if (subject === "economics") return getEconomicsBuilderChapters();
  if (subject === "math") return getMathBuilderChapters();
  return getEnglishBuilderChapters();
}

export function findCustomMockSubtopic(
  subject: BuilderSubjectId,
  id: string,
): CustomMockSubtopic | undefined {
  for (const ch of getCustomMockChapters(subject)) {
    const s = ch.subtopics.find((t) => t.id === id);
    if (s) return s;
  }
  return undefined;
}

export function chaptersFromSubtopicIds(
  subject: BuilderSubjectId,
  ids: string[],
): number[] {
  const set = new Set<number>();
  for (const id of ids) {
    const s = findCustomMockSubtopic(subject, id);
    if (s) set.add(s.chapter);
  }
  return [...set].sort((a, b) => a - b);
}

export function sortSubtopicIds(subject: BuilderSubjectId, ids: string[]): string[] {
  const order = getCustomMockChapters(subject).flatMap((c) => c.subtopics.map((s) => s.id));
  const rank = new Map(order.map((id, i) => [id, i]));
  return [...new Set(ids)].sort((a, b) => (rank.get(a) ?? 999) - (rank.get(b) ?? 999));
}
