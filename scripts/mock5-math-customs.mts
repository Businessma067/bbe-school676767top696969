/**
 * Mock Exam 5 — hardened custom math (Q22–34; Q25 unchanged pipes).
 * Teacher-step explanations; long multi-factor products jump to the final number.
 */

function binomCompact(n: number, k: number, val: number): string {
  const kEff = Math.min(k, n - k);
  const numer = Array.from({ length: kEff }, (_, i) => String(n - i)).join(" \\cdot ");
  const denom = Array.from({ length: kEff }, (_, i) => String(i + 1)).join(" \\cdot ");
  if (kEff >= 5) {
    return `$$
\\binom{${n}}{${k}} = \\dfrac{${n}!}{${k}!(${n}-${k})!}
$$

$$
\\dfrac{${n}!}{${k}!(${n - k})!} = \\dfrac{${numer}}{${denom}} = ${val}
$$

$$
\\binom{${n}}{${k}} = ${val}
$$`;
  }
  return `$$
\\binom{${n}}{${k}} = \\dfrac{${numer}}{${denom}} = ${val}
$$`;
}

/** Q22 — hard set-logic chain (not chests / knights). */
export function buildMathQ22Sets() {
  const context = `Let the universe be $U=\\{1,2,3,4,5,6\\}$. Define

$$
A=\\{1,2,3,4\\},\\qquad B=\\{3,4,5\\},\\qquad C=\\{1,5,6\\}.
$$

Work only with set operations (union, intersection, complement, difference). Decide whether each statement is true or false.`;

  // A∩B = {3,4}
  // A∪C = {1,2,3,4,5,6}=U
  // A\\B = {1,2}
  // B∩C = {5}
  // (A∪B)^c = {6} since A∪B={1,2,3,4,5}
  // AΔB = (A\\B)∪(B\\A) = {1,2}∪{5} = {1,2,5}
  // |(A∩B)∪(B∩C)| = |{3,4}∪{5}| = 3
  // C ⊆ A∪B ? C={1,5,6}, A∪B={1,2,3,4,5}, 6∉ → False
  // (A∩C)^c ∩ B = ... A∩C={1}, complement in U = {2,3,4,5,6}, ∩B = {3,4,5}

  const statements = [
    "$A\\cup C=U$ and $(A\\cup B)^{c}=\\{6\\}$.",
    "$A\\triangle B=\\{1,2,5\\}$ (symmetric difference).",
    "$|(A\\cap B)\\cup(B\\cap C)|=4$.",
    "$C\\subseteq A\\cup B$.",
    "$(A\\cap C)^{c}\\cap B=\\{3,4,5\\}$.",
  ];

  const answer_key = [true, true, false, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
A\\cup C=\\{1,2,3,4\\}\\cup\\{1,5,6\\}=\\{1,2,3,4,5,6\\}=U
$$

$$
A\\cup B=\\{1,2,3,4,5\\},\\qquad (A\\cup B)^{c}=U\\setminus(A\\cup B)=\\{6\\}
$$

Both parts hold.

So the statement is True.`,

    `**B.** → True

$$
A\\setminus B=\\{1,2\\},\\qquad B\\setminus A=\\{5\\}
$$

$$
A\\triangle B=(A\\setminus B)\\cup(B\\setminus A)=\\{1,2,5\\}
$$

So the statement is True.`,

    `**C.** → False

$$
A\\cap B=\\{3,4\\},\\qquad B\\cap C=\\{5\\}
$$

$$
(A\\cap B)\\cup(B\\cap C)=\\{3,4,5\\}
$$

Cardinality is $3$, not $4$.

So the statement is False.`,

    `**D.** → False

$$
A\\cup B=\\{1,2,3,4,5\\}
$$

But $6\\in C$ and $6\\notin A\\cup B$, so $C\\nsubseteq A\\cup B$.

So the statement is False.`,

    `**E.** → True

$$
A\\cap C=\\{1\\},\\qquad (A\\cap C)^{c}=\\{2,3,4,5,6\\}
$$

$$
(A\\cap C)^{c}\\cap B=\\{2,3,4,5,6\\}\\cap\\{3,4,5\\}=\\{3,4,5\\}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.SETS5",
    id: "MATH 1.MOCK.SETS5",
    title: "Universe of six elements — chained set identities",
    chapter: 1,
    subsection: "1.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Compute $A\\cup C=U$, $(A\\cup B)^{c}=\\{6\\}$, $A\\triangle B=\\{1,2,5\\}$, $|(A\\cap B)\\cup(B\\cap C)|=3$, $C\\nsubseteq A\\cup B$, $(A\\cap C)^{c}\\cap B=\\{3,4,5\\}$.`,
  };
}

/**
 * Q23 — five independent algebraic grind cases (no shortcut identities as crutches).
 * Pure expansion / clearing / checking — logic of “which claim survives calculation”.
 */
