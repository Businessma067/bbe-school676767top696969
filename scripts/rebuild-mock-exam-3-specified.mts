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

Let $t$ be the trainee’s present age in years. Then the courier is now $t+27$.

In $6$ years the trainee will be $t+6$ and the courier will be $t+27+6=t+33$. The claim about their future ages becomes the equation

$$
t+33=2(t+6)
$$

Expand the right-hand side:

$$
t+33=2t+12
$$

Bring the $t$-terms to one side and the constants to the other:

$$
33-12=2t-t\\qquad\\Rightarrow\\qquad 21=t
$$

So the trainee is now $21$ years old, not $15$. The planner’s conclusion is wrong.

So the statement is False.`,

    `**B.** → False

Let $w>0$ be the uniform frame width in centimetres. The outer rectangle measures $(30+2w)$ by $(18+2w)$. Its area is three times the print area $30\\cdot 18=540$:

$$
(30+2w)(18+2w)=3\\cdot 540=1620
$$

Expand the left-hand side carefully:

$$
30\\cdot 18+30\\cdot 2w+2w\\cdot 18+2w\\cdot 2w=540+60w+36w+4w^{2}
$$

$$
4w^{2}+96w+540=1620
$$

Subtract $540$ from both sides:

$$
4w^{2}+96w=1080
$$

Divide by $4$:

$$
w^{2}+24w=270\\qquad\\Rightarrow\\qquad w^{2}+24w-270=0
$$

Discriminant:

$$
\\Delta=24^{2}-4\\cdot 1\\cdot(-270)=576+1080=1656=4\\cdot 414
$$

$$
w=\\dfrac{-24\\pm\\sqrt{1656}}{2}=\\dfrac{-24\\pm 2\\sqrt{414}}{2}=-12\\pm\\sqrt{414}
$$

The positive root is

$$
w=-12+\\sqrt{414}
$$

Since $\\sqrt{400}=20$ and $\\sqrt{441}=21$, one has $\\sqrt{414}\\approx 20.35$, so

$$
w\\approx -12+20.35=8.35
$$

The claim says the width is strictly less than $6\\ \\mathrm{cm}$. But $8.35\\nless 6$.

So the statement is False.`,

    `**C.** → True

Time equals distance divided by speed. First leg:

$$
t_{1}=\\dfrac{12\\ \\mathrm{km}}{8\\ \\mathrm{km/h}}=\\dfrac{12}{8}=\\dfrac{3}{2}=1.5\\ \\mathrm{h}
$$

Second leg:

$$
t_{2}=\\dfrac{8\\ \\mathrm{km}}{12\\ \\mathrm{km/h}}=\\dfrac{8}{12}=\\dfrac{2}{3}\\ \\mathrm{h}
$$

Total time:

$$
t=t_{1}+t_{2}=\\dfrac{3}{2}+\\dfrac{2}{3}=\\dfrac{9}{6}+\\dfrac{4}{6}=\\dfrac{13}{6}\\approx 2.167\\ \\mathrm{h}
$$

Compare with the threshold:

$$
\\dfrac{13}{6}<2.5=\\dfrac{15}{6}
$$

because $13<15$. The whole trip really does take strictly less than $2.5$ hours.

So the statement is True.`,

    `**D.** → True

The logarithms are defined only when every argument is positive:

$$
x-1>0,\\qquad x+3>0,\\qquad 2x+14>0
$$

Together with the stated restriction $x>1$, the domain is simply $x>1$.

On that domain the sum-to-product rule for logs turns the equation into

$$
\\log\\bigl((x-1)(x+3)\\bigr)=\\log(2x+14)
$$

Injectivity of $\\log$ gives

$$
(x-1)(x+3)=2x+14
$$

$$
x^{2}+2x-3=2x+14
$$

The $2x$ terms cancel:

$$
x^{2}-3=14\\qquad\\Rightarrow\\qquad x^{2}=17\\qquad\\Rightarrow\\qquad x=\\pm\\sqrt{17}
$$

Only the positive root can lie in $x>1$:

$$
x=\\sqrt{17}\\approx 4.123
$$

(Check: $\\sqrt{16}=4$, so $\\sqrt{17}$ is a little larger than $4$, hence still less than $5$.)

$$
4.123<5
$$

So the statement is True.`,

    `**E.** → False

Let $a$ be the number of $2$-euro coins and $b$ the number of $5$-euro coins. The two counting conditions are

$$
a+b=19
$$

$$
2a+5b=62
$$

From the first equation, $a=19-b$. Substitute into the second:

$$
2(19-b)+5b=62
$$

$$
38-2b+5b=62
$$

$$
38+3b=62
$$

$$
3b=24\\qquad\\Rightarrow\\qquad b=8
$$

Then $a=19-8=11$. There are exactly eight coins of $5$ euros. The claim asks for strictly more than eight, which fails:

$$
8\\ngtr 8
$$

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


