import type { MathTask } from "@/data/math-chapters";

export const MATH_CH11_SUBSECTIONS = [
  { id: "11.1", title: "Differentiation rules & mechanics" },
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
\dfrac{P(a+h)-P(a)}{h}
=
\dfrac{(a+h)^{2}-4(a+h)+7-(a^{2}-4a+7)}{h}
$$

Expand the numerator and collect like terms:

$$
\dfrac{2ah+h^{2}-4h}{h}
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
P'(3)=2\cdot 3-4=2
$$

The derivative value matches the claim, so the statement is True.`,
      `**C.** → True

First recover the point on the graph:

$$
P(3)=3^{2}-4\cdot 3+7=4
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
      "A factory models total daily cost in euros by $C(q)=200+12q+\dfrac{3}{100}q^{2}$, where $q$ is the number of units produced. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal cost function is $C'(q)=12+\dfrac{3}{50}q$.",
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
C(q)=200+12q+\dfrac{3}{100}q^{2}
$$

The constant disappears, the linear term contributes its coefficient, and the quadratic term uses the power rule:

$$
C'(q)=12+\dfrac{3}{100}\cdot 2q
=
12+\dfrac{3}{50}q
$$

The derivative is exactly the one stated, so the statement is True.`,
      `**B.** → True

Substitute $q=100$ into the marginal cost function:

$$
C'(100)=12+\dfrac{3}{50}\cdot 100
$$

$$
=12+6=18
$$

The numerical value matches the claim, so the statement is True.`,
      `**C.** → True

Marginal cost is the derivative of total cost with respect to output. Its unit is euros per unit, and it measures the instantaneous change in cost when output changes slightly.

At $q=100$,

$$
C'(100)=18
$$

So one extra unit changes total cost by approximately $18$ euros. That is the standard derivative interpretation, so the statement is True.`,
      `**D.** → False

Average cost and marginal cost are different ideas:

$$
\dfrac{C(q)}{q}
$$

whereas

$$
C'(q)
$$

The derivative tells how total cost changes when output changes. It does not divide total cost by the number of units. The statement is False.`,
      `**E.** → True

First compute the point on the curve:

$$
C(100)=200+12\cdot 100+\dfrac{3}{100}\cdot 100^{2}
$$

$$
=200+1200+300=1700
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
      "A workshop estimates output by $Q(L)=5L^{\dfrac{3}{2}}$ units when $L>0$ labour-hours are used. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The marginal product is $Q'(L)=\dfrac{15}{2}L^{\dfrac{1}{2}}$.",
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
Q(L)=5L^{\dfrac{3}{2}}
$$

So

$$
Q'(L)=5\cdot \dfrac{3}{2}L^{\dfrac{1}{2}}
=
\dfrac{15}{2}L^{\dfrac{1}{2}}
$$

The derivative matches the claim, so the statement is True.`,
      `**B.** → True

Evaluate the derivative at $L=4$:

$$
Q'(4)=\dfrac{15}{2}\cdot 4^{\dfrac{1}{2}}
$$

$$
=\dfrac{15}{2}\cdot 2=15
$$

The value is correct, so the statement is True.`,
      `**C.** → True

The derivative has units of output per labour-hour. Therefore

$$
Q'(4)=15
$$

means that near $L=4$, a small increase of one labour-hour raises output by approximately $15$ units.

That is the correct marginal interpretation, so the statement is True.`,
      `**D.** → False

The derivative still depends on $L$:

$$
Q'(L)=\dfrac{15}{2}L^{\dfrac{1}{2}}
$$

Since the square-root factor changes with $L$, the marginal product is not constant. The statement is False.`,
      `**E.** → False

Compare the marginal product at the two labour levels:

$$
Q'(4)=15
$$

and

$$
Q'(8)=\dfrac{15}{2}\sqrt{8}=15\sqrt{2}
$$

The ratio is

$$
\dfrac{Q'(8)}{Q'(4)}=\sqrt{2}
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
      "A seller can charge $p(q)=80-2q$ euros per unit when it sells $q$ units. Revenue is $R(q)=q\,p(q)$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The revenue function is $R(q)=80q-2q^{2}$.",
      "The marginal revenue is $R'(q)=80-4q$.",
      "$R'(10)=40$.",
      "Differentiating the price function alone would give marginal revenue.",
      "The tangent line to $R$ at $q=10$ is $y=600+40(q-10)$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Revenue is price times quantity:

$$
R(q)=q(80-2q)
$$

Expanding gives

$$
R(q)=80q-2q^{2}
$$

The statement is True.`,
      `**B.** → True

Differentiate the full revenue function, not only price:

$$
R'(q)=80-4q
$$

That is the correct marginal revenue function, so the statement is True.`,
      `**C.** → True

Substitute $q=10$:

$$
R'(10)=80-4\cdot 10=40
$$

The computed value matches the claim, so the statement is True.`,
      `**D.** → False

The price function is

$$
p(q)=80-2q
$$

and its derivative is

$$
p'(q)=-2
$$

But marginal revenue is the derivative of

$$
R(q)=q\,p(q),
$$

not of $p(q)$ alone. The statement is False.`,
      `**E.** → True

First compute revenue at the named output:

$$
R(10)=80\cdot 10-2\cdot 10^{2}=800-200=600
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
      "A plant has total cost $C(q)=300+6q+\dfrac{3}{100}q^{2}$ euros for output $q>0$. The average cost is $A(q)=\dfrac{C(q)}{q}$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The average cost simplifies to $A(q)=\dfrac{300}{q}+6+\dfrac{3}{100}q$.",
      "The derivative is $A'(q)=-\dfrac{300}{q^{2}}+\dfrac{3}{100}$.",
      "$A'(100)=0$.",
      "The derivative $A'(q)$ is the same as marginal cost.",
      "At $q=100$, average cost is locally flat because the derivative is zero there.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Divide each term in the total cost by $q$:

$$
A(q)=\dfrac{300+6q+\dfrac{3}{100}q^{2}}{q}
$$

$$
=\dfrac{300}{q}+6+\dfrac{3}{100}q
$$

The algebraic simplification is correct, so the statement is True.`,
      `**B.** → True

Differentiate the simplified form term by term:

$$
A(q)=300q^{-1}+6+\dfrac{3}{100}q
$$

Hence

$$
A'(q)=-300q^{-2}+\dfrac{3}{100}
=
-\dfrac{300}{q^{2}}+\dfrac{3}{100}
$$

The derivative agrees with the claim, so the statement is True.`,
      `**C.** → True

Substitute $q=100$:

$$
A'(100)=-\dfrac{300}{100^{2}}+\dfrac{3}{100}
$$

$$
=-\dfrac{300}{10000}+\dfrac{3}{100}
=-\dfrac{3}{100}+\dfrac{3}{100}=0
$$

So the statement is True.`,
      `**D.** → False

Marginal cost is

$$
C'(q)=6+\dfrac{3}{50}q,
$$

whereas the derivative in the statement is

$$
A'(q)=-\dfrac{300}{q^{2}}+\dfrac{3}{100}.
$$

These are derivatives of two different functions. Average cost and marginal cost are not the same object, so the statement is False.`,
      `**E.** → True

When the derivative of a differentiable function is zero at a point, the tangent is horizontal there:

$$
A'(100)=0
$$

That means the average-cost curve is locally flat at $q=100$. The statement is True.`,
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
      "A helpdesk models average waiting time in minutes by $W(n)=\dfrac{48}{n+3}$, where $n>0$ is the number of agents on shift. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $W'(n)=-\dfrac{48}{(n+3)^{2}}$.",
      "$W'(3)=-\dfrac{4}{3}$.",
      "At $n=3$, adding one more agent lowers the waiting time by approximately $\dfrac{4}{3}$ minutes.",
      "Because $W'(n)<0$, waiting time is increasing in $n$.",
      "$W''(n)=\dfrac{96}{(n+3)^{3}}$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite the function as a power:

$$
W(n)=48(n+3)^{-1}
$$

Differentiate by the chain rule:

$$
W'(n)=48(-1)(n+3)^{-2}\cdot 1
=
-\dfrac{48}{(n+3)^{2}}
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate the derivative at $n=3$:

$$
W'(3)=-\dfrac{48}{(3+3)^{2}}
=
-\dfrac{48}{36}
=
-\dfrac{4}{3}
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

The derivative is measured in minutes per agent. Therefore

$$
W'(3)=-\dfrac{4}{3}
$$

means that near $n=3$, one extra agent changes waiting time by approximately $-\dfrac{4}{3}$ minutes. The negative sign means a reduction. The statement is True.`,
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
W''(n)=-48(-2)(n+3)^{-3}
=
\dfrac{96}{(n+3)^{3}}
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
      "A campaign response index is modeled by $S(x)=x^{2}e^{-x}$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $S'(x)=xe^{-x}(2-x)$.",
      "$S'(2)=0$.",
      "$S''(x)=e^{-x}(x^{2}-4x+2)$.",
      "The derivative is found by the quotient rule.",
      "At $x=2$, the tangent to the graph is horizontal.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Use the product rule:

$$
S'(x)=(2x)e^{-x}+x^{2}(-e^{-x})
$$

Factor the common terms:

$$
S'(x)=e^{-x}(2x-x^{2})
=
xe^{-x}(2-x)
$$

The derivative matches the claim, so the statement is True.`,
      `**B.** → True

Substitute $x=2$ into the derivative:

$$
S'(2)=2e^{-2}(2-2)=0
$$

The value is exactly zero, so the statement is True.`,
      `**C.** → True

Differentiate

$$
S'(x)=e^{-x}(2x-x^{2})
$$

once more:

$$
S''(x)=(-e^{-x})(2x-x^{2})+e^{-x}(2-2x)
$$

$$
=e^{-x}(x^{2}-4x+2)
$$

The stated second derivative is correct, so the statement is True.`,
      `**D.** → False

The original function is a product of the two factors $x^{2}$ and $e^{-x}$.

So the primary rule is the product rule, not the quotient rule. The statement is False.`,
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
      "Apply the product rule to an exponential-polynomial product and use the derivative value to recognize a horizontal tangent.",
  },
  {
    id: "math-11-8",
    case_id: "MATH 11.08",
    title: "Chain rule inside a square-root demand model",
    subsection: "11.1",
    context:
      "Expected demand is modeled by $D(a)=7\sqrt{a+9}$ units when $a\geq 0$ measures advertising intensity. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $D'(a)=\dfrac{7}{2\sqrt{a+9}}$.",
      "$D'(7)=\dfrac{7}{8}$.",
      "The derivative uses the chain rule because the square root is applied to $a+9$.",
      "Near $a=7$, increasing advertising by one unit raises expected demand by approximately $7$ units.",
      "$D'(a)$ is smaller at $a=16$ than at $a=0$.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite the square root as a power:

$$
D(a)=7(a+9)^{\dfrac{1}{2}}
$$

Differentiate by the chain rule:

$$
D'(a)=7\cdot \dfrac{1}{2}(a+9)^{-\dfrac{1}{2}}\cdot 1
=
\dfrac{7}{2\sqrt{a+9}}
$$

The formula is correct, so the statement is True.`,
      `**B.** → True

Substitute $a=7$:

$$
D'(7)=\dfrac{7}{2\sqrt{16}}
=
\dfrac{7}{8}
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

The outer function is the square-root power and the inner function is

$$
a+9.
$$

Because one function is applied to another, the derivative uses the chain rule. The statement is True.`,
      `**D.** → False

The derivative at $a=7$ is

$$
\dfrac{7}{8},
$$

not $7$. So the model predicts an increase of approximately $\dfrac{7}{8}$ units of demand per extra unit of advertising near $a=7$. The statement is False.`,
      `**E.** → True

Compute the two derivative values:

$$
D'(16)=\dfrac{7}{2\sqrt{25}}=\dfrac{7}{10}
$$

and

$$
D'(0)=\dfrac{7}{2\sqrt{9}}=\dfrac{7}{6}.
$$

Since

$$
\dfrac{7}{10}<\dfrac{7}{6},
$$

the derivative is indeed smaller at $a=16$. The statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 8,
    solution_overview:
      "Differentiate a square-root demand rule with the chain rule and interpret the derivative numerically at named advertising levels.",
  },
  {
    id: "math-11-9",
    case_id: "MATH 11.09",
    title: "Revenue from a nested demand rule",
    subsection: "11.1",
    context:
      "A retailer sets price by $p(n)=20-3n$ euros and expected demand by $q(n)=\sqrt{2n+1}$ units, where $n>0$ measures promotion intensity. Revenue is $R(n)=p(n)q(n)$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $R'(n)=\dfrac{17-9n}{\sqrt{2n+1}}$.",
      "$R'(1)=\dfrac{8}{\sqrt{3}}$.",
      "Differentiating $R(n)$ requires both the product rule and the chain rule.",
      "$R'(n)=0$ at $n=\dfrac{17}{9}$.",
      "$R(n)$ is increasing for every $0<n<2$.",
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

First write the revenue explicitly:

$$
R(n)=(20-3n)(2n+1)^{\dfrac{1}{2}}
$$

Product rule gives

$$
R'(n)=(-3)(2n+1)^{\dfrac{1}{2}}+(20-3n)(2n+1)^{-\dfrac{1}{2}}
$$

Put both terms over the same denominator:

$$
R'(n)=\dfrac{20-3n-3(2n+1)}{\sqrt{2n+1}}
=
\dfrac{17-9n}{\sqrt{2n+1}}
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Substitute $n=1$:

$$
R'(1)=\dfrac{17-9}{\sqrt{3}}
=
\dfrac{8}{\sqrt{3}}
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

The formula is a product because

$$
R(n)=p(n)\,q(n).
$$

Inside that product, demand is

$$
q(n)=\sqrt{2n+1},
$$

which is itself a composition. So the derivative needs the product rule and the chain rule. The statement is True.`,
      `**D.** → True

Critical points solve

$$
R'(n)=0.
$$

From part A this means

$$
\dfrac{17-9n}{\sqrt{2n+1}}=0.
$$

The denominator is positive for $n>0$, so the numerator must be zero:

$$
17-9n=0
$$

$$
n=\dfrac{17}{9}.
$$

The statement is True.`,
      `**E.** → False

The derivative changes sign at

$$
n=\dfrac{17}{9},
$$

and

$$
\dfrac{17}{9}<2.
$$

So the curve increases only on

$$
0<n<\dfrac{17}{9},
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
      "A plant models total maintenance hours by $H(n)=2n^{2}+8n$ when it runs $n>0$ machines. Maintenance time per effective unit is $T(n)=\dfrac{H(n)}{n+1}$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $T'(n)=\dfrac{2n^{2}+4n+8}{(n+1)^{2}}$.",
      "$T'(1)=\dfrac{7}{2}$.",
      "$T'(n)>0$ for every $n>0$.",
      "The quotient rule is needed to differentiate $T(n)$ directly.",
      "There exists some $n>0$ for which $T'(n)=0$.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Use the quotient rule with

$$
u=2n^{2}+8n
$$

$$
v=n+1.
$$

Then

$$
u'=4n+8
$$

$$
v'=1.
$$

Therefore

$$
T'(n)=\dfrac{u'v-uv'}{v^{2}}
=
\dfrac{(4n+8)(n+1)-(2n^{2}+8n)}{(n+1)^{2}}
$$

Simplifying the numerator gives

$$
2n^{2}+4n+8.
$$

So the stated derivative is correct.`,
      `**B.** → True

Insert $n=1$:

$$
T'(1)=\dfrac{2+4+8}{(1+1)^{2}}
=
\dfrac{14}{4}
=
\dfrac{7}{2}.
$$

The statement is True.`,
      `**C.** → True

For every $n>0$,

$$
2n^{2}+4n+8>0
$$

and also

$$
(n+1)^{2}>0.
$$

So

$$
T'(n)=\dfrac{2n^{2}+4n+8}{(n+1)^{2}}>0
$$

for every $n>0$. The statement is True.`,
      `**D.** → True

If you differentiate the ratio in its original form,

$$
T(n)=\dfrac{2n^{2}+8n}{n+1},
$$

the quotient rule is the natural direct rule. It is also possible to simplify first by division, but the claim only says the quotient rule is needed to differentiate directly. That is correct, so the statement is True.`,
      `**E.** → False

From part C, the derivative is strictly positive for all $n>0$:

$$
T'(n)>0.
$$

A strictly positive quantity cannot equal zero. The statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 10,
    solution_overview:
      "Differentiate a ratio with the quotient rule, simplify the derivative into a single fraction, and use numerator-denominator signs to judge monotonicity.",
  },
  {
    id: "math-11-11",
    case_id: "MATH 11.11",
    title: "Log utility with a linear time cost",
    subsection: "11.1",
    context:
      "A student models utility from study time by $U(x)=40\ln(x+1)-x$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $U'(x)=\dfrac{40}{x+1}-1$.",
      "$U'(3)=9$.",
      "The derivative uses the chain rule because the logarithm is applied to $x+1$.",
      "$U'(x)$ is undefined at $x=0$.",
      "Near $x=3$, one extra hour of study changes utility by approximately $9$ utility units.",
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Differentiate term by term:

$$
U(x)=40\ln(x+1)-x
$$

For the logarithmic term,

$$
\dfrac{d}{dx}\ln(x+1)=\dfrac{1}{x+1}\cdot 1.
$$

So

$$
U'(x)=40\cdot \dfrac{1}{x+1}-1
=
\dfrac{40}{x+1}-1.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=3$:

$$
U'(3)=\dfrac{40}{4}-1=10-1=9.
$$

The claim is correct, so the statement is True.`,
      `**C.** → True

The outer function is $\ln(\cdot)$ and the inner function is $x+1$. Because the logarithm is applied to another function, the derivative uses the chain rule. The statement is True.`,
      `**D.** → False

At $x=0$,

$$
U'(0)=\dfrac{40}{1}-1=39.
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
      "Differentiate a logarithmic utility function with the chain rule and interpret the derivative as utility gained per extra hour.",
  },
  {
    id: "math-11-12",
    case_id: "MATH 11.12",
    title: "A learning-curve cost per unit",
    subsection: "11.1",
    context:
      "A training program models unit processing cost by $c(N)=1000N^{-\dfrac{1}{2}}$ euros when cumulative output is $N>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $c'(N)=-500N^{-\dfrac{3}{2}}$.",
      "$c'(4)=-\dfrac{125}{2}$.",
      "The derivative is negative for all $N>0$.",
      "Near $N=4$, one extra unit of cumulative output lowers unit cost by approximately $\dfrac{125}{2}$ euros.",
      "Doubling $N$ from $4$ to $8$ doubles the magnitude of the derivative.",
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Apply the power rule:

$$
c(N)=1000N^{-\dfrac{1}{2}}
$$

$$
c'(N)=1000\left(-\dfrac{1}{2}\right)N^{-\dfrac{3}{2}}
=
-500N^{-\dfrac{3}{2}}.
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate at $N=4$:

$$
c'(4)=-500\cdot 4^{-\dfrac{3}{2}}
$$

Since

$$
4^{\dfrac{3}{2}}=(\sqrt{4})^{3}=8,
$$

we get

$$
c'(4)=-\dfrac{500}{8}=-\dfrac{125}{2}.
$$

The value matches the claim, so the statement is True.`,
      `**C.** → True

For $N>0$,

$$
N^{-\dfrac{3}{2}}>0.
$$

Multiplying by the negative coefficient $-500$ gives

$$
c'(N)<0
$$

for every $N>0$. The statement is True.`,
      `**D.** → True

The derivative gives the instantaneous change in unit cost per extra cumulative unit. Because

$$
c'(4)=-\dfrac{125}{2},
$$

the cost falls by approximately $\dfrac{125}{2}$ euros per extra unit near $N=4$. The negative sign means a reduction. The statement is True.`,
      `**E.** → False

Compare the derivative magnitudes:

$$
|c'(4)|=\dfrac{125}{2}
$$

and

$$
|c'(8)|=500\cdot 8^{-\dfrac{3}{2}}
=
\dfrac{500}{16\sqrt{2}}.
$$

That second value is smaller, not twice as large. As cumulative output grows, the derivative magnitude shrinks. The statement is False.`,
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
R(20)=50\cdot 20-20^{2}=1000-400=600.
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
    title: "Which function should be differentiated?",
    subsection: "11.1",
    context:
      "A firm sells $q$ units at price $p(q)=100-q$ euros per unit. Total cost is $C(q)=20q+100$. Profit is $\pi(q)=q\,p(q)-C(q)$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The correct function to differentiate for marginal profit is $\pi(q)$.",
      "Differentiating only $p(q)$ gives marginal profit.",
      "Revenue is $R(q)=100q-q^{2}$.",
      "Profit is $\pi(q)=80q-q^{2}-100$.",
      "The marginal profit is $\pi'(q)=80-2q$.",
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Marginal profit means the derivative of total profit with respect to output. The correct function is therefore

$$
\pi(q),
$$

not price, and not cost taken by itself. The statement is True.`,
      `**B.** → False

The price function is only

$$
p(q)=100-q.
$$

Its derivative tells how price changes with quantity, not how profit changes with quantity. Marginal profit comes from differentiating

$$
\pi(q)=R(q)-C(q).
$$

The statement is False.`,
      `**C.** → True

Revenue equals price times quantity:

$$
R(q)=q(100-q)=100q-q^{2}.
$$

The statement is True.`,
      `**D.** → True

Now subtract cost:

$$
\pi(q)=R(q)-C(q)
=
(100q-q^{2})-(20q+100)
$$

$$
=80q-q^{2}-100.
$$

The statement is True.`,
      `**E.** → True

Differentiate the profit function:

$$
\pi'(q)=80-2q.
$$

That is the correct marginal profit, so the statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 14,
    solution_overview:
      "Translate the business story into revenue, cost, and profit functions first, then identify which one the derivative must be taken from.",
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
      "$C''\left(\dfrac{3}{2}\right)=0$.",
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
q=\dfrac{3}{2}
$$

into the second derivative:

$$
C''\left(\dfrac{3}{2}\right)=24\cdot \dfrac{3}{2}-36=36-36=0.
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
      "A service firm models a complaint index by $K(t)=\dfrac{t+4}{t+1}$ for $t>0$, where $t$ is training time in hours. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $K'(t)=-\dfrac{3}{(t+1)^{2}}$.",
      "$K'(2)=-\dfrac{1}{3}$.",
      "The index is decreasing for all $t>0$.",
      "At $t=2$, one extra hour of training changes the index by approximately $-\dfrac{1}{3}$.",
      "$K''(t)=\dfrac{6}{(t+1)^{3}}$.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Apply the quotient rule:

$$
K'(t)=\dfrac{1\cdot (t+1)-(t+4)\cdot 1}{(t+1)^{2}}
$$

$$
=\dfrac{t+1-t-4}{(t+1)^{2}}
=
-\dfrac{3}{(t+1)^{2}}.
$$

The derivative is correct, so the statement is True.`,
      `**B.** → True

Evaluate at $t=2$:

$$
K'(2)=-\dfrac{3}{3^{2}}=-\dfrac{1}{3}.
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
K'(2)=-\dfrac{1}{3},
$$

one extra hour near $t=2$ changes the index by approximately $-\dfrac{1}{3}$. The statement is True.`,
      `**E.** → True

Differentiate again:

$$
K'(t)=-3(t+1)^{-2}
$$

$$
K''(t)=-3(-2)(t+1)^{-3}
=
\dfrac{6}{(t+1)^{3}}.
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
    title: "Chain rule on a packaging safety score",
    subsection: "11.1",
    context:
      "A manufacturer models a packaging safety score by $S(x)=(2x+5)^{4}$, where $x$ is the number of reinforcement layers. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $S'(x)=8(2x+5)^{3}$.",
      "$S'(0)=1000$.",
      "The derivative uses the chain rule.",
      "$S''(x)=48(2x+5)^{2}$.",
      "At $x=0$, one extra layer changes the score by approximately $1000$ points.",
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The outer function is the fourth power and the inner function is $2x+5$. Differentiate by the chain rule:

$$
S'(x)=4(2x+5)^{3}\cdot 2
=
8(2x+5)^{3}.
$$

The statement is True.`,
      `**B.** → True

Substitute $x=0$:

$$
S'(0)=8\cdot 5^{3}=8\cdot 125=1000.
$$

The statement is True.`,
      `**C.** → True

Because the fourth power is applied to the inner expression $2x+5$, this is a composition of functions. The derivative therefore uses the chain rule. The statement is True.`,
      `**D.** → True

Differentiate once more:

$$
S''(x)=8\cdot 3(2x+5)^{2}\cdot 2
=
48(2x+5)^{2}.
$$

The statement is True.`,
      `**E.** → True

The derivative measures the approximate change in score per extra reinforcement layer. Since

$$
S'(0)=1000,
$$

the model predicts an increase of approximately $1000$ score points near $x=0$. The statement is True.`,
    ],
    difficulty_level: "3/5",
    sort_order: 17,
    solution_overview:
      "Apply the chain rule to a nested power function and evaluate both first and second derivatives exactly.",
  },
  {
    id: "math-11-18",
    case_id: "MATH 11.18",
    title: "Mixed product and logarithmic differentiation mechanics",
    subsection: "11.1",
    context:
      "A digital platform models an engagement index by $E(t)=t\ln(t+1)$ for $t>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $E'(t)=\ln(t+1)+\dfrac{t}{t+1}$.",
      "$E'(1)=\ln 2+\dfrac{1}{2}$.",
      "The product rule is needed.",
      "The chain rule is needed inside the logarithmic derivative.",
      "The statement $E'(t)=\ln(t+1)+1$ is correct.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Use the product rule:

$$
E'(t)=1\cdot \ln(t+1)+t\cdot \dfrac{1}{t+1}.
$$

So

$$
E'(t)=\ln(t+1)+\dfrac{t}{t+1}.
$$

The statement is True.`,
      `**B.** → True

Substitute $t=1$:

$$
E'(1)=\ln 2+\dfrac{1}{2}.
$$

The statement is True.`,
      `**C.** → True

The original function is a product:

$$
t
\cdot
\ln(t+1).
$$

So the product rule is needed. The statement is True.`,
      `**D.** → True

Inside the logarithm sits the inner function $t+1$. Differentiating

$$
\ln(t+1)
$$

uses the chain rule and gives

$$
\dfrac{1}{t+1}\cdot 1.
$$

The statement is True.`,
      `**E.** → False

The derivative is

$$
\ln(t+1)+\dfrac{t}{t+1},
$$

not

$$
\ln(t+1)+1.
$$

The extra factor from the second term depends on $t$. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 18,
    solution_overview:
      "Combine the product rule with the derivative of a logarithm whose input is itself a function of the variable.",
  },
  {
    id: "math-11-19",
    case_id: "MATH 11.19",
    title: "A harder ratio with a square root in the denominator",
    subsection: "11.1",
    context:
      "A processing index is modeled by $M(x)=\dfrac{x^{2}+1}{\sqrt{x+3}}$ for $x>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative can be found by rewriting $M(x)$ as $(x^{2}+1)(x+3)^{-\dfrac{1}{2}}$ and using the product rule.",
      "The derivative equals $2x(x+3)^{-\dfrac{1}{2}}-\dfrac{1}{2}(x^{2}+1)(x+3)^{-\dfrac{3}{2}}$.",
      "$M'(1)=\dfrac{13}{8}$.",
      "The derivative requires a chain-rule step.",
      "The derivative is a constant.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The denominator square root is easiest to handle by writing

$$
M(x)=\dfrac{x^{2}+1}{\sqrt{x+3}}
=(x^{2}+1)(x+3)^{-\dfrac{1}{2}}.
$$

That turns the problem into a product-rule calculation. The statement is True.`,
      `**B.** → True

Differentiate the rewritten product:

$$
M'(x)=2x(x+3)^{-\dfrac{1}{2}}+(x^{2}+1)\left(-\dfrac{1}{2}\right)(x+3)^{-\dfrac{3}{2}}.
$$

So

$$
M'(x)=2x(x+3)^{-\dfrac{1}{2}}-\dfrac{1}{2}(x^{2}+1)(x+3)^{-\dfrac{3}{2}}.
$$

The statement is True.`,
      `**C.** → True

Substitute $x=1$ into the derivative:

$$
M'(1)=2\cdot 1\cdot 4^{-\dfrac{1}{2}}-\dfrac{1}{2}(2)\cdot 4^{-\dfrac{3}{2}}
$$

$$
=2\cdot \dfrac{1}{2}-1\cdot \dfrac{1}{8}
=1-\dfrac{1}{8}
=\dfrac{7}{8}
$$

The claim says $\dfrac{13}{8}$, but the correct value is $\dfrac{7}{8}$. Therefore this statement is False.`,
      `**D.** → True

When differentiating

$$
(x+3)^{-\dfrac{1}{2}},
$$

the outer power acts on the inner function $x+3$. That is exactly a chain-rule step. The statement is True.`,
      `**E.** → False

The derivative contains powers of $x+3$ and also the term $2x$, so it clearly varies with $x$. It is not constant. The statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 19,
    solution_overview:
      "Rewrite a quotient with a square-root denominator as a product, then differentiate carefully using both the product rule and the chain rule.",
  },
  {
    id: "math-11-20",
    case_id: "MATH 11.20",
    title: "A full mixed-rule derivative on a performance index",
    subsection: "11.1",
    context:
      "A firm models a performance index by $F(t)=(t^{2}+1)\ln(t+1)$ for $t>0$. Evaluate each statement. Mark it TRUE or FALSE.",
    statements: [
      "The derivative is $F'(t)=2t\ln(t+1)+\dfrac{t^{2}+1}{t+1}$.",
      "$F'(1)=2\ln 2+1$.",
      "The derivative uses the product rule.",
      "The derivative uses the chain rule inside the logarithmic term.",
      "The expression $F'(t)=2t+\dfrac{t^{2}+1}{t+1}$ is correct.",
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The function is a product:

$$
F(t)=(t^{2}+1)\ln(t+1).
$$

Differentiate by the product rule:

$$
F'(t)=2t\ln(t+1)+(t^{2}+1)\dfrac{1}{t+1}.
$$

That is exactly the claimed formula, so the statement is True.`,
      `**B.** → True

Substitute $t=1$:

$$
F'(1)=2\cdot 1\cdot \ln 2+\dfrac{1^{2}+1}{1+1}
$$

$$
=2\ln 2+1.
$$

The statement is True.`,
      `**C.** → True

The formula multiplies the two nonconstant functions $t^{2}+1$ and $\ln(t+1)$.

So the product rule is required. The statement is True.`,
      `**D.** → True

Inside the logarithm appears $t+1$. Differentiating

$$
\ln(t+1)
$$

requires the derivative of the inside function as well, so a chain-rule step is present. The statement is True.`,
      `**E.** → False

The derivative of $\ln(t+1)$ is not $1$. It is

$$
\dfrac{1}{t+1}.
$$

Also, the first product-rule term keeps the factor $\ln(t+1)$:

$$
2t\ln(t+1).
$$

So the proposed expression drops essential pieces and is incorrect. The statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 20,
    solution_overview:
      "Work through a full mixed-rule derivative: polynomial term, logarithmic term, product rule, and chain-rule derivative inside the logarithm.",
  },
];