export function buildMathQ23Grind() {
  const context = `Five independent algebraic claims are listed. For each claim, expand or clear denominators step by step — do not rely on memorised shortcut identities. Decide whether each claim is true or false.`;

  // A: (2x-1)(x+3)=2x^2+6x-x-3=2x^2+5x-3. Claim says 2x^2+5x-3. True
  // B: 1/(x-1) - 1/(x+1) = 2/(x^2-1). True
  // C: √(x+3)=x-1 with x≥1: square → x+3=x^2-2x+1 → x^2-3x-2=0 → (3±√17)/2; only (3+√17)/2 works. Claim "exactly two real solutions" False
  // D: |2x-5|=3 → 2x-5=3 or 2x-5=-3 → x=4 or x=1. Claim solution set {1,4} True
  // E: expand (x+2)^3 = x^3+6x^2+12x+8. Claim says x^3+6x^2+12x+6 False (constant wrong)

  const statements = [
    "Expanding without collecting like terms early still yields $(2x-1)(x+3)=2x^{2}+5x-3$.",
    "For every $x$ with $|x|\\neq 1$, one has $\\dfrac{1}{x-1}-\\dfrac{1}{x+1}=\\dfrac{2}{x^{2}-1}$.",
    "The equation $\\sqrt{x+3}=x-1$ has exactly two distinct real solutions.",
    "The solution set of $|2x-5|=3$ is exactly $\\{1,4\\}$.",
    "Expanding term by term gives $(x+2)^{3}=x^{3}+6x^{2}+12x+6$.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Distribute carefully:

$$
(2x-1)(x+3)=2x\\cdot x+2x\\cdot 3+(-1)\\cdot x+(-1)\\cdot 3=2x^{2}+6x-x-3
$$

$$
2x^{2}+6x-x-3=2x^{2}+5x-3
$$

So the statement is True.`,

    `**B.** → True

Common denominator $(x-1)(x+1)=x^{2}-1$:

$$
\\dfrac{1}{x-1}-\\dfrac{1}{x+1}=\\dfrac{(x+1)-(x-1)}{x^{2}-1}=\\dfrac{x+1-x+1}{x^{2}-1}=\\dfrac{2}{x^{2}-1}
$$

So the statement is True.`,

    `**C.** → False

Domain of the radical: $x\\ge -3$. Nonnegativity of the right-hand side forces $x\\ge 1$. Squaring on that region:

$$
x+3=(x-1)^{2}=x^{2}-2x+1\\Rightarrow x^{2}-3x-2=0
$$

$$
x=\\dfrac{3\\pm\\sqrt{9+8}}{2}=\\dfrac{3\\pm\\sqrt{17}}{2}
$$

Only $\\dfrac{3+\\sqrt{17}}{2}\\approx 3.56$ lies in $x\\ge 1$. The other root is negative, so it is extraneous for the original equation. Exactly one real solution.

So the statement is False.`,

    `**D.** → True

$$
|2x-5|=3\\Rightarrow 2x-5=3\\ \\text{or}\\ 2x-5=-3
$$

$$
x=4\\quad\\text{or}\\quad x=1
$$

Solution set $\\{1,4\\}$.

So the statement is True.`,

    `**E.** → False

$$
(x+2)^{3}=(x+2)(x+2)(x+2)
$$

First $(x+2)^{2}=x^{2}+4x+4$, then

$$
(x^{2}+4x+4)(x+2)=x^{3}+2x^{2}+4x^{2}+8x+4x+8=x^{3}+6x^{2}+12x+8
$$

The constant term is $8$, not $6$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.GRIND",
    id: "MATH 2.MOCK.GRIND",
    title: "Five algebraic grind cases — expand, clear, check",
    chapter: 2,
    subsection: "2.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `A/B expand or clear correctly. Radical equation has one admissible root. Absolute equation $\\{1,4\\}$. Cube expansion ends in $+8$, not $+6$.`,
  };
}

/** Q24 — financial PV with consistent number formatting everywhere. */
export function buildMathQ24Finance() {
  const context = `All money amounts below are written the same way in claims and in workings: as plain integers in math mode (for example $10000$), and the currency word EUR sits outside math.

A scholarship fund will receive three gifts: $10000$ after $1$ year, $12000$ after $3$ years, and $14000$ after $4$ years. The annual effective discount rate is $5\\%$.

A second programme is a level perpetuity-due of $10000$ paid at the start of every year (including today), also at $5\\%$.

Decide whether each statement is true or false.`;

  // PV gifts: 10000/1.05 + 12000/1.05^3 + 14000/1.05^4
  // = 9523.81 + 10366.05 + 11517.83 = 31407.69
  // Claim A: PV of the three gifts exceeds 32000 → False
  // Claim B: PV of first gift alone is 10000/1.05 = 9523.81... strictly less than 9600 → True
  // Perpetuity-due: 10000 * (1.05)/0.05 = 10000*21 = 210000
  // Claim C: perpetuity-due PV equals 210000 → True
  // Claim D: if gifts were all paid one year earlier (0,2,3), PV would fall → False (should rise)
  // Claim E: 12000/1.05^3 > 14000/1.05^4 ? 10366 vs 11518 → False

  const statements = [
    "The present value of the three gifts exceeds $32000$.",
    "The present value of the single gift $10000$ due in one year is strictly less than $9600$.",
    "At $5\\%$, the perpetuity-due of $10000$ per year has present value exactly $210000$.",
    "Moving every gift one year earlier would strictly decrease the present value of the three-gift package.",
    "The present value of the $12000$ gift (year $3$) exceeds the present value of the $14000$ gift (year $4$).",
  ];

  const answer_key = [false, true, true, false, false];

  const tactical_explanations = [
    `**A.** → False

$$
\\mathrm{PV}=\\dfrac{10000}{1.05}+\\dfrac{12000}{1.05^{3}}+\\dfrac{14000}{1.05^{4}}
$$

$$
\\dfrac{10000}{1.05}\\approx 9523.81,\\quad \\dfrac{12000}{1.05^{3}}\\approx 10366.05,\\quad \\dfrac{14000}{1.05^{4}}\\approx 11517.83
$$

$$
\\mathrm{PV}\\approx 9523.81+10366.05+11517.83=31407.69\\ngtr 32000
$$

So the statement is False.`,

    `**B.** → True

$$
\\dfrac{10000}{1.05}\\approx 9523.81<9600
$$

So the statement is True.`,

    `**C.** → True

A perpetuity-due of $10000$ at rate $i=0.05$ has present value

$$
10000\\cdot\\dfrac{1+i}{i}=10000\\cdot\\dfrac{1.05}{0.05}=10000\\cdot 21=210000
$$

So the statement is True.`,

    `**D.** → False

Paying each cash flow one year earlier shortens every discount exponent, so each term’s present value rises and the package present value rises — it does not decrease.

So the statement is False.`,

    `**E.** → False

From letter A:

$$
\\dfrac{12000}{1.05^{3}}\\approx 10366.05,\\qquad \\dfrac{14000}{1.05^{4}}\\approx 11517.83
$$

The year-$3$ gift has the smaller present value.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.PVFMT",
    id: "MATH 3.MOCK.PVFMT",
    title: "Gifts and perpetuity-due — consistent cash formatting",
    chapter: 3,
    subsection: "3.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Three-gift PV ≈ $31408<32000$. One-year $10000$ discounts to ≈ $9524$. Perpetuity-due $=210000$. Earlier payment raises PV. Year-$4$ gift has larger PV than year-$3$.`,
  };
}

