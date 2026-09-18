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

Write down the two sets explicitly before counting. The even members of $U=\{1,\ldots,12\}$ are

$$
A=\{2,4,6,8,10,12\},
$$

so $|A|=6$. The multiples of $3$ in the same universe are

$$
B=\{3,6,9,12\},
$$

so $|B|=4$. Their overlap is only the multiples of $6$ inside $U$:

$$
A\cap B=\{6,12\},\qquad |A\cap B|=2.
$$

Inclusion–exclusion then removes the double-count:

$$
|A\cup B|=|A|+|B|-|A\cap B|=6+4-2=8.
$$

You can also list the union by hand — $\{2,3,4,6,8,9,10,12\}$ — and count eight elements the slow way; both routes agree. The claim that $A\cup B$ contains exactly eight elements of $U$ is therefore correct.

So the statement is True.`,

    `**B.** → True

Every multiple of $4$ is even, so $C\subseteq A$. The even number $2$ lies in $A$ but not in $C$, so the converse fails exactly as the claim says.

$$
C=\{4,8,12\}\subseteq A,\qquad 2\in A\setminus C
$$

So the statement is True.`,

    `**C.** → False

Common elements of $A$ and $B$ are the multiples of $6$ in $U$:

$$
A\cap B=\{6,12\}.
$$

Ask whether each of them also sits in $C=\{4,8,12\}$. The element $12$ does, but $6$ does not:

$$
6\in A\cap B\quad\text{and}\quad 6\notin C.
$$

One counterexample is enough to kill the inclusion $A\cap B\subseteq C$, so the claim is false.

So the statement is False.`,

    `**D.** → True

An existential claim needs one witness. Take $n=4$: even (in $A$), a multiple of $4$ (in $C$), and not a multiple of $3$ (outside $B$).

$$
4\in A\cap C,\qquad 4\notin B
$$

That single example proves existence ($n=8$ works the same way).

So the statement is True.`,

    `**E.** → False

Translate the predicates carefully. $P(n)$ means $n\in A$ and $Q(n)$ means $n\in B$, so the hypothesis $P(n)\wedge Q(n)$ is exactly membership in the intersection $A\cap B$. The claim asserts the universal implication

$$
\forall n\in U:\quad \bigl(P(n)\wedge Q(n)\bigr)\Rightarrow n\in C,
$$

which is the same as $A\cap B\subseteq C$. We already know that inclusion fails: the intersection is $\{6,12\}$, and $6$ is not a multiple of $4$. Explicitly,

$$
P(6)\text{ holds},\quad Q(6)\text{ holds},\quad\text{yet}\quad 6\notin C=\{4,8,12\}.
$$

A single witness where the hypothesis is true and the conclusion is false falsifies a universal implication, so the statement does not hold.

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

Factor $x^{3}-8=(x-2)(x^{2}+2x+4)$. After cancelling, $E$ matches $F$ only for $x\neq 2$. At $x=2$, $E$ is undefined while $F(2)=12$ is fine, so they are not identical on all of $\mathbb{R}$.

$$
E(x)=F(x)\quad\text{only when }x\neq 2
$$

So the statement is False.`,

    `**B.** → True

Start from the difference of cubes in the numerator of $E$:

$$
x^{3}-8=(x-2)(x^{2}+2x+4).
$$

For every $x\neq 2$ the factor $x-2$ cancels against the denominator, and what remains is exactly the quadratic $F$:

$$
E(x)=\dfrac{(x-2)(x^{2}+2x+4)}{x-2}=x^{2}+2x+4=F(x)\qquad(x\neq 2).
$$

That settles the first half of the claim. For the limit, the same cancellation shows that $E$ has a removable hole at $x=2$, and the continuous extension is the polynomial $F$ itself:

$$
\lim_{x\to 2}E(x)=F(2)=2^{2}+2\cdot 2+4=4+4+4=12.
$$

Both pieces — equality off $x=2$, and matching limit equal to $F(2)$ — hold, so the full statement is true.

So the statement is True.`,

    `**C.** → True

Wherever $x\neq 2$, letter B already gives $E(x)=F(x)=x^{2}+2x+4$. Subtract $12$ from that polynomial:

$$
E(x)-12=x^{2}+2x+4-12=x^{2}+2x-8.
$$

Factor the quadratic as $(x-2)(x+4)$, then cancel the remaining $x-2$ in the definition of $H$:

