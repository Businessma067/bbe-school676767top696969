/**
 * Chapter 11 — Differentiation and single-variable optimization.
 * Subsections 11.1–11.5 (11.5: Exam-style tasks, MATH 11.161–11.175).
 * Lovable sync marker: 11.4 one-plane graphs; 11.5 hard multi-topic exam bank.
 */
import type { MathTask } from "@/data/math-chapters";
import ch11Exam from "@/data/math-ch11-exam.json";

export const MATH_CH11_SUBSECTIONS = [
  { id: "11.1", title: "Differentiation rules & mechanics" },
  { id: "11.2", title: "Economic interpretation of the derivative" },
  { id: "11.3", title: "Finding and classifying optima" },
  { id: "11.4", title: "Interpreting graphs without algebra" },
  { id: "11.5", title: "Exam-style tasks" },
] as const;

const MATH_CH11_CORE: MathTask[] = [
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
    id: "math-11-121",
    case_id: "MATH 11.121",
    title: "Classic downward f′: signs on (1,5)",
    subsection: "11.4",
    context:
      "The figure shows $f'$. Zeros are marked at $x=1$ and $x=5$; the peak is at $(3,4)$. Decide TRUE or FALSE using only the figure.",
    statements: [
      "On $(1,5)$ the curve is above the axis, so $f$ is increasing on $(1,5)$.",
      "At $x=5$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=5$.",
      "At $x=3$, $f'(3)=4$, so $x=3$ is a local minimum of $f$.",
      "On $(0,1)$ the curve is below the axis, so $f$ is decreasing there.",
      "The steepest climb of $f$ in the window is at $x=3$."
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Between the zeros the curve sits above the axis.

So the statement is True.`,
      `**B.** → True

A local maximum of $f$ is a zero of $f'$ where the sign of $f'$ changes from $+$ to $-$. A $+$ to $-$ crossing at $x=5$ is a local maximum of $f$.

So the statement is True.`,
      `**C.** → False

A local minimum of $f$ needs $f'=0$ with a $-$ to $+$ sign change. At $x=3$ one has $f'=4\neq 0$. That peak of $f'$ is an inflection of $f$, not a local min of $f$.

So the statement is False.`,
      `**D.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Left of $x=1$ the curve is below the axis.

So the statement is True.`,
      `**E.** → True

The steepest climb of $f$ is where $|f'|$ is largest among the positive heights — the peak of the $f'$ graph in the rising stretch. The largest positive height of $f'$ is $4$ at $x=3$.

So the statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 121,
    solution_overview:
      "Read signs between the marked zeros; do not treat the peak of $f'$ as a min of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1235380%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22616%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22616%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22616%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C319.0%2053.8%2C316.2%2055.5%2C313.4%2057.3%2C310.6%2059.0%2C307.9%2060.8%2C305.2%2062.6%2C302.4%2064.3%2C299.7%2066.1%2C297.1%2067.9%2C294.4%2069.6%2C291.8%2071.4%2C289.1%2073.2%2C286.5%2074.9%2C283.9%2076.7%2C281.3%2078.4%2C278.8%2080.2%2C276.2%2082.0%2C273.7%2083.7%2C271.2%2085.5%2C268.7%2087.2%2C266.3%2089.0%2C263.8%2090.8%2C261.4%2092.5%2C259.0%2094.3%2C256.6%2096.1%2C254.2%2097.8%2C251.8%2099.6%2C249.5%20101.3%2C247.1%20103.1%2C244.8%20104.9%2C242.5%20106.6%2C240.3%20108.4%2C238.0%20110.2%2C235.8%20111.9%2C233.5%20113.7%2C231.3%20115.5%2C229.1%20117.2%2C227.0%20119.0%2C224.8%20120.7%2C222.7%20122.5%2C220.6%20124.3%2C218.5%20126.0%2C216.4%20127.8%2C214.3%20129.6%2C212.3%20131.3%2C210.2%20133.1%2C208.2%20134.8%2C206.2%20136.6%2C204.2%20138.4%2C202.3%20140.1%2C200.3%20141.9%2C198.4%20143.7%2C196.5%20145.4%2C194.6%20147.2%2C192.8%20148.9%2C190.9%20150.7%2C189.1%20152.5%2C187.2%20154.2%2C185.4%20156.0%2C183.7%20157.8%2C181.9%20159.5%2C180.1%20161.3%2C178.4%20163.0%2C176.7%20164.8%2C175.0%20166.6%2C173.3%20168.3%2C171.7%20170.1%2C170.0%20171.8%2C168.4%20173.6%2C166.8%20175.4%2C165.2%20177.1%2C163.6%20178.9%2C162.1%20180.7%2C160.5%20182.4%2C159.0%20184.2%2C157.5%20186.0%2C156.0%20187.7%2C154.5%20189.5%2C153.1%20191.2%2C151.7%20193.0%2C150.2%20194.8%2C148.9%20196.5%2C147.5%20198.3%2C146.1%20200.1%2C144.8%20201.8%2C143.4%20203.6%2C142.1%20205.3%2C140.8%20207.1%2C139.6%20208.9%2C138.3%20210.6%2C137.1%20212.4%2C135.8%20214.2%2C134.6%20215.9%2C133.5%20217.7%2C132.3%20219.4%2C131.1%20221.2%2C130.0%20223.0%2C128.9%20224.7%2C127.8%20226.5%2C126.7%20228.2%2C125.6%20230.0%2C124.6%20231.8%2C123.6%20233.5%2C122.6%20235.3%2C121.6%20237.1%2C120.6%20238.8%2C119.6%20240.6%2C118.7%20242.3%2C117.8%20244.1%2C116.9%20245.9%2C116.0%20247.6%2C115.1%20249.4%2C114.2%20251.2%2C113.4%20252.9%2C112.6%20254.7%2C111.8%20256.4%2C111.0%20258.2%2C110.3%20260.0%2C109.5%20261.7%2C108.8%20263.5%2C108.1%20265.3%2C107.4%20267.0%2C106.7%20268.8%2C106.0%20270.6%2C105.4%20272.3%2C104.8%20274.1%2C104.2%20275.8%2C103.6%20277.6%2C103.0%20279.4%2C102.4%20281.1%2C101.9%20282.9%2C101.4%20284.6%2C100.9%20286.4%2C100.4%20288.2%2C99.9%20289.9%2C99.5%20291.7%2C99.1%20293.5%2C98.6%20295.2%2C98.3%20297.0%2C97.9%20298.8%2C97.5%20300.5%2C97.2%20302.3%2C96.8%20304.0%2C96.5%20305.8%2C96.2%20307.6%2C96.0%20309.3%2C95.7%20311.1%2C95.5%20312.8%2C95.3%20314.6%2C95.1%20316.4%2C94.9%20318.1%2C94.7%20319.9%2C94.6%20321.7%2C94.4%20323.4%2C94.3%20325.2%2C94.2%20326.9%2C94.1%20328.7%2C94.1%20330.5%2C94.0%20332.2%2C94.0%20334.0%2C94.0%20335.8%2C94.0%20337.5%2C94.0%20339.3%2C94.1%20341.1%2C94.1%20342.8%2C94.2%20344.6%2C94.3%20346.3%2C94.4%20348.1%2C94.6%20349.9%2C94.7%20351.6%2C94.9%20353.4%2C95.1%20355.1%2C95.3%20356.9%2C95.5%20358.7%2C95.7%20360.4%2C96.0%20362.2%2C96.2%20364.0%2C96.5%20365.7%2C96.8%20367.5%2C97.2%20369.2%2C97.5%20371.0%2C97.9%20372.8%2C98.3%20374.5%2C98.6%20376.3%2C99.1%20378.1%2C99.5%20379.8%2C99.9%20381.6%2C100.4%20383.4%2C100.9%20385.1%2C101.4%20386.9%2C101.9%20388.6%2C102.4%20390.4%2C103.0%20392.2%2C103.6%20393.9%2C104.2%20395.7%2C104.8%20397.4%2C105.4%20399.2%2C106.0%20401.0%2C106.7%20402.7%2C107.4%20404.5%2C108.1%20406.3%2C108.8%20408.0%2C109.5%20409.8%2C110.3%20411.6%2C111.0%20413.3%2C111.8%20415.1%2C112.6%20416.8%2C113.4%20418.6%2C114.2%20420.4%2C115.1%20422.1%2C116.0%20423.9%2C116.9%20425.6%2C117.8%20427.4%2C118.7%20429.2%2C119.6%20430.9%2C120.6%20432.7%2C121.6%20434.5%2C122.6%20436.2%2C123.6%20438.0%2C124.6%20439.8%2C125.6%20441.5%2C126.7%20443.3%2C127.8%20445.0%2C128.9%20446.8%2C130.0%20448.6%2C131.1%20450.3%2C132.3%20452.1%2C133.5%20453.9%2C134.6%20455.6%2C135.8%20457.4%2C137.1%20459.1%2C138.3%20460.9%2C139.6%20462.7%2C140.8%20464.4%2C142.1%20466.2%2C143.4%20467.9%2C144.8%20469.7%2C146.1%20471.5%2C147.5%20473.2%2C148.9%20475.0%2C150.2%20476.8%2C151.7%20478.5%2C153.1%20480.3%2C154.5%20482.1%2C156.0%20483.8%2C157.5%20485.6%2C159.0%20487.3%2C160.5%20489.1%2C162.1%20490.9%2C163.6%20492.6%2C165.2%20494.4%2C166.8%20496.1%2C168.4%20497.9%2C170.0%20499.7%2C171.7%20501.4%2C173.3%20503.2%2C175.0%20505.0%2C176.7%20506.7%2C178.4%20508.5%2C180.1%20510.2%2C181.9%20512.0%2C183.7%20513.8%2C185.4%20515.5%2C187.2%20517.3%2C189.1%20519.1%2C190.9%20520.8%2C192.8%20522.6%2C194.6%20524.4%2C196.5%20526.1%2C198.4%20527.9%2C200.3%20529.6%2C202.3%20531.4%2C204.2%20533.2%2C206.2%20534.9%2C208.2%20536.7%2C210.2%20538.5%2C212.3%20540.2%2C214.3%20542.0%2C216.4%20543.7%2C218.5%20545.5%2C220.6%20547.3%2C222.7%20549.0%2C224.8%20550.8%2C227.0%20552.5%2C229.1%20554.3%2C231.3%20556.1%2C233.5%20557.8%2C235.8%20559.6%2C238.0%20561.4%2C240.3%20563.1%2C242.5%20564.9%2C244.8%20566.6%2C247.1%20568.4%2C249.5%20570.2%2C251.8%20571.9%2C254.2%20573.7%2C256.6%20575.5%2C259.0%20577.2%2C261.4%20579.0%2C263.8%20580.8%2C266.3%20582.5%2C268.7%20584.3%2C271.2%20586.0%2C273.7%20587.8%2C276.2%20589.6%2C278.8%20591.3%2C281.3%20593.1%2C283.9%20594.9%2C286.5%20596.6%2C289.1%20598.4%2C291.8%20600.1%2C294.4%20601.9%2C297.1%20603.7%2C299.7%20605.4%2C302.4%20607.2%2C305.2%20608.9%2C307.9%20610.7%2C310.6%20612.5%2C313.4%20614.2%2C316.2%20616.0%2C319.0%22%20clip-path%3D%22url%28%23clip-1235380%29%22%2F%3E%0A%3Ccircle%20cx%3D%22146.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22522.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22334.0%22%20cy%3D%2294.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-122",
    case_id: "MATH 11.122",
    title: "Upward f′: local max then local min of f",
    subsection: "11.4",
    context:
      "The figure shows $f'$ with zeros at $x=2$ and $x=4$. Decide TRUE or FALSE.",
    statements: [
      "At $x=2$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=2$.",
      "At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=4$.",
      "On $(2,4)$ the curve is below the axis, so $f$ is decreasing on $(2,4)$.",
      "At $x=3$, the height of $f'$ is about $-1$.",
      "Because $f'(3)<0$, the point $x=3$ is a local minimum of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A local maximum of $f$ is a zero of $f'$ where the sign of $f'$ changes from $+$ to $-$. Sign change $+$ to $-$ at $x=2$.

So the statement is True.`,
      `**B.** → True

A local minimum of $f$ is a zero of $f'$ where the sign changes from $-$ to $+$. At $x=4$ the figure shows exactly that crossing.

So the statement is True.`,
      `**C.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. The curve dips below the axis between the zeros.

So the statement is True.`,
      `**D.** → True

The lowest point of the curve sits near height $-1$ at $x=3$.

So the statement is True.`,
      `**E.** → False

A local minimum of $f$ needs $f'=0$ with a $-$ to $+$ sign change. A local extremum of $f$ needs $f'=0$ (with a sign change). Here $f'(3)\neq 0$.

So the statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 122,
    solution_overview:
      "Two zeros give max then min of $f$; the lowest point of $f'$ is not a critical point of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-6596868%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22310.7%22%20x2%3D%22616%22%20y2%3D%22310.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22616%22%20y2%3D%22177.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22110.7%22%20x2%3D%22616%22%20y2%3D%22110.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22310.7%22%20x2%3D%2252%22%20y2%3D%22310.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22314.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22177.3%22%20x2%3D%2252%22%20y2%3D%22177.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22181.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22110.7%22%20x2%3D%2252%22%20y2%3D%22110.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22114.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-22.7%2053.8%2C-18.9%2055.5%2C-15.2%2057.3%2C-11.5%2059.0%2C-7.9%2060.8%2C-4.2%2062.6%2C-0.6%2064.3%2C3.0%2066.1%2C6.6%2067.9%2C10.1%2069.6%2C13.7%2071.4%2C17.2%2073.2%2C20.6%2074.9%2C24.1%2076.7%2C27.5%2078.4%2C30.9%2080.2%2C34.3%2082.0%2C37.7%2083.7%2C41.0%2085.5%2C44.4%2087.2%2C47.6%2089.0%2C50.9%2090.8%2C54.2%2092.5%2C57.4%2094.3%2C60.6%2096.1%2C63.8%2097.8%2C66.9%2099.6%2C70.0%20101.3%2C73.1%20103.1%2C76.2%20104.9%2C79.3%20106.6%2C82.3%20108.4%2C85.3%20110.2%2C88.3%20111.9%2C91.3%20113.7%2C94.2%20115.5%2C97.1%20117.2%2C100.0%20119.0%2C102.9%20120.7%2C105.8%20122.5%2C108.6%20124.3%2C111.4%20126.0%2C114.2%20127.8%2C116.9%20129.6%2C119.6%20131.3%2C122.4%20133.1%2C125.0%20134.8%2C127.7%20136.6%2C130.3%20138.4%2C132.9%20140.1%2C135.5%20141.9%2C138.1%20143.7%2C140.6%20145.4%2C143.2%20147.2%2C145.7%20148.9%2C148.1%20150.7%2C150.6%20152.5%2C153.0%20154.2%2C155.4%20156.0%2C157.8%20157.8%2C160.1%20159.5%2C162.5%20161.3%2C164.8%20163.0%2C167.1%20164.8%2C169.3%20166.6%2C171.6%20168.3%2C173.8%20170.1%2C176.0%20171.8%2C178.1%20173.6%2C180.3%20175.4%2C182.4%20177.1%2C184.5%20178.9%2C186.6%20180.7%2C188.6%20182.4%2C190.7%20184.2%2C192.7%20186.0%2C194.6%20187.7%2C196.6%20189.5%2C198.5%20191.2%2C200.4%20193.0%2C202.3%20194.8%2C204.2%20196.5%2C206.0%20198.3%2C207.9%20200.1%2C209.6%20201.8%2C211.4%20203.6%2C213.2%20205.3%2C214.9%20207.1%2C216.6%20208.9%2C218.3%20210.6%2C219.9%20212.4%2C221.5%20214.2%2C223.1%20215.9%2C224.7%20217.7%2C226.3%20219.4%2C227.8%20221.2%2C229.3%20223.0%2C230.8%20224.7%2C232.3%20226.5%2C233.7%20228.2%2C235.1%20230.0%2C236.5%20231.8%2C237.9%20233.5%2C239.3%20235.3%2C240.6%20237.1%2C241.9%20238.8%2C243.2%20240.6%2C244.4%20242.3%2C245.6%20244.1%2C246.9%20245.9%2C248.0%20247.6%2C249.2%20249.4%2C250.3%20251.2%2C251.4%20252.9%2C252.5%20254.7%2C253.6%20256.4%2C254.6%20258.2%2C255.7%20260.0%2C256.7%20261.7%2C257.6%20263.5%2C258.6%20265.3%2C259.5%20267.0%2C260.4%20268.8%2C261.3%20270.6%2C262.1%20272.3%2C263.0%20274.1%2C263.8%20275.8%2C264.6%20277.6%2C265.3%20279.4%2C266.1%20281.1%2C266.8%20282.9%2C267.5%20284.6%2C268.1%20286.4%2C268.8%20288.2%2C269.4%20289.9%2C270.0%20291.7%2C270.6%20293.5%2C271.1%20295.2%2C271.7%20297.0%2C272.2%20298.8%2C272.6%20300.5%2C273.1%20302.3%2C273.5%20304.0%2C273.9%20305.8%2C274.3%20307.6%2C274.7%20309.3%2C275.0%20311.1%2C275.4%20312.8%2C275.6%20314.6%2C275.9%20316.4%2C276.2%20318.1%2C276.4%20319.9%2C276.6%20321.7%2C276.8%20323.4%2C276.9%20325.2%2C277.0%20326.9%2C277.1%20328.7%2C277.2%20330.5%2C277.3%20332.2%2C277.3%20334.0%2C277.3%20335.8%2C277.3%20337.5%2C277.3%20339.3%2C277.2%20341.1%2C277.1%20342.8%2C277.0%20344.6%2C276.9%20346.3%2C276.8%20348.1%2C276.6%20349.9%2C276.4%20351.6%2C276.2%20353.4%2C275.9%20355.1%2C275.6%20356.9%2C275.4%20358.7%2C275.0%20360.4%2C274.7%20362.2%2C274.3%20364.0%2C273.9%20365.7%2C273.5%20367.5%2C273.1%20369.2%2C272.6%20371.0%2C272.2%20372.8%2C271.7%20374.5%2C271.1%20376.3%2C270.6%20378.1%2C270.0%20379.8%2C269.4%20381.6%2C268.8%20383.4%2C268.1%20385.1%2C267.5%20386.9%2C266.8%20388.6%2C266.1%20390.4%2C265.3%20392.2%2C264.6%20393.9%2C263.8%20395.7%2C263.0%20397.4%2C262.1%20399.2%2C261.3%20401.0%2C260.4%20402.7%2C259.5%20404.5%2C258.6%20406.3%2C257.6%20408.0%2C256.7%20409.8%2C255.7%20411.6%2C254.6%20413.3%2C253.6%20415.1%2C252.5%20416.8%2C251.4%20418.6%2C250.3%20420.4%2C249.2%20422.1%2C248.0%20423.9%2C246.9%20425.6%2C245.6%20427.4%2C244.4%20429.2%2C243.2%20430.9%2C241.9%20432.7%2C240.6%20434.5%2C239.3%20436.2%2C237.9%20438.0%2C236.5%20439.8%2C235.1%20441.5%2C233.7%20443.3%2C232.3%20445.0%2C230.8%20446.8%2C229.3%20448.6%2C227.8%20450.3%2C226.3%20452.1%2C224.7%20453.9%2C223.1%20455.6%2C221.5%20457.4%2C219.9%20459.1%2C218.3%20460.9%2C216.6%20462.7%2C214.9%20464.4%2C213.2%20466.2%2C211.4%20467.9%2C209.6%20469.7%2C207.9%20471.5%2C206.0%20473.2%2C204.2%20475.0%2C202.3%20476.8%2C200.4%20478.5%2C198.5%20480.3%2C196.6%20482.1%2C194.6%20483.8%2C192.7%20485.6%2C190.7%20487.3%2C188.6%20489.1%2C186.6%20490.9%2C184.5%20492.6%2C182.4%20494.4%2C180.3%20496.1%2C178.1%20497.9%2C176.0%20499.7%2C173.8%20501.4%2C171.6%20503.2%2C169.3%20505.0%2C167.1%20506.7%2C164.8%20508.5%2C162.5%20510.2%2C160.1%20512.0%2C157.8%20513.8%2C155.4%20515.5%2C153.0%20517.3%2C150.6%20519.1%2C148.1%20520.8%2C145.7%20522.6%2C143.2%20524.4%2C140.6%20526.1%2C138.1%20527.9%2C135.5%20529.6%2C132.9%20531.4%2C130.3%20533.2%2C127.7%20534.9%2C125.0%20536.7%2C122.4%20538.5%2C119.6%20540.2%2C116.9%20542.0%2C114.2%20543.7%2C111.4%20545.5%2C108.6%20547.3%2C105.8%20549.0%2C102.9%20550.8%2C100.0%20552.5%2C97.1%20554.3%2C94.2%20556.1%2C91.3%20557.8%2C88.3%20559.6%2C85.3%20561.4%2C82.3%20563.1%2C79.3%20564.9%2C76.2%20566.6%2C73.1%20568.4%2C70.0%20570.2%2C66.9%20571.9%2C63.8%20573.7%2C60.6%20575.5%2C57.4%20577.2%2C54.2%20579.0%2C50.9%20580.8%2C47.6%20582.5%2C44.4%20584.3%2C41.0%20586.0%2C37.7%20587.8%2C34.3%20589.6%2C30.9%20591.3%2C27.5%20593.1%2C24.1%20594.9%2C20.6%20596.6%2C17.2%20598.4%2C13.7%20600.1%2C10.1%20601.9%2C6.6%20603.7%2C3.0%20605.4%2C-0.6%20607.2%2C-4.2%20608.9%2C-7.9%20610.7%2C-11.5%20612.5%2C-15.2%20614.2%2C-18.9%20616.0%2C-22.7%22%20clip-path%3D%22url%28%23clip-6596868%29%22%2F%3E%0A%3Ccircle%20cx%3D%22240.0%22%20cy%3D%22244.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22428.0%22%20cy%3D%22244.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22334.0%22%20cy%3D%22277.3%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-123",
    case_id: "MATH 11.123",
    title: "Easy reading of f: rise between x=1 and x=5",
    subsection: "11.4",
    context:
      "The figure shows $f$. Decide TRUE or FALSE from the shape alone.",
    statements: [
      "The graph has a local minimum near $x=1$.",
      "The graph has a local maximum near $x=5$.",
      "Between those turning points the graph is rising.",
      "Near $x=3$ the graph is steepest upward in this window.",
      "Because the graph crosses the axis near $x=0$, one must have $f'(0)=0$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Compare heights on the shared vertical scale. Reading the figure, the graph of $f$ has a local lowest point near $x=1$.

So the statement is True.`,
      `**B.** → True

Compare heights on the shared vertical scale. Reading the figure, the graph of $f$ has a local highest point near $x=5$.

So the statement is True.`,
      `**C.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Between the local lowest point and the local highest point the graph is climbing, so $f$ is increasing on that stretch.

So the statement is True.`,
      `**D.** → True

The steepest climb of $f$ is where $|f'|$ is largest among the positive heights — the peak of the $f'$ graph in the rising stretch. The middle of the climb is the steepest stretch.

So the statement is True.`,
      `**E.** → False

An axis crossing of the level curve is where $f=0$. That is not the same thing as a critical point $f'=0$.

So the statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 123,
    solution_overview:
      "Read turning points and the rising stretch directly from the graph of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5609158%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22310.7%22%20x2%3D%22616%22%20y2%3D%22310.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22616%22%20y2%3D%22177.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22110.7%22%20x2%3D%22616%22%20y2%3D%22110.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22616%22%20y2%3D%22177.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22310.7%22%20x2%3D%2252%22%20y2%3D%22310.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22314.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22177.3%22%20x2%3D%2252%22%20y2%3D%22177.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22181.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22110.7%22%20x2%3D%2252%22%20y2%3D%22110.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22114.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C177.3%2053.8%2C178.9%2055.5%2C180.4%2057.3%2C181.9%2059.0%2C183.3%2060.8%2C184.7%2062.6%2C186.1%2064.3%2C187.4%2066.1%2C188.7%2067.9%2C190.0%2069.6%2C191.2%2071.4%2C192.4%2073.2%2C193.6%2074.9%2C194.8%2076.7%2C195.9%2078.4%2C196.9%2080.2%2C198.0%2082.0%2C199.0%2083.7%2C200.0%2085.5%2C200.9%2087.2%2C201.8%2089.0%2C202.7%2090.8%2C203.6%2092.5%2C204.4%2094.3%2C205.2%2096.1%2C206.0%2097.8%2C206.7%2099.6%2C207.4%20101.3%2C208.1%20103.1%2C208.8%20104.9%2C209.4%20106.6%2C210.0%20108.4%2C210.5%20110.2%2C211.1%20111.9%2C211.6%20113.7%2C212.1%20115.5%2C212.5%20117.2%2C212.9%20119.0%2C213.3%20120.7%2C213.7%20122.5%2C214.1%20124.3%2C214.4%20126.0%2C214.7%20127.8%2C214.9%20129.6%2C215.2%20131.3%2C215.4%20133.1%2C215.6%20134.8%2C215.7%20136.6%2C215.9%20138.4%2C216.0%20140.1%2C216.1%20141.9%2C216.2%20143.7%2C216.2%20145.4%2C216.2%20147.2%2C216.2%20148.9%2C216.2%20150.7%2C216.1%20152.5%2C216.1%20154.2%2C216.0%20156.0%2C215.9%20157.8%2C215.7%20159.5%2C215.5%20161.3%2C215.4%20163.0%2C215.2%20164.8%2C214.9%20166.6%2C214.7%20168.3%2C214.4%20170.1%2C214.1%20171.8%2C213.8%20173.6%2C213.5%20175.4%2C213.1%20177.1%2C212.8%20178.9%2C212.4%20180.7%2C212.0%20182.4%2C211.5%20184.2%2C211.1%20186.0%2C210.6%20187.7%2C210.1%20189.5%2C209.6%20191.2%2C209.1%20193.0%2C208.6%20194.8%2C208.0%20196.5%2C207.5%20198.3%2C206.9%20200.1%2C206.3%20201.8%2C205.6%20203.6%2C205.0%20205.3%2C204.3%20207.1%2C203.7%20208.9%2C203.0%20210.6%2C202.3%20212.4%2C201.6%20214.2%2C200.8%20215.9%2C200.1%20217.7%2C199.3%20219.4%2C198.5%20221.2%2C197.7%20223.0%2C196.9%20224.7%2C196.1%20226.5%2C195.3%20228.2%2C194.4%20230.0%2C193.6%20231.8%2C192.7%20233.5%2C191.8%20235.3%2C190.9%20237.1%2C190.0%20238.8%2C189.1%20240.6%2C188.1%20242.3%2C187.2%20244.1%2C186.2%20245.9%2C185.3%20247.6%2C184.3%20249.4%2C183.3%20251.2%2C182.3%20252.9%2C181.3%20254.7%2C180.2%20256.4%2C179.2%20258.2%2C178.2%20260.0%2C177.1%20261.7%2C176.1%20263.5%2C175.0%20265.3%2C173.9%20267.0%2C172.8%20268.8%2C171.7%20270.6%2C170.6%20272.3%2C169.5%20274.1%2C168.4%20275.8%2C167.3%20277.6%2C166.1%20279.4%2C165.0%20281.1%2C163.8%20282.9%2C162.7%20284.6%2C161.5%20286.4%2C160.4%20288.2%2C159.2%20289.9%2C158.0%20291.7%2C156.8%20293.5%2C155.6%20295.2%2C154.4%20297.0%2C153.2%20298.8%2C152.0%20300.5%2C150.8%20302.3%2C149.6%20304.0%2C148.4%20305.8%2C147.2%20307.6%2C146.0%20309.3%2C144.7%20311.1%2C143.5%20312.8%2C142.3%20314.6%2C141.0%20316.4%2C139.8%20318.1%2C138.6%20319.9%2C137.3%20321.7%2C136.1%20323.4%2C134.8%20325.2%2C133.6%20326.9%2C132.3%20328.7%2C131.1%20330.5%2C129.8%20332.2%2C128.6%20334.0%2C127.3%20335.8%2C126.1%20337.5%2C124.8%20339.3%2C123.6%20341.1%2C122.3%20342.8%2C121.1%20344.6%2C119.8%20346.3%2C118.6%20348.1%2C117.4%20349.9%2C116.1%20351.6%2C114.9%20353.4%2C113.6%20355.1%2C112.4%20356.9%2C111.2%20358.7%2C109.9%20360.4%2C108.7%20362.2%2C107.5%20364.0%2C106.3%20365.7%2C105.0%20367.5%2C103.8%20369.2%2C102.6%20371.0%2C101.4%20372.8%2C100.2%20374.5%2C99.0%20376.3%2C97.8%20378.1%2C96.7%20379.8%2C95.5%20381.6%2C94.3%20383.4%2C93.1%20385.1%2C92.0%20386.9%2C90.8%20388.6%2C89.7%20390.4%2C88.5%20392.2%2C87.4%20393.9%2C86.3%20395.7%2C85.2%20397.4%2C84.0%20399.2%2C82.9%20401.0%2C81.8%20402.7%2C80.8%20404.5%2C79.7%20406.3%2C78.6%20408.0%2C77.5%20409.8%2C76.5%20411.6%2C75.5%20413.3%2C74.4%20415.1%2C73.4%20416.8%2C72.4%20418.6%2C71.4%20420.4%2C70.4%20422.1%2C69.4%20423.9%2C68.4%20425.6%2C67.5%20427.4%2C66.5%20429.2%2C65.6%20430.9%2C64.7%20432.7%2C63.8%20434.5%2C62.9%20436.2%2C62.0%20438.0%2C61.1%20439.8%2C60.2%20441.5%2C59.4%20443.3%2C58.6%20445.0%2C57.7%20446.8%2C56.9%20448.6%2C56.1%20450.3%2C55.4%20452.1%2C54.6%20453.9%2C53.8%20455.6%2C53.1%20457.4%2C52.4%20459.1%2C51.7%20460.9%2C51.0%20462.7%2C50.3%20464.4%2C49.7%20466.2%2C49.0%20467.9%2C48.4%20469.7%2C47.8%20471.5%2C47.2%20473.2%2C46.6%20475.0%2C46.1%20476.8%2C45.5%20478.5%2C45.0%20480.3%2C44.5%20482.1%2C44.0%20483.8%2C43.6%20485.6%2C43.1%20487.3%2C42.7%20489.1%2C42.3%20490.9%2C41.9%20492.6%2C41.5%20494.4%2C41.2%20496.1%2C40.8%20497.9%2C40.5%20499.7%2C40.3%20501.4%2C40.0%20503.2%2C39.7%20505.0%2C39.5%20506.7%2C39.3%20508.5%2C39.1%20510.2%2C39.0%20512.0%2C38.8%20513.8%2C38.7%20515.5%2C38.6%20517.3%2C38.5%20519.1%2C38.5%20520.8%2C38.4%20522.6%2C38.4%20524.4%2C38.5%20526.1%2C38.5%20527.9%2C38.6%20529.6%2C38.7%20531.4%2C38.8%20533.2%2C38.9%20534.9%2C39.1%20536.7%2C39.3%20538.5%2C39.5%20540.2%2C39.7%20542.0%2C40.0%20543.7%2C40.3%20545.5%2C40.6%20547.3%2C41.0%20549.0%2C41.3%20550.8%2C41.7%20552.5%2C42.2%20554.3%2C42.6%20556.1%2C43.1%20557.8%2C43.6%20559.6%2C44.1%20561.4%2C44.7%20563.1%2C45.3%20564.9%2C45.9%20566.6%2C46.6%20568.4%2C47.2%20570.2%2C47.9%20571.9%2C48.7%20573.7%2C49.5%20575.5%2C50.2%20577.2%2C51.1%20579.0%2C51.9%20580.8%2C52.8%20582.5%2C53.7%20584.3%2C54.7%20586.0%2C55.7%20587.8%2C56.7%20589.6%2C57.7%20591.3%2C58.8%20593.1%2C59.9%20594.9%2C61.1%20596.6%2C62.2%20598.4%2C63.4%20600.1%2C64.7%20601.9%2C65.9%20603.7%2C67.2%20605.4%2C68.6%20607.2%2C70.0%20608.9%2C71.4%20610.7%2C72.8%20612.5%2C74.3%20614.2%2C75.8%20616.0%2C77.3%22%20clip-path%3D%22url%28%23clip-5609158%29%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-124",
    case_id: "MATH 11.124",
    title: "Linear P′: expand left of the zero",
    subsection: "11.4",
    context:
      "The figure shows marginal profit $P'$. It crosses the axis once near $x=4.2$. Decide TRUE or FALSE.",
    statements: [
      "On $(0,4)$ one has $P'>0$, so a little more output raises profit.",
      "On $(5,6)$ one has $P'<0$, so a little more output lowers profit.",
      "A local profit peak occurs at the marked zero of $P'$.",
      "At $x=1$, reading the scale, $P'$ is greater than $1$.",
      "Because $P'$ is a straight line, profit $P$ itself must be a straight line."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Left of the zero the curve is above the axis.

So the statement is True.`,
      `**B.** → True

Right of the zero the curve is below the axis.

So the statement is True.`,
      `**C.** → True

Profit has a local peak where marginal profit crosses from positive to negative. Sign change $+$ to $-$ ⇒ local maximum of $P$.

So the statement is True.`,
      `**D.** → True

Read the figure at $x=1$. At $x=1$ the height is near $1.9$.

So the statement is True.`,
      `**E.** → False

Marginal profit above the axis means expand a little; below means contract. A linear $P'$ means $P$ is quadratic (a parabola), not linear.

So the statement is False.`
    ],
    difficulty_level: "2/5",
    sort_order: 124,
    solution_overview:
      "One zero of a falling linear $P'$: expand left, contract right; peak at the zero.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EMarginal%20profit%20P%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1039093%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22616%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22284.0%22%20x2%3D%22616%22%20y2%3D%22284.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22616%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22164.0%22%20x2%3D%22616%22%20y2%3D%22164.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22104.0%22%20x2%3D%22616%22%20y2%3D%22104.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22616%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22284.0%22%20x2%3D%2252%22%20y2%3D%22284.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22288.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22164.0%22%20x2%3D%2252%22%20y2%3D%22164.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22168.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22104.0%22%20x2%3D%2252%22%20y2%3D%22104.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22108.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C74.0%2053.8%2C74.7%2055.5%2C75.3%2057.3%2C76.0%2059.0%2C76.7%2060.8%2C77.4%2062.6%2C78.0%2064.3%2C78.7%2066.1%2C79.4%2067.9%2C80.1%2069.6%2C80.8%2071.4%2C81.4%2073.2%2C82.1%2074.9%2C82.8%2076.7%2C83.5%2078.4%2C84.1%2080.2%2C84.8%2082.0%2C85.5%2083.7%2C86.2%2085.5%2C86.8%2087.2%2C87.5%2089.0%2C88.2%2090.8%2C88.9%2092.5%2C89.5%2094.3%2C90.2%2096.1%2C90.9%2097.8%2C91.5%2099.6%2C92.2%20101.3%2C92.9%20103.1%2C93.6%20104.9%2C94.2%20106.6%2C94.9%20108.4%2C95.6%20110.2%2C96.3%20111.9%2C96.9%20113.7%2C97.6%20115.5%2C98.3%20117.2%2C99.0%20119.0%2C99.7%20120.7%2C100.3%20122.5%2C101.0%20124.3%2C101.7%20126.0%2C102.4%20127.8%2C103.0%20129.6%2C103.7%20131.3%2C104.4%20133.1%2C105.1%20134.8%2C105.7%20136.6%2C106.4%20138.4%2C107.1%20140.1%2C107.8%20141.9%2C108.4%20143.7%2C109.1%20145.4%2C109.8%20147.2%2C110.4%20148.9%2C111.1%20150.7%2C111.8%20152.5%2C112.5%20154.2%2C113.1%20156.0%2C113.8%20157.8%2C114.5%20159.5%2C115.2%20161.3%2C115.8%20163.0%2C116.5%20164.8%2C117.2%20166.6%2C117.9%20168.3%2C118.6%20170.1%2C119.2%20171.8%2C119.9%20173.6%2C120.6%20175.4%2C121.2%20177.1%2C121.9%20178.9%2C122.6%20180.7%2C123.3%20182.4%2C124.0%20184.2%2C124.6%20186.0%2C125.3%20187.7%2C126.0%20189.5%2C126.6%20191.2%2C127.3%20193.0%2C128.0%20194.8%2C128.7%20196.5%2C129.3%20198.3%2C130.0%20200.1%2C130.7%20201.8%2C131.4%20203.6%2C132.1%20205.3%2C132.7%20207.1%2C133.4%20208.9%2C134.1%20210.6%2C134.8%20212.4%2C135.4%20214.2%2C136.1%20215.9%2C136.8%20217.7%2C137.4%20219.4%2C138.1%20221.2%2C138.8%20223.0%2C139.5%20224.7%2C140.1%20226.5%2C140.8%20228.2%2C141.5%20230.0%2C142.2%20231.8%2C142.9%20233.5%2C143.5%20235.3%2C144.2%20237.1%2C144.9%20238.8%2C145.6%20240.6%2C146.2%20242.3%2C146.9%20244.1%2C147.6%20245.9%2C148.2%20247.6%2C148.9%20249.4%2C149.6%20251.2%2C150.3%20252.9%2C150.9%20254.7%2C151.6%20256.4%2C152.3%20258.2%2C153.0%20260.0%2C153.6%20261.7%2C154.3%20263.5%2C155.0%20265.3%2C155.7%20267.0%2C156.3%20268.8%2C157.0%20270.6%2C157.7%20272.3%2C158.4%20274.1%2C159.0%20275.8%2C159.7%20277.6%2C160.4%20279.4%2C161.1%20281.1%2C161.8%20282.9%2C162.4%20284.6%2C163.1%20286.4%2C163.8%20288.2%2C164.5%20289.9%2C165.1%20291.7%2C165.8%20293.5%2C166.5%20295.2%2C167.2%20297.0%2C167.8%20298.8%2C168.5%20300.5%2C169.2%20302.3%2C169.9%20304.0%2C170.5%20305.8%2C171.2%20307.6%2C171.9%20309.3%2C172.6%20311.1%2C173.2%20312.8%2C173.9%20314.6%2C174.6%20316.4%2C175.2%20318.1%2C175.9%20319.9%2C176.6%20321.7%2C177.3%20323.4%2C177.9%20325.2%2C178.6%20326.9%2C179.3%20328.7%2C180.0%20330.5%2C180.6%20332.2%2C181.3%20334.0%2C182.0%20335.8%2C182.7%20337.5%2C183.3%20339.3%2C184.0%20341.1%2C184.7%20342.8%2C185.4%20344.6%2C186.0%20346.3%2C186.7%20348.1%2C187.4%20349.9%2C188.1%20351.6%2C188.7%20353.4%2C189.4%20355.1%2C190.1%20356.9%2C190.8%20358.7%2C191.4%20360.4%2C192.1%20362.2%2C192.8%20364.0%2C193.5%20365.7%2C194.1%20367.5%2C194.8%20369.2%2C195.5%20371.0%2C196.2%20372.8%2C196.8%20374.5%2C197.5%20376.3%2C198.2%20378.1%2C198.9%20379.8%2C199.5%20381.6%2C200.2%20383.4%2C200.9%20385.1%2C201.6%20386.9%2C202.2%20388.6%2C202.9%20390.4%2C203.6%20392.2%2C204.3%20393.9%2C204.9%20395.7%2C205.6%20397.4%2C206.3%20399.2%2C207.0%20401.0%2C207.7%20402.7%2C208.3%20404.5%2C209.0%20406.3%2C209.7%20408.0%2C210.3%20409.8%2C211.0%20411.6%2C211.7%20413.3%2C212.4%20415.1%2C213.1%20416.8%2C213.7%20418.6%2C214.4%20420.4%2C215.1%20422.1%2C215.8%20423.9%2C216.4%20425.6%2C217.1%20427.4%2C217.8%20429.2%2C218.5%20430.9%2C219.1%20432.7%2C219.8%20434.5%2C220.5%20436.2%2C221.2%20438.0%2C221.8%20439.8%2C222.5%20441.5%2C223.2%20443.3%2C223.8%20445.0%2C224.5%20446.8%2C225.2%20448.6%2C225.9%20450.3%2C226.6%20452.1%2C227.2%20453.9%2C227.9%20455.6%2C228.6%20457.4%2C229.2%20459.1%2C229.9%20460.9%2C230.6%20462.7%2C231.3%20464.4%2C231.9%20466.2%2C232.6%20467.9%2C233.3%20469.7%2C234.0%20471.5%2C234.7%20473.2%2C235.3%20475.0%2C236.0%20476.8%2C236.7%20478.5%2C237.3%20480.3%2C238.0%20482.1%2C238.7%20483.8%2C239.4%20485.6%2C240.0%20487.3%2C240.7%20489.1%2C241.4%20490.9%2C242.1%20492.6%2C242.8%20494.4%2C243.4%20496.1%2C244.1%20497.9%2C244.8%20499.7%2C245.4%20501.4%2C246.1%20503.2%2C246.8%20505.0%2C247.5%20506.7%2C248.2%20508.5%2C248.8%20510.2%2C249.5%20512.0%2C250.2%20513.8%2C250.8%20515.5%2C251.5%20517.3%2C252.2%20519.1%2C252.9%20520.8%2C253.5%20522.6%2C254.2%20524.4%2C254.9%20526.1%2C255.6%20527.9%2C256.2%20529.6%2C256.9%20531.4%2C257.6%20533.2%2C258.3%20534.9%2C259.0%20536.7%2C259.6%20538.5%2C260.3%20540.2%2C261.0%20542.0%2C261.6%20543.7%2C262.3%20545.5%2C263.0%20547.3%2C263.7%20549.0%2C264.3%20550.8%2C265.0%20552.5%2C265.7%20554.3%2C266.4%20556.1%2C267.0%20557.8%2C267.7%20559.6%2C268.4%20561.4%2C269.1%20563.1%2C269.8%20564.9%2C270.4%20566.6%2C271.1%20568.4%2C271.8%20570.2%2C272.5%20571.9%2C273.1%20573.7%2C273.8%20575.5%2C274.5%20577.2%2C275.1%20579.0%2C275.8%20580.8%2C276.5%20582.5%2C277.2%20584.3%2C277.8%20586.0%2C278.5%20587.8%2C279.2%20589.6%2C279.9%20591.3%2C280.5%20593.1%2C281.2%20594.9%2C281.9%20596.6%2C282.6%20598.4%2C283.2%20600.1%2C283.9%20601.9%2C284.6%20603.7%2C285.3%20605.4%2C286.0%20607.2%2C286.6%20608.9%2C287.3%20610.7%2C288.0%20612.5%2C288.7%20614.2%2C289.3%20616.0%2C290.0%22%20clip-path%3D%22url%28%23clip-1039093%29%22%2F%3E%0A%3Ccircle%20cx%3D%22443.7%22%20cy%3D%22224.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-125",
    case_id: "MATH 11.125",
    title: "Straight f′: one critical point at x=3",
    subsection: "11.4",
    context:
      "The figure shows a straight-line $f'$ crossing the axis at $x=3$. Decide TRUE or FALSE.",
    statements: [
      "On $(0,3)$, $f'>0$, so $f$ is increasing.",
      "On $(3,5)$, $f'<0$, so $f$ is decreasing.",
      "The function $f$ has a local maximum at $x=3$.",
      "At $x=1$, $f'$ equals $2$ on the scale.",
      "Because $f'$ is decreasing, $f$ is concave down throughout the window."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Left of the zero the line is above the axis.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Right of the zero the line is below the axis.

So the statement is True.`,
      `**C.** → True

$+$ to $-$ at $x=3$.

So the statement is True.`,
      `**D.** → True

Height $2$ at $x=1$.

So the statement is True.`,
      `**E.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Falling $f'$ means $f''<0$.

So the statement is True.`
    ],
    difficulty_level: "2/5",
    sort_order: 125,
    solution_overview:
      "One falling linear $f'$: increase then decrease; always concave down.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3884793%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%2244%22%20x2%3D%22164.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%2244%22%20x2%3D%22277.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%2244%22%20x2%3D%22390.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%2244%22%20x2%3D%22503.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22616%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22616%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22616%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22616%22%20y2%3D%22244.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%22344%22%20x2%3D%22164.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22164.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%22344%22%20x2%3D%22277.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22277.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%22344%22%20x2%3D%22390.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22390.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%22344%22%20x2%3D%22503.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22503.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C94.0%2053.8%2C94.8%2055.5%2C95.6%2057.3%2C96.3%2059.0%2C97.1%2060.8%2C97.9%2062.6%2C98.7%2064.3%2C99.5%2066.1%2C100.2%2067.9%2C101.0%2069.6%2C101.8%2071.4%2C102.6%2073.2%2C103.4%2074.9%2C104.2%2076.7%2C104.9%2078.4%2C105.7%2080.2%2C106.5%2082.0%2C107.3%2083.7%2C108.1%2085.5%2C108.8%2087.2%2C109.6%2089.0%2C110.4%2090.8%2C111.2%2092.5%2C112.0%2094.3%2C112.8%2096.1%2C113.5%2097.8%2C114.3%2099.6%2C115.1%20101.3%2C115.9%20103.1%2C116.7%20104.9%2C117.4%20106.6%2C118.2%20108.4%2C119.0%20110.2%2C119.8%20111.9%2C120.6%20113.7%2C121.3%20115.5%2C122.1%20117.2%2C122.9%20119.0%2C123.7%20120.7%2C124.5%20122.5%2C125.2%20124.3%2C126.0%20126.0%2C126.8%20127.8%2C127.6%20129.6%2C128.4%20131.3%2C129.2%20133.1%2C129.9%20134.8%2C130.7%20136.6%2C131.5%20138.4%2C132.3%20140.1%2C133.1%20141.9%2C133.8%20143.7%2C134.6%20145.4%2C135.4%20147.2%2C136.2%20148.9%2C137.0%20150.7%2C137.8%20152.5%2C138.5%20154.2%2C139.3%20156.0%2C140.1%20157.8%2C140.9%20159.5%2C141.7%20161.3%2C142.4%20163.0%2C143.2%20164.8%2C144.0%20166.6%2C144.8%20168.3%2C145.6%20170.1%2C146.3%20171.8%2C147.1%20173.6%2C147.9%20175.4%2C148.7%20177.1%2C149.5%20178.9%2C150.2%20180.7%2C151.0%20182.4%2C151.8%20184.2%2C152.6%20185.9%2C153.4%20187.7%2C154.2%20189.5%2C154.9%20191.2%2C155.7%20193.0%2C156.5%20194.8%2C157.3%20196.5%2C158.1%20198.3%2C158.8%20200.1%2C159.6%20201.8%2C160.4%20203.6%2C161.2%20205.3%2C162.0%20207.1%2C162.8%20208.9%2C163.5%20210.6%2C164.3%20212.4%2C165.1%20214.1%2C165.9%20215.9%2C166.7%20217.7%2C167.4%20219.4%2C168.2%20221.2%2C169.0%20223.0%2C169.8%20224.7%2C170.6%20226.5%2C171.3%20228.2%2C172.1%20230.0%2C172.9%20231.8%2C173.7%20233.5%2C174.5%20235.3%2C175.2%20237.1%2C176.0%20238.8%2C176.8%20240.6%2C177.6%20242.4%2C178.4%20244.1%2C179.2%20245.9%2C179.9%20247.6%2C180.7%20249.4%2C181.5%20251.2%2C182.3%20252.9%2C183.1%20254.7%2C183.8%20256.4%2C184.6%20258.2%2C185.4%20260.0%2C186.2%20261.7%2C187.0%20263.5%2C187.8%20265.3%2C188.5%20267.0%2C189.3%20268.8%2C190.1%20270.6%2C190.9%20272.3%2C191.7%20274.1%2C192.4%20275.8%2C193.2%20277.6%2C194.0%20279.4%2C194.8%20281.1%2C195.6%20282.9%2C196.3%20284.6%2C197.1%20286.4%2C197.9%20288.2%2C198.7%20289.9%2C199.5%20291.7%2C200.2%20293.5%2C201.0%20295.2%2C201.8%20297.0%2C202.6%20298.8%2C203.4%20300.5%2C204.2%20302.3%2C204.9%20304.0%2C205.7%20305.8%2C206.5%20307.6%2C207.3%20309.3%2C208.1%20311.1%2C208.8%20312.9%2C209.6%20314.6%2C210.4%20316.4%2C211.2%20318.1%2C212.0%20319.9%2C212.8%20321.7%2C213.5%20323.4%2C214.3%20325.2%2C215.1%20326.9%2C215.9%20328.7%2C216.7%20330.5%2C217.4%20332.2%2C218.2%20334.0%2C219.0%20335.8%2C219.8%20337.5%2C220.6%20339.3%2C221.3%20341.0%2C222.1%20342.8%2C222.9%20344.6%2C223.7%20346.3%2C224.5%20348.1%2C225.2%20349.9%2C226.0%20351.6%2C226.8%20353.4%2C227.6%20355.1%2C228.4%20356.9%2C229.2%20358.7%2C229.9%20360.4%2C230.7%20362.2%2C231.5%20364.0%2C232.3%20365.7%2C233.1%20367.5%2C233.8%20369.2%2C234.6%20371.0%2C235.4%20372.8%2C236.2%20374.5%2C237.0%20376.3%2C237.8%20378.1%2C238.5%20379.8%2C239.3%20381.6%2C240.1%20383.4%2C240.9%20385.1%2C241.7%20386.9%2C242.4%20388.6%2C243.2%20390.4%2C244.0%20392.2%2C244.8%20393.9%2C245.6%20395.7%2C246.3%20397.5%2C247.1%20399.2%2C247.9%20401.0%2C248.7%20402.7%2C249.5%20404.5%2C250.2%20406.3%2C251.0%20408.0%2C251.8%20409.8%2C252.6%20411.5%2C253.4%20413.3%2C254.2%20415.1%2C254.9%20416.8%2C255.7%20418.6%2C256.5%20420.4%2C257.3%20422.1%2C258.1%20423.9%2C258.8%20425.6%2C259.6%20427.4%2C260.4%20429.2%2C261.2%20430.9%2C262.0%20432.7%2C262.8%20434.5%2C263.5%20436.2%2C264.3%20438.0%2C265.1%20439.8%2C265.9%20441.5%2C266.7%20443.3%2C267.4%20445.0%2C268.2%20446.8%2C269.0%20448.6%2C269.8%20450.3%2C270.6%20452.1%2C271.3%20453.9%2C272.1%20455.6%2C272.9%20457.4%2C273.7%20459.1%2C274.5%20460.9%2C275.2%20462.7%2C276.0%20464.4%2C276.8%20466.2%2C277.6%20468.0%2C278.4%20469.7%2C279.2%20471.5%2C279.9%20473.2%2C280.7%20475.0%2C281.5%20476.8%2C282.3%20478.5%2C283.1%20480.3%2C283.8%20482.0%2C284.6%20483.8%2C285.4%20485.6%2C286.2%20487.3%2C287.0%20489.1%2C287.8%20490.9%2C288.5%20492.6%2C289.3%20494.4%2C290.1%20496.1%2C290.9%20497.9%2C291.7%20499.7%2C292.4%20501.4%2C293.2%20503.2%2C294.0%20505.0%2C294.8%20506.7%2C295.6%20508.5%2C296.3%20510.2%2C297.1%20512.0%2C297.9%20513.8%2C298.7%20515.5%2C299.5%20517.3%2C300.2%20519.1%2C301.0%20520.8%2C301.8%20522.6%2C302.6%20524.4%2C303.4%20526.1%2C304.2%20527.9%2C304.9%20529.6%2C305.7%20531.4%2C306.5%20533.2%2C307.3%20534.9%2C308.1%20536.7%2C308.8%20538.5%2C309.6%20540.2%2C310.4%20542.0%2C311.2%20543.7%2C312.0%20545.5%2C312.8%20547.3%2C313.5%20549.0%2C314.3%20550.8%2C315.1%20552.5%2C315.9%20554.3%2C316.7%20556.1%2C317.4%20557.8%2C318.2%20559.6%2C319.0%20561.4%2C319.8%20563.1%2C320.6%20564.9%2C321.3%20566.6%2C322.1%20568.4%2C322.9%20570.2%2C323.7%20571.9%2C324.5%20573.7%2C325.2%20575.5%2C326.0%20577.2%2C326.8%20579.0%2C327.6%20580.8%2C328.4%20582.5%2C329.2%20584.3%2C329.9%20586.0%2C330.7%20587.8%2C331.5%20589.6%2C332.3%20591.3%2C333.1%20593.1%2C333.8%20594.9%2C334.6%20596.6%2C335.4%20598.4%2C336.2%20600.1%2C337.0%20601.9%2C337.8%20603.7%2C338.5%20605.4%2C339.3%20607.2%2C340.1%20609.0%2C340.9%20610.7%2C341.7%20612.5%2C342.4%20614.2%2C343.2%20616.0%2C344.0%22%20clip-path%3D%22url%28%23clip-3884793%29%22%2F%3E%0A%3Ccircle%20cx%3D%22390.4%22%20cy%3D%22244.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-126",
    case_id: "MATH 11.126",
    title: "Graph of f: local min at the origin and rising sides",
    subsection: "11.4",
    context:
      "The figure shows $f$ itself. The curve has a lowest point at the origin and rises on both sides. Decide TRUE or FALSE.",
    statements: [
      "The function $f$ has a local minimum at $x=0$, where $f(0)=0$.",
      "On $(-3,0)$ the graph is falling toward the origin, so $f$ is decreasing there.",
      "On $(0,3)$ the graph is rising, so $f$ is increasing there.",
      "At $x=2$, reading the vertical scale, $f(2)$ is strictly greater than $2$.",
      "An axis crossing of $f$ at $x=0$ forces $f'(0)=0$ for every differentiable $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Lowest point at the origin with $f(0)=0$.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. The curve falls as $x$ approaches $0$ from the left.

So the statement is True.`,
      `**C.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. The curve rises as $x$ moves right from $0$.

So the statement is True.`,
      `**D.** → True

Read the figure at $x=2$. $f(2)=4\ln 5\approx 6.4>2$ — visibly well above $2$ on the scale.

So the statement is True.`,
      `**E.** → False

An axis crossing means $f(0)=0$ (a root). A horizontal tangent means $f'(0)=0$. Those are different geometric facts; a root need not be critical.

So the statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 126,
    solution_overview:
      "Read the local minimum and monotonicity from the graph of $f$; do not confuse roots with critical points.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-8758158%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22320.9%22%20x2%3D%22616%22%20y2%3D%22320.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22228.6%22%20x2%3D%22616%22%20y2%3D%22228.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22136.3%22%20x2%3D%22616%22%20y2%3D%22136.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22616%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22320.9%22%20x2%3D%22616%22%20y2%3D%22320.9%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22320.9%22%20x2%3D%2252%22%20y2%3D%22320.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22324.9%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22228.6%22%20x2%3D%2252%22%20y2%3D%22228.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22232.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22136.3%22%20x2%3D%2252%22%20y2%3D%22136.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22140.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-104.2%2053.8%2C-102.1%2055.5%2C-100.0%2057.3%2C-97.9%2059.1%2C-95.8%2060.8%2C-93.7%2062.6%2C-91.5%2064.3%2C-89.4%2066.1%2C-87.2%2067.9%2C-85.0%2069.6%2C-82.9%2071.4%2C-80.7%2073.2%2C-78.5%2074.9%2C-76.3%2076.7%2C-74.0%2078.4%2C-71.8%2080.2%2C-69.5%2082.0%2C-67.3%2083.7%2C-65.0%2085.5%2C-62.7%2087.2%2C-60.4%2089.0%2C-58.1%2090.8%2C-55.8%2092.5%2C-53.5%2094.3%2C-51.1%2096.1%2C-48.8%2097.8%2C-46.4%2099.6%2C-44.0%20101.3%2C-41.6%20103.1%2C-39.2%20104.9%2C-36.8%20106.6%2C-34.3%20108.4%2C-31.9%20110.2%2C-29.4%20111.9%2C-26.9%20113.7%2C-24.4%20115.4%2C-21.9%20117.2%2C-19.4%20119.0%2C-16.9%20120.7%2C-14.3%20122.5%2C-11.8%20124.3%2C-9.2%20126.0%2C-6.6%20127.8%2C-4.0%20129.6%2C-1.4%20131.3%2C1.3%20133.1%2C3.9%20134.8%2C6.6%20136.6%2C9.2%20138.4%2C11.9%20140.1%2C14.7%20141.9%2C17.4%20143.7%2C20.1%20145.4%2C22.9%20147.2%2C25.6%20148.9%2C28.4%20150.7%2C31.2%20152.5%2C34.1%20154.2%2C36.9%20156.0%2C39.7%20157.8%2C42.6%20159.5%2C45.5%20161.3%2C48.4%20163.0%2C51.3%20164.8%2C54.2%20166.6%2C57.2%20168.3%2C60.1%20170.1%2C63.1%20171.8%2C66.1%20173.6%2C69.1%20175.4%2C72.2%20177.1%2C75.2%20178.9%2C78.3%20180.7%2C81.3%20182.4%2C84.4%20184.2%2C87.5%20186.0%2C90.7%20187.7%2C93.8%20189.5%2C97.0%20191.2%2C100.1%20193.0%2C103.3%20194.8%2C106.5%20196.5%2C109.7%20198.3%2C113.0%20200.1%2C116.2%20201.8%2C119.5%20203.6%2C122.8%20205.3%2C126.1%20207.1%2C129.4%20208.9%2C132.7%20210.6%2C136.0%20212.4%2C139.4%20214.2%2C142.7%20215.9%2C146.1%20217.7%2C149.5%20219.4%2C152.8%20221.2%2C156.2%20223.0%2C159.7%20224.7%2C163.1%20226.5%2C166.5%20228.2%2C169.9%20230.0%2C173.4%20231.8%2C176.8%20233.5%2C180.3%20235.3%2C183.7%20237.1%2C187.2%20238.8%2C190.6%20240.6%2C194.1%20242.3%2C197.6%20244.1%2C201.0%20245.9%2C204.5%20247.6%2C207.9%20249.4%2C211.4%20251.2%2C214.8%20252.9%2C218.3%20254.7%2C221.7%20256.4%2C225.1%20258.2%2C228.5%20260.0%2C231.8%20261.7%2C235.2%20263.5%2C238.5%20265.3%2C241.8%20267.0%2C245.1%20268.8%2C248.4%20270.6%2C251.6%20272.3%2C254.8%20274.1%2C258.0%20275.8%2C261.1%20277.6%2C264.2%20279.4%2C267.2%20281.1%2C270.2%20282.9%2C273.1%20284.6%2C276.0%20286.4%2C278.8%20288.2%2C281.6%20289.9%2C284.3%20291.7%2C286.9%20293.5%2C289.4%20295.2%2C291.9%20297.0%2C294.3%20298.8%2C296.6%20300.5%2C298.9%20302.3%2C301.0%20304.0%2C303.1%20305.8%2C305.0%20307.6%2C306.9%20309.3%2C308.6%20311.1%2C310.3%20312.8%2C311.8%20314.6%2C313.2%20316.4%2C314.5%20318.1%2C315.7%20319.9%2C316.8%20321.7%2C317.8%20323.4%2C318.6%20325.2%2C319.3%20326.9%2C319.9%20328.7%2C320.3%20330.5%2C320.7%20332.2%2C320.9%20334.0%2C320.9%20335.8%2C320.9%20337.5%2C320.7%20339.3%2C320.3%20341.1%2C319.9%20342.8%2C319.3%20344.6%2C318.6%20346.3%2C317.8%20348.1%2C316.8%20349.9%2C315.7%20351.6%2C314.5%20353.4%2C313.2%20355.1%2C311.8%20356.9%2C310.3%20358.7%2C308.6%20360.4%2C306.9%20362.2%2C305.0%20364.0%2C303.1%20365.7%2C301.0%20367.5%2C298.9%20369.2%2C296.6%20371.0%2C294.3%20372.8%2C291.9%20374.5%2C289.4%20376.3%2C286.9%20378.1%2C284.3%20379.8%2C281.6%20381.6%2C278.8%20383.4%2C276.0%20385.1%2C273.1%20386.9%2C270.2%20388.6%2C267.2%20390.4%2C264.2%20392.2%2C261.1%20393.9%2C258.0%20395.7%2C254.8%20397.4%2C251.6%20399.2%2C248.4%20401.0%2C245.1%20402.7%2C241.8%20404.5%2C238.5%20406.3%2C235.2%20408.0%2C231.8%20409.8%2C228.5%20411.6%2C225.1%20413.3%2C221.7%20415.1%2C218.3%20416.8%2C214.8%20418.6%2C211.4%20420.4%2C207.9%20422.1%2C204.5%20423.9%2C201.0%20425.6%2C197.6%20427.4%2C194.1%20429.2%2C190.6%20430.9%2C187.2%20432.7%2C183.7%20434.5%2C180.3%20436.2%2C176.8%20438.0%2C173.4%20439.8%2C169.9%20441.5%2C166.5%20443.3%2C163.1%20445.0%2C159.7%20446.8%2C156.2%20448.6%2C152.8%20450.3%2C149.5%20452.1%2C146.1%20453.9%2C142.7%20455.6%2C139.4%20457.4%2C136.0%20459.1%2C132.7%20460.9%2C129.4%20462.7%2C126.1%20464.4%2C122.8%20466.2%2C119.5%20467.9%2C116.2%20469.7%2C113.0%20471.5%2C109.7%20473.2%2C106.5%20475.0%2C103.3%20476.8%2C100.1%20478.5%2C97.0%20480.3%2C93.8%20482.1%2C90.7%20483.8%2C87.5%20485.6%2C84.4%20487.3%2C81.3%20489.1%2C78.3%20490.9%2C75.2%20492.6%2C72.2%20494.4%2C69.1%20496.1%2C66.1%20497.9%2C63.1%20499.7%2C60.1%20501.4%2C57.2%20503.2%2C54.2%20505.0%2C51.3%20506.7%2C48.4%20508.5%2C45.5%20510.2%2C42.6%20512.0%2C39.7%20513.8%2C36.9%20515.5%2C34.1%20517.3%2C31.2%20519.1%2C28.4%20520.8%2C25.6%20522.6%2C22.9%20524.4%2C20.1%20526.1%2C17.4%20527.9%2C14.7%20529.6%2C11.9%20531.4%2C9.2%20533.2%2C6.6%20534.9%2C3.9%20536.7%2C1.3%20538.5%2C-1.4%20540.2%2C-4.0%20542.0%2C-6.6%20543.7%2C-9.2%20545.5%2C-11.8%20547.3%2C-14.3%20549.0%2C-16.9%20550.8%2C-19.4%20552.5%2C-21.9%20554.3%2C-24.4%20556.1%2C-26.9%20557.8%2C-29.4%20559.6%2C-31.9%20561.4%2C-34.3%20563.1%2C-36.8%20564.9%2C-39.2%20566.6%2C-41.6%20568.4%2C-44.0%20570.2%2C-46.4%20571.9%2C-48.8%20573.7%2C-51.1%20575.5%2C-53.5%20577.2%2C-55.8%20579.0%2C-58.1%20580.8%2C-60.4%20582.5%2C-62.7%20584.3%2C-65.0%20586.0%2C-67.3%20587.8%2C-69.5%20589.6%2C-71.8%20591.3%2C-74.0%20593.1%2C-76.3%20594.9%2C-78.5%20596.6%2C-80.7%20598.4%2C-82.9%20600.1%2C-85.0%20601.9%2C-87.2%20603.7%2C-89.4%20605.4%2C-91.5%20607.2%2C-93.7%20608.9%2C-95.8%20610.7%2C-97.9%20612.5%2C-100.0%20614.2%2C-102.1%20616.0%2C-104.2%22%20clip-path%3D%22url%28%23clip-8758158%29%22%2F%3E%0A%3Ccircle%20cx%3D%22334.0%22%20cy%3D%22320.9%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-127",
    case_id: "MATH 11.127",
    title: "Graph of f: turning points at x=1, 2.5, 5",
    subsection: "11.4",
    context:
      "The figure shows $f$. Its turning points align with $x=1$, $x=2.5$, and $x=5$ (where $f'=0$). Decide TRUE or FALSE.",
    statements: [
      "Near $x=1$ the graph has a local minimum (a lowest point in a neighbourhood).",
      "Near $x=2.5$ the graph has a local maximum.",
      "Near $x=5$ the graph has a local minimum.",
      "On $(1,2.5)$ the graph is rising, so $f$ is increasing there.",
      "Because $f(0)=0$, one must have $f'(0)=0$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Compare heights on the shared vertical scale. Reading the figure, the graph of $f$ has a local lowest point near $x=1$.

So the statement is True.`,
      `**B.** → True

Compare heights on the shared vertical scale. Local highest point near $x=2.5$.

So the statement is True.`,
      `**C.** → True

Compare heights on the shared vertical scale. Local lowest point near $x=5$.

So the statement is True.`,
      `**D.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Between those turning points the curve rises.

So the statement is True.`,
      `**E.** → False

$f(0)=0$ is a root, not a claim about the slope $f'(0)$.

So the statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 127,
    solution_overview:
      "Read local max/min from the graph of $f$ at the known critical $x$-values.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EGraph%20of%20f%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-2445175%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22301.1%22%20x2%3D%22616%22%20y2%3D%22301.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22258.3%22%20x2%3D%22616%22%20y2%3D%22258.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22215.4%22%20x2%3D%22616%22%20y2%3D%22215.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22616%22%20y2%3D%22172.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22129.7%22%20x2%3D%22616%22%20y2%3D%22129.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2286.9%22%20x2%3D%22616%22%20y2%3D%2286.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22616%22%20y2%3D%22172.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22301.1%22%20x2%3D%2252%22%20y2%3D%22301.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22305.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-15%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22258.3%22%20x2%3D%2252%22%20y2%3D%22258.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22262.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-10%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22215.4%22%20x2%3D%2252%22%20y2%3D%22215.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22219.4%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22172.6%22%20x2%3D%2252%22%20y2%3D%22172.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22176.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22129.7%22%20x2%3D%2252%22%20y2%3D%22129.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22133.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2286.9%22%20x2%3D%2252%22%20y2%3D%2286.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2290.9%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E10%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C172.6%2053.8%2C174.6%2055.5%2C176.5%2057.3%2C178.4%2059.0%2C180.2%2060.8%2C181.9%2062.6%2C183.7%2064.3%2C185.3%2066.1%2C186.9%2067.9%2C188.5%2069.6%2C190.0%2071.4%2C191.5%2073.2%2C192.9%2074.9%2C194.3%2076.7%2C195.7%2078.4%2C197.0%2080.2%2C198.2%2082.0%2C199.4%2083.7%2C200.6%2085.5%2C201.7%2087.2%2C202.8%2089.0%2C203.9%2090.8%2C204.9%2092.5%2C205.9%2094.3%2C206.9%2096.1%2C207.8%2097.8%2C208.7%2099.6%2C209.5%20101.3%2C210.3%20103.1%2C211.1%20104.9%2C211.9%20106.6%2C212.6%20108.4%2C213.3%20110.2%2C214.0%20111.9%2C214.6%20113.7%2C215.2%20115.5%2C215.8%20117.2%2C216.4%20119.0%2C216.9%20120.7%2C217.4%20122.5%2C217.9%20124.3%2C218.4%20126.0%2C218.8%20127.8%2C219.2%20129.6%2C219.6%20131.3%2C220.0%20133.1%2C220.4%20134.8%2C220.7%20136.6%2C221.1%20138.4%2C221.4%20140.1%2C221.7%20141.9%2C222.0%20143.7%2C222.2%20145.4%2C222.5%20147.2%2C222.7%20148.9%2C223.0%20150.7%2C223.2%20152.5%2C223.4%20154.2%2C223.6%20156.0%2C223.7%20157.8%2C223.9%20159.5%2C224.1%20161.3%2C224.2%20163.0%2C224.4%20164.8%2C224.5%20166.6%2C224.6%20168.3%2C224.7%20170.1%2C224.9%20171.8%2C225.0%20173.6%2C225.1%20175.4%2C225.2%20177.1%2C225.3%20178.9%2C225.4%20180.7%2C225.4%20182.4%2C225.5%20184.2%2C225.6%20186.0%2C225.7%20187.7%2C225.8%20189.5%2C225.8%20191.2%2C225.9%20193.0%2C226.0%20194.8%2C226.1%20196.5%2C226.2%20198.3%2C226.3%20200.1%2C226.3%20201.8%2C226.4%20203.6%2C226.5%20205.3%2C226.6%20207.1%2C226.7%20208.9%2C226.8%20210.6%2C226.9%20212.4%2C227.0%20214.2%2C227.2%20215.9%2C227.3%20217.7%2C227.4%20219.4%2C227.5%20221.2%2C227.7%20223.0%2C227.8%20224.7%2C228.0%20226.5%2C228.2%20228.2%2C228.3%20230.0%2C228.5%20231.8%2C228.7%20233.5%2C228.9%20235.3%2C229.1%20237.1%2C229.3%20238.8%2C229.6%20240.6%2C229.8%20242.3%2C230.0%20244.1%2C230.3%20245.9%2C230.6%20247.6%2C230.9%20249.4%2C231.2%20251.2%2C231.5%20252.9%2C231.8%20254.7%2C232.1%20256.4%2C232.5%20258.2%2C232.8%20260.0%2C233.2%20261.7%2C233.6%20263.5%2C234.0%20265.3%2C234.4%20267.0%2C234.8%20268.8%2C235.2%20270.6%2C235.7%20272.3%2C236.2%20274.1%2C236.6%20275.8%2C237.1%20277.6%2C237.7%20279.4%2C238.2%20281.1%2C238.7%20282.9%2C239.3%20284.6%2C239.9%20286.4%2C240.5%20288.2%2C241.1%20289.9%2C241.7%20291.7%2C242.3%20293.5%2C243.0%20295.2%2C243.6%20297.0%2C244.3%20298.8%2C245.0%20300.5%2C245.7%20302.3%2C246.5%20304.0%2C247.2%20305.8%2C248.0%20307.6%2C248.8%20309.3%2C249.6%20311.1%2C250.4%20312.8%2C251.2%20314.6%2C252.1%20316.4%2C253.0%20318.1%2C253.8%20319.9%2C254.7%20321.7%2C255.7%20323.4%2C256.6%20325.2%2C257.6%20326.9%2C258.5%20328.7%2C259.5%20330.5%2C260.5%20332.2%2C261.5%20334.0%2C262.6%20335.8%2C263.6%20337.5%2C264.7%20339.3%2C265.8%20341.1%2C266.9%20342.8%2C268.0%20344.6%2C269.1%20346.3%2C270.3%20348.1%2C271.5%20349.9%2C272.6%20351.6%2C273.8%20353.4%2C275.0%20355.1%2C276.3%20356.9%2C277.5%20358.7%2C278.8%20360.4%2C280.1%20362.2%2C281.4%20364.0%2C282.7%20365.7%2C284.0%20367.5%2C285.3%20369.2%2C286.7%20371.0%2C288.0%20372.8%2C289.4%20374.5%2C290.8%20376.3%2C292.2%20378.1%2C293.6%20379.8%2C295.0%20381.6%2C296.5%20383.4%2C297.9%20385.1%2C299.4%20386.9%2C300.9%20388.6%2C302.4%20390.4%2C303.9%20392.2%2C305.4%20393.9%2C306.9%20395.7%2C308.5%20397.4%2C310.0%20399.2%2C311.6%20401.0%2C313.2%20402.7%2C314.7%20404.5%2C316.3%20406.3%2C317.9%20408.0%2C319.5%20409.8%2C321.2%20411.6%2C322.8%20413.3%2C324.4%20415.1%2C326.1%20416.8%2C327.7%20418.6%2C329.4%20420.4%2C331.0%20422.1%2C332.7%20423.9%2C334.4%20425.6%2C336.0%20427.4%2C337.7%20429.2%2C339.4%20430.9%2C341.1%20432.7%2C342.8%20434.5%2C344.5%20436.2%2C346.2%20438.0%2C347.9%20439.8%2C349.6%20441.5%2C351.3%20443.3%2C353.0%20445.0%2C354.7%20446.8%2C356.5%20448.6%2C358.2%20450.3%2C359.9%20452.1%2C361.6%20453.9%2C363.3%20455.6%2C365.0%20457.4%2C366.7%20459.1%2C368.4%20460.9%2C370.1%20462.7%2C371.8%20464.4%2C373.5%20466.2%2C375.2%20467.9%2C376.9%20469.7%2C378.5%20471.5%2C380.2%20473.2%2C381.9%20475.0%2C383.5%20476.8%2C385.2%20478.5%2C386.8%20480.3%2C388.4%20482.1%2C390.0%20483.8%2C391.6%20485.6%2C393.2%20487.3%2C394.8%20489.1%2C396.4%20490.9%2C397.9%20492.6%2C399.5%20494.4%2C401.0%20496.1%2C402.5%20497.9%2C404.0%20499.7%2C405.5%20501.4%2C407.0%20503.2%2C408.4%20505.0%2C409.8%20506.7%2C411.2%20508.5%2C412.6%20510.2%2C414.0%20512.0%2C415.4%20513.8%2C416.7%20515.5%2C418.0%20517.3%2C419.3%20519.1%2C420.5%20520.8%2C421.8%20522.6%2C423.0%20524.4%2C424.2%20526.1%2C425.3%20527.9%2C426.4%20529.6%2C427.5%20531.4%2C428.6%20533.2%2C429.7%20534.9%2C430.7%20536.7%2C431.7%20538.5%2C432.6%20540.2%2C433.5%20542.0%2C434.4%20543.7%2C435.3%20545.5%2C436.1%20547.3%2C436.8%20549.0%2C437.6%20550.8%2C438.3%20552.5%2C439.0%20554.3%2C439.6%20556.1%2C440.2%20557.8%2C440.7%20559.6%2C441.2%20561.4%2C441.7%20563.1%2C442.1%20564.9%2C442.5%20566.6%2C442.8%20568.4%2C443.1%20570.2%2C443.3%20571.9%2C443.5%20573.7%2C443.6%20575.5%2C443.7%20577.2%2C443.7%20579.0%2C443.7%20580.8%2C443.7%20582.5%2C443.5%20584.3%2C443.4%20586.0%2C443.1%20587.8%2C442.8%20589.6%2C442.5%20591.3%2C442.1%20593.1%2C441.6%20594.9%2C441.1%20596.6%2C440.5%20598.4%2C439.9%20600.1%2C439.1%20601.9%2C438.4%20603.7%2C437.5%20605.4%2C436.6%20607.2%2C435.6%20608.9%2C434.6%20610.7%2C433.5%20612.5%2C432.3%20614.2%2C431.0%20616.0%2C429.7%22%20clip-path%3D%22url%28%23clip-2445175%29%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-128",
    case_id: "MATH 11.128",
    title: "Positive bump for f′: two zeros around a hill",
    subsection: "11.4",
    context:
      "The figure shows $f'$: a single hill that crosses the axis twice. Decide TRUE or FALSE.",
    statements: [
      "There are two zeros of $f'$ in the window, one left of $x=2$ and one right of $x=2$.",
      "Between those zeros, $f'>0$, so $f$ is increasing on that middle interval.",
      "Outside those zeros (still in the window), $f'<0$, so $f$ is decreasing there.",
      "The maximum height of $f'$ is at $x=2$, near height $4$.",
      "The maximum of $f'$ at $x=2$ is a local maximum of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Count the clear axis crossings of the named curve in the window. The hill crosses down through the axis on both sides of the peak.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. The hill sits above the axis between its two zeros.

So the statement is True.`,
      `**C.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Outside that interval the curve is below the axis.

So the statement is True.`,
      `**D.** → True

Compare heights on the shared vertical scale. The top of the hill is at $x=2$ with height near $4$.

So the statement is True.`,
      `**E.** → False

A local maximum of $f$ is a zero of $f'$ where the sign of $f'$ changes from $+$ to $-$. A max of $f'$ is where $f$ is steepest, not where $f$ peaks. Peaks of $f$ need zeros of $f'$. A nonzero peak of $f'$ is only where the slope of $f$ is steepest — not a turning point of $f$.

So the statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 128,
    solution_overview:
      "Two zeros of a positive bump: increase in the middle; peak of $f'$ ≠ peak of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-7406063%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%2244%22%20x2%3D%22164.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%2244%22%20x2%3D%22277.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%2244%22%20x2%3D%22390.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%2244%22%20x2%3D%22503.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22319.0%22%20x2%3D%22616%22%20y2%3D%22319.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22616%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22219.0%22%20x2%3D%22616%22%20y2%3D%22219.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22169.0%22%20x2%3D%22616%22%20y2%3D%22169.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22616%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2269.0%22%20x2%3D%22616%22%20y2%3D%2269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22616%22%20y2%3D%22269.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%22344%22%20x2%3D%22164.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22164.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%22344%22%20x2%3D%22277.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22277.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%22344%22%20x2%3D%22390.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22390.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%22344%22%20x2%3D%22503.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22503.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22319.0%22%20x2%3D%2252%22%20y2%3D%22319.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22323.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22219.0%22%20x2%3D%2252%22%20y2%3D%22219.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22223.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22169.0%22%20x2%3D%2252%22%20y2%3D%22169.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22173.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2269.0%22%20x2%3D%2252%22%20y2%3D%2269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C269.0%2053.8%2C268.4%2055.5%2C267.7%2057.3%2C267.1%2059.0%2C266.4%2060.8%2C265.7%2062.6%2C265.0%2064.3%2C264.3%2066.1%2C263.6%2067.9%2C262.9%2069.6%2C262.2%2071.4%2C261.4%2073.2%2C260.7%2074.9%2C259.9%2076.7%2C259.1%2078.4%2C258.3%2080.2%2C257.5%2082.0%2C256.6%2083.7%2C255.8%2085.5%2C254.9%2087.2%2C254.0%2089.0%2C253.1%2090.8%2C252.2%2092.5%2C251.3%2094.3%2C250.3%2096.1%2C249.4%2097.8%2C248.4%2099.6%2C247.4%20101.3%2C246.4%20103.1%2C245.3%20104.9%2C244.3%20106.6%2C243.2%20108.4%2C242.1%20110.2%2C241.0%20111.9%2C239.8%20113.7%2C238.7%20115.5%2C237.5%20117.2%2C236.3%20119.0%2C235.0%20120.7%2C233.8%20122.5%2C232.5%20124.3%2C231.2%20126.0%2C229.9%20127.8%2C228.5%20129.6%2C227.2%20131.3%2C225.8%20133.1%2C224.4%20134.8%2C222.9%20136.6%2C221.4%20138.4%2C219.9%20140.1%2C218.4%20141.9%2C216.9%20143.7%2C215.3%20145.4%2C213.7%20147.2%2C212.0%20148.9%2C210.4%20150.7%2C208.7%20152.5%2C206.9%20154.2%2C205.2%20156.0%2C203.4%20157.8%2C201.6%20159.5%2C199.7%20161.3%2C197.8%20163.0%2C195.9%20164.8%2C194.0%20166.6%2C192.0%20168.3%2C190.0%20170.1%2C188.0%20171.8%2C185.9%20173.6%2C183.9%20175.4%2C181.7%20177.1%2C179.6%20178.9%2C177.4%20180.7%2C175.2%20182.4%2C173.0%20184.2%2C170.7%20185.9%2C168.4%20187.7%2C166.1%20189.5%2C163.8%20191.2%2C161.4%20193.0%2C159.0%20194.8%2C156.6%20196.5%2C154.2%20198.3%2C151.7%20200.1%2C149.2%20201.8%2C146.8%20203.6%2C144.3%20205.3%2C141.7%20207.1%2C139.2%20208.9%2C136.7%20210.6%2C134.2%20212.4%2C131.6%20214.1%2C129.1%20215.9%2C126.6%20217.7%2C124.0%20219.4%2C121.5%20221.2%2C119.0%20223.0%2C116.5%20224.7%2C114.0%20226.5%2C111.6%20228.2%2C109.2%20230.0%2C106.8%20231.8%2C104.4%20233.5%2C102.1%20235.3%2C99.8%20237.1%2C97.6%20238.8%2C95.4%20240.6%2C93.3%20242.4%2C91.2%20244.1%2C89.2%20245.9%2C87.3%20247.6%2C85.5%20249.4%2C83.7%20251.2%2C82.0%20252.9%2C80.4%20254.7%2C78.9%20256.4%2C77.5%20258.2%2C76.2%20260.0%2C75.0%20261.7%2C73.8%20263.5%2C72.8%20265.3%2C72.0%20267.0%2C71.2%20268.8%2C70.5%20270.6%2C70.0%20272.3%2C69.5%20274.1%2C69.2%20275.8%2C69.1%20277.6%2C69.0%20279.4%2C69.1%20281.1%2C69.2%20282.9%2C69.5%20284.6%2C70.0%20286.4%2C70.5%20288.2%2C71.2%20289.9%2C72.0%20291.7%2C72.8%20293.5%2C73.8%20295.2%2C75.0%20297.0%2C76.2%20298.8%2C77.5%20300.5%2C78.9%20302.3%2C80.4%20304.0%2C82.0%20305.8%2C83.7%20307.6%2C85.5%20309.3%2C87.3%20311.1%2C89.2%20312.9%2C91.2%20314.6%2C93.3%20316.4%2C95.4%20318.1%2C97.6%20319.9%2C99.8%20321.7%2C102.1%20323.4%2C104.4%20325.2%2C106.8%20326.9%2C109.2%20328.7%2C111.6%20330.5%2C114.0%20332.2%2C116.5%20334.0%2C119.0%20335.8%2C121.5%20337.5%2C124.0%20339.3%2C126.6%20341.0%2C129.1%20342.8%2C131.6%20344.6%2C134.2%20346.3%2C136.7%20348.1%2C139.2%20349.9%2C141.7%20351.6%2C144.3%20353.4%2C146.8%20355.1%2C149.2%20356.9%2C151.7%20358.7%2C154.2%20360.4%2C156.6%20362.2%2C159.0%20364.0%2C161.4%20365.7%2C163.8%20367.5%2C166.1%20369.2%2C168.4%20371.0%2C170.7%20372.8%2C173.0%20374.5%2C175.2%20376.3%2C177.4%20378.1%2C179.6%20379.8%2C181.7%20381.6%2C183.9%20383.4%2C185.9%20385.1%2C188.0%20386.9%2C190.0%20388.6%2C192.0%20390.4%2C194.0%20392.2%2C195.9%20393.9%2C197.8%20395.7%2C199.7%20397.5%2C201.6%20399.2%2C203.4%20401.0%2C205.2%20402.7%2C206.9%20404.5%2C208.7%20406.3%2C210.4%20408.0%2C212.0%20409.8%2C213.7%20411.5%2C215.3%20413.3%2C216.9%20415.1%2C218.4%20416.8%2C219.9%20418.6%2C221.4%20420.4%2C222.9%20422.1%2C224.4%20423.9%2C225.8%20425.6%2C227.2%20427.4%2C228.5%20429.2%2C229.9%20430.9%2C231.2%20432.7%2C232.5%20434.5%2C233.8%20436.2%2C235.0%20438.0%2C236.3%20439.8%2C237.5%20441.5%2C238.7%20443.3%2C239.8%20445.0%2C241.0%20446.8%2C242.1%20448.6%2C243.2%20450.3%2C244.3%20452.1%2C245.3%20453.9%2C246.4%20455.6%2C247.4%20457.4%2C248.4%20459.1%2C249.4%20460.9%2C250.3%20462.7%2C251.3%20464.4%2C252.2%20466.2%2C253.1%20468.0%2C254.0%20469.7%2C254.9%20471.5%2C255.8%20473.2%2C256.6%20475.0%2C257.5%20476.8%2C258.3%20478.5%2C259.1%20480.3%2C259.9%20482.0%2C260.7%20483.8%2C261.4%20485.6%2C262.2%20487.3%2C262.9%20489.1%2C263.6%20490.9%2C264.3%20492.6%2C265.0%20494.4%2C265.7%20496.1%2C266.4%20497.9%2C267.1%20499.7%2C267.7%20501.4%2C268.4%20503.2%2C269.0%20505.0%2C269.6%20506.7%2C270.2%20508.5%2C270.8%20510.2%2C271.4%20512.0%2C272.0%20513.8%2C272.6%20515.5%2C273.1%20517.3%2C273.7%20519.1%2C274.2%20520.8%2C274.7%20522.6%2C275.3%20524.4%2C275.8%20526.1%2C276.3%20527.9%2C276.8%20529.6%2C277.3%20531.4%2C277.8%20533.2%2C278.2%20534.9%2C278.7%20536.7%2C279.2%20538.5%2C279.6%20540.2%2C280.1%20542.0%2C280.5%20543.7%2C280.9%20545.5%2C281.4%20547.3%2C281.8%20549.0%2C282.2%20550.8%2C282.6%20552.5%2C283.0%20554.3%2C283.4%20556.1%2C283.8%20557.8%2C284.1%20559.6%2C284.5%20561.4%2C284.9%20563.1%2C285.2%20564.9%2C285.6%20566.6%2C286.0%20568.4%2C286.3%20570.2%2C286.6%20571.9%2C287.0%20573.7%2C287.3%20575.5%2C287.6%20577.2%2C288.0%20579.0%2C288.3%20580.8%2C288.6%20582.5%2C288.9%20584.3%2C289.2%20586.0%2C289.5%20587.8%2C289.8%20589.6%2C290.1%20591.3%2C290.4%20593.1%2C290.7%20594.9%2C290.9%20596.6%2C291.2%20598.4%2C291.5%20600.1%2C291.8%20601.9%2C292.0%20603.7%2C292.3%20605.4%2C292.5%20607.2%2C292.8%20609.0%2C293.0%20610.7%2C293.3%20612.5%2C293.5%20614.2%2C293.8%20616.0%2C294.0%22%20clip-path%3D%22url%28%23clip-7406063%29%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-129",
    case_id: "MATH 11.129",
    title: "f′ starts at 0, stays non-negative, then flattens",
    subsection: "11.4",
    context:
      "The figure shows $f'$. It starts at the origin, rises, then falls toward the axis from above. Decide TRUE or FALSE.",
    statements: [
      "For $x>0$ in the window, $f'$ stays non-negative, so $f$ is increasing on $(0,8)$.",
      "The steepest climb of $f$ occurs at the peak of $f'$, near $x=2$.",
      "At $x=0$ one has $f'(0)=0$.",
      "Because $f'$ approaches $0$ late in the window, $f$ becomes almost flat there.",
      "A local maximum of $f$ occurs at the peak of $f'$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. The curve stays on or above the axis for $x>0$ in view.

So the statement is True.`,
      `**B.** → True

The steepest climb of $f$ is where $|f'|$ is largest among the positive heights — the peak of the $f'$ graph in the rising stretch. Largest $f'$ is the top of the hump near $x=2$.

So the statement is True.`,
      `**C.** → True

The curve starts at the origin.

So the statement is True.`,
      `**D.** → True

Small positive $f'$ means a gentle rise.

So the statement is True.`,
      `**E.** → False

At the peak of $f'$ one still has $f'>0$, so $f$ is still increasing.

So the statement is False.`
    ],
    difficulty_level: "3/5",
    sort_order: 129,
    solution_overview:
      "Non-negative $f'$ ⇒ increasing $f$; peak of $f'$ = steepest climb, not a max of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9928101%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22193.0%22%20y1%3D%2244%22%20x2%3D%22193.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22475.0%22%20y1%3D%2244%22%20x2%3D%22475.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22255.8%22%20x2%3D%22616%22%20y2%3D%22255.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22167.5%22%20x2%3D%22616%22%20y2%3D%22167.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2279.3%22%20x2%3D%22616%22%20y2%3D%2279.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22255.8%22%20x2%3D%22616%22%20y2%3D%22255.8%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22193.0%22%20y1%3D%22344%22%20x2%3D%22193.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22193.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22475.0%22%20y1%3D%22344%22%20x2%3D%22475.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22475.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22255.8%22%20x2%3D%2252%22%20y2%3D%22255.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22259.8%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22167.5%22%20x2%3D%2252%22%20y2%3D%22167.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22171.5%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0.5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2279.3%22%20x2%3D%2252%22%20y2%3D%2279.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2283.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C255.8%2053.8%2C251.4%2055.5%2C247.2%2057.3%2C243.0%2059.0%2C239.0%2060.8%2C235.0%2062.6%2C231.2%2064.3%2C227.5%2066.1%2C223.8%2067.9%2C220.3%2069.6%2C216.8%2071.4%2C213.5%2073.2%2C210.2%2074.9%2C207.0%2076.7%2C203.9%2078.4%2C200.9%2080.2%2C198.0%2082.0%2C195.1%2083.7%2C192.4%2085.5%2C189.7%2087.2%2C187.0%2089.0%2C184.5%2090.8%2C182.0%2092.5%2C179.6%2094.3%2C177.3%2096.1%2C175.1%2097.8%2C172.9%2099.6%2C170.8%20101.3%2C168.7%20103.1%2C166.7%20104.9%2C164.8%20106.6%2C162.9%20108.4%2C161.1%20110.2%2C159.4%20111.9%2C157.7%20113.7%2C156.1%20115.5%2C154.5%20117.2%2C153.0%20119.0%2C151.5%20120.7%2C150.1%20122.5%2C148.7%20124.3%2C147.4%20126.0%2C146.2%20127.8%2C144.9%20129.6%2C143.8%20131.3%2C142.6%20133.1%2C141.6%20134.8%2C140.5%20136.6%2C139.5%20138.4%2C138.6%20140.1%2C137.7%20141.9%2C136.8%20143.7%2C136.0%20145.4%2C135.2%20147.2%2C134.5%20148.9%2C133.8%20150.7%2C133.1%20152.5%2C132.4%20154.2%2C131.8%20156.0%2C131.3%20157.8%2C130.7%20159.5%2C130.2%20161.3%2C129.7%20163.0%2C129.3%20164.8%2C128.9%20166.6%2C128.5%20168.3%2C128.2%20170.1%2C127.8%20171.8%2C127.5%20173.6%2C127.3%20175.4%2C127.0%20177.1%2C126.8%20178.9%2C126.6%20180.7%2C126.5%20182.4%2C126.3%20184.2%2C126.2%20185.9%2C126.1%20187.7%2C126.0%20189.5%2C126.0%20191.2%2C125.9%20193.0%2C125.9%20194.8%2C125.9%20196.5%2C126.0%20198.3%2C126.0%20200.1%2C126.1%20201.8%2C126.2%20203.6%2C126.3%20205.3%2C126.4%20207.1%2C126.5%20208.9%2C126.7%20210.6%2C126.9%20212.4%2C127.0%20214.1%2C127.2%20215.9%2C127.5%20217.7%2C127.7%20219.4%2C127.9%20221.2%2C128.2%20223.0%2C128.5%20224.7%2C128.8%20226.5%2C129.1%20228.2%2C129.4%20230.0%2C129.7%20231.8%2C130.0%20233.5%2C130.4%20235.3%2C130.7%20237.1%2C131.1%20238.8%2C131.5%20240.6%2C131.8%20242.4%2C132.2%20244.1%2C132.6%20245.9%2C133.1%20247.6%2C133.5%20249.4%2C133.9%20251.2%2C134.4%20252.9%2C134.8%20254.7%2C135.3%20256.4%2C135.7%20258.2%2C136.2%20260.0%2C136.7%20261.7%2C137.1%20263.5%2C137.6%20265.3%2C138.1%20267.0%2C138.6%20268.8%2C139.1%20270.6%2C139.7%20272.3%2C140.2%20274.1%2C140.7%20275.8%2C141.2%20277.6%2C141.8%20279.4%2C142.3%20281.1%2C142.8%20282.9%2C143.4%20284.6%2C143.9%20286.4%2C144.5%20288.2%2C145.0%20289.9%2C145.6%20291.7%2C146.2%20293.5%2C146.7%20295.2%2C147.3%20297.0%2C147.9%20298.8%2C148.4%20300.5%2C149.0%20302.3%2C149.6%20304.0%2C150.2%20305.8%2C150.8%20307.6%2C151.3%20309.3%2C151.9%20311.1%2C152.5%20312.9%2C153.1%20314.6%2C153.7%20316.4%2C154.3%20318.1%2C154.9%20319.9%2C155.5%20321.7%2C156.1%20323.4%2C156.7%20325.2%2C157.3%20326.9%2C157.8%20328.7%2C158.4%20330.5%2C159.0%20332.2%2C159.6%20334.0%2C160.2%20335.8%2C160.8%20337.5%2C161.4%20339.3%2C162.0%20341.0%2C162.6%20342.8%2C163.2%20344.6%2C163.8%20346.3%2C164.4%20348.1%2C165.0%20349.9%2C165.6%20351.6%2C166.2%20353.4%2C166.8%20355.1%2C167.4%20356.9%2C168.0%20358.7%2C168.6%20360.4%2C169.1%20362.2%2C169.7%20364.0%2C170.3%20365.7%2C170.9%20367.5%2C171.5%20369.2%2C172.1%20371.0%2C172.6%20372.8%2C173.2%20374.5%2C173.8%20376.3%2C174.4%20378.1%2C175.0%20379.8%2C175.5%20381.6%2C176.1%20383.4%2C176.7%20385.1%2C177.2%20386.9%2C177.8%20388.6%2C178.4%20390.4%2C178.9%20392.2%2C179.5%20393.9%2C180.0%20395.7%2C180.6%20397.5%2C181.1%20399.2%2C181.7%20401.0%2C182.2%20402.7%2C182.8%20404.5%2C183.3%20406.3%2C183.9%20408.0%2C184.4%20409.8%2C185.0%20411.5%2C185.5%20413.3%2C186.0%20415.1%2C186.6%20416.8%2C187.1%20418.6%2C187.6%20420.4%2C188.1%20422.1%2C188.7%20423.9%2C189.2%20425.6%2C189.7%20427.4%2C190.2%20429.2%2C190.7%20430.9%2C191.2%20432.7%2C191.7%20434.5%2C192.2%20436.2%2C192.7%20438.0%2C193.2%20439.8%2C193.7%20441.5%2C194.2%20443.3%2C194.7%20445.0%2C195.2%20446.8%2C195.7%20448.6%2C196.2%20450.3%2C196.6%20452.1%2C197.1%20453.9%2C197.6%20455.6%2C198.1%20457.4%2C198.5%20459.1%2C199.0%20460.9%2C199.4%20462.7%2C199.9%20464.4%2C200.4%20466.2%2C200.8%20468.0%2C201.3%20469.7%2C201.7%20471.5%2C202.2%20473.2%2C202.6%20475.0%2C203.0%20476.8%2C203.5%20478.5%2C203.9%20480.3%2C204.4%20482.0%2C204.8%20483.8%2C205.2%20485.6%2C205.6%20487.3%2C206.1%20489.1%2C206.5%20490.9%2C206.9%20492.6%2C207.3%20494.4%2C207.7%20496.1%2C208.1%20497.9%2C208.5%20499.7%2C208.9%20501.4%2C209.3%20503.2%2C209.7%20505.0%2C210.1%20506.7%2C210.5%20508.5%2C210.9%20510.2%2C211.3%20512.0%2C211.7%20513.8%2C212.1%20515.5%2C212.4%20517.3%2C212.8%20519.1%2C213.2%20520.8%2C213.5%20522.6%2C213.9%20524.4%2C214.3%20526.1%2C214.6%20527.9%2C215.0%20529.6%2C215.4%20531.4%2C215.7%20533.2%2C216.1%20534.9%2C216.4%20536.7%2C216.8%20538.5%2C217.1%20540.2%2C217.5%20542.0%2C217.8%20543.7%2C218.1%20545.5%2C218.5%20547.3%2C218.8%20549.0%2C219.1%20550.8%2C219.5%20552.5%2C219.8%20554.3%2C220.1%20556.1%2C220.4%20557.8%2C220.7%20559.6%2C221.0%20561.4%2C221.4%20563.1%2C221.7%20564.9%2C222.0%20566.6%2C222.3%20568.4%2C222.6%20570.2%2C222.9%20571.9%2C223.2%20573.7%2C223.5%20575.5%2C223.8%20577.2%2C224.1%20579.0%2C224.4%20580.8%2C224.6%20582.5%2C224.9%20584.3%2C225.2%20586.0%2C225.5%20587.8%2C225.8%20589.6%2C226.0%20591.3%2C226.3%20593.1%2C226.6%20594.9%2C226.8%20596.6%2C227.1%20598.4%2C227.4%20600.1%2C227.6%20601.9%2C227.9%20603.7%2C228.2%20605.4%2C228.4%20607.2%2C228.7%20609.0%2C228.9%20610.7%2C229.2%20612.5%2C229.4%20614.2%2C229.7%20616.0%2C229.9%22%20clip-path%3D%22url%28%23clip-9928101%29%22%2F%3E%0A%3Ccircle%20cx%3D%2252.0%22%20cy%3D%22255.8%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-130",
    case_id: "MATH 11.130",
    title: "Double zero at x=1: does f change monotonicity?",
    subsection: "11.4",
    context:
      "The figure shows $f'$ touching the axis at $x=1$ and crossing at $x=4$. Decide TRUE or FALSE.",
    statements: [
      "At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=4$.",
      "On $(1,4)$ the curve is below the axis, so $f$ is decreasing on $(1,4)$.",
      "On $(0,1)$ the curve is also below the axis (or touches at the end), so $f$ does not switch from increasing to decreasing at $x=1$ in the usual $+$ to $-$ way.",
      "At $x=2$, $f'$ is negative.",
      "Touching the axis at $x=1$ without a clear $+$ to $-$ or $-$ to $+$ change means $x=1$ need not be a local extremum of $f$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A local minimum of $f$ is a zero of $f'$ where the sign changes from $-$ to $+$. At $x=4$ the figure shows exactly that crossing.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Between $1$ and $4$ the curve is below the axis.

So the statement is True.`,
      `**C.** → True

Left of $x=1$ the curve is below the axis as well, so $f'$ does not switch from $+$ to $-$ at the flat touch $x=1$.

So the statement is True.`,
      `**D.** → True

Between the zeros at $x=1$ and $x=4$ the graph of $f'$ sits below the axis, so in particular $f'(2)<0$.

So the statement is True.`,
      `**E.** → True

A flat touch of $f'$ that does not change sign fails the first-derivative test, so $x=1$ need not be a local extremum of $f$.

So the statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 130,
    solution_overview:
      "Double zero may fail a sign change; the simple zero at $x=4$ still gives a local min of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-5015280%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%2244%22%20x2%3D%22164.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%2244%22%20x2%3D%22277.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%2244%22%20x2%3D%22390.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%2244%22%20x2%3D%22503.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22616%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22258.3%22%20x2%3D%22616%22%20y2%3D%22258.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22616%22%20y2%3D%22172.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2286.9%22%20x2%3D%22616%22%20y2%3D%2286.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22616%22%20y2%3D%22172.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22164.8%22%20y1%3D%22344%22%20x2%3D%22164.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22164.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22277.6%22%20y1%3D%22344%22%20x2%3D%22277.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22277.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22390.4%22%20y1%3D%22344%22%20x2%3D%22390.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22390.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22503.2%22%20y1%3D%22344%22%20x2%3D%22503.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22503.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22258.3%22%20x2%3D%2252%22%20y2%3D%22258.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22262.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22172.6%22%20x2%3D%2252%22%20y2%3D%22172.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22176.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2286.9%22%20x2%3D%2252%22%20y2%3D%2286.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2290.9%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C258.3%2053.8%2C255.3%2055.5%2C252.4%2057.3%2C249.5%2059.0%2C246.7%2060.8%2C244.0%2062.6%2C241.3%2064.3%2C238.7%2066.1%2C236.1%2067.9%2C233.6%2069.6%2C231.2%2071.4%2C228.8%2073.2%2C226.5%2074.9%2C224.2%2076.7%2C222.0%2078.4%2C219.9%2080.2%2C217.8%2082.0%2C215.7%2083.7%2C213.7%2085.5%2C211.8%2087.2%2C209.9%2089.0%2C208.1%2090.8%2C206.3%2092.5%2C204.6%2094.3%2C202.9%2096.1%2C201.3%2097.8%2C199.7%2099.6%2C198.2%20101.3%2C196.7%20103.1%2C195.3%20104.9%2C193.9%20106.6%2C192.6%20108.4%2C191.3%20110.2%2C190.1%20111.9%2C188.9%20113.7%2C187.8%20115.5%2C186.7%20117.2%2C185.6%20119.0%2C184.6%20120.7%2C183.7%20122.5%2C182.7%20124.3%2C181.9%20126.0%2C181.0%20127.8%2C180.2%20129.6%2C179.5%20131.3%2C178.8%20133.1%2C178.1%20134.8%2C177.5%20136.6%2C176.9%20138.4%2C176.4%20140.1%2C175.9%20141.9%2C175.4%20143.7%2C175.0%20145.4%2C174.6%20147.2%2C174.2%20148.9%2C173.9%20150.7%2C173.6%20152.5%2C173.4%20154.2%2C173.2%20156.0%2C173.0%20157.8%2C172.8%20159.5%2C172.7%20161.3%2C172.6%20163.0%2C172.6%20164.8%2C172.6%20166.6%2C172.6%20168.3%2C172.6%20170.1%2C172.7%20171.8%2C172.8%20173.6%2C173.0%20175.4%2C173.1%20177.1%2C173.3%20178.9%2C173.5%20180.7%2C173.8%20182.4%2C174.1%20184.2%2C174.4%20185.9%2C174.7%20187.7%2C175.0%20189.5%2C175.4%20191.2%2C175.8%20193.0%2C176.3%20194.8%2C176.7%20196.5%2C177.2%20198.3%2C177.7%20200.1%2C178.2%20201.8%2C178.7%20203.6%2C179.3%20205.3%2C179.9%20207.1%2C180.5%20208.9%2C181.1%20210.6%2C181.7%20212.4%2C182.4%20214.1%2C183.1%20215.9%2C183.8%20217.7%2C184.5%20219.4%2C185.2%20221.2%2C186.0%20223.0%2C186.7%20224.7%2C187.5%20226.5%2C188.3%20228.2%2C189.1%20230.0%2C189.9%20231.8%2C190.7%20233.5%2C191.6%20235.3%2C192.5%20237.1%2C193.3%20238.8%2C194.2%20240.6%2C195.1%20242.4%2C196.0%20244.1%2C196.9%20245.9%2C197.8%20247.6%2C198.8%20249.4%2C199.7%20251.2%2C200.6%20252.9%2C201.6%20254.7%2C202.6%20256.4%2C203.5%20258.2%2C204.5%20260.0%2C205.5%20261.7%2C206.4%20263.5%2C207.4%20265.3%2C208.4%20267.0%2C209.4%20268.8%2C210.4%20270.6%2C211.4%20272.3%2C212.4%20274.1%2C213.4%20275.8%2C214.4%20277.6%2C215.4%20279.4%2C216.4%20281.1%2C217.4%20282.9%2C218.4%20284.6%2C219.4%20286.4%2C220.4%20288.2%2C221.4%20289.9%2C222.4%20291.7%2C223.4%20293.5%2C224.4%20295.2%2C225.4%20297.0%2C226.4%20298.8%2C227.3%20300.5%2C228.3%20302.3%2C229.3%20304.0%2C230.2%20305.8%2C231.2%20307.6%2C232.1%20309.3%2C233.0%20311.1%2C234.0%20312.9%2C234.9%20314.6%2C235.8%20316.4%2C236.7%20318.1%2C237.5%20319.9%2C238.4%20321.7%2C239.3%20323.4%2C240.1%20325.2%2C240.9%20326.9%2C241.8%20328.7%2C242.6%20330.5%2C243.4%20332.2%2C244.1%20334.0%2C244.9%20335.8%2C245.6%20337.5%2C246.4%20339.3%2C247.1%20341.0%2C247.8%20342.8%2C248.5%20344.6%2C249.1%20346.3%2C249.8%20348.1%2C250.4%20349.9%2C251.0%20351.6%2C251.6%20353.4%2C252.1%20355.1%2C252.7%20356.9%2C253.2%20358.7%2C253.7%20360.4%2C254.2%20362.2%2C254.6%20364.0%2C255.0%20365.7%2C255.4%20367.5%2C255.8%20369.2%2C256.2%20371.0%2C256.5%20372.8%2C256.8%20374.5%2C257.1%20376.3%2C257.3%20378.1%2C257.5%20379.8%2C257.7%20381.6%2C257.9%20383.4%2C258.0%20385.1%2C258.1%20386.9%2C258.2%20388.6%2C258.3%20390.4%2C258.3%20392.2%2C258.3%20393.9%2C258.2%20395.7%2C258.1%20397.5%2C258.0%20399.2%2C257.9%20401.0%2C257.7%20402.7%2C257.5%20404.5%2C257.2%20406.3%2C257.0%20408.0%2C256.6%20409.8%2C256.3%20411.5%2C255.9%20413.3%2C255.5%20415.1%2C255.0%20416.8%2C254.5%20418.6%2C253.9%20420.4%2C253.3%20422.1%2C252.7%20423.9%2C252.1%20425.6%2C251.4%20427.4%2C250.6%20429.2%2C249.8%20430.9%2C249.0%20432.7%2C248.1%20434.5%2C247.2%20436.2%2C246.2%20438.0%2C245.2%20439.8%2C244.2%20441.5%2C243.1%20443.3%2C242.0%20445.0%2C240.8%20446.8%2C239.5%20448.6%2C238.3%20450.3%2C236.9%20452.1%2C235.6%20453.9%2C234.1%20455.6%2C232.7%20457.4%2C231.1%20459.1%2C229.6%20460.9%2C227.9%20462.7%2C226.3%20464.4%2C224.5%20466.2%2C222.8%20468.0%2C220.9%20469.7%2C219.1%20471.5%2C217.1%20473.2%2C215.1%20475.0%2C213.1%20476.8%2C211.0%20478.5%2C208.8%20480.3%2C206.6%20482.0%2C204.4%20483.8%2C202.0%20485.6%2C199.6%20487.3%2C197.2%20489.1%2C194.7%20490.9%2C192.2%20492.6%2C189.5%20494.4%2C186.9%20496.1%2C184.1%20497.9%2C181.3%20499.7%2C178.5%20501.4%2C175.6%20503.2%2C172.6%20505.0%2C169.5%20506.7%2C166.4%20508.5%2C163.2%20510.2%2C160.0%20512.0%2C156.7%20513.8%2C153.3%20515.5%2C149.9%20517.3%2C146.4%20519.1%2C142.8%20520.8%2C139.2%20522.6%2C135.5%20524.4%2C131.7%20526.1%2C127.9%20527.9%2C124.0%20529.6%2C120.0%20531.4%2C116.0%20533.2%2C111.9%20534.9%2C107.7%20536.7%2C103.4%20538.5%2C99.1%20540.2%2C94.7%20542.0%2C90.2%20543.7%2C85.7%20545.5%2C81.0%20547.3%2C76.3%20549.0%2C71.6%20550.8%2C66.7%20552.5%2C61.8%20554.3%2C56.8%20556.1%2C51.7%20557.8%2C46.6%20559.6%2C41.3%20561.4%2C36.0%20563.1%2C30.6%20564.9%2C25.1%20566.6%2C19.6%20568.4%2C14.0%20570.2%2C8.3%20571.9%2C2.5%20573.7%2C-3.4%20575.5%2C-9.4%20577.2%2C-15.4%20579.0%2C-21.5%20580.8%2C-27.8%20582.5%2C-34.0%20584.3%2C-40.4%20586.0%2C-46.9%20587.8%2C-53.4%20589.6%2C-60.1%20591.3%2C-66.8%20593.1%2C-73.6%20594.9%2C-80.5%20596.6%2C-87.5%20598.4%2C-94.6%20600.1%2C-101.7%20601.9%2C-109.0%20603.7%2C-116.3%20605.4%2C-123.7%20607.2%2C-131.3%20609.0%2C-138.9%20610.7%2C-146.6%20612.5%2C-154.4%20614.2%2C-162.3%20616.0%2C-170.3%22%20clip-path%3D%22url%28%23clip-5015280%29%22%2F%3E%0A%3Ccircle%20cx%3D%22164.8%22%20cy%3D%22172.6%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22503.2%22%20cy%3D%22172.6%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-131",
    case_id: "MATH 11.131",
    title: "Always-positive rising C′",
    subsection: "11.4",
    context:
      "The figure shows marginal cost $C'$. Decide TRUE or FALSE.",
    statements: [
      "Throughout the window, $C'>0$, so total cost $C$ is increasing.",
      "Because $C'$ itself is rising, $C$ is concave up.",
      "At $x=4$, reading the scale, $C'$ is greater than $2$.",
      "A local minimum of cost occurs somewhere in $(0,6)$ because $C'$ is positive.",
      "At $x=0$, $C'$ is about $0.5$."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The sign of the derivative on the figure is what decides increase versus decrease. The curve stays above the axis.

So the statement is True.`,
      `**B.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Rising $C'$ means $C''>0$.

So the statement is True.`,
      `**C.** → True

Read the figure at $x=4$. At $x=4$ the height is clearly above $2$.

So the statement is True.`,
      `**D.** → False

Positive $C'$ means cost keeps rising — no interior cost minimum from a sign change of $C'$.

So the statement is False.`,
      `**E.** → True

Read the figure at $x=0$. The left endpoint height is near $0.5$.

So the statement is True.`
    ],
    difficulty_level: "3/5",
    sort_order: 131,
    solution_overview:
      "Always-positive rising $C'$: cost increases and bends upward; no interior cost min.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EMarginal%20cost%20C%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-8578950%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22616%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22616%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22616%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C306.5%2053.8%2C306.1%2055.5%2C305.7%2057.3%2C305.2%2059.0%2C304.8%2060.8%2C304.4%2062.6%2C303.9%2064.3%2C303.5%2066.1%2C303.0%2067.9%2C302.6%2069.6%2C302.1%2071.4%2C301.7%2073.2%2C301.2%2074.9%2C300.8%2076.7%2C300.3%2078.4%2C299.9%2080.2%2C299.4%2082.0%2C298.9%2083.7%2C298.5%2085.5%2C298.0%2087.2%2C297.5%2089.0%2C297.1%2090.8%2C296.6%2092.5%2C296.1%2094.3%2C295.6%2096.1%2C295.1%2097.8%2C294.6%2099.6%2C294.1%20101.3%2C293.7%20103.1%2C293.2%20104.9%2C292.7%20106.6%2C292.2%20108.4%2C291.6%20110.2%2C291.1%20111.9%2C290.6%20113.7%2C290.1%20115.5%2C289.6%20117.2%2C289.1%20119.0%2C288.6%20120.7%2C288.0%20122.5%2C287.5%20124.3%2C287.0%20126.0%2C286.5%20127.8%2C285.9%20129.6%2C285.4%20131.3%2C284.8%20133.1%2C284.3%20134.8%2C283.8%20136.6%2C283.2%20138.4%2C282.7%20140.1%2C282.1%20141.9%2C281.6%20143.7%2C281.0%20145.4%2C280.4%20147.2%2C279.9%20148.9%2C279.3%20150.7%2C278.7%20152.5%2C278.2%20154.2%2C277.6%20156.0%2C277.0%20157.8%2C276.4%20159.5%2C275.9%20161.3%2C275.3%20163.0%2C274.7%20164.8%2C274.1%20166.6%2C273.5%20168.3%2C272.9%20170.1%2C272.3%20171.8%2C271.7%20173.6%2C271.1%20175.4%2C270.5%20177.1%2C269.9%20178.9%2C269.3%20180.7%2C268.7%20182.4%2C268.1%20184.2%2C267.4%20186.0%2C266.8%20187.7%2C266.2%20189.5%2C265.6%20191.2%2C264.9%20193.0%2C264.3%20194.8%2C263.7%20196.5%2C263.0%20198.3%2C262.4%20200.1%2C261.8%20201.8%2C261.1%20203.6%2C260.5%20205.3%2C259.8%20207.1%2C259.2%20208.9%2C258.5%20210.6%2C257.9%20212.4%2C257.2%20214.2%2C256.5%20215.9%2C255.9%20217.7%2C255.2%20219.4%2C254.5%20221.2%2C253.8%20223.0%2C253.2%20224.7%2C252.5%20226.5%2C251.8%20228.2%2C251.1%20230.0%2C250.4%20231.8%2C249.8%20233.5%2C249.1%20235.3%2C248.4%20237.1%2C247.7%20238.8%2C247.0%20240.6%2C246.3%20242.3%2C245.6%20244.1%2C244.9%20245.9%2C244.1%20247.6%2C243.4%20249.4%2C242.7%20251.2%2C242.0%20252.9%2C241.3%20254.7%2C240.5%20256.4%2C239.8%20258.2%2C239.1%20260.0%2C238.4%20261.7%2C237.6%20263.5%2C236.9%20265.3%2C236.2%20267.0%2C235.4%20268.8%2C234.7%20270.6%2C233.9%20272.3%2C233.2%20274.1%2C232.4%20275.8%2C231.7%20277.6%2C230.9%20279.4%2C230.1%20281.1%2C229.4%20282.9%2C228.6%20284.6%2C227.8%20286.4%2C227.1%20288.2%2C226.3%20289.9%2C225.5%20291.7%2C224.7%20293.5%2C224.0%20295.2%2C223.2%20297.0%2C222.4%20298.8%2C221.6%20300.5%2C220.8%20302.3%2C220.0%20304.0%2C219.2%20305.8%2C218.4%20307.6%2C217.6%20309.3%2C216.8%20311.1%2C216.0%20312.8%2C215.2%20314.6%2C214.4%20316.4%2C213.6%20318.1%2C212.7%20319.9%2C211.9%20321.7%2C211.1%20323.4%2C210.3%20325.2%2C209.4%20326.9%2C208.6%20328.7%2C207.8%20330.5%2C206.9%20332.2%2C206.1%20334.0%2C205.2%20335.8%2C204.4%20337.5%2C203.6%20339.3%2C202.7%20341.1%2C201.9%20342.8%2C201.0%20344.6%2C200.1%20346.3%2C199.3%20348.1%2C198.4%20349.9%2C197.5%20351.6%2C196.7%20353.4%2C195.8%20355.1%2C194.9%20356.9%2C194.1%20358.7%2C193.2%20360.4%2C192.3%20362.2%2C191.4%20364.0%2C190.5%20365.7%2C189.6%20367.5%2C188.7%20369.2%2C187.8%20371.0%2C186.9%20372.8%2C186.0%20374.5%2C185.1%20376.3%2C184.2%20378.1%2C183.3%20379.8%2C182.4%20381.6%2C181.5%20383.4%2C180.6%20385.1%2C179.7%20386.9%2C178.8%20388.6%2C177.8%20390.4%2C176.9%20392.2%2C176.0%20393.9%2C175.0%20395.7%2C174.1%20397.4%2C173.2%20399.2%2C172.2%20401.0%2C171.3%20402.7%2C170.3%20404.5%2C169.4%20406.3%2C168.4%20408.0%2C167.5%20409.8%2C166.5%20411.6%2C165.6%20413.3%2C164.6%20415.1%2C163.6%20416.8%2C162.7%20418.6%2C161.7%20420.4%2C160.7%20422.1%2C159.8%20423.9%2C158.8%20425.6%2C157.8%20427.4%2C156.8%20429.2%2C155.8%20430.9%2C154.9%20432.7%2C153.9%20434.5%2C152.9%20436.2%2C151.9%20438.0%2C150.9%20439.8%2C149.9%20441.5%2C148.9%20443.3%2C147.9%20445.0%2C146.9%20446.8%2C145.8%20448.6%2C144.8%20450.3%2C143.8%20452.1%2C142.8%20453.9%2C141.8%20455.6%2C140.8%20457.4%2C139.7%20459.1%2C138.7%20460.9%2C137.7%20462.7%2C136.6%20464.4%2C135.6%20466.2%2C134.6%20467.9%2C133.5%20469.7%2C132.5%20471.5%2C131.4%20473.2%2C130.4%20475.0%2C129.3%20476.8%2C128.3%20478.5%2C127.2%20480.3%2C126.1%20482.1%2C125.1%20483.8%2C124.0%20485.6%2C122.9%20487.3%2C121.9%20489.1%2C120.8%20490.9%2C119.7%20492.6%2C118.6%20494.4%2C117.6%20496.1%2C116.5%20497.9%2C115.4%20499.7%2C114.3%20501.4%2C113.2%20503.2%2C112.1%20505.0%2C111.0%20506.7%2C109.9%20508.5%2C108.8%20510.2%2C107.7%20512.0%2C106.6%20513.8%2C105.5%20515.5%2C104.4%20517.3%2C103.2%20519.1%2C102.1%20520.8%2C101.0%20522.6%2C99.9%20524.4%2C98.7%20526.1%2C97.6%20527.9%2C96.5%20529.6%2C95.4%20531.4%2C94.2%20533.2%2C93.1%20534.9%2C91.9%20536.7%2C90.8%20538.5%2C89.6%20540.2%2C88.5%20542.0%2C87.3%20543.7%2C86.2%20545.5%2C85.0%20547.3%2C83.9%20549.0%2C82.7%20550.8%2C81.5%20552.5%2C80.4%20554.3%2C79.2%20556.1%2C78.0%20557.8%2C76.8%20559.6%2C75.6%20561.4%2C74.5%20563.1%2C73.3%20564.9%2C72.1%20566.6%2C70.9%20568.4%2C69.7%20570.2%2C68.5%20571.9%2C67.3%20573.7%2C66.1%20575.5%2C64.9%20577.2%2C63.7%20579.0%2C62.5%20580.8%2C61.3%20582.5%2C60.1%20584.3%2C58.9%20586.0%2C57.6%20587.8%2C56.4%20589.6%2C55.2%20591.3%2C54.0%20593.1%2C52.7%20594.9%2C51.5%20596.6%2C50.3%20598.4%2C49.0%20600.1%2C47.8%20601.9%2C46.5%20603.7%2C45.3%20605.4%2C44.0%20607.2%2C42.8%20608.9%2C41.5%20610.7%2C40.3%20612.5%2C39.0%20614.2%2C37.8%20616.0%2C36.5%22%20clip-path%3D%22url%28%23clip-8578950%29%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-132",
    case_id: "MATH 11.132",
    title: "Cubic f′: read zeros and signs from coordinates",
    subsection: "11.4",
    context:
      "The figure shows $f'$ on $[0,6]$. Marked zeros are at $x=1$, $x=2.5$, and $x=5$. Decide TRUE or FALSE using the coordinates on the graph.",
    statements: [
      "At $x=2$, the graph of $f'$ is above the axis, so $f'(2)>0$ and $f$ is increasing at $x=2$.",
      "At $x=4$, one has $f'(4)<0$, so $f$ is decreasing at $x=4$.",
      "Because $f'$ changes from positive to negative at $x=2.5$, the function $f$ has a local maximum at $x=2.5$.",
      "Because $f'$ changes from negative to positive at $x=1$, the function $f$ has a local minimum at $x=1$.",
      "The value $f'(0)$ is positive."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Between the zeros $1$ and $2.5$ the curve is above the axis, and $x=2$ lies in that interval.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Between $2.5$ and $5$ the curve is below the axis; $x=4$ is in that interval.

So the statement is True.`,
      `**C.** → True

A $+$ to $-$ sign change of $f'$ at $x=2.5$ is a local maximum of $f$.

So the statement is True.`,
      `**D.** → True

A $-$ to $+$ sign change of $f'$ at $x=1$ is a local minimum of $f$.

So the statement is True.`,
      `**E.** → False

At $x=0$ the curve is clearly below the axis, so $f'(0)<0$.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 132,
    solution_overview:
      "Read signs of $f'$ from axis position at concrete $x$-values; use sign changes at the marked zeros.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-8431818%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22616%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22616%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22616%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22616%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C428.4%2053.8%2C421.4%2055.5%2C414.5%2057.3%2C407.8%2059.0%2C401.1%2060.8%2C394.6%2062.6%2C388.2%2064.3%2C381.9%2066.1%2C375.6%2067.9%2C369.5%2069.6%2C363.5%2071.4%2C357.6%2073.2%2C351.9%2074.9%2C346.2%2076.7%2C340.6%2078.4%2C335.1%2080.2%2C329.7%2082.0%2C324.4%2083.7%2C319.2%2085.5%2C314.2%2087.2%2C309.2%2089.0%2C304.3%2090.8%2C299.5%2092.5%2C294.8%2094.3%2C290.2%2096.1%2C285.7%2097.8%2C281.3%2099.6%2C276.9%20101.3%2C272.7%20103.1%2C268.6%20104.9%2C264.5%20106.6%2C260.6%20108.4%2C256.7%20110.2%2C252.9%20111.9%2C249.2%20113.7%2C245.6%20115.5%2C242.1%20117.2%2C238.7%20119.0%2C235.3%20120.7%2C232.0%20122.5%2C228.9%20124.3%2C225.8%20126.0%2C222.7%20127.8%2C219.8%20129.6%2C216.9%20131.3%2C214.2%20133.1%2C211.5%20134.8%2C208.8%20136.6%2C206.3%20138.4%2C203.8%20140.1%2C201.4%20141.9%2C199.1%20143.7%2C196.9%20145.4%2C194.7%20147.2%2C192.6%20148.9%2C190.6%20150.7%2C188.6%20152.5%2C186.7%20154.2%2C184.9%20156.0%2C183.2%20157.8%2C181.5%20159.5%2C179.9%20161.3%2C178.4%20163.0%2C176.9%20164.8%2C175.5%20166.6%2C174.1%20168.3%2C172.8%20170.1%2C171.6%20171.8%2C170.5%20173.6%2C169.4%20175.4%2C168.3%20177.1%2C167.4%20178.9%2C166.5%20180.7%2C165.6%20182.4%2C164.8%20184.2%2C164.1%20186.0%2C163.4%20187.7%2C162.7%20189.5%2C162.2%20191.2%2C161.7%20193.0%2C161.2%20194.8%2C160.8%20196.5%2C160.4%20198.3%2C160.1%20200.1%2C159.8%20201.8%2C159.6%20203.6%2C159.5%20205.3%2C159.4%20207.1%2C159.3%20208.9%2C159.3%20210.6%2C159.3%20212.4%2C159.4%20214.2%2C159.5%20215.9%2C159.7%20217.7%2C159.9%20219.4%2C160.1%20221.2%2C160.4%20223.0%2C160.7%20224.7%2C161.1%20226.5%2C161.5%20228.2%2C162.0%20230.0%2C162.4%20231.8%2C163.0%20233.5%2C163.5%20235.3%2C164.1%20237.1%2C164.7%20238.8%2C165.4%20240.6%2C166.1%20242.3%2C166.8%20244.1%2C167.6%20245.9%2C168.4%20247.6%2C169.2%20249.4%2C170.1%20251.2%2C171.0%20252.9%2C171.9%20254.7%2C172.8%20256.4%2C173.8%20258.2%2C174.8%20260.0%2C175.8%20261.7%2C176.8%20263.5%2C177.9%20265.3%2C179.0%20267.0%2C180.1%20268.8%2C181.2%20270.6%2C182.4%20272.3%2C183.5%20274.1%2C184.7%20275.8%2C185.9%20277.6%2C187.2%20279.4%2C188.4%20281.1%2C189.7%20282.9%2C191.0%20284.6%2C192.3%20286.4%2C193.6%20288.2%2C194.9%20289.9%2C196.2%20291.7%2C197.6%20293.5%2C198.9%20295.2%2C200.3%20297.0%2C201.7%20298.8%2C203.0%20300.5%2C204.4%20302.3%2C205.8%20304.0%2C207.2%20305.8%2C208.7%20307.6%2C210.1%20309.3%2C211.5%20311.1%2C212.9%20312.8%2C214.4%20314.6%2C215.8%20316.4%2C217.2%20318.1%2C218.7%20319.9%2C220.1%20321.7%2C221.5%20323.4%2C223.0%20325.2%2C224.4%20326.9%2C225.8%20328.7%2C227.3%20330.5%2C228.7%20332.2%2C230.1%20334.0%2C231.5%20335.8%2C232.9%20337.5%2C234.3%20339.3%2C235.7%20341.1%2C237.1%20342.8%2C238.4%20344.6%2C239.8%20346.3%2C241.1%20348.1%2C242.5%20349.9%2C243.8%20351.6%2C245.1%20353.4%2C246.4%20355.1%2C247.7%20356.9%2C249.0%20358.7%2C250.2%20360.4%2C251.4%20362.2%2C252.7%20364.0%2C253.8%20365.7%2C255.0%20367.5%2C256.2%20369.2%2C257.3%20371.0%2C258.4%20372.8%2C259.5%20374.5%2C260.6%20376.3%2C261.6%20378.1%2C262.7%20379.8%2C263.7%20381.6%2C264.6%20383.4%2C265.6%20385.1%2C266.5%20386.9%2C267.4%20388.6%2C268.2%20390.4%2C269.1%20392.2%2C269.9%20393.9%2C270.6%20395.7%2C271.4%20397.4%2C272.1%20399.2%2C272.8%20401.0%2C273.4%20402.7%2C274.0%20404.5%2C274.6%20406.3%2C275.1%20408.0%2C275.6%20409.8%2C276.0%20411.6%2C276.5%20413.3%2C276.8%20415.1%2C277.2%20416.8%2C277.5%20418.6%2C277.7%20420.4%2C278.0%20422.1%2C278.1%20423.9%2C278.3%20425.6%2C278.3%20427.4%2C278.4%20429.2%2C278.4%20430.9%2C278.3%20432.7%2C278.2%20434.5%2C278.1%20436.2%2C277.9%20438.0%2C277.6%20439.8%2C277.3%20441.5%2C277.0%20443.3%2C276.6%20445.0%2C276.1%20446.8%2C275.6%20448.6%2C275.0%20450.3%2C274.4%20452.1%2C273.8%20453.9%2C273.0%20455.6%2C272.2%20457.4%2C271.4%20459.1%2C270.5%20460.9%2C269.5%20462.7%2C268.5%20464.4%2C267.4%20466.2%2C266.3%20467.9%2C265.1%20469.7%2C263.8%20471.5%2C262.5%20473.2%2C261.1%20475.0%2C259.6%20476.8%2C258.1%20478.5%2C256.5%20480.3%2C254.8%20482.1%2C253.1%20483.8%2C251.3%20485.6%2C249.4%20487.3%2C247.5%20489.1%2C245.5%20490.9%2C243.4%20492.6%2C241.3%20494.4%2C239.0%20496.1%2C236.7%20497.9%2C234.4%20499.7%2C231.9%20501.4%2C229.4%20503.2%2C226.8%20505.0%2C224.1%20506.7%2C221.3%20508.5%2C218.5%20510.2%2C215.6%20512.0%2C212.6%20513.8%2C209.5%20515.5%2C206.3%20517.3%2C203.1%20519.1%2C199.7%20520.8%2C196.3%20522.6%2C192.8%20524.4%2C189.2%20526.1%2C185.6%20527.9%2C181.8%20529.6%2C178.0%20531.4%2C174.0%20533.2%2C170.0%20534.9%2C165.9%20536.7%2C161.7%20538.5%2C157.4%20540.2%2C153.0%20542.0%2C148.5%20543.7%2C143.9%20545.5%2C139.2%20547.3%2C134.4%20549.0%2C129.6%20550.8%2C124.6%20552.5%2C119.5%20554.3%2C114.4%20556.1%2C109.1%20557.8%2C103.8%20559.6%2C98.3%20561.4%2C92.7%20563.1%2C87.1%20564.9%2C81.3%20566.6%2C75.4%20568.4%2C69.5%20570.2%2C63.4%20571.9%2C57.2%20573.7%2C50.9%20575.5%2C44.5%20577.2%2C38.0%20579.0%2C31.4%20580.8%2C24.6%20582.5%2C17.8%20584.3%2C10.8%20586.0%2C3.8%20587.8%2C-3.4%20589.6%2C-10.7%20591.3%2C-18.1%20593.1%2C-25.6%20594.9%2C-33.2%20596.6%2C-41.0%20598.4%2C-48.9%20600.1%2C-56.8%20601.9%2C-64.9%20603.7%2C-73.2%20605.4%2C-81.5%20607.2%2C-90.0%20608.9%2C-98.6%20610.7%2C-107.3%20612.5%2C-116.1%20614.2%2C-125.0%20616.0%2C-134.1%22%20clip-path%3D%22url%28%23clip-8431818%29%22%2F%3E%0A%3Ccircle%20cx%3D%22146.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22287.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22522.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-133",
    case_id: "MATH 11.133",
    title: "Skewed f′: peak height and zero at x=4",
    subsection: "11.4",
    context:
      "The figure shows $f'$. It crosses the axis at $x=4$ and has a single positive hump to the left of that zero. Decide TRUE or FALSE.",
    statements: [
      "On $(0,4)$ one has $f'>0$, so $f$ is increasing on $(0,4)$.",
      "On $(4,8)$ one has $f'<0$, so $f$ is decreasing on $(4,8)$.",
      "The function $f$ has a local maximum at $x=4$.",
      "The steepest positive slope of $f$ in the window occurs where $f'$ attains its maximum value (near $x=1$), not at $x=4$.",
      "Reading the scale, $f'(0)$ is about $4$, while $f'(6)$ is negative but greater than $-1$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Left of the marked zero the curve is above the axis.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Right of $x=4$ the curve is below the axis.

So the statement is True.`,
      `**C.** → True

Sign change $+$ to $-$ at $x=4$ ⇒ local maximum of $f$.

So the statement is True.`,
      `**D.** → True

The steepest climb of $f$ is where $|f'|$ is largest among the positive heights — the peak of the $f'$ graph in the rising stretch. The largest $f'$ is the top of the hump near $x=1$; at $x=4$ one has $f'=0$.

So the statement is True.`,
      `**E.** → True

Compare heights on the shared vertical scale. At $x=0$ the height is near $4$; at $x=6$ the curve is slightly below zero but above $-1$.

So the statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 133,
    solution_overview:
      "Use the zero at $x=4$ and the hump height near $x=1$ to separate max of $f$ from steepest slope of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-2513682%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22193.0%22%20y1%3D%2244%22%20x2%3D%22193.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22475.0%22%20y1%3D%2244%22%20x2%3D%22475.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22316.7%22%20x2%3D%22616%22%20y2%3D%22316.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22262.2%22%20x2%3D%22616%22%20y2%3D%22262.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22207.6%22%20x2%3D%22616%22%20y2%3D%22207.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22153.1%22%20x2%3D%22616%22%20y2%3D%22153.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2298.5%22%20x2%3D%22616%22%20y2%3D%2298.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22262.2%22%20x2%3D%22616%22%20y2%3D%22262.2%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22193.0%22%20y1%3D%22344%22%20x2%3D%22193.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22193.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22475.0%22%20y1%3D%22344%22%20x2%3D%22475.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22475.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22316.7%22%20x2%3D%2252%22%20y2%3D%22316.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22320.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22262.2%22%20x2%3D%2252%22%20y2%3D%22262.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22266.2%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22207.6%22%20x2%3D%2252%22%20y2%3D%22207.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22211.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22153.1%22%20x2%3D%2252%22%20y2%3D%22153.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22157.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2298.5%22%20x2%3D%2252%22%20y2%3D%2298.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22102.5%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C44.0%2053.8%2C47.3%2055.5%2C50.5%2057.3%2C53.6%2059.0%2C56.8%2060.8%2C59.9%2062.6%2C62.9%2064.3%2C65.9%2066.1%2C68.9%2067.9%2C71.9%2069.6%2C74.8%2071.4%2C77.6%2073.2%2C80.5%2074.9%2C83.3%2076.7%2C86.0%2078.4%2C88.8%2080.2%2C91.5%2082.0%2C94.1%2083.7%2C96.8%2085.5%2C99.4%2087.2%2C101.9%2089.0%2C104.5%2090.8%2C107.0%2092.5%2C109.4%2094.3%2C111.9%2096.1%2C114.3%2097.8%2C116.6%2099.6%2C119.0%20101.3%2C121.3%20103.1%2C123.6%20104.9%2C125.8%20106.6%2C128.1%20108.4%2C130.3%20110.2%2C132.4%20111.9%2C134.6%20113.7%2C136.7%20115.5%2C138.8%20117.2%2C140.8%20119.0%2C142.9%20120.7%2C144.9%20122.5%2C146.9%20124.3%2C148.8%20126.0%2C150.8%20127.8%2C152.7%20129.6%2C154.5%20131.3%2C156.4%20133.1%2C158.2%20134.8%2C160.0%20136.6%2C161.8%20138.4%2C163.6%20140.1%2C165.3%20141.9%2C167.1%20143.7%2C168.7%20145.4%2C170.4%20147.2%2C172.1%20148.9%2C173.7%20150.7%2C175.3%20152.5%2C176.9%20154.2%2C178.4%20156.0%2C180.0%20157.8%2C181.5%20159.5%2C183.0%20161.3%2C184.5%20163.0%2C186.0%20164.8%2C187.4%20166.6%2C188.8%20168.3%2C190.2%20170.1%2C191.6%20171.8%2C193.0%20173.6%2C194.3%20175.4%2C195.7%20177.1%2C197.0%20178.9%2C198.3%20180.7%2C199.5%20182.4%2C200.8%20184.2%2C202.0%20185.9%2C203.3%20187.7%2C204.5%20189.5%2C205.7%20191.2%2C206.8%20193.0%2C208.0%20194.8%2C209.2%20196.5%2C210.3%20198.3%2C211.4%20200.1%2C212.5%20201.8%2C213.6%20203.6%2C214.6%20205.3%2C215.7%20207.1%2C216.7%20208.9%2C217.7%20210.6%2C218.8%20212.4%2C219.7%20214.1%2C220.7%20215.9%2C221.7%20217.7%2C222.6%20219.4%2C223.6%20221.2%2C224.5%20223.0%2C225.4%20224.7%2C226.3%20226.5%2C227.2%20228.2%2C228.1%20230.0%2C228.9%20231.8%2C229.8%20233.5%2C230.6%20235.3%2C231.4%20237.1%2C232.3%20238.8%2C233.1%20240.6%2C233.8%20242.4%2C234.6%20244.1%2C235.4%20245.9%2C236.1%20247.6%2C236.9%20249.4%2C237.6%20251.2%2C238.3%20252.9%2C239.0%20254.7%2C239.7%20256.4%2C240.4%20258.2%2C241.1%20260.0%2C241.8%20261.7%2C242.4%20263.5%2C243.1%20265.3%2C243.7%20267.0%2C244.4%20268.8%2C245.0%20270.6%2C245.6%20272.3%2C246.2%20274.1%2C246.8%20275.8%2C247.4%20277.6%2C247.9%20279.4%2C248.5%20281.1%2C249.1%20282.9%2C249.6%20284.6%2C250.2%20286.4%2C250.7%20288.2%2C251.2%20289.9%2C251.7%20291.7%2C252.2%20293.5%2C252.7%20295.2%2C253.2%20297.0%2C253.7%20298.8%2C254.2%20300.5%2C254.6%20302.3%2C255.1%20304.0%2C255.5%20305.8%2C256.0%20307.6%2C256.4%20309.3%2C256.9%20311.1%2C257.3%20312.9%2C257.7%20314.6%2C258.1%20316.4%2C258.5%20318.1%2C258.9%20319.9%2C259.3%20321.7%2C259.7%20323.4%2C260.1%20325.2%2C260.4%20326.9%2C260.8%20328.7%2C261.1%20330.5%2C261.5%20332.2%2C261.8%20334.0%2C262.2%20335.8%2C262.5%20337.5%2C262.8%20339.3%2C263.2%20341.0%2C263.5%20342.8%2C263.8%20344.6%2C264.1%20346.3%2C264.4%20348.1%2C264.7%20349.9%2C265.0%20351.6%2C265.3%20353.4%2C265.5%20355.1%2C265.8%20356.9%2C266.1%20358.7%2C266.3%20360.4%2C266.6%20362.2%2C266.9%20364.0%2C267.1%20365.7%2C267.4%20367.5%2C267.6%20369.2%2C267.8%20371.0%2C268.1%20372.8%2C268.3%20374.5%2C268.5%20376.3%2C268.7%20378.1%2C268.9%20379.8%2C269.1%20381.6%2C269.4%20383.4%2C269.6%20385.1%2C269.7%20386.9%2C269.9%20388.6%2C270.1%20390.4%2C270.3%20392.2%2C270.5%20393.9%2C270.7%20395.7%2C270.8%20397.5%2C271.0%20399.2%2C271.2%20401.0%2C271.3%20402.7%2C271.5%20404.5%2C271.7%20406.3%2C271.8%20408.0%2C272.0%20409.8%2C272.1%20411.5%2C272.2%20413.3%2C272.4%20415.1%2C272.5%20416.8%2C272.7%20418.6%2C272.8%20420.4%2C272.9%20422.1%2C273.0%20423.9%2C273.2%20425.6%2C273.3%20427.4%2C273.4%20429.2%2C273.5%20430.9%2C273.6%20432.7%2C273.7%20434.5%2C273.8%20436.2%2C273.9%20438.0%2C274.0%20439.8%2C274.1%20441.5%2C274.2%20443.3%2C274.3%20445.0%2C274.4%20446.8%2C274.5%20448.6%2C274.6%20450.3%2C274.6%20452.1%2C274.7%20453.9%2C274.8%20455.6%2C274.9%20457.4%2C274.9%20459.1%2C275.0%20460.9%2C275.1%20462.7%2C275.1%20464.4%2C275.2%20466.2%2C275.3%20468.0%2C275.3%20469.7%2C275.4%20471.5%2C275.4%20473.2%2C275.5%20475.0%2C275.5%20476.8%2C275.6%20478.5%2C275.6%20480.3%2C275.7%20482.0%2C275.7%20483.8%2C275.8%20485.6%2C275.8%20487.3%2C275.8%20489.1%2C275.9%20490.9%2C275.9%20492.6%2C276.0%20494.4%2C276.0%20496.1%2C276.0%20497.9%2C276.0%20499.7%2C276.1%20501.4%2C276.1%20503.2%2C276.1%20505.0%2C276.1%20506.7%2C276.2%20508.5%2C276.2%20510.2%2C276.2%20512.0%2C276.2%20513.8%2C276.2%20515.5%2C276.2%20517.3%2C276.3%20519.1%2C276.3%20520.8%2C276.3%20522.6%2C276.3%20524.4%2C276.3%20526.1%2C276.3%20527.9%2C276.3%20529.6%2C276.3%20531.4%2C276.3%20533.2%2C276.3%20534.9%2C276.3%20536.7%2C276.3%20538.5%2C276.3%20540.2%2C276.3%20542.0%2C276.3%20543.7%2C276.3%20545.5%2C276.3%20547.3%2C276.3%20549.0%2C276.3%20550.8%2C276.3%20552.5%2C276.3%20554.3%2C276.3%20556.1%2C276.3%20557.8%2C276.2%20559.6%2C276.2%20561.4%2C276.2%20563.1%2C276.2%20564.9%2C276.2%20566.6%2C276.2%20568.4%2C276.1%20570.2%2C276.1%20571.9%2C276.1%20573.7%2C276.1%20575.5%2C276.1%20577.2%2C276.1%20579.0%2C276.0%20580.8%2C276.0%20582.5%2C276.0%20584.3%2C276.0%20586.0%2C275.9%20587.8%2C275.9%20589.6%2C275.9%20591.3%2C275.9%20593.1%2C275.8%20594.9%2C275.8%20596.6%2C275.8%20598.4%2C275.8%20600.1%2C275.7%20601.9%2C275.7%20603.7%2C275.7%20605.4%2C275.6%20607.2%2C275.6%20609.0%2C275.6%20610.7%2C275.5%20612.5%2C275.5%20614.2%2C275.5%20616.0%2C275.4%22%20clip-path%3D%22url%28%23clip-2513682%29%22%2F%3E%0A%3Ccircle%20cx%3D%22334.0%22%20cy%3D%22262.2%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-134",
    case_id: "MATH 11.134",
    title: "Odd f′: values at x=±1 and the zero at the origin",
    subsection: "11.4",
    context:
      "The figure shows $f'$. It passes through the origin, is negative for $x<0$, and positive for $x>0$. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$ one has $f'(0)=0$, and $f'$ changes from negative to positive, so $f$ has a local minimum at $x=0$.",
      "On $(-3,0)$ the function $f$ is decreasing, and on $(0,3)$ it is increasing.",
      "Reading the scale, $|f'(1)|$ is about $4$, and $f'(-1)\\approx -4$.",
      "The highest point of the graph of $f'$ on $(0,3)$ occurs near $x=1$, so that is where $f$ rises most steeply on the right.",
      "Because $f'(0)=0$, the point $x=0$ is an inflection point of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A local minimum of $f$ needs $f'=0$ with a $-$ to $+$ sign change.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Sign of $f'$ is negative on the left and positive on the right.

So the statement is True.`,
      `**C.** → True

The lobes peak near height $4$ in absolute value at $x=\pm 1$.

So the statement is True.`,
      `**D.** → True

Compare heights on the shared vertical scale. Max of $f'$ on the right is near $x=1$; that maximises the upward slope of $f$.

So the statement is True.`,
      `**E.** → False

A zero of $f'$ with a sign change is a local extremum of $f$. Inflection points of $f$ track sign changes of $f''$ (extrema of the graph of $f'$), which here are near $x=\pm 1$, not at $0$.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 134,
    solution_overview:
      "Use $f'(0)=0$ and the lobe heights near $\\pm 1$; keep extrema of $f$ separate from inflections of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9562139%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22314.0%22%20x2%3D%22616%22%20y2%3D%22314.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22254.0%22%20x2%3D%22616%22%20y2%3D%22254.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22134.0%22%20x2%3D%22616%22%20y2%3D%22134.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2274.0%22%20x2%3D%22616%22%20y2%3D%2274.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22314.0%22%20x2%3D%2252%22%20y2%3D%22314.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22318.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22254.0%22%20x2%3D%2252%22%20y2%3D%22254.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22258.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22134.0%22%20x2%3D%2252%22%20y2%3D%22134.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22138.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2274.0%22%20x2%3D%2252%22%20y2%3D%2274.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2278.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C266.0%2053.8%2C266.4%2055.5%2C266.7%2057.3%2C267.1%2059.1%2C267.5%2060.8%2C267.8%2062.6%2C268.2%2064.3%2C268.6%2066.1%2C269.0%2067.9%2C269.4%2069.6%2C269.8%2071.4%2C270.1%2073.2%2C270.5%2074.9%2C270.9%2076.7%2C271.3%2078.4%2C271.8%2080.2%2C272.2%2082.0%2C272.6%2083.7%2C273.0%2085.5%2C273.4%2087.2%2C273.8%2089.0%2C274.3%2090.8%2C274.7%2092.5%2C275.1%2094.3%2C275.6%2096.1%2C276.0%2097.8%2C276.5%2099.6%2C276.9%20101.3%2C277.4%20103.1%2C277.8%20104.9%2C278.3%20106.6%2C278.7%20108.4%2C279.2%20110.2%2C279.7%20111.9%2C280.2%20113.7%2C280.6%20115.4%2C281.1%20117.2%2C281.6%20119.0%2C282.1%20120.7%2C282.6%20122.5%2C283.1%20124.3%2C283.6%20126.0%2C284.1%20127.8%2C284.6%20129.6%2C285.1%20131.3%2C285.6%20133.1%2C286.1%20134.8%2C286.6%20136.6%2C287.2%20138.4%2C287.7%20140.1%2C288.2%20141.9%2C288.7%20143.7%2C289.3%20145.4%2C289.8%20147.2%2C290.4%20148.9%2C290.9%20150.7%2C291.4%20152.5%2C292.0%20154.2%2C292.5%20156.0%2C293.1%20157.8%2C293.7%20159.5%2C294.2%20161.3%2C294.8%20163.0%2C295.3%20164.8%2C295.9%20166.6%2C296.4%20168.3%2C297.0%20170.1%2C297.6%20171.8%2C298.1%20173.6%2C298.7%20175.4%2C299.3%20177.1%2C299.8%20178.9%2C300.4%20180.7%2C300.9%20182.4%2C301.5%20184.2%2C302.0%20186.0%2C302.6%20187.7%2C303.1%20189.5%2C303.7%20191.2%2C304.2%20193.0%2C304.8%20194.8%2C305.3%20196.5%2C305.8%20198.3%2C306.3%20200.1%2C306.8%20201.8%2C307.3%20203.6%2C307.8%20205.3%2C308.3%20207.1%2C308.8%20208.9%2C309.3%20210.6%2C309.7%20212.4%2C310.1%20214.2%2C310.5%20215.9%2C310.9%20217.7%2C311.3%20219.4%2C311.7%20221.2%2C312.0%20223.0%2C312.4%20224.7%2C312.7%20226.5%2C312.9%20228.2%2C313.2%20230.0%2C313.4%20231.8%2C313.6%20233.5%2C313.7%20235.3%2C313.9%20237.1%2C313.9%20238.8%2C314.0%20240.6%2C314.0%20242.3%2C314.0%20244.1%2C313.9%20245.9%2C313.8%20247.6%2C313.6%20249.4%2C313.3%20251.2%2C313.0%20252.9%2C312.7%20254.7%2C312.3%20256.4%2C311.8%20258.2%2C311.3%20260.0%2C310.7%20261.7%2C310.0%20263.5%2C309.2%20265.3%2C308.4%20267.0%2C307.4%20268.8%2C306.4%20270.6%2C305.3%20272.3%2C304.1%20274.1%2C302.8%20275.8%2C301.4%20277.6%2C299.9%20279.4%2C298.3%20281.1%2C296.6%20282.9%2C294.7%20284.6%2C292.8%20286.4%2C290.7%20288.2%2C288.5%20289.9%2C286.2%20291.7%2C283.8%20293.5%2C281.3%20295.2%2C278.6%20297.0%2C275.8%20298.8%2C272.9%20300.5%2C269.9%20302.3%2C266.7%20304.0%2C263.4%20305.8%2C260.1%20307.6%2C256.6%20309.3%2C252.9%20311.1%2C249.2%20312.8%2C245.4%20314.6%2C241.5%20316.4%2C237.5%20318.1%2C233.4%20319.9%2C229.2%20321.7%2C225.0%20323.4%2C220.7%20325.2%2C216.3%20326.9%2C211.9%20328.7%2C207.5%20330.5%2C203.0%20332.2%2C198.5%20334.0%2C194.0%20335.8%2C189.5%20337.5%2C185.0%20339.3%2C180.5%20341.1%2C176.1%20342.8%2C171.7%20344.6%2C167.3%20346.3%2C163.0%20348.1%2C158.8%20349.9%2C154.6%20351.6%2C150.5%20353.4%2C146.5%20355.1%2C142.6%20356.9%2C138.8%20358.7%2C135.1%20360.4%2C131.4%20362.2%2C127.9%20364.0%2C124.6%20365.7%2C121.3%20367.5%2C118.1%20369.2%2C115.1%20371.0%2C112.2%20372.8%2C109.4%20374.5%2C106.7%20376.3%2C104.2%20378.1%2C101.8%20379.8%2C99.5%20381.6%2C97.3%20383.4%2C95.2%20385.1%2C93.3%20386.9%2C91.4%20388.6%2C89.7%20390.4%2C88.1%20392.2%2C86.6%20393.9%2C85.2%20395.7%2C83.9%20397.4%2C82.7%20399.2%2C81.6%20401.0%2C80.6%20402.7%2C79.6%20404.5%2C78.8%20406.3%2C78.0%20408.0%2C77.3%20409.8%2C76.7%20411.6%2C76.2%20413.3%2C75.7%20415.1%2C75.3%20416.8%2C75.0%20418.6%2C74.7%20420.4%2C74.4%20422.1%2C74.2%20423.9%2C74.1%20425.6%2C74.0%20427.4%2C74.0%20429.2%2C74.0%20430.9%2C74.1%20432.7%2C74.1%20434.5%2C74.3%20436.2%2C74.4%20438.0%2C74.6%20439.8%2C74.8%20441.5%2C75.1%20443.3%2C75.3%20445.0%2C75.6%20446.8%2C76.0%20448.6%2C76.3%20450.3%2C76.7%20452.1%2C77.1%20453.9%2C77.5%20455.6%2C77.9%20457.4%2C78.3%20459.1%2C78.7%20460.9%2C79.2%20462.7%2C79.7%20464.4%2C80.2%20466.2%2C80.7%20467.9%2C81.2%20469.7%2C81.7%20471.5%2C82.2%20473.2%2C82.7%20475.0%2C83.2%20476.8%2C83.8%20478.5%2C84.3%20480.3%2C84.9%20482.1%2C85.4%20483.8%2C86.0%20485.6%2C86.5%20487.3%2C87.1%20489.1%2C87.6%20490.9%2C88.2%20492.6%2C88.7%20494.4%2C89.3%20496.1%2C89.9%20497.9%2C90.4%20499.7%2C91.0%20501.4%2C91.6%20503.2%2C92.1%20505.0%2C92.7%20506.7%2C93.2%20508.5%2C93.8%20510.2%2C94.3%20512.0%2C94.9%20513.8%2C95.5%20515.5%2C96.0%20517.3%2C96.6%20519.1%2C97.1%20520.8%2C97.6%20522.6%2C98.2%20524.4%2C98.7%20526.1%2C99.3%20527.9%2C99.8%20529.6%2C100.3%20531.4%2C100.8%20533.2%2C101.4%20534.9%2C101.9%20536.7%2C102.4%20538.5%2C102.9%20540.2%2C103.4%20542.0%2C103.9%20543.7%2C104.4%20545.5%2C104.9%20547.3%2C105.4%20549.0%2C105.9%20550.8%2C106.4%20552.5%2C106.9%20554.3%2C107.4%20556.1%2C107.8%20557.8%2C108.3%20559.6%2C108.8%20561.4%2C109.3%20563.1%2C109.7%20564.9%2C110.2%20566.6%2C110.6%20568.4%2C111.1%20570.2%2C111.5%20571.9%2C112.0%20573.7%2C112.4%20575.5%2C112.9%20577.2%2C113.3%20579.0%2C113.7%20580.8%2C114.2%20582.5%2C114.6%20584.3%2C115.0%20586.0%2C115.4%20587.8%2C115.8%20589.6%2C116.2%20591.3%2C116.7%20593.1%2C117.1%20594.9%2C117.5%20596.6%2C117.9%20598.4%2C118.2%20600.1%2C118.6%20601.9%2C119.0%20603.7%2C119.4%20605.4%2C119.8%20607.2%2C120.2%20608.9%2C120.5%20610.7%2C120.9%20612.5%2C121.3%20614.2%2C121.6%20616.0%2C122.0%22%20clip-path%3D%22url%28%23clip-9562139%29%22%2F%3E%0A%3Ccircle%20cx%3D%22334.0%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-135",
    case_id: "MATH 11.135",
    title: "Product-form f′ with zeros at −2, 1, and 2",
    subsection: "11.4",
    context:
      "The figure shows $f'$ with zeros at $x=-2$, $x=1$, and $x=2$. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, the graph is above the axis, so $f'(0)>0$ and $f$ is increasing at $x=0$.",
      "On $(1,2)$ the graph of $f'$ is below the axis, so $f$ is decreasing on $(1,2)$.",
      "The function $f$ has a local maximum at $x=1$ and a local minimum at $x=2$.",
      "At $x=3$, reading the scale, $f'(3)$ is greater than $4$.",
      "Because there are three zeros, $f''(x)=0$ at each of $x=-2$, $1$, and $2$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Between $-2$ and $1$ the curve is above the axis; $x=0$ is there.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Between $1$ and $2$ the curve dips below the axis.

So the statement is True.`,
      `**C.** → True

At $x=1$: $+$ to $-$ ⇒ local max of $f$. At $x=2$: $-$ to $+$ ⇒ local min of $f$.

So the statement is True.`,
      `**D.** → True

$f'(3)=(9-4)(2)=10>4$.

So the statement is True.`,
      `**E.** → False

Keep the roles straight: $f'$ is slope, and $f''$ says whether that slope is rising or falling. Zeros of $f'$ are about $f$, not $f''$. Zeros of $f''$ are extrema of the graph of $f'$.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 135,
    solution_overview:
      "Three zeros at $-2$, $1$, $2$; read signs on each interval and evaluate at a concrete $x=3$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-8424434%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%2244%22%20x2%3D%22132.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%2244%22%20x2%3D%22213.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%2244%22%20x2%3D%22293.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%2244%22%20x2%3D%22374.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%2244%22%20x2%3D%22454.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%2244%22%20x2%3D%22535.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22314.0%22%20x2%3D%22616%22%20y2%3D%22314.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22254.0%22%20x2%3D%22616%22%20y2%3D%22254.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22134.0%22%20x2%3D%22616%22%20y2%3D%22134.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2274.0%22%20x2%3D%22616%22%20y2%3D%2274.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%2244%22%20x2%3D%22293.7%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%22344%22%20x2%3D%22132.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22132.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%22344%22%20x2%3D%22213.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22213.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%22344%22%20x2%3D%22293.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22293.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%22344%22%20x2%3D%22374.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22374.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%22344%22%20x2%3D%22454.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22454.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%22344%22%20x2%3D%22535.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22535.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22314.0%22%20x2%3D%2252%22%20y2%3D%22314.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22318.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22254.0%22%20x2%3D%2252%22%20y2%3D%22254.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22258.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22134.0%22%20x2%3D%2252%22%20y2%3D%22134.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22138.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2274.0%22%20x2%3D%2252%22%20y2%3D%2274.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2278.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C494.0%2053.8%2C484.6%2055.5%2C475.3%2057.3%2C466.1%2059.0%2C457.1%2060.8%2C448.2%2062.6%2C439.5%2064.3%2C430.9%2066.1%2C422.4%2067.9%2C414.1%2069.6%2C405.9%2071.4%2C397.8%2073.2%2C389.9%2074.9%2C382.1%2076.7%2C374.4%2078.4%2C366.9%2080.2%2C359.5%2082.0%2C352.2%2083.7%2C345.1%2085.5%2C338.0%2087.2%2C331.1%2089.0%2C324.4%2090.8%2C317.7%2092.5%2C311.2%2094.3%2C304.8%2096.1%2C298.5%2097.8%2C292.4%2099.6%2C286.3%20101.3%2C280.4%20103.1%2C274.6%20104.9%2C268.9%20106.6%2C263.3%20108.4%2C257.9%20110.2%2C252.5%20111.9%2C247.3%20113.7%2C242.1%20115.5%2C237.1%20117.2%2C232.2%20119.0%2C227.4%20120.7%2C222.8%20122.5%2C218.2%20124.3%2C213.7%20126.0%2C209.3%20127.8%2C205.1%20129.6%2C200.9%20131.3%2C196.8%20133.1%2C192.9%20134.8%2C189.0%20136.6%2C185.3%20138.4%2C181.6%20140.1%2C178.0%20141.9%2C174.6%20143.7%2C171.2%20145.4%2C167.9%20147.2%2C164.7%20148.9%2C161.6%20150.7%2C158.6%20152.5%2C155.7%20154.2%2C152.9%20156.0%2C150.2%20157.8%2C147.5%20159.5%2C145.0%20161.3%2C142.5%20163.0%2C140.1%20164.8%2C137.8%20166.6%2C135.6%20168.3%2C133.5%20170.1%2C131.4%20171.8%2C129.5%20173.6%2C127.6%20175.4%2C125.8%20177.1%2C124.0%20178.9%2C122.4%20180.7%2C120.8%20182.4%2C119.3%20184.2%2C117.8%20186.0%2C116.5%20187.7%2C115.2%20189.5%2C114.0%20191.2%2C112.8%20193.0%2C111.7%20194.8%2C110.7%20196.5%2C109.8%20198.3%2C108.9%20200.1%2C108.1%20201.8%2C107.3%20203.6%2C106.7%20205.3%2C106.0%20207.1%2C105.5%20208.9%2C105.0%20210.6%2C104.5%20212.4%2C104.1%20214.2%2C103.8%20215.9%2C103.6%20217.7%2C103.3%20219.4%2C103.2%20221.2%2C103.1%20223.0%2C103.0%20224.7%2C103.0%20226.5%2C103.1%20228.2%2C103.2%20230.0%2C103.4%20231.8%2C103.6%20233.5%2C103.8%20235.3%2C104.1%20237.1%2C104.4%20238.8%2C104.8%20240.6%2C105.3%20242.3%2C105.7%20244.1%2C106.2%20245.9%2C106.8%20247.6%2C107.4%20249.4%2C108.0%20251.2%2C108.7%20252.9%2C109.4%20254.7%2C110.2%20256.4%2C110.9%20258.2%2C111.8%20260.0%2C112.6%20261.7%2C113.5%20263.5%2C114.4%20265.3%2C115.3%20267.0%2C116.3%20268.8%2C117.3%20270.6%2C118.3%20272.3%2C119.4%20274.1%2C120.5%20275.8%2C121.6%20277.6%2C122.7%20279.4%2C123.9%20281.1%2C125.0%20282.9%2C126.2%20284.6%2C127.5%20286.4%2C128.7%20288.2%2C130.0%20289.9%2C131.2%20291.7%2C132.5%20293.5%2C133.8%20295.2%2C135.1%20297.0%2C136.5%20298.8%2C137.8%20300.5%2C139.2%20302.3%2C140.5%20304.0%2C141.9%20305.8%2C143.3%20307.6%2C144.7%20309.3%2C146.1%20311.1%2C147.5%20312.8%2C148.9%20314.6%2C150.3%20316.4%2C151.7%20318.1%2C153.1%20319.9%2C154.6%20321.7%2C156.0%20323.4%2C157.4%20325.2%2C158.8%20326.9%2C160.2%20328.7%2C161.7%20330.5%2C163.1%20332.2%2C164.5%20334.0%2C165.9%20335.8%2C167.3%20337.5%2C168.6%20339.3%2C170.0%20341.0%2C171.4%20342.8%2C172.7%20344.6%2C174.1%20346.3%2C175.4%20348.1%2C176.7%20349.9%2C178.0%20351.6%2C179.3%20353.4%2C180.6%20355.1%2C181.8%20356.9%2C183.1%20358.7%2C184.3%20360.4%2C185.5%20362.2%2C186.6%20364.0%2C187.8%20365.7%2C188.9%20367.5%2C190.0%20369.2%2C191.1%20371.0%2C192.1%20372.8%2C193.1%20374.5%2C194.1%20376.3%2C195.1%20378.1%2C196.0%20379.8%2C196.9%20381.6%2C197.8%20383.4%2C198.7%20385.1%2C199.5%20386.9%2C200.2%20388.6%2C201.0%20390.4%2C201.7%20392.2%2C202.3%20393.9%2C203.0%20395.7%2C203.6%20397.4%2C204.1%20399.2%2C204.6%20401.0%2C205.1%20402.7%2C205.5%20404.5%2C205.9%20406.3%2C206.2%20408.0%2C206.5%20409.8%2C206.7%20411.6%2C206.9%20413.3%2C207.1%20415.1%2C207.1%20416.8%2C207.2%20418.6%2C207.2%20420.4%2C207.1%20422.1%2C207.0%20423.9%2C206.8%20425.6%2C206.6%20427.4%2C206.3%20429.2%2C206.0%20430.9%2C205.6%20432.7%2C205.1%20434.5%2C204.6%20436.2%2C204.0%20438.0%2C203.4%20439.8%2C202.7%20441.5%2C201.9%20443.3%2C201.1%20445.0%2C200.2%20446.8%2C199.3%20448.6%2C198.2%20450.3%2C197.1%20452.1%2C196.0%20453.9%2C194.7%20455.6%2C193.4%20457.4%2C192.1%20459.1%2C190.6%20460.9%2C189.1%20462.7%2C187.5%20464.4%2C185.8%20466.2%2C184.0%20467.9%2C182.2%20469.7%2C180.3%20471.5%2C178.3%20473.2%2C176.2%20475.0%2C174.1%20476.8%2C171.8%20478.5%2C169.5%20480.3%2C167.1%20482.1%2C164.6%20483.8%2C162.1%20485.6%2C159.4%20487.3%2C156.6%20489.1%2C153.8%20490.9%2C150.9%20492.6%2C147.9%20494.4%2C144.7%20496.1%2C141.5%20497.9%2C138.2%20499.7%2C134.8%20501.4%2C131.3%20503.2%2C127.8%20505.0%2C124.1%20506.7%2C120.3%20508.5%2C116.4%20510.2%2C112.4%20512.0%2C108.3%20513.8%2C104.2%20515.5%2C99.9%20517.3%2C95.5%20519.1%2C91.0%20520.8%2C86.4%20522.6%2C81.7%20524.4%2C76.8%20526.1%2C71.9%20527.9%2C66.9%20529.6%2C61.7%20531.4%2C56.5%20533.2%2C51.1%20534.9%2C45.6%20536.7%2C40.0%20538.5%2C34.3%20540.2%2C28.4%20542.0%2C22.5%20543.7%2C16.4%20545.5%2C10.2%20547.3%2C3.9%20549.0%2C-2.5%20550.8%2C-9.1%20552.5%2C-15.8%20554.3%2C-22.6%20556.1%2C-29.5%20557.8%2C-36.5%20559.6%2C-43.7%20561.4%2C-51.0%20563.1%2C-58.4%20564.9%2C-66.0%20566.6%2C-73.7%20568.4%2C-81.5%20570.2%2C-89.5%20571.9%2C-97.6%20573.7%2C-105.8%20575.5%2C-114.2%20577.2%2C-122.7%20579.0%2C-131.3%20580.8%2C-140.1%20582.5%2C-149.0%20584.3%2C-158.0%20586.0%2C-167.2%20587.8%2C-176.6%20589.6%2C-186.0%20591.3%2C-195.7%20593.1%2C-205.4%20594.9%2C-215.3%20596.6%2C-225.4%20598.4%2C-235.6%20600.1%2C-246.0%20601.9%2C-256.5%20603.7%2C-267.1%20605.4%2C-277.9%20607.2%2C-288.9%20608.9%2C-300.0%20610.7%2C-311.3%20612.5%2C-322.7%20614.2%2C-334.3%20616.0%2C-346.0%22%20clip-path%3D%22url%28%23clip-8424434%29%22%2F%3E%0A%3Ccircle%20cx%3D%22132.6%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22374.3%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22454.9%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-136",
    case_id: "MATH 11.136",
    title: "Odd f′ with even f″ on one plane",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$ on shared axes. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, brown is $0$ and green is positive (near $8$ on the scale).",
      "Because green is positive near $x=0$, brown is increasing through the origin.",
      "The green curve is zero near $x=\\pm 1$, which matches the peak and the lowest point of the brown curve.",
      "For $x>1$, green is negative, so brown is falling on $(1,3)$.",
      "Brown being positive on $(0,3)$ means $f$ is increasing on $(0,3)$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=0$ on the shared axes, Odd $f'$ vanishes at $0$; $f''(0)=8>0$.

So the statement is True.`,
      `**B.** → True

The sign of the derivative on the figure is what decides increase versus decrease. $f''>0$ ⇒ $f'$ increasing.

So the statement is True.`,
      `**C.** → True

Extrema of $f'$ at $x=\pm 1$ where $f''=0$.

So the statement is True.`,
      `**D.** → True

Green is $f''$ and brown is $f'$. Where green is negative, $f''<0$, so the brown graph of $f'$ is falling.

So the statement is True.`,
      `**E.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Positive $f'$ ⇒ increasing $f$.

So the statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 136,
    solution_overview:
      "Read $f'(0)=0$, $f''(0)>0$, and the $\\pm 1$ alignment on one plane.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9302712%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22301.1%22%20x2%3D%22506%22%20y2%3D%22301.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22215.4%22%20x2%3D%22506%22%20y2%3D%22215.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22129.7%22%20x2%3D%22506%22%20y2%3D%22129.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22215.4%22%20x2%3D%22506%22%20y2%3D%22215.4%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22301.1%22%20x2%3D%2252%22%20y2%3D%22301.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22305.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22215.4%22%20x2%3D%2252%22%20y2%3D%22215.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22219.4%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22129.7%22%20x2%3D%2252%22%20y2%3D%22129.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22133.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C266.9%2053.4%2C267.1%2054.8%2C267.4%2056.3%2C267.6%2057.7%2C267.9%2059.1%2C268.2%2060.5%2C268.4%2061.9%2C268.7%2063.3%2C269.0%2064.8%2C269.3%2066.2%2C269.5%2067.6%2C269.8%2069.0%2C270.1%2070.4%2C270.4%2071.9%2C270.7%2073.3%2C271.0%2074.7%2C271.3%2076.1%2C271.6%2077.5%2C271.9%2079.0%2C272.2%2080.4%2C272.5%2081.8%2C272.8%2083.2%2C273.1%2084.6%2C273.4%2086.1%2C273.7%2087.5%2C274.0%2088.9%2C274.3%2090.3%2C274.6%2091.7%2C275.0%2093.1%2C275.3%2094.6%2C275.6%2096.0%2C276.0%2097.4%2C276.3%2098.8%2C276.6%20100.2%2C277.0%20101.7%2C277.3%20103.1%2C277.7%20104.5%2C278.0%20105.9%2C278.3%20107.3%2C278.7%20108.8%2C279.1%20110.2%2C279.4%20111.6%2C279.8%20113.0%2C280.1%20114.4%2C280.5%20115.8%2C280.9%20117.3%2C281.2%20118.7%2C281.6%20120.1%2C282.0%20121.5%2C282.3%20122.9%2C282.7%20124.4%2C283.1%20125.8%2C283.5%20127.2%2C283.9%20128.6%2C284.3%20130.0%2C284.6%20131.4%2C285.0%20132.9%2C285.4%20134.3%2C285.8%20135.7%2C286.2%20137.1%2C286.6%20138.5%2C287.0%20140.0%2C287.4%20141.4%2C287.8%20142.8%2C288.2%20144.2%2C288.6%20145.6%2C289.0%20147.1%2C289.4%20148.5%2C289.8%20149.9%2C290.2%20151.3%2C290.6%20152.7%2C291.0%20154.2%2C291.4%20155.6%2C291.8%20157.0%2C292.2%20158.4%2C292.6%20159.8%2C293.0%20161.2%2C293.4%20162.7%2C293.8%20164.1%2C294.2%20165.5%2C294.5%20166.9%2C294.9%20168.3%2C295.3%20169.8%2C295.7%20171.2%2C296.0%20172.6%2C296.4%20174.0%2C296.7%20175.4%2C297.1%20176.8%2C297.4%20178.3%2C297.8%20179.7%2C298.1%20181.1%2C298.4%20182.5%2C298.7%20183.9%2C299.0%20185.4%2C299.2%20186.8%2C299.5%20188.2%2C299.7%20189.6%2C300.0%20191.0%2C300.2%20192.5%2C300.4%20193.9%2C300.6%20195.3%2C300.7%20196.7%2C300.8%20198.1%2C301.0%20199.6%2C301.0%20201.0%2C301.1%20202.4%2C301.1%20203.8%2C301.1%20205.2%2C301.1%20206.6%2C301.1%20208.1%2C301.0%20209.5%2C300.8%20210.9%2C300.7%20212.3%2C300.5%20213.7%2C300.2%20215.2%2C299.9%20216.6%2C299.6%20218.0%2C299.2%20219.4%2C298.8%20220.8%2C298.3%20222.2%2C297.7%20223.7%2C297.1%20225.1%2C296.4%20226.5%2C295.7%20227.9%2C294.9%20229.3%2C294.1%20230.8%2C293.1%20232.2%2C292.1%20233.6%2C291.1%20235.0%2C289.9%20236.4%2C288.7%20237.9%2C287.4%20239.3%2C286.0%20240.7%2C284.5%20242.1%2C283.0%20243.5%2C281.3%20244.9%2C279.6%20246.4%2C277.8%20247.8%2C275.9%20249.2%2C273.9%20250.6%2C271.8%20252.0%2C269.6%20253.5%2C267.4%20254.9%2C265.0%20256.3%2C262.6%20257.7%2C260.1%20259.1%2C257.5%20260.6%2C254.9%20262.0%2C252.1%20263.4%2C249.3%20264.8%2C246.5%20266.2%2C243.6%20267.6%2C240.6%20269.1%2C237.5%20270.5%2C234.5%20271.9%2C231.4%20273.3%2C228.2%20274.7%2C225.0%20276.2%2C221.8%20277.6%2C218.6%20279.0%2C215.4%20280.4%2C212.2%20281.8%2C209.0%20283.3%2C205.8%20284.7%2C202.6%20286.1%2C199.5%20287.5%2C196.4%20288.9%2C193.3%20290.4%2C190.3%20291.8%2C187.3%20293.2%2C184.4%20294.6%2C181.5%20296.0%2C178.7%20297.4%2C176.0%20298.9%2C173.3%20300.3%2C170.7%20301.7%2C168.2%20303.1%2C165.8%20304.5%2C163.5%20306.0%2C161.2%20307.4%2C159.1%20308.8%2C157.0%20310.2%2C155.0%20311.6%2C153.1%20313.1%2C151.3%20314.5%2C149.5%20315.9%2C147.9%20317.3%2C146.3%20318.7%2C144.9%20320.1%2C143.5%20321.6%2C142.2%20323.0%2C140.9%20324.4%2C139.8%20325.8%2C138.7%20327.2%2C137.7%20328.7%2C136.8%20330.1%2C135.9%20331.5%2C135.1%20332.9%2C134.4%20334.3%2C133.7%20335.8%2C133.1%20337.2%2C132.6%20338.6%2C132.1%20340.0%2C131.7%20341.4%2C131.3%20342.8%2C130.9%20344.3%2C130.6%20345.7%2C130.4%20347.1%2C130.2%20348.5%2C130.0%20349.9%2C129.9%20351.4%2C129.8%20352.8%2C129.7%20354.2%2C129.7%20355.6%2C129.7%20357.0%2C129.8%20358.4%2C129.8%20359.9%2C129.9%20361.3%2C130.0%20362.7%2C130.1%20364.1%2C130.3%20365.5%2C130.5%20367.0%2C130.7%20368.4%2C130.9%20369.8%2C131.1%20371.2%2C131.4%20372.6%2C131.6%20374.1%2C131.9%20375.5%2C132.2%20376.9%2C132.5%20378.3%2C132.8%20379.7%2C133.1%20381.1%2C133.4%20382.6%2C133.8%20384.0%2C134.1%20385.4%2C134.5%20386.8%2C134.8%20388.2%2C135.2%20389.7%2C135.6%20391.1%2C135.9%20392.5%2C136.3%20393.9%2C136.7%20395.3%2C137.1%20396.8%2C137.5%20398.2%2C137.9%20399.6%2C138.3%20401.0%2C138.6%20402.4%2C139.0%20403.9%2C139.4%20405.3%2C139.8%20406.7%2C140.2%20408.1%2C140.6%20409.5%2C141.0%20410.9%2C141.4%20412.4%2C141.9%20413.8%2C142.3%20415.2%2C142.7%20416.6%2C143.1%20418.0%2C143.5%20419.5%2C143.8%20420.9%2C144.2%20422.3%2C144.6%20423.7%2C145.0%20425.1%2C145.4%20426.6%2C145.8%20428.0%2C146.2%20429.4%2C146.6%20430.8%2C147.0%20432.2%2C147.4%20433.6%2C147.8%20435.1%2C148.1%20436.5%2C148.5%20437.9%2C148.9%20439.3%2C149.3%20440.7%2C149.6%20442.2%2C150.0%20443.6%2C150.4%20445.0%2C150.7%20446.4%2C151.1%20447.8%2C151.4%20449.2%2C151.8%20450.7%2C152.2%20452.1%2C152.5%20453.5%2C152.9%20454.9%2C153.2%20456.3%2C153.6%20457.8%2C153.9%20459.2%2C154.2%20460.6%2C154.6%20462.0%2C154.9%20463.4%2C155.2%20464.9%2C155.6%20466.3%2C155.9%20467.7%2C156.2%20469.1%2C156.5%20470.5%2C156.8%20471.9%2C157.2%20473.4%2C157.5%20474.8%2C157.8%20476.2%2C158.1%20477.6%2C158.4%20479.0%2C158.7%20480.5%2C159.0%20481.9%2C159.3%20483.3%2C159.6%20484.7%2C159.9%20486.1%2C160.2%20487.6%2C160.5%20489.0%2C160.8%20490.4%2C161.0%20491.8%2C161.3%20493.2%2C161.6%20494.6%2C161.9%20496.1%2C162.1%20497.5%2C162.4%20498.9%2C162.7%20500.3%2C163.0%20501.7%2C163.2%20503.2%2C163.5%20504.6%2C163.7%20506.0%2C164.0%22%20clip-path%3D%22url%28%23clip-9302712%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C229.1%2053.4%2C229.3%2054.8%2C229.4%2056.3%2C229.5%2057.7%2C229.6%2059.1%2C229.7%2060.5%2C229.9%2061.9%2C230.0%2063.3%2C230.1%2064.8%2C230.2%2066.2%2C230.3%2067.6%2C230.5%2069.0%2C230.6%2070.4%2C230.7%2071.9%2C230.9%2073.3%2C231.0%2074.7%2C231.1%2076.1%2C231.2%2077.5%2C231.4%2079.0%2C231.5%2080.4%2C231.6%2081.8%2C231.8%2083.2%2C231.9%2084.6%2C232.1%2086.1%2C232.2%2087.5%2C232.3%2088.9%2C232.5%2090.3%2C232.6%2091.7%2C232.7%2093.1%2C232.9%2094.6%2C233.0%2096.0%2C233.1%2097.4%2C233.3%2098.8%2C233.4%20100.2%2C233.6%20101.7%2C233.7%20103.1%2C233.8%20104.5%2C234.0%20105.9%2C234.1%20107.3%2C234.2%20108.8%2C234.4%20110.2%2C234.5%20111.6%2C234.6%20113.0%2C234.8%20114.4%2C234.9%20115.8%2C235.0%20117.3%2C235.2%20118.7%2C235.3%20120.1%2C235.4%20121.5%2C235.5%20122.9%2C235.6%20124.4%2C235.7%20125.8%2C235.9%20127.2%2C236.0%20128.6%2C236.1%20130.0%2C236.2%20131.4%2C236.3%20132.9%2C236.3%20134.3%2C236.4%20135.7%2C236.5%20137.1%2C236.6%20138.5%2C236.6%20140.0%2C236.7%20141.4%2C236.7%20142.8%2C236.8%20144.2%2C236.8%20145.6%2C236.8%20147.1%2C236.9%20148.5%2C236.9%20149.9%2C236.8%20151.3%2C236.8%20152.7%2C236.8%20154.2%2C236.7%20155.6%2C236.7%20157.0%2C236.6%20158.4%2C236.5%20159.8%2C236.4%20161.2%2C236.2%20162.7%2C236.1%20164.1%2C235.9%20165.5%2C235.7%20166.9%2C235.5%20168.3%2C235.2%20169.8%2C235.0%20171.2%2C234.7%20172.6%2C234.3%20174.0%2C234.0%20175.4%2C233.6%20176.8%2C233.1%20178.3%2C232.7%20179.7%2C232.1%20181.1%2C231.6%20182.5%2C231.0%20183.9%2C230.3%20185.4%2C229.6%20186.8%2C228.9%20188.2%2C228.1%20189.6%2C227.2%20191.0%2C226.3%20192.5%2C225.3%20193.9%2C224.3%20195.3%2C223.2%20196.7%2C222.0%20198.1%2C220.7%20199.6%2C219.4%20201.0%2C218.0%20202.4%2C216.5%20203.8%2C214.9%20205.2%2C213.2%20206.6%2C211.4%20208.1%2C209.5%20209.5%2C207.6%20210.9%2C205.5%20212.3%2C203.3%20213.7%2C201.0%20215.2%2C198.6%20216.6%2C196.0%20218.0%2C193.4%20219.4%2C190.6%20220.8%2C187.7%20222.2%2C184.7%20223.7%2C181.6%20225.1%2C178.3%20226.5%2C174.9%20227.9%2C171.4%20229.3%2C167.7%20230.8%2C164.0%20232.2%2C160.1%20233.6%2C156.1%20235.0%2C152.0%20236.4%2C147.8%20237.9%2C143.5%20239.3%2C139.1%20240.7%2C134.6%20242.1%2C130.1%20243.5%2C125.5%20244.9%2C120.9%20246.4%2C116.2%20247.8%2C111.5%20249.2%2C106.9%20250.6%2C102.2%20252.0%2C97.6%20253.5%2C93.0%20254.9%2C88.5%20256.3%2C84.1%20257.7%2C79.9%20259.1%2C75.7%20260.6%2C71.8%20262.0%2C68.0%20263.4%2C64.4%20264.8%2C61.1%20266.2%2C58.0%20267.6%2C55.2%20269.1%2C52.6%20270.5%2C50.4%20271.9%2C48.5%20273.3%2C46.9%20274.7%2C45.6%20276.2%2C44.7%20277.6%2C44.2%20279.0%2C44.0%20280.4%2C44.2%20281.8%2C44.7%20283.3%2C45.6%20284.7%2C46.9%20286.1%2C48.5%20287.5%2C50.4%20288.9%2C52.6%20290.4%2C55.2%20291.8%2C58.0%20293.2%2C61.1%20294.6%2C64.4%20296.0%2C68.0%20297.4%2C71.8%20298.9%2C75.7%20300.3%2C79.9%20301.7%2C84.1%20303.1%2C88.5%20304.5%2C93.0%20306.0%2C97.6%20307.4%2C102.2%20308.8%2C106.9%20310.2%2C111.5%20311.6%2C116.2%20313.1%2C120.9%20314.5%2C125.5%20315.9%2C130.1%20317.3%2C134.6%20318.7%2C139.1%20320.1%2C143.5%20321.6%2C147.8%20323.0%2C152.0%20324.4%2C156.1%20325.8%2C160.1%20327.2%2C164.0%20328.7%2C167.7%20330.1%2C171.4%20331.5%2C174.9%20332.9%2C178.3%20334.3%2C181.6%20335.8%2C184.7%20337.2%2C187.7%20338.6%2C190.6%20340.0%2C193.4%20341.4%2C196.0%20342.8%2C198.6%20344.3%2C201.0%20345.7%2C203.3%20347.1%2C205.5%20348.5%2C207.6%20349.9%2C209.5%20351.4%2C211.4%20352.8%2C213.2%20354.2%2C214.9%20355.6%2C216.5%20357.0%2C218.0%20358.4%2C219.4%20359.9%2C220.7%20361.3%2C222.0%20362.7%2C223.2%20364.1%2C224.3%20365.5%2C225.3%20367.0%2C226.3%20368.4%2C227.2%20369.8%2C228.1%20371.2%2C228.9%20372.6%2C229.6%20374.1%2C230.3%20375.5%2C231.0%20376.9%2C231.6%20378.3%2C232.1%20379.7%2C232.7%20381.1%2C233.1%20382.6%2C233.6%20384.0%2C234.0%20385.4%2C234.3%20386.8%2C234.7%20388.2%2C235.0%20389.7%2C235.2%20391.1%2C235.5%20392.5%2C235.7%20393.9%2C235.9%20395.3%2C236.1%20396.8%2C236.2%20398.2%2C236.4%20399.6%2C236.5%20401.0%2C236.6%20402.4%2C236.7%20403.9%2C236.7%20405.3%2C236.8%20406.7%2C236.8%20408.1%2C236.8%20409.5%2C236.9%20410.9%2C236.9%20412.4%2C236.8%20413.8%2C236.8%20415.2%2C236.8%20416.6%2C236.7%20418.0%2C236.7%20419.5%2C236.6%20420.9%2C236.6%20422.3%2C236.5%20423.7%2C236.4%20425.1%2C236.3%20426.6%2C236.3%20428.0%2C236.2%20429.4%2C236.1%20430.8%2C236.0%20432.2%2C235.9%20433.6%2C235.7%20435.1%2C235.6%20436.5%2C235.5%20437.9%2C235.4%20439.3%2C235.3%20440.7%2C235.2%20442.2%2C235.0%20443.6%2C234.9%20445.0%2C234.8%20446.4%2C234.6%20447.8%2C234.5%20449.2%2C234.4%20450.7%2C234.2%20452.1%2C234.1%20453.5%2C234.0%20454.9%2C233.8%20456.3%2C233.7%20457.8%2C233.6%20459.2%2C233.4%20460.6%2C233.3%20462.0%2C233.1%20463.4%2C233.0%20464.9%2C232.9%20466.3%2C232.7%20467.7%2C232.6%20469.1%2C232.5%20470.5%2C232.3%20471.9%2C232.2%20473.4%2C232.1%20474.8%2C231.9%20476.2%2C231.8%20477.6%2C231.6%20479.0%2C231.5%20480.5%2C231.4%20481.9%2C231.2%20483.3%2C231.1%20484.7%2C231.0%20486.1%2C230.9%20487.6%2C230.7%20489.0%2C230.6%20490.4%2C230.5%20491.8%2C230.3%20493.2%2C230.2%20494.6%2C230.1%20496.1%2C230.0%20497.5%2C229.9%20498.9%2C229.7%20500.3%2C229.6%20501.7%2C229.5%20503.2%2C229.4%20504.6%2C229.3%20506.0%2C229.1%22%20clip-path%3D%22url%28%23clip-9302712%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-137",
    case_id: "MATH 11.137",
    title: "f and f′ together: check consistency at x=0 and x=1",
    subsection: "11.4",
    context:
      "Brown is $f$ and green is $f'$ on one shared plane. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, brown has a local minimum with value $0$, and green crosses the axis there.",
      "On $(0,3)$, green is positive, matching a rising brown curve.",
      "On $(-3,0)$, green is negative, matching a falling brown curve.",
      "At $x=1$, green is near height $4$, so the slope of brown at $x=1$ is about $4$.",
      "The highest point of green on $(0,3)$ is a local maximum of brown."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=0$ on the shared axes, Local min of $f$ at $0$ with $f'(0)=0$.

So the statement is True.`,
      `**B.** → True

Positive $f'$ ↔ increasing $f$.

So the statement is True.`,
      `**C.** → True

Negative $f'$ ↔ decreasing $f$.

So the statement is True.`,
      `**D.** → True

At $x=1$ on the shared axes, $f'(1)$ is the height of the green curve at $x=1$; on the figure that height is about $4$.

So the statement is True.`,
      `**E.** → False

A maximum of $f'$ is where $f$ is steepest, not where $f$ has a local maximum. Local maxima of $f$ need zeros of $f'$ with a $+$ to $-$ change.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 137,
    solution_overview:
      "Consistency between $f$ and $f'$ on one plane; max of $f'$ ≠ max of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%20and%20f%E2%80%B2%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1213712%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22319.0%22%20x2%3D%22506%22%20y2%3D%22319.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22506%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22219.0%22%20x2%3D%22506%22%20y2%3D%22219.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22169.0%22%20x2%3D%22506%22%20y2%3D%22169.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22506%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2269.0%22%20x2%3D%22506%22%20y2%3D%2269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22219.0%22%20x2%3D%22506%22%20y2%3D%22219.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22319.0%22%20x2%3D%2252%22%20y2%3D%22319.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22323.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22219.0%22%20x2%3D%2252%22%20y2%3D%22219.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22223.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22169.0%22%20x2%3D%2252%22%20y2%3D%22169.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22173.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2269.0%22%20x2%3D%2252%22%20y2%3D%2269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-11.3%2053.4%2C-10.1%2054.8%2C-9.0%2056.3%2C-7.9%2057.7%2C-6.7%2059.1%2C-5.6%2060.5%2C-4.4%2061.9%2C-3.2%2063.3%2C-2.1%2064.8%2C-0.9%2066.2%2C0.3%2067.6%2C1.5%2069.0%2C2.7%2070.4%2C3.9%2071.9%2C5.1%2073.3%2C6.3%2074.7%2C7.5%2076.1%2C8.7%2077.5%2C10.0%2079.0%2C11.2%2080.4%2C12.4%2081.8%2C13.7%2083.2%2C14.9%2084.6%2C16.2%2086.1%2C17.5%2087.5%2C18.8%2088.9%2C20.0%2090.3%2C21.3%2091.7%2C22.6%2093.1%2C23.9%2094.6%2C25.2%2096.0%2C26.6%2097.4%2C27.9%2098.8%2C29.2%20100.2%2C30.6%20101.7%2C31.9%20103.1%2C33.3%20104.5%2C34.6%20105.9%2C36.0%20107.3%2C37.4%20108.8%2C38.8%20110.2%2C40.2%20111.6%2C41.6%20113.0%2C43.0%20114.4%2C44.4%20115.8%2C45.8%20117.3%2C47.3%20118.7%2C48.7%20120.1%2C50.2%20121.5%2C51.6%20122.9%2C53.1%20124.4%2C54.6%20125.8%2C56.1%20127.2%2C57.6%20128.6%2C59.1%20130.0%2C60.6%20131.4%2C62.1%20132.9%2C63.6%20134.3%2C65.1%20135.7%2C66.7%20137.1%2C68.2%20138.5%2C69.8%20140.0%2C71.4%20141.4%2C73.0%20142.8%2C74.5%20144.2%2C76.1%20145.6%2C77.7%20147.1%2C79.4%20148.5%2C81.0%20149.9%2C82.6%20151.3%2C84.3%20152.7%2C85.9%20154.2%2C87.6%20155.6%2C89.2%20157.0%2C90.9%20158.4%2C92.6%20159.8%2C94.3%20161.2%2C96.0%20162.7%2C97.7%20164.1%2C99.4%20165.5%2C101.1%20166.9%2C102.9%20168.3%2C104.6%20169.8%2C106.4%20171.2%2C108.1%20172.6%2C109.9%20174.0%2C111.7%20175.4%2C113.4%20176.8%2C115.2%20178.3%2C117.0%20179.7%2C118.8%20181.1%2C120.7%20182.5%2C122.5%20183.9%2C124.3%20185.4%2C126.1%20186.8%2C128.0%20188.2%2C129.8%20189.6%2C131.6%20191.0%2C133.5%20192.5%2C135.4%20193.9%2C137.2%20195.3%2C139.1%20196.7%2C140.9%20198.1%2C142.8%20199.6%2C144.7%20201.0%2C146.6%20202.4%2C148.4%20203.8%2C150.3%20205.2%2C152.2%20206.6%2C154.1%20208.1%2C155.9%20209.5%2C157.8%20210.9%2C159.7%20212.3%2C161.5%20213.7%2C163.4%20215.2%2C165.2%20216.6%2C167.1%20218.0%2C168.9%20219.4%2C170.7%20220.8%2C172.6%20222.2%2C174.4%20223.7%2C176.2%20225.1%2C177.9%20226.5%2C179.7%20227.9%2C181.5%20229.3%2C183.2%20230.8%2C184.9%20232.2%2C186.6%20233.6%2C188.3%20235.0%2C189.9%20236.4%2C191.5%20237.9%2C193.1%20239.3%2C194.7%20240.7%2C196.2%20242.1%2C197.7%20243.5%2C199.1%20244.9%2C200.6%20246.4%2C201.9%20247.8%2C203.3%20249.2%2C204.6%20250.6%2C205.8%20252.0%2C207.1%20253.5%2C208.2%20254.9%2C209.3%20256.3%2C210.4%20257.7%2C211.4%20259.1%2C212.3%20260.6%2C213.2%20262.0%2C214.1%20263.4%2C214.8%20264.8%2C215.5%20266.2%2C216.2%20267.6%2C216.8%20269.1%2C217.3%20270.5%2C217.7%20271.9%2C218.1%20273.3%2C218.4%20274.7%2C218.7%20276.2%2C218.9%20277.6%2C219.0%20279.0%2C219.0%20280.4%2C219.0%20281.8%2C218.9%20283.3%2C218.7%20284.7%2C218.4%20286.1%2C218.1%20287.5%2C217.7%20288.9%2C217.3%20290.4%2C216.8%20291.8%2C216.2%20293.2%2C215.5%20294.6%2C214.8%20296.0%2C214.1%20297.4%2C213.2%20298.9%2C212.3%20300.3%2C211.4%20301.7%2C210.4%20303.1%2C209.3%20304.5%2C208.2%20306.0%2C207.1%20307.4%2C205.8%20308.8%2C204.6%20310.2%2C203.3%20311.6%2C201.9%20313.1%2C200.6%20314.5%2C199.1%20315.9%2C197.7%20317.3%2C196.2%20318.7%2C194.7%20320.1%2C193.1%20321.6%2C191.5%20323.0%2C189.9%20324.4%2C188.3%20325.8%2C186.6%20327.2%2C184.9%20328.7%2C183.2%20330.1%2C181.5%20331.5%2C179.7%20332.9%2C177.9%20334.3%2C176.2%20335.8%2C174.4%20337.2%2C172.6%20338.6%2C170.7%20340.0%2C168.9%20341.4%2C167.1%20342.8%2C165.2%20344.3%2C163.4%20345.7%2C161.5%20347.1%2C159.7%20348.5%2C157.8%20349.9%2C155.9%20351.4%2C154.1%20352.8%2C152.2%20354.2%2C150.3%20355.6%2C148.4%20357.0%2C146.6%20358.4%2C144.7%20359.9%2C142.8%20361.3%2C140.9%20362.7%2C139.1%20364.1%2C137.2%20365.5%2C135.4%20367.0%2C133.5%20368.4%2C131.6%20369.8%2C129.8%20371.2%2C128.0%20372.6%2C126.1%20374.1%2C124.3%20375.5%2C122.5%20376.9%2C120.7%20378.3%2C118.8%20379.7%2C117.0%20381.1%2C115.2%20382.6%2C113.4%20384.0%2C111.7%20385.4%2C109.9%20386.8%2C108.1%20388.2%2C106.4%20389.7%2C104.6%20391.1%2C102.9%20392.5%2C101.1%20393.9%2C99.4%20395.3%2C97.7%20396.8%2C96.0%20398.2%2C94.3%20399.6%2C92.6%20401.0%2C90.9%20402.4%2C89.2%20403.9%2C87.6%20405.3%2C85.9%20406.7%2C84.3%20408.1%2C82.6%20409.5%2C81.0%20410.9%2C79.4%20412.4%2C77.7%20413.8%2C76.1%20415.2%2C74.5%20416.6%2C73.0%20418.0%2C71.4%20419.5%2C69.8%20420.9%2C68.2%20422.3%2C66.7%20423.7%2C65.1%20425.1%2C63.6%20426.6%2C62.1%20428.0%2C60.6%20429.4%2C59.1%20430.8%2C57.6%20432.2%2C56.1%20433.6%2C54.6%20435.1%2C53.1%20436.5%2C51.6%20437.9%2C50.2%20439.3%2C48.7%20440.7%2C47.3%20442.2%2C45.8%20443.6%2C44.4%20445.0%2C43.0%20446.4%2C41.6%20447.8%2C40.2%20449.2%2C38.8%20450.7%2C37.4%20452.1%2C36.0%20453.5%2C34.6%20454.9%2C33.3%20456.3%2C31.9%20457.8%2C30.6%20459.2%2C29.2%20460.6%2C27.9%20462.0%2C26.6%20463.4%2C25.2%20464.9%2C23.9%20466.3%2C22.6%20467.7%2C21.3%20469.1%2C20.0%20470.5%2C18.8%20471.9%2C17.5%20473.4%2C16.2%20474.8%2C14.9%20476.2%2C13.7%20477.6%2C12.4%20479.0%2C11.2%20480.5%2C10.0%20481.9%2C8.7%20483.3%2C7.5%20484.7%2C6.3%20486.1%2C5.1%20487.6%2C3.9%20489.0%2C2.7%20490.4%2C1.5%20491.8%2C0.3%20493.2%2C-0.9%20494.6%2C-2.1%20496.1%2C-3.2%20497.5%2C-4.4%20498.9%2C-5.6%20500.3%2C-6.7%20501.7%2C-7.9%20503.2%2C-9.0%20504.6%2C-10.1%20506.0%2C-11.3%22%20clip-path%3D%22url%28%23clip-1213712%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C279.0%2053.4%2C279.3%2054.8%2C279.6%2056.3%2C279.9%2057.7%2C280.2%2059.1%2C280.5%2060.5%2C280.8%2061.9%2C281.2%2063.3%2C281.5%2064.8%2C281.8%2066.2%2C282.1%2067.6%2C282.5%2069.0%2C282.8%2070.4%2C283.1%2071.9%2C283.5%2073.3%2C283.8%2074.7%2C284.1%2076.1%2C284.5%2077.5%2C284.8%2079.0%2C285.2%2080.4%2C285.5%2081.8%2C285.9%2083.2%2C286.3%2084.6%2C286.6%2086.1%2C287.0%2087.5%2C287.3%2088.9%2C287.7%2090.3%2C288.1%2091.7%2C288.5%2093.1%2C288.8%2094.6%2C289.2%2096.0%2C289.6%2097.4%2C290.0%2098.8%2C290.4%20100.2%2C290.8%20101.7%2C291.2%20103.1%2C291.6%20104.5%2C292.0%20105.9%2C292.4%20107.3%2C292.8%20108.8%2C293.2%20110.2%2C293.6%20111.6%2C294.1%20113.0%2C294.5%20114.4%2C294.9%20115.8%2C295.3%20117.3%2C295.8%20118.7%2C296.2%20120.1%2C296.6%20121.5%2C297.1%20122.9%2C297.5%20124.4%2C298.0%20125.8%2C298.4%20127.2%2C298.9%20128.6%2C299.3%20130.0%2C299.8%20131.4%2C300.2%20132.9%2C300.7%20134.3%2C301.1%20135.7%2C301.6%20137.1%2C302.0%20138.5%2C302.5%20140.0%2C303.0%20141.4%2C303.4%20142.8%2C303.9%20144.2%2C304.4%20145.6%2C304.8%20147.1%2C305.3%20148.5%2C305.8%20149.9%2C306.2%20151.3%2C306.7%20152.7%2C307.2%20154.2%2C307.7%20155.6%2C308.1%20157.0%2C308.6%20158.4%2C309.0%20159.8%2C309.5%20161.2%2C310.0%20162.7%2C310.4%20164.1%2C310.9%20165.5%2C311.3%20166.9%2C311.7%20168.3%2C312.2%20169.8%2C312.6%20171.2%2C313.0%20172.6%2C313.5%20174.0%2C313.9%20175.4%2C314.3%20176.8%2C314.7%20178.3%2C315.0%20179.7%2C315.4%20181.1%2C315.8%20182.5%2C316.1%20183.9%2C316.5%20185.4%2C316.8%20186.8%2C317.1%20188.2%2C317.4%20189.6%2C317.6%20191.0%2C317.9%20192.5%2C318.1%20193.9%2C318.3%20195.3%2C318.5%20196.7%2C318.6%20198.1%2C318.8%20199.6%2C318.9%20201.0%2C319.0%20202.4%2C319.0%20203.8%2C319.0%20205.2%2C319.0%20206.6%2C318.9%20208.1%2C318.8%20209.5%2C318.6%20210.9%2C318.4%20212.3%2C318.2%20213.7%2C317.9%20215.2%2C317.6%20216.6%2C317.2%20218.0%2C316.7%20219.4%2C316.2%20220.8%2C315.6%20222.2%2C315.0%20223.7%2C314.3%20225.1%2C313.5%20226.5%2C312.7%20227.9%2C311.7%20229.3%2C310.7%20230.8%2C309.7%20232.2%2C308.5%20233.6%2C307.2%20235.0%2C305.9%20236.4%2C304.5%20237.9%2C302.9%20239.3%2C301.3%20240.7%2C299.6%20242.1%2C297.8%20243.5%2C295.9%20244.9%2C293.8%20246.4%2C291.7%20247.8%2C289.5%20249.2%2C287.2%20250.6%2C284.8%20252.0%2C282.2%20253.5%2C279.6%20254.9%2C276.9%20256.3%2C274.0%20257.7%2C271.1%20259.1%2C268.1%20260.6%2C265.0%20262.0%2C261.8%20263.4%2C258.6%20264.8%2C255.2%20266.2%2C251.8%20267.6%2C248.3%20269.1%2C244.8%20270.5%2C241.2%20271.9%2C237.6%20273.3%2C233.9%20274.7%2C230.2%20276.2%2C226.5%20277.6%2C222.7%20279.0%2C219.0%20280.4%2C215.3%20281.8%2C211.5%20283.3%2C207.8%20284.7%2C204.1%20286.1%2C200.4%20287.5%2C196.8%20288.9%2C193.2%20290.4%2C189.7%20291.8%2C186.2%20293.2%2C182.8%20294.6%2C179.4%20296.0%2C176.2%20297.4%2C173.0%20298.9%2C169.9%20300.3%2C166.9%20301.7%2C164.0%20303.1%2C161.1%20304.5%2C158.4%20306.0%2C155.8%20307.4%2C153.2%20308.8%2C150.8%20310.2%2C148.5%20311.6%2C146.3%20313.1%2C144.2%20314.5%2C142.1%20315.9%2C140.2%20317.3%2C138.4%20318.7%2C136.7%20320.1%2C135.1%20321.6%2C133.5%20323.0%2C132.1%20324.4%2C130.8%20325.8%2C129.5%20327.2%2C128.3%20328.7%2C127.3%20330.1%2C126.3%20331.5%2C125.3%20332.9%2C124.5%20334.3%2C123.7%20335.8%2C123.0%20337.2%2C122.4%20338.6%2C121.8%20340.0%2C121.3%20341.4%2C120.8%20342.8%2C120.4%20344.3%2C120.1%20345.7%2C119.8%20347.1%2C119.6%20348.5%2C119.4%20349.9%2C119.2%20351.4%2C119.1%20352.8%2C119.0%20354.2%2C119.0%20355.6%2C119.0%20357.0%2C119.0%20358.4%2C119.1%20359.9%2C119.2%20361.3%2C119.4%20362.7%2C119.5%20364.1%2C119.7%20365.5%2C119.9%20367.0%2C120.1%20368.4%2C120.4%20369.8%2C120.6%20371.2%2C120.9%20372.6%2C121.2%20374.1%2C121.5%20375.5%2C121.9%20376.9%2C122.2%20378.3%2C122.6%20379.7%2C123.0%20381.1%2C123.3%20382.6%2C123.7%20384.0%2C124.1%20385.4%2C124.5%20386.8%2C125.0%20388.2%2C125.4%20389.7%2C125.8%20391.1%2C126.3%20392.5%2C126.7%20393.9%2C127.1%20395.3%2C127.6%20396.8%2C128.0%20398.2%2C128.5%20399.6%2C129.0%20401.0%2C129.4%20402.4%2C129.9%20403.9%2C130.3%20405.3%2C130.8%20406.7%2C131.3%20408.1%2C131.8%20409.5%2C132.2%20410.9%2C132.7%20412.4%2C133.2%20413.8%2C133.6%20415.2%2C134.1%20416.6%2C134.6%20418.0%2C135.0%20419.5%2C135.5%20420.9%2C136.0%20422.3%2C136.4%20423.7%2C136.9%20425.1%2C137.3%20426.6%2C137.8%20428.0%2C138.2%20429.4%2C138.7%20430.8%2C139.1%20432.2%2C139.6%20433.6%2C140.0%20435.1%2C140.5%20436.5%2C140.9%20437.9%2C141.4%20439.3%2C141.8%20440.7%2C142.2%20442.2%2C142.7%20443.6%2C143.1%20445.0%2C143.5%20446.4%2C143.9%20447.8%2C144.4%20449.2%2C144.8%20450.7%2C145.2%20452.1%2C145.6%20453.5%2C146.0%20454.9%2C146.4%20456.3%2C146.8%20457.8%2C147.2%20459.2%2C147.6%20460.6%2C148.0%20462.0%2C148.4%20463.4%2C148.8%20464.9%2C149.2%20466.3%2C149.5%20467.7%2C149.9%20469.1%2C150.3%20470.5%2C150.7%20471.9%2C151.0%20473.4%2C151.4%20474.8%2C151.7%20476.2%2C152.1%20477.6%2C152.5%20479.0%2C152.8%20480.5%2C153.2%20481.9%2C153.5%20483.3%2C153.9%20484.7%2C154.2%20486.1%2C154.5%20487.6%2C154.9%20489.0%2C155.2%20490.4%2C155.5%20491.8%2C155.9%20493.2%2C156.2%20494.6%2C156.5%20496.1%2C156.8%20497.5%2C157.2%20498.9%2C157.5%20500.3%2C157.8%20501.7%2C158.1%20503.2%2C158.4%20504.6%2C158.7%20506.0%2C159.0%22%20clip-path%3D%22url%28%23clip-1213712%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-138",
    case_id: "MATH 11.138",
    title: "P′ versus Q′: compare at x=2 and x=5",
    subsection: "11.4",
    context:
      "Brown is $P'$ and green is $Q'$ for two different quantities, on the same axes. Decide TRUE or FALSE.",
    statements: [
      "At $x=2$, brown is positive while green is also positive.",
      "At $x=5$, green is zero (a marked-style crossing of the green curve), while brown is negative.",
      "Brown has a single hump and two zeros near $x=0$ and $x=5$ after the $+1$ shift — from the figure, brown crosses once early and once late.",
      "On $(2.5,5)$, green is negative, so $Q$ is decreasing there.",
      "The larger of $P'(2)$ and $Q'(2)$ is brown's value if brown sits above green at $x=2$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=2$ on the shared axes, Both curves are above the axis at $x=2$.

So the statement is True.`,
      `**B.** → True

At $x=5$ on the shared axes, Green has a zero at $x=5$; brown is below the axis near the right.

So the statement is True.`,
      `**C.** → True

Count the clear axis crossings of the named curve in the window. Read brown's two axis crossings on the shared plane.

So the statement is True.`,
      `**D.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Sign of $Q'$ controls monotonicity of $Q$.

So the statement is True.`,
      `**E.** → True

Compare heights on the shared vertical scale. On a shared vertical scale, higher curve ⇒ larger derivative value.

So the statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 138,
    solution_overview:
      "Pointwise comparison of two derivative graphs at $x=2$ and $x=5$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3ETwo%20rate-of-change%20curves%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-8236561%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22506%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22506%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C212.8%2053.4%2C211.9%2054.8%2C211.0%2056.3%2C210.1%2057.7%2C209.3%2059.1%2C208.4%2060.5%2C207.6%2061.9%2C206.8%2063.4%2C205.9%2064.8%2C205.1%2066.2%2C204.3%2067.6%2C203.5%2069.0%2C202.7%2070.4%2C201.9%2071.9%2C201.1%2073.3%2C200.3%2074.7%2C199.5%2076.1%2C198.8%2077.5%2C198.0%2079.0%2C197.2%2080.4%2C196.5%2081.8%2C195.7%2083.2%2C195.0%2084.6%2C194.3%2086.0%2C193.6%2087.5%2C192.8%2088.9%2C192.1%2090.3%2C191.4%2091.7%2C190.7%2093.1%2C190.0%2094.6%2C189.3%2096.0%2C188.7%2097.4%2C188.0%2098.8%2C187.3%20100.2%2C186.7%20101.7%2C186.0%20103.1%2C185.4%20104.5%2C184.7%20105.9%2C184.1%20107.3%2C183.5%20108.8%2C182.9%20110.2%2C182.3%20111.6%2C181.6%20113.0%2C181.1%20114.4%2C180.5%20115.8%2C179.9%20117.3%2C179.3%20118.7%2C178.7%20120.1%2C178.2%20121.5%2C177.6%20122.9%2C177.0%20124.4%2C176.5%20125.8%2C176.0%20127.2%2C175.4%20128.6%2C174.9%20130.0%2C174.4%20131.4%2C173.9%20132.9%2C173.4%20134.3%2C172.9%20135.7%2C172.4%20137.1%2C171.9%20138.5%2C171.4%20140.0%2C170.9%20141.4%2C170.5%20142.8%2C170.0%20144.2%2C169.5%20145.6%2C169.1%20147.1%2C168.7%20148.5%2C168.2%20149.9%2C167.8%20151.3%2C167.4%20152.7%2C167.0%20154.2%2C166.6%20155.6%2C166.2%20157.0%2C165.8%20158.4%2C165.4%20159.8%2C165.0%20161.2%2C164.6%20162.7%2C164.2%20164.1%2C163.9%20165.5%2C163.5%20166.9%2C163.2%20168.3%2C162.8%20169.8%2C162.5%20171.2%2C162.2%20172.6%2C161.9%20174.0%2C161.5%20175.4%2C161.2%20176.8%2C160.9%20178.3%2C160.6%20179.7%2C160.3%20181.1%2C160.1%20182.5%2C159.8%20183.9%2C159.5%20185.4%2C159.3%20186.8%2C159.0%20188.2%2C158.8%20189.6%2C158.5%20191.0%2C158.3%20192.5%2C158.0%20193.9%2C157.8%20195.3%2C157.6%20196.7%2C157.4%20198.1%2C157.2%20199.6%2C157.0%20201.0%2C156.8%20202.4%2C156.6%20203.8%2C156.4%20205.2%2C156.3%20206.6%2C156.1%20208.1%2C156.0%20209.5%2C155.8%20210.9%2C155.7%20212.3%2C155.5%20213.7%2C155.4%20215.2%2C155.3%20216.6%2C155.1%20218.0%2C155.0%20219.4%2C154.9%20220.8%2C154.8%20222.2%2C154.7%20223.7%2C154.7%20225.1%2C154.6%20226.5%2C154.5%20227.9%2C154.4%20229.3%2C154.4%20230.8%2C154.3%20232.2%2C154.3%20233.6%2C154.2%20235.0%2C154.2%20236.4%2C154.2%20237.9%2C154.2%20239.3%2C154.2%20240.7%2C154.2%20242.1%2C154.2%20243.5%2C154.2%20244.9%2C154.2%20246.4%2C154.2%20247.8%2C154.2%20249.2%2C154.3%20250.6%2C154.3%20252.0%2C154.3%20253.5%2C154.4%20254.9%2C154.5%20256.3%2C154.5%20257.7%2C154.6%20259.1%2C154.7%20260.6%2C154.8%20262.0%2C154.9%20263.4%2C155.0%20264.8%2C155.1%20266.2%2C155.2%20267.6%2C155.3%20269.1%2C155.4%20270.5%2C155.6%20271.9%2C155.7%20273.3%2C155.8%20274.7%2C156.0%20276.2%2C156.2%20277.6%2C156.3%20279.0%2C156.5%20280.4%2C156.7%20281.8%2C156.9%20283.3%2C157.1%20284.7%2C157.3%20286.1%2C157.5%20287.5%2C157.7%20288.9%2C157.9%20290.4%2C158.1%20291.8%2C158.3%20293.2%2C158.6%20294.6%2C158.8%20296.0%2C159.1%20297.4%2C159.3%20298.9%2C159.6%20300.3%2C159.9%20301.7%2C160.2%20303.1%2C160.4%20304.5%2C160.7%20306.0%2C161.0%20307.4%2C161.3%20308.8%2C161.6%20310.2%2C162.0%20311.6%2C162.3%20313.1%2C162.6%20314.5%2C163.0%20315.9%2C163.3%20317.3%2C163.6%20318.7%2C164.0%20320.1%2C164.4%20321.6%2C164.7%20323.0%2C165.1%20324.4%2C165.5%20325.8%2C165.9%20327.2%2C166.3%20328.7%2C166.7%20330.1%2C167.1%20331.5%2C167.5%20332.9%2C167.9%20334.3%2C168.4%20335.8%2C168.8%20337.2%2C169.2%20338.6%2C169.7%20340.0%2C170.2%20341.4%2C170.6%20342.8%2C171.1%20344.3%2C171.6%20345.7%2C172.0%20347.1%2C172.5%20348.5%2C173.0%20349.9%2C173.5%20351.4%2C174.0%20352.8%2C174.6%20354.2%2C175.1%20355.6%2C175.6%20357.0%2C176.1%20358.4%2C176.7%20359.9%2C177.2%20361.3%2C177.8%20362.7%2C178.3%20364.1%2C178.9%20365.5%2C179.5%20367.0%2C180.1%20368.4%2C180.7%20369.8%2C181.2%20371.2%2C181.9%20372.6%2C182.5%20374.1%2C183.1%20375.5%2C183.7%20376.9%2C184.3%20378.3%2C185.0%20379.7%2C185.6%20381.1%2C186.2%20382.6%2C186.9%20384.0%2C187.6%20385.4%2C188.2%20386.8%2C188.9%20388.2%2C189.6%20389.7%2C190.3%20391.1%2C191.0%20392.5%2C191.7%20393.9%2C192.4%20395.3%2C193.1%20396.8%2C193.8%20398.2%2C194.5%20399.6%2C195.3%20401.0%2C196.0%20402.4%2C196.7%20403.9%2C197.5%20405.3%2C198.3%20406.7%2C199.0%20408.1%2C199.8%20409.5%2C200.6%20410.9%2C201.4%20412.4%2C202.1%20413.8%2C202.9%20415.2%2C203.8%20416.6%2C204.6%20418.0%2C205.4%20419.5%2C206.2%20420.9%2C207.0%20422.3%2C207.9%20423.7%2C208.7%20425.1%2C209.6%20426.6%2C210.4%20428.0%2C211.3%20429.4%2C212.2%20430.8%2C213.0%20432.2%2C213.9%20433.6%2C214.8%20435.1%2C215.7%20436.5%2C216.6%20437.9%2C217.5%20439.3%2C218.4%20440.7%2C219.4%20442.2%2C220.3%20443.6%2C221.2%20445.0%2C222.2%20446.4%2C223.1%20447.8%2C224.1%20449.2%2C225.1%20450.7%2C226.0%20452.1%2C227.0%20453.5%2C228.0%20454.9%2C229.0%20456.3%2C230.0%20457.8%2C231.0%20459.2%2C232.0%20460.6%2C233.0%20462.0%2C234.0%20463.4%2C235.1%20464.9%2C236.1%20466.3%2C237.1%20467.7%2C238.2%20469.1%2C239.2%20470.5%2C240.3%20471.9%2C241.4%20473.4%2C242.4%20474.8%2C243.5%20476.2%2C244.6%20477.6%2C245.7%20479.0%2C246.8%20480.5%2C247.9%20481.9%2C249.0%20483.3%2C250.2%20484.7%2C251.3%20486.1%2C252.4%20487.6%2C253.6%20489.0%2C254.7%20490.4%2C255.9%20491.8%2C257.0%20493.2%2C258.2%20494.6%2C259.4%20496.1%2C260.5%20497.5%2C261.7%20498.9%2C262.9%20500.3%2C264.1%20501.7%2C265.3%20503.2%2C266.6%20504.6%2C267.8%20506.0%2C269.0%22%20clip-path%3D%22url%28%23clip-8236561%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C428.4%2053.4%2C421.4%2054.8%2C414.5%2056.3%2C407.8%2057.7%2C401.1%2059.1%2C394.6%2060.5%2C388.2%2061.9%2C381.9%2063.4%2C375.6%2064.8%2C369.5%2066.2%2C363.5%2067.6%2C357.6%2069.0%2C351.9%2070.4%2C346.2%2071.9%2C340.6%2073.3%2C335.1%2074.7%2C329.7%2076.1%2C324.4%2077.5%2C319.2%2079.0%2C314.2%2080.4%2C309.2%2081.8%2C304.3%2083.2%2C299.5%2084.6%2C294.8%2086.0%2C290.2%2087.5%2C285.7%2088.9%2C281.3%2090.3%2C276.9%2091.7%2C272.7%2093.1%2C268.6%2094.6%2C264.5%2096.0%2C260.6%2097.4%2C256.7%2098.8%2C252.9%20100.2%2C249.2%20101.7%2C245.6%20103.1%2C242.1%20104.5%2C238.7%20105.9%2C235.3%20107.3%2C232.0%20108.8%2C228.9%20110.2%2C225.8%20111.6%2C222.7%20113.0%2C219.8%20114.4%2C216.9%20115.8%2C214.2%20117.3%2C211.5%20118.7%2C208.8%20120.1%2C206.3%20121.5%2C203.8%20122.9%2C201.4%20124.4%2C199.1%20125.8%2C196.9%20127.2%2C194.7%20128.6%2C192.6%20130.0%2C190.6%20131.4%2C188.6%20132.9%2C186.7%20134.3%2C184.9%20135.7%2C183.2%20137.1%2C181.5%20138.5%2C179.9%20140.0%2C178.4%20141.4%2C176.9%20142.8%2C175.5%20144.2%2C174.1%20145.6%2C172.8%20147.1%2C171.6%20148.5%2C170.5%20149.9%2C169.4%20151.3%2C168.3%20152.7%2C167.4%20154.2%2C166.5%20155.6%2C165.6%20157.0%2C164.8%20158.4%2C164.1%20159.8%2C163.4%20161.2%2C162.7%20162.7%2C162.2%20164.1%2C161.7%20165.5%2C161.2%20166.9%2C160.8%20168.3%2C160.4%20169.8%2C160.1%20171.2%2C159.8%20172.6%2C159.6%20174.0%2C159.5%20175.4%2C159.4%20176.8%2C159.3%20178.3%2C159.3%20179.7%2C159.3%20181.1%2C159.4%20182.5%2C159.5%20183.9%2C159.7%20185.4%2C159.9%20186.8%2C160.1%20188.2%2C160.4%20189.6%2C160.7%20191.0%2C161.1%20192.5%2C161.5%20193.9%2C162.0%20195.3%2C162.4%20196.7%2C163.0%20198.1%2C163.5%20199.6%2C164.1%20201.0%2C164.7%20202.4%2C165.4%20203.8%2C166.1%20205.2%2C166.8%20206.6%2C167.6%20208.1%2C168.4%20209.5%2C169.2%20210.9%2C170.1%20212.3%2C171.0%20213.7%2C171.9%20215.2%2C172.8%20216.6%2C173.8%20218.0%2C174.8%20219.4%2C175.8%20220.8%2C176.8%20222.2%2C177.9%20223.7%2C179.0%20225.1%2C180.1%20226.5%2C181.2%20227.9%2C182.4%20229.3%2C183.5%20230.8%2C184.7%20232.2%2C185.9%20233.6%2C187.2%20235.0%2C188.4%20236.4%2C189.7%20237.9%2C191.0%20239.3%2C192.3%20240.7%2C193.6%20242.1%2C194.9%20243.5%2C196.2%20244.9%2C197.6%20246.4%2C198.9%20247.8%2C200.3%20249.2%2C201.7%20250.6%2C203.0%20252.0%2C204.4%20253.5%2C205.8%20254.9%2C207.2%20256.3%2C208.7%20257.7%2C210.1%20259.1%2C211.5%20260.6%2C212.9%20262.0%2C214.4%20263.4%2C215.8%20264.8%2C217.2%20266.2%2C218.7%20267.6%2C220.1%20269.1%2C221.5%20270.5%2C223.0%20271.9%2C224.4%20273.3%2C225.8%20274.7%2C227.3%20276.2%2C228.7%20277.6%2C230.1%20279.0%2C231.5%20280.4%2C232.9%20281.8%2C234.3%20283.3%2C235.7%20284.7%2C237.1%20286.1%2C238.4%20287.5%2C239.8%20288.9%2C241.1%20290.4%2C242.5%20291.8%2C243.8%20293.2%2C245.1%20294.6%2C246.4%20296.0%2C247.7%20297.4%2C249.0%20298.9%2C250.2%20300.3%2C251.4%20301.7%2C252.7%20303.1%2C253.8%20304.5%2C255.0%20306.0%2C256.2%20307.4%2C257.3%20308.8%2C258.4%20310.2%2C259.5%20311.6%2C260.6%20313.1%2C261.6%20314.5%2C262.7%20315.9%2C263.7%20317.3%2C264.6%20318.7%2C265.6%20320.1%2C266.5%20321.6%2C267.4%20323.0%2C268.2%20324.4%2C269.1%20325.8%2C269.9%20327.2%2C270.6%20328.7%2C271.4%20330.1%2C272.1%20331.5%2C272.8%20332.9%2C273.4%20334.3%2C274.0%20335.8%2C274.6%20337.2%2C275.1%20338.6%2C275.6%20340.0%2C276.0%20341.4%2C276.5%20342.8%2C276.8%20344.3%2C277.2%20345.7%2C277.5%20347.1%2C277.7%20348.5%2C278.0%20349.9%2C278.1%20351.4%2C278.3%20352.8%2C278.3%20354.2%2C278.4%20355.6%2C278.4%20357.0%2C278.3%20358.4%2C278.2%20359.9%2C278.1%20361.3%2C277.9%20362.7%2C277.6%20364.1%2C277.3%20365.5%2C277.0%20367.0%2C276.6%20368.4%2C276.1%20369.8%2C275.6%20371.2%2C275.0%20372.6%2C274.4%20374.1%2C273.8%20375.5%2C273.0%20376.9%2C272.2%20378.3%2C271.4%20379.7%2C270.5%20381.1%2C269.5%20382.6%2C268.5%20384.0%2C267.4%20385.4%2C266.3%20386.8%2C265.1%20388.2%2C263.8%20389.7%2C262.5%20391.1%2C261.1%20392.5%2C259.6%20393.9%2C258.1%20395.3%2C256.5%20396.8%2C254.8%20398.2%2C253.1%20399.6%2C251.3%20401.0%2C249.4%20402.4%2C247.5%20403.9%2C245.5%20405.3%2C243.4%20406.7%2C241.3%20408.1%2C239.0%20409.5%2C236.7%20410.9%2C234.4%20412.4%2C231.9%20413.8%2C229.4%20415.2%2C226.8%20416.6%2C224.1%20418.0%2C221.3%20419.5%2C218.5%20420.9%2C215.6%20422.3%2C212.6%20423.7%2C209.5%20425.1%2C206.3%20426.6%2C203.1%20428.0%2C199.7%20429.4%2C196.3%20430.8%2C192.8%20432.2%2C189.2%20433.6%2C185.6%20435.1%2C181.8%20436.5%2C178.0%20437.9%2C174.0%20439.3%2C170.0%20440.7%2C165.9%20442.2%2C161.7%20443.6%2C157.4%20445.0%2C153.0%20446.4%2C148.5%20447.8%2C143.9%20449.2%2C139.2%20450.7%2C134.4%20452.1%2C129.6%20453.5%2C124.6%20454.9%2C119.5%20456.3%2C114.4%20457.8%2C109.1%20459.2%2C103.8%20460.6%2C98.3%20462.0%2C92.7%20463.4%2C87.1%20464.9%2C81.3%20466.3%2C75.4%20467.7%2C69.5%20469.1%2C63.4%20470.5%2C57.2%20471.9%2C50.9%20473.4%2C44.5%20474.8%2C38.0%20476.2%2C31.4%20477.6%2C24.6%20479.0%2C17.8%20480.5%2C10.8%20481.9%2C3.8%20483.3%2C-3.4%20484.7%2C-10.7%20486.1%2C-18.1%20487.6%2C-25.6%20489.0%2C-33.2%20490.4%2C-41.0%20491.8%2C-48.9%20493.2%2C-56.8%20494.6%2C-64.9%20496.1%2C-73.2%20497.5%2C-81.5%20498.9%2C-90.0%20500.3%2C-98.6%20501.7%2C-107.3%20503.2%2C-116.1%20504.6%2C-125.0%20506.0%2C-134.1%22%20clip-path%3D%22url%28%23clip-8236561%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EQ%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-139",
    case_id: "MATH 11.139",
    title: "Exam-style f′ with its linear f″ on one plane",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$ on shared axes. Decide TRUE or FALSE from the figure.",
    statements: [
      "At $x=4$, brown is positive while green is negative.",
      "Green crosses zero at $x=3$, which lines up with the peak of brown.",
      "On $(3,6)$, green is negative, so brown is falling — and $f$ is concave down.",
      "At $x=2$, brown is positive, so $f$ is increasing at $x=2$.",
      "Because green is a straight line, $f$ cannot have a local maximum in the window."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=4$ on the shared axes, Read both heights at $x=4$.

So the statement is True.`,
      `**B.** → True

Peak of $f'$ sits above the zero of $f''$.

So the statement is True.`,
      `**C.** → True

Green is $f''$ and brown is $f'$. Where green is negative, $f''<0$, so the brown graph of $f'$ is falling.

So the statement is True.`,
      `**D.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Positive $f'$ ⇒ increasing $f$.

So the statement is True.`,
      `**E.** → False

Brown still changes $+$ to $-$ at $x=5$, so $f$ has a local maximum there.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 139,
    solution_overview:
      "Shared-plane signs at concrete $x$; linear $f''$ does not forbid a max of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3648787%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22258.3%22%20x2%3D%22506%22%20y2%3D%22258.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22506%22%20y2%3D%22172.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2286.9%22%20x2%3D%22506%22%20y2%3D%2286.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22172.6%22%20x2%3D%22506%22%20y2%3D%22172.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22258.3%22%20x2%3D%2252%22%20y2%3D%22258.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22262.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22172.6%22%20x2%3D%2252%22%20y2%3D%22172.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22176.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2286.9%22%20x2%3D%2252%22%20y2%3D%2286.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2290.9%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C279.7%2053.4%2C277.3%2054.8%2C274.9%2056.3%2C272.5%2057.7%2C270.2%2059.1%2C267.8%2060.5%2C265.5%2061.9%2C263.2%2063.4%2C260.9%2064.8%2C258.6%2066.2%2C256.4%2067.6%2C254.1%2069.0%2C251.9%2070.4%2C249.6%2071.9%2C247.4%2073.3%2C245.2%2074.7%2C243.1%2076.1%2C240.9%2077.5%2C238.8%2079.0%2C236.6%2080.4%2C234.5%2081.8%2C232.4%2083.2%2C230.3%2084.6%2C228.3%2086.0%2C226.2%2087.5%2C224.2%2088.9%2C222.1%2090.3%2C220.1%2091.7%2C218.1%2093.1%2C216.1%2094.6%2C214.2%2096.0%2C212.2%2097.4%2C210.3%2098.8%2C208.4%20100.2%2C206.5%20101.7%2C204.6%20103.1%2C202.7%20104.5%2C200.8%20105.9%2C199.0%20107.3%2C197.2%20108.8%2C195.3%20110.2%2C193.5%20111.6%2C191.8%20113.0%2C190.0%20114.4%2C188.2%20115.8%2C186.5%20117.3%2C184.8%20118.7%2C183.1%20120.1%2C181.4%20121.5%2C179.7%20122.9%2C178.0%20124.4%2C176.4%20125.8%2C174.7%20127.2%2C173.1%20128.6%2C171.5%20130.0%2C169.9%20131.4%2C168.3%20132.9%2C166.8%20134.3%2C165.2%20135.7%2C163.7%20137.1%2C162.2%20138.5%2C160.7%20140.0%2C159.2%20141.4%2C157.7%20142.8%2C156.3%20144.2%2C154.8%20145.6%2C153.4%20147.1%2C152.0%20148.5%2C150.6%20149.9%2C149.2%20151.3%2C147.9%20152.7%2C146.5%20154.2%2C145.2%20155.6%2C143.9%20157.0%2C142.6%20158.4%2C141.3%20159.8%2C140.0%20161.2%2C138.8%20162.7%2C137.5%20164.1%2C136.3%20165.5%2C135.1%20166.9%2C133.9%20168.3%2C132.7%20169.8%2C131.5%20171.2%2C130.4%20172.6%2C129.2%20174.0%2C128.1%20175.4%2C127.0%20176.8%2C125.9%20178.3%2C124.8%20179.7%2C123.8%20181.1%2C122.7%20182.5%2C121.7%20183.9%2C120.7%20185.4%2C119.7%20186.8%2C118.7%20188.2%2C117.7%20189.6%2C116.8%20191.0%2C115.8%20192.5%2C114.9%20193.9%2C114.0%20195.3%2C113.1%20196.7%2C112.2%20198.1%2C111.3%20199.6%2C110.5%20201.0%2C109.6%20202.4%2C108.8%20203.8%2C108.0%20205.2%2C107.2%20206.6%2C106.5%20208.1%2C105.7%20209.5%2C104.9%20210.9%2C104.2%20212.3%2C103.5%20213.7%2C102.8%20215.2%2C102.1%20216.6%2C101.4%20218.0%2C100.8%20219.4%2C100.1%20220.8%2C99.5%20222.2%2C98.9%20223.7%2C98.3%20225.1%2C97.7%20226.5%2C97.2%20227.9%2C96.6%20229.3%2C96.1%20230.8%2C95.6%20232.2%2C95.1%20233.6%2C94.6%20235.0%2C94.1%20236.4%2C93.6%20237.9%2C93.2%20239.3%2C92.8%20240.7%2C92.3%20242.1%2C91.9%20243.5%2C91.6%20244.9%2C91.2%20246.4%2C90.8%20247.8%2C90.5%20249.2%2C90.2%20250.6%2C89.9%20252.0%2C89.6%20253.5%2C89.3%20254.9%2C89.0%20256.3%2C88.8%20257.7%2C88.6%20259.1%2C88.3%20260.6%2C88.1%20262.0%2C87.9%20263.4%2C87.8%20264.8%2C87.6%20266.2%2C87.5%20267.6%2C87.3%20269.1%2C87.2%20270.5%2C87.1%20271.9%2C87.0%20273.3%2C87.0%20274.7%2C86.9%20276.2%2C86.9%20277.6%2C86.9%20279.0%2C86.9%20280.4%2C86.9%20281.8%2C86.9%20283.3%2C86.9%20284.7%2C87.0%20286.1%2C87.0%20287.5%2C87.1%20288.9%2C87.2%20290.4%2C87.3%20291.8%2C87.5%20293.2%2C87.6%20294.6%2C87.8%20296.0%2C87.9%20297.4%2C88.1%20298.9%2C88.3%20300.3%2C88.6%20301.7%2C88.8%20303.1%2C89.0%20304.5%2C89.3%20306.0%2C89.6%20307.4%2C89.9%20308.8%2C90.2%20310.2%2C90.5%20311.6%2C90.8%20313.1%2C91.2%20314.5%2C91.6%20315.9%2C91.9%20317.3%2C92.3%20318.7%2C92.8%20320.1%2C93.2%20321.6%2C93.6%20323.0%2C94.1%20324.4%2C94.6%20325.8%2C95.1%20327.2%2C95.6%20328.7%2C96.1%20330.1%2C96.6%20331.5%2C97.2%20332.9%2C97.7%20334.3%2C98.3%20335.8%2C98.9%20337.2%2C99.5%20338.6%2C100.1%20340.0%2C100.8%20341.4%2C101.4%20342.8%2C102.1%20344.3%2C102.8%20345.7%2C103.5%20347.1%2C104.2%20348.5%2C104.9%20349.9%2C105.7%20351.4%2C106.5%20352.8%2C107.2%20354.2%2C108.0%20355.6%2C108.8%20357.0%2C109.6%20358.4%2C110.5%20359.9%2C111.3%20361.3%2C112.2%20362.7%2C113.1%20364.1%2C114.0%20365.5%2C114.9%20367.0%2C115.8%20368.4%2C116.8%20369.8%2C117.7%20371.2%2C118.7%20372.6%2C119.7%20374.1%2C120.7%20375.5%2C121.7%20376.9%2C122.7%20378.3%2C123.8%20379.7%2C124.8%20381.1%2C125.9%20382.6%2C127.0%20384.0%2C128.1%20385.4%2C129.2%20386.8%2C130.4%20388.2%2C131.5%20389.7%2C132.7%20391.1%2C133.9%20392.5%2C135.1%20393.9%2C136.3%20395.3%2C137.5%20396.8%2C138.8%20398.2%2C140.0%20399.6%2C141.3%20401.0%2C142.6%20402.4%2C143.9%20403.9%2C145.2%20405.3%2C146.5%20406.7%2C147.9%20408.1%2C149.2%20409.5%2C150.6%20410.9%2C152.0%20412.4%2C153.4%20413.8%2C154.8%20415.2%2C156.3%20416.6%2C157.7%20418.0%2C159.2%20419.5%2C160.7%20420.9%2C162.2%20422.3%2C163.7%20423.7%2C165.2%20425.1%2C166.8%20426.6%2C168.3%20428.0%2C169.9%20429.4%2C171.5%20430.8%2C173.1%20432.2%2C174.7%20433.6%2C176.4%20435.1%2C178.0%20436.5%2C179.7%20437.9%2C181.4%20439.3%2C183.1%20440.7%2C184.8%20442.2%2C186.5%20443.6%2C188.2%20445.0%2C190.0%20446.4%2C191.8%20447.8%2C193.5%20449.2%2C195.3%20450.7%2C197.2%20452.1%2C199.0%20453.5%2C200.8%20454.9%2C202.7%20456.3%2C204.6%20457.8%2C206.5%20459.2%2C208.4%20460.6%2C210.3%20462.0%2C212.2%20463.4%2C214.2%20464.9%2C216.1%20466.3%2C218.1%20467.7%2C220.1%20469.1%2C222.1%20470.5%2C224.2%20471.9%2C226.2%20473.4%2C228.3%20474.8%2C230.3%20476.2%2C232.4%20477.6%2C234.5%20479.0%2C236.6%20480.5%2C238.8%20481.9%2C240.9%20483.3%2C243.1%20484.7%2C245.2%20486.1%2C247.4%20487.6%2C249.6%20489.0%2C251.9%20490.4%2C254.1%20491.8%2C256.4%20493.2%2C258.6%20494.6%2C260.9%20496.1%2C263.2%20497.5%2C265.5%20498.9%2C267.8%20500.3%2C270.2%20501.7%2C272.5%20503.2%2C274.9%20504.6%2C277.3%20506.0%2C279.7%22%20clip-path%3D%22url%28%23clip-3648787%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C44.0%2053.4%2C44.8%2054.8%2C45.6%2056.3%2C46.4%2057.7%2C47.2%2059.1%2C48.0%2060.5%2C48.8%2061.9%2C49.6%2063.4%2C50.4%2064.8%2C51.2%2066.2%2C52.0%2067.6%2C52.8%2069.0%2C53.6%2070.4%2C54.4%2071.9%2C55.3%2073.3%2C56.1%2074.7%2C56.9%2076.1%2C57.7%2077.5%2C58.5%2079.0%2C59.3%2080.4%2C60.1%2081.8%2C60.9%2083.2%2C61.7%2084.6%2C62.5%2086.0%2C63.3%2087.5%2C64.1%2088.9%2C64.9%2090.3%2C65.7%2091.7%2C66.5%2093.1%2C67.3%2094.6%2C68.1%2096.0%2C68.9%2097.4%2C69.7%2098.8%2C70.5%20100.2%2C71.3%20101.7%2C72.1%20103.1%2C72.9%20104.5%2C73.7%20105.9%2C74.5%20107.3%2C75.3%20108.8%2C76.1%20110.2%2C76.9%20111.6%2C77.8%20113.0%2C78.6%20114.4%2C79.4%20115.8%2C80.2%20117.3%2C81.0%20118.7%2C81.8%20120.1%2C82.6%20121.5%2C83.4%20122.9%2C84.2%20124.4%2C85.0%20125.8%2C85.8%20127.2%2C86.6%20128.6%2C87.4%20130.0%2C88.2%20131.4%2C89.0%20132.9%2C89.8%20134.3%2C90.6%20135.7%2C91.4%20137.1%2C92.2%20138.5%2C93.0%20140.0%2C93.8%20141.4%2C94.6%20142.8%2C95.4%20144.2%2C96.2%20145.6%2C97.0%20147.1%2C97.8%20148.5%2C98.6%20149.9%2C99.4%20151.3%2C100.2%20152.7%2C101.1%20154.2%2C101.9%20155.6%2C102.7%20157.0%2C103.5%20158.4%2C104.3%20159.8%2C105.1%20161.2%2C105.9%20162.7%2C106.7%20164.1%2C107.5%20165.5%2C108.3%20166.9%2C109.1%20168.3%2C109.9%20169.8%2C110.7%20171.2%2C111.5%20172.6%2C112.3%20174.0%2C113.1%20175.4%2C113.9%20176.8%2C114.7%20178.3%2C115.5%20179.7%2C116.3%20181.1%2C117.1%20182.5%2C117.9%20183.9%2C118.7%20185.4%2C119.5%20186.8%2C120.3%20188.2%2C121.1%20189.6%2C121.9%20191.0%2C122.8%20192.5%2C123.6%20193.9%2C124.4%20195.3%2C125.2%20196.7%2C126.0%20198.1%2C126.8%20199.6%2C127.6%20201.0%2C128.4%20202.4%2C129.2%20203.8%2C130.0%20205.2%2C130.8%20206.6%2C131.6%20208.1%2C132.4%20209.5%2C133.2%20210.9%2C134.0%20212.3%2C134.8%20213.7%2C135.6%20215.2%2C136.4%20216.6%2C137.2%20218.0%2C138.0%20219.4%2C138.8%20220.8%2C139.6%20222.2%2C140.4%20223.7%2C141.2%20225.1%2C142.0%20226.5%2C142.8%20227.9%2C143.6%20229.3%2C144.4%20230.8%2C145.2%20232.2%2C146.1%20233.6%2C146.9%20235.0%2C147.7%20236.4%2C148.5%20237.9%2C149.3%20239.3%2C150.1%20240.7%2C150.9%20242.1%2C151.7%20243.5%2C152.5%20244.9%2C153.3%20246.4%2C154.1%20247.8%2C154.9%20249.2%2C155.7%20250.6%2C156.5%20252.0%2C157.3%20253.5%2C158.1%20254.9%2C158.9%20256.3%2C159.7%20257.7%2C160.5%20259.1%2C161.3%20260.6%2C162.1%20262.0%2C162.9%20263.4%2C163.7%20264.8%2C164.5%20266.2%2C165.3%20267.6%2C166.1%20269.1%2C166.9%20270.5%2C167.8%20271.9%2C168.6%20273.3%2C169.4%20274.7%2C170.2%20276.2%2C171.0%20277.6%2C171.8%20279.0%2C172.6%20280.4%2C173.4%20281.8%2C174.2%20283.3%2C175.0%20284.7%2C175.8%20286.1%2C176.6%20287.5%2C177.4%20288.9%2C178.2%20290.4%2C179.0%20291.8%2C179.8%20293.2%2C180.6%20294.6%2C181.4%20296.0%2C182.2%20297.4%2C183.0%20298.9%2C183.8%20300.3%2C184.6%20301.7%2C185.4%20303.1%2C186.2%20304.5%2C187.0%20306.0%2C187.8%20307.4%2C188.6%20308.8%2C189.4%20310.2%2C190.2%20311.6%2C191.1%20313.1%2C191.9%20314.5%2C192.7%20315.9%2C193.5%20317.3%2C194.3%20318.7%2C195.1%20320.1%2C195.9%20321.6%2C196.7%20323.0%2C197.5%20324.4%2C198.3%20325.8%2C199.1%20327.2%2C199.9%20328.7%2C200.7%20330.1%2C201.5%20331.5%2C202.3%20332.9%2C203.1%20334.3%2C203.9%20335.8%2C204.7%20337.2%2C205.5%20338.6%2C206.3%20340.0%2C207.1%20341.4%2C207.9%20342.8%2C208.7%20344.3%2C209.5%20345.7%2C210.3%20347.1%2C211.1%20348.5%2C211.9%20349.9%2C212.8%20351.4%2C213.6%20352.8%2C214.4%20354.2%2C215.2%20355.6%2C216.0%20357.0%2C216.8%20358.4%2C217.6%20359.9%2C218.4%20361.3%2C219.2%20362.7%2C220.0%20364.1%2C220.8%20365.5%2C221.6%20367.0%2C222.4%20368.4%2C223.2%20369.8%2C224.0%20371.2%2C224.8%20372.6%2C225.6%20374.1%2C226.4%20375.5%2C227.2%20376.9%2C228.0%20378.3%2C228.8%20379.7%2C229.6%20381.1%2C230.4%20382.6%2C231.2%20384.0%2C232.0%20385.4%2C232.8%20386.8%2C233.6%20388.2%2C234.4%20389.7%2C235.3%20391.1%2C236.1%20392.5%2C236.9%20393.9%2C237.7%20395.3%2C238.5%20396.8%2C239.3%20398.2%2C240.1%20399.6%2C240.9%20401.0%2C241.7%20402.4%2C242.5%20403.9%2C243.3%20405.3%2C244.1%20406.7%2C244.9%20408.1%2C245.7%20409.5%2C246.5%20410.9%2C247.3%20412.4%2C248.1%20413.8%2C248.9%20415.2%2C249.7%20416.6%2C250.5%20418.0%2C251.3%20419.5%2C252.1%20420.9%2C252.9%20422.3%2C253.7%20423.7%2C254.5%20425.1%2C255.3%20426.6%2C256.1%20428.0%2C256.9%20429.4%2C257.8%20430.8%2C258.6%20432.2%2C259.4%20433.6%2C260.2%20435.1%2C261.0%20436.5%2C261.8%20437.9%2C262.6%20439.3%2C263.4%20440.7%2C264.2%20442.2%2C265.0%20443.6%2C265.8%20445.0%2C266.6%20446.4%2C267.4%20447.8%2C268.2%20449.2%2C269.0%20450.7%2C269.8%20452.1%2C270.6%20453.5%2C271.4%20454.9%2C272.2%20456.3%2C273.0%20457.8%2C273.8%20459.2%2C274.6%20460.6%2C275.4%20462.0%2C276.2%20463.4%2C277.0%20464.9%2C277.8%20466.3%2C278.6%20467.7%2C279.4%20469.1%2C280.2%20470.5%2C281.1%20471.9%2C281.9%20473.4%2C282.7%20474.8%2C283.5%20476.2%2C284.3%20477.6%2C285.1%20479.0%2C285.9%20480.5%2C286.7%20481.9%2C287.5%20483.3%2C288.3%20484.7%2C289.1%20486.1%2C289.9%20487.6%2C290.7%20489.0%2C291.5%20490.4%2C292.3%20491.8%2C293.1%20493.2%2C293.9%20494.6%2C294.7%20496.1%2C295.5%20497.5%2C296.3%20498.9%2C297.1%20500.3%2C297.9%20501.7%2C298.7%20503.2%2C299.5%20504.6%2C300.3%20506.0%2C301.1%22%20clip-path%3D%22url%28%23clip-3648787%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-140",
    case_id: "MATH 11.140",
    title: "Bump f′ with f″: concavity flip at the peak",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$. Decide TRUE or FALSE.",
    statements: [
      "At $x=2$, brown is near its maximum and green is about $0$.",
      "On $(0,2)$, green is positive, so brown is rising.",
      "On $(2,5)$, green is negative, so brown is falling.",
      "Wherever brown is positive, $f$ is increasing.",
      "Green being zero at $x=2$ means $f$ has a local maximum at $x=2$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=2$ on the shared axes, a peak of the brown curve lines up with a zero of the green curve.

So the statement is True.`,
      `**B.** → True

Green is $f''$ and brown is $f'$. Where green is positive, $f''>0$, so the brown graph of $f'$ is rising.

So the statement is True.`,
      `**C.** → True

Green is $f''$ and brown is $f'$. Where green is negative, $f''<0$, so the brown graph of $f'$ is falling.

So the statement is True.`,
      `**D.** → True

Brown is $f'$. Wherever it sits above the axis, $f'>0$, so $f$ is increasing there.

So the statement is True.`,
      `**E.** → False

Green is $f''$. A zero of $f''$ marks an extremum of $f'$ (brown), not a critical point of $f$. Critical points of $f$ are zeros of brown.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 140,
    solution_overview:
      "Align peak of $f'$ with zero of $f''$; keep monotonicity of $f$ tied to the sign of $f'$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-466429%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%2244%22%20x2%3D%22142.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%2244%22%20x2%3D%22233.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%2244%22%20x2%3D%22324.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%2244%22%20x2%3D%22415.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22304.0%22%20x2%3D%22506%22%20y2%3D%22304.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2264.0%22%20x2%3D%22506%22%20y2%3D%2264.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%22344%22%20x2%3D%22142.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22142.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%22344%22%20x2%3D%22233.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22233.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%22344%22%20x2%3D%22324.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22324.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%22344%22%20x2%3D%22415.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22415.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22304.0%22%20x2%3D%2252%22%20y2%3D%22304.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22308.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2264.0%22%20x2%3D%2252%22%20y2%3D%2264.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2268.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C224.0%2053.4%2C223.5%2054.8%2C223.0%2056.3%2C222.5%2057.7%2C221.9%2059.1%2C221.4%2060.5%2C220.8%2061.9%2C220.3%2063.4%2C219.7%2064.8%2C219.1%2066.2%2C218.5%2067.6%2C217.9%2069.0%2C217.3%2070.4%2C216.7%2071.9%2C216.1%2073.3%2C215.4%2074.7%2C214.8%2076.1%2C214.1%2077.5%2C213.4%2079.0%2C212.7%2080.4%2C212.0%2081.8%2C211.3%2083.2%2C210.6%2084.6%2C209.8%2086.0%2C209.1%2087.5%2C208.3%2088.9%2C207.5%2090.3%2C206.7%2091.7%2C205.9%2093.1%2C205.1%2094.6%2C204.2%2096.0%2C203.3%2097.4%2C202.5%2098.8%2C201.6%20100.2%2C200.7%20101.7%2C199.7%20103.1%2C198.8%20104.5%2C197.8%20105.9%2C196.8%20107.3%2C195.8%20108.8%2C194.8%20110.2%2C193.8%20111.6%2C192.7%20113.0%2C191.6%20114.4%2C190.5%20115.8%2C189.4%20117.3%2C188.3%20118.7%2C187.1%20120.1%2C186.0%20121.5%2C184.8%20122.9%2C183.5%20124.4%2C182.3%20125.8%2C181.0%20127.2%2C179.7%20128.6%2C178.4%20130.0%2C177.1%20131.4%2C175.7%20132.9%2C174.3%20134.3%2C172.9%20135.7%2C171.5%20137.1%2C170.1%20138.5%2C168.6%20140.0%2C167.1%20141.4%2C165.6%20142.8%2C164.0%20144.2%2C162.4%20145.6%2C160.8%20147.1%2C159.2%20148.5%2C157.6%20149.9%2C155.9%20151.3%2C154.2%20152.7%2C152.5%20154.2%2C150.7%20155.6%2C149.0%20157.0%2C147.2%20158.4%2C145.4%20159.8%2C143.5%20161.2%2C141.7%20162.7%2C139.8%20164.1%2C137.9%20165.5%2C136.0%20166.9%2C134.1%20168.3%2C132.1%20169.8%2C130.2%20171.2%2C128.2%20172.6%2C126.2%20174.0%2C124.2%20175.4%2C122.2%20176.9%2C120.2%20178.3%2C118.2%20179.7%2C116.1%20181.1%2C114.1%20182.5%2C112.1%20183.9%2C110.0%20185.4%2C108.0%20186.8%2C106.0%20188.2%2C104.0%20189.6%2C102.0%20191.0%2C100.0%20192.5%2C98.1%20193.9%2C96.1%20195.3%2C94.2%20196.7%2C92.3%20198.1%2C90.5%20199.6%2C88.7%20201.0%2C86.9%20202.4%2C85.1%20203.8%2C83.4%20205.2%2C81.8%20206.6%2C80.2%20208.1%2C78.7%20209.5%2C77.2%20210.9%2C75.8%20212.3%2C74.4%20213.7%2C73.1%20215.2%2C71.9%20216.6%2C70.8%20218.0%2C69.7%20219.4%2C68.8%20220.8%2C67.9%20222.2%2C67.1%20223.7%2C66.4%20225.1%2C65.7%20226.5%2C65.2%20227.9%2C64.8%20229.3%2C64.4%20230.8%2C64.2%20232.2%2C64.0%20233.6%2C64.0%20235.0%2C64.0%20236.4%2C64.2%20237.9%2C64.4%20239.3%2C64.8%20240.7%2C65.2%20242.1%2C65.7%20243.5%2C66.4%20244.9%2C67.1%20246.4%2C67.9%20247.8%2C68.8%20249.2%2C69.7%20250.6%2C70.8%20252.0%2C71.9%20253.5%2C73.1%20254.9%2C74.4%20256.3%2C75.8%20257.7%2C77.2%20259.1%2C78.7%20260.6%2C80.2%20262.0%2C81.8%20263.4%2C83.4%20264.8%2C85.1%20266.2%2C86.9%20267.6%2C88.7%20269.1%2C90.5%20270.5%2C92.3%20271.9%2C94.2%20273.3%2C96.1%20274.7%2C98.1%20276.2%2C100.0%20277.6%2C102.0%20279.0%2C104.0%20280.4%2C106.0%20281.8%2C108.0%20283.3%2C110.0%20284.7%2C112.1%20286.1%2C114.1%20287.5%2C116.1%20288.9%2C118.2%20290.4%2C120.2%20291.8%2C122.2%20293.2%2C124.2%20294.6%2C126.2%20296.0%2C128.2%20297.4%2C130.2%20298.9%2C132.1%20300.3%2C134.1%20301.7%2C136.0%20303.1%2C137.9%20304.5%2C139.8%20306.0%2C141.7%20307.4%2C143.5%20308.8%2C145.4%20310.2%2C147.2%20311.6%2C149.0%20313.0%2C150.7%20314.5%2C152.5%20315.9%2C154.2%20317.3%2C155.9%20318.7%2C157.6%20320.1%2C159.2%20321.6%2C160.8%20323.0%2C162.4%20324.4%2C164.0%20325.8%2C165.6%20327.2%2C167.1%20328.7%2C168.6%20330.1%2C170.1%20331.5%2C171.5%20332.9%2C172.9%20334.3%2C174.3%20335.8%2C175.7%20337.2%2C177.1%20338.6%2C178.4%20340.0%2C179.7%20341.4%2C181.0%20342.8%2C182.3%20344.3%2C183.5%20345.7%2C184.8%20347.1%2C186.0%20348.5%2C187.1%20349.9%2C188.3%20351.4%2C189.4%20352.8%2C190.5%20354.2%2C191.6%20355.6%2C192.7%20357.0%2C193.8%20358.5%2C194.8%20359.9%2C195.8%20361.3%2C196.8%20362.7%2C197.8%20364.1%2C198.8%20365.5%2C199.7%20367.0%2C200.7%20368.4%2C201.6%20369.8%2C202.5%20371.2%2C203.3%20372.6%2C204.2%20374.1%2C205.1%20375.5%2C205.9%20376.9%2C206.7%20378.3%2C207.5%20379.7%2C208.3%20381.1%2C209.1%20382.6%2C209.8%20384.0%2C210.6%20385.4%2C211.3%20386.8%2C212.0%20388.2%2C212.7%20389.7%2C213.4%20391.1%2C214.1%20392.5%2C214.8%20393.9%2C215.4%20395.3%2C216.1%20396.8%2C216.7%20398.2%2C217.3%20399.6%2C217.9%20401.0%2C218.5%20402.4%2C219.1%20403.9%2C219.7%20405.3%2C220.3%20406.7%2C220.8%20408.1%2C221.4%20409.5%2C221.9%20410.9%2C222.5%20412.4%2C223.0%20413.8%2C223.5%20415.2%2C224.0%20416.6%2C224.5%20418.0%2C225.0%20419.5%2C225.5%20420.9%2C225.9%20422.3%2C226.4%20423.7%2C226.9%20425.1%2C227.3%20426.5%2C227.7%20428.0%2C228.2%20429.4%2C228.6%20430.8%2C229.0%20432.2%2C229.4%20433.6%2C229.8%20435.1%2C230.2%20436.5%2C230.6%20437.9%2C231.0%20439.3%2C231.4%20440.7%2C231.8%20442.2%2C232.1%20443.6%2C232.5%20445.0%2C232.8%20446.4%2C233.2%20447.8%2C233.5%20449.2%2C233.9%20450.7%2C234.2%20452.1%2C234.5%20453.5%2C234.9%20454.9%2C235.2%20456.3%2C235.5%20457.8%2C235.8%20459.2%2C236.1%20460.6%2C236.4%20462.0%2C236.7%20463.4%2C237.0%20464.9%2C237.3%20466.3%2C237.6%20467.7%2C237.8%20469.1%2C238.1%20470.5%2C238.4%20472.0%2C238.7%20473.4%2C238.9%20474.8%2C239.2%20476.2%2C239.4%20477.6%2C239.7%20479.0%2C239.9%20480.5%2C240.2%20481.9%2C240.4%20483.3%2C240.6%20484.7%2C240.9%20486.1%2C241.1%20487.6%2C241.3%20489.0%2C241.6%20490.4%2C241.8%20491.8%2C242.0%20493.2%2C242.2%20494.6%2C242.4%20496.1%2C242.6%20497.5%2C242.8%20498.9%2C243.0%20500.3%2C243.2%20501.7%2C243.4%20503.2%2C243.6%20504.6%2C243.8%20506.0%2C244.0%22%20clip-path%3D%22url%28%23clip-466429%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C192.0%2053.4%2C191.4%2054.8%2C190.9%2056.3%2C190.3%2057.7%2C189.7%2059.1%2C189.1%2060.5%2C188.5%2061.9%2C187.9%2063.4%2C187.2%2064.8%2C186.6%2066.2%2C185.9%2067.6%2C185.2%2069.0%2C184.5%2070.4%2C183.8%2071.9%2C183.1%2073.3%2C182.3%2074.7%2C181.6%2076.1%2C180.8%2077.5%2C180.0%2079.0%2C179.2%2080.4%2C178.4%2081.8%2C177.6%2083.2%2C176.7%2084.6%2C175.8%2086.0%2C175.0%2087.5%2C174.1%2088.9%2C173.1%2090.3%2C172.2%2091.7%2C171.2%2093.1%2C170.2%2094.6%2C169.2%2096.0%2C168.2%2097.4%2C167.2%2098.8%2C166.1%20100.2%2C165.1%20101.7%2C164.0%20103.1%2C162.8%20104.5%2C161.7%20105.9%2C160.6%20107.3%2C159.4%20108.8%2C158.2%20110.2%2C157.0%20111.6%2C155.7%20113.0%2C154.5%20114.4%2C153.2%20115.8%2C151.9%20117.3%2C150.6%20118.7%2C149.2%20120.1%2C147.9%20121.5%2C146.5%20122.9%2C145.1%20124.4%2C143.7%20125.8%2C142.2%20127.2%2C140.8%20128.6%2C139.3%20130.0%2C137.8%20131.4%2C136.3%20132.9%2C134.8%20134.3%2C133.3%20135.7%2C131.8%20137.1%2C130.2%20138.5%2C128.7%20140.0%2C127.1%20141.4%2C125.6%20142.8%2C124.0%20144.2%2C122.4%20145.6%2C120.9%20147.1%2C119.3%20148.5%2C117.8%20149.9%2C116.2%20151.3%2C114.7%20152.7%2C113.2%20154.2%2C111.7%20155.6%2C110.3%20157.0%2C108.8%20158.4%2C107.4%20159.8%2C106.1%20161.2%2C104.8%20162.7%2C103.5%20164.1%2C102.3%20165.5%2C101.1%20166.9%2C100.0%20168.3%2C99.0%20169.8%2C98.1%20171.2%2C97.2%20172.6%2C96.4%20174.0%2C95.8%20175.4%2C95.2%20176.9%2C94.7%20178.3%2C94.4%20179.7%2C94.2%20181.1%2C94.1%20182.5%2C94.2%20183.9%2C94.4%20185.4%2C94.8%20186.8%2C95.3%20188.2%2C96.0%20189.6%2C96.9%20191.0%2C98.0%20192.5%2C99.2%20193.9%2C100.7%20195.3%2C102.4%20196.7%2C104.3%20198.1%2C106.4%20199.6%2C108.7%20201.0%2C111.3%20202.4%2C114.0%20203.8%2C117.0%20205.2%2C120.3%20206.6%2C123.7%20208.1%2C127.4%20209.5%2C131.3%20210.9%2C135.4%20212.3%2C139.8%20213.7%2C144.3%20215.2%2C149.1%20216.6%2C154.0%20218.0%2C159.1%20219.4%2C164.4%20220.8%2C169.9%20222.2%2C175.5%20223.7%2C181.3%20225.1%2C187.2%20226.5%2C193.1%20227.9%2C199.2%20229.3%2C205.3%20230.8%2C211.5%20232.2%2C217.8%20233.6%2C224.0%20235.0%2C230.2%20236.4%2C236.5%20237.9%2C242.7%20239.3%2C248.8%20240.7%2C254.9%20242.1%2C260.8%20243.5%2C266.7%20244.9%2C272.5%20246.4%2C278.1%20247.8%2C283.6%20249.2%2C288.9%20250.6%2C294.0%20252.0%2C298.9%20253.5%2C303.7%20254.9%2C308.2%20256.3%2C312.6%20257.7%2C316.7%20259.1%2C320.6%20260.6%2C324.3%20262.0%2C327.7%20263.4%2C331.0%20264.8%2C334.0%20266.2%2C336.7%20267.6%2C339.3%20269.1%2C341.6%20270.5%2C343.7%20271.9%2C345.6%20273.3%2C347.3%20274.7%2C348.8%20276.2%2C350.0%20277.6%2C351.1%20279.0%2C352.0%20280.4%2C352.7%20281.8%2C353.2%20283.3%2C353.6%20284.7%2C353.8%20286.1%2C353.9%20287.5%2C353.8%20288.9%2C353.6%20290.4%2C353.3%20291.8%2C352.8%20293.2%2C352.2%20294.6%2C351.6%20296.0%2C350.8%20297.4%2C349.9%20298.9%2C349.0%20300.3%2C348.0%20301.7%2C346.9%20303.1%2C345.7%20304.5%2C344.5%20306.0%2C343.2%20307.4%2C341.9%20308.8%2C340.6%20310.2%2C339.2%20311.6%2C337.7%20313.0%2C336.3%20314.5%2C334.8%20315.9%2C333.3%20317.3%2C331.8%20318.7%2C330.2%20320.1%2C328.7%20321.6%2C327.1%20323.0%2C325.6%20324.4%2C324.0%20325.8%2C322.4%20327.2%2C320.9%20328.7%2C319.3%20330.1%2C317.8%20331.5%2C316.2%20332.9%2C314.7%20334.3%2C313.2%20335.8%2C311.7%20337.2%2C310.2%20338.6%2C308.7%20340.0%2C307.2%20341.4%2C305.8%20342.8%2C304.3%20344.3%2C302.9%20345.7%2C301.5%20347.1%2C300.1%20348.5%2C298.8%20349.9%2C297.4%20351.4%2C296.1%20352.8%2C294.8%20354.2%2C293.5%20355.6%2C292.3%20357.0%2C291.0%20358.5%2C289.8%20359.9%2C288.6%20361.3%2C287.4%20362.7%2C286.3%20364.1%2C285.2%20365.5%2C284.0%20367.0%2C282.9%20368.4%2C281.9%20369.8%2C280.8%20371.2%2C279.8%20372.6%2C278.8%20374.1%2C277.8%20375.5%2C276.8%20376.9%2C275.8%20378.3%2C274.9%20379.7%2C273.9%20381.1%2C273.0%20382.6%2C272.2%20384.0%2C271.3%20385.4%2C270.4%20386.8%2C269.6%20388.2%2C268.8%20389.7%2C268.0%20391.1%2C267.2%20392.5%2C266.4%20393.9%2C265.7%20395.3%2C264.9%20396.8%2C264.2%20398.2%2C263.5%20399.6%2C262.8%20401.0%2C262.1%20402.4%2C261.4%20403.9%2C260.8%20405.3%2C260.1%20406.7%2C259.5%20408.1%2C258.9%20409.5%2C258.3%20410.9%2C257.7%20412.4%2C257.1%20413.8%2C256.6%20415.2%2C256.0%20416.6%2C255.5%20418.0%2C254.9%20419.5%2C254.4%20420.9%2C253.9%20422.3%2C253.4%20423.7%2C252.9%20425.1%2C252.4%20426.5%2C251.9%20428.0%2C251.5%20429.4%2C251.0%20430.8%2C250.6%20432.2%2C250.1%20433.6%2C249.7%20435.1%2C249.3%20436.5%2C248.9%20437.9%2C248.5%20439.3%2C248.1%20440.7%2C247.7%20442.2%2C247.3%20443.6%2C247.0%20445.0%2C246.6%20446.4%2C246.2%20447.8%2C245.9%20449.2%2C245.5%20450.7%2C245.2%20452.1%2C244.9%20453.5%2C244.6%20454.9%2C244.2%20456.3%2C243.9%20457.8%2C243.6%20459.2%2C243.3%20460.6%2C243.0%20462.0%2C242.7%20463.4%2C242.5%20464.9%2C242.2%20466.3%2C241.9%20467.7%2C241.6%20469.1%2C241.4%20470.5%2C241.1%20472.0%2C240.9%20473.4%2C240.6%20474.8%2C240.4%20476.2%2C240.1%20477.6%2C239.9%20479.0%2C239.7%20480.5%2C239.4%20481.9%2C239.2%20483.3%2C239.0%20484.7%2C238.8%20486.1%2C238.6%20487.6%2C238.4%20489.0%2C238.2%20490.4%2C238.0%20491.8%2C237.8%20493.2%2C237.6%20494.6%2C237.4%20496.1%2C237.2%20497.5%2C237.0%20498.9%2C236.8%20500.3%2C236.7%20501.7%2C236.5%20503.2%2C236.3%20504.6%2C236.2%20506.0%2C236.0%22%20clip-path%3D%22url%28%23clip-466429%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-141",
    case_id: "MATH 11.141",
    title: "xe^(−x/2) family: where f′ peaks",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$ on one plane. Decide TRUE or FALSE.",
    statements: [
      "Green crosses from positive to negative near $x=2$, under the peak of brown.",
      "On $(0,2)$, green is positive, so brown is rising.",
      "On $(2,8)$, green is negative, so brown is falling toward the axis.",
      "At $x=6$, brown is still positive but small, so $f$ is still increasing slowly.",
      "Because brown never goes negative in the window, $f$ has no local maximum in $(0,8)$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Visible alignment of the green zero with the brown peak.

So the statement is True.`,
      `**B.** → True

Green is $f''$ and brown is $f'$. Where green is positive, $f''>0$, so the brown graph of $f'$ is rising.

So the statement is True.`,
      `**C.** → True

Green is $f''$ and brown is $f'$. Where green is negative, $f''<0$, so the brown graph of $f'$ is falling.

So the statement is True.`,
      `**D.** → True

At $x=6$ on the shared axes, Small positive brown ⇒ slow increase of $f$.

So the statement is True.`,
      `**E.** → True

No $+$ to $-$ zero of $f'$ in $(0,8)$ ⇒ no local max of $f$ there.

So the statement is True.`
    ],
    difficulty_level: "4/5",
    sort_order: 141,
    solution_overview:
      "Peak of $f'$ at the $f''$ zero; persistent positive $f'$ ⇒ no local max of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-291752%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22165.5%22%20y1%3D%2244%22%20x2%3D%22165.5%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22392.5%22%20y1%3D%2244%22%20x2%3D%22392.5%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22299.0%22%20x2%3D%22506%22%20y2%3D%22299.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22149.0%22%20x2%3D%22506%22%20y2%3D%22149.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2274.0%22%20x2%3D%22506%22%20y2%3D%2274.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22165.5%22%20y1%3D%22344%22%20x2%3D%22165.5%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22165.5%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22392.5%22%20y1%3D%22344%22%20x2%3D%22392.5%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22392.5%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22299.0%22%20x2%3D%2252%22%20y2%3D%22299.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22303.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-0.5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22149.0%22%20x2%3D%2252%22%20y2%3D%22149.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22153.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0.5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2274.0%22%20x2%3D%2252%22%20y2%3D%2274.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2278.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C224.0%2053.4%2C220.3%2054.8%2C216.7%2056.3%2C213.2%2057.7%2C209.7%2059.1%2C206.4%2060.5%2C203.1%2061.9%2C199.9%2063.4%2C196.9%2064.8%2C193.8%2066.2%2C190.9%2067.6%2C188.0%2069.0%2C185.3%2070.4%2C182.6%2071.9%2C179.9%2073.3%2C177.4%2074.7%2C174.9%2076.1%2C172.5%2077.5%2C170.1%2079.0%2C167.8%2080.4%2C165.6%2081.8%2C163.4%2083.2%2C161.3%2084.6%2C159.3%2086.0%2C157.3%2087.5%2C155.4%2088.9%2C153.6%2090.3%2C151.8%2091.7%2C150.0%2093.1%2C148.3%2094.6%2C146.7%2096.0%2C145.1%2097.4%2C143.6%2098.8%2C142.1%20100.2%2C140.6%20101.7%2C139.3%20103.1%2C137.9%20104.5%2C136.6%20105.9%2C135.4%20107.3%2C134.2%20108.8%2C133.0%20110.2%2C131.9%20111.6%2C130.8%20113.0%2C129.8%20114.4%2C128.8%20115.8%2C127.8%20117.3%2C126.9%20118.7%2C126.1%20120.1%2C125.2%20121.5%2C124.4%20122.9%2C123.6%20124.4%2C122.9%20125.8%2C122.2%20127.2%2C121.5%20128.6%2C120.9%20130.0%2C120.3%20131.4%2C119.7%20132.9%2C119.2%20134.3%2C118.7%20135.7%2C118.2%20137.1%2C117.7%20138.5%2C117.3%20140.0%2C116.9%20141.4%2C116.5%20142.8%2C116.2%20144.2%2C115.8%20145.6%2C115.5%20147.1%2C115.3%20148.5%2C115.0%20149.9%2C114.8%20151.3%2C114.6%20152.7%2C114.4%20154.2%2C114.2%20155.6%2C114.1%20157.0%2C114.0%20158.4%2C113.9%20159.8%2C113.8%20161.2%2C113.7%20162.7%2C113.7%20164.1%2C113.6%20165.5%2C113.6%20166.9%2C113.6%20168.3%2C113.7%20169.8%2C113.7%20171.2%2C113.8%20172.6%2C113.8%20174.0%2C113.9%20175.4%2C114.0%20176.9%2C114.2%20178.3%2C114.3%20179.7%2C114.4%20181.1%2C114.6%20182.5%2C114.8%20183.9%2C114.9%20185.4%2C115.1%20186.8%2C115.3%20188.2%2C115.6%20189.6%2C115.8%20191.0%2C116.0%20192.5%2C116.3%20193.9%2C116.6%20195.3%2C116.8%20196.7%2C117.1%20198.1%2C117.4%20199.6%2C117.7%20201.0%2C118.0%20202.4%2C118.3%20203.8%2C118.7%20205.2%2C119.0%20206.6%2C119.4%20208.1%2C119.7%20209.5%2C120.1%20210.9%2C120.4%20212.3%2C120.8%20213.7%2C121.2%20215.2%2C121.6%20216.6%2C122.0%20218.0%2C122.4%20219.4%2C122.8%20220.8%2C123.2%20222.2%2C123.6%20223.7%2C124.0%20225.1%2C124.4%20226.5%2C124.9%20227.9%2C125.3%20229.3%2C125.7%20230.8%2C126.2%20232.2%2C126.6%20233.6%2C127.1%20235.0%2C127.5%20236.4%2C128.0%20237.9%2C128.5%20239.3%2C128.9%20240.7%2C129.4%20242.1%2C129.9%20243.5%2C130.4%20244.9%2C130.8%20246.4%2C131.3%20247.8%2C131.8%20249.2%2C132.3%20250.6%2C132.8%20252.0%2C133.3%20253.5%2C133.8%20254.9%2C134.2%20256.3%2C134.7%20257.7%2C135.2%20259.1%2C135.7%20260.6%2C136.2%20262.0%2C136.7%20263.4%2C137.2%20264.8%2C137.7%20266.2%2C138.2%20267.6%2C138.7%20269.1%2C139.3%20270.5%2C139.8%20271.9%2C140.3%20273.3%2C140.8%20274.7%2C141.3%20276.2%2C141.8%20277.6%2C142.3%20279.0%2C142.8%20280.4%2C143.3%20281.8%2C143.8%20283.3%2C144.3%20284.7%2C144.8%20286.1%2C145.3%20287.5%2C145.8%20288.9%2C146.3%20290.4%2C146.9%20291.8%2C147.4%20293.2%2C147.9%20294.6%2C148.4%20296.0%2C148.9%20297.4%2C149.4%20298.9%2C149.9%20300.3%2C150.4%20301.7%2C150.9%20303.1%2C151.4%20304.5%2C151.9%20306.0%2C152.4%20307.4%2C152.9%20308.8%2C153.3%20310.2%2C153.8%20311.6%2C154.3%20313.0%2C154.8%20314.5%2C155.3%20315.9%2C155.8%20317.3%2C156.3%20318.7%2C156.8%20320.1%2C157.2%20321.6%2C157.7%20323.0%2C158.2%20324.4%2C158.7%20325.8%2C159.2%20327.2%2C159.6%20328.7%2C160.1%20330.1%2C160.6%20331.5%2C161.0%20332.9%2C161.5%20334.3%2C162.0%20335.8%2C162.4%20337.2%2C162.9%20338.6%2C163.4%20340.0%2C163.8%20341.4%2C164.3%20342.8%2C164.7%20344.3%2C165.2%20345.7%2C165.6%20347.1%2C166.1%20348.5%2C166.5%20349.9%2C167.0%20351.4%2C167.4%20352.8%2C167.8%20354.2%2C168.3%20355.6%2C168.7%20357.0%2C169.1%20358.5%2C169.6%20359.9%2C170.0%20361.3%2C170.4%20362.7%2C170.8%20364.1%2C171.3%20365.5%2C171.7%20367.0%2C172.1%20368.4%2C172.5%20369.8%2C172.9%20371.2%2C173.3%20372.6%2C173.7%20374.1%2C174.1%20375.5%2C174.5%20376.9%2C174.9%20378.3%2C175.3%20379.7%2C175.7%20381.1%2C176.1%20382.6%2C176.5%20384.0%2C176.9%20385.4%2C177.3%20386.8%2C177.7%20388.2%2C178.1%20389.7%2C178.4%20391.1%2C178.8%20392.5%2C179.2%20393.9%2C179.6%20395.3%2C179.9%20396.8%2C180.3%20398.2%2C180.7%20399.6%2C181.0%20401.0%2C181.4%20402.4%2C181.7%20403.9%2C182.1%20405.3%2C182.5%20406.7%2C182.8%20408.1%2C183.2%20409.5%2C183.5%20410.9%2C183.8%20412.4%2C184.2%20413.8%2C184.5%20415.2%2C184.9%20416.6%2C185.2%20418.0%2C185.5%20419.5%2C185.9%20420.9%2C186.2%20422.3%2C186.5%20423.7%2C186.8%20425.1%2C187.2%20426.5%2C187.5%20428.0%2C187.8%20429.4%2C188.1%20430.8%2C188.4%20432.2%2C188.7%20433.6%2C189.0%20435.1%2C189.4%20436.5%2C189.7%20437.9%2C190.0%20439.3%2C190.3%20440.7%2C190.6%20442.2%2C190.9%20443.6%2C191.1%20445.0%2C191.4%20446.4%2C191.7%20447.8%2C192.0%20449.2%2C192.3%20450.7%2C192.6%20452.1%2C192.9%20453.5%2C193.1%20454.9%2C193.4%20456.3%2C193.7%20457.8%2C194.0%20459.2%2C194.2%20460.6%2C194.5%20462.0%2C194.8%20463.4%2C195.0%20464.9%2C195.3%20466.3%2C195.5%20467.7%2C195.8%20469.1%2C196.1%20470.5%2C196.3%20472.0%2C196.6%20473.4%2C196.8%20474.8%2C197.1%20476.2%2C197.3%20477.6%2C197.5%20479.0%2C197.8%20480.5%2C198.0%20481.9%2C198.3%20483.3%2C198.5%20484.7%2C198.7%20486.1%2C199.0%20487.6%2C199.2%20489.0%2C199.4%20490.4%2C199.6%20491.8%2C199.9%20493.2%2C200.1%20494.6%2C200.3%20496.1%2C200.5%20497.5%2C200.8%20498.9%2C201.0%20500.3%2C201.2%20501.7%2C201.4%20503.2%2C201.6%20504.6%2C201.8%20506.0%2C202.0%22%20clip-path%3D%22url%28%23clip-291752%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C74.0%2053.4%2C77.7%2054.8%2C81.4%2056.3%2C84.9%2057.7%2C88.4%2059.1%2C91.9%2060.5%2C95.3%2061.9%2C98.6%2063.4%2C101.8%2064.8%2C105.0%2066.2%2C108.2%2067.6%2C111.2%2069.0%2C114.3%2070.4%2C117.2%2071.9%2C120.1%2073.3%2C123.0%2074.7%2C125.8%2076.1%2C128.5%2077.5%2C131.2%2079.0%2C133.8%2080.4%2C136.4%2081.8%2C138.9%2083.2%2C141.4%2084.6%2C143.8%2086.0%2C146.2%2087.5%2C148.6%2088.9%2C150.8%2090.3%2C153.1%2091.7%2C155.3%2093.1%2C157.5%2094.6%2C159.6%2096.0%2C161.6%2097.4%2C163.7%2098.8%2C165.7%20100.2%2C167.6%20101.7%2C169.5%20103.1%2C171.4%20104.5%2C173.2%20105.9%2C175.0%20107.3%2C176.8%20108.8%2C178.5%20110.2%2C180.2%20111.6%2C181.9%20113.0%2C183.5%20114.4%2C185.1%20115.8%2C186.6%20117.3%2C188.1%20118.7%2C189.6%20120.1%2C191.1%20121.5%2C192.5%20122.9%2C193.9%20124.4%2C195.3%20125.8%2C196.6%20127.2%2C197.9%20128.6%2C199.2%20130.0%2C200.4%20131.4%2C201.7%20132.9%2C202.9%20134.3%2C204.0%20135.7%2C205.2%20137.1%2C206.3%20138.5%2C207.4%20140.0%2C208.5%20141.4%2C209.5%20142.8%2C210.5%20144.2%2C211.5%20145.6%2C212.5%20147.1%2C213.5%20148.5%2C214.4%20149.9%2C215.3%20151.3%2C216.2%20152.7%2C217.1%20154.2%2C217.9%20155.6%2C218.7%20157.0%2C219.5%20158.4%2C220.3%20159.8%2C221.1%20161.2%2C221.9%20162.7%2C222.6%20164.1%2C223.3%20165.5%2C224.0%20166.9%2C224.7%20168.3%2C225.3%20169.8%2C226.0%20171.2%2C226.6%20172.6%2C227.2%20174.0%2C227.8%20175.4%2C228.4%20176.9%2C229.0%20178.3%2C229.5%20179.7%2C230.1%20181.1%2C230.6%20182.5%2C231.1%20183.9%2C231.6%20185.4%2C232.1%20186.8%2C232.6%20188.2%2C233.0%20189.6%2C233.5%20191.0%2C233.9%20192.5%2C234.3%20193.9%2C234.7%20195.3%2C235.1%20196.7%2C235.5%20198.1%2C235.9%20199.6%2C236.3%20201.0%2C236.6%20202.4%2C237.0%20203.8%2C237.3%20205.2%2C237.6%20206.6%2C237.9%20208.1%2C238.2%20209.5%2C238.5%20210.9%2C238.8%20212.3%2C239.1%20213.7%2C239.3%20215.2%2C239.6%20216.6%2C239.8%20218.0%2C240.1%20219.4%2C240.3%20220.8%2C240.5%20222.2%2C240.7%20223.7%2C240.9%20225.1%2C241.1%20226.5%2C241.3%20227.9%2C241.5%20229.3%2C241.7%20230.8%2C241.9%20232.2%2C242.0%20233.6%2C242.2%20235.0%2C242.3%20236.4%2C242.5%20237.9%2C242.6%20239.3%2C242.7%20240.7%2C242.8%20242.1%2C243.0%20243.5%2C243.1%20244.9%2C243.2%20246.4%2C243.3%20247.8%2C243.4%20249.2%2C243.5%20250.6%2C243.5%20252.0%2C243.6%20253.5%2C243.7%20254.9%2C243.8%20256.3%2C243.8%20257.7%2C243.9%20259.1%2C244.0%20260.6%2C244.0%20262.0%2C244.0%20263.4%2C244.1%20264.8%2C244.1%20266.2%2C244.2%20267.6%2C244.2%20269.1%2C244.2%20270.5%2C244.2%20271.9%2C244.3%20273.3%2C244.3%20274.7%2C244.3%20276.2%2C244.3%20277.6%2C244.3%20279.0%2C244.3%20280.4%2C244.3%20281.8%2C244.3%20283.3%2C244.3%20284.7%2C244.3%20286.1%2C244.3%20287.5%2C244.2%20288.9%2C244.2%20290.4%2C244.2%20291.8%2C244.2%20293.2%2C244.2%20294.6%2C244.1%20296.0%2C244.1%20297.4%2C244.1%20298.9%2C244.0%20300.3%2C244.0%20301.7%2C243.9%20303.1%2C243.9%20304.5%2C243.9%20306.0%2C243.8%20307.4%2C243.8%20308.8%2C243.7%20310.2%2C243.7%20311.6%2C243.6%20313.0%2C243.6%20314.5%2C243.5%20315.9%2C243.4%20317.3%2C243.4%20318.7%2C243.3%20320.1%2C243.2%20321.6%2C243.2%20323.0%2C243.1%20324.4%2C243.1%20325.8%2C243.0%20327.2%2C242.9%20328.7%2C242.8%20330.1%2C242.8%20331.5%2C242.7%20332.9%2C242.6%20334.3%2C242.5%20335.8%2C242.5%20337.2%2C242.4%20338.6%2C242.3%20340.0%2C242.2%20341.4%2C242.2%20342.8%2C242.1%20344.3%2C242.0%20345.7%2C241.9%20347.1%2C241.8%20348.5%2C241.7%20349.9%2C241.7%20351.4%2C241.6%20352.8%2C241.5%20354.2%2C241.4%20355.6%2C241.3%20357.0%2C241.2%20358.5%2C241.1%20359.9%2C241.0%20361.3%2C241.0%20362.7%2C240.9%20364.1%2C240.8%20365.5%2C240.7%20367.0%2C240.6%20368.4%2C240.5%20369.8%2C240.4%20371.2%2C240.3%20372.6%2C240.2%20374.1%2C240.1%20375.5%2C240.1%20376.9%2C240.0%20378.3%2C239.9%20379.7%2C239.8%20381.1%2C239.7%20382.6%2C239.6%20384.0%2C239.5%20385.4%2C239.4%20386.8%2C239.3%20388.2%2C239.2%20389.7%2C239.1%20391.1%2C239.0%20392.5%2C238.9%20393.9%2C238.8%20395.3%2C238.7%20396.8%2C238.7%20398.2%2C238.6%20399.6%2C238.5%20401.0%2C238.4%20402.4%2C238.3%20403.9%2C238.2%20405.3%2C238.1%20406.7%2C238.0%20408.1%2C237.9%20409.5%2C237.8%20410.9%2C237.7%20412.4%2C237.6%20413.8%2C237.5%20415.2%2C237.5%20416.6%2C237.4%20418.0%2C237.3%20419.5%2C237.2%20420.9%2C237.1%20422.3%2C237.0%20423.7%2C236.9%20425.1%2C236.8%20426.5%2C236.7%20428.0%2C236.6%20429.4%2C236.5%20430.8%2C236.5%20432.2%2C236.4%20433.6%2C236.3%20435.1%2C236.2%20436.5%2C236.1%20437.9%2C236.0%20439.3%2C235.9%20440.7%2C235.8%20442.2%2C235.8%20443.6%2C235.7%20445.0%2C235.6%20446.4%2C235.5%20447.8%2C235.4%20449.2%2C235.3%20450.7%2C235.2%20452.1%2C235.2%20453.5%2C235.1%20454.9%2C235.0%20456.3%2C234.9%20457.8%2C234.8%20459.2%2C234.7%20460.6%2C234.7%20462.0%2C234.6%20463.4%2C234.5%20464.9%2C234.4%20466.3%2C234.3%20467.7%2C234.3%20469.1%2C234.2%20470.5%2C234.1%20472.0%2C234.0%20473.4%2C233.9%20474.8%2C233.9%20476.2%2C233.8%20477.6%2C233.7%20479.0%2C233.6%20480.5%2C233.5%20481.9%2C233.5%20483.3%2C233.4%20484.7%2C233.3%20486.1%2C233.2%20487.6%2C233.2%20489.0%2C233.1%20490.4%2C233.0%20491.8%2C233.0%20493.2%2C232.9%20494.6%2C232.8%20496.1%2C232.7%20497.5%2C232.7%20498.9%2C232.6%20500.3%2C232.5%20501.7%2C232.5%20503.2%2C232.4%20504.6%2C232.3%20506.0%2C232.2%22%20clip-path%3D%22url%28%23clip-291752%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-142",
    case_id: "MATH 11.142",
    title: "Compare P′ and C′ heights at x=1 and x=5",
    subsection: "11.4",
    context:
      "Brown is marginal profit $P'$ and green is marginal cost $C'$ on shared axes. Decide TRUE or FALSE.",
    statements: [
      "At $x=1$, brown is above green.",
      "At $x=5$, brown is below the axis while green is still positive.",
      "Wherever brown is positive, a little more output raises profit.",
      "Green staying positive means total cost keeps rising throughout the window.",
      "The two curves meet at the profit-maximising output."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=1$ on the shared axes, Brown is near $2$ and green is near $1$.

So the statement is True.`,
      `**B.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Brown has crossed below zero; green remains above.

So the statement is True.`,
      `**C.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Positive $P'$ ⇒ expanding raises profit.

So the statement is True.`,
      `**D.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Positive $C'$ ⇒ increasing $C$.

So the statement is True.`,
      `**E.** → False

A profit peak is where brown crosses from $+$ to $-$ (zero of $P'$). That is not the same as the place where brown equals green.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 142,
    solution_overview:
      "Compare $P'$ and $C'$ at concrete $x$; profit peak is at $P'=0$, not at a $P'=C'$ crossing unless the stem says so.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2%20and%20C%E2%80%B2%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-7334103%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C119.0%2053.4%2C119.6%2054.8%2C120.1%2056.3%2C120.7%2057.7%2C121.2%2059.1%2C121.8%2060.5%2C122.4%2061.9%2C122.9%2063.4%2C123.5%2064.8%2C124.1%2066.2%2C124.6%2067.6%2C125.2%2069.0%2C125.7%2070.4%2C126.3%2071.9%2C126.9%2073.3%2C127.4%2074.7%2C128.0%2076.1%2C128.6%2077.5%2C129.1%2079.0%2C129.7%2080.4%2C130.2%2081.8%2C130.8%2083.2%2C131.4%2084.6%2C131.9%2086.0%2C132.5%2087.5%2C133.1%2088.9%2C133.6%2090.3%2C134.2%2091.7%2C134.8%2093.1%2C135.3%2094.6%2C135.9%2096.0%2C136.4%2097.4%2C137.0%2098.8%2C137.6%20100.2%2C138.1%20101.7%2C138.7%20103.1%2C139.2%20104.5%2C139.8%20105.9%2C140.4%20107.3%2C140.9%20108.8%2C141.5%20110.2%2C142.1%20111.6%2C142.6%20113.0%2C143.2%20114.4%2C143.8%20115.8%2C144.3%20117.3%2C144.9%20118.7%2C145.4%20120.1%2C146.0%20121.5%2C146.6%20122.9%2C147.1%20124.4%2C147.7%20125.8%2C148.2%20127.2%2C148.8%20128.6%2C149.4%20130.0%2C149.9%20131.4%2C150.5%20132.9%2C151.1%20134.3%2C151.6%20135.7%2C152.2%20137.1%2C152.8%20138.5%2C153.3%20140.0%2C153.9%20141.4%2C154.4%20142.8%2C155.0%20144.2%2C155.6%20145.6%2C156.1%20147.1%2C156.7%20148.5%2C157.2%20149.9%2C157.8%20151.3%2C158.4%20152.7%2C158.9%20154.2%2C159.5%20155.6%2C160.1%20157.0%2C160.6%20158.4%2C161.2%20159.8%2C161.8%20161.2%2C162.3%20162.7%2C162.9%20164.1%2C163.4%20165.5%2C164.0%20166.9%2C164.6%20168.3%2C165.1%20169.8%2C165.7%20171.2%2C166.2%20172.6%2C166.8%20174.0%2C167.4%20175.4%2C167.9%20176.8%2C168.5%20178.3%2C169.1%20179.7%2C169.6%20181.1%2C170.2%20182.5%2C170.8%20183.9%2C171.3%20185.4%2C171.9%20186.8%2C172.4%20188.2%2C173.0%20189.6%2C173.6%20191.0%2C174.1%20192.5%2C174.7%20193.9%2C175.2%20195.3%2C175.8%20196.7%2C176.4%20198.1%2C176.9%20199.6%2C177.5%20201.0%2C178.1%20202.4%2C178.6%20203.8%2C179.2%20205.2%2C179.8%20206.6%2C180.3%20208.1%2C180.9%20209.5%2C181.4%20210.9%2C182.0%20212.3%2C182.6%20213.7%2C183.1%20215.2%2C183.7%20216.6%2C184.2%20218.0%2C184.8%20219.4%2C185.4%20220.8%2C185.9%20222.2%2C186.5%20223.7%2C187.1%20225.1%2C187.6%20226.5%2C188.2%20227.9%2C188.8%20229.3%2C189.3%20230.8%2C189.9%20232.2%2C190.4%20233.6%2C191.0%20235.0%2C191.6%20236.4%2C192.1%20237.9%2C192.7%20239.3%2C193.3%20240.7%2C193.8%20242.1%2C194.4%20243.5%2C194.9%20244.9%2C195.5%20246.4%2C196.1%20247.8%2C196.6%20249.2%2C197.2%20250.6%2C197.8%20252.0%2C198.3%20253.5%2C198.9%20254.9%2C199.4%20256.3%2C200.0%20257.7%2C200.6%20259.1%2C201.1%20260.6%2C201.7%20262.0%2C202.2%20263.4%2C202.8%20264.8%2C203.4%20266.2%2C203.9%20267.6%2C204.5%20269.1%2C205.1%20270.5%2C205.6%20271.9%2C206.2%20273.3%2C206.8%20274.7%2C207.3%20276.2%2C207.9%20277.6%2C208.4%20279.0%2C209.0%20280.4%2C209.6%20281.8%2C210.1%20283.3%2C210.7%20284.7%2C211.2%20286.1%2C211.8%20287.5%2C212.4%20288.9%2C212.9%20290.4%2C213.5%20291.8%2C214.1%20293.2%2C214.6%20294.6%2C215.2%20296.0%2C215.8%20297.4%2C216.3%20298.9%2C216.9%20300.3%2C217.4%20301.7%2C218.0%20303.1%2C218.6%20304.5%2C219.1%20306.0%2C219.7%20307.4%2C220.2%20308.8%2C220.8%20310.2%2C221.4%20311.6%2C221.9%20313.1%2C222.5%20314.5%2C223.1%20315.9%2C223.6%20317.3%2C224.2%20318.7%2C224.7%20320.1%2C225.3%20321.6%2C225.9%20323.0%2C226.4%20324.4%2C227.0%20325.8%2C227.6%20327.2%2C228.1%20328.7%2C228.7%20330.1%2C229.2%20331.5%2C229.8%20332.9%2C230.4%20334.3%2C230.9%20335.8%2C231.5%20337.2%2C232.1%20338.6%2C232.6%20340.0%2C233.2%20341.4%2C233.7%20342.8%2C234.3%20344.3%2C234.9%20345.7%2C235.4%20347.1%2C236.0%20348.5%2C236.6%20349.9%2C237.1%20351.4%2C237.7%20352.8%2C238.2%20354.2%2C238.8%20355.6%2C239.4%20357.0%2C239.9%20358.4%2C240.5%20359.9%2C241.1%20361.3%2C241.6%20362.7%2C242.2%20364.1%2C242.8%20365.5%2C243.3%20367.0%2C243.9%20368.4%2C244.4%20369.8%2C245.0%20371.2%2C245.6%20372.6%2C246.1%20374.1%2C246.7%20375.5%2C247.2%20376.9%2C247.8%20378.3%2C248.4%20379.7%2C248.9%20381.1%2C249.5%20382.6%2C250.1%20384.0%2C250.6%20385.4%2C251.2%20386.8%2C251.7%20388.2%2C252.3%20389.7%2C252.9%20391.1%2C253.4%20392.5%2C254.0%20393.9%2C254.6%20395.3%2C255.1%20396.8%2C255.7%20398.2%2C256.2%20399.6%2C256.8%20401.0%2C257.4%20402.4%2C257.9%20403.9%2C258.5%20405.3%2C259.1%20406.7%2C259.6%20408.1%2C260.2%20409.5%2C260.7%20410.9%2C261.3%20412.4%2C261.9%20413.8%2C262.4%20415.2%2C263.0%20416.6%2C263.6%20418.0%2C264.1%20419.5%2C264.7%20420.9%2C265.2%20422.3%2C265.8%20423.7%2C266.4%20425.1%2C266.9%20426.6%2C267.5%20428.0%2C268.1%20429.4%2C268.6%20430.8%2C269.2%20432.2%2C269.8%20433.6%2C270.3%20435.1%2C270.9%20436.5%2C271.4%20437.9%2C272.0%20439.3%2C272.6%20440.7%2C273.1%20442.2%2C273.7%20443.6%2C274.2%20445.0%2C274.8%20446.4%2C275.4%20447.8%2C275.9%20449.2%2C276.5%20450.7%2C277.1%20452.1%2C277.6%20453.5%2C278.2%20454.9%2C278.8%20456.3%2C279.3%20457.8%2C279.9%20459.2%2C280.4%20460.6%2C281.0%20462.0%2C281.6%20463.4%2C282.1%20464.9%2C282.7%20466.3%2C283.2%20467.7%2C283.8%20469.1%2C284.4%20470.5%2C284.9%20471.9%2C285.5%20473.4%2C286.1%20474.8%2C286.6%20476.2%2C287.2%20477.6%2C287.8%20479.0%2C288.3%20480.5%2C288.9%20481.9%2C289.4%20483.3%2C290.0%20484.7%2C290.6%20486.1%2C291.1%20487.6%2C291.7%20489.0%2C292.2%20490.4%2C292.8%20491.8%2C293.4%20493.2%2C293.9%20494.6%2C294.5%20496.1%2C295.1%20497.5%2C295.6%20498.9%2C296.2%20500.3%2C296.8%20501.7%2C297.3%20503.2%2C297.9%20504.6%2C298.4%20506.0%2C299.0%22%20clip-path%3D%22url%28%23clip-7334103%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C219.0%2053.4%2C218.7%2054.8%2C218.4%2056.3%2C218.1%2057.7%2C217.9%2059.1%2C217.6%2060.5%2C217.3%2061.9%2C217.0%2063.4%2C216.7%2064.8%2C216.4%2066.2%2C216.1%2067.6%2C215.8%2069.0%2C215.5%2070.4%2C215.2%2071.9%2C214.9%2073.3%2C214.6%2074.7%2C214.3%2076.1%2C214.0%2077.5%2C213.7%2079.0%2C213.3%2080.4%2C213.0%2081.8%2C212.7%2083.2%2C212.4%2084.6%2C212.1%2086.0%2C211.7%2087.5%2C211.4%2088.9%2C211.1%2090.3%2C210.8%2091.7%2C210.4%2093.1%2C210.1%2094.6%2C209.8%2096.0%2C209.4%2097.4%2C209.1%2098.8%2C208.8%20100.2%2C208.4%20101.7%2C208.1%20103.1%2C207.7%20104.5%2C207.4%20105.9%2C207.0%20107.3%2C206.7%20108.8%2C206.3%20110.2%2C206.0%20111.6%2C205.6%20113.0%2C205.3%20114.4%2C204.9%20115.8%2C204.6%20117.3%2C204.2%20118.7%2C203.8%20120.1%2C203.5%20121.5%2C203.1%20122.9%2C202.7%20124.4%2C202.4%20125.8%2C202.0%20127.2%2C201.6%20128.6%2C201.2%20130.0%2C200.9%20131.4%2C200.5%20132.9%2C200.1%20134.3%2C199.7%20135.7%2C199.3%20137.1%2C199.0%20138.5%2C198.6%20140.0%2C198.2%20141.4%2C197.8%20142.8%2C197.4%20144.2%2C197.0%20145.6%2C196.6%20147.1%2C196.2%20148.5%2C195.8%20149.9%2C195.4%20151.3%2C195.0%20152.7%2C194.6%20154.2%2C194.2%20155.6%2C193.8%20157.0%2C193.4%20158.4%2C193.0%20159.8%2C192.5%20161.2%2C192.1%20162.7%2C191.7%20164.1%2C191.3%20165.5%2C190.9%20166.9%2C190.5%20168.3%2C190.0%20169.8%2C189.6%20171.2%2C189.2%20172.6%2C188.7%20174.0%2C188.3%20175.4%2C187.9%20176.8%2C187.4%20178.3%2C187.0%20179.7%2C186.6%20181.1%2C186.1%20182.5%2C185.7%20183.9%2C185.2%20185.4%2C184.8%20186.8%2C184.3%20188.2%2C183.9%20189.6%2C183.4%20191.0%2C183.0%20192.5%2C182.5%20193.9%2C182.1%20195.3%2C181.6%20196.7%2C181.2%20198.1%2C180.7%20199.6%2C180.2%20201.0%2C179.8%20202.4%2C179.3%20203.8%2C178.8%20205.2%2C178.4%20206.6%2C177.9%20208.1%2C177.4%20209.5%2C177.0%20210.9%2C176.5%20212.3%2C176.0%20213.7%2C175.5%20215.2%2C175.0%20216.6%2C174.5%20218.0%2C174.1%20219.4%2C173.6%20220.8%2C173.1%20222.2%2C172.6%20223.7%2C172.1%20225.1%2C171.6%20226.5%2C171.1%20227.9%2C170.6%20229.3%2C170.1%20230.8%2C169.6%20232.2%2C169.1%20233.6%2C168.6%20235.0%2C168.1%20236.4%2C167.6%20237.9%2C167.1%20239.3%2C166.6%20240.7%2C166.0%20242.1%2C165.5%20243.5%2C165.0%20244.9%2C164.5%20246.4%2C164.0%20247.8%2C163.4%20249.2%2C162.9%20250.6%2C162.4%20252.0%2C161.9%20253.5%2C161.3%20254.9%2C160.8%20256.3%2C160.3%20257.7%2C159.7%20259.1%2C159.2%20260.6%2C158.7%20262.0%2C158.1%20263.4%2C157.6%20264.8%2C157.0%20266.2%2C156.5%20267.6%2C155.9%20269.1%2C155.4%20270.5%2C154.8%20271.9%2C154.3%20273.3%2C153.7%20274.7%2C153.2%20276.2%2C152.6%20277.6%2C152.1%20279.0%2C151.5%20280.4%2C150.9%20281.8%2C150.4%20283.3%2C149.8%20284.7%2C149.2%20286.1%2C148.7%20287.5%2C148.1%20288.9%2C147.5%20290.4%2C146.9%20291.8%2C146.4%20293.2%2C145.8%20294.6%2C145.2%20296.0%2C144.6%20297.4%2C144.0%20298.9%2C143.5%20300.3%2C142.9%20301.7%2C142.3%20303.1%2C141.7%20304.5%2C141.1%20306.0%2C140.5%20307.4%2C139.9%20308.8%2C139.3%20310.2%2C138.7%20311.6%2C138.1%20313.1%2C137.5%20314.5%2C136.9%20315.9%2C136.3%20317.3%2C135.7%20318.7%2C135.1%20320.1%2C134.4%20321.6%2C133.8%20323.0%2C133.2%20324.4%2C132.6%20325.8%2C132.0%20327.2%2C131.4%20328.7%2C130.7%20330.1%2C130.1%20331.5%2C129.5%20332.9%2C128.9%20334.3%2C128.2%20335.8%2C127.6%20337.2%2C127.0%20338.6%2C126.3%20340.0%2C125.7%20341.4%2C125.0%20342.8%2C124.4%20344.3%2C123.8%20345.7%2C123.1%20347.1%2C122.5%20348.5%2C121.8%20349.9%2C121.2%20351.4%2C120.5%20352.8%2C119.9%20354.2%2C119.2%20355.6%2C118.6%20357.0%2C117.9%20358.4%2C117.2%20359.9%2C116.6%20361.3%2C115.9%20362.7%2C115.3%20364.1%2C114.6%20365.5%2C113.9%20367.0%2C113.2%20368.4%2C112.6%20369.8%2C111.9%20371.2%2C111.2%20372.6%2C110.5%20374.1%2C109.9%20375.5%2C109.2%20376.9%2C108.5%20378.3%2C107.8%20379.7%2C107.1%20381.1%2C106.4%20382.6%2C105.8%20384.0%2C105.1%20385.4%2C104.4%20386.8%2C103.7%20388.2%2C103.0%20389.7%2C102.3%20391.1%2C101.6%20392.5%2C100.9%20393.9%2C100.2%20395.3%2C99.5%20396.8%2C98.8%20398.2%2C98.0%20399.6%2C97.3%20401.0%2C96.6%20402.4%2C95.9%20403.9%2C95.2%20405.3%2C94.5%20406.7%2C93.8%20408.1%2C93.0%20409.5%2C92.3%20410.9%2C91.6%20412.4%2C90.9%20413.8%2C90.1%20415.2%2C89.4%20416.6%2C88.7%20418.0%2C87.9%20419.5%2C87.2%20420.9%2C86.5%20422.3%2C85.7%20423.7%2C85.0%20425.1%2C84.2%20426.6%2C83.5%20428.0%2C82.7%20429.4%2C82.0%20430.8%2C81.2%20432.2%2C80.5%20433.6%2C79.7%20435.1%2C79.0%20436.5%2C78.2%20437.9%2C77.5%20439.3%2C76.7%20440.7%2C76.0%20442.2%2C75.2%20443.6%2C74.4%20445.0%2C73.7%20446.4%2C72.9%20447.8%2C72.1%20449.2%2C71.3%20450.7%2C70.6%20452.1%2C69.8%20453.5%2C69.0%20454.9%2C68.2%20456.3%2C67.5%20457.8%2C66.7%20459.2%2C65.9%20460.6%2C65.1%20462.0%2C64.3%20463.4%2C63.5%20464.9%2C62.7%20466.3%2C61.9%20467.7%2C61.1%20469.1%2C60.3%20470.5%2C59.5%20471.9%2C58.7%20473.4%2C57.9%20474.8%2C57.1%20476.2%2C56.3%20477.6%2C55.5%20479.0%2C54.7%20480.5%2C53.9%20481.9%2C53.1%20483.3%2C52.3%20484.7%2C51.5%20486.1%2C50.6%20487.6%2C49.8%20489.0%2C49.0%20490.4%2C48.2%20491.8%2C47.3%20493.2%2C46.5%20494.6%2C45.7%20496.1%2C44.9%20497.5%2C44.0%20498.9%2C43.2%20500.3%2C42.4%20501.7%2C41.5%20503.2%2C40.7%20504.6%2C39.8%20506.0%2C39.0%22%20clip-path%3D%22url%28%23clip-7334103%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EC%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-143",
    case_id: "MATH 11.143",
    title: "Two first derivatives: opposite advice at x=0",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $g'$ on one plane. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, brown is negative while green is also negative.",
      "Brown has three zeros in the window; green has two.",
      "At $x=3$, brown is negative.",
      "On an interval where brown is above green and both are negative, $f$ and $g$ both decrease, and $f$ decreases less steeply when brown is less negative.",
      "Equal numbers of turning points for $f$ and $g$ follow automatically from the figure."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=0$ on the shared axes, Both curves sit below the axis at $x=0$.

So the statement is True.`,
      `**B.** → True

Count the clear axis crossings of the named curve in the window. Count the axis crossings of each colour.

So the statement is True.`,
      `**C.** → True

At $x=3$ on the shared axes, Between brown's middle and right zeros the curve is below the axis.

So the statement is True.`,
      `**D.** → True

Compare heights on the shared vertical scale. Negative derivatives ⇒ decreasing; less negative ⇒ gentler decrease.

So the statement is True.`,
      `**E.** → False

Critical points of $f$ are zeros of $f'$, not zeros of $f''$. A zero of $f''$ marks an extremum of $f'$, not automatically of $f$. Brown has three zeros and green two, so $f$ and $g$ need not have the same number of turning points.

So the statement is False.`
    ],
    difficulty_level: "4/5",
    sort_order: 143,
    solution_overview:
      "Compare signs and zero counts of two first-derivative graphs on shared axes.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20g%E2%80%B2%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4616603%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22506%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22506%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C194.0%2053.4%2C188.8%2054.8%2C183.7%2056.3%2C178.7%2057.7%2C173.7%2059.1%2C168.9%2060.5%2C164.2%2061.9%2C159.6%2063.4%2C155.1%2064.8%2C150.7%2066.2%2C146.4%2067.6%2C142.2%2069.0%2C138.1%2070.4%2C134.1%2071.9%2C130.2%2073.3%2C126.3%2074.7%2C122.6%2076.1%2C119.0%2077.5%2C115.4%2079.0%2C112.0%2080.4%2C108.6%2081.8%2C105.4%2083.2%2C102.2%2084.6%2C99.1%2086.0%2C96.1%2087.5%2C93.2%2088.9%2C90.4%2090.3%2C87.6%2091.7%2C85.0%2093.1%2C82.4%2094.6%2C79.9%2096.0%2C77.5%2097.4%2C75.2%2098.8%2C73.0%20100.2%2C70.8%20101.7%2C68.7%20103.1%2C66.7%20104.5%2C64.8%20105.9%2C63.0%20107.3%2C61.2%20108.8%2C59.5%20110.2%2C57.9%20111.6%2C56.4%20113.0%2C54.9%20114.4%2C53.5%20115.8%2C52.2%20117.3%2C51.0%20118.7%2C49.8%20120.1%2C48.7%20121.5%2C47.7%20122.9%2C46.7%20124.4%2C45.8%20125.8%2C45.0%20127.2%2C44.2%20128.6%2C43.5%20130.0%2C42.9%20131.4%2C42.4%20132.9%2C41.9%20134.3%2C41.4%20135.7%2C41.1%20137.1%2C40.7%20138.5%2C40.5%20140.0%2C40.3%20141.4%2C40.2%20142.8%2C40.1%20144.2%2C40.1%20145.6%2C40.1%20147.1%2C40.2%20148.5%2C40.4%20149.9%2C40.6%20151.3%2C40.9%20152.7%2C41.2%20154.2%2C41.6%20155.6%2C42.0%20157.0%2C42.5%20158.4%2C43.0%20159.8%2C43.6%20161.2%2C44.2%20162.7%2C44.9%20164.1%2C45.6%20165.5%2C46.3%20166.9%2C47.2%20168.3%2C48.0%20169.8%2C48.9%20171.2%2C49.9%20172.6%2C50.9%20174.0%2C51.9%20175.4%2C53.0%20176.8%2C54.1%20178.3%2C55.2%20179.7%2C56.4%20181.1%2C57.7%20182.5%2C58.9%20183.9%2C60.3%20185.4%2C61.6%20186.8%2C63.0%20188.2%2C64.4%20189.6%2C65.9%20191.0%2C67.3%20192.5%2C68.9%20193.9%2C70.4%20195.3%2C72.0%20196.7%2C73.6%20198.1%2C75.2%20199.6%2C76.9%20201.0%2C78.6%20202.4%2C80.3%20203.8%2C82.1%20205.2%2C83.9%20206.6%2C85.7%20208.1%2C87.5%20209.5%2C89.4%20210.9%2C91.2%20212.3%2C93.1%20213.7%2C95.1%20215.2%2C97.0%20216.6%2C99.0%20218.0%2C100.9%20219.4%2C102.9%20220.8%2C105.0%20222.2%2C107.0%20223.7%2C109.0%20225.1%2C111.1%20226.5%2C113.2%20227.9%2C115.3%20229.3%2C117.4%20230.8%2C119.5%20232.2%2C121.7%20233.6%2C123.8%20235.0%2C126.0%20236.4%2C128.1%20237.9%2C130.3%20239.3%2C132.5%20240.7%2C134.7%20242.1%2C136.9%20243.5%2C139.1%20244.9%2C141.3%20246.4%2C143.5%20247.8%2C145.7%20249.2%2C147.9%20250.6%2C150.2%20252.0%2C152.4%20253.5%2C154.6%20254.9%2C156.8%20256.3%2C159.1%20257.7%2C161.3%20259.1%2C163.5%20260.6%2C165.7%20262.0%2C168.0%20263.4%2C170.2%20264.8%2C172.4%20266.2%2C174.6%20267.6%2C176.8%20269.1%2C179.0%20270.5%2C181.1%20271.9%2C183.3%20273.3%2C185.5%20274.7%2C187.6%20276.2%2C189.8%20277.6%2C191.9%20279.0%2C194.0%20280.4%2C196.1%20281.8%2C198.2%20283.3%2C200.3%20284.7%2C202.3%20286.1%2C204.4%20287.5%2C206.4%20288.9%2C208.4%20290.4%2C210.4%20291.8%2C212.4%20293.2%2C214.3%20294.6%2C216.2%20296.0%2C218.1%20297.4%2C220.0%20298.9%2C221.9%20300.3%2C223.7%20301.7%2C225.6%20303.1%2C227.3%20304.5%2C229.1%20306.0%2C230.9%20307.4%2C232.6%20308.8%2C234.2%20310.2%2C235.9%20311.6%2C237.5%20313.1%2C239.1%20314.5%2C240.7%20315.9%2C242.2%20317.3%2C243.7%20318.7%2C245.2%20320.1%2C246.6%20321.6%2C248.0%20323.0%2C249.4%20324.4%2C250.7%20325.8%2C252.0%20327.2%2C253.2%20328.7%2C254.5%20330.1%2C255.6%20331.5%2C256.8%20332.9%2C257.9%20334.3%2C258.9%20335.8%2C259.9%20337.2%2C260.9%20338.6%2C261.8%20340.0%2C262.7%20341.4%2C263.5%20342.8%2C264.3%20344.3%2C265.1%20345.7%2C265.7%20347.1%2C266.4%20348.5%2C267.0%20349.9%2C267.5%20351.4%2C268.0%20352.8%2C268.5%20354.2%2C268.9%20355.6%2C269.2%20357.0%2C269.5%20358.4%2C269.7%20359.9%2C269.9%20361.3%2C270.1%20362.7%2C270.1%20364.1%2C270.1%20365.5%2C270.1%20367.0%2C270.0%20368.4%2C269.8%20369.8%2C269.6%20371.2%2C269.3%20372.6%2C269.0%20374.1%2C268.6%20375.5%2C268.1%20376.9%2C267.6%20378.3%2C267.0%20379.7%2C266.3%20381.1%2C265.6%20382.6%2C264.8%20384.0%2C263.9%20385.4%2C263.0%20386.8%2C262.0%20388.2%2C260.9%20389.7%2C259.8%20391.1%2C258.6%20392.5%2C257.3%20393.9%2C255.9%20395.3%2C254.5%20396.8%2C253.0%20398.2%2C251.4%20399.6%2C249.8%20401.0%2C248.0%20402.4%2C246.2%20403.9%2C244.4%20405.3%2C242.4%20406.7%2C240.3%20408.1%2C238.2%20409.5%2C236.0%20410.9%2C233.7%20412.4%2C231.4%20413.8%2C228.9%20415.2%2C226.4%20416.6%2C223.8%20418.0%2C221.1%20419.5%2C218.3%20420.9%2C215.4%20422.3%2C212.5%20423.7%2C209.4%20425.1%2C206.3%20426.6%2C203.0%20428.0%2C199.7%20429.4%2C196.3%20430.8%2C192.8%20432.2%2C189.2%20433.6%2C185.5%20435.1%2C181.8%20436.5%2C177.9%20437.9%2C173.9%20439.3%2C169.9%20440.7%2C165.7%20442.2%2C161.4%20443.6%2C157.1%20445.0%2C152.6%20446.4%2C148.0%20447.8%2C143.4%20449.2%2C138.6%20450.7%2C133.8%20452.1%2C128.8%20453.5%2C123.7%20454.9%2C118.6%20456.3%2C113.3%20457.8%2C107.9%20459.2%2C102.4%20460.6%2C96.8%20462.0%2C91.1%20463.4%2C85.3%20464.9%2C79.4%20466.3%2C73.3%20467.7%2C67.2%20469.1%2C60.9%20470.5%2C54.5%20471.9%2C48.1%20473.4%2C41.5%20474.8%2C34.7%20476.2%2C27.9%20477.6%2C21.0%20479.0%2C13.9%20480.5%2C6.7%20481.9%2C-0.6%20483.3%2C-8.0%20484.7%2C-15.5%20486.1%2C-23.2%20487.6%2C-31.0%20489.0%2C-38.9%20490.4%2C-46.9%20491.8%2C-55.0%20493.2%2C-63.3%20494.6%2C-71.7%20496.1%2C-80.2%20497.5%2C-88.9%20498.9%2C-97.7%20500.3%2C-106.6%20501.7%2C-115.6%20503.2%2C-124.8%20504.6%2C-134.1%20506.0%2C-143.5%22%20clip-path%3D%22url%28%23clip-4616603%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C276.5%2053.4%2C275.4%2054.8%2C274.3%2056.3%2C273.1%2057.7%2C272.0%2059.1%2C270.9%2060.5%2C269.8%2061.9%2C268.8%2063.4%2C267.7%2064.8%2C266.6%2066.2%2C265.5%2067.6%2C264.4%2069.0%2C263.4%2070.4%2C262.3%2071.9%2C261.3%2073.3%2C260.2%2074.7%2C259.2%2076.1%2C258.1%2077.5%2C257.1%2079.0%2C256.1%2080.4%2C255.1%2081.8%2C254.0%2083.2%2C253.0%2084.6%2C252.0%2086.0%2C251.0%2087.5%2C250.0%2088.9%2C249.0%2090.3%2C248.0%2091.7%2C247.1%2093.1%2C246.1%2094.6%2C245.1%2096.0%2C244.2%2097.4%2C243.2%2098.8%2C242.2%20100.2%2C241.3%20101.7%2C240.4%20103.1%2C239.4%20104.5%2C238.5%20105.9%2C237.6%20107.3%2C236.6%20108.8%2C235.7%20110.2%2C234.8%20111.6%2C233.9%20113.0%2C233.0%20114.4%2C232.1%20115.8%2C231.2%20117.3%2C230.3%20118.7%2C229.4%20120.1%2C228.6%20121.5%2C227.7%20122.9%2C226.8%20124.4%2C226.0%20125.8%2C225.1%20127.2%2C224.3%20128.6%2C223.4%20130.0%2C222.6%20131.4%2C221.8%20132.9%2C220.9%20134.3%2C220.1%20135.7%2C219.3%20137.1%2C218.5%20138.5%2C217.7%20140.0%2C216.9%20141.4%2C216.1%20142.8%2C215.3%20144.2%2C214.5%20145.6%2C213.7%20147.1%2C213.0%20148.5%2C212.2%20149.9%2C211.4%20151.3%2C210.7%20152.7%2C209.9%20154.2%2C209.2%20155.6%2C208.4%20157.0%2C207.7%20158.4%2C207.0%20159.8%2C206.2%20161.2%2C205.5%20162.7%2C204.8%20164.1%2C204.1%20165.5%2C203.4%20166.9%2C202.7%20168.3%2C202.0%20169.8%2C201.3%20171.2%2C200.6%20172.6%2C199.9%20174.0%2C199.3%20175.4%2C198.6%20176.8%2C197.9%20178.3%2C197.3%20179.7%2C196.6%20181.1%2C196.0%20182.5%2C195.3%20183.9%2C194.7%20185.4%2C194.0%20186.8%2C193.4%20188.2%2C192.8%20189.6%2C192.2%20191.0%2C191.6%20192.5%2C191.0%20193.9%2C190.4%20195.3%2C189.8%20196.7%2C189.2%20198.1%2C188.6%20199.6%2C188.0%20201.0%2C187.4%20202.4%2C186.9%20203.8%2C186.3%20205.2%2C185.8%20206.6%2C185.2%20208.1%2C184.7%20209.5%2C184.1%20210.9%2C183.6%20212.3%2C183.0%20213.7%2C182.5%20215.2%2C182.0%20216.6%2C181.5%20218.0%2C181.0%20219.4%2C180.5%20220.8%2C180.0%20222.2%2C179.5%20223.7%2C179.0%20225.1%2C178.5%20226.5%2C178.0%20227.9%2C177.5%20229.3%2C177.1%20230.8%2C176.6%20232.2%2C176.2%20233.6%2C175.7%20235.0%2C175.3%20236.4%2C174.8%20237.9%2C174.4%20239.3%2C173.9%20240.7%2C173.5%20242.1%2C173.1%20243.5%2C172.7%20244.9%2C172.3%20246.4%2C171.9%20247.8%2C171.5%20249.2%2C171.1%20250.6%2C170.7%20252.0%2C170.3%20253.5%2C169.9%20254.9%2C169.5%20256.3%2C169.2%20257.7%2C168.8%20259.1%2C168.5%20260.6%2C168.1%20262.0%2C167.8%20263.4%2C167.4%20264.8%2C167.1%20266.2%2C166.7%20267.6%2C166.4%20269.1%2C166.1%20270.5%2C165.8%20271.9%2C165.5%20273.3%2C165.2%20274.7%2C164.9%20276.2%2C164.6%20277.6%2C164.3%20279.0%2C164.0%20280.4%2C163.7%20281.8%2C163.4%20283.3%2C163.2%20284.7%2C162.9%20286.1%2C162.7%20287.5%2C162.4%20288.9%2C162.2%20290.4%2C161.9%20291.8%2C161.7%20293.2%2C161.5%20294.6%2C161.2%20296.0%2C161.0%20297.4%2C160.8%20298.9%2C160.6%20300.3%2C160.4%20301.7%2C160.2%20303.1%2C160.0%20304.5%2C159.8%20306.0%2C159.6%20307.4%2C159.4%20308.8%2C159.3%20310.2%2C159.1%20311.6%2C158.9%20313.1%2C158.8%20314.5%2C158.6%20315.9%2C158.5%20317.3%2C158.3%20318.7%2C158.2%20320.1%2C158.1%20321.6%2C157.9%20323.0%2C157.8%20324.4%2C157.7%20325.8%2C157.6%20327.2%2C157.5%20328.7%2C157.4%20330.1%2C157.3%20331.5%2C157.2%20332.9%2C157.1%20334.3%2C157.0%20335.8%2C157.0%20337.2%2C156.9%20338.6%2C156.8%20340.0%2C156.8%20341.4%2C156.7%20342.8%2C156.7%20344.3%2C156.6%20345.7%2C156.6%20347.1%2C156.6%20348.5%2C156.5%20349.9%2C156.5%20351.4%2C156.5%20352.8%2C156.5%20354.2%2C156.5%20355.6%2C156.5%20357.0%2C156.5%20358.4%2C156.5%20359.9%2C156.5%20361.3%2C156.6%20362.7%2C156.6%20364.1%2C156.6%20365.5%2C156.7%20367.0%2C156.7%20368.4%2C156.7%20369.8%2C156.8%20371.2%2C156.9%20372.6%2C156.9%20374.1%2C157.0%20375.5%2C157.1%20376.9%2C157.1%20378.3%2C157.2%20379.7%2C157.3%20381.1%2C157.4%20382.6%2C157.5%20384.0%2C157.6%20385.4%2C157.7%20386.8%2C157.9%20388.2%2C158.0%20389.7%2C158.1%20391.1%2C158.2%20392.5%2C158.4%20393.9%2C158.5%20395.3%2C158.7%20396.8%2C158.8%20398.2%2C159.0%20399.6%2C159.1%20401.0%2C159.3%20402.4%2C159.5%20403.9%2C159.7%20405.3%2C159.9%20406.7%2C160.0%20408.1%2C160.2%20409.5%2C160.4%20410.9%2C160.6%20412.4%2C160.9%20413.8%2C161.1%20415.2%2C161.3%20416.6%2C161.5%20418.0%2C161.8%20419.5%2C162.0%20420.9%2C162.2%20422.3%2C162.5%20423.7%2C162.7%20425.1%2C163.0%20426.6%2C163.3%20428.0%2C163.5%20429.4%2C163.8%20430.8%2C164.1%20432.2%2C164.4%20433.6%2C164.7%20435.1%2C165.0%20436.5%2C165.3%20437.9%2C165.6%20439.3%2C165.9%20440.7%2C166.2%20442.2%2C166.5%20443.6%2C166.9%20445.0%2C167.2%20446.4%2C167.5%20447.8%2C167.9%20449.2%2C168.2%20450.7%2C168.6%20452.1%2C168.9%20453.5%2C169.3%20454.9%2C169.7%20456.3%2C170.0%20457.8%2C170.4%20459.2%2C170.8%20460.6%2C171.2%20462.0%2C171.6%20463.4%2C172.0%20464.9%2C172.4%20466.3%2C172.8%20467.7%2C173.2%20469.1%2C173.7%20470.5%2C174.1%20471.9%2C174.5%20473.4%2C175.0%20474.8%2C175.4%20476.2%2C175.9%20477.6%2C176.3%20479.0%2C176.8%20480.5%2C177.2%20481.9%2C177.7%20483.3%2C178.2%20484.7%2C178.7%20486.1%2C179.1%20487.6%2C179.6%20489.0%2C180.1%20490.4%2C180.6%20491.8%2C181.1%20493.2%2C181.7%20494.6%2C182.2%20496.1%2C182.7%20497.5%2C183.2%20498.9%2C183.8%20500.3%2C184.3%20501.7%2C184.8%20503.2%2C185.4%20504.6%2C185.9%20506.0%2C186.5%22%20clip-path%3D%22url%28%23clip-4616603%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Eg%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-144",
    case_id: "MATH 11.144",
    title: "Four zeros of f′: count extrema of f from the figure",
    subsection: "11.4",
    context:
      "The figure shows $f'$ with four axis crossings in $[0,6]$, near $x=0.5$, $2$, $3.5$, and $5.5$. Decide TRUE or FALSE.",
    statements: [
      "The function $f$ has four local extrema in this window, one at each zero of $f'$ that changes sign.",
      "On the open interval between $x=2$ and $x=3.5$, the graph of $f'$ is below the axis, so $f$ is decreasing there.",
      "At $x=1$, the graph of $f'$ is above the axis, so $f'(1)>0$.",
      "A local minimum of the graph of $f'$ (a lowest point of the brown curve) is automatically a local minimum of $f$.",
      "Between consecutive zeros of $f'$, the sign of $f'$ does not change, so $f$ is strictly monotonic on each such open interval."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Count the clear axis crossings of the named curve in the window. Four transversal zeros of $f'$ give four local extrema of $f$.

So the statement is True.`,
      `**B.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Visually the curve dips below the axis between the middle two zeros.

So the statement is True.`,
      `**C.** → True

Between $0.5$ and $2$ the curve is above the axis; $x=1$ lies there.

So the statement is True.`,
      `**D.** → False

A lowest point of the graph of $f'$ is where $f''=0$ with a local min of $f'$ — that is an inflection of $f$, not a local minimum of $f$. Local minima of $f$ occur at zeros of $f'$ with a $-$ to $+$ sign change.

So the statement is False.`,
      `**E.** → True

A continuous $f'$ cannot change sign without a zero.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 144,
    solution_overview:
      "Four zeros ⇒ four extrema of $f$; do not confuse extrema of $f'$ with extrema of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1911370%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%2244%22%20x2%3D%22146.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%2244%22%20x2%3D%22240.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%2244%22%20x2%3D%22334.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%2244%22%20x2%3D%22428.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%2244%22%20x2%3D%22522.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22616%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22616%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22146.0%22%20y1%3D%22344%22%20x2%3D%22146.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22146.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22240.0%22%20y1%3D%22344%22%20x2%3D%22240.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22240.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22334.0%22%20y1%3D%22344%22%20x2%3D%22334.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22334.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22428.0%22%20y1%3D%22344%22%20x2%3D%22428.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22428.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22522.0%22%20y1%3D%22344%22%20x2%3D%22522.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22522.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C73.7%2053.8%2C80.3%2055.5%2C86.7%2057.3%2C92.9%2059.0%2C99.0%2060.8%2C104.9%2062.6%2C110.6%2064.3%2C116.1%2066.1%2C121.5%2067.9%2C126.7%2069.6%2C131.7%2071.4%2C136.6%2073.2%2C141.3%2074.9%2C145.9%2076.7%2C150.3%2078.4%2C154.5%2080.2%2C158.6%2082.0%2C162.6%2083.7%2C166.4%2085.5%2C170.1%2087.2%2C173.7%2089.0%2C177.1%2090.8%2C180.4%2092.5%2C183.5%2094.3%2C186.5%2096.1%2C189.4%2097.8%2C192.2%2099.6%2C194.9%20101.3%2C197.4%20103.1%2C199.8%20104.9%2C202.1%20106.6%2C204.3%20108.4%2C206.4%20110.2%2C208.4%20111.9%2C210.3%20113.7%2C212.1%20115.5%2C213.8%20117.2%2C215.3%20119.0%2C216.8%20120.7%2C218.2%20122.5%2C219.5%20124.3%2C220.7%20126.0%2C221.8%20127.8%2C222.9%20129.6%2C223.8%20131.3%2C224.7%20133.1%2C225.5%20134.8%2C226.2%20136.6%2C226.9%20138.4%2C227.5%20140.1%2C228.0%20141.9%2C228.4%20143.7%2C228.8%20145.4%2C229.1%20147.2%2C229.3%20148.9%2C229.5%20150.7%2C229.6%20152.5%2C229.7%20154.2%2C229.7%20156.0%2C229.6%20157.8%2C229.5%20159.5%2C229.4%20161.3%2C229.2%20163.0%2C228.9%20164.8%2C228.6%20166.6%2C228.3%20168.3%2C227.9%20170.1%2C227.5%20171.8%2C227.0%20173.6%2C226.5%20175.4%2C226.0%20177.1%2C225.4%20178.9%2C224.8%20180.7%2C224.2%20182.4%2C223.5%20184.2%2C222.8%20186.0%2C222.1%20187.7%2C221.4%20189.5%2C220.6%20191.2%2C219.8%20193.0%2C219.0%20194.8%2C218.2%20196.5%2C217.3%20198.3%2C216.5%20200.1%2C215.6%20201.8%2C214.7%20203.6%2C213.8%20205.3%2C212.8%20207.1%2C211.9%20208.9%2C211.0%20210.6%2C210.0%20212.4%2C209.1%20214.2%2C208.1%20215.9%2C207.1%20217.7%2C206.2%20219.4%2C205.2%20221.2%2C204.2%20223.0%2C203.2%20224.7%2C202.3%20226.5%2C201.3%20228.2%2C200.3%20230.0%2C199.4%20231.8%2C198.4%20233.5%2C197.4%20235.3%2C196.5%20237.1%2C195.6%20238.8%2C194.6%20240.6%2C193.7%20242.3%2C192.8%20244.1%2C191.9%20245.9%2C191.0%20247.6%2C190.1%20249.4%2C189.2%20251.2%2C188.4%20252.9%2C187.6%20254.7%2C186.7%20256.4%2C185.9%20258.2%2C185.1%20260.0%2C184.4%20261.7%2C183.6%20263.5%2C182.9%20265.3%2C182.2%20267.0%2C181.5%20268.8%2C180.8%20270.6%2C180.2%20272.3%2C179.5%20274.1%2C178.9%20275.8%2C178.4%20277.6%2C177.8%20279.4%2C177.3%20281.1%2C176.8%20282.9%2C176.3%20284.6%2C175.8%20286.4%2C175.4%20288.2%2C175.0%20289.9%2C174.6%20291.7%2C174.3%20293.5%2C173.9%20295.2%2C173.6%20297.0%2C173.4%20298.8%2C173.1%20300.5%2C172.9%20302.3%2C172.7%20304.0%2C172.6%20305.8%2C172.4%20307.6%2C172.3%20309.3%2C172.3%20311.1%2C172.2%20312.8%2C172.2%20314.6%2C172.3%20316.4%2C172.3%20318.1%2C172.4%20319.9%2C172.5%20321.7%2C172.6%20323.4%2C172.8%20325.2%2C173.0%20326.9%2C173.2%20328.7%2C173.5%20330.5%2C173.8%20332.2%2C174.1%20334.0%2C174.5%20335.8%2C174.8%20337.5%2C175.3%20339.3%2C175.7%20341.1%2C176.2%20342.8%2C176.7%20344.6%2C177.2%20346.3%2C177.8%20348.1%2C178.3%20349.9%2C178.9%20351.6%2C179.6%20353.4%2C180.3%20355.1%2C180.9%20356.9%2C181.7%20358.7%2C182.4%20360.4%2C183.2%20362.2%2C184.0%20364.0%2C184.8%20365.7%2C185.7%20367.5%2C186.5%20369.2%2C187.4%20371.0%2C188.4%20372.8%2C189.3%20374.5%2C190.3%20376.3%2C191.3%20378.1%2C192.3%20379.8%2C193.3%20381.6%2C194.4%20383.4%2C195.4%20385.1%2C196.5%20386.9%2C197.6%20388.6%2C198.7%20390.4%2C199.9%20392.2%2C201.0%20393.9%2C202.2%20395.7%2C203.4%20397.4%2C204.6%20399.2%2C205.8%20401.0%2C207.1%20402.7%2C208.3%20404.5%2C209.6%20406.3%2C210.8%20408.0%2C212.1%20409.8%2C213.4%20411.6%2C214.6%20413.3%2C215.9%20415.1%2C217.2%20416.8%2C218.5%20418.6%2C219.8%20420.4%2C221.1%20422.1%2C222.5%20423.9%2C223.8%20425.6%2C225.1%20427.4%2C226.4%20429.2%2C227.7%20430.9%2C229.0%20432.7%2C230.3%20434.5%2C231.6%20436.2%2C232.8%20438.0%2C234.1%20439.8%2C235.4%20441.5%2C236.6%20443.3%2C237.9%20445.0%2C239.1%20446.8%2C240.3%20448.6%2C241.5%20450.3%2C242.7%20452.1%2C243.8%20453.9%2C245.0%20455.6%2C246.1%20457.4%2C247.2%20459.1%2C248.2%20460.9%2C249.3%20462.7%2C250.3%20464.4%2C251.3%20466.2%2C252.2%20467.9%2C253.2%20469.7%2C254.0%20471.5%2C254.9%20473.2%2C255.7%20475.0%2C256.5%20476.8%2C257.2%20478.5%2C257.9%20480.3%2C258.6%20482.1%2C259.2%20483.8%2C259.8%20485.6%2C260.3%20487.3%2C260.8%20489.1%2C261.2%20490.9%2C261.6%20492.6%2C261.9%20494.4%2C262.1%20496.1%2C262.3%20497.9%2C262.4%20499.7%2C262.5%20501.4%2C262.5%20503.2%2C262.5%20505.0%2C262.4%20506.7%2C262.2%20508.5%2C261.9%20510.2%2C261.6%20512.0%2C261.1%20513.8%2C260.7%20515.5%2C260.1%20517.3%2C259.4%20519.1%2C258.7%20520.8%2C257.9%20522.6%2C257.0%20524.4%2C256.0%20526.1%2C254.9%20527.9%2C253.7%20529.6%2C252.4%20531.4%2C251.0%20533.2%2C249.6%20534.9%2C248.0%20536.7%2C246.3%20538.5%2C244.5%20540.2%2C242.6%20542.0%2C240.6%20543.7%2C238.5%20545.5%2C236.2%20547.3%2C233.8%20549.0%2C231.4%20550.8%2C228.8%20552.5%2C226.0%20554.3%2C223.2%20556.1%2C220.2%20557.8%2C217.0%20559.6%2C213.8%20561.4%2C210.4%20563.1%2C206.8%20564.9%2C203.2%20566.6%2C199.3%20568.4%2C195.4%20570.2%2C191.2%20571.9%2C187.0%20573.7%2C182.5%20575.5%2C177.9%20577.2%2C173.2%20579.0%2C168.2%20580.8%2C163.2%20582.5%2C157.9%20584.3%2C152.5%20586.0%2C146.9%20587.8%2C141.1%20589.6%2C135.1%20591.3%2C129.0%20593.1%2C122.7%20594.9%2C116.1%20596.6%2C109.4%20598.4%2C102.5%20600.1%2C95.4%20601.9%2C88.1%20603.7%2C80.6%20605.4%2C72.9%20607.2%2C65.0%20608.9%2C56.8%20610.7%2C48.5%20612.5%2C39.9%20614.2%2C31.1%20616.0%2C22.1%22%20clip-path%3D%22url%28%23clip-1911370%29%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-145",
    case_id: "MATH 11.145",
    title: "Two zeros of f′ with a decaying envelope",
    subsection: "11.4",
    context:
      "The figure shows $f'$ with zeros at $x=1$ and $x=3$. Decide TRUE or FALSE from the coordinates.",
    statements: [
      "On $(1,3)$ the graph of $f'$ is below the axis, so $f$ is decreasing on $(1,3)$.",
      "At $x=1$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=1$.",
      "At $x=3$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=3$.",
      "At $x=5$, $|f'(5)|$ is smaller than $|f'(2)|$ because of the decay of the envelope.",
      "Since the curve's amplitude is smaller near $x=3$ than near $x=2$, the point $x=3$ cannot be a local extremum of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Between the marked zeros the curve is below the axis.

So the statement is True.`,
      `**B.** → True

A local maximum of $f$ is a zero of $f'$ where the sign of $f'$ changes from $+$ to $-$. Left of $x=1$ the curve is above the axis; just right of $x=1$ it is below. That $+$ to $-$ change is a local maximum of $f$.

So the statement is True.`,
      `**C.** → True

A local minimum of $f$ needs $f'=0$ with a $-$ to $+$ sign change.

So the statement is True.`,
      `**D.** → True

Later amplitudes are visibly smaller than the dip near $x=2$.

So the statement is True.`,
      `**E.** → False

Compare heights on the shared vertical scale. A sign change of $f'$ still produces a local extremum of $f$, even when $|f'|$ is smaller.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 145,
    solution_overview:
      "Zeros at $1$ and $3$ with a $+$/$-$/$+$ sign pattern; decay changes sizes, not the extremum logic.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4555796%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%2244%22%20x2%3D%22132.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%2244%22%20x2%3D%22213.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%2244%22%20x2%3D%22293.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%2244%22%20x2%3D%22374.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%2244%22%20x2%3D%22454.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%2244%22%20x2%3D%22535.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22314.0%22%20x2%3D%22616%22%20y2%3D%22314.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22254.0%22%20x2%3D%22616%22%20y2%3D%22254.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22134.0%22%20x2%3D%22616%22%20y2%3D%22134.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2274.0%22%20x2%3D%22616%22%20y2%3D%2274.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22616%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%22344%22%20x2%3D%22132.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22132.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%22344%22%20x2%3D%22213.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22213.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%22344%22%20x2%3D%22293.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22293.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%22344%22%20x2%3D%22374.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22374.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%22344%22%20x2%3D%22454.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22454.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%22344%22%20x2%3D%22535.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22535.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E7%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22314.0%22%20x2%3D%2252%22%20y2%3D%22314.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22318.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22254.0%22%20x2%3D%2252%22%20y2%3D%22254.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22258.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22134.0%22%20x2%3D%2252%22%20y2%3D%22134.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22138.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2274.0%22%20x2%3D%2252%22%20y2%3D%2274.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2278.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C14.0%2053.8%2C20.0%2055.5%2C25.9%2057.3%2C31.6%2059.0%2C37.3%2060.8%2C42.9%2062.6%2C48.3%2064.3%2C53.7%2066.1%2C59.0%2067.9%2C64.1%2069.6%2C69.2%2071.4%2C74.2%2073.2%2C79.1%2074.9%2C83.8%2076.7%2C88.5%2078.4%2C93.1%2080.2%2C97.6%2082.0%2C102.1%2083.7%2C106.4%2085.5%2C110.6%2087.2%2C114.8%2089.0%2C118.8%2090.8%2C122.8%2092.5%2C126.7%2094.3%2C130.5%2096.1%2C134.2%2097.8%2C137.9%2099.6%2C141.4%20101.3%2C144.9%20103.1%2C148.3%20104.9%2C151.6%20106.6%2C154.8%20108.4%2C158.0%20110.2%2C161.1%20111.9%2C164.1%20113.7%2C167.0%20115.5%2C169.9%20117.2%2C172.7%20119.0%2C175.4%20120.7%2C178.0%20122.5%2C180.6%20124.3%2C183.1%20126.0%2C185.6%20127.8%2C187.9%20129.6%2C190.2%20131.3%2C192.4%20133.1%2C194.6%20134.8%2C196.7%20136.6%2C198.7%20138.4%2C200.7%20140.1%2C202.6%20141.9%2C204.5%20143.7%2C206.2%20145.4%2C208.0%20147.2%2C209.6%20148.9%2C211.2%20150.7%2C212.8%20152.5%2C214.2%20154.2%2C215.7%20156.0%2C217.0%20157.8%2C218.3%20159.5%2C219.6%20161.3%2C220.8%20163.0%2C221.9%20164.8%2C223.0%20166.6%2C224.1%20168.3%2C225.0%20170.1%2C226.0%20171.8%2C226.9%20173.6%2C227.7%20175.4%2C228.5%20177.1%2C229.2%20178.9%2C229.9%20180.7%2C230.5%20182.4%2C231.1%20184.2%2C231.6%20186.0%2C232.1%20187.7%2C232.6%20189.5%2C233.0%20191.2%2C233.3%20193.0%2C233.6%20194.8%2C233.9%20196.5%2C234.1%20198.3%2C234.3%20200.1%2C234.5%20201.8%2C234.5%20203.6%2C234.6%20205.3%2C234.6%20207.1%2C234.6%20208.9%2C234.5%20210.6%2C234.4%20212.4%2C234.3%20214.2%2C234.1%20215.9%2C233.9%20217.7%2C233.6%20219.4%2C233.4%20221.2%2C233.0%20223.0%2C232.7%20224.7%2C232.3%20226.5%2C231.8%20228.2%2C231.4%20230.0%2C230.9%20231.8%2C230.3%20233.5%2C229.8%20235.3%2C229.2%20237.1%2C228.6%20238.8%2C227.9%20240.6%2C227.2%20242.3%2C226.5%20244.1%2C225.7%20245.9%2C225.0%20247.6%2C224.2%20249.4%2C223.3%20251.2%2C222.4%20252.9%2C221.6%20254.7%2C220.6%20256.4%2C219.7%20258.2%2C218.7%20260.0%2C217.7%20261.7%2C216.7%20263.5%2C215.6%20265.3%2C214.6%20267.0%2C213.4%20268.8%2C212.3%20270.6%2C211.2%20272.3%2C210.0%20274.1%2C208.8%20275.8%2C207.6%20277.6%2C206.3%20279.4%2C205.1%20281.1%2C203.8%20282.9%2C202.5%20284.6%2C201.2%20286.4%2C199.8%20288.2%2C198.4%20289.9%2C197.0%20291.7%2C195.6%20293.5%2C194.2%20295.2%2C192.8%20297.0%2C191.3%20298.8%2C189.8%20300.5%2C188.3%20302.3%2C186.8%20304.0%2C185.2%20305.8%2C183.7%20307.6%2C182.1%20309.3%2C180.5%20311.1%2C178.9%20312.8%2C177.3%20314.6%2C175.7%20316.4%2C174.0%20318.1%2C172.4%20319.9%2C170.7%20321.7%2C169.0%20323.4%2C167.3%20325.2%2C165.6%20326.9%2C163.8%20328.7%2C162.1%20330.5%2C160.3%20332.2%2C158.5%20334.0%2C156.8%20335.8%2C155.0%20337.5%2C153.1%20339.3%2C151.3%20341.0%2C149.5%20342.8%2C147.6%20344.6%2C145.8%20346.3%2C143.9%20348.1%2C142.1%20349.9%2C140.2%20351.6%2C138.3%20353.4%2C136.4%20355.1%2C134.4%20356.9%2C132.5%20358.7%2C130.6%20360.4%2C128.7%20362.2%2C126.7%20364.0%2C124.7%20365.7%2C122.8%20367.5%2C120.8%20369.2%2C118.8%20371.0%2C116.8%20372.8%2C114.8%20374.5%2C112.8%20376.3%2C110.8%20378.1%2C108.8%20379.8%2C106.8%20381.6%2C104.8%20383.4%2C102.7%20385.1%2C100.7%20386.9%2C98.6%20388.6%2C96.6%20390.4%2C94.5%20392.2%2C92.5%20393.9%2C90.4%20395.7%2C88.3%20397.4%2C86.3%20399.2%2C84.2%20401.0%2C82.1%20402.7%2C80.0%20404.5%2C77.9%20406.3%2C75.8%20408.0%2C73.7%20409.8%2C71.6%20411.6%2C69.5%20413.3%2C67.4%20415.1%2C65.3%20416.8%2C63.2%20418.6%2C61.1%20420.4%2C59.0%20422.1%2C56.9%20423.9%2C54.8%20425.6%2C52.6%20427.4%2C50.5%20429.2%2C48.4%20430.9%2C46.3%20432.7%2C44.1%20434.5%2C42.0%20436.2%2C39.9%20438.0%2C37.8%20439.8%2C35.6%20441.5%2C33.5%20443.3%2C31.4%20445.0%2C29.3%20446.8%2C27.1%20448.6%2C25.0%20450.3%2C22.9%20452.1%2C20.8%20453.9%2C18.6%20455.6%2C16.5%20457.4%2C14.4%20459.1%2C12.3%20460.9%2C10.1%20462.7%2C8.0%20464.4%2C5.9%20466.2%2C3.8%20467.9%2C1.7%20469.7%2C-0.4%20471.5%2C-2.6%20473.2%2C-4.7%20475.0%2C-6.8%20476.8%2C-8.9%20478.5%2C-11.0%20480.3%2C-13.1%20482.1%2C-15.2%20483.8%2C-17.3%20485.6%2C-19.4%20487.3%2C-21.5%20489.1%2C-23.6%20490.9%2C-25.6%20492.6%2C-27.7%20494.4%2C-29.8%20496.1%2C-31.9%20497.9%2C-33.9%20499.7%2C-36.0%20501.4%2C-38.1%20503.2%2C-40.1%20505.0%2C-42.2%20506.7%2C-44.2%20508.5%2C-46.3%20510.2%2C-48.3%20512.0%2C-50.4%20513.8%2C-52.4%20515.5%2C-54.5%20517.3%2C-56.5%20519.1%2C-58.5%20520.8%2C-60.5%20522.6%2C-62.5%20524.4%2C-64.6%20526.1%2C-66.6%20527.9%2C-68.6%20529.6%2C-70.6%20531.4%2C-72.5%20533.2%2C-74.5%20534.9%2C-76.5%20536.7%2C-78.5%20538.5%2C-80.5%20540.2%2C-82.4%20542.0%2C-84.4%20543.7%2C-86.3%20545.5%2C-88.3%20547.3%2C-90.2%20549.0%2C-92.2%20550.8%2C-94.1%20552.5%2C-96.0%20554.3%2C-97.9%20556.1%2C-99.9%20557.8%2C-101.8%20559.6%2C-103.7%20561.4%2C-105.6%20563.1%2C-107.5%20564.9%2C-109.3%20566.6%2C-111.2%20568.4%2C-113.1%20570.2%2C-115.0%20571.9%2C-116.8%20573.7%2C-118.7%20575.5%2C-120.5%20577.2%2C-122.4%20579.0%2C-124.2%20580.8%2C-126.0%20582.5%2C-127.8%20584.3%2C-129.6%20586.0%2C-131.5%20587.8%2C-133.3%20589.6%2C-135.0%20591.3%2C-136.8%20593.1%2C-138.6%20594.9%2C-140.4%20596.6%2C-142.1%20598.4%2C-143.9%20600.1%2C-145.7%20601.9%2C-147.4%20603.7%2C-149.1%20605.4%2C-150.9%20607.2%2C-152.6%20608.9%2C-154.3%20610.7%2C-156.0%20612.5%2C-157.7%20614.2%2C-159.4%20616.0%2C-161.1%22%20clip-path%3D%22url%28%23clip-4555796%29%22%2F%3E%0A%3Ccircle%20cx%3D%22132.6%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22293.7%22%20cy%3D%22194.0%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-146",
    case_id: "MATH 11.146",
    title: "f′ and f″ together: signs and a concrete x=3",
    subsection: "11.4",
    context:
      "The figure plots $f'$ (brown) and $f''$ (green) on the **same** coordinate plane. Decide TRUE or FALSE using the shared axes.",
    statements: [
      "At $x=3$, the brown curve ($f'$) is below the axis, so $f'(3)<0$.",
      "At $x=3$, the green curve ($f''$) is below the axis, so $f''(3)<0$ and $f$ is concave down at $x=3$.",
      "Near $x=1.5$, $f'$ has a local maximum (highest point of the brown curve there), and there $f''$ is about $0$.",
      "Wherever the green curve is positive, the brown curve is rising.",
      "The brown curve has three zeros while the green curve has only two zeros in the window."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=3$ on the shared axes, At $x=3$ (between $2.5$ and $5$) brown is negative.

So the statement is True.`,
      `**B.** → True

Keep the roles straight: $f'$ is slope, and $f''$ says whether that slope is rising or falling. Green is negative through much of the middle, including $x=3$.

So the statement is True.`,
      `**C.** → True

Keep the roles straight: $f'$ is slope, and $f''$ says whether that slope is rising or falling. Extrema of $f'$ occur where $f''=0$; the local max of brown aligns with a green zero.

So the statement is True.`,
      `**D.** → True

The sign of the derivative on the figure is what decides increase versus decrease. $f''>0$ means $f'$ is increasing.

So the statement is True.`,
      `**E.** → True

Count the clear axis crossings of the named curve in the window. Count axis crossings: brown three times, green twice.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 146,
    solution_overview:
      "Shared-plane reading of $f'$ and $f''$: signs at $x=3$, alignment of extrema with zeros, zero counts.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9481357%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22269.0%22%20x2%3D%22506%22%20y2%3D%22269.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22119.0%22%20x2%3D%22506%22%20y2%3D%22119.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-12%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22269.0%22%20x2%3D%2252%22%20y2%3D%22269.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22273.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22119.0%22%20x2%3D%2252%22%20y2%3D%22119.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22123.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E12%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C350.2%2053.4%2C345.6%2054.8%2C341.0%2056.3%2C336.5%2057.7%2C332.1%2059.1%2C327.7%2060.5%2C323.5%2061.9%2C319.2%2063.4%2C315.1%2064.8%2C311.0%2066.2%2C307.0%2067.6%2C303.1%2069.0%2C299.2%2070.4%2C295.4%2071.9%2C291.7%2073.3%2C288.1%2074.7%2C284.5%2076.1%2C281.0%2077.5%2C277.5%2079.0%2C274.1%2080.4%2C270.8%2081.8%2C267.5%2083.2%2C264.3%2084.6%2C261.2%2086.0%2C258.1%2087.5%2C255.1%2088.9%2C252.2%2090.3%2C249.3%2091.7%2C246.5%2093.1%2C243.7%2094.6%2C241.0%2096.0%2C238.4%2097.4%2C235.8%2098.8%2C233.3%20100.2%2C230.8%20101.7%2C228.4%20103.1%2C226.1%20104.5%2C223.8%20105.9%2C221.5%20107.3%2C219.4%20108.8%2C217.2%20110.2%2C215.2%20111.6%2C213.2%20113.0%2C211.2%20114.4%2C209.3%20115.8%2C207.4%20117.3%2C205.6%20118.7%2C203.9%20120.1%2C202.2%20121.5%2C200.6%20122.9%2C199.0%20124.4%2C197.4%20125.8%2C195.9%20127.2%2C194.5%20128.6%2C193.1%20130.0%2C191.7%20131.4%2C190.4%20132.9%2C189.2%20134.3%2C188.0%20135.7%2C186.8%20137.1%2C185.7%20138.5%2C184.6%20140.0%2C183.6%20141.4%2C182.6%20142.8%2C181.7%20144.2%2C180.8%20145.6%2C179.9%20147.1%2C179.1%20148.5%2C178.3%20149.9%2C177.6%20151.3%2C176.9%20152.7%2C176.2%20154.2%2C175.6%20155.6%2C175.1%20157.0%2C174.5%20158.4%2C174.0%20159.8%2C173.6%20161.2%2C173.2%20162.7%2C172.8%20164.1%2C172.4%20165.5%2C172.1%20166.9%2C171.8%20168.3%2C171.6%20169.8%2C171.4%20171.2%2C171.2%20172.6%2C171.1%20174.0%2C171.0%20175.4%2C170.9%20176.8%2C170.9%20178.3%2C170.9%20179.7%2C170.9%20181.1%2C170.9%20182.5%2C171.0%20183.9%2C171.1%20185.4%2C171.2%20186.8%2C171.4%20188.2%2C171.6%20189.6%2C171.8%20191.0%2C172.1%20192.5%2C172.3%20193.9%2C172.6%20195.3%2C173.0%20196.7%2C173.3%20198.1%2C173.7%20199.6%2C174.1%20201.0%2C174.5%20202.4%2C174.9%20203.8%2C175.4%20205.2%2C175.9%20206.6%2C176.4%20208.1%2C176.9%20209.5%2C177.5%20210.9%2C178.1%20212.3%2C178.6%20213.7%2C179.2%20215.2%2C179.9%20216.6%2C180.5%20218.0%2C181.2%20219.4%2C181.9%20220.8%2C182.5%20222.2%2C183.3%20223.7%2C184.0%20225.1%2C184.7%20226.5%2C185.5%20227.9%2C186.2%20229.3%2C187.0%20230.8%2C187.8%20232.2%2C188.6%20233.6%2C189.4%20235.0%2C190.3%20236.4%2C191.1%20237.9%2C192.0%20239.3%2C192.8%20240.7%2C193.7%20242.1%2C194.6%20243.5%2C195.5%20244.9%2C196.4%20246.4%2C197.3%20247.8%2C198.2%20249.2%2C199.1%20250.6%2C200.0%20252.0%2C201.0%20253.5%2C201.9%20254.9%2C202.8%20256.3%2C203.8%20257.7%2C204.7%20259.1%2C205.7%20260.6%2C206.6%20262.0%2C207.6%20263.4%2C208.5%20264.8%2C209.5%20266.2%2C210.4%20267.6%2C211.4%20269.1%2C212.4%20270.5%2C213.3%20271.9%2C214.3%20273.3%2C215.2%20274.7%2C216.2%20276.2%2C217.1%20277.6%2C218.1%20279.0%2C219.0%20280.4%2C219.9%20281.8%2C220.9%20283.3%2C221.8%20284.7%2C222.7%20286.1%2C223.6%20287.5%2C224.5%20288.9%2C225.4%20290.4%2C226.3%20291.8%2C227.2%20293.2%2C228.1%20294.6%2C228.9%20296.0%2C229.8%20297.4%2C230.6%20298.9%2C231.5%20300.3%2C232.3%20301.7%2C233.1%20303.1%2C233.9%20304.5%2C234.7%20306.0%2C235.5%20307.4%2C236.2%20308.8%2C237.0%20310.2%2C237.7%20311.6%2C238.4%20313.1%2C239.1%20314.5%2C239.8%20315.9%2C240.4%20317.3%2C241.1%20318.7%2C241.7%20320.1%2C242.3%20321.6%2C242.9%20323.0%2C243.5%20324.4%2C244.1%20325.8%2C244.6%20327.2%2C245.1%20328.7%2C245.6%20330.1%2C246.1%20331.5%2C246.5%20332.9%2C246.9%20334.3%2C247.3%20335.8%2C247.7%20337.2%2C248.1%20338.6%2C248.4%20340.0%2C248.7%20341.4%2C249.0%20342.8%2C249.2%20344.3%2C249.5%20345.7%2C249.7%20347.1%2C249.8%20348.5%2C250.0%20349.9%2C250.1%20351.4%2C250.2%20352.8%2C250.2%20354.2%2C250.2%20355.6%2C250.2%20357.0%2C250.2%20358.4%2C250.1%20359.9%2C250.0%20361.3%2C249.9%20362.7%2C249.7%20364.1%2C249.5%20365.5%2C249.3%20367.0%2C249.0%20368.4%2C248.7%20369.8%2C248.4%20371.2%2C248.0%20372.6%2C247.6%20374.1%2C247.2%20375.5%2C246.7%20376.9%2C246.2%20378.3%2C245.6%20379.7%2C245.0%20381.1%2C244.4%20382.6%2C243.7%20384.0%2C243.0%20385.4%2C242.2%20386.8%2C241.4%20388.2%2C240.5%20389.7%2C239.7%20391.1%2C238.7%20392.5%2C237.8%20393.9%2C236.7%20395.3%2C235.7%20396.8%2C234.6%20398.2%2C233.4%20399.6%2C232.2%20401.0%2C231.0%20402.4%2C229.7%20403.9%2C228.3%20405.3%2C226.9%20406.7%2C225.5%20408.1%2C224.0%20409.5%2C222.5%20410.9%2C220.9%20412.4%2C219.3%20413.8%2C217.6%20415.2%2C215.9%20416.6%2C214.1%20418.0%2C212.2%20419.5%2C210.3%20420.9%2C208.4%20422.3%2C206.4%20423.7%2C204.3%20425.1%2C202.2%20426.6%2C200.0%20428.0%2C197.8%20429.4%2C195.5%20430.8%2C193.2%20432.2%2C190.8%20433.6%2C188.4%20435.1%2C185.9%20436.5%2C183.3%20437.9%2C180.7%20439.3%2C178.0%20440.7%2C175.2%20442.2%2C172.4%20443.6%2C169.6%20445.0%2C166.6%20446.4%2C163.6%20447.8%2C160.6%20449.2%2C157.5%20450.7%2C154.3%20452.1%2C151.0%20453.5%2C147.7%20454.9%2C144.4%20456.3%2C140.9%20457.8%2C137.4%20459.2%2C133.8%20460.6%2C130.2%20462.0%2C126.5%20463.4%2C122.7%20464.9%2C118.9%20466.3%2C115.0%20467.7%2C111.0%20469.1%2C106.9%20470.5%2C102.8%20471.9%2C98.6%20473.4%2C94.3%20474.8%2C90.0%20476.2%2C85.6%20477.6%2C81.1%20479.0%2C76.5%20480.5%2C71.9%20481.9%2C67.2%20483.3%2C62.4%20484.7%2C57.5%20486.1%2C52.6%20487.6%2C47.6%20489.0%2C42.5%20490.4%2C37.3%20491.8%2C32.1%20493.2%2C26.8%20494.6%2C21.4%20496.1%2C15.9%20497.5%2C10.3%20498.9%2C4.7%20500.3%2C-1.0%20501.7%2C-6.8%20503.2%2C-12.7%20504.6%2C-18.7%20506.0%2C-24.8%22%20clip-path%3D%22url%28%23clip-9481357%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-37.2%2053.4%2C-33.3%2054.8%2C-29.3%2056.3%2C-25.4%2057.7%2C-21.5%2059.1%2C-17.7%2060.5%2C-13.8%2061.9%2C-10.0%2063.4%2C-6.2%2064.8%2C-2.5%2066.2%2C1.3%2067.6%2C5.0%2069.0%2C8.7%2070.4%2C12.3%2071.9%2C15.9%2073.3%2C19.5%2074.7%2C23.1%2076.1%2C26.7%2077.5%2C30.2%2079.0%2C33.7%2080.4%2C37.2%2081.8%2C40.6%2083.2%2C44.0%2084.6%2C47.4%2086.0%2C50.8%2087.5%2C54.1%2088.9%2C57.4%2090.3%2C60.7%2091.7%2C64.0%2093.1%2C67.2%2094.6%2C70.4%2096.0%2C73.6%2097.4%2C76.8%2098.8%2C79.9%20100.2%2C83.0%20101.7%2C86.1%20103.1%2C89.1%20104.5%2C92.1%20105.9%2C95.1%20107.3%2C98.1%20108.8%2C101.0%20110.2%2C103.9%20111.6%2C106.8%20113.0%2C109.7%20114.4%2C112.5%20115.8%2C115.4%20117.3%2C118.1%20118.7%2C120.9%20120.1%2C123.6%20121.5%2C126.3%20122.9%2C129.0%20124.4%2C131.7%20125.8%2C134.3%20127.2%2C136.9%20128.6%2C139.5%20130.0%2C142.0%20131.4%2C144.5%20132.9%2C147.0%20134.3%2C149.5%20135.7%2C151.9%20137.1%2C154.4%20138.5%2C156.7%20140.0%2C159.1%20141.4%2C161.4%20142.8%2C163.8%20144.2%2C166.0%20145.6%2C168.3%20147.1%2C170.5%20148.5%2C172.7%20149.9%2C174.9%20151.3%2C177.1%20152.7%2C179.2%20154.2%2C181.3%20155.6%2C183.4%20157.0%2C185.4%20158.4%2C187.4%20159.8%2C189.4%20161.2%2C191.4%20162.7%2C193.3%20164.1%2C195.2%20165.5%2C197.1%20166.9%2C199.0%20168.3%2C200.8%20169.8%2C202.6%20171.2%2C204.4%20172.6%2C206.2%20174.0%2C207.9%20175.4%2C209.6%20176.8%2C211.3%20178.3%2C212.9%20179.7%2C214.6%20181.1%2C216.2%20182.5%2C217.7%20183.9%2C219.3%20185.4%2C220.8%20186.8%2C222.3%20188.2%2C223.8%20189.6%2C225.2%20191.0%2C226.6%20192.5%2C228.0%20193.9%2C229.4%20195.3%2C230.7%20196.7%2C232.0%20198.1%2C233.3%20199.6%2C234.5%20201.0%2C235.8%20202.4%2C237.0%20203.8%2C238.1%20205.2%2C239.3%20206.6%2C240.4%20208.1%2C241.5%20209.5%2C242.6%20210.9%2C243.6%20212.3%2C244.6%20213.7%2C245.6%20215.2%2C246.6%20216.6%2C247.5%20218.0%2C248.5%20219.4%2C249.3%20220.8%2C250.2%20222.2%2C251.0%20223.7%2C251.8%20225.1%2C252.6%20226.5%2C253.4%20227.9%2C254.1%20229.3%2C254.8%20230.8%2C255.5%20232.2%2C256.1%20233.6%2C256.8%20235.0%2C257.3%20236.4%2C257.9%20237.9%2C258.5%20239.3%2C259.0%20240.7%2C259.5%20242.1%2C259.9%20243.5%2C260.4%20244.9%2C260.8%20246.4%2C261.2%20247.8%2C261.5%20249.2%2C261.9%20250.6%2C262.2%20252.0%2C262.4%20253.5%2C262.7%20254.9%2C262.9%20256.3%2C263.1%20257.7%2C263.3%20259.1%2C263.4%20260.6%2C263.6%20262.0%2C263.7%20263.4%2C263.7%20264.8%2C263.8%20266.2%2C263.8%20267.6%2C263.8%20269.1%2C263.7%20270.5%2C263.7%20271.9%2C263.6%20273.3%2C263.5%20274.7%2C263.3%20276.2%2C263.2%20277.6%2C263.0%20279.0%2C262.8%20280.4%2C262.5%20281.8%2C262.2%20283.3%2C261.9%20284.7%2C261.6%20286.1%2C261.2%20287.5%2C260.9%20288.9%2C260.5%20290.4%2C260.0%20291.8%2C259.6%20293.2%2C259.1%20294.6%2C258.6%20296.0%2C258.0%20297.4%2C257.5%20298.9%2C256.9%20300.3%2C256.3%20301.7%2C255.6%20303.1%2C255.0%20304.5%2C254.3%20306.0%2C253.5%20307.4%2C252.8%20308.8%2C252.0%20310.2%2C251.2%20311.6%2C250.4%20313.1%2C249.5%20314.5%2C248.7%20315.9%2C247.7%20317.3%2C246.8%20318.7%2C245.9%20320.1%2C244.9%20321.6%2C243.9%20323.0%2C242.8%20324.4%2C241.8%20325.8%2C240.7%20327.2%2C239.5%20328.7%2C238.4%20330.1%2C237.2%20331.5%2C236.0%20332.9%2C234.8%20334.3%2C233.6%20335.8%2C232.3%20337.2%2C231.0%20338.6%2C229.7%20340.0%2C228.3%20341.4%2C226.9%20342.8%2C225.5%20344.3%2C224.1%20345.7%2C222.6%20347.1%2C221.1%20348.5%2C219.6%20349.9%2C218.1%20351.4%2C216.5%20352.8%2C214.9%20354.2%2C213.3%20355.6%2C211.7%20357.0%2C210.0%20358.4%2C208.3%20359.9%2C206.6%20361.3%2C204.8%20362.7%2C203.0%20364.1%2C201.2%20365.5%2C199.4%20367.0%2C197.5%20368.4%2C195.7%20369.8%2C193.7%20371.2%2C191.8%20372.6%2C189.9%20374.1%2C187.9%20375.5%2C185.9%20376.9%2C183.8%20378.3%2C181.7%20379.7%2C179.7%20381.1%2C177.5%20382.6%2C175.4%20384.0%2C173.2%20385.4%2C171.0%20386.8%2C168.8%20388.2%2C166.5%20389.7%2C164.3%20391.1%2C162.0%20392.5%2C159.6%20393.9%2C157.3%20395.3%2C154.9%20396.8%2C152.5%20398.2%2C150.0%20399.6%2C147.6%20401.0%2C145.1%20402.4%2C142.6%20403.9%2C140.0%20405.3%2C137.5%20406.7%2C134.9%20408.1%2C132.2%20409.5%2C129.6%20410.9%2C126.9%20412.4%2C124.2%20413.8%2C121.5%20415.2%2C118.8%20416.6%2C116.0%20418.0%2C113.2%20419.5%2C110.3%20420.9%2C107.5%20422.3%2C104.6%20423.7%2C101.7%20425.1%2C98.7%20426.6%2C95.8%20428.0%2C92.8%20429.4%2C89.8%20430.8%2C86.7%20432.2%2C83.7%20433.6%2C80.6%20435.1%2C77.4%20436.5%2C74.3%20437.9%2C71.1%20439.3%2C67.9%20440.7%2C64.7%20442.2%2C61.4%20443.6%2C58.2%20445.0%2C54.9%20446.4%2C51.5%20447.8%2C48.2%20449.2%2C44.8%20450.7%2C41.4%20452.1%2C37.9%20453.5%2C34.5%20454.9%2C31.0%20456.3%2C27.5%20457.8%2C23.9%20459.2%2C20.3%20460.6%2C16.7%20462.0%2C13.1%20463.4%2C9.5%20464.9%2C5.8%20466.3%2C2.1%20467.7%2C-1.6%20469.1%2C-5.4%20470.5%2C-9.2%20471.9%2C-13.0%20473.4%2C-16.8%20474.8%2C-20.7%20476.2%2C-24.5%20477.6%2C-28.5%20479.0%2C-32.4%20480.5%2C-36.4%20481.9%2C-40.4%20483.3%2C-44.4%20484.7%2C-48.4%20486.1%2C-52.5%20487.6%2C-56.6%20489.0%2C-60.7%20490.4%2C-64.9%20491.8%2C-69.0%20493.2%2C-73.2%20494.6%2C-77.5%20496.1%2C-81.7%20497.5%2C-86.0%20498.9%2C-90.3%20500.3%2C-94.6%20501.7%2C-99.0%20503.2%2C-103.4%20504.6%2C-107.8%20506.0%2C-112.2%22%20clip-path%3D%22url%28%23clip-9481357%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-147",
    case_id: "MATH 11.147",
    title: "Skewed pair on one plane: zero of f′ at x=4",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$, drawn on one shared plane. Decide TRUE or FALSE.",
    statements: [
      "The brown curve crosses the axis at $x=4$, and to the left of $x=4$ it is positive.",
      "At the highest point of the brown curve (near $x=1$), the green curve is approximately zero.",
      "For $x>2$ in this window, the green curve is negative, so $f'$ is decreasing on $(2,8)$.",
      "At $x=0$, brown is near height $4$ while green is near height $-2$.",
      "Because green is negative on $(2,8)$, the function $f$ itself must be decreasing on $(2,8)$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Visible zero at $x=4$ with a positive hump on the left.

So the statement is True.`,
      `**B.** → True

Peak of $f'$ ↔ zero of $f''$.

So the statement is True.`,
      `**C.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Where $f''$ is negative, $f'$ is decreasing.

So the statement is True.`,
      `**D.** → True

Read the two heights at the left edge of the figure.

So the statement is True.`,
      `**E.** → False

The sign of the derivative on the figure is what decides increase versus decrease. Negative $f''$ is about concavity of $f$ / decrease of $f'$, not about whether $f$ decreases. On $(2,4)$ one still has $f'>0$, so $f$ is still increasing there.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 147,
    solution_overview:
      "Do not confuse the sign of $f''$ with the monotonicity of $f$; use $f'$ for that.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4233781%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22165.5%22%20y1%3D%2244%22%20x2%3D%22165.5%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22392.5%22%20y1%3D%2244%22%20x2%3D%22392.5%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22506%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22506%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22165.5%22%20y1%3D%22344%22%20x2%3D%22165.5%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22165.5%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22392.5%22%20y1%3D%22344%22%20x2%3D%22392.5%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22392.5%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C44.0%2053.4%2C47.0%2054.8%2C49.9%2056.3%2C52.8%2057.7%2C55.7%2059.1%2C58.5%2060.5%2C61.3%2061.9%2C64.1%2063.4%2C66.8%2064.8%2C69.5%2066.2%2C72.2%2067.6%2C74.8%2069.0%2C77.4%2070.4%2C80.0%2071.9%2C82.5%2073.3%2C85.0%2074.7%2C87.5%2076.1%2C90.0%2077.5%2C92.4%2079.0%2C94.7%2080.4%2C97.1%2081.8%2C99.4%2083.2%2C101.7%2084.6%2C104.0%2086.0%2C106.2%2087.5%2C108.4%2088.9%2C110.6%2090.3%2C112.7%2091.7%2C114.9%2093.1%2C116.9%2094.6%2C119.0%2096.0%2C121.1%2097.4%2C123.1%2098.8%2C125.1%20100.2%2C127.0%20101.7%2C129.0%20103.1%2C130.9%20104.5%2C132.8%20105.9%2C134.6%20107.3%2C136.5%20108.8%2C138.3%20110.2%2C140.1%20111.6%2C141.9%20113.0%2C143.6%20114.4%2C145.3%20115.8%2C147.0%20117.3%2C148.7%20118.7%2C150.4%20120.1%2C152.0%20121.5%2C153.6%20122.9%2C155.2%20124.4%2C156.8%20125.8%2C158.3%20127.2%2C159.9%20128.6%2C161.4%20130.0%2C162.9%20131.4%2C164.4%20132.9%2C165.8%20134.3%2C167.2%20135.7%2C168.7%20137.1%2C170.1%20138.5%2C171.4%20140.0%2C172.8%20141.4%2C174.1%20142.8%2C175.5%20144.2%2C176.8%20145.6%2C178.0%20147.1%2C179.3%20148.5%2C180.6%20149.9%2C181.8%20151.3%2C183.0%20152.7%2C184.2%20154.2%2C185.4%20155.6%2C186.6%20157.0%2C187.7%20158.4%2C188.9%20159.8%2C190.0%20161.2%2C191.1%20162.7%2C192.2%20164.1%2C193.3%20165.5%2C194.3%20166.9%2C195.4%20168.3%2C196.4%20169.8%2C197.4%20171.2%2C198.4%20172.6%2C199.4%20174.0%2C200.4%20175.4%2C201.4%20176.9%2C202.3%20178.3%2C203.3%20179.7%2C204.2%20181.1%2C205.1%20182.5%2C206.0%20183.9%2C206.9%20185.4%2C207.8%20186.8%2C208.6%20188.2%2C209.5%20189.6%2C210.3%20191.0%2C211.1%20192.5%2C211.9%20193.9%2C212.7%20195.3%2C213.5%20196.7%2C214.3%20198.1%2C215.1%20199.6%2C215.8%20201.0%2C216.6%20202.4%2C217.3%20203.8%2C218.0%20205.2%2C218.7%20206.6%2C219.4%20208.1%2C220.1%20209.5%2C220.8%20210.9%2C221.5%20212.3%2C222.1%20213.7%2C222.8%20215.2%2C223.4%20216.6%2C224.1%20218.0%2C224.7%20219.4%2C225.3%20220.8%2C225.9%20222.2%2C226.5%20223.7%2C227.1%20225.1%2C227.7%20226.5%2C228.2%20227.9%2C228.8%20229.3%2C229.3%20230.8%2C229.9%20232.2%2C230.4%20233.6%2C230.9%20235.0%2C231.5%20236.4%2C232.0%20237.9%2C232.5%20239.3%2C233.0%20240.7%2C233.5%20242.1%2C233.9%20243.5%2C234.4%20244.9%2C234.9%20246.4%2C235.3%20247.8%2C235.8%20249.2%2C236.2%20250.6%2C236.7%20252.0%2C237.1%20253.5%2C237.5%20254.9%2C237.9%20256.3%2C238.3%20257.7%2C238.7%20259.1%2C239.1%20260.6%2C239.5%20262.0%2C239.9%20263.4%2C240.3%20264.8%2C240.6%20266.2%2C241.0%20267.6%2C241.4%20269.1%2C241.7%20270.5%2C242.1%20271.9%2C242.4%20273.3%2C242.7%20274.7%2C243.1%20276.2%2C243.4%20277.6%2C243.7%20279.0%2C244.0%20280.4%2C244.3%20281.8%2C244.6%20283.3%2C244.9%20284.7%2C245.2%20286.1%2C245.5%20287.5%2C245.8%20288.9%2C246.0%20290.4%2C246.3%20291.8%2C246.6%20293.2%2C246.8%20294.6%2C247.1%20296.0%2C247.3%20297.4%2C247.6%20298.9%2C247.8%20300.3%2C248.1%20301.7%2C248.3%20303.1%2C248.5%20304.5%2C248.7%20306.0%2C249.0%20307.4%2C249.2%20308.8%2C249.4%20310.2%2C249.6%20311.6%2C249.8%20313.0%2C250.0%20314.5%2C250.2%20315.9%2C250.4%20317.3%2C250.6%20318.7%2C250.8%20320.1%2C250.9%20321.6%2C251.1%20323.0%2C251.3%20324.4%2C251.5%20325.8%2C251.6%20327.2%2C251.8%20328.7%2C251.9%20330.1%2C252.1%20331.5%2C252.3%20332.9%2C252.4%20334.3%2C252.5%20335.8%2C252.7%20337.2%2C252.8%20338.6%2C253.0%20340.0%2C253.1%20341.4%2C253.2%20342.8%2C253.4%20344.3%2C253.5%20345.7%2C253.6%20347.1%2C253.7%20348.5%2C253.8%20349.9%2C254.0%20351.4%2C254.1%20352.8%2C254.2%20354.2%2C254.3%20355.6%2C254.4%20357.0%2C254.5%20358.5%2C254.6%20359.9%2C254.7%20361.3%2C254.8%20362.7%2C254.9%20364.1%2C254.9%20365.5%2C255.0%20367.0%2C255.1%20368.4%2C255.2%20369.8%2C255.3%20371.2%2C255.3%20372.6%2C255.4%20374.1%2C255.5%20375.5%2C255.6%20376.9%2C255.6%20378.3%2C255.7%20379.7%2C255.8%20381.1%2C255.8%20382.6%2C255.9%20384.0%2C255.9%20385.4%2C256.0%20386.8%2C256.0%20388.2%2C256.1%20389.7%2C256.2%20391.1%2C256.2%20392.5%2C256.2%20393.9%2C256.3%20395.3%2C256.3%20396.8%2C256.4%20398.2%2C256.4%20399.6%2C256.5%20401.0%2C256.5%20402.4%2C256.5%20403.9%2C256.6%20405.3%2C256.6%20406.7%2C256.6%20408.1%2C256.7%20409.5%2C256.7%20410.9%2C256.7%20412.4%2C256.7%20413.8%2C256.8%20415.2%2C256.8%20416.6%2C256.8%20418.0%2C256.8%20419.5%2C256.8%20420.9%2C256.8%20422.3%2C256.9%20423.7%2C256.9%20425.1%2C256.9%20426.5%2C256.9%20428.0%2C256.9%20429.4%2C256.9%20430.8%2C256.9%20432.2%2C256.9%20433.6%2C256.9%20435.1%2C257.0%20436.5%2C257.0%20437.9%2C257.0%20439.3%2C257.0%20440.7%2C257.0%20442.2%2C257.0%20443.6%2C257.0%20445.0%2C257.0%20446.4%2C257.0%20447.8%2C256.9%20449.2%2C256.9%20450.7%2C256.9%20452.1%2C256.9%20453.5%2C256.9%20454.9%2C256.9%20456.3%2C256.9%20457.8%2C256.9%20459.2%2C256.9%20460.6%2C256.9%20462.0%2C256.9%20463.4%2C256.8%20464.9%2C256.8%20466.3%2C256.8%20467.7%2C256.8%20469.1%2C256.8%20470.5%2C256.8%20472.0%2C256.8%20473.4%2C256.7%20474.8%2C256.7%20476.2%2C256.7%20477.6%2C256.7%20479.0%2C256.7%20480.5%2C256.6%20481.9%2C256.6%20483.3%2C256.6%20484.7%2C256.6%20486.1%2C256.5%20487.6%2C256.5%20489.0%2C256.5%20490.4%2C256.5%20491.8%2C256.4%20493.2%2C256.4%20494.6%2C256.4%20496.1%2C256.4%20497.5%2C256.3%20498.9%2C256.3%20500.3%2C256.3%20501.7%2C256.3%20503.2%2C256.2%20504.6%2C256.2%20506.0%2C256.2%22%20clip-path%3D%22url%28%23clip-4233781%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C364.0%2053.4%2C362.5%2054.8%2C361.1%2056.3%2C359.6%2057.7%2C358.2%2059.1%2C356.8%2060.5%2C355.4%2061.9%2C354.0%2063.4%2C352.6%2064.8%2C351.3%2066.2%2C349.9%2067.6%2C348.6%2069.0%2C347.3%2070.4%2C346.0%2071.9%2C344.7%2073.3%2C343.5%2074.7%2C342.2%2076.1%2C341.0%2077.5%2C339.8%2079.0%2C338.6%2080.4%2C337.4%2081.8%2C336.2%2083.2%2C335.0%2084.6%2C333.9%2086.0%2C332.8%2087.5%2C331.6%2088.9%2C330.5%2090.3%2C329.4%2091.7%2C328.3%2093.1%2C327.3%2094.6%2C326.2%2096.0%2C325.2%2097.4%2C324.1%2098.8%2C323.1%20100.2%2C322.1%20101.7%2C321.1%20103.1%2C320.1%20104.5%2C319.1%20105.9%2C318.1%20107.3%2C317.2%20108.8%2C316.2%20110.2%2C315.3%20111.6%2C314.4%20113.0%2C313.5%20114.4%2C312.6%20115.8%2C311.7%20117.3%2C310.8%20118.7%2C309.9%20120.1%2C309.0%20121.5%2C308.2%20122.9%2C307.4%20124.4%2C306.5%20125.8%2C305.7%20127.2%2C304.9%20128.6%2C304.1%20130.0%2C303.3%20131.4%2C302.5%20132.9%2C301.7%20134.3%2C301.0%20135.7%2C300.2%20137.1%2C299.5%20138.5%2C298.7%20140.0%2C298.0%20141.4%2C297.3%20142.8%2C296.6%20144.2%2C295.8%20145.6%2C295.1%20147.1%2C294.5%20148.5%2C293.8%20149.9%2C293.1%20151.3%2C292.4%20152.7%2C291.8%20154.2%2C291.1%20155.6%2C290.5%20157.0%2C289.9%20158.4%2C289.2%20159.8%2C288.6%20161.2%2C288.0%20162.7%2C287.4%20164.1%2C286.8%20165.5%2C286.2%20166.9%2C285.6%20168.3%2C285.1%20169.8%2C284.5%20171.2%2C283.9%20172.6%2C283.4%20174.0%2C282.8%20175.4%2C282.3%20176.9%2C281.7%20178.3%2C281.2%20179.7%2C280.7%20181.1%2C280.2%20182.5%2C279.7%20183.9%2C279.2%20185.4%2C278.7%20186.8%2C278.2%20188.2%2C277.7%20189.6%2C277.2%20191.0%2C276.7%20192.5%2C276.2%20193.9%2C275.8%20195.3%2C275.3%20196.7%2C274.9%20198.1%2C274.4%20199.6%2C274.0%20201.0%2C273.6%20202.4%2C273.1%20203.8%2C272.7%20205.2%2C272.3%20206.6%2C271.9%20208.1%2C271.5%20209.5%2C271.0%20210.9%2C270.6%20212.3%2C270.3%20213.7%2C269.9%20215.2%2C269.5%20216.6%2C269.1%20218.0%2C268.7%20219.4%2C268.3%20220.8%2C268.0%20222.2%2C267.6%20223.7%2C267.3%20225.1%2C266.9%20226.5%2C266.6%20227.9%2C266.2%20229.3%2C265.9%20230.8%2C265.5%20232.2%2C265.2%20233.6%2C264.9%20235.0%2C264.6%20236.4%2C264.2%20237.9%2C263.9%20239.3%2C263.6%20240.7%2C263.3%20242.1%2C263.0%20243.5%2C262.7%20244.9%2C262.4%20246.4%2C262.1%20247.8%2C261.8%20249.2%2C261.5%20250.6%2C261.3%20252.0%2C261.0%20253.5%2C260.7%20254.9%2C260.4%20256.3%2C260.2%20257.7%2C259.9%20259.1%2C259.6%20260.6%2C259.4%20262.0%2C259.1%20263.4%2C258.9%20264.8%2C258.6%20266.2%2C258.4%20267.6%2C258.1%20269.1%2C257.9%20270.5%2C257.7%20271.9%2C257.4%20273.3%2C257.2%20274.7%2C257.0%20276.2%2C256.8%20277.6%2C256.5%20279.0%2C256.3%20280.4%2C256.1%20281.8%2C255.9%20283.3%2C255.7%20284.7%2C255.5%20286.1%2C255.3%20287.5%2C255.1%20288.9%2C254.9%20290.4%2C254.7%20291.8%2C254.5%20293.2%2C254.3%20294.6%2C254.1%20296.0%2C253.9%20297.4%2C253.8%20298.9%2C253.6%20300.3%2C253.4%20301.7%2C253.2%20303.1%2C253.0%20304.5%2C252.9%20306.0%2C252.7%20307.4%2C252.5%20308.8%2C252.4%20310.2%2C252.2%20311.6%2C252.1%20313.0%2C251.9%20314.5%2C251.7%20315.9%2C251.6%20317.3%2C251.4%20318.7%2C251.3%20320.1%2C251.1%20321.6%2C251.0%20323.0%2C250.9%20324.4%2C250.7%20325.8%2C250.6%20327.2%2C250.4%20328.7%2C250.3%20330.1%2C250.2%20331.5%2C250.0%20332.9%2C249.9%20334.3%2C249.8%20335.8%2C249.6%20337.2%2C249.5%20338.6%2C249.4%20340.0%2C249.3%20341.4%2C249.2%20342.8%2C249.0%20344.3%2C248.9%20345.7%2C248.8%20347.1%2C248.7%20348.5%2C248.6%20349.9%2C248.5%20351.4%2C248.4%20352.8%2C248.3%20354.2%2C248.2%20355.6%2C248.1%20357.0%2C248.0%20358.5%2C247.9%20359.9%2C247.8%20361.3%2C247.7%20362.7%2C247.6%20364.1%2C247.5%20365.5%2C247.4%20367.0%2C247.3%20368.4%2C247.2%20369.8%2C247.1%20371.2%2C247.0%20372.6%2C246.9%20374.1%2C246.8%20375.5%2C246.8%20376.9%2C246.7%20378.3%2C246.6%20379.7%2C246.5%20381.1%2C246.4%20382.6%2C246.4%20384.0%2C246.3%20385.4%2C246.2%20386.8%2C246.1%20388.2%2C246.1%20389.7%2C246.0%20391.1%2C245.9%20392.5%2C245.8%20393.9%2C245.8%20395.3%2C245.7%20396.8%2C245.6%20398.2%2C245.6%20399.6%2C245.5%20401.0%2C245.4%20402.4%2C245.4%20403.9%2C245.3%20405.3%2C245.3%20406.7%2C245.2%20408.1%2C245.1%20409.5%2C245.1%20410.9%2C245.0%20412.4%2C245.0%20413.8%2C244.9%20415.2%2C244.9%20416.6%2C244.8%20418.0%2C244.7%20419.5%2C244.7%20420.9%2C244.6%20422.3%2C244.6%20423.7%2C244.5%20425.1%2C244.5%20426.5%2C244.4%20428.0%2C244.4%20429.4%2C244.4%20430.8%2C244.3%20432.2%2C244.3%20433.6%2C244.2%20435.1%2C244.2%20436.5%2C244.1%20437.9%2C244.1%20439.3%2C244.1%20440.7%2C244.0%20442.2%2C244.0%20443.6%2C243.9%20445.0%2C243.9%20446.4%2C243.9%20447.8%2C243.8%20449.2%2C243.8%20450.7%2C243.7%20452.1%2C243.7%20453.5%2C243.7%20454.9%2C243.6%20456.3%2C243.6%20457.8%2C243.6%20459.2%2C243.5%20460.6%2C243.5%20462.0%2C243.5%20463.4%2C243.5%20464.9%2C243.4%20466.3%2C243.4%20467.7%2C243.4%20469.1%2C243.3%20470.5%2C243.3%20472.0%2C243.3%20473.4%2C243.3%20474.8%2C243.2%20476.2%2C243.2%20477.6%2C243.2%20479.0%2C243.2%20480.5%2C243.1%20481.9%2C243.1%20483.3%2C243.1%20484.7%2C243.1%20486.1%2C243.0%20487.6%2C243.0%20489.0%2C243.0%20490.4%2C243.0%20491.8%2C243.0%20493.2%2C242.9%20494.6%2C242.9%20496.1%2C242.9%20497.5%2C242.9%20498.9%2C242.9%20500.3%2C242.9%20501.7%2C242.8%20503.2%2C242.8%20504.6%2C242.8%20506.0%2C242.8%22%20clip-path%3D%22url%28%23clip-4233781%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-148",
    case_id: "MATH 11.148",
    title: "Two marginal-profit curves on one plane",
    subsection: "11.4",
    context:
      "Brown is firm A's marginal profit $P_A'$ and green is firm B's marginal profit $P_B'$, plotted on the same axes. Decide TRUE or FALSE.",
    statements: [
      "Firm A's zeros are near $x=1$ and $x=3$, while firm B's zeros are near $x=2$ and $x=5$.",
      "At $x=1.5$, brown is negative while green is still positive, so A wants to contract and B wants to expand.",
      "At $x=4$, both curves are negative, so both firms' profits are decreasing in output there.",
      "Near $x=0$, both curves are positive, and green starts higher than brown.",
      "Having two zeros each means the two firms earn the same maximal profit level."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Read the axis crossings on the shared $x$-axis.

So the statement is True.`,
      `**B.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Opposite signs of marginal profit ⇒ opposite expand/contract advice.

So the statement is True.`,
      `**C.** → True

Read the figure at $x=4$. Negative $P'$ means profit falls as output rises.

So the statement is True.`,
      `**D.** → True

Compare heights on the shared vertical scale. From the figure at $x=0$, both curves are above the axis and green sits higher than brown.

So the statement is True.`,
      `**E.** → False

Count the clear axis crossings of the named curve in the window. Critical-point counts do not determine the height of profit levels — $P$ itself is not plotted.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 148,
    solution_overview:
      "Compare zero locations and signs of two marginal-profit curves on shared axes.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EMarginal%20profit%20for%20two%20firms%20%28same%20axes%29%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-6356476%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%2244%22%20x2%3D%22116.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%2244%22%20x2%3D%22181.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%2244%22%20x2%3D%22246.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%2244%22%20x2%3D%22311.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%2244%22%20x2%3D%22376.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%2244%22%20x2%3D%22441.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22506%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22506%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%22344%22%20x2%3D%22116.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22116.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%22344%22%20x2%3D%22181.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22181.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%22344%22%20x2%3D%22246.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22246.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%22344%22%20x2%3D%22311.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22311.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%22344%22%20x2%3D%22376.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%22344%22%20x2%3D%22441.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E7%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C44.0%2053.4%2C49.0%2054.8%2C53.9%2056.3%2C58.7%2057.7%2C63.4%2059.1%2C68.1%2060.5%2C72.6%2061.9%2C77.1%2063.4%2C81.5%2064.8%2C85.8%2066.2%2C90.0%2067.6%2C94.2%2069.0%2C98.2%2070.4%2C102.2%2071.9%2C106.1%2073.3%2C109.9%2074.7%2C113.7%2076.1%2C117.4%2077.5%2C121.0%2079.0%2C124.5%2080.4%2C128.0%2081.8%2C131.4%2083.2%2C134.7%2084.6%2C137.9%2086.0%2C141.1%2087.5%2C144.2%2088.9%2C147.2%2090.3%2C150.2%2091.7%2C153.1%2093.1%2C155.9%2094.6%2C158.7%2096.0%2C161.4%2097.4%2C164.0%2098.8%2C166.6%20100.2%2C169.1%20101.7%2C171.5%20103.1%2C173.9%20104.5%2C176.2%20105.9%2C178.5%20107.3%2C180.7%20108.8%2C182.9%20110.2%2C184.9%20111.6%2C187.0%20113.0%2C188.9%20114.4%2C190.8%20115.8%2C192.7%20117.3%2C194.5%20118.7%2C196.3%20120.1%2C198.0%20121.5%2C199.6%20122.9%2C201.2%20124.4%2C202.7%20125.8%2C204.2%20127.2%2C205.6%20128.6%2C207.0%20130.0%2C208.3%20131.4%2C209.6%20132.9%2C210.9%20134.3%2C212.0%20135.7%2C213.2%20137.1%2C214.3%20138.5%2C215.3%20140.0%2C216.3%20141.4%2C217.3%20142.8%2C218.2%20144.2%2C219.0%20145.6%2C219.9%20147.1%2C220.6%20148.5%2C221.4%20149.9%2C222.1%20151.3%2C222.7%20152.7%2C223.3%20154.2%2C223.9%20155.6%2C224.4%20157.0%2C224.9%20158.4%2C225.4%20159.8%2C225.8%20161.2%2C226.1%20162.7%2C226.5%20164.1%2C226.8%20165.5%2C227.0%20166.9%2C227.3%20168.3%2C227.4%20169.8%2C227.6%20171.2%2C227.7%20172.6%2C227.8%20174.0%2C227.8%20175.4%2C227.9%20176.9%2C227.8%20178.3%2C227.8%20179.7%2C227.7%20181.1%2C227.6%20182.5%2C227.4%20183.9%2C227.2%20185.4%2C227.0%20186.8%2C226.8%20188.2%2C226.5%20189.6%2C226.2%20191.0%2C225.9%20192.5%2C225.5%20193.9%2C225.1%20195.3%2C224.7%20196.7%2C224.3%20198.1%2C223.8%20199.6%2C223.3%20201.0%2C222.8%20202.4%2C222.3%20203.8%2C221.7%20205.2%2C221.1%20206.6%2C220.5%20208.1%2C219.8%20209.5%2C219.1%20210.9%2C218.4%20212.3%2C217.7%20213.7%2C217.0%20215.2%2C216.2%20216.6%2C215.4%20218.0%2C214.6%20219.4%2C213.8%20220.8%2C212.9%20222.2%2C212.0%20223.7%2C211.1%20225.1%2C210.2%20226.5%2C209.3%20227.9%2C208.3%20229.3%2C207.3%20230.8%2C206.3%20232.2%2C205.3%20233.6%2C204.3%20235.0%2C203.2%20236.4%2C202.2%20237.9%2C201.1%20239.3%2C200.0%20240.7%2C198.8%20242.1%2C197.7%20243.5%2C196.5%20244.9%2C195.4%20246.4%2C194.2%20247.8%2C193.0%20249.2%2C191.7%20250.6%2C190.5%20252.0%2C189.3%20253.5%2C188.0%20254.9%2C186.7%20256.3%2C185.4%20257.7%2C184.1%20259.1%2C182.8%20260.6%2C181.4%20262.0%2C180.1%20263.4%2C178.7%20264.8%2C177.4%20266.2%2C176.0%20267.6%2C174.6%20269.1%2C173.2%20270.5%2C171.7%20271.9%2C170.3%20273.3%2C168.9%20274.7%2C167.4%20276.2%2C165.9%20277.6%2C164.5%20279.0%2C163.0%20280.4%2C161.5%20281.8%2C160.0%20283.3%2C158.4%20284.7%2C156.9%20286.1%2C155.4%20287.5%2C153.8%20288.9%2C152.3%20290.4%2C150.7%20291.8%2C149.1%20293.2%2C147.6%20294.6%2C146.0%20296.0%2C144.4%20297.4%2C142.8%20298.9%2C141.2%20300.3%2C139.5%20301.7%2C137.9%20303.1%2C136.3%20304.5%2C134.6%20306.0%2C133.0%20307.4%2C131.4%20308.8%2C129.7%20310.2%2C128.0%20311.6%2C126.4%20313.1%2C124.7%20314.5%2C123.0%20315.9%2C121.3%20317.3%2C119.6%20318.7%2C117.9%20320.1%2C116.2%20321.6%2C114.5%20323.0%2C112.8%20324.4%2C111.1%20325.8%2C109.4%20327.2%2C107.7%20328.7%2C105.9%20330.1%2C104.2%20331.5%2C102.5%20332.9%2C100.8%20334.3%2C99.0%20335.8%2C97.3%20337.2%2C95.5%20338.6%2C93.8%20340.0%2C92.0%20341.4%2C90.3%20342.8%2C88.5%20344.3%2C86.8%20345.7%2C85.0%20347.1%2C83.3%20348.5%2C81.5%20349.9%2C79.7%20351.4%2C78.0%20352.8%2C76.2%20354.2%2C74.4%20355.6%2C72.7%20357.0%2C70.9%20358.4%2C69.1%20359.9%2C67.4%20361.3%2C65.6%20362.7%2C63.8%20364.1%2C62.0%20365.5%2C60.3%20367.0%2C58.5%20368.4%2C56.7%20369.8%2C54.9%20371.2%2C53.2%20372.6%2C51.4%20374.1%2C49.6%20375.5%2C47.9%20376.9%2C46.1%20378.3%2C44.3%20379.7%2C42.6%20381.1%2C40.8%20382.6%2C39.0%20384.0%2C37.3%20385.4%2C35.5%20386.8%2C33.7%20388.2%2C32.0%20389.7%2C30.2%20391.1%2C28.4%20392.5%2C26.7%20393.9%2C24.9%20395.3%2C23.2%20396.8%2C21.4%20398.2%2C19.7%20399.6%2C17.9%20401.0%2C16.2%20402.4%2C14.4%20403.9%2C12.7%20405.3%2C11.0%20406.7%2C9.2%20408.1%2C7.5%20409.5%2C5.8%20410.9%2C4.0%20412.4%2C2.3%20413.8%2C0.6%20415.2%2C-1.1%20416.6%2C-2.8%20418.0%2C-4.5%20419.5%2C-6.2%20420.9%2C-8.0%20422.3%2C-9.7%20423.7%2C-11.4%20425.1%2C-13.0%20426.6%2C-14.7%20428.0%2C-16.4%20429.4%2C-18.1%20430.8%2C-19.8%20432.2%2C-21.5%20433.6%2C-23.1%20435.1%2C-24.8%20436.5%2C-26.5%20437.9%2C-28.1%20439.3%2C-29.8%20440.7%2C-31.4%20442.2%2C-33.1%20443.6%2C-34.7%20445.0%2C-36.4%20446.4%2C-38.0%20447.8%2C-39.6%20449.2%2C-41.2%20450.7%2C-42.9%20452.1%2C-44.5%20453.5%2C-46.1%20454.9%2C-47.7%20456.3%2C-49.3%20457.8%2C-50.9%20459.2%2C-52.5%20460.6%2C-54.1%20462.0%2C-55.6%20463.4%2C-57.2%20464.9%2C-58.8%20466.3%2C-60.3%20467.7%2C-61.9%20469.1%2C-63.5%20470.5%2C-65.0%20471.9%2C-66.6%20473.4%2C-68.1%20474.8%2C-69.6%20476.2%2C-71.2%20477.6%2C-72.7%20479.0%2C-74.2%20480.5%2C-75.7%20481.9%2C-77.2%20483.3%2C-78.7%20484.7%2C-80.2%20486.1%2C-81.7%20487.6%2C-83.2%20489.0%2C-84.7%20490.4%2C-86.1%20491.8%2C-87.6%20493.2%2C-89.0%20494.6%2C-90.5%20496.1%2C-91.9%20497.5%2C-93.4%20498.9%2C-94.8%20500.3%2C-96.3%20501.7%2C-97.7%20503.2%2C-99.1%20504.6%2C-100.5%20506.0%2C-101.9%22%20clip-path%3D%22url%28%23clip-6356476%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-306.0%2053.4%2C-296.8%2054.8%2C-287.6%2056.3%2C-278.6%2057.7%2C-269.6%2059.1%2C-260.8%2060.5%2C-252.1%2061.9%2C-243.4%2063.4%2C-234.9%2064.8%2C-226.4%2066.2%2C-218.1%2067.6%2C-209.8%2069.0%2C-201.7%2070.4%2C-193.6%2071.9%2C-185.7%2073.3%2C-177.8%2074.7%2C-170.0%2076.1%2C-162.3%2077.5%2C-154.7%2079.0%2C-147.2%2080.4%2C-139.8%2081.8%2C-132.5%2083.2%2C-125.2%2084.6%2C-118.1%2086.0%2C-111.0%2087.5%2C-104.1%2088.9%2C-97.2%2090.3%2C-90.4%2091.7%2C-83.7%2093.1%2C-77.0%2094.6%2C-70.5%2096.0%2C-64.0%2097.4%2C-57.6%2098.8%2C-51.3%20100.2%2C-45.1%20101.7%2C-39.0%20103.1%2C-32.9%20104.5%2C-27.0%20105.9%2C-21.1%20107.3%2C-15.2%20108.8%2C-9.5%20110.2%2C-3.8%20111.6%2C1.8%20113.0%2C7.3%20114.4%2C12.7%20115.8%2C18.1%20117.3%2C23.4%20118.7%2C28.6%20120.1%2C33.7%20121.5%2C38.8%20122.9%2C43.8%20124.4%2C48.7%20125.8%2C53.6%20127.2%2C58.3%20128.6%2C63.1%20130.0%2C67.7%20131.4%2C72.3%20132.9%2C76.8%20134.3%2C81.2%20135.7%2C85.6%20137.1%2C89.9%20138.5%2C94.1%20140.0%2C98.3%20141.4%2C102.4%20142.8%2C106.5%20144.2%2C110.4%20145.6%2C114.4%20147.1%2C118.2%20148.5%2C122.0%20149.9%2C125.7%20151.3%2C129.4%20152.7%2C133.0%20154.2%2C136.5%20155.6%2C140.0%20157.0%2C143.4%20158.4%2C146.8%20159.8%2C150.1%20161.2%2C153.4%20162.7%2C156.5%20164.1%2C159.7%20165.5%2C162.8%20166.9%2C165.8%20168.3%2C168.7%20169.8%2C171.6%20171.2%2C174.5%20172.6%2C177.3%20174.0%2C180.0%20175.4%2C182.7%20176.9%2C185.4%20178.3%2C187.9%20179.7%2C190.5%20181.1%2C193.0%20182.5%2C195.4%20183.9%2C197.8%20185.4%2C200.1%20186.8%2C202.4%20188.2%2C204.6%20189.6%2C206.8%20191.0%2C208.9%20192.5%2C211.0%20193.9%2C213.0%20195.3%2C215.0%20196.7%2C216.9%20198.1%2C218.8%20199.6%2C220.6%20201.0%2C222.4%20202.4%2C224.2%20203.8%2C225.9%20205.2%2C227.5%20206.6%2C229.2%20208.1%2C230.7%20209.5%2C232.2%20210.9%2C233.7%20212.3%2C235.2%20213.7%2C236.6%20215.2%2C237.9%20216.6%2C239.2%20218.0%2C240.5%20219.4%2C241.7%20220.8%2C242.9%20222.2%2C244.1%20223.7%2C245.2%20225.1%2C246.2%20226.5%2C247.3%20227.9%2C248.3%20229.3%2C249.2%20230.8%2C250.1%20232.2%2C251.0%20233.6%2C251.8%20235.0%2C252.6%20236.4%2C253.4%20237.9%2C254.1%20239.3%2C254.8%20240.7%2C255.4%20242.1%2C256.1%20243.5%2C256.6%20244.9%2C257.2%20246.4%2C257.7%20247.8%2C258.2%20249.2%2C258.6%20250.6%2C259.0%20252.0%2C259.4%20253.5%2C259.7%20254.9%2C260.0%20256.3%2C260.3%20257.7%2C260.6%20259.1%2C260.8%20260.6%2C261.0%20262.0%2C261.1%20263.4%2C261.2%20264.8%2C261.3%20266.2%2C261.4%20267.6%2C261.4%20269.1%2C261.4%20270.5%2C261.4%20271.9%2C261.3%20273.3%2C261.2%20274.7%2C261.1%20276.2%2C260.9%20277.6%2C260.8%20279.0%2C260.5%20280.4%2C260.3%20281.8%2C260.1%20283.3%2C259.8%20284.7%2C259.5%20286.1%2C259.1%20287.5%2C258.8%20288.9%2C258.4%20290.4%2C257.9%20291.8%2C257.5%20293.2%2C257.0%20294.6%2C256.5%20296.0%2C256.0%20297.4%2C255.5%20298.9%2C254.9%20300.3%2C254.3%20301.7%2C253.7%20303.1%2C253.1%20304.5%2C252.4%20306.0%2C251.7%20307.4%2C251.0%20308.8%2C250.3%20310.2%2C249.5%20311.6%2C248.8%20313.1%2C248.0%20314.5%2C247.2%20315.9%2C246.3%20317.3%2C245.5%20318.7%2C244.6%20320.1%2C243.7%20321.6%2C242.8%20323.0%2C241.8%20324.4%2C240.9%20325.8%2C239.9%20327.2%2C238.9%20328.7%2C237.9%20330.1%2C236.8%20331.5%2C235.8%20332.9%2C234.7%20334.3%2C233.6%20335.8%2C232.5%20337.2%2C231.4%20338.6%2C230.2%20340.0%2C229.1%20341.4%2C227.9%20342.8%2C226.7%20344.3%2C225.5%20345.7%2C224.2%20347.1%2C223.0%20348.5%2C221.7%20349.9%2C220.5%20351.4%2C219.2%20352.8%2C217.8%20354.2%2C216.5%20355.6%2C215.2%20357.0%2C213.8%20358.4%2C212.4%20359.9%2C211.1%20361.3%2C209.7%20362.7%2C208.2%20364.1%2C206.8%20365.5%2C205.4%20367.0%2C203.9%20368.4%2C202.4%20369.8%2C201.0%20371.2%2C199.5%20372.6%2C197.9%20374.1%2C196.4%20375.5%2C194.9%20376.9%2C193.3%20378.3%2C191.8%20379.7%2C190.2%20381.1%2C188.6%20382.6%2C187.0%20384.0%2C185.4%20385.4%2C183.8%20386.8%2C182.2%20388.2%2C180.5%20389.7%2C178.9%20391.1%2C177.2%20392.5%2C175.5%20393.9%2C173.8%20395.3%2C172.1%20396.8%2C170.4%20398.2%2C168.7%20399.6%2C167.0%20401.0%2C165.2%20402.4%2C163.5%20403.9%2C161.7%20405.3%2C160.0%20406.7%2C158.2%20408.1%2C156.4%20409.5%2C154.6%20410.9%2C152.8%20412.4%2C151.0%20413.8%2C149.2%20415.2%2C147.4%20416.6%2C145.5%20418.0%2C143.7%20419.5%2C141.8%20420.9%2C140.0%20422.3%2C138.1%20423.7%2C136.3%20425.1%2C134.4%20426.6%2C132.5%20428.0%2C130.6%20429.4%2C128.7%20430.8%2C126.8%20432.2%2C124.9%20433.6%2C122.9%20435.1%2C121.0%20436.5%2C119.1%20437.9%2C117.1%20439.3%2C115.2%20440.7%2C113.2%20442.2%2C111.3%20443.6%2C109.3%20445.0%2C107.4%20446.4%2C105.4%20447.8%2C103.4%20449.2%2C101.4%20450.7%2C99.4%20452.1%2C97.4%20453.5%2C95.4%20454.9%2C93.4%20456.3%2C91.4%20457.8%2C89.4%20459.2%2C87.4%20460.6%2C85.4%20462.0%2C83.3%20463.4%2C81.3%20464.9%2C79.3%20466.3%2C77.2%20467.7%2C75.2%20469.1%2C73.1%20470.5%2C71.1%20471.9%2C69.0%20473.4%2C67.0%20474.8%2C64.9%20476.2%2C62.9%20477.6%2C60.8%20479.0%2C58.7%20480.5%2C56.7%20481.9%2C54.6%20483.3%2C52.5%20484.7%2C50.4%20486.1%2C48.4%20487.6%2C46.3%20489.0%2C44.2%20490.4%2C42.1%20491.8%2C40.0%20493.2%2C37.9%20494.6%2C35.8%20496.1%2C33.7%20497.5%2C31.6%20498.9%2C29.5%20500.3%2C27.4%20501.7%2C25.3%20503.2%2C23.2%20504.6%2C21.1%20506.0%2C19.0%22%20clip-path%3D%22url%28%23clip-6356476%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_A%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_B%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-149",
    case_id: "MATH 11.149",
    title: "Four-zero f′ with f″ on shared axes",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$ on one plane. Decide TRUE or FALSE.",
    statements: [
      "The brown curve has four zeros in $[0,6]$.",
      "The green curve has three zeros in the window (one fewer than brown).",
      "At a local maximum of the brown curve, the green curve crosses or touches zero.",
      "On an interval where green is positive, brown is rising, so $f$ is concave up there.",
      "At $x=3$, brown is negative, so $f$ is decreasing at $x=3$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Count the clear axis crossings of the named curve in the window. Four crossings of the brown curve.

So the statement is True.`,
      `**B.** → True

Count the clear axis crossings of the named curve in the window. A degree drop: three crossings for green.

So the statement is True.`,
      `**C.** → True

Extrema of $f'$ occur where $f''=0$.

So the statement is True.`,
      `**D.** → True

By the stem, $B=A'$, so the sign of green is the sign of the slope of brown: positive green means brown is rising. $f''>0$ ⇒ $f'$ increasing and $f$ concave up.

So the statement is True.`,
      `**E.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Between the middle zeros brown is below the axis; $x=3$ is there.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 149,
    solution_overview:
      "Shared-plane zero counts and the link extrema($f'$) ↔ zeros($f''$).",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-861831%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22314.0%22%20x2%3D%22506%22%20y2%3D%22314.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22254.0%22%20x2%3D%22506%22%20y2%3D%22254.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22134.0%22%20x2%3D%22506%22%20y2%3D%22134.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2274.0%22%20x2%3D%22506%22%20y2%3D%2274.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22314.0%22%20x2%3D%2252%22%20y2%3D%22314.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22318.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22254.0%22%20x2%3D%2252%22%20y2%3D%22254.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22258.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22134.0%22%20x2%3D%2252%22%20y2%3D%22134.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22138.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2274.0%22%20x2%3D%2252%22%20y2%3D%2274.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2278.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C121.8%2053.4%2C125.8%2054.8%2C129.6%2056.3%2C133.4%2057.7%2C137.0%2059.1%2C140.5%2060.5%2C143.9%2061.9%2C147.3%2063.4%2C150.5%2064.8%2C153.6%2066.2%2C156.6%2067.6%2C159.5%2069.0%2C162.4%2070.4%2C165.1%2071.9%2C167.8%2073.3%2C170.3%2074.7%2C172.8%2076.1%2C175.2%2077.5%2C177.5%2079.0%2C179.7%2080.4%2C181.8%2081.8%2C183.8%2083.2%2C185.8%2084.6%2C187.7%2086.0%2C189.5%2087.5%2C191.3%2088.9%2C192.9%2090.3%2C194.5%2091.7%2C196.0%2093.1%2C197.5%2094.6%2C198.9%2096.0%2C200.2%2097.4%2C201.5%2098.8%2C202.7%20100.2%2C203.8%20101.7%2C204.8%20103.1%2C205.9%20104.5%2C206.8%20105.9%2C207.7%20107.3%2C208.5%20108.8%2C209.3%20110.2%2C210.0%20111.6%2C210.7%20113.0%2C211.3%20114.4%2C211.9%20115.8%2C212.4%20117.3%2C212.9%20118.7%2C213.3%20120.1%2C213.7%20121.5%2C214.1%20122.9%2C214.4%20124.4%2C214.6%20125.8%2C214.9%20127.2%2C215.0%20128.6%2C215.2%20130.0%2C215.3%20131.4%2C215.4%20132.9%2C215.4%20134.3%2C215.4%20135.7%2C215.4%20137.1%2C215.3%20138.5%2C215.2%20140.0%2C215.1%20141.4%2C214.9%20142.8%2C214.8%20144.2%2C214.6%20145.6%2C214.3%20147.1%2C214.1%20148.5%2C213.8%20149.9%2C213.5%20151.3%2C213.2%20152.7%2C212.8%20154.2%2C212.5%20155.6%2C212.1%20157.0%2C211.7%20158.4%2C211.3%20159.8%2C210.9%20161.2%2C210.4%20162.7%2C210.0%20164.1%2C209.5%20165.5%2C209.0%20166.9%2C208.5%20168.3%2C208.0%20169.8%2C207.5%20171.2%2C206.9%20172.6%2C206.4%20174.0%2C205.9%20175.4%2C205.3%20176.8%2C204.8%20178.3%2C204.2%20179.7%2C203.6%20181.1%2C203.0%20182.5%2C202.5%20183.9%2C201.9%20185.4%2C201.3%20186.8%2C200.7%20188.2%2C200.1%20189.6%2C199.5%20191.0%2C199.0%20192.5%2C198.4%20193.9%2C197.8%20195.3%2C197.2%20196.7%2C196.6%20198.1%2C196.1%20199.6%2C195.5%20201.0%2C194.9%20202.4%2C194.4%20203.8%2C193.8%20205.2%2C193.3%20206.6%2C192.7%20208.1%2C192.2%20209.5%2C191.7%20210.9%2C191.1%20212.3%2C190.6%20213.7%2C190.1%20215.2%2C189.6%20216.6%2C189.2%20218.0%2C188.7%20219.4%2C188.2%20220.8%2C187.8%20222.2%2C187.3%20223.7%2C186.9%20225.1%2C186.5%20226.5%2C186.1%20227.9%2C185.7%20229.3%2C185.3%20230.8%2C185.0%20232.2%2C184.6%20233.6%2C184.3%20235.0%2C184.0%20236.4%2C183.7%20237.9%2C183.4%20239.3%2C183.1%20240.7%2C182.8%20242.1%2C182.6%20243.5%2C182.4%20244.9%2C182.2%20246.4%2C182.0%20247.8%2C181.8%20249.2%2C181.6%20250.6%2C181.5%20252.0%2C181.3%20253.5%2C181.2%20254.9%2C181.1%20256.3%2C181.1%20257.7%2C181.0%20259.1%2C181.0%20260.6%2C180.9%20262.0%2C180.9%20263.4%2C181.0%20264.8%2C181.0%20266.2%2C181.0%20267.6%2C181.1%20269.1%2C181.2%20270.5%2C181.3%20271.9%2C181.4%20273.3%2C181.5%20274.7%2C181.7%20276.2%2C181.9%20277.6%2C182.1%20279.0%2C182.3%20280.4%2C182.5%20281.8%2C182.8%20283.3%2C183.0%20284.7%2C183.3%20286.1%2C183.6%20287.5%2C183.9%20288.9%2C184.3%20290.4%2C184.6%20291.8%2C185.0%20293.2%2C185.4%20294.6%2C185.8%20296.0%2C186.2%20297.4%2C186.6%20298.9%2C187.0%20300.3%2C187.5%20301.7%2C188.0%20303.1%2C188.5%20304.5%2C189.0%20306.0%2C189.5%20307.4%2C190.1%20308.8%2C190.6%20310.2%2C191.2%20311.6%2C191.8%20313.1%2C192.4%20314.5%2C193.0%20315.9%2C193.6%20317.3%2C194.2%20318.7%2C194.9%20320.1%2C195.5%20321.6%2C196.2%20323.0%2C196.8%20324.4%2C197.5%20325.8%2C198.2%20327.2%2C198.9%20328.7%2C199.6%20330.1%2C200.4%20331.5%2C201.1%20332.9%2C201.8%20334.3%2C202.6%20335.8%2C203.3%20337.2%2C204.1%20338.6%2C204.8%20340.0%2C205.6%20341.4%2C206.4%20342.8%2C207.2%20344.3%2C207.9%20345.7%2C208.7%20347.1%2C209.5%20348.5%2C210.3%20349.9%2C211.1%20351.4%2C211.9%20352.8%2C212.6%20354.2%2C213.4%20355.6%2C214.2%20357.0%2C215.0%20358.4%2C215.8%20359.9%2C216.5%20361.3%2C217.3%20362.7%2C218.1%20364.1%2C218.8%20365.5%2C219.6%20367.0%2C220.3%20368.4%2C221.1%20369.8%2C221.8%20371.2%2C222.5%20372.6%2C223.2%20374.1%2C223.9%20375.5%2C224.6%20376.9%2C225.2%20378.3%2C225.9%20379.7%2C226.5%20381.1%2C227.2%20382.6%2C227.8%20384.0%2C228.4%20385.4%2C228.9%20386.8%2C229.5%20388.2%2C230.0%20389.7%2C230.5%20391.1%2C231.0%20392.5%2C231.5%20393.9%2C231.9%20395.3%2C232.4%20396.8%2C232.8%20398.2%2C233.1%20399.6%2C233.5%20401.0%2C233.8%20402.4%2C234.1%20403.9%2C234.3%20405.3%2C234.5%20406.7%2C234.7%20408.1%2C234.9%20409.5%2C235.0%20410.9%2C235.1%20412.4%2C235.1%20413.8%2C235.1%20415.2%2C235.1%20416.6%2C235.0%20418.0%2C234.9%20419.5%2C234.7%20420.9%2C234.5%20422.3%2C234.3%20423.7%2C234.0%20425.1%2C233.7%20426.6%2C233.3%20428.0%2C232.8%20429.4%2C232.3%20430.8%2C231.8%20432.2%2C231.2%20433.6%2C230.5%20435.1%2C229.8%20436.5%2C229.1%20437.9%2C228.2%20439.3%2C227.3%20440.7%2C226.4%20442.2%2C225.4%20443.6%2C224.3%20445.0%2C223.2%20446.4%2C222.0%20447.8%2C220.7%20449.2%2C219.3%20450.7%2C217.9%20452.1%2C216.4%20453.5%2C214.9%20454.9%2C213.2%20456.3%2C211.5%20457.8%2C209.7%20459.2%2C207.8%20460.6%2C205.9%20462.0%2C203.8%20463.4%2C201.7%20464.9%2C199.5%20466.3%2C197.2%20467.7%2C194.8%20469.1%2C192.3%20470.5%2C189.8%20471.9%2C187.1%20473.4%2C184.4%20474.8%2C181.5%20476.2%2C178.5%20477.6%2C175.5%20479.0%2C172.3%20480.5%2C169.1%20481.9%2C165.7%20483.3%2C162.3%20484.7%2C158.7%20486.1%2C155.0%20487.6%2C151.2%20489.0%2C147.3%20490.4%2C143.3%20491.8%2C139.1%20493.2%2C134.9%20494.6%2C130.5%20496.1%2C126.0%20497.5%2C121.3%20498.9%2C116.6%20500.3%2C111.7%20501.7%2C106.7%20503.2%2C101.6%20504.6%2C96.3%20506.0%2C90.9%22%20clip-path%3D%22url%28%23clip-861831%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C408.2%2053.4%2C402.3%2054.8%2C396.4%2056.3%2C390.6%2057.7%2C384.9%2059.1%2C379.3%2060.5%2C373.8%2061.9%2C368.3%2063.4%2C363.0%2064.8%2C357.7%2066.2%2C352.6%2067.6%2C347.5%2069.0%2C342.5%2070.4%2C337.5%2071.9%2C332.7%2073.3%2C327.9%2074.7%2C323.3%2076.1%2C318.7%2077.5%2C314.2%2079.0%2C309.7%2080.4%2C305.4%2081.8%2C301.1%2083.2%2C296.9%2084.6%2C292.8%2086.0%2C288.8%2087.5%2C284.8%2088.9%2C280.9%2090.3%2C277.1%2091.7%2C273.4%2093.1%2C269.7%2094.6%2C266.1%2096.0%2C262.6%2097.4%2C259.2%2098.8%2C255.8%20100.2%2C252.5%20101.7%2C249.3%20103.1%2C246.1%20104.5%2C243.0%20105.9%2C240.0%20107.3%2C237.1%20108.8%2C234.2%20110.2%2C231.4%20111.6%2C228.6%20113.0%2C226.0%20114.4%2C223.3%20115.8%2C220.8%20117.3%2C218.3%20118.7%2C215.9%20120.1%2C213.5%20121.5%2C211.2%20122.9%2C209.0%20124.4%2C206.8%20125.8%2C204.7%20127.2%2C202.6%20128.6%2C200.6%20130.0%2C198.7%20131.4%2C196.8%20132.9%2C195.0%20134.3%2C193.3%20135.7%2C191.5%20137.1%2C189.9%20138.5%2C188.3%20140.0%2C186.8%20141.4%2C185.3%20142.8%2C183.8%20144.2%2C182.5%20145.6%2C181.1%20147.1%2C179.9%20148.5%2C178.6%20149.9%2C177.5%20151.3%2C176.4%20152.7%2C175.3%20154.2%2C174.3%20155.6%2C173.3%20157.0%2C172.4%20158.4%2C171.5%20159.8%2C170.6%20161.2%2C169.8%20162.7%2C169.1%20164.1%2C168.4%20165.5%2C167.8%20166.9%2C167.1%20168.3%2C166.6%20169.8%2C166.0%20171.2%2C165.6%20172.6%2C165.1%20174.0%2C164.7%20175.4%2C164.4%20176.8%2C164.0%20178.3%2C163.7%20179.7%2C163.5%20181.1%2C163.3%20182.5%2C163.1%20183.9%2C163.0%20185.4%2C162.9%20186.8%2C162.8%20188.2%2C162.8%20189.6%2C162.8%20191.0%2C162.8%20192.5%2C162.9%20193.9%2C163.0%20195.3%2C163.1%20196.7%2C163.3%20198.1%2C163.5%20199.6%2C163.7%20201.0%2C164.0%20202.4%2C164.3%20203.8%2C164.6%20205.2%2C164.9%20206.6%2C165.3%20208.1%2C165.7%20209.5%2C166.1%20210.9%2C166.5%20212.3%2C167.0%20213.7%2C167.5%20215.2%2C168.0%20216.6%2C168.5%20218.0%2C169.1%20219.4%2C169.7%20220.8%2C170.3%20222.2%2C170.9%20223.7%2C171.6%20225.1%2C172.2%20226.5%2C172.9%20227.9%2C173.6%20229.3%2C174.3%20230.8%2C175.0%20232.2%2C175.8%20233.6%2C176.6%20235.0%2C177.3%20236.4%2C178.1%20237.9%2C178.9%20239.3%2C179.8%20240.7%2C180.6%20242.1%2C181.4%20243.5%2C182.3%20244.9%2C183.2%20246.4%2C184.0%20247.8%2C184.9%20249.2%2C185.8%20250.6%2C186.7%20252.0%2C187.6%20253.5%2C188.6%20254.9%2C189.5%20256.3%2C190.4%20257.7%2C191.4%20259.1%2C192.3%20260.6%2C193.3%20262.0%2C194.2%20263.4%2C195.2%20264.8%2C196.1%20266.2%2C197.1%20267.6%2C198.0%20269.1%2C199.0%20270.5%2C200.0%20271.9%2C200.9%20273.3%2C201.9%20274.7%2C202.9%20276.2%2C203.8%20277.6%2C204.8%20279.0%2C205.7%20280.4%2C206.7%20281.8%2C207.6%20283.3%2C208.5%20284.7%2C209.5%20286.1%2C210.4%20287.5%2C211.3%20288.9%2C212.2%20290.4%2C213.1%20291.8%2C214.0%20293.2%2C214.9%20294.6%2C215.8%20296.0%2C216.7%20297.4%2C217.5%20298.9%2C218.3%20300.3%2C219.2%20301.7%2C220.0%20303.1%2C220.8%20304.5%2C221.6%20306.0%2C222.4%20307.4%2C223.1%20308.8%2C223.9%20310.2%2C224.6%20311.6%2C225.3%20313.1%2C226.0%20314.5%2C226.7%20315.9%2C227.3%20317.3%2C228.0%20318.7%2C228.6%20320.1%2C229.2%20321.6%2C229.7%20323.0%2C230.3%20324.4%2C230.8%20325.8%2C231.3%20327.2%2C231.8%20328.7%2C232.3%20330.1%2C232.7%20331.5%2C233.1%20332.9%2C233.5%20334.3%2C233.9%20335.8%2C234.2%20337.2%2C234.5%20338.6%2C234.8%20340.0%2C235.0%20341.4%2C235.2%20342.8%2C235.4%20344.3%2C235.6%20345.7%2C235.7%20347.1%2C235.8%20348.5%2C235.8%20349.9%2C235.9%20351.4%2C235.9%20352.8%2C235.8%20354.2%2C235.8%20355.6%2C235.6%20357.0%2C235.5%20358.4%2C235.3%20359.9%2C235.1%20361.3%2C234.8%20362.7%2C234.5%20364.1%2C234.2%20365.5%2C233.8%20367.0%2C233.4%20368.4%2C232.9%20369.8%2C232.4%20371.2%2C231.9%20372.6%2C231.3%20374.1%2C230.7%20375.5%2C230.0%20376.9%2C229.3%20378.3%2C228.6%20379.7%2C227.8%20381.1%2C226.9%20382.6%2C226.0%20384.0%2C225.1%20385.4%2C224.1%20386.8%2C223.0%20388.2%2C221.9%20389.7%2C220.8%20391.1%2C219.6%20392.5%2C218.4%20393.9%2C217.1%20395.3%2C215.7%20396.8%2C214.3%20398.2%2C212.9%20399.6%2C211.4%20401.0%2C209.8%20402.4%2C208.2%20403.9%2C206.6%20405.3%2C204.8%20406.7%2C203.0%20408.1%2C201.2%20409.5%2C199.3%20410.9%2C197.4%20412.4%2C195.3%20413.8%2C193.3%20415.2%2C191.1%20416.6%2C188.9%20418.0%2C186.7%20419.5%2C184.4%20420.9%2C182.0%20422.3%2C179.5%20423.7%2C177.0%20425.1%2C174.5%20426.6%2C171.8%20428.0%2C169.1%20429.4%2C166.4%20430.8%2C163.5%20432.2%2C160.6%20433.6%2C157.6%20435.1%2C154.6%20436.5%2C151.5%20437.9%2C148.3%20439.3%2C145.1%20440.7%2C141.7%20442.2%2C138.3%20443.6%2C134.9%20445.0%2C131.3%20446.4%2C127.7%20447.8%2C124.0%20449.2%2C120.3%20450.7%2C116.5%20452.1%2C112.5%20453.5%2C108.6%20454.9%2C104.5%20456.3%2C100.4%20457.8%2C96.1%20459.2%2C91.8%20460.6%2C87.5%20462.0%2C83.0%20463.4%2C78.5%20464.9%2C73.8%20466.3%2C69.1%20467.7%2C64.4%20469.1%2C59.5%20470.5%2C54.5%20471.9%2C49.5%20473.4%2C44.4%20474.8%2C39.2%20476.2%2C33.9%20477.6%2C28.5%20479.0%2C23.1%20480.5%2C17.5%20481.9%2C11.9%20483.3%2C6.2%20484.7%2C0.3%20486.1%2C-5.6%20487.6%2C-11.6%20489.0%2C-17.7%20490.4%2C-23.8%20491.8%2C-30.1%20493.2%2C-36.5%20494.6%2C-42.9%20496.1%2C-49.5%20497.5%2C-56.1%20498.9%2C-62.9%20500.3%2C-69.7%20501.7%2C-76.6%20503.2%2C-83.7%20504.6%2C-90.8%20506.0%2C-98.0%22%20clip-path%3D%22url%28%23clip-861831%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-150",
    case_id: "MATH 11.150",
    title: "Three firms’ P′ on one shared plane",
    subsection: "11.4",
    context:
      "Three marginal-profit curves $P_1'$, $P_2'$, $P_3'$ are drawn on the **same** axes (brown, green, purple). Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, brown and purple are positive while green is negative.",
      "At $x=0$, the green curve $P_2'$ is positive.",
      "At $x=5$, brown is negative, so firm 1's profit is decreasing in output at $x=5$.",
      "The first firm to hit a zero of marginal profit when moving right from $x=0$ is not necessarily firm 1.",
      "If at some $x$ one curve is above another and both are positive, that firm has the larger instantaneous profit gain per unit."
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=0$ on the shared axes, Brown and purple start above the axis; green starts at about $-1$.

So the statement is True.`,
      `**B.** → False

At $x=0$ on the shared axes, From the figure, green starts below the axis at $x=0$ (near height $-1$).

So the statement is False.`,
      `**C.** → True

Wherever the plotted derivative stays below the axis, $f'$ is negative and $f$ is decreasing. Brown crosses near $x=4$ and is negative afterward, including at $x=5$.

So the statement is True.`,
      `**D.** → True

Different zero locations mean different first sign changes when moving right from $x=0$.

So the statement is True.`,
      `**E.** → True

Compare heights on the shared vertical scale. The value of $P'$ is the instantaneous rate.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 150,
    solution_overview:
      "Compare three $P'$ graphs on shared axes at concrete $x$-values; watch firm 2 near $x=0$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EThree%20marginal-profit%20curves%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-1826638%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%2244%22%20x2%3D%22116.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%2244%22%20x2%3D%22181.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%2244%22%20x2%3D%22246.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%2244%22%20x2%3D%22311.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%2244%22%20x2%3D%22376.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%2244%22%20x2%3D%22441.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22506%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22506%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%22344%22%20x2%3D%22116.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22116.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%22344%22%20x2%3D%22181.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22181.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%22344%22%20x2%3D%22246.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22246.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%22344%22%20x2%3D%22311.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22311.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%22344%22%20x2%3D%22376.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%22344%22%20x2%3D%22441.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E7%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C44.0%2053.4%2C46.6%2054.8%2C49.2%2056.3%2C51.7%2057.7%2C54.3%2059.1%2C56.8%2060.5%2C59.2%2061.9%2C61.7%2063.4%2C64.1%2064.8%2C66.5%2066.2%2C68.9%2067.6%2C71.2%2069.0%2C73.5%2070.4%2C75.8%2071.9%2C78.1%2073.3%2C80.3%2074.7%2C82.5%2076.1%2C84.7%2077.5%2C86.9%2079.0%2C89.0%2080.4%2C91.2%2081.8%2C93.3%2083.2%2C95.3%2084.6%2C97.4%2086.0%2C99.4%2087.5%2C101.4%2088.9%2C103.4%2090.3%2C105.4%2091.7%2C107.3%2093.1%2C109.2%2094.6%2C111.1%2096.0%2C113.0%2097.4%2C114.9%2098.8%2C116.7%20100.2%2C118.5%20101.7%2C120.3%20103.1%2C122.1%20104.5%2C123.8%20105.9%2C125.6%20107.3%2C127.3%20108.8%2C129.0%20110.2%2C130.6%20111.6%2C132.3%20113.0%2C133.9%20114.4%2C135.6%20115.8%2C137.2%20117.3%2C138.7%20118.7%2C140.3%20120.1%2C141.9%20121.5%2C143.4%20122.9%2C144.9%20124.4%2C146.4%20125.8%2C147.9%20127.2%2C149.3%20128.6%2C150.8%20130.0%2C152.2%20131.4%2C153.6%20132.9%2C155.0%20134.3%2C156.4%20135.7%2C157.8%20137.1%2C159.1%20138.5%2C160.5%20140.0%2C161.8%20141.4%2C163.1%20142.8%2C164.4%20144.2%2C165.6%20145.6%2C166.9%20147.1%2C168.1%20148.5%2C169.4%20149.9%2C170.6%20151.3%2C171.8%20152.7%2C173.0%20154.2%2C174.1%20155.6%2C175.3%20157.0%2C176.4%20158.4%2C177.6%20159.8%2C178.7%20161.2%2C179.8%20162.7%2C180.9%20164.1%2C182.0%20165.5%2C183.0%20166.9%2C184.1%20168.3%2C185.1%20169.8%2C186.1%20171.2%2C187.2%20172.6%2C188.2%20174.0%2C189.2%20175.4%2C190.1%20176.9%2C191.1%20178.3%2C192.1%20179.7%2C193.0%20181.1%2C193.9%20182.5%2C194.9%20183.9%2C195.8%20185.4%2C196.7%20186.8%2C197.6%20188.2%2C198.4%20189.6%2C199.3%20191.0%2C200.2%20192.5%2C201.0%20193.9%2C201.9%20195.3%2C202.7%20196.7%2C203.5%20198.1%2C204.3%20199.6%2C205.1%20201.0%2C205.9%20202.4%2C206.7%20203.8%2C207.4%20205.2%2C208.2%20206.6%2C208.9%20208.1%2C209.7%20209.5%2C210.4%20210.9%2C211.1%20212.3%2C211.8%20213.7%2C212.5%20215.2%2C213.2%20216.6%2C213.9%20218.0%2C214.6%20219.4%2C215.3%20220.8%2C215.9%20222.2%2C216.6%20223.7%2C217.2%20225.1%2C217.8%20226.5%2C218.5%20227.9%2C219.1%20229.3%2C219.7%20230.8%2C220.3%20232.2%2C220.9%20233.6%2C221.5%20235.0%2C222.1%20236.4%2C222.6%20237.9%2C223.2%20239.3%2C223.8%20240.7%2C224.3%20242.1%2C224.8%20243.5%2C225.4%20244.9%2C225.9%20246.4%2C226.4%20247.8%2C226.9%20249.2%2C227.5%20250.6%2C228.0%20252.0%2C228.4%20253.5%2C228.9%20254.9%2C229.4%20256.3%2C229.9%20257.7%2C230.4%20259.1%2C230.8%20260.6%2C231.3%20262.0%2C231.7%20263.4%2C232.2%20264.8%2C232.6%20266.2%2C233.0%20267.6%2C233.5%20269.1%2C233.9%20270.5%2C234.3%20271.9%2C234.7%20273.3%2C235.1%20274.7%2C235.5%20276.2%2C235.9%20277.6%2C236.3%20279.0%2C236.7%20280.4%2C237.0%20281.8%2C237.4%20283.3%2C237.8%20284.7%2C238.1%20286.1%2C238.5%20287.5%2C238.8%20288.9%2C239.2%20290.4%2C239.5%20291.8%2C239.8%20293.2%2C240.2%20294.6%2C240.5%20296.0%2C240.8%20297.4%2C241.1%20298.9%2C241.4%20300.3%2C241.7%20301.7%2C242.1%20303.1%2C242.3%20304.5%2C242.6%20306.0%2C242.9%20307.4%2C243.2%20308.8%2C243.5%20310.2%2C243.8%20311.6%2C244.0%20313.1%2C244.3%20314.5%2C244.6%20315.9%2C244.8%20317.3%2C245.1%20318.7%2C245.3%20320.1%2C245.6%20321.6%2C245.8%20323.0%2C246.1%20324.4%2C246.3%20325.8%2C246.5%20327.2%2C246.8%20328.7%2C247.0%20330.1%2C247.2%20331.5%2C247.4%20332.9%2C247.6%20334.3%2C247.8%20335.8%2C248.1%20337.2%2C248.3%20338.6%2C248.5%20340.0%2C248.7%20341.4%2C248.9%20342.8%2C249.0%20344.3%2C249.2%20345.7%2C249.4%20347.1%2C249.6%20348.5%2C249.8%20349.9%2C249.9%20351.4%2C250.1%20352.8%2C250.3%20354.2%2C250.5%20355.6%2C250.6%20357.0%2C250.8%20358.4%2C250.9%20359.9%2C251.1%20361.3%2C251.2%20362.7%2C251.4%20364.1%2C251.5%20365.5%2C251.7%20367.0%2C251.8%20368.4%2C252.0%20369.8%2C252.1%20371.2%2C252.2%20372.6%2C252.4%20374.1%2C252.5%20375.5%2C252.6%20376.9%2C252.7%20378.3%2C252.9%20379.7%2C253.0%20381.1%2C253.1%20382.6%2C253.2%20384.0%2C253.3%20385.4%2C253.4%20386.8%2C253.5%20388.2%2C253.6%20389.7%2C253.8%20391.1%2C253.9%20392.5%2C254.0%20393.9%2C254.0%20395.3%2C254.1%20396.8%2C254.2%20398.2%2C254.3%20399.6%2C254.4%20401.0%2C254.5%20402.4%2C254.6%20403.9%2C254.7%20405.3%2C254.8%20406.7%2C254.8%20408.1%2C254.9%20409.5%2C255.0%20410.9%2C255.1%20412.4%2C255.1%20413.8%2C255.2%20415.2%2C255.3%20416.6%2C255.3%20418.0%2C255.4%20419.5%2C255.5%20420.9%2C255.5%20422.3%2C255.6%20423.7%2C255.6%20425.1%2C255.7%20426.6%2C255.8%20428.0%2C255.8%20429.4%2C255.9%20430.8%2C255.9%20432.2%2C256.0%20433.6%2C256.0%20435.1%2C256.1%20436.5%2C256.1%20437.9%2C256.2%20439.3%2C256.2%20440.7%2C256.2%20442.2%2C256.3%20443.6%2C256.3%20445.0%2C256.3%20446.4%2C256.4%20447.8%2C256.4%20449.2%2C256.5%20450.7%2C256.5%20452.1%2C256.5%20453.5%2C256.5%20454.9%2C256.6%20456.3%2C256.6%20457.8%2C256.6%20459.2%2C256.7%20460.6%2C256.7%20462.0%2C256.7%20463.4%2C256.7%20464.9%2C256.7%20466.3%2C256.8%20467.7%2C256.8%20469.1%2C256.8%20470.5%2C256.8%20471.9%2C256.8%20473.4%2C256.8%20474.8%2C256.9%20476.2%2C256.9%20477.6%2C256.9%20479.0%2C256.9%20480.5%2C256.9%20481.9%2C256.9%20483.3%2C256.9%20484.7%2C256.9%20486.1%2C256.9%20487.6%2C256.9%20489.0%2C256.9%20490.4%2C257.0%20491.8%2C257.0%20493.2%2C257.0%20494.6%2C257.0%20496.1%2C257.0%20497.5%2C257.0%20498.9%2C257.0%20500.3%2C257.0%20501.7%2C257.0%20503.2%2C257.0%20504.6%2C256.9%20506.0%2C256.9%22%20clip-path%3D%22url%28%23clip-1826638%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C294.0%2053.4%2C291.3%2054.8%2C288.6%2056.3%2C285.9%2057.7%2C283.3%2059.1%2C280.6%2060.5%2C278.0%2061.9%2C275.4%2063.4%2C272.9%2064.8%2C270.4%2066.2%2C267.9%2067.6%2C265.4%2069.0%2C262.9%2070.4%2C260.5%2071.9%2C258.1%2073.3%2C255.7%2074.7%2C253.3%2076.1%2C251.0%2077.5%2C248.7%2079.0%2C246.4%2080.4%2C244.1%2081.8%2C241.9%2083.2%2C239.6%2084.6%2C237.4%2086.0%2C235.3%2087.5%2C233.1%2088.9%2C231.0%2090.3%2C228.9%2091.7%2C226.8%2093.1%2C224.8%2094.6%2C222.7%2096.0%2C220.7%2097.4%2C218.8%2098.8%2C216.8%20100.2%2C214.9%20101.7%2C213.0%20103.1%2C211.1%20104.5%2C209.2%20105.9%2C207.4%20107.3%2C205.6%20108.8%2C203.8%20110.2%2C202.0%20111.6%2C200.3%20113.0%2C198.5%20114.4%2C196.8%20115.8%2C195.2%20117.3%2C193.5%20118.7%2C191.9%20120.1%2C190.3%20121.5%2C188.7%20122.9%2C187.2%20124.4%2C185.7%20125.8%2C184.2%20127.2%2C182.7%20128.6%2C181.2%20130.0%2C179.8%20131.4%2C178.4%20132.9%2C177.0%20134.3%2C175.6%20135.7%2C174.3%20137.1%2C173.0%20138.5%2C171.7%20140.0%2C170.5%20141.4%2C169.2%20142.8%2C168.0%20144.2%2C166.8%20145.6%2C165.6%20147.1%2C164.5%20148.5%2C163.4%20149.9%2C162.3%20151.3%2C161.2%20152.7%2C160.2%20154.2%2C159.1%20155.6%2C158.1%20157.0%2C157.2%20158.4%2C156.2%20159.8%2C155.3%20161.2%2C154.4%20162.7%2C153.5%20164.1%2C152.6%20165.5%2C151.8%20166.9%2C151.0%20168.3%2C150.2%20169.8%2C149.5%20171.2%2C148.7%20172.6%2C148.0%20174.0%2C147.3%20175.4%2C146.7%20176.9%2C146.0%20178.3%2C145.4%20179.7%2C144.8%20181.1%2C144.2%20182.5%2C143.7%20183.9%2C143.2%20185.4%2C142.7%20186.8%2C142.2%20188.2%2C141.8%20189.6%2C141.3%20191.0%2C140.9%20192.5%2C140.5%20193.9%2C140.2%20195.3%2C139.9%20196.7%2C139.6%20198.1%2C139.3%20199.6%2C139.0%20201.0%2C138.8%20202.4%2C138.6%20203.8%2C138.4%20205.2%2C138.2%20206.6%2C138.1%20208.1%2C138.0%20209.5%2C137.9%20210.9%2C137.8%20212.3%2C137.8%20213.7%2C137.8%20215.2%2C137.8%20216.6%2C137.8%20218.0%2C137.8%20219.4%2C137.9%20220.8%2C138.0%20222.2%2C138.1%20223.7%2C138.3%20225.1%2C138.5%20226.5%2C138.7%20227.9%2C138.9%20229.3%2C139.1%20230.8%2C139.4%20232.2%2C139.7%20233.6%2C140.0%20235.0%2C140.3%20236.4%2C140.7%20237.9%2C141.1%20239.3%2C141.5%20240.7%2C141.9%20242.1%2C142.4%20243.5%2C142.9%20244.9%2C143.4%20246.4%2C143.9%20247.8%2C144.5%20249.2%2C145.1%20250.6%2C145.7%20252.0%2C146.3%20253.5%2C146.9%20254.9%2C147.6%20256.3%2C148.3%20257.7%2C149.0%20259.1%2C149.8%20260.6%2C150.6%20262.0%2C151.3%20263.4%2C152.2%20264.8%2C153.0%20266.2%2C153.9%20267.6%2C154.8%20269.1%2C155.7%20270.5%2C156.6%20271.9%2C157.6%20273.3%2C158.6%20274.7%2C159.6%20276.2%2C160.6%20277.6%2C161.7%20279.0%2C162.8%20280.4%2C163.9%20281.8%2C165.0%20283.3%2C166.1%20284.7%2C167.3%20286.1%2C168.5%20287.5%2C169.7%20288.9%2C171.0%20290.4%2C172.3%20291.8%2C173.6%20293.2%2C174.9%20294.6%2C176.2%20296.0%2C177.6%20297.4%2C179.0%20298.9%2C180.4%20300.3%2C181.8%20301.7%2C183.3%20303.1%2C184.8%20304.5%2C186.3%20306.0%2C187.8%20307.4%2C189.4%20308.8%2C191.0%20310.2%2C192.6%20311.6%2C194.2%20313.1%2C195.9%20314.5%2C197.6%20315.9%2C199.3%20317.3%2C201.0%20318.7%2C202.8%20320.1%2C204.5%20321.6%2C206.3%20323.0%2C208.2%20324.4%2C210.0%20325.8%2C211.9%20327.2%2C213.8%20328.7%2C215.7%20330.1%2C217.6%20331.5%2C219.6%20332.9%2C221.6%20334.3%2C223.6%20335.8%2C225.6%20337.2%2C227.7%20338.6%2C229.8%20340.0%2C231.9%20341.4%2C234.0%20342.8%2C236.2%20344.3%2C238.4%20345.7%2C240.6%20347.1%2C242.8%20348.5%2C245.1%20349.9%2C247.3%20351.4%2C249.6%20352.8%2C252.0%20354.2%2C254.3%20355.6%2C256.7%20357.0%2C259.1%20358.4%2C261.5%20359.9%2C264.0%20361.3%2C266.4%20362.7%2C268.9%20364.1%2C271.4%20365.5%2C274.0%20367.0%2C276.5%20368.4%2C279.1%20369.8%2C281.8%20371.2%2C284.4%20372.6%2C287.0%20374.1%2C289.7%20375.5%2C292.4%20376.9%2C295.2%20378.3%2C297.9%20379.7%2C300.7%20381.1%2C303.5%20382.6%2C306.3%20384.0%2C309.2%20385.4%2C312.1%20386.8%2C315.0%20388.2%2C317.9%20389.7%2C320.8%20391.1%2C323.8%20392.5%2C326.8%20393.9%2C329.8%20395.3%2C332.9%20396.8%2C335.9%20398.2%2C339.0%20399.6%2C342.2%20401.0%2C345.3%20402.4%2C348.5%20403.9%2C351.6%20405.3%2C354.9%20406.7%2C358.1%20408.1%2C361.3%20409.5%2C364.6%20410.9%2C367.9%20412.4%2C371.3%20413.8%2C374.6%20415.2%2C378.0%20416.6%2C381.4%20418.0%2C384.8%20419.5%2C388.3%20420.9%2C391.8%20422.3%2C395.3%20423.7%2C398.8%20425.1%2C402.3%20426.6%2C405.9%20428.0%2C409.5%20429.4%2C413.1%20430.8%2C416.7%20432.2%2C420.4%20433.6%2C424.1%20435.1%2C427.8%20436.5%2C431.6%20437.9%2C435.3%20439.3%2C439.1%20440.7%2C442.9%20442.2%2C446.7%20443.6%2C450.6%20445.0%2C454.5%20446.4%2C458.4%20447.8%2C462.3%20449.2%2C466.3%20450.7%2C470.2%20452.1%2C474.2%20453.5%2C478.3%20454.9%2C482.3%20456.3%2C486.4%20457.8%2C490.5%20459.2%2C494.6%20460.6%2C498.7%20462.0%2C502.9%20463.4%2C507.1%20464.9%2C511.3%20466.3%2C515.6%20467.7%2C519.8%20469.1%2C524.1%20470.5%2C528.4%20471.9%2C532.8%20473.4%2C537.1%20474.8%2C541.5%20476.2%2C545.9%20477.6%2C550.3%20479.0%2C554.8%20480.5%2C559.3%20481.9%2C563.8%20483.3%2C568.3%20484.7%2C572.9%20486.1%2C577.4%20487.6%2C582.0%20489.0%2C586.7%20490.4%2C591.3%20491.8%2C596.0%20493.2%2C600.7%20494.6%2C605.4%20496.1%2C610.1%20497.5%2C614.9%20498.9%2C619.7%20500.3%2C624.5%20501.7%2C629.3%20503.2%2C634.2%20504.6%2C639.1%20506.0%2C644.0%22%20clip-path%3D%22url%28%23clip-1826638%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C84.0%2053.4%2C86.0%2054.8%2C88.1%2056.3%2C90.1%2057.7%2C92.1%2059.1%2C94.0%2060.5%2C96.0%2061.9%2C97.9%2063.4%2C99.9%2064.8%2C101.8%2066.2%2C103.7%2067.6%2C105.5%2069.0%2C107.4%2070.4%2C109.3%2071.9%2C111.1%2073.3%2C112.9%2074.7%2C114.7%2076.1%2C116.5%2077.5%2C118.2%2079.0%2C120.0%2080.4%2C121.7%2081.8%2C123.5%2083.2%2C125.2%2084.6%2C126.9%2086.0%2C128.5%2087.5%2C130.2%2088.9%2C131.9%2090.3%2C133.5%2091.7%2C135.1%2093.1%2C136.7%2094.6%2C138.3%2096.0%2C139.9%2097.4%2C141.5%2098.8%2C143.0%20100.2%2C144.6%20101.7%2C146.1%20103.1%2C147.6%20104.5%2C149.1%20105.9%2C150.6%20107.3%2C152.1%20108.8%2C153.5%20110.2%2C155.0%20111.6%2C156.4%20113.0%2C157.8%20114.4%2C159.3%20115.8%2C160.7%20117.3%2C162.0%20118.7%2C163.4%20120.1%2C164.8%20121.5%2C166.1%20122.9%2C167.5%20124.4%2C168.8%20125.8%2C170.1%20127.2%2C171.4%20128.6%2C172.7%20130.0%2C174.0%20131.4%2C175.3%20132.9%2C176.5%20134.3%2C177.8%20135.7%2C179.0%20137.1%2C180.2%20138.5%2C181.4%20140.0%2C182.6%20141.4%2C183.8%20142.8%2C185.0%20144.2%2C186.2%20145.6%2C187.3%20147.1%2C188.5%20148.5%2C189.6%20149.9%2C190.8%20151.3%2C191.9%20152.7%2C193.0%20154.2%2C194.1%20155.6%2C195.2%20157.0%2C196.2%20158.4%2C197.3%20159.8%2C198.4%20161.2%2C199.4%20162.7%2C200.5%20164.1%2C201.5%20165.5%2C202.5%20166.9%2C203.5%20168.3%2C204.5%20169.8%2C205.5%20171.2%2C206.5%20172.6%2C207.5%20174.0%2C208.4%20175.4%2C209.4%20176.9%2C210.3%20178.3%2C211.3%20179.7%2C212.2%20181.1%2C213.1%20182.5%2C214.0%20183.9%2C214.9%20185.4%2C215.8%20186.8%2C216.7%20188.2%2C217.6%20189.6%2C218.5%20191.0%2C219.3%20192.5%2C220.2%20193.9%2C221.0%20195.3%2C221.9%20196.7%2C222.7%20198.1%2C223.5%20199.6%2C224.3%20201.0%2C225.1%20202.4%2C225.9%20203.8%2C226.7%20205.2%2C227.5%20206.6%2C228.3%20208.1%2C229.0%20209.5%2C229.8%20210.9%2C230.5%20212.3%2C231.3%20213.7%2C232.0%20215.2%2C232.8%20216.6%2C233.5%20218.0%2C234.2%20219.4%2C234.9%20220.8%2C235.6%20222.2%2C236.3%20223.7%2C237.0%20225.1%2C237.7%20226.5%2C238.3%20227.9%2C239.0%20229.3%2C239.7%20230.8%2C240.3%20232.2%2C241.0%20233.6%2C241.6%20235.0%2C242.3%20236.4%2C242.9%20237.9%2C243.5%20239.3%2C244.1%20240.7%2C244.7%20242.1%2C245.3%20243.5%2C245.9%20244.9%2C246.5%20246.4%2C247.1%20247.8%2C247.7%20249.2%2C248.3%20250.6%2C248.8%20252.0%2C249.4%20253.5%2C249.9%20254.9%2C250.5%20256.3%2C251.0%20257.7%2C251.6%20259.1%2C252.1%20260.6%2C252.6%20262.0%2C253.2%20263.4%2C253.7%20264.8%2C254.2%20266.2%2C254.7%20267.6%2C255.2%20269.1%2C255.7%20270.5%2C256.2%20271.9%2C256.7%20273.3%2C257.1%20274.7%2C257.6%20276.2%2C258.1%20277.6%2C258.5%20279.0%2C259.0%20280.4%2C259.5%20281.8%2C259.9%20283.3%2C260.3%20284.7%2C260.8%20286.1%2C261.2%20287.5%2C261.6%20288.9%2C262.1%20290.4%2C262.5%20291.8%2C262.9%20293.2%2C263.3%20294.6%2C263.7%20296.0%2C264.1%20297.4%2C264.5%20298.9%2C264.9%20300.3%2C265.3%20301.7%2C265.7%20303.1%2C266.1%20304.5%2C266.4%20306.0%2C266.8%20307.4%2C267.2%20308.8%2C267.5%20310.2%2C267.9%20311.6%2C268.2%20313.1%2C268.6%20314.5%2C268.9%20315.9%2C269.3%20317.3%2C269.6%20318.7%2C270.0%20320.1%2C270.3%20321.6%2C270.6%20323.0%2C270.9%20324.4%2C271.2%20325.8%2C271.6%20327.2%2C271.9%20328.7%2C272.2%20330.1%2C272.5%20331.5%2C272.8%20332.9%2C273.1%20334.3%2C273.4%20335.8%2C273.7%20337.2%2C273.9%20338.6%2C274.2%20340.0%2C274.5%20341.4%2C274.8%20342.8%2C275.0%20344.3%2C275.3%20345.7%2C275.6%20347.1%2C275.8%20348.5%2C276.1%20349.9%2C276.3%20351.4%2C276.6%20352.8%2C276.8%20354.2%2C277.1%20355.6%2C277.3%20357.0%2C277.6%20358.4%2C277.8%20359.9%2C278.0%20361.3%2C278.3%20362.7%2C278.5%20364.1%2C278.7%20365.5%2C278.9%20367.0%2C279.1%20368.4%2C279.4%20369.8%2C279.6%20371.2%2C279.8%20372.6%2C280.0%20374.1%2C280.2%20375.5%2C280.4%20376.9%2C280.6%20378.3%2C280.8%20379.7%2C281.0%20381.1%2C281.1%20382.6%2C281.3%20384.0%2C281.5%20385.4%2C281.7%20386.8%2C281.9%20388.2%2C282.0%20389.7%2C282.2%20391.1%2C282.4%20392.5%2C282.6%20393.9%2C282.7%20395.3%2C282.9%20396.8%2C283.0%20398.2%2C283.2%20399.6%2C283.3%20401.0%2C283.5%20402.4%2C283.6%20403.9%2C283.8%20405.3%2C283.9%20406.7%2C284.1%20408.1%2C284.2%20409.5%2C284.4%20410.9%2C284.5%20412.4%2C284.6%20413.8%2C284.8%20415.2%2C284.9%20416.6%2C285.0%20418.0%2C285.1%20419.5%2C285.3%20420.9%2C285.4%20422.3%2C285.5%20423.7%2C285.6%20425.1%2C285.7%20426.6%2C285.8%20428.0%2C286.0%20429.4%2C286.1%20430.8%2C286.2%20432.2%2C286.3%20433.6%2C286.4%20435.1%2C286.5%20436.5%2C286.6%20437.9%2C286.7%20439.3%2C286.8%20440.7%2C286.9%20442.2%2C287.0%20443.6%2C287.0%20445.0%2C287.1%20446.4%2C287.2%20447.8%2C287.3%20449.2%2C287.4%20450.7%2C287.5%20452.1%2C287.5%20453.5%2C287.6%20454.9%2C287.7%20456.3%2C287.8%20457.8%2C287.8%20459.2%2C287.9%20460.6%2C288.0%20462.0%2C288.0%20463.4%2C288.1%20464.9%2C288.2%20466.3%2C288.2%20467.7%2C288.3%20469.1%2C288.4%20470.5%2C288.4%20471.9%2C288.5%20473.4%2C288.5%20474.8%2C288.6%20476.2%2C288.6%20477.6%2C288.7%20479.0%2C288.7%20480.5%2C288.8%20481.9%2C288.8%20483.3%2C288.9%20484.7%2C288.9%20486.1%2C289.0%20487.6%2C289.0%20489.0%2C289.0%20490.4%2C289.1%20491.8%2C289.1%20493.2%2C289.1%20494.6%2C289.2%20496.1%2C289.2%20497.5%2C289.2%20498.9%2C289.3%20500.3%2C289.3%20501.7%2C289.3%20503.2%2C289.4%20504.6%2C289.4%20506.0%2C289.4%22%20clip-path%3D%22url%28%23clip-1826638%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-151",
    case_id: "MATH 11.151",
    title: "Compare f′ and g′ at numbered x-values",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $g'$ on one plane. Decide TRUE or FALSE.",
    statements: [
      "Brown has zeros at $x=1$ and $x=3$; green has zeros at $x=2$ and $x=5$.",
      "At $x=0$, both $f'(0)$ and $g'(0)$ are positive, and $g'(0)>f'(0)$.",
      "At $x=2.5$, brown is negative while green is also negative.",
      "On $(3,5)$, brown is positive while green is negative: $f$ increases and $g$ decreases there.",
      "Equal numbers of zeros imply $\\max f = \\max g$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Read the four marked-style crossings off the shared axis.

So the statement is True.`,
      `**B.** → True

From the figure at $x=0$, both curves are above the axis and green sits higher than brown.

So the statement is True.`,
      `**C.** → True

At $x=2.5$ on the shared axes, At $x=2.5$: brown is in $(1,3)$ (negative); green is in $(2,5)$ (negative).

So the statement is True.`,
      `**D.** → True

After $x=3$, brown is positive; green stays negative until $x=5$.

So the statement is True.`,
      `**E.** → False

Critical-point counts do not equate function values.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 151,
    solution_overview:
      "Coordinate-by-coordinate comparison of two first-derivative graphs on one plane.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20g%E2%80%B2%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-603618%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%2244%22%20x2%3D%22116.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%2244%22%20x2%3D%22181.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%2244%22%20x2%3D%22246.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%2244%22%20x2%3D%22311.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%2244%22%20x2%3D%22376.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%2244%22%20x2%3D%22441.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22301.1%22%20x2%3D%22506%22%20y2%3D%22301.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22215.4%22%20x2%3D%22506%22%20y2%3D%22215.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22129.7%22%20x2%3D%22506%22%20y2%3D%22129.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22215.4%22%20x2%3D%22506%22%20y2%3D%22215.4%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22116.9%22%20y1%3D%22344%22%20x2%3D%22116.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22116.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22181.7%22%20y1%3D%22344%22%20x2%3D%22181.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22181.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22246.6%22%20y1%3D%22344%22%20x2%3D%22246.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22246.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22311.4%22%20y1%3D%22344%22%20x2%3D%22311.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22311.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22376.3%22%20y1%3D%22344%22%20x2%3D%22376.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22376.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22441.1%22%20y1%3D%22344%22%20x2%3D%22441.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22441.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E7%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22301.1%22%20x2%3D%2252%22%20y2%3D%22301.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22305.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22215.4%22%20x2%3D%2252%22%20y2%3D%22215.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22219.4%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22129.7%22%20x2%3D%2252%22%20y2%3D%22129.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22133.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C86.9%2053.4%2C91.1%2054.8%2C95.3%2056.3%2C99.5%2057.7%2C103.5%2059.1%2C107.5%2060.5%2C111.4%2061.9%2C115.2%2063.4%2C119.0%2064.8%2C122.7%2066.2%2C126.3%2067.6%2C129.8%2069.0%2C133.3%2070.4%2C136.7%2071.9%2C140.1%2073.3%2C143.4%2074.7%2C146.6%2076.1%2C149.8%2077.5%2C152.8%2079.0%2C155.9%2080.4%2C158.8%2081.8%2C161.7%2083.2%2C164.6%2084.6%2C167.3%2086.0%2C170.1%2087.5%2C172.7%2088.9%2C175.3%2090.3%2C177.9%2091.7%2C180.4%2093.1%2C182.8%2094.6%2C185.1%2096.0%2C187.5%2097.4%2C189.7%2098.8%2C191.9%20100.2%2C194.1%20101.7%2C196.2%20103.1%2C198.2%20104.5%2C200.2%20105.9%2C202.1%20107.3%2C204.0%20108.8%2C205.9%20110.2%2C207.7%20111.6%2C209.4%20113.0%2C211.1%20114.4%2C212.7%20115.8%2C214.3%20117.3%2C215.9%20118.7%2C217.4%20120.1%2C218.8%20121.5%2C220.2%20122.9%2C221.6%20124.4%2C222.9%20125.8%2C224.2%20127.2%2C225.4%20128.6%2C226.6%20130.0%2C227.7%20131.4%2C228.8%20132.9%2C229.9%20134.3%2C230.9%20135.7%2C231.9%20137.1%2C232.8%20138.5%2C233.7%20140.0%2C234.6%20141.4%2C235.4%20142.8%2C236.2%20144.2%2C236.9%20145.6%2C237.6%20147.1%2C238.3%20148.5%2C238.9%20149.9%2C239.5%20151.3%2C240.0%20152.7%2C240.6%20154.2%2C241.1%20155.6%2C241.5%20157.0%2C241.9%20158.4%2C242.3%20159.8%2C242.7%20161.2%2C243.0%20162.7%2C243.3%20164.1%2C243.5%20165.5%2C243.7%20166.9%2C243.9%20168.3%2C244.1%20169.8%2C244.2%20171.2%2C244.3%20172.6%2C244.4%20174.0%2C244.4%20175.4%2C244.4%20176.9%2C244.4%20178.3%2C244.4%20179.7%2C244.3%20181.1%2C244.2%20182.5%2C244.1%20183.9%2C243.9%20185.4%2C243.7%20186.8%2C243.5%20188.2%2C243.3%20189.6%2C243.0%20191.0%2C242.8%20192.5%2C242.5%20193.9%2C242.1%20195.3%2C241.8%20196.7%2C241.4%20198.1%2C241.0%20199.6%2C240.6%20201.0%2C240.1%20202.4%2C239.6%20203.8%2C239.2%20205.2%2C238.6%20206.6%2C238.1%20208.1%2C237.5%20209.5%2C237.0%20210.9%2C236.4%20212.3%2C235.7%20213.7%2C235.1%20215.2%2C234.5%20216.6%2C233.8%20218.0%2C233.1%20219.4%2C232.4%20220.8%2C231.6%20222.2%2C230.9%20223.7%2C230.1%20225.1%2C229.3%20226.5%2C228.5%20227.9%2C227.7%20229.3%2C226.9%20230.8%2C226.0%20232.2%2C225.1%20233.6%2C224.2%20235.0%2C223.3%20236.4%2C222.4%20237.9%2C221.5%20239.3%2C220.5%20240.7%2C219.6%20242.1%2C218.6%20243.5%2C217.6%20244.9%2C216.6%20246.4%2C215.6%20247.8%2C214.5%20249.2%2C213.5%20250.6%2C212.4%20252.0%2C211.4%20253.5%2C210.3%20254.9%2C209.2%20256.3%2C208.1%20257.7%2C206.9%20259.1%2C205.8%20260.6%2C204.7%20262.0%2C203.5%20263.4%2C202.3%20264.8%2C201.2%20266.2%2C200.0%20267.6%2C198.8%20269.1%2C197.6%20270.5%2C196.3%20271.9%2C195.1%20273.3%2C193.9%20274.7%2C192.6%20276.2%2C191.4%20277.6%2C190.1%20279.0%2C188.8%20280.4%2C187.5%20281.8%2C186.2%20283.3%2C184.9%20284.7%2C183.6%20286.1%2C182.3%20287.5%2C181.0%20288.9%2C179.7%20290.4%2C178.3%20291.8%2C177.0%20293.2%2C175.6%20294.6%2C174.3%20296.0%2C172.9%20297.4%2C171.5%20298.9%2C170.1%20300.3%2C168.8%20301.7%2C167.4%20303.1%2C166.0%20304.5%2C164.6%20306.0%2C163.1%20307.4%2C161.7%20308.8%2C160.3%20310.2%2C158.9%20311.6%2C157.5%20313.1%2C156.0%20314.5%2C154.6%20315.9%2C153.1%20317.3%2C151.7%20318.7%2C150.2%20320.1%2C148.8%20321.6%2C147.3%20323.0%2C145.8%20324.4%2C144.4%20325.8%2C142.9%20327.2%2C141.4%20328.7%2C140.0%20330.1%2C138.5%20331.5%2C137.0%20332.9%2C135.5%20334.3%2C134.0%20335.8%2C132.5%20337.2%2C131.0%20338.6%2C129.5%20340.0%2C128.0%20341.4%2C126.5%20342.8%2C125.0%20344.3%2C123.5%20345.7%2C122.0%20347.1%2C120.5%20348.5%2C119.0%20349.9%2C117.5%20351.4%2C116.0%20352.8%2C114.5%20354.2%2C112.9%20355.6%2C111.4%20357.0%2C109.9%20358.4%2C108.4%20359.9%2C106.9%20361.3%2C105.4%20362.7%2C103.8%20364.1%2C102.3%20365.5%2C100.8%20367.0%2C99.3%20368.4%2C97.8%20369.8%2C96.2%20371.2%2C94.7%20372.6%2C93.2%20374.1%2C91.7%20375.5%2C90.2%20376.9%2C88.6%20378.3%2C87.1%20379.7%2C85.6%20381.1%2C84.1%20382.6%2C82.6%20384.0%2C81.1%20385.4%2C79.6%20386.8%2C78.0%20388.2%2C76.5%20389.7%2C75.0%20391.1%2C73.5%20392.5%2C72.0%20393.9%2C70.5%20395.3%2C69.0%20396.8%2C67.5%20398.2%2C66.0%20399.6%2C64.5%20401.0%2C63.0%20402.4%2C61.5%20403.9%2C60.0%20405.3%2C58.5%20406.7%2C57.1%20408.1%2C55.6%20409.5%2C54.1%20410.9%2C52.6%20412.4%2C51.1%20413.8%2C49.7%20415.2%2C48.2%20416.6%2C46.7%20418.0%2C45.3%20419.5%2C43.8%20420.9%2C42.3%20422.3%2C40.9%20423.7%2C39.4%20425.1%2C38.0%20426.6%2C36.5%20428.0%2C35.1%20429.4%2C33.6%20430.8%2C32.2%20432.2%2C30.7%20433.6%2C29.3%20435.1%2C27.9%20436.5%2C26.5%20437.9%2C25.0%20439.3%2C23.6%20440.7%2C22.2%20442.2%2C20.8%20443.6%2C19.4%20445.0%2C18.0%20446.4%2C16.6%20447.8%2C15.2%20449.2%2C13.8%20450.7%2C12.4%20452.1%2C11.0%20453.5%2C9.6%20454.9%2C8.3%20456.3%2C6.9%20457.8%2C5.5%20459.2%2C4.2%20460.6%2C2.8%20462.0%2C1.5%20463.4%2C0.1%20464.9%2C-1.2%20466.3%2C-2.6%20467.7%2C-3.9%20469.1%2C-5.3%20470.5%2C-6.6%20471.9%2C-7.9%20473.4%2C-9.2%20474.8%2C-10.5%20476.2%2C-11.8%20477.6%2C-13.2%20479.0%2C-14.5%20480.5%2C-15.7%20481.9%2C-17.0%20483.3%2C-18.3%20484.7%2C-19.6%20486.1%2C-20.9%20487.6%2C-22.1%20489.0%2C-23.4%20490.4%2C-24.7%20491.8%2C-25.9%20493.2%2C-27.2%20494.6%2C-28.4%20496.1%2C-29.7%20497.5%2C-30.9%20498.9%2C-32.1%20500.3%2C-33.4%20501.7%2C-34.6%20503.2%2C-35.8%20504.6%2C-37.0%20506.0%2C-38.2%22%20clip-path%3D%22url%28%23clip-603618%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-213.1%2053.4%2C-205.2%2054.8%2C-197.4%2056.3%2C-189.6%2057.7%2C-182.0%2059.1%2C-174.4%2060.5%2C-166.9%2061.9%2C-159.5%2063.4%2C-152.2%2064.8%2C-144.9%2066.2%2C-137.8%2067.6%2C-130.7%2069.0%2C-123.7%2070.4%2C-116.8%2071.9%2C-110.0%2073.3%2C-103.2%2074.7%2C-96.6%2076.1%2C-90.0%2077.5%2C-83.5%2079.0%2C-77.0%2080.4%2C-70.7%2081.8%2C-64.4%2083.2%2C-58.2%2084.6%2C-52.1%2086.0%2C-46.0%2087.5%2C-40.1%2088.9%2C-34.2%2090.3%2C-28.3%2091.7%2C-22.6%2093.1%2C-16.9%2094.6%2C-11.3%2096.0%2C-5.7%2097.4%2C-0.3%2098.8%2C5.1%20100.2%2C10.5%20101.7%2C15.7%20103.1%2C20.9%20104.5%2C26.0%20105.9%2C31.1%20107.3%2C36.1%20108.8%2C41.0%20110.2%2C45.9%20111.6%2C50.7%20113.0%2C55.4%20114.4%2C60.0%20115.8%2C64.6%20117.3%2C69.2%20118.7%2C73.6%20120.1%2C78.0%20121.5%2C82.4%20122.9%2C86.7%20124.4%2C90.9%20125.8%2C95.0%20127.2%2C99.1%20128.6%2C103.2%20130.0%2C107.2%20131.4%2C111.1%20132.9%2C115.0%20134.3%2C118.8%20135.7%2C122.5%20137.1%2C126.2%20138.5%2C129.8%20140.0%2C133.4%20141.4%2C136.9%20142.8%2C140.4%20144.2%2C143.8%20145.6%2C147.2%20147.1%2C150.5%20148.5%2C153.7%20149.9%2C156.9%20151.3%2C160.0%20152.7%2C163.1%20154.2%2C166.2%20155.6%2C169.2%20157.0%2C172.1%20158.4%2C175.0%20159.8%2C177.8%20161.2%2C180.6%20162.7%2C183.3%20164.1%2C186.0%20165.5%2C188.6%20166.9%2C191.2%20168.3%2C193.8%20169.8%2C196.3%20171.2%2C198.7%20172.6%2C201.1%20174.0%2C203.5%20175.4%2C205.8%20176.9%2C208.0%20178.3%2C210.2%20179.7%2C212.4%20181.1%2C214.5%20182.5%2C216.6%20183.9%2C218.6%20185.4%2C220.6%20186.8%2C222.6%20188.2%2C224.5%20189.6%2C226.4%20191.0%2C228.2%20192.5%2C230.0%20193.9%2C231.7%20195.3%2C233.4%20196.7%2C235.1%20198.1%2C236.7%20199.6%2C238.3%20201.0%2C239.8%20202.4%2C241.3%20203.8%2C242.8%20205.2%2C244.2%20206.6%2C245.6%20208.1%2C246.9%20209.5%2C248.2%20210.9%2C249.5%20212.3%2C250.7%20213.7%2C251.9%20215.2%2C253.1%20216.6%2C254.2%20218.0%2C255.3%20219.4%2C256.3%20220.8%2C257.4%20222.2%2C258.3%20223.7%2C259.3%20225.1%2C260.2%20226.5%2C261.1%20227.9%2C261.9%20229.3%2C262.7%20230.8%2C263.5%20232.2%2C264.3%20233.6%2C265.0%20235.0%2C265.7%20236.4%2C266.3%20237.9%2C266.9%20239.3%2C267.5%20240.7%2C268.1%20242.1%2C268.6%20243.5%2C269.1%20244.9%2C269.6%20246.4%2C270.0%20247.8%2C270.4%20249.2%2C270.8%20250.6%2C271.2%20252.0%2C271.5%20253.5%2C271.8%20254.9%2C272.0%20256.3%2C272.3%20257.7%2C272.5%20259.1%2C272.7%20260.6%2C272.8%20262.0%2C272.9%20263.4%2C273.0%20264.8%2C273.1%20266.2%2C273.2%20267.6%2C273.2%20269.1%2C273.2%20270.5%2C273.2%20271.9%2C273.1%20273.3%2C273.0%20274.7%2C272.9%20276.2%2C272.8%20277.6%2C272.6%20279.0%2C272.5%20280.4%2C272.3%20281.8%2C272.1%20283.3%2C271.8%20284.7%2C271.5%20286.1%2C271.2%20287.5%2C270.9%20288.9%2C270.6%20290.4%2C270.2%20291.8%2C269.9%20293.2%2C269.5%20294.6%2C269.0%20296.0%2C268.6%20297.4%2C268.1%20298.9%2C267.6%20300.3%2C267.1%20301.7%2C266.6%20303.1%2C266.1%20304.5%2C265.5%20306.0%2C264.9%20307.4%2C264.3%20308.8%2C263.7%20310.2%2C263.0%20311.6%2C262.4%20313.1%2C261.7%20314.5%2C261.0%20315.9%2C260.3%20317.3%2C259.5%20318.7%2C258.8%20320.1%2C258.0%20321.6%2C257.2%20323.0%2C256.4%20324.4%2C255.6%20325.8%2C254.8%20327.2%2C253.9%20328.7%2C253.0%20330.1%2C252.1%20331.5%2C251.2%20332.9%2C250.3%20334.3%2C249.4%20335.8%2C248.4%20337.2%2C247.5%20338.6%2C246.5%20340.0%2C245.5%20341.4%2C244.5%20342.8%2C243.4%20344.3%2C242.4%20345.7%2C241.4%20347.1%2C240.3%20348.5%2C239.2%20349.9%2C238.1%20351.4%2C237.0%20352.8%2C235.9%20354.2%2C234.7%20355.6%2C233.6%20357.0%2C232.4%20358.4%2C231.2%20359.9%2C230.0%20361.3%2C228.8%20362.7%2C227.6%20364.1%2C226.4%20365.5%2C225.2%20367.0%2C223.9%20368.4%2C222.7%20369.8%2C221.4%20371.2%2C220.1%20372.6%2C218.8%20374.1%2C217.5%20375.5%2C216.2%20376.9%2C214.9%20378.3%2C213.5%20379.7%2C212.2%20381.1%2C210.8%20382.6%2C209.4%20384.0%2C208.1%20385.4%2C206.7%20386.8%2C205.3%20388.2%2C203.9%20389.7%2C202.4%20391.1%2C201.0%20392.5%2C199.6%20393.9%2C198.1%20395.3%2C196.7%20396.8%2C195.2%20398.2%2C193.8%20399.6%2C192.3%20401.0%2C190.8%20402.4%2C189.3%20403.9%2C187.8%20405.3%2C186.3%20406.7%2C184.7%20408.1%2C183.2%20409.5%2C181.7%20410.9%2C180.1%20412.4%2C178.6%20413.8%2C177.0%20415.2%2C175.5%20416.6%2C173.9%20418.0%2C172.3%20419.5%2C170.7%20420.9%2C169.1%20422.3%2C167.5%20423.7%2C165.9%20425.1%2C164.3%20426.6%2C162.7%20428.0%2C161.1%20429.4%2C159.4%20430.8%2C157.8%20432.2%2C156.2%20433.6%2C154.5%20435.1%2C152.9%20436.5%2C151.2%20437.9%2C149.6%20439.3%2C147.9%20440.7%2C146.2%20442.2%2C144.5%20443.6%2C142.8%20445.0%2C141.2%20446.4%2C139.5%20447.8%2C137.8%20449.2%2C136.1%20450.7%2C134.4%20452.1%2C132.7%20453.5%2C130.9%20454.9%2C129.2%20456.3%2C127.5%20457.8%2C125.8%20459.2%2C124.0%20460.6%2C122.3%20462.0%2C120.6%20463.4%2C118.8%20464.9%2C117.1%20466.3%2C115.3%20467.7%2C113.6%20469.1%2C111.8%20470.5%2C110.1%20471.9%2C108.3%20473.4%2C106.6%20474.8%2C104.8%20476.2%2C103.0%20477.6%2C101.3%20479.0%2C99.5%20480.5%2C97.7%20481.9%2C95.9%20483.3%2C94.2%20484.7%2C92.4%20486.1%2C90.6%20487.6%2C88.8%20489.0%2C87.0%20490.4%2C85.2%20491.8%2C83.4%20493.2%2C81.6%20494.6%2C79.9%20496.1%2C78.1%20497.5%2C76.3%20498.9%2C74.5%20500.3%2C72.7%20501.7%2C70.9%20503.2%2C69.1%20504.6%2C67.3%20506.0%2C65.5%22%20clip-path%3D%22url%28%23clip-603618%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Eg%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-152",
    case_id: "MATH 11.152",
    title: "Three curves on one plane: values at x=0 and x=3",
    subsection: "11.4",
    context:
      "Brown is $f'$, green is $f''$, and purple is another derivative $h'$, all on the same axes. Decide TRUE or FALSE.",
    statements: [
      "At $x=0$, brown is positive (near height $4$) while green is negative (near height $-4$).",
      "At $x=3$, brown is near height $10$ and lies above purple (purple is near height $6$).",
      "Green opens upward and is negative at $x=0$.",
      "Wherever green is positive, brown is increasing as a function of $x$.",
      "Purple being a vertical shift/scaling of brown means purple and brown share the same zeros."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Read the two heights at $x=0$ on the shared scale.

So the statement is True.`,
      `**B.** → True

At $x=3$ on the shared axes, Brown sits near $10$ and purple sits lower, near $6$.

So the statement is True.`,
      `**C.** → True

Green is U-shaped and below the axis at $x=0$.

So the statement is True.`,
      `**D.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Positive green means $f''>0$, so $f'$ (brown) is increasing.

So the statement is True.`,
      `**E.** → False

A vertical shift changes which $x$ make the purple curve zero; the zeros need not match brown's zeros.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 152,
    solution_overview:
      "Evaluate named curves at $x=0$ and $x=3$; scaling/shifting moves zeros.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%2C%20f%E2%80%B3%2C%20and%20h%E2%80%B2%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-315622%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%2244%22%20x2%3D%22142.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%2244%22%20x2%3D%22233.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%2244%22%20x2%3D%22324.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%2244%22%20x2%3D%22415.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22316.7%22%20x2%3D%22506%22%20y2%3D%22316.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22262.2%22%20x2%3D%22506%22%20y2%3D%22262.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22207.6%22%20x2%3D%22506%22%20y2%3D%22207.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22153.1%22%20x2%3D%22506%22%20y2%3D%22153.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2298.5%22%20x2%3D%22506%22%20y2%3D%2298.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22207.6%22%20x2%3D%22506%22%20y2%3D%22207.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%2244%22%20x2%3D%22142.8%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%22344%22%20x2%3D%22142.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22142.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%22344%22%20x2%3D%22233.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22233.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%22344%22%20x2%3D%22324.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22324.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%22344%22%20x2%3D%22415.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22415.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22316.7%22%20x2%3D%2252%22%20y2%3D%22316.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22320.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22262.2%22%20x2%3D%2252%22%20y2%3D%22262.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22266.2%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22207.6%22%20x2%3D%2252%22%20y2%3D%22207.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22211.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22153.1%22%20x2%3D%2252%22%20y2%3D%22153.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22157.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2298.5%22%20x2%3D%2252%22%20y2%3D%2298.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22102.5%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C125.8%2053.4%2C125.6%2054.8%2C125.4%2056.3%2C125.3%2057.7%2C125.2%2059.1%2C125.1%2060.5%2C125.0%2061.9%2C125.0%2063.4%2C124.9%2064.8%2C124.9%2066.2%2C125.0%2067.6%2C125.0%2069.0%2C125.1%2070.4%2C125.2%2071.9%2C125.3%2073.3%2C125.4%2074.7%2C125.6%2076.1%2C125.8%2077.5%2C126.0%2079.0%2C126.2%2080.4%2C126.5%2081.8%2C126.7%2083.2%2C127.0%2084.6%2C127.3%2086.0%2C127.7%2087.5%2C128.0%2088.9%2C128.4%2090.3%2C128.7%2091.7%2C129.2%2093.1%2C129.6%2094.6%2C130.0%2096.0%2C130.5%2097.4%2C130.9%2098.8%2C131.4%20100.2%2C131.9%20101.7%2C132.4%20103.1%2C133.0%20104.5%2C133.5%20105.9%2C134.1%20107.3%2C134.7%20108.8%2C135.3%20110.2%2C135.9%20111.6%2C136.5%20113.0%2C137.1%20114.4%2C137.8%20115.8%2C138.5%20117.3%2C139.1%20118.7%2C139.8%20120.1%2C140.5%20121.5%2C141.2%20122.9%2C142.0%20124.4%2C142.7%20125.8%2C143.4%20127.2%2C144.2%20128.6%2C145.0%20130.0%2C145.7%20131.4%2C146.5%20132.9%2C147.3%20134.3%2C148.1%20135.7%2C148.9%20137.1%2C149.7%20138.5%2C150.6%20140.0%2C151.4%20141.4%2C152.2%20142.8%2C153.1%20144.2%2C153.9%20145.6%2C154.8%20147.1%2C155.7%20148.5%2C156.5%20149.9%2C157.4%20151.3%2C158.3%20152.7%2C159.2%20154.2%2C160.1%20155.6%2C161.0%20157.0%2C161.9%20158.4%2C162.8%20159.8%2C163.7%20161.2%2C164.6%20162.7%2C165.5%20164.1%2C166.4%20165.5%2C167.4%20166.9%2C168.3%20168.3%2C169.2%20169.8%2C170.1%20171.2%2C171.1%20172.6%2C172.0%20174.0%2C172.9%20175.4%2C173.8%20176.9%2C174.7%20178.3%2C175.7%20179.7%2C176.6%20181.1%2C177.5%20182.5%2C178.4%20183.9%2C179.3%20185.4%2C180.3%20186.8%2C181.2%20188.2%2C182.1%20189.6%2C183.0%20191.0%2C183.9%20192.5%2C184.8%20193.9%2C185.7%20195.3%2C186.5%20196.7%2C187.4%20198.1%2C188.3%20199.6%2C189.2%20201.0%2C190.0%20202.4%2C190.9%20203.8%2C191.8%20205.2%2C192.6%20206.6%2C193.4%20208.1%2C194.3%20209.5%2C195.1%20210.9%2C195.9%20212.3%2C196.7%20213.7%2C197.5%20215.2%2C198.3%20216.6%2C199.1%20218.0%2C199.9%20219.4%2C200.6%20220.8%2C201.4%20222.2%2C202.1%20223.7%2C202.9%20225.1%2C203.6%20226.5%2C204.3%20227.9%2C205.0%20229.3%2C205.7%20230.8%2C206.3%20232.2%2C207.0%20233.6%2C207.6%20235.0%2C208.3%20236.4%2C208.9%20237.9%2C209.5%20239.3%2C210.1%20240.7%2C210.7%20242.1%2C211.2%20243.5%2C211.8%20244.9%2C212.3%20246.4%2C212.8%20247.8%2C213.3%20249.2%2C213.8%20250.6%2C214.3%20252.0%2C214.7%20253.5%2C215.1%20254.9%2C215.6%20256.3%2C215.9%20257.7%2C216.3%20259.1%2C216.7%20260.6%2C217.0%20262.0%2C217.3%20263.4%2C217.6%20264.8%2C217.9%20266.2%2C218.2%20267.6%2C218.4%20269.1%2C218.6%20270.5%2C218.8%20271.9%2C219.0%20273.3%2C219.2%20274.7%2C219.3%20276.2%2C219.4%20277.6%2C219.5%20279.0%2C219.6%20280.4%2C219.6%20281.8%2C219.6%20283.3%2C219.6%20284.7%2C219.6%20286.1%2C219.5%20287.5%2C219.5%20288.9%2C219.4%20290.4%2C219.2%20291.8%2C219.1%20293.2%2C218.9%20294.6%2C218.7%20296.0%2C218.4%20297.4%2C218.2%20298.9%2C217.9%20300.3%2C217.6%20301.7%2C217.2%20303.1%2C216.9%20304.5%2C216.4%20306.0%2C216.0%20307.4%2C215.6%20308.8%2C215.1%20310.2%2C214.5%20311.6%2C214.0%20313.0%2C213.4%20314.5%2C212.8%20315.9%2C212.2%20317.3%2C211.5%20318.7%2C210.8%20320.1%2C210.0%20321.6%2C209.3%20323.0%2C208.5%20324.4%2C207.6%20325.8%2C206.8%20327.2%2C205.9%20328.7%2C204.9%20330.1%2C204.0%20331.5%2C203.0%20332.9%2C201.9%20334.3%2C200.8%20335.8%2C199.7%20337.2%2C198.6%20338.6%2C197.4%20340.0%2C196.2%20341.4%2C194.9%20342.8%2C193.6%20344.3%2C192.3%20345.7%2C190.9%20347.1%2C189.5%20348.5%2C188.1%20349.9%2C186.6%20351.4%2C185.1%20352.8%2C183.5%20354.2%2C181.9%20355.6%2C180.3%20357.0%2C178.6%20358.5%2C176.9%20359.9%2C175.1%20361.3%2C173.3%20362.7%2C171.5%20364.1%2C169.6%20365.5%2C167.7%20367.0%2C165.7%20368.4%2C163.7%20369.8%2C161.6%20371.2%2C159.5%20372.6%2C157.4%20374.1%2C155.2%20375.5%2C153.0%20376.9%2C150.7%20378.3%2C148.4%20379.7%2C146.0%20381.1%2C143.6%20382.6%2C141.1%20384.0%2C138.6%20385.4%2C136.1%20386.8%2C133.5%20388.2%2C130.8%20389.7%2C128.1%20391.1%2C125.4%20392.5%2C122.6%20393.9%2C119.8%20395.3%2C116.9%20396.8%2C114.0%20398.2%2C111.0%20399.6%2C108.0%20401.0%2C104.9%20402.4%2C101.8%20403.9%2C98.6%20405.3%2C95.3%20406.7%2C92.1%20408.1%2C88.7%20409.5%2C85.3%20410.9%2C81.9%20412.4%2C78.4%20413.8%2C74.9%20415.2%2C71.3%20416.6%2C67.6%20418.0%2C63.9%20419.5%2C60.2%20420.9%2C56.4%20422.3%2C52.5%20423.7%2C48.6%20425.1%2C44.6%20426.5%2C40.6%20428.0%2C36.5%20429.4%2C32.3%20430.8%2C28.1%20432.2%2C23.9%20433.6%2C19.6%20435.1%2C15.2%20436.5%2C10.8%20437.9%2C6.3%20439.3%2C1.7%20440.7%2C-2.9%20442.2%2C-7.5%20443.6%2C-12.2%20445.0%2C-17.0%20446.4%2C-21.9%20447.8%2C-26.8%20449.2%2C-31.7%20450.7%2C-36.7%20452.1%2C-41.8%20453.5%2C-47.0%20454.9%2C-52.2%20456.3%2C-57.4%20457.8%2C-62.8%20459.2%2C-68.2%20460.6%2C-73.6%20462.0%2C-79.1%20463.4%2C-84.7%20464.9%2C-90.4%20466.3%2C-96.1%20467.7%2C-101.8%20469.1%2C-107.7%20470.5%2C-113.6%20472.0%2C-119.6%20473.4%2C-125.6%20474.8%2C-131.7%20476.2%2C-137.9%20477.6%2C-144.1%20479.0%2C-150.4%20480.5%2C-156.8%20481.9%2C-163.2%20483.3%2C-169.7%20484.7%2C-176.3%20486.1%2C-182.9%20487.6%2C-189.6%20489.0%2C-196.4%20490.4%2C-203.3%20491.8%2C-210.2%20493.2%2C-217.2%20494.6%2C-224.2%20496.1%2C-231.4%20497.5%2C-238.6%20498.9%2C-245.8%20500.3%2C-253.2%20501.7%2C-260.6%20503.2%2C-268.1%20504.6%2C-275.6%20506.0%2C-283.3%22%20clip-path%3D%22url%28%23clip-315622%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C194.0%2053.4%2C195.7%2054.8%2C197.4%2056.3%2C199.0%2057.7%2C200.7%2059.1%2C202.3%2060.5%2C203.9%2061.9%2C205.4%2063.4%2C207.0%2064.8%2C208.5%2066.2%2C210.0%2067.6%2C211.5%2069.0%2C213.0%2070.4%2C214.5%2071.9%2C215.9%2073.3%2C217.3%2074.7%2C218.7%2076.1%2C220.1%2077.5%2C221.4%2079.0%2C222.8%2080.4%2C224.1%2081.8%2C225.4%2083.2%2C226.7%2084.6%2C227.9%2086.0%2C229.2%2087.5%2C230.4%2088.9%2C231.6%2090.3%2C232.7%2091.7%2C233.9%2093.1%2C235.0%2094.6%2C236.1%2096.0%2C237.2%2097.4%2C238.3%2098.8%2C239.4%20100.2%2C240.4%20101.7%2C241.4%20103.1%2C242.4%20104.5%2C243.4%20105.9%2C244.4%20107.3%2C245.3%20108.8%2C246.2%20110.2%2C247.1%20111.6%2C248.0%20113.0%2C248.8%20114.4%2C249.7%20115.8%2C250.5%20117.3%2C251.3%20118.7%2C252.1%20120.1%2C252.8%20121.5%2C253.5%20122.9%2C254.3%20124.4%2C255.0%20125.8%2C255.6%20127.2%2C256.3%20128.6%2C256.9%20130.0%2C257.5%20131.4%2C258.1%20132.9%2C258.7%20134.3%2C259.3%20135.7%2C259.8%20137.1%2C260.3%20138.5%2C260.8%20140.0%2C261.3%20141.4%2C261.7%20142.8%2C262.2%20144.2%2C262.6%20145.6%2C263.0%20147.1%2C263.4%20148.5%2C263.7%20149.9%2C264.1%20151.3%2C264.4%20152.7%2C264.7%20154.2%2C265.0%20155.6%2C265.2%20157.0%2C265.4%20158.4%2C265.7%20159.8%2C265.9%20161.2%2C266.0%20162.7%2C266.2%20164.1%2C266.3%20165.5%2C266.4%20166.9%2C266.5%20168.3%2C266.6%20169.8%2C266.7%20171.2%2C266.7%20172.6%2C266.7%20174.0%2C266.7%20175.4%2C266.7%20176.9%2C266.7%20178.3%2C266.6%20179.7%2C266.5%20181.1%2C266.4%20182.5%2C266.3%20183.9%2C266.1%20185.4%2C266.0%20186.8%2C265.8%20188.2%2C265.6%20189.6%2C265.4%20191.0%2C265.1%20192.5%2C264.9%20193.9%2C264.6%20195.3%2C264.3%20196.7%2C264.0%20198.1%2C263.6%20199.6%2C263.2%20201.0%2C262.9%20202.4%2C262.5%20203.8%2C262.0%20205.2%2C261.6%20206.6%2C261.1%20208.1%2C260.7%20209.5%2C260.1%20210.9%2C259.6%20212.3%2C259.1%20213.7%2C258.5%20215.2%2C257.9%20216.6%2C257.3%20218.0%2C256.7%20219.4%2C256.1%20220.8%2C255.4%20222.2%2C254.7%20223.7%2C254.0%20225.1%2C253.3%20226.5%2C252.6%20227.9%2C251.8%20229.3%2C251.0%20230.8%2C250.2%20232.2%2C249.4%20233.6%2C248.5%20235.0%2C247.7%20236.4%2C246.8%20237.9%2C245.9%20239.3%2C245.0%20240.7%2C244.0%20242.1%2C243.1%20243.5%2C242.1%20244.9%2C241.1%20246.4%2C240.1%20247.8%2C239.0%20249.2%2C238.0%20250.6%2C236.9%20252.0%2C235.8%20253.5%2C234.7%20254.9%2C233.5%20256.3%2C232.4%20257.7%2C231.2%20259.1%2C230.0%20260.6%2C228.7%20262.0%2C227.5%20263.4%2C226.2%20264.8%2C225.0%20266.2%2C223.7%20267.6%2C222.3%20269.1%2C221.0%20270.5%2C219.6%20271.9%2C218.3%20273.3%2C216.9%20274.7%2C215.4%20276.2%2C214.0%20277.6%2C212.5%20279.0%2C211.0%20280.4%2C209.5%20281.8%2C208.0%20283.3%2C206.5%20284.7%2C204.9%20286.1%2C203.3%20287.5%2C201.7%20288.9%2C200.1%20290.4%2C198.5%20291.8%2C196.8%20293.2%2C195.1%20294.6%2C193.4%20296.0%2C191.7%20297.4%2C190.0%20298.9%2C188.2%20300.3%2C186.4%20301.7%2C184.6%20303.1%2C182.8%20304.5%2C181.0%20306.0%2C179.1%20307.4%2C177.2%20308.8%2C175.3%20310.2%2C173.4%20311.6%2C171.5%20313.0%2C169.5%20314.5%2C167.5%20315.9%2C165.5%20317.3%2C163.5%20318.7%2C161.5%20320.1%2C159.4%20321.6%2C157.3%20323.0%2C155.2%20324.4%2C153.1%20325.8%2C151.0%20327.2%2C148.8%20328.7%2C146.6%20330.1%2C144.4%20331.5%2C142.2%20332.9%2C139.9%20334.3%2C137.7%20335.8%2C135.4%20337.2%2C133.1%20338.6%2C130.8%20340.0%2C128.4%20341.4%2C126.1%20342.8%2C123.7%20344.3%2C121.3%20345.7%2C118.9%20347.1%2C116.4%20348.5%2C114.0%20349.9%2C111.5%20351.4%2C109.0%20352.8%2C106.5%20354.2%2C103.9%20355.6%2C101.4%20357.0%2C98.8%20358.5%2C96.2%20359.9%2C93.6%20361.3%2C90.9%20362.7%2C88.3%20364.1%2C85.6%20365.5%2C82.9%20367.0%2C80.2%20368.4%2C77.4%20369.8%2C74.7%20371.2%2C71.9%20372.6%2C69.1%20374.1%2C66.3%20375.5%2C63.4%20376.9%2C60.6%20378.3%2C57.7%20379.7%2C54.8%20381.1%2C51.9%20382.6%2C48.9%20384.0%2C46.0%20385.4%2C43.0%20386.8%2C40.0%20388.2%2C37.0%20389.7%2C33.9%20391.1%2C30.9%20392.5%2C27.8%20393.9%2C24.7%20395.3%2C21.6%20396.8%2C18.4%20398.2%2C15.3%20399.6%2C12.1%20401.0%2C8.9%20402.4%2C5.7%20403.9%2C2.5%20405.3%2C-0.8%20406.7%2C-4.1%20408.1%2C-7.4%20409.5%2C-10.7%20410.9%2C-14.0%20412.4%2C-17.4%20413.8%2C-20.8%20415.2%2C-24.2%20416.6%2C-27.6%20418.0%2C-31.0%20419.5%2C-34.5%20420.9%2C-38.0%20422.3%2C-41.5%20423.7%2C-45.0%20425.1%2C-48.5%20426.5%2C-52.1%20428.0%2C-55.7%20429.4%2C-59.3%20430.8%2C-62.9%20432.2%2C-66.5%20433.6%2C-70.2%20435.1%2C-73.9%20436.5%2C-77.6%20437.9%2C-81.3%20439.3%2C-85.0%20440.7%2C-88.8%20442.2%2C-92.6%20443.6%2C-96.4%20445.0%2C-100.2%20446.4%2C-104.0%20447.8%2C-107.9%20449.2%2C-111.8%20450.7%2C-115.7%20452.1%2C-119.6%20453.5%2C-123.5%20454.9%2C-127.5%20456.3%2C-131.4%20457.8%2C-135.4%20459.2%2C-139.5%20460.6%2C-143.5%20462.0%2C-147.6%20463.4%2C-151.6%20464.9%2C-155.7%20466.3%2C-159.9%20467.7%2C-164.0%20469.1%2C-168.1%20470.5%2C-172.3%20472.0%2C-176.5%20473.4%2C-180.7%20474.8%2C-185.0%20476.2%2C-189.2%20477.6%2C-193.5%20479.0%2C-197.8%20480.5%2C-202.1%20481.9%2C-206.5%20483.3%2C-210.8%20484.7%2C-215.2%20486.1%2C-219.6%20487.6%2C-224.0%20489.0%2C-228.5%20490.4%2C-232.9%20491.8%2C-237.4%20493.2%2C-241.9%20494.6%2C-246.4%20496.1%2C-250.9%20497.5%2C-255.5%20498.9%2C-260.1%20500.3%2C-264.7%20501.7%2C-269.3%20503.2%2C-273.9%20504.6%2C-278.6%20506.0%2C-283.3%22%20clip-path%3D%22url%28%23clip-315622%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C153.1%2053.4%2C153.0%2054.8%2C152.9%2056.3%2C152.8%2057.7%2C152.8%2059.1%2C152.7%2060.5%2C152.7%2061.9%2C152.7%2063.4%2C152.7%2064.8%2C152.7%2066.2%2C152.7%2067.6%2C152.7%2069.0%2C152.7%2070.4%2C152.8%2071.9%2C152.8%2073.3%2C152.9%2074.7%2C153.0%2076.1%2C153.1%2077.5%2C153.2%2079.0%2C153.3%2080.4%2C153.4%2081.8%2C153.5%2083.2%2C153.7%2084.6%2C153.8%2086.0%2C154.0%2087.5%2C154.2%2088.9%2C154.4%2090.3%2C154.6%2091.7%2C154.8%2093.1%2C155.0%2094.6%2C155.2%2096.0%2C155.4%2097.4%2C155.6%2098.8%2C155.9%20100.2%2C156.1%20101.7%2C156.4%20103.1%2C156.7%20104.5%2C156.9%20105.9%2C157.2%20107.3%2C157.5%20108.8%2C157.8%20110.2%2C158.1%20111.6%2C158.4%20113.0%2C158.8%20114.4%2C159.1%20115.8%2C159.4%20117.3%2C159.7%20118.7%2C160.1%20120.1%2C160.4%20121.5%2C160.8%20122.9%2C161.2%20124.4%2C161.5%20125.8%2C161.9%20127.2%2C162.3%20128.6%2C162.7%20130.0%2C163.0%20131.4%2C163.4%20132.9%2C163.8%20134.3%2C164.2%20135.7%2C164.6%20137.1%2C165.1%20138.5%2C165.5%20140.0%2C165.9%20141.4%2C166.3%20142.8%2C166.7%20144.2%2C167.2%20145.6%2C167.6%20147.1%2C168.0%20148.5%2C168.5%20149.9%2C168.9%20151.3%2C169.3%20152.7%2C169.8%20154.2%2C170.2%20155.6%2C170.7%20157.0%2C171.1%20158.4%2C171.6%20159.8%2C172.0%20161.2%2C172.5%20162.7%2C172.9%20164.1%2C173.4%20165.5%2C173.9%20166.9%2C174.3%20168.3%2C174.8%20169.8%2C175.2%20171.2%2C175.7%20172.6%2C176.2%20174.0%2C176.6%20175.4%2C177.1%20176.9%2C177.6%20178.3%2C178.0%20179.7%2C178.5%20181.1%2C178.9%20182.5%2C179.4%20183.9%2C179.9%20185.4%2C180.3%20186.8%2C180.8%20188.2%2C181.2%20189.6%2C181.7%20191.0%2C182.1%20192.5%2C182.6%20193.9%2C183.0%20195.3%2C183.5%20196.7%2C183.9%20198.1%2C184.3%20199.6%2C184.8%20201.0%2C185.2%20202.4%2C185.6%20203.8%2C186.1%20205.2%2C186.5%20206.6%2C186.9%20208.1%2C187.3%20209.5%2C187.7%20210.9%2C188.1%20212.3%2C188.5%20213.7%2C188.9%20215.2%2C189.3%20216.6%2C189.7%20218.0%2C190.1%20219.4%2C190.5%20220.8%2C190.9%20222.2%2C191.2%20223.7%2C191.6%20225.1%2C192.0%20226.5%2C192.3%20227.9%2C192.7%20229.3%2C193.0%20230.8%2C193.3%20232.2%2C193.7%20233.6%2C194.0%20235.0%2C194.3%20236.4%2C194.6%20237.9%2C194.9%20239.3%2C195.2%20240.7%2C195.5%20242.1%2C195.8%20243.5%2C196.1%20244.9%2C196.3%20246.4%2C196.6%20247.8%2C196.8%20249.2%2C197.1%20250.6%2C197.3%20252.0%2C197.5%20253.5%2C197.8%20254.9%2C198.0%20256.3%2C198.2%20257.7%2C198.3%20259.1%2C198.5%20260.6%2C198.7%20262.0%2C198.9%20263.4%2C199.0%20264.8%2C199.1%20266.2%2C199.3%20267.6%2C199.4%20269.1%2C199.5%20270.5%2C199.6%20271.9%2C199.7%20273.3%2C199.8%20274.7%2C199.8%20276.2%2C199.9%20277.6%2C199.9%20279.0%2C200.0%20280.4%2C200.0%20281.8%2C200.0%20283.3%2C200.0%20284.7%2C200.0%20286.1%2C200.0%20287.5%2C199.9%20288.9%2C199.9%20290.4%2C199.8%20291.8%2C199.7%20293.2%2C199.6%20294.6%2C199.5%20296.0%2C199.4%20297.4%2C199.3%20298.9%2C199.1%20300.3%2C199.0%20301.7%2C198.8%20303.1%2C198.6%20304.5%2C198.4%20306.0%2C198.2%20307.4%2C198.0%20308.8%2C197.7%20310.2%2C197.5%20311.6%2C197.2%20313.0%2C196.9%20314.5%2C196.6%20315.9%2C196.3%20317.3%2C195.9%20318.7%2C195.6%20320.1%2C195.2%20321.6%2C194.8%20323.0%2C194.4%20324.4%2C194.0%20325.8%2C193.6%20327.2%2C193.1%20328.7%2C192.6%20330.1%2C192.2%20331.5%2C191.7%20332.9%2C191.1%20334.3%2C190.6%20335.8%2C190.0%20337.2%2C189.5%20338.6%2C188.9%20340.0%2C188.3%20341.4%2C187.6%20342.8%2C187.0%20344.3%2C186.3%20345.7%2C185.6%20347.1%2C184.9%20348.5%2C184.2%20349.9%2C183.5%20351.4%2C182.7%20352.8%2C181.9%20354.2%2C181.1%20355.6%2C180.3%20357.0%2C179.5%20358.5%2C178.6%20359.9%2C177.7%20361.3%2C176.8%20362.7%2C175.9%20364.1%2C175.0%20365.5%2C174.0%20367.0%2C173.0%20368.4%2C172.0%20369.8%2C171.0%20371.2%2C169.9%20372.6%2C168.9%20374.1%2C167.8%20375.5%2C166.7%20376.9%2C165.5%20378.3%2C164.4%20379.7%2C163.2%20381.1%2C162.0%20382.6%2C160.7%20384.0%2C159.5%20385.4%2C158.2%20386.8%2C156.9%20388.2%2C155.6%20389.7%2C154.3%20391.1%2C152.9%20392.5%2C151.5%20393.9%2C150.1%20395.3%2C148.6%20396.8%2C147.2%20398.2%2C145.7%20399.6%2C144.2%20401.0%2C142.6%20402.4%2C141.1%20403.9%2C139.5%20405.3%2C137.9%20406.7%2C136.2%20408.1%2C134.5%20409.5%2C132.9%20410.9%2C131.1%20412.4%2C129.4%20413.8%2C127.6%20415.2%2C125.8%20416.6%2C124.0%20418.0%2C122.1%20419.5%2C120.3%20420.9%2C118.4%20422.3%2C116.4%20423.7%2C114.5%20425.1%2C112.5%20426.5%2C110.5%20428.0%2C108.4%20429.4%2C106.3%20430.8%2C104.3%20432.2%2C102.1%20433.6%2C100.0%20435.1%2C97.8%20436.5%2C95.6%20437.9%2C93.3%20439.3%2C91.1%20440.7%2C88.8%20442.2%2C86.4%20443.6%2C84.1%20445.0%2C81.7%20446.4%2C79.3%20447.8%2C76.8%20449.2%2C74.3%20450.7%2C71.8%20452.1%2C69.3%20453.5%2C66.7%20454.9%2C64.1%20456.3%2C61.5%20457.8%2C58.8%20459.2%2C56.1%20460.6%2C53.4%20462.0%2C50.6%20463.4%2C47.8%20464.9%2C45.0%20466.3%2C42.1%20467.7%2C39.3%20469.1%2C36.3%20470.5%2C33.4%20472.0%2C30.4%20473.4%2C27.4%20474.8%2C24.3%20476.2%2C21.3%20477.6%2C18.1%20479.0%2C15.0%20480.5%2C11.8%20481.9%2C8.6%20483.3%2C5.3%20484.7%2C2.0%20486.1%2C-1.3%20487.6%2C-4.6%20489.0%2C-8.0%20490.4%2C-11.4%20491.8%2C-14.9%20493.2%2C-18.4%20494.6%2C-21.9%20496.1%2C-25.5%20497.5%2C-29.1%20498.9%2C-32.7%20500.3%2C-36.4%20501.7%2C-40.1%20503.2%2C-43.9%20504.6%2C-47.6%20506.0%2C-51.5%22%20clip-path%3D%22url%28%23clip-315622%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Eh%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-153",
    case_id: "MATH 11.153",
    title: "Three named curves: signs, heights, and A vs A′",
    subsection: "11.4",
    context:
      "The figure shows three curves on one plane: $A$ (brown), $B$ (green), and $A-B$ (purple). In this model $B=A'$. Decide TRUE or FALSE from the coordinates.",
    statements: [
      "At $x=3$, $A(3)<0$ and $B(3)<0$.",
      "At $x=3$, the purple curve lies strictly below the brown curve.",
      "Zeros of $B$ occur under a local max and a local min of $A$.",
      "Wherever $B>0$, the brown curve $A$ is rising.",
      "The purple curve having a zero means $A=B$ at that $x$, i.e. $A(x)=A'(x)$."
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Read brown ($A$) and green ($B$) at the stated $x$ against the horizontal axis. Both brown and green are below the axis at $x=3$.

So the statement is True.`,
      `**B.** → False

Compare the purple and brown heights at the stated $x$ on the shared vertical scale. Relative height decides the claim; there is no need to rewrite $A-B$ algebraically. Purple sits above brown on the shared scale, not below.

So the statement is False.`,
      `**C.** → True

Because $B=A'$, the zeros of $B$ are exactly the critical points of $A$. Those line up with a local max and a local min of the brown curve on the figure.

So the statement is True.`,
      `**D.** → True

By the stem, $B=A'$, so the sign of green is the sign of the slope of brown: positive green means brown is rising. Wherever $A'>0$ on the figure, the brown curve $A$ is rising.

So the statement is True.`,
      `**E.** → True

Purple is $A-B$. It crosses zero precisely when $A=B$. With $B=A'$ that is the same as $A(x)=A'(x)$.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 153,
    solution_overview:
      "Named curves with $B=A'$; compare heights at $x=3$ and use differentiation alignment.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EA%2C%20B%2C%20and%20A%E2%88%92B%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-9076370%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22294.0%22%20x2%3D%22506%22%20y2%3D%22294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2294.0%22%20x2%3D%22506%22%20y2%3D%2294.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244.0%22%20x2%3D%22506%22%20y2%3D%2244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22194.0%22%20x2%3D%22506%22%20y2%3D%22194.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-15%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22294.0%22%20x2%3D%2252%22%20y2%3D%22294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-10%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22194.0%22%20x2%3D%2252%22%20y2%3D%22194.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22198.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2294.0%22%20x2%3D%2252%22%20y2%3D%2294.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2298.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E10%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2244.0%22%20x2%3D%2252%22%20y2%3D%2244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E15%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C319.0%2053.4%2C315.3%2054.8%2C311.6%2056.3%2C308.0%2057.7%2C304.5%2059.1%2C301.0%2060.5%2C297.6%2061.9%2C294.2%2063.4%2C290.9%2064.8%2C287.6%2066.2%2C284.4%2067.6%2C281.3%2069.0%2C278.2%2070.4%2C275.2%2071.9%2C272.2%2073.3%2C269.3%2074.7%2C266.4%2076.1%2C263.6%2077.5%2C260.8%2079.0%2C258.1%2080.4%2C255.4%2081.8%2C252.8%2083.2%2C250.3%2084.6%2C247.8%2086.0%2C245.3%2087.5%2C242.9%2088.9%2C240.5%2090.3%2C238.2%2091.7%2C236.0%2093.1%2C233.8%2094.6%2C231.6%2096.0%2C229.5%2097.4%2C227.4%2098.8%2C225.4%20100.2%2C223.5%20101.7%2C221.5%20103.1%2C219.7%20104.5%2C217.8%20105.9%2C216.0%20107.3%2C214.3%20108.8%2C212.6%20110.2%2C210.9%20111.6%2C209.3%20113.0%2C207.8%20114.4%2C206.2%20115.8%2C204.8%20117.3%2C203.3%20118.7%2C201.9%20120.1%2C200.6%20121.5%2C199.2%20122.9%2C198.0%20124.4%2C196.7%20125.8%2C195.5%20127.2%2C194.4%20128.6%2C193.3%20130.0%2C192.2%20131.4%2C191.1%20132.9%2C190.1%20134.3%2C189.2%20135.7%2C188.2%20137.1%2C187.3%20138.5%2C186.5%20140.0%2C185.7%20141.4%2C184.9%20142.8%2C184.1%20144.2%2C183.4%20145.6%2C182.7%20147.1%2C182.1%20148.5%2C181.5%20149.9%2C180.9%20151.3%2C180.3%20152.7%2C179.8%20154.2%2C179.3%20155.6%2C178.9%20157.0%2C178.4%20158.4%2C178.0%20159.8%2C177.7%20161.2%2C177.3%20162.7%2C177.0%20164.1%2C176.7%20165.5%2C176.5%20166.9%2C176.3%20168.3%2C176.1%20169.8%2C175.9%20171.2%2C175.8%20172.6%2C175.7%20174.0%2C175.6%20175.4%2C175.5%20176.8%2C175.5%20178.3%2C175.5%20179.7%2C175.5%20181.1%2C175.5%20182.5%2C175.6%20183.9%2C175.7%20185.4%2C175.8%20186.8%2C175.9%20188.2%2C176.1%20189.6%2C176.3%20191.0%2C176.5%20192.5%2C176.7%20193.9%2C176.9%20195.3%2C177.2%20196.7%2C177.4%20198.1%2C177.7%20199.6%2C178.1%20201.0%2C178.4%20202.4%2C178.8%20203.8%2C179.1%20205.2%2C179.5%20206.6%2C179.9%20208.1%2C180.3%20209.5%2C180.8%20210.9%2C181.2%20212.3%2C181.7%20213.7%2C182.2%20215.2%2C182.7%20216.6%2C183.2%20218.0%2C183.7%20219.4%2C184.3%20220.8%2C184.8%20222.2%2C185.4%20223.7%2C186.0%20225.1%2C186.6%20226.5%2C187.2%20227.9%2C187.8%20229.3%2C188.4%20230.8%2C189.1%20232.2%2C189.7%20233.6%2C190.4%20235.0%2C191.0%20236.4%2C191.7%20237.9%2C192.4%20239.3%2C193.1%20240.7%2C193.8%20242.1%2C194.5%20243.5%2C195.2%20244.9%2C195.9%20246.4%2C196.6%20247.8%2C197.4%20249.2%2C198.1%20250.6%2C198.8%20252.0%2C199.6%20253.5%2C200.3%20254.9%2C201.1%20256.3%2C201.8%20257.7%2C202.6%20259.1%2C203.3%20260.6%2C204.1%20262.0%2C204.9%20263.4%2C205.6%20264.8%2C206.4%20266.2%2C207.2%20267.6%2C207.9%20269.1%2C208.7%20270.5%2C209.5%20271.9%2C210.2%20273.3%2C211.0%20274.7%2C211.7%20276.2%2C212.5%20277.6%2C213.2%20279.0%2C214.0%20280.4%2C214.7%20281.8%2C215.5%20283.3%2C216.2%20284.7%2C217.0%20286.1%2C217.7%20287.5%2C218.4%20288.9%2C219.1%20290.4%2C219.9%20291.8%2C220.6%20293.2%2C221.3%20294.6%2C221.9%20296.0%2C222.6%20297.4%2C223.3%20298.9%2C224.0%20300.3%2C224.6%20301.7%2C225.3%20303.1%2C225.9%20304.5%2C226.5%20306.0%2C227.2%20307.4%2C227.8%20308.8%2C228.4%20310.2%2C228.9%20311.6%2C229.5%20313.1%2C230.1%20314.5%2C230.6%20315.9%2C231.2%20317.3%2C231.7%20318.7%2C232.2%20320.1%2C232.7%20321.6%2C233.1%20323.0%2C233.6%20324.4%2C234.0%20325.8%2C234.5%20327.2%2C234.9%20328.7%2C235.3%20330.1%2C235.6%20331.5%2C236.0%20332.9%2C236.3%20334.3%2C236.7%20335.8%2C237.0%20337.2%2C237.3%20338.6%2C237.5%20340.0%2C237.8%20341.4%2C238.0%20342.8%2C238.2%20344.3%2C238.4%20345.7%2C238.5%20347.1%2C238.7%20348.5%2C238.8%20349.9%2C238.9%20351.4%2C238.9%20352.8%2C239.0%20354.2%2C239.0%20355.6%2C239.0%20357.0%2C239.0%20358.4%2C238.9%20359.9%2C238.8%20361.3%2C238.7%20362.7%2C238.6%20364.1%2C238.4%20365.5%2C238.2%20367.0%2C238.0%20368.4%2C237.8%20369.8%2C237.5%20371.2%2C237.2%20372.6%2C236.9%20374.1%2C236.5%20375.5%2C236.1%20376.9%2C235.7%20378.3%2C235.3%20379.7%2C234.8%20381.1%2C234.3%20382.6%2C233.7%20384.0%2C233.2%20385.4%2C232.6%20386.8%2C231.9%20388.2%2C231.2%20389.7%2C230.5%20391.1%2C229.8%20392.5%2C229.0%20393.9%2C228.2%20395.3%2C227.3%20396.8%2C226.4%20398.2%2C225.5%20399.6%2C224.6%20401.0%2C223.6%20402.4%2C222.5%20403.9%2C221.5%20405.3%2C220.4%20406.7%2C219.2%20408.1%2C218.0%20409.5%2C216.8%20410.9%2C215.5%20412.4%2C214.2%20413.8%2C212.9%20415.2%2C211.5%20416.6%2C210.0%20418.0%2C208.6%20419.5%2C207.1%20420.9%2C205.5%20422.3%2C203.9%20423.7%2C202.3%20425.1%2C200.6%20426.6%2C198.8%20428.0%2C197.1%20429.4%2C195.2%20430.8%2C193.4%20432.2%2C191.5%20433.6%2C189.5%20435.1%2C187.5%20436.5%2C185.4%20437.9%2C183.3%20439.3%2C181.2%20440.7%2C179.0%20442.2%2C176.7%20443.6%2C174.5%20445.0%2C172.1%20446.4%2C169.7%20447.8%2C167.3%20449.2%2C164.8%20450.7%2C162.2%20452.1%2C159.6%20453.5%2C157.0%20454.9%2C154.3%20456.3%2C151.5%20457.8%2C148.7%20459.2%2C145.9%20460.6%2C143.0%20462.0%2C140.0%20463.4%2C137.0%20464.9%2C133.9%20466.3%2C130.8%20467.7%2C127.6%20469.1%2C124.3%20470.5%2C121.0%20471.9%2C117.7%20473.4%2C114.3%20474.8%2C110.8%20476.2%2C107.3%20477.6%2C103.7%20479.0%2C100.0%20480.5%2C96.3%20481.9%2C92.5%20483.3%2C88.7%20484.7%2C84.8%20486.1%2C80.9%20487.6%2C76.9%20489.0%2C72.8%20490.4%2C68.7%20491.8%2C64.5%20493.2%2C60.2%20494.6%2C55.9%20496.1%2C51.5%20497.5%2C47.1%20498.9%2C42.5%20500.3%2C38.0%20501.7%2C33.3%20503.2%2C28.6%20504.6%2C23.8%20506.0%2C19.0%22%20clip-path%3D%22url%28%23clip-9076370%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C9.0%2053.4%2C12.2%2054.8%2C15.3%2056.3%2C18.5%2057.7%2C21.6%2059.1%2C24.7%2060.5%2C27.7%2061.9%2C30.8%2063.4%2C33.8%2064.8%2C36.8%2066.2%2C39.8%2067.6%2C42.8%2069.0%2C45.7%2070.4%2C48.7%2071.9%2C51.6%2073.3%2C54.4%2074.7%2C57.3%2076.1%2C60.1%2077.5%2C63.0%2079.0%2C65.8%2080.4%2C68.5%2081.8%2C71.3%2083.2%2C74.0%2084.6%2C76.7%2086.0%2C79.4%2087.5%2C82.1%2088.9%2C84.7%2090.3%2C87.4%2091.7%2C90.0%2093.1%2C92.6%2094.6%2C95.1%2096.0%2C97.7%2097.4%2C100.2%2098.8%2C102.7%20100.2%2C105.2%20101.7%2C107.6%20103.1%2C110.1%20104.5%2C112.5%20105.9%2C114.9%20107.3%2C117.3%20108.8%2C119.6%20110.2%2C122.0%20111.6%2C124.3%20113.0%2C126.6%20114.4%2C128.8%20115.8%2C131.1%20117.3%2C133.3%20118.7%2C135.5%20120.1%2C137.7%20121.5%2C139.9%20122.9%2C142.0%20124.4%2C144.1%20125.8%2C146.2%20127.2%2C148.3%20128.6%2C150.4%20130.0%2C152.4%20131.4%2C154.4%20132.9%2C156.4%20134.3%2C158.4%20135.7%2C160.3%20137.1%2C162.3%20138.5%2C164.2%20140.0%2C166.1%20141.4%2C168.0%20142.8%2C169.8%20144.2%2C171.6%20145.6%2C173.4%20147.1%2C175.2%20148.5%2C177.0%20149.9%2C178.7%20151.3%2C180.4%20152.7%2C182.1%20154.2%2C183.8%20155.6%2C185.5%20157.0%2C187.1%20158.4%2C188.7%20159.8%2C190.3%20161.2%2C191.9%20162.7%2C193.5%20164.1%2C195.0%20165.5%2C196.5%20166.9%2C198.0%20168.3%2C199.5%20169.8%2C200.9%20171.2%2C202.3%20172.6%2C203.7%20174.0%2C205.1%20175.4%2C206.5%20176.8%2C207.8%20178.3%2C209.1%20179.7%2C210.4%20181.1%2C211.7%20182.5%2C213.0%20183.9%2C214.2%20185.4%2C215.4%20186.8%2C216.6%20188.2%2C217.8%20189.6%2C219.0%20191.0%2C220.1%20192.5%2C221.2%20193.9%2C222.3%20195.3%2C223.3%20196.7%2C224.4%20198.1%2C225.4%20199.6%2C226.4%20201.0%2C227.4%20202.4%2C228.4%20203.8%2C229.3%20205.2%2C230.2%20206.6%2C231.1%20208.1%2C232.0%20209.5%2C232.9%20210.9%2C233.7%20212.3%2C234.5%20213.7%2C235.3%20215.2%2C236.1%20216.6%2C236.8%20218.0%2C237.6%20219.4%2C238.3%20220.8%2C239.0%20222.2%2C239.6%20223.7%2C240.3%20225.1%2C240.9%20226.5%2C241.5%20227.9%2C242.1%20229.3%2C242.6%20230.8%2C243.2%20232.2%2C243.7%20233.6%2C244.2%20235.0%2C244.7%20236.4%2C245.1%20237.9%2C245.6%20239.3%2C246.0%20240.7%2C246.4%20242.1%2C246.7%20243.5%2C247.1%20244.9%2C247.4%20246.4%2C247.7%20247.8%2C248.0%20249.2%2C248.3%20250.6%2C248.5%20252.0%2C248.8%20253.5%2C249.0%20254.9%2C249.1%20256.3%2C249.3%20257.7%2C249.4%20259.1%2C249.6%20260.6%2C249.7%20262.0%2C249.7%20263.4%2C249.8%20264.8%2C249.8%20266.2%2C249.8%20267.6%2C249.8%20269.1%2C249.8%20270.5%2C249.7%20271.9%2C249.7%20273.3%2C249.6%20274.7%2C249.5%20276.2%2C249.3%20277.6%2C249.2%20279.0%2C249.0%20280.4%2C248.8%20281.8%2C248.6%20283.3%2C248.3%20284.7%2C248.1%20286.1%2C247.8%20287.5%2C247.5%20288.9%2C247.2%20290.4%2C246.8%20291.8%2C246.5%20293.2%2C246.1%20294.6%2C245.7%20296.0%2C245.2%20297.4%2C244.8%20298.9%2C244.3%20300.3%2C243.8%20301.7%2C243.3%20303.1%2C242.8%20304.5%2C242.2%20306.0%2C241.6%20307.4%2C241.0%20308.8%2C240.4%20310.2%2C239.8%20311.6%2C239.1%20313.1%2C238.4%20314.5%2C237.7%20315.9%2C237.0%20317.3%2C236.2%20318.7%2C235.5%20320.1%2C234.7%20321.6%2C233.9%20323.0%2C233.1%20324.4%2C232.2%20325.8%2C231.3%20327.2%2C230.4%20328.7%2C229.5%20330.1%2C228.6%20331.5%2C227.6%20332.9%2C226.6%20334.3%2C225.6%20335.8%2C224.6%20337.2%2C223.6%20338.6%2C222.5%20340.0%2C221.4%20341.4%2C220.3%20342.8%2C219.2%20344.3%2C218.1%20345.7%2C216.9%20347.1%2C215.7%20348.5%2C214.5%20349.9%2C213.3%20351.4%2C212.0%20352.8%2C210.7%20354.2%2C209.4%20355.6%2C208.1%20357.0%2C206.8%20358.4%2C205.4%20359.9%2C204.0%20361.3%2C202.6%20362.7%2C201.2%20364.1%2C199.8%20365.5%2C198.3%20367.0%2C196.8%20368.4%2C195.3%20369.8%2C193.8%20371.2%2C192.3%20372.6%2C190.7%20374.1%2C189.1%20375.5%2C187.5%20376.9%2C185.8%20378.3%2C184.2%20379.7%2C182.5%20381.1%2C180.8%20382.6%2C179.1%20384.0%2C177.4%20385.4%2C175.6%20386.8%2C173.8%20388.2%2C172.0%20389.7%2C170.2%20391.1%2C168.4%20392.5%2C166.5%20393.9%2C164.6%20395.3%2C162.7%20396.8%2C160.8%20398.2%2C158.8%20399.6%2C156.9%20401.0%2C154.9%20402.4%2C152.9%20403.9%2C150.8%20405.3%2C148.8%20406.7%2C146.7%20408.1%2C144.6%20409.5%2C142.5%20410.9%2C140.3%20412.4%2C138.2%20413.8%2C136.0%20415.2%2C133.8%20416.6%2C131.6%20418.0%2C129.3%20419.5%2C127.1%20420.9%2C124.8%20422.3%2C122.5%20423.7%2C120.1%20425.1%2C117.8%20426.6%2C115.4%20428.0%2C113.0%20429.4%2C110.6%20430.8%2C108.2%20432.2%2C105.7%20433.6%2C103.3%20435.1%2C100.8%20436.5%2C98.2%20437.9%2C95.7%20439.3%2C93.1%20440.7%2C90.6%20442.2%2C88.0%20443.6%2C85.3%20445.0%2C82.7%20446.4%2C80.0%20447.8%2C77.3%20449.2%2C74.6%20450.7%2C71.9%20452.1%2C69.1%20453.5%2C66.4%20454.9%2C63.6%20456.3%2C60.8%20457.8%2C57.9%20459.2%2C55.1%20460.6%2C52.2%20462.0%2C49.3%20463.4%2C46.4%20464.9%2C43.4%20466.3%2C40.5%20467.7%2C37.5%20469.1%2C34.5%20470.5%2C31.5%20471.9%2C28.4%20473.4%2C25.4%20474.8%2C22.3%20476.2%2C19.2%20477.6%2C16.0%20479.0%2C12.9%20480.5%2C9.7%20481.9%2C6.5%20483.3%2C3.3%20484.7%2C0.1%20486.1%2C-3.2%20487.6%2C-6.5%20489.0%2C-9.8%20490.4%2C-13.1%20491.8%2C-16.4%20493.2%2C-19.8%20494.6%2C-23.2%20496.1%2C-26.6%20497.5%2C-30.0%20498.9%2C-33.5%20500.3%2C-36.9%20501.7%2C-40.4%20503.2%2C-43.9%20504.6%2C-47.4%20506.0%2C-51.0%22%20clip-path%3D%22url%28%23clip-9076370%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C504.0%2053.4%2C497.1%2054.8%2C490.3%2056.3%2C483.5%2057.7%2C476.9%2059.1%2C470.3%2060.5%2C463.8%2061.9%2C457.4%2063.4%2C451.1%2064.8%2C444.8%2066.2%2C438.6%2067.6%2C432.5%2069.0%2C426.5%2070.4%2C420.5%2071.9%2C414.6%2073.3%2C408.8%2074.7%2C403.1%2076.1%2C397.4%2077.5%2C391.8%2079.0%2C386.3%2080.4%2C380.9%2081.8%2C375.5%2083.2%2C370.2%2084.6%2C365.0%2086.0%2C359.9%2087.5%2C354.8%2088.9%2C349.8%2090.3%2C344.9%2091.7%2C340.0%2093.1%2C335.2%2094.6%2C330.5%2096.0%2C325.8%2097.4%2C321.2%2098.8%2C316.7%20100.2%2C312.3%20101.7%2C307.9%20103.1%2C303.6%20104.5%2C299.3%20105.9%2C295.1%20107.3%2C291.0%20108.8%2C287.0%20110.2%2C283.0%20111.6%2C279.1%20113.0%2C275.2%20114.4%2C271.4%20115.8%2C267.7%20117.3%2C264.0%20118.7%2C260.4%20120.1%2C256.9%20121.5%2C253.4%20122.9%2C250.0%20124.4%2C246.6%20125.8%2C243.3%20127.2%2C240.1%20128.6%2C236.9%20130.0%2C233.8%20131.4%2C230.7%20132.9%2C227.7%20134.3%2C224.8%20135.7%2C221.9%20137.1%2C219.1%20138.5%2C216.3%20140.0%2C213.6%20141.4%2C210.9%20142.8%2C208.3%20144.2%2C205.8%20145.6%2C203.3%20147.1%2C200.9%20148.5%2C198.5%20149.9%2C196.1%20151.3%2C193.9%20152.7%2C191.7%20154.2%2C189.5%20155.6%2C187.4%20157.0%2C185.3%20158.4%2C183.3%20159.8%2C181.3%20161.2%2C179.4%20162.7%2C177.6%20164.1%2C175.8%20165.5%2C174.0%20166.9%2C172.3%20168.3%2C170.6%20169.8%2C169.0%20171.2%2C167.5%20172.6%2C165.9%20174.0%2C164.5%20175.4%2C163.0%20176.8%2C161.7%20178.3%2C160.3%20179.7%2C159.1%20181.1%2C157.8%20182.5%2C156.6%20183.9%2C155.5%20185.4%2C154.4%20186.8%2C153.3%20188.2%2C152.3%20189.6%2C151.3%20191.0%2C150.4%20192.5%2C149.5%20193.9%2C148.6%20195.3%2C147.8%20196.7%2C147.1%20198.1%2C146.3%20199.6%2C145.6%20201.0%2C145.0%20202.4%2C144.4%20203.8%2C143.8%20205.2%2C143.3%20206.6%2C142.8%20208.1%2C142.3%20209.5%2C141.9%20210.9%2C141.5%20212.3%2C141.2%20213.7%2C140.9%20215.2%2C140.6%20216.6%2C140.4%20218.0%2C140.2%20219.4%2C140.0%20220.8%2C139.9%20222.2%2C139.8%20223.7%2C139.7%20225.1%2C139.7%20226.5%2C139.7%20227.9%2C139.7%20229.3%2C139.8%20230.8%2C139.9%20232.2%2C140.0%20233.6%2C140.2%20235.0%2C140.3%20236.4%2C140.6%20237.9%2C140.8%20239.3%2C141.1%20240.7%2C141.4%20242.1%2C141.7%20243.5%2C142.1%20244.9%2C142.5%20246.4%2C142.9%20247.8%2C143.3%20249.2%2C143.8%20250.6%2C144.3%20252.0%2C144.8%20253.5%2C145.4%20254.9%2C145.9%20256.3%2C146.5%20257.7%2C147.1%20259.1%2C147.8%20260.6%2C148.4%20262.0%2C149.1%20263.4%2C149.8%20264.8%2C150.6%20266.2%2C151.3%20267.6%2C152.1%20269.1%2C152.9%20270.5%2C153.7%20271.9%2C154.5%20273.3%2C155.4%20274.7%2C156.3%20276.2%2C157.2%20277.6%2C158.1%20279.0%2C159.0%20280.4%2C159.9%20281.8%2C160.9%20283.3%2C161.9%20284.7%2C162.9%20286.1%2C163.9%20287.5%2C164.9%20288.9%2C166.0%20290.4%2C167.0%20291.8%2C168.1%20293.2%2C169.2%20294.6%2C170.3%20296.0%2C171.4%20297.4%2C172.5%20298.9%2C173.7%20300.3%2C174.8%20301.7%2C176.0%20303.1%2C177.2%20304.5%2C178.3%20306.0%2C179.5%20307.4%2C180.7%20308.8%2C182.0%20310.2%2C183.2%20311.6%2C184.4%20313.1%2C185.7%20314.5%2C186.9%20315.9%2C188.2%20317.3%2C189.4%20318.7%2C190.7%20320.1%2C192.0%20321.6%2C193.3%20323.0%2C194.5%20324.4%2C195.8%20325.8%2C197.1%20327.2%2C198.4%20328.7%2C199.8%20330.1%2C201.1%20331.5%2C202.4%20332.9%2C203.7%20334.3%2C205.0%20335.8%2C206.3%20337.2%2C207.7%20338.6%2C209.0%20340.0%2C210.3%20341.4%2C211.7%20342.8%2C213.0%20344.3%2C214.3%20345.7%2C215.6%20347.1%2C217.0%20348.5%2C218.3%20349.9%2C219.6%20351.4%2C220.9%20352.8%2C222.2%20354.2%2C223.6%20355.6%2C224.9%20357.0%2C226.2%20358.4%2C227.5%20359.9%2C228.8%20361.3%2C230.1%20362.7%2C231.4%20364.1%2C232.7%20365.5%2C233.9%20367.0%2C235.2%20368.4%2C236.5%20369.8%2C237.7%20371.2%2C239.0%20372.6%2C240.2%20374.1%2C241.4%20375.5%2C242.7%20376.9%2C243.9%20378.3%2C245.1%20379.7%2C246.3%20381.1%2C247.5%20382.6%2C248.6%20384.0%2C249.8%20385.4%2C250.9%20386.8%2C252.1%20388.2%2C253.2%20389.7%2C254.3%20391.1%2C255.4%20392.5%2C256.5%20393.9%2C257.6%20395.3%2C258.6%20396.8%2C259.7%20398.2%2C260.7%20399.6%2C261.7%20401.0%2C262.7%20402.4%2C263.7%20403.9%2C264.6%20405.3%2C265.6%20406.7%2C266.5%20408.1%2C267.4%20409.5%2C268.3%20410.9%2C269.2%20412.4%2C270.0%20413.8%2C270.9%20415.2%2C271.7%20416.6%2C272.5%20418.0%2C273.2%20419.5%2C274.0%20420.9%2C274.7%20422.3%2C275.4%20423.7%2C276.1%20425.1%2C276.8%20426.6%2C277.4%20428.0%2C278.0%20429.4%2C278.6%20430.8%2C279.2%20432.2%2C279.7%20433.6%2C280.2%20435.1%2C280.7%20436.5%2C281.2%20437.9%2C281.6%20439.3%2C282.1%20440.7%2C282.4%20442.2%2C282.8%20443.6%2C283.1%20445.0%2C283.4%20446.4%2C283.7%20447.8%2C283.9%20449.2%2C284.2%20450.7%2C284.3%20452.1%2C284.5%20453.5%2C284.6%20454.9%2C284.7%20456.3%2C284.8%20457.8%2C284.8%20459.2%2C284.8%20460.6%2C284.8%20462.0%2C284.7%20463.4%2C284.6%20464.9%2C284.5%20466.3%2C284.3%20467.7%2C284.1%20469.1%2C283.8%20470.5%2C283.6%20471.9%2C283.2%20473.4%2C282.9%20474.8%2C282.5%20476.2%2C282.1%20477.6%2C281.6%20479.0%2C281.1%20480.5%2C280.6%20481.9%2C280.0%20483.3%2C279.4%20484.7%2C278.8%20486.1%2C278.1%20487.6%2C277.3%20489.0%2C276.6%20490.4%2C275.8%20491.8%2C274.9%20493.2%2C274.0%20494.6%2C273.1%20496.1%2C272.1%20497.5%2C271.1%20498.9%2C270.0%20500.3%2C268.9%20501.7%2C267.7%20503.2%2C266.5%20504.6%2C265.3%20506.0%2C264.0%22%20clip-path%3D%22url%28%23clip-9076370%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EA%28x%29%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EB%28x%29%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EA%E2%88%92B%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-154",
    case_id: "MATH 11.154",
    title: "Compute signs and a value f′(−1) from the figure",
    subsection: "11.4",
    context:
      "The figure shows $f'$ with zeros at $x=-2$, $1$, and $2$. Decide TRUE or FALSE.",
    statements: [
      "On $(-2,1)$ one has $f'>0$, so $f$ is increasing on $(-2,1)$.",
      "At $x=-1$, the graph is clearly above the axis, so $f'(-1)>0$; reading the scale, the height is about $6$.",
      "On $(1,2)$ one has $f'<0$, so $f$ decreases on $(1,2)$.",
      "The local maximum of $f$ among these critical points is at $x=1$.",
      "At $x=-2$, $f'$ changes from positive to negative, so $x=-2$ is a local maximum of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Wherever the plotted derivative stays above the axis, $f'$ is positive and $f$ is increasing. Positive between $-2$ and $1$.

So the statement is True.`,
      `**B.** → True

Direct reading of the figure matches a positive height near $6$ at $x=-1$.

So the statement is True.`,
      `**C.** → True

Negative between $1$ and $2$.

So the statement is True.`,
      `**D.** → True

Critical points of $f$ are zeros of $f'$, not zeros of $f''$. A zero of $f''$ marks an extremum of $f'$, not automatically of $f$. $+$ to $-$ at $x=1$ ⇒ local max.

So the statement is True.`,
      `**E.** → False

A local maximum of $f$ is a zero of $f'$ where the sign of $f'$ changes from $+$ to $-$. For $x<-2$, $f'<0$; just after $x=-2$, $f'>0$. The change is $-$ to $+$, so $x=-2$ is a local **minimum** of $f$, not a local maximum. A nonzero peak of $f'$ is only where the slope of $f$ is steepest — not a turning point of $f$.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 154,
    solution_overview:
      "Sign chart on $(-2,1)$, $(1,2)$, and beyond; read $f'(-1)$ from the vertical scale.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EFirst%20derivative%20f%E2%80%B2%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3358365%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22564%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%2244%22%20x2%3D%22132.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%2244%22%20x2%3D%22213.1%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%2244%22%20x2%3D%22293.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%2244%22%20x2%3D%22374.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%2244%22%20x2%3D%22454.9%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%2244%22%20x2%3D%22535.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%2244%22%20x2%3D%22616.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22316.7%22%20x2%3D%22616%22%20y2%3D%22316.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22262.2%22%20x2%3D%22616%22%20y2%3D%22262.2%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22207.6%22%20x2%3D%22616%22%20y2%3D%22207.6%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22153.1%22%20x2%3D%22616%22%20y2%3D%22153.1%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2298.5%22%20x2%3D%22616%22%20y2%3D%2298.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22207.6%22%20x2%3D%22616%22%20y2%3D%22207.6%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%2244%22%20x2%3D%22293.7%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22616%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22132.6%22%20y1%3D%22344%22%20x2%3D%22132.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22132.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22213.1%22%20y1%3D%22344%22%20x2%3D%22213.1%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22213.1%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22293.7%22%20y1%3D%22344%22%20x2%3D%22293.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22293.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22374.3%22%20y1%3D%22344%22%20x2%3D%22374.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22374.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22454.9%22%20y1%3D%22344%22%20x2%3D%22454.9%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22454.9%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22535.4%22%20y1%3D%22344%22%20x2%3D%22535.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22535.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22616.0%22%20y1%3D%22344%22%20x2%3D%22616.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22616.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22316.7%22%20x2%3D%2252%22%20y2%3D%22316.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22320.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22262.2%22%20x2%3D%2252%22%20y2%3D%22262.2%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22266.2%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22207.6%22%20x2%3D%2252%22%20y2%3D%22207.6%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22211.6%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22153.1%22%20x2%3D%2252%22%20y2%3D%22153.1%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22157.1%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2298.5%22%20x2%3D%2252%22%20y2%3D%2298.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22102.5%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C480.4%2053.8%2C471.8%2055.5%2C463.3%2057.3%2C455.0%2059.0%2C446.8%2060.8%2C438.7%2062.6%2C430.8%2064.3%2C423.0%2066.1%2C415.3%2067.9%2C407.7%2069.6%2C400.2%2071.4%2C392.9%2073.2%2C385.7%2074.9%2C378.6%2076.7%2C371.7%2078.4%2C364.8%2080.2%2C358.1%2082.0%2C351.5%2083.7%2C345.0%2085.5%2C338.6%2087.2%2C332.3%2089.0%2C326.2%2090.8%2C320.1%2092.5%2C314.2%2094.3%2C308.4%2096.1%2C302.7%2097.8%2C297.1%2099.6%2C291.6%20101.3%2C286.2%20103.1%2C280.9%20104.9%2C275.7%20106.6%2C270.7%20108.4%2C265.7%20110.2%2C260.8%20111.9%2C256.1%20113.7%2C251.4%20115.5%2C246.9%20117.2%2C242.4%20119.0%2C238.0%20120.7%2C233.8%20122.5%2C229.6%20124.3%2C225.5%20126.0%2C221.6%20127.8%2C217.7%20129.6%2C213.9%20131.3%2C210.2%20133.1%2C206.6%20134.8%2C203.1%20136.6%2C199.7%20138.4%2C196.4%20140.1%2C193.1%20141.9%2C190.0%20143.7%2C186.9%20145.4%2C183.9%20147.2%2C181.0%20148.9%2C178.2%20150.7%2C175.5%20152.5%2C172.9%20154.2%2C170.3%20156.0%2C167.8%20157.8%2C165.4%20159.5%2C163.1%20161.3%2C160.8%20163.0%2C158.7%20164.8%2C156.6%20166.6%2C154.6%20168.3%2C152.6%20170.1%2C150.8%20171.8%2C149.0%20173.6%2C147.2%20175.4%2C145.6%20177.1%2C144.0%20178.9%2C142.5%20180.7%2C141.1%20182.4%2C139.7%20184.2%2C138.4%20186.0%2C137.2%20187.7%2C136.0%20189.5%2C134.9%20191.2%2C133.8%20193.0%2C132.8%20194.8%2C131.9%20196.5%2C131.1%20198.3%2C130.3%20200.1%2C129.5%20201.8%2C128.9%20203.6%2C128.2%20205.3%2C127.7%20207.1%2C127.2%20208.9%2C126.7%20210.6%2C126.3%20212.4%2C126.0%20214.2%2C125.7%20215.9%2C125.4%20217.7%2C125.2%20219.4%2C125.1%20221.2%2C125.0%20223.0%2C124.9%20224.7%2C124.9%20226.5%2C125.0%20228.2%2C125.1%20230.0%2C125.2%20231.8%2C125.4%20233.5%2C125.6%20235.3%2C125.9%20237.1%2C126.2%20238.8%2C126.6%20240.6%2C127.0%20242.3%2C127.4%20244.1%2C127.9%20245.9%2C128.4%20247.6%2C128.9%20249.4%2C129.5%20251.2%2C130.1%20252.9%2C130.7%20254.7%2C131.4%20256.4%2C132.1%20258.2%2C132.9%20260.0%2C133.6%20261.7%2C134.4%20263.5%2C135.3%20265.3%2C136.1%20267.0%2C137.0%20268.8%2C137.9%20270.6%2C138.9%20272.3%2C139.8%20274.1%2C140.8%20275.8%2C141.8%20277.6%2C142.8%20279.4%2C143.9%20281.1%2C145.0%20282.9%2C146.0%20284.6%2C147.1%20286.4%2C148.3%20288.2%2C149.4%20289.9%2C150.6%20291.7%2C151.7%20293.5%2C152.9%20295.2%2C154.1%20297.0%2C155.3%20298.8%2C156.5%20300.5%2C157.8%20302.3%2C159.0%20304.0%2C160.3%20305.8%2C161.5%20307.6%2C162.8%20309.3%2C164.1%20311.1%2C165.3%20312.8%2C166.6%20314.6%2C167.9%20316.4%2C169.2%20318.1%2C170.5%20319.9%2C171.8%20321.7%2C173.1%20323.4%2C174.4%20325.2%2C175.7%20326.9%2C177.0%20328.7%2C178.2%20330.5%2C179.5%20332.2%2C180.8%20334.0%2C182.1%20335.8%2C183.3%20337.5%2C184.6%20339.3%2C185.8%20341.0%2C187.1%20342.8%2C188.3%20344.6%2C189.5%20346.3%2C190.7%20348.1%2C191.9%20349.9%2C193.1%20351.6%2C194.3%20353.4%2C195.4%20355.1%2C196.6%20356.9%2C197.7%20358.7%2C198.8%20360.4%2C199.9%20362.2%2C200.9%20364.0%2C202.0%20365.7%2C203.0%20367.5%2C204.0%20369.2%2C205.0%20371.0%2C205.9%20372.8%2C206.9%20374.5%2C207.8%20376.3%2C208.6%20378.1%2C209.5%20379.8%2C210.3%20381.6%2C211.1%20383.4%2C211.9%20385.1%2C212.6%20386.9%2C213.3%20388.6%2C214.0%20390.4%2C214.6%20392.2%2C215.2%20393.9%2C215.8%20395.7%2C216.3%20397.4%2C216.8%20399.2%2C217.3%20401.0%2C217.7%20402.7%2C218.1%20404.5%2C218.4%20406.3%2C218.7%20408.0%2C219.0%20409.8%2C219.2%20411.6%2C219.4%20413.3%2C219.5%20415.1%2C219.6%20416.8%2C219.6%20418.6%2C219.6%20420.4%2C219.6%20422.1%2C219.5%20423.9%2C219.3%20425.6%2C219.1%20427.4%2C218.8%20429.2%2C218.5%20430.9%2C218.2%20432.7%2C217.8%20434.5%2C217.3%20436.2%2C216.8%20438.0%2C216.2%20439.8%2C215.6%20441.5%2C214.9%20443.3%2C214.1%20445.0%2C213.3%20446.8%2C212.4%20448.6%2C211.5%20450.3%2C210.5%20452.1%2C209.4%20453.9%2C208.3%20455.6%2C207.1%20457.4%2C205.9%20459.1%2C204.5%20460.9%2C203.2%20462.7%2C201.7%20464.4%2C200.2%20466.2%2C198.6%20467.9%2C196.9%20469.7%2C195.2%20471.5%2C193.4%20473.2%2C191.5%20475.0%2C189.5%20476.8%2C187.5%20478.5%2C185.4%20480.3%2C183.2%20482.1%2C180.9%20483.8%2C178.6%20485.6%2C176.2%20487.3%2C173.7%20489.1%2C171.1%20490.9%2C168.4%20492.6%2C165.7%20494.4%2C162.9%20496.1%2C159.9%20497.9%2C156.9%20499.7%2C153.9%20501.4%2C150.7%20503.2%2C147.4%20505.0%2C144.1%20506.7%2C140.6%20508.5%2C137.1%20510.2%2C133.5%20512.0%2C129.8%20513.8%2C126.0%20515.5%2C122.1%20517.3%2C118.1%20519.1%2C114.0%20520.8%2C109.8%20522.6%2C105.5%20524.4%2C101.1%20526.1%2C96.6%20527.9%2C92.1%20529.6%2C87.4%20531.4%2C82.6%20533.2%2C77.7%20534.9%2C72.7%20536.7%2C67.6%20538.5%2C62.4%20540.2%2C57.1%20542.0%2C51.7%20543.7%2C46.2%20545.5%2C40.6%20547.3%2C34.8%20549.0%2C29.0%20550.8%2C23.0%20552.5%2C17.0%20554.3%2C10.8%20556.1%2C4.5%20557.8%2C-1.9%20559.6%2C-8.5%20561.4%2C-15.1%20563.1%2C-21.9%20564.9%2C-28.7%20566.6%2C-35.7%20568.4%2C-42.8%20570.2%2C-50.1%20571.9%2C-57.4%20573.7%2C-64.9%20575.5%2C-72.5%20577.2%2C-80.2%20579.0%2C-88.1%20580.8%2C-96.1%20582.5%2C-104.2%20584.3%2C-112.4%20586.0%2C-120.8%20587.8%2C-129.2%20589.6%2C-137.9%20591.3%2C-146.6%20593.1%2C-155.5%20594.9%2C-164.5%20596.6%2C-173.6%20598.4%2C-182.9%20600.1%2C-192.3%20601.9%2C-201.9%20603.7%2C-211.6%20605.4%2C-221.4%20607.2%2C-231.4%20608.9%2C-241.5%20610.7%2C-251.7%20612.5%2C-262.1%20614.2%2C-272.6%20616.0%2C-283.3%22%20clip-path%3D%22url%28%23clip-3358365%29%22%2F%3E%0A%3Ccircle%20cx%3D%22132.6%22%20cy%3D%22207.6%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22374.3%22%20cy%3D%22207.6%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ccircle%20cx%3D%22454.9%22%20cy%3D%22207.6%22%20r%3D%223.4%22%20fill%3D%22%238B5A2B%22%2F%3E%0A%3Ctext%20x%3D%22334%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-155",
    case_id: "MATH 11.155",
    title: "f′, f″, and a vertical shift of f′",
    subsection: "11.4",
    context:
      "Brown is $f'$, green is $f''$, and purple is the vertical shift $f'-2$, all on one plane. Decide TRUE or FALSE from the figure only.",
    statements: [
      "At $x=0$, brown is below the axis and purple is even lower.",
      "Zeros of green sit under a local max and a local min of brown.",
      "Purple crosses the axis at different $x$-values from brown.",
      "Wherever green is positive, brown is rising.",
      "Because purple is just brown shifted down by $2$, brown and purple have the same local max/min $x$-coordinates."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

At $x=0$ on the shared axes, Read both brown and purple at $x=0$.

So the statement is True.`,
      `**B.** → True

Critical points of $f$ are zeros of $f'$, not zeros of $f''$. A zero of $f''$ marks an extremum of $f'$, not automatically of $f$. Extrema of $f'$ align with zeros of $f''$.

So the statement is True.`,
      `**C.** → True

A vertical shift moves the axis crossings.

So the statement is True.`,
      `**D.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Where $f''$ is positive, $f'$ is increasing.

So the statement is True.`,
      `**E.** → True

A vertical shift does not move peaks left/right — only up/down.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 155,
    solution_overview:
      "Shift changes zeros but not the $x$-location of peaks; $f''$ still marks extrema of $f'$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EThree%20related%20curves%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-6784096%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22289.5%22%20x2%3D%22506%22%20y2%3D%22289.5%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22234.9%22%20x2%3D%22506%22%20y2%3D%22234.9%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22180.4%22%20x2%3D%22506%22%20y2%3D%22180.4%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22125.8%22%20x2%3D%22506%22%20y2%3D%22125.8%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2271.3%22%20x2%3D%22506%22%20y2%3D%2271.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22180.4%22%20x2%3D%22506%22%20y2%3D%22180.4%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22289.5%22%20x2%3D%2252%22%20y2%3D%22289.5%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22293.5%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22234.9%22%20x2%3D%2252%22%20y2%3D%22234.9%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22238.9%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22180.4%22%20x2%3D%2252%22%20y2%3D%22180.4%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22184.4%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22125.8%22%20x2%3D%2252%22%20y2%3D%22125.8%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22129.8%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2271.3%22%20x2%3D%2252%22%20y2%3D%2271.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2275.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E8%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C180.4%2053.4%2C176.6%2054.8%2C172.8%2056.3%2C169.2%2057.7%2C165.6%2059.1%2C162.1%2060.5%2C158.7%2061.9%2C155.4%2063.4%2C152.1%2064.8%2C148.9%2066.2%2C145.8%2067.6%2C142.7%2069.0%2C139.7%2070.4%2C136.8%2071.9%2C133.9%2073.3%2C131.2%2074.7%2C128.4%2076.1%2C125.8%2077.5%2C123.2%2079.0%2C120.7%2080.4%2C118.3%2081.8%2C115.9%2083.2%2C113.6%2084.6%2C111.3%2086.0%2C109.2%2087.5%2C107.0%2088.9%2C105.0%2090.3%2C103.0%2091.7%2C101.1%2093.1%2C99.2%2094.6%2C97.4%2096.0%2C95.7%2097.4%2C94.0%2098.8%2C92.3%20100.2%2C90.8%20101.7%2C89.3%20103.1%2C87.8%20104.5%2C86.4%20105.9%2C85.1%20107.3%2C83.8%20108.8%2C82.6%20110.2%2C81.4%20111.6%2C80.3%20113.0%2C79.2%20114.4%2C78.2%20115.8%2C77.3%20117.3%2C76.3%20118.7%2C75.5%20120.1%2C74.7%20121.5%2C73.9%20122.9%2C73.2%20124.4%2C72.6%20125.8%2C72.0%20127.2%2C71.4%20128.6%2C70.9%20130.0%2C70.5%20131.4%2C70.1%20132.9%2C69.7%20134.3%2C69.4%20135.7%2C69.1%20137.1%2C68.9%20138.5%2C68.7%20140.0%2C68.6%20141.4%2C68.5%20142.8%2C68.4%20144.2%2C68.4%20145.6%2C68.5%20147.1%2C68.5%20148.5%2C68.6%20149.9%2C68.8%20151.3%2C69.0%20152.7%2C69.2%20154.2%2C69.5%20155.6%2C69.8%20157.0%2C70.1%20158.4%2C70.5%20159.8%2C71.0%20161.2%2C71.4%20162.7%2C71.9%20164.1%2C72.4%20165.5%2C73.0%20166.9%2C73.6%20168.3%2C74.2%20169.8%2C74.9%20171.2%2C75.5%20172.6%2C76.3%20174.0%2C77.0%20175.4%2C77.8%20176.8%2C78.6%20178.3%2C79.4%20179.7%2C80.3%20181.1%2C81.2%20182.5%2C82.1%20183.9%2C83.1%20185.4%2C84.1%20186.8%2C85.1%20188.2%2C86.1%20189.6%2C87.2%20191.0%2C88.2%20192.5%2C89.3%20193.9%2C90.5%20195.3%2C91.6%20196.7%2C92.8%20198.1%2C94.0%20199.6%2C95.2%20201.0%2C96.4%20202.4%2C97.7%20203.8%2C99.0%20205.2%2C100.3%20206.6%2C101.6%20208.1%2C102.9%20209.5%2C104.3%20210.9%2C105.6%20212.3%2C107.0%20213.7%2C108.4%20215.2%2C109.8%20216.6%2C111.2%20218.0%2C112.7%20219.4%2C114.1%20220.8%2C115.6%20222.2%2C117.1%20223.7%2C118.6%20225.1%2C120.1%20226.5%2C121.6%20227.9%2C123.1%20229.3%2C124.7%20230.8%2C126.2%20232.2%2C127.7%20233.6%2C129.3%20235.0%2C130.9%20236.4%2C132.5%20237.9%2C134.0%20239.3%2C135.6%20240.7%2C137.2%20242.1%2C138.8%20243.5%2C140.4%20244.9%2C142.0%20246.4%2C143.6%20247.8%2C145.3%20249.2%2C146.9%20250.6%2C148.5%20252.0%2C150.1%20253.5%2C151.7%20254.9%2C153.3%20256.3%2C155.0%20257.7%2C156.6%20259.1%2C158.2%20260.6%2C159.8%20262.0%2C161.4%20263.4%2C163.0%20264.8%2C164.6%20266.2%2C166.2%20267.6%2C167.8%20269.1%2C169.4%20270.5%2C171.0%20271.9%2C172.6%20273.3%2C174.2%20274.7%2C175.7%20276.2%2C177.3%20277.6%2C178.8%20279.0%2C180.4%20280.4%2C181.9%20281.8%2C183.4%20283.3%2C184.9%20284.7%2C186.4%20286.1%2C187.9%20287.5%2C189.4%20288.9%2C190.8%20290.4%2C192.3%20291.8%2C193.7%20293.2%2C195.1%20294.6%2C196.5%20296.0%2C197.9%20297.4%2C199.3%20298.9%2C200.7%20300.3%2C202.0%20301.7%2C203.3%20303.1%2C204.6%20304.5%2C205.9%20306.0%2C207.2%20307.4%2C208.4%20308.8%2C209.6%20310.2%2C210.8%20311.6%2C212.0%20313.1%2C213.2%20314.5%2C214.3%20315.9%2C215.4%20317.3%2C216.5%20318.7%2C217.6%20320.1%2C218.6%20321.6%2C219.6%20323.0%2C220.6%20324.4%2C221.6%20325.8%2C222.5%20327.2%2C223.4%20328.7%2C224.3%20330.1%2C225.2%20331.5%2C226.0%20332.9%2C226.8%20334.3%2C227.6%20335.8%2C228.3%20337.2%2C229.0%20338.6%2C229.7%20340.0%2C230.3%20341.4%2C230.9%20342.8%2C231.5%20344.3%2C232.0%20345.7%2C232.5%20347.1%2C233.0%20348.5%2C233.4%20349.9%2C233.8%20351.4%2C234.2%20352.8%2C234.5%20354.2%2C234.8%20355.6%2C235.1%20357.0%2C235.3%20358.4%2C235.5%20359.9%2C235.6%20361.3%2C235.7%20362.7%2C235.7%20364.1%2C235.7%20365.5%2C235.7%20367.0%2C235.6%20368.4%2C235.5%20369.8%2C235.3%20371.2%2C235.1%20372.6%2C234.9%20374.1%2C234.6%20375.5%2C234.3%20376.9%2C233.9%20378.3%2C233.4%20379.7%2C232.9%20381.1%2C232.4%20382.6%2C231.8%20384.0%2C231.2%20385.4%2C230.5%20386.8%2C229.8%20388.2%2C229.0%20389.7%2C228.2%20391.1%2C227.3%20392.5%2C226.4%20393.9%2C225.4%20395.3%2C224.4%20396.8%2C223.3%20398.2%2C222.1%20399.6%2C220.9%20401.0%2C219.7%20402.4%2C218.4%20403.9%2C217.0%20405.3%2C215.6%20406.7%2C214.1%20408.1%2C212.5%20409.5%2C210.9%20410.9%2C209.3%20412.4%2C207.5%20413.8%2C205.8%20415.2%2C203.9%20416.6%2C202.0%20418.0%2C200.1%20419.5%2C198.0%20420.9%2C195.9%20422.3%2C193.8%20423.7%2C191.6%20425.1%2C189.3%20426.6%2C186.9%20428.0%2C184.5%20429.4%2C182.1%20430.8%2C179.5%20432.2%2C176.9%20433.6%2C174.2%20435.1%2C171.5%20436.5%2C168.6%20437.9%2C165.8%20439.3%2C162.8%20440.7%2C159.8%20442.2%2C156.7%20443.6%2C153.5%20445.0%2C150.3%20446.4%2C146.9%20447.8%2C143.6%20449.2%2C140.1%20450.7%2C136.6%20452.1%2C132.9%20453.5%2C129.3%20454.9%2C125.5%20456.3%2C121.7%20457.8%2C117.7%20459.2%2C113.7%20460.6%2C109.7%20462.0%2C105.5%20463.4%2C101.3%20464.9%2C97.0%20466.3%2C92.6%20467.7%2C88.1%20469.1%2C83.6%20470.5%2C78.9%20471.9%2C74.2%20473.4%2C69.4%20474.8%2C64.5%20476.2%2C59.6%20477.6%2C54.5%20479.0%2C49.4%20480.5%2C44.2%20481.9%2C38.9%20483.3%2C33.5%20484.7%2C28.0%20486.1%2C22.4%20487.6%2C16.7%20489.0%2C11.0%20490.4%2C5.2%20491.8%2C-0.8%20493.2%2C-6.8%20494.6%2C-12.9%20496.1%2C-19.1%20497.5%2C-25.4%20498.9%2C-31.8%20500.3%2C-38.2%20501.7%2C-44.8%20503.2%2C-51.5%20504.6%2C-58.2%20506.0%2C-65.1%22%20clip-path%3D%22url%28%23clip-6784096%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-24.2%2053.4%2C-20.1%2054.8%2C-16.1%2056.3%2C-12.0%2057.7%2C-8.0%2059.1%2C-4.1%2060.5%2C-0.2%2061.9%2C3.7%2063.4%2C7.6%2064.8%2C11.5%2066.2%2C15.3%2067.6%2C19.1%2069.0%2C22.8%2070.4%2C26.6%2071.9%2C30.3%2073.3%2C33.9%2074.7%2C37.6%2076.1%2C41.2%2077.5%2C44.8%2079.0%2C48.4%2080.4%2C51.9%2081.8%2C55.4%2083.2%2C58.9%2084.6%2C62.3%2086.0%2C65.7%2087.5%2C69.1%2088.9%2C72.5%2090.3%2C75.8%2091.7%2C79.1%2093.1%2C82.4%2094.6%2C85.6%2096.0%2C88.8%2097.4%2C92.0%2098.8%2C95.2%20100.2%2C98.3%20101.7%2C101.4%20103.1%2C104.5%20104.5%2C107.5%20105.9%2C110.5%20107.3%2C113.5%20108.8%2C116.4%20110.2%2C119.4%20111.6%2C122.3%20113.0%2C125.1%20114.4%2C128.0%20115.8%2C130.8%20117.3%2C133.6%20118.7%2C136.3%20120.1%2C139.0%20121.5%2C141.7%20122.9%2C144.4%20124.4%2C147.0%20125.8%2C149.7%20127.2%2C152.2%20128.6%2C154.8%20130.0%2C157.3%20131.4%2C159.8%20132.9%2C162.3%20134.3%2C164.7%20135.7%2C167.1%20137.1%2C169.5%20138.5%2C171.8%20140.0%2C174.2%20141.4%2C176.5%20142.8%2C178.7%20144.2%2C181.0%20145.6%2C183.2%20147.1%2C185.3%20148.5%2C187.5%20149.9%2C189.6%20151.3%2C191.7%20152.7%2C193.8%20154.2%2C195.8%20155.6%2C197.8%20157.0%2C199.8%20158.4%2C201.7%20159.8%2C203.7%20161.2%2C205.5%20162.7%2C207.4%20164.1%2C209.2%20165.5%2C211.0%20166.9%2C212.8%20168.3%2C214.6%20169.8%2C216.3%20171.2%2C218.0%20172.6%2C219.6%20174.0%2C221.3%20175.4%2C222.9%20176.8%2C224.4%20178.3%2C226.0%20179.7%2C227.5%20181.1%2C229.0%20182.5%2C230.5%20183.9%2C231.9%20185.4%2C233.3%20186.8%2C234.7%20188.2%2C236.0%20189.6%2C237.3%20191.0%2C238.6%20192.5%2C239.9%20193.9%2C241.1%20195.3%2C242.3%20196.7%2C243.5%20198.1%2C244.6%20199.6%2C245.7%20201.0%2C246.8%20202.4%2C247.9%20203.8%2C248.9%20205.2%2C249.9%20206.6%2C250.9%20208.1%2C251.8%20209.5%2C252.7%20210.9%2C253.6%20212.3%2C254.4%20213.7%2C255.3%20215.2%2C256.1%20216.6%2C256.8%20218.0%2C257.6%20219.4%2C258.3%20220.8%2C259.0%20222.2%2C259.6%20223.7%2C260.2%20225.1%2C260.8%20226.5%2C261.4%20227.9%2C262.0%20229.3%2C262.5%20230.8%2C262.9%20232.2%2C263.4%20233.6%2C263.8%20235.0%2C264.2%20236.4%2C264.6%20237.9%2C264.9%20239.3%2C265.2%20240.7%2C265.5%20242.1%2C265.8%20243.5%2C266.0%20244.9%2C266.2%20246.4%2C266.3%20247.8%2C266.5%20249.2%2C266.6%20250.6%2C266.7%20252.0%2C266.7%20253.5%2C266.7%20254.9%2C266.7%20256.3%2C266.7%20257.7%2C266.6%20259.1%2C266.5%20260.6%2C266.4%20262.0%2C266.2%20263.4%2C266.1%20264.8%2C265.9%20266.2%2C265.6%20267.6%2C265.4%20269.1%2C265.1%20270.5%2C264.7%20271.9%2C264.4%20273.3%2C264.0%20274.7%2C263.6%20276.2%2C263.1%20277.6%2C262.7%20279.0%2C262.2%20280.4%2C261.7%20281.8%2C261.1%20283.3%2C260.5%20284.7%2C259.9%20286.1%2C259.3%20287.5%2C258.6%20288.9%2C257.9%20290.4%2C257.2%20291.8%2C256.4%20293.2%2C255.6%20294.6%2C254.8%20296.0%2C254.0%20297.4%2C253.1%20298.9%2C252.2%20300.3%2C251.3%20301.7%2C250.3%20303.1%2C249.3%20304.5%2C248.3%20306.0%2C247.3%20307.4%2C246.2%20308.8%2C245.1%20310.2%2C244.0%20311.6%2C242.8%20313.1%2C241.6%20314.5%2C240.4%20315.9%2C239.2%20317.3%2C237.9%20318.7%2C236.6%20320.1%2C235.3%20321.6%2C233.9%20323.0%2C232.5%20324.4%2C231.1%20325.8%2C229.6%20327.2%2C228.2%20328.7%2C226.7%20330.1%2C225.1%20331.5%2C223.6%20332.9%2C222.0%20334.3%2C220.4%20335.8%2C218.7%20337.2%2C217.0%20338.6%2C215.3%20340.0%2C213.6%20341.4%2C211.8%20342.8%2C210.0%20344.3%2C208.2%20345.7%2C206.4%20347.1%2C204.5%20348.5%2C202.6%20349.9%2C200.7%20351.4%2C198.7%20352.8%2C196.7%20354.2%2C194.7%20355.6%2C192.6%20357.0%2C190.6%20358.4%2C188.4%20359.9%2C186.3%20361.3%2C184.1%20362.7%2C181.9%20364.1%2C179.7%20365.5%2C177.5%20367.0%2C175.2%20368.4%2C172.9%20369.8%2C170.5%20371.2%2C168.2%20372.6%2C165.8%20374.1%2C163.4%20375.5%2C160.9%20376.9%2C158.4%20378.3%2C155.9%20379.7%2C153.4%20381.1%2C150.8%20382.6%2C148.2%20384.0%2C145.6%20385.4%2C142.9%20386.8%2C140.2%20388.2%2C137.5%20389.7%2C134.8%20391.1%2C132.0%20392.5%2C129.2%20393.9%2C126.4%20395.3%2C123.5%20396.8%2C120.7%20398.2%2C117.7%20399.6%2C114.8%20401.0%2C111.8%20402.4%2C108.8%20403.9%2C105.8%20405.3%2C102.7%20406.7%2C99.7%20408.1%2C96.5%20409.5%2C93.4%20410.9%2C90.2%20412.4%2C87.0%20413.8%2C83.8%20415.2%2C80.5%20416.6%2C77.3%20418.0%2C73.9%20419.5%2C70.6%20420.9%2C67.2%20422.3%2C63.8%20423.7%2C60.4%20425.1%2C56.9%20426.6%2C53.4%20428.0%2C49.9%20429.4%2C46.4%20430.8%2C42.8%20432.2%2C39.2%20433.6%2C35.6%20435.1%2C31.9%20436.5%2C28.2%20437.9%2C24.5%20439.3%2C20.8%20440.7%2C17.0%20442.2%2C13.2%20443.6%2C9.3%20445.0%2C5.5%20446.4%2C1.6%20447.8%2C-2.3%20449.2%2C-6.3%20450.7%2C-10.3%20452.1%2C-14.3%20453.5%2C-18.3%20454.9%2C-22.4%20456.3%2C-26.5%20457.8%2C-30.6%20459.2%2C-34.7%20460.6%2C-38.9%20462.0%2C-43.1%20463.4%2C-47.4%20464.9%2C-51.6%20466.3%2C-55.9%20467.7%2C-60.2%20469.1%2C-64.6%20470.5%2C-69.0%20471.9%2C-73.4%20473.4%2C-77.8%20474.8%2C-82.3%20476.2%2C-86.8%20477.6%2C-91.3%20479.0%2C-95.9%20480.5%2C-100.4%20481.9%2C-105.0%20483.3%2C-109.7%20484.7%2C-114.3%20486.1%2C-119.0%20487.6%2C-123.8%20489.0%2C-128.5%20490.4%2C-133.3%20491.8%2C-138.1%20493.2%2C-143.0%20494.6%2C-147.8%20496.1%2C-152.7%20497.5%2C-157.7%20498.9%2C-162.6%20500.3%2C-167.6%20501.7%2C-172.6%20503.2%2C-177.6%20504.6%2C-182.7%20506.0%2C-187.8%22%20clip-path%3D%22url%28%23clip-6784096%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C207.6%2053.4%2C203.8%2054.8%2C200.1%2056.3%2C196.5%2057.7%2C192.9%2059.1%2C189.4%2060.5%2C186.0%2061.9%2C182.6%2063.4%2C179.4%2064.8%2C176.2%2066.2%2C173.0%2067.6%2C170.0%2069.0%2C167.0%2070.4%2C164.1%2071.9%2C161.2%2073.3%2C158.4%2074.7%2C155.7%2076.1%2C153.1%2077.5%2C150.5%2079.0%2C148.0%2080.4%2C145.6%2081.8%2C143.2%2083.2%2C140.9%2084.6%2C138.6%2086.0%2C136.4%2087.5%2C134.3%2088.9%2C132.3%2090.3%2C130.3%2091.7%2C128.3%2093.1%2C126.5%2094.6%2C124.7%2096.0%2C122.9%2097.4%2C121.2%2098.8%2C119.6%20100.2%2C118.0%20101.7%2C116.5%20103.1%2C115.1%20104.5%2C113.7%20105.9%2C112.3%20107.3%2C111.1%20108.8%2C109.8%20110.2%2C108.7%20111.6%2C107.6%20113.0%2C106.5%20114.4%2C105.5%20115.8%2C104.5%20117.3%2C103.6%20118.7%2C102.8%20120.1%2C102.0%20121.5%2C101.2%20122.9%2C100.5%20124.4%2C99.9%20125.8%2C99.3%20127.2%2C98.7%20128.6%2C98.2%20130.0%2C97.8%20131.4%2C97.4%20132.9%2C97.0%20134.3%2C96.7%20135.7%2C96.4%20137.1%2C96.2%20138.5%2C96.0%20140.0%2C95.9%20141.4%2C95.8%20142.8%2C95.7%20144.2%2C95.7%20145.6%2C95.7%20147.1%2C95.8%20148.5%2C95.9%20149.9%2C96.1%20151.3%2C96.3%20152.7%2C96.5%20154.2%2C96.8%20155.6%2C97.1%20157.0%2C97.4%20158.4%2C97.8%20159.8%2C98.2%20161.2%2C98.7%20162.7%2C99.2%20164.1%2C99.7%20165.5%2C100.2%20166.9%2C100.8%20168.3%2C101.5%20169.8%2C102.1%20171.2%2C102.8%20172.6%2C103.5%20174.0%2C104.3%20175.4%2C105.1%20176.8%2C105.9%20178.3%2C106.7%20179.7%2C107.6%20181.1%2C108.5%20182.5%2C109.4%20183.9%2C110.4%20185.4%2C111.3%20186.8%2C112.4%20188.2%2C113.4%20189.6%2C114.4%20191.0%2C115.5%20192.5%2C116.6%20193.9%2C117.7%20195.3%2C118.9%20196.7%2C120.1%20198.1%2C121.3%20199.6%2C122.5%20201.0%2C123.7%20202.4%2C125.0%20203.8%2C126.2%20205.2%2C127.5%20206.6%2C128.9%20208.1%2C130.2%20209.5%2C131.5%20210.9%2C132.9%20212.3%2C134.3%20213.7%2C135.7%20215.2%2C137.1%20216.6%2C138.5%20218.0%2C140.0%20219.4%2C141.4%20220.8%2C142.9%20222.2%2C144.4%20223.7%2C145.8%20225.1%2C147.4%20226.5%2C148.9%20227.9%2C150.4%20229.3%2C151.9%20230.8%2C153.5%20232.2%2C155.0%20233.6%2C156.6%20235.0%2C158.2%20236.4%2C159.7%20237.9%2C161.3%20239.3%2C162.9%20240.7%2C164.5%20242.1%2C166.1%20243.5%2C167.7%20244.9%2C169.3%20246.4%2C170.9%20247.8%2C172.5%20249.2%2C174.1%20250.6%2C175.8%20252.0%2C177.4%20253.5%2C179.0%20254.9%2C180.6%20256.3%2C182.2%20257.7%2C183.8%20259.1%2C185.5%20260.6%2C187.1%20262.0%2C188.7%20263.4%2C190.3%20264.8%2C191.9%20266.2%2C193.5%20267.6%2C195.1%20269.1%2C196.7%20270.5%2C198.3%20271.9%2C199.9%20273.3%2C201.4%20274.7%2C203.0%20276.2%2C204.5%20277.6%2C206.1%20279.0%2C207.6%20280.4%2C209.2%20281.8%2C210.7%20283.3%2C212.2%20284.7%2C213.7%20286.1%2C215.2%20287.5%2C216.6%20288.9%2C218.1%20290.4%2C219.6%20291.8%2C221.0%20293.2%2C222.4%20294.6%2C223.8%20296.0%2C225.2%20297.4%2C226.6%20298.9%2C227.9%20300.3%2C229.3%20301.7%2C230.6%20303.1%2C231.9%20304.5%2C233.2%20306.0%2C234.4%20307.4%2C235.7%20308.8%2C236.9%20310.2%2C238.1%20311.6%2C239.3%20313.1%2C240.5%20314.5%2C241.6%20315.9%2C242.7%20317.3%2C243.8%20318.7%2C244.9%20320.1%2C245.9%20321.6%2C246.9%20323.0%2C247.9%20324.4%2C248.9%20325.8%2C249.8%20327.2%2C250.7%20328.7%2C251.6%20330.1%2C252.5%20331.5%2C253.3%20332.9%2C254.1%20334.3%2C254.8%20335.8%2C255.6%20337.2%2C256.3%20338.6%2C257.0%20340.0%2C257.6%20341.4%2C258.2%20342.8%2C258.8%20344.3%2C259.3%20345.7%2C259.8%20347.1%2C260.3%20348.5%2C260.7%20349.9%2C261.1%20351.4%2C261.5%20352.8%2C261.8%20354.2%2C262.1%20355.6%2C262.3%20357.0%2C262.6%20358.4%2C262.7%20359.9%2C262.9%20361.3%2C262.9%20362.7%2C263.0%20364.1%2C263.0%20365.5%2C263.0%20367.0%2C262.9%20368.4%2C262.8%20369.8%2C262.6%20371.2%2C262.4%20372.6%2C262.2%20374.1%2C261.9%20375.5%2C261.5%20376.9%2C261.1%20378.3%2C260.7%20379.7%2C260.2%20381.1%2C259.7%20382.6%2C259.1%20384.0%2C258.5%20385.4%2C257.8%20386.8%2C257.1%20388.2%2C256.3%20389.7%2C255.5%20391.1%2C254.6%20392.5%2C253.7%20393.9%2C252.7%20395.3%2C251.6%20396.8%2C250.5%20398.2%2C249.4%20399.6%2C248.2%20401.0%2C246.9%20402.4%2C245.6%20403.9%2C244.3%20405.3%2C242.8%20406.7%2C241.3%20408.1%2C239.8%20409.5%2C238.2%20410.9%2C236.5%20412.4%2C234.8%20413.8%2C233.0%20415.2%2C231.2%20416.6%2C229.3%20418.0%2C227.3%20419.5%2C225.3%20420.9%2C223.2%20422.3%2C221.1%20423.7%2C218.8%20425.1%2C216.6%20426.6%2C214.2%20428.0%2C211.8%20429.4%2C209.3%20430.8%2C206.8%20432.2%2C204.2%20433.6%2C201.5%20435.1%2C198.7%20436.5%2C195.9%20437.9%2C193.0%20439.3%2C190.1%20440.7%2C187.0%20442.2%2C183.9%20443.6%2C180.8%20445.0%2C177.5%20446.4%2C174.2%20447.8%2C170.8%20449.2%2C167.4%20450.7%2C163.8%20452.1%2C160.2%20453.5%2C156.5%20454.9%2C152.8%20456.3%2C148.9%20457.8%2C145.0%20459.2%2C141.0%20460.6%2C136.9%20462.0%2C132.8%20463.4%2C128.6%20464.9%2C124.3%20466.3%2C119.9%20467.7%2C115.4%20469.1%2C110.8%20470.5%2C106.2%20471.9%2C101.5%20473.4%2C96.7%20474.8%2C91.8%20476.2%2C86.8%20477.6%2C81.8%20479.0%2C76.7%20480.5%2C71.4%20481.9%2C66.1%20483.3%2C60.7%20484.7%2C55.2%20486.1%2C49.7%20487.6%2C44.0%20489.0%2C38.3%20490.4%2C32.4%20491.8%2C26.5%20493.2%2C20.5%20494.6%2C14.4%20496.1%2C8.2%20497.5%2C1.9%20498.9%2C-4.5%20500.3%2C-11.0%20501.7%2C-17.5%20503.2%2C-24.2%20504.6%2C-31.0%20506.0%2C-37.8%22%20clip-path%3D%22url%28%23clip-6784096%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%E2%88%922%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-156",
    case_id: "MATH 11.156",
    title: "Three firms' marginal profits: signs, peaks, and advice",
    subsection: "11.4",
    context:
      "Brown, green, and purple are three firms' marginal profits on shared axes. Decide TRUE or FALSE.",
    statements: [
      "At $x=3$, brown and purple are above the axis while green is below it.",
      "Firm A (brown) has a local profit peak near $x=5$.",
      "At $x=0$, brown is already positive.",
      "Purple crosses from positive to negative somewhere in $(4,5)$.",
      "All three firms have the same expand/contract recommendation at every $x$ in $(0,6)$."
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Brown and purple sit above the axis; green sits below.

So the statement is True.`,
      `**B.** → True

Profit has a local peak where marginal profit crosses from positive to negative. Brown crosses from $+$ to $-$ near $x=5$, so firm A's profit has a local peak there.

So the statement is True.`,
      `**C.** → False

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Brown is below the axis; it only becomes positive after $x=1$.

So the statement is False.`,
      `**D.** → True

Purple crosses the axis from above to below between $x=4$ and $x=5$, so its sign changes from positive to negative there.

So the statement is True.`,
      `**E.** → False

Each firm's expand-versus-contract advice is the sign of its marginal-profit curve. If the colours disagree in sign at even one $x$, they do not share one recommendation on the whole interval. At $x=3$, brown and purple recommend expand while green recommends contract.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 156,
    solution_overview:
      "Compare signs across colours at chosen $x$; locate brown's $+$ to $-$ crossing and purple's zero.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EThree%20marginal-profit%20curves%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3806376%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22284.0%22%20x2%3D%22506%22%20y2%3D%22284.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22164.0%22%20x2%3D%22506%22%20y2%3D%22164.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22104.0%22%20x2%3D%22506%22%20y2%3D%22104.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22284.0%22%20x2%3D%2252%22%20y2%3D%22284.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22288.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22164.0%22%20x2%3D%2252%22%20y2%3D%22164.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22168.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22104.0%22%20x2%3D%2252%22%20y2%3D%22104.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22108.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C374.0%2053.4%2C370.6%2054.8%2C367.3%2056.3%2C364.0%2057.7%2C360.7%2059.1%2C357.4%2060.5%2C354.1%2061.9%2C350.9%2063.4%2C347.7%2064.8%2C344.5%2066.2%2C341.3%2067.6%2C338.2%2069.0%2C335.0%2070.4%2C331.9%2071.9%2C328.8%2073.3%2C325.7%2074.7%2C322.7%2076.1%2C319.7%2077.5%2C316.7%2079.0%2C313.7%2080.4%2C310.7%2081.8%2C307.8%2083.2%2C304.9%2084.6%2C302.0%2086.0%2C299.1%2087.5%2C296.2%2088.9%2C293.4%2090.3%2C290.6%2091.7%2C287.8%2093.1%2C285.0%2094.6%2C282.2%2096.0%2C279.5%2097.4%2C276.8%2098.8%2C274.1%20100.2%2C271.4%20101.7%2C268.8%20103.1%2C266.2%20104.5%2C263.6%20105.9%2C261.0%20107.3%2C258.4%20108.8%2C255.9%20110.2%2C253.4%20111.6%2C250.9%20113.0%2C248.4%20114.4%2C245.9%20115.8%2C243.5%20117.3%2C241.1%20118.7%2C238.7%20120.1%2C236.3%20121.5%2C233.9%20122.9%2C231.6%20124.4%2C229.3%20125.8%2C227.0%20127.2%2C224.8%20128.6%2C222.5%20130.0%2C220.3%20131.4%2C218.1%20132.9%2C215.9%20134.3%2C213.7%20135.7%2C211.6%20137.1%2C209.5%20138.5%2C207.4%20140.0%2C205.3%20141.4%2C203.2%20142.8%2C201.2%20144.2%2C199.2%20145.6%2C197.2%20147.1%2C195.2%20148.5%2C193.3%20149.9%2C191.3%20151.3%2C189.4%20152.7%2C187.5%20154.2%2C185.7%20155.6%2C183.8%20157.0%2C182.0%20158.4%2C180.2%20159.8%2C178.4%20161.2%2C176.7%20162.7%2C174.9%20164.1%2C173.2%20165.5%2C171.5%20166.9%2C169.8%20168.3%2C168.2%20169.8%2C166.5%20171.2%2C164.9%20172.6%2C163.3%20174.0%2C161.8%20175.4%2C160.2%20176.8%2C158.7%20178.3%2C157.2%20179.7%2C155.7%20181.1%2C154.2%20182.5%2C152.8%20183.9%2C151.3%20185.4%2C149.9%20186.8%2C148.6%20188.2%2C147.2%20189.6%2C145.9%20191.0%2C144.5%20192.5%2C143.2%20193.9%2C142.0%20195.3%2C140.7%20196.7%2C139.5%20198.1%2C138.3%20199.6%2C137.1%20201.0%2C135.9%20202.4%2C134.8%20203.8%2C133.6%20205.2%2C132.5%20206.6%2C131.4%20208.1%2C130.4%20209.5%2C129.3%20210.9%2C128.3%20212.3%2C127.3%20213.7%2C126.3%20215.2%2C125.4%20216.6%2C124.4%20218.0%2C123.5%20219.4%2C122.6%20220.8%2C121.7%20222.2%2C120.9%20223.7%2C120.0%20225.1%2C119.2%20226.5%2C118.4%20227.9%2C117.7%20229.3%2C116.9%20230.8%2C116.2%20232.2%2C115.5%20233.6%2C114.8%20235.0%2C114.1%20236.4%2C113.5%20237.9%2C112.9%20239.3%2C112.3%20240.7%2C111.7%20242.1%2C111.1%20243.5%2C110.6%20244.9%2C110.1%20246.4%2C109.6%20247.8%2C109.1%20249.2%2C108.7%20250.6%2C108.2%20252.0%2C107.8%20253.5%2C107.4%20254.9%2C107.0%20256.3%2C106.7%20257.7%2C106.4%20259.1%2C106.1%20260.6%2C105.8%20262.0%2C105.5%20263.4%2C105.3%20264.8%2C105.1%20266.2%2C104.9%20267.6%2C104.7%20269.1%2C104.5%20270.5%2C104.4%20271.9%2C104.3%20273.3%2C104.2%20274.7%2C104.1%20276.2%2C104.0%20277.6%2C104.0%20279.0%2C104.0%20280.4%2C104.0%20281.8%2C104.0%20283.3%2C104.1%20284.7%2C104.2%20286.1%2C104.3%20287.5%2C104.4%20288.9%2C104.5%20290.4%2C104.7%20291.8%2C104.9%20293.2%2C105.1%20294.6%2C105.3%20296.0%2C105.5%20297.4%2C105.8%20298.9%2C106.1%20300.3%2C106.4%20301.7%2C106.7%20303.1%2C107.0%20304.5%2C107.4%20306.0%2C107.8%20307.4%2C108.2%20308.8%2C108.7%20310.2%2C109.1%20311.6%2C109.6%20313.1%2C110.1%20314.5%2C110.6%20315.9%2C111.1%20317.3%2C111.7%20318.7%2C112.3%20320.1%2C112.9%20321.6%2C113.5%20323.0%2C114.1%20324.4%2C114.8%20325.8%2C115.5%20327.2%2C116.2%20328.7%2C116.9%20330.1%2C117.7%20331.5%2C118.4%20332.9%2C119.2%20334.3%2C120.0%20335.8%2C120.9%20337.2%2C121.7%20338.6%2C122.6%20340.0%2C123.5%20341.4%2C124.4%20342.8%2C125.4%20344.3%2C126.3%20345.7%2C127.3%20347.1%2C128.3%20348.5%2C129.3%20349.9%2C130.4%20351.4%2C131.4%20352.8%2C132.5%20354.2%2C133.6%20355.6%2C134.8%20357.0%2C135.9%20358.4%2C137.1%20359.9%2C138.3%20361.3%2C139.5%20362.7%2C140.7%20364.1%2C142.0%20365.5%2C143.2%20367.0%2C144.5%20368.4%2C145.9%20369.8%2C147.2%20371.2%2C148.6%20372.6%2C149.9%20374.1%2C151.3%20375.5%2C152.8%20376.9%2C154.2%20378.3%2C155.7%20379.7%2C157.2%20381.1%2C158.7%20382.6%2C160.2%20384.0%2C161.8%20385.4%2C163.3%20386.8%2C164.9%20388.2%2C166.5%20389.7%2C168.2%20391.1%2C169.8%20392.5%2C171.5%20393.9%2C173.2%20395.3%2C174.9%20396.8%2C176.7%20398.2%2C178.4%20399.6%2C180.2%20401.0%2C182.0%20402.4%2C183.8%20403.9%2C185.7%20405.3%2C187.5%20406.7%2C189.4%20408.1%2C191.3%20409.5%2C193.3%20410.9%2C195.2%20412.4%2C197.2%20413.8%2C199.2%20415.2%2C201.2%20416.6%2C203.2%20418.0%2C205.3%20419.5%2C207.4%20420.9%2C209.5%20422.3%2C211.6%20423.7%2C213.7%20425.1%2C215.9%20426.6%2C218.1%20428.0%2C220.3%20429.4%2C222.5%20430.8%2C224.8%20432.2%2C227.0%20433.6%2C229.3%20435.1%2C231.6%20436.5%2C233.9%20437.9%2C236.3%20439.3%2C238.7%20440.7%2C241.1%20442.2%2C243.5%20443.6%2C245.9%20445.0%2C248.4%20446.4%2C250.9%20447.8%2C253.4%20449.2%2C255.9%20450.7%2C258.4%20452.1%2C261.0%20453.5%2C263.6%20454.9%2C266.2%20456.3%2C268.8%20457.8%2C271.4%20459.2%2C274.1%20460.6%2C276.8%20462.0%2C279.5%20463.4%2C282.2%20464.9%2C285.0%20466.3%2C287.8%20467.7%2C290.6%20469.1%2C293.4%20470.5%2C296.2%20471.9%2C299.1%20473.4%2C302.0%20474.8%2C304.9%20476.2%2C307.8%20477.6%2C310.7%20479.0%2C313.7%20480.5%2C316.7%20481.9%2C319.7%20483.3%2C322.7%20484.7%2C325.7%20486.1%2C328.8%20487.6%2C331.9%20489.0%2C335.0%20490.4%2C338.2%20491.8%2C341.3%20493.2%2C344.5%20494.6%2C347.7%20496.1%2C350.9%20497.5%2C354.1%20498.9%2C357.4%20500.3%2C360.7%20501.7%2C364.0%20503.2%2C367.3%20504.6%2C370.6%20506.0%2C374.0%22%20clip-path%3D%22url%28%23clip-3806376%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-16.0%2053.4%2C-12.6%2054.8%2C-9.3%2056.3%2C-6.0%2057.7%2C-2.7%2059.1%2C0.6%2060.5%2C3.9%2061.9%2C7.1%2063.4%2C10.3%2064.8%2C13.5%2066.2%2C16.7%2067.6%2C19.8%2069.0%2C23.0%2070.4%2C26.1%2071.9%2C29.2%2073.3%2C32.3%2074.7%2C35.3%2076.1%2C38.3%2077.5%2C41.3%2079.0%2C44.3%2080.4%2C47.3%2081.8%2C50.2%2083.2%2C53.1%2084.6%2C56.0%2086.0%2C58.9%2087.5%2C61.8%2088.9%2C64.6%2090.3%2C67.4%2091.7%2C70.2%2093.1%2C73.0%2094.6%2C75.8%2096.0%2C78.5%2097.4%2C81.2%2098.8%2C83.9%20100.2%2C86.6%20101.7%2C89.2%20103.1%2C91.8%20104.5%2C94.4%20105.9%2C97.0%20107.3%2C99.6%20108.8%2C102.1%20110.2%2C104.6%20111.6%2C107.1%20113.0%2C109.6%20114.4%2C112.1%20115.8%2C114.5%20117.3%2C116.9%20118.7%2C119.3%20120.1%2C121.7%20121.5%2C124.1%20122.9%2C126.4%20124.4%2C128.7%20125.8%2C131.0%20127.2%2C133.2%20128.6%2C135.5%20130.0%2C137.7%20131.4%2C139.9%20132.9%2C142.1%20134.3%2C144.3%20135.7%2C146.4%20137.1%2C148.5%20138.5%2C150.6%20140.0%2C152.7%20141.4%2C154.8%20142.8%2C156.8%20144.2%2C158.8%20145.6%2C160.8%20147.1%2C162.8%20148.5%2C164.7%20149.9%2C166.7%20151.3%2C168.6%20152.7%2C170.5%20154.2%2C172.3%20155.6%2C174.2%20157.0%2C176.0%20158.4%2C177.8%20159.8%2C179.6%20161.2%2C181.3%20162.7%2C183.1%20164.1%2C184.8%20165.5%2C186.5%20166.9%2C188.2%20168.3%2C189.8%20169.8%2C191.5%20171.2%2C193.1%20172.6%2C194.7%20174.0%2C196.2%20175.4%2C197.8%20176.8%2C199.3%20178.3%2C200.8%20179.7%2C202.3%20181.1%2C203.8%20182.5%2C205.2%20183.9%2C206.7%20185.4%2C208.1%20186.8%2C209.4%20188.2%2C210.8%20189.6%2C212.1%20191.0%2C213.5%20192.5%2C214.8%20193.9%2C216.0%20195.3%2C217.3%20196.7%2C218.5%20198.1%2C219.7%20199.6%2C220.9%20201.0%2C222.1%20202.4%2C223.2%20203.8%2C224.4%20205.2%2C225.5%20206.6%2C226.6%20208.1%2C227.6%20209.5%2C228.7%20210.9%2C229.7%20212.3%2C230.7%20213.7%2C231.7%20215.2%2C232.6%20216.6%2C233.6%20218.0%2C234.5%20219.4%2C235.4%20220.8%2C236.3%20222.2%2C237.1%20223.7%2C238.0%20225.1%2C238.8%20226.5%2C239.6%20227.9%2C240.3%20229.3%2C241.1%20230.8%2C241.8%20232.2%2C242.5%20233.6%2C243.2%20235.0%2C243.9%20236.4%2C244.5%20237.9%2C245.1%20239.3%2C245.7%20240.7%2C246.3%20242.1%2C246.9%20243.5%2C247.4%20244.9%2C247.9%20246.4%2C248.4%20247.8%2C248.9%20249.2%2C249.3%20250.6%2C249.8%20252.0%2C250.2%20253.5%2C250.6%20254.9%2C251.0%20256.3%2C251.3%20257.7%2C251.6%20259.1%2C251.9%20260.6%2C252.2%20262.0%2C252.5%20263.4%2C252.7%20264.8%2C252.9%20266.2%2C253.1%20267.6%2C253.3%20269.1%2C253.5%20270.5%2C253.6%20271.9%2C253.7%20273.3%2C253.8%20274.7%2C253.9%20276.2%2C254.0%20277.6%2C254.0%20279.0%2C254.0%20280.4%2C254.0%20281.8%2C254.0%20283.3%2C253.9%20284.7%2C253.8%20286.1%2C253.7%20287.5%2C253.6%20288.9%2C253.5%20290.4%2C253.3%20291.8%2C253.1%20293.2%2C252.9%20294.6%2C252.7%20296.0%2C252.5%20297.4%2C252.2%20298.9%2C251.9%20300.3%2C251.6%20301.7%2C251.3%20303.1%2C251.0%20304.5%2C250.6%20306.0%2C250.2%20307.4%2C249.8%20308.8%2C249.3%20310.2%2C248.9%20311.6%2C248.4%20313.1%2C247.9%20314.5%2C247.4%20315.9%2C246.9%20317.3%2C246.3%20318.7%2C245.7%20320.1%2C245.1%20321.6%2C244.5%20323.0%2C243.9%20324.4%2C243.2%20325.8%2C242.5%20327.2%2C241.8%20328.7%2C241.1%20330.1%2C240.3%20331.5%2C239.6%20332.9%2C238.8%20334.3%2C238.0%20335.8%2C237.1%20337.2%2C236.3%20338.6%2C235.4%20340.0%2C234.5%20341.4%2C233.6%20342.8%2C232.6%20344.3%2C231.7%20345.7%2C230.7%20347.1%2C229.7%20348.5%2C228.7%20349.9%2C227.6%20351.4%2C226.6%20352.8%2C225.5%20354.2%2C224.4%20355.6%2C223.2%20357.0%2C222.1%20358.4%2C220.9%20359.9%2C219.7%20361.3%2C218.5%20362.7%2C217.3%20364.1%2C216.0%20365.5%2C214.8%20367.0%2C213.5%20368.4%2C212.1%20369.8%2C210.8%20371.2%2C209.4%20372.6%2C208.1%20374.1%2C206.7%20375.5%2C205.2%20376.9%2C203.8%20378.3%2C202.3%20379.7%2C200.8%20381.1%2C199.3%20382.6%2C197.8%20384.0%2C196.2%20385.4%2C194.7%20386.8%2C193.1%20388.2%2C191.5%20389.7%2C189.8%20391.1%2C188.2%20392.5%2C186.5%20393.9%2C184.8%20395.3%2C183.1%20396.8%2C181.3%20398.2%2C179.6%20399.6%2C177.8%20401.0%2C176.0%20402.4%2C174.2%20403.9%2C172.3%20405.3%2C170.5%20406.7%2C168.6%20408.1%2C166.7%20409.5%2C164.7%20410.9%2C162.8%20412.4%2C160.8%20413.8%2C158.8%20415.2%2C156.8%20416.6%2C154.8%20418.0%2C152.7%20419.5%2C150.6%20420.9%2C148.5%20422.3%2C146.4%20423.7%2C144.3%20425.1%2C142.1%20426.6%2C139.9%20428.0%2C137.7%20429.4%2C135.5%20430.8%2C133.2%20432.2%2C131.0%20433.6%2C128.7%20435.1%2C126.4%20436.5%2C124.1%20437.9%2C121.7%20439.3%2C119.3%20440.7%2C116.9%20442.2%2C114.5%20443.6%2C112.1%20445.0%2C109.6%20446.4%2C107.1%20447.8%2C104.6%20449.2%2C102.1%20450.7%2C99.6%20452.1%2C97.0%20453.5%2C94.4%20454.9%2C91.8%20456.3%2C89.2%20457.8%2C86.6%20459.2%2C83.9%20460.6%2C81.2%20462.0%2C78.5%20463.4%2C75.8%20464.9%2C73.0%20466.3%2C70.2%20467.7%2C67.4%20469.1%2C64.6%20470.5%2C61.8%20471.9%2C58.9%20473.4%2C56.0%20474.8%2C53.1%20476.2%2C50.2%20477.6%2C47.3%20479.0%2C44.3%20480.5%2C41.3%20481.9%2C38.3%20483.3%2C35.3%20484.7%2C32.3%20486.1%2C29.2%20487.6%2C26.1%20489.0%2C23.0%20490.4%2C19.8%20491.8%2C16.7%20493.2%2C13.5%20494.6%2C10.3%20496.1%2C7.1%20497.5%2C3.9%20498.9%2C0.6%20500.3%2C-2.7%20501.7%2C-6.0%20503.2%2C-9.3%20504.6%2C-12.6%20506.0%2C-16.0%22%20clip-path%3D%22url%28%23clip-3806376%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C149.0%2053.4%2C149.3%2054.8%2C149.7%2056.3%2C150.0%2057.7%2C150.3%2059.1%2C150.7%2060.5%2C151.0%2061.9%2C151.4%2063.4%2C151.7%2064.8%2C152.0%2066.2%2C152.4%2067.6%2C152.7%2069.0%2C153.1%2070.4%2C153.4%2071.9%2C153.7%2073.3%2C154.1%2074.7%2C154.4%2076.1%2C154.7%2077.5%2C155.1%2079.0%2C155.4%2080.4%2C155.8%2081.8%2C156.1%2083.2%2C156.4%2084.6%2C156.8%2086.0%2C157.1%2087.5%2C157.4%2088.9%2C157.8%2090.3%2C158.1%2091.7%2C158.4%2093.1%2C158.8%2094.6%2C159.1%2096.0%2C159.5%2097.4%2C159.8%2098.8%2C160.1%20100.2%2C160.5%20101.7%2C160.8%20103.1%2C161.2%20104.5%2C161.5%20105.9%2C161.8%20107.3%2C162.2%20108.8%2C162.5%20110.2%2C162.8%20111.6%2C163.2%20113.0%2C163.5%20114.4%2C163.9%20115.8%2C164.2%20117.3%2C164.5%20118.7%2C164.9%20120.1%2C165.2%20121.5%2C165.5%20122.9%2C165.9%20124.4%2C166.2%20125.8%2C166.6%20127.2%2C166.9%20128.6%2C167.2%20130.0%2C167.6%20131.4%2C167.9%20132.9%2C168.2%20134.3%2C168.6%20135.7%2C168.9%20137.1%2C169.2%20138.5%2C169.6%20140.0%2C169.9%20141.4%2C170.3%20142.8%2C170.6%20144.2%2C170.9%20145.6%2C171.3%20147.1%2C171.6%20148.5%2C171.9%20149.9%2C172.3%20151.3%2C172.6%20152.7%2C173.0%20154.2%2C173.3%20155.6%2C173.6%20157.0%2C174.0%20158.4%2C174.3%20159.8%2C174.7%20161.2%2C175.0%20162.7%2C175.3%20164.1%2C175.7%20165.5%2C176.0%20166.9%2C176.3%20168.3%2C176.7%20169.8%2C177.0%20171.2%2C177.3%20172.6%2C177.7%20174.0%2C178.0%20175.4%2C178.4%20176.8%2C178.7%20178.3%2C179.0%20179.7%2C179.4%20181.1%2C179.7%20182.5%2C180.1%20183.9%2C180.4%20185.4%2C180.7%20186.8%2C181.1%20188.2%2C181.4%20189.6%2C181.7%20191.0%2C182.1%20192.5%2C182.4%20193.9%2C182.8%20195.3%2C183.1%20196.7%2C183.4%20198.1%2C183.8%20199.6%2C184.1%20201.0%2C184.4%20202.4%2C184.8%20203.8%2C185.1%20205.2%2C185.4%20206.6%2C185.8%20208.1%2C186.1%20209.5%2C186.5%20210.9%2C186.8%20212.3%2C187.1%20213.7%2C187.5%20215.2%2C187.8%20216.6%2C188.2%20218.0%2C188.5%20219.4%2C188.8%20220.8%2C189.2%20222.2%2C189.5%20223.7%2C189.8%20225.1%2C190.2%20226.5%2C190.5%20227.9%2C190.8%20229.3%2C191.2%20230.8%2C191.5%20232.2%2C191.9%20233.6%2C192.2%20235.0%2C192.5%20236.4%2C192.9%20237.9%2C193.2%20239.3%2C193.6%20240.7%2C193.9%20242.1%2C194.2%20243.5%2C194.6%20244.9%2C194.9%20246.4%2C195.2%20247.8%2C195.6%20249.2%2C195.9%20250.6%2C196.3%20252.0%2C196.6%20253.5%2C196.9%20254.9%2C197.3%20256.3%2C197.6%20257.7%2C197.9%20259.1%2C198.3%20260.6%2C198.6%20262.0%2C198.9%20263.4%2C199.3%20264.8%2C199.6%20266.2%2C200.0%20267.6%2C200.3%20269.1%2C200.6%20270.5%2C201.0%20271.9%2C201.3%20273.3%2C201.6%20274.7%2C202.0%20276.2%2C202.3%20277.6%2C202.7%20279.0%2C203.0%20280.4%2C203.3%20281.8%2C203.7%20283.3%2C204.0%20284.7%2C204.3%20286.1%2C204.7%20287.5%2C205.0%20288.9%2C205.4%20290.4%2C205.7%20291.8%2C206.0%20293.2%2C206.4%20294.6%2C206.7%20296.0%2C207.1%20297.4%2C207.4%20298.9%2C207.7%20300.3%2C208.1%20301.7%2C208.4%20303.1%2C208.7%20304.5%2C209.1%20306.0%2C209.4%20307.4%2C209.8%20308.8%2C210.1%20310.2%2C210.4%20311.6%2C210.8%20313.1%2C211.1%20314.5%2C211.4%20315.9%2C211.8%20317.3%2C212.1%20318.7%2C212.4%20320.1%2C212.8%20321.6%2C213.1%20323.0%2C213.5%20324.4%2C213.8%20325.8%2C214.1%20327.2%2C214.5%20328.7%2C214.8%20330.1%2C215.2%20331.5%2C215.5%20332.9%2C215.8%20334.3%2C216.2%20335.8%2C216.5%20337.2%2C216.8%20338.6%2C217.2%20340.0%2C217.5%20341.4%2C217.8%20342.8%2C218.2%20344.3%2C218.5%20345.7%2C218.9%20347.1%2C219.2%20348.5%2C219.5%20349.9%2C219.9%20351.4%2C220.2%20352.8%2C220.6%20354.2%2C220.9%20355.6%2C221.2%20357.0%2C221.6%20358.4%2C221.9%20359.9%2C222.2%20361.3%2C222.6%20362.7%2C222.9%20364.1%2C223.2%20365.5%2C223.6%20367.0%2C223.9%20368.4%2C224.3%20369.8%2C224.6%20371.2%2C224.9%20372.6%2C225.3%20374.1%2C225.6%20375.5%2C225.9%20376.9%2C226.3%20378.3%2C226.6%20379.7%2C227.0%20381.1%2C227.3%20382.6%2C227.6%20384.0%2C228.0%20385.4%2C228.3%20386.8%2C228.6%20388.2%2C229.0%20389.7%2C229.3%20391.1%2C229.7%20392.5%2C230.0%20393.9%2C230.3%20395.3%2C230.7%20396.8%2C231.0%20398.2%2C231.4%20399.6%2C231.7%20401.0%2C232.0%20402.4%2C232.4%20403.9%2C232.7%20405.3%2C233.0%20406.7%2C233.4%20408.1%2C233.7%20409.5%2C234.0%20410.9%2C234.4%20412.4%2C234.7%20413.8%2C235.1%20415.2%2C235.4%20416.6%2C235.7%20418.0%2C236.1%20419.5%2C236.4%20420.9%2C236.8%20422.3%2C237.1%20423.7%2C237.4%20425.1%2C237.8%20426.6%2C238.1%20428.0%2C238.4%20429.4%2C238.8%20430.8%2C239.1%20432.2%2C239.5%20433.6%2C239.8%20435.1%2C240.1%20436.5%2C240.5%20437.9%2C240.8%20439.3%2C241.1%20440.7%2C241.5%20442.2%2C241.8%20443.6%2C242.2%20445.0%2C242.5%20446.4%2C242.8%20447.8%2C243.2%20449.2%2C243.5%20450.7%2C243.8%20452.1%2C244.2%20453.5%2C244.5%20454.9%2C244.8%20456.3%2C245.2%20457.8%2C245.5%20459.2%2C245.9%20460.6%2C246.2%20462.0%2C246.5%20463.4%2C246.9%20464.9%2C247.2%20466.3%2C247.6%20467.7%2C247.9%20469.1%2C248.2%20470.5%2C248.6%20471.9%2C248.9%20473.4%2C249.2%20474.8%2C249.6%20476.2%2C249.9%20477.6%2C250.2%20479.0%2C250.6%20480.5%2C250.9%20481.9%2C251.3%20483.3%2C251.6%20484.7%2C251.9%20486.1%2C252.3%20487.6%2C252.6%20489.0%2C252.9%20490.4%2C253.3%20491.8%2C253.6%20493.2%2C254.0%20494.6%2C254.3%20496.1%2C254.6%20497.5%2C255.0%20498.9%2C255.3%20500.3%2C255.7%20501.7%2C256.0%20503.2%2C256.3%20504.6%2C256.7%20506.0%2C257.0%22%20clip-path%3D%22url%28%23clip-3806376%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_A%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_B%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2_C%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-157",
    case_id: "MATH 11.157",
    title: "Hard consistency: f versus f′ on one plane",
    subsection: "11.4",
    context:
      "Brown is $f$ and green is $f'$. Decide TRUE or FALSE using only the shared figure.",
    statements: [
      "Turning points of brown line up with zeros of green.",
      "Where green is positive, brown is rising.",
      "Where green is negative, brown is falling.",
      "The highest point of green is a local maximum of brown.",
      "At $x=3$, green is near height $4$, matching the steepest climb of brown."
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Critical points of $f$ are zeros of $f'$, not zeros of $f''$. A zero of $f''$ marks an extremum of $f'$, not automatically of $f$. Critical points of $f$ are zeros of $f'$.

So the statement is True.`,
      `**B.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Positive $f'$ ⇒ increasing $f$.

So the statement is True.`,
      `**C.** → True

The sign of the derivative on the figure is what decides increase versus decrease. Negative $f'$ ⇒ decreasing $f$.

So the statement is True.`,
      `**D.** → False

Highest green is steepest slope of brown, not a peak of brown. Brown's peak is near $x=5$ where green is $0$.

So the statement is False.`,
      `**E.** → True

The steepest climb of $f$ is where $|f'|$ is largest among the positive heights — the peak of the $f'$ graph in the rising stretch. Green's peak height near $4$ at $x=3$ matches the steep middle climb of brown.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 157,
    solution_overview:
      "Consistency checks between $f$ and $f'$ on one plane; max of $f'$ ≠ max of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%20and%20f%E2%80%B2%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-4997141%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22310.7%22%20x2%3D%22506%22%20y2%3D%22310.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22506%22%20y2%3D%22177.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22110.7%22%20x2%3D%22506%22%20y2%3D%22110.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22506%22%20y2%3D%22177.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22310.7%22%20x2%3D%2252%22%20y2%3D%22310.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22314.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22177.3%22%20x2%3D%2252%22%20y2%3D%22177.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22181.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22110.7%22%20x2%3D%2252%22%20y2%3D%22110.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22114.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C177.3%2053.4%2C178.9%2054.8%2C180.4%2056.3%2C181.9%2057.7%2C183.3%2059.1%2C184.7%2060.5%2C186.1%2061.9%2C187.4%2063.4%2C188.7%2064.8%2C190.0%2066.2%2C191.2%2067.6%2C192.4%2069.0%2C193.6%2070.4%2C194.8%2071.9%2C195.9%2073.3%2C196.9%2074.7%2C198.0%2076.1%2C199.0%2077.5%2C200.0%2079.0%2C200.9%2080.4%2C201.8%2081.8%2C202.7%2083.2%2C203.6%2084.6%2C204.4%2086.0%2C205.2%2087.5%2C206.0%2088.9%2C206.7%2090.3%2C207.4%2091.7%2C208.1%2093.1%2C208.8%2094.6%2C209.4%2096.0%2C210.0%2097.4%2C210.5%2098.8%2C211.1%20100.2%2C211.6%20101.7%2C212.1%20103.1%2C212.5%20104.5%2C212.9%20105.9%2C213.3%20107.3%2C213.7%20108.8%2C214.1%20110.2%2C214.4%20111.6%2C214.7%20113.0%2C214.9%20114.4%2C215.2%20115.8%2C215.4%20117.3%2C215.6%20118.7%2C215.7%20120.1%2C215.9%20121.5%2C216.0%20122.9%2C216.1%20124.4%2C216.2%20125.8%2C216.2%20127.2%2C216.2%20128.6%2C216.2%20130.0%2C216.2%20131.4%2C216.1%20132.9%2C216.1%20134.3%2C216.0%20135.7%2C215.9%20137.1%2C215.7%20138.5%2C215.5%20140.0%2C215.4%20141.4%2C215.2%20142.8%2C214.9%20144.2%2C214.7%20145.6%2C214.4%20147.1%2C214.1%20148.5%2C213.8%20149.9%2C213.5%20151.3%2C213.1%20152.7%2C212.8%20154.2%2C212.4%20155.6%2C212.0%20157.0%2C211.5%20158.4%2C211.1%20159.8%2C210.6%20161.2%2C210.1%20162.7%2C209.6%20164.1%2C209.1%20165.5%2C208.6%20166.9%2C208.0%20168.3%2C207.5%20169.8%2C206.9%20171.2%2C206.3%20172.6%2C205.6%20174.0%2C205.0%20175.4%2C204.3%20176.8%2C203.7%20178.3%2C203.0%20179.7%2C202.3%20181.1%2C201.6%20182.5%2C200.8%20183.9%2C200.1%20185.4%2C199.3%20186.8%2C198.5%20188.2%2C197.7%20189.6%2C196.9%20191.0%2C196.1%20192.5%2C195.3%20193.9%2C194.4%20195.3%2C193.6%20196.7%2C192.7%20198.1%2C191.8%20199.6%2C190.9%20201.0%2C190.0%20202.4%2C189.1%20203.8%2C188.1%20205.2%2C187.2%20206.6%2C186.2%20208.1%2C185.3%20209.5%2C184.3%20210.9%2C183.3%20212.3%2C182.3%20213.7%2C181.3%20215.2%2C180.2%20216.6%2C179.2%20218.0%2C178.2%20219.4%2C177.1%20220.8%2C176.1%20222.2%2C175.0%20223.7%2C173.9%20225.1%2C172.8%20226.5%2C171.7%20227.9%2C170.6%20229.3%2C169.5%20230.8%2C168.4%20232.2%2C167.3%20233.6%2C166.1%20235.0%2C165.0%20236.4%2C163.8%20237.9%2C162.7%20239.3%2C161.5%20240.7%2C160.4%20242.1%2C159.2%20243.5%2C158.0%20244.9%2C156.8%20246.4%2C155.6%20247.8%2C154.4%20249.2%2C153.2%20250.6%2C152.0%20252.0%2C150.8%20253.5%2C149.6%20254.9%2C148.4%20256.3%2C147.2%20257.7%2C146.0%20259.1%2C144.7%20260.6%2C143.5%20262.0%2C142.3%20263.4%2C141.0%20264.8%2C139.8%20266.2%2C138.6%20267.6%2C137.3%20269.1%2C136.1%20270.5%2C134.8%20271.9%2C133.6%20273.3%2C132.3%20274.7%2C131.1%20276.2%2C129.8%20277.6%2C128.6%20279.0%2C127.3%20280.4%2C126.1%20281.8%2C124.8%20283.3%2C123.6%20284.7%2C122.3%20286.1%2C121.1%20287.5%2C119.8%20288.9%2C118.6%20290.4%2C117.4%20291.8%2C116.1%20293.2%2C114.9%20294.6%2C113.6%20296.0%2C112.4%20297.4%2C111.2%20298.9%2C109.9%20300.3%2C108.7%20301.7%2C107.5%20303.1%2C106.3%20304.5%2C105.0%20306.0%2C103.8%20307.4%2C102.6%20308.8%2C101.4%20310.2%2C100.2%20311.6%2C99.0%20313.1%2C97.8%20314.5%2C96.7%20315.9%2C95.5%20317.3%2C94.3%20318.7%2C93.1%20320.1%2C92.0%20321.6%2C90.8%20323.0%2C89.7%20324.4%2C88.5%20325.8%2C87.4%20327.2%2C86.3%20328.7%2C85.2%20330.1%2C84.0%20331.5%2C82.9%20332.9%2C81.8%20334.3%2C80.8%20335.8%2C79.7%20337.2%2C78.6%20338.6%2C77.5%20340.0%2C76.5%20341.4%2C75.5%20342.8%2C74.4%20344.3%2C73.4%20345.7%2C72.4%20347.1%2C71.4%20348.5%2C70.4%20349.9%2C69.4%20351.4%2C68.4%20352.8%2C67.5%20354.2%2C66.5%20355.6%2C65.6%20357.0%2C64.7%20358.4%2C63.8%20359.9%2C62.9%20361.3%2C62.0%20362.7%2C61.1%20364.1%2C60.2%20365.5%2C59.4%20367.0%2C58.6%20368.4%2C57.7%20369.8%2C56.9%20371.2%2C56.1%20372.6%2C55.4%20374.1%2C54.6%20375.5%2C53.8%20376.9%2C53.1%20378.3%2C52.4%20379.7%2C51.7%20381.1%2C51.0%20382.6%2C50.3%20384.0%2C49.7%20385.4%2C49.0%20386.8%2C48.4%20388.2%2C47.8%20389.7%2C47.2%20391.1%2C46.6%20392.5%2C46.1%20393.9%2C45.5%20395.3%2C45.0%20396.8%2C44.5%20398.2%2C44.0%20399.6%2C43.6%20401.0%2C43.1%20402.4%2C42.7%20403.9%2C42.3%20405.3%2C41.9%20406.7%2C41.5%20408.1%2C41.2%20409.5%2C40.8%20410.9%2C40.5%20412.4%2C40.3%20413.8%2C40.0%20415.2%2C39.7%20416.6%2C39.5%20418.0%2C39.3%20419.5%2C39.1%20420.9%2C39.0%20422.3%2C38.8%20423.7%2C38.7%20425.1%2C38.6%20426.6%2C38.5%20428.0%2C38.5%20429.4%2C38.4%20430.8%2C38.4%20432.2%2C38.5%20433.6%2C38.5%20435.1%2C38.6%20436.5%2C38.7%20437.9%2C38.8%20439.3%2C38.9%20440.7%2C39.1%20442.2%2C39.3%20443.6%2C39.5%20445.0%2C39.7%20446.4%2C40.0%20447.8%2C40.3%20449.2%2C40.6%20450.7%2C41.0%20452.1%2C41.3%20453.5%2C41.7%20454.9%2C42.2%20456.3%2C42.6%20457.8%2C43.1%20459.2%2C43.6%20460.6%2C44.1%20462.0%2C44.7%20463.4%2C45.3%20464.9%2C45.9%20466.3%2C46.6%20467.7%2C47.2%20469.1%2C47.9%20470.5%2C48.7%20471.9%2C49.5%20473.4%2C50.2%20474.8%2C51.1%20476.2%2C51.9%20477.6%2C52.8%20479.0%2C53.7%20480.5%2C54.7%20481.9%2C55.7%20483.3%2C56.7%20484.7%2C57.7%20486.1%2C58.8%20487.6%2C59.9%20489.0%2C61.1%20490.4%2C62.2%20491.8%2C63.4%20493.2%2C64.7%20494.6%2C65.9%20496.1%2C67.2%20497.5%2C68.6%20498.9%2C70.0%20500.3%2C71.4%20501.7%2C72.8%20503.2%2C74.3%20504.6%2C75.8%20506.0%2C77.3%22%20clip-path%3D%22url%28%23clip-4997141%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C260.7%2053.4%2C258.8%2054.8%2C256.9%2056.3%2C255.1%2057.7%2C253.3%2059.1%2C251.4%2060.5%2C249.6%2061.9%2C247.8%2063.4%2C246.0%2064.8%2C244.3%2066.2%2C242.5%2067.6%2C240.8%2069.0%2C239.0%2070.4%2C237.3%2071.9%2C235.6%2073.3%2C233.9%2074.7%2C232.2%2076.1%2C230.5%2077.5%2C228.8%2079.0%2C227.2%2080.4%2C225.5%2081.8%2C223.9%2083.2%2C222.3%2084.6%2C220.6%2086.0%2C219.0%2087.5%2C217.5%2088.9%2C215.9%2090.3%2C214.3%2091.7%2C212.8%2093.1%2C211.2%2094.6%2C209.7%2096.0%2C208.2%2097.4%2C206.7%2098.8%2C205.2%20100.2%2C203.7%20101.7%2C202.2%20103.1%2C200.8%20104.5%2C199.3%20105.9%2C197.9%20107.3%2C196.5%20108.8%2C195.0%20110.2%2C193.6%20111.6%2C192.3%20113.0%2C190.9%20114.4%2C189.5%20115.8%2C188.2%20117.3%2C186.8%20118.7%2C185.5%20120.1%2C184.2%20121.5%2C182.9%20122.9%2C181.6%20124.4%2C180.3%20125.8%2C179.0%20127.2%2C177.8%20128.6%2C176.5%20130.0%2C175.3%20131.4%2C174.0%20132.9%2C172.8%20134.3%2C171.6%20135.7%2C170.4%20137.1%2C169.3%20138.5%2C168.1%20140.0%2C166.9%20141.4%2C165.8%20142.8%2C164.7%20144.2%2C163.5%20145.6%2C162.4%20147.1%2C161.3%20148.5%2C160.3%20149.9%2C159.2%20151.3%2C158.1%20152.7%2C157.1%20154.2%2C156.0%20155.6%2C155.0%20157.0%2C154.0%20158.4%2C153.0%20159.8%2C152.0%20161.2%2C151.0%20162.7%2C150.1%20164.1%2C149.1%20165.5%2C148.2%20166.9%2C147.2%20168.3%2C146.3%20169.8%2C145.4%20171.2%2C144.5%20172.6%2C143.6%20174.0%2C142.8%20175.4%2C141.9%20176.8%2C141.0%20178.3%2C140.2%20179.7%2C139.4%20181.1%2C138.6%20182.5%2C137.8%20183.9%2C137.0%20185.4%2C136.2%20186.8%2C135.4%20188.2%2C134.7%20189.6%2C133.9%20191.0%2C133.2%20192.5%2C132.5%20193.9%2C131.8%20195.3%2C131.1%20196.7%2C130.4%20198.1%2C129.7%20199.6%2C129.0%20201.0%2C128.4%20202.4%2C127.8%20203.8%2C127.1%20205.2%2C126.5%20206.6%2C125.9%20208.1%2C125.3%20209.5%2C124.7%20210.9%2C124.2%20212.3%2C123.6%20213.7%2C123.1%20215.2%2C122.5%20216.6%2C122.0%20218.0%2C121.5%20219.4%2C121.0%20220.8%2C120.5%20222.2%2C120.0%20223.7%2C119.6%20225.1%2C119.1%20226.5%2C118.7%20227.9%2C118.3%20229.3%2C117.8%20230.8%2C117.4%20232.2%2C117.0%20233.6%2C116.7%20235.0%2C116.3%20236.4%2C115.9%20237.9%2C115.6%20239.3%2C115.3%20240.7%2C114.9%20242.1%2C114.6%20243.5%2C114.3%20244.9%2C114.0%20246.4%2C113.8%20247.8%2C113.5%20249.2%2C113.3%20250.6%2C113.0%20252.0%2C112.8%20253.5%2C112.6%20254.9%2C112.4%20256.3%2C112.2%20257.7%2C112.0%20259.1%2C111.8%20260.6%2C111.7%20262.0%2C111.5%20263.4%2C111.4%20264.8%2C111.3%20266.2%2C111.1%20267.6%2C111.0%20269.1%2C111.0%20270.5%2C110.9%20271.9%2C110.8%20273.3%2C110.8%20274.7%2C110.7%20276.2%2C110.7%20277.6%2C110.7%20279.0%2C110.7%20280.4%2C110.7%20281.8%2C110.7%20283.3%2C110.7%20284.7%2C110.8%20286.1%2C110.8%20287.5%2C110.9%20288.9%2C111.0%20290.4%2C111.0%20291.8%2C111.1%20293.2%2C111.3%20294.6%2C111.4%20296.0%2C111.5%20297.4%2C111.7%20298.9%2C111.8%20300.3%2C112.0%20301.7%2C112.2%20303.1%2C112.4%20304.5%2C112.6%20306.0%2C112.8%20307.4%2C113.0%20308.8%2C113.3%20310.2%2C113.5%20311.6%2C113.8%20313.1%2C114.0%20314.5%2C114.3%20315.9%2C114.6%20317.3%2C114.9%20318.7%2C115.3%20320.1%2C115.6%20321.6%2C115.9%20323.0%2C116.3%20324.4%2C116.7%20325.8%2C117.0%20327.2%2C117.4%20328.7%2C117.8%20330.1%2C118.3%20331.5%2C118.7%20332.9%2C119.1%20334.3%2C119.6%20335.8%2C120.0%20337.2%2C120.5%20338.6%2C121.0%20340.0%2C121.5%20341.4%2C122.0%20342.8%2C122.5%20344.3%2C123.1%20345.7%2C123.6%20347.1%2C124.2%20348.5%2C124.7%20349.9%2C125.3%20351.4%2C125.9%20352.8%2C126.5%20354.2%2C127.1%20355.6%2C127.8%20357.0%2C128.4%20358.4%2C129.0%20359.9%2C129.7%20361.3%2C130.4%20362.7%2C131.1%20364.1%2C131.8%20365.5%2C132.5%20367.0%2C133.2%20368.4%2C133.9%20369.8%2C134.7%20371.2%2C135.4%20372.6%2C136.2%20374.1%2C137.0%20375.5%2C137.8%20376.9%2C138.6%20378.3%2C139.4%20379.7%2C140.2%20381.1%2C141.0%20382.6%2C141.9%20384.0%2C142.8%20385.4%2C143.6%20386.8%2C144.5%20388.2%2C145.4%20389.7%2C146.3%20391.1%2C147.2%20392.5%2C148.2%20393.9%2C149.1%20395.3%2C150.1%20396.8%2C151.0%20398.2%2C152.0%20399.6%2C153.0%20401.0%2C154.0%20402.4%2C155.0%20403.9%2C156.0%20405.3%2C157.1%20406.7%2C158.1%20408.1%2C159.2%20409.5%2C160.3%20410.9%2C161.3%20412.4%2C162.4%20413.8%2C163.5%20415.2%2C164.7%20416.6%2C165.8%20418.0%2C166.9%20419.5%2C168.1%20420.9%2C169.3%20422.3%2C170.4%20423.7%2C171.6%20425.1%2C172.8%20426.6%2C174.0%20428.0%2C175.3%20429.4%2C176.5%20430.8%2C177.8%20432.2%2C179.0%20433.6%2C180.3%20435.1%2C181.6%20436.5%2C182.9%20437.9%2C184.2%20439.3%2C185.5%20440.7%2C186.8%20442.2%2C188.2%20443.6%2C189.5%20445.0%2C190.9%20446.4%2C192.3%20447.8%2C193.6%20449.2%2C195.0%20450.7%2C196.5%20452.1%2C197.9%20453.5%2C199.3%20454.9%2C200.8%20456.3%2C202.2%20457.8%2C203.7%20459.2%2C205.2%20460.6%2C206.7%20462.0%2C208.2%20463.4%2C209.7%20464.9%2C211.2%20466.3%2C212.8%20467.7%2C214.3%20469.1%2C215.9%20470.5%2C217.5%20471.9%2C219.0%20473.4%2C220.6%20474.8%2C222.3%20476.2%2C223.9%20477.6%2C225.5%20479.0%2C227.2%20480.5%2C228.8%20481.9%2C230.5%20483.3%2C232.2%20484.7%2C233.9%20486.1%2C235.6%20487.6%2C237.3%20489.0%2C239.0%20490.4%2C240.8%20491.8%2C242.5%20493.2%2C244.3%20494.6%2C246.0%20496.1%2C247.8%20497.5%2C249.6%20498.9%2C251.4%20500.3%2C253.3%20501.7%2C255.1%20503.2%2C256.9%20504.6%2C258.8%20506.0%2C260.7%22%20clip-path%3D%22url%28%23clip-4997141%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-158",
    case_id: "MATH 11.158",
    title: "Double zero of f′: read f″ nearby",
    subsection: "11.4",
    context:
      "Brown is $f'$ and green is $f''$. Brown touches the axis at $x=1$ and crosses at $x=4$. Decide TRUE or FALSE.",
    statements: [
      "At $x=4$, brown changes from negative to positive.",
      "Near $x=1$, brown stays non-positive on both sides in the window, so there is no ordinary $+$ to $-$ local-max test for $f$ there.",
      "Green is zero at some interior point between $1$ and $4$ where brown has a lowest point.",
      "On $(4,5)$, brown is positive, so $f$ is increasing there.",
      "A zero of green always forces a local extremum of $f$."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

At $x=4$ on the shared axes, Visible $-$ to $+$ crossing at $x=4$.

So the statement is True.`,
      `**B.** → True

Compare heights on the shared vertical scale. Brown does not change from above to below (or below to above) across $x=1$.

So the statement is True.`,
      `**C.** → True

Lowest point of brown aligns with a green zero.

So the statement is True.`,
      `**D.** → True

Brown is $f'$. On $(4,5)$ it sits above the axis, so $f'>0$ and $f$ is increasing there.

So the statement is True.`,
      `**E.** → False

Zeros of $f''$ control extrema of $f'$, not of $f$. Extrema of $f$ need zeros of $f'$.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 158,
    solution_overview:
      "Double zero of $f'$ may skip a sign change; zeros of $f''$ are not extrema of $f$.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%20and%20f%E2%80%B3%20on%20the%20same%20axes%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-3329802%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%2244%22%20x2%3D%22142.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%2244%22%20x2%3D%22233.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%2244%22%20x2%3D%22324.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%2244%22%20x2%3D%22415.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22310.7%22%20x2%3D%22506%22%20y2%3D%22310.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22244.0%22%20x2%3D%22506%22%20y2%3D%22244.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22506%22%20y2%3D%22177.3%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22110.7%22%20x2%3D%22506%22%20y2%3D%22110.7%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22177.3%22%20x2%3D%22506%22%20y2%3D%22177.3%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%22344%22%20x2%3D%22142.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22142.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%22344%22%20x2%3D%22233.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22233.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%22344%22%20x2%3D%22324.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22324.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%22344%22%20x2%3D%22415.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22415.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22310.7%22%20x2%3D%2252%22%20y2%3D%22310.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22314.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-8%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22244.0%22%20x2%3D%2252%22%20y2%3D%22244.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22248.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22177.3%22%20x2%3D%2252%22%20y2%3D%22177.3%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22181.3%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22110.7%22%20x2%3D%2252%22%20y2%3D%22110.7%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22114.7%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C244.0%2053.4%2C241.7%2054.8%2C239.4%2056.3%2C237.2%2057.7%2C235.0%2059.1%2C232.9%2060.5%2C230.8%2061.9%2C228.8%2063.4%2C226.8%2064.8%2C224.8%2066.2%2C222.9%2067.6%2C221.1%2069.0%2C219.3%2070.4%2C217.5%2071.9%2C215.8%2073.3%2C214.1%2074.7%2C212.5%2076.1%2C210.9%2077.5%2C209.4%2079.0%2C207.8%2080.4%2C206.4%2081.8%2C205.0%2083.2%2C203.6%2084.6%2C202.2%2086.0%2C200.9%2087.5%2C199.7%2088.9%2C198.4%2090.3%2C197.3%2091.7%2C196.1%2093.1%2C195.0%2094.6%2C193.9%2096.0%2C192.9%2097.4%2C191.9%2098.8%2C191.0%20100.2%2C190.0%20101.7%2C189.2%20103.1%2C188.3%20104.5%2C187.5%20105.9%2C186.7%20107.3%2C186.0%20108.8%2C185.2%20110.2%2C184.6%20111.6%2C183.9%20113.0%2C183.3%20114.4%2C182.7%20115.8%2C182.2%20117.3%2C181.7%20118.7%2C181.2%20120.1%2C180.7%20121.5%2C180.3%20122.9%2C179.9%20124.4%2C179.5%20125.8%2C179.2%20127.2%2C178.9%20128.6%2C178.6%20130.0%2C178.4%20131.4%2C178.1%20132.9%2C178.0%20134.3%2C177.8%20135.7%2C177.6%20137.1%2C177.5%20138.5%2C177.4%20140.0%2C177.4%20141.4%2C177.3%20142.8%2C177.3%20144.2%2C177.3%20145.6%2C177.4%20147.1%2C177.4%20148.5%2C177.5%20149.9%2C177.6%20151.3%2C177.8%20152.7%2C177.9%20154.2%2C178.1%20155.6%2C178.3%20157.0%2C178.5%20158.4%2C178.7%20159.8%2C179.0%20161.2%2C179.3%20162.7%2C179.6%20164.1%2C179.9%20165.5%2C180.2%20166.9%2C180.5%20168.3%2C180.9%20169.8%2C181.3%20171.2%2C181.7%20172.6%2C182.1%20174.0%2C182.6%20175.4%2C183.0%20176.9%2C183.5%20178.3%2C184.0%20179.7%2C184.5%20181.1%2C185.0%20182.5%2C185.5%20183.9%2C186.0%20185.4%2C186.6%20186.8%2C187.2%20188.2%2C187.8%20189.6%2C188.3%20191.0%2C188.9%20192.5%2C189.6%20193.9%2C190.2%20195.3%2C190.8%20196.7%2C191.5%20198.1%2C192.1%20199.6%2C192.8%20201.0%2C193.5%20202.4%2C194.2%20203.8%2C194.8%20205.2%2C195.6%20206.6%2C196.3%20208.1%2C197.0%20209.5%2C197.7%20210.9%2C198.4%20212.3%2C199.2%20213.7%2C199.9%20215.2%2C200.7%20216.6%2C201.4%20218.0%2C202.2%20219.4%2C202.9%20220.8%2C203.7%20222.2%2C204.4%20223.7%2C205.2%20225.1%2C206.0%20226.5%2C206.8%20227.9%2C207.5%20229.3%2C208.3%20230.8%2C209.1%20232.2%2C209.9%20233.6%2C210.7%20235.0%2C211.4%20236.4%2C212.2%20237.9%2C213.0%20239.3%2C213.8%20240.7%2C214.6%20242.1%2C215.3%20243.5%2C216.1%20244.9%2C216.9%20246.4%2C217.7%20247.8%2C218.4%20249.2%2C219.2%20250.6%2C219.9%20252.0%2C220.7%20253.5%2C221.4%20254.9%2C222.2%20256.3%2C222.9%20257.7%2C223.6%20259.1%2C224.4%20260.6%2C225.1%20262.0%2C225.8%20263.4%2C226.5%20264.8%2C227.2%20266.2%2C227.9%20267.6%2C228.5%20269.1%2C229.2%20270.5%2C229.9%20271.9%2C230.5%20273.3%2C231.1%20274.7%2C231.8%20276.2%2C232.4%20277.6%2C233.0%20279.0%2C233.6%20280.4%2C234.2%20281.8%2C234.7%20283.3%2C235.3%20284.7%2C235.8%20286.1%2C236.4%20287.5%2C236.9%20288.9%2C237.4%20290.4%2C237.8%20291.8%2C238.3%20293.2%2C238.8%20294.6%2C239.2%20296.0%2C239.6%20297.4%2C240.0%20298.9%2C240.4%20300.3%2C240.8%20301.7%2C241.1%20303.1%2C241.5%20304.5%2C241.8%20306.0%2C242.1%20307.4%2C242.4%20308.8%2C242.6%20310.2%2C242.8%20311.6%2C243.1%20313.0%2C243.3%20314.5%2C243.4%20315.9%2C243.6%20317.3%2C243.7%20318.7%2C243.8%20320.1%2C243.9%20321.6%2C244.0%20323.0%2C244.0%20324.4%2C244.0%20325.8%2C244.0%20327.2%2C244.0%20328.7%2C243.9%20330.1%2C243.8%20331.5%2C243.7%20332.9%2C243.5%20334.3%2C243.4%20335.8%2C243.2%20337.2%2C243.0%20338.6%2C242.7%20340.0%2C242.4%20341.4%2C242.1%20342.8%2C241.8%20344.3%2C241.4%20345.7%2C241.0%20347.1%2C240.6%20348.5%2C240.2%20349.9%2C239.7%20351.4%2C239.2%20352.8%2C238.6%20354.2%2C238.0%20355.6%2C237.4%20357.0%2C236.8%20358.5%2C236.1%20359.9%2C235.4%20361.3%2C234.6%20362.7%2C233.8%20364.1%2C233.0%20365.5%2C232.2%20367.0%2C231.3%20368.4%2C230.4%20369.8%2C229.4%20371.2%2C228.4%20372.6%2C227.4%20374.1%2C226.3%20375.5%2C225.2%20376.9%2C224.1%20378.3%2C222.9%20379.7%2C221.7%20381.1%2C220.4%20382.6%2C219.1%20384.0%2C217.8%20385.4%2C216.4%20386.8%2C215.0%20388.2%2C213.5%20389.7%2C212.0%20391.1%2C210.4%20392.5%2C208.8%20393.9%2C207.2%20395.3%2C205.5%20396.8%2C203.8%20398.2%2C202.1%20399.6%2C200.2%20401.0%2C198.4%20402.4%2C196.5%20403.9%2C194.6%20405.3%2C192.6%20406.7%2C190.5%20408.1%2C188.4%20409.5%2C186.3%20410.9%2C184.1%20412.4%2C181.9%20413.8%2C179.7%20415.2%2C177.3%20416.6%2C175.0%20418.0%2C172.5%20419.5%2C170.1%20420.9%2C167.6%20422.3%2C165.0%20423.7%2C162.4%20425.1%2C159.7%20426.5%2C157.0%20428.0%2C154.2%20429.4%2C151.4%20430.8%2C148.5%20432.2%2C145.6%20433.6%2C142.6%20435.1%2C139.6%20436.5%2C136.5%20437.9%2C133.3%20439.3%2C130.1%20440.7%2C126.9%20442.2%2C123.6%20443.6%2C120.2%20445.0%2C116.8%20446.4%2C113.3%20447.8%2C109.7%20449.2%2C106.1%20450.7%2C102.5%20452.1%2C98.8%20453.5%2C95.0%20454.9%2C91.2%20456.3%2C87.3%20457.8%2C83.3%20459.2%2C79.3%20460.6%2C75.2%20462.0%2C71.1%20463.4%2C66.9%20464.9%2C62.7%20466.3%2C58.4%20467.7%2C54.0%20469.1%2C49.5%20470.5%2C45.0%20472.0%2C40.5%20473.4%2C35.8%20474.8%2C31.1%20476.2%2C26.4%20477.6%2C21.5%20479.0%2C16.6%20480.5%2C11.7%20481.9%2C6.6%20483.3%2C1.6%20484.7%2C-3.6%20486.1%2C-8.8%20487.6%2C-14.1%20489.0%2C-19.5%20490.4%2C-24.9%20491.8%2C-30.4%20493.2%2C-36.0%20494.6%2C-41.6%20496.1%2C-47.4%20497.5%2C-53.1%20498.9%2C-59.0%20500.3%2C-64.9%20501.7%2C-70.9%20503.2%2C-77.0%20504.6%2C-83.1%20506.0%2C-89.3%22%20clip-path%3D%22url%28%23clip-3329802%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C27.3%2053.4%2C30.4%2054.8%2C33.5%2056.3%2C36.6%2057.7%2C39.6%2059.1%2C42.7%2060.5%2C45.6%2061.9%2C48.6%2063.4%2C51.6%2064.8%2C54.5%2066.2%2C57.4%2067.6%2C60.2%2069.0%2C63.1%2070.4%2C65.9%2071.9%2C68.7%2073.3%2C71.5%2074.7%2C74.2%2076.1%2C76.9%2077.5%2C79.6%2079.0%2C82.3%2080.4%2C85.0%2081.8%2C87.6%2083.2%2C90.2%2084.6%2C92.8%2086.0%2C95.3%2087.5%2C97.8%2088.9%2C100.3%2090.3%2C102.8%2091.7%2C105.3%2093.1%2C107.7%2094.6%2C110.1%2096.0%2C112.5%2097.4%2C114.8%2098.8%2C117.2%20100.2%2C119.5%20101.7%2C121.8%20103.1%2C124.0%20104.5%2C126.2%20105.9%2C128.5%20107.3%2C130.6%20108.8%2C132.8%20110.2%2C134.9%20111.6%2C137.1%20113.0%2C139.1%20114.4%2C141.2%20115.8%2C143.2%20117.3%2C145.3%20118.7%2C147.2%20120.1%2C149.2%20121.5%2C151.1%20122.9%2C153.1%20124.4%2C155.0%20125.8%2C156.8%20127.2%2C158.7%20128.6%2C160.5%20130.0%2C162.3%20131.4%2C164.1%20132.9%2C165.8%20134.3%2C167.5%20135.7%2C169.2%20137.1%2C170.9%20138.5%2C172.5%20140.0%2C174.2%20141.4%2C175.8%20142.8%2C177.3%20144.2%2C178.9%20145.6%2C180.4%20147.1%2C181.9%20148.5%2C183.4%20149.9%2C184.8%20151.3%2C186.3%20152.7%2C187.7%20154.2%2C189.1%20155.6%2C190.4%20157.0%2C191.7%20158.4%2C193.0%20159.8%2C194.3%20161.2%2C195.6%20162.7%2C196.8%20164.1%2C198.0%20165.5%2C199.2%20166.9%2C200.4%20168.3%2C201.5%20169.8%2C202.6%20171.2%2C203.7%20172.6%2C204.8%20174.0%2C205.8%20175.4%2C206.8%20176.9%2C207.8%20178.3%2C208.8%20179.7%2C209.7%20181.1%2C210.6%20182.5%2C211.5%20183.9%2C212.4%20185.4%2C213.2%20186.8%2C214.0%20188.2%2C214.8%20189.6%2C215.6%20191.0%2C216.3%20192.5%2C217.1%20193.9%2C217.8%20195.3%2C218.4%20196.7%2C219.1%20198.1%2C219.7%20199.6%2C220.3%20201.0%2C220.9%20202.4%2C221.4%20203.8%2C222.0%20205.2%2C222.5%20206.6%2C222.9%20208.1%2C223.4%20209.5%2C223.8%20210.9%2C224.2%20212.3%2C224.6%20213.7%2C224.9%20215.2%2C225.3%20216.6%2C225.6%20218.0%2C225.9%20219.4%2C226.1%20220.8%2C226.3%20222.2%2C226.6%20223.7%2C226.7%20225.1%2C226.9%20226.5%2C227.0%20227.9%2C227.1%20229.3%2C227.2%20230.8%2C227.3%20232.2%2C227.3%20233.6%2C227.3%20235.0%2C227.3%20236.4%2C227.3%20237.9%2C227.2%20239.3%2C227.1%20240.7%2C227.0%20242.1%2C226.9%20243.5%2C226.7%20244.9%2C226.6%20246.4%2C226.3%20247.8%2C226.1%20249.2%2C225.9%20250.6%2C225.6%20252.0%2C225.3%20253.5%2C224.9%20254.9%2C224.6%20256.3%2C224.2%20257.7%2C223.8%20259.1%2C223.4%20260.6%2C222.9%20262.0%2C222.5%20263.4%2C222.0%20264.8%2C221.4%20266.2%2C220.9%20267.6%2C220.3%20269.1%2C219.7%20270.5%2C219.1%20271.9%2C218.4%20273.3%2C217.8%20274.7%2C217.1%20276.2%2C216.3%20277.6%2C215.6%20279.0%2C214.8%20280.4%2C214.0%20281.8%2C213.2%20283.3%2C212.4%20284.7%2C211.5%20286.1%2C210.6%20287.5%2C209.7%20288.9%2C208.8%20290.4%2C207.8%20291.8%2C206.8%20293.2%2C205.8%20294.6%2C204.8%20296.0%2C203.7%20297.4%2C202.6%20298.9%2C201.5%20300.3%2C200.4%20301.7%2C199.2%20303.1%2C198.0%20304.5%2C196.8%20306.0%2C195.6%20307.4%2C194.3%20308.8%2C193.0%20310.2%2C191.7%20311.6%2C190.4%20313.0%2C189.1%20314.5%2C187.7%20315.9%2C186.3%20317.3%2C184.8%20318.7%2C183.4%20320.1%2C181.9%20321.6%2C180.4%20323.0%2C178.9%20324.4%2C177.3%20325.8%2C175.8%20327.2%2C174.2%20328.7%2C172.5%20330.1%2C170.9%20331.5%2C169.2%20332.9%2C167.5%20334.3%2C165.8%20335.8%2C164.1%20337.2%2C162.3%20338.6%2C160.5%20340.0%2C158.7%20341.4%2C156.8%20342.8%2C155.0%20344.3%2C153.1%20345.7%2C151.1%20347.1%2C149.2%20348.5%2C147.2%20349.9%2C145.3%20351.4%2C143.2%20352.8%2C141.2%20354.2%2C139.1%20355.6%2C137.1%20357.0%2C134.9%20358.5%2C132.8%20359.9%2C130.6%20361.3%2C128.5%20362.7%2C126.2%20364.1%2C124.0%20365.5%2C121.8%20367.0%2C119.5%20368.4%2C117.2%20369.8%2C114.8%20371.2%2C112.5%20372.6%2C110.1%20374.1%2C107.7%20375.5%2C105.3%20376.9%2C102.8%20378.3%2C100.3%20379.7%2C97.8%20381.1%2C95.3%20382.6%2C92.8%20384.0%2C90.2%20385.4%2C87.6%20386.8%2C85.0%20388.2%2C82.3%20389.7%2C79.6%20391.1%2C76.9%20392.5%2C74.2%20393.9%2C71.5%20395.3%2C68.7%20396.8%2C65.9%20398.2%2C63.1%20399.6%2C60.2%20401.0%2C57.4%20402.4%2C54.5%20403.9%2C51.6%20405.3%2C48.6%20406.7%2C45.6%20408.1%2C42.7%20409.5%2C39.6%20410.9%2C36.6%20412.4%2C33.5%20413.8%2C30.4%20415.2%2C27.3%20416.6%2C24.2%20418.0%2C21.0%20419.5%2C17.8%20420.9%2C14.6%20422.3%2C11.4%20423.7%2C8.1%20425.1%2C4.9%20426.5%2C1.6%20428.0%2C-1.8%20429.4%2C-5.1%20430.8%2C-8.5%20432.2%2C-11.9%20433.6%2C-15.4%20435.1%2C-18.8%20436.5%2C-22.3%20437.9%2C-25.8%20439.3%2C-29.3%20440.7%2C-32.9%20442.2%2C-36.4%20443.6%2C-40.0%20445.0%2C-43.7%20446.4%2C-47.3%20447.8%2C-51.0%20449.2%2C-54.7%20450.7%2C-58.4%20452.1%2C-62.2%20453.5%2C-65.9%20454.9%2C-69.7%20456.3%2C-73.6%20457.8%2C-77.4%20459.2%2C-81.3%20460.6%2C-85.2%20462.0%2C-89.1%20463.4%2C-93.0%20464.9%2C-97.0%20466.3%2C-101.0%20467.7%2C-105.0%20469.1%2C-109.0%20470.5%2C-113.1%20472.0%2C-117.2%20473.4%2C-121.3%20474.8%2C-125.4%20476.2%2C-129.6%20477.6%2C-133.8%20479.0%2C-138.0%20480.5%2C-142.2%20481.9%2C-146.5%20483.3%2C-150.8%20484.7%2C-155.1%20486.1%2C-159.4%20487.6%2C-163.8%20489.0%2C-168.2%20490.4%2C-172.6%20491.8%2C-177.0%20493.2%2C-181.5%20494.6%2C-185.9%20496.1%2C-190.5%20497.5%2C-195.0%20498.9%2C-199.5%20500.3%2C-204.1%20501.7%2C-208.7%20503.2%2C-213.3%20504.6%2C-218.0%20506.0%2C-222.7%22%20clip-path%3D%22url%28%23clip-3329802%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2250%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-159",
    case_id: "MATH 11.159",
    title: "Revenue, cost, and profit slopes together",
    subsection: "11.4",
    context:
      "Brown is marginal revenue $R'$, green is marginal cost $C'$, and purple is marginal profit $P'=R'-C'$, drawn on one plane. Decide TRUE or FALSE from the figure.",
    statements: [
      "Purple is positive precisely where brown lies above green.",
      "At $x=2$, brown is near its peak and still above green, so purple is positive there.",
      "Late in the window, green stays positive while brown falls below it, so purple becomes negative.",
      "A local profit peak occurs where purple changes from positive to negative.",
      "Because green never crosses the axis, total cost has a local maximum in the window."
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. By construction on the figure, purple tracks brown minus green.

So the statement is True.`,
      `**B.** → True

For a firm, marginal profit above the axis means a little more output raises profit; below the axis means it lowers profit. Brown is high and above green.

So the statement is True.`,
      `**C.** → True

Compare heights on the shared vertical scale. Brown drops toward/under green on the right; purple goes negative.

So the statement is True.`,
      `**D.** → True

Profit has a local peak where marginal profit crosses from positive to negative. Sign change of $P'$ from $+$ to $-$ is a local max of $P$.

So the statement is True.`,
      `**E.** → False

Green stays positive, so cost keeps rising — no local cost maximum from a sign change of $C'$.

So the statement is False.`
    ],
    difficulty_level: "5/5",
    sort_order: 159,
    solution_overview:
      "Read $P'$ as the gap $R'-C'$ on one plane; profit peaks at purple's $+$ to $-$ crossing.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3ER%E2%80%B2%2C%20C%E2%80%B2%2C%20and%20P%E2%80%B2%3DR%E2%80%B2%E2%88%92C%E2%80%B2%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-6114479%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%2244%22%20x2%3D%22142.8%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%2244%22%20x2%3D%22233.6%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%2244%22%20x2%3D%22324.4%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%2244%22%20x2%3D%22415.2%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22304.0%22%20x2%3D%22506%22%20y2%3D%22304.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22144.0%22%20x2%3D%22506%22%20y2%3D%22144.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2264.0%22%20x2%3D%22506%22%20y2%3D%2264.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22142.8%22%20y1%3D%22344%22%20x2%3D%22142.8%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22142.8%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22233.6%22%20y1%3D%22344%22%20x2%3D%22233.6%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22233.6%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22324.4%22%20y1%3D%22344%22%20x2%3D%22324.4%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22324.4%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22415.2%22%20y1%3D%22344%22%20x2%3D%22415.2%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22415.2%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22304.0%22%20x2%3D%2252%22%20y2%3D%22304.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22308.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22144.0%22%20x2%3D%2252%22%20y2%3D%22144.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22148.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%2264.0%22%20x2%3D%2252%22%20y2%3D%2264.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2268.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C224.0%2053.4%2C223.5%2054.8%2C223.0%2056.3%2C222.5%2057.7%2C221.9%2059.1%2C221.4%2060.5%2C220.8%2061.9%2C220.3%2063.4%2C219.7%2064.8%2C219.1%2066.2%2C218.5%2067.6%2C217.9%2069.0%2C217.3%2070.4%2C216.7%2071.9%2C216.1%2073.3%2C215.4%2074.7%2C214.8%2076.1%2C214.1%2077.5%2C213.4%2079.0%2C212.7%2080.4%2C212.0%2081.8%2C211.3%2083.2%2C210.6%2084.6%2C209.8%2086.0%2C209.1%2087.5%2C208.3%2088.9%2C207.5%2090.3%2C206.7%2091.7%2C205.9%2093.1%2C205.1%2094.6%2C204.2%2096.0%2C203.3%2097.4%2C202.5%2098.8%2C201.6%20100.2%2C200.7%20101.7%2C199.7%20103.1%2C198.8%20104.5%2C197.8%20105.9%2C196.8%20107.3%2C195.8%20108.8%2C194.8%20110.2%2C193.8%20111.6%2C192.7%20113.0%2C191.6%20114.4%2C190.5%20115.8%2C189.4%20117.3%2C188.3%20118.7%2C187.1%20120.1%2C186.0%20121.5%2C184.8%20122.9%2C183.5%20124.4%2C182.3%20125.8%2C181.0%20127.2%2C179.7%20128.6%2C178.4%20130.0%2C177.1%20131.4%2C175.7%20132.9%2C174.3%20134.3%2C172.9%20135.7%2C171.5%20137.1%2C170.1%20138.5%2C168.6%20140.0%2C167.1%20141.4%2C165.6%20142.8%2C164.0%20144.2%2C162.4%20145.6%2C160.8%20147.1%2C159.2%20148.5%2C157.6%20149.9%2C155.9%20151.3%2C154.2%20152.7%2C152.5%20154.2%2C150.7%20155.6%2C149.0%20157.0%2C147.2%20158.4%2C145.4%20159.8%2C143.5%20161.2%2C141.7%20162.7%2C139.8%20164.1%2C137.9%20165.5%2C136.0%20166.9%2C134.1%20168.3%2C132.1%20169.8%2C130.2%20171.2%2C128.2%20172.6%2C126.2%20174.0%2C124.2%20175.4%2C122.2%20176.9%2C120.2%20178.3%2C118.2%20179.7%2C116.1%20181.1%2C114.1%20182.5%2C112.1%20183.9%2C110.0%20185.4%2C108.0%20186.8%2C106.0%20188.2%2C104.0%20189.6%2C102.0%20191.0%2C100.0%20192.5%2C98.1%20193.9%2C96.1%20195.3%2C94.2%20196.7%2C92.3%20198.1%2C90.5%20199.6%2C88.7%20201.0%2C86.9%20202.4%2C85.1%20203.8%2C83.4%20205.2%2C81.8%20206.6%2C80.2%20208.1%2C78.7%20209.5%2C77.2%20210.9%2C75.8%20212.3%2C74.4%20213.7%2C73.1%20215.2%2C71.9%20216.6%2C70.8%20218.0%2C69.7%20219.4%2C68.8%20220.8%2C67.9%20222.2%2C67.1%20223.7%2C66.4%20225.1%2C65.7%20226.5%2C65.2%20227.9%2C64.8%20229.3%2C64.4%20230.8%2C64.2%20232.2%2C64.0%20233.6%2C64.0%20235.0%2C64.0%20236.4%2C64.2%20237.9%2C64.4%20239.3%2C64.8%20240.7%2C65.2%20242.1%2C65.7%20243.5%2C66.4%20244.9%2C67.1%20246.4%2C67.9%20247.8%2C68.8%20249.2%2C69.7%20250.6%2C70.8%20252.0%2C71.9%20253.5%2C73.1%20254.9%2C74.4%20256.3%2C75.8%20257.7%2C77.2%20259.1%2C78.7%20260.6%2C80.2%20262.0%2C81.8%20263.4%2C83.4%20264.8%2C85.1%20266.2%2C86.9%20267.6%2C88.7%20269.1%2C90.5%20270.5%2C92.3%20271.9%2C94.2%20273.3%2C96.1%20274.7%2C98.1%20276.2%2C100.0%20277.6%2C102.0%20279.0%2C104.0%20280.4%2C106.0%20281.8%2C108.0%20283.3%2C110.0%20284.7%2C112.1%20286.1%2C114.1%20287.5%2C116.1%20288.9%2C118.2%20290.4%2C120.2%20291.8%2C122.2%20293.2%2C124.2%20294.6%2C126.2%20296.0%2C128.2%20297.4%2C130.2%20298.9%2C132.1%20300.3%2C134.1%20301.7%2C136.0%20303.1%2C137.9%20304.5%2C139.8%20306.0%2C141.7%20307.4%2C143.5%20308.8%2C145.4%20310.2%2C147.2%20311.6%2C149.0%20313.0%2C150.7%20314.5%2C152.5%20315.9%2C154.2%20317.3%2C155.9%20318.7%2C157.6%20320.1%2C159.2%20321.6%2C160.8%20323.0%2C162.4%20324.4%2C164.0%20325.8%2C165.6%20327.2%2C167.1%20328.7%2C168.6%20330.1%2C170.1%20331.5%2C171.5%20332.9%2C172.9%20334.3%2C174.3%20335.8%2C175.7%20337.2%2C177.1%20338.6%2C178.4%20340.0%2C179.7%20341.4%2C181.0%20342.8%2C182.3%20344.3%2C183.5%20345.7%2C184.8%20347.1%2C186.0%20348.5%2C187.1%20349.9%2C188.3%20351.4%2C189.4%20352.8%2C190.5%20354.2%2C191.6%20355.6%2C192.7%20357.0%2C193.8%20358.5%2C194.8%20359.9%2C195.8%20361.3%2C196.8%20362.7%2C197.8%20364.1%2C198.8%20365.5%2C199.7%20367.0%2C200.7%20368.4%2C201.6%20369.8%2C202.5%20371.2%2C203.3%20372.6%2C204.2%20374.1%2C205.1%20375.5%2C205.9%20376.9%2C206.7%20378.3%2C207.5%20379.7%2C208.3%20381.1%2C209.1%20382.6%2C209.8%20384.0%2C210.6%20385.4%2C211.3%20386.8%2C212.0%20388.2%2C212.7%20389.7%2C213.4%20391.1%2C214.1%20392.5%2C214.8%20393.9%2C215.4%20395.3%2C216.1%20396.8%2C216.7%20398.2%2C217.3%20399.6%2C217.9%20401.0%2C218.5%20402.4%2C219.1%20403.9%2C219.7%20405.3%2C220.3%20406.7%2C220.8%20408.1%2C221.4%20409.5%2C221.9%20410.9%2C222.5%20412.4%2C223.0%20413.8%2C223.5%20415.2%2C224.0%20416.6%2C224.5%20418.0%2C225.0%20419.5%2C225.5%20420.9%2C225.9%20422.3%2C226.4%20423.7%2C226.9%20425.1%2C227.3%20426.5%2C227.7%20428.0%2C228.2%20429.4%2C228.6%20430.8%2C229.0%20432.2%2C229.4%20433.6%2C229.8%20435.1%2C230.2%20436.5%2C230.6%20437.9%2C231.0%20439.3%2C231.4%20440.7%2C231.8%20442.2%2C232.1%20443.6%2C232.5%20445.0%2C232.8%20446.4%2C233.2%20447.8%2C233.5%20449.2%2C233.9%20450.7%2C234.2%20452.1%2C234.5%20453.5%2C234.9%20454.9%2C235.2%20456.3%2C235.5%20457.8%2C235.8%20459.2%2C236.1%20460.6%2C236.4%20462.0%2C236.7%20463.4%2C237.0%20464.9%2C237.3%20466.3%2C237.6%20467.7%2C237.8%20469.1%2C238.1%20470.5%2C238.4%20472.0%2C238.7%20473.4%2C238.9%20474.8%2C239.2%20476.2%2C239.4%20477.6%2C239.7%20479.0%2C239.9%20480.5%2C240.2%20481.9%2C240.4%20483.3%2C240.6%20484.7%2C240.9%20486.1%2C241.1%20487.6%2C241.3%20489.0%2C241.6%20490.4%2C241.8%20491.8%2C242.0%20493.2%2C242.2%20494.6%2C242.4%20496.1%2C242.6%20497.5%2C242.8%20498.9%2C243.0%20500.3%2C243.2%20501.7%2C243.4%20503.2%2C243.6%20504.6%2C243.8%20506.0%2C244.0%22%20clip-path%3D%22url%28%23clip-6114479%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C204.0%2053.4%2C203.8%2054.8%2C203.6%2056.3%2C203.4%2057.7%2C203.2%2059.1%2C203.1%2060.5%2C202.9%2061.9%2C202.7%2063.4%2C202.5%2064.8%2C202.3%2066.2%2C202.1%2067.6%2C201.9%2069.0%2C201.7%2070.4%2C201.5%2071.9%2C201.3%2073.3%2C201.1%2074.7%2C200.9%2076.1%2C200.7%2077.5%2C200.5%2079.0%2C200.3%2080.4%2C200.1%2081.8%2C199.8%2083.2%2C199.6%2084.6%2C199.4%2086.0%2C199.2%2087.5%2C199.0%2088.9%2C198.8%2090.3%2C198.6%2091.7%2C198.4%2093.1%2C198.2%2094.6%2C197.9%2096.0%2C197.7%2097.4%2C197.5%2098.8%2C197.3%20100.2%2C197.1%20101.7%2C196.8%20103.1%2C196.6%20104.5%2C196.4%20105.9%2C196.2%20107.3%2C195.9%20108.8%2C195.7%20110.2%2C195.5%20111.6%2C195.3%20113.0%2C195.0%20114.4%2C194.8%20115.8%2C194.6%20117.3%2C194.3%20118.7%2C194.1%20120.1%2C193.9%20121.5%2C193.6%20122.9%2C193.4%20124.4%2C193.2%20125.8%2C192.9%20127.2%2C192.7%20128.6%2C192.5%20130.0%2C192.2%20131.4%2C192.0%20132.9%2C191.7%20134.3%2C191.5%20135.7%2C191.2%20137.1%2C191.0%20138.5%2C190.7%20140.0%2C190.5%20141.4%2C190.2%20142.8%2C190.0%20144.2%2C189.7%20145.6%2C189.5%20147.1%2C189.2%20148.5%2C189.0%20149.9%2C188.7%20151.3%2C188.5%20152.7%2C188.2%20154.2%2C188.0%20155.6%2C187.7%20157.0%2C187.5%20158.4%2C187.2%20159.8%2C186.9%20161.2%2C186.7%20162.7%2C186.4%20164.1%2C186.1%20165.5%2C185.9%20166.9%2C185.6%20168.3%2C185.3%20169.8%2C185.1%20171.2%2C184.8%20172.6%2C184.5%20174.0%2C184.3%20175.4%2C184.0%20176.9%2C183.7%20178.3%2C183.4%20179.7%2C183.2%20181.1%2C182.9%20182.5%2C182.6%20183.9%2C182.3%20185.4%2C182.1%20186.8%2C181.8%20188.2%2C181.5%20189.6%2C181.2%20191.0%2C180.9%20192.5%2C180.7%20193.9%2C180.4%20195.3%2C180.1%20196.7%2C179.8%20198.1%2C179.5%20199.6%2C179.2%20201.0%2C178.9%20202.4%2C178.6%20203.8%2C178.3%20205.2%2C178.1%20206.6%2C177.8%20208.1%2C177.5%20209.5%2C177.2%20210.9%2C176.9%20212.3%2C176.6%20213.7%2C176.3%20215.2%2C176.0%20216.6%2C175.7%20218.0%2C175.4%20219.4%2C175.1%20220.8%2C174.8%20222.2%2C174.5%20223.7%2C174.2%20225.1%2C173.9%20226.5%2C173.6%20227.9%2C173.2%20229.3%2C172.9%20230.8%2C172.6%20232.2%2C172.3%20233.6%2C172.0%20235.0%2C171.7%20236.4%2C171.4%20237.9%2C171.1%20239.3%2C170.7%20240.7%2C170.4%20242.1%2C170.1%20243.5%2C169.8%20244.9%2C169.5%20246.4%2C169.1%20247.8%2C168.8%20249.2%2C168.5%20250.6%2C168.2%20252.0%2C167.9%20253.5%2C167.5%20254.9%2C167.2%20256.3%2C166.9%20257.7%2C166.5%20259.1%2C166.2%20260.6%2C165.9%20262.0%2C165.6%20263.4%2C165.2%20264.8%2C164.9%20266.2%2C164.6%20267.6%2C164.2%20269.1%2C163.9%20270.5%2C163.5%20271.9%2C163.2%20273.3%2C162.9%20274.7%2C162.5%20276.2%2C162.2%20277.6%2C161.8%20279.0%2C161.5%20280.4%2C161.2%20281.8%2C160.8%20283.3%2C160.5%20284.7%2C160.1%20286.1%2C159.8%20287.5%2C159.4%20288.9%2C159.1%20290.4%2C158.7%20291.8%2C158.4%20293.2%2C158.0%20294.6%2C157.7%20296.0%2C157.3%20297.4%2C156.9%20298.9%2C156.6%20300.3%2C156.2%20301.7%2C155.9%20303.1%2C155.5%20304.5%2C155.2%20306.0%2C154.8%20307.4%2C154.4%20308.8%2C154.1%20310.2%2C153.7%20311.6%2C153.3%20313.0%2C153.0%20314.5%2C152.6%20315.9%2C152.2%20317.3%2C151.9%20318.7%2C151.5%20320.1%2C151.1%20321.6%2C150.7%20323.0%2C150.4%20324.4%2C150.0%20325.8%2C149.6%20327.2%2C149.2%20328.7%2C148.9%20330.1%2C148.5%20331.5%2C148.1%20332.9%2C147.7%20334.3%2C147.4%20335.8%2C147.0%20337.2%2C146.6%20338.6%2C146.2%20340.0%2C145.8%20341.4%2C145.4%20342.8%2C145.0%20344.3%2C144.7%20345.7%2C144.3%20347.1%2C143.9%20348.5%2C143.5%20349.9%2C143.1%20351.4%2C142.7%20352.8%2C142.3%20354.2%2C141.9%20355.6%2C141.5%20357.0%2C141.1%20358.5%2C140.7%20359.9%2C140.3%20361.3%2C139.9%20362.7%2C139.5%20364.1%2C139.1%20365.5%2C138.7%20367.0%2C138.3%20368.4%2C137.9%20369.8%2C137.5%20371.2%2C137.1%20372.6%2C136.7%20374.1%2C136.3%20375.5%2C135.9%20376.9%2C135.5%20378.3%2C135.0%20379.7%2C134.6%20381.1%2C134.2%20382.6%2C133.8%20384.0%2C133.4%20385.4%2C133.0%20386.8%2C132.6%20388.2%2C132.1%20389.7%2C131.7%20391.1%2C131.3%20392.5%2C130.9%20393.9%2C130.5%20395.3%2C130.0%20396.8%2C129.6%20398.2%2C129.2%20399.6%2C128.8%20401.0%2C128.3%20402.4%2C127.9%20403.9%2C127.5%20405.3%2C127.0%20406.7%2C126.6%20408.1%2C126.2%20409.5%2C125.7%20410.9%2C125.3%20412.4%2C124.9%20413.8%2C124.4%20415.2%2C124.0%20416.6%2C123.6%20418.0%2C123.1%20419.5%2C122.7%20420.9%2C122.2%20422.3%2C121.8%20423.7%2C121.4%20425.1%2C120.9%20426.5%2C120.5%20428.0%2C120.0%20429.4%2C119.6%20430.8%2C119.1%20432.2%2C118.7%20433.6%2C118.2%20435.1%2C117.8%20436.5%2C117.3%20437.9%2C116.9%20439.3%2C116.4%20440.7%2C116.0%20442.2%2C115.5%20443.6%2C115.1%20445.0%2C114.6%20446.4%2C114.1%20447.8%2C113.7%20449.2%2C113.2%20450.7%2C112.8%20452.1%2C112.3%20453.5%2C111.8%20454.9%2C111.4%20456.3%2C110.9%20457.8%2C110.4%20459.2%2C110.0%20460.6%2C109.5%20462.0%2C109.0%20463.4%2C108.6%20464.9%2C108.1%20466.3%2C107.6%20467.7%2C107.1%20469.1%2C106.7%20470.5%2C106.2%20472.0%2C105.7%20473.4%2C105.2%20474.8%2C104.8%20476.2%2C104.3%20477.6%2C103.8%20479.0%2C103.3%20480.5%2C102.8%20481.9%2C102.4%20483.3%2C101.9%20484.7%2C101.4%20486.1%2C100.9%20487.6%2C100.4%20489.0%2C99.9%20490.4%2C99.4%20491.8%2C99.0%20493.2%2C98.5%20494.6%2C98.0%20496.1%2C97.5%20497.5%2C97.0%20498.9%2C96.5%20500.3%2C96.0%20501.7%2C95.5%20503.2%2C95.0%20504.6%2C94.5%20506.0%2C94.0%22%20clip-path%3D%22url%28%23clip-6114479%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C244.0%2053.4%2C243.7%2054.8%2C243.4%2056.3%2C243.0%2057.7%2C242.7%2059.1%2C242.3%2060.5%2C242.0%2061.9%2C241.6%2063.4%2C241.2%2064.8%2C240.9%2066.2%2C240.5%2067.6%2C240.1%2069.0%2C239.6%2070.4%2C239.2%2071.9%2C238.8%2073.3%2C238.3%2074.7%2C237.9%2076.1%2C237.4%2077.5%2C237.0%2079.0%2C236.5%2080.4%2C236.0%2081.8%2C235.5%2083.2%2C234.9%2084.6%2C234.4%2086.0%2C233.8%2087.5%2C233.3%2088.9%2C232.7%2090.3%2C232.1%2091.7%2C231.5%2093.1%2C230.9%2094.6%2C230.3%2096.0%2C229.6%2097.4%2C229.0%2098.8%2C228.3%20100.2%2C227.6%20101.7%2C226.9%20103.1%2C226.2%20104.5%2C225.4%20105.9%2C224.7%20107.3%2C223.9%20108.8%2C223.1%20110.2%2C222.3%20111.6%2C221.5%20113.0%2C220.6%20114.4%2C219.7%20115.8%2C218.9%20117.3%2C217.9%20118.7%2C217.0%20120.1%2C216.1%20121.5%2C215.1%20122.9%2C214.1%20124.4%2C213.1%20125.8%2C212.1%20127.2%2C211.0%20128.6%2C210.0%20130.0%2C208.9%20131.4%2C207.8%20132.9%2C206.6%20134.3%2C205.5%20135.7%2C204.3%20137.1%2C203.1%20138.5%2C201.8%20140.0%2C200.6%20141.4%2C199.3%20142.8%2C198.0%20144.2%2C196.7%20145.6%2C195.3%20147.1%2C194.0%20148.5%2C192.6%20149.9%2C191.1%20151.3%2C189.7%20152.7%2C188.2%20154.2%2C186.8%20155.6%2C185.2%20157.0%2C183.7%20158.4%2C182.2%20159.8%2C180.6%20161.2%2C179.0%20162.7%2C177.4%20164.1%2C175.8%20165.5%2C174.1%20166.9%2C172.5%20168.3%2C170.8%20169.8%2C169.1%20171.2%2C167.4%20172.6%2C165.7%20174.0%2C163.9%20175.4%2C162.2%20176.9%2C160.5%20178.3%2C158.7%20179.7%2C157.0%20181.1%2C155.2%20182.5%2C153.5%20183.9%2C151.7%20185.4%2C150.0%20186.8%2C148.2%20188.2%2C146.5%20189.6%2C144.8%20191.0%2C143.1%20192.5%2C141.4%20193.9%2C139.8%20195.3%2C138.1%20196.7%2C136.5%20198.1%2C135.0%20199.6%2C133.4%20201.0%2C131.9%20202.4%2C130.5%20203.8%2C129.1%20205.2%2C127.7%20206.6%2C126.4%20208.1%2C125.2%20209.5%2C124.0%20210.9%2C122.9%20212.3%2C121.8%20213.7%2C120.9%20215.2%2C119.9%20216.6%2C119.1%20218.0%2C118.4%20219.4%2C117.7%20220.8%2C117.1%20222.2%2C116.6%20223.7%2C116.2%20225.1%2C115.9%20226.5%2C115.7%20227.9%2C115.5%20229.3%2C115.5%20230.8%2C115.6%20232.2%2C115.7%20233.6%2C116.0%20235.0%2C116.4%20236.4%2C116.8%20237.9%2C117.4%20239.3%2C118.0%20240.7%2C118.8%20242.1%2C119.6%20243.5%2C120.6%20244.9%2C121.6%20246.4%2C122.7%20247.8%2C123.9%20249.2%2C125.2%20250.6%2C126.6%20252.0%2C128.1%20253.5%2C129.6%20254.9%2C131.2%20256.3%2C132.9%20257.7%2C134.6%20259.1%2C136.4%20260.6%2C138.3%20262.0%2C140.2%20263.4%2C142.2%20264.8%2C144.2%20266.2%2C146.3%20267.6%2C148.4%20269.1%2C150.6%20270.5%2C152.8%20271.9%2C155.0%20273.3%2C157.3%20274.7%2C159.5%20276.2%2C161.8%20277.6%2C164.2%20279.0%2C166.5%20280.4%2C168.9%20281.8%2C171.2%20283.3%2C173.6%20284.7%2C176.0%20286.1%2C178.3%20287.5%2C180.7%20288.9%2C183.1%20290.4%2C185.5%20291.8%2C187.8%20293.2%2C190.2%20294.6%2C192.5%20296.0%2C194.9%20297.4%2C197.2%20298.9%2C199.5%20300.3%2C201.8%20301.7%2C204.1%20303.1%2C206.4%20304.5%2C208.6%20306.0%2C210.9%20307.4%2C213.1%20308.8%2C215.3%20310.2%2C217.5%20311.6%2C219.6%20313.0%2C221.8%20314.5%2C223.9%20315.9%2C226.0%20317.3%2C228.0%20318.7%2C230.1%20320.1%2C232.1%20321.6%2C234.1%20323.0%2C236.1%20324.4%2C238.0%20325.8%2C239.9%20327.2%2C241.8%20328.7%2C243.7%20330.1%2C245.6%20331.5%2C247.4%20332.9%2C249.2%20334.3%2C251.0%20335.8%2C252.8%20337.2%2C254.5%20338.6%2C256.2%20340.0%2C257.9%20341.4%2C259.6%20342.8%2C261.2%20344.3%2C262.9%20345.7%2C264.5%20347.1%2C266.1%20348.5%2C267.6%20349.9%2C269.2%20351.4%2C270.7%20352.8%2C272.2%20354.2%2C273.7%20355.6%2C275.2%20357.0%2C276.7%20358.5%2C278.1%20359.9%2C279.5%20361.3%2C280.9%20362.7%2C282.3%20364.1%2C283.7%20365.5%2C285.0%20367.0%2C286.3%20368.4%2C287.7%20369.8%2C289.0%20371.2%2C290.2%20372.6%2C291.5%20374.1%2C292.8%20375.5%2C294.0%20376.9%2C295.2%20378.3%2C296.5%20379.7%2C297.7%20381.1%2C298.8%20382.6%2C300.0%20384.0%2C301.2%20385.4%2C302.3%20386.8%2C303.5%20388.2%2C304.6%20389.7%2C305.7%20391.1%2C306.8%20392.5%2C307.9%20393.9%2C309.0%20395.3%2C310.0%20396.8%2C311.1%20398.2%2C312.1%20399.6%2C313.2%20401.0%2C314.2%20402.4%2C315.2%20403.9%2C316.2%20405.3%2C317.2%20406.7%2C318.2%20408.1%2C319.2%20409.5%2C320.2%20410.9%2C321.2%20412.4%2C322.1%20413.8%2C323.1%20415.2%2C324.0%20416.6%2C324.9%20418.0%2C325.9%20419.5%2C326.8%20420.9%2C327.7%20422.3%2C328.6%20423.7%2C329.5%20425.1%2C330.4%20426.5%2C331.3%20428.0%2C332.1%20429.4%2C333.0%20430.8%2C333.9%20432.2%2C334.7%20433.6%2C335.6%20435.1%2C336.5%20436.5%2C337.3%20437.9%2C338.1%20439.3%2C339.0%20440.7%2C339.8%20442.2%2C340.6%20443.6%2C341.4%20445.0%2C342.3%20446.4%2C343.1%20447.8%2C343.9%20449.2%2C344.7%20450.7%2C345.5%20452.1%2C346.3%20453.5%2C347.0%20454.9%2C347.8%20456.3%2C348.6%20457.8%2C349.4%20459.2%2C350.1%20460.6%2C350.9%20462.0%2C351.7%20463.4%2C352.4%20464.9%2C353.2%20466.3%2C354.0%20467.7%2C354.7%20469.1%2C355.4%20470.5%2C356.2%20472.0%2C356.9%20473.4%2C357.7%20474.8%2C358.4%20476.2%2C359.1%20477.6%2C359.9%20479.0%2C360.6%20480.5%2C361.3%20481.9%2C362.0%20483.3%2C362.8%20484.7%2C363.5%20486.1%2C364.2%20487.6%2C364.9%20489.0%2C365.6%20490.4%2C366.3%20491.8%2C367.0%20493.2%2C367.7%20494.6%2C368.4%20496.1%2C369.1%20497.5%2C369.8%20498.9%2C370.5%20500.3%2C371.2%20501.7%2C371.9%20503.2%2C372.6%20504.6%2C373.3%20506.0%2C374.0%22%20clip-path%3D%22url%28%23clip-6114479%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3ER%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EC%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EP%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  },
{
    id: "math-11-160",
    case_id: "MATH 11.160",
    title: "f′, f″, and a lifted companion h′",
    subsection: "11.4",
    context:
      "Brown is $f'$, green is $f''$, and purple is another derivative $h'$ on shared axes. Decide TRUE or FALSE.",
    statements: [
      "Green is zero at $x=3$, under the lowest point of brown.",
      "On $(0,3)$, green is negative, so brown is falling.",
      "Purple stays above brown by about $1$ everywhere in the window.",
      "At $x=1$, brown is positive, so $f$ is increasing at $x=1$.",
      "Purple touches the axis at $x=3$ without changing sign, so that touch need not give a local extremum of $h$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Extrema of brown ($f'$) line up with zeros of green ($f''$). On the figure green crosses at $x=3$ exactly under the lowest point of brown.

So the statement is True.`,
      `**B.** → True

Green is $f''$ and brown is $f'$. Where green is negative, $f''<0$, so the brown graph of $f'$ is falling.

So the statement is True.`,
      `**C.** → True

Purple is a vertical lift of brown on the shared plane. Reading the scale, it stays about $1$ above brown everywhere in the window.

So the statement is True.`,
      `**D.** → True

Brown is $f'$. Wherever it sits above the axis, $f'>0$, so $f$ is increasing there. At $x=1$ brown is still positive.

So the statement is True.`,
      `**E.** → True

Purple is non-negative and only touches zero at $x=3$. No sign change ⇒ the first-derivative test does not give a local extremum of $h$ there.

So the statement is True.`
    ],
    difficulty_level: "5/5",
    sort_order: 160,
    solution_overview:
      "Read alignments of $f''$ with extrema of $f'$; a vertical lift of $f'$ still typically keeps two zeros.",
    figure: `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20400%22%20width%3D%22640%22%20height%3D%22400%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%22640%22%20height%3D%22400%22%20rx%3D%2216%22%20fill%3D%22%23faf8f4%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%2226%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3EThree%20curves%20on%20one%20plane%3C%2Ftext%3E%0A%3Cdefs%3E%3CclipPath%20id%3D%22clip-7058447%22%3E%3Crect%20x%3D%2252%22%20y%3D%2244%22%20width%3D%22454%22%20height%3D%22300%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%2244%22%20x2%3D%2252.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%2244%22%20x2%3D%22127.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%2244%22%20x2%3D%22203.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%2244%22%20x2%3D%22279.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%2244%22%20x2%3D%22354.7%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%2244%22%20x2%3D%22430.3%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%2244%22%20x2%3D%22506.0%22%20y2%3D%22344%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344.0%22%20x2%3D%22506%22%20y2%3D%22344.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22284.0%22%20x2%3D%22506%22%20y2%3D%22284.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22164.0%22%20x2%3D%22506%22%20y2%3D%22164.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22104.0%22%20x2%3D%22506%22%20y2%3D%22104.0%22%20stroke%3D%22%23e8e2d8%22%20stroke-width%3D%221%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22224.0%22%20x2%3D%22506%22%20y2%3D%22224.0%22%20stroke%3D%22%23c4b8a8%22%20stroke-width%3D%221.3%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%2244%22%20x2%3D%2252%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252%22%20y1%3D%22344%22%20x2%3D%22506%22%20y2%3D%22344%22%20stroke%3D%22%237a7268%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2252.0%22%20y1%3D%22344%22%20x2%3D%2252.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2252.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%22127.7%22%20y1%3D%22344%22%20x2%3D%22127.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22127.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E1%3C%2Ftext%3E%0A%3Cline%20x1%3D%22203.3%22%20y1%3D%22344%22%20x2%3D%22203.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22203.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22279.0%22%20y1%3D%22344%22%20x2%3D%22279.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22279.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22354.7%22%20y1%3D%22344%22%20x2%3D%22354.7%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22354.7%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cline%20x1%3D%22430.3%22%20y1%3D%22344%22%20x2%3D%22430.3%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22430.3%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E5%3C%2Ftext%3E%0A%3Cline%20x1%3D%22506.0%22%20y1%3D%22344%22%20x2%3D%22506.0%22%20y2%3D%22349%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%22506.0%22%20y%3D%22362%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E6%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22344.0%22%20x2%3D%2252%22%20y2%3D%22344.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22348.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-4%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22284.0%22%20x2%3D%2252%22%20y2%3D%22284.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22288.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E-2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22224.0%22%20x2%3D%2252%22%20y2%3D%22224.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22228.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E0%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22164.0%22%20x2%3D%2252%22%20y2%3D%22164.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22168.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E2%3C%2Ftext%3E%0A%3Cline%20x1%3D%2247%22%20y1%3D%22104.0%22%20x2%3D%2252%22%20y2%3D%22104.0%22%20stroke%3D%22%237a7268%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%22108.0%22%20text-anchor%3D%22end%22%20font-size%3D%2211%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3E4%3C%2Ftext%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-16.0%2053.4%2C-12.6%2054.8%2C-9.3%2056.3%2C-6.0%2057.7%2C-2.7%2059.1%2C0.6%2060.5%2C3.9%2061.9%2C7.1%2063.4%2C10.3%2064.8%2C13.5%2066.2%2C16.7%2067.6%2C19.8%2069.0%2C23.0%2070.4%2C26.1%2071.9%2C29.2%2073.3%2C32.3%2074.7%2C35.3%2076.1%2C38.3%2077.5%2C41.3%2079.0%2C44.3%2080.4%2C47.3%2081.8%2C50.2%2083.2%2C53.1%2084.6%2C56.0%2086.0%2C58.9%2087.5%2C61.8%2088.9%2C64.6%2090.3%2C67.4%2091.7%2C70.2%2093.1%2C73.0%2094.6%2C75.8%2096.0%2C78.5%2097.4%2C81.2%2098.8%2C83.9%20100.2%2C86.6%20101.7%2C89.2%20103.1%2C91.8%20104.5%2C94.4%20105.9%2C97.0%20107.3%2C99.6%20108.8%2C102.1%20110.2%2C104.6%20111.6%2C107.1%20113.0%2C109.6%20114.4%2C112.1%20115.8%2C114.5%20117.3%2C116.9%20118.7%2C119.3%20120.1%2C121.7%20121.5%2C124.1%20122.9%2C126.4%20124.4%2C128.7%20125.8%2C131.0%20127.2%2C133.2%20128.6%2C135.5%20130.0%2C137.7%20131.4%2C139.9%20132.9%2C142.1%20134.3%2C144.3%20135.7%2C146.4%20137.1%2C148.5%20138.5%2C150.6%20140.0%2C152.7%20141.4%2C154.8%20142.8%2C156.8%20144.2%2C158.8%20145.6%2C160.8%20147.1%2C162.8%20148.5%2C164.7%20149.9%2C166.7%20151.3%2C168.6%20152.7%2C170.5%20154.2%2C172.3%20155.6%2C174.2%20157.0%2C176.0%20158.4%2C177.8%20159.8%2C179.6%20161.2%2C181.3%20162.7%2C183.1%20164.1%2C184.8%20165.5%2C186.5%20166.9%2C188.2%20168.3%2C189.8%20169.8%2C191.5%20171.2%2C193.1%20172.6%2C194.7%20174.0%2C196.2%20175.4%2C197.8%20176.8%2C199.3%20178.3%2C200.8%20179.7%2C202.3%20181.1%2C203.8%20182.5%2C205.2%20183.9%2C206.7%20185.4%2C208.1%20186.8%2C209.4%20188.2%2C210.8%20189.6%2C212.1%20191.0%2C213.5%20192.5%2C214.8%20193.9%2C216.0%20195.3%2C217.3%20196.7%2C218.5%20198.1%2C219.7%20199.6%2C220.9%20201.0%2C222.1%20202.4%2C223.2%20203.8%2C224.4%20205.2%2C225.5%20206.6%2C226.6%20208.1%2C227.6%20209.5%2C228.7%20210.9%2C229.7%20212.3%2C230.7%20213.7%2C231.7%20215.2%2C232.6%20216.6%2C233.6%20218.0%2C234.5%20219.4%2C235.4%20220.8%2C236.3%20222.2%2C237.1%20223.7%2C238.0%20225.1%2C238.8%20226.5%2C239.6%20227.9%2C240.3%20229.3%2C241.1%20230.8%2C241.8%20232.2%2C242.5%20233.6%2C243.2%20235.0%2C243.9%20236.4%2C244.5%20237.9%2C245.1%20239.3%2C245.7%20240.7%2C246.3%20242.1%2C246.9%20243.5%2C247.4%20244.9%2C247.9%20246.4%2C248.4%20247.8%2C248.9%20249.2%2C249.3%20250.6%2C249.8%20252.0%2C250.2%20253.5%2C250.6%20254.9%2C251.0%20256.3%2C251.3%20257.7%2C251.6%20259.1%2C251.9%20260.6%2C252.2%20262.0%2C252.5%20263.4%2C252.7%20264.8%2C252.9%20266.2%2C253.1%20267.6%2C253.3%20269.1%2C253.5%20270.5%2C253.6%20271.9%2C253.7%20273.3%2C253.8%20274.7%2C253.9%20276.2%2C254.0%20277.6%2C254.0%20279.0%2C254.0%20280.4%2C254.0%20281.8%2C254.0%20283.3%2C253.9%20284.7%2C253.8%20286.1%2C253.7%20287.5%2C253.6%20288.9%2C253.5%20290.4%2C253.3%20291.8%2C253.1%20293.2%2C252.9%20294.6%2C252.7%20296.0%2C252.5%20297.4%2C252.2%20298.9%2C251.9%20300.3%2C251.6%20301.7%2C251.3%20303.1%2C251.0%20304.5%2C250.6%20306.0%2C250.2%20307.4%2C249.8%20308.8%2C249.3%20310.2%2C248.9%20311.6%2C248.4%20313.1%2C247.9%20314.5%2C247.4%20315.9%2C246.9%20317.3%2C246.3%20318.7%2C245.7%20320.1%2C245.1%20321.6%2C244.5%20323.0%2C243.9%20324.4%2C243.2%20325.8%2C242.5%20327.2%2C241.8%20328.7%2C241.1%20330.1%2C240.3%20331.5%2C239.6%20332.9%2C238.8%20334.3%2C238.0%20335.8%2C237.1%20337.2%2C236.3%20338.6%2C235.4%20340.0%2C234.5%20341.4%2C233.6%20342.8%2C232.6%20344.3%2C231.7%20345.7%2C230.7%20347.1%2C229.7%20348.5%2C228.7%20349.9%2C227.6%20351.4%2C226.6%20352.8%2C225.5%20354.2%2C224.4%20355.6%2C223.2%20357.0%2C222.1%20358.4%2C220.9%20359.9%2C219.7%20361.3%2C218.5%20362.7%2C217.3%20364.1%2C216.0%20365.5%2C214.8%20367.0%2C213.5%20368.4%2C212.1%20369.8%2C210.8%20371.2%2C209.4%20372.6%2C208.1%20374.1%2C206.7%20375.5%2C205.2%20376.9%2C203.8%20378.3%2C202.3%20379.7%2C200.8%20381.1%2C199.3%20382.6%2C197.8%20384.0%2C196.2%20385.4%2C194.7%20386.8%2C193.1%20388.2%2C191.5%20389.7%2C189.8%20391.1%2C188.2%20392.5%2C186.5%20393.9%2C184.8%20395.3%2C183.1%20396.8%2C181.3%20398.2%2C179.6%20399.6%2C177.8%20401.0%2C176.0%20402.4%2C174.2%20403.9%2C172.3%20405.3%2C170.5%20406.7%2C168.6%20408.1%2C166.7%20409.5%2C164.7%20410.9%2C162.8%20412.4%2C160.8%20413.8%2C158.8%20415.2%2C156.8%20416.6%2C154.8%20418.0%2C152.7%20419.5%2C150.6%20420.9%2C148.5%20422.3%2C146.4%20423.7%2C144.3%20425.1%2C142.1%20426.6%2C139.9%20428.0%2C137.7%20429.4%2C135.5%20430.8%2C133.2%20432.2%2C131.0%20433.6%2C128.7%20435.1%2C126.4%20436.5%2C124.1%20437.9%2C121.7%20439.3%2C119.3%20440.7%2C116.9%20442.2%2C114.5%20443.6%2C112.1%20445.0%2C109.6%20446.4%2C107.1%20447.8%2C104.6%20449.2%2C102.1%20450.7%2C99.6%20452.1%2C97.0%20453.5%2C94.4%20454.9%2C91.8%20456.3%2C89.2%20457.8%2C86.6%20459.2%2C83.9%20460.6%2C81.2%20462.0%2C78.5%20463.4%2C75.8%20464.9%2C73.0%20466.3%2C70.2%20467.7%2C67.4%20469.1%2C64.6%20470.5%2C61.8%20471.9%2C58.9%20473.4%2C56.0%20474.8%2C53.1%20476.2%2C50.2%20477.6%2C47.3%20479.0%2C44.3%20480.5%2C41.3%20481.9%2C38.3%20483.3%2C35.3%20484.7%2C32.3%20486.1%2C29.2%20487.6%2C26.1%20489.0%2C23.0%20490.4%2C19.8%20491.8%2C16.7%20493.2%2C13.5%20494.6%2C10.3%20496.1%2C7.1%20497.5%2C3.9%20498.9%2C0.6%20500.3%2C-2.7%20501.7%2C-6.0%20503.2%2C-9.3%20504.6%2C-12.6%20506.0%2C-16.0%22%20clip-path%3D%22url%28%23clip-7058447%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C404.0%2053.4%2C402.9%2054.8%2C401.8%2056.3%2C400.6%2057.7%2C399.5%2059.1%2C398.4%2060.5%2C397.2%2061.9%2C396.1%2063.4%2C395.0%2064.8%2C393.9%2066.2%2C392.8%2067.6%2C391.6%2069.0%2C390.5%2070.4%2C389.4%2071.9%2C388.2%2073.3%2C387.1%2074.7%2C386.0%2076.1%2C384.9%2077.5%2C383.7%2079.0%2C382.6%2080.4%2C381.5%2081.8%2C380.4%2083.2%2C379.3%2084.6%2C378.1%2086.0%2C377.0%2087.5%2C375.9%2088.9%2C374.8%2090.3%2C373.6%2091.7%2C372.5%2093.1%2C371.4%2094.6%2C370.2%2096.0%2C369.1%2097.4%2C368.0%2098.8%2C366.9%20100.2%2C365.8%20101.7%2C364.6%20103.1%2C363.5%20104.5%2C362.4%20105.9%2C361.2%20107.3%2C360.1%20108.8%2C359.0%20110.2%2C357.9%20111.6%2C356.8%20113.0%2C355.6%20114.4%2C354.5%20115.8%2C353.4%20117.3%2C352.2%20118.7%2C351.1%20120.1%2C350.0%20121.5%2C348.9%20122.9%2C347.8%20124.4%2C346.6%20125.8%2C345.5%20127.2%2C344.4%20128.6%2C343.2%20130.0%2C342.1%20131.4%2C341.0%20132.9%2C339.9%20134.3%2C338.8%20135.7%2C337.6%20137.1%2C336.5%20138.5%2C335.4%20140.0%2C334.2%20141.4%2C333.1%20142.8%2C332.0%20144.2%2C330.9%20145.6%2C329.8%20147.1%2C328.6%20148.5%2C327.5%20149.9%2C326.4%20151.3%2C325.2%20152.7%2C324.1%20154.2%2C323.0%20155.6%2C321.9%20157.0%2C320.8%20158.4%2C319.6%20159.8%2C318.5%20161.2%2C317.4%20162.7%2C316.2%20164.1%2C315.1%20165.5%2C314.0%20166.9%2C312.9%20168.3%2C311.8%20169.8%2C310.6%20171.2%2C309.5%20172.6%2C308.4%20174.0%2C307.2%20175.4%2C306.1%20176.8%2C305.0%20178.3%2C303.9%20179.7%2C302.8%20181.1%2C301.6%20182.5%2C300.5%20183.9%2C299.4%20185.4%2C298.2%20186.8%2C297.1%20188.2%2C296.0%20189.6%2C294.9%20191.0%2C293.8%20192.5%2C292.6%20193.9%2C291.5%20195.3%2C290.4%20196.7%2C289.2%20198.1%2C288.1%20199.6%2C287.0%20201.0%2C285.9%20202.4%2C284.8%20203.8%2C283.6%20205.2%2C282.5%20206.6%2C281.4%20208.1%2C280.2%20209.5%2C279.1%20210.9%2C278.0%20212.3%2C276.9%20213.7%2C275.8%20215.2%2C274.6%20216.6%2C273.5%20218.0%2C272.4%20219.4%2C271.2%20220.8%2C270.1%20222.2%2C269.0%20223.7%2C267.9%20225.1%2C266.8%20226.5%2C265.6%20227.9%2C264.5%20229.3%2C263.4%20230.8%2C262.2%20232.2%2C261.1%20233.6%2C260.0%20235.0%2C258.9%20236.4%2C257.8%20237.9%2C256.6%20239.3%2C255.5%20240.7%2C254.4%20242.1%2C253.2%20243.5%2C252.1%20244.9%2C251.0%20246.4%2C249.9%20247.8%2C248.8%20249.2%2C247.6%20250.6%2C246.5%20252.0%2C245.4%20253.5%2C244.2%20254.9%2C243.1%20256.3%2C242.0%20257.7%2C240.9%20259.1%2C239.8%20260.6%2C238.6%20262.0%2C237.5%20263.4%2C236.4%20264.8%2C235.2%20266.2%2C234.1%20267.6%2C233.0%20269.1%2C231.9%20270.5%2C230.7%20271.9%2C229.6%20273.3%2C228.5%20274.7%2C227.4%20276.2%2C226.2%20277.6%2C225.1%20279.0%2C224.0%20280.4%2C222.9%20281.8%2C221.8%20283.3%2C220.6%20284.7%2C219.5%20286.1%2C218.4%20287.5%2C217.2%20288.9%2C216.1%20290.4%2C215.0%20291.8%2C213.9%20293.2%2C212.8%20294.6%2C211.6%20296.0%2C210.5%20297.4%2C209.4%20298.9%2C208.2%20300.3%2C207.1%20301.7%2C206.0%20303.1%2C204.9%20304.5%2C203.8%20306.0%2C202.6%20307.4%2C201.5%20308.8%2C200.4%20310.2%2C199.2%20311.6%2C198.1%20313.1%2C197.0%20314.5%2C195.9%20315.9%2C194.8%20317.3%2C193.6%20318.7%2C192.5%20320.1%2C191.4%20321.6%2C190.2%20323.0%2C189.1%20324.4%2C188.0%20325.8%2C186.9%20327.2%2C185.8%20328.7%2C184.6%20330.1%2C183.5%20331.5%2C182.4%20332.9%2C181.2%20334.3%2C180.1%20335.8%2C179.0%20337.2%2C177.9%20338.6%2C176.8%20340.0%2C175.6%20341.4%2C174.5%20342.8%2C173.4%20344.3%2C172.2%20345.7%2C171.1%20347.1%2C170.0%20348.5%2C168.9%20349.9%2C167.8%20351.4%2C166.6%20352.8%2C165.5%20354.2%2C164.4%20355.6%2C163.2%20357.0%2C162.1%20358.4%2C161.0%20359.9%2C159.9%20361.3%2C158.8%20362.7%2C157.6%20364.1%2C156.5%20365.5%2C155.4%20367.0%2C154.2%20368.4%2C153.1%20369.8%2C152.0%20371.2%2C150.9%20372.6%2C149.8%20374.1%2C148.6%20375.5%2C147.5%20376.9%2C146.4%20378.3%2C145.2%20379.7%2C144.1%20381.1%2C143.0%20382.6%2C141.9%20384.0%2C140.8%20385.4%2C139.6%20386.8%2C138.5%20388.2%2C137.4%20389.7%2C136.2%20391.1%2C135.1%20392.5%2C134.0%20393.9%2C132.9%20395.3%2C131.8%20396.8%2C130.6%20398.2%2C129.5%20399.6%2C128.4%20401.0%2C127.3%20402.4%2C126.1%20403.9%2C125.0%20405.3%2C123.9%20406.7%2C122.8%20408.1%2C121.6%20409.5%2C120.5%20410.9%2C119.4%20412.4%2C118.2%20413.8%2C117.1%20415.2%2C116.0%20416.6%2C114.9%20418.0%2C113.7%20419.5%2C112.6%20420.9%2C111.5%20422.3%2C110.4%20423.7%2C109.3%20425.1%2C108.1%20426.6%2C107.0%20428.0%2C105.9%20429.4%2C104.8%20430.8%2C103.6%20432.2%2C102.5%20433.6%2C101.4%20435.1%2C100.2%20436.5%2C99.1%20437.9%2C98.0%20439.3%2C96.9%20440.7%2C95.7%20442.2%2C94.6%20443.6%2C93.5%20445.0%2C92.4%20446.4%2C91.2%20447.8%2C90.1%20449.2%2C89.0%20450.7%2C87.9%20452.1%2C86.8%20453.5%2C85.6%20454.9%2C84.5%20456.3%2C83.4%20457.8%2C82.2%20459.2%2C81.1%20460.6%2C80.0%20462.0%2C78.9%20463.4%2C77.8%20464.9%2C76.6%20466.3%2C75.5%20467.7%2C74.4%20469.1%2C73.2%20470.5%2C72.1%20471.9%2C71.0%20473.4%2C69.9%20474.8%2C68.7%20476.2%2C67.6%20477.6%2C66.5%20479.0%2C65.4%20480.5%2C64.3%20481.9%2C63.1%20483.3%2C62.0%20484.7%2C60.9%20486.1%2C59.8%20487.6%2C58.6%20489.0%2C57.5%20490.4%2C56.4%20491.8%2C55.2%20493.2%2C54.1%20494.6%2C53.0%20496.1%2C51.9%20497.5%2C50.7%20498.9%2C49.6%20500.3%2C48.5%20501.7%2C47.4%20503.2%2C46.2%20504.6%2C45.1%20506.0%2C44.0%22%20clip-path%3D%22url%28%23clip-7058447%29%22%2F%3E%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.4%22%20points%3D%2252.0%2C-46.0%2053.4%2C-42.6%2054.8%2C-39.3%2056.3%2C-36.0%2057.7%2C-32.7%2059.1%2C-29.4%2060.5%2C-26.1%2061.9%2C-22.9%2063.4%2C-19.7%2064.8%2C-16.5%2066.2%2C-13.3%2067.6%2C-10.2%2069.0%2C-7.0%2070.4%2C-3.9%2071.9%2C-0.8%2073.3%2C2.3%2074.7%2C5.3%2076.1%2C8.3%2077.5%2C11.3%2079.0%2C14.3%2080.4%2C17.3%2081.8%2C20.2%2083.2%2C23.1%2084.6%2C26.0%2086.0%2C28.9%2087.5%2C31.8%2088.9%2C34.6%2090.3%2C37.4%2091.7%2C40.2%2093.1%2C43.0%2094.6%2C45.8%2096.0%2C48.5%2097.4%2C51.2%2098.8%2C53.9%20100.2%2C56.6%20101.7%2C59.2%20103.1%2C61.8%20104.5%2C64.4%20105.9%2C67.0%20107.3%2C69.6%20108.8%2C72.1%20110.2%2C74.6%20111.6%2C77.1%20113.0%2C79.6%20114.4%2C82.1%20115.8%2C84.5%20117.3%2C86.9%20118.7%2C89.3%20120.1%2C91.7%20121.5%2C94.1%20122.9%2C96.4%20124.4%2C98.7%20125.8%2C101.0%20127.2%2C103.2%20128.6%2C105.5%20130.0%2C107.7%20131.4%2C109.9%20132.9%2C112.1%20134.3%2C114.3%20135.7%2C116.4%20137.1%2C118.5%20138.5%2C120.6%20140.0%2C122.7%20141.4%2C124.8%20142.8%2C126.8%20144.2%2C128.8%20145.6%2C130.8%20147.1%2C132.8%20148.5%2C134.7%20149.9%2C136.7%20151.3%2C138.6%20152.7%2C140.5%20154.2%2C142.3%20155.6%2C144.2%20157.0%2C146.0%20158.4%2C147.8%20159.8%2C149.6%20161.2%2C151.3%20162.7%2C153.1%20164.1%2C154.8%20165.5%2C156.5%20166.9%2C158.2%20168.3%2C159.8%20169.8%2C161.5%20171.2%2C163.1%20172.6%2C164.7%20174.0%2C166.2%20175.4%2C167.8%20176.8%2C169.3%20178.3%2C170.8%20179.7%2C172.3%20181.1%2C173.8%20182.5%2C175.2%20183.9%2C176.7%20185.4%2C178.1%20186.8%2C179.4%20188.2%2C180.8%20189.6%2C182.1%20191.0%2C183.5%20192.5%2C184.8%20193.9%2C186.0%20195.3%2C187.3%20196.7%2C188.5%20198.1%2C189.7%20199.6%2C190.9%20201.0%2C192.1%20202.4%2C193.2%20203.8%2C194.4%20205.2%2C195.5%20206.6%2C196.6%20208.1%2C197.6%20209.5%2C198.7%20210.9%2C199.7%20212.3%2C200.7%20213.7%2C201.7%20215.2%2C202.6%20216.6%2C203.6%20218.0%2C204.5%20219.4%2C205.4%20220.8%2C206.3%20222.2%2C207.1%20223.7%2C208.0%20225.1%2C208.8%20226.5%2C209.6%20227.9%2C210.3%20229.3%2C211.1%20230.8%2C211.8%20232.2%2C212.5%20233.6%2C213.2%20235.0%2C213.9%20236.4%2C214.5%20237.9%2C215.1%20239.3%2C215.7%20240.7%2C216.3%20242.1%2C216.9%20243.5%2C217.4%20244.9%2C217.9%20246.4%2C218.4%20247.8%2C218.9%20249.2%2C219.3%20250.6%2C219.8%20252.0%2C220.2%20253.5%2C220.6%20254.9%2C221.0%20256.3%2C221.3%20257.7%2C221.6%20259.1%2C221.9%20260.6%2C222.2%20262.0%2C222.5%20263.4%2C222.7%20264.8%2C222.9%20266.2%2C223.1%20267.6%2C223.3%20269.1%2C223.5%20270.5%2C223.6%20271.9%2C223.7%20273.3%2C223.8%20274.7%2C223.9%20276.2%2C224.0%20277.6%2C224.0%20279.0%2C224.0%20280.4%2C224.0%20281.8%2C224.0%20283.3%2C223.9%20284.7%2C223.8%20286.1%2C223.7%20287.5%2C223.6%20288.9%2C223.5%20290.4%2C223.3%20291.8%2C223.1%20293.2%2C222.9%20294.6%2C222.7%20296.0%2C222.5%20297.4%2C222.2%20298.9%2C221.9%20300.3%2C221.6%20301.7%2C221.3%20303.1%2C221.0%20304.5%2C220.6%20306.0%2C220.2%20307.4%2C219.8%20308.8%2C219.3%20310.2%2C218.9%20311.6%2C218.4%20313.1%2C217.9%20314.5%2C217.4%20315.9%2C216.9%20317.3%2C216.3%20318.7%2C215.7%20320.1%2C215.1%20321.6%2C214.5%20323.0%2C213.9%20324.4%2C213.2%20325.8%2C212.5%20327.2%2C211.8%20328.7%2C211.1%20330.1%2C210.3%20331.5%2C209.6%20332.9%2C208.8%20334.3%2C208.0%20335.8%2C207.1%20337.2%2C206.3%20338.6%2C205.4%20340.0%2C204.5%20341.4%2C203.6%20342.8%2C202.6%20344.3%2C201.7%20345.7%2C200.7%20347.1%2C199.7%20348.5%2C198.7%20349.9%2C197.6%20351.4%2C196.6%20352.8%2C195.5%20354.2%2C194.4%20355.6%2C193.2%20357.0%2C192.1%20358.4%2C190.9%20359.9%2C189.7%20361.3%2C188.5%20362.7%2C187.3%20364.1%2C186.0%20365.5%2C184.8%20367.0%2C183.5%20368.4%2C182.1%20369.8%2C180.8%20371.2%2C179.4%20372.6%2C178.1%20374.1%2C176.7%20375.5%2C175.2%20376.9%2C173.8%20378.3%2C172.3%20379.7%2C170.8%20381.1%2C169.3%20382.6%2C167.8%20384.0%2C166.2%20385.4%2C164.7%20386.8%2C163.1%20388.2%2C161.5%20389.7%2C159.8%20391.1%2C158.2%20392.5%2C156.5%20393.9%2C154.8%20395.3%2C153.1%20396.8%2C151.3%20398.2%2C149.6%20399.6%2C147.8%20401.0%2C146.0%20402.4%2C144.2%20403.9%2C142.3%20405.3%2C140.5%20406.7%2C138.6%20408.1%2C136.7%20409.5%2C134.7%20410.9%2C132.8%20412.4%2C130.8%20413.8%2C128.8%20415.2%2C126.8%20416.6%2C124.8%20418.0%2C122.7%20419.5%2C120.6%20420.9%2C118.5%20422.3%2C116.4%20423.7%2C114.3%20425.1%2C112.1%20426.6%2C109.9%20428.0%2C107.7%20429.4%2C105.5%20430.8%2C103.2%20432.2%2C101.0%20433.6%2C98.7%20435.1%2C96.4%20436.5%2C94.1%20437.9%2C91.7%20439.3%2C89.3%20440.7%2C86.9%20442.2%2C84.5%20443.6%2C82.1%20445.0%2C79.6%20446.4%2C77.1%20447.8%2C74.6%20449.2%2C72.1%20450.7%2C69.6%20452.1%2C67.0%20453.5%2C64.4%20454.9%2C61.8%20456.3%2C59.2%20457.8%2C56.6%20459.2%2C53.9%20460.6%2C51.2%20462.0%2C48.5%20463.4%2C45.8%20464.9%2C43.0%20466.3%2C40.2%20467.7%2C37.4%20469.1%2C34.6%20470.5%2C31.8%20471.9%2C28.9%20473.4%2C26.0%20474.8%2C23.1%20476.2%2C20.2%20477.6%2C17.3%20479.0%2C14.3%20480.5%2C11.3%20481.9%2C8.3%20483.3%2C5.3%20484.7%2C2.3%20486.1%2C-0.8%20487.6%2C-3.9%20489.0%2C-7.0%20490.4%2C-10.2%20491.8%2C-13.3%20493.2%2C-16.5%20494.6%2C-19.7%20496.1%2C-22.9%20497.5%2C-26.1%20498.9%2C-29.4%20500.3%2C-32.7%20501.7%2C-36.0%20503.2%2C-39.3%20504.6%2C-42.6%20506.0%2C-46.0%22%20clip-path%3D%22url%28%23clip-7058447%29%22%2F%3E%0A%3Crect%20x%3D%22514%22%20y%3D%2246%22%20width%3D%22106%22%20height%3D%2268%22%20rx%3D%228%22%20fill%3D%22%23f8f6f2%22%20stroke%3D%22%23d9d2c5%22%2F%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2264%22%20x2%3D%22538%22%20y2%3D%2264%22%20stroke%3D%22%238B5A2B%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2268%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B2%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%2282%22%20x2%3D%22538%22%20y2%3D%2282%22%20stroke%3D%22%232F5D50%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%2286%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ef%E2%80%B3%3C%2Ftext%3E%0A%3Cline%20x1%3D%22520%22%20y1%3D%22100%22%20x2%3D%22538%22%20y2%3D%22100%22%20stroke%3D%22%236B3FA0%22%20stroke-width%3D%222.6%22%2F%3E%3Ctext%20x%3D%22544%22%20y%3D%22104%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Eh%E2%80%B2%3C%2Ftext%3E%0A%3Ctext%20x%3D%22279%22%20y%3D%22388%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%20font-family%3D%22Georgia%2Cserif%22%20fill%3D%22%232b2b2b%22%3Ex%3C%2Ftext%3E%0A%3C%2Fsvg%3E`,
  }

];

export const MATH_CH11_DIFFERENTIATION: MathTask[] = [
  ...MATH_CH11_CORE,
  ...(ch11Exam.tasks as MathTask[]).map((t) => ({
    ...t,
    placeholder: false,
  })),
];
