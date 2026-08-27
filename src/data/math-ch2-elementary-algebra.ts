/**
 * Chapter 2 — Elementary algebra (subsections 2.1–2.5).
 * Exam format: five True/False claims per task. Each claim has its own
 * hypothesis and wording. Content stays inside elementary algebra:
 * expanding, factoring, rational expressions, powers and roots, and
 * Explanations follow the Chapter 4 / MATH 13.18 style: letter header bound
 * to each statement, named rule, display algebra, then the verdict.
 */

import type { MathTask } from "@/data/math-chapters";
import ch2Cases from "@/data/math-ch2-cases.json";

export const MATH_CH2_SUBSECTIONS = [
  { id: "2.1", title: "Expanding, factoring, and identities" },
  { id: "2.2", title: "Rational expressions and algebraic fractions" },
  { id: "2.3", title: "Powers, roots, and negative exponents" },
  { id: "2.4", title: "Absolute value and algebraic rewriting" },
  { id: "2.5", title: "Mixed exam sets" },
] as const;

export const MATH_CH2_ALGEBRA: MathTask[] = (ch2Cases.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
