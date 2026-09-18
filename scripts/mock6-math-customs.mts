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

List the even members of $U$ and the multiples of $3$, then apply the inclusion–exclusion count so the overlap is not double-counted.

$$
A=\\{2,4,6,8,10,12\\},\\qquad |A|=6
$$

$$
B=\\{3,6,9,12\\},\\qquad |B|=4,\\qquad A\\cap B=\\{6,12\\},\\qquad |A\\cap B|=2
$$

$$
|A\\cup B|=|A|+|B|-|A\\cap B|=6+4-2=8
$$

So the statement is True.`,

    `**B.** → True

Every multiple of $4$ among $1$ through $12$ is automatically even, so $C$ sits inside $A$. The converse fails as soon as an even number that is not a multiple of $4$ appears.

$$
C=\\{4,8,12\\}\\subseteq A=\\{2,4,6,8,10,12\\}
$$

$$
2\\in A\\setminus C
$$

Thus $C\\subseteq A$ holds, but $A\\subseteq C$ does not.

So the statement is True.`,

    `**C.** → False

A common element of $A$ and $B$ is even and a multiple of $3$, hence a multiple of $6$. Check whether every such element is also a multiple of $4$.

$$
A\\cap B=\\{6,12\\}
$$

$$
6\\in A\\cap B\\quad\\text{but}\\quad 6\\notin C=\\{4,8,12\\}
$$

The counterexample $n=6$ shows $A\\cap B\\not\\subseteq C$.

So the statement is False.`,

    `**D.** → True

The claim asks for an even $n\\in U$ that lies in $C$ (multiple of $4$) but not in $B$ (not a multiple of $3$). Walk through the three candidates in $C$.

$$
C=\\{4,8,12\\}
$$

$$
4\\in A\\cap C\\quad\\text{and}\\quad 4\\notin B
$$

(The same holds for $n=8$; only $n=12$ fails because $12\\in B$.) So a suitable element exists.

So the statement is True.`,

    `**E.** → False

$P(n)\\wedge Q(n)$ means $n\\in A\\cap B$. The claim asserts every such $n$ lies in $C$, which is the same inclusion already broken in letter C.

$$
P(6)\\wedge Q(6)\\quad\\text{holds},\\qquad\\text{yet}\\quad 6\\notin C
$$

Equivalently $A\\cap B\\not\\subseteq C$, so the universal implication fails.

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

Factor the numerator of $E$ and compare domains. The polynomial $F$ is defined everywhere, while $E$ still has a vanishing denominator at $x=2$.

$$
x^{3}-8=(x-2)(x^{2}+2x+4)
$$

$$
E(x)=F(x)\\quad\\text{only for }x\\neq 2
$$

At $x=2$, $E$ is undefined while $F(2)=12$ is defined, so the identity fails on all of $\\mathbb{R}$.

So the statement is False.`,

    `**B.** → True

Away from the hole, cancel the common factor $x-2$ in the factored numerator. Then check the removable limit against the continuous polynomial $F$.

$$
E(x)=\\dfrac{(x-2)(x^{2}+2x+4)}{x-2}=x^{2}+2x+4=F(x)\\qquad(x\\neq 2)
$$

$$
\\lim_{x\\to 2}E(x)=F(2)=4+4+4=12
$$

Both halves of the claim — equality off $x=2$, and matching limit — hold.

So the statement is True.`,

    `**C.** → True

On $x\\neq 2$ replace $E$ by $F$, subtract $12$, then factor the numerator of $H$ before cancelling another copy of $x-2$.

$$
E(x)-12=x^{2}+2x+4-12=x^{2}+2x-8
$$

$$
x^{2}+2x-8=(x-2)(x+4)
$$

$$
H(x)=\\dfrac{(x-2)(x+4)}{x-2}=x+4\\qquad(x\\neq 2)
$$

Thus $H(x)=x+4$ wherever the original formula for $H$ is defined.

So the statement is True.`,

    `**D.** → False

The written formula for $H$ still divides by $x-2$ and also refers to $E$, which is itself undefined at $x=2$. A removable algebraic simplification of $H$ is not the same as the original expression being defined there.

