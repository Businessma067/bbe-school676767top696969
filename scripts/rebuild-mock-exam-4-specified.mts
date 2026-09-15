/**
 * Rebuild Mock Exam 4 — CVP econ + Glacier English + NON-ISOMORPHIC math vs M1–M3.
 * Order: economics → english (Doomsday Glacier T.12) → math.
 * Keep economics (CVP + bank) and English Glacier T.12 unchanged.
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

/** Ch1 LOGIC — three knights/knaves with nested claims (NOT roster/XOR/size≥3). */
function buildMathCh1Liars() {
  const truthTable = `**Consistent type-assignments (truth-teller = T, liar = L).**

Write $Q,R,S$ for Quinn, Remy, Sage. Encode the three spoken claims, then keep only the $0/1$ type rows that make every speaker’s sentence evaluate correctly under that speaker’s type.

How the table is built:

1. Treat “truth-teller” as bit $1$ and “liar” as bit $0$.
2. Quinn’s sentence is true precisely when Remy is a liar.
3. Remy’s sentence is true precisely when the number of truth-tellers equals $2$.
4. Sage’s sentence is the biconditional “Quinn is a truth-teller $\\Leftrightarrow$ Sage is a liar.”
5. A row survives only if each speaker’s sentence truth-value matches that speaker’s type.

| $Q$ | $R$ | $S$ | Quinn’s sentence | Remy’s sentence | Sage’s sentence | Valid? |
| --- | --- | --- | --- | --- | --- | --- |
| T | L | L | true | false | true | yes |
| L | T | T | false | true | false | yes |
| T | T | L | false | false | false | no |
| L | L | T | true | false | true | no |
| T | L | T | true | false | false | no |
| L | T | L | false | false | true | no |

Exactly two consistent worlds survive: $(Q,R,S)=(T,L,L)$ and $(L,T,T)$.`;

  const context = `Three analysts — Quinn, Remy, and Sage — each make one statement about the group. Every analyst is either a truth-teller (every sentence true) or a liar (every sentence false). Exactly one of those two types applies to each person.

Quinn says: “Remy is a liar.”

Remy says: “Exactly two of us are truth-tellers.”

Sage says: “Quinn is a truth-teller if and only if I am a liar.”

Decide whether each claim about the possible type-assignments is true or false.`;

  const statements = [
    "Quinn must be a truth-teller in every consistent type-assignment.",
    "In every consistent type-assignment, Remy and Sage are the same type.",
    "It is possible that all three analysts are liars.",
    "If Sage is a truth-teller, then Quinn is a liar.",
    "There are exactly two consistent type-assignments for the trio.",
  ];

  const answer_key = [false, true, false, true, true];

  const tactical_explanations = [
    `**A.** → False

Assume Quinn is a liar and check whether a full consistent world still exists.

If Quinn is a liar, the sentence “Remy is a liar” is false, so Remy is a truth-teller. Remy’s sentence “exactly two truth-tellers” is therefore true, so the trio has exactly two truth-tellers. Sage’s biconditional “Quinn is a truth-teller $\\Leftrightarrow$ Sage is a liar” must then be false (because Sage must be the other truth-teller to reach exactly two). A false biconditional with Quinn a liar forces Sage to be a truth-teller:

$$
Q=\\mathrm{L},\\quad R=\\mathrm{T},\\quad S=\\mathrm{T}
$$

Count of truth-tellers: $2$. Quinn’s false sentence, Remy’s true sentence, and Sage’s false biconditional all match their types. So a Quinn-liar world exists, and the claim fails.

So the statement is False.`,

    `**B.** → True

The overview’s two survivors are $(T,L,L)$ and $(L,T,T)$. In the first, Remy and Sage are both liars; in the second, both are truth-tellers. No consistent row separates them.

So the statement is True.`,

    `**C.** → False

If all three are liars, Remy’s sentence “exactly two truth-tellers” is false, which matches Remy being a liar, but Quinn’s sentence “Remy is a liar” would be true — contradicting Quinn being a liar. The all-liar row is already excluded in the overview table.

So the statement is False.`,

    `**D.** → True

Sage is a truth-teller only in the second survivor $(L,T,T)$. There Quinn is a liar, so the implication holds in every world where its hypothesis is true. In the other survivor Sage is a liar, so the implication is idle.

So the statement is True.`,

    `**E.** → True

The overview lists exactly two survivors: $(T,L,L)$ and $(L,T,T)$. Exhausting the eight type triples leaves no third consistent row.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.LIARS",
    id: "MATH 1.MOCK.LIARS",
    title: "Three analysts — truth-tellers, liars, and nested claims",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Part 1: Setup.**

Write $Q,R,S$ for the types of Quinn, Remy, Sage. The spoken claims are

$$
(1)\\ \\neg R,\\qquad (2)\\ \\#\\{T\\}=2,\\qquad (3)\\ Q\\Leftrightarrow\\neg S.
$$

A truth-teller’s claim must evaluate true; a liar’s claim must evaluate false.

**Part 2: Shared forcing.**

Case Quinn truth-teller: Remy is a liar, so “exactly two truth-tellers” is false. Sage’s biconditional is true and forces Sage to be a liar. The unique completion is $(T,L,L)$.

Case Quinn liar: Remy is a truth-teller and “exactly two truth-tellers” holds, so Sage is the other truth-teller. The unique completion is $(L,T,T)$.

${truthTable}`,
  };
}

