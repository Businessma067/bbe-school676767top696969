/**
 * Server-only WiSo Full Course banks for Custom Mock Builder
 * (Wirtschaft / Mathematik). Keep off the builder page so the
 * client does not download the entire course JSON.
 */

import { loadAllWisoEconomicsChapterTasks } from "@/data/wiso-economics-chapters";
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

async function loadAllWisoMathTasks(): Promise<WisoCustomMockBankTask[]> {
  const loaded = await Promise.all(
    WISO_MATH_CHAPTERS.map(async (ch) => ({
      num: ch.num,
      tasks: await loadWisoMathChapterTasks(ch.num, "de"),
    })),
  );
  return loaded.flatMap(({ num, tasks }) =>
    tasks.map((t) => mathTaskToBank(num, t)).filter((t): t is WisoCustomMockBankTask => t != null),
  );
}

export async function getWisoLocalBuilderTasks(
  subject: WisoCustomMockSubjectId,
): Promise<WisoCustomMockBankTask[]> {
  if (subject === "math") {
    return loadAllWisoMathTasks();
  }
  const loaded = await loadAllWisoEconomicsChapterTasks();
  return loaded.flatMap(({ tasks }) => tasks.map(economicsTaskToBank));
}
