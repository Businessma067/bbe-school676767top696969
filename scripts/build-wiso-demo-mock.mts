/**
 * Assemble free WiSo Demo Mock sourced bank.
 * Shape: 10 Wirtschaft + 10 German (Nudging t.6) + 13 Math (German overlays).
 *
 * Run: npx tsx scripts/build-wiso-demo-mock.mts
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllWisoEconomicsChapterTasks } from "../src/data/wiso-economics-chapters.ts";
import { loadWisoMathChapterTasks } from "../src/data/wiso-math-chapters.ts";

const ROOT = path.resolve("src/data");
const OUT = path.join(ROOT, "wiso-mock-exam-demo-sourced.json");

/** Chapter-index picks (1-based) from WiSo economics banks. */
const ECON_PICKS: Array<{ chapter: number; index: number }> = [
  { chapter: 1, index: 30 },
  { chapter: 1, index: 150 },
  { chapter: 2, index: 3 },
  { chapter: 2, index: 70 },
  { chapter: 3, index: 93 },
  { chapter: 3, index: 94 },
  { chapter: 4, index: 59 },
  { chapter: 4, index: 75 },
];

/**
 * Math picks: 1-based position within the named subsection
 * (same order as the course UI lists tasks).
 */
const MATH_PICKS: Array<{ chapter: number; subsection: string; index: number }> = [
  { chapter: 1, subsection: "1.4", index: 27 }, // Quantoren
  { chapter: 2, subsection: "2.5", index: 7 }, // Elementare Algebra · Prüfungsstil
  { chapter: 3, subsection: "3.8", index: 7 }, // Finanzmathematik · Prüfungsstil
  { chapter: 4, subsection: "4.5", index: 33 }, // Gleichungen · Prüfungsstil
  { chapter: 5, subsection: "5", index: 55 }, // Lin. Gl. zwei Unbekannte
  { chapter: 6, subsection: "6.5", index: 23 }, // Ungleichungen · Prüfungsstil
  { chapter: 7, subsection: "7", index: 46 }, // Lin./quad. Funktionen
  { chapter: 8, subsection: "8", index: 37 }, // Potenzfunktionen
  { chapter: 9, subsection: "9.5", index: 25 }, // Polynome · Prüfungsstil
  { chapter: 10, subsection: "10.3", index: 23 }, // Exp/Log · Prüfungsstil
  { chapter: 11, subsection: "11.5", index: 3 }, // Differentiation · Prüfungsstil
  { chapter: 12, subsection: "12.5", index: 26 }, // Bayes
  { chapter: 13, subsection: "13.5", index: 16 }, // Binomial · Prüfungsstil
];

const GERMAN_T6_IDS = [
  "de-t-6-01",
  "de-t-6-02",
  "de-t-6-03",
  "de-t-6-04",
  "de-t-6-05",
  "de-t-6-06",
  "de-t-6-07",
  "de-t-6-08",
  "de-t-6-09",
  "de-t-6-10",
] as const;

