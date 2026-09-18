/**
 * Mock Exam 6 — HARD alternate in-chapter types (vs Mock 5 engines).
 * Multi-step chains, comparison traps, domains — not one-line plug-ins.
 * Clean tables; no solution formulas in stems.
 */

/** Q22 — nested logic: necessary/sufficient + quantifier order (ch1). */
export function buildMathQ22Sets() {
  const context = `In the universe of real numbers, let $P(x)$ mean “$x>3$” and $Q(x)$ mean “$x^{2}>9$”. Decide whether each claim is true or false.`;

  const statements = [
    "$P(x)$ is a sufficient condition for $Q(x)$.",
    "$P(x)$ is a necessary condition for $Q(x)$.",
    "The statement $\\forall x\\,(P(x)\\Rightarrow Q(x))$ is true.",
    "The statement $\\forall x\\,(Q(x)\\Rightarrow P(x))$ is true.",
    "The statement $\\exists x\\,\\forall y\\,(y>x\\Rightarrow Q(y))$ is true.",
  ];

  // A: x>3 ⇒ x^2>9 True → sufficient True
  // B: necessary would mean Q⇒P, False (x=-4)
  // C True
  // D False
  // E: exists x such that every y>x has y^2>9. Take x=3: y>3 ⇒ y^2>9 True. Or x=0 fails. So exists — True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

If $x>3$, then $x^{2}>9$. So $P$ forces $Q$: $P$ is sufficient for $Q$.

So the statement is True.`,

    `**B.** → False

Necessary would require $Q\\Rightarrow P$. For $x=-4$, $x^{2}=16>9$ but $x\\not>3$.

So the statement is False.`,

    `**C.** → True

This is exactly the sufficient implication of letter A, quantified over all real $x$.

So the statement is True.`,

    `**D.** → False

Same counter-example $x=-4$ as in letter B.

So the statement is False.`,

    `**E.** → True

Choose $x=3$. Then every $y>3$ satisfies $y^{2}>9$, i.e. $Q(y)$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.LOGICQ",
    id: "MATH 1.MOCK.LOGICQ",
    title: "Necessary vs sufficient and nested quantifiers",
    chapter: 1,
    subsection: "1.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$P\\Rightarrow Q$ holds; $Q\\Rightarrow P$ fails at $-4$. $\\exists x\\forall y$ works with $x=3$.`,
  };
}

