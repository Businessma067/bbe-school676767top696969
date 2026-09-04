import type { MathTask } from "@/data/math-chapters";

export const MATH_CH11_SUBSECTIONS = [
  { id: "11.1", title: "Differentiation rules & mechanics" },
  { id: "11.2", title: "Economic interpretation of the derivative" },
  { id: "11.3", title: "Finding and classifying optima" },
  { id: "11.4", title: "Interpreting graphs without algebra" },
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
  },
  {
    id: "math-11-81",
    case_id: "MATH 11.81",
    title: "Workshop lamps: find the daily profit peak",
    subsection: "11.3",
    context:
      "A small workshop sells $Q$ handmade lamps per day. Daily profit in euros is modelled by $$P(Q)=-Q^{2}+12Q-20$$ for $Q\\ge 0$. Here $P(Q)$ denotes daily profit when $Q$ lamps are sold. The owner wants the output that maximises profit. Decide TRUE or FALSE for each claim.",
    statements: [
      "The slope of daily profit is $P'(Q)=-2Q+12$.",
      "The only daily output where that slope is flat is six lamps.",
      "At six lamps a day the profit curve bends strictly downward, so that output is a local profit peak.",
      "At six lamps a day, daily profit equals $16$ euros.",
      "Because the slope is flat at six lamps, the profit level itself must be zero there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold; $P'(Q)$ is the slope of profit (marginal profit) and $P''(Q)$ reads the bend of that curve.

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold. The derivative $P'(Q)$ is the slope of the profit curve with respect to output — also called marginal profit.

Differentiate the given model term by term:

$$
P'(Q)=-2Q+12.
$$

The statement is True.`,
      `**B.** → True

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold; $P'(Q)$ is the slope of profit (marginal profit) and $P''(Q)$ reads the bend of that curve.

An interior peak can occur only where the graph is momentarily flat, so set the slope to zero:

$$
P'(Q)=-2Q+12=0\\qquad\\Rightarrow\\qquad 2Q=12\\qquad\\Rightarrow\\qquad Q=6.
$$

On $Q\\ge 0$ this is the only root, so six lamps a day is the unique flat-slope candidate for a profit peak.

The statement is True.`,
      `**C.** → True

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold; $P'(Q)$ is the slope of profit (marginal profit) and $P''(Q)$ reads the bend of that curve.

Differentiate the slope once more to read the bend:

$$
P''(Q)=-2.
$$

In particular $P''(6)=-2<0$. A negative second derivative means the profit curve bends downward at that flat spot, so $Q=6$ is a strict local maximum — a local profit peak.

Negative $P''(6)$ means a downward bend, so six lamps is a strict local profit peak.

The statement is True.`,
      `**D.** → True

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold; $P'(Q)$ is the slope of profit (marginal profit) and $P''(Q)$ reads the bend of that curve.

Substitute $Q=6$ into the profit model:

$$
P(6)=-6^{2}+12\\cdot 6-20=-36+72-20=16.
$$

At six lamps a day, daily profit equals $16$ euros.

Substituting $Q=6$ into the level $P$ (not into $P'$) gives $P(6)=16$ euros — the peak payoff height.

Slope found the candidate; this substitution reads the euro height $P(6)=16$.

The statement is True.`,
      `**E.** → False

$P(Q)$ denotes daily profit in euros when $Q$ lamps are sold; $P'(Q)$ is the slope of profit (marginal profit) and $P''(Q)$ reads the bend of that curve.

A flat slope ($P'(6)=0$) describes how profit *changes* at that output, not how large profit *is*. Evaluating the level separately gives

$$
P(6)=16\\neq 0.
$$

Zero slope does not force zero profit: $P(6)=16\\neq 0$.

The statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 81,
    solution_overview:
      "From $P(Q)=-Q^{2}+12Q-20$, derive $P'=-2Q+12$, find the flat-slope output $Q=6$, confirm a peak with $P''=-2$, and evaluate $P(6)=16$.",
  },
  {
    id: "math-11-82",
    case_id: "MATH 11.82",
    title: "Café lunch boxes: build profit from revenue and cost",
    subsection: "11.3",
    context:
      "A neighbourhood café sells $Q$ lunch boxes per day. Revenue is $$R(Q)=30Q-Q^{2}$$ euros and total cost is $$C(Q)=Q^{2}+6Q+40$$ euros, for $Q>0$. Daily profit is the difference $P(Q)=R(Q)-C(Q)$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Daily profit simplifies to $P(Q)=-2Q^{2}+24Q-40$.",
      "Marginal profit (the slope of $P$) is $P'(Q)=-4Q+24$.",
      "Profit has a flat slope at six lunch boxes a day.",
      "At six lunch boxes, marginal revenue and marginal cost both equal $18$ euros.",
      "Because profit's slope is flat at six boxes, the café's profit level equals its cost level there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$R(Q)$ is daily revenue, $C(Q)$ is total cost, and profit is $P(Q)=R(Q)-C(Q)$. Then $P'$, $R'$, and $C'$ are the slopes of profit, revenue, and cost (marginal profit, marginal revenue, and marginal cost).

$R(Q)$ is daily revenue and $C(Q)$ is total cost; profit is revenue minus cost:

$$
P(Q)=R(Q)-C(Q)=(30Q-Q^{2})-(Q^{2}+6Q+40)=-2Q^{2}+24Q-40.
$$

Every term of revenue minus cost appears in that simplified quadratic.

The statement is True.`,
      `**B.** → True

$R(Q)$ is daily revenue, $C(Q)$ is total cost, and profit is $P(Q)=R(Q)-C(Q)$. Then $P'$, $R'$, and $C'$ are the slopes of profit, revenue, and cost (marginal profit, marginal revenue, and marginal cost).

$P'(Q)$ is the derivative of profit with respect to output — the slope of the profit curve / marginal profit. Differentiate:

$$
P'(Q)=-4Q+24.
$$

That slope is the café's marginal profit, later set to zero at six boxes.

The statement is True.`,
      `**C.** → True

$R(Q)$ is daily revenue, $C(Q)$ is total cost, and profit is $P(Q)=R(Q)-C(Q)$. Then $P'$, $R'$, and $C'$ are the slopes of profit, revenue, and cost (marginal profit, marginal revenue, and marginal cost).

Set the slope of profit to zero:

$$
P'(Q)=-4Q+24=0\\qquad\\Rightarrow\\qquad 4Q=24\\qquad\\Rightarrow\\qquad Q=6.
$$

Six lunch boxes is the unique positive flat-slope output for this profit model.

The statement is True.`,
      `**D.** → True

$R(Q)$ is daily revenue, $C(Q)$ is total cost, and profit is $P(Q)=R(Q)-C(Q)$. Then $P'$, $R'$, and $C'$ are the slopes of profit, revenue, and cost (marginal profit, marginal revenue, and marginal cost).

Marginal revenue is $R'(Q)$ and marginal cost is $C'(Q)$:

$$
R'(Q)=30-2Q,\\qquad C'(Q)=2Q+6.
$$

At $Q=6$:

$$
R'(6)=30-12=18,\\qquad C'(6)=12+6=18.
$$

Matching $R'=C'=18$ at six boxes is equivalent to flat profit there.

The statement is True.`,
      `**E.** → False

$R(Q)$ is daily revenue, $C(Q)$ is total cost, and profit is $P(Q)=R(Q)-C(Q)$. Then $P'$, $R'$, and $C'$ are the slopes of profit, revenue, and cost (marginal profit, marginal revenue, and marginal cost).

$P'(6)=0$ means marginal profit is zero (flat slope), not that the *levels* $P(6)$ and $C(6)$ coincide. Compute both:

$$
P(6)=-2\\cdot 36+24\\cdot 6-40=-72+144-40=32,
$$

$$
C(6)=36+36+40=112.
$$

Levels $P(6)=32$ and $C(6)=112$ differ, so flat slope does not equate profit with cost.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 82,
    solution_overview:
      "Form $P=R-C=-2Q^{2}+24Q-40$, solve $P'=0$ for $Q=6$, check $R'(6)=C'(6)=18$, and reject the false claim that $P=C$ there.",
  },
  {
    id: "math-11-83",
    case_id: "MATH 11.83",
    title: "Courier vans: minimise daily operating cost",
    subsection: "11.3",
    context:
      "A courier firm runs $Q$ vans and models daily operating cost (in hundreds of euros) by $$C(Q)=Q^{2}-10Q+40$$ for $Q\\ge 0$. Here $C(Q)$ is daily cost when $Q$ vans are in service. Management wants the cost-minimising fleet size. Decide TRUE or FALSE for each claim.",
    statements: [
      "Cost has a flat slope only at five vans.",
      "At five vans the cost curve bends upward, so that fleet size is a local cost trough.",
      "The trough cost value is $15$ (hundreds of euros).",
      "Because the slope of cost is flat at five vans, that fleet size must be a local cost peak.",
      "On $Q\\ge 0$, the global cost minimum is also at five vans."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$C(Q)$ is daily operating cost in hundreds of euros for $Q$ vans; $C'(Q)$ is marginal cost (the slope of cost) and $C''(Q)$ reads whether that slope is rising.

Differentiate the cost model:

$$
C'(Q)=2Q-10.
$$

Set the slope to zero:

$$
2Q-10=0\\qquad\\Rightarrow\\qquad Q=5.
$$

So the only flat-slope fleet size is five vans.

The statement is True.`,
      `**B.** → True

$C(Q)$ is daily operating cost in hundreds of euros for $Q$ vans; $C'(Q)$ is marginal cost (the slope of cost) and $C''(Q)$ reads whether that slope is rising.

The second derivative reads the bend:

$$
C''(Q)=2>0
$$

everywhere, including at $Q=5$. A positive second derivative means the cost curve bends upward, so five vans is a strict local minimum — a cost trough, not a peak.

The statement is True.`,
      `**C.** → True

$C(Q)$ is daily operating cost in hundreds of euros for $Q$ vans; $C'(Q)$ is marginal cost (the slope of cost) and $C''(Q)$ reads whether that slope is rising.

Evaluate cost at the trough:

$$
C(5)=5^{2}-10\\cdot 5+40=25-50+40=15.
$$

The minimal cost value is $15$ (hundreds of euros).

Evaluating $C(5)=25-50+40=15$ reads the trough cost in hundreds of euros.

The statement is True.`,
      `**D.** → False

$C(Q)$ is daily operating cost in hundreds of euros for $Q$ vans; $C'(Q)$ is marginal cost (the slope of cost) and $C''(Q)$ reads whether that slope is rising.

A flat slope alone does not decide peak versus trough. Here $C''(5)=2>0$, so the bend is upward: a local *minimum* of cost. Claiming a local cost *maximum* reverses the correct label.

The statement is False.`,
      `**E.** → True

$C(Q)$ is daily operating cost in hundreds of euros for $Q$ vans; $C'(Q)$ is marginal cost (the slope of cost) and $C''(Q)$ reads whether that slope is rising.

On $Q\\ge 0$ the parabola $C(Q)=Q^{2}-10Q+40$ opens upward ($C''=2>0$) with its vertex at $Q=5\\ge 0$. Therefore the local trough is also the global minimum on the domain: the cost-minimising fleet is five vans globally as well as locally.

The statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 83,
    solution_overview:
      "From $C(Q)=Q^{2}-10Q+40$, find the flat-slope fleet $Q=5$, confirm a trough with $C''>0$, evaluate $C(5)=15$, and note the same point is the global minimum on $Q\\ge 0$.",
  },
  {
    id: "math-11-84",
    case_id: "MATH 11.84",
    title: "Two promo scores: flat slope and flat bend at zero",
    subsection: "11.3",
    context:
      "A marketing team compares two campaign-score models near intensity $x=0$: $$A(x)=x^{4}\\qquad\\text{and}\\qquad B(x)=-x^{4}.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "At intensity zero, both scores have a flat slope and a flat second derivative.",
      "Checking the local shape with the second derivative alone is inconclusive at zero for both scores.",
      "Even so, intensity zero is a strict local trough of score $A$.",
      "Even so, intensity zero is a strict local peak of score $B$.",
      "Because both second derivatives vanish at zero, neither score can have a local peak or trough there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write $A(x)=x^{4}$ and $B(x)=-x^{4}$ for the two campaign scores; $A'$, $A''$, $B'$, and $B''$ are their first and second derivatives with respect to intensity $x$.

Differentiate $A(x)=x^{4}$:

$$
A'(x)=4x^{3},\\qquad A''(x)=12x^{2}.
$$

At $x=0$: $A'(0)=0$ and $A''(0)=0$. For $B(x)=-x^{4}$:

$$
B'(x)=-4x^{3},\\qquad B''(x)=-12x^{2},
$$

so $B'(0)=0$ and $B''(0)=0$ as well. Both models are flat in the first and second derivatives at zero.

Both $A'(0)=A''(0)=0$ and $B'(0)=B''(0)=0$ follow by substituting $x=0$ into the derivative formulas above.

The statement is True.`,
      `**B.** → True

Write $A(x)=x^{4}$ and $B(x)=-x^{4}$ for the two campaign scores; $A'$, $A''$, $B'$, and $B''$ are their first and second derivatives with respect to intensity $x$.

The usual bend test needs a *nonzero* second derivative at a flat-slope point. Here $A''(0)=B''(0)=0$, so that test gives no label for either model — the check is inconclusive at $x=0$.

A bend test needs a nonzero second derivative; vanishing $A''(0)$ and $B''(0)$ make that test inconclusive for both scores.

Zero second derivatives block the usual bend test for both $A$ and $B$ at the origin.

The statement is True.`,
      `**C.** → True

Write $A(x)=x^{4}$ and $B(x)=-x^{4}$ for the two campaign scores; $A'$, $A''$, $B'$, and $B''$ are their first and second derivatives with respect to intensity $x$.

Compare nearby values of $A$. For any $x\\neq 0$,

$$
A(x)=x^{4}>0=A(0).
$$

So every nearby intensity gives a strictly higher score than at zero: $x=0$ is a strict local (and global) minimum of $A$ — a trough — even though $A''(0)=0$.

The inequality $x^{4}>0$ for $x\\neq 0$ forces $A(x)>A(0)$, proving a strict trough at zero despite $A''(0)=0$.

The statement is True.`,
      `**D.** → True

Write $A(x)=x^{4}$ and $B(x)=-x^{4}$ for the two campaign scores; $A'$, $A''$, $B'$, and $B''$ are their first and second derivatives with respect to intensity $x$.

For $B$, any $x\\neq 0$ gives

$$
B(x)=-x^{4}<0=B(0).
$$

Nearby scores are strictly lower, so $x=0$ is a strict local (and global) maximum of $B$ — a peak — despite $B''(0)=0$.

Likewise $-x^{4}<0$ for $x\\neq 0$ forces $B(x)<B(0)$, proving a strict peak at zero despite $B''(0)=0$.

The identity $B(0)-B(x)=x^{4}$ is strictly positive off zero, proving the peak.

The statement is True.`,
      `**E.** → False

Write $A(x)=x^{4}$ and $B(x)=-x^{4}$ for the two campaign scores; $A'$, $A''$, $B'$, and $B''$ are their first and second derivatives with respect to intensity $x$.

Vanishing $A''(0)$ and $B''(0)$ only means the second-derivative bend test is inconclusive. Direct comparison still shows $A$ has a trough and $B$ has a peak at zero. A zero second derivative does *not* forbid a local extremum.

Inconclusive bend tests do not forbid extrema; nearby comparison still establishes a trough for $A$ and a peak for $B$.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 84,
    solution_overview:
      "Show $A'=B'=A''=B''=0$ at $x=0$, note the bend test fails, then prove by nearby comparison that $A$ has a trough and $B$ a peak; reject the claim that neither can be an extremum.",
  },
  {
    id: "math-11-85",
    case_id: "MATH 11.85",
    title: "Two cafés: same flat output, opposite profit bends",
    subsection: "11.3",
    context:
      "Café A models daily profit by $$P_A(Q)=-Q^{2}+20Q-50.$$ Café B models daily profit by $$P_B(Q)=Q^{2}-20Q+90.$$ Both managers look at the output $Q=10$ lunch covers. Decide TRUE or FALSE for each claim.",
    statements: [
      "At ten covers, both cafés have a flat profit slope.",
      "Café A's profit curve bends downward at ten covers, so that output is a local profit peak for A.",
      "Café B's profit curve bends upward at ten covers, so that output is a local profit trough for B.",
      "Because both cafés have a flat slope at ten covers, both are maximising profit there.",
      "At ten covers, Café A's profit is $50$ euros while Café B's profit is $-10$ euros."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$P_A(Q)$ and $P_B(Q)$ are daily profits for Café A and Café B; $P_A'$ and $P_B'$ are the slopes of those profit curves, and $P_A''$, $P_B''$ read the bends.

$P_A(Q)$ and $P_B(Q)$ denote daily profit for Café A and Café B. Their derivatives are the slopes of those profit curves (marginal profit).

Differentiate each model:

$$
P_A'(Q)=-2Q+20,\\qquad P_B'(Q)=2Q-20.
$$

At $Q=10$:

$$
P_A'(10)=-20+20=0,\\qquad P_B'(10)=20-20=0.
$$

Both cafés have a flat profit slope at ten covers. A shared flat spot is only a candidate until each bend is labelled.

The statement is True.`,
      `**B.** → True

Start from Café A's profit $P_A(Q)=-Q^{2}+20Q-50$. Its slope is $P_A'(Q)=-2Q+20$, which vanishes at $Q=10$. Differentiating once more gives the constant $P_A''(Q)=-2$. Evaluating at the flat spot, $P_A''(10)=-2<0$, so the profit curve bends strictly downward there. In economic language: ten covers is a strict local profit maximum for Café A alone.

So Café A's downward bend at ten covers is fully established by $P_A''(10)=-2<0$.

Ten covers is Café A's local profit peak.

Café A's downward bend at ten covers is certified by $P_A''(10)=-2<0$.

The statement is True.`,
      `**C.** → True

Café B's profit $P_B(Q)=Q^{2}-20Q+90$ has slope $P_B'(Q)=2Q-20$, also flat at $Q=10$. The second derivative is the constant $P_B''(Q)=2>0$, so at that same cover count the curve bends upward. Ten covers is therefore a strict local profit minimum (trough) for B — the opposite economic label from Café A.

So Café B's upward bend at ten covers is fully established by $P_B''(10)=2>0$.

Café B's trough label is therefore the opposite of Café A's peak label at the same output.

Café B's upward bend at ten covers is certified by $P_B''(10)=2>0$.

The statement is True.`,
      `**D.** → False

$P_A(Q)$ and $P_B(Q)$ are daily profits for Café A and Café B; $P_A'$ and $P_B'$ are the slopes of those profit curves, and $P_A''$, $P_B''$ read the bends.

A shared flat-slope output does not mean both maximise. Café A has a peak ($P_A''<0$) while Café B has a trough ($P_B''>0$). Only A is maximising profit at $Q=10$; B is at a local profit low. The both-maximising claim is false.

Opposite second-derivative signs mean only A maximises at $Q=10$; B is at a local low.

Opposite bends at the same $Q$ forbid a both-maximising conclusion.

The statement is False.`,
      `**E.** → True

$P_A(Q)$ and $P_B(Q)$ are daily profits for Café A and Café B; $P_A'$ and $P_B'$ are the slopes of those profit curves, and $P_A''$, $P_B''$ read the bends.

Evaluate the levels at the shared output:

$$
P_A(10)=-10^{2}+20\\cdot 10-50=-100+200-50=50,
$$

$$
P_B(10)=10^{2}-20\\cdot 10+90=100-200+90=-10.
$$

Café A earns $50$ euros; Café B's model gives $-10$ euros at the same output. Flat slopes need not produce equal profit levels.

Level evaluation gives $P_A(10)=50$ and $P_B(10)=-10$; equal flat slopes need not equalise profit heights.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 85,
    solution_overview:
      "At $Q=10$ both $P_A'$ and $P_B'$ vanish, but $P_A''<0$ (peak) while $P_B''>0$ (trough); levels are $50$ and $-10$, so both-max is false.",
  },
  {
    id: "math-11-86",
    case_id: "MATH 11.86",
    title: "Festival tickets: local peak versus endpoint global max",
    subsection: "11.3",
    context:
      "A festival ticket booth may sell any number of ticket packs in the closed interval $0\\le Q\\le 5$. Profit (in tens of euros) is modelled by $$P(Q)=Q^{3}-6Q^{2}+9Q+10.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "Inside $(0,5)$, profit has a flat slope at one pack and at three packs.",
      "One pack is a local profit peak and three packs is a local profit trough.",
      "The profit values are $14$ at one pack, $10$ at three packs, $10$ at zero packs, and $30$ at five packs.",
      "On the full interval $[0,5]$, the global profit maximum is at the local peak of one pack.",
      "On $[0,5]$, the global profit maximum is at the endpoint of five packs."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$P(Q)$ is festival profit in tens of euros for $Q$ ticket packs; $P'$ is its slope and $P''$ its bend.

$P(Q)$ is profit in tens of euros. Differentiate:

$$
P'(Q)=3Q^{2}-12Q+9=3(Q^{2}-4Q+3)=3(Q-1)(Q-3).
$$

So $P'(Q)=0$ at $Q=1$ and $Q=3$, both inside $(0,5)$. Flat slope occurs at one pack and at three packs.

The statement is True.`,
      `**B.** → True

$P(Q)$ is festival profit in tens of euros for $Q$ ticket packs; $P'$ is its slope and $P''$ its bend.

$$
P''(Q)=6Q-12.
$$

Then $P''(1)=-6<0$ (downward bend → local peak) and $P''(3)=6>0$ (upward bend → local trough). One pack is a local maximum; three packs is a local minimum.

Signs $P''(1)<0$ and $P''(3)>0$ label one pack as a local peak and three packs as a local trough.

The statement is True.`,
      `**C.** → True

$P(Q)$ is festival profit in tens of euros for $Q$ ticket packs; $P'$ is its slope and $P''$ its bend.

Evaluate:

$$
P(1)=1-6+9+10=14,
$$

$$
P(3)=27-54+27+10=10,
$$

$$
P(0)=10,\\qquad P(5)=125-150+45+10=30.
$$

The four values match the claim.

The four evaluations $14$, $10$, $10$, and $30$ match the claim and feed the global comparison.

The statement is True.`,
      `**D.** → False

$P(Q)$ is festival profit in tens of euros for $Q$ ticket packs; $P'$ is its slope and $P''$ its bend.

A local peak need not be the global maximum on a closed interval. Comparing values, $P(1)=14$ is beaten by the endpoint $P(5)=30$. The global max is not at $Q=1$.

Because $P(5)=30>14=P(1)$, the local peak at one pack is not the global max on $[0,5]$.

The statement is False.`,
      `**E.** → True

$P(Q)$ is festival profit in tens of euros for $Q$ ticket packs; $P'$ is its slope and $P''$ its bend.

Among $P(0)=10$, $P(1)=14$, $P(3)=10$, and $P(5)=30$, the largest is $P(5)=30$. On $[0,5]$ the global profit maximum is at the right endpoint $Q=5$.

The largest among the four values is $P(5)=30$, so the global maximum sits at the right endpoint.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 86,
    solution_overview:
      "Find flat-slope outputs $Q=1$ (local max, value $14$) and $Q=3$ (local min, value $10$); compare with endpoints to see the global max is $P(5)=30$.",
  },
  {
    id: "math-11-87",
    case_id: "MATH 11.87",
    title: "Pop-up stall: rising profit forces an endpoint maximum",
    subsection: "11.3",
    context:
      "A pop-up market stall can produce any output in $0\\le Q\\le 8$. Its daily profit in euros is $$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "The slope of profit is $P'(Q)=5-\\dfrac{Q}{5}$.",
      "Inside $(0,8)$ the slope stays strictly positive, so there is no interior flat-slope output.",
      "Because profit is strictly increasing on $[0,8]$, the maximum is at eight units and the minimum at zero.",
      "At the maximum output of eight units one must have a flat profit slope.",
      "The maximal profit on the interval is $36.6$ euros."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3$ is daily profit on $0\\le Q\\le 8$; $P'(Q)$ is the slope of that profit curve.

Differentiate term by term. The derivative of $5Q$ is $5$; the derivative of $\\dfrac{Q^{2}}{10}$ is $\\dfrac{2Q}{10}=\\dfrac{Q}{5}$; the constant $3$ vanishes. So

$$
P'(Q)=5-\\dfrac{Q}{5}.
$$

Using $\\dfrac{Q^{2}}{10}$ and its derivative $\\dfrac{Q}{5}$ yields the claimed slope $5-\\dfrac{Q}{5}$.

The statement is True.`,
      `**B.** → True

$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3$ is daily profit on $0\\le Q\\le 8$; $P'(Q)$ is the slope of that profit curve.

On $(0,8)$ one has $0<Q<8$, so $0<\\dfrac{Q}{5}<\\dfrac{8}{5}=1.6$. Therefore

$$
P'(Q)=5-\\dfrac{Q}{5}>5-1.6=3.4>0.
$$

The slope never hits zero inside the open interval — profit is strictly rising throughout.

The statement is True.`,
      `**C.** → True

$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3$ is daily profit on $0\\le Q\\le 8$; $P'(Q)$ is the slope of that profit curve.

A strictly positive derivative on $(0,8)$ (and continuity on the closed interval) means $P$ is strictly increasing on $[0,8]$. The smallest value is at the left endpoint $Q=0$ and the largest at the right endpoint $Q=8$.

The statement is True.`,
      `**D.** → False

$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3$ is daily profit on $0\\le Q\\le 8$; $P'(Q)$ is the slope of that profit curve.

Endpoint maxima need not have a flat slope. Here

$$
P'(8)=5-\\dfrac{8}{5}=5-1.6=3.4\\neq 0.
$$

Profit is maximised at $Q=8$ because the feasible interval ends there while the curve is still rising — not because the slope is zero.

The statement is False.`,
      `**E.** → True

$P(Q)=5Q-\\dfrac{Q^{2}}{10}+3$ is daily profit on $0\\le Q\\le 8$; $P'(Q)$ is the slope of that profit curve.

Evaluate at the right endpoint:

$$
P(8)=5\\cdot 8-\\dfrac{8^{2}}{10}+3=40-\\dfrac{64}{10}+3=40-6.4+3=36.6.
$$

Maximal profit on $[0,8]$ is $36.6$ euros.

Substituting $Q=8$ into $P$ with $\\dfrac{64}{10}=6.4$ yields the peak profit $36.6$ euros.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 87,
    solution_overview:
      "Show $P'=5-\\dfrac{Q}{5}>0$ on $(0,8)$, so the max is the endpoint $Q=8$ with $P(8)=36.6$, without needing $P'(8)=0$.",
  },
  {
    id: "math-11-88",
    case_id: "MATH 11.88",
    title: "App studio: local peak and trough, no global max on $[0,\\infty)$",
    subsection: "11.3",
    context:
      "An app studio models weekly net benefit (in thousands of euros) by $$B(x)=x^{3}-6x^{2}+9x+2$$ for advertising intensity $x\\ge 0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Net benefit has a flat slope at intensities $1$ and $3$.",
      "A sign chart of the slope shows a change from positive to negative at intensity $1$, so that point is a local peak.",
      "A sign chart shows a change from negative to positive at intensity $3$, so that point is a local trough.",
      "The second-derivative bend test confirms the same local peak at $1$ and local trough at $3$.",
      "Because intensity $1$ is a local peak, it must also be the global maximum of net benefit on $[0,\\infty)$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Weekly net benefit is $B(x)=x^{3}-6x^{2}+9x+2$. Differentiate and factor completely:

$$
B'(x)=3x^{2}-12x+9=3(x^{2}-4x+3)=3(x-1)(x-3).
$$

The roots are exactly the intensities $x=1$ and $x=3$. Those are the only places where the slope of net benefit is flat on $x\\ge 0$.

Those two roots of $B'$ are the complete flat-slope list for this cubic net-benefit model.

No other intensity makes $B'$ vanish on $x\\ge 0$.

Intensities $1$ and $3$ are the only flat-slope advertising levels for this cubic.

That is the claim-specific reading of letter A for this model.

The statement is True.`,
      `**B.** → True

$B(x)$ is weekly net benefit at advertising intensity $x\\ge 0$; $B'$ is its slope and $B''$ its bend.

For $x\\in(0,1)$, both factors $(x-1)$ and $(x-3)$ are negative, so $B'(x)>0$. For $x\\in(1,3)$, $(x-1)>0$ and $(x-3)<0$, so $B'(x)<0$. The slope changes from $+$ to $-$ at $x=1$: a local maximum (peak).

On $(0,1)$ both factors are negative so $B'>0$; on $(1,3)$ the factors have opposite signs so $B'<0$. A $+\\to-$ change at $x=1$ is a local peak.

The sign pattern $+/−$ across $x=1$ is the first-derivative evidence for a local peak.

The statement is True.`,
      `**C.** → True

From the factored slope $B'(x)=3(x-1)(x-3)$: on the interval $(1,3)$ the factor $(x-1)$ is positive while $(x-3)$ is negative, so $B'<0$. For $x>3$ both factors are positive, so $B'>0$. Crossing $x=3$ the slope changes from negative to positive — the first-derivative sign chart for a local trough of net benefit at intensity $3$.

The $-/+$ sign change of $B'$ across intensity $3$ is the trough certificate.

Intensity $3$ is therefore a local trough of weekly net benefit.

The $-/+$ sign change of $B'$ across $x=3$ certifies a local trough.

The statement is True.`,
      `**D.** → True

Differentiate the slope to obtain $B''(x)=6x-12$. Substitute the two flat intensities:

$$
B''(1)=-6<0,\\qquad B''(3)=6>0.
$$

Negative bend at $1$ confirms the local peak already seen from the sign chart; positive bend at $3$ confirms the local trough. The two tools agree on both labels.

Agreement of $B''$ signs with the sign chart closes the peak/trough labelling at $1$ and $3$.

Peak at $1$ and trough at $3$ are confirmed by both tools.

$B''(1)<0$ and $B''(3)>0$ recover the same peak and trough labels as the sign chart.

The statement is True.`,
      `**E.** → False

$B(x)$ is weekly net benefit at advertising intensity $x\\ge 0$; $B'$ is its slope and $B''$ its bend.

A local peak need not be global on an unbounded domain. As $x\\to\\infty$, the cubic term $x^{3}$ dominates and $B(x)\\to\\infty$. Net benefit grows without bound, so there is no global maximum on $[0,\\infty)$, and $x=1$ cannot be one.

As $x\\to\\infty$, the cubic $x^{3}$ drives $B(x)\\to\\infty$, so no global maximum exists on $[0,\\infty)$ and the local peak at $1$ cannot be global.

Unbounded growth of the cubic forbids any global max on $[0,\\infty)$.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 88,
    solution_overview:
      "Locate flat slopes at $x=1$ (local max) and $x=3$ (local min) by signs and $B''$; reject global-max claims because $B(x)\\to\\infty$ as $x\\to\\infty$.",
  },
  {
    id: "math-11-89",
    case_id: "MATH 11.89",
    title: "Bakery ovens: local trough, local peak, global max at zero",
    subsection: "11.3",
    context:
      "A bakery's daily profit from running $Q$ ovens is $$P(Q)=-Q^{3}+9Q^{2}-24Q+30$$ for $0\\le Q\\le 6$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Inside $(0,6)$, profit has a flat slope at two ovens and at four ovens.",
      "Two ovens is a local profit trough.",
      "Four ovens is a local profit peak.",
      "Comparing all candidate and endpoint values, the global profit maximum on $[0,6]$ is at zero ovens.",
      "Finding the flat-slope outputs alone already proves which point maximises profit on $[0,6]$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$P(Q)$ is daily bakery profit from $Q$ ovens on $0\\le Q\\le 6$; $P'$ and $P''$ are its slope and bend.

Differentiate:

$$
P'(Q)=-3Q^{2}+18Q-24=-3(Q^{2}-6Q+8)=-3(Q-2)(Q-4).
$$

So $P'(Q)=0$ at $Q=2$ and $Q=4$, both in $(0,6)$.

Factoring $P'=-3(Q-2)(Q-4)$ places the only interior flat slopes at two and four ovens.

The statement is True.`,
      `**B.** → True

$P(Q)$ is daily bakery profit from $Q$ ovens on $0\\le Q\\le 6$; $P'$ and $P''$ are its slope and bend.

$$
P''(Q)=-6Q+18.
$$

Then $P''(2)=-12+18=6>0$: upward bend, so two ovens is a strict local profit minimum (trough).

At $Q=2$, $P''(2)=6>0$, so two ovens is a strict local profit trough.

Positive $P''(2)$ is the bend evidence for a local profit trough at two ovens.

The statement is True.`,
      `**C.** → True

$P(Q)$ is daily bakery profit from $Q$ ovens on $0\\le Q\\le 6$; $P'$ and $P''$ are its slope and bend.

$P''(4)=-24+18=-6<0$: downward bend, so four ovens is a strict local profit maximum (peak).

At $Q=4$, $P''(4)=-6<0$, so four ovens is a strict local profit peak.

Negative $P''(4)$ is the bend evidence for a local profit peak at four ovens.

The statement is True.`,
      `**D.** → True

$P(Q)$ is daily bakery profit from $Q$ ovens on $0\\le Q\\le 6$; $P'$ and $P''$ are its slope and bend.

Evaluate:

$$
P(0)=30,\\quad P(2)=-8+36-48+30=10,\\quad P(4)=-64+144-96+30=14,\\quad P(6)=-216+324-144+30=-6.
$$

The largest value on $[0,6]$ is $P(0)=30$, so the global maximum is at zero ovens (the left endpoint).

The statement is True.`,
      `**E.** → False

$P(Q)$ is daily bakery profit from $Q$ ovens on $0\\le Q\\le 6$; $P'$ and $P''$ are its slope and bend.

Listing flat-slope outputs only produces candidates. One of them is a trough ($Q=2$), and the global max on a closed interval can sit at an endpoint ($Q=0$ here). You must still label each candidate and compare values — stopping at $P'=0$ leaves the maximisation unfinished.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 89,
    solution_overview:
      "Flat slopes at $Q=2$ (local min, value $10$) and $Q=4$ (local max, value $14$); global max on $[0,6]$ is $P(0)=30$.",
  },
  {
    id: "math-11-90",
    case_id: "MATH 11.90",
    title: "Print shop: match marginal revenue to marginal cost",
    subsection: "11.3",
    context:
      "A print shop has revenue $$R(Q)=40Q-2Q^{2}$$ and cost $$C(Q)=Q^{2}+4Q+10$$ for $Q>0$. Profit is $P=R-C$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Profit simplifies to $P(Q)=-3Q^{2}+36Q-10$, with slope $P'(Q)=-6Q+36$.",
      "Profit has a flat slope at six jobs, and there marginal revenue equals marginal cost at $16$.",
      "At six jobs the profit curve bends downward, so that output is a local profit peak.",
      "Peak profit is $98$ euros.",
      "Matching marginal revenue to marginal cost is enough; one may skip checking the bend of profit."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$. Then $R'$, $C'$, and $P'$ are marginal revenue, marginal cost, and marginal profit.

Profit is revenue minus cost:

$$
P(Q)=R(Q)-C(Q)=(40Q-2Q^{2})-(Q^{2}+4Q+10)=-3Q^{2}+36Q-10.
$$

Here $P(Q)$ denotes daily profit. Differentiate to get the slope (marginal profit):

$$
P'(Q)=-6Q+36.
$$

The statement is True.`,
      `**B.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$. Then $R'$, $C'$, and $P'$ are marginal revenue, marginal cost, and marginal profit.

Set the slope of profit to zero:

$$
-6Q+36=0\\qquad\\Rightarrow\\qquad Q=6.
$$

Marginal revenue is $R'(Q)$ and marginal cost is $C'(Q)$:

$$
R'(Q)=40-4Q,\\qquad C'(Q)=2Q+4.
$$

The statement is True.`,
      `**C.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$. Then $R'$, $C'$, and $P'$ are marginal revenue, marginal cost, and marginal profit.

$$
P''(Q)=-6<0
$$

at $Q=6$ (and everywhere). The profit curve bends downward at the flat spot: six jobs is a strict local profit maximum — a local peak.

The constant $P''=-6<0$ is a downward bend, so six jobs is a strict local profit peak.

The statement is True.`,
      `**D.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$. Then $R'$, $C'$, and $P'$ are marginal revenue, marginal cost, and marginal profit.

Substitute into the profit model:

$$
P(6)=-3\\cdot 6^{2}+36\\cdot 6-10=-3\\cdot 36+216-10=-108+216-10=98.
$$

Peak profit is $98$ euros.

Substituting $Q=6$ into the profit level produces $P(6)=98$ euros.

The statement is True.`,
      `**E.** → False

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$. Then $R'$, $C'$, and $P'$ are marginal revenue, marginal cost, and marginal profit.

Matching $R'=C'$ is the same as finding $P'=0$ — it only locates a flat-slope candidate. Without a bend check (second derivative or sign chart), you cannot tell a profit peak from a profit trough. Skipping that second check leaves the maximisation argument incomplete.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 90,
    solution_overview:
      "Build $P=-3Q^{2}+36Q-10$, find $Q=6$ via $P'=0$ or $R'=C'=16$, confirm $P''<0$, and evaluate $P(6)=98$.",
  },
  {
    id: "math-11-91",
    case_id: "MATH 11.91",
    title: "Two bakeries: shared flat output, opposite profit bends",
    subsection: "11.3",
    context:
      "Bakery North models daily profit by $$P_N(Q)=-Q^{2}+16Q-30.$$ Bakery South models daily profit by $$P_S(Q)=Q^{2}-16Q+70.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "Both bakeries have a flat profit slope at eight loaves a day.",
      "At eight loaves, North's profit curve bends downward, so that output is a local profit peak for North.",
      "At eight loaves, South's profit curve bends upward, so that output is a local profit trough for South.",
      "North's peak profit is $34$ euros, while South's profit at eight loaves is $6$ euros.",
      "Because both flat-slope outputs equal eight, both bakeries are at a profit maximum."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$P_N(Q)$ and $P_S(Q)$ are daily profits for Bakery North and Bakery South; primes denote slopes and double primes denote bends.

$P_N(Q)$ and $P_S(Q)$ denote daily profit (euros) for North and South when $Q$ loaves are sold. Their derivatives $P_N'(Q)$ and $P_S'(Q)$ are the slopes of those profit curves — marginal profit for each bakery.

Differentiate each model:

$$
P_N'(Q)=-2Q+16,\\qquad P_S'(Q)=2Q-16.
$$

Set each slope to zero:

$$
-2Q+16=0\\qquad\\Rightarrow\\qquad Q=8,
$$

$$
2Q-16=0\\qquad\\Rightarrow\\qquad Q=8.
$$

The statement is True.`,
      `**B.** → True

Bakery North's profit $P_N(Q)=-Q^{2}+16Q-30$ has slope $P_N'(Q)=-2Q+16$, flat at eight loaves. Differentiating again yields the constant $P_N''(Q)=-2$. In particular $P_N''(8)=-2<0$: North's profit curve bends downward at that flat spot, so eight loaves is a strict local profit maximum for North.

North's peak label at eight loaves rests on the constant downward bend $P_N''=-2$.

Eight loaves is North's local profit peak.

North's peak at eight loaves follows from the constant downward bend $P_N''=-2$.

That is the claim-specific reading of letter B for this model.

The statement is True.`,
      `**C.** → True

$P_S(Q)$ denotes Bakery South's daily profit in euros. Its derivative $P_S'(Q)$ is the slope of that profit curve (marginal profit), and $P_S''(Q)$ reads the bend.

South's model is $P_S(Q)=Q^{2}-16Q+70$, so

$$
P_S'(Q)=2Q-16,\\qquad P_S''(Q)=2.
$$

The slope is flat when $2Q-16=0$, i.e. at $Q=8$. At that same output, $P_S''(8)=2>0$: the profit curve bends upward. Eight loaves is therefore a strict local profit *minimum* for South — a trough, not a peak. Same flat-slope output as North, opposite economic label.

South's trough at eight loaves follows from the constant upward bend $P_S''=2$.

The statement is True.`,
      `**D.** → True

$P_N(Q)$ and $P_S(Q)$ are daily profits for Bakery North and Bakery South; primes denote slopes and double primes denote bends.

Evaluate the profit levels at $Q=8$:

$$
P_N(8)=-8^{2}+16\\cdot 8-30=-64+128-30=34,
$$

$$
P_S(8)=8^{2}-16\\cdot 8+70=64-128+70=6.
$$

North's peak profit is $34$ euros; South earns only $6$ euros at the same output. Flat slope does not force equal profit levels across firms.

Level evaluation gives $P_N(8)=34$ and $P_S(8)=6$; flat slopes need not equalise profit heights across bakeries.

The statement is True.`,
      `**E.** → False

$P_N(Q)$ and $P_S(Q)$ are daily profits for Bakery North and Bakery South; primes denote slopes and double primes denote bends.

Sharing the flat-slope output $Q=8$ does not mean both maximise. The second derivatives have opposite signs: $P_N''<0$ (peak) versus $P_S''>0$ (trough). Only North is at a profit maximum; South is at a local profit low. The claim that both are maximising is false.

Opposite second-derivative signs mean only North maximises at $Q=8$; South is at a local low.

Opposite bends refute the claim that both bakeries maximise at eight loaves.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 91,
    solution_overview:
      "Both have $P'=0$ at $Q=8$, but $P_N''<0$ (peak, value $34$) while $P_S''>0$ (trough, value $6$); both-max is false.",
  },
  {
    id: "math-11-92",
    case_id: "MATH 11.92",
    title: "Loyalty index: bend test fails but a global peak remains",
    subsection: "11.3",
    context:
      "A retailer's loyalty index near a special-offer intensity $x$ is modelled by $$L(x)=10-x^{4}.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "At intensity zero, both the slope and the second derivative of the loyalty index are flat.",
      "The usual downward-bend test for a strict local peak does not apply at intensity zero.",
      "Even so, intensity zero is a strict global maximum of the loyalty index.",
      "Because the second derivative vanishes at zero, intensity zero cannot be a local peak.",
      "A necessary condition at an interior local peak is that the second derivative is at most zero; here that necessary condition still holds."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$L(x)=10-x^{4}$ is the loyalty index; $L'$ and $L''$ are its first and second derivatives with respect to offer intensity $x$.

$L(x)$ is the loyalty index. Differentiate:

$$
L'(x)=-4x^{3},\\qquad L''(x)=-12x^{2}.
$$

At $x=0$: $L'(0)=0$ and $L''(0)=0$. Both the slope and the second derivative are flat there.

From $L'=-4x^{3}$ and $L''=-12x^{2}$ one gets $L'(0)=L''(0)=0$: both slope and second derivative are flat at intensity zero.

Direct substitution into $L'=-4x^{3}$ and $L''=-12x^{2}$ gives two zeros at the origin.

The statement is True.`,
      `**B.** → True

Loyalty is $L(x)=10-x^{4}$ with $L'(0)=0$ and $L''(0)=0$. A standard sufficient test for a strict local maximum asks for a flat slope together with a strictly negative second derivative. Here the second derivative is zero rather than negative, so that sufficient downward-bend test simply does not apply at intensity zero — it is inconclusive, not a proof that there is no peak.

Vanishing $L''(0)$ blocks the sufficient $L''<0$ peak test without deciding against a peak.

Vanishing $L''(0)$ blocks the sufficient $L''<0$ test without ruling out a peak.

The statement is True.`,
      `**C.** → True

$L(x)=10-x^{4}$ is the loyalty index; $L'$ and $L''$ are its first and second derivatives with respect to offer intensity $x$.

For every $x$, $-x^{4}\\le 0$, so

$$
L(x)=10-x^{4}\\le 10=L(0),
$$

with equality only at $x=0$. Therefore intensity zero is a strict global maximum of $L$, even though $L''(0)=0$.

Because $-x^{4}\\le 0$ for all $x$, one has $L(x)=10-x^{4}\\le 10=L(0)$ with equality only at $0$, proving a strict global maximum.

The inequality $L(x)\\le 10$ with equality only at $0$ is a global-max proof.

The statement is True.`,
      `**D.** → False

$L(x)=10-x^{4}$ is the loyalty index; $L'$ and $L''$ are its first and second derivatives with respect to offer intensity $x$.

A vanishing second derivative does not forbid a peak — it only blocks the sufficient bend test. Direct comparison shows $L(x)\\le L(0)$ everywhere, so $x=0$ *is* a local (indeed global) maximum.

A vanishing second derivative blocks the sufficient bend test but does not forbid a peak; the comparison $L(x)\\le L(0)$ shows a peak still exists.

A failed sufficient bend test does not erase the peak proved by $L(x)\\le L(0)$.

The statement is False.`,
      `**E.** → True

$L(x)=10-x^{4}$ is the loyalty index; $L'$ and $L''$ are its first and second derivatives with respect to offer intensity $x$.

At an interior local maximum of a twice differentiable function, a *necessary* condition is $L''\\le 0$ (the curve cannot bend strictly upward at a peak). Here $L''(0)=0$, which still satisfies $L''\\le 0$. Necessity holds; sufficiency for a strict peak via $L''<0$ does not.

Necessity at an interior local max requires only $L''\\le 0$; here $L''(0)=0$ still satisfies that necessary inequality even though $L''<0$ fails.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 92,
    solution_overview:
      "At $x=0$, $L'=L''=0$; the sufficient $L''<0$ test fails, yet $L(x)\\le 10$ proves a global max; necessary $L''\\le 0$ still holds.",
  },
  {
    id: "math-11-93",
    case_id: "MATH 11.93",
    title: "Workshop firm: cost trough and profit peak at different outputs",
    subsection: "11.3",
    context:
      "A workshop firm has cost $$C(Q)=Q^{2}-8Q+30$$ and revenue $$R(Q)=20Q-Q^{2}$$ for $Q>0$. Profit is $P=R-C$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Daily cost is minimised at four units, where the cost curve has a flat slope and an upward bend.",
      "Profit simplifies to $P(Q)=-2Q^{2}+28Q-30$, and profit has a flat slope at seven units.",
      "At seven units the profit curve bends downward, so that output is a local profit peak.",
      "The cost-minimising output of four units is automatically the profit-maximising output as well.",
      "At the profit peak, profit equals $68$ euros, while at the cost trough, cost equals $14$ euros."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Cost is $C(Q)$, revenue is $R(Q)$, and profit is $P=R-C$; $C'$, $P'$ are slopes and $C''$, $P''$ are bends.

$$
C'(Q)=2Q-8,\\qquad C''(Q)=2.
$$

Flat slope: $2Q-8=0$ gives $Q=4$. Then $C''(4)=2>0$ (upward bend), so four units is a strict local cost minimum. For this upward-opening parabola it is the global cost trough on $Q>0$.

Cost has $C'=2Q-8=0$ at $Q=4$ and $C''=2>0$, so four units is a strict local (and global on $Q>0$) cost trough.

Cost's flat slope at four units plus $C''>0$ is the trough certificate.

The statement is True.`,
      `**B.** → True

Form profit from the given revenue and cost:

$$
P(Q)=(20Q-Q^{2})-(Q^{2}-8Q+30)=-2Q^{2}+28Q-30.
$$

Differentiate: $P'(Q)=-4Q+28$. Set the slope to zero: $-4Q+28=0$ gives $Q=7$. Profit has a flat slope at seven units — a different output from the cost trough at four units.

The flat-profit output $Q=7$ is therefore distinct from the cost trough at $Q=4$.

Profit's flat output at seven units differs from cost's trough at four.

Profit's flat output $Q=7$ is distinct from the cost trough at $Q=4$.

That is the claim-specific reading of letter B for this model.

The statement is True.`,
      `**C.** → True

Profit for the workshop is $P(Q)=R(Q)-C(Q)=-2Q^{2}+28Q-30$, formed from the given revenue and cost. The derivative $P'(Q)$ is marginal profit, and $P''(Q)$ reads the bend of the profit curve.

Differentiating twice gives the constant

$$
P''(Q)=-4.
$$

At the flat-profit output $Q=7$ already found from $P'=-4Q+28=0$, one has $P''(7)=-4<0$. The profit curve bends strictly downward there, so seven units is a strict local profit maximum — a local profit peak for this firm.

Downward bend $P''(7)=-4$ certifies seven units as a local profit peak.

The statement is True.`,
      `**D.** → False

Cost is $C(Q)$, revenue is $R(Q)$, and profit is $P=R-C$; $C'$, $P'$ are slopes and $C''$, $P''$ are bends.

Cost minimisation and profit maximisation solve different problems. Cost is minimised at $Q=4$, while profit is maximised at $Q=7$. The cost-trough output is *not* automatically the profit peak.

Cost's trough at $Q=4$ and profit's peak at $Q=7$ are different outputs; minimising cost does not automatically maximise profit.

Different first-derivative equations for $C$ and $P$ produce different optimisers $4$ and $7$.

The statement is False.`,
      `**E.** → True

Evaluate the two different objectives at their own optimisers:

$$
P(7)=-2\\cdot 49+28\\cdot 7-30=-98+196-30=68,
$$

$$
C(4)=16-32+30=14.
$$

Peak profit is $68$ euros at seven units, while trough cost is $14$ euros at four units. Reporting both levels does not require the two outputs to coincide.

Reporting $P(7)=68$ and $C(4)=14$ keeps the two optimisers' levels visibly separate.

The two levels belong to two different optimisers.

Peak profit $68$ and trough cost $14$ belong to two different outputs.

That is the claim-specific reading of letter E for this model.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 93,
    solution_overview:
      "Minimise $C$ at $Q=4$ ($C=14$); maximise $P=-2Q^{2}+28Q-30$ at $Q=7$ ($P=68$); the two outputs differ.",
  },
  {
    id: "math-11-94",
    case_id: "MATH 11.94",
    title: "Two hikers: same flat hour, opposite utility bends",
    subsection: "11.3",
    context:
      "Hiker A has trail utility $$U_A(t)=-t^{2}+10t$$ from $t$ hours on a path. Hiker B has utility $$U_B(t)=t^{2}-10t+30.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "Both hikers have a flat utility slope at five hours.",
      "At five hours, A's utility curve bends downward, so that hour maximises A's satisfaction locally.",
      "At five hours, B's utility curve bends upward, so that hour minimises B's satisfaction locally.",
      "A's peak utility is $25$, while B's utility at five hours is $5$.",
      "Because both solve for a flat slope at the same hour, both are maximising satisfaction there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$U_A(t)$ and $U_B(t)$ are trail utilities for hikers A and B after $t$ hours; $U_A'$, $U_B'$ are marginal utilities and double primes read the bends.

$U_A(t)$ and $U_B(t)$ denote each hiker's utility from $t$ hours on the trail. The derivatives $U_A'(t)$ and $U_B'(t)$ are the slopes of those utility curves (marginal utility with respect to time).

Differentiate each model:

$$
U_A'(t)=-2t+10,\\qquad U_B'(t)=2t-10.
$$

Set each slope to zero:

$$
-2t+10=0\\qquad\\Rightarrow\\qquad t=5,
$$

$$
2t-10=0\\qquad\\Rightarrow\\qquad t=5.
$$

The statement is True.`,
      `**B.** → True

$U_A(t)$ and $U_B(t)$ are trail utilities for hikers A and B after $t$ hours; $U_A'$, $U_B'$ are marginal utilities and double primes read the bends.

Differentiate A's slope once more to read the bend:

$$
U_A''(t)=-2.
$$

In particular $U_A''(5)=-2<0$. A negative second derivative means the utility curve bends downward at the flat spot, so $t=5$ is a strict local maximum of $U_A$ — five hours maximises A's satisfaction locally.

Hiker A's $U_A''=-2<0$ is a downward bend, so five hours maximises A's satisfaction locally.

The statement is True.`,
      `**C.** → True

$U_A(t)$ and $U_B(t)$ are trail utilities for hikers A and B after $t$ hours; $U_A'$, $U_B'$ are marginal utilities and double primes read the bends.

For B,

$$
U_B''(t)=2>0
$$

at $t=5$. A positive second derivative means the utility curve bends upward: five hours is a strict local *minimum* of $U_B$. Hiker B is at a local satisfaction trough, not a peak.

Hiker B's $U_B''=2>0$ is an upward bend, so five hours minimises B's satisfaction locally.

Upward bend $U_B''=2$ makes five hours B's local satisfaction trough.

The statement is True.`,
      `**D.** → True

$U_A(t)$ and $U_B(t)$ are trail utilities for hikers A and B after $t$ hours; $U_A'$, $U_B'$ are marginal utilities and double primes read the bends.

Evaluate the utility levels at the shared flat-slope hour:

$$
U_A(5)=-5^{2}+10\\cdot 5=-25+50=25,
$$

$$
U_B(5)=5^{2}-10\\cdot 5+30=25-50+30=5.
$$

A's peak utility is $25$, while B's utility at the same hour is only $5$. Slope and height are separate: both slopes are zero, but the levels differ.

Levels are $U_A(5)=25$ and $U_B(5)=5$; equal flat slopes need not equalise utility heights.

The statement is True.`,
      `**E.** → False

$U_A(t)$ and $U_B(t)$ are trail utilities for hikers A and B after $t$ hours; $U_A'$, $U_B'$ are marginal utilities and double primes read the bends.

A shared flat-slope hour only means both candidates sit where marginal utility is zero. The bend decides the economic label: $U_A''(5)<0$ makes a local peak for A, while $U_B''(5)>0$ makes a local trough for B. Claiming that both are maximising satisfaction at $t=5$ is false — only A is.

Opposite bends mean only A maximises at $t=5$; B is at a local satisfaction trough.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 94,
    solution_overview:
      "Both have $U'=0$ at $t=5$, but $U_A''<0$ (peak, value $25$) while $U_B''>0$ (trough, value $5$); both-max is false.",
  },
  {
    id: "math-11-95",
    case_id: "MATH 11.95",
    title: "Warehouse staffing: two troughs and one local peak",
    subsection: "11.3",
    context:
      "A warehouse models daily net payoff by $$f(x)=x^{4}-8x^{2}+16$$ for staffing intensity $x\\in\\mathbb{R}$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Net payoff has a flat slope at staffing intensities $-2$, $0$, and $2$.",
      "The second derivative is positive at $\\pm 2$ and negative at $0$.",
      "Therefore $\\pm 2$ are local troughs and $0$ is a local peak.",
      "The local peak value is $16$, while each local trough has value $0$.",
      "Because intensity zero is a local peak, it is also the global maximum of payoff on the whole real line."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$f(x)$ is daily net payoff at staffing intensity $x$; $f'$ is its slope and $f''$ its bend.

$f(x)$ denotes daily net payoff at staffing intensity $x$. The derivative $f'(x)$ is the slope of payoff with respect to intensity.

Differentiate:

$$
f'(x)=4x^{3}-16x=4x(x^{2}-4)=4x(x-2)(x+2).
$$

Setting $f'(x)=0$ gives the three roots $x=-2$, $x=0$, and $x=2$. Net payoff has a flat slope at those three staffing intensities.

Factoring $f'=4x(x-2)(x+2)$ shows flat slopes at staffing intensities $-2$, $0$, and $2$.

The statement is True.`,
      `**B.** → True

$f(x)$ is daily net payoff at staffing intensity $x$; $f'$ is its slope and $f''$ its bend.

Differentiate again:

$$
f''(x)=12x^{2}-16.
$$

Evaluate at the three flat-slope points:

$$
f''(-2)=12\\cdot 4-16=48-16=32>0,
$$

$$
f''(2)=32>0,\\qquad f''(0)=-16<0.
$$

The second derivative is positive at $\\pm 2$ and negative at $0$, as claimed.

Evaluating $f''=12x^{2}-16$ gives $f''(\\pm 2)=32>0$ and $f''(0)=-16<0$, matching the claimed signs.

The sign pattern of $f''$ at those three roots is $+$, $-$, $+$ as claimed.

The statement is True.`,
      `**C.** → True

$f(x)$ is daily net payoff at staffing intensity $x$; $f'$ is its slope and $f''$ its bend.

At a flat-slope point, a positive second derivative means an upward bend — a strict local minimum (trough). So $x=\\pm 2$ are local troughs. A negative second derivative means a downward bend — a strict local maximum (peak). So $x=0$ is a local peak.

Positive $f''$ at $\\pm 2$ labels local troughs; negative $f''$ at $0$ labels a local peak.

Bend signs translate directly into trough, peak, trough labels at $-2$, $0$, $2$.

The statement is True.`,
      `**D.** → True

Substitute the three flat-slope staffing intensities into the payoff $f(x)=x^{4}-8x^{2}+16$:

$$
f(0)=16,
$$

$$
f(2)=16-32+16=0,\\qquad f(-2)=16-32+16=0.
$$

The local peak at intensity zero has value $16$, while each local trough at $\\pm 2$ has value $0$. Those heights are level evaluations after the bend labels are known.

Peak height $16$ versus trough height $0$ completes the value readout at the three flat slopes.

Local peak height $16$ and trough heights $0$ complete the value readout.

That is the claim-specific reading of letter D for this model.

The statement is True.`,
      `**E.** → False

$f(x)$ is daily net payoff at staffing intensity $x$; $f'$ is its slope and $f''$ its bend.

A local peak need not be global on an unbounded domain. As $|x|\\to\\infty$, the leading term $x^{4}$ dominates and $f(x)\\to\\infty$. Payoff is unbounded above on $\\mathbb{R}$, so the local peak at $x=0$ is *not* a global maximum.

As $|x|\\to\\infty$, $x^{4}$ drives $f(x)\\to\\infty$, so the local peak at $0$ is not a global maximum on $\\mathbb{R}$.

Payoff $\\to\\infty$ as $|x|\\to\\infty$ forbids a global max at the local peak $x=0$.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 95,
    solution_overview:
      "Flat slopes at $x=\\pm 2$ (local mins, value $0$) and $x=0$ (local max, value $16$); no global max on $\\mathbb{R}$ because $f\\to\\infty$.",
  },
  {
    id: "math-11-96",
    case_id: "MATH 11.96",
    title: "Clinic hours: a flat-slope cost trough is not a cost peak",
    subsection: "11.3",
    context:
      "A clinic's daily staffing cost is $$C(h)=2h^{2}-24h+100$$ for $h>0$ open hours. A manager finds the hours where the slope is zero and calls that schedule optimal for cost control. Decide TRUE or FALSE for each claim.",
    statements: [
      "The slope of cost is flat at six open hours.",
      "At six hours the cost curve bends upward, so that schedule is a local cost trough.",
      "Calling six hours optimal is reasonable for a cost-minimisation goal, because the bend confirms a trough.",
      "If the clinic's goal were instead to maximise cost, the same flat-slope point would be the wrong type of extremum.",
      "A point where the slope is zero already means the clinic is cost-maximising, so no bend check is needed."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$C(h)=2h^{2}-24h+100$ is daily staffing cost for $h>0$ open hours; $C'$ is marginal cost and $C''$ reads the bend.

$C(h)$ is daily staffing cost. Differentiate:

$$
C'(h)=4h-24.
$$

Set the slope to zero: $4h-24=0$ gives $h=6$. Cost is flat at six open hours.

Setting $C'=4h-24=0$ isolates $h=6$; cost is flat at six open hours.

The statement is True.`,
      `**B.** → True

$C(h)=2h^{2}-24h+100$ is daily staffing cost for $h>0$ open hours; $C'$ is marginal cost and $C''$ reads the bend.

$$
C''(h)=4>0
$$

at $h=6$. The cost curve bends upward: six hours is a strict local cost minimum (trough).

The constant $C''=4>0$ is an upward bend, so six hours is a strict local cost trough.

Upward bend $C''=4$ labels that schedule as a cost trough.

The statement is True.`,
      `**C.** → True

$C(h)=2h^{2}-24h+100$ is daily staffing cost for $h>0$ open hours; $C'$ is marginal cost and $C''$ reads the bend.

For cost *minimisation*, a flat slope plus an upward bend is exactly what you want. Labelling $h=6$ as optimal for cost control is therefore reasonable — the bend confirms a trough, not a peak.

For cost minimisation, a flat slope plus an upward bend is the desired pair — calling $h=6$ optimal for cost control is reasonable.

The statement is True.`,
      `**D.** → True

$C(h)=2h^{2}-24h+100$ is daily staffing cost for $h>0$ open hours; $C'$ is marginal cost and $C''$ reads the bend.

If the (unusual) goal were to *maximise* cost, you would need a downward bend at the flat spot. Here $C''(6)>0$, so $h=6$ is a trough — the wrong type of extremum for a maximisation goal.

A cost-maximisation goal would need a downward bend; here $C''(6)>0$, so $h=6$ is the wrong type of extremum for that unusual goal.

The statement is True.`,
      `**E.** → False

$C(h)=2h^{2}-24h+100$ is daily staffing cost for $h>0$ open hours; $C'$ is marginal cost and $C''$ reads the bend.

Zero slope only marks a candidate. Without checking the bend, you cannot tell a cost trough from a cost peak. Here the bend is upward, so the clinic is cost-*minimising*, not cost-maximising. A bend check is essential.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 96,
    solution_overview:
      "Flat slope at $h=6$ with $C''>0$ gives a cost trough (good for min-cost); zero slope alone does not mean cost-maximising.",
  },
  {
    id: "math-11-97",
    case_id: "MATH 11.97",
    title: "Two cinemas: a profit peak versus a flat inflection",
    subsection: "11.3",
    context:
      "Cinema A models daily profit by $$P_A(Q)=-(Q-3)^{2}+5.$$ Cinema B models daily profit by $$P_B(Q)=(Q-3)^{3}+5.$$ Decide TRUE or FALSE for each claim.",
    statements: [
      "Both cinemas have a flat profit slope at three screenings.",
      "For Cinema A, three screenings is a local profit peak.",
      "For Cinema B, the second-derivative bend check is inconclusive at three screenings.",
      "A sign chart of Cinema B's slope shows no sign change at three screenings, so that output is neither a local peak nor a local trough for B.",
      "Because both have a flat slope at three screenings, both cinemas are at a profit peak."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Cinema A's profit $P_A(Q)=-(Q-3)^{2}+5$ has slope $P_A'(Q)=-2(Q-3)$ by the chain rule, so $P_A'(3)=0$. Cinema B's profit $P_B(Q)=(Q-3)^{3}+5$ has slope $P_B'(Q)=3(Q-3)^{2}$, so $P_B'(3)=0$ as well. Both cinemas have a flat profit slope at three screenings — only a candidate until bends and sign charts are checked.

Both $P_A'(3)=0$ and $P_B'(3)=0$ are verified, before any peak/trough label is attached.

Flat slopes at three screenings are only candidates until bends are checked.

Both cinemas are flat at three screenings; bends and sign charts come next.

The statement is True.`,
      `**B.** → True

Cinema A's daily profit is $P_A(Q)=-(Q-3)^{2}+5$. Its slope is $P_A'(Q)=-2(Q-3)$ by the chain rule, so $P_A'(3)=0$. Differentiating once more gives the constant second derivative

$$
P_A''(Q)=-2<0.
$$

At three screenings the profit curve bends downward, so that output is a strict local profit maximum for A. Equivalently, rewrite $P_A(Q)=5-(Q-3)^{2}\\le 5=P_A(3)$ for every $Q$, with equality only at $Q=3$ — a direct global peak on the whole real line for this cinema's model.

Cinema A's peak follows from $P_A''<0$ (or from $P_A(Q)\\le 5$).

The statement is True.`,
      `**C.** → True

Differentiate Cinema B's slope $P_B'(Q)=3(Q-3)^{2}$ once more:

$$
P_B''(Q)=6(Q-3).
$$

At three screenings, $P_B''(3)=0$. The second-derivative bend test needs a nonzero value to read peak versus trough; here it is inconclusive for B and a sign chart of $P_B'$ is required instead.

Inconclusive $P_B''(3)=0$ forces a sign-chart analysis of $P_B'$ next.

Cinema B needs a sign chart because $P_B''(3)=0$.

Inconclusive $P_B''(3)=0$ means Cinema B needs a sign chart of $P_B'$.

That is the claim-specific reading of letter C for this model.

The statement is True.`,
      `**D.** → True

$P_A(Q)$ and $P_B(Q)$ are daily profits for Cinemas A and B; primes are slopes and double primes are bends.

$P_B'(Q)=3(Q-3)^{2}\\ge 0$ for all $Q$, and $P_B'(Q)=0$ only at $Q=3$. The slope does not change sign (it stays non-negative). Therefore $Q=3$ is neither a local max nor a local min for B — a flat inflection, not a peak or trough.

Because $P_B'(Q)=3(Q-3)^{2}\\ge 0$ never changes sign, $Q=3$ is a flat inflection — neither a local peak nor a local trough for B.

Nonnegative $P_B'$ with a single zero is a flat inflection, not a peak or trough.

The statement is True.`,
      `**E.** → False

Cinema A has a genuine local profit peak at $Q=3$ because $P_A''<0$. Cinema B has $P_B'(Q)=3(Q-3)^{2}\\ge 0$ with no sign change at $Q=3$, so that output is a flat inflection — neither a local peak nor a local trough. Claiming both cinemas are at a profit peak is therefore false.

A's peak together with B's unsigned flat slope refutes a both-peak reading.

Only Cinema A has a profit peak at three screenings.

Only Cinema A has a profit peak at three screenings; B has a flat inflection.

That is the claim-specific reading of letter E for this model.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 97,
    solution_overview:
      "Both have $P'=0$ at $Q=3$; A has $P_A''<0$ (peak) while B has $P_B''=0$ and no sign change (neither peak nor trough).",
  },
  {
    id: "math-11-98",
    case_id: "MATH 11.98",
    title: "Exam trap: listing flat slopes does not finish maximisation",
    subsection: "11.3",
    context:
      "A student's exam solution for maximising $$f(x)=x^{3}-3x^{2}+5$$ on the whole real line writes only: \"$f'(x)=0$ at $x=0$ and $x=2$, therefore the maximum is at one of these.\" Decide TRUE or FALSE for each claim.",
    statements: [
      "The outputs where the slope is flat really are $x=0$ and $x=2$.",
      "At $x=0$ the curve bends downward, so that point is a local peak.",
      "At $x=2$ the curve bends upward, so that point is a local trough, not a peak.",
      "There is no global maximum on the real line, because $f(x)$ tends to infinity as $x$ grows without bound.",
      "Stopping after listing the flat-slope outputs already finishes a maximisation proof."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The exam objective is $f(x)=x^{3}-3x^{2}+5$ on $\\mathbb{R}$; $f'$ is its slope and $f''$ its bend.

$$
f'(x)=3x^{2}-6x=3x(x-2).
$$

So $f'(x)=0$ at $x=0$ and $x=2$. The flat-slope list in the exam script is correct as far as it goes.

Factoring $f'=3x(x-2)$ confirms the flat-slope list $x=0$ and $x=2$ in the exam script.

The statement is True.`,
      `**B.** → True

From $f(x)=x^{3}-3x^{2}+5$ one has $f'(x)=3x(x-2)$ and $f''(x)=6x-6$. At the flat-slope point $x=0$,

$$
f''(0)=-6<0,
$$

so the curve bends downward there. That negative second derivative labels $x=0$ as a strict local peak of the exam objective — one of the two candidates, and the only local maximum among them.

The statement is True.`,
      `**C.** → True

The exam objective is $f(x)=x^{3}-3x^{2}+5$ on $\\mathbb{R}$; $f'$ is its slope and $f''$ its bend.

$f''(2)=6>0$: upward bend, so $x=2$ is a strict local minimum (trough), not a maximum. One of the flat-slope candidates is the wrong type of extremum for maximisation.

At $x=2$, $f''=6>0$, so that point is a strict local trough — the wrong type of extremum for maximisation.

The statement is True.`,
      `**D.** → True

The exam objective is $f(x)=x^{3}-3x^{2}+5$ on $\\mathbb{R}$; $f'$ is its slope and $f''$ its bend.

As $x\\to\\infty$, the cubic $x^{3}$ dominates and $f(x)\\to\\infty$. The function is unbounded above on $\\mathbb{R}$, so no global maximum exists.

As $x\\to\\infty$, the cubic drives $f(x)\\to\\infty$, so no global maximum exists on $\\mathbb{R}$.

The statement is True.`,
      `**E.** → False

The exam objective is $f(x)=x^{3}-3x^{2}+5$ on $\\mathbb{R}$; $f'$ is its slope and $f''$ its bend.

Listing $f'=0$ only produces candidates. You still must label peak versus trough and, for a global claim on $\\mathbb{R}$, check behaviour at infinity. Here one candidate is a trough and $f\\to\\infty$, so the exam script is unfinished.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 98,
    solution_overview:
      "Flat slopes at $x=0$ (local max) and $x=2$ (local min); no global max on $\\mathbb{R}$; stopping at $f'=0$ is incomplete.",
  },
  {
    id: "math-11-99",
    case_id: "MATH 11.99",
    title: "Bike rental: prove a local profit peak from derivatives",
    subsection: "11.3",
    context:
      "A bike-rental shop models hourly profit by $$P(Q)=-3Q^{2}+30Q-40$$ for $Q>0$ bikes on the road. Decide TRUE or FALSE for each claim.",
    statements: [
      "Profit has a flat slope at five bikes.",
      "At five bikes the profit curve bends downward, so that output is a local profit peak.",
      "A local profit peak means: in some neighbourhood of five bikes, every other output gives strictly smaller profit than at five.",
      "Because five bikes is a local peak, the profit level there must be zero.",
      "Evaluating gives a profit of $35$ euros at five bikes."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$P(Q)=-3Q^{2}+30Q-40$ is hourly bike-rental profit for $Q>0$ bikes; $P'$ is marginal profit and $P''$ reads the bend.

$P(Q)$ denotes hourly profit in euros when $Q$ bikes are on the road. The derivative $P'(Q)$ is the slope of the profit curve — marginal profit.

Differentiate:

$$
P'(Q)=-6Q+30.
$$

Set the slope to zero:

$$
-6Q+30=0\\qquad\\Rightarrow\\qquad Q=5.
$$

The statement is True.`,
      `**B.** → True

$P(Q)=-3Q^{2}+30Q-40$ is hourly bike-rental profit for $Q>0$ bikes; $P'$ is marginal profit and $P''$ reads the bend.

Differentiate again:

$$
P''(Q)=-6.
$$

In particular $P''(5)=-6<0$. A negative second derivative means the profit curve bends downward at the flat spot, so five bikes is a strict local profit maximum (a local peak).

The statement is True.`,
      `**C.** → True

$P(Q)=-3Q^{2}+30Q-40$ is hourly bike-rental profit for $Q>0$ bikes; $P'$ is marginal profit and $P''$ reads the bend.

By definition, a strict local maximum at $Q=5$ means there exists some neighbourhood of five bikes such that for every other feasible output $Q$ in that neighbourhood,

$$
P(Q)<P(5).
$$

The claim states that neighbourhood comparison correctly. It is about the local shape of the profit curve, not about the numerical height being zero.

The statement is True.`,
      `**D.** → False

$P(Q)=-3Q^{2}+30Q-40$ is hourly bike-rental profit for $Q>0$ bikes; $P'$ is marginal profit and $P''$ reads the bend.

A local peak describes how profit compares to nearby outputs (shape), not whether the profit *level* equals zero (height). Flat slope ($P'(5)=0$) never forces $P(5)=0$. Evaluating separately gives a positive peak profit.

The statement is False.`,
      `**E.** → True

$P(Q)=-3Q^{2}+30Q-40$ is hourly bike-rental profit for $Q>0$ bikes; $P'$ is marginal profit and $P''$ reads the bend.

Substitute into the profit model:

$$
P(5)=-3\\cdot 5^{2}+30\\cdot 5-40=-3\\cdot 25+150-40=-75+150-40=35.
$$

Profit at five bikes is $35$ euros — clearly not zero.

Substituting $Q=5$ into the profit level yields $P(5)=35$ euros.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 99,
    solution_overview:
      "Flat slope at $Q=5$ with $P''<0$ gives a local profit peak; $P(5)=35$, not $0$.",
  },
  {
    id: "math-11-100",
    case_id: "MATH 11.100",
    title: "Two plants: different flat outputs, different extremum labels",
    subsection: "11.3",
    context:
      "Plant West has daily profit $$P_W(Q)=-Q^{2}+14Q-20.$$ Plant East has daily profit $$P_E(Q)=Q^{2}-10Q+40.$$ A memo claims both plants have found optimal production levels at their flat-slope outputs. Decide TRUE or FALSE for each claim.",
    statements: [
      "West's flat-slope output is seven units, and there the profit curve bends downward, so seven is a local profit peak for West.",
      "East's flat-slope output is five units, and there the profit curve bends upward, so five is a local profit trough for East.",
      "The memo is correct that both flat-slope outputs are local profit maxima.",
      "West's peak profit is $29$ euros, while East's profit at five units is $15$ euros.",
      "Because the two flat-slope outputs are unequal, at most one of the two flat-slope equations can be valid."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Plant West's profit $P_W(Q)=-Q^{2}+14Q-20$ has slope $P_W'(Q)=-2Q+14$. Setting the slope to zero gives $Q_W=7$. The second derivative is $P_W''(Q)=-2$, so $P_W''(7)=-2<0$: seven units is a strict local profit maximum for West. The memo's \`\`optimal'' language is at least the right type of extremum for West.

West's peak certificate is the pair $Q_W=7$ with $P_W''=-2<0$.

Seven units maximises West's profit locally.

West's peak certificate is $Q_W=7$ with $P_W''<0$.

That is the claim-specific reading of letter A for this model.

The statement is True.`,
      `**B.** → True

Plant East's profit $P_E(Q)=Q^{2}-10Q+40$ has slope $P_E'(Q)=2Q-10$. Setting the slope to zero gives $Q_E=5$. The second derivative is $P_E''(Q)=2$, so $P_E''(5)=2>0$: five units is a strict local profit *minimum* for East — a trough. That already undermines any memo claiming both plants found profit maxima.

East's trough certificate is the pair $Q_E=5$ with $P_E''=2>0$.

Five units minimises East's profit locally.

East's trough certificate is $Q_E=5$ with $P_E''>0$.

That is the claim-specific reading of letter B for this model.

The statement is True.`,
      `**C.** → False

Plant West has a flat profit slope at seven units with $P_W''(7)=-2<0$, so that output is a local profit peak for West. Plant East has a flat profit slope at five units with $P_E''(5)=2>0$, so that output is a local profit *trough* for East.

The memo claims both flat-slope outputs are local profit maxima. West's label matches a maximum, but East's upward bend is a minimum. Because East is not at a profit maximum, the memo's both-maxima claim is false.

East's trough falsifies the memo's both-maxima claim.

The statement is False.`,
      `**D.** → True

Evaluate each plant's profit level at its own flat-slope output:

$$
P_W(7)=-49+98-20=29,
$$

$$
P_E(5)=25-50+40=15.
$$

West's peak profit is $29$ euros; East's profit at its trough output is $15$ euros. These heights do not by themselves repair the memo's mistaken both-maxima claim.

The euro levels $29$ and $15$ are consistent with peak-versus-trough labelling, not with both-max.

West's peak height is $29$; East's trough-output height is $15$.

West's peak height is $29$ euros; East's level at its trough output is $15$.

The statement is True.`,
      `**E.** → False

$P_W(Q)$ and $P_E(Q)$ are daily profits for Plants West and East; primes are slopes and double primes are bends.

Each plant has its *own* profit model, so each has its own flat-slope equation. $Q_W=7$ and $Q_E=5$ can both be valid for their respective plants. Unequal outputs do not invalidate either equation.

Each plant has its own profit model, so $Q_W=7$ and $Q_E=5$ can both be valid flat-slope solutions; unequal outputs do not invalidate either equation.

Two different models may have two different valid flat-slope equations.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 100,
    solution_overview:
      "West: $Q=7$ local max, $P_W=29$; East: $Q=5$ local min, $P_E=15$; memo both-max is false; unequal $Q$ does not invalidate either flat-slope equation.",
  },
  {
    id: "math-11-101",
    case_id: "MATH 11.101",
    title: "Farm shop: quadratic profit peak by differentiation",
    subsection: "11.3",
    context:
      "A farm shop sells $Q$ crates of apples per day and models daily profit (in euros) by $P(Q)=-Q^{2}+18Q-45$ for $Q\\ge 0$. The owner wants the daily output that maximises profit. Decide TRUE or FALSE for each claim.",
    statements: [
      "The slope of daily profit is $P'(Q)=-2Q+18$.",
      "The only daily output where the slope of profit is flat is nine crates.",
      "At nine crates the profit curve bends downward, so that output is a local profit peak.",
      "Peak daily profit is $36$ euros.",
      "Because the slope of profit is flat at nine crates, the profit level itself must be zero there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$P(Q)=-Q^{2}+18Q-45$ is farm-shop daily profit for $Q\\ge 0$ crates; $P'$ is marginal profit and $P''$ reads the bend.

Profit is denoted $P(Q)$, where $Q$ is the number of crates sold per day. Differentiate term by term: the derivative of $-Q^{2}$ is $-2Q$, the derivative of $18Q$ is $18$, and the constant $-45$ disappears:

$$
P'(Q)=-2Q+18.
$$

The statement is True.`,
      `**B.** → True

$P(Q)=-Q^{2}+18Q-45$ is farm-shop daily profit for $Q\\ge 0$ crates; $P'$ is marginal profit and $P''$ reads the bend.

Solve

$$
P'(Q)=-2Q+18=0\\qquad\\Rightarrow\\qquad 2Q=18\\qquad\\Rightarrow\\qquad Q=9.
$$

On $Q\\ge 0$ this is the only place where the slope is zero, so nine crates per day is the only flat-slope candidate.

The statement is True.`,
      `**C.** → True

$P(Q)=-Q^{2}+18Q-45$ is farm-shop daily profit for $Q\\ge 0$ crates; $P'$ is marginal profit and $P''$ reads the bend.

Differentiate again:

$$
P''(Q)=-2.
$$

At $Q=9$ one has $P'(9)=0$ and $P''(9)=-2<0$, so the graph of profit bends downward: a strict local profit maximum (a peak). For this downward-opening parabola the peak is also the global maximum on $Q\\ge 0$.

The statement is True.`,
      `**D.** → True

$P(Q)=-Q^{2}+18Q-45$ is farm-shop daily profit for $Q\\ge 0$ crates; $P'$ is marginal profit and $P''$ reads the bend.

Substitute $Q=9$ into the profit level $P$ — do not confuse $P$ with the slope $P'$:

$$
P(9)=-9^{2}+18\\cdot 9-45=-81+162-45=36.
$$

Peak daily profit is therefore $36$ euros.

Substituting $Q=9$ into the level $P$ gives $P(9)=36$ euros.

The statement is True.`,
      `**E.** → False

$P(Q)=-Q^{2}+18Q-45$ is farm-shop daily profit for $Q\\ge 0$ crates; $P'$ is marginal profit and $P''$ reads the bend.

$P'(9)=0$ says only that the slope of profit is flat at nine crates. It says nothing about the height of the profit curve. We already computed

$$
P(9)=36\\neq 0.
$$

Confusing a zero derivative with a zero profit level is the trap in this claim.

The statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 101,
    solution_overview:
      "Farm-shop profit $P(Q)=-Q^{2}+18Q-45$: differentiate, solve $P'=0$, confirm a peak with $P''<0$, and evaluate $P(9)=36$ without confusing $P$ with $P'$.",
  },
  {
    id: "math-11-102",
    case_id: "MATH 11.102",
    title: "Market stall: form P from R and C, then optimise",
    subsection: "11.3",
    context:
      "A market stall sells $Q$ boxes of fruit. Revenue is $R(Q)=50Q-Q^{2}$ euros and total cost is $C(Q)=Q^{2}+10Q+20$ euros, for $Q>0$. Profit is $P=R-C$. The stallholder wants the output that maximises profit. Decide TRUE or FALSE for each claim.",
    statements: [
      "Daily profit simplifies to $P(Q)=-2Q^{2}+40Q-20$.",
      "Profit has a flat slope at ten boxes a day.",
      "At ten boxes, marginal revenue and marginal cost both equal $30$ euros.",
      "At ten boxes the profit curve bends downward, so that output is a local profit peak, and peak profit is $180$ euros.",
      "Because marginal revenue equals marginal cost at ten boxes, the stall's revenue level equals its cost level there."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$ for the fruit stall; $R'$, $C'$, $P'$ are the corresponding marginals.

Revenue is $R(Q)$ and total cost is $C(Q)$. Profit is their difference $P(Q)=R(Q)-C(Q)$:

$$
\\begin{align*}
P(Q)&=(50Q-Q^{2})-(Q^{2}+10Q+20)\\\\
&=50Q-Q^{2}-Q^{2}-10Q-20\\\\
&=-2Q^{2}+40Q-20.
\\end{align*}
$$

The statement is True.`,
      `**B.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$ for the fruit stall; $R'$, $C'$, $P'$ are the corresponding marginals.

Differentiate profit:

$$
P'(Q)=-4Q+40.
$$

Set the slope to zero:

$$
-4Q+40=0\\qquad\\Rightarrow\\qquad Q=10.
$$

So the candidate output is ten boxes.

Setting $P'=-4Q+40=0$ isolates $Q=10$; ten boxes is the flat-profit candidate.

The statement is True.`,
      `**C.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$ for the fruit stall; $R'$, $C'$, $P'$ are the corresponding marginals.

Marginal revenue is the derivative $R'(Q)=50-2Q$, and marginal cost is $C'(Q)=2Q+10$. At $Q=10$:

$$
R'(10)=50-20=30,\\qquad C'(10)=20+10=30.
$$

Matching $R'=C'$ is equivalent to $P'=R'-C'=0$ at that output.

The statement is True.`,
      `**D.** → True

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$ for the fruit stall; $R'$, $C'$, $P'$ are the corresponding marginals.

$$
P''(Q)=-4<0
$$

at every output, including $Q=10$, so the flat-slope candidate is a strict local profit maximum. The profit level there is

$$
P(10)=-2\\cdot 10^{2}+40\\cdot 10-20=-200+400-20=180.
$$

The statement is True.`,
      `**E.** → False

Revenue is $R(Q)$, cost is $C(Q)$, and profit is $P=R-C$ for the fruit stall; $R'$, $C'$, $P'$ are the corresponding marginals.

Equal slopes $R'(10)=C'(10)$ do not force equal levels $R(10)=C(10)$. Direct evaluation gives

$$
R(10)=50\\cdot 10-10^{2}=400,\\qquad C(10)=10^{2}+10\\cdot 10+20=220.
$$

Revenue and cost differ; profit is the gap $180$.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 102,
    solution_overview:
      "Build stall profit from $R$ and $C$, solve $P'=0$ at $Q=10$, match $R'$ to $C'$, confirm with $P''$, and evaluate $P(10)=180$.",
  },
  {
    id: "math-11-103",
    case_id: "MATH 11.103",
    title: "Two food trucks: compare profit peaks side by side",
    subsection: "11.3",
    context:
      "Two food trucks compete at a festival. Truck A's daily profit (in euros) is $P_A(Q)=-Q^{2}+24Q-80$, and truck B's is $P_B(Q)=-2Q^{2}+32Q-60$, where $Q$ is meals sold. Each truck wants its own profit-maximising output. Decide TRUE or FALSE for each claim.",
    statements: [
      "Truck A maximises profit locally at twelve meals, where its profit curve bends downward.",
      "Truck B maximises profit locally at eight meals, where its profit curve bends downward.",
      "Peak profits are $64$ euros for truck A and $68$ euros for truck B.",
      "Because both trucks have a local profit peak, they must share the same optimal quantity.",
      "Truck B's peak profit is larger than truck A's, even though B's optimal quantity is smaller."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$P_A(Q)$ denotes truck A's daily profit in euros when $Q$ meals are sold. The slope $P_A'(Q)$ is marginal profit, and $P_A''(Q)$ reads the bend.

From $P_A(Q)=-Q^{2}+24Q-80$,

$$
P_A'(Q)=-2Q+24,\\qquad P_A''(Q)=-2.
$$

Set the slope to zero: $-2Q+24=0$ gives $Q_A=12$. Then $P_A''(12)=-2<0$: the profit curve bends downward at twelve meals. Truck A therefore has a strict local profit maximum at twelve meals.

Truck A maximises profit locally at twelve meals.

That is the claim-specific reading of letter A for this model.

The statement is True.`,
      `**B.** → True

$P_B(Q)$ denotes truck B's daily profit. From $P_B(Q)=-2Q^{2}+32Q-60$,

$$
P_B'(Q)=-4Q+32,\\qquad P_B''(Q)=-4.
$$

Set the slope to zero: $-4Q+32=0$ gives $Q_B=8$. Then $P_B''(8)=-4<0$: the profit curve bends downward at eight meals. Truck B therefore has a strict local profit maximum at eight meals — a different quantity from truck A's peak at twelve.

Truck B maximises profit locally at eight meals.

That is the claim-specific reading of letter B for this model.

Carry the last displayed derivative or level all the way to a simplified sign or number before attaching TRUE/FALSE.

The statement is True.`,
      `**C.** → True

Substitute each truck's own peak quantity into its own profit model:

$$
P_A(12)=-144+288-80=64,
$$

$$
P_B(8)=-128+256-60=68.
$$

The claimed peak profits $64$ and $68$ euros are correct. Comparing heights is a separate step from finding the two quantities.

Peak heights $64$ and $68$ are read from each truck's own profit at its own optimiser.

The peak profits are $64$ and $68$ euros respectively.

Peak profits evaluate to $64$ and $68$ euros at those two quantities.

That is the claim-specific reading of letter C for this model.

The statement is True.`,
      `**D.** → False

$P_A(Q)$ and $P_B(Q)$ are daily profits for food trucks A and B; each truck has its own slope $P'$ and bend $P''$.

Each truck has its own profit function, so each has its own flat-slope output. Here $Q_A=12\\neq Q_B=8$. Sharing the property \`\`local profit maximum'' does not force them to share the same optimal quantity.

Each truck has its own profit function, so $Q_A=12\\neq Q_B=8$; sharing the \`\`local max'' property does not force a shared quantity.

Different profit functions produce different optimal quantities $12$ and $8$.

The statement is False.`,
      `**E.** → True

From the evaluations $P_B(8)=68$ and $P_A(12)=64$ one has $68>64$. Truck B's peak profit is larger even though B's optimal quantity $8$ is smaller than A's optimal quantity $12$. Peak height and peak quantity need not move together across different profit functions.

The comparison $68>64$ shows B's smaller quantity can still yield a larger peak profit.

B's smaller optimal quantity still yields the larger peak profit.

B's smaller optimal quantity still yields the larger peak profit $68>64$.

That is the claim-specific reading of letter E for this model.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 103,
    solution_overview:
      "Optimise two food-truck profits separately; compare candidate quantities and peak values $64$ versus $68$.",
  },
  {
    id: "math-11-104",
    case_id: "MATH 11.104",
    title: "Workshop cost: cubic cost with a local trough",
    subsection: "11.3",
    context:
      "A workshop's weekly cost (in hundreds of euros) for producing $Q$ batches is $C(Q)=Q^{3}-9Q^{2}+24Q+5$ for $Q>0$. The manager wants to understand peaks and troughs of this cost curve. Decide TRUE or FALSE for each claim.",
    statements: [
      "Weekly cost has a flat slope at two batches and at four batches.",
      "At two batches the cost curve bends downward, while at four batches it bends upward.",
      "Therefore two batches is a local cost peak and four batches is a local cost trough.",
      "The local trough cost value is $21$ (hundreds of euros).",
      "Because the slope of cost is flat at two batches, that output minimises cost."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

$C(Q)$ is weekly workshop cost in hundreds of euros; $C'$ is marginal cost and $C''$ reads the bend of the cost curve.

Weekly cost is $C(Q)$ (in hundreds of euros). Differentiate:

$$
C'(Q)=3Q^{2}-18Q+24=3(Q^{2}-6Q+8)=3(Q-2)(Q-4).
$$

So $C'(Q)=0$ precisely when $Q=2$ or $Q=4$.

Factoring $C'=3(Q-2)(Q-4)$ places flat slopes at two and four batches.

The statement is True.`,
      `**B.** → True

$C(Q)$ is weekly workshop cost in hundreds of euros; $C'$ is marginal cost and $C''$ reads the bend of the cost curve.

Differentiate the marginal cost again:

$$
C''(Q)=6Q-18.
$$

Evaluate at the two candidates: $C''(2)=12-18=-6<0$ and $C''(4)=24-18=6>0$, matching the claim exactly.

Evaluating $C''=6Q-18$ gives $C''(2)=-6<0$ and $C''(4)=6>0$.

The statement is True.`,
      `**C.** → True

$C(Q)$ is weekly workshop cost in hundreds of euros; $C'$ is marginal cost and $C''$ reads the bend of the cost curve.

At $Q=2$ the slope is zero and $C''(2)<0$, so cost has a strict local maximum (a local peak of cost). At $Q=4$ the slope is zero and $C''(4)>0$, so cost has a strict local minimum (a local trough).

The statement is True.`,
      `**D.** → True

$C(Q)$ is weekly workshop cost in hundreds of euros; $C'$ is marginal cost and $C''$ reads the bend of the cost curve.

Substitute $Q=4$ into the cost level:

$$
C(4)=4^{3}-9\\cdot 4^{2}+24\\cdot 4+5=64-144+96+5=21.
$$

So the local minimum cost value is $21$ (hundreds of euros).

Substituting $Q=4$ into cost gives the local trough value $C(4)=21$.

The statement is True.`,
      `**E.** → False

$C(Q)$ is weekly workshop cost in hundreds of euros; $C'$ is marginal cost and $C''$ reads the bend of the cost curve.

$C'(2)=0$ only marks a candidate. The second-derivative check shows $Q=2$ is a local cost maximum, not a minimum. The local cost-minimising candidate among the two flat-slope outputs is $Q=4$.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 104,
    solution_overview:
      "Differentiate cubic workshop cost, check both flat-slope outputs with $C''$, and evaluate the local minimum $C(4)=21$.",
  },
  {
    id: "math-11-105",
    case_id: "MATH 11.105",
    title: "Delivery shifts: cost min on a closed interval",
    subsection: "11.3",
    context:
      "A courier can schedule any number of daily shifts in the closed interval $0\\le Q\\le 8$. Daily operating cost is $C(Q)=Q^{2}-10Q+40$. Management wants the cost-minimising schedule on that interval. Decide TRUE or FALSE for each claim.",
    statements: [
      "The only interior flat-slope schedule is five shifts.",
      "At five shifts the cost curve bends upward, so that schedule is a local cost trough.",
      "Endpoint costs are $40$ at zero shifts and $24$ at eight shifts, while cost at five shifts is $15$.",
      "On $[0,8]$, the global cost minimum is at the endpoint of eight shifts.",
      "On $[0,8]$, the global cost minimum is at the interior trough of five shifts."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$C(Q)=Q^{2}-10Q+40$ is daily courier cost on $0\\le Q\\le 8$ shifts; $C'$ and $C''$ are slope and bend.

Daily cost is $C(Q)=Q^{2}-10Q+40$. Its slope is

$$
C'(Q)=2Q-10.
$$

Setting $C'(Q)=0$ gives $Q=5$, which lies in the open interval $(0,8)$, so it is the only interior flat-slope output on the allowed closed interval $[0,8]$.

The statement is True.`,
      `**B.** → True

$C(Q)=Q^{2}-10Q+40$ is daily courier cost on $0\\le Q\\le 8$ shifts; $C'$ and $C''$ are slope and bend.

$$
C''(Q)=2>0
$$

everywhere, so at $Q=5$ the flat slope together with a positive second derivative confirms a strict local cost minimum (a trough).

The constant $C''=2>0$ is an upward bend, so five shifts is a strict local cost trough.

The statement is True.`,
      `**C.** → True

$C(Q)=Q^{2}-10Q+40$ is daily courier cost on $0\\le Q\\le 8$ shifts; $C'$ and $C''$ are slope and bend.

Evaluate cost at the endpoints and at the interior trough:

$$
C(0)=40,\\qquad C(8)=64-80+40=24,\\qquad C(5)=25-50+40=15.
$$

Those three values match the claim.

Evaluating gives $C(0)=40$, $C(8)=24$, and $C(5)=15$, matching the claim.

The statement is True.`,
      `**D.** → False

$C(Q)=Q^{2}-10Q+40$ is daily courier cost on $0\\le Q\\le 8$ shifts; $C'$ and $C''$ are slope and bend.

On a closed interval the global minimum is whichever of the endpoint values and the interior candidates is smallest. Here $C(8)=24>15=C(5)$, so the right endpoint is not the global cost minimum on $[0,8]$.

Because $C(8)=24>15=C(5)$, the endpoint $Q=8$ is not the global cost minimum on $[0,8]$.

The statement is False.`,
      `**E.** → True

$C(Q)=Q^{2}-10Q+40$ is daily courier cost on $0\\le Q\\le 8$ shifts; $C'$ and $C''$ are slope and bend.

Comparing $C(0)=40$, $C(5)=15$, and $C(8)=24$, the smallest value is $C(5)=15$. Therefore the global cost minimum on $[0,8]$ is at the interior trough $Q=5$.

Among $40$, $15$, and $24$, the smallest is $C(5)=15$, so the global minimum on $[0,8]$ is the interior trough.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 105,
    solution_overview:
      "Find the interior cost trough on $[0,8]$, evaluate endpoints, and identify the global minimum at $Q=5$.",
  },
  {
    id: "math-11-106",
    case_id: "MATH 11.106",
    title: "Community garden: stretch 40 m of fence as far as possible",
    subsection: "11.3",
    context:
      "A community garden committee has exactly $40$ metres of fencing for one rectangular bed. They can choose the side lengths freely so long as all of the fencing is used, and they want the bed to enclose as much planting area as possible. Let one side be $x$ metres. Decide TRUE or FALSE for each claim.",
    statements: [
      "Using the fencing fully, planting area can be written as a function of one side alone for $0<x<20$.",
      "The area is maximised when the bed is a $10$ by $10$ metre square.",
      "That maximum planting area is $100$ square metres.",
      "At that square the area curve bends downward, confirming a local maximum.",
      "Because every layout uses the same $40$ metres of fence, every layout gives the same area, so no optimisation is needed."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $A$ denote planting area for the rectangular bed; after using the fencing constraint, $A(x)$ is area as a function of one side, with slope $A'$ and bend $A''$.

Let $A$ denote planting area. Using all $40$ metres of fence on four sides of a rectangle with one side $x$ metres and the adjacent side $y$ metres gives

$$
2x+2y=40\\qquad\\Rightarrow\\qquad y=20-x.
$$

Area is length times width:

$$
A(x)=xy=x(20-x),
$$

The statement is True.`,
      `**B.** → True

Let $A$ denote planting area for the rectangular bed; after using the fencing constraint, $A(x)$ is area as a function of one side, with slope $A'$ and bend $A''$.

Differentiate the area:

$$
A'(x)=20-2x.
$$

Set the slope to zero:

$$
20-2x=0\\qquad\\Rightarrow\\qquad x=10,
$$

and then $y=20-10=10$. The maximising layout is a $10$ by $10$ metre square bed.

The statement is True.`,
      `**C.** → True

Let $A$ denote planting area for the rectangular bed; after using the fencing constraint, $A(x)$ is area as a function of one side, with slope $A'$ and bend $A''$.

At the square layout $x=10$, $y=10$,

$$
A(10)=10\\cdot 10=100.
$$

So the maximum planting area is $100$ square metres from the $40$ metres of fence.

The statement is True.`,
      `**D.** → True

Let $A$ denote planting area for the rectangular bed; after using the fencing constraint, $A(x)$ is area as a function of one side, with slope $A'$ and bend $A''$.

$$
A''(x)=-2<0
$$

at $x=10$ (and everywhere), so the flat-slope square is a strict local maximum of area. For this downward-opening parabola it is also the global maximum on $(0,20)$.

The statement is True.`,
      `**E.** → False

Let $A$ denote planting area for the rectangular bed; after using the fencing constraint, $A(x)$ is area as a function of one side, with slope $A'$ and bend $A''$.

Using the same total length of fence does not force every layout to enclose the same area. For example a $5\\times 15$ bed uses $40$ metres of fence but has area $75<100$. Optimisation is needed to find the largest planting area.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 106,
    solution_overview:
      "Garden fence story: derive area from a $40$ m perimeter, show the square maximises area at $100$ m$^{2}$, and reject the 'same fence, same area' claim.",
  },
  {
    id: "math-11-107",
    case_id: "MATH 11.107",
    title: "Poster margins: minimise paper for a fixed printed area",
    subsection: "11.3",
    context:
      "A designer needs a rectangular printed region of area exactly $36$ cm$^{2}$. A blank margin of $1$ cm is added on every side, and the total sheet of paper (print plus margins) should be as small as possible. Let $x>0$ be the printed width in centimetres. Decide TRUE or FALSE for each claim.",
    statements: [
      "If the printed width is $x$, the printed height must be $\\dfrac{36}{x}$, and total paper area is $A(x)=(x+2)\\left(\\dfrac{36}{x}+2\\right)$.",
      "Expanding gives $A(x)=40+2x+\\dfrac{72}{x}$.",
      "Paper area has a flat slope at printed width $x=6$ (taking $x>0$).",
      "At that width the printed region is a $6\\times 6$ square, total paper area is $64$, and the area curve bends upward, confirming a local minimum.",
      "Any printed rectangle of area $36$ already minimises paper use; the margins do not create a real optimisation problem."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $A(x)$ be total paper area when the printed width is $x>0$; $A'$ is how paper area changes with $x$ and $A''$ reads the bend.

Printed area exactly $36$ forces printed height $h=\\dfrac{36}{x}$ when the printed width is $x>0$. Adding a $1$ cm blank margin on every side makes the full sheet measure $(x+2)$ by $(h+2)$, so total paper area is

$$
A(x)=(x+2)\\left(\\dfrac{36}{x}+2\\right).
$$

That is the one-variable objective the designer must minimise — derived from the printed-area constraint and the margin rule, not assumed up front.

The statement is True.`,
      `**B.** → True

Expand the paper-area product carefully, writing every quotient with $\\dfrac{\\cdot}{\\cdot}$:

$$
A(x)=(x+2)\\left(\\dfrac{36}{x}+2\\right)=36+2x+\\dfrac{72}{x}+4=40+2x+\\dfrac{72}{x}.
$$

That is the expanded one-variable objective the designer minimises.

Every quotient in the expansion uses $\\dfrac{\\cdot}{\\cdot}$, matching $40+2x+\\dfrac{72}{x}$.

The expanded paper-area objective is $40+2x+\\dfrac{72}{x}$.

Expanding with $\\dfrac{\\cdot}{\\cdot}$ produces $A(x)=40+2x+\\dfrac{72}{x}$.

That is the claim-specific reading of letter B for this model.

The statement is True.`,
      `**C.** → True

Total paper area is $A(x)=40+2x+\\dfrac{72}{x}$ for printed width $x>0$. Here $A'(x)$ is how paper area changes with width.

Differentiate using $\\dfrac{\\cdot}{\\cdot}$ for every quotient:

$$
A'(x)=2-\\dfrac{72}{x^{2}}.
$$

Set the slope to zero:

$$
2=\\dfrac{72}{x^{2}}\\qquad\\Rightarrow\\qquad x^{2}=36\\qquad\\Rightarrow\\qquad x=6
$$

(taking $x>0$). Paper area has a flat slope at printed width six centimetres — the unique positive candidate before the bend check.

Printed width $x=6$ is the unique positive root of $A'=0$.

The statement is True.`,
      `**D.** → True

Let $A(x)$ be total paper area when the printed width is $x>0$; $A'$ is how paper area changes with $x$ and $A''$ reads the bend.

At $x=6$ the printed height is $\\dfrac{36}{6}=6$, so the printed region is a $6\\times 6$ square. Total paper area is

$$
A(6)=40+2\\cdot 6+\\dfrac{72}{6}=40+12+12=64.
$$

The second derivative is $A''(x)=\\dfrac{144}{x^{3}}$, so $A''(6)=\\dfrac{144}{216}=\\dfrac{2}{3}>0$, confirming a local minimum of paper area.

At $x=6$ the print is $6\\times 6$, $A(6)=64$, and $A''(6)=\\dfrac{2}{3}>0$ confirms a local paper-area minimum.

The statement is True.`,
      `**E.** → False

Let $A(x)$ be total paper area when the printed width is $x>0$; $A'$ is how paper area changes with $x$ and $A''$ reads the bend.

Different printed shapes with the same printed area $36$ produce different sheet sizes once margins are added. For example $x=4$ gives

$$
A(4)=40+2\\cdot 4+\\dfrac{72}{4}=40+8+18=66>64.
$$

The margins create a genuine one-variable optimisation problem.

Different shapes with printed area $36$ give different sheets once margins are added; e.g. $A(4)=66>64$.

Margins make sheet size shape-dependent even when printed area is fixed at $36$.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 107,
    solution_overview:
      "From printed area $36$ and $1$ cm margins, form $A(x)$, then minimise with $A'$ and $A''$.",
  },
  {
    id: "math-11-108",
    case_id: "MATH 11.108",
    title: "Wire into square and circle: minimise total enclosed area",
    subsection: "11.3",
    context:
      "A wire of length $60$ cm is cut into two pieces. One piece is bent into a square, the other into a circle. The goal is to minimise the total area enclosed by the square and the circle. Let $x$ be the length of wire used for the square ($0\\le x\\le 60$). Decide TRUE or FALSE for each claim.",
    statements: [
      "Total enclosed area as a function of the square's wire length $x$ is $A(x)=\\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi}$.",
      "The slope of that total area is $A'(x)=\\dfrac{x}{8}-\\dfrac{60-x}{2\\pi}$.",
      "Total area has a flat slope at the split $x=\\dfrac{240}{4+\\pi}$.",
      "At that split the area curve bends upward, so the split is a local minimum of total enclosed area.",
      "Because two shapes are involved, the problem cannot be reduced to a single-variable calculus exercise."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $A(x)$ be total enclosed area when length $x$ of the $60$ cm wire goes to the square; $A'$ and $A''$ are its slope and bend.

Let $A$ be total enclosed area. Wire length $x$ goes to the square, so the square's side is $s=\\dfrac{x}{4}$ and its area is $s^{2}=\\dfrac{x^{2}}{16}$. The remaining length $60-x$ forms a circle, so $2\\pi r=60-x$ and $r=\\dfrac{60-x}{2\\pi}$. Circle area is

$$
\\pi r^{2}=\\pi\\cdot\\dfrac{(60-x)^{2}}{4\\pi^{2}}=\\dfrac{(60-x)^{2}}{4\\pi}.
$$

Adding the two pieces gives

$$
A(x)=\\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi},
$$

The statement is True.`,
      `**B.** → True

Let $A(x)$ be total enclosed area when length $x$ of the $60$ cm wire goes to the square; $A'$ and $A''$ are its slope and bend.

Differentiate term by term. For the square part, $\\dfrac{d}{dx}\\left(\\dfrac{x^{2}}{16}\\right)=\\dfrac{2x}{16}=\\dfrac{x}{8}$. For the circle part, the chain rule gives

$$
\\dfrac{d}{dx}\\left(\\dfrac{(60-x)^{2}}{4\\pi}\\right)=\\dfrac{2(60-x)(-1)}{4\\pi}=-\\dfrac{60-x}{2\\pi}.
$$

Wait — carefully: $\\dfrac{2(60-x)(-1)}{4\\pi}=\\dfrac{-(60-x)}{2\\pi}$, so

$$
A'(x)=\\dfrac{x}{8}-\\dfrac{60-x}{2\\pi},
$$

The statement is True.`,
      `**C.** → True

Let $A(x)$ be total enclosed area when length $x$ of the $60$ cm wire goes to the square; $A'$ and $A''$ are its slope and bend.

Set $A'(x)=0$:

$$
\\dfrac{x}{8}=\\dfrac{60-x}{2\\pi}.
$$

Cross-multiply:

$$
2\\pi x=8(60-x)\\qquad\\Rightarrow\\qquad \\pi x=4(60-x)\\qquad\\Rightarrow\\qquad \\pi x=240-4x\\qquad\\Rightarrow\\qquad x(\\pi+4)=240.
$$

Hence

$$
x=\\dfrac{240}{4+\\pi}.
$$

Solving $A'=0$ rearranges to $x(\\pi+4)=240$, hence $x=\\dfrac{240}{4+\\pi}$.

Clearing $A'=0$ produces the explicit split $x=\\dfrac{240}{4+\\pi}$.

The statement is True.`,
      `**D.** → True

Let $A(x)$ be total enclosed area when length $x$ of the $60$ cm wire goes to the square; $A'$ and $A''$ are its slope and bend.

Differentiate $A'$ again:

$$
A''(x)=\\dfrac{1}{8}+\\dfrac{1}{2\\pi}.
$$

Both terms are positive, so $A''(x)>0$ at every $x$, including the candidate. The unique flat-slope split is therefore a strict local minimum of total enclosed area (and, on $[0,60]$, the global minimum of the smooth interior problem).

The second derivative $A''=\\dfrac{1}{8}+\\dfrac{1}{2\\pi}>0$ everywhere certifies a strict local minimum at that unique flat-slope split.

The statement is True.`,
      `**E.** → False

Let $A(x)$ be total enclosed area when length $x$ of the $60$ cm wire goes to the square; $A'$ and $A''$ are its slope and bend.

The wire-length constraint $x+(60-x)=60$ reduces the geometry to a single free variable $x$. After writing $A(x)$, ordinary one-variable calculus applies. Two shapes do not prevent a single-variable treatment once the split is substituted in.

The split constraint reduces two shapes to one free variable $x$, so ordinary one-variable calculus applies.

One free cut variable is enough; two shapes do not block single-variable calculus.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 108,
    solution_overview:
      "Express total area in terms of the cut length $x$, then minimise with $A'$ and $A''$.",
  },
  {
    id: "math-11-109",
    case_id: "MATH 11.109",
    title: "Budget line: maximise U=xy without a pre-built substitute",
    subsection: "11.3",
    context:
      "A consumer has utility $U(x,y)=xy$ and must spend the entire budget on the constraint $2x+y=20$, with $x>0$ and $y>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Solving the budget for $y$ and substituting gives a one-variable utility on $0<x<10$.",
      "That reduced utility has a flat slope at $x=5$.",
      "At $x=5$ one has $y=10$ and utility level $50$.",
      "At $x=5$ the utility curve bends downward, so that bundle maximises utility locally on the budget line.",
      "After substitution, one may skip checking the bend of utility because a budget constraint automatically guarantees a maximum."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Utility is $U(x,y)=xy$; after substituting the budget, $U(x)$ is one-variable utility with slope $U'$ and bend $U''$.

Utility is $U(x,y)=xy$. The budget $2x+y=20$ solved for $y$ gives $y=20-2x$. Substitute into utility:

$$
U(x)=x(20-2x)=20x-2x^{2},
$$

on $0<x<10$ (both goods positive). So the one-variable utility in the claim is correct — derived from the budget, not handed to you as a finished formula.

The statement is True.`,
      `**B.** → True

Utility is $U(x,y)=xy$; after substituting the budget, $U(x)$ is one-variable utility with slope $U'$ and bend $U''$.

Differentiate the reduced utility:

$$
U'(x)=20-4x.
$$

Set the slope to zero:

$$
20-4x=0\\qquad\\Rightarrow\\qquad x=5.
$$

Setting $U'=20-4x=0$ isolates $x=5$, the flat-utility candidate on the budget line.

The statement is True.`,
      `**C.** → True

Utility is $U(x,y)=xy$; after substituting the budget, $U(x)$ is one-variable utility with slope $U'$ and bend $U''$.

At $x=5$, the budget gives $y=20-2\\cdot 5=10$. Utility level is

$$
U(5)=5\\cdot 10=50
$$

(or equivalently $U(5)=20\\cdot 5-2\\cdot 25=100-50=50$).

At $x=5$ the budget gives $y=10$ and utility $U=50$.

The statement is True.`,
      `**D.** → True

Utility is $U(x,y)=xy$; after substituting the budget, $U(x)$ is one-variable utility with slope $U'$ and bend $U''$.

$$
U''(x)=-4<0
$$

everywhere, so at $x=5$ the flat slope together with a negative second derivative confirms a strict local maximum of utility on the budget line. On $(0,10)$ it is also the global maximum of the reduced utility.

The statement is True.`,
      `**E.** → False

Utility is $U(x,y)=xy$; after substituting the budget, $U(x)$ is one-variable utility with slope $U'$ and bend $U''$.

Substitution creates an ordinary one-variable problem. You still must check whether the flat-slope point is a peak or a trough; a budget constraint does not automatically guarantee a maximum at every point where $U'=0$. Here $U''<0$ does that checking work.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 109,
    solution_overview:
      "Substitute $y=20-2x$ into $U=xy$, then maximise the resulting $U(x)$.",
  },
  {
    id: "math-11-110",
    case_id: "MATH 11.110",
    title: "Two inputs on x+y=10: maximise output Q=xy",
    subsection: "11.3",
    context:
      "A firm produces output $Q=xy$ using inputs that must satisfy the resource constraint $x+y=10$, with $x>0$ and $y>0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Substituting the resource constraint gives output as a function of $x$ alone, with slope $10-2x$.",
      "The only positive flat-slope candidate is $x=5$, with $y=5$ and output $25$.",
      "At that split the output curve bends downward, confirming a local maximum.",
      "Any other split with $x+y=10$ yields strictly smaller output than $25$.",
      "The constraint $x+y=10$ already forces output $25$ for every feasible pair $(x,y)$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Output is $Q=xy$ under $x+y=10$; the reduced $Q(x)$ has slope $Q'$ and bend $Q''$.

Output is $Q=xy$. The resource constraint $x+y=10$ gives $y=10-x$. Substitute:

$$
Q(x)=x(10-x)=10x-x^{2},
$$

so the slope is

$$
Q'(x)=10-2x.
$$

That matches the claim.

Substituting $y=10-x$ into $Q=xy$ gives $Q(x)=10x-x^{2}$ with slope $Q'=10-2x$.

The statement is True.`,
      `**B.** → True

Output is $Q=xy$ under $x+y=10$; the reduced $Q(x)$ has slope $Q'$ and bend $Q''$.

Set $Q'(x)=0$:

$$
10-2x=0\\qquad\\Rightarrow\\qquad x=5.
$$

Then $y=10-5=5$ and output $Q(5)=5\\cdot 5=25$. This is the only positive flat-slope candidate.

Setting $Q'=0$ gives $x=5$, $y=5$, and output $Q=25$ — the only positive flat-slope candidate.

The statement is True.`,
      `**C.** → True

Output is $Q=xy$ under $x+y=10$; the reduced $Q(x)$ has slope $Q'$ and bend $Q''$.

$$
Q''(x)=-2<0
$$

at $x=5$, so the candidate is a strict local maximum of output.

The constant $Q''=-2<0$ certifies a local output maximum at that balanced split.

Downward bend $Q''=-2$ certifies that split as a local output peak.

The statement is True.`,
      `**D.** → True

Output is $Q=xy$ under $x+y=10$; the reduced $Q(x)$ has slope $Q'$ and bend $Q''$.

The reduced output $Q(x)=10x-x^{2}$ is a downward-opening parabola with unique peak $25$ at $x=5$. Any other split with $x+y=10$ gives a strictly smaller product: for example $x=4$, $y=6$ yields $Q=24<25$, and $x=1$, $y=9$ yields $Q=9$.

The statement is True.`,
      `**E.** → False

Output is $Q=xy$ under $x+y=10$; the reduced $Q(x)$ has slope $Q'$ and bend $Q''$.

The constraint $x+y=10$ admits many pairs, and $Q=xy$ varies along that line. Only the balanced split $(5,5)$ reaches $25$; the constraint alone does not force every feasible pair to produce the same output.

Many pairs satisfy $x+y=10$ with different products; the constraint alone does not force $Q=25$ everywhere.

The statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 110,
    solution_overview:
      "Substitute the resource constraint into $Q=xy$ and maximise the resulting quadratic.",
  },
  {
    id: "math-11-111",
    case_id: "MATH 11.111",
    title: "City bike hire: when does a price rise help revenue?",
    subsection: "11.3",
    context:
      "A city bike-hire firm estimates that if the daily rental price is $p$ euros (with $0<p<50$), the number of bikes hired that day is $D(p)=100-2p$. Managers want to know how price changes affect revenue and how sensitive demand is to price. Decide TRUE or FALSE for each claim.",
    statements: [
      "Daily revenue, as a function of price, is $R(p)=100p-2p^{2}$.",
      "Revenue is maximised at a daily price of $25$ euros, and that peak revenue is $1250$ euros.",
      "At the $25$-euro price, demand is unit elastic.",
      "At a price of $20$ euros, a small further price increase would still raise the firm's daily revenue.",
      "At the $25$-euro price demand is perfectly inelastic, because elasticity has absolute value $1$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $D(p)=100-2p$ and revenue is $R(p)=p\\cdot D(p)$. Price elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$.

Let $D(p)$ be daily demand (bikes hired) at rental price $p$, and let revenue be $R(p)=p\\cdot D(p)$ (price times quantity):

$$
R(p)=p(100-2p)=100p-2p^{2}.
$$

So the claimed revenue formula is correct.

The statement is True.`,
      `**B.** → True

Demand is $D(p)=100-2p$ and revenue is $R(p)=p\\cdot D(p)$. Price elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$.

Differentiate revenue:

$$
R'(p)=100-4p.
$$

Set the slope to zero:

$$
100-4p=0\\qquad\\Rightarrow\\qquad p=25.
$$

The second derivative is $R''(p)=-4<0$, so this flat-slope price is a local (and global on $(0,50)$) revenue maximum. Peak revenue is

$$
R(25)=100\\cdot 25-2\\cdot 25^{2}=2500-1250=1250.
$$

The statement is True.`,
      `**C.** → True

Demand is $D(p)=100-2p$ and revenue is $R(p)=p\\cdot D(p)$. Price elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$.

Price elasticity of demand is defined by

$$
\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}.
$$

Here $D'(p)=-2$, so

$$
\\mathrm{El}(p)=\\dfrac{-2\\cdot p}{100-2p}=\\dfrac{-2p}{100-2p}.
$$

At the revenue-maximising price $p=25$:

$$
\\mathrm{El}(25)=\\dfrac{-2\\cdot 25}{100-50}=\\dfrac{-50}{50}=-1.
$$

The statement is True.`,
      `**D.** → True

Demand is $D(p)=100-2p$ and revenue is $R(p)=p\\cdot D(p)$. Price elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$.

At $p=20$,

$$
R'(20)=100-4\\cdot 20=100-80=20>0.
$$

A positive slope of revenue means a small further price increase still raises daily revenue. Equivalently,

$$
\\mathrm{El}(20)=\\dfrac{-40}{100-40}=\\dfrac{-40}{60}=-\\dfrac{2}{3},
$$

The statement is True.`,
      `**E.** → False

Demand is $D(p)=100-2p$ and revenue is $R(p)=p\\cdot D(p)$. Price elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$.

Perfectly inelastic demand means elasticity equal to $0$, not $-1$. Absolute value $1$ is the definition of unit elastic demand. The claim confuses those two ideas.

Perfectly inelastic means $\\mathrm{El}=0$, not $|\\mathrm{El}|=1$; absolute value $1$ is unit elastic.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 111,
    solution_overview:
      "From bike-hire demand $D=100-2p$, form revenue, find its peak at $p=25$, and read unit elasticity there.",
  },
  {
    id: "math-11-112",
    case_id: "MATH 11.112",
    title: "Theatre tickets: match the revenue peak to unit elasticity",
    subsection: "11.3",
    context:
      "A small theatre sells tickets at price $p$ euros, with $0<p<40$. Audience size that evening is $D(p)=120-3p$. The box office wants the price that maximises ticket revenue and wants to see how that price relates to demand sensitivity. Decide TRUE or FALSE for each claim.",
    statements: [
      "Ticket revenue expands to $R(p)=120p-3p^{2}$, and revenue has a flat slope at $20$ euros.",
      "At $20$ euros, demand is unit elastic.",
      "At $20$ euros the revenue curve bends downward, so that fare is a local revenue peak.",
      "At $20$ euros the theatre sells $60$ tickets and earns $1200$ euros.",
      "For this demand curve, the price that flattens revenue can differ from the unit-elastic price."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Audience demand is $D(p)=120-3p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity of demand.

Ticket revenue is price times audience size:

$$
R(p)=p\\cdot D(p)=p(120-3p)=120p-3p^{2}.
$$

The slope is $R'(p)=120-6p$. Setting it to zero gives

$$
120-6p=0\\qquad\\Rightarrow\\qquad p=20.
$$

The statement is True.`,
      `**B.** → True

Audience demand is $D(p)=120-3p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity of demand.

Price elasticity of demand is

$$
\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}.
$$

With $D'(p)=-3$,

$$
\\mathrm{El}(p)=\\dfrac{-3p}{120-3p},\\qquad \\mathrm{El}(20)=\\dfrac{-60}{60}=-1.
$$

The statement is True.`,
      `**C.** → True

Audience demand is $D(p)=120-3p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity of demand.

$$
R''(p)=-6<0
$$

at every price, including $p=20$, so the flat-slope ticket price is a strict local revenue maximum.

The constant $R''=-6<0$ is a downward bend, so $p=20$ is a local revenue peak.

The statement is True.`,
      `**D.** → True

Audience demand is $D(p)=120-3p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity of demand.

Audience size and revenue at the $20$-euro ticket price are

$$
D(20)=120-3\\cdot 20=60,\\qquad R(20)=20\\cdot 60=1200.
$$

So the theatre sells $60$ tickets and earns $1200$ euros that evening.

The statement is True.`,
      `**E.** → False

Audience demand is $D(p)=120-3p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity of demand.

For this linear demand the algebra forces $R'(p)=0$ and $\\mathrm{El}(p)=-1$ at the same price $p=20$. The price that flattens revenue cannot differ from the unit-elastic price on this demand curve.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 112,
    solution_overview:
      "Theatre demand $D=120-3p$: show the revenue peak and unit elasticity land on the same price $p=20$.",
  },
  {
    id: "math-11-113",
    case_id: "MATH 11.113",
    title: "Online shop: two ways to read marginal revenue at one price",
    subsection: "11.3",
    context:
      "An online shop faces demand $Q=D(p)=100-2p$ for a gadget. Analysts sometimes work with price $p$ and sometimes with quantity $Q$. Today the posted price is $p=20$ euros. Managers care about revenue and about how sensitive demand is to price. Decide TRUE or FALSE for each claim.",
    statements: [
      "At $20$ euros the shop sells $60$ gadgets, and demand is inelastic with elasticity $-\\dfrac{2}{3}$.",
      "Using the elasticity route, marginal revenue at that point equals $-10$ euros per extra gadget.",
      "Writing revenue as a function of quantity and differentiating also gives marginal revenue $-10$ at sixty gadgets.",
      "The two calculations agree, so the elasticity shortcut matches direct differentiation of revenue with respect to quantity.",
      "Because that marginal revenue is not zero, the $20$-euro price does not maximise the shop's revenue."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Demand is $D(p)=100-2p$. Elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$, and marginal revenue (MR) is the change in revenue from one more gadget.

Quantity sold at the posted price is

$$
Q=D(20)=100-2\\cdot 20=60.
$$

Price elasticity of demand is

$$
\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}.
$$

With $D'(p)=-2$,

$$
\\mathrm{El}(20)=\\dfrac{-2\\cdot 20}{60}=\\dfrac{-40}{60}=-\\dfrac{2}{3}.
$$

At $p=20$, $Q=60$ and $\\mathrm{El}(20)=\\dfrac{-40}{60}=-\\dfrac{2}{3}$.

Quantity $60$ and elasticity $-\\dfrac{2}{3}$ are the operating-point facts at $p=20$.

The statement is True.`,
      `**B.** → True

Demand is $D(p)=100-2p$. Elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$, and marginal revenue (MR) is the change in revenue from one more gadget.

Marginal revenue (MR) is the change in revenue from selling one more unit. The elasticity shortcut is

$$
\\mathrm{MR}=p\\left(1+\\dfrac{1}{\\mathrm{El}}\\right).
$$

At $p=20$ with $\\mathrm{El}=-\\dfrac{2}{3}$:

$$
\\mathrm{MR}=20\\left(1+\\dfrac{1}{-\\dfrac{2}{3}}\\right)=20\\left(1-\\dfrac{3}{2}\\right)=20\\cdot\\left(-\\dfrac{1}{2}\\right)=-10.
$$

So marginal revenue is $-10$ euros per extra gadget.

The statement is True.`,
      `**C.** → True

Demand is $D(p)=100-2p$. Elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$, and marginal revenue (MR) is the change in revenue from one more gadget.

Invert demand: from $Q=100-2p$ one has $p=50-\\dfrac{Q}{2}$. Revenue as a function of quantity is

$$
R(Q)=\\left(50-\\dfrac{Q}{2}\\right)Q=50Q-\\dfrac{Q^{2}}{2}.
$$

Differentiate:

$$
R'(Q)=50-Q.
$$

At $Q=60$, $R'(60)=50-60=-10$. Direct differentiation of $R(Q)$ also gives marginal revenue $-10$.

Inverting demand to $p=50-\\dfrac{Q}{2}$ gives $R(Q)=50Q-\\dfrac{Q^{2}}{2}$, so $R'(60)=-10$ by direct differentiation.

The statement is True.`,
      `**D.** → True

Demand is $D(p)=100-2p$. Elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$, and marginal revenue (MR) is the change in revenue from one more gadget.

Both routes — the elasticity formula for MR and the derivative $R'(Q)$ — give $-10$ at this operating point. The elasticity shortcut matches direct differentiation of revenue with respect to quantity.

Both routes agree at $-10$, so the elasticity shortcut matches $R'(Q)$.

Agreement of the two routes validates the elasticity shortcut against $R'(Q)$.

The statement is True.`,
      `**E.** → True

Demand is $D(p)=100-2p$. Elasticity is $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$, and marginal revenue (MR) is the change in revenue from one more gadget.

Revenue as a function of price has $R'(p)=100-4p$, so $R'(20)=20\\neq 0$. The revenue-maximising price solves $R'(p)=0$, i.e. $p=25$, not $p=20$. Nonzero marginal revenue at $Q=60$ is the same warning in quantity language: the shop is not at a revenue peak.

Nonzero $R'(20)=20$ (or $\\mathrm{MR}=-10\\neq 0$) shows the shop is not at a revenue peak; the peak fare is $p=25$.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 113,
    solution_overview:
      "At $p=20$ for $D=100-2p$, match elasticity-based MR with $R'(Q)$ and note revenue is not maximised.",
  },
  {
    id: "math-11-114",
    case_id: "MATH 11.114",
    title: "Two coffee carts: which market is more price-sensitive?",
    subsection: "11.3",
    context:
      "Two coffee carts charge the same cup price $p=20$ euros on a festival day. Cart A faces demand $D_A(p)=80-p$. Cart B faces demand $D_B(p)=120-2p$. Both owners care about cup revenue and about how price-sensitive their customers are. Decide TRUE or FALSE for each claim.",
    statements: [
      "At $20$ euros, Cart A expects $60$ cups and has inelastic demand with elasticity $-\\dfrac{1}{3}$.",
      "At $20$ euros, Cart B expects $80$ cups and has inelastic demand with elasticity $-\\dfrac{1}{2}$.",
      "At this common price, Cart B's customers are more price-sensitive than Cart A's (larger absolute elasticity).",
      "For Cart A, a small price increase from $20$ euros would still raise its revenue.",
      "Because Cart A's demand is inelastic at $20$ euros, that price already maximises Cart A's revenue."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Cart A faces $D_A(p)=80-p$ and Cart B faces $D_B(p)=120-2p$; $\\mathrm{El}_A$ and $\\mathrm{El}_B$ are their price elasticities $\\dfrac{D'\\cdot p}{D}$.

Cart A's demand is $D_A(p)=80-p$. At $p=20$,

$$
D_A(20)=80-20=60.
$$

Price elasticity is $\\mathrm{El}_A(p)=\\dfrac{D_A'(p)\\cdot p}{D_A(p)}$ with $D_A'(p)=-1$:

$$
\\mathrm{El}_A(20)=\\dfrac{-1\\cdot 20}{60}=-\\dfrac{1}{3}.
$$

The statement is True.`,
      `**B.** → True

Cart A faces $D_A(p)=80-p$ and Cart B faces $D_B(p)=120-2p$; $\\mathrm{El}_A$ and $\\mathrm{El}_B$ are their price elasticities $\\dfrac{D'\\cdot p}{D}$.

Cart B's demand is $D_B(p)=120-2p$. At $p=20$,

$$
D_B(20)=120-40=80.
$$

With $D_B'(p)=-2$,

$$
\\mathrm{El}_B(20)=\\dfrac{-2\\cdot 20}{80}=\\dfrac{-40}{80}=-\\dfrac{1}{2}.
$$

The statement is True.`,
      `**C.** → True

Cart A faces $D_A(p)=80-p$ and Cart B faces $D_B(p)=120-2p$; $\\mathrm{El}_A$ and $\\mathrm{El}_B$ are their price elasticities $\\dfrac{D'\\cdot p}{D}$.

Compare absolute elasticities at the common price:

$$
|\\mathrm{El}_B(20)|=\\dfrac{1}{2}>\\dfrac{1}{3}=|\\mathrm{El}_A(20)|.
$$

Cart B's customers respond more strongly to a one-percent price change, so B's market is more price-sensitive at $p=20$.

The statement is True.`,
      `**D.** → True

Cart A faces $D_A(p)=80-p$ and Cart B faces $D_B(p)=120-2p$; $\\mathrm{El}_A$ and $\\mathrm{El}_B$ are their price elasticities $\\dfrac{D'\\cdot p}{D}$.

Cart A revenue is $R_A(p)=p(80-p)=80p-p^{2}$, with slope $R_A'(p)=80-2p$. At $p=20$,

$$
R_A'(20)=80-40=40>0.
$$

A positive revenue slope means a small price increase from $20$ euros still raises Cart A's revenue. That matches inelastic demand ($|\\mathrm{El}_A(20)|<1$).

The statement is True.`,
      `**E.** → False

Cart A faces $D_A(p)=80-p$ and Cart B faces $D_B(p)=120-2p$; $\\mathrm{El}_A$ and $\\mathrm{El}_B$ are their price elasticities $\\dfrac{D'\\cdot p}{D}$.

Inelastic demand means revenue still rises when price rises slightly; it does not mean revenue is already maximised. Cart A's revenue peak solves $R_A'(p)=0$, i.e. $p=40$, not $p=20$.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 114,
    solution_overview:
      "Compare two coffee-cart demands at $p=20$: elasticities, revenue slope for A, and reject the false 'already max' claim.",
  },
  {
    id: "math-11-115",
    case_id: "MATH 11.115",
    title: "Two products, one resource: reduce then maximise profit",
    subsection: "11.3",
    context:
      "A workshop makes two products in amounts $x$ and $y$. Profit is $P=30x+20y-x^{2}-y^{2}$, and a single resource constraint requires $x+y=10$ with $x\\ge 0$, $y\\ge 0$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Substituting the resource constraint into profit gives a one-variable profit in $x$.",
      "That reduced profit has a flat slope at $x=7.5$.",
      "At that candidate one has $y=2.5$, and the profit curve bends downward, confirming a local profit peak.",
      "The maximised constrained profit equals $212.5$.",
      "Ignoring the constraint and treating $x$ and $y$ as unrelated would automatically give the same answer."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Profit is $P=30x+20y-x^{2}-y^{2}$ under $x+y=10$; after substitution, $P(x)$ has slope $P'$ and bend $P''$.

Profit is $P=30x+20y-x^{2}-y^{2}$. Substitute the resource constraint $y=10-x$:

$$
\\begin{align*}
P(x)&=30x+20(10-x)-x^{2}-(10-x)^{2}\\\\
&=30x+200-20x-x^{2}-(100-20x+x^{2})\\\\
&=10x+200-x^{2}-100+20x-x^{2}\\\\
&=100+30x-2x^{2}.
\\end{align*}
$$

So the reduced profit formula matches the claim.

Substituting $y=10-x$ into $P=30x+20y-x^{2}-y^{2}$ simplifies to $P(x)=100+30x-2x^{2}$.

Constraint substitution is what produces the reduced profit $100+30x-2x^{2}$.

The statement is True.`,
      `**B.** → True

After substituting the resource constraint $y=10-x$ into profit $P=30x+20y-x^{2}-y^{2}$, the reduced objective is

$$
P(x)=100+30x-2x^{2}.
$$

Here $P'(x)$ is the slope of constrained profit. Differentiate:

$$
P'(x)=30-4x.
$$

Set the slope to zero: $30-4x=0$ gives $x=7.5$. That is the unique flat-slope candidate for constrained profit on the line $x+y=10$.

Constrained profit is flat at $x=7.5$ on the resource line $x+y=10$.

That is the claim-specific reading of letter B for this model.

Carry the last displayed derivative or level all the way to a simplified sign or number before attaching TRUE/FALSE.

The statement is True.`,
      `**C.** → True

At $x=7.5$ the resource constraint gives $y=10-7.5=2.5$. Differentiate the reduced profit once more:

$$
P''(x)=-4<0
$$

at every $x$, including $7.5$. The profit curve along the constraint bends downward, so the bundle $(7.5,2.5)$ is a strict local profit maximum.

Downward bend $P''=-4$ labels the bundle $(7.5,2.5)$ as a constrained profit peak.

The bundle $(7.5,2.5)$ is a constrained local profit peak.

The bundle $(7.5,2.5)$ is a constrained local profit peak because $P''=-4<0$.

That is the claim-specific reading of letter C for this model.

The statement is True.`,
      `**D.** → True

Constrained profit along $x+y=10$ is the reduced function $P(x)=100+30x-2x^{2}$. At the local peak candidate $x=7.5$ (where $P'=0$ and $P''=-4<0$), evaluate the level:

$$
P(7.5)=100+30\\cdot 7.5-2\\cdot(7.5)^{2}=100+225-2\\cdot 56.25=325-112.5=212.5.
$$

The maximised constrained profit equals $212.5$. That height is read after the bend check has already labelled a peak at this mix.

Maximised constrained profit equals $212.5$ at that peak bundle.

That is the claim-specific reading of letter D for this model.

The statement is True.`,
      `**E.** → False

Profit is $P=30x+20y-x^{2}-y^{2}$ under $x+y=10$; after substitution, $P(x)$ has slope $P'$ and bend $P''$.

Ignoring the constraint and treating $x$ and $y$ as unrelated would mean maximising $P(x,y)$ over the whole plane, which generally picks a different point from the constrained problem $x+y=10$. The resource limit binds here, so the unconstrained and constrained answers need not agree.

An unconstrained maximisation over the whole plane generally picks a different point; the resource limit binds, so the answers need not agree.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 115,
    solution_overview:
      "Substitute $x+y=10$ into profit, then maximise the resulting one-variable $P(x)$.",
  },
  {
    id: "math-11-116",
    case_id: "MATH 11.116",
    title: "River paddock: three-sided fence maximises area",
    subsection: "11.3",
    context:
      "A farmer fences a rectangular riverside paddock using $40$ metres of fence for three sides only (the river forms the fourth side). Let $x$ be the length of each side perpendicular to the river. Decide TRUE or FALSE for each claim.",
    statements: [
      "With three sides fenced, enclosed area can be written as a function of the perpendicular side alone.",
      "Area has a flat slope when each perpendicular side is $10$ metres.",
      "Then the riverside side is $20$ metres, and the area curve bends downward, so that layout maximises area locally.",
      "Maximal area is $200$ square metres.",
      "The same dimensions would also maximise area if all four sides had to be fenced with the same $40$ metres."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $A(x)$ be enclosed riverside paddock area when each perpendicular side has length $x$; $A'$ and $A''$ are slope and bend.

Let $A$ be enclosed paddock area. With the river forming one side, only three sides are fenced. If each side perpendicular to the river has length $x$, those two sides use $2x$ metres of fence, so the side parallel to the river uses $40-2x$ metres. Area is

$$
A(x)=x(40-2x)=40x-2x^{2},
$$

The statement is True.`,
      `**B.** → True

Let $A(x)$ be enclosed riverside paddock area when each perpendicular side has length $x$; $A'$ and $A''$ are slope and bend.

$$
A'(x)=40-4x.
$$

Set the slope to zero:

$$
40-4x=0\\qquad\\Rightarrow\\qquad x=10.
$$

Setting $A'=40-4x=0$ isolates $x=10$.

Flat area at perpendicular side $10$ m is the unique positive root of $A'=40-4x$.

The statement is True.`,
      `**C.** → True

Let $A(x)$ be enclosed riverside paddock area when each perpendicular side has length $x$; $A'$ and $A''$ are slope and bend.

The riverside (parallel) side is then $40-2\\cdot 10=20$ metres. Also

$$
A''(x)=-4<0,
$$

so $x=10$ is a local maximum of area.

The riverside side is then $20$ m, and $A''=-4<0$ certifies a local area maximum.

The statement is True.`,
      `**D.** → True

Let $A(x)$ be enclosed riverside paddock area when each perpendicular side has length $x$; $A'$ and $A''$ are slope and bend.

Maximal enclosed area at that layout is

$$
A(10)=10\\cdot 20=200
$$

square metres — the largest riverside paddock you can fence with $40$ metres on three sides.

At that layout, $A(10)=200$ square metres.

The statement is True.`,
      `**E.** → False

Let $A(x)$ be enclosed riverside paddock area when each perpendicular side has length $x$; $A'$ and $A''$ are slope and bend.

If all four sides had to be fenced with the same $40$ metres, the constraint would be $2x+2y=40$, so $y=20-x$ and $A=x(20-x)$, whose peak is a $10\\times 10$ square of area $100$, not the three-sided dimensions $10\\times 20$. Same fence length with four sides yields a different maximiser and a smaller max area.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 116,
    solution_overview:
      "Derive the three-sided area function from the $40$ m fence, then maximise.",
  },
  {
    id: "math-11-117",
    case_id: "MATH 11.117",
    title: "Fixed output xy=16: minimise cost by substitution",
    subsection: "11.3",
    context:
      "A firm must produce exactly $16$ units with production $Q=xy$, using inputs that cost $C=2x+8y$. Decide TRUE or FALSE for each claim.",
    statements: [
      "Substituting $y=\\dfrac{16}{x}$ into cost gives $C(x)=2x+\\dfrac{128}{x}$ for $x>0$.",
      "Cost has a flat slope at $x=8$.",
      "Then $y=2$, total cost is $32$, and the cost curve bends upward, confirming a local cost trough.",
      "Along $xy=16$, the cost-minimising point balances the input prices against the trade-off $\\dfrac{y}{x}$, which holds at $(x,y)=(8,2)$.",
      "Any other pair with $xy=16$ has the same cost $32$, so substitution is unnecessary."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The firm must produce exactly $16$ units with $Q=xy$, so $y=\\dfrac{16}{x}$ for $x>0$. Input cost is $C=2x+8y$. Substituting the isoquant constraint yields the one-variable cost

$$
C(x)=2x+8\\cdot\\dfrac{16}{x}=2x+\\dfrac{128}{x}.
$$

Here $C(x)$ is the objective to minimise along $xy=16$; every division is written with $\\dfrac{\\cdot}{\\cdot}$. The claimed reduced cost formula matches this derivation.

The reduced cost along $xy=16$ is $C(x)=2x+\\dfrac{128}{x}$.

That is the claim-specific reading of letter A for this model.

The statement is True.`,
      `**B.** → True

Along the isoquant, cost is $C(x)=2x+\\dfrac{128}{x}$ for $x>0$. Its slope (marginal cost in the free input $x$) is

$$
C'(x)=2-\\dfrac{128}{x^{2}}.
$$

Set the slope to zero:

$$
2=\\dfrac{128}{x^{2}}\\qquad\\Rightarrow\\qquad x^{2}=64\\qquad\\Rightarrow\\qquad x=8
$$

(positive root). Cost has a flat slope at input level eight — the unique positive candidate before checking the bend.

Cost is flat at the positive input $x=8$.

That is the claim-specific reading of letter B for this model.

Carry the last displayed derivative or level all the way to a simplified sign or number before attaching TRUE/FALSE.

The statement is True.`,
      `**C.** → True

At $x=8$ one has $y=\\dfrac{16}{8}=2$ and total cost

$$
C(8)=2\\cdot 8+\\dfrac{128}{8}=16+16=32.
$$

The second derivative is $C''(x)=\\dfrac{256}{x^{3}}$, so $C''(8)=\\dfrac{256}{512}=\\dfrac{1}{2}>0$: an upward bend, confirming a local cost trough at that mix.

Upward bend $C''(8)=\\dfrac{1}{2}$ together with cost $32$ certifies the local trough at $(8,2)$.

The mix $(8,2)$ is a local cost trough with cost $32$.

The mix $(8,2)$ with cost $32$ and $C''(8)>0$ is a local cost trough.

That is the claim-specific reading of letter C for this model.

The statement is True.`,
      `**D.** → True

Cost is $C=2x+8y$ along $xy=16$; after $y=\\dfrac{16}{x}$, the reduced $C(x)$ has slope $C'$ and bend $C''$.

Along $y=\\dfrac{16}{x}$ one has $\\dfrac{dy}{dx}=-\\dfrac{16}{x^{2}}=-\\dfrac{y}{x}$. Setting the cost slope in $x$ to zero is equivalent to balancing the input prices against that trade-off:

$$
2=8\\cdot\\dfrac{y}{x}.
$$

At $(x,y)=(8,2)$ one has $8\\cdot\\dfrac{2}{8}=2$, so the claimed balance holds at the cost-minimising point.

The balance $2=8\\cdot\\dfrac{y}{x}$ holds at $(8,2)$ because $8\\cdot\\dfrac{2}{8}=2$.

The statement is True.`,
      `**E.** → False

Different input mixes on the isoquant $xy=16$ generally have different costs. For example the balanced mix $(4,4)$ gives

$$
C=2\\cdot 4+8\\cdot 4=8+32=40,
$$

which is strictly larger than the trough cost $C(8)=32$ at $(8,2)$. Equal output does not force equal cost, so substitution into $C(x)=2x+\\dfrac{128}{x}$ is needed to find the cheapest feasible mix.

Other mixes on $xy=16$ can cost more than $32$, so substitution is required.

That is the claim-specific reading of letter E for this model.

Carry the last displayed derivative or level all the way to a simplified sign or number before attaching TRUE/FALSE.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 117,
    solution_overview:
      "Substitute $y=16/x$ into $C=2x+8y$ and minimise the resulting $C(x)$.",
  },
  {
    id: "math-11-118",
    case_id: "MATH 11.118",
    title: "Ferry tickets: story of revenue and demand sensitivity",
    subsection: "11.3",
    context:
      "A coastal ferry sells day-return tickets at price $p$ euros. For prices between $0$ and $90$ euros, passenger demand that day is $D(p)=90-p$. The operator cares about ticket revenue and about how sensitive passenger numbers are to the fare. Decide TRUE or FALSE for each claim.",
    statements: [
      "Ticket revenue as a function of the fare is $R(p)=90p-p^{2}$, and revenue is maximised at a fare of $45$ euros, where revenue equals $2025$ euros.",
      "At the $45$-euro fare, demand is unit elastic.",
      "If the ferry instead charges $30$ euros, a small fare increase would raise ticket revenue.",
      "If the ferry charges $60$ euros, a small fare increase would lower ticket revenue.",
      "Whenever demand is elastic (absolute elasticity greater than $1$), that fare already maximises revenue."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Ferry demand is $D(p)=90-p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity.

Let $D(p)$ be passenger demand at fare $p$, and let ticket revenue be $R(p)=p\\cdot D(p)$:

$$
R(p)=p(90-p)=90p-p^{2}.
$$

The slope is $R'(p)=90-2p$. Setting it to zero gives $p=45$. Peak revenue is

$$
R(45)=45\\cdot 45=2025.
$$

The statement is True.`,
      `**B.** → True

Ferry demand is $D(p)=90-p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity.

Price elasticity of demand is

$$
\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}.
$$

Here $D'(p)=-1$, so

$$
\\mathrm{El}(p)=\\dfrac{-p}{90-p}.
$$

At the revenue-maximising fare:

$$
\\mathrm{El}(45)=\\dfrac{-45}{45}=-1.
$$

The statement is True.`,
      `**C.** → True

Ferry demand is $D(p)=90-p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity.

At $p=30$,

$$
R'(30)=90-2\\cdot 30=30>0.
$$

Positive revenue slope means a small fare rise increases ticket revenue. Equivalently

$$
\\mathrm{El}(30)=\\dfrac{-30}{60}=-\\dfrac{1}{2},
$$

The statement is True.`,
      `**D.** → True

Ferry demand is $D(p)=90-p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity.

At $p=60$,

$$
R'(60)=90-2\\cdot 60=-30<0.
$$

Negative revenue slope means a small fare rise reduces ticket revenue. Equivalently $\\mathrm{El}(60)=\\dfrac{-60}{30}=-2$ (elastic demand).

The statement is True.`,
      `**E.** → False

Ferry demand is $D(p)=90-p$ and ticket revenue is $R(p)=p\\cdot D(p)$; $\\mathrm{El}(p)=\\dfrac{D'(p)\\cdot p}{D(p)}$ is price elasticity.

Elastic demand ($|\\mathrm{El}|>1$) is the region where raising the fare lowers revenue. The revenue maximum sits where elasticity equals $-1$ (here $p=45$), not wherever demand happens to be elastic.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 118,
    solution_overview:
      "Ferry demand $D=90-p$: form revenue, find the peak fare $45$, and read inelastic versus elastic fare regions in words.",
  },
  {
    id: "math-11-119",
    case_id: "MATH 11.119",
    title: "Open box from a sheet: reduce volume then prove the peak",
    subsection: "11.3",
    context:
      "A square sheet of side $12$ cm has equal squares of side $x$ cut from each corner, and the edges are folded up to make an open box. The volume of the box should be maximised for $0<x<6$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The box has height $x$ and base side $12-2x$, so volume is $V(x)=x(12-2x)^{2}$.",
      "Expanding and differentiating gives a cubic volume whose slope is a quadratic in $x$.",
      "Inside $(0,6)$ the only flat-slope cut size is $x=2$.",
      "At $x=2$ the volume curve bends downward and volume equals $128$, so that cut maximises volume locally.",
      "Finding the flat-slope cut alone, without checking the bend or the ends of the interval, already proves the global maximum on $(0,6)$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $V(x)$ be open-box volume for cut size $x\\in(0,6)$; $V'$ is how volume changes with $x$ and $V''$ reads the bend.

Let $V$ be the volume of the open box. Cutting equal squares of side $x$ from each corner of a $12$ cm square sheet and folding up the edges leaves a square base of side $12-2x$ and height $x$, so

$$
V(x)=x(12-2x)^{2},
$$

for $0<x<6$. That is the volume formula to be maximised — derived from the cutting geometry.

Cutting squares of side $x$ from a $12$ cm sheet leaves base $12-2x$ and height $x$, so $V(x)=x(12-2x)^{2}$.

The statement is True.`,
      `**B.** → True

Expand $(12-2x)^{2}=144-48x+4x^{2}$ and multiply by the height $x$:

$$
V(x)=144x-48x^{2}+4x^{3}.
$$

Differentiate term by term:

$$
V'(x)=144-96x+12x^{2}.
$$

Both the expanded volume and its slope match the claim's algebraic content.

Expanded volume and its quadratic slope are the raw material for the next flat-slope factorisation.

The expanded volume and its slope feed the next factorisation step.

Expanded volume and its quadratic slope feed the flat-slope factorisation.

That is the claim-specific reading of letter B for this model.

The statement is True.`,
      `**C.** → True

Open-box volume is $V(x)=144x-48x^{2}+4x^{3}$ on $0<x<6$, with slope

$$
V'(x)=144-96x+12x^{2}=12(x^{2}-8x+12)=12(x-2)(x-6).
$$

Setting $V'(x)=0$ gives roots $x=2$ and $x=6$. Only $x=2$ lies in the open interval $(0,6)$. The root $x=6$ is an endpoint of the geometric domain (the base side $12-2x$ collapses to zero), so it is not an interior flat-slope candidate. The only interior flat-slope cut is $x=2$.

Only $x=2$ is an interior flat-slope cut on $(0,6)$.

That is the claim-specific reading of letter C for this model.

The statement is True.`,
      `**D.** → True

With volume $V(x)=x(12-2x)^{2}$, the second derivative of the expanded form is $V''(x)=-96+24x$. At the interior flat-slope cut $x=2$,

$$
V''(2)=-96+48=-48<0,
$$

so the volume curve bends downward — a local volume peak. The volume level there is

$$
V(2)=2\\cdot(12-4)^{2}=2\\cdot 64=128.
$$

Thus cut size $x=2$ maximises volume locally, with volume $128$.

Cut $x=2$ is a local volume peak with volume $128$.

That is the claim-specific reading of letter D for this model.

Carry the last displayed derivative or level all the way to a simplified sign or number before attaching TRUE/FALSE.

The statement is True.`,
      `**E.** → False

Let $V(x)$ be open-box volume for cut size $x\\in(0,6)$; $V'$ is how volume changes with $x$ and $V''$ reads the bend.

Solving $V'=0$ only produces candidates. On a bounded open interval you still need the second-derivative check (or a sign chart) and an endpoint comparison to argue for a global maximum. Finding $V'(2)=0$ alone does not finish the proof that $x=2$ maximises volume on $(0,6)$.

Solving $V'=0$ only produces candidates; a global claim on $(0,6)$ still needs the bend check and endpoint behaviour.

The statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 119,
    solution_overview:
      "Derive $V(x)=x(12-2x)^{2}$ from the sheet geometry, then maximise with $V'$ and $V''$.",
  },
  {
    id: "math-11-120",
    case_id: "MATH 11.120",
    title: "Two fencing jobs: derive both area functions, compare peaks",
    subsection: "11.3",
    context:
      "Two projects use $24$ metres of fencing. River project: a rectangular paddock with one side along a river (only three sides fenced). Field project: a fully enclosed rectangle (all four sides fenced). In both projects let $x$ be a side perpendicular to the long direction described in the usual way. Decide TRUE or FALSE for each claim.",
    statements: [
      "For the river project the maximal paddock area is $72$ square metres, achieved when each perpendicular side is $6$ metres.",
      "For the field project the maximal enclosed area is $36$ square metres, also at perpendicular side $6$ metres.",
      "Both projects have a downward-bending area curve at their candidates, so both candidates are local area peaks.",
      "Because both optimisations yield perpendicular side $6$, the two projects have the same maximal area.",
      "The river project's maximal area is twice the field project's maximal area for the same fence length."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Write $A_R(x)$ for the river-project area and $A_F(x)$ for the field-project area; each has its own slope and bend.

River project: only three sides are fenced with $24$ metres. If each perpendicular side has length $x$, the parallel side is $24-2x$, so area is

$$
A_R(x)=x(24-2x)=24x-2x^{2}.
$$

Then $A_R'(x)=24-4x=0$ gives $x=6$, and $A_R(6)=6\\cdot 12=72$. With $A_R''(x)=-4<0$ this is a local maximum of area with maximal area $72$.

River area $A_R=x(24-2x)$ has $A_R'=24-4x=0$ at $x=6$ with $A_R(6)=72$ and $A_R''=-4<0$.

The statement is True.`,
      `**B.** → True

Write $A_R(x)$ for the river-project area and $A_F(x)$ for the field-project area; each has its own slope and bend.

Field project: all four sides are fenced, so $2x+2y=24$ gives $y=12-x$ and area

$$
A_F(x)=x(12-x)=12x-x^{2}.
$$

Then $A_F'(x)=12-2x=0$ gives $x=6$, and $A_F(6)=6\\cdot 6=36$. With $A_F''(x)=-2<0$ this is a local maximum with maximal area $36$.

Field area $A_F=x(12-x)$ has $A_F'=12-2x=0$ at $x=6$ with $A_F(6)=36$ and $A_F''=-2<0$.

Field peak area $36$ at perpendicular side $6$ follows from $A_F'=0$ and $A_F''<0$.

The statement is True.`,
      `**C.** → True

For the river project, $A_R''(x)=-4$, so $A_R''(6)=-4<0$. For the field project, $A_F''(x)=-2$, so $A_F''(6)=-2<0$. Both second derivatives are negative at their flat-slope candidates, so both candidates are local area maxima — even though the peak *areas* $72$ and $36$ differ.

Both $A_R''(6)<0$ and $A_F''(6)<0$ label local area peaks despite unequal peak areas.

Both projects have local area peaks at their candidates despite unequal peak areas.

Both negative second derivatives label local area peaks despite unequal peak areas $72$ and $36$.

The statement is True.`,
      `**D.** → False

Write $A_R(x)$ for the river-project area and $A_F(x)$ for the field-project area; each has its own slope and bend.

Both projects happen to have candidate $x=6$, but that does not mean they share the same maximal area: $A_R(6)=72\\neq 36=A_F(6)$. The constraints differ (three sides versus four), so the peak areas differ.

Equal candidate $x=6$ does not equalise peak areas: $72\\neq 36$ because three-sided and four-sided constraints differ.

Equal $x=6$ does not equalise areas under different fencing rules: $72\\neq 36$.

The statement is False.`,
      `**E.** → True

Write $A_R(x)$ for the river-project area and $A_F(x)$ for the field-project area; each has its own slope and bend.

Indeed $72=2\\cdot 36$: the river project's maximal area is twice the field project's maximal area for the same fence length. Opening one side to the river doubles the largest enclosure you can get from $24$ metres of fencing in these two standard models.

Indeed $72=2\\cdot 36$: opening one side to the river doubles the largest enclosure from the same $24$ m of fence.

The factor-of-two relation $72=2\\cdot 36$ compares the two peak areas for the same fence length.

The statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 120,
    solution_overview:
      "Derive both area functions from the fencing rules, maximise each, and compare the peak areas.",
  },
  {
    id: "math-11-121",
    case_id: "MATH 11.121",
    title: "Reading increasing intervals from a graph of f′",
    subsection: "11.4",
    context:
      "The graph below shows the first derivative $f'$ of a function $f$ that is defined and differentiable on all of $\\mathbb{R}$. The curve shown is the derivative $f'$, not $f$ itself. Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ is increasing on the interval $(1,5)$.",
      "The function $f$ has a local maximum at $x=5$.",
      "The function $f$ has an inflection point at $x=1$.",
      "The function $f$ is concave up at $x=4$.",
      "The function $f$ has a local minimum at $x=3$."
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

On $(1,5)$ the graph of $f'$ lies above the horizontal axis, so $f'(x)>0$. Wherever the first derivative is positive, $f$ itself is strictly increasing. No algebra is needed — only the sign of the plotted curve.

The statement is True.`,
      `**B.** → True

At $x=5$ the graph of $f'$ crosses from above the axis to below it: $f'$ changes from positive to negative. That sign change means $f$ changes from increasing to decreasing, which is exactly a local maximum of $f$.

The statement is True.`,
      `**C.** → False

An inflection point of $f$ is where concavity changes, i.e. where $f'$ changes from increasing to decreasing (or the reverse). At $x=1$, $f'$ crosses the axis while still climbing toward its peak at $x=3$. So $x=1$ is a local minimum of $f$, not an inflection point of $f$.

The statement is False.`,
      `**D.** → False

Concavity of $f$ is read from whether $f'$ is rising or falling. At $x=4$, the plotted $f'$ is clearly decreasing (past its peak at $x=3$), so $f''(4)<0$ and $f$ is concave down — not concave up.

The statement is False.`,
      `**E.** → False

A local extremum of $f$ requires $f'=0$ (for a differentiable $f$). At $x=3$ the graph shows $f'(3)=4\\neq 0$. The point $x=3$ is where $f'$ peaks, so it is an inflection point of $f$, not a local minimum of $f$.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 121,
    solution_overview:
      "Read signs of $f'$ for increasing/decreasing; sign changes of $f'$ for extrema; whether $f'$ is rising/falling for concavity.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22252.7%22%20x2%3D%22540.0%22%20y2%3D%22252.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22205.5%22%20x2%3D%22540.0%22%20y2%3D%22205.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22110.9%22%20x2%3D%22540.0%22%20y2%3D%22110.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2263.6%22%20x2%3D%22540.0%22%20y2%3D%2263.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22252.7%22%20x2%3D%2248.0%22%20y2%3D%22252.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22256.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22205.5%22%20x2%3D%2248.0%22%20y2%3D%22205.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22209.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22158.2%22%20x2%3D%2248.0%22%20y2%3D%22158.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22161.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22110.9%22%20x2%3D%2248.0%22%20y2%3D%22110.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22114.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2263.6%22%20x2%3D%2248.0%22%20y2%3D%2263.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2267.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C276.4%2050.2%2C272.5%2052.5%2C268.7%2054.7%2C264.9%2056.9%2C261.2%2059.2%2C257.5%2061.4%2C253.8%2063.7%2C250.2%2065.9%2C246.5%2068.1%2C243.0%2070.4%2C239.4%2072.6%2C235.9%2074.8%2C232.5%2077.1%2C229.1%2079.3%2C225.7%2081.5%2C222.3%2083.8%2C219.0%2086.0%2C215.7%2088.3%2C212.4%2090.5%2C209.2%2092.7%2C206.0%2095.0%2C202.9%2097.2%2C199.8%2099.4%2C196.7%20101.7%2C193.7%20103.9%2C190.7%20106.1%2C187.7%20108.4%2C184.8%20110.6%2C181.8%20112.9%2C179.0%20115.1%2C176.2%20117.3%2C173.4%20119.6%2C170.6%20121.8%2C167.9%20124.0%2C165.2%20126.3%2C162.5%20128.5%2C159.9%20130.7%2C157.3%20133.0%2C154.8%20135.2%2C152.3%20137.5%2C149.8%20139.7%2C147.3%20141.9%2C144.9%20144.2%2C142.6%20146.4%2C140.2%20148.6%2C137.9%20150.9%2C135.6%20153.1%2C133.4%20155.3%2C131.2%20157.6%2C129.1%20159.8%2C126.9%20162.1%2C124.8%20164.3%2C122.8%20166.5%2C120.8%20168.8%2C118.8%20171.0%2C116.8%20173.2%2C114.9%20175.5%2C113.0%20177.7%2C111.2%20179.9%2C109.4%20182.2%2C107.6%20184.4%2C105.8%20186.7%2C104.1%20188.9%2C102.5%20191.1%2C100.8%20193.4%2C99.2%20195.6%2C97.7%20197.8%2C96.1%20200.1%2C94.6%20202.3%2C93.2%20204.5%2C91.8%20206.8%2C90.4%20209.0%2C89.0%20211.3%2C87.7%20213.5%2C86.4%20215.7%2C85.2%20218.0%2C84.0%20220.2%2C82.8%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.4%20231.4%2C77.4%20233.6%2C76.5%20235.9%2C75.5%20238.1%2C74.6%20240.3%2C73.8%20242.6%2C72.9%20244.8%2C72.1%20247.0%2C71.4%20249.3%2C70.7%20251.5%2C70.0%20253.7%2C69.3%20256.0%2C68.7%20258.2%2C68.1%20260.5%2C67.6%20262.7%2C67.1%20264.9%2C66.6%20267.2%2C66.2%20269.4%2C65.8%20271.6%2C65.4%20273.9%2C65.1%20276.1%2C64.8%20278.3%2C64.5%20280.6%2C64.3%20282.8%2C64.1%20285.1%2C63.9%20287.3%2C63.8%20289.5%2C63.7%20291.8%2C63.7%20294.0%2C63.6%20296.2%2C63.7%20298.5%2C63.7%20300.7%2C63.8%20302.9%2C63.9%20305.2%2C64.1%20307.4%2C64.3%20309.7%2C64.5%20311.9%2C64.8%20314.1%2C65.1%20316.4%2C65.4%20318.6%2C65.8%20320.8%2C66.2%20323.1%2C66.6%20325.3%2C67.1%20327.5%2C67.6%20329.8%2C68.1%20332.0%2C68.7%20334.3%2C69.3%20336.5%2C70.0%20338.7%2C70.7%20341.0%2C71.4%20343.2%2C72.1%20345.4%2C72.9%20347.7%2C73.8%20349.9%2C74.6%20352.1%2C75.5%20354.4%2C76.5%20356.6%2C77.4%20358.9%2C78.4%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.8%20370.0%2C84.0%20372.3%2C85.2%20374.5%2C86.4%20376.7%2C87.7%20379.0%2C89.0%20381.2%2C90.4%20383.5%2C91.8%20385.7%2C93.2%20387.9%2C94.6%20390.2%2C96.1%20392.4%2C97.7%20394.6%2C99.2%20396.9%2C100.8%20399.1%2C102.5%20401.3%2C104.1%20403.6%2C105.8%20405.8%2C107.6%20408.1%2C109.4%20410.3%2C111.2%20412.5%2C113.0%20414.8%2C114.9%20417.0%2C116.8%20419.2%2C118.8%20421.5%2C120.8%20423.7%2C122.8%20425.9%2C124.8%20428.2%2C126.9%20430.4%2C129.1%20432.7%2C131.2%20434.9%2C133.4%20437.1%2C135.6%20439.4%2C137.9%20441.6%2C140.2%20443.8%2C142.6%20446.1%2C144.9%20448.3%2C147.3%20450.5%2C149.8%20452.8%2C152.3%20455.0%2C154.8%20457.3%2C157.3%20459.5%2C159.9%20461.7%2C162.5%20464.0%2C165.2%20466.2%2C167.9%20468.4%2C170.6%20470.7%2C173.4%20472.9%2C176.2%20475.1%2C179.0%20477.4%2C181.8%20479.6%2C184.8%20481.9%2C187.7%20484.1%2C190.7%20486.3%2C193.7%20488.6%2C196.7%20490.8%2C199.8%20493.0%2C202.9%20495.3%2C206.0%20497.5%2C209.2%20499.7%2C212.4%20502.0%2C215.7%20504.2%2C219.0%20506.5%2C222.3%20508.7%2C225.7%20510.9%2C229.1%20513.2%2C232.5%20515.4%2C235.9%20517.6%2C239.4%20519.9%2C243.0%20522.1%2C246.5%20524.3%2C250.2%20526.6%2C253.8%20528.8%2C257.5%20531.1%2C261.2%20533.3%2C264.9%20535.5%2C268.7%20537.8%2C272.5%20540.0%2C276.4%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%2263.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-122",
    case_id: "MATH 11.122",
    title: "Local min, decreasing intervals, and inflection from f′",
    subsection: "11.4",
    context:
      "The graph below shows $f'$, not $f$. The function $f$ is differentiable on all of $\\mathbb{R}$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ has a local minimum at $x=1$.",
      "The function $f$ is decreasing on the interval $(5,6)$.",
      "The function $f$ has an inflection point at $x=3$.",
      "The function $f$ is decreasing on the whole interval $(0,3)$.",
      "At $x=2$, the slope of $f$ is positive."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

At $x=1$, $f'$ changes from negative (below the axis) to positive (above). That is the first-derivative test for a local minimum of $f$.

The statement is True.`,
      `**B.** → True

On $(5,6)$ the graph of $f'$ is below the axis, so $f'<0$ and $f$ is decreasing.

The statement is True.`,
      `**C.** → True

The graph of $f'$ peaks at $x=3$: $f'$ changes from increasing to decreasing. That means $f''$ changes from positive to negative, so $f$ has an inflection point at $x=3$.

The statement is True.`,
      `**D.** → False

On $(0,1)$ one has $f'<0$ (decreasing), but on $(1,3)$ one has $f'>0$ (increasing). So $f$ is not decreasing on the whole of $(0,3)$.

The statement is False.`,
      `**E.** → True

At $x=2$ the plotted curve is above the axis, so $f'(2)>0$: the slope of $f$ is positive there.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 122,
    solution_overview:
      "Sign change $-$ to $+$ at $x=1$ is a local min; $f'<0$ after $x=5$ means decreasing; peak of $f'$ at $x=3$ is an inflection of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22252.7%22%20x2%3D%22540.0%22%20y2%3D%22252.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22205.5%22%20x2%3D%22540.0%22%20y2%3D%22205.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22110.9%22%20x2%3D%22540.0%22%20y2%3D%22110.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2263.6%22%20x2%3D%22540.0%22%20y2%3D%2263.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22252.7%22%20x2%3D%2248.0%22%20y2%3D%22252.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22256.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22205.5%22%20x2%3D%2248.0%22%20y2%3D%22205.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22209.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22158.2%22%20x2%3D%2248.0%22%20y2%3D%22158.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22161.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22110.9%22%20x2%3D%2248.0%22%20y2%3D%22110.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22114.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2263.6%22%20x2%3D%2248.0%22%20y2%3D%2263.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2267.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C276.4%2050.2%2C272.5%2052.5%2C268.7%2054.7%2C264.9%2056.9%2C261.2%2059.2%2C257.5%2061.4%2C253.8%2063.7%2C250.2%2065.9%2C246.5%2068.1%2C243.0%2070.4%2C239.4%2072.6%2C235.9%2074.8%2C232.5%2077.1%2C229.1%2079.3%2C225.7%2081.5%2C222.3%2083.8%2C219.0%2086.0%2C215.7%2088.3%2C212.4%2090.5%2C209.2%2092.7%2C206.0%2095.0%2C202.9%2097.2%2C199.8%2099.4%2C196.7%20101.7%2C193.7%20103.9%2C190.7%20106.1%2C187.7%20108.4%2C184.8%20110.6%2C181.8%20112.9%2C179.0%20115.1%2C176.2%20117.3%2C173.4%20119.6%2C170.6%20121.8%2C167.9%20124.0%2C165.2%20126.3%2C162.5%20128.5%2C159.9%20130.7%2C157.3%20133.0%2C154.8%20135.2%2C152.3%20137.5%2C149.8%20139.7%2C147.3%20141.9%2C144.9%20144.2%2C142.6%20146.4%2C140.2%20148.6%2C137.9%20150.9%2C135.6%20153.1%2C133.4%20155.3%2C131.2%20157.6%2C129.1%20159.8%2C126.9%20162.1%2C124.8%20164.3%2C122.8%20166.5%2C120.8%20168.8%2C118.8%20171.0%2C116.8%20173.2%2C114.9%20175.5%2C113.0%20177.7%2C111.2%20179.9%2C109.4%20182.2%2C107.6%20184.4%2C105.8%20186.7%2C104.1%20188.9%2C102.5%20191.1%2C100.8%20193.4%2C99.2%20195.6%2C97.7%20197.8%2C96.1%20200.1%2C94.6%20202.3%2C93.2%20204.5%2C91.8%20206.8%2C90.4%20209.0%2C89.0%20211.3%2C87.7%20213.5%2C86.4%20215.7%2C85.2%20218.0%2C84.0%20220.2%2C82.8%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.4%20231.4%2C77.4%20233.6%2C76.5%20235.9%2C75.5%20238.1%2C74.6%20240.3%2C73.8%20242.6%2C72.9%20244.8%2C72.1%20247.0%2C71.4%20249.3%2C70.7%20251.5%2C70.0%20253.7%2C69.3%20256.0%2C68.7%20258.2%2C68.1%20260.5%2C67.6%20262.7%2C67.1%20264.9%2C66.6%20267.2%2C66.2%20269.4%2C65.8%20271.6%2C65.4%20273.9%2C65.1%20276.1%2C64.8%20278.3%2C64.5%20280.6%2C64.3%20282.8%2C64.1%20285.1%2C63.9%20287.3%2C63.8%20289.5%2C63.7%20291.8%2C63.7%20294.0%2C63.6%20296.2%2C63.7%20298.5%2C63.7%20300.7%2C63.8%20302.9%2C63.9%20305.2%2C64.1%20307.4%2C64.3%20309.7%2C64.5%20311.9%2C64.8%20314.1%2C65.1%20316.4%2C65.4%20318.6%2C65.8%20320.8%2C66.2%20323.1%2C66.6%20325.3%2C67.1%20327.5%2C67.6%20329.8%2C68.1%20332.0%2C68.7%20334.3%2C69.3%20336.5%2C70.0%20338.7%2C70.7%20341.0%2C71.4%20343.2%2C72.1%20345.4%2C72.9%20347.7%2C73.8%20349.9%2C74.6%20352.1%2C75.5%20354.4%2C76.5%20356.6%2C77.4%20358.9%2C78.4%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.8%20370.0%2C84.0%20372.3%2C85.2%20374.5%2C86.4%20376.7%2C87.7%20379.0%2C89.0%20381.2%2C90.4%20383.5%2C91.8%20385.7%2C93.2%20387.9%2C94.6%20390.2%2C96.1%20392.4%2C97.7%20394.6%2C99.2%20396.9%2C100.8%20399.1%2C102.5%20401.3%2C104.1%20403.6%2C105.8%20405.8%2C107.6%20408.1%2C109.4%20410.3%2C111.2%20412.5%2C113.0%20414.8%2C114.9%20417.0%2C116.8%20419.2%2C118.8%20421.5%2C120.8%20423.7%2C122.8%20425.9%2C124.8%20428.2%2C126.9%20430.4%2C129.1%20432.7%2C131.2%20434.9%2C133.4%20437.1%2C135.6%20439.4%2C137.9%20441.6%2C140.2%20443.8%2C142.6%20446.1%2C144.9%20448.3%2C147.3%20450.5%2C149.8%20452.8%2C152.3%20455.0%2C154.8%20457.3%2C157.3%20459.5%2C159.9%20461.7%2C162.5%20464.0%2C165.2%20466.2%2C167.9%20468.4%2C170.6%20470.7%2C173.4%20472.9%2C176.2%20475.1%2C179.0%20477.4%2C181.8%20479.6%2C184.8%20481.9%2C187.7%20484.1%2C190.7%20486.3%2C193.7%20488.6%2C196.7%20490.8%2C199.8%20493.0%2C202.9%20495.3%2C206.0%20497.5%2C209.2%20499.7%2C212.4%20502.0%2C215.7%20504.2%2C219.0%20506.5%2C222.3%20508.7%2C225.7%20510.9%2C229.1%20513.2%2C232.5%20515.4%2C235.9%20517.6%2C239.4%20519.9%2C243.0%20522.1%2C246.5%20524.3%2C250.2%20526.6%2C253.8%20528.8%2C257.5%20531.1%2C261.2%20533.3%2C264.9%20535.5%2C268.7%20537.8%2C272.5%20540.0%2C276.4%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%2263.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-123",
    case_id: "MATH 11.123",
    title: "Upward-opening derivative: max then min",
    subsection: "11.4",
    context:
      "The graph shows $f'$ for a differentiable function $f$ on $\\mathbb{R}$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ has a local maximum at $x=2$.",
      "The function $f$ has a local minimum at $x=4$.",
      "The function $f$ is increasing on $(2,4)$.",
      "The function $f$ is concave up at $x=4$.",
      "The function $f$ has an inflection point at $x=3$."
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=2$, $f'$ changes from positive to negative, so $f$ has a local maximum.

The statement is True.`,
      `**B.** → True

At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum.

The statement is True.`,
      `**C.** → False

On $(2,4)$ the graph of $f'$ is below the axis, so $f'<0$ and $f$ is decreasing — not increasing.

The statement is False.`,
      `**D.** → True

At $x=4$, the graph of $f'$ is rising (past its trough at $x=3$), so $f''>0$ and $f$ is concave up there.

The statement is True.`,
      `**E.** → True

The trough of $f'$ at $x=3$ means $f'$ changes from decreasing to increasing, so $f''$ changes sign and $f$ has an inflection point at $x=3$.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 123,
    solution_overview:
      "For an upward-opening $f'$, the left zero is a local max of $f$ and the right zero a local min; the trough of $f'$ is an inflection of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22278.3%22%20x2%3D%22540.0%22%20y2%3D%22278.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22235.0%22%20x2%3D%22540.0%22%20y2%3D%22235.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22191.7%22%20x2%3D%22540.0%22%20y2%3D%22191.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22148.3%22%20x2%3D%22540.0%22%20y2%3D%22148.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22105.0%22%20x2%3D%22540.0%22%20y2%3D%22105.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2261.7%22%20x2%3D%22540.0%22%20y2%3D%2261.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22235.0%22%20x2%3D%22540.0%22%20y2%3D%22235.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22278.3%22%20x2%3D%2248.0%22%20y2%3D%22278.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22281.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22235.0%22%20x2%3D%2248.0%22%20y2%3D%22235.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22238.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22191.7%22%20x2%3D%2248.0%22%20y2%3D%22191.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22195.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22148.3%22%20x2%3D%2248.0%22%20y2%3D%22148.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22151.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22105.0%22%20x2%3D%2248.0%22%20y2%3D%22105.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22108.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2261.7%22%20x2%3D%2248.0%22%20y2%3D%2261.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2265.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C61.7%2050.2%2C65.2%2052.5%2C68.7%2054.7%2C72.2%2056.9%2C75.6%2059.2%2C79.0%2061.4%2C82.4%2063.7%2C85.7%2065.9%2C89.0%2068.1%2C92.3%2070.4%2C95.5%2072.6%2C98.7%2074.8%2C101.9%2077.1%2C105.0%2079.3%2C108.1%2081.5%2C111.2%2083.8%2C114.3%2086.0%2C117.3%2088.3%2C120.3%2090.5%2C123.2%2092.7%2C126.1%2095.0%2C129.0%2097.2%2C131.9%2099.4%2C134.7%20101.7%2C137.5%20103.9%2C140.2%20106.1%2C143.0%20108.4%2C145.6%20110.6%2C148.3%20112.9%2C150.9%20115.1%2C153.5%20117.3%2C156.1%20119.6%2C158.6%20121.8%2C161.1%20124.0%2C163.6%20126.3%2C166.0%20128.5%2C168.4%20130.7%2C170.8%20133.0%2C173.1%20135.2%2C175.4%20137.5%2C177.7%20139.7%2C179.9%20141.9%2C182.1%20144.2%2C184.3%20146.4%2C186.5%20148.6%2C188.6%20150.9%2C190.7%20153.1%2C192.7%20155.3%2C194.7%20157.6%2C196.7%20159.8%2C198.7%20162.1%2C200.6%20164.3%2C202.5%20166.5%2C204.3%20168.8%2C206.1%20171.0%2C207.9%20173.2%2C209.7%20175.5%2C211.4%20177.7%2C213.1%20179.9%2C214.7%20182.2%2C216.4%20184.4%2C218.0%20186.7%2C219.5%20188.9%2C221.1%20191.1%2C222.6%20193.4%2C224.0%20195.6%2C225.5%20197.8%2C226.9%20200.1%2C228.2%20202.3%2C229.6%20204.5%2C230.9%20206.8%2C232.2%20209.0%2C233.4%20211.3%2C234.6%20213.5%2C235.8%20215.7%2C236.9%20218.0%2C238.0%20220.2%2C239.1%20222.4%2C240.2%20224.7%2C241.2%20226.9%2C242.2%20229.1%2C243.1%20231.4%2C244.0%20233.6%2C244.9%20235.9%2C245.8%20238.1%2C246.6%20240.3%2C247.4%20242.6%2C248.1%20244.8%2C248.9%20247.0%2C249.6%20249.3%2C250.2%20251.5%2C250.8%20253.7%2C251.4%20256.0%2C252.0%20258.2%2C252.5%20260.5%2C253.0%20262.7%2C253.5%20264.9%2C253.9%20267.2%2C254.3%20269.4%2C254.7%20271.6%2C255.1%20273.9%2C255.4%20276.1%2C255.6%20278.3%2C255.9%20280.6%2C256.1%20282.8%2C256.3%20285.1%2C256.4%20287.3%2C256.5%20289.5%2C256.6%20291.8%2C256.7%20294.0%2C256.7%20296.2%2C256.7%20298.5%2C256.6%20300.7%2C256.5%20302.9%2C256.4%20305.2%2C256.3%20307.4%2C256.1%20309.7%2C255.9%20311.9%2C255.6%20314.1%2C255.4%20316.4%2C255.1%20318.6%2C254.7%20320.8%2C254.3%20323.1%2C253.9%20325.3%2C253.5%20327.5%2C253.0%20329.8%2C252.5%20332.0%2C252.0%20334.3%2C251.4%20336.5%2C250.8%20338.7%2C250.2%20341.0%2C249.6%20343.2%2C248.9%20345.4%2C248.1%20347.7%2C247.4%20349.9%2C246.6%20352.1%2C245.8%20354.4%2C244.9%20356.6%2C244.0%20358.9%2C243.1%20361.1%2C242.2%20363.3%2C241.2%20365.6%2C240.2%20367.8%2C239.1%20370.0%2C238.0%20372.3%2C236.9%20374.5%2C235.8%20376.7%2C234.6%20379.0%2C233.4%20381.2%2C232.2%20383.5%2C230.9%20385.7%2C229.6%20387.9%2C228.2%20390.2%2C226.9%20392.4%2C225.5%20394.6%2C224.0%20396.9%2C222.6%20399.1%2C221.1%20401.3%2C219.5%20403.6%2C218.0%20405.8%2C216.4%20408.1%2C214.7%20410.3%2C213.1%20412.5%2C211.4%20414.8%2C209.7%20417.0%2C207.9%20419.2%2C206.1%20421.5%2C204.3%20423.7%2C202.5%20425.9%2C200.6%20428.2%2C198.7%20430.4%2C196.7%20432.7%2C194.7%20434.9%2C192.7%20437.1%2C190.7%20439.4%2C188.6%20441.6%2C186.5%20443.8%2C184.3%20446.1%2C182.1%20448.3%2C179.9%20450.5%2C177.7%20452.8%2C175.4%20455.0%2C173.1%20457.3%2C170.8%20459.5%2C168.4%20461.7%2C166.0%20464.0%2C163.6%20466.2%2C161.1%20468.4%2C158.6%20470.7%2C156.1%20472.9%2C153.5%20475.1%2C150.9%20477.4%2C148.3%20479.6%2C145.6%20481.9%2C143.0%20484.1%2C140.2%20486.3%2C137.5%20488.6%2C134.7%20490.8%2C131.9%20493.0%2C129.0%20495.3%2C126.1%20497.5%2C123.2%20499.7%2C120.3%20502.0%2C117.3%20504.2%2C114.3%20506.5%2C111.2%20508.7%2C108.1%20510.9%2C105.0%20513.2%2C101.9%20515.4%2C98.7%20517.6%2C95.5%20519.9%2C92.3%20522.1%2C89.0%20524.3%2C85.7%20526.6%2C82.4%20528.8%2C79.0%20531.1%2C75.6%20533.3%2C72.2%20535.5%2C68.7%20537.8%2C65.2%20540.0%2C61.7%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22212.0%22%20cy%3D%22235.0%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22376.0%22%20cy%3D%22235.0%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%22256.7%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-124",
    case_id: "MATH 11.124",
    title: "Sign chart from a second f′ parabola",
    subsection: "11.4",
    context:
      "The graph shows $f'$, not $f$. Decide TRUE or FALSE for each claim about $f$.",
    statements: [
      "The function $f$ is increasing on $(1,4)$.",
      "The function $f$ has a local minimum at $x=1$.",
      "The function $f$ has a local maximum at $x=4$.",
      "The function $f$ is concave down at $x=1$.",
      "The slope of $f$ at $x=0$ is positive."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Between the zeros $x=1$ and $x=4$, $f'$ is above the axis, so $f$ is increasing.

The statement is True.`,
      `**B.** → True

At $x=1$, $f'$ changes from negative to positive → local minimum of $f$.

The statement is True.`,
      `**C.** → True

At $x=4$, $f'$ changes from positive to negative → local maximum of $f$.

The statement is True.`,
      `**D.** → False

Near $x=1$, $f'$ is still rising toward its peak (near $x=2.5$), so $f''>0$ and $f$ is concave up at $x=1$, not concave down.

The statement is False.`,
      `**E.** → False

At $x=0$ the graph is below the axis ($f'(0)=-4$), so the slope of $f$ is negative.

The statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 124,
    solution_overview:
      "Positive $f'$ on $(1,4)$ means increasing; sign changes give min at $1$ and max at $4$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%2240.0%22%20x2%3D%22146.4%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%2240.0%22%20x2%3D%22244.8%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%2240.0%22%20x2%3D%22343.2%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%2240.0%22%20x2%3D%22441.6%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22267.5%22%20x2%3D%22540.0%22%20y2%3D%22267.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22202.5%22%20x2%3D%22540.0%22%20y2%3D%22202.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22137.5%22%20x2%3D%22540.0%22%20y2%3D%22137.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2272.5%22%20x2%3D%22540.0%22%20y2%3D%2272.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22137.5%22%20x2%3D%22540.0%22%20y2%3D%22137.5%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%22300.0%22%20x2%3D%22146.4%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.4%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%22300.0%22%20x2%3D%22244.8%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22244.8%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%22300.0%22%20x2%3D%22343.2%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22343.2%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%22300.0%22%20x2%3D%22441.6%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.6%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22267.5%22%20x2%3D%2248.0%22%20y2%3D%22267.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22271.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22202.5%22%20x2%3D%2248.0%22%20y2%3D%22202.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22206.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22137.5%22%20x2%3D%2248.0%22%20y2%3D%22137.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22141.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2272.5%22%20x2%3D%2248.0%22%20y2%3D%2272.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2276.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C267.5%2050.2%2C263.8%2052.5%2C260.2%2054.7%2C256.6%2056.9%2C253.0%2059.2%2C249.5%2061.4%2C245.9%2063.7%2C242.5%2065.9%2C239.0%2068.1%2C235.6%2070.4%2C232.2%2072.6%2C228.9%2074.8%2C225.6%2077.1%2C222.3%2079.3%2C219.1%2081.5%2C215.9%2083.8%2C212.7%2086.0%2C209.6%2088.3%2C206.5%2090.5%2C203.4%2092.7%2C200.4%2095.0%2C197.3%2097.2%2C194.4%2099.4%2C191.4%20101.7%2C188.5%20103.9%2C185.7%20106.1%2C182.8%20108.4%2C180.0%20110.6%2C177.3%20112.9%2C174.5%20115.1%2C171.8%20117.3%2C169.1%20119.6%2C166.5%20121.8%2C163.9%20124.0%2C161.3%20126.3%2C158.8%20128.5%2C156.3%20130.7%2C153.8%20133.0%2C151.4%20135.2%2C149.0%20137.5%2C146.6%20139.7%2C144.3%20141.9%2C142.0%20144.2%2C139.7%20146.4%2C137.5%20148.6%2C135.3%20150.9%2C133.1%20153.1%2C131.0%20155.3%2C128.9%20157.6%2C126.8%20159.8%2C124.8%20162.1%2C122.8%20164.3%2C120.8%20166.5%2C118.9%20168.8%2C117.0%20171.0%2C115.2%20173.2%2C113.3%20175.5%2C111.5%20177.7%2C109.8%20179.9%2C108.0%20182.2%2C106.3%20184.4%2C104.7%20186.7%2C103.1%20188.9%2C101.5%20191.1%2C99.9%20193.4%2C98.4%20195.6%2C96.9%20197.8%2C95.4%20200.1%2C94.0%20202.3%2C92.6%20204.5%2C91.2%20206.8%2C89.9%20209.0%2C88.6%20211.3%2C87.4%20213.5%2C86.1%20215.7%2C84.9%20218.0%2C83.8%20220.2%2C82.7%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.5%20231.4%2C77.5%20233.6%2C76.6%20235.9%2C75.7%20238.1%2C74.9%20240.3%2C74.0%20242.6%2C73.3%20244.8%2C72.5%20247.0%2C71.8%20249.3%2C71.1%20251.5%2C70.4%20253.7%2C69.8%20256.0%2C69.2%20258.2%2C68.7%20260.5%2C68.2%20262.7%2C67.7%20264.9%2C67.2%20267.2%2C66.8%20269.4%2C66.4%20271.6%2C66.1%20273.9%2C65.7%20276.1%2C65.4%20278.3%2C65.2%20280.6%2C65.0%20282.8%2C64.8%20285.1%2C64.6%20287.3%2C64.5%20289.5%2C64.4%20291.8%2C64.4%20294.0%2C64.4%20296.2%2C64.4%20298.5%2C64.4%20300.7%2C64.5%20302.9%2C64.6%20305.2%2C64.8%20307.4%2C65.0%20309.7%2C65.2%20311.9%2C65.4%20314.1%2C65.7%20316.4%2C66.1%20318.6%2C66.4%20320.8%2C66.8%20323.1%2C67.2%20325.3%2C67.7%20327.5%2C68.2%20329.8%2C68.7%20332.0%2C69.2%20334.3%2C69.8%20336.5%2C70.4%20338.7%2C71.1%20341.0%2C71.8%20343.2%2C72.5%20345.4%2C73.3%20347.7%2C74.0%20349.9%2C74.9%20352.1%2C75.7%20354.4%2C76.6%20356.6%2C77.5%20358.9%2C78.5%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.7%20370.0%2C83.8%20372.3%2C84.9%20374.5%2C86.1%20376.7%2C87.4%20379.0%2C88.6%20381.2%2C89.9%20383.5%2C91.2%20385.7%2C92.6%20387.9%2C94.0%20390.2%2C95.4%20392.4%2C96.9%20394.6%2C98.4%20396.9%2C99.9%20399.1%2C101.5%20401.3%2C103.1%20403.6%2C104.7%20405.8%2C106.3%20408.1%2C108.0%20410.3%2C109.8%20412.5%2C111.5%20414.8%2C113.3%20417.0%2C115.2%20419.2%2C117.0%20421.5%2C118.9%20423.7%2C120.8%20425.9%2C122.8%20428.2%2C124.8%20430.4%2C126.8%20432.7%2C128.9%20434.9%2C131.0%20437.1%2C133.1%20439.4%2C135.3%20441.6%2C137.5%20443.8%2C139.7%20446.1%2C142.0%20448.3%2C144.3%20450.5%2C146.6%20452.8%2C149.0%20455.0%2C151.4%20457.3%2C153.8%20459.5%2C156.3%20461.7%2C158.8%20464.0%2C161.3%20466.2%2C163.9%20468.4%2C166.5%20470.7%2C169.1%20472.9%2C171.8%20475.1%2C174.5%20477.4%2C177.3%20479.6%2C180.0%20481.9%2C182.8%20484.1%2C185.7%20486.3%2C188.5%20488.6%2C191.4%20490.8%2C194.4%20493.0%2C197.3%20495.3%2C200.4%20497.5%2C203.4%20499.7%2C206.5%20502.0%2C209.6%20504.2%2C212.7%20506.5%2C215.9%20508.7%2C219.1%20510.9%2C222.3%20513.2%2C225.6%20515.4%2C228.9%20517.6%2C232.2%20519.9%2C235.6%20522.1%2C239.0%20524.3%2C242.5%20526.6%2C245.9%20528.8%2C249.5%20531.1%2C253.0%20533.3%2C256.6%20535.5%2C260.2%20537.8%2C263.8%20540.0%2C267.5%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22146.4%22%20cy%3D%22137.5%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22441.6%22%20cy%3D%22137.5%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-125",
    case_id: "MATH 11.125",
    title: "Reading extrema from a graph of f",
    subsection: "11.4",
    context:
      "The graph below shows the function $f$ itself (not a derivative). Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ has a local maximum near $x=1$.",
      "The function $f$ has a local minimum near $x=3$.",
      "The function $f$ is decreasing on the interval between its local max and local min.",
      "The function $f$ is increasing for all $x>3$ shown in the window.",
      "Because the graph of $f$ crosses the $x$-axis near $x=3$, one must have $f'(3)=0$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The plotted curve peaks near $x=1$: values nearby on both sides are lower. That is a local maximum of $f$.

The statement is True.`,
      `**B.** → True

The plotted curve bottoms near $x=3$: values nearby on both sides are higher. That is a local minimum of $f$.

The statement is True.`,
      `**C.** → True

Between the peak near $x=1$ and the trough near $x=3$, the graph is falling, so $f$ is decreasing on that interval.

The statement is True.`,
      `**D.** → True

After the trough near $x=3$, the graph rises through the rest of the window, so $f$ is increasing there.

The statement is True.`,
      `**E.** → False

Crossing the $x$-axis means $f(3)=0$ (a root), not $f'(3)=0$. A horizontal tangent is about the slope being zero, which is a different geometric feature from intersecting the axis.

The statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 125,
    solution_overview:
      "Peaks and troughs of the graph of $f$ are local extrema; axis crossings are roots, not automatically critical points.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20function%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3584044%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%2240.0%22%20x2%3D%22146.4%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%2240.0%22%20x2%3D%22244.8%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%2240.0%22%20x2%3D%22343.2%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%2240.0%22%20x2%3D%22441.6%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22213.3%22%20x2%3D%22540.0%22%20y2%3D%22213.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22126.7%22%20x2%3D%22540.0%22%20y2%3D%22126.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%2240.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22213.3%22%20x2%3D%22540.0%22%20y2%3D%22213.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%22300.0%22%20x2%3D%22146.4%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.4%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%22300.0%22%20x2%3D%22244.8%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22244.8%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%22300.0%22%20x2%3D%22343.2%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22343.2%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%22300.0%22%20x2%3D%22441.6%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.6%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22213.3%22%20x2%3D%2248.0%22%20y2%3D%22213.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22216.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22126.7%22%20x2%3D%2248.0%22%20y2%3D%22126.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22130.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%2240.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2243.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C213.3%2050.2%2C210.4%2052.5%2C207.6%2054.7%2C204.9%2056.9%2C202.2%2059.2%2C199.7%2061.4%2C197.2%2063.7%2C194.8%2065.9%2C192.5%2068.1%2C190.2%2070.4%2C188.1%2072.6%2C186.0%2074.8%2C184.0%2077.1%2C182.1%2079.3%2C180.3%2081.5%2C178.5%2083.8%2C176.8%2086.0%2C175.2%2088.3%2C173.7%2090.5%2C172.2%2092.7%2C170.8%2095.0%2C169.5%2097.2%2C168.2%2099.4%2C167.0%20101.7%2C165.9%20103.9%2C164.8%20106.1%2C163.8%20108.4%2C162.9%20110.6%2C162.0%20112.9%2C161.2%20115.1%2C160.4%20117.3%2C159.7%20119.6%2C159.1%20121.8%2C158.5%20124.0%2C158.0%20126.3%2C157.5%20128.5%2C157.1%20130.7%2C156.7%20133.0%2C156.4%20135.2%2C156.1%20137.5%2C155.9%20139.7%2C155.8%20141.9%2C155.6%20144.2%2C155.6%20146.4%2C155.6%20148.6%2C155.6%20150.9%2C155.6%20153.1%2C155.8%20155.3%2C155.9%20157.6%2C156.1%20159.8%2C156.3%20162.1%2C156.6%20164.3%2C156.9%20166.5%2C157.2%20168.8%2C157.6%20171.0%2C158.0%20173.2%2C158.5%20175.5%2C159.0%20177.7%2C159.5%20179.9%2C160.0%20182.2%2C160.6%20184.4%2C161.2%20186.7%2C161.8%20188.9%2C162.5%20191.1%2C163.2%20193.4%2C163.9%20195.6%2C164.6%20197.8%2C165.3%20200.1%2C166.1%20202.3%2C166.9%20204.5%2C167.7%20206.8%2C168.5%20209.0%2C169.4%20211.3%2C170.2%20213.5%2C171.1%20215.7%2C172.0%20218.0%2C172.9%20220.2%2C173.8%20222.4%2C174.8%20224.7%2C175.7%20226.9%2C176.7%20229.1%2C177.6%20231.4%2C178.6%20233.6%2C179.5%20235.9%2C180.5%20238.1%2C181.5%20240.3%2C182.5%20242.6%2C183.5%20244.8%2C184.4%20247.0%2C185.4%20249.3%2C186.4%20251.5%2C187.4%20253.7%2C188.4%20256.0%2C189.3%20258.2%2C190.3%20260.5%2C191.3%20262.7%2C192.2%20264.9%2C193.2%20267.2%2C194.1%20269.4%2C195.1%20271.6%2C196.0%20273.9%2C196.9%20276.1%2C197.8%20278.3%2C198.6%20280.6%2C199.5%20282.8%2C200.4%20285.1%2C201.2%20287.3%2C202.0%20289.5%2C202.8%20291.8%2C203.6%20294.0%2C204.3%20296.2%2C205.0%20298.5%2C205.7%20300.7%2C206.4%20302.9%2C207.1%20305.2%2C207.7%20307.4%2C208.3%20309.7%2C208.9%20311.9%2C209.4%20314.1%2C209.9%20316.4%2C210.4%20318.6%2C210.9%20320.8%2C211.3%20323.1%2C211.6%20325.3%2C212.0%20327.5%2C212.3%20329.8%2C212.6%20332.0%2C212.8%20334.3%2C213.0%20336.5%2C213.1%20338.7%2C213.2%20341.0%2C213.3%20343.2%2C213.3%20345.4%2C213.3%20347.7%2C213.2%20349.9%2C213.1%20352.1%2C213.0%20354.4%2C212.8%20356.6%2C212.5%20358.9%2C212.2%20361.1%2C211.8%20363.3%2C211.4%20365.6%2C210.9%20367.8%2C210.4%20370.0%2C209.8%20372.3%2C209.2%20374.5%2C208.5%20376.7%2C207.7%20379.0%2C206.9%20381.2%2C206.0%20383.5%2C205.1%20385.7%2C204.1%20387.9%2C203.0%20390.2%2C201.9%20392.4%2C200.7%20394.6%2C199.4%20396.9%2C198.1%20399.1%2C196.7%20401.3%2C195.2%20403.6%2C193.7%20405.8%2C192.1%20408.1%2C190.4%20410.3%2C188.6%20412.5%2C186.8%20414.8%2C184.9%20417.0%2C182.9%20419.2%2C180.8%20421.5%2C178.6%20423.7%2C176.4%20425.9%2C174.1%20428.2%2C171.7%20430.4%2C169.2%20432.7%2C166.7%20434.9%2C164.0%20437.1%2C161.3%20439.4%2C158.5%20441.6%2C155.6%20443.8%2C152.6%20446.1%2C149.5%20448.3%2C146.3%20450.5%2C143.0%20452.8%2C139.6%20455.0%2C136.2%20457.3%2C132.6%20459.5%2C129.0%20461.7%2C125.2%20464.0%2C121.4%20466.2%2C117.4%20468.4%2C113.4%20470.7%2C109.2%20472.9%2C105.0%20475.1%2C100.6%20477.4%2C96.1%20479.6%2C91.6%20481.9%2C86.9%20484.1%2C82.1%20486.3%2C77.2%20488.6%2C72.2%20490.8%2C67.1%20493.0%2C61.9%20495.3%2C56.5%20497.5%2C51.1%20499.7%2C45.5%20502.0%2C39.8%20504.2%2C34.0%20506.5%2C28.1%20508.7%2C22.1%20510.9%2C15.9%20513.2%2C9.6%20515.4%2C3.2%20517.6%2C-3.3%20519.9%2C-10.0%20522.1%2C-16.7%20524.3%2C-23.6%20526.6%2C-30.7%20528.8%2C-37.8%20531.1%2C-45.1%20533.3%2C-52.5%20535.5%2C-60.1%20537.8%2C-67.7%20540.0%2C-75.6%22%20clip-path%3D%22url%28%23clip-3584044%29%22%2F%3E%0A%3Ccircle%20cx%3D%22146.4%22%20cy%3D%22155.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22343.2%22%20cy%3D%22213.3%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-126",
    case_id: "MATH 11.126",
    title: "Increasing and decreasing from a graph of f",
    subsection: "11.4",
    context:
      "The figure shows $f$ (not a derivative). Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ has a local peak near $x=2$.",
      "The function $f$ has a local trough near $x=4$.",
      "On $(2,4)$ the function $f$ is decreasing.",
      "For $x>4$ in the window, $f$ is increasing.",
      "The steepest negative slope of $f$ in the window occurs near the midpoint $x=3$ between the peak and the trough."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The curve reaches a clear local high near $x=2$.

The statement is True.`,
      `**B.** → True

The curve reaches a clear local low near $x=4$.

The statement is True.`,
      `**C.** → True

Between those turning points the graph falls, so $f$ is decreasing on $(2,4)$.

The statement is True.`,
      `**D.** → True

After the trough the graph rises again, so $f$ is increasing for $x>4$ in view.

The statement is True.`,
      `**E.** → True

Between a peak and a trough the slope of $f$ is negative; it is most negative where the graph is steepest downward — visually near the middle $x=3$. (That matches where $f'$ has its most negative value.)

The statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 126,
    solution_overview:
      "Read peaks, troughs, and rising/falling stretches directly from the graph of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20function%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3584044%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22262.9%22%20x2%3D%22540.0%22%20y2%3D%22262.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22188.6%22%20x2%3D%22540.0%22%20y2%3D%22188.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22114.3%22%20x2%3D%22540.0%22%20y2%3D%22114.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%2240.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22262.9%22%20x2%3D%22540.0%22%20y2%3D%22262.9%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22262.9%22%20x2%3D%2248.0%22%20y2%3D%22262.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22266.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22188.6%22%20x2%3D%2248.0%22%20y2%3D%22188.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22192.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22114.3%22%20x2%3D%2248.0%22%20y2%3D%22114.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22117.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%2240.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2243.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E12%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C262.9%2050.2%2C258.8%2052.5%2C254.9%2054.7%2C251.1%2056.9%2C247.3%2059.2%2C243.6%2061.4%2C240.0%2063.7%2C236.5%2065.9%2C233.0%2068.1%2C229.7%2070.4%2C226.4%2072.6%2C223.1%2074.8%2C220.0%2077.1%2C216.9%2079.3%2C213.9%2081.5%2C211.0%2083.8%2C208.1%2086.0%2C205.3%2088.3%2C202.6%2090.5%2C200.0%2092.7%2C197.4%2095.0%2C194.9%2097.2%2C192.4%2099.4%2C190.1%20101.7%2C187.7%20103.9%2C185.5%20106.1%2C183.3%20108.4%2C181.2%20110.6%2C179.1%20112.9%2C177.1%20115.1%2C175.2%20117.3%2C173.3%20119.6%2C171.5%20121.8%2C169.8%20124.0%2C168.1%20126.3%2C166.4%20128.5%2C164.8%20130.7%2C163.3%20133.0%2C161.8%20135.2%2C160.4%20137.5%2C159.0%20139.7%2C157.7%20141.9%2C156.5%20144.2%2C155.3%20146.4%2C154.1%20148.6%2C153.0%20150.9%2C151.9%20153.1%2C150.9%20155.3%2C150.0%20157.6%2C149.0%20159.8%2C148.2%20162.1%2C147.3%20164.3%2C146.6%20166.5%2C145.8%20168.8%2C145.1%20171.0%2C144.5%20173.2%2C143.9%20175.5%2C143.3%20177.7%2C142.7%20179.9%2C142.3%20182.2%2C141.8%20184.4%2C141.4%20186.7%2C141.0%20188.9%2C140.7%20191.1%2C140.4%20193.4%2C140.1%20195.6%2C139.8%20197.8%2C139.6%20200.1%2C139.5%20202.3%2C139.3%20204.5%2C139.2%20206.8%2C139.1%20209.0%2C139.1%20211.3%2C139.0%20213.5%2C139.1%20215.7%2C139.1%20218.0%2C139.1%20220.2%2C139.2%20222.4%2C139.3%20224.7%2C139.5%20226.9%2C139.6%20229.1%2C139.8%20231.4%2C140.0%20233.6%2C140.2%20235.9%2C140.5%20238.1%2C140.7%20240.3%2C141.0%20242.6%2C141.3%20244.8%2C141.6%20247.0%2C142.0%20249.3%2C142.3%20251.5%2C142.7%20253.7%2C143.0%20256.0%2C143.4%20258.2%2C143.8%20260.5%2C144.3%20262.7%2C144.7%20264.9%2C145.1%20267.2%2C145.6%20269.4%2C146.0%20271.6%2C146.5%20273.9%2C147.0%20276.1%2C147.4%20278.3%2C147.9%20280.6%2C148.4%20282.8%2C148.9%20285.1%2C149.4%20287.3%2C149.9%20289.5%2C150.4%20291.8%2C150.9%20294.0%2C151.4%20296.2%2C151.9%20298.5%2C152.4%20300.7%2C152.9%20302.9%2C153.4%20305.2%2C153.9%20307.4%2C154.4%20309.7%2C154.9%20311.9%2C155.4%20314.1%2C155.9%20316.4%2C156.4%20318.6%2C156.8%20320.8%2C157.3%20323.1%2C157.7%20325.3%2C158.2%20327.5%2C158.6%20329.8%2C159.0%20332.0%2C159.4%20334.3%2C159.8%20336.5%2C160.2%20338.7%2C160.6%20341.0%2C160.9%20343.2%2C161.2%20345.4%2C161.6%20347.7%2C161.8%20349.9%2C162.1%20352.1%2C162.4%20354.4%2C162.6%20356.6%2C162.9%20358.9%2C163.1%20361.1%2C163.2%20363.3%2C163.4%20365.6%2C163.5%20367.8%2C163.6%20370.0%2C163.7%20372.3%2C163.8%20374.5%2C163.8%20376.7%2C163.8%20379.0%2C163.8%20381.2%2C163.7%20383.5%2C163.7%20385.7%2C163.5%20387.9%2C163.4%20390.2%2C163.2%20392.4%2C163.0%20394.6%2C162.8%20396.9%2C162.5%20399.1%2C162.2%20401.3%2C161.9%20403.6%2C161.5%20405.8%2C161.1%20408.1%2C160.6%20410.3%2C160.1%20412.5%2C159.6%20414.8%2C159.0%20417.0%2C158.4%20419.2%2C157.7%20421.5%2C157.0%20423.7%2C156.3%20425.9%2C155.5%20428.2%2C154.7%20430.4%2C153.8%20432.7%2C152.9%20434.9%2C151.9%20437.1%2C150.9%20439.4%2C149.9%20441.6%2C148.8%20443.8%2C147.6%20446.1%2C146.4%20448.3%2C145.1%20450.5%2C143.8%20452.8%2C142.4%20455.0%2C141.0%20457.3%2C139.6%20459.5%2C138.0%20461.7%2C136.4%20464.0%2C134.8%20466.2%2C133.1%20468.4%2C131.3%20470.7%2C129.5%20472.9%2C127.7%20475.1%2C125.7%20477.4%2C123.7%20479.6%2C121.7%20481.9%2C119.5%20484.1%2C117.4%20486.3%2C115.1%20488.6%2C112.8%20490.8%2C110.4%20493.0%2C108.0%20495.3%2C105.5%20497.5%2C102.9%20499.7%2C100.2%20502.0%2C97.5%20504.2%2C94.7%20506.5%2C91.9%20508.7%2C88.9%20510.9%2C85.9%20513.2%2C82.9%20515.4%2C79.7%20517.6%2C76.5%20519.9%2C73.2%20522.1%2C69.8%20524.3%2C66.4%20526.6%2C62.8%20528.8%2C59.2%20531.1%2C55.6%20533.3%2C51.8%20535.5%2C47.9%20537.8%2C44.0%20540.0%2C40.0%22%20clip-path%3D%22url%28%23clip-3584044%29%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-127",
    case_id: "MATH 11.127",
    title: "Match three unlabeled graphs: f, f′, and f″",
    subsection: "11.4",
    context:
      "The three graphs A, B, and C show a twice-differentiable function $f$ together with its first derivative $f'$ and its second derivative $f''$, but the labels have been removed. Decide TRUE or FALSE for each claim.",
    statements: [
      "Graph A is the graph of $f'$.",
      "Graph B is the graph of $f''$.",
      "Graph C is the graph of $f$.",
      "Graph A is the graph of $f$.",
      "Wherever Graph A is above the horizontal axis, Graph C is increasing."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Graph A is a downward-opening parabola with two zeros — the typical shape of a quadratic $f'$. Graph B is a straight line (degree drops by one under differentiation), and Graph C is the more curved cubic-looking original $f$.

The statement is True.`,
      `**B.** → True

Graph B is linear. The second derivative of a cubic $f$ is linear, so Graph B is $f''$. It also crosses zero where Graph A (namely $f'$) has its peak.

The statement is True.`,
      `**C.** → True

Graph C has the richest turning behaviour (a cubic shape). It is $f$: it falls, then rises, then falls again — matching the sign pattern of Graph A as $f'$.

The statement is True.`,
      `**D.** → False

Graph A is quadratic-looking with two axis crossings; that is $f'$, not $f$. The original $f$ is Graph C.

The statement is False.`,
      `**E.** → True

If Graph A is $f'$ and Graph C is $f$, then $f'>0$ precisely where Graph A is above the axis, and there $f$ (Graph C) must be increasing. That matches the picture.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 127,
    solution_overview:
      "Degree drops under differentiation: cubic $f$, quadratic $f'$, linear $f''$. Zeros of $f'$ are turning points of $f$; zeros of $f''$ are extrema of $f'$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%2236.0%22%20x2%3D%22131.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%2236.0%22%20x2%3D%22210.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22240.5%22%20x2%3D%22289.3%22%20y2%3D%22240.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22149.6%22%20x2%3D%22289.3%22%20y2%3D%22149.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2258.7%22%20x2%3D%22289.3%22%20y2%3D%2258.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22149.6%22%20x2%3D%22289.3%22%20y2%3D%22149.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%22286.0%22%20x2%3D%22131.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22131.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%22286.0%22%20x2%3D%22210.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22210.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22240.5%22%20x2%3D%2252.0%22%20y2%3D%22240.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22244.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22149.6%22%20x2%3D%2252.0%22%20y2%3D%22149.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22153.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2258.7%22%20x2%3D%2252.0%22%20y2%3D%2258.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%2262.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C263.3%2053.1%2C259.6%2054.2%2C255.9%2055.2%2C252.3%2056.3%2C248.7%2057.4%2C245.1%2058.5%2C241.6%2059.6%2C238.1%2060.6%2C234.6%2061.7%2C231.2%2062.8%2C227.8%2063.9%2C224.4%2064.9%2C221.1%2066.0%2C217.8%2067.1%2C214.5%2068.2%2C211.3%2069.3%2C208.1%2070.3%2C204.9%2071.4%2C201.8%2072.5%2C198.7%2073.6%2C195.7%2074.7%2C192.6%2075.7%2C189.6%2076.8%2C186.7%2077.9%2C183.8%2079.0%2C180.9%2080.0%2C178.0%2081.1%2C175.2%2082.2%2C172.4%2083.3%2C169.6%2084.4%2C166.9%2085.4%2C164.2%2086.5%2C161.6%2087.6%2C159.0%2088.7%2C156.4%2089.8%2C153.8%2090.8%2C151.3%2091.9%2C148.8%2093.0%2C146.4%2094.1%2C143.9%2095.2%2C141.6%2096.2%2C139.2%2097.3%2C136.9%2098.4%2C134.6%2099.5%2C132.4%20100.5%2C130.1%20101.6%2C128.0%20102.7%2C125.8%20103.8%2C123.7%20104.9%2C121.6%20105.9%2C119.6%20107.0%2C117.6%20108.1%2C115.6%20109.2%2C113.7%20110.3%2C111.7%20111.3%2C109.9%20112.4%2C108.0%20113.5%2C106.2%20114.6%2C104.4%20115.6%2C102.7%20116.7%2C101.0%20117.8%2C99.3%20118.9%2C97.7%20120.0%2C96.1%20121.0%2C94.5%20122.1%2C93.0%20123.2%2C91.5%20124.3%2C90.0%20125.4%2C88.5%20126.4%2C87.1%20127.5%2C85.8%20128.6%2C84.4%20129.7%2C83.1%20130.8%2C81.9%20131.8%2C80.6%20132.9%2C79.4%20134.0%2C78.3%20135.1%2C77.1%20136.1%2C76.0%20137.2%2C75.0%20138.3%2C73.9%20139.4%2C72.9%20140.5%2C72.0%20141.5%2C71.1%20142.6%2C70.2%20143.7%2C69.3%20144.8%2C68.5%20145.9%2C67.7%20146.9%2C66.9%20148.0%2C66.2%20149.1%2C65.5%20150.2%2C64.8%20151.2%2C64.2%20152.3%2C63.6%20153.4%2C63.1%20154.5%2C62.5%20155.6%2C62.0%20156.6%2C61.6%20157.7%2C61.2%20158.8%2C60.8%20159.9%2C60.4%20161.0%2C60.1%20162.0%2C59.8%20163.1%2C59.6%20164.2%2C59.3%20165.3%2C59.1%20166.4%2C59.0%20167.4%2C58.9%20168.5%2C58.8%20169.6%2C58.7%20170.7%2C58.7%20171.7%2C58.7%20172.8%2C58.8%20173.9%2C58.9%20175.0%2C59.0%20176.1%2C59.1%20177.1%2C59.3%20178.2%2C59.6%20179.3%2C59.8%20180.4%2C60.1%20181.5%2C60.4%20182.5%2C60.8%20183.6%2C61.2%20184.7%2C61.6%20185.8%2C62.0%20186.8%2C62.5%20187.9%2C63.1%20189.0%2C63.6%20190.1%2C64.2%20191.2%2C64.8%20192.2%2C65.5%20193.3%2C66.2%20194.4%2C66.9%20195.5%2C67.7%20196.6%2C68.5%20197.6%2C69.3%20198.7%2C70.2%20199.8%2C71.1%20200.9%2C72.0%20202.0%2C72.9%20203.0%2C73.9%20204.1%2C75.0%20205.2%2C76.0%20206.3%2C77.1%20207.3%2C78.3%20208.4%2C79.4%20209.5%2C80.6%20210.6%2C81.9%20211.7%2C83.1%20212.7%2C84.4%20213.8%2C85.8%20214.9%2C87.1%20216.0%2C88.5%20217.1%2C90.0%20218.1%2C91.5%20219.2%2C93.0%20220.3%2C94.5%20221.4%2C96.1%20222.4%2C97.7%20223.5%2C99.3%20224.6%2C101.0%20225.7%2C102.7%20226.8%2C104.4%20227.8%2C106.2%20228.9%2C108.0%20230.0%2C109.9%20231.1%2C111.7%20232.2%2C113.7%20233.2%2C115.6%20234.3%2C117.6%20235.4%2C119.6%20236.5%2C121.6%20237.6%2C123.7%20238.6%2C125.8%20239.7%2C128.0%20240.8%2C130.1%20241.9%2C132.4%20242.9%2C134.6%20244.0%2C136.9%20245.1%2C139.2%20246.2%2C141.6%20247.3%2C143.9%20248.3%2C146.4%20249.4%2C148.8%20250.5%2C151.3%20251.6%2C153.8%20252.7%2C156.4%20253.7%2C159.0%20254.8%2C161.6%20255.9%2C164.2%20257.0%2C166.9%20258.0%2C169.6%20259.1%2C172.4%20260.2%2C175.2%20261.3%2C178.0%20262.4%2C180.9%20263.4%2C183.8%20264.5%2C186.7%20265.6%2C189.6%20266.7%2C192.6%20267.8%2C195.7%20268.8%2C198.7%20269.9%2C201.8%20271.0%2C204.9%20272.1%2C208.1%20273.2%2C211.3%20274.2%2C214.5%20275.3%2C217.8%20276.4%2C221.1%20277.5%2C224.4%20278.5%2C227.8%20279.6%2C231.2%20280.7%2C234.6%20281.8%2C238.1%20282.9%2C241.6%20283.9%2C245.1%20285.0%2C248.7%20286.1%2C252.3%20287.2%2C255.9%20288.3%2C259.6%20289.3%2C263.3%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%2236.0%22%20x2%3D%22426.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%2236.0%22%20x2%3D%22505.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22244.3%22%20x2%3D%22584.7%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2277.7%22%20x2%3D%22584.7%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%22286.0%22%20x2%3D%22426.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22426.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%22286.0%22%20x2%3D%22505.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22505.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22244.3%22%20x2%3D%22347.3%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22161.0%22%20x2%3D%22347.3%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2277.7%22%20x2%3D%22347.3%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C36.0%20348.4%2C37.1%20349.5%2C38.3%20350.6%2C39.4%20351.6%2C40.5%20352.7%2C41.7%20353.8%2C42.8%20354.9%2C44.0%20356.0%2C45.1%20357.0%2C46.2%20358.1%2C47.4%20359.2%2C48.5%20360.3%2C49.6%20361.4%2C50.8%20362.4%2C51.9%20363.5%2C53.0%20364.6%2C54.2%20365.7%2C55.3%20366.8%2C56.5%20367.8%2C57.6%20368.9%2C58.7%20370.0%2C59.9%20371.1%2C61.0%20372.1%2C62.1%20373.2%2C63.3%20374.3%2C64.4%20375.4%2C65.5%20376.5%2C66.7%20377.5%2C67.8%20378.6%2C69.0%20379.7%2C70.1%20380.8%2C71.2%20381.9%2C72.4%20382.9%2C73.5%20384.0%2C74.6%20385.1%2C75.8%20386.2%2C76.9%20387.2%2C78.0%20388.3%2C79.2%20389.4%2C80.3%20390.5%2C81.5%20391.6%2C82.6%20392.6%2C83.7%20393.7%2C84.9%20394.8%2C86.0%20395.9%2C87.1%20397.0%2C88.3%20398.0%2C89.4%20399.1%2C90.5%20400.2%2C91.7%20401.3%2C92.8%20402.4%2C94.0%20403.4%2C95.1%20404.5%2C96.2%20405.6%2C97.4%20406.7%2C98.5%20407.7%2C99.6%20408.8%2C100.8%20409.9%2C101.9%20411.0%2C103.0%20412.1%2C104.2%20413.1%2C105.3%20414.2%2C106.5%20415.3%2C107.6%20416.4%2C108.7%20417.5%2C109.9%20418.5%2C111.0%20419.6%2C112.1%20420.7%2C113.3%20421.8%2C114.4%20422.8%2C115.5%20423.9%2C116.7%20425.0%2C117.8%20426.1%2C119.0%20427.2%2C120.1%20428.2%2C121.2%20429.3%2C122.4%20430.4%2C123.5%20431.5%2C124.6%20432.6%2C125.8%20433.6%2C126.9%20434.7%2C128.0%20435.8%2C129.2%20436.9%2C130.3%20438.0%2C131.5%20439.0%2C132.6%20440.1%2C133.7%20441.2%2C134.9%20442.3%2C136.0%20443.3%2C137.1%20444.4%2C138.3%20445.5%2C139.4%20446.6%2C140.5%20447.7%2C141.7%20448.7%2C142.8%20449.8%2C144.0%20450.9%2C145.1%20452.0%2C146.2%20453.1%2C147.4%20454.1%2C148.5%20455.2%2C149.6%20456.3%2C150.8%20457.4%2C151.9%20458.4%2C153.0%20459.5%2C154.2%20460.6%2C155.3%20461.7%2C156.5%20462.8%2C157.6%20463.8%2C158.7%20464.9%2C159.9%20466.0%2C161.0%20467.1%2C162.1%20468.2%2C163.3%20469.2%2C164.4%20470.3%2C165.5%20471.4%2C166.7%20472.5%2C167.8%20473.6%2C169.0%20474.6%2C170.1%20475.7%2C171.2%20476.8%2C172.4%20477.9%2C173.5%20478.9%2C174.6%20480.0%2C175.8%20481.1%2C176.9%20482.2%2C178.0%20483.3%2C179.2%20484.3%2C180.3%20485.4%2C181.5%20486.5%2C182.6%20487.6%2C183.7%20488.7%2C184.9%20489.7%2C186.0%20490.8%2C187.1%20491.9%2C188.3%20493.0%2C189.4%20494.0%2C190.5%20495.1%2C191.7%20496.2%2C192.8%20497.3%2C194.0%20498.4%2C195.1%20499.4%2C196.2%20500.5%2C197.4%20501.6%2C198.5%20502.7%2C199.6%20503.8%2C200.8%20504.8%2C201.9%20505.9%2C203.0%20507.0%2C204.2%20508.1%2C205.3%20509.2%2C206.5%20510.2%2C207.6%20511.3%2C208.7%20512.4%2C209.9%20513.5%2C211.0%20514.5%2C212.1%20515.6%2C213.3%20516.7%2C214.4%20517.8%2C215.5%20518.9%2C216.7%20519.9%2C217.8%20521.0%2C219.0%20522.1%2C220.1%20523.2%2C221.2%20524.3%2C222.4%20525.3%2C223.5%20526.4%2C224.6%20527.5%2C225.8%20528.6%2C226.9%20529.6%2C228.0%20530.7%2C229.2%20531.8%2C230.3%20532.9%2C231.5%20534.0%2C232.6%20535.0%2C233.7%20536.1%2C234.9%20537.2%2C236.0%20538.3%2C237.1%20539.4%2C238.3%20540.4%2C239.4%20541.5%2C240.5%20542.6%2C241.7%20543.7%2C242.8%20544.8%2C244.0%20545.8%2C245.1%20546.9%2C246.2%20548.0%2C247.4%20549.1%2C248.5%20550.1%2C249.6%20551.2%2C250.8%20552.3%2C251.9%20553.4%2C253.0%20554.5%2C254.2%20555.5%2C255.3%20556.6%2C256.5%20557.7%2C257.6%20558.8%2C258.7%20559.9%2C259.9%20560.9%2C261.0%20562.0%2C262.1%20563.1%2C263.3%20564.2%2C264.4%20565.2%2C265.5%20566.3%2C266.7%20567.4%2C267.8%20568.5%2C269.0%20569.6%2C270.1%20570.6%2C271.2%20571.7%2C272.4%20572.8%2C273.5%20573.9%2C274.6%20575.0%2C275.8%20576.0%2C276.9%20577.1%2C278.0%20578.2%2C279.2%20579.3%2C280.3%20580.4%2C281.5%20581.4%2C282.6%20582.5%2C283.7%20583.6%2C284.9%20584.7%2C286.0%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%2236.0%22%20x2%3D%22721.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%2236.0%22%20x2%3D%22800.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22214.6%22%20x2%3D%22880.0%22%20y2%3D%22214.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22143.1%22%20x2%3D%22880.0%22%20y2%3D%22143.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2271.7%22%20x2%3D%22880.0%22%20y2%3D%2271.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22143.1%22%20x2%3D%22880.0%22%20y2%3D%22143.1%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%22286.0%22%20x2%3D%22721.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22721.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%22286.0%22%20x2%3D%22800.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22800.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22214.6%22%20x2%3D%22642.7%22%20y2%3D%22214.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22218.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22143.1%22%20x2%3D%22642.7%22%20y2%3D%22143.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22146.6%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2271.7%22%20x2%3D%22642.7%22%20y2%3D%2271.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2275.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C143.1%20643.7%2C145.5%20644.8%2C147.9%20645.9%2C150.1%20647.0%2C152.3%20648.1%2C154.3%20649.1%2C156.3%20650.2%2C158.3%20651.3%2C160.1%20652.4%2C161.9%20653.5%2C163.6%20654.5%2C165.3%20655.6%2C166.8%20656.7%2C168.3%20657.8%2C169.8%20658.8%2C171.1%20659.9%2C172.4%20661.0%2C173.6%20662.1%2C174.8%20663.2%2C175.9%20664.2%2C176.9%20665.3%2C177.8%20666.4%2C178.7%20667.5%2C179.5%20668.6%2C180.3%20669.6%2C181.0%20670.7%2C181.6%20671.8%2C182.2%20672.9%2C182.7%20674.0%2C183.2%20675.0%2C183.6%20676.1%2C183.9%20677.2%2C184.2%20678.3%2C184.4%20679.3%2C184.6%20680.4%2C184.7%20681.5%2C184.8%20682.6%2C184.8%20683.7%2C184.8%20684.7%2C184.7%20685.8%2C184.5%20686.9%2C184.3%20688.0%2C184.1%20689.1%2C183.8%20690.1%2C183.4%20691.2%2C183.0%20692.3%2C182.6%20693.4%2C182.1%20694.4%2C181.6%20695.5%2C181.0%20696.6%2C180.4%20697.7%2C179.7%20698.8%2C179.0%20699.8%2C178.2%20700.9%2C177.5%20702.0%2C176.6%20703.1%2C175.8%20704.2%2C174.8%20705.2%2C173.9%20706.3%2C172.9%20707.4%2C171.9%20708.5%2C170.8%20709.6%2C169.7%20710.6%2C168.6%20711.7%2C167.4%20712.8%2C166.2%20713.9%2C165.0%20714.9%2C163.7%20716.0%2C162.4%20717.1%2C161.1%20718.2%2C159.8%20719.3%2C158.4%20720.3%2C157.0%20721.4%2C155.5%20722.5%2C154.1%20723.6%2C152.6%20724.7%2C151.1%20725.7%2C149.5%20726.8%2C148.0%20727.9%2C146.4%20729.0%2C144.8%20730.0%2C143.1%20731.1%2C141.5%20732.2%2C139.8%20733.3%2C138.1%20734.4%2C136.4%20735.4%2C134.7%20736.5%2C132.9%20737.6%2C131.1%20738.7%2C129.4%20739.8%2C127.6%20740.8%2C125.8%20741.9%2C123.9%20743.0%2C122.1%20744.1%2C120.2%20745.2%2C118.4%20746.2%2C116.5%20747.3%2C114.6%20748.4%2C112.7%20749.5%2C110.8%20750.5%2C108.9%20751.6%2C107.0%20752.7%2C105.1%20753.8%2C103.2%20754.9%2C101.2%20755.9%2C99.3%20757.0%2C97.4%20758.1%2C95.4%20759.2%2C93.5%20760.3%2C91.5%20761.3%2C89.6%20762.4%2C87.6%20763.5%2C85.7%20764.6%2C83.7%20765.6%2C81.8%20766.7%2C79.8%20767.8%2C77.9%20768.9%2C76.0%20770.0%2C74.0%20771.0%2C72.1%20772.1%2C70.2%20773.2%2C68.3%20774.3%2C66.4%20775.4%2C64.5%20776.4%2C62.6%20777.5%2C60.8%20778.6%2C58.9%20779.7%2C57.0%20780.8%2C55.2%20781.8%2C53.4%20782.9%2C51.6%20784.0%2C49.8%20785.1%2C48.0%20786.1%2C46.2%20787.2%2C44.5%20788.3%2C42.8%20789.4%2C41.0%20790.5%2C39.4%20791.5%2C37.7%20792.6%2C36.0%20793.7%2C34.4%20794.8%2C32.8%20795.9%2C31.2%20796.9%2C29.6%20798.0%2C28.1%20799.1%2C26.6%20800.2%2C25.1%20801.2%2C23.6%20802.3%2C22.2%20803.4%2C20.8%20804.5%2C19.4%20805.6%2C18.0%20806.6%2C16.7%20807.7%2C15.4%20808.8%2C14.1%20809.9%2C12.9%20811.0%2C11.7%20812.0%2C10.5%20813.1%2C9.4%20814.2%2C8.3%20815.3%2C7.3%20816.4%2C6.2%20817.4%2C5.3%20818.5%2C4.3%20819.6%2C3.4%20820.7%2C2.5%20821.7%2C1.7%20822.8%2C0.9%20823.9%2C0.1%20825.0%2C-0.6%20826.1%2C-1.2%20827.1%2C-1.9%20828.2%2C-2.4%20829.3%2C-3.0%20830.4%2C-3.5%20831.5%2C-3.9%20832.5%2C-4.3%20833.6%2C-4.6%20834.7%2C-4.9%20835.8%2C-5.2%20836.8%2C-5.4%20837.9%2C-5.5%20839.0%2C-5.6%20840.1%2C-5.7%20841.2%2C-5.7%20842.2%2C-5.6%20843.3%2C-5.5%20844.4%2C-5.3%20845.5%2C-5.1%20846.6%2C-4.8%20847.6%2C-4.5%20848.7%2C-4.1%20849.8%2C-3.6%20850.9%2C-3.1%20852.0%2C-2.5%20853.0%2C-1.9%20854.1%2C-1.2%20855.2%2C-0.4%20856.3%2C0.4%20857.3%2C1.3%20858.4%2C2.3%20859.5%2C3.3%20860.6%2C4.4%20861.7%2C5.5%20862.7%2C6.7%20863.8%2C8.0%20864.9%2C9.4%20866.0%2C10.8%20867.1%2C12.3%20868.1%2C13.9%20869.2%2C15.5%20870.3%2C17.2%20871.4%2C19.0%20872.4%2C20.9%20873.5%2C22.8%20874.6%2C24.8%20875.7%2C26.9%20876.8%2C29.1%20877.8%2C31.3%20878.9%2C33.6%20880.0%2C36.0%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-128",
    case_id: "MATH 11.128",
    title: "Unlabeled triple: which graph is the second derivative?",
    subsection: "11.4",
    context:
      "Graphs A, B, and C are $f$, $f'$, and $f''$ in unknown order. Decide TRUE or FALSE for each claim.",
    statements: [
      "Graph B is the graph of $f''$.",
      "Graph C is the graph of $f'$.",
      "Graph A is the graph of $f$.",
      "Graph B is the graph of $f'$.",
      "The zeros of Graph C are the $x$-coordinates of the turning points of Graph A."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Graph B is a straight line — the second derivative of a cubic. It crosses zero where Graph C (the parabola) has its trough, confirming B $=f''$.

The statement is True.`,
      `**B.** → True

Graph C is the upward-opening parabola with two zeros: that is $f'$.

The statement is True.`,
      `**C.** → True

Graph A shows a peak then a trough — the original $f$ whose slopes are described by Graph C.

The statement is True.`,
      `**D.** → False

Graph B is linear, so it is $f''$, not $f'$. The first derivative is Graph C.

The statement is False.`,
      `**E.** → True

Turning points of $f$ occur where $f'=0$. The zeros of Graph C ($f'$) line up with the peak and trough of Graph A ($f$).

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 128,
    solution_overview:
      "Linear graph is $f''$; quadratic with two zeros is $f'$; peak-then-trough is $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%2236.0%22%20x2%3D%22131.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%2236.0%22%20x2%3D%22210.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22250.3%22%20x2%3D%22289.3%22%20y2%3D%22250.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22178.9%22%20x2%3D%22289.3%22%20y2%3D%22178.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22107.4%22%20x2%3D%22289.3%22%20y2%3D%22107.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22250.3%22%20x2%3D%22289.3%22%20y2%3D%22250.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%22286.0%22%20x2%3D%22131.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22131.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%22286.0%22%20x2%3D%22210.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22210.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22250.3%22%20x2%3D%2252.0%22%20y2%3D%22250.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22253.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22178.9%22%20x2%3D%2252.0%22%20y2%3D%22178.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22182.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22107.4%22%20x2%3D%2252.0%22%20y2%3D%22107.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22110.9%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C250.3%2053.1%2C246.4%2054.2%2C242.7%2055.2%2C239.0%2056.3%2C235.3%2057.4%2C231.8%2058.5%2C228.3%2059.6%2C224.9%2060.6%2C221.6%2061.7%2C218.4%2062.8%2C215.2%2063.9%2C212.1%2064.9%2C209.1%2066.0%2C206.1%2067.1%2C203.2%2068.2%2C200.4%2069.3%2C197.7%2070.3%2C195.0%2071.4%2C192.4%2072.5%2C189.8%2073.6%2C187.3%2074.7%2C184.9%2075.7%2C182.6%2076.8%2C180.3%2077.9%2C178.1%2079.0%2C175.9%2080.0%2C173.8%2081.1%2C171.8%2082.2%2C169.8%2083.3%2C167.9%2084.4%2C166.0%2085.4%2C164.2%2086.5%2C162.5%2087.6%2C160.8%2088.7%2C159.1%2089.8%2C157.6%2090.8%2C156.0%2091.9%2C154.6%2093.0%2C153.1%2094.1%2C151.8%2095.2%2C150.5%2096.2%2C149.2%2097.3%2C148.0%2098.4%2C146.8%2099.5%2C145.7%20100.5%2C144.6%20101.6%2C143.6%20102.7%2C142.7%20103.8%2C141.7%20104.9%2C140.8%20105.9%2C140.0%20107.0%2C139.2%20108.1%2C138.5%20109.2%2C137.7%20110.3%2C137.1%20111.3%2C136.4%20112.4%2C135.9%20113.5%2C135.3%20114.6%2C134.8%20115.6%2C134.3%20116.7%2C133.9%20117.8%2C133.5%20118.9%2C133.1%20120.0%2C132.8%20121.0%2C132.5%20122.1%2C132.2%20123.2%2C132.0%20124.3%2C131.8%20125.4%2C131.6%20126.4%2C131.5%20127.5%2C131.4%20128.6%2C131.3%20129.7%2C131.3%20130.8%2C131.2%20131.8%2C131.2%20132.9%2C131.3%20134.0%2C131.3%20135.1%2C131.4%20136.1%2C131.5%20137.2%2C131.6%20138.3%2C131.8%20139.4%2C132.0%20140.5%2C132.2%20141.5%2C132.4%20142.6%2C132.6%20143.7%2C132.9%20144.8%2C133.1%20145.9%2C133.4%20146.9%2C133.7%20148.0%2C134.0%20149.1%2C134.4%20150.2%2C134.7%20151.2%2C135.1%20152.3%2C135.5%20153.4%2C135.8%20154.5%2C136.2%20155.6%2C136.7%20156.6%2C137.1%20157.7%2C137.5%20158.8%2C137.9%20159.9%2C138.4%20161.0%2C138.8%20162.0%2C139.3%20163.1%2C139.8%20164.2%2C140.2%20165.3%2C140.7%20166.4%2C141.2%20167.4%2C141.7%20168.5%2C142.2%20169.6%2C142.7%20170.7%2C143.1%20171.7%2C143.6%20172.8%2C144.1%20173.9%2C144.6%20175.0%2C145.1%20176.1%2C145.6%20177.1%2C146.0%20178.2%2C146.5%20179.3%2C147.0%20180.4%2C147.4%20181.5%2C147.9%20182.5%2C148.3%20183.6%2C148.8%20184.7%2C149.2%20185.8%2C149.6%20186.8%2C150.0%20187.9%2C150.4%20189.0%2C150.8%20190.1%2C151.2%20191.2%2C151.6%20192.2%2C151.9%20193.3%2C152.3%20194.4%2C152.6%20195.5%2C152.9%20196.6%2C153.2%20197.6%2C153.4%20198.7%2C153.7%20199.8%2C153.9%20200.9%2C154.1%20202.0%2C154.3%20203.0%2C154.5%20204.1%2C154.6%20205.2%2C154.8%20206.3%2C154.9%20207.3%2C155.0%20208.4%2C155.0%20209.5%2C155.0%20210.6%2C155.0%20211.7%2C155.0%20212.7%2C155.0%20213.8%2C154.9%20214.9%2C154.8%20216.0%2C154.7%20217.1%2C154.5%20218.1%2C154.3%20219.2%2C154.1%20220.3%2C153.8%20221.4%2C153.5%20222.4%2C153.2%20223.5%2C152.8%20224.6%2C152.4%20225.7%2C152.0%20226.8%2C151.5%20227.8%2C151.0%20228.9%2C150.4%20230.0%2C149.8%20231.1%2C149.2%20232.2%2C148.5%20233.2%2C147.8%20234.3%2C147.1%20235.4%2C146.3%20236.5%2C145.4%20237.6%2C144.6%20238.6%2C143.6%20239.7%2C142.7%20240.8%2C141.6%20241.9%2C140.6%20242.9%2C139.5%20244.0%2C138.3%20245.1%2C137.1%20246.2%2C135.8%20247.3%2C134.5%20248.3%2C133.1%20249.4%2C131.7%20250.5%2C130.3%20251.6%2C128.7%20252.7%2C127.2%20253.7%2C125.5%20254.8%2C123.8%20255.9%2C122.1%20257.0%2C120.3%20258.0%2C118.4%20259.1%2C116.5%20260.2%2C114.5%20261.3%2C112.5%20262.4%2C110.4%20263.4%2C108.2%20264.5%2C106.0%20265.6%2C103.7%20266.7%2C101.4%20267.8%2C98.9%20268.8%2C96.5%20269.9%2C93.9%20271.0%2C91.3%20272.1%2C88.6%20273.2%2C85.9%20274.2%2C83.1%20275.3%2C80.2%20276.4%2C77.2%20277.5%2C74.2%20278.5%2C71.1%20279.6%2C67.9%20280.7%2C64.7%20281.8%2C61.4%20282.9%2C58.0%20283.9%2C54.5%20285.0%2C51.0%20286.1%2C47.3%20287.2%2C43.6%20288.3%2C39.9%20289.3%2C36.0%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%2236.0%22%20x2%3D%22426.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%2236.0%22%20x2%3D%22505.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22244.3%22%20x2%3D%22584.7%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2277.7%22%20x2%3D%22584.7%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%22286.0%22%20x2%3D%22426.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22426.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%22286.0%22%20x2%3D%22505.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22505.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22244.3%22%20x2%3D%22347.3%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22161.0%22%20x2%3D%22347.3%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2277.7%22%20x2%3D%22347.3%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C286.0%20348.4%2C284.9%20349.5%2C283.7%20350.6%2C282.6%20351.6%2C281.5%20352.7%2C280.3%20353.8%2C279.2%20354.9%2C278.0%20356.0%2C276.9%20357.0%2C275.8%20358.1%2C274.6%20359.2%2C273.5%20360.3%2C272.4%20361.4%2C271.2%20362.4%2C270.1%20363.5%2C269.0%20364.6%2C267.8%20365.7%2C266.7%20366.8%2C265.5%20367.8%2C264.4%20368.9%2C263.3%20370.0%2C262.1%20371.1%2C261.0%20372.1%2C259.9%20373.2%2C258.7%20374.3%2C257.6%20375.4%2C256.5%20376.5%2C255.3%20377.5%2C254.2%20378.6%2C253.0%20379.7%2C251.9%20380.8%2C250.8%20381.9%2C249.6%20382.9%2C248.5%20384.0%2C247.4%20385.1%2C246.2%20386.2%2C245.1%20387.2%2C244.0%20388.3%2C242.8%20389.4%2C241.7%20390.5%2C240.5%20391.6%2C239.4%20392.6%2C238.3%20393.7%2C237.1%20394.8%2C236.0%20395.9%2C234.9%20397.0%2C233.7%20398.0%2C232.6%20399.1%2C231.5%20400.2%2C230.3%20401.3%2C229.2%20402.4%2C228.0%20403.4%2C226.9%20404.5%2C225.8%20405.6%2C224.6%20406.7%2C223.5%20407.7%2C222.4%20408.8%2C221.2%20409.9%2C220.1%20411.0%2C219.0%20412.1%2C217.8%20413.1%2C216.7%20414.2%2C215.5%20415.3%2C214.4%20416.4%2C213.3%20417.5%2C212.1%20418.5%2C211.0%20419.6%2C209.9%20420.7%2C208.7%20421.8%2C207.6%20422.8%2C206.5%20423.9%2C205.3%20425.0%2C204.2%20426.1%2C203.0%20427.2%2C201.9%20428.2%2C200.8%20429.3%2C199.6%20430.4%2C198.5%20431.5%2C197.4%20432.6%2C196.2%20433.6%2C195.1%20434.7%2C194.0%20435.8%2C192.8%20436.9%2C191.7%20438.0%2C190.5%20439.0%2C189.4%20440.1%2C188.3%20441.2%2C187.1%20442.3%2C186.0%20443.3%2C184.9%20444.4%2C183.7%20445.5%2C182.6%20446.6%2C181.5%20447.7%2C180.3%20448.7%2C179.2%20449.8%2C178.0%20450.9%2C176.9%20452.0%2C175.8%20453.1%2C174.6%20454.1%2C173.5%20455.2%2C172.4%20456.3%2C171.2%20457.4%2C170.1%20458.4%2C169.0%20459.5%2C167.8%20460.6%2C166.7%20461.7%2C165.5%20462.8%2C164.4%20463.8%2C163.3%20464.9%2C162.1%20466.0%2C161.0%20467.1%2C159.9%20468.2%2C158.7%20469.2%2C157.6%20470.3%2C156.5%20471.4%2C155.3%20472.5%2C154.2%20473.6%2C153.0%20474.6%2C151.9%20475.7%2C150.8%20476.8%2C149.6%20477.9%2C148.5%20478.9%2C147.4%20480.0%2C146.2%20481.1%2C145.1%20482.2%2C144.0%20483.3%2C142.8%20484.3%2C141.7%20485.4%2C140.5%20486.5%2C139.4%20487.6%2C138.3%20488.7%2C137.1%20489.7%2C136.0%20490.8%2C134.9%20491.9%2C133.7%20493.0%2C132.6%20494.0%2C131.5%20495.1%2C130.3%20496.2%2C129.2%20497.3%2C128.0%20498.4%2C126.9%20499.4%2C125.8%20500.5%2C124.6%20501.6%2C123.5%20502.7%2C122.4%20503.8%2C121.2%20504.8%2C120.1%20505.9%2C119.0%20507.0%2C117.8%20508.1%2C116.7%20509.2%2C115.5%20510.2%2C114.4%20511.3%2C113.3%20512.4%2C112.1%20513.5%2C111.0%20514.5%2C109.9%20515.6%2C108.7%20516.7%2C107.6%20517.8%2C106.5%20518.9%2C105.3%20519.9%2C104.2%20521.0%2C103.0%20522.1%2C101.9%20523.2%2C100.8%20524.3%2C99.6%20525.3%2C98.5%20526.4%2C97.4%20527.5%2C96.2%20528.6%2C95.1%20529.6%2C94.0%20530.7%2C92.8%20531.8%2C91.7%20532.9%2C90.5%20534.0%2C89.4%20535.0%2C88.3%20536.1%2C87.1%20537.2%2C86.0%20538.3%2C84.9%20539.4%2C83.7%20540.4%2C82.6%20541.5%2C81.5%20542.6%2C80.3%20543.7%2C79.2%20544.8%2C78.0%20545.8%2C76.9%20546.9%2C75.8%20548.0%2C74.6%20549.1%2C73.5%20550.1%2C72.4%20551.2%2C71.2%20552.3%2C70.1%20553.4%2C69.0%20554.5%2C67.8%20555.5%2C66.7%20556.6%2C65.5%20557.7%2C64.4%20558.8%2C63.3%20559.9%2C62.1%20560.9%2C61.0%20562.0%2C59.9%20563.1%2C58.7%20564.2%2C57.6%20565.2%2C56.5%20566.3%2C55.3%20567.4%2C54.2%20568.5%2C53.0%20569.6%2C51.9%20570.6%2C50.8%20571.7%2C49.6%20572.8%2C48.5%20573.9%2C47.4%20575.0%2C46.2%20576.0%2C45.1%20577.1%2C44.0%20578.2%2C42.8%20579.3%2C41.7%20580.4%2C40.5%20581.4%2C39.4%20582.5%2C38.3%20583.6%2C37.1%20584.7%2C36.0%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%2236.0%22%20x2%3D%22721.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%2236.0%22%20x2%3D%22800.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22265.2%22%20x2%3D%22880.0%22%20y2%3D%22265.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22223.5%22%20x2%3D%22880.0%22%20y2%3D%22223.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22181.8%22%20x2%3D%22880.0%22%20y2%3D%22181.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22140.2%22%20x2%3D%22880.0%22%20y2%3D%22140.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2256.8%22%20x2%3D%22880.0%22%20y2%3D%2256.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22223.5%22%20x2%3D%22880.0%22%20y2%3D%22223.5%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%22286.0%22%20x2%3D%22721.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22721.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%22286.0%22%20x2%3D%22800.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22800.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22265.2%22%20x2%3D%22642.7%22%20y2%3D%22265.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22268.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22223.5%22%20x2%3D%22642.7%22%20y2%3D%22223.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22227.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22181.8%22%20x2%3D%22642.7%22%20y2%3D%22181.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22185.3%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22140.2%22%20x2%3D%22642.7%22%20y2%3D%22140.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22143.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2256.8%22%20x2%3D%22642.7%22%20y2%3D%2256.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2260.3%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C56.8%20643.7%2C60.2%20644.8%2C63.6%20645.9%2C66.9%20647.0%2C70.2%20648.1%2C73.5%20649.1%2C76.7%20650.2%2C79.9%20651.3%2C83.1%20652.4%2C86.3%20653.5%2C89.4%20654.5%2C92.5%20655.6%2C95.5%20656.7%2C98.5%20657.8%2C101.5%20658.8%2C104.5%20659.9%2C107.4%20661.0%2C110.3%20662.1%2C113.2%20663.2%2C116.0%20664.2%2C118.8%20665.3%2C121.6%20666.4%2C124.3%20667.5%2C127.0%20668.6%2C129.7%20669.6%2C132.4%20670.7%2C135.0%20671.8%2C137.6%20672.9%2C140.1%20674.0%2C142.7%20675.0%2C145.2%20676.1%2C147.6%20677.2%2C150.1%20678.3%2C152.5%20679.3%2C154.8%20680.4%2C157.2%20681.5%2C159.5%20682.6%2C161.8%20683.7%2C164.0%20684.7%2C166.2%20685.8%2C168.4%20686.9%2C170.6%20688.0%2C172.7%20689.1%2C174.8%20690.1%2C176.8%20691.2%2C178.9%20692.3%2C180.9%20693.4%2C182.8%20694.4%2C184.8%20695.5%2C186.7%20696.6%2C188.5%20697.7%2C190.4%20698.8%2C192.2%20699.8%2C194.0%20700.9%2C195.7%20702.0%2C197.5%20703.1%2C199.1%20704.2%2C200.8%20705.2%2C202.4%20706.3%2C204.0%20707.4%2C205.6%20708.5%2C207.1%20709.6%2C208.6%20710.6%2C210.1%20711.7%2C211.5%20712.8%2C213.0%20713.9%2C214.3%20714.9%2C215.7%20716.0%2C217.0%20717.1%2C218.3%20718.2%2C219.5%20719.3%2C220.8%20720.3%2C222.0%20721.4%2C223.1%20722.5%2C224.3%20723.6%2C225.4%20724.7%2C226.4%20725.7%2C227.5%20726.8%2C228.5%20727.9%2C229.4%20729.0%2C230.4%20730.0%2C231.3%20731.1%2C232.2%20732.2%2C233.0%20733.3%2C233.9%20734.4%2C234.6%20735.4%2C235.4%20736.5%2C236.1%20737.6%2C236.8%20738.7%2C237.5%20739.8%2C238.1%20740.8%2C238.7%20741.9%2C239.3%20743.0%2C239.9%20744.1%2C240.4%20745.2%2C240.8%20746.2%2C241.3%20747.3%2C241.7%20748.4%2C242.1%20749.5%2C242.5%20750.5%2C242.8%20751.6%2C243.1%20752.7%2C243.3%20753.8%2C243.6%20754.9%2C243.8%20755.9%2C243.9%20757.0%2C244.1%20758.1%2C244.2%20759.2%2C244.3%20760.3%2C244.3%20761.3%2C244.3%20762.4%2C244.3%20763.5%2C244.3%20764.6%2C244.2%20765.6%2C244.1%20766.7%2C243.9%20767.8%2C243.8%20768.9%2C243.6%20770.0%2C243.3%20771.0%2C243.1%20772.1%2C242.8%20773.2%2C242.5%20774.3%2C242.1%20775.4%2C241.7%20776.4%2C241.3%20777.5%2C240.8%20778.6%2C240.4%20779.7%2C239.9%20780.8%2C239.3%20781.8%2C238.7%20782.9%2C238.1%20784.0%2C237.5%20785.1%2C236.8%20786.1%2C236.1%20787.2%2C235.4%20788.3%2C234.6%20789.4%2C233.9%20790.5%2C233.0%20791.5%2C232.2%20792.6%2C231.3%20793.7%2C230.4%20794.8%2C229.4%20795.9%2C228.5%20796.9%2C227.5%20798.0%2C226.4%20799.1%2C225.4%20800.2%2C224.3%20801.2%2C223.1%20802.3%2C222.0%20803.4%2C220.8%20804.5%2C219.5%20805.6%2C218.3%20806.6%2C217.0%20807.7%2C215.7%20808.8%2C214.3%20809.9%2C213.0%20811.0%2C211.5%20812.0%2C210.1%20813.1%2C208.6%20814.2%2C207.1%20815.3%2C205.6%20816.4%2C204.0%20817.4%2C202.4%20818.5%2C200.8%20819.6%2C199.1%20820.7%2C197.5%20821.7%2C195.7%20822.8%2C194.0%20823.9%2C192.2%20825.0%2C190.4%20826.1%2C188.5%20827.1%2C186.7%20828.2%2C184.8%20829.3%2C182.8%20830.4%2C180.9%20831.5%2C178.9%20832.5%2C176.8%20833.6%2C174.8%20834.7%2C172.7%20835.8%2C170.6%20836.8%2C168.4%20837.9%2C166.2%20839.0%2C164.0%20840.1%2C161.8%20841.2%2C159.5%20842.2%2C157.2%20843.3%2C154.8%20844.4%2C152.5%20845.5%2C150.1%20846.6%2C147.6%20847.6%2C145.2%20848.7%2C142.7%20849.8%2C140.1%20850.9%2C137.6%20852.0%2C135.0%20853.0%2C132.4%20854.1%2C129.7%20855.2%2C127.0%20856.3%2C124.3%20857.3%2C121.6%20858.4%2C118.8%20859.5%2C116.0%20860.6%2C113.2%20861.7%2C110.3%20862.7%2C107.4%20863.8%2C104.5%20864.9%2C101.5%20866.0%2C98.5%20867.1%2C95.5%20868.1%2C92.5%20869.2%2C89.4%20870.3%2C86.3%20871.4%2C83.1%20872.4%2C79.9%20873.5%2C76.7%20874.6%2C73.5%20875.7%2C70.2%20876.8%2C66.9%20877.8%2C63.6%20878.9%2C60.2%20880.0%2C56.8%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-129",
    case_id: "MATH 11.129",
    title: "Unlabeled triple: link zeros of f′ to turns of f",
    subsection: "11.4",
    context:
      "The three graphs are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE.",
    statements: [
      "Graph A is the graph of $f''$.",
      "Graph B is the graph of $f$.",
      "Graph C is the graph of $f'$.",
      "Graph A is the graph of $f'$.",
      "Graph A crosses the horizontal axis at the same $x$ where Graph C has its vertex."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Graph A is linear → $f''$.

The statement is True.`,
      `**B.** → True

Graph B has a local max then a local min → original $f$.

The statement is True.`,
      `**C.** → True

Graph C is the upward-opening parabola → $f'$, with zeros at the turning points of Graph B.

The statement is True.`,
      `**D.** → False

A straight line cannot be $f'$ for this cubic family; $f'$ is Graph C.

The statement is False.`,
      `**E.** → True

The vertex of $f'$ is where $f''=0$. Graph A's zero lines up with Graph C's lowest point — confirming A $=f''$ and C $=f'$.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 129,
    solution_overview:
      "Match by degree and by the rule: zeros of $f''$ sit under extrema of $f'$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2299.5%22%20y1%3D%2236.0%22%20x2%3D%2299.5%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.9%22%20y1%3D%2236.0%22%20x2%3D%22146.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22194.4%22%20y1%3D%2236.0%22%20x2%3D%22194.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22241.9%22%20y1%3D%2236.0%22%20x2%3D%22241.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22263.3%22%20x2%3D%22289.3%22%20y2%3D%22263.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22172.4%22%20x2%3D%22289.3%22%20y2%3D%22172.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2281.5%22%20x2%3D%22289.3%22%20y2%3D%2281.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22172.4%22%20x2%3D%22289.3%22%20y2%3D%22172.4%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2299.5%22%20y1%3D%22286.0%22%20x2%3D%2299.5%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2299.5%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.9%22%20y1%3D%22286.0%22%20x2%3D%22146.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22194.4%22%20y1%3D%22286.0%22%20x2%3D%22194.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22194.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22241.9%22%20y1%3D%22286.0%22%20x2%3D%22241.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22241.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22263.3%22%20x2%3D%2252.0%22%20y2%3D%22263.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22266.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22172.4%22%20x2%3D%2252.0%22%20y2%3D%22172.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22175.9%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2281.5%22%20x2%3D%2252.0%22%20y2%3D%2281.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%2285.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C263.3%2053.1%2C262.2%2054.2%2C261.2%2055.2%2C260.2%2056.3%2C259.1%2057.4%2C258.1%2058.5%2C257.1%2059.6%2C256.0%2060.6%2C255.0%2061.7%2C254.0%2062.8%2C252.9%2063.9%2C251.9%2064.9%2C250.9%2066.0%2C249.8%2067.1%2C248.8%2068.2%2C247.8%2069.3%2C246.7%2070.3%2C245.7%2071.4%2C244.7%2072.5%2C243.6%2073.6%2C242.6%2074.7%2C241.6%2075.7%2C240.5%2076.8%2C239.5%2077.9%2C238.5%2079.0%2C237.4%2080.0%2C236.4%2081.1%2C235.4%2082.2%2C234.3%2083.3%2C233.3%2084.4%2C232.3%2085.4%2C231.2%2086.5%2C230.2%2087.6%2C229.2%2088.7%2C228.1%2089.8%2C227.1%2090.8%2C226.1%2091.9%2C225.0%2093.0%2C224.0%2094.1%2C223.0%2095.2%2C222.0%2096.2%2C220.9%2097.3%2C219.9%2098.4%2C218.9%2099.5%2C217.8%20100.5%2C216.8%20101.6%2C215.8%20102.7%2C214.7%20103.8%2C213.7%20104.9%2C212.7%20105.9%2C211.6%20107.0%2C210.6%20108.1%2C209.6%20109.2%2C208.5%20110.3%2C207.5%20111.3%2C206.5%20112.4%2C205.4%20113.5%2C204.4%20114.6%2C203.4%20115.6%2C202.3%20116.7%2C201.3%20117.8%2C200.3%20118.9%2C199.2%20120.0%2C198.2%20121.0%2C197.2%20122.1%2C196.1%20123.2%2C195.1%20124.3%2C194.1%20125.4%2C193.0%20126.4%2C192.0%20127.5%2C191.0%20128.6%2C189.9%20129.7%2C188.9%20130.8%2C187.9%20131.8%2C186.8%20132.9%2C185.8%20134.0%2C184.8%20135.1%2C183.7%20136.1%2C182.7%20137.2%2C181.7%20138.3%2C180.6%20139.4%2C179.6%20140.5%2C178.6%20141.5%2C177.5%20142.6%2C176.5%20143.7%2C175.5%20144.8%2C174.4%20145.9%2C173.4%20146.9%2C172.4%20148.0%2C171.3%20149.1%2C170.3%20150.2%2C169.3%20151.2%2C168.2%20152.3%2C167.2%20153.4%2C166.2%20154.5%2C165.1%20155.6%2C164.1%20156.6%2C163.1%20157.7%2C162.0%20158.8%2C161.0%20159.9%2C160.0%20161.0%2C158.9%20162.0%2C157.9%20163.1%2C156.9%20164.2%2C155.8%20165.3%2C154.8%20166.4%2C153.8%20167.4%2C152.7%20168.5%2C151.7%20169.6%2C150.7%20170.7%2C149.6%20171.7%2C148.6%20172.8%2C147.6%20173.9%2C146.5%20175.0%2C145.5%20176.1%2C144.5%20177.1%2C143.4%20178.2%2C142.4%20179.3%2C141.4%20180.4%2C140.3%20181.5%2C139.3%20182.5%2C138.3%20183.6%2C137.2%20184.7%2C136.2%20185.8%2C135.2%20186.8%2C134.1%20187.9%2C133.1%20189.0%2C132.1%20190.1%2C131.0%20191.2%2C130.0%20192.2%2C129.0%20193.3%2C127.9%20194.4%2C126.9%20195.5%2C125.9%20196.6%2C124.8%20197.6%2C123.8%20198.7%2C122.8%20199.8%2C121.7%20200.9%2C120.7%20202.0%2C119.7%20203.0%2C118.6%20204.1%2C117.6%20205.2%2C116.6%20206.3%2C115.5%20207.3%2C114.5%20208.4%2C113.5%20209.5%2C112.4%20210.6%2C111.4%20211.7%2C110.4%20212.7%2C109.3%20213.8%2C108.3%20214.9%2C107.3%20216.0%2C106.2%20217.1%2C105.2%20218.1%2C104.2%20219.2%2C103.1%20220.3%2C102.1%20221.4%2C101.1%20222.4%2C100.0%20223.5%2C99.0%20224.6%2C98.0%20225.7%2C97.0%20226.8%2C95.9%20227.8%2C94.9%20228.9%2C93.9%20230.0%2C92.8%20231.1%2C91.8%20232.2%2C90.8%20233.2%2C89.7%20234.3%2C88.7%20235.4%2C87.7%20236.5%2C86.6%20237.6%2C85.6%20238.6%2C84.6%20239.7%2C83.5%20240.8%2C82.5%20241.9%2C81.5%20242.9%2C80.4%20244.0%2C79.4%20245.1%2C78.4%20246.2%2C77.3%20247.3%2C76.3%20248.3%2C75.3%20249.4%2C74.2%20250.5%2C73.2%20251.6%2C72.2%20252.7%2C71.1%20253.7%2C70.1%20254.8%2C69.1%20255.9%2C68.0%20257.0%2C67.0%20258.0%2C66.0%20259.1%2C64.9%20260.2%2C63.9%20261.3%2C62.9%20262.4%2C61.8%20263.4%2C60.8%20264.5%2C59.8%20265.6%2C58.7%20266.7%2C57.7%20267.8%2C56.7%20268.8%2C55.6%20269.9%2C54.6%20271.0%2C53.6%20272.1%2C52.5%20273.2%2C51.5%20274.2%2C50.5%20275.3%2C49.4%20276.4%2C48.4%20277.5%2C47.4%20278.5%2C46.3%20279.6%2C45.3%20280.7%2C44.3%20281.8%2C43.2%20282.9%2C42.2%20283.9%2C41.2%20285.0%2C40.1%20286.1%2C39.1%20287.2%2C38.1%20288.3%2C37.0%20289.3%2C36.0%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22394.8%22%20y1%3D%2236.0%22%20x2%3D%22394.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22442.3%22%20y1%3D%2236.0%22%20x2%3D%22442.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22489.7%22%20y1%3D%2236.0%22%20x2%3D%22489.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22537.2%22%20y1%3D%2236.0%22%20x2%3D%22537.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22202.7%22%20x2%3D%22584.7%22%20y2%3D%22202.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22119.3%22%20x2%3D%22584.7%22%20y2%3D%22119.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%2236.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22202.7%22%20x2%3D%22584.7%22%20y2%3D%22202.7%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22394.8%22%20y1%3D%22286.0%22%20x2%3D%22394.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22394.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22442.3%22%20y1%3D%22286.0%22%20x2%3D%22442.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22442.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22489.7%22%20y1%3D%22286.0%22%20x2%3D%22489.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22489.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22537.2%22%20y1%3D%22286.0%22%20x2%3D%22537.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22537.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22289.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22202.7%22%20x2%3D%22347.3%22%20y2%3D%22202.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22206.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22119.3%22%20x2%3D%22347.3%22%20y2%3D%22119.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22122.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%2236.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2239.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C202.7%20348.4%2C199.9%20349.5%2C197.2%20350.6%2C194.5%20351.6%2C192.0%20352.7%2C189.5%20353.8%2C187.1%20354.9%2C184.8%20356.0%2C182.6%20357.0%2C180.5%20358.1%2C178.4%20359.2%2C176.4%20360.3%2C174.5%20361.4%2C172.7%20362.4%2C170.9%20363.5%2C169.2%20364.6%2C167.6%20365.7%2C166.0%20366.8%2C164.5%20367.8%2C163.1%20368.9%2C161.8%20370.0%2C160.5%20371.1%2C159.3%20372.1%2C158.1%20373.2%2C157.0%20374.3%2C156.0%20375.4%2C155.0%20376.5%2C154.1%20377.5%2C153.3%20378.6%2C152.5%20379.7%2C151.8%20380.8%2C151.1%20381.9%2C150.5%20382.9%2C149.9%20384.0%2C149.4%20385.1%2C149.0%20386.2%2C148.6%20387.2%2C148.2%20388.3%2C147.9%20389.4%2C147.7%20390.5%2C147.5%20391.6%2C147.3%20392.6%2C147.2%20393.7%2C147.1%20394.8%2C147.1%20395.9%2C147.1%20397.0%2C147.2%20398.0%2C147.3%20399.1%2C147.4%20400.2%2C147.6%20401.3%2C147.9%20402.4%2C148.1%20403.4%2C148.4%20404.5%2C148.7%20405.6%2C149.1%20406.7%2C149.5%20407.7%2C149.9%20408.8%2C150.4%20409.9%2C150.9%20411.0%2C151.4%20412.1%2C152.0%20413.1%2C152.5%20414.2%2C153.1%20415.3%2C153.8%20416.4%2C154.4%20417.5%2C155.1%20418.5%2C155.8%20419.6%2C156.5%20420.7%2C157.3%20421.8%2C158.0%20422.8%2C158.8%20423.9%2C159.6%20425.0%2C160.4%20426.1%2C161.2%20427.2%2C162.1%20428.2%2C162.9%20429.3%2C163.8%20430.4%2C164.7%20431.5%2C165.6%20432.6%2C166.5%20433.6%2C167.4%20434.7%2C168.3%20435.8%2C169.2%20436.9%2C170.2%20438.0%2C171.1%20439.0%2C172.1%20440.1%2C173.0%20441.2%2C173.9%20442.3%2C174.9%20443.3%2C175.8%20444.4%2C176.8%20445.5%2C177.7%20446.6%2C178.7%20447.7%2C179.6%20448.7%2C180.5%20449.8%2C181.5%20450.9%2C182.4%20452.0%2C183.3%20453.1%2C184.2%20454.1%2C185.1%20455.2%2C186.0%20456.3%2C186.8%20457.4%2C187.7%20458.4%2C188.5%20459.5%2C189.4%20460.6%2C190.2%20461.7%2C191.0%20462.8%2C191.8%20463.8%2C192.5%20464.9%2C193.3%20466.0%2C194.0%20467.1%2C194.7%20468.2%2C195.4%20469.2%2C196.0%20470.3%2C196.6%20471.4%2C197.2%20472.5%2C197.8%20473.6%2C198.4%20474.6%2C198.9%20475.7%2C199.4%20476.8%2C199.8%20477.9%2C200.3%20478.9%2C200.7%20480.0%2C201.0%20481.1%2C201.4%20482.2%2C201.7%20483.3%2C201.9%20484.3%2C202.1%20485.4%2C202.3%20486.5%2C202.5%20487.6%2C202.6%20488.7%2C202.6%20489.7%2C202.7%20490.8%2C202.6%20491.9%2C202.6%20493.0%2C202.5%20494.0%2C202.3%20495.1%2C202.1%20496.2%2C201.9%20497.3%2C201.6%20498.4%2C201.2%20499.4%2C200.8%20500.5%2C200.4%20501.6%2C199.8%20502.7%2C199.3%20503.8%2C198.7%20504.8%2C198.0%20505.9%2C197.3%20507.0%2C196.5%20508.1%2C195.6%20509.2%2C194.7%20510.2%2C193.8%20511.3%2C192.8%20512.4%2C191.7%20513.5%2C190.5%20514.5%2C189.3%20515.6%2C188.0%20516.7%2C186.7%20517.8%2C185.3%20518.9%2C183.8%20519.9%2C182.2%20521.0%2C180.6%20522.1%2C178.9%20523.2%2C177.1%20524.3%2C175.3%20525.3%2C173.4%20526.4%2C171.4%20527.5%2C169.3%20528.6%2C167.2%20529.6%2C164.9%20530.7%2C162.6%20531.8%2C160.3%20532.9%2C157.8%20534.0%2C155.3%20535.0%2C152.6%20536.1%2C149.9%20537.2%2C147.1%20538.3%2C144.2%20539.4%2C141.3%20540.4%2C138.2%20541.5%2C135.0%20542.6%2C131.8%20543.7%2C128.5%20544.8%2C125.1%20545.8%2C121.5%20546.9%2C117.9%20548.0%2C114.2%20549.1%2C110.4%20550.1%2C106.5%20551.2%2C102.5%20552.3%2C98.5%20553.4%2C94.3%20554.5%2C90.0%20555.5%2C85.6%20556.6%2C81.1%20557.7%2C76.5%20558.8%2C71.8%20559.9%2C67.0%20560.9%2C62.0%20562.0%2C57.0%20563.1%2C51.9%20564.2%2C46.6%20565.2%2C41.3%20566.3%2C35.8%20567.4%2C30.2%20568.5%2C24.5%20569.6%2C18.7%20570.6%2C12.8%20571.7%2C6.8%20572.8%2C0.6%20573.9%2C-5.6%20575.0%2C-12.0%20576.0%2C-18.6%20577.1%2C-25.2%20578.2%2C-31.9%20579.3%2C-38.8%20580.4%2C-45.8%20581.4%2C-53.0%20582.5%2C-60.2%20583.6%2C-67.6%20584.7%2C-75.1%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22690.1%22%20y1%3D%2236.0%22%20x2%3D%22690.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22737.6%22%20y1%3D%2236.0%22%20x2%3D%22737.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22785.1%22%20y1%3D%2236.0%22%20x2%3D%22785.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22832.5%22%20y1%3D%2236.0%22%20x2%3D%22832.5%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22202.7%22%20x2%3D%22880.0%22%20y2%3D%22202.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22119.3%22%20x2%3D%22880.0%22%20y2%3D%22119.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%2236.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22202.7%22%20x2%3D%22880.0%22%20y2%3D%22202.7%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22690.1%22%20y1%3D%22286.0%22%20x2%3D%22690.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22690.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22737.6%22%20y1%3D%22286.0%22%20x2%3D%22737.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22737.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22785.1%22%20y1%3D%22286.0%22%20x2%3D%22785.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22785.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22832.5%22%20y1%3D%22286.0%22%20x2%3D%22832.5%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22832.5%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22289.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22202.7%22%20x2%3D%22642.7%22%20y2%3D%22202.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22206.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22119.3%22%20x2%3D%22642.7%22%20y2%3D%22119.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22122.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%2236.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2239.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C77.7%20643.7%2C81.4%20644.8%2C85.2%20645.9%2C88.8%20647.0%2C92.5%20648.1%2C96.1%20649.1%2C99.6%20650.2%2C103.1%20651.3%2C106.6%20652.4%2C110.0%20653.5%2C113.4%20654.5%2C116.7%20655.6%2C120.0%20656.7%2C123.3%20657.8%2C126.5%20658.8%2C129.6%20659.9%2C132.8%20661.0%2C135.8%20662.1%2C138.9%20663.2%2C141.9%20664.2%2C144.8%20665.3%2C147.7%20666.4%2C150.6%20667.5%2C153.4%20668.6%2C156.2%20669.6%2C158.9%20670.7%2C161.6%20671.8%2C164.2%20672.9%2C166.9%20674.0%2C169.4%20675.0%2C171.9%20676.1%2C174.4%20677.2%2C176.8%20678.3%2C179.2%20679.3%2C181.6%20680.4%2C183.9%20681.5%2C186.1%20682.6%2C188.4%20683.7%2C190.5%20684.7%2C192.7%20685.8%2C194.7%20686.9%2C196.8%20688.0%2C198.8%20689.1%2C200.8%20690.1%2C202.7%20691.2%2C204.5%20692.3%2C206.4%20693.4%2C208.2%20694.4%2C209.9%20695.5%2C211.6%20696.6%2C213.3%20697.7%2C214.9%20698.8%2C216.4%20699.8%2C218.0%20700.9%2C219.5%20702.0%2C220.9%20703.1%2C222.3%20704.2%2C223.7%20705.2%2C225.0%20706.3%2C226.2%20707.4%2C227.5%20708.5%2C228.6%20709.6%2C229.8%20710.6%2C230.9%20711.7%2C231.9%20712.8%2C232.9%20713.9%2C233.9%20714.9%2C234.8%20716.0%2C235.7%20717.1%2C236.6%20718.2%2C237.4%20719.3%2C238.1%20720.3%2C238.8%20721.4%2C239.5%20722.5%2C240.1%20723.6%2C240.7%20724.7%2C241.2%20725.7%2C241.7%20726.8%2C242.2%20727.9%2C242.6%20729.0%2C243.0%20730.0%2C243.3%20731.1%2C243.6%20732.2%2C243.8%20733.3%2C244.0%20734.4%2C244.1%20735.4%2C244.2%20736.5%2C244.3%20737.6%2C244.3%20738.7%2C244.3%20739.8%2C244.2%20740.8%2C244.1%20741.9%2C244.0%20743.0%2C243.8%20744.1%2C243.6%20745.2%2C243.3%20746.2%2C243.0%20747.3%2C242.6%20748.4%2C242.2%20749.5%2C241.7%20750.5%2C241.2%20751.6%2C240.7%20752.7%2C240.1%20753.8%2C239.5%20754.9%2C238.8%20755.9%2C238.1%20757.0%2C237.4%20758.1%2C236.6%20759.2%2C235.7%20760.3%2C234.8%20761.3%2C233.9%20762.4%2C232.9%20763.5%2C231.9%20764.6%2C230.9%20765.6%2C229.8%20766.7%2C228.6%20767.8%2C227.5%20768.9%2C226.2%20770.0%2C225.0%20771.0%2C223.7%20772.1%2C222.3%20773.2%2C220.9%20774.3%2C219.5%20775.4%2C218.0%20776.4%2C216.4%20777.5%2C214.9%20778.6%2C213.3%20779.7%2C211.6%20780.8%2C209.9%20781.8%2C208.2%20782.9%2C206.4%20784.0%2C204.5%20785.1%2C202.7%20786.1%2C200.8%20787.2%2C198.8%20788.3%2C196.8%20789.4%2C194.7%20790.5%2C192.7%20791.5%2C190.5%20792.6%2C188.4%20793.7%2C186.1%20794.8%2C183.9%20795.9%2C181.6%20796.9%2C179.2%20798.0%2C176.8%20799.1%2C174.4%20800.2%2C171.9%20801.2%2C169.4%20802.3%2C166.9%20803.4%2C164.2%20804.5%2C161.6%20805.6%2C158.9%20806.6%2C156.2%20807.7%2C153.4%20808.8%2C150.6%20809.9%2C147.7%20811.0%2C144.8%20812.0%2C141.9%20813.1%2C138.9%20814.2%2C135.8%20815.3%2C132.8%20816.4%2C129.6%20817.4%2C126.5%20818.5%2C123.3%20819.6%2C120.0%20820.7%2C116.7%20821.7%2C113.4%20822.8%2C110.0%20823.9%2C106.6%20825.0%2C103.1%20826.1%2C99.6%20827.1%2C96.1%20828.2%2C92.5%20829.3%2C88.8%20830.4%2C85.2%20831.5%2C81.4%20832.5%2C77.7%20833.6%2C73.9%20834.7%2C70.0%20835.8%2C66.1%20836.8%2C62.2%20837.9%2C58.2%20839.0%2C54.2%20840.1%2C50.1%20841.2%2C46.0%20842.2%2C41.8%20843.3%2C37.6%20844.4%2C33.4%20845.5%2C29.1%20846.6%2C24.8%20847.6%2C20.4%20848.7%2C16.0%20849.8%2C11.6%20850.9%2C7.1%20852.0%2C2.5%20853.0%2C-2.1%20854.1%2C-6.7%20855.2%2C-11.4%20856.3%2C-16.1%20857.3%2C-20.8%20858.4%2C-25.6%20859.5%2C-30.5%20860.6%2C-35.4%20861.7%2C-40.3%20862.7%2C-45.3%20863.8%2C-50.3%20864.9%2C-55.3%20866.0%2C-60.4%20867.1%2C-65.6%20868.1%2C-70.8%20869.2%2C-76.0%20870.3%2C-81.3%20871.4%2C-86.6%20872.4%2C-91.9%20873.5%2C-97.4%20874.6%2C-102.8%20875.7%2C-108.3%20876.8%2C-113.8%20877.8%2C-119.4%20878.9%2C-125.0%20880.0%2C-130.7%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-130",
    case_id: "MATH 11.130",
    title: "Derivative with zeros at the endpoints of an interval",
    subsection: "11.4",
    context:
      "The graph shows $f'$. Decide TRUE or FALSE for each claim about $f$.",
    statements: [
      "The function $f$ is decreasing on $(0,4)$.",
      "The function $f$ has a local maximum at $x=0$.",
      "The function $f$ has a local minimum at $x=4$.",
      "The function $f$ has an inflection point at $x=2$.",
      "The function $f$ is concave up on $(2,4)$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

On $(0,4)$, $f'$ is below the axis, so $f$ is decreasing.

The statement is True.`,
      `**B.** → True

At $x=0$, $f'$ changes from positive (left of $0$) to negative → local max of $f$.

The statement is True.`,
      `**C.** → True

At $x=4$, $f'$ changes from negative to positive → local min of $f$.

The statement is True.`,
      `**D.** → True

At $x=2$, $f'$ has a trough, so $f''$ changes sign → inflection of $f$.

The statement is True.`,
      `**E.** → True

On $(2,4)$, $f'$ is rising, so $f''>0$ and $f$ is concave up.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 130,
    solution_overview:
      "Negative $f'$ on $(0,4)$ means decreasing; trough of $f'$ at $x=2$ is an inflection.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22256.7%22%20x2%3D%22540.0%22%20y2%3D%22256.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22170.0%22%20x2%3D%22540.0%22%20y2%3D%22170.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2283.3%22%20x2%3D%22540.0%22%20y2%3D%2283.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22170.0%22%20x2%3D%22540.0%22%20y2%3D%22170.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22256.7%22%20x2%3D%2248.0%22%20y2%3D%22256.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22260.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22170.0%22%20x2%3D%2248.0%22%20y2%3D%22170.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22173.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2283.3%22%20x2%3D%2248.0%22%20y2%3D%2283.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2286.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C61.7%2050.2%2C65.2%2052.5%2C68.7%2054.7%2C72.2%2056.9%2C75.6%2059.2%2C79.0%2061.4%2C82.4%2063.7%2C85.7%2065.9%2C89.0%2068.1%2C92.3%2070.4%2C95.5%2072.6%2C98.7%2074.8%2C101.9%2077.1%2C105.0%2079.3%2C108.1%2081.5%2C111.2%2083.8%2C114.3%2086.0%2C117.3%2088.3%2C120.3%2090.5%2C123.2%2092.7%2C126.1%2095.0%2C129.0%2097.2%2C131.9%2099.4%2C134.7%20101.7%2C137.5%20103.9%2C140.2%20106.1%2C143.0%20108.4%2C145.6%20110.6%2C148.3%20112.9%2C150.9%20115.1%2C153.5%20117.3%2C156.1%20119.6%2C158.6%20121.8%2C161.1%20124.0%2C163.6%20126.3%2C166.0%20128.5%2C168.4%20130.7%2C170.8%20133.0%2C173.1%20135.2%2C175.4%20137.5%2C177.7%20139.7%2C179.9%20141.9%2C182.1%20144.2%2C184.3%20146.4%2C186.5%20148.6%2C188.6%20150.9%2C190.7%20153.1%2C192.7%20155.3%2C194.7%20157.6%2C196.7%20159.8%2C198.7%20162.1%2C200.6%20164.3%2C202.5%20166.5%2C204.3%20168.8%2C206.1%20171.0%2C207.9%20173.2%2C209.7%20175.5%2C211.4%20177.7%2C213.1%20179.9%2C214.7%20182.2%2C216.4%20184.4%2C218.0%20186.7%2C219.5%20188.9%2C221.1%20191.1%2C222.6%20193.4%2C224.0%20195.6%2C225.5%20197.8%2C226.9%20200.1%2C228.2%20202.3%2C229.6%20204.5%2C230.9%20206.8%2C232.2%20209.0%2C233.4%20211.3%2C234.6%20213.5%2C235.8%20215.7%2C236.9%20218.0%2C238.0%20220.2%2C239.1%20222.4%2C240.2%20224.7%2C241.2%20226.9%2C242.2%20229.1%2C243.1%20231.4%2C244.0%20233.6%2C244.9%20235.9%2C245.8%20238.1%2C246.6%20240.3%2C247.4%20242.6%2C248.1%20244.8%2C248.9%20247.0%2C249.6%20249.3%2C250.2%20251.5%2C250.8%20253.7%2C251.4%20256.0%2C252.0%20258.2%2C252.5%20260.5%2C253.0%20262.7%2C253.5%20264.9%2C253.9%20267.2%2C254.3%20269.4%2C254.7%20271.6%2C255.1%20273.9%2C255.4%20276.1%2C255.6%20278.3%2C255.9%20280.6%2C256.1%20282.8%2C256.3%20285.1%2C256.4%20287.3%2C256.5%20289.5%2C256.6%20291.8%2C256.7%20294.0%2C256.7%20296.2%2C256.7%20298.5%2C256.6%20300.7%2C256.5%20302.9%2C256.4%20305.2%2C256.3%20307.4%2C256.1%20309.7%2C255.9%20311.9%2C255.6%20314.1%2C255.4%20316.4%2C255.1%20318.6%2C254.7%20320.8%2C254.3%20323.1%2C253.9%20325.3%2C253.5%20327.5%2C253.0%20329.8%2C252.5%20332.0%2C252.0%20334.3%2C251.4%20336.5%2C250.8%20338.7%2C250.2%20341.0%2C249.6%20343.2%2C248.9%20345.4%2C248.1%20347.7%2C247.4%20349.9%2C246.6%20352.1%2C245.8%20354.4%2C244.9%20356.6%2C244.0%20358.9%2C243.1%20361.1%2C242.2%20363.3%2C241.2%20365.6%2C240.2%20367.8%2C239.1%20370.0%2C238.0%20372.3%2C236.9%20374.5%2C235.8%20376.7%2C234.6%20379.0%2C233.4%20381.2%2C232.2%20383.5%2C230.9%20385.7%2C229.6%20387.9%2C228.2%20390.2%2C226.9%20392.4%2C225.5%20394.6%2C224.0%20396.9%2C222.6%20399.1%2C221.1%20401.3%2C219.5%20403.6%2C218.0%20405.8%2C216.4%20408.1%2C214.7%20410.3%2C213.1%20412.5%2C211.4%20414.8%2C209.7%20417.0%2C207.9%20419.2%2C206.1%20421.5%2C204.3%20423.7%2C202.5%20425.9%2C200.6%20428.2%2C198.7%20430.4%2C196.7%20432.7%2C194.7%20434.9%2C192.7%20437.1%2C190.7%20439.4%2C188.6%20441.6%2C186.5%20443.8%2C184.3%20446.1%2C182.1%20448.3%2C179.9%20450.5%2C177.7%20452.8%2C175.4%20455.0%2C173.1%20457.3%2C170.8%20459.5%2C168.4%20461.7%2C166.0%20464.0%2C163.6%20466.2%2C161.1%20468.4%2C158.6%20470.7%2C156.1%20472.9%2C153.5%20475.1%2C150.9%20477.4%2C148.3%20479.6%2C145.6%20481.9%2C143.0%20484.1%2C140.2%20486.3%2C137.5%20488.6%2C134.7%20490.8%2C131.9%20493.0%2C129.0%20495.3%2C126.1%20497.5%2C123.2%20499.7%2C120.3%20502.0%2C117.3%20504.2%2C114.3%20506.5%2C111.2%20508.7%2C108.1%20510.9%2C105.0%20513.2%2C101.9%20515.4%2C98.7%20517.6%2C95.5%20519.9%2C92.3%20522.1%2C89.0%20524.3%2C85.7%20526.6%2C82.4%20528.8%2C79.0%20531.1%2C75.6%20533.3%2C72.2%20535.5%2C68.7%20537.8%2C65.2%20540.0%2C61.7%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22170.0%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22170.0%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%22256.7%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-131",
    case_id: "MATH 11.131",
    title: "Concavity read from whether f′ is rising or falling",
    subsection: "11.4",
    context:
      "Again the graph shows $f'$ (the same downward-opening parabola with zeros at $1$ and $5$ and peak at $x=3$). Decide TRUE or FALSE.",
    statements: [
      "The function $f$ is concave up on $(0,3)$.",
      "The function $f$ is concave down on $(3,6)$.",
      "The function $f$ is concave up at $x=5$.",
      "Because $f'(5)=0$, the function $f$ must be concave down at $x=5$.",
      "The steepest positive slope of $f$ in the window occurs at $x=3$."
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

On $(0,3)$ the graph of $f'$ is rising, so $f''>0$ and $f$ is concave up.

The statement is True.`,
      `**B.** → True

On $(3,6)$ the graph of $f'$ is falling, so $f''<0$ and $f$ is concave down.

The statement is True.`,
      `**C.** → False

At $x=5$, $f'$ is still falling (after the peak at $3$), so $f$ is concave down at $x=5$, not concave up.

The statement is False.`,
      `**D.** → False

$f'(5)=0$ only says the tangent to $f$ is horizontal. Concavity is about $f''$, read from whether $f'$ is rising or falling — a separate question from $f'=0$.

The statement is False.`,
      `**E.** → True

The largest positive value of $f'$ in the window is the peak at $x=3$, so that is where $f$ has its steepest upward slope.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 131,
    solution_overview:
      "Rising $f'$ ⇒ concave up; falling $f'$ ⇒ concave down; max of $f'$ ⇒ steepest climb of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22252.7%22%20x2%3D%22540.0%22%20y2%3D%22252.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22205.5%22%20x2%3D%22540.0%22%20y2%3D%22205.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22110.9%22%20x2%3D%22540.0%22%20y2%3D%22110.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2263.6%22%20x2%3D%22540.0%22%20y2%3D%2263.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22252.7%22%20x2%3D%2248.0%22%20y2%3D%22252.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22256.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22205.5%22%20x2%3D%2248.0%22%20y2%3D%22205.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22209.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22158.2%22%20x2%3D%2248.0%22%20y2%3D%22158.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22161.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22110.9%22%20x2%3D%2248.0%22%20y2%3D%22110.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22114.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2263.6%22%20x2%3D%2248.0%22%20y2%3D%2263.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2267.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C276.4%2050.2%2C272.5%2052.5%2C268.7%2054.7%2C264.9%2056.9%2C261.2%2059.2%2C257.5%2061.4%2C253.8%2063.7%2C250.2%2065.9%2C246.5%2068.1%2C243.0%2070.4%2C239.4%2072.6%2C235.9%2074.8%2C232.5%2077.1%2C229.1%2079.3%2C225.7%2081.5%2C222.3%2083.8%2C219.0%2086.0%2C215.7%2088.3%2C212.4%2090.5%2C209.2%2092.7%2C206.0%2095.0%2C202.9%2097.2%2C199.8%2099.4%2C196.7%20101.7%2C193.7%20103.9%2C190.7%20106.1%2C187.7%20108.4%2C184.8%20110.6%2C181.8%20112.9%2C179.0%20115.1%2C176.2%20117.3%2C173.4%20119.6%2C170.6%20121.8%2C167.9%20124.0%2C165.2%20126.3%2C162.5%20128.5%2C159.9%20130.7%2C157.3%20133.0%2C154.8%20135.2%2C152.3%20137.5%2C149.8%20139.7%2C147.3%20141.9%2C144.9%20144.2%2C142.6%20146.4%2C140.2%20148.6%2C137.9%20150.9%2C135.6%20153.1%2C133.4%20155.3%2C131.2%20157.6%2C129.1%20159.8%2C126.9%20162.1%2C124.8%20164.3%2C122.8%20166.5%2C120.8%20168.8%2C118.8%20171.0%2C116.8%20173.2%2C114.9%20175.5%2C113.0%20177.7%2C111.2%20179.9%2C109.4%20182.2%2C107.6%20184.4%2C105.8%20186.7%2C104.1%20188.9%2C102.5%20191.1%2C100.8%20193.4%2C99.2%20195.6%2C97.7%20197.8%2C96.1%20200.1%2C94.6%20202.3%2C93.2%20204.5%2C91.8%20206.8%2C90.4%20209.0%2C89.0%20211.3%2C87.7%20213.5%2C86.4%20215.7%2C85.2%20218.0%2C84.0%20220.2%2C82.8%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.4%20231.4%2C77.4%20233.6%2C76.5%20235.9%2C75.5%20238.1%2C74.6%20240.3%2C73.8%20242.6%2C72.9%20244.8%2C72.1%20247.0%2C71.4%20249.3%2C70.7%20251.5%2C70.0%20253.7%2C69.3%20256.0%2C68.7%20258.2%2C68.1%20260.5%2C67.6%20262.7%2C67.1%20264.9%2C66.6%20267.2%2C66.2%20269.4%2C65.8%20271.6%2C65.4%20273.9%2C65.1%20276.1%2C64.8%20278.3%2C64.5%20280.6%2C64.3%20282.8%2C64.1%20285.1%2C63.9%20287.3%2C63.8%20289.5%2C63.7%20291.8%2C63.7%20294.0%2C63.6%20296.2%2C63.7%20298.5%2C63.7%20300.7%2C63.8%20302.9%2C63.9%20305.2%2C64.1%20307.4%2C64.3%20309.7%2C64.5%20311.9%2C64.8%20314.1%2C65.1%20316.4%2C65.4%20318.6%2C65.8%20320.8%2C66.2%20323.1%2C66.6%20325.3%2C67.1%20327.5%2C67.6%20329.8%2C68.1%20332.0%2C68.7%20334.3%2C69.3%20336.5%2C70.0%20338.7%2C70.7%20341.0%2C71.4%20343.2%2C72.1%20345.4%2C72.9%20347.7%2C73.8%20349.9%2C74.6%20352.1%2C75.5%20354.4%2C76.5%20356.6%2C77.4%20358.9%2C78.4%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.8%20370.0%2C84.0%20372.3%2C85.2%20374.5%2C86.4%20376.7%2C87.7%20379.0%2C89.0%20381.2%2C90.4%20383.5%2C91.8%20385.7%2C93.2%20387.9%2C94.6%20390.2%2C96.1%20392.4%2C97.7%20394.6%2C99.2%20396.9%2C100.8%20399.1%2C102.5%20401.3%2C104.1%20403.6%2C105.8%20405.8%2C107.6%20408.1%2C109.4%20410.3%2C111.2%20412.5%2C113.0%20414.8%2C114.9%20417.0%2C116.8%20419.2%2C118.8%20421.5%2C120.8%20423.7%2C122.8%20425.9%2C124.8%20428.2%2C126.9%20430.4%2C129.1%20432.7%2C131.2%20434.9%2C133.4%20437.1%2C135.6%20439.4%2C137.9%20441.6%2C140.2%20443.8%2C142.6%20446.1%2C144.9%20448.3%2C147.3%20450.5%2C149.8%20452.8%2C152.3%20455.0%2C154.8%20457.3%2C157.3%20459.5%2C159.9%20461.7%2C162.5%20464.0%2C165.2%20466.2%2C167.9%20468.4%2C170.6%20470.7%2C173.4%20472.9%2C176.2%20475.1%2C179.0%20477.4%2C181.8%20479.6%2C184.8%20481.9%2C187.7%20484.1%2C190.7%20486.3%2C193.7%20488.6%2C196.7%20490.8%2C199.8%20493.0%2C202.9%20495.3%2C206.0%20497.5%2C209.2%20499.7%2C212.4%20502.0%2C215.7%20504.2%2C219.0%20506.5%2C222.3%20508.7%2C225.7%20510.9%2C229.1%20513.2%2C232.5%20515.4%2C235.9%20517.6%2C239.4%20519.9%2C243.0%20522.1%2C246.5%20524.3%2C250.2%20526.6%2C253.8%20528.8%2C257.5%20531.1%2C261.2%20533.3%2C264.9%20535.5%2C268.7%20537.8%2C272.5%20540.0%2C276.4%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%2263.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-132",
    case_id: "MATH 11.132",
    title: "Unlabeled triple: identify f′ by its two zeros",
    subsection: "11.4",
    context:
      "Graphs A–C are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE.",
    statements: [
      "Graph A is $f'$.",
      "Graph B is $f$.",
      "Graph C is $f''$.",
      "Graph C is $f$.",
      "Graph B has a local minimum at the left-hand zero of Graph A."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Graph A is the downward parabola with two zeros → $f'$.

The statement is True.`,
      `**B.** → True

Graph B shows trough-then-peak behaviour matching the sign pattern of Graph A → $f$.

The statement is True.`,
      `**C.** → True

Graph C is linear → $f''$.

The statement is True.`,
      `**D.** → False

A line is not $f$; $f$ is the curved Graph B.

The statement is False.`,
      `**E.** → True

The left zero of $f'$ (Graph A) is where $f'$ changes $-$ to $+$, so $f$ (Graph B) has a local minimum there.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 132,
    solution_overview:
      "Parabola with two zeros = $f'$; cubic shape = $f$; line = $f''$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2299.5%22%20y1%3D%2236.0%22%20x2%3D%2299.5%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.9%22%20y1%3D%2236.0%22%20x2%3D%22146.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22194.4%22%20y1%3D%2236.0%22%20x2%3D%22194.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22241.9%22%20y1%3D%2236.0%22%20x2%3D%22241.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22254.8%22%20x2%3D%22289.3%22%20y2%3D%22254.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22129.8%22%20x2%3D%22289.3%22%20y2%3D%22129.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2267.2%22%20x2%3D%22289.3%22%20y2%3D%2267.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22129.8%22%20x2%3D%22289.3%22%20y2%3D%22129.8%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2299.5%22%20y1%3D%22286.0%22%20x2%3D%2299.5%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2299.5%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.9%22%20y1%3D%22286.0%22%20x2%3D%22146.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22194.4%22%20y1%3D%22286.0%22%20x2%3D%22194.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22194.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22241.9%22%20y1%3D%22286.0%22%20x2%3D%22241.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22241.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22254.8%22%20x2%3D%2252.0%22%20y2%3D%22254.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22258.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22129.8%22%20x2%3D%2252.0%22%20y2%3D%22129.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22133.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2267.2%22%20x2%3D%2252.0%22%20y2%3D%2267.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%2270.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C254.8%2053.1%2C251.2%2054.2%2C247.7%2055.2%2C244.2%2056.3%2C240.8%2057.4%2C237.4%2058.5%2C234.0%2059.6%2C230.7%2060.6%2C227.4%2061.7%2C224.1%2062.8%2C220.9%2063.9%2C217.6%2064.9%2C214.5%2066.0%2C211.3%2067.1%2C208.2%2068.2%2C205.1%2069.3%2C202.1%2070.3%2C199.0%2071.4%2C196.1%2072.5%2C193.1%2073.6%2C190.2%2074.7%2C187.3%2075.7%2C184.4%2076.8%2C181.6%2077.9%2C178.8%2079.0%2C176.1%2080.0%2C173.3%2081.1%2C170.6%2082.2%2C168.0%2083.3%2C165.3%2084.4%2C162.7%2085.4%2C160.2%2086.5%2C157.6%2087.6%2C155.1%2088.7%2C152.7%2089.8%2C150.2%2090.8%2C147.8%2091.9%2C145.5%2093.0%2C143.1%2094.1%2C140.8%2095.2%2C138.5%2096.2%2C136.3%2097.3%2C134.1%2098.4%2C131.9%2099.5%2C129.8%20100.5%2C127.6%20101.6%2C125.6%20102.7%2C123.5%20103.8%2C121.5%20104.9%2C119.5%20105.9%2C117.5%20107.0%2C115.6%20108.1%2C113.7%20109.2%2C111.9%20110.3%2C110.1%20111.3%2C108.3%20112.4%2C106.5%20113.5%2C104.8%20114.6%2C103.1%20115.6%2C101.4%20116.7%2C99.8%20117.8%2C98.2%20118.9%2C96.6%20120.0%2C95.1%20121.0%2C93.6%20122.1%2C92.1%20123.2%2C90.7%20124.3%2C89.3%20125.4%2C87.9%20126.4%2C86.6%20127.5%2C85.3%20128.6%2C84.0%20129.7%2C82.7%20130.8%2C81.5%20131.8%2C80.4%20132.9%2C79.2%20134.0%2C78.1%20135.1%2C77.0%20136.1%2C76.0%20137.2%2C74.9%20138.3%2C74.0%20139.4%2C73.0%20140.5%2C72.1%20141.5%2C71.2%20142.6%2C70.3%20143.7%2C69.5%20144.8%2C68.7%20145.9%2C68.0%20146.9%2C67.2%20148.0%2C66.6%20149.1%2C65.9%20150.2%2C65.3%20151.2%2C64.7%20152.3%2C64.1%20153.4%2C63.6%20154.5%2C63.1%20155.6%2C62.6%20156.6%2C62.2%20157.7%2C61.8%20158.8%2C61.4%20159.9%2C61.1%20161.0%2C60.7%20162.0%2C60.5%20163.1%2C60.2%20164.2%2C60.0%20165.3%2C59.8%20166.4%2C59.7%20167.4%2C59.6%20168.5%2C59.5%20169.6%2C59.5%20170.7%2C59.4%20171.7%2C59.5%20172.8%2C59.5%20173.9%2C59.6%20175.0%2C59.7%20176.1%2C59.8%20177.1%2C60.0%20178.2%2C60.2%20179.3%2C60.5%20180.4%2C60.7%20181.5%2C61.1%20182.5%2C61.4%20183.6%2C61.8%20184.7%2C62.2%20185.8%2C62.6%20186.8%2C63.1%20187.9%2C63.6%20189.0%2C64.1%20190.1%2C64.7%20191.2%2C65.3%20192.2%2C65.9%20193.3%2C66.6%20194.4%2C67.2%20195.5%2C68.0%20196.6%2C68.7%20197.6%2C69.5%20198.7%2C70.3%20199.8%2C71.2%20200.9%2C72.1%20202.0%2C73.0%20203.0%2C74.0%20204.1%2C74.9%20205.2%2C76.0%20206.3%2C77.0%20207.3%2C78.1%20208.4%2C79.2%20209.5%2C80.4%20210.6%2C81.5%20211.7%2C82.7%20212.7%2C84.0%20213.8%2C85.3%20214.9%2C86.6%20216.0%2C87.9%20217.1%2C89.3%20218.1%2C90.7%20219.2%2C92.1%20220.3%2C93.6%20221.4%2C95.1%20222.4%2C96.6%20223.5%2C98.2%20224.6%2C99.8%20225.7%2C101.4%20226.8%2C103.1%20227.8%2C104.8%20228.9%2C106.5%20230.0%2C108.3%20231.1%2C110.1%20232.2%2C111.9%20233.2%2C113.7%20234.3%2C115.6%20235.4%2C117.5%20236.5%2C119.5%20237.6%2C121.5%20238.6%2C123.5%20239.7%2C125.6%20240.8%2C127.6%20241.9%2C129.8%20242.9%2C131.9%20244.0%2C134.1%20245.1%2C136.3%20246.2%2C138.5%20247.3%2C140.8%20248.3%2C143.1%20249.4%2C145.5%20250.5%2C147.8%20251.6%2C150.2%20252.7%2C152.7%20253.7%2C155.1%20254.8%2C157.6%20255.9%2C160.2%20257.0%2C162.7%20258.0%2C165.3%20259.1%2C168.0%20260.2%2C170.6%20261.3%2C173.3%20262.4%2C176.1%20263.4%2C178.8%20264.5%2C181.6%20265.6%2C184.4%20266.7%2C187.3%20267.8%2C190.2%20268.8%2C193.1%20269.9%2C196.1%20271.0%2C199.0%20272.1%2C202.1%20273.2%2C205.1%20274.2%2C208.2%20275.3%2C211.3%20276.4%2C214.5%20277.5%2C217.6%20278.5%2C220.9%20279.6%2C224.1%20280.7%2C227.4%20281.8%2C230.7%20282.9%2C234.0%20283.9%2C237.4%20285.0%2C240.8%20286.1%2C244.2%20287.2%2C247.7%20288.3%2C251.2%20289.3%2C254.8%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22394.8%22%20y1%3D%2236.0%22%20x2%3D%22394.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22442.3%22%20y1%3D%2236.0%22%20x2%3D%22442.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22489.7%22%20y1%3D%2236.0%22%20x2%3D%22489.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22537.2%22%20y1%3D%2236.0%22%20x2%3D%22537.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22202.7%22%20x2%3D%22584.7%22%20y2%3D%22202.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22119.3%22%20x2%3D%22584.7%22%20y2%3D%22119.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%2236.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22119.3%22%20x2%3D%22584.7%22%20y2%3D%22119.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22394.8%22%20y1%3D%22286.0%22%20x2%3D%22394.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22394.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22442.3%22%20y1%3D%22286.0%22%20x2%3D%22442.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22442.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22489.7%22%20y1%3D%22286.0%22%20x2%3D%22489.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22489.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22537.2%22%20y1%3D%22286.0%22%20x2%3D%22537.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22537.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22202.7%22%20x2%3D%22347.3%22%20y2%3D%22202.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22206.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22119.3%22%20x2%3D%22347.3%22%20y2%3D%22119.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22122.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%2236.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2239.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C119.3%20348.4%2C121.2%20349.5%2C123.0%20350.6%2C124.8%20351.6%2C126.5%20352.7%2C128.1%20353.8%2C129.7%20354.9%2C131.3%20356.0%2C132.8%20357.0%2C134.3%20358.1%2C135.7%20359.2%2C137.0%20360.3%2C138.3%20361.4%2C139.6%20362.4%2C140.8%20363.5%2C142.0%20364.6%2C143.1%20365.7%2C144.2%20366.8%2C145.2%20367.8%2C146.2%20368.9%2C147.1%20370.0%2C148.0%20371.1%2C148.8%20372.1%2C149.7%20373.2%2C150.4%20374.3%2C151.1%20375.4%2C151.8%20376.5%2C152.5%20377.5%2C153.1%20378.6%2C153.6%20379.7%2C154.1%20380.8%2C154.6%20381.9%2C155.1%20382.9%2C155.5%20384.0%2C155.8%20385.1%2C156.2%20386.2%2C156.5%20387.2%2C156.7%20388.3%2C156.9%20389.4%2C157.1%20390.5%2C157.3%20391.6%2C157.4%20392.6%2C157.5%20393.7%2C157.5%20394.8%2C157.5%20395.9%2C157.5%20397.0%2C157.5%20398.0%2C157.4%20399.1%2C157.3%20400.2%2C157.1%20401.3%2C157.0%20402.4%2C156.8%20403.4%2C156.5%20404.5%2C156.3%20405.6%2C156.0%20406.7%2C155.7%20407.7%2C155.3%20408.8%2C155.0%20409.9%2C154.6%20411.0%2C154.2%20412.1%2C153.7%20413.1%2C153.3%20414.2%2C152.8%20415.3%2C152.3%20416.4%2C151.7%20417.5%2C151.2%20418.5%2C150.6%20419.6%2C150.0%20420.7%2C149.4%20421.8%2C148.7%20422.8%2C148.0%20423.9%2C147.4%20425.0%2C146.7%20426.1%2C145.9%20427.2%2C145.2%20428.2%2C144.4%20429.3%2C143.7%20430.4%2C142.9%20431.5%2C142.1%20432.6%2C141.2%20433.6%2C140.4%20434.7%2C139.6%20435.8%2C138.7%20436.9%2C137.8%20438.0%2C136.9%20439.0%2C136.0%20440.1%2C135.1%20441.2%2C134.2%20442.3%2C133.2%20443.3%2C132.3%20444.4%2C131.3%20445.5%2C130.3%20446.6%2C129.4%20447.7%2C128.4%20448.7%2C127.4%20449.8%2C126.4%20450.9%2C125.3%20452.0%2C124.3%20453.1%2C123.3%20454.1%2C122.3%20455.2%2C121.2%20456.3%2C120.2%20457.4%2C119.1%20458.4%2C118.1%20459.5%2C117.0%20460.6%2C116.0%20461.7%2C114.9%20462.8%2C113.8%20463.8%2C112.8%20464.9%2C111.7%20466.0%2C110.7%20467.1%2C109.6%20468.2%2C108.5%20469.2%2C107.5%20470.3%2C106.4%20471.4%2C105.3%20472.5%2C104.3%20473.6%2C103.2%20474.6%2C102.2%20475.7%2C101.1%20476.8%2C100.1%20477.9%2C99.0%20478.9%2C98.0%20480.0%2C97.0%20481.1%2C96.0%20482.2%2C94.9%20483.3%2C93.9%20484.3%2C92.9%20485.4%2C92.0%20486.5%2C91.0%20487.6%2C90.0%20488.7%2C89.0%20489.7%2C88.1%20490.8%2C87.1%20491.9%2C86.2%20493.0%2C85.3%20494.0%2C84.4%20495.1%2C83.5%20496.2%2C82.6%20497.3%2C81.7%20498.4%2C80.9%20499.4%2C80.1%20500.5%2C79.2%20501.6%2C78.4%20502.7%2C77.6%20503.8%2C76.9%20504.8%2C76.1%20505.9%2C75.4%20507.0%2C74.6%20508.1%2C73.9%20509.2%2C73.3%20510.2%2C72.6%20511.3%2C71.9%20512.4%2C71.3%20513.5%2C70.7%20514.5%2C70.1%20515.6%2C69.6%20516.7%2C69.0%20517.8%2C68.5%20518.9%2C68.0%20519.9%2C67.6%20521.0%2C67.1%20522.1%2C66.7%20523.2%2C66.3%20524.3%2C66.0%20525.3%2C65.6%20526.4%2C65.3%20527.5%2C65.0%20528.6%2C64.8%20529.6%2C64.5%20530.7%2C64.3%20531.8%2C64.2%20532.9%2C64.0%20534.0%2C63.9%20535.0%2C63.8%20536.1%2C63.8%20537.2%2C63.8%20538.3%2C63.8%20539.4%2C63.8%20540.4%2C63.9%20541.5%2C64.0%20542.6%2C64.2%20543.7%2C64.4%20544.8%2C64.6%20545.8%2C64.9%20546.9%2C65.1%20548.0%2C65.5%20549.1%2C65.8%20550.1%2C66.2%20551.2%2C66.7%20552.3%2C67.2%20553.4%2C67.7%20554.5%2C68.2%20555.5%2C68.8%20556.6%2C69.5%20557.7%2C70.2%20558.8%2C70.9%20559.9%2C71.7%20560.9%2C72.5%20562.0%2C73.3%20563.1%2C74.2%20564.2%2C75.1%20565.2%2C76.1%20566.3%2C77.1%20567.4%2C78.2%20568.5%2C79.3%20569.6%2C80.5%20570.6%2C81.7%20571.7%2C83.0%20572.8%2C84.3%20573.9%2C85.6%20575.0%2C87.0%20576.0%2C88.5%20577.1%2C90.0%20578.2%2C91.6%20579.3%2C93.2%20580.4%2C94.8%20581.4%2C96.5%20582.5%2C98.3%20583.6%2C100.1%20584.7%2C102.0%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22690.1%22%20y1%3D%2236.0%22%20x2%3D%22690.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22737.6%22%20y1%3D%2236.0%22%20x2%3D%22737.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22785.1%22%20y1%3D%2236.0%22%20x2%3D%22785.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22832.5%22%20y1%3D%2236.0%22%20x2%3D%22832.5%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22261.0%22%20x2%3D%22880.0%22%20y2%3D%22261.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2261.0%22%20x2%3D%22880.0%22%20y2%3D%2261.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22690.1%22%20y1%3D%22286.0%22%20x2%3D%22690.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22690.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22737.6%22%20y1%3D%22286.0%22%20x2%3D%22737.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22737.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22785.1%22%20y1%3D%22286.0%22%20x2%3D%22785.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22785.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22832.5%22%20y1%3D%22286.0%22%20x2%3D%22832.5%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22832.5%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22261.0%22%20x2%3D%22642.7%22%20y2%3D%22261.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22264.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22161.0%22%20x2%3D%22642.7%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2261.0%22%20x2%3D%22642.7%22%20y2%3D%2261.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2264.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C36.0%20643.7%2C37.1%20644.8%2C38.3%20645.9%2C39.4%20647.0%2C40.5%20648.1%2C41.7%20649.1%2C42.8%20650.2%2C44.0%20651.3%2C45.1%20652.4%2C46.2%20653.5%2C47.4%20654.5%2C48.5%20655.6%2C49.6%20656.7%2C50.8%20657.8%2C51.9%20658.8%2C53.0%20659.9%2C54.2%20661.0%2C55.3%20662.1%2C56.5%20663.2%2C57.6%20664.2%2C58.7%20665.3%2C59.9%20666.4%2C61.0%20667.5%2C62.1%20668.6%2C63.3%20669.6%2C64.4%20670.7%2C65.5%20671.8%2C66.7%20672.9%2C67.8%20674.0%2C69.0%20675.0%2C70.1%20676.1%2C71.2%20677.2%2C72.4%20678.3%2C73.5%20679.3%2C74.6%20680.4%2C75.8%20681.5%2C76.9%20682.6%2C78.0%20683.7%2C79.2%20684.7%2C80.3%20685.8%2C81.5%20686.9%2C82.6%20688.0%2C83.7%20689.1%2C84.9%20690.1%2C86.0%20691.2%2C87.1%20692.3%2C88.3%20693.4%2C89.4%20694.4%2C90.5%20695.5%2C91.7%20696.6%2C92.8%20697.7%2C94.0%20698.8%2C95.1%20699.8%2C96.2%20700.9%2C97.4%20702.0%2C98.5%20703.1%2C99.6%20704.2%2C100.8%20705.2%2C101.9%20706.3%2C103.0%20707.4%2C104.2%20708.5%2C105.3%20709.6%2C106.5%20710.6%2C107.6%20711.7%2C108.7%20712.8%2C109.9%20713.9%2C111.0%20714.9%2C112.1%20716.0%2C113.3%20717.1%2C114.4%20718.2%2C115.5%20719.3%2C116.7%20720.3%2C117.8%20721.4%2C119.0%20722.5%2C120.1%20723.6%2C121.2%20724.7%2C122.4%20725.7%2C123.5%20726.8%2C124.6%20727.9%2C125.8%20729.0%2C126.9%20730.0%2C128.0%20731.1%2C129.2%20732.2%2C130.3%20733.3%2C131.5%20734.4%2C132.6%20735.4%2C133.7%20736.5%2C134.9%20737.6%2C136.0%20738.7%2C137.1%20739.8%2C138.3%20740.8%2C139.4%20741.9%2C140.5%20743.0%2C141.7%20744.1%2C142.8%20745.2%2C144.0%20746.2%2C145.1%20747.3%2C146.2%20748.4%2C147.4%20749.5%2C148.5%20750.5%2C149.6%20751.6%2C150.8%20752.7%2C151.9%20753.8%2C153.0%20754.9%2C154.2%20755.9%2C155.3%20757.0%2C156.5%20758.1%2C157.6%20759.2%2C158.7%20760.3%2C159.9%20761.3%2C161.0%20762.4%2C162.1%20763.5%2C163.3%20764.6%2C164.4%20765.6%2C165.5%20766.7%2C166.7%20767.8%2C167.8%20768.9%2C169.0%20770.0%2C170.1%20771.0%2C171.2%20772.1%2C172.4%20773.2%2C173.5%20774.3%2C174.6%20775.4%2C175.8%20776.4%2C176.9%20777.5%2C178.0%20778.6%2C179.2%20779.7%2C180.3%20780.8%2C181.5%20781.8%2C182.6%20782.9%2C183.7%20784.0%2C184.9%20785.1%2C186.0%20786.1%2C187.1%20787.2%2C188.3%20788.3%2C189.4%20789.4%2C190.5%20790.5%2C191.7%20791.5%2C192.8%20792.6%2C194.0%20793.7%2C195.1%20794.8%2C196.2%20795.9%2C197.4%20796.9%2C198.5%20798.0%2C199.6%20799.1%2C200.8%20800.2%2C201.9%20801.2%2C203.0%20802.3%2C204.2%20803.4%2C205.3%20804.5%2C206.5%20805.6%2C207.6%20806.6%2C208.7%20807.7%2C209.9%20808.8%2C211.0%20809.9%2C212.1%20811.0%2C213.3%20812.0%2C214.4%20813.1%2C215.5%20814.2%2C216.7%20815.3%2C217.8%20816.4%2C219.0%20817.4%2C220.1%20818.5%2C221.2%20819.6%2C222.4%20820.7%2C223.5%20821.7%2C224.6%20822.8%2C225.8%20823.9%2C226.9%20825.0%2C228.0%20826.1%2C229.2%20827.1%2C230.3%20828.2%2C231.5%20829.3%2C232.6%20830.4%2C233.7%20831.5%2C234.9%20832.5%2C236.0%20833.6%2C237.1%20834.7%2C238.3%20835.8%2C239.4%20836.8%2C240.5%20837.9%2C241.7%20839.0%2C242.8%20840.1%2C244.0%20841.2%2C245.1%20842.2%2C246.2%20843.3%2C247.4%20844.4%2C248.5%20845.5%2C249.6%20846.6%2C250.8%20847.6%2C251.9%20848.7%2C253.0%20849.8%2C254.2%20850.9%2C255.3%20852.0%2C256.5%20853.0%2C257.6%20854.1%2C258.7%20855.2%2C259.9%20856.3%2C261.0%20857.3%2C262.1%20858.4%2C263.3%20859.5%2C264.4%20860.6%2C265.5%20861.7%2C266.7%20862.7%2C267.8%20863.8%2C269.0%20864.9%2C270.1%20866.0%2C271.2%20867.1%2C272.4%20868.1%2C273.5%20869.2%2C274.6%20870.3%2C275.8%20871.4%2C276.9%20872.4%2C278.0%20873.5%2C279.2%20874.6%2C280.3%20875.7%2C281.5%20876.8%2C282.6%20877.8%2C283.7%20878.9%2C284.9%20880.0%2C286.0%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-133",
    case_id: "MATH 11.133",
    title: "Common traps when reading a graph of f′",
    subsection: "11.4",
    context:
      "The graph shows $f'$ (zeros at $1$ and $5$, peak at $(3,4)$). Several tempting claims are false. Decide TRUE or FALSE.",
    statements: [
      "Because $f'$ has a maximum at $x=3$, the function $f$ has a maximum at $x=3$.",
      "Because $f'(1)=0$, the point $x=1$ is an inflection point of $f$.",
      "The function $f$ is increasing on $(0,1)$.",
      "The function $f$ changes from concave up to concave down at $x=3$.",
      "On $(1,5)$ the derivative $f'$ is positive, so $f$ is increasing there."
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

A maximum of $f'$ means $f$ has an inflection (steepest climb), not a maximum of $f$. At $x=3$ one has $f'(3)=4\\neq 0$, so $f$ is still rising.

The statement is False.`,
      `**B.** → False

$f'(1)=0$ with a $-$ to $+$ sign change is a local minimum of $f$, not an inflection. Inflection tracks extrema of $f'$, not zeros of $f'$.

The statement is False.`,
      `**C.** → False

On $(0,1)$, $f'$ is negative, so $f$ is decreasing — not increasing.

The statement is False.`,
      `**D.** → True

At the peak of $f'$ ($x=3$), $f'$ changes from rising to falling, so concavity of $f$ changes from up to down.

The statement is True.`,
      `**E.** → True

Yes: $f'>0$ on $(1,5)$ means $f$ is increasing on that interval.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 133,
    solution_overview:
      "Do not confuse extrema of $f'$ with extrema of $f$; zeros of $f'$ are extrema of $f$ when the sign changes.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22252.7%22%20x2%3D%22540.0%22%20y2%3D%22252.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22205.5%22%20x2%3D%22540.0%22%20y2%3D%22205.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22110.9%22%20x2%3D%22540.0%22%20y2%3D%22110.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2263.6%22%20x2%3D%22540.0%22%20y2%3D%2263.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22252.7%22%20x2%3D%2248.0%22%20y2%3D%22252.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22256.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22205.5%22%20x2%3D%2248.0%22%20y2%3D%22205.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22209.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22158.2%22%20x2%3D%2248.0%22%20y2%3D%22158.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22161.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22110.9%22%20x2%3D%2248.0%22%20y2%3D%22110.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22114.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2263.6%22%20x2%3D%2248.0%22%20y2%3D%2263.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2267.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C276.4%2050.2%2C272.5%2052.5%2C268.7%2054.7%2C264.9%2056.9%2C261.2%2059.2%2C257.5%2061.4%2C253.8%2063.7%2C250.2%2065.9%2C246.5%2068.1%2C243.0%2070.4%2C239.4%2072.6%2C235.9%2074.8%2C232.5%2077.1%2C229.1%2079.3%2C225.7%2081.5%2C222.3%2083.8%2C219.0%2086.0%2C215.7%2088.3%2C212.4%2090.5%2C209.2%2092.7%2C206.0%2095.0%2C202.9%2097.2%2C199.8%2099.4%2C196.7%20101.7%2C193.7%20103.9%2C190.7%20106.1%2C187.7%20108.4%2C184.8%20110.6%2C181.8%20112.9%2C179.0%20115.1%2C176.2%20117.3%2C173.4%20119.6%2C170.6%20121.8%2C167.9%20124.0%2C165.2%20126.3%2C162.5%20128.5%2C159.9%20130.7%2C157.3%20133.0%2C154.8%20135.2%2C152.3%20137.5%2C149.8%20139.7%2C147.3%20141.9%2C144.9%20144.2%2C142.6%20146.4%2C140.2%20148.6%2C137.9%20150.9%2C135.6%20153.1%2C133.4%20155.3%2C131.2%20157.6%2C129.1%20159.8%2C126.9%20162.1%2C124.8%20164.3%2C122.8%20166.5%2C120.8%20168.8%2C118.8%20171.0%2C116.8%20173.2%2C114.9%20175.5%2C113.0%20177.7%2C111.2%20179.9%2C109.4%20182.2%2C107.6%20184.4%2C105.8%20186.7%2C104.1%20188.9%2C102.5%20191.1%2C100.8%20193.4%2C99.2%20195.6%2C97.7%20197.8%2C96.1%20200.1%2C94.6%20202.3%2C93.2%20204.5%2C91.8%20206.8%2C90.4%20209.0%2C89.0%20211.3%2C87.7%20213.5%2C86.4%20215.7%2C85.2%20218.0%2C84.0%20220.2%2C82.8%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.4%20231.4%2C77.4%20233.6%2C76.5%20235.9%2C75.5%20238.1%2C74.6%20240.3%2C73.8%20242.6%2C72.9%20244.8%2C72.1%20247.0%2C71.4%20249.3%2C70.7%20251.5%2C70.0%20253.7%2C69.3%20256.0%2C68.7%20258.2%2C68.1%20260.5%2C67.6%20262.7%2C67.1%20264.9%2C66.6%20267.2%2C66.2%20269.4%2C65.8%20271.6%2C65.4%20273.9%2C65.1%20276.1%2C64.8%20278.3%2C64.5%20280.6%2C64.3%20282.8%2C64.1%20285.1%2C63.9%20287.3%2C63.8%20289.5%2C63.7%20291.8%2C63.7%20294.0%2C63.6%20296.2%2C63.7%20298.5%2C63.7%20300.7%2C63.8%20302.9%2C63.9%20305.2%2C64.1%20307.4%2C64.3%20309.7%2C64.5%20311.9%2C64.8%20314.1%2C65.1%20316.4%2C65.4%20318.6%2C65.8%20320.8%2C66.2%20323.1%2C66.6%20325.3%2C67.1%20327.5%2C67.6%20329.8%2C68.1%20332.0%2C68.7%20334.3%2C69.3%20336.5%2C70.0%20338.7%2C70.7%20341.0%2C71.4%20343.2%2C72.1%20345.4%2C72.9%20347.7%2C73.8%20349.9%2C74.6%20352.1%2C75.5%20354.4%2C76.5%20356.6%2C77.4%20358.9%2C78.4%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.8%20370.0%2C84.0%20372.3%2C85.2%20374.5%2C86.4%20376.7%2C87.7%20379.0%2C89.0%20381.2%2C90.4%20383.5%2C91.8%20385.7%2C93.2%20387.9%2C94.6%20390.2%2C96.1%20392.4%2C97.7%20394.6%2C99.2%20396.9%2C100.8%20399.1%2C102.5%20401.3%2C104.1%20403.6%2C105.8%20405.8%2C107.6%20408.1%2C109.4%20410.3%2C111.2%20412.5%2C113.0%20414.8%2C114.9%20417.0%2C116.8%20419.2%2C118.8%20421.5%2C120.8%20423.7%2C122.8%20425.9%2C124.8%20428.2%2C126.9%20430.4%2C129.1%20432.7%2C131.2%20434.9%2C133.4%20437.1%2C135.6%20439.4%2C137.9%20441.6%2C140.2%20443.8%2C142.6%20446.1%2C144.9%20448.3%2C147.3%20450.5%2C149.8%20452.8%2C152.3%20455.0%2C154.8%20457.3%2C157.3%20459.5%2C159.9%20461.7%2C162.5%20464.0%2C165.2%20466.2%2C167.9%20468.4%2C170.6%20470.7%2C173.4%20472.9%2C176.2%20475.1%2C179.0%20477.4%2C181.8%20479.6%2C184.8%20481.9%2C187.7%20484.1%2C190.7%20486.3%2C193.7%20488.6%2C196.7%20490.8%2C199.8%20493.0%2C202.9%20495.3%2C206.0%20497.5%2C209.2%20499.7%2C212.4%20502.0%2C215.7%20504.2%2C219.0%20506.5%2C222.3%20508.7%2C225.7%20510.9%2C229.1%20513.2%2C232.5%20515.4%2C235.9%20517.6%2C239.4%20519.9%2C243.0%20522.1%2C246.5%20524.3%2C250.2%20526.6%2C253.8%20528.8%2C257.5%20531.1%2C261.2%20533.3%2C264.9%20535.5%2C268.7%20537.8%2C272.5%20540.0%2C276.4%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%2263.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-134",
    case_id: "MATH 11.134",
    title: "Unlabeled triple with a flat stretch of f",
    subsection: "11.4",
    context:
      "Graphs A–C are $f$, $f'$, and $f''$ in unknown order. Decide TRUE or FALSE.",
    statements: [
      "Graph A is $f''$.",
      "Graph B is $f'$.",
      "Graph C is $f$.",
      "Graph B is $f''$.",
      "Where Graph B is negative, Graph C is decreasing."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Graph A is linear → $f''$.

The statement is True.`,
      `**B.** → True

Graph B is the upward parabola dipping below the axis → $f'$.

The statement is True.`,
      `**C.** → True

Graph C is the original $f$, flatter in the middle where $|f'|$ is large and negative, then rising again after $x=4$.

The statement is True.`,
      `**D.** → False

Graph B has a clear parabolic bend; $f''$ is the straight Graph A.

The statement is False.`,
      `**E.** → True

Negative $f'$ means decreasing $f$: where Graph B is below the axis, Graph C falls.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 134,
    solution_overview:
      "Line = $f''$, parabola = $f'$, remaining curve = $f$; signs of $f'$ control monotonicity of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2291.6%22%20y1%3D%2236.0%22%20x2%3D%2291.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22170.7%22%20y1%3D%2236.0%22%20x2%3D%22170.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22249.8%22%20y1%3D%2236.0%22%20x2%3D%22249.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22223.5%22%20x2%3D%22289.3%22%20y2%3D%22223.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22161.0%22%20x2%3D%22289.3%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2298.5%22%20x2%3D%22289.3%22%20y2%3D%2298.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22161.0%22%20x2%3D%22289.3%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2291.6%22%20y1%3D%2236.0%22%20x2%3D%2291.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2291.6%22%20y1%3D%22286.0%22%20x2%3D%2291.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2291.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22170.7%22%20y1%3D%22286.0%22%20x2%3D%22170.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22170.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22249.8%22%20y1%3D%22286.0%22%20x2%3D%22249.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22249.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22223.5%22%20x2%3D%2252.0%22%20y2%3D%22223.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22227.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22161.0%22%20x2%3D%2252.0%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2298.5%22%20x2%3D%2252.0%22%20y2%3D%2298.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22102.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C254.8%2053.1%2C253.9%2054.2%2C253.0%2055.2%2C252.2%2056.3%2C251.3%2057.4%2C250.5%2058.5%2C249.6%2059.6%2C248.8%2060.6%2C247.9%2061.7%2C247.1%2062.8%2C246.2%2063.9%2C245.4%2064.9%2C244.5%2066.0%2C243.7%2067.1%2C242.8%2068.2%2C242.0%2069.3%2C241.1%2070.3%2C240.3%2071.4%2C239.4%2072.5%2C238.6%2073.6%2C237.7%2074.7%2C236.9%2075.7%2C236.0%2076.8%2C235.1%2077.9%2C234.3%2079.0%2C233.4%2080.0%2C232.6%2081.1%2C231.7%2082.2%2C230.9%2083.3%2C230.0%2084.4%2C229.2%2085.4%2C228.3%2086.5%2C227.5%2087.6%2C226.6%2088.7%2C225.8%2089.8%2C224.9%2090.8%2C224.1%2091.9%2C223.2%2093.0%2C222.4%2094.1%2C221.5%2095.2%2C220.7%2096.2%2C219.8%2097.3%2C219.0%2098.4%2C218.1%2099.5%2C217.2%20100.5%2C216.4%20101.6%2C215.5%20102.7%2C214.7%20103.8%2C213.8%20104.9%2C213.0%20105.9%2C212.1%20107.0%2C211.3%20108.1%2C210.4%20109.2%2C209.6%20110.3%2C208.7%20111.3%2C207.9%20112.4%2C207.0%20113.5%2C206.2%20114.6%2C205.3%20115.6%2C204.5%20116.7%2C203.6%20117.8%2C202.8%20118.9%2C201.9%20120.0%2C201.1%20121.0%2C200.2%20122.1%2C199.4%20123.2%2C198.5%20124.3%2C197.6%20125.4%2C196.8%20126.4%2C195.9%20127.5%2C195.1%20128.6%2C194.2%20129.7%2C193.4%20130.8%2C192.5%20131.8%2C191.7%20132.9%2C190.8%20134.0%2C190.0%20135.1%2C189.1%20136.1%2C188.3%20137.2%2C187.4%20138.3%2C186.6%20139.4%2C185.7%20140.5%2C184.9%20141.5%2C184.0%20142.6%2C183.2%20143.7%2C182.3%20144.8%2C181.5%20145.9%2C180.6%20146.9%2C179.8%20148.0%2C178.9%20149.1%2C178.0%20150.2%2C177.2%20151.2%2C176.3%20152.3%2C175.5%20153.4%2C174.6%20154.5%2C173.8%20155.6%2C172.9%20156.6%2C172.1%20157.7%2C171.2%20158.8%2C170.4%20159.9%2C169.5%20161.0%2C168.7%20162.0%2C167.8%20163.1%2C167.0%20164.2%2C166.1%20165.3%2C165.3%20166.4%2C164.4%20167.4%2C163.6%20168.5%2C162.7%20169.6%2C161.9%20170.7%2C161.0%20171.7%2C160.1%20172.8%2C159.3%20173.9%2C158.4%20175.0%2C157.6%20176.1%2C156.7%20177.1%2C155.9%20178.2%2C155.0%20179.3%2C154.2%20180.4%2C153.3%20181.5%2C152.5%20182.5%2C151.6%20183.6%2C150.8%20184.7%2C149.9%20185.8%2C149.1%20186.8%2C148.2%20187.9%2C147.4%20189.0%2C146.5%20190.1%2C145.7%20191.2%2C144.8%20192.2%2C144.0%20193.3%2C143.1%20194.4%2C142.2%20195.5%2C141.4%20196.6%2C140.5%20197.6%2C139.7%20198.7%2C138.8%20199.8%2C138.0%20200.9%2C137.1%20202.0%2C136.3%20203.0%2C135.4%20204.1%2C134.6%20205.2%2C133.7%20206.3%2C132.9%20207.3%2C132.0%20208.4%2C131.2%20209.5%2C130.3%20210.6%2C129.5%20211.7%2C128.6%20212.7%2C127.8%20213.8%2C126.9%20214.9%2C126.1%20216.0%2C125.2%20217.1%2C124.4%20218.1%2C123.5%20219.2%2C122.6%20220.3%2C121.8%20221.4%2C120.9%20222.4%2C120.1%20223.5%2C119.2%20224.6%2C118.4%20225.7%2C117.5%20226.8%2C116.7%20227.8%2C115.8%20228.9%2C115.0%20230.0%2C114.1%20231.1%2C113.3%20232.2%2C112.4%20233.2%2C111.6%20234.3%2C110.7%20235.4%2C109.9%20236.5%2C109.0%20237.6%2C108.2%20238.6%2C107.3%20239.7%2C106.5%20240.8%2C105.6%20241.9%2C104.8%20242.9%2C103.9%20244.0%2C103.0%20245.1%2C102.2%20246.2%2C101.3%20247.3%2C100.5%20248.3%2C99.6%20249.4%2C98.8%20250.5%2C97.9%20251.6%2C97.1%20252.7%2C96.2%20253.7%2C95.4%20254.8%2C94.5%20255.9%2C93.7%20257.0%2C92.8%20258.0%2C92.0%20259.1%2C91.1%20260.2%2C90.3%20261.3%2C89.4%20262.4%2C88.6%20263.4%2C87.7%20264.5%2C86.9%20265.6%2C86.0%20266.7%2C85.1%20267.8%2C84.3%20268.8%2C83.4%20269.9%2C82.6%20271.0%2C81.7%20272.1%2C80.9%20273.2%2C80.0%20274.2%2C79.2%20275.3%2C78.3%20276.4%2C77.5%20277.5%2C76.6%20278.5%2C75.8%20279.6%2C74.9%20280.7%2C74.1%20281.8%2C73.2%20282.9%2C72.4%20283.9%2C71.5%20285.0%2C70.7%20286.1%2C69.8%20287.2%2C69.0%20288.3%2C68.1%20289.3%2C67.2%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22386.9%22%20y1%3D%2236.0%22%20x2%3D%22386.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22466.0%22%20y1%3D%2236.0%22%20x2%3D%22466.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22545.1%22%20y1%3D%2236.0%22%20x2%3D%22545.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22244.3%22%20x2%3D%22584.7%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2277.7%22%20x2%3D%22584.7%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22161.0%22%20x2%3D%22584.7%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22386.9%22%20y1%3D%2236.0%22%20x2%3D%22386.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22386.9%22%20y1%3D%22286.0%22%20x2%3D%22386.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22386.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22466.0%22%20y1%3D%22286.0%22%20x2%3D%22466.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22466.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22545.1%22%20y1%3D%22286.0%22%20x2%3D%22545.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22545.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22244.3%22%20x2%3D%22347.3%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22161.0%22%20x2%3D%22347.3%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2277.7%22%20x2%3D%22347.3%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C56.8%20348.4%2C60.2%20349.5%2C63.6%20350.6%2C66.9%20351.6%2C70.2%20352.7%2C73.5%20353.8%2C76.7%20354.9%2C79.9%20356.0%2C83.1%20357.0%2C86.3%20358.1%2C89.4%20359.2%2C92.5%20360.3%2C95.5%20361.4%2C98.5%20362.4%2C101.5%20363.5%2C104.5%20364.6%2C107.4%20365.7%2C110.3%20366.8%2C113.2%20367.8%2C116.0%20368.9%2C118.8%20370.0%2C121.6%20371.1%2C124.3%20372.1%2C127.0%20373.2%2C129.7%20374.3%2C132.4%20375.4%2C135.0%20376.5%2C137.6%20377.5%2C140.1%20378.6%2C142.7%20379.7%2C145.2%20380.8%2C147.6%20381.9%2C150.1%20382.9%2C152.5%20384.0%2C154.8%20385.1%2C157.2%20386.2%2C159.5%20387.2%2C161.8%20388.3%2C164.0%20389.4%2C166.2%20390.5%2C168.4%20391.6%2C170.6%20392.6%2C172.7%20393.7%2C174.8%20394.8%2C176.8%20395.9%2C178.9%20397.0%2C180.9%20398.0%2C182.8%20399.1%2C184.8%20400.2%2C186.7%20401.3%2C188.5%20402.4%2C190.4%20403.4%2C192.2%20404.5%2C194.0%20405.6%2C195.7%20406.7%2C197.5%20407.7%2C199.1%20408.8%2C200.8%20409.9%2C202.4%20411.0%2C204.0%20412.1%2C205.6%20413.1%2C207.1%20414.2%2C208.6%20415.3%2C210.1%20416.4%2C211.5%20417.5%2C213.0%20418.5%2C214.3%20419.6%2C215.7%20420.7%2C217.0%20421.8%2C218.3%20422.8%2C219.5%20423.9%2C220.8%20425.0%2C222.0%20426.1%2C223.1%20427.2%2C224.3%20428.2%2C225.4%20429.3%2C226.4%20430.4%2C227.5%20431.5%2C228.5%20432.6%2C229.4%20433.6%2C230.4%20434.7%2C231.3%20435.8%2C232.2%20436.9%2C233.0%20438.0%2C233.9%20439.0%2C234.6%20440.1%2C235.4%20441.2%2C236.1%20442.3%2C236.8%20443.3%2C237.5%20444.4%2C238.1%20445.5%2C238.7%20446.6%2C239.3%20447.7%2C239.9%20448.7%2C240.4%20449.8%2C240.8%20450.9%2C241.3%20452.0%2C241.7%20453.1%2C242.1%20454.1%2C242.5%20455.2%2C242.8%20456.3%2C243.1%20457.4%2C243.3%20458.4%2C243.6%20459.5%2C243.8%20460.6%2C243.9%20461.7%2C244.1%20462.8%2C244.2%20463.8%2C244.3%20464.9%2C244.3%20466.0%2C244.3%20467.1%2C244.3%20468.2%2C244.3%20469.2%2C244.2%20470.3%2C244.1%20471.4%2C243.9%20472.5%2C243.8%20473.6%2C243.6%20474.6%2C243.3%20475.7%2C243.1%20476.8%2C242.8%20477.9%2C242.5%20478.9%2C242.1%20480.0%2C241.7%20481.1%2C241.3%20482.2%2C240.8%20483.3%2C240.4%20484.3%2C239.9%20485.4%2C239.3%20486.5%2C238.7%20487.6%2C238.1%20488.7%2C237.5%20489.7%2C236.8%20490.8%2C236.1%20491.9%2C235.4%20493.0%2C234.6%20494.0%2C233.9%20495.1%2C233.0%20496.2%2C232.2%20497.3%2C231.3%20498.4%2C230.4%20499.4%2C229.4%20500.5%2C228.5%20501.6%2C227.5%20502.7%2C226.4%20503.8%2C225.4%20504.8%2C224.3%20505.9%2C223.1%20507.0%2C222.0%20508.1%2C220.8%20509.2%2C219.5%20510.2%2C218.3%20511.3%2C217.0%20512.4%2C215.7%20513.5%2C214.3%20514.5%2C213.0%20515.6%2C211.5%20516.7%2C210.1%20517.8%2C208.6%20518.9%2C207.1%20519.9%2C205.6%20521.0%2C204.0%20522.1%2C202.4%20523.2%2C200.8%20524.3%2C199.1%20525.3%2C197.5%20526.4%2C195.7%20527.5%2C194.0%20528.6%2C192.2%20529.6%2C190.4%20530.7%2C188.5%20531.8%2C186.7%20532.9%2C184.8%20534.0%2C182.8%20535.0%2C180.9%20536.1%2C178.9%20537.2%2C176.8%20538.3%2C174.8%20539.4%2C172.7%20540.4%2C170.6%20541.5%2C168.4%20542.6%2C166.2%20543.7%2C164.0%20544.8%2C161.8%20545.8%2C159.5%20546.9%2C157.2%20548.0%2C154.8%20549.1%2C152.5%20550.1%2C150.1%20551.2%2C147.6%20552.3%2C145.2%20553.4%2C142.7%20554.5%2C140.1%20555.5%2C137.6%20556.6%2C135.0%20557.7%2C132.4%20558.8%2C129.7%20559.9%2C127.0%20560.9%2C124.3%20562.0%2C121.6%20563.1%2C118.8%20564.2%2C116.0%20565.2%2C113.2%20566.3%2C110.3%20567.4%2C107.4%20568.5%2C104.5%20569.6%2C101.5%20570.6%2C98.5%20571.7%2C95.5%20572.8%2C92.5%20573.9%2C89.4%20575.0%2C86.3%20576.0%2C83.1%20577.1%2C79.9%20578.2%2C76.7%20579.3%2C73.5%20580.4%2C70.2%20581.4%2C66.9%20582.5%2C63.6%20583.6%2C60.2%20584.7%2C56.8%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22682.2%22%20y1%3D%2236.0%22%20x2%3D%22682.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22761.3%22%20y1%3D%2236.0%22%20x2%3D%22761.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22840.4%22%20y1%3D%2236.0%22%20x2%3D%22840.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22244.3%22%20x2%3D%22880.0%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2277.7%22%20x2%3D%22880.0%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22682.2%22%20y1%3D%2236.0%22%20x2%3D%22682.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22682.2%22%20y1%3D%22286.0%22%20x2%3D%22682.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22682.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22761.3%22%20y1%3D%22286.0%22%20x2%3D%22761.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22761.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22840.4%22%20y1%3D%22286.0%22%20x2%3D%22840.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22840.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22244.3%22%20x2%3D%22642.7%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22161.0%22%20x2%3D%22642.7%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2277.7%22%20x2%3D%22642.7%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C209.6%20643.7%2C206.8%20644.8%2C204.1%20645.9%2C201.5%20647.0%2C199.0%20648.1%2C196.6%20649.1%2C194.2%20650.2%2C192.0%20651.3%2C189.8%20652.4%2C187.7%20653.5%2C185.7%20654.5%2C183.8%20655.6%2C182.0%20656.7%2C180.2%20657.8%2C178.6%20658.8%2C177.0%20659.9%2C175.5%20661.0%2C174.1%20662.1%2C172.7%20663.2%2C171.4%20664.2%2C170.3%20665.3%2C169.1%20666.4%2C168.1%20667.5%2C167.1%20668.6%2C166.3%20669.6%2C165.4%20670.7%2C164.7%20671.8%2C164.0%20672.9%2C163.4%20674.0%2C162.9%20675.0%2C162.4%20676.1%2C162.0%20677.2%2C161.7%20678.3%2C161.4%20679.3%2C161.2%20680.4%2C161.1%20681.5%2C161.0%20682.6%2C161.0%20683.7%2C161.1%20684.7%2C161.2%20685.8%2C161.3%20686.9%2C161.6%20688.0%2C161.9%20689.1%2C162.2%20690.1%2C162.6%20691.2%2C163.1%20692.3%2C163.6%20693.4%2C164.2%20694.4%2C164.8%20695.5%2C165.4%20696.6%2C166.2%20697.7%2C167.0%20698.8%2C167.8%20699.8%2C168.7%20700.9%2C169.6%20702.0%2C170.5%20703.1%2C171.6%20704.2%2C172.6%20705.2%2C173.7%20706.3%2C174.9%20707.4%2C176.1%20708.5%2C177.3%20709.6%2C178.6%20710.6%2C179.9%20711.7%2C181.3%20712.8%2C182.7%20713.9%2C184.1%20714.9%2C185.6%20716.0%2C187.1%20717.1%2C188.6%20718.2%2C190.2%20719.3%2C191.8%20720.3%2C193.5%20721.4%2C195.2%20722.5%2C196.9%20723.6%2C198.6%20724.7%2C200.4%20725.7%2C202.2%20726.8%2C204.0%20727.9%2C205.9%20729.0%2C207.7%20730.0%2C209.6%20731.1%2C211.6%20732.2%2C213.5%20733.3%2C215.5%20734.4%2C217.5%20735.4%2C219.5%20736.5%2C221.6%20737.6%2C223.6%20738.7%2C225.7%20739.8%2C227.8%20740.8%2C229.9%20741.9%2C232.0%20743.0%2C234.2%20744.1%2C236.3%20745.2%2C238.5%20746.2%2C240.7%20747.3%2C242.9%20748.4%2C245.1%20749.5%2C247.3%20750.5%2C249.5%20751.6%2C251.8%20752.7%2C254.0%20753.8%2C256.3%20754.9%2C258.5%20755.9%2C260.8%20757.0%2C263.0%20758.1%2C265.3%20759.2%2C267.6%20760.3%2C269.8%20761.3%2C272.1%20762.4%2C274.4%20763.5%2C276.7%20764.6%2C278.9%20765.6%2C281.2%20766.7%2C283.5%20767.8%2C285.7%20768.9%2C288.0%20770.0%2C290.2%20771.0%2C292.5%20772.1%2C294.7%20773.2%2C296.9%20774.3%2C299.1%20775.4%2C301.3%20776.4%2C303.5%20777.5%2C305.7%20778.6%2C307.9%20779.7%2C310.1%20780.8%2C312.2%20781.8%2C314.3%20782.9%2C316.4%20784.0%2C318.5%20785.1%2C320.6%20786.1%2C322.7%20787.2%2C324.7%20788.3%2C326.7%20789.4%2C328.7%20790.5%2C330.7%20791.5%2C332.7%20792.6%2C334.6%20793.7%2C336.5%20794.8%2C338.4%20795.9%2C340.2%20796.9%2C342.0%20798.0%2C343.8%20799.1%2C345.6%20800.2%2C347.4%20801.2%2C349.1%20802.3%2C350.7%20803.4%2C352.4%20804.5%2C354.0%20805.6%2C355.6%20806.6%2C357.1%20807.7%2C358.6%20808.8%2C360.1%20809.9%2C361.5%20811.0%2C362.9%20812.0%2C364.3%20813.1%2C365.6%20814.2%2C366.9%20815.3%2C368.1%20816.4%2C369.3%20817.4%2C370.5%20818.5%2C371.6%20819.6%2C372.7%20820.7%2C373.7%20821.7%2C374.6%20822.8%2C375.6%20823.9%2C376.4%20825.0%2C377.3%20826.1%2C378.0%20827.1%2C378.8%20828.2%2C379.4%20829.3%2C380.1%20830.4%2C380.6%20831.5%2C381.2%20832.5%2C381.6%20833.6%2C382.0%20834.7%2C382.4%20835.8%2C382.7%20836.8%2C382.9%20837.9%2C383.1%20839.0%2C383.2%20840.1%2C383.2%20841.2%2C383.2%20842.2%2C383.1%20843.3%2C383.0%20844.4%2C382.8%20845.5%2C382.5%20846.6%2C382.2%20847.6%2C381.8%20848.7%2C381.3%20849.8%2C380.8%20850.9%2C380.2%20852.0%2C379.5%20853.0%2C378.8%20854.1%2C378.0%20855.2%2C377.1%20856.3%2C376.1%20857.3%2C375.1%20858.4%2C374.0%20859.5%2C372.8%20860.6%2C371.5%20861.7%2C370.2%20862.7%2C368.7%20863.8%2C367.2%20864.9%2C365.7%20866.0%2C364.0%20867.1%2C362.3%20868.1%2C360.4%20869.2%2C358.5%20870.3%2C356.5%20871.4%2C354.4%20872.4%2C352.3%20873.5%2C350.0%20874.6%2C347.7%20875.7%2C345.2%20876.8%2C342.7%20877.8%2C340.1%20878.9%2C337.4%20880.0%2C334.6%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-135",
    case_id: "MATH 11.135",
    title: "A linear graph of f′: one critical point",
    subsection: "11.4",
    context:
      "The graph shows $f'$, which happens to be a straight line crossing the axis at $x=4$. Decide TRUE or FALSE for each claim about $f$.",
    statements: [
      "The function $f$ is increasing on $(0,4)$.",
      "The function $f$ has a local maximum at $x=4$.",
      "The function $f$ is concave down everywhere in the window.",
      "The function $f$ has an inflection point at $x=4$.",
      "At $x=2$ the slope of $f$ equals $2$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

On $(0,4)$ the line $f'$ is above the axis, so $f$ is increasing.

The statement is True.`,
      `**B.** → True

At $x=4$, $f'$ changes from $+$ to $-$ → local maximum of $f$.

The statement is True.`,
      `**C.** → True

The graph of $f'$ is a decreasing line, so $f''$ is a negative constant and $f$ is concave down throughout the window.

The statement is True.`,
      `**D.** → False

Inflection needs a sign change of $f''$. Here $f''$ never changes sign (always negative), so $x=4$ is a local max of $f$, not an inflection.

The statement is False.`,
      `**E.** → True

Reading the graph: at $x=2$ the line is at height $2$, so $f'(2)=2$.

The statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 135,
    solution_overview:
      "One zero of a decreasing linear $f'$ gives one local max of $f$; constant negative $f''$ means always concave down.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22267.5%22%20x2%3D%22540.0%22%20y2%3D%22267.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22202.5%22%20x2%3D%22540.0%22%20y2%3D%22202.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22137.5%22%20x2%3D%22540.0%22%20y2%3D%22137.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2272.5%22%20x2%3D%22540.0%22%20y2%3D%2272.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22202.5%22%20x2%3D%22540.0%22%20y2%3D%22202.5%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22267.5%22%20x2%3D%2248.0%22%20y2%3D%22267.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22271.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22202.5%22%20x2%3D%2248.0%22%20y2%3D%22202.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22206.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22137.5%22%20x2%3D%2248.0%22%20y2%3D%22137.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22141.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2272.5%22%20x2%3D%2248.0%22%20y2%3D%2272.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2276.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C72.5%2050.2%2C73.4%2052.5%2C74.3%2054.7%2C75.2%2056.9%2C76.0%2059.2%2C76.9%2061.4%2C77.8%2063.7%2C78.7%2065.9%2C79.6%2068.1%2C80.5%2070.4%2C81.4%2072.6%2C82.2%2074.8%2C83.1%2077.1%2C84.0%2079.3%2C84.9%2081.5%2C85.8%2083.8%2C86.7%2086.0%2C87.6%2088.3%2C88.5%2090.5%2C89.3%2092.7%2C90.2%2095.0%2C91.1%2097.2%2C92.0%2099.4%2C92.9%20101.7%2C93.8%20103.9%2C94.7%20106.1%2C95.5%20108.4%2C96.4%20110.6%2C97.3%20112.9%2C98.2%20115.1%2C99.1%20117.3%2C100.0%20119.6%2C100.9%20121.8%2C101.8%20124.0%2C102.6%20126.3%2C103.5%20128.5%2C104.4%20130.7%2C105.3%20133.0%2C106.2%20135.2%2C107.1%20137.5%2C108.0%20139.7%2C108.8%20141.9%2C109.7%20144.2%2C110.6%20146.4%2C111.5%20148.6%2C112.4%20150.9%2C113.3%20153.1%2C114.2%20155.3%2C115.0%20157.6%2C115.9%20159.8%2C116.8%20162.1%2C117.7%20164.3%2C118.6%20166.5%2C119.5%20168.8%2C120.4%20171.0%2C121.2%20173.2%2C122.1%20175.5%2C123.0%20177.7%2C123.9%20179.9%2C124.8%20182.2%2C125.7%20184.4%2C126.6%20186.7%2C127.5%20188.9%2C128.3%20191.1%2C129.2%20193.4%2C130.1%20195.6%2C131.0%20197.8%2C131.9%20200.1%2C132.8%20202.3%2C133.7%20204.5%2C134.5%20206.8%2C135.4%20209.0%2C136.3%20211.3%2C137.2%20213.5%2C138.1%20215.7%2C139.0%20218.0%2C139.9%20220.2%2C140.8%20222.4%2C141.6%20224.7%2C142.5%20226.9%2C143.4%20229.1%2C144.3%20231.4%2C145.2%20233.6%2C146.1%20235.9%2C147.0%20238.1%2C147.8%20240.3%2C148.7%20242.6%2C149.6%20244.8%2C150.5%20247.0%2C151.4%20249.3%2C152.3%20251.5%2C153.2%20253.7%2C154.0%20256.0%2C154.9%20258.2%2C155.8%20260.5%2C156.7%20262.7%2C157.6%20264.9%2C158.5%20267.2%2C159.4%20269.4%2C160.2%20271.6%2C161.1%20273.9%2C162.0%20276.1%2C162.9%20278.3%2C163.8%20280.6%2C164.7%20282.8%2C165.6%20285.1%2C166.5%20287.3%2C167.3%20289.5%2C168.2%20291.8%2C169.1%20294.0%2C170.0%20296.2%2C170.9%20298.5%2C171.8%20300.7%2C172.7%20302.9%2C173.5%20305.2%2C174.4%20307.4%2C175.3%20309.7%2C176.2%20311.9%2C177.1%20314.1%2C178.0%20316.4%2C178.9%20318.6%2C179.8%20320.8%2C180.6%20323.1%2C181.5%20325.3%2C182.4%20327.5%2C183.3%20329.8%2C184.2%20332.0%2C185.1%20334.3%2C186.0%20336.5%2C186.8%20338.7%2C187.7%20341.0%2C188.6%20343.2%2C189.5%20345.4%2C190.4%20347.7%2C191.3%20349.9%2C192.2%20352.1%2C193.0%20354.4%2C193.9%20356.6%2C194.8%20358.9%2C195.7%20361.1%2C196.6%20363.3%2C197.5%20365.6%2C198.4%20367.8%2C199.2%20370.0%2C200.1%20372.3%2C201.0%20374.5%2C201.9%20376.7%2C202.8%20379.0%2C203.7%20381.2%2C204.6%20383.5%2C205.5%20385.7%2C206.3%20387.9%2C207.2%20390.2%2C208.1%20392.4%2C209.0%20394.6%2C209.9%20396.9%2C210.8%20399.1%2C211.7%20401.3%2C212.5%20403.6%2C213.4%20405.8%2C214.3%20408.1%2C215.2%20410.3%2C216.1%20412.5%2C217.0%20414.8%2C217.9%20417.0%2C218.8%20419.2%2C219.6%20421.5%2C220.5%20423.7%2C221.4%20425.9%2C222.3%20428.2%2C223.2%20430.4%2C224.1%20432.7%2C225.0%20434.9%2C225.8%20437.1%2C226.7%20439.4%2C227.6%20441.6%2C228.5%20443.8%2C229.4%20446.1%2C230.3%20448.3%2C231.2%20450.5%2C232.0%20452.8%2C232.9%20455.0%2C233.8%20457.3%2C234.7%20459.5%2C235.6%20461.7%2C236.5%20464.0%2C237.4%20466.2%2C238.2%20468.4%2C239.1%20470.7%2C240.0%20472.9%2C240.9%20475.1%2C241.8%20477.4%2C242.7%20479.6%2C243.6%20481.9%2C244.5%20484.1%2C245.3%20486.3%2C246.2%20488.6%2C247.1%20490.8%2C248.0%20493.0%2C248.9%20495.3%2C249.8%20497.5%2C250.7%20499.7%2C251.5%20502.0%2C252.4%20504.2%2C253.3%20506.5%2C254.2%20508.7%2C255.1%20510.9%2C256.0%20513.2%2C256.9%20515.4%2C257.8%20517.6%2C258.6%20519.9%2C259.5%20522.1%2C260.4%20524.3%2C261.3%20526.6%2C262.2%20528.8%2C263.1%20531.1%2C264.0%20533.3%2C264.8%20535.5%2C265.7%20537.8%2C266.6%20540.0%2C267.5%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22376.0%22%20cy%3D%22202.5%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-136",
    case_id: "MATH 11.136",
    title: "Unlabeled triple: reason without computing formulas",
    subsection: "11.4",
    context:
      "The three graphs are $f$, $f'$, and $f''$ unlabeled. Use only graphical relationships — do not try to invent algebraic formulas. Decide TRUE or FALSE.",
    statements: [
      "Graph B is $f'$.",
      "Graph C is $f''$.",
      "Graph A is $f$.",
      "The peak of Graph B occurs at the same $x$ where Graph C crosses the axis.",
      "Graph A must be $f''$ because it has the most dramatic vertical range."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Graph B is the downward parabola with two zeros → first derivative $f'$.

The statement is True.`,
      `**B.** → True

Graph C is the straight line → second derivative $f''$.

The statement is True.`,
      `**C.** → True

Graph A is the remaining cubic-looking curve → $f$.

The statement is True.`,
      `**D.** → True

Extrema of $f'$ occur where $f''=0$. The peak of Graph B lines up with the axis crossing of Graph C.

The statement is True.`,
      `**E.** → False

Vertical range is not a reliable label. $f''$ is the simplest (linear) graph here — Graph C — not Graph A.

The statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 136,
    solution_overview:
      "Identify by shape and by alignment of extrema/zeros across the three graphs.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%2236.0%22%20x2%3D%22131.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%2236.0%22%20x2%3D%22210.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22214.6%22%20x2%3D%22289.3%22%20y2%3D%22214.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22143.1%22%20x2%3D%22289.3%22%20y2%3D%22143.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2271.7%22%20x2%3D%22289.3%22%20y2%3D%2271.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22143.1%22%20x2%3D%22289.3%22%20y2%3D%22143.1%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%22286.0%22%20x2%3D%22131.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22131.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%22286.0%22%20x2%3D%22210.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22210.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22214.6%22%20x2%3D%2252.0%22%20y2%3D%22214.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22218.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22143.1%22%20x2%3D%2252.0%22%20y2%3D%22143.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22146.6%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2271.7%22%20x2%3D%2252.0%22%20y2%3D%2271.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%2275.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C143.1%2053.1%2C145.5%2054.2%2C147.9%2055.2%2C150.1%2056.3%2C152.3%2057.4%2C154.3%2058.5%2C156.3%2059.6%2C158.3%2060.6%2C160.1%2061.7%2C161.9%2062.8%2C163.6%2063.9%2C165.3%2064.9%2C166.8%2066.0%2C168.3%2067.1%2C169.8%2068.2%2C171.1%2069.3%2C172.4%2070.3%2C173.6%2071.4%2C174.8%2072.5%2C175.9%2073.6%2C176.9%2074.7%2C177.8%2075.7%2C178.7%2076.8%2C179.5%2077.9%2C180.3%2079.0%2C181.0%2080.0%2C181.6%2081.1%2C182.2%2082.2%2C182.7%2083.3%2C183.2%2084.4%2C183.6%2085.4%2C183.9%2086.5%2C184.2%2087.6%2C184.4%2088.7%2C184.6%2089.8%2C184.7%2090.8%2C184.8%2091.9%2C184.8%2093.0%2C184.8%2094.1%2C184.7%2095.2%2C184.5%2096.2%2C184.3%2097.3%2C184.1%2098.4%2C183.8%2099.5%2C183.4%20100.5%2C183.0%20101.6%2C182.6%20102.7%2C182.1%20103.8%2C181.6%20104.9%2C181.0%20105.9%2C180.4%20107.0%2C179.7%20108.1%2C179.0%20109.2%2C178.2%20110.3%2C177.5%20111.3%2C176.6%20112.4%2C175.8%20113.5%2C174.8%20114.6%2C173.9%20115.6%2C172.9%20116.7%2C171.9%20117.8%2C170.8%20118.9%2C169.7%20120.0%2C168.6%20121.0%2C167.4%20122.1%2C166.2%20123.2%2C165.0%20124.3%2C163.7%20125.4%2C162.4%20126.4%2C161.1%20127.5%2C159.8%20128.6%2C158.4%20129.7%2C157.0%20130.8%2C155.5%20131.8%2C154.1%20132.9%2C152.6%20134.0%2C151.1%20135.1%2C149.5%20136.1%2C148.0%20137.2%2C146.4%20138.3%2C144.8%20139.4%2C143.1%20140.5%2C141.5%20141.5%2C139.8%20142.6%2C138.1%20143.7%2C136.4%20144.8%2C134.7%20145.9%2C132.9%20146.9%2C131.1%20148.0%2C129.4%20149.1%2C127.6%20150.2%2C125.8%20151.2%2C123.9%20152.3%2C122.1%20153.4%2C120.2%20154.5%2C118.4%20155.6%2C116.5%20156.6%2C114.6%20157.7%2C112.7%20158.8%2C110.8%20159.9%2C108.9%20161.0%2C107.0%20162.0%2C105.1%20163.1%2C103.2%20164.2%2C101.2%20165.3%2C99.3%20166.4%2C97.4%20167.4%2C95.4%20168.5%2C93.5%20169.6%2C91.5%20170.7%2C89.6%20171.7%2C87.6%20172.8%2C85.7%20173.9%2C83.7%20175.0%2C81.8%20176.1%2C79.8%20177.1%2C77.9%20178.2%2C76.0%20179.3%2C74.0%20180.4%2C72.1%20181.5%2C70.2%20182.5%2C68.3%20183.6%2C66.4%20184.7%2C64.5%20185.8%2C62.6%20186.8%2C60.8%20187.9%2C58.9%20189.0%2C57.0%20190.1%2C55.2%20191.2%2C53.4%20192.2%2C51.6%20193.3%2C49.8%20194.4%2C48.0%20195.5%2C46.2%20196.6%2C44.5%20197.6%2C42.8%20198.7%2C41.0%20199.8%2C39.4%20200.9%2C37.7%20202.0%2C36.0%20203.0%2C34.4%20204.1%2C32.8%20205.2%2C31.2%20206.3%2C29.6%20207.3%2C28.1%20208.4%2C26.6%20209.5%2C25.1%20210.6%2C23.6%20211.7%2C22.2%20212.7%2C20.8%20213.8%2C19.4%20214.9%2C18.0%20216.0%2C16.7%20217.1%2C15.4%20218.1%2C14.1%20219.2%2C12.9%20220.3%2C11.7%20221.4%2C10.5%20222.4%2C9.4%20223.5%2C8.3%20224.6%2C7.3%20225.7%2C6.2%20226.8%2C5.3%20227.8%2C4.3%20228.9%2C3.4%20230.0%2C2.5%20231.1%2C1.7%20232.2%2C0.9%20233.2%2C0.1%20234.3%2C-0.6%20235.4%2C-1.2%20236.5%2C-1.9%20237.6%2C-2.4%20238.6%2C-3.0%20239.7%2C-3.5%20240.8%2C-3.9%20241.9%2C-4.3%20242.9%2C-4.6%20244.0%2C-4.9%20245.1%2C-5.2%20246.2%2C-5.4%20247.3%2C-5.5%20248.3%2C-5.6%20249.4%2C-5.7%20250.5%2C-5.7%20251.6%2C-5.6%20252.7%2C-5.5%20253.7%2C-5.3%20254.8%2C-5.1%20255.9%2C-4.8%20257.0%2C-4.5%20258.0%2C-4.1%20259.1%2C-3.6%20260.2%2C-3.1%20261.3%2C-2.5%20262.4%2C-1.9%20263.4%2C-1.2%20264.5%2C-0.4%20265.6%2C0.4%20266.7%2C1.3%20267.8%2C2.3%20268.8%2C3.3%20269.9%2C4.4%20271.0%2C5.5%20272.1%2C6.7%20273.2%2C8.0%20274.2%2C9.4%20275.3%2C10.8%20276.4%2C12.3%20277.5%2C13.9%20278.5%2C15.5%20279.6%2C17.2%20280.7%2C19.0%20281.8%2C20.9%20282.9%2C22.8%20283.9%2C24.8%20285.0%2C26.9%20286.1%2C29.1%20287.2%2C31.3%20288.3%2C33.6%20289.3%2C36.0%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%2236.0%22%20x2%3D%22426.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%2236.0%22%20x2%3D%22505.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22240.5%22%20x2%3D%22584.7%22%20y2%3D%22240.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22149.6%22%20x2%3D%22584.7%22%20y2%3D%22149.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2258.7%22%20x2%3D%22584.7%22%20y2%3D%2258.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22149.6%22%20x2%3D%22584.7%22%20y2%3D%22149.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%22286.0%22%20x2%3D%22426.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22426.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%22286.0%22%20x2%3D%22505.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22505.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22240.5%22%20x2%3D%22347.3%22%20y2%3D%22240.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22244.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22149.6%22%20x2%3D%22347.3%22%20y2%3D%22149.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22153.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%2258.7%22%20x2%3D%22347.3%22%20y2%3D%2258.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%2262.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C263.3%20348.4%2C259.6%20349.5%2C255.9%20350.6%2C252.3%20351.6%2C248.7%20352.7%2C245.1%20353.8%2C241.6%20354.9%2C238.1%20356.0%2C234.6%20357.0%2C231.2%20358.1%2C227.8%20359.2%2C224.4%20360.3%2C221.1%20361.4%2C217.8%20362.4%2C214.5%20363.5%2C211.3%20364.6%2C208.1%20365.7%2C204.9%20366.8%2C201.8%20367.8%2C198.7%20368.9%2C195.7%20370.0%2C192.6%20371.1%2C189.6%20372.1%2C186.7%20373.2%2C183.8%20374.3%2C180.9%20375.4%2C178.0%20376.5%2C175.2%20377.5%2C172.4%20378.6%2C169.6%20379.7%2C166.9%20380.8%2C164.2%20381.9%2C161.6%20382.9%2C159.0%20384.0%2C156.4%20385.1%2C153.8%20386.2%2C151.3%20387.2%2C148.8%20388.3%2C146.4%20389.4%2C143.9%20390.5%2C141.6%20391.6%2C139.2%20392.6%2C136.9%20393.7%2C134.6%20394.8%2C132.4%20395.9%2C130.1%20397.0%2C128.0%20398.0%2C125.8%20399.1%2C123.7%20400.2%2C121.6%20401.3%2C119.6%20402.4%2C117.6%20403.4%2C115.6%20404.5%2C113.7%20405.6%2C111.7%20406.7%2C109.9%20407.7%2C108.0%20408.8%2C106.2%20409.9%2C104.4%20411.0%2C102.7%20412.1%2C101.0%20413.1%2C99.3%20414.2%2C97.7%20415.3%2C96.1%20416.4%2C94.5%20417.5%2C93.0%20418.5%2C91.5%20419.6%2C90.0%20420.7%2C88.5%20421.8%2C87.1%20422.8%2C85.8%20423.9%2C84.4%20425.0%2C83.1%20426.1%2C81.9%20427.2%2C80.6%20428.2%2C79.4%20429.3%2C78.3%20430.4%2C77.1%20431.5%2C76.0%20432.6%2C75.0%20433.6%2C73.9%20434.7%2C72.9%20435.8%2C72.0%20436.9%2C71.1%20438.0%2C70.2%20439.0%2C69.3%20440.1%2C68.5%20441.2%2C67.7%20442.3%2C66.9%20443.3%2C66.2%20444.4%2C65.5%20445.5%2C64.8%20446.6%2C64.2%20447.7%2C63.6%20448.7%2C63.1%20449.8%2C62.5%20450.9%2C62.0%20452.0%2C61.6%20453.1%2C61.2%20454.1%2C60.8%20455.2%2C60.4%20456.3%2C60.1%20457.4%2C59.8%20458.4%2C59.6%20459.5%2C59.3%20460.6%2C59.1%20461.7%2C59.0%20462.8%2C58.9%20463.8%2C58.8%20464.9%2C58.7%20466.0%2C58.7%20467.1%2C58.7%20468.2%2C58.8%20469.2%2C58.9%20470.3%2C59.0%20471.4%2C59.1%20472.5%2C59.3%20473.6%2C59.6%20474.6%2C59.8%20475.7%2C60.1%20476.8%2C60.4%20477.9%2C60.8%20478.9%2C61.2%20480.0%2C61.6%20481.1%2C62.0%20482.2%2C62.5%20483.3%2C63.1%20484.3%2C63.6%20485.4%2C64.2%20486.5%2C64.8%20487.6%2C65.5%20488.7%2C66.2%20489.7%2C66.9%20490.8%2C67.7%20491.9%2C68.5%20493.0%2C69.3%20494.0%2C70.2%20495.1%2C71.1%20496.2%2C72.0%20497.3%2C72.9%20498.4%2C73.9%20499.4%2C75.0%20500.5%2C76.0%20501.6%2C77.1%20502.7%2C78.3%20503.8%2C79.4%20504.8%2C80.6%20505.9%2C81.9%20507.0%2C83.1%20508.1%2C84.4%20509.2%2C85.8%20510.2%2C87.1%20511.3%2C88.5%20512.4%2C90.0%20513.5%2C91.5%20514.5%2C93.0%20515.6%2C94.5%20516.7%2C96.1%20517.8%2C97.7%20518.9%2C99.3%20519.9%2C101.0%20521.0%2C102.7%20522.1%2C104.4%20523.2%2C106.2%20524.3%2C108.0%20525.3%2C109.9%20526.4%2C111.7%20527.5%2C113.7%20528.6%2C115.6%20529.6%2C117.6%20530.7%2C119.6%20531.8%2C121.6%20532.9%2C123.7%20534.0%2C125.8%20535.0%2C128.0%20536.1%2C130.1%20537.2%2C132.4%20538.3%2C134.6%20539.4%2C136.9%20540.4%2C139.2%20541.5%2C141.6%20542.6%2C143.9%20543.7%2C146.4%20544.8%2C148.8%20545.8%2C151.3%20546.9%2C153.8%20548.0%2C156.4%20549.1%2C159.0%20550.1%2C161.6%20551.2%2C164.2%20552.3%2C166.9%20553.4%2C169.6%20554.5%2C172.4%20555.5%2C175.2%20556.6%2C178.0%20557.7%2C180.9%20558.8%2C183.8%20559.9%2C186.7%20560.9%2C189.6%20562.0%2C192.6%20563.1%2C195.7%20564.2%2C198.7%20565.2%2C201.8%20566.3%2C204.9%20567.4%2C208.1%20568.5%2C211.3%20569.6%2C214.5%20570.6%2C217.8%20571.7%2C221.1%20572.8%2C224.4%20573.9%2C227.8%20575.0%2C231.2%20576.0%2C234.6%20577.1%2C238.1%20578.2%2C241.6%20579.3%2C245.1%20580.4%2C248.7%20581.4%2C252.3%20582.5%2C255.9%20583.6%2C259.6%20584.7%2C263.3%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%2236.0%22%20x2%3D%22721.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%2236.0%22%20x2%3D%22800.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22244.3%22%20x2%3D%22880.0%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2277.7%22%20x2%3D%22880.0%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22161.0%22%20x2%3D%22880.0%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%22286.0%22%20x2%3D%22721.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22721.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%22286.0%22%20x2%3D%22800.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22800.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22244.3%22%20x2%3D%22642.7%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22161.0%22%20x2%3D%22642.7%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2277.7%22%20x2%3D%22642.7%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C36.0%20643.7%2C37.1%20644.8%2C38.3%20645.9%2C39.4%20647.0%2C40.5%20648.1%2C41.7%20649.1%2C42.8%20650.2%2C44.0%20651.3%2C45.1%20652.4%2C46.2%20653.5%2C47.4%20654.5%2C48.5%20655.6%2C49.6%20656.7%2C50.8%20657.8%2C51.9%20658.8%2C53.0%20659.9%2C54.2%20661.0%2C55.3%20662.1%2C56.5%20663.2%2C57.6%20664.2%2C58.7%20665.3%2C59.9%20666.4%2C61.0%20667.5%2C62.1%20668.6%2C63.3%20669.6%2C64.4%20670.7%2C65.5%20671.8%2C66.7%20672.9%2C67.8%20674.0%2C69.0%20675.0%2C70.1%20676.1%2C71.2%20677.2%2C72.4%20678.3%2C73.5%20679.3%2C74.6%20680.4%2C75.8%20681.5%2C76.9%20682.6%2C78.0%20683.7%2C79.2%20684.7%2C80.3%20685.8%2C81.5%20686.9%2C82.6%20688.0%2C83.7%20689.1%2C84.9%20690.1%2C86.0%20691.2%2C87.1%20692.3%2C88.3%20693.4%2C89.4%20694.4%2C90.5%20695.5%2C91.7%20696.6%2C92.8%20697.7%2C94.0%20698.8%2C95.1%20699.8%2C96.2%20700.9%2C97.4%20702.0%2C98.5%20703.1%2C99.6%20704.2%2C100.8%20705.2%2C101.9%20706.3%2C103.0%20707.4%2C104.2%20708.5%2C105.3%20709.6%2C106.5%20710.6%2C107.6%20711.7%2C108.7%20712.8%2C109.9%20713.9%2C111.0%20714.9%2C112.1%20716.0%2C113.3%20717.1%2C114.4%20718.2%2C115.5%20719.3%2C116.7%20720.3%2C117.8%20721.4%2C119.0%20722.5%2C120.1%20723.6%2C121.2%20724.7%2C122.4%20725.7%2C123.5%20726.8%2C124.6%20727.9%2C125.8%20729.0%2C126.9%20730.0%2C128.0%20731.1%2C129.2%20732.2%2C130.3%20733.3%2C131.5%20734.4%2C132.6%20735.4%2C133.7%20736.5%2C134.9%20737.6%2C136.0%20738.7%2C137.1%20739.8%2C138.3%20740.8%2C139.4%20741.9%2C140.5%20743.0%2C141.7%20744.1%2C142.8%20745.2%2C144.0%20746.2%2C145.1%20747.3%2C146.2%20748.4%2C147.4%20749.5%2C148.5%20750.5%2C149.6%20751.6%2C150.8%20752.7%2C151.9%20753.8%2C153.0%20754.9%2C154.2%20755.9%2C155.3%20757.0%2C156.5%20758.1%2C157.6%20759.2%2C158.7%20760.3%2C159.9%20761.3%2C161.0%20762.4%2C162.1%20763.5%2C163.3%20764.6%2C164.4%20765.6%2C165.5%20766.7%2C166.7%20767.8%2C167.8%20768.9%2C169.0%20770.0%2C170.1%20771.0%2C171.2%20772.1%2C172.4%20773.2%2C173.5%20774.3%2C174.6%20775.4%2C175.8%20776.4%2C176.9%20777.5%2C178.0%20778.6%2C179.2%20779.7%2C180.3%20780.8%2C181.5%20781.8%2C182.6%20782.9%2C183.7%20784.0%2C184.9%20785.1%2C186.0%20786.1%2C187.1%20787.2%2C188.3%20788.3%2C189.4%20789.4%2C190.5%20790.5%2C191.7%20791.5%2C192.8%20792.6%2C194.0%20793.7%2C195.1%20794.8%2C196.2%20795.9%2C197.4%20796.9%2C198.5%20798.0%2C199.6%20799.1%2C200.8%20800.2%2C201.9%20801.2%2C203.0%20802.3%2C204.2%20803.4%2C205.3%20804.5%2C206.5%20805.6%2C207.6%20806.6%2C208.7%20807.7%2C209.9%20808.8%2C211.0%20809.9%2C212.1%20811.0%2C213.3%20812.0%2C214.4%20813.1%2C215.5%20814.2%2C216.7%20815.3%2C217.8%20816.4%2C219.0%20817.4%2C220.1%20818.5%2C221.2%20819.6%2C222.4%20820.7%2C223.5%20821.7%2C224.6%20822.8%2C225.8%20823.9%2C226.9%20825.0%2C228.0%20826.1%2C229.2%20827.1%2C230.3%20828.2%2C231.5%20829.3%2C232.6%20830.4%2C233.7%20831.5%2C234.9%20832.5%2C236.0%20833.6%2C237.1%20834.7%2C238.3%20835.8%2C239.4%20836.8%2C240.5%20837.9%2C241.7%20839.0%2C242.8%20840.1%2C244.0%20841.2%2C245.1%20842.2%2C246.2%20843.3%2C247.4%20844.4%2C248.5%20845.5%2C249.6%20846.6%2C250.8%20847.6%2C251.9%20848.7%2C253.0%20849.8%2C254.2%20850.9%2C255.3%20852.0%2C256.5%20853.0%2C257.6%20854.1%2C258.7%20855.2%2C259.9%20856.3%2C261.0%20857.3%2C262.1%20858.4%2C263.3%20859.5%2C264.4%20860.6%2C265.5%20861.7%2C266.7%20862.7%2C267.8%20863.8%2C269.0%20864.9%2C270.1%20866.0%2C271.2%20867.1%2C272.4%20868.1%2C273.5%20869.2%2C274.6%20870.3%2C275.8%20871.4%2C276.9%20872.4%2C278.0%20873.5%2C279.2%20874.6%2C280.3%20875.7%2C281.5%20876.8%2C282.6%20877.8%2C283.7%20878.9%2C284.9%20880.0%2C286.0%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-137",
    case_id: "MATH 11.137",
    title: "Concavity and bends from a graph of f",
    subsection: "11.4",
    context:
      "The figure shows $f$ itself. Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ has a local minimum somewhere near $x=1$.",
      "The function $f$ has a local maximum somewhere near $x=5$.",
      "Near $x=3$ the graph of $f$ changes from bending upward to bending downward.",
      "On $(1,5)$ the function $f$ is decreasing.",
      "A horizontal tangent of $f$ occurs near both $x=1$ and $x=5$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The curve bottoms out near $x=1$ before rising — a local minimum.

The statement is True.`,
      `**B.** → True

The curve peaks near $x=5$ before falling — a local maximum.

The statement is True.`,
      `**C.** → True

Around $x=3$ the bend switches from cup-shaped (concave up) to cap-shaped (concave down): an inflection.

The statement is True.`,
      `**D.** → False

Between the min near $1$ and the max near $5$ the graph is rising, so $f$ is increasing on $(1,5)$.

The statement is False.`,
      `**E.** → True

At a smooth local min or max the tangent is horizontal, so both turning points have $f'=0$.

The statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 137,
    solution_overview:
      "Read troughs, peaks, rising stretches, and bend changes directly from the graph of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20function%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3584044%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22225.7%22%20x2%3D%22540.0%22%20y2%3D%22225.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22151.4%22%20x2%3D%22540.0%22%20y2%3D%22151.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2277.1%22%20x2%3D%22540.0%22%20y2%3D%2277.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22151.4%22%20x2%3D%22540.0%22%20y2%3D%22151.4%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22225.7%22%20x2%3D%2248.0%22%20y2%3D%22225.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22229.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22151.4%22%20x2%3D%2248.0%22%20y2%3D%22151.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22154.9%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2277.1%22%20x2%3D%2248.0%22%20y2%3D%2277.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2280.6%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C151.4%2050.2%2C153.9%2052.5%2C156.3%2054.7%2C158.7%2056.9%2C160.9%2059.2%2C163.1%2061.4%2C165.2%2063.7%2C167.2%2065.9%2C169.1%2068.1%2C171.0%2070.4%2C172.7%2072.6%2C174.4%2074.8%2C176.1%2077.1%2C177.6%2079.3%2C179.1%2081.5%2C180.5%2083.8%2C181.9%2086.0%2C183.1%2088.3%2C184.3%2090.5%2C185.4%2092.7%2C186.5%2095.0%2C187.5%2097.2%2C188.4%2099.4%2C189.3%20101.7%2C190.1%20103.9%2C190.8%20106.1%2C191.5%20108.4%2C192.1%20110.6%2C192.6%20112.9%2C193.1%20115.1%2C193.5%20117.3%2C193.9%20119.6%2C194.1%20121.8%2C194.4%20124.0%2C194.6%20126.3%2C194.7%20128.5%2C194.7%20130.7%2C194.8%20133.0%2C194.7%20135.2%2C194.6%20137.5%2C194.5%20139.7%2C194.3%20141.9%2C194.0%20144.2%2C193.7%20146.4%2C193.3%20148.6%2C192.9%20150.9%2C192.5%20153.1%2C192.0%20155.3%2C191.4%20157.6%2C190.8%20159.8%2C190.1%20162.1%2C189.5%20164.3%2C188.7%20166.5%2C187.9%20168.8%2C187.1%20171.0%2C186.2%20173.2%2C185.3%20175.5%2C184.4%20177.7%2C183.4%20179.9%2C182.4%20182.2%2C181.3%20184.4%2C180.2%20186.7%2C179.1%20188.9%2C177.9%20191.1%2C176.7%20193.4%2C175.4%20195.6%2C174.2%20197.8%2C172.8%20200.1%2C171.5%20202.3%2C170.1%20204.5%2C168.7%20206.8%2C167.3%20209.0%2C165.8%20211.3%2C164.3%20213.5%2C162.8%20215.7%2C161.2%20218.0%2C159.7%20220.2%2C158.1%20222.4%2C156.4%20224.7%2C154.8%20226.9%2C153.1%20229.1%2C151.4%20231.4%2C149.7%20233.6%2C147.9%20235.9%2C146.2%20238.1%2C144.4%20240.3%2C142.6%20242.6%2C140.8%20244.8%2C138.9%20247.0%2C137.1%20249.3%2C135.2%20251.5%2C133.3%20253.7%2C131.4%20256.0%2C129.5%20258.2%2C127.6%20260.5%2C125.7%20262.7%2C123.7%20264.9%2C121.8%20267.2%2C119.8%20269.4%2C117.8%20271.6%2C115.8%20273.9%2C113.9%20276.1%2C111.9%20278.3%2C109.9%20280.6%2C107.8%20282.8%2C105.8%20285.1%2C103.8%20287.3%2C101.8%20289.5%2C99.8%20291.8%2C97.7%20294.0%2C95.7%20296.2%2C93.7%20298.5%2C91.7%20300.7%2C89.6%20302.9%2C87.6%20305.2%2C85.6%20307.4%2C83.6%20309.7%2C81.6%20311.9%2C79.6%20314.1%2C77.6%20316.4%2C75.6%20318.6%2C73.6%20320.8%2C71.6%20323.1%2C69.7%20325.3%2C67.7%20327.5%2C65.7%20329.8%2C63.8%20332.0%2C61.9%20334.3%2C60.0%20336.5%2C58.1%20338.7%2C56.2%20341.0%2C54.3%20343.2%2C52.5%20345.4%2C50.6%20347.7%2C48.8%20349.9%2C47.0%20352.1%2C45.2%20354.4%2C43.5%20356.6%2C41.7%20358.9%2C40.0%20361.1%2C38.3%20363.3%2C36.7%20365.6%2C35.0%20367.8%2C33.4%20370.0%2C31.8%20372.3%2C30.2%20374.5%2C28.6%20376.7%2C27.1%20379.0%2C25.6%20381.2%2C24.2%20383.5%2C22.7%20385.7%2C21.3%20387.9%2C19.9%20390.2%2C18.6%20392.4%2C17.3%20394.6%2C16.0%20396.9%2C14.7%20399.1%2C13.5%20401.3%2C12.4%20403.6%2C11.2%20405.8%2C10.1%20408.1%2C9.0%20410.3%2C8.0%20412.5%2C7.0%20414.8%2C6.1%20417.0%2C5.2%20419.2%2C4.3%20421.5%2C3.5%20423.7%2C2.7%20425.9%2C2.0%20428.2%2C1.3%20430.4%2C0.6%20432.7%2C0.0%20434.9%2C-0.5%20437.1%2C-1.0%20439.4%2C-1.5%20441.6%2C-1.9%20443.8%2C-2.3%20446.1%2C-2.6%20448.3%2C-2.8%20450.5%2C-3.0%20452.8%2C-3.2%20455.0%2C-3.3%20457.3%2C-3.3%20459.5%2C-3.3%20461.7%2C-3.3%20464.0%2C-3.1%20466.2%2C-3.0%20468.4%2C-2.7%20470.7%2C-2.4%20472.9%2C-2.1%20475.1%2C-1.7%20477.4%2C-1.2%20479.6%2C-0.6%20481.9%2C-0.0%20484.1%2C0.6%20486.3%2C1.4%20488.6%2C2.1%20490.8%2C3.0%20493.0%2C3.9%20495.3%2C4.9%20497.5%2C6.0%20499.7%2C7.1%20502.0%2C8.3%20504.2%2C9.6%20506.5%2C10.9%20508.7%2C12.3%20510.9%2C13.8%20513.2%2C15.4%20515.4%2C17.0%20517.6%2C18.7%20519.9%2C20.5%20522.1%2C22.3%20524.3%2C24.3%20526.6%2C26.3%20528.8%2C28.4%20531.1%2C30.5%20533.3%2C32.8%20535.5%2C35.1%20537.8%2C37.5%20540.0%2C40.0%22%20clip-path%3D%22url%28%23clip-3584044%29%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-138",
    case_id: "MATH 11.138",
    title: "Which intervals make f increase?",
    subsection: "11.4",
    context:
      "The graph shows $f'$ with zeros at $x=1$ and $x=4$. Decide TRUE or FALSE.",
    statements: [
      "The function $f$ is increasing on $(1,4)$.",
      "The function $f$ is decreasing on $(4,5)$.",
      "The function $f$ is decreasing on $(0,1)$.",
      "The function $f$ is increasing on the whole interval $(0,4)$.",
      "At every $x$ in $(1,4)$ one has $f'(x)>0$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Between the zeros, $f'$ is positive → $f$ increasing on $(1,4)$.

The statement is True.`,
      `**B.** → True

After $x=4$, $f'$ is negative → $f$ decreasing on $(4,5)$.

The statement is True.`,
      `**C.** → True

Before $x=1$, $f'$ is negative → $f$ decreasing on $(0,1)$.

The statement is True.`,
      `**D.** → False

On $(0,1)$ the function decreases, so it is not increasing on all of $(0,4)$.

The statement is False.`,
      `**E.** → True

The plotted $f'$ lies strictly above the axis on $(1,4)$.

The statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 138,
    solution_overview:
      "Increasing precisely where the graph of $f'$ is above the axis.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%2240.0%22%20x2%3D%22146.4%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%2240.0%22%20x2%3D%22244.8%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%2240.0%22%20x2%3D%22343.2%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%2240.0%22%20x2%3D%22441.6%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22267.5%22%20x2%3D%22540.0%22%20y2%3D%22267.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22202.5%22%20x2%3D%22540.0%22%20y2%3D%22202.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22137.5%22%20x2%3D%22540.0%22%20y2%3D%22137.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2272.5%22%20x2%3D%22540.0%22%20y2%3D%2272.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22137.5%22%20x2%3D%22540.0%22%20y2%3D%22137.5%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.4%22%20y1%3D%22300.0%22%20x2%3D%22146.4%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.4%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22244.8%22%20y1%3D%22300.0%22%20x2%3D%22244.8%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22244.8%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22343.2%22%20y1%3D%22300.0%22%20x2%3D%22343.2%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22343.2%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.6%22%20y1%3D%22300.0%22%20x2%3D%22441.6%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.6%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22267.5%22%20x2%3D%2248.0%22%20y2%3D%22267.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22271.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22202.5%22%20x2%3D%2248.0%22%20y2%3D%22202.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22206.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22137.5%22%20x2%3D%2248.0%22%20y2%3D%22137.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22141.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2272.5%22%20x2%3D%2248.0%22%20y2%3D%2272.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2276.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C267.5%2050.2%2C263.8%2052.5%2C260.2%2054.7%2C256.6%2056.9%2C253.0%2059.2%2C249.5%2061.4%2C245.9%2063.7%2C242.5%2065.9%2C239.0%2068.1%2C235.6%2070.4%2C232.2%2072.6%2C228.9%2074.8%2C225.6%2077.1%2C222.3%2079.3%2C219.1%2081.5%2C215.9%2083.8%2C212.7%2086.0%2C209.6%2088.3%2C206.5%2090.5%2C203.4%2092.7%2C200.4%2095.0%2C197.3%2097.2%2C194.4%2099.4%2C191.4%20101.7%2C188.5%20103.9%2C185.7%20106.1%2C182.8%20108.4%2C180.0%20110.6%2C177.3%20112.9%2C174.5%20115.1%2C171.8%20117.3%2C169.1%20119.6%2C166.5%20121.8%2C163.9%20124.0%2C161.3%20126.3%2C158.8%20128.5%2C156.3%20130.7%2C153.8%20133.0%2C151.4%20135.2%2C149.0%20137.5%2C146.6%20139.7%2C144.3%20141.9%2C142.0%20144.2%2C139.7%20146.4%2C137.5%20148.6%2C135.3%20150.9%2C133.1%20153.1%2C131.0%20155.3%2C128.9%20157.6%2C126.8%20159.8%2C124.8%20162.1%2C122.8%20164.3%2C120.8%20166.5%2C118.9%20168.8%2C117.0%20171.0%2C115.2%20173.2%2C113.3%20175.5%2C111.5%20177.7%2C109.8%20179.9%2C108.0%20182.2%2C106.3%20184.4%2C104.7%20186.7%2C103.1%20188.9%2C101.5%20191.1%2C99.9%20193.4%2C98.4%20195.6%2C96.9%20197.8%2C95.4%20200.1%2C94.0%20202.3%2C92.6%20204.5%2C91.2%20206.8%2C89.9%20209.0%2C88.6%20211.3%2C87.4%20213.5%2C86.1%20215.7%2C84.9%20218.0%2C83.8%20220.2%2C82.7%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.5%20231.4%2C77.5%20233.6%2C76.6%20235.9%2C75.7%20238.1%2C74.9%20240.3%2C74.0%20242.6%2C73.3%20244.8%2C72.5%20247.0%2C71.8%20249.3%2C71.1%20251.5%2C70.4%20253.7%2C69.8%20256.0%2C69.2%20258.2%2C68.7%20260.5%2C68.2%20262.7%2C67.7%20264.9%2C67.2%20267.2%2C66.8%20269.4%2C66.4%20271.6%2C66.1%20273.9%2C65.7%20276.1%2C65.4%20278.3%2C65.2%20280.6%2C65.0%20282.8%2C64.8%20285.1%2C64.6%20287.3%2C64.5%20289.5%2C64.4%20291.8%2C64.4%20294.0%2C64.4%20296.2%2C64.4%20298.5%2C64.4%20300.7%2C64.5%20302.9%2C64.6%20305.2%2C64.8%20307.4%2C65.0%20309.7%2C65.2%20311.9%2C65.4%20314.1%2C65.7%20316.4%2C66.1%20318.6%2C66.4%20320.8%2C66.8%20323.1%2C67.2%20325.3%2C67.7%20327.5%2C68.2%20329.8%2C68.7%20332.0%2C69.2%20334.3%2C69.8%20336.5%2C70.4%20338.7%2C71.1%20341.0%2C71.8%20343.2%2C72.5%20345.4%2C73.3%20347.7%2C74.0%20349.9%2C74.9%20352.1%2C75.7%20354.4%2C76.6%20356.6%2C77.5%20358.9%2C78.5%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.7%20370.0%2C83.8%20372.3%2C84.9%20374.5%2C86.1%20376.7%2C87.4%20379.0%2C88.6%20381.2%2C89.9%20383.5%2C91.2%20385.7%2C92.6%20387.9%2C94.0%20390.2%2C95.4%20392.4%2C96.9%20394.6%2C98.4%20396.9%2C99.9%20399.1%2C101.5%20401.3%2C103.1%20403.6%2C104.7%20405.8%2C106.3%20408.1%2C108.0%20410.3%2C109.8%20412.5%2C111.5%20414.8%2C113.3%20417.0%2C115.2%20419.2%2C117.0%20421.5%2C118.9%20423.7%2C120.8%20425.9%2C122.8%20428.2%2C124.8%20430.4%2C126.8%20432.7%2C128.9%20434.9%2C131.0%20437.1%2C133.1%20439.4%2C135.3%20441.6%2C137.5%20443.8%2C139.7%20446.1%2C142.0%20448.3%2C144.3%20450.5%2C146.6%20452.8%2C149.0%20455.0%2C151.4%20457.3%2C153.8%20459.5%2C156.3%20461.7%2C158.8%20464.0%2C161.3%20466.2%2C163.9%20468.4%2C166.5%20470.7%2C169.1%20472.9%2C171.8%20475.1%2C174.5%20477.4%2C177.3%20479.6%2C180.0%20481.9%2C182.8%20484.1%2C185.7%20486.3%2C188.5%20488.6%2C191.4%20490.8%2C194.4%20493.0%2C197.3%20495.3%2C200.4%20497.5%2C203.4%20499.7%2C206.5%20502.0%2C209.6%20504.2%2C212.7%20506.5%2C215.9%20508.7%2C219.1%20510.9%2C222.3%20513.2%2C225.6%20515.4%2C228.9%20517.6%2C232.2%20519.9%2C235.6%20522.1%2C239.0%20524.3%2C242.5%20526.6%2C245.9%20528.8%2C249.5%20531.1%2C253.0%20533.3%2C256.6%20535.5%2C260.2%20537.8%2C263.8%20540.0%2C267.5%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22146.4%22%20cy%3D%22137.5%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22441.6%22%20cy%3D%22137.5%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-139",
    case_id: "MATH 11.139",
    title: "Unlabeled triple: reject the wrong f′ label",
    subsection: "11.4",
    context:
      "Graphs A–C are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE.",
    statements: [
      "Graph A is $f'$.",
      "Graph C is $f'$.",
      "Graph B is $f$.",
      "Graph A is $f''$.",
      "The trough of Graph C occurs where Graph A crosses the horizontal axis."
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

Graph A is a straight line. A linear graph here is $f''$, not $f'$.

The statement is False.`,
      `**B.** → True

Graph C is the upward-opening parabola with two zeros → $f'$.

The statement is True.`,
      `**C.** → True

Graph B shows peak-then-trough → original $f$.

The statement is True.`,
      `**D.** → True

Yes: the line is $f''$.

The statement is True.`,
      `**E.** → True

Where $f''=0$, the graph of $f'$ has a horizontal tangent. Graph A's zero sits under the trough of Graph C.

The statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 139,
    solution_overview:
      "Do not call the linear graph $f'$; it is $f''$. The parabola is $f'$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20320%22%20width%3D%22900%22%20height%3D%22320%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22900%22%20height%3D%22320%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22450%22%20y%3D%2218%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraphs%20A%2C%20B%2C%20C%20are%20f%2C%20f%E2%80%B2%2C%20and%20f%E2%80%B3%20in%20some%20order%20%28unlabeled%29%3C%2Ftext%3E%0A%3Crect%20x%3D%2216.0%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22170.7%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20A%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4230360%22%3E%3Crect%20x%3D%2252.0%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%2236.0%22%20x2%3D%22131.1%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%2236.0%22%20x2%3D%22210.2%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%2236.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22244.3%22%20x2%3D%22289.3%22%20y2%3D%22244.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22161.0%22%20x2%3D%22289.3%22%20y2%3D%22161.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2277.7%22%20x2%3D%22289.3%22%20y2%3D%2277.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22161.0%22%20x2%3D%22289.3%22%20y2%3D%22161.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2236.0%22%20x2%3D%2252.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22286.0%22%20x2%3D%2252.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22131.1%22%20y1%3D%22286.0%22%20x2%3D%22131.1%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22131.1%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22210.2%22%20y1%3D%22286.0%22%20x2%3D%22210.2%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22210.2%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22289.3%22%20y1%3D%22286.0%22%20x2%3D%22289.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22289.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22244.3%22%20x2%3D%2252.0%22%20y2%3D%22244.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22247.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%22161.0%22%20x2%3D%2252.0%22%20y2%3D%22161.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%22164.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247.0%22%20y1%3D%2277.7%22%20x2%3D%2252.0%22%20y2%3D%2277.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244.0%22%20y%3D%2281.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2252.0%2C286.0%2053.1%2C284.9%2054.2%2C283.7%2055.2%2C282.6%2056.3%2C281.5%2057.4%2C280.3%2058.5%2C279.2%2059.6%2C278.0%2060.6%2C276.9%2061.7%2C275.8%2062.8%2C274.6%2063.9%2C273.5%2064.9%2C272.4%2066.0%2C271.2%2067.1%2C270.1%2068.2%2C269.0%2069.3%2C267.8%2070.3%2C266.7%2071.4%2C265.5%2072.5%2C264.4%2073.6%2C263.3%2074.7%2C262.1%2075.7%2C261.0%2076.8%2C259.9%2077.9%2C258.7%2079.0%2C257.6%2080.0%2C256.5%2081.1%2C255.3%2082.2%2C254.2%2083.3%2C253.0%2084.4%2C251.9%2085.4%2C250.8%2086.5%2C249.6%2087.6%2C248.5%2088.7%2C247.4%2089.8%2C246.2%2090.8%2C245.1%2091.9%2C244.0%2093.0%2C242.8%2094.1%2C241.7%2095.2%2C240.5%2096.2%2C239.4%2097.3%2C238.3%2098.4%2C237.1%2099.5%2C236.0%20100.5%2C234.9%20101.6%2C233.7%20102.7%2C232.6%20103.8%2C231.5%20104.9%2C230.3%20105.9%2C229.2%20107.0%2C228.0%20108.1%2C226.9%20109.2%2C225.8%20110.3%2C224.6%20111.3%2C223.5%20112.4%2C222.4%20113.5%2C221.2%20114.6%2C220.1%20115.6%2C219.0%20116.7%2C217.8%20117.8%2C216.7%20118.9%2C215.5%20120.0%2C214.4%20121.0%2C213.3%20122.1%2C212.1%20123.2%2C211.0%20124.3%2C209.9%20125.4%2C208.7%20126.4%2C207.6%20127.5%2C206.5%20128.6%2C205.3%20129.7%2C204.2%20130.8%2C203.0%20131.8%2C201.9%20132.9%2C200.8%20134.0%2C199.6%20135.1%2C198.5%20136.1%2C197.4%20137.2%2C196.2%20138.3%2C195.1%20139.4%2C194.0%20140.5%2C192.8%20141.5%2C191.7%20142.6%2C190.5%20143.7%2C189.4%20144.8%2C188.3%20145.9%2C187.1%20146.9%2C186.0%20148.0%2C184.9%20149.1%2C183.7%20150.2%2C182.6%20151.2%2C181.5%20152.3%2C180.3%20153.4%2C179.2%20154.5%2C178.0%20155.6%2C176.9%20156.6%2C175.8%20157.7%2C174.6%20158.8%2C173.5%20159.9%2C172.4%20161.0%2C171.2%20162.0%2C170.1%20163.1%2C169.0%20164.2%2C167.8%20165.3%2C166.7%20166.4%2C165.5%20167.4%2C164.4%20168.5%2C163.3%20169.6%2C162.1%20170.7%2C161.0%20171.7%2C159.9%20172.8%2C158.7%20173.9%2C157.6%20175.0%2C156.5%20176.1%2C155.3%20177.1%2C154.2%20178.2%2C153.0%20179.3%2C151.9%20180.4%2C150.8%20181.5%2C149.6%20182.5%2C148.5%20183.6%2C147.4%20184.7%2C146.2%20185.8%2C145.1%20186.8%2C144.0%20187.9%2C142.8%20189.0%2C141.7%20190.1%2C140.5%20191.2%2C139.4%20192.2%2C138.3%20193.3%2C137.1%20194.4%2C136.0%20195.5%2C134.9%20196.6%2C133.7%20197.6%2C132.6%20198.7%2C131.5%20199.8%2C130.3%20200.9%2C129.2%20202.0%2C128.0%20203.0%2C126.9%20204.1%2C125.8%20205.2%2C124.6%20206.3%2C123.5%20207.3%2C122.4%20208.4%2C121.2%20209.5%2C120.1%20210.6%2C119.0%20211.7%2C117.8%20212.7%2C116.7%20213.8%2C115.5%20214.9%2C114.4%20216.0%2C113.3%20217.1%2C112.1%20218.1%2C111.0%20219.2%2C109.9%20220.3%2C108.7%20221.4%2C107.6%20222.4%2C106.5%20223.5%2C105.3%20224.6%2C104.2%20225.7%2C103.0%20226.8%2C101.9%20227.8%2C100.8%20228.9%2C99.6%20230.0%2C98.5%20231.1%2C97.4%20232.2%2C96.2%20233.2%2C95.1%20234.3%2C94.0%20235.4%2C92.8%20236.5%2C91.7%20237.6%2C90.5%20238.6%2C89.4%20239.7%2C88.3%20240.8%2C87.1%20241.9%2C86.0%20242.9%2C84.9%20244.0%2C83.7%20245.1%2C82.6%20246.2%2C81.5%20247.3%2C80.3%20248.3%2C79.2%20249.4%2C78.0%20250.5%2C76.9%20251.6%2C75.8%20252.7%2C74.6%20253.7%2C73.5%20254.8%2C72.4%20255.9%2C71.2%20257.0%2C70.1%20258.0%2C69.0%20259.1%2C67.8%20260.2%2C66.7%20261.3%2C65.5%20262.4%2C64.4%20263.4%2C63.3%20264.5%2C62.1%20265.6%2C61.0%20266.7%2C59.9%20267.8%2C58.7%20268.8%2C57.6%20269.9%2C56.5%20271.0%2C55.3%20272.1%2C54.2%20273.2%2C53.0%20274.2%2C51.9%20275.3%2C50.8%20276.4%2C49.6%20277.5%2C48.5%20278.5%2C47.4%20279.6%2C46.2%20280.7%2C45.1%20281.8%2C44.0%20282.9%2C42.8%20283.9%2C41.7%20285.0%2C40.5%20286.1%2C39.4%20287.2%2C38.3%20288.3%2C37.1%20289.3%2C36.0%22%20clip-path%3D%22url%28%23clip-4230360%29%22%2F%3E%3Crect%20x%3D%22311.3%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22466.0%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20B%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9071735%22%3E%3Crect%20x%3D%22347.3%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%2236.0%22%20x2%3D%22426.4%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%2236.0%22%20x2%3D%22505.6%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%2236.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22250.3%22%20x2%3D%22584.7%22%20y2%3D%22250.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22178.9%22%20x2%3D%22584.7%22%20y2%3D%22178.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22107.4%22%20x2%3D%22584.7%22%20y2%3D%22107.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22250.3%22%20x2%3D%22584.7%22%20y2%3D%22250.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%2236.0%22%20x2%3D%22347.3%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22347.3%22%20y1%3D%22286.0%22%20x2%3D%22347.3%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22347.3%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22426.4%22%20y1%3D%22286.0%22%20x2%3D%22426.4%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22426.4%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22505.6%22%20y1%3D%22286.0%22%20x2%3D%22505.6%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22505.6%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22584.7%22%20y1%3D%22286.0%22%20x2%3D%22584.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22584.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22250.3%22%20x2%3D%22347.3%22%20y2%3D%22250.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22253.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22178.9%22%20x2%3D%22347.3%22%20y2%3D%22178.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22182.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22342.3%22%20y1%3D%22107.4%22%20x2%3D%22347.3%22%20y2%3D%22107.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22339.3%22%20y%3D%22110.9%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22347.3%2C250.3%20348.4%2C246.4%20349.5%2C242.7%20350.6%2C239.0%20351.6%2C235.3%20352.7%2C231.8%20353.8%2C228.3%20354.9%2C224.9%20356.0%2C221.6%20357.0%2C218.4%20358.1%2C215.2%20359.2%2C212.1%20360.3%2C209.1%20361.4%2C206.1%20362.4%2C203.2%20363.5%2C200.4%20364.6%2C197.7%20365.7%2C195.0%20366.8%2C192.4%20367.8%2C189.8%20368.9%2C187.3%20370.0%2C184.9%20371.1%2C182.6%20372.1%2C180.3%20373.2%2C178.1%20374.3%2C175.9%20375.4%2C173.8%20376.5%2C171.8%20377.5%2C169.8%20378.6%2C167.9%20379.7%2C166.0%20380.8%2C164.2%20381.9%2C162.5%20382.9%2C160.8%20384.0%2C159.1%20385.1%2C157.6%20386.2%2C156.0%20387.2%2C154.6%20388.3%2C153.1%20389.4%2C151.8%20390.5%2C150.5%20391.6%2C149.2%20392.6%2C148.0%20393.7%2C146.8%20394.8%2C145.7%20395.9%2C144.6%20397.0%2C143.6%20398.0%2C142.7%20399.1%2C141.7%20400.2%2C140.8%20401.3%2C140.0%20402.4%2C139.2%20403.4%2C138.5%20404.5%2C137.7%20405.6%2C137.1%20406.7%2C136.4%20407.7%2C135.9%20408.8%2C135.3%20409.9%2C134.8%20411.0%2C134.3%20412.1%2C133.9%20413.1%2C133.5%20414.2%2C133.1%20415.3%2C132.8%20416.4%2C132.5%20417.5%2C132.2%20418.5%2C132.0%20419.6%2C131.8%20420.7%2C131.6%20421.8%2C131.5%20422.8%2C131.4%20423.9%2C131.3%20425.0%2C131.3%20426.1%2C131.2%20427.2%2C131.2%20428.2%2C131.3%20429.3%2C131.3%20430.4%2C131.4%20431.5%2C131.5%20432.6%2C131.6%20433.6%2C131.8%20434.7%2C132.0%20435.8%2C132.2%20436.9%2C132.4%20438.0%2C132.6%20439.0%2C132.9%20440.1%2C133.1%20441.2%2C133.4%20442.3%2C133.7%20443.3%2C134.0%20444.4%2C134.4%20445.5%2C134.7%20446.6%2C135.1%20447.7%2C135.5%20448.7%2C135.8%20449.8%2C136.2%20450.9%2C136.7%20452.0%2C137.1%20453.1%2C137.5%20454.1%2C137.9%20455.2%2C138.4%20456.3%2C138.8%20457.4%2C139.3%20458.4%2C139.8%20459.5%2C140.2%20460.6%2C140.7%20461.7%2C141.2%20462.8%2C141.7%20463.8%2C142.2%20464.9%2C142.7%20466.0%2C143.1%20467.1%2C143.6%20468.2%2C144.1%20469.2%2C144.6%20470.3%2C145.1%20471.4%2C145.6%20472.5%2C146.0%20473.6%2C146.5%20474.6%2C147.0%20475.7%2C147.4%20476.8%2C147.9%20477.9%2C148.3%20478.9%2C148.8%20480.0%2C149.2%20481.1%2C149.6%20482.2%2C150.0%20483.3%2C150.4%20484.3%2C150.8%20485.4%2C151.2%20486.5%2C151.6%20487.6%2C151.9%20488.7%2C152.3%20489.7%2C152.6%20490.8%2C152.9%20491.9%2C153.2%20493.0%2C153.4%20494.0%2C153.7%20495.1%2C153.9%20496.2%2C154.1%20497.3%2C154.3%20498.4%2C154.5%20499.4%2C154.6%20500.5%2C154.8%20501.6%2C154.9%20502.7%2C155.0%20503.8%2C155.0%20504.8%2C155.0%20505.9%2C155.0%20507.0%2C155.0%20508.1%2C155.0%20509.2%2C154.9%20510.2%2C154.8%20511.3%2C154.7%20512.4%2C154.5%20513.5%2C154.3%20514.5%2C154.1%20515.6%2C153.8%20516.7%2C153.5%20517.8%2C153.2%20518.9%2C152.8%20519.9%2C152.4%20521.0%2C152.0%20522.1%2C151.5%20523.2%2C151.0%20524.3%2C150.4%20525.3%2C149.8%20526.4%2C149.2%20527.5%2C148.5%20528.6%2C147.8%20529.6%2C147.1%20530.7%2C146.3%20531.8%2C145.4%20532.9%2C144.6%20534.0%2C143.6%20535.0%2C142.7%20536.1%2C141.6%20537.2%2C140.6%20538.3%2C139.5%20539.4%2C138.3%20540.4%2C137.1%20541.5%2C135.8%20542.6%2C134.5%20543.7%2C133.1%20544.8%2C131.7%20545.8%2C130.3%20546.9%2C128.7%20548.0%2C127.2%20549.1%2C125.5%20550.1%2C123.8%20551.2%2C122.1%20552.3%2C120.3%20553.4%2C118.4%20554.5%2C116.5%20555.5%2C114.5%20556.6%2C112.5%20557.7%2C110.4%20558.8%2C108.2%20559.9%2C106.0%20560.9%2C103.7%20562.0%2C101.4%20563.1%2C98.9%20564.2%2C96.5%20565.2%2C93.9%20566.3%2C91.3%20567.4%2C88.6%20568.5%2C85.9%20569.6%2C83.1%20570.6%2C80.2%20571.7%2C77.2%20572.8%2C74.2%20573.9%2C71.1%20575.0%2C67.9%20576.0%2C64.7%20577.1%2C61.4%20578.2%2C58.0%20579.3%2C54.5%20580.4%2C51.0%20581.4%2C47.3%20582.5%2C43.6%20583.6%2C39.9%20584.7%2C36.0%22%20clip-path%3D%22url%28%23clip-9071735%29%22%2F%3E%3Crect%20x%3D%22606.7%22%20y%3D%2214.0%22%20width%3D%22285.3%22%20height%3D%22302.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22761.3%22%20y%3D%2228.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20C%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1725152%22%3E%3Crect%20x%3D%22642.7%22%20y%3D%2236.0%22%20width%3D%22237.3%22%20height%3D%22250.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%2236.0%22%20x2%3D%22721.8%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%2236.0%22%20x2%3D%22800.9%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%2236.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22254.8%22%20x2%3D%22880.0%22%20y2%3D%22254.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22192.2%22%20x2%3D%22880.0%22%20y2%3D%22192.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22129.8%22%20x2%3D%22880.0%22%20y2%3D%22129.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2267.2%22%20x2%3D%22880.0%22%20y2%3D%2267.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22192.2%22%20x2%3D%22880.0%22%20y2%3D%22192.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%2236.0%22%20x2%3D%22642.7%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22286.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%22642.7%22%20y1%3D%22286.0%22%20x2%3D%22642.7%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22642.7%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22721.8%22%20y1%3D%22286.0%22%20x2%3D%22721.8%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22721.8%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22800.9%22%20y1%3D%22286.0%22%20x2%3D%22800.9%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22800.9%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22880.0%22%20y1%3D%22286.0%22%20x2%3D%22880.0%22%20y2%3D%22291.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22880.0%22%20y%3D%22302.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22254.8%22%20x2%3D%22642.7%22%20y2%3D%22254.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22258.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22192.2%22%20x2%3D%22642.7%22%20y2%3D%22192.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22195.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%22129.8%22%20x2%3D%22642.7%22%20y2%3D%22129.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%22133.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22637.7%22%20y1%3D%2267.2%22%20x2%3D%22642.7%22%20y2%3D%2267.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22634.7%22%20y%3D%2270.8%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%22642.7%2C-57.8%20643.7%2C-52.7%20644.8%2C-47.6%20645.9%2C-42.6%20647.0%2C-37.7%20648.1%2C-32.8%20649.1%2C-27.9%20650.2%2C-23.1%20651.3%2C-18.3%20652.4%2C-13.6%20653.5%2C-8.9%20654.5%2C-4.3%20655.6%2C0.3%20656.7%2C4.8%20657.8%2C9.3%20658.8%2C13.7%20659.9%2C18.1%20661.0%2C22.5%20662.1%2C26.8%20663.2%2C31.0%20664.2%2C35.2%20665.3%2C39.4%20666.4%2C43.5%20667.5%2C47.6%20668.6%2C51.6%20669.6%2C55.6%20670.7%2C59.5%20671.8%2C63.4%20672.9%2C67.2%20674.0%2C71.0%20675.0%2C74.7%20676.1%2C78.4%20677.2%2C82.1%20678.3%2C85.7%20679.3%2C89.2%20680.4%2C92.8%20681.5%2C96.2%20682.6%2C99.6%20683.7%2C103.0%20684.7%2C106.3%20685.8%2C109.6%20686.9%2C112.8%20688.0%2C116.0%20689.1%2C119.2%20690.1%2C122.2%20691.2%2C125.3%20692.3%2C128.3%20693.4%2C131.2%20694.4%2C134.2%20695.5%2C137.0%20696.6%2C139.8%20697.7%2C142.6%20698.8%2C145.3%20699.8%2C148.0%20700.9%2C150.6%20702.0%2C153.2%20703.1%2C155.7%20704.2%2C158.2%20705.2%2C160.6%20706.3%2C163.0%20707.4%2C165.4%20708.5%2C167.7%20709.6%2C169.9%20710.6%2C172.2%20711.7%2C174.3%20712.8%2C176.4%20713.9%2C178.5%20714.9%2C180.5%20716.0%2C182.5%20717.1%2C184.4%20718.2%2C186.3%20719.3%2C188.1%20720.3%2C189.9%20721.4%2C191.7%20722.5%2C193.4%20723.6%2C195.0%20724.7%2C196.6%20725.7%2C198.2%20726.8%2C199.7%20727.9%2C201.2%20729.0%2C202.6%20730.0%2C204.0%20731.1%2C205.3%20732.2%2C206.6%20733.3%2C207.8%20734.4%2C209.0%20735.4%2C210.1%20736.5%2C211.2%20737.6%2C212.3%20738.7%2C213.2%20739.8%2C214.2%20740.8%2C215.1%20741.9%2C216.0%20743.0%2C216.8%20744.1%2C217.5%20745.2%2C218.3%20746.2%2C218.9%20747.3%2C219.6%20748.4%2C220.2%20749.5%2C220.7%20750.5%2C221.2%20751.6%2C221.6%20752.7%2C222.0%20753.8%2C222.4%20754.9%2C222.7%20755.9%2C222.9%20757.0%2C223.1%20758.1%2C223.3%20759.2%2C223.4%20760.3%2C223.5%20761.3%2C223.5%20762.4%2C223.5%20763.5%2C223.4%20764.6%2C223.3%20765.6%2C223.1%20766.7%2C222.9%20767.8%2C222.7%20768.9%2C222.4%20770.0%2C222.0%20771.0%2C221.6%20772.1%2C221.2%20773.2%2C220.7%20774.3%2C220.2%20775.4%2C219.6%20776.4%2C218.9%20777.5%2C218.3%20778.6%2C217.5%20779.7%2C216.8%20780.8%2C216.0%20781.8%2C215.1%20782.9%2C214.2%20784.0%2C213.2%20785.1%2C212.3%20786.1%2C211.2%20787.2%2C210.1%20788.3%2C209.0%20789.4%2C207.8%20790.5%2C206.6%20791.5%2C205.3%20792.6%2C204.0%20793.7%2C202.6%20794.8%2C201.2%20795.9%2C199.7%20796.9%2C198.2%20798.0%2C196.6%20799.1%2C195.0%20800.2%2C193.4%20801.2%2C191.7%20802.3%2C189.9%20803.4%2C188.1%20804.5%2C186.3%20805.6%2C184.4%20806.6%2C182.5%20807.7%2C180.5%20808.8%2C178.5%20809.9%2C176.4%20811.0%2C174.3%20812.0%2C172.2%20813.1%2C169.9%20814.2%2C167.7%20815.3%2C165.4%20816.4%2C163.0%20817.4%2C160.6%20818.5%2C158.2%20819.6%2C155.7%20820.7%2C153.2%20821.7%2C150.6%20822.8%2C148.0%20823.9%2C145.3%20825.0%2C142.6%20826.1%2C139.8%20827.1%2C137.0%20828.2%2C134.2%20829.3%2C131.2%20830.4%2C128.3%20831.5%2C125.3%20832.5%2C122.3%20833.6%2C119.2%20834.7%2C116.0%20835.8%2C112.8%20836.8%2C109.6%20837.9%2C106.3%20839.0%2C103.0%20840.1%2C99.6%20841.2%2C96.2%20842.2%2C92.8%20843.3%2C89.2%20844.4%2C85.7%20845.5%2C82.1%20846.6%2C78.4%20847.6%2C74.7%20848.7%2C71.0%20849.8%2C67.2%20850.9%2C63.4%20852.0%2C59.5%20853.0%2C55.6%20854.1%2C51.6%20855.2%2C47.6%20856.3%2C43.5%20857.3%2C39.4%20858.4%2C35.2%20859.5%2C31.0%20860.6%2C26.8%20861.7%2C22.5%20862.7%2C18.1%20863.8%2C13.7%20864.9%2C9.3%20866.0%2C4.8%20867.1%2C0.3%20868.1%2C-4.3%20869.2%2C-8.9%20870.3%2C-13.6%20871.4%2C-18.3%20872.4%2C-23.1%20873.5%2C-27.9%20874.6%2C-32.8%20875.7%2C-37.7%20876.8%2C-42.6%20877.8%2C-47.6%20878.9%2C-52.7%20880.0%2C-57.8%22%20clip-path%3D%22url%28%23clip-1725152%29%22%2F%3E%0A%3C%2Fsvg%3E`,
  },
  {
    id: "math-11-140",
    case_id: "MATH 11.140",
    title: "Exam-style review: five claims from one f′ graph",
    subsection: "11.4",
    context:
      "The graph below shows the first derivative $f'$ of a function $f$ defined and differentiable on all of $\\mathbb{R}$. The curve shown is $f'$, not $f$. Decide TRUE or FALSE for each claim.",
    statements: [
      "The function $f$ is increasing on the interval $(1,5)$.",
      "The function $f$ has a local maximum at $x=5$.",
      "The function $f$ has a local minimum at $x=1$.",
      "The function $f$ is concave up at $x=4$.",
      "The function $f$ has an inflection point at $x=3$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

On $(1,5)$, $f'>0$ (graph above the axis) → $f$ increasing.

The statement is True.`,
      `**B.** → True

At $x=5$, $f'$ changes $+$ to $-$ → local maximum of $f$.

The statement is True.`,
      `**C.** → True

At $x=1$, $f'$ changes $-$ to $+$ → local minimum of $f$.

The statement is True.`,
      `**D.** → False

At $x=4$, $f'$ is decreasing → $f''<0$ → concave down, not up.

The statement is False.`,
      `**E.** → True

At $x=3$, $f'$ has its peak → concavity of $f$ changes → inflection point.

The statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 140,
    solution_overview:
      "Same reading rules as the classic exam item: signs of $f'$, sign changes, and whether $f'$ is rising or falling.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20340%22%20width%3D%22560%22%20height%3D%22340%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22560%22%20height%3D%22340%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Crect%20x%3D%2212.0%22%20y%3D%2218.0%22%20width%3D%22540.0%22%20height%3D%22312.0%22%20rx%3D%2210%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22294.0%22%20y%3D%2232.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2213%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20the%20first%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5800456%22%3E%3Crect%20x%3D%2248.0%22%20y%3D%2240.0%22%20width%3D%22492.0%22%20height%3D%22260.0%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%2240.0%22%20x2%3D%22130.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%2240.0%22%20x2%3D%22212.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%2240.0%22%20x2%3D%22294.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%2240.0%22%20x2%3D%22376.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%2240.0%22%20x2%3D%22458.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%2240.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22252.7%22%20x2%3D%22540.0%22%20y2%3D%22252.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22205.5%22%20x2%3D%22540.0%22%20y2%3D%22205.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22110.9%22%20x2%3D%22540.0%22%20y2%3D%22110.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2263.6%22%20x2%3D%22540.0%22%20y2%3D%2263.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22158.2%22%20x2%3D%22540.0%22%20y2%3D%22158.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.2%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%2240.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.4%22%2F%3E%0A%3Cline%20x1%3D%2248.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2248.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22130.0%22%20y1%3D%22300.0%22%20x2%3D%22130.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22130.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22212.0%22%20y1%3D%22300.0%22%20x2%3D%22212.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22212.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22294.0%22%20y1%3D%22300.0%22%20x2%3D%22294.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22294.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.0%22%20y1%3D%22300.0%22%20x2%3D%22376.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22458.0%22%20y1%3D%22300.0%22%20x2%3D%22458.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22458.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22540.0%22%20y1%3D%22300.0%22%20x2%3D%22540.0%22%20y2%3D%22305.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22540.0%22%20y%3D%22316.0%22%20text-anchor%3D%22middle%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22300.0%22%20x2%3D%2248.0%22%20y2%3D%22300.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22303.5%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22252.7%22%20x2%3D%2248.0%22%20y2%3D%22252.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22256.2%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22205.5%22%20x2%3D%2248.0%22%20y2%3D%22205.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22209.0%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22158.2%22%20x2%3D%2248.0%22%20y2%3D%22158.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22161.7%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%22110.9%22%20x2%3D%2248.0%22%20y2%3D%22110.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%22114.4%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2243.0%22%20y1%3D%2263.6%22%20x2%3D%2248.0%22%20y2%3D%2263.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2240.0%22%20y%3D%2267.1%22%20text-anchor%3D%22end%22%20font-size%3D%2210%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.3%22%20points%3D%2248.0%2C276.4%2050.2%2C272.5%2052.5%2C268.7%2054.7%2C264.9%2056.9%2C261.2%2059.2%2C257.5%2061.4%2C253.8%2063.7%2C250.2%2065.9%2C246.5%2068.1%2C243.0%2070.4%2C239.4%2072.6%2C235.9%2074.8%2C232.5%2077.1%2C229.1%2079.3%2C225.7%2081.5%2C222.3%2083.8%2C219.0%2086.0%2C215.7%2088.3%2C212.4%2090.5%2C209.2%2092.7%2C206.0%2095.0%2C202.9%2097.2%2C199.8%2099.4%2C196.7%20101.7%2C193.7%20103.9%2C190.7%20106.1%2C187.7%20108.4%2C184.8%20110.6%2C181.8%20112.9%2C179.0%20115.1%2C176.2%20117.3%2C173.4%20119.6%2C170.6%20121.8%2C167.9%20124.0%2C165.2%20126.3%2C162.5%20128.5%2C159.9%20130.7%2C157.3%20133.0%2C154.8%20135.2%2C152.3%20137.5%2C149.8%20139.7%2C147.3%20141.9%2C144.9%20144.2%2C142.6%20146.4%2C140.2%20148.6%2C137.9%20150.9%2C135.6%20153.1%2C133.4%20155.3%2C131.2%20157.6%2C129.1%20159.8%2C126.9%20162.1%2C124.8%20164.3%2C122.8%20166.5%2C120.8%20168.8%2C118.8%20171.0%2C116.8%20173.2%2C114.9%20175.5%2C113.0%20177.7%2C111.2%20179.9%2C109.4%20182.2%2C107.6%20184.4%2C105.8%20186.7%2C104.1%20188.9%2C102.5%20191.1%2C100.8%20193.4%2C99.2%20195.6%2C97.7%20197.8%2C96.1%20200.1%2C94.6%20202.3%2C93.2%20204.5%2C91.8%20206.8%2C90.4%20209.0%2C89.0%20211.3%2C87.7%20213.5%2C86.4%20215.7%2C85.2%20218.0%2C84.0%20220.2%2C82.8%20222.4%2C81.6%20224.7%2C80.5%20226.9%2C79.5%20229.1%2C78.4%20231.4%2C77.4%20233.6%2C76.5%20235.9%2C75.5%20238.1%2C74.6%20240.3%2C73.8%20242.6%2C72.9%20244.8%2C72.1%20247.0%2C71.4%20249.3%2C70.7%20251.5%2C70.0%20253.7%2C69.3%20256.0%2C68.7%20258.2%2C68.1%20260.5%2C67.6%20262.7%2C67.1%20264.9%2C66.6%20267.2%2C66.2%20269.4%2C65.8%20271.6%2C65.4%20273.9%2C65.1%20276.1%2C64.8%20278.3%2C64.5%20280.6%2C64.3%20282.8%2C64.1%20285.1%2C63.9%20287.3%2C63.8%20289.5%2C63.7%20291.8%2C63.7%20294.0%2C63.6%20296.2%2C63.7%20298.5%2C63.7%20300.7%2C63.8%20302.9%2C63.9%20305.2%2C64.1%20307.4%2C64.3%20309.7%2C64.5%20311.9%2C64.8%20314.1%2C65.1%20316.4%2C65.4%20318.6%2C65.8%20320.8%2C66.2%20323.1%2C66.6%20325.3%2C67.1%20327.5%2C67.6%20329.8%2C68.1%20332.0%2C68.7%20334.3%2C69.3%20336.5%2C70.0%20338.7%2C70.7%20341.0%2C71.4%20343.2%2C72.1%20345.4%2C72.9%20347.7%2C73.8%20349.9%2C74.6%20352.1%2C75.5%20354.4%2C76.5%20356.6%2C77.4%20358.9%2C78.4%20361.1%2C79.5%20363.3%2C80.5%20365.6%2C81.6%20367.8%2C82.8%20370.0%2C84.0%20372.3%2C85.2%20374.5%2C86.4%20376.7%2C87.7%20379.0%2C89.0%20381.2%2C90.4%20383.5%2C91.8%20385.7%2C93.2%20387.9%2C94.6%20390.2%2C96.1%20392.4%2C97.7%20394.6%2C99.2%20396.9%2C100.8%20399.1%2C102.5%20401.3%2C104.1%20403.6%2C105.8%20405.8%2C107.6%20408.1%2C109.4%20410.3%2C111.2%20412.5%2C113.0%20414.8%2C114.9%20417.0%2C116.8%20419.2%2C118.8%20421.5%2C120.8%20423.7%2C122.8%20425.9%2C124.8%20428.2%2C126.9%20430.4%2C129.1%20432.7%2C131.2%20434.9%2C133.4%20437.1%2C135.6%20439.4%2C137.9%20441.6%2C140.2%20443.8%2C142.6%20446.1%2C144.9%20448.3%2C147.3%20450.5%2C149.8%20452.8%2C152.3%20455.0%2C154.8%20457.3%2C157.3%20459.5%2C159.9%20461.7%2C162.5%20464.0%2C165.2%20466.2%2C167.9%20468.4%2C170.6%20470.7%2C173.4%20472.9%2C176.2%20475.1%2C179.0%20477.4%2C181.8%20479.6%2C184.8%20481.9%2C187.7%20484.1%2C190.7%20486.3%2C193.7%20488.6%2C196.7%20490.8%2C199.8%20493.0%2C202.9%20495.3%2C206.0%20497.5%2C209.2%20499.7%2C212.4%20502.0%2C215.7%20504.2%2C219.0%20506.5%2C222.3%20508.7%2C225.7%20510.9%2C229.1%20513.2%2C232.5%20515.4%2C235.9%20517.6%2C239.4%20519.9%2C243.0%20522.1%2C246.5%20524.3%2C250.2%20526.6%2C253.8%20528.8%2C257.5%20531.1%2C261.2%20533.3%2C264.9%20535.5%2C268.7%20537.8%2C272.5%20540.0%2C276.4%22%20clip-path%3D%22url%28%23clip-5800456%29%22%2F%3E%0A%3Ccircle%20cx%3D%22130.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22458.0%22%20cy%3D%22158.2%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22294.0%22%20cy%3D%2263.6%22%20r%3D%223.2%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22280%22%20y%3D%22332%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  }
];
