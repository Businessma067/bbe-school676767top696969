/**
 * Chapter 12 — Elementary probability (subsections 12.1–12.4).
 * Sourced from the four probability practice PDFs:
 * combinatorial, inclusion–exclusion, conditional, and E(X)/Var/SD.
 */

import type { MathTask } from "@/data/math-chapters";
import ch12 from "@/data/math-cases-ch12-probability.json";

export const MATH_CH12_SUBSECTIONS = [
  { id: "12.1", title: "Combinatorial Probability" },
  { id: "12.2", title: "Inclusion–Exclusion" },
  { id: "12.3", title: "Conditional Probability" },
  { id: "12.4", title: "Expected Value, Variance & SD" },
] as const;

export const MATH_CH12_PROBABILITY: MathTask[] = (ch12.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