/** Q23 — chained rational identities with removable discontinuities (ch2). */
export function buildMathQ23Grind() {
  const context = `Define, wherever the expressions make sense,

$$
E(x)=\\dfrac{x^{3}-8}{x-2},\\qquad F(x)=x^{2}+2x+4,\\qquad H(x)=\\dfrac{E(x)-12}{x-2}.
$$

Decide whether each statement is true or false.`;

  // E=F for x≠2; at x=2, E undefined, F(2)=12
  // H(x)=(F(x)-12)/(x-2) for x≠2 = (x^2+2x-8)/(x-2)=(x+4)(x-2)/(x-2)=x+4 for x≠2
  // lim x→2 E = 12 = F(2)
  // H defined at 2? No as written via E. But simplified x+4 at 2 is 6
  // claim E(x)=F(x) for all real x False
  // claim H(x)=x+4 for all x≠2 True
  // claim H(2)=6 — H not defined at 2 via original formula False
  // claim E(3)=F(3) True (19)
  // claim there is no continuous extension of E to x=2 False (extend by 12)

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

  // A ≈ 18641.43
  // B1 ≈ 75421; B2 ≈ 62436; B3 ≈ 48478; B4 ≈ 33472; B5 ≈ 17341
  // int year 1 = 6562.5; year 2 ≈ 5656.58; year 4 ≈ 3635.81; year 5 ≈ 2510.39
  // Total interest = 6A - 87500 ≈ 24348.57

  const statements = [
    "The level payment $A$ lies strictly between EUR $18500$ and EUR $18800$.",
    "Interest in year $1$ exceeds interest in year $2$ by strictly more than EUR $900$.",
    "Immediately after the third payment, more than half of the original principal is still outstanding.",
    "Interest charged in year $5$ is strictly less than EUR $2600$.",
    "Total interest paid over the six years is strictly less than EUR $24000$.",
  ];

  // A: 18641 ∈ (18500,18800) True
  // B: 6562.5 - 5656.58 ≈ 905.92 > 900 True
  // C: B3 ≈ 48478 > 43750 True
  // D: 2510 < 2600 True
  // E: total int ≈ 24349 > 24000 False

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

/** Q25 — linked absolute + radical system (ch4), not pipes. */
export function buildMathQ25Pipes() {
  const context = `Consider the simultaneous conditions

$$
|x-2|+|x+1|=5,\\qquad \\sqrt{2x+3}=x-1.
$$

Decide whether each statement is true or false.`;

  // Abs: critical -1,2. On [-1,2] sum=3 constantly? |x-2|+|x+1|: for x in [-1,2]: (2-x)+(x+1)=3.
  // Outside: x>2: (x-2)+(x+1)=2x-1=5 → x=3; x<-1: (2-x)+(-1-x)=1-2x=5 → x=-2.
  // So abs solutions: x=-2, and all x in [-1,2]? Wait 3=5? NO — on [-1,2] sum equals 3 < 5, never 5.
  // Only x=3 and x=-2!
  // Radical: domain x≥1 and x-1≥0 ⇒ x≥1. Square: 2x+3=(x-1)^2=x^2-2x+1 → 0=x^2-4x-2 → x=2±√6. Only 2+√6≈4.45 ≥1.
  // Intersection of both: abs {−2,3}, radical {2+√6}. Empty intersection!
  // Claims about each equation separately and joint.

  const statements = [
    "The absolute-value equation has exactly two real solutions.",
    "One of the absolute-value solutions lies in the open interval $(-1,2)$.",
    "The radical equation has exactly one real solution.",
    "The radical solution is strictly larger than $4$.",
    "There is a real number that satisfies both equations at once.",
  ];

  // A True {-2,3}
  // B False neither in (-1,2)
  // C True 2+√6
  // D True ≈4.45>4
  // E False empty

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Outside $[-1,2]$ the absolute sum is linear and equals $5$ only at $x=-2$ and $x=3$. Inside $[-1,2]$ the sum equals $3\\neq 5$.

So the statement is True.`,

    `**B.** → False

Neither $-2$ nor $3$ lies in $(-1,2)$.

So the statement is False.`,

    `**C.** → True

Domain $x\\ge 1$. Squaring yields $x=2\\pm\\sqrt{6}$; only $x=2+\\sqrt{6}$ survives.

So the statement is True.`,

    `**D.** → True

$2+\\sqrt{6}\\approx 4.45>4$.

So the statement is True.`,

    `**E.** → False

The absolute solutions are $\\{-2,3\\}$ while the radical solution is $2+\\sqrt{6}\\neq 3$, so the intersection is empty.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.EQPACK",
    id: "MATH 4.MOCK.EQPACK",
    title: "Linked absolute and radical equations — empty intersection trap",
    chapter: 4,
    subsection: "4.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Abs roots $\\{-2,3\\}$. Radical root $2+\\sqrt{6}$. No common solution.`,
  };
}