/** Q25 — kept (pipes). */
export function buildMathQ25Pipes() {
  const context = `Two inlet pipes and one drain serve a tank.

Pipe A alone fills the empty tank in $6$ hours.
Pipe B alone fills the empty tank in $4$ hours.
The drain alone empties a full tank in $12$ hours.

All three run together from empty. Decide whether each statement is true or false.`;

  const statements = [
    "A’s fill rate is strictly greater than $\\tfrac{1}{5}$ tank per hour.",
    "The combined net rate of A, B and the drain is exactly $\\tfrac{5}{12}$ tank per hour.",
    "Starting from empty with all three open, the tank is full in strictly less than $3$ hours.",
    "If only A and the drain run (B closed), the tank still fills, and the time needed exceeds $8$ hours.",
    "B alone fills more of the tank in $1$ hour than A and the drain together add net in $1$ hour.",
  ];

  const answer_key = [false, false, false, true, true];

  const tactical_explanations = [
    `**A.** → False

A’s rate is $\\dfrac{1}{6}$ tank per hour. Compare with $\\dfrac{1}{5}$:

$$
\\dfrac{1}{6}<\\dfrac{1}{5}
$$

So the statement is False.`,

    `**B.** → False

Net rate:

$$
\\dfrac{1}{6}+\\dfrac{1}{4}-\\dfrac{1}{12}=\\dfrac{2}{12}+\\dfrac{3}{12}-\\dfrac{1}{12}=\\dfrac{4}{12}=\\dfrac{1}{3}
$$

$$
\\dfrac{1}{3}\\neq \\dfrac{5}{12}
$$

So the statement is False.`,

    `**C.** → False

Time from empty at net rate $\\dfrac{1}{3}$ is exactly $3$ hours, not strictly less.

So the statement is False.`,

    `**D.** → True

A with drain only:

$$
\\dfrac{1}{6}-\\dfrac{1}{12}=\\dfrac{1}{12}
$$

Time to fill:

$$
12>8
$$

So the statement is True.`,

    `**E.** → True

B’s hourly fill is $\\dfrac{1}{4}$. A with drain nets $\\dfrac{1}{12}$. Since $\\dfrac{1}{4}>\\dfrac{1}{12}$, B alone outpaces that net flow.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.PIPES",
    id: "MATH 4.MOCK.PIPES",
    title: "Two inlets and a drain — rates and fill times",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Rates: $A=\\tfrac{1}{6}$, $B=\\tfrac{1}{4}$, drain $=\\tfrac{1}{12}$. Net all three $=\\tfrac{1}{3}$ (time $3$). A+drain $=\\tfrac{1}{12}$ (time $12$).`,
  };
}

/** Q26 — 3-product break-even mix (harder linear system). */
export function buildMathQ26BreakEven() {
  const context = `A workshop sells three products $X$, $Y$, $Z$ with unit contributions (price minus variable cost)

$$
c_X=4,\\qquad c_Y=5,\\qquad c_Z=6
$$

(in EUR per unit; keep EUR in prose). Monthly fixed costs are EUR $4800$. Let $x,y,z$ be the monthly unit volumes. A sales plan forces the mix ratios

$$
x=2z,\\qquad y=3z
$$

and requires the plan to sit exactly at break-even (total contribution equals fixed costs).

Decide whether each statement is true or false.`;

  // 4x+5y+6z = 4800, x=2z, y=3z
  // 4(2z)+5(3z)+6z = 8z+15z+6z = 29z = 4800 → z=4800/29 ≈ 165.517
  // x=2z≈331.03, y=3z≈496.55
  // Total units x+y+z=6z=28800/29≈993.1

  const statements = [
    "At break-even under the stated mix, $29z=4800$.",
    "The break-even volume of $Z$ is an integer number of units.",
    "Under the mix, break-even total unit volume $x+y+z$ is strictly less than $1000$.",
    "If fixed costs rose to EUR $5800$ with the same mix ratios, the required $z$ would exceed $200$.",
    "Dropping product $Y$ (set $y=0$) while keeping $x=2z$ and the original EUR $4800$ fixed costs would force a strictly larger break-even $z$ than in the three-product plan.",
  ];

  // A True
  // B: 4800/29 not integer False
  // C: 6*4800/29 = 28800/29 ≈ 993.1 < 1000 True
  // D: 29z=5800 → z=5800/29≈200.0 exactly 200, not exceed → False (strictly greater fails)
  // E: 4(2z)+6z=14z=4800 → z=4800/14≈342.9 > 165.5 True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Break-even:

$$
4x+5y+6z=4800
$$

Substitute $x=2z$ and $y=3z$:

$$
4(2z)+5(3z)+6z=8z+15z+6z=29z=4800
$$

So the statement is True.`,

    `**B.** → False

$$
z=\\dfrac{4800}{29}
$$

Since $29\\cdot 165=4785$ and $4800-4785=15\\neq 0$, $z$ is not an integer.

So the statement is False.`,

    `**C.** → True

$$
x+y+z=2z+3z+z=6z=\\dfrac{28800}{29}\\approx 993.10<1000
$$

So the statement is True.`,

    `**D.** → False

With fixed costs EUR $5800$:

$$
29z=5800\\Rightarrow z=\\dfrac{5800}{29}=200
$$

exactly, so $z$ does not exceed $200$.

So the statement is False.`,

    `**E.** → True

Without $Y$: $4(2z)+6z=14z=4800$, so

$$
z=\\dfrac{4800}{14}\\approx 342.86>\\dfrac{4800}{29}\\approx 165.52
$$

The required $z$ is strictly larger.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.BE3",
    id: "MATH 5.MOCK.BE3",
    title: "Three-product mix — break-even linear system",
    chapter: 5,
    subsection: "5.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Mix $x=2z$, $y=3z$ ⇒ $29z=4800$. $z$ non-integer; total units $6z\\approx 993$. At EUR $5800$, $z=200$ exactly. Dropping $Y$ raises $z$ to $4800/14$.`,
  };
}