$$
H(x)=\dfrac{(x-2)(x+4)}{x-2}=x+4\qquad(x\neq 2).
$$

Thus $H(x)=x+4$ for every $x$ at which the original formula for $H$ is defined.

So the statement is True.`,

    `**D.** → False

The written formula still divides by $x-2$ (and refers to $E$, which is itself undefined at $2$). Algebraic cancellation is not the same as the original expression being defined there, so it does not equal $6$.

$$
H(x)=\dfrac{E(x)-12}{x-2}\quad\text{undefined at }x=2
$$

So the statement is False.`,

    `**E.** → True

Neither formula has a domain problem at $x=3$, so evaluate them separately and compare.

For $E$, plug into the original rational expression:

$$
E(3)=\dfrac{3^{3}-8}{3-2}=\dfrac{27-8}{1}=\dfrac{19}{1}=19.
$$

For $F$, expand the quadratic at the same point:

$$
F(3)=3^{2}+2\cdot 3+4=9+6+4=19.
$$

The two values match, and both equal $19$, which is exactly what the claim asserts. (You could also invoke letter B and note that $3\neq 2$ forces $E(3)=F(3)$ automatically, then only compute one of the two numbers — but a direct check of both sides is enough on its own.)

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

A six-payment level annuity that amortises principal $87500$ at effective annual rate $7.5\%$ has payment

$$
A=87500\cdot\dfrac{0.075}{1-1.075^{-6}}.
$$

Compute the discount factor carefully. First raise $1.075$ to the sixth power:

$$
1.075^{2}=1.155625,\qquad 1.075^{4}=(1.155625)^{2}\approx 1.3355,
$$

$$
1.075^{6}=1.075^{4}\cdot 1.075^{2}\approx 1.3355\cdot 1.155625\approx 1.5433,
$$

so $1.075^{-6}\approx 1/1.5433\approx 0.6480$. The annuity denominator is then

$$
1-1.075^{-6}\approx 1-0.6480=0.3520,
$$

and

$$
A\approx 87500\cdot\dfrac{0.075}{0.3520}\approx 87500\cdot 0.21307\approx 18641.
$$

The payment $18641$ lies strictly between $18500$ and $18800$, so the claim holds.

So the statement is True.`,

    `**B.** → True

Year-$1$ interest is $0.075\cdot 87500=6562.5$. After the first payment the balance is about $75421$, so year-$2$ interest is about $5657$. The gap is about $906>900$.

$$
I_{1}-I_{2}\approx 905.9>900
$$

So the statement is True.`,

    `**C.** → True

Roll the outstanding principal forward payment by payment, starting from $B_{0}=87500$ and using the level payment $A\approx 18641$ from letter A.

After year $1$:

$$
B_{1}=87500\cdot 1.075-A\approx 94062.5-18641\approx 75421.
$$

After year $2$:

$$
B_{2}=B_{1}\cdot 1.075-A\approx 81078-18641\approx 62436.
$$

After year $3$:

$$
B_{3}=B_{2}\cdot 1.075-A\approx 67119-18641\approx 48478.
$$

Half of the original principal is

$$
\tfrac12\cdot 87500=43750.
$$

Since $48478>43750$, more than half of the original principal is still outstanding immediately after the third payment. The claim is therefore true.

So the statement is True.`,

    `**D.** → True

Interest in year $5$ is charged on the balance just after the fourth payment. Continuing the amortization from letter C,

$$
B_{4}=B_{3}\cdot 1.075-A\approx 52114-18641\approx 33472,
$$

and therefore

$$
I_{5}=0.075\cdot B_{4}\approx 0.075\cdot 33472\approx 2510.
$$

The threshold in the claim is $2600$, and $2510<2600$, so year-$5$ interest is strictly less than EUR $2600$.

So the statement is True.`,

    `**E.** → False

Total interest is six payments minus principal: $6A-87500\approx 111846-87500=24346>24000$.

$$
6A-87500\approx 24349>24000
$$

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

Plug $(4,3)$ into each equation separately. The first line gives $4+3=7$, and the second gives $2\cdot 4-3=8-3=5$:

$$
4+3=7,\qquad 8-3=5
$$

Both hold at once, so the pair really is a joint solution.

So the statement is True.`,

    `**B.** → True

Treat the pair as a genuine $2\times 2$ linear system and solve it from scratch, without assuming the candidate from letter A.

Add the two equations so the $y$-terms cancel:

