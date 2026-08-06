/**
 * Merge ch2 part JSONs (2.1–2.7 × 50) → economics-cases-ch2-subtopics.json + SQL v3.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dataDir = path.join(root, "src", "data");
const parts = [
  "ch2-part-2.1-2.3.json",
  "ch2-part-2.4-2.5.json",
  "ch2-part-2.6-2.7.json",
];

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
  if (!/^2\.[1-7]$/.test(c.subsection)) errors.push(`${c.case_id}: bad sub`);
  if (!/Evaluate the following economic assertions:\s*$/i.test(c.context.trim())) {
    errors.push(`${c.case_id}: context style`);
  }
  if (/\bthe book\b|\(alt\s+/i.test(JSON.stringify(c))) errors.push(`${c.case_id}: banned`);
  if (c.statements?.length !== 5) errors.push(`${c.case_id}: stmts`);
  const n = tc(c);
  if (n < 1 || n > 5) errors.push(`${c.case_id}: true ${n}`);
  for (let i = 0; i < 5; i++) {
    const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
    if (!String(c.tactical_explanations[i] || "").startsWith(pref)) {
      errors.push(`${c.case_id}[${i}] prefix`);
    }
    const fp = String(c.statements[i]).trim().toLowerCase();
    if (stmts.has(fp)) errors.push(`dup ${c.case_id}<->${stmts.get(fp)}`);
    else stmts.set(fp, c.case_id);
  }
  if (ids.has(c.case_id)) errors.push(`dup id ${c.case_id}`);
  ids.add(c.case_id);
  (bySub[c.subsection] ||= []).push(c);
}

for (const sub of ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"]) {
  const list = bySub[sub] || [];
  if (list.length !== 50) errors.push(`${sub}: ${list.length}≠50`);
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of list) hist[tc(c)]++;
  for (let k = 1; k <= 5; k++) if (hist[k] !== 10) errors.push(`${sub} ${k}T=${hist[k]}`);
}

if (cases.length !== 350) errors.push(`total ${cases.length}`);
if (errors.length) {
  console.error(errors.slice(0, 80).join("\n"));
  process.exit(1);
}

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));
fs.writeFileSync(
  path.join(dataDir, "economics-cases-ch2-subtopics.json"),
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
lines.push("-- Chapter 2 subtopics 2.1–2.7: 50 FC-style cases each (350). v3");
lines.push(
  "DELETE FROM public.economics_cases WHERE subsection IN ('2.1','2.2','2.3','2.4','2.5','2.6','2.7');",
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
  path.join(root, "supabase/migrations/20260806030000_economics_ch2_subtopic_cases_v3.sql"),
  lines.join("\n"),
);

console.log("OK ch2 350");
for (const sub of Object.keys(bySub).sort()) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[tc(c)]++;
  console.log(sub, hist);
}
