/**
 * Dump the 13 listed BBE demo-mock math tasks into /tmp/bbe-demo-mock-math.json
 */
import { writeFileSync } from "fs";
import { MATH_CH1_LOGIC } from "../src/data/math-ch1-logic.ts";
import { MATH_CH2_ALGEBRA } from "../src/data/math-ch2-elementary-algebra.ts";
import { MATH_CH11_FINANCIAL } from "../src/data/math-ch11-financial.ts";
import { MATH_CH4_EQUATIONS } from "../src/data/math-ch4-equations.ts";
import { MATH_CH5_LINEAR_EQUATIONS } from "../src/data/math-ch5-linear-equations.ts";
import { MATH_CH6_INEQUALITIES } from "../src/data/math-ch6-inequalities.ts";
import { MATH_CH7_LINEAR_QUADRATIC } from "../src/data/math-ch7-linear-quadratic.ts";
import { MATH_CH8_POWER_FUNCTIONS } from "../src/data/math-ch8-power-functions.ts";
import { MATH_CH9_POLYNOMIALS } from "../src/data/math-ch9-polynomials.ts";
import { MATH_CH10_EXP_LOG } from "../src/data/math-ch10-exp-log.ts";
import { MATH_CH11_DIFFERENTIATION } from "../src/data/math-ch11-differentiation.ts";
import { MATH_CH12_PROBABILITY } from "../src/data/math-ch12-probability.ts";
import { MATH_CH13_BINOMIAL } from "../src/data/math-ch13-binomial.ts";
import type { MathTask } from "../src/data/math-chapters.ts";

const WANT: { case_id: string; bank: MathTask[]; chapter: number; label: string }[] = [
  { case_id: "MATH 1.30", bank: MATH_CH1_LOGIC, chapter: 1, label: "Logic — quantified / sets" },
  { case_id: "MATH 2.06", bank: MATH_CH2_ALGEBRA, chapter: 2, label: "Elementary algebra" },
  { case_id: "MATH 11.19", bank: MATH_CH11_FINANCIAL, chapter: 11, label: "Financial math — annuities" },
  { case_id: "MATH 4.21", bank: MATH_CH4_EQUATIONS, chapter: 4, label: "Equations — exam style" },
  { case_id: "MATH 5.52", bank: MATH_CH5_LINEAR_EQUATIONS, chapter: 5, label: "Equations with two unknowns" },
  { case_id: "MATH 6.21", bank: MATH_CH6_INEQUALITIES, chapter: 6, label: "Inequalities" },
  { case_id: "MATH 7.46", bank: MATH_CH7_LINEAR_QUADRATIC, chapter: 7, label: "Linear and quadratic functions" },
  { case_id: "MATH 8.90", bank: MATH_CH8_POWER_FUNCTIONS, chapter: 8, label: "Power functions" },
  { case_id: "MATH 9.22", bank: MATH_CH9_POLYNOMIALS, chapter: 9, label: "Polynomial functions" },
  { case_id: "MATH 10.1.31", bank: MATH_CH10_EXP_LOG, chapter: 10, label: "Exponential functions" },
  { case_id: "MATH 11.10", bank: MATH_CH11_DIFFERENTIATION, chapter: 11, label: "Differentiation" },
  { case_id: "MATH 12.17", bank: MATH_CH12_PROBABILITY, chapter: 12, label: "Probabilities — Bayes" },
  { case_id: "MATH 13.28", bank: MATH_CH13_BINOMIAL, chapter: 13, label: "Binomial distribution" },
];

function pick(bank: MathTask[], caseId: string): MathTask {
  const hit = bank.find((t) => t.case_id === caseId);
  if (!hit) throw new Error(`Missing ${caseId}`);
  return hit;
}

const out = WANT.map(({ case_id, bank, chapter, label }) => {
  const t = pick(bank, case_id);
  return {
    case_id: t.case_id,
    id: t.id,
    title: t.title,
    chapter,
    subsection: t.subsection,
    topic_label: label,
    context: t.context,
    statements: t.statements,
    answer_key: t.answer_key,
    tactical_explanations: t.tactical_explanations,
    difficulty_level: t.difficulty_level ?? "5/5",
    solution_overview: t.solution_overview,
    figure: t.figure,
    tables_markdown: t.tables_markdown,
  };
});

writeFileSync("/tmp/bbe-demo-mock-math.json", JSON.stringify(out, null, 2));
console.log(
  "ok",
  out.length,
  out.map((t) => t.case_id).join(", "),
);
