/**
 * Mock Exam 6 — ultra-hard custom math (Q22–34).
 * Long multi-step chains; no solution formulas in stems/statements.
 * Teacher-step explanations only in tactical_explanations.
 */

/** Q22 — four-set counting with “exactly-k” traps. */
export function buildMathQ22Sets() {
  const context = `A certification academy tracks four modules: Risk, Audit, Tax, and Ethics. Of $400$ candidates, $210$ finished Risk, $180$ finished Audit, $160$ finished Tax, and $140$ finished Ethics. Pairwise overlaps are $95$ for Risk–Audit, $88$ for Risk–Tax, $80$ for Risk–Ethics, $76$ for Audit–Tax, $70$ for Audit–Ethics, and $65$ for Tax–Ethics. Exactly $42$ finished all of Risk, Audit, and Tax; $38$ finished all of Risk, Audit, and Ethics; $35$ finished all of Risk, Tax, and Ethics; $33$ finished all of Audit, Tax, and Ethics; and $22$ finished all four. Every candidate is counted in the academy total, including those who finished none.`;

  // |R∪A∪T∪E| by inclusion-exclusion 4 sets:
  // sum singles - sum pairs + sum triples - quad
  // = 210+180+160+140 - (95+88+80+76+70+65) + (42+38+35+33) - 22
  // = 690 - 474 + 148 - 22 = 342
  // none = 400-342 = 58
  // only Risk = R - (RA+RT+RE) + (RAT+RAE+RTE) - RAETwait
  // only R = |R| - |R∩A| - |R∩T| - |R∩E| + |R∩A∩T| + |R∩A∩E| + |R∩T∩E| - |all4|
  // = 210 - 95 - 88 - 80 + 42 + 38 + 35 - 22 = 40

  const statements = [
    "Exactly $58$ candidates finished none of the four modules.",
    "The candidates who finished all four outnumber those who finished Risk and nothing else.",
    "Strictly more than $340$ candidates finished at least one module.",
    "Finishing Ethics without finishing Risk is impossible under these counts.",
    "The staff who finished Risk or Audit (or both) number strictly more than $290$.",
  ];

  // A True 58
  // B False: all4=22, only Risk=40, 22≯40
  // C True: 342>340
  // D False: only Ethics = E - RE - AE - TE + RAE + RTE + ATE - all4
  //   = 140 - 80 - 70 - 65 + 38 + 35 + 33 - 22 = 9 > 0
  // E: |R∪A|=210+180-95=295>290 True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Four-set inclusion–exclusion:

$$
|R\\cup A\\cup T\\cup E|=690-474+148-22=342
$$

$$
400-342=58
$$

So the statement is True.`,

    `**B.** → False

Only Risk equals $210-95-88-80+42+38+35-22=40$. All four equals $22$. Since $22\\ngtr 40$, the claim fails.

So the statement is False.`,

    `**C.** → True

The union is $342>340$.

So the statement is True.`,

    `**D.** → False

Only Ethics equals $140-80-70-65+38+35+33-22=9>0$, so Ethics without Risk occurs.

So the statement is False.`,

    `**E.** → True

$$
|R\\cup A|=210+180-95=295>290
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.FOURSET",
    id: "MATH 1.MOCK.FOURSET",
    title: "Four certification modules — deep inclusion–exclusion",
    chapter: 1,
    subsection: "1.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Union $342$, none $58$. Only Risk $40>$ all-four $22$. Ethics-only $9$. $|R\\cup A|=295$.`,
  };
}

