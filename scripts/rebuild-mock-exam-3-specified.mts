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
22.80\\nless 22.50
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
40\\%\\ngtr  45\\%
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
/** Hard multi-topic equation word problems (M1 4.215 / M2 4.165 style). */
function buildMathCh4Diversified() {
  const context = `Each letter is an independent equation word problem from a different family.

Ages, a framed print, a two-leg trip, a logarithmic equation, and a coin till appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "A courier is $27$ years older than a trainee. In $6$ years the courier will be twice as old as the trainee will be then. A planner concludes that the trainee is now $15$ years old.",
    "A $30\\ \\mathrm{cm}$ by $18\\ \\mathrm{cm}$ print is mounted with a uniform frame so that the framed outer area is three times the print area. The frame width is then strictly less than $6\\ \\mathrm{cm}$.",
    "A driver covers $12\\ \\mathrm{km}$ at $8\\ \\mathrm{km/h}$ and then $8\\ \\mathrm{km}$ at $12\\ \\mathrm{km/h}$. The whole trip therefore takes strictly less than $2.5$ hours.",
    "Over $x>1$, the equation $\\log(x-1)+\\log(x+3)=\\log(2x+14)$ has a solution strictly smaller than $5$.",
    "A till holds only $2$-euro and $5$-euro coins. There are $19$ coins worth $62$ euros in total. Then there are strictly more than eight coins of $5$ euros.",
  ];

  // A: true age 21, claim 15 → False
  // B: (30+2w)(18+2w)=3*30*18=1620; 540+60w+36w+4w^2=1620; 4w^2+96w-1080=0; w^2+24w-270=0; w=-12±√(144+270)=-12±√414; positive ≈ -12+20.35=8.35 > 6, so "less than 6" False
  // C: t=12/8+8/12=1.5+2/3=2.166... < 2.5 True
  // D: (x-1)(x+3)=2x+14 → x^2+2x-3=2x+14 → x^2=17 → x=√17≈4.123 <5 (x>-3 and x>1) True
  // E: 2a+5b=62, a+b=19 → a=19-b; 38-2b+5b=62 → 3b=24 → b=8, not >8 → False

  const answer_key = [false, false, true, true, false];

  const tactical_explanations = [
    `**A.** → False

Let $t$ be the trainee’s present age. Then

$$
t+27+6=2(t+6)\\qquad\\Rightarrow\\qquad t+33=2t+12\\qquad\\Rightarrow\\qquad t=21
$$

The planner’s figure $15$ is wrong.

So the statement is False.`,

    `**B.** → False

Outer dimensions $(30+2w)$ by $(18+2w)$ give

$$
(30+2w)(18+2w)=3\\cdot 30\\cdot 18=1620
$$

$$
w^{2}+24w-270=0\\qquad\\Rightarrow\\qquad w=-12+\\sqrt{414}\\approx 8.35\\ngtr?\\quad\\text{not }<6
$$

So the statement is False.`,

    `**C.** → True

$$
\\dfrac{12}{8}+\\dfrac{8}{12}=1.5+\\dfrac{2}{3}=\\dfrac{13}{6}\\approx 2.167<2.5
$$

So the statement is True.`,

    `**D.** → True

Domain $x>1$. Then

$$
(x-1)(x+3)=2x+14\\qquad\\Rightarrow\\qquad x^{2}=17\\qquad\\Rightarrow\\qquad x=\\sqrt{17}\\approx 4.123<5
$$

So the statement is True.`,

    `**E.** → False

With $a$ coins of $2$ euros and $b$ of $5$ euros,

$$
a+b=19,\\qquad 2a+5b=62\\qquad\\Rightarrow\\qquad b=8
$$

Eight is not strictly more than eight.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.EQ",
    id: "MATH 4.MOCK.EQ",
    title: "Hard equation word problems — ages, frame, motion, log, coins",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Set up and solve five independent equation stories (linear ages, quadratic frame, motion times, log product, coin system), then accept or reject the claimed conclusion.",
  };
}


