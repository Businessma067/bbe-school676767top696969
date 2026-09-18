/**
 * Mock Exam 6 — alternate in-chapter TYPES (still BBE theory per chapter),
 * deliberately not the same engines as Mock 5.
 *
 * M5 → M6 type shift:
 *  IE sets → logic/quantifiers
 *  Vieta archive → rational-expression identities
 *  PV/perpetuity → mortgage amortisation
 *  pipes → absolute/radical/quadratic equations
 *  break-even mix → 2×2 linear systems
 *  mixed abs/rad/rat ineq → quadratic + compound + rational sign charts
 *  piecewise junction → line–parabola meetings
 *  Ax^p letter limits → power calibration / inverse
 *  parametric cubic → finite-difference table
 *  coupled decay → exponential/log equations
 *  product-rule engagement → MR=MC profit (ch11 economic reading)
 *  best-of-n → hypergeometric sampling
 *  binomial mean/var clone → tails + linear scoring
 */

/** Q22 — propositional logic & quantifiers (ch1), not inclusion–exclusion. */
export function buildMathQ22Sets() {
  const context = `Decide whether each logic claim is true or false. Treat the universe as the set of all real numbers unless a claim says otherwise.`;

  const statements = [
    "The implication “if $x>2$, then $x^{2}>4$” is true for every real $x$.",
    "The converse of “if $x>2$, then $x^{2}>4$” is true for every real $x$.",
    "The contrapositive of “if $x>2$, then $x^{2}>4$” is logically equivalent to the original implication.",
    "The statement $\\forall x\\,\\exists y\\,(y>x)$ is true in the real numbers.",
    "The statement $\\exists y\\,\\forall x\\,(y>x)$ is true in the real numbers.",
  ];

  // A True (if x>2 then automatically x^2>4)
  // B False: converse is x^2>4 ⇒ x>2, fails at x=-3
  // C True by definition
  // D True: for any x take y=x+1
  // E False: no single y exceeds every real x

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

If $x>2>0$, then $x^{2}>2^{2}=4$. The implication never fails on $\\mathbb{R}$.

So the statement is True.`,

    `**B.** → False

The converse is “if $x^{2}>4$, then $x>2$”. For $x=-3$ one has $x^{2}=9>4$ but $x\\not>2$.

So the statement is False.`,

    `**C.** → True

An implication is always equivalent to its contrapositive.

So the statement is True.`,

    `**D.** → True

For an arbitrary real $x$, the choice $y=x+1$ satisfies $y>x$.

So the statement is True.`,

    `**E.** → False

No fixed real $y$ can exceed every real $x$, because $x=y+1$ is then a counter-example.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 1.MOCK.LOGICQ",
    id: "MATH 1.MOCK.LOGICQ",
    title: "Implications, contrapositive and quantifier order",
    chapter: 1,
    subsection: "1.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Implication holds; converse fails at $-3$; contrapositive equivalent; $\\forall\\exists$ true; $\\exists\\forall$ false.`,
  };
}

