/**
 * Rebuild Mock Exam 5 — DCF econ chart + Octopus English + deep custom / bank math.
 * Fully different case IDs and themes from Mocks 1–4.
 * Order: economics → english (Alien Mind / Octopus T.14) → math.
 *
 * Run: node scripts/run-rebuild-mock-5.mjs
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
} from "./mock5-math-customs.mts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-5-sourced.json");

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
 * NEW chart engine (not CVP, not P/E stock, not rights issue):
 * undiscounted payback and a simple NPV check from a cash-flow chart.
 */
function buildDcfPaybackCase() {
  // Outlay 100 at t=0. Inflows: Y1=25, Y2=30, Y3=35, Y4=40 → cumulative 25,55,90,130
  // Undiscounted payback between Y3 and Y4: need 10 more after 90 → 10/40 = 0.25 → 3.25 years
  // NPV at 10%: -100 + 25/1.1 + 30/1.21 + 35/1.331 + 40/1.4641
  // = -100 + 22.727 + 24.793 + 26.296 + 27.320 = 1.136 > 0
  // Sum of inflows = 130 > 100

  const context = `HarborLink AG is evaluating a four-year logistics upgrade. The project requires an immediate cash outlay of EUR 100,000 at time zero. Operating cash inflows arrive at each year-end as shown in the chart (figures already in thousands of euros).

[[CHART type="bar" title="HarborLink upgrade — year-end cash inflows (EUR thousands)"]]
Year 1 | Inflow=25
Year 2 | Inflow=30
Year 3 | Inflow=35
Year 4 | Inflow=40
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Initial outlay at time zero | EUR 100,000 |
| Discount rate (for NPV) | 10% per year |

Treat chart inflows as thousands of euros (so Year 1 contributes EUR 25,000, and so on). Evaluate the following economic assertions:`;

  const statements = [
    "The four chart inflows sum to more than EUR 120,000.",
    "Undiscounted payback occurs strictly before the end of Year 3.",
    "Undiscounted payback is strictly between 3 and 3.5 years.",
    "At a 10% discount rate, project NPV is positive.",
    "Discounting every inflow at 10% leaves a present-value total of inflows strictly below the EUR 100,000 outlay.",
  ];

  // A: 130k > 120k True
  // B: after Y3 cumulative 90 < 100, so not before end Y3 False
  // C: 3 + 10/40 = 3.25 ∈ (3, 3.5) True
  // D: NPV ≈ +1.14k > 0 True
  // E: PV inflows ≈ 101.14 > 100 False

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Read the four year-end inflows from the chart (already in thousands of euros) and add them:

$$
25+30+35+40=130
$$

Converting thousands to euros gives EUR 130,000 of total undiscounted operating inflows. Compare with the claimed threshold EUR 120,000:

$$
130{,}000>120{,}000
$$

so the four chart inflows sum to more than EUR 120,000.

So the statement is True.`,

    `**B.** → False

Build the cumulative undiscounted recovery path year by year (still in thousands):

$$
25,\\qquad 25+30=55,\\qquad 55+35=90,\\qquad 90+40=130
$$

After Year 3 the project has recovered only EUR 90,000 of the EUR 100,000 outlay made at time zero. Because $90<100$, payback has not yet occurred by the end of Year 3, so it is not strictly before the end of Year 3.

So the statement is False.`,

    `**C.** → True

From letter B, after Year 3 one still needs EUR 10,000 to recover the outlay. Year 4 contributes EUR 40,000, so the fractional year of payback inside Year 4 is

$$
\\dfrac{10}{40}=0.25
$$

Undiscounted payback time is therefore

$$
3+0.25=3.25
$$

and $3.25$ lies strictly between $3$ and $3.5$.

So the statement is True.`,

    `**D.** → True

Discount each inflow at $10\\%$ and subtract the outlay, working in thousands of euros:

$$
\\mathrm{NPV}=-100+\\dfrac{25}{1.1}+\\dfrac{30}{1.1^{2}}+\\dfrac{35}{1.1^{3}}+\\dfrac{40}{1.1^{4}}
$$

Approximate term by term:

$$
\\approx -100+22.727+24.793+26.296+27.321=+1.137
$$

Since $+1.137>0$, project NPV at $10\\%$ is positive.

So the statement is True.`,

    `**E.** → False

The present value of the four inflows alone (letter D without the $-100$) is about

$$
22.727+24.793+26.296+27.321=101.137
$$

thousand euros, i.e. about EUR 101,137. That is strictly above the EUR 100,000 outlay — which is why NPV is positive. The claim that discounted inflows fall below the outlay is therefore false.

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.DCF",
    title: "Project cash flows — payback and NPV from a chart",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.14");
  if (!sub?.passage) throw new Error("Octopus / Alien Mind passage t.14 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.14.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.14.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.14.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.14.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.14.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.14.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.14.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.14.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "An octopus can change colour, pattern and even the texture of its skin within a fraction of a second.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.14.08" || o.id === "ENG T.14.09") {
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

// ---- assemble ----
const economics = [
  mapEcon(byId(2, "CASE 2.6.23")),
  mapEcon(byId(2, "CASE 2.5.15")),
  mapEcon(byId(3, "CASE 3.5.07")),
  mapEcon(byId(3, "CASE 3.5.15")),
  mapEcon(byId(4, "CASE 4.5.13")),
  mapEcon(byId(4, "CASE 4.6.01")),
  mapEcon(byId(5, "CASE 5.4.02")),
  mapEcon(byId(6, "CASE 6.2.028")),
  mapEcon(byId(6, "CASE 6.3.009")),
  buildDcfPaybackCase(),
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
