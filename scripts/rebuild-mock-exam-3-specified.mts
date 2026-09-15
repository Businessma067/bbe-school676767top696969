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
/** Diversified harder equations — not five logs on one base. */
function buildMathCh4Diversified() {
  const context = `Decide whether each statement about equations is true or false. The five claims use different equation types.`;

  const statements = [
    "The quadratic $x^{2}-(k+1)x+k=0$ has two distinct positive roots when $k=2$.",
    "The rational equation $\\dfrac{x+5}{x-1}=3$ has a solution smaller than $3$.",
    "The solution set of $|3x-6|<9$ is an open interval whose length exceeds $5$.",
    "The exponential equation $3^{2x}=27^{x-1}$ has a solution smaller than $2$.",
    "Over the reals with $x>1$, the equation $\\log(x-1)+\\log(x+1)=\\log 8$ has a solution smaller than $4$.",
  ];

  // A: k=2 → x^2-3x+2=(x-1)(x-2)=0 → 1,2 distinct positive → True
  // B: x+5=3(x-1)=3x-3 → 8=2x → x=4, not < 3 → False
  // C: |3x-6|<9 → -1<x<5 length 6 > 5 → True
  // D: 3^{2x}=3^{3(x-1)} → 2x=3x-3 → x=3, not < 2 → False
  // E: (x-1)(x+1)=8 → x^2=9 → x=3 (x=-3 invalid) → 3<4 → True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

For $k=2$ the equation is

$$
x^{2}-3x+2=0
$$

$$
(x-1)(x-2)=0
$$

The roots are $x=1$ and $x=2$: two distinct positive numbers.

So the statement is True.`,

    `**B.** → False

$$
\\dfrac{x+5}{x-1}=3\\qquad(x\\ne 1)
$$

$$
x+5=3(x-1)=3x-3
$$

$$
8=2x\\qquad\\Rightarrow\\qquad x=4
$$

$$
4\\nless 3
$$

So the statement is False.`,

    `**C.** → True

$$
|3x-6|<9
$$

$$
-9<3x-6<9
$$

$$
-3<3x<15
$$

$$
-1<x<5
$$

The open interval $(-1,5)$ has length $6$, which exceeds $5$.

So the statement is True.`,

    `**D.** → False

$$
3^{2x}=27^{x-1}=(3^{3})^{x-1}=3^{3x-3}
$$

$$
2x=3x-3\\qquad\\Rightarrow\\qquad x=3
$$

$$
3\\nless 2
$$

So the statement is False.`,

    `**E.** → True

Domain requires $x>1$. Then

$$
\\log\\bigl((x-1)(x+1)\\bigr)=\\log 8
$$

$$
x^{2}-1=8\\qquad\\Rightarrow\\qquad x^{2}=9
$$

$$
x=3
$$

(the root $x=-3$ is outside the domain). Since $3<4$, the claim holds.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.EQ",
    id: "MATH 4.MOCK.EQ",
    title: "Mixed hard equations — quadratic, rational, absolute, exponential, log",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Each letter is a different equation family: factor a parameter quadratic, clear a rational, expand an absolute-value inequality, match exponential bases, then apply log product with domain.",
  };
}