/** Q23 — rational expressions / domains (ch2), not Vieta archive. */
export function buildMathQ23Grind() {
  const context = `Consider the real expressions

$$
E(x)=\\dfrac{x^{2}-1}{x-1},\\qquad F(x)=x+1,\\qquad G(x)=\\dfrac{x^{2}-5x+6}{x-2}.
$$

Decide whether each statement is true or false.`;

  // E(x)=x+1 for x≠1, undefined at 1
  // G(x)=x-3 for x≠2
  // E(x)=F(x) for all x in common domain (all x≠1) True
  // claim E=F for all real x False (x=1)
  // G(3)=0, G(4)=1
  // lim etc - claim G equals x-3 everywhere False

  const statements = [
    "The expression $E(x)$ is defined at $x=1$.",
    "For every real $x\\neq 1$ one has $E(x)=F(x)$.",
    "The equation $E(x)=F(x)$ holds for every real $x$.",
    "For every real $x\\neq 2$ one has $G(x)=x-3$.",
    "$G(4)=1$ and $G(3)=0$.",
  ];

  const answer_key = [false, true, false, true, true];

  const tactical_explanations = [
    `**A.** → False

The denominator $x-1$ vanishes at $x=1$, so $E$ is undefined there.

So the statement is False.`,

    `**B.** → True

For $x\\neq 1$, cancel $x-1$ in the numerator factorisation $(x-1)(x+1)$ to obtain $x+1=F(x)$.

So the statement is True.`,

    `**C.** → False

Equality of values can hold only where both sides are defined; $E$ fails at $x=1$.

So the statement is False.`,

    `**D.** → True

For $x\\neq 2$, $\\dfrac{(x-2)(x-3)}{x-2}=x-3$.

So the statement is True.`,

    `**E.** → True

$G(4)=4-3=1$ and $G(3)=0$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.RATSIM",
    id: "MATH 2.MOCK.RATSIM",
    title: "Rational expressions — cancellation and domain traps",
    chapter: 2,
    subsection: "2.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E$ undefined at $1$ but equals $x+1$ elsewhere. $G=x-3$ off $x=2$. $G(4)=1$, $G(3)=0$.`,
  };
}

/** Q24 — mortgage amortisation (ch3.6), not PV/perpetuity gifts. */
export function buildMathQ24Finance() {
  const context = `A firm borrows EUR $120000$ at annual effective rate $6\\%$. The loan is repaid by five equal year-end payments of size $A$. Let $B_k$ be the outstanding principal immediately after the payment at the end of year $k$ (with $B_0=120000$).

Decide whether each statement is true or false.`;

  // A ≈ 28487.57
  // B1 ≈ 98712; B2 ≈ 76148; interest year 1 = 7200; year 3 interest = 0.06*B2 ≈ 4569

  const statements = [
    "The constant payment $A$ exceeds EUR $28000$.",
    "Immediately after the first payment, more than EUR $100000$ of principal remains outstanding.",
    "Interest charged during the first year equals EUR $7200$.",
    "Interest charged during the third year exceeds EUR $5000$.",
    "Immediately after the fourth payment, the outstanding principal is still strictly larger than one full payment $A$.",
  ];

  // B4 ≈ 26875 < A ≈ 28488 → E False
  // B1 ≈ 98712 < 100000 → B False
  // year 3 int ≈ 4569 < 5000 → D False

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
A=120000\\cdot\\dfrac{0.06}{1-1.06^{-5}}\\approx 28487.57>28000
$$

So the statement is True.`,

    `**B.** → False

$$
B_{1}=120000\\cdot 1.06-A\\approx 98712<100000
$$

So the statement is False.`,

    `**C.** → True

First-year interest is $0.06\\cdot 120000=7200$.

So the statement is True.`,

    `**D.** → False

Third-year interest is $0.06\\cdot B_{2}$ with $B_{2}\\approx 76148$, hence about EUR $4569$, below EUR $5000$.

So the statement is False.`,

    `**E.** → False

$B_{4}\\approx 26875<A\\approx 28488$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.MORT5",
    id: "MATH 3.MOCK.MORT5",
    title: "Five-payment mortgage — balances and interest by year",
    chapter: 3,
    subsection: "3.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$A\\approx 28488$. $B_1\\approx 98712$. Year-1 interest $7200$. Year-3 interest $\\approx 4569$. $B_4<A$.`,
  };
}