/** Fully translated BBE accounting CASE 6.5.061 / 6.5.072. */
const ACCOUNTING_DE = [
  {
    case_id: "CASE 6.5.061",
    id: "wiso-demo-acct-061",
    title: "Vermögens- und Lagerumschlag 61",
    subsection: "6.5",
    chapter: 6,
    difficulty_level: "4/5",
    context:
      "Betrachten Sie den folgenden Auszug (in Tsd. €) eines Unternehmens, dessen Identität nicht genannt wird.\n\n| Position (Tsd. €) | Betrag |\n| --- | ---: |\n| Umsatzerlöse | 1.036 |\n| Umsatzkosten | 682 |\n| Gesamtvermögen zu Beginn des Jahres | 865 |\n| Gesamtvermögen am Ende des Jahres | 984 |\n| Vorräte zu Beginn des Jahres | 166 |\n| Vorräte am Ende des Jahres | 167 |\n| Forderungen aus Lieferungen und Leistungen zu Beginn des Jahres | 120 |\n| Forderungen aus Lieferungen und Leistungen am Ende des Jahres | 149 |\n\nBewerten Sie die folgenden wirtschaftlichen Aussagen:\n",
    statements: [
      "Der Forderungsumschlag — Umsatzerlöse bezogen auf die durchschnittlichen Forderungen aus Lieferungen und Leistungen — liegt über 10,79-mal pro Jahr.",
      "Die durchschnittlichen Vorräte machen weniger als 16,4 % des durchschnittlichen Gesamtvermögens aus.",
      "Die Vorräte sind zwischen Jahr 1 und Jahr 2 um mehr als 30 % gestiegen.",
      "Die Umsatzkosten betragen mehr als 65,9 % der Umsatzerlöse.",
      "Der Lagerumschlag — Umsatzkosten bezogen auf die durchschnittlichen Vorräte — liegt unter 4,89-mal pro Jahr.",
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      "**A.** → Falsch\n\nDer Forderungsumschlag zeigt, wie oft die Umsatzerlöse die durchschnittlichen Forderungen decken.\n\n$$\n\\frac{120 + 149}{2} = 134{,}5\n$$\n\n$$\n\\frac{1{.}036}{134{,}5} \\approx 7{,}70\n$$\n\nForderungsumschlag = Umsatzerlöse ÷ durchschnittliche Forderungen ≈ 7,70. Die Schwelle „über 10,79“ wird nicht erreicht.\n\n**Die Aussage ist falsch.**",
      "**B.** → Falsch\n\nDurchschnittliche Vorräte und durchschnittliches Vermögen sind die Mittelwerte aus Anfangs- und Endbestand.\n\n$$\n\\frac{166 + 167}{2} = 166{,}5\n$$\n\n$$\n\\frac{865 + 984}{2} = 924{,}5\n$$\n\n$$\n\\frac{166{,}5}{924{,}5} \\approx 0{,}180 \\approx 18{,}0\\%\n$$\n\n18,0 % ist nicht weniger als 16,4 %.\n\n**Die Aussage ist falsch.**",
      "**C.** → Falsch\n\nWachstum der Vorräte:\n\n$$\n\\frac{167 - 166}{166} = \\frac{1}{166} \\approx 0{,}6\\%\n$$\n\nDas ist weit unter 30 %.\n\n**Die Aussage ist falsch.**",
      "**D.** → Falsch\n\nAnteil der Umsatzkosten an den Umsatzerlösen:\n\n$$\n\\frac{682}{1{.}036} \\approx 0{,}658 = 65{,}8\\%\n$$\n\n65,8 % ist nicht mehr als 65,9 %.\n\n**Die Aussage ist falsch.**",
      "**E.** → Wahr\n\nLagerumschlag = Umsatzkosten ÷ durchschnittliche Vorräte.\n\n$$\n\\frac{166 + 167}{2} = 166{,}5\n$$\n\n$$\n\\frac{682}{166{,}5} \\approx 4{,}096\n$$\n\n4,096 liegt unter 4,89.\n\n**Die Aussage ist wahr.**",
    ],
  },
  {
    case_id: "CASE 6.5.072",
    id: "wiso-demo-acct-072",
    title: "Liquidität aus der Bilanz 72",
    subsection: "6.5",
    chapter: 6,
    difficulty_level: "5/5",
    context:
      "Betrachten Sie die folgende Bilanz (in Tsd. €) eines Unternehmens, dessen Identität nicht genannt wird.\n\n| € in Tsd. | Betrag |\n| --- | ---: |\n| **AKTIVA** | |\n| Gebäude | 425 |\n| Maschinen | 168 |\n| Büroausstattung | 76 |\n| Patente, Marken und Lizenzen | 83 |\n| Vorräte | 109 |\n| Forderungen aus Lieferungen und Leistungen | 117 |\n| Zahlungsmittel und Zahlungsmitteläquivalente | 63 |\n| Gesamtvermögen | **1041** |\n| **EIGENKAPITAL** | |\n| Gezeichnetes Kapital | 197 |\n| Gewinnrücklagen | 196 |\n| Eigenkapital gesamt | **393** |\n| **VERBINDLICHKEITEN** | |\n| Langfristiges Bankdarlehen | 418 |\n| Anleihen | 60 |\n| Verbindlichkeiten aus Lieferungen und Leistungen | 140 |\n| Kontokorrentkredit | 30 |\n| Verbindlichkeiten gesamt | **648** |\n| Eigenkapital und Verbindlichkeiten | **1041** |\n\nBewerten Sie die folgenden wirtschaftlichen Aussagen:\n",
    statements: [
      "Die Current Ratio liegt über 1,4.",
      "Die Current Ratio liegt unter 0,91.",
      "Das Working Capital von 119 Tsd. € ist in dieser Bilanz positiv.",
      "Die Eigenkapitalquote liegt unter 36,4 %.",
      "Die Verschuldungsquote liegt über 71,7 %.",
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      "**A.** → Wahr\n\nCurrent Ratio = Umlaufvermögen ÷ kurzfristige Verbindlichkeiten.\n\n$$\nUV = 109 + 117 + 63 = 289\n$$\n\n$$\nkV = 140 + 30 = 170\n$$\n\n$$\n\\frac{289}{170} \\approx 1{,}70 > 1{,}4\n$$\n\n**Die Aussage ist wahr.**",
      "**B.** → Falsch\n\nDieselbe Current Ratio ≈ 1,70 liegt klar über 0,91, nicht darunter.\n\n**Die Aussage ist falsch.**",
      "**C.** → Wahr\n\nWorking Capital = Umlaufvermögen − kurzfristige Verbindlichkeiten.\n\n$$\nWC = 289 - 170 = 119\n$$\n\nDas Working Capital ist positiv (119 Tsd. €). Nicht mit der Current Ratio verwechseln.\n\n**Die Aussage ist wahr.**",
      "**D.** → Falsch\n\nEigenkapitalquote = Eigenkapital ÷ Gesamtvermögen.\n\n$$\n\\frac{393}{1{.}041} \\approx 0{,}378 = 37{,}8\\%\n$$\n\n37,8 % liegt über 36,4 %, nicht darunter.\n\n**Die Aussage ist falsch.**",
      "**E.** → Falsch\n\nVerschuldungsquote = Verbindlichkeiten ÷ Gesamtvermögen.\n\n$$\n\\frac{648}{1{.}041} \\approx 0{,}622 = 62{,}2\\%\n$$\n\n62,2 % liegt unter 71,7 %.\n\n**Die Aussage ist falsch.**",
    ],
  },
] as const;

