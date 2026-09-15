/**
 * Syntax / KaTeX audit for Mock Exam 4 (all 34 tasks).
 * Extracts every $...$ / $$...$$ segment and renders with katex.throwOnError.
 *
 * Run: node scripts/audit-mock-4-katex.mjs
 * Exit 0 only when every segment renders and structural 5-packs match.
 */
import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const root = path.resolve("src/data/mock-exam-4-sourced.json");
const d = JSON.parse(fs.readFileSync(root, "utf8"));

function extractMath(s) {
  if (!s || typeof s !== "string") return [];
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$|\$((?:\\\$|[^$])+)\$/g;
  let m;
  while ((m = re.exec(s))) {
    out.push({ display: Boolean(m[1]), src: (m[1] ?? m[2]).trim() });
  }
  return out;
}

function allStrings(obj, acc = []) {
  if (typeof obj === "string") acc.push(obj);
  else if (Array.isArray(obj)) obj.forEach((v) => allStrings(v, acc));
  else if (obj && typeof obj === "object") Object.values(obj).forEach((v) => allStrings(v, acc));
  return acc;
}

const failures = [];
let segments = 0;

function auditTask(examQ, t) {
  const stmts = t.statements || [];
  const keys = t.answer_key || [];
  const expl = t.tactical_explanations || [];
  if (stmts.length !== 5 || keys.length !== 5 || expl.length !== 5) {
    failures.push({
      q: examQ,
      id: t.case_id,
      err: `length stmts=${stmts.length} keys=${keys.length} expl=${expl.length}`,
    });
  }
  for (let i = 0; i < Math.min(5, expl.length); i++) {
    const hm = String(expl[i] || "").match(/→\s*(True|False)/);
    if (hm && (hm[1] === "True") !== Boolean(keys[i])) {
      failures.push({
        q: examQ,
        id: t.case_id,
        err: `expl ${String.fromCharCode(65 + i)} header ${hm[1]} vs key ${keys[i]}`,
      });
    }
    if (!String(stmts[i] || "").trim()) {
      failures.push({ q: examQ, id: t.case_id, err: `empty statement ${String.fromCharCode(65 + i)}` });
    }
    if (!String(expl[i] || "").trim()) {
      failures.push({ q: examQ, id: t.case_id, err: `empty explanation ${String.fromCharCode(65 + i)}` });
    }
  }
  for (const s of allStrings(t)) {
    for (const piece of extractMath(s)) {
      segments++;
      try {
        katex.renderToString(piece.src, {
          throwOnError: true,
          displayMode: piece.display,
          strict: "ignore",
        });
      } catch (e) {
        failures.push({
          q: examQ,
          id: t.case_id,
          err: String(e.message || e).slice(0, 200),
          src: piece.src.slice(0, 140).replace(/\n/g, " "),
        });
      }
    }
  }
}

d.economics.forEach((t, i) => auditTask(i + 1, t));
d.english.tasks.forEach((t, i) => auditTask(i + 11, t));
d.math.forEach((t, i) => auditTask(i + 22, t));

console.log(
  JSON.stringify(
    {
      tasks: d.economics.length + d.english.tasks.length + d.math.length,
      segments,
      failures: failures.length,
    },
    null,
    2,
  ),
);
if (failures.length) {
  for (const f of failures.slice(0, 40)) console.error(JSON.stringify(f));
  process.exit(1);
}
console.log("Mock 4 KaTeX/syntax audit OK");