/** Q27 — much harder inequalities with traps. */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false. Watch domains, absolute-value corners, and extraneous roots after squaring.`;

  // A: |x-1|+|x-4| ≥ 3 for all real x? Distance interpretation: |x-1|+|x-4| ≥ |4-1|=3 always. Equality on [1,4]. Claim "≥ 3 for all x with equality only at x=2.5" — equality on whole [1,4], not only midpoint. False if claim says only at 2.5.
  // Statement A: solution of |x-1|+|x-4|≤3 is exactly [1,4]. True (equals 3 on [1,4], >3 outside)
  // B: √(2x-1) < x-2. Domain x≥1/2; RHS>0 ⇒ x>2. Square: 2x-1 < x^2-4x+4 ⇒ 0<x^2-6x+5=(x-1)(x-5). On x>2: true for x>5. Also need check. Solution (5,∞). Claim "(2,∞)" False
  // C: (x-2)/(x+1) ≤ 0 on [-1,2]? Critical -1,2; sign chart negative on (-1,2], undefined at -1. So (-1,2], not including -1. Claim [-1,2] False
  // D: x^2 - |x| - 2 < 0. Let u=|x|≥0: u^2-u-2<0 → (u-2)(u+1)<0 → u<2 since u≥0. So |x|<2 → (-2,2). Claim (-2,2) True
  // E: |2x+1| > |x-3|. Square: (2x+1)^2 > (x-3)^2 → 4x^2+4x+1 > x^2-6x+9 → 3x^2+10x-8>0 → (3x-2)(x+4)>0 → x<-4 or x>2/3. Claim solution (-∞,-4)∪(2/3,∞) True

  const statements = [
    "The solution set of $|x-1|+|x-4|\\le 3$ is exactly $[1,4]$.",
    "The solution set of $\\sqrt{2x-1}<x-2$ is exactly $(2,+\\infty)$.",
    "The solution set of $\\dfrac{x-2}{x+1}\\le 0$ is exactly $[-1,2]$.",
    "The solution set of $x^{2}-|x|-2<0$ is exactly $(-2,2)$.",
    "The solution set of $|2x+1|>|x-3|$ is exactly $(-\\infty,-4)\\cup\\bigl(\\tfrac{2}{3},+\\infty\\bigr)$.",
  ];

  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

For any real $x$,

$$
|x-1|+|x-4|\\ge |(4)-(1)|=3
$$

with equality precisely when $x$ lies between $1$ and $4$. Hence $|x-1|+|x-4|\\le 3$ forces equality, i.e. $x\\in[1,4]$.

So the statement is True.`,

    `**B.** → False

Domain: $2x-1\\ge 0\\Rightarrow x\\ge \\tfrac{1}{2}$. Also $x-2>0\\Rightarrow x>2$ (else a nonnegative square root cannot be $<$ a nonpositive number). Squaring on $x>2$:

$$
2x-1<(x-2)^{2}=x^{2}-4x+4\\Rightarrow 0<x^{2}-6x+5=(x-1)(x-5)
$$

On $x>2$ this holds for $x>5$. Solution $(5,+\\infty)$, not $(2,+\\infty)$.

So the statement is False.`,

    `**C.** → False

Critical points $x=-1$ (undefined) and $x=2$. The quotient is negative or zero on $(-1,2]$, never at $x=-1$. The closed interval $[-1,2]$ wrongly includes the asymptote.

So the statement is False.`,

    `**D.** → True

Put $u=|x|\\ge 0$:

$$
u^{2}-u-2<0\\Rightarrow (u-2)(u+1)<0\\Rightarrow 0\\le u<2
$$

so $|x|<2$, i.e. $x\\in(-2,2)$.

So the statement is True.`,

    `**E.** → True

Both sides nonnegative, so squaring is valid:

$$
(2x+1)^{2}>(x-3)^{2}\\Rightarrow 3x^{2}+10x-8>0\\Rightarrow (3x-2)(x+4)>0
$$

Roots $-4$ and $\\tfrac{2}{3}$, so $x<-4$ or $x>\\tfrac{2}{3}$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.TRAP",
    id: "MATH 6.MOCK.TRAP",
    title: "Hard inequalities — absolute, radical, rational traps",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$|x-1|+|x-4|\\le 3\\Leftrightarrow[1,4]$. Radical inequality → $(5,\\infty)$. Rational ≤0 → $(-1,2]$. $x^{2}-|x|-2<0\\Leftrightarrow(-2,2)$. Absolute comparison → $(-\\infty,-4)\\cup(2/3,\\infty)$.`,
  };
}

