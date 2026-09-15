/**
 * Mock Exam 4 — deep custom math (Q22,23,25,26,28,30–33).
 * Truth tables live only in solution_overview. Claims use thresholds / no spoilers.
 */

/** Q22 — knights/knaves (NOT roster / implication-assignment type). */
export function buildMathQ22Liars() {
  const truthTable = `**Case table (K = knight / truth-teller, N = knave / always lies).**

| Quinn | Remy | Sage | Quinn's claim | Remy's claim | Sage's claim | Consistent? |
| --- | --- | --- | --- | --- | --- | --- |
| N | K | K | false (two knights among Remy/Sage) | true (Quinn is N) | true (Remy is K) | **yes** |
| K | N | K | would need exactly one of Remy/Sage as K — Remy N and Sage K gives one K, but then Sage (K) says “Remy is K”, which is false | — | — | no |
| other rows | | | | | | eliminated by the same forcing |

Only one consistent typing survives: Quinn knave, Remy knight, Sage knight.`;

  const context = `On an island every inhabitant is either a knight (always tells the truth) or a knave (always lies).

Three inhabitants — Quinn, Remy, and Sage — make these statements:

Quinn: “Exactly one of Remy and Sage is a knight.”

Remy: “Quinn is a knave.”

Sage: “Remy is a knight.”

Decide whether each statement is true or false.`;

  const statements = [
    "Quinn is a knave.",
    "Remy and Sage are both knights.",
    "There is exactly one typing of the three that satisfies all three statements.",
    "Sage’s statement is false.",
    "If Remy’s statement were false, then Quinn would have to be a knight.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Start from Remy. Remy says “Quinn is a knave.”

**Case Remy is a knight.** Then Quinn really is a knave. Quinn’s claim is therefore false, so it is not true that exactly one of Remy and Sage is a knight. Remy is already a knight, so the only way “exactly one” fails is if Sage is also a knight (two knights). Sage says “Remy is a knight,” which is true — consistent with Sage being a knight.

**Case Remy is a knave.** Then Remy’s claim is false, so Quinn is a knight. Quinn’s true claim forces exactly one of Remy and Sage to be a knight. Remy is a knave, so Sage must be a knight. But Sage (a knight) would then say “Remy is a knight,” which is false — contradiction.

So only the first case survives, and Quinn is a knave.

So the statement is True.`,

    `**B.** → True

From letter A the only consistent typing is Quinn knave, Remy knight, Sage knight. Both Remy and Sage are knights.

So the statement is True.`,

    `**C.** → True

The Remy-knave branch dies (letter A). The Remy-knight branch forces Sage knight and Quinn knave uniquely. No second typing works.

So the statement is True.`,

    `**D.** → False

In the unique consistent typing Sage is a knight, so Sage’s statement is true, not false.

So the statement is False.`,

    `**E.** → True

Remy asserts “Quinn is a knave.” If that assertion were false, Quinn would not be a knave, hence Quinn would be a knight. That is exactly the claim (it follows from the meaning of Remy’s sentence, independent of which typing is actual).

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.LIARS",
    id: "MATH 1.MOCK.LIARS",
    title: "Knights and knaves — Quinn, Remy, Sage",
    chapter: 1,
    subsection: "1.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `**Setup.** Knight ⇒ statement true; knave ⇒ statement false. Branch on Remy first (his claim names Quinn’s type), then check Quinn’s “exactly one” and Sage’s claim about Remy.

**Forcing.** Remy-knave collapses. Remy-knight forces Quinn knave and Sage knight.

${truthTable}`,
  };
}

/** Q23 — multi-step algebra; no free cancellation identity as the main trick. */
export function buildMathQ23Thresh() {
  const context = `Each claim is an independent multi-step algebra check.

A nested rational at a fixed point, a $2\\times 2$ linear system, a polynomial evaluation, a rational equation, and a radical equation appear in turn.

Decide whether each statement is true or false. The claims give thresholds only — they do not hand you a finished boxed value.`;

  const statements = [
    "For $x=3$, the nested quotient $\\dfrac{\\dfrac{5}{x}-\\dfrac{1}{x+2}}{\\dfrac{3}{x+2}+\\dfrac{2}{x}}$ is strictly larger than $1.15$.",
    "The unique solution of the system $5u-3v=7$, $2u+4v=18$ satisfies $u+v>7$.",
    "The value of $\\dfrac{(x^{3}-2x+4)(2x-1)}{x+1}$ at $x=2$ is strictly larger than $7$.",
    "Over the reals with $x\\ne\\pm 3$, every solution of $\\dfrac{4}{x-3}-\\dfrac{1}{x+3}=\\dfrac{7}{x^{2}-9}$ is strictly larger than $1$.",
    "The positive solution of $\\sqrt{x+8}-\\sqrt{x-1}=1$ is strictly larger than $10$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

At $x=3$:

$$
\\text{numerator}=\\dfrac{5}{3}-\\dfrac{1}{5}=\\dfrac{25-3}{15}=\\dfrac{22}{15}
$$

$$
\\text{denominator}=\\dfrac{3}{5}+\\dfrac{2}{3}=\\dfrac{9+10}{15}=\\dfrac{19}{15}
$$

$$
\\dfrac{22/15}{19/15}=\\dfrac{22}{19}\\approx 1.1579>1.15
$$

So the statement is True.`,

    `**B.** → False

From $2u+4v=18$ divide by $2$: $u+2v=9$, so $u=9-2v$. Substitute into $5u-3v=7$:

$$
5(9-2v)-3v=7\\Rightarrow 45-10v-3v=7\\Rightarrow 13v=38\\Rightarrow v=\\dfrac{38}{13}
$$

$$
u=9-\\dfrac{76}{13}=\\dfrac{41}{13},\\qquad u+v=\\dfrac{79}{13}\\approx 6.077
$$

$$
6.077\\ngtr 7
$$

So the statement is False.`,

    `**C.** → True

At $x=2$:

$$
x^{3}-2x+4=8-4+4=8,\\qquad 2x-1=3,\\qquad x+1=3
$$

$$
\\dfrac{8\\cdot 3}{3}=8>7
$$

So the statement is True.`,

    `**D.** → False

Combine over $x^{2}-9$:

$$
\\dfrac{4(x+3)-(x-3)}{x^{2}-9}=\\dfrac{4x+12-x+3}{x^{2}-9}=\\dfrac{3x+15}{x^{2}-9}
$$

Equating to $\\dfrac{7}{x^{2}-9}$ (with $x\\ne\\pm 3$) gives $3x+15=7$, so $x=-\\dfrac{8}{3}$. That unique root is not strictly larger than $1$.

So the statement is False.`,

    `**E.** → True

Set $s=\\sqrt{x-1}\\ge 0$. Then $\\sqrt{x+8}=1+s$. Square both sides (both nonnegative for $x\\ge 1$):

$$
x+8=1+2s+(x-1)=x+2s
$$

$$
8=2s\\Rightarrow s=4\\Rightarrow x-1=16\\Rightarrow x=17
$$

$$
17>10
$$

Verification: $\\sqrt{25}-\\sqrt{16}=5-4=1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.THRESH",
    id: "MATH 2.MOCK.THRESH",
    title: "Multi-step algebra with thresholds — no cancellation gift",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Evaluate each nested/system/radical fully before comparing with the threshold. Domain checks matter for the rational equation; squaring a radical equation requires a verification step.",
  };
}

/**
 * Q25 — hard independent equations; claims are thresholds / conclusions only
 * (no intermediate quadratic or candidate roots printed in the statement text).
 */
export function buildMathQ25Antifill() {
  const context = `Each letter is an independent equation problem from a different family.

Ages, a framed print, a two-leg trip, an absolute-value equation, and a base-$2$ logarithm appear in turn.

Decide whether each statement is true or false. Claims state conclusions or thresholds only — they do not hand you the intermediate algebra.`;

  const statements = [
    "A courier is $28$ years older than a trainee. In $4$ years the courier will be twice as old as the trainee will be then. A planner concludes that the trainee is now strictly younger than $20$.",
    "A $40\\ \\mathrm{cm}$ by $24\\ \\mathrm{cm}$ print is mounted with a uniform frame so that the framed outer area is $2.5$ times the print area. The frame width is then strictly less than $5\\ \\mathrm{cm}$.",
    "A driver covers $18\\ \\mathrm{km}$ at $12\\ \\mathrm{km/h}$ and then $24\\ \\mathrm{km}$ at $16\\ \\mathrm{km/h}$. The whole trip therefore takes strictly less than $2.8$ hours.",
    "Every real solution of $|2x-5|=x+4$ is strictly larger than $0$.",
    "Over $x>2$, the equation $\\log_{2}(x)+\\log_{2}(x-2)=3$ has a solution strictly smaller than $3.5$.",
  ];

  // A: trainee = 24, not <20 → False
  // B: w = -16+√616 ≈ 8.82 ≮ 5 → False
  // C: t = 3 ≮ 2.8 → False
  // D: solutions 9 and 1/3, both >0 → True
  // E: x=4 ≮ 3.5 → False

  const answer_key = [false, false, false, true, false];

  const tactical_explanations = [
    `**A.** → False

Let $t$ be the trainee’s present age. The courier is now $t+28$. In $4$ years:

$$
t+28+4=2(t+4)\\qquad\\Rightarrow\\qquad t+32=2t+8\\qquad\\Rightarrow\\qquad t=24
$$

The trainee is $24$, which is not strictly younger than $20$.

So the statement is False.`,

    `**B.** → False

Let $w>0$ be the frame width. Outer area equals $2.5$ times the print area $40\\cdot 24=960$:

$$
(40+2w)(24+2w)=2.5\\cdot 960=2400
$$

$$
960+80w+48w+4w^{2}=2400\\qquad\\Rightarrow\\qquad 4w^{2}+128w-1440=0
$$

$$
w^{2}+32w-360=0\\qquad\\Rightarrow\\qquad w=-16\\pm\\sqrt{256+360}=-16\\pm\\sqrt{616}
$$

The positive root is $w=-16+\\sqrt{616}$. Since $\\sqrt{576}=24$ and $\\sqrt{625}=25$, one has $\\sqrt{616}\\approx 24.82$, so

$$
w\\approx 8.82\\nless 5
$$

So the statement is False.`,

    `**C.** → False

$$
t=\\dfrac{18}{12}+\\dfrac{24}{16}=\\dfrac{3}{2}+\\dfrac{3}{2}=3
$$

$$
3\\nless 2.8
$$

So the statement is False.`,

    `**D.** → True

Case $2x-5=x+4$ gives $x=9$. Case $2x-5=-(x+4)$ gives $3x=1$, so $x=\\dfrac{1}{3}$.

Both candidates satisfy the absolute-value equation (and $x+4\\ge 0$ holds for each). Every real solution is strictly larger than $0$.

So the statement is True.`,

    `**E.** → False

Domain $x>2$. Sum-to-product for base-$2$ logs:

$$
\\log_{2}\\bigl(x(x-2)\\bigr)=3\\qquad\\Rightarrow\\qquad x(x-2)=2^{3}=8
$$

$$
x^{2}-2x-8=0\\qquad\\Rightarrow\\qquad (x-4)(x+2)=0
$$

Only $x=4$ lies in $x>2$. Compare with the threshold:

$$
4\\nless 3.5
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.ANTIFILL",
    id: "MATH 4.MOCK.ANTIFILL",
    title: "Hard equations — ages, frame, trip, absolute value, log₂",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Set up and solve five independent equation stories, then accept or reject the claimed conclusion. Intermediate roots and quadratics are not printed in the claim text.",
  };
}

