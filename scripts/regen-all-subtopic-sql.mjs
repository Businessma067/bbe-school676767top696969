/** Regenerate SQL migrations for economics subtopic banks (chapters 2–6). */
import fs from "node:fs";
import path from "node:path";

function esc(s) {
  return String(s).replace(/'/g, "''");
}
function arr(a) {
  return "ARRAY[" + a.map((x) => `'${esc(x)}'`).join(", ") + "]";
}
function barr(a) {
  return "ARRAY[" + a.map((x) => (x ? "true" : "false")).join(", ") + "]";
}

function writeChapter({ jsonPath, sqlPath, headerLines, deleteSql, conflict }) {
  const cases = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));
  const lines = [...headerLines];
  if (deleteSql) {
    lines.push(deleteSql);
    lines.push("");
  }
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
  lines.push(conflict);
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
  fs.mkdirSync(path.dirname(sqlPath), { recursive: true });
  fs.writeFileSync(sqlPath, lines.join("\n"));
  console.log(sqlPath, cases.length);
}

const conflict = "ON CONFLICT (case_id, tier) DO UPDATE SET";

writeChapter({
  jsonPath: "src/data/economics-cases-ch2-subtopics.json",
  sqlPath: "supabase/migrations/20260806030000_economics_ch2_subtopic_cases_v3.sql",
  headerLines: [
    "-- Chapter 2 book subtopics 2.1–2.7: expanded tactical explanations.",
  ],
  deleteSql:
    "DELETE FROM public.economics_cases WHERE subsection IN ('2.1','2.2','2.3','2.4','2.5','2.6','2.7');",
  conflict,
});

writeChapter({
  jsonPath: "src/data/economics-cases-ch3-subtopics.json",
  sqlPath: "supabase/migrations/20260806020000_economics_ch3_subtopic_cases.sql",
  headerLines: ["-- Chapter 3 subtopics 3.1–3.6: expanded tactical explanations."],
  deleteSql:
    "DELETE FROM public.economics_cases WHERE subsection IN ('3.1','3.2','3.3','3.4','3.5','3.6');",
  conflict,
});

writeChapter({
  jsonPath: "src/data/economics-cases-ch4-subtopics.json",
  sqlPath: "supabase/migrations/20260806180000_economics_ch4_subtopic_cases.sql",
  headerLines: ["-- Chapter 4 subtopics 4.1–4.6: expanded tactical explanations."],
  deleteSql:
    "DELETE FROM public.economics_cases WHERE subsection IN ('4.1','4.2','4.3','4.4','4.5','4.6');",
  conflict,
});

writeChapter({
  jsonPath: "src/data/economics-cases-ch5-subtopics.json",
  sqlPath: "supabase/migrations/20260806200000_economics_ch5_subtopic_cases.sql",
  headerLines: ["-- Chapter 5 subtopics 5.1–5.7: expanded tactical explanations."],
  deleteSql:
    "DELETE FROM public.economics_cases WHERE subsection IN ('5.1','5.2','5.3','5.4','5.5','5.6','5.7');",
  conflict,
});

writeChapter({
  jsonPath: "src/data/economics-cases-ch6-subtopics.json",
  sqlPath: "supabase/migrations/20260806230000_economics_ch6_subtopic_cases.sql",
  headerLines: [
    "-- Chapter 6 subtopics 6.1–6.5: expanded tactical explanations (text+table interleaved).",
  ],
  deleteSql:
    "DELETE FROM public.economics_cases WHERE subsection IN ('6.1','6.2','6.3','6.4','6.5') AND tier = 'full' AND case_id LIKE 'CASE 6.%';",
  conflict,
});