/** Q25 — absolute / radical / quadratic equations (ch4), not pipes. */
export function buildMathQ25Pipes() {
  const context = `Decide whether each equation claim is true or false.`;

  const statements = [
    "The equation $|2x-1|=|x+4|$ has exactly the two real solutions $x=5$ and $x=-1$.",
    "The equation $\\sqrt{3x+1}=x-1$ has exactly one real solution, namely $x=5$.",
    "The equation $x^{2}-5x+6=0$ has solutions $x=2$ and $x=3$.",
    "Every real solution of $(\\sqrt{3x+1})^{2}=(x-1)^{2}$ is automatically a solution of $\\sqrt{3x+1}=x-1$.",
    "The equation $|2x-1|=|x+4|$ has a positive solution and a negative solution.",
  ];

  // D False: squaring introduces x=0 extraneous (and sign issues)
  // At x=0: √1=1, 0-1=-1, not equal for original; but squares both 1

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Cases $2x-1=x+4$ and $2x-1=-(x+4)$ give $x=5$ and $x=-1$, and both check.

So the statement is True.`,

    `**B.** → True

Domain requires $x\\ge 1$. Squaring yields $x(x-5)=0$, so only $x=5$ survives the domain and check.

So the statement is True.`,

    `**C.** → True

$(x-2)(x-3)=0$.

So the statement is True.`,

    `**D.** → False

Squaring also admits $x=0$, where $\\sqrt{1}=1$ but $x-1=-1$, so $x=0$ is extraneous for the original radical equation.

So the statement is False.`,

    `**E.** → True

The two solutions are $5>0$ and $-1<0$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.EQPACK",
    id: "MATH 4.MOCK.EQPACK",
    title: "Absolute, radical and quadratic equations — extraneous roots",
    chapter: 4,
    subsection: "4.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$|2x-1|=|x+4|$ gives $\\{-1,5\\}$. Radical gives only $x=5$. Quadratic roots $2,3$. Squaring is not safe.`,
  };
}

/** Q26 — 2×2 linear systems (ch5), not three-product break-even. */
export function buildMathQ26BreakEven() {
  const context = `Consider the linear system

$$
\\begin{cases}
2x+3y=13\\\\
3x-y=3
\\end{cases}
$$

and the modified system obtained by replacing the second equation with $4x+6y=26$. Decide whether each statement is true or false.`;

  // First system: x=2,y=3 unique
  // Second equation 4x+6y=26 = 2*(2x+3y)=2*13 → dependent → infinite solutions (the line 2x+3y=13)

  const statements = [
    "The original system has the unique solution $(x,y)=(2,3)$.",
    "The original system has no real solution.",
    "In the original system, $x+y=5$.",
    "The modified system has infinitely many real solutions.",
    "The modified system still has the unique solution $(2,3)$.",
  ];

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Substitution or elimination yields $x=2$, $y=3$, and both equations check.

So the statement is True.`,

    `**B.** → False

A unique solution was found in letter A.

So the statement is False.`,

    `**C.** → True

$2+3=5$.

So the statement is True.`,

    `**D.** → True

$4x+6y=26$ is exactly twice the first equation, so the modified system reduces to the single condition $2x+3y=13$, a line of solutions.

So the statement is True.`,

    `**E.** → False

Infinitely many solutions means $(2,3)$ is not unique.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 5.MOCK.LIN2",
    id: "MATH 5.MOCK.LIN2",
    title: "Two-by-two linear system — uniqueness and dependence",
    chapter: 5,
    subsection: "5.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Unique $(2,3)$. Sum $5$. Doubling the first equation produces a dependent line.`,
  };
}

/** Q27 — quadratic / compound / rational sign charts (ch6), not M5’s abs-radical mix. */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $x^{2}-5x+6>0$ is exactly $(-\\infty,2)\\cup(3,+\\infty)$.",
    "The solution set of $1\\le x^{2}\\le 4$ is exactly $[-2,-1]\\cup[1,2]$.",
    "The solution set of $\\dfrac{x-2}{x+3}\\ge 0$ is exactly $(-\\infty,-3)\\cup[2,+\\infty)$.",
    "The solution set of $x^{2}-5x+6\\ge 0$ is exactly $(-\\infty,2]\\cup[3,+\\infty)$.",
    "The solution set of $\\dfrac{x-2}{x+3}\\ge 0$ includes the point $x=-3$.",
  ];

  // C: ≥0 on (-∞,-3)∪[2,∞) but undefined at -3, so exact set is (-∞,-3)∪[2,∞) — wait is -3 included? NO. The claim says exactly (-∞,-3)∪[2,∞) which EXCLUDES -3 from being a solution but the interval notation (-∞,-3) is open at -3. So the set description (-∞,-3)∪[2,∞) is correct (open at -3). True!
  // E: includes x=-3? False, undefined

  // For ≥0: critical -3,2; positive on (-∞,-3) and [2,∞); undefined at -3. Yes exactly (-∞,-3)∪[2,∞). True.

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$(x-2)(x-3)>0$ outside the roots, i.e. $(-\\infty,2)\\cup(3,+\\infty)$.

