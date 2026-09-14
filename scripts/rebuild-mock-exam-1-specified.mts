/**
 * Rebuild Mock Exam 1 from the user-specified bank list + generated tasks.
 * Order: economics → english → math.
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-1-sourced.json");

function loadEcon(ch: number) {
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, `economics-cases-ch${ch}-subtopics.json`), "utf8"),
  ) as Array<Record<string, unknown>>;
}

function byIndex(ch: number, n: number) {
  const d = loadEcon(ch);
  const t = d[n - 1];
  if (!t) throw new Error(`Econ ch${ch} #${n} missing`);
  return t;
}

function scrubFormulaHints(text: string): string {
  return text
    .replace(
      /,?\s*the operating result taken as a percentage of total equity/gi,
      "",
    )
    .replace(
      /,?\s*the operating result taken relative to equity plus non-current liabilities/gi,
      "",
    )
    .replace(
      /,?\s*indicating profit is only partly backed by cash/gi,
      "",
    )
    .replace(
      /,?\s*the operating result taken as a percentage of[^,.]+/gi,
      "",
    )
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
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
      const extras: string[] = [];
      // After main BS, remaining tables (income/CF) stay as-is — handled by outer loop
      for (const [label, amount = ""] of data) {
        const key = label.replace(/\*\*/g, "").trim().toUpperCase();
        if (key === "ASSETS" || key === "EQUITY" || key === "LIABILITIES") {
          cur = key as keyof typeof sections;
          continue;
        }
        if (!cur) continue;
        if (/^total equity and liabilities$/i.test(label.replace(/\*\*/g, "").trim())) continue;
        // Stop if we hit income/cash headers mistakenly inside — shouldn't happen
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
      // Keep prose before table
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

function mapEcon(t: Record<string, unknown>, patch?: Partial<Record<string, unknown>>) {
  let context = String(t.context ?? "");
  let statements = [...((t.statements as string[]) ?? [])];
  let explanations = [...((t.tactical_explanations as string[]) ?? [])];
  let answer_key = [...((t.answer_key as boolean[]) ?? [])];

  if (t.case_id === "CASE 6.3.003") {
    statements = statements.map(scrubFormulaHints);
    // Rewrite mismatched bank explanations to match scrubbed claims
    explanations = [
      "**A.** → False\n\nPaying cash for software replaces one asset with another when the licence is capitalised, so total assets do not rise. If the outlay is expensed, cash falls and equity falls through profit — assets still do not increase.\n\nSo the statement is False.",
      "**B.** → False\n\n$$\\mathrm{ROE}=\\dfrac{192}{736}\\approx 0.261=26.1\\%$$\n\n$$26.1\\%<35.1\\%$$\n\nSo the statement is False.",
      "**C.** → False\n\n$$\\dfrac{176}{192}\\approx 0.917=91.7\\%$$\n\n$$91.7\\%\\not< 78.6\\%$$\n\nSo the statement is False.",
      "**D.** → False\n\n$$\\dfrac{223}{1235}\\approx 0.181=18.1\\%$$\n\n$$18.1\\%\\not> 25.7\\%$$\n\nSo the statement is False.",
      "**E.** → True\n\nNon-current liabilities $=227+79=306$.\n\nCapital employed $=736+306=1042$.\n\n$$\\mathrm{ROCE}=\\dfrac{192}{1042}\\approx 0.184=18.4\\%$$\n\n$$18.4\\%>15.5\\%$$\n\nSo the statement is True.",
    ];
  }

  if (t.case_id === "CASE 5.7.55") {
    context =
      "Review product-mix decisions and portfolio labels for consumer brands. Evaluate the following economic assertions:";
  }

  if (t.case_id === "CASE 2.2.04") {
    context =
      "Robin claims that opportunity cost is the sum of every rejected option's price. Sara chooses between a €500 washing machine and a €700 laptop. Evaluate the following economic assertions:";
  }

  context = splitBalanceSheet(context);

  return {
    case_id: t.case_id,
    title: t.title,
    subsection: t.subsection,
    chapter: Number(String(t.case_id).match(/CASE (\d+)/)?.[1] ?? 0),
    context,
    statements,
    answer_key,
    tactical_explanations: explanations,
    difficulty_level: t.difficulty_level,
    ...patch,
  };
}