/** Ch2 ALGEBRA — exam-style identities / abs / binomial / completing-the-square (NOT nested-slot template). */
function buildMathCh2Idents() {
  const context = `Each letter is an independent elementary-algebra identity or equation claim in exam style.

Factorisation and cubic identities, absolute-value equations, completing the square, binomial coefficients, and reciprocal identities appear in turn.

Decide whether each statement is true or false.`;

  const statements = [
    "If $a,b,c$ are nonzero reals with $a+b+c=0$, then $a^{3}+b^{3}+c^{3}=3abc$.",
    "The equation $|2x-1|=|x+4|$ has a unique real solution, and that solution is strictly greater than $2$.",
    "For every real $x$, the value of $x^{2}-6x+13$ is at least $4$.",
    "In the expansion of $(1+2x)^{5}$, the coefficient of $x^{3}$ is strictly larger than $70$.",
    "For every real $t\\neq 0$, $\\left(t+\\dfrac{1}{t}\\right)^{2}-\\left(t-\\dfrac{1}{t}\\right)^{2}=4$.",
  ];

  // A: classic identity when a+b+c=0 → True
  // B: solutions x=5 and x=-1; not unique → False
  // C: (x-3)^2+4 ≥ 4 → True
  // D: C(5,3)*2^3 = 10*8 = 80 > 70 → True
  // E: difference of squares = 4*(t)(1/t)*... wait: (u^2-v^2)=(u-v)(u+v) with u=t+1/t, v=t-1/t → (u-v)=2/t, (u+v)=2t → product 4. True
  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

The cubic sum identity factors as

$$
a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)
$$

Under the hypothesis $a+b+c=0$, the right-hand factor is multiplied by zero, so

$$
a^{3}+b^{3}+c^{3}-3abc=0
$$

Hence $a^{3}+b^{3}+c^{3}=3abc$ whenever $a+b+c=0$ (the nonzero hypothesis only excludes division pathologies elsewhere; it is not needed for this identity).

So the statement is True.`,

    `**B.** → False

Drop the absolute values by cases:

$$
2x-1=x+4\\quad\\text{or}\\quad 2x-1=-(x+4)
$$

The first branch gives $x=5$. The second gives $3x=-3$, so $x=-1$. Both satisfy the original absolute-value equation, so there are two real solutions. The claim’s “unique real solution” already fails (even though $5>2$).

So the statement is False.`,

    `**C.** → True

Complete the square:

$$
x^{2}-6x+13=(x-3)^{2}+4
$$

Since $(x-3)^{2}\\ge 0$ for every real $x$,

$$
(x-3)^{2}+4\\ge 4
$$

So the statement is True.`,

    `**D.** → True

The binomial theorem gives

$$
(1+2x)^{5}=\\sum_{k=0}^{5}\\binom{5}{k}1^{5-k}(2x)^{k}
$$

The $x^{3}$ term is the $k=3$ summand:

$$
\\binom{5}{3}\\cdot 2^{3}=10\\cdot 8=80
$$

$$
80>70
$$

So the statement is True.`,

    `**E.** → True

Set $u=t+\\dfrac{1}{t}$ and $v=t-\\dfrac{1}{t}$. Then

$$
u^{2}-v^{2}=(u-v)(u+v)
$$

$$
u-v=\\dfrac{2}{t},\\qquad u+v=2t
$$

$$
(u-v)(u+v)=\\dfrac{2}{t}\\cdot 2t=4
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.IDENTS",
    id: "MATH 2.MOCK.IDENTS",
    title: "Exam-style algebra identities and absolute-value claims",
    chapter: 2,
    subsection: "2.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Treat each letter as its own short algebra check: cubic sum identity, two-branch absolute values, completing the square, one binomial coefficient, and a reciprocal difference of squares.",
  };
}

