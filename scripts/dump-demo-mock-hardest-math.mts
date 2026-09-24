/**
 * Pick the hardest unused BBE math task per syllabus chapter 1–13
 * (raw course banks, no demo overlay) for the free demo mock.
 */
import { writeFileSync, readFileSync } from "fs";
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

const BANKS: { chapter: number; tasks: MathTask[] }[] = [
  { chapter: 1, tasks: MATH_CH1_LOGIC },
  { chapter: 2, tasks: MATH_CH2_ALGEBRA },
  { chapter: 3, tasks: MATH_CH11_FINANCIAL },
  { chapter: 4, tasks: MATH_CH4_EQUATIONS },
  { chapter: 5, tasks: MATH_CH5_LINEAR_EQUATIONS },
  { chapter: 6, tasks: MATH_CH6_INEQUALITIES },
  { chapter: 7, tasks: MATH_CH7_LINEAR_QUADRATIC },
  { chapter: 8, tasks: MATH_CH8_POWER_FUNCTIONS },
  { chapter: 9, tasks: MATH_CH9_POLYNOMIALS },
  { chapter: 10, tasks: MATH_CH10_EXP_LOG },
  { chapter: 11, tasks: MATH_CH11_DIFFERENTIATION },
  { chapter: 12, tasks: MATH_CH12_PROBABILITY },
  { chapter: 13, tasks: MATH_CH13_BINOMIAL },
];

function diffScore(level: string | undefined): number {
  const m = String(level ?? "").match(/(\d+)\s*\/\s*5/);
  return m ? Number(m[1]) : 0;
}

function examBoost(t: MathTask): number {
  const sub = String(t.subsection ?? "");
  const title = String(t.title ?? "").toLowerCase();
  let boost = 0;
  if (/\.5$/.test(sub) || sub.endsWith(".5") || /exam/i.test(sub)) boost += 50_000;
  if (/exam/i.test(title)) boost += 25_000;
  return boost;
}

function richness(t: MathTask): number {
  const expl = (t.tactical_explanations ?? []).reduce((a, s) => a + s.length, 0);
  const overview = (t.solution_overview ?? "").length;
  const stem = (t.context ?? "").length;
  return expl + overview * 0.5 + stem * 0.25 + examBoost(t);
}

function usedInPaidMocks(): Set<string> {
  const used = new Set<string>();
  for (let i = 1; i <= 6; i++) {
    const raw = JSON.parse(readFileSync(`src/data/mock-exam-${i}-sourced.json`, "utf8"));
    for (const t of raw.math ?? []) {
      if (t.case_id) used.add(t.case_id);
    }
  }
  return used;
}

function main() {
  const used = usedInPaidMocks();
  const picks: Record<string, unknown>[] = [];

  for (const { chapter, tasks } of BANKS) {
    const candidates = tasks.filter(
      (t) =>
        !t.placeholder &&
        (t.statements?.length ?? 0) >= 5 &&
        (t.answer_key?.length ?? 0) >= 5 &&
        (t.tactical_explanations?.length ?? 0) >= 5 &&
        !used.has(t.case_id),
    );
    if (candidates.length === 0) {
      throw new Error(`No unused hard candidate in chapter ${chapter}`);
    }
    candidates.sort((a, b) => {
      const dd = diffScore(b.difficulty_level) - diffScore(a.difficulty_level);
      if (dd !== 0) return dd;
      return richness(b) - richness(a);
    });
    const t = candidates[0]!;
    picks.push({
      case_id: t.case_id,
      id: t.id,
      title: t.title,
      chapter,
      subsection: t.subsection,
      context: t.context,
      statements: t.statements.slice(0, 5),
      answer_key: t.answer_key.slice(0, 5),
      tactical_explanations: t.tactical_explanations.slice(0, 5),
      difficulty_level: t.difficulty_level || "5/5",
      ...(t.solution_overview ? { solution_overview: t.solution_overview } : {}),
      ...(t.figure ? { figure: t.figure } : {}),
      ...(t.tables_markdown ? { tables_markdown: t.tables_markdown } : {}),
    });
    console.log(
      `ch${chapter}`,
      t.case_id,
      t.difficulty_level,
      `rich=${Math.round(richness(t))}`,
      (t.title ?? "").slice(0, 55),
    );
  }

  writeFileSync("/tmp/bbe-demo-mock-math-hardest.json", JSON.stringify(picks, null, 2));
  console.log("wrote", picks.length);
}

main();