/** Q28 — piecewise / conditional function claims (not a throw parabola). */
export function buildMathQ28Piecewise() {
  const context = `Define

$$
f(x)=
\\begin{cases}
2x+1 & \\text{if }x<1,\\\\
x^{2}-2x+4 & \\text{if }x\\ge 1.
\\end{cases}
$$

Decide whether each statement is true or false.`;

  // continuous at 1? left: 2(1)+1=3; right: 1-2+4=3. Yes continuous.
  // f'(from left)=2; from right at 1+: 2x-2 → 0. Not differentiable at 1.
  // On [1,∞) min of x^2-2x+4 at x=1 (vertex of parabola at x=1), value 3. For x<1, 2x+1 → as x→-∞ goes to -∞ so unbounded below.
  // f(0)=1; f(2)=4-4+4=4
  // f(x)≥3 for all x? No, f(0)=1.

  const statements = [
    "$f$ is continuous at $x=1$.",
    "$f$ is differentiable at $x=1$.",
    "For every $x\\ge 1$ one has $f(x)\\ge 3$, with equality at $x=1$.",
    "The global minimum value of $f$ on $\\mathbb{R}$ is $3$.",
    "If $x<1$ and $f(x)=0$, then $x=-\\tfrac{1}{2}$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Left limit: $2\\cdot 1+1=3$. Right-hand value: $1^{2}-2\\cdot 1+4=3$. Limits and value agree, so $f$ is continuous at $x=1$.

So the statement is True.`,

    `**B.** → False

Left-hand derivative is $2$. Right-hand derivative of $x^{2}-2x+4$ is $2x-2$, equal to $0$ at $x=1$. Since $2\\neq 0$, $f$ is not differentiable at $x=1$.

So the statement is False.`,

    `**C.** → True

For $x\\ge 1$, $f(x)=x^{2}-2x+4=(x-1)^{2}+3\\ge 3$, with equality exactly at $x=1$.

So the statement is True.`,

    `**D.** → False

On $x<1$, $f(x)=2x+1$ becomes arbitrarily negative as $x\\to-\\infty$, so no global minimum value $3$ exists on $\\mathbb{R}$.

So the statement is False.`,

    `**E.** → True

If $x<1$ and $f(x)=0$, then $2x+1=0$, so $x=-\\tfrac{1}{2}$, which indeed satisfies $x<1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.PIECE",
    id: "MATH 7.MOCK.PIECE",
    title: "Piecewise linear–quadratic — continuity and traps",
    chapter: 7,
    subsection: "7.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Continuous at $1$, not differentiable there. On $[1,\\infty)$ minimum $3$ at $x=1$, but no global min on $\\mathbb{R}$. Left piece zero at $x=-1/2$.`,
  };
}

/** Q29 — limits with letters only (no numeric substitution grind). */
export function buildMathQ29Limits() {
  const context = `Let $A>0$ and $p\\in\\mathbb{R}$ be parameters. Consider

$$
f(x)=A x^{p}\\qquad(x>0).
$$

Decide whether each statement is true or false. Work symbolically — do not plug in specific numbers for $A$ or $p$.`;

  const statements = [
    "If $p>0$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$.",
    "If $p<0$, then $\\displaystyle\\lim_{x\\to +\\infty}f(x)=0$.",
    "If $p=0$, then $f$ is the constant function $A$ on $(0,+\\infty)$.",
    "$\\displaystyle\\lim_{x\\to +\\infty}\\dfrac{f(2x)}{f(x)}=2^{p}$ for every real $p$.",
    "If $p=-1$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)$ is a finite positive number.",
  ];

  // A True (A>0, x^p→0)
  // B True
  // C True (x^0=1)
  // D: f(2x)/f(x)=A(2x)^p/(A x^p)=2^p True for all p
  // E: p=-1 → A/x → +∞ as x→0+, not finite False

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

For $p>0$ and $A>0$, $x^{p}\\to 0$ as $x\\to 0^{+}$, so $A x^{p}\\to 0$.

So the statement is True.`,

    `**B.** → True

For $p<0$ write $p=-q$ with $q>0$. Then $x^{p}=1/x^{q}\\to 0$ as $x\\to+\\infty$, hence $f(x)\\to 0$.

So the statement is True.`,

    `**C.** → True

If $p=0$, then $x^{0}=1$ for all $x>0$, so $f(x)=A$.

So the statement is True.`,

    `**D.** → True

$$
\\dfrac{f(2x)}{f(x)}=\\dfrac{A(2x)^{p}}{A x^{p}}=2^{p}
$$

for every real $p$ (and $x>0$).

So the statement is True.`,

    `**E.** → False

If $p=-1$, then $f(x)=A/x\\to+\\infty$ as $x\\to 0^{+}$, which is not a finite limit.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.LIM",
    id: "MATH 8.MOCK.LIM",
    title: "Power model $Ax^{p}$ — limits in letters only",
    chapter: 8,
    subsection: "8.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Sign of $p$ controls $0^{+}$ and $+\\infty$ limits. $p=0$ ⇒ constant $A$. Ratio $f(2x)/f(x)=2^{p}$. For $p=-1$, $A/x$ blows up at $0^{+}$.`,
  };
}