$$
(x+y)+(2x-y)=7+5,
$$

which simplifies at once to

$$
3x=12\Rightarrow x=4.
$$

Substitute $x=4$ back into the first equation:

$$
4+y=7\Rightarrow y=3.
$$

(As a check, the second equation gives $2\cdot 4-y=5$, so $8-y=5$ and again $y=3$.) The coefficient matrix has rows $(1,1)$ and $(2,-1)$; their determinant is

$$
1\cdot(-1)-1\cdot 2=-3\neq 0,
$$

so the system is non-degenerate and this pair is the unique real solution. In particular there cannot be a continuum of solutions or a second distinct intersection point.

So the statement is True.`,

    `**C.** → True

Letter B already forces the unique solution $(x,y)=(4,3)$. Comparing coordinates is then immediate:

$$
x=4>3=y
$$

Uniqueness means no other candidate could reverse the inequality, so $x>y$ holds.

So the statement is True.`,

    `**D.** → True

From the solution $(4,3)$ already forced in letter B, form the product of the two coordinates. No further equation-solving is needed — just multiply:

$$
x\cdot y=4\cdot 3=12.
$$

The product equals $12$ on the nose, which is exactly the claim. (If you prefer a symmetric route: from $x+y=7$ and $xy=?$, the second equation $2x-y=5$ together with $x+y=7$ again yields $x=4$, $y=3$, and the same product.)

So the statement is True.`,

    `**E.** → False

Two distinct lines intersect in at most one point. These lines have slopes $-1$ and $2$, so they are not parallel, and their unique intersection is already $(4,3)$. There is no second distinct real solution.

$$
\text{unique solution}=(4,3)
$$

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

Turn the two verbal requirements into equations first:

$$
2x+y=t,\qquad y=x+2.
$$

Eliminate $y$ by substituting the second into the first:

$$
2x+(x+2)=t\qquad\Rightarrow\qquad 3x+2=t\qquad\Rightarrow\qquad x=\dfrac{t-2}{3}.
$$

Then

$$
y=x+2=\dfrac{t-2}{3}+2=\dfrac{t+4}{3}.
$$

Non-negativity $x\ge 0$ forces $t\ge 2$ (and then $y$ is automatically positive). The claim says every $t>0$ works. That is too wide: at $t=1$ one gets $x=-1/3<0$, so the schedule is not feasible. One counterexample is enough to kill a universal claim.

So the statement is False.`,

    `**B.** → True

The brief itself already requires $y=x+2$. Adding $2$ to $x$ always produces a strictly larger B-total, so every feasible pair (in fact every algebraic pair) satisfies $y>x$.

So the statement is True.`,

    `**C.** → True

For a fixed target $t$, the two equalities are a $2\times 2$ linear system with a unique algebraic solution $(x,y)$. The constraints $x\ge 0$ and $y\ge 0$ can only accept or reject that single pair — they never manufacture a second distinct solution. Hence at most one feasible schedule exists for each $t$.

So the statement is True.`,

    `**D.** → True

Feed $t=2$ into the closed forms from letter A:

$$
x=\dfrac{2-2}{3}=0,\qquad y=\dfrac{2+4}{3}=2.
$$

Both hours are non-negative, and the A-line is idle ($x=0$). That is exactly a feasible zero-A schedule at $t=2$.

So the statement is True.`,

    `**E.** → True

From

$$
x=\dfrac{t-2}{3},\qquad y=\dfrac{t+4}{3},
$$

replacing $t$ by $t+3$ adds $3$ to each numerator. Dividing by $3$ therefore adds exactly $1$ to both $x$ and $y$ on the unique algebraic solution of the two equalities.

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

Write $|2x-1|=|x+3|$ as the pair of linear cases $2x-1=x+3$ and $2x-1=-(x+3)$.

First case: $x=4$. Second case: $2x-1=-x-3$, so $3x=-2$ and $x=-2/3$. Two distinct real roots — exactly as claimed.

So the statement is True.`,

    `**B.** → False

Before squaring, lock the domain. The square root needs $x+3\ge 0$, and a principal square root is nonnegative, so the right-hand side must satisfy $x-1\ge 0$. Altogether $x\ge 1$.

On that half-line squaring is legitimate:

$$
x+3=(x-1)^{2}=x^{2}-2x+1\qquad\Rightarrow\qquad x^{2}-3x-2=0.
$$

The quadratic formula gives

