/**
 * Rebuild Mock Exam 6 — ultra-hard curated bank + CCC chart + Antibiotic English + deep custom math.
 * Engines: same BBE chapter families as Mocks 1–5 (sets, Vieta, PV, pipes, BE,
 * inequalities, piecewise, powers, parametric cubic, exp/log, product rule,
 * best-of-n, binomial) but denser multi-step traps — not off-syllabus topics.
 * Order: economics → english (Reshoring T.4) → math.
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
 * Cash-conversion + liquidity pack from one working-capital chart.
 * Forces average stocks, day-count ratios, CCC, current ratio, and turnover.
 *
 * Revenue 1450, COGS 870 (EUR thousands).
 * Inventory 120→160, AR 95→125, AP 70→90; cash 40; overdraft 25.
 * Avg inv=140, AR=110, AP=80.
 * Inv days≈58.74; AR≈27.69; AP≈33.56; CCC≈52.87.
 * Year-end CR=325/115≈2.83; asset turnover 1450/980≈1.48.
 */
function buildCashConversionCase() {
  const context = `NordicForge AG reports opening and closing working-capital stocks plus a short P&L / balance extract (EUR thousands). Use a 365-day year. Inventory and payables days use cost of sales; receivables days use revenue. The cash-conversion cycle is inventory days plus receivables days minus payables days. Current ratio uses year-end stocks only.

[[CHART type="grouped-bar" title="NordicForge — opening vs closing stocks (EUR thousands)"]]
Inventory | Opening=120 | Closing=160
Trade receivables | Opening=95 | Closing=125
Trade payables | Opening=70 | Closing=90
[[/CHART]]

| Extract (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1450 |
| Cost of sales | 870 |
| Cash and cash equivalents (year-end) | 40 |
| Bank overdraft (year-end) | 25 |
| Total assets at the beginning of the year | 920 |
| Total assets at the end of the year | 1040 |

Evaluate the following economic assertions:`;

  const statements = [
    "Average inventory exceeds average trade receivables by exactly EUR 30,000.",
    "Inventory days lie strictly between 55 and 60.",
    "The cash-conversion cycle is strictly longer than 50 days but strictly shorter than 55 days.",
    "The year-end current ratio exceeds 2.5.",
    "Asset turnover exceeds 1.5.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{120+160}{2}=140,\\qquad \\dfrac{95+125}{2}=110,\\qquad 140-110=30
$$

In euros that is EUR 30,000.

So the statement is True.`,

    `**B.** → True

$$
365\\cdot\\dfrac{140}{870}\\approx 58.74\\in(55,60)
$$

So the statement is True.`,

    `**C.** → True

$$
\\text{AR days}=365\\cdot\\dfrac{110}{1450}\\approx 27.69,\\qquad \\text{AP days}=365\\cdot\\dfrac{80}{870}\\approx 33.56
$$

$$
\\mathrm{CCC}\\approx 58.74+27.69-33.56\\approx 52.87\\in(50,55)
$$

So the statement is True.`,

    `**D.** → True

Year-end current assets $160+125+40=325$; current liabilities $90+25=115$:

$$
\\dfrac{325}{115}\\approx 2.83>2.5
$$

So the statement is True.`,

    `**E.** → False

$$
\\dfrac{1450}{(920+1040)/2}=\\dfrac{1450}{980}\\approx 1.48<1.5
$$

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.CCC",
    title: "Working capital chart — CCC band, current ratio and turnover",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.4");
  if (!sub?.passage) throw new Error("Reshoring passage t.4 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.4.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.4.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.4.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.4.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.4.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.4.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.4.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.4.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.4.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.4.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.4.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.4.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "Reshoring moves production closer to final markets after firms reassess distant supply chains.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.4.08" || o.id === "ENG T.4.09") {
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

// ---- assemble: preserve curated econ/english from prior sourced; refresh CCC + math ----
const prev = JSON.parse(fs.readFileSync(outPath, "utf8")) as {
  economics: Array<Record<string, unknown>>;
  english: { passage: string; passageTitle?: string; tasks: Array<Record<string, unknown>> };
  math: Array<Record<string, unknown>>;
};

const economics = prev.economics.map((t) => {
  if (t.case_id === "CASE 6.MOCK.CCC") return buildCashConversionCase();
  // Re-scrub stem coaching on preserved claims
  return {
    ...t,
    statements: ((t.statements as string[]) || []).map((s) =>
      s
        .replace(/\s*\(current assets to current liabilities\)/gi, "")
        .replace(/\s*\(revenue to average total assets\)/gi, "")
        .replace(/\s{2,}/g, " ")
        .trim(),
    ),
  };
});

const english = prev.english;

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
