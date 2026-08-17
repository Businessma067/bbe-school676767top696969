/**
 * Assemble Chapter 8 power-function bank from batch modules.
 * Run: node textbook/output/_assemble_ch8.mjs
 */
import fs from "fs";
import { createRequire } from "module";

// Import batches (some modules log on load — ignore)
const { BATCH: B01 } = await import("./_ch8_batch_01_05.mjs");
const { BATCH: B06 } = await import("./_ch8_batch_06_20.mjs");
const { BATCH: B21 } = await import("./_ch8_batch_21_35.mjs");
const { BATCH: B36 } = await import("./_ch8_batch_36_50.mjs");

// Rewrite modules (_ch8_ov_*.mjs) replace the original task with the same sort_order.
const dir = new URL("./", import.meta.url);
const overrideFiles = fs
  .readdirSync(dir)
  .filter((f) => /^_ch8_ov_.*\.mjs$/.test(f))
  .sort();
const overrides = [];
for (const f of overrideFiles) {
  const { BATCH } = await import("./" + f);
  overrides.push(...BATCH);
}

const bySortOrder = new Map();
for (const t of [...B01, ...B06, ...B21, ...B36, ...overrides]) {
  bySortOrder.set(t.sort_order, t);
}
const all = [...bySortOrder.values()].sort((a, b) => a.sort_order - b.sort_order);
console.log("rewritten tasks:", overrides.length + B01.length);

if (all.length !== 50) {
  console.error("Expected 50 tasks, got", all.length);
  process.exit(1);
}

const trueHist = {};
const diffHist = {};
for (const t of all) {
  if (
    t.statements?.length !== 5 ||
    t.answer_key?.length !== 5 ||
    t.tactical_explanations?.length !== 5
  ) {
    console.error("Bad lengths", t.id);
    process.exit(1);
  }
  if (!t.solution_overview) {
    console.error("Missing overview", t.id);
    process.exit(1);
  }
  const tc = t.answer_key.filter(Boolean).length;
  trueHist[tc] = (trueHist[tc] || 0) + 1;
  const d = String(t.difficulty_level);
  if (!/^[1-5]\/5$/.test(d)) {
    console.error("Bad difficulty", t.id, d);
    process.exit(1);
  }
  diffHist[d] = (diffHist[d] || 0) + 1;
}

console.log("trueHist", trueHist);
console.log("diffHist", diffHist);

for (const k of [1, 2, 3, 4, 5]) {
  if (trueHist[k] !== 10) {
    console.error("trueHist imbalance", trueHist);
    process.exit(1);
  }
}
for (const d of ["1/5", "2/5", "3/5", "4/5", "5/5"]) {
  if (diffHist[d] !== 10) {
    console.error("diffHist imbalance", diffHist);
    process.exit(1);
  }
}

/** Escape for TypeScript template literal. */
function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function emitTask(t) {
  const stmts = t.statements.map((s) => `      \`${esc(s)}\`,`).join("\n");
  const keys = t.answer_key.join(", ");
  const expl = t.tactical_explanations
    .map((s) => `      \`${esc(s)}\`,`)
    .join("\n");
  return `  {
    id: \`${t.id}\`,
    case_id: \`${t.case_id}\`,
    title: \`${esc(t.title)}\`,
    context: \`${esc(t.context)}\`,
    statements: [
${stmts}
    ],
    answer_key: [${keys}],
    tactical_explanations: [
${expl}
    ],
    difficulty_level: \`${t.difficulty_level}\`,
    sort_order: ${t.sort_order},
    solution_overview: \`${esc(t.solution_overview)}\`,
  }`;
}

const body = all.map(emitTask).join(",\n") + ",";
const out = `/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
${body}
];
`;

const outPath = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath.pathname, "bytes", out.length);
