/**
 * Chapter 7 — Linear and quadratic functions (no book subtopics).
 * Exam-style stems: given f linear and g quadratic, five multi-hop True/False claims.
 * Explanations follow the MATH 13.18 rhythm (shared overview + letter-local steps).
 */

/** Sync marker: Chapter 7 bank on Lovable main (2026-09-02). */


import type { MathTask } from "@/data/math-chapters";
import ch7Cases from "@/data/math-ch7-linear-quadratic.json";

/** Flat chapter bank — practice UI has no subsection chrome for chapter 7. */
export const MATH_CH7_LINEAR_QUADRATIC: MathTask[] = (ch7Cases as MathTask[]).map(
  (task, i) => ({
    ...task,
    subsection: task.subsection ?? "7",
    sort_order: task.sort_order ?? i + 1,
    placeholder: false,
  }),
);