/** Q26 — parametric 2×2 system (ch5), not break-even mix. */
export function buildMathQ26BreakEven() {
  const context = `For a real parameter $a$, consider

$$
\\begin{cases}
ax+y=3\\\\
2x+(a-1)y=a.
\\end{cases}
$$

Decide whether each statement is true or false.`;

  // Matrix [[a,1],[2,a-1]]; det = a(a-1)-2 = a^2-a-2=(a-2)(a+1)
  // Unique when a≠2 and a≠-1
  // a=2: first 2x+y=3; second 2x+y=2 — inconsistent none
  // a=-1: first -x+y=3; second 2x-2y=-1 → divide second by -2: -x+y=1/2 — inconsistent with y-x=3
  // Wait second: 2x+(-1-1)y=-1 → 2x-2y=-1. First: -x+y=3 ⇒ y-x=3.
  // From first y=x+3; plug: 2x-2(x+3)=-1 → 2x-2x-6=-1 → -6=-1 contradiction. None.
  // When a=1: first x+y=3; second 2x+0*y=1 ⇒ x=1/2, y=5/2 unique
  // claim a=2 infinite False (none)
  // claim for a=0 unique: det=(-2)(-1)? a=0: det=(0-2)=(-2)(1)=-2≠0 unique True
  // Solution formulas when unique: ...

  const statements = [
    "The system has a unique solution for every real $a$ except $a=2$ and $a=-1$.",
    "If $a=2$, the system has infinitely many solutions.",
    "If $a=-1$, the system has no solution.",
    "If $a=0$, the unique solution satisfies $x+y=3$.",
    "If $a=1$, the unique solution is $\\bigl(\\tfrac12,\\tfrac52\\bigr)$.",
  ];

  // D: a=0: y=3, 2x-y=0 ⇒ 2x=3 ⇒ x=3/2, y=3; x+y=4.5≠3 False
  // First eq: 0*x+y=3 ⇒ y=3; second 2x-y=0 ⇒ 2x=3 ⇒ x=1.5. Sum 4.5≠3

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

The determinant is $a(a-1)-2=(a-2)(a+1)$, nonzero precisely when $a\\neq 2$ and $a\\neq -1$.

So the statement is True.`,

    `**B.** → False

For $a=2$ the equations become $2x+y=3$ and $2x+y=2$, which are inconsistent: no solution, not infinitely many.

So the statement is False.`,

    `**C.** → True

For $a=-1$ one obtains $y-x=3$ and $2x-2y=-1$, which contradict each other.

So the statement is True.`,

    `**D.** → False

For $a=0$: $y=3$ and $2x-y=0$ give $x=\\tfrac32$, so $x+y=\\tfrac92\\neq 3$.

So the statement is False.`,

    `**E.** → True

For $a=1$: $x+y=3$ and $2x=1$ yield $x=\\tfrac12$, $y=\\tfrac52$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.LIN2",
    id: "MATH 5.MOCK.LIN2",
    title: "Parametric two-by-two system — singular cases and checks",
    chapter: 5,
    subsection: "5.10",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Unique iff $a\\notin\\{2,-1\\}$. At $a=2$ and $a=-1$: empty. At $a=0$: $(3/2,3)$. At $a=1$: $(1/2,5/2)$.`,
  };
}

/** Q27 — parameter-free but dense quadratic/rational compound (ch6). */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $\\dfrac{x^{2}-5x+6}{x^{2}-4}\\le 0$ is exactly $[2,3]$.",
    "The solution set of $x^{2}-5x+6\\le 0$ is exactly $[2,3]$.",
    "The solution set of $\\dfrac{x^{2}-5x+6}{x^{2}-4}\\le 0$ equals $(-2,2)\\cup(2,3]$.",
    "The numbers $x=-2$ and $x=2$ both belong to the solution set of the rational inequality in letter A.",
    "Every solution of $x^{2}-5x+6\\le 0$ is automatically a solution of the rational inequality in letter A.",
  ];

  // Rational: num (x-2)(x-3), den (x-2)(x+2). Undefined at ±2.
  // For x≠±2, cancel (x-2) when x≠2: (x-3)/(x+2)≤0 → [-2,3] but exclude -2 and 2.
  // Careful sign chart on regions (-∞,-2),(-2,2),(2,3),(3,∞):
  // After cancel for x≠2: (x-3)/(x+2)≤0 on [-2,3], exclude where original undefined: -2 and 2.
  // Also at x=2 original 0/0 undefined. At x=3 num 0 den 5 → 0 ≤0 included.
  // So solution (-2,2)∪(2,3]. 
  // A claims [2,3] False
  // B True for quadratic
  // C True
  // D False both undefined
  // E False: x=2.5 is in [2,3] and in rational; but x=2 is in quadratic ≤0 but NOT in rational. So NOT every. False

  const answer_key = [false, true, true, false, false];

  const tactical_explanations = [
    `**A.** → False

After a sign chart (and removing $x=\\pm 2$), the rational inequality solves on $(-2,2)\\cup(2,3]$, not on $[2,3]$.

So the statement is False.`,

    `**B.** → True

$(x-2)(x-3)\\le 0$ on the closed interval between the roots.

So the statement is True.`,

    `**C.** → True

That is the correct solution set from letter A’s analysis.

So the statement is True.`,

    `**D.** → False

Both $x=-2$ and $x=2$ make the denominator zero, so neither is a solution.

So the statement is False.`,

    `**E.** → False

$x=2$ solves the quadratic inequality but is excluded from the rational one.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.QUADRAT",
    id: "MATH 6.MOCK.QUADRAT",
    title: "Quadratic versus cancelled rational — hole traps at $\\pm 2$",
    chapter: 6,
    subsection: "6.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Quadratic $[2,3]$. Rational $(-2,2)\\cup(2,3]$. $\\pm 2$ excluded. $x=2$ breaks the “every” claim.`,
  };
}