/** Generated stock-chart case (ch6 style): PE, market cap, turnover. */

/** Two-year cash-flow table case from bank, scrubbed statements + newest explanation style. */
function buildCashFlowCase() {
  const bank = loadEcon(6).find((t) => t.case_id === "CASE 6.2.045");
  if (!bank) throw new Error("CASE 6.2.045 missing");
  return {
    case_id: "CASE 6.2.045",
    title: bank.title,
    subsection: bank.subsection,
    chapter: 6,
    context: String(bank.context ?? "").trim() + "\n",
    statements: [
      "Cash flow from operating activities grew by more than 19.1% from Year 1 to Year 2.",
      "Buying plant, machinery or another long-term asset for cash is classified as cash flow from investing activities.",
      "Profit for the year appears in the income statement and raises retained earnings, but it is not shown as its own line in the cash flow statement.",
      "Dividends paid to shareholders are recorded within cash flow from financing activities.",
      "Paying dividends is classified as an investing cash outflow.",
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      "**A.** → False\n\n$$\\dfrac{354-305}{305}=\\dfrac{49}{305}\\approx 0.1607=16.07\\%$$\n\n$$16.07\\%\\not> 19.1\\%$$\n\nSo the statement is False.",
      "**B.** → True\n\nCash spent on long-term productive assets is an investing outflow. Plant and machinery purchases sit in cash flow from investing activities.\n\nSo the statement is True.",
      "**C.** → True\n\nThe income statement reports profit and the balance sheet absorbs it in retained earnings. The cash flow statement tracks cash movements, not the accounting profit line itself.\n\nSo the statement is True.",
      "**D.** → True\n\nDistributions to owners are financing outflows. Dividends paid are recorded in cash flow from financing activities.\n\nSo the statement is True.",
      "**E.** → False\n\nDividends are a financing outflow to shareholders, not an investing outflow. Investing covers long-term asset deals, not owner distributions.\n\nSo the statement is False.",
    ],
    difficulty_level: "5/5",
  };
}

function buildStockChartCase() {
  const context = `NordPeak AG is listed on the Vienna Stock Exchange. At the latest closing price the company has 12 million shares outstanding. Earnings for the last financial year were €18.0 million, and 4.8 million shares changed hands on the exchange over the same year.

[[CHART type="line" title="NordPeak AG closing share price (€)"]]
Jan | Price=16.50
Feb | Price=17.20
Mar | Price=18.40
Apr | Price=17.80
May | Price=19.10
Jun | Price=20.40
Jul | Price=21.00
Aug | Price=22.50
Sep | Price=21.80
Oct | Price=23.20
Nov | Price=24.00
Dec | Price=24.50
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Closing share price (Dec) | €24.50 |
| Shares outstanding | 12,000,000 |
| Annual earnings | €18,000,000 |
| Annual shares traded | 4,800,000 |

Evaluate the following economic assertions:`;

  const statements = [
    "At the December close, NordPeak's market capitalisation exceeds €290 million.",
    "Earnings per share for the year are less than €1.40.",
    "The price–earnings ratio at the December close exceeds 18.",
    "Share turnover for the year is less than 35% of shares outstanding.",
    "If the January close is taken instead of December, market capitalisation is below €200 million.",
  ];

  // Market cap Dec = 24.50 * 12e6 = 294e6 > 290 → True
  // EPS = 18e6/12e6 = 1.50, not < 1.40 → False
  // PE = 24.50/1.50 ≈ 16.333, not > 18 → False
  // Turnover = 4.8/12 = 40%, not < 35% → False
  // Jan MC = 16.50*12e6 = 198e6 < 200 → True
  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    "**A.** → True\n\n$$\\text{Market capitalisation}=24.50\\times 12{,}000{,}000=294{,}000{,}000$$\n\n$$294\\ \\text{million}>290\\ \\text{million}$$\n\nSo the statement is True.",
    "**B.** → False\n\n$$\\text{EPS}=\\dfrac{18{,}000{,}000}{12{,}000{,}000}=1.50$$\n\n$$1.50\\not< 1.40$$\n\nSo the statement is False.",
    "**C.** → False\n\n$$\\text{P/E}=\\dfrac{24.50}{1.50}\\approx 16.33$$\n\n$$16.33\\not> 18$$\n\nSo the statement is False.",
    "**D.** → False\n\n$$\\text{Share turnover}=\\dfrac{4{,}800{,}000}{12{,}000{,}000}=0.40=40\\%$$\n\n$$40\\%\\not< 35\\%$$\n\nSo the statement is False.",
    "**E.** → True\n\n$$\\text{Market capitalisation (Jan)}=16.50\\times 12{,}000{,}000=198{,}000{,}000$$\n\n$$198\\ \\text{million}<200\\ \\text{million}$$\n\nSo the statement is True.",
  ];

  return {
    case_id: "CASE 6.MOCK.STOCK",
    title: "Share Price Chart — Market Cap, P/E and Turnover",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}

