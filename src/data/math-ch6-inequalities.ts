/**
 * Chapter 6 — Inequalities (subsections 6.1–6.5).
 * 6.1–6.4 sourced from Inequalities_Regrouped_By_Topic.pdf;
 * 6.5 exam-style tasks from textbook/output/ch6_exam_style.py.
 */

import type { MathTask } from "@/data/math-chapters";
import ch6 from "@/data/math-ch6-inequalities.json";

export const MATH_CH6_SUBSECTIONS = [
  { id: "6.1", title: "Rational Inequalities" },
  { id: "6.2", title: "Quadratic Sign Inequalities" },
  { id: "6.3", title: "Compound & Special Inequalities" },
  { id: "6.4", title: "Word Problems" },
  { id: "6.5", title: "Exam-style tasks" },
] as const;

export const MATH_CH6_INEQUALITIES: MathTask[] = (ch6.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