$$
H(x)=\\dfrac{E(x)-12}{x-2}
$$

At $x=2$ the denominator is zero (and $E(2)$ is undefined), so the original formula does not assign any value — in particular not the value $6$.

So the statement is False.`,

    `**E.** → True

Plug $x=3$ into both formulas separately; neither expression has a domain issue at $3$, so a direct arithmetic check settles the claim.

$$
E(3)=\\dfrac{3^{3}-8}{3-2}=\\dfrac{27-8}{1}=19
$$

$$
F(3)=3^{2}+2\\cdot 3+4=9+6+4=19
$$

Both values equal $19$, as asserted.

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

The level annuity payment that amortises principal $87500$ over six years at effective rate $7.5\\%$ is

$$
A=87500\\cdot\\dfrac{0.075}{1-1.075^{-6}}
$$

Numerically,

$$
1.075^{6}\\approx 1.5433,\\qquad 1.075^{-6}\\approx 0.6480
$$

$$
A\\approx 87500\\cdot\\dfrac{0.075}{0.3520}\\approx 18641
$$

which sits strictly between $18500$ and $18800$.

So the statement is True.`,

    `**B.** → True

Year-$1$ interest is charged on the full opening balance. After the first payment the balance falls, so year-$2$ interest is smaller; compare the gap to $900$.

$$
I_{1}=0.075\\cdot 87500=6562.5
$$

$$
B_{1}=87500\\cdot 1.075-A\\approx 75421,\\qquad I_{2}=0.075\\cdot B_{1}\\approx 5657
$$

$$
I_{1}-I_{2}\\approx 6562.5-5657=905.5>900
$$

So the statement is True.`,

    `**C.** → True

Roll the outstanding balance forward three payments and compare with half the original principal $87500/2$.

$$
B_{3}=B_{2}\\cdot 1.075-A\\approx 48478
$$

$$
\\tfrac12\\cdot 87500=43750
$$

Since $48478>43750$, more than half of the original principal is still outstanding immediately after the third payment.

So the statement is True.`,

    `**D.** → True

Interest in year $5$ is charged on the outstanding principal just after the fourth payment. Compute that balance, then multiply by the effective rate.

$$
B_{4}\\approx 33472
$$

$$
I_{5}=0.075\\cdot B_{4}\\approx 0.075\\cdot 33472\\approx 2510
$$

and $2510<2600$, so year-$5$ interest is strictly less than EUR $2600$.

So the statement is True.`,

    `**E.** → False

Total interest equals total cash paid minus the original principal. Six level payments of about $A\\approx 18641$ give

$$
6A\\approx 6\\cdot 18641=111846
$$

$$
\\text{total interest}\\approx 111846-87500=24346
$$

Since $24346>24000$, the claim that total interest is strictly less than $24000$ fails.

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

Substitute the candidate pair into each equation separately and check that both sides match exactly.

$$
x+y:\\quad 4+3=7
$$

$$
2x-y:\\quad 2\\cdot 4-3=8-3=5
$$

Both equations hold at once, so $(x,y)=(4,3)$ is a simultaneous solution of the two-equation system.

So the statement is True.`,

    `**B.** → True

Add the two equations to eliminate $y$, then back-substitute into the first equation. The resulting pair is forced uniquely.

$$
(x+y)+(2x-y)=7+5
$$

$$
3x=12\\Rightarrow x=4,\\qquad y=7-4=3
$$

A non-degenerate $2\\times 2$ linear system cannot admit a second distinct real solution besides this pair.

So the statement is True.`,

    `**C.** → True

From the unique solution found in letter B, compare the two coordinates directly rather than re-solving the system from scratch.

$$
x=4,\\qquad y=3
$$

$$
4>3
$$

so $x$ is strictly larger than $y$ in the unique real solution of the two-equation pack.

So the statement is True.`,

    `**D.** → True

Multiply the two solution coordinates obtained in letter B; no further algebra is required beyond reading off the product.

$$
x\\cdot y=4\\cdot 3=12
$$

