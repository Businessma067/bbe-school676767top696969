/**
 * Build WiSo Mock Exam 1 sourced bank from the hardest WiSo chapter tasks.
 * Order: economics → german reading → math (same shape as BBE Mock 1, German instead of English).
 *
 * Run: npx tsx scripts/build-wiso-mock-exam-1.mts
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllWisoEconomicsChapterTasks } from "../src/data/wiso-economics-chapters.ts";
import { loadWisoMathChapterTasks } from "../src/data/wiso-math-chapters.ts";
import type { MathTask } from "../src/data/math-chapters.ts";
import type { EconomicsTask } from "../src/data/economics-chapters.ts";

const ROOT = path.resolve("src/data");
const OUT = path.join(ROOT, "wiso-mock-exam-1-sourced.json");

type SourcedTask = {
  case_id?: string;
  id?: string;
  title?: string;
  subsection?: string;
  chapter?: number;
  context?: string;
  statements?: string[];
  answer_key?: boolean[];
  tactical_explanations?: string[];
  kind?: string;
  with_passage?: boolean;
  difficulty_level?: string;
  solution_overview?: string;
  figure?: string;
  tables_markdown?: string;
};

function explChars(t: { tactical_explanations?: string[] | null }): number {
  return (t.tactical_explanations ?? []).reduce((a, x) => a + (x?.length ?? 0), 0);
}

function isSolidTeacherCopy(t: {
  statements?: string[] | null;
  answer_key?: boolean[] | null;
  tactical_explanations?: string[] | null;
}): boolean {
  const stmts = t.statements ?? [];
  const keys = t.answer_key ?? [];
  const xs = t.tactical_explanations ?? [];
  if (stmts.length < 5 || keys.length < 5 || xs.length < 5) return false;
  const short = xs.filter((x) => (x ?? "").trim().length < 100).length;
  return short < 3;
}

function hardScore(t: {
  context?: string | null;
  statements?: string[] | null;
  answer_key?: boolean[] | null;
  tactical_explanations?: string[] | null;
  solution_overview?: string | null;
}): number {
  const xs = t.tactical_explanations ?? [];
  const keys = t.answer_key ?? [];
  const falseN = keys.filter((k) => k === false).length;
  const minExpl = Math.min(...xs.map((x) => (x ?? "").length), 9999);
  return (
    explChars(t) +
    (t.solution_overview?.length ?? 0) * 0.5 +
    falseN * 50 +
    (t.context?.length ?? 0) * 0.05 +
    minExpl * 0.25
  );
}

function toEconSourced(t: EconomicsTask): SourcedTask {
  return {
    case_id: t.case_id,
    id: t.id,
    title: t.title,
    subsection: t.subsection,
    context: t.context,
    statements: t.statements,
    answer_key: t.answer_key,
    tactical_explanations: t.tactical_explanations,
    difficulty_level: t.difficulty_level,
  };
}

function toMathSourced(t: MathTask, chapter: number): SourcedTask {
  return {
    case_id: t.case_id,
    id: t.id,
    title: t.title,
    subsection: t.subsection,
    chapter,
    context: t.context,
    statements: t.statements,
    answer_key: t.answer_key,
    tactical_explanations: t.tactical_explanations,
    difficulty_level: t.difficulty_level,
    solution_overview: t.solution_overview,
    figure: t.figure,
    tables_markdown: t.tables_markdown,
  };
}

function pickDiverseEcon(tasks: EconomicsTask[], n: number): EconomicsTask[] {
  const scored = tasks
    .filter(isSolidTeacherCopy)
    .map((t) => ({ t, s: hardScore(t) }))
    .sort((a, b) => b.s - a.s);
  const picked: EconomicsTask[] = [];
  const seenSub = new Set<string>();
  for (const { t } of scored) {
    const sub = t.subsection || "";
    if (seenSub.has(sub)) continue;
    seenSub.add(sub);
    picked.push(t);
    if (picked.length >= n) break;
  }
  if (picked.length < n) {
    for (const { t } of scored) {
      if (picked.includes(t)) continue;
      picked.push(t);
      if (picked.length >= n) break;
    }
  }
  return picked;
}

async function main() {
  const econByChapter = await loadAllWisoEconomicsChapterTasks();
  const quotas: Record<number, number> = { 1: 3, 2: 2, 3: 3, 4: 2 };
  const economics: SourcedTask[] = [];
  for (const { num, tasks } of econByChapter) {
    const q = quotas[num];
    if (!q) continue;
    const pick = pickDiverseEcon(tasks, q);
    console.log(
      `econ ch${num}:`,
      pick.map((t) => t.case_id),
      pick.map((t) => Math.round(hardScore(t))),
    );
    economics.push(
      ...pick.map((t) => {
        const row = toEconSourced(t);
        row.chapter = num;
        return row;
      }),
    );
  }
  if (economics.length !== 10) {
    throw new Error(`Expected 10 economics tasks, got ${economics.length}`);
  }

  const germanBank = (
    await import("../src/data/wiso/german/texts.json")
  ).default as {
    subsections: Array<{ id: string; title: string; passage: string }>;
    tasks: Array<{
      id: string;
      case_id?: string;
      subsection: string;
      title?: string;
      context?: string;
      statements: string[];
      answer_key: boolean[];
      tactical_explanations: string[];
      sort_order?: number;
    }>;
  };

  type GTask = (typeof germanBank.tasks)[number];
  const bySub = new Map<string, GTask[]>();
  for (const t of germanBank.tasks) {
    const list = bySub.get(t.subsection) ?? [];
    list.push(t);
    bySub.set(t.subsection, list);
  }

  let best: { id: string; score: number; tasks: GTask[] } | null = null;
  for (const [id, tasks] of bySub) {
    if (tasks.length < 10) continue;
    const solid = tasks.filter(isSolidTeacherCopy).length;
    if (solid < 8) continue;
    const avg = tasks.reduce((a, t) => a + explChars(t), 0) / tasks.length;
    const mn = Math.min(...tasks.map(explChars));
    const score = avg + mn * 0.3;
    if (!best || score > best.score) best = { id, score, tasks };
  }
  if (!best) throw new Error("No German text bank qualified");
  const subMeta = germanBank.subsections.find((s) => s.id === best!.id);
  if (!subMeta?.passage) throw new Error(`Missing passage for ${best.id}`);
  const germanTasks = [...best.tasks]
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0) || a.id.localeCompare(b.id))
    .slice(0, 10);
  console.log(`german ${best.id} · ${subMeta.title} · avgScore=${Math.round(best.score)}`);

  const mathPicked: SourcedTask[] = [];
  const usedIds = new Set<string>();
  for (let ch = 1; ch <= 13; ch++) {
    const tasks = await loadWisoMathChapterTasks(ch, "de");
    const scored = tasks
      .filter((t) => !t.placeholder && isSolidTeacherCopy(t))
      .map((t) => ({ t, s: hardScore(t) }))
      .sort((a, b) => b.s - a.s);
    const top = scored[0]?.t;
    if (!top) throw new Error(`No solid math task in chapter ${ch}`);
    usedIds.add(top.case_id || top.id);
    mathPicked.push(toMathSourced(top, ch));
    console.log(`math ch${ch}: ${top.case_id} score=${Math.round(scored[0]!.s)}`);
  }

  // 14th task: hardest remaining across chapters
  let extra: { t: MathTask; ch: number; s: number } | null = null;
  for (let ch = 1; ch <= 13; ch++) {
    const tasks = await loadWisoMathChapterTasks(ch, "de");
    for (const t of tasks) {
      if (t.placeholder || !isSolidTeacherCopy(t)) continue;
      const id = t.case_id || t.id;
      if (usedIds.has(id)) continue;
      const s = hardScore(t);
      if (!extra || s > extra.s) extra = { t, ch, s };
    }
  }
  if (!extra) throw new Error("No extra math task found");
  mathPicked.push(toMathSourced(extra.t, extra.ch));
  console.log(`math extra ch${extra.ch}: ${extra.t.case_id} score=${Math.round(extra.s)}`);

  const bundle = {
    economics,
    german: {
      passage: subMeta.passage,
      passageTitle: subMeta.title,
      tasks: germanTasks.map((t) => ({
        case_id: t.case_id ?? t.id,
        id: t.id,
        title: t.title,
        subsection: t.subsection,
        context: t.context,
        statements: t.statements,
        answer_key: t.answer_key,
        tactical_explanations: t.tactical_explanations,
        kind: "text",
        with_passage: true,
      })),
    },
    math: mathPicked,
  };

  const total =
    bundle.economics.length + bundle.german.tasks.length + bundle.math.length;
  if (total !== 34) throw new Error(`Expected 34 questions, got ${total}`);

  fs.writeFileSync(OUT, JSON.stringify(bundle, null, 2) + "\n", "utf8");
  console.log(`Wrote ${OUT} (${total} questions)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
