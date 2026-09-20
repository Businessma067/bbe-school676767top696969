/**
 * Rebuild mock-exam-1-sourced.json:
 * - Some math chapters → hard bank tasks with per-statement If/At/With conditions
 * - Economics stems + split balance-sheet tables
 * - English: real T.15 reading (01–05) + grammar + vocabulary from bank
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-1-sourced.json");
const prev = JSON.parse(fs.readFileSync(outPath, "utf8"));

const perStmt = (s: string) =>
  /^(If\b|Given\b|When\b|Suppose\b|At\b|For\b|With\b|Let\b|Assume\b)/i.test((s || "").trim()) ||
  /^If\s*\$/.test((s || "").trim());

function findMath(all: Awaited<ReturnType<typeof loadAllMathChapterTasks>>, caseId: string) {
  for (const ch of all) {
    const t = ch.tasks.find((x: { case_id?: string }) => x.case_id === caseId);
    if (t) return { ch: ch.num, t };
  }
  throw new Error(`Math task not found: ${caseId}`);
}

function toMathSourced(chapter: number, t: Record<string, unknown>) {
  return {
    case_id: t.case_id,
    id: t.id ?? t.case_id,
    title: t.title ?? t.case_id,
    chapter,
    subsection: t.subsection ?? String(chapter),
    context: String(t.context ?? "")
      .replace(/\n?\s*[●•]\s*\([a-e]\)\s*Find[\s\S]*$/i, "")
      .replace(/\n?\s*\([a-e]\)\s*Find[\s\S]*$/i, "")
      .trim(),
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? t.answers ?? [],
    tactical_explanations: t.tactical_explanations ?? t.explanations ?? [],
    difficulty_level: t.difficulty_level ?? "5/5",
    solution_overview: t.solution_overview ?? "",
    figure: t.figure || undefined,
    tables_markdown: t.tables_markdown || undefined,
  };
}

function rewriteBalanceSheetTables(context: string): string {
  if (!context.includes("| **ASSETS** |") && !context.includes("| **Assets** |")) return context;

  const lines = context.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (/^\|\s*€ in thousands\s*\|\s*Amount\s*\|/i.test(line)) {
      const table: string[] = [];
      while (i < lines.length && (lines[i]!.trim() === "" || lines[i]!.includes("|"))) {
        if (lines[i]!.includes("|")) table.push(lines[i]!);
        else if (table.length) break;
        i++;
      }
      const rows = table
        .filter((r) => !/^\|\s*-+/.test(r))
        .map((r) =>
          r
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim()),
        );
      const data = rows.slice(1);
      const sections: Record<string, string[][]> = { ASSETS: [], EQUITY: [], LIABILITIES: [] };
      let cur: keyof typeof sections | null = null;
      for (const [label, amount = ""] of data) {
        const key = label.replace(/\*\*/g, "").trim().toUpperCase();
        if (key === "ASSETS" || key === "EQUITY" || key === "LIABILITIES") {
          cur = key as keyof typeof sections;
          continue;
        }
        if (!cur) continue;
        if (/^total equity and liabilities$/i.test(label.replace(/\*\*/g, "").trim())) continue;
        sections[cur].push([label, amount]);
      }
      const emit = (title: string, sectionRows: string[][]) => {
        if (!sectionRows.length) return;
        out.push("");
        out.push(`**${title}**`);
        out.push("");
        out.push("| Item (€ thousands) | Amount |");
        out.push("| --- | ---: |");
        for (const [lab, amt] of sectionRows) {
          out.push(`| ${lab.replace(/\*\*/g, "")} | ${amt.replace(/\*\*/g, "")} |`);
        }
      };
      emit("Assets", sections.ASSETS);
      emit("Equity", sections.EQUITY);
      emit("Liabilities", sections.LIABILITIES);
      out.push("");
      continue;
    }
    out.push(line);
    i++;
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

function fixEcon(task: Record<string, unknown>) {
  const next = { ...task };
  if (next.case_id === "CASE 2.2.04") {
    next.context =
      "Robin claims that opportunity cost is the sum of every rejected option's price. Sara chooses between a €500 washing machine and a €700 laptop. Evaluate the following economic assertions:";
    next.statements = [
      "If Sara buys the laptop, opportunity cost is the washer's benefit forgone, not all rejected purchases combined.",
      "Robin's sum-of-all-rejected definition matches the standard economic definition exactly.",
      "Choosing between only two items involves no scarcity because scarcity requires many options.",
      "If Sara buys the washer, opportunity cost is €1,200, the combined price of both items.",
      "Opportunity cost refers to the alternative forgone, not the price of the item actually purchased.",
    ];
  }
  if (next.case_id === "CASE 6.1.001") {
    next.context =
      "The same physical pallet loader can appear on different balance-sheet lines depending on how a business holds it. Evaluate the following economic assertions:";
  }
  if (typeof next.context === "string") {
    next.context = rewriteBalanceSheetTables(next.context);
  }
  return next;
}