The product of the two solution coordinates equals $12$ exactly as claimed.

So the statement is True.`,

    `**E.** → False

The two lines $x+y=7$ and $2x-y=5$ have different slopes ($\\!-1$ versus $2$), so they intersect in at most one point. That unique intersection is already $(4,3)$.

$$
\\text{unique solution}=(4,3)
$$

There is therefore no second distinct real solution besides $(4,3)$.

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

Translate the verbal brief into equations, solve for $x$ in terms of $t$, and read the non-negativity cut.

$$
2x+y=t,\\qquad y=x+2
$$

$$
2x+(x+2)=t\\Rightarrow 3x+2=t\\Rightarrow x=\\dfrac{t-2}{3}
$$

Feasibility needs $x\\ge 0$, hence $t\\ge 2$. For a counterexample take $t=1$: then $x=-1/3<0$, so not every $t>0$ works.

So the statement is False.`,

    `**B.** → True

The second requirement of the brief is already a strict comparison between the two hour totals, independent of the value of $t$.

$$
y=x+2
$$

Whenever a solution pair exists (feasible or not), one automatically has $y>x$. Restricting attention to the feasible region $x\\ge 0$, $y\\ge 0$ does not change that strict inequality.

So the statement is True.`,

    `**C.** → True

Two independent linear equalities in two unknowns determine at most one algebraic pair $(x,y)$ for each fixed $t$. The inequalities $x\\ge 0$, $y\\ge 0$ can only accept or reject that pair — they cannot create a second distinct solution.

$$
\\text{at most one algebraic pair}\\Rightarrow\\text{at most one feasible pair}
$$

So the statement is True.`,

    `**D.** → True

Substitute the boundary value $t=2$ into the closed-form solution obtained in letter A and check non-negativity carefully.

$$
x=\\dfrac{2-2}{3}=0,\\qquad y=\\dfrac{2+4}{3}=2
$$

Both coordinates are non-negative, and the schedule uses no A-hours at all, exactly as claimed.

So the statement is True.`,

    `**E.** → True

Differentiate (or shift) the closed forms with respect to the target $t$, reading the coefficients of $t$ in each numerator.

$$
x=\\dfrac{t-2}{3},\\qquad y=\\dfrac{t+4}{3}
$$

Increasing $t$ by exactly $3$ adds $3/3=1$ to each numerator, so both $x$ and $y$ increase by exactly $1$ on the unique algebraic solution.

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

An absolute-value equality $|u|=|v|$ splits into the two linear cases $u=v$ and $u=-v$. Solve each case separately.

$$
2x-1=x+3\\Rightarrow x=4
$$

$$
2x-1=-(x+3)\\Rightarrow 2x-1=-x-3\\Rightarrow 3x=-2\\Rightarrow x=-\\dfrac{2}{3}
$$

Both roots are real and distinct, so there are exactly two real solutions.

So the statement is True.`,

    `**B.** → False

Impose the domain of the square root and of the right-hand side before squaring, then check which algebraic candidates survive.

$$
x+3\\ge 0\\quad\\text{and}\\quad x-1\\ge 0\\Rightarrow x\\ge 1
$$

$$
x+3=(x-1)^{2}\\Rightarrow x^{2}-3x-2=0\\Rightarrow x=\\dfrac{3\\pm\\sqrt{17}}{2}
$$

Only the plus root $\\approx 3.56$ satisfies $x\\ge 1$; the minus root is negative. Exactly one real solution, not two.

So the statement is False.`,

    `**C.** → True

The sum of distances from $x$ to $2$ and from $x$ to $-1$ is minimised on the segment joining the two points; compute that minimum explicitly.

$$
\\text{on }[-1,2]:\\quad |x-2|+|x+1|=(2-x)+(x+1)=3
$$

Outside $[-1,2]$ the sum is strictly larger than $3$. Hence $|x-2|+|x+1|\\ge 3$ for every real $x$.

So the statement is True.`,

    `**D.** → False

Cube both sides of the displayed equation; cubing is one-to-one on $\\mathbb{R}$, so no extraneous roots appear and the unique candidate is forced.