/** Ch4 EQUATIONS — five different families (NOT ages/frame/trip/log/coins). */
function buildMathCh4MixEq() {
  const context = `Each letter is an independent equation word problem, but the five families are deliberately different: a two-pipe fill with an interruption, a two-digit number, successive percentage changes, a rectangle with Pythagoras, and an exponential equation.

Decide whether each statement is true or false.`;

  const statements = [
    "Pipe A alone fills a tank in $8$ hours and pipe B alone fills it in $24$ hours. They run together for $3$ hours, then A is shut off and B finishes alone. The total elapsed time from the start until the tank is full is strictly less than $14$ hours.",
    "A two-digit number has digit sum $12$, and the number exceeds its reverse by $27$. The number itself is strictly greater than $80$.",
    "A catalogue price is raised by $25\\%$ and later reduced by $20\\%$ of the new price. The final price equals the original catalogue price.",
    "A rectangle has perimeter $40$ and area $96$. Its diagonal is strictly greater than $15$.",
    "Every real solution of $5^{x}=25^{x-1}$ is strictly greater than $1$.",
  ];

  // A: rates 1/8+1/24=1/6; 3h → 1/2; B alone 12h; total 15 ≱ 14 → False (claim <14)
  // B: a+b=12, 9(a-b)=27 → a-b=3 → a=7.5 impossible? 9(a-b)=27 → a-b=3, a+b=12 → a=7.5 not digit.
  // Wait: number - reverse = 9(a-b)=27 → a-b=3. a+b=12 → a=7.5 — not integer!
  // Fix: digit sum 11, difference 27: a-b=3, a+b=11 → a=7,b=4. Number 74. Claim >80 → False.
  // Or digit sum 12, difference 18: a-b=2, a=7,b=5 → 75. Claim >80 False.
  // User-facing statement says sum 12 and exceeds by 27 — that's impossible for digits. Change to exceeds by 18.

  statements[1] =
    "A two-digit number has digit sum $12$, and the number exceeds its reverse by $18$. The number itself is strictly greater than $80$.";

  // C: 1.25*0.8=1 → True (exactly recovers)
  // D: L+W=20, LW=96 → 12 and 8; diag sqrt(144+64)=sqrt(208)≈14.42 ≯ 15 → False
  // E: 5^x = 5^{2(x-1)} → x=2(x-1) → x=2 >1 → True (unique)

  const answer_key = [false, false, true, false, true];

  const tactical_explanations = [
    `**A.** → False

A’s rate is $\\dfrac{1}{8}$ tank per hour and B’s rate is $\\dfrac{1}{24}$, so together

$$
\\dfrac{1}{8}+\\dfrac{1}{24}=\\dfrac{3+1}{24}=\\dfrac{1}{6}
$$

In the first $3$ hours they fill

$$
3\\cdot\\dfrac{1}{6}=\\dfrac{1}{2}
$$

of the tank. The remaining half is finished by B alone:

$$
t=\\dfrac{1/2}{1/24}=12
$$

hours. Total elapsed time:

$$
3+12=15
$$

The claim says the total is strictly less than $14$, but $15\\nless 14$.

So the statement is False.`,

    `**B.** → False

Write the number as $10a+b$ with digits $a,b$. The stem gives

$$
a+b=12,\\qquad (10a+b)-(10b+a)=18
$$

The second equation simplifies to

$$
9(a-b)=18\\qquad\\Rightarrow\\qquad a-b=2
$$

Solving with $a+b=12$ yields $a=7$, $b=5$, so the number is $75$. The claim says it is strictly greater than $80$, but $75\\ngtr 80$.

So the statement is False.`,

    `**C.** → True

Start from catalogue price $P$. After a $25\\%$ rise the price is $1.25P$. A subsequent $20\\%$ reduction of the new price multiplies by $0.8$:

$$
1.25P\\cdot 0.8=P
$$

The final price equals the original catalogue price.

So the statement is True.`,

    `**D.** → False

Perimeter $40$ means $2(L+W)=40$, so $L+W=20$. With area $LW=96$, the side lengths are the roots of

$$
t^{2}-20t+96=0\\qquad\\Rightarrow\\qquad (t-12)(t-8)=0
$$

So the sides are $12$ and $8$. The diagonal is

$$
\\sqrt{12^{2}+8^{2}}=\\sqrt{144+64}=\\sqrt{208}=4\\sqrt{13}
$$

Since $15^{2}=225$ and $208<225$, one has $4\\sqrt{13}<15$. The claim “strictly greater than $15$” fails.

So the statement is False.`,

    `**E.** → True

Rewrite $25=5^{2}$:

$$
5^{x}=(5^{2})^{x-1}=5^{2x-2}
$$

Equating exponents (base $5>1$):

$$
x=2x-2\\qquad\\Rightarrow\\qquad x=2
$$

The unique real solution is $x=2$, and $2>1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.MIXEQ",
    id: "MATH 4.MOCK.MIXEQ",
    title: "Mixed equation families — pipes, digits, percentages, rectangle, exponential",
    chapter: 4,
    subsection: "4.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Five independent equation checks: interrupted two-pipe fill, two-digit linear system, successive percent factors, rectangle diagonal via Pythagoras, and an exponential with matching bases.",
  };
}

/** Ch5 — 3-equation nutrition mix (NOT pigment/copper blend + break-even twin; NOT Mira/Leo). */
function buildMathCh5Rates() {
  const context = `A canteen prepares one lunch mix from three ingredients — rice ($r$ portions), beans ($b$ portions), and tofu ($t$ portions). The mix must hit three nutrient targets exactly:

$$
\\begin{aligned}
3r+b+2t&=14\\quad\\text{(protein units)}\\\\
r+4b+t&=13\\quad\\text{(carbohydrate units)}\\\\
2r+b+3t&=15\\quad\\text{(fat units)}
\\end{aligned}
$$

Portions are real numbers (not necessarily integers in intermediate algebra, though the unique solution happens to be integral). Decide whether each statement is true or false.`;

  const statements = [
    "The unique solution satisfies $r=2$, $b=2$, and $t=3$.",
    "In the unique solution, the tofu portion is strictly larger than the rice portion.",
    "If the protein target were raised from $14$ to $15$ while the other two targets stayed fixed, the rice portion in the new unique solution would be strictly smaller than $2$.",
    "Doubling every coefficient and every right-hand side leaves the unique solution $(r,b,t)$ unchanged.",
    "The sum $r+b+t$ in the unique solution is strictly less than $8$.",
  ];

  // Solution (2,2,3). Protein RHS→15 yields (47/18, 35/18, 47/18).
  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Substitute $(r,b,t)=(2,2,3)$ into all three equations:

$$
3\\cdot 2+2+2\\cdot 3=6+2+6=14
$$

$$
2+4\\cdot 2+3=2+8+3=13
$$

$$
2\\cdot 2+2+3\\cdot 3=4+2+9=15
$$

All three targets hold. The coefficient matrix is invertible (its determinant is nonzero), so the solution is unique.

So the statement is True.`,

    `**B.** → True

From A, $t=3$ and $r=2$, so

$$
t-r=1>0
$$

Tofu is strictly larger than rice.

So the statement is True.`,

    `**C.** → False

Raise only the protein right-hand side to $15$ and re-solve the same coefficient matrix. Elimination yields the unique new solution

$$
(r,b,t)=\\left(\\dfrac{47}{18},\\dfrac{35}{18},\\dfrac{47}{18}\\right)
$$

In particular

$$
r=\\dfrac{47}{18}\\approx 2.61>2
$$

so rice rises, not falls. The claim “strictly smaller than $2$” fails.

So the statement is False.`,

    `**D.** → True

Multiplying every equation by $2$ produces an equivalent linear system: the same triples $(r,b,t)$ satisfy it, and uniqueness is preserved. Scaling an invertible system’s rows does not change its solution set.

So the statement is True.`,

    `**E.** → True

From A,

$$
r+b+t=2+2+3=7
$$

$$
7<8
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.RATES",
    id: "MATH 5.MOCK.RATES",
    title: "Three-ingredient nutrition targets — linear system",
    chapter: 5,
    subsection: "5.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve the $3\\times 3$ nutrient system once to get $(r,b,t)=(2,2,3)$. Letters A/B/E read off that solution; C perturbs one right-hand side; D notes row-scaling equivalence.",
  };
}

/** Ch6 INEQ — rational / 1/x / exponential / abs-vs-quadratic / rational again (NOT M3 order). */
function buildMathCh6Signs() {
  const context = `Each letter is an independent hard inequality. The toolkit is deliberately reordered: a rational inequality (sign chart), a quadratic-in-$1/x$ claim, an exponential inequality, an absolute-value-versus-quadratic comparison, and a second rational inequality with a vertical asymptote.

Decide whether each statement is true or false.`;

  const statements = [
    "Every real solution of $\\dfrac{x-2}{x+1}\\ge 0$ satisfies $x\\ge 2$.",
    "For every real $x>0$, one has $x+\\dfrac{1}{x}\\ge 2$.",
    "The solution set of $2^{x+1}\\le 16$ is exactly $(-\\infty,3]$.",
    "Every real $x$ satisfying $|x-3|<x^{2}-5x+6$ also satisfies $x>4$.",
    "The inequality $\\dfrac{x+2}{x-3}>1$ holds for every $x\\in(-\\infty,-2)$.",
  ];

  // A: solution (-∞,-1)∪[2,∞). Not every solution has x≥2 (e.g. -2). False
  // B: AM-GM / (√x-1/√x)^2≥0 → True
  // C: 2^{x+1}≤2^4 → x+1≤4 → x≤3. Domain all reals. True
  // D: x^2-5x+6=(x-2)(x-3). |x-3|<(x-2)(x-3). 
  //    Need careful: for x>3, x-3 < (x-2)(x-3) → 1 < x-2 if x≠3 → x>3. So (3,∞)? 
  //    For x>3: divide by (x-3)>0: 1 < x-2 → x>3. So all x>3 work.
  //    For 2<x<3: (x-2)>0, (x-3)<0 so RHS negative, |x-3|>0 cannot be < negative. Empty.
  //    For x=2: RHS=0, |2-3|=1≮0.
  //    For x<2: both factors of RHS — if x<2 and looking...
  //    Actually for x<2, (x-2)<0. If also x>3 impossible. If x<3, (x-3)<0 so RHS>0.
  //    |x-3| < (x-2)(x-3). For x<2: let me check x=0: |0-3|=3, RHS=6>3? 0-0+6=6, 3<6 true. x=0 works but 0≯4.
  //    So claim "every solution satisfies x>4" is False.
  // E: (x+2)/(x-3)>1 → (x+2)-(x-3))/(x-3)>0 → 5/(x-3)>0 → x>3.
  //    So NOT for all x in (-∞,-2). False.

  const answer_key = [false, true, true, false, false];

  const tactical_explanations = [
    `**A.** → False

Critical points $x=-1$ (vertical asymptote / undefined) and $x=2$ (zero). A sign chart on $(-\\infty,-1)$, $(-1,2)$, and $(2,\\infty)$ shows the quotient is nonnegative on

$$
(-\\infty,-1)\\cup[2,\\infty)
$$

(with $x=-1$ excluded). The point $x=-2$ is a solution but $-2\\ngeq 2$, so not every solution satisfies $x\\ge 2$.

So the statement is False.`,

    `**B.** → True

For $x>0$,

$$
x+\\dfrac{1}{x}-2=\\dfrac{x^{2}-2x+1}{x}=\\dfrac{(x-1)^{2}}{x}\\ge 0
$$

because the numerator is a square and the denominator is positive. Equality holds at $x=1$.

So the statement is True.`,

    `**C.** → True

Rewrite $16=2^{4}$:

$$
2^{x+1}\\le 2^{4}
$$

The exponential base $2>1$ is increasing, so the inequality of exponents is

$$
x+1\\le 4\\qquad\\Rightarrow\\qquad x\\le 3
$$

That is exactly $(-\\infty,3]$.

So the statement is True.`,

    `**D.** → False

Factor the quadratic:

$$
x^{2}-5x+6=(x-2)(x-3)
$$

At $x=0$ one finds

$$
|0-3|=3,\\qquad (0-2)(0-3)=6
$$

and $3<6$, so $x=0$ solves the strict inequality. But $0\\ngtr 4$, so the universal claim fails.

So the statement is False.`,

    `**E.** → False

Bring to one side:

$$
\\dfrac{x+2}{x-3}-1=\\dfrac{(x+2)-(x-3)}{x-3}=\\dfrac{5}{x-3}
$$

So the inequality becomes $\\dfrac{5}{x-3}>0$, hence $x>3$. In particular it fails throughout $(-\\infty,-2)$ (for example at $x=-3$: $\\dfrac{-1}{-6}=\\dfrac{1}{6}\\nless 1$ wait — $\\dfrac{-1}{-6}=1/6\\not>1$). Directly: at $x=-3$, $\\dfrac{-1}{-6}=\\dfrac{1}{6}\\ngtr 1$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.SIGNS",
    id: "MATH 6.MOCK.SIGNS",
    title: "Sign-chart inequalities — rational, reciprocal, exponential, abs-vs-quadratic",
    chapter: 6,
    subsection: "6.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Five independent inequality checks with a new type order: rational sign chart, $x+1/x$, exponential with matched bases, absolute value versus a factored quadratic, and a rational inequality reducing to a single critical point.",
  };
}

