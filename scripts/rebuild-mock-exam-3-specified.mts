/**
 * Rebuild Mock Exam 3 — diversified vs Mock 1/2, harder multi-step logic.
 * Order: economics → english (Silicon Chokepoint T.11) → math.
 *
 * Run: node scripts/run-rebuild-mock-3.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-3-sourced.json");

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
 * NEW chart engine (not P/E, not bond YTM):
 * rights-issue dilution, dividend yield, payout, nominal vs real return.
 */
function buildRightsDividendRealReturnCase() {
  // Pre-rights: 5m shares, price Dec = 24.00, earnings 12m, DPS = 0.96
  // Rights: 1-for-4 at €18 → 1.25m new shares; TERP = (4*24+18)/5 = 22.80
  // Post shares = 6.25m; post EPS = 12/6.25 = 1.92 (if earnings unchanged)
  // Pre EPS = 12/5 = 2.40; dilution
  // Dividend yield at Dec = 0.96/24 = 4%; payout = 0.96/2.40 = 40%
  // Index Jan=100 → Dec=108; inflation 5%; real ≈ 1.08/1.05 - 1 ≈ 2.857%
  // Share Jan=20 → Dec=24; nominal share return = 20%

  const context = `NordGlass AG is listed on the Vienna Stock Exchange. Before a planned capital increase the company has 5.0 million shares outstanding. Earnings for the last financial year were €12.0 million, and the board paid a cash dividend of €0.96 per share. Over the same year the consumer-price index rose by 5.0%.

The board now announces a rights issue: existing shareholders may buy 1 new share for every 4 shares they already hold, at a subscription price of €18.00. Assume earnings stay at €12.0 million after the issue.

[[CHART type="line" title="NordGlass AG closing share price (€)"]]
Jan | Price=20.00
Feb | Price=20.80
Mar | Price=21.40
Apr | Price=21.10
May | Price=22.00
Jun | Price=22.60
Jul | Price=23.20
Aug | Price=22.90
Sep | Price=23.50
Oct | Price=23.80
Nov | Price=24.20
Dec | Price=24.00
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Closing share price (Dec, cum-rights) | €24.00 |
| Shares outstanding (pre-issue) | 5,000,000 |
| Annual earnings | €12,000,000 |
| Cash dividend per share | €0.96 |
| Rights terms | 1 new for 4 old @ €18.00 |
| CPI inflation over the year | 5.0% |

Evaluate the following economic assertions:`;

  const statements = [
    "At the December cum-rights price, NordGlass’s dividend yield exceeds 3.5%.",
    "The theoretical ex-rights price (TERP) after the announced 1-for-4 issue at €18 is less than €22.50.",
    "If earnings remain €12 million after the issue, earnings per share fall by more than 15% relative to the pre-issue EPS.",
    "The payout ratio (dividend per share divided by pre-issue EPS) is greater than 45%.",
    "An investor who bought the share in January at €20 and sold at the December close earned a real (inflation-adjusted) return of more than 12%.",
  ];

  // A: 0.96/24 = 0.04 = 4% > 3.5% → True
  // B: TERP = (4*24 + 18)/5 = 114/5 = 22.80, not < 22.50 → False
  // C: pre EPS 2.40; post 12/6.25 = 1.92; drop = (2.40-1.92)/2.40 = 0.48/2.40 = 20% > 15% → True
  // D: payout = 0.96/2.40 = 0.40 = 40%, not > 45% → False
  // E: nominal = 24/20 - 1 = 20%; real = 1.20/1.05 - 1 = 0.14286 ≈ 14.3% > 12% → True
  // Wait need mix - E true. Good mix: T F T F T

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `Dividend yield compares the cash dividend to the current share price:

$$
\\text{Dividend yield}=\\dfrac{0.96}{24.00}=0.04=4\\%
$$

$$
4\\%>3.5\\%
$$

So the statement is True.`,

    `With a 1-for-4 rights issue the theoretical ex-rights price pools four cum-rights shares and one new share:

$$
\\mathrm{TERP}=\\dfrac{4\\cdot 24.00+18.00}{5}=\\dfrac{114}{5}=22.80
$$

$$
22.80\\not< 22.50
$$

So the statement is False.`,

    `Pre-issue EPS and post-issue EPS (earnings unchanged, shares rise by $5/4$):

$$
\\mathrm{EPS}_{\\text{pre}}=\\dfrac{12{,}000{,}000}{5{,}000{,}000}=2.40
$$

$$
\\text{New shares}=\\dfrac{5{,}000{,}000}{4}=1{,}250{,}000,\\qquad
\\text{Shares after}=6{,}250{,}000
$$

$$
\\mathrm{EPS}_{\\text{post}}=\\dfrac{12{,}000{,}000}{6{,}250{,}000}=1.92
$$

$$
\\dfrac{2.40-1.92}{2.40}=\\dfrac{0.48}{2.40}=0.20=20\\%>15\\%
$$

So the statement is True.`,

    `Payout uses the dividend against pre-issue earnings per share:

$$
\\text{Payout}=\\dfrac{0.96}{2.40}=0.40=40\\%
$$

$$
40\\%\\not> 45\\%
$$

So the statement is False.`,

    `Nominal share return from January to December:

$$
\\dfrac{24.00}{20.00}-1=0.20=20\\%
$$

Inflation was $5\\%$, so the real return is

$$
\\dfrac{1.20}{1.05}-1\\approx 0.1429=14.29\\%
$$

$$
14.29\\%>12\\%
$$

(Equivalently $20\\%-5\\%=15\\%$ is only a rough additive approximation; the exact ratio still clears $12\\%$.)

So the statement is True.`,
  ];

  return {
    case_id: "CASE 6.MOCK.RIGHTS",
    title: "Share Chart — Rights Issue, Dividend Yield and Real Return",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}