/** Q26 — harder blend system from scratch (not waste-invoice reconstruction). */
export function buildMathQ26Blend() {
  const context = `A refinery blends light distillate ($90\\%$ octane index), mid-grade ($70\\%$), and naphtha ($40\\%$) into a finished fuel that must be exactly $200$ litres at $72\\%$ octane.

Light distillate costs EUR $2.40$ per litre, mid-grade EUR $1.80$ per litre, and naphtha EUR $1.20$ per litre.

Policy constraint: the blend must use exactly twice as much mid-grade as light distillate.

Decide whether each statement is true or false.`;

  const statements = [
    "In the unique blend that meets the volume, octane, and policy targets, more than $55$ litres of light distillate must be used.",
    "That blend uses strictly less than $20$ litres of naphtha.",
    "The total material cost of that $200$-litre blend exceeds EUR $370$.",
    "If the policy were changed to equal volumes of light distillate and mid-grade (keeping the $200$-litre and $72\\%$ octane targets), the naphtha volume would increase.",
    "Under the original policy, mid-grade accounts for more than $55\\%$ of the finished blend by volume.",
  ];

  // L=640/11≈58.18, M=1280/11≈116.36, N=280/11≈25.45; cost=4176/11≈379.64
  // alt M=L: L=M=80, N=40
  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

Let $L$, $M$, $N$ be litres of light, mid-grade, and naphtha. The three conditions are

$$
L+M+N=200
$$

$$
0.9L+0.7M+0.4N=0.72\\cdot 200=144
$$

$$
M=2L
$$

Substitute $M=2L$ into the mass balance: $3L+N=200$, so $N=200-3L$. Octane balance:

$$
0.9L+0.7(2L)+0.4(200-3L)=144
$$

$$
0.9L+1.4L+80-1.2L=144\\qquad\\Rightarrow\\qquad 1.1L=64\\qquad\\Rightarrow\\qquad L=\\dfrac{64}{1.1}=\\dfrac{640}{11}\\approx 58.18
$$

$$
58.18>55
$$

So the statement is True.`,

    `**B.** → False

From A, $N=200-3L=200-\\dfrac{1920}{11}=\\dfrac{280}{11}\\approx 25.45$.

$$
25.45\\nless 20
$$

So the statement is False.`,

    `**C.** → True

With $L=\\dfrac{640}{11}$, $M=\\dfrac{1280}{11}$, $N=\\dfrac{280}{11}$:

$$
\\text{cost}=2.40L+1.80M+1.20N=\\dfrac{2.4\\cdot 640+1.8\\cdot 1280+1.2\\cdot 280}{11}=\\dfrac{4176}{11}\\approx 379.64
$$

$$
379.64>370
$$

So the statement is True.`,

    `**D.** → True

Now impose $M=L$ with the same volume and octane targets:

$$
2L+N=200,\\qquad 0.9L+0.7L+0.4N=144
$$

$$
1.6L+0.4N=144\\qquad\\Rightarrow\\qquad 4L+N=360
$$

Subtract $2L+N=200$: $2L=160$, so $L=80$, $N=40$, $M=80$.

Original naphtha was $\\dfrac{280}{11}\\approx 25.45$; the new naphtha is $40$. Naphtha volume increases.

So the statement is True.`,

    `**E.** → True

Mid-grade volume is $M=\\dfrac{1280}{11}$. As a share of $200$:

$$
\\dfrac{M}{200}=\\dfrac{1280}{11\\cdot 200}=\\dfrac{1280}{2200}=\\dfrac{32}{55}\\approx 0.5818=58.18\\%
$$

$$
58.18\\%>55\\%
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.BLEND",
    id: "MATH 5.MOCK.BLEND",
    title: "Three-stream octane blend with a policy ratio",
    chapter: 5,
    subsection: "5.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve the $3\\times 3$ blend (volume, octane, $M=2L$), price materials in euros written outside math mode, then compare the equal-light/mid counterfactual and the mid-grade volume share.",
  };
}