/** Math ch5 — work-rate puzzle in bank explanation style (generated). */
function buildMathCh5() {
  // Mira & Leo packing gift boxes.
  // Together full job: 8 hours. Work together 2 hours, Mira leaves, Leo finishes in 9 hours alone.
  // Together rate 1/8. In 2h: 2/8=1/4 done. Remaining 3/4 in 9h by Leo → Leo rate = (3/4)/9 = 1/12.
  // Mira rate = 1/8 - 1/12 = 1/24.
  // A: If full job together, Mira's share = (1/24)*8 = 1/3 ≈ 33.3% — claim "exactly 40%" → False
  // B: If order twice as big, after same 2h together (done 1/4 of ORIGINAL = 1/8 of double), remaining 7/8 of double for Leo at 1/12 per original-job per hour = rate 1/24 of double-job per hour. Time = (7/8)/(1/24) = 21 hours. Claim "Leo needs 18 hours" → False
  // Actually let's craft clean true/false like the photo.
  //
  // Redo with numbers mirroring photo structure:
  // Together 8h. After 4h together Mira sick. Leo works 6h more.
  // 4h together = 4/8 = 1/2 done. Leo does 1/2 in 6h → Leo = 1/12. Mira = 1/8-1/12=1/24.
  // A: Mira share if full together: 8/24=1/3 ≈33.3%. Claim 25% → False? Or claim exactly 1/3 → True
  // Better mirror photo:
  // A True: Mira would complete 1/3 of the order if they worked together the whole time.
  // B False: If order twice as big, Leo needs 12h after Mira leaves (actually more)
  // C True: Mira alone needs 24h
  // D False: something about minutes per box
  // E False: reversed scenario

  const context = `Two workshop owners, Mira and Leo, are packing gift boxes for a client order. If they had worked together the entire time, they would have finished the order in $8$ hours. After $4$ hours of joint work, Mira had to leave. Leo then needed another $6$ hours alone to finish the order.`;

  const statements = [
    "If they had completed the entire order together, Mira would have completed exactly one third of the order.",
    "If the order were twice as large as the original one, Leo would need $12$ hours to finish it after Mira left at the same moment.",
    "If Mira worked alone the entire time, it would take her $24$ hours to finish the order.",
    "If the order was for $120$ boxes, then the difference between the times Mira and Leo need to pack one box is more than $4$ minutes.",
    "If the roles were reversed — Leo leaves after $4$ hours and Mira finishes alone — then Mira would need more than $10$ hours to finish the order.",
  ];

  // Verify D: Mira time/box = 24h/120 = 0.2h = 12 min. Leo = 12h/120 = 0.1h = 6 min. Diff = 6 min > 4 → True!
  // User photo D was False. Let me recalculate for False:
  // Diff = 6 minutes which IS more than 4 → True. Change claim to "more than 7 minutes" → False.

  statements[3] =
    "If the order was for $120$ boxes, then the difference between the times Mira and Leo need to pack one box is more than $7$ minutes.";

  // E: After 4h together, 1/2 done. Mira alone at 1/24 does remaining 1/2 in 12 hours. Claim > 10 → True (12>10).
  // Photo E was False. Change claim to "more than 14 hours" → False.

  statements[4] =
    "If the roles were reversed — Leo leaves after $4$ hours and Mira finishes alone — then Mira would need more than $14$ hours to finish the order.";

  // B: Twice as big. After 4h together they completed 1/2 of ORIGINAL = 1/4 of double order.
  // Remaining 3/4 of double. Leo's rate in double-order units: (1/12 original/h) = 1/24 double/h.
  // Time = (3/4) / (1/24) = 18 hours. Claim 12 → False. Good.

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    "**A.** → True\n\nCombined rate:\n\n$$\\dfrac{1}{8}$$\n\nAfter $4$ hours together, half the order is done, so Leo finishes the remaining half in $6$ hours:\n\n$$\\text{Leo's rate}=\\dfrac{1/2}{6}=\\dfrac{1}{12}$$\n\n$$\\text{Mira's rate}=\\dfrac{1}{8}-\\dfrac{1}{12}=\\dfrac{1}{24}$$\n\nOver a full joint run of $8$ hours Mira completes\n\n$$\\dfrac{1}{24}\\cdot 8=\\dfrac{1}{3}$$\n\nof the order.\n\nSo the statement is True.",
    "**B.** → False\n\nA doubled order means Leo's rate is $\\dfrac{1}{24}$ of the enlarged job per hour. After the same $4$ joint hours only one quarter of the enlarged job is done, so $\\dfrac{3}{4}$ remains:\n\n$$t=\\dfrac{3/4}{1/24}=18$$\n\nhours, not $12$.\n\nSo the statement is False.",
    "**C.** → True\n\nMira's rate is $\\dfrac{1}{24}$ of the order per hour, so alone she needs $24$ hours.\n\nSo the statement is True.",
    "**D.** → False\n\nTime per box:\n\n$$\\text{Mira: }\\dfrac{24}{120}=0.2\\text{ h}=12\\text{ min}$$\n\n$$\\text{Leo: }\\dfrac{12}{120}=0.1\\text{ h}=6\\text{ min}$$\n\n$$12-6=6\\text{ min}\\not> 7\\text{ min}$$\n\nSo the statement is False.",
    "**E.** → False\n\nAfter $4$ joint hours half the order remains. Mira alone finishes it in\n\n$$\\dfrac{1/2}{1/24}=12$$\n\nhours, which is not more than $14$.\n\nSo the statement is False.",
  ];

  return {
    case_id: "MATH 5.MOCK.WORK",
    id: "MATH 5.MOCK.WORK",
    title: "Two-person packing rates with an interrupted shift",
    chapter: 5,
    subsection: "5.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "From the joint time and Leo's finishing stretch recover both rates: Mira $\\frac{1}{24}$, Leo $\\frac{1}{12}$. Every claim is then a direct comparison against those rates.",
  };
}

