/**
 * Mock Exam 6 — ULTRA customs (Q22–34), deliberately unlike Mock 5 shapes.
 * Different engines: surjections, reciprocal powers, amortisation, extraneous roots,
 * 3×3 systems, log/abs inequality systems, parabola–line tangency, rational limits,
 * finite differences, exponential substitution, MR=MC profit, Bayes, binomial ranges.
 * No solution-formula spoilers in stems; teacher steps only in explanations.
 */

/** Q22 — surjective assignments + complement (not inclusion–exclusion modules). */
export function buildMathQ22Sets() {
  const context = `A lab has six distinct samples and three distinct analysers. Each sample is sent to exactly one analyser. An assignment is called balanced when every analyser receives at least one sample. An assignment is called concentrated when at least one analyser receives four or more samples. Every sample must be assigned.`;

  // total 3^6 = 729
  // surjections: 3! S(6,3) = 6*90 = 540
  // not balanced = 729-540 = 189
  // concentrated: at least one analyser gets ≥4.
  // Count via cases: one gets 4, another 2, third 0 — not all analysers used, OR 4+1+1, OR 5+1+0, OR 6+0+0, OR 3+3+0...
  // Claim "exactly half of all assignments are balanced" → 540/729=20/27 ≠ 1/2 False
  // Claim balanced count is 540 True
  // Claim non-balanced < 200 True (189)
  // Claim every concentrated assignment is non-balanced: True (if one has ≥4 of 6, another has ≤2, cannot all three be ≥1? Wait 4+1+1 is balanced AND concentrated!)
  // So "every concentrated is non-balanced" is FALSE
  // Claim: number of concentrated assignments exceeds 100 — need count
  // Patterns for concentrated (max≥4):
  // (6,0,0): C(6,6)*3 = 3
  // (5,1,0): C(6,5)*C(1,1)*3!/(1!1!1!)=6*6=36? Choose which gets 5 (3), which gets 1 (2 remaining)=3*2*C(6,5)=36
  // (4,2,0): 3!/(1!1!1!)=6 ways assign roles * C(6,4)*C(2,2)=6*15=90
  // (4,1,1): choose who gets 4: 3 ways; choose 4 of 6: C(6,4)=15; split remaining 2 to two analysers: 2 ways. =3*15*2=90
  // (5,0,1) already in (5,1,0)
  // Total concentrated = 3+36+90+90 = 219 > 200? claim >200 True; >100 True
  // Also (3,3,0) max=3 not concentrated.

  const statements = [
    "There are exactly $540$ balanced assignments.",
    "Exactly half of all possible assignments are balanced.",
    "Fewer than $200$ assignments fail to be balanced.",
    "Every concentrated assignment fails to be balanced.",
    "Strictly more than $200$ assignments are concentrated.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

The number of surjections from a set of six to a set of three is

$$
3!\\,S(6,3)=6\\cdot 90=540
$$

So the statement is True.`,

    `**B.** → False

The total number of assignments is $3^{6}=729$, and $540/729=20/27\\neq 1/2$.

So the statement is False.`,

    `**C.** → True

Non-balanced count: $729-540=189<200$.

So the statement is True.`,

    `**D.** → False

The type $(4,1,1)$ is concentrated (one analyser gets four samples) and still uses all three analysers, hence balanced.

So the statement is False.`,

    `**E.** → True

Counting concentrated types $(6,0,0)$, $(5,1,0)$, $(4,2,0)$ and $(4,1,1)$ yields

$$
3+36+90+90=219>200
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.SURJ6",
    id: "MATH 1.MOCK.SURJ6",
    title: "Six samples, three analysers — surjections and concentration",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Surjections $540$; total $729$; non-balanced $189$; $(4,1,1)$ is concentrated and balanced; concentrated $219$.`,
  };
}

/** Q23 — reciprocal power ladder (not Vieta symmetric archive). */
export function buildMathQ23Grind() {
  const context = `A real number $x\\neq 0$ satisfies

$$
x+\\dfrac{1}{x}=3.
$$

No decimal approximation is used. Decide whether each statement is true or false.`;

  // s_n = x^n + x^{-n}; s1=3; s2=7; s3=18; s4=47; s5=123
  // also x^2 - 3x +1 =0, roots (3±√5)/2 both positive

  const statements = [
    "$x^{2}+\\dfrac{1}{x^{2}}=7$.",
    "$x^{3}+\\dfrac{1}{x^{3}}=18$.",
    "$x^{4}+\\dfrac{1}{x^{4}}=45$.",
    "$x^{5}+\\dfrac{1}{x^{5}}=123$.",
    "Both real solutions of the defining relation are strictly greater than $1$.",
  ];

  // E: roots (3±√5)/2: (3+2.236)/2≈2.618>1; (3-2.236)/2≈0.382<1. False

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\Bigl(x+\\dfrac{1}{x}\\Bigr)^{2}=x^{2}+2+\\dfrac{1}{x^{2}}=9\\Rightarrow x^{2}+\\dfrac{1}{x^{2}}=7
$$

So the statement is True.`,

    `**B.** → True

$$
\\Bigl(x+\\dfrac{1}{x}\\Bigr)^{3}=x^{3}+3x+\\dfrac{3}{x}+\\dfrac{1}{x^{3}}=27
$$

$$
x^{3}+\\dfrac{1}{x^{3}}+3\\cdot 3=27\\Rightarrow x^{3}+\\dfrac{1}{x^{3}}=18
$$

So the statement is True.`,

    `**C.** → False

$$
\\Bigl(x^{2}+\\dfrac{1}{x^{2}}\\Bigr)^{2}=x^{4}+2+\\dfrac{1}{x^{4}}=49\\Rightarrow x^{4}+\\dfrac{1}{x^{4}}=47\\neq 45
$$

So the statement is False.`,

    `**D.** → True

Recurrence $s_{n}=3s_{n-1}-s_{n-2}$ with $s_{3}=18$, $s_{4}=47$:

$$
s_{5}=3\\cdot 47-18=123
$$

So the statement is True.`,

    `**E.** → False

Multiplying by $x$ yields $x^{2}-3x+1=0$, so

$$
x=\\dfrac{3\\pm\\sqrt{5}}{2}
$$

The smaller root $\\dfrac{3-\\sqrt{5}}{2}\\approx 0.382$ is strictly less than $1$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.RECPPOW",
    id: "MATH 2.MOCK.RECPPOW",
    title: "Reciprocal power ladder from a single relation",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$s_2=7$, $s_3=18$, $s_4=47$, $s_5=123$. Roots $(3\\pm\\sqrt{5})/2$; one is $<1$.`,
  };
}