/** Q30 — parametric cubic equation with heavy calculation. */
export function buildMathQ30Param() {
  const context = `For a real parameter $k$, consider

$$
x^{3}-3x^{2}+(k+2)x-k=0.
$$

It is known that this factors as $(x-1)(x^{2}-2x+k)=0$. Decide whether each statement is true or false.`;

  // Roots: x=1 always; and 1±√(1-k) when k≤1
  // k=1 → triple root; k=0 → {0,1,2}; k=2 → one real root; Vieta sum 3

  const statements = [
    "$x=1$ is a real root for every real $k$.",
    "When $k=1$, the equation has exactly two distinct real roots.",
    "When $k=0$, the equation has three distinct real roots.",
    "When $k=2$, the equation has exactly one real root.",
    "Whenever $k\\le 1$, the sum of all real roots counted with multiplicity equals $3$.",
  ];

  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

The factorisation $(x-1)(x^{2}-2x+k)=0$ shows $x=1$ is always a root.

So the statement is True.`,

    `**B.** → False

For $k=1$,

$$
x^{2}-2x+1=(x-1)^{2}
$$

so the cubic is $(x-1)^{3}=0$: a single distinct real root $x=1$ of multiplicity three — not two distinct roots.

So the statement is False.`,

    `**C.** → True

For $k=0$ the quadratic is $x^{2}-2x=x(x-2)$. Roots $0$, $1$, and $2$ — three distinct reals.

So the statement is True.`,

    `**D.** → True

For $k=2$ the discriminant of $x^{2}-2x+2$ is $4-8=-4<0$, so only the real root $x=1$ remains.

So the statement is True.`,

    `**E.** → True

When $k\\le 1$ there are three real roots counting multiplicity (the quadratic contributes two real roots, possibly repeated). By Vieta the sum of roots of $x^{3}-3x^{2}+\\cdots$ is $3$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.PARAM",
    id: "MATH 9.MOCK.PARAM",
    title: "Parametric cubic — factorisation and root counts",
    chapter: 9,
    subsection: "9.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Always factor $(x-1)(x^{2}-2x+k)$. Root $x=1$ always. $k=1$ → triple root. $k=0$ → $\\{0,1,2\\}$. $k=2$ → one real root. Vieta sum $3$ when three real roots.`,
  };
}