/** Q23 — four archived numbers (full elementary symmetric data). */
export function buildMathQ23Grind() {
  const context = `An algebra archive stores four real numbers $a,b,c,d$ only through

$$
a+b+c+d=10,\\qquad \\sum_{i<j}a_ia_j=35,\\qquad \\sum_{i<j<k}a_ia_ja_k=50,\\qquad abcd=24,
$$

where the middle two sums run over the indicated distinct index tuples among $\\{a,b,c,d\\}$. The original order was not recorded. No decimal approximation is used.

Decide whether each statement is true or false.`;

  // roots {1,2,3,4}; sum sq=100-70=30; sum cubes via Newton or direct 1+8+27+64=100
  // 1/a+1/b+1/c+1/d = (sum triples)/product = 50/24=25/12
  // claim flip 12/25 false

  const statements = [
    "$a^{2}+b^{2}+c^{2}+d^{2}=30$.",
    "$a^{3}+b^{3}+c^{3}+d^{3}=100$.",
    "$\\{a,b,c,d\\}=\\{1,2,3,4\\}$.",
    "$\\dfrac{1}{a}+\\dfrac{1}{b}+\\dfrac{1}{c}+\\dfrac{1}{d}=\\dfrac{12}{25}$.",
    "$(a-b)^{2}+(a-c)^{2}+(a-d)^{2}+(b-c)^{2}+(b-d)^{2}+(c-d)^{2}=40$.",
  ];

  // E: sum of pairwise squared gaps = 2(n-1)sum sq - 2(sum)^2/wait
  // For n=4: Σ_{i<j}(a_i-a_j)^2 = (n-1)Σ a_i^2 - 2 Σ_{i<j} a_i a_j? 
  // Actually Σ_{i<j}(a_i-a_j)^2 = (n/2)*2 Σ a_i^2 - 2(sum pairs)*1? 
  // Identity: Σ_{i<j}(a_i-a_j)^2 = n Σ a_i^2 - (Σ a_i)^2 = 4*30 - 100 = 20. Claim 40 False.

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\sum a_i^{2}=\\Bigl(\\sum a_i\\Bigr)^{2}-2\\sum_{i<j}a_ia_j=100-70=30
$$

So the statement is True.`,

    `**B.** → True

The numbers are the roots of $t^{4}-10t^{3}+35t^{2}-50t+24=0$, which factors as $(t-1)(t-2)(t-3)(t-4)$. Then

$$
1^{3}+2^{3}+3^{3}+4^{3}=1+8+27+64=100
$$

So the statement is True.`,

    `**C.** → True

As in letter B, the roots are exactly $\\{1,2,3,4\\}$.

So the statement is True.`,

    `**D.** → False

$$
\\sum\\dfrac{1}{a_i}=\\dfrac{\\sum_{i<j<k}a_ia_ja_k}{abcd}=\\dfrac{50}{24}=\\dfrac{25}{12}\\neq\\dfrac{12}{25}
$$

So the statement is False.`,

    `**E.** → False

$$
\\sum_{i<j}(a_i-a_j)^{2}=n\\sum a_i^{2}-\\Bigl(\\sum a_i\\Bigr)^{2}=4\\cdot 30-100=20\\neq 40
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.FOURSYM",
    id: "MATH 2.MOCK.FOURSYM",
    title: "Four-number archive — full symmetric data",
    chapter: 2,
    subsection: "2.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Squares sum $30$; cubes $100$; set $\\{1,2,3,4\\}$; reciprocal sum $25/12$; pairwise squared gaps sum $20$.`,
  };
}

/** Q24 — dual-rate finance with annuity and project NPV. */
export function buildMathQ24Finance() {
  const context = `A foundation compares two programmes at annual effective rate $6\\%$.

Programme P buys a three-year project: pay EUR $20000$ immediately, then receive EUR $8000$, EUR $9000$, and EUR $10000$ at the ends of years $1$, $2$, and $3$.

Programme Q is a level perpetuity-due of EUR $500$ per year (first payment today), also at $6\\%$.

Decide whether each statement is true or false.`;

  // PV inflows ≈ 23953.33; NPV ≈ 3953.33 > 3500
  // PV first gift 8000/1.06≈7547.17 < 7600
  // Q: 500*1.06/0.06 = 500*17.666... = 8833.33... wait i=0.06: (1+i)/i = 1.06/0.06 = 17.666..., *500 = 8833.33
  // Earlier I computed at 4% by mistake. At 6%: 500 * 1.06/0.06 = 8833.33
  // Claim Q PV = 9000 → False
  // Moving P's inflows one year earlier raises NPV → True that earlier increases PV
  // Claim: PV of year-3 10000 exceeds PV of year-1 8000? 10000/1.06^3≈8396 vs 7547 → year3 larger? 8396>7547 True
  // Wait 10000/1.06^3 = 10000/1.191016≈8396.19; 8000/1.06≈7547. Yes year3 PV larger despite later!

  const statements = [
    "Programme P has a strictly positive net present value, and that NPV exceeds EUR $3500$.",
    "The present value of the single EUR $8000$ inflow (year $1$) is strictly less than EUR $7600$.",
    "At $6\\%$, Programme Q has present value exactly EUR $9000$.",
    "Moving every Programme P inflow one year earlier would strictly decrease P’s present value of inflows.",
    "The present value of the EUR $10000$ inflow (year $3$) exceeds the present value of the EUR $8000$ inflow (year $1$).",
  ];

  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\mathrm{PV}_{\\mathrm{in}}=\\dfrac{8000}{1.06}+\\dfrac{9000}{1.06^{2}}+\\dfrac{10000}{1.06^{3}}\\approx 7547.17+8009.97+8396.19=23953.33
$$

$$
\\mathrm{NPV}\\approx 23953.33-20000=3953.33>3500
$$

So the statement is True.`,

    `**B.** → True

$$
\\dfrac{8000}{1.06}\\approx 7547.17<7600
$$

So the statement is True.`,

    `**C.** → False

Perpetuity-due:

$$
500\\cdot\\dfrac{1.06}{0.06}=500\\cdot\\dfrac{53}{3}\\approx 8833.33\\neq 9000
$$

So the statement is False.`,

    `**D.** → False

Earlier payment shortens every discount exponent, so each present value rises.

So the statement is False.`,

    `**E.** → True

$$
\\dfrac{10000}{1.06^{3}}\\approx 8396.19>\\dfrac{8000}{1.06}\\approx 7547.17
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 3.MOCK.DUALPV",
    id: "MATH 3.MOCK.DUALPV",
    title: "Project NPV versus perpetuity-due — dual programme audit",
    chapter: 3,
    subsection: "3.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `P NPV $\\approx 3953$. Year-1 PV $\\approx 7547$. Q PV $\\approx 8833$. Earlier payment raises PV. Year-3 PV exceeds year-1 PV.`,
  };
}

