/**
 * Chapter 4 — subsection 4.4 "Exponential and logarithmic equations".
 * Exam format: five True/False claims per task, written as closed prose sentences.
 * Claims are qualitative on purpose (bounds, counts, parity, admissibility), so a
 * candidate cannot verify them by substituting a number that the statement itself
 * hands over. Explanations follow MATH 13.18: name the rule in words, show the
 * algebra in display formulas, then close with the verdict.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_EXP_LOG: MathTask[] = [
  {
    id: `math-4-94`,
    case_id: `MATH 4.94`,
    title: `Same-base exponential claims`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $2^{x} = 8$ is an odd number.`,
      `The equation $3^{x+1} = 81$ has a positive integer solution.`,
      `The solution of $5^{2x} = 125$ is an integer.`,
      `The solution of $2^{x} = \\frac{1}{16}$ is negative.`,
      `The equation $7^{x-1} = 1$ has no solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Both sides become powers of one base, because $8 = 2^{3}$.

$$2^{x} = 2^{3}$$

An exponential function with base $2$ takes every value at most once, so equal powers force equal exponents:

$$x = 3$$

That value is odd, so the statement is True.`,
      `**B.** → True

Write the right side as a power of $3$, since $81 = 3^{4}$.

$$3^{x+1} = 3^{4}$$

$$x + 1 = 4$$

$$x = 3$$

The solution is a positive whole number, so the statement is True.`,
      `**C.** → False

Here $125 = 5^{3}$, so the equation reads

$$5^{2x} = 5^{3}$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

A half is not a whole number, so the statement is False.`,
      `**D.** → True

A reciprocal power carries a negative exponent, because $\\frac{1}{16} = 2^{-4}$.

$$2^{x} = 2^{-4}$$

$$x = -4$$

The exponent that solves the equation is below zero, so the statement is True.`,
      `**E.** → False

Any non-zero base raised to the power zero equals one, so $1 = 7^{0}$.

$$7^{x-1} = 7^{0}$$

$$x - 1 = 0$$

A solution does exist, so the claim of no solution is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 94,
    solution_overview: `Every claim rewrites both sides as powers of one base. Once the bases agree, the exponents must agree: $a^{m}=a^{n}$ with $a>0$ and $a \\neq 1$ forces $m=n$.`,
  },
  {
    id: `math-4-95`,
    case_id: `MATH 4.95`,
    title: `Reading logarithmic equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log_{2} x = 5$ is larger than $30$.`,
      `The equation $\\ln x = 0$ has no solution, because a logarithm never vanishes.`,
      `The solution of $\\log_{3}(x - 2) = 2$ is a two-digit integer.`,
      `The solution of $\\log_{4} x = \\frac{1}{2}$ is greater than $3$.`,
      `In the equation $\\log_{x} 81 = 4$ the unknown base is smaller than $4$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

A logarithmic equation is read backwards through its definition: $\\log_{a} x = c$ means $x = a^{c}$.

$$x = 2^{5} = 32$$

That value sits above the stated threshold, so the statement is True.`,
      `**B.** → False

The natural logarithm vanishes exactly at the argument one, since any base to the power zero is one.

$$x = e^{0} = 1$$

A perfectly legal solution exists, so the statement is False.`,
      `**C.** → True

Undo the logarithm first, then the shift inside the bracket.

$$x - 2 = 3^{2} = 9$$

$$x = 11$$

The result has two digits, so the statement is True.`,
      `**D.** → False

A logarithm equal to one half means a square root of the base.

$$x = 4^{1/2} = 2$$

Two lies below the stated bound, so the statement is False.`,
      `**E.** → True

Here the base is unknown, so the definition gives a power equation for it.

$$x^{4} = 81$$

Only a positive base different from one is admissible, so

$$x = 3$$

That base is under the stated bound, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 95,
    solution_overview: `Each item applies the definition $\\log_{a} x = c \\iff x = a^{c}$. When the unknown sits in the base, the same definition produces a power equation instead of an exponential one.`,
  },
  {
    id: `math-4-96`,
    case_id: `MATH 4.96`,
    title: `Powers of two and three on both sides`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $4^{x} = 8$ is not an integer.`,
      `The solution of $8^{x} = 4^{x+1}$ is an even number.`,
      `The solution of $2^{3x} = 4^{x-1}$ is positive.`,
      `The solution of $9^{x} = 27$ lies strictly between $1$ and $2$.`,
      `The solution of $16^{x} = 8^{x+1}$ is smaller than the solution of $4^{x} = 8$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Both sides are powers of two, so rewrite them with that single base.

$$2^{2x} = 2^{3}$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

A fraction with denominator two is not a whole number, so the statement is True.`,
      `**B.** → True

Express eight and four through the base two.

$$2^{3x} = 2^{2(x+1)}$$

$$3x = 2x + 2$$

$$x = 2$$

The exponent obtained is even, so the statement is True.`,
      `**C.** → False

Again reduce the right side to base two.

$$2^{3x} = 2^{2(x-1)}$$

$$3x = 2x - 2$$

$$x = -2$$

The solution lies below zero, so the statement is False.`,
      `**D.** → True

Both sides are powers of three.

$$3^{2x} = 3^{3}$$

$$x = \\frac{3}{2}$$

That number is above one and below two, so the statement is True.`,
      `**E.** → False

Reduce the left equation to base two:

$$2^{4x} = 2^{3(x+1)}$$

$$4x = 3x + 3$$

$$x = 3$$

The comparison equation was solved in claim A and gives $\\frac{3}{2}$. Three is the larger of the two, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 96,
    solution_overview: `Every power of $4$, $8$, $9$, $16$ or $27$ collapses to a power of $2$ or $3$. After that the equation is linear in the exponent.`,
  },
  {
    id: `math-4-97`,
    case_id: `MATH 4.97`,
    title: `Logarithm laws in one equation`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log x + \\log 4 = \\log 20$ is a prime number.`,
      `The solution of $\\log x - \\log 3 = \\log 4$ is smaller than $10$.`,
      `The equation $2\\log x = \\log 36$ has two solutions of opposite sign.`,
      `The equation $\\log(x^{2}) = 2\\log 5$ has two solutions.`,
      `In the equation $\\log_{2} x + \\log_{2}(x-2) = 3$ one candidate must be rejected because of the domain.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

A sum of logarithms is the logarithm of the product, and the logarithm is injective.

$$\\log(4x) = \\log 20$$

$$4x = 20$$

$$x = 5$$

Five has no divisors besides one and itself, so the statement is True.`,
      `**B.** → False

A difference of logarithms is the logarithm of the quotient.

$$\\log\\frac{x}{3} = \\log 4$$

$$x = 12$$

That value exceeds the stated bound, so the statement is False.`,
      `**C.** → False

The factor in front of a logarithm moves into the exponent, but the original left side is only defined for positive arguments.

$$\\log(x^{2}) = \\log 36 \\quad\\text{with}\\quad x > 0$$

$$x = 6$$

The negative candidate never entered the domain of $\\log x$, so only one solution survives and the statement is False.`,
      `**D.** → True

Here the square already sits inside the logarithm, so the domain is every non-zero number.

$$x^{2} = 25$$

$$x = 5 \\quad\\text{or}\\quad x = -5$$

Both satisfy $x \\neq 0$, so two solutions exist and the statement is True.`,
      `**E.** → True

Combine the two logarithms and undo the base two.

$$x(x-2) = 8$$

$$x^{2} - 2x - 8 = 0$$

$$x = 4 \\quad\\text{or}\\quad x = -2$$

The negative candidate makes both arguments negative, so it is thrown out and the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 97,
    solution_overview: `Product, quotient and power laws turn a sum of logarithms into one logarithm. The laws only hold on the domain of the original expression, which is why some candidates die at the end.`,
  },
  {
    id: `math-4-98`,
    case_id: `MATH 4.98`,
    title: `Domain decides the answer`,
    subsection: `4.4`,
    context: `The equation $\\log_{3}(x-1) + \\log_{3}(x-3) = 1$ is discussed. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one admissible solution.`,
      `Both roots of the quadratic obtained after combining the logarithms are admissible.`,
      `The admissible solution is an even integer.`,
      `The rejected candidate fails because it makes an argument of a logarithm negative.`,
      `Combining the logarithms turns the problem into a linear equation.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Both arguments must be positive, so only numbers above three may compete. Combining the logarithms gives

$$(x-1)(x-3) = 3$$

$$x^{2} - 4x = 0$$

$$x = 0 \\quad\\text{or}\\quad x = 4$$

Only the larger root clears the domain, so exactly one solution survives and the statement is True.`,
      `**B.** → False

The domain condition is $x > 3$, and one of the two roots is zero. A single root passes the filter, so the statement is False.`,
      `**C.** → True

The surviving root is $x = 4$, an even whole number, so the statement is True.`,
      `**D.** → True

Substituting the rejected candidate into the first bracket gives

$$x - 1 = -1 < 0$$

A logarithm of a negative number is undefined, which is exactly the reason for the rejection, so the statement is True.`,
      `**E.** → False

The product of the two brackets produces a squared term:

$$x^{2} - 4x - 3 + 3 = 0$$

The resulting equation is quadratic, not linear, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 98,
    solution_overview: `First read the domain from the original equation, then combine the logarithms, then filter the candidates. Combining logarithms is only an equivalence on the domain of the original expression.`,
  },
  {
    id: `math-4-99`,
    case_id: `MATH 4.99`,
    title: `Reciprocal bases and impossible right sides`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\left(\\frac{1}{2}\\right)^{x} = 8$ is negative.`,
      `The solution of $\\left(\\frac{1}{3}\\right)^{x} = 9$ is larger than the solution of $\\left(\\frac{1}{2}\\right)^{x} = 8$.`,
      `The equations $2^{-x} = \\frac{1}{8}$ and $2^{x} = 8$ have the same solution.`,
      `The equation $\\left(\\frac{1}{2}\\right)^{x} = -8$ has exactly one solution.`,
      `An equation of the form $a^{x} = b$ with $a > 0$, $a \\neq 1$ has a solution for every real number $b$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

A reciprocal base flips the sign of the exponent, since $\\frac{1}{2} = 2^{-1}$.

$$2^{-x} = 2^{3}$$

$$x = -3$$

The solution lies below zero, so the statement is True.`,
      `**B.** → True

The same flip works with base three:

$$3^{-x} = 3^{2}$$

$$x = -2$$

Comparing with the solution $-3$ from claim A, the larger of the two negative numbers is $-2$, so the statement is True.`,
      `**C.** → True

Write the reciprocal on the right as a negative power:

$$2^{-x} = 2^{-3}$$

$$x = 3$$

The plain equation $2^{x} = 8$ gives the same exponent, so the statement is True.`,
      `**D.** → False

An exponential expression with a positive base is positive for every exponent, so it can never reach a negative value. No solution exists and the statement is False.`,
      `**E.** → False

The range of an exponential function is only the positive numbers:

$$a^{x} > 0 \\quad\\text{for all real } x$$

For $b \\le 0$ there is nothing to solve, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 99,
    solution_overview: `A reciprocal base is a negative exponent. The range of $a^{x}$ is the positive half-line, which decides all existence questions at a glance.`,
  },
  {
    id: `math-4-100`,
    case_id: `MATH 4.100`,
    title: `Doubling a capital at a fixed rate`,
    subsection: `4.4`,
    context: `A capital grows by $4\\%$ per year with annual compounding, so it is multiplied by $1.04$ each year. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The time needed to double the capital does not depend on how much money was invested at the start.`,
      `The capital doubles in fewer than $18$ years.`,
      `Tripling the capital takes more than twice as long as doubling it.`,
      `Doubling the interest rate to $8\\%$ exactly halves the doubling time.`,
      `The doubling time is the same no matter which currency the capital is measured in.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Growth is written as a starting amount times a yearly factor. The doubling condition is

$$K_{0} \\cdot 1.04^{t} = 2K_{0}$$

The starting amount cancels on both sides, leaving $1.04^{t} = 2$. Since the initial capital has disappeared from the equation, the statement is True.`,
      `**B.** → True

Take logarithms of both sides and isolate the time.

$$t = \\frac{\\ln 2}{\\ln 1.04}$$

$$t \\approx 17.67$$

That is below the stated bound, so the statement is True.`,
      `**C.** → False

The tripling time follows the same recipe.

$$t = \\frac{\\ln 3}{\\ln 1.04} \\approx 28.01$$

Twice the doubling time is about $35.3$ years, which is more. Logarithmic growth times grow slower than the factor itself, so the statement is False.`,
      `**D.** → False

With the doubled rate the yearly factor is $1.08$, not $1.04^{2}$.

$$t = \\frac{\\ln 2}{\\ln 1.08} \\approx 9.01$$

Half of the original time would be about $8.84$ years, and the true value is bigger, so the statement is False.`,
      `**E.** → True

Changing the currency multiplies the starting amount by a constant, and that constant cancels exactly as in claim A. The doubling equation is untouched, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 100,
    solution_overview: `Compound growth is $K_{0} q^{t}$. Any question about relative growth cancels $K_{0}$, and the remaining exponential equation is solved by a logarithm of any base.`,
  },
  {
    id: `math-4-101`,
    case_id: `MATH 4.101`,
    title: `A substance losing five percent a year`,
    subsection: `4.4`,
    context: `A radioactive sample loses $5\\%$ of its mass every year, so the remaining mass is multiplied by $0.95$ annually. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The half-life of the sample is longer than $13$ years.`,
      `After two half-lives exactly a quarter of the original mass is left.`,
      `The time until only a tenth of the mass remains is more than three half-lives.`,
      `Doubling the annual loss to $10\\%$ halves the half-life.`,
      `Under this model the mass reaches zero after a finite number of years.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The half-life solves the decay equation with the target one half.

$$0.95^{t} = \\frac{1}{2}$$

$$t = \\frac{\\ln 0.5}{\\ln 0.95} \\approx 13.51$$

That exceeds the stated bound, so the statement is True.`,
      `**B.** → True

Two half-lives multiply the mass by one half twice.

$$\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$$

The factor for repeated periods is a product, not a sum, so the statement is True.`,
      `**C.** → True

Solve for the time that leaves a tenth.

$$t = \\frac{\\ln 0.1}{\\ln 0.95} \\approx 44.89$$

Three half-lives make about $40.5$ years, which is less, so the statement is True.`,
      `**D.** → False

With the larger loss the yearly factor is $0.9$.

$$t = \\frac{\\ln 0.5}{\\ln 0.9} \\approx 6.58$$

Half of the original half-life would be about $6.76$ years, so the two numbers differ and the statement is False.`,
      `**E.** → False

Each year the mass is multiplied by a positive factor, so it stays strictly positive:

$$m_{0} \\cdot 0.95^{t} > 0 \\quad\\text{for all } t$$

Exponential decay approaches zero without ever reaching it, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 101,
    solution_overview: `Decay is $m_{0} q^{t}$ with $0 < q < 1$. Half-life and any other target level come from one logarithm, and the model never reaches zero exactly.`,
  },
  {
    id: `math-4-102`,
    case_id: `MATH 4.102`,
    title: `A culture that triples every four hours`,
    subsection: `4.4`,
    context: `A bacterial culture triples its size every four hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The growth factor for one single hour is an irrational number.`,
      `Over a full day the culture multiplies by more than $30$.`,
      `The doubling time of the culture is shorter than three hours.`,
      `In two hours the culture more than doubles.`,
      `The time needed to grow tenfold is less than twice the tripling time.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Four equal hourly steps must multiply to the factor three, so the hourly factor is the fourth root.

$$q = 3^{1/4}$$

A root of an integer that is not a perfect fourth power cannot be written as a ratio of integers, so the statement is True.`,
      `**B.** → True

A day contains six tripling periods.

$$3^{6} = 729$$

That is far above the stated threshold, so the statement is True.`,
      `**C.** → True

Solve the growth equation for the factor two.

$$3^{t/4} = 2$$

$$t = \\frac{4\\ln 2}{\\ln 3} \\approx 2.52$$

That is below three hours, so the statement is True.`,
      `**D.** → False

Two hours are half a tripling period.

$$3^{1/2} \\approx 1.73$$

The culture grows by less than a factor two, so the statement is False.`,
      `**E.** → False

Solve for the tenfold time.

$$t = \\frac{4\\ln 10}{\\ln 3} \\approx 8.38$$

Twice the tripling period is exactly eight hours, which is less, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 102,
    solution_overview: `Write the size as $3^{t/4}$. Every question is then one exponential equation, and comparisons of times follow from comparing logarithms, not the factors themselves.`,
  },
  {
    id: `math-4-103`,
    case_id: `MATH 4.103`,
    title: `A quadratic hidden behind base two`,
    subsection: `4.4`,
    context: `The equation $4^{x} - 5 \\cdot 2^{x} + 4 = 0$ is discussed. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The substitution $u = 2^{x}$ turns the equation into a quadratic one.`,
      `The equation has two real solutions.`,
      `Both solutions are positive.`,
      `The sum of all solutions equals the number of solutions.`,
      `Every positive root of the auxiliary quadratic produces a real solution of the original equation.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The first term is the square of the substituted quantity, because

$$4^{x} = (2^{x})^{2} = u^{2}$$

so the whole equation reads

$$u^{2} - 5u + 4 = 0$$

That is a quadratic in the new unknown, so the statement is True.`,
      `**B.** → True

Solving the auxiliary quadratic:

$$u = 1 \\quad\\text{or}\\quad u = 4$$

Both values are positive, so both can be converted back:

$$2^{x} = 1 \\Rightarrow x = 0, \\qquad 2^{x} = 4 \\Rightarrow x = 2$$

Two real solutions exist, so the statement is True.`,
      `**C.** → False

One of the two exponents obtained above is zero, and zero is not positive, so the statement is False.`,
      `**D.** → True

The solutions are zero and two, so their sum is

$$0 + 2 = 2$$

There are also exactly two solutions, so the two numbers agree and the statement is True.`,
      `**E.** → True

The equation $2^{x} = u$ is solvable exactly when $u > 0$, because the range of an exponential function is the positive half-line. Every positive root therefore returns one real exponent, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 103,
    solution_overview: `Substituting $u = a^{x}$ converts $a^{2x} + pa^{x} + q = 0$ into a quadratic. Only positive roots may be converted back, since $a^{x}$ is never zero or negative.`,
  },
  {
    id: `math-4-104`,
    case_id: `MATH 4.104`,
    title: `A quadratic hidden behind base three`,
    subsection: `4.4`,
    context: `The equation $9^{x} - 4 \\cdot 3^{x} + 3 = 0$ is discussed. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Its two solutions are consecutive integers.`,
      `The equation has a negative solution.`,
      `Replacing every base three by base five in the equation leaves the solution set unchanged.`,
      `One of the solutions is irrational.`,
      `The product of all solutions is zero.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

With $u = 3^{x}$ the first term becomes $u^{2}$, so

$$u^{2} - 4u + 3 = 0$$

$$u = 1 \\quad\\text{or}\\quad u = 3$$

Both are positive, so both convert back:

$$x = 0 \\quad\\text{or}\\quad x = 1$$

These two whole numbers follow one another directly, so the statement is True.`,
      `**B.** → False

The two exponents found above are zero and one. Neither lies below zero, so the statement is False.`,
      `**C.** → False

The auxiliary quadratic is untouched by the change of base, so the roots are still $u = 1$ and $u = 3$. Converting back with the new base gives

$$5^{x} = 3 \\Rightarrow x = \\log_{5} 3 \\approx 0.68$$

That is not the earlier exponent one, so the solution set changes and the statement is False.`,
      `**D.** → False

Both exponents are whole numbers, and a whole number is a ratio of integers, so the statement is False.`,
      `**E.** → True

One of the solutions is zero, and a product containing a zero factor is zero, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 104,
    solution_overview: `The substitution removes the base entirely, but converting the roots back does depend on the base. Only the auxiliary quadratic is base-free.`,
  },
  {
    id: `math-4-105`,
    case_id: `MATH 4.105`,
    title: `An extraneous candidate in a logarithmic equation`,
    subsection: `4.4`,
    context: `The equation $\\log x + \\log(x-3) = 1$ is discussed, where $\\log$ is the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Exactly one candidate survives the domain check.`,
      `The surviving solution is a prime number.`,
      `The rejected candidate is negative.`,
      `Removing the logarithms produces a linear equation.`,
      `The equation is equivalent to $\\log\\big(x(x-3)\\big) = 1$ on the domain of the original expression.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Both arguments must be positive, which forces $x > 3$. Combining the logarithms and undoing the decadic base gives

$$x(x-3) = 10$$

$$x^{2} - 3x - 10 = 0$$

$$x = 5 \\quad\\text{or}\\quad x = -2$$

Only the first clears the domain, so the statement is True.`,
      `**B.** → True

The surviving root is five, which has no divisors besides one and itself, so the statement is True.`,
      `**C.** → True

The discarded root is $-2$, a number below zero, so the statement is True.`,
      `**D.** → False

The product of the two arguments contains a squared term, so the resulting equation is quadratic. The statement is False.`,
      `**E.** → True

The product law $\\log a + \\log b = \\log(ab)$ holds whenever both arguments are positive, which is exactly the domain of the original left side. On that set the two equations have identical solutions, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 105,
    solution_overview: `Combining logarithms can widen the domain, which is how extraneous candidates appear. Always compare the final candidates with the domain of the untouched equation.`,
  },
  {
    id: `math-4-106`,
    case_id: `MATH 4.106`,
    title: `Comparing logarithms without a calculator`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$\\log_{2} 5$ is greater than $\\log_{3} 5$.`,
      `The product $\\log_{2} 5 \\cdot \\log_{5} 2$ equals one.`,
      `$\\log_{4} 9$ and $\\log_{2} 3$ are equal.`,
      `$\\log_{9} 4$ is larger than one.`,
      `For a fixed argument $b > 1$, the value of $\\log_{a} b$ increases when the base $a > 1$ increases.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Change both to natural logarithms.

$$\\log_{2} 5 = \\frac{\\ln 5}{\\ln 2}, \\qquad \\log_{3} 5 = \\frac{\\ln 5}{\\ln 3}$$

The numerators agree and the first denominator is smaller, so the first fraction is larger. The statement is True.`,
      `**B.** → True

Swapping base and argument inverts the value:

$$\\log_{2} 5 \\cdot \\log_{5} 2 = \\frac{\\ln 5}{\\ln 2} \\cdot \\frac{\\ln 2}{\\ln 5} = 1$$

Everything cancels, so the statement is True.`,
      `**C.** → True

Both base and argument are squared in the first expression:

$$\\log_{4} 9 = \\frac{\\ln 9}{\\ln 4} = \\frac{2\\ln 3}{2\\ln 2} = \\log_{2} 3$$

The factor two cancels, so the statement is True.`,
      `**D.** → False

The argument is smaller than the base, so the logarithm is below one:

$$\\log_{9} 4 = \\frac{\\ln 4}{\\ln 9} \\approx 0.63$$

That is under the stated bound, so the statement is False.`,
      `**E.** → False

Write the value as a quotient of natural logarithms:

$$\\log_{a} b = \\frac{\\ln b}{\\ln a}$$

A larger base means a larger denominator, so the value falls instead of rising. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 106,
    solution_overview: `Everything follows from the change-of-base formula $\\log_{a} b = \\frac{\\ln b}{\\ln a}$: comparisons become comparisons of two fractions with the same numerator.`,
  },
  {
    id: `math-4-107`,
    case_id: `MATH 4.107`,
    title: `Decadic logarithms and hidden traps`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log(x^{3}) - \\log(x^{2}) = 1$ is smaller than $5$.`,
      `The solution of $\\log\\sqrt{x} = 1$ is greater than the solution of $\\log x = 2$.`,
      `The identity $\\log(x^{2}) = 2\\log x$ holds for every real $x \\neq 0$.`,
      `The equation $\\log(x-1) + \\log(x+1) = \\log 3$ has an irrational solution.`,
      `The equation $(\\log x)^{2} = \\log(x^{2})$ has two solutions.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Pull the exponents in front and abbreviate $t = \\log x$.

$$3t - 2t = 1$$

$$t = 1 \\Rightarrow x = 10$$

Ten lies above the stated bound, so the statement is False.`,
      `**B.** → False

A square root is the power one half.

$$\\frac{1}{2}\\log x = 1 \\Rightarrow \\log x = 2 \\Rightarrow x = 100$$

The comparison equation gives exactly the same value, so neither is greater and the statement is False.`,
      `**C.** → False

The left side is defined for every non-zero number, but the right side needs a positive argument. For a negative $x$ the right side does not exist while the left one does, so the identity fails there. The correct version carries an absolute value:

$$\\log(x^{2}) = 2\\log|x|$$

The statement as written is False.`,
      `**D.** → False

Combine the logarithms and drop them.

$$x^{2} - 1 = 3$$

$$x^{2} = 4$$

Only the positive root lies in the domain, so $x = 2$, a whole number. The statement is False.`,
      `**E.** → True

Substitute $t = \\log x$ and pull the exponent out on the right.

$$t^{2} = 2t$$

$$t(t-2) = 0 \\Rightarrow t = 0 \\text{ or } t = 2$$

Both give admissible positive arguments, namely $x = 1$ and $x = 100$, so two solutions exist and the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 107,
    solution_overview: `Abbreviating $t = \\log x$ turns these equations into linear or quadratic problems in $t$. The traps sit in the domain: $\\log(x^{2})$ and $2\\log x$ do not have the same domain.`,
  },
  {
    id: `math-4-108`,
    case_id: `MATH 4.108`,
    title: `A small exponential system`,
    subsection: `4.4`,
    context: `The system $2^{x} \\cdot 2^{y} = 32$ and $2^{x-y} = 2$ is discussed. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Comparing exponents reduces the system to a linear system in $x$ and $y$.`,
      `In the solution the first unknown is larger than the second.`,
      `The system has infinitely many solutions.`,
      `The two unknowns are consecutive integers.`,
      `The product of the two unknowns is a perfect square.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Multiplying powers of one base adds the exponents, and both right sides are powers of two.

$$2^{x+y} = 2^{5}, \\qquad 2^{x-y} = 2^{1}$$

$$x + y = 5, \\qquad x - y = 1$$

Two linear equations remain, so the statement is True.`,
      `**B.** → True

Adding the two linear equations eliminates the second unknown.

$$2x = 6 \\Rightarrow x = 3, \\qquad y = 2$$

The first value is the larger one, so the statement is True.`,
      `**C.** → False

The linear system has a unique solution, because the two equations are not multiples of one another. The statement is False.`,
      `**D.** → True

The values three and two follow one another directly, so the statement is True.`,
      `**E.** → False

The product is

$$3 \\cdot 2 = 6$$

Six is not the square of a whole number, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 108,
    solution_overview: `Reduce every equation to one base, compare exponents, and solve the resulting linear system. The exponential layer disappears completely in the first step.`,
  },
  {
    id: `math-4-109`,
    case_id: `MATH 4.109`,
    title: `Bounds on solutions of composite logarithmic equations`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm of $x$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log\\sqrt{x} + \\log x^{3} - \\log x = 5$ is larger than $50$.`,
      `The solution of $\\log x^{2} - \\log\\sqrt[3]{x} = \\frac{5}{3}$ is a two-digit number.`,
      `The solution of $\\dfrac{\\log x^{4}}{1 + \\log 10} = \\log x + 1$ is smaller than the solution of $\\log x = 2$.`,
      `The equation $(\\log x)^{2} = \\log x + 6$ has exactly one solution.`,
      `The solution of $\\log x^{3} + \\log\\frac{1}{x} = \\log 100$ is greater than $10$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Every power inside a logarithm becomes a factor in front, so with $t = \\log x$:

$$\\frac{t}{2} + 3t - t = 5$$

$$\\frac{5t}{2} = 5 \\Rightarrow t = 2$$

$$x = 10^{2} = 100$$

That value clears the stated bound, so the statement is True.`,
      `**B.** → True

A cube root is the power one third.

$$2t - \\frac{t}{3} = \\frac{5}{3}$$

$$\\frac{5t}{3} = \\frac{5}{3} \\Rightarrow t = 1$$

$$x = 10$$

Ten has two digits, so the statement is True.`,
      `**C.** → True

The decadic logarithm of ten is one, so the denominator is two.

$$\\frac{4t}{2} = t + 1$$

$$2t = t + 1 \\Rightarrow t = 1 \\Rightarrow x = 10$$

The comparison equation gives $x = 100$, which is larger, so the statement is True.`,
      `**D.** → False

The abbreviation turns this into a quadratic.

$$t^{2} - t - 6 = 0$$

$$t = 3 \\quad\\text{or}\\quad t = -2$$

Both give positive arguments, namely $x = 1000$ and $x = 0.01$, so there are two solutions and the statement is False.`,
      `**E.** → False

A reciprocal inside a logarithm contributes the negative of the logarithm.

$$3t - t = 2$$

$$t = 1 \\Rightarrow x = 10$$

The solution equals the bound instead of exceeding it, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 109,
    solution_overview: `Set $t = \\log x$ once, then translate roots, powers and reciprocals into coefficients of $t$. Constants such as $\\log 10$ and $\\log 100$ are simply $1$ and $2$.`,
  },
  {
    id: `math-4-110`,
    case_id: `MATH 4.110`,
    title: `Logarithms inside logarithms`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log_{2}(\\log_{3} x) = 1$ is a perfect square.`,
      `The solution of $\\log_{3}(\\log_{2} x) = 0$ is smaller than $3$.`,
      `The solution of $\\log_{2}\\big(\\log_{2}(\\log_{2} x)\\big) = 0$ exceeds $10$.`,
      `The equation $\\log_{2}(\\log_{3} x) = -1$ has no solution.`,
      `In an equation $\\log_{a}(\\log_{b} x) = c$ with $a, b > 1$ every solution is greater than one.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Peel the outer logarithm first.

$$\\log_{3} x = 2^{1} = 2$$

$$x = 3^{2} = 9$$

Nine is the square of a whole number, so the statement is True.`,
      `**B.** → True

An outer logarithm equal to zero means the inner value is one.

$$\\log_{2} x = 3^{0} = 1$$

$$x = 2$$

Two lies below the stated bound, so the statement is True.`,
      `**C.** → False

Peel the layers one at a time.

$$\\log_{2}(\\log_{2} x) = 1 \\Rightarrow \\log_{2} x = 2 \\Rightarrow x = 4$$

Four does not exceed ten, so the statement is False.`,
      `**D.** → False

A negative outer value is perfectly legal, because the inner logarithm only has to be positive.

$$\\log_{3} x = 2^{-1} = \\frac{1}{2}$$

$$x = \\sqrt{3}$$

A solution exists, so the statement is False.`,
      `**E.** → True

The outer equation forces the inner logarithm to be a power of $a$, hence strictly positive:

$$\\log_{b} x = a^{c} > 0$$

With a base above one, a positive logarithm means an argument above one, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 110,
    solution_overview: `Nested logarithms are undone from the outside inwards, one definition at a time. Each layer only requires its own argument to be positive.`,
  },
  {
    id: `math-4-111`,
    case_id: `MATH 4.111`,
    title: `Exponential equations with untidy solutions`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $2^{x} = 5$ lies strictly between $2$ and $3$.`,
      `The solution of $3^{x} = 2^{x+1}$ is smaller than $2$.`,
      `The equation $5^{x} = 2^{x}$ has exactly one solution.`,
      `The solution of $2^{x} = 3^{x-1}$ is greater than $3$.`,
      `The equation $2^{x} = x^{2}$ has exactly one solution.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

No power of two hits five exactly, so bracket the value instead of computing it.

$$2^{2} = 4 < 5 < 8 = 2^{3}$$

Since $2^{x}$ is strictly increasing, the exponent must lie between the two integers, so the statement is True.`,
      `**B.** → True

Take logarithms of both sides and collect the unknown.

$$x\\ln 3 = (x+1)\\ln 2$$

$$x(\\ln 3 - \\ln 2) = \\ln 2$$

$$x = \\frac{\\ln 2}{\\ln 1.5} \\approx 1.71$$

That is under the stated bound, so the statement is True.`,
      `**C.** → True

Divide both sides by the positive right-hand side.

$$\\left(\\frac{5}{2}\\right)^{x} = 1$$

An exponential with base different from one equals one only at exponent zero, so exactly one solution exists and the statement is True.`,
      `**D.** → False

Logarithms again separate the unknown.

$$x\\ln 2 = (x-1)\\ln 3$$

$$x = \\frac{\\ln 3}{\\ln 1.5} \\approx 2.71$$

That stays below three, so the statement is False.`,
      `**E.** → False

Two obvious matches are the exponents that make both sides equal powers, namely $x = 2$ and $x = 4$, since

$$2^{2} = 2^{2}, \\qquad 2^{4} = 4^{2}$$

For negative arguments the parabola falls from large values while the exponential tends to zero, so they cross once more below zero. Three solutions exist, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 111,
    solution_overview: `When the bases differ, take a logarithm of both sides and collect the unknown. When the solution is untidy, bracket it between neighbouring integer powers instead of computing it.`,
  },
  {
    id: `math-4-112`,
    case_id: `MATH 4.112`,
    title: `When does the smaller fund overtake the bigger one`,
    subsection: `4.4`,
    context: `Fund A starts with $1000$ EUR and grows by $6\\%$ per year. Fund B starts with $2000$ EUR and grows by $3\\%$ per year. Both compound annually. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Fund A first exceeds fund B during the twenty-fifth year.`,
      `The moment of overtaking does not depend on the ratio of the two starting amounts.`,
      `Doubling both starting amounts leaves the moment of overtaking unchanged.`,
      `Fund A overtakes fund B within the first twenty years.`,
      `The overtaking time can be computed with logarithms of any base, and the base does not change the result.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Set the two capitals equal and gather the growth factors on one side.

$$1000 \\cdot 1.06^{t} = 2000 \\cdot 1.03^{t}$$

$$\\left(\\frac{1.06}{1.03}\\right)^{t} = 2$$

$$t = \\frac{\\ln 2}{\\ln(1.06/1.03)} \\approx 24.14$$

The crossing happens after $24$ full years, hence inside the twenty-fifth, so the statement is True.`,
      `**B.** → False

The number that appears on the right of the reduced equation is exactly the ratio of the starting amounts. Changing that ratio changes the logarithm, so the statement is False.`,
      `**C.** → True

Doubling both amounts multiplies each side by the same factor, which cancels:

$$\\frac{2 \\cdot 1000}{2 \\cdot 2000} = \\frac{1000}{2000}$$

The reduced equation is untouched, so the statement is True.`,
      `**D.** → False

The computed crossing time is above twenty-four years, well past the stated window, so the statement is False.`,
      `**E.** → True

Change of base multiplies numerator and denominator by the same constant:

$$\\frac{\\log_{a} 2}{\\log_{a} q} = \\frac{\\ln 2 / \\ln a}{\\ln q / \\ln a} = \\frac{\\ln 2}{\\ln q}$$

The constant cancels, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 112,
    solution_overview: `Equal-capital problems reduce to $(q_{A}/q_{B})^{t} = K_{B}/K_{A}$: only the ratio of factors and the ratio of starting amounts matter, and one logarithm of any base finishes the job.`,
  },
  {
    id: `math-4-113`,
    case_id: `MATH 4.113`,
    title: `A logarithmic equation with a parameter`,
    subsection: `4.4`,
    context: `For a parameter $a > 0$ the equation $\\log_{2} x + \\log_{2}(x - a) = 3$ is discussed. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For every admissible parameter the equation has exactly one solution.`,
      `The solution grows when the parameter grows.`,
      `For the boundary case $a = 0$ the solution is irrational.`,
      `There are parameters for which both roots of the auxiliary quadratic are admissible.`,
      `The step to $\\log_{2}\\big(x(x-a)\\big) = 3$ is only an equivalence while both factors are positive.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Combining the logarithms and undoing base two gives

$$x(x-a) = 8$$

$$x^{2} - ax - 8 = 0$$

$$x = \\frac{a + \\sqrt{a^{2} + 32}}{2} \\quad\\text{or}\\quad x = \\frac{a - \\sqrt{a^{2} + 32}}{2}$$

The root under the square sign is larger than the parameter, so the second candidate is negative and dies. The first one satisfies

$$x - a = \\frac{\\sqrt{a^{2}+32} - a}{2} > 0$$

so exactly one solution survives and the statement is True.`,
      `**B.** → True

In the surviving root both the isolated parameter and the square root grow when the parameter grows:

$$x = \\frac{a + \\sqrt{a^{2} + 32}}{2}$$

A sum of two increasing terms is increasing, so the statement is True.`,
      `**C.** → True

Setting the parameter to zero collapses the quadratic.

$$x^{2} = 8 \\Rightarrow x = 2\\sqrt{2}$$

The square root of two cannot be written as a ratio of integers, so the statement is True.`,
      `**D.** → False

The product of the two roots of the quadratic is $-8$, so the roots always have opposite signs. A negative root can never satisfy the domain condition, so the statement is False.`,
      `**E.** → True

The product law needs both arguments positive; otherwise the combined form has a wider domain than the original. That extra domain is precisely where extraneous candidates appear, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 113,
    solution_overview: `With a parameter, argue through the structure of the quadratic: the product of the roots is negative, so the sign pattern is fixed for every parameter value.`,
  },
  {
    id: `math-4-114`,
    case_id: `MATH 4.114`,
    title: `Which logarithm identities really hold`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `There is no pair of positive numbers $a$ and $b$ with $\\log(a+b) = \\log a + \\log b$.`,
      `The identity $\\log(ab) = \\log a + \\log b$ holds for all positive $a$ and $b$.`,
      `The quotient $\\dfrac{\\log a}{\\log b}$ equals $\\log\\dfrac{a}{b}$ for all admissible $a$ and $b$.`,
      `For admissible bases and arguments, $\\log_{a} b$ and $\\log_{b} a$ are reciprocals of one another.`,
      `The identity $\\log(x^{2}) = 2\\log|x|$ holds for every $x \\neq 0$.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The claim is a universal denial, so one counterexample kills it. Take both numbers equal to two:

$$\\log(2+2) = \\log 4, \\qquad \\log 2 + \\log 2 = \\log 4$$

The two sides agree, so such a pair exists and the statement is False.`,
      `**B.** → True

This is the product law, valid on the whole domain of both sides:

$$\\log(ab) = \\log a + \\log b \\quad\\text{for } a, b > 0$$

Nothing more is required, so the statement is True.`,
      `**C.** → False

The quotient law concerns a difference, not a ratio of logarithms:

$$\\log\\frac{a}{b} = \\log a - \\log b$$

A single counterexample confirms the failure: with $a = 100$ and $b = 10$ the left side of the claim is two while the right side is one. The statement is False.`,
      `**D.** → True

Change both to natural logarithms:

$$\\log_{a} b \\cdot \\log_{b} a = \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln a}{\\ln b} = 1$$

A product equal to one means the two numbers are reciprocals, so the statement is True.`,
      `**E.** → True

The square is positive for every non-zero argument, and squaring the absolute value gives the same number:

$$x^{2} = |x|^{2} \\Rightarrow \\log(x^{2}) = 2\\log|x|$$

Both sides now have the same domain, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 114,
    solution_overview: `A universal claim falls to one counterexample; a genuine law must hold on the full common domain. The absolute value is what repairs the power law for negative arguments.`,
  },
  {
    id: `math-4-115`,
    case_id: `MATH 4.115`,
    title: `Comparing solutions across equations`,
    subsection: `4.4`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $4^{x} = 8^{x-1}$ has an integer solution.`,
      `The solution of $9^{x+1} = 27^{x}$ is greater than the solution of $4^{x} = 8^{x-1}$.`,
      `The solution of $25^{x} = 5$ is not an integer.`,
      `The equation $8^{x} = 2^{x}$ has infinitely many solutions.`,
      `The equation $16^{x} = 4^{2x}$ is satisfied by every real number.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Both sides reduce to base two.

$$2^{2x} = 2^{3(x-1)}$$

$$2x = 3x - 3 \\Rightarrow x = 3$$

The result is a whole number, so the statement is True.`,
      `**B.** → False

Reduce this one to base three.

$$3^{2(x+1)} = 3^{3x}$$

$$2x + 2 = 3x \\Rightarrow x = 2$$

The comparison solution from claim A is three, which is larger, so the statement is False.`,
      `**C.** → True

Here $25 = 5^{2}$, so the equation reads

$$5^{2x} = 5^{1} \\Rightarrow x = \\frac{1}{2}$$

A half is not a whole number, so the statement is True.`,
      `**D.** → False

Divide by the right-hand side, which is never zero:

$$4^{x} = 1$$

An exponential with base different from one hits the value one exactly once, so there is a single solution and the statement is False.`,
      `**E.** → True

Both sides reduce to the same power of two:

$$2^{4x} = 2^{4x}$$

The equation is an identity, so every real number works and the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 115,
    solution_overview: `Reduce to a common base, then compare exponents. If the exponents collapse to the same expression, the equation is an identity rather than a problem with isolated solutions.`,
  },
  {
    id: `math-4-116`,
    case_id: `MATH 4.116`,
    title: `Composite decadic equations under pressure`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm of $x$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $\\log\\sqrt[3]{x} + \\log x^{3} - \\log x + \\frac{4}{3} = \\dfrac{\\log x^{6}}{1 + \\log 100}$ is smaller than $1$.`,
      `The solution of $\\log x^{5} - \\log\\sqrt{x} + \\frac{1}{2}\\log x = 10$ is greater than $50$.`,
      `The equation $\\dfrac{\\log x^{2}}{1 + \\log 10} = \\log x - 1$ has exactly one solution.`,
      `The two solutions of $(\\log x)^{2} - 3\\log x + 2 = 0$ differ by a factor of ten.`,
      `The equation $\\log(x^{2}) = (\\log x)^{2}$ has a solution larger than $10$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Set $t = \\log x$ and note that $\\log 100 = 2$, so the denominator on the right is three.

$$\\frac{t}{3} + 3t - t + \\frac{4}{3} = \\frac{6t}{3}$$

$$\\frac{7t + 4}{3} = 2t$$

$$7t + 4 = 6t \\Rightarrow t = -4$$

$$x = 10^{-4}$$

A negative decadic logarithm means an argument below one, so the statement is True.`,
      `**B.** → True

Collect the coefficients of $t$.

$$5t - \\frac{t}{2} + \\frac{t}{2} = 10$$

$$5t = 10 \\Rightarrow t = 2 \\Rightarrow x = 100$$

That value clears the stated bound, so the statement is True.`,
      `**C.** → False

The decadic logarithm of ten is one, so the denominator equals two.

$$\\frac{2t}{2} = t - 1$$

$$t = t - 1$$

The unknown cancels and leaves a false numerical statement, so no solution exists at all and the statement is False.`,
      `**D.** → True

The abbreviation gives an ordinary quadratic.

$$t^{2} - 3t + 2 = 0 \\Rightarrow t = 1 \\text{ or } t = 2$$

$$x = 10 \\quad\\text{and}\\quad x = 100$$

Two arguments whose decadic logarithms differ by one stand in the ratio ten, so the statement is True.`,
      `**E.** → True

Pull the exponent out on the left and abbreviate.

$$2t = t^{2}$$

$$t(t - 2) = 0 \\Rightarrow t = 0 \\text{ or } t = 2$$

The second value gives $x = 100$, which is above the stated bound, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 116,
    solution_overview: `Reduce everything to $t = \\log x$: roots and powers become coefficients, constants such as $\\log 10$ and $\\log 100$ become $1$ and $2$. A cancelling unknown signals no solution, not infinitely many.`,
  },
  {
    id: `math-4-117`,
    case_id: `MATH 4.117`,
    title: `Existence questions for mixed equations`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $2^{x} \\cdot 3^{x} = 6^{x+1}$ has no solution.`,
      `The equation $x^{\\log x} = 100$ has two solutions.`,
      `The equation $2^{2x} - 2^{x+1} + 1 = 0$ has exactly one solution.`,
      `The equation $3^{x} + 3^{-x} = 1$ has a real solution.`,
      `The equation $\\log_{2} x = x$ has a real solution.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Powers with the same exponent multiply base by base.

$$6^{x} = 6^{x+1}$$

$$x = x + 1$$

The unknown cancels and leaves a contradiction, so nothing solves the equation and the statement is True.`,
      `**B.** → True

Take the decadic logarithm of both sides and use the power law with $t = \\log x$.

$$t \\cdot t = 2$$

$$t^{2} = 2 \\Rightarrow t = \\sqrt{2} \\text{ or } t = -\\sqrt{2}$$

Both give positive arguments $x = 10^{\\pm\\sqrt{2}}$, so two solutions exist and the statement is True.`,
      `**C.** → True

Substitute $u = 2^{x}$ and notice the double product.

$$u^{2} - 2u + 1 = 0$$

$$(u-1)^{2} = 0 \\Rightarrow u = 1$$

The single positive root converts back to one exponent, so the statement is True.`,
      `**D.** → False

Write $u = 3^{x} > 0$. The left side becomes a sum of a positive number and its reciprocal, which never drops below two:

$$u + \\frac{1}{u} \\ge 2$$

The target one is unreachable, so the statement is False.`,
      `**E.** → False

Rewrite the equation through the definition of the logarithm.

$$x = 2^{x}$$

An exponential with base above one stays strictly above its exponent for every real number, so the two sides never meet and the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 117,
    solution_overview: `Existence is settled by structure, not by a formula: cancelling unknowns give contradictions, a perfect square gives a double root, and range arguments rule out impossible right-hand sides.`,
  },
  {
    id: `math-4-118`,
    case_id: `MATH 4.118`,
    title: `Counting solutions in general families`,
    subsection: `4.4`,
    context: `Throughout, $\\log$ denotes the decadic logarithm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For every positive number $k$ the equation $2^{x} = k$ has exactly one real solution.`,
      `For every base $a > 1$ the equation $a^{x} = x$ has a real solution.`,
      `The equation $5^{x} = 4^{x} + 3^{x}$ has exactly one real solution.`,
      `The equation $(\\log x)^{3} = \\log x^{4}$ has three solutions.`,
      `The equation $x^{\\log x} = \\frac{1}{100}$ has a real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

An exponential function with base two is strictly increasing and covers the whole positive half-line:

$$2^{x} \\in (0, \\infty)$$

A strictly increasing function meets each value of its range once, so the statement is True.`,
      `**B.** → False

For a large base the exponential outruns the straight line everywhere. Take base three and test the most favourable region:

$$3^{0} = 1 > 0, \\qquad 3^{1} = 3 > 1$$

Between those points the exponential is convex and stays above the line, so no crossing occurs for base three. One counterexample suffices, and the statement is False.`,
      `**C.** → True

Divide the whole equation by the largest power to compare shrinking terms.

$$1 = \\left(\\frac{4}{5}\\right)^{x} + \\left(\\frac{3}{5}\\right)^{x}$$

The right side is a sum of two strictly decreasing functions, hence strictly decreasing, and it runs from very large values to zero. It therefore meets the level one exactly once, so the statement is True.`,
      `**D.** → True

Abbreviate $t = \\log x$ and pull the exponent out on the right.

$$t^{3} = 4t$$

$$t(t^{2} - 4) = 0 \\Rightarrow t = 0, \\; t = 2, \\; t = -2$$

Each value returns a positive argument, so three solutions exist and the statement is True.`,
      `**E.** → False

Take decadic logarithms on both sides with $t = \\log x$.

$$t^{2} = -2$$

A square is never negative, so no real argument works and the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 118,
    solution_overview: `Counting solutions uses monotonicity and range: strictly monotone sides cross a level once, sums of decreasing exponentials cross once, and a squared logarithm can never be negative.`,
  },
];