/** Q24 — loan amortisation schedule (not NPV vs perpetuity). */
export function buildMathQ24Finance() {
  const context = `A firm borrows EUR $48000$ at annual effective rate $10\\%$. The loan is repaid by four equal year-end payments of size $A$ (ordinary annuity). Let $B_k$ be the outstanding principal immediately after the payment at the end of year $k$ (with $B_0=48000$).

Decide whether each statement is true or false.`;

  // A = 48000 * 0.1 / (1 - 1.1^{-4}) ≈ 15142.60
  // B1 ≈ 37657.40; B2 ≈ 26280.54; B3 ≈ 13766.00; B4 = 0
  // Interest in year 2 = 0.1 * B1 ≈ 3765.74
  // Total interest ≈ 12570.39
  // Claim A > 15000 True; B2 < 27000 True; interest year 2 > 4000 False; total interest < 12000 False; B3 > A False? 13766 < 15143 so B3 < A, claim B3 exceeds A False

  const statements = [
    "The constant payment $A$ exceeds EUR $15000$.",
    "Immediately after the second payment, more than EUR $27000$ of principal remains outstanding.",
    "Interest charged during the second year exceeds EUR $4000$.",
    "Over the full four years, total interest paid is strictly less than EUR $12000$.",
    "Immediately after the third payment, the outstanding principal still exceeds one full payment $A$.",
  ];

  const answer_key = [true, false, false, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
A=48000\\cdot\\dfrac{0.1}{1-1.1^{-4}}\\approx 15142.60>15000
$$

So the statement is True.`,

    `**B.** → False

$$
B_{2}=48000\\cdot 1.1^{2}-A\\cdot\\dfrac{1.1^{2}-1}{0.1}\\approx 26280.54<27000
$$

So the statement is False.`,

    `**C.** → False

Interest in year $2$ equals $0.1\\cdot B_{1}$ with $B_{1}\\approx 37657.40$, hence about EUR $3765.74$, which is below EUR $4000$.

So the statement is False.`,

    `**D.** → False

Total paid is about $4A\\approx 60570$, so total interest is about $12570>12000$.

So the statement is False.`,

    `**E.** → False

$B_{3}\\approx 13766<A\\approx 15143$, so the outstanding amount after the third payment does not exceed one payment.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.AMORT4",
    id: "MATH 3.MOCK.AMORT4",
    title: "Four-payment loan — amortisation balances and interest",
    chapter: 3,
    subsection: "3.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$A\\approx 15143$. $B_2\\approx 26281$. Year-2 interest $\\approx 3766$. Total interest $\\approx 12570$. $B_3<A$.`,
  };
}