/** Ch7 — revenue table rebuilt from constant second differences (NOT parabola+lines-through-vertex). */
function buildMathCh7Revenue() {
  const context = `A kiosk records revenue $R(q)$ (in euro) against packs sold $q$. Four observed pairs are:

| $q$ (packs) | $R(q)$ (euro) |
| ---: | ---: |
| $1$ | $38$ |
| $2$ | $72$ |
| $3$ | $102$ |
| $4$ | $128$ |

First differences of $R$ fall by a constant second difference of $-4$, so $R$ is exactly quadratic on these integers. Extend that same quadratic model to nearby integers and to the vertex. Decide whether each statement is true or false.`;

  const statements = [
    "The unique quadratic with those four values is $R(q)=-2q^{2}+40q$.",
    "Under that quadratic model, $R(5)$ is strictly greater than $145$.",
    "The model’s vertex (maximum on the reals) occurs at $q=10$.",
    "The maximal modelled revenue is strictly greater than $200$ euro.",
    "The first differences $R(2)-R(1)$, $R(3)-R(2)$, $R(4)-R(3)$ form an arithmetic sequence with common difference $-4$.",
  ];

  // R=-2q^2+40q: 38,72,102,128 yes. A True
  // R(5)=-50+200=150 >145 True
  // vertex at q=-b/2a= -40/(2*(-2))=10 True
  // R(10)=-200+400=200, claim >200 → False
  // diffs 34,30,26 common difference -4 True

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Assume $R(q)=aq^{2}+bq+c$. The four table values overdetermine a quadratic, but constant second differences of $-4$ force $2a=-4$, so $a=-2$. Matching $R(1)=38$ and $R(2)=72$:

$$
-2+b+c=38,\\qquad -8+2b+c=72
$$

Subtract: $-6+b=34$, so $b=40$, then $c=0$. Hence

$$
R(q)=-2q^{2}+40q
$$

and it reproduces $R(3)=102$, $R(4)=128$ as well.

So the statement is True.`,

    `**B.** → True

$$
R(5)=-2\\cdot 25+40\\cdot 5=-50+200=150
$$

$$
150>145
$$

So the statement is True.`,

    `**C.** → True

For $R(q)=-2q^{2}+40q$ the vertex abscissa is

$$
q=-\\dfrac{b}{2a}=-\\dfrac{40}{2(-2)}=10
$$

So the statement is True.`,

    `**D.** → False

At the vertex $q=10$,

$$
R(10)=-2\\cdot 100+40\\cdot 10=-200+400=200
$$

The claim asks for a value strictly greater than $200$ euro, but the maximum equals $200$, so $200\\ngtr 200$.

So the statement is False.`,

    `**E.** → True

Read the first differences from the table:

$$
72-38=34,\\qquad 102-72=30,\\qquad 128-102=26
$$

Then

$$
30-34=-4,\\qquad 26-30=-4
$$

so the first differences form an arithmetic sequence with common difference $-4$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.REVENUE",
    id: "MATH 7.MOCK.REVENUE",
    title: "Kiosk revenue — quadratic rebuild from second differences",
    chapter: 7,
    subsection: "7.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Constant second difference $-4$ forces $a=-2$; fit $b,c$ from the table to get $R(q)=-2q^{2}+40q$. Letters then evaluate $R(5)$, the vertex, and the first-difference pattern. Keep euro amounts in prose, not inside math.",
  };
}

