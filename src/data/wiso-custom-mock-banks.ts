/**
 * Server-only WiSo Full Course banks for Custom Mock Builder
 * (Wirtschaft / Mathematik). Keep off the builder page so the
 * client does not download the entire course JSON.
 */

import {
  loadAllWisoEconomicsChapterTasks,
  loadWisoEconomicsChapterTasks,
} from "@/data/wiso-economics-chapters";
import type { EconomicsTask } from "@/data/economics-chapters";
import { loadWisoMathChapterTasks, WISO_MATH_CHAPTERS } from "@/data/wiso-math-chapters";
import type { MathTask } from "@/data/math-chapters";
import type { CustomMockBankTask } from "@/data/custom-mock-banks";
import type { WisoCustomMockSubjectId } from "@/config/wiso-custom-mock-builder";

export type WisoCustomMockBankTask = CustomMockBankTask;

function mathTaskToBank(chNum: number, t: MathTask): WisoCustomMockBankTask | null {
  if (t.placeholder || !(t.statements?.length > 0)) return null;
  return {
    id: t.id,
    subsection: t.subsection ?? String(chNum),
    context: t.context ?? "",
    statements: t.statements,
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    figure: t.figure,
    tables_markdown: t.tables_markdown,
    solution_overview: t.solution_overview,
    case_id: t.case_id,
  };
}

function economicsTaskToBank(t: EconomicsTask): WisoCustomMockBankTask {
  return {
    id: t.id,
    case_id: t.case_id,
    subsection: t.subsection,
    context: t.context ?? "",
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
  };
}

async function loadWisoMathTasks(chapterNums?: number[]): Promise<WisoCustomMockBankTask[]> {
  const chapters =
    chapterNums && chapterNums.length > 0
      ? WISO_MATH_CHAPTERS.filter((ch) => chapterNums.includes(ch.num))
      : WISO_MATH_CHAPTERS;
  const loaded = await Promise.all(
    chapters.map(async (ch) => ({
      num: ch.num,
      tasks: await loadWisoMathChapterTasks(ch.num, "de"),
    })),
  );
  return loaded.flatMap(({ num, tasks }) =>
    tasks.map((t) => mathTaskToBank(num, t)).filter((t): t is WisoCustomMockBankTask => t != null),
  );
}

/**
 * Load WiSo Full Course tasks for the builder.
 * When `chapterNums` is provided, only those chapter banks are imported.
 */
export async function getWisoLocalBuilderTasks(
  subject: WisoCustomMockSubjectId,
  chapterNums?: number[],
): Promise<WisoCustomMockBankTask[]> {
  const selected =
    chapterNums && chapterNums.length > 0
      ? [...new Set(chapterNums)].sort((a, b) => a - b)
      : null;

  if (subject === "math") {
    return loadWisoMathTasks(selected ?? undefined);
  }

  if (selected) {
    const loaded = await Promise.all(
      selected.map(async (num) => ({
        tasks: await loadWisoEconomicsChapterTasks(num),
      })),
    );
    return loaded.flatMap(({ tasks }) => tasks.map(economicsTaskToBank));
  }
  const loaded = await loadAllWisoEconomicsChapterTasks();
  return loaded.flatMap(({ tasks }) => tasks.map(economicsTaskToBank));
}