/** Q25 — pipes with three inlets and two drains (rate traps). */
export function buildMathQ25Pipes() {
  const context = `Three inlet pipes and two drains serve a tank.

Pipe A alone fills the empty tank in $5$ hours.
Pipe B alone fills the empty tank in $6$ hours.
Pipe C alone fills the empty tank in $7.5$ hours.
Drain D alone empties a full tank in $10$ hours.
Drain E alone empties a full tank in $15$ hours.

All five run together from empty. Decide whether each statement is true or false.`;

  // A=1/5, B=1/6, C=2/15, D=1/10, E=1/15
  // Net = 1/5+1/6+2/15-1/10-1/15 = 6/30+5/30+4/30-3/30-2/30 = 10/30 = 1/3
  // Time = 3 hours exactly
  // A alone > 1/5.5? 1/5 > 1/5.5 True... claim "A rate strictly greater than 1/4" → 1/5<1/4 False
  // Net exactly 1/3 True (as claim)
  // Fill in strictly less than 3? False (exactly 3)
  // Only A+B with both drains: 1/5+1/6-1/10-1/15=6/30+5/30-3/30-2/30=6/30=1/5 → time 5>4 True exceeds 4
  // B alone fills more in 1h than A+C net with D only: B=1/6; A+C-D=1/5+2/15-1/10=6/30+4/30-3/30=7/30; 1/6=5/30<7/30 so B does NOT outpace → claim False

  const statements = [
    "A’s fill rate is strictly greater than $\\tfrac{1}{4}$ tank per hour.",
    "The combined net rate of A, B, C, D and E is exactly $\\tfrac{1}{3}$ tank per hour.",
    "Starting from empty with all five open, the tank is full in strictly less than $3$ hours.",
    "If only A and B run with both drains open (C closed), the tank still fills, and the time needed exceeds $4$ hours.",
    "B alone fills more of the tank in $1$ hour than A and C together add net in $1$ hour while only drain D is open.",
  ];

  const answer_key = [false, true, false, true, false];

  const tactical_explanations = [
    `**A.** → False

A’s rate is $\\tfrac{1}{5}<\\tfrac{1}{4}$.

So the statement is False.`,

    `**B.** → True

$$
\\dfrac{1}{5}+\\dfrac{1}{6}+\\dfrac{2}{15}-\\dfrac{1}{10}-\\dfrac{1}{15}=\\dfrac{6+5+4-3-2}{30}=\\dfrac{10}{30}=\\dfrac{1}{3}
$$

So the statement is True.`,

    `**C.** → False

Time at net rate $\\tfrac{1}{3}$ is exactly $3$ hours.

So the statement is False.`,

    `**D.** → True

$$
\\dfrac{1}{5}+\\dfrac{1}{6}-\\dfrac{1}{10}-\\dfrac{1}{15}=\\dfrac{1}{5}>0
$$

Time equals $5>4$.

So the statement is True.`,

    `**E.** → False

B contributes $\\tfrac{1}{6}=\\tfrac{5}{30}$. A+C−D contributes $\\tfrac{7}{30}$. Since $\\tfrac{5}{30}<\\tfrac{7}{30}$, B alone does not outpace that net.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.FIVEPIPE",
    id: "MATH 4.MOCK.FIVEPIPE",
    title: "Three inlets and two drains — net rate labyrinth",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Net all five $=1/3$ (time $3$). A $=1/5<1/4$. A+B−drains $=1/5$ (time $5$). B $<$ A+C−D.`,
  };
}