So the statement is True.`,

    `**B.** → True

$1\\le |x|\\le 2$ is exactly $[-2,-1]\\cup[1,2]$.

So the statement is True.`,

    `**C.** → True

Sign chart of $\\dfrac{x-2}{x+3}$ (undefined at $-3$) gives $(-\\infty,-3)\\cup[2,+\\infty)$.

So the statement is True.`,

    `**D.** → True

Including the roots replaces the open ends at $2$ and $3$ by closed ends.

So the statement is True.`,

    `**E.** → False

At $x=-3$ the denominator vanishes, so $x=-3$ is not a solution.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.QUADRAT",
    id: "MATH 6.MOCK.QUADRAT",
    title: "Quadratic, compound and rational sign-chart inequalities",
    chapter: 6,
    subsection: "6.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Quadratic open/closed exteriors. Compound $|x|\\in[1,2]$. Rational $(-\\infty,-3)\\cup[2,\\infty)$; $-3$ excluded.`,
  };
}

/** Q28 — line and parabola meetings (ch7), not piecewise continuity. */
export function buildMathQ28Piecewise() {
  const context = `Let $f(x)=x^{2}-4x+1$ and $g(x)=mx-3$ with real parameter $m$. Decide whether each statement is true or false.`;

  const statements = [
    "The graphs of $f$ and $g$ are tangent for exactly the parameter values $m=0$ and $m=-8$.",
    "If $m=0$, then the vertex of $f$ lies on the line $g$.",
    "If $m=1$, then $f(x)=g(x)$ has two distinct real roots.",
    "The axis of symmetry of $f$ is the line $x=2$.",
    "If $m=-4$, then $f(x)=g(x)$ has two distinct real roots.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
f-g=x^{2}-(4+m)x+4,\\qquad \\Delta=m(m+8)
$$

Tangency requires $\\Delta=0$, hence $m=0$ or $m=-8$.

So the statement is True.`,

    `**B.** → True

The vertex is $(2,-3)$. Then $g(2)=2m-3=-3$ forces $m=0$.

So the statement is True.`,

    `**C.** → True

For $m=1$, $\\Delta=9>0$, so two distinct intersections.

So the statement is True.`,

    `**D.** → True

Axis $x=4/2=2$.

So the statement is True.`,

    `**E.** → False

For $m=-4$, $\\Delta=(-4)(4)=-16<0$, so there is no real intersection.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 7.MOCK.MEET",
    id: "MATH 7.MOCK.MEET",
    title: "Parabola versus sliding line — tangency and meetings",
    chapter: 7,
    subsection: "7.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Tangent at $m=0,-8$. Vertex on line at $m=0$. $m=1$ two meetings. Axis $x=2$. $m=-4$ misses.`,
  };
}

