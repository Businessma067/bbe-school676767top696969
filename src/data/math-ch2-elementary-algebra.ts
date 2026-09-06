/**
 * Chapter 2 — Elementary algebra (subsections 2.1–2.5).
 * Exam format: five True/False claims per task with domain conditions.
 * Formal stems; five distinct claims per task (no letter-swap clones).
 * No numeric plug-in evaluations. Subsection 2.5 mixes deep multi-step
 * symbolic algebra. Explanations follow MATH 13.18. Topics:
 * expanding, factoring, rational expressions, powers and roots, and
 * Explanations follow MATH 13.18: letter header bound to each statement,
 * a named rule, display algebra of mixed length (short conceptual B, or
 * stepped A/D), then the verdict. Lengths vary inside a task.
 * Independent claims (no shared stem condition) omit solution_overview;
 * shared-setup tasks keep one overview, then per-statement bodies.
 * Full-solution UI also skips independent/catalog overviews so the panel
 * opens on **A.** → … without tip/context/"A checks" preamble.
 */

import type { MathTask } from "@/data/math-chapters";
import ch2Cases from "@/data/math-ch2-cases.json";

export const MATH_CH2_SUBSECTIONS = [
  { id: "2.1", title: "Expanding, factoring, and identities" },
  { id: "2.2", title: "Rational expressions and algebraic fractions" },
  { id: "2.3", title: "Powers, roots, and negative exponents" },
  { id: "2.4", title: "Absolute value and algebraic rewriting" },
  { id: "2.5", title: "Exam-Style" },
] as const;

export const MATH_CH2_ALGEBRA: MathTask[] = (ch2Cases.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