/** Diversified harder inequalities — not five copies of one rational sign chart. */
function buildMathCh6Diversified() {
  const context = `Each letter is an independent inequality check from a different family.

Quadratic, rational, absolute-value, a linear system, and a feasible-region point appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "The solution set of $x^{2}-4x-5\\ge 0$ contains the number $0$.",
    "The solution set of $\\dfrac{x-2}{x+3}\\le 0$ is exactly $(-3,2]$.",
    "The solution set of $|x-1|+|x+2|>5$ is $(-\\infty,-3]\\cup[2,\\infty)$.",
    "The system $3x+2>2x+7$ and $\\dfrac{x}{2}\\le 5$ has exactly five integer solutions.",
    "The point $(3,1)$ lies in the feasible region of $x+y\\ge 4$, $x-y\\le 2$, $x\\ge 0$, $y\\ge 0$.",
  ];

  // A: (x-5)(x+1)>=0 → (-∞,-1]U[5,∞); 0 not in → False
  // B: critical -3,2; sign ≤0 on (-3,2] → True
  // C: actual (-∞,-3)U(2,∞) strict, not closed → False
  // D: x>5 and x<=10 → (5,10]; integers 6,7,8,9,10 = five → True
  // E: 3+1=4, 3-1=2, both ok → True

  const answer_key = [false, true, false, true, true];

  const tactical_explanations = [
    `**A.** → False

$$
x^{2}-4x-5\\ge 0
$$

$$
(x-5)(x+1)\\ge 0
$$

A sign chart gives

$$
x\\in(-\\infty,-1]\\cup[5,\\infty)
$$

The number $0$ lies strictly between $-1$ and $5$, so it is not a solution.

So the statement is False.`,

    `**B.** → True

Critical points: numerator zero $x=2$ and pole $x=-3$ (excluded). On the three intervals determined by $-3$ and $2$, the quotient is negative or zero precisely on $(-3,2]$, and equals zero at $x=2$.

$$
\\dfrac{x-2}{x+3}\\le 0 \\quad\\Longleftrightarrow\\quad x\\in(-3,2]
$$

So the statement is True.`,

    `**C.** → False

Piecewise:

- If $x\\ge 1$: $(x-1)+(x+2)=2x+1>5\\Rightarrow x>2$.
- If $-2\\le x\\le 1$: $(1-x)+(x+2)=3>5$ never.
- If $x<-2$: $(1-x)+(-x-2)=-2x-1>5\\Rightarrow x<-3$.

Hence

$$
|x-1|+|x+2|>5 \\quad\\Longleftrightarrow\\quad x\\in(-\\infty,-3)\\cup(2,\\infty)
$$

The claimed set uses closed ends at $-3$ and $2$, which fail the strict inequality.

So the statement is False.`,

    `**D.** → True

$$
3x+2>2x+7\\quad\\Rightarrow\\quad x>5
$$

$$
\\dfrac{x}{2}\\le 5\\quad\\Rightarrow\\quad x\\le 10
$$

So $x\\in(5,10]$. The integers in that interval are $6,7,8,9,10$ — exactly five.

So the statement is True.`,

    `**E.** → True

Check $(3,1)$:

$$
3+1=4\\ge 4,\\qquad 3-1=2\\le 2,\\qquad 3\\ge 0,\\qquad 1\\ge 0
$$

Every constraint holds, so the point is feasible.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.MIXINEQ",
    id: "MATH 6.MOCK.MIXINEQ",
    title: "Mixed hard inequalities — quadratic, rational, absolute, compound, feasible region",
    chapter: 6,
    subsection: "6.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Do not reuse one sign chart five times: factor a quadratic, read a rational chart with a pole, expand a two-absolute expression by pieces, intersect a linear compound, then test a point in a linear region.",
  };
}