/** Q29 — power calibration / inverse (ch8), not Ax^p limit letters. */
export function buildMathQ29Limits() {
  const context = `A positive quantity follows the power model $f(x)=A x^{-2}$ for $x>0$. It is known that $f(2)=5$. Decide whether each statement is true or false.`;

  // A*1/4=5 → A=20
  // f(4)=20/16=5/4=1.25
  // f(1)=20
  // inverse: y=20/x^2 → x=√(20/y)
  // claim f(4)>2 False
  // claim A=10 False

  const statements = [
    "The constant $A$ equals $20$.",
    "$f(4)=\\dfrac{5}{4}$.",
    "$f(1)=20$.",
    "$f(4)$ is strictly greater than $2$.",
    "Solving $y=f(x)$ for $x>0$ gives $x=\\sqrt{\\dfrac{20}{y}}$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
A\\cdot 2^{-2}=5\\Rightarrow \\dfrac{A}{4}=5\\Rightarrow A=20
$$

So the statement is True.`,

    `**B.** → True

$$
f(4)=20\\cdot 4^{-2}=\\dfrac{20}{16}=\\dfrac{5}{4}
$$

So the statement is True.`,

    `**C.** → True

$f(1)=20\\cdot 1=20$.

So the statement is True.`,

    `**D.** → False

$\\dfrac{5}{4}=1.25<2$.

So the statement is False.`,

    `**E.** → True

$y=20/x^{2}$ rearranges to $x^{2}=20/y$, hence $x=\\sqrt{20/y}$ for $x>0$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 8.MOCK.CALIB",
    id: "MATH 8.MOCK.CALIB",
    title: "Power model — calibration from a sample and inverse",
    chapter: 8,
    subsection: "8.7",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$A=20$. $f(4)=5/4$, $f(1)=20$. Inverse $x=\\sqrt{20/y}$.`,
  };
}

/** Q30 — finite-difference table (ch9), not parametric cubic. */
export function buildMathQ30Param() {
  const context = `A polynomial $p$ of unknown degree produces the table

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $p(x)$ | $4$ | $4$ | $10$ | $34$ | $88$ |

Decide whether each statement is true or false.`;

  // ys 4,4,10,34,88; d1 0,6,24,54; d2 6,18,30; d3 12,12 → deg 3, leading 12/6=2
  // p(x)=2x^3-3x^2+x+4
  // p(5)=2*125-3*25+5+4=250-75+5+4=184
  // p(-1)=-2-3-1+4=-2

  const statements = [
    "The third differences are constant, so $\\deg p=3$.",
    "The leading coefficient of $p$ equals $2$.",
    "$p(5)=184$.",
    "$p(-1)=0$.",
    "The same table can be produced by a genuine degree-$4$ polynomial whose leading coefficient is nonzero.",
  ];

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

First differences $0,6,24,54$; second $6,18,30$; third $12,12$, constant, hence degree $3$.

So the statement is True.`,

    `**B.** → True

With unit spacing, the constant third difference equals $3!\\,a_{3}$, so $12=6a_{3}$ and $a_{3}=2$.

So the statement is True.`,

    `**C.** → True

Matching $2x^{3}-3x^{2}+x+4$ (or Newton forward) gives $p(5)=184$.

So the statement is True.`,

    `**D.** → False

$p(-1)=-2-3-1+4=-2\\neq 0$.

So the statement is False.`,

    `**E.** → False

A nonzero degree-$4$ leading term would make fourth differences nonzero; the table forces exact degree $3$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.FINDIF",
    id: "MATH 9.MOCK.FINDIF",
    title: "Finite-difference table — degree and extension",
    chapter: 9,
    subsection: "9.8",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Degree $3$, leading $2$, $p(x)=2x^3-3x^2+x+4$, $p(5)=184$, $p(-1)=-2$.`,
  };
}

