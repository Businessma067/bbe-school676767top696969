/**
 * Mock Exam 5 — deep custom math (fully different themes from Mocks 1–4).
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

/** Q22 — three inscribed chests (NOT knights/knaves). */
export function buildMathQ22Chests() {
  const context = `Three sealed chests sit in a vault. Exactly one chest contains the prize; the other two are empty. Each chest carries one inscription, and **exactly one** of the three inscriptions is true.

Chest A: “The prize is in this chest.”

Chest B: “The prize is in this chest.”

Chest C: “The prize is in chest A.”

Decide whether each statement is true or false.`;

  const statements = [
    "The prize is in chest B.",
    "Chest A’s inscription is false.",
    "The unique true inscription is on chest B.",
    "The prize is in chest C.",
    "If the prize were in chest A, then at least two inscriptions would be true.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Exactly one inscription is true.

If the prize were in A, then A’s claim would be true and C’s claim (“prize in A”) would also be true — two truths, which is forbidden.

If the prize were in C, then A and B are both false (each claims the prize is in itself) and C is also false (it claims A). That is zero truths — forbidden.

Therefore the prize is in B.

So the statement is True.`,

    `**B.** → True

With the prize in B, A’s claim “the prize is in this chest” is false.

So the statement is True.`,

    `**C.** → True

Prize in B makes B’s inscription true, while A and C are false. Exactly one truth, and it sits on B. No other location works (letter A).

So the statement is True.`,

    `**D.** → False

The prize is in B, not C.

So the statement is False.`,

    `**E.** → True

If the prize were in A, then A would be true and C (“prize in A”) would also be true — at least two truths.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.CHESTS",
    id: "MATH 1.MOCK.CHESTS",
    title: "Three inscribed chests — exactly one true label",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Setup.** Exactly one chest has the prize; exactly one inscription is true.

**Case A.** Prize in A ⇒ A and C both true → forbidden.

**Case C.** Prize in C ⇒ A, B, C all false → forbidden.

**Case B.** Prize in B ⇒ only B true → unique solution.`,
  };
}

/** Q23 — algebraic structure / discriminants (not mock4 threshold algebra). */
export function buildMathQ23Radical() {
  const context = `Consider the real equation

$$
\\sqrt{2x+3}=x-1
$$

and the quadratic identity claims below. Decide whether each statement is true or false.`;

  const statements = [
    "Every real solution of the equation must satisfy $x\\ge 1$.",
    "Squaring both sides (on the admissible region) produces the quadratic $x^{2}-4x-2=0$.",
    "The equation has exactly one real solution.",
    "That real solution is strictly larger than $3$.",
    "The product of the two roots of the squared quadratic $x^{2}-4x-2=0$ equals $-2$.",
  ];

  // Domain: 2x+3≥0 ⇒ x≥-3/2; RHS≥0 ⇒ x≥1. So x≥1.
  // Square: 2x+3=(x-1)^2=x^2-2x+1 ⇒ 0=x^2-4x-2. Yes.
  // Roots: 2±√6. Only 2+√6 ≥1 works (2-√6≈-0.45 <1). One real solution.
  // 2+√6 ≈ 4.449 > 3. True.
  // Product of quadratic roots = -2 / 1 = -2. True (c/a).

  const answer_key = [true, true, true, true, true];

  const tactical_explanations = [
    `**A.** → True

The square root is defined for $2x+3\\ge 0$, i.e. $x\\ge -\\tfrac{3}{2}$. Because a principal square root is nonnegative, the right-hand side must satisfy $x-1\\ge 0$, hence $x\\ge 1$. Intersecting the two conditions leaves $x\\ge 1$.

So the statement is True.`,

    `**B.** → True

On $x\\ge 1$ square both sides:

$$
2x+3=(x-1)^{2}=x^{2}-2x+1
$$

$$
0=x^{2}-4x-2
$$

So the statement is True.`,

    `**C.** → True

The quadratic $x^{2}-4x-2=0$ has roots $2\\pm\\sqrt{6}$. Only $2+\\sqrt{6}$ lies in $x\\ge 1$ (since $2-\\sqrt{6}<1$). Checking it in the original equation confirms it works. Exactly one real solution.

So the statement is True.`,

    `**D.** → True

$$
2+\\sqrt{6}>2+\\sqrt{4}=2+2=4>3
$$

So the statement is True.`,

    `**E.** → True

For $x^{2}-4x-2=0$ the product of roots is $c/a=-2$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.RAD",
    id: "MATH 2.MOCK.RAD",
    title: "Radical equation — domain, squaring, and root selection",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Domain forces $x\\ge 1$. Squaring yields $x^{2}-4x-2=0$ with roots $2\\pm\\sqrt{6}$; only $2+\\sqrt{6}$ survives. Product of quadratic roots is $-2$.`,
  };
}

/** Q25 — antifill work-rate / tank (different from mock4 ages/frame/trip). */
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

  // A: 1/6 > 1/5? No, 1/6 < 1/5 → False
  // B: 1/6+1/4-1/12 = 2/12+3/12-1/12 = 4/12 = 1/3 ≠ 5/12 → False
  // C: time = 1/(1/3)=3, not strictly less → False
  // D: A+drain: 1/6-1/12=1/12; time=12 > 8 → True
  // E: B rate 1/4; A+drain net 1/12; 1/4 > 1/12 → True

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

/** Q26 — linear system traffic (not octane blend). */
export function buildMathQ26Traffic() {
  const context = `Two one-way routes leave a depot. Let $x$ be the number of vans on route North and $y$ the number on route East in a morning wave. The dispatcher records:

$$
x+y=50
$$

$$
3x+2y=130
$$

(The second equation is total driver-hours if North takes $3$ hours and East takes $2$.)

Decide whether each statement is true or false.`;

  // x+y=50, 3x+2y=130 → subtract 2(x+y)=100 from second: x=30, y=20.
  const statements = [
    "Exactly $30$ vans take the North route.",
    "The East route carries strictly more vans than the North route.",
    "If each North van costs EUR $40$ in fuel and each East van costs EUR $25$, total fuel for the wave exceeds EUR $1{,}600$.",
    "Replacing the hour equation by $4x+y=140$ (same $x+y=50$) would raise the North count above $30$.",
    "The unique solution $(x,y)$ of the original system lies in the open first quadrant.",
  ];

  // A: x=30 True
  // B: y=20 < 30 False
  // C: 30*40+20*25=1200+500=1700 > 1600 True
  // D: 4x+y=140 with x+y=50 → 3x=90 → x=30, not above → False
  // E: (30,20) yes True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

From $x+y=50$ get $y=50-x$. Substitute:

$$
3x+2(50-x)=130
$$

$$
3x+100-2x=130
$$

$$
x=30
$$

So the statement is True.`,

    `**B.** → False

$$
y=50-30=20
$$

East has fewer vans than North, not more.

So the statement is False.`,

    `**C.** → True

Fuel cost (euros kept in prose):

$$
30\\cdot 40+20\\cdot 25=1{,}200+500=1{,}700>1{,}600
$$

So the statement is True.`,

    `**D.** → False

With $x+y=50$ and $4x+y=140$:

$$
4x+(50-x)=140\\Rightarrow 3x=90\\Rightarrow x=30
$$

North stays at $30$, not above.

So the statement is False.`,

    `**E.** → True

The unique solution is $(30,20)$ with both coordinates positive.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.TRAFFIC",
    id: "MATH 5.MOCK.TRAFFIC",
    title: "Two-route van allocation — linear system",
    chapter: 5,
    subsection: "5.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Solve $x+y=50$, $3x+2y=130$ to get $(30,20)$. Fuel $1700$. Alternate $4x+y=140$ still gives $x=30$.`,
  };
}