/** Q26 — three-product break-even with shifted fixed costs. */
export function buildMathQ26BreakEven() {
  const context = `A workshop sells three products $X$, $Y$, $Z$ with unit contributions

$$
c_X=5,\\qquad c_Y=7,\\qquad c_Z=9
$$

(in EUR per unit). Monthly fixed costs are EUR $12600$. A sales plan forces

$$
x=3z,\\qquad y=2z
$$

and requires exact break-even.

Decide whether each statement is true or false.`;

  // 5(3z)+7(2z)+9z=15z+14z+9z=38z=12600 → z=12600/38=6300/19≈331.579
  // not integer; total units 6z=37800/38=18900/19≈994.737 < 1000
  // at 15200: 38z=15200 → z=400 exactly, claim exceed 400 False
  // without Y: 15z+9z=24z=12600 → z=525 > 331 True

  const statements = [
    "At break-even under the stated mix, the volume of $Z$ is strictly greater than $330$.",
    "The break-even volume of $Z$ is an integer number of units.",
    "Under the mix, break-even total unit volume $x+y+z$ is strictly less than $1000$.",
    "If fixed costs rose to EUR $15200$ with the same mix, the required $z$ would exceed $400$.",
    "Dropping product $Y$ while keeping $x=3z$ and the original EUR $12600$ fixed costs would force a strictly larger break-even $z$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
15z+14z+9z=38z=12600\\Rightarrow z=\\dfrac{6300}{19}\\approx 331.58>330
$$

So the statement is True.`,

    `**B.** → False

$\\dfrac{6300}{19}$ is not an integer ($19\\cdot 331=6289$, remainder $11$).

So the statement is False.`,

    `**C.** → True

$$
x+y+z=6z=\\dfrac{37800}{38}=\\dfrac{18900}{19}\\approx 994.74<1000
$$

So the statement is True.`,

    `**D.** → False

$$
38z=15200\\Rightarrow z=400
$$

exactly, so $z$ does not exceed $400$.

So the statement is False.`,

    `**E.** → True

Without $Y$: $24z=12600$, so $z=525>\\dfrac{6300}{19}$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.BE38",
    id: "MATH 5.MOCK.BE38",
    title: "Three-product mix — $38z$ break-even system",
    chapter: 5,
    subsection: "5.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$38z=12600$, $z\\approx 331.6$. Total $\\approx 995$. At EUR $15200$, $z=400$. Without $Y$, $z=525$.`,
  };
}

/** Q27 — nested absolute / radical / rational inequality traps. */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $|x-2|+|x-6|\\le 5$ is exactly $[2,6]$.",
    "The solution set of $\\sqrt{3x+1}<x-1$ is exactly $(2,+\\infty)$.",
    "The solution set of $\\dfrac{x-3}{x+2}\\le 0$ is exactly $[-2,3]$.",
    "The solution set of $x^{2}-3|x|-4<0$ is exactly $(-4,4)$.",
    "The solution set of $|3x-1|>|x+5|$ is exactly $(-\\infty,-1)\\cup\\bigl(3,+\\infty\\bigr)$.",
  ];

  // A: |x-2|+|x-6| ≥ 4 always; ≤5 means within distance that... on [2,6] sum=4≤5; outside increases by 2|delta|.
  // For x<2: (2-x)+(6-x)=8-2x≤5 → x≥1.5, so [1.5,2) also. For x>6: 2x-8≤5 → x≤6.5. So [1.5,6.5] not [2,6]. False
  // B: domain x≥-1/3; RHS>0 ⇒ x>1. Square: 3x+1 < x^2-2x+1 → 0<x^2-5x=x(x-5). On x>1: x>5. So (5,∞) not (2,∞). False
  // C: crit -2,3; negative on (-2,3], undefined at -2. Not [-2,3]. False
  // D: u=|x|: u^2-3u-4<0 → (u-4)(u+1)<0 → u<4 → |x|<4 → (-4,4). True
  // E: square: (3x-1)^2>(x+5)^2 → 9x^2-6x+1 > x^2+10x+25 → 8x^2-16x-24>0 → x^2-2x-3>0 → (x-3)(x+1)>0 → x<-1 or x>3. True
  // Wait claim says (-∞,-1)∪(3,∞) which matches. True

  const answer_key = [false, false, false, true, true];

  const tactical_explanations = [
    `**A.** → False

On $[2,6]$ the sum equals $4$. Outside, the solution extends to $[1.5,6.5]$, not merely $[2,6]$.

So the statement is False.`,

    `**B.** → False

Domain and $x-1\\ge 0$ force $x\\ge 1$. Squaring yields $x(x-5)>0$ on that region, hence $x>5$. The solution is $(5,+\\infty)$.

So the statement is False.`,

    `**C.** → False

The expression is undefined at $x=-2$, and the solution is $(-2,3]$, not $[-2,3]$.

So the statement is False.`,

    `**D.** → True

With $u=|x|\\ge 0$, $u^{2}-3u-4<0$ gives $0\\le u<4$, i.e. $(-4,4)$.

So the statement is True.`,

    `**E.** → True

Squaring yields $(x-3)(x+1)>0$, so $(-\\infty,-1)\\cup(3,+\\infty)$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.NESTINEQ",
    id: "MATH 6.MOCK.NESTINEQ",
    title: "Nested absolute, radical, and rational inequality traps",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Abs sum solves on $[1.5,6.5]$. Radical solves $(5,\\infty)$. Rational excludes $-2$. $|x|<4$. Abs comparison $(-\\infty,-1)\\cup(3,\\infty)$.`,
  };
}

