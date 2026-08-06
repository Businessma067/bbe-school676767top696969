import fs from "node:fs";

const cases = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch3-subtopics.json", "utf8"),
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
lines.push(
  "-- Chapter 3 subtopics 3.1–3.6: Full Course cases (180 total).",
);
lines.push(
  "DELETE FROM public.economics_cases WHERE subsection IN ('3.1','3.2','3.3','3.4','3.5','3.6');",
);
lines.push("");
lines.push("INSERT INTO public.economics_cases");
lines.push(
  "  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)",
);
lines.push("VALUES");
const rows = cases.map((c) => {
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
  "supabase/migrations/20260806020000_economics_ch3_subtopic_cases.sql",
  lines.join("\n"),
);
console.log("ok", cases.length);
