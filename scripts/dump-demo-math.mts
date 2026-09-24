import { loadMathChapterTasks, isDemoMathTaskLocked } from "../src/data/math-chapters.ts";
import { swapWisoDemoMathBlocks } from "../src/data/wiso-demo-math.ts";
import { writeFileSync } from "fs";

async function main() {
  const out: Record<string, unknown> = {};
  const meta: { track: string; chapter: number; case_id: string }[] = [];
  for (const ch of [1, 2, 3, 4, 5, 6, 7, 8] as const) {
    const tasks = await loadMathChapterTasks(ch);
    const bbe = tasks.filter((_, i) => !isDemoMathTaskLocked(ch, i, tasks));
    const swapped = swapWisoDemoMathBlocks(ch, tasks);
    const wiso = swapped.filter((_, i) => !isDemoMathTaskLocked(ch, i, swapped));
    for (const t of bbe) {
      out[t.case_id] = {
        case_id: t.case_id,
        track: "bbe",
        chapter: ch,
        subsection: t.subsection,
        title: t.title,
        context: t.context,
        statements: t.statements,
        answer_key: t.answer_key,
        tactical_explanations: t.tactical_explanations,
        solution_overview: t.solution_overview,
        difficulty_level: t.difficulty_level,
      };
      meta.push({ track: "bbe", chapter: ch, case_id: t.case_id });
    }
    for (const t of wiso) {
      out[t.case_id] = {
        case_id: t.case_id,
        track: "wiso",
        chapter: ch,
        subsection: t.subsection,
        title: t.title,
        context: t.context,
        statements: t.statements,
        answer_key: t.answer_key,
        tactical_explanations: t.tactical_explanations,
        solution_overview: t.solution_overview,
        difficulty_level: t.difficulty_level,
      };
      meta.push({ track: "wiso", chapter: ch, case_id: t.case_id });
    }
  }
  writeFileSync("/tmp/demo-math-free-source.json", JSON.stringify(out, null, 2));
  writeFileSync("/tmp/demo-math-free-meta.json", JSON.stringify(meta, null, 2));
  console.log("keys", Object.keys(out).length, "meta", meta.length);
}
main();
