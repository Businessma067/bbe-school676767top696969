/**
 * Mock Exam 6 — HARD alternate in-chapter types (vs Mock 5 engines).
 * Multi-step chains, comparison traps, domains — not one-line plug-ins.
 * Tables must live in `tables_markdown` (exam UI does not render stem pipe-tables).
 */

/** Q22 — five crafty, mutually different logic claims (ch1). No sign-chart theme. */
export function buildMathQ22Sets() {
  const context = `Let $U=\\{1,2,3,\\ldots,12\\}$. Define
$A=\\{n\\in U: n\\text{ is even}\\}$,
$B=\\{n\\in U: n\\text{ is a multiple of }3\\}$,
$C=\\{n\\in U: n\\text{ is a multiple of }4\\}$,
and let $P(n)$ mean “$n\\in A$” while $Q(n)$ means “$n\\in B$”.

Decide whether each claim is true or false.`;

  // A={2,4,6,8,10,12} |A|=6
  // B={3,6,9,12} |B|=4
  // C={4,8,12} |C|=3
  // A∩B={6,12} | |=2; A∪B has 8; A△B has 6
  // C⊆A True; A∩B⊆C? 6∉C False
  // ∃n∈A (n∉B ∧ n∈C): 4,8 True
  // ∀n (P(n)∧Q(n) ⇒ n∈C): fails at 6 False
  // The complementary count |U\\(A∪B)|=12-8=4, claim =3 False

  const statements = [
    "The set $A\\cup B$ contains exactly eight elements of $U$.",
    "Every element of $C$ automatically belongs to $A$, but the converse fails: some element of $A$ lies outside $C$.",
    "Every common element of $A$ and $B$ also belongs to $C$.",
    "There exists an even element of $U$ that is a multiple of $4$ yet is not a multiple of $3$.",
    "Whenever $P(n)$ and $Q(n)$ both hold, $n$ must lie in $C$.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$|A|=6$, $|B|=4$, $|A\\cap B|=2$, so $|A\\cup B|=6+4-2=8$.

So the statement is True.`,

    `**B.** → True

$C=\\{4,8,12\\}\\subseteq A$, while e.g. $2\\in A\\setminus C$.

So the statement is True.`,

    `**C.** → False

$6\\in A\\cap B$ but $6\\notin C$.

So the statement is False.`,

    `**D.** → True

$n=4$ (or $n=8$) is even, in $C$, and not a multiple of $3$.

So the statement is True.`,

    `**E.** → False

$P(6)\\wedge Q(6)$ holds, yet $6\\notin C$. Equivalently: $A\\cap B\\not\\subseteq C$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 1.MOCK.LOGICQ",
    id: "MATH 1.MOCK.LOGICQ",
    title: "Even–multiple sets — five unlike logic traps",
    chapter: 1,
    subsection: "1.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$|A\\cup B|=8$. $C\\subseteq A\\neq$ converse. $6\\in A\\cap B\\setminus C$. Exists $4\\in A\\cap C\\setminus B$. $P\\wedge Q\\not\\Rightarrow$ in $C$.`,
  };
}

/** Q23 — chained rational identities with removable discontinuities (ch2). */
export function buildMathQ23Grind() {
  const context = `Define, wherever the expressions make sense,

$$
E(x)=\\dfrac{x^{3}-8}{x-2},\\qquad F(x)=x^{2}+2x+4,\\qquad H(x)=\\dfrac{E(x)-12}{x-2}.
$$

Decide whether each statement is true or false.`;

  const statements = [
    "$E(x)=F(x)$ holds for every real number $x$.",
    "For every $x\\neq 2$ one has $E(x)=F(x)$, and $\\lim_{x\\to 2}E(x)=F(2)$.",
    "For every $x\\neq 2$ one has $H(x)=x+4$.",
    "The original formula for $H$ is defined at $x=2$ and equals $6$.",
    "$E(3)=19$ and $F(3)=19$.",
  ];

  const answer_key = [false, true, true, false, true];

  const tactical_explanations = [
    `**A.** → False

$E$ is undefined at $x=2$, while $F(2)=12$ is defined, so equality fails as an identity on all of $\\mathbb{R}$.

So the statement is False.`,

    `**B.** → True

For $x\\neq 2$, cancel $x-2$ in $x^{3}-8=(x-2)(x^{2}+2x+4)$. The limit of $E$ at $2$ equals $F(2)=12$.

So the statement is True.`,

    `**C.** → True

On $x\\neq 2$, $E(x)-12=x^{2}+2x-8=(x-2)(x+4)$, so $H(x)=x+4$.

So the statement is True.`,

    `**D.** → False

The written formula for $H$ still has denominator $x-2$ (and uses $E$, undefined at $2$), so $H(2)$ is not defined by that formula.

So the statement is False.`,

    `**E.** → True

Directly: $E(3)=\\dfrac{27-8}{1}=19$ and $F(3)=9+6+4=19$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.RATSIM",
    id: "MATH 2.MOCK.RATSIM",
    title: "Cubic cancellation chain — removable holes and derived $H$",
    chapter: 2,
    subsection: "2.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=F$ off $2$ with removable hole. $H=x+4$ off $2$, but original $H$ undefined at $2$. $E(3)=F(3)=19$.`,
  };
}

