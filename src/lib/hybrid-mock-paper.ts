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
  weaveByLead,
  type HybridPaperMix,
} from "@/config/hybrid-mock-builder";
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

function byBook(a: MathTask, b: MathTask): number {
  return a.sort_order - b.sort_order || a.case_id.localeCompare(b.case_id);
}

/** One task per case, in book order. Later copies of a case fill only if needed. */
function uniqueCases(pool: MathPair[]): MathPair[] {
  const sorted = [...pool].sort((a, b) => byBook(a.en, b.en));
  const seen = new Set<string>();
  const unique: MathPair[] = [];
  const extra: MathPair[] = [];
  for (const pair of sorted) {
    if (seen.has(pair.en.case_id)) extra.push(pair);
    else {
      seen.add(pair.en.case_id);
      unique.push(pair);
    }
  }
  return [...unique, ...extra];
}

/** Chapter 1 task 1, then chapter 2 task 1, and so on. Fixed for a given selection. */
function spreadGroups<T>(groups: T[][], count: number): T[] {
  const queues = groups.map((group) => [...group]);
  const out: T[] = [];
  while (out.length < count && queues.some((queue) => queue.length > 0)) {
    for (const queue of queues) {
      if (out.length >= count) break;
      const next = queue.shift();
      if (next) out.push(next);
    }
  }
  return out;
}

function assignMathLanguages(
  pairs: MathPair[],
  enMath: number,
  deMath: number,
  leanId: "bbe" | "half" | "wiso",
): { pair: MathPair; lang: "en" | "de" }[] {
  let enLeft = enMath;
  let deLeft = deMath;
  return pairs.map((pair, index) => {
    let lang: "en" | "de";
    if (leanId === "wiso") lang = deLeft > 0 ? "de" : "en";
    else if (leanId === "half") {
      const germanTurn = index % 2 === 1;
      if (germanTurn && deLeft > 0) lang = "de";
      else if (!germanTurn && enLeft > 0) lang = "en";
      else lang = deLeft > 0 ? "de" : "en";
    } else lang = enLeft > 0 ? "en" : "de";
    if (lang === "de") deLeft -= 1;
    else enLeft -= 1;
    return { pair, lang };
  });
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
      return uniqueCases(en.map((task) => ({ en: task, de: deById.get(task.id) ?? task })));
    }),
  );
  const mathAvailable = banks.reduce((sum, group) => sum + group.length, 0);
  if (mathAvailable < mix.mathCount) {
    return {
      error: `Those chapters have ${mathAvailable} mathematics tasks. Lower the paper size or add chapters.`,
    };
  }

  const germanChapter = WISO_GERMAN_CHAPTERS[0];
  const textOrder = germanTextCatalog().map((text) => text.id);
  const selectedTexts = textOrder.filter((id) => texts.includes(id));
  const germanGroups = selectedTexts.map((id) =>
    (germanChapter?.tasks ?? [])
      .filter((task) => task.subsection === id)
      .sort((a, b) => a.sort_order - b.sort_order || a.case_id.localeCompare(b.case_id)),
  );
  const germanAvailable = germanGroups.reduce((sum, group) => sum + group.length, 0);
  if (germanAvailable < mix.germanCount) {
    return {
      error: `Those texts have ${germanAvailable} German tasks. Lower the paper size or add texts.`,
    };
  }

  const id = crypto.randomUUID();
  const examId = hybridMockExamId(id);
  const pickedMath = assignMathLanguages(
    spreadGroups(banks, mix.mathCount),
    mix.enMath,
    mix.deMath,
    mix.leanId,
  );
  const pickedGerman = spreadGroups(germanGroups, mix.germanCount);
  const englishQuestions = pickedMath
    .filter((item) => item.lang === "en")
    .map((item) => mathQuestion(item.pair.en, 0, examId, "en"));
  const germanMathQuestions = pickedMath
    .filter((item) => item.lang === "de")
    .map((item) => mathQuestion(item.pair.de, 0, examId, "de"));
  const readingQuestions = pickedGerman.map((task) => germanQuestion(task, 0, examId));
  const wisoQuestions = weaveByLead(germanMathQuestions, readingQuestions);
  const ordered =
    mix.leanId === "wiso"
      ? weaveByLead(wisoQuestions, englishQuestions)
      : weaveByLead(englishQuestions, wisoQuestions);
  const questions = ordered.map((question, index) => ({
    ...question,
    index: index + 1,
    id: `${examId}-q${index + 1}`,
    statements: question.statements.map((statement, statementIndex) => ({
      ...statement,
      id: `${examId}-q${index + 1}-s${statementIndex + 1}`,
    })),
  }));

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
