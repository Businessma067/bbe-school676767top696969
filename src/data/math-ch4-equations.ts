/**
 * Chapter 4 — Equations (subsections 4.1–4.5).
 * Exam format: five True/False claims. Each letter is a closed exam sentence
 * in nested prose (a student reports, a candidate claims, if ... then ...),
 * matching the WU item style. Explanations follow MATH 13.18.
 * Explanations follow MATH 13.18: name the rule, write the algebra, say in words
 * what the numbers mean, then close with the verdict.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_SUBSECTIONS = [
  { id: "4.1", title: "Linear equations in one unknown" },
  { id: "4.2", title: "Quadratic equations" },
  { id: "4.3", title: "Rational, radical and absolute-value equations" },
  // 4.4 Exponential and logarithmic equations
  // 4.5 Applied word problems and mixed exam sets
] as const;

export const MATH_CH4_EQUATIONS: MathTask[] = [
  {
    id: `math-4-1`,
    case_id: `MATH 4.01`,
    title: `Five short linear claims, each a full sentence`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student is given the linear equation $2x + 6 = 14$. After undoing the added $6$ and then dividing by $2$, the student reports that the unique real solution is $x = 5$.`,
      `In a practice paper the equation $5x - 3 = 12$ appears. A candidate claims that $x = 2$ is the unique real number that satisfies it.`,
      `A number is $7$ less than $x$, and that difference equals $2$. The claim is that $x$ itself must then be $9$.`,
      `The equation $3(x + 1) = 12$ is expanded and solved. A student concludes that the unique real solution is $x = 4$.`,
      `The equation $4x = 0$ is said to have no real solution, because the right-hand side is zero.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

$$2x + 6 = 14 \\Rightarrow 2x = 8 \\Rightarrow x = 4$$

The claimed value $5$ would give $2\\cdot 5 + 6 = 16$, not $14$. The unique solution is $4$.

The statement is False.`,
      `**B.** → False

$$5x - 3 = 12 \\Rightarrow 5x = 15 \\Rightarrow x = 3$$

The claimed value $2$ would give $5\\cdot 2 - 3 = 7$, not $12$.

The statement is False.`,
      `**C.** → True

$$x - 7 = 2 \\Rightarrow x = 9$$

Check: $9 - 7 = 2$.

The statement is True.`,
      `**D.** → False

$$3(x + 1) = 12 \\Rightarrow 3x + 3 = 12 \\Rightarrow x = 3$$

The claimed value $4$ gives $3(4 + 1) = 15$, not $12$.

The statement is False.`,
      `**E.** → False

$$4x = 0 \\Rightarrow x = 0$$

Zero is an allowed real number, and $4\\cdot 0 = 0$. The equation has the unique solution $x = 0$.

The statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Five independent linear sentences. A linear equation $ax + b = c$ with $a \\neq 0$ has exactly one real solution. Zero is allowed.`,
  },
  {
    id: `math-4-2`,
    case_id: `MATH 4.02`,
    title: `What each inverse step leaves`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student starts from the linear equation $x + 5 = 11$ and subtracts $5$ from both sides. The student reports that this inverse step leaves the unique real solution $x = 6$.`,
      `In a practice paper the equation $7x = 21$ appears. A candidate claims that the unique real number that makes the equation true is $4$.`,
      `Adding $8$ to both sides of $x - 8 = 10$ is the correct inverse of subtracting $8$. A student then reports that the unique real solution is $x = 16$.`,
      `Dividing both sides of $6x = 30$ by $6$ is the correct inverse of multiplying by $6$. A student then reports that the unique real solution is $x = 4$.`,
      `The equation $x + 0 = 9$ is offered as a linear equation in one unknown. A student claims that it is solved by $x = 9$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$x + 5 = 11$$

$$x = 6$$

Check: $6 + 5 = 11$. Subtracting $5$ does leave $x = 6$, so the statement is True.`,
      `**B.** → False

$$7x = 21$$

$$x = 3$$

The claim says $4$. That would need $7\\cdot 4 = 28$ on the right. The number that works is $3$, so the statement is False.`,
      `**C.** → False

$$x - 8 = 10$$

$$x = 18$$

The claim says $x = 16$. Sixteen would give $16 - 8 = 8$, not $10$. Adding $8$ produces $x = 18$, so the statement is False.`,
      `**D.** → False

$$6x = 30$$

$$x = 5$$

The claim says $x = 4$. The quotient is $5$, so the statement is False.`,
      `**E.** → True

Adding zero does not change a number, so $x + 0 = 9$ is the same as $x = 9$. The statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `Five independent claims about the inverse of a single operation. Adding $a$ is undone by subtracting $a$; multiplying by $a \\neq 0$ is undone by dividing by $a$.`,
  },
  {
    id: `math-4-3`,
    case_id: `MATH 4.03`,
    title: `A number, said in words`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number increased by $4$ equals $11$. Translating the sentence into a linear equation and undoing the addition, the number is $7$.`,
      `Three times a number equals $18$. A student claims that the unknown number is therefore $5$.`,
      `After $8$ is subtracted from a number, $13$ remains. Restoring the subtracted $8$, the original number is $21$.`,
      `Half of a number is $9$. Doubling both sides of the corresponding equation, the number itself is $18$.`,
      `A number decreased by $6$ equals $10$. A student claims that the original number is $4$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$x + 4 = 11 \\Rightarrow x = 7$$

Seven plus four is eleven. The number is $7$, so the statement is True.`,
      `**B.** → False

$$3x = 18 \\Rightarrow x = 6$$

The claim says $5$. Three fives are $15$, not $18$. The statement is False.`,
      `**C.** → True

$$x - 8 = 13 \\Rightarrow x = 21$$

From $21$, take away $8$ and $13$ remains. The statement is True.`,
      `**D.** → True

$$\\frac{x}{2} = 9 \\Rightarrow x = 18$$

Half of $18$ is $9$. The statement is True.`,
      `**E.** → False

$$x - 6 = 10 \\Rightarrow x = 16$$

The claim says $4$, which looks like someone subtracted $6$ from $10$ instead of adding it back. The number is $16$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Five independent word sentences, each hiding one linear equation. Translate the English into $x \\pm a = b$ or $kx = b$, then undo the operation.`,
  },
  {
    id: `math-4-4`,
    case_id: `MATH 4.04`,
    title: `Brackets before isolating`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student expands the brackets in $2(x + 3) = 14$ and then isolates $x$. The unique real solution obtained that way is $x = 4$.`,
      `The linear equation $5(x - 2) = 20$ is expanded with the distributive law. After collecting like terms the unique real solution is $x = 6$.`,
      `The equation $3(2x + 1) = 21$ is expanded and solved. A candidate reports that the unique real solution is $x = 4$.`,
      `Expanding $4(x - 5) = 12$ and then isolating $x$ gives the unique real solution $x = 8$.`,
      `The equation $(x + 3) + (x - 1) = 10$ is simplified by collecting like terms. The unique real solution is $x = 4$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$$2(x + 3) = 14 \\Rightarrow 2x + 6 = 14 \\Rightarrow x = 4$$

Check: $2(4 + 3) = 14$. The statement is True.`,
      `**B.** → True

$$5(x - 2) = 20 \\Rightarrow 5x - 10 = 20 \\Rightarrow x = 6$$

Check: $5(6 - 2) = 20$. The statement is True.`,
      `**C.** → False

$$3(2x + 1) = 21 \\Rightarrow 6x + 3 = 21 \\Rightarrow x = 3$$

The claim says $x = 4$. The recovered solution is $3$, so the statement is False.`,
      `**D.** → True

$$4(x - 5) = 12 \\Rightarrow 4x - 20 = 12 \\Rightarrow x = 8$$

Check: $4(8 - 5) = 12$. The statement is True.`,
      `**E.** → True

$$(x + 3) + (x - 1) = 10 \\Rightarrow 2x + 2 = 10 \\Rightarrow x = 4$$

Check: $(4 + 3) + (4 - 1) = 10$. The solution is $4$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `Five independent linear equations that start with brackets. Expand with the distributive law, collect like terms, then isolate $x$.`,
  },
  {
    id: `math-4-5`,
    case_id: `MATH 4.05`,
    title: `Fractions that clear in one move`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student clears the denominator in $\\dfrac{x}{4} = 5$ by multiplying through by $4$, and reports that the unique real solution is $x = 20$.`,
      `Solving $\\dfrac{x}{3} + 2 = 6$ by first subtracting $2$ and then multiplying by $3$, a candidate claims that $x = 10$.`,
      `The equation $\\dfrac{2x}{5} = 6$ is cleared by multiplying through by $5$. A student then reports that the unique real solution is $x = 12$.`,
      `If $\\dfrac{x + 1}{2} = 5$, multiplying through by $2$ and then subtracting $1$ produces the unique real solution $x = 9$.`,
      `The equation $\\dfrac{3x}{2} = 9$ is solved by a student who reports $x = 4$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{4} = 5 \\Rightarrow x = 20$$

Check: $\\frac{20}{4} = 5$. The statement is True.`,
      `**B.** → False

$$\\frac{x}{3} + 2 = 6 \\Rightarrow \\frac{x}{3} = 4 \\Rightarrow x = 12$$

The claim says $x = 10$. Ten would give $\\frac{10}{3} + 2$, not $6$. The solution is $12$, so the statement is False.`,
      `**C.** → False

$$\\frac{2x}{5} = 6 \\Rightarrow 2x = 30 \\Rightarrow x = 15$$

The claim says $12$. Fifteen checks: $\\frac{30}{5} = 6$. The statement is False.`,
      `**D.** → True

$$\\frac{x + 1}{2} = 5 \\Rightarrow x + 1 = 10 \\Rightarrow x = 9$$

Check: $\\frac{10}{2} = 5$. The statement is True.`,
      `**E.** → False

$$\\frac{3x}{2} = 9 \\Rightarrow 3x = 18 \\Rightarrow x = 6$$

The claim says $4$. The solution is $6$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `Five independent linear equations with a single fraction. Multiply through by the denominator to clear it, then finish as an ordinary linear equation.`,
  },
  {
    id: `math-4-6`,
    case_id: `MATH 4.06`,
    title: `Short stories that close on a number`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle has width $4$ cm and length $3$ cm more than the width. Writing the perimeter as twice the sum of the sides, that perimeter is $22$ cm.`,
      `If one side of a square is $6$ cm, then all four sides are equal, so the perimeter is $24$ cm.`,
      `A number that is $5$ more than twice $8$ is claimed to be $21$.`,
      `Splitting $30$ into two parts where one part is $4$ more than the other gives the parts $17$ and $13$.`,
      `A tank holds $40$ litres. After $15$ litres are poured out, $25$ litres remain.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Width $4$ cm, length $7$ cm. Perimeter $2(4 + 7) = 22$. The statement is True.`,
      `**B.** → True

$$P = 4 \\cdot 6 = 24$$

The statement is True.`,
      `**C.** → True

$$2 \\cdot 8 + 5 = 21$$

Five more than twice eight is $21$. The statement is True.`,
      `**D.** → True

$$x + (x + 4) = 30 \\Rightarrow x = 13$$

The parts are $13$ and $17$. The statement is True.`,
      `**E.** → True

$$40 - 15 = 25$$

Twenty-five litres remain. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Five independent short stories, each closing on a number. Translate the sentence into a linear relation, compute, and compare with the figure in the claim.`,
  },
  {
    id: `math-4-7`,
    case_id: `MATH 4.07`,
    title: `Unknowns on both sides`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The linear equation $2x + 3 = 3x - 5$ has the unknown on both sides. Gathering $x$ terms and constants, the unique real solution is $x = 8$.`,
      `The equation $5 - x = 2x + 8$ is solved by collecting like terms. The unique real solution is $x = -1$.`,
      `The equation $4(x - 1) = 2(x + 5)$ is expanded on both sides and then solved. The unique real solution is $x = 7$.`,
      `The two linear equations $x + 3 = 10$ and $2x = 14$ are claimed to have the same unique real solution.`,
      `Collecting like terms in $7x - 2 - 3x = 10$ yields $4x = 12$, so the unique real solution is $x = 3$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$2x + 3 = 3x - 5 \\Rightarrow 3 = x - 5 \\Rightarrow x = 8$$

Check: both sides equal $19$. The statement is True.`,
      `**B.** → True

$$5 - x = 2x + 8 \\Rightarrow 5 = 3x + 8 \\Rightarrow x = -1$$

Check: both sides equal $6$. The statement is True.`,
      `**C.** → True

$$4x - 4 = 2x + 10 \\Rightarrow 2x = 14 \\Rightarrow x = 7$$

Check: both sides equal $24$. The statement is True.`,
      `**D.** → True

$$x + 3 = 10 \\Rightarrow x = 7$$

and

$$2x = 14 \\Rightarrow x = 7$$

They share the solution $x = 7$. The statement is True.`,
      `**E.** → True

$$4x - 2 = 10 \\Rightarrow 4x = 12 \\Rightarrow x = 3$$

Check: $21 - 2 - 9 = 10$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 7,
    solution_overview: `Five independent linear equations, some with $x$ on both sides. Gather unknown terms on one side and constants on the other, then divide by the remaining coefficient.`,
  },
  {
    id: `math-4-8`,
    case_id: `MATH 4.08`,
    title: `Two fractions, one unknown`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student clears $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ by multiplying through by $6$, and reports that the unique real solution is $x = 8$.`,
      `The proportion $\\dfrac{x - 1}{3} = \\dfrac{x + 1}{5}$ is cross-multiplied. A candidate claims that the unique real solution is $x = 2$.`,
      `Clearing the denominator in $\\dfrac{2x}{3} = 8$ by multiplying through by $3$ is said to give the unique real solution $x = 10$.`,
      `The equation $\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ is cleared by multiplying through by $12$. A student reports that the unique real solution is $x = 10$.`,
      `The solution of $\\dfrac{3x + 1}{4} = 4$, after multiplying through by $4$, is $x = 5$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Multiply through by $6$: $3x + 2x = 30 \\Rightarrow x = 6$. The claim says $x = 8$. Eight would give $4 + \\frac{8}{3}$, not $5$. The solution is $6$, so the statement is False.`,
      `**B.** → False

$$5(x - 1) = 3(x + 1) \\Rightarrow 5x - 5 = 3x + 3 \\Rightarrow x = 4$$

The claim says $x = 2$. The recovered solution is $4$, so the statement is False.`,
      `**C.** → False

$$2x = 24 \\Rightarrow x = 12$$

The claim says $x = 10$. The statement is False.`,
      `**D.** → False

Multiply through by $12$: $3x - 2x = 12 \\Rightarrow x = 12$. The claim says $x = 10$. The solution is $12$, so the statement is False.`,
      `**E.** → True

$$3x + 1 = 16 \\Rightarrow x = 5$$

Check: $\\frac{16}{4} = 4$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 8,
    solution_overview: `Five independent linear equations with one or two fractional terms. Clear denominators by multiplying through by the least common denominator, then finish as a linear equation in $x$.`,
  },
  {
    id: `math-4-9`,
    case_id: `MATH 4.09`,
    title: `Five closed stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `If one side of a rectangle is by $3$ cm longer than the other one and the rectangle's perimeter is $22$ cm, then the length of the longer side is $5$ cm.`,
      `A car travels at an average speed of $64$ km/h. At $3$ pm, it has traveled a total distance of $112$ km. Then it started traveling at $1{:}15$ pm.`,
      `A recipe calls for $5\\%$ vinegar. If the cook only has $1$ litre of $8\\%$ vinegar, he needs to mix it with $0.6$ litres of water to get the right concentration.`,
      `A prize money of $12200$ EUR is supposed to be split among the winners in a way that the $2$nd placed obtains $80\\%$ of the amount the $1$st placed obtains, and the $3$rd placed obtains $80\\%$ of the $2$nd placed. Then the prize for the $2$nd place is $4000$ EUR.`,
      `The solution of the equation $2x + 1 = x + 8$ is smaller than $5$.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Let the shorter side be $x$ cm. Then the longer side is $x + 3$, and

$$2\\bigl(x + (x + 3)\\bigr) = 22 \\Rightarrow 2x + 3 = 11 \\Rightarrow x = 4$$

The longer side is $7$ cm, not $5$. Five would be the shorter side of a $5$ by $8$ rectangle, which has perimeter $26$ cm, not $22$. The statement is False.`,
      `**B.** → True

Time on the road is distance over speed:

$$t = \\frac{112}{64} = 1.75$$

hours, which is $1$ hour $45$ minutes. Counting back from $3$ pm lands at $1{:}15$ pm. The statement is True.`,
      `**C.** → True

One litre of $8\\%$ vinegar holds $0.08$ litres of pure vinegar. After adding $w$ litres of water the concentration should be $5\\%$:

$$\\frac{0.08}{1 + w} = 0.05 \\Rightarrow 0.08 = 0.05 + 0.05w \\Rightarrow w = 0.6$$

The statement is True.`,
      `**D.** → True

Let first place be $a$ EUR. Then second is $0.8a$ and third is $0.64a$.

$$a + 0.8a + 0.64a = 12200 \\Rightarrow 2.44a = 12200 \\Rightarrow a = 5000$$

Second place is $0.8 \\cdot 5000 = 4000$ EUR. The statement is True.`,
      `**E.** → False

$$2x + 1 = x + 8 \\Rightarrow x = 7$$

Seven is not smaller than $5$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `Five independent closed claims in the exam mix: a perimeter, a speed, a dilution, a percentage split, and a short linear equation.`,
  },
  {
    id: `math-4-10`,
    case_id: `MATH 4.10`,
    title: `One solution, none, or every $x$`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The linear equation $x + 3 = x + 5$ is said to have the unique real solution $x = 0$.`,
      `The equation $2(x + 4) = 2x + 8$ simplifies to an identity. It is therefore true for every real number $x$.`,
      `The equation $-3x = 12$ is solved by dividing by $-3$. A student reports that the unique real solution is $x = 4$.`,
      `The equation $5x + 2 = 5x + 2$ has identical sides. A candidate claims that it has no real solution.`,
      `The equation $x = x + 1$ is claimed to be solved by $x = 0$.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Subtract $x$: $3 = 5$, which is never true. There is no solution, including $x = 0$. The statement is False.`,
      `**B.** → True

Both sides are $2x + 8$. The equation is an identity, so the statement is True.`,
      `**C.** → False

$$x = \\frac{12}{-3} = -4$$

The claim says $x = 4$. The solution is $-4$, so the statement is False.`,
      `**D.** → False

The two sides are identical, so every real $x$ works: infinitely many solutions, not none. The statement is False.`,
      `**E.** → False

Subtract $x$: $0 = 1$. No solution at all, including $x = 0$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Five independent claims about how many solutions a linear equation can have: one number, every $x$, or none.`,
  },
  {
    id: `math-4-11`,
    case_id: `MATH 4.11`,
    title: `Ages, coins, and a tank that is not yet full`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A father is $28$ years older than his son. In $8$ years the father will be twice as old as the son will be then. The son is now $20$ years old.`,
      `The sum of three consecutive odd integers is $75$. The largest of them is $29$.`,
      `A purse holds only $2$ EUR coins and $5$ EUR coins. There are $16$ coins in all, worth $53$ EUR. Then there are $7$ coins of $5$ EUR.`,
      `Water flows into an empty tank at $15$ litres per minute. After $12$ minutes the tank is four-fifths full, so the tank's capacity is $180$ litres.`,
      `A number plus one-third of itself equals $48$. That number is $40$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the son's present age be $s$. The father is $s + 28$ now. In eight years the father is twice the son.

$$s + 36 = 2(s + 8)$$

$$s + 36 = 2s + 16$$

$$s = 20$$

Now they are $20$ and $48$; in eight years $28$ and $56$, and $56 = 2 \\cdot 28$. The statement is True.`,
      `**B.** → False

Consecutive odd integers differ by $2$. Let the smallest be $n$.

$$n + (n + 2) + (n + 4) = 75$$

$$3n + 6 = 75 \\Rightarrow n = 23$$

The largest is $27$, not $29$. The triple $25, 27, 29$ sums to $81$. The statement is False.`,
      `**C.** → True

Let $x$ be the number of $5$ EUR coins.

$$5x + 2(16 - x) = 53$$

$$3x + 32 = 53 \\Rightarrow x = 7$$

Seven fives and nine twos: $35 + 18 = 53$. The statement is True.`,
      `**D.** → False

Twelve minutes deliver $15 \\cdot 12 = 180$ litres, and that is four-fifths of the tank, not the whole tank.

$$\\text{capacity} = 180 \\cdot \\frac{5}{4} = 225$$

The tank holds $225$ litres, so the statement is False.`,
      `**E.** → False

$$x + \\frac{x}{3} = 48 \\Rightarrow \\frac{4x}{3} = 48 \\Rightarrow x = 36$$

The claim says $40$. Check: $36 + 12 = 48$. The number is $36$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `Five independent stories, each hiding one linear equation: an age relation, consecutive odd integers, a two-coin purse, a tank filled to a fraction of its capacity, and a number plus a fraction of itself.`,
  },
  {
    id: `math-4-12`,
    case_id: `MATH 4.12`,
    title: `Runners, printers, and a train past a pole`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A runner covers $9$ km at $6$ km/h and then $6$ km at $9$ km/h. The whole run takes $2$ hours.`,
      `Two printers working together finish a job in $4$ hours. The faster one alone would take $6$ hours. Then the slower one alone would take $12$ hours.`,
      `A train $180$ m long passes a pole in $12$ seconds. Its speed is $54$ km/h.`,
      `A car leaves a depot at $8{:}00$ at $60$ km/h. A second car leaves the same depot at $9{:}00$ at $90$ km/h, chasing the first. They meet at noon.`,
      `A tap fills a $240$ litre tub in $8$ minutes. Left open for $5$ minutes it pours $150$ litres.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Add the two legs separately. Do not add the speeds.

$$t = \\frac{9}{6} + \\frac{6}{9} = 1.5 + \\frac{2}{3} = \\frac{13}{6}$$

hours, which is $2$ h $10$ min, not $2$ h. The statement is False.`,
      `**B.** → True

$$\\frac{1}{6} + \\frac{1}{s} = \\frac{1}{4} \\Rightarrow \\frac{1}{s} = \\frac{1}{12} \\Rightarrow s = 12$$

The slower printer takes $12$ hours alone. The statement is True.`,
      `**C.** → True

Passing a pole means covering the train's own length: $\\frac{180}{12} = 15$ m/s, and $15 \\cdot 3.6 = 54$ km/h. The statement is True.`,
      `**D.** → False

The first car is already $60$ km ahead at $9{:}00$. They close at $30$ km/h, so they meet after $2$ hours, at $11{:}00$, not noon. The statement is False.`,
      `**E.** → True

The rate is $30$ litres per minute, so five minutes pour $150$ litres. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Five independent motion and work stories. Split a two-leg run into two times; add work rates as fractions of a job per hour; convert m/s to km/h by the factor $3.6$.`,
  },
  {
    id: `math-4-13`,
    case_id: `MATH 4.13`,
    title: `Wire around a garden, angles in a triangle`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An isosceles triangle has perimeter $40$ cm. Each of the two equal sides is $5$ cm longer than the base. Then the base is $10$ cm.`,
      `A rectangular garden is $3$ m longer than it is wide. Fencing all four sides uses $54$ m of wire. Then the width is $12$ m.`,
      `The three angles of a triangle, measured in degrees, are consecutive integers. The largest angle is $61^{\\circ}$.`,
      `A square and an equilateral triangle have the same side length. The triangle's perimeter is $12$ cm, so the square's perimeter is $16$ cm.`,
      `A rectangle has width $8$ cm. If the length is increased by $2$ cm and the width is left unchanged, the perimeter increases by $4$ cm.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$2(b + 5) + b = 40 \\Rightarrow 3b + 10 = 40 \\Rightarrow b = 10$$

Sides $10$, $15$, $15$. The statement is True.`,
      `**B.** → True

$$2(w + w + 3) = 54 \\Rightarrow 2w + 3 = 27 \\Rightarrow w = 12$$

The garden is $12$ m by $15$ m. The statement is True.`,
      `**C.** → True

$$n + (n + 1) + (n + 2) = 180 \\Rightarrow n = 59$$

The largest is $61^{\\circ}$. Check: $59 + 60 + 61 = 180$. The statement is True.`,
      `**D.** → True

The triangle's side is $4$ cm, so the square's perimeter is $4 \\cdot 4 = 16$ cm. The statement is True.`,
      `**E.** → True

Length grows by $2$ cm on each of two sides, so the perimeter grows by $4$ cm. The width never enters that difference. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Five independent geometry stories that stay linear: an isosceles perimeter, a fenced rectangle, consecutive angle measures, and how a perimeter reacts when only the length grows.`,
  },
  {
    id: `math-4-14`,
    case_id: `MATH 4.14`,
    title: `Five separate shopping bills`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A stall sells apples at $2$ EUR per kilogram and pears at $3$ EUR per kilogram. A customer buys some kilograms of each, pays $21$ EUR in total, and takes $3$ kg more apples than pears. The customer therefore bought $3$ kg of pears.`,
      `Notebooks cost $4$ EUR each and pens cost $2$ EUR each. A student buys $5$ more pens than notebooks and pays $22$ EUR in all. Then the student bought $2$ notebooks.`,
      `Tea is $5$ EUR per kilogram and sugar is $2$ EUR per kilogram. A shopper takes twice as much tea as sugar and pays $24$ EUR. Then the tea alone accounted for $20$ EUR of the bill.`,
      `If a customer buys $5$ kg of apples at $2$ EUR per kilogram and $2$ kg of pears at $3$ EUR per kilogram, the bill is $16$ EUR.`,
      `Bread costs $2$ EUR a loaf and milk costs $1.5$ EUR a carton. Four loaves and two cartons come to $11$ EUR, so milk made up less than one-third of that bill.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Let pears be $x$ kg. Then apples are $x + 3$.

$$2(x + 3) + 3x = 21 \\Rightarrow 5x = 15 \\Rightarrow x = 3$$

The customer bought $3$ kg of pears.

The statement is True.`,
      `**B.** → True

Let notebooks be $n$. Then pens are $n + 5$.

$$4n + 2(n + 5) = 22 \\Rightarrow 6n = 12 \\Rightarrow n = 2$$

The statement is True.`,
      `**C.** → True

Let sugar be $s$ kg. Then tea is $2s$.

$$5(2s) + 2s = 24 \\Rightarrow 12s = 24 \\Rightarrow s = 2$$

Tea is $4$ kg, hence $4 \\cdot 5 = 20$ EUR.

The statement is True.`,
      `**D.** → True

Five kilograms of apples cost $10$ EUR and two kilograms of pears cost $6$ EUR, so the bill is $16$ EUR.

The statement is True.`,
      `**E.** → True

Four loaves cost $8$ EUR and two cartons cost $3$ EUR, total $11$ EUR. Milk is $3$ of $11$, which is less than one-third.

The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `Five independent shopping bills, each a linear equation in one unknown. None of the letters shares a stem with the others.`,
  },
  {
    id: `math-4-15`,
    case_id: `MATH 4.15`,
    title: `Five separate percentage and dilution stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A chemist has a vat of $20\\%$ acid. Two litres are drawn off and replaced with water, after which the mixture is $16\\%$ acid. The chemist concludes that the vat originally held $10$ litres.`,
      `Two litres are drawn from a vat of $20\\%$ acid. A lab note claims those two litres contained $0.5$ litres of pure acid.`,
      `After a $20\\%$ discount a jacket costs $64$ EUR. A shop assistant says the original price must therefore have been $90$ EUR.`,
      `A listed price is first raised by $25\\%$ and then reduced by $25\\%$. The claim is that the final price equals the original listed price, because the two percentage changes cancel.`,
      `A salary of $2400$ EUR is increased by $10\\%$ and then by a further $10\\%$. The payroll office reports that the new salary is $2640$ EUR, which is what a single $10\\%$ raise would have given.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Let the original volume be $V$ litres. Drawing $2$ litres of $20\\%$ acid leaves $0.20(V - 2)$ litres of acid in volume $V$.

$$\\frac{0.20(V - 2)}{V} = 0.16 \\quad \\Rightarrow \\quad V = 10$$

The statement is True.`,
      `**B.** → False

The drawn liquid is still $20\\%$ acid, so those two litres hold $0.40$ litres of acid, not $0.5$.

The statement is False.`,
      `**C.** → False

$$0.80p = 64 \\quad \\Rightarrow \\quad p = 80$$

The original price is $80$ EUR, not $90$.

The statement is False.`,
      `**D.** → False

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original, not $100\\%$. Successive percentage changes multiply.

The statement is False.`,
      `**E.** → False

$$2400 \\cdot 1.1 \\cdot 1.1 = 2904$$

not $2640$. Two successive $10\\%$ raises multiply, they do not add.

The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `Five independent percentage stories: a two-step acid swap, a miscounted solute, a discount, successive changes that do not cancel, and two $10\\%$ raises.`,
  },
  {
    id: `math-4-16`,
    case_id: `MATH 4.16`,
    title: `Five separate motion and current stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Towns $X$ and $Y$ are $132$ km apart. At noon a car leaves $X$ toward $Y$ at $48$ km/h. Thirty minutes later a second car leaves $Y$ toward $X$ at $72$ km/h. They meet $54$ minutes after noon.`,
      `A later car starts at $12{:}30$ and the two oncoming cars meet $54$ minutes after noon. A passenger claims the later car has then been driving for a full hour.`,
      `A boat goes $24$ km downstream in $2$ hours and returns the same $24$ km upstream in $3$ hours. The boat's speed in still water is then $12$ km/h.`,
      `A cyclist rides to town at $15$ km/h and back at $10$ km/h. If the one-way distance is $30$ km, the round trip takes $4$ hours, because each leg is supposedly two hours if you average the two times.`,
      `A car leaves town $X$ at $48$ km/h. After a $30$ minute head start it has covered $24$ km.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

After half an hour the first car has covered $24$ km, so $108$ km remains. They close at $120$ km/h, so $t = \\frac{108}{120} = 0.9$ hours after $12{:}30$, which is $54$ minutes after noon.

The statement is True.`,
      `**B.** → False

The later car drives from $12{:}30$ until $12{:}54$, which is $0.9$ hours, or $54$ minutes, not $1$ hour.

The statement is False.`,
      `**C.** → False

Downstream $12$ km/h, upstream $8$ km/h. Still water is their average, $10$ km/h, not $12$.

The statement is False.`,
      `**D.** → False

Outward $2$ hours, return $3$ hours, total $5$, not $4$. Averaging the times is the trap.

The statement is False.`,
      `**E.** → True

Half an hour at $48$ km/h is $24$ km.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Five independent motion claims. A delayed oncoming meeting, a wrong full-hour claim, a current as half the downstream-upstream gap, and a round trip that is not the arithmetic mean of the times.`,
  },
  {
    id: `math-4-17`,
    case_id: `MATH 4.17`,
    title: `A rod, a recipe, and two-fifths of a number`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A metal rod is $2.4$ m long. It is cut into two pieces so that one piece is $60$ cm longer than the other. The shorter piece is $90$ cm.`,
      `The mean of three numbers is $14$. Two of them are $11$ and $15$. The third is $18$.`,
      `A recipe for $8$ portions uses $600$ g of flour. For $12$ portions one therefore needs $1000$ g of flour.`,
      `A rectangle's length is twice its width. The perimeter is $48$ cm, so the width is $10$ cm.`,
      `Three-fifths of a number is $12$ more than one-fifth of the same number. The number is $25$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Work in centimetres: $240$ cm total.

$$x + (x + 60) = 240 \\Rightarrow x = 90$$

The statement is True.`,
      `**B.** → False

The three numbers add to $42$, so the third is $42 - 11 - 15 = 16$, not $18$. The statement is False.`,
      `**C.** → False

Scale by $\\frac{12}{8} = 1.5$: flour $600 \\cdot 1.5 = 900$ g, not $1000$. The statement is False.`,
      `**D.** → False

$$2(2w + w) = 48 \\Rightarrow w = 8$$

The claim says $10$. Ten would force length $20$ and perimeter $60$, not $48$. The recovered width is $8$ cm. The statement is False.`,
      `**E.** → False

$$\\frac{3x}{5} - \\frac{x}{5} = 12 \\Rightarrow \\frac{2x}{5} = 12 \\Rightarrow x = 30$$

The claim says $25$. Check: $18 - 6 = 12$ for $x = 30$. The number is $30$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Five independent stories: a rod in mixed units, a missing value from a mean, a recipe scaled by portions, a $2{:}1$ rectangle, and a comparison of two fifths of the same number.`,
  },
  {
    id: `math-4-18`,
    case_id: `MATH 4.18`,
    title: `Five separate fractional linear equations`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student clears $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$ by multiplying through by the least common multiple of $3$, $4$, and $6$. The unique real solution obtained that way is $x = \\frac{13}{4}$.`,
      `The linear equation $\\frac{x + 1}{2} - \\frac{x - 1}{3} = 2$ is cleared by multiplying through by $6$. After collecting like terms the unique real solution is $x = 7$.`,
      `The least common multiple of the denominators $3$, $4$, and $6$ is $12$, so multiplying $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$ through by $12$ is the economical clearing.`,
      `A candidate solves $\\frac{x}{2} + \\frac{x}{3} = 5$ and reports that the unique real solution is $x = 4$.`,
      `Substituting $x = \\frac{13}{4}$ back into both sides of $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$ makes each side equal $-\\frac{35}{24}$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $12$: $4(x - 2) - 3(2x + 1) = 2x - 24$, so $-2x - 11 = 2x - 24$ and $4x = 13$. Hence $x = \\frac{13}{4}$.

The statement is True.`,
      `**B.** → True

Multiply through by $6$: $3(x + 1) - 2(x - 1) = 12$, so $3x + 3 - 2x + 2 = 12$ and $x = 7$.

The statement is True.`,
      `**C.** → True

$12$ is a multiple of each of $3$, $4$, and $6$, and no smaller positive integer is.

The statement is True.`,
      `**D.** → False

$$\\frac{x}{2} + \\frac{x}{3} = 5 \\Rightarrow \\frac{5x}{6} = 5 \\Rightarrow x = 6$$

not $4$.

The statement is False.`,
      `**E.** → True

Left: $\\frac{5}{12} - \\frac{15}{8} = -\\frac{35}{24}$. Right: $\\frac{13}{24} - 2 = -\\frac{35}{24}$.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent fractional linear equations. One three-denominator equation clears by $12$ to $x = \\frac{13}{4}$. Another two-denominator equation recovers $x = 7$.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Five separate wage, parts, and overtime bills`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A workshop bills $40$ EUR per hour for the first $3$ hours of a job and $60$ EUR per hour after that, plus a fixed $50$ EUR for parts. One job comes to $290$ EUR. Then the job ran for $5$ hours.`,
      `A plumber charges $45$ EUR per hour plus a $30$ EUR call-out fee. A visit that comes to $165$ EUR therefore lasted $3$ hours.`,
      `On a $290$ EUR workshop job billed at $40$ EUR per hour for the first $3$ hours, $60$ EUR per hour after that, and $50$ EUR for parts, labour was billed at $240$ EUR, with the remaining $50$ EUR being parts.`,
      `The two-band tariff of $40$ EUR per hour for the first $3$ hours and $60$ EUR per hour after that, plus $50$ EUR parts, would also cost $290$ EUR for a $4$ hour job, because overtime would already have started.`,
      `A $50$ EUR parts charge on a $290$ EUR bill is less than one-fifth of that bill.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Overtime: $120 + 60(h - 3) + 50 = 290$ gives $h = 5$.

The statement is True.`,
      `**B.** → True

$$45h + 30 = 165 \\Rightarrow 45h = 135 \\Rightarrow h = 3$$

The statement is True.`,
      `**C.** → True

Labour is $120 + 120 = 240$ EUR, and $240 + 50 = 290$.

The statement is True.`,
      `**D.** → False

Four hours: $120 + 60 + 50 = 230$ EUR, not $290$.

The statement is False.`,
      `**E.** → True

$\\frac{50}{290} < \\frac{1}{5}$.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Five independent billing claims. A two-band labour tariff plus parts recovers $5$ hours. A second call-out story recovers $3$ hours.`,
  },
  {
    id: `math-4-20`,
    case_id: `MATH 4.20`,
    title: `Five separate clock and time-gain stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A clock is set right at noon and gains $4$ minutes in every true hour. When the clock first shows $8$ pm, a student claims the true time is $7{:}20$ pm.`,
      `A clock that gains $4$ minutes in every true hour runs $64$ minutes of its own for every $60$ true minutes.`,
      `A clock set right at noon gains $4$ minutes per true hour. When it first shows $8$ pm, the true time is $7{:}30$ pm, because $480$ clock minutes correspond to $450$ true minutes.`,
      `True time when a clock that gains $4$ minutes per true hour shows $8$ pm is $8$ hours minus $4 \\cdot 8 = 32$ minutes, hence $7{:}28$ pm.`,
      `A clock that gains $4$ minutes per true hour shows $4{:}20$ after $4$ true hours have passed.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

True minutes $= 480 \\cdot \\frac{60}{64} = 450$, which is $7{:}30$ pm, not $7{:}20$.

The statement is False.`,
      `**B.** → True

A gain of $4$ minutes per true hour means $64$ clock minutes per $60$ true minutes.

The statement is True.`,
      `**C.** → True

Those $450$ true minutes after noon are $7{:}30$ pm.

The statement is True.`,
      `**D.** → False

Subtracting $4$ minutes per hour shown treats the gain as if it were $4$ minutes of true time per clock hour. The correct factor is $\\frac{60}{64}$.

The statement is False.`,
      `**E.** → False

Four true hours put $4 \\cdot 64 = 256$ minutes on the clock, which is $4$ hours $16$ minutes, not $4{:}20$.

The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Five independent clock claims. True time is clock time times $\\frac{60}{64}$ for a $4$ minute gain per true hour.`,
  },
  {
    id: `math-4-21`,
    case_id: `MATH 4.21`,
    title: `Five separate age and consecutive-number stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A father is now four times as old as his son. In $20$ years the father will be twice as old as the son will be then. The son is now $10$ years old.`,
      `A mother is three times as old as her daughter. In $12$ years the mother will be twice as old as the daughter will be then. The daughter is now $12$ years old.`,
      `A father who is now $40$ will be $50$ in $20$ years.`,
      `If a father is now $40$ and his son is now $10$, their ages differ by $30$ years, and that gap does not change as both grow older.`,
      `Five years ago a father of $40$ and a son of $10$ were in the ratio five to one.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$4s + 20 = 2(s + 20)$ gives $s = 10$.

The statement is True.`,
      `**B.** → True

$3d + 12 = 2(d + 12)$ gives $d = 12$.

The statement is True.`,
      `**C.** → False

In twenty years a $40$-year-old father is $60$, not $50$.

The statement is False.`,
      `**D.** → True

$40 - 10 = 30$. Both ages increase equally, so the gap stays $30$.

The statement is True.`,
      `**E.** → False

Five years ago they were $35$ and $5$, and $35 = 7 \\cdot 5$, not five times.

The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Five independent age claims. Present ages $4s$ and $s$ recover $s = 10$. A second mother-daughter story recovers $d = 12$.`,
  },
  {
    id: `math-4-22`,
    case_id: `MATH 4.22`,
    title: `Five separate train-passing and unit-conversion stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two trains $150$ m and $250$ m long run toward each other at $54$ km/h and $36$ km/h. From the instant their fronts meet until they have completely passed takes $12$ seconds.`,
      `While those two trains pass they must cover $400$ m relative to one another, the sum of their lengths.`,
      `Their closing speed $90$ km/h converts to $20$ m/s.`,
      `The passing time for those opposite trains is $16$ seconds.`,
      `If the same two trains ran in the same direction, they would take $40$ seconds to pass.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Relative speed $90$ km/h $= 25$ m/s, so $t = \\frac{400}{25} = 16$ seconds, not $12$. The statement is False.`,
      `**B.** → True

Each train must clear the other's full length: $150 + 250 = 400$ m. The statement is True.`,
      `**C.** → False

$$90 \\cdot \\frac{5}{18} = 25$$

metres per second, not $20$. The statement is False.`,
      `**D.** → True

$\\frac{400}{25} = 16$ seconds. The statement is True.`,
      `**E.** → False

Same direction: relative speed $18$ km/h $= 5$ m/s, so $t = 80$ seconds, not $40$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `Five independent passing-train claims. Opposite trains cover the sum of lengths at the sum of speeds. Convert $90$ km/h to $25$ m/s to obtain $16$ seconds.`,
  },
  {
    id: `math-4-23`,
    case_id: `MATH 4.23`,
    title: `Five separate mixing and alloy stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A vat holds $40$ litres of $20\\%$ acid. Ten litres of water are added. The vat is then $16\\%$ acid.`,
      `Starting from that $50$ litre mixture at $16\\%$, a $50\\%$ acid stock is poured in until the mixture is $25\\%$ acid. Then $18$ litres of stock must be added.`,
      `After that stock is added, the final volume is $68$ litres.`,
      `The final $25\\%$ mixture contains $20$ litres of acid.`,
      `The final $25\\%$ mixture contains $17$ litres of acid, which is $25\\%$ of $68$ litres.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Original acid $8$ litres in $50$ litres after the water: $\\frac{8}{50} = 0.16$. The statement is True.`,
      `**B.** → True

$8 + 0.50x = 0.25(50 + x)$ gives $x = 18$. The statement is True.`,
      `**C.** → True

$50 + 18 = 68$ litres. The statement is True.`,
      `**D.** → False

Final acid is $8 + 9 = 17$ litres, not $20$. The statement is False.`,
      `**E.** → True

$\\frac{17}{68} = 0.25$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 23,
    solution_overview: `Five independent mixing claims. Water first drops $40$ litres at $20\\%$ to $50$ litres at $16\\%$. Then $18$ litres at $50\\%$ hit $25\\%$.`,
  },
  {
    id: `math-4-24`,
    case_id: `MATH 4.24`,
    title: `Five separate path, average-speed, and prize stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A farmer has a rectangular field that is $8$ m longer than it is wide. Around the outside he lays a gravel path $1.5$ m wide covering $141$ m$^{2}$. A surveyor concludes that the field is $15$ m wide.`,
      `A gardener has a rectangular lawn that is $4$ m longer than it is wide. Around the outside she lays a $1$ m flower border covering $48$ m$^{2}$, and she concludes that the lawn is $9$ m wide.`,
      `A sports pitch measures $12$ m by $20$ m. The groundskeeper adds a uniform $2$ m running path around the outside and reports that the outer length is then $24$ m.`,
      `A $12$ m by $8$ m patio is given a $1$ m path around the outside. The groundskeeper claims that this path covers $44$ m$^{2}$.`,
      `Walking once around a $20$ m by $30$ m rectangular field is claimed to cover a distance of $100$ m.`
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ m. Then the length is $w + 8$. The outer rectangle is $w + 3$ by $w + 11$.

$$(w + 3)(w + 11) - w(w + 8) = 141$$

$$6w + 33 = 141 \\quad \\Rightarrow \\quad w = 18$$

The field is $18$ m wide, not $15$ m. Fifteen would make the length $23$ m and the path area $6\\cdot 15 + 33 = 123$ m$^{2}$, not $141$. The statement is False.`,
      `**B.** → True

Let the width be $w$ m. Then the length is $w + 4$. The outer rectangle is $w + 2$ by $w + 6$.

$$(w + 2)(w + 6) - w(w + 4) = 48$$

$$4w + 12 = 48 \\quad \\Rightarrow \\quad w = 9$$

The lawn is $9$ m wide. The statement is True.`,
      `**C.** → True

The path adds $2$ m on each end, so $4$ m in total to the length: $20 + 4 = 24$ m. The statement is True.`,
      `**D.** → True

Outer rectangle $14$ m by $10$ m. Path $140 - 96 = 44$ m$^{2}$. The statement is True.`,
      `**E.** → True

Perimeter $2(20 + 30) = 100$ m. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Five independent path-and-rectangle stories. One $1.5$ m path around a field $8$ m longer than it is wide recovers width $18$ m, not $15$. A second $1$ m path around a lawn $4$ m longer than it is wide recovers width $9$ m.`,
  },
  {
    id: `math-4-25`,
    case_id: `MATH 4.25`,
    title: `Five separate work-rate and leftover-work stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$A$ finishes a job in $12$ days, $B$ in $18$ days, and $C$ in $24$ days. $A$ and $B$ work together for $2$ days, then $C$ joins. After $C$ joins, the three still need $6$ days.`,
      `After those first two days of $A$ and $B$, $\\frac{13}{18}$ of the job remains.`,
      `Then all three need $4$ more days to finish.`,
      `$C$ alone would finish that remainder in $8$ days.`,
      `The combined rate of $A$, $B$, and $C$ is $\\frac{13}{72}$ of a job per day.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

$A$ and $B$ do $\\frac{5}{36}$ per day, so two days leave $\\frac{13}{18}$. All three do $\\frac{13}{72}$ per day, so the rest takes $4$ days, not $6$. The statement is False.`,
      `**B.** → True

$1 - \\frac{5}{18} = \\frac{13}{18}$. The statement is True.`,
      `**C.** → True

Four more days at $\\frac{13}{72}$ finish $\\frac{13}{18}$. The statement is True.`,
      `**D.** → False

$C$ does $\\frac{1}{24}$ per day, so the remainder takes $\\frac{13}{18} \\cdot 24 = \\frac{52}{3}$ days, not $8$. The statement is False.`,
      `**E.** → True

$\\frac{1}{12} + \\frac{1}{18} + \\frac{1}{24} = \\frac{13}{72}$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 25,
    solution_overview: `Five independent work-rate claims. $A$ and $B$ for two days leave $\\frac{13}{18}$. Then $A+B+C = \\frac{13}{72}$ per day finishes the rest in $4$ days.`,
  },
  {
    id: `math-4-26`,
    case_id: `MATH 4.26`,
    title: `Five separate two-speed journey stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $300$ km journey is scheduled to take $5$ hours of clock time, including a $30$ minute rest. The driver holds $80$ km/h before the rest and $40$ km/h after it. Then he drove for $3$ hours at $80$ km/h.`,
      `The slower driving spell on that journey lasted $1.5$ hours.`,
      `He covered $240$ km at the higher speed.`,
      `His average speed for the whole $5$ hours of clock time, rest included, is $60$ km/h.`,
      `Without the rest, the same driving would take $3$ hours.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Driving time $4.5$ hours: $80t + 40(4.5 - t) = 300$ gives $t = 3$. The statement is True.`,
      `**B.** → True

$4.5 - 3 = 1.5$ hours at $40$ km/h. The statement is True.`,
      `**C.** → True

$80 \\cdot 3 = 240$ km. The statement is True.`,
      `**D.** → True

$\\frac{300}{5} = 60$ km/h. The statement is True.`,
      `**E.** → False

Driving time is already $4.5$ hours. Dropping the rest shortens the clock to $4.5$ hours, not $3$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 26,
    solution_overview: `Five independent two-speed claims. Clock $5$ hours with a $0.5$ hour rest leaves $4.5$ hours of driving and recovers $3$ hours at $80$ km/h.`,
  },
  {
    id: `math-4-27`,
    case_id: `MATH 4.27`,
    title: `Five separate race-handicap and garrison stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `In a $100$ m race, $A$ beats $B$ by $20$ m, and $B$ beats $C$ by $25$ m. When $A$ has run $100$ m, $C$ has run $60$ m.`,
      `The speed ratio of $A$ to $B$ in that race is $4 : 5$.`,
      `$A$ beats $C$ by $50$ m in a $100$ m race.`,
      `The speed ratio of $A$ to $C$ is $5 : 3$.`,
      `When $A$ has run $100$ m, $B$ has run $80$ m, which is the opening handicap of $A$ against $B$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

When $A$ runs $100$ m, $B$ has $80$ m. When $B$ runs $100$ m, $C$ has $75$ m, so when $B$ runs $80$ m, $C$ runs $60$ m. The statement is True.`,
      `**B.** → False

$A : B = 100 : 80 = 5 : 4$, not $4 : 5$. The statement is False.`,
      `**C.** → False

$A$ beats $C$ by $40$ m in $100$ m, not $50$. The statement is False.`,
      `**D.** → True

$A : C = 100 : 60 = 5 : 3$. The statement is True.`,
      `**E.** → True

That is the opening $20$ m handicap. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 27,
    solution_overview: `Five independent race-handicap claims. $A:B = 5:4$ and $B:C = 4:3$, so $A:C = 5:3$. When $A$ runs $100$ m, $C$ has run $60$ m.`,
  },
  {
    id: `math-4-28`,
    case_id: `MATH 4.28`,
    title: `Five separate nested linear word equations`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number has this property: if you subtract $3$ and divide by $4$, you get $2$ less than one-third of the number. A student concludes that the unique real number with this property is $15$.`,
      `A number plus $5$, all divided by $2$, equals $3$ less than the number. A candidate reports that the unique real number with this property is $12$.`,
      `Three consecutive integers add to $48$. It is claimed that the middle one must therefore be $16$.`,
      `If you add $1$ to a number and divide by $5$, you get $3$ less than half the number. A student concludes that the unique real number with this property is $12$.`,
      `A tank is $\frac{2}{5}$ full after $12$ minutes at a constant fill rate. The operator concludes that the tank is therefore full after $30$ minutes.`
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $12$: $3(x - 3) = 4x - 24$, so $x = 15$. The statement is True.`,
      `**B.** → False

$$\\frac{x + 5}{2} = x - 3 \\quad \\Rightarrow \\quad x + 5 = 2x - 6 \\quad \\Rightarrow \\quad x = 11$$

The number is $11$, not $12$. The statement is False.`,
      `**C.** → True

Let the middle integer be $n$. Then $(n - 1) + n + (n + 1) = 48$, so $3n = 48$ and $n = 16$. The statement is True.`,
      `**D.** → False

Multiply through by $10$: $2(x + 1) = 5x - 30$, so $2x + 2 = 5x - 30$ and $x = \\frac{32}{3}$, not $12$. The statement is False.`,
      `**E.** → True

Twelve minutes are $\\frac{2}{5}$ of the full time, so the full time is $12 \\cdot \\frac{5}{2} = 30$ minutes. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 28,
    solution_overview: `Five independent nested linear claims. One word equation clears by $12$ to $x = 15$. A second, $\\frac{x + 5}{2} = x - 3$, recovers $x = 11$. A third, $\\frac{x + 1}{5} = \\frac{x}{2} - 3$, recovers $x = \\frac{32}{3}$.`,
  },
  {
    id: `math-4-29`,
    case_id: `MATH 4.29`,
    title: `A square of area $49$, and both signs of a square root`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square has area $49$ cm$^{2}$. Then each side is $7$ cm.`,
      `A number times itself equals $16$. The only real number that works is $4$.`,
      `A number times itself equals $36$. One number that works is $7$.`,
      `If a square of side $x$ cm has area $9$ cm$^{2}$, then $x = 3$ is the only real possibility.`,
      `$5^{2} - 4^{2}$ equals $7$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The area of a square is the side times itself. If the side is $s$ cm, then

$$s^{2} = 49$$

A length is positive, so $s = 7$, not $-7$. Check: $7 \\cdot 7 = 49$. Each side is $7$ cm, so the statement is True.`,
      `**B.** → False

$$x^{2} = 16$$

splits into two real numbers, because $(-4)^{2} = 16$ as well as $4^{2} = 16$. The claim says $4$ is the only real number that works. There are two: $4$ and $-4$. The statement is False.`,
      `**C.** → False

$$x^{2} = 36$$

has solutions $x = 6$ and $x = -6$. Seven is not among them: $7^{2} = 49$. The statement is False.`,
      `**D.** → False

A geometric side must be positive, so $x = 3$ is the side of that square. But the equation $x^{2} = 9$ as a number sentence also has $x = -3$. The claim says $x = 3$ is the only real possibility for that equation. As an equation it is not; as a length it is. The statement is about the equation of area written with $x$, and it rules out $-3$ without saying "side length". The only-real-possibility wording is therefore false for $x^{2} = 9$. The statement is False.`,
      `**E.** → False

$$5^{2} - 4^{2} = 25 - 16 = 9$$

The difference is $9$, not $7$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 29,
    solution_overview: `Five independent claims about squares. $x^{2} = a$ with $a > 0$ has two real roots, $\\pm\\sqrt{a}$. A geometric side is the positive one. Keep those two readings separate.`,
  },
  {
    id: `math-4-30`,
    case_id: `MATH 4.30`,
    title: `When a product is zero, a factor is zero`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solutions of $(x - 2)(x - 5) = 0$ are $x = 3$ and $x = 5$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has solutions $2$ and $3$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has solutions $1$ and $6$.`,
      `If a product of two real numbers is zero, then at least one of those numbers is zero.`,
      `The equation $x^{2} = 5x$ has only the solution $x = 5$.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

A product is zero only when at least one factor is zero.

$$x - 2 = 0 \\quad \\text{or} \\quad x - 5 = 0$$

so $x = 2$ or $x = 5$, not $3$ and $5$. At $x = 3$: $(1)(-2) = -2 \\neq 0$. The statement is False.`,
      `**B.** → True

Factor the left side.

$$x^{2} - 5x + 6 = (x - 2)(x - 3)$$

The roots are $2$ and $3$. Check: $2 + 3 = 5$ and $2 \\cdot 3 = 6$, which match the coefficients. The statement is True.`,
      `**C.** → False

$1$ and $6$ add to $7$ and multiply to $6$. The equation needs sum $5$ and product $6$. Those are $2$ and $3$, not $1$ and $6$. Plugging $x = 1$ gives $1 - 5 + 6 = 2$, not $0$. The statement is False.`,
      `**D.** → True

That is the zero-product property: $ab = 0$ if and only if $a = 0$ or $b = 0$ (or both). It is why factoring solves a quadratic. The statement is True.`,
      `**E.** → False

Bring every term to one side before dividing. Dividing by $x$ would throw away the root $x = 0$.

$$x^{2} - 5x = 0$$

$$x(x - 5) = 0$$

so $x = 0$ or $x = 5$. The claim keeps only $5$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 30,
    solution_overview: `Five independent claims about factoring. Move everything to one side, factor, then set each factor to zero. Do not divide away a possible $x = 0$.`,
  },
  {
    id: `math-4-31`,
    case_id: `MATH 4.31`,
    title: `Five separate square and consecutive-integer stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square has area $64$ m$^{2}$. Then its side is $8$ m, taking the positive length.`,
      `Two consecutive integers multiply to $12$. The positive pair is $3$ and $4$.`,
      `Two consecutive integers multiply to $12$. The pair $2$ and $6$ is not consecutive, even though the product happens to be $12$.`,
      `A rectangle is $1$ cm longer than it is wide and has area $12$ cm$^{2}$. Then the width is $3$ cm.`,
      `A rectangle is $1$ cm longer than it is wide and has area $12$ cm$^{2}$. Then the longer side is $4$ cm.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$s^{2} = 64 \\Rightarrow s = 8$$

because a length is positive. Check: $8 \\cdot 8 = 64$.

The statement is True.`,
      `**B.** → True

$$n(n + 1) = 12 \\Rightarrow n^{2} + n - 12 = 0 \\Rightarrow (n + 4)(n - 3) = 0$$

The positive pair is $3$ and $4$.

The statement is True.`,
      `**C.** → True

$2$ and $6$ are not consecutive, even though $2 \\cdot 6 = 12$. Consecutive integers differ by $1$.

The statement is True.`,
      `**D.** → True

$$x(x + 1) = 12 \\Rightarrow x^{2} + x - 12 = 0$$

The positive width is $x = 3$.

The statement is True.`,
      `**E.** → True

Width $3$ cm and length $4$ cm. The longer side is $4$ cm.

The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 31,
    solution_overview: `Five independent square and consecutive-integer stories. A product of consecutive integers is $n(n + 1)$, which is a quadratic.`,
  },
  {
    id: `math-4-32`,
    case_id: `MATH 4.32`,
    title: `A repeated root and a discriminant of zero`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{2} - 4x = 0$ means $x$ is $0$ or $5$.`,
      `A number squared, minus four times the number, is zero. Zero itself is not allowed.`,
      `The discriminant of $x^{2} - 4x + 4$ is $4$.`,
      `The equation $x^{2} - 4x + 4 = 0$ has two distinct real roots.`,
      `The equation $(x - 2)^{2} = 0$ has solution $x = 2$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

$$x(x - 4) = 0$$

so $x = 0$ or $x = 4$. The claim listed $0$ or $5$. Five would solve $x(x - 5) = 0$, not this equation. The statement is False.`,
      `**B.** → False

That is the same equation. $x = 0$ gives $0 - 0 = 0$. Zero is a genuine solution, not a discarded extra. The statement is False.`,
      `**C.** → False

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$.

$$\\Delta = (-4)^{2} - 4\\cdot 1\\cdot 4 = 16 - 16 = 0$$

The claim says $4$. The discriminant is $0$, so the statement is False.`,
      `**D.** → False

$\\Delta = 0$ means a repeated real root, not two distinct ones. The root is $x = 2$, twice. $(x - 2)^{2} = 0$ makes that visible. The statement is False.`,
      `**E.** → True

A square is zero only at zero, so $x - 2 = 0$ and $x = 2$. Check: $(2 - 2)^{2} = 0$. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 32,
    solution_overview: `Five independent claims about $x^{2} - 4x$ and the perfect square $x^{2} - 4x + 4$. Discriminant zero means one repeated real root, not two different ones.`,
  },
  {
    id: `math-4-33`,
    case_id: `MATH 4.33`,
    title: `Five separate Vieta claims from different quadratics`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For the monic quadratic $x^{2} - 7x + 10 = 0$, the sum of the roots is $7$.`,
      `For the monic quadratic $x^{2} - 9x + 20 = 0$, the product of the roots is $20$.`,
      `The roots of $x^{2} - 7x + 10 = 0$ are $3$ and $4$.`,
      `The larger root of $x^{2} - 7x + 10 = 0$ is $6$.`,
      `Both roots of $x^{2} - 7x + 10 = 0$ are greater than $4$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Vieta's formulas for $x^{2} - (\\text{sum})x + (\\text{product}) = 0$ give sum $7$. You can also add the roots: $2 + 5 = 7$.

The statement is True.`,
      `**B.** → True

The constant term of a monic quadratic is the product of the roots. Factor: $(x - 4)(x - 5) = x^{2} - 9x + 20$, and $4 \\cdot 5 = 20$.

The statement is True.`,
      `**C.** → False

Factor: $(x - 2)(x - 5) = x^{2} - 7x + 10$. The roots are $2$ and $5$, not $3$ and $4$.

The statement is False.`,
      `**D.** → False

The larger root is $5$, not $6$.

The statement is False.`,
      `**E.** → False

$5 > 4$, but $2$ is not greater than $4$.

The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 33,
    solution_overview: `Five independent Vieta claims. For $x^{2} - Sx + P = 0$ the sum of roots is $S$ and the product is $P$.`,
  },
  {
    id: `math-4-34`,
    case_id: `MATH 4.34`,
    title: `A quadratic with roots $2$ and $-3$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The quadratic equation $x^{2} + x - 6 = 0$ is factored and solved. A student reports that it has a positive root $3$.`,
      `The quadratic equation $x^{2} + x - 6 = 0$ has negative root $-2$.`,
      `The discriminant of $x^{2} + x - 6$ is $16$.`,
      `The quadratic $x^{2} + x - 6 = 0$ has two distinct real solutions.`,
      `The quadratic $x^{2} + x - 6 = 0$ has no real solution.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

$$x^{2} + x - 6 = (x + 3)(x - 2)$$

The roots are $-3$ and $2$. The positive one is $2$, not $3$. Check of $3$: $9 + 3 - 6 = 6$, not $0$. The statement is False.`,
      `**B.** → False

The negative root is $-3$, not $-2$. Check of $-2$: $4 - 2 - 6 = -4$, not $0$. The statement is False.`,
      `**C.** → False

$$\\Delta = 1^{2} - 4(1)(-6) = 1 + 24 = 25$$

The claim says $16$. Sixteen would be $4^{2}$, or the discriminant of $x^{2} + x - 4$. The discriminant is $25$, so the statement is False.`,
      `**D.** → True

$\\Delta = 25 > 0$, so there are two distinct real roots. They are $2$ and $-3$. The statement is True.`,
      `**E.** → False

No real solution would need $\\Delta < 0$. Here $\\Delta = 25$, and two real roots were already found. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 34,
    solution_overview: `Five independent claims about $x^{2} + x - 6 = 0$. Factor as $(x + 3)(x - 2)$, or read the discriminant $25$ to know there are two distinct real roots.`,
  },
  {
    id: `math-4-35`,
    case_id: `MATH 4.35`,
    title: `Five separate rectangle and consecutive-integer stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle is $2$ cm longer than it is wide, and its area is $48$ cm$^{2}$. The longer side is then $8$ cm.`,
      `Two consecutive positive integers multiply to $42$. The smaller of the two is $6$.`,
      `A $6$ cm by $8$ cm rectangle has perimeter $28$ cm.`,
      `A rectangle of width $6$ cm and length $10$ cm has area $48$ cm$^{2}$.`,
      `A rectangle of area $48$ cm$^{2}$ whose length is $2$ cm more than its width has sides that differ by $2$ cm.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $x$ cm. Then $x(x + 2) = 48$, so $x^{2} + 2x - 48 = 0$ and $(x + 8)(x - 6) = 0$. The positive width is $6$, so the longer side is $8$ cm.

The statement is True.`,
      `**B.** → True

$$n(n + 1) = 42 \\Rightarrow n^{2} + n - 42 = 0 \\Rightarrow (n + 7)(n - 6) = 0$$

The positive smaller integer is $6$, and $6 \\cdot 7 = 42$.

The statement is True.`,
      `**C.** → True

$$P = 2(6 + 8) = 28$$

The statement is True.`,
      `**D.** → False

Keeping width $6$ and stretching the length to $10$ gives area $60$, not $48$.

The statement is False.`,
      `**E.** → True

That is the opening relation: length is $2$ cm more than width.

The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 35,
    solution_overview: `Five independent quadratic stories: a $6$ by $8$ rectangle of area $48$, consecutive integers with product $42$, and a $6$ by $10$ area trap.`,
  },
  {
    id: `math-4-36`,
    case_id: `MATH 4.36`,
    title: `Two consecutive integers whose product is $56$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two consecutive integers multiply to $56$. Solving $n(n + 1) = 56$ for the smaller integer, the smaller positive one is $7$.`,
      `Two consecutive positive integers multiply to $56$. The larger of that pair is $8$.`,
      `Two consecutive integers multiply to $56$. Besides the positive pair there is also a negative pair, $-8$ and $-7$.`,
      `The integers $6$ and $9$ multiply to $54$, not $56$, and they are not consecutive.`,
      `Two consecutive positive integers that multiply to $56$ add to $15$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$n(n + 1) = 56$$

$$n^{2} + n - 56 = 0$$

$$(n + 8)(n - 7) = 0$$

The positive smaller integer is $7$, and $7 \\cdot 8 = 56$. The statement is True.`,
      `**B.** → True

The next integer after $7$ is $8$. The statement is True.`,
      `**C.** → True

The other root is $n = -8$, so the pair is $-8$ and $-7$, and $(-8)\\cdot(-7) = 56$. The statement is True.`,
      `**D.** → True

$6 \\cdot 9 = 54$, not $56$, and those two are not consecutive. The statement is True.`,
      `**E.** → True

$7 + 8 = 15$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 36,
    solution_overview: `Five independent claims about $n(n + 1) = 56$. The integer solutions for $n$ are $7$ and $-8$, giving the pairs $7, 8$ and $-8, -7$.`,
  },
  {
    id: `math-4-37`,
    case_id: `MATH 4.37`,
    title: `A $5$ by $12$ rectangle from area $60$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle has area $60$ cm$^{2}$, and its length is $7$ cm more than its width. A carpenter concludes that the width is $5$ cm.`,
      `A rectangle measuring $5$ cm by $11$ cm is claimed to have area $60$ cm$^{2}$.`,
      `A rectangle measuring $5$ cm by $12$ cm is claimed to have perimeter $40$ cm.`,
      `A right triangle has legs $5$ cm and $12$ cm. Pythagoras is then said to give a hypotenuse of $13$ cm.`,
      `A garden is $4$ m longer than it is wide and has area $45$ m$^{2}$. A plan claims that the width is $6$ m.`
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $w + 7$.

$$w(w + 7) = 60$$

$$w^{2} + 7w - 60 = 0$$

$$\\Delta = 49 + 240 = 289 = 17^{2}$$

$$w = \\frac{-7 \\pm 17}{2}$$

The positive value is $w = 5$. Check: $5 \\cdot 12 = 60$. The statement is True.`,
      `**B.** → False

$5 \\cdot 11 = 55$, not $60$. The statement is False.`,
      `**C.** → False

$$P = 2(5 + 12) = 34$$

The perimeter is $34$ cm, not $40$. The statement is False.`,
      `**D.** → True

$$d^{2} = 5^{2} + 12^{2} = 25 + 144 = 169$$

so $d = 13$. The statement is True.`,
      `**E.** → False

$$w(w + 4) = 45 \\Rightarrow w^{2} + 4w - 45 = 0 \\Rightarrow (w + 9)(w - 5) = 0$$

The positive width is $5$ m, not $6$ m. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 37,
    solution_overview: `One rectangle: area $60$, length $7$ more than width. The quadratic $w^{2} + 7w - 60 = 0$ has positive root $5$, so the sides are $5$ cm and $12$ cm, a $5$-$12$-$13$ right triangle on the diagonal.`,
  },
  {
    id: `math-4-38`,
    case_id: `MATH 4.38`,
    title: `Five separate Pythagoras and factoring stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The positive root of $x^{2} - 2x - 15 = 0$ is $6$.`,
      `A right triangle has legs $x$ cm and $x + 1$ cm and hypotenuse $5$ cm. Then the shorter leg is $3$ cm.`,
      `A triangle with sides $3$ cm, $4$ cm, and $5$ cm is equilateral.`,
      `A right triangle with legs $3$ cm and $4$ cm has area $12$ cm$^{2}$.`,
      `A right triangle with legs $3$ cm and $4$ cm and hypotenuse $5$ cm has longer leg $4$ cm.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A.** → False

$$x^{2} - 2x - 15 = (x - 5)(x + 3)$$

The roots are $5$ and $-3$. The positive one is $5$, not $6$.

The statement is False.`,
      `**B.** → True

Pythagoras gives $x^{2} + (x + 1)^{2} = 25$, so $x^{2} + x - 12 = 0$ and $(x + 4)(x - 3) = 0$. The positive leg is $x = 3$.

The statement is True.`,
      `**C.** → False

The sides $3$, $4$, and $5$ are three different lengths. An equilateral triangle would need all three equal.

The statement is False.`,
      `**D.** → False

Area is half the product of the legs: $\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$, not $12$.

The statement is False.`,
      `**E.** → True

The legs are $3$ and $4$, so the longer leg is $4$ cm.

The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 38,
    solution_overview: `Five independent claims. One is a factored quadratic. The others turn Pythagoras $x^{2} + (x + 1)^{2} = 25$ into a $3$-$4$-$5$ triangle.`,
  },
  {
    id: `math-4-39`,
    case_id: `MATH 4.39`,
    title: `Three quadratics that differ only in the constant`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{2} + 4x + 5 = 0$ has no real roots.`,
      `The equation $x^{2} + 4x + 4 = 0$ has exactly one real solution (a double root).`,
      `The equation $x^{2} + 4x + 3 = 0$ has two distinct real roots.`,
      `Those two roots of $x^{2} + 4x + 3 = 0$ are $-1$ and $-3$.`,
      `Those three equations have $0$, $1$, and $2$ distinct real roots, in that order.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\Delta = 16 - 20 = -4 < 0$$

No real roots. Completing the square gives $(x + 2)^{2} + 1 = 0$, a square plus one, which cannot be zero. The statement is True.`,
      `**B.** → True

$$\\Delta = 16 - 16 = 0$$

and $x^{2} + 4x + 4 = (x + 2)^{2}$, so $x = -2$ is a double root. Exactly one real solution. The statement is True.`,
      `**C.** → True

$$\\Delta = 16 - 12 = 4 > 0$$

Two distinct real roots. The statement is True.`,
      `**D.** → True

$(x + 1)(x + 3) = x^{2} + 4x + 3$. The roots are $-1$ and $-3$. The statement is True.`,
      `**E.** → True

The three discriminants are negative, zero, and positive, so the counts are $0$, $1$, and $2$ distinct real roots. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 39,
    solution_overview: `Five independent discriminant claims for $x^{2} + 4x + c$ with $c = 5, 4, 3$. The sign of $\\Delta = 16 - 4c$ decides whether there are two, one, or no real roots.`,
  },
  {
    id: `math-4-40`,
    case_id: `MATH 4.40`,
    title: `Two numbers that add to $10$ and multiply to $21$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two numbers add to $10$ and multiply to $21$. They are $4$ and $6$.`,
      `Those two numbers are the roots of $t^{2} - 10t + 24 = 0$.`,
      `Both numbers are larger than $4$.`,
      `Their difference is $4$.`,
      `Each of them is negative.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

$4 + 6 = 10$, but $4 \\cdot 6 = 24$, not $21$. The pair with product $21$ is $3$ and $7$. The statement is False.`,
      `**B.** → False

Numbers that add to $10$ and multiply to $21$ are the roots of $t^{2} - 10t + 21 = 0$, because

$$(t - 3)(t - 7) = t^{2} - 10t + 21.$$

The claimed equation is $t^{2} - 10t + 24 = 0$, whose constant term is $24$, not $21$. That one factors as $(t - 4)(t - 6)$, so its roots are $4$ and $6$. Those add to $10$ as well, but they multiply to $24$. The statement is False.`,
      `**C.** → False

$7 > 4$, but $3$ is not larger than $4$. Both numbers larger than $4$ would need a product larger than $16$ with sum $10$ in a different pair, such as $4$ and $6$. The statement is False.`,
      `**D.** → True

$$7 - 3 = 4$$

The two numbers differ by $4$. The statement is True.`,
      `**E.** → False

Both $3$ and $7$ are positive. A negative pair with product $21$ would need a negative sum as well. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 40,
    solution_overview: `Five independent claims about two numbers with sum $10$ and product $21$. They are the roots of $t^{2} - (\\text{sum})t + (\\text{product}) = 0$, here $t^{2} - 10t + 21 = 0$, so the pair is $3$ and $7$.`,
  },
  {
    id: `math-4-41`,
    case_id: `MATH 4.41`,
    title: `Five separate completing-the-square and factoring claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Completing the square turns $x^{2} - \\frac{7}{2}x - 2 = 0$ into $\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16}$.`,
      `The two real roots of $x^{2} - 6x + 5 = 0$ are $2$ and $4$.`,
      `Both real roots of $x^{2} - \\frac{7}{2}x - 2 = 0$ are positive.`,
      `The positive root of $x^{2} - \\frac{7}{2}x - 2 = 0$ is $4$.`,
      `The product of the roots of $x^{2} - \\frac{7}{2}x - 2 = 0$ is $2$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Half of $\\frac{7}{2}$ is $\\frac{7}{4}$. Adding $\\frac{49}{16}$ produces $\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16}$. The statement is True.`,
      `**B.** → False

$x^{2} - 6x + 5 = (x - 1)(x - 5)$, so the roots are $1$ and $5$, not $2$ and $4$. The statement is False.`,
      `**C.** → False

The roots are $4$ and $-\\frac{1}{2}$. Only one is positive. The statement is False.`,
      `**D.** → True

$x - \\frac{7}{4} = \\pm \\frac{9}{4}$ gives $x = 4$ or $x = -\\frac{1}{2}$. The positive root is $4$. The statement is True.`,
      `**E.** → False

The product is $-2$, not $2$. Check: $4 \\cdot \\left(-\\frac{1}{2}\\right) = -2$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 41,
    solution_overview: `Five independent quadratic claims: completing the square with a fractional middle term, a second monic quadratic $x^{2} - 6x + 5$, and Vieta on the first.`,
  },
  {
    id: `math-4-42`,
    case_id: `MATH 4.42`,
    title: `Five separate frame and rectangle-area stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $24$ cm by $16$ cm picture is surrounded by a uniform frame. The outer area is twice the picture. Then the frame is $4$ cm wide.`,
      `A $30$ cm by $20$ cm picture with a uniform $2$ cm frame all round has outer rectangle $34$ cm by $24$ cm.`,
      `A $24$ cm by $16$ cm picture with a $4$ cm frame has outer area $768$ cm$^{2}$.`,
      `The wood in a $4$ cm frame around a $24$ cm by $16$ cm picture has area $500$ cm$^{2}$.`,
      `A $4$ cm frame around a $24$ cm by $16$ cm picture has wood area $384$ cm$^{2}$, equal to the picture, which is what twice the picture required of the outer area.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$(24 + 2x)(16 + 2x) = 768$ becomes $x^{2} + 20x - 96 = 0$. The positive root is $x = 4$.

The statement is True.`,
      `**B.** → True

The frame adds $4$ cm in each direction: $30 + 4 = 34$ and $20 + 4 = 24$.

The statement is True.`,
      `**C.** → True

$32 \\cdot 24 = 768$, twice $384$.

The statement is True.`,
      `**D.** → False

Wood is $768 - 384 = 384$ cm$^{2}$, not $500$.

The statement is False.`,
      `**E.** → True

$384$ cm$^{2}$ of wood equals the picture.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 42,
    solution_overview: `Five independent frame stories. A $24$ by $16$ picture whose outer area is twice the picture forces a $4$ cm frame. A second picture $30$ by $20$ with a $2$ cm frame is $34$ by $24$.`,
  },
  {
    id: `math-4-43`,
    case_id: `MATH 4.43`,
    title: `Five separate integer-pair product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two positive integers differ by $7$ and multiply to $198$. They are $11$ and $18$.`,
      `Two negative integers also multiply to $198$ and differ by $7$ in that order from more negative to less: $-18$ and $-11$.`,
      `The positive pair $11$ and $18$ adds to $29$.`,
      `The discriminant of $n^{2} + 7n - 198$ is a perfect square, namely $29^{2}$.`,
      `If $n$ is the smaller member of a pair with difference $7$ and product $198$, then $n(n + 7) = 198$ has two integer solutions.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$n^{2} + 7n - 198 = 0$ has $\\Delta = 841 = 29^{2}$, so $n = 11$ or $n = -18$. The positive pair is $11$ and $18$. The statement is True.`,
      `**B.** → True

$(-18)\\cdot(-11) = 198$ and $-11 - (-18) = 7$. The statement is True.`,
      `**C.** → True

$11 + 18 = 29$. The statement is True.`,
      `**D.** → True

$\\Delta = 49 + 792 = 841 = 29^{2}$. The statement is True.`,
      `**E.** → True

The two integer solutions are $n = 11$ and $n = -18$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Five independent claims about integer pairs with difference $7$ and product $198$. The model $n(n + 7) = 198$ has integer roots $11$ and $-18$.`,
  },
  {
    id: `math-4-44`,
    case_id: `MATH 4.44`,
    title: `Five separate rectangle-side stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A picture frame is $1$ cm longer than twice its width, and the area of the picture is $36$ cm$^{2}$. A student claims the width is $6$ cm.`,
      `A banner is twice as long as it is wide and has area $48$ cm$^{2}$. A student claims the length is $12$ cm.`,
      `A $4$ cm by $9$ cm noticeboard is to be edged with tape. The tape around the perimeter is claimed to measure $40$ cm.`,
      `A carpenter cuts a board $5$ cm wide and $11$ cm long and claims the area is $36$ cm$^{2}$, with the length $1$ cm more than twice the width.`,
      `A garden bed has area $45$ cm$^{2}$ and is $4$ cm longer than it is wide. A plan claims the width is $5$ cm.`
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

$w(2w + 1) = 36$ gives $2w^{2} + w - 36 = 0$, so $w = 4$, not $6$. The statement is False.`,
      `**B.** → False

$w(2w) = 48$ gives $2w^{2} = 48$, so $w^{2} = 24$. Length $2w$ is $2\\sqrt{24}$, not $12$. If the length were $12$ cm then the width would be $6$ cm and the area $72$, not $48$. The statement is False.`,
      `**C.** → False

$P = 2(4 + 9) = 26$, not $40$. The statement is False.`,
      `**D.** → False

$5 \\cdot 11 = 55$, not $36$, and $11$ is not $1$ more than twice $5$. The statement is False.`,
      `**E.** → True

$w(w + 4) = 45$ gives $w^{2} + 4w - 45 = 0$, so $(w + 9)(w - 5) = 0$. The positive width is $5$ cm. Check: $5 \\cdot 9 = 45$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `Five independent rectangle claims. $w(2w + 1) = 36$ has positive width $4$ cm, not $6$. A second rectangle $w(w + 4) = 45$ has width $5$ cm.`,
  },
  {
    id: `math-4-45`,
    case_id: `MATH 4.45`,
    title: `Five separate projectile and $t^{2}$ motion stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A stone thrown upward has height $h = 20t - 5t^{2}$ metres after $t$ seconds. After $1$ second the height is $15$ m.`,
      `A projectile with height $h = 20t - 5t^{2}$ metres reaches a maximum height of $20$ m.`,
      `The same height formula $h = 20t - 5t^{2}$ has its maximum at $t = 3$ seconds.`,
      `A stone with height $h = 16t - 4t^{2}$ metres is back at ground level after $3$ seconds.`,
      `After $2$ seconds the height $h = 20t - 5t^{2}$ is $30$ m.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$h(1) = 20 - 5 = 15$.

The statement is True.`,
      `**B.** → True

$h = 20 - 5(t - 2)^{2}$, so the peak is $20$ m at $t = 2$.

The statement is True.`,
      `**C.** → False

The vertex is at $t = 2$, not $3$.

The statement is False.`,
      `**D.** → False

$h = 4t(4 - t) = 0$ at $t = 0$ and $t = 4$, not $t = 3$.

The statement is False.`,
      `**E.** → False

$h(2) = 40 - 20 = 20$ m, the maximum, not $30$.

The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Five independent projectile claims. $h = 20t - 5t^{2}$ peaks at $t = 2$ seconds and $h = 20$ m. A second parabola $h = 16t - 4t^{2}$ returns at $t = 4$.`,
  },
  {
    id: `math-4-46`,
    case_id: `MATH 4.46`,
    title: `Five separate Vieta sum-and-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two ticket prices add to $15$ EUR and multiply to $44$. A clerk reports that the two prices are $4$ EUR and $11$ EUR.`,
      `Two numbers add to $10$ and multiply to $21$. A clerk says they differ by $4$.`,
      `Two share amounts add to $9$ EUR and multiply to $14$. The treasurer reports that they are $3$ EUR and $6$ EUR.`,
      `Two numbers add to $8$ and multiply to $15$. Increasing each by $1$ and multiplying those increased values is claimed to give $24$.`,
      `Two numbers add to $10$ and multiply to $21$. The sum of their squares is then claimed to be $58$.`
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$t^{2} - 15t + 44 = 0$ has $\\Delta = 49$, so $t = 11$ or $t = 4$. The statement is True.`,
      `**B.** → True

$t^{2} - 10t + 21 = 0$ has roots $7$ and $3$, and $7 - 3 = 4$. The statement is True.`,
      `**C.** → False

$3 + 6 = 9$ but $3 \\cdot 6 = 18$, not $14$. The pair with sum $9$ and product $14$ is $2$ and $7$. The statement is False.`,
      `**D.** → True

$(x + 1)(y + 1) = xy + x + y + 1 = 15 + 8 + 1 = 24$. The statement is True.`,
      `**E.** → True

$x^{2} + y^{2} = (x + y)^{2} - 2xy = 100 - 42 = 58$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `Five independent Vieta claims. Pairs with given sum and product are the roots of $t^{2} - (\\text{sum})t + (\\text{product}) = 0$. The letters use different pairs.`,
  },
  {
    id: `math-4-47`,
    case_id: `MATH 4.47`,
    title: `Five separate Pythagoras-quadratic stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A right triangle has legs $x$ cm and $x + 7$ cm and hypotenuse $13$ cm. The shorter leg is $5$ cm.`,
      `That triangle has longer leg $10$ cm.`,
      `The area of a $5$-$12$-$13$ triangle is $30$ cm$^{2}$.`,
      `The perimeter of a $5$-$12$-$13$ triangle is $28$ cm.`,
      `A right triangle with legs $5$ cm and $12$ cm is isosceles.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

$x^{2} + (x + 7)^{2} = 169$ becomes $x^{2} + 7x - 60 = 0$, so $x = 5$. The statement is True.`,
      `**B.** → False

The longer leg is $12$ cm, not $10$. The statement is False.`,
      `**C.** → True

$\\frac{1}{2} \\cdot 5 \\cdot 12 = 30$. The statement is True.`,
      `**D.** → False

$5 + 12 + 13 = 30$, not $28$. The statement is False.`,
      `**E.** → False

The sides $5$, $12$, $13$ are all different. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `Five independent right-triangle claims. Legs $x$ and $x + 7$ with hypotenuse $13$ recover the $5$-$12$-$13$ triple.`,
  },
  {
    id: `math-4-48`,
    case_id: `MATH 4.48`,
    title: `Five separate perimeter-and-area rectangle stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle has perimeter $40$ cm and area $96$ cm$^{2}$. The sides are $8$ cm and $12$ cm.`,
      `A rectangle of perimeter $40$ cm and area $96$ cm$^{2}$ is a square.`,
      `A square with perimeter $40$ cm has area $100$ cm$^{2}$.`,
      `Among rectangles of perimeter $40$ cm, the square's area $100$ cm$^{2}$ is larger than $96$ cm$^{2}$.`,
      `A rectangle of perimeter $40$ cm and area $96$ cm$^{2}$ has sides $6$ cm and $14$ cm.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$x(20 - x) = 96$ gives $x^{2} - 20x + 96 = 0$, so $x = 12$ or $x = 8$. The statement is True.`,
      `**B.** → False

$8 \\neq 12$. The statement is False.`,
      `**C.** → True

Side $10$ cm, area $100$. The statement is True.`,
      `**D.** → True

$100 > 96$. The square maximises area for a fixed perimeter. The statement is True.`,
      `**E.** → False

$6 \\cdot 14 = 84$, not $96$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Five independent rectangle claims. Perimeter $40$ and area $96$ give sides $8$ and $12$. A square of the same perimeter has area $100$.`,
  },
  {
    id: `math-4-49`,
    case_id: `MATH 4.49`,
    title: `Five separate age-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A parent is $24$ years older than a child, and the product of their present ages is $180$. The child is $6$ years old.`,
      `A parent is $24$ years older than a child, and the product of their present ages is $180$. The parent is $30$ years old.`,
      `A child of $6$ and a parent of $30$ will, in $4$ years, have ages whose product is $340$.`,
      `If a parent is $24$ years older than a child, that age gap stays $24$ years as both grow older.`,
      `The present ages $30$ and $6$ are in the ratio $5 : 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$s(s + 24) = 180$ gives $s = 6$.

The statement is True.`,
      `**B.** → True

$6 + 24 = 30$. Check: $6 \\cdot 30 = 180$.

The statement is True.`,
      `**C.** → True

$10 \\cdot 34 = 340$.

The statement is True.`,
      `**D.** → True

Both ages increase equally, so the difference is unchanged.

The statement is True.`,
      `**E.** → True

$\\frac{30}{6} = 5$.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Five independent age-product claims. $s(s + 24) = 180$ recovers child $6$ and parent $30$.`,
  },
  {
    id: `math-4-50`,
    case_id: `MATH 4.50`,
    title: `Five separate ladder and Pythagoras stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $10$ m ladder leans against a wall. Its foot is $2$ m farther from the wall than the height it reaches. A worker concludes that the top is $6$ m up the wall.`,
      `A $13$ m ladder leans against a warehouse wall and reaches $5$ m up. A worker claims the foot is $7$ m from the wall.`,
      `A $10$ m ladder reaches $6$ m up a wall. It is claimed that the foot therefore sits $8$ m from the base of the wall.`,
      `A ladder, the wall, and the ground form a right triangle with legs $6$ m and $8$ m. The area of that triangle is claimed to be $24$ m$^{2}$.`,
      `A $13$ m ladder stands with its foot $12$ m from a wall. A worker reports that it reaches $9$ m up the wall.`
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$h^{2} + (h + 2)^{2} = 100$ becomes $h^{2} + 2h - 48 = 0$, so $h = 6$. The statement is True.`,
      `**B.** → False

$5^{2} + b^{2} = 13^{2}$ gives $b^{2} = 144$, so $b = 12$, not $7$. The statement is False.`,
      `**C.** → True

$6^{2} + 8^{2} = 36 + 64 = 100$. The foot is $8$ m from the wall. The statement is True.`,
      `**D.** → True

$\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$. The statement is True.`,
      `**E.** → False

$12^{2} + h^{2} = 13^{2}$ gives $h^{2} = 25$, so $h = 5$, not $9$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Five independent ladder claims. Foot $2$ m more than height with hypotenuse $10$ m recovers height $6$ m. A $5$-$12$-$13$ ladder is a separate story.`,
  },
  {
    id: `math-4-51`,
    case_id: `MATH 4.51`,
    title: `Five separate $x + 1/x$ substitution stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A nonzero number satisfies $x + \\frac{1}{x} = 4$. Then $x^{2} + \\frac{1}{x^{2}} = 16$.`,
      `If $x + \\frac{1}{x} = 4$, then $x^{2} + \\frac{1}{x^{2}} = 14$.`,
      `Clearing $x + \\frac{1}{x} = 4$ produces $x^{2} - 4x + 1 = 0$.`,
      `If $x + \\frac{1}{x} = 4$, then $x^{3} + \\frac{1}{x^{3}} = 64$.`,
      `One solution of $x + \\frac{1}{x} = 4$ is $2 + \\sqrt{3}$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Squaring gives $x^{2} + 2 + \\frac{1}{x^{2}} = 16$, so $x^{2} + \\frac{1}{x^{2}} = 14$, not $16$. The statement is False.`,
      `**B.** → True

That is the identity just derived. The statement is True.`,
      `**C.** → True

Multiply by $x$: $x^{2} + 1 = 4x$. The statement is True.`,
      `**D.** → False

$x^{3} + \\frac{1}{x^{3}} = 4 \\cdot 14 - 4 = 52$, not $64$. The statement is False.`,
      `**E.** → True

$x = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 51,
    solution_overview: `Five independent reciprocal-sum claims. From $x + \\frac{1}{x} = 4$, squaring gives $14$ and the cubic identity gives $52$.`,
  },
  {
    id: `math-4-52`,
    case_id: `MATH 4.52`,
    title: `Five separate biquadratic claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{4} - 5x^{2} + 4 = 0$ has four distinct real roots.`,
      `Those four roots are $\\pm 1$ and $\\pm 2$.`,
      `The product of all four roots of $x^{4} - 5x^{2} + 4 = 0$ is $4$.`,
      `The sum of all four roots of $x^{4} - 5x^{2} + 4 = 0$ is $0$.`,
      `All four roots of $x^{4} - 5x^{2} + 4 = 0$ are positive.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Put $u = x^{2}$. Then $(u - 4)(u - 1) = 0$, so $x^{2} = 4$ or $x^{2} = 1$, four distinct real $x$. The statement is True.`,
      `**B.** → True

$x = \\pm 2$ and $x = \\pm 1$. The statement is True.`,
      `**C.** → True

The constant term of $x^{4} + \\cdots + 4$ is the product of the roots. Check: $(1)(-1)(2)(-2) = 4$. The statement is True.`,
      `**D.** → True

No $x^{3}$ term, so the sum of roots is $0$. The statement is True.`,
      `**E.** → False

Two of the four roots are negative. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 52,
    solution_overview: `Five independent biquadratic claims. $x^{4} - 5x^{2} + 4 = 0$ becomes $(u - 4)(u - 1) = 0$ in $u = x^{2}$, so the roots are $\\pm 1$ and $\\pm 2$.`,
  },
  {
    id: `math-4-53`,
    case_id: `MATH 4.53`,
    title: `Five separate long-rectangle stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle is $14$ cm longer than it is wide, and its area is $240$ cm$^{2}$. The width is $10$ cm.`,
      `That rectangle has length $24$ cm.`,
      `The diagonal of a $10$ cm by $24$ cm rectangle is $26$ cm.`,
      `The perimeter of a $10$ cm by $24$ cm rectangle is $60$ cm.`,
      `The area check $10 \\cdot 24 = 240$ holds for those sides.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$w(w + 14) = 240$ gives $w = 10$. The statement is True.`,
      `**B.** → True

Length $10 + 14 = 24$ cm. The statement is True.`,
      `**C.** → True

$10^{2} + 24^{2} = 676 = 26^{2}$, the $5$-$12$-$13$ triple scaled by $2$. The statement is True.`,
      `**D.** → False

$P = 2(10 + 24) = 68$, not $60$. The statement is False.`,
      `**E.** → True

$10 \\cdot 24 = 240$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 53,
    solution_overview: `Five independent rectangle claims. Width $w$ and length $w + 14$ with area $240$ recover $10$ by $24$, a $10$-$24$-$26$ right triangle on the diagonal.`,
  },
  {
    id: `math-4-54`,
    case_id: `MATH 4.54`,
    title: `Five separate together-and-alone work stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two workers finish a job together in $4$ hours. One of them, working alone, is $6$ hours slower than the other. Then the faster worker alone takes $6$ hours.`,
      `That slower worker alone takes $12$ hours.`,
      `The faster of those two workers alone takes $8$ hours.`,
      `Two pipes fill a tank together in $6$ hours. In $3$ hours together they fill half the tank.`,
      `Two workers who finish a job together in $4$ hours have combined rate $\\frac{1}{4}$ of a job per hour.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$\\frac{1}{t} + \\frac{1}{t + 6} = \\frac{1}{4}$ becomes $t^{2} - 2t - 24 = 0$, so $t = 6$. The statement is True.`,
      `**B.** → True

$6 + 6 = 12$. Check: $\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$. The statement is True.`,
      `**C.** → False

Eight hours for the faster worker would force $14$ for the slower, and $\\frac{1}{8} + \\frac{1}{14} \\neq \\frac{1}{4}$. The statement is False.`,
      `**D.** → True

Together they fill $\\frac{1}{6}$ of the tank per hour, so three hours is $\\frac{1}{2}$. The statement is True.`,
      `**E.** → True

One job in $4$ hours is $\\frac{1}{4}$ per hour. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Five independent work-rate claims. Together in $4$ hours with a $6$ hour gap recovers times $6$ and $12$. A second pipe story is the half-tank check.`,
  },
  {
    id: `math-4-55`,
    case_id: `MATH 4.55`,
    title: `Five separate reciprocal quadratic stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x + \\frac{6}{x} = 5$, with $x \\neq 0$, has the unique real solution $x = 2$.`,
      `The two real solutions of $x + \\frac{6}{x} = 5$ are $2$ and $3$.`,
      `Clearing $x + \\frac{6}{x} = 5$ produces $x^{2} - 5x + 6 = 0$.`,
      `The product of the two solutions of $x + \\frac{6}{x} = 5$ is $5$.`,
      `The sum of the two solutions of $x + \\frac{6}{x} = 5$ is $5$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

$x^{2} - 5x + 6 = 0$ factors as $(x - 2)(x - 3) = 0$. Both $2$ and $3$ work. The statement is False.`,
      `**B.** → True

Those are the two roots. The statement is True.`,
      `**C.** → True

Multiply by $x$: $x^{2} + 6 = 5x$. The statement is True.`,
      `**D.** → False

The product is $6$, not $5$. Five is the sum. The statement is False.`,
      `**E.** → True

Vieta: the sum of the roots of $x^{2} - 5x + 6 = 0$ is $5$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 55,
    solution_overview: `Five independent reciprocal-equation claims. Clearing $x + \\frac{6}{x} = 5$ produces $x^{2} - 5x + 6 = 0$, with roots $2$ and $3$.`,
  },
  {
    id: `math-4-56`,
    case_id: `MATH 4.56`,
    title: `Five separate hard quadratics from different stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{4} - 13x^{2} + 36 = 0$ has roots $\\pm 2$ and $\\pm 3$.`,
      `The equation $(x - 3)(x - 5) = 8$ has roots $1$ and $7$.`,
      `The equation $x^{2} + x + 1 = 0$ has two distinct real roots.`,
      `Two numbers that add to $9$ and multiply to $14$ are $3$ and $6$.`,
      `The equation $2x^{2} - 3x - 2 = 0$ has two distinct real roots.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Put $u = x^{2}$. Then $(u - 4)(u - 9) = 0$, so $x = \\pm 2, \\pm 3$. The statement is True.`,
      `**B.** → True

$x^{2} - 8x + 7 = 0$, $(x - 1)(x - 7) = 0$. Check: $(-2)(-4) = 8$ and $4 \\cdot 2 = 8$. The statement is True.`,
      `**C.** → False

$\\Delta = 1 - 4 = -3 < 0$. No real roots. The statement is False.`,
      `**D.** → False

$3 + 6 = 9$ but $3 \\cdot 6 = 18$, not $14$. The pair is $2$ and $7$. The statement is False.`,
      `**E.** → True

$\\Delta = 9 + 16 = 25 > 0$. Roots $2$ and $-\\frac{1}{2}$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 56,
    solution_overview: `Five independent quadratics: a biquadratic in $x^{2}$, a rearranged product equal to $8$, a negative discriminant, a Vieta trap, and $2x^{2} - 3x - 2 = 0$.`,
  },
  {
    id: `math-4-57`,
    case_id: `MATH 4.57`,
    title: `Five separate rational equations with a hole`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Three litres of oil, poured as equal shares, fill a jerrycan if each share is one-fourth of the jerrycan. Then the jerrycan holds $12$ litres.`,
      `The equation $\\frac{3}{x} = \\frac{1}{4}$ is undefined at $x = 0$, because that value zeros the denominator.`,
      `The equation $\\frac{5}{x} = 1$ has solution $x = 3$.`,
      `Substituting $x = 12$ into $\\frac{3}{x} = \\frac{1}{4}$ confirms the check $\\frac{3}{12} = \\frac{1}{4}$.`,
      `The number $-12$ also solves $\\frac{3}{x} = \\frac{1}{4}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{3}{x} = \\frac{1}{4} \\quad \\Rightarrow \\quad x = 12$$

Twelve litres.

The statement is True.`,
      `**B.** → True

The left side has denominator $x$. At $x = 0$ you would divide by zero.

The statement is True.`,
      `**C.** → False

$$\\frac{5}{x} = 1 \\quad \\Rightarrow \\quad x = 5$$

not $3$. At $x = 3$ you get $\\frac{5}{3}$, not $1$.

The statement is False.`,
      `**D.** → True

$\\frac{3}{12}$ reduces to $\\frac{1}{4}$.

The statement is True.`,
      `**E.** → False

$\\frac{3}{-12} = -\\frac{1}{4}$, not $\\frac{1}{4}$. Signs must match.

The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 57,
    solution_overview: `Five independent rational claims. Cross-multiply after excluding $x = 0$. The jerrycan story recovers $x = 12$. A second equation $\\frac{5}{x} = 1$ is a trap.`,
  },
  {
    id: `math-4-58`,
    case_id: `MATH 4.58`,
    title: `Five separate rational proportions`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number, divided by $2$ more than the number, equals $\\frac{1}{3}$. That number is $1$.`,
      `The expression $\\frac{5}{x + 3}$ is undefined when the number $x$ is $-3$.`,
      `The number $4$, divided by $2$ more than $4$, equals $\\frac{1}{3}$.`,
      `You may cross-multiply $\\frac{x}{x + 2} = \\frac{1}{3}$ even at $x = -2$, because both sides become infinite in a way that cancels.`,
      `The number $3$, divided by $2$ more than $3$, equals $\\frac{1}{3}$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x + 2} = \\frac{1}{3}, \\quad x \\neq -2$$

Then $3x = x + 2$, so $x = 1$. Check: $\\frac{1}{3} = \\frac{1}{3}$.

The statement is True.`,
      `**B.** → True

The denominator $x + 3$ vanishes at $x = -3$.

The statement is True.`,
      `**C.** → False

$\\frac{4}{6} = \\frac{2}{3}$, not $\\frac{1}{3}$.

The statement is False.`,
      `**D.** → False

Cross-multiplying assumes the denominators are not zero. At $x = -2$ the original equation is undefined.

The statement is False.`,
      `**E.** → False

At $x = 3$ the fraction is $\\frac{3}{5}$, not $\\frac{1}{3}$.

The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 58,
    solution_overview: `Five independent rational claims. One proportion $\\frac{x}{x + 2} = \\frac{1}{3}$ recovers $x = 1$ after excluding $x = -2$.`,
  },
  {
    id: `math-4-59`,
    case_id: `MATH 4.59`,
    title: `A hole in the domain is never a root`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\frac{1}{x - 2} = \\frac{3}{x - 2}$ looks as if the two sides might match for every $x$, but it has no real solution.`,
      `$x = 2$ is a solution of $\\frac{1}{x - 2} = \\frac{3}{x - 2}$, because both sides become infinite in a way that cancels.`,
      `The equation $\\frac{5}{x + 1} = \\frac{5}{x + 1}$ holds at $x = -1$ as well as at every other real number.`,
      `The equation $\\frac{2}{x} = 0$ has solution $x = 0$, because the right-hand side is already zero.`,
      `The equation $\\frac{6}{x} = 2$ has solution $x = 2$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

If $x \\neq 2$ the two sides have the same nonzero denominator, so the claim is $1 = 3$, which is never true. If $x = 2$ both sides are undefined. No solution exists. The statement is True.`,
      `**B.** → False

At $x = 2$ you divide by zero. That value is outside the domain. The statement is False.`,
      `**C.** → False

The two sides match for every $x$ except $x = -1$, where the expression is undefined. The hole is not a root. The statement is False.`,
      `**D.** → False

A fraction is zero only when the numerator is zero and the denominator is not. Here the numerator is $2$, and $x = 0$ is undefined. No solution. The statement is False.`,
      `**E.** → False

$$\\frac{6}{x} = 2 \\quad \\Rightarrow \\quad x = 3$$

not $x = 2$. Check: $\\frac{6}{3} = 2$, while $\\frac{6}{2} = 3$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 59,
    solution_overview: `Five independent rational equations. A value that zeros a denominator is never a solution. Equal fractions with a common denominator require equal numerators, and only where the denominator is allowed.`,
  },
  {
    id: `math-4-60`,
    case_id: `MATH 4.60`,
    title: `Five separate radical stories from squares`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. Then the new area is $16$ m$^{2}$.`,
      `The radical equation $\\sqrt{x + 3} = 4$ has solution $x = 13$.`,
      `A square of area $13$ m$^{2}$ has side $\\sqrt{13}$ m.`,
      `Squaring both sides of $\\sqrt{x + 7} = 5$ is valid because both sides are nonnegative, and it yields $x = 18$.`,
      `The radical equation $\\sqrt{x + 3} = 4$ is solved by $x = 19$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A square of side $4$ m has area $16$ m$^{2}$.

The statement is True.`,
      `**B.** → True

$$\\sqrt{x + 3} = 4 \\quad \\Rightarrow \\quad x + 3 = 16 \\quad \\Rightarrow \\quad x = 13$$

Check: $\\sqrt{16} = 4$.

The statement is True.`,
      `**C.** → True

The original area $13$ m$^{2}$ has side $\\sqrt{13}$ m.

The statement is True.`,
      `**D.** → True

$$\\sqrt{x + 7} = 5 \\quad \\Rightarrow \\quad x + 7 = 25 \\quad \\Rightarrow \\quad x = 18$$

The statement is True.`,
      `**E.** → False

Nineteen would be $16 + 3$, adding the extra soil instead of removing it. The recovered value is $13$.

The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 60,
    solution_overview: `Five independent radical claims. $\\sqrt{x + 3} = 4$ recovers $x = 13$. A second square $\\sqrt{x + 7} = 5$ recovers $x = 18$.`,
  },
  {
    id: `math-4-61`,
    case_id: `MATH 4.61`,
    title: `Five units from 3 on the number line`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number $5$ units from $3$ on the number line is $8$ or $-2$.`,
      `The equation $\\lvert x - 3 \\rvert = 5$ has both of those solutions.`,
      `The only number $5$ units from $3$ is $8$.`,
      `The equation $\\lvert x \\rvert = 0$ has no solution.`,
      `The equation $\\lvert x \\rvert = -2$ has two real solutions.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Five units right of $3$ is $8$. Five units left is $-2$. The statement is True.`,
      `**B.** → True

$\\lvert x - 3 \\rvert = 5$ means $x - 3 = 5$ or $x - 3 = -5$, so $x = 8$ or $x = -2$. The statement is True.`,
      `**C.** → False

Distance does not pick a side. The point $-2$ is just as far from $3$ as $8$ is. The statement is False.`,
      `**D.** → False

$\\lvert 0 \\rvert = 0$, so $x = 0$ is the unique solution. The statement is False.`,
      `**E.** → False

Absolute value is never negative. $\\lvert x \\rvert = -2$ has no real solution. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 61,
    solution_overview: `Five independent claims about $\\lvert x - a \\rvert = b$. For $b > 0$ there are two points. A negative right-hand side is impossible. Zero is allowed: $\\lvert x \\rvert = 0$ has $x = 0$.`,
  },
  {
    id: `math-4-62`,
    case_id: `MATH 4.62`,
    title: `Five separate packing and reciprocal stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Five kilograms of flour, packed into bags of one kilogram less than a certain number of kilograms, fill exactly one such bag-count. In symbols $\\frac{5}{x - 1} = 1$. That number of kilograms is $6$.`,
      `The rational equation $\\frac{4}{x - 3} = 1$ is undefined at $x = 3$.`,
      `If five kilograms are packed into bags of $5$ kg each, then $\\frac{5}{5} = 1$, so they fill exactly one bag-count of that size.`,
      `A tank of $8$ litres is emptied at a constant $2$ litres per hour. The time $t$ hours until empty satisfies $\\frac{8}{t} = 2$, so $t = 4$.`,
      `Clearing the denominator in $\\frac{5}{x - 1} = 1$ gives $5 = x - 1$, provided $x \\neq 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{5}{x - 1} = 1, \\quad x \\neq 1$$

so $5 = x - 1$ and $x = 6$.

The statement is True.`,
      `**B.** → True

At $x = 3$ the left side is undefined.

The statement is True.`,
      `**C.** → True

Bags of $5$ kg: $\\frac{5}{5} = 1$.

The statement is True.`,
      `**D.** → True

$$\\frac{8}{t} = 2 \\quad \\Rightarrow \\quad t = 4$$

The statement is True.`,
      `**E.** → True

Multiplying through by $x - 1$ (allowed because it is not zero at the solution) yields $5 = x - 1$.

The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 62,
    solution_overview: `Five independent rational claims. $\\frac{5}{x - 1} = 1$ recovers $x = 6$. A tank $\\frac{8}{t} = 2$ recovers $t = 4$.`,
  },
  {
    id: `math-4-63`,
    case_id: `MATH 4.63`,
    title: `Five separate courtyard and radical stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square courtyard has side $5$ m. Its area is $7$ m$^{2}$ more than a number $x$ of square metres, so $\\sqrt{x + 7} = 5$. That number is $18$.`,
      `A square courtyard of side $5$ m has area $25$ m$^{2}$.`,
      `The radical equation $\\sqrt{2x + 1} = 5$ has solution $x = 12$.`,
      `The equation $\\sqrt{x + 7} = 5$ has solution $x = -18$.`,
      `After squaring $\\sqrt{x + 7} = 5$, which is allowed because both sides are nonnegative, you obtain $x + 7 = 25$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\sqrt{x + 7} = 5 \\quad \\Rightarrow \\quad x + 7 = 25 \\quad \\Rightarrow \\quad x = 18$$

Check: $\\sqrt{25} = 5$.

The statement is True.`,
      `**B.** → True

Side $5$ m gives area $25$ m$^{2}$.

The statement is True.`,
      `**C.** → True

$$2x + 1 = 25 \\quad \\Rightarrow \\quad x = 12$$

Check: $\\sqrt{25} = 5$.

The statement is True.`,
      `**D.** → False

Negative eighteen would make $x + 7 = -11$, which cannot equal $25$.

The statement is False.`,
      `**E.** → True

Both sides of $\\sqrt{x + 7} = 5$ are nonnegative, so squaring is valid.

The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 63,
    solution_overview: `Five independent radical claims. $\\sqrt{x + 7} = 5$ recovers $x = 18$. A second radical $\\sqrt{2x + 1} = 5$ recovers $x = 12$.`,
  },
  {
    id: `math-4-64`,
    case_id: `MATH 4.64`,
    title: `Five separate surveyor and isolate-and-square stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A surveyor's reading satisfies $\\sqrt{4x + 5} = 7$. Then the number $x$ is $11$.`,
      `Squaring both sides of $\\sqrt{x + 12} = 8$ is allowed because $8$ is nonnegative, and it produces $x = 52$.`,
      `The equation $\\sqrt{4x + 5} = 7$ is solved by $x = 6$.`,
      `For $x = 11$, the check $\\sqrt{4 \\cdot 11 + 5} = \\sqrt{49} = 7$ holds.`,
      `The equation $\\sqrt{4x + 5} = -7$ has the same real solution as $\\sqrt{4x + 5} = 7$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$4x + 5 = 49 \\quad \\Rightarrow \\quad 4x = 44 \\quad \\Rightarrow \\quad x = 11$$

The statement is True.`,
      `**B.** → True

$$x + 12 = 64 \\quad \\Rightarrow \\quad x = 52$$

Check: $\\sqrt{64} = 8$.

The statement is True.`,
      `**C.** → False

At $x = 6$ you get $\\sqrt{24 + 5} = \\sqrt{29}$, not $7$. The recovered value is $11$.

The statement is False.`,
      `**D.** → True

$4 \\cdot 11 + 5 = 49$, and $\\sqrt{49} = 7$.

The statement is True.`,
      `**E.** → False

A principal square root is never negative. $\\sqrt{4x + 5} = -7$ has no real solution, even though squaring would again give $x = 11$.

The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 64,
    solution_overview: `Five independent radical claims. $\\sqrt{4x + 5} = 7$ yields $x = 11$. A second square $\\sqrt{x + 12} = 8$ yields $x = 52$. A negative right-hand side is empty.`,
  },
  {
    id: `math-4-65`,
    case_id: `MATH 4.65`,
    title: `Five separate absolute-value readings`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A gauge should show twice a true reading $x$. The absolute error from $4$ is $6$: $\\lvert 2x - 4 \\rvert = 6$. Then the true reading is $5$ or $-1$.`,
      `Both solutions of $\\lvert x - 3 \\rvert = 5$ are positive.`,
      `The equation $\\lvert 3x - 6 \\rvert = 9$ means $3x - 6$ can only equal $9$, never $-9$.`,
      `If the true reading is $2$, then $\\lvert 2x - 4 \\rvert = 6$ holds.`,
      `The equation $\\lvert 2x - 4 \\rvert = 6$ says that the distance from $2x$ to $4$ is $4$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$2x - 4 = 6 \\quad \\text{or} \\quad 2x - 4 = -6$$

so $x = 5$ or $x = -1$. Check: $\\lvert 10 - 4 \\rvert = 6$ and $\\lvert -2 - 4 \\rvert = 6$.

The statement is True.`,
      `**B.** → False

$x - 3 = \\pm 5$ gives $x = 8$ or $x = -2$. Only one of those is positive.

The statement is False.`,
      `**C.** → False

Absolute value $9$ means the inside is $9$ or $-9$. Both cases are required.

The statement is False.`,
      `**D.** → False

At $x = 2$ the inside is $0$, and $\\lvert 0 \\rvert = 0$, not $6$.

The statement is False.`,
      `**E.** → False

The equation says that distance is $6$, not $4$.

The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `Five independent absolute-value claims. $\\lvert 2x - 4 \\rvert = 6$ splits into $2x - 4 = \\pm 6$. A second equation $\\lvert x - 3 \\rvert = 5$ has a negative root.`,
  },
  {
    id: `math-4-66`,
    case_id: `MATH 4.66`,
    title: `Five separate rational equations, each with a hole`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number of cups of flour, divided by one cup less than that number, equals three. After the value that zeros the denominator is excluded, the baker uses $\\frac{3}{2}$ cups.`,
      `The equation $\\frac{1}{x - 2} = \\frac{3}{x - 2}$ looks as if it might hold for every $x$, but it has no solution: at $x = 2$ both sides are undefined, and for every other $x$ it demands $1 = 3$.`,
      `A baker uses a number of cups of flour that, divided by four cups less than that number, equals two. Then the baker uses $8$ cups, and the ratio is undefined if the flour is exactly $4$ cups.`,
      `Twice a volume in litres, divided by that volume, equals three litres divided by three more than the volume. After excluding $0$ and $-3$, the volume is $6$ litres, and both sides of the original equal $\\frac{1}{3}$.`,
      `Three more than a number, divided by three less than the number, equals $2$. The number is $9$. The value $3$ is not a solution, because it zeros the denominator.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x - 1} = 3, \\quad x \\neq 1$$

gives $x = 3x - 3$, so $2x = 3$ and $x = \\frac{3}{2}$. Check: $\\frac{3/2}{1/2} = 3$. The hole $x = 1$ is not this value. The statement is True.`,
      `**B.** → True

If $x \\neq 2$, the two sides share a nonzero denominator, so the claim is $1 = 3$, which is never true. If $x = 2$, both sides are undefined. No solution exists. The statement is True.`,
      `**C.** → True

$$\\frac{x}{x - 4} = 2, \\quad x \\neq 4$$

gives $x = 2x - 8$, so $x = 8$. Check: $\\frac{8}{4} = 2$. At $4$ cups the original ratio is undefined. The statement is True.`,
      `**D.** → True

$$\\frac{2}{x} = \\frac{3}{x + 3}, \\quad x \\neq 0,\\ x \\neq -3$$

clears to $2(x + 3) = 3x$, so $x = 6$. Both sides equal $\\frac{1}{3}$. The statement is True.`,
      `**E.** → True

$$\\frac{x + 3}{x - 3} = 2, \\quad x \\neq 3$$

gives $x + 3 = 2x - 6$, so $x = 9$. Check: $\\frac{12}{6} = 2$. At $x = 3$ you divide by zero. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `Five independent rational equations. Exclude every zero of a denominator, clear what remains, and check the recovered value in the original.`,
  },
  {
    id: `math-4-67`,
    case_id: `MATH 4.67`,
    title: `Five separate radical equations, including extras after squaring`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The side of a square bed, after $5$ extra square metres of soil, plus the side of a smaller square whose area is $3$ m$^{2}$ less than the first, equals $4$ m. In symbols $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$, and the larger area is $4$ m$^{2}$.`,
      `A surveyor records $\\sqrt{4x + 5} = 7$. After squaring, $4x + 5 = 49$, so $x = 11$, and the check $\\sqrt{49} = 7$ holds.`,
      `A gardener writes $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$ and claims the larger area is $8$ m$^{2}$. That value satisfies the squared form but not the original sum of roots.`,
      `The radical equation $\\sqrt{x + 3} = 4$ is solved by $x = 0$, because squaring would give $x + 3 = 16$ and someone then subtracted $16$ instead of $3$.`,
      `After isolating and squaring $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$, the candidate $x = 4$ returns $\\sqrt{9} + \\sqrt{1} = 4$ and therefore survives in the original.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let $a = \\sqrt{x + 5}$ and $b = \\sqrt{x - 3}$. Then $a + b = 4$ and $a^{2} - b^{2} = 8$, so $(a - b)(a + b) = 8$ and $a - b = 2$. Hence $a = 3$, $b = 1$, and $x - 3 = 1$, so $x = 4$. The larger area is $4$ m$^{2}$. The statement is True.`,
      `**B.** → True

The right-hand side $7$ is nonnegative, so squaring is valid: $4x + 5 = 49$, $x = 11$. Check: $\\sqrt{44 + 5} = \\sqrt{49} = 7$. The statement is True.`,
      `**C.** → False

At $x = 8$: $\\sqrt{13} + \\sqrt{5} \\approx 5.8$, not $4$. The recovered area is $4$ m$^{2}$. The statement is False.`,
      `**D.** → False

$$\\sqrt{x + 3} = 4 \\quad \\Rightarrow \\quad x + 3 = 16 \\quad \\Rightarrow \\quad x = 13$$

not $x = 0$. At $x = 0$ one gets $\\sqrt{3}$, not $4$. The statement is False.`,
      `**E.** → True

Direct substitution: $\\sqrt{9} + \\sqrt{1} = 3 + 1 = 4$. Both roots are defined. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 67,
    solution_overview: `Five independent radical claims. One sum of two square roots recovers $x = 4$. Another is a single square that yields $x = 11$. Squaring still requires a check in the original.`,
  },
  {
    id: `math-4-68`,
    case_id: `MATH 4.68`,
    title: `Five separate absolute-value readings`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A stored temperature is $6^{\\circ}\\mathrm{C}$ away from $4^{\\circ}\\mathrm{C}$, so $\\lvert x - 4 \\rvert = 6$. One of the two possible readings is $10^{\\circ}\\mathrm{C}$.`,
      `A machine part is specified at $50$ mm. The inspector flags pieces whose length $x$ satisfies $\\lvert x - 50 \\rvert = 3$. The two boundary lengths are $47$ mm and $53$ mm.`,
      `The equation $\\lvert 2x - 5 \\rvert = \\lvert x + 4 \\rvert$ has only one real solution, because equal distances from two moving points can occur on just one side.`,
      `A gauge error satisfies $\\lvert 3x - 6 \\rvert = 9$. Splitting into $3x - 6 = 9$ and $3x - 6 = -9$ produces $x = 5$ and $x = -1$, and both check in the original.`,
      `The equation $\\lvert x \\rvert = -4$ has no real solution, because an absolute value cannot equal a negative number.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$x - 4 = 6$ or $x - 4 = -6$, so $x = 10$ or $x = -2$. Ten degrees is one of those two readings. The statement is True.`,
      `**B.** → True

$x - 50 = \\pm 3$, so $x = 53$ or $x = 47$. The statement is True.`,
      `**C.** → False

Equal absolute values mean $2x - 5 = x + 4$ or $2x - 5 = -(x + 4)$. The first case is $x = 9$. The second is $3x = 1$, so $x = \\frac{1}{3}$. Two distinct real solutions, not one. The statement is False.`,
      `**D.** → True

$3x = 15$ or $3x = -3$, so $x = 5$ or $x = -1$. Checks: $\\lvert 15 - 6 \\rvert = 9$ and $\\lvert -3 - 6 \\rvert = 9$. The statement is True.`,
      `**E.** → True

By definition $\\lvert x \\rvert \\ge 0$ for every real $x$. A negative right-hand side is impossible. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 68,
    solution_overview: `Five independent absolute-value claims. For $\\lvert x - a \\rvert = b$ with $b > 0$ there are two points. Equal absolute values give two cases. A negative right-hand side is empty.`,
  },
  {
    id: `math-4-69`,
    case_id: `MATH 4.69`,
    title: `Five radical and absolute claims, extras included`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number equals one more than the square root of twice the number plus one: $\\sqrt{2x + 1} = x - 1$. The value $x = 4$ satisfies the original, because $\\sqrt{9} = 3$.`,
      `The radical equation $\\sqrt{x + 3} = x - 3$ is also solved by $x = 1$, since squaring produces $(x - 1)(x - 6) = 0$ and $1$ is one of those roots.`,
      `Squaring $\\sqrt{4x + 5} = 7$, after noting that the right-hand side is nonnegative, produces $4x + 5 = 49$ and therefore $x = 11$.`,
      `Both roots of $x(x - 4) = 0$ solve $\\sqrt{2x + 1} = x - 1$, so no extra root appears after squaring.`,
      `Because a principal square root cannot equal a negative number, $\\sqrt{x - 1} = 2 - x$ has only the candidates that already lie in the interval where $2 - x \\ge 0$, and exactly one of the squared-equation roots survives.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

At $x = 4$, both $2x + 1 \\ge 0$ and $x - 1 \\ge 0$. Then $\\sqrt{9} = 3 = 4 - 1$.

The statement is True.`,
      `**B.** → False

Need $x \\ge 3$. Squaring gives $x = 1$ or $x = 6$, but $x = 1$ makes the right-hand side $-2$. Only $x = 6$ survives.

The statement is False.`,
      `**C.** → True

The right-hand side $7$ is nonnegative, so squaring is valid: $4x + 5 = 49$, $x = 11$. Check: $\\sqrt{49} = 7$.

The statement is True.`,
      `**D.** → False

Only $x = 4$ survives the check $x \\ge 1$ in $\\sqrt{2x + 1} = x - 1$. Zero is extra.

The statement is False.`,
      `**E.** → True

Domain: $x \\ge 1$ and $2 - x \\ge 0$, so $1 \\le x \\le 2$. Squaring gives $x^{2} - 5x + 5 = 0$. Only $\\frac{5 - \\sqrt{5}}{2}$ lies in that interval.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `Five independent radical checks. Squaring can introduce extra roots. A principal square root is never negative.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `Five distance-on-a-line claims`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A depot on a straight road is to be $8$ km from post $1$ plus $8$ km from post $5$, in the sense $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$. The two possible sites are kilometre $-1$ and kilometre $7$.`,
      `The points kilometre $-1$ and kilometre $7$ on a straight road are $8$ km apart from each other.`,
      `The midpoint kilometre $3$ between posts $1$ and $5$ solves $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$, because that point is equally far from both posts.`,
      `The equation $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$ has exactly two real solutions, one on each outer ray, and none between the posts.`,
      `Every point between kilometre $1$ and kilometre $5$ solves $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 4$, because the sum of distances to the two posts is constantly $4$ on that interval. The claim here is that every such point also solves the equation with right-hand side $8$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

For $x < 1$: $6 - 2x = 8$ gives $x = -1$. For $x > 5$: $2x - 6 = 8$ gives $x = 7$. Between the posts the left side equals $4$, not $8$.

The statement is True.`,
      `**B.** → True

$$7 - (-1) = 8$$

The statement is True.`,
      `**C.** → False

At $x = 3$ the sum of distances is $4$, not $8$. Equal distance from the two posts would be $\\lvert x - 1 \\rvert = \\lvert x - 5 \\rvert$, a different equation.

The statement is False.`,
      `**D.** → True

One root on each outer ray and none in the middle.

The statement is True.`,
      `**E.** → False

On $[1, 5]$ the sum is constantly $4$, never $8$.

The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 70,
    solution_overview: `Five independent claims about distances on a line. The sum $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert$ equals $4$ between the posts and grows outside, so $= 8$ only at $x = -1$ and $x = 7$.`,
  },
  {
    id: `math-4-71`,
    case_id: `MATH 4.71`,
    title: `Five rational proportions from different stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number over three less than the number equals six more than the number over one less than the number. After excluding $x = 3$ and $x = 1$, the solution is $x = \\frac{9}{2}$.`,
      `The proportion $\\frac{x}{x - 4} = \\frac{x + 2}{x - 1}$ is undefined at $x = 4$ and at $x = 1$, because each of those values zeros one of the two denominators.`,
      `$x = 3$ is nevertheless a root of $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$, because cross-multiplying produces an identity at that point.`,
      `At $x = \\frac{9}{2}$ both sides of $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ equal $3$, which confirms the recovered value.`,
      `Cross-multiplying $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ is valid at $x = \\frac{9}{2}$, because that value zeros neither denominator.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Exclude $1$ and $3$, then $x(x - 1) = (x + 6)(x - 3)$, so $x^{2} - x = x^{2} + 3x - 18$ and $x = \\frac{9}{2}$.

The statement is True.`,
      `**B.** → True

Those two values make a denominator zero.

The statement is True.`,
      `**C.** → False

At $x = 3$ the left side is undefined. Cross-multiplying assumes both denominators are nonzero.

The statement is False.`,
      `**D.** → True

$\\frac{9/2}{9/2 - 3} = 3$ and $\\frac{9/2 + 6}{9/2 - 1} = 3$.

The statement is True.`,
      `**E.** → True

$\\frac{9}{2}$ is neither $1$ nor $3$.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `Five independent comments on rational proportions. The model $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ recovers $x = \\frac{9}{2}$ after excluding the holes.`,
  },
  {
    id: `math-4-72`,
    case_id: `MATH 4.72`,
    title: `Five reciprocal-sum stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number plus one, all over the number, plus the number over one more than the number, equals $\\frac{5}{2}$. One solution is $x = 1$.`,
      `The reciprocal sum $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ is also solved by $x = -2$, and substituting $-2$ returns $\\frac{1}{2} + 2 = \\frac{5}{2}$.`,
      `The equation $\\frac{2}{x} + \\frac{3}{x + 1} = 1$ is undefined at $x = 0$ and at $x = -1$.`,
      `Both $x = 1$ and $x = -2$ lie in the domain of $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ and satisfy the original.`,
      `Clearing $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ produces the quadratic $x^{2} + x - 2 = 0$, whose roots are $1$ and $-2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Clearing $x(x + 1)$ yields $2\\bigl((x + 1)^{2} + x^{2}\\bigr) = 5x(x + 1)$, so $x^{2} + x - 2 = 0$ and $x = 1$ or $x = -2$. At $x = 1$: $2 + \\frac{1}{2} = \\frac{5}{2}$.

The statement is True.`,
      `**B.** → True

At $x = -2$: $\\frac{-1}{-2} + \\frac{-2}{-1} = \\frac{5}{2}$.

The statement is True.`,
      `**C.** → True

Those two values zero a denominator of $\\frac{2}{x} + \\frac{3}{x + 1}$.

The statement is True.`,
      `**D.** → True

Neither root is $0$ or $-1$, and both checks succeed.

The statement is True.`,
      `**E.** → True

$(x + 2)(x - 1) = x^{2} + x - 2$.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `Five independent claims about reciprocal sums. $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ clears to $x^{2} + x - 2 = 0$, and both roots survive.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `Five claims on principal roots and impossible right-hand sides`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Both candidates obtained by squaring $\\sqrt{x - 1} = 2 - x$ solve the original equation.`,
      `The equation $\\sqrt{x + 3} = x - 3$ has two real solutions, one for each sign that squaring introduces.`,
      `The larger quadratic candidate $x = \\frac{5 + \\sqrt{5}}{2}$ solves $\\sqrt{x - 1} = 2 - x$, even though $2 - x$ is then negative.`,
      `When solving $\\sqrt{x - 1} = 2 - x$ you may skip the condition $2 - x \\ge 0$, because squaring removes the sign anyway.`,
      `Exactly one real solution of $\\sqrt{x - 1} = 2 - x$ survives, namely the candidate that lies in $[1, 2]$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Domain: $x \\ge 1$ and $2 - x \\ge 0$, so $1 \\le x \\le 2$. Squaring gives $x^{2} - 5x + 5 = 0$. Only $\\frac{5 - \\sqrt{5}}{2} \\approx 1.38$ lies in that interval.

The statement is False.`,
      `**B.** → False

Need $x \\ge 3$. Squaring gives $x = 1$ or $x = 6$, but $x = 1$ makes the right-hand side $-2$. Only one real solution survives.

The statement is False.`,
      `**C.** → False

$\\frac{5 + \\sqrt{5}}{2} > 2$, so $2 - x < 0$ and cannot equal a principal square root.

The statement is False.`,
      `**D.** → False

A principal square root is never negative. The condition $2 - x \\ge 0$ is what kills the larger candidate.

The statement is False.`,
      `**E.** → True

The smaller root $\\frac{5 - \\sqrt{5}}{2}$ lies in $[1, 2]$ and checks after a valid squaring.

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `Five independent claims about the principal square root. $\\sqrt{x - 1} = 2 - x$ lives only on $[1, 2]$, so squaring's larger candidate is extra.`,
  },
  {
    id: `math-4-74`,
    case_id: `MATH 4.74`,
    title: `Five isolate-and-square radical stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A surveyor records that the square root of a distance plus $12$ m, minus the square root of the distance itself, equals $2$ m. Then the distance is $4$ m.`,
      `After isolating and squaring $\\sqrt{x + 12} = 2 + \\sqrt{x}$, the relation $\\sqrt{x} = 2$ appears, which is why $x = 4$ is recovered.`,
      `The isolate-and-square process for $\\sqrt{x + 8} - \\sqrt{x} = 1$ produces $x = 9$ as the distance.`,
      `After squaring $\\sqrt{x + 12} = 2 + \\sqrt{x}$ once, you may stop without substituting back into the original, because the isolated right-hand side is automatically nonnegative.`,
      `The distance $x = 0$ also solves $\\sqrt{x + 12} - \\sqrt{x} = 2$, since $\\sqrt{12} \\approx 3.46$ is near enough to $2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Isolate $\\sqrt{x + 12} = 2 + \\sqrt{x}$ and square: $x + 12 = 4 + 4\\sqrt{x} + x$, so $\\sqrt{x} = 2$ and $x = 4$. Check: $\\sqrt{16} - \\sqrt{4} = 2$.

The statement is True.`,
      `**B.** → True

That is the relation obtained after squaring.

The statement is True.`,
      `**C.** → False

Isolate $\\sqrt{x + 8} = 1 + \\sqrt{x}$ and square: $x + 8 = 1 + 2\\sqrt{x} + x$, so $\\sqrt{x} = \\frac{7}{2}$ and $x = \\frac{49}{4}$, not $9$. At $x = 9$: $\\sqrt{17} - 3 \\approx 1.12$, not $1$.

The statement is False.`,
      `**D.** → False

Squaring can still introduce extras. The candidate must be substituted back.

The statement is False.`,
      `**E.** → False

At $x = 0$: $\\sqrt{12} \\neq 2$.

The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `Five independent isolate-and-square claims. $\\sqrt{x + 12} - \\sqrt{x} = 2$ recovers $x = 4$. A second difference of roots is a trap at $x = 9$.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `Five further radical isolations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The square root of a length plus $8$ m, plus the square root of the length itself, equals $6$ m. Then the length is $\\frac{49}{9}$ m.`,
      `If $\\sqrt{x + 8} + \\sqrt{x} = 6$ and the recovered length is $\\frac{49}{9}$ m, then $\\sqrt{x} = \\frac{7}{3}$ at that length.`,
      `The sum of roots $\\sqrt{x + 8} + \\sqrt{x}$ equals $6$ when the length is $9$ m, because $\\sqrt{9} = 3$ and $3 + 3 = 6$.`,
      `Isolating $\\sqrt{x + 8} = 6 - \\sqrt{x}$ requires $6 - \\sqrt{x} \\ge 0$, otherwise the isolated side could not be a principal square root.`,
      `The length $x = 4$ m also solves $\\sqrt{x + 8} + \\sqrt{x} = 6$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Isolate and square: $x + 8 = 36 - 12\\sqrt{x} + x$, so $\\sqrt{x} = \\frac{7}{3}$ and $x = \\frac{49}{9}$. Check: $\\sqrt{\\frac{121}{9}} + \\frac{7}{3} = 6$.

The statement is True.`,
      `**B.** → True

That is the isolated square root just obtained.

The statement is True.`,
      `**C.** → False

At $x = 9$: $\\sqrt{17} + 3 \\approx 7.1$, not $6$. The trap $3 + 3 = 6$ pretends the other root is also $\\sqrt{9}$.

The statement is False.`,
      `**D.** → True

A principal square root is nonnegative, so the isolated right-hand side must be as well.

The statement is True.`,
      `**E.** → False

At $x = 4$: $\\sqrt{12} + 2 \\approx 5.46$, not $6$.

The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 75,
    solution_overview: `Five independent radical isolations. $\\sqrt{x + 8} + \\sqrt{x} = 6$ recovers $x = \\frac{49}{9}$ after requiring $6 - \\sqrt{x} \\ge 0$.`,
  },
  {
    id: `math-4-76`,
    case_id: `MATH 4.76`,
    title: `Five absolute-value equations with a sign condition`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A gauge should match a reading $x$, but the recorded error satisfies $\\lvert 3 - 2x \\rvert = x + 1$. Then $x = 4$ is a solution, because both sides equal $5$.`,
      `The error equation $\\lvert 3 - 2x \\rvert = x + 1$ is also solved by $x = -2$, even though the right-hand side would then be negative.`,
      `Splitting $\\lvert 3 - 2x \\rvert = x + 1$ after requiring $x \\ge -1$ produces $x = \\frac{2}{3}$ as the other solution, and $\\lvert 3 - \\frac{4}{3} \\rvert = \\frac{5}{3}$ checks.`,
      `The equation $\\lvert 3 - 2x \\rvert = x + 1$ has only one real solution.`,
      `Every candidate of the split of $\\lvert 3 - 2x \\rvert = x + 1$ that already meets $x \\ge -1$ survives in the original absolute-value equation.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Need $x + 1 \\ge 0$. Then $3 - 2x = -(x + 1)$ gives $x = 4$. Check: $\\lvert 3 - 8 \\rvert = 5$ and $4 + 1 = 5$.

The statement is True.`,
      `**B.** → False

At $x = -2$ the right-hand side of $\\lvert 3 - 2x \\rvert = x + 1$ is $-1 < 0$, impossible for an absolute value.

The statement is False.`,
      `**C.** → True

$3 - 2x = x + 1$ gives $x = \\frac{2}{3} \\ge -1$. Check: $\\lvert \\frac{5}{3} \\rvert = \\frac{5}{3}$.

The statement is True.`,
      `**D.** → False

Two solutions, $\\frac{2}{3}$ and $4$.

The statement is False.`,
      `**E.** → True

Both case-split candidates that satisfy $x \\ge -1$ check in the original.

The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 76,
    solution_overview: `Five independent absolute-value claims. $\\lvert 3 - 2x \\rvert = x + 1$ needs $x \\ge -1$; both $\\frac{2}{3}$ and $4$ then survive.`,
  },
  {
    id: `math-4-77`,
    case_id: `MATH 4.77`,
    title: `A reciprocal difference, a radical extra, and three more`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The difference of two reciprocals $\\frac{1}{x - 1} - \\frac{1}{x + 1}$ equals $\\frac{1}{4}$. After excluding $x = \\pm 1$, the solutions are $x = 3$ and $x = -3$, and both check.`,
      `Both $x = 1$ and $x = 6$ solve $\\sqrt{x + 3} = x - 3$, because squaring produces $(x - 1)(x - 6) = 0$.`,
      `A depot equally far, in absolute value, from $-2$ and from $\\frac{7}{2}$ in the scaled sense $\\lvert x + 2 \\rvert = \\lvert 2x - 7 \\rvert$ sits at $x = 9$ or at $x = \\frac{5}{3}$.`,
      `The equation $\\sqrt{4 - x} = -2$ has a real solution $x = 0$, because squaring both sides gives $4 - x = 4$.`,
      `The simplified identity $\\frac{x^{2} - 4}{x - 2} = x$ holds at $x = 2$, which is therefore a root.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

LCD $x^{2} - 1$: $2 = \\frac{x^{2} - 1}{4}$, so $x^{2} = 9$ and $x = \\pm 3$. Check of $3$: $\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. Check of $-3$: $-\\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4}$. The statement is True.`,
      `**B.** → False

Need $x \\ge 3$. Squaring gives $x = 1$ or $x = 6$, but $x = 1$ makes the right-hand side $-2$. Only $x = 6$ survives. The statement is False.`,
      `**C.** → True

$x + 2 = 2x - 7$ gives $x = 9$. And $x + 2 = 7 - 2x$ gives $x = \\frac{5}{3}$. Both check. The statement is True.`,
      `**D.** → False

A principal square root is never negative. Squaring gives the extra $x = 0$, and $\\sqrt{4} = 2 \\neq -2$. No real solution. The statement is False.`,
      `**E.** → False

At $x = 2$ the left side is undefined. For $x \\neq 2$ it equals $x + 2$, and $x + 2 = x$ never holds. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Five independent equations of the subsection: a reciprocal difference with two surviving roots, a radical that drops $x = 1$, an equal-absolute-value pair, a negative principal root, and a hole at $x = 2$.`,
  },
  {
    id: `math-4-78`,
    case_id: `MATH 4.78`,
    title: `Five rational differences from different recipes`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Twice a number plus one, over the number minus one, minus the number plus three over the number plus one, equals $1$. After excluding $\\pm 1$, the solution is $x = -5$.`,
      `The difference $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1}$ is undefined at $x = 1$ and at $x = -1$.`,
      `$x = 1$ is a solution of $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$, because the two subtracted fractions become infinite in a way that cancels.`,
      `Substituting $x = -5$ into $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1}$ makes the left-hand side equal $1$, matching the right-hand side.`,
      `When $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$ is cleared by $(x - 1)(x + 1)$, the $x^{2}$ terms cancel and a linear equation remains.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $(x - 1)(x + 1)$:

$$(2x + 1)(x + 1) - (x + 3)(x - 1) = x^{2} - 1$$

The $x^{2}$ terms cancel and leave $x = -5$, which is allowed.

The statement is True.`,
      `**B.** → True

Those two values zero a denominator.

The statement is True.`,
      `**C.** → False

At $x = 1$ the first fraction is undefined. A hole is not a root.

The statement is False.`,
      `**D.** → True

Left: $\\frac{-9}{-6} - \\frac{-2}{-4} = \\frac{3}{2} - \\frac{1}{2} = 1$.

The statement is True.`,
      `**E.** → True

After expansion the quadratic terms on the two sides match and cancel, leaving a linear equation.

The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `Five independent rational-difference claims. Clearing $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$ cancels $x^{2}$ and recovers $x = -5$.`,
  },
];