/** Diversified harder inequalities — not five copies of one rational sign chart. */
function buildMathCh6Diversified() {
  const context = `Decide whether each statement about inequalities is true or false. The five claims use different inequality types.`;

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
780\\nless  750
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
600\\nless  550
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

/** Five independent logic claims — not one shared scenario. */
function buildMathCh1Independent() {
  const context = `Decide whether each statement is true or false. The five claims concern different logical principles and do not share a common scenario or a single shared hypothesis.`;

  const statements = [
    "The quantified claim $\\exists x\\,\\forall y\\,P(x,y)$ logically implies $\\forall y\\,\\exists x\\,P(x,y)$.",
    "The negation $\\neg(P\\land Q)$ is logically equivalent to $\\neg P\\land \\neg Q$.",
    "From the premises $P\\to Q$ and $\\neg Q$ one may validly conclude $\\neg P$.",
    "The biconditional $P\\leftrightarrow Q$ is true whenever $P$ and $Q$ have opposite truth values.",
    "The quantified implication $\\forall x\\,(P(x)\\to Q(x))$ is logically equivalent to $\\bigl(\\forall x\\,P(x)\\bigr)\\to\\bigl(\\forall x\\,Q(x)\\bigr)$.",
  ];

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

If a single $x_0$ works for every $y$, then for each fixed $y$ one may choose that same $x_0$. So $\\exists x\\,\\forall y\\,P$ forces $\\forall y\\,\\exists x\\,P$.

So the statement is True.`,

    `**B.** → False

De Morgan’s law says

$$
\\neg(P\\land Q)\\equiv \\neg P\\lor \\neg Q
$$

not $\\neg P\\land \\neg Q$. The claimed equivalence is wrong.

So the statement is False.`,

    `**C.** → True

This is modus tollens: $P\\to Q$ together with $\\neg Q$ yields $\\neg P$.

So the statement is True.`,

    `**D.** → False

$P\\leftrightarrow Q$ is true precisely when $P$ and $Q$ have the same truth value. Opposite values make the biconditional false.

So the statement is False.`,

    `**E.** → False

From $\\forall x\\,(P(x)\\to Q(x))$ and $\\forall x\\,P(x)$ one does get $\\forall x\\,Q(x)$, but the bare implication $\\bigl(\\forall x\\,P\\bigr)\\to\\bigl(\\forall x\\,Q\\bigr)$ can hold for other reasons and is not equivalent to the quantified implication. Counter-models exist where one side holds and the other fails.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 1.MOCK.INDEP",
    id: "MATH 1.MOCK.INDEP",
    title: "Independent logic claims — quantifiers, De Morgan, modus tollens, biconditional",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Treat each letter as a separate logic fact: quantifier order, De Morgan, modus tollens, biconditional truth table, and the gap between $\\forall(P\\to Q)$ and $(\\forall P)\\to(\\forall Q)$.",
  };
}

/** Multi-step elementary algebra — no abbreviated-multiplication shortcuts. */
function buildMathCh2HardCalc() {
  const context = `Decide whether each statement is true or false. Each claim needs a multi-step calculation (nested fractions, a linear system, substitution, a rational equation, or nested radicals) — not a single abbreviated-multiplication identity.`;

  const statements = [
    "For $x=2$, the nested quotient $\\dfrac{\\frac{3}{x}-\\frac{2}{x+1}}{\\frac{5}{x+1}-\\frac{1}{x}}$ equals $\\dfrac{5}{7}$.",
    "The unique solution of the system $3u-2v=11$, $2u+5v=3$ satisfies $u+v>4$.",
    "Substituting $x=2$ into $(2x^{3}-5x+1)(3x-4)$ yields the value $14$.",
    "Over the reals with $x\\ne\\pm 2$, the equation $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}=\\dfrac{5}{x^{2}-4}$ has solution $x=2$.",
    "The equation $\\sqrt{x+7}-\\sqrt{x-1}=2$ has solution $x=2$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

At $x=2$,

$$
\\dfrac{3}{2}-\\dfrac{2}{3}=\\dfrac{5}{6},\\qquad \\dfrac{5}{3}-\\dfrac{1}{2}=\\dfrac{7}{6}
$$

$$
\\dfrac{5/6}{7/6}=\\dfrac{5}{7}
$$

So the statement is True.`,

    `**B.** → False

Eliminate $v$: multiply the first equation by $5$ and the second by $2$,

$$
15u-10v=55,\\qquad 4u+10v=6
$$

$$
19u=61\\qquad\\Rightarrow\\qquad u=\\dfrac{61}{19}
$$

Then $v=-\\dfrac{13}{19}$, so

$$
u+v=\\dfrac{48}{19}\\approx 2.53\\ngtr 4
$$

So the statement is False.`,

    `**C.** → True

$$
\\bigl(2\\cdot 8-5\\cdot 2+1\\bigr)(6-4)=(16-10+1)\\cdot 2=14
$$

So the statement is True.`,

    `**D.** → False

Combine the left-hand side over $x^{2}-4$:

$$
\\dfrac{2x}{x^{2}-4}=\\dfrac{5}{x^{2}-4}\\qquad(x\\ne\\pm 2)
$$

$$
2x=5\\qquad\\Rightarrow\\qquad x=\\dfrac{5}{2}
$$

The claimed root $x=2$ is excluded by the domain and is not the solution.

So the statement is False.`,

    `**E.** → True

Isolate one radical and square:

$$
\\sqrt{x+7}=2+\\sqrt{x-1}
$$

$$
x+7=4+4\\sqrt{x-1}+(x-1)
$$

$$
4=4\\sqrt{x-1}\\qquad\\Rightarrow\\qquad x=2
$$

Checking: $\\sqrt{9}-\\sqrt{1}=2$. The root is valid.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.CALC",
    id: "MATH 2.MOCK.CALC",
    title: "Multi-step elementary algebra without abbreviated-multiplication shortcuts",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Simplify a nested fraction by hand, solve a $2\\times 2$ system, evaluate a product by substitution, clear a rational equation with domain, and isolate-and-square a radical equation.",
  };
}