/** Q31 — hard derivative with logarithm; ask structural claims, no numeric plug-ins. */
export function buildMathQ31LogDeriv() {
  const context = `Let

$$
f(x)=\\ln(x^{2}+1)\\cdot e^{-x}\\qquad(x\\in\\mathbb{R}).
$$

Decide whether each statement is true or false. Do not evaluate $f$ or $f'$ at a specific numeric point — work with the symbolic derivative.`;

  // f' = (2x/(x^2+1)) e^{-x} + ln(x^2+1)(-e^{-x})
  // = e^{-x} [ 2x/(x^2+1) - ln(x^2+1) ]
  // Critical points when 2x/(x^2+1) = ln(x^2+1)
  // f'(0)= e^0 [0 - ln1]=0. So x=0 is critical.
  // For x>0, ln(x^2+1)>0 and 2x/(x^2+1)>0; for x<0, 2x/(x^2+1)<0 while ln>0 for x≠0 so f'<0 on (-∞,0) except... at 0 f'=0.
  // Actually for x<0: 2x/(x^2+1)<0, ln(x^2+1)≥0, so bracket negative, e^{-x}>0 ⇒ f'<0 on (-∞,0).
  // A: f'(x)=e^{-x}(2x/(x^2+1)-ln(x^2+1)) True
  // B: f'(0)=0 True
  // C: f'(x)<0 for every x<0 True
  // D: f has no critical points False (has x=0)
  // E: the factor e^{-x} never changes the sign of f' True (always >0)

  const statements = [
    "$f'(x)=e^{-x}\\left(\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1)\\right)$ for all real $x$.",
    "$x=0$ is a critical point of $f$.",
    "$f'(x)<0$ for every $x<0$.",
    "$f$ has no critical points on $\\mathbb{R}$.",
    "Because $e^{-x}>0$ always, the sign of $f'$ coincides with the sign of $\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1)$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Product rule and chain rule:

$$
f'(x)=\\dfrac{2x}{x^{2}+1}\\,e^{-x}+\\ln(x^{2}+1)\\cdot\\bigl(-e^{-x}\\bigr)
$$

$$
=e^{-x}\\left(\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1)\\right)
$$

So the statement is True.`,

    `**B.** → True

At $x=0$:

$$
\\dfrac{2\\cdot 0}{0+1}-\\ln 1=0
$$

so $f'(0)=e^{0}\\cdot 0=0$. Hence $x=0$ is critical.

So the statement is True.`,

    `**C.** → True

For $x<0$ one has $\\dfrac{2x}{x^{2}+1}<0$ while $\\ln(x^{2}+1)>0$, so the bracket is strictly negative. Multiplying by $e^{-x}>0$ keeps $f'(x)<0$.

So the statement is True.`,

    `**D.** → False

Letter B already produces a critical point at $x=0$.

So the statement is False.`,

    `**E.** → True

The exponential factor never vanishes and never changes sign, so it does not alter the sign of the bracket.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.LOGD",
    id: "MATH 10.MOCK.LOGD",
    title: "Log–exponential product — symbolic derivative claims",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$f'=e^{-x}(2x/(x^{2}+1)-\\ln(x^{2}+1))$. Critical at $0$; $f'<0$ on $(-\\infty,0)$; exponential factor preserves sign.`,
  };
}

/**
 * Q32 — like course “square × nested log” but ~2× harder product/chain,
 * diverse claims (not only “is this the derivative”).
 */
export function buildMathQ32Engagement() {
  const context = `An engagement score is modelled by

$$
Z(t)=t^{2}\\,e^{-t}\\ln(2t+1)\\qquad(t>0).
$$

Decide whether each statement is true or false.`;

  // Use product of three: u=t^2, v=e^{-t}, w=ln(2t+1)
  // Z' = u'vw + uv'w + uvw'
  // u'=2t, v'=-e^{-t}, w'=2/(2t+1)
  // Z' = 2t e^{-t} ln(2t+1) + t^2 (-e^{-t}) ln(2t+1) + t^2 e^{-t} * 2/(2t+1)
  // = e^{-t} [ 2t ln(2t+1) - t^2 ln(2t+1) + 2t^2/(2t+1) ]

  // At t=1: e^{-1} [ 2ln3 - 1·ln3 + 2/(3) ] = e^{-1}(ln3 + 2/3)
  // Claim A: formula for Z' True
  // Claim B: Z'(1)=e^{-1}(ln3 + 2/3) True
  // Claim C: Z'(1)=e^{-1}(2ln3 + 2/3) False (would forget the -t^2 term partially)
  // Claim D: the factor e^{-t} may be ignored when comparing the sign of Z' to the bracket True
  // Claim E: Z(t)>0 for all t>0 True (all factors positive for t>0)

  const statements = [
    "$Z'(t)=e^{-t}\\left(2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}\\right)$ for all $t>0$.",
    "$Z'(1)=e^{-1}\\left(\\ln 3+\\dfrac{2}{3}\\right)$.",
    "$Z'(1)=e^{-1}\\left(2\\ln 3+\\dfrac{2}{3}\\right)$.",
    "For $t>0$, the sign of $Z'(t)$ coincides with the sign of $2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}$.",
    "$Z(t)>0$ for every $t>0$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Write $Z=u\\,v\\,w$ with $u=t^{2}$, $v=e^{-t}$, $w=\\ln(2t+1)$. Then

$$
u'=2t,\\qquad v'=-e^{-t},\\qquad w'=\\dfrac{2}{2t+1}
$$

$$
Z'=u'vw+uv'w+uvw'
$$

$$
=2t\\,e^{-t}\\ln(2t+1)+t^{2}(-e^{-t})\\ln(2t+1)+t^{2}e^{-t}\\cdot\\dfrac{2}{2t+1}
$$

$$
=e^{-t}\\left(2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}\\right)
$$

So the statement is True.`,

    `**B.** → True

At $t=1$ the bracket is

$$
2\\ln 3-\\ln 3+\\dfrac{2}{3}=\\ln 3+\\dfrac{2}{3}
$$

so

$$
Z'(1)=e^{-1}\\left(\\ln 3+\\dfrac{2}{3}\\right)
$$

So the statement is True.`,

    `**C.** → False

Letter B already gives $e^{-1}(\\ln 3+2/3)$, not $e^{-1}(2\\ln 3+2/3)$. The false form forgets the $-t^{2}\\ln(2t+1)$ contribution at $t=1$.

So the statement is False.`,

    `**D.** → True

The factor $e^{-t}$ is always positive, so it does not change the sign of the bracket.

So the statement is True.`,

    `**E.** → True

For $t>0$ one has $t^{2}>0$, $e^{-t}>0$, and $\\ln(2t+1)>\\ln 1=0$, so the product $Z(t)$ is positive.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.ZLOG",
    id: "MATH 11.MOCK.ZLOG",
    title: "Engagement score $t^{2}e^{-t}\\ln(2t+1)$ — product of three",
    chapter: 11,
    subsection: "11.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Three-factor product rule yields the stated $Z'$. At $t=1$, bracket $\\ln3+2/3$. Sign of $Z'$ follows the bracket; $Z>0$ on $(0,\\infty)$.`,
  };
}

