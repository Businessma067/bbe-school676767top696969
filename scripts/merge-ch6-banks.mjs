/**
 * Merge Ch.6 text + table → economics-cases-ch6-subtopics.json + SQL.
 * Respects interleaved slot order from ch6-slot-plan.json.
 */
import fs from "node:fs";

const parts = ["6.1", "6.2", "6.3", "6.4", "6.5"];
const plan = JSON.parse(fs.readFileSync("scripts/ch6-slot-plan.json", "utf8"));
const all = [];

function loadMap(path) {
  const cases = JSON.parse(fs.readFileSync(path, "utf8"));
  const map = new Map(cases.map((c) => [c.case_id, c]));
  return map;
}

for (const sub of parts) {
  const textMap = loadMap(`scripts/ch6-part-${sub}-text.json`);
  const tableMap = loadMap(`scripts/ch6-part-${sub}-table.json`);
  const slots = plan[sub];
  const textN = slots.filter((s) => s.half === "text").length;
  const tableN = slots.filter((s) => s.half === "table").length;
  if (textMap.size !== textN) throw new Error(`${sub} text ${textMap.size} !== ${textN}`);
  if (tableMap.size !== tableN) throw new Error(`${sub} table ${tableMap.size} !== ${tableN}`);

  for (const s of slots) {
    const c = s.half === "text" ? textMap.get(s.case_id) : tableMap.get(s.case_id);
    if (!c) throw new Error(`missing ${s.case_id}`);
    if (JSON.stringify(c.answer_key) !== JSON.stringify(s.answer_key)) {
      throw new Error(`key mismatch ${c.case_id}`);
    }
    if (c.difficulty_level !== s.difficulty_level) {
      throw new Error(`diff mismatch ${c.case_id}`);
    }
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
  "src/data/economics-cases-ch6-subtopics.json",
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
lines.push(
  "-- Chapter 6 subtopics 6.1–6.5: proportional Full Course bank (~625; text+table interleaved).",
);
lines.push(
  "DELETE FROM public.economics_cases WHERE subsection IN ('6.1','6.2','6.3','6.4','6.5') AND tier = 'full' AND case_id LIKE 'CASE 6.%';",
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
  "supabase/migrations/20260806230000_economics_ch6_subtopic_cases.sql",
  lines.join("\n"),
);
console.log("sql ok");