/** Q31 — exponential and log equations (ch10), not coupled tracer/fund. */
export function buildMathQ31LogDeriv() {
  const context = `Decide whether each equation claim is true or false.`;

  const statements = [
    "The equation $9^{x}-10\\cdot 3^{x}+9=0$ has exactly the two real solutions $x=0$ and $x=2$.",
    "The product of those two solutions equals $0$.",
    "The equation $\\log_{2}(x-1)+\\log_{2}(x+1)=3$ has exactly one real solution $x=3$.",
    "The number $x=1$ is a solution of $\\log_{2}(x-1)+\\log_{2}(x+1)=3$.",
    "Every positive real solution of $\\log_{2}\\bigl((x-1)(x+1)\\bigr)=3$ is automatically a solution of the summed-log equation in letter C.",
  ];

  // E: domain of summed logs needs x>1, while product log needs |x|>1. At x=-3: product log OK (8) but summed logs undefined. So NOT every. False.
  // D: x=1 undefined (log 0). False
  // B: 0*2=0 True

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Set $u=3^{x}>0$. Then $u^{2}-10u+9=0$ factors as $(u-1)(u-9)=0$, so $u=1$ or $u=9$, hence $x=0$ or $x=2$.

So the statement is True.`,

    `**B.** → True

$0\\cdot 2=0$.

So the statement is True.`,

    `**C.** → True

Domain $x>1$. The sum becomes $\\log_{2}(x^{2}-1)=3$, so $x^{2}-1=8$, hence $x=3$ (the negative root is outside the domain).

So the statement is True.`,

    `**D.** → False

At $x=1$ one meets $\\log_{2}(0)$, which is undefined.

So the statement is False.`,

    `**E.** → False

The product-log equation allows $x=-3$, but the original sum of logs requires $x>1$, so $x=-3$ is not admissible for letter C.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 10.MOCK.EXPLOGEQ",
    id: "MATH 10.MOCK.EXPLOGEQ",
    title: "Exponential substitution and logarithmic equations",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Roots $0,2$ for the exponential. Log equation root $x=3$ only. Domain blocks $x=1$ and $x=-3$.`,
  };
}

/** Q32 — MR=MC profit (ch11 economic reading), not three-factor engagement. */
export function buildMathQ32Engagement() {
  const context = `A firm faces inverse demand $p=40-2q$ and total cost $C(q)=q^{2}+4q+10$ for output $q\\ge 0$ (price and cost in EUR). Profit is $\\pi(q)=R(q)-C(q)$ with revenue $R(q)=pq$.

Decide whether each statement is true or false.`;

  // R=40q-2q^2; π=36q-3q^2-10; π'=36-6q=0 → q=6
  // π(6)=98; MR=40-4q; MC=2q+4; at 6 both 16
  // π(5)=36*5-3*25-10=180-75-10=95<98
  // p(6)=28

  const statements = [
    "Marginal revenue equals marginal cost at the output $q=6$.",
    "Profit is maximised at $q=6$, and the maximal profit equals EUR $98$.",
    "At $q=5$, profit exceeds the maximal profit from letter B.",
    "Marginal cost is a strictly increasing function of $q$ on $[0,+\\infty)$.",
    "At the profit-maximising output, price equals EUR $28$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
R'(q)=40-4q,\\qquad C'(q)=2q+4
$$

At $q=6$ both equal $16$.

So the statement is True.`,

    `**B.** → True

$$
\\pi(q)=36q-3q^{2}-10,\\qquad \\pi'(q)=36-6q
$$

vanishes only at $q=6$, and $\\pi''=-6<0$. Then $\\pi(6)=98$.

So the statement is True.`,

    `**C.** → False

$$
\\pi(5)=95<98
$$

So the statement is False.`,

    `**D.** → True

$C'(q)=2q+4$ has derivative $2>0$.

So the statement is True.`,

    `**E.** → True

$$
p(6)=40-12=28
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.MRMC",
    id: "MATH 11.MOCK.MRMC",
    title: "Linear demand and quadratic cost — MR=MC profit audit",
    chapter: 11,
    subsection: "11.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Optimum $q=6$, $\\pi=98$, $p=28$. $\\pi(5)=95$. MC strictly increasing.`,
  };
}

