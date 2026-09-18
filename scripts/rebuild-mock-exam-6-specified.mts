/**
 * Rebuild Mock Exam 6 — ultra-hard curated bank + dual-project capital chart + Bioluminescence English + deep custom math.
 * Fully different case IDs and themes from Mocks 1–5.
 * Order: economics → english (Living Light / Bioluminescence T.13) → math.
 *
 * Run: node scripts/run-rebuild-mock-6.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { scrubKatexDeep } from "../src/lib/scrub-katex.ts";
import {
  buildMathQ22Sets,
  buildMathQ23Grind,
  buildMathQ24Finance,
  buildMathQ25Pipes,
  buildMathQ26BreakEven,
  buildMathQ27Ineq,
  buildMathQ28Piecewise,
  buildMathQ29Limits,
  buildMathQ30Param,
  buildMathQ31LogDeriv,
  buildMathQ32Engagement,
  buildMathQ33Coins,
  buildMathQ34Binomial,
} from "./mock6-math-customs.mts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-6-sourced.json");

function loadEcon(ch: number) {
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, `economics-cases-ch${ch}-subtopics.json`), "utf8"),
  ) as Array<Record<string, unknown>>;
}

function byId(ch: number, caseId: string) {
  const t = loadEcon(ch).find((c) => c.case_id === caseId);
  if (!t) throw new Error(`Econ ${caseId} missing in ch${ch}`);
  return t;
}

function splitBalanceSheet(context: string): string {
  if (!/\|\s*\*\*ASSETS\*\*\s*\|/.test(context)) return context;
  const lines = context.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (/^\|\s*€ in thousands\s*\|\s*Amount\s*\|/i.test(line)) {
      const table: string[] = [];
      while (i < lines.length && (lines[i]!.includes("|") || lines[i]!.trim() === "")) {
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

function mapEcon(t: Record<string, unknown>) {
  return {
    case_id: t.case_id,
    title: t.title,
    subsection: t.subsection,
    chapter: Number(String(t.case_id).match(/CASE (\d+)/)?.[1] ?? 0),
    context: splitBalanceSheet(String(t.context ?? "")),
    statements: t.statements ?? [],
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    difficulty_level: t.difficulty_level,
  };
}

/**
 * NEW chart engine (not CVP, P/E, rights, single-project DCF):
 * mutually exclusive dual projects — NPV, PI, payback traps from one chart.
 *
 * North outlay 200; inflows 35,45,80,130 (thousands).
 * South outlay 150; inflows 55,60,55,50.
 * Discount rate 12%.
 *
 * North: PV≈206.68, NPV≈+6.68, PI≈1.033, undisc PB≈3.31, disc PB≈3.92
 * South: PV≈167.86, NPV≈+17.86, PI≈1.119, undisc PB≈2.64, disc PB≈3.44
 */
function buildDualProjectCapitalCase() {
  const context = `CascadeRail GmbH must choose **exactly one** of two mutually exclusive signalling upgrades. Both require an immediate cash outlay at time zero. Year-end operating cash inflows for each project appear in the chart (figures already in thousands of euros). The firm’s discount rate for NPV and profitability-index work is 12% per year. Projects cannot be scaled or combined.

[[CHART type="grouped-bar" title="CascadeRail upgrades — year-end cash inflows (EUR thousands)"]]
Year 1 | North=35 | South=55
Year 2 | North=45 | South=60
Year 3 | North=80 | South=55
Year 4 | North=130 | South=50
[[/CHART]]

| Key figure | North | South |
| --- | ---: | ---: |
| Initial outlay at time zero | EUR 200,000 | EUR 150,000 |
| Discount rate | 12% per year | 12% per year |

Treat chart inflows as thousands of euros (so North Year 1 contributes EUR 35,000, and so on). Evaluate the following economic assertions:`;

  const statements = [
    "Summed across four years, North’s undiscounted inflows exceed South’s undiscounted inflows.",
    "At a 12% discount rate, North’s NPV is strictly larger than South’s NPV.",
    "Undiscounted payback for South occurs strictly before the end of Year 3.",
    "At a 12% discount rate, both projects have a strictly positive NPV.",
    "The profitability index of North (present value of inflows divided by outlay) exceeds the profitability index of South.",
  ];

  // A: 35+45+80+130=290 > 55+60+55+50=220 True
  // B: NPV_N≈6.68 < NPV_S≈17.86 False
  // C: South undisc PB≈2.64 < 3 True
  // D: both >0 True
  // E: PI_N≈1.033 < PI_S≈1.119 False

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

North inflows (thousands):

$$
35+45+80+130=290
$$

South inflows:

$$
55+60+55+50=220
$$

Since $290>220$, North’s undiscounted total is larger.

So the statement is True.`,

    `**B.** → False

Present values of inflows at 12% (working in thousands):

North:

$$
\\dfrac{35}{1.12}+\\dfrac{45}{1.12^{2}}+\\dfrac{80}{1.12^{3}}+\\dfrac{130}{1.12^{4}}\\approx 206.68
$$

$$
\\mathrm{NPV}_{N}\\approx 206.68-200=+6.68
$$

South:

$$
\\dfrac{55}{1.12}+\\dfrac{60}{1.12^{2}}+\\dfrac{55}{1.12^{3}}+\\dfrac{50}{1.12^{4}}\\approx 167.86
$$

$$
\\mathrm{NPV}_{S}\\approx 167.86-150=+17.86
$$

South’s NPV is larger, so the claim fails.

So the statement is False.`,

    `**C.** → True

South cumulative undiscounted inflows:

$$
55,\\quad 115,\\quad 170,\\quad 220
$$

After Year 2 one still needs EUR 35,000 of the EUR 150,000 outlay. Year 3 contributes EUR 55,000, so

$$
2+\\dfrac{35}{55}\\approx 2.64<3
$$

So the statement is True.`,

    `**D.** → True

From letter B, $\\mathrm{NPV}_{N}\\approx +6.68>0$ and $\\mathrm{NPV}_{S}\\approx +17.86>0$.

So the statement is True.`,

    `**E.** → False

$$
\\mathrm{PI}_{N}\\approx\\dfrac{206.68}{200}\\approx 1.033,\\qquad \\mathrm{PI}_{S}\\approx\\dfrac{167.86}{150}\\approx 1.119
$$

North’s index is smaller, not larger.

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.DUALNPV",
    title: "Mutually exclusive upgrades — dual NPV, PI and payback from a chart",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}