/** Q28 — numeric parabola + slope family (formulas given; not graph-readable). */
export function buildMathQ28Numeric() {
  const context = `A parabola is given by

$$
g(x)=3x^{2}-24x+36
$$

Lines through its vertex form the family

$$
f_{m}(x)=m(x-4)-12
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The product of the two roots of $g(x)=0$ is strictly larger than $10$.",
    "Completing the square shows that the minimum value of $g$ is strictly less than $-11$.",
    "When $m=6$, the second intersection (other than the vertex) lies strictly between $x=5$ and $x=7$.",
    "There is more than one real slope $m$ for which $y=f_{m}$ meets $y=g$ at exactly one point.",
    "When $m=-9$, the distance between the two intersection $x$-coordinates exceeds $2.5$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
g(x)=3(x^{2}-8x+12)=3(x-2)(x-6)
$$

Roots $x=2$ and $x=6$; product $12>10$.

So the statement is True.`,

    `**B.** → True

$$
g(x)=3\\bigl((x-4)^{2}-16\\bigr)+36=3(x-4)^{2}-48+36=3(x-4)^{2}-12
$$

Minimum value $-12<-11$.

So the statement is True.`,

    `**C.** → True

$$
g(x)-f_{m}(x)=3(x-4)^{2}-12-\\bigl(m(x-4)-12\\bigr)=(x-4)\\bigl(3(x-4)-m\\bigr)
$$

Intersections at $x=4$ and $x=4+\\dfrac{m}{3}$. For $m=6$:

$$
x=4+2=6,\\qquad 5<6<7
$$

So the statement is True.`,

    `**D.** → False

The two abscissae coincide precisely when $\\dfrac{m}{3}=0$, i.e. $m=0$. Exactly one real slope gives a single meeting point — not more than one.

So the statement is False.`,

    `**E.** → True

For $m=-9$ the intersections are $x=4$ and $x=4-3=1$. Distance $|4-1|=3>2.5$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.PARA",
    id: "MATH 7.MOCK.PARA",
    title: "Numeric parabola with slope family — threshold claims",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Factor $g$, complete the square for the minimum, factor $g-f_m$ to read both intersections, then compare products, values, and distances with the claimed thresholds.",
  };
}

/** Q30 — harder cubic inventory polynomial (not a spoon-fed min-accel formula). */
export function buildMathQ30Cubic() {
  const context = `A warehouse inventory deviation (tonnes relative to target) is modelled by

$$
p(t)=t^{3}-12t^{2}+36t-10
$$

on the closed window $0\\le t\\le 10$, with $t$ in hours.

Decide whether each statement is true or false.`;

  const statements = [
    "The product of the three real roots of $p(t)=0$ (allowing roots outside the window) is strictly positive.",
    "On the open interval between the two critical points, the inventory deviation is strictly decreasing.",
    "At $t=1$, the instantaneous slope $p'(1)$ is strictly larger than $15$.",
    "The larger critical abscissa exceeds $5.5$, and the deviation there is strictly negative.",
    "Over the closed window $[0,10]$, the highest deviation value exceeds $140$.",
  ];

  // Roots: three real by sign chart of p' and endpoint limits. Product via Vieta = 10.
  // p'(1)=15 exactly → "strictly larger than 15" is False.
  // Larger crit=6>5.5 and p(6)=-10<0 True.
  // Max on [0,10] is p(10)=150>140 True.

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Write $p(t)=t^{3}-12t^{2}+36t-10$. The derivative

$$
p'(t)=3t^{2}-24t+36=3(t-2)(t-6)
$$

has two real zeros, with $p(2)=22>0$ and $p(6)=-10<0$. Combined with $p(t)\\to-\\infty$ as $t\\to-\\infty$ and $p(t)\\to+\\infty$ as $t\\to+\\infty$, the cubic has three distinct real roots. For a monic cubic $t^{3}+At^{2}+Bt+C=0$ Vieta gives product of roots equal to $-C$. Here $C=-10$, so the product is $10>0$.

So the statement is True.`,

    `**B.** → True

Because the leading coefficient of $p'$ is positive, $p'(t)<0$ strictly between the roots $t=2$ and $t=6$. Hence $p$ is strictly decreasing on $(2,6)$.

So the statement is True.`,

    `**C.** → False

$$
p'(1)=3(1)^{2}-24(1)+36=3-24+36=15
$$

The claim asks for a slope strictly larger than $15$, but $15\\ngtr 15$.

So the statement is False.`,

    `**D.** → True

The larger critical abscissa is $t=6>5.5$, and

$$
p(6)=216-432+216-10=-10<0
$$

So the statement is True.`,

    `**E.** → True

Evaluate at the critical points and endpoints:

$$
p(0)=-10,\\qquad p(2)=22,\\qquad p(6)=-10,\\qquad p(10)=150
$$

The highest value on $[0,10]$ is $150>140$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.INV",
    id: "MATH 9.MOCK.INV",
    title: "Cubic inventory deviation — critical points and thresholds",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate the cubic, locate critical points by factoring $p'$, use Vieta for the product of roots, then compare slopes and endpoint values with the claimed thresholds.",
  };
}

/**
 * Q31 — Newton cooling + discrete compound (NOT % population with a figure).
 * No figure; trickier thresholds.
 */
export function buildMathQ31Cooling() {
  const context = `A metal billet cools in a room held at $18^{\\circ}\\mathrm{C}$ according to Newton’s law

$$
T(t)=18+82\\,e^{-kt}
$$

with $t$ in minutes. At $t=5$ the measured temperature is $T(5)=55^{\\circ}\\mathrm{C}$.

Separately, a savings account opens at EUR $4000$ and grows by $4.5\\%$ at the end of each full year (ordinary discrete compound interest).

Decide whether each statement is true or false.`;

  const statements = [
    "The continuous cooling constant satisfies $k>0.14$.",
    "The time at which the billet first reaches $40^{\\circ}\\mathrm{C}$ is strictly greater than $12$ minutes.",
    "The time needed for the temperature excess over $18^{\\circ}\\mathrm{C}$ to halve is strictly less than $5$ minutes.",
    "After $8$ full years the savings account balance already exceeds EUR $5700$.",
    "The account first reaches at least EUR $6000$ only after more than $9$ full years.",
  ];

  // k=(1/5)ln(82/37)≈0.15916>0.14 True
  // t40=ln(82/22)/k≈8.27 ≯ 12 False
  // half=ln2/k≈4.355<5 True
  // S8=4000*(1.045)^8≈5688.40 ≯ 5700 False
  // n=log(1.5)/log(1.045)≈9.21>9 True

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
18+82e^{-5k}=55\\qquad\\Rightarrow\\qquad e^{-5k}=\\dfrac{37}{82}\\qquad\\Rightarrow\\qquad k=\\dfrac{1}{5}\\ln\\dfrac{82}{37}
$$

Numerically $\\ln(82/37)\\approx\\ln 2.216\\approx 0.7958$, so

$$
k\\approx\\dfrac{0.7958}{5}\\approx 0.1592>0.14
$$

So the statement is True.`,

    `**B.** → False

Solve $18+82e^{-kt}=40$:

$$
e^{-kt}=\\dfrac{22}{82}=\\dfrac{11}{41}\\qquad\\Rightarrow\\qquad t=\\dfrac{1}{k}\\ln\\dfrac{82}{22}
$$

With $k\\approx 0.1592$ and $\\ln(82/22)\\approx\\ln 3.727\\approx 1.315$,

$$
t\\approx\\dfrac{1.315}{0.1592}\\approx 8.26
$$

$$
8.26\\ngtr 12
$$

So the statement is False.`,

    `**C.** → True

Excess over $18^{\\circ}\\mathrm{C}$ halves when $e^{-kt}=\\tfrac{1}{2}$, so

$$
t_{1/2}=\\dfrac{\\ln 2}{k}\\approx\\dfrac{0.6931}{0.1592}\\approx 4.35<5
$$

So the statement is True.`,

    `**D.** → False

After $8$ years:

$$
S_{8}=4000\\cdot(1.045)^{8}
$$

Since $(1.045)^{8}\\approx 1.4221$,

$$
S_{8}\\approx 4000\\cdot 1.4221=5688.40\\ngtr 5700
$$

So the statement is False.`,

    `**E.** → True

Need $4000\\cdot(1.045)^{n}\\ge 6000$, i.e. $(1.045)^{n}\\ge 1.5$:

$$
n\\ge\\dfrac{\\ln 1.5}{\\ln 1.045}\\approx\\dfrac{0.4055}{0.04402}\\approx 9.21
$$

The first integer year count with balance at least EUR $6000$ is therefore after more than $9$ full years.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COOL",
    id: "MATH 10.MOCK.COOL",
    title: "Newton cooling and discrete compound savings",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $k$ from $T(5)=55$, adjudicate cooling-time thresholds, then handle the discrete $4.5\\%$ account with logarithms — no figure is used.",
  };
}

/** Q32 — explicit cubic with f' and f'' (not figure-readable). */
export function buildMathQ32Deriv() {
  const context = `For all real $x$ define

$$
f(x)=x^{3}-6x^{2}+9x+4
$$

Decide whether each statement is true or false using only the formula above.`;

  const statements = [
    "The function $f$ has a local maximum at $x=1$ and a local minimum at $x=3$.",
    "The second derivative $f''$ changes sign at $x=2$, and $x=2$ is an inflection point of $f$.",
    "On the open interval where $f''$ is negative, the first derivative $f'$ is strictly decreasing.",
    "The critical point at which $f'$ is largest in value is also a local maximum of $f$ itself.",
    "At the inflection abscissa $x=2$, the function $f$ attains its global maximum on $\\mathbb{R}$.",
  ];

  // f'=3(x-1)(x-3); local max at 1 (f=8), local min at 3 (f=4)
  // f''=6x-12; sign change at 2; f(2)=6
  // f''<0 on (-∞,2) so f' decreasing there True
  // f' largest? f' is parabola opening up, vertex at x=2, f'(2)=3(2-1)(2-3)=-3 — actually MINIMUM of f' at x=2.
  // "critical point at which f' is largest" — f' has no maximum (→∞ as |x|→∞). Misread?
  // Rephrase D to be the classic trap: "The highest point of f' is a local maximum of f" — but without graph.
  // Better D: "The point where f' has a critical point (i.e. f''=0) is a local maximum of f." → at x=2, f is neither max nor min (inflection, still increasing since f'(2)=-3? Wait f'(2)=3(1)(-1)=-3<0, so decreasing through inflection.
  // Actually local max of f is at x=1, not where f''=0.

  // Let me fix statement D to be clearly False:
  // "Where f''=0, the function f has a local maximum."
  // False — inflection, and f'(2)<0.

  // E: global max on R? cubic with positive leading coeff → no global max. False.

  const answer_key = [true, true, true, false, false];

  // Update statements[3]:
  statements[3] =
    "At the unique root of $f''(x)=0$, the function $f$ itself has a local maximum.";

  const tactical_explanations = [
    `**A.** → True

$$
f'(x)=3x^{2}-12x+9=3(x-1)(x-3)
$$

Critical points $x=1$ and $x=3$. Sign of $f'$: positive on $(-\\infty,1)$, negative on $(1,3)$, positive on $(3,\\infty)$. So $x=1$ is a local maximum and $x=3$ is a local minimum.

So the statement is True.`,

    `**B.** → True

$$
f''(x)=6x-12=6(x-2)
$$

$f''$ changes from negative to positive at $x=2$, so concavity of $f$ changes there: $x=2$ is an inflection point.

So the statement is True.`,

    `**C.** → True

$f''(x)<0$ precisely on $(-\\infty,2)$. But $f''=(f')'$, so $f'$ is strictly decreasing wherever $f''<0$.

So the statement is True.`,

    `**D.** → False

The unique root of $f''=0$ is $x=2$. There $f'(2)=3(2-1)(2-3)=-3\\ne 0$, so $x=2$ is not even a critical point of $f$. It is an inflection point (letter B), not a local maximum.

So the statement is False.`,

    `**E.** → False

A cubic with positive leading coefficient satisfies $f(x)\\to+\\infty$ as $x\\to+\\infty$, so $f$ has no global maximum on $\\mathbb{R}$. In particular it cannot attain one at $x=2$ (where $f(2)=8-24+18+4=6$).

So the statement is False.`,
  ];

  return {
    case_id: "MATH 11.MOCK.CUBIC",
    id: "MATH 11.MOCK.CUBIC",
    title: "Explicit cubic — first and second derivatives without a figure",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate $f$ twice by hand, classify critical and inflection points from sign charts, and reject global-max / fake-max claims that a figure might have suggested.",
  };
}

/** Q33 — poker probabilities with hand-rank definitions written into the claims. */
export function buildMathQ33Poker() {
  const context = `At a friend’s poker night, the host shuffles a standard, well-mixed $52$-card deck and deals a $5$-card poker hand uniformly at random (order within the hand does not matter).

Decide whether each probability claim is true or false.`;

  const statements = [
    "The total number of distinct $5$-card hands that could be dealt is greater than $2.5$ million.",
    "A full house is three cards of one rank together with two cards of a different rank. A four of a kind is four cards of one rank plus any fifth card. The probability of a full house is more than $10$ times the probability of four of a kind.",
    "A flush is five cards of one suit that do not form a straight. The probability of being dealt a flush is less than $1$ in $500$.",
    "A ‘nothing’ (high-card) hand is a $5$-card hand with no pair, no three of a kind, no straight, and no flush. The probability that a random hand is not a nothing hand — i.e. contains at least a pair or better — is greater than $50\\%$.",
    "A straight is five consecutive ranks that are not all the same suit (straight flushes excluded). Three of a kind is exactly three cards of one rank, with the other two cards of different ranks (not a full house). The probability of a straight is greater than the probability of three of a kind.",
  ];

  // hands 2598960 > 2.5e6 True
  // FH 3744, FK 624, ratio 6 ≯ 10 False
  // flush 5108 / 2598960 ≈ 0.001965 < 0.002 True
  // 1 - 1302540/2598960 ≈ 0.4988 ≯ 0.5 False
  // straight 10200 < three kind 54912 False

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\binom{52}{5}=\\dfrac{52\\cdot 51\\cdot 50\\cdot 49\\cdot 48}{5!}=2{,}598{,}960>2{,}500{,}000
$$

So the statement is True.`,

    `**B.** → False

Full-house count: choose the triple rank ($13$), choose $3$ of its $4$ suits ($\\binom{4}{3}$), choose the pair rank ($12$), choose $2$ of its $4$ suits ($\\binom{4}{2}$):

$$
13\\cdot\\binom{4}{3}\\cdot 12\\cdot\\binom{4}{2}=3744
$$

Four-of-a-kind count: $13$ choices for the quad rank, times $48$ choices for the kicker:

$$
13\\cdot 48=624
$$

Ratio of probabilities equals ratio of counts:

$$
\\dfrac{3744}{624}=6\\ngtr 10
$$

So the statement is False.`,

    `**C.** → False

Wait — flush count excluding straight flushes is $4\\binom{13}{5}-40=5108$. Probability:

$$
\\dfrac{5108}{2{,}598{,}960}\\approx 0.001965<\\dfrac{1}{500}=0.002
$$

Actually True. Fix key — answer is True.`,

    `**D.** → False

The number of nothing / high-card hands is $1{,}302{,}540$. Hence

$$
P(\\text{at least a pair or better})=1-\\dfrac{1{,}302{,}540}{2{,}598{,}960}\\approx 0.4988\\ngtr 0.5
$$

So the statement is False.`,

    `**E.** → False

Straight count (excluding straight flushes) is $10{,}200$. Three-of-a-kind count is $54{,}912$. Since $10{,}200<54{,}912$, the straight probability is smaller, not greater.

So the statement is False.`,
  ];

  // Fix the botched C explanation (had "False" header leftover)
  tactical_explanations[2] = `**C.** → True

Flush count excluding straight flushes:

$$
4\\binom{13}{5}-40=4\\cdot 1287-40=5108
$$

$$
\\dfrac{5108}{2{,}598{,}960}\\approx 0.001965<\\dfrac{1}{500}=0.002
$$

So the statement is True.`;

  return {
    case_id: "MATH 12.MOCK.POKER",
    id: "MATH 12.MOCK.POKER",
    title: "Poker night — probabilities with hand definitions in the claims",
    chapter: 12,
    subsection: "12.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Count $\\binom{52}{5}$ and the standard hand classes; every claim that names a hand also defines that hand before comparing probabilities.",
  };
}
