/**
 * Classify existing Ch8 tasks into 3 subsections, sort by difficulty within each,
 * renumber sort_order / case_id / id, and write the bank with MATH_CH8_SUBSECTIONS.
 *
 * Run: node textbook/output/_reorg_ch8_subtopics.mjs
 */
import fs from "node:fs";
import { MATH_CH8_POWER_FUNCTIONS as tasks } from "../../src/data/math-ch8-power-functions.ts";

/** 8.1 recover A/r, scale factors, invert, ceilings on one law */
const S1 = new Set([1, 2, 6, 7, 9, 10, 21, 22, 24, 36, 37, 38, 39, 40, 41, 42, 46]);
/** 8.2 composition, inverses, R=pq, average product, unit change, learning */
const S2 = new Set([4, 5, 11, 12, 13, 14, 15, 20, 23, 25, 31, 32, 43, 44, 45, 48, 49, 50]);
/** 8.3 two laws, rivals, caps, break-even, fitting */
const S3 = new Set([3, 8, 16, 17, 18, 19, 26, 27, 28, 29, 30, 33, 34, 35, 47]);

const DIFF_RANK = { "1/5": 1, "2/5": 2, "3/5": 3, "4/5": 4, "5/5": 5 };

function bucket(t) {
  if (S1.has(t.sort_order)) return "8.1";
  if (S2.has(t.sort_order)) return "8.2";
  if (S3.has(t.sort_order)) return "8.3";
  throw new Error("unclassified " + t.sort_order);
}

const bySub = { "8.1": [], "8.2": [], "8.3": [] };
for (const t of tasks) bySub[bucket(t)].push({ ...t, subsection: bucket(t) });

for (const id of Object.keys(bySub)) {
  bySub[id].sort(
    (a, b) =>
      DIFF_RANK[a.difficulty_level] - DIFF_RANK[b.difficulty_level] ||
      a.sort_order - b.sort_order,
  );
}

const ordered = [...bySub["8.1"], ...bySub["8.2"], ...bySub["8.3"]];
ordered.forEach((t, i) => {
  const n = i + 1;
  t.sort_order = n;
  t.id = `math-8-${n}`;
  t.case_id = `MATH 8.${String(n).padStart(2, "0")}`;
});

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const body = ordered
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
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
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

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
fs.writeFileSync(path, out);

for (const id of ["8.1", "8.2", "8.3"]) {
  const group = ordered.filter((t) => t.subsection === id);
  const diffs = group.map((t) => t.difficulty_level).join(",");
  console.log(id, "n=" + group.length, "order", diffs);
}
console.log("total", ordered.length, "bytes", out.length);
