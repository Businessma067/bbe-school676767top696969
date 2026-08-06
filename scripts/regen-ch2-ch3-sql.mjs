/** Regenerate Ch2/Ch3 SQL from current subtopics JSON (audit paraphrase fixes). */
import fs from "node:fs";

function esc(s) {
  return String(s).replace(/'/g, "''");
}
function arr(a) {
  return "ARRAY[" + a.map((x) => `'${esc(x)}'`).join(", ") + "]";
}
function barr(a) {
  return "ARRAY[" + a.map((x) => (x ? "true" : "false")).join(", ") + "]";
}

function writeChapter({ jsonPath, sqlPath, headerLines, deleteSubs, conflict }) {
  const cases = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));
  const lines = [...headerLines];
  if (deleteSubs?.length) {
    lines.push(
      `DELETE FROM public.economics_cases WHERE subsection IN (${deleteSubs
        .map((s) => `'${s}'`)
        .join(",")});`,
    );
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
  fs.writeFileSync(sqlPath, lines.join("\n"));
  console.log(sqlPath, cases.length);
}

writeChapter({
  jsonPath: "src/data/economics-cases-ch2-subtopics.json",
  sqlPath: "supabase/migrations/20260806030000_economics_ch2_subtopic_cases_v3.sql",
  headerLines: [
    "-- Chapter 2 book subtopics 2.1–2.7: regenerated from economics-cases-ch2-subtopics.json after audit paraphrases.",
  ],
  deleteSubs: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"],
  conflict: "ON CONFLICT (case_id, tier) DO UPDATE SET",
});

writeChapter({
  jsonPath: "src/data/economics-cases-ch3-subtopics.json",
  sqlPath: "supabase/migrations/20260806020000_economics_ch3_subtopic_cases.sql",
  headerLines: [
    "-- Chapter 3 subtopics 3.1–3.6: regenerated from economics-cases-ch3-subtopics.json after audit paraphrases.",
  ],
  deleteSubs: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"],
  conflict: "ON CONFLICT (case_id, tier) DO UPDATE SET",
});

const ch2 = fs.readFileSync(
  "supabase/migrations/20260806030000_economics_ch2_subtopic_cases_v3.sql",
  "utf8",
);
const ch3 = fs.readFileSync(
  "supabase/migrations/20260806020000_economics_ch3_subtopic_cases.sql",
  "utf8",
);
console.log("ch2 patched", ch2.includes("Without money, exchange under barter"));
console.log(
  "ch3 patched",
  ch3.includes("Staff time spent diagnosing") ||
    ch3.includes("Hands-on technical fault-finding"),
);