/** Numeric line–parabola geometry that forces casework on slope. */
function buildMathCh7Numeric() {
  const context = `Consider the parabola $g(x)=2x^{2}-12x+10$ and the family of lines through its vertex with slope $m$:

$$
f_{m}(x)=m(x-3)-8
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The vertex of $g$ is the point $(3,-8)$.",
    "The equation $g(x)=0$ has discriminant $64$, hence two distinct real roots.",
    "When $m=4$, the product of the $x$-coordinates of the intersection points of $y=g$ and $y=f_{m}$ equals $15$.",
    "For every real slope $m$, the graphs of $g$ and $f_{m}$ are tangent at the vertex.",
    "When $m=-8$, the second intersection point (other than the vertex) has a negative $x$-coordinate.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Complete the square:

$$
g(x)=2\\bigl(x^{2}-6x\\bigr)+10=2\\bigl((x-3)^{2}-9\\bigr)+10=2(x-3)^{2}-8
$$

The vertex is $(3,-8)$.

So the statement is True.`,

    `**B.** → True

$$
\\Delta=(-12)^{2}-4\\cdot 2\\cdot 10=144-80=64>0
$$

Two distinct real roots.

So the statement is True.`,

    `**C.** → True

$$
g(x)-f_{m}(x)=(x-3)\\bigl(2(x-3)-m\\bigr)
$$

The intersection $x$-coordinates are $3$ and $3+\\dfrac{m}{2}$. For $m=4$ they are $3$ and $5$, and $3\\cdot 5=15$.

So the statement is True.`,

    `**D.** → False

The second intersection is $x=3+\\dfrac{m}{2}$. It coincides with the vertex if and only if $m=0$. For $m\\ne 0$ the graphs meet twice and are not tangent.

So the statement is False.`,

    `**E.** → True

For $m=-8$,

$$
x=3+\\dfrac{-8}{2}=3-4=-1<0
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.LINE",
    id: "MATH 7.MOCK.LINE",
    title: "Numeric parabola with a slope family through the vertex",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Complete the square for the vertex, read the discriminant, factor $g-f_{m}$ to locate both intersections, and see that tangency at the vertex forces $m=0$.",
  };
}

/** Power model with two unknowns recovered from calibration, then profit calculus. */
function buildMathCh8TwoUnknowns() {
  const context = `A logistics firm models delivery capacity by the power law

$$
C(v)=A v^{p}\\qquad(v>0)
$$

with unknown constants $A>0$ and $p>0$. Calibration runs give $C(3)=24$ and $C(6)=96$. Each van-hour costs $€12$, and each unit of capacity earns $€0.80$ of revenue. Profit is $\\pi(v)=0.8\\,C(v)-12v$.

Decide whether each statement is true or false.`;

  const statements = [
    "The calibration forces the power to be $p=2$.",
    "The calibration forces the prefactor to satisfy $A>3$.",
    "At $v=5$, capacity already exceeds $65$.",
    "Profit is maximised at some van-hour level $v>3$.",
    "At the profit-maximising $v$, marginal revenue from an extra van-hour equals the $€12$ marginal cost.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{C(6)}{C(3)}=\\dfrac{96}{24}=4=\\left(\\dfrac{6}{3}\\right)^{p}=2^{p}
$$

$$
p=2
$$

So the statement is True.`,

    `**B.** → False

With $p=2$,

$$
A\\cdot 3^{2}=24\\qquad\\Rightarrow\\qquad A=\\dfrac{8}{3}\\approx 2.67\\ngtr 3
$$

So the statement is False.`,

    `**C.** → True

$$
C(5)=\\dfrac{8}{3}\\cdot 25=\\dfrac{200}{3}\\approx 66.67>65
$$

So the statement is True.`,

    `**D.** → False

$$
\\pi(v)=0.8\\cdot\\dfrac{8}{3}v^{2}-12v=\\dfrac{32}{15}v^{2}-12v
$$

$$
\\pi'(v)=\\dfrac{64}{15}v-12=0\\qquad\\Rightarrow\\qquad v=\\dfrac{45}{16}=2.8125\\ngtr 3
$$

So the statement is False.`,

    `**E.** → True

An interior profit maximum requires $\\pi'(v)=0$, i.e. marginal revenue equals marginal cost $12$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POW2",
    id: "MATH 8.MOCK.POW2",
    title: "Power capacity with two unknowns, then profit maximisation",
    chapter: 8,
    subsection: "8.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $(A,p)$ from the ratio of two calibrations, evaluate capacity at a third point, then maximise the resulting quadratic profit and read the first-order condition.",
  };
}

/** Hard numeric cubic with critical-point analysis. */
function buildMathCh9HardPoly() {
  const context = `Let

$$
p(x)=x^{3}-6x^{2}+5x+12
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The cubic $p$ has three distinct real roots.",
    "The larger critical point of $p$ is strictly greater than $3$.",
    "The derivative satisfies $p'(1)>0$.",
    "On the interval $[-2,5]$, the absolute maximum value of $p$ is $0$.",
    "Between its two critical points, $p$ is strictly decreasing.",
  ];

  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
