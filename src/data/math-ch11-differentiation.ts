import type { MathTask } from "@/data/math-chapters";

export const MATH_CH11_SUBSECTIONS = [
  { id: "11.1", title: "Differentiation rules & mechanics" },
  { id: "11.2", title: "Economic interpretation of the derivative" },
] as const;

export const MATH_CH11_DIFFERENTIATION: MathTask[] = [
  {
    id: "math-11-1",
    case_id: "MATH 11.01",
    title: "Tangent line from a workshop profit curve",
    subsection: "11.1",
    context:
      "A workshop models daily profit in hundreds of euros by $P(x)=x^{2}-4x+7$, where $x$ is the number of dozens of items sold. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The Newton quotient at $x=a$ simplifies to $2a+h-4$.",
      "$P'(3)=2$.",
      "The tangent line at $x=3$ is $y=2x-2$.",
      "The function is decreasing for all $x>2$.",
      "$x=2$ is a minimum point of $P$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Start from the derivative definition:

$$
\\dfrac{P(a+h)-P(a)}{h}
=
\\dfrac{(a+h)^{2}-4(a+h)+7-(a^{2}-4a+7)}{h}
$$

Expand the numerator and collect like terms:

$$
\\dfrac{2ah+h^{2}-4h}{h}
=
2a+h-4
$$

The simplified Newton quotient is exactly the one stated, so the statement is True.`,
      `**B.** → True

Once the Newton quotient has been simplified, let $h$ tend to $0$:

$$
P'(x)=2x-4
$$

Now substitute $x=3$:

$$
P'(3)=2\\cdot 3-4=2
$$

The derivative value matches the claim, so the statement is True.`,
      `**C.** → True

First recover the point on the graph:

$$
P(3)=3^{2}-4\\cdot 3+7=4
$$

The tangent line uses point-slope form:

$$
y-P(3)=P'(3)(x-3)
$$

Substitute the values:

$$
y-4=2(x-3)
$$

Hence

$$
y=2x-2
$$

The tangent equation is correct, so the statement is True.`,
      `**D.** → False

The sign of the derivative controls whether the curve rises or falls:

$$
P'(x)=2x-4
$$

For every $x>2$,

$$
2x-4>0
$$

So the curve is increasing, not decreasing, on that interval. The statement is False.`,
      `**E.** → True

Candidate turning points solve

$$
P'(x)=0
$$

That gives

$$
2x-4=0
$$

$$
x=2
$$

Because the coefficient of $x^{2}$ in $P(x)$ is positive, the parabola opens upward. So the stationary point is a minimum. The statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview:
      "Differentiate a quadratic from first principles, evaluate the derivative at a point, and write the tangent line in point-slope form.",
  },
  {
    id: "math-11-2",
    case_id: "MATH 11.02",
    title: "Marginal cost from a factory cost schedule",
    subsection: "11.1",
    context:
      "A factory models total daily cost in euros by $C(q)=200+12q+\\dfrac{3}{100}q^{2}$, where $q$ is the number of units produced. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal cost function is $C'(q)=12+\\dfrac{3}{50}q$.",
      "$C'(100)=18$.",
      "At $q=100$, producing one extra unit raises total cost by approximately $18$ euros.",
      "The derivative $C'(q)$ gives average cost per unit.",
      "The tangent line to $C$ at $q=100$ is $y=1700+18(q-100)$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Differentiate term by term:

$$
C(q)=200+12q+\\dfrac{3}{100}q^{2}
$$

The constant disappears, the linear term contributes its coefficient, and the quadratic term uses the power rule:

$$
C'(q)=12+\\dfrac{3}{100}\\cdot 2q
=
12+\\dfrac{3}{50}q
$$

The marginal-cost formula matches the claim, so the statement is True.`,
      `**B.** → True

Substitute $q=100$:

$$
C'(100)=12+\\dfrac{3}{50}\\cdot 100
=
12+6
=
18
$$

The value is correct, so the statement is True.`,
      `**C.** → True

Marginal cost is measured in euros per unit. Therefore

$$
C'(100)=18
$$

means that near $q=100$, one extra unit raises total cost by approximately $18$ euros. The statement is True.`,
      `**D.** → False

Average cost per unit is the quotient

$$
\\dfrac{C(q)}{q},
$$

not the derivative $C'(q)$. The derivative is marginal cost. The statement is False.`,
      `**E.** → True

First compute the point on the cost curve:

$$
C(100)=200+12\\cdot 100+\\dfrac{3}{100}\\cdot 100^{2}
=
200+1200+300
=
1700
$$

The tangent line at $q=100$ is

$$
y-C(100)=C'(100)(q-100)
$$

That gives

$$
y=1700+18(q-100)
$$

The statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 2,
    solution_overview:
      "Differentiate a total-cost polynomial, evaluate marginal cost at a named output level, and interpret the derivative in units.",
  },
  {
    id: "math-11-3",
    case_id: "MATH 11.03",
    title: "Power rule inside a production function",
    subsection: "11.1",
    context:
      "A workshop estimates output by $Q(L)=5L^{\\frac{3}{2}}$ units when $L>0$ labour-hours are used. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal product is $Q'(L)=\\dfrac{15}{2}L^{\\frac{1}{2}}$.",
      "$Q'(4)=15$.",
      "At $L=4$, one extra labour-hour raises output by approximately $15$ units.",
      "$Q'(L)$ is constant for all $L>0$.",
      "Doubling labour from $L=4$ to $L=8$ doubles the marginal product exactly.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This is a direct power-rule derivative:

$$
Q(L)=5L^{\\frac{3}{2}}
$$

So

$$
Q'(L)=5\\cdot \\dfrac{3}{2}L^{\\frac{1}{2}}
=
\\dfrac{15}{2}L^{\\frac{1}{2}}
$$

The derivative matches the claim, so the statement is True.`,
      `**B.** → True

Evaluate the derivative at $L=4$:

$$
Q'(4)=\\dfrac{15}{2}\\cdot 4^{\\frac{1}{2}}
=
\\dfrac{15}{2}\\cdot 2
=
15
$$

The value is correct, so the statement is True.`,
      `**C.** → True

The derivative has units of output per labour-hour. Therefore

$$
Q'(4)=15
$$

means that near $L=4$, a small increase of one labour-hour raises output by approximately $15$ units. The statement is True.`,
      `**D.** → False

The derivative still depends on $L$:

$$
Q'(L)=\\dfrac{15}{2}L^{\\frac{1}{2}}
$$

Since the square-root factor changes with $L$, the marginal product is not constant. The statement is False.`,
      `**E.** → False

Compare the marginal product at the two labour levels:

$$
Q'(4)=15
$$

and

$$
Q'(8)=\\dfrac{15}{2}\\sqrt{8}=15\\sqrt{2}
$$

The ratio is

$$
\\dfrac{Q'(8)}{Q'(4)}=\\sqrt{2}
$$

That is not equal to $2$. Doubling labour does not double the marginal product here, so the statement is False.`,
    ],
    difficulty_level: "1/5",
    sort_order: 3,
    solution_overview:
      "Apply the power rule to a production function and read the derivative as marginal product in units per labour-hour.",
  },
  {
    id: "math-11-4",
    case_id: "MATH 11.04",
    title: "Revenue from a linear price schedule",
    subsection: "11.1",
    context:
      "A seller can charge $p(q)=80-2q$ euros per unit when it sells $q$ units. Revenue is $R(q)=q\\cdot p(q)$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The revenue function is $R(q)=80q-2q^{2}$.",
      "The marginal revenue is $R'(q)=80-4q$.",
      "$R'(10)=40$.",
      "$R'(q)=p'(q)$ for every $q>0$.",
      "The tangent line to $R$ at $q=10$ is $y=600+40(q-10)$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Revenue is price times quantity:

$$
R(q)=q\\cdot (80-2q)=80q-2q^{2}
$$

The statement is True.`,
      `**B.** → True

Differentiate the full revenue function:

$$
R'(q)=80-4q
$$

That is the correct marginal revenue function, so the statement is True.`,
      `**C.** → True

Substitute $q=10$:

$$
R'(10)=80-4\\cdot 10=40
$$

The computed value matches the claim, so the statement is True.`,
      `**D.** → False

The price derivative is only

$$
p'(q)=-2,
$$

whereas

$$
R'(q)=80-4q.
$$

These are different functions, so $R'(q)=p'(q)$ is false. The statement is False.`,
      `**E.** → True

First compute revenue at the named output:

$$
R(10)=80\\cdot 10-2\\cdot 10^{2}=800-200=600
$$

Now use point-slope form:

$$
y-R(10)=R'(10)(q-10)
$$

Hence

$$
y=600+40(q-10)
$$

The tangent line is correct, so the statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 4,
    solution_overview:
      "Build revenue from the story first, then differentiate the whole revenue function to obtain marginal revenue.",
  },
  {
    id: "math-11-5",
    case_id: "MATH 11.05",
    title: "Average cost as a quotient",
    subsection: "11.1",
    context:
      "A plant has total cost $C(q)=300+6q+\\dfrac{3}{100}q^{2}$ euros for output $q>0$. The average cost is $A(q)=\\dfrac{C(q)}{q}$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The average cost simplifies to $A(q)=\\dfrac{300}{q}+6+\\dfrac{3}{100}q$.",
      "The derivative is $A'(q)=-\\dfrac{300}{q^{2}}+\\dfrac{3}{100}$.",
      "$A'(100)=0$.",
      "The derivative $A'(q)$ is the same as marginal cost.",
      "At $q=100$, average cost is locally flat because the derivative is zero there.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Divide each term in the total cost by $q$:

$$
A(q)=\\dfrac{300+6q+\\dfrac{3}{100}q^{2}}{q}
=
\\dfrac{300}{q}+6+\\dfrac{3}{100}q
$$

The algebraic simplification is correct, so the statement is True.`,
      `**B.** → True

Differentiate the simplified form term by term:

$$
A(q)=300q^{-1}+6+\\dfrac{3}{100}q
$$

Hence

$$
A'(q)=-300q^{-2}+\\dfrac{3}{100}
=
-\\dfrac{300}{q^{2}}+\\dfrac{3}{100}
$$

The derivative agrees with the claim, so the statement is True.`,
      `**C.** → True

Substitute $q=100$:

$$
A'(100)=-\\dfrac{300}{100^{2}}+\\dfrac{3}{100}
=
-\\dfrac{300}{10000}+\\dfrac{3}{100}
=
-\\dfrac{3}{100}+\\dfrac{3}{100}
=
0
$$

So the statement is True.`,
      `**D.** → False

Marginal cost is

$$
C'(q)=6+\\dfrac{3}{50}q,
$$

whereas

$$
A'(q)=-\\dfrac{300}{q^{2}}+\\dfrac{3}{100}.
$$

These are derivatives of two different functions. The statement is False.`,
      `**E.** → True

When

$$
A'(100)=0,
$$

the tangent to average cost is horizontal at $q=100$, so the curve is locally flat there. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 5,
    solution_overview:
      "Rewrite the quotient first, then differentiate the average-cost function carefully and distinguish it from marginal cost.",
  },
  {
    id: "math-11-6",
    case_id: "MATH 11.06",
    title: "Waiting time with a reciprocal staffing rule",
    subsection: "11.1",
    context:
      "A helpdesk models average waiting time in minutes by $W(n)=\\dfrac{48}{n+3}$, where $n>0$ is the number of agents on shift. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $W'(n)=-\\dfrac{48}{(n+3)^{2}}$.",
      "$W'(3)=-\\dfrac{4}{3}$.",
      "At $n=3$, adding one more agent lowers the waiting time by approximately $\\dfrac{4}{3}$ minutes.",
      "Because $W'(n)<0$, waiting time is increasing in $n$.",
      "$W''(n)=\\dfrac{96}{(n+3)^{3}}$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite the function as a power:

$$
W(n)=48(n+3)^{-1}
$$

Differentiate:

$$
W'(n)=48\\cdot (-1)\\cdot (n+3)^{-2}\\cdot 1
=
-\\dfrac{48}{(n+3)^{2}}
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate the derivative at $n=3$:

$$
W'(3)=-\\dfrac{48}{(3+3)^{2}}
=
-\\dfrac{48}{36}
=
-\\dfrac{4}{3}
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

The derivative is measured in minutes per agent. Therefore

$$
W'(3)=-\\dfrac{4}{3}
$$

means that near $n=3$, one extra agent changes waiting time by approximately $-\\dfrac{4}{3}$ minutes. The negative sign means a reduction. The statement is True.`,
      `**D.** → False

If

$$
W'(n)<0,
$$

then the function decreases as $n$ increases. So more agents reduce waiting time in this model. The statement says increasing, which reverses the sign interpretation. It is False.`,
      `**E.** → True

Differentiate once more:

$$
W'(n)=-48(n+3)^{-2}
$$

$$
W''(n)=-48\\cdot (-2)\\cdot (n+3)^{-3}
=
\\dfrac{96}{(n+3)^{3}}
$$

The second derivative is correct, so the statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 6,
    solution_overview:
      "Use reciprocal-power differentiation and read the sign of the derivative as a statement about whether extra staffing raises or lowers waiting time.",
  },
  {
    id: "math-11-7",
    case_id: "MATH 11.07",
    title: "Product rule on a response index",
    subsection: "11.1",
    context:
      "A campaign response index is modeled by $S(x)=x^{2}\\cdot e^{-x}$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $S'(x)=x\\cdot e^{-x}\\cdot (2-x)$.",
      "$S'(2)=0$.",
      "$S''(x)=e^{-x}\\cdot (x^{2}-4x+2)$.",
      "$S'(1)=e^{-1}$.",
      "At $x=2$, the tangent to the graph is horizontal.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Write the product as $u(x)=x^{2}$ and $v(x)=e^{-x}$. Then

$$
u'(x)=2x,\\qquad v'(x)=-e^{-x}.
$$

So

$$
S'(x)=u'\\cdot v+u\\cdot v'
=
2x\\cdot e^{-x}+x^{2}\\cdot (-e^{-x})
=
e^{-x}\\cdot (2x-x^{2})
=
x\\cdot e^{-x}\\cdot (2-x).
$$

The derivative matches the claim, so the statement is True.`,
      `**B.** → True

Substitute $x=2$:

$$
S'(2)=2\\cdot e^{-2}\\cdot (2-2)=0.
$$

The value is exactly zero, so the statement is True.`,
      `**C.** → True

Start from the factored first derivative

$$
S'(x)=e^{-x}\\cdot (2x-x^{2}).
$$

Differentiate as a product again. The first factor contributes $-e^{-x}$, and the second contributes $2-2x$:

$$
S''(x)=(-e^{-x})\\cdot (2x-x^{2})+e^{-x}\\cdot (2-2x)
$$

$$
=e^{-x}\\cdot \\bigl(-(2x-x^{2})+(2-2x)\\bigr)
=
e^{-x}\\cdot (x^{2}-4x+2).
$$

The stated second derivative is correct, so the statement is True.`,
      `**D.** → True

Substitute $x=1$:

$$
S'(1)=1\\cdot e^{-1}\\cdot (2-1)=e^{-1}.
$$

The statement is True.`,
      `**E.** → True

When a differentiable function satisfies

$$
S'(2)=0,
$$

its tangent at $x=2$ has slope zero. That is exactly what horizontal means, so the statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 7,
    solution_overview:
      "Apply the product rule to an exponential-polynomial product, then differentiate again to obtain the second derivative.",
  },
  {
    id: "math-11-8",
    case_id: "MATH 11.08",
    title: "Square-root demand and its second derivative",
    subsection: "11.1",
    context:
      "Expected demand is modeled by $D(a)=7\\sqrt{a+9}$ units when $a\\geq 0$ measures advertising intensity. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $D'(a)=\\dfrac{7}{2\\sqrt{a+9}}$.",
      "$D'(7)=\\dfrac{7}{8}$.",
      "$D''(a)=-\\dfrac{7}{4}(a+9)^{-\\frac{3}{2}}$.",
      "Near $a=7$, increasing advertising by one unit raises expected demand by approximately $7$ units.",
      "$D'(a)$ is smaller at $a=16$ than at $a=0$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite the square root as a power:

$$
D(a)=7(a+9)^{\\frac{1}{2}}.
$$

Differentiate:

$$
D'(a)=7\\cdot \\dfrac{1}{2}(a+9)^{-\\frac{1}{2}}\\cdot 1
=
\\dfrac{7}{2\\sqrt{a+9}}.
$$

The formula is correct, so the statement is True.`,
      `**B.** → True

Substitute $a=7$:

$$
D'(7)=\\dfrac{7}{2\\sqrt{16}}
=
\\dfrac{7}{2\\cdot 4}
=
\\dfrac{7}{8}.
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

Start from

$$
D'(a)=\\dfrac{7}{2}(a+9)^{-\\frac{1}{2}}.
$$

Differentiate again:

$$
D''(a)=\\dfrac{7}{2}\\cdot \\left(-\\dfrac{1}{2}\\right)(a+9)^{-\\frac{3}{2}}
=
-\\dfrac{7}{4}(a+9)^{-\\frac{3}{2}}.
$$

The second derivative matches the claim, so the statement is True.`,
      `**D.** → False

The derivative at $a=7$ is

$$
\\dfrac{7}{8},
$$

not $7$. So the model predicts an increase of approximately $\\dfrac{7}{8}$ units of demand per extra unit of advertising near $a=7$. The statement is False.`,
      `**E.** → True

Compute the two derivative values:

$$
D'(16)=\\dfrac{7}{2\\sqrt{25}}=\\dfrac{7}{10}
$$

and

$$
D'(0)=\\dfrac{7}{2\\sqrt{9}}=\\dfrac{7}{6}.
$$

Since

$$
\\dfrac{7}{10}<\\dfrac{7}{6},
$$

the derivative is indeed smaller at $a=16$. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview:
      "Differentiate a square-root demand rule, compute its second derivative, and compare derivative values at named advertising levels.",
  },
  {
    id: "math-11-9",
    case_id: "MATH 11.09",
    title: "Revenue from a nested demand rule",
    subsection: "11.1",
    context:
      "A retailer sets price by $p(n)=20-3n$ euros and expected demand by $q(n)=\\sqrt{2n+1}$ units, where $n>0$ measures promotion intensity. Revenue is $R(n)=p(n)\\cdot q(n)$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $R'(n)=\\dfrac{17-9n}{\\sqrt{2n+1}}$.",
      "$R'(1)=\\dfrac{8}{\\sqrt{3}}$.",
      "$R'(n)=-3\\sqrt{2n+1}+\\dfrac{20-3n}{\\sqrt{2n+1}}$ before combining over one denominator.",
      "$R'(n)=0$ at $n=\\dfrac{17}{9}$.",
      "$R(n)$ is increasing for every $0<n<2$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

First write the revenue explicitly:

$$
R(n)=(20-3n)\\cdot (2n+1)^{\\frac{1}{2}}.
$$

Differentiate as a product. The derivative of $20-3n$ is $-3$. The derivative of $(2n+1)^{1/2}$ is

$$
\\dfrac{1}{2}(2n+1)^{-\\frac{1}{2}}\\cdot 2
=
(2n+1)^{-\\frac{1}{2}}.
$$

So

$$
R'(n)=(-3)\\cdot (2n+1)^{\\frac{1}{2}}+(20-3n)\\cdot (2n+1)^{-\\frac{1}{2}}.
$$

Put both terms over the common denominator $\\sqrt{2n+1}$:

$$
R'(n)=\\dfrac{-3(2n+1)+(20-3n)}{\\sqrt{2n+1}}
=
\\dfrac{-6n-3+20-3n}{\\sqrt{2n+1}}
=
\\dfrac{17-9n}{\\sqrt{2n+1}}.
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Substitute $n=1$:

$$
R'(1)=\\dfrac{17-9}{\\sqrt{3}}
=
\\dfrac{8}{\\sqrt{3}}.
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

Before clearing the common denominator, the product-rule expansion is exactly

$$
R'(n)=-3\\sqrt{2n+1}+\\dfrac{20-3n}{\\sqrt{2n+1}}.
$$

(The second term already uses $(2n+1)^{-1/2}=1/\\sqrt{2n+1}$.) The statement is True.`,
      `**D.** → True

Critical points solve

$$
R'(n)=0.
$$

From part A this means

$$
\\dfrac{17-9n}{\\sqrt{2n+1}}=0.
$$

The denominator is positive for $n>0$, so the numerator must be zero:

$$
17-9n=0
$$

$$
n=\\dfrac{17}{9}.
$$

The statement is True.`,
      `**E.** → False

The derivative changes sign at

$$
n=\\dfrac{17}{9},
$$

and

$$
\\dfrac{17}{9}<2.
$$

So the curve increases only on

$$
0<n<\\dfrac{17}{9},
$$

not on the whole interval $0<n<2$. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 9,
    solution_overview:
      "Differentiate a revenue model built from two scenario functions and simplify the result into one fraction before interpreting its sign.",
  },
  {
    id: "math-11-10",
    case_id: "MATH 11.10",
    title: "Maintenance time per effective unit",
    subsection: "11.1",
    context:
      "A plant models total maintenance hours by $H(n)=2n^{2}+8n$ when it runs $n>0$ machines. Maintenance time per effective unit is $T(n)=\\dfrac{H(n)}{n+1}$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $T'(n)=\\dfrac{2n^{2}+4n+8}{(n+1)^{2}}$.",
      "$T'(1)=\\dfrac{7}{2}$.",
      "$T'(n)>0$ for every $n>0$.",
      "$T'(n)=\\dfrac{2n+8}{n+1}$ after cancelling a common factor incorrectly.",
      "There exists some $n>0$ for which $T'(n)=0$.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Use the quotient formula with

$$
u=2n^{2}+8n,\\qquad v=n+1.
$$

Then

$$
u'=4n+8,\\qquad v'=1.
$$

So

$$
T'(n)=\\dfrac{u'\\cdot v-u\\cdot v'}{v^{2}}
=
\\dfrac{(4n+8)\\cdot (n+1)-(2n^{2}+8n)\\cdot 1}{(n+1)^{2}}.
$$

Expand the numerator:

$$
(4n+8)(n+1)=4n^{2}+4n+8n+8=4n^{2}+12n+8,
$$

$$
4n^{2}+12n+8-(2n^{2}+8n)=2n^{2}+4n+8.
$$

Hence

$$
T'(n)=\\dfrac{2n^{2}+4n+8}{(n+1)^{2}}.
$$

The statement is True.`,
      `**B.** → True

Substitute $n=1$:

$$
T'(1)=\\dfrac{2+4+8}{(1+1)^{2}}
=
\\dfrac{14}{4}
=
\\dfrac{7}{2}.
$$

The statement is True.`,
      `**C.** → True

For every $n>0$, the numerator $2n^{2}+4n+8$ is a sum of positive terms, and the denominator $(n+1)^{2}$ is positive. Therefore

$$
T'(n)>0
$$

for every $n>0$. The statement is True.`,
      `**D.** → False

The incorrect cancelled expression

$$
\\dfrac{2n+8}{n+1}
$$

is not equal to the true derivative. For example at $n=1$,

$$
\\dfrac{2+8}{2}=5\\neq \\dfrac{7}{2}.
$$

The statement is False.`,
      `**E.** → False

From part C, $T'(n)$ stays strictly positive for all $n>0$. A strictly positive quantity cannot equal zero. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 10,
    solution_overview:
      "Differentiate a ratio carefully, simplify the derivative into a single fraction, and use numerator-denominator signs to judge monotonicity.",
  },
  {
    id: "math-11-11",
    case_id: "MATH 11.11",
    title: "Log utility with a linear time cost",
    subsection: "11.1",
    context:
      "A student models utility from study time by $U(x)=40\\cdot \\ln(x+1)-x$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $U'(x)=\\dfrac{40}{x+1}-1$.",
      "$U'(3)=9$.",
      "$U''(x)=-\\dfrac{40}{(x+1)^{2}}$.",
      "$U'(x)$ is undefined at $x=0$.",
      "Near $x=3$, one extra hour of study changes utility by approximately $9$ utility units.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Differentiate term by term:

$$
U(x)=40\\cdot \\ln(x+1)-x.
$$

For the logarithmic term,

$$
\\dfrac{d}{dx}\\ln(x+1)=\\dfrac{1}{x+1}\\cdot 1.
$$

So

$$
U'(x)=40\\cdot \\dfrac{1}{x+1}-1
=
\\dfrac{40}{x+1}-1.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=3$:

$$
U'(3)=\\dfrac{40}{4}-1=10-1=9.
$$

The claim is correct, so the statement is True.`,
      `**C.** → True

Differentiate

$$
U'(x)=40(x+1)^{-1}-1
$$

once more:

$$
U''(x)=40\\cdot (-1)\\cdot (x+1)^{-2}
=
-\\dfrac{40}{(x+1)^{2}}.
$$

The statement is True.`,
      `**D.** → False

At $x=0$,

$$
U'(0)=\\dfrac{40}{1}-1=39.
$$

The derivative is perfectly well defined there. The statement is False.`,
      `**E.** → True

The derivative measures the instantaneous change in utility per extra hour of study. Since

$$
U'(3)=9,
$$

the model predicts that near $x=3$, one extra hour changes utility by approximately $9$ utility units. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview:
      "Differentiate a logarithmic utility function and obtain its second derivative before interpreting the first derivative numerically.",
  },
  {
    id: "math-11-12",
    case_id: "MATH 11.12",
    title: "A learning-curve cost per unit",
    subsection: "11.1",
    context:
      "A training program models unit processing cost by $c(N)=1000N^{-\\frac{1}{2}}$ euros when cumulative output is $N>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $c'(N)=-500N^{-\\frac{3}{2}}$.",
      "$c'(4)=-\\dfrac{125}{2}$.",
      "The derivative is negative for all $N>0$.",
      "Near $N=4$, one extra unit of cumulative output lowers unit cost by approximately $\\dfrac{125}{2}$ euros.",
      "Doubling $N$ from $4$ to $8$ doubles the magnitude of the derivative.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Apply the power rule:

$$
c(N)=1000N^{-\\frac{1}{2}}
$$

$$
c'(N)=1000\\left(-\\dfrac{1}{2}\\right)N^{-\\frac{3}{2}}
=
-500N^{-\\frac{3}{2}}.
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate at $N=4$:

$$
c'(4)=-500\\cdot 4^{-\\frac{3}{2}}.
$$

Since

$$
4^{\\frac{3}{2}}=(\\sqrt{4})^{3}=2^{3}=8,
$$

we get

$$
c'(4)=-\\dfrac{500}{8}=-\\dfrac{125}{2}.
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

For $N>0$,

$$
N^{-\\frac{3}{2}}>0.
$$

Multiplying by the negative coefficient $-500$ gives

$$
c'(N)<0
$$

for every $N>0$. The statement is True.`,
      `**D.** → True

The derivative gives the instantaneous change in unit cost per extra cumulative unit. Because

$$
c'(4)=-\\dfrac{125}{2},
$$

the cost falls by approximately $\\dfrac{125}{2}$ euros per extra unit near $N=4$. The negative sign means a reduction. The statement is True.`,
      `**E.** → False

Compare the derivative magnitudes:

$$
|c'(4)|=\\dfrac{125}{2}
$$

and

$$
8^{\\frac{3}{2}}=(\\sqrt{8})^{3}=(2\\sqrt{2})^{3}=8\\cdot 2\\sqrt{2}=16\\sqrt{2},
$$

so

$$
|c'(8)|=500\\cdot 8^{-\\frac{3}{2}}
=
\\dfrac{500}{16\\sqrt{2}}
=
\\dfrac{125}{4\\sqrt{2}}.
$$

The second magnitude is smaller than $\\dfrac{125}{2}$, not twice as large. As cumulative output grows, the derivative magnitude shrinks. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview:
      "Differentiate a negative-power learning curve and interpret a negative derivative as a falling unit cost.",
  },
  {
    id: "math-11-13",
    case_id: "MATH 11.13",
    title: "Tangent line on a revenue curve",
    subsection: "11.1",
    context:
      "A firm's daily revenue is modeled by $R(q)=50q-q^{2}$ euros. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal revenue is $R'(q)=50-2q$.",
      "$R'(20)=10$.",
      "$R(20)=600$.",
      "The tangent line at $q=20$ is $y=600+10(q-20)$.",
      "At $q=20$, the tangent line has negative slope.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Differentiate the quadratic:

$$
R'(q)=50-2q.
$$

That is the correct marginal revenue function, so the statement is True.`,
      `**B.** → True

Substitute $q=20$:

$$
R'(20)=50-40=10.
$$

The statement is True.`,
      `**C.** → True

Compute the point on the curve:

$$
R(20)=50\\cdot 20-20^{2}=1000-400=600.
$$

The statement is True.`,
      `**D.** → True

Use point-slope form with point $(20,600)$ and slope $10$:

$$
y-600=10(q-20).
$$

Hence

$$
y=600+10(q-20).
$$

The tangent equation is correct, so the statement is True.`,
      `**E.** → False

At $q=20$ the slope is

$$
R'(20)=10>0.
$$

So the tangent rises from left to right. It is not negative. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 13,
    solution_overview:
      "Evaluate a derivative and a function at the same point, then assemble the tangent line from those two ingredients.",
  },
  {
    id: "math-11-14",
    case_id: "MATH 11.14",
    title: "Nested chain rule on a reliability score",
    subsection: "11.1",
    context:
      "A machine's reliability score is modeled by $G(x)=(3x^{2}+4)^{5}$ for $x\\geq 0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $G'(x)=30x(3x^{2}+4)^{4}$.",
      "$G'(1)=72030$.",
      "$G''(x)=30(3x^{2}+4)^{3}(27x^{2}+4)$.",
      "$G''(0)=7680$.",
      "$G'(0)=30$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write $G$ as a composition. The outer function is $u^{5}$ and the inner function is

$$
u=3x^{2}+4.
$$

Differentiate the outer power and multiply by the inner derivative:

$$
G'(x)=5(3x^{2}+4)^{4}\\cdot (6x)
=
30x(3x^{2}+4)^{4}.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=1$:

$$
G'(1)=30\\cdot 1\\cdot (3+4)^{4}
=
30\\cdot 7^{4}.
$$

Compute the power carefully:

$$
7^{2}=49,\\qquad 7^{4}=49^{2}=2401.
$$

Therefore

$$
G'(1)=30\\cdot 2401=72030.
$$

The statement is True.`,
      `**C.** → True

Differentiate

$$
G'(x)=30x\\cdot (3x^{2}+4)^{4}
$$

as a product. Let

$$
a(x)=30x,\\qquad b(x)=(3x^{2}+4)^{4}.
$$

Then

$$
a'(x)=30
$$

and, again by the chain rule,

$$
b'(x)=4(3x^{2}+4)^{3}\\cdot 6x
=
24x(3x^{2}+4)^{3}.
$$

So

$$
G''(x)=a'\\cdot b+a\\cdot b'
=
30(3x^{2}+4)^{4}+30x\\cdot 24x(3x^{2}+4)^{3}
$$

$$
=30(3x^{2}+4)^{4}+720x^{2}(3x^{2}+4)^{3}.
$$

Factor out the common $30(3x^{2}+4)^{3}$:

$$
G''(x)=30(3x^{2}+4)^{3}\\Bigl[(3x^{2}+4)+24x^{2}\\Bigr]
=
30(3x^{2}+4)^{3}(27x^{2}+4).
$$

The statement is True.`,
      `**D.** → True

Substitute $x=0$ into the second-derivative formula:

$$
G''(0)=30(4)^{3}(4)
=
30\\cdot 64\\cdot 4
=
7680.
$$

The statement is True.`,
      `**E.** → False

From part A,

$$
G'(0)=30\\cdot 0\\cdot 4^{4}=0,
$$

not $30$. The factor $30x$ forces the derivative to vanish at the origin. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 14,
    solution_overview:
      "Differentiate a nested fifth-power composition carefully, then differentiate the product form again to obtain a fully factored second derivative.",
  },
  {
    id: "math-11-15",
    case_id: "MATH 11.15",
    title: "Second derivative on a cost curve",
    subsection: "11.1",
    context:
      "A delivery firm models total cost by $C(q)=4q^{3}-18q^{2}+40q+100$ euros. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal cost is $C'(q)=12q^{2}-36q+40$.",
      "The second derivative is $C''(q)=24q-36$.",
      "$C''\\left(\\dfrac{3}{2}\\right)=0$.",
      "$C''(1)$ is positive.",
      "$C''(2)$ is positive.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Differentiate term by term:

$$
C'(q)=12q^{2}-36q+40.
$$

The statement is True.`,
      `**B.** → True

Differentiate once more:

$$
C''(q)=24q-36.
$$

The statement is True.`,
      `**C.** → True

Substitute

$$
q=\\dfrac{3}{2}
$$

into the second derivative:

$$
C''\\left(\\dfrac{3}{2}\\right)=24\\cdot \\dfrac{3}{2}-36=36-36=0.
$$

The statement is True.`,
      `**D.** → False

At $q=1$,

$$
C''(1)=24-36=-12.
$$

That is negative, not positive. The statement is False.`,
      `**E.** → True

At $q=2$,

$$
C''(2)=48-36=12.
$$

This value is positive, so the statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 15,
    solution_overview:
      "Compute first and second derivatives of a cubic cost function and evaluate them exactly at named points.",
  },
  {
    id: "math-11-16",
    case_id: "MATH 11.16",
    title: "A quotient-rule complaint index",
    subsection: "11.1",
    context:
      "A service firm models a complaint index by $K(t)=\\dfrac{t+4}{t+1}$ for $t>0$, where $t$ is training time in hours. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $K'(t)=-\\dfrac{3}{(t+1)^{2}}$.",
      "$K'(2)=-\\dfrac{1}{3}$.",
      "The index is decreasing for all $t>0$.",
      "At $t=2$, one extra hour of training changes the index by approximately $-\\dfrac{1}{3}$.",
      "$K''(t)=\\dfrac{6}{(t+1)^{3}}$.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Apply the quotient formula:

$$
K'(t)=\\dfrac{1\\cdot (t+1)-(t+4)\\cdot 1}{(t+1)^{2}}
=
\\dfrac{t+1-t-4}{(t+1)^{2}}
=
-\\dfrac{3}{(t+1)^{2}}.
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate at $t=2$:

$$
K'(2)=-\\dfrac{3}{3^{2}}=-\\dfrac{1}{3}.
$$

The statement is True.`,
      `**C.** → True

For every $t>0$, the denominator $(t+1)^{2}$ is positive. The numerator is the negative constant $-3$. Therefore

$$
K'(t)<0
$$

for all $t>0$, so the function is decreasing. The statement is True.`,
      `**D.** → True

The derivative is the approximate change in the index per extra training hour. Since

$$
K'(2)=-\\dfrac{1}{3},
$$

one extra hour near $t=2$ changes the index by approximately $-\\dfrac{1}{3}$. The statement is True.`,
      `**E.** → True

Differentiate again:

$$
K'(t)=-3(t+1)^{-2}
$$

$$
K''(t)=-3\\cdot (-2)\\cdot (t+1)^{-3}
=
\\dfrac{6}{(t+1)^{3}}.
$$

The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 16,
    solution_overview:
      "Differentiate a simple quotient, use the derivative sign to read monotonicity, and compute the second derivative cleanly.",
  },
  {
    id: "math-11-17",
    case_id: "MATH 11.17",
    title: "Deep chain rule on a packaging safety score",
    subsection: "11.1",
    context:
      "A manufacturer models a packaging safety score by $S(x)=(2x+5)^{4}$, where $x$ is the number of reinforcement layers. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $S'(x)=8(2x+5)^{3}$.",
      "$S'(0)=1000$.",
      "$S''(x)=48(2x+5)^{2}$.",
      "$S''(0)=1200$.",
      "$S'''(x)=192(2x+5)$.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The outer function is the fourth power and the inner function is $2x+5$. Differentiate:

$$
S'(x)=4(2x+5)^{3}\\cdot 2
=
8(2x+5)^{3}.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=0$:

$$
S'(0)=8\\cdot 5^{3}=8\\cdot 125=1000.
$$

The statement is True.`,
      `**C.** → True

Differentiate once more. From

$$
S'(x)=8(2x+5)^{3},
$$

we get

$$
S''(x)=8\\cdot 3(2x+5)^{2}\\cdot 2
=
48(2x+5)^{2}.
$$

The statement is True.`,
      `**D.** → True

Substitute $x=0$:

$$
S''(0)=48\\cdot 5^{2}=48\\cdot 25=1200.
$$

The statement is True.`,
      `**E.** → True

Differentiate the second derivative:

$$
S''(x)=48(2x+5)^{2}
$$

$$
S'''(x)=48\\cdot 2(2x+5)\\cdot 2
=
192(2x+5).
$$

The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 17,
    solution_overview:
      "Apply repeated differentiation to a nested power function and evaluate the first two derivatives exactly.",
  },
  {
    id: "math-11-18",
    case_id: "MATH 11.18",
    title: "Hard product of a polynomial and a logarithm",
    subsection: "11.1",
    context:
      "A digital platform models an engagement index by $E(t)=t\\cdot \\ln(t+1)$ for $t>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $E'(t)=\\ln(t+1)+\\dfrac{t}{t+1}$.",
      "$E'(1)=\\ln 2+\\dfrac{1}{2}$.",
      "$E''(t)=\\dfrac{1}{t+1}+\\dfrac{1}{(t+1)^{2}}$.",
      "$E''(1)=\\dfrac{3}{4}$.",
      "The statement $E'(t)=\\ln(t+1)+1$ is correct.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write $E(t)=u(t)\\cdot v(t)$ with

$$
u(t)=t,\\qquad v(t)=\\ln(t+1).
$$

Then

$$
u'(t)=1,\\qquad v'(t)=\\dfrac{1}{t+1}.
$$

Hence

$$
E'(t)=1\\cdot \\ln(t+1)+t\\cdot \\dfrac{1}{t+1}
=
\\ln(t+1)+\\dfrac{t}{t+1}.
$$

The statement is True.`,
      `**B.** → True

Substitute $t=1$:

$$
E'(1)=\\ln 2+\\dfrac{1}{2}.
$$

The statement is True.`,
      `**C.** → True

Differentiate

$$
E'(t)=\\ln(t+1)+t(t+1)^{-1}
$$

term by term. The logarithmic term contributes

$$
\\dfrac{1}{t+1}.
$$

For the second term, use the product formula again:

$$
\\dfrac{d}{dt}\\bigl(t(t+1)^{-1}\\bigr)
=
1\\cdot (t+1)^{-1}+t\\cdot (-1)(t+1)^{-2}
=
\\dfrac{1}{t+1}-\\dfrac{t}{(t+1)^{2}}.
$$

Combine those two fractions:

$$
\\dfrac{1}{t+1}-\\dfrac{t}{(t+1)^{2}}
=
\\dfrac{t+1-t}{(t+1)^{2}}
=
\\dfrac{1}{(t+1)^{2}}.
$$

Adding the logarithmic contribution finally gives

$$
E''(t)=\\dfrac{1}{t+1}+\\dfrac{1}{(t+1)^{2}}.
$$

The statement is True.`,
      `**D.** → True

Substitute $t=1$:

$$
E''(1)=\\dfrac{1}{2}+\\dfrac{1}{4}=\\dfrac{3}{4}.
$$

The statement is True.`,
      `**E.** → False

The correct derivative is

$$
\\ln(t+1)+\\dfrac{t}{t+1},
$$

not

$$
\\ln(t+1)+1.
$$

The second summand depends on $t$ through the factor $\\dfrac{t}{t+1}$. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 18,
    solution_overview:
      "Differentiate a product involving a logarithm, then differentiate again carefully to obtain an exact second-derivative formula.",
  },
  {
    id: "math-11-19",
    case_id: "MATH 11.19",
    title: "A hard ratio with a square root in the denominator",
    subsection: "11.1",
    context:
      "A processing index is modeled by $M(x)=\\dfrac{x^{2}+1}{\\sqrt{x+3}}$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "Rewriting gives $M(x)=(x^{2}+1)\\cdot (x+3)^{-\\frac{1}{2}}$.",
      "The derivative is $M'(x)=\\dfrac{3x^{2}+12x-1}{2(x+3)^{\\frac{3}{2}}}$.",
      "$M'(1)=\\dfrac{7}{8}$.",
      "$M'(1)=\\dfrac{13}{8}$.",
      "The derivative is a constant.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Rewrite the square-root denominator as a negative power:

$$
M(x)=\\dfrac{x^{2}+1}{\\sqrt{x+3}}
=
(x^{2}+1)\\cdot (x+3)^{-\\frac{1}{2}}.
$$

The statement is True.`,
      `**B.** → True

Differentiate the rewritten product. Let

$$
u=x^{2}+1,\\qquad v=(x+3)^{-\\frac{1}{2}}.
$$

Then

$$
u'=2x
$$

and

$$
v'=-\\dfrac{1}{2}(x+3)^{-\\frac{3}{2}}.
$$

So

$$
M'(x)=2x\\cdot (x+3)^{-\\frac{1}{2}}+(x^{2}+1)\\cdot \\left(-\\dfrac{1}{2}\\right)(x+3)^{-\\frac{3}{2}}
$$

$$
=2x(x+3)^{-\\frac{1}{2}}-\\dfrac{1}{2}(x^{2}+1)(x+3)^{-\\frac{3}{2}}.
$$

Put both terms over the common denominator $2(x+3)^{3/2}$:

$$
M'(x)=\\dfrac{2\\cdot 2x\\cdot (x+3)-(x^{2}+1)}{2(x+3)^{\\frac{3}{2}}}
=
\\dfrac{4x(x+3)-(x^{2}+1)}{2(x+3)^{\\frac{3}{2}}}.
$$

Expand the numerator:

$$
4x(x+3)-(x^{2}+1)=4x^{2}+12x-x^{2}-1=3x^{2}+12x-1.
$$

Therefore

$$
M'(x)=\\dfrac{3x^{2}+12x-1}{2(x+3)^{\\frac{3}{2}}}.
$$

The statement is True.`,
      `**C.** → True

Substitute $x=1$:

$$
M'(1)=\\dfrac{3+12-1}{2\\cdot 4^{\\frac{3}{2}}}
=
\\dfrac{14}{2\\cdot 8}
=
\\dfrac{14}{16}
=
\\dfrac{7}{8}.
$$

(The identity $4^{3/2}=(\\sqrt{4})^{3}=2^{3}=8$ was used.) The statement is True.`,
      `**D.** → False

Part C already shows

$$
M'(1)=\\dfrac{7}{8},
$$

so the claim $\\dfrac{13}{8}$ is wrong. The statement is False.`,
      `**E.** → False

The simplified derivative

$$
\\dfrac{3x^{2}+12x-1}{2(x+3)^{\\frac{3}{2}}}
$$

clearly depends on $x$. It is not constant. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 19,
    solution_overview:
      "Rewrite a quotient with a square-root denominator as a product, differentiate carefully, and combine into one exact fractional formula before evaluating.",
  },
  {
    id: "math-11-20",
    case_id: "MATH 11.20",
    title: "A hard mixed composition on a performance index",
    subsection: "11.1",
    context:
      "A firm models a performance index by $F(t)=(t^{2}+1)\\cdot \\ln(t+1)$ for $t>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $F'(t)=2t\\cdot \\ln(t+1)+\\dfrac{t^{2}+1}{t+1}$.",
      "$F'(1)=2\\ln 2+1$.",
      "$F''(t)=2\\ln(t+1)+\\dfrac{4t}{t+1}-\\dfrac{t^{2}+1}{(t+1)^{2}}$.",
      "$F''(1)=2\\ln 2+\\dfrac{3}{2}$.",
      "The expression $F'(t)=2t+\\dfrac{t^{2}+1}{t+1}$ is correct.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write

$$
F(t)=u(t)\\cdot v(t)
$$

with

$$
u(t)=t^{2}+1,\\qquad v(t)=\\ln(t+1).
$$

Then

$$
u'(t)=2t,\\qquad v'(t)=\\dfrac{1}{t+1}.
$$

Therefore

$$
F'(t)=2t\\cdot \\ln(t+1)+(t^{2}+1)\\cdot \\dfrac{1}{t+1}
=
2t\\cdot \\ln(t+1)+\\dfrac{t^{2}+1}{t+1}.
$$

The statement is True.`,
      `**B.** → True

Substitute $t=1$:

$$
F'(1)=2\\cdot 1\\cdot \\ln 2+\\dfrac{1+1}{2}
=
2\\ln 2+1.
$$

The statement is True.`,
      `**C.** → True

Differentiate

$$
F'(t)=2t\\cdot \\ln(t+1)+(t^{2}+1)(t+1)^{-1}
$$

term by term.

First term: another product. With factors $2t$ and $\\ln(t+1)$,

$$
\\dfrac{d}{dt}\\bigl(2t\\cdot \\ln(t+1)\\bigr)
=
2\\cdot \\ln(t+1)+2t\\cdot \\dfrac{1}{t+1}
=
2\\ln(t+1)+\\dfrac{2t}{t+1}.
$$

Second term: another product. With factors $t^{2}+1$ and $(t+1)^{-1}$,

$$
\\dfrac{d}{dt}\\bigl((t^{2}+1)(t+1)^{-1}\\bigr)
=
2t(t+1)^{-1}+(t^{2}+1)\\cdot (-1)(t+1)^{-2}
=
\\dfrac{2t}{t+1}-\\dfrac{t^{2}+1}{(t+1)^{2}}.
$$

Add the two contributions:

$$
F''(t)=2\\ln(t+1)+\\dfrac{2t}{t+1}+\\dfrac{2t}{t+1}-\\dfrac{t^{2}+1}{(t+1)^{2}}
=
2\\ln(t+1)+\\dfrac{4t}{t+1}-\\dfrac{t^{2}+1}{(t+1)^{2}}.
$$

The statement is True.`,
      `**D.** → True

Substitute $t=1$:

$$
F''(1)=2\\ln 2+\\dfrac{4}{2}-\\dfrac{2}{4}
=
2\\ln 2+2-\\dfrac{1}{2}
=
2\\ln 2+\\dfrac{3}{2}.
$$

The statement is True.`,
      `**E.** → False

The proposed formula drops the factor $\\ln(t+1)$ from the first product-rule term. The correct first term is $2t\\cdot \\ln(t+1)$, not simply $2t$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 20,
    solution_overview:
      "Differentiate a polynomial-logarithm product fully, then differentiate again to obtain an exact second-derivative formula and evaluate it.",
  },
  {
    id: "math-11-21",
    case_id: "MATH 11.21",
    title: "A short cubic profit check",
    subsection: "11.1",
    context:
      "Daily profit (in euros) follows $\\pi(q)=-q^{3}+12q^{2}-21q$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$\\pi'(q)=-3q^{2}+24q-21$.",
      "$\\pi'(1)=0$.",
      "$\\pi''(q)=-6q+24$.",
      "$\\pi''(3)=0$.",
      "At $q=1$ the tangent slope is strictly positive.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Differentiate term by term:

$$
\\pi'(q)=-3q^{2}+24q-21.
$$

The claim matches, so the statement is True.`,
      `**B.** → True

$$
\\pi'(1)=-3+24-21=0.
$$

The statement is True.`,
      `**C.** → True

One more derivative gives

$$
\\pi''(q)=-6q+24.
$$

The statement is True.`,
      `**D.** → False

$$
\\pi''(3)=-18+24=6\\neq 0.
$$

The statement is False.`,
      `**E.** → False

From part B the slope at $q=1$ is exactly zero, not strictly positive. The statement is False.`,
    ],
    difficulty_level: "1/5",
    sort_order: 21,
    solution_overview:
      "Differentiate a cubic profit function twice and evaluate the first two derivatives at named outputs.",
  },
  {
    id: "math-11-22",
    case_id: "MATH 11.22",
    title: "Straight-line shipping cost",
    subsection: "11.1",
    context:
      "Shipping cost is $C(q)=45+9q$ euros for $q$ parcels. For each line, mark TRUE or FALSE.",
    statements: [
      "Marginal cost is the constant $C'(q)=9$.",
      "$C'(20)=9$.",
      "Average cost equals marginal cost for every $q>0$.",
      "The tangent to $C$ at $q=10$ is $y=45+9q$.",
      "$C''(q)=0$ for all $q$.",
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

A linear cost has constant slope:

$$
C'(q)=9.
$$

The statement is True.`,
      `**B.** → True

The derivative does not depend on $q$, so $C'(20)=9$ as well. The statement is True.`,
      `**C.** → False

Average cost is

$$
\\dfrac{C(q)}{q}=\\dfrac{45}{q}+9,
$$

which equals $9$ only in the limit as $q\\to\\infty$, not for every finite $q>0$. The statement is False.`,
      `**D.** → True

Because $C$ is already linear with slope $9$ and intercept $45$, its graph coincides with that tangent line everywhere:

$$
y=45+9q.
$$

The statement is True.`,
      `**E.** → True

The second derivative of a linear function is zero:

$$
C''(q)=0.
$$

The statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 22,
    solution_overview:
      "Read off the constant marginal cost of a linear schedule and contrast it with average cost.",
  },
  {
    id: "math-11-23",
    case_id: "MATH 11.23",
    title: "Labour with a five-halves power",
    subsection: "11.1",
    context:
      "Output is $Q(L)=4L^{\\frac{5}{2}}$ for $L>0$. Judge every assertion below.",
    statements: [
      "$Q'(L)=10L^{\\frac{3}{2}}$.",
      "$Q'(1)=10$.",
      "$Q'(4)=80$.",
      "$Q''(L)=15L^{\\frac{1}{2}}$.",
      "$Q'(L)$ falls as $L$ rises.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
Q'(L)=4\\cdot \\dfrac{5}{2}L^{\\frac{3}{2}}
=
10L^{\\frac{3}{2}}.
$$

The statement is True.`,
      `**B.** → True

$$
Q'(1)=10\\cdot 1^{\\frac{3}{2}}=10.
$$

The statement is True.`,
      `**C.** → True

$$
Q'(4)=10\\cdot 4^{\\frac{3}{2}}
=
10\\cdot (\\sqrt{4})^{3}
=
10\\cdot 8
=
80.
$$

The statement is True.`,
      `**D.** → True

$$
Q''(L)=10\\cdot \\dfrac{3}{2}L^{\\frac{1}{2}}
=
15L^{\\frac{1}{2}}.
$$

The statement is True.`,
      `**E.** → False

Because the exponent $\\frac{3}{2}$ is positive, $Q'(L)$ increases with $L$. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 23,
    solution_overview:
      "Apply the power rule twice to a five-halves production function and evaluate at convenient labour levels.",
  },
  {
    id: "math-11-24",
    case_id: "MATH 11.24",
    title: "Ticket revenue under a linear fare",
    subsection: "11.1",
    context:
      "A venue charges $p(q)=60-\\dfrac{1}{2}q$ euros per ticket and sells $q$ tickets, so revenue is $R(q)=q\\cdot p(q)$. Which of the following hold?",
    statements: [
      "$R(q)=60q-\\dfrac{1}{2}q^{2}$.",
      "$R'(q)=60-q$.",
      "$R'(20)=40$.",
      "$R'(q)=p(q)$ at every $q$.",
      "The tangent to $R$ at $q=20$ is $y=1000+40(q-20)$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$
R(q)=q\\cdot\\left(60-\\dfrac{1}{2}q\\right)=60q-\\dfrac{1}{2}q^{2}.
$$

The statement is True.`,
      `**B.** → True

$$
R'(q)=60-q.
$$

The statement is True.`,
      `**C.** → True

$$
R'(20)=60-20=40.
$$

The statement is True.`,
      `**D.** → False

Price itself is $p(q)=60-\\dfrac{1}{2}q$, while $R'(q)=60-q$. These agree only at isolated points, not for every $q$. The statement is False.`,
      `**E.** → True

$$
R(20)=60\\cdot 20-\\dfrac{1}{2}\\cdot 400=1200-200=1000,
$$

so the tangent is

$$
y=1000+40(q-20).
$$

The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 24,
    solution_overview:
      "Form revenue from a linear fare schedule, differentiate it, and write the tangent at a named sales level.",
  },
  {
    id: "math-11-25",
    case_id: "MATH 11.25",
    title: "Call-centre delay and its curvature",
    subsection: "11.1",
    context:
      "Mean delay (minutes) is $D(n)=\\dfrac{36}{n+2}$ when $n>0$ agents are staffed. Decide TRUE or FALSE for each claim.",
    statements: [
      "$D'(n)=-\\dfrac{36}{(n+2)^{2}}$.",
      "$D'(1)=-4$.",
      "$D''(n)=\\dfrac{72}{(n+2)^{3}}$.",
      "$D'(n)>0$ for all $n>0$.",
      "Near $n=1$, one extra agent cuts delay by about $4$ minutes.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite $D(n)=36(n+2)^{-1}$. Then

$$
D'(n)=36\\cdot(-1)\\cdot(n+2)^{-2}
=
-\\dfrac{36}{(n+2)^{2}}.
$$

The statement is True.`,
      `**B.** → True

$$
D'(1)=-\\dfrac{36}{9}=-4.
$$

The statement is True.`,
      `**C.** → True

$$
D''(n)=-36\\cdot(-2)\\cdot(n+2)^{-3}
=
\\dfrac{72}{(n+2)^{3}}.
$$

The statement is True.`,
      `**D.** → False

The first derivative is negative for every $n>0$. The statement is False.`,
      `**E.** → True

$D'(1)=-4$ means an approximate drop of $4$ minutes per extra agent near $n=1$. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 25,
    solution_overview:
      "Differentiate a reciprocal delay model twice and interpret the sign of the first derivative.",
  },
  {
    id: "math-11-26",
    case_id: "MATH 11.26",
    title: "Decaying response with a linear factor",
    subsection: "11.1",
    context:
      "A response score is $S(x)=x\\cdot e^{-2x}$ for $x>0$. Judge every assertion below.",
    statements: [
      "$S'(x)=e^{-2x}\\cdot(1-2x)$.",
      "$S'\\left(\\dfrac{1}{2}\\right)=0$.",
      "$S''(x)=e^{-2x}\\cdot(4x-4)$.",
      "$S'(0)=1$.",
      "$S'(1)=e^{-2}$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

With $u=x$ and $v=e^{-2x}$,

$$
u'=1,\\qquad v'=-2e^{-2x},
$$

so

$$
S'(x)=e^{-2x}+x\\cdot(-2e^{-2x})
=
e^{-2x}(1-2x).
$$

The statement is True.`,
      `**B.** → True

$$
S'\\left(\\dfrac{1}{2}\\right)=e^{-1}\\cdot(1-1)=0.
$$

The statement is True.`,
      `**C.** → True

Differentiate $S'(x)=e^{-2x}(1-2x)$ as a product:

$$
S''(x)=(-2e^{-2x})(1-2x)+e^{-2x}(-2)
=
e^{-2x}(-2+4x-2)
=
e^{-2x}(4x-4).
$$

The statement is True.`,
      `**D.** → True

$$
S'(0)=e^{0}(1-0)=1.
$$

The statement is True.`,
      `**E.** → False

$$
S'(1)=e^{-2}(1-2)=-e^{-2},
$$

not $+e^{-2}$. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview:
      "Differentiate an exponential-linear product twice and evaluate the critical point carefully.",
  },
  {
    id: "math-11-27",
    case_id: "MATH 11.27",
    title: "Square-root reach of a campaign",
    subsection: "11.1",
    context:
      "Expected reach is $R(a)=5\\sqrt{4a+9}$ contacts when advertising intensity is $a\\geq 0$. For each claim, mark TRUE or FALSE.",
    statements: [
      "$R'(a)=\\dfrac{10}{\\sqrt{4a+9}}$.",
      "$R'(0)=\\dfrac{10}{3}$.",
      "$R''(a)=-\\dfrac{20}{(4a+9)^{\\frac{3}{2}}}$.",
      "$R'(4)=2$.",
      "$R'(a)$ grows without bound as $a$ grows.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
R(a)=5(4a+9)^{\\frac{1}{2}},
$$

$$
R'(a)=5\\cdot\\dfrac{1}{2}(4a+9)^{-\\frac{1}{2}}\\cdot 4
=
\\dfrac{10}{\\sqrt{4a+9}}.
$$

The statement is True.`,
      `**B.** → True

$$
R'(0)=\\dfrac{10}{3}.
$$

The statement is True.`,
      `**C.** → True

$$
R'(a)=10(4a+9)^{-\\frac{1}{2}},
$$

$$
R''(a)=10\\cdot\\left(-\\dfrac{1}{2}\\right)(4a+9)^{-\\frac{3}{2}}\\cdot 4
=
-20(4a+9)^{-\\frac{3}{2}}
=
-\\dfrac{20}{(4a+9)^{\\frac{3}{2}}}.
$$

The statement is True.`,
      `**D.** → True

$$
R'(4)=\\dfrac{10}{\\sqrt{16+9}}=\\dfrac{10}{5}=2.
$$

The statement is True.`,
      `**E.** → False

As $a\\to\\infty$, the denominator $\\sqrt{4a+9}$ grows, so $R'(a)\\to 0$. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview:
      "Differentiate a scaled square-root reach function, obtain the second derivative, and track the long-run behaviour of the first derivative.",
  },
  {
    id: "math-11-28",
    case_id: "MATH 11.28",
    title: "Study utility with a log and a linear penalty",
    subsection: "11.1",
    context:
      "Utility is $U(t)=30\\cdot\\ln(2t+1)-4t$ for study hours $t>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$U'(t)=\\dfrac{60}{2t+1}-4$.",
      "$U'(2)=8$.",
      "$U''(t)=-\\dfrac{120}{(2t+1)^{2}}$.",
      "$U'(0)=56$.",
      "$U'(t)=0$ at $t=\\dfrac{7}{2}$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
\\dfrac{d}{dt}\\ln(2t+1)=\\dfrac{1}{2t+1}\\cdot 2=\\dfrac{2}{2t+1},
$$

hence

$$
U'(t)=30\\cdot\\dfrac{2}{2t+1}-4
=
\\dfrac{60}{2t+1}-4.
$$

The statement is True.`,
      `**B.** → True

$$
U'(2)=\\dfrac{60}{5}-4=12-4=8.
$$

The statement is True.`,
      `**C.** → True

$$
U'(t)=60(2t+1)^{-1}-4,
$$

$$
U''(t)=60\\cdot(-1)\\cdot(2t+1)^{-2}\\cdot 2
=
-\\dfrac{120}{(2t+1)^{2}}.
$$

The statement is True.`,
      `**D.** → True

$$
U'(0)=\\dfrac{60}{1}-4=56.
$$

The statement is True.`,
      `**E.** → False

Set $U'(t)=0$:

$$
\\dfrac{60}{2t+1}=4
\\Rightarrow
2t+1=15
\\Rightarrow
t=7.
$$

The critical point is $t=7$, not $t=\\dfrac{7}{2}$. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview:
      "Differentiate a log-linear utility, compute the second derivative, and solve for the stationary study time.",
  },
  {
    id: "math-11-29",
    case_id: "MATH 11.29",
    title: "Nested fifth power on a quality index",
    subsection: "11.1",
    context:
      "A quality index is $G(x)=(4x+1)^{5}$. Judge every assertion below.",
    statements: [
      "$G'(x)=20(4x+1)^{4}$.",
      "$G'(0)=20$.",
      "$G''(x)=320(4x+1)^{3}$.",
      "$G''(0)=320$.",
      "$G'(1)=20\\cdot 5^{4}$.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Outer power $u^{5}$ with inner $u=4x+1$:

$$
G'(x)=5(4x+1)^{4}\\cdot 4
=
20(4x+1)^{4}.
$$

The statement is True.`,
      `**B.** → True

$$
G'(0)=20\\cdot 1^{4}=20.
$$

The statement is True.`,
      `**C.** → True

$$
G''(x)=20\\cdot 4(4x+1)^{3}\\cdot 4
=
320(4x+1)^{3}.
$$

The statement is True.`,
      `**D.** → True

$$
G''(0)=320\\cdot 1=320.
$$

The statement is True.`,
      `**E.** → True

$$
G'(1)=20(4+1)^{4}=20\\cdot 5^{4}.
$$

The statement is True.`,
    ],
    difficulty_level: "4/5",
    sort_order: 29,
    solution_overview:
      "Differentiate a nested fifth-power quality index twice and evaluate both derivatives at the origin and at $x=1$.",
  },
  {
    id: "math-11-30",
    case_id: "MATH 11.30",
    title: "Product of a square and a nested root",
    subsection: "11.1",
    context:
      "A productivity index is $P(x)=x^{2}\\cdot\\sqrt{3x+1}$ for $x>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$P'(x)=2x\\sqrt{3x+1}+\\dfrac{3x^{2}}{2\\sqrt{3x+1}}$.",
      "$P'(x)=\\dfrac{15x^{2}+4x}{2\\sqrt{3x+1}}$ after clearing the common denominator.",
      "$P'(1)=\\dfrac{19}{4}$.",
      "$P'(0)=0$.",
      "$P'(1)=\\dfrac{15}{2}$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write $P(x)=x^{2}(3x+1)^{\\frac{1}{2}}$. Then

$$
P'(x)=2x(3x+1)^{\\frac{1}{2}}+x^{2}\\cdot\\dfrac{1}{2}(3x+1)^{-\\frac{1}{2}}\\cdot 3
=
2x\\sqrt{3x+1}+\\dfrac{3x^{2}}{2\\sqrt{3x+1}}.
$$

The statement is True.`,
      `**B.** → True

Over the common denominator $2\\sqrt{3x+1}$,

$$
P'(x)=\\dfrac{4x(3x+1)+3x^{2}}{2\\sqrt{3x+1}}
=
\\dfrac{12x^{2}+4x+3x^{2}}{2\\sqrt{3x+1}}
=
\\dfrac{15x^{2}+4x}{2\\sqrt{3x+1}}.
$$

The statement is True.`,
      `**C.** → True

$$
P'(1)=\\dfrac{15+4}{2\\sqrt{4}}
=
\\dfrac{19}{4}.
$$

The statement is True.`,
      `**D.** → True

The numerator factor $x$ forces $P'(0)=0$. The statement is True.`,
      `**E.** → False

Part C already gives $\\dfrac{19}{4}$, not $\\dfrac{15}{2}$. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 30,
    solution_overview:
      "Differentiate a square-root product, combine into one fraction, and evaluate at convenient points.",
  },
  {
    id: "math-11-31",
    case_id: "MATH 11.31",
    title: "Cubed numerator over a linear denominator",
    subsection: "11.1",
    context:
      "An intensity ratio is $K(x)=\\dfrac{(2x-1)^{3}}{x+4}$ for $x>0$. Which of the following hold?",
    statements: [
      "$K'(x)=\\dfrac{6(2x-1)^{2}(x+4)-(2x-1)^{3}}{(x+4)^{2}}$.",
      "$K'(x)=\\dfrac{(2x-1)^{2}(4x+25)}{(x+4)^{2}}$ after factoring.",
      "$K'(1)=\\dfrac{29}{25}$.",
      "$K'\\left(\\dfrac{1}{2}\\right)=0$.",
      "$K'(1)=\\dfrac{7}{5}$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $u=(2x-1)^{3}$ and $v=x+4$. Then

$$
u'=3(2x-1)^{2}\\cdot 2=6(2x-1)^{2},\\qquad v'=1,
$$

so

$$
K'(x)=\\dfrac{u'v-uv'}{v^{2}}
=
\\dfrac{6(2x-1)^{2}(x+4)-(2x-1)^{3}}{(x+4)^{2}}.
$$

The statement is True.`,
      `**B.** → True

Factor $(2x-1)^{2}$ from the numerator:

$$
(2x-1)^{2}\\bigl(6(x+4)-(2x-1)\\bigr)
=
(2x-1)^{2}(6x+24-2x+1)
=
(2x-1)^{2}(4x+25).
$$

Hence

$$
K'(x)=\\dfrac{(2x-1)^{2}(4x+25)}{(x+4)^{2}}.
$$

The statement is True.`,
      `**C.** → True

$$
K'(1)=\\dfrac{1^{2}\\cdot(4+25)}{5^{2}}=\\dfrac{29}{25}.
$$

The statement is True.`,
      `**D.** → True

At $x=\\dfrac{1}{2}$ one has $2x-1=0$, so the factored numerator vanishes and $K'\\left(\\dfrac{1}{2}\\right)=0$. The statement is True.`,
      `**E.** → False

Part C shows $K'(1)=\\dfrac{29}{25}$, not $\\dfrac{7}{5}=\\dfrac{35}{25}$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 31,
    solution_overview:
      "Differentiate a cubed-over-linear quotient, factor the numerator carefully, and evaluate.",
  },
  {
    id: "math-11-32",
    case_id: "MATH 11.32",
    title: "Logarithm of a quadratic argument",
    subsection: "11.1",
    context:
      "A saturation index is $L(x)=\\ln(x^{2}+9)$ for all real $x$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$L'(x)=\\dfrac{2x}{x^{2}+9}$.",
      "$L'(3)=\\dfrac{1}{3}$.",
      "$L''(x)=\\dfrac{18-2x^{2}}{(x^{2}+9)^{2}}$.",
      "$L''(0)=\\dfrac{2}{9}$.",
      "$L'(0)=1$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
L'(x)=\\dfrac{1}{x^{2}+9}\\cdot 2x
=
\\dfrac{2x}{x^{2}+9}.
$$

The statement is True.`,
      `**B.** → True

$$
L'(3)=\\dfrac{6}{9+9}=\\dfrac{6}{18}=\\dfrac{1}{3}.
$$

The statement is True.`,
      `**C.** → True

Differentiate the quotient $\\dfrac{2x}{x^{2}+9}$:

$$
L''(x)=\\dfrac{2(x^{2}+9)-2x\\cdot 2x}{(x^{2}+9)^{2}}
=
\\dfrac{2x^{2}+18-4x^{2}}{(x^{2}+9)^{2}}
=
\\dfrac{18-2x^{2}}{(x^{2}+9)^{2}}.
$$

The statement is True.`,
      `**D.** → True

$$
L''(0)=\\dfrac{18}{81}=\\dfrac{2}{9}.
$$

The statement is True.`,
      `**E.** → False

$$
L'(0)=\\dfrac{0}{9}=0,
$$

not $1$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 32,
    solution_overview:
      "Differentiate $\\ln$ of a quadratic twice, simplify the second derivative into one fraction, and evaluate.",
  },
  {
    id: "math-11-33",
    case_id: "MATH 11.33",
    title: "Three-halves power of a quadratic",
    subsection: "11.1",
    context:
      "A growth score is $M(x)=(x^{2}+1)^{\\frac{3}{2}}$. Judge every assertion below.",
    statements: [
      "$M'(x)=3x\\sqrt{x^{2}+1}$.",
      "$M'(0)=0$.",
      "$M''(x)=\\dfrac{6x^{2}+3}{\\sqrt{x^{2}+1}}$.",
      "$M''(0)=3$.",
      "$M'(1)=3$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
M'(x)=\\dfrac{3}{2}(x^{2}+1)^{\\frac{1}{2}}\\cdot 2x
=
3x(x^{2}+1)^{\\frac{1}{2}}
=
3x\\sqrt{x^{2}+1}.
$$

The statement is True.`,
      `**B.** → True

The factor $x$ forces $M'(0)=0$. The statement is True.`,
      `**C.** → True

Differentiate $M'(x)=3x(x^{2}+1)^{\\frac{1}{2}}$ as a product:

$$
M''(x)=3(x^{2}+1)^{\\frac{1}{2}}+3x\\cdot\\dfrac{1}{2}(x^{2}+1)^{-\\frac{1}{2}}\\cdot 2x
=
3\\sqrt{x^{2}+1}+\\dfrac{3x^{2}}{\\sqrt{x^{2}+1}}
=
\\dfrac{3(x^{2}+1)+3x^{2}}{\\sqrt{x^{2}+1}}
=
\\dfrac{6x^{2}+3}{\\sqrt{x^{2}+1}}.
$$

The statement is True.`,
      `**D.** → True

$$
M''(0)=\\dfrac{3}{1}=3.
$$

The statement is True.`,
      `**E.** → False

$$
M'(1)=3\\sqrt{2},
$$

not $3$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 33,
    solution_overview:
      "Differentiate a three-halves nested power twice and combine the second derivative over one radical denominator.",
  },
  {
    id: "math-11-34",
    case_id: "MATH 11.34",
    title: "Exponential times a quadratic",
    subsection: "11.1",
    context:
      "A momentum index is $F(x)=e^{3x}\\cdot(x^{2}+1)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$F'(x)=e^{3x}\\cdot(3x^{2}+2x+3)$.",
      "$F'(0)=3$.",
      "$F''(x)=e^{3x}\\cdot(9x^{2}+12x+11)$.",
      "$F''(0)=11$.",
      "$F'(0)=1$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$
F'(x)=3e^{3x}(x^{2}+1)+e^{3x}\\cdot 2x
=
e^{3x}(3x^{2}+3+2x)
=
e^{3x}(3x^{2}+2x+3).
$$

The statement is True.`,
      `**B.** → True

$$
F'(0)=e^{0}(0+0+3)=3.
$$

The statement is True.`,
      `**C.** → True

Differentiate $F'(x)=e^{3x}(3x^{2}+2x+3)$ again:

$$
F''(x)=3e^{3x}(3x^{2}+2x+3)+e^{3x}(6x+2)
=
e^{3x}(9x^{2}+6x+9+6x+2)
=
e^{3x}(9x^{2}+12x+11).
$$

The statement is True.`,
      `**D.** → True

$$
F''(0)=1\\cdot 11=11.
$$

The statement is True.`,
      `**E.** → False

Part B already shows $F'(0)=3$, not $1$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 34,
    solution_overview:
      "Differentiate an exponential-quadratic product twice, factoring $e^{3x}$ at each step.",
  },
  {
    id: "math-11-35",
    case_id: "MATH 11.35",
    title: "Square root of a linear ratio",
    subsection: "11.1",
    context:
      "A balance index is $H(x)=\\sqrt{\\dfrac{2x+1}{x+5}}$ for $x>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$H'(x)=\\dfrac{9}{2\\sqrt{2x+1}\\,(x+5)^{\\frac{3}{2}}}$.",
      "$H'(2)=\\dfrac{9}{2\\sqrt{5}\\cdot 7^{\\frac{3}{2}}}$.",
      "$H(x)=(2x+1)^{\\frac{1}{2}}(x+5)^{-\\frac{1}{2}}$.",
      "$H'(x)<0$ for every $x>0$.",
      "$H'(2)=\\dfrac{9}{70}$.",
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Rewrite

$$
H(x)=(2x+1)^{\\frac{1}{2}}(x+5)^{-\\frac{1}{2}}.
$$

Differentiate as a product:

$$
H'(x)=\\dfrac{1}{2}(2x+1)^{-\\frac{1}{2}}\\cdot 2\\cdot(x+5)^{-\\frac{1}{2}}
+(2x+1)^{\\frac{1}{2}}\\left(-\\dfrac{1}{2}\\right)(x+5)^{-\\frac{3}{2}}
$$

$$
=(2x+1)^{-\\frac{1}{2}}(x+5)^{-\\frac{1}{2}}
-\\dfrac{1}{2}(2x+1)^{\\frac{1}{2}}(x+5)^{-\\frac{3}{2}}.
$$

Factor $\\dfrac{1}{2}(2x+1)^{-\\frac{1}{2}}(x+5)^{-\\frac{3}{2}}$:

$$
H'(x)=\\dfrac{1}{2}(2x+1)^{-\\frac{1}{2}}(x+5)^{-\\frac{3}{2}}
\\bigl(2(x+5)-(2x+1)\\bigr)
=
\\dfrac{9}{2}(2x+1)^{-\\frac{1}{2}}(x+5)^{-\\frac{3}{2}}
=
\\dfrac{9}{2\\sqrt{2x+1}\\,(x+5)^{\\frac{3}{2}}}.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=2$:

$$
H'(2)=\\dfrac{9}{2\\sqrt{5}\\cdot 7^{\\frac{3}{2}}}.
$$

The statement is True.`,
      `**C.** → True

This is exactly the power rewrite used in part A. The statement is True.`,
      `**D.** → False

The numerator factor $9$ is positive and the remaining factors are positive for $x>0$, so $H'(x)>0$. The statement is False.`,
      `**E.** → False

The value $\\dfrac{9}{70}$ would match a different algebraic simplification that drops the radical weights. From part B the exact value still contains $\\sqrt{5}$ and $7^{3/2}$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 35,
    solution_overview:
      "Rewrite a nested root ratio as a product of powers, differentiate carefully, and compare candidate simplified values.",
  },
  {
    id: "math-11-36",
    case_id: "MATH 11.36",
    title: "Normalised linear over a root",
    subsection: "11.1",
    context:
      "A normalised score is $N(x)=\\dfrac{x}{\\sqrt{x^{2}+4}}$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$N'(x)=\\dfrac{4}{(x^{2}+4)^{\\frac{3}{2}}}$.",
      "$N'(0)=\\dfrac{1}{2}$.",
      "$N'(2)=\\dfrac{1}{4\\sqrt{2}}$.",
      "$N'(x)$ changes sign at $x=0$.",
      "$N'(1)=\\dfrac{4}{5^{\\frac{3}{2}}}$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite $N(x)=x(x^{2}+4)^{-\\frac{1}{2}}$. Then

$$
N'(x)=(x^{2}+4)^{-\\frac{1}{2}}+x\\left(-\\dfrac{1}{2}\\right)(x^{2}+4)^{-\\frac{3}{2}}\\cdot 2x
=
(x^{2}+4)^{-\\frac{1}{2}}-x^{2}(x^{2}+4)^{-\\frac{3}{2}}
$$

$$
=\\dfrac{(x^{2}+4)-x^{2}}{(x^{2}+4)^{\\frac{3}{2}}}
=
\\dfrac{4}{(x^{2}+4)^{\\frac{3}{2}}}.
$$

The statement is True.`,
      `**B.** → True

$$
N'(0)=\\dfrac{4}{4^{\\frac{3}{2}}}=\\dfrac{4}{8}=\\dfrac{1}{2}.
$$

The statement is True.`,
      `**C.** → True

$$
N'(2)=\\dfrac{4}{(4+4)^{\\frac{3}{2}}}=\\dfrac{4}{8^{\\frac{3}{2}}}.
$$

Since $8^{\\frac{1}{2}}=2\\sqrt{2}$ and $8^{\\frac{3}{2}}=(2\\sqrt{2})^{3}=8\\cdot 2\\sqrt{2}=16\\sqrt{2}$,

$$
N'(2)=\\dfrac{4}{16\\sqrt{2}}=\\dfrac{1}{4\\sqrt{2}}.
$$

The statement is True.`,
      `**D.** → False

The simplified derivative $\\dfrac{4}{(x^{2}+4)^{3/2}}$ is positive for every real $x$. It never changes sign. The statement is False.`,
      `**E.** → True

$$
N'(1)=\\dfrac{4}{(1+4)^{\\frac{3}{2}}}=\\dfrac{4}{5^{\\frac{3}{2}}}.
$$

The statement is True.`,
    ],
    difficulty_level: "5/5",
    sort_order: 36,
    solution_overview:
      "Differentiate a linear-over-root normalisation, combine into one positive fraction, and evaluate at several points.",
  },
  {
    id: "math-11-37",
    case_id: "MATH 11.37",
    title: "Cubic cost with an inflection check",
    subsection: "11.1",
    context:
      "Total cost is $C(q)=q^{3}-6q^{2}+20q+50$. For each line, mark TRUE or FALSE.",
    statements: [
      "$C'(q)=3q^{2}-12q+20$.",
      "$C''(q)=6q-12$.",
      "$C''(2)=0$.",
      "$C''(1)>0$.",
      "$C'(2)=8$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$
C'(q)=3q^{2}-12q+20.
$$

The statement is True.`,
      `**B.** → True

$$
C''(q)=6q-12.
$$

The statement is True.`,
      `**C.** → True

$$
C''(2)=12-12=0.
$$

The statement is True.`,
      `**D.** → False

$$
C''(1)=6-12=-6<0.
$$

The statement is False.`,
      `**E.** → True

$$
C'(2)=3\\cdot 4-12\\cdot 2+20=12-24+20=8.
$$

The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 37,
    solution_overview:
      "Compute first and second derivatives of a cubic cost and evaluate them at the candidate inflection output.",
  },
  {
    id: "math-11-38",
    case_id: "MATH 11.38",
    title: "Product of two nested powers",
    subsection: "11.1",
    context:
      "A warranty score is $W(x)=(2x+1)^{2}(x-3)^{3}$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$W'(x)=(2x+1)(x-3)^{2}(10x-9)$.",
      "$W'(3)=0$.",
      "$W'\\left(\\dfrac{9}{10}\\right)=0$.",
      "$W'(0)=-81$.",
      "$W'(x)=4(2x+1)(x-3)^{3}$ alone.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Differentiate as a product. The first factor contributes

$$
2(2x+1)\\cdot 2\\cdot(x-3)^{3}=4(2x+1)(x-3)^{3},
$$

and the second contributes

$$
(2x+1)^{2}\\cdot 3(x-3)^{2}=3(2x+1)^{2}(x-3)^{2}.
$$

So

$$
W'(x)=4(2x+1)(x-3)^{3}+3(2x+1)^{2}(x-3)^{2}.
$$

Factor $(2x+1)(x-3)^{2}$:

$$
W'(x)=(2x+1)(x-3)^{2}\\bigl(4(x-3)+3(2x+1)\\bigr)
=
(2x+1)(x-3)^{2}(4x-12+6x+3)
=
(2x+1)(x-3)^{2}(10x-9).
$$

The statement is True.`,
      `**B.** → True

The factor $(x-3)^{2}$ vanishes at $x=3$, so $W'(3)=0$. The statement is True.`,
      `**C.** → True

The factor $10x-9$ vanishes at $x=\\dfrac{9}{10}$, so the derivative is zero there as well. The statement is True.`,
      `**D.** → True

$$
W'(0)=(1)(-3)^{2}(-9)=9\\cdot(-9)=-81.
$$

The statement is True.`,
      `**E.** → False

That expression keeps only the first product-rule term and drops the second. The full derivative needs both contributions. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 38,
    solution_overview:
      "Differentiate a product of two nested powers, factor completely, and read off the roots of the derivative.",
  },
  {
    id: "math-11-39",
    case_id: "MATH 11.39",
    title: "Log of a quotient of linear terms",
    subsection: "11.1",
    context:
      "A relative score is $V(x)=\\ln\\left(\\dfrac{3x+1}{x+2}\\right)$ for $x>0$. Judge every assertion below.",
    statements: [
      "$V'(x)=\\dfrac{5}{(3x+1)(x+2)}$.",
      "$V'(0)=\\dfrac{5}{2}$.",
      "$V''(x)=-\\dfrac{5(6x+7)}{(3x+1)^{2}(x+2)^{2}}$.",
      "$V'(1)=\\dfrac{5}{12}$.",
      "$V'(x)=0$ for some $x>0$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Rewrite

$$
V(x)=\\ln(3x+1)-\\ln(x+2).
$$

Then

$$
V'(x)=\\dfrac{3}{3x+1}-\\dfrac{1}{x+2}
=
\\dfrac{3(x+2)-(3x+1)}{(3x+1)(x+2)}
=
\\dfrac{5}{(3x+1)(x+2)}.
$$

The statement is True.`,
      `**B.** → True

Extending the formula to $x=0$,

$$
V'(0)=\\dfrac{5}{1\\cdot 2}=\\dfrac{5}{2}.
$$

The statement is True.`,
      `**C.** → True

Write $V'(x)=5(3x+1)^{-1}(x+2)^{-1}$. Differentiating the product of the two reciprocal factors:

$$
V''(x)=5\\Bigl((-3)(3x+1)^{-2}(x+2)^{-1}+(3x+1)^{-1}(-1)(x+2)^{-2}\\Bigr)
$$

$$
=-5\\cdot\\dfrac{3(x+2)+(3x+1)}{(3x+1)^{2}(x+2)^{2}}
=
-\\dfrac{5(6x+7)}{(3x+1)^{2}(x+2)^{2}}.
$$

The statement is True.`,
      `**D.** → True

$$
V'(1)=\\dfrac{5}{(3+1)(1+2)}=\\dfrac{5}{12}.
$$

The statement is True.`,
      `**E.** → False

The numerator of $V'$ is the positive constant $5$, and both linear factors stay positive for $x>0$. So $V'(x)$ never vanishes on $x>0$. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 39,
    solution_overview:
      "Differentiate a log-quotient by splitting into a difference of logs, then differentiate again with the quotient rule.",
  },
  {
    id: "math-11-40",
    case_id: "MATH 11.40",
    title: "Square times a nested logarithm",
    subsection: "11.1",
    context:
      "An engagement score is $Z(t)=t^{2}\\cdot\\ln(2t+1)$ for $t>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "$Z'(t)=2t\\cdot\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}$.",
      "$Z'(1)=2\\ln 3+\\dfrac{2}{3}$.",
      "$Z''(t)=2\\ln(2t+1)+\\dfrac{4t}{2t+1}+\\dfrac{4t^{2}+4t}{(2t+1)^{2}}$.",
      "$Z'(1)=2\\ln 3+1$.",
      "$Z''(1)=2\\ln 3+\\dfrac{4}{3}+\\dfrac{8}{9}$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$
Z'(t)=2t\\cdot\\ln(2t+1)+t^{2}\\cdot\\dfrac{1}{2t+1}\\cdot 2
=
2t\\cdot\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}.
$$

The statement is True.`,
      `**B.** → True

$$
Z'(1)=2\\ln 3+\\dfrac{2}{3}.
$$

The statement is True.`,
      `**C.** → True

Differentiate term by term. First,

$$
\\dfrac{d}{dt}\\bigl(2t\\cdot\\ln(2t+1)\\bigr)
=
2\\ln(2t+1)+2t\\cdot\\dfrac{2}{2t+1}
=
2\\ln(2t+1)+\\dfrac{4t}{2t+1}.
$$

Second,

$$
\\dfrac{d}{dt}\\left(\\dfrac{2t^{2}}{2t+1}\\right)
=
\\dfrac{4t(2t+1)-2t^{2}\\cdot 2}{(2t+1)^{2}}
=
\\dfrac{8t^{2}+4t-4t^{2}}{(2t+1)^{2}}
=
\\dfrac{4t^{2}+4t}{(2t+1)^{2}}.
$$

Adding these contributions yields the claimed $Z''(t)$. The statement is True.`,
      `**D.** → False

Part B shows the correct value is $2\\ln 3+\\dfrac{2}{3}$, not $2\\ln 3+1$. The statement is False.`,
      `**E.** → True

Substitute $t=1$ into the second-derivative formula:

$$
Z''(1)=2\\ln 3+\\dfrac{4}{3}+\\dfrac{4+4}{9}
=
2\\ln 3+\\dfrac{4}{3}+\\dfrac{8}{9}.
$$

The statement is True.`,
    ],
    difficulty_level: "5/5",
    sort_order: 40,
    solution_overview:
      "Differentiate a square-log product twice, keeping every chain-rule factor from the inner linear map $2t+1$.",
  },
  {
    id: "math-11-41",
    case_id: "MATH 11.41",
    title: "Which cost curve is marginal cost?",
    subsection: "11.2",
    context:
      "A bakery reports its total weekly cost $C(Q)$ in euros when it bakes $Q$ loaves, and it also reports the average cost per loaf $A(Q)=\\dfrac{C(Q)}{Q}$. Management wants the approximate extra cost of baking one more loaf near the current output. Decide TRUE or FALSE for each claim.",
    statements: [
      "The quantity that answers management's question is the derivative $C'(Q)$, not $A(Q)$.",
      "Differentiating the average-cost function $A(Q)$ is the same thing as computing marginal cost.",
      "Marginal cost at a named output is the slope of the total-cost curve at that output.",
      "If $C'(120)=0.80$, then near $120$ loaves each extra loaf adds about $0.80$ euros to total cost.",
      "Because average cost already divides by $Q$, its value $A(120)$ is automatically equal to marginal cost at $120$.",
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Marginal cost is defined as the derivative of total cost. The approximate extra euros for one more loaf near the current output is therefore read from $C'(Q)$, not from the average $A(Q)$. The statement is True.`,
      `**B.** → False

Average cost is the quotient $A(Q)=\\dfrac{C(Q)}{Q}$. Its derivative $A'(Q)$ tells how average cost changes with output. That is a different object from marginal cost $C'(Q)$. The statement is False.`,
      `**C.** → True

On the graph of total cost against output, the derivative $C'(Q)$ is precisely the slope at that point. Economists call that slope marginal cost. The statement is True.`,
      `**D.** → True

The approximation $C(Q+\\Delta Q)-C(Q)\\approx C'(Q)\\Delta Q$ with $\\Delta Q=1$ says that one extra loaf near $Q=120$ changes total cost by about $C'(120)=0.80$ euros. The statement is True.`,
      `**E.** → False

Average cost and marginal cost coincide only at special outputs (for example, where average cost is minimized). In general $A(120)$ need not equal $C'(120)$. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 41,
    solution_overview:
      "Identify marginal cost as the derivative of total cost and separate it from average cost.",
  },
  {
    id: "math-11-42",
    case_id: "MATH 11.42",
    title: "Reading C'(50)=3 in words",
    subsection: "11.2",
    context:
      "Let $C(x)$ be the cost, in millions of euros, of removing $x\\%$ of the pollution in a lake. Analysts report that $C'(50)=3$. Judge every assertion below.",
    statements: [
      "Near a $50\\%$ cleanup, each extra percentage point of pollution removed costs about $3$ million euros.",
      "The statement $C'(50)=3$ means that the total cost of removing $50\\%$ of the pollution is $3$ million euros.",
      "A precise reading uses the linear approximation $C(50+\\Delta x)-C(50)\\approx 3\\cdot\\Delta x$ for small $\\Delta x$.",
      "Saying \"it costs about $3$ million more to remove $51\\%$ than $50\\%$\" is a rough one-unit reading of the same derivative.",
      "Because the units are millions of euros per percentage point, $C'(50)$ is a marginal cost with respect to the cleanup percentage.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

By definition, $C'(50)$ is the instantaneous rate of change of cleanup cost with respect to the percentage removed. The value $3$ therefore means about $3$ million euros per extra percentage point near $50\\\%$. The statement is True.`,
      `**B.** → False

The total cost of a $50\\\%$ cleanup is the function value $C(50)$, not the derivative $C'(50)$. The number $3$ is a rate, not a stock of total spending. The statement is False.`,
      `**C.** → True

The linear approximation $C(50+\\Delta x)-C(50)\\approx C'(50)\\Delta x=3\\Delta x$ is exactly the precise local meaning of the derivative. The statement is True.`,
      `**D.** → True

Elementary readings often set $\\Delta x=1$ and say the extra cost of going from $50\\\%$ to $51\\\%$ is about $3$ million euros. That is a convenient but less precise version of the same idea. The statement is True.`,
      `**E.** → True

In this model the independent variable is the cleanup percentage, so the derivative is a marginal cost with respect to that percentage. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 42,
    solution_overview:
      "Interpret a reported marginal cleanup cost in words, separating the derivative from the level of total cost.",
  },
  {
    id: "math-11-43",
    case_id: "MATH 11.43",
    title: "Price, revenue, or profit?",
    subsection: "11.2",
    context:
      "A café sells $Q$ cups per day. The price it can charge is described by a downward-sloping schedule $p(Q)$. Revenue is $R(Q)=Q\\cdot p(Q)$ and daily cost is $C(Q)$. Profit is $P(Q)=R(Q)-C(Q)$. Which of the following hold?",
    statements: [
      "Marginal profit is the derivative of $P(Q)$, not the derivative of the price schedule $p(Q)$ alone.",
      "Differentiating only $p(Q)$ yields marginal revenue.",
      "Marginal revenue is $R'(Q)$, which generally differs from the posted price $p(Q)$.",
      "If the café wants the approximate change in profit from selling one more cup, it should look at $P'(Q)$.",
      "Because profit equals revenue minus cost, one always has $P'(Q)=R'(Q)-C'(Q)$.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Marginal profit means the rate of change of profit. The function to differentiate is therefore $P(Q)=R(Q)-C(Q)$. The price schedule $p(Q)$ alone is not profit. The statement is True.`,
      `**B.** → False

The derivative $p'(Q)$ only tracks how the posted price moves with quantity. Marginal revenue is the derivative of revenue $R(Q)= Q\\cdot p(Q)$, which also accounts for selling more cups. The statement is False.`,
      `**C.** → True

Revenue is price times quantity. When quantity rises, price usually falls, so the extra euros from one more cup are not simply the current price. That combined effect is exactly $R'(Q)$. The statement is True.`,
      `**D.** → True

The approximate change in profit for a small increase in cups is $P'(Q)\\Delta Q$. For one extra cup near the current $Q$, the relevant number is $P'(Q)$. The statement is True.`,
      `**E.** → True

Differentiating the difference $P=R-C$ gives $P'=R'-C'$ at every output where the derivatives exist. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 43,
    solution_overview:
      "Match each economic question to the correct function before differentiating.",
  },
  {
    id: "math-11-44",
    case_id: "MATH 11.44",
    title: "When does an extra unit raise profit?",
    subsection: "11.2",
    context:
      "A firm sells output $Q>0$. Its marginal revenue is $R'(Q)$ and its marginal cost is $C'(Q)$. Profit is $P(Q)=R(Q)-C(Q)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "If $R'(Q)>C'(Q)$ at some output, then $P'(Q)>0$ there.",
      "If $R'(Q)>C'(Q)$, a small increase in output raises profit.",
      "If $R'(Q)<C'(Q)$, a small increase in output raises profit.",
      "The equality $R'(Q)=C'(Q)$ is exactly the condition $P'(Q)=0$.",
      "The equality $R'(Q)=C'(Q)$ means that total revenue equals total cost.",
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Because $P'(Q)=R'(Q)-C'(Q)$, the inequality $R'(Q)>C'(Q)$ is synonymous with $P'(Q)>0$. The statement is True.`,
      `**B.** → True

A positive derivative means the function is locally increasing. So when $P'(Q)>0$, raising $Q$ a little increases profit. The statement is True.`,
      `**C.** → False

If $R'(Q)<C'(Q)$, then $P'(Q)<0$, so profit is locally decreasing: a small increase in output lowers profit. The statement is False.`,
      `**D.** → True

Setting $R'(Q)-C'(Q)=0$ is the same as $R'(Q)=C'(Q)$. That is precisely $P'(Q)=0$. The statement is True.`,
      `**E.** → False

$R'(Q)=C'(Q)$ equates two rates of change. Total revenue equalling total cost would be $R(Q)=C(Q)$, a different statement about levels. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 44,
    solution_overview:
      "Link the sign of marginal profit to the comparison of marginal revenue and marginal cost.",
  },
  {
    id: "math-11-45",
    case_id: "MATH 11.45",
    title: "Zero marginal profit is not zero profit",
    subsection: "11.2",
    context:
      "At a candidate output $Q^{\\ast}$, a firm's marginal profit is zero: $P'(Q^{\\ast})=0$. Judge every assertion below.",
    statements: [
      "At $Q^{\\ast}$, marginal revenue equals marginal cost.",
      "At $Q^{\\ast}$, the firm necessarily earns zero total profit.",
      "At $Q^{\\ast}$, total revenue need not equal total cost.",
      "The condition $P'(Q^{\\ast})=0$ alone does not tell whether profit is maximized or minimized.",
      "If $P'(Q^{\\ast})=0$ and $P$ changes from increasing to decreasing at $Q^{\\ast}$, then $Q^{\\ast}$ is a local profit maximum.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

$P'=R'-C'$, so $P'(Q^{\\ast})=0$ means $R'(Q^{\\ast})=C'(Q^{\\ast})$. The statement is True.`,
      `**B.** → False

Zero marginal profit is about the slope of the profit curve, not about the height $P(Q^{\\ast})$. Profit can be large and positive while its derivative is zero. The statement is False.`,
      `**C.** → True

Total revenue equals total cost only if $P(Q^{\\ast})=0$. The first-order condition does not force that. The statement is True.`,
      `**D.** → True

A zero derivative is only a stationary-point condition. Without a second-derivative or sign test, one cannot yet classify a max versus a min. The statement is True.`,
      `**E.** → True

If profit rises before $Q^{\\ast}$ and falls afterward, the stationary point is a local maximum. That is the standard first-derivative sign test. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 45,
    solution_overview:
      "Separate the first-order condition for profit from statements about the level of profit.",
  },
  {
    id: "math-11-46",
    case_id: "MATH 11.46",
    title: "Marginal utility in plain language",
    subsection: "11.2",
    context:
      "A consumer's satisfaction from $x$ hours of leisure is measured by a utility function $U(x)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Marginal utility at $x$ is the derivative $U'(x)$.",
      "If $U'(x)>0$, a little extra leisure raises satisfaction near that $x$.",
      "If $U'(x)<0$, a little extra leisure raises satisfaction near that $x$.",
      "The value $U(x)$ itself is already the marginal utility.",
      "The sign of $U'(x)$ answers whether satisfaction is locally increasing or decreasing in leisure.",
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

By the same convention used for marginal cost and marginal revenue, marginal utility is the derivative of the utility function. The statement is True.`,
      `**B.** → True

A positive derivative means the function increases when the variable increases slightly. The statement is True.`,
      `**C.** → False

A negative derivative means satisfaction falls when leisure rises a little. The statement is False.`,
      `**D.** → False

$U(x)$ is the level of satisfaction, not its rate of change. Marginal utility is $U'(x)$. The statement is False.`,
      `**E.** → True

That is exactly what the sign of a derivative reports for a differentiable function. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 46,
    solution_overview:
      "Interpret the sign of marginal utility as a local increase or decrease in satisfaction.",
  },
  {
    id: "math-11-47",
    case_id: "MATH 11.47",
    title: "Average cost is not marginal cost",
    subsection: "11.2",
    context:
      "A plant's total cost is $C(Q)$ and its average cost is $A(Q)=\\dfrac{C(Q)}{Q}$ for $Q>0$. For each line, mark TRUE or FALSE.",
    statements: [
      "Average cost answers \"cost per unit produced so far,\" while marginal cost answers \"extra cost of a little more output.\"",
      "In general $A(Q)=C'(Q)$ for every $Q>0$.",
      "Minimizing average cost is the same decision problem as setting marginal cost to zero.",
      "At an output that minimizes average cost (with $A(Q)$ differentiable and $Q>0$), one has $C'(Q)=A(Q)$.",
      "If average cost is falling, then necessarily $C'(Q)<0$.",
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

That is the standard verbal distinction: $A(Q)$ is a per-unit average, while $C'(Q)$ is a local extra-cost rate. The statement is True.`,
      `**B.** → False

The two functions are different. They meet only at particular outputs, not identically. The statement is False.`,
      `**C.** → False

Setting $C'(Q)=0$ would look for a stationary point of total cost, which is not the average-cost problem. Average-cost minimization uses $A'(Q)=0$. The statement is False.`,
      `**D.** → True

A standard calculus fact: if $A(Q)=\\dfrac{C(Q)}{Q}$ has a minimum at an interior $Q>0$, then $A'(Q)=0$ there, which rearranges to $C'(Q)=A(Q)$. The statement is True.`,
      `**E.** → False

Average cost can fall even while total cost rises. Falling average cost means $A'(Q)<0$, not that marginal cost is negative. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 47,
    solution_overview:
      "Contrast average and marginal cost, including the classical equality at an average-cost minimum.",
  },
  {
    id: "math-11-48",
    case_id: "MATH 11.48",
    title: "One more unit versus the derivative",
    subsection: "11.2",
    context:
      "Elementary texts sometimes call $C(Q+1)-C(Q)$ the marginal cost at $Q$. In this course, marginal cost means $C'(Q)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The difference $C(Q+1)-C(Q)$ is an incremental one-unit cost, not the exact definition of $C'(Q)$.",
      "When the extra output is small, $C'(Q)$ approximates the change in cost per unit of extra output.",
      "The approximation $C(Q+1)-C(Q)\\approx C'(Q)$ is often serviceable, but it is still an approximation.",
      "If output falls by a small amount, the same derivative still governs the local cost change through $C(Q+\\Delta Q)-C(Q)\\approx C'(Q)\\Delta Q$ with $\\Delta Q<0$.",
      "Because textbooks mention $C(Q+1)-C(Q)$, the derivative $C'(Q)$ is unnecessary once that difference is known.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The derivative is a limit of Newton quotients as the step tends to zero. A fixed step of size $1$ is only a discrete stand-in. The statement is True.`,
      `**B.** → True

That is the standard linear approximation for a differentiable cost function. The statement is True.`,
      `**C.** → True

Setting $\\Delta Q=1$ in $C(Q+\\Delta Q)-C(Q)\\approx C'(Q)\\Delta Q$ yields that familiar one-unit reading, which remains approximate. The statement is True.`,
      `**D.** → True

The approximation formula does not require $\\Delta Q>0$. A small cut in output is covered by a negative $\\Delta Q$. The statement is True.`,
      `**E.** → False

The derivative is the precise marginal concept for continuous models and for arbitrarily small changes. A single one-unit difference cannot replace it in general. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 48,
    solution_overview:
      "Relate the calculus definition of marginal cost to the one-unit incremental story used in elementary economics.",
  },
  {
    id: "math-11-49",
    case_id: "MATH 11.49",
    title: "Revenue when price depends on quantity",
    subsection: "11.2",
    context:
      "A seller faces demand $Q=D(p)$ or, equivalently, an inverse demand $p=p(Q)$. Revenue can be written $R(Q)=Q\\cdot p(Q)$. Judge every assertion below.",
    statements: [
      "Marginal revenue is obtained by differentiating $R(Q)$, not by reading off $p(Q)$ alone.",
      "If the price schedule is downward sloping, selling one more unit tends to reduce the price earned on previous units as well.",
      "That price-pressure effect is one reason marginal revenue can lie below the current price.",
      "If demand did not depend on price at all, differentiating revenue would still ignore quantity.",
      "A claim that \"marginal revenue always equals price\" is generally false when price must fall to sell more.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Marginal revenue is $R'(Q)$. The schedule $p(Q)$ is only one ingredient inside revenue. The statement is True.`,
      `**B.** → True

With inverse demand sloping down, a larger $Q$ means a lower $p(Q)$, so extra sales come with a price cut that also hits intramarginal units. The statement is True.`,
      `**C.** → True

The product rule $R'(Q)=p(Q)+Q\\cdot p'(Q)$ has a typically negative second term when $p'(Q)<0$, pulling $R'(Q)$ below $p(Q)$. The statement is True.`,
      `**D.** → False

If price were constant in quantity, revenue would be $R(Q)=p\\cdot Q$ and its derivative would be exactly that constant price. The claim that differentiation would \"ignore quantity\" is confused. The statement is False.`,
      `**E.** → True

Under a downward-sloping price schedule, $R'(Q)=p(Q)$ only in degenerate cases (for example if $p'(Q)=0$). In the usual case the equality fails. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 49,
    solution_overview:
      "Explain in words why marginal revenue differs from price under a downward-sloping demand schedule.",
  },
  {
    id: "math-11-50",
    case_id: "MATH 11.50",
    title: "A consultant picks the wrong function",
    subsection: "11.2",
    context:
      "A firm's inverse demand is $p(Q)=40-Q$, cost is $C(Q)=8Q+20$, and profit is $P(Q)=Q\\cdot p(Q)-C(Q)$. A consultant says: \"To find marginal profit, just differentiate the price $40-Q$.\" Decide TRUE or FALSE for each claim.",
    statements: [
      "The consultant's advice is wrong: marginal profit requires differentiating $P(Q)$.",
      "Differentiating $p(Q)=40-Q$ yields $-1$, which is the slope of price, not marginal profit.",
      "Revenue in this story is $R(Q)=40Q-Q^{2}$.",
      "Profit simplifies to $P(Q)=32Q-Q^{2}-20$.",
      "The correct marginal profit is $P'(Q)=32-2Q$.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Marginal profit is defined as $P'(Q)$. The consultant differentiated the wrong object. The statement is True.`,
      `**B.** → True

$p'(Q)=-1$ only describes how price falls with quantity. It omits both the extra unit sold and the cost side. The statement is True.`,
      `**C.** → True

Revenue is price times quantity. Substitute the inverse demand $p(Q)=40-Q$:

$$
R(Q)=Q\cdot p(Q)=Q(40-Q)=40Q-Q^{2}.
$$

That is exactly the claimed revenue function. The statement is True.`,
      `**D.** → True

Profit is revenue minus cost. Using the revenue from statement C and the given cost $C(Q)=8Q+20$,

$$
P(Q)=R(Q)-C(Q)=(40Q-Q^{2})-(8Q+20)=32Q-Q^{2}-20.
$$

The claimed simplification matches. The statement is True.`,
      `**E.** → True

Differentiate the simplified profit from statement D term by term:

$$
P'(Q)=32-2Q.
$$

That is the correct marginal profit, not the consultant's $p'(Q)=-1$. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 50,
    solution_overview:
      "Reject a wrong target function, rebuild revenue and profit from the story, then differentiate profit.",
  },
  {
    id: "math-11-51",
    case_id: "MATH 11.51",
    title: "Marginal tax rate versus average tax",
    subsection: "11.2",
    context:
      "Let $T(y)$ be the income tax owed by a person with income $y$. The marginal tax rate is $T'(y)$, while the average tax rate is $\\dfrac{T(y)}{y}$ when $y>0$. For each claim, mark TRUE or FALSE.",
    statements: [
      "The marginal tax rate answers how tax liability changes when income rises a little.",
      "The average tax rate answers what fraction of income is paid in tax overall.",
      "In general the marginal tax rate equals the average tax rate for every income $y>0$.",
      "If $T'(y)=0.3$, then near that income about $30$ cents of each extra euro is taxed away.",
      "Knowing only $\\dfrac{T(y)}{y}$ is enough to read the marginal tax rate at that same $y$.",
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

That is the meaning of the derivative $T'(y)$. The statement is True.`,
      `**B.** → True

The quotient $\\dfrac{T(y)}{y}$ is precisely the average share of income taken by tax. The statement is True.`,
      `**C.** → False

As with cost, the two rates coincide only in special cases, not identically. The statement is False.`,
      `**D.** → True

$T'(y)=0.3$ means about $0.3$ euros of tax per extra euro of income near that point. The statement is True.`,
      `**E.** → False

The average rate does not determine the derivative. Many different tax schedules can share the same average at one $y$ while having different slopes. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 51,
    solution_overview:
      "Separate the marginal tax rate from the average tax rate using the same logic as marginal versus average cost.",
  },
  {
    id: "math-11-52",
    case_id: "MATH 11.52",
    title: "Marginal propensity to save",
    subsection: "11.2",
    context:
      "National saving is a function $S(Y)$ of national product $Y$. The marginal propensity to save is $S'(Y)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The marginal propensity to save is the derivative of saving with respect to national product.",
      "If $S'(Y)=0.2$, then near that $Y$ about one fifth of a small increase in national product is saved.",
      "The ratio $\\dfrac{S(Y)}{Y}$ is the same object as the marginal propensity to save.",
      "A constant saving rule $S(Y)=\\overline{S}+sY$ has marginal propensity to save equal to the coefficient $s$.",
      "To find how saving responds to a little more national product, one differentiates $S(Y)$, not the identity function $Y$.",
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

That is the definition used in the text: $\\mathrm{mps}=S'(Y)$. The statement is True.`,
      `**B.** → True

The derivative value $0.2$ is a euros-saved-per-euro-of-product rate near that $Y$. The statement is True.`,
      `**C.** → False

$\\dfrac{S(Y)}{Y}$ is an average saving ratio, analogous to average cost. It is not $S'(Y)$. The statement is False.`,
      `**D.** → True

Differentiating $S(Y)=\\overline{S}+sY$ gives $S'(Y)=s$. The statement is True.`,
      `**E.** → True

The economic question names saving as the dependent quantity, so the function to differentiate is saving $S(Y)$. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 52,
    solution_overview:
      "Identify the marginal propensity to save as a derivative and contrast it with the average saving ratio.",
  },
  {
    id: "math-11-53",
    case_id: "MATH 11.53",
    title: "Slope of the cost curve on a graph",
    subsection: "11.2",
    context:
      "On a diagram, total cost is plotted against output. At output $Q_0$ the drawn tangent line is steeper than at output $Q_1$. Judge every assertion below.",
    statements: [
      "Marginal cost is higher at $Q_0$ than at $Q_1$.",
      "The height of the cost curve at $Q_0$ is what economists call marginal cost.",
      "A flatter tangent means a smaller derivative and therefore a smaller marginal cost.",
      "If the tangent at $Q_0$ has slope $12$, then $C'(Q_0)=12$.",
      "If two outputs have the same total cost, they must have the same marginal cost.",
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Steeper tangent means larger slope, and that slope is marginal cost. The statement is True.`,
      `**B.** → False

The height is the level $C(Q_0)$. Marginal cost is the slope. The statement is False.`,
      `**C.** → True

That is the geometric meaning of a smaller derivative. The statement is True.`,
      `**D.** → True

By definition the slope of the tangent equals $C'(Q_0)$. The statement is True.`,
      `**E.** → False

Equal heights say nothing about equal slopes. A U-shaped cost curve can return to the same height with different slopes. The statement is False.`,
    ],
    difficulty_level: "1/5",
    sort_order: 53,
    solution_overview:
      "Read marginal cost from the slope of the total-cost graph rather than from its height.",
  },
  {
    id: "math-11-54",
    case_id: "MATH 11.54",
    title: "Profit maximum is not revenue maximum",
    subsection: "11.2",
    context:
      "A firm can choose output $Q>0$. Revenue $R(Q)$ and cost $C(Q)$ are both differentiable, and profit is $P(Q)=R(Q)-C(Q)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "An interior profit maximum requires $P'(Q)=0$, not merely $R'(Q)=0$.",
      "Maximizing revenue alone automatically maximizes profit whenever cost is positive.",
      "If cost rises with output, the output that maximizes revenue can differ from the output that maximizes profit.",
      "At a profit-maximizing interior point one must have $R'(Q)=C'(Q)$.",
      "If $R'(Q)=0$ at some $Q$ while $C'(Q)>0$ there, then $P'(Q)<0$ at that same $Q$.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Profit maximization looks at profit $P(Q)$. Setting only $R'(Q)=0$ ignores cost. The statement is True.`,
      `**B.** → False

Positive cost that depends on $Q$ shifts the optimum. Maximizing $R$ need not maximize $R-C$. The statement is False.`,
      `**C.** → True

Because $P'=R'-C'$, the zeros of $R'(Q)$ and of $P'(Q)$ generally differ when $C'(Q)$ is not zero. The statement is True.`,
      `**D.** → True

At an interior profit maximum one must have $P'(Q)=0$. Because $P'(Q)=R'(Q)-C'(Q)$, that first-order condition rearranges at once to

$$
R'(Q)=C'(Q).
$$

The statement is True.`,
      `**E.** → True

If $R'(Q)=0$ while $C'(Q)>0$, then

$$
P'(Q)=R'(Q)-C'(Q)=0-C'(Q)=-C'(Q)<0.
$$

So at a revenue-stationary point with rising cost, profit is already locally decreasing. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 54,
    solution_overview:
      "Keep revenue maximization and profit maximization as distinct targets.",
  },
  {
    id: "math-11-55",
    case_id: "MATH 11.55",
    title: "Oil left in the well",
    subsection: "11.2",
    context:
      "Let $x(t)$ be the number of barrels of oil left in a well at time $t$, measured in minutes. Suppose $x'(0)=-3$. For each claim, mark TRUE or FALSE.",
    statements: [
      "At time $0$, oil is leaving the well at about $3$ barrels per minute.",
      "The equality $x'(0)=-3$ means that exactly $3$ barrels remain at time $0$.",
      "The negative sign indicates that the stock of remaining oil is decreasing at $t=0$.",
      "A small time step $\\Delta t$ changes remaining oil by about $-3\\Delta t$ barrels near $t=0$.",
      "Because the derivative is negative, remaining oil must already be negative at $t=0$.",
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$|x'(0)|=3$ is the speed of depletion, and the economic reading is about $3$ barrels per minute leaving the well. The statement is True.`,
      `**B.** → False

The stock level is $x(0)$, not $x'(0)$. The number $-3$ is a rate. The statement is False.`,
      `**C.** → True

A negative derivative means the function is locally decreasing. The statement is True.`,
      `**D.** → True

The linear approximation $x(\\Delta t)-x(0)\\approx x'(0)\\Delta t=-3\\Delta t$ says exactly that. The statement is True.`,
      `**E.** → False

A decreasing positive stock can still be large. The sign of the derivative does not force the sign of the level. The statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 55,
    solution_overview:
      "Interpret a negative time derivative of a stock as a depletion rate, not as a negative stock level.",
  },
  {
    id: "math-11-56",
    case_id: "MATH 11.56",
    title: "What marginal revenue does not say",
    subsection: "11.2",
    context:
      "A ticket office faces revenue $R(Q)$ from selling $Q$ tickets. It reports $R'(80)=12$ euros per ticket. Judge every assertion below.",
    statements: [
      "Near $80$ tickets, selling one more ticket raises revenue by about $12$ euros.",
      "The report $R'(80)=12$ means that each of the $80$ tickets was sold for $12$ euros.",
      "The report alone does not reveal the price schedule $p(Q)$.",
      "If marginal cost at $80$ tickets is $15$ euros, then selling a little more than $80$ would lower profit.",
      "If marginal cost at $80$ tickets is $9$ euros, then selling a little more than $80$ would raise profit.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

That is the standard one-unit reading of $R'(80)=12$. The statement is True.`,
      `**B.** → False

Average price would involve $\\dfrac{R(80)}{80}$, and the posted price is $p(80)$. Neither is given by $R'(80)$. The statement is False.`,
      `**C.** → True

Many different price schedules can produce the same marginal revenue at one point. The statement is True.`,
      `**D.** → True

Here $R'(80)<C'(80)$, so $P'(80)<0$ and a small increase in sales reduces profit. The statement is True.`,
      `**E.** → True

Here $R'(80)>C'(80)$, so $P'(80)>0$ and a small increase in sales raises profit. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 56,
    solution_overview:
      "Read a reported marginal revenue correctly and compare it with marginal cost to judge the profit direction.",
  },
  {
    id: "math-11-57",
    case_id: "MATH 11.57",
    title: "Two ways to write the same profit test",
    subsection: "11.2",
    context:
      "A manager says: \"Produce a little more whenever the extra revenue from a little more output exceeds the extra cost.\" Decide TRUE or FALSE for each claim.",
    statements: [
      "In calculus language, the manager's rule is: increase $Q$ a little when $R'(Q)>C'(Q)$.",
      "The same rule can be written: increase $Q$ a little when $P'(Q)>0$.",
      "The manager's rule is equivalent to maximizing revenue regardless of cost.",
      "If extra revenue and extra cost are equal for a small expansion, marginal profit is zero there.",
      "The manager's comparison of \"extra revenue\" and \"extra cost\" is precisely a comparison of two derivatives.",
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

\"Extra revenue\" and \"extra cost\" for a small expansion are the marginal revenue and marginal cost. The statement is True.`,
      `**B.** → True

Because $P'=R'-C'$, the inequality $R'>C'$ is identical to $P'>0$. The statement is True.`,
      `**C.** → False

The rule explicitly uses cost through $C'(Q)$. It is a profit logic, not a pure revenue logic. The statement is False.`,
      `**D.** → True

Equal extras mean $R'=C'$, hence $P'=0$. The statement is True.`,
      `**E.** → True

That is the modelling step that turns the manager's words into $R'(Q)$ and $C'(Q)$. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 57,
    solution_overview:
      "Translate a verbal expand-when-MR-exceeds-MC rule into derivative language.",
  },
  {
    id: "math-11-58",
    case_id: "MATH 11.58",
    title: "Utility average versus marginal utility",
    subsection: "11.2",
    context:
      "A student's satisfaction after $x>0$ hours of study is $U(x)$. Average satisfaction is $A(x)=\\dfrac{U(x)}{x}$, and marginal utility is $U'(x)$. Which of the following hold?",
    statements: [
      "Maximizing $U(x)$ is not the same problem as maximizing $A(x)$.",
      "If $U'(x)=0$ at some $x>0$, then average satisfaction is automatically maximized there.",
      "An interior maximum of average satisfaction requires $A'(x)=0$, which rearranges to $U'(x)=A(x)$.",
      "The condition $U'(x)=0$ means that a tiny change in study time leaves satisfaction locally unchanged.",
      "If marginal utility is positive, average satisfaction must also be rising.",
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

One objective looks at the height of $U(x)$; the other looks at the quotient $\\dfrac{U}{x}$. Their critical points generally differ. The statement is True.`,
      `**B.** → False

$U'=0$ maximizes (or stationarizes) total utility, not average utility. The average-utility first-order condition is $U'=A$, not $U'=0$. The statement is False.`,
      `**C.** → True

Write $A=\\dfrac{U}{x}$. Then $A'=0$ yields $xU'-U=0$, hence $U'=\\dfrac{U}{x}=A$. The statement is True.`,
      `**D.** → True

That is the plain-language reading of a zero derivative. The statement is True.`,
      `**E.** → False

Average satisfaction can fall even while total utility still rises, once utility rises slower than hours. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 58,
    solution_overview:
      "Keep total-utility and average-utility objectives distinct, in parallel with total versus average cost.",
  },
  {
    id: "math-11-59",
    case_id: "MATH 11.59",
    title: "Cost alone cannot give marginal revenue",
    subsection: "11.2",
    context:
      "An analyst is given only a cost function $C(Q)$ for a firm, with no demand or revenue information. Decide TRUE or FALSE for each claim.",
    statements: [
      "From $C$ alone one can compute marginal cost $C'(Q)$.",
      "From $C$ alone one can compute marginal revenue $R'(Q)$.",
      "From $C$ alone one can compute marginal profit $P'(Q)$.",
      "Without a revenue function, the comparison \"$R'(Q)$ versus $C'(Q)$\" cannot be carried out numerically.",
      "If a second analyst later supplies $R(Q)$, then marginal profit becomes $R'(Q)-C'(Q)$.",
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Marginal cost needs only the cost function. The statement is True.`,
      `**B.** → False

Marginal revenue is a property of revenue, which is not determined by cost. The statement is False.`,
      `**C.** → False

Profit needs both revenue and cost. Cost alone is not enough. The statement is False.`,
      `**D.** → True

One side of the comparison is missing, so the numerical test cannot be run. The statement is True.`,
      `**E.** → True

Once both functions are known, $P'=R'-C'$ follows at once. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 59,
    solution_overview:
      "Recognize which marginal quantities are identified by cost data alone.",
  },
  {
    id: "math-11-60",
    case_id: "MATH 11.60",
    title: "A story with three labelled derivatives",
    subsection: "11.2",
    context:
      "A workshop produces $Q$ chairs. Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P(Q)=R(Q)-C(Q)$. At the current output the workshop posts three numbers: $R'(Q)=18$, $C'(Q)=11$, and $P'(Q)=7$. Judge every assertion below.",
    statements: [
      "The three posted numbers are consistent with each other.",
      "Near the current output, one more chair adds about $18$ euros of revenue and about $11$ euros of cost.",
      "Near the current output, one more chair adds about $7$ euros of profit.",
      "Because profit is already positive at the rate of $7$ euros per chair, total profit must equal $7$ euros.",
      "If the workshop instead faced $R'(Q)=11$ and $C'(Q)=18$ at some other output, a small expansion there would reduce profit.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Consistency requires $P'=R'-C'$. Here $18-11=7$, so the triple matches. The statement is True.`,
      `**B.** → True

Those are the one-unit readings of the two derivatives. The statement is True.`,
      `**C.** → True

Likewise for $P'(Q)=7$. The statement is True.`,
      `**D.** → False

The number $7$ is a rate of change of profit, not the level $P(Q)$. The statement is False.`,
      `**E.** → True

Then $P'=11-18=-7<0$, so a small expansion lowers profit. The statement is True.`,
    ],
    difficulty_level: "4/5",
    sort_order: 60,
    solution_overview:
      "Check consistency of reported marginal revenue, cost, and profit, and interpret each number in words.",
  },
  {
    id: "math-11-61",
    case_id: "MATH 11.61",
    title: "Two bakeries, same output, opposite advice",
    subsection: "11.2",
    context:
      "Two neighbourhood bakeries both sold exactly $Q=10$ cakes today, but their evenings look very different. At bakery A the next cake would still bring in about $R_A'(10)=9$ euros of revenue while costing only about $C_A'(10)=6$ euros to bake, and today's total profit sits at $P_A(10)=40$ euros. At bakery B the next cake would bring in only about $R_B'(10)=5$ euros while costing about $C_B'(10)=7$ euros, yet B already earned a much larger total profit $P_B(10)=90$ euros. Profit means $P(Q)=R(Q)-C(Q)$ for each bakery. Decide TRUE or FALSE for each claim.",
    statements: [
      "Bakery A's numbers imply $P_A'(10)=3$.",
      "Near $10$ cakes, bakery B's profit falls if it bakes a little more.",
      "Because $P_B(10)>P_A(10)$, bakery B should expand and bakery A should not.",
      "A small extra cake raises A's profit by about $3$ euros and lowers B's profit by about $2$ euros.",
      "The higher profit level at B already tells you that B's marginal profit is larger."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Profit is revenue minus cost, so marginal profit is the difference of the two derivatives:

$$
P_A'(Q)=R_A'(Q)-C_A'(Q).
$$

Plug in the bakery-A reports at $Q=10$:

$$
P_A'(10)=9-6=3.
$$

So A's posted numbers already force $P_A'(10)=3$.

The statement is True.`,
      `**B.** → True

For bakery B the same identity gives

$$
P_B'(10)=R_B'(10)-C_B'(10)=5-7=-2.
$$

A negative derivative means the profit function is locally decreasing. Near $10$ cakes, baking a little more therefore lowers B's profit.

The statement is True.`,
      `**C.** → False

The expansion test asks whether profit is still rising, which is the sign of $P'(Q)$, not the size of today's profit stock $P(Q)$.

Here

$$
P_A'(10)=3>0,\\qquad P_B'(10)=-2<0.
$$

So a small expansion raises A's profit and lowers B's, even though B currently has the larger total $P_B(10)=90>40=P_A(10)$. Comparing the heights of profit reverses the correct advice.

The statement is False.`,
      `**D.** → True

The one-unit reading of a derivative says that a small extra cake changes profit by about $P'(10)$ euros.

From earlier,

$$
P_A'(10)=3,\\qquad P_B'(10)=-2.
$$

So the extra cake raises A's profit by about $3$ euros and lowers B's by about $2$ euros.

The statement is True.`,
      `**E.** → False

$P_B(10)=90$ is a level (how much profit B has already earned today). $P_B'(10)=-2$ is a rate (how that profit changes if B bakes a little more).

A large positive stock can sit on a downward slope. Knowing only that $P_B(10)>P_A(10)$ says nothing about which bakery has the larger marginal profit.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 61,
    solution_overview:
      "Two bakeries share today's output but not today's slopes: expand when $P'(Q)=R'(Q)-C'(Q)>0$, not when total profit $P(Q)$ is larger.",
  },
  {
    id: "math-11-62",
    case_id: "MATH 11.62",
    title: "Overtime cost after fifty units",
    subsection: "11.2",
    context:
      "A small workshop can run its regular crew for up to $50$ units a week. Up to that point every unit costs a steady $12$ euros of labour and materials, so weekly cost is $C(Q)=12Q$ whenever $0\\le Q\\le 50$. Beyond $50$ units the crew must be paid overtime: the workshop still pays the $600$ euros already spent on the first $50$ units, and then $20$ euros for each extra unit, which is written $C(Q)=600+20(Q-50)$ when $Q>50$. Customers are willing to pay enough that marginal revenue stays at $R'(Q)=16$ euros per unit for every $Q>0$. Judge every assertion below.",
    statements: [
      "For $Q<50$, marginal cost is $12$ euros per unit.",
      "Crossing into overtime raises the cost of an extra unit by $8$ euros relative to the regular-crew schedule.",
      "Just above $50$, overtime still leaves $R'(Q)>C'(Q)$.",
      "At $Q=40$, a small expansion raises profit.",
      "Average cost $\\dfrac{C(Q)}{Q}$ equals $12$ for every $Q>50$."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

On the regular-crew piece the cost rule is the straight line $C(Q)=12Q$. Differentiating that piece gives

$$
C'(Q)=12\\qquad\\text{for }Q<50.
$$

So before overtime kicks in, each extra unit adds $12$ euros of cost.

The statement is True.`,
      `**B.** → True

Rewrite the overtime formula by expanding the brackets:

$$
C(Q)=600+20(Q-50)=20Q-400.
$$

Differentiating the overtime piece gives $C'(Q)=20$ for $Q>50$. Relative to the regular-crew slope $12$,

$$
20-12=8.
$$

So overtime raises the cost of an extra unit by $8$ euros.

The statement is True.`,
      `**C.** → False

Just above $Q=50$ the workshop is already on overtime, so $C'(Q)=20$. Marginal revenue is still $R'(Q)=16$. Then

$$
R'(Q)-C'(Q)=16-20=-4<0,
$$

hence $R'(Q)<C'(Q)$, not $R'(Q)>C'(Q)$.

The statement is False.`,
      `**D.** → True

At $Q=40$ the workshop is still on the regular piece, so $C'(40)=12$. Compare with revenue:

$$
P'(40)=R'(40)-C'(40)=16-12=4>0.
$$

A positive derivative means a small expansion raises profit at $Q=40$.

The statement is True.`,
      `**E.** → False

Average cost is the quotient $\\dfrac{C(Q)}{Q}$, not the overtime slope. For $Q>50$,

$$
\\dfrac{C(Q)}{Q}=\\dfrac{20Q-400}{Q}=20-\\dfrac{400}{Q}.
$$

The term $\\dfrac{400}{Q}$ shrinks as $Q$ grows, so average cost approaches $20$ from below. It equals $12$ only at the isolated handover point $Q=50$, not for every overtime output.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 62,
    solution_overview:
      "The overtime kink changes marginal cost from $12$ to $20$. Measure that gap, compare each piece with $R'(Q)=16$, and keep average cost $\\dfrac{C(Q)}{Q}$ separate from $C'(Q)$.",
  },
  {
    id: "math-11-63",
    case_id: "MATH 11.63",
    title: "Only marginal profit and marginal cost are posted",
    subsection: "11.2",
    context:
      "A station kiosk posts two numbers on its whiteboard at the current sales level: marginal profit $P'(Q)=4$ and marginal cost $C'(Q)=11$. It does not post revenue. A passer-by glances at the board, invents the price schedule $p(Q)=30-\\dfrac{Q}{10}$, and claims that this posted price is already the same thing as marginal revenue. Decide TRUE or FALSE for each claim.",
    statements: [
      "The implied marginal revenue is $R'(Q)=15$.",
      "A small extra sale raises profit, so the kiosk should expand a little.",
      "The passer-by's claim that $p(Q)$ equals marginal revenue is guaranteed by the posted numbers.",
      "The posted $P'(Q)=4$ is not the same information as the current profit level $P(Q)$.",
      "If instead the kiosk had posted $P'(Q)=-4$ with the same $C'(Q)=11$, implied $R'(Q)$ would be $7$."
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

By definition $P'(Q)=R'(Q)-C'(Q)$. Rearrange to recover the missing marginal revenue:

$$
R'(Q)=P'(Q)+C'(Q)=4+11=15.
$$

The whiteboard's two numbers therefore imply $R'(Q)=15$.

The statement is True.`,
      `**B.** → True

The kiosk itself posted $P'(Q)=4>0$. A positive marginal profit means profit is locally increasing, so a small extra sale raises profit and a little expansion is recommended.

The statement is True.`,
      `**C.** → False

The posted pair determines only $R'(Q)=15$. It does not determine the price schedule $p(Q)$.

Even if someone writes down $p(Q)=30-\\dfrac{Q}{10}$, that function equals marginal revenue only if it has been shown to equal $15$ at this $Q$. Under a downward-sloping price, the product rule usually gives $R'(Q)=p(Q)+Q\\cdot p'(Q)<p(Q)$, so price and marginal revenue are different objects. The whiteboard does not force $p(Q)=R'(Q)$.

The statement is False.`,
      `**D.** → True

$P'(Q)=4$ is a rate of change of profit near the current output. The current profit level is the height $P(Q)$, which was never posted. A slope of $4$ is compatible with many different heights.

The statement is True.`,
      `**E.** → True

Repeat the same rearrangement with the alternative report $P'(Q)=-4$ and the same $C'(Q)=11$:

$$
R'(Q)=P'(Q)+C'(Q)=-4+11=7.
$$

So the implied marginal revenue would be $7$.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 63,
    solution_overview:
      "Rearrange $P'(Q)=R'(Q)-C'(Q)$ to recover a missing $R'(Q)$, keep price $p(Q)$ distinct from $R'(Q)$, and remember that $P'(Q)$ is a slope rather than a profit stock.",
  },
  {
    id: "math-11-64",
    case_id: "MATH 11.64",
    title: "Two cinemas: price versus extra ticket revenue",
    subsection: "11.2",
    context:
      "Two city cinemas are deciding whether to sell one more ticket tonight. Cinema A currently charges $p_A=12$ euros per ticket, but because a lower price is needed to fill an extra seat, the extra revenue from that seat is only $R_A'(Q_A)=7$ euros. Cinema B currently charges $p_B=10$ euros and reports that the extra ticket would add the full $R_B'(Q_B)=10$ euros of revenue. Both cinemas face the same marginal cost $C'(Q)=8$ euros for one more viewer. Which of the following hold?",
    statements: [
      "At cinema A, the extra revenue from one more ticket is about $7$ euros, not $12$.",
      "Cinema B's numbers are consistent with a price that does not have to be cut to sell one more ticket.",
      "Cinema A should expand a little, because its price $12$ exceeds marginal cost $8$.",
      "Cinema B should expand a little, because $R_B'(Q_B)>C_B'(Q_B)$.",
      "The comparison $p_A>p_B$ already decides which cinema has the larger marginal profit."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The economic question "how many extra euros does one more ticket bring in?" is answered by marginal revenue $R_A'(Q_A)$, not by the sticker price $p_A$.

Cinema A reports $R_A'(Q_A)=7$, so the extra ticket is worth about $7$ euros of revenue even though the current price is $12$.

The statement is True.`,
      `**B.** → True

When price need not fall to sell a little more, the product-rule penalty $Q\\cdot p'(Q)$ is zero and $R'(Q)=p(Q)$.

Cinema B reports $R_B'(Q_B)=10=p_B$, which is exactly that situation.

The statement is True.`,
      `**C.** → False

A's expansion test compares extra revenue with extra cost:

$$
P_A'(Q_A)=R_A'(Q_A)-C'=7-8=-1<0.
$$

The tempting comparison of price $12$ with cost $8$ is the wrong test. Because $7<8$, a small expansion lowers A's profit.

The statement is False.`,
      `**D.** → True

For cinema B,

$$
P_B'(Q_B)=R_B'(Q_B)-C'=10-8=2>0.
$$

So $R_B'(Q_B)>C_B'(Q_B)$ and a small expansion raises B's profit.

The statement is True.`,
      `**E.** → False

Marginal profit is $R'(Q)-C'(Q)$, not a ranking of sticker prices. Here

$$
P_A'(Q_A)=7-8=-1,\\qquad P_B'(Q_B)=10-8=2.
$$

A has the higher price but the lower (in fact negative) marginal profit. The comparison $p_A>p_B$ does not decide the expansion ranking.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 64,
    solution_overview:
      "Force each cinema's expand-or-not test to use $R'(Q)$ rather than the posted price, then compare the two marginal profits.",
  },
  {
    id: "math-11-65",
    case_id: "MATH 11.65",
    title: "Happy-hour revenue after twenty drinks",
    subsection: "11.2",
    context:
      "A riverside bar runs a happy-hour promotion for the first $20$ drinks of the evening: each of those drinks brings in a steady $15$ euros, so revenue is $R(Q)=15Q$ while $0\\le Q\\le 20$. After the twentieth drink the promotion ends and later drinks add only $8$ euros each, which the manager writes as $R(Q)=300+8(Q-20)$ for $Q>20$. Mixing and serving costs rise at a constant $C'(Q)=10$ euros per drink all evening. Decide TRUE or FALSE for each claim.",
    statements: [
      "For $Q<20$, marginal revenue is $15$.",
      "After happy hour ends, each extra drink adds only $8$ euros of revenue, which is already below the constant marginal cost $10$.",
      "At $Q=12$, a small extra drink raises profit.",
      "At $Q=25$, post-promotion revenue still beats cost at the margin.",
      "Because the first $20$ drinks each bring in $15$ euros, the extra drink at $Q=25$ also brings in $15$ euros."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

During happy hour the revenue rule is $R(Q)=15Q$. Differentiating that piece gives

$$
R'(Q)=15\\qquad\\text{for }Q<20.
$$

So before the twentieth drink, each extra drink adds $15$ euros of revenue.

The statement is True.`,
      `**B.** → True

After happy hour,

$$
R(Q)=300+8(Q-20)=8Q+140,
$$

so $R'(Q)=8$ for $Q>20$. The serving cost stays at $C'(Q)=10$, and

$$
8<10.
$$

Post-promotion extra revenue therefore already lies below marginal cost.

The statement is True.`,
      `**C.** → True

At $Q=12$ the bar is still in happy hour, so $R'(12)=15$. Cost adds $C'(12)=10$. Therefore

$$
P'(12)=15-10=5>0.
$$

A small extra drink raises profit at $Q=12$.

The statement is True.`,
      `**D.** → False

At $Q=25$ the bar is past happy hour, so $R'(25)=8$. Then

$$
P'(25)=8-10=-2<0.
$$

Post-promotion revenue does not beat cost at the margin; a small extra drink lowers profit.

The statement is False.`,
      `**E.** → False

The first $20$ drinks were sold under the happy-hour rule, but the extra drink at $Q=25$ is sold under the post-promotion rule. Its extra revenue is the current derivative $R'(25)=8$, not the old $15$.

Intramarginal drinks do not set today's marginal revenue.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 65,
    solution_overview:
      "Happy hour changes the revenue slope from $15$ to $8$ at $Q=20$. Compare each piece with the constant $C'(Q)=10$.",
  },
  {
    id: "math-11-66",
    case_id: "MATH 11.66",
    title: "What an expansion recommendation already contains",
    subsection: "11.2",
    context:
      "A consultant visits a factory and says only this sentence: at the current output $Q$, a small increase in production would raise profit. Separately, the factory's cost office reports that marginal cost is $C'(Q)=14$ euros. No revenue formula is supplied. Judge every assertion below.",
    statements: [
      "The advice already means $P'(Q)>0$.",
      "The advice already means $R'(Q)>14$.",
      "The advice tells you the current profit level $P(Q)$.",
      "The advice tells you the average cost $\\dfrac{C(Q)}{Q}$.",
      "If a second adviser, at the same $Q$, claimed $R'(Q)=11$, that second claim would contradict the first."
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

In calculus language, "a small increase in output would raise profit" is exactly the meaning of a positive derivative of profit:

$$
P'(Q)>0.
$$

The consultant's sentence is therefore already the statement $P'(Q)>0$.

The statement is True.`,
      `**B.** → True

Profit satisfies $P'(Q)=R'(Q)-C'(Q)$. With the cost office's report $C'(Q)=14$, the inequality $P'(Q)>0$ becomes

$$
R'(Q)-14>0\\qquad\\Leftrightarrow\\qquad R'(Q)>14.
$$

So the advice already forces marginal revenue to exceed $14$.

The statement is True.`,
      `**C.** → False

$P'(Q)>0$ only says that profit is locally rising. It does not identify the height $P(Q)$ of today's profit. Many different profit levels are compatible with the same positive slope.

The statement is False.`,
      `**D.** → False

Average cost $\\dfrac{C(Q)}{Q}$ is a quotient of levels. Knowing that $P'(Q)>0$ and $C'(Q)=14$ does not determine that quotient.

The statement is False.`,
      `**E.** → True

If $R'(Q)=11$ while $C'(Q)=14$, then

$$
P'(Q)=11-14=-3<0,
$$

which says that a small expansion lowers profit. That directly contradicts the first adviser's claim that a small expansion raises profit.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 66,
    solution_overview:
      "Translate a verbal expansion recommendation into $P'(Q)>0$, then into the bound $R'(Q)>C'(Q)$ on the unobserved marginal revenue.",
  },
  {
    id: "math-11-67",
    case_id: "MATH 11.67",
    title: "Two plants, one market price for the extra unit",
    subsection: "11.2",
    context:
      "A manufacturer can produce one more small unit either in Plant 1 or in Plant 2 and will sell that unit in the same market either way. Plant 1 is currently cheaper at the margin: $C_1'(Q_1)=9$ euros. Plant 2 is more expensive at the margin: $C_2'(Q_2)=13$ euros. Whichever plant makes the unit, the extra sale adds $R'=11$ euros of revenue. Decide TRUE or FALSE for each claim.",
    statements: [
      "Producing the extra unit in Plant 1 raises the firm's profit.",
      "Plant 2 should produce the extra unit because both plants sell into the same market.",
      "The firm should prefer Plant 1 for that extra unit because Plant 1 has the lower marginal cost.",
      "Because both plants belong to one firm, the two marginal costs must be equal.",
      "If the extra unit's revenue were instead $R'=8$, then neither plant should produce it."
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Send the extra unit to Plant 1 and compare extra revenue with Plant 1's extra cost:

$$
P_1'=R'-C_1'(Q_1)=11-9=2>0.
$$

Producing that unit in Plant 1 therefore raises the firm's profit.

The statement is True.`,
      `**B.** → False

Sharing one market only means both plants face the same extra revenue $R'=11$. It does not make Plant 2 profitable:

$$
P_2'=11-13=-2<0.
$$

Plant 2 should not produce the extra unit.

The statement is False.`,
      `**C.** → True

With a common $R'=11$, the extra unit is profitable only where marginal cost lies below $11$. That is Plant 1 ($C_1'=9$), not Plant 2 ($C_2'=13$).

Preferring the plant with the lower marginal cost is exactly the right ranking here.

The statement is True.`,
      `**D.** → False

Nothing in the story forces the two plants to have equal marginal costs. The reported figures are already different: $9$ versus $13$. Common ownership does not erase that difference.

The statement is False.`,
      `**E.** → True

If instead $R'=8$, then

$$
8<9\\qquad\\text{and}\\qquad 8<13,
$$

so $P'<0$ in both plants. Neither plant should produce that extra unit.

The statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 67,
    solution_overview:
      "Apply the $R'(Q)$ versus $C'(Q)$ test separately to each plant, then compare the two marginal costs under a common market revenue.",
  },
  {
    id: "math-11-68",
    case_id: "MATH 11.68",
    title: "A two-bracket income tax",
    subsection: "11.2",
    context:
      "A country's income tax has two brackets. On the first $1000$ euros of income the tax office takes one fifth, so $T(y)=\\dfrac{1}{5}y$ whenever $0\\le y\\le 1000$. Above $1000$ euros the taxpayer still owes the $200$ euros already due on the first bracket, and then two fifths of every euro beyond $1000$, which is written $T(y)=200+\\dfrac{2}{5}(y-1000)$ for $y>1000$. Which of the following hold?",
    statements: [
      "For $y<1000$, the marginal tax rate is $\\dfrac{1}{5}$.",
      "Crossing $y=1000$ raises the tax on an extra euro from one fifth to two fifths.",
      "At $y=1500$, the average tax rate equals $\\dfrac{2}{5}$.",
      "At $y=1500$, about $40$ cents of a small extra euro of income is taxed away.",
      "Knowing only the average tax rate at $y=1500$ is enough to recover the second-bracket slope."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

On the first bracket the tax rule is $T(y)=\\dfrac{1}{5}y$. Differentiating that piece gives

$$
T'(y)=\\dfrac{1}{5}\\qquad\\text{for }y<1000.
$$

So the marginal tax rate below $1000$ is one fifth.

The statement is True.`,
      `**B.** → True

On the second bracket,

$$
T(y)=200+\\dfrac{2}{5}(y-1000),
$$

so $T'(y)=\\dfrac{2}{5}$ for $y>1000$. Crossing $y=1000$ therefore raises the tax on an extra euro from $\\dfrac{1}{5}$ to $\\dfrac{2}{5}$.

The statement is True.`,
      `**C.** → False

At $y=1500$ the taxpayer is in the second bracket, so

$$
T(1500)=200+\\dfrac{2}{5}\\cdot 500=200+200=400.
$$

The average tax rate is the quotient of total tax over income:

$$
\\dfrac{T(1500)}{1500}=\\dfrac{400}{1500}=\\dfrac{4}{15}.
$$

That is not equal to the second-bracket slope $\\dfrac{2}{5}=\\dfrac{6}{15}$. Average and marginal rates differ because the first $1000$ euros were taxed more lightly.

The statement is False.`,
      `**D.** → True

At $y=1500$ the relevant rate for a small extra euro is the second-bracket derivative

$$
T'(1500)=\\dfrac{2}{5}=0.4.
$$

About $40$ cents of that extra euro is taxed away.

The statement is True.`,
      `**E.** → False

The average $\\dfrac{4}{15}$ mixes both brackets. Many different second-bracket slopes could be combined with the first bracket to produce that same average at $y=1500$. Knowing only the average does not recover $T'(1500)$.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 68,
    solution_overview:
      "Read the piecewise tax on each side of the bracket, compute the average $\\dfrac{T(y)}{y}$ carefully, and keep it distinct from $T'(y)$.",
  },
  {
    id: "math-11-69",
    case_id: "MATH 11.69",
    title: "Falling average cost plus a reported R'",
    subsection: "11.2",
    context:
      "A flour mill reports that its current average cost is $A(Q)=\\dfrac{C(Q)}{Q}=12$ euros per sack and that this average cost is currently falling as output rises. Separately, the sales desk reports marginal revenue $R'(Q)=10$. Total cost itself is not shown. Decide TRUE or FALSE for each claim.",
    statements: [
      "Falling average cost implies $C'(Q)<A(Q)$, hence $C'(Q)<12$.",
      "The reports already imply $C'(Q)<10$.",
      "The reports already imply $P'(Q)>0$.",
      "Marginal cost could still exceed marginal revenue even while average cost is falling.",
      "Differentiating $A(Q)$ would produce marginal cost."
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Write $A(Q)=\\dfrac{C(Q)}{Q}$. A standard quotient-rule fact is that the sign of $A'(Q)$ matches the sign of $C'(Q)-A(Q)$.

Falling average cost means $A'(Q)<0$, hence

$$
C'(Q)<A(Q)=12.
$$

The statement is True.`,
      `**B.** → False

$C'(Q)<12$ does not force $C'(Q)<10$. For example, marginal cost could be $11$: that is still below average cost $12$ (so average cost keeps falling) and still above marginal revenue $10$.

The statement is False.`,
      `**C.** → False

Profit moves with $P'(Q)=R'(Q)-C'(Q)=10-C'(Q)$. Without knowing whether $C'(Q)$ lies below or above $10$, the sign of $P'(Q)$ is unsettled. Falling average cost alone does not imply $P'(Q)>0$.

The statement is False.`,
      `**D.** → True

Take the concrete possibility $C'(Q)=11$. Then $C'(Q)<A(Q)=12$, so average cost is falling, while

$$
R'(Q)=10<11=C'(Q),
$$

so $P'(Q)<0$. Marginal cost can exceed marginal revenue even while average cost falls.

The statement is True.`,
      `**E.** → False

Differentiating average cost produces $A'(Q)$, the rate of change of the average. Marginal cost is $C'(Q)$, the derivative of total cost. Those are different objects.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 69,
    solution_overview:
      "From $A'(Q)<0$ infer only $C'(Q)<A(Q)$, which is not enough to sign $P'(Q)=R'(Q)-C'(Q)$.",
  },
  {
    id: "math-11-70",
    case_id: "MATH 11.70",
    title: "North posts formulas, South posts only P'",
    subsection: "11.2",
    context:
      "Two rival snack firms both currently sell $Q=15$ packs a day, but they report information differently. Firm North posts full formulas: revenue $R_N(Q)=30Q$ and cost $C_N(Q)=18Q+40$. Firm South refuses to show revenue or cost and posts only its marginal profit schedule $P_S'(Q)=20-Q$. Judge every assertion below.",
    statements: [
      "North's marginal profit is $P_N'(Q)=12$ at every $Q$.",
      "At $Q=15$, South's profit is still locally increasing.",
      "At $Q=25$, South's profit is locally decreasing.",
      "Because South's $P_S'(Q)$ depends on $Q$ while North's does not, South must currently earn less total profit.",
      "North's extra unit always adds $12$ euros of profit; that fact uses $R_N'(Q)-C_N'(Q)$, not the intercept $40$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Differentiate North's formulas:

$$
R_N'(Q)=30,\\qquad C_N'(Q)=18.
$$

Therefore

$$
P_N'(Q)=30-18=12
$$

at every output, including the current $Q=15$.

The statement is True.`,
      `**B.** → True

South posted $P_S'(Q)=20-Q$. At the current output,

$$
P_S'(15)=20-15=5>0.
$$

A positive derivative means South's profit is still locally increasing at $Q=15$.

The statement is True.`,
      `**C.** → True

At the larger output $Q=25$,

$$
P_S'(25)=20-25=-5<0.
$$

South's profit is then locally decreasing.

The statement is True.`,
      `**D.** → False

$P_S'(Q)$ is only a slope schedule. It does not identify the height $P_S(15)$ of South's current profit, nor does it compare that height with North's $P_N(15)$.

A firm whose marginal profit depends on $Q$ can still be earning more, or less, total profit than a firm with constant marginal profit.

The statement is False.`,
      `**E.** → True

North's cost has a fixed overhead of $40$ euros, but constants vanish upon differentiation. The extra-profit figure $12$ comes only from the slopes $30$ and $18$:

$$
P_N'(Q)=R_N'(Q)-C_N'(Q)=30-18=12.
$$

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 70,
    solution_overview:
      "One firm supplies $R$ and $C$; the other supplies only $P'(Q)$. Compare expansion advice without confusing rates with levels.",
  },
  {
    id: "math-11-71",
    case_id: "MATH 11.71",
    title: "Leisure utility that flattens after eight hours",
    subsection: "11.2",
    context:
      "A student measures satisfaction from leisure hours by a utility function that rises at a decreasing rate up to eight hours and then flattens: $U(x)=10x-\\dfrac{1}{2}x^{2}$ while $0\\le x\\le 8$, and $U(x)=48$ once $x>8$ (further leisure adds no more satisfaction). Decide TRUE or FALSE for each claim.",
    statements: [
      "For $x<8$, marginal utility is $U'(x)=10-x$.",
      "At $x=6$, a little extra leisure still raises satisfaction.",
      "For $x>8$, marginal utility is $0$.",
      "Because $U(8)=48$, the eighth hour must have added $48$ units of utility.",
      "Average utility $\\dfrac{U(x)}{x}$ at $x=12$ equals $4$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

On the first piece, differentiate term by term:

$$
U'(x)=10-x\\qquad\\text{for }x<8.
$$

That is the marginal utility before satiation.

The statement is True.`,
      `**B.** → True

At $x=6$ one is still on the rising piece:

$$
U'(6)=10-6=4>0.
$$

A little extra leisure still raises satisfaction.

The statement is True.`,
      `**C.** → True

For $x>8$ the utility rule is the constant $U(x)=48$. The derivative of a constant is zero, so

$$
U'(x)=0\\qquad\\text{for }x>8.
$$

After eight hours, extra leisure adds no satisfaction.

The statement is True.`,
      `**D.** → False

$U(8)=48$ is the stock of utility after eight hours, not the contribution of the eighth hour alone.

Approaching $x=8$ from the left, the eighth hour's extra is the first-piece derivative

$$
U'(8^{-})=10-8=2,
$$

not $48$. Confusing the level with the derivative is the error.

The statement is False.`,
      `**E.** → True

At $x=12>8$ one is on the flat piece, so $U(12)=48$. Average utility is the quotient

$$
\\dfrac{U(12)}{12}=\\dfrac{48}{12}=4.
$$

The statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 71,
    solution_overview:
      "Differentiate the piecewise utility, read satiation as a zero derivative, and compute average utility as the fraction $\\dfrac{U(x)}{x}$.",
  },
  {
    id: "math-11-72",
    case_id: "MATH 11.72",
    title: "Revenue slope and profit slope, cost missing",
    subsection: "11.2",
    context:
      "Two print shops both currently face the same extra-revenue figure $R'(Q)=16$ euros per job, but they report different companions. The first shop also reports marginal profit $P'(Q)=-3$ and does not report cost. The second shop, at a different run length, reports marginal cost $C'(Q)=16$ instead of profit. Which of the following hold?",
    statements: [
      "The first printer's implied marginal cost is $C'(Q)=19$.",
      "The first printer should print a little more.",
      "The second printer's marginal profit is $0$.",
      "Both printers have the same extra-revenue figure, so they have the same extra-profit figure.",
      "The first printer's current total profit $P(Q)$ must equal $-3$."
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

For the first printer, $P'(Q)=R'(Q)-C'(Q)$ rearranges to

$$
-3=16-C'(Q)\\qquad\\Rightarrow\\qquad C'(Q)=19.
$$

The missing marginal cost is therefore $19$.

The statement is True.`,
      `**B.** → False

The first printer posted $P'(Q)=-3<0$. A negative marginal profit means that printing a little more lowers profit, so the shop should not expand.

The statement is False.`,
      `**C.** → True

For the second printer,

$$
P'(Q)=R'(Q)-C'(Q)=16-16=0.
$$

Marginal profit is zero at that run length.

The statement is True.`,
      `**D.** → False

Same $R'(Q)=16$ with different cost sides yields different profit sides: $-3$ at the first shop versus $0$ at the second. Equal extra revenue does not force equal extra profit.

The statement is False.`,
      `**E.** → False

The number $-3$ is the slope $P'(Q)$, not the height of profit. The current total $P(Q)$ was never reported and need not equal $-3$.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 72,
    solution_overview:
      "Recover $C'(Q)$ from $R'(Q)$ and $P'(Q)$ for one firm, then contrast a second firm with the same $R'(Q)$ but $P'(Q)=0$.",
  },
  {
    id: "math-11-73",
    case_id: "MATH 11.73",
    title: "The same firm before and after a per-unit tax",
    subsection: "11.2",
    context:
      "Before any tax, a firm faces marginal revenue $R'(Q)=14$ and marginal cost $C'(Q)=10$ at its current output. The government then adds a per-unit tax of $5$ euros, so the new total cost becomes $\\widetilde{C}(Q)=C(Q)+5Q$ while the revenue schedule is left unchanged. Decide TRUE or FALSE for each claim.",
    statements: [
      "Before the tax, a small expansion raises profit.",
      "After the tax, the relevant marginal cost is $15$.",
      "After the tax, a small expansion raises profit.",
      "The tax changes which function must be differentiated for the extra-cost side: the new cost $\\widetilde{C}$, not the old $C$.",
      "Because revenue is unchanged, marginal revenue is still $14$ after the tax."
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Before the tax,

$$
P'(Q)=R'(Q)-C'(Q)=14-10=4>0.
$$

A small expansion raises pre-tax profit.

The statement is True.`,
      `**B.** → True

After the tax the cost function is $\\widetilde{C}(Q)=C(Q)+5Q$. Differentiating gives

$$
\\widetilde{C}'(Q)=C'(Q)+5=10+5=15.
$$

The relevant marginal cost is therefore $15$.

The statement is True.`,
      `**C.** → False

After the tax, compare the unchanged $R'(Q)=14$ with the new marginal cost $15$:

$$
P'(Q)=14-15=-1<0.
$$

A small expansion now lowers profit; it does not raise it.

The statement is False.`,
      `**D.** → True

The economic question after the tax is about extra cost including the tax. That is the derivative of the new cost $\\widetilde{C}$, not of the old pre-tax $C$. Using the old $C'(Q)=10$ would ignore the $5$ euro tax on each extra unit.

The statement is True.`,
      `**E.** → True

The story leaves the revenue schedule unchanged, so its derivative is still $R'(Q)=14$ after the tax. Only the cost side shifted.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 73,
    solution_overview:
      "Keep $R'(Q)$ fixed and shift only the cost function by a per-unit tax, then re-run the expansion test with $\\widetilde{C}'(Q)$.",
  },
  {
    id: "math-11-74",
    case_id: "MATH 11.74",
    title: "Price follows one rule, then another",
    subsection: "11.2",
    context:
      "A street vendor faces a two-piece inverse demand. While sales stay at most $30$ units, buyers require the price $p(Q)=40-Q$. Once sales exceed $30$, further units can only be sold at a flat clearance price $p(Q)=10$. Revenue is always $R(Q)=Q\\cdot p(Q)$, and packing cost rises at a constant $C'(Q)=12$ euros per unit. Judge every assertion below.",
    statements: [
      "For $Q<30$, $R(Q)=40Q-Q^{2}$ and $R'(Q)=40-2Q$.",
      "Once clearance pricing begins, marginal revenue collapses to the flat price $10$.",
      "At $Q=12$, a small expansion raises profit.",
      "At $Q=35$, clearance pricing still leaves $R'(Q)>C'(Q)$.",
      "At $Q=12$, extra revenue equals the posted price $p(12)=28$."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

On the first piece, price is $p(Q)=40-Q$, so

$$
R(Q)=Q\\cdot(40-Q)=40Q-Q^{2}.
$$

Differentiating gives

$$
R'(Q)=40-2Q\\qquad\\text{for }Q<30.
$$

The statement is True.`,
      `**B.** → True

On the clearance piece the price is the constant $10$, so revenue becomes $R(Q)=10Q$ and

$$
R'(Q)=10\\qquad\\text{for }Q>30.
$$

That flat price is exactly the post-kink marginal revenue. The statement is True.`,
      `**C.** → True

At $Q=12$ one is on the first piece:

$$
R'(12)=40-2\\cdot 12=16.
$$

Compare with cost:

$$
P'(12)=16-12=4>0.
$$

A small expansion raises profit at $Q=12$.

The statement is True.`,
      `**D.** → False

At $Q=35$ one is on the clearance piece, so $R'(35)=10$. Then

$$
R'(35)-C'(35)=10-12=-2<0,
$$

hence $R'(Q)<C'(Q)$ under clearance pricing, not $R'(Q)>C'(Q)$.

The statement is False.`,
      `**E.** → False

At $Q=12$ the posted price is $p(12)=40-12=28$, but marginal revenue is $R'(12)=16$.

The gap appears because selling one more unit also forces a price cut on previous units: the product rule gives $R'(Q)=p(Q)+Q\\cdot p'(Q)$ with $p'(Q)=-1<0$. Extra revenue is not the posted price.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 74,
    solution_overview:
      "Build $R(Q)$ from the piecewise price schedule, differentiate each piece, and only then compare with $C'(Q)$.",
  },
  {
    id: "math-11-75",
    case_id: "MATH 11.75",
    title: "Cheaper on average is not cheaper at the margin",
    subsection: "11.2",
    context:
      "Two courier firms can both take one more delivery at the same extra revenue $R'=7$ euros. Firm A currently has average cost $A_A=8$ and marginal cost $C_A'=5$. Firm B currently has average cost $A_B=6$ and marginal cost $C_B'=9$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Firm A's average cost is currently falling.",
      "Firm B's average cost is currently rising.",
      "Firm B is cheaper per unit on average, so B should produce the extra unit and A should not.",
      "Only firm A has $R'>C'$ here.",
      "The extra unit adds about $2$ euros of profit at A and subtracts about $2$ euros at B."
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Average cost falls when marginal cost lies below average cost. For firm A,

$$
C_A'=5<8=A_A,
$$

so $A_A'(Q)<0$: A's average cost is currently falling.

The statement is True.`,
      `**B.** → True

For firm B,

$$
C_B'=9>6=A_B,
$$

so $A_B'(Q)>0$: B's average cost is currently rising.

The statement is True.`,
      `**C.** → False

The extra-unit test compares $R'(Q)$ with $C'(Q)$, not the two averages. Here

$$
7>5\\qquad\\text{at A, but}\\qquad 7<9\\qquad\\text{at B}.
$$

A should take the extra delivery; B should not. Being cheaper on average does not decide the marginal comparison.

The statement is False.`,
      `**D.** → True

$R'=7$ exceeds $C_A'=5$ and falls short of $C_B'=9$. Only firm A satisfies $R'>C'$.

The statement is True.`,
      `**E.** → True

The extra-profit figures are

$$
P_A'=7-5=2,\\qquad P_B'=7-9=-2.
$$

So the extra unit adds about $2$ euros of profit at A and subtracts about $2$ euros at B.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 75,
    solution_overview:
      "Use $C'(Q)$ versus $A$ to read whether average cost is falling, but use $R'(Q)$ versus $C'(Q)$ for the extra-unit test.",
  },
  {
    id: "math-11-76",
    case_id: "MATH 11.76",
    title: "Zero profit versus zero extra profit",
    subsection: "11.2",
    context:
      "Two recording studios report very different profit situations today. Studio A is already earning a solid total profit $P_A(Q)=50$ euros, but its profit has stopped rising: $P_A'(Q)=0$. Studio B is currently just breaking even with $P_B(Q)=0$, yet each extra unit would still add about $P_B'(Q)=4$ euros of profit. Judge every assertion below.",
    statements: [
      "Studio A is earning a positive profit stock, but a tiny output change leaves that profit locally unchanged.",
      "Studio B is currently breaking even, yet a small expansion would start to create profit.",
      "Studio A's $P_A'(Q)=0$ means A earns nothing.",
      "Studio B should expand a little; studio A's first-order condition is already $R_A'(Q)=C_A'(Q)$.",
      "Because B's current profit is $0$, B cannot have a positive marginal profit."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Studio A reports $P_A(Q)=50>0$ and $P_A'(Q)=0$. The stock of profit is positive, while a tiny change in output leaves that stock locally unchanged because the slope is zero.

The statement is True.`,
      `**B.** → True

Studio B reports $P_B(Q)=0$ together with $P_B'(Q)=4>0$. Breaking even today is compatible with an upward slope: a small expansion would push profit above zero.

The statement is True.`,
      `**C.** → False

Zero slope is not a zero height. Studio A already earns $P_A(Q)=50$. The report $P_A'(Q)=0$ only says that profit is stationary at that output.

The statement is False.`,
      `**D.** → True

$P_B'(Q)=4>0$ is an expansion signal for B. For A, $P_A'(Q)=0$ rearranges to $R_A'(Q)=C_A'(Q)$, the usual first-order condition.

The statement is True.`,
      `**E.** → False

A zero height can sit on an upward slope. That is exactly studio B: $P_B(Q)=0$ while $P_B'(Q)=4>0$. Current break-even does not forbid a positive marginal profit.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 76,
    solution_overview:
      "Put a profitable stationary firm next to a break-even firm with $P'(Q)>0$, and keep the height of profit distinct from its slope.",
  },
  {
    id: "math-11-77",
    case_id: "MATH 11.77",
    title: "Weekday cost versus weekend cost",
    subsection: "11.2",
    context:
      "The same café serves the same menu all week, but staffing costs change with the day. On weekdays cost is the linear rule $C_{\\mathrm{wd}}(Q)=12Q$; on weekends overtime staffing makes cost $C_{\\mathrm{we}}(Q)=20Q$. Customer demand is steady enough that marginal revenue is $R'(Q)=15$ on both kinds of day. Which of the following hold?",
    statements: [
      "On a weekday, $C_{\\mathrm{wd}}'(Q)=12$.",
      "Weekend overtime raises the cost of an extra sale by $8$ euros relative to the weekday schedule.",
      "A small extra sale raises profit on a weekday.",
      "Because weekend revenue is still $R'(Q)=15$, weekend marginal profit equals the weekday figure $3$.",
      "The weekday-versus-weekend switch changes the cost function that must be differentiated, not the meaning of $R'(Q)$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Weekday cost is $C_{\\mathrm{wd}}(Q)=12Q$. Differentiating gives

$$
C_{\\mathrm{wd}}'(Q)=12.
$$

So on a weekday each extra sale adds $12$ euros of cost. The statement is True.`,
      `**B.** → True

Weekend cost is $C_{\\mathrm{we}}(Q)=20Q$, so $C_{\\mathrm{we}}'(Q)=20$. The weekday slope was $12$, and

$$
20-12=8.
$$

Overtime therefore raises the extra-sale cost by $8$ euros relative to the weekday schedule. The statement is True.`,
      `**C.** → True

On a weekday,

$$
P'(Q)=R'(Q)-C_{\\mathrm{wd}}'(Q)=15-12=3>0.
$$

A positive marginal profit means a small extra sale raises weekday profit. The statement is True.`,
      `**D.** → False

Weekend marginal profit uses the weekend cost slope, not the weekday one:

$$
P'(Q)=R'(Q)-C_{\\mathrm{we}}'(Q)=15-20=-5.
$$

That is not equal to the weekday figure $3$. Same $R'(Q)$ with a higher $C'(Q)$ changes the profit slope. The statement is False.`,
      `**E.** → True

$R'(Q)=15$ is the same number both days. What changes is which cost schedule supplies $C'(Q)$: the weekday rule or the weekend rule. The meaning of marginal revenue does not change. The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 77,
    solution_overview:
      "Treat weekday and weekend as two cost regimes: read the weekday slope, measure the overtime gap, then run the $R'(Q)$ versus $C'(Q)$ test without assuming equal marginal profits.",
  },
  {
    id: "math-11-78",
    case_id: "MATH 11.78",
    title: "Extra revenue smaller than extra cost: two shops",
    subsection: "11.2",
    context:
      "A reviewer writes of Shop L: \"At Shop L, the extra euros from a little more output are smaller than the extra euros of cost.\" Shop L also posts $R_L'(Q)=9$ and $P_L'(Q)=-4$. Across the street, Shop M faces the same extra-revenue figure $R_M'(Q)=9$ but reports marginal cost $C_M'(Q)=6$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The reviewer's sentence about Shop L already means $R_L'(Q)<C_L'(Q)$.",
      "Shop L's implied marginal cost is $C_L'(Q)=13$.",
      "Shop M does not satisfy the reviewer's sentence.",
      "A small expansion raises profit at Shop M and lowers profit at Shop L.",
      "Because both shops have the same $R'(Q)$, they have the same extra-cost figure."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

"Extra revenue smaller than extra cost" is precisely the inequality of derivatives

$$
R_L'(Q)<C_L'(Q).
$$

The reviewer's sentence is already that comparison.

The statement is True.`,
      `**B.** → True

From $P_L'(Q)=R_L'(Q)-C_L'(Q)$ and the posted numbers,

$$
-4=9-C_L'(Q)\\qquad\\Rightarrow\\qquad C_L'(Q)=13.
$$

Shop L's implied marginal cost is $13$.

The statement is True.`,
      `**C.** → True

At Shop M, $R_M'(Q)=9>6=C_M'(Q)$, so extra revenue is larger than extra cost. That is the opposite of the reviewer's sentence.

The statement is True.`,
      `**D.** → True

Shop M has

$$
P_M'(Q)=9-6=3>0,
$$

while Shop L has $P_L'(Q)=-4<0$. A small expansion raises profit at M and lowers it at L.

The statement is True.`,
      `**E.** → False

Both shops share $R'(Q)=9$, but their cost slopes differ: $C_L'(Q)=13$ versus $C_M'(Q)=6$. Same extra revenue does not force the same extra cost.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 78,
    solution_overview:
      "Translate a verbal $R'<C'$ claim, recover the missing $C'(Q)$ at one shop, and contrast a second shop with the same $R'(Q)$.",
  },
  {
    id: "math-11-79",
    case_id: "MATH 11.79",
    title: "Profit itself is piecewise at capacity",
    subsection: "11.2",
    context:
      "A maker of custom lamps can run its workshop smoothly up to capacity $Q=30$. In that range weekly profit is $P(Q)=8Q-\\dfrac{1}{10}Q^{2}$. Beyond capacity every extra lamp requires rushed outsourcing that eats profit: the firm still has the $150$ euros earned at capacity, and then loses $4$ euros on each unit above $30$, written $P(Q)=150-4(Q-30)$ for $Q>30$. Judge every assertion below.",
    statements: [
      "For $Q<30$, $P'(Q)=8-\\dfrac{1}{5}Q$.",
      "At $Q=20$, a small expansion raises profit.",
      "For $Q>30$, $P'(Q)=-4$.",
      "Just above $Q=30$, a small expansion raises profit.",
      "$P(30)=150$, so the firm earns $150$ euros of extra profit from the thirtieth unit."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

On the pre-capacity piece,

$$
P(Q)=8Q-\\dfrac{1}{10}Q^{2},
$$

so

$$
P'(Q)=8-\\dfrac{2}{10}Q=8-\\dfrac{1}{5}Q\\qquad\\text{for }Q<30.
$$

The statement is True.`,
      `**B.** → True

At $Q=20$,

$$
P'(20)=8-\\dfrac{1}{5}\\cdot 20=8-4=4>0.
$$

A small expansion raises profit at $Q=20$.

The statement is True.`,
      `**C.** → True

On the outsourcing piece $P(Q)=150-4(Q-30)$ is linear with slope $-4$, so

$$
P'(Q)=-4\\qquad\\text{for }Q>30.
$$

The statement is True.`,
      `**D.** → False

Just above capacity the firm is on the outsourcing piece, where $P'(Q)=-4<0$. A small expansion lowers profit; it does not raise it.

The statement is False.`,
      `**E.** → False

$P(30)=150$ is the profit stock at capacity, not the contribution of the thirtieth unit alone.

Approaching $Q=30$ from the left,

$$
P'(30^{-})=8-\\dfrac{1}{5}\\cdot 30=8-6=2,
$$

so the thirtieth unit adds about $2$ euros of profit, not $150$.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 79,
    solution_overview:
      "Differentiate the piecewise profit function on each side of capacity and refuse to treat the level $P(30)$ as a derivative.",
  },
  {
    id: "math-11-80",
    case_id: "MATH 11.80",
    title: "Same output, same R', missing different pieces",
    subsection: "11.2",
    context:
      "A café and a nearby kiosk both sold $Q=40$ items today and both report the same extra-revenue figure $R'(40)=3$ euros. Their whiteboards are incomplete in different ways: the café also posts $P'(40)=1$ but hides cost, while the kiosk posts $C'(40)=5$ but hides profit. Decide TRUE or FALSE for each claim.",
    statements: [
      "The café's implied marginal cost is $C'(40)=2$.",
      "The kiosk's implied marginal profit is $P'(40)=-2$.",
      "A small extra item raises profit at the café and lowers profit at the kiosk.",
      "Because both have the same $R'(40)$ and the same $Q$, they must have the same $C'(40)$.",
      "The café's report $P'(40)=1$ already equals its profit level $P(40)$."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

For the café, $P'(40)=R'(40)-C'(40)$ gives

$$
1=3-C'(40)\\qquad\\Rightarrow\\qquad C'(40)=2.
$$

The café's implied marginal cost is $2$.

The statement is True.`,
      `**B.** → True

For the kiosk,

$$
P'(40)=R'(40)-C'(40)=3-5=-2.
$$

The kiosk's implied marginal profit is $-2$.

The statement is True.`,
      `**C.** → True

The café has $P'(40)=1>0$, so a small extra item raises café profit. The kiosk has $P'(40)=-2<0$, so a small extra item lowers kiosk profit.

The statement is True.`,
      `**D.** → False

Same $R'(40)$ and same $Q$ do not force the same cost slope. The recovered values are already different: $C'(40)=2$ at the café versus $C'(40)=5$ at the kiosk.

The statement is False.`,
      `**E.** → False

$P'(40)=1$ is a rate of change of profit. The height $P(40)$ of today's profit was never posted and need not equal $1$.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 80,
    solution_overview:
      "Two firms share $Q$ and $R'(Q)$ but reveal different missing pieces; recover $C'(Q)$ at one and $P'(Q)$ at the other.",
  }

];
