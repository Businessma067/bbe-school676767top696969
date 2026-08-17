/**
 * Merge new Ch8 subsection batches into the bank, sort by subsection then difficulty,
 * renumber globally. Run after _ch8_new_81/82/83.mjs exist:
 *   node textbook/output/_merge_ch8_new_subtopics.mjs
 */
import fs from "node:fs";
import { MATH_CH8_POWER_FUNCTIONS as base } from "../../src/data/math-ch8-power-functions.ts";

const { BATCH: N81 } = await import("./_ch8_new_81.mjs");
const { BATCH: N82 } = await import("./_ch8_new_82.mjs");
const { BATCH: N83 } = await import("./_ch8_new_83.mjs");

const DIFF_RANK = { "1/5": 1, "2/5": 2, "3/5": 3, "4/5": 4, "5/5": 5 };
const SUB_ORDER = { "8.1": 1, "8.2": 2, "8.3": 3 };

const all = [...base, ...N81, ...N82, ...N83].map((t) => ({ ...t }));
for (const t of all) {
  if (!t.subsection) throw new Error("missing subsection " + t.id);
  if (!DIFF_RANK[t.difficulty_level]) throw new Error("bad diff " + t.id);
}

all.sort(
  (a, b) =>
    SUB_ORDER[a.subsection] - SUB_ORDER[b.subsection] ||
    DIFF_RANK[a.difficulty_level] - DIFF_RANK[b.difficulty_level] ||
    String(a.title).localeCompare(String(b.title)),
);

all.forEach((t, i) => {
  const n = i + 1;
  t.sort_order = n;
  t.id = `math-8-${n}`;
  t.case_id = `MATH 8.${String(n).padStart(2, "0")}`;
});

const letters = ["A", "B", "C", "D", "E"];
const trueHist = {};
const diffHist = {};
const subHist = {};
for (const t of all) {
  if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5) {
    throw new Error("bad lengths " + t.id);
  }
  t.tactical_explanations.forEach((ex, i) => {
    const h = ex.split("\n")[0];
    const m = h.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m || m[1] !== letters[i] || (m[2] === "True") !== t.answer_key[i]) {
      throw new Error(`header ${t.case_id} ${letters[i]}: ${h}`);
    }
    if (/This claim/.test(ex)) throw new Error("This claim in " + t.case_id);
  });
  const tc = t.answer_key.filter(Boolean).length;
  trueHist[tc] = (trueHist[tc] || 0) + 1;
  diffHist[t.difficulty_level] = (diffHist[t.difficulty_level] || 0) + 1;
  subHist[t.subsection] = (subHist[t.subsection] || 0) + 1;
}

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const body = all
  .map((t) => {
    const stmts = t.statements.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const exs = t.tactical_explanations.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const key = t.answer_key.map(Boolean).join(", ");
    return `  {
    id: \`${esc(t.id)}\`,
    case_id: \`${esc(t.case_id)}\`,
    title: \`${esc(t.title)}\`,
    subsection: \`${esc(t.subsection)}\`,
    context: \`${esc(t.context)}\`,
    statements: [
${stmts}
    ],
    answer_key: [${key}],
    tactical_explanations: [
${exs}
    ],
    difficulty_level: \`${esc(t.difficulty_level)}\`,
    sort_order: ${t.sort_order},
    solution_overview: \`${esc(t.solution_overview)}\`,
  }`;
  })
  .join(",\n");

const out = `/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * Subsections: 8.1 recovering/scaling, 8.2 composition/derived laws, 8.3 comparisons/applications.
 * Within each subsection tasks are ordered by rising difficulty.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_SUBSECTIONS = [
  { id: "8.1", title: "Recovering Coefficients and Scale Factors" },
  { id: "8.2", title: "Composition, Inverses and Derived Laws" },
  { id: "8.3", title: "Comparisons, Caps and Economic Models" },
] as const;

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
${body},
];
`;

fs.writeFileSync(new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url), out);

console.log("total", all.length);
console.log("subHist", subHist);
console.log("diffHist", diffHist);
console.log("trueHist", trueHist);
for (const sub of ["8.1", "8.2", "8.3"]) {
  const g = all.filter((t) => t.subsection === sub);
  console.log(
    sub,
    g.map((t) => t.difficulty_level.replace("/5", "")).join("→"),
  );
}