/** Q24 — mortgage with mid-term interest comparisons (ch3), not plug-in PV. */
export function buildMathQ24Finance() {
  const context = `A loan of EUR $87500$ is repaid by six equal year-end payments at annual effective rate $7.5\\%$. Let $A$ be the payment and $B_k$ the outstanding principal immediately after the year-$k$ payment ($B_0=87500$).

Decide whether each statement is true or false.`;

  const statements = [
    "The level payment $A$ lies strictly between EUR $18500$ and EUR $18800$.",
    "Interest in year $1$ exceeds interest in year $2$ by strictly more than EUR $900$.",
    "Immediately after the third payment, more than half of the original principal is still outstanding.",
    "Interest charged in year $5$ is strictly less than EUR $2600$.",
    "Total interest paid over the six years is strictly less than EUR $24000$.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
A=87500\\cdot\\dfrac{0.075}{1-1.075^{-6}}\\approx 18641\\in(18500,18800)
$$

So the statement is True.`,

    `**B.** → True

Year-$1$ interest is $0.075\\cdot 87500=6562.5$. With $B_{1}\\approx 75421$, year-$2$ interest is about $5657$. The gap is about $906>900$.

So the statement is True.`,

    `**C.** → True

$B_{3}\\approx 48478>43750=\\tfrac12\\cdot 87500$.

So the statement is True.`,

    `**D.** → True

$B_{4}\\approx 33472$, so year-$5$ interest is about $0.075\\cdot 33472\\approx 2510<2600$.

So the statement is True.`,

    `**E.** → False

Total paid is about $6A\\approx 111849$, so total interest is about $24349>24000$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.MORT5",
    id: "MATH 3.MOCK.MORT5",
    title: "Six-payment loan — staggered interest and half-life of principal",
    chapter: 3,
    subsection: "3.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$A\\approx 18641$. Interest gap year1−year2 $\\approx 906$. $B_3>43750$. Year-5 interest $\\approx 2510$. Total interest $\\approx 24349$.`,
  };
}

/** Q25 — deliberately easy two-equation pack (ch4). */
export function buildMathQ25Pipes() {
  const context = `Consider the two linear equations

$$
x+y=7,\\qquad 2x-y=5.
$$

Decide whether each statement is true or false.`;

  // Add: 3x=12 ⇒ x=4, y=3
  // Unique solution. x>y. Product 12. Sum of squares 16+9=25. No second solution.

  const statements = [
    "The pair $(x,y)=(4,3)$ solves both equations at once.",
    "The system has exactly one real solution.",
    "In the solution, $x$ is strictly larger than $y$.",
    "The product of the two solution coordinates equals $12$.",
    "There is a second distinct real solution besides $(4,3)$.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$4+3=7$ and $2\\cdot 4-3=5$.

So the statement is True.`,

    `**B.** → True

Adding the equations yields $3x=12$, so $x=4$, $y=3$ uniquely.

So the statement is True.`,

    `**C.** → True

$4>3$.

So the statement is True.`,

    `**D.** → True

$4\\cdot 3=12$.

So the statement is True.`,

    `**E.** → False

A non-degenerate $2\\times 2$ linear system has at most one solution; here it is $(4,3)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.EQPACK",
    id: "MATH 4.MOCK.EQPACK",
    title: "Two easy linear equations — unique solution checks",
    chapter: 4,
    subsection: "4.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "2/5",
    solution_overview: `Unique solution $(4,3)$. $x>y$, product $12$, no second root.`,
  };
}