/** Q25 — radical equation with extraneous-root traps (not pipes). */
export function buildMathQ25Pipes() {
  const context = `Consider the equation

$$
\\sqrt{2x+3}+\\sqrt{x-1}=5
$$

in the real numbers, together with the companion claim about

$$
\\sqrt{2x+3}-\\sqrt{x-1}=1.
$$

Decide whether each statement is true or false.`;

  // Domain: x≥1
  // Solution of first: b=√(x-1)=-5+3√5, x=b^2+1=14-6√5+... wait
  // b=-5+3√5; b^2=25-30√5+45=70-30√5; x=71-30√5 ≈ 3.918
  // Also check a+b=5, a-b=?
  // a^2=2x+3=2(71-30√5)+3=145-60√5; a=√...
  // From a+b=5 and a^2-b^2=(2x+3)-(x-1)=x+4, and a^2-b^2=(a-b)(a+b)=5(a-b)
  // x+4=5(a-b) → a-b=(x+4)/5
  // At solution x=71-30√5: ... numerically a-b ≈ (3.918+4)/5≈1.584 ≠ 1
  // So companion =1 is False at the solution
  // Unique solution True
  // x=3 not solution: √9+√2=3+1.41≠5
  // Extraneous: if someone squares wrong they get extras — claim "x=13 is a solution" False
  // Claim solution exceeds 4 False (≈3.92)

  const statements = [
    "The first equation has exactly one real solution.",
    "That unique real solution is strictly larger than $4$.",
    "The number $x=13$ satisfies the first equation.",
    "At the unique real solution of the first equation, one also has $\\sqrt{2x+3}-\\sqrt{x-1}=1$.",
    "Every real $x\\ge 1$ that satisfies $(\\sqrt{2x+3}+\\sqrt{x-1})^{2}=25$ is automatically a solution of the first equation.",
  ];

  // E: squaring (a+b)^2=25 with a,b≥0 is equivalent to a+b=5 on domain. True actually!
  // Wait (a+b)^2=25 ⇒ a+b=5 or a+b=-5; on domain a,b≥0 so a+b=5. True.

  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    `**A.** → True

Domain $x\\ge 1$. Set $b=\\sqrt{x-1}\\ge 0$ and $a=5-b\\ge 0$. Then $a^{2}-2b^{2}=5$ yields the quadratic $b^{2}+10b-20=0$, whose only admissible root is $b=-5+3\\sqrt{5}$. Hence exactly one real $x$.

So the statement is True.`,

    `**B.** → False

$$
x=b^{2}+1=71-30\\sqrt{5}\\approx 3.92<4
$$

So the statement is False.`,

    `**C.** → False

At $x=13$, $\\sqrt{29}+\\sqrt{12}\\approx 5.39+3.46\\neq 5$.

So the statement is False.`,

    `**D.** → False

From $a^{2}-b^{2}=x+4$ and $a+b=5$ one gets $a-b=(x+4)/5\\approx 1.58\\neq 1$.

So the statement is False.`,

    `**E.** → True

On the domain both square roots are non-negative, so $(\\sqrt{2x+3}+\\sqrt{x-1})^{2}=25$ forces the sum to equal $5$, which is exactly the original equation.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.RADX",
    id: "MATH 4.MOCK.RADX",
    title: "Paired radical equation — uniqueness and extraneous traps",
    chapter: 4,
    subsection: "4.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Unique root $x=71-30\\sqrt{5}\\approx 3.92$. Not $13$. Difference of roots $\\neq 1$. Squaring is safe on the domain.`,
  };
}

