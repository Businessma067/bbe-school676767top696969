/**
 * Rebuild Mock Exam 4 — CVP econ + Glacier English + M3-style math twins.
 * Order: economics → english (Doomsday Glacier T.12) → math.
 * Math scenarios/numbers must differ from Mock 1/2/3 (do not rename M3 twins).
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
 * NEW chart engine (not P/E, not bonds/YTM, not rights, not WC/ROCE):
 * contribution, break-even, margin of safety, degree of operating leverage.
 */
function buildCvpBreakEvenCase() {
  // p=48, vc=30 → cm=18; FC=54,000 → BE = 54000/18 = 3000 units
  // Monthly units: 210+195+230+250+280+310+340+325+290+270+255+245 = 3200
  // MoS = (3200-3000)/3200 = 200/3200 = 6.25%
  // Profit at 3200: 3200*18 - 54000 = 57600-54000 = 3600
  // DOL = (Q*CM)/(Q*CM-FC) = 57600/3600 = 16
  // If Q rises 5% → 3360; profit = 3360*18-54000 = 6480; rise = 6480/3600-1 = 80%

  const context = `NordTrail GmbH sells one standardised hiking jacket. Selling price is EUR 48 per unit; variable cost is EUR 30 per unit. Annual fixed costs are EUR 54,000. The chart records units sold each month; treat the twelve monthly figures as the full year’s volume.

[[CHART type="line" title="NordTrail GmbH jackets sold (units)"]]
Jan | Units=210
Feb | Units=195
Mar | Units=230
Apr | Units=250
May | Units=280
Jun | Units=310
Jul | Units=340
Aug | Units=325
Sep | Units=290
Oct | Units=270
Nov | Units=255
Dec | Units=245
[[/CHART]]

| Key figure | Value |
| --- | ---: |
| Selling price per jacket | EUR 48 |
| Variable cost per jacket | EUR 30 |
| Annual fixed costs | EUR 54,000 |

Evaluate the following economic assertions:`;

  const statements = [
    "Contribution per jacket is strictly greater than EUR 15.",
    "The annual break-even volume is strictly greater than 3,200 jackets.",
    "Using the chart year’s total volume, the margin of safety is strictly less than 10% of that volume.",
    "At the chart year’s total volume, the degree of operating leverage exceeds 12.",
    "If volume next year rises by exactly 5% from the chart total while price, unit variable cost and fixed costs stay unchanged, operating profit rises by less than 40%.",
  ];

  // A: CM=18>15 → True
  // B: BE=3000, not >3200 → False
  // C: MoS=6.25%<10% → True
  // D: DOL=16>12 → True
  // E: profit rise 80%, not <40% → False
  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Contribution per unit is price minus variable cost. Keep the euro amounts in prose:

$$
\\text{Contribution}=48-30=18
$$

$$
18>15
$$

So the statement is True.`,

    `**B.** → False

Break-even volume divides fixed costs by contribution per unit:

$$
\\text{Break-even}=\\dfrac{54{,}000}{18}=3{,}000
$$

$$
3{,}000\\ngtr 3{,}200
$$

So the statement is False.`,

    `**C.** → True

Sum the chart months:

$$
210+195+230+250+280+310+340+325+290+270+255+245=3{,}200
$$

Margin of safety as a share of actual volume:

$$
\\dfrac{3{,}200-3{,}000}{3{,}200}=\\dfrac{200}{3{,}200}=0.0625=6.25\\%
$$

$$
6.25\\%<10\\%
$$

So the statement is True.`,

    `**D.** → True

At $Q=3{,}200$:

$$
Q\\cdot\\mathrm{CM}=3{,}200\\cdot 18=57{,}600
$$

$$
\\text{Operating profit}=57{,}600-54{,}000=3{,}600
$$

$$
\\mathrm{DOL}=\\dfrac{57{,}600}{3{,}600}=16>12
$$

So the statement is True.`,

    `**E.** → False

A $5\\%$ volume rise gives $Q=3{,}200\\cdot 1.05=3{,}360$. New profit:

$$
3{,}360\\cdot 18-54{,}000=60{,}480-54{,}000=6{,}480
$$

$$
\\dfrac{6{,}480}{3{,}600}-1=0.80=80\\%
$$

That is not less than $40\\%$. (Equivalently: $\\mathrm{DOL}\\times 5\\%=80\\%$.)

So the statement is False.`,
  ];

  return {
    case_id: "CASE 6.MOCK.CVP",
    title: "Contribution, Break-Even, Margin of Safety and Operating Leverage",
    subsection: "6.5",
    chapter: 6,
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
  };
}


/** Hard equation word problems — ages, frame, trip, log, coins (new numbers). */
function buildMathCh4Word() {
  const context = `Each letter is an independent equation word problem from a different family.

Ages, a framed print, a two-leg trip, a logarithmic equation, and a coin till appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "A mentor is $18$ years older than an apprentice. In $4$ years the mentor will be three times as old as the apprentice will be then. A planner concludes that the apprentice is now $7$ years old.",
    "A $24\\ \\mathrm{cm}$ by $16\\ \\mathrm{cm}$ print is mounted with a uniform frame so that the framed outer area is four times the print area. The frame width is then strictly less than $8\\ \\mathrm{cm}$.",
    "A cyclist covers $15\\ \\mathrm{km}$ at $10\\ \\mathrm{km/h}$ and then $20\\ \\mathrm{km}$ at $15\\ \\mathrm{km/h}$. The whole trip therefore takes strictly less than $3$ hours.",
    "Over $x>1$, the equation $\\log(x+2)+\\log(x-1)=\\log(3x+5)$ has a solution strictly smaller than $4$.",
    "A till holds only $3$-euro and $7$-euro coins. There are $17$ coins worth $79$ euros in total. Then there are strictly more than eight coins of $7$ euros.",
  ];

  // A: t+22=3(t+4) → t=5, not 7 → False
  // B: (24+2w)(16+2w)=1536 → w=-10+√388 ≈ 9.70 > 8 → False
  // C: 15/10+20/15=17/6≈2.833 < 3 → True
  // D: (x+2)(x-1)=3x+5 → x²-2x-7=0 → x=1+2√2≈3.828 < 4 → True
  // E: 3a+7b=79, a+b=17 → b=7, not >8 → False

  const answer_key = [false, false, true, true, false];

  const tactical_explanations = [
    `**A.** → False

Let $a$ be the apprentice’s present age in years. Then the mentor is now $a+18$.

In $4$ years the apprentice will be $a+4$ and the mentor will be $a+22$. The future-age claim becomes

$$
a+22=3(a+4)
$$

$$
a+22=3a+12
$$

$$
22-12=3a-a\\qquad\\Rightarrow\\qquad 10=2a\\qquad\\Rightarrow\\qquad a=5
$$

The apprentice is now $5$ years old, not $7$. The planner’s conclusion is wrong.

So the statement is False.`,

    `**B.** → False

Let $w>0$ be the uniform frame width in centimetres. The outer rectangle measures $(24+2w)$ by $(16+2w)$. Its area is four times the print area $24\\cdot 16=384$:

$$
(24+2w)(16+2w)=4\\cdot 384=1536
$$

Expand:

$$
384+48w+32w+4w^{2}=1536
$$

$$
4w^{2}+80w+384=1536
$$

$$
4w^{2}+80w=1152\\qquad\\Rightarrow\\qquad w^{2}+20w-288=0
$$

Discriminant:

$$
\\Delta=20^{2}+4\\cdot 288=400+1152=1552=4\\cdot 388
$$

$$
w=\\dfrac{-20\\pm\\sqrt{1552}}{2}=-10\\pm\\sqrt{388}
$$

The positive root is $w=-10+\\sqrt{388}$. Since $\\sqrt{361}=19$ and $\\sqrt{400}=20$, one has $\\sqrt{388}\\approx 19.70$, so

$$
w\\approx -10+19.70=9.70
$$

The claim says the width is strictly less than $8\\ \\mathrm{cm}$. But $9.70\\nless 8$.

So the statement is False.`,

    `**C.** → True

Time equals distance divided by speed. First leg:

$$
t_{1}=\\dfrac{15}{10}=\\dfrac{3}{2}\\ \\mathrm{h}
$$

Second leg:

$$
t_{2}=\\dfrac{20}{15}=\\dfrac{4}{3}\\ \\mathrm{h}
$$

Total:

$$
t=\\dfrac{3}{2}+\\dfrac{4}{3}=\\dfrac{9}{6}+\\dfrac{8}{6}=\\dfrac{17}{6}\\approx 2.833\\ \\mathrm{h}
$$

$$
\\dfrac{17}{6}<3=\\dfrac{18}{6}
$$

because $17<18$. The whole trip really does take strictly less than $3$ hours.

So the statement is True.`,

    `**D.** → True

Domain: every log argument positive, together with $x>1$, forces $x>1$. On that domain

$$
\\log\\bigl((x+2)(x-1)\\bigr)=\\log(3x+5)
$$

$$
(x+2)(x-1)=3x+5
$$

$$
x^{2}+x-2=3x+5\\qquad\\Rightarrow\\qquad x^{2}-2x-7=0
$$

$$
x=\\dfrac{2\\pm\\sqrt{4+28}}{2}=1\\pm\\sqrt{8}=1\\pm 2\\sqrt{2}
$$

Only the positive root can lie in $x>1$:

$$
x=1+2\\sqrt{2}\\approx 1+2\\cdot 1.414=3.828
$$

$$
3.828<4
$$

So the statement is True.`,

    `**E.** → False

Let $a$ be the number of $3$-euro coins and $b$ the number of $7$-euro coins:

$$
a+b=17,\\qquad 3a+7b=79
$$

Substitute $a=17-b$:

$$
3(17-b)+7b=79\\qquad\\Rightarrow\\qquad 51+4b=79\\qquad\\Rightarrow\\qquad 4b=28\\qquad\\Rightarrow\\qquad b=7
$$

There are exactly seven coins of $7$ euros. The claim asks for strictly more than eight:

$$
7\\ngtr 8
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.WORD",
    id: "MATH 4.MOCK.WORD",
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
function buildMathCh6HardIneq() {
  const context = `Each letter is an independent hard inequality.

A radical inequality, a two-absolute sum, a rational inequality with cancellation, a comparison of two absolute values, and a mixed absolute–radical system appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "The solution set of $\\sqrt{2x-1}\\le x-2$ is exactly $[2,+\\infty)$.",
    "The solution set of $|x-3|+|x+1|<8$ is exactly $(-3,5)$.",
    "After cancelling a common factor, the inequality $\\dfrac{x^{2}-16}{x^{2}-x-12}\\le 0$ has solution set exactly $[-4,-3)$.",
    "Every number in the open interval $(1,2)$ satisfies $|3x-1|\\ge |x+4|$.",
    "The system $|x+2|\\le 4$ and $\\sqrt{x+3}\\ge 2$ has exactly two integer solutions.",
  ];

  const answer_key = [false, true, true, false, true];

  const tactical_explanations = [
    `**A.** → False

Domain of the square root:

$$
2x-1\\ge 0\\qquad\\Rightarrow\\qquad x\\ge \\dfrac{1}{2}
$$

A square root is $\\ge 0$, so the right-hand side must be nonnegative:

$$
x-2\\ge 0\\qquad\\Rightarrow\\qquad x\\ge 2
$$

On $x\\ge 2$ squaring preserves the inequality:

$$
2x-1\\le (x-2)^{2}=x^{2}-4x+4
$$

$$
0\\le x^{2}-6x+5=(x-1)(x-5)
$$

So $x\\le 1$ or $x\\ge 5$. Intersect with $x\\ge 2$:

$$
x\\in[5,+\\infty)
$$

The claim says $[2,+\\infty)$. Take $x=3\\ge 2$:

$$
\\sqrt{5}\\approx 2.24,\\qquad 3-2=1
$$

$$
2.24\\nless 1
$$

so $x=3$ is not a solution. The claimed set is wrong.

So the statement is False.`,

    `**B.** → True

The kinks are at $x=-1$ and $x=3$. Split into three pieces.

**Piece 1:** $x\\ge 3$. Then

$$
(x-3)+(x+1)=2x-2<8\\qquad\\Rightarrow\\qquad x<5
$$

so $x\\in[3,5)$.

**Piece 2:** $-1\\le x\\le 3$. Then

$$
(3-x)+(x+1)=4<8
$$

always, so the whole $[-1,3]$ survives.

**Piece 3:** $x<-1$. Then

$$
(3-x)+(-x-1)=2-2x<8\\qquad\\Rightarrow\\qquad x>-3
$$

so $x\\in(-3,-1)$.

Unite:

$$
(-3,-1)\\cup[-1,3]\\cup[3,5)=(-3,5)
$$

That matches the claim exactly.

So the statement is True.`,

    `**C.** → True

Factor:

$$
\\dfrac{x^{2}-16}{x^{2}-x-12}=\\dfrac{(x-4)(x+4)}{(x-4)(x+3)}
$$

Cancel $x-4$ where $x\\ne 4$ (and note $x=-3$ is a pole). For $x\\ne 4$,

$$
\\dfrac{x+4}{x+3}\\le 0
$$

which holds on $[-4,-3)$. The excluded point $x=4$ is not in that interval, so the solution set is exactly $[-4,-3)$.

So the statement is True.`,

    `**D.** → False

Square both sides (both nonnegative):

$$
(3x-1)^{2}\\ge (x+4)^{2}
$$

$$
9x^{2}-6x+1\\ge x^{2}+8x+16
$$

$$
8x^{2}-14x-15\\ge 0
$$

Roots of $8x^{2}-14x-15=0$:

$$
\\Delta=196+480=676=26^{2},\\qquad x=\\dfrac{14\\pm 26}{16}
$$

$$
x=\\dfrac{40}{16}=\\dfrac{5}{2},\\qquad x=\\dfrac{-12}{16}=-\\dfrac{3}{4}
$$

The parabola opens upwards, so it is nonnegative outside the roots:

$$
x\\in\\Bigl(-\\infty,-\\dfrac{3}{4}\\Bigr]\\cup\\Bigl[\\dfrac{5}{2},+\\infty\\Bigr)
$$

The interval $(1,2)$ lies strictly between those roots, so no point of $(1,2)$ satisfies the inequality.

So the statement is False.`,

    `**E.** → True

First inequality:

$$
|x+2|\\le 4\\qquad\\Rightarrow\\qquad -6\\le x\\le 2
$$

Second: $\\sqrt{x+3}\\ge 2$ with domain $x\\ge -3$ forces

$$
x+3\\ge 4\\qquad\\Rightarrow\\qquad x\\ge 1
$$

Intersect:

$$
x\\in[1,2]
$$

The integers in that closed interval are exactly $1$ and $2$ — two of them.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.HARDINEQ",
    id: "MATH 6.MOCK.HARDINEQ",
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


/** Hard paint mixture + break-even — euros kept outside KaTeX math. */
function buildMathCh5Alloy() {
  const context = `A studio blends pure pigment concentrate ($100\\%$ pigment) with a tinting base that is $20\\%$ pigment by mass.

It must produce exactly $80\\ \\mathrm{kg}$ of a mix that is $50\\%$ pigment.

Concentrate costs EUR $12$ per kilogram and base costs EUR $3$ per kilogram.

The finished mix is sold at EUR $7.50$ per kilogram.

Separately, a workshop product has fixed costs EUR $4800$, variable cost EUR $8$ per unit, and selling price EUR $14$ per unit.`;

  const statements = [
    "In the unique blend that meets the mass and pigment-content targets, more than $45\\ \\mathrm{kg}$ of tinting base must be used.",
    "The total material cost of that $80\\ \\mathrm{kg}$ blend is less than EUR 500.",
    "If the entire $80\\ \\mathrm{kg}$ blend is sold at the stated price, the profit on materials alone exceeds EUR 80.",
    "The workshop product’s break-even output is fewer than $700$ units.",
    "If fixed costs rise by $25\\%$ and the contribution margin per unit is unchanged, break-even output rises by exactly $25\\%$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Let $x$ be kilograms of concentrate and $y$ kilograms of base:

$$
x+y=80
$$

Pigment balance ($50\\%$ of $80$ is $40$):

$$
x+0.2y=40
$$

Substitute $x=80-y$:

$$
(80-y)+0.2y=40\\qquad\\Rightarrow\\qquad 80-0.8y=40\\qquad\\Rightarrow\\qquad y=50
$$

Then $x=30$. Base mass is $50\\ \\mathrm{kg}$:

$$
50>45
$$

So the statement is True.`,

    `**B.** → False

Material cost uses concentrate at EUR $12$ and base at EUR $3$:

$$
\\text{cost}=30\\cdot 12+50\\cdot 3=360+150=510
$$

The claim says the cost is less than EUR $500$. But

$$
510\\nless 500
$$

So the statement is False.`,

    `**C.** → True

Revenue from selling all $80\\ \\mathrm{kg}$ at EUR $7.50$ per kg:

$$
\\text{revenue}=80\\cdot 7.50=600
$$

Profit on materials alone:

$$
600-510=90>80
$$

So the statement is True.`,

    `**D.** → False

Contribution margin per unit:

$$
14-8=6
$$

Break-even:

$$
Q_{\\mathrm{BE}}=\\dfrac{4800}{6}=800
$$

The claim says fewer than $700$ units:

$$
800\\nless 700
$$

So the statement is False.`,

    `**E.** → True

Write $Q=F/m$. After a $25\\%$ rise in fixed cost,

$$
Q'=\\dfrac{1.25F}{m}=1.25\\,Q
$$

That is exactly a $25\\%$ increase. Numerically $Q'=1.25\\cdot 800=1000$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.ALLOY",
    id: "MATH 5.MOCK.ALLOY",
    title: "Paint pigment blend and a break-even shift",
    chapter: 5,
    subsection: "5.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve the pigment blend, price materials using euro amounts written outside math mode, then compare break-even before and after a proportional fixed-cost shock.",
  };
}


/** Real-case logic — overview owns the truth table; each letter has its own teacher solve. */
function buildMathCh1Crew() {
  const truthTable = `**Truth table of valid night-ferry crews.**

Write $K,L,M,N,O,P$ for Kai, Lea, Mo, Noa, Oli, Paz. Encode each rule, then list every $0/1$ assignment that survives all seven constraints. Size is $K+L+M+N+O+P$.

How the table is built:

1. Start from candidate bits and apply $K\\Leftrightarrow L$ (Kai and Lea must match).
2. Enforce $M\\Rightarrow N$ and the exclusive-or on $(N,O)$.
3. Enforce $O\\Rightarrow\\neg P$, $P\\lor K$, and $L\\Rightarrow\\neg M$.
4. Drop any row whose size is strictly less than $3$.
5. Keep only the surviving rows — those are the valid crews.

| $K$ | $L$ | $M$ | $N$ | $O$ | $P$ | Size | Valid? |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| 1 | 1 | 0 | 1 | 0 | 0 | 3 | yes |
| 1 | 1 | 0 | 1 | 0 | 1 | 4 | yes |
| 1 | 1 | 0 | 0 | 1 | 0 | 3 | yes |
| 0 | 0 | 1 | 1 | 0 | 1 | 3 | yes |
| 1 | 1 | 1 | 1 | 0 | 0 | — | no ($L\\Rightarrow\\neg M$ fails) |
| 0 | 0 | 0 | 1 | 0 | 1 | 2 | no (size $<3$) |
| 0 | 0 | 0 | 0 | 1 | 1 | — | no ($O\\Rightarrow\\neg P$ fails) |
| 1 | 1 | 0 | 1 | 1 | 0 | — | no (exclusive-or on $N,O$ fails) |

Exactly four valid crews appear: $\\{K,L,N\\}$, $\\{K,L,N,P\\}$, $\\{K,L,O\\}$, and $\\{M,N,P\\}$.`;

  const context = `Six sailors — Kai, Lea, Mo, Noa, Oli, and Paz — are considered for a night-ferry bridge crew.

Kai is assigned if and only if Lea is assigned.

If Mo is assigned, then Noa is assigned.

Exactly one of Noa or Oli is assigned (never both, never neither).

If Oli is assigned, then Paz is not assigned.

At least one of Paz or Kai is assigned.

Lea is assigned only if Mo is not assigned.

At least three of the six sailors are assigned.`;

  const statements = [
    "Kai must appear on every crew that obeys all seven rules.",
    "It is possible to build a valid crew that includes both Mo and Oli.",
    "If Lea is assigned, then Mo cannot be assigned.",
    "There is exactly one valid crew of size three that does not include Kai.",
    "It is possible for all six sailors to be assigned at once.",
  ];

  const answer_key = [false, false, true, true, false];

  const tactical_explanations = [
    `**A.** → False

The claim says Kai is on every valid crew. Try to build a valid crew with Kai out.

Assume $K=0$. Rule (1) forces Lea out as well:

$$
K=0\\qquad\\Rightarrow\\qquad L=0
$$

Rule (5) is $P\\lor K$. With Kai out, Paz must enter:

$$
P=1
$$

Rule (6) is idle because Lea is out. Rule (3) forces exactly one of Noa or Oli.

**Case Noa in, Oli out** ($N=1$, $O=0$). Rule (4) is idle. Rule (2) allows Mo in. Taking $M=1$ gives

$$
\\{M,N,P\\}
$$

Size $3$, so rule (7) holds. Every rule is satisfied, and Kai is absent.

**Case Oli in, Noa out** ($N=0$, $O=1$). Rule (4) forces $P=0$, which contradicts $P=1$ already required by rule (5). This branch dies.

So Kai-out is possible via $\\{M,N,P\\}$. That roster is a concrete counter-example.

So the statement is False.`,

    `**B.** → False

Force $M=1$ and $O=1$ together and chase the consequences.

Rule (2) is $M\\Rightarrow N$, so Noa must enter:

$$
M=1\\qquad\\Rightarrow\\qquad N=1
$$

Rule (3) is the exclusive-or on Noa and Oli. Putting both $N=1$ and $O=1$ immediately breaks that exclusive-or.

No repair of the other bits can save the row. A valid crew cannot contain both Mo and Oli.

So the statement is False.`,

    `**C.** → True

The stem says “Lea is assigned only if Mo is not assigned.” In symbols that is

$$
L\\Rightarrow\\neg M
$$

which is exactly the claim: if Lea is assigned, then Mo cannot be assigned.

Check against the valid crews from the overview. Every crew with Lea ($\\{K,L,N\\}$, $\\{K,L,N,P\\}$, $\\{K,L,O\\}$) has $M=0$. The remaining valid crew $\\{M,N,P\\}$ has $L=0$, so the implication is idle there. No valid row ever has $L=M=1$ together.

So the statement is True.`,

    `**D.** → True

From the overview there are four valid crews:

$$
\\{K,L,N\\}\\ (\\text{size }3),\\quad \\{K,L,N,P\\}\\ (\\text{size }4),\\quad \\{K,L,O\\}\\ (\\text{size }3),\\quad \\{M,N,P\\}\\ (\\text{size }3)
$$

Among the size-three crews, only $\\{M,N,P\\}$ excludes Kai. The other two size-three survivors both contain Kai. Therefore there is exactly one valid size-three crew without Kai.

So the statement is True.`,

    `**E.** → False

A crew of all six would require

$$
K=L=M=N=O=P=1
$$

Rule (3) says exactly one of Noa or Oli is assigned. Putting both $N=1$ and $O=1$ breaks that exclusive-or at once.

Even dropping one person cannot rescue a six-person roster. The overview’s largest valid size is $4$. Size six never appears.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 1.MOCK.CREW",
    id: "MATH 1.MOCK.CREW",
    title: "Night-ferry bridge crew — six sailors and seven rules",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Part 1: Setup.**

Write $K,L,M,N,O,P$ for Kai, Lea, Mo, Noa, Oli, Paz. The stem is

$$
(1)\\ K\\Leftrightarrow L,\\qquad (2)\\ M\\Rightarrow N,\\qquad (3)\\ (N\\land\\neg O)\\lor(\\neg N\\land O),
$$

$$
(4)\\ O\\Rightarrow\\neg P,\\qquad (5)\\ P\\lor K,\\qquad (6)\\ L\\Rightarrow\\neg M,
$$

and (7) size at least three.

"$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Shared forcing (used by every letter).**

Apply the biconditional and exclusive-or first, then the implications, then the size filter.

- If Kai is in, Lea is in and Mo is out; the exclusive-or then splits into Noa-in / Oli-out (Paz free) or Oli-in / Noa-out (Paz out). Survivors include $\\{K,L,N\\}$, $\\{K,L,N,P\\}$, and $\\{K,L,O\\}$.
- If Kai is out, Lea is out and Paz is in; Mo-in with Noa-in / Oli-out gives the fourth survivor $\\{M,N,P\\}$.
- Mo-in with Oli-in always collapses on the exclusive-or (see letter B).

Only four rows survive.

${truthTable}`,
  };
}


/** Multi-step algebra — threshold claims; structured stem. */
function buildMathCh2Thresh() {
  const context = `Each claim below is an independent elementary-algebra check.

Nested fractions, a $2\\times 2$ linear system, a polynomial product, a rational equation, and a radical equation appear in turn.

Decide whether each statement is true or false. The claims give thresholds, not boxed final values.`;

  const statements = [
    "For $x=3$, the nested quotient $\\dfrac{\\frac{4}{x}-\\frac{1}{x-1}}{\\frac{2}{x}+\\frac{1}{x-1}}$ is strictly smaller than $0.5$.",
    "The unique solution of the system $4a+3b=10$, $5a-2b=7$ satisfies $a+b>2$.",
    "The value of $\\dfrac{(x^{3}-2x+4)(2x+1)}{x^{2}+x-2}$ at $x=2$ is strictly larger than $10$.",
    "Over the reals with $x\\ne\\pm 1$, every solution of $\\dfrac{2}{x-1}-\\dfrac{1}{x+1}=\\dfrac{3}{x^{2}-1}$ is strictly smaller than $0$.",
    "The positive solution of $\\sqrt{3x+1}-\\sqrt{x}=1$ is strictly larger than $3$.",
  ];

  const answer_key = [false, true, false, false, false];

  const tactical_explanations = [
    `**A.** → False

Substitute $x=3$.

Numerator:

$$
\\dfrac{4}{3}-\\dfrac{1}{2}=\\dfrac{8-3}{6}=\\dfrac{5}{6}
$$

Denominator:

$$
\\dfrac{2}{3}+\\dfrac{1}{2}=\\dfrac{4+3}{6}=\\dfrac{7}{6}
$$

Quotient:

$$
\\dfrac{5/6}{7/6}=\\dfrac{5}{7}\\approx 0.714
$$

$$
0.714\\nless 0.5
$$

So the statement is False.`,

    `**B.** → True

From $5a-2b=7$,

$$
b=\\dfrac{5a-7}{2}
$$

Substitute into $4a+3b=10$:

$$
4a+3\\cdot\\dfrac{5a-7}{2}=10
$$

Multiply through by $2$:

$$
8a+3(5a-7)=20\\qquad\\Rightarrow\\qquad 8a+15a-21=20\\qquad\\Rightarrow\\qquad 23a=41
$$

$$
a=\\dfrac{41}{23},\\qquad b=\\dfrac{5\\cdot\\frac{41}{23}-7}{2}=\\dfrac{\\frac{205-161}{23}}{2}=\\dfrac{44}{46}=\\dfrac{22}{23}
$$

Sum:

$$
a+b=\\dfrac{63}{23}\\approx 2.739>2
$$

So the statement is True.`,

    `**C.** → False

At $x=2$:

$$
x^{3}-2x+4=8-4+4=8,\\qquad 2x+1=5
$$

Numerator product $8\\cdot 5=40$. Denominator:

$$
x^{2}+x-2=4+2-2=4
$$

$$
\\dfrac{40}{4}=10
$$

The claim asks for a value strictly larger than $10$:

$$
10\\ngtr 10
$$

So the statement is False.`,

    `**D.** → False

Combine the left-hand side over $x^{2}-1$:

$$
\\dfrac{2}{x-1}-\\dfrac{1}{x+1}=\\dfrac{2(x+1)-(x-1)}{x^{2}-1}=\\dfrac{x+3}{x^{2}-1}
$$

The equation becomes

$$
\\dfrac{x+3}{x^{2}-1}=\\dfrac{3}{x^{2}-1}\\qquad(x\\ne\\pm 1)
$$

$$
x+3=3\\qquad\\Rightarrow\\qquad x=0
$$

The unique admissible root is $x=0$, which is not strictly smaller than $0$.

So the statement is False.`,

    `**E.** → False

Isolate one radical:

$$
\\sqrt{3x+1}=1+\\sqrt{x}
$$

Both sides are nonnegative for $x\\ge 0$. Square:

$$
3x+1=1+2\\sqrt{x}+x
$$

$$
2x=2\\sqrt{x}\\qquad\\Rightarrow\\qquad x=\\sqrt{x}
$$

Let $u=\\sqrt{x}\\ge 0$. Then $u^{2}=u$, so $u=0$ or $u=1$, hence $x=0$ or $x=1$. The positive solution is $x=1$. Check:

$$
\\sqrt{4}-\\sqrt{1}=2-1=1
$$

$$
1\\ngtr 3
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.THRESH",
    id: "MATH 2.MOCK.THRESH",
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
function buildMathCh7Para() {
  const context = `A parabola is given by

$$
g(x)=2x^{2}-8x-10
$$

Lines through its vertex form the family

$$
f_{m}(x)=m(x-2)-18
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The product of the two roots of $g(x)=0$ is strictly smaller than $-4$.",
    "Completing the square shows that the minimum value of $g$ is strictly less than $-15$.",
    "When $m=6$, the second intersection (other than the vertex) lies strictly between $x=4$ and $x=6$.",
    "There is more than one real slope $m$ for which $y=f_{m}$ meets $y=g$ at exactly one point.",
    "When $m=-10$, the distance between the two intersection $x$-coordinates exceeds $4$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Solve $g(x)=0$:

$$
2x^{2}-8x-10=0\\qquad\\Rightarrow\\qquad x^{2}-4x-5=0
$$

$$
(x-5)(x+1)=0
$$

The roots are $x=5$ and $x=-1$. Their product is

$$
5\\cdot(-1)=-5<-4
$$

(Alternatively, by Vieta on $x^{2}-4x-5=0$ the product of roots is the constant term $-5$.)

So the statement is True.`,

    `**B.** → True

Complete the square:

$$
g(x)=2\\bigl(x^{2}-4x\\bigr)-10=2\\bigl((x-2)^{2}-4\\bigr)-10
$$

$$
=2(x-2)^{2}-8-10=2(x-2)^{2}-18
$$

The square term is always $\\ge 0$, so the minimum value is $-18$, attained at $x=2$:

$$
-18<-15
$$

So the statement is True.`,

    `**C.** → True

Form the difference:

$$
g(x)-f_{m}(x)=2(x-2)^{2}-18-\\bigl(m(x-2)-18\\bigr)
$$

$$
=2(x-2)^{2}-m(x-2)=(x-2)\\bigl(2(x-2)-m\\bigr)
$$

The intersection $x$-coordinates are therefore $x=2$ (the vertex) and

$$
x=2+\\dfrac{m}{2}
$$

For $m=6$,

$$
x=2+3=5
$$

and $4<5<6$, so the second intersection lies strictly between $4$ and $6$.

So the statement is True.`,

    `**D.** → False

From the factorisation in C, the intersection abscissae coincide precisely when

$$
\\dfrac{m}{2}=0\\qquad\\Rightarrow\\qquad m=0
$$

For every other real slope the graphs meet at two points. Therefore there is exactly one real slope giving a single common point — namely $m=0$ — and not more than one.

So the statement is False.`,

    `**E.** → True

When $m=-10$ the two intersection $x$-coordinates are the vertex $x=2$ and

$$
x=2+\\dfrac{-10}{2}=2-5=-3
$$

Distance:

$$
\\bigl|2-(-3)\\bigr|=5>4
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.PARA",
    id: "MATH 7.MOCK.PARA",
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
function buildMathCh8Cap() {
  const context = `Warehouse throughput follows

$$
C(w)=A\\,w^{2/3}\\qquad(w>0)
$$

with unknown $A>0$. Engineering fixes the two-thirds exponent; only the scale $A$ must be read from data.

One calibration run: at $w=8$ dock-hours the measured throughput is $24$.

Each unit of throughput earns EUR $5$, and each dock-hour costs EUR $4$.

Profit is $\\pi(w)=5\\,C(w)-4w$.`;

  const statements = [
    "Doubling dock-hours multiplies throughput by more than $1.5$.",
    "The profit-maximising dock-hour level exceeds $100$.",
    "At that profit-maximising level, throughput already exceeds $160$.",
    "At the interior profit maximum, marginal revenue from an extra dock-hour equals the EUR $4$ marginal cost.",
    "Moving from the profit-maximising level to twice that many dock-hours cuts profit by more than half.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Write throughput at $w$ and at $2w$:

$$
C(w)=A w^{2/3},\\qquad C(2w)=A(2w)^{2/3}=A\\,2^{2/3}\\,w^{2/3}
$$

The multiplication factor is

$$
\\dfrac{C(2w)}{C(w)}=2^{2/3}
$$

The unknown scale $A$ cancels. Numerically

$$
2^{2/3}\\approx 1.587>1.5
$$

So the statement is True.`,

    `**B.** → True

Recover $A$ from $C(8)=24$:

$$
A\\cdot 8^{2/3}=24\\qquad\\Rightarrow\\qquad A\\cdot 4=24\\qquad\\Rightarrow\\qquad A=6
$$

Throughput is $C(w)=6\\,w^{2/3}$. Profit becomes

$$
\\pi(w)=5\\cdot 6\\,w^{2/3}-4w=30\\,w^{2/3}-4w
$$

Differentiate:

$$
\\pi'(w)=30\\cdot\\dfrac{2}{3}w^{-1/3}-4=20\\,w^{-1/3}-4
$$

Set the derivative to zero:

$$
\\dfrac{20}{w^{1/3}}=4\\qquad\\Rightarrow\\qquad w^{1/3}=5\\qquad\\Rightarrow\\qquad w=125
$$

The second derivative $\\pi''(w)=-\\dfrac{20}{3}w^{-4/3}<0$ for every $w>0$, so $w=125$ is a maximum:

$$
125>100
$$

So the statement is True.`,

    `**C.** → False

At $w=125$ with $C(w)=6\\,w^{2/3}$:

$$
C(125)=6\\cdot 125^{2/3}=6\\cdot 25=150
$$

$$
150\\ngtr 160
$$

So the statement is False.`,

    `**D.** → True

Profit is $\\pi(w)=5\\,C(w)-4w$, so

$$
\\pi'(w)=5\\,C'(w)-4
$$

Here $5\\,C'(w)$ is the marginal revenue earned by one extra dock-hour, and $4$ is the EUR $4$ marginal cost. An interior maximum requires $\\pi'(w)=0$, which rearranges to

$$
5\\,C'(w)=4
$$

That is exactly the first-order condition used in B. At the maximiser, marginal revenue equals marginal cost.

So the statement is True.`,

    `**E.** → False

Evaluate profit at the optimum and at twice that level:

$$
\\pi(125)=30\\cdot 25-4\\cdot 125=750-500=250
$$

$$
\\pi(250)=30\\cdot 250^{2/3}-4\\cdot 250
$$

Since $250=125\\cdot 2$, one has $250^{2/3}=25\\cdot 2^{2/3}$, so

$$
\\pi(250)=30\\cdot 25\\cdot 2^{2/3}-1000=750\\cdot 2^{2/3}-1000
$$

$$
\\approx 750\\cdot 1.587-1000\\approx 1190-1000=190
$$

Relative to $250$, profit falls to about $190/250=0.76$, a cut of roughly $24\\%$, not more than half.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.CAP",
    id: "MATH 8.MOCK.CAP",
    title: "Two-thirds power throughput — one known exponent, one calibration",
    chapter: 8,
    subsection: "8.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Keep the two-thirds exponent fixed, recover $A$ from $C(8)=24$, form $\\pi(w)=30 w^{2/3}-4w$, solve $\\pi'=0$, then adjudicate ratio, throughput, FOC, and a counterfactual profit comparison.",
  };
}


/** Heavy-calc cubic — many derivative/evaluation steps. */
function buildMathCh9Shift() {
  const context = `A packing line’s short-run output rate (units per hour) is

$$
p(t)=t^{3}-7t^{2}+14t-8
$$

The shift window is $0\\le t\\le 6$, with $t$ in hours.

Decide whether each statement is true or false.`;

  const statements = [
    "The product of the three real roots of $p(t)=0$ (allowing roots outside the shift window) is strictly positive.",
    "On the open interval between the two critical points, the output rate is strictly decreasing.",
    "At $t=2$, the instantaneous slope $p'(2)$ is strictly less than $-1$.",
    "The larger critical abscissa exceeds $3.1$, and the output rate there is strictly negative.",
    "Over the closed shift $[0,6]$, the highest output rate exceeds $45$.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Look for an obvious rational root of $p(t)=t^{3}-7t^{2}+14t-8$. Try $t=1$:

$$
1-7+14-8=0
$$

so $t-1$ is a factor. Polynomial division gives

$$
p(t)=(t-1)(t^{2}-6t+8)=(t-1)(t-2)(t-4)
$$

The three real roots are $1$, $2$, and $4$. Their product is

$$
1\\cdot 2\\cdot 4=8>0
$$

Alternatively, for a monic cubic $t^{3}+at^{2}+bt+c=0$ Vieta says the product of roots equals $-c$. Here $c=-8$, so the product is $8$.

So the statement is True.`,

    `**B.** → True

Differentiate:

$$
p'(t)=3t^{2}-14t+14
$$

Discriminant:

$$
\\Delta=(-14)^{2}-4\\cdot 3\\cdot 14=196-168=28=4\\cdot 7
$$

so there are two distinct real critical points

$$
t=\\dfrac{14\\pm\\sqrt{28}}{6}=\\dfrac{14\\pm 2\\sqrt{7}}{6}=\\dfrac{7\\pm\\sqrt{7}}{3}
$$

Because the leading coefficient of $p'$ is positive, $p'(t)<0$ strictly between the two roots. Therefore on that open interval the output rate $p$ is strictly decreasing.

So the statement is True.`,

    `**C.** → True

From B, $p'(t)=3t^{2}-14t+14$. At $t=2$:

$$
p'(2)=3\\cdot 4-14\\cdot 2+14=12-28+14=-2
$$

$$
-2<-1
$$

So the statement is True.`,

    `**D.** → True

The larger critical abscissa is

$$
t_{+}=\\dfrac{7+\\sqrt{7}}{3}
$$

Since $\\sqrt{7}\\approx 2.646$,

$$
t_{+}\\approx\\dfrac{7+2.646}{3}=\\dfrac{9.646}{3}\\approx 3.215>3.1
$$

This critical point lies between the roots $2$ and $4$ of $p$. On $(2,4)$ the factorisation $p(t)=(t-1)(t-2)(t-4)$ has

$$
t-1>0,\\qquad t-2>0,\\qquad t-4<0
$$

so the product is negative. In particular $p(t_{+})<0$.

So the statement is True.`,

    `**E.** → False

Evaluate the endpoints:

$$
p(0)=-8,\\qquad p(6)=216-252+84-8=40
$$

The local maximum on $(0,6)$ is at the smaller critical point

$$
t_{-}=\\dfrac{7-\\sqrt{7}}{3}\\approx\\dfrac{7-2.646}{3}\\approx 1.451
$$

Numerically $p(t_{-})\\approx 1.05$, well below the right endpoint. The local minimum at $t_{+}$ is negative. Therefore the highest output rate on $[0,6]$ is $p(6)=40$, which does not exceed $45$:

$$
40\\ngtr 45
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.SHIFT",
    id: "MATH 9.MOCK.SHIFT",
    title: "Packing-line cubic — roots, critical values, multi-step checks",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Factor or use Vieta, solve $p'=0$, evaluate slopes and local values, then compare the global maximum on $[0,6]$ with a threshold.",
  };
}


/** Exp/log — population growth and force of interest (not isotope decay). */
function buildMathCh10Force() {
  const context = `A city population grows continuously according to

$$
P(t)=P_{0}e^{kt}
$$

At $t=0$ the population is $1200$, and at $t=4$ years it is $1800$.

Separately, a continuously compounded savings account follows

$$
A(t)=2000\\,e^{\\delta t}
$$

It opens at EUR $2000$ and stands at EUR $3200$ after $8$ years.

Decide whether each statement is true or false.`;

  const statements = [
    "The continuous growth rate satisfies $k>0.095$.",
    "The time needed for the population to double is strictly less than $7$ years.",
    "After $8$ years the population is still strictly above $2700$.",
    "The account’s continuous force of interest satisfies $\\delta>0.06$.",
    "The account first reaches EUR $5000$ at some time $t>15$ years.",
  ];

  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

The growth law is $P(t)=P_{0}e^{kt}$ with $P_{0}=1200$. At $t=4$,

$$
1200\\,e^{4k}=1800\\qquad\\Rightarrow\\qquad e^{4k}=\\dfrac{3}{2}
$$

$$
4k=\\ln\\dfrac{3}{2}\\qquad\\Rightarrow\\qquad k=\\dfrac{\\ln 1.5}{4}
$$

Since $\\ln 1.5\\approx 0.4055$,

$$
k\\approx\\dfrac{0.4055}{4}\\approx 0.1014>0.095
$$

So the statement is True.`,

    `**B.** → True

Doubling time $T$ satisfies $e^{kT}=2$, so

$$
T=\\dfrac{\\ln 2}{k}
$$

Using $k\\approx 0.1014$ and $\\ln 2\\approx 0.6931$,

$$
T\\approx\\dfrac{0.6931}{0.1014}\\approx 6.84\\ \\mathrm{years}<7
$$

So the statement is True.`,

    `**C.** → False

After $8=2\\cdot 4$ years the population multiplies twice by the four-year factor $3/2$:

$$
P(8)=1200\\left(\\dfrac{3}{2}\\right)^{2}=1200\\cdot\\dfrac{9}{4}=2700
$$

The claim asks for a population strictly above $2700$:

$$
2700\\ngtr 2700
$$

So the statement is False.`,

    `**D.** → False

The account satisfies $A(8)=2000\\,e^{8\\delta}=3200$. Divide by $2000$:

$$
e^{8\\delta}=\\dfrac{3200}{2000}=1.6
$$

$$
\\delta=\\dfrac{\\ln 1.6}{8}
$$

Since $\\ln 1.6\\approx 0.4700$,

$$
\\delta\\approx\\dfrac{0.4700}{8}\\approx 0.0588
$$

$$
0.0588\\ngtr 0.06
$$

So the statement is False.`,

    `**E.** → True

Solve $A(t)=5000$:

$$
2000\\,e^{\\delta t}=5000\\qquad\\Rightarrow\\qquad e^{\\delta t}=2.5
$$

$$
t=\\dfrac{\\ln 2.5}{\\delta}
$$

Using $\\delta\\approx 0.0588$ and $\\ln 2.5\\approx 0.9163$,

$$
t\\approx\\dfrac{0.9163}{0.0588}\\approx 15.58>15
$$

So the account first reaches EUR $5000$ after more than $15$ years.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.FORCE",
    id: "MATH 10.MOCK.FORCE",
    title: "Population growth and continuous force of interest",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Read $P(0)=1200$, $P(4)=1800$ into $P(t)=P_0 e^{kt}$ and $A(0)=2000$, $A(8)=3200$ into $A(t)=2000 e^{\\delta t}$, then adjudicate the five thresholds.",
  };
}


/** Long log-product derivative — max/min without spoon-feeding f'. */
function buildMathCh11ProdLog() {
  const context = `For $x>0$ define

$$
f(x)=(x^{2}+1)\\ln(x+2)\\,e^{-x}
$$

The claims concern critical points and max/min behaviour.

Decide whether each statement is true or false.`;

  const statements = [
    "The function $f$ has a critical point in the open interval $(0.5,2.5)$.",
    "That critical point in $(0.5,2.5)$ is a local minimum of $f$.",
    "The value $f(1)$ is strictly greater than $0.7$.",
    "Just after $x=3$, the function $f$ is still decreasing.",
    "On the whole half-line $(0,\\infty)$, $f$ is strictly increasing.",
  ];

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Write $f$ as a product of three positive factors on $x>0$:

$$
f(x)=(x^{2}+1)\\cdot\\ln(x+2)\\cdot e^{-x}
$$

(For $x>0$ one has $x+2>2$, so $\\ln(x+2)>0$.) Logarithmic differentiation gives

$$
\\dfrac{f'(x)}{f(x)}=\\dfrac{2x}{x^{2}+1}+\\dfrac{1}{(x+2)\\ln(x+2)}-1
$$

Evaluate at the endpoints of the claimed interval.

At $x=0.5$:

$$
\\dfrac{2\\cdot 0.5}{0.25+1}=\\dfrac{1}{1.25}=0.8
$$

$$
\\dfrac{1}{2.5\\cdot\\ln 2.5},\\qquad \\ln 2.5\\approx 0.9163\\qquad\\Rightarrow\\qquad \\dfrac{1}{2.5\\cdot 0.9163}\\approx 0.437
$$

$$
0.8+0.437-1\\approx 0.237>0
$$

At $x=2.5$:

$$
\\dfrac{2\\cdot 2.5}{6.25+1}=\\dfrac{5}{7.25}\\approx 0.690
$$

$$
\\dfrac{1}{4.5\\cdot\\ln 4.5},\\qquad \\ln 4.5\\approx 1.504\\qquad\\Rightarrow\\qquad \\dfrac{1}{4.5\\cdot 1.504}\\approx 0.148
$$

$$
0.690+0.148-1\\approx -0.162<0
$$

Since $f>0$, the sign of $f'$ matches the sign of $f'/f$. By the intermediate-value theorem, $f'/f$ (hence $f'$) has a zero in $(0.5,2.5)$.

So the statement is True.`,

    `**B.** → False

From A, the logarithmic derivative is positive at $x=0.5$ and negative at $x=2.5$. Crossing a simple zero of $f'$ from $+$ to $-$ means $f$ itself changes from increasing to decreasing. That is a local maximum, not a local minimum.

So the statement is False.`,

    `**C.** → True

Substitute $x=1$:

$$
f(1)=(1+1)\\ln 3\\,e^{-1}=\\dfrac{2\\ln 3}{e}
$$

Use $\\ln 3\\approx 1.0986$ and $e\\approx 2.7183$:

$$
f(1)\\approx\\dfrac{2\\cdot 1.0986}{2.7183}\\approx\\dfrac{2.197}{2.7183}\\approx 0.808>0.7
$$

So the statement is True.`,

    `**D.** → True

Evaluate the logarithmic derivative from A at $x=3$:

$$
\\dfrac{2\\cdot 3}{9+1}=\\dfrac{6}{10}=0.6
$$

$$
\\dfrac{1}{5\\cdot\\ln 5},\\qquad \\ln 5\\approx 1.6094\\qquad\\Rightarrow\\qquad \\dfrac{1}{5\\cdot 1.6094}\\approx 0.124
$$

$$
0.6+0.124-1=-0.276<0
$$

Also $f(3)=(9+1)\\ln 5\\,e^{-3}>0$. Therefore $f'(3)<0$, so just after $x=3$ the function is still decreasing.

So the statement is True.`,

    `**E.** → False

A function that is strictly increasing on the whole half-line $(0,\\infty)$ cannot have an interior local maximum. But A–B show that $f$ has a local maximum in $(0.5,2.5)$. On the left of that point $f$ increases; on the right it decreases for a while (as confirmed at $x=3$ in D). Hence $f$ is not strictly increasing on all of $(0,\\infty)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 11.MOCK.PRODLOG",
    id: "MATH 11.MOCK.PRODLOG",
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
  mapEcon(byId(2, "CASE 2.6.14")),
  mapEcon(byId(2, "CASE 2.3.11")),
  mapEcon(byId(3, "CASE 3.2.11")),
  mapEcon(byId(3, "CASE 3.4.03")),
  mapEcon(byId(4, "CASE 4.3.49")),
  mapEcon(byId(4, "CASE 4.5.02")),
  mapEcon(byId(5, "CASE 5.4.14")),
  mapEcon(byId(6, "CASE 6.5.013")),
  mapEcon(byId(6, "CASE 6.2.013")),
  buildCvpBreakEvenCase(),
];

const english = buildEnglish();

const allMath = await loadAllMathChapterTasks();
function takeMath(caseId: string, chapter: number) {
  const chapterBank = allMath.find((c) => c.num === chapter);
  if (!chapterBank) throw new Error(`Missing math chapter ${chapter}`);
  const t = chapterBank.tasks.find((x) => x.case_id === caseId);
  if (!t) throw new Error(`Missing math ${caseId} in chapter ${chapter}`);
  const mapped = mapMath(chapter, t as unknown as Record<string, unknown>);
  if (caseId === "MATH 11.112") {
    // Match literal backslash-dollar (\$) in bank KaTeX / prose, then rewrite as USD.
    const fix = (s: string) => s.replace(/\\\$/g, "USD ");
    mapped.context = `A hospital system is negotiating the purchase of a new imaging center and equipment package, and is choosing among three payment schedules.

Schedule I: pay USD 850,000 in cash immediately.

Schedule II: pay USD 140,000 per year for 9 years, with the first instalment paid immediately.

Schedule III: pay USD 300,000 in cash immediately, plus USD 80,000 per year for 11 years, with the first of these instalments paid one year later.

The hospital wants to know which schedule is cheapest in present-value terms at the stated annual discount rates.

Decide whether each statement is true or false.`;
    mapped.statements = (mapped.statements as string[]).map(fix);
    mapped.tactical_explanations = (mapped.tactical_explanations as string[]).map(fix);
    if (mapped.solution_overview) mapped.solution_overview = fix(String(mapped.solution_overview));
    mapped.title = "Hospital imaging schedules — present-value comparisons";
  }
  if (caseId === "MATH 12.25") {
    mapped.context = `At a friend's poker night, the host shuffles a standard, well-mixed 52-card deck and deals a 5-card poker hand uniformly at random (order within the hand does not matter).

Decide whether each probability claim is true or false.`;
    mapped.title = "Poker hand probabilities from a shuffled deck";
  }
  if (caseId === "MATH 13.18") {
    mapped.context = `Two sales reps each make $25$ independent calls in a day. Rep A is new (probability $0.30$ of converting a call into a sale). Rep B is experienced (probability $0.68$).

A “strong day” means more than half of the $25$ calls convert — that is, at least $13$ sales. Calls are independent within and across reps.

Decide whether each statement is true or false.`;
    mapped.title = "Sales-call binomial — strong-day thresholds";
  }
  return mapped;
}

const math = [
  buildMathCh1Crew(),
  buildMathCh2Thresh(),
  takeMath("MATH 11.112", 3),
  buildMathCh4Word(),
  buildMathCh5Alloy(),
  buildMathCh6HardIneq(),
  buildMathCh7Para(),
  buildMathCh8Cap(),
  buildMathCh9Shift(),
  buildMathCh10Force(),
  buildMathCh11ProdLog(),
  takeMath("MATH 12.25", 12),
  takeMath("MATH 13.18", 13),
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
