/**
 * Mock Exam 4 — deep custom math (Q22,23,25,26,28,30–33).
 * Truth tables live only in solution_overview. Teacher-step explanations.
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

**Case Remy is a knight.** Then Quinn really is a knave. Quinn’s claim is therefore false, so it is not true that exactly one of Remy and Sage is a knight. Remy is already a knight, so the only way “exactly one” fails is if Sage is also a knight (two knights among Remy and Sage). Sage says “Remy is a knight,” which is true — consistent with Sage being a knight.

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

Remy asserts “Quinn is a knave.” If that assertion were false, Quinn would not be a knave, hence Quinn would be a knight. That follows from the meaning of Remy’s sentence alone (independent of which typing is actual).

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

/**
 * Q23 — multi-step algebra; claims about root counts / number types
 * (not “greater than 7 / less than 10” thresholds). Non-integer roots appear.
 */
export function buildMathQ23Thresh() {
  const context = `Decide whether each algebraic claim about the number and type of real solutions is true or false.`;

  const statements = [
    "The equation $(2x-1)(x+3)=x(x-5)+11$ has exactly two distinct real roots, and neither root is an integer.",
    "Over $x\\ne 0$ and $x\\ne -4$, the equation $\\dfrac{3}{x}+\\dfrac{2}{x+4}=1$ has exactly two distinct real solutions, and both of them are positive integers.",
    "Over $x\\ne 0$ and $x\\ne -1$, the equation $\\dfrac{x}{x+1}+\\dfrac{x+1}{x}=\\dfrac{17}{4}$ has exactly two distinct real solutions, and both of them are integers.",
    "The equation $\\sqrt{2x+5}=x-1$ has exactly two distinct real solutions, and both of them are irrational.",
    "Over $x\\ne\\pm 2$, the equation $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}=\\dfrac{1}{3}$ has exactly two distinct real roots; their sum is an integer, but neither root is rational.",
  ];

  // A T: x=-5±√39
  // B F: roots 4 and -3; -3 not positive
  // C F: roots 1/3 and -4/3; neither integer
  // D F: only one real solution 2+2√2
  // E T: x=3±√13; sum 6; irrational
  const answer_key = [true, false, false, false, true];

  const tactical_explanations = [
    `**A.** → True

Expand the left-hand side carefully:

$$
(2x-1)(x+3)=2x\\cdot x+2x\\cdot 3-1\\cdot x-1\\cdot 3=2x^{2}+6x-x-3=2x^{2}+5x-3
$$

Expand the right-hand side:

$$
x(x-5)+11=x^{2}-5x+11
$$

Bring everything to one side:

$$
2x^{2}+5x-3=x^{2}-5x+11
$$

$$
2x^{2}+5x-3-x^{2}+5x-11=0
$$

$$
x^{2}+10x-14=0
$$

The discriminant is

$$
\\Delta=10^{2}-4\\cdot 1\\cdot(-14)=100+56=156=4\\cdot 39
$$

so there are exactly two distinct real roots

$$
x=\\dfrac{-10\\pm\\sqrt{156}}{2}=\\dfrac{-10\\pm 2\\sqrt{39}}{2}=-5\\pm\\sqrt{39}.
$$

Since $\\sqrt{36}=6$ and $\\sqrt{49}=7$, one has $\\sqrt{39}\\approx 6.245$, so the roots are approximately $1.245$ and $-11.245$. Neither is an integer.

So the statement is True.`,

    `**B.** → False

Clear the denominators by multiplying through by $x(x+4)$ (valid on the stated domain):

$$
3(x+4)+2x=x(x+4)
$$

$$
3x+12+2x=x^{2}+4x
$$

$$
5x+12=x^{2}+4x
$$

$$
0=x^{2}-x-12=(x-4)(x+3)
$$

The candidate solutions are $x=4$ and $x=-3$. Both lie in the domain ($x\\ne 0$, $x\\ne -4$), so there are exactly two distinct real solutions. However $-3$ is not a positive integer, so the claim that both solutions are positive integers fails.

So the statement is False.`,

    `**C.** → False

Combine the left-hand side over the common denominator $x(x+1)$:

$$
\\dfrac{x^{2}+(x+1)^{2}}{x(x+1)}=\\dfrac{17}{4}
$$

$$
x^{2}+(x^{2}+2x+1)=2x^{2}+2x+1
$$

Cross-multiply (denominators nonzero on the domain):

$$
4(2x^{2}+2x+1)=17x(x+1)
$$

$$
8x^{2}+8x+4=17x^{2}+17x
$$

$$
0=9x^{2}+9x-4
$$

Discriminant:

$$
\\Delta=81+144=225=15^{2}
$$

$$
x=\\dfrac{-9\\pm 15}{18}
$$

$$
x=\\dfrac{6}{18}=\\dfrac{1}{3},\\qquad x=\\dfrac{-24}{18}=-\\dfrac{4}{3}
$$

Both lie in the domain. There are exactly two distinct real solutions, but neither $\\tfrac{1}{3}$ nor $-\\tfrac{4}{3}$ is an integer. The claim that both are integers is wrong.

So the statement is False.`,

    `**D.** → False

A square root is nonnegative, so the right-hand side forces the domain restriction

$$
x-1\\ge 0\\qquad\\Rightarrow\\qquad x\\ge 1
$$

(and also $2x+5\\ge 0$, which is weaker once $x\\ge 1$). Square both sides:

$$
2x+5=(x-1)^{2}=x^{2}-2x+1
$$

$$
0=x^{2}-4x-4
$$

$$
x=\\dfrac{4\\pm\\sqrt{16+16}}{2}=\\dfrac{4\\pm\\sqrt{32}}{2}=\\dfrac{4\\pm 4\\sqrt{2}}{2}=2\\pm 2\\sqrt{2}.
$$

Now check the domain $x\\ge 1$:

$$
2+2\\sqrt{2}\\approx 4.828\\ge 1\\qquad\\text{(keep)},
$$

$$
2-2\\sqrt{2}\\approx -0.828\\ngeq 1\\qquad\\text{(discard)}.
$$

Verification for the kept root: $\\sqrt{2(2+2\\sqrt{2})+5}=\\sqrt{4+4\\sqrt{2}+5}=\\sqrt{9+4\\sqrt{2}}$ and $2+2\\sqrt{2}-1=1+2\\sqrt{2}$; these match after squaring back. So there is exactly one real solution (irrational), not two. The claim fails.

So the statement is False.`,

    `**E.** → True

Combine the left-hand side:

$$
\\dfrac{(x+2)+(x-2)}{(x-2)(x+2)}=\\dfrac{2x}{x^{2}-4}=\\dfrac{1}{3}
$$

$$
6x=x^{2}-4\\qquad\\Rightarrow\\qquad x^{2}-6x-4=0
$$

$$
x=\\dfrac{6\\pm\\sqrt{36+16}}{2}=\\dfrac{6\\pm\\sqrt{52}}{2}=\\dfrac{6\\pm 2\\sqrt{13}}{2}=3\\pm\\sqrt{13}.
$$

Both roots avoid $\\pm 2$ (since $\\sqrt{13}\\approx 3.606$, the roots are about $6.606$ and $-0.606$). Their sum is

$$
(3+\\sqrt{13})+(3-\\sqrt{13})=6,
$$

an integer. Neither root is rational, because $\\sqrt{13}$ is irrational.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 2.MOCK.THRESH",
    id: "MATH 2.MOCK.THRESH",
    title: "Algebra — root counts and number types",
    chapter: 2,
    subsection: "2.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Solve each equation fully (clear denominators, expand, or square with domain checks), then adjudicate the claimed root count and the integer/rational/irrational type of each root.",
  };
}

/** Q25 — hard equations; one-sentence stem; antifill claims. */
export function buildMathQ25Antifill() {
  const context = `Decide whether each applied equation claim is true or false.`;

  const statements = [
    "A courier is $28$ years older than a trainee. In $4$ years the courier will be twice as old as the trainee will be then. A planner concludes that the trainee is now strictly younger than $20$.",
    "A $40\\ \\mathrm{cm}$ by $24\\ \\mathrm{cm}$ print is mounted with a uniform frame so that the framed outer area is $2.5$ times the print area. The frame width is then strictly less than $5\\ \\mathrm{cm}$.",
    "A driver covers $18\\ \\mathrm{km}$ at $12\\ \\mathrm{km/h}$ and then $24\\ \\mathrm{km}$ at $16\\ \\mathrm{km/h}$. The whole trip therefore takes strictly less than $2.8$ hours.",
    "Every real solution of $|2x-5|=x+4$ is strictly larger than $0$.",
    "Over $x>2$, the equation $\\log_{2}(x)+\\log_{2}(x-2)=3$ has a solution strictly smaller than $3.5$.",
  ];

  const answer_key = [false, false, false, true, false];

  const tactical_explanations = [
    `**A.** → False

Let $t$ be the trainee’s present age in years. Then the courier is now $t+28$.

In $4$ years the trainee will be $t+4$ and the courier will be $t+28+4=t+32$. The planner’s age relation becomes the equation

$$
t+32=2(t+4)
$$

Expand the right-hand side:

$$
t+32=2t+8
$$

Bring the $t$-terms to one side and the constants to the other:

$$
32-8=2t-t\\qquad\\Rightarrow\\qquad 24=t
$$

So the trainee is now $24$ years old, which is not strictly younger than $20$. The planner’s conclusion is wrong.

So the statement is False.`,

    `**B.** → False

Let $w>0$ be the uniform frame width in centimetres. The outer rectangle measures $(40+2w)$ by $(24+2w)$. Its area is $2.5$ times the print area $40\\cdot 24=960$:

$$
(40+2w)(24+2w)=2.5\\cdot 960=2400
$$

Expand the left-hand side:

$$
40\\cdot 24+40\\cdot 2w+2w\\cdot 24+2w\\cdot 2w=960+80w+48w+4w^{2}
$$

$$
4w^{2}+128w+960=2400
$$

$$
4w^{2}+128w-1440=0
$$

Divide by $4$:

$$
w^{2}+32w-360=0
$$

Discriminant:

$$
\\Delta=32^{2}+4\\cdot 360=1024+1440=2464=16\\cdot 154
$$

Alternatively keep $\\Delta=1024+1440=2464$ and note $w=-16\\pm\\sqrt{256+360}=-16\\pm\\sqrt{616}$ after completing the square form $w^{2}+32w=360$. The positive root is

$$
w=-16+\\sqrt{616}.
$$

Since $\\sqrt{576}=24$ and $\\sqrt{625}=25$, one has $\\sqrt{616}\\approx 24.82$, so

$$
w\\approx -16+24.82=8.82\\nless 5
$$

So the statement is False.`,

    `**C.** → False

Time equals distance divided by speed. First leg:

$$
t_{1}=\\dfrac{18\\ \\mathrm{km}}{12\\ \\mathrm{km/h}}=\\dfrac{18}{12}=\\dfrac{3}{2}=1.5\\ \\mathrm{h}
$$

Second leg:

$$
t_{2}=\\dfrac{24\\ \\mathrm{km}}{16\\ \\mathrm{km/h}}=\\dfrac{24}{16}=\\dfrac{3}{2}=1.5\\ \\mathrm{h}
$$

Total time:

$$
t=t_{1}+t_{2}=1.5+1.5=3\\ \\mathrm{h}
$$

Compare with the claimed threshold:

$$
3\\nless 2.8
$$

So the statement is False.`,

    `**D.** → True

Split into the two absolute-value cases.

**Case** $2x-5=x+4$: then $x=9$. Check $x+4=13\\ge 0$ (needed if one thinks of $|A|=B$ with $B\\ge 0$); the candidate satisfies the original equation because $|18-5|=13$ and $9+4=13$.

**Case** $2x-5=-(x+4)$: then $2x-5=-x-4$, so $3x=1$ and $x=\\dfrac{1}{3}$. Check: $\\bigl|\\tfrac{2}{3}-5\\bigr|=\\bigl|-\\tfrac{13}{3}\\bigr|=\\tfrac{13}{3}$ and $\\tfrac{1}{3}+4=\\tfrac{13}{3}$. Valid.

Both real solutions satisfy $x>0$.

So the statement is True.`,

    `**E.** → False

The logarithms are defined only when every argument is positive. Together with the stated restriction $x>2$, the domain is simply $x>2$.

On that domain the sum-to-product rule for base-$2$ logs turns the equation into

$$
\\log_{2}\\bigl(x(x-2)\\bigr)=3
$$

Injectivity of $\\log_{2}$ (or writing $2^{3}=8$) gives

$$
x(x-2)=8\\qquad\\Rightarrow\\qquad x^{2}-2x-8=0\\qquad\\Rightarrow\\qquad (x-4)(x+2)=0
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

/** Q26 — harder blend system from scratch. */
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
0.9L+1.4L+80-1.2L=144
$$

$$
(0.9+1.4-1.2)L+80=144
$$

$$
1.1L=64\\qquad\\Rightarrow\\qquad L=\\dfrac{64}{1.1}=\\dfrac{640}{11}\\approx 58.18
$$

Compare with the threshold:

$$
58.18>55
$$

So the statement is True.`,

    `**B.** → False

From A, $N=200-3L=200-\\dfrac{1920}{11}=\\dfrac{2200-1920}{11}=\\dfrac{280}{11}\\approx 25.45$.

$$
25.45\\nless 20
$$

So the statement is False.`,

    `**C.** → True

With $L=\\dfrac{640}{11}$, $M=\\dfrac{1280}{11}$, $N=\\dfrac{280}{11}$:

$$
\\text{cost}=2.40L+1.80M+1.20N=\\dfrac{2.4\\cdot 640+1.8\\cdot 1280+1.2\\cdot 280}{11}
$$

$$
=\\dfrac{1536+2304+336}{11}=\\dfrac{4176}{11}\\approx 379.64
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
1.6L+0.4N=144
$$

Multiply by $5$ to clear decimals: $8L+2N=720$, or divide the displayed equation by $0.4$:

$$
4L+N=360
$$

Subtract $2L+N=200$:

$$
2L=160\\qquad\\Rightarrow\\qquad L=80,\\quad N=40,\\quad M=80
$$

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

/**
 * Q28 — reconstruct a parabola from two points + a horizontal-tangent condition
 * (not a formula-fed slope family / figure task).
 */
export function buildMathQ28Numeric() {
  const context = `A quadratic $g(x)=ax^{2}+bx+c$ passes through the two points $A(0,5)$ and $B(6,-7)$.

At the abscissa $x=2$ the tangent to $y=g(x)$ is horizontal, i.e. $g'(2)=0$.

Decide whether each statement is true or false.`;

  const statements = [
    "After recovering $a$, $b$, and $c$, the product of the two roots of $g(x)=0$ is strictly less than $-4$.",
    "The maximum value of $g$ on $\\mathbb{R}$ is strictly larger than $8$.",
    "The value $g(3)$ is a strictly positive integer.",
    "The abscissa at which the tangent is horizontal is strictly smaller than $1.5$.",
    "The absolute value of the slope of the chord through $A$ and $B$ is strictly larger than $3$.",
  ];

  // g(x)=-x^2+4x+5; roots -1,5 product -5; max g(2)=9; g(3)=8; tangent at 2; chord slope -2
  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

Write $g(x)=ax^{2}+bx+c$. The point $A(0,5)$ forces

$$
g(0)=c=5.
$$

Differentiate: $g'(x)=2ax+b$. The horizontal-tangent condition $g'(2)=0$ is

$$
4a+b=0\\qquad\\Rightarrow\\qquad b=-4a.
$$

The point $B(6,-7)$ gives

$$
g(6)=36a+6b+5=-7
$$

$$
36a+6b=-12\\qquad\\Rightarrow\\qquad 6a+b=-2.
$$

Substitute $b=-4a$:

$$
6a-4a=-2\\qquad\\Rightarrow\\qquad 2a=-2\\qquad\\Rightarrow\\qquad a=-1.
$$

Then $b=-4(-1)=4$ and $c=5$, so

$$
g(x)=-x^{2}+4x+5.
$$

Solve $g(x)=0$:

$$
-x^{2}+4x+5=0\\qquad\\Rightarrow\\qquad x^{2}-4x-5=0\\qquad\\Rightarrow\\qquad (x-5)(x+1)=0.
$$

The roots are $x=5$ and $x=-1$. Their product is

$$
5\\cdot(-1)=-5<-4.
$$

(Alternatively, for $-x^{2}+4x+5=0$ divide by $-1$ and use Vieta on $x^{2}-4x-5=0$: product $=-5$.)

So the statement is True.`,

    `**B.** → True

From A the recovered quadratic is $g(x)=-x^{2}+4x+5$. Complete the square:

$$
g(x)=-\\bigl(x^{2}-4x\\bigr)+5=-\\bigl((x-2)^{2}-4\\bigr)+5=-(x-2)^{2}+4+5
$$

$$
=-(x-2)^{2}+9.
$$

The squared term is always $\\ge 0$, and it carries a minus sign in front, so $g(x)\\le 9$ for every real $x$, with equality only at $x=2$. The global maximum value is therefore $9$. Compare with the claim:

$$
9>8.
$$

So the statement is True.`,

    `**C.** → True

Substitute $x=3$ into the recovered formula from A:

$$
g(3)=-(3)^{2}+4\\cdot 3+5=-9+12+5=8.
$$

The value $8$ is an integer, and $8>0$, so it is a strictly positive integer.

So the statement is True.`,

    `**D.** → False

The setup already states that the tangent is horizontal at $x=2$, and letter A recovered $g'(x)=-2x+4$ with $g'(2)=0$ consistently. The claim asks whether that abscissa is strictly smaller than $1.5$:

$$
2\\nless 1.5.
$$

So the statement is False.`,

    `**E.** → False

The chord through the two given points $A(0,5)$ and $B(6,-7)$ has slope

$$
m_{AB}=\\dfrac{y_B-y_A}{x_B-x_A}=\\dfrac{-7-5}{6-0}=\\dfrac{-12}{6}=-2.
$$

Its absolute value is

$$
\\bigl|m_{AB}\\bigr|=\\lvert -2\\rvert=2.
$$

The claim asks whether this absolute value is strictly larger than $3$:

$$
2\\ngtr 3.
$$

So the statement is False.`,  ];

  return {
    case_id: "MATH 7.MOCK.TWOPT",
    id: "MATH 7.MOCK.TWOPT",
    title: "Reconstruct a parabola from two points and a horizontal tangent",
    chapter: 7,
    subsection: "7.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $a,b,c$ from $g(0)=5$, $g(6)=-7$, and $g'(2)=0$, then adjudicate roots, vertex value, $g(3)$, the tangent abscissa, and the chord slope.",
  };
}

/** Q30 — harder cubic inventory polynomial. */
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

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Write $p(t)=t^{3}-12t^{2}+36t-10$. Differentiate:

$$
p'(t)=3t^{2}-24t+36=3(t^{2}-8t+12)=3(t-2)(t-6).
$$

There are two critical points $t=2$ and $t=6$, with

$$
p(2)=8-48+72-10=22>0,\\qquad p(6)=216-432+216-10=-10<0.
$$

Combined with $p(t)\\to-\\infty$ as $t\\to-\\infty$ and $p(t)\\to+\\infty$ as $t\\to+\\infty$, the cubic has three distinct real roots. For a monic cubic $t^{3}+At^{2}+Bt+C=0$ Vieta gives product of roots equal to $-C$. Here $C=-10$, so the product is $10>0$.

So the statement is True.`,

    `**B.** → True

Because the leading coefficient of $p'$ is positive, $p'(t)<0$ strictly between the roots $t=2$ and $t=6$. Hence $p$ is strictly decreasing on $(2,6)$.

So the statement is True.`,

    `**C.** → False

$$
p'(1)=3(1)^{2}-24(1)+36=3-24+36=15.
$$

The claim asks for a slope strictly larger than $15$, but $15\\ngtr 15$.

So the statement is False.`,

    `**D.** → True

The larger critical abscissa is $t=6>5.5$, and from A one has $p(6)=-10<0$.

So the statement is True.`,

    `**E.** → True

Evaluate at the critical points and endpoints:

$$
p(0)=-10,\\qquad p(2)=22,\\qquad p(6)=-10,\\qquad p(10)=1000-1200+360-10=150.
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
 * Q31 — ONE continuous cooling model only (not two unrelated stories);
 * long chained calculations.
 */
export function buildMathQ31Cooling() {
  const context = `A metal billet cools in a room held at $15^{\\circ}\\mathrm{C}$ according to Newton’s law

$$
T(t)=15+85\\,e^{-kt}
$$

with $t$ in minutes. At $t=3$ the measured temperature is $T(3)=72^{\\circ}\\mathrm{C}$.

Decide whether each statement is true or false.`;

  const statements = [
    "The continuous cooling constant satisfies $k>0.12$.",
    "The time needed for the temperature excess over $15^{\\circ}\\mathrm{C}$ to halve is strictly less than $5$ minutes.",
    "After $9$ minutes the temperature is still strictly above $42^{\\circ}\\mathrm{C}$.",
    "The billet first reaches $40^{\\circ}\\mathrm{C}$ at some time strictly larger than $9$ minutes.",
    "The temperature at $t=6$ lies strictly between $52^{\\circ}\\mathrm{C}$ and $54^{\\circ}\\mathrm{C}$.",
  ];

  // k=ln(85/57)/3≈0.1332; half≈5.20; T9≈40.63; t40≈9.19; T6≈53.22
  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Substitute the calibration $T(3)=72$ into the cooling law:

$$
15+85\\,e^{-3k}=72
$$

$$
85\\,e^{-3k}=57\\qquad\\Rightarrow\\qquad e^{-3k}=\\dfrac{57}{85}
$$

Take the natural logarithm (and multiply by $-1/3$):

$$
k=\\dfrac{1}{3}\\ln\\dfrac{85}{57}.
$$

Numerically $85/57\\approx 1.4912$ and $\\ln 1.4912\\approx 0.3996$, so

$$
k\\approx\\dfrac{0.3996}{3}\\approx 0.1332>0.12.
$$

So the statement is True.`,

    `**B.** → False

The temperature excess over $15^{\\circ}\\mathrm{C}$ is $85\\,e^{-kt}$. It halves when $e^{-kt}=\\tfrac{1}{2}$, i.e.

$$
t_{1/2}=\\dfrac{\\ln 2}{k}.
$$

Using $k\\approx 0.1332$ from A and $\\ln 2\\approx 0.6931$,

$$
t_{1/2}\\approx\\dfrac{0.6931}{0.1332}\\approx 5.20.
$$

The claim says this time is strictly less than $5$ minutes, but

$$
5.20\\nless 5.
$$

So the statement is False.`,

    `**C.** → False

After $9=3\\cdot 3$ minutes the exponential factor is the cube of the three-minute factor $57/85$:

$$
T(9)=15+85\\,e^{-9k}=15+85\\left(e^{-3k}\\right)^{3}=15+85\\left(\\dfrac{57}{85}\\right)^{3}.
$$

Compute the power:

$$
\\left(\\dfrac{57}{85}\\right)^{2}=\\dfrac{3249}{7225},\\qquad \\left(\\dfrac{57}{85}\\right)^{3}=\\dfrac{3249\\cdot 57}{7225\\cdot 85}=\\dfrac{185193}{614125}.
$$

Then

$$
85\\left(\\dfrac{57}{85}\\right)^{3}=\\dfrac{185193}{7225}\\approx 25.632,
$$

so

$$
T(9)\\approx 15+25.632=40.632.
$$

Compare with the threshold $42$:

$$
40.632\\ngtr 42.
$$

So the statement is False.`,

    `**D.** → True

Solve $T(t)=40$:

$$
15+85\\,e^{-kt}=40\\qquad\\Rightarrow\\qquad e^{-kt}=\\dfrac{25}{85}=\\dfrac{5}{17}
$$

$$
t=\\dfrac{1}{k}\\ln\\dfrac{17}{5}.
$$

With $\\ln(17/5)=\\ln 3.4\\approx 1.2238$ and $k\\approx 0.1332$,

$$
t\\approx\\dfrac{1.2238}{0.1332}\\approx 9.19>9.
$$

So the statement is True.`,

    `**E.** → True

At $t=6=2\\cdot 3$ the exponential factor is the square of $57/85$:

$$
T(6)=15+85\\left(\\dfrac{57}{85}\\right)^{2}=15+85\\cdot\\dfrac{3249}{7225}=15+\\dfrac{3249}{85}.
$$

$$
\\dfrac{3249}{85}=38.2235\\ldots\\qquad\\Rightarrow\\qquad T(6)\\approx 15+38.2235=53.2235.
$$

This lies strictly between $52$ and $54$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COOL",
    id: "MATH 10.MOCK.COOL",
    title: "Newton cooling — one model, long chained calculations",
    chapter: 10,
    subsection: "10.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Recover $k$ from the single calibration $T(3)=72$, then chain half-excess time, $T(9)$, the hitting time of $40^{\\circ}\\mathrm{C}$, and $T(6)$ from the same exponential factor $57/85$.",
  };
}

/**
 * Q32 — two intertwined functions: product/chain for f, quotient for g=f/(·),
 * with ln and exp throughout.
 */
export function buildMathQ32Deriv() {
  const context = `For $x>-\\tfrac{1}{2}$ define the intertwined pair

$$
f(x)=\\ln(2x+1)\\,e^{-x},\\qquad g(x)=\\dfrac{f(x)}{x^{2}+4}=\\dfrac{\\ln(2x+1)\\,e^{-x}}{x^{2}+4}.
$$

Decide whether each statement is true or false.`;

  const statements = [
    "The function $f$ has a critical point in the open interval $(0.5,0.8)$.",
    "That critical point of $f$ in $(0.5,0.8)$ is a local maximum of $f$.",
    "The value $g(1)$ is strictly larger than $0.09$.",
    "The derivative $g'(0)$ is strictly positive.",
    "At every critical point of $f$, the function $g$ is automatically stationary as well (i.e. $g'=0$ wherever $f'=0$).",
  ];

  // crit ≈0.673 in (0.5,0.8); local max; g(1)≈0.0808; g'(0)=0.5; g' not auto 0 when f'=0
  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Differentiate $f$ with the product rule and the chain rule on $\\ln(2x+1)$:

$$
f'(x)=\\left(\\dfrac{2}{2x+1}\\right)e^{-x}+\\ln(2x+1)\\cdot\\bigl(-e^{-x}\\bigr)
$$

$$
=e^{-x}\\left(\\dfrac{2}{2x+1}-\\ln(2x+1)\\right).
$$

Since $e^{-x}>0$ always, the sign of $f'$ matches the sign of $\\dfrac{2}{2x+1}-\\ln(2x+1)$.

Evaluate at the endpoints of the claimed interval.

At $x=0.5$:

$$
\\dfrac{2}{2\\cdot 0.5+1}-\\ln(2\\cdot 0.5+1)=\\dfrac{2}{2}-\\ln 2=1-\\ln 2\\approx 1-0.693=0.307>0.
$$

At $x=0.8$:

$$
\\dfrac{2}{2\\cdot 0.8+1}-\\ln(2\\cdot 0.8+1)=\\dfrac{2}{2.6}-\\ln 2.6\\approx 0.769-0.956=-0.187<0.
$$

By the intermediate-value theorem the continuous expression $\\dfrac{2}{2x+1}-\\ln(2x+1)$ has a zero in $(0.5,0.8)$, hence so does $f'$.

So the statement is True.`,

    `**B.** → True

From A, the factor $\\dfrac{2}{2x+1}-\\ln(2x+1)$ (and therefore $f'$) is positive at $x=0.5$ and negative at $x=0.8$. So as $x$ increases through the unique zero in $(0.5,0.8)$, $f'$ changes from $+$ to $-$. That means $f$ itself changes from increasing to decreasing, which is the definition of a local maximum.

(Equivalently: for small $h>0$ one has $f'(x_{0}-h)>0$ and $f'(x_{0}+h)<0$ at the critical point $x_{0}$, so $f(x_{0})$ is larger than the nearby values on both sides.)

So the statement is True.`,

    `**C.** → False

Substitute $x=1$ into $g$:

$$
g(1)=\\dfrac{\\ln(2\\cdot 1+1)\\,e^{-1}}{1^{2}+4}=\\dfrac{\\ln 3}{5e}.
$$

Use $\\ln 3\\approx 1.0986$ and $e\\approx 2.7183$:

$$
g(1)\\approx\\dfrac{1.0986}{5\\cdot 2.7183}=\\dfrac{1.0986}{13.5915}\\approx 0.0808.
$$

Compare with the threshold:

$$
0.0808\\ngtr 0.09.
$$

So the statement is False.`,

    `**D.** → True

Differentiate $g$ with the quotient rule. Write $g=f/h$ with $h(x)=x^{2}+4$, so $h'=2x$:

$$
g'(x)=\\dfrac{f'(x)\\,h(x)-f(x)\\,h'(x)}{\\bigl(h(x)\\bigr)^{2}}=\\dfrac{f'(x)(x^{2}+4)-f(x)\\cdot 2x}{(x^{2}+4)^{2}}.
$$

At $x=0$:

$$
f(0)=\\ln 1\\cdot e^{0}=0,\\qquad f'(0)=e^{0}\\left(\\dfrac{2}{1}-\\ln 1\\right)=2,
$$

$$
g'(0)=\\dfrac{2\\cdot(0+4)-0\\cdot 0}{(0+4)^{2}}=\\dfrac{8}{16}=\\dfrac{1}{2}>0.
$$

So the statement is True.`,

    `**E.** → False

Suppose $f'(x_{0})=0$ with $f(x_{0})\\ne 0$ (as at the interior maximum from A–B, where $\\ln(2x_{0}+1)>0$). The quotient formula from D collapses to

$$
g'(x_{0})=\\dfrac{0\\cdot(x_{0}^{2}+4)-f(x_{0})\\cdot 2x_{0}}{(x_{0}^{2}+4)^{2}}=\\dfrac{-2x_{0}\\,f(x_{0})}{(x_{0}^{2}+4)^{2}}.
$$

For $x_{0}\\in(0.5,0.8)$ one has $x_{0}\\ne 0$ and $f(x_{0})>0$, so $g'(x_{0})\\ne 0$. Thus a critical point of $f$ need not be a critical point of $g$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 11.MOCK.CHAIN",
    id: "MATH 11.MOCK.CHAIN",
    title: "Intertwined ln–exp pair — product, chain, and quotient",
    chapter: 11,
    subsection: "11.4",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview:
      "Differentiate $f$ by product+chain and $g=f/(x^{2}+4)$ by the quotient rule; locate the sign-change critical point of $f$, evaluate $g(1)$ and $g'(0)$, and show $f'=0$ does not force $g'=0$.",
  };
}

/** Q33 — poker probabilities with hand-rank definitions in the claims. */
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

  const answer_key = [true, false, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\binom{52}{5}=\\dfrac{52\\cdot 51\\cdot 50\\cdot 49\\cdot 48}{5!}=2{,}598{,}960>2{,}500{,}000.
$$

So the statement is True.`,

    `**B.** → False

Full-house count: choose the triple rank ($13$), choose $3$ of its $4$ suits ($\\binom{4}{3}$), choose the pair rank ($12$), choose $2$ of its $4$ suits ($\\binom{4}{2}$):

$$
13\\cdot\\binom{4}{3}\\cdot 12\\cdot\\binom{4}{2}=13\\cdot 4\\cdot 12\\cdot 6=3744.
$$

Four-of-a-kind count: $13$ choices for the quad rank, times $48$ choices for the kicker:

$$
13\\cdot 48=624.
$$

Ratio of probabilities equals ratio of counts:

$$
\\dfrac{3744}{624}=6\\ngtr 10.
$$

So the statement is False.`,

    `**C.** → True

Flush count excluding straight flushes:

$$
4\\binom{13}{5}-40=4\\cdot 1287-40=5148-40=5108.
$$

$$
\\dfrac{5108}{2{,}598{,}960}\\approx 0.001965<\\dfrac{1}{500}=0.002.
$$

So the statement is True.`,

    `**D.** → False

The number of nothing / high-card hands is $1{,}302{,}540$. Hence

$$
P(\\text{at least a pair or better})=1-\\dfrac{1{,}302{,}540}{2{,}598{,}960}\\approx 0.4988\\ngtr 0.5.
$$

So the statement is False.`,

    `**E.** → False

Straight count (excluding straight flushes) is $10{,}200$. Three-of-a-kind count is

$$
13\\cdot\\binom{4}{3}\\cdot\\binom{12}{2}\\cdot 4\\cdot 4=13\\cdot 4\\cdot 66\\cdot 16=54{,}912.
$$

Since $10{,}200<54{,}912$, the straight probability is smaller, not greater.

So the statement is False.`,
  ];

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
