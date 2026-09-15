/**
 * Rebuild Mock Exam 4 — diversified vs Mock 1/2/3, teacher-step explanations.
 * Order: economics → english (Doomsday Glacier T.12) → math.
 *
 * Run: node scripts/run-rebuild-mock-4.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { loadAllMathChapterTasks } from "../src/data/math-chapters.ts";
import { scrubKatexDeep } from "../src/lib/scrub-katex.ts";

const ROOT = path.resolve("src/data");
const outPath = path.join(ROOT, "mock-exam-4-sourced.json");

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
 * NEW chart engine (not P/E, not bond YTM, not rights):
 * working capital, current/quick ratios, inventory days, ROCE.
 */
function buildWorkingCapitalRoceCase() {
  // CA: cash 150 + AR 350 + inventory 500 = 1000
  // CL = 500 → current = 2.0; quick = (1000-500)/500 = 1.0; WC = 500
  // NCA = 1500; total assets = 2500
  // Equity = 1400; LTD = 600; CL = 500 → total L+E = 2500
  // EBIT = 280; capital employed = E + LTD = 2000; ROCE = 14%
  // COGS = 2000; inv turnover = 2000/500 = 4; days = 365/4 = 91.25
  // Revenue chart for atmosphere only

  const context = `AlpineWare GmbH manufactures outdoor gear. Year-end figures (EUR thousands) and a monthly revenue track are given below. Cost of goods sold for the year was EUR 2,000 thousand. Operating profit (EBIT) was EUR 280 thousand.

[[CHART type="line" title="AlpineWare GmbH monthly revenue (EUR thousands)"]]
Jan | Revenue=180
Feb | Revenue=175
Mar | Revenue=190
Apr | Revenue=205
May | Revenue=220
Jun | Revenue=240
Jul | Revenue=255
Aug | Revenue=250
Sep | Revenue=230
Oct | Revenue=215
Nov | Revenue=200
Dec | Revenue=210
[[/CHART]]

| Balance-sheet item | EUR thousands |
| --- | ---: |
| Cash and cash equivalents | 150 |
| Trade receivables | 350 |
| Inventories | 500 |
| Non-current assets | 1,500 |
| Trade payables and other current liabilities | 500 |
| Long-term bank loans | 600 |
| Equity | 1,400 |

Evaluate the following economic assertions:`;

  const statements = [
    "AlpineWare’s current ratio at year-end exceeds 1.8.",
    "The quick (acid-test) ratio is strictly greater than 1.2.",
    "Working capital (current assets minus current liabilities) equals EUR 400 thousand.",
    "Return on capital employed, taking capital employed as equity plus long-term loans, exceeds 12%.",
    "Inventory days (using year-end inventories and annual cost of goods sold, and a 365-day year) are less than 80 days.",
  ];

  // A: CA=1000, CL=500, CR=2.0 > 1.8 → True
  // B: quick=(1000-500)/500=1.0, not > 1.2 → False
  // C: WC=1000-500=500, not 400 → False
  // D: ROCE=280/2000=0.14=14% > 12% → True
  // E: days=365/4=91.25, not < 80 → False
  const answer_key = [true, false, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Current assets and the current ratio:

$$
\\text{Current assets}=150+350+500=1{,}000
$$

$$
\\text{Current ratio}=\\dfrac{1{,}000}{500}=2.0
$$

$$
2.0>1.8
$$

So the statement is True.`,

    `**B.** → False

The quick ratio excludes inventories:

$$
\\text{Quick ratio}=\\dfrac{1{,}000-500}{500}=\\dfrac{500}{500}=1.0
$$

$$
1.0\\nless 1.2\\quad\\text{and}\\quad 1.0\\ngtr 1.2
$$

So the claim that the quick ratio is strictly greater than $1.2$ is False.`,

    `**C.** → False

Working capital is current assets minus current liabilities:

$$
\\text{Working capital}=1{,}000-500=500
$$

The claim says EUR 400 thousand. That does not match.

So the statement is False.`,

    `**D.** → True

Capital employed and ROCE:

$$
\\text{Capital employed}=1{,}400+600=2{,}000
$$

$$
\\mathrm{ROCE}=\\dfrac{280}{2{,}000}=0.14=14\\%
$$

$$
14\\%>12\\%
$$

So the statement is True.`,

    `**E.** → False

Inventory turnover and inventory days:

$$
\\text{Inventory turnover}=\\dfrac{2{,}000}{500}=4
$$

$$
\\text{Inventory days}=\\dfrac{365}{4}=91.25
$$

$$
91.25\\ngtr 80\\quad\\text{fails the claim }{<}\\,80
$$

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.WC",
    title: "Working Capital, Liquidity Ratios and ROCE",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}

/** Real-case logic — overview owns the truth table; each letter has its own teacher solve. */
function buildMathCh1Committee() {
  const truthTable = `**Truth table of valid committees.**

Write $P,Q,R,S,T$ for Priya, Quinn, Rosa, Sam, Tess. Encode each rule, then list every $0/1$ assignment that survives. Size is $P+Q+R+S+T$.

How the table is built:

1. Enforce $P\\Rightarrow Q$ and the exclusive-or on $(Q,R)$.
2. Enforce $R\\Rightarrow\\neg S$ and $S\\lor T$.
3. Enforce $T\\Rightarrow\\neg P$.
4. Drop any row whose size is strictly less than $2$.
5. Keep only the surviving rows — those are the valid committees.

| $P$ | $Q$ | $R$ | $S$ | $T$ | Size | Valid? |
| --- | --- | --- | --- | --- | ---: | --- |
| 1 | 1 | 0 | 1 | 0 | 3 | yes |
| 0 | 0 | 1 | 0 | 1 | 2 | yes |
| 0 | 1 | 0 | 1 | 0 | 2 | yes |
| 1 | 1 | 0 | 0 | 1 | — | no ($T\\Rightarrow\\neg P$ fails) |
| 1 | 1 | 1 | * | * | — | no (exclusive-or on $Q,R$ fails) |
| 0 | 0 | 1 | 1 | * | — | no ($R\\Rightarrow\\neg S$ fails) |
| 0 | 1 | 0 | 0 | 0 | 1 | no (size $<2$) |

Exactly three valid committees appear: $\\{P,Q,S\\}$, $\\{R,T\\}$, and $\\{Q,S\\}$.`;

  const context = `Five researchers — Priya, Quinn, Rosa, Sam, and Tess — are considered for a grant review committee.

If Priya sits, then Quinn sits.

Exactly one of Quinn or Rosa sits (never both, never neither).

If Rosa sits, then Sam does not sit.

At least one of Sam or Tess sits.

Tess sits only if Priya does not sit.

At least two researchers sit on the committee.`;

  const statements = [
    "Every valid committee includes Quinn.",
    "It is possible to form a valid committee that includes both Rosa and Sam.",
    "If Priya sits, then Tess cannot sit.",
    "There are exactly two valid committees of size two.",
    "A committee of all five researchers can satisfy every rule.",
  ];

  const answer_key = [false, false, true, true, false];

  const tactical_explanations = [
    `**A.** → False

The claim says Quinn is on every valid committee. Check whether a Quinn-out roster can still work.

Assume $Q=0$. The exclusive-or on $(Q,R)$ then forces $R=1$. Rule $R\\Rightarrow\\neg S$ forces $S=0$, so $S\\lor T$ forces $T=1$. Rule $T\\Rightarrow\\neg P$ forces $P=0$. The committee is

$$
\\{R,T\\}
$$

Size $2$, so the size rule holds. Quinn is absent. That single counter-example kills the claim.

So the statement is False.`,

    `**B.** → False

Force $R=1$ and $S=1$ together. Rule $R\\Rightarrow\\neg S$ becomes

$$
1\\Rightarrow\\neg 1
$$

which is false. No repair of the other bits can revive a contradiction in this rule. Rosa and Sam never sit together on a valid committee.

So the statement is False.`,

    `**C.** → True

The stem says “Tess sits only if Priya does not sit,” which is

$$
T\\Rightarrow\\neg P
$$

Contraposing gives $P\\Rightarrow\\neg T$: if Priya sits, Tess cannot. The overview’s Priya-in survivor is $\\{P,Q,S\\}$ with $T=0$; no valid row has $P=T=1$.

So the statement is True.`,

    `**D.** → True

From the overview solve the valid committees are

$$
\\{P,Q,S\\}\\quad(\\text{size }3),\\qquad \\{R,T\\}\\quad(\\text{size }2),\\qquad \\{Q,S\\}\\quad(\\text{size }2).
$$

Exactly two of them have size two.

So the statement is True.`,

    `**E.** → False

All five would require $Q=R=1$, which immediately breaks the exclusive-or on Quinn and Rosa. Size five never appears among the valid rows.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 1.MOCK.COMMITTEE",
    id: "MATH 1.MOCK.COMMITTEE",
    title: "Grant review committee — five researchers and six rules",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Part 1: Setup.**

Write $P,Q,R,S,T$ for Priya, Quinn, Rosa, Sam, Tess. The stem is

$$
(1)\\ P\\Rightarrow Q,\\qquad (2)\\ (Q\\land\\neg R)\\lor(\\neg Q\\land R),\\qquad (3)\\ R\\Rightarrow\\neg S,
$$

$$
(4)\\ S\\lor T,\\qquad (5)\\ T\\Rightarrow\\neg P,
$$

and (6) size at least two.

**Part 2: Shared forcing.**

- Priya-in forces Quinn-in, then Rosa-out, Sam free, Tess blocked → survivor $\\{P,Q,S\\}$.
- Quinn-out forces Rosa-in, Sam-out, Tess-in, Priya-out → survivor $\\{R,T\\}$.
- Priya-out with Quinn-in, Rosa-out, Sam-in, Tess-out → survivor $\\{Q,S\\}$.

Only three rows survive.

${truthTable}`,
  };
}

/** Multi-step algebra — threshold claims; structured stem. */
function buildMathCh2Nested() {
  const context = `Each claim below is an independent elementary-algebra check.

A nested rational, a $2\\times 2$ system, a polynomial evaluation, a rational equation, and a radical equation appear in turn.

Decide whether each statement is true or false. The claims give thresholds, not boxed final values.`;

  const statements = [
    "For $x=3$, the nested quotient $\\dfrac{\\frac{4}{x}-\\frac{1}{x+1}}{\\frac{2}{x+1}+\\frac{1}{x}}$ is strictly larger than $0.55$.",
    "The unique solution of the system $4a-3b=7$, $a+2b=8$ satisfies $a-b<1$.",
    "The value of $\\dfrac{(x^{2}-4)(2x+1)}{x-2}$ at $x=3$ is strictly smaller than $20$.",
    "Over the reals with $x\\ne\\pm 1$, every solution of $\\dfrac{2}{x-1}-\\dfrac{1}{x+1}=\\dfrac{3}{x^{2}-1}$ is strictly larger than $0$.",
    "The positive solution of $\\sqrt{x+5}-\\sqrt{x-3}=1$ is strictly smaller than $6$.",
  ];

  statements[2] = "The value of $\\dfrac{(x^{2}-4)(2x+1)}{x-2}$ at $x=3$ is strictly larger than $30$."

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Substitute $x=3$:

$$
\\text{numerator}=\\dfrac{4}{3}-\\dfrac{1}{4}=\\dfrac{16-3}{12}=\\dfrac{13}{12}
$$

$$
\\text{denominator}=\\dfrac{2}{4}+\\dfrac{1}{3}=\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{5}{6}
$$

$$
\\dfrac{13/12}{5/6}=\\dfrac{13}{12}\\cdot\\dfrac{6}{5}=\\dfrac{13}{10}=1.3>0.55
$$

So the statement is True.`,

    `**B.** → False

From $a+2b=8$, write $a=8-2b$ and substitute into $4a-3b=7$:

$$
4(8-2b)-3b=7\\Rightarrow 32-8b-3b=7\\Rightarrow 32-11b=7\\Rightarrow b=\\dfrac{25}{11}
$$

$$
a=8-\\dfrac{50}{11}=\\dfrac{38}{11},\\qquad a-b=\\dfrac{13}{11}>1
$$

The claim $a-b<1$ fails.

So the statement is False.`,

    `**C.** → True

At $x=3$ the factor $x-2$ cancels the factor of $x^{2}-4=(x-2)(x+2)$ for $x\\ne 2$:

$$
\\dfrac{(x-2)(x+2)(2x+1)}{x-2}=(x+2)(2x+1)
$$

$$
(3+2)(6+1)=5\\cdot 7=35>30
$$

So the statement is True.`,

    `**D.** → False

Combine the left-hand side over $x^{2}-1$:

$$
\\dfrac{2(x+1)-(x-1)}{x^{2}-1}=\\dfrac{x+3}{x^{2}-1}
$$

Equating to $\\dfrac{3}{x^{2}-1}$ (with $x\\ne\\pm 1$) forces $x+3=3$, so $x=0$. That unique solution is not strictly larger than $0$.

So the statement is False.`,

    `**E.** → False

Set $s=\\sqrt{x-3}\\ge 0$. Then $\\sqrt{x+5}=1+s$. Squaring both sides:

$$
x+5=1+2s+(x-3)\\Rightarrow 7=2s\\Rightarrow s=\\dfrac{7}{2}
$$

$$
x-3=\\dfrac{49}{4}\\Rightarrow x=\\dfrac{61}{4}=15.25\\ngtr\\text{claim }{<}\\,6
$$

(The positive root is far above $6$.)

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.NEST",
    id: "MATH 2.MOCK.NEST",
    title: "Nested rationals, systems and radicals — threshold checks",
    chapter: 2,
    subsection: "2.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Evaluate each algebra claim on its own: simplify nested fractions carefully, solve the linear system by substitution, cancel polynomial factors before evaluating, clear rational equations over a common denominator, and isolate then square radical equations while checking the domain.",
  };
}