/** Math ch10 — harder exponential/log population & macro scenario. */
function buildMathCh10() {
  // Country: P(0)=15 million, grows 2.4%/year discrete.
  // Neighbor: 9e6 * e^{0.028 t}
  // Harder calcs: logs, piecewise, GDP per capita compounded carefully.

  const context = `Let $P(t)$ denote the population of a country (number of inhabitants) after $t$ years. The current population is $P(0)=15{,}000{,}000$, and it is assumed to grow by $2.4\\%$ per year.`;

  const statements = [
    "It holds that $P(t)=15\\cdot 1.024^{t}$.",
    "If a neighbouring country's population is $9\\cdot 10^{6}e^{0.028t}$, then that country's effective annual growth rate is smaller than $2.8\\%$.",
    "After $25$ years the home population will have grown by more than $80\\%$.",
    "The finance ministry forecasts that real GDP grows by $5.2\\%$ per year. Then real GDP per capita grows by more than $3\\%$ per year.",
    "Assume that after $8$ years the home growth rate falls to $1.5\\%$ per year. Then a population of $20$ million is first attained at some $t>18$.",
  ];

  // A: P(t)=15*1.024^t would be in millions only if unit is millions — but P is number of inhabitants, P(0)=15e6, so should be 15e6*1.024^t or 15_000_000. Formula with 15 is False (same trap as photo).
  // B: effective = e^{0.028}-1 ≈ 0.028394 ≈ 2.839% > 2.8% → claim "smaller" is False
  // C: 1.024^25 ≈ 1.8107 → +81.07% > 80% → True (harder than photo which was false)
  // D: per capita factor = 1.052/1.024 ≈ 1.02734 → 2.734% not > 3% → False
  // E: After 8y: 15e6 * 1.024^8 ≈ 15e6 * 1.209 ≈ 18.135e6
  // Need 20e6: 18.135 * 1.015^n = 20 → 1.015^n = 1.1028 → n = ln(1.1028)/ln(1.015) ≈ 0.09785/0.01489 ≈ 6.57
  // t = 8+6.57 = 14.57 which is NOT > 18 → False

  // Wait user asked for harder - let me make E true with harder threshold
  // Change E: population of 22 million at t>20
  // 18.135 * 1.015^n = 22 → 1.015^n = 1.2131 → n = ln(1.2131)/ln(1.015) ≈ 0.1932/0.01489 ≈ 12.98
  // t = 8+12.98 = 20.98 > 20 → True

  statements[4] =
    "Assume that after $8$ years the home growth rate falls to $1.5\\%$ per year. Then a population of $22$ million is first attained at some $t>20$.";

  // C: 1.024^25 - verify precisely
  // Also make C require more care: "more than 85%" → 81% so False, harder judgment
  statements[2] =
    "After $25$ years the home population will have grown by more than $85\\%$.";
  // 81% not > 85 → False

  const answer_key = [false, false, false, false, true];

  const tactical_explanations = [
    "**A.** → False\n\n$P(t)$ counts inhabitants and $P(0)=15{,}000{,}000$. The model with annual growth $2.4\\%$ is\n\n$$P(t)=15{,}000{,}000\\cdot 1.024^{t}$$\n\n(or $15\\cdot 10^{6}\\cdot 1.024^{t}$). Writing $15\\cdot 1.024^{t}$ understates the level by a factor of one million.\n\nSo the statement is False.",
    "**B.** → False\n\nContinuous force $0.028$ gives effective annual growth\n\n$$e^{0.028}-1\\approx 0.02839=2.839\\%$$\n\nwhich is larger than $2.8\\%$, not smaller.\n\nSo the statement is False.",
    "**C.** → False\n\n$$1.024^{25}=e^{25\\ln 1.024}\\approx e^{25\\cdot 0.02372}\\approx e^{0.593}\\approx 1.809$$\n\nGrowth factor $\\approx 1.809$ means about $+80.9\\%$, which is not more than $85\\%$.\n\nSo the statement is False.",
    "**D.** → False\n\n$$\\dfrac{1.052}{1.024}\\approx 1.0273$$\n\nso real GDP per capita grows by about $2.73\\%$ per year, which is not more than $3\\%$.\n\nSo the statement is False.",
    "**E.** → True\n\nAfter $8$ years:\n\n$$P(8)=15{,}000{,}000\\cdot 1.024^{8}\\approx 15{,}000{,}000\\cdot 1.209\\approx 18{,}135{,}000$$\n\nFrom then on at $1.5\\%$:\n\n$$18{,}135{,}000\\cdot 1.015^{n}=22{,}000{,}000$$\n\n$$1.015^{n}=\\dfrac{22}{18.135}\\approx 1.213$$\n\n$$n=\\dfrac{\\ln 1.213}{\\ln 1.015}\\approx 12.98$$\n\n$$t=8+12.98\\approx 20.98>20$$\n\nSo the statement is True.",
  ];

  return {
    case_id: "MATH 10.MOCK.EXP",
    id: "MATH 10.MOCK.EXP",
    title: "Population growth, force of interest, and GDP per capita",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Keep units for $P(t)$ explicit, convert continuous force to effective annual growth via $e^{k}-1$, and for piecewise growth solve the second stage with logarithms.",
  };
}