/** Ch8 — compare two power laws with known exponents (NOT single C=A w^p calibration). */
function buildMathCh8Scale() {
  const context = `Two shipping cost models (in euro) depend on package weight $w>0$:

$$
C_{A}(w)=A\\,w^{3/2},\\qquad C_{B}(w)=B\\,w^{1/2}
$$

with unknown positive constants $A,B$. Calibration at weight $w=4$ gives $C_{A}(4)=64$ and $C_{B}(4)=20$. The elasticity of either model is the logarithmic derivative $\\dfrac{\\mathrm{d}(\\ln C)}{\\mathrm{d}(\\ln w)}$, which equals the power of $w$. Decide whether each statement is true or false.`;

  const statements = [
    "The calibrated constants are $A=8$ and $B=10$.",
    "At weight $w=9$, model A costs strictly more than $200$ euro.",
    "If weight doubles from any $w>0$, model A’s cost is multiplied by exactly $2\\sqrt{2}$.",
    "The elasticity of model B with respect to weight equals $\\dfrac{1}{2}$.",
    "There exists a weight $w>0$ at which the two calibrated costs are equal and that weight is strictly less than $1$.",
  ];

  // A: A*4^{3/2}=A*8=64 → A=8; B*2=20 → B=10 True
  // B: C_A(9)=8*27=216>200 True
  // C: 2^{3/2}=2√2 True
  // D: True
  // E: 8 w^{3/2} = 10 w^{1/2} → 8w = 10 → w=10/8=1.25 ≮ 1 → False

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

From $C_{A}(4)=64$:

$$
A\\cdot 4^{3/2}=A\\cdot (2^{2})^{3/2}=A\\cdot 2^{3}=8A=64\\qquad\\Rightarrow\\qquad A=8
$$

From $C_{B}(4)=20$:

$$
B\\cdot 4^{1/2}=2B=20\\qquad\\Rightarrow\\qquad B=10
$$

So the statement is True.`,

    `**B.** → True

$$
C_{A}(9)=8\\cdot 9^{3/2}=8\\cdot (3^{2})^{3/2}=8\\cdot 3^{3}=8\\cdot 27=216
$$

Keep the currency in prose: $216$ euro is strictly more than $200$ euro.

So the statement is True.`,

    `**C.** → True

Replacing $w$ by $2w$ multiplies $C_{A}$ by

$$
(2w)^{3/2}/w^{3/2}=2^{3/2}=2\\sqrt{2}
$$

independent of $w$ and of $A$.

So the statement is True.`,

    `**D.** → True

For $C_{B}(w)=B w^{1/2}$,

$$
\\ln C_{B}=\\ln B+\\dfrac{1}{2}\\ln w
$$

so

$$
\\dfrac{\\mathrm{d}(\\ln C_{B})}{\\mathrm{d}(\\ln w)}=\\dfrac{1}{2}
$$

So the statement is True.`,

    `**E.** → False

Set $8w^{3/2}=10w^{1/2}$ with $w>0$ and divide by $w^{1/2}$:

$$
8w=10\\qquad\\Rightarrow\\qquad w=\\dfrac{10}{8}=1.25
$$

The crossing weight is $1.25$, which is not strictly less than $1$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.SCALE",
    id: "MATH 8.MOCK.SCALE",
    title: "Two power-law shipping costs — scale factors and elasticity",
    chapter: 8,
    subsection: "8.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Calibrate $A=8$, $B=10$ at $w=4$. Compare scale-up factors $2^{3/2}$ vs $2^{1/2}$, read elasticity as the exponent, and solve $C_A=C_B$ for the crossing weight.",
  };
}

