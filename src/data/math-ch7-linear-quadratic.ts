/**
 * Chapter 7 — Linear and quadratic functions (no book subtopics).
 * Mix: ~25% purely symbolic stems (parameters only) + formula / parametric /
 * hybrid / geometric stems. Levels 4–5 use multi-hop traps (compositions,
 * tangency families, rewrite matching). MATH 7.01 is the photo exemplar at 3/5.
 * Explanations follow the MATH 13.18 rhythm (shared overview + letter-local steps).
 */

import type { MathTask } from "@/data/math-chapters";
import ch7 from "@/data/math-ch7-linear-quadratic.json";

/** Flat chapter bank — practice UI has no subsection chrome for chapter 7. */
export const MATH_CH7_LINEAR_QUADRATIC: MathTask[] = (ch7.tasks as MathTask[]).map(
  (task, i) => ({
    ...task,
    subsection: task.subsection ?? "7",
    sort_order: task.sort_order ?? i + 1,
    placeholder: false,
  }),
);