/** Q26 — verbal system interpretation; no coordinate plug-in (ch5). */
export function buildMathQ26BreakEven() {
  const context = `A planner allocates non-negative hours $x$ on line A and $y$ on line B. The brief is given only in words, with a real parameter $t$:

- Twice the A-hours plus the B-hours must equal $t$.
- The B-hours must equal the A-hours plus $2$.
- Both hour totals must be at least $0$.

Decide whether each statement is true or false. Do not treat the letters as invitations to guess a single numeric pair; reason from the structure.`;

  // 2x+y=t, y=x+2 ⇒ 2x+(x+2)=t ⇒ 3x+2=t ⇒ x=(t-2)/3, y=(t-2)/3+2=(t-2+6)/3=(t+4)/3
  // Feasible iff x≥0,y≥0 ⇒ t≥2 (then y>0 auto)
  // Unique for each t (always unique real solution of the two eqs; feasibility is separate)
  // At t=2: x=0,y=2
  // At t=5: x=1,y=3
  // Claim "for every t>0 feasible" False (t=1 gives x=-1/3)
  // Claim "if feasible then y>x" True (y=x+2)
  // Claim "two different feasible pairs for same t" False
  // Claim "t=2 is feasible with x=0" True
  // Claim "increasing t by 3 increases both x and y by 1" True

  const statements = [
    "For every real $t>0$ there exist feasible hours $x\\ge 0$, $y\\ge 0$ meeting both requirements.",
    "Whenever a feasible pair exists, the B-hours strictly exceed the A-hours.",
    "For a fixed $t$, at most one feasible pair $(x,y)$ can satisfy the brief.",
    "The value $t=2$ admits a feasible schedule that uses no A-hours at all.",
    "Raising the target $t$ by exactly $3$ increases each of $x$ and $y$ by exactly $1$, on the unique algebraic solution of the two equalities.",
  ];

  const answer_key = [false, true, true, true, true];

  const tactical_explanations = [
    `**A.** → False

The equalities force $x=(t-2)/3$. Feasibility needs $x\\ge 0$, hence $t\\ge 2$. For $0<t<2$ the algebraic solution has negative A-hours.

So the statement is False.`,

    `**B.** → True

The second requirement is $y=x+2$, so $y>x$ whenever a solution exists.

So the statement is True.`,

    `**C.** → True

Two independent linear equalities in two unknowns determine at most one pair; the non-negativity cut cannot create a second pair.

So the statement is True.`,

    `**D.** → True

At $t=2$: $x=0$, $y=2$, both feasible.

So the statement is True.`,

    `**E.** → True

$x=(t-2)/3$ and $y=(t+4)/3$ each increase by $1$ when $t$ increases by $3$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.LIN2",
    id: "MATH 5.MOCK.LIN2",
    title: "Verbal two-line schedule — feasibility without plugging pairs",
    chapter: 5,
    subsection: "5.10",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Unique pair $x=(t-2)/3$, $y=(t+4)/3$. Feasible iff $t\\ge 2$. Always $y>x$. $+3$ in $t$ shifts both by $+1$.`,
  };
}