$$
\\sqrt[3]{x-1}=2\\Rightarrow x-1=2^{3}=8\\Rightarrow x=9
$$

The unique real solution is $x=9$, not $x=7$, so the claim fails.

So the statement is False.`,

    `**E.** → False

An absolute value is never negative, so $|u|\\le 0$ forces $u=0$. Apply that observation to $u=x^{2}-1$ and solve.

$$
|x^{2}-1|\\le 0\\Rightarrow x^{2}-1=0\\Rightarrow x=\\pm 1
$$

The solution set is $\\{\\pm 1\\}$, which is nonempty — the claim that there is no real solution therefore fails.

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

Tangency means the equation $f(x)=g(x)$ has a repeated root, i.e. the discriminant of $f-g$ vanishes.

$$
f(x)-g(x)=x^{2}-6x+k-(2x+m)=x^{2}-8x+(k-m)
$$

$$
\\Delta=64-4(k-m)
$$

$$
\\Delta=0\\Leftrightarrow 64=4(k-m)\\Leftrightarrow k-m=16\\Leftrightarrow m=k-16
$$

So tangency holds if and only if $m=k-16$.

So the statement is True.`,

    `**B.** → True

The vertex of the parabola $f(x)=x^{2}-6x+k$ occurs at the axis of symmetry $x=3$. Require that vertex point to lie on the line $g$.

$$
f(3)=9-18+k=k-9
$$

$$
g(3)=6+m
$$

$$
k-9=6+m\\Leftrightarrow m=k-15
$$

So the vertex of $f$ lies on $g$ if and only if $m=k-15$.

So the statement is True.`,

    `**C.** → False

Combine the two independent conditions from letters A and B; they force incompatible values of $m$ for the same parameter $k$.

$$
m=k-16\\quad\\text{and}\\quad m=k-15
$$

$$
k-16=k-15
$$

which is impossible. No real pair $(k,m)$ can satisfy both the tangency condition and the vertex-on-line condition at once.

So the statement is False.`,

    `**D.** → True

Plug the given parameters into the tangency criterion $m=k-16$ already derived in letter A and check for an exact numerical match.

$$
k=10\\Rightarrow k-16=-6
$$

The given value $m=-6$ matches exactly, so with $k=10$ and $m=-6$ the graphs are tangent.

So the statement is True.`,

    `**E.** → False

With $m=0$ and $k=20$, compute the discriminant of $f-g$ and read off the number of real intersections carefully.

$$
\\Delta=64-4(k-m)=64-4(20-0)=64-80=-16<0
$$

A negative discriminant means no real root of $f(x)=g(x)$, so the equation certainly does not have two distinct real roots.

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

Rewrite $g$ as a pure power of $2$, then compare exponents with $f$. The first half of the claim is correct; the “therefore identical” half is not.

$$
g(t)=\\dfrac{(2^{3})^{t+1}}{(2^{2})^{t-2}}=\\dfrac{2^{3t+3}}{2^{2t-4}}=2^{3t+3-(2t-4)}=2^{t+7}
$$

$$
f(t)=2^{3t-1}
$$

Equality of exponents $3t-1=t+7$ forces $t=4$ only, so $f\\equiv g$ fails.

So the statement is False.`,

    `**B.** → True

Substitute the rewritten forms of $f$ and $g$ into the definition of $h$, remembering to evaluate $g$ at $-t$ rather than at $t$.

$$
h(t)=\\bigl(2^{3t-1}\\bigr)^{2}\\cdot g(-t)=2^{6t-2}\\cdot 2^{-t+7}
$$

$$
h(t)=2^{6t-2-t+7}=2^{5t+5}
$$

The identity $h(t)=2^{5t+5}$ therefore holds for every real $t$.

So the statement is True.`,

    `**C.** → True

Set the two single-power forms equal and solve the resulting linear equation in the exponent; uniqueness follows from injectivity of the exponential.

$$
2^{3t-1}=2^{t+7}
$$

$$
3t-1=t+7\\Rightarrow 2t=8\\Rightarrow t=4
$$