/** Q28 — projectile parabola (not two-point reconstruction). */
export function buildMathQ28Throw() {
  const context = `A ball is thrown vertically. Height in metres after $t$ seconds is

$$
h(t)=-5t^{2}+20t+2\\qquad(t\\ge 0)
$$

Decide whether each statement is true or false.`;

  // vertex at t=20/(10)=2; h(2)=-5*4+40+2=22
  // hits ground: -5t^2+20t+2=0 → 5t^2-20t-2=0 → t=(20±√(400+40))/10=(20±√440)/10=(20±2√110)/10=2±√110/5
  // positive root ≈ 2+2.098=4.098
  const statements = [
    "The maximum height occurs at $t=2$.",
    "The maximum height is strictly greater than $20$ metres.",
    "The ball is still above $10$ metres at $t=3$.",
    "The positive landing time (when $h=0$) is strictly less than $4$.",
    "Completing the square gives $h(t)=-5(t-2)^{2}+22$.",
  ];

  // A True, B True (22>20), C: h(3)=-5*9+60+2=-45+62=17>10 True
  // D: landing ≈4.098 not <4 False
  // E True

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

For $h(t)=-5t^{2}+20t+2$ the vertex is at

$$
t=-\\dfrac{b}{2a}=-\\dfrac{20}{2\\cdot(-5)}=2
$$

So the statement is True.`,

    `**B.** → True

$$
h(2)=-5\\cdot 4+20\\cdot 2+2=-20+40+2=22>20
$$

So the statement is True.`,

    `**C.** → True

$$
h(3)=-5\\cdot 9+20\\cdot 3+2=-45+60+2=17>10
$$

So the statement is True.`,

    `**D.** → False

Solve $-5t^{2}+20t+2=0$, or $5t^{2}-20t-2=0$:

$$
t=\\dfrac{20\\pm\\sqrt{400+40}}{10}=\\dfrac{20\\pm\\sqrt{440}}{10}=2\\pm\\dfrac{\\sqrt{110}}{5}
$$

The positive root is $2+\\sqrt{110}/5$. Since $\\sqrt{100}=10$ and $\\sqrt{121}=11$, one has $\\sqrt{110}\\approx 10.49$, so

$$
t\\approx 2+2.10=4.10\\nless 4
$$

So the statement is False.`,

    `**E.** → True

$$
h(t)=-5\\bigl(t^{2}-4t\\bigr)+2=-5\\bigl((t-2)^{2}-4\\bigr)+2=-5(t-2)^{2}+20+2=-5(t-2)^{2}+22
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.THROW",
    id: "MATH 7.MOCK.THROW",
    title: "Vertical throw — vertex, height checks, landing time",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Vertex at $t=2$, $h=22$. $h(3)=17$. Landing $2+\\sqrt{110}/5\\approx 4.10$. Completed square $-5(t-2)^{2}+22$.`,
  };
}

/** Q30 — cubic factor / critical points (not inventory). */
export function buildMathQ30Cubic() {
  const context = `A production deviation is modelled by

$$
f(x)=x^{3}-6x^{2}+9x+1\\qquad(x\\in\\mathbb{R})
$$

Decide whether each statement is true or false.`;

  // f'=3x^2-12x+9=3(x^2-4x+3)=3(x-1)(x-3)
  // crit at 1,3; f''=6x-12; f''(1)=-6 local max; f''(3)=6 local min
  // f(1)=1-6+9+1=5; f(3)=27-54+27+1=1
  const statements = [
    "The derivative factors as $f'(x)=3(x-1)(x-3)$.",
    "There is a local maximum at $x=1$.",
    "The local-minimum value of $f$ is strictly less than $0$.",
    "Between the two critical points, $f$ is strictly decreasing.",
    "$f(0)+f(4)=2$.",
  ];

  // A True, B True, C: f(3)=1 not <0 False, D True (f'≤0 on [1,3]), E: f(0)=1, f(4)=64-96+36+1=5, sum=6≠2 False

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

$$
f'(x)=3x^{2}-12x+9=3(x^{2}-4x+3)=3(x-1)(x-3)
$$

So the statement is True.`,

    `**B.** → True

$$
f''(x)=6x-12,\\qquad f''(1)=-6<0
$$

so $x=1$ is a local maximum.

So the statement is True.`,

    `**C.** → False

At the local minimum $x=3$:

$$
f(3)=27-54+27+1=1\\nless 0
$$

So the statement is False.`,

    `**D.** → True

On $(1,3)$ one has $f'(x)=3(x-1)(x-3)<0$, so $f$ is strictly decreasing between the critical points.

So the statement is True.`,

    `**E.** → False

$$
f(0)=1,\\qquad f(4)=64-96+36+1=5
$$

$$
f(0)+f(4)=6\\neq 2
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.CUBIC5",
    id: "MATH 9.MOCK.CUBIC5",
    title: "Cubic deviation — critical points and values",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$f'=3(x-1)(x-3)$; local max at $1$ ($f=5$), local min at $3$ ($f=1$). Decreasing on $(1,3)$. $f(0)+f(4)=6$.`,
  };
}