/** Q33 — confusing best-of / coin tournament probability. */
export function buildMathQ33Coins() {
  const context = `Ana and Ben play a best-of-three coin contest (first to two wins takes the match). Each game is independent. Ana wins a single game with probability $p=\\tfrac{2}{3}$; Ben wins with probability $q=\\tfrac{1}{3}$.

They always play until one player has two wins (so the match ends in two or three games).

Decide whether each statement is true or false.`;

  // P(Ana wins in 2)= p^2 = 4/9
  // P(Ben wins in 2)= q^2 = 1/9
  // P(goes to game 3)= 2pq = 4/9
  // P(Ana wins match)= p^2 + 2pq*p = p^2 + 2p^2 q = p^2(1+2q)= (4/9)(1+2/3)=(4/9)(5/3)=20/27
  // Or: Ana wins 2-0 or 2-1: C(2,2)p^2 + C(2,1)p^2 q wait standard: p^2 + 2p^2 q = 4/9 + 2*(4/9)*(1/3)=4/9+8/27=12/27+8/27=20/27
  // P(Ben wins)=1-20/27=7/27 = q^2 + 2q^2 p = 1/9 + 2*(1/9)*(2/3)=1/9+4/27=3/27+4/27=7/27
  // P(exactly 3 games)=2pq=4/9
  // P(Ana wins | exactly 3 games)=P(split first two then Ana)= (2pq * p)/(2pq)=p=2/3
  // Trap: P(Ana wins) = 2/3? False that's just game win prob
  // E: P(match ends in 2 games)= p^2+q^2=4/9+1/9=5/9

  const statements = [
    "The probability Ana wins the match in exactly two games is $\\dfrac{4}{9}$.",
    "The probability the match lasts exactly three games is $\\dfrac{4}{9}$.",
    "The probability Ana wins the match (in two or three games) equals $\\dfrac{2}{3}$.",
    "Conditional on the match lasting three games, the probability Ana wins the match is $\\dfrac{2}{3}$.",
    "The probability the match ends in exactly two games is $\\dfrac{5}{9}$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Ana sweeps $2$–$0$ with probability

$$
p^{2}=\\left(\\dfrac{2}{3}\\right)^{2}=\\dfrac{4}{9}
$$

So the statement is True.`,

    `**B.** → True

A third game occurs precisely when the first two games are split:

$$
2pq=2\\cdot\\dfrac{2}{3}\\cdot\\dfrac{1}{3}=\\dfrac{4}{9}
$$

So the statement is True.`,

    `**C.** → False

Ana’s match-win probability is

$$
p^{2}+2p^{2}q=p^{2}(1+2q)=\\dfrac{4}{9}\\left(1+\\dfrac{2}{3}\\right)=\\dfrac{4}{9}\\cdot\\dfrac{5}{3}=\\dfrac{20}{27}
$$

which is not $\\dfrac{2}{3}=\\dfrac{18}{27}$. The value $\\dfrac{2}{3}$ is only Ana’s per-game win probability.

So the statement is False.`,

    `**D.** → True

Given a $1$–$1$ split after two games, the third game decides the match, and Ana wins that game with probability $p=\\dfrac{2}{3}$.

So the statement is True.`,

    `**E.** → True

$$
P(\\text{ends in two})=p^{2}+q^{2}=\\dfrac{4}{9}+\\dfrac{1}{9}=\\dfrac{5}{9}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.BEST3",
    id: "MATH 12.MOCK.BEST3",
    title: "Best-of-three unfair coin match — length and winner traps",
    chapter: 12,
    subsection: "12.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Ana $2$–$0$: $4/9$. Three games: $4/9$. Ana match win $20/27\\neq 2/3$. Given three games, Ana wins with $p=2/3$. Two-game match: $5/9$.`,
  };
}

/** Q34 — real-life binomial with Var / SD traps. */
export function buildMathQ34Binomial() {
  const context = `A call centre handles $n=50$ independent outbound calls in an evening. Each call is a “sale” with probability $p=0.4$, independently of the others. Let $X$ be the number of sales that evening, so $X\\sim\\mathrm{Bin}(50,0.4)$.

Let $\\hat{p}=X/50$ be the evening’s sales rate (a sample proportion).

Decide whether each statement is true or false.`;

  // E[X]=20, Var(X)=50*0.4*0.6=12, SD(X)=√12=2√3≈3.464
  // E[hat p]=0.4, Var(hat p)=pq/n=0.24/50=0.0048, SD(hat p)=√0.0048≈0.0693
  // Trap: Var(X)=np=20 False
  // Trap: SD(X)=Var(X) False
  // Trap: Var(hat p)=Var(X) False
  // Claim: SD(X) strictly between 3 and 4 True
  // Claim: Var(hat p)=0.0048 True
  // Claim: E[X]=20 True
  // Claim: Var(X)=np(1-p)=12 True
  // Claim: SD(hat p) = SD(X)/50 True (yes √(Var X / n^2)=SD(X)/n)

  const statements = [
    "$E[X]=20$ and $\\mathrm{Var}(X)=12$.",
    "The standard deviation of $X$ is strictly between $3$ and $4$.",
    "$\\mathrm{Var}(X)=np=20$.",
    "$\\mathrm{Var}(\\hat{p})=\\dfrac{p(1-p)}{n}=0.0048$.",
    "$\\mathrm{SD}(\\hat{p})=\\dfrac{\\mathrm{SD}(X)}{50}$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=np=50\\cdot 0.4=20
$$

$$
\\mathrm{Var}(X)=np(1-p)=50\\cdot 0.4\\cdot 0.6=12
$$

So the statement is True.`,

    `**B.** → True

$$
\\mathrm{SD}(X)=\\sqrt{12}=2\\sqrt{3}
$$

Since $\\sqrt{9}=3$ and $\\sqrt{16}=4$, and $9<12<16$, one has $3<2\\sqrt{3}<4$.

So the statement is True.`,

    `**C.** → False

The identity $\\mathrm{Var}(X)=np$ forgets the factor $(1-p)$. The correct variance is $np(1-p)=12$, not $20$.

So the statement is False.`,

    `**D.** → True

For the sample proportion $\\hat{p}=X/n$,

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{p(1-p)}{n}=\\dfrac{0.4\\cdot 0.6}{50}=\\dfrac{0.24}{50}=0.0048
$$

So the statement is True.`,

    `**E.** → True

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{\\mathrm{Var}(X)}{n^{2}}\\Rightarrow \\mathrm{SD}(\\hat{p})=\\dfrac{\\mathrm{SD}(X)}{n}=\\dfrac{\\mathrm{SD}(X)}{50}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 13.MOCK.CALLS",
    id: "MATH 13.MOCK.CALLS",
    title: "Call-centre sales — binomial mean, variance, and proportion traps",
    chapter: 13,
    subsection: "13.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[X]=20$, $\\mathrm{Var}(X)=12$, $\\mathrm{SD}(X)=2\\sqrt{3}\\in(3,4)$. Trap $\\mathrm{Var}=np$ fails. $\\mathrm{Var}(\\hat{p})=0.0048$, $\\mathrm{SD}(\\hat{p})=\\mathrm{SD}(X)/50$.`,
  };
}
