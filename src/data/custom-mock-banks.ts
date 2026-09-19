/**
 * Server-only Full Course banks for Custom Mock Builder (Economics / Math / English).
 * Keep this module off the builder page so the client does not download
 * the entire course JSON. Banks are loaded on demand via dynamic import.
 */

import {
  ENGLISH_CHAPTERS,
  type EnglishTask,
  type EnglishTaskKind,
} from "@/data/english-chapters";
import {
  loadAllEconomicsChapterTasks,
  type EconomicsTask,
} from "@/data/economics-chapters";
import {
  loadAllMathChapterTasks,
  type MathTask,
} from "@/data/math-chapters";
import { ENGLISH_POINTS_BY_TYPE, SCORING_CONFIG } from "@/config/scoring-config";

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
  /** English section kind for official per-type maxima. */
  kind?: EnglishTaskKind;
  /** Explicit task maximum (overrides subject default). */
  maxPoints?: number;
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
    maxPoints: SCORING_CONFIG.math.defaultMaxPerTask,
  };
}

function englishTaskToBank(
  t: EnglishTask,
  chapterKey: "texts" | "grammar" | "vocabulary",
): CustomMockBankTask {
  const kind: EnglishTaskKind =
    t.kind ??
    (chapterKey === "texts" ? "reading" : chapterKey === "grammar" ? "grammar" : "vocabulary");
  const maxPoints =
    kind === "reading"
      ? ENGLISH_POINTS_BY_TYPE.text
      : kind === "grammar"
        ? ENGLISH_POINTS_BY_TYPE.grammar
        : ENGLISH_POINTS_BY_TYPE.vocabulary;
  return {
    id: t.id,
    subsection: t.subsection,
    context: t.context ?? "",
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    passage: t.passage,
    solution_overview: t.solution_overview,
    kind,
    maxPoints,
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
    maxPoints: SCORING_CONFIG.economics.defaultMaxPerTask,
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
  return ENGLISH_CHAPTERS.flatMap((ch) =>
    ch.tasks.map((t) => englishTaskToBank(t, ch.key)),
  );
}
