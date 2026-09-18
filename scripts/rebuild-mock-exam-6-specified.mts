/**
 * Rebuild Mock Exam 6 — ultra-hard curated bank + CCC chart + Antibiotic English + deep custom math.
 * Engines deliberately unlike Mocks 1–5 (no DCF dual-NPV twin, no IE/Vieta/pipes/BE clones).
 * Order: economics → english (Antibiotic Discovery Void T.7) → math.
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
 * NEW chart engine (not CVP, P/E, rights, DCF, dual-NPV):
 * cash-conversion cycle from opening/closing working-capital stocks + P&L flows.
 *
 * Revenue 1200, COGS 720 (EUR thousands).
 * Inventory 90→110, AR 80→100, AP 60→70.
 * Inv days ≈ 50.69, AR days ≈ 27.38, AP days ≈ 32.95, CCC ≈ 45.12.
 * Asset turnover with average total assets 850 → ≈ 1.41.
 */
function buildCashConversionCase() {
  const context = `NordicForge AG publishes year-end working-capital stocks and a short P&L extract (all figures in thousands of euros). Opening stocks are the prior year-end balances. Use a 365-day year. Inventory days and payables days are measured against cost of sales; receivables days are measured against revenue. The cash-conversion cycle is inventory days plus receivables days minus payables days.

[[CHART type="grouped-bar" title="NordicForge — opening vs closing working-capital stocks (EUR thousands)"]]
Inventory | Opening=90 | Closing=110
Trade receivables | Opening=80 | Closing=100
Trade payables | Opening=60 | Closing=70
[[/CHART]]

| P&L / balance extract (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1200 |
| Cost of sales | 720 |
| Total assets at the beginning of the year | 800 |
| Total assets at the end of the year | 900 |

Evaluate the following economic assertions:`;

  const statements = [
    "Average inventory for the year equals EUR 100,000.",
    "Inventory days exceed 55 days.",
    "Receivables days are strictly between 25 and 30 days.",
    "The cash-conversion cycle is strictly longer than 40 days.",
    "Asset turnover (revenue relative to average total assets) exceeds 1.5.",
  ];

  // A: avg inv = 100 True (in thousands → EUR 100,000)
  // B: 50.69 > 55? False
  // C: 27.38 ∈ (25,30) True
  // D: CCC ≈ 45.12 > 40 True
  // E: 1200/850 ≈ 1.412 < 1.5 False

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{90+110}{2}=100
$$

In euros that is EUR 100,000.

So the statement is True.`,

    `**B.** → False

$$
\\text{Inventory days}=365\\cdot\\dfrac{100}{720}\\approx 50.69<55
$$

So the statement is False.`,

    `**C.** → True

$$
\\text{Receivables days}=365\\cdot\\dfrac{90}{1200}=27.375\\in(25,30)
$$

So the statement is True.`,

    `**D.** → True

$$
\\text{Payables days}=365\\cdot\\dfrac{65}{720}\\approx 32.95
$$

$$
\\mathrm{CCC}\\approx 50.69+27.38-32.95\\approx 45.12>40
$$

So the statement is True.`,

    `**E.** → False

$$
\\dfrac{1200}{(800+900)/2}=\\dfrac{1200}{850}\\approx 1.41<1.5
$$

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.CCC",
    title: "Working capital stocks — cash-conversion cycle from a chart",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.7");
  if (!sub?.passage) throw new Error("Antibiotic Discovery Void passage t.7 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.7.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.7.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.7.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.7.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.7.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.7.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.7.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.7.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.7.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.7.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.7.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.7.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "The pipeline of genuinely new antibiotic classes has slowed to a trickle even as resistance spreads.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.7.08" || o.id === "ENG T.7.09") {
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

// ---- assemble (unused hard bank + CCC custom; no overlap with Mocks 1–5) ----
const economics = [
  mapEcon(byId(2, "CASE 2.6.47")),
  mapEcon(byId(3, "CASE 3.4.14")),
  mapEcon(byId(4, "CASE 4.3.40")),
  mapEcon(byId(4, "CASE 4.1.10")),
  mapEcon(byId(5, "CASE 5.7.44")),
  mapEcon(byId(6, "CASE 6.1.007")),
  mapEcon(byId(6, "CASE 6.4.016")),
  mapEcon(byId(6, "CASE 6.3.011")),
  mapEcon(byId(6, "CASE 6.5.069")),
  buildCashConversionCase(),
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