/** Q28 — linked tangency + vertex condition (ch7). */
export function buildMathQ28Piecewise() {
  const context = `Let $f(x)=x^{2}-6x+k$ and $g(x)=2x+m$ with real parameters $k$ and $m$. Decide whether each statement is true or false.`;

  // f-g = x^2-8x+(k-m); disc = 64-4(k-m)=64-4k+4m
  // tangent: 16-k+m=0 ⇒ m=k-16
  // vertex of f at (3, f(3))=(3, k-9)
  // vertex on g: k-9=6+m ⇒ m=k-15
  // Both: k-16=k-15 impossible — never both tangent AND vertex on line
  // For k=10: tangent when m=-6; vertex on line when m=-5
  // Number of intersections when m=0: disc=64-4k; two when k<16

  const statements = [
    "The graphs are tangent if and only if $m=k-16$.",
    "The vertex of $f$ lies on $g$ if and only if $m=k-15$.",
    "There exist real $k$ and $m$ for which the graphs are tangent and the vertex of $f$ also lies on $g$.",
    "If $k=10$ and $m=-6$, the graphs are tangent.",
    "If $m=0$ and $k=20$, the equation $f(x)=g(x)$ has two distinct real roots.",
  ];

  // E: disc=64-80=-16<0 False (zero or none — none)

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

/** Q29 — recover both A and p from two samples (ch8). */
export function buildMathQ29Limits() {
  const context = `A positive model $f(x)=A x^{p}$ ($A>0$, $x>0$) satisfies $f(4)=12$ and $f(16)=3$. Decide whether each statement is true or false.`;

  // 12/3=4=(4/16)^p=(1/4)^p ⇒ 4^p=1/4 ⇒ p=-1
  // A*4^{-1}=12 ⇒ A=48
  // f(8)=48/8=6
  // f(2)=48/2=24
  // claim p=-2 False
  // inverse etc.

  const statements = [
    "The exponent equals $p=-1$.",
    "The constant equals $A=48$.",
    "$f(8)=6$ and $f(2)=24$.",
    "The same two sample points are also consistent with $p=-2$ for some $A>0$.",
    "Solving $y=f(x)$ for $x>0$ yields $x=\\dfrac{48}{y}$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{f(4)}{f(16)}=4=\\Bigl(\\dfrac{4}{16}\\Bigr)^{p}=\\Bigl(\\dfrac14\\Bigr)^{p}\\Rightarrow 4^{p}=\\dfrac14\\Rightarrow p=-1
$$

So the statement is True.`,

    `**B.** → True

$A\\cdot 4^{-1}=12$ forces $A=48$.

So the statement is True.`,

    `**C.** → True

$f(8)=48/8=6$ and $f(2)=48/2=24$.

So the statement is True.`,

    `**D.** → False

The ratio of samples forces a unique exponent $p=-1$; $p=-2$ cannot fit both points.

So the statement is False.`,

    `**E.** → True

$y=48/x$ rearranges to $x=48/y$ for $x>0$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 8.MOCK.CALIB",
    id: "MATH 8.MOCK.CALIB",
    title: "Two-point power calibration — unique exponent and scale",
    chapter: 8,
    subsection: "8.7",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$p=-1$, $A=48$. $f(8)=6$, $f(2)=24$. Not $p=-2$. Inverse $x=48/y$.`,
  };
}

/** Q30 — finite differences with reconstruction + false degree claim (ch9). */
export function buildMathQ30Param() {
  const context = `A polynomial $p$ produces the table

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| $p(x)$ | $2$ | $1$ | $4$ | $17$ | $46$ | $97$ |

Decide whether each statement is true or false.`;

  // ys: 2,1,4,17,46,97
  // d1: -1,3,13,29,51
  // d2: 4,10,16,22
  // d3: 6,6,6 → degree 3, a3=6/6=1
  // Newton/match: try x^3 - 2x^2 + x + 2? 
  // At 0:2; at1:1-2+1+2=2≠1. 
  // x^3-3x^2+x+2: 0→2; 1→1-3+1+2=1; 2→8-12+2+2=0≠4. 
  // From leading 1: p(x)=x^3+ax^2+bx+2
  // p(1)=1+a+b+2=1 ⇒ a+b=-2
  // p(2)=8+4a+2b+2=4 ⇒ 4a+2b=-6 ⇒ 2a+b=-3
  // subtract: a=-1; then -1+b=-2 ⇒ b=-1
  // p(x)=x^3-x^2-x+2
  // check p(3)=27-9-3+2=17; p(4)=64-16-4+2=46; p(5)=125-25-5+2=97. Yes.
  // p(6)=216-36-6+2=176
  // p(-1)=-1-1+1+2=1

  const statements = [
    "The third differences are constant, so $\\deg p=3$.",
    "The leading coefficient equals $1$.",
    "$p(x)=x^{3}-x^{2}-x+2$ for every $x$ in the table.",
    "$p(6)=176$ and $p(-1)=1$.",
    "Because six nodes are listed, $p$ must have degree $5$.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Third differences are constantly $6$, so the degree is $3$.

So the statement is True.`,

    `**B.** → True

$3!\\,a_{3}=6$ forces $a_{3}=1$.

So the statement is True.`,

    `**C.** → True

The unique monic cubic matching $p(0)=2$ and the difference structure is $x^{3}-x^{2}-x+2$, and it reproduces every table entry.

So the statement is True.`,

    `**D.** → True

Direct evaluation of that cubic gives $p(6)=176$ and $p(-1)=1$.

So the statement is True.`,

    `**E.** → False

The number of listed nodes does not force the degree; constant third differences already fix degree $3$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FINDIF",
    id: "MATH 9.MOCK.FINDIF",
    title: "Six-node difference table — reconstruct the cubic",
    chapter: 9,
    subsection: "9.8",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Degree $3$, leading $1$, $p(x)=x^3-x^2-x+2$. Extensions $p(6)=176$, $p(-1)=1$. Not degree $5$.`,
  };
}

/** Q31 — coupled exp substitution + log domain interaction (ch10). */
export function buildMathQ31LogDeriv() {
  const context = `Decide whether each claim is true or false.`;

  const statements = [
    "The equation $4^{x}-5\\cdot 2^{x}+4=0$ has exactly the solutions $x=0$ and $x=2$.",
    "For those solutions, $2^{x}+2^{-x}$ takes the two values $2$ and $\\tfrac{17}{4}$.",
    "The equation $\\log_{3}(2x-1)+\\log_{3}(x+2)=2$ has exactly one real solution.",
    "That log solution equals $x=1$.",
    "Every real root of $\\log_{3}\\bigl((2x-1)(x+2)\\bigr)=2$ also solves the summed-log equation in letter C.",
  ];

  // Exp: u=2^x; u^2-5u+4=0; (u-1)(u-4)=0; x=0,2 True
  // At 0: 2^0+2^0=2; at 2: 4+1/4=17/4 True
  // Log: domain 2x-1>0 and x+2>0 ⇒ x>1/2. Sum: log3((2x-1)(x+2))=2 ⇒ (2x-1)(x+2)=9
  // 2x^2+4x-x-2=9 → 2x^2+3x-11=0 → x=(-3±√(9+88))/4=(-3±√97)/4. Positive >1/2: (-3+√97)/4 ≈ 1.71
  // Only one. Not x=1: log3(1)+log3(3)=0+1=1≠2
  // E: product form allows possibly x≤1/2 if product >0; e.g. check negative root (-3-√97)/4≈-2.71: (2x-1)<0,(x+2)<0 product>0. log of product OK but summed logs need each >0. So False

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

With $u=2^{x}>0$, $u^{2}-5u+4=0$ gives $u=1$ or $u=4$, hence $x=0$ or $x=2$.

So the statement is True.`,

    `**B.** → True

At $x=0$: $1+1=2$. At $x=2$: $4+\\dfrac14=\\dfrac{17}{4}$.

So the statement is True.`,

    `**C.** → True

Domain $x>\\tfrac12$. The quadratic $2x^{2}+3x-11=0$ has only one root in that domain, namely $(-3+\\sqrt{97})/4$.

So the statement is True.`,

    `**D.** → False

At $x=1$: $\\log_{3}1+\\log_{3}3=1\\neq 2$.

So the statement is False.`,

    `**E.** → False

The product-log form admits the negative root of the same quadratic, where individual logs are undefined.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 10.MOCK.EXPLOGEQ",
    id: "MATH 10.MOCK.EXPLOGEQ",
    title: "Exponential roots with a paired log-domain trap",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Exp roots $0,2$ with $2^{x}+2^{-x}\\in\\{2,17/4\\}$. Log has one root $\\neq 1$; product-log is wider.`,
  };
}

/** Q32 — taxed MR=MC (ch11), multi-step. */
export function buildMathQ32Engagement() {
  const context = `Inverse demand is $p=60-q$. Private cost is $C(q)=\\dfrac12 q^{2}+4q+20$. A specific tax of EUR $6$ per unit is added, so the firm maximises $\\pi(q)=pq-C(q)-6q$.

Decide whether each statement is true or false.`;

  // R=60q-q^2; π=60q-q^2 - q^2/2 -4q -20 -6q = -1.5 q^2 +50q -20
  // π'=-3q+50=0 → q=50/3≈16.667
  // Without tax: π0=60q-q^2-q^2/2-4q-20=-1.5q^2+56q-20; q=56/3≈18.667
  // MR=60-2q; private MC=q+4; social/taxed MC=q+10
  // At taxed opt: MR=60-100/3=80/3≈26.67; MC_tax=50/3+10=80/3. Yes
  // π(50/3)= -1.5*(2500/9)+50*(50/3)-20= -3750/9 + 2500/3 -20= -416.667+833.333-20=396.667
  // claim q*>17 False; q* between 16 and 17 True
  // untaxed q larger True
  // price at taxed: p=60-50/3=130/3≈43.33 >40 True
  // claim tax reduces output by exactly 2 False (reduces by 2)

  const statements = [
    "With the tax, the profit-maximising output lies strictly between $16$ and $17$.",
    "Without the tax, the profit-maximising output would be strictly larger than with the tax.",
    "At the taxed optimum, marginal revenue equals marginal cost including the tax.",
    "At the taxed optimum, the market price is strictly below EUR $40$.",
    "The tax reduces the optimal output by exactly $2$ units relative to the no-tax optimum.",
  ];

  // D: price 130/3≈43.33 >40 so "below 40" False
  // E: 56/3 - 50/3 = 2 exactly — True!

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

/** Q33 — hypergeometric with conditional probability (ch12). */
export function buildMathQ33Coins() {
  const context = `An urn holds $8$ red and $12$ blue chips. Five chips are drawn at random without replacement. Let $X$ be the number of red chips drawn.

Decide whether each statement is true or false.`;

  // E[X]=2
  // P(X≥1)≈0.9489; P(X≥3)≈0.2962; conditional ≈0.312
  // P(X=5)=56/15504≈0.00361
  // Var(X)=n K/N (1-K/N)(N-n)/(N-1)=5*(0.4)*(0.6)*15/19=5*0.24*15/19=1.2*15/19=18/19≈0.947

  const statements = [
    "The expected value $E[X]$ equals $2$, but $\\mathrm{Var}(X)$ is strictly less than $1$.",
    "The conditional probability $P(X\\ge 3\\mid X\\ge 1)$ is strictly less than $0.35$.",
    "The conditional probability $P(X\\ge 3\\mid X\\ge 1)$ equals $P(X\\ge 3)$.",
    "The probability of drawing five red chips is strictly less than $0.005$.",
    "Because $E[X]=2$, the event $\\{X=2\\}$ is more probable than $\\{X=1\\}$.",
  ];

  // A: Var=18/19≈0.947<1 True
  // B: ≈0.312<0.35 True
  // C: False conditional ≠ unconditional (0.312 vs 0.296)
  // D: ≈0.0036<0.005 True
  // E: need P(X=2) vs P(X=1)
  // P1=C(8,1)C(12,4)/15504=8*495/15504=3960/15504≈0.255
  // P2=6160/15504≈0.397 > P1 True

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=5\\cdot\\dfrac{8}{20}=2,\\qquad \\mathrm{Var}(X)=5\\cdot\\dfrac{8}{20}\\cdot\\dfrac{12}{20}\\cdot\\dfrac{15}{19}=\\dfrac{18}{19}<1
$$

So the statement is True.`,

    `**B.** → True

$$
P(X\\ge 3\\mid X\\ge 1)=\\dfrac{P(X\\ge 3)}{P(X\\ge 1)}\\approx\\dfrac{0.296}{0.949}\\approx 0.312<0.35
$$

So the statement is True.`,

    `**C.** → False

The denominator $P(X\\ge 1)<1$ strictly increases the conditional probability above $P(X\\ge 3)$.

So the statement is False.`,

    `**D.** → True

$$
P(X=5)=\\dfrac{\\binom{8}{5}}{\\binom{20}{5}}=\\dfrac{56}{15504}\\approx 0.0036<0.005
$$

So the statement is True.`,

    `**E.** → True

$$
P(X=2)=\\dfrac{6160}{15504}>\\dfrac{3960}{15504}=P(X=1)
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.HYPER",
    id: "MATH 12.MOCK.HYPER",
    title: "Hypergeometric draw — variance, conditional tails, mode check",
    chapter: 12,
    subsection: "12.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=2$, $\\mathrm{Var}=18/19$. $P(X\\ge 3|X\\ge 1)\\approx 0.312\\neq P(X\\ge 3)$. $P(X=5)\\approx 0.0036$. $P(X=2)>P(X=1)$.`,
  };
}