/** Q27 — five unlike root / absolute-value packs (ch6). */
export function buildMathQ27Ineq() {
  const context = `Decide whether each claim is true or false. The five letters concern five different equations or inequalities.`;

  // A: |2x-1|=|x+3| ⇒ 2x-1=x+3 or 2x-1=-(x+3) ⇒ x=4 or 3x=-2 ⇒ x=-2/3. Two solutions True
  // B: √(x+3)=x-1. Domain x≥-3 and x-1≥0 ⇒ x≥1. Square: x+3=(x-1)^2=x^2-2x+1 ⇒ 0=x^2-3x-2 ⇒ x=(3±√17)/2. Only (3+√17)/2≈3.56≥1. One solution. Claim "exactly two" False
  // C: |x-2|+|x+1|≥3 for all real x? Min on [-1,2] is 3, elsewhere larger. So ≥3 always True
  // D: ∛(x-1)=2 ⇒ x-1=8 ⇒ x=9. Claim solution x=7 False
  // E: |x²-1|≤0 ⇔ x²-1=0 ⇔ x=±1. Claim solution set is empty False

  const statements = [
    "The equation $|2x-1|=|x+3|$ has exactly two real solutions.",
    "The equation $\\sqrt{x+3}=x-1$ has exactly two real solutions.",
    "The inequality $|x-2|+|x+1|\\ge 3$ holds for every real number $x$.",
    "The real number $x=7$ solves $\\sqrt[3]{x-1}=2$.",
    "The inequality $|x^{2}-1|\\le 0$ has no real solution.",
  ];

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$2x-1=x+3$ gives $x=4$. $2x-1=-(x+3)$ gives $x=-\\tfrac23$. Two roots.

So the statement is True.`,

    `**B.** → False

Domain forces $x\\ge 1$. Squaring yields $x=(3\\pm\\sqrt{17})/2$; only the plus root survives. Exactly one real solution.

So the statement is False.`,

    `**C.** → True

On $[-1,2]$ the left-hand side equals the constant $3$; outside that interval it is strictly larger. So the inequality holds everywhere.

So the statement is True.`,

    `**D.** → False

$\\sqrt[3]{x-1}=2$ forces $x-1=8$, hence $x=9\\neq 7$.

So the statement is False.`,

    `**E.** → False

$|x^{2}-1|\\le 0$ forces $x^{2}-1=0$, so $x=\\pm 1$ are solutions.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.QUADRAT",
    id: "MATH 6.MOCK.QUADRAT",
    title: "Five unlike absolute-value and root claims",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Abs eq: two roots. Radical eq: one root. Abs sum $\\ge 3$ always. Cube root needs $x=9$. $|x^{2}-1|\\le 0$ at $\\pm 1$.`,
  };
}

/** Q28 — linked tangency + vertex condition (ch7). */
export function buildMathQ28Piecewise() {
  const context = `Let $f(x)=x^{2}-6x+k$ and $g(x)=2x+m$ with real parameters $k$ and $m$. Decide whether each statement is true or false.`;

  const statements = [
    "The graphs are tangent if and only if $m=k-16$.",
    "The vertex of $f$ lies on $g$ if and only if $m=k-15$.",
    "There exist real $k$ and $m$ for which the graphs are tangent and the vertex of $f$ also lies on $g$.",
    "If $k=10$ and $m=-6$, the graphs are tangent.",
    "If $m=0$ and $k=20$, the equation $f(x)=g(x)$ has two distinct real roots.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
f-g=x^{2}-8x+(k-m),\\qquad \\Delta=64-4(k-m)
$$

$\\Delta=0$ forces $m=k-16$.

So the statement is True.`,

    `**B.** → True

Vertex $(3,k-9)$ on $g$ means $k-9=6+m$, hence $m=k-15$.

So the statement is True.`,

    `**C.** → False

The two conditions require $m=k-16$ and $m=k-15$ simultaneously, which is impossible.

So the statement is False.`,

    `**D.** → True

For $k=10$, tangency needs $m=-6$, as given.

So the statement is True.`,

    `**E.** → False

With $m=0$, $k=20$: $\\Delta=64-80<0$, so no real intersection.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 7.MOCK.MEET",
    id: "MATH 7.MOCK.MEET",
    title: "Two-parameter line–parabola — tangency vs vertex conflict",
    chapter: 7,
    subsection: "7.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Tangent $\\Leftrightarrow m=k-16$. Vertex on line $\\Leftrightarrow m=k-15$. Cannot hold together. $k=10,m=-6$ tangent. $k=20,m=0$ misses.`,
  };
}

/** Q29 — multi-step exponential rewriting + unique-root traps (ch8). */
export function buildMathQ29Limits() {
  const context = `Define, for every real $t$,

$$
f(t)=2^{3t-1},\\qquad g(t)=\\dfrac{8^{t+1}}{4^{t-2}},\\qquad h(t)=\\bigl(f(t)\\bigr)^{2}\\cdot g(-t).
$$

Decide whether each statement is true or false. Work by rewriting every expression as a single power of $2$; do not guess from a single plugged-in number alone.`;

  // g(t)=8^{t+1}/4^{t-2}=2^{3(t+1)}/2^{2(t-2)}=2^{3t+3-(2t-4)}=2^{t+7}
  // f(t)=2^{3t-1}
  // f=g ⇒ 3t-1=t+7 ⇒ 2t=8 ⇒ t=4 unique
  // h(t)= (2^{3t-1})^2 * g(-t)=2^{6t-2} * 2^{-t+7}=2^{5t+5}
  // h(t)=2^{10} ⇒ 5t+5=10 ⇒ 5t=5 ⇒ t=1
  // f(2)=2^5=32, g(2)=2^9=512, so f(2)<g(2)
  // claim f≡g False
  // claim h(t)=2^{5t+5} True
  // claim the only real root of f=g is t=4 True
  // claim f(2)>g(2) False
  // claim h(t)=2^{10} has solution t=0 False (t=1)

  const statements = [
    "After rewriting, $g(t)=2^{t+7}$ holds for every real $t$, and therefore $f(t)=g(t)$ for every real $t$.",
    "The identity $h(t)=2^{5t+5}$ holds for every real $t$.",
    "The equation $f(t)=g(t)$ has exactly one real solution, namely $t=4$.",
    "One has $f(2)>g(2)$.",
    "The equation $h(t)=2^{10}$ has root $t=1$.",
  ];

  const answer_key = [false, true, true, false, true];

  const tactical_explanations = [
    `**A.** → False

$$
g(t)=\\dfrac{(2^{3})^{t+1}}{(2^{2})^{t-2}}=2^{3t+3-(2t-4)}=2^{t+7}
$$

So the first half is correct, but $f(t)=2^{3t-1}$ equals $2^{t+7}$ only when $3t-1=t+7$, i.e. only at $t=4$, not for every $t$.

So the statement is False.`,

    `**B.** → True

$$
h(t)=\\bigl(2^{3t-1}\\bigr)^{2}\\cdot 2^{-t+7}=2^{6t-2-t+7}=2^{5t+5}
$$

So the statement is True.`,

    `**C.** → True

$2^{3t-1}=2^{t+7}$ forces $3t-1=t+7$, hence $t=4$ uniquely.

So the statement is True.`,

    `**D.** → False

$f(2)=2^{5}=32$ while $g(2)=2^{9}=512$, so $f(2)<g(2)$.

So the statement is False.`,

    `**E.** → True

$2^{5t+5}=2^{10}$ forces $5t+5=10$, hence $t=1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 8.MOCK.CALIB",
    id: "MATH 8.MOCK.CALIB",
    title: "Linked exponential rewrites — $f$, $g$, and composite $h$",
    chapter: 8,
    subsection: "8.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$g=2^{t+7}$, not identically $f$. $h=2^{5t+5}$. $f=g$ only at $t=4$. $f(2)<g(2)$. $h=2^{10}$ at $t=1$.`,
  };
}