The exponential base $2$ is one-to-one, so $t=4$ is the unique real solution of $f(t)=g(t)$.

So the statement is True.`,

    `**D.** → False

Evaluate both rewritten powers at $t=2$ and compare the resulting integers carefully; the claim asserts the wrong inequality direction.

$$
f(2)=2^{3\\cdot 2-1}=2^{5}=32
$$

$$
g(2)=2^{2+7}=2^{9}=512
$$

Since $32<512$, one has $f(2)<g(2)$, not the asserted inequality $f(2)>g(2)$.

So the statement is False.`,

    `**E.** → True

Use the closed form $h(t)=2^{5t+5}$ from letter B and equate exponents with the constant power $2^{10}$.

$$
2^{5t+5}=2^{10}
$$

$$
5t+5=10\\Rightarrow 5t=5\\Rightarrow t=1
$$

So $t=1$ is indeed a root of the equation $h(t)=2^{10}$, as claimed.

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

For a polynomial sampled on consecutive integers, the first non-vanishing constant difference row reveals the degree. Read the displayed third-difference row.

$$
\\Delta^{3}f:\\quad 6,\\ 6,\\ 6,\\ 6
$$

The third differences are constant and nonzero, which characterises $\\deg f=3$ (first and second differences are not constant).

So the statement is True.`,

    `**B.** → True

For unit step size, the constant third difference equals $3!$ times the leading coefficient $a_{3}$ of the cubic. Solve for $a_{3}$ directly.

$$
3!\\,a_{3}=\\Delta^{3}f=6
$$

$$
a_{3}=\\dfrac{6}{6}=1
$$

So the leading coefficient of $f$ equals $1$, matching the claim.

So the statement is True.`,

    `**C.** → True

Evaluate the proposed cubic at each tabulated integer and compare with the $f(x)$ row of the table.

$$
f(0)=3,\\quad f(1)=3,\\quad f(2)=5,\\quad f(3)=15
$$

$$
f(4)=39,\\quad f(5)=83,\\quad f(6)=153
$$

Every entry matches the table, so $x^{3}-2x^{2}+x+3$ reproduces every tabulated value of $f$.

So the statement is True.`,

    `**D.** → True

A genuine cubic keeps its third differences constant forever. The displayed third-difference entries are already all equal to $6$, so the next open slot must continue the same constant sequence.

$$
\\text{next }\\Delta^{3}=6
$$

If $f$ stays cubic, the missing rightmost third-difference entry must equal $6$.

So the statement is True.`,

    `**E.** → False

A single vanishing first difference only equates two neighbouring sample values; it does not force a constant polynomial on the whole real line.

$$
\\Delta f(0)=0\\Rightarrow f(1)=f(0)=3
$$

But already the next tabulated value shows

$$
f(2)=5\\neq 3
$$

so $f$ is not constant globally.

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

Introduce $L=\\log_{a}(x)$ and rewrite every logarithm through change of base, then solve the resulting linear equation in $L$.

$$
\\log_{a}(x^{2})=2L,\\qquad \\log_{a^{3}}(x)=\\dfrac{L}{3},\\qquad \\log_{\\sqrt{a}}(x)=2L
$$

$$
\\text{RHS}=\\log_{a}(a^{4}\\cdot x)-3=4+L-3=1+L
$$

$$
\\text{LHS}=2L+\\dfrac{L}{3}-2L=\\dfrac{L}{3}
$$

$$
\\dfrac{L}{3}=1+L\\Rightarrow -\\dfrac{2L}{3}=1\\Rightarrow L=-\\dfrac{3}{2}
$$

Since $x=a^{L}$ is one-to-one for $x>0$, there is exactly one positive root.

So the statement is True.`,

    `**B.** → False

From letter A one has $L=-3/2$. Exponentiating with base $a$ gives the opposite power of what the claim asserts.

$$
x=a^{L}=a^{-3/2}
$$

which is not equal to $a^{3/2}$. Those two letter forms would coincide only if $a^{3}=1$, which is impossible for the standing hypothesis $a>1$.

So the statement is False.`,

    `**C.** → True

This is precisely the letter form obtained by exponentiating $L=-3/2$ from letter A.

