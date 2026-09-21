/**
 * Assemble WiSo Mock Exam 1 sourced bank (curated).
 * Shape: 10 economics + 11 German reading + 13 BBE-format math (German copy).
 *
 * Math IDs: diversified harder set (Mock 2/3/4/6 mix with threshold traps; not plug-and-chug).
 * German body lives in wiso-mock-exam-1-math-de.json.
 * German: full t.2 set (10) + hardest t.1 task with its own passage.
 *
 * Run: npx tsx scripts/build-wiso-mock-exam-1.mts
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllWisoEconomicsChapterTasks } from "../src/data/wiso-economics-chapters.ts";

const ROOT = path.resolve("src/data");
const OUT = path.join(ROOT, "wiso-mock-exam-1-sourced.json");
const MATH_DE = path.join(ROOT, "wiso-mock-exam-1-math-de.json");

const ECON_IDS = [
  "WISO 1.3.14",
  "WISO 1.4.86",
  "WISO 1.2.08",
  "WISO 2.4.01",
  "WISO 2.6.16",
  "WISO 3.1.16",
  "WISO 3.4.36",
  "WISO 3.3.01",
  "WISO 4.4.04",
  "WISO 4.1.35",
] as const;

const GERMAN_T2_IDS = [
  "de-t-2-01",
  "de-t-2-02",
  "de-t-2-03",
  "de-t-2-04",
  "de-t-2-05",
  "de-t-2-06",
  "de-t-2-07",
  "de-t-2-08",
  "de-t-2-09",
  "de-t-2-10",
] as const;

const GERMAN_T1_EXTRA = "de-t-1-05";

async function main() {
  const econByChapter = await loadAllWisoEconomicsChapterTasks();
  const econIndex = new Map<string, { task: (typeof econByChapter)[0]["tasks"][0]; chapter: number }>();
  for (const { num, tasks } of econByChapter) {
    for (const t of tasks) {
      econIndex.set(t.case_id || t.id, { task: t, chapter: num });
    }
  }

  const economics = ECON_IDS.map((id) => {
    const hit = econIndex.get(id);
    if (!hit) throw new Error(`Missing economics case ${id}`);
    const t = hit.task;
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
      chapter: hit.chapter,
    };
  });

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
    }>;
  };

  const t2 = germanBank.subsections.find((s) => s.id === "t.2");
  const t1 = germanBank.subsections.find((s) => s.id === "t.1");
  if (!t2?.passage) throw new Error("Missing German t.2 passage");
  if (!t1?.passage) throw new Error("Missing German t.1 passage");

  const byId = new Map(germanBank.tasks.map((t) => [t.id, t]));
  const mapGerman = (
    id: string,
    opts?: { passage_override?: string; passage_title_override?: string },
  ) => {
    const t = byId.get(id);
    if (!t) throw new Error(`Missing German task ${id}`);
    return {
      id: t.id,
      case_id: t.case_id ?? t.id,
      title: t.title,
      context: t.context,
      statements: t.statements,
      answer_key: t.answer_key,
      tactical_explanations: t.tactical_explanations,
      subsection: t.subsection,
      kind: "text",
      with_passage: true,
      ...opts,
    };
  };

  const germanTasks = [
    ...GERMAN_T2_IDS.map((id) => mapGerman(id)),
    mapGerman(GERMAN_T1_EXTRA, {
      passage_override: t1.passage,
      passage_title_override: t1.title,
    }),
  ];

  if (!fs.existsSync(MATH_DE)) {
    throw new Error(`Missing curated math bank ${MATH_DE}`);
  }
  const math = JSON.parse(fs.readFileSync(MATH_DE, "utf8")) as unknown[];
  if (!Array.isArray(math) || math.length !== 13) {
    throw new Error(`Expected 13 math tasks in ${MATH_DE}, got ${Array.isArray(math) ? math.length : typeof math}`);
  }

  const bundle = {
    economics,
    german: {
      passage: t2.passage,
      passageTitle: t2.title,
      tasks: germanTasks,
    },
    math,
  };

  const total =
    bundle.economics.length + bundle.german.tasks.length + bundle.math.length;
  if (total !== 34) throw new Error(`Expected 34 questions, got ${total}`);

  const blob = JSON.stringify(bundle);
  if (/sorg-sorg|sorgs-gut|(sorg-?){5,}/i.test(blob)) {
    throw new Error("Sorg-glitch detected in assembled bank — refuse to write.");
  }

  fs.writeFileSync(OUT, JSON.stringify(bundle, null, 2) + "\n", "utf8");
  console.log(
    `Wrote ${OUT} (${total}q · econ ${economics.length} · de ${germanTasks.length} · math ${math.length})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
