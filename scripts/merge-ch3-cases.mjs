/**
 * Merge ch3 part JSONs → economics-cases-ch3-subtopics.json + SQL.
 * Run: node scripts/merge-ch3-cases.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dataDir = path.join(root, "src", "data");
const parts = ["ch3-part-3.1-3.3.json", "ch3-part-3.4-3.6.json"];

for (const f of parts) {
  if (!fs.existsSync(path.join(dataDir, f))) {
    console.error("Missing", f);
    process.exit(1);
  }
}

const cases = parts.flatMap((f) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf8")),
);

function tc(c) {
  return c.answer_key.filter(Boolean).length;
}

const errors = [];
const bySub = {};
const ids = new Set();
const stmts = new Map();

for (const c of cases) {
  if (!/^3\.[1-6]$/.test(c.subsection)) errors.push(`${c.case_id}: bad sub`);
  if (c.statements?.length !== 5) errors.push(`${c.case_id}: stmts`);
  if (c.answer_key?.length !== 5) errors.push(`${c.case_id}: key`);
  if (c.tactical_explanations?.length !== 5) errors.push(`${c.case_id}: expl`);
  const n = tc(c);
  if (n < 1 || n > 5) errors.push(`${c.case_id}: true ${n}`);
  for (let i = 0; i < 5; i++) {
    const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
    if (!String(c.tactical_explanations[i] || "").startsWith(pref)) {
      errors.push(`${c.case_id}[${i}] prefix`);
    }
    const blob = `${c.statements[i]} ${c.tactical_explanations[i]} ${c.context}`;
    if (/\bthe book\b|\baccording to the book\b|\(alt\s+/i.test(blob)) {
      errors.push(`${c.case_id}[${i}] banned phrase`);
    }
    const fp = String(c.statements[i]).trim().toLowerCase();
    if (stmts.has(fp)) errors.push(`dup stmt ${c.case_id} <-> ${stmts.get(fp)}`);
    else stmts.set(fp, c.case_id);
  }
  if (ids.has(c.case_id)) errors.push(`dup id ${c.case_id}`);
  ids.add(c.case_id);
  (bySub[c.subsection] ||= []).push(c);
}

for (const sub of ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"]) {
  const list = bySub[sub] || [];
  if (list.length !== 50) errors.push(`${sub}: ${list.length}≠50`);
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of list) hist[tc(c)]++;
  for (let k = 1; k <= 5; k++) {
    if (hist[k] !== 10) errors.push(`${sub}: ${k}T → ${hist[k]} (want 10)`);
  }
}

if (cases.length !== 300) errors.push(`total ${cases.length}≠300`);
if (errors.length) {
  console.error(errors.slice(0, 60).join("\n"));
  process.exit(1);
}

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));
fs.writeFileSync(
  path.join(dataDir, "economics-cases-ch3-subtopics.json"),
  JSON.stringify(cases, null, 2) + "\n",
);

function esc(s) {
  return String(s).replace(/'/g, "''");
}
function arr(a) {
  return "ARRAY[" + a.map((x) => `'${esc(x)}'`).join(", ") + "]";
}
function barr(a) {
  return "ARRAY[" + a.map((x) => (x ? "true" : "false")).join(", ") + "]";
}

const lines = [];
lines.push("-- Chapter 3 subtopics 3.1–3.6: 50 Full Course–style cases each (300).");
lines.push(
  "DELETE FROM public.economics_cases WHERE subsection IN ('3.1','3.2','3.3','3.4','3.5','3.6');",
);
lines.push("");
lines.push("INSERT INTO public.economics_cases");
lines.push(
  "  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)",
);
lines.push("VALUES");
lines.push(
  cases
    .map((c) => {
      const sort = Number(c.case_id.split(".").pop());
      return `( '${c.subsection}', '${esc(c.case_id)}', '${esc(c.title)}', '${esc(c.context)}', ${arr(c.statements)}, ${barr(c.answer_key)}, ${arr(c.tactical_explanations)}, '${esc(c.difficulty_level)}', ${sort}, 'full' )`;
    })
    .join(",\n"),
);
lines.push("ON CONFLICT (case_id, tier) DO UPDATE SET");
lines.push("  subsection = EXCLUDED.subsection,");
lines.push("  title = EXCLUDED.title,");
lines.push("  context = EXCLUDED.context,");
lines.push("  statements = EXCLUDED.statements,");
lines.push("  answer_key = EXCLUDED.answer_key,");
lines.push("  tactical_explanations = EXCLUDED.tactical_explanations,");
lines.push("  difficulty_level = EXCLUDED.difficulty_level,");
lines.push("  sort_order = EXCLUDED.sort_order;");
lines.push("");

fs.writeFileSync(
  path.join(root, "supabase/migrations/20260806020000_economics_ch3_subtopic_cases.sql"),
  lines.join("\n"),
);

console.log("OK 300 → JSON + SQL");
for (const sub of Object.keys(bySub).sort()) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[tc(c)]++;
  console.log(sub, hist);
}
