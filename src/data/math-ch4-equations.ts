/**
 * Chapter 4 — Equations (subsections 4.1–4.5).
 * Exam format: five True/False claims per task, written as closed prose sentences.
 * Claims test equation theory (technique, domain, count and nature of solutions,
 * parameter conditions, extraneous roots) — never bare arithmetic checks.
 * Explanations follow the MATH 13.18 style: name the rule, show the algebra,
 * translate into words, close with the verdict.
 */

import type { MathTask } from "@/data/math-chapters";
import ch4Cases from "@/data/math-ch4-cases.json";

export const MATH_CH4_SUBSECTIONS = [
  { id: "4.1", title: "Linear equations in one unknown" },
  { id: "4.2", title: "Quadratic equations" },
  { id: "4.3", title: "Rational, radical and absolute-value equations" },
  { id: "4.4", title: "Exponential and logarithmic equations" },
  { id: "4.5", title: "Mixed exam sets" },
] as const;

export const MATH_CH4_EQUATIONS: MathTask[] = (ch4Cases.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