/** Q31 — logistic-style / exponential growth (not Newton cooling). */
export function buildMathQ31Growth() {
  const context = `A culture’s biomass (in grams) follows

$$
B(t)=80\\,e^{0.2t}\\qquad(t\\ge 0\\text{ in hours})
$$

Decide whether each statement is true or false.`;

  // B(0)=80
  // B(5)=80 e = 80*2.71828≈217.46
  // double: 80e^{0.2t}=160 ⇒ e^{0.2t}=2 ⇒ 0.2t=ln2 ⇒ t=5ln2≈3.466
  // B(t)/B(0)=e^{0.2t}
  const statements = [
    "Initial biomass is exactly $80$ g.",
    "Biomass doubles in strictly less than $4$ hours.",
    "After $5$ hours, biomass already exceeds $200$ g.",
    "The relative growth factor over any $5$-hour window is exactly $e$.",
    "$B(10)/B(5)=e$.",
  ];

  // A True
  // B: t=5ln2≈3.466<4 True
  // C: 80e≈217>200 True
  // D: e^{0.2*5}=e^1=e True
  // E: B(10)/B(5)=e^{2}/e^{1}=e True

  const answer_key = [true, true, true, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
B(0)=80\\,e^{0}=80
$$

So the statement is True.`,

    `**B.** → True

Doubling means $80e^{0.2t}=160$, so $e^{0.2t}=2$, hence

$$
t=\\dfrac{\\ln 2}{0.2}=5\\ln 2\\approx 5\\cdot 0.693=3.465<4
$$

So the statement is True.`,

    `**C.** → True

$$
B(5)=80e^{1}=80e\\approx 80\\cdot 2.718=217.4>200
$$

So the statement is True.`,

    `**D.** → True

For any $t$,

$$
\\dfrac{B(t+5)}{B(t)}=e^{0.2\\cdot 5}=e
$$

So the statement is True.`,

    `**E.** → True

$$
\\dfrac{B(10)}{B(5)}=\\dfrac{80e^{2}}{80e}=e
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.GROWTH",
    id: "MATH 10.MOCK.GROWTH",
    title: "Exponential biomass — doubling and window factors",
    chapter: 10,
    subsection: "10.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$B(0)=80$. Doubling time $5\\ln 2\\approx 3.47$. Five-hour factor $e$. $B(5)=80e\\approx 217$.`,
  };
}