/** Hard mixture + break-even — euros kept outside KaTeX math. */
function buildMathCh5Mixture() {
  const context = `A foundry blends pure copper ($100\\%$ Cu) with scrap that is $40\\%$ copper by mass.

It must produce exactly $120\\ \\mathrm{kg}$ of an alloy that is $70\\%$ copper.

Pure copper costs EUR $9$ per kilogram and scrap costs EUR $4$ per kilogram.

The finished alloy is sold at EUR $8.50$ per kilogram.

Separately, a workshop product has fixed costs EUR $3600$, variable cost EUR $5$ per unit, and selling price EUR $11$ per unit.`;

  const statements = [
    "In the cheapest blend that meets the mass and copper-content targets, more than $55\\ \\mathrm{kg}$ of scrap must be used.",
    "The total material cost of that $120\\ \\mathrm{kg}$ blend is less than EUR 750.",
    "If the entire $120\\ \\mathrm{kg}$ blend is sold at the stated price, the profit on materials alone exceeds EUR 220.",
    "The workshop product’s break-even output is fewer than $550$ units.",
    "If fixed costs rise by $20\\%$ and the contribution margin per unit is unchanged, break-even output rises by exactly $20\\%$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Mass and copper balance yield scrap mass $y=60>55$.

So the statement is True.`,

    `**B.** → False

Material cost is $60\\cdot 9+60\\cdot 4=780$, which is not less than $750$.

So the statement is False.`,

    `**C.** → True

Revenue $120\\cdot 8.50=1020$ and cost $780$ give profit $240>220$.

So the statement is True.`,

    `**D.** → False

Break-even is $3600/(11-5)=600$, which is not fewer than $550$.

So the statement is False.`,

    `**E.** → True

With a fixed contribution margin, break-even scales exactly with fixed cost, so a $20\\%$ rise in fixed cost raises break-even by exactly $20\\%$.

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
      "Solve the copper blend, price materials using euro amounts written outside math mode, then compare break-even before and after a proportional fixed-cost shock.",
  };
}