$$
x=\dfrac{3\pm\sqrt{17}}{2}.
$$

Only the plus branch sits above $1$ (roughly $3.56$). The minus branch is negative, so it is outside the domain. Exactly one real solution survives — not two.

So the statement is False.`,

    `**C.** → True

Interpret $|x-2|+|x+1|$ as the sum of distances from $x$ to the fixed points $2$ and $-1$. That sum is minimised on the closed segment joining those points, and on $[-1,2]$ it collapses to the constant

$$
(2-x)+(x+1)=3.
$$

Outside the segment the path is longer, so the sum exceeds $3$. Hence the inequality $\ge 3$ holds for every real $x$.

So the statement is True.`,

    `**D.** → False

Cube both sides: $x-1=8$, so $x=9$. Cubing is bijective on $\mathbb{R}$, so $x=9$ is the unique real root. The number $7$ is simply wrong.

So the statement is False.`,

    `**E.** → False

Absolute values are never negative, so $|u|\le 0$ forces $u=0$. Here $u=x^{2}-1$, and $x^{2}-1=0$ yields $x=\pm 1$. The solution set is nonempty, so the “no real solution” claim fails.

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

Tangency of the parabola and the line means $f(x)=g(x)$ has a double root, so the discriminant of the difference must vanish. Form

$$
f(x)-g(x)=x^{2}-6x+k-(2x+m)=x^{2}-8x+(k-m).
$$

Its discriminant is

$$
\Delta=64-4(k-m).
$$

Setting $\Delta=0$ gives $k-m=16$, i.e. $m=k-16$. That is precisely the tangency criterion, both directions.

So the statement is True.`,

    `**B.** → True

The axis of $f(x)=x^{2}-6x+k$ is $x=3$, so the vertex is the point $\bigl(3,f(3)\bigr)$ with $f(3)=k-9$. Asking that point to lie on $g$ means $g(3)=6+m$ equals $k-9$:

$$
k-9=6+m\qquad\Rightarrow\qquad m=k-15.
$$

So the vertex lies on the line if and only if $m=k-15$.

So the statement is True.`,

    `**C.** → False

Letters A and B ask for $m=k-16$ and $m=k-15$ at once. Those two expressions for $m$ cannot agree for any real $k$. No such pair $(k,m)$ exists.

So the statement is False.`,

    `**D.** → True

Letter A says tangency holds exactly when $m=k-16$. With $k=10$ that forces

$$
m=10-16=-6.
$$

The given $m=-6$ matches, so the discriminant of $f-g$ vanishes and the graphs touch.

So the statement is True.`,

    `**E.** → False

Plug $k=20$ and $m=0$ into the discriminant from letter A:

$$
\Delta=64-4(20-0)=64-80=-16<0.
$$

No real intersection at all, let alone two distinct roots of $f(x)=g(x)$.

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

Rewrite $g$ with base $2$:

$$
g(t)=\dfrac{8^{t+1}}{4^{t-2}}=\dfrac{(2^{3})^{t+1}}{(2^{2})^{t-2}}=\dfrac{2^{3t+3}}{2^{2t-4}}=2^{3t+3-(2t-4)}=2^{t+7}.
$$

That confirms the first half of the claim. But $f(t)=2^{3t-1}$, and the exponents $3t-1$ and $t+7$ agree only when $2t=8$, i.e. only at $t=4$. The functions are not identical for every real $t$, so the “therefore $f\equiv g$” leap is false.

So the statement is False.`,

    `**B.** → True

Use $f(t)=2^{3t-1}$ and the rewrite $g(t)=2^{t+7}$ from A, but evaluate $g$ at $-t$:

$$
h(t)=\bigl(2^{3t-1}\bigr)^{2}\cdot g(-t)=2^{6t-2}\cdot 2^{-t+7}=2^{5t+5}.
$$

The identity holds for every real $t$.

So the statement is True.`,

    `**C.** → True

Equate the single-power forms: $2^{3t-1}=2^{t+7}$. Injectivity of the exponential forces $3t-1=t+7$, hence $t=4$. One real root only.

So the statement is True.`,

    `**D.** → False

At $t=2$, the single-power forms give $f(2)=2^{5}=32$ and $g(2)=2^{9}=512$:

$$
32<512\qquad\Rightarrow\qquad f(2)<g(2).
$$

The claim asserts $f(2)>g(2)$, which points the wrong way.

