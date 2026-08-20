/**
 * Chapter 4 — subsection 4.4 "Exponential and logarithmic equations".
 * Exam format: five True/False claims per task, written as closed prose sentences.
 * Explanations follow MATH 13.18: name the rule in words, show the algebra in
 * display formulas, then close with the verdict.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_EXP_LOG: MathTask[] = [
  {
    id: `math-4-94`,
    case_id: `MATH 4.94`,
    title: `Five short same-base exponential claims`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student solves $2^{x} = 8$ and reports that the solution is $x = 3$.`,
      `In a homework sheet the equation $3^{x+1} = 81$ appears. A candidate claims that $x = 3$.`,
      `The equation $5^{2x} = 125$ is solved. Its solution is an integer.`,
      `A tutor writes $2^{x} = \\frac{1}{16}$ on the board and concludes that $x = -4$.`,
      `The equation $7^{x-1} = 1$ has no solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Both sides can be written as powers of $2$, because $8 = 2^{3}$.

$$2^{x} = 2^{3}$$

An exponential function with base $2$ takes each value once, so equal powers force equal exponents:

$$x = 3$$

The reported solution is exactly this value, so the statement is True.`,
      `**B.** → True

Write $81$ as a power of $3$: $81 = 3^{4}$.

$$3^{x+1} = 3^{4}$$

Equal bases give equal exponents:

$$x + 1 = 4$$

$$x = 3$$

The candidate's value matches, so the statement is True.`,
      `**C.** → False

Here $125 = 5^{3}$, so the equation reads

$$5^{2x} = 5^{3}$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

The solution is $1.5$, which is not an integer, so the statement is False.`,
      `**D.** → True

A reciprocal power carries a negative exponent: $\\frac{1}{16} = 2^{-4}$.

$$2^{x} = 2^{-4}$$

$$x = -4$$

The tutor's conclusion is the isolated exponent, so the statement is True.`,
      `**E.** → False

Any non-zero base raised to the power $0$ equals $1$, so $1 = 7^{0}$.

$$7^{x-1} = 7^{0}$$

$$x - 1 = 0$$

$$x = 1$$

A solution exists, namely $x = 1$, so the claim of no solution is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 94,
    solution_overview: `Every claim rewrites both sides as powers of one base. Once the bases agree, the exponents must agree: $a^{m}=a^{n}$ with $a>0$, $a \\neq 1$ forces $m=n$.`,
  },
  {
    id: `math-4-95`,
    case_id: `MATH 4.95`,
    title: `Reading simple logarithmic equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student solves $\\log_{2} x = 5$ and reports $x = 32$.`,
      `The equation $\\ln x = 0$ is solved. Its solution is $x = 0$.`,
      `In an exam item $\\log_{3}(x - 2) = 2$ appears, and a candidate claims that $x = 11$.`,
      `The equation $\\log_{4} x = \\frac{1}{2}$ is solved. Its solution is greater than $3$.`,
      `A worksheet asks to solve $\\log_{x} 81 = 4$ for the base. The solution is $x = 3$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Rewrite the logarithm as a power statement:

$$\\log_{2} x = 5 \\iff 2^{5} = x$$

$$x = 32$$

The reported value is the same, so the statement is True.`,
      `**B.** → False

The natural logarithm has base $e$, so the equation means

$$e^{0} = x$$

$$x = 1$$

The solution is $1$, not $0$; in fact $x = 0$ is outside the domain of $\\ln x$, so the statement is False.`,
      `**C.** → True

Exponential form turns the equation into

$$3^{2} = x - 2$$

$$9 = x - 2$$

$$x = 11$$

The argument $x - 2 = 9$ is positive, so the value is admissible and the candidate is right. The statement is True.`,
      `**D.** → False

A logarithm equal to $\\frac{1}{2}$ describes a square root:

$$x = 4^{1/2} = \\sqrt{4} = 2$$

The solution is $2$, and $2 > 3$ is false, so the statement is False.`,
      `**E.** → True

The equation says that the unknown base, raised to the power $4$, gives $81$:

$$x^{4} = 81$$

A logarithm base must be positive and different from $1$, so only the positive root counts:

$$x = \\sqrt[4]{81} = 3$$

The reported base is exactly this value, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 95,
    solution_overview: `A logarithm is an exponent: $\\log_{a} b = c$ means exactly $a^{c} = b$. Each claim is checked by rewriting the logarithm in exponential form.`,
  },
  {
    id: `math-4-96`,
    case_id: `MATH 4.96`,
    title: `Rewriting powers of 2, 4 and 8`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $4^{x} = 2^{x+3}$ is solved. Its solution is $x = 3$.`,
      `A student solves $8^{x} = 4^{x+1}$ and reports $x = 2$.`,
      `The equation $9^{x} = 27$ has an integer solution.`,
      `A candidate claims that $16^{x} = 2$ is solved by $x = \\frac{1}{4}$.`,
      `The equation $2^{x} = -8$ has exactly one real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Write the left side with base $2$: $4^{x} = (2^{2})^{x} = 2^{2x}$.

$$2^{2x} = 2^{x+3}$$

$$2x = x + 3$$

$$x = 3$$

The isolated exponent is $3$, so the statement is True.`,
      `**B.** → True

Both sides become powers of $2$: $8^{x} = 2^{3x}$ and $4^{x+1} = 2^{2x+2}$.

$$2^{3x} = 2^{2x+2}$$

$$3x = 2x + 2$$

$$x = 2$$

The report matches the solution, so the statement is True.`,
      `**C.** → False

With base $3$ the equation reads $3^{2x} = 3^{3}$.

$$2x = 3$$

$$x = \\frac{3}{2}$$

The only solution is $1.5$, which is not an integer, so the statement is False.`,
      `**D.** → True

Since $16 = 2^{4}$, the equation is

$$2^{4x} = 2^{1}$$

$$4x = 1$$

$$x = \\frac{1}{4}$$

The claimed value is the solution, so the statement is True.`,
      `**E.** → False

An exponential function with a positive base is always positive: $2^{x} > 0$ for every real $x$.

$$2^{x} > 0 > -8$$

No real exponent can produce a negative value, so the equation has no solution at all and the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 96,
    solution_overview: `Bases $4$, $8$ and $16$ are all powers of $2$, so each equation collapses to a linear equation in the exponent after rewriting.`,
  },
  {
    id: `math-4-97`,
    case_id: `MATH 4.97`,
    title: `Log laws inside one equation`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student solves $\\log_{2} x + \\log_{2} 4 = 5$ and reports $x = 8$.`,
      `The equation $\\log_{5}(x) - \\log_{5} 2 = 1$ is solved. Its solution is $x = 10$.`,
      `A candidate rewrites $\\log_{3}(x) + \\log_{3}(x) $ as $\\log_{3}(2x)$ and then solves. The rewriting step is correct.`,
      `The equation $\\log_{10}(x) + \\log_{10}(x - 3) = 1$ has two solutions.`,
      `In the equation $\\log_{2}(x) + \\log_{2}(x - 2) = 3$ the solution is $x = 4$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Combine the two logarithms with the product law:

$$\\log_{2}(4x) = 5$$

$$4x = 2^{5} = 32$$

$$x = 8$$

The argument $4x = 32$ is positive, so the value is admissible and the report is correct. The statement is True.`,
      `**B.** → True

The quotient law gives one logarithm:

$$\\log_{5}\\frac{x}{2} = 1$$

$$\\frac{x}{2} = 5$$

$$x = 10$$

The reported value is the solution, so the statement is True.`,
      `**C.** → False

Adding two logarithms multiplies their arguments, it does not add them:

$$\\log_{3} x + \\log_{3} x = \\log_{3}(x \\cdot x) = \\log_{3}(x^{2})$$

The candidate wrote $\\log_{3}(2x)$, which corresponds to $\\log_{3} 2 + \\log_{3} x$. The rewriting is wrong, so the statement is False.`,
      `**D.** → False

The product law turns the left side into one logarithm:

$$\\log_{10}\\big(x(x-3)\\big) = 1$$

$$x^{2} - 3x = 10$$

$$x^{2} - 3x - 10 = 0$$

$$x = 5 \\quad \\text{or} \\quad x = -2$$

Both arguments must be positive, which needs $x > 3$. The value $-2$ is rejected and only $x = 5$ survives, so the equation has one solution and the statement is False.`,
      `**E.** → True

Combining the logarithms:

$$\\log_{2}\\big(x(x-2)\\big) = 3$$

$$x^{2} - 2x = 8$$

$$x^{2} - 2x - 8 = 0$$

$$x = 4 \\quad \\text{or} \\quad x = -2$$

The domain requires $x > 2$, so $-2$ is discarded and $x = 4$ remains. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 97,
    solution_overview: `The product law $\\log_{a} u + \\log_{a} v = \\log_{a}(uv)$ and the quotient law $\\log_{a} u - \\log_{a} v = \\log_{a}\\frac{u}{v}$ combine several logarithms into one, after which the equation is read back in exponential form. Every candidate value must keep all arguments positive.`,
  },
  {
    id: `math-4-98`,
    case_id: `MATH 4.98`,
    title: `Doubling an investment`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $10$ years the capital exceeds $1600$ EUR.`,
      `An adviser states that the capital doubles in fewer than $14$ years.`,
      `The time needed to reach $1500$ EUR is less than the time needed to reach $2000$ EUR.`,
      `If the rate were $10\\%$ instead of $5\\%$, the doubling time would be exactly half as long.`,
      `After $20$ years the capital is more than $2.5$ times the initial amount.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Ten years of $5\\%$ growth multiply the capital by $1.05^{10}$:

$$1000 \\cdot 1.05^{10} = 1000 \\cdot 1.628894 = 1628.89$$

That is about $1628.89$ EUR, and $1628.89 > 1600$, so the statement is True.`,
      `**B.** → False

Doubling means solving $1.05^{n} = 2$. Taking logarithms of both sides brings the unknown down from the exponent:

$$n \\ln 1.05 = \\ln 2$$

$$n = \\frac{\\ln 2}{\\ln 1.05} = \\frac{0.693147}{0.048790} = 14.2067$$

Doubling needs about $14.21$ years, which is more than $14$, so the statement is False.`,
      `**C.** → True

Both waiting times come from the same increasing function $1000 \\cdot 1.05^{n}$:

$$n_{1500} = \\frac{\\ln 1.5}{\\ln 1.05} = 8.3104, \\qquad n_{2000} = \\frac{\\ln 2}{\\ln 1.05} = 14.2067$$

Since $8.31 < 14.21$, the smaller target is reached first, so the statement is True.`,
      `**D.** → False

At $10\\%$ the doubling time solves $1.10^{n} = 2$:

$$n = \\frac{\\ln 2}{\\ln 1.10} = \\frac{0.693147}{0.095310} = 7.2725$$

Half of the $5\\%$ doubling time would be $\\frac{14.2067}{2} = 7.1033$ years. The actual value $7.27$ is larger than $7.10$, so the doubling time is not exactly halved and the statement is False.`,
      `**E.** → True

Twenty years of growth give the factor

$$1.05^{20} = 2.653298$$

so the capital is $2653.30$ EUR. Comparing factors, $2.6533 > 2.5$, so the capital is indeed more than $2.5$ times the initial amount and the claim holds. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 98,
    solution_overview: `A capital of $1000$ EUR grows by $5\\%$ per year, so after $n$ years it is $1000 \\cdot 1.05^{n}$. Questions about the required time are exponential equations solved with logarithms: $1.05^{n} = k$ gives $n = \\frac{\\ln k}{\\ln 1.05}$.`,
  },
  {
    id: `math-4-99`,
    case_id: `MATH 4.99`,
    title: `Radioactive decay and half-life`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $12$ years exactly $20$ mg of the sample remain.`,
      `After $10$ years more than half of the original mass is still present.`,
      `The sample needs more than $19$ years to fall below $10$ mg.`,
      `The time at which $30$ mg remain is between $8$ and $9$ years.`,
      `The sample never disappears completely, no matter how long one waits.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Twelve years are two half-lives, so the mass is halved twice:

$$m(12) = 80 \\cdot \\left(\\frac{1}{2}\\right)^{12/6} = 80 \\cdot \\frac{1}{4} = 20$$

The remaining mass is $20$ mg, exactly as claimed, so the statement is True.`,
      `**B.** → False

Ten years exceed one half-life of $6$ years, and the mass decreases with time:

$$m(10) = 80 \\cdot \\left(\\frac{1}{2}\\right)^{10/6} = 80 \\cdot 0.314980 = 25.20$$

Half of the original mass is $40$ mg, and $25.20 < 40$, so the statement is False.`,
      `**C.** → False

Falling to $10$ mg means losing three halves: $80 \\to 40 \\to 20 \\to 10$, which is three half-lives.

$$t = 3 \\cdot 6 = 18$$

After $18$ years the mass is exactly $10$ mg, and any longer time is already below it. Since $18 < 19$, the statement is False.`,
      `**D.** → True

Solve $80 \\cdot \\left(\\frac{1}{2}\\right)^{t/6} = 30$ by isolating the power and taking logarithms:

$$\\left(\\frac{1}{2}\\right)^{t/6} = 0.375$$

$$\\frac{t}{6} \\ln 0.5 = \\ln 0.375$$

$$t = 6 \\cdot \\frac{\\ln 0.375}{\\ln 0.5} = 6 \\cdot 1.415037 = 8.4902$$

The mass reaches $30$ mg after about $8.49$ years, which lies between $8$ and $9$, so the statement is True.`,
      `**E.** → True

The model multiplies the mass by a positive factor for every additional year:

$$m(t) = 80 \\cdot \\left(\\frac{1}{2}\\right)^{t/6} > 0 \\quad \\text{for every } t$$

An exponential with a positive base never reaches zero, it only approaches it. The mass stays positive for all times, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 99,
    solution_overview: `A sample of $80$ mg decays according to $m(t) = 80 \\cdot \\left(\\frac{1}{2}\\right)^{t/6}$, where $t$ is measured in years, so the half-life is $6$ years. Questions about remaining mass are evaluations; questions about time are exponential equations solved with logarithms.`,
  },
  {
    id: `math-4-100`,
    case_id: `MATH 4.100`,
    title: `A quadratic hidden behind base 3`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After the substitution $u = 3^{x}$ the equation becomes $u^{2} - 4u + 3 = 0$.`,
      `The equation has exactly two real solutions.`,
      `One of the solutions is $x = 0$.`,
      `The sum of all solutions equals $3$.`,
      `A candidate states that $u = -1$ would give a third solution.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The first term is the square of the substituted quantity:

$$3^{2x} = (3^{x})^{2} = u^{2}$$

so the whole equation reads

$$u^{2} - 4u + 3 = 0$$

This is exactly the quadratic in the claim, so the statement is True.`,
      `**B.** → True

Solving the quadratic:

$$u^{2} - 4u + 3 = 0$$

$$u = 1 \\quad \\text{or} \\quad u = 3$$

Both values are positive, so both can be undone:

$$3^{x} = 1 \\Rightarrow x = 0, \\qquad 3^{x} = 3 \\Rightarrow x = 1$$

Two real solutions exist, so the statement is True.`,
      `**C.** → True

From the branch $u = 1$:

$$3^{x} = 1 = 3^{0}$$

$$x = 0$$

Substituting back into the original equation: $3^{0} - 4 \\cdot 3^{0} + 3 = 1 - 4 + 3 = 0$. The value solves the equation, so the statement is True.`,
      `**D.** → False

The two solutions found are $x = 0$ and $x = 1$:

$$0 + 1 = 1$$

The sum of the solutions is $1$, not $3$; the value $3$ belongs to the substituted variable $u$, not to $x$. The statement is False.`,
      `**E.** → False

A power with base $3$ is always positive:

$$3^{x} > 0 \\quad \\text{for every real } x$$

Therefore the equation $3^{x} = -1$ has no solution, and a negative value of $u$ can never be converted back. No third solution arises, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 100,
    solution_overview: `The equation $3^{2x} - 4 \\cdot 3^{x} + 3 = 0$ becomes a quadratic after the substitution $u = 3^{x}$, because $3^{2x} = (3^{x})^{2} = u^{2}$. Only positive values of $u$ can be converted back, since $3^{x} > 0$.`,
  },
  {
    id: `math-4-101`,
    case_id: `MATH 4.101`,
    title: `A quadratic hidden behind base 2`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The substituted quadratic has the roots $u = 2$ and $u = 4$.`,
      `The original equation is solved by $x = 1$ and $x = 2$.`,
      `The product of the solutions in $x$ is greater than the sum of the solutions in $x$.`,
      `The equation $2^{2x} - 6 \\cdot 2^{x} + 8 = 0$ is equivalent to $4^{x} - 6 \\cdot 2^{x} + 8 = 0$.`,
      `If the constant $8$ is replaced by $10$, the equation still has two real solutions.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

With $u = 2^{x}$ the equation becomes

$$u^{2} - 6u + 8 = 0$$

$$(u - 2)(u - 4) = 0$$

$$u = 2 \\quad \\text{or} \\quad u = 4$$

These are the two roots named in the claim, so the statement is True.`,
      `**B.** → True

Converting each positive root back with base $2$:

$$2^{x} = 2 \\Rightarrow x = 1$$

$$2^{x} = 4 = 2^{2} \\Rightarrow x = 2$$

Both exponents solve the original equation, so the statement is True.`,
      `**C.** → False

The solutions are $x = 1$ and $x = 2$:

$$1 \\cdot 2 = 2, \\qquad 1 + 2 = 3$$

The product $2$ is smaller than the sum $3$, so the statement is False.`,
      `**D.** → True

The first term can be regrouped in two ways:

$$2^{2x} = (2^{2})^{x} = 4^{x}$$

Replacing $2^{2x}$ by $4^{x}$ changes nothing else in the equation, so the two forms have exactly the same solutions. The statement is True.`,
      `**E.** → False

The substituted quadratic becomes

$$u^{2} - 6u + 10 = 0$$

$$D = (-6)^{2} - 4 \\cdot 1 \\cdot 10 = 36 - 40 = -4$$

A negative discriminant means no real value of $u$ at all, hence no real $x$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 101,
    solution_overview: `The equation $2^{2x} - 6 \\cdot 2^{x} + 8 = 0$ is quadratic in $u = 2^{x}$, since $2^{2x} = u^{2}$. The substituted values must be positive to be converted back into exponents.`,
  },
  {
    id: `math-4-102`,
    case_id: `MATH 4.102`,
    title: `Domain traps in logarithmic equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_{10} x + \\log_{10}(x - 3) = 1$ is solved by $x = 5$.`,
      `The value $x = -2$ also solves that equation.`,
      `The equation $\\ln(x - 1) = \\ln(2x - 5)$ has a solution larger than $3$.`,
      `The equation $\\log_{2}(x^{2}) = \\log_{2}(9)$ has exactly one real solution.`,
      `The equation $\\log_{3}(x - 4) = -1$ has no solution, because the right-hand side is negative.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Combine and exponentiate:

$$\\log_{10}\\big(x(x - 3)\\big) = 1$$

$$x^{2} - 3x - 10 = 0$$

$$x = 5 \\quad \\text{or} \\quad x = -2$$

The domain needs $x > 0$ and $x - 3 > 0$, that is $x > 3$. Only $x = 5$ passes, so the statement is True.`,
      `**B.** → False

For $x = -2$ the first logarithm would read $\\log_{10}(-2)$:

$$x = -2 < 0$$

A logarithm of a negative number is undefined, so $-2$ is an extraneous root produced by the exponentiation step, not a solution. The statement is False.`,
      `**C.** → True

The logarithm is injective, so equal logarithms mean equal arguments:

$$x - 1 = 2x - 5$$

$$x = 4$$

Both arguments are then positive: $4 - 1 = 3$ and $2 \\cdot 4 - 5 = 3$. The solution $4$ is larger than $3$, so the statement is True.`,
      `**D.** → False

Equal logarithms force equal arguments:

$$x^{2} = 9$$

$$x = 3 \\quad \\text{or} \\quad x = -3$$

The argument of the logarithm is $x^{2}$, which is positive for both values, so both are admissible. There are two solutions, so the statement is False.`,
      `**E.** → False

A logarithm may perfectly well be negative; only its argument must be positive.

$$x - 4 = 3^{-1} = \\frac{1}{3}$$

$$x = 4 + \\frac{1}{3} = \\frac{13}{3}$$

The argument $\\frac{1}{3}$ is positive, so $x = \\frac{13}{3}$ is a genuine solution and the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 102,
    solution_overview: `Every logarithm requires a positive argument. Solving $\\log_{a}(\\cdot) = c$ by exponentiating can create candidate values that break this requirement, so each candidate must be tested against the domain.`,
  },
  {
    id: `math-4-103`,
    case_id: `MATH 4.103`,
    title: `Equations with the base e`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student solves $e^{2x} = e^{6}$ and reports $x = 3$.`,
      `The solution of $e^{x} = 5$ is between $1.6$ and $1.7$.`,
      `The equation $e^{x} = 0$ is solved by $x = \\ln 0$.`,
      `The equation $e^{3x-1} = 1$ has the solution $x = \\frac{1}{3}$.`,
      `A candidate claims that $\\ln(e^{7}) + e^{\\ln 2}$ equals $9$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Equal bases force equal exponents:

$$2x = 6$$

$$x = 3$$

The reported value is the solution, so the statement is True.`,
      `**B.** → True

Applying the natural logarithm undoes the exponential:

$$x = \\ln 5 = 1.609438$$

The value $1.6094$ lies between $1.6$ and $1.7$, so the statement is True.`,
      `**C.** → False

The exponential function with base $e$ takes only positive values:

$$e^{x} > 0 \\quad \\text{for every real } x$$

So $e^{x} = 0$ has no solution, and $\\ln 0$ is not a number at all. The statement is False.`,
      `**D.** → True

Write $1$ as $e^{0}$:

$$3x - 1 = 0$$

$$x = \\frac{1}{3}$$

The exponent vanishes exactly at this value, so the statement is True.`,
      `**E.** → True

Exponential and logarithm with base $e$ cancel each other in both orders:

$$\\ln(e^{7}) = 7, \\qquad e^{\\ln 2} = 2$$

$$7 + 2 = 9$$

The total is $9$, exactly as claimed, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 103,
    solution_overview: `With base $e$ the natural logarithm is the exact inverse: $e^{u} = v$ is the same as $u = \\ln v$ for $v > 0$, and $\\ln(e^{u}) = u$ for every real $u$.`,
  },
  {
    id: `math-4-104`,
    case_id: `MATH 4.104`,
    title: `Logarithms with a factor inside`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_{5}(25x) = 3$ is solved by $x = 5$.`,
      `The same equation can be written as $2 + \\log_{5} x = 3$.`,
      `The equation $\\log_{2}(8x) = 1$ has a solution smaller than $1$.`,
      `The equation $2 \\log_{3} x = 4$ is solved by $x = 9$.`,
      `A candidate treats $\\log_{2}(8x)$ as $8 \\log_{2} x$ and obtains the same solution.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Exponentiating with base $5$ removes the logarithm:

$$25x = 5^{3} = 125$$

$$x = 5$$

The argument $125$ is positive, so the value is admissible and the statement is True.`,
      `**B.** → True

Splitting the constant factor with the product law:

$$\\log_{5}(25x) = \\log_{5} 25 + \\log_{5} x$$

Since $25 = 5^{2}$, the first term is $2$:

$$2 + \\log_{5} x = 3$$

This is exactly the rewritten form in the claim, so the statement is True.`,
      `**C.** → True

Exponentiating with base $2$:

$$8x = 2^{1} = 2$$

$$x = \\frac{1}{4}$$

The solution $0.25$ is smaller than $1$, so the statement is True.`,
      `**D.** → True

Divide by $2$ first, then rewrite as a power:

$$\\log_{3} x = 2$$

$$x = 3^{2} = 9$$

The reported value is the solution, so the statement is True.`,
      `**E.** → False

A factor inside the argument is not a factor in front of the logarithm; only exponents may be pulled out:

$$\\log_{2}(8x) = 3 + \\log_{2} x \\neq 8 \\log_{2} x$$

Solving the candidate's version, $8 \\log_{2} x = 1$, gives $x = 2^{1/8} = 1.0905$, while the correct solution is $x = \\frac{1}{4}$. The results differ, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 104,
    solution_overview: `Inside a single logarithm, constants can be split off with the product law: $\\log_{a}(k x) = \\log_{a} k + \\log_{a} x$. The equations below are solved either by exponentiating directly or by splitting first.`,
  },
  {
    id: `math-4-105`,
    case_id: `MATH 4.105`,
    title: `Bacterial growth in a laboratory`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $8$ hours the culture contains $4500$ bacteria.`,
      `The culture passes $10\\,000$ bacteria within the first $12$ hours.`,
      `Doubling the culture takes longer than $3$ hours.`,
      `After one full day the culture is more than $100\\,000$ times its initial size.`,
      `The time needed to reach $1500$ bacteria is exactly $4$ hours.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Eight hours are two tripling periods:

$$N(8) = 500 \\cdot 3^{8/4} = 500 \\cdot 9 = 4500$$

The count matches the claim, so the statement is True.`,
      `**B.** → True

Solve $500 \\cdot 3^{t/4} = 10000$ by isolating the power:

$$3^{t/4} = 20$$

$$\\frac{t}{4} \\ln 3 = \\ln 20$$

$$t = 4 \\cdot \\frac{2.995732}{1.098612} = 10.9070$$

The threshold is crossed after about $10.91$ hours, which is inside the first $12$ hours, so the statement is True.`,
      `**C.** → False

Doubling means $3^{t/4} = 2$:

$$t = 4 \\cdot \\frac{\\ln 2}{\\ln 3} = 4 \\cdot 0.630930 = 2.5237$$

The culture doubles after about $2.52$ hours, which is less than $3$, so the statement is False.`,
      `**D.** → False

Twenty-four hours are six tripling periods:

$$3^{24/4} = 3^{6} = 729$$

The culture is $729$ times its initial size, and $729 < 100000$, so the statement is False.`,
      `**E.** → True

Reaching $1500$ from $500$ means tripling once:

$$3^{t/4} = 3$$

$$\\frac{t}{4} = 1$$

$$t = 4$$

Exactly one tripling period is needed, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 105,
    solution_overview: `A culture starts with $500$ bacteria and triples every $4$ hours, so the count after $t$ hours is $N(t) = 500 \\cdot 3^{t/4}$. Time questions are exponential equations that need logarithms.`,
  },
  {
    id: `math-4-106`,
    case_id: `MATH 4.106`,
    title: `Unknown base and unknown argument`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_{x} 64 = 3$ is solved by $x = 4$.`,
      `The equation $\\log_{x} 16 = 2$ has the two solutions $x = 4$ and $x = -4$.`,
      `The equation $\\log_{x} 1 = 0$ is satisfied by every admissible base.`,
      `The equation $\\log_{2} x = \\log_{4} 16$ is solved by $x = 4$.`,
      `A candidate claims that $\\log_{1} 5$ is a well-defined number.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The unknown base cubed must give $64$:

$$x^{3} = 64$$

$$x = 4$$

The base $4$ is positive and different from $1$, so it is admissible and the statement is True.`,
      `**B.** → False

The base must satisfy $x^{2} = 16$, which gives $4$ and $-4$ as algebraic roots:

$$x = 4 \\quad \\text{or} \\quad x = -4$$

A logarithm base must be positive, so $-4$ is rejected and only $x = 4$ remains. The statement is False.`,
      `**C.** → True

Rewriting in exponential form gives

$$x^{0} = 1$$

which holds for every $x > 0$ with $x \\neq 1$. The equation places no further restriction, so every admissible base works and the statement is True.`,
      `**D.** → True

First evaluate the right-hand side: $4^{2} = 16$, so $\\log_{4} 16 = 2$.

$$\\log_{2} x = 2$$

$$x = 2^{2} = 4$$

The solution is $4$, exactly as claimed, so the statement is True.`,
      `**E.** → False

A base of $1$ would require an exponent with

$$1^{c} = 5$$

but every power of $1$ equals $1$, so no exponent exists. Base $1$ is excluded from the definition of a logarithm, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 106,
    solution_overview: `Reading $\\log_{a} b = c$ as $a^{c} = b$ works whichever of the three quantities is unknown. Bases must satisfy $a > 0$ and $a \\neq 1$.`,
  },
  {
    id: `math-4-107`,
    case_id: `MATH 4.107`,
    title: `Taking logarithms of both sides`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $2^{x} = 7$ lies between $2.8$ and $2.9$.`,
      `The solution of $3^{x} = 100$ is greater than $5$.`,
      `The equation $5^{x+1} = 30$ has the solution $x = \\frac{\\ln 30}{\\ln 5} - 1$.`,
      `A candidate claims that $2^{x} = 7$ can be solved as $x = \\frac{7}{2}$.`,
      `The equation $0.5^{x} = 8$ has a negative solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Take natural logarithms and pull the exponent down:

$$x \\ln 2 = \\ln 7$$

$$x = \\frac{1.945910}{0.693147} = 2.8074$$

The solution $2.8074$ lies between $2.8$ and $2.9$, so the statement is True.`,
      `**B.** → False

Applying the logarithm to both sides:

$$x = \\frac{\\ln 100}{\\ln 3} = \\frac{4.605170}{1.098612} = 4.1918$$

The solution is about $4.19$, which is not greater than $5$, so the statement is False.`,
      `**C.** → True

Logarithms turn the exponent into a factor:

$$(x + 1)\\ln 5 = \\ln 30$$

$$x + 1 = \\frac{\\ln 30}{\\ln 5}$$

$$x = \\frac{\\ln 30}{\\ln 5} - 1 = 2.1133 - 1 = 1.1133$$

The written expression is exactly this solution, so the statement is True.`,
      `**D.** → False

Dividing by the base does not undo an exponent; only a logarithm does.

$$x = \\log_{2} 7 = 2.8074 \\neq 3.5$$

Checking the candidate's value: $2^{3.5} = 11.3137$, which is not $7$. The statement is False.`,
      `**E.** → True

Write both sides as powers of $2$, using $0.5 = 2^{-1}$:

$$2^{-x} = 2^{3}$$

$$-x = 3$$

$$x = -3$$

The unique solution is negative, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 107,
    solution_overview: `When the bases cannot be matched, one applies a logarithm to both sides and uses the power law $\\ln(a^{x}) = x \\ln a$ to bring the unknown down from the exponent.`,
  },
  {
    id: `math-4-108`,
    case_id: `MATH 4.108`,
    title: `Exponentials on both sides`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^{x} = 3^{x}$ has exactly one solution.`,
      `The equation $2^{x+1} = 3^{x}$ is solved by $x = \\frac{\\ln 2}{\\ln 3 - \\ln 2}$.`,
      `The equation $4^{x} = 2 \\cdot 2^{x}$ has the solution $x = 1$.`,
      `The equation $3^{x} = 2^{x} + 1$ is solved by $x = 0$ only.`,
      `For every real $x$ the expression $2^{x} \\cdot 2^{-x}$ equals $1$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Taking logarithms of both sides:

$$x \\ln 2 = x \\ln 3$$

$$x(\\ln 2 - \\ln 3) = 0$$

Because $\\ln 2 \\neq \\ln 3$, the bracket is not zero, so the only possibility is

$$x = 0$$

Exactly one solution exists, so the statement is True.`,
      `**B.** → True

Logarithms make both sides linear in $x$:

$$(x + 1)\\ln 2 = x \\ln 3$$

$$x \\ln 2 + \\ln 2 = x \\ln 3$$

$$\\ln 2 = x(\\ln 3 - \\ln 2)$$

$$x = \\frac{\\ln 2}{\\ln 3 - \\ln 2} = \\frac{0.693147}{0.405465} = 1.7095$$

The written expression is the solution, so the statement is True.`,
      `**C.** → True

Both sides become powers of $2$: $4^{x} = 2^{2x}$ and $2 \\cdot 2^{x} = 2^{x+1}$.

$$2x = x + 1$$

$$x = 1$$

The solution is $1$, so the statement is True.`,
      `**D.** → False

Test the two obvious candidates directly:

$$x = 0: \\quad 3^{0} = 1, \\quad 2^{0} + 1 = 2$$

so $x = 0$ fails, while

$$x = 1: \\quad 3^{1} = 3, \\quad 2^{1} + 1 = 3$$

so $x = 1$ works. The listed solution is wrong, so the statement is False.`,
      `**E.** → True

Multiplying powers with the same base adds the exponents:

$$2^{x} \\cdot 2^{-x} = 2^{x - x} = 2^{0} = 1$$

The product is $1$ for every real $x$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `An equation with different bases on both sides is solved by taking logarithms and collecting the unknown, since $\\ln(a^{x}) = x \\ln a$ makes the equation linear in $x$.`,
  },
  {
    id: `math-4-109`,
    case_id: `MATH 4.109`,
    title: `Logarithmic equations with coefficients`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2 \\log_{2} x - \\log_{2}(x + 3) = 1$ has the solution $x = 6$.`,
      `The equation $\\log_{3}(x^{2}) = 2 \\log_{3} x$ holds for every $x > 0$.`,
      `For $x = -2$ the two sides of $\\log_{3}(x^{2}) = 2 \\log_{3} x$ are still equal.`,
      `The equation $\\frac{1}{2}\\log_{5} x = 1$ is solved by $x = 25$.`,
      `The equation $\\log_{2}(x) = 3 - \\log_{2}(x)$ is solved by $x = 2\\sqrt{2}$.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

Move the coefficient inside and merge with the quotient law:

$$\\log_{2}\\frac{x^{2}}{x + 3} = 1$$

$$x^{2} = 2(x + 3)$$

$$x^{2} - 2x - 6 = 0$$

$$x = 1 \\pm \\sqrt{7}$$

Numerically the positive root is $1 + 2.6458 = 3.6458$, not $6$. Checking the claimed value: $\\frac{6^{2}}{9} = 4 \\neq 2$. The statement is False.`,
      `**B.** → True

The power law states that an exponent inside the argument becomes a factor in front:

$$\\log_{3}(x^{2}) = 2 \\log_{3} x \\quad \\text{for } x > 0$$

Both sides are defined precisely when $x > 0$, and there they agree identically. The statement is True.`,
      `**C.** → False

The left side is defined, because the argument is squared:

$$\\log_{3}((-2)^{2}) = \\log_{3} 4$$

The right side needs $\\log_{3}(-2)$, which does not exist. One side is undefined, so the two cannot be equal and the statement is False.`,
      `**D.** → True

Multiplying by $2$ isolates the logarithm:

$$\\log_{5} x = 2$$

$$x = 5^{2} = 25$$

The reported value is the solution, so the statement is True.`,
      `**E.** → True

Collect the two equal logarithms on one side:

$$2 \\log_{2} x = 3$$

$$\\log_{2} x = \\frac{3}{2}$$

$$x = 2^{3/2} = 2\\sqrt{2} = 2.8284$$

The reported value is exactly this power, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 109,
    solution_overview: `The power law $c \\log_{a} u = \\log_{a}(u^{c})$ moves coefficients into the argument, and the resulting equation is read back in exponential form. Candidate values must keep all arguments positive.`,
  },
  {
    id: `math-4-110`,
    case_id: `MATH 4.110`,
    title: `Change of base and comparisons`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The value of $\\log_{4} 8$ equals $1.5$.`,
      `For the same argument $10$, the logarithm to base $2$ is larger than the logarithm to base $10$.`,
      `The equation $\\log_{2} x = \\log_{8} x$ is solved by every positive $x$.`,
      `The number $\\log_{3} 20$ lies between $2$ and $3$.`,
      `The equation $\\log_{2} x + \\log_{4} x = 3$ is solved by $x = 4$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Both numbers are powers of $2$, so change to base $2$:

$$\\log_{4} 8 = \\frac{\\log_{2} 8}{\\log_{2} 4} = \\frac{3}{2} = 1.5$$

The value is exactly $1.5$, so the statement is True.`,
      `**B.** → True

Change both to natural logarithms:

$$\\log_{2} 10 = \\frac{2.302585}{0.693147} = 3.3219, \\qquad \\log_{10} 10 = 1$$

A smaller base needs a larger exponent to reach the same number. Since $3.3219 > 1$, the statement is True.`,
      `**C.** → False

Change the right side to base $2$:

$$\\log_{8} x = \\frac{\\log_{2} x}{3}$$

$$\\log_{2} x = \\frac{\\log_{2} x}{3}$$

$$\\frac{2}{3}\\log_{2} x = 0$$

$$\\log_{2} x = 0 \\Rightarrow x = 1$$

Only $x = 1$ works, not every positive $x$, so the statement is False.`,
      `**D.** → True

Bracket the argument by powers of $3$:

$$3^{2} = 9 < 20 < 27 = 3^{3}$$

Because the logarithm is increasing, the exponent belonging to $20$ lies between $2$ and $3$; numerically

$$\\log_{3} 20 = \\frac{2.995732}{1.098612} = 2.7268$$

The statement is True.`,
      `**E.** → True

Write everything in base $2$, using $\\log_{4} x = \\frac{\\log_{2} x}{2}$:

$$\\log_{2} x + \\frac{\\log_{2} x}{2} = 3$$

$$\\frac{3}{2}\\log_{2} x = 3$$

$$\\log_{2} x = 2 \\Rightarrow x = 4$$

The reported value is the solution, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 110,
    solution_overview: `The change-of-base formula $\\log_{a} b = \\frac{\\ln b}{\\ln a}$ turns any logarithm into natural logarithms, which makes different bases comparable.`,
  },
  {
    id: `math-4-111`,
    case_id: `MATH 4.111`,
    title: `Loan interest and waiting times`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $5$ years the debt exceeds $11\\,000$ EUR.`,
      `The debt needs more than $10$ years to reach $16\\,000$ EUR.`,
      `At a rate of $7\\%$ the debt triples in less than $16$ years.`,
      `Halving the interest rate to $3.5\\%$ would more than double the time needed to double the debt.`,
      `After $3$ years the debt has grown by more than $1800$ EUR.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Five years of $7\\%$ growth multiply the debt by $1.07^{5}$:

$$8000 \\cdot 1.07^{5} = 8000 \\cdot 1.402552 = 11220.41$$

The debt is about $11\\,220.41$ EUR, which is more than $11\\,000$, so the statement is True.`,
      `**B.** → True

Doubling means $1.07^{n} = 2$:

$$n = \\frac{\\ln 2}{\\ln 1.07} = \\frac{0.693147}{0.067659} = 10.2448$$

About $10.24$ years are needed, which is more than $10$, so the statement is True.`,
      `**C.** → False

Tripling means $1.07^{n} = 3$:

$$n = \\frac{\\ln 3}{\\ln 1.07} = \\frac{1.098612}{0.067659} = 16.2372$$

About $16.24$ years are needed, which is more than $16$, so the statement is False.`,
      `**D.** → False

At $3.5\\%$ the doubling time is

$$n = \\frac{\\ln 2}{\\ln 1.035} = \\frac{0.693147}{0.034401} = 20.1489$$

Twice the original doubling time is $2 \\cdot 10.2448 = 20.4896$ years. Since $20.15 < 20.49$, the time is not more than doubled, so the statement is False.`,
      `**E.** → True

Compute the amount after three years and subtract the original debt:

$$8000 \\cdot 1.07^{3} = 8000 \\cdot 1.225043 = 9800.34$$

$$9800.34 - 8000 = 1800.34$$

The growth is about $1800.34$ EUR, which exceeds $1800$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 111,
    solution_overview: `A debt of $8000$ EUR grows by $7\\%$ per year, so after $n$ years it is $8000 \\cdot 1.07^{n}$. Amount questions are evaluations; time questions are exponential equations solved with logarithms.`,
  },
  {
    id: `math-4-112`,
    case_id: `MATH 4.112`,
    title: `Substitution with the base e`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After the substitution $u = e^{x}$ the equation reads $u^{2} - u - 6 = 0$.`,
      `The quadratic has the roots $u = 3$ and $u = -2$.`,
      `The original equation has two real solutions.`,
      `The unique solution is $x = \\ln 3$, a number between $1$ and $1.2$.`,
      `Replacing the constant $-6$ by $+6$ leaves the equation with exactly one real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The first term is the square of the substituted quantity:

$$e^{2x} = (e^{x})^{2} = u^{2}$$

so the equation becomes

$$u^{2} - u - 6 = 0$$

This is the quadratic named in the claim, so the statement is True.`,
      `**B.** → True

Factoring the quadratic:

$$u^{2} - u - 6 = (u - 3)(u + 2) = 0$$

$$u = 3 \\quad \\text{or} \\quad u = -2$$

These are exactly the two roots claimed, so the statement is True.`,
      `**C.** → False

Only positive roots can be converted back, because $e^{x} > 0$ for every real $x$.

$$e^{x} = 3 \\Rightarrow x = \\ln 3, \\qquad e^{x} = -2 \\Rightarrow \\text{no solution}$$

Exactly one real solution survives, so the statement is False.`,
      `**D.** → True

The surviving branch gives

$$e^{x} = 3$$

$$x = \\ln 3 = 1.098612$$

The value $1.0986$ lies between $1$ and $1.2$, so the statement is True.`,
      `**E.** → False

The substituted quadratic becomes

$$u^{2} - u + 6 = 0$$

$$D = (-1)^{2} - 4 \\cdot 1 \\cdot 6 = 1 - 24 = -23$$

A negative discriminant leaves no real $u$, hence no real $x$ at all. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 112,
    solution_overview: `The equation $e^{2x} - e^{x} - 6 = 0$ is quadratic in $u = e^{x}$, because $e^{2x} = (e^{x})^{2}$. Only positive values of $u$ can be converted back, since $e^{x} > 0$.`,
  },
  {
    id: `math-4-113`,
    case_id: `MATH 4.113`,
    title: `Exponential and logarithmic cancellation`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The expression $2^{\\log_{2} 9}$ equals $9$.`,
      `The expression $\\log_{5}(5^{-3})$ equals $\\frac{1}{125}$.`,
      `The equation $10^{\\log_{10}(x - 1)} = 4$ is solved by $x = 5$.`,
      `The equation $\\log_{3}(3^{2x-4}) = 0$ is solved by $x = 2$.`,
      `For every real number $x$ the identity $e^{\\ln x} = x$ holds.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent is precisely the power of $2$ that produces $9$, so raising $2$ to it returns the argument:

$$2^{\\log_{2} 9} = 9$$

The value is $9$, so the statement is True.`,
      `**B.** → False

The logarithm returns the exponent itself, not the power:

$$\\log_{5}(5^{-3}) = -3$$

The value $\\frac{1}{125}$ is $5^{-3}$, the number inside, not its logarithm. The statement is False.`,
      `**C.** → True

Cancellation removes the outer power, keeping the domain condition $x - 1 > 0$:

$$x - 1 = 4$$

$$x = 5$$

The argument $4$ is positive, so the value is admissible and the statement is True.`,
      `**D.** → True

The logarithm returns the exponent directly:

$$2x - 4 = 0$$

$$x = 2$$

The reported value is the solution, so the statement is True.`,
      `**E.** → False

The cancellation is valid only where the inner logarithm exists:

$$\\ln x \\text{ is defined only for } x > 0$$

For $x = -1$ or $x = 0$ the left side has no value, so the identity cannot hold for every real $x$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 113,
    solution_overview: `Exponential and logarithmic functions with the same base undo each other: $a^{\\log_{a} u} = u$ for $u > 0$ and $\\log_{a}(a^{v}) = v$ for every real $v$.`,
  },
  {
    id: `math-4-114`,
    case_id: `MATH 4.114`,
    title: `A system with exponentials`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The first equation is equivalent to $x + y = 5$.`,
      `The second equation is equivalent to $x - y = 1$.`,
      `The system is solved by $x = 3$ and $y = 2$.`,
      `The product $2^{x} \\cdot 2^{y}$ would be $64$ if $x$ and $y$ each increased by $1$.`,
      `There is a second solution pair with $x$ negative.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Multiplying powers with the same base adds the exponents:

$$2^{x} \\cdot 2^{y} = 2^{x+y} = 32 = 2^{5}$$

$$x + y = 5$$

This is the linear equation in the claim, so the statement is True.`,
      `**B.** → True

Dividing powers with the same base subtracts the exponents:

$$\\frac{2^{x}}{2^{y}} = 2^{x-y} = 2 = 2^{1}$$

$$x - y = 1$$

This is exactly the stated linear equation, so the statement is True.`,
      `**C.** → True

Adding the two linear equations eliminates $y$:

$$(x + y) + (x - y) = 5 + 1$$

$$2x = 6 \\Rightarrow x = 3$$

$$y = 5 - 3 = 2$$

Both original equations hold for this pair, so the statement is True.`,
      `**D.** → False

Increasing both exponents by $1$ raises the sum by $2$:

$$2^{(x+1)+(y+1)} = 2^{x+y+2} = 2^{7} = 128$$

The product would be $128$, not $64$, so the statement is False.`,
      `**E.** → False

The two power equations are equivalent to the linear system

$$x + y = 5, \\qquad x - y = 1$$

Two independent linear equations in two unknowns have exactly one solution, namely $(3, 2)$. No further pair exists, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 114,
    solution_overview: `For a system such as $2^{x} \\cdot 2^{y} = 32$ and $2^{x} : 2^{y} = 2$, the power laws $a^{x} a^{y} = a^{x+y}$ and $\\frac{a^{x}}{a^{y}} = a^{x-y}$ turn the two equations into a linear system in $x$ and $y$.`,
  },
  {
    id: `math-4-115`,
    case_id: `MATH 4.115`,
    title: `Depreciation of a machine`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $4$ years the machine is worth more than $12\\,000$ EUR.`,
      `The machine loses half of its value in less than $4$ years.`,
      `After $10$ years less than $5000$ EUR of value remain.`,
      `The value reaches exactly zero after $20$ years.`,
      `The value drops below $8000$ EUR during the seventh year of use.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Four years of $15\\%$ loss multiply the value by $0.85^{4}$:

$$24000 \\cdot 0.85^{4} = 24000 \\cdot 0.522006 = 12528.15$$

The value is about $12\\,528.15$ EUR, which is more than $12\\,000$, so the statement is True.`,
      `**B.** → False

Halving means $0.85^{t} = 0.5$:

$$t = \\frac{\\ln 0.5}{\\ln 0.85} = \\frac{-0.693147}{-0.162519} = 4.2650$$

About $4.27$ years are needed, which is more than $4$, so the statement is False.`,
      `**C.** → True

Ten years give the factor

$$0.85^{10} = 0.196874$$

$$24000 \\cdot 0.196874 = 4724.98$$

The remaining value is about $4724.98$ EUR, which is below $5000$, so the statement is True.`,
      `**D.** → False

Each year multiplies the value by the positive factor $0.85$:

$$24000 \\cdot 0.85^{20} = 24000 \\cdot 0.038760 = 930.23$$

The value stays positive forever and only approaches zero, so it is not zero after $20$ years. The statement is False.`,
      `**E.** → True

Solve $0.85^{t} = \\frac{8000}{24000} = \\frac{1}{3}$:

$$t = \\frac{\\ln(1/3)}{\\ln 0.85} = \\frac{-1.098612}{-0.162519} = 6.7599$$

The threshold is crossed after about $6.76$ years, that is between the sixth and the seventh anniversary, so it happens during the seventh year of use. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 115,
    solution_overview: `A machine bought for $24\\,000$ EUR loses $15\\%$ of its value each year, so its value after $t$ years is $24000 \\cdot 0.85^{t}$. Value questions are evaluations; time questions need logarithms, and $\\ln 0.85$ is negative.`,
  },
  {
    id: `math-4-116`,
    case_id: `MATH 4.116`,
    title: `Common traps with logarithm laws`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For all positive $u$ and $v$ the identity $\\log_{2}(u + v) = \\log_{2} u + \\log_{2} v$ holds.`,
      `For all positive $u$ and $v$ the identity $\\frac{\\log_{2} u}{\\log_{2} v} = \\log_{2}(u - v)$ holds.`,
      `The equation $\\log_{2}(x) - \\log_{2}(x - 1) = 1$ is solved by $x = 2$.`,
      `The identity $\\log_{3}(x^{4}) = 4 \\log_{3} x$ holds for every $x > 0$.`,
      `For positive $x$ the expression $\\log_{5}(5x) - \\log_{5} x$ depends on $x$.`,
    ],
    answer_key: [false, false, true, true, false],
    tactical_explanations: [
      `**A.** → False

The sum of two logarithms corresponds to a product of arguments, not to a sum:

$$\\log_{2} u + \\log_{2} v = \\log_{2}(uv)$$

A single counterexample settles the claim. With $u = 2$ and $v = 6$:

$$\\log_{2}(2 + 6) = \\log_{2} 8 = 3$$

$$\\log_{2} 2 + \\log_{2} 6 = 1 + 2.584963 = 3.584963$$

The two sides differ, so the statement is False.`,
      `**B.** → False

A quotient of logarithms is a change of base, and a difference of logarithms is a quotient of arguments; neither produces $\\log_{2}(u - v)$.

$$\\frac{\\log_{2} u}{\\log_{2} v} = \\log_{v} u, \\qquad \\log_{2} u - \\log_{2} v = \\log_{2}\\frac{u}{v}$$

With $u = 8$ and $v = 2$ the left side is $\\frac{3}{1} = 3$, while $\\log_{2}(8 - 2) = \\log_{2} 6 = 2.585$. The statement is False.`,
      `**C.** → True

The quotient law merges the two logarithms:

$$\\log_{2}\\frac{x}{x - 1} = 1$$

$$\\frac{x}{x - 1} = 2$$

$$x = 2x - 2 \\Rightarrow x = 2$$

The domain needs $x > 1$, which $2$ satisfies, so the statement is True.`,
      `**D.** → True

The power law lets an exponent inside the argument become a factor in front:

$$\\log_{3}(x^{4}) = 4 \\log_{3} x \\quad \\text{for } x > 0$$

Both sides are defined for all positive $x$ and agree there, so the statement is True.`,
      `**E.** → False

Merging with the quotient law cancels the unknown:

$$\\log_{5}(5x) - \\log_{5} x = \\log_{5}\\frac{5x}{x} = \\log_{5} 5 = 1$$

The difference is constantly $1$, independent of $x$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 116,
    solution_overview: `Each claim tests one law: $\\log_{a}(uv) = \\log_{a} u + \\log_{a} v$, $\\log_{a}\\frac{u}{v} = \\log_{a} u - \\log_{a} v$ and $\\log_{a}(u^{c}) = c \\log_{a} u$. Sums and quotients of logarithms themselves obey no such rules.`,
  },
  {
    id: `math-4-117`,
    case_id: `MATH 4.117`,
    title: `Comparing two savings plans`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $5$ years Plan A is still worth more than Plan B.`,
      `The two plans are equally valuable after fewer than $10$ years.`,
      `After $20$ years Plan B is worth more than Plan A.`,
      `Plan B needs fewer years to double than Plan A.`,
      `Plan A reaches $10\\,000$ EUR earlier than Plan B reaches $8000$ EUR.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Evaluate both plans after five years:

$$5000 \\cdot 1.04^{5} = 5000 \\cdot 1.216653 = 6083.26$$

$$4000 \\cdot 1.06^{5} = 4000 \\cdot 1.338226 = 5352.90$$

Since $6083.26 > 5352.90$, Plan A is ahead and the statement is True.`,
      `**B.** → False

Equality means $5000 \\cdot 1.04^{n} = 4000 \\cdot 1.06^{n}$, that is

$$\\left(\\frac{1.06}{1.04}\\right)^{n} = \\frac{5}{4}$$

$$n = \\frac{\\ln 1.25}{\\ln 1.019231} = \\frac{0.223144}{0.019048} = 11.7148$$

The plans meet after about $11.71$ years, which is more than $10$, so the statement is False.`,
      `**C.** → True

Evaluate both plans after twenty years:

$$5000 \\cdot 1.04^{20} = 5000 \\cdot 2.191123 = 10955.62$$

$$4000 \\cdot 1.06^{20} = 4000 \\cdot 3.207135 = 12828.54$$

Since $12828.54 > 10955.62$, Plan B has overtaken Plan A and the statement is True.`,
      `**D.** → True

Each doubling time solves $q^{n} = 2$ for its own factor:

$$n_{A} = \\frac{\\ln 2}{\\ln 1.04} = 17.6730, \\qquad n_{B} = \\frac{\\ln 2}{\\ln 1.06} = 11.8957$$

Since $11.90 < 17.67$, the plan with the higher rate doubles faster and the statement is True.`,
      `**E.** → False

Each plan must double its own starting capital, so both times are the doubling times computed from the respective rates:

$$n_{A} = \\frac{\\ln 2}{\\ln 1.04} = 17.6730, \\qquad n_{B} = \\frac{\\ln 2}{\\ln 1.06} = 11.8957$$

Plan A needs about $17.67$ years while Plan B needs about $11.90$, so Plan A is later, not earlier. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 117,
    solution_overview: `Plan A pays $4\\%$ per year on $5000$ EUR, so its value is $5000 \\cdot 1.04^{n}$. Plan B pays $6\\%$ per year on $4000$ EUR, so its value is $4000 \\cdot 1.06^{n}$. Comparing the plans leads to an exponential equation solved with logarithms.`,
  },
  {
    id: `math-4-118`,
    case_id: `MATH 4.118`,
    title: `Five closing claims on exponential and logarithmic equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^{x^{2} - 3x} = 16$ has two integer solutions.`,
      `The equation $\\log_{2}(x - 1) + \\log_{2}(x + 1) = 3$ has a solution larger than $2$.`,
      `The equation $5^{x} = 0.2$ has the solution $x = -1$.`,
      `The equation $\\ln(x) + \\ln(x - 2) = \\ln(3)$ has two solutions.`,
      `The equation $3 \\cdot 2^{x} = 5^{x}$ has a solution smaller than $2.2$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Write $16 = 2^{4}$ and compare exponents:

$$x^{2} - 3x = 4$$

$$x^{2} - 3x - 4 = 0$$

$$x = 4 \\quad \\text{or} \\quad x = -1$$

Both values are integers and both solve the equation, so the statement is True.`,
      `**B.** → True

The product law gives a difference of squares:

$$\\log_{2}\\big((x-1)(x+1)\\big) = 3$$

$$x^{2} - 1 = 8$$

$$x^{2} = 9 \\Rightarrow x = 3 \\text{ or } x = -3$$

The domain requires $x > 1$, so only $x = 3$ survives, and $3 > 2$. The statement is True.`,
      `**C.** → True

The right side is the reciprocal of the base: $0.2 = \\frac{1}{5} = 5^{-1}$.

$$5^{x} = 5^{-1}$$

$$x = -1$$

The reported value is the solution, so the statement is True.`,
      `**D.** → False

Merging the left side and comparing arguments:

$$x(x - 2) = 3$$

$$x^{2} - 2x - 3 = 0$$

$$x = 3 \\quad \\text{or} \\quad x = -1$$

The domain needs $x > 2$, so $-1$ is extraneous and only $x = 3$ remains. There is one solution, so the statement is False.`,
      `**E.** → True

Collect the powers on one side and take logarithms:

$$\\left(\\frac{5}{2}\\right)^{x} = 3$$

$$x = \\frac{\\ln 3}{\\ln 2.5} = \\frac{1.098612}{0.916291} = 1.1990$$

The solution is about $1.20$, which is smaller than $2.2$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 118,
    solution_overview: `A mixed final set: matching bases, substitution, domain checks and logarithms of both sides, each applied to one short claim.`,
  },
];
