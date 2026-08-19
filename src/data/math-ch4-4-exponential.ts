/**
 * Chapter 4 — Subsection 4.4: Exponential and logarithmic equations.
 * Exam format: five True/False claims per task. Explanations follow MATH 13.18.
 * Each statement is an independent equation-solving claim (no shared equation within a task).
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_4_EXPONENTIAL: MathTask[] = [
  {
    id: `math-4-94`,
    case_id: `MATH 4.94`,
    title: `Basic exponentials and base-$3$ logarithms`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2^x = 32$, the sum of all admissible roots equals $2$.`,
      `For $2^x = -8$, precisely one real value of the exponent works.`,
      `For $\log_3 x = 2$, the product of all admissible roots equals $1$.`,
      `For $5^x = -1$, precisely one real value of the exponent works.`,
      `For $\left(\frac{1}{2}\right)^x = 2^{-3}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Base $2 > 1$ is strictly increasing on $\\mathbb{R}$, so equal outputs force equal inputs.

$$2^x = 32$$

$$2^x = 2^5$$

Monotonicity gives exactly one real solution.`,
      `**B.** → False

For every real $x$, the value $2^x$ is strictly positive.

$$2^x > 0 \\quad \\text{for all real } x$$

A positive output cannot equal $-8$, so there are zero real solutions.`,
      `**C.** → True

Convert to exponential form with domain $x > 0$.

$$\\log_3 x = 2$$

$$x = 3^2 = 9$$

Strict monotonicity of $\\log_3$ on $(0,\\infty)$ gives exactly one positive root.`,
      `**D.** → False

For every real $x$, the value $5^x$ is strictly positive.

$$5^x > 0 \\quad \\text{for all real } x$$

A positive output cannot equal $-1$, so there are zero real solutions.`,
      `**E.** → True

Rewrite $\\frac{1}{8} = 2^{-3}$ and match bases.

$$\\left(\\frac{1}{2}\\right)^x = 2^{-3}$$

$$2^{-x} = 2^{-3}$$

Decay base $\\frac{1}{2}$ is still one-to-one on $\\mathbb{R}$, so exactly one real exponent works.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 94,
    solution_overview: `Five independent basic equations. A positive base $a \\neq 1$ is strictly monotonic, so $a^x = b$ with $b > 0$ has exactly one real root; $\\log_a x = c$ with $x > 0$ has exactly one positive root.`,
  },
  {
    id: `math-4-95`,
    case_id: `MATH 4.95`,
    title: `Shifted exponentials and impossible targets`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $10^{x-1} = 10^3$, the sum of all admissible roots equals $2$.`,
      `For $2^{2x} = 2^1$, precisely one real value of the exponent works.`,
      `The equation has no real solution.`,
      `For $\log_5 125 = x \iff 5^x = 125$, exactly one positive admissible root exists.`,
      `For $3^{2x} = 3^4$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Write $1000 = 10^3$ and equate exponents.

$$10^{x-1} = 10^3$$

$$x - 1 = 3$$

Strict monotonicity of base $10$ gives exactly one real solution.`,
      `**B.** → True

Use $4 = 2^2$ and match exponents on base $2$.

$$4^x = 2$$

$$2^{2x} = 2^1$$

$$2x = 1$$

Base $2$ is one-to-one, so exactly one real root exists.`,
      `**C.** → False

A positive base raised to any real exponent stays positive.

$$7^x > 0 \\quad \\text{for all real } x$$

Zero is not in the range, so no real solution exists.`,
      `**D.** → True

This is the logarithmic definition with base $5$.

$$\\log_5 125 = x \\iff 5^x = 125$$

Since $125 = 5^3$, the defining equation has exactly one real exponent $x$.`,
      `**E.** → False

Rewrite $81 = 3^4$ on base $3$.

$$3^{2x} = 3^4$$

$$2x = 4$$

Strict monotonicity gives exactly one real solution, not more than one.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 95,
    solution_overview: `Five independent basic exponentials. Positive targets yield unique real exponents; zero targets cannot be reached. Logarithmic definitions convert to one exponential equation in the exponent.`,
  },
  {
    id: `math-4-96`,
    case_id: `MATH 4.96`,
    title: `Common-base rewriting on $2$, $3$, and $4$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $4^{2x} = 8^{x+1}$, the sum of all admissible roots equals $2$.`,
      `For $3^{2x} = 3^3$, precisely one real value of the exponent works.`,
      `For $2^{4x} = 2^2$, exactly one admissible root satisfies the equation.`,
      `For $x = 2^{-3} = \frac{1}{8}$, precisely one real value of the exponent works.`,
      `For $2^{3x} = 2^{2(x+1)}$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Use $4 = 2^2$ and $8 = 2^3$.

$$4^{2x} = 8^{x+1}$$

$$2^{4x} = 2^{3(x+1)}$$

$$4x = 3x + 3$$

One linear exponent equation follows, and base $2$ is strictly monotonic.`,
      `**B.** → True

Write $9 = 3^2$ and $27 = 3^3$.

$$3^{2x} = 3^3$$

$$2x = 3$$

Base $3 > 1$ is one-to-one, giving exactly one real solution.`,
      `**C.** → False

Convert to base $2$.

$$16^x = 4$$

$$2^{4x} = 2^2$$

$$4x = 2$$

A real solution exists, so the claim of no real solution is false.`,
      `**D.** → True

Translate to exponential form with $x > 0$.

$$\\log_2 x = -3$$

$$x = 2^{-3} = \\frac{1}{8}$$

The unique admissible root satisfies $0 < \\frac{1}{8} < 1$.`,
      `**E.** → False

Since $4 = 2^2$,

$$2^{3x} = 2^{2(x+1)}$$

$$3x = 2x + 2$$

Strict monotonicity yields exactly one real root, not more than one.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 96,
    solution_overview: `Five independent same-base problems. Rewriting on a common base reduces each exponential equation to a linear equation in the exponent with at most one real root.`,
  },
  {
    id: `math-4-97`,
    case_id: `MATH 4.97`,
    title: `Shifts, reciprocals, and $\\log_2$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2^{x+1} = 2^{3(x-1)}$, the sum of all admissible roots equals $2$.`,
      `For $3^{-x} = 3^4$, precisely one real value of the exponent works.`,
      `For $x = 2^5 = 32$, the product of all admissible roots equals $5$.`,
      `For $6^x = 6^3$, precisely one real value of the exponent works.`,
      `For $3^{2x} = 3^4$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Since $8 = 2^3$, equate exponents on base $2$.

$$2^{x+1} = 2^{3(x-1)}$$

$$x + 1 = 3x - 3$$

Strict monotonicity gives exactly one real solution.`,
      `**B.** → True

Rewrite $81 = 3^4$.

$$3^{-x} = 3^4$$

$$-x = 4$$

The reciprocal base is still one-to-one, so exactly one real exponent works.`,
      `**C.** → False

Convert with domain $x > 0$.

$$\\log_2 x = 5$$

$$x = 2^5 = 32$$

The unique admissible root is positive; no negative value satisfies the domain or the equation.`,
      `**D.** → True

Since $216 = 6^3 > 1$ and base $6 > 1$,

$$6^x = 6^3$$

Strict monotonicity gives exactly one real solution, and a positive target with base greater than $1$ forces a positive exponent.`,
      `**E.** → False

Note $81 = 3^4$.

$$3^{2x} = 3^4$$

$$2x = 4$$

A real solution exists, contradicting the claim of no real solution.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 97,
    solution_overview: `Five independent equations with shifted exponents or fractional bases. Common-base rewriting leaves a linear exponent equation; logarithms require $x > 0$ before counting roots.`,
  },
  {
    id: `math-4-98`,
    case_id: `MATH 4.98`,
    title: `Powers of $25$, $125$, and base-$10$ logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $5^{2x} = 5^3$, the sum of all admissible roots equals $2$.`,
      `For $2^{2x+1} = 2^5$, precisely one real value of the exponent works.`,
      `For $5^{x-2} = 5^{-2}$, the sum of all admissible roots equals $2$.`,
      `For $\log_{10} x = -1$, exactly one positive admissible root exists.`,
      `For $3^x = 3^{-2}$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Write $25 = 5^2$ and $125 = 5^3$.

$$5^{2x} = 5^3$$

$$2x = 3$$

Strict monotonicity on base $5$ gives exactly one real root.`,
      `**B.** → True

Match $32 = 2^5$.

$$2^{2x+1} = 2^5$$

$$2x + 1 = 5$$

Base $2$ is one-to-one, so exactly one real solution exists.`,
      `**C.** → False

Rewrite $\\frac{1}{25} = 5^{-2}$.

$$5^{x-2} = 5^{-2}$$

$$x - 2 = -2$$

$$x = 0$$

The unique real solution is zero, not negative.`,
      `**D.** → True

Convert to exponential form with $x > 0$.

$$\\log_{10} x = -1$$

$$x = 10^{-1} = 0.1$$

The unique admissible root satisfies $0 < 0.1 < 1$.`,
      `**E.** → False

Rewrite $\\frac{1}{9} = 3^{-2}$.

$$3^x = 3^{-2}$$

$$x = -2$$

The unique real solution is negative, not positive.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 98,
    solution_overview: `Five independent same-base exercises mixing growth and decay. Once bases align, check sign and count of solutions; base-$10$ logarithms with negative output correspond to proper fractions.`,
  },
  {
    id: `math-4-99`,
    case_id: `MATH 4.99`,
    title: `Natural exponential $e^x$ and $\\ln x$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $e^x = 20$, the sum of all admissible roots equals $2$.`,
      `The equation has exactly one real solution.`,
      `For $e^{2x} = e^6$, the product of all admissible roots equals $5$.`,
      `For $\ln x = 1$, exactly one positive admissible root exists.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The function $e^x$ is strictly increasing on $\\mathbb{R}$ with range $(0,\\infty)$.

$$e^x = 20$$

Because $20 > 0$, monotonicity gives exactly one real preimage.`,
      `**B.** → True

The range of $e^x$ is $(0,\\infty)$.

$$e^x > 0 \\quad \\text{for all real } x$$

Negative one is outside the range, so there is no real solution.`,
      `**C.** → False

Equal outputs under a strictly increasing exponential force equal inputs.

$$e^{2x} = e^6$$

$$2x = 6$$

Exactly one real solution exists, not more than one.`,
      `**D.** → True

On domain $x > 0$, $\\ln x = 1$ gives $x = e$.

$$\\ln x = 1$$

$$x = e > 0$$

Strict monotonicity of $\\ln$ on $(0,\\infty)$ gives exactly one positive root.`,
      `**E.** → False

Zero is not in the range of $e^x$.

$$e^x > 0 \\quad \\text{for all real } x$$

There are zero real solutions, not exactly one.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 99,
    solution_overview: `Five independent claims about $e^x$ and $\\ln x$. The natural exponential is strictly increasing with range $(0,\\infty)$; the natural logarithm is strictly increasing on $x > 0$.`,
  },
  {
    id: `math-4-100`,
    case_id: `MATH 4.100`,
    title: `Scaled exponentials and shifted $\\ln$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $u = 2x - 1$, the sum of all admissible roots equals $2$.`,
      `For $e^x = 5$, precisely one real value of the exponent works.`,
      `For $e^{x+2} = e^{x-1}$, no real root satisfies the equation.`,
      `For $\ln(2x) = 0$, exactly one positive admissible root exists.`,
      `For $e^{-2x} = 1$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The substitution $u = 2x - 1$ turns the equation into $e^u = 5$ with $5 > 0$.

$$e^u = 5$$

Because $e^u$ is one-to-one, there is exactly one real $u$, hence exactly one real $x$.`,
      `**B.** → True

Divide both sides by $2$.

$$e^x = 5$$

Strict monotonicity of $e^x$ gives exactly one real root.`,
      `**C.** → True

Equate exponents on the strictly increasing exponential.

$$e^{x+2} = e^{x-1}$$

$$x + 2 = x - 1$$

$$2 = -1$$

This is impossible, so there is no real solution.`,
      `**D.** → True

The rule $\\ln u = 0$ iff $u = 1$ applies with $u = 2x > 0$.

$$\\ln(2x) = 0$$

$$2x = 1$$

$$x = \\frac{1}{2} > 0$$

Exactly one positive admissible root exists.`,
      `**E.** → False

Combine exponents on one side.

$$e^{-x} = e^x$$

$$e^{-2x} = 1$$

$$-2x = 0$$

$$x = 0$$

There is exactly one real solution, so the claim of no real solution is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 100,
    solution_overview: `Five independent natural-exponential equations. Linear expressions in the exponent reduce to one step after matching exponents or isolating $e^x$; shifted logarithms require a positive argument.`,
  },
  {
    id: `math-4-101`,
    case_id: `MATH 4.101`,
    title: `Base-$2$ and base-$3$ logarithmic equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_2 x = 5$, the sum of all admissible roots equals $1$.`,
      `For $\log_3 x = 2$, no positive admissible root exists.`,
      `For $\log_3(x-1) = 2$, the product of all admissible roots equals $10$.`,
      `For $\ln(1-x) = 0$, exactly one positive admissible root exists.`,
      `For $\ln x = 0$, the sum of all admissible roots equals $4$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The function $\\log_2 x$ is strictly increasing for $x > 0$.

$$\\log_2 x = 5$$

$$x = 2^5$$

Domain $x > 0$ keeps exactly one admissible root.`,
      `**B.** → False

Convert to exponential form: $x = 3^2 = 9 > 0$.

$$\\log_3 x = 2$$

$$x = 9$$

No negative value satisfies the domain $x > 0$, so the claim is false.`,
      `**C.** → True

Convert with $x - 1 > 0$.

$$\\log_3(x-1) = 2$$

$$x - 1 = 3^2 = 9$$

$$x = 10$$

Also $10 > 1$, so exactly one admissible root exists.`,
      `**D.** → True

Need $1 - x > 0$ and $\\ln(1-x) = 0$ gives $1 - x = 1$.

$$1 - x = 1$$

$$x = 0$$

Also $1 - 0 = 1 > 0$, so exactly one admissible root exists.`,
      `**E.** → False

In the domain $x > 0$, $\\ln x = 0$ forces $x = 1$.

$$\\ln x = 0$$

$$x = 1$$

Only one admissible real value exists.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 101,
    solution_overview: `Five independent logarithmic equations. A logarithm $\\log_a u$ is defined exactly when $u > 0$ and $a > 0$, $a \\neq 1$; strict monotonicity gives at most one admissible root.`,
  },
  {
    id: `math-4-102`,
    case_id: `MATH 4.102`,
    title: `Shifted natural logs and domain boundaries`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\ln(x+1) = 2$, the sum of all admissible roots equals $1$.`,
      `For $\ln(2x-1) = 3$, exactly one positive admissible root exists.`,
      `For $\ln(5-x) = \ln 2$, the product of all admissible roots equals $3$.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The function $\\ln u$ is strictly increasing for $u > 0$.

$$\\ln(x+1) = 2$$

$$x + 1 = e^2$$

Also $x + 1 > 0$, so exactly one admissible root exists.`,
      `**B.** → True

Need $2x - 1 > 0$ and $\\ln(2x-1) = 3$ gives $2x - 1 = e^3$.

$$2x - 1 = e^3$$

$$x = \\frac{e^3 + 1}{2}$$

That value exceeds $\\frac{1}{2}$, so exactly one admissible root exists.`,
      `**C.** → True

Both arguments must be positive, and equal logs force equal arguments.

$$\\ln(5-x) = \\ln 2$$

$$5 - x = 2$$

$$x = 3$$

Also $5 - 3 = 2 > 0$, giving exactly one admissible root.`,
      `**D.** → False

The argument $x - 3$ must be positive before $\\log_2$ is defined.

$$x - 3 > 0$$

$$x > 3$$

Solving gives $x = 5$, which is not $\\le 3$. No admissible root satisfies $x \\le 3$.`,
      `**E.** → True

Both factors must be positive.

$$x > 0$$

$$x - 1 > 0$$

Together these force $x > 1$ for any valid solution.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 102,
    solution_overview: `Five independent $\\ln$ equations. Shifts move the domain boundary; state the admissible set for each argument before solving or counting roots.`,
  },
  {
    id: `math-4-103`,
    case_id: `MATH 4.103`,
    title: `Product of logs and squared arguments`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^2 + 3x - 10 = 0$, the sum of all admissible roots equals $2$.`,
      `For $\log((x+2)(x-1)) = 1$, no positive admissible root exists.`,
      `For $\ln(x^2) = 0$, the product of all admissible roots equals $1$.`,
      `For $x - 9 = 10$, precisely one real value of the exponent works.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Use $\\log a + \\log b = \\log(ab)$ on base $10$ with $x > 0$ and $x + 3 > 0$.

$$\\log(x(x+3)) = 1$$

$$x^2 + 3x = 10$$

$$x^2 + 3x - 10 = 0$$

$$(x+5)(x-2) = 0$$

Domain requires $x > 0$, leaving exactly one positive root.`,
      `**B.** → False

Use the product rule with $x + 2 > 0$ and $x - 1 > 0$, so $x > 1$.

$$\\log((x+2)(x-1)) = 1$$

$$(x+2)(x-1) = 10$$

$$x^2 + x - 2 = 10$$

$$x^2 + x - 12 = 0$$

$$(x+4)(x-3) = 0$$

Only $x = 3$ is admissible, and $3 > 1$. No value with $x \\le 1$ works.`,
      `**C.** → True

The rule $\\ln(x^2) = 0$ gives $x^2 = 1$ with $x^2 > 0$.

$$x^2 = 1$$

$$x = 1 \\text{ or } x = -1$$

Both satisfy $x^2 > 0$, so there are exactly two real solutions.`,
      `**D.** → True

Translate to exponential form with $x - 9 > 0$.

$$x - 9 = 10$$

$$x = 19$$

Also $19 - 9 = 10 > 0$, so exactly one admissible root exists.`,
      `**E.** → False

The argument $x - 4$ must be positive.

$$x - 4 > 0$$

$$x > 4$$

The admissible root is $x = 12$, which is not $\\le 4$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 103,
    solution_overview: `Five independent logarithmic equations. Product rules combine logs only when every argument is positive; even powers in the argument can yield symmetric roots after the domain check.`,
  },
  {
    id: `math-4-104`,
    case_id: `MATH 4.104`,
    title: `Matching arguments and squared log inputs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_5 x = 2$, the sum of all admissible roots equals $1$.`,
      `For $\log_2(x^2 - 1) = 3$, exactly one positive admissible root exists.`,
      `For $\log_{10} x = 2$, the product of all admissible roots equals $4$.`,
      `For $\ln(x^2) = 2$, exactly one positive admissible root exists.`,
      `For $\log_2 x = \log_2 8$, the sum of all admissible roots equals $11$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Convert to exponential form with $x > 0$.

$$\\log_5 x = 2$$

$$x = 5^2 = 25$$

Strict monotonicity gives exactly one positive root.`,
      `**B.** → True

Need $x^2 - 1 > 0$, so $|x| > 1$.

$$\\log_2(x^2 - 1) = 3$$

$$x^2 - 1 = 2^3 = 8$$

$$x^2 = 9$$

Both $x = 3$ and $x = -3$ satisfy the domain and the equation, giving exactly two real solutions.`,
      `**C.** → False

On domain $x > 0$,

$$\\log_{10} x = 2$$

$$x = 10^2 = 100$$

The unique admissible root exceeds $1$, not less than $1$.`,
      `**D.** → True

The rule $\\ln(x^2) = 2$ gives $x^2 = e^2$ with $x^2 > 0$.

$$x^2 = e^2$$

$$x = e \\text{ or } x = -e$$

Both satisfy $x^2 > 0$, so there are exactly two real solutions.`,
      `**E.** → False

Equal logs with the same base force equal arguments.

$$\\log_2 x = \\log_2 8$$

$$x = 8$$

Domain $x > 0$ is satisfied, and the solution is unique.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 104,
    solution_overview: `Five independent log equations. Matching arguments or converting to exponential form tests whether you respect the domain and the one-to-one property of logarithms.`,
  },
  {
    id: `math-4-105`,
    case_id: `MATH 4.105`,
    title: `Change of base inside equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_4 x = 3$, the sum of all admissible roots equals $1$.`,
      `For $\log_3 x = 2$, the equation has no real solution.`,
      `For $\log_4 x = 2$, the product of all admissible roots equals $1$.`,
      `For $\ln(e^x) = 2$, exactly one positive admissible root exists.`,
      `For $10^x = 0.01 = 10^{-2}$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The left-hand side is $\\log_4 x$ by change of base.

$$\\log_4 x = 3$$

$$x = 4^3 = 64$$

Exactly one positive root exists.`,
      `**B.** → True

Convert to exponential form.

$$\\log_3 x = 2$$

$$x = 3^2 = 9$$

The unique positive root is $9$, which is not greater than $10$. No admissible solution satisfies $x > 10$.`,
      `**C.** → True

On domain $x > 0$,

$$\\log_4 x = 2$$

$$x = 4^2 = 16$$

Strict monotonicity gives exactly one positive root.`,
      `**D.** → True

The natural logarithm and exponential are inverse functions on $\\mathbb{R}$.

$$\\ln(e^x) = 2$$

$$x = 2$$

Exactly one real solution exists.`,
      `**E.** → False

Evaluate the defining exponential equation.

$$\\log_{10}(0.01) = x$$

$$10^x = 0.01 = 10^{-2}$$

$$x = -2$$

The unique real solution is negative, not positive.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 105,
    solution_overview: `Five independent change-of-base equations. Rewrite every logarithm in one base or convert to exponential form before equating arguments.`,
  },
  {
    id: `math-4-106`,
    case_id: `MATH 4.106`,
    title: `Cross-base logs and combined $\\log$ equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_2 x = \frac{1}{3}$, the sum of all admissible roots equals $1$.`,
      `For $\log_{10} x = 2$, exactly one positive admissible root exists.`,
      `For $\log_9 x = \frac{1}{2}$, the product of all admissible roots equals $1$.`,
      `For $\log_2 x = 3$, no positive admissible root exists.`,
      `For $\log(2x) = 1$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Evaluate the right-hand side: $\\log_8 2 = \\frac{1}{3}$.

$$\\log_2 x = \\frac{1}{3}$$

$$x = 2^{1/3} > 0$$

Exactly one positive root exists.`,
      `**B.** → True

The base-$10$ logarithm is one-to-one on $x > 0$.

$$\\log_{10} x = 2$$

$$x = 10^2 = 100$$

Exactly one admissible root exists.`,
      `**C.** → True

Convert to exponential form with $x > 0$.

$$\\log_9 x = \\frac{1}{2}$$

$$x = 9^{1/2} = 3$$

Exactly one positive root exists.`,
      `**D.** → False

On domain $x > 0$,

$$\\log_2 x = 3$$

$$x = 2^3 = 8$$

The unique admissible root exceeds $1$, not less than $1$.`,
      `**E.** → True

Use $\\log a + \\log b = \\log(ab)$ on base $10$ with $x > 0$.

$$\\log(2x) = 1$$

$$2x = 10$$

$$x = 5 > 0$$

Exactly one positive admissible root exists.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 106,
    solution_overview: `Five independent change-of-base and product-log equations. Evaluate or rewrite each side in a common form before applying monotonicity.`,
  },
  {
    id: `math-4-107`,
    case_id: `MATH 4.107`,
    title: `Domain restrictions before solving logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $x = \pm \sqrt{10}$, the product of all admissible roots equals $5$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
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

Matching arguments gives $5 - x = 2$, and the admissible root satisfies $x < 5$.`,
      `**C.** → False

The rule $\\log(x^2) = 1$ gives $x^2 = 10$ with $x^2 > 0$.

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
    solution_overview: `Five independent domain claims. State the admissible set for each logarithmic argument before solving; extraneous algebra must be filtered by the domain.`,
  },
  {
    id: `math-4-108`,
    case_id: `MATH 4.108`,
    title: `Radical logs, squared $\\ln$, and absolute value`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $u = 2x - 5 > 0$, the sum of all admissible roots equals $2$.`,
      `For $\ln(x+4) = 4$, exactly one positive admissible root exists.`,
      `For $\ln x = -2$, the product of all admissible roots equals $1$.`,
      `For $\ln x = -\ln x$, exactly one positive admissible root exists.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The rule $\\ln u = 0$ iff $u = 1$ with $u = 2x - 5 > 0$.

$$2x - 5 = 1$$

Also $2x - 5 > 0$, giving exactly one admissible root.`,
      `**B.** → True

Square both sides with $x + 4 > 0$ and $\\ln(x+4) \\ge 0$.

$$\\ln(x+4) = 4$$

$$x + 4 = e^4$$

Also $x + 4 > 0$, so exactly one admissible root exists.`,
      `**C.** → True

Take square roots on domain $x > 0$: $\\ln x = 2$ or $\\ln x = -2$.

$$x = e^2 \\text{ or } x = e^{-2}$$

Both are positive and lie in the domain $x > 0$, giving exactly two positive solutions.`,
      `**D.** → True

Combine logarithms on the domain $x > 0$.

$$\\ln x = -\\ln x$$

$$2\\ln x = 0$$

$$\\ln x = 0$$

Exactly one positive admissible root exists.`,
      `**E.** → False

Domain requires $2x - 5 > 0$.

$$2x - 5 > 0$$

$$x > \\frac{5}{2}$$

The admissible root exceeds $2$, so no value with $x \\le 2$ works.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `Five independent equations involving shifted logs, square roots of logs, and even powers of $\\ln x$. Check the domain before and after squaring.`,
  },
  {
    id: `math-4-109`,
    case_id: `MATH 4.109`,
    title: `Product logs, quadratic exponentials, and mixed bases`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_2((x-1)(x-3)) = 2$, the sum of all admissible roots equals $1$.`,
      `For $u = e^x > 0$, precisely one real value of the exponent works.`,
      `For $\ln|x| = 0$, the product of all admissible roots equals $1$.`,
      `For $\log(x^2 - 1) = 1$, exactly one positive admissible root exists.`,
      `For $\left(\frac{3}{2}\right)^x = 3$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Use the product rule with $x > 3$.

$$\\log_2((x-1)(x-3)) = 2$$

$$(x-1)(x-3) = 4$$

$$x^2 - 4x + 3 = 4$$

$$x^2 - 4x - 1 = 0$$

$$x = 2 \\pm \\sqrt{5}$$

Only $x = 2 + \\sqrt{5}$ exceeds $3$, so exactly one admissible root exists.`,
      `**B.** → True

Substitute $u = e^x > 0$.

$$u^2 - 5u + 6 = 0$$

$$(u-2)(u-3) = 0$$

Each positive $u$ gives exactly one real $x = \\ln u$, so there are two real solutions.`,
      `**C.** → True

The rule $\\ln|x| = 0$ gives $|x| = 1$ with $|x| > 0$.

$$|x| = 1$$

$$x = 1 \\text{ or } x = -1$$

Both satisfy $|x| > 0$, giving exactly two real solutions.`,
      `**D.** → True

Need $x^2 - 1 > 0$, so $|x| > 1$.

$$\\log(x^2 - 1) = 1$$

$$x^2 - 1 = 10$$

$$x^2 = 11$$

Both $x = \\sqrt{11}$ and $x = -\\sqrt{11}$ satisfy the domain, giving exactly two real solutions.`,
      `**E.** → True

Divide by $2^x > 0$ and take natural logarithms.

$$2^x = 3^{x-1}$$

$$\\left(\\frac{3}{2}\\right)^x = 3$$

The function $\\left(\\frac{3}{2}\\right)^x$ is strictly increasing, so exactly one real crossing exists.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 109,
    solution_overview: `Five independent harder equations. Product rules and substitution $u = e^x$ are standard; mixed-base exponentials have a unique crossing by monotonicity.`,
  },
  {
    id: `math-4-110`,
    case_id: `MATH 4.110`,
    title: `Quadratic in $e^x$, reciprocal exponentials, and variable bases`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $u = 2^x$, the sum of all admissible roots equals $2$.`,
      `For $u = 2^x > 0$, precisely one real value of the exponent works.`,
      `For $u = 2^x$, the product of all admissible roots equals $2$.`,
      `For $\log_2 x + \frac{\log_2 x}{2} = 3$, exactly one positive admissible root exists.`,
      `For $x = \pm \sqrt{e + 1}$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Substitute $u = e^x > 0$.

$$u^2 - 7u + 12 = 0$$

$$(u-3)(u-4) = 0$$

Each positive $u$ gives exactly one real $x = \\ln u$, so there are two real solutions.`,
      `**B.** → True

Let $u = 2^x > 0$ and multiply by $u$.

$$3u + \\frac{1}{u} = 5$$

$$3u^2 - 5u + 1 = 0$$

Both roots $\\frac{5 \\pm \\sqrt{13}}{6}$ are positive, giving two distinct real values of $x$.`,
      `**C.** → True

By definition, $\\log_x 8 = 3$ means $x^3 = 8$ with $x > 0$ and $x \\neq 1$.

$$x^3 = 8$$

$$x = 2$$

Exactly one positive admissible root exists.`,
      `**D.** → True

Write $\\log_4 x = \\frac{\\log_2 x}{2}$.

$$\\log_2 x + \\frac{\\log_2 x}{2} = 3$$

$$\\frac{3}{2}\\log_2 x = 3$$

$$\\log_2 x = 2$$

Exactly one positive root exists.`,
      `**E.** → False

Need $x^2 - 1 > 0$.

$$\\ln(x^2 - 1) = 1$$

$$x^2 - 1 = e$$

$$x = \\pm \\sqrt{e + 1}$$

Both satisfy the domain, giving exactly two real solutions, not more than two.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 110,
    solution_overview: `Five independent advanced equations. Substitute $u = e^x$ or $u = 2^x$ for quadratics; variable-base logs convert to exponential form with base constraints.`,
  },
  {
    id: `math-4-111`,
    case_id: `MATH 4.111`,
    title: `Factored exponentials and matched log arguments`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2^x(2 - 1) = 16$, the sum of all admissible roots equals $2$.`,
      `For $x + 4 = 2x - 1$, precisely one real value of the exponent works.`,
      `For $u = e^x$, the product of all admissible roots equals $2$.`,
      `For $25^{x-1} = 5^{2x-2}$, the equation has no real solution.`,
      `For $3x + 1 = 7$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Factor $2^x$.

$$2^x(2 - 1) = 16$$

$$2^x = 16$$

Strict monotonicity of base $2$ gives exactly one real root.`,
      `**B.** → True

Equal logs with the same base force equal arguments, with $x + 4 > 0$ and $2x - 1 > 0$.

$$x + 4 = 2x - 1$$

$$x = 5$$

Also $5 > \\frac{1}{2}$, so exactly one admissible root exists.`,
      `**C.** → True

Multiply by $e^x > 0$ and substitute $u = e^x$.

$$u - \\frac{3}{u} = 2$$

$$u^2 - 2u - 3 = 0$$

$$(u-3)(u+1) = 0$$

Only $u = 3 > 0$ is valid, giving exactly one real solution.`,
      `**D.** → True

Rewrite $25^{x-1} = 5^{2x-2}$.

$$5^{2x} = 5^{2x-2}$$

$$2x = 2x - 2$$

$$0 = -2$$

This is impossible, so there is no real solution.`,
      `**E.** → True

Equal natural logs force equal arguments with $3x + 1 > 0$.

$$3x + 1 = 7$$

$$x = 2$$

Also $2 > -\\frac{1}{3}$, giving exactly one admissible root.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 111,
    solution_overview: `Five independent equations. Factor common exponential terms first; matched logarithms reduce to linear equations after stating the domain.`,
  },
  {
    id: `math-4-112`,
    case_id: `MATH 4.112`,
    title: `Difference of logs and product log on base $2$`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_2((x+1)(x-1)) = 3$, the sum of all admissible roots equals $1$.`,
      `For $x + 5 = 2x$, precisely one real value of the exponent works.`,
      `For $2^{2x} = 2^{x+3}$, the product of all admissible roots equals $2$.`,
      `For $x - 2 = 2x - 5$, precisely one real value of the exponent works.`,
      `For $10^{2x} = 1$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Use the product rule with $x > 1$.

$$\\log_2((x+1)(x-1)) = 3$$

$$x^2 - 1 = 8$$

$$x^2 = 9$$

Only $x = 3$ exceeds $1$, giving exactly one admissible root.`,
      `**B.** → True

Equal base-$10$ logs force equal arguments with $x + 5 > 0$ and $2x > 0$.

$$x + 5 = 2x$$

$$x = 5$$

Also $5 > 0$, giving exactly one positive admissible root.`,
      `**C.** → True

Write $4 = 2^2$.

$$2^{2x} = 2^{x+3}$$

$$2x = x + 3$$

Strict monotonicity on base $2$ gives exactly one real root.`,
      `**D.** → True

Equal natural logs force equal arguments with $x - 2 > 0$ and $2x - 5 > 0$.

$$x - 2 = 2x - 5$$

$$x = 3$$

Also $3 - 2 = 1 > 0$ and $2(3) - 5 = 1 > 0$, giving exactly one admissible root.`,
      `**E.** → True

Divide by $10^x > 0$.

$$10^x = 10^{-x}$$

$$10^{2x} = 1$$

$$2x = 0$$

Exactly one real solution exists.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 112,
    solution_overview: `Five independent equations combining product logs, matched arguments, and same-base exponentials. Domain constraints often reduce multiple algebraic roots to one admissible value.`,
  },
  {
    id: `math-4-113`,
    case_id: `MATH 4.113`,
    title: `Cross-base equality and exponential-log pairs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $1 = \left(\frac{3}{2}\right)^x$, the sum of all admissible roots equals $2$.`,
      `For $1 = \left(\frac{2}{3}\right)^x$, more than one real exponent satisfies the equation.`,
      `The equation has exactly one real solution.`,
      `For $f'(x) = \frac{1}{x} + 1 > 0$, precisely one real value of the exponent works.`,
      `For $\ln x = 1$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Divide by $2^x > 0$.

$$1 = \\left(\\frac{3}{2}\\right)^x$$

Strict monotonicity of $\\left(\\frac{3}{2}\\right)^x$ gives exactly one real solution, namely at $x = 0$.`,
      `**B.** → False

Divide by $\\left(\\frac{1}{2}\\right)^x > 0$.

$$1 = \\left(\\frac{2}{3}\\right)^x$$

Strict monotonicity gives exactly one real solution at $x = 0$, not more than one.`,
      `**C.** → True

For every real $x$, the inequality $e^x \\ge x + 1$ holds with equality only at $x = 0$, but at $x = 0$ we get $e^0 = 1 \\ne 0$.

So $e^x - x \\ge 1 > 0$ for all real $x$, and there is no real solution.`,
      `**D.** → True

Let $f(x) = \\ln x + x - 1$ on $x > 0$.

$$f'(x) = \\frac{1}{x} + 1 > 0$$

So $f$ is strictly increasing. Since $f(1) = 0$, exactly one root exists on $x > 0$.`,
      `**E.** → True

Square with $x > 0$ and $\\ln x \\ge 0$.

$$\\ln x = 1$$

$$x = e$$

Exactly one admissible root exists.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 113,
    solution_overview: `Five independent cross-base and exponential-log equations. Dividing by a positive exponential reduces comparisons to a single monotonic power; some transcendental equations need calculus or inequalities.`,
  },
  {
    id: `math-4-114`,
    case_id: `MATH 4.114`,
    title: `Nested logs, scaled exponentials, and shifted base-$3$ logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_2((x-1)(x+1)) = 3$, the sum of all admissible roots equals $1$.`,
      `For $e^{2x} = 4e^x$, precisely one real value of the exponent works.`,
      `For $3^x = 3^3$, the product of all admissible roots equals $2$.`,
      `For $2x - 1 = 3^2 = 9$, precisely one real value of the exponent works.`,
      `For $x^2 - 4 = 5$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Use the product rule with $x > 1$.

$$\\log_2((x-1)(x+1)) = 3$$

$$x^2 - 1 = 8$$

$$x^2 = 9$$

Only $x = 3$ exceeds $1$, giving exactly one admissible root.`,
      `**B.** → True

Divide by $e^x > 0$.

$$e^{2x} = 4e^x$$

$$e^x = 4$$

Strict monotonicity of $e^x$ gives exactly one real root.`,
      `**C.** → True

Divide by $2$.

$$3^x = 27$$

$$3^x = 3^3$$

Strict monotonicity on base $3$ gives exactly one real root.`,
      `**D.** → True

Convert with $2x - 1 > 0$.

$$2x - 1 = 3^2 = 9$$

$$x = 5$$

Also $5 > \\frac{1}{2}$, giving exactly one admissible root.`,
      `**E.** → True

Equal natural logs force equal arguments with $x^2 - 4 > 0$.

$$x^2 - 4 = 5$$

$$x^2 = 9$$

Both $x = 3$ and $x = -3$ satisfy $x^2 - 4 > 0$, giving exactly two real solutions.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 114,
    solution_overview: `Five independent harder equations. Product logs on shifted arguments often yield a quadratic filtered by the domain; scaling isolates a single exponential term.`,
  },
  {
    id: `math-4-115`,
    case_id: `MATH 4.115`,
    title: `Variable-base logs and mixed-base exponentials`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_x 8 = 3$, the sum of all admissible roots equals $1$.`,
      `For $\log_2 x + \frac{\log_2 x}{2} = 3$, exactly one positive admissible root exists.`,
      `For $\left(\frac{3}{2}\right)^x = 3$, the product of all admissible roots equals $2$.`,
      `For $u = e^x > 0$, precisely one real value of the exponent works.`,
      `For $x^2 - 1 = 10$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

By definition, $\\log_x 8 = 3$ means $x^3 = 8$ with $x > 0$ and $x \\neq 1$.

$$x^3 = 8$$

Exactly one positive admissible root exists.`,
      `**B.** → True

Write $\\log_4 x = \\frac{\\log_2 x}{2}$ and combine on base $2$.

$$\\log_2 x + \\frac{\\log_2 x}{2} = 3$$

$$\\frac{3}{2}\\log_2 x = 3$$

Exactly one positive root exists.`,
      `**C.** → True

Divide by $2^x > 0$.

$$\\left(\\frac{3}{2}\\right)^x = 3$$

The left side is strictly increasing, so exactly one real crossing exists.`,
      `**D.** → True

Substitute $u = e^x > 0$.

$$u^2 - 7u + 12 = 0$$

$$(u-3)(u-4) = 0$$

Two positive values of $u$ give two real values of $x$.`,
      `**E.** → True

Need $x^2 - 1 > 0$.

$$x^2 - 1 = 10$$

$$x^2 = 11$$

Both $\\pm \\sqrt{11}$ satisfy $|x| > 1$, giving exactly two real solutions.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 115,
    solution_overview: `Five independent exam-level equations: variable-base logarithms, combined bases, mixed exponentials, quadratic substitution in $e^x$, and domain-filtered log quadratics.`,
  },
  {
    id: `math-4-116`,
    case_id: `MATH 4.116`,
    title: `Reciprocal-sum exponentials and shifted log quadratics`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $u = 2^x > 0$, the sum of all admissible roots equals $2$.`,
      `For $u = 2^x$, precisely one real value of the exponent works.`,
      `For $u = 2^x$, the product of all admissible roots equals $2$.`,
      `For $5^{2x} = 5^{2x-2}$, the equation has no real solution.`,
      `For $u = 2^x$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $u = 2^x > 0$ and multiply by $u$.

$$3u^2 - 5u + 1 = 0$$

Both roots are positive, giving two distinct real values of $x$.`,
      `**B.** → True

Need $x^2 - 1 > 0$.

$$x^2 - 1 = e$$

Both $\\pm \\sqrt{e + 1}$ satisfy the domain, giving exactly two real solutions.`,
      `**C.** → True

Arguments require $x > 3$.

$$x - 1 > 0$$

$$x - 3 > 0$$

Any value with $x \\le 3$ fails the domain before solving begins.`,
      `**D.** → True

Rewrite on base $5$.

$$5^{2x} = 5^{2x-2}$$

$$2x = 2x - 2$$

This is impossible, so there is no real solution.`,
      `**E.** → False

Multiply by $e^x > 0$ and set $u = e^x$.

$$u^2 - 2u - 3 = 0$$

Only $u = 3 > 0$ is valid, giving exactly one real solution, not more than one.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 116,
    solution_overview: `Five independent hard equations. Reciprocal exponentials become quadratics in $u = 2^x$; product logs need domain $x > 3$ before counting admissible roots.`,
  },
  {
    id: `math-4-117`,
    case_id: `MATH 4.117`,
    title: `Nested radicals, absolute logs, and base-$9$ logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\ln(x+4) = 4$, the sum of all admissible roots equals $1$.`,
      `For $\ln|x| = 0$, exactly one positive admissible root exists.`,
      `For $u = e^x > 0$, the product of all admissible roots equals $2$.`,
      `For $x = 9^{1/2} = 3$, precisely one real value of the exponent works.`,
      `For $x^2 - 1 = 8$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Square with $x + 4 > 0$ and $\\ln(x+4) \\ge 0$.

$$\\ln(x+4) = 4$$

$$x + 4 = e^4$$

Exactly one admissible root exists.`,
      `**B.** → True

The rule $\\ln|x| = 0$ gives $|x| = 1$ with $|x| > 0$.

$$x = 1 \\text{ or } x = -1$$

Both are valid, giving exactly two real solutions.`,
      `**C.** → True

Substitute $u = e^x > 0$.

$$u^2 - 5u + 6 = 0$$

$$(u-2)(u-3) = 0$$

Two positive values of $u$ give two real values of $x$.`,
      `**D.** → True

Convert to exponential form with $x > 0$.

$$x = 9^{1/2} = 3$$

Also $3 \\neq 1$, giving exactly one positive admissible root.`,
      `**E.** → False

Use the product rule with $x > 1$.

$$x^2 - 1 = 8$$

$$x^2 = 9$$

Only $x = 3$ exceeds $1$, giving exactly one admissible root, not two.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 117,
    solution_overview: `Five independent hard equations mixing radical logs, absolute-value logs, quadratic substitution in $e^x$, and product logs filtered by the domain.`,
  },
  {
    id: `math-4-118`,
    case_id: `MATH 4.118`,
    title: `Variable base $x$, combined $\\log_2$ and $\\log_4$, and cross-base powers`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_x 27 = 3$, the sum of all admissible roots equals $1$.`,
      `For $\log_3 x + \frac{\log_3 x}{2} = 2$, exactly one positive admissible root exists.`,
      `For $u = 2^x > 0$, the product of all admissible roots equals $2$.`,
      `For $3^{x+1} = 3^{2x-4}$, precisely one real value of the exponent works.`,
      `For $\log\left(\frac{x+1}{x-1}\right) = 1$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

By definition, $\\log_x 27 = 3$ means $x^3 = 27$ with $x > 0$ and $x \\neq 1$.

$$x^3 = 27$$

Exactly one positive admissible root exists.`,
      `**B.** → True

Write $\\log_9 x = \\frac{\\log_3 x}{2}$.

$$\\log_3 x + \\frac{\\log_3 x}{2} = 2$$

$$\\frac{3}{2}\\log_3 x = 2$$

Exactly one positive root exists.`,
      `**C.** → True

Let $u = 2^x > 0$ and multiply by $u$.

$$2u^2 - 3u + 1 = 0$$

$$(2u-1)(u-1) = 0$$

Both $u = 1$ and $u = \\frac{1}{2}$ are positive, giving two real values of $x$.`,
      `**D.** → True

Rewrite $9^{x-2} = 3^{2x-4}$.

$$3^{x+1} = 3^{2x-4}$$

$$x + 1 = 2x - 4$$

Exactly one real root exists.`,
      `**E.** → True

Use $\\log a - \\log b = \\log(a/b)$ with $x + 1 > 0$ and $x - 1 > 0$.

$$\\log\\left(\\frac{x+1}{x-1}\\right) = 1$$

$$\\frac{x+1}{x-1} = 10$$

Exactly one admissible root with $x > 1$ exists.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 118,
    solution_overview: `Five independent exam-level equations: variable-base logs, combined logs on different powers of the same base, reciprocal-sum exponentials, matched base-$3$ powers, and quotient log rules.`,
  },
  {
    id: `math-4-119`,
    case_id: `MATH 4.119`,
    title: `Quadratic exponentials and difference-of-logs`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $u = e^x > 0$, the sum of all admissible roots equals $2$.`,
      `For $x \ln 5 = (x+1)\ln 2$, exactly one positive admissible root exists.`,
      `For $\log_x 16 = 2$, the product of all admissible roots equals $4$.`,
      `For $x^2 - 4 = 5$, precisely one real value of the exponent works.`,
      `For $\log_2 x + \frac{\log_2 x}{3} = \frac{4}{3}$, the sum of all admissible roots equals $1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Substitute $u = e^x > 0$.

$$u^2 - 9u + 20 = 0$$

$$(u-4)(u-5) = 0$$

Two positive values of $u$ give two real values of $x$.`,
      `**B.** → True

Take natural logarithms with $5^x > 0$ and $2^{x+1} > 0$.

$$x \\ln 5 = (x+1)\\ln 2$$

The coefficient of $x$ is nonzero, so exactly one real solution exists.`,
      `**C.** → True

By definition, $\\log_x 16 = 2$ means $x^2 = 16$ with $x > 0$ and $x \\neq 1$.

$$x = 4$$

Exactly one positive admissible root exists.`,
      `**D.** → True

Equal natural logs force equal arguments with $x^2 - 4 > 0$.

$$x^2 - 4 = 5$$

$$x^2 = 9$$

Both $x = 3$ and $x = -3$ satisfy the domain, giving exactly two real solutions.`,
      `**E.** → True

Write $\\log_8 x = \\frac{\\log_2 x}{3}$.

$$\\log_2 x + \\frac{\\log_2 x}{3} = \\frac{4}{3}$$

$$\\frac{4}{3}\\log_2 x = \\frac{4}{3}$$

Exactly one positive root exists.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 119,
    solution_overview: `Five independent hard equations: larger quadratic in $e^x$, logarithmic form of mixed-base equality, variable-base logs, matched shifted logs, and combined $\\log_2$ with $\\log_8$.`,
  },
  {
    id: `math-4-120`,
    case_id: `MATH 4.120`,
    title: `Mixed exam set: hardest exponential and log equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\log_x 8 = 3$, the sum of all admissible roots equals $1$.`,
      `For $\log_2 x + \frac{\log_2 x}{2} = 3$, exactly one positive admissible root exists.`,
      `For $\left(\frac{3}{2}\right)^x = 3$, the product of all admissible roots equals $2$.`,
      `For $u = e^x > 0$, precisely one real value of the exponent works.`,
      `For $u = 2^x > 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

By definition, $\\log_x 8 = 3$ means $x^3 = 8$ with $x > 0$ and $x \\neq 1$.

$$x^3 = 8$$

Exactly one positive admissible root exists.`,
      `**B.** → True

Write $\\log_4 x = \\frac{\\log_2 x}{2}$.

$$\\log_2 x + \\frac{\\log_2 x}{2} = 3$$

$$\\frac{3}{2}\\log_2 x = 3$$

Exactly one positive root exists.`,
      `**C.** → True

Divide by $2^x > 0$.

$$\\left(\\frac{3}{2}\\right)^x = 3$$

Strict monotonicity gives exactly one real crossing.`,
      `**D.** → True

Substitute $u = e^x > 0$.

$$u^2 - 7u + 12 = 0$$

$$(u-3)(u-4) = 0$$

Two positive values of $u$ give two real values of $x$.`,
      `**E.** → True

Let $u = 2^x > 0$ and multiply by $u$.

$$3u^2 - 5u + 1 = 0$$

Both roots $\\frac{5 \\pm \\sqrt{13}}{6}$ are positive, giving two distinct real values of $x$.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 120,
    solution_overview: `Five independent closing 4.4 equations at full difficulty: variable-base logs, combined bases, mixed exponentials, quadratic substitution in $e^x$, and reciprocal-sum exponentials in $2^x$.`,
  },
];