/** Real-case logic — structured paragraphs + truth-table solution (M2 style). */
function buildMathCh1Independent() {
  const truthTable = `**Truth table of valid rosters.**

Write $A,B,C,D,E,F$ for Ava, Ben, Cara, Drew, Eve, Finn. Encode each rule, then list every $0/1$ assignment that survives all seven constraints. Size is $A+B+C+D+E+F$.

How the table is built:

1. Start from candidate bits and apply $A\\Leftrightarrow B$ (Ava and Ben must match).
2. Enforce $B\\Rightarrow C$ and the exclusive-or on $(C,D)$.
3. Enforce $D\\Rightarrow\\neg E$, $E\\lor F$, and $F\\Rightarrow\\neg A$.
4. Drop any row whose size is strictly less than $3$.
5. Keep only the surviving rows — those are the valid rosters.

| $A$ | $B$ | $C$ | $D$ | $E$ | $F$ | Size | Valid? |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| 1 | 1 | 1 | 0 | 1 | 0 | 4 | yes |
| 0 | 0 | 1 | 0 | 1 | 1 | 3 | yes |
| 1 | 1 | 1 | 0 | 1 | 1 | — | no ($F\\Rightarrow\\neg A$ fails) |
| 1 | 1 | 1 | 1 | * | * | — | no (exclusive-or on $C,D$ fails) |
| 0 | 0 | 0 | 1 | 0 | 1 | 2 | no (size $<3$) |
| 0 | 0 | 1 | 0 | 0 | 1 | 2 | no (size $<3$) |
| 0 | 0 | 1 | 0 | 1 | 0 | 2 | no (size $<3$) |

Exactly two valid rosters appear: $\\{A,B,C,E\\}$ and $\\{C,E,F\\}$. Drew never appears; a full six-person roster never appears.`;

  const context = `Six interns — Ava, Ben, Cara, Drew, Eve, and Finn — are considered for a weekend on-call roster.

Ava is rostered if and only if Ben is rostered.

If Ben is rostered, then Cara is rostered.

Exactly one of Cara or Drew is rostered (never both, never neither).

If Drew is rostered, then Eve is not rostered.

At least one of Eve or Finn is rostered.

Finn is rostered only if Ava is not rostered.

At least three of the six interns are rostered.`;

  const statements = [
    "Ben must appear on every roster that obeys all seven rules.",
    "It is possible to build a valid roster that includes Drew.",
    "If Ava is rostered, then Finn cannot be rostered.",
    "There is exactly one roster of size three that obeys all seven rules.",
    "It is possible for all six interns to be rostered at once.",
  ];

  const answer_key = [false, false, true, true, false];

  const tactical_explanations = [
    `**A.** → False

The truth table contains a valid row with $B=0$, namely $\\{C,E,F\\}$. Ben is therefore not forced onto every valid roster.

So the statement is False.

${truthTable}`,

    `**B.** → False

No valid row has $D=1$. Drew forces $C=0$ and $E=0$, so $F=1$, but then size stays below $3$. Drew never appears in a valid roster.

So the statement is False.

${truthTable}`,

    `**C.** → True

The rule “Finn only if Ava is not rostered” is $F\\Rightarrow\\neg A$. Contrapositively, $A\\Rightarrow\\neg F$. Every valid row with $A=1$ has $F=0$.

So the statement is True.

${truthTable}`,

    `**D.** → True

The only size-three valid row is $\\{C,E,F\\}$. The Ben-based roster $\\{A,B,C,E\\}$ already has size $4$.

So the statement is True.

${truthTable}`,

    `**E.** → False

A six-person roster would require $C=D=1$, which breaks the exclusive-or. The truth table’s largest valid size is $4$.

So the statement is False.

${truthTable}`,
  ];

  return {
    case_id: "MATH 1.MOCK.INDEP",
    id: "MATH 1.MOCK.INDEP",
    title: "Weekend on-call roster — six interns and seven rules",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Part 1: Setup.**

Write $A,B,C,D,E,F$ for Ava, Ben, Cara, Drew, Eve, Finn. The stem is

$$
(1)\\ A\\Leftrightarrow B,\\qquad (2)\\ B\\Rightarrow C,\\qquad (3)\\ (C\\land\\neg D)\\lor(\\neg C\\land D),
$$

$$
(4)\\ D\\Rightarrow\\neg E,\\qquad (5)\\ E\\lor F,\\qquad (6)\\ F\\Rightarrow\\neg A,
$$

and (7) size at least three.

"$P$ only if $Q$" is $P\\Rightarrow Q$.

**Part 2: Building the truth table.**

Apply the biconditional and exclusive-or first, then the implications, then the size filter. Only two rows survive: $\\{A,B,C,E\\}$ and $\\{C,E,F\\}$.

${truthTable}`,
  };
}



/** Multi-step algebra — threshold claims; structured stem. */
function buildMathCh2HardCalc() {
  const context = `Each claim below is an independent elementary-algebra check.

Nested fractions, a $2\\times 2$ linear system, a polynomial product, a rational equation, and a radical equation appear in turn.

Decide whether each statement is true or false. The claims give thresholds, not boxed final values.`;

  const statements = [
    "For $x=2$, the nested quotient $\\dfrac{\\frac{3}{x}-\\frac{2}{x+1}}{\\frac{5}{x+1}-\\frac{1}{x}}$ is strictly smaller than $0.8$.",
    "The unique solution of the system $3u-2v=11$, $2u+5v=3$ satisfies $u+v>3$.",
    "At $x=2$, the product $(2x^{3}-5x+1)(3x-4)$ is strictly larger than $12$.",
    "Over the reals with $x\\ne\\pm 2$, every solution of $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}=\\dfrac{5}{x^{2}-4}$ is strictly smaller than $2$.",
    "The positive solution of $\\sqrt{x+7}-\\sqrt{x-1}=2$ is strictly larger than $3$.",
  ];

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

At $x=2$ the nested quotient equals $5/7\\approx 0.714$, which is strictly smaller than $0.8$.

So the statement is True.`,

    `**B.** → False

Eliminating $v$ yields $u=61/19$ and $v=-13/19$, so $u+v=48/19\\approx 2.53\\ngtr 3$.

So the statement is False.`,

    `**C.** → True

$$
(16-10+1)(6-4)=14>12
$$

So the statement is True.`,

    `**D.** → False

Clearing the common denominator $x^{2}-4$ gives $2x=5$, hence $x=5/2$. That unique admissible root is not smaller than $2$.

So the statement is False.`,

    `**E.** → False

Isolating and squaring produces $x=2$, which fails the claim “larger than $3$”.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.CALC",
    id: "MATH 2.MOCK.CALC",
    title: "Multi-step elementary algebra with threshold claims",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Compute each nested/system/radical value fully, then accept or reject a threshold — the statements never reveal the finished number.",
  };
}



/** Numeric parabola — threshold claims, no spoon-fed vertex coords. */
function buildMathCh7Numeric() {
  const context = `A parabola is given by

$$
g(x)=2x^{2}-12x+10
$$

Lines through its vertex form the family

$$
f_{m}(x)=m(x-3)-8
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The axis of symmetry of $g$ lies strictly to the right of $x=2$.",
    "At its vertex, $g$ takes a strictly negative value.",
    "When $m=4$, the second intersection (other than the vertex) lies strictly between $x=4$ and $x=6$.",
    "There is more than one real slope $m$ for which $y=f_{m}$ meets $y=g$ at exactly one point.",
    "When $m=-8$, the second intersection has $x$-coordinate strictly less than $-0.5$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Completing the square gives $g(x)=2(x-3)^{2}-8$, so the axis is $x=3>2$.

So the statement is True.`,

    `**B.** → True

The vertex value is $g(3)=-8<0$.

So the statement is True.`,

    `**C.** → True

$g-f_{m}=(x-3)(2(x-3)-m)$, so the second root is $3+m/2$. For $m=4$ that is $5\\in(4,6)$.

So the statement is True.`,

    `**D.** → False

The second root coincides with the vertex only when $m=0$. Exactly one slope gives a single meeting point.

So the statement is False.`,

    `**E.** → True

For $m=-8$ the second root is $3-4=-1<-0.5$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.LINE",
    id: "MATH 7.MOCK.LINE",
    title: "Numeric parabola with slope family — threshold claims",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover the vertex by completing the square, factor $g-f_{m}$, and adjudicate thresholds without reading coordinates off the claim text.",
  };
}


