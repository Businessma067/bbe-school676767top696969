/**
 * Chapter 4 — Subsection 4.4: Exponential and logarithmic equations.
 * Exam format: five True/False claims per task. Explanations follow MATH 13.18.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_4_EXPONENTIAL: MathTask[] = [
  {
    id: `math-4-94`,
    case_id: `MATH 4.94`,
    title: `Strictly increasing bases and sign of $2^x$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^x = 32$ has exactly one real solution.`,
      `The equation $2^x = 32$ has a negative real solution.`,
      `The equation $3^{x+1} = 27$ has a unique integer solution.`,
      `The equation $\\left(\\frac{1}{2}\\right)^x = \\frac{1}{8}$ has exactly one real solution.`,
      `Every real solution of $\\left(\\frac{1}{2}\\right)^x = \\frac{1}{8}$ is negative.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

An exponential with base $2 > 1$ is strictly increasing on $\\mathbb{R}$, so equal outputs force equal inputs.

$$2^x = 32$$

$$2^x = 2^5$$

$$x = 5$$

Monotonicity gives exactly one real solution, not zero and not more than one.`,
      `**B.** → False

Solve on base $2$, then read the sign of the exponent.

$$2^x = 2^5$$

$$x = 5$$

The unique real solution is positive. The claim asks for a negative real solution; there is none.`,
      `**C.** → True

Rewrite $27 = 3^3$ and equate exponents.

$$3^{x+1} = 3^3$$

$$x + 1 = 3$$

$$x = 2$$

The exponent $2$ is an integer, and strict monotonicity gives uniqueness.`,
      `**D.** → True

A decay base $0 < \\frac{1}{2} < 1$ is still one-to-one on $\\mathbb{R}$.

$$\\left(\\frac{1}{2}\\right)^x = \\frac{1}{8}$$

$$2^{-x} = 2^{-3}$$

$$x = 3$$

Exactly one real value satisfies the equation.`,
      `**E.** → False

Match bases and solve for the exponent.

$$2^{-x} = 2^{-3}$$

$$x = 3$$

The unique real solution is positive, not negative.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 94,
    solution_overview: `Five independent simple exponential claims. A positive base not equal to $1$ is strictly monotonic, so $a^x = b$ with $b > 0$ has exactly one real root. Powers of $2$ stay positive.`,
  },
  {
    id: `math-4-95`,
    case_id: `MATH 4.95`,
    title: `Rational exponents and impossible targets`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $5^x = 125$ has exactly one real solution.`,
      `The equation $10^{x-1} = 1000$ has a rational solution.`,
      `The equation $2^x = -4$ has at least one real solution.`,
      `The equation $4^x = 2$ has exactly one real solution.`,
      `The equation $7^x = 0$ has a real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Base $5 > 1$ is strictly increasing, and $125 = 5^3 > 0$.

$$5^x = 5^3$$

$$x = 3$$

Monotonicity gives exactly one real solution.`,
      `**B.** → True

Write $1000 = 10^3$ and solve the linear exponent equation.

$$10^{x-1} = 10^3$$

$$x - 1 = 3$$

$$x = 4$$

The value $4$ is rational.`,
      `**C.** → False

For every real $x$, the value $2^x$ is strictly positive.

$$2^x > 0 \\quad \\text{for all real } x$$

A positive number cannot equal $-4$. There are zero real solutions.`,
      `**D.** → True

Use $4 = 2^2$ and equate exponents on base $2$.

$$2^{2x} = 2^1$$

$$2x = 1$$

$$x = \\frac{1}{2}$$

Strict monotonicity on base $2$ gives uniqueness.`,
      `**E.** → False

A positive base raised to any real exponent stays positive.

$$7^x > 0 \\quad \\text{for all real } x$$

Zero is not attainable.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 95,
    solution_overview: `Five independent basic exponentials. Positive targets yield unique real exponents; zero or negative targets cannot be reached by a positive base raised to a real power.`,
  },
  {
    id: `math-4-96`,
    case_id: `MATH 4.96`,
    title: `Same-base laws for $4^{2x}$, $8^{x+1}$, and $9^x$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Rewriting $4^{2x} = 8^{x+1}$ on a common base yields a linear equation in $x$.`,
      `The equation $4^{2x} = 8^{x+1}$ has more than one real solution.`,
      `The equation $9^x = 27$ has exactly one real solution.`,
      `Every real solution of $9^x = 27$ is irrational.`,
      `The equation $16^x = 4$ has no real solution.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Use $4 = 2^2$ and $8 = 2^3$, then equate exponents.

$$4^{2x} = 8^{x+1}$$

$$2^{4x} = 2^{3(x+1)}$$

$$4x = 3x + 3$$

$$x = 3$$

The last line is linear in $x$.`,
      `**B.** → False

After matching bases, a strictly monotonic exponential gives at most one real exponent.

$$2^{4x} = 2^{3x+3}$$

$$4x = 3x + 3$$

$$x = 3$$

There is exactly one real solution, not more than one.`,
      `**C.** → True

Rewrite $9 = 3^2$ and $27 = 3^3$.

$$3^{2x} = 3^3$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

Base $3 > 1$ is one-to-one, so the solution is unique.`,
      `**D.** → False

Solve and classify the exponent.

$$x = \\frac{3}{2}$$

The value $\\frac{3}{2}$ is rational, so the claim is wrong.`,
      `**E.** → False

Write $16 = 2^4$ and $4 = 2^2$.

$$2^{4x} = 2^2$$

$$4x = 2$$

$$x = \\frac{1}{2}$$

A real solution exists.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 96,
    solution_overview: `Five independent same-base problems. Equal bases reduce an exponential equation to a linear equation in the exponent.`,
  },
  {
    id: `math-4-97`,
    case_id: `MATH 4.97`,
    title: `Shifts and reciprocal bases`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^{x+1} = 8^{x-1}$ has exactly one real solution.`,
      `The equation $3^{2x} = 81$ has a unique integer solution.`,
      `The equation $\\left(\\frac{1}{3}\\right)^x = 81$ has exactly one real solution.`,
      `Every real solution of $6^x = 216$ is positive.`,
      `The equation $2^{3x} = 4^{x+1}$ has no real solution.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Since $8 = 2^3$, equate exponents on base $2$.

$$2^{x+1} = 2^{3(x-1)}$$

$$x + 1 = 3x - 3$$

$$x = 2$$

Strict monotonicity gives uniqueness.`,
      `**B.** → True

Note $81 = 3^4$.

$$3^{2x} = 3^4$$

$$2x = 4$$

$$x = 2$$

The integer $2$ is the only real solution.`,
      `**C.** → True

Rewrite $81 = 3^4$.

$$3^{-x} = 3^4$$

$$-x = 4$$

$$x = -4$$

Exactly one real exponent works.`,
      `**D.** → True

Since $216 = 6^3 > 1$ and base $6 > 1$.

$$6^x = 6^3$$

$$x = 3 > 0$$

The unique solution is positive.`,
      `**E.** → False

Use $4 = 2^2$.

$$2^{3x} = 2^{2(x+1)}$$

$$3x = 2x + 2$$

$$x = 2$$

A real solution exists.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 97,
    solution_overview: `Five independent equations with shifted exponents or fractional bases. Common-base rewriting leaves a linear exponent equation with a unique real root.`,
  },
  {
    id: `math-4-98`,
    case_id: `MATH 4.98`,
    title: `Powers of $25$, $125$, and unit fractions`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $25^x = 125$ has exactly one real solution.`,
      `The equation $2^{2x+1} = 32$ has exactly one real solution.`,
      `Every real solution of $5^{x-2} = \\frac{1}{25}$ is negative.`,
      `The equation $\\left(\\frac{1}{5}\\right)^x = 625$ has exactly one real solution.`,
      `The equation $3^x = \\frac{1}{9}$ has a positive real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Write $25 = 5^2$ and $125 = 5^3$.

$$5^{2x} = 5^3$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

Strict monotonicity gives uniqueness.`,
      `**B.** → True

Match $32 = 2^5$.

$$2^{2x+1} = 2^5$$

$$2x + 1 = 5$$

$$x = 2$$

Exactly one real root.`,
      `**C.** → False

Rewrite $\\frac{1}{25} = 5^{-2}$.

$$x - 2 = -2$$

$$x = 0$$

The unique solution is zero, not negative.`,
      `**D.** → True

Use $625 = 5^4$.

$$5^{-x} = 5^4$$

$$x = -4$$

One real exponent satisfies the equation.`,
      `**E.** → False

Rewrite $\\frac{1}{9} = 3^{-2}$.

$$x = -2$$

The unique real solution is negative.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 98,
    solution_overview: `Five independent same-base exercises mixing growth and decay. Once bases align, check sign and count of solutions.`,
  },
  {
    id: `math-4-99`,
    case_id: `MATH 4.99`,
    title: `Natural exponential $e^x$ and its range`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $e^x = 20$ has exactly one real solution.`,
      `Every value $e^x$ for real $x$ is strictly positive.`,
      `The equation $e^x = -1$ has a real solution.`,
      `The equation $e^{2x} = e^6$ has exactly one real solution.`,
      `The equation $e^x = 0$ has a real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The function $e^x$ is strictly increasing on $\\mathbb{R}$ with range $(0,\\infty)$.

$$e^x = 20$$

Because $20 > 0$, there is exactly one real $x$ with $e^x = 20$.`,
      `**B.** → True

The natural exponential never vanishes and never turns negative.

$$e^x > 0 \\quad \\text{for all real } x$$

So every output is strictly positive.`,
      `**C.** → False

The range of $e^x$ is $(0,\\infty)$.

$$e^x > 0$$

Negative one is outside the range, so there is no real solution.`,
      `**D.** → True

Equal outputs under a strictly increasing exponential force equal inputs.

$$e^{2x} = e^6$$

$$2x = 6$$

$$x = 3$$

Exactly one real solution.`,
      `**E.** → False

Zero is not in the range of $e^x$.

$$e^x > 0 \\quad \\text{for all real } x$$

No real solution exists.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 99,
    solution_overview: `Five independent claims about $e^x$. The natural exponential is strictly increasing with range $(0,\\infty)$, so each positive target has exactly one real preimage.`,
  },
  {
    id: `math-4-100`,
    case_id: `MATH 4.100`,
    title: `Equations with $e^{2x-1}$ and scaled exponentials`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $e^{2x-1} = 5$ has exactly one real solution.`,
      `Every real solution of $e^{2x-1} = 5$ is rational.`,
      `The equation $2e^x = 10$ has exactly one real solution.`,
      `The equation $e^{x+2} = e^{x-1}$ has no real solution.`,
      `The equation $e^{-x} = e^x$ has no real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The substitution $u = 2x - 1$ turns the equation into $e^u = 5$.

$$e^u = 5$$

Because $e^u$ is one-to-one, there is exactly one real $u$, hence exactly one real $x$.`,
      `**B.** → False

If $2x - 1 = \\ln 5$, then

$$x = \\frac{\\ln 5 + 1}{2}$$

The number $\\ln 5$ is irrational, so this $x$ is irrational, not rational.`,
      `**C.** → True

Divide both sides by $2$.

$$e^x = 5$$

Strict monotonicity of $e^x$ gives exactly one real root.`,
      `**D.** → True

Equate exponents on the strictly increasing exponential.

$$x + 2 = x - 1$$

$$2 = -1$$

This is impossible, so there is no real solution.`,
      `**E.** → False

Combine exponents on one side.

$$e^{-x} = e^x$$

$$e^{-2x} = 1$$

$$-2x = 0$$

$$x = 0$$

There is exactly one real solution, so "no real solution" is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 100,
    solution_overview: `Five independent natural-exponential equations. Linear expressions in the exponent reduce to one step after matching exponents or taking logarithms.`,
  },
  {
    id: `math-4-101`,
    case_id: `MATH 4.101`,
    title: `Base-$2$ logarithms and their domain`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_2 x = 5$ has exactly one real solution.`,
      `Every real solution of $\\log_2 x = 5$ satisfies $x > 0$.`,
      `The equation $\\log_2 x = 5$ has a negative real solution.`,
      `The equation $\\log_2 x = -3$ has a real solution with $0 < x < 1$.`,
      `The expression $\\log_2(-4)$ denotes a real number.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The function $\\log_2 x$ is strictly increasing for $x > 0$.

$$\\log_2 x = 5$$

$$x = 2^5 = 32$$

Domain $x > 0$ keeps exactly one admissible root.`,
      `**B.** → True

The argument of a real logarithm must be positive.

$$x = 32 > 0$$

Any valid logarithmic solution must satisfy $x > 0$.`,
      `**C.** → False

Negative numbers are outside the domain of $\\log_2 x$.

$$x = 32 > 0$$

No negative value satisfies the equation.`,
      `**D.** → True

A negative logarithm means the argument is a proper fraction of the base.

$$x = 2^{-3} = \\frac{1}{8}$$

$$0 < \\frac{1}{8} < 1$$

The solution lies between $0$ and $1$.`,
      `**E.** → False

The argument must be positive.

$$-4 < 0$$

No real logarithm is defined.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 101,
    solution_overview: `Five independent $\\log_2$ claims. A logarithm $\\log_a u$ is defined exactly when $u > 0$ and $a > 0$, $a \\neq 1$.`,
  },
  {
    id: `math-4-102`,
    case_id: `MATH 4.102`,
    title: `Natural logarithms $\\ln(x+1)$ and shifts`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\ln(x+1) = 2$ has exactly one real solution.`,
      `Every real solution of $\\ln(x+1) = 2$ satisfies $x > -1$.`,
      `The equation $\\ln(x+1) = 2$ has a real solution with $x \\le -1$.`,
      `The equation $\\ln(1-x) = 0$ has exactly one real solution.`,
      `The equation $\\ln x = 0$ has two distinct real solutions.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The function $\\ln u$ is strictly increasing for $u > 0$.

$$x + 1 = e^2$$

$$x = e^2 - 1$$

Exactly one real value, and $x + 1 > 0$.`,
      `**B.** → True

The argument $x + 1$ must stay positive.

$$x + 1 = e^2 > 0$$

$$x = e^2 - 1 > -1$$`,
      `**C.** → False

At $x = -1$ the argument is zero; below that it is negative.

$$x + 1 > 0 \\text{ is required}$$

So $x > -1$, and no value with $x \\le -1$ works.`,
      `**D.** → True

The rule $\\ln u = 0$ iff $u = 1$ applies with $u = 1 - x > 0$.

$$1 - x = 1$$

$$x = 0$$

Also $1 - x > 0$, so $x = 0$ is admissible and unique.`,
      `**E.** → False

In the domain $x > 0$, $\\ln x = 0$ forces $x = 1$.

$$x = 1$$

Only one admissible real value.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 102,
    solution_overview: `Five independent $\\ln$ equations. Shifts move the domain boundary; solving $\\ln u = c$ gives exactly one positive $u$ and hence one admissible $x$.`,
  },
  {
    id: `math-4-103`,
    case_id: `MATH 4.103`,
    title: `Product of logarithms and $\\log_{10}$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log x + \\log(x+3) = 1$ has exactly one positive real solution.`,
      `The equation $\\log x + \\log(x+3) = 1$ requires both $x > 0$ and $x + 3 > 0$.`,
      `The equation $\\log x + \\log(x+3) = 1$ has a real solution with $x \\le 0$.`,
      `The equation $\\ln(x^2) = 0$ has exactly one real solution.`,
      `The equation $\\log_3 27 = x$ has an integer solution.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Use $\\log a + \\log b = \\log(ab)$ on base $10$.

$$\\log(x(x+3)) = 1$$

$$x^2 + 3x = 10$$

$$x^2 + 3x - 10 = 0$$

$$(x+5)(x-2) = 0$$

Domain requires $x > 0$, leaving $x = 2$ only.`,
      `**B.** → True

Each logarithm needs a positive argument.

$$x > 0$$

$$x + 3 > 0$$

Both conditions are part of the domain.`,
      `**C.** → False

Algebra gives $x = -5$ or $x = 2$, but $x = -5$ fails $x > 0$.

$$x = -5 \\notin (0,\\infty)$$

No nonpositive solution is valid.`,
      `**D.** → False

The rule $\\ln(x^2) = 0$ gives $x^2 = 1$.

$$x = 1 \\text{ or } x = -1$$

Both satisfy $x^2 > 0$, so there are two real solutions.`,
      `**E.** → True

Rewrite $27 = 3^3$.

$$\\log_3 27 = 3$$

The value $3$ is an integer.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 103,
    solution_overview: `Five independent logarithmic equations. Product rules combine logs only when every argument is positive; check the domain before counting roots.`,
  },
  {
    id: `math-4-104`,
    case_id: `MATH 4.104`,
    title: `Logarithm laws on equal arguments`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_5 x = \\log_5 125$ has exactly one real solution with $x > 0$.`,
      `The identity $\\log_2 8 + \\log_2 4 = \\log_2 32$ holds.`,
      `For every $a > 0$ with $a \\neq 1$, the value $\\log_a(a^3)$ equals $3$.`,
      `The value $\\log_{10}(0.01)$ is negative.`,
      `The values $\\log_2 10$ and $\\log_{10} 2$ are equal.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Equal logs with the same base force equal arguments.

$$x = 125$$

Domain $x > 0$ is satisfied, and the solution is unique.`,
      `**B.** → True

Use $\\log_a u + \\log_a v = \\log_a(uv)$.

$$\\log_2 8 = 3$$

$$\\log_2 4 = 2$$

$$\\log_2 32 = 5$$

$$3 + 2 = 5$$`,
      `**C.** → True

Power rule: $\\log_a(a^k) = k$.

$$\\log_a(a^3) = 3$$`,
      `**D.** → True

Since $0.01 = 10^{-2}$.

$$\\log_{10}(0.01) = -2$$

Negative two is negative.`,
      `**E.** → False

Change-of-base gives reciprocals, not equality.

$$\\log_2 10 = \\frac{\\ln 10}{\\ln 2}$$

$$\\log_{10} 2 = \\frac{\\ln 2}{\\ln 10}$$

These are not equal.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 104,
    solution_overview: `Five independent log-law claims. Matching arguments or combining logs tests whether you respect the domain and the one-to-one property.`,
  },
  {
    id: `math-4-105`,
    case_id: `MATH 4.105`,
    title: `Change of base and comparing $\\log_2$ values`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_2 8 = \\log_8 2$ is true.`,
      `The ratio $\\dfrac{\\log_3 81}{\\log_3 9}$ equals $2$.`,
      `The value $\\log_4 16$ equals $2$.`,
      `The inequality $\\log_2 5 > \\log_2 3$ is true.`,
      `The value $\\log_5 1$ equals $0$.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

Evaluate each side separately.

$$\\log_2 8 = 3$$

$$\\log_8 2 = \\frac{1}{3}$$

Three is not equal to one third.`,
      `**B.** → True

Evaluate each logarithm on base $3$.

$$\\log_3 81 = 4$$

$$\\log_3 9 = 2$$

$$\\frac{4}{2} = 2$$`,
      `**C.** → True

Since $16 = 4^2$.

$$\\log_4 16 = 2$$`,
      `**D.** → True

The function $\\log_2 u$ is strictly increasing for $u > 0$.

$$5 > 3$$

So $\\log_2 5 > \\log_2 3$.`,
      `**E.** → True

Any base logarithm of one is zero.

$$\\log_5 1 = 0$$`,
    ],
    difficulty_level: `4/5`,
    sort_order: 105,
    solution_overview: `Five independent change-of-base exercises. Rewrite logs in a common base before comparing or simplifying.`,
  },
  {
    id: `math-4-106`,
    case_id: `MATH 4.106`,
    title: `Reciprocal change-of-base products`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The product $\\log_2 3 \\cdot \\log_3 2$ equals $1$.`,
      `The equation $\\log_{10} x = 2$ has exactly one positive real solution.`,
      `The value $\\log_3 27$ equals $\\log_9 3$.`,
      `The expression $\\dfrac{\\log_2 16}{\\log_2 4}$ equals $2$.`,
      `For every $x$ with $0 < x < 1$, the value $\\log_{10} x$ is negative.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Change of base: $\\log_a b = \\frac{\\ln b}{\\ln a}$.

$$\\log_2 3 \\cdot \\log_3 2 = \\frac{\\ln 3}{\\ln 2} \\cdot \\frac{\\ln 2}{\\ln 3} = 1$$`,
      `**B.** → True

The base-$10$ logarithm is one-to-one on $x > 0$.

$$x = 10^2 = 100$$

Exactly one admissible root.`,
      `**C.** → False

Evaluate each side on base $3$.

$$\\log_3 27 = 3$$

$$\\log_9 3 = \\frac{1}{2}$$

They are not equal.`,
      `**D.** → True

Evaluate each logarithm on base $2$.

$$\\log_2 16 = 4$$

$$\\log_2 4 = 2$$

$$\\frac{4}{2} = 2$$`,
      `**E.** → True

If $0 < x < 1$, then $x = 10^c$ with $c < 0$.

$$\\log_{10} x = c < 0$$`,
    ],
    difficulty_level: `4/5`,
    sort_order: 106,
    solution_overview: `Five independent change-of-base identities. Products that telescope to $1$ and comparisons across bases appear often on exams.`,
  },
  {
    id: `math-4-107`,
    case_id: `MATH 4.107`,
    title: `Domain restrictions before solving logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_2(x-3) = 1$ has no real solution with $x \\le 3$.`,
      `Every real solution of $\\ln(5-x) = \\ln 2$ satisfies $x < 5$.`,
      `The equation $\\log(x^2) = 1$ has every real solution positive.`,
      `The equation $\\ln x + \\ln(x-1) = \\ln 12$ requires $x > 1$.`,
      `The equation $\\log_2(x-4) = 3$ has no real solution with $x \\le 4$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The argument $x - 3$ must be positive.

$$x - 3 > 0$$

$$x > 3$$

Any value with $x \\le 3$ is outside the domain.`,
      `**B.** → True

Both arguments must be positive.

$$5 - x > 0$$

$$x < 5$$

Matching arguments gives $5 - x = 2$, so $x = 3$, which satisfies $x < 5$.`,
      `**C.** → False

The rule $\\log(x^2) = 1$ gives $x^2 = 10$.

$$x = \\pm \\sqrt{10}$$

One admissible root is negative.`,
      `**D.** → True

Both factors must be positive.

$$x > 0$$

$$x - 1 > 0$$

Together these force $x > 1$.`,
      `**E.** → True

The argument $x - 4$ must be positive before $\\log_2$ is defined.

$$x - 4 > 0$$

$$x > 4$$

No value with $x \\le 4$ can satisfy the equation.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `Five independent domain claims. State the admissible set for each logarithmic argument before solving.`,
  },
  {
    id: `math-4-108`,
    case_id: `MATH 4.108`,
    title: `Arguments near zero and endpoints`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\ln(2x-5) = 0$ has exactly one real solution.`,
      `The equation $\\ln(2x-5) = 0$ has a real solution with $x \\le 2$.`,
      `The equation $\\log_{10}(x-9) = 1$ has exactly one real solution.`,
      `The equation $\\ln(x-1) = 0$ has no real solution with $x \\le 1$.`,
      `The expression $\\sqrt{\\ln x}$ is defined only for $x \\ge 1$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The rule $\\ln u = 0$ iff $u = 1$ with $u > 0$.

$$2x - 5 = 1$$

$$x = 3$$

Check: $2(3) - 5 = 1 > 0$. Unique admissible root.`,
      `**B.** → False

Domain requires $2x - 5 > 0$.

$$2x - 5 > 0$$

$$x > \\frac{5}{2}$$

The solution $x = 3$ is not $\\le 2$.`,
      `**C.** → True

Translate to an exponential equation on base $10$.

$$x - 9 = 10$$

$$x = 19$$

Also $x - 9 > 0$, so exactly one admissible root.`,
      `**D.** → True

Need $x - 1 > 0$.

$$x - 1 > 0$$

$$x > 1$$

At $x = 1$ the argument is zero; below that it is negative.`,
      `**E.** → True

Need $\\ln x \\ge 0$ and $x > 0$.

$$\\ln x \\ge 0$$

$$x \\ge 1$$

Combined with $x > 0$, the domain is $x \\ge 1$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `Five independent domain checks for shifted logarithms. Test endpoints: arguments equal to $1$ give $\\ln 1 = 0$; nonpositive arguments are excluded.`,
  },
  {
    id: `math-4-109`,
    case_id: `MATH 4.109`,
    title: `Squaring radical equations and extraneous roots`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Squaring both sides of $\\sqrt{x} = x - 2$ can introduce a root that fails the original equation.`,
      `The equation $\\sqrt{x} = x - 2$ has exactly one valid real solution after a domain check.`,
      `The equation $\\sqrt{x} = x - 2$ has two valid real solutions after a domain check.`,
      `The identity $\\sqrt{2^x} = 2^{x/2}$ holds for every real $x$.`,
      `The identity $(e^x)^2 = e^{x^2}$ holds for every real $x$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Square both sides:

$$x = (x-2)^2$$

$$x = x^2 - 4x + 4$$

$$0 = x^2 - 5x + 4$$

$$(x-1)(x-4) = 0$$

Check $x = 1$: $\\sqrt{1} = 1$ but $1 - 2 = -1$, so $x = 1$ is extraneous.`,
      `**B.** → True

From $(x-1)(x-4) = 0$, only $x = 4$ satisfies the original equation.

$$\\sqrt{4} = 2$$

$$4 - 2 = 2$$

Exactly one valid real solution.`,
      `**C.** → False

The algebraic step yields $x = 1$ and $x = 4$, but $x = 1$ fails the original.

$$\\sqrt{1} \\neq 1 - 2$$

Only one valid solution remains.`,
      `**D.** → True

For every real $x$,

$$\\sqrt{2^x} = (2^x)^{1/2} = 2^{x/2}$$`,
      `**E.** → False

Compare exponent laws. The correct identity is $(e^x)^2 = e^{2x}$, not $e^{x^2}$.

$$(e^2)^2 = e^4$$

$$e^{2^2} = e^4$$

At $x = 2$ both sides agree, but at $x = 3$:

$$(e^3)^2 = e^6$$

$$e^{3^2} = e^9$$

So the claimed identity fails in general.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 109,
    solution_overview: `Five independent radical-exponential claims. Squaring can add algebraic roots; always check against the original domain and equation.`,
  },
  {
    id: `math-4-110`,
    case_id: `MATH 4.110`,
    title: `Extraneous roots from squaring log equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $(\\ln x)^2 = 4$ has two positive real solutions.`,
      `The equation $(\\ln x)^2 = 4$ has a negative real solution.`,
      `The equation $\\sqrt{\\ln(x+4)} = 2$ has exactly one real solution.`,
      `Squaring $\\sqrt{3^x} = 3^{x/2}$ can introduce extraneous roots.`,
      `The equation $\\ln x = -\\ln x$ has exactly one positive real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Take square roots: $\\ln x = 2$ or $\\ln x = -2$.

$$x = e^2 \\text{ or } x = e^{-2}$$

Both are positive and lie in the domain $x > 0$.`,
      `**B.** → False

Domain requires $x > 0$.

$$x = e^2 > 0$$

$$x = e^{-2} > 0$$

Neither solution is negative.`,
      `**C.** → True

Square both sides with $x + 4 > 0$ and $\\ln(x+4) \\ge 0$.

$$\\ln(x+4) = 4$$

$$x + 4 = e^4$$

$$x = e^4 - 4$$

Exactly one admissible root.`,
      `**D.** → False

Both sides are equal for every real $x$, so squaring does not create any extraneous roots.

$$\\sqrt{3^x} = 3^{x/2}$$

Squaring merely reproduces the same identity.`,
      `**E.** → True

Combine logarithms on the domain $x > 0$.

$$\\ln x = -\\ln x$$

$$2\\ln x = 0$$

$$\\ln x = 0$$

$$x = 1$$

Exactly one positive solution.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 110,
    solution_overview: `Five independent equations where squaring or even powers of $\\ln x$ create multiple candidates. Filter by domain $x > 0$ before counting.`,
  },
  {
    id: `math-4-111`,
    case_id: `MATH 4.111`,
    title: `Doubling time and repeated growth`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A culture doubles every $3$ hours. After $6$ hours the population is four times the initial population.`,
      `A substance with half-life $5$ years has exactly half the initial amount remaining after $10$ years.`,
      `If a quantity grows as $N(t) = N_0 \\cdot 2^{t/d}$, then $d$ is the doubling time.`,
      `After one half-life, strictly less than half of a sample remains.`,
      `If a quantity halves every $4$ hours, then after $8$ hours one quarter of the initial amount remains.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Two doubling periods multiply the factor by $2^2$.

$$N(6) = N_0 \\cdot 2^{6/3} = N_0 \\cdot 2^2 = 4N_0$$

After $6$ hours the population is four times the start.`,
      `**B.** → False

Two half-lives multiply the remaining fraction by $\\left(\\frac{1}{2}\\right)^2$.

$$N(10) = N_0 \\left(\\frac{1}{2}\\right)^{10/5} = N_0 \\left(\\frac{1}{2}\\right)^2 = \\frac{N_0}{4}$$

One quarter remains, not one half.`,
      `**C.** → True

At $t = d$,

$$N(d) = N_0 \\cdot 2^{d/d} = 2N_0$$

So $d$ is the doubling time by definition.`,
      `**D.** → False

One half-life leaves exactly half.

$$N(h) = N_0 \\left(\\frac{1}{2}\\right)^1 = \\frac{N_0}{2}$$

That is one half, not strictly less.`,
      `**E.** → True

Two halving periods give $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.

$$N(8) = N_0 \\left(\\frac{1}{2}\\right)^{8/4} = \\frac{N_0}{4}$$

One quarter of the initial amount remains.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 111,
    solution_overview: `Five independent doubling- and half-life claims. Count periods in the exponent: each doubling multiplies by $2$; each half-life multiplies the remainder by $\\frac{1}{2}$.`,
  },
  {
    id: `math-4-112`,
    case_id: `MATH 4.112`,
    title: `Half-life fractions and decay models`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For half-life $h > 0$, the model $N = N_0\\left(\\frac{1}{2}\\right)^{t/h}$ is decreasing in $t$.`,
      `After three half-lives, more than one third of a sample remains.`,
      `After two half-lives, exactly one quarter of a sample remains.`,
      `If a population doubles every hour, then after $3$ hours it is $8$ times the initial size.`,
      `If half-life is $10$ minutes, then after $20$ minutes none of the sample remains.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

For fixed $h > 0$, the factor $\\left(\\frac{1}{2}\\right)^{t/h}$ decreases as $t$ increases because $\\frac{1}{2} < 1$.`,
      `**B.** → False

Three half-lives leave $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.

$$\\frac{1}{8} < \\frac{1}{3}$$

Less than one third remains.`,
      `**C.** → True

Two half-lives leave $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.

$$N = \\frac{N_0}{4}$$`,
      `**D.** → True

Three doublings multiply by $2^3 = 8$.

$$N(3) = 8N_0$$`,
      `**E.** → False

Two half-lives leave one quarter.

$$N(20) = N_0 \\left(\\frac{1}{2}\\right)^{20/10} = \\frac{N_0}{4}$$

Some material remains.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 112,
    solution_overview: `Five independent decay and growth sentences. Express elapsed time as a number of half-lives or doublings before comparing remaining fractions.`,
  },
  {
    id: `math-4-113`,
    case_id: `MATH 4.113`,
    title: `Comparing $2^x$ and $3^x$ on the real line`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For every $x > 0$, the inequality $2^x < 3^x$ holds.`,
      `For every $x > 0$, the inequality $2^x > 3^x$ holds.`,
      `The equation $2^x = 3^x$ has exactly one real solution.`,
      `For every $x < 0$, the inequality $2^x > 3^x$ holds.`,
      `As $x \\to \\infty$, the function $3^x$ grows faster than $2^x$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

For $x > 0$, divide by $2^x > 0$:

$$1 < \\left(\\frac{3}{2}\\right)^x$$

Since $\\frac{3}{2} > 1$, the right-hand side exceeds $1$ when $x > 0$.`,
      `**B.** → False

At $x = 1$, $2^1 = 2$ and $3^1 = 3$, so $2^x < 3^x$, not greater.`,
      `**C.** → True

Divide by $2^x > 0$:

$$1 = \\left(\\frac{3}{2}\\right)^x$$

Strict monotonicity of $\\left(\\frac{3}{2}\\right)^x$ gives exactly one real solution, namely $x = 0$.`,
      `**D.** → True

For $x < 0$, $\\left(\\frac{3}{2}\\right)^x < 1$, so after dividing by $2^x > 0$,

$$1 > \\left(\\frac{3}{2}\\right)^x$$

which is equivalent to $2^x > 3^x$.`,
      `**E.** → True

The ratio $\\dfrac{3^x}{2^x} = \\left(\\frac{3}{2}\\right)^x \\to \\infty$ as $x \\to \\infty$, so $3^x$ eventually dominates and grows faster.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 113,
    solution_overview: `Five independent comparisons of $2^x$ and $3^x$. Divide by the smaller base to reduce the comparison to a power of $\\frac{3}{2}$.`,
  },
  {
    id: `math-4-114`,
    case_id: `MATH 4.114`,
    title: `Growth rates of $e^x$, $2^x$, and $\\ln x$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `As $x \\to \\infty$, the function $e^x$ grows faster than $2^x$.`,
      `For every $x > 1$, the inequality $\\ln x < x$ holds.`,
      `The equation $2^x = 3^x$ has no real solution.`,
      `For every $x > 0$, the inequality $\\left(\\frac{1}{2}\\right)^x > \\left(\\frac{1}{3}\\right)^x$ holds.`,
      `For every $x > 1$, the inequality $\\log_2 x < x$ holds.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Compare the ratio:

$$\\frac{e^x}{2^x} = \\left(\\frac{e}{2}\\right)^x$$

Since $\\frac{e}{2} > 1$, this ratio tends to infinity as $x \\to \\infty$.`,
      `**B.** → True

The function $f(x) = x - \\ln x$ has derivative $f'(x) = 1 - \\frac{1}{x}$, which is positive for $x > 1$, so $f(x) > f(1) = 1 > 0$. Hence $\\ln x < x$.`,
      `**C.** → False

Divide by $2^x > 0$:

$$\\left(\\frac{3}{2}\\right)^x = 1$$

At $x = 0$ both sides equal $1$, so a real solution exists and is unique.`,
      `**D.** → True

For $x > 0$,

$$\\left(\\frac{1}{2}\\right)^x > \\left(\\frac{1}{3}\\right)^x$$

is equivalent to $\\left(\\frac{3}{2}\\right)^x > 1$, which holds when $x > 0$.`,
      `**E.** → True

For $x > 1$, $\\log_2 x$ grows more slowly than $x$ because $\\log_2 x < x$ follows from $\\ln x < x$ and the increasing change-of-base factor $\\frac{1}{\\ln 2}$ applied to the smaller quantity.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 114,
    solution_overview: `Five independent growth comparisons. Rewrite ratios as powers of a constant base and use monotonicity or calculus facts about $\\ln x$ versus $x$.`,
  },
  {
    id: `math-4-115`,
    case_id: `MATH 4.115`,
    title: `Mixed exponentials with different bases`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^x = 8$ has a unique integer solution.`,
      `The equation $3^{x-1} = \\frac{1}{27}$ has a unique integer solution.`,
      `The equation $e^x = 10$ has a solution greater than $2$.`,
      `The equation $\\log_2(2x) = 4$ has exactly one positive real solution.`,
      `The equation $5^x = 25^x$ has more than one real solution.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Since $8 = 2^3$.

$$x = 3$$

The integer $3$ is the only real solution.`,
      `**B.** → True

Rewrite $\\frac{1}{27} = 3^{-3}$.

$$x - 1 = -3$$

$$x = -2$$

The integer $-2$ is the unique solution.`,
      `**C.** → True

Compare values: $e^2 \\approx 7.39$ and $10 > 7.39$.

Because $e^x$ is strictly increasing, any solution of $e^x = 10$ must exceed $2$.`,
      `**D.** → True

Translate to exponential form with $x > 0$.

$$2x = 2^4 = 16$$

$$x = 8$$

Domain $2x > 0$ is satisfied; the solution is unique.`,
      `**E.** → False

Rewrite $25^x = (5^2)^x = 5^{2x}$.

$$5^x = 5^{2x}$$

$$x = 2x$$

$$x = 0$$

Exactly one real solution.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 115,
    solution_overview: `Five independent mixed-base equations. Align bases or convert logs to exponentials, then use monotonicity to count solutions.`,
  },
  {
    id: `math-4-116`,
    case_id: `MATH 4.116`,
    title: `Logarithmic equations with shifted arguments`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_3(x+2) = 2$ has exactly one real solution with $x > -2$.`,
      `The equation $\\ln(3-x) = 0$ has exactly one real solution.`,
      `The equation $\\log x = -1$ has a solution with $x > 1$.`,
      `The equation $\\log_2(x^2 - 1) = 3$ has exactly two real solutions.`,
      `The equation $\\ln(x^2) = 2$ has exactly two positive real solutions.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Convert to exponential form with $x + 2 > 0$.

$$x + 2 = 3^2 = 9$$

$$x = 7$$

Exactly one admissible root with $x > -2$.`,
      `**B.** → True

Need $3 - x > 0$ and $\\ln(3-x) = 0$ gives $3 - x = 1$.

$$x = 2$$

Also $3 - 2 = 1 > 0$. Unique solution.`,
      `**C.** → False

The rule $\\log x = -1$ on base $10$ gives $x = 10^{-1}$.

$$x = 0.1$$

That value is not greater than $1$.`,
      `**D.** → True

Need $x^2 - 1 > 0$, so $|x| > 1$.

$$x^2 - 1 = 2^3 = 8$$

$$x^2 = 9$$

$$x = 3 \\text{ or } x = -3$$

Both satisfy the domain and the equation, so there are exactly two real solutions.`,
      `**E.** → False

The rule $\\ln(x^2) = 2$ gives $x^2 = e^2$.

$$x = e \\text{ or } x = -e$$

Only $x = e$ is positive; there is one positive solution, not two.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 116,
    solution_overview: `Five independent shifted logarithmic equations. Convert to exponential form only after stating the domain; even powers in the argument can yield symmetric roots.`,
  },
  {
    id: `math-4-117`,
    case_id: `MATH 4.117`,
    title: `Exponential equations with coefficients`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $3 \\cdot 2^x = 48$ has exactly one real solution.`,
      `Every real solution of $3 \\cdot 2^x = 48$ is an integer.`,
      `The equation $5^{x+1} - 5^x = 100$ has exactly one real solution.`,
      `The equation $2^{x+1} + 2^x = 12$ has exactly one real solution.`,
      `The equation $10^x = 10^{-x}$ has no real solution.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Divide by $3$ and match bases.

$$2^x = 16$$

$$2^x = 2^4$$

$$x = 4$$

Strict monotonicity gives uniqueness.`,
      `**B.** → True

After isolating the exponential,

$$x = 4$$

The unique solution is an integer.`,
      `**C.** → True

Factor $5^x$.

$$5^x(5 - 1) = 100$$

$$4 \\cdot 5^x = 100$$

$$5^x = 25$$

$$5^x = 5^2$$

$$x = 2$$

Exactly one real solution.`,
      `**D.** → True

Factor $2^x$.

$$2^x(2 + 1) = 12$$

$$3 \\cdot 2^x = 12$$

$$2^x = 4$$

$$x = 2$$

Exactly one real solution.`,
      `**E.** → False

Divide by $10^x > 0$.

$$1 = 10^{-2x}$$

$$-2x = 0$$

$$x = 0$$

There is exactly one real solution.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 117,
    solution_overview: `Five independent equations with factored exponentials. Factor out the common power first, then solve on a single base.`,
  },
  {
    id: `math-4-118`,
    case_id: `MATH 4.118`,
    title: `Change of base in equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\log_2 x = \\log_4 16$ has exactly one positive real solution.`,
      `The equation $\\dfrac{\\log x}{\\log 2} = 3$ has exactly one positive real solution.`,
      `The equation $\\log_3 x = 2$ has a solution with $x < 1$.`,
      `The equation $\\log_x 8 = 3$ requires $x > 0$ with $x \\neq 1$.`,
      `The equation $\\log_2 x + \\log_4 x = 3$ has exactly one positive real solution.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Evaluate the right-hand side: $\\log_4 16 = 2$.

$$\\log_2 x = 2$$

$$x = 4$$

Exactly one positive root.`,
      `**B.** → True

The left-hand side is $\\log_2 x$ by change of base.

$$\\log_2 x = 3$$

$$x = 8$$

Exactly one positive root.`,
      `**C.** → False

Convert to exponential form.

$$x = 3^2 = 9$$

The unique solution exceeds $1$.`,
      `**D.** → True

By definition, $\\log_x 8 = 3$ means $x^3 = 8$ with base constraints $x > 0$, $x \\neq 1$.`,
      `**E.** → True

Write $\\log_4 x = \\frac{\\log_2 x}{2}$.

$$\\log_2 x + \\frac{\\log_2 x}{2} = 3$$

$$\\frac{3}{2}\\log_2 x = 3$$

$$\\log_2 x = 2$$

$$x = 4$$

Exactly one positive root.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 118,
    solution_overview: `Five independent change-of-base equations. Rewrite every logarithm in one base before equating arguments.`,
  },
  {
    id: `math-4-119`,
    case_id: `MATH 4.119`,
    title: `Applied growth: interest-style compounding`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An account earning $6\\%$ per year compounded continuously grows according to $A = Pe^{0.06t}$.`,
      `When $Pe^{0.06t} = 2P$, the elapsed time $t$ equals $\\dfrac{\\ln 2}{0.06}$.`,
      `If a colony satisfies $N(t) = 1000 \\cdot e^{0.3t}$, then it is increasing for all real $t$.`,
      `The equation $1000 \\cdot e^{0.3t} = 2000$ has exactly one real solution for $t$.`,
      `If $N(t) = N_0 e^{kt}$ with $k < 0$, the quantity is increasing in $t$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Continuous compounding at rate $r = 0.06$ uses the model $A = Pe^{rt}$ with $r = 0.06$.`,
      `**B.** → True

Divide by $P$ and take natural logarithms.

$$e^{0.06t} = 2$$

$$0.06t = \\ln 2$$

$$t = \\frac{\\ln 2}{0.06}$$`,
      `**C.** → True

The factor $e^{0.3t}$ is strictly increasing because the exponent coefficient $0.3 > 0$.`,
      `**D.** → True

Divide by $1000$.

$$e^{0.3t} = 2$$

Strict monotonicity of $e^{0.3t}$ gives exactly one real $t$.`,
      `**E.** → False

If $k < 0$, then $e^{kt}$ decreases as $t$ increases, so the quantity is decreasing, not increasing.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 119,
    solution_overview: `Five independent continuous-growth claims. Divide out the initial amount, take $\\ln$ of both sides, and use monotonicity of $e^{kt}$.`,
  },
  {
    id: `math-4-120`,
    case_id: `MATH 4.120`,
    title: `Mixed exam set: exponentials, logs, and growth`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^x = 3^{x-1}$ has exactly one real solution.`,
      `The equation $\\ln(e^x) = x$ holds for every real $x$.`,
      `The equation $\\log_2(x-1) + \\log_2(x-3) = 2$ has exactly one real solution with $x > 3$.`,
      `For every $x > 0$, the inequality $2^x + 3^x < 2$ holds.`,
      `The equation $e^{2x} - 5e^x + 6 = 0$ has exactly two real solutions.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Divide by $2^x > 0$:

$$1 = \\frac{3^{x-1}}{2^x}$$

Taking logarithms or rewriting shows a strictly monotonic equation with one crossing; numerically $x = \\frac{\\ln 3}{\\ln 3 - \\ln 2} \\approx 2.71$, and uniqueness follows from monotonicity of $2^x$ versus $3^{x-1}$.`,
      `**B.** → True

The natural logarithm and exponential are inverse functions on $\\mathbb{R}$.

$$\\ln(e^x) = x \\quad \\text{for all real } x$$`,
      `**C.** → True

Use the product rule with $x > 3$.

$$\\log_2((x-1)(x-3)) = 2$$

$$(x-1)(x-3) = 4$$

$$x^2 - 4x + 3 = 4$$

$$x^2 - 4x - 1 = 0$$

$$x = 2 \\pm \\sqrt{5}$$

Only $x = 2 + \\sqrt{5}$ exceeds $3$, so exactly one admissible root.`,
      `**D.** → False

For $x > 0$, both $2^x \\ge 1$ and $3^x \\ge 1$, with at least one strict inequality.

$$2^x + 3^x \\ge 2$$

Equality would require $2^x = 3^x = 1$, which forces $x = 0$. So for every $x > 0$, the sum exceeds $2$, and the claim $< 2$ is false.`,
      `**E.** → True

Substitute $u = e^x > 0$.

$$u^2 - 5u + 6 = 0$$

$$(u-2)(u-3) = 0$$

$$u = 2 \\text{ or } u = 3$$

Each positive $u$ gives exactly one real $x = \\ln u$, so there are two real solutions.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 120,
    solution_overview: `Five independent closing 4.4 claims mixing exponentials, logarithms, and growth comparisons. Check domains first, then use monotonicity or substitution to count roots.`,
  },
];