/** Word / parametric equations — diversified vs Mock 3. */
function buildMathCh4Mixture() {
  const context = `A café blends two coffee beans.

Bean A costs EUR $12$ per kilogram and contains $1.8\\%$ caffeine by mass.
Bean B costs EUR $9$ per kilogram and contains $1.2\\%$ caffeine by mass.

A $20\\,\\mathrm{kg}$ blend must contain exactly $1.5\\%$ caffeine. Let $x$ be the mass (in kg) of bean A in the blend; then bean B contributes $20-x$ kg.

Separately, a linear demand model for cups sold is $q=420-15p$ at price $p$ (euros), and total revenue is $R=pq$.`;

  const statements = [
    "The caffeine condition forces $x>12$.",
    "At the caffeine-correct mix, the ingredient cost of the $20\\,\\mathrm{kg}$ blend is strictly less than EUR $210$.",
    "Revenue $R(p)=p(420-15p)$ is maximised at a price strictly above EUR $15$.",
    "If the café sells at $p=12$, then $q>200$.",
    "The caffeine equation $1.8x+1.2(20-x)=1.5\\cdot 20$ has no solution in $(0,20)$.",
  ];

  // Caffeine: 1.8x + 1.2(20-x) = 30 → 1.8x + 24 - 1.2x = 30 → 0.6x = 6 → x=10
  // A: x>12? 10>12 False
  // B: cost = 12*10 + 9*10 = 120+90=210, not strictly less → False
  // Wait need True somewhere. Change B to "at most EUR 210" or "less than 220"
  // C: R=420p-15p^2, vertex p=420/(30)=14, not >15 → False
  // D: q=420-180=240>200 → True
  // E: has solution x=10 → False

  // Recalibrate A to True: "forces x=10" can't be T/F threshold easily.
  // A: "forces x < 11" → True
  // B: cost = 210, claim "strictly greater than EUR 200" → True
  // C: max at 14, claim >15 → False
  // D: q at 12 is 240>200 → True
  // E: no solution → False
  // Keys: T T F T F

  statements[0] = "The caffeine condition forces a bean-A mass strictly smaller than $11\\,\\mathrm{kg}$.";
  statements[1] =
    "At the caffeine-correct mix, the ingredient cost of the $20\\,\\mathrm{kg}$ blend is strictly greater than EUR $200$.";

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Caffeine balance (percent as decimals, masses in kg):

$$
1.8x+1.2(20-x)=1.5\\cdot 20
$$

$$
1.8x+24-1.2x=30\\Rightarrow 0.6x=6\\Rightarrow x=10
$$

$$
10<11
$$

So the statement is True.`,

    `**B.** → True

With $x=10$ and $20-x=10$:

$$
\\text{Cost}=12\\cdot 10+9\\cdot 10=120+90=210
$$

Write the euro amount in prose: EUR $210>200$.

So the statement is True.`,

    `**C.** → False

$$
R(p)=420p-15p^{2}
$$

This downward parabola peaks at

$$
p=\\dfrac{420}{2\\cdot 15}=\\dfrac{420}{30}=14
$$

$$
14\\ngtr 15
$$

So the statement is False.`,

    `**D.** → True

Substitute the stated price into the demand line:

$$
q=420-15\\cdot 12=420-180=240
$$

$$
240>200
$$

So the statement is True.`,

    `**E.** → False

Letter A already solved the caffeine balance and found the unique root $x=10$. That value lies in the open interval $(0,20)$, so the blend equation is solvable inside the admissible mass range. The claim of “no solution” contradicts that explicit root.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.BLEND",
    id: "MATH 4.MOCK.BLEND",
    title: "Coffee blend caffeine mix and linear revenue",
    chapter: 4,
    subsection: "4.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve the caffeine mass balance for $x$, price the blend with euro amounts kept outside math mode, then read the revenue parabola’s vertex and evaluate the demand line at a stated price.",
  };
}