async function main() {
  const econByChapter = await loadAllWisoEconomicsChapterTasks();
  const chapterMap = new Map(econByChapter.map((c) => [c.num, c.tasks]));

  const economicsFromCourse = ECON_PICKS.map(({ chapter, index }) => {
    const tasks = chapterMap.get(chapter);
    if (!tasks) throw new Error(`Missing economics chapter ${chapter}`);
    const t = tasks[index - 1];
    if (!t) throw new Error(`Missing economics ch${chapter} task #${index}`);
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
      chapter,
    };
  });

  const economics = [...economicsFromCourse, ...ACCOUNTING_DE];

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

  const t6 = germanBank.subsections.find((s) => s.id === "t.6");
  if (!t6?.passage) throw new Error("Missing German t.6 (Nudging) passage");

  const byId = new Map(germanBank.tasks.map((t) => [t.id, t]));
  const germanTasks = GERMAN_T6_IDS.map((id) => {
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
    };
  });

  const math = [];
  for (const pick of MATH_PICKS) {
    const tasks = await loadWisoMathChapterTasks(pick.chapter, "de");
    const inSub = tasks.filter((t) => t.subsection === pick.subsection);
    const t = inSub[pick.index - 1];
    if (!t) {
      throw new Error(
        `Missing math ch${pick.chapter} sub=${pick.subsection} #${pick.index} (have ${inSub.length})`,
      );
    }
    math.push({
      case_id: t.case_id,
      id: t.id,
      title: t.title,
      subsection: t.subsection,
      chapter: pick.chapter,
      context: t.context,
      statements: t.statements,
      answer_key: t.answer_key,
      tactical_explanations: t.tactical_explanations,
      difficulty_level: t.difficulty_level,
      solution_overview: t.solution_overview,
      figure: t.figure,
      tables_markdown: t.tables_markdown,
    });
  }

  const bundle = {
    economics,
    german: {
      passage: t6.passage,
      passageTitle: t6.title,
      tasks: germanTasks,
    },
    math,
  };

  const total =
    bundle.economics.length + bundle.german.tasks.length + bundle.math.length;
  if (bundle.economics.length !== 10) {
    throw new Error(`Expected 10 economics, got ${bundle.economics.length}`);
  }
  if (bundle.german.tasks.length !== 10) {
    throw new Error(`Expected 10 german, got ${bundle.german.tasks.length}`);
  }
  if (bundle.math.length !== 13) {
    throw new Error(`Expected 13 math, got ${bundle.math.length}`);
  }
  if (total !== 33) throw new Error(`Expected 33 questions, got ${total}`);

  fs.writeFileSync(OUT, `${JSON.stringify(bundle, null, 2)}\n`);
  console.log(`Wrote ${OUT}`);
  console.log(
    `  economics=${bundle.economics.length} german=${bundle.german.tasks.length} math=${bundle.math.length} total=${total}`,
  );
  console.log(
    "  econ:",
    bundle.economics.map((t) => t.case_id).join(", "),
  );
  console.log(
    "  math:",
    bundle.math.map((t) => t.case_id).join(", "),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