/** Q32 — marginal revenue / cost derivatives (not ln-exp product). */
export function buildMathQ32Marginal() {
  const context = `Weekly revenue and cost (in thousands of euros) for output $q>0$ are

$$
R(q)=30q-q^{2},\\qquad C(q)=q^{3}-6q^{2}+15q+8
$$

Decide whether each statement is true or false.`;

  // R'=30-2q; C'=3q^2-12q+15
  // MR=MC: 30-2q=3q^2-12q+15 ⇒ 0=3q^2-10q-15
  // Profit π=R-C; π'=R'-C'
  const statements = [
    "Marginal revenue is $R'(q)=30-2q$.",
    "Marginal cost is $C'(q)=3q^{2}-12q+15$.",
    "At $q=3$, marginal revenue strictly exceeds marginal cost.",
    "Profit $\\pi=R-C$ has a critical point wherever $R'=C'$.",
    "$R(4)=C(4)$.",
  ];

  // A True, B True
  // C: R'(3)=24; C'(3)=27-36+15=6; 24>6 True
  // D True by definition
  // E: R(4)=120-16=104; C(4)=64-96+60+8=36; not equal False

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Differentiate $R(q)=30q-q^{2}$:

$$
R'(q)=30-2q
$$

So the statement is True.`,

    `**B.** → True

$$
C'(q)=3q^{2}-12q+15
$$

So the statement is True.`,

    `**C.** → True

At $q=3$:

$$
R'(3)=30-6=24,\\qquad C'(3)=27-36+15=6
$$

$$
24>6
$$

So the statement is True.`,

    `**D.** → True

$$
\\pi'(q)=R'(q)-C'(q)
$$

vanishes precisely when $R'=C'$.

So the statement is True.`,

    `**E.** → False

$$
R(4)=120-16=104,\\qquad C(4)=64-96+60+8=36
$$

$$
104\\neq 36
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 11.MOCK.MRMC",
    id: "MATH 11.MOCK.MRMC",
    title: "Revenue and cost — marginals and a level check",
    chapter: 11,
    subsection: "11.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$R'=30-2q$, $C'=3q^{2}-12q+15$. At $q=3$, $MR=24>MC=6$. Critical profit iff $MR=MC$. $R(4)\\neq C(4)$.`,
  };
}