/** Q28 — piecewise cubic / linear junction. */
export function buildMathQ28Piecewise() {
  const context = `Define

$$
f(x)=
\\begin{cases}
-x^{2}+4x+1 & \\text{if }x<2,\\\\
x^{3}-6x^{2}+12x-3 & \\text{if }x\\ge 2.
\\end{cases}
$$

Decide whether each statement is true or false.`;

  // left at 2-: -4+8+1=5; right: 8-24+24-3=5. Continuous.
  // left deriv: -2x+4 → at 2-: 0; right: 3x^2-12x+12 → at 2+: 12-24+12=0. Differentiable!
  // For x≥2, f'(x)=3(x^2-4x+4)=3(x-2)^2≥0, f(2)=5, so f≥5 on [2,∞)
  // Global min on R? As x→-∞, -x^2→-∞, unbounded below. Claim global min 5 False
  // On x<2, f(x)=0: -x^2+4x+1=0 → x^2-4x-1=0 → x=2±√5; only 2-√5<2. Negative? 2-√5≈-0.236<0 True has negative root

  const statements = [
    "$f$ is continuous at $x=2$.",
    "$f$ is differentiable at $x=2$.",
    "For every $x\\ge 2$ one has $f(x)\\ge 5$, with equality at $x=2$.",
    "The global minimum value of $f$ on $\\mathbb{R}$ is $5$.",
    "On the region $x<2$, the equation $f(x)=0$ has a negative root.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Both pieces equal $5$ at $x=2$.

So the statement is True.`,

    `**B.** → True

Left derivative $-2x+4$ at $2^{-}$ is $0$; right derivative $3x^{2}-12x+12$ at $2^{+}$ is $0$.

So the statement is True.`,

    `**C.** → True

For $x\\ge 2$, $f'(x)=3(x-2)^{2}\\ge 0$ and $f(2)=5$, so $f(x)\\ge 5$.

So the statement is True.`,

    `**D.** → False

As $x\\to-\\infty$, $-x^{2}+4x+1\\to-\\infty$, so no global minimum $5$.

So the statement is False.`,

    `**E.** → True

$-x^{2}+4x+1=0$ gives $x=2\\pm\\sqrt{5}$; only $2-\\sqrt{5}<0$ lies in $x<2$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.JUNCTION",
    id: "MATH 7.MOCK.JUNCTION",
    title: "Quadratic–cubic junction — continuity and growth",
    chapter: 7,
    subsection: "7.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Continuous and differentiable at $2$ with value $5$. Nondecreasing on $[2,\\infty)$. Unbounded below on $(-\\infty,2)$. Root $2-\\sqrt{5}$.`,
  };
}