/** Q26 — 3×3 linear system (not break-even product mix). */
export function buildMathQ26BreakEven() {
  const context = `The unique solution $(x,y,z)$ of the system

$$
\\begin{cases}
2x+y-z=6\\\\
x-y+2z=1\\\\
3x+2y+z=13
\\end{cases}
$$

is to be analysed. Decide whether each statement is true or false.`;

  // Verify (2,3,1): 4+3-1=6; 2-3+2=1; 6+6+1=13. Yes.
  // det nonzero unique
  // x+y+z=6; xyz=6; 2x-z=3?

  const statements = [
    "The triple $(x,y,z)=(2,3,1)$ solves the system.",
    "The system has infinitely many real solutions.",
    "$x+y+z=6$.",
    "$xyz=5$.",
    "Replacing the third equation by $4x+2y-2z=12$ produces a system with the same unique solution $(2,3,1)$.",
  ];

  // E: 4x+2y-2z=2(2x+y-z)=2*6=12, so third becomes multiple of first → dependent with first two.
  // First two with (2,3,1): still, but rank? Eq3' = 2*eq1, so only two independent eqs → infinite solutions (a line). Not unique. False that same unique solution.

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Direct substitution: $4+3-1=6$, $2-3+2=1$, $6+6+1=13$.

So the statement is True.`,

    `**B.** → False

The coefficient matrix has full rank three (unique solution as in A), so the solution set is a single point.

So the statement is False.`,

    `**C.** → True

$2+3+1=6$.

So the statement is True.`,

    `**D.** → False

$2\\cdot 3\\cdot 1=6\\neq 5$.

So the statement is False.`,

    `**E.** → False

The new third equation is exactly twice the first, so the system drops to rank $2$ and becomes under-determined: infinitely many solutions, not the unique triple $(2,3,1)$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 5.MOCK.SYS3",
    id: "MATH 5.MOCK.SYS3",
    title: "Three-by-three linear system — uniqueness and dependence trap",
    chapter: 5,
    subsection: "5.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Solution $(2,3,1)$. Unique. Sum $6$, product $6$. Doubling the first equation destroys uniqueness.`,
  };
}

/** Q27 — log + absolute + rational inequality pack (much denser than Mock 5). */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $\\dfrac{x^{2}-5x+6}{x^{2}-4}\\le 0$ is exactly $[2,3]$.",
    "The solution set of $\\log_{1/2}(x^{2}-5x+6)\\ge -1$ is exactly $[1,2)\\cup(3,4]$.",
    "The solution set of $|x-1|+|x-3|+|x-5|\\ge 8$ is exactly $(-\\infty,1]\\cup[5,+\\infty)$.",
    "The solution set of $\\sqrt{x+3}+\\sqrt{x-1}\\le 4$ is exactly $[1,6]$.",
    "The solution set of $\\dfrac{2x-1}{x+3}>1$ is exactly $(-\\infty,-3)\\cup(4,+\\infty)$.",
  ];

  // A: num (x-2)(x-3), den (x-2)(x+2). Simplify for x≠±2: (x-3)/(x+2)≤0 → [-2,3] exclude where undefined or cancelled.
  // Actually original: critical -2,2,3. Sign chart: solution (-2,2)∪[2,3]? At x=2 num=0 den=0 undefined!
  // For x≠±2: after canceling (x-2) for x≠2: (x-3)/(x+2)≤0 → x∈[-2,3]\\{-2}? (x-3)/(x+2)≤0 on [-2,3], exclude -2 (den0) and also need check x=2 undefined in original.
  // So (-2,2)∪(2,3] ∪? At points... Not exactly [2,3]. False.

  // B: computed earlier — True [1,2)∪(3,4]

  // C: |x-1|+|x-3|+|x-5| = { 9-x x≤1; 5+x? ; for x in [1,3]: (x-1)+(3-x)+(5-x)=7-x; [3,5]: x-1+x-3+5-x=x+1; x≥5: 3x-9 }
  // Min on [1,5] is at median x=3: value 4. ≥8: 7-x≥8⇒x≤-1 but in [1,3] 7-x∈[4,6]<8; on [3,5] x+1∈[4,6]<8; left of 1: 9-x≥8⇒x≤1, so (-∞,1]; right: 3x-9≥8⇒x≥17/3≈5.67, so [17/3,∞) not [5,∞). False.

  // D: domain x≥1. Set √(x+3)+√(x-1)≤4. At x=1: √4+0=2≤4; at x=6: √9+√5=3+2.24>4. Max domain.
  // Isolate square: let a=√(x+3),b=√(x-1), a+b≤4, a^2-b^2=4. Similar. Boundary a+b=4 → x=...?
  // From earlier method: b^2+8b-12? Actually solve a+b=4, a^2=b^2+4 → (4-b)^2=b^2+4 → 16-8b+b^2=b^2+4 → 12=8b → b=1.5, x=b^2+1=3.25
  // So equality at 3.25, and inequality ≤ holds on [1, 3.25], not [1,6]. False.

  // E: (2x-1)/(x+3)>1 → (2x-1-x-3)/(x+3)>0 → (x-4)/(x+3)>0 → (-∞,-3)∪(4,∞). True.

  const answer_key = [false, true, false, false, true];

  const tactical_explanations = [
    `**A.** → False

The expression is undefined at $x=\\pm 2$. After cancelling the common factor $x-2$ for $x\\neq 2$, the inequality reduces to $\\dfrac{x-3}{x+2}\\le 0$ on $(-2,2)\\cup(2,3]$, which is not the singleton interval $[2,3]$.

So the statement is False.`,

    `**B.** → True

Domain: $(x-2)(x-3)>0$. Because the base $\\tfrac12\\in(0,1)$, the inequality becomes $0<x^{2}-5x+6\\le 2$, i.e. $x\\in[1,4]$ intersected with the domain, hence $[1,2)\\cup(3,4]$.

So the statement is True.`,

    `**C.** → False

The sum of absolutes equals $9-x$ for $x\\le 1$, equals $7-x$ on $[1,3]$, equals $x+1$ on $[3,5]$, and equals $3x-9$ for $x\\ge 5$. The inequality $\\ge 8$ forces $x\\le 1$ or $x\\ge \\tfrac{17}{3}$, not $(-\\infty,1]\\cup[5,+\\infty)$.

So the statement is False.`,

    `**D.** → False

Domain $x\\ge 1$. Equality $\\sqrt{x+3}+\\sqrt{x-1}=4$ holds only at $x=\\tfrac{13}{4}=3.25$, and the inequality holds on $[1,\\tfrac{13}{4}]$, not on $[1,6]$.

So the statement is False.`,

    `**E.** → True

$$
\\dfrac{2x-1}{x+3}-1=\\dfrac{x-4}{x+3}>0
$$

gives $(-\\infty,-3)\\cup(4,+\\infty)$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.LOGABS",
    id: "MATH 6.MOCK.LOGABS",
    title: "Rational, logarithmic, absolute and radical inequality pack",
    chapter: 6,
    subsection: "6.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Rational not $[2,3]$. Log set $[1,2)\\cup(3,4]$. Abs sum needs $x\\ge 17/3$. Radical up to $13/4$. Linear fractional $(-\\infty,-3)\\cup(4,\\infty)$.`,
  };
}

