import { writeFileSync, mkdirSync } from "fs";
import {
  loadMathChapterTasks,
  loadDemoMathChapterTasks,
} from "../src/data/math-chapters.ts";

mkdirSync("/tmp/wiso-math-en", { recursive: true });
for (const ch of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) {
  const tasks = await loadMathChapterTasks(ch);
  writeFileSync(
    `/tmp/wiso-math-en/ch${ch}.json`,
    JSON.stringify(
      tasks.map((t) => ({
        id: t.case_id || t.id,
        title: t.title,
        context: t.context,
        statements: t.statements,
        tactical_explanations: t.tactical_explanations,
        solution_overview: t.solution_overview,
        answer_key: t.answer_key,
      })),
    ),
  );
  console.log("ch", ch, tasks.length);
}
const demo = await loadDemoMathChapterTasks(4);
writeFileSync(
  "/tmp/wiso-math-en/demo-ch4.json",
  JSON.stringify(
    demo.map((t) => ({
      id: t.case_id || t.id,
      statements: t.statements,
      tactical_explanations: t.tactical_explanations,
      solution_overview: t.solution_overview,
    })),
  ),
);
console.log("demo4", demo.length);