/** Q29 — power model with elasticity-style ratio traps. */
export function buildMathQ29Limits() {
  const context = `Let $A>0$ and $p\\in\\mathbb{R}$. Consider

$$
f(x)=A x^{p}\\qquad(x>0).
$$

Decide whether each statement is true or false.`;

  const statements = [
    "If $p>1$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$ and $\\displaystyle\\lim_{x\\to +\\infty}f(x)=+\\infty$.",
    "If $-1<p<0$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=+\\infty$ and $\\displaystyle\\lim_{x\\to +\\infty}f(x)=0$.",
    "For every real $p$, the ratio $f(3x)/f(x)$ is independent of $x$.",
    "If $p=-2$, then $\\displaystyle\\lim_{x\\to 0^{+}}x^{2}f(x)$ equals the positive constant $A$.",
    "If $p=1$, then $f(2)-f(1)=f(1)$.",
  ];

  // A True for p>1
  // B True for -1<p<0: x^p → ∞ as x→0+, →0 as x→∞
  // C True: 3^p
  // D: x^2 * A x^{-2} = A → A True
  // E: f(2)-f(1)=2A-A=A=f(1) True

  const answer_key = [true, true, true, true, true];

  // Wait - all true is bad for exam. Make B false: claim -1<p<0 implies lim x→0+ is 0 (wrong, it's ∞)
  // Or E false: claim f(2)-f(1)=2f(1) →  A = 2A False

  const statementsFixed = [
    "If $p>1$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$ and $\\displaystyle\\lim_{x\\to +\\infty}f(x)=+\\infty$.",
    "If $-1<p<0$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$.",
    "For every real $p$, the ratio $f(3x)/f(x)$ is independent of $x$.",
    "If $p=-2$, then $\\displaystyle\\lim_{x\\to 0^{+}}x^{2}f(x)$ equals the positive constant $A$.",
    "If $p=1$, then $f(2)-f(1)=2f(1)$.",
  ];

  const answer_key_fixed = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

For $p>1$, $x^{p}\\to 0$ as $x\\to 0^{+}$ and $x^{p}\\to+\\infty$ as $x\\to+\\infty$.

So the statement is True.`,

    `**B.** → False

For $-1<p<0$, $x^{p}\\to+\\infty$ as $x\\to 0^{+}$, not $0$.

So the statement is False.`,

    `**C.** → True

$$
\\dfrac{f(3x)}{f(x)}=3^{p}
$$

independent of $x$.

So the statement is True.`,

    `**D.** → True

$$
x^{2}\\cdot A x^{-2}=A
$$

So the statement is True.`,

    `**E.** → False

$f(2)-f(1)=2A-A=A$, while $2f(1)=2A$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POWTRAP",
    id: "MATH 8.MOCK.POWTRAP",
    title: "Power model — endpoint limits and ratio traps",
    chapter: 8,
    subsection: "8.2",
    context,
    statements: statementsFixed,
    answer_key: answer_key_fixed,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$p>1$ sends $0^{+}\\to 0$ and $+\\infty\\to\\infty$. For $-1<p<0$, $0^{+}$ blows up. Ratio $3^{p}$. $x^{2}f\\to A$ when $p=-2$. Linear case difference is $A$, not $2A$.`,
  };
}

/** Q30 — cubic with two parameters. */
export function buildMathQ30Param() {
  const context = `For real parameters $k$ and $m$, consider

$$
x^{3}-(k+1)x^{2}+(k+m)x-m=0.
$$

Decide whether each statement is true or false.`;

  // Factor: try x=1: 1-(k+1)+(k+m)-m=0 always. So (x-1)(x^2-kx+m)=0
  // Roots: 1, and (k±√(k^2-4m))/2

  const statements = [
    "$x=1$ is a real root for every real $k$ and $m$.",
    "When $k=2$ and $m=1$, the equation has exactly two distinct real roots.",
    "When $k=0$ and $m=-4$, the equation has three distinct real roots.",
    "When $k=1$ and $m=2$, the equation has exactly one real root.",
    "Whenever $k^{2}\\ge 4m$, the sum of all real roots counted with multiplicity equals $k+1$.",
  ];

  // A True
  // B: k=2,m=1 → x^2-2x+1=(x-1)^2 → roots 1,1,1 — one distinct. Claim two False
  // C: k=0,m=-4 → x^2+4=0 complex; only real root x=1. Claim three False
  // Wait x^2 - 0*x + (-4)=x^2-4? m=-4 → x^2 - k x + m = x^2 - 4. Roots ±2. Three distinct -2,1,2. True!
  // D: k=1,m=2 → x^2-x+2=0 disc 1-8<0 → one real root. True
  // E: when disc≥0 three real (count mult); Vieta sum = k+1. True. When disc=0 still three counting mult. True

  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

Substituting $x=1$ cancels for every $k,m$. Factoring gives $(x-1)(x^{2}-kx+m)=0$.

So the statement is True.`,

    `**B.** → False

For $k=2$, $m=1$ the quadratic is $(x-1)^{2}$, so the cubic is $(x-1)^{3}$: one distinct real root.

So the statement is False.`,

    `**C.** → True

For $k=0$, $m=-4$ the quadratic is $x^{2}-4$, roots $\\pm 2$. Together with $x=1$, three distinct reals.

So the statement is True.`,

    `**D.** → True

Discriminant $1-8<0$, so only the factor $x=1$ is real.

So the statement is True.`,

    `**E.** → True

When $k^{2}\\ge 4m$ there are three real roots counting multiplicity; Vieta gives sum $k+1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.TWOPAR",
    id: "MATH 9.MOCK.TWOPAR",
    title: "Two-parameter cubic — always-one-root factorisation",
    chapter: 9,
    subsection: "9.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Always $(x-1)(x^{2}-kx+m)$. Triple root at $(2,1)$. Three distinct at $(0,-4)$. One real at $(1,2)$. Vieta sum $k+1$.`,
  };
}