/** Q30 — hard difference table via tables_markdown (ch9). */
export function buildMathQ30Param() {
  // Two related rows: f values and first differences already mixed into a wide table.
  // f(x)=x^3-2x^2+x+3 for x=0..6
  // f: 3, 3, 5, 15, 39, 83, 157
  // Δ: 0, 2, 10, 24, 44, 74
  // Δ2: 2, 8, 14, 20, 30
  // Wait let me recalculate f:
  // x=0: 3
  // x=1: 1-2+1+3=3
  // x=2: 8-8+2+3=5
  // x=3: 27-18+3+3=15
  // x=4: 64-32+4+3=39
  // x=5: 125-50+5+3=83
  // x=6: 216-72+6+3=153  NOT 157. Fix: use 153
  // Δ: 0,2,10,24,44,70
  // Δ2: 2,8,14,20,26
  // Δ3: 6,6,6,6 → degree 3, a3=1

  const tables_markdown = `| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | $3$ | $3$ | $5$ | $15$ | $39$ | $83$ | $153$ |
| $\\Delta f(x)$ | $0$ | $2$ | $10$ | $24$ | $44$ | $70$ |  |
| $\\Delta^{2}f(x)$ | $2$ | $8$ | $14$ | $20$ | $26$ |  |  |
| $\\Delta^{3}f(x)$ | $6$ | $6$ | $6$ | $6$ |  |  |  |`;

  const context = `A polynomial $f$ was sampled at consecutive integers. The table records the values together with the forward-difference rows already started by an analyst (blank cells were left empty on purpose).

Decide whether each statement is true or false.`;

  // A: third diffs constant ⇒ deg 3 True
  // B: leading coeff = 6/3! = 1 True
  // C: f(x)=x^3-2x^2+x+3 matches all — True (one plug-in-friendly identity claim)
  // D: next third difference after the last 6 must be 6 True
  // E: because Δf(0)=0, f is constant on [0,1] as a polynomial False

  const statements = [
    "The third differences are constant, so $\\deg f=3$.",
    "The leading coefficient of $f$ equals $1$.",
    "$f(x)=x^{3}-2x^{2}+x+3$ reproduces every tabulated value of $f$.",
    "The missing third-difference entry in the rightmost open slot must equal $6$ if $f$ stays cubic.",
    "Because the first tabulated first-difference is $0$, the polynomial $f$ is constant on the whole real line.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

The displayed third differences are constantly $6$, which characterises degree $3$.

So the statement is True.`,

    `**B.** → True

$3!\\,a_{3}=6$ forces $a_{3}=1$.

So the statement is True.`,

    `**C.** → True

Direct evaluation of $x^{3}-2x^{2}+x+3$ at $x=0,\\ldots,6$ recovers $3,3,5,15,39,83,153$.

So the statement is True.`,

    `**D.** → True

A genuine cubic keeps third differences constant, so the next entry is again $6$.

So the statement is True.`,

    `**E.** → False

$\\Delta f(0)=0$ only says $f(1)=f(0)$; it does not make $f$ constant globally (already $f(2)=5\\neq 3$).

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FINDIF",
    id: "MATH 9.MOCK.FINDIF",
    title: "Four-row difference table — degree, leading term, false constancy",
    chapter: 9,
    subsection: "9.8",
    context,
    tables_markdown,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Degree $3$, leading $1$, $f(x)=x^3-2x^2+x+3$. Next $\\Delta^3=6$. Not globally constant.`,
  };
}

/** Q31 — hard letter-parameter log equation chain (ch10). */
export function buildMathQ31LogDeriv() {
  const context = `Fix a real parameter $a>1$. Consider the unknown $x>0$ in the long equation

$$
\\log_{a}(x^{2})+\\log_{a^{3}}(x)-\\log_{\\sqrt{a}}(x)=\\log_{a}\\bigl(a^{4}\\cdot x\\bigr)-3.
$$

Work from the definition $\\log_{t}(u)=v\\Leftrightarrow t^{v}=u$ (change-of-base through $\\ln$ is allowed only as a bridge). Leave every closed form in letters involving $a$.

Decide whether each statement is true or false.`;

  // Let L = log_a(x). Then:
  // log_a(x^2)=2L
  // log_{a^3}(x)= ln x / ln(a^3)= L/3
  // log_{√a}(x)= ln x / ln(a^{1/2})= L/(1/2)=2L
  // RHS: log_a(a^4 · x)-3 = 4 + L - 3 = 1+L
  // LHS: 2L + L/3 - 2L = L/3
  // L/3 = 1+L  ⇒ L/3 - L = 1 ⇒ -2L/3 = 1 ⇒ L = -3/2
  // x = a^{-3/2} = 1/a^{3/2} = 1/(a√a)
  // Domain: all logs need x>0 (ok), bases a, a^3, √a all >0 and ≠1 (ok since a>1).
  // Also RHS arg a^4 x >0 ok.
  // Wait: L/3 = 1+L ⇒ L/3 - L = 1 ⇒ -2L/3 = 1 ⇒ L = -3/2. Yes.
  // x = a^{-3/2} > 0 True.
  // Unique? The map L is bijective for x>0 so unique True.
  // Claim solution x=a^{3/2} False
  // Claim log_a(x)=-3/2 True
  // Claim x=a^{-3/2} True
  // Claim also x=1 solves: LHS: log_a(1)+log_{a^3}(1)-log_√a(1)=0; RHS=log_a(a^4)-3=4-3=1≠0 False
  // Claim for this x, log_{a^3}(x)= -1/2: L/3=(-3/2)/3=-1/2 True

  const statements = [
    "The equation has exactly one positive real solution, and that solution satisfies $\\log_{a}(x)=-\\dfrac32$.",
    "The unique positive solution is the letter form $x=a^{3/2}$.",
    "The unique positive solution is the letter form $x=a^{-3/2}$.",
    "The number $x=1$ also solves the displayed equation when $a>1$.",
    "At the unique positive solution one has $\\log_{a^{3}}(x)=-\\dfrac12$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Put $L=\\log_{a}(x)$. Then

$$
\\log_{a}(x^{2})=2L,\\qquad \\log_{a^{3}}(x)=\\dfrac{L}{3},\\qquad \\log_{\\sqrt{a}}(x)=2L,
$$

while the right-hand side is $4+L-3=1+L$. The equation becomes $L/3=1+L$, hence $L=-3/2$. Since $x=a^{L}$ is one-to-one for $x>0$, there is exactly one positive root.

So the statement is True.`,

    `**B.** → False

$L=-3/2$ forces $x=a^{-3/2}$, not $a^{3/2}$.

So the statement is False.`,

    `**C.** → True

That is exactly $x=a^{L}$ with $L=-3/2$.

So the statement is True.`,

    `**D.** → False

At $x=1$ the left-hand side is $0$ while the right-hand side equals $\\log_{a}(a^{4})-3=1$.

So the statement is False.`,

    `**E.** → True

$\\log_{a^{3}}(x)=L/3=(-3/2)/3=-1/2$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.EXPLOGEQ",
    id: "MATH 10.MOCK.EXPLOGEQ",
    title: "Mixed-base letter log equation — unique $a^{-3/2}$ root",
    chapter: 10,
    subsection: "10.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `With $L=\\log_a x$: $L/3=1+L\\Rightarrow L=-3/2$, so $x=a^{-3/2}$ uniquely. Not $a^{3/2}$; $x=1$ fails; $\\log_{a^3}x=-1/2$.`,
  };
}

/** Q32 — taxed MR=MC (ch11), multi-step. */
export function buildMathQ32Engagement() {
  const context = `Inverse demand is $p=60-q$. Private cost is $C(q)=\\dfrac12 q^{2}+4q+20$. A specific tax of EUR $6$ per unit is added, so the firm maximises $\\pi(q)=pq-C(q)-6q$.

Decide whether each statement is true or false.`;

  const statements = [
    "With the tax, the profit-maximising output lies strictly between $16$ and $17$.",
    "Without the tax, the profit-maximising output would be strictly larger than with the tax.",
    "At the taxed optimum, marginal revenue equals marginal cost including the tax.",
    "At the taxed optimum, the market price is strictly below EUR $40$.",
    "The tax reduces the optimal output by exactly $2$ units relative to the no-tax optimum.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\pi'(q)=-3q+50=0\\Rightarrow q=\\dfrac{50}{3}\\approx 16.67\\in(16,17)
$$

So the statement is True.`,

    `**B.** → True

Without tax, $\\pi'(q)=-3q+56=0$ gives $q=\\dfrac{56}{3}>\\dfrac{50}{3}$.

So the statement is True.`,

    `**C.** → True

$MR=60-2q$ and $MC_{\\mathrm{tax}}=q+10$ meet at $q=\\dfrac{50}{3}$.

So the statement is True.`,

    `**D.** → False

$$
p=60-\\dfrac{50}{3}=\\dfrac{130}{3}\\approx 43.33>40
$$

So the statement is False.`,

    `**E.** → True

$$
\\dfrac{56}{3}-\\dfrac{50}{3}=2
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.MRMC",
    id: "MATH 11.MOCK.MRMC",
    title: "Taxed monopoly — MR=MC shift and price trap",
    chapter: 11,
    subsection: "11.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Taxed $q=50/3$; untaxed $56/3$; gap $2$. Price $130/3>40$. MR equals taxed MC.`,
  };
}