/** Q28 — parabola vs line tangency (not piecewise junction). */
export function buildMathQ28Piecewise() {
  const context = `Let $f(x)=x^{2}-6x+5$ and $g(x)=2x+m$ with real parameter $m$. Decide whether each statement is true or false.`;

  // f=(x-1)(x-5), vertex (3,-4), f(3)=-4
  // f-g=x^2-8x+(5-m); disc=64-4(5-m)=44+4m
  // tangent: disc=0 → m=-11
  // two intersections: m>-11; none m<-11
  // axis x=3; g(3)=6+m; claim vertex lies on g when  -4=6+m → m=-10
  // average rate of f on [1,5]: (f(5)-f(1))/(4)=0 → 0

  const statements = [
    "The graphs of $f$ and $g$ are tangent for exactly one real value of $m$, namely $m=-11$.",
    "If $m=-10$, then the vertex of $f$ lies on the line $g$.",
    "For $m=-12$ the equation $f(x)=g(x)$ has two distinct real roots.",
    "The axis of symmetry of $f$ is the line $x=3$.",
    "The average rate of change of $f$ on the interval $[1,5]$ equals $0$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
f(x)-g(x)=x^{2}-8x+(5-m),\\qquad \\Delta=44+4m
$$

Tangency requires $\\Delta=0$, hence $m=-11$ only.

So the statement is True.`,

    `**B.** → True

The vertex is $(3,-4)$. Then $g(3)=6+m=-4$ forces $m=-10$.

So the statement is True.`,

    `**C.** → False

For $m=-12$, $\\Delta=44-48=-4<0$, so no real intersection.

So the statement is False.`,

    `**D.** → True

Axis $x=-b/(2a)=6/2=3$.

So the statement is True.`,

    `**E.** → True

$$
\\dfrac{f(5)-f(1)}{5-1}=\\dfrac{0-0}{4}=0
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.TANG",
    id: "MATH 7.MOCK.TANG",
    title: "Parabola versus moving line — tangency and vertex traps",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Tangent at $m=-11$. Vertex on line at $m=-10$. $m=-12$ misses. Axis $x=3$. Average rate on $[1,5]$ is $0$.`,
  };
}

/** Q29 — rational and infinity limits (not Ax^p letter limits). */
export function buildMathQ29Limits() {
  const context = `Decide whether each limit claim is true or false.`;

  const statements = [
    "$\\displaystyle\\lim_{x\\to 2}\\dfrac{x^{3}-8}{x^{2}-3x+2}=12$.",
    "$\\displaystyle\\lim_{x\\to 1}\\dfrac{x^{3}-8}{x^{2}-3x+2}$ exists as a real number.",
    "$\\displaystyle\\lim_{x\\to +\\infty}\\bigl(\\sqrt{x^{2}+x}-x\\bigr)=\\dfrac12$.",
    "$\\displaystyle\\lim_{x\\to +\\infty}\\dfrac{3x^{2}-x}{x^{2}+5}=3$.",
    "$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x}=1$.",
  ];

  // A: (x-2)(x^2+2x+4)/((x-2)(x-1)) → (4+4+4)/1=12 True
  // B: at x=1 den=1-3+2=0, num=1-8=-7≠0 → infinite, no real limit False
  // C: rationalize → 1/2 True
  // D: True
  // E: sin(3x)/x = 3 sin(3x)/(3x) → 3 ≠ 1 False

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\dfrac{x^{3}-8}{x^{2}-3x+2}=\\dfrac{(x-2)(x^{2}+2x+4)}{(x-2)(x-1)}\\xrightarrow{x\\to 2}\\dfrac{12}{1}=12
$$

So the statement is True.`,

    `**B.** → False

At $x=1$ the denominator vanishes while the numerator equals $-7\\neq 0$, so the limit is infinite and not a real number.

So the statement is False.`,

    `**C.** → True

$$
\\sqrt{x^{2}+x}-x=\\dfrac{x}{\\sqrt{x^{2}+x}+x}=\\dfrac{1}{\\sqrt{1+1/x}+1}\\to\\dfrac12
$$

So the statement is True.`,

    `**D.** → True

Divide by $x^{2}$: the limit is $3/1=3$.

So the statement is True.`,

    `**E.** → False

$$
\\dfrac{\\sin(3x)}{x}=3\\cdot\\dfrac{\\sin(3x)}{3x}\\to 3\\cdot 1=3\\neq 1
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.RATLIM",
    id: "MATH 8.MOCK.RATLIM",
    title: "Rational and infinite limits — holes, asymptotes, sine factor",
    chapter: 8,
    subsection: "8.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Limit at $2$ is $12$; at $1$ diverges; $\\sqrt{x^2+x}-x\\to 1/2$; degree ratio $3$; $\\sin(3x)/x\\to 3$.`,
  };
}