/** Power costs — calibrate unknowns; qualitative/threshold claims. */
function buildMathCh8TwoUnknowns() {
  const context = `Delivery capacity follows the power model

$$
C(v)=A v^{p}\\qquad(v>0)
$$

with unknown $A>0$ and $p>0$.

Calibration runs give $C(3)=24$ and $C(6)=96$.

Each van-hour costs EUR $12$, and each unit of capacity earns EUR $0.80$.

Profit is $\\pi(v)=0.8\\,C(v)-12v$.`;

  const statements = [
    "Doubling van-hours multiplies capacity by more than three.",
    "At five van-hours, capacity already exceeds $65$.",
    "A profit-maximising schedule requires strictly more than three van-hours.",
    "At the interior profit maximum, marginal revenue from an extra van-hour equals the hourly van cost.",
    "Running exactly four van-hours yields a strictly positive profit.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$96/24=4=(6/3)^{p}$ forces $p=2$, so doubling multiplies capacity by $4>3$.

So the statement is True.`,

    `**B.** → True

With $A=8/3$, capacity at $v=5$ is $200/3\\approx 66.67>65$.

So the statement is True.`,

    `**C.** → False

$\\pi(v)=(32/15)v^{2}-12v$ has critical point $v=45/16\\approx 2.81$, which is not greater than $3$.

So the statement is False.`,

    `**D.** → True

An interior maximum requires $\\pi'(v)=0$, i.e. marginal revenue equals the EUR 12 cost.

So the statement is True.`,

    `**E.** → False

$\\pi(4)=512/15-48<0$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POW2",
    id: "MATH 8.MOCK.POW2",
    title: "Power capacity with two unknowns — qualitative profit claims",
    chapter: 8,
    subsection: "8.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $(A,p)$ from calibration, then adjudicate doubling, capacity, and profit claims without naming $p=2$ in the statement text.",
  };
}