/** Q33 — hypergeometric sampling (ch12), not best-of-n. */
export function buildMathQ33Coins() {
  const context = `An urn holds $8$ red chips and $12$ blue chips. Five chips are drawn at random without replacement. Let $X$ be the number of red chips in the draw.

Decide whether each statement is true or false.`;

  // C(20,5)=15504
  // P(X=2)=C(8,2)C(12,3)/15504=28*220/15504=6160/15504≈0.397
  // P(X=0)=C(12,5)/15504=792/15504≈0.0511
  // E[X]=5*(8/20)=2
  // claim P(X=2)>0.5 False
  // claim P(X=0)<0.06 True
  // claim E=2 True
  // claim P(X=5)=C(8,5)/C(20,5)=56/15504≈0.0036 < 0.01 True
  // claim draws independent False

  const statements = [
    "The expected number of red chips in the draw equals $2$.",
    "The probability of drawing exactly two red chips exceeds $0.5$.",
    "The probability of drawing no red chip is strictly less than $0.06$.",
    "The probability of drawing all five chips red is strictly less than $0.01$.",
    "The successive draws may be treated as independent Bernoulli trials with success probability $8/20$.",
  ];

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=5\\cdot\\dfrac{8}{20}=2
$$

So the statement is True.`,

    `**B.** → False

$$
P(X=2)=\\dfrac{\\binom{8}{2}\\binom{12}{3}}{\\binom{20}{5}}=\\dfrac{6160}{15504}\\approx 0.397<0.5
$$

So the statement is False.`,

    `**C.** → True

$$
P(X=0)=\\dfrac{\\binom{12}{5}}{\\binom{20}{5}}=\\dfrac{792}{15504}\\approx 0.051<0.06
$$

So the statement is True.`,

    `**D.** → True

$$
P(X=5)=\\dfrac{\\binom{8}{5}}{\\binom{20}{5}}=\\dfrac{56}{15504}\\approx 0.0036<0.01
$$

So the statement is True.`,

    `**E.** → False

Sampling is without replacement, so the trials are dependent; the correct model is hypergeometric, not Bernoulli.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 12.MOCK.HYPER",
    id: "MATH 12.MOCK.HYPER",
    title: "Urn without replacement — hypergeometric counts",
    chapter: 12,
    subsection: "12.6",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[X]=2$. $P(X=2)\\approx 0.40$. $P(X=0)\\approx 0.051$. $P(X=5)\\approx 0.0036$. Not Bernoulli.`,
  };
}

/** Q34 — binomial tails + linear scoring (ch13), not mean/var-only clone. */
export function buildMathQ34Binomial() {
  const context = `Let $X\\sim\\mathrm{Bin}(n=20,p=0.25)$ and set $Y=2X+1$. Decide whether each statement is true or false.`;

  // E[X]=5, Var=3.75, E[Y]=11, VarY=15
  // P(X≥8)≈0.1018 > 0.05; claim <0.05 False; claim <0.15 True
  // P(X≤2)≈0.091 > 0.05
  // claim P(X≥5)=1/2 False (asymmetric)

  const statements = [
    "The mean of $X$ is $5$ and the variance of $X$ is $3.75$.",
    "The mean of $Y$ is $11$ and the variance of $Y$ is $15$.",
    "The probability $P(X\\ge 8)$ is strictly less than $0.05$.",
    "The probability $P(X\\le 2)$ is strictly less than $0.10$.",
    "Because the mean of $X$ is $5$, one has $P(X\\ge 5)=\\tfrac12$ exactly.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=20\\cdot 0.25=5,\\qquad \\mathrm{Var}(X)=20\\cdot 0.25\\cdot 0.75=3.75
$$

So the statement is True.`,

    `**B.** → True

$$
E[Y]=2\\cdot 5+1=11,\\qquad \\mathrm{Var}(Y)=4\\cdot 3.75=15
$$

So the statement is True.`,

    `**C.** → False

Summing the binomial probabilities for $k=8,\\ldots,20$ yields about $0.102>0.05$.

So the statement is False.`,

    `**D.** → True

$$
P(X\\le 2)\\approx 0.091<0.10
$$

So the statement is True.`,

    `**E.** → False

For $p\\neq 1/2$ the distribution is asymmetric, so a mean of $5$ does not force $P(X\\ge 5)=1/2$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 13.MOCK.TAILS",
    id: "MATH 13.MOCK.TAILS",
    title: "Binomial $n=20$ — tails, linear scoring, median trap",
    chapter: 13,
    subsection: "13.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=5$, $\\mathrm{Var}=3.75$; $E[Y]=11$, $\\mathrm{Var}(Y)=15$. $P(X\\ge 8)\\approx 0.10$. $P(X\\le 2)\\approx 0.091$. Mean does not force median symmetry.`,
  };
}
