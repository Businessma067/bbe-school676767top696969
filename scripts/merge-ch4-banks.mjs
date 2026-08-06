/**
 * Merge ch4 part files → economics-cases-ch4-subtopics.json + SQL migration.
 */
import fs from "node:fs";

const parts = ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"];
const plan = JSON.parse(fs.readFileSync("scripts/ch4-slot-plan.json", "utf8"));
const all = [];

for (const sub of parts) {
  const path = `scripts/ch4-part-${sub}.json`;
  const cases = JSON.parse(fs.readFileSync(path, "utf8"));
  if (cases.length !== 50) throw new Error(`${sub} has ${cases.length}`);
  const slots = plan[sub];
  for (let i = 0; i < 50; i++) {
    const c = cases[i];
    const s = slots[i];
    if (c.case_id !== s.case_id) throw new Error(`id mismatch ${c.case_id} vs ${s.case_id}`);
    if (JSON.stringify(c.answer_key) !== JSON.stringify(s.answer_key)) {
      throw new Error(`key mismatch ${c.case_id}`);
    }
    if (c.difficulty_level !== s.difficulty_level) {
      throw new Error(`diff mismatch ${c.case_id}`);
    }
    // fix explanation prefixes to match keys
    for (let j = 0; j < 5; j++) {
      const want = c.answer_key[j] ? "TRUE" : "FALSE";
      const e = String(c.tactical_explanations[j] || "");
      if (!e.startsWith(want)) {
        const body = e.replace(/^(TRUE|FALSE)\s*[—–-]\s*/i, "");
        c.tactical_explanations[j] = `${want} — ${body}`;
      }
    }
    all.push(c);
  }
}

fs.writeFileSync(
  "src/data/economics-cases-ch4-subtopics.json",
  JSON.stringify(all, null, 2) + "\n",
);
console.log("merged", all.length);

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
lines.push("-- Chapter 4 subtopics 4.1–4.6: 50 Full Course cases each (300 total).");
lines.push(
  "DELETE FROM public.economics_cases WHERE subsection IN ('4.1','4.2','4.3','4.4','4.5','4.6');",
);
lines.push("");
lines.push("INSERT INTO public.economics_cases");
lines.push(
  "  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)",
);
lines.push("VALUES");
const rows = all.map((c) => {
  const sort = Number(c.case_id.split(".").pop());
  return `( '${c.subsection}', '${esc(c.case_id)}', '${esc(c.title)}', '${esc(c.context)}', ${arr(c.statements)}, ${barr(c.answer_key)}, ${arr(c.tactical_explanations)}, '${esc(c.difficulty_level)}', ${sort}, 'full' )`;
});
lines.push(rows.join(",\n"));
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
  "supabase/migrations/20260806180000_economics_ch4_subtopic_cases.sql",
  lines.join("\n"),
);
console.log("sql ok");
