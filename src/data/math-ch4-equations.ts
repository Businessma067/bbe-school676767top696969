/**
 * Chapter 4 — Equations (subsections 4.1–4.5).
 * Exam format: five True/False claims, mix of pure equations and word problems.
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
    title: `Undo one operation at a time`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $2x + 6 = 14$ is greater than $4.5$.`,
      `The equation $5x - 3 = 12$ has solution smaller than $2.5$.`,
      `If $x - 7 = 2$, then $x$ is more than $8$.`,
      `The solution of $3(x + 1) = 12$ is at least $4$.`,
      `The equation $4x = 0$ has fewer than one real solution.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

$$2x + 6 = 14$$

$$2x = 8$$

$$x = 4$$

The claim says the solution is greater than $4.5$. The recovered value is $4$, which is not. The statement is False.`,
      `**B.** → False

$$5x - 3 = 12$$

$$5x = 15$$

$$x = 3$$

Three is not smaller than $2.5$. The statement is False.`,
      `**C.** → True

$$x - 7 = 2$$

$$x = 9$$

Check: $9 - 7 = 2$. Nine is more than $8$, so the statement is True.`,
      `**D.** → False

$$3(x + 1) = 12$$

$$3x + 3 = 12$$

$$3x = 9$$

$$x = 3$$

Three is not at least $4$. Check of $4$: $3(4 + 1) = 15$, not $12$. The statement is False.`,
      `**E.** → False

$$4x = 0$$

$$x = 0$$

Zero is a perfectly good number, and $4\\cdot 0 = 0$. The equation has the unique solution $x = 0$, so it does not have fewer than one real solution. The statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Five independent claims about linear equations in one unknown. A linear equation $ax + b = c$ with $a \\neq 0$ has exactly one solution, found by undoing operations on both sides until $x$ stands alone. Zero is allowed as a solution.`,
  },
  {
    id: `math-4-2`,
    case_id: `MATH 4.02`,
    title: `What each inverse step leaves`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Starting from $x + 5 = 11$ and subtracting $5$ from both sides leaves $x$ more than $5$.`,
      `The number that makes $7x = 21$ true is at least $4$.`,
      `Adding $8$ to both sides of $x - 8 = 10$ produces $x$ less than $17$.`,
      `Dividing both sides of $6x = 30$ by $6$ gives $x$ at most $4$.`,
      `The equation $x + 0 = 9$ is solved by a number greater than $8$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$x + 5 = 11$$

$$x = 6$$

Check: $6 + 5 = 11$. Subtracting $5$ does leave $x = 6$, and $6 > 5$, so the statement is True.`,
      `**B.** → False

$$7x = 21$$

$$x = 3$$

Three is not at least $4$. That would need $7\\cdot 4 = 28$ on the right. The statement is False.`,
      `**C.** → False

$$x - 8 = 10$$

$$x = 18$$

Eighteen is not less than $17$. Sixteen would give $16 - 8 = 8$, not $10$. The statement is False.`,
      `**D.** → False

$$6x = 30$$

$$x = 5$$

Five is not at most $4$. The statement is False.`,
      `**E.** → True

Adding zero does not change a number, so $x + 0 = 9$ is the same as $x = 9$, and $9 > 8$. The statement is True.`,
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
      `A number increased by $4$ equals $11$. That number is more than $6$.`,
      `Three times a number equals $18$, so the number is less than $5.5$.`,
      `After $8$ is subtracted from a number, $13$ remains. The original number is more than $20$.`,
      `Half of a number is $9$, so the number itself is more than twice $8$.`,
      `A number decreased by $6$ equals $10$. The number is less than $10$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$x + 4 = 11 \\Rightarrow x = 7$$

Seven plus four is eleven. Seven is more than $6$, so the statement is True.`,
      `**B.** → False

$$3x = 18 \\Rightarrow x = 6$$

Six is not less than $5.5$. Three fives are $15$, not $18$. The statement is False.`,
      `**C.** → True

$$x - 8 = 13 \\Rightarrow x = 21$$

From $21$, take away $8$ and $13$ remains. Twenty-one is more than $20$. The statement is True.`,
      `**D.** → True

$$\\frac{x}{2} = 9 \\Rightarrow x = 18$$

Half of $18$ is $9$. Twice $8$ is $16$, and $18 > 16$. The statement is True.`,
      `**E.** → False

$$x - 6 = 10 \\Rightarrow x = 16$$

Sixteen is not less than $10$. The claim looks like someone subtracted $6$ from $10$ instead of adding it back. The statement is False.`,
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
      `The equation $2(x + 3) = 14$ has solution more than $3$.`,
      `The equation $5(x - 2) = 20$ has solution more than twice $2$.`,
      `The equation $3(2x + 1) = 21$ has solution at least $4$.`,
      `Expanding $4(x - 5) = 12$ and solving gives $x$ more than $7$.`,
      `The equation $(x + 3) + (x - 1) = 10$ has solution less than $5$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$$2(x + 3) = 14 \\Rightarrow 2x + 6 = 14 \\Rightarrow x = 4$$

Check: $2(4 + 3) = 14$. Four is more than $3$. The statement is True.`,
      `**B.** → True

$$5(x - 2) = 20 \\Rightarrow 5x - 10 = 20 \\Rightarrow x = 6$$

Check: $5(6 - 2) = 20$. Twice $2$ is $4$, and $6 > 4$. The statement is True.`,
      `**C.** → False

$$3(2x + 1) = 21 \\Rightarrow 6x + 3 = 21 \\Rightarrow x = 3$$

Three is not at least $4$. The statement is False.`,
      `**D.** → True

$$4(x - 5) = 12 \\Rightarrow 4x - 20 = 12 \\Rightarrow x = 8$$

Check: $4(8 - 5) = 12$. Eight is more than $7$. The statement is True.`,
      `**E.** → True

$$(x + 3) + (x - 1) = 10 \\Rightarrow 2x + 2 = 10 \\Rightarrow x = 4$$

Check: $(4 + 3) + (4 - 1) = 10$. Four is less than $5$, so the statement is True.`,
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
      `The solution of $\\dfrac{x}{4} = 5$ is more than $18$.`,
      `Solving $\\dfrac{x}{3} + 2 = 6$ gives $x$ less than $11$.`,
      `The equation $\\dfrac{2x}{5} = 6$ has solution at most $12$.`,
      `If $\\dfrac{x + 1}{2} = 5$, then $x$ is more than $8$.`,
      `The equation $\\dfrac{3x}{2} = 9$ is solved by a number smaller than $5$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{4} = 5 \\Rightarrow x = 20$$

Check: $\\frac{20}{4} = 5$. Twenty is more than $18$. The statement is True.`,
      `**B.** → False

$$\\frac{x}{3} + 2 = 6 \\Rightarrow \\frac{x}{3} = 4 \\Rightarrow x = 12$$

Twelve is not less than $11$. Ten would give $\\frac{10}{3} + 2$, not $6$. The statement is False.`,
      `**C.** → False

$$\\frac{2x}{5} = 6 \\Rightarrow 2x = 30 \\Rightarrow x = 15$$

Fifteen is not at most $12$. Fifteen checks: $\\frac{30}{5} = 6$. The statement is False.`,
      `**D.** → True

$$\\frac{x + 1}{2} = 5 \\Rightarrow x + 1 = 10 \\Rightarrow x = 9$$

Check: $\\frac{10}{2} = 5$. Nine is more than $8$. The statement is True.`,
      `**E.** → False

$$\\frac{3x}{2} = 9 \\Rightarrow 3x = 18 \\Rightarrow x = 6$$

Six is not smaller than $5$. The statement is False.`,
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
      `A rectangle has width $4$ cm and length $3$ cm more than the width. Its perimeter is more than $20$ cm.`,
      `If one side of a square is $6$ cm, the perimeter is more than three times that side.`,
      `A number that is $5$ more than twice $8$ is more than $20$.`,
      `Splitting $30$ into two parts where one part is $4$ more than the other gives a larger part more than half of $30$.`,
      `A tank holds $40$ litres. After $15$ litres are poured out, more than half the tank remains.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Width $4$ cm, length $7$ cm. Perimeter $2(4 + 7) = 22 > 20$. The statement is True.`,
      `**B.** → True

$$P = 4 \\cdot 6 = 24$$

Three times the side is $18$, and $24 > 18$. The statement is True.`,
      `**C.** → True

$$2 \\cdot 8 + 5 = 21 > 20$$

The statement is True.`,
      `**D.** → True

$$x + (x + 4) = 30 \\Rightarrow x = 13$$

The parts are $13$ and $17$. Half of $30$ is $15$, and $17 > 15$. The statement is True.`,
      `**E.** → True

$$40 - 15 = 25$$

Half of $40$ is $20$, and $25 > 20$. The statement is True.`,
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
      `The equation $2x + 3 = 3x - 5$ has solution more than $7$.`,
      `The equation $5 - x = 2x + 8$ has solution less than $0$.`,
      `The equation $4(x - 1) = 2(x + 5)$ has solution more than $6$.`,
      `The equations $x + 3 = 10$ and $2x = 14$ have the same solution, and that solution is more than $6$.`,
      `Collecting like terms in $7x - 2 - 3x = 10$ yields $4x = 12$, so $x$ is less than $4$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$2x + 3 = 3x - 5 \\Rightarrow 3 = x - 5 \\Rightarrow x = 8$$

Check: both sides equal $19$. Eight is more than $7$. The statement is True.`,
      `**B.** → True

$$5 - x = 2x + 8 \\Rightarrow 5 = 3x + 8 \\Rightarrow x = -1$$

Check: both sides equal $6$. Minus one is less than $0$. The statement is True.`,
      `**C.** → True

$$4x - 4 = 2x + 10 \\Rightarrow 2x = 14 \\Rightarrow x = 7$$

Check: both sides equal $24$. Seven is more than $6$. The statement is True.`,
      `**D.** → True

$$x + 3 = 10 \\Rightarrow x = 7$$

and

$$2x = 14 \\Rightarrow x = 7$$

They share the solution $x = 7$, and $7 > 6$. The statement is True.`,
      `**E.** → True

$$4x - 2 = 10 \\Rightarrow 4x = 12 \\Rightarrow x = 3$$

Check: $21 - 2 - 9 = 10$. Three is less than $4$. The statement is True.`,
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
      `The equation $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ has solution at least $8$.`,
      `The equation $\\dfrac{x - 1}{3} = \\dfrac{x + 1}{5}$ has solution smaller than $3$.`,
      `Clearing the denominator in $\\dfrac{2x}{3} = 8$ gives $x$ less than $11$.`,
      `The equation $\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ has solution at most $10$.`,
      `The solution of $\\dfrac{3x + 1}{4} = 4$ is more than $4$ and less than $6$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Multiply through by $6$: $3x + 2x = 30 \\Rightarrow x = 6$. Six is not at least $8$. Eight would give $4 + \\frac{8}{3}$, not $5$. The statement is False.`,
      `**B.** → False

$$5(x - 1) = 3(x + 1) \\Rightarrow 5x - 5 = 3x + 3 \\Rightarrow x = 4$$

Four is not smaller than $3$. The statement is False.`,
      `**C.** → False

$$2x = 24 \\Rightarrow x = 12$$

Twelve is not less than $11$. The statement is False.`,
      `**D.** → False

Multiply through by $12$: $3x - 2x = 12 \\Rightarrow x = 12$. Twelve is not at most $10$. The statement is False.`,
      `**E.** → True

$$3x + 1 = 16 \\Rightarrow x = 5$$

Check: $\\frac{16}{4} = 4$. Five lies between $4$ and $6$. The statement is True.`,
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
      `If one side of a rectangle is $3$ cm longer than the other and the perimeter is $22$ cm, then the longer side is more than $6$ cm.`,
      `A car travels at an average speed of $60$ km/h and covers $90$ km. Then the trip took more than $1.8$ hours.`,
      `A cook has $2$ litres of $20\\%$ vinegar and mixes it with $2$ litres of water. The mixture is then more than $15\\%$ vinegar.`,
      `A prize of $9000$ EUR is split so that second place gets $50\\%$ of first place, and third place gets $50\\%$ of second place. Then second place is at least $2800$ EUR.`,
      `The solution of $2x + 1 = x + 8$ is larger than $10$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$2(x + x + 3) = 22 \\Rightarrow 2x + 3 = 11 \\Rightarrow x = 4$$

The longer side is $7$ cm, which is more than $6$. The statement is True.`,
      `**B.** → False

$$t = \\frac{90}{60} = 1.5$$

hours, which is not more than $1.8$. The statement is False.`,
      `**C.** → False

Acid $0.40$ litres in $4$ litres total is $10\\%$, which is not more than $15\\%$. Water dilutes the concentration. The statement is False.`,
      `**D.** → False

$$1.75a = 9000 \\Rightarrow a \\approx 5142.86$$, so second place is about $2571$ EUR, which is not at least $2800$. The statement is False.`,
      `**E.** → False

$$2x + 1 = x + 8 \\Rightarrow x = 7$$

Seven is smaller than ten, not larger. The statement is False.`,
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
      `The equation $x + 3 = x + 5$ has a real solution smaller than $1$.`,
      `The equation $2(x + 4) = 2x + 8$ is true for more than three real numbers $x$.`,
      `The equation $-3x = 12$ has solution greater than $0$.`,
      `The equation $5x + 2 = 5x + 2$ has fewer than one real solution.`,
      `The equation $x = x + 1$ is solved by a number at most $0$.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Subtract $x$: $3 = 5$, which is never true. There is no solution, so not a real solution smaller than $1$. The statement is False.`,
      `**B.** → True

Both sides are $2x + 8$. The equation is an identity, so it holds for more than three real $x$. The statement is True.`,
      `**C.** → False

$$x = \\frac{12}{-3} = -4$$

Minus four is not greater than $0$. The statement is False.`,
      `**D.** → False

The two sides are identical, so every real $x$ works: infinitely many solutions, not fewer than one. The statement is False.`,
      `**E.** → False

Subtract $x$: $0 = 1$. No solution at all, so not a number at most $0$. The statement is False.`,
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
      `A father is $28$ years older than his son. In $8$ years the father will be twice as old as the son will be then. The son is now older than $18$.`,
      `The sum of three consecutive odd integers is $75$. The largest of them is at least $28$.`,
      `A purse holds only $2$ EUR coins and $5$ EUR coins. There are $16$ coins in all, worth $53$ EUR. Then there are more than $6$ coins of $5$ EUR.`,
      `Water flows into an empty tank at $15$ litres per minute. After $12$ minutes the tank is four-fifths full, so the tank's capacity is less than $200$ litres.`,
      `A number plus one-third of itself equals $48$. That number is at least $38$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the son's present age be $s$. The father is $s + 28$ now. In eight years the father is twice the son.

$$s + 36 = 2(s + 8)$$

$$s + 36 = 2s + 16$$

$$s = 20$$

Now they are $20$ and $48$; in eight years $28$ and $56$, and $56 = 2 \\cdot 28$. Twenty is older than $18$. The statement is True.`,
      `**B.** → False

Consecutive odd integers differ by $2$. Let the smallest be $n$.

$$n + (n + 2) + (n + 4) = 75$$

$$3n + 6 = 75 \\Rightarrow n = 23$$

The largest is $27$, which is not at least $28$. The triple $25, 27, 29$ sums to $81$. The statement is False.`,
      `**C.** → True

Let $x$ be the number of $5$ EUR coins.

$$5x + 2(16 - x) = 53$$

$$3x + 32 = 53 \\Rightarrow x = 7$$

Seven fives and nine twos: $35 + 18 = 53$. Seven is more than $6$. The statement is True.`,
      `**D.** → False

Twelve minutes deliver $15 \\cdot 12 = 180$ litres, and that is four-fifths of the tank, not the whole tank.

$$\\text{capacity} = 180 \\cdot \\frac{5}{4} = 225$$

The tank holds $225$ litres, which is not less than $200$. The statement is False.`,
      `**E.** → False

$$x + \\frac{x}{3} = 48 \\Rightarrow \\frac{4x}{3} = 48 \\Rightarrow x = 36$$

Thirty-six is not at least $38$. Check: $36 + 12 = 48$. The statement is False.`,
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
      `A runner covers $9$ km at $6$ km/h and then $6$ km at $9$ km/h. The whole run takes less than $2$ hours.`,
      `Two printers working together finish a job in $4$ hours. The faster one alone would take $6$ hours. Then the slower one alone would take more than $10$ hours.`,
      `A train $180$ m long passes a pole in $12$ seconds. Its speed is more than $50$ km/h.`,
      `A car leaves a depot at $8{:}00$ at $60$ km/h. A second car leaves the same depot at $9{:}00$ at $90$ km/h, chasing the first. They meet later than $11{:}30$.`,
      `A tap fills a $240$ litre tub in $8$ minutes. Left open for $5$ minutes it pours more than $140$ litres.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Add the two legs separately. Do not add the speeds.

$$t = \\frac{9}{6} + \\frac{6}{9} = 1.5 + \\frac{2}{3} = \\frac{13}{6}$$

hours, which is $2$ h $10$ min, not less than $2$ h. The statement is False.`,
      `**B.** → True

$$\\frac{1}{6} + \\frac{1}{s} = \\frac{1}{4} \\Rightarrow \\frac{1}{s} = \\frac{1}{12} \\Rightarrow s = 12$$

The slower printer takes $12$ hours alone, which is more than $10$. The statement is True.`,
      `**C.** → True

Passing a pole means covering the train's own length: $\\frac{180}{12} = 15$ m/s, and $15 \\cdot 3.6 = 54$ km/h, which is more than $50$. The statement is True.`,
      `**D.** → False

The first car is already $60$ km ahead at $9{:}00$. They close at $30$ km/h, so they meet after $2$ hours, at $11{:}00$, which is not later than $11{:}30$. The statement is False.`,
      `**E.** → True

The rate is $30$ litres per minute, so five minutes pour $150$ litres, which is more than $140$. The statement is True.`,
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
      `An isosceles triangle has perimeter $40$ cm. Each of the two equal sides is $5$ cm longer than the base. Then the base is more than one-fifth of the perimeter.`,
      `A rectangular garden is $3$ m longer than it is wide. Fencing all four sides uses $54$ m of wire. Then the width is more than $10$ m.`,
      `The three angles of a triangle, measured in degrees, are consecutive integers. The largest angle is more than $60^{\\circ}$.`,
      `A square and an equilateral triangle have the same side length. The triangle's perimeter is $12$ cm, so the square's perimeter is more than $1.2$ times the triangle's.`,
      `A rectangle has width $8$ cm. If the length is increased by $2$ cm and the width is left unchanged, the perimeter increases by more than $3$ cm.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$2(b + 5) + b = 40 \\Rightarrow 3b + 10 = 40 \\Rightarrow b = 10$$

Sides $10$, $15$, $15$. One-fifth of $40$ is $8$, and $10 > 8$. The statement is True.`,
      `**B.** → True

$$2(w + w + 3) = 54 \\Rightarrow 2w + 3 = 27 \\Rightarrow w = 12$$

The garden is $12$ m by $15$ m, and $12 > 10$. The statement is True.`,
      `**C.** → True

$$n + (n + 1) + (n + 2) = 180 \\Rightarrow n = 59$$

The largest is $61^{\\circ}$, which is more than $60^{\\circ}$. Check: $59 + 60 + 61 = 180$. The statement is True.`,
      `**D.** → True

The triangle's side is $4$ cm, so the square's perimeter is $4 \\cdot 4 = 16$ cm. Then $1.2 \\cdot 12 = 14.4$, and $16 > 14.4$. The statement is True.`,
      `**E.** → True

Length grows by $2$ cm on each of two sides, so the perimeter grows by $4$ cm, which is more than $3$. The width never enters that difference. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Five independent geometry stories that stay linear: an isosceles perimeter, a fenced rectangle, consecutive angle measures, and how a perimeter reacts when only the length grows.`,
  },
  {
    id: `math-4-14`,
    case_id: `MATH 4.14`,
    title: `Apples at 2 EUR and pears at 3 EUR`,
    subsection: `4.1`,
    context: `A stall sells apples at $2$ EUR per kilogram and pears at $3$ EUR per kilogram. A customer buys some kilograms of each and pays $21$ EUR in total. The mass of apples is $3$ kg more than the mass of pears. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The customer bought more than $2$ kg of pears.`,
      `The customer bought more than $1.5$ times as many kilograms of apples as of pears.`,
      `Apples accounted for more than half of the $21$ EUR bill.`,
      `If the customer had bought $1$ kg less of each fruit, the bill would have been less than $17$ EUR.`,
      `Pears made up less than $40\\%$ of the total mass purchased.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Let pears be $x$ kg. Then apples are $x + 3$.

$$2(x + 3) + 3x = 21 \\Rightarrow 5x = 15 \\Rightarrow x = 3$$

The statement is True.`,
      `**B.** → True

Apples are $3 + 3 = 6$ kg. Then $1.5 \\cdot 3 = 4.5$, and $6 > 4.5$. The statement is True.`,
      `**C.** → True

$$6 \\cdot 2 = 12$$

euros from apples, and $12 > 10.5$. The statement is True.`,
      `**D.** → True

Then $5$ kg of apples and $2$ kg of pears cost $10 + 6 = 16$ EUR, which is less than $17$. The statement is True.`,
      `**E.** → True

Pears are $3$ kg of $9$ kg total, which is one-third, and $\\frac{1}{3} < 0.40$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `One shopping story, five checks. Apples at $2$ EUR/kg, pears at $3$ EUR/kg, apples $3$ kg heavier than pears, bill $21$ EUR. That recovers $3$ kg of pears and $6$ kg of apples.`,
  },
  {
    id: `math-4-15`,
    case_id: `MATH 4.15`,
    title: `Five separate percentage and dilution stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A chemist has a vat of $20\\%$ acid. Two litres are drawn off and replaced with water, after which the mixture is $16\\%$ acid. Then the original volume is more than four times the two litres drawn.`,
      `Two litres are taken from a vat of $20\\%$ acid. A lab note claims those two litres contained more than $0.45$ litres of pure acid.`,
      `After a $20\\%$ discount a jacket costs $64$ EUR. A shop assistant says the original price was more than $85$ EUR.`,
      `A listed price is first raised by $25\\%$ and then reduced by $25\\%$. The final price is at least as large as the original listed price.`,
      `A salary of $2400$ EUR is increased by $10\\%$ and then by a further $10\\%$. The two raises together give less than a $20\\%$ increase on $2400$ EUR.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Let the original volume be $V$ litres. Drawing $2$ litres of $20\\%$ acid leaves $0.20(V - 2)$ litres of acid in volume $V$.

$$\\frac{0.20(V - 2)}{V} = 0.16 \\quad \\Rightarrow \\quad V = 10$$

The original volume is $10$ litres, and $4 \\cdot 2 = 8$, so $10 > 8$. The statement is True.`,
      `**B.** → False

The drawn liquid is still $20\\%$ acid, so those two litres hold $0.40$ litres of acid, which is not more than $0.45$. The statement is False.`,
      `**C.** → False

$$0.80p = 64 \\quad \\Rightarrow \\quad p = 80$$

Eighty is not more than $85$. The statement is False.`,
      `**D.** → False

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original, so it is smaller, not at least as large. The statement is False.`,
      `**E.** → False

$$2400 \\cdot 1.1 \\cdot 1.1 = 2904$$

That is a $21\\%$ increase, which is not less than $20\\%$. Two successive $10\\%$ raises multiply. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `Five independent linear percentage stories: a two-step acid swap that recovers $10$ litres, a miscounted solute, a discount, successive percentage changes that do not cancel, and two $10\\%$ raises.`,
  },
  {
    id: `math-4-16`,
    case_id: `MATH 4.16`,
    title: `Five separate motion and current stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Towns $X$ and $Y$ are $132$ km apart. At noon a car leaves $X$ toward $Y$ at $48$ km/h. Thirty minutes later a second car leaves $Y$ toward $X$ at $72$ km/h. They meet more than $50$ minutes after noon, but still before $1$ pm.`,
      `A later car starts at $12{:}30$, and the two oncoming cars meet $54$ minutes after noon. A passenger claims the later car has then been driving for at least a full hour.`,
      `A boat goes $24$ km downstream in $2$ hours and returns the same $24$ km upstream in $3$ hours. The boat's speed in still water is at least $12$ km/h.`,
      `A cyclist rides to town at $15$ km/h and back at $10$ km/h. If the one-way distance is $30$ km, the round trip takes less than $4.5$ hours.`,
      `A car leaves town $X$ at $48$ km/h toward $Y$. After a $30$ minute head start it has covered more than $20$ km.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

After half an hour the first car has covered $24$ km, so $108$ km remains. They close at $120$ km/h, so $t = \\frac{108}{120} = 0.9$ hours after $12{:}30$, which is $54$ minutes after noon. That is more than $50$ minutes and before $1$ pm. The statement is True.`,
      `**B.** → False

The later car drives from $12{:}30$ until $12{:}54$, which is $54$ minutes, not at least $60$. The statement is False.`,
      `**C.** → False

Downstream $12$ km/h, upstream $8$ km/h. Still water is their average, $10$ km/h, which is not at least $12$. The statement is False.`,
      `**D.** → False

Outward $2$ hours, return $3$ hours, total $5$, which is not less than $4.5$. Averaging the times is the trap. The statement is False.`,
      `**E.** → True

Half an hour at $48$ km/h is $24$ km, and $24 > 20$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Five independent motion claims. A delayed oncoming meeting, a current as half the downstream-upstream gap, a round trip that is not the arithmetic mean of the speeds, and a head-start distance.`,
  },
  {
    id: `math-4-17`,
    case_id: `MATH 4.17`,
    title: `A rod, a recipe, and two-fifths of a number`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A metal rod is $2.4$ m long. It is cut into two pieces so that one piece is $60$ cm longer than the other. The shorter piece is more than one-third of the rod.`,
      `The mean of three numbers is $14$. Two of them are $11$ and $15$. The third is at least $18$.`,
      `A recipe for $8$ portions uses $600$ g of flour. For $12$ portions one therefore needs more than $950$ g of flour.`,
      `A rectangle's length is twice its width. The perimeter is $48$ cm, so the width is at least $10$ cm.`,
      `Three-fifths of a number is $12$ more than one-fifth of the same number. The number is less than $28$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Work in centimetres: $240$ cm total.

$$x + (x + 60) = 240 \\Rightarrow x = 90$$

One-third of $240$ cm is $80$ cm, and $90 > 80$. The statement is True.`,
      `**B.** → False

The three numbers add to $42$, so the third is $42 - 11 - 15 = 16$, which is not at least $18$. The statement is False.`,
      `**C.** → False

Scale by $\\frac{12}{8} = 1.5$: flour $600 \\cdot 1.5 = 900$ g, which is not more than $950$. The statement is False.`,
      `**D.** → False

$$2(2w + w) = 48 \\Rightarrow w = 8$$

Eight is not at least $10$. Ten would force length $20$ and perimeter $60$, not $48$. The statement is False.`,
      `**E.** → False

$$\\frac{3x}{5} - \\frac{x}{5} = 12 \\Rightarrow \\frac{2x}{5} = 12 \\Rightarrow x = 30$$

Thirty is not less than $28$. Check: $18 - 6 = 12$ for $x = 30$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Five independent stories: a rod in mixed units, a missing value from a mean, a recipe scaled by portions, a $2{:}1$ rectangle, and a comparison of two fifths of the same number.`,
  },
  {
    id: `math-4-18`,
    case_id: `MATH 4.18`,
    title: `Five separate linear equations with fractions and words`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A student clears $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$ by multiplying through by $12$. The unique real solution is greater than $3$ but less than $4$.`,
      `A second linear equation $\\frac{x + 1}{2} - \\frac{x - 1}{3} = 2$ clears by $6$ to $x = 7$. That solution is more than three times $2$.`,
      `The least common multiple of $3$, $4$, and $6$ is no larger than $12$, so multiplying the first displayed equation through by $12$ is the economical clearing.`,
      `The unique real solution of $\\frac{x}{2} + \\frac{x}{3} = 5$ is at least $8$.`,
      `Substituting $x = \\frac{13}{4}$ into $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$ makes each side equal $-\\frac{35}{24}$, which is less than $-1$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $12$: $4(x - 2) - 3(2x + 1) = 2x - 24$, so $-2x - 11 = 2x - 24$ and $4x = 13$. Hence $x = \\frac{13}{4} = 3.25$, which lies between $3$ and $4$. The statement is True.`,
      `**B.** → True

Multiply through by $6$: $3(x + 1) - 2(x - 1) = 12$, so $x = 7$. And $7 > 6$. The statement is True.`,
      `**C.** → True

$12$ is a multiple of each of $3$, $4$, and $6$, and no smaller positive integer is, so the LCM is no larger than $12$. The statement is True.`,
      `**D.** → False

$$\\frac{x}{2} + \\frac{x}{3} = 5 \\Rightarrow \\frac{5x}{6} = 5 \\Rightarrow x = 6$$

Six is not at least $8$. The statement is False.`,
      `**E.** → True

Left: $\\frac{5}{12} - \\frac{15}{8} = -\\frac{35}{24}$. Right: $\\frac{13}{24} - 2 = -\\frac{35}{24}$. And $-\\frac{35}{24} < -1$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent linear claims. One three-denominator equation clears by $12$ to $x = \\frac{13}{4}$. The other letters check the LCD, a trap value $4$, and the common value of both sides.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Five separate wage, parts, and overtime bills`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A workshop bills $40$ EUR per hour for the first $3$ hours of a job and $60$ EUR per hour after that, plus a fixed $50$ EUR for parts. One job comes to $290$ EUR. Then the job ran for more than $4$ hours.`,
      `A plumber charges $45$ EUR per hour plus a $30$ EUR call-out fee. A visit that comes to $165$ EUR lasted less than $4$ hours.`,
      `On a $290$ EUR workshop job billed at $40$ EUR then $60$ EUR per hour plus $50$ EUR parts, labour is more than four times the parts charge.`,
      `The same two-band tariff plus $50$ EUR parts would cost at least $290$ EUR for a $4$ hour job, because overtime would already have started.`,
      `The $50$ EUR parts charge is less than one-fifth of the $290$ EUR bill.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The $40$ EUR band alone cannot produce $h = 5 > 3$. Overtime: $120 + 60(h - 3) + 50 = 290$ gives $h = 5$, which is more than $4$. The statement is True.`,
      `**B.** → True

$$45h + 30 = 165 \\Rightarrow h = 3$$

Three is less than $4$. The statement is True.`,
      `**C.** → True

Labour is $120 + 120 = 240$ EUR, and $240 > 4 \\cdot 50$. The statement is True.`,
      `**D.** → False

Four hours: $120 + 60 + 50 = 230$ EUR, which is not at least $290$. The statement is False.`,
      `**E.** → True

$\\frac{50}{290} < \\frac{1}{5}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Five independent billing claims. A two-band labour tariff plus parts recovers $5$ hours for a $290$ EUR job. The other letters read overtime hours, labour versus parts, and a $4$ hour trap.`,
  },
  {
    id: `math-4-20`,
    case_id: `MATH 4.20`,
    title: `Five separate clock and time-gain stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A clock is set right at noon and gains $4$ minutes in every true hour. When the clock first shows $8$ pm, the true time is earlier than $7{:}25$ pm.`,
      `A clock that gains $4$ minutes in every true hour runs more than $63$ minutes of its own for every $60$ true minutes.`,
      `A clock set right at noon gains $4$ minutes per true hour. When it first shows $8$ pm, those $480$ clock minutes correspond to more than $440$ true minutes.`,
      `True time when a $4$-minutes-fast-per-true-hour clock shows $8$ pm is $8$ hours minus $4 \\cdot 8 = 32$ minutes, and that recovered time is earlier than $7{:}25$ pm.`,
      `After $4$ true hours a clock that gains $4$ minutes per true hour shows later than $4{:}18$.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

True minutes $= 480 \\cdot \\frac{60}{64} = 450$, which is $7{:}30$ pm. That is not earlier than $7{:}25$. The statement is False.`,
      `**B.** → True

A gain of $4$ minutes per true hour means $64$ clock minutes per $60$ true minutes, and $64 > 63$. The statement is True.`,
      `**C.** → True

Those $450$ true minutes after noon exceed $440$. The statement is True.`,
      `**D.** → False

Subtracting $4$ minutes per hour shown treats the gain as if it were $4$ minutes of true time per clock hour and yields $7{:}28$ pm, which is not earlier than $7{:}25$. The correct factor is $\\frac{60}{64}$, giving $7{:}30$, also not earlier than $7{:}25$. The statement is False.`,
      `**E.** → False

Four true hours put $4 \\cdot 64 = 256$ minutes on the clock, which is $4$ hours $16$ minutes, not later than $4{:}18$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Five independent fast-clock claims. True time is clock time times $\\frac{60}{64}$, not a flat $4$ minutes subtracted per hour shown.`,
  },
  {
    id: `math-4-21`,
    case_id: `MATH 4.21`,
    title: `Five separate age and consecutive-number stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A father is now four times as old as his son. In $20$ years the father will be twice as old as the son will be then. The son is now younger than $12$.`,
      `A mother is three times as old as her daughter. In $12$ years the mother will be twice as old as the daughter will be then. The daughter is now at least $12$.`,
      `A father who is now four times as old as a $10$-year-old son will, in $20$ years, be less than $55$.`,
      `If a father is now $40$ and his son is now $10$, their ages differ by more than twice the son's age, and that gap does not change as both grow older.`,
      `Five years ago a father of $40$ and a son of $10$ were in a ratio of at least eight to one.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$4s + 20 = 2(s + 20)$ gives $s = 10$, which is younger than $12$. The statement is True.`,
      `**B.** → True

$3d + 12 = 2(d + 12)$ gives $d = 12$, which is at least $12$. The statement is True.`,
      `**C.** → False

In twenty years the father is $60$, which is not less than $55$. The statement is False.`,
      `**D.** → True

$40 - 10 = 30$, and twice the son's age is $20$, so $30 > 20$. Both ages increase equally. The statement is True.`,
      `**E.** → False

Five years ago they were $35$ and $5$, ratio $7 : 1$, which is not at least eight to one. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Five independent age claims. Present ages $4s$ and $s$ with a two-point relation recover $s = 10$ and father $40$.`,
  },
  {
    id: `math-4-22`,
    case_id: `MATH 4.22`,
    title: `Five separate train-passing and unit-conversion stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two trains $150$ m and $250$ m long run toward each other at $54$ km/h and $36$ km/h. From the instant their fronts meet until they have completely passed takes at most $12$ seconds.`,
      `While two trains of $150$ m and $250$ m pass, they must cover more than twice the shorter train's length relative to one another.`,
      `A closing speed of $90$ km/h converts to at most $20$ m/s.`,
      `Two trains $150$ m and $250$ m long close at $90$ km/h, which is $25$ m/s. The passing time is more than a quarter of a minute.`,
      `If two trains of $150$ m and $250$ m run in the same direction at $54$ km/h and $36$ km/h, they take less than one minute to pass.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Relative speed $90$ km/h $= 25$ m/s, so $t = \\frac{400}{25} = 16$ seconds, which is not at most $12$. The statement is False.`,
      `**B.** → True

Each train must clear the other's full length: $150 + 250 = 400$ m, and $400 > 2 \\cdot 150$. The statement is True.`,
      `**C.** → False

$$90 \\cdot \\frac{5}{18} = 25$$

metres per second, which is not at most $20$. The statement is False.`,
      `**D.** → True

$\\frac{400}{25} = 16$ seconds, and a quarter of a minute is $15$ seconds, so $16 > 15$. The statement is True.`,
      `**E.** → False

Same direction: relative speed $18$ km/h $= 5$ m/s, so $t = 80$ seconds, which is not less than $60$. The statement is False.`,
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
      `A vat holds $40$ litres of $20\\%$ acid. Ten litres of water are added. The concentration is then less than $18\\%$ acid.`,
      `A $50$ litre mixture at $16\\%$ acid is topped up with a $50\\%$ acid stock until the mixture is $25\\%$ acid. The stock added is more than one-third of those $50$ litres.`,
      `After $18$ litres of $50\\%$ stock are poured into $50$ litres of $16\\%$ acid, the final volume is more than $1.3$ times the watered $50$ litres.`,
      `After $18$ litres of $50\\%$ stock are poured into $50$ litres of $16\\%$ acid, the final $25\\%$ mixture contains more than $18$ litres of acid.`,
      `Eighteen litres of $50\\%$ stock added to $50$ litres of $16\\%$ acid produce $68$ litres at $25\\%$, so the acid is a quarter of the final volume.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Original acid $8$ litres in $50$ litres after the water: $\\frac{8}{50} = 0.16$, which is less than $18\\%$. The statement is True.`,
      `**B.** → True

$8 + 0.50x = 0.25(50 + x)$ gives $x = 18$. One-third of $50$ is $\\frac{50}{3} \\approx 16.67$, and $18 > 16.67$. The statement is True.`,
      `**C.** → True

$50 + 18 = 68$, and $1.3 \\cdot 50 = 65$, so $68 > 65$. The statement is True.`,
      `**D.** → False

Final acid is $8 + 9 = 17$ litres, which is not more than $18$. The statement is False.`,
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
      `A farmer has a rectangular field that is $8$ m longer than it is wide. Around the outside he lays a gravel path $1.5$ m wide. The path covers $141$ m$^{2}$. He concludes that the field is at most half as wide as it is long.`,
      `A gardener has a rectangular lawn that is $4$ m longer than it is wide. Around the outside she lays a $1$ m flower border. The border covers $48$ m$^{2}$. She concludes that the lawn is more than two-thirds as wide as it is long.`,
      `A sports pitch measures $18$ m by $26$ m. The groundskeeper adds a uniform $1.5$ m running path around the outside. Then the outer length is more than $1.5$ times the inner width.`,
      `A club lays a $1.5$ m path around an $18$ m by $26$ m pitch. The path is the outer $21$ m by $29$ m rectangle minus the pitch, so the path covers less than a quarter of that outer rectangle.`,
      `A running path forms a $21$ m by $29$ m outer rectangle around a pitch. Walking once around the outer edge covers more than twice the pitch length.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ m. Then the length is $w + 8$. The outer rectangle is $w + 3$ by $w + 11$.

$$(w + 3)(w + 11) - w(w + 8) = 141$$

$$6w + 33 = 141 \\quad \\Rightarrow \\quad w = 18$$

The length is $26$ m, so half the length is $13$ m. The width $18$ is larger than $13$, not at most half the length. The statement is False.`,
      `**B.** → True

Let the width be $w$ m. Then the length is $w + 4$. The outer rectangle is $w + 2$ by $w + 6$.

$$(w + 2)(w + 6) - w(w + 4) = 48$$

$$4w + 12 = 48 \\quad \\Rightarrow \\quad w = 9$$

The length is $13$ m, and two-thirds of $13$ is $\\frac{26}{3} \\approx 8.67$. The width $9$ is greater. The statement is True.`,
      `**C.** → True

The path adds $3$ m to each side, so the outer length is $29$ m. Then $1.5 \\cdot 18 = 27$, and $29 > 27$. The statement is True.`,
      `**D.** → True

Outer area $21 \\cdot 29 = 609$. Path $609 - 468 = 141$. A quarter of $609$ is $152.25$, and $141 < 152.25$. The statement is True.`,
      `**E.** → True

Outer perimeter $2(21 + 29) = 100$. Twice the pitch length is $52$, and $100 > 52$. The statement is True.`,
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
      `$A$ finishes a job in $12$ days, $B$ in $18$ days, and $C$ in $24$ days. $A$ and $B$ work together for $2$ days, then $C$ joins. After $C$ joins, a supervisor claims the three still need more than $5$ days.`,
      `$A$ finishes a job in $12$ days and $B$ in $18$ days. After they have worked together for $2$ days, more than two-thirds of the job remains.`,
      `$A$, $B$, and $C$ finish a job in $12$, $18$, and $24$ days alone. After $A$ and $B$ have already done $2$ days together, leaving $\\frac{13}{18}$ of the job, all three then need less than $5$ more days.`,
      `$C$ alone finishes a job in $24$ days. After $\\frac{13}{18}$ of a job remains, $C$ working alone would clear that remainder in fewer than $10$ days.`,
      `Three workers who finish a job in $12$, $18$, and $24$ days alone have a combined rate greater than $\\frac{1}{6}$ of a job per day.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

$A$ and $B$ do $\\frac{5}{36}$ per day, so two days leave $\\frac{13}{18}$. All three do $\\frac{13}{72}$ per day, so the rest takes $4$ days, which is not more than $5$. The statement is False.`,
      `**B.** → True

$1 - \\frac{5}{18} = \\frac{13}{18}$. Two-thirds is $\\frac{12}{18}$, and $\\frac{13}{18} > \\frac{12}{18}$. The statement is True.`,
      `**C.** → True

Four more days at $\\frac{13}{72}$ finish $\\frac{13}{18}$, and $4 < 5$. The statement is True.`,
      `**D.** → False

$C$ does $\\frac{1}{24}$ per day, so the remainder takes $\\frac{13}{18} \\cdot 24 = \\frac{52}{3}$ days, about $17.3$, which is not fewer than $10$. The statement is False.`,
      `**E.** → True

$\\frac{1}{12} + \\frac{1}{18} + \\frac{1}{24} = \\frac{13}{72}$. And $\\frac{13}{72} > \\frac{1}{6} = \\frac{12}{72}$. The statement is True.`,
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
      `A $300$ km journey is scheduled to take $5$ hours of clock time, including a $30$ minute rest. The driver holds $80$ km/h before the rest and $40$ km/h after it. Then he drove for more than half of that $5$ hour clock at $80$ km/h.`,
      `A $300$ km journey is booked for $5$ hours of clock time with a $30$ minute rest. The driver holds $80$ km/h for $3$ hours, then $40$ km/h for the rest of the driving. The slower spell lasts less than $2$ hours.`,
      `On a $300$ km trip the driver holds $80$ km/h for $3$ hours and then slows to $40$ km/h. In those three fast hours he covers more than three-quarters of the $300$ km.`,
      `A $300$ km journey takes $5$ hours of clock time, rest included. The average speed for that whole clock interval is more than $1.4$ times the slower $40$ km/h spell.`,
      `A $300$ km journey is driven $3$ hours at $80$ km/h and $1.5$ hours at $40$ km/h, with a $30$ minute rest on top. Without the rest, the same driving would take less than $4$ hours.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Driving time $4.5$ hours: $80t + 40(4.5 - t) = 300$ gives $t = 3$. Half of $5$ hours is $2.5$, and $3 > 2.5$. The statement is True.`,
      `**B.** → True

$4.5 - 3 = 1.5$ hours at $40$ km/h, which is less than $2$. The statement is True.`,
      `**C.** → True

$80 \\cdot 3 = 240$ km. Three-quarters of $300$ is $225$, and $240 > 225$. The statement is True.`,
      `**D.** → True

$\\frac{300}{5} = 60$ km/h, and $1.4 \\cdot 40 = 56$, so $60 > 56$. The statement is True.`,
      `**E.** → False

Driving time is already $4.5$ hours. Dropping the rest shortens the clock to $4.5$ hours, which is not less than $4$. The statement is False.`,
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
      `In a $100$ m race, $A$ beats $B$ by $20$ m, and $B$ beats $C$ by $25$ m. When $A$ has run $100$ m, $C$ has covered less than two-thirds of the race.`,
      `In a $100$ m race $A$ beats $B$ by $20$ m. Then $A$ is slower than $B$.`,
      `In a $100$ m race $A$ beats $B$ by $20$ m and $B$ beats $C$ by $25$ m. Then $A$ beats $C$ by more than $45$ m in a $100$ m race.`,
      `When $A$ runs $100$ m in a handicap race, $C$ has covered $60$ m. Then $A$ is more than $1.5$ times as fast as $C$.`,
      `In a $100$ m race $A$ beats $B$ by $20$ m. When $A$ has run $100$ m, $B$ has covered more than three-quarters of the race.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

When $A$ runs $100$ m, $B$ has $80$ m. When $B$ runs $100$ m, $C$ has $75$ m, so when $B$ runs $80$ m, $C$ runs $60$ m. Two-thirds of $100$ is about $66.7$, and $60 < 66.7$. The statement is True.`,
      `**B.** → False

$A : B = 100 : 80 = 5 : 4$, so $A$ is faster, not slower. The statement is False.`,
      `**C.** → False

$A$ beats $C$ by $40$ m in $100$ m, which is not more than $45$. The statement is False.`,
      `**D.** → True

$A : C = 100 : 60 = 5 : 3$. Then $\\frac{5}{3} > 1.5$. The statement is True.`,
      `**E.** → True

$B$ has $80$ m, and three-quarters of $100$ is $75$, so $80 > 75$. The statement is True.`,
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
      `A number has this property: if you subtract $3$ and divide by $4$, you get $2$ less than one-third of the number. Then the number is more than twice $7$.`,
      `A number plus $5$, all divided by $2$, equals $3$ less than the number. A student claims that one-third of that number is at least $4$.`,
      `A student checks the number $15$ in the relation “subtract $3$, divide by $4$, and you get $2$ less than one-third of the number”. Both sides of that relation equal a number smaller than $4$.`,
      `If you add $1$ to a number and divide by $5$, you get $3$ less than half the number. The unique real number with this property is greater than $12$.`,
      `To solve “subtract $3$ from a number, divide by $4$, and this equals $2$ less than one-third of the number”, a student multiplies through by $12$. The LCD of $4$ and $3$ is no larger than $12$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $12$: $3(x - 3) = 4x - 24$, so $x = 15$. Twice $7$ is $14$, and $15 > 14$. The statement is True.`,
      `**B.** → False

$$\\frac{x + 5}{2} = x - 3 \\quad \\Rightarrow \\quad x + 5 = 2x - 6 \\quad \\Rightarrow \\quad x = 11$$

One-third of $11$ is $\\frac{11}{3} \\approx 3.67$, which is not at least $4$. The statement is False.`,
      `**C.** → True

Left: $\\frac{12}{4} = 3$. Right: $5 - 2 = 3$. Both sides equal $3$, which is smaller than $4$. The statement is True.`,
      `**D.** → False

Multiply through by $10$: $2(x + 1) = 5x - 30$, so $2x + 2 = 5x - 30$ and $x = \\frac{32}{3} \\approx 10.67$, which is not greater than $12$. The statement is False.`,
      `**E.** → True

The denominators $4$ and $3$ have LCD $12$, so the LCD is no larger than $12$. The statement is True.`,
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
      `A square has area $49$ cm$^{2}$. Then each side is more than $6$ cm.`,
      `A number times itself equals $16$. There is only one real number that works, and it is more than $3$.`,
      `A number times itself equals $36$. One number that works is more than $6.5$.`,
      `If a square of side $x$ cm has area $9$ cm$^{2}$, then the only real possibility for $x$ is a number greater than $2$, with no negative root.`,
      `$5^{2} - 4^{2}$ is less than $8$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The area of a square is the side times itself. If the side is $s$ cm, then

$$s^{2} = 49$$

A length is positive, so $s = 7$, not $-7$. Check: $7 \\cdot 7 = 49$. Each side is $7$ cm, which is more than $6$, so the statement is True.`,
      `**B.** → False

$$x^{2} = 16$$

splits into two real numbers, because $(-4)^{2} = 16$ as well as $4^{2} = 16$. There is not only one real number that works. The statement is False.`,
      `**C.** → False

$$x^{2} = 36$$

has solutions $x = 6$ and $x = -6$. Neither is more than $6.5$: $7^{2} = 49$. The statement is False.`,
      `**D.** → False

A geometric side must be positive, so $x = 3$ is the side of that square. But the equation $x^{2} = 9$ as a number sentence also has $x = -3$. The claim rules out the negative root. The statement is False.`,
      `**E.** → False

$$5^{2} - 4^{2} = 25 - 16 = 9$$

Nine is not less than $8$. The statement is False.`,
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
      `The solutions of $(x - 2)(x - 5) = 0$ are both greater than $2.5$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has both solutions between $1$ and $4$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has solutions both larger than $5$.`,
      `If a product of two real numbers is zero, then at least one of those numbers is zero.`,
      `The equation $x^{2} = 5x$ has only the solution greater than $4$.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

A product is zero only when at least one factor is zero.

$$x - 2 = 0 \\quad \\text{or} \\quad x - 5 = 0$$

so $x = 2$ or $x = 5$, and $2$ is not greater than $2.5$. At $x = 3$: $(1)(-2) = -2 \\neq 0$. The statement is False.`,
      `**B.** → True

Factor the left side.

$$x^{2} - 5x + 6 = (x - 2)(x - 3)$$

The roots are $2$ and $3$, both between $1$ and $4$. Check: $2 + 3 = 5$ and $2 \\cdot 3 = 6$, which match the coefficients. The statement is True.`,
      `**C.** → False

$1$ and $6$ add to $7$ and multiply to $6$. The equation needs sum $5$ and product $6$. Those are $2$ and $3$, neither larger than $5$. Plugging $x = 1$ gives $1 - 5 + 6 = 2$, not $0$. The statement is False.`,
      `**D.** → True

That is the zero-product property: $ab = 0$ if and only if $a = 0$ or $b = 0$ (or both). It is why factoring solves a quadratic. The statement is True.`,
      `**E.** → False

Bring every term to one side before dividing. Dividing by $x$ would throw away the root $x = 0$.

$$x^{2} - 5x = 0$$

$$x(x - 5) = 0$$

so $x = 0$ or $x = 5$. The claim keeps only the root greater than $4$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 30,
    solution_overview: `Five independent claims about factoring. Move everything to one side, factor, then set each factor to zero. Do not divide away a possible $x = 0$.`,
  },
  {
    id: `math-4-31`,
    case_id: `MATH 4.31`,
    title: `Consecutive integers whose product is $12$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square has area $64$ m$^{2}$. Then its side is more than $7$ m.`,
      `Two consecutive integers multiply to $12$. The smaller positive one is more than twice $1$.`,
      `Two consecutive integers multiply to $12$. The pair $2$ and $6$ is not consecutive.`,
      `A rectangle is $1$ cm longer than it is wide and has area $12$ cm$^{2}$. Then the width is less than $4$ cm.`,
      `A rectangle $1$ cm longer than it is wide with area $12$ cm$^{2}$ has longer side more than $3$ cm.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$s^{2} = 64 \\Rightarrow s = 8$$

because a length is positive. Check: $8 \\cdot 8 = 64$. Eight is more than $7$. The statement is True.`,
      `**B.** → True

Let the smaller integer be $n$. Then

$$n(n + 1) = 12$$

$$n^{2} + n - 12 = 0$$

$$(n + 4)(n - 3) = 0$$

so $n = 3$ or $n = -4$. The smaller positive is $3$, and $3 > 2$. The statement is True.`,
      `**C.** → True

$2$ and $6$ are not consecutive, even though $2 \\cdot 6 = 12$. Consecutive integers differ by $1$. The statement is True.`,
      `**D.** → True

Let the width be $x$ cm. Then the length is $x + 1$, and the area is $12$.

$$x(x + 1) = 12$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

The positive width is $x = 3$, which is less than $4$. Then the length is $4$, and $3 \\cdot 4 = 12$. The statement is True.`,
      `**E.** → True

The longer side is $3 + 1 = 4$ cm, which is more than $3$. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 31,
    solution_overview: `Five independent square and consecutive-integer stories. A product of consecutive integers is $n(n + 1)$, which is a quadratic. Keep the positive root when the unknown is a length.`,
  },
  {
    id: `math-4-32`,
    case_id: `MATH 4.32`,
    title: `A repeated root and a discriminant of zero`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{2} - 4x = 0$ means $x$ is $0$ or greater than $4.5$.`,
      `A number squared, minus four times the number, is zero. Zero itself is not allowed.`,
      `The discriminant of $x^{2} - 4x + 4$ is more than $2$.`,
      `The equation $x^{2} - 4x + 4 = 0$ has two distinct real roots.`,
      `The equation $(x - 2)^{2} = 0$ has a solution greater than $1$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

$$x(x - 4) = 0$$

so $x = 0$ or $x = 4$. Four is not greater than $4.5$. Five would solve $x(x - 5) = 0$, not this equation. The statement is False.`,
      `**B.** → False

That is the same equation. $x = 0$ gives $0 - 0 = 0$. Zero is a genuine solution, not a discarded extra. The statement is False.`,
      `**C.** → False

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$.

$$\\Delta = (-4)^{2} - 4\\cdot 1\\cdot 4 = 16 - 16 = 0$$

Zero is not more than $2$. The statement is False.`,
      `**D.** → False

$\\Delta = 0$ means a repeated real root, not two distinct ones. The root is $x = 2$, twice. $(x - 2)^{2} = 0$ makes that visible. The statement is False.`,
      `**E.** → True

A square is zero only at zero, so $x - 2 = 0$ and $x = 2 > 1$. Check: $(2 - 2)^{2} = 0$. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 32,
    solution_overview: `Five independent claims about $x^{2} - 4x$ and the perfect square $x^{2} - 4x + 4$. Discriminant zero means one repeated real root, not two different ones.`,
  },
  {
    id: `math-4-33`,
    case_id: `MATH 4.33`,
    title: `Sum and product of the roots $2$ and $5$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} - 7x + 10 = 0$, the sum of the roots is more than $6$.`,
      `For $x^{2} - 7x + 10 = 0$, the product of the roots is more than $9$.`,
      `The smaller root of $x^{2} - 7x + 10 = 0$ is at least $3$.`,
      `The larger root of $x^{2} - 7x + 10 = 0$ is more than $5.5$.`,
      `Both roots of $x^{2} - 7x + 10 = 0$ are greater than $4$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Vieta's formulas for $x^{2} + px + q = 0$ written as $x^{2} - (\\text{sum})x + (\\text{product}) = 0$ give sum $7$ here. You can also add the roots once you have them: $2 + 5 = 7 > 6$. The statement is True.`,
      `**B.** → True

The constant term of a monic quadratic is the product of the roots: $2 \\cdot 5 = 10 > 9$. The statement is True.`,
      `**C.** → False

Factor: $(x - 2)(x - 5) = x^{2} - 7x + 10$. The roots are $2$ and $5$. Two is not at least $3$. Those $3$ and $4$ would belong to $x^{2} - 7x + 12 = 0$. The statement is False.`,
      `**D.** → False

The larger root is $5$, which is not more than $5.5$. Six would belong to a sum of $8$ with the other root $2$. The statement is False.`,
      `**E.** → False

$5 > 4$, but $2$ is not greater than $4$. Both roots positive is true; both greater than $4$ is not. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 33,
    solution_overview: `Five independent claims about $x^{2} - 7x + 10 = 0$. For $x^{2} - Sx + P = 0$ the sum of roots is $S$ and the product is $P$. The roots here are $2$ and $5$.`,
  },
  {
    id: `math-4-34`,
    case_id: `MATH 4.34`,
    title: `A quadratic with roots $2$ and $-3$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $x^{2} + x - 6 = 0$ has a positive root more than $2.5$.`,
      `The negative root of $x^{2} + x - 6 = 0$ is greater than $-2.5$.`,
      `The discriminant of $x^{2} + x - 6$ is less than $20$.`,
      `That equation has more than one real solution.`,
      `That equation has no real solution.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

$$x^{2} + x - 6 = (x + 3)(x - 2)$$

The roots are $-3$ and $2$. The positive one is $2$, which is not more than $2.5$. Check of $3$: $9 + 3 - 6 = 6$, not $0$. The statement is False.`,
      `**B.** → False

The negative root is $-3$, which is not greater than $-2.5$. Check of $-2$: $4 - 2 - 6 = -4$, not $0$. The statement is False.`,
      `**C.** → False

$$\\Delta = 1^{2} - 4(1)(-6) = 1 + 24 = 25$$

Twenty-five is not less than $20$. The statement is False.`,
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
    title: `A rectangle $2$ cm longer than it is wide, area $48$`,
    subsection: `4.2`,
    context: `A rectangle is $2$ cm longer than it is wide, and its area is $48$ cm$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The longer side is more than $7$ cm.`,
      `The shorter side is more than two-thirds of the longer side.`,
      `The perimeter is more than $25$ cm.`,
      `If the longer side were $10$ cm with the same shorter side, the area would still be less than $50$ cm$^{2}$.`,
      `The two sides differ by $2$ cm.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $x$ cm. Then the length is $x + 2$, and the area is $48$.

$$x(x + 2) = 48$$

$$x^{2} + 2x - 48 = 0$$

$$(x + 8)(x - 6) = 0$$

The positive width is $6$, so the longer side is $8$ cm, which is more than $7$. Check: $6 \\cdot 8 = 48$. The statement is True.`,
      `**B.** → True

The positive root of that quadratic is $x = 6$. Two-thirds of $8$ is $\\frac{16}{3} \\approx 5.33$, and $6 > 5.33$. The statement is True.`,
      `**C.** → True

$$P = 2(6 + 8) = 28 > 25$$

The statement is True.`,
      `**D.** → False

Keeping width $6$ and stretching the length to $10$ gives area $60$, which is not less than $50$. The statement is False.`,
      `**E.** → True

That is the opening relation: length is $2$ cm more than width, so the sides differ by $2$ cm. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 35,
    solution_overview: `One rectangle, five checks. Width $x$, length $x + 2$, area $48$ gives $x^{2} + 2x - 48 = 0$. The positive solution is $x = 6$, so the sides are $6$ cm and $8$ cm.`,
  },
  {
    id: `math-4-36`,
    case_id: `MATH 4.36`,
    title: `Two consecutive integers whose product is $56$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two consecutive integers multiply to $56$. The smaller positive one is more than $6$.`,
      `The larger of that positive pair is more than $1.1$ times the smaller.`,
      `There is also a negative pair, $-8$ and $-7$.`,
      `The integers $6$ and $9$ multiply to $54$, not $56$.`,
      `The positive pair adds to more than $14$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$n(n + 1) = 56$$

$$n^{2} + n - 56 = 0$$

$$(n + 8)(n - 7) = 0$$

The positive smaller integer is $7 > 6$, and $7 \\cdot 8 = 56$. The statement is True.`,
      `**B.** → True

The next integer after $7$ is $8$, and $8 > 1.1 \\cdot 7 = 7.7$. The statement is True.`,
      `**C.** → True

The other root is $n = -8$, so the pair is $-8$ and $-7$, and $(-8)\\cdot(-7) = 56$. The statement is True.`,
      `**D.** → True

$6 \\cdot 9 = 54$, not $56$, and those two are not consecutive. The statement is True.`,
      `**E.** → True

$7 + 8 = 15 > 14$. The statement is True.`,
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
    context: `A rectangle has area $60$ cm$^{2}$, and its length is $7$ cm more than its width. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is more than $4$ cm.`,
      `The length is less than $11.5$ cm.`,
      `The perimeter is at least $38$ cm.`,
      `The diagonal is more than $12$ cm.`,
      `The width is at least $6$ cm.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $w + 7$.

$$w(w + 7) = 60$$

$$w^{2} + 7w - 60 = 0$$

$$\\Delta = 49 + 240 = 289 = 17^{2}$$

$$w = \\frac{-7 \\pm 17}{2}$$

The positive value is $w = 5$, which is more than $4$. Check: $5 \\cdot 12 = 60$. The statement is True.`,
      `**B.** → False

Length $5 + 7 = 12$ cm, which is not less than $11.5$. Eleven with width $5$ would give area $55$, not $60$. The statement is False.`,
      `**C.** → False

$$P = 2(5 + 12) = 34$$

Thirty-four is not at least $38$. The statement is False.`,
      `**D.** → True

$$d^{2} = 5^{2} + 12^{2} = 25 + 144 = 169$$

so $d = 13 > 12$. This is the $5$-$12$-$13$ triple. The statement is True.`,
      `**E.** → False

Width $6$ would give length $13$ and area $78$, not $60$. The recovered width is $5$ cm, which is not at least $6$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 37,
    solution_overview: `One rectangle: area $60$, length $7$ more than width. The quadratic $w^{2} + 7w - 60 = 0$ has positive root $5$, so the sides are $5$ cm and $12$ cm, a $5$-$12$-$13$ right triangle on the diagonal.`,
  },
  {
    id: `math-4-38`,
    case_id: `MATH 4.38`,
    title: `A $3$-$4$-$5$ triangle from Pythagoras`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The positive root of $x^{2} - 2x - 15 = 0$ is more than $5.5$.`,
      `A right triangle has legs $x$ cm and $x + 1$ cm and hypotenuse $5$ cm. Then the shorter leg is less than two-thirds of the hypotenuse.`,
      `That triangle is equilateral.`,
      `The area of that triangle is more than $10$ cm$^{2}$.`,
      `The longer leg is more than $3.5$ cm.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A.** → False

$$x^{2} - 2x - 15 = (x - 5)(x + 3)$$

The roots are $5$ and $-3$. The positive one is $5$, which is not more than $5.5$. Six would solve $x^{2} - 2x - 24 = 0$. The statement is False.`,
      `**B.** → True

Pythagoras gives

$$x^{2} + (x + 1)^{2} = 25$$

$$2x^{2} + 2x + 1 = 25$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

The positive leg is $x = 3$. Two-thirds of $5$ is $\\frac{10}{3} \\approx 3.33$, and $3 < 3.33$. The other leg is $4$, and $3^{2} + 4^{2} = 25$. The statement is True.`,
      `**C.** → False

The sides are $3$, $4$, and $5$, three different lengths. An equilateral triangle would need all three equal. The statement is False.`,
      `**D.** → False

Area is half the product of the legs:

$$\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$$

Six is not more than $10$. The claim $12$ is the product without the half. The statement is False.`,
      `**E.** → True

The legs are $3$ and $4$, so the longer leg is $4$ cm, which is more than $3.5$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 38,
    solution_overview: `Five independent claims. One is a factored quadratic. The others turn Pythagoras $x^{2} + (x + 1)^{2} = 25$ into $x^{2} + x - 12 = 0$, giving the $3$-$4$-$5$ triangle.`,
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
      `Those two roots of $x^{2} + 4x + 3 = 0$ are both less than $0$.`,
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

$(x + 1)(x + 3) = x^{2} + 4x + 3$. The roots are $-1$ and $-3$, both less than $0$. The statement is True.`,
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
      `Two numbers add to $10$ and multiply to $21$. The smaller is at least $4$.`,
      `Those two numbers are the roots of $t^{2} - 10t + 24 = 0$.`,
      `Both numbers are larger than $4$.`,
      `Their difference is more than $3$.`,
      `Each of them is negative.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

$4 + 6 = 10$, but $4 \\cdot 6 = 24$, not $21$. The pair with product $21$ is $3$ and $7$. Three is not at least $4$. The statement is False.`,
      `**B.** → False

Numbers that add to $10$ and multiply to $21$ are the roots of $t^{2} - 10t + 21 = 0$, because

$$(t - 3)(t - 7) = t^{2} - 10t + 21.$$

The claimed equation is $t^{2} - 10t + 24 = 0$, whose constant term is $24$, not $21$. That one factors as $(t - 4)(t - 6)$, so its roots are $4$ and $6$. Those add to $10$ as well, but they multiply to $24$. The statement is False.`,
      `**C.** → False

$7 > 4$, but $3$ is not larger than $4$. Both numbers larger than $4$ would need a product larger than $16$ with sum $10$ in a different pair, such as $4$ and $6$. The statement is False.`,
      `**D.** → True

$$7 - 3 = 4 > 3$$

The two numbers differ by more than $3$. The statement is True.`,
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
      `Completing the square turns $x^{2} - \\frac{7}{2}x - 2 = 0$ into $\\left(x - \\frac{7}{4}\\right)^{2}$ equal to a right-hand side more than $5$.`,
      `Both real roots of $x^{2} - 6x + 5 = 0$ are greater than $3$.`,
      `Both real roots of $x^{2} - \\frac{7}{2}x - 2 = 0$ are at least $0$.`,
      `The positive root of $x^{2} - \\frac{7}{2}x - 2 = 0$ is more than twice $1.5$.`,
      `The product of the roots of $x^{2} - \\frac{7}{2}x - 2 = 0$ is greater than $0$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Half of $\\frac{7}{2}$ is $\\frac{7}{4}$. Adding $\\frac{49}{16}$ produces $\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16} = 5.0625$, which is more than $5$. The statement is True.`,
      `**B.** → False

$x^{2} - 6x + 5 = (x - 1)(x - 5)$, so the roots are $1$ and $5$. One of them is not greater than $3$. The statement is False.`,
      `**C.** → False

The roots are $4$ and $-\\frac{1}{2}$. The negative root is not at least $0$. The statement is False.`,
      `**D.** → True

$x - \\frac{7}{4} = \\pm \\frac{9}{4}$ gives $x = 4$ or $x = -\\frac{1}{2}$. The positive root is $4$, and $4 > 3$. The statement is True.`,
      `**E.** → False

The product is $-2$, which is not greater than $0$. Check: $4 \\cdot \\left(-\\frac{1}{2}\\right) = -2$. The statement is False.`,
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
      `A $24$ cm by $16$ cm picture is surrounded by a uniform frame. The outer area is twice the picture. Then the frame is more than $3$ cm wide.`,
      `A $30$ cm by $20$ cm picture with a uniform $2$ cm frame all round has outer length more than $1.5$ times the inner $20$ cm width.`,
      `A $24$ cm by $16$ cm picture with a $4$ cm frame has outer area more than $1.9$ times the picture.`,
      `The wood in a $4$ cm frame around a $24$ by $16$ picture has area more than $400$ cm$^{2}$.`,
      `A $4$ cm frame around a $24$ by $16$ picture has wood area at least as large as the picture, which is what twice the picture required of the outer area.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$(24 + 2x)(16 + 2x) = 768$ becomes $x^{2} + 20x - 96 = 0$. The positive root is $x = 4$, and $4 > 3$. The statement is True.`,
      `**B.** → True

The frame adds $4$ cm in each direction, so the outer length is $34$ cm. Then $1.5 \\cdot 20 = 30$, and $34 > 30$. The statement is True.`,
      `**C.** → True

$32 \\cdot 24 = 768$, and the picture is $384$, so the ratio is $2$, which is more than $1.9$. The statement is True.`,
      `**D.** → False

Wood is $768 - 384 = 384$ cm$^{2}$, which is not more than $400$. The statement is False.`,
      `**E.** → True

$384$ cm$^{2}$ of wood equals the picture, so the wood is at least as large as the picture. The statement is True.`,
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
      `Two positive integers differ by $7$ and multiply to $198$. The smaller is more than half the larger.`,
      `Two negative integers also multiply to $198$ and differ by $7$ in that order from more negative to less: the more negative is less than $-15$.`,
      `The positive pair with difference $7$ and product $198$ adds to more than twice $14$.`,
      `The discriminant of $n^{2} + 7n - 198$ is a perfect square, and that square is more than $800$.`,
      `If $n$ is the smaller member of a pair with difference $7$ and product $198$, then $n(n + 7) = 198$ has more than one integer solution.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$n^{2} + 7n - 198 = 0$ has $\\Delta = 841 = 29^{2}$, so $n = 11$ or $n = -18$. The positive pair is $11$ and $18$, and $11 > 9$. The statement is True.`,
      `**B.** → True

$(-18)\\cdot(-11) = 198$ and $-11 - (-18) = 7$. The more negative is $-18$, and $-18 < -15$. The statement is True.`,
      `**C.** → True

$11 + 18 = 29$, and twice $14$ is $28$, so $29 > 28$. The statement is True.`,
      `**D.** → True

$\\Delta = 49 + 792 = 841 = 29^{2}$, and $841 > 800$. The statement is True.`,
      `**E.** → True

The two integer solutions are $n = 11$ and $n = -18$, so there is more than one. The statement is True.`,
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
      `A picture frame is $1$ cm longer than twice its width, and the area of the picture is $36$ cm$^{2}$. A student claims the width is at least $6$ cm.`,
      `A banner is twice as long as it is wide and has area $48$ cm$^{2}$. A student claims the length is more than $11$ cm.`,
      `A $4$ cm by $9$ cm noticeboard is to be edged with tape. The tape around the perimeter measures more than $30$ cm.`,
      `A carpenter cuts a board $5$ cm wide and $11$ cm long and claims the area is less than $40$ cm$^{2}$, with the length $1$ cm more than twice the width.`,
      `A garden bed has area $45$ cm$^{2}$ and is $4$ cm longer than it is wide. Then the width is more than $4$ cm and less than $6$ cm.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

$w(2w + 1) = 36$ gives $2w^{2} + w - 36 = 0$, so $w = 4$, which is not at least $6$. The statement is False.`,
      `**B.** → False

$w(2w) = 48$ gives $2w^{2} = 48$, so $w^{2} = 24$. Length $2w$ is $2\\sqrt{24} \\approx 9.8$, which is not more than $11$. If the length were $12$ cm then the width would be $6$ cm and the area $72$, not $48$. The statement is False.`,
      `**C.** → False

$P = 2(4 + 9) = 26$, which is not more than $30$. The statement is False.`,
      `**D.** → False

$5 \\cdot 11 = 55$, which is not less than $40$, and $11$ is not $1$ more than twice $5$. The statement is False.`,
      `**E.** → True

$w(w + 4) = 45$ gives $w^{2} + 4w - 45 = 0$, so $(w + 9)(w - 5) = 0$. The positive width is $5$ cm, which lies between $4$ and $6$. Check: $5 \\cdot 9 = 45$. The statement is True.`,
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
      `A stone thrown upward has height $h = 20t - 5t^{2}$ metres after $t$ seconds. After $1$ second the height is more than $12$ m.`,
      `That projectile reaches a maximum height of more than $18$ m.`,
      `The maximum occurs later than $2.5$ seconds.`,
      `The stone is back at ground level after fewer than $3.5$ seconds.`,
      `After $2$ seconds the height is more than $25$ m.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$h(1) = 20 - 5 = 15$, and $15 > 12$. The statement is True.`,
      `**B.** → True

$h = 20 - 5(t - 2)^{2}$, so the peak is $20$ m at $t = 2$, and $20 > 18$. The statement is True.`,
      `**C.** → False

The vertex is at $t = 2$, which is not later than $2.5$. The statement is False.`,
      `**D.** → False

$h = 0$ at $t = 0$ and $t = 4$. Four seconds is not fewer than $3.5$. The statement is False.`,
      `**E.** → False

$h(2) = 20$ m, the maximum, which is not more than $25$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Five independent projectile claims. $h = 20t - 5t^{2}$ peaks at $t = 2$ seconds and $h = 20$ m, and returns at $t = 4$.`,
  },
  {
    id: `math-4-46`,
    case_id: `MATH 4.46`,
    title: `Five separate Vieta sum-and-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two ticket prices add to $15$ EUR and multiply to $44$. The dearer ticket is more than twice the cheaper.`,
      `Two numbers add to $10$ and multiply to $21$. A clerk says they differ by more than $3$.`,
      `Two share amounts add to $9$ EUR and multiply to $14$. The smaller is at least $3$ EUR.`,
      `Two numbers add to $8$ and multiply to $15$. Increasing each by $1$ and multiplying those increased values gives more than $20$.`,
      `Two numbers add to $10$ and multiply to $21$. The sum of their squares is more than five times $10$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$t^{2} - 15t + 44 = 0$ has $\\Delta = 49$, so $t = 11$ or $t = 4$. Then $11 > 2 \\cdot 4$. The statement is True.`,
      `**B.** → True

$t^{2} - 10t + 21 = 0$ has roots $7$ and $3$, and $7 - 3 = 4 > 3$. The statement is True.`,
      `**C.** → False

$3 + 6 = 9$ but $3 \\cdot 6 = 18$, not $14$. The pair with sum $9$ and product $14$ is $2$ and $7$. Two is not at least $3$. The statement is False.`,
      `**D.** → True

$(x + 1)(y + 1) = xy + x + y + 1 = 15 + 8 + 1 = 24$, and $24 > 20$. The statement is True.`,
      `**E.** → True

$x^{2} + y^{2} = (x + y)^{2} - 2xy = 100 - 42 = 58$, and $5 \\cdot 10 = 50$, so $58 > 50$. The statement is True.`,
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
      `A right triangle has legs $x$ cm and $x + 7$ cm and hypotenuse $13$ cm. The shorter leg is less than half the hypotenuse.`,
      `That triangle has longer leg at most $10$ cm.`,
      `The area of a $5$-$12$-$13$ triangle is more than twice $14$ cm$^{2}$.`,
      `The perimeter of a $5$-$12$-$13$ triangle is less than $29$ cm.`,
      `A right triangle with legs $5$ cm and $12$ cm has those two legs differing by less than $5$ cm.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

$x^{2} + (x + 7)^{2} = 169$ becomes $x^{2} + 7x - 60 = 0$, so $x = 5$. Half of $13$ is $6.5$, and $5 < 6.5$. The statement is True.`,
      `**B.** → False

The longer leg is $12$ cm, which is not at most $10$. The statement is False.`,
      `**C.** → True

$\\frac{1}{2} \\cdot 5 \\cdot 12 = 30$, and twice $14$ is $28$, so $30 > 28$. The statement is True.`,
      `**D.** → False

$5 + 12 + 13 = 30$, which is not less than $29$. The statement is False.`,
      `**E.** → False

The legs differ by $7$ cm, which is not less than $5$. The statement is False.`,
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
      `A rectangular courtyard has perimeter $40$ m and area $96$ m$^{2}$. The shorter side is at least two-thirds of the longer.`,
      `A square courtyard has perimeter $40$ m. A contractor claims its area is less than $98$ m$^{2}$.`,
      `A square courtyard has perimeter $40$ m. Then its area exceeds $96$ m$^{2}$.`,
      `Among all courtyards of perimeter $40$ m, a square of area $100$ m$^{2}$ has area more than $4\\%$ larger than a rectangle of area $96$ m$^{2}$.`,
      `A rectangular courtyard has perimeter $36$ m and area $80$ m$^{2}$. A plan claims the longer side is at least $12$ m.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$x(20 - x) = 96$ gives $x^{2} - 20x + 96 = 0$, so $x = 12$ or $x = 8$. Two-thirds of $12$ is $8$, so the shorter side is at least two-thirds of the longer. The statement is True.`,
      `**B.** → False

A square of perimeter $40$ m has side $10$ m and area $100$ m$^{2}$, which is not less than $98$. The statement is False.`,
      `**C.** → True

Side $10$ m, area $100$ m$^{2}$, and $100 > 96$. The statement is True.`,
      `**D.** → True

$\\frac{100}{96} \\approx 1.0417$, which is more than a $4\\%$ increase. The square maximises area for a fixed perimeter. The statement is True.`,
      `**E.** → False

Half-perimeter $18$ and area $80$ give $x(18 - x) = 80$, so $x^{2} - 18x + 80 = 0$. Then $x = 10$ or $x = 8$. The longer side is $10$ m, which is not at least $12$. The statement is False.`,
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
      `A parent is $24$ years older than a child, and the product of their present ages is $180$. The child is younger than $8$.`,
      `A parent is $24$ years older than a child, and the product of their present ages is $180$. Then the parent is more than four times the child.`,
      `A child of $6$ and a parent of $30$ will, in $4$ years, have ages whose product is more than $300$.`,
      `A parent is $24$ years older than a child. That age gap stays at least $20$ years as both grow older.`,
      `A parent aged $30$ and a child aged $6$ have present ages in a ratio greater than $4 : 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$s(s + 24) = 180$ gives $s = 6$, which is younger than $8$. The statement is True.`,
      `**B.** → True

$6 + 24 = 30$. Then $30 > 4 \\cdot 6$. Check: $6 \\cdot 30 = 180$. The statement is True.`,
      `**C.** → True

$10 \\cdot 34 = 340 > 300$. The statement is True.`,
      `**D.** → True

Both ages increase equally, so the gap stays $24$, which is at least $20$. The statement is True.`,
      `**E.** → True

$\\frac{30}{6} = 5 > 4$. The statement is True.`,
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
      `A $10$ m ladder leans against a wall. Its foot is $2$ m farther from the wall than the height it reaches. Then the top is more than half the ladder up the wall.`,
      `A $13$ m ladder leans against a warehouse wall and reaches $5$ m up. A worker claims the foot is less than $10$ m from the wall.`,
      `A $10$ m ladder reaches $6$ m up a wall. Then the foot sits farther from the wall than the height reached.`,
      `A ladder, the wall, and the ground form a right triangle with legs $6$ m and $8$ m. The area of that triangle is more than $20$ m$^{2}$.`,
      `A $13$ m ladder stands with its foot $12$ m from a wall. Then it reaches more than $7$ m up the wall.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$h^{2} + (h + 2)^{2} = 100$ becomes $h^{2} + 2h - 48 = 0$, so $h = 6$. Half of $10$ is $5$, and $6 > 5$. The statement is True.`,
      `**B.** → False

$5^{2} + b^{2} = 13^{2}$ gives $b^{2} = 144$, so $b = 12$, which is not less than $10$. The statement is False.`,
      `**C.** → True

$6^{2} + 8^{2} = 36 + 64 = 100$. The foot is $8$ m from the wall, and $8 > 6$. The statement is True.`,
      `**D.** → True

$\\frac{1}{2} \\cdot 6 \\cdot 8 = 24 > 20$. The statement is True.`,
      `**E.** → False

$12^{2} + h^{2} = 13^{2}$ gives $h^{2} = 25$, so $h = 5$, which is not more than $7$. The statement is False.`,
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
      `A nonzero number satisfies $x + \\frac{1}{x} = 4$. Then $x^{2} + \\frac{1}{x^{2}}$ is at least $15$.`,
      `If $x + \\frac{1}{x} = 4$, then $x^{2} + \\frac{1}{x^{2}}$ is more than $13$.`,
      `Clearing $x + \\frac{1}{x} = 4$ produces a quadratic whose constant term is less than $2$.`,
      `If $x + \\frac{1}{x} = 4$, then $x^{3} + \\frac{1}{x^{3}}$ is more than $60$.`,
      `One solution of $x + \\frac{1}{x} = 4$ is greater than $3.5$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Squaring gives $x^{2} + 2 + \\frac{1}{x^{2}} = 16$, so $x^{2} + \\frac{1}{x^{2}} = 14$, which is not at least $15$. The statement is False.`,
      `**B.** → True

That identity gives $14$, and $14 > 13$. The statement is True.`,
      `**C.** → True

Multiply by $x$: $x^{2} + 1 = 4x$, so $x^{2} - 4x + 1 = 0$. The constant term is $1$, which is less than $2$. The statement is True.`,
      `**D.** → False

$x^{3} + \\frac{1}{x^{3}} = 4 \\cdot 14 - 4 = 52$, which is not more than $60$. The statement is False.`,
      `**E.** → True

$x = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$. Then $2 + \\sqrt{3} \\approx 3.73 > 3.5$. The statement is True.`,
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
      `The equation $x^{4} - 5x^{2} + 4 = 0$ has more than three distinct real roots.`,
      `The largest root of $x^{4} - 5x^{2} + 4 = 0$ is more than $1.5$ times the next positive root.`,
      `The product of all four roots of $x^{4} - 5x^{2} + 4 = 0$ is more than $3$.`,
      `The sum of all four roots of $x^{4} - 5x^{2} + 4 = 0$ is less than $1$.`,
      `Every root of $x^{4} - 5x^{2} + 4 = 0$ is at least $0$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Put $u = x^{2}$. Then $(u - 4)(u - 1) = 0$, so $x^{2} = 4$ or $x^{2} = 1$, four distinct real $x$, which is more than three. The statement is True.`,
      `**B.** → True

The positive roots are $2$ and $1$, and $2 > 1.5 \\cdot 1$. The statement is True.`,
      `**C.** → True

The constant term of $x^{4} + \\cdots + 4$ is the product of the roots. Check: $(1)(-1)(2)(-2) = 4 > 3$. The statement is True.`,
      `**D.** → True

No $x^{3}$ term, so the sum of roots is $0$, which is less than $1$. The statement is True.`,
      `**E.** → False

Two of the four roots are negative, so not every root is at least $0$. The statement is False.`,
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
      `A rectangle is $14$ cm longer than it is wide, and its area is $240$ cm$^{2}$. The width is more than one-third of the length.`,
      `That rectangle has length more than twice the width.`,
      `The diagonal of a $10$ cm by $24$ cm rectangle is more than $25$ cm.`,
      `The perimeter of a $10$ cm by $24$ cm rectangle is less than $65$ cm.`,
      `The area check $10 \\cdot 24$ is more than $20$ times the width $10$ cm.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$w(w + 14) = 240$ gives $w = 10$. The length is $24$, and $\\frac{1}{3} \\cdot 24 = 8$, so $10 > 8$. The statement is True.`,
      `**B.** → True

Length $10 + 14 = 24$ cm, and $24 > 2 \\cdot 10$. The statement is True.`,
      `**C.** → True

$10^{2} + 24^{2} = 676 = 26^{2}$, the $5$-$12$-$13$ triple scaled by $2$. Then $26 > 25$. The statement is True.`,
      `**D.** → False

$P = 2(10 + 24) = 68$, which is not less than $65$. The statement is False.`,
      `**E.** → True

$10 \\cdot 24 = 240$, and $20 \\cdot 10 = 200$, so $240 > 200$. The statement is True.`,
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
      `Two workers finish a job together in $4$ hours. One of them, working alone, is $6$ hours slower than the other. Then the faster worker alone takes less than $7$ hours.`,
      `That slower worker alone takes more than twice $5$ hours.`,
      `The faster of those two workers alone takes at least $8$ hours.`,
      `Two pipes fill a tank together in $6$ hours. In $3$ hours together they fill at least $40\\%$ of the tank.`,
      `Two workers who finish a job together in $4$ hours have combined rate more than $\\frac{1}{5}$ of a job per hour.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$\\frac{1}{t} + \\frac{1}{t + 6} = \\frac{1}{4}$ becomes $t^{2} - 2t - 24 = 0$, so $t = 6$, which is less than $7$. The statement is True.`,
      `**B.** → True

$6 + 6 = 12$. Twice $5$ is $10$, and $12 > 10$. Check: $\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$. The statement is True.`,
      `**C.** → False

The faster worker takes $6$ hours, which is not at least $8$. Eight hours would force $14$ for the slower, and $\\frac{1}{8} + \\frac{1}{14} \\neq \\frac{1}{4}$. The statement is False.`,
      `**D.** → True

Together they fill $\\frac{1}{6}$ of the tank per hour, so three hours is $\\frac{1}{2}$, which is at least $40\\%$. The statement is True.`,
      `**E.** → True

One job in $4$ hours is $\\frac{1}{4}$ per hour, and $\\frac{1}{4} > \\frac{1}{5}$. The statement is True.`,
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
      `The equation $x + \\frac{6}{x} = 5$, with $x \\neq 0$, has fewer than two real solutions.`,
      `The two real solutions of $x + \\frac{6}{x} = 5$ both lie between $1$ and $4$.`,
      `Clearing $x + \\frac{6}{x} = 5$ produces a quadratic whose linear coefficient has absolute value more than $4$.`,
      `The product of the two solutions of $x + \\frac{6}{x} = 5$ is less than $5.5$.`,
      `The sum of the two solutions of $x + \\frac{6}{x} = 5$ is more than twice $2$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

$x^{2} - 5x + 6 = 0$ factors as $(x - 2)(x - 3) = 0$. Both $2$ and $3$ work, so there are not fewer than two real solutions. The statement is False.`,
      `**B.** → True

Those two roots $2$ and $3$ both lie between $1$ and $4$. The statement is True.`,
      `**C.** → True

Multiply by $x$: $x^{2} + 6 = 5x$, so $x^{2} - 5x + 6 = 0$. The linear coefficient is $-5$, and $\\lvert -5 \\rvert > 4$. The statement is True.`,
      `**D.** → False

The product is $6$, which is not less than $5.5$. Five is the sum. The statement is False.`,
      `**E.** → True

Vieta: the sum of the roots of $x^{2} - 5x + 6 = 0$ is $5$, and $5 > 4$. The statement is True.`,
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
      `The equation $x^{4} - 13x^{2} + 36 = 0$ has largest root more than $2.5$.`,
      `The equation $(x - 3)(x - 5) = 8$ has larger root more than six times the smaller.`,
      `The equation $x^{2} + x + 1 = 0$ has more than one real root.`,
      `Two numbers that add to $9$ and multiply to $14$ have smaller member at least $3$.`,
      `The equation $2x^{2} - 3x - 2 = 0$ has discriminant more than $20$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Put $u = x^{2}$. Then $(u - 4)(u - 9) = 0$, so $x = \\pm 2, \\pm 3$. The largest is $3 > 2.5$. The statement is True.`,
      `**B.** → True

$x^{2} - 8x + 7 = 0$, $(x - 1)(x - 7) = 0$. Then $7 > 6 \\cdot 1$. Check: $(-2)(-4) = 8$ and $4 \\cdot 2 = 8$. The statement is True.`,
      `**C.** → False

$\\Delta = 1 - 4 = -3 < 0$. No real roots, so not more than one. The statement is False.`,
      `**D.** → False

$3 + 6 = 9$ but $3 \\cdot 6 = 18$, not $14$. The pair is $2$ and $7$, and $2$ is not at least $3$. The statement is False.`,
      `**E.** → True

$\\Delta = 9 + 16 = 25 > 20$. Roots $2$ and $-\\frac{1}{2}$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 56,
    solution_overview: `Five independent quadratics: a biquadratic in $x^{2}$, a rearranged product equal to $8$, a negative discriminant, a Vieta trap, and $2x^{2} - 3x - 2 = 0$.`,
  },
  {
    id: `math-4-57`,
    case_id: `MATH 4.57`,
    title: `Three over a number equals one fourth`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Three litres of oil, poured as equal shares, fill a jerrycan if each share is one-fourth of the jerrycan. Then the jerrycan holds more than $10$ litres.`,
      `The equation $\\frac{3}{x} = \\frac{1}{4}$ is undefined at $x = 0$.`,
      `The equation $\\frac{3}{x} = \\frac{1}{4}$ has solution smaller than $4$.`,
      `Check: $\\frac{3}{12}$ is equal to one-fourth.`,
      `The number $-12$ also solves $\\frac{3}{x} = \\frac{1}{4}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Each share is $\\frac{1}{4}$ of the jerrycan, and three shares make the whole fill, so four shares would be the full capacity.

$$\\frac{3}{x} = \\frac{1}{4} \\quad \\Rightarrow \\quad x = 12$$

Twelve litres is more than $10$. The statement is True.`,
      `**B.** → True

The left side has denominator $x$. At $x = 0$ you would divide by zero. That value is not allowed. The statement is True.`,
      `**C.** → False

At $x = 3$ you get $\\frac{3}{3} = 1$, not $\\frac{1}{4}$. The recovered capacity is $12$ litres, which is not smaller than $4$. The statement is False.`,
      `**D.** → True

$\\frac{3}{12}$ reduces to $\\frac{1}{4}$. The check confirms $x = 12$. The statement is True.`,
      `**E.** → False

$\\frac{3}{-12} = -\\frac{1}{4}$, not $\\frac{1}{4}$. Signs must match. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 57,
    solution_overview: `Five independent claims about the rational equation $\\frac{3}{x} = \\frac{1}{4}$. Cross-multiply after excluding $x = 0$. The solution is $x = 12$.`,
  },
  {
    id: `math-4-58`,
    case_id: `MATH 4.58`,
    title: `A number over two more than the number`,
    subsection: `4.3`,
    context: `A number, divided by $2$ more than the number, equals $\\frac{1}{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `That number is more than $0$ and less than $2$.`,
      `The fraction is undefined when the number is $-2$.`,
      `The number $4$ also gives the ratio $\\frac{1}{3}$.`,
      `You may cross-multiply even at $x = -2$.`,
      `The number that works is at least $3$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x + 2} = \\frac{1}{3}$$

with $x \\neq -2$. Then $3x = x + 2$, so $2x = 2$ and $x = 1$, which lies between $0$ and $2$. Check: $\\frac{1}{3} = \\frac{1}{3}$. The statement is True.`,
      `**B.** → True

The denominator $x + 2$ vanishes at $x = -2$. The original fraction is not defined there. The statement is True.`,
      `**C.** → False

$\\frac{4}{6} = \\frac{2}{3}$, not $\\frac{1}{3}$. The statement is False.`,
      `**D.** → False

Cross-multiplying assumes the denominators are not zero. At $x = -2$ the original equation is undefined, so that step is not allowed. The statement is False.`,
      `**E.** → False

At $x = 3$ the fraction is $\\frac{3}{5}$, not $\\frac{1}{3}$. The recovered value is $1$, which is not at least $3$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 58,
    solution_overview: `One rational equation $\\frac{x}{x + 2} = \\frac{1}{3}$. Exclude $x = -2$, then cross-multiply. The solution is $x = 1$.`,
  },
  {
    id: `math-4-59`,
    case_id: `MATH 4.59`,
    title: `A hole in the domain is never a root`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\frac{1}{x - 2} = \\frac{3}{x - 2}$ has no solution.`,
      `$x = 2$ is a solution of that equation.`,
      `The equation $\\frac{5}{x + 1} = \\frac{5}{x + 1}$ holds at $x = -1$ as well.`,
      `The equation $\\frac{2}{x} = 0$ has a real solution at $x = 0$.`,
      `The equation $\\frac{6}{x} = 2$ has solution smaller than $2.5$.`,
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

Three is not smaller than $2.5$. Check: $\\frac{6}{3} = 2$, while $\\frac{6}{2} = 3$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 59,
    solution_overview: `Five independent rational equations. A value that zeros a denominator is never a solution. Equal fractions with a common denominator require equal numerators, and only where the denominator is allowed.`,
  },
  {
    id: `math-4-60`,
    case_id: `MATH 4.60`,
    title: `A square bed after 3 extra square metres`,
    subsection: `4.3`,
    context: `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. Let $x$ be the original area in square metres, so $\\sqrt{x + 3} = 4$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The new area is more than $15$ m$^{2}$.`,
      `The original area was more than $12$ m$^{2}$.`,
      `The original side was $\\sqrt{13}$ m.`,
      `The equation $\\sqrt{x + 3} = 4$ has solution more than $10$.`,
      `The original area was at least $18$ m$^{2}$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A square of side $4$ m has area $16$ m$^{2}$, which is more than $15$. That is the bed after the extra soil. The statement is True.`,
      `**B.** → True

Original area $x$ satisfies $\\sqrt{x + 3} = 4$, so $x + 3 = 16$ and $x = 13 > 12$. The statement is True.`,
      `**C.** → True

The original area is $13$ m$^{2}$, so the original side is $\\sqrt{13}$ m. The statement is True.`,
      `**D.** → True

Squaring is safe here because both sides are nonnegative. Then $x = 13 > 10$. Check: $\\sqrt{16} = 4$. The statement is True.`,
      `**E.** → False

Nineteen would be $16 + 3$, adding the extra soil instead of removing it. The original area is $13$ m$^{2}$, which is not at least $18$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 60,
    solution_overview: `One radical equation $\\sqrt{x + 3} = 4$ for a square bed. Squaring gives $x = 13$. The new side is $4$ m, the old side is $\\sqrt{13}$ m.`,
  },
  {
    id: `math-4-61`,
    case_id: `MATH 4.61`,
    title: `Five units from 3 on the number line`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number $5$ units from $3$ on the number line is more than $7$ or less than $-1$.`,
      `The equation $\\lvert x - 3 \\rvert = 5$ has both of those solutions.`,
      `The only number $5$ units from $3$ is greater than $7$.`,
      `The equation $\\lvert x \\rvert = 0$ has fewer than one real solution.`,
      `The equation $\\lvert x \\rvert = -2$ has more than one real solution.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Five units right of $3$ is $8 > 7$. Five units left is $-2 < -1$. The statement is True.`,
      `**B.** → True

$\\lvert x - 3 \\rvert = 5$ means $x - 3 = 5$ or $x - 3 = -5$, so $x = 8$ or $x = -2$. The statement is True.`,
      `**C.** → False

Distance does not pick a side. The point $-2$ is just as far from $3$ as $8$ is, so it is not the only such number. The statement is False.`,
      `**D.** → False

$\\lvert 0 \\rvert = 0$, so $x = 0$ is the unique solution, not fewer than one. The statement is False.`,
      `**E.** → False

Absolute value is never negative. $\\lvert x \\rvert = -2$ has no real solution, so not more than one. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 61,
    solution_overview: `Five independent claims about $\\lvert x - a \\rvert = b$. For $b > 0$ there are two points. A negative right-hand side is impossible. Zero is allowed: $\\lvert x \\rvert = 0$ has $x = 0$.`,
  },
  {
    id: `math-4-62`,
    case_id: `MATH 4.62`,
    title: `Five over one less than a number equals 1`,
    subsection: `4.3`,
    context: `Five kilograms of flour, packed into bags of one kilogram less than a certain number of kilograms, fill exactly one such bag-count. In symbols $\\frac{5}{x - 1} = 1$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `That number of kilograms is more than $5$.`,
      `The denominator forbids $x = 1$.`,
      `Check: $\\frac{5}{5} = 1$.`,
      `Each bag then holds more than $4$ kg.`,
      `Clearing the denominator gives $5 = x - 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{5}{x - 1} = 1, \\quad x \\neq 1$$

so $5 = x - 1$ and $x = 6 > 5$. The statement is True.`,
      `**B.** → True

At $x = 1$ the left side is undefined. The statement is True.`,
      `**C.** → True

Bags of $6 - 1 = 5$ kg: $\\frac{5}{5} = 1$. The statement is True.`,
      `**D.** → True

One less than $6$ is $5$ kg per bag, which is more than $4$. The statement is True.`,
      `**E.** → True

Multiplying through by $x - 1$ (allowed because it is not zero at the solution) yields $5 = x - 1$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 62,
    solution_overview: `One rational equation $\\frac{5}{x - 1} = 1$. Exclude $x = 1$, then $x = 6$. All five checks follow from that root.`,
  },
  {
    id: `math-4-63`,
    case_id: `MATH 4.63`,
    title: `A square of side 5 m, area 7 more than a number`,
    subsection: `4.3`,
    context: `A square courtyard has side $5$ m. Its area is $7$ m$^{2}$ more than a number $x$ of square metres, so $\\sqrt{x + 7} = 5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `That number is more than $15$.`,
      `The courtyard has area more than $20$ m$^{2}$.`,
      `The equation $\\sqrt{x + 7} = 5$ has solution more than $16$.`,
      `The number is less than $0$.`,
      `After squaring, $x + 7$ equals a square greater than $20$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\sqrt{x + 7} = 5 \\quad \\Rightarrow \\quad x + 7 = 25 \\quad \\Rightarrow \\quad x = 18 > 15$$

Check: $\\sqrt{25} = 5$. The statement is True.`,
      `**B.** → True

Side $5$ m gives area $25$ m$^{2}$, which is more than $20$. The statement is True.`,
      `**C.** → True

That is the same radical equation, and $x = 18 > 16$ checks. The statement is True.`,
      `**D.** → False

The recovered number is $18$, which is not less than $0$. Negative eighteen would make $x + 7 = -11$, which cannot equal $25$ and cannot be a square of $5$. The statement is False.`,
      `**E.** → True

Both sides of $\\sqrt{x + 7} = 5$ are nonnegative, so squaring is valid and yields $x + 7 = 25 > 20$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 63,
    solution_overview: `One radical equation $\\sqrt{x + 7} = 5$ from a $5$ m square. Squaring recovers $x = 18$.`,
  },
  {
    id: `math-4-64`,
    case_id: `MATH 4.64`,
    title: `The square root of four times a number plus 5 is 7`,
    subsection: `4.3`,
    context: `A surveyor's reading satisfies $\\sqrt{4x + 5} = 7$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number is more than $10$.`,
      `Squaring both sides gives $4x + 5 = 49$.`,
      `The number is less than $8$.`,
      `Check: $\\sqrt{44 + 5} = \\sqrt{49} = 7$.`,
      `The equation $\\sqrt{4x + 5} = -7$ has the same real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$4x + 5 = 49 \\quad \\Rightarrow \\quad 4x = 44 \\quad \\Rightarrow \\quad x = 11 > 10$$

The statement is True.`,
      `**B.** → True

The right-hand side $7$ is nonnegative, so squaring is allowed. The statement is True.`,
      `**C.** → False

At $x = 6$ you get $\\sqrt{24 + 5} = \\sqrt{29}$, not $7$. The recovered value is $11$, which is not less than $8$. The statement is False.`,
      `**D.** → True

$4 \\cdot 11 + 5 = 49$, and $\\sqrt{49} = 7$. The statement is True.`,
      `**E.** → False

A principal square root is never negative. $\\sqrt{4x + 5} = -7$ has no real solution, even though squaring would again give $x = 11$. That extra candidate fails the original. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 64,
    solution_overview: `One radical equation $\\sqrt{4x + 5} = 7$. Squaring yields $x = 11$. The same square with a negative right-hand side has no real root.`,
  },
  {
    id: `math-4-65`,
    case_id: `MATH 4.65`,
    title: `Twice a reading, four away, error 6`,
    subsection: `4.3`,
    context: `A gauge should show twice a true reading $x$. The absolute error from $4$ is $6$: $\\lvert 2x - 4 \\rvert = 6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The true reading is $5$ or $-1$.`,
      `Both possible readings are positive.`,
      `$2x - 4$ can only equal $6$, never $-6$.`,
      `If the true reading is $2$, the equation holds.`,
      `The distance from $2x$ to $4$ is less than $5$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$2x - 4 = 6 \\quad \\text{or} \\quad 2x - 4 = -6$$

so $x = 5$ or $x = -1$. Check: $\\lvert 10 - 4 \\rvert = 6$ and $\\lvert -2 - 4 \\rvert = 6$. The statement is True.`,
      `**B.** → False

$5$ is positive, but $-1$ is not. The statement is False.`,
      `**C.** → False

Absolute value $6$ means the inside is $6$ or $-6$. Both cases are required. The statement is False.`,
      `**D.** → False

At $x = 2$ the inside is $0$, and $\\lvert 0 \\rvert = 0$, not $6$. The statement is False.`,
      `**E.** → False

The equation says that distance is $6$, which is not less than $5$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `One absolute-value equation $\\lvert 2x - 4 \\rvert = 6$, which splits into $2x - 4 = \\pm 6$. The solutions are $x = 5$ and $x = -1$.`,
  },
  {
    id: `math-4-66`,
    case_id: `MATH 4.66`,
    title: `Five separate rational equations, each with a hole`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number of cups of flour, divided by one cup less than that number, equals three. After the value that zeros the denominator is excluded, the baker uses more than $1$ cup but less than $2$ cups.`,
      `The equation $\\frac{1}{x - 2} = \\frac{3}{x - 2}$ looks as if it might hold for every $x$, but it has fewer than one real solution: at $x = 2$ both sides are undefined, and for every other $x$ it demands $1 = 3$.`,
      `A baker uses a number of cups of flour that, divided by four cups less than that number, equals two. Then the baker uses more than twice $3$ cups, and the ratio is undefined if the flour is exactly $4$ cups.`,
      `Twice a volume in litres, divided by that volume, equals three litres divided by three more than the volume. After excluding $0$ and $-3$, the volume is more than $5$ litres, and both sides of the original equal $\\frac{1}{3}$.`,
      `Three more than a number, divided by three less than the number, equals $2$. The number is more than twice $4$. The value $3$ is not a solution, because it zeros the denominator.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x - 1} = 3, \\quad x \\neq 1$$

gives $x = 3x - 3$, so $2x = 3$ and $x = \\frac{3}{2}$. Check: $\\frac{3/2}{1/2} = 3$. The hole $x = 1$ is not this value, and $1 < \\frac{3}{2} < 2$. The statement is True.`,
      `**B.** → True

If $x \\neq 2$, the two sides share a nonzero denominator, so the claim is $1 = 3$, which is never true. If $x = 2$, both sides are undefined. No solution exists, so there are fewer than one. The statement is True.`,
      `**C.** → True

$$\\frac{x}{x - 4} = 2, \\quad x \\neq 4$$

gives $x = 2x - 8$, so $x = 8$. Twice $3$ is $6$, and $8 > 6$. Check: $\\frac{8}{4} = 2$. At $4$ cups the original ratio is undefined. The statement is True.`,
      `**D.** → True

$$\\frac{2}{x} = \\frac{3}{x + 3}, \\quad x \\neq 0,\\ x \\neq -3$$

clears to $2(x + 3) = 3x$, so $x = 6 > 5$. Both sides equal $\\frac{1}{3}$. The statement is True.`,
      `**E.** → True

$$\\frac{x + 3}{x - 3} = 2, \\quad x \\neq 3$$

gives $x + 3 = 2x - 6$, so $x = 9$. Twice $4$ is $8$, and $9 > 8$. Check: $\\frac{12}{6} = 2$. At $x = 3$ you divide by zero. The statement is True.`,
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
      `The side of a square bed, after $5$ extra square metres of soil, plus the side of a smaller square whose area is $3$ m$^{2}$ less than the first, equals $4$ m. In symbols $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$, and the larger area is less than $5$ m$^{2}$.`,
      `A surveyor records $\\sqrt{4x + 5} = 7$. After squaring, $4x + 5 = 49$, so $x$ is more than $10$, and the check $\\sqrt{49} = 7$ holds.`,
      `A gardener writes $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$ and claims the larger area is at least $7$ m$^{2}$. That value satisfies the squared form but not the original sum of roots.`,
      `The radical equation $\\sqrt{x + 3} = 4$ is solved by a number smaller than $2$, because squaring would give $x + 3 = 16$ and someone then subtracted $16$ instead of $3$.`,
      `After isolating and squaring $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$, the candidate $x = 4$ returns a sum of roots more than $3.5$ and therefore survives in the original.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let $a = \\sqrt{x + 5}$ and $b = \\sqrt{x - 3}$. Then $a + b = 4$ and $a^{2} - b^{2} = 8$, so $(a - b)(a + b) = 8$ and $a - b = 2$. Hence $a = 3$, $b = 1$, and $x - 3 = 1$, so $x = 4$. The larger area is $4$ m$^{2}$, which is less than $5$. The statement is True.`,
      `**B.** → True

The right-hand side $7$ is nonnegative, so squaring is valid: $4x + 5 = 49$, $x = 11 > 10$. Check: $\\sqrt{44 + 5} = \\sqrt{49} = 7$. The statement is True.`,
      `**C.** → False

The recovered area is $4$ m$^{2}$, which is not at least $7$. At $x = 8$: $\\sqrt{13} + \\sqrt{5} \\approx 5.8$, not $4$. The statement is False.`,
      `**D.** → False

$$\\sqrt{x + 3} = 4 \\quad \\Rightarrow \\quad x + 3 = 16 \\quad \\Rightarrow \\quad x = 13$$

Thirteen is not smaller than $2$. At $x = 0$ one gets $\\sqrt{3}$, not $4$. The statement is False.`,
      `**E.** → True

Direct substitution: $\\sqrt{9} + \\sqrt{1} = 3 + 1 = 4 > 3.5$. Both roots are defined. The statement is True.`,
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
      `A stored temperature is $6^{\\circ}\\mathrm{C}$ away from $4^{\\circ}\\mathrm{C}$, so $\\lvert x - 4 \\rvert = 6$. One of the two possible readings is more than $8^{\\circ}\\mathrm{C}$.`,
      `A machine part is specified at $50$ mm. The inspector flags pieces whose length $x$ satisfies $\\lvert x - 50 \\rvert = 3$. The two boundary lengths differ by more than $5$ mm.`,
      `The equation $\\lvert 2x - 5 \\rvert = \\lvert x + 4 \\rvert$ has fewer than two real solutions, because equal distances from two moving points can occur on just one side.`,
      `A gauge error satisfies $\\lvert 3x - 6 \\rvert = 9$. Splitting into $3x - 6 = 9$ and $3x - 6 = -9$ produces one solution greater than $4$ and one negative solution, and both check in the original.`,
      `The equation $\\lvert x \\rvert = -4$ has fewer than one real solution, because an absolute value cannot equal a negative number.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$x - 4 = 6$ or $x - 4 = -6$, so $x = 10$ or $x = -2$. Ten degrees is more than $8$. The statement is True.`,
      `**B.** → True

$x - 50 = \\pm 3$, so $x = 53$ or $x = 47$. Then $53 - 47 = 6 > 5$. The statement is True.`,
      `**C.** → False

Equal absolute values mean $2x - 5 = x + 4$ or $2x - 5 = -(x + 4)$. The first case is $x = 9$. The second is $3x = 1$, so $x = \\frac{1}{3}$. Two distinct real solutions, not fewer than two. The statement is False.`,
      `**D.** → True

$3x = 15$ or $3x = -3$, so $x = 5 > 4$ or $x = -1$. Checks: $\\lvert 15 - 6 \\rvert = 9$ and $\\lvert -3 - 6 \\rvert = 9$. The statement is True.`,
      `**E.** → True

By definition $\\lvert x \\rvert \\ge 0$ for every real $x$. A negative right-hand side is impossible, so there are fewer than one real solution. The statement is True.`,
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
      `A number equals one more than the square root of twice the number plus one: $\\sqrt{2x + 1} = x - 1$. The value $x = 4$ makes that square root more than $2$.`,
      `The candidate $x = 0$ also solves $\\sqrt{2x + 1} = x - 1$, since squaring produces $x(x - 4) = 0$ and zero is one of those roots.`,
      `Squaring $\\sqrt{2x + 1} = x - 1$, after requiring $x \\ge 1$ so that the right-hand side is nonnegative, does produce a quadratic with a root at $0$ and a root more than $3$.`,
      `Both roots of $x(x - 4) = 0$ solve $\\sqrt{2x + 1} = x - 1$, so no extra root appears.`,
      `Because a principal square root cannot equal a negative number, $\\sqrt{2x + 1} = x - 1$ has fewer than two real solutions.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

At $x = 4$, both $2x + 1 \\ge 0$ and $x - 1 \\ge 0$. Then $\\sqrt{9} = 3 > 2$. The statement is True.`,
      `**B.** → False

At $x = 0$ the right-hand side is $-1$, which cannot equal a square root. Zero is an extra root of the squared equation only. The statement is False.`,
      `**C.** → True

Squaring: $2x + 1 = (x - 1)^{2} = x^{2} - 2x + 1$, so $0 = x^{2} - 4x = x(x - 4)$. The roots are $0$ and $4 > 3$. The statement is True.`,
      `**D.** → False

Only $x = 4$ survives the check $x \\ge 1$ in the original. The statement is False.`,
      `**E.** → True

After discarding $x = 0$, one real solution remains, so there are fewer than two. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `Five independent checks around radical equations. Squaring $\\sqrt{2x + 1} = x - 1$ produces an extra root $x = 0$ that fails $x \\ge 1$.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `Five distance-on-a-line claims`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A depot on a straight road is to be $8$ km from post $1$ plus $8$ km from post $5$, in the sense $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$. One of the two possible sites lies west of kilometre $0$, and the other lies east of kilometre $6$.`,
      `The two sites that solve $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$ are more than $7$ km apart from each other.`,
      `The midpoint kilometre $3$ solves $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$, because that point is equally far from both posts.`,
      `The equation $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$ has more than one real solution, one on each outer ray, and none between the posts.`,
      `Every point between kilometre $1$ and kilometre $5$ solves $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$, because the sum of distances to the two posts is constant on that interval.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

For $x < 1$: $6 - 2x = 8$ gives $x = -1$, west of $0$. For $x > 5$: $2x - 6 = 8$ gives $x = 7$, east of $6$. Between the posts the left side equals $4$, not $8$. The statement is True.`,
      `**B.** → True

$$7 - (-1) = 8 > 7$$

The statement is True.`,
      `**C.** → False

At $x = 3$ the sum of distances is $4$, not $8$. Equal distance from the two posts would be $\\lvert x - 1 \\rvert = \\lvert x - 5 \\rvert$, a different equation. The statement is False.`,
      `**D.** → True

One root on each outer ray and none in the middle, so more than one real solution. The statement is True.`,
      `**E.** → False

On $[1, 5]$ the sum is constantly $4$, never $8$. The statement is False.`,
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
      `A number over three less than the number equals six more than the number over one less than the number. After excluding $x = 3$ and $x = 1$, the solution is more than $4$ and less than $5$.`,
      `The proportion $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ is undefined at $x = 1$ and at $x = 3$, because each of those values zeros one of the two denominators.`,
      `$x = 3$ is nevertheless a root of $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$, because cross-multiplying produces an identity at that point.`,
      `At $x = \\frac{9}{2}$ both sides of $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ equal a number greater than $2.5$, which confirms the recovered value.`,
      `Cross-multiplying $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$ is valid at $x = \\frac{9}{2}$, because that value is more than three times $1$ and so zeros neither denominator.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Exclude $1$ and $3$, then $x(x - 1) = (x + 6)(x - 3)$, so $x^{2} - x = x^{2} + 3x - 18$ and $x = \\frac{9}{2}$, which lies between $4$ and $5$. The statement is True.`,
      `**B.** → True

Those two values make a denominator zero. The statement is True.`,
      `**C.** → False

At $x = 3$ the left side is undefined. Cross-multiplying assumes both denominators are nonzero. The statement is False.`,
      `**D.** → True

$\\frac{9/2}{9/2 - 3} = 3$ and $\\frac{9/2 + 6}{9/2 - 1} = 3$, and $3 > 2.5$. The statement is True.`,
      `**E.** → True

$\\frac{9}{2} = 4.5 > 3$, so it is neither $1$ nor $3$. The statement is True.`,
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
      `A number plus one, all over the number, plus the number over one more than the number, equals $\\frac{5}{2}$. One solution is smaller than $1.5$.`,
      `The reciprocal sum $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ is also solved by a number less than $-1$, and substituting $-2$ returns $\\frac{1}{2} + 2 = \\frac{5}{2}$.`,
      `The equation $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ is undefined at $x = 0$ and at $x = -1$.`,
      `Both $x = 1$ and $x = -2$ lie in the domain of that reciprocal sum and satisfy the original.`,
      `Clearing that reciprocal sum produces a quadratic of degree $2$ whose roots are exactly those two values.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Clearing $x(x + 1)$ yields $2\\bigl((x + 1)^{2} + x^{2}\\bigr) = 5x(x + 1)$, so $x^{2} + x - 2 = 0$ and $x = 1$ or $x = -2$. At $x = 1$: $2 + \\frac{1}{2} = \\frac{5}{2}$, and $1 < 1.5$. The statement is True.`,
      `**B.** → True

At $x = -2$: $\\frac{-1}{-2} + \\frac{-2}{-1} = \\frac{5}{2}$, and $-2 < -1$. The statement is True.`,
      `**C.** → True

Those two values zero a denominator. The statement is True.`,
      `**D.** → True

Neither root is $0$ or $-1$, and both checks succeed. The statement is True.`,
      `**E.** → True

$(x + 2)(x - 1) = x^{2} + x - 2$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `Five independent claims about the reciprocal sum $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$. It clears to $x^{2} + x - 2 = 0$, and both roots survive.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `Five claims on principal roots and impossible right-hand sides`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Both candidates obtained by squaring $\\sqrt{x - 1} = 2 - x$ lie in $[1, 2]$ and so solve the original equation.`,
      `The equation $\\sqrt{x - 1} = 2 - x$ has more than one real solution, one for each sign that squaring introduces.`,
      `The larger quadratic candidate $x = \\frac{5 + \\sqrt{5}}{2}$ solves $\\sqrt{x - 1} = 2 - x$, even though $2 - x$ is then negative.`,
      `When solving $\\sqrt{x - 1} = 2 - x$ you may skip the condition $2 - x \\ge 0$, because squaring removes the sign anyway.`,
      `Exactly one real solution of $\\sqrt{x - 1} = 2 - x$ survives, namely the candidate that lies in $[1, 2]$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Domain: $x \\ge 1$ and $2 - x \\ge 0$, so $1 \\le x \\le 2$. Squaring gives $x^{2} - 5x + 5 = 0$. Only $\\frac{5 - \\sqrt{5}}{2} \\approx 1.38$ lies in that interval. The statement is False.`,
      `**B.** → False

Only one of the two quadratic roots survives. The statement is False.`,
      `**C.** → False

$\\frac{5 + \\sqrt{5}}{2} > 2$, so $2 - x < 0$ and cannot equal a principal square root. The statement is False.`,
      `**D.** → False

A principal square root is never negative. The condition $2 - x \\ge 0$ is what kills the larger candidate. The statement is False.`,
      `**E.** → True

The smaller root $\\frac{5 - \\sqrt{5}}{2}$ lies in $[1, 2]$ and checks after a valid squaring. The statement is True.`,
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
      `A surveyor records that the square root of a distance plus $12$ m, minus the square root of the distance itself, equals $2$ m. Then the distance is more than $3$ m and less than $5$ m.`,
      `After isolating $\\sqrt{x + 12} = 2 + \\sqrt{x}$ and squaring, the inner square root at the recovered distance is more than $1.5$.`,
      `The isolate-and-square process for $\\sqrt{x + 12} - \\sqrt{x} = 2$ produces a distance of at least $8$ m.`,
      `After squaring $\\sqrt{x + 12} = 2 + \\sqrt{x}$ once, you may stop without substituting back into the original, because the isolated right-hand side is automatically nonnegative.`,
      `The distance $x = 0$ also solves $\\sqrt{x + 12} - \\sqrt{x} = 2$, since $\\sqrt{12}$ is more than $3$ and therefore near enough to $2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Isolate $\\sqrt{x + 12} = 2 + \\sqrt{x}$ and square: $x + 12 = 4 + 4\\sqrt{x} + x$, so $\\sqrt{x} = 2$ and $x = 4$, which lies between $3$ and $5$. Check: $\\sqrt{16} - \\sqrt{4} = 2$. The statement is True.`,
      `**B.** → True

After squaring one obtains $\\sqrt{x} = 2 > 1.5$. The statement is True.`,
      `**C.** → False

The recovered distance is $4$ m, which is not at least $8$. At $x = 9$: $\\sqrt{21} - 3 \\approx 1.58$, not $2$. The statement is False.`,
      `**D.** → False

Squaring can still introduce extras. The candidate must be substituted back. The statement is False.`,
      `**E.** → False

At $x = 0$: $\\sqrt{12} \\neq 2$. Being more than $3$ does not make it equal to $2$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `Five independent isolate-and-square claims. $\\sqrt{x + 12} - \\sqrt{x} = 2$ recovers $x = 4$ after one squaring and a check.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `Five further radical isolations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The square root of a length plus $8$ m, plus the square root of the length itself, equals $6$ m. Then the length is more than $5$ m.`,
      `At the recovered length for $\\sqrt{x + 8} + \\sqrt{x} = 6$, the inner square root $\\sqrt{x}$ is more than $2$.`,
      `The same sum of roots equals $6$ when the length is more than $8$ m, because $\\sqrt{9} = 3$ and $3 + 3 = 6$.`,
      `Isolating $\\sqrt{x + 8} = 6 - \\sqrt{x}$ requires $6 - \\sqrt{x} \\ge 0$, otherwise the isolated side could not be a principal square root.`,
      `The length $x = 4$ m also solves $\\sqrt{x + 8} + \\sqrt{x} = 6$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Isolate and square: $x + 8 = 36 - 12\\sqrt{x} + x$, so $\\sqrt{x} = \\frac{7}{3}$ and $x = \\frac{49}{9} \\approx 5.44 > 5$. Check: $\\sqrt{\\frac{121}{9}} + \\frac{7}{3} = 6$. The statement is True.`,
      `**B.** → True

$\\frac{7}{3} \\approx 2.33 > 2$. The statement is True.`,
      `**C.** → False

The recovered length is $\\frac{49}{9} \\approx 5.44$, which is not more than $8$. At $x = 9$: $\\sqrt{17} + 3 \\approx 7.1$, not $6$. The trap $3 + 3 = 6$ pretends the other root is also $\\sqrt{9}$. The statement is False.`,
      `**D.** → True

A principal square root is nonnegative, so the isolated right-hand side must be as well. The statement is True.`,
      `**E.** → False

At $x = 4$: $\\sqrt{12} + 2 \\approx 5.46$, not $6$. The statement is False.`,
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
      `A gauge should match a reading $x$, but the recorded error satisfies $\\lvert 3 - 2x \\rvert = x + 1$. Then $x = 4$ makes both sides more than $4$.`,
      `The error equation $\\lvert 3 - 2x \\rvert = x + 1$ is also solved by $x = -2$, even though the right-hand side would then be negative.`,
      `Splitting $\\lvert 3 - 2x \\rvert = x + 1$ after requiring $x \\ge -1$ produces another solution less than $1$, and $\\lvert 3 - \\frac{4}{3} \\rvert = \\frac{5}{3}$ checks.`,
      `The equation $\\lvert 3 - 2x \\rvert = x + 1$ has fewer than two real solutions.`,
      `Every candidate of that split that already meets $x \\ge -1$ survives in the original absolute-value equation.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Need $x + 1 \\ge 0$. Then $3 - 2x = -(x + 1)$ gives $x = 4$. Check: $\\lvert 3 - 8 \\rvert = 5$ and $4 + 1 = 5$, both more than $4$. The statement is True.`,
      `**B.** → False

At $x = -2$ the right-hand side is $-1 < 0$, impossible for an absolute value. The statement is False.`,
      `**C.** → True

$3 - 2x = x + 1$ gives $x = \\frac{2}{3} < 1$, and $\\frac{2}{3} \\ge -1$. Check: $\\lvert \\frac{5}{3} \\rvert = \\frac{5}{3}$. The statement is True.`,
      `**D.** → False

Two solutions, $\\frac{2}{3}$ and $4$, so not fewer than two. The statement is False.`,
      `**E.** → True

Both case-split candidates that satisfy $x \\ge -1$ check in the original. The statement is True.`,
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
      `The difference of two reciprocals $\\frac{1}{x - 1} - \\frac{1}{x + 1}$ equals $\\frac{1}{4}$. After excluding $x = \\pm 1$, both solutions have absolute value more than $2$, and both check.`,
      `Both $x = 1$ and $x = 6$ solve $\\sqrt{x + 3} = x - 3$, because squaring produces $(x - 1)(x - 6) = 0$.`,
      `A depot equally far, in absolute value, from $-2$ and from $\\frac{7}{2}$ in the scaled sense $\\lvert x + 2 \\rvert = \\lvert 2x - 7 \\rvert$ sits at a site more than $8$ or at a site less than $2$.`,
      `The equation $\\sqrt{4 - x} = -2$ has a real solution smaller than $1$, because squaring both sides gives $4 - x = 4$.`,
      `The simplified identity $\\frac{x^{2} - 4}{x - 2} = x$ holds at $x = 2$, which is therefore a root.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

LCD $x^{2} - 1$: $2 = \\frac{x^{2} - 1}{4}$, so $x^{2} = 9$ and $x = \\pm 3$. Both have absolute value $3 > 2$. Check of $3$: $\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. Check of $-3$: $-\\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4}$. The statement is True.`,
      `**B.** → False

Need $x \\ge 3$. Squaring gives $x = 1$ or $x = 6$, but $x = 1$ makes the right-hand side $-2$. Only $x = 6$ survives. The statement is False.`,
      `**C.** → True

$x + 2 = 2x - 7$ gives $x = 9 > 8$. And $x + 2 = 7 - 2x$ gives $x = \\frac{5}{3} < 2$. Both check. The statement is True.`,
      `**D.** → False

A principal square root is never negative. Squaring gives the extra $x = 0$, and $\\sqrt{4} = 2 \\neq -2$. No real solution, so not a solution smaller than $1$. The statement is False.`,
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
      `Twice a number plus one, over the number minus one, minus the number plus three over the number plus one, equals $1$. After excluding $\\pm 1$, the solution is less than $-4$.`,
      `That difference of rational expressions is undefined at $x = 1$ and at $x = -1$.`,
      `$x = 1$ is a solution of $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$, because the two subtracted fractions become infinite in a way that cancels.`,
      `Substituting $x = -5$ into that difference makes the left-hand side equal a number no larger than $1$, matching the right-hand side.`,
      `When that difference is cleared by $(x - 1)(x + 1)$, the $x^{2}$ terms cancel and the remaining equation has degree less than $2$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $(x - 1)(x + 1)$:

$$(2x + 1)(x + 1) - (x + 3)(x - 1) = x^{2} - 1$$

The $x^{2}$ terms cancel and leave $x = -5$, which is allowed and less than $-4$. The statement is True.`,
      `**B.** → True

Those two values zero a denominator. The statement is True.`,
      `**C.** → False

At $x = 1$ the first fraction is undefined. A hole is not a root. The statement is False.`,
      `**D.** → True

Left: $\\frac{-9}{-6} - \\frac{-2}{-4} = \\frac{3}{2} - \\frac{1}{2} = 1$, which is no larger than $1$. The statement is True.`,
      `**E.** → True

After expansion the quadratic terms on the two sides match and cancel, so a linear equation of degree $1$ remains. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `Five independent rational-difference claims. Clearing $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$ cancels $x^{2}$ and recovers $x = -5$.`,
  },
];
