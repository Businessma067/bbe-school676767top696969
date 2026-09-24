import { loadMathChapterTasks, isDemoMathTaskLocked } from "../src/data/math-chapters.ts";
import { swapWisoDemoMathBlocks } from "../src/data/wiso-demo-math.ts";

async function main() {
  for (const ch of [1, 2, 3, 4, 5, 6, 7, 8] as const) {
    const tasks = await loadMathChapterTasks(ch);
    const free = tasks.filter((_, i) => !isDemoMathTaskLocked(ch, i, tasks));
    console.log(
      "BBE ch" + ch,
      free.length,
      free.map((t) => t.case_id).join(", "),
      "subs",
      [...new Set(free.map((t) => t.subsection))].join("|"),
    );
    const swapped = swapWisoDemoMathBlocks(ch, tasks);
    const wfree = swapped.filter((_, i) => !isDemoMathTaskLocked(ch, i, swapped));
    console.log("WiSo ch" + ch, wfree.length, wfree.map((t) => t.case_id).join(", "));
    if (free[0]) {
      console.log(
        "  BBE0",
        free[0].title,
        "ctxLen",
        free[0].context?.length,
        "expl0",
        free[0].tactical_explanations?.[0]?.length,
        "diff",
        free[0].difficulty_level,
      );
      console.log("  statements[0]", free[0].statements?.[0]?.slice(0, 100));
    }
  }
}
main();