/** Q30 — finite differences from a table (not parametric cubic factor). */
export function buildMathQ30Param() {
  const context = `A polynomial $p$ of unknown degree produces the table

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $p(x)$ | $3$ | $3$ | $5$ | $15$ | $39$ |

Decide whether each statement is true or false.`;

  // ys 3,3,5,15,39; d1 0,2,10,24; d2 2,8,14; d3 6,6 → degree 3
  // p(x)=x^3-2x^2+x+3
  // p(5)=125-50+5+3=83
  // p(-1)=-1-2-1+3=-1
  // leading coeff 1 from d3/3!=6/6=1

  const statements = [
    "The third differences are constant, so $\\deg p=3$.",
    "The leading coefficient of $p$ equals $1$.",
    "$p(5)=83$.",
    "$p(-1)=0$.",
    "The same table is also produced by some polynomial of degree $4$ with leading coefficient $0$.",
  ];

  // E: degree 4 with leading 0 is actually degree ≤3 — wording trap. "leading coefficient 0" means not genuinely degree 4. The statement says "polynomial of degree 4 with leading coefficient 0" which is contradictory / false as a degree-4 claim. False.

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

First differences: $0,2,10,24$. Second: $2,8,14$. Third: $6,6$, constant, hence degree $3$.

So the statement is True.`,

    `**B.** → True

For monic spacing $1$, the constant third difference equals $3!\\,a_{3}$, so $6=6a_{3}$ and $a_{3}=1$.

So the statement is True.`,

    `**C.** → True

Newton forward reconstruction (or matching $x^{3}-2x^{2}+x+3$) yields $p(5)=83$.

So the statement is True.`,

    `**D.** → False

$p(-1)=-1-2-1+3=-1\\neq 0$.

So the statement is False.`,

    `**E.** → False

A polynomial whose leading coefficient is $0$ does not have that degree. The table already forces exact degree $3$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FINDIF",
    id: "MATH 9.MOCK.FINDIF",
    title: "Finite-difference table — degree, leading coefficient, extension",
    chapter: 9,
    subsection: "9.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Degree $3$, leading $1$, $p(x)=x^3-2x^2+x+3$, $p(5)=83$, $p(-1)=-1$.`,
  };
}