/** Work-rate pipes — diversified vs Mira/Leo and copper blend. */
function buildMathCh5Pipes() {
  const context = `Two inlet pipes and one drain serve a tank.

Pipe A alone fills the tank in $6$ hours.
Pipe B alone fills the tank in $10$ hours.
The drain alone empties a full tank in $15$ hours.

All rates are constant. One “tank” is the unit of volume.`;

  const statements = [
    "If A and B run together with the drain closed, they fill the tank in strictly less than $4$ hours.",
    "If A runs with the drain open (B closed), the net fill rate is strictly smaller than $\\frac{1}{8}$ tank per hour.",
    "If A, B, and the drain all run together, the tank is full in exactly $5$ hours.",
    "Opening only the drain on a full tank empties more than $40\\%$ of the tank in the first $5$ hours.",
    "Pipe B alone fills more than half the tank in $4$ hours.",
  ];

  // A rate 1/6, B 1/10, drain -1/15
  // A+B = 1/6+1/10=5/30+3/30=8/30=4/15; time=15/4=3.75<4 → True
  // A+drain=1/6-1/15=5/30-2/30=3/30=1/10, claim <1/8: 1/10=0.1, 1/8=0.125, 0.1<0.125 → True
  // A+B+drain=4/15-1/15=3/15=1/5; time=5 hours exactly → True
  // Drain 5h: 5/15=1/3≈33.3%, not >40% → False
  // B in 4h: 4/10=0.4, not >0.5 → False
  // Keys: T T T F F — a bit True-heavy. Change C claim to "strictly less than 5 hours" → False (exactly 5)
  statements[2] =
    "If A, B, and the drain all run together, the tank is full in a time strictly less than $5$ hours.";
  // Keys: T T F F F — still. Change B to False: claim net rate > 1/8 → False
  statements[1] =
    "If A runs with the drain open (B closed), the net fill rate is strictly larger than $\\frac{1}{8}$ tank per hour.";
  // Keys: T F F F F — add another True via E: claim more than 35% → True
  statements[4] =
    "Pipe B alone fills more than $35\\%$ of the tank in $4$ hours.";
  // Keys: T F F F T

  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    `**A.** → True

Combined fill rate with the drain closed:

$$
\\dfrac{1}{6}+\\dfrac{1}{10}=\\dfrac{5}{30}+\\dfrac{3}{30}=\\dfrac{8}{30}=\\dfrac{4}{15}
$$

$$
\\text{Time}=\\dfrac{15}{4}=3.75<4
$$

So the statement is True.`,

    `**B.** → False

Net rate of A with the drain:

$$
\\dfrac{1}{6}-\\dfrac{1}{15}=\\dfrac{5}{30}-\\dfrac{2}{30}=\\dfrac{3}{30}=\\dfrac{1}{10}
$$

$$
\\dfrac{1}{10}=0.1\\ngtr \\dfrac{1}{8}=0.125
$$

So the statement is False.`,

    `**C.** → False

$$
\\dfrac{1}{6}+\\dfrac{1}{10}-\\dfrac{1}{15}=\\dfrac{4}{15}-\\dfrac{1}{15}=\\dfrac{3}{15}=\\dfrac{1}{5}
$$

Time to fill is exactly $5$ hours, which is not strictly less than $5$.

So the statement is False.`,

    `**D.** → False

In $5$ hours the drain removes

$$
\\dfrac{5}{15}=\\dfrac{1}{3}\\approx 33.3\\%\\ngtr 40\\%
$$

So the statement is False.`,

    `**E.** → True

Pipe B’s four-hour volume fraction:

$$
\\dfrac{4}{10}=0.4=40\\%>35\\%
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.PIPES",
    id: "MATH 5.MOCK.PIPES",
    title: "Tank pipes and drain — net rates and fill times",
    chapter: 5,
    subsection: "5.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Convert each pipe into a signed hourly rate, add rates for simultaneous operation, then compare the resulting fill time or volume fraction with the claimed threshold.",
  };
}

/** Inequalities — diversified thresholds. */
function buildMathCh6AbsIneq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $|2x-5|<7$ is exactly the open interval $(-1,6)$.",
    "Every real $x$ satisfying $3x-4\\ge 2x+9$ also satisfies $x>10$.",
    "The system $x\\ge 2$, $x\\le 5$, and $|x-4|\\le 1$ has solution set $[3,5]$.",
    "If a rectangle’s perimeter is at most $36$ and its length is at least $2$ more than its width, then the width cannot exceed $8$.",
    "The inequality $\\dfrac{2x-1}{x+3}\\le 1$ holds for every $x>-3$.",
  ];

  // A: -7<2x-5<7 → -2<2x<12 → -1<x<6 → True
  // B: 3x-4≥2x+9 → x≥13, so every such x satisfies x>10 → True
  // C: |x-4|≤1 → 3≤x≤5, intersect [2,5] → [3,5] → True
  // Too many True. Recalibrate:
  // B: claim also satisfies x>14 → False (x=13 works for first but not >14)
  statements[1] =
    "Every real $x$ satisfying $3x-4\\ge 2x+9$ also satisfies $x>14$.";
  // D: 2(l+w)≤36 → l+w≤18, l≥w+2 → (w+2)+w≤18 → 2w≤16 → w≤8. "cannot exceed 8" means w≤8 → True
  // E: (2x-1)/(x+3)≤1 → (2x-1-x-3)/(x+3)≤0 → (x-4)/(x+3)≤0 → x in (-3,4], not every x>-3 → False
  // Keys: T F T T F

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
|2x-5|<7\\iff -7<2x-5<7\\iff -2<2x<12\\iff -1<x<6
$$

That is exactly the open interval $(-1,6)$.

So the statement is True.`,

    `**B.** → False

$$
3x-4\\ge 2x+9\\Rightarrow x\\ge 13
$$

The number $x=13$ satisfies the hypothesis but fails $x>14$. So not every solution of the first inequality satisfies the second.

So the statement is False.`,

    `**C.** → True

$$
|x-4|\\le 1\\iff 3\\le x\\le 5
$$

Intersecting with $x\\ge 2$ and $x\\le 5$ leaves $[3,5]$.

So the statement is True.`,

    `**D.** → True

Perimeter $\\le 36$ means $2(\\ell+w)\\le 36$, so $\\ell+w\\le 18$. With $\\ell\\ge w+2$:

$$
(w+2)+w\\le 18\\Rightarrow 2w\\le 16\\Rightarrow w\\le 8
$$

The width cannot exceed $8$.

So the statement is True.`,

    `**E.** → False

$$
\\dfrac{2x-1}{x+3}\\le 1\\iff \\dfrac{x-4}{x+3}\\le 0
$$

(for $x\\ne -3$). The critical points split the line into intervals; the inequality holds on $(-3,4]$, not on the whole half-line $x>-3$ (for example $x=5$ fails).

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.ABS",
    id: "MATH 6.MOCK.ABS",
    title: "Absolute values, linear inequalities and a perimeter bound",
    chapter: 6,
    subsection: "6.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Translate absolute-value inequalities into two-sided bounds, solve linear inequalities carefully, intersect constraint sets, and rearrange rational inequalities while tracking excluded poles.",
  };
}

/** Power / radical identities — diversified. */
function buildMathCh8Power() {
  const context = `Decide whether each statement about powers and radicals is true or false.`;

  const statements = [
    "For every positive real $a$, $\\sqrt{a^{3}}\\cdot\\sqrt{a}=a^{2}$.",
    "The equality $(2x^{-1}y^{3})^{2}=4x^{-2}y^{6}$ holds for all $x\\ne 0$ and all real $y$.",
    "Simplifying $\\dfrac{(3^{n+1})(9^{n})}{3^{2n+1}}$ yields $3^{n}$ for every integer $n\\ge 0$.",
    "Every real solution of $x^{2/3}=4$ satisfies $x>10$.",
    "For $x>0$, the expression $\\sqrt[3]{8x^{6}}$ equals $2x^{2}$.",
  ];

  // A: sqrt(a^3)*sqrt(a)=a^{3/2}*a^{1/2}=a^2 → True
  // B: (2 x^{-1} y^3)^2 = 4 x^{-2} y^6 → True
  // C: 3^{n+1} * (3^2)^n / 3^{2n+1} = 3^{n+1} * 3^{2n} / 3^{2n+1} = 3^{3n+1}/3^{2n+1}=3^n → True
  // Too many T. Change C claim to yields 3^{n+1} → False
  statements[2] =
    "Simplifying $\\dfrac{(3^{n+1})(9^{n})}{3^{2n+1}}$ yields $3^{n+1}$ for every integer $n\\ge 0$.";
  // D: x^{2/3}=4 → (|x|^{1/3})^2=4 → |x|^{1/3}=2 → |x|=8 → x=±8, not every >10 → False
  // E: cbrt(8x^6)=2 x^2 for x>0 → True
  // Keys: T T F F T

  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

For every positive $a$, rewrite the radicals as fractional powers and add exponents:

$$
\\sqrt{a^{3}}\\cdot\\sqrt{a}=a^{3/2}\\cdot a^{1/2}=a^{(3/2)+(1/2)}=a^{2}
$$

So the statement is True.`,

    `**B.** → True

Distribute the outer square across the product, remembering $(x^{-1})^{2}=x^{-2}$:

$$
(2x^{-1}y^{3})^{2}=2^{2}\\,(x^{-1})^{2}\\,(y^{3})^{2}=4x^{-2}y^{6}
$$

whenever $x\\ne 0$.

So the statement is True.`,

    `**C.** → False

Rewrite $9=3^{2}$:

$$
\\dfrac{3^{n+1}\\cdot (3^{2})^{n}}{3^{2n+1}}=\\dfrac{3^{n+1}\\cdot 3^{2n}}{3^{2n+1}}=\\dfrac{3^{3n+1}}{3^{2n+1}}=3^{n}
$$

The simplified form is $3^{n}$, not $3^{n+1}$.

So the statement is False.`,

    `**D.** → False

$$
x^{2/3}=4\\Rightarrow |x|^{2/3}=4\\Rightarrow |x|^{1/3}=2\\Rightarrow |x|=8
$$

The real solutions are $x=\\pm 8$. Neither exceeds $10$, so the claim fails.

So the statement is False.`,

    `**E.** → True

For $x>0$ the cube root factors cleanly:

$$
\\sqrt[3]{8x^{6}}=\\sqrt[3]{8}\\cdot\\sqrt[3]{(x^{2})^{3}}=2\\cdot x^{2}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POW3",
    id: "MATH 8.MOCK.POW3",
    title: "Powers, radicals and exponential simplification",
    chapter: 8,
    subsection: "8.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Use exponent laws carefully (including negative exponents), rewrite bases as powers of $3$, and remember that even-numerator rational powers involve absolute values when solving.",
  };
}

/** Polynomial / cubic — diversified. */
function buildMathCh9Cubic() {
  const context = `Let $f(x)=x^{3}-3x^{2}-x+3$. Decide whether each statement is true or false.`;

  const statements = [
    "$f$ has a root at $x=1$.",
    "After dividing by $(x-1)$, the quadratic factor is $x^{2}-2x-3$.",
    "The complete real factorisation of $f$ is $(x-1)(x+1)(x-3)$.",
    "$f(0)>0$.",
    "The sum of all real roots of $f$, counted without multiplicity tricks beyond distinct roots, is strictly greater than $4$.",
  ];

  // f(1)=1-3-1+3=0 → True
  // synthetic: 1 | 1 -3 -1 3 → 1 -2 -3 | 0 → x^2-2x-3 → True
  // (x-1)(x-3)(x+1)= (x-1)(x^2-2x-3)=x^3-2x^2-3x -x^2+2x+3=x^3-3x^2-x+3 → True
  // f(0)=3>0 → True
  // roots 1,-1,3 sum=3, not >4 → False
  // Too many T. Change D: f(0)<0 → False
  statements[3] = "$f(0)<0$.";
  // Change B claim wrong quadratic → False? Keep one more False
  statements[1] =
    "After dividing by $(x-1)$, the quadratic factor is $x^{2}-2x+3$.";
  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Evaluate the cubic at the candidate integer:

$$
f(1)=1^{3}-3\\cdot 1^{2}-1+3=1-3-1+3=0
$$

A zero value means $x=1$ is a root, so the claim holds.

So the statement is True.`,

    `**B.** → False

Synthetic division by $x-1$ brings down the coefficients $1,-3,-1,3$.
The running sums are $1$, then $-2$, then $-3$, with remainder $0$.
Hence the quadratic factor is $x^{2}-2x-3$, not $x^{2}-2x+3$.

So the statement is False.`,

    `**C.** → True

Factor the correct quadratic from letter B:

$$
x^{2}-2x-3=(x-3)(x+1)
$$

Combining with the linear factor already used gives the complete real factorisation

$$
f(x)=(x-1)(x-3)(x+1)
$$

So the statement is True.`,

    `**D.** → False

$$
f(0)=3
$$

A positive value cannot satisfy $f(0)<0$. The claim is therefore false.

So the statement is False.`,

    `**E.** → False

From the factorisation the distinct real roots are $-1$, $1$, and $3$. Their sum is

$$
-1+1+3=3
$$

which is not strictly greater than $4$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FACTOR",
    id: "MATH 9.MOCK.FACTOR",
    title: "Cubic factorisation and root checks",
    chapter: 9,
    subsection: "9.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Test an obvious integer root, divide to obtain the quadratic factor, factor that quadratic, then adjudicate sign and root-sum claims from the complete factorisation.",
  };
}

/** Exponential / log growth — diversified vs Mock 3 decay. */
function buildMathCh10Growth() {
  const context = `A bacterial culture follows $N(t)=N_{0}\\,e^{kt}$ with $N$ measured in thousands of cells and $t$ in hours.

At $t=0$ the culture has $N_{0}=4$ (that is, $4{,}000$ cells).
After $3$ hours the culture has $8$ thousand cells.

A separate savings balance is modelled by $A(t)=1200\\,(1.04)^{t}$ euros after $t$ years (euro amounts belong in prose, not inside math mode when stating currency).`;

  const statements = [
    "The continuous growth rate satisfies $k=\\dfrac{\\ln 2}{3}$.",
    "At $t=6$ hours the culture has strictly more than $20$ thousand cells.",
    "The doubling time of the culture is strictly less than $2.5$ hours.",
    "The savings balance after $5$ years exceeds EUR $1{,}450$.",
    "Solving $(1.04)^{t}=2$ gives a doubling time for the savings model strictly between $17$ and $18$ years.",
  ];

  // k: 8=4 e^{3k} → 2=e^{3k} → 3k=ln2 → k=ln2/3 → True
  // N(6)=4 e^{6*(ln2)/3}=4 e^{2ln2}=4*4=16, not >20 → False
  // doubling: e^{k T}=2 → kT=ln2 → T=3 hours, not <2.5 → False
  // A(5)=1200*(1.04)^5=1200*1.2166529≈1459.98 >1450 → True
  // t=ln2/ln1.04≈17.67, between 17 and 18 → True
  // Keys: T F F T T

  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
8=4e^{3k}\\Rightarrow 2=e^{3k}\\Rightarrow 3k=\\ln 2\\Rightarrow k=\\dfrac{\\ln 2}{3}
$$

So the statement is True.`,

    `**B.** → False

$$
N(6)=4e^{6\\cdot(\\ln 2)/3}=4e^{2\\ln 2}=4\\cdot 4=16
$$

$$
16\\ngtr 20
$$

So the statement is False.`,

    `**C.** → False

Doubling means $e^{kT}=2$, so $kT=\\ln 2$. With $k=(\\ln 2)/3$ one gets $T=3$ hours, which is not strictly less than $2.5$.

So the statement is False.`,

    `**D.** → True

$$
A(5)=1200\\cdot(1.04)^{5}=1200\\cdot 1.2166529\\approx 1459.98
$$

That is more than EUR $1{,}450$.

So the statement is True.`,

    `**E.** → True

$$
t=\\dfrac{\\ln 2}{\\ln 1.04}\\approx\\dfrac{0.693147}{0.039221}\\approx 17.67
$$

which lies strictly between $17$ and $18$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.GROW",
    id: "MATH 10.MOCK.GROW",
    title: "Exponential culture growth and compound savings",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Fit $k$ from the three-hour doubling of the culture, evaluate $N(t)$ with that $k$, then handle the discrete compound-growth savings model with logarithms — keeping EUR labels outside KaTeX.",
  };
}

/** Differentiation — log derivative style, diversified vs Mock 3. */
function buildMathCh11Deriv() {
  const context = `Let

$$
f(x)=\\dfrac{(2x+1)^{3}}{e^{x}}\\qquad(x\\in\\mathbb{R}).
$$

Decide whether each statement is true or false. Claims use thresholds; they do not hand you a fully simplified finished formula for $f'$.`;

  const statements = [
    "Using logarithmic differentiation, $\\dfrac{f'(x)}{f(x)}=\\dfrac{6}{2x+1}-1$ for every $x\\ne -\\tfrac{1}{2}$.",
    "The only critical point of $f$ in $(-\\tfrac{1}{2},\\infty)$ occurs at $x=\\tfrac{5}{2}$.",
    "$f$ is strictly decreasing on the interval $(3,5)$.",
    "$f(0)$ is strictly larger than $0.9$.",
    "At the critical point in $(-\\tfrac{1}{2},\\infty)$, the second-derivative sign pattern of a local maximum occurs.",
  ];

  // ln|f| = 3ln|2x+1| - x
  // f'/f = 3*(2)/(2x+1) - 1 = 6/(2x+1) - 1 → True
  // f'=0 when 6/(2x+1)=1 → 2x+1=6 → x=2.5=5/2 → True
  // For x>5/2, 6/(2x+1)<1 so f'/f<0 and f>0 on (-1/2,∞)? 
  statements[2] = "$f$ is strictly increasing on the interval $(3,5)$.";
  statements[3] = "$f(0)$ is strictly larger than $1.1$.";
  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

Take $\\ln|f|=3\\ln|2x+1|-x$ (for $x\\ne -1/2$). Differentiate:

$$
\\dfrac{f'}{f}=3\\cdot\\dfrac{2}{2x+1}-1=\\dfrac{6}{2x+1}-1
$$

So the statement is True.`,

    `**B.** → True

Critical points with $f\\ne 0$ solve $f'/f=0$:

$$
\\dfrac{6}{2x+1}-1=0\\Rightarrow \\dfrac{6}{2x+1}=1\\Rightarrow 2x+1=6\\Rightarrow x=\\dfrac{5}{2}
$$

On $(-1/2,\\infty)$ that is the only solution.

So the statement is True.`,

    `**C.** → False

For $x>5/2$ one has $\\dfrac{6}{2x+1}<1$, so $f'/f<0$. Since $f>0$ on $(-1/2,\\infty)$, one gets $f'<0$ on $(3,5)$. The function is strictly decreasing there, not increasing.

So the statement is False.`,

    `**D.** → False

Plug in $x=0$:

$$
f(0)=\\dfrac{(0+1)^{3}}{e^{0}}=\\dfrac{1}{1}=1
$$

$$
1\\ngtr 1.1
$$

So the statement is False.`,

    `**E.** → True

On $(-1/2,5/2)$ one has $\\dfrac{6}{2x+1}>1$, so $f'>0$; on $(5/2,\\infty)$ one has $f'<0$. Crossing the critical point, the first-derivative sign therefore changes from positive to negative — the standard local-maximum pattern.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.QUORULE",
    id: "MATH 11.MOCK.QUORULE",
    title: "Logarithmic differentiation of a quotient-exponential",
    chapter: 11,
    subsection: "11.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate via $\\ln|f|$, locate the unique critical point from $f'/f=0$, then read monotonicity from the sign of $f'/f$ on either side — without pasting a fully expanded $f'$ into the claim text.",
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
  const sub = texts.subsections.find((s: { id: string }) => s.id === "t.12");
  if (!sub?.passage) throw new Error("Doomsday Glacier passage t.12 missing");

  const order: Array<{ id: string; kind: string; withPassage: boolean; src: "texts" | "grammar" }> = [
    { id: "ENG T.12.01", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.02", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.03", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.04", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.05", kind: "text", withPassage: true, src: "texts" },
    { id: "ENG T.12.08", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.12.09", kind: "vocabulary", withPassage: true, src: "texts" },
    { id: "ENG T.12.06", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.12.07", kind: "grammar", withPassage: false, src: "texts" },
    { id: "ENG T.12.10", kind: "vocabulary", withPassage: false, src: "texts" },
    { id: "ENG G.12.19", kind: "grammar", withPassage: false, src: "grammar" },
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
    if (o.id === "ENG T.12.10") {
      const quoted = String(t.context || "").match(/[""]([^""]+)[""]/);
      const sentence =
        quoted?.[1] ||
        String(
          t.source_sentence ||
            t.prompt_sentence ||
            t.lead_sentence ||
            "Thwaites holds enough ice to raise global sea levels by more than half a metre if it collapsed entirely.",
        );
      context = `Consider this sentence from the passage: "${sentence}" Decide whether each paraphrase preserves its meaning.`;
    }
    if (o.id === "ENG T.12.08" || o.id === "ENG T.12.09") {
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
  mapEcon(byId(2, "CASE 2.3.13")),
  mapEcon(byId(2, "CASE 2.5.10")),
  mapEcon(byId(3, "CASE 3.4.07")),
  mapEcon(byId(3, "CASE 3.5.12")),
  mapEcon(byId(4, "CASE 4.3.68")),
  mapEcon(byId(4, "CASE 4.6.03")),
  mapEcon(byId(5, "CASE 5.7.80")),
  mapEcon(byId(6, "CASE 6.1.007")),
  mapEcon(byId(6, "CASE 6.3.011")),
  buildWorkingCapitalRoceCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  const chapterBank = allMath.find((c) => c.num === chapter);
  if (!chapterBank) throw new Error(`Missing math chapter ${chapter}`);
  const t = chapterBank.tasks.find((x) => x.case_id === caseId);
  if (!t) throw new Error(`Missing math ${caseId} in chapter ${chapter}`);
  const mapped = mapMath(chapter, t as unknown as Record<string, unknown>);
  // Avoid \$… mixed with $…$ which breaks KaTeX inline parsing.
  if (caseId === "MATH 11.112") {
    const fix = (s: string) => s.replace(/\\\$/g, "USD ");
    mapped.context = `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules.

Schedule I: pay USD 850,000 in cash immediately.

Schedule II: pay USD 140,000 per year for 9 years, with the first instalment paid immediately.

Schedule III: pay USD 300,000 in cash immediately, plus USD 80,000 per year for 11 years, with the first of these instalments paid one year later.

The hospital wants to know which schedule is cheapest in present-value terms at an annual discount rate of 8%.`;
    mapped.statements = (mapped.statements as string[]).map(fix);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(fix);
    if (mapped.solution_overview) mapped.solution_overview = fix(String(mapped.solution_overview));
  }
  if (caseId === "MATH 12.36") {
    mapped.context = `Four married couples (eight distinct people) book a shared transfer from the valley station to a ski chalet. The shuttle is a single van with eight seats in one row behind the driver.

The driver asks everyone to board in random order and sit wherever they like, which — for modelling purposes — means that the eight people are assigned to the eight seats uniformly at random.

Couples prefer to sit side by side, but no seating constraints are enforced.`;
  }
  if (caseId === "MATH 13.55") {
    mapped.context = `An air traffic control simulator runs 32 scenarios per certification attempt.

Controller A is a trainee (probability $0.44$ of correctly resolving a scenario).
Controller B is a certified controller (probability $0.92$).

To pass certification, a controller must correctly resolve at least $27$ of the $32$ scenarios.

(Scoring scheme used in one claim: $+5$ points for each correct call, $-2$ points for each miss.)`;
  }
  return mapped;
}

const math = [
  buildMathCh1Committee(),
  buildMathCh2Nested(),
  takeMath("MATH 11.112", 3),
  buildMathCh4Mixture(),
  buildMathCh5Pipes(),
  buildMathCh6AbsIneq(),
  takeMath("MATH 7.E30", 7),
  buildMathCh8Power(),
  buildMathCh9Cubic(),
  buildMathCh10Growth(),
  buildMathCh11Deriv(),
  takeMath("MATH 12.36", 12),
  takeMath("MATH 13.55", 13),
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