/** Ch9 — factor/remainder theorem with a three-root cubic (NOT short-run p(t)=t^3-… rate). */
function buildMathCh9FactorP() {
  const context = `A cubic polynomial is built from three real roots,

$$
p(x)=(x-1)(x-2)(x-4)=x^{3}-7x^{2}+14x-8
$$

Use the factor theorem and the remainder theorem. Decide whether each statement is true or false.`;

  const statements = [
    "The remainder when $p(x)$ is divided by $x-3$ is strictly less than $-1$.",
    "The factor theorem guarantees that $x-2$ divides $p(x)$ exactly.",
    "The sum of the roots of $p(x)=0$, counting multiplicity, equals $7$.",
    "If $q(x)=p(x)+6$, then $q(1)=0$.",
    "On the interval $[0,5]$, the equation $p(x)=0$ has exactly three solutions.",
  ];

  // A: p(3)=27-63+42-8=-2 < -1 True
  // B: p(2)=0 True
  // C: 1+2+4=7 True
  // D: q(1)=p(1)+6=6≠0 False
  // E: roots 1,2,4 all in [0,5] → three solutions True

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

The remainder theorem says the remainder on division by $x-3$ is $p(3)$:

$$
p(3)=27-63+42-8=-2
$$

$$
-2<-1
$$

So the statement is True.`,

    `**B.** → True

By construction $p(2)=(2-1)(2-2)(2-4)=0$. The factor theorem therefore yields an exact factor $x-2$.

So the statement is True.`,

    `**C.** → True

For a monic cubic $x^{3}+ax^{2}+bx+c$, the sum of roots is $-a$. Here $a=-7$, so the sum is $7$. Directly: $1+2+4=7$.

So the statement is True.`,

    `**D.** → False

$$
q(1)=p(1)+6=0+6=6\\neq 0
$$

Shifting the constant term by $+6$ destroys the root at $x=1$.

So the statement is False.`,

    `**E.** → True

The three roots are $1$, $2$, and $4$, and each lies in $[0,5]$. A cubic has at most three roots unless identically zero, so there are exactly three solutions on that interval.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FACTORP",
    id: "MATH 9.MOCK.FACTORP",
    title: "Cubic from three roots — factor and remainder theorems",
    chapter: 9,
    subsection: "9.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Expand or keep $p(x)=(x-1)(x-2)(x-4)$. Letters apply the remainder theorem at $x=3$, the factor theorem at a known root, Vieta’s sum, a constant shift, and a root count on $[0,5]$.",
  };
}