/** Q31 — exponential substitution equation (not coupled tracer/fund). */
export function buildMathQ31LogDeriv() {
  const context = `Consider the real equation

$$
4^{x}-5\\cdot 2^{x}+4=0
$$

together with the continuous model $M(t)=80e^{-0.2t}$ (mass in milligrams, $t$ in hours). Decide whether each statement is true or false.`;

  //  (2^x)^2 - 5*2^x +4=0 → (2^x-4)(2^x-1)=0 → x=2 or x=0
  // M(0)=80; half-life: e^{-0.2t}=1/2 → t=ln2/0.2≈3.466 < 4
  // M(5)=80e^{-1}≈29.43 < 30
  // M(10)=80e^{-2}≈10.83 > 10?

  const statements = [
    "The exponential equation has exactly the two real solutions $x=0$ and $x=2$.",
    "The product of those two solutions equals $2$.",
    "The half-life of $M$ is strictly less than $4$ hours.",
    "After $5$ hours the mass $M(5)$ is still strictly above $30\\,\\mathrm{mg}$.",
    "After $10$ hours the mass $M(10)$ is strictly below $10\\,\\mathrm{mg}$.",
  ];

  // M(5)=80/e≈29.43<30 → "still above 30" False
  // M(10)=80/e^2≈10.83>10 → "below 10" False
  // product 0*2=0 ≠ 2 False

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Set $u=2^{x}>0$. Then $u^{2}-5u+4=0$ factors as $(u-4)(u-1)=0$, so $u=4$ or $u=1$, hence $x=2$ or $x=0$.

So the statement is True.`,

    `**B.** → False

The product of the roots is $0\\cdot 2=0\\neq 2$.

So the statement is False.`,

    `**C.** → True

$$
e^{-0.2t}=\\tfrac12\\Rightarrow t=\\dfrac{\\ln 2}{0.2}\\approx 3.47<4
$$

So the statement is True.`,

    `**D.** → False

$$
M(5)=80e^{-1}\\approx 29.43<30
$$

So the statement is False.`,

    `**E.** → False

$$
M(10)=80e^{-2}\\approx 10.83>10
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 10.MOCK.EXPSUB",
    id: "MATH 10.MOCK.EXPSUB",
    title: "Exponential substitution plus continuous decay half-life",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Roots $0$ and $2$. Half-life $\\approx 3.47$. $M(5)\\approx 29.4$, $M(10)\\approx 10.8$.`,
  };
}

/** Q32 — MR=MC profit maximisation (not three-factor engagement derivative). */
export function buildMathQ32Engagement() {
  const context = `A firm faces inverse demand $p=60-2q$ and total cost $C(q)=q^{2}+12q+40$ for output $q\\ge 0$ (price and cost in EUR). Profit is $\\pi(q)=R(q)-C(q)$ with revenue $R(q)=pq$.

Decide whether each statement is true or false.`;

  // R=60q-2q^2; π=48q-3q^2-40; π'=48-6q=0 → q=8
  // π(8)=152; MR=60-4q; MC=2q+12; at 8 both 28
  // π(10)=48*10-3*100-40=480-300-40=140<152
  // π(0)=-40

  const statements = [
    "Marginal revenue equals marginal cost at the output $q=8$.",
    "Profit is maximised at $q=8$, and the maximal profit equals EUR $152$.",
    "At $q=10$, profit exceeds the maximal profit from letter B.",
    "Marginal cost is a strictly increasing function of $q$ on $[0,+\\infty)$.",
    "At the profit-maximising output, price equals EUR $44$.",
  ];

  // price at q=8: 60-16=44 True
  // π(10)<π(8) so C False
  // MC'=2>0 True

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
R'(q)=60-4q,\\qquad C'(q)=2q+12
$$

At $q=8$ both equal $28$.

So the statement is True.`,

    `**B.** → True

$$
\\pi(q)=48q-3q^{2}-40,\\qquad \\pi'(q)=48-6q
$$

vanishes only at $q=8$, and $\\pi''=-6<0$. Then $\\pi(8)=152$.

So the statement is True.`,

    `**C.** → False

$$
\\pi(10)=140<152
$$

So the statement is False.`,

    `**D.** → True

$C'(q)=2q+12$ has derivative $2>0$.

So the statement is True.`,

    `**E.** → True

$$
p(8)=60-16=44
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.MRMC",
    id: "MATH 11.MOCK.MRMC",
    title: "Linear demand and quadratic cost — MR=MC profit audit",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Optimum $q=8$, $\\pi=152$, $p=44$. $\\pi(10)=140$. MC strictly increasing.`,
  };
}