So the statement is False.`,

    `**E.** → True

From letter B, $h(t)=2^{5t+5}$. Set that equal to $2^{10}$:

$$
5t+5=10\qquad\Rightarrow\qquad t=1.
$$

So $t=1$ really is a root of $h(t)=2^{10}$.

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

Look at the difference table the way an analyst would: start at the bottom and ask which row first settles into a nonzero constant. The first-difference row wanders ($0,2,10,24,44,70$), and the second-difference row still climbs ($2,8,14,20,26$). Only the third-difference row locks:

$$
\\Delta^{3}f:\\quad 6,\\ 6,\\ 6,\\ 6.
$$

For samples on consecutive integers, a constant nonzero $k$-th difference row means the underlying polynomial has degree exactly $k$. Here $k=3$, so $\\deg f=3$. If the degree were smaller, the third differences would already be zero; if it were larger, they would keep changing. Neither happens, so the degree claim is right.

So the statement is True.`,

    `**B.** → True

On unit steps, a constant third difference equals $3!$ times the leading coefficient. Letter A fixed that constant at $6$, so

$$
3!\,a_{3}=6\qquad\Rightarrow\qquad a_{3}=1.
$$

No other leading coefficient would produce a row of sixes.

So the statement is True.`,

    `**C.** → True

The proposed cubic is $f(x)=x^{3}-2x^{2}+x+3$. Check it against every tabulated abscissa rather than trusting the leading-term guess alone. At the left end,

$$
f(0)=3,\\qquad f(1)=1-2+1+3=3,\\qquad f(2)=8-8+2+3=5,
$$

and at $x=3$ one gets $27-18+3+3=15$. Continuing,

$$
f(4)=64-32+4+3=39,\\qquad f(5)=125-50+5+3=83,\\qquad f(6)=216-72+6+3=153.
$$

Each value matches the $f(x)$ row of the table exactly, so the identity claim holds for the whole sample.

So the statement is True.`,

    `**D.** → True

A cubic’s third differences never drift: once they equal $6$, every later third difference equals $6$ as well. The blank rightmost slot is just the next term of that constant sequence, so it must be $6$ if $f$ remains cubic.

So the statement is True.`,

    `**E.** → False

The first tabulated first-difference being $0$ only says the two neighbouring samples agree:

$$
f(1)=f(0)=3.
$$

That is a local coincidence, not a global constancy theorem. The very next tabulated value already breaks constancy:

$$
f(2)=5\\neq 3,
$$

and later values keep climbing ($15,39,83,153$). A polynomial that is constant on the whole real line would have every first difference zero, not merely one of them. The leap from “one vanishing first difference” to “$f$ is constant everywhere” is therefore false.

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

The cleanest attack is to introduce a single unknown $L=\\log_{a}(x)$ and rewrite every logarithm through that letter. Change of base (or the power rule for logarithms) gives three left-hand pieces:

$$
\\log_{a}(x^{2})=2L,\\qquad \\log_{a^{3}}(x)=\\dfrac{L}{3},\\qquad \\log_{\\sqrt{a}}(x)=\\dfrac{L}{1/2}=2L.
$$

The right-hand side expands just as easily:

$$
\\log_{a}(a^{4}\\cdot x)-3=\\log_{a}(a^{4})+\\log_{a}(x)-3=4+L-3=1+L.
$$

Putting the left-hand side together,

$$
2L+\\dfrac{L}{3}-2L=\\dfrac{L}{3},
$$

so the original equation collapses to the ordinary linear relation

$$
\\dfrac{L}{3}=1+L.
$$

Clear the fraction: $L=3+3L$, hence $-2L=3$, and finally $L=-3/2$. Because the map $x\\mapsto\\log_{a}(x)$ is one-to-one on $(0,\\infty)$, this unique $L$ produces exactly one positive $x$, and that solution satisfies $\\log_{a}(x)=-3/2$ by definition. Domain checks are automatic under $a>1$ and $x>0$: every base is larger than $1$, and every argument stays positive.

So the statement is True.`,

    `**B.** → False

Letter A already fixed $L=-3/2$. Exponentiating with base $a$ therefore yields

$$
x=a^{L}=a^{-3/2},
$$

which is the reciprocal power of the claimed form $a^{3/2}$. Those two letter expressions agree only if $a^{3}=1$, impossible under $a>1$.

So the statement is False.`,

    `**C.** → True