function mapMath(chapter: number, t: Record<string, unknown>) {
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
    answer_key: t.answer_key ?? [],
    tactical_explanations: t.tactical_explanations ?? [],
    difficulty_level: t.difficulty_level ?? "",
    solution_overview: t.solution_overview ?? "",
    figure: t.figure || undefined,
    tables_markdown: t.tables_markdown || undefined,
  };
}

function buildEnglish() {
  const texts = JSON.parse(fs.readFileSync(path.join(ROOT, "english/texts.json"), "utf8"));
  const grammar = JSON.parse(fs.readFileSync(path.join(ROOT, "english/grammar.json"), "utf8"));
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.16");
  if (!sub?.passage) throw new Error("Voyager passage t.16 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.16.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.16.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.16.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.16.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.16.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.16.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.16.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.16.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.16.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.16.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.15.20", kind: "grammar", withPassage: false, src: "grammar" },
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
    // For T.16.10 without passage, embed the source sentence in the stem if available
    if (o.id === "ENG T.16.10") {
      const srcSentence =
        t.source_sentence ||
        t.prompt_sentence ||
        "One-way radio contact with Voyager now takes more than twenty hours to reach the spacecraft.";
      // Prefer extracting from bank context if it contains a quoted sentence
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence = quoted?.[1] || String(t.lead_sentence || srcSentence);
      context = `Consider this sentence from the Voyager passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.16.08" || o.id === "ENG T.16.09") {
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
  mapEcon(byIndex(2, 20)),
  mapEcon(byIndex(2, 114)),
  mapEcon(byIndex(3, 20)),
  mapEcon(byIndex(4, 21)),
  mapEcon(byIndex(5, 214)),
  mapEcon(byIndex(6, 30)),
  mapEcon(byIndex(6, 83)),
  mapEcon(byIndex(6, 175)),
  buildCashFlowCase(),
  buildStockChartCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  for (const c of allMath) {
    const t = c.tasks.find((x) => x.case_id === caseId);
    if (t) return mapMath(chapter, t as unknown as Record<string, unknown>);
  }
  throw new Error(`Missing math ${caseId}`);
}

const math = [
  takeMath("MATH 1.120", 1),
  takeMath("MATH 2.142", 2),
  takeMath("MATH 11.132", 3),
  takeMath("MATH 4.215", 4),
  buildMathCh5(),
  takeMath("MATH 6.47", 6),
  takeMath("MATH 7.E03", 7),
  takeMath("MATH 8.81", 8),
  takeMath("MATH 9.37", 9),
  buildMathCh10(),
  takeMath("MATH 11.174", 11),
  takeMath("MATH 12.205", 12),
  takeMath("MATH 13.46", 13),
];

// Audit lengths
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
    }
  }
}
audit("econ", economics);
audit("eng", english.tasks);
audit("math", math);

const bundle = { economics, english, math };
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
console.log(
  "econ ids",
  economics.map((t) => t.case_id).join(", "),
);
console.log(
  "eng ids",
  english.tasks.map((t) => `${t.case_id}${t.with_passage ? "+P" : ""}`).join(", "),
);
console.log(
  "math ids",
  math.map((t) => t.case_id).join(", "),
);