/** Q31 — coupled decay and endowment. */
export function buildMathQ31LogDeriv() {
  const context = `A tracer decays as $N(t)=N_{0}e^{-\\lambda t}$. At time zero the mass is $1200\\ \\mathrm{mg}$, and at $t=4$ years it is $750\\ \\mathrm{mg}$.

Separately, a fund follows $S(t)=S_{0}e^{rt}$ with $S_{0}=\\mathrm{EUR}\\ 4000$, and $S(6)=\\mathrm{EUR}\\ 5800$.

Decide whether each statement is true or false.`;

  // λ = -ln(750/1200)/4 = -ln(5/8)/4 = ln(8/5)/4 ≈ ln(1.6)/4 ≈ 0.470/4 ≈ 0.1175
  // half-life ln2/λ ≈ 0.693/0.1175 ≈ 5.90 < 6
  // after 8 years: 1200*(5/8)^2 = 1200*25/64 = 468.75 < 500
  // r = ln(5800/4000)/6 = ln(1.45)/6 ≈ 0.3716/6 ≈ 0.0619 > 0.055
  // time to 8000: ln(8000/4000)/r = ln2/r ≈ 0.693/0.0619 ≈ 11.20 > 11

  const statements = [
    "The tracer’s continuous decay rate satisfies $\\lambda>0.11$.",
    "The tracer’s half-life is strictly less than $6$ years.",
    "After $8$ years the remaining mass is still above $500\\ \\mathrm{mg}$.",
    "The fund’s continuous force satisfies $r>0.055$.",
    "The fund first reaches EUR $8000$ at some time $t>11$ years.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\lambda=\\dfrac{1}{4}\\ln\\dfrac{8}{5}\\approx\\dfrac{0.4700}{4}=0.1175>0.11
$$

So the statement is True.`,

    `**B.** → True

$$
t_{1/2}=\\dfrac{\\ln 2}{\\lambda}\\approx\\dfrac{0.6931}{0.1175}\\approx 5.90<6
$$

So the statement is True.`,

    `**C.** → False

$$
N(8)=1200\\left(\\dfrac{5}{8}\\right)^{2}=1200\\cdot\\dfrac{25}{64}=468.75<500
$$

So the statement is False.`,

    `**D.** → True

$$
r=\\dfrac{1}{6}\\ln\\dfrac{29}{20}\\approx\\dfrac{0.3716}{6}=0.0619>0.055
$$

So the statement is True.`,

    `**E.** → True

$$
t=\\dfrac{\\ln 2}{r}\\approx\\dfrac{0.6931}{0.0619}\\approx 11.20>11
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COUPLE",
    id: "MATH 10.MOCK.COUPLE",
    title: "Coupled tracer decay and endowment growth",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$\\lambda\\approx 0.1175$, half-life $\\approx 5.90$. $N(8)=468.75$. $r\\approx 0.0619$. Doubling time $\\approx 11.20$.`,
  };
}

/** Q31 was log-deriv in mock5; here Q32 is the hard derivative product. */
export function buildMathQ32Engagement() {
  const context = `An engagement score is modelled by

$$
Z(t)=t^{3}\\,e^{-2t}\\ln(t+1)\\qquad(t>0).
$$

Decide whether each statement is true or false.`;

  // One derivative check, then properties
  // Z' = e^{-2t} [ 3t^2 ln(t+1) - 2t^3 ln(t+1) + t^3/(t+1) ]
  // At t=1: e^{-2}[ 3ln2 - 2ln2 + 1/2 ] = e^{-2}(ln2 + 1/2) > 0

  const statements = [
    "$Z'(t)=e^{-2t}\\left(3t^{2}\\ln(t+1)-2t^{3}\\ln(t+1)+\\dfrac{t^{3}}{t+1}\\right)$ for all $t>0$.",
    "$Z(t)>0$ for every $t>0$.",
    "For $t>0$, the factor $e^{-2t}$ does not change the sign of $Z'$.",
    "$Z$ is strictly decreasing on $(0,+\\infty)$.",
    "$\\displaystyle\\lim_{t\\to +\\infty}Z(t)=0$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Three-factor product with $u=t^{3}$, $v=e^{-2t}$, $w=\\ln(t+1)$ yields the stated formula.

So the statement is True.`,

    `**B.** → True

For $t>0$ every factor is positive.

So the statement is True.`,

    `**C.** → True

$e^{-2t}>0$ always.

So the statement is True.`,

    `**D.** → False

At $t=1$ the bracket is $\\ln 2+\\tfrac{1}{2}>0$, so $Z'(1)>0$.

So the statement is False.`,

    `**E.** → True

Exponential decay dominates $t^{3}\\ln(t+1)$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.ZCUBE",
    id: "MATH 11.MOCK.ZCUBE",
    title: "Engagement $t^{3}e^{-2t}\\ln(t+1)$ — one derivative check",
    chapter: 11,
    subsection: "11.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Product rule matches A. $Z>0$; $e^{-2t}$ preserves sign; $Z'(1)>0$ kills monotone decrease; $Z\\to 0$ at $+\\infty$.`,
  };
}