/** Hard inequalities — radical, double absolute, rational, mixed — teacher-step explanations. */
function buildMathCh6Diversified() {
  const context = `Each letter is an independent hard inequality.

A radical inequality, a two-absolute sum, a rational inequality with cancellation, a comparison of two absolute values, and a mixed absolute–radical system appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "The solution set of $\\sqrt{3x+1}\\le x-1$ is exactly $[1,+\\infty)$.",
    "The solution set of $|x-4|+|x+2|<10$ is exactly $(-4,6)$.",
    "After cancelling a common factor, the inequality $\\dfrac{x^{2}-9}{x^{2}-x-6}\\le 0$ has solution set exactly $(-3,-2]$.",
    "Every number in the open interval $(0,1)$ satisfies $|2x+1|\\ge |x-5|$.",
    "The system $|x-1|<3$ and $\\sqrt{x+2}\\ge 1$ has exactly five integer solutions.",
  ];

  const answer_key = [false, true, true, false, true];

  const tactical_explanations = [
    `**A.** → False

Start with the domain of the square root: the inside must be nonnegative.

$$
3x+1\\ge 0\\qquad\\Rightarrow\\qquad x\\ge -\\dfrac{1}{3}
$$

A square root is always $\\ge 0$, so if the right-hand side is negative the inequality cannot hold. Force

$$
x-1\\ge 0\\qquad\\Rightarrow\\qquad x\\ge 1
$$

On $x\\ge 1$ both sides are nonnegative, so squaring is allowed and preserves the inequality direction:

$$
3x+1\\le (x-1)^{2}
$$

$$
3x+1\\le x^{2}-2x+1
$$

Bring every term to one side:

$$
0\\le x^{2}-2x+1-3x-1
$$

$$
0\\le x^{2}-5x
$$

$$
0\\le x(x-5)
$$

A product is nonnegative when the factors have the same sign (or one is zero):

$$
x\\le 0\\quad\\text{or}\\quad x\\ge 5
$$

Intersect with the working region $x\\ge 1$:

$$
x\\in[5,+\\infty)
$$

The claim says $[1,+\\infty)$. That set is strictly larger. For a concrete counter-example take $x=2\\ge 1$:

$$
\\sqrt{3\\cdot 2+1}=\\sqrt{7}\\approx 2.65,\\qquad 2-1=1
$$

$$
2.65\\nless 1
$$

so $x=2$ is not a solution. The claimed set is wrong.

So the statement is False.`,

    `**B.** → True

The expression $|x-4|+|x+2|$ changes formula at the kinks $x=-2$ and $x=4$. Split into three pieces.

**Piece 1:** $x\\ge 4$. Then both insides are nonnegative:

$$
(x-4)+(x+2)=2x-2
$$

$$
2x-2<10\\qquad\\Rightarrow\\qquad 2x<12\\qquad\\Rightarrow\\qquad x<6
$$

Intersect with $x\\ge 4$:

$$
x\\in[4,6)
$$

**Piece 2:** $-2\\le x\\le 4$. Then

$$
(4-x)+(x+2)=6
$$

$$
6<10
$$

is always true on the whole piece, so the whole closed interval $[-2,4]$ survives.

**Piece 3:** $x<-2$. Then both insides are negative:

$$
(4-x)+(-x-2)=2-2x
$$

$$
2-2x<10\\qquad\\Rightarrow\\qquad -2x<8\\qquad\\Rightarrow\\qquad x>-4
$$

(dividing by $-2$ flips the inequality). Intersect with $x<-2$:

$$
x\\in(-4,-2)
$$

Unite the three pieces:

$$
(-4,-2)\\cup[-2,4]\\cup[4,6)=(-4,6)
$$

That matches the claim exactly (open at both ends because the inequality is strict).

So the statement is True.`,

    `**C.** → True

Factor numerator and denominator:

$$
\\dfrac{x^{2}-9}{x^{2}-x-6}=\\dfrac{(x-3)(x+3)}{(x-3)(x+2)}
$$

The common factor $x-3$ may be cancelled only where it is nonzero, so exclude the pole $x=3$ (and note $x=-2$ is also a pole of the original). For $x\\ne 3$,

$$
\\dfrac{x+3}{x+2}\\le 0
$$

A quotient of linear factors is nonpositive between the roots, including the numerator zero and excluding the denominator zero:

$$
x\\in(-3,-2]
$$

The excluded point $x=3$ does not lie in $(-3,-2]$, so nothing further is removed. The solution set is exactly $(-3,-2]$.

So the statement is True.`,

    `**D.** → False

Both sides are absolute values, so squaring is valid and keeps the inequality direction:

$$
|2x+1|\\ge |x-5|
$$

$$
(2x+1)^{2}\\ge (x-5)^{2}
$$

$$
4x^{2}+4x+1\\ge x^{2}-10x+25
$$

$$
3x^{2}+14x-24\\ge 0
$$

Solve the corresponding equation $3x^{2}+14x-24=0$:

$$
\\Delta=14^{2}-4\\cdot 3\\cdot(-24)=196+288=484=22^{2}
$$

$$
x=\\dfrac{-14\\pm 22}{6}
$$

$$
x=\\dfrac{8}{6}=\\dfrac{4}{3},\\qquad x=\\dfrac{-36}{6}=-6
$$

The parabola $3x^{2}+14x-24$ opens upwards, so it is nonnegative outside the roots:

$$
x\\in\\bigl(-\\infty,-6\\bigr]\\cup\\Bigl[\\dfrac{4}{3},+\\infty\\Bigr)
$$

The open interval $(0,1)$ lies entirely between $-6$ and $4/3$, so no point of $(0,1)$ satisfies the inequality. The claim is false.

So the statement is False.`,

    `**E.** → True

First inequality:

$$
|x-1|<3\\qquad\\Rightarrow\\qquad -3<x-1<3\\qquad\\Rightarrow\\qquad -2<x<4
$$

Second inequality: a square root is at least $1$ precisely when its inside is at least $1$ (and already in the radical domain $x\\ge -2$):

$$
\\sqrt{x+2}\\ge 1\\qquad\\Rightarrow\\qquad x+2\\ge 1\\qquad\\Rightarrow\\qquad x\\ge -1
$$

Intersect $-2<x<4$ with $x\\ge -1$:

$$
x\\in[-1,4)
$$

The integers in that half-open interval are

$$
-1,\\ 0,\\ 1,\\ 2,\\ 3
$$

— exactly five. The endpoint $x=4$ is excluded by the strict absolute-value bound, so it is not counted.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.MIXINEQ",
    id: "MATH 6.MOCK.MIXINEQ",
    title: "Hard inequalities — radical, double absolute, rational, mixed system",
    chapter: 6,
    subsection: "6.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "For each letter: fix domain, expand or square carefully, read a sign chart or piece-wise absolute formula, then compare the resulting set with the claim.",
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

Let $x$ be the mass of pure copper (kg) and $y$ the mass of scrap (kg). Mass balance for the finished alloy:

$$
x+y=120
$$

Copper balance: pure copper contributes $1\\cdot x$, scrap contributes $0.4\\,y$, and the blend must be $70\\%$ copper:

$$
x+0.4y=0.7\\cdot 120=84
$$

Subtract the second equation from the first after rewriting $x=120-y$:

$$
(120-y)+0.4y=84
$$

$$
120-0.6y=84
$$

$$
-0.6y=84-120=-36
$$

$$
y=\\dfrac{36}{0.6}=60
$$

Then $x=120-60=60$. Scrap mass is $60\\ \\mathrm{kg}$. Compare with the threshold:

$$
60>55
$$

(The cheapest blend is uniquely determined by the two linear targets, so there is no cheaper alternative with less scrap.)

So the statement is True.`,

    `**B.** → False

From A the blend uses $60\\ \\mathrm{kg}$ of pure copper at EUR $9$ per kg and $60\\ \\mathrm{kg}$ of scrap at EUR $4$ per kg:

$$
\\text{cost}=60\\cdot 9+60\\cdot 4=540+240=780
$$

The claim says the material cost is less than EUR $750$. But

$$
780\\nless 750
$$

So the statement is False.`,

    `**C.** → True

Revenue from selling the whole $120\\ \\mathrm{kg}$ at EUR $8.50$ per kg:

$$
\\text{revenue}=120\\cdot 8.50=120\\cdot\\dfrac{17}{2}=60\\cdot 17=1020
$$

Material cost from B is $780$, so profit on materials alone is

$$
1020-780=240
$$

Compare with the threshold:

$$
240>220
$$

So the statement is True.`,

    `**D.** → False

Contribution margin per unit is selling price minus variable cost:

$$
11-5=6
$$

Break-even output is fixed cost divided by contribution margin:

$$
Q_{\\mathrm{BE}}=\\dfrac{3600}{6}=600
$$

The claim says break-even is fewer than $550$ units. But

$$
600\\nless 550
$$

So the statement is False.`,

    `**E.** → True

Write the original break-even as $Q=F/m$, where $F$ is fixed cost and $m$ is the (unchanged) contribution margin per unit.

After a $20\\%$ rise in fixed cost the new fixed cost is $1.2F$, so the new break-even is

$$
Q'=\\dfrac{1.2F}{m}=1.2\\cdot\\dfrac{F}{m}=1.2\\,Q
$$

That is exactly a $20\\%$ increase in break-even output. Numerically, with $Q=600$ from D,

$$
Q'=1.2\\cdot 600=720=600+120
$$

and $120/600=0.20=20\\%$.

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


/** Real-case logic — overview owns the truth table; each letter has its own teacher solve. */
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

The claim says Ben is on every valid roster. To test that, try to build a valid roster with Ben out and see whether the other rules still allow it.

Assume $B=0$. Rule (1) is the biconditional $A\\Leftrightarrow B$, so Ava is out as well:

$$
B=0\\qquad\\Rightarrow\\qquad A=0
$$

Rule (2) is $B\\Rightarrow C$. With Ben already out the hypothesis is false, so the implication is idle: Cara is free so far.

Rule (3) forces exactly one of Cara or Drew. Two cases remain.

**Case Cara in, Drew out** ($C=1$, $D=0$). Rule (4) is idle because Drew is out. Rule (5) needs $E\\lor F$. Rule (6) is $F\\Rightarrow\\neg A$; Ava is already out, so Finn may enter. One legal choice is $E=1$, $F=1$:

$$
\\{C,E,F\\}
$$

Size $3$, so rule (7) holds. Every rule is satisfied, and Ben is absent.

**Case Drew in, Cara out** ($C=0$, $D=1$). Rule (4) forces $E=0$. Rule (5) then forces $F=1$. With Ava out, rule (6) allows Finn. The roster is at most $\\{D,F\\}$ (size $2$), which breaks rule (7).

So Ben-out is possible in the first case. The roster $\\{C,E,F\\}$ is a concrete counter-example to “Ben on every valid roster.”

So the statement is False.`,

    `**B.** → False

The claim says some valid roster includes Drew. Force $D=1$ and chase the consequences.

Rule (3) is the exclusive-or on Cara and Drew, so Cara is out:

$$
D=1\\qquad\\Rightarrow\\qquad C=0
$$

Rule (4) is $D\\Rightarrow\\neg E$, so Eve is out:

$$
D=1\\qquad\\Rightarrow\\qquad E=0
$$

Rule (5) needs $E\\lor F$. With Eve gone, Finn must enter:

$$
F=1
$$

Rule (6) is $F\\Rightarrow\\neg A$, so Ava is out, and then rule (1) forces Ben out as well:

$$
F=1\\qquad\\Rightarrow\\qquad A=0\\qquad\\Rightarrow\\qquad B=0
$$

The only people still on the roster are Drew and Finn:

$$
\\{D,F\\}
$$

Size $2$, which is strictly less than $3$, so rule (7) fails. Every branch with Drew in dies. No valid roster contains Drew.

So the statement is False.`,

    `**C.** → True

The stem says “Finn is rostered only if Ava is not rostered.” In symbols that is

$$
F\\Rightarrow\\neg A
$$

The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$. Here $P=F$ and $Q=\\neg A$, so

$$
\\neg(\\neg A)\\Rightarrow\\neg F
$$

$$
A\\Rightarrow\\neg F
$$

That is exactly the claim: if Ava is rostered, then Finn cannot be rostered.

Check against the two valid rosters from the overview. The Ben-based roster $\\{A,B,C,E\\}$ has $A=1$ and $F=0$. The other valid roster $\\{C,E,F\\}$ has $A=0$, so the implication is idle there. No valid row ever has $A=F=1$ together (that row is rejected in the overview table by rule (6)).

So the statement is True.`,

    `**D.** → True

Rule (7) asks for size at least three; the claim asks whether exactly one valid roster has size exactly three.

From the overview solve there are only two valid rosters:

$$
\\{A,B,C,E\\}\\qquad\\text{(size }4\\text{)}
$$

$$
\\{C,E,F\\}\\qquad\\text{(size }3\\text{)}
$$

The Ben-based roster already has four people, so it is not a size-three example. The only size-three survivor is $\\{C,E,F\\}$.

Any other attempt at size three either breaks the exclusive-or, breaks $F\\Rightarrow\\neg A$, or falls below size three once Drew is forced in (as in letter B). Therefore there is exactly one valid roster of size three.

So the statement is True.`,

    `**E.** → False

A roster of all six interns would require

$$
A=B=C=D=E=F=1
$$

Rule (3) says exactly one of Cara or Drew is rostered. Putting both $C=1$ and $D=1$ immediately breaks that exclusive-or, before any other rule is checked.

Even if one tried to keep five people by dropping only Drew, rule (6) still forbids $A=F=1$ together. The overview table’s largest valid size is $4$ (the roster $\\{A,B,C,E\\}$); the other valid roster has size $3$. Size six never appears.

So the statement is False.`,
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

"$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Shared forcing (used by every letter).**

Apply the biconditional and exclusive-or first, then the implications, then the size filter.

- If Ben is in, Ava is in and Cara is in; the exclusive-or then forces Drew out, so Eve is free and Finn is blocked by rule (6). One survivor is $\\{A,B,C,E\\}$.
- If Ben is out, Ava is out; Cara-in / Drew-out with Eve and Finn in gives the second survivor $\\{C,E,F\\}$.
- Drew-in always collapses to size $<3$ (see letter B).

Only two rows survive.

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
    "The value of $\\dfrac{(2x^{3}-5x+1)(3x-4)}{x^{2}-1}$ at $x=2$ is strictly larger than $4$.",
    "Over the reals with $x\\ne\\pm 2$, every solution of $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}=\\dfrac{5}{x^{2}-4}$ is strictly smaller than $2$.",
    "The positive solution of $\\sqrt{x+7}-\\sqrt{x-1}=2$ is strictly larger than $3$.",
  ];

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Substitute $x=2$ into the nested quotient step by step.

Numerator:

$$
\\dfrac{3}{2}-\\dfrac{2}{3}=\\dfrac{9-4}{6}=\\dfrac{5}{6}
$$

Denominator:

$$
\\dfrac{5}{3}-\\dfrac{1}{2}=\\dfrac{10-3}{6}=\\dfrac{7}{6}
$$

Quotient:

$$
\\dfrac{5/6}{7/6}=\\dfrac{5}{7}\\approx 0.714
$$

Compare with the threshold:

$$
0.714<0.8
$$

So the statement is True.`,

    `**B.** → False

Solve the linear system carefully. From $2u+5v=3$,

$$
5v=3-2u\\qquad\\Rightarrow\\qquad v=\\dfrac{3-2u}{5}
$$

Substitute into $3u-2v=11$:

$$
3u-2\\cdot\\dfrac{3-2u}{5}=11
$$

Multiply through by $5$:

$$
15u-2(3-2u)=55
$$

$$
15u-6+4u=55
$$

$$
19u=61\\qquad\\Rightarrow\\qquad u=\\dfrac{61}{19}
$$

Then

$$
v=\\dfrac{3-2\\cdot\\frac{61}{19}}{5}=\\dfrac{\\frac{57-122}{19}}{5}=\\dfrac{-65}{95}=-\\dfrac{13}{19}
$$

Sum:

$$
u+v=\\dfrac{61-13}{19}=\\dfrac{48}{19}\\approx 2.526
$$

$$
2.526\\ngtr 3
$$

So the statement is False.`,

    `**C.** → True

At $x=2$ evaluate the cubic factor in the numerator first:

$$
2x^{3}-5x+1=2\\cdot 8-5\\cdot 2+1=16-10+1=7
$$

Then the linear factor:

$$
3x-4=3\\cdot 2-4=2
$$

So the numerator product is

$$
7\\cdot 2=14
$$

Denominator:

$$
x^{2}-1=4-1=3
$$

Quotient:

$$
\\dfrac{14}{3}=4+\\dfrac{2}{3}\\approx 4.667
$$

Compare with the threshold:

$$
\\dfrac{14}{3}>4
$$

So the statement is True.`,

    `**D.** → False

Combine the left-hand side over the common denominator $x^{2}-4$:

$$
\\dfrac{1}{x-2}+\\dfrac{1}{x+2}=\\dfrac{(x+2)+(x-2)}{x^{2}-4}=\\dfrac{2x}{x^{2}-4}
$$

The equation becomes

$$
\\dfrac{2x}{x^{2}-4}=\\dfrac{5}{x^{2}-4}\\qquad(x\\ne\\pm 2)
$$

Since the denominators match and are nonzero,

$$
2x=5\\qquad\\Rightarrow\\qquad x=\\dfrac{5}{2}=2.5
$$

The claim says every solution is strictly smaller than $2$. But $2.5\\ngtr?\\quad 2.5\\nless 2$. The unique admissible root fails the threshold.

So the statement is False.`,

    `**E.** → False

Isolate one radical:

$$
\\sqrt{x+7}=2+\\sqrt{x-1}
$$

Both sides are nonnegative for $x\\ge 1$ in the domain. Square:

$$
x+7=4+4\\sqrt{x-1}+(x-1)
$$

$$
x+7=x+3+4\\sqrt{x-1}
$$

$$
4=4\\sqrt{x-1}\\qquad\\Rightarrow\\qquad 1=\\sqrt{x-1}\\qquad\\Rightarrow\\qquad x=2
$$

Check in the original:

$$
\\sqrt{9}-\\sqrt{1}=3-1=2
$$

The positive solution is $x=2$, which is not strictly larger than $3$.

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



/** Numeric parabola — harder thresholds; teacher-step explanations. */
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
    "The product of the two roots of $g(x)=0$ is strictly larger than $4$.",
    "Completing the square shows that the minimum value of $g$ is strictly less than $-7$.",
    "When $m=4$, the second intersection (other than the vertex) lies strictly between $x=4$ and $x=6$.",
    "There is more than one real slope $m$ for which $y=f_{m}$ meets $y=g$ at exactly one point.",
    "When $m=-8$, the distance between the two intersection $x$-coordinates exceeds $3.5$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Solve $g(x)=0$:

$$
2x^{2}-12x+10=0\\qquad\\Rightarrow\\qquad x^{2}-6x+5=0
$$

$$
(x-1)(x-5)=0
$$

The roots are $x=1$ and $x=5$. Their product is

$$
1\\cdot 5=5>4
$$

(Alternatively, by Vieta on $x^{2}-6x+5=0$ the product of roots is the constant term $5$.)

So the statement is True.`,

    `**B.** → True

Complete the square:

$$
g(x)=2\\bigl(x^{2}-6x\\bigr)+10=2\\bigl((x-3)^{2}-9\\bigr)+10
$$

$$
=2(x-3)^{2}-18+10=2(x-3)^{2}-8
$$

The square term is always $\\ge 0$, so the minimum value is $-8$, attained at $x=3$. Compare with the claim:

$$
-8<-7
$$

So the statement is True.`,

    `**C.** → True

Form the difference:

$$
g(x)-f_{m}(x)=2x^{2}-12x+10-\\bigl(m(x-3)-8\\bigr)
$$

$$
=2(x-3)^{2}-8-m(x-3)+8=2(x-3)^{2}-m(x-3)
$$

$$
=(x-3)\\bigl(2(x-3)-m\\bigr)
$$

The intersection $x$-coordinates are therefore $x=3$ (the vertex) and

$$
x=3+\\dfrac{m}{2}
$$

For $m=4$,

$$
x=3+2=5
$$

and $4<5<6$, so the second intersection lies strictly between $4$ and $6$.

So the statement is True.`,

    `**D.** → False

From the factorisation in C, the intersection abscissae are $x=3$ and $x=3+m/2$. These coincide precisely when

$$
\\dfrac{m}{2}=0\\qquad\\Rightarrow\\qquad m=0
$$

For every other real slope $m\\ne 0$ the two roots are distinct, so the graphs meet at two points. Therefore there is exactly one real slope giving a single common point — namely $m=0$ — and not more than one.

So the statement is False.`,

    `**E.** → True

From C, when $m=-8$ the two intersection $x$-coordinates are the vertex $x=3$ and

$$
x=3+\\dfrac{m}{2}=3+\\dfrac{-8}{2}=3-4=-1
$$

The distance between them is the absolute difference

$$
\\bigl|3-(-1)\\bigr|=\\bigl|3+1\\bigr|=4
$$

Compare with the threshold:

$$
4>3.5
$$

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
      "Factor $g$, complete the square for the minimum, factor $g-f_m$ to read both intersections, then compare products, values, and distances with the claimed thresholds.",
  };
}



/** Power model — exponent known, one calibration for A; teacher-step explanations. */
function buildMathCh8TwoUnknowns() {
  const context = `Delivery capacity follows

$$
C(v)=A\\sqrt{v}\\qquad(v>0)
$$

with unknown $A>0$. Engineering fixes the square-root exponent; only the scale $A$ must be read from data.

One calibration run: at $v=9$ van-hours the measured capacity is $36$.

Each unit of capacity earns EUR $2$, and each van-hour costs EUR $3$.

Profit is $\\pi(v)=2\\,C(v)-3v$.`;

  const statements = [
    "Tripling van-hours multiplies capacity by more than $1.7$.",
    "The profit-maximising van-hour level exceeds $15$.",
    "At that profit-maximising level, capacity already exceeds $50$.",
    "At the interior profit maximum, marginal revenue from an extra van-hour equals the EUR $3$ marginal cost.",
    "Moving from the profit-maximising level to twice that many van-hours cuts profit by more than half.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Write the capacity at $v$ and at $3v$:

$$
C(v)=A\\sqrt{v},\\qquad C(3v)=A\\sqrt{3v}=A\\sqrt{3}\\,\\sqrt{v}
$$

The multiplication factor is the ratio

$$
\\dfrac{C(3v)}{C(v)}=\\sqrt{3}
$$

The unknown scale $A$ cancels, so the calibration is not needed for this letter. Numerically

$$
\\sqrt{3}\\approx 1.732>1.7
$$

So the statement is True.`,

    `**B.** → True

First recover $A$ from the single calibration $C(9)=36$:

$$
A\\sqrt{9}=36\\qquad\\Rightarrow\\qquad 3A=36\\qquad\\Rightarrow\\qquad A=12
$$

Capacity is therefore $C(v)=12\\sqrt{v}$. Profit becomes

$$
\\pi(v)=2\\cdot 12\\sqrt{v}-3v=24\\sqrt{v}-3v
$$

Differentiate with the chain rule on $\\sqrt{v}=v^{1/2}$:

$$
\\pi'(v)=24\\cdot\\dfrac{1}{2}v^{-1/2}-3=\\dfrac{12}{\\sqrt{v}}-3
$$

Set the derivative to zero for an interior stationary point:

$$
\\dfrac{12}{\\sqrt{v}}=3\\qquad\\Rightarrow\\qquad \\sqrt{v}=4\\qquad\\Rightarrow\\qquad v=16
$$

The second derivative

$$
\\pi''(v)=-\\dfrac{12}{2}v^{-3/2}=-6v^{-3/2}<0
$$

for every $v>0$, so $v=16$ is a maximum. Compare with the claim:

$$
16>15
$$

So the statement is True.`,

    `**C.** → False

From B the profit-maximising van-hour level is $v=16$ and the calibrated capacity is $C(v)=12\\sqrt{v}$. Substitute:

$$
C(16)=12\\sqrt{16}=12\\cdot 4=48
$$

The claim says capacity already exceeds $50$:

$$
48\\ngtr 50
$$

So at the profit maximum the capacity is $48$, which does not clear the threshold.

So the statement is False.`,

    `**D.** → True

Profit is $\\pi(v)=2\\,C(v)-3v$, so the derivative (marginal profit) is

$$
\\pi'(v)=2\\,C'(v)-3
$$

Here $2\\,C'(v)$ is the marginal revenue earned by one extra van-hour, and $3$ is the EUR $3$ marginal cost of that van-hour. An interior maximum requires $\\pi'(v)=0$, which rearranges to

$$
2\\,C'(v)=3
$$

That is exactly the first-order condition used in B (where $C'(v)=12/(2\\sqrt{v})=6/\\sqrt{v}$, so $2\\,C'(v)=12/\\sqrt{v}$). At the maximiser, marginal revenue equals marginal cost.

So the statement is True.`,

    `**E.** → False

Evaluate profit at the optimum and at twice that level:

$$
\\pi(16)=24\\sqrt{16}-3\\cdot 16=24\\cdot 4-48=96-48=48
$$

$$
\\pi(32)=24\\sqrt{32}-3\\cdot 32=24\\cdot\\sqrt{16\\cdot 2}-96=24\\cdot 4\\sqrt{2}-96
$$

$$
=96\\sqrt{2}-96=96(\\sqrt{2}-1)\\approx 96\\cdot 0.4142\\approx 39.76
$$

The new profit is about $39.76$. Relative to $48$,

$$
\\dfrac{39.76}{48}\\approx 0.83
$$

so profit falls by only about $17\\%$, not by more than half.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POW2",
    id: "MATH 8.MOCK.POW2",
    title: "Square-root capacity — one known exponent, one calibration",
    chapter: 8,
    subsection: "8.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Keep the square-root exponent fixed, recover $A$ from $C(9)=36$, form $\\pi(v)=24\\sqrt{v}-3v$, solve $\\pi'=0$, then adjudicate ratio, capacity, FOC, and a counterfactual profit comparison.",
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

Look for an obvious rational root of $p(t)=t^{3}-6t^{2}+5t+12$. Try $t=-1$:

$$
(-1)^{3}-6(-1)^{2}+5(-1)+12=-1-6-5+12=0
$$

so $t+1$ is a factor. Polynomial division (or undetermined coefficients) gives

$$
p(t)=(t+1)(t^{2}-7t+12)=(t+1)(t-3)(t-4)
$$

The three real roots are therefore $-1$, $3$, and $4$. Their product is

$$
(-1)\\cdot 3\\cdot 4=-12
$$

Alternatively, for a monic cubic $t^{3}+at^{2}+bt+c=0$ Vieta says the product of roots equals $-c$. Here $c=12$, so the product is $-12$.

$$
-12<0
$$

So the statement is True.`,

    `**B.** → True

Differentiate term by term:

$$
p'(t)=3t^{2}-12t+5
$$

This is a parabola opening upwards. Its discriminant is

$$
\\Delta=(-12)^{2}-4\\cdot 3\\cdot 5=144-60=84=4\\cdot 21
$$

so there are two distinct real critical points

$$
t=\\dfrac{12\\pm\\sqrt{84}}{6}=\\dfrac{12\\pm 2\\sqrt{21}}{6}=\\dfrac{6\\pm\\sqrt{21}}{3}
$$

Because the leading coefficient of $p'$ is positive, $p'(t)<0$ strictly between the two roots and $p'(t)>0$ outside them. Therefore on the open interval between the two critical points the output rate $p$ is strictly decreasing.

So the statement is True.`,

    `**C.** → True

From B the derivative is $p'(t)=3t^{2}-12t+5$. The instantaneous slope at $t=1$ is therefore

$$
p'(1)=3(1)^{2}-12(1)+5
$$

Compute each term:

$$
3(1)^{2}=3,\\qquad -12(1)=-12,\\qquad +5=5
$$

$$
p'(1)=3-12+5=-4
$$

Compare with the claimed threshold:

$$
-4<-3
$$

So the statement is True.`,

    `**D.** → True

The larger critical abscissa is

$$
t_{+}=\\dfrac{6+\\sqrt{21}}{3}
$$

Since $\\sqrt{16}=4$ and $\\sqrt{25}=5$, one has $\\sqrt{21}\\approx 4.583$, hence

$$
t_{+}\\approx\\dfrac{6+4.583}{3}=\\dfrac{10.583}{3}\\approx 3.528
$$

$$
3.528>3.4
$$

This critical point lies between the roots $3$ and $4$ of $p$. On the open interval $(3,4)$ the factorisation $p(t)=(t+1)(t-3)(t-4)$ has

$$
t+1>0,\\qquad t-3>0,\\qquad t-4<0
$$

so the product is negative. In particular $p(t_{+})<0$.

So the statement is True.`,

    `**E.** → False

Evaluate the endpoints of the shift window:

$$
p(0)=12,\\qquad p(5)=125-150+25+12=12
$$

The only local maximum on $(0,5)$ is at the smaller critical point

$$
t_{-}=\\dfrac{6-\\sqrt{21}}{3}\\approx\\dfrac{6-4.583}{3}\\approx 0.472
$$

Compute $p(t_{-})$ step by step (or expand $(t+1)(t-3)(t-4)$). Numerically

$$
p(0.472)\\approx 0.105-1.340+2.362+12\\approx 13.13
$$

The local minimum at $t_{+}$ is negative, so it cannot be the global maximum. Therefore the highest output rate on $[0,5]$ is about $13.13$, which does not exceed $14$:

$$
13.13\\ngtr 14
$$

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

At time zero the mass is $800\\ \\mathrm{mg}$, and at $t=6$ years it is $450\\ \\mathrm{mg}$.

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

The decay law is $N(t)=N_{0}e^{-\\lambda t}$ with $N_{0}=800$. At $t=6$,

$$
N(6)=800\\,e^{-6\\lambda}=450
$$

Divide both sides by $800$:

$$
e^{-6\\lambda}=\\dfrac{450}{800}=\\dfrac{9}{16}
$$

Take the natural logarithm (which is strictly increasing, so the inequality direction will be preserved later):

$$
-6\\lambda=\\ln\\dfrac{9}{16}=\\ln 9-\\ln 16
$$

$$
\\lambda=-\\dfrac{1}{6}\\ln\\dfrac{9}{16}=\\dfrac{1}{6}\\ln\\dfrac{16}{9}=\\dfrac{1}{6}\\ln\\dfrac{800}{450}
$$

Numerically $\\ln(800/450)=\\ln(16/9)\\approx\\ln 1.7778\\approx 0.5754$, so

$$
\\lambda\\approx\\dfrac{0.5754}{6}\\approx 0.0959
$$

Compare with the threshold:

$$
0.0959>0.09
$$

So the statement is True.`,

    `**B.** → False

Half-life $t_{1/2}$ is defined by $N(t_{1/2})=\\tfrac{1}{2}N_{0}$, which forces

$$
e^{-\\lambda t_{1/2}}=\\dfrac{1}{2}\\qquad\\Rightarrow\\qquad \\lambda t_{1/2}=\\ln 2\\qquad\\Rightarrow\\qquad t_{1/2}=\\dfrac{\\ln 2}{\\lambda}
$$

Using $\\lambda\\approx 0.0959$ from A and $\\ln 2\\approx 0.6931$,

$$
t_{1/2}\\approx\\dfrac{0.6931}{0.0959}\\approx 7.23\\ \\mathrm{years}
$$

The claim says the half-life is strictly less than $7$ years. But

$$
7.23\\nless 7
$$

So the statement is False.`,

    `**C.** → False

After $12=2\\cdot 6$ years the exponential multiplies twice by the six-year factor $450/800$:

$$
N(12)=N_{0}\\,e^{-12\\lambda}=N_{0}\\bigl(e^{-6\\lambda}\\bigr)^{2}=800\\left(\\dfrac{450}{800}\\right)^{2}
$$

$$
=800\\cdot\\left(\\dfrac{9}{16}\\right)^{2}=800\\cdot\\dfrac{81}{256}=\\dfrac{800\\cdot 81}{256}
$$

$$
=\\dfrac{25\\cdot 81}{8}=\\dfrac{2025}{8}=253.125
$$

Compare with the threshold $260$:

$$
253.125\\ngtr 260
$$

So the remaining mass is not still above $260\\ \\mathrm{mg}$.

So the statement is False.`,

    `**D.** → False

The endowment satisfies $S(5)=5000\\,e^{5r}=6500$. Divide by $5000$:

$$
e^{5r}=\\dfrac{6500}{5000}=1.3
$$

$$
5r=\\ln 1.3\\qquad\\Rightarrow\\qquad r=\\dfrac{\\ln 1.3}{5}
$$

Since $\\ln 1.3\\approx 0.2624$,

$$
r\\approx\\dfrac{0.2624}{5}\\approx 0.0525
$$

The claim says $r>0.055$. But

$$
0.0525\\ngtr 0.055
$$

So the statement is False.`,

    `**E.** → True

Solve $S(t)=9000$ for the first hitting time:

$$
5000\\,e^{rt}=9000\\qquad\\Rightarrow\\qquad e^{rt}=\\dfrac{9000}{5000}=1.8
$$

$$
rt=\\ln 1.8\\qquad\\Rightarrow\\qquad t=\\dfrac{\\ln 1.8}{r}
$$

Using $r\\approx 0.0525$ from D and $\\ln 1.8\\approx 0.5878$,

$$
t\\approx\\dfrac{0.5878}{0.0525}\\approx 11.20
$$

Compare with the threshold:

$$
11.20>11
$$

So the endowment first reaches EUR $9000$ after more than $11$ years.

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

Write $f$ as a product of three positive factors on $x>0$:

$$
f(x)=(x^{2}+4)\\cdot\\ln(2x+1)\\cdot e^{-x}
$$

(For $x>0$ one has $2x+1>1$, so $\\ln(2x+1)>0$.) Take the natural logarithm:

$$
\\ln f(x)=\\ln(x^{2}+4)+\\ln\\bigl(\\ln(2x+1)\\bigr)-x
$$

Differentiate with the chain rule:

$$
\\dfrac{f'(x)}{f(x)}=\\dfrac{2x}{x^{2}+4}+\\dfrac{1}{\\ln(2x+1)}\\cdot\\dfrac{2}{2x+1}-1
$$

$$
=\\dfrac{2x}{x^{2}+4}+\\dfrac{2}{(2x+1)\\ln(2x+1)}-1
$$

Evaluate this logarithmic derivative at the endpoints of the claimed interval.

At $x=0.5$:

$$
\\dfrac{2\\cdot 0.5}{0.25+4}=\\dfrac{1}{4.25}\\approx 0.235
$$

$$
\\dfrac{2}{(2)\\ln 2}=\\dfrac{1}{\\ln 2}\\approx 1.443
$$

$$
0.235+1.443-1\\approx 0.678>0
$$

At $x=1.5$:

$$
\\dfrac{2\\cdot 1.5}{2.25+4}=\\dfrac{3}{6.25}=0.48
$$

$$
\\dfrac{2}{4\\cdot\\ln 4}=\\dfrac{2}{4\\ln 4}\\approx\\dfrac{2}{5.545}\\approx 0.361
$$

$$
0.48+0.361-1\\approx -0.159<0
$$

Since $f>0$, the sign of $f'$ matches the sign of $f'/f$. By the intermediate-value theorem, $f'/f$ (hence $f'$) has a zero in $(0.5,1.5)$.

So the statement is True.`,

    `**B.** → False

From A, the logarithmic derivative is positive at $x=0.5$ and negative at $x=1.5$. Crossing a simple zero of $f'$ from $+$ to $-$ means $f$ itself changes from increasing to decreasing. That is the definition of a local maximum, not a local minimum.

So the statement is False.`,

    `**C.** → True

Substitute $x=1$ into the original formula:

$$
f(1)=(1^{2}+4)\\ln(2\\cdot 1+1)\\,e^{-1}=5\\cdot\\ln 3\\cdot\\dfrac{1}{e}=\\dfrac{5\\ln 3}{e}
$$

Use $\\ln 3\\approx 1.0986$ and $e\\approx 2.7183$:

$$
f(1)\\approx\\dfrac{5\\cdot 1.0986}{2.7183}\\approx\\dfrac{5.493}{2.7183}\\approx 2.021
$$

$$
2.021>2
$$

So the statement is True.`,

    `**D.** → True

Evaluate the logarithmic derivative from A at $x=2$:

$$
\\dfrac{2\\cdot 2}{4+4}=\\dfrac{4}{8}=0.5
$$

$$
\\dfrac{2}{(5)\\ln 5},\\qquad \\ln 5\\approx 1.6094\\qquad\\Rightarrow\\qquad \\dfrac{2}{5\\cdot 1.6094}\\approx 0.249
$$

$$
0.5+0.249-1=-0.251<0
$$

Also $f(2)=(4+4)\\ln 5\\,e^{-2}=8\\ln 5\\,e^{-2}>0$. Therefore

$$
f'(2)=f(2)\\cdot\\Bigl(\\dfrac{f'(2)}{f(2)}\\Bigr)<0
$$

Just after $x=2$ the function is still decreasing.

So the statement is True.`,

    `**E.** → False

A function that is strictly increasing on the whole half-line $(0,\\infty)$ cannot have an interior local maximum. But A–B show that $f$ has a local maximum near $x\\approx 1$. On the left of that point $f$ increases; on the right it decreases for a while (as confirmed at $x=2$ in D). Hence $f$ is not strictly increasing on all of $(0,\\infty)$.

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
      // `$dfrac` from JS string eating `\d` — restore backslash before latex cmds.
      .replace(
        /\$((?:dfrac|tfrac|frac|sqrt|sum|prod|int|lim|ln|log|sin|cos|tan|det|max|min|inf|sup|cdot|times|div|pm|mp|neq|leq|geq|le|ge|ne|approx|equiv|sim|simeq|propto|infty|partial|nabla|forall|exists|in|notin|subset|supset|cup|cap|land|lor|neg|lnot|rightarrow|leftarrow|Rightarrow|Leftarrow|Leftrightarrow|leftrightarrow|mapsto|to|gets|quad|qquad|hspace|vspace|left|right|bigl|bigr|Bigl|Bigr|big|Big|text|mathrm|mathbf|mathit|mathsf|operatorname|overline|underline|hat|bar|vec|dot|ddot|tilde|widehat|widetilde|binom|dbinom|choose|begin|end|alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|pi|varpi|rho|varrho|sigma|varsigma|tau|upsilon|phi|varphi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega))\b/g,
        (_m, cmd: string) => `$\\${cmd}`,
      )
      // Euro / bare ≈ inside $$…$$ display blocks.
      .replace(/\$\$([\s\S]*?)\$\$/g, (_m, body: string) => {
        const fixed = String(body)
          .replace(/€\s*/g, "EUR ")
          .replace(/≈/g, "\\approx ");
        return `$$${fixed}$$`;
      })
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