/** Hard mixture + break-even linear systems (different engine from rates / utility). */
function buildMathCh5Mixture() {
  // Alloy: pure copper + 40%-copper scrap → 70% copper mix of 120 kg
  // Let x = kg pure (100%), y = kg scrap (40%)
  // x+y=120, x+0.4y=0.7*120=84 → x+0.4y=84 with x=120-y → 120-y+0.4y=84 → 120-0.6y=84 → 0.6y=36 → y=60, x=60
  // Cost: pure €9/kg, scrap €4/kg → cost = 60*9+60*4=540+240=780
  // Selling at €8.50/kg → revenue 120*8.5=1020; profit 240
  // Second product: break-even FC=3600, VC=5, P=11 → Q=3600/(11-5)=600

  const context = `A foundry blends pure copper (100% Cu) with scrap that is 40% copper by mass. It must produce exactly $120\\ \\mathrm{kg}$ of an alloy that is 70% copper. Pure copper costs $€9$ per kilogram and scrap costs $€4$ per kilogram. The finished alloy is sold at $€8.50$ per kilogram.

Separately, a workshop product has fixed costs $€3{,}600$, variable cost $€5$ per unit and selling price $€11$ per unit.`;

  const statements = [
    "In the cheapest blend that meets the mass and copper-content targets, more than $55\\ \\mathrm{kg}$ of scrap must be used.",
    "The total material cost of that $120\\ \\mathrm{kg}$ blend is less than $€750$.",
    "If the entire $120\\ \\mathrm{kg}$ blend is sold at $€8.50$ per kilogram, the profit on materials alone exceeds $€220$.",
    "The workshop product’s break-even output is fewer than $550$ units.",
    "If fixed costs rise by $20\\%$ and the contribution margin per unit is unchanged, break-even output rises by exactly $20\\%$.",
  ];

  // A: scrap y=60 > 55 → True
  // B: cost 780 not < 750 → False
  // C: profit 1020-780=240 > 220 → True
  // D: BE=600 not < 550 → False
  // E: Q' = 1.2 FC / CM = 1.2 Q → exactly 20% → True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Let $x$ be kilograms of pure copper and $y$ kilograms of scrap. Mass and copper balance give

$$
x+y=120
$$

$$
1\\cdot x+0.4\\,y=0.70\\cdot 120=84
$$

Substitute $x=120-y$:

$$
120-y+0.4y=84
$$

$$
120-0.6y=84
$$

$$
0.6y=36\\qquad\\Rightarrow\\qquad y=60
$$

$$
60>55
$$

So the statement is True.`,

    `**B.** → False

With $x=60$ and $y=60$,

$$
\\text{Cost}=60\\cdot 9+60\\cdot 4=540+240=780
$$

$$
780\\not< 750
$$

So the statement is False.`,

    `**C.** → True

$$
\\text{Revenue}=120\\cdot 8.50=1{,}020
$$

$$
\\text{Profit}=1{,}020-780=240>220
$$

So the statement is True.`,

    `**D.** → False

Break-even quantity:

$$
Q_{\\mathrm{BE}}=\\dfrac{3{,}600}{11-5}=\\dfrac{3{,}600}{6}=600
$$

$$
600\\not< 550
$$

So the statement is False.`,

    `**E.** → True

Contribution margin per unit is unchanged, so break-even scales with fixed cost:

$$
Q_{\\mathrm{BE}}'=\\dfrac{1.2\\cdot \\mathrm{FC}}{\\mathrm{CM}}=1.2\\,Q_{\\mathrm{BE}}
$$

That is an exact $20\\%$ rise in break-even output.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.MIX",
    id: "MATH 5.MOCK.MIX",
    title: "Copper–scrap alloy blend and a break-even shift",
    chapter: 5,
    subsection: "5.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve the two-equation copper blend for the scrap mass, price the bill of materials, then compare contribution-margin break-even before and after a proportional fixed-cost shock.",
  };
}