$$
x=a^{L}=a^{-3/2}
$$

and the uniqueness argument from letter A still applies (the map $L\\mapsto a^{L}$ is one-to-one for $x>0$), so $x=a^{-3/2}$ is the unique positive solution.

So the statement is True.`,

    `**D.** → False

Substitute $x=1$ into both sides of the original equation. All logarithms of $1$ vanish on the left-hand side.

$$
\\text{LHS}=\\log_{a}(1)+\\log_{a^{3}}(1)-\\log_{\\sqrt{a}}(1)=0
$$

$$
\\text{RHS}=\\log_{a}(a^{4})-3=4-3=1\\neq 0
$$

So $x=1$ does not solve the displayed equation when $a>1$.

So the statement is False.`,

    `**E.** → True

At the unique root one has $L=-3/2$. The mixed-base logarithm with base $a^{3}$ is just one-third of that common logarithm $L$.

$$
\\log_{a^{3}}(x)=\\dfrac{L}{3}=\\dfrac{-3/2}{3}=-\\dfrac{1}{2}
$$

So at the unique positive solution one has $\\log_{a^{3}}(x)=-1/2$, exactly as claimed.

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

Write revenue $R=pq=(60-q)q$, form taxed profit, differentiate, and set the derivative to zero.

$$
\\pi(q)=(60-q)q-\\bigl(\\tfrac12 q^{2}+4q+20\\bigr)-6q=60q-q^{2}-\\tfrac12 q^{2}-10q-20
$$

$$
\\pi(q)=-\\tfrac32 q^{2}+50q-20
$$

$$
\\pi'(q)=-3q+50=0\\Rightarrow q=\\dfrac{50}{3}\\approx 16.67\\in(16,17)
$$

So the taxed profit-maximising output lies strictly between $16$ and $17$.

So the statement is True.`,

    `**B.** → True

Repeat the first-order condition without the tax term $-6q$. The intercept of marginal profit rises by $6$, so the critical point moves to the right.

$$
\\text{no tax: }\\pi'(q)=-3q+56=0\\Rightarrow q=\\dfrac{56}{3}\\approx 18.67
$$

$$
\\dfrac{56}{3}>\\dfrac{50}{3}
$$

so the untaxed optimum is strictly larger than the taxed optimum.

So the statement is True.`,

    `**C.** → True

At an interior maximum, marginal revenue equals marginal cost including the specific tax. Check that the taxed FOC is exactly that equality.

$$
MR=60-2q,\\qquad MC_{\\mathrm{private}}=q+4,\\qquad MC_{\\mathrm{tax}}=q+4+6=q+10
$$

$$
60-2q=q+10\\Rightarrow 50=3q\\Rightarrow q=\\dfrac{50}{3}
$$

which matches the taxed optimum from letter A, so MR equals taxed MC there.

So the statement is True.`,

    `**D.** → False

Substitute the taxed optimum into inverse demand and compare the resulting market price with EUR $40$.

$$
p=60-q=60-\\dfrac{50}{3}=\\dfrac{180-50}{3}=\\dfrac{130}{3}\\approx 43.33
$$

Since $43.33>40$, the market price is strictly above EUR $40$, not below — the claim fails.

So the statement is False.`,

    `**E.** → True

Subtract the two closed-form optima already computed in letters A and B to read the exact output reduction caused by the tax.

$$
q_{\\mathrm{no\\ tax}}-q_{\\mathrm{tax}}=\\dfrac{56}{3}-\\dfrac{50}{3}=\\dfrac{6}{3}=2
$$

The tax reduces optimal output by exactly $2$ units relative to the no-tax optimum.

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

Under sampling without replacement, each draw has the same marginal success probability equal to the population share. Multiply by the sample size $5$.

$$
E[R]=5\\cdot\\dfrac{9}{20}=\\dfrac{45}{20}=2.25
$$

$$
E[G]=5\\cdot\\dfrac{5}{20}=\\dfrac{25}{20}=1.25
$$

Both claimed means hold under Regime H.

So the statement is True.`,

    `**B.** → True