p(x)=(x+1)(x-3)(x-4)
$$

The roots $-1$, $3$, and $4$ are three distinct reals.

So the statement is True.`,

    `**B.** → True

$$
p'(x)=3x^{2}-12x+5=0\\qquad\\Rightarrow\\qquad x=\\dfrac{6\\pm\\sqrt{21}}{3}
$$

The larger critical point is $\\dfrac{6+\\sqrt{21}}{3}\\approx 3.53>3$.

So the statement is True.`,

    `**C.** → False

$$
p'(1)=3-12+5=-4\\ngtr 0
$$

So the statement is False.`,

    `**D.** → False

$$
p(0)=12,\\qquad p(5)=12
$$

The absolute maximum on $[-2,5]$ is $12$, not $0$.

So the statement is False.`,

    `**E.** → True

The parabola $p'$ opens upwards, so $p'<0$ strictly between its two roots. Hence $p$ decreases on that interval.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.CUBIC",
    id: "MATH 9.MOCK.CUBIC",
    title: "Hard numeric cubic — roots, critical points, max/min",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Factor the cubic, solve $p'=0$ with the quadratic formula, evaluate signs and endpoint values, and read monotonicity from the sign of $p'$ between critical points.",
  };
}

/** Clean exp/log — decay + continuous compounding (no fragile degree KaTeX). */
function buildMathCh10ExpLog() {
  const context = `A sealed isotope sample decays according to

$$
N(t)=N_{0}e^{-\\lambda t}
$$

with $N(0)=800$ milligrams and $N(6)=450$ milligrams ($t$ in years). Separately, a continuously compounded fund follows

$$
S(t)=5000\\,e^{rt}
$$

with $S(5)=6500$.

Decide whether each statement is true or false.`;

  const statements = [
    "The decay constant satisfies $\\lambda>0.09$.",
    "The half-life of the sample is strictly less than $7$ years.",
    "After $12$ years the remaining mass is strictly less than $260$ milligrams.",
    "The continuous force of interest satisfies $r>0.055$.",
    "The fund first reaches $9000$ at some time $t>11$ years.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{450}{800}=e^{-6\\lambda}\\qquad\\Rightarrow\\qquad \\lambda=\\dfrac{1}{6}\\ln\\dfrac{800}{450}=\\dfrac{1}{6}\\ln\\dfrac{16}{9}\\approx 0.09589>0.09
$$

So the statement is True.`,

    `**B.** → False

$$
t_{1/2}=\\dfrac{\\ln 2}{\\lambda}\\approx\\dfrac{0.693147}{0.09589}\\approx 7.23\\nless 7
$$

So the statement is False.`,

    `**C.** → True

$$
N(12)=800\\left(\\dfrac{450}{800}\\right)^{2}=800\\cdot(0.5625)^{2}=253.125<260
$$

So the statement is True.`,

    `**D.** → False

$$
r=\\dfrac{1}{5}\\ln\\dfrac{6500}{5000}=\\dfrac{1}{5}\\ln 1.3\\approx 0.05247\\ngtr 0.055
$$

So the statement is False.`,

    `**E.** → True

$$
5000\\,e^{rt}=9000\\qquad\\Rightarrow\\qquad t=\\dfrac{\\ln 1.8}{r}\\approx\\dfrac{0.5878}{0.05247}\\approx 11.20>11
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.DECAY",
    id: "MATH 10.MOCK.DECAY",
    title: "Isotope decay chained with continuous compounding",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $\\lambda$ from one decay observation, compute half-life and a doubled-time mass, then recover the continuous force $r$ from the fund and solve for a later target balance.",
  };
}