/** Q34 — binomial tails + scoring, asymmetric median trap (ch13). */
export function buildMathQ34Binomial() {
  const context = `Let $X\\sim\\mathrm{Bin}(n=40,p=0.35)$ and $Y=3X-5$. Decide whether each statement is true or false.`;

  // E=14, Var=9.1, SD≈3.02
  // E[Y]=37, VarY=81.9
  // P(X≤10)≈0.1215; P(X≥20)≈0.0363
  // claim P(X≤10)<0.10 False
  // claim P(X≥20)<0.05 True
  // claim P(X≥14)=1/2 False

  const statements = [
    "The mean of $X$ is $14$ and the variance of $X$ is $9.1$.",
    "The mean of $Y$ is $37$ and the variance of $Y$ is $81.9$.",
    "The lower-tail probability $P(X\\le 10)$ is strictly less than $0.10$.",
    "The upper-tail probability $P(X\\ge 20)$ is strictly less than $0.05$.",
    "Because $E[X]=14$, one has $P(X\\ge 14)=\\tfrac12$ exactly.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=40\\cdot 0.35=14,\\qquad \\mathrm{Var}(X)=40\\cdot 0.35\\cdot 0.65=9.1
$$

So the statement is True.`,

    `**B.** → True

$$
E[Y]=3\\cdot 14-5=37,\\qquad \\mathrm{Var}(Y)=9\\cdot 9.1=81.9
$$

So the statement is True.`,

    `**C.** → False

Direct summation yields $P(X\\le 10)\\approx 0.121>0.10$.

So the statement is False.`,

    `**D.** → True

$P(X\\ge 20)\\approx 0.036<0.05$.

So the statement is True.`,

    `**E.** → False

With $p\\neq \\tfrac12$ the law is asymmetric, so the mean does not force a median probability of $\\tfrac12$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 13.MOCK.TAILS",
    id: "MATH 13.MOCK.TAILS",
    title: "Binomial $n=40$ — both tails and linear scoring",
    chapter: 13,
    subsection: "13.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=14$, $\\mathrm{Var}=9.1$; $E[Y]=37$, $\\mathrm{Var}(Y)=81.9$. $P(X\\le 10)\\approx 0.12$, $P(X\\ge 20)\\approx 0.036$. No median symmetry.`,
  };
}