function buildEnglish() {
  const texts = JSON.parse(fs.readFileSync(path.join(ROOT, "english/texts.json"), "utf8"));
  const grammar = JSON.parse(fs.readFileSync(path.join(ROOT, "english/grammar.json"), "utf8"));
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.13");
  if (!sub?.passage) throw new Error("Bioluminescence / Living Light passage t.13 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.13.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.13.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.13.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.13.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.13.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.13.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.13.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.13.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.13.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.13.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.13.19", kind: "grammar", withPassage: false, src: "grammar" },
  ];

  const stemByKind: Record<string, string> = {
    text: "Based on the passage, decide whether each statement is true or false.",
    grammar: "Decide whether each sentence is grammatically correct as written.",
    vocabulary: "Decide whether each vocabulary claim is true or false.",
  };

  const tasks = order.map((o) => {
    const bank = o.src === "texts" ? texts.tasks : grammar.tasks;
    const t = bank.find((x: { case_id: string }) => x.case_id === o.id);
    if (!t) throw new Error(`Missing English task ${o.id}`);
    let context = stemByKind[o.kind]!;
    if (o.id === "ENG T.13.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "In the deep ocean, living light is not decoration — it is a working language of survival.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.13.08" || o.id === "ENG T.13.09") {
      context =
        "Based on the passage, decide whether each given meaning matches the word's actual use.";
    }
    return {
      case_id: t.case_id,
      id: t.id ?? t.case_id,
      title: t.title ?? t.case_id,
      subsection: t.subsection,
      context,
      statements: t.statements,
      answer_key: t.answer_key,
      tactical_explanations: t.tactical_explanations,
      kind: o.kind,
      with_passage: o.withPassage,
      difficulty_level: t.difficulty_level ?? "",
    };
  });

  return {
    passage: sub.passage,
    passageTitle: sub.title,
    tasks,
  };
}

// ---- assemble (unused hard bank + custom; no overlap with Mocks 1–5) ----
const economics = [
  mapEcon(byId(2, "CASE 2.7.12")),
  mapEcon(byId(3, "CASE 3.4.07")),
  mapEcon(byId(4, "CASE 4.3.21")),
  mapEcon(byId(4, "CASE 4.6.06")),
  mapEcon(byId(5, "CASE 5.4.08")),
  mapEcon(byId(6, "CASE 6.2.019")),
  mapEcon(byId(6, "CASE 6.4.009")),
  mapEcon(byId(6, "CASE 6.5.020")),
  mapEcon(byId(6, "CASE 6.3.035")),
  buildDualProjectCapitalCase(),
];

const english = buildEnglish();

const math = [
  buildMathQ22Sets(),
  buildMathQ23Grind(),
  buildMathQ24Finance(),
  buildMathQ25Pipes(),
  buildMathQ26BreakEven(),
  buildMathQ27Ineq(),
  buildMathQ28Piecewise(),
  buildMathQ29Limits(),
  buildMathQ30Param(),
  buildMathQ31LogDeriv(),
  buildMathQ32Engagement(),
  buildMathQ33Coins(),
  buildMathQ34Binomial(),
];

function audit(label: string, tasks: Array<Record<string, unknown>>) {
  for (const t of tasks) {
    const s = (t.statements as string[]) || [];
    const a = (t.answer_key as boolean[]) || [];
    const e = (t.tactical_explanations as string[]) || [];
    if (s.length !== 5 || a.length !== 5) {
      console.error("LEN", label, t.case_id, { s: s.length, a: a.length, e: e.length });
    }
    if (!t.context || !String(t.context).trim()) console.error("NOCTX", t.case_id);
    for (let i = 0; i < 5; i++) {
      if (!s[i]?.trim()) console.error("EMPTYSTMT", t.case_id, i);
      if (!e[i]?.trim()) console.error("EMPTYEXPL", t.case_id, i);
    }
  }
}
audit("econ", economics);
audit("eng", english.tasks);
audit("math", math);

const bundle = scrubKatexDeep({ economics, english, math }) as {
  economics: typeof economics;
  english: typeof english;
  math: typeof math;
};
fs.writeFileSync(outPath, JSON.stringify(bundle, null, 2) + "\n");
console.log(
  "Wrote",
  outPath,
  "counts",
  economics.length,
  english.tasks.length,
  math.length,
  "total",
  economics.length + english.tasks.length + math.length,
);
console.log("econ ids", economics.map((t) => t.case_id).join(", "));
console.log(
  "eng ids",
  english.tasks.map((t) => `${t.case_id}${t.with_passage ? "+P" : ""}`).join(", "),
);
console.log("math ids", math.map((t) => t.case_id).join(", "));