/** Long logarithmic product derivative with max/min properties. */
function buildMathCh11LogDeriv() {
  const context = `For $x>0$ define

$$
f(x)=(x^{2}+4)\\ln(2x+1)\\,e^{-x}
$$

Decide whether each statement is true or false. The claims concern a long product/logarithmic derivative and max/min behaviour.`;

  const statements = [
    "Logarithmic differentiation yields $\\dfrac{f'(x)}{f(x)}=\\dfrac{2x}{x^{2}+4}+\\dfrac{2}{(2x+1)\\ln(2x+1)}-1$.",
    "The equation $f'(x)=0$ has a root in the open interval $(0.5,1.5)$.",
    "At that critical point in $(0.5,1.5)$, $f$ has a local minimum.",
    "The value $f(1)$ is strictly greater than $2$.",
    "The derivative satisfies $f'(2)<0$, so just after $x=2$ the function is still falling.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Because $f>0$ on $(0,\\infty)$,

$$
\\ln f(x)=\\ln(x^{2}+4)+\\ln\\bigl(\\ln(2x+1)\\bigr)-x
$$

Differentiate term by term:

$$
\\dfrac{f'}{f}=\\dfrac{2x}{x^{2}+4}+\\dfrac{1}{\\ln(2x+1)}\\cdot\\dfrac{2}{2x+1}-1
$$

which is exactly the displayed formula.

So the statement is True.`,

    `**B.** → True

The continuous map $x\\mapsto f'(x)/f(x)$ is positive at $x=0.5$ and negative at $x=1.5$. By the intermediate-value theorem, $f'$ has a zero in $(0.5,1.5)$ (approximately $x\\approx 1.01$).

So the statement is True.`,

    `**C.** → False

Across that root the sign of $f'$ changes from positive to negative, so the critical point is a local maximum, not a local minimum.

So the statement is False.`,

    `**D.** → True

$$
f(1)=(1+4)\\ln 3\\cdot e^{-1}=\\dfrac{5\\ln 3}{e}\\approx\\dfrac{5\\cdot 1.0986}{2.71828}\\approx 2.021>2
$$

So the statement is True.`,

    `**E.** → True

At $x=2$,

$$
\\dfrac{f'(2)}{f(2)}=\\dfrac{4}{8}+\\dfrac{2}{5\\ln 5}-1\\approx 0.5+0.249-1=-0.251<0
$$

Since $f(2)>0$, one has $f'(2)<0$, so $f$ is falling there.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.LOGDER",
    id: "MATH 11.MOCK.LOGDER",
    title: "Long product-logarithm-exponential derivative with max/min claims",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate $f=(x^{2}+4)\\ln(2x+1)e^{-x}$ via $\\ln f$, locate the sign-change of $f'$ in $(0.5,1.5)$, classify it as a local maximum, and evaluate $f(1)$ and $f'(2)$.",
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
    mapped.context = fix(String(mapped.context ?? ""));
    mapped.statements = (mapped.statements as string[]).map(fix);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(fix);
    if (mapped.solution_overview) mapped.solution_overview = fix(String(mapped.solution_overview));
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