Exponentiate $L=-3/2$:

$$
x=a^{L}=a^{-3/2}.
$$

Uniqueness follows because $L\\mapsto a^{L}$ is one-to-one for positive $x$, so this is the unique positive solution.

So the statement is True.`,

    `**D.** → False

Plug in $x=1$. The left-hand side is a sum of logarithms of $1$, hence $0$. The right-hand side is $\\log_{a}(a^{4})-3=1$. Since $0\\neq 1$, the candidate fails.

So the statement is False.`,

    `**E.** → True

At the unique positive root one already knows $L=\\log_{a}(x)=-3/2$ from letter A. The logarithm with the larger base $a^{3}$ is linked to $L$ by the change-of-base identity

$$
\\log_{a^{3}}(x)=\\dfrac{\\log_{a}(x)}{\\log_{a}(a^{3})}=\\dfrac{L}{3}.
$$

Substitute the known value:

$$
\\dfrac{L}{3}=\\dfrac{-3/2}{3}=-\\dfrac{1}{2}.
$$

As a quick consistency check, the defining relation $(a^{3})^{v}=x$ with $v=-1/2$ becomes $a^{-3/2}=x$, which is exactly the root from letter C. So the evaluation $\\log_{a^{3}}(x)=-1/2$ is confirmed two ways.

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

Write revenue from inverse demand as $R(q)=(60-q)q=60q-q^{2}$. Taxed profit subtracts both private cost and the specific tax $6q$:

$$
\\pi(q)=60q-q^{2}-\\bigl(\\tfrac12 q^{2}+4q+20\\bigr)-6q.
$$

Combine like terms:

$$
\\pi(q)=-\\tfrac32 q^{2}+(60-4-6)q-20=-\\tfrac32 q^{2}+50q-20.
$$

Differentiate and set the derivative to zero:

$$
\\pi'(q)=-3q+50=0\\Rightarrow q=\\dfrac{50}{3}.
$$

Numerically $50/3\\approx 16.667$, which sits strictly between $16$ and $17$. The second derivative $\\pi''(q)=-3<0$ confirms a maximum, so the taxed profit-maximising output really does lie in that open interval.

So the statement is True.`,

    `**B.** → True

Drop the tax term $-6q$ and repeat the first-order condition. Without the tax, marginal profit’s intercept rises by $6$:

$$
\\pi'_{\\mathrm{no\\ tax}}(q)=-3q+56=0\\Rightarrow q=\\dfrac{56}{3}\\approx 18.67.
$$

Compare with the taxed optimum $50/3\\approx 16.67$ from letter A: the untaxed critical point is strictly larger, as a per-unit tax always shifts a linear FOC leftward when marginal profit slopes downward.

So the statement is True.`,

    `**C.** → True

At an interior maximum, MR equals MC including the tax. With $MR=60-2q$ and taxed $MC=q+4+6=q+10$,

$$
60-2q=q+10\\Rightarrow q=\\dfrac{50}{3},
$$

matching letter A.

So the statement is True.`,

    `**D.** → False

Feed the taxed optimum into inverse demand:

$$
p=60-\\dfrac{50}{3}=\\dfrac{130}{3}\\approx 43.33.
$$

That market price is strictly above EUR $40$, not below. The inequality in the claim points the wrong way.

So the statement is False.`,

    `**E.** → True

Subtract the two closed-form optima from letters A and B:

$$
q_{\\mathrm{no\\ tax}}-q_{\\mathrm{tax}}=\\dfrac{56}{3}-\\dfrac{50}{3}=\\dfrac{6}{3}=2.
$$

The tax therefore cuts optimal output by exactly two units. The same gap can be read off the FOCs: the tax shifts the linear marginal-profit line parallel by $6$, and with slope $-3$ the horizontal displacement is $6/3=2$. Either route confirms the exact reduction of $2$.

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

Under sampling without replacement each draw has the same marginal success probability equal to the population share. Multiply by the sample size:

$$
E[R]=5\\cdot\\dfrac{9}{20}=2.25,\\qquad E[G]=5\\cdot\\dfrac{5}{20}=1.25.
$$

So the statement is True.`,

    `**B.** → True

Use the hypergeometric variance formula with population $N=20$, $K=9$ red successes, and sample size $n=5$:

$$
\\mathrm{Var}(R)=n\\cdot\\dfrac{K}{N}\\cdot\\dfrac{N-K}{N}\\cdot\\dfrac{N-n}{N-1}.
$$

