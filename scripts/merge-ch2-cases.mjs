/**
 * Merge ch2-part-*.json → economics-cases-ch2-subtopics.json + SQL migration.
 * Run: node scripts/merge-ch2-cases.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dataDir = path.join(root, "src", "data");
const parts = [
  "ch2-part-2.1-2.2.json",
  "ch2-part-2.3-2.4.json",
  "ch2-part-2.5-2.6.json",
  "ch2-part-2.7.json",
];

const missing = parts.filter((f) => !fs.existsSync(path.join(dataDir, f)));
if (missing.length) {
  console.error("Missing parts:", missing.join(", "));
  process.exit(1);
}

const cases = parts.flatMap((f) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf8")),
);

function trueCount(c) {
  return c.answer_key.filter(Boolean).length;
}

const errors = [];
const bySub = {};
const ids = new Set();
const statementFingerprints = new Map();

for (const c of cases) {
  if (!/^2\.[1-7]$/.test(c.subsection)) errors.push(`${c.case_id}: bad subsection`);
  if (!Array.isArray(c.statements) || c.statements.length !== 5)
    errors.push(`${c.case_id}: need 5 statements`);
  if (!Array.isArray(c.answer_key) || c.answer_key.length !== 5)
    errors.push(`${c.case_id}: need 5 answers`);
  if (!Array.isArray(c.tactical_explanations) || c.tactical_explanations.length !== 5)
    errors.push(`${c.case_id}: need 5 explanations`);
  const tc = trueCount(c);
  if (tc < 1 || tc > 5) errors.push(`${c.case_id}: true count ${tc} out of 1–5`);
  for (let i = 0; i < 5; i++) {
    const s = c.statements[i];
    if (typeof s !== "string" || s.length < 40 || !/[.!?]"?$/.test(s.trim()) && !/[.!?]$/.test(s.trim())) {
      // soft: prefer ending punctuation
      if (typeof s === "string" && s.length < 40) errors.push(`${c.case_id}[${i}]: statement too short`);
    }
    const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
    if (!String(c.tactical_explanations[i] || "").startsWith(pref)) {
      errors.push(`${c.case_id}[${i}]: explanation prefix mismatch`);
    }
    const fp = s.trim().toLowerCase();
    if (statementFingerprints.has(fp)) {
      errors.push(`Duplicate statement: ${c.case_id} <-> ${statementFingerprints.get(fp)}`);
    } else statementFingerprints.set(fp, c.case_id);
  }
  if (ids.has(c.case_id)) errors.push(`Duplicate case_id ${c.case_id}`);
  ids.add(c.case_id);
  (bySub[c.subsection] ||= []).push(c);
}

for (const sub of ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"]) {
  const list = bySub[sub] || [];
  if (list.length !== 20) errors.push(`${sub}: expected 20 got ${list.length}`);
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of list) hist[trueCount(c)]++;
  for (let k = 1; k <= 5; k++) {
    if (hist[k] !== 4) errors.push(`${sub}: true-count ${k} appears ${hist[k]}× (want 4)`);
  }
}

if (cases.length !== 140) errors.push(`Total ${cases.length} ≠ 140`);

if (errors.length) {
  console.error("Validation failed:\n" + errors.slice(0, 80).join("\n"));
  if (errors.length > 80) console.error(`… +${errors.length - 80} more`);
  process.exit(1);
}

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));

const outJson = path.join(dataDir, "economics-cases-ch2-subtopics.json");
fs.writeFileSync(outJson, JSON.stringify(cases, null, 2) + "\n");

function sqlEscape(s) {
  return String(s).replace(/'/g, "''");
}
function sqlArray(arr) {
  return "ARRAY[" + arr.map((x) => `'${sqlEscape(x)}'`).join(", ") + "]";
}
function sqlBoolArray(arr) {
  return "ARRAY[" + arr.map((x) => (x ? "true" : "false")).join(", ") + "]";
}

const lines = [];
lines.push("-- Chapter 2 book subtopics 2.1–2.7: 20 Full Course–style cases each (140).");
lines.push("-- subsection tagged as '2.1'…'2.7' (does not replace legacy chapter rows with subsection='2').");
lines.push("INSERT INTO public.economics_cases");
lines.push(
  "  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)",
);
lines.push("VALUES");

const valueRows = cases.map((c, i) => {
  const sort = Number(c.case_id.split(".").pop());
  return `( '${c.subsection}', '${sqlEscape(c.case_id)}', '${sqlEscape(c.title)}', '${sqlEscape(c.context)}', ${sqlArray(c.statements)}, ${sqlBoolArray(c.answer_key)}, ${sqlArray(c.tactical_explanations)}, '${sqlEscape(c.difficulty_level)}', ${sort}, 'full' )`;
});
lines.push(valueRows.join(",\n"));
lines.push(
  "ON CONFLICT (case_id, tier) DO UPDATE SET",
);
lines.push("  subsection = EXCLUDED.subsection,");
lines.push("  title = EXCLUDED.title,");
lines.push("  context = EXCLUDED.context,");
lines.push("  statements = EXCLUDED.statements,");
lines.push("  answer_key = EXCLUDED.answer_key,");
lines.push("  tactical_explanations = EXCLUDED.tactical_explanations,");
lines.push("  difficulty_level = EXCLUDED.difficulty_level,");
lines.push("  sort_order = EXCLUDED.sort_order,");
lines.push("  tier = EXCLUDED.tier;");
lines.push("");

const sqlPath = path.join(
  root,
  "supabase",
  "migrations",
  "20260805233000_economics_ch2_subtopic_cases.sql",
);
fs.writeFileSync(sqlPath, lines.join("\n"));

console.log("OK: wrote", outJson, "and", sqlPath);
console.log("TRUE-count histograms:");
for (const sub of Object.keys(bySub).sort()) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[trueCount(c)]++;
  console.log(sub, hist);
}
