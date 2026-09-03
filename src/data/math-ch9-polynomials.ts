/**
 * Chapter 9 — Polynomial functions (no book subtopics).
 * Mix: ~25% symbolic + formula / applied / table / graph / parametric / hybrid.
 * MATH 9.01 is the Item 32 train exemplar (cubic speed + distance table) at 3/5.
 * Explanations follow Chapter 4 tutor voice.
 */

import type { MathTask } from "@/data/math-chapters";
import ch9 from "@/data/math-ch9-polynomials.json";

export const MATH_CH9_POLYNOMIALS: MathTask[] = (ch9.tasks as MathTask[]).map(
  (task, i) => ({
    ...task,
    subsection: task.subsection ?? "9",
    sort_order: task.sort_order ?? i + 1,
    placeholder: false,
  }),
);