/** Heavy-calc cubic — many derivative/evaluation steps. */
function buildMathCh9HardPoly() {
  const context = `A machine's short-run output rate (units per hour) is

$$
p(t)=t^{3}-6t^{2}+5t+12
$$

The shift window is $0\\le t\\le 5$, with $t$ in hours.

Decide whether each statement is true or false.`;

  const statements = [
    "The product of the three real roots of $p(t)=0$ (allowing roots outside the shift window) is strictly negative.",
    "On the open interval between the two critical points, the output rate is strictly decreasing.",
    "At $t=1$, the instantaneous slope $p'(1)$ is strictly less than $-3$.",
    "The larger critical abscissa exceeds $3.4$, and the output rate there is strictly negative.",
    "Over the closed shift $[0,5]$, the highest output rate exceeds $14$.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$p(t)=(t+1)(t-3)(t-4)$, so the product of roots is $-12<0$.

So the statement is True.`,

    `**B.** → True

$p'(t)=3t^{2}-12t+5$ is negative between its two roots, so $p$ decreases there.

So the statement is True.`,

    `**C.** → True

$p'(1)=-4<-3$.

So the statement is True.`,

    `**D.** → True

The larger critical point is $(6+\\sqrt{21})/3\\approx 3.53>3.4$, and between the roots $3$ and $4$ one has $p<0$.

So the statement is True.`,

    `**E.** → False

Endpoints give $p(0)=p(5)=12$. The local maximum is about $13.13$, which does not exceed $14$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.CUBIC",
    id: "MATH 9.MOCK.CUBIC",
    title: "Shift-output cubic — roots, critical values, multi-step checks",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Factor or use Vieta, solve $p'=0$, evaluate slopes and local values, then compare the global maximum on $[0,5]$ with a threshold.",
  };
}


/** Exp/log — numbers kept numeric; short interpret only. */
function buildMathCh10ExpLog() {
  const context = `An isotope sample decays continuously according to

$$
N(t)=N_{0}e^{-\\lambda t}
$$

At $t=0$ the mass is $800\\ \\mathrm{mg}$, and at $t=6$ years it is $450\\ \\mathrm{mg}$.

Separately, a continuously compounded endowment follows

$$
S(t)=5000\\,e^{rt}
$$

It opens at EUR $5000$ and stands at EUR $6500$ after $5$ years.

Decide whether each statement is true or false.`;

  const statements = [
    "The isotope’s continuous decay rate satisfies $\\lambda>0.09$.",
    "The isotope’s half-life is strictly less than $7$ years.",
    "After $12$ years the remaining mass is still above $260\\ \\mathrm{mg}$.",
    "The endowment’s continuous force satisfies $r>0.055$.",
    "The endowment first reaches EUR $9000$ at some time $t>11$ years.",
  ];

  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\lambda=\\dfrac{1}{6}\\ln\\dfrac{800}{450}\\approx 0.0959>0.09
$$

So the statement is True.`,

    `**B.** → False

$$
t_{1/2}=\\dfrac{\\ln 2}{\\lambda}\\approx 7.23\\nless 7
$$

So the statement is False.`,

    `**C.** → False

$$
N(12)=800\\left(\\dfrac{450}{800}\\right)^{2}=253.125\\ngtr 260
$$

So the statement is False.`,

    `**D.** → False

$$
r=\\dfrac{1}{5}\\ln\\dfrac{6500}{5000}\\approx 0.0525\\ngtr 0.055
$$

So the statement is False.`,

    `**E.** → True

$$
5000\\,e^{rt}=9000\\qquad\\Rightarrow\\qquad t=\\dfrac{\\ln 1.8}{r}\\approx 11.20>11
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.DECAY",
    id: "MATH 10.MOCK.DECAY",
    title: "Isotope decay and continuous endowment",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Read $N(0)=800$, $N(6)=450$ into $N(t)=N_0 e^{-\\lambda t}$ and $S(0)=5000$, $S(5)=6500$ into $S(t)=5000 e^{rt}$, then adjudicate the five thresholds.",
  };
}