/** Q33 — urn probability (NOT poker). */
export function buildMathQ33Urns() {
  const context = `An urn holds $5$ red, $4$ blue and $3$ green balls ($12$ balls total). Two balls are drawn **without replacement**, order irrelevant.

Decide whether each statement is true or false.`;

  // Total ways C(12,2)=66
  // Both red C(5,2)=10
  // One red one blue: 5*4=20
  // At least one green: 1 - C(9,2)/C(12,2)=1-36/66=30/66=5/11
  // P(same color)=(C(5,2)+C(4,2)+C(3,2))/66=(10+6+3)/66=19/66
  const statements = [
    "The number of equally likely two-ball hands is $\\binom{12}{2}=66$.",
    "The probability both balls are red is strictly less than $\\tfrac{1}{5}$.",
    "The probability of one red and one blue equals $\\dfrac{20}{66}$.",
    "The probability both balls share a colour exceeds $\\tfrac{1}{3}$.",
    "The probability of at least one green ball equals $\\dfrac{30}{66}$.",
  ];

  // A True
  // B: 10/66≈0.1515 < 0.2 True
  // C True
  // D: 19/66≈0.288 < 1/3 False
  // E True

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

${binomCompact(12, 2, 66)}

So the statement is True.`,

    `**B.** → True

$$
P(\\text{both red})=\\dfrac{\\binom{5}{2}}{66}=\\dfrac{10}{66}=\\dfrac{5}{33}\\approx 0.152<\\dfrac{1}{5}
$$

So the statement is True.`,

    `**C.** → True

Count mixed red-blue pairs: $5\\cdot 4=20$ (unordered pairs, one of each colour).

$$
P=\\dfrac{20}{66}
$$

So the statement is True.`,

    `**D.** → False

$$
P(\\text{same colour})=\\dfrac{\\binom{5}{2}+\\binom{4}{2}+\\binom{3}{2}}{66}=\\dfrac{10+6+3}{66}=\\dfrac{19}{66}
$$

$$
\\dfrac{19}{66}\\approx 0.288\\ngtr \\dfrac{1}{3}
$$

So the statement is False.`,

    `**E.** → True

Complement: no green means both from the $9$ non-green balls.

$$
P(\\text{at least one green})=1-\\dfrac{\\binom{9}{2}}{66}=1-\\dfrac{36}{66}=\\dfrac{30}{66}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.URNS",
    id: "MATH 12.MOCK.URNS",
    title: "Two draws without replacement — colour events",
    chapter: 12,
    subsection: "12.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Universe $\\binom{12}{2}=66$. Both red $10/66$. Red-blue $20/66$. Same colour $19/66$. At least one green $30/66$.`,
  };
}

/** Q34 — binomial QC (short multi-factor products; not sales-call 13.18). */
export function buildMathQ34QC() {
  const context = `A machine produces items independently with defect probability $p=0.2$. A batch of $n=10$ items is inspected. Let $X$ be the number of defectives, so $X\\sim\\mathrm{Bin}(10,0.2)$.

Decide whether each statement is true or false.`;

  // E[X]=2, Var=10*0.2*0.8=1.6
  // P(X=0)=(0.8)^10
  // P(X≥1)=1-P(0)
  // P(X=2)=C(10,2)(0.2)^2(0.8)^8
  const c102 = 45;
  const statements = [
    "The mean number of defectives is exactly $2$.",
    "The variance is strictly less than $2$.",
    `$P(X=2)=\\binom{10}{2}(0.2)^{2}(0.8)^{8}$ and $\\binom{10}{2}=45$.`,
    "Using $(0.8)^{10}<0.12$, one has $P(X=0)<0.12$.",
    "$P(X\\ge 1)>0.85$.",
  ];

  // A True np=2
  // B True 1.6<2
  // C True
  // D: 0.8^10 ≈ 0.10737 < 0.12 True
  // E: P(X≥1)=1-P(0)≈1-0.107=0.893>0.85 True

  const answer_key = [true, true, true, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=np=10\\cdot 0.2=2
$$

So the statement is True.`,

    `**B.** → True

$$
\\mathrm{Var}(X)=np(1-p)=10\\cdot 0.2\\cdot 0.8=1.6<2
$$

So the statement is True.`,

    `**C.** → True

The binomial PMF at $k=2$ is exactly that product form, and

${binomCompact(10, 2, c102)}

So the statement is True.`,

    `**D.** → True

$$
P(X=0)=(0.8)^{10}
$$

Compute the power directly:

$$
(0.8)^{2}=0.64,\\quad (0.8)^{4}=0.4096,\\quad (0.8)^{8}\\approx 0.1678
$$

$$
(0.8)^{10}=(0.8)^{8}\\cdot(0.8)^{2}\\approx 0.1678\\cdot 0.64\\approx 0.1074<0.12
$$

So the statement is True.`,

    `**E.** → True

$$
P(X\\ge 1)=1-P(X=0)\\approx 1-0.1074=0.8926>0.85
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 13.MOCK.QC",
    id: "MATH 13.MOCK.QC",
    title: "Binomial defectives — mean, variance, and a PMF term",
    chapter: 13,
    subsection: "13.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[X]=2$, $\\mathrm{Var}=1.6$. $\\binom{10}{2}=45$. $(0.8)^{10}\\approx 0.107$, so $P(X\\ge 1)\\approx 0.893$.`,
  };
}
