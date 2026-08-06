/**
 * Generate src/data/ch2-part-2.6-2.7.json — 50 FC cases each for §2.6 and §2.7.
 * Run: node scripts/generate-ch2-part-2.6-2.7.mjs
 */
import fs from "node:fs";
import path from "node:path";
import {
  LIVED,
  TRUE_ORDER_26,
  TRUE_ORDER_27,
  theoryContext,
  livedContext,
  reviewContext,
} from "./ch2-fc100-shared.mjs";
import { RAW_26 } from "./ch2-fc100-data-26.mjs";
import { RAW_27 } from "./ch2-fc100-data-27.mjs";

const outJson = path.join(
  path.resolve(import.meta.dirname, ".."),
  "src",
  "data",
  "ch2-part-2.6-2.7.json",
);

const BANNED = [
  /\bthe book\b/i,
  /\baccording to the book\b/i,
  /\bthe text says\b/i,
  /\(\s*alt\s/i,
  /\bFuhrmann notes\b/i,
];
const BAD_CONTEXT = [
  /^Evaluate claims about/i,
  /^Evaluate the law of/i,
  /^Analyze the law of/i,
  /^Assess statements about/i,
  /^Spot (statements|violations)/i,
  / Evaluate:$/,
  / Evaluate:$/,
];
const ELASTICITY = /\belastic/i;

function shuffleSlots(n) {
  const a = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
    const j = (n * 17 + i * 11) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function materialize(quads, needTrue, n) {
  const order = shuffleSlots(n);
  const trueIdx = new Set(order.slice(0, needTrue));
  const pairs = quads.map((q, i) =>
    trueIdx.has(i) ? [q[0], true, q[1]] : [q[2], false, q[3]],
  );
  return order.map((i) => pairs[i]);
}

function buildSection(sub, raw, order) {
  if (raw.length !== 50) throw new Error(`${sub}: expected 50 cases, got ${raw.length}`);
  return raw.map(([title, context, diff, quads], i) => {
    const n = i + 1;
    if (quads.length !== 5) throw new Error(`${sub}.${n}: need 5 quads`);
    const pairs = materialize(quads, order[i], n);
    return {
      subsection: sub,
      case_id: `CASE ${sub}.${String(n).padStart(2, "0")}`,
      title,
      context,
      statements: pairs.map((p) => p[0]),
      answer_key: pairs.map((p) => p[1]),
      tactical_explanations: pairs.map((p) => (p[1] ? "TRUE — " : "FALSE — ") + p[2]),
      difficulty_level: diff,
      tier: "full",
    };
  });
}

function wordCount(s) {
  return String(s).trim().split(/\s+/).filter(Boolean).length;
}

function validate(cases) {
  const errors = [];
  const bySub = {};
  const stmts = new Map();
  const explsWithinCase = new Set();

  if (cases.length !== 100) errors.push(`Total ${cases.length} ≠ 100`);

  for (const c of cases) {
    (bySub[c.subsection] ||= []).push(c);
    const blob = [c.context, c.title, ...c.statements, ...c.tactical_explanations].join(" ");
    for (const ban of BANNED) {
      if (ban.test(blob)) errors.push(`${c.case_id}: banned ${ban}`);
    }
    if (!c.context.endsWith("Evaluate the following economic assertions:")) {
      errors.push(`${c.case_id}: context must end with FC style-lock phrase`);
    }
    if (!/^(Analyze|Consider|Review)\b/.test(c.context)) {
      errors.push(`${c.case_id}: context must start with Analyze, Consider, or Review`);
    }
    if (!/\.\s+Evaluate the following economic assertions:$/.test(c.context)) {
      errors.push(`${c.case_id}: context needs period before FC ending phrase`);
    }
    for (const bad of BAD_CONTEXT) {
      if (bad.test(c.context)) errors.push(`${c.case_id}: forbidden context style ${bad}`);
    }
    if (ELASTICITY.test(blob)) errors.push(`${c.case_id}: elasticity not allowed in 2.6/2.7`);

    const tc = c.answer_key.filter(Boolean).length;
    if (tc < 1 || tc > 5) errors.push(`${c.case_id}: true count ${tc}`);

    const localExpl = new Set();
    for (let i = 0; i < 5; i++) {
      const s = c.statements[i];
      const w = wordCount(s);
      if (w < 8 || w > 40) errors.push(`${c.case_id}[${i}]: statement word count ${w}`);
      if (!/[.!?]$/.test(s.trim())) errors.push(`${c.case_id}[${i}]: missing end punctuation`);
      const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!c.tactical_explanations[i].startsWith(pref)) {
        errors.push(`${c.case_id}[${i}]: explanation prefix mismatch`);
      }
      const eBody = c.tactical_explanations[i].replace(/^(TRUE|FALSE) — /, "");
      if (localExpl.has(eBody)) errors.push(`${c.case_id}[${i}]: duplicate explanation within case`);
      localExpl.add(eBody);

      const key = s.trim().toLowerCase();
      if (stmts.has(key)) errors.push(`Duplicate statement: ${c.case_id} vs ${stmts.get(key)}`);
      else stmts.set(key, c.case_id);
    }
  }

  for (const sub of ["2.6", "2.7"]) {
    const list = bySub[sub] || [];
    if (list.length !== 50) errors.push(`${sub}: count ${list.length}`);
    const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const c of list) hist[c.answer_key.filter(Boolean).length]++;
    for (let k = 1; k <= 5; k++) {
      if (hist[k] !== 10) errors.push(`${sub}: ${k}-true = ${hist[k]} (want 10)`);
    }
  }

  const lived26 = (bySub["2.6"] || []).filter((c) =>
    LIVED.has(Number(c.case_id.split(".").pop())),
  ).length;
  const lived27 = (bySub["2.7"] || []).filter((c) =>
    LIVED.has(Number(c.case_id.split(".").pop())),
  ).length;

  return { errors, bySub, stmtCount: stmts.size, lived26, lived27 };
}

const cases = [
  ...buildSection("2.6", RAW_26, TRUE_ORDER_26),
  ...buildSection("2.7", RAW_27, TRUE_ORDER_27),
];

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));

const { errors, bySub, stmtCount, lived26, lived27 } = validate(cases);
if (errors.length) {
  console.error("Validation failed:\n" + errors.slice(0, 50).join("\n"));
  if (errors.length > 50) console.error(`… +${errors.length - 50} more`);
  process.exit(1);
}

fs.writeFileSync(outJson, JSON.stringify(cases, null, 2) + "\n");

console.log("OK:", outJson);
console.log("Cases:", cases.length, "| Unique statements:", stmtCount);
console.log("Lived contexts: 2.6 =", lived26, "/ 50 | 2.7 =", lived27, "/ 50");
console.log("TRUE-count histograms:");
for (const sub of ["2.6", "2.7"]) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[c.answer_key.filter(Boolean).length]++;
  console.log(sub, JSON.stringify(hist));
}
console.log("\nSample CASE 2.6.05:");
console.log(JSON.stringify(cases.find((c) => c.case_id === "CASE 2.6.05"), null, 2));