/** Q33 — best-of-five unfair match. */
export function buildMathQ33Coins() {
  const context = `Ana and Ben play a best-of-five contest (first to three wins takes the match). Each game is independent. Ana wins a single game with probability $p=\\tfrac{3}{5}$; Ben wins with probability $q=\\tfrac{2}{5}$.

They stop when one player reaches three wins.

Decide whether each statement is true or false.`;

  // P(Ana wins)= sum_{k=3}^5 C(k-1,2) p^3 q^{k-3}
  // = C(2,2)p^3 + C(3,2)p^3 q + C(4,2)p^3 q^2
  // = p^3 + 3 p^3 q + 6 p^3 q^2 = p^3(1+3q+6q^2)
  // = (27/125)(1+6/5+6*4/25)=(27/125)(1+1.2+0.96)=(27/125)(3.16)=27/125 * 79/25 wait
  // 1+3*(2/5)+6*(4/25)=1+6/5+24/25=(25+30+24)/25=79/25
  // P= (27/125)*(79/25)=2133/3125=0.68256
  // P(Ana 3-0)=p^3=27/125=0.216
  // P(exactly 5 games)=2*C(4,2)p^2 q^2 = 12 p^2 q^2? Actually C(4,2) ways for 2-2 then fifth: C(4,2)p^2q^2
  // =6*(9/25)*(4/25)=216/625=0.3456
  // Claim P(Ana wins)=3/5 False
  // P(ends in 3)= p^3+q^3=27/125+8/125=35/125=7/25=0.28
  // Given 5 games, P(Ana wins)=p=3/5

  const statements = [
    "The probability Ana sweeps the match $3$–$0$ is $\\dfrac{27}{125}$.",
    "The probability the match lasts exactly five games is $\\dfrac{216}{625}$.",
    "The probability Ana wins the match equals $\\dfrac{3}{5}$.",
    "Conditional on the match lasting five games, the probability Ana wins the match is $\\dfrac{3}{5}$.",
    "The probability the match ends in exactly three games is $\\dfrac{7}{25}$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
p^{3}=\\left(\\dfrac{3}{5}\\right)^{3}=\\dfrac{27}{125}
$$

So the statement is True.`,

    `**B.** → True

A fifth game requires a $2$–$2$ split after four games:

$$
\\binom{4}{2}p^{2}q^{2}=6\\cdot\\dfrac{9}{25}\\cdot\\dfrac{4}{25}=\\dfrac{216}{625}
$$

So the statement is True.`,

    `**C.** → False

$$
P(\\text{Ana wins})=p^{3}(1+3q+6q^{2})=\\dfrac{27}{125}\\cdot\\dfrac{79}{25}=\\dfrac{2133}{3125}\\neq\\dfrac{3}{5}
$$

So the statement is False.`,

    `**D.** → True

Given $2$–$2$, the fifth game decides, and Ana wins it with probability $p=\\tfrac{3}{5}$.

So the statement is True.`,

    `**E.** → True

$$
p^{3}+q^{3}=\\dfrac{27+8}{125}=\\dfrac{35}{125}=\\dfrac{7}{25}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.BEST5",
    id: "MATH 12.MOCK.BEST5",
    title: "Best-of-five unfair match — length and winner traps",
    chapter: 12,
    subsection: "12.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Sweep $27/125$. Five games $216/625$. Ana match win $2133/3125\\neq 3/5$. Given five games, win prob $p$. Three-game match $7/25$.`,
  };
}

/** Q34 — binomial with large n and proportion traps. */
export function buildMathQ34Binomial() {
  const context = `A call centre handles $n=80$ independent outbound calls. Each call is a sale with probability $p=0.35$. Let $X\\sim\\mathrm{Bin}(80,0.35)$ and $\\hat{p}=X/80$.

Decide whether each statement is true or false.`;

  // mean 28, var 18.2, sd≈4.266 ∈ (4,5)
  // var claim 28 False
  // var hatp = 0.35*0.65/80 = 0.2275/80 = 0.00284375
  // sd hatp ≈ 0.0533 < 0.06

  const statements = [
    "The mean of $X$ is $28$ and the variance of $X$ is $18.2$.",
    "The standard deviation of $X$ is strictly between $4$ and $5$.",
    "The variance of $X$ equals $28$.",
    "The variance of the sales rate $\\hat{p}$ equals $0.00284375$.",
    "The standard deviation of $\\hat{p}$ is strictly less than $0.06$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=80\\cdot 0.35=28,\\qquad \\mathrm{Var}(X)=80\\cdot 0.35\\cdot 0.65=18.2
$$

So the statement is True.`,

    `**B.** → True

$$
\\sqrt{18.2}\\approx 4.266\\in(4,5)
$$

So the statement is True.`,

    `**C.** → False

Variance is $18.2$, not the mean $28$.

So the statement is False.`,

    `**D.** → True

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{0.35\\cdot 0.65}{80}=0.00284375
$$

So the statement is True.`,

    `**E.** → True

$$
\\sqrt{0.00284375}\\approx 0.0533<0.06
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 13.MOCK.CALL80",
    id: "MATH 13.MOCK.CALL80",
    title: "Eighty sales calls — binomial mean, variance, proportion",
    chapter: 13,
    subsection: "13.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=28$, $\\mathrm{Var}=18.2$, $\\mathrm{SD}\\approx 4.27$. Variance is not $28$. $\\mathrm{Var}(\\hat{p})=0.00284375$, $\\mathrm{SD}\\approx 0.053$.`,
  };
}