Use the hypergeometric variance formula with population $N=20$, $K=9$ red successes, and sample size $n=5$.

$$
\\mathrm{Var}(R)=n\\cdot\\dfrac{K}{N}\\cdot\\dfrac{N-K}{N}\\cdot\\dfrac{N-n}{N-1}
$$

$$
=5\\cdot\\dfrac{9}{20}\\cdot\\dfrac{11}{20}\\cdot\\dfrac{15}{19}=\\dfrac{18.5625}{19}\\approx 0.977
$$

Since $0.977<1$, the variance of $R$ is strictly less than $1$.

So the statement is True.`,

    `**C.** → True

Drawing five reds means choosing all five draws from the nine red components in the crate of twenty.

$$
P(R=5)=\\dfrac{\\binom{9}{5}}{\\binom{20}{5}}=\\dfrac{126}{15504}
$$

$$
\\dfrac{126}{15504}\\approx 0.00813<0.01
$$

So the probability of five red components is strictly less than $0.01$.

So the statement is True.`,

    `**D.** → False

No green means all five draws come from the $15$ non-green components. Compare the resulting hypergeometric probability with the threshold $0.25$.

$$
P(G=0)=\\dfrac{\\binom{15}{5}}{\\binom{20}{5}}=\\dfrac{3003}{15504}\\approx 0.1937
$$

Since $0.1937<0.25$, the probability of drawing no green does not exceed $0.25$.

So the statement is False.`,

    `**E.** → False

Complement through the event of zero reds (all five draws from the $11$ non-red components) and compare carefully with $0.95$.

$$
P(R=0)=\\dfrac{\\binom{11}{5}}{\\binom{20}{5}}=\\dfrac{462}{15504}
$$

$$
P(R\\ge 1)=1-\\dfrac{462}{15504}\\approx 0.9702>0.95
$$

The probability of at least one red is larger than $0.95$, not strictly less.

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

$X\\sim\\mathrm{Bin}(n=5,p=0.45)$. Apply the standard binomial mean and variance formulas step by step.

$$
E[X]=np=5\\cdot 0.45=2.25
$$

$$
\\mathrm{Var}(X)=np(1-p)=5\\cdot 0.45\\cdot 0.55=1.2375
$$

Both claimed moments of $X$ hold under Regime B.

So the statement is True.`,

    `**B.** → True

$Y=4X-3$ is an affine transform of $X$. Push the mean through the linear map and scale the variance by the square of the slope $4$.

$$
E[Y]=4E[X]-3=4\\cdot 2.25-3=9-3=6
$$

$$
\\mathrm{Var}(Y)=4^{2}\\cdot\\mathrm{Var}(X)=16\\cdot 1.2375=19.8
$$

So both claimed moments of $Y$ hold.

So the statement is True.`,

    `**C.** → False

Zero red hits means five consecutive non-red draws, each with probability $0.55$. Compare the exact fifth power carefully with the threshold $0.05$ — this is a close numerical trap.

$$
P(X=0)=(1-p)^{5}=0.55^{5}
$$

$$
0.55^{5}=0.0503284375>0.05
$$

The probability is slightly larger than $0.05$, so the strict inequality $P(X=0)<0.05$ fails.

So the statement is False.`,

    `**D.** → True

Five red hits means five consecutive successes, each with probability $p=0.45$. Raise $0.45$ to the fifth power and compare with $0.02$.

$$
P(X=5)=p^{5}=0.45^{5}
$$

$$
0.45^{5}=0.0184528125<0.02
$$

So $P(X=5)$ is strictly less than $0.02$.

So the statement is True.`,

    `**E.** → False

Equal means do not force equal laws. Regime H is hypergeometric (dependent draws without replacement) while Regime B is binomial (independent draws). Compare variances as a concrete witness that the distributions differ.

$$
\\mathrm{Var}(X)=1.2375,\\qquad \\mathrm{Var}(R)\\approx 0.977
$$

Already $\\mathrm{Var}(X)\\neq\\mathrm{Var}(R)$, so $X$ and $R$ cannot share the same probability distribution.

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