/**
 * Newton cooling + deposit doubling — different from population and radioactive.
 * Harder: must chain continuous cooling with discrete compounding and compare logs.
 */
function buildMathCh10Cooling() {
  // Coffee: T_env=20, T(0)=90, T(5)=60 → (60-20)/(90-20)=40/70=4/7 = e^{-5k} → k = -ln(4/7)/5
  // Time to 35°C: (35-20)/(90-20)=15/70=3/14 = e^{-kt} → t = -ln(3/14)/k
  // Deposit: 8000 grows at 4.5% annual discrete; doubling: (1.045)^n=2 → n=ln2/ln1.045
  // Continuous force with same effective: e^δ=1.045 → δ=ln1.045
  // Piecewise: first 3 years at 4.5%, then 3.0%; reach 11_000?

  const context = `A cup of coffee cools in a room at $20^{\\circ}\\mathrm{C}$. At time $t=0$ the coffee is at $90^{\\circ}\\mathrm{C}$, and after $5$ minutes it is at $60^{\\circ}\\mathrm{C}$. Newton’s law of cooling says

$$
T(t)-20=\\bigl(T(0)-20\\bigr)e^{-kt}
$$

for some constant $k>0$.

Separately, a savings balance of $€8{,}000$ is compounded once per year at $4.5\\%$ effective annual interest.`;

  const statements = [
    "The cooling constant satisfies $k>0.11$.",
    "The coffee first falls below $35^{\\circ}\\mathrm{C}$ at some time $t<18$ minutes.",
    "Writing the annual growth as $e^{\\delta}$, the continuous force $\\delta$ is smaller than $0.044$.",
    "At $4.5\\%$ effective annual interest the $€8{,}000$ balance doubles in fewer than $16$ years.",
    "If the rate falls to $3\\%$ after $3$ years, the balance first exceeds $€11{,}000$ at some $t>7$ (years from the start).",
  ];

  // k = -ln(4/7)/5 = -ln(0.571428)/5 ≈ 0.55962/5 ≈ 0.11192 > 0.11 → True
  // t for 35: -ln(3/14)/k = -ln(0.214286)/k ≈ 1.5404/0.11192 ≈ 13.76 < 18 → True
  // δ = ln(1.045) ≈ 0.04402, not < 0.044 → False (barely)
  // Actually ln(1.045) = 0.0440168... > 0.044, so "smaller than 0.044" is False
  // n = ln2/ln1.045 ≈ 0.693147/0.044017 ≈ 15.75 < 16 → True
  // After 3y: 8000*1.045^3 ≈ 8000*1.141166 ≈ 9129.33
  // Then 9129.33*1.03^m = 11000 → 1.03^m = 1.2049 → m = ln(1.2049)/ln(1.03) ≈ 0.1864/0.02956 ≈ 6.31
  // t = 3+6.31 = 9.31 > 7 → True

  // Mix: T T F T T — a bit many Trues. Flip B to harder threshold?
  // Change B to t<12: 13.76 < 12? False. Good.
  statements[1] =
    "The coffee first falls below $35^{\\circ}\\mathrm{C}$ at some time $t<12$ minutes.";
  // answer: T F F T T

  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

From $T(5)=60$,

$$
\\dfrac{60-20}{90-20}=\\dfrac{40}{70}=\\dfrac{4}{7}=e^{-5k}
$$

$$
k=-\\dfrac{1}{5}\\ln\\dfrac{4}{7}=\\dfrac{1}{5}\\ln\\dfrac{7}{4}\\approx\\dfrac{1}{5}\\cdot 0.55962\\approx 0.11192
$$

$$
0.11192>0.11
$$

So the statement is True.`,

    `**B.** → False

Require $T(t)=35$:

$$
\\dfrac{35-20}{90-20}=\\dfrac{15}{70}=\\dfrac{3}{14}=e^{-kt}
$$

$$
t=-\\dfrac{1}{k}\\ln\\dfrac{3}{14}\\approx\\dfrac{1.54045}{0.11192}\\approx 13.76
$$

$$
13.76\\not< 12
$$

So the statement is False.`,

    `**C.** → False

$$
e^{\\delta}=1.045\\qquad\\Rightarrow\\qquad \\delta=\\ln 1.045\\approx 0.044017
$$

$$
0.044017\\not< 0.044
$$

So the statement is False.`,

    `**D.** → True

Doubling time at $4.5\\%$ annual compounding:

$$
(1.045)^{n}=2\\qquad\\Rightarrow\\qquad n=\\dfrac{\\ln 2}{\\ln 1.045}\\approx\\dfrac{0.693147}{0.044017}\\approx 15.75
$$

$$
15.75<16
$$

So the statement is True.`,

    `**E.** → True

After three years at $4.5\\%$:

$$
8{,}000\\cdot 1.045^{3}\\approx 8{,}000\\cdot 1.14117\\approx 9{,}129.3
$$

Then at $3\\%$:

$$
9{,}129.3\\cdot 1.03^{m}=11{,}000\\qquad\\Rightarrow\\qquad 1.03^{m}\\approx 1.2049
$$

$$
m=\\dfrac{\\ln 1.2049}{\\ln 1.03}\\approx 6.31
$$

$$
t=3+6.31\\approx 9.31>7
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COOL",
    id: "MATH 10.MOCK.COOL",
    title: "Newton cooling chained with deposit doubling and a rate cut",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $k$ from one cooling observation, solve later temperatures with logarithms, convert the effective annual rate to a continuous force via $\\ln(1+i)$, and for the piecewise deposit solve the second stage after compounding the first three years.",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.11");
  if (!sub?.passage) throw new Error("Silicon Chokepoint passage t.11 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.11.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.11.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.11.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.11.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.11.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.11.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.11.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.11.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.11.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.11.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.3.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.11.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "A handful of fabrication plants can stall entire downstream industries when capacity is rationed.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.11.08" || o.id === "ENG T.11.09") {
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
  mapEcon(byId(2, "CASE 2.1.01")),
  mapEcon(byId(2, "CASE 2.7.03")),
  mapEcon(byId(3, "CASE 3.6.46")),
  mapEcon(byId(4, "CASE 4.1.02")),
  mapEcon(byId(4, "CASE 4.5.01")),
  mapEcon(byId(5, "CASE 5.5.28")),
  mapEcon(byId(6, "CASE 6.1.005")),
  mapEcon(byId(6, "CASE 6.3.037")),
  mapEcon(byId(6, "CASE 6.2.044")),
  buildRightsDividendRealReturnCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  const chapterBank = allMath.find((c) => c.num === chapter);
  if (!chapterBank) throw new Error(`Missing math chapter ${chapter}`);
  const t = chapterBank.tasks.find((x) => x.case_id === caseId);
  if (!t) throw new Error(`Missing math ${caseId} in chapter ${chapter}`);
  return mapMath(chapter, t as unknown as Record<string, unknown>);
}

const math = [
  takeMath("MATH 1.82", 1),
  takeMath("MATH 2.60", 2),
  takeMath("MATH 11.123", 3),
  takeMath("MATH 4.191", 4),
  buildMathCh5Mixture(),
  takeMath("MATH 6.15", 6),
  takeMath("MATH 7.89", 7),
  takeMath("MATH 8.44", 8),
  takeMath("MATH 9.E11", 9),
  buildMathCh10Cooling(),
  takeMath("MATH 11.156", 11),
  takeMath("MATH 12.186", 12),
  takeMath("MATH 13.36", 13),
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
console.log("econ ids", economics.map((t) => t.case_id).join(", "));
console.log(
  "eng ids",
  english.tasks.map((t) => `${t.case_id}${t.with_passage ? "+P" : ""}`).join(", "),
);
console.log("math ids", math.map((t) => t.case_id).join(", "));