/** Q33 — three-factory Bayes (not best-of-n match). */
export function buildMathQ33Coins() {
  const context = `Three factories supply a warehouse: Factory A produces $50\\%$ of the units, Factory B produces $30\\%$, and Factory C produces $20\\%$. Defect rates are $2\\%$ at A, $4\\%$ at B, and $6\\%$ at C. A unit is drawn uniformly from the warehouse output. Let $D$ be the event that the unit is defective.

Decide whether each statement is true or false.`;

  // P(D)=0.034; P(A|D)=10/34=5/17; P(B|D)=12/34=6/17; P(C|D)=12/34=6/17
  // P(A|D)<P(C|D) True (5/17<6/17)
  // P(D)<0.04 True
  // P(B|D)=P(C|D) True both 6/17
  // P(D|A)=0.02 not 0.5
  // most likely source given D is B or C tied — claim "A is uniquely most likely" False

  const statements = [
    "The unconditional defect probability $P(D)$ is strictly less than $0.04$.",
    "Given a defective unit, Factory A is the unique most probable source.",
    "Given a defective unit, Factories B and C are equally probable sources.",
    "Given a defective unit, Factory C is strictly more probable than Factory A.",
    "The defect probability among units from Factory A equals $50\\%$.",
  ];

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
P(D)=0.5\\cdot 0.02+0.3\\cdot 0.04+0.2\\cdot 0.06=0.034<0.04
$$

So the statement is True.`,

    `**B.** → False

$$
P(A\\mid D)=\\dfrac{0.01}{0.034}=\\dfrac{5}{17},\\qquad P(B\\mid D)=P(C\\mid D)=\\dfrac{6}{17}
$$

A is not the most probable source.

So the statement is False.`,

    `**C.** → True

Both posterior probabilities equal $\\dfrac{6}{17}$.

So the statement is True.`,

    `**D.** → True

$\\dfrac{6}{17}>\\dfrac{5}{17}$.

So the statement is True.`,

    `**E.** → False

$P(D\\mid A)=0.02=2\\%$, not $50\\%$ (which is A’s share of output).

So the statement is False.`,
  ];

  return {
    case_id: "MATH 12.MOCK.BAYES3",
    id: "MATH 12.MOCK.BAYES3",
    title: "Three factories — Bayes posteriors and base-rate traps",
    chapter: 12,
    subsection: "12.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$P(D)=0.034$. Posteriors $5/17$, $6/17$, $6/17$. A is not likeliest; $P(D|A)=2\\%$.`,
  };
}

/** Q34 — binomial ranges and linear scoring (not mean/var of Bin(80,0.35)). */
export function buildMathQ34Binomial() {
  const context = `Let $X\\sim\\mathrm{Bin}(n=25,p=0.4)$ and set $Y=3X-2$. Decide whether each statement is true or false.`;

  // E[X]=10, Var=6, SD=√6≈2.45
  // E[Y]=28, Var(Y)=9*6=54
  // P(X≥15)≈0.0344 < 0.05
  // P(X≤2)≈0.00043 < 0.001
  // Claim P(X≥10)=0.5 False (slightly above 0.5 for discrete? median etc - actually for symmetric only if p=0.5)
  // P(X≥10)=P(X>9.5) roughly >0.5 since mean 10. Compute? Not exactly 0.5.

  const statements = [
    "The mean of $X$ is $10$ and the variance of $X$ is $6$.",
    "The mean of $Y$ is $28$ and the variance of $Y$ is $54$.",
    "The probability $P(X\\ge 15)$ is strictly less than $0.05$.",
    "The probability $P(X\\le 2)$ is strictly less than $0.001$.",
    "Because the mean of $X$ is $10$, one has $P(X\\ge 10)=\\tfrac12$ exactly.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=25\\cdot 0.4=10,\\qquad \\mathrm{Var}(X)=25\\cdot 0.4\\cdot 0.6=6
$$

So the statement is True.`,

    `**B.** → True

$$
E[Y]=3\\cdot 10-2=28,\\qquad \\mathrm{Var}(Y)=9\\cdot 6=54
$$

So the statement is True.`,

    `**C.** → True

Direct summation of the binomial probabilities for $k=15,\\ldots,25$ yields about $0.0344<0.05$.

So the statement is True.`,

    `**D.** → True

$$
P(X\\le 2)\\approx 0.00043<0.001
$$

So the statement is True.`,

    `**E.** → False

For $p\\neq 1/2$ the distribution is asymmetric, so $P(X\\ge 10)$ is not forced to equal $1/2$ merely because the mean is $10$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 13.MOCK.BIN25",
    id: "MATH 13.MOCK.BIN25",
    title: "Binomial $n=25$ — tails, linear scoring, median trap",
    chapter: 13,
    subsection: "13.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=10$, $\\mathrm{Var}=6$; $E[Y]=28$, $\\mathrm{Var}(Y)=54$. Tail probs $<0.05$ and $<0.001$. Mean does not force $P(X\\ge 10)=1/2$.`,
  };
}