/** Long log-product derivative — max/min without spoon-feeding f'. */
function buildMathCh11LogDeriv() {
  const context = `For $x>0$ define

$$
f(x)=(x^{2}+4)\\ln(2x+1)\\,e^{-x}
$$

The claims concern critical points and max/min behaviour.

Decide whether each statement is true or false.`;

  const statements = [
    "The function $f$ has a critical point in the open interval $(0.5,1.5)$.",
    "That critical point in $(0.5,1.5)$ is a local minimum of $f$.",
    "The value $f(1)$ is strictly greater than $2$.",
    "Just after $x=2$, the function $f$ is still decreasing.",
    "On the whole half-line $(0,\\infty)$, $f$ is strictly increasing.",
  ];

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Logarithmic differentiation yields

$$
\\dfrac{f'}{f}=\\dfrac{2x}{x^{2}+4}+\\dfrac{2}{(2x+1)\\ln(2x+1)}-1
$$

which is positive at $x=0.5$ and negative at $x=1.5$, so $f'$ has a zero in $(0.5,1.5)$.

So the statement is True.`,

    `**B.** → False

Across that zero, $f'$ changes from $+$ to $-$, so the critical point is a local maximum.

So the statement is False.`,

    `**C.** → True

$f(1)=5\\ln 3/e\\approx 2.021>2$.

So the statement is True.`,

    `**D.** → True

At $x=2$ the logarithmic derivative is negative while $f(2)>0$, so $f'(2)<0$.

So the statement is True.`,

    `**E.** → False

Because $f'$ changes sign from $+$ to $-$ near $x\\approx 1.01$, $f$ is not strictly increasing on all of $(0,\\infty)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 11.MOCK.LOGDER",
    id: "MATH 11.MOCK.LOGDER",
    title: "Long log-product-exponential derivative — max/min without formula spoon-feed",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate via $\\ln f$, classify the critical point, and adjudicate value/monotonicity thresholds without putting the finished $f'$ formula into the claim text.",
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
  const mapped = mapMath(chapter, t as unknown as Record<string, unknown>);
  // Avoid \$… mixed with $…$ which breaks KaTeX inline parsing.
  if (caseId === "MATH 11.123") {
    const fix = (s: string) => s.replace(/\\\$/g, "USD ");
    mapped.context = `A renewable energy cooperative is comparing two designs for a community solar project.

Design A is a two-year project: invest USD 120,000, with net returns of USD 54,000 at the end of Year 1 and USD 88,000 at the end of Year 2.

Design B is a one-year project: invest USD 70,000, with a single net return of USD 81,200 at the end of Year 1.`;
    mapped.statements = (mapped.statements as string[]).map(fix);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(fix);
    if (mapped.solution_overview) mapped.solution_overview = fix(String(mapped.solution_overview));
  }
  if (caseId === "MATH 12.186") {
    mapped.context = `A wildlife tracker suspects one of three animals is active in an area: Coyote (50% prior), Fox (30%), or Bobcat (20%).

Given the species, the probability of a large paw print is 70% for Coyote, 20% for Fox, and 55% for Bobcat.

Independently, the probability that any scat found contains fur is 60% for Coyote, 80% for Fox, and 40% for Bobcat.

At the site, the tracker finds both a large paw print and fur-containing scat (the two clues are independent given the species).`;
  }
  if (caseId === "MATH 13.36") {
    mapped.context = `Factory A inspects batches of 17 units; each unit is defect-free independently with probability 0.43.

Factory B inspects batches of 29 units; each unit is defect-free independently with probability 0.61.

Factory A's batch passes if at least 87% of its units are defect-free.

Factory B's batch passes if at least 79% of its units are defect-free.`;
  }
  return mapped;
}

const math = [
  buildMathCh1Independent(),
  buildMathCh2HardCalc(),
  takeMath("MATH 11.123", 3),
  buildMathCh4Diversified(),
  buildMathCh5Mixture(),
  buildMathCh6Diversified(),
  buildMathCh7Numeric(),
  buildMathCh8TwoUnknowns(),
  buildMathCh9HardPoly(),
  buildMathCh10ExpLog(),
  buildMathCh11LogDeriv(),
  takeMath("MATH 12.186", 12),
  takeMath("MATH 13.36", 13),
];

/** Fix common KaTeX / formatting issues across the assembled bank. */
function scrubKatexDeep(value: unknown): unknown {
  if (typeof value === "string") {
    return value
      .replace(/\\not</g, "\\nless ")
      .replace(/\\not>/g, "\\ngtr ")
      .replace(/\\not\\le/g, "\\nleq ")
      .replace(/\\not\\ge/g, "\\ngeq ")
      // Euro inside math mode breaks KaTeX — pull currency out.
      .replace(/\$€\s*([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
      .replace(/\$€\s*([0-9]+)\{,\}([0-9]+)\$/g, "EUR $1,$2")
      .replace(/\$€([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
      .replace(/€(?=\s*\$)/g, "EUR")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+\n/g, "\n")
      .trim();
  }
  if (Array.isArray(value)) return value.map(scrubKatexDeep);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = scrubKatexDeep(v);
    }
    return out;
  }
  return value;
}

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
