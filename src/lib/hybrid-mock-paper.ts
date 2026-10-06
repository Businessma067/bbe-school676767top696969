/**
 * Build a hybrid paper in the browser from the shared math banks and the
 * WiSo German reading bank, then keep it where the mock player can resolve it.
 */

import { loadMathChapterTasks, type MathTask } from "@/data/math-chapters";
import { loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";
import { WISO_GERMAN_CHAPTERS, type WisoGermanTask } from "@/data/wiso-german-chapters";
import { SCORING_CONFIG } from "@/config/scoring-config";
import {
  hybridMockExamId,
  mixForPaper,
  paperMinutes,
  paperTitle,
  parseHybridMockExamId,
  type HybridPaperMix,
} from "@/config/hybrid-mock-builder";
import { shuffle } from "@/lib/custom-mock-builder/pick";
import { taskIsTranslated } from "@/lib/hybrid-math-pair";
import type { ExamQuestion } from "@/lib/mock-exams";
import { logHybridPaper } from "@/lib/hybrid-progress";

const STORE_KEY = "hybrid.mock.papers.v1";

export type HybridPaperRecord = {
  id: string;
  examId: string;
  title: string;
  lean: number;
  mix: HybridPaperMix;
  mathChapters: number[];
  germanTexts: string[];
  durationMinutes: number;
  pointsTotal: number;
  questions: ExamQuestion[];
  createdAt: string;
};

export type HybridPaperRequest = {
  total: number;
  lean: number;
  mathChapters: number[];
  germanTexts: string[];
};

export function germanTextCatalog(): { id: string; title: string; tasks: number }[] {
  const chapter = WISO_GERMAN_CHAPTERS[0];
  if (!chapter) return [];
  return chapter.subsections.map((section) => ({
    id: section.id,
    title: section.title,
    tasks: chapter.tasks.filter((task) => task.subsection === section.id).length,
  }));
}

type MathPair = { en: MathTask; de: MathTask };

/** One task per case id, then fill from the remainder if the chapter is short. */
function pickUnique<T extends { case_id: string }>(pool: T[], count: number): T[] {
  const seen = new Set<string>();
  const unique: T[] = [];
  const extra: T[] = [];
  for (const item of pool) {
    if (seen.has(item.case_id)) extra.push(item);
    else {
      seen.add(item.case_id);
      unique.push(item);
    }
  }
  return [...unique, ...extra].slice(0, count);
}

/**
 * German-stem slots take a translated overlay when one exists.
 * The same case is not used in both languages.
 */
function pickMathPairs(pool: MathPair[], mathCount: number, deMath: number): MathPair[] {
  const unique = pickUnique(
    shuffle(pool).map((pair) => ({ ...pair, case_id: pair.en.case_id })),
    pool.length,
  );
  const translated = unique.filter((pair) => taskIsTranslated(pair.en, pair.de));
  const plain = unique.filter((pair) => !taskIsTranslated(pair.en, pair.de));
  const germanSlots = [...translated, ...plain].slice(0, deMath);
  const usedIds = new Set(germanSlots.map((pair) => pair.en.id));
  const usedCases = new Set(germanSlots.map((pair) => pair.en.case_id));
  const englishNeed = mathCount - germanSlots.length;
  const freshCases = unique.filter(
    (pair) => !usedIds.has(pair.en.id) && !usedCases.has(pair.en.case_id),
  );
  const englishSlots =
    freshCases.length >= englishNeed
      ? freshCases.slice(0, englishNeed)
      : [
          ...freshCases,
          ...unique.filter(
            (pair) =>
              !usedIds.has(pair.en.id) && !freshCases.some((item) => item.en.id === pair.en.id),
          ),
        ].slice(0, englishNeed);
  return [...germanSlots, ...englishSlots];
}

function mathQuestion(
  task: MathTask,
  index: number,
  examId: string,
  lang: "en" | "de",
): ExamQuestion {
  const statements = task.statements.slice(0, 5);
  const keys = task.answer_key.slice(0, statements.length);
  const explanations = (task.tactical_explanations ?? []).slice(0, statements.length);
  while (keys.length < statements.length) keys.push(false);
  while (explanations.length < statements.length) explanations.push("");
  return {
    id: `${examId}-q${index}`,
    index,
    subject: "math",
    stem: task.context?.trim() || task.title,
    maxPoints: SCORING_CONFIG.math.defaultMaxPerTask,
    subtopicTag: lang === "de" ? `Mathematik · ${task.case_id}` : `Mathematics · ${task.case_id}`,
    figure: task.figure,
    tablesMarkdown: task.tables_markdown,
    solutionOverview: task.solution_overview,
    statements: statements.map((text, j) => ({
      id: `${examId}-q${index}-s${j + 1}`,
      text,
      isTrue: Boolean(keys[j]),
      explanation:
        explanations[j] ||
        (keys[j] ? (lang === "de" ? "Richtig." : "True.") : lang === "de" ? "Falsch." : "False."),
    })),
  };
}

function germanQuestion(task: WisoGermanTask, index: number, examId: string): ExamQuestion {
  const statements = task.statements.slice(0, 5);
  const keys = task.answer_key.slice(0, statements.length);
  const explanations = (task.tactical_explanations ?? []).slice(0, statements.length);
  while (keys.length < statements.length) keys.push(false);
  while (explanations.length < statements.length) explanations.push("");
  return {
    id: `${examId}-q${index}`,
    index,
    subject: "german",
    stem: task.context?.trim() || task.title,
    maxPoints: SCORING_CONFIG.german.defaultMaxPerTask,
    subtopicTag: `Deutsch · ${task.case_id}`,
    passage: task.passage,
    solutionOverview: task.solution_overview,
    statements: statements.map((text, j) => ({
      id: `${examId}-q${index}-s${j + 1}`,
      text,
      isTrue: Boolean(keys[j]),
      explanation: explanations[j] || (keys[j] ? "Richtig." : "Falsch."),
    })),
  };
}

function readAll(): HybridPaperRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HybridPaperRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(rows: HybridPaperRecord[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORE_KEY, JSON.stringify(rows.slice(0, 12)));
}

export function listHybridPapers(): HybridPaperRecord[] {
  return readAll();
}

export function readHybridPaper(id: string): HybridPaperRecord | null {
  return readAll().find((row) => row.id === id) ?? null;
}

export function readHybridPaperByExamId(examId: string): HybridPaperRecord | null {
  const id = parseHybridMockExamId(examId);
  if (!id) return null;
  return readHybridPaper(id);
}

export async function buildHybridPaper(
  request: HybridPaperRequest,
): Promise<{ paper: HybridPaperRecord } | { error: string }> {
  const mix = mixForPaper(request.total, request.lean);
  const chapters = [...new Set(request.mathChapters)]
    .filter((n) => n >= 1 && n <= 13)
    .sort((a, b) => a - b);
  const texts = [...new Set(request.germanTexts)];
  if (chapters.length === 0) return { error: "Select at least one mathematics chapter." };
  if (texts.length === 0) return { error: "Select at least one German text." };

  const banks = await Promise.all(
    chapters.map(async (num) => {
      const en = await loadMathChapterTasks(num);
      const de = mix.deMath > 0 ? await loadWisoMathChapterTasks(num, "de") : en;
      const deById = new Map(de.map((task) => [task.id, task]));
      return en.map((task) => ({ en: task, de: deById.get(task.id) ?? task }));
    }),
  );
  const mathPool = banks.flat();
  if (mathPool.length < mix.mathCount) {
    return {
      error: `Those chapters have ${mathPool.length} mathematics tasks. Lower the paper size or add chapters.`,
    };
  }

  const germanChapter = WISO_GERMAN_CHAPTERS[0];
  const germanPool = (germanChapter?.tasks ?? []).filter((task) => texts.includes(task.subsection));
  if (germanPool.length < mix.germanCount) {
    return {
      error: `Those texts have ${germanPool.length} German tasks. Lower the paper size or add texts.`,
    };
  }

  const id = crypto.randomUUID();
  const examId = hybridMockExamId(id);
  const pickedMath = pickMathPairs(mathPool, mix.mathCount, mix.deMath);
  const pickedGerman = pickUnique(shuffle(germanPool), mix.germanCount);
  const questions: ExamQuestion[] = [];
  pickedMath.forEach((pair, i) => {
    const lang = i < mix.deMath ? "de" : "en";
    questions.push(
      mathQuestion(lang === "de" ? pair.de : pair.en, questions.length + 1, examId, lang),
    );
  });
  pickedGerman.forEach((task) => {
    questions.push(germanQuestion(task, questions.length + 1, examId));
  });

  const pointsTotal = Number(questions.reduce((sum, q) => sum + q.maxPoints, 0).toFixed(2));
  const paper: HybridPaperRecord = {
    id,
    examId,
    title: paperTitle(mix),
    lean: mix.lean,
    mix,
    mathChapters: chapters,
    germanTexts: texts,
    durationMinutes: paperMinutes(questions.length),
    pointsTotal,
    questions,
    createdAt: new Date().toISOString(),
  };
  writeAll([paper, ...readAll().filter((row) => row.id !== id)]);
  logHybridPaper();
  return { paper };
}