Substitute the crate numbers:

$$
\\mathrm{Var}(R)=5\\cdot\\dfrac{9}{20}\\cdot\\dfrac{11}{20}\\cdot\\dfrac{15}{19}.
$$

First $9/20\\cdot 11/20=99/400=0.2475$, then $5\\cdot 0.2475=1.2375$, and finally

$$
1.2375\\cdot\\dfrac{15}{19}=\\dfrac{18.5625}{19}\\approx 0.977.
$$

Because $0.977<1$, the variance of $R$ is strictly less than $1$. The finite-population correction factor $15/19<1$ is what pulls the variance below the corresponding binomial figure $1.2375$.

So the statement is True.`,

    `**C.** → True

Drawing five reds means choosing all five sample slots from the nine red components inside the crate of twenty:

$$
P(R=5)=\\dfrac{\\binom{9}{5}}{\\binom{20}{5}}=\\dfrac{126}{15504}\\approx 0.00813<0.01.
$$

So the statement is True.`,

    `**D.** → False

No green means all five draws come from the $15$ non-green components:

$$
P(G=0)=\\dfrac{\\binom{15}{5}}{\\binom{20}{5}}=\\dfrac{3003}{15504}\\approx 0.1937.
$$

That probability is below $0.25$, so it does not exceed the claimed threshold.

So the statement is False.`,

    `**E.** → False

Work through the complement: zero reds means all five draws come from the $11$ non-red components in the crate.

$$
P(R=0)=\\dfrac{\\binom{11}{5}}{\\binom{20}{5}}=\\dfrac{462}{15504}.
$$

Therefore

$$
P(R\\ge 1)=1-\\dfrac{462}{15504}=\\dfrac{15042}{15504}\\approx 0.9702.
$$

The probability of at least one red is about $0.97$, which is larger than $0.95$, not strictly less. The claim reverses the inequality: with nine reds out of twenty and five draws, missing red entirely is rare, so the “at least one red” event is overwhelmingly likely.

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

$X\\sim\\mathrm{Bin}(5,0.45)$, so the ordinary binomial moments are

$$
E[X]=5\\cdot 0.45=2.25,\\qquad \\mathrm{Var}(X)=5\\cdot 0.45\\cdot 0.55=1.2375.
$$

So the statement is True.`,

    `**B.** → True

Push the affine map $Y=4X-3$ through the moments from letter A:

$$
E[Y]=4\\cdot 2.25-3=6,\\qquad \\mathrm{Var}(Y)=16\\cdot 1.2375=19.8.
$$

So the statement is True.`,

    `**C.** → False

Zero red hits means five consecutive non-red draws, each with probability $0.55$:

$$
P(X=0)=0.55^{5}.
$$

Compute the fifth power carefully — this is a close numerical trap designed to catch anyone who rounds too early:

$$
0.55^{2}=0.3025,\\qquad 0.55^{3}=0.166375,\\qquad 0.55^{4}=0.09150625,
$$

$$
0.55^{5}=0.0503284375.
$$

The exact value sits slightly above $0.05$, so the strict inequality $P(X=0)<0.05$ fails. Rounding $0.55^{5}$ down to $0.05$ would hide the failure; keeping one extra digit exposes it.

So the statement is False.`,

    `**D.** → True

Five red hits means five consecutive successes, each with probability $0.45$:

$$
P(X=5)=0.45^{5}=0.0184528125.
$$

That fifth power sits comfortably below $0.02$, so the strict inequality holds.

So the statement is True.`,

    `**E.** → False

Equal means do not force equal laws. Regime H draws without replacement (hypergeometric counts), while Regime B draws independently with replacement (binomial counts). The two sampling schemes share the same marginal success probability $9/20$, so their means for the red count agree:

$$
E[X]=E[R]=2.25.
$$

But the dependence structure differs, and the variances already disagree:

$$
\\mathrm{Var}(X)=1.2375,\\qquad \\mathrm{Var}(R)=5\\cdot\\dfrac{9}{20}\\cdot\\dfrac{11}{20}\\cdot\\dfrac{15}{19}\\approx 0.977.
$$

If two random variables shared the same probability distribution, every moment would match. Already $\\mathrm{Var}(X)\\neq\\mathrm{Var}(R)$, so $X$ and $R$ cannot be equal in law. Matching first moments is necessary but nowhere near sufficient.

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