/** Ch10 — discrete compound vs continuous force (NOT P0 e^{kt} endowment twin). */
function buildMathCh10Compound() {
  const context = `An endowment of $P_{0}=1000$ euro is tracked under two interest conventions (currency kept in prose):

- Discrete annual compounding at $5\\%$ per year: $D(t)=1000\\cdot(1.05)^{t}$ after $t$ years.
- Continuous force of interest $\\delta=\\ln(1.05)$: $C(t)=1000\\,e^{\\delta t}$.

A third experimental account uses continuous force $0.05$ exactly: $E(t)=1000\\,e^{0.05 t}$. Decide whether each statement is true or false.`;

  const statements = [
    "For every $t\\ge 0$, the discrete account and the continuous account with force $\\delta=\\ln(1.05)$ give exactly the same balance.",
    "After $10$ years, the experimental account $E(10)$ is strictly larger than the discrete account $D(10)$.",
    "The continuous force $\\delta=\\ln(1.05)$ is strictly smaller than $0.05$.",
    "Using the change-of-base formula, $\\log_{1.05}(2)=\\dfrac{\\ln 2}{\\ln 1.05}$ is strictly greater than $15$.",
    "If the discrete rate switches from $5\\%$ to $3\\%$ after year $4$, the balance at $t=4$ is still exactly $1000\\cdot(1.05)^{4}$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

With $\\delta=\\ln(1.05)$,

$$
C(t)=1000\\,e^{(\\ln 1.05)\\,t}=1000\\cdot(1.05)^{t}=D(t)
$$

for every $t$. The two conventions are algebraically identical.

So the statement is True.`,

    `**B.** → True

$$
\\dfrac{E(10)}{1000}=e^{0.5}\\approx 1.6487,\\qquad \\dfrac{D(10)}{1000}=(1.05)^{10}\\approx 1.6289
$$

so $E(10)>D(10)$.

So the statement is True.`,

    `**C.** → True

The elementary inequality $e^{r}>1+r$ for $r=0.05>0$ rearranges to

$$
e^{0.05}>1.05\\qquad\\Rightarrow\\qquad 0.05>\\ln(1.05)
$$

So $\\delta=\\ln(1.05)$ is strictly smaller than $0.05$.

So the statement is True.`,

    `**D.** → False

$$
\\log_{1.05}(2)=\\dfrac{\\ln 2}{\\ln 1.05}\\approx\\dfrac{0.693147}{0.048790}\\approx 14.21
$$

Now $14.21\\ngtr 15$, so the claim fails.

So the statement is False.`,

    `**E.** → True

A rate switch that begins only after year $4$ does not change the path on $[0,4]$. At the instant $t=4$ one still has

$$
1000\\cdot(1.05)^{4}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COMPOUND",
    id: "MATH 10.MOCK.COMPOUND",
    title: "Discrete compound versus continuous force — comparison and log change-of-base",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Identify $e^{(\\ln 1.05)t}=(1.05)^{t}$, compare $e^{0.05t}$ with discrete compounding, bound $\\ln(1.05)$, evaluate $\\log_{1.05}2$ via change of base, and note that a post-year-4 rate switch leaves the $t=4$ balance unchanged.",
  };
}

