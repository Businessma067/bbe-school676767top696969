/**
 * Server-only Full Course banks for Custom Mock Builder (Economics / Math / English).
 * Keep this module off the builder page so the client does not download
 * the entire course JSON. Banks are loaded on demand via dynamic import.
 */

import {
  ENGLISH_CHAPTERS,
  type EnglishTask,
} from "@/data/english-chapters";
import {
  loadAllEconomicsChapterTasks,
  type EconomicsTask,
} from "@/data/economics-chapters";
import {
  loadAllMathChapterTasks,
  type MathTask,
} from "@/data/math-chapters";

export type CustomMockBankTask = {
  id: string;
  subsection: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  passage?: string;
  figure?: string;
  tables_markdown?: string;
  solution_overview?: string;
  case_id?: string;
};

function mathTaskToBank(chNum: number, t: MathTask): CustomMockBankTask | null {
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
  };
}

function englishTaskToBank(t: EnglishTask): CustomMockBankTask {
  return {
    id: t.id,
    subsection: t.subsection,
    context: t.context ?? "",
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    passage: t.passage,
    solution_overview: t.solution_overview,
  };
}

function economicsTaskToBank(t: EconomicsTask): CustomMockBankTask {
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

export async function getLocalBuilderTasks(
  subject: "economics" | "math" | "english",
): Promise<CustomMockBankTask[]> {
  if (subject === "math") {
    const loaded = await loadAllMathChapterTasks();
    return loaded.flatMap(({ num, tasks }) =>
      tasks.map((t) => mathTaskToBank(num, t)).filter((t): t is CustomMockBankTask => t != null),
    );
  }
  if (subject === "economics") {
    const loaded = await loadAllEconomicsChapterTasks();
    return loaded.flatMap(({ tasks }) => tasks.map(economicsTaskToBank));
  }
  return ENGLISH_CHAPTERS.flatMap((ch) => ch.tasks.map(englishTaskToBank));
}
