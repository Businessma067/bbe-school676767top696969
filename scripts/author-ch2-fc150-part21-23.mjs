/**
 * Build Ch2 Full Course JSON — sections 2.1–2.3, 50 cases each (150 total).
 * Run: node scripts/author-ch2-fc150-part21-23.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { TRUE_ORDER, LIVED, FC_SUFFIX } from "./ch2-fc150-shared.mjs";
import { EXTRA_21 } from "./ch2-fc150-extra-21.mjs";
import { EXTRA_22 } from "./ch2-fc150-extra-22.mjs";
import { EXTRA_23 } from "./ch2-fc150-extra-23.mjs";

const root = path.resolve(import.meta.dirname, "..");
const basePath = path.join(root, "src", "data", "economics-cases-ch2-subtopics.json");
const outJson = path.join(root, "src", "data", "ch2-part-2.1-2.3.json");

const BANNED = [
  /\bthe book\b/i,
  /\baccording to the book\b/i,
  /\bthe text says\b/i,
  /\(\s*alt\s/i,
  /\bFuhrmann notes\b/i,
];
const FORBIDDEN_CTX = [
  /Evaluate claims about/i,
  /^Evaluate:\s*$/i,
  /^Assess:\s*$/i,
  /:\s*Evaluate:\s*$/,
];

const EXTRA = { "2.1": EXTRA_21, "2.2": EXTRA_22, "2.3": EXTRA_23 };

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

function fixContext(ctx) {
  let c = String(ctx).trim();
  if (c.includes(FC_SUFFIX)) {
    const idx = c.indexOf(FC_SUFFIX);
    c = c.slice(0, idx).trim().replace(/[.:]\s*$/, "");
    if (!c) c = "Review the economic concepts in this case";
    return `${c}. ${FC_SUFFIX}`;
  }
  c = c
    .replace(/\s*Evaluate claims about[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate opportunity cost:\s*$/i, "")
    .replace(/\s*Evaluate micro versus macro:\s*$/i, "")
    .replace(/\s*Evaluate fine-grained[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate sweeping[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate precise[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate common[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate whether[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate why[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate how[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate the classification[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate assertions about[^:]*:\s*$/i, "")
    .replace(/\s*Evaluate:\s*$/i, "")
    .replace(/\s*Assess:\s*$/i, "")
    .replace(/\s*Analyze whether[^:]*:\s*$/i, "")
    .replace(/:\s*$/i, "")
    .trim();
  if (!c.endsWith(".")) c += ".";
  return `${c} ${FC_SUFFIX}`;
}

function trueCount(c) {
  return c.answer_key.filter(Boolean).length;
}

function buildFromQuad([title, context, diff, quads], needTrue, sub, n) {
  if (quads.length !== 5) throw new Error(`${sub}.${n}: need 5 quads`);
  const pairs = materialize(quads, needTrue, n);
  return {
    subsection: sub,
    case_id: `CASE ${sub}.${String(n).padStart(2, "0")}`,
    title,
    context: fixContext(context),
    statements: pairs.map((p) => p[0]),
    answer_key: pairs.map((p) => p[1]),
    tactical_explanations: pairs.map((p) => (p[1] ? "TRUE — " : "FALSE — ") + p[2]),
    difficulty_level: diff,
    tier: "full",
  };
}

function buildSection(sub, baseCases, extraRaw, order) {
  const buckets = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (const c of baseCases) {
    const tc = trueCount(c);
    buckets[tc].push({
      title: c.title,
      context: fixContext(c.context),
      diff: c.difficulty_level,
      statements: [...c.statements],
      answer_key: [...c.answer_key],
      expls: [...c.tactical_explanations],
    });
  }
  const extraQueue = [...extraRaw];
  const out = [];

  for (let i = 0; i < 50; i++) {
    const need = order[i];
    const n = i + 1;
    let built;
    if (buckets[need].length) {
      const b = buckets[need].shift();
      built = {
        subsection: sub,
        case_id: `CASE ${sub}.${String(n).padStart(2, "0")}`,
        title: b.title,
        context: b.context,
        statements: b.statements,
        answer_key: b.answer_key,
        tactical_explanations: b.expls,
        difficulty_level: b.diff,
        tier: "full",
      };
    } else {
      const raw = extraQueue.shift();
      if (!raw) throw new Error(`${sub}: ran out of extra cases at slot ${n} need ${need}`);
      built = buildFromQuad(raw, need, sub, n);
    }
    out.push(built);
  }

  if (extraQueue.length) throw new Error(`${sub}: unused extra cases: ${extraQueue.length}`);
  for (const k of [1, 2, 3, 4, 5]) {
    if (buckets[k].length) throw new Error(`${sub}: unused base cases with ${k} true: ${buckets[k].length}`);
  }
  return out;
}

function validate(cases) {
  const errors = [];
  const bySub = {};
  const stmts = new Map();
  const ids = new Set();

  if (cases.length !== 150) errors.push(`Total ${cases.length} ≠ 150`);

  for (const c of cases) {
    (bySub[c.subsection] ||= []).push(c);
    if (c.tier !== "full") errors.push(`${c.case_id}: tier must be full`);
    if (ids.has(c.case_id)) errors.push(`Duplicate case_id ${c.case_id}`);
    ids.add(c.case_id);

    const blob = [c.context, c.title, ...c.statements, ...c.tactical_explanations].join(" ");
    for (const ban of BANNED) {
      if (ban.test(blob)) errors.push(`${c.case_id}: banned phrase ${ban}`);
    }
    if (!c.context.includes(FC_SUFFIX)) errors.push(`${c.case_id}: context missing FC suffix`);
    for (const bad of FORBIDDEN_CTX) {
      if (bad.test(c.context)) errors.push(`${c.case_id}: forbidden context pattern ${bad}`);
    }

    for (let i = 0; i < 5; i++) {
      const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!c.tactical_explanations[i].startsWith(pref)) errors.push(`${c.case_id}[${i}]: bad prefix`);
      const key = c.statements[i].trim().toLowerCase();
      if (stmts.has(key)) errors.push(`Duplicate: ${c.case_id} vs ${stmts.get(key)}`);
      else stmts.set(key, c.case_id);
    }
  }

  for (const sub of ["2.1", "2.2", "2.3"]) {
    const list = bySub[sub] || [];
    if (list.length !== 50) errors.push(`${sub}: count ${list.length}`);
    const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const c of list) hist[trueCount(c)]++;
    for (let k = 1; k <= 5; k++) {
      if (hist[k] !== 10) errors.push(`${sub}: ${k}-true = ${hist[k]} (want 10)`);
    }
  }

  const lived = cases.filter((c) => LIVED.has(Number(c.case_id.split(".").pop()))).length;
  return { errors, bySub, stmtCount: stmts.size, lived };
}

const allBase = JSON.parse(fs.readFileSync(basePath, "utf8"));
const cases = [];

for (const sub of ["2.1", "2.2", "2.3"]) {
  const base = allBase.filter((c) => c.subsection === sub);
  if (base.length !== 30) throw new Error(`${sub}: expected 30 base cases, got ${base.length}`);
  const extra = EXTRA[sub];
  if (extra.length !== 20) throw new Error(`${sub}: expected 20 extra cases, got ${extra.length}`);
  cases.push(...buildSection(sub, base, extra, TRUE_ORDER[sub]));
}

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));

const { errors, bySub, stmtCount, lived } = validate(cases);
if (errors.length) {
  console.error("Validation failed:\n" + errors.slice(0, 50).join("\n"));
  if (errors.length > 50) console.error(`… +${errors.length - 50} more`);
  process.exit(1);
}

fs.writeFileSync(outJson, JSON.stringify(cases, null, 2) + "\n");

console.log("OK:", outJson);
console.log("Cases:", cases.length, "| Unique statements:", stmtCount);
console.log("Lived-context cases:", lived);
console.log("TRUE-count histograms:");
for (const sub of ["2.1", "2.2", "2.3"]) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[trueCount(c)]++;
  console.log(sub, JSON.stringify(hist));
}
console.log("Sample:", JSON.stringify(cases.find((c) => c.case_id === "CASE 2.1.05"), null, 2));