/** Ch11 — product/quotient style f(x)=x^2 e^{-x} (NOT (x^2+c)ln(·)e^{-x} twin). */
function buildMathCh11Quot() {
  const context = `For $x>0$ define the smooth payoff

$$
f(x)=x^{2}e^{-x}
$$

Critical points come from the product rule (equivalently from $\\dfrac{f'}{f}$). Decide whether each statement is true or false.`;

  const statements = [
    "On $(0,\\infty)$, the function $f$ has a unique critical point, and it lies at $x=2$.",
    "The global maximum value of $f$ on $(0,\\infty)$ is strictly greater than $0.6$.",
    "The logarithmic derivative satisfies $\\dfrac{f'(x)}{f(x)}=\\dfrac{2}{x}-1$ for every $x>0$.",
    "For every $x>2$, the marginal payoff $f'(x)$ is negative.",
    "The average payoff $\\dfrac{f(x)}{x}$ equals $xe^{-x}$, and this average is strictly decreasing on $(2,\\infty)$.",
  ];

  // f'=e^{-x}(2x-x^2)=x e^{-x}(2-x). Crit at x=2 (x=0 not in (0,∞)). A True
  // f(2)=4/e≈1.471>0.6? 4*e^{-2}≈0.541 ≯ 0.6 → False for >0.6
  // B False
  // C: f'/f = 2/x - 1 True
  // D: for x>2, (2-x)<0 so f'<0 True
  // E: f/x = x e^{-x}. Derivative: e^{-x}(1-x)<0 for x>1, hence on (2,∞) True

  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

Differentiate as a product $u=x^{2}$, $v=e^{-x}$:

$$
f'(x)=2xe^{-x}-x^{2}e^{-x}=xe^{-x}(2-x)
$$

On $(0,\\infty)$ one has $x>0$ and $e^{-x}>0$, so $f'(x)=0$ precisely when $x=2$. That critical point is unique in the open interval.

So the statement is True.`,

    `**B.** → False

At the critical point,

$$
f(2)=4e^{-2}\\approx 4\\cdot 0.135335=0.541
$$

Now $0.541\\ngtr 0.6$, so the claimed lower bound on the maximum fails.

So the statement is False.`,

    `**C.** → True

From A, for $x>0$,

$$
\\dfrac{f'(x)}{f(x)}=\\dfrac{xe^{-x}(2-x)}{x^{2}e^{-x}}=\\dfrac{2-x}{x}=\\dfrac{2}{x}-1
$$

So the statement is True.`,

    `**D.** → True

For $x>2$, the factor $(2-x)$ is negative while $xe^{-x}>0$, hence $f'(x)<0$.

So the statement is True.`,

    `**E.** → True

$$
\\dfrac{f(x)}{x}=xe^{-x}
$$

Differentiate the average:

$$
\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\bigl(xe^{-x}\\bigr)=e^{-x}(1-x)
$$

On $(2,\\infty)$ one has $1-x<0$, so the average is strictly decreasing there.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.QUOT",
    id: "MATH 11.MOCK.QUOT",
    title: "Payoff x²e^{-x} — critical point, log derivative, average vs marginal",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Use $f'(x)=xe^{-x}(2-x)$ to locate the unique positive critical point at $x=2$, evaluate $4e^{-2}$, read $f'/f=2/x-1$, and compare the average $xe^{-x}$ on $(2,\\infty)$.",
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
  if (caseId === "MATH 13.52") {
    mapped.context = `A vaccine trial has lab technicians classify antibody responses across $35$ independent samples. Tech A is a first-year analyst (success probability $p=0.38$ of correctly classifying a sample). Tech B is a lead analyst ($p=0.94$).

To pass certification, a technician must correctly classify at least $30$ of the $35$ samples. Treat classifications as independent Bernoulli trials within and across technicians.

Decide whether each binomial claim is true or false.`;
    mapped.title = "Vaccine antibody classification — binomial certification thresholds";
  }
  return mapped;
}

const math = [
  buildMathCh1Liars(),
  buildMathCh2Idents(),
  takeMath("MATH 11.112", 3),
  buildMathCh4MixEq(),
  buildMathCh5Rates(),
  buildMathCh6Signs(),
  buildMathCh7Revenue(),
  buildMathCh8Scale(),
  buildMathCh9FactorP(),
  buildMathCh10Compound(),
  buildMathCh11Quot(),
  takeMath("MATH 12.25", 12),
  takeMath("MATH 13.52", 13),
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