/** Shared urn stem for Q33–Q34. */
const SHARED_URN = `A sealed crate holds $9$ red, $6$ blue and $5$ green components (total $20$). Quality control draws components at random.

Two sampling regimes are compared later:
- Regime H: five components are drawn without replacement (hypergeometric counts).
- Regime B: five independent draws with replacement, recording whether each draw is red (binomial counts).`;

/** Q33 — harder tangled hypergeometric on the shared crate (ch12). */
export function buildMathQ33Coins() {
  const context = `${SHARED_URN}

For Regime H, let $R$ be the number of red components among the five drawn, and let $G$ be the number of green components among the same five.

Decide whether each statement is true or false.`;

  // E[R]=5*9/20=2.25
  // E[G]=5*5/20=1.25
  // Var(R)=5*(9/20)*(11/20)*15/19 = 5*0.45*0.55*15/19 = 5*0.2475*15/19 = 1.2375*15/19 = 18.5625/19 ≈ 0.977
  // P(R=5)=C(9,5)/C(20,5)=126/15504≈0.00813
  // P(R≥1)=1-C(11,5)/C(20,5)=1-462/15504=15042/15504≈0.9702
  // P(G=0)=C(15,5)/C(20,5)=3003/15504≈0.1937
  // Claim E[R]+E[G]=E[R+G]=5*(14/20)=3.5, and E[R]=2.25 True for first part
  // A: E[R]=2.25 and E[G]=1.25 True
  // B: Var(R)<1 True (≈0.977)
  // C: P(R=5)<0.01 True
  // D: P(G=0)>0.25 False (≈0.194)
  // E: Because E[R]>E[G], necessarily P(R>G)>1/2 — not automatic; skip or False as trap
  // Actually R and G are dependent. Safer: "P(R≥1)<0.95" False since ≈0.97

  const statements = [
    "Under Regime H one has $E[R]=2.25$ and $E[G]=1.25$.",
    "Under Regime H the variance $\\mathrm{Var}(R)$ is strictly less than $1$.",
    "The probability of drawing five red components in Regime H is strictly less than $0.01$.",
    "In Regime H, the probability of drawing no green component exceeds $0.25$.",
    "In Regime H, the probability of drawing at least one red component is strictly less than $0.95$.",
  ];

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[R]=5\\cdot\\dfrac{9}{20}=2.25,\\qquad E[G]=5\\cdot\\dfrac{5}{20}=1.25
$$

So the statement is True.`,

    `**B.** → True

$$
\\mathrm{Var}(R)=5\\cdot\\dfrac{9}{20}\\cdot\\dfrac{11}{20}\\cdot\\dfrac{15}{19}=\\dfrac{18.5625}{19}\\approx 0.977<1
$$

So the statement is True.`,

    `**C.** → True

$$
P(R=5)=\\dfrac{\\binom{9}{5}}{\\binom{20}{5}}=\\dfrac{126}{15504}\\approx 0.0081<0.01
$$

So the statement is True.`,

    `**D.** → False

$$
P(G=0)=\\dfrac{\\binom{15}{5}}{\\binom{20}{5}}=\\dfrac{3003}{15504}\\approx 0.194<0.25
$$

So the statement is False.`,

    `**E.** → False

$$
P(R\\ge 1)=1-\\dfrac{\\binom{11}{5}}{\\binom{20}{5}}=1-\\dfrac{462}{15504}\\approx 0.970>0.95
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 12.MOCK.HYPER",
    id: "MATH 12.MOCK.HYPER",
    title: "Shared crate Regime H — hypergeometric means, variance, tails",
    chapter: 12,
    subsection: "12.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[R]=2.25$, $E[G]=1.25$, $\\mathrm{Var}(R)\\approx 0.977$. $P(R=5)\\approx 0.008$. $P(G=0)\\approx 0.194$. $P(R\\ge 1)\\approx 0.97$.`,
  };
}