function pickEnglishFromBank() {
  const texts = JSON.parse(fs.readFileSync(path.join(ROOT, "english/texts.json"), "utf8"));
  const grammar = JSON.parse(fs.readFileSync(path.join(ROOT, "english/grammar.json"), "utf8"));
  const vocabulary = JSON.parse(fs.readFileSync(path.join(ROOT, "english/vocabulary.json"), "utf8"));

  const passageEntry =
    (texts.passages || texts.texts || []).find?.(
      (p: { id?: string; subsection?: string }) =>
        p.id === "t.15" || p.subsection === "t.15" || String(p.id).includes("15"),
    ) || null;

  // texts.json shape: { source, subsections, tasks } OR { passages, tasks }
  let passage = "";
  let passageTitle = "The Shifting Anatomy of Economic Sectors";
  if (passageEntry?.passage) {
    passage = passageEntry.passage;
    passageTitle = passageEntry.title || passageTitle;
  } else if (texts.subsections) {
    const sub = texts.subsections.find(
      (s: { id?: string }) => s.id === "t.15" || String(s.id).includes("15"),
    );
    if (sub?.passage) {
      passage = sub.passage;
      passageTitle = sub.title || passageTitle;
    }
  }
  if (!passage && prev.english?.passage) passage = prev.english.passage;

  passage = String(passage)
    .replace(/primarysector/g, "primary-sector")
    .replace(/secondarysector/g, "secondary-sector")
    .replace(/tertiarysector/g, "tertiary-sector");

  const textTasks = (texts.tasks as Array<Record<string, unknown>>)
    .filter((t) => ["ENG T.15.01", "ENG T.15.02", "ENG T.15.03", "ENG T.15.04", "ENG T.15.05"].includes(String(t.case_id)))
    .sort((a, b) => String(a.case_id).localeCompare(String(b.case_id)));

  const grammarTasks = (grammar.tasks as Array<Record<string, unknown>>)
    .filter((t) => ["ENG G.1.20", "ENG G.2.20", "ENG G.3.20"].includes(String(t.case_id)))
    .sort((a, b) => String(a.case_id).localeCompare(String(b.case_id)));

  const vocabTasks = (vocabulary.tasks as Array<Record<string, unknown>>)
    .filter((t) => ["ENG V.1.30", "ENG V.2.30", "ENG V.3.30"].includes(String(t.case_id)))
    .sort((a, b) => String(a.case_id).localeCompare(String(b.case_id)));

  if (textTasks.length !== 5) throw new Error(`Expected 5 T.15 reading tasks, got ${textTasks.length}`);
  if (grammarTasks.length !== 3) throw new Error(`Expected 3 grammar tasks, got ${grammarTasks.length}`);
  if (vocabTasks.length !== 3) throw new Error(`Expected 3 vocab tasks, got ${vocabTasks.length}`);

  const mapTask = (t: Record<string, unknown>, kind: string) => ({
    case_id: t.case_id,
    id: t.id ?? t.case_id,
    title: t.title ?? t.case_id,
    subsection: t.subsection,
    context: t.context ?? "",
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    kind,
    difficulty_level: t.difficulty_level ?? "",
  });

  return {
    passage,
    passageTitle,
    tasks: [
      ...textTasks.map((t) => mapTask(t, "text")),
      ...grammarTasks.map((t) => mapTask(t, "grammar")),
      ...vocabTasks.map((t) => mapTask(t, "vocabulary")),
    ],
  };
}

const all = await loadAllMathChapterTasks();

/** Keep hardest shared stems for most chapters; swap SOME to per-statement conditions. */
const MATH_IDS: Record<number, string> = {
  1: "MATH 1.120",
  2: "MATH 2.28", // At/With per statement
  3: "MATH 11.141",
  4: "MATH 4.41", // If per statement
  5: "MATH 5.78",
  6: "MATH 6.102", // keep hardest shared LP
  7: "MATH 7.91", // If a is positive…
  8: "MATH 8.112",
  9: "MATH 9.E15", // If a=1…
  10: "MATH 10.3.24", // If/Given per statement
  11: "MATH 11.150", // At x=… per statement
  12: "MATH 12.213", // factory If/Given conditions
  13: "MATH 13.78",
};

const math = Object.entries(MATH_IDS)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([ch, id]) => {
    const { t } = findMath(all, id);
    const sourced = toMathSourced(Number(ch), t as Record<string, unknown>);
    console.log(
      `ch${ch}`,
      sourced.case_id,
      "perStmt",
      (sourced.statements as string[]).filter(perStmt).length,
      "/",
      (sourced.statements as string[]).length,
    );
    return sourced;
  });

const economics = (prev.economics as Array<Record<string, unknown>>).map(fixEcon);
const english = pickEnglishFromBank();

const bundle = { economics, english, math };
fs.writeFileSync(outPath, JSON.stringify(bundle, null, 2) + "\n");
console.log("Wrote", outPath);
console.log("eng", english.tasks.map((t) => `${t.case_id}:${t.kind}`).join(", "));
console.log(
  "passage glued?",
  /primarysector|secondarysector|tertiarysector/.test(english.passage),
  "len",
  english.passage.length,
);
