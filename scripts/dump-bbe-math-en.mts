import { writeFileSync, mkdirSync } from "fs";
import { loadMathChapterTasks } from "../src/data/math-chapters.ts";

const out = "textbook/output/wiso_math_en";
mkdirSync(out, { recursive: true });

for (let ch = 1; ch <= 13; ch++) {
  const tasks = await loadMathChapterTasks(ch);
  const slim = tasks.map((t) => ({
    case_id: t.case_id,
    title: t.title,
    context: t.context,
    statements: t.statements,
    tactical_explanations: t.tactical_explanations,
    solution_overview: t.solution_overview ?? null,
    answer_key: t.answer_key,
  }));
  writeFileSync(`${out}/ch${ch}.json`, JSON.stringify(slim, null, 2), "utf8");
  console.log(`ch${ch}`, slim.length);
}