/** Q34 — tangled binomial Regime B on the same crate (ch13). */
export function buildMathQ34Binomial() {
  const context = `${SHARED_URN}

For Regime B, each of the five independent draws is scored as a “red hit” with success probability $p=9/20=0.45$. Let $X$ be the number of red hits and set $Y=4X-3$.

Decide whether each statement is true or false.`;

  // E[X]=5*0.45=2.25
  // Var(X)=5*0.45*0.55=1.2375
  // E[Y]=4*2.25-3=6; Var(Y)=16*1.2375=19.8
  // P(X=0)=(0.55)^5≈0.0503
  // P(X=5)=(0.45)^5≈0.0185
  // P(X≥4)=P(4)+P(5)=5*(0.45)^4*(0.55)+(0.45)^5≈5*0.04100625*0.55+0.01845≈0.1128+0.0185≈0.131
  // claim P(X=0)<0.05 False (≈0.0503>0.05) — close trap
  // Actually 0.55^5 = 0.0503284375 > 0.05
  // claim P(X=5)<0.02 True
  // claim E[Y]=6 and Var(Y)=19.8 True
  // claim P(X≥3)=1/2 False
  // claim because E[X]=E[R] from Regime H, the laws of X and R are identical False

  const statements = [
    "The mean of $X$ is $2.25$ and the variance of $X$ is $1.2375$.",
    "The mean of $Y$ is $6$ and the variance of $Y$ is $19.8$.",
    "The probability $P(X=0)$ is strictly less than $0.05$.",
    "The probability $P(X=5)$ is strictly less than $0.02$.",
    "Because $E[X]$ equals the Regime-H mean $E[R]$, the random variables $X$ and $R$ necessarily share the same probability distribution.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=5\\cdot 0.45=2.25,\\qquad \\mathrm{Var}(X)=5\\cdot 0.45\\cdot 0.55=1.2375
$$

So the statement is True.`,

    `**B.** → True

$$
E[Y]=4\\cdot 2.25-3=6,\\qquad \\mathrm{Var}(Y)=16\\cdot 1.2375=19.8
$$

So the statement is True.`,

    `**C.** → False

$$
P(X=0)=0.55^{5}\\approx 0.0503>0.05
$$

So the statement is False.`,

    `**D.** → True

$$
P(X=5)=0.45^{5}\\approx 0.0185<0.02
$$

So the statement is True.`,

    `**E.** → False

Equal means do not force equal laws: Regime H is hypergeometric (dependent draws) while Regime B is binomial (independent draws), and already $\\mathrm{Var}(X)=1.2375\\neq\\mathrm{Var}(R)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 13.MOCK.TAILS",
    id: "MATH 13.MOCK.TAILS",
    title: "Shared crate Regime B — binomial score and false law-identity",
    chapter: 13,
    subsection: "13.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[X]=2.25$, $\\mathrm{Var}=1.2375$; $E[Y]=6$, $\\mathrm{Var}(Y)=19.8$. $P(X=0)\\approx 0.0503$, $P(X=5)\\approx 0.0185$. Binomial $\\neq$ hypergeometric.`,
  };
}
