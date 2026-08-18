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
      `The solution of $2x + 6 = 14$ is $x = 5$.`,
      `The equation $5x - 3 = 12$ has solution $x = 2$.`,
      `If $x - 7 = 2$, then $x = 9$.`,
      `The solution of $3(x + 1) = 12$ is $x = 4$.`,
      `The equation $4x = 0$ has no solution.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

$$2x + 6 = 14$$

$$2x = 8$$

$$x = 4$$

The claim says $x = 5$. That would give $2\\cdot 5 + 6 = 16$, not $14$. The solution is $4$, so the statement is False.`,
      `**B.** → False

$$5x - 3 = 12$$

$$5x = 15$$

$$x = 3$$

The claim says $x = 2$. That would give $5\\cdot 2 - 3 = 7$, which is not $12$. The recovered solution is $3$, so the statement is False.`,
      `**C.** → True

$$x - 7 = 2$$

$$x = 9$$

Check: $9 - 7 = 2$. The number that works is $9$, so the statement is True.`,
      `**D.** → False

$$3(x + 1) = 12$$

$$3x + 3 = 12$$

$$3x = 9$$

$$x = 3$$

The claim says $x = 4$. Check of $4$: $3(4 + 1) = 15$, not $12$. The solution is $3$, so the statement is False.`,
      `**E.** → False

$$4x = 0$$

$$x = 0$$

Zero is a perfectly good number, and $4\\cdot 0 = 0$. The equation has the unique solution $x = 0$, so the statement is False.`,
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
      `Starting from $x + 5 = 11$ and subtracting $5$ from both sides leaves $x = 6$.`,
      `The number that makes $7x = 21$ true is $4$.`,
      `Adding $8$ to both sides of $x - 8 = 10$ produces $x = 16$.`,
      `Dividing both sides of $6x = 30$ by $6$ gives $x = 4$.`,
      `The equation $x + 0 = 9$ is solved by $x = 9$.`,
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
      `A number increased by $4$ equals $11$. That number is $7$.`,
      `Three times a number equals $18$, so the number is $5$.`,
      `After $8$ is subtracted from a number, $13$ remains. The original number is $21$.`,
      `Half of a number is $9$, so the number itself is $18$.`,
      `A number decreased by $6$ equals $10$. The number is $4$.`,
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
      `The equation $2(x + 3) = 14$ has solution $x = 4$.`,
      `The equation $5(x - 2) = 20$ has solution $x = 6$.`,
      `The equation $3(2x + 1) = 21$ has solution $x = 4$.`,
      `Expanding $4(x - 5) = 12$ and solving gives $x = 8$.`,
      `The equation $(x + 3) + (x - 1) = 10$ has solution $x = 4$.`,
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
      `The solution of $\\dfrac{x}{4} = 5$ is $x = 20$.`,
      `Solving $\\dfrac{x}{3} + 2 = 6$ gives $x = 10$.`,
      `The equation $\\dfrac{2x}{5} = 6$ has solution $x = 12$.`,
      `If $\\dfrac{x + 1}{2} = 5$, then $x = 9$.`,
      `The equation $\\dfrac{3x}{2} = 9$ is solved by $x = 4$.`,
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
      `A rectangle has width $4$ cm and length $3$ cm more than the width. Its perimeter is $22$ cm.`,
      `If one side of a square is $6$ cm, the perimeter is $24$ cm.`,
      `A number that is $5$ more than twice $8$ is $21$.`,
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
      `The equation $2x + 3 = 3x - 5$ has solution $x = 8$.`,
      `The equation $5 - x = 2x + 8$ has solution $x = -1$.`,
      `The equation $4(x - 1) = 2(x + 5)$ has solution $x = 7$.`,
      `The equations $x + 3 = 10$ and $2x = 14$ have the same solution.`,
      `Collecting like terms in $7x - 2 - 3x = 10$ yields $4x = 12$, so $x = 3$.`,
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
      `The equation $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ has solution $x = 8$.`,
      `The equation $\\dfrac{x - 1}{3} = \\dfrac{x + 1}{5}$ has solution $x = 2$.`,
      `Clearing the denominator in $\\dfrac{2x}{3} = 8$ gives $x = 10$.`,
      `The equation $\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ has solution $x = 10$.`,
      `The solution of $\\dfrac{3x + 1}{4} = 4$ is $x = 5$.`,
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
      `If one side of a rectangle is $3$ cm longer than the other and the perimeter is $22$ cm, then the longer side is $7$ cm.`,
      `A car travels at an average speed of $60$ km/h and covers $90$ km. Then the trip took $2$ hours.`,
      `A cook has $2$ litres of $20\\%$ vinegar and mixes it with $2$ litres of water. The mixture is then $20\\%$ vinegar.`,
      `A prize of $9000$ EUR is split so that second place gets $50\\%$ of first place, and third place gets $50\\%$ of second place. Then second place is $3000$ EUR.`,
      `The solution of $2x + 1 = x + 8$ is larger than $10$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$2(x + x + 3) = 22 \\Rightarrow 2x + 3 = 11 \\Rightarrow x = 4$$

The longer side is $7$ cm. The statement is True.`,
      `**B.** → False

$$t = \\frac{90}{60} = 1.5$$

hours, not $2$. The statement is False.`,
      `**C.** → False

Acid $0.40$ litres in $4$ litres total is $10\\%$, not $20\\%$. Water dilutes the concentration. The statement is False.`,
      `**D.** → False

$$1.75a = 9000 \\Rightarrow a \\approx 5142.86$$, so second place is about $2571$ EUR, not $3000$. The statement is False.`,
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
      `The equation $x + 3 = x + 5$ has solution $x = 0$.`,
      `The equation $2(x + 4) = 2x + 8$ is true for every real number $x$.`,
      `The equation $-3x = 12$ has solution $x = 4$.`,
      `The equation $5x + 2 = 5x + 2$ has no solution.`,
      `The equation $x = x + 1$ is solved by $x = 0$.`,
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
    title: `Apples at 2 EUR and pears at 3 EUR`,
    subsection: `4.1`,
    context: `A stall sells apples at $2$ EUR per kilogram and pears at $3$ EUR per kilogram. A customer buys some kilograms of each and pays $21$ EUR in total. The mass of apples is $3$ kg more than the mass of pears. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The customer bought $3$ kg of pears.`,
      `The customer bought $6$ kg of apples.`,
      `Apples accounted for $12$ EUR of the bill.`,
      `If the customer had bought $1$ kg less of each fruit, the bill would have been $16$ EUR.`,
      `Pears made up one-third of the total mass purchased.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Let pears be $x$ kg. Then apples are $x + 3$.

$$2(x + 3) + 3x = 21 \\Rightarrow 5x = 15 \\Rightarrow x = 3$$

The statement is True.`,
      `**B.** → True

Apples are $3 + 3 = 6$ kg. The statement is True.`,
      `**C.** → True

$$6 \\cdot 2 = 12$$

euros from apples. The statement is True.`,
      `**D.** → True

Then $5$ kg of apples and $2$ kg of pears cost $10 + 6 = 16$ EUR. The statement is True.`,
      `**E.** → True

Pears are $3$ kg of $9$ kg total, which is one-third. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `One shopping story, five checks. Apples at $2$ EUR/kg, pears at $3$ EUR/kg, apples $3$ kg heavier than pears, bill $21$ EUR. That recovers $3$ kg of pears and $6$ kg of apples.`,
  },
  {
    id: `math-4-15`,
    case_id: `MATH 4.15`,
    title: `A discount, a raise, and a vat of juice`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After a $20\\%$ discount a jacket costs $64$ EUR. The original price was $80$ EUR.`,
      `A price is raised by $25\\%$ and then reduced by $25\\%$. The final price equals the original price.`,
      `$40\\%$ of a number, increased by $12$, gives $32$. The number is $40$.`,
      `A vat holds $8$ litres of juice that is $12\\%$ concentrate. After $2$ litres of water are added, the concentrate is $10\\%$.`,
      `A salary of $2400$ EUR is increased by $10\\%$ and then by a further $10\\%$. The new salary is $2640$ EUR.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$0.80p = 64 \\Rightarrow p = 80$$

Check: $20\\%$ of $80$ is $16$, and $80 - 16 = 64$. The statement is True.`,
      `**B.** → False

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original, not $100\\%$. The statement is False.`,
      `**C.** → False

$$0.40x + 12 = 32 \\Rightarrow x = 50$$

The claim says $40$. Forty would give $16 + 12 = 28$, not $32$. The number is $50$, so the statement is False.`,
      `**D.** → False

Concentrate $0.12 \\cdot 8 = 0.96$ litres in $10$ litres total is $9.6\\%$, not $10\\%$. The statement is False.`,
      `**E.** → False

$$2400 \\cdot 1.1 \\cdot 1.1 = 2400 \\cdot 1.21 = 2904$$

The claim says $2640$, which would be a single $10\\%$ raise. Two $10\\%$ raises are $2904$ EUR, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `Five independent percentage stories. A discount leaves the complementary share; successive percentage changes multiply; concentrate is an amount of solute that water does not increase.`,
  },
  {
    id: `math-4-16`,
    case_id: `MATH 4.16`,
    title: `Two cars, a boat, and two pipes`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Towns A and B are $180$ km apart. Two cars leave at the same instant toward each other, one at $50$ km/h and the other at $40$ km/h. They meet after $2$ hours.`,
      `The same two towns. A courier starts from A at $45$ km/h. After $1$ hour a second courier starts from B at $60$ km/h toward A. They meet $2$ hours after the second courier starts.`,
      `A boat goes $24$ km downstream in $2$ hours and returns the same $24$ km upstream in $3$ hours. The boat's speed in still water is $12$ km/h.`,
      `A cyclist rides to town at $15$ km/h and back at $10$ km/h. The one-way distance is $30$ km, so the round trip takes $4$ hours.`,
      `Pipe A alone fills a pool in $10$ hours and pipe B alone fills it in $15$ hours. Together they fill the pool in $6$ hours.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$t = \\frac{180}{90} = 2$$

In two hours they cover $100$ km and $80$ km. The statement is True.`,
      `**B.** → False

After one hour, $135$ km remains. They close at $105$ km/h, so $t = \\frac{135}{105} = \\frac{9}{7}$ hours, not $2$. The statement is False.`,
      `**C.** → False

Downstream $12$ km/h, upstream $8$ km/h. Still water is their average, $10$ km/h, not $12$. The statement is False.`,
      `**D.** → False

Outward $2$ hours, return $3$ hours, total $5$, not $4$. Averaging the speeds is the trap. The statement is False.`,
      `**E.** → True

$$\\frac{1}{10} + \\frac{1}{15} = \\frac{1}{6}$$

Together they fill the pool in $6$ hours. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Five independent motion and filling stories. Opposite cars add speeds; a delayed start leaves a remaining gap; still-water speed is the average of downstream and upstream.`,
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
    title: `A rectangle, a 4 pm car, and a 50% prize chain`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `If one side of a rectangle is $5$ cm longer than the other and the perimeter is $38$ cm, then the longer side is $12$ cm.`,
      `A car travels at an average speed of $72$ km/h. At $4$ pm it has travelled $180$ km. Then it started at $1{:}30$ pm.`,
      `A cook has $1.5$ litres of $12\\%$ vinegar and wants an $8\\%$ mixture. Then $0.75$ litres of water must be added.`,
      `A prize of $9150$ EUR is split so that second place gets $50\\%$ of first place, and third place gets $50\\%$ of second place. Then second place is $3000$ EUR.`,
      `The solution of $4(x - 3) = 2x + 10$ is larger than $10$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$2(x + x + 5) = 38 \\Rightarrow 2x + 5 = 19 \\Rightarrow x = 7$$

The longer side is $12$ cm. The statement is True.`,
      `**B.** → True

$$t = \\frac{180}{72} = 2.5$$

hours back from $4$ pm is $1{:}30$ pm. The statement is True.`,
      `**C.** → True

Acid $0.18$ litres. Then $\\frac{0.18}{1.5 + w} = 0.08$ gives $w = 0.75$. The statement is True.`,
      `**D.** → False

$$1.75a = 9150 \\Rightarrow a \\approx 5229$$, so second place is about $2614$ EUR, not $3000$. The statement is False.`,
      `**E.** → True

$$4x - 12 = 2x + 10 \\Rightarrow x = 11$$

Eleven is larger than ten. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent exam-style claims: a perimeter, a start time from average speed, a dilution to a target percentage, a $50\\%$ prize chain, and a comparison after solving.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Labour at 45 EUR an hour plus parts`,
    subsection: `4.1`,
    context: `A workshop bills $45$ EUR per hour of labour plus a fixed $80$ EUR for parts on every job. A second job uses the same parts charge but $2$ hours more labour than the first. The two jobs together come to $430$ EUR. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The first job used $2$ hours of labour.`,
      `The second job costs $260$ EUR.`,
      `Labour on the two jobs together costs $270$ EUR.`,
      `If both jobs had used $1$ hour less labour, the combined bill would have been $320$ EUR.`,
      `Parts accounted for more than one-third of the $430$ EUR.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$(45h + 80) + (45(h + 2) + 80) = 430 \\Rightarrow 90h + 250 = 430 \\Rightarrow h = 2$$

The statement is True.`,
      `**B.** → True

Second job: $4$ hours, $45 \\cdot 4 + 80 = 260$. The statement is True.`,
      `**C.** → True

Six labour hours cost $45 \\cdot 6 = 270$ EUR. The statement is True.`,
      `**D.** → False

Hours $1$ and $3$ with both parts charges: $125 + 215 = 340$ EUR, not $320$. The statement is False.`,
      `**E.** → True

Parts $160$ EUR, and $160 > \\frac{430}{3} \\approx 143$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `One workshop story, five checks. Labour at $45$ EUR/h plus $80$ EUR parts; the second job runs two hours longer; the two bills add to $430$ EUR.`,
  },
  {
    id: `math-4-20`,
    case_id: `MATH 4.20`,
    title: `Tea mix, a picture frame, and two-thirds of a journey`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A and B can finish a job in $12$ days and $18$ days respectively. They work together for $4$ days, then A finishes the rest alone. A still needs $5$ days after the joint period.`,
      `A merchant mixes $20$ kg of tea at $8$ EUR/kg with $30$ kg at $10$ EUR/kg. The mixture is worth $9.20$ EUR per kilogram.`,
      `A picture measures $30$ cm by $20$ cm. A frame $3$ cm wide runs all around it. The outer perimeter of the frame is $124$ cm.`,
      `A clock gains $2$ minutes per hour. After $6$ true hours it shows that $6$ hours and $20$ minutes have passed.`,
      `Two-thirds of a journey is $48$ km. The whole journey is $64$ km.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

Together $\\frac{5}{36}$ per day, so four days complete $\\frac{5}{9}$. Remaining $\\frac{4}{9}$ takes A $\\frac{16}{3}$ days, not $5$. The statement is False.`,
      `**B.** → True

$$\\frac{160 + 300}{50} = 9.20$$

The statement is True.`,
      `**C.** → True

Outer rectangle $36$ by $26$, perimeter $2 \\cdot 62 = 124$. The statement is True.`,
      `**D.** → False

$$2 \\cdot 6 = 12$$

minutes of extra time shown, so the clock reads $6$ hours and $12$ minutes, not $20$. The statement is False.`,
      `**E.** → False

$$48 \\cdot \\frac{3}{2} = 72$$

km for the whole journey, not $64$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Five independent stories: leftover work after a joint period, a weighted tea blend, a frame that adds to both dimensions, a clock that gains, and scaling a fraction of a journey up to the whole.`,
  },
  {
    id: `math-4-21`,
    case_id: `MATH 4.21`,
    title: `A leaky cistern, a mother and daughter, five workers leave`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A filling pipe can fill a cistern in $12$ hours, and a leak would empty the same full cistern in $20$ hours. With the pipe and the leak both open from empty, the cistern is full in $30$ hours.`,
      `A mother's present age is three times her daughter's. In $12$ years the mother will be twice as old as the daughter will be then. The daughter is now $12$ years old.`,
      `A man rows $18$ km downstream in $2$ hours and the same $18$ km upstream in $6$ hours. The speed of the current is $4$ km/h.`,
      `Fifteen workers finish a wall in $12$ days. After $4$ days of work, five workers leave. The remaining ten workers then need $12$ more days to finish.`,
      `A number is as much greater than $36$ as it is less than $58$. That number is $48$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The pipe adds $\\frac{1}{12}$ of the cistern per hour. The leak removes $\\frac{1}{20}$ per hour. With both open the net rate is the difference.

$$\\frac{1}{12} - \\frac{1}{20} = \\frac{5}{60} - \\frac{3}{60} = \\frac{2}{60} = \\frac{1}{30}$$

One-thirtieth of the cistern per hour means a full cistern in $30$ hours. Check: in $30$ hours the pipe would pour $\\frac{30}{12} = 2.5$ cisterns and the leak would dump $\\frac{30}{20} = 1.5$ cisterns, leaving $1$ cistern. The statement is True.`,
      `**B.** → True

Let the daughter's present age be $d$ years. Then the mother is $3d$ now. In twelve years the mother is twice the daughter.

$$3d + 12 = 2(d + 12)$$

$$3d + 12 = 2d + 24$$

$$d = 12$$

The daughter is $12$ and the mother is $36$. In twelve years they are $24$ and $48$, and $48 = 2 \\cdot 24$. The statement is True.`,
      `**C.** → False

Downstream speed is $\\frac{18}{2} = 9$ km/h. Upstream speed is $\\frac{18}{6} = 3$ km/h. The current is half the difference of those two, because it adds on the way down and subtracts on the way up.

$$\\text{current} = \\frac{9 - 3}{2} = 3$$

The claim says $4$ km/h. Still water is the average $\\frac{9 + 3}{2} = 6$, and $6 + 4$ would be $10$ downstream, which is not the $9$ we have. The current is $3$ km/h, so the statement is False.`,
      `**D.** → True

The wall is $15 \\cdot 12 = 180$ worker-days of work. After four days the fifteen workers have done $15 \\cdot 4 = 60$ worker-days, so $120$ remain. Ten workers then need

$$\\frac{120}{10} = 12$$

days. The remaining crew does finish in $12$ more days, so the statement is True.`,
      `**E.** → False

"As much greater than $36$ as less than $58$" means the number sits halfway between them.

$$x - 36 = 58 - x$$

$$2x = 94$$

$$x = 47$$

The claim says $48$. Forty-eight is $12$ above $36$ but only $10$ below $58$. The number is $47$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Five independent hard linear stories: a pipe minus a leak, a two-point age relation, current as half the gap between downstream and upstream, worker-days conserved after a crew shrinks, and a number equally far from two bounds.`,
  },
  {
    id: `math-4-22`,
    case_id: `MATH 4.22`,
    title: `Alcohol cut with water, two trains passing, a clock that gains`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A vat holds $60$ litres of a $25\\%$ alcohol solution. Water is added until the mixture is $15\\%$ alcohol. Then $30$ litres of water were added.`,
      `Two trains $120$ m and $180$ m long run toward each other at $40$ km/h and $50$ km/h. The time from the moment their fronts meet until they have completely passed is $12$ seconds.`,
      `A clock is set right at noon and gains $4$ minutes in every true hour. When the clock first shows $6$ pm, the true time is $5{:}36$ pm.`,
      `The sum of two numbers is $45$, and one of them is $5$ more than four times the other. The smaller number is $8$.`,
      `A tap can fill a tank in $8$ hours. After it has been open for $3$ hours a leak is noticed that would empty a full tank in $12$ hours. From the moment the leak starts, the tank is full $7$ hours later.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

The amount of alcohol does not change when water is added. Sixty litres at $25\\%$ hold

$$0.25 \\cdot 60 = 15$$

litres of alcohol. After adding $w$ litres of water the concentration is $15\\%$.

$$\\frac{15}{60 + w} = 0.15$$

$$15 = 0.15(60 + w)$$

$$15 = 9 + 0.15w$$

$$6 = 0.15w$$

$$w = 40$$

The claim says $30$ litres. Thirty litres would make $90$ litres in total and $\\frac{15}{90} = 16.7\\%$, still above $15\\%$. Forty litres of water are needed, so the statement is False.`,
      `**B.** → True

While they pass, the two trains together must cover the sum of their lengths, $120 + 180 = 300$ m, at the sum of their speeds. Convert $90$ km/h to metres per second by multiplying by $\\frac{5}{18}$.

$$90 \\cdot \\frac{5}{18} = 25 \\text{ m/s}$$

$$t = \\frac{300}{25} = 12$$

seconds. The passing time is $12$ seconds, so the statement is True.`,
      `**C.** → False

The clock runs $64$ minutes of its own for every $60$ true minutes, so true time is $\\frac{60}{64}$ of the time shown. When the clock shows $6$ hours it has counted $360$ of its minutes.

$$\\text{true minutes after noon} = 360 \\cdot \\frac{60}{64} = 337.5$$

That is $5$ hours and $37.5$ minutes, so $5{:}37{:}30$ pm, not $5{:}36$ pm. The figure $5{:}36$ is what you get by subtracting $4 \\cdot 6 = 24$ minutes from $6$ pm as if the gain were $4$ minutes of true time per clock hour. The true time is $5{:}37{:}30$ pm, so the statement is False.`,
      `**D.** → True

Let the smaller number be $x$. Then the larger is $4x + 5$, and they add to $45$.

$$x + (4x + 5) = 45$$

$$5x + 5 = 45$$

$$5x = 40$$

$$x = 8$$

The larger is $4 \\cdot 8 + 5 = 37$, and $8 + 37 = 45$. The smaller is $8$, so the statement is True.`,
      `**E.** → False

In the first three hours, with no leak, the tap fills $\\frac{3}{8}$ of the tank, so $\\frac{5}{8}$ remains. From then on the net rate is

$$\\frac{1}{8} - \\frac{1}{12} = \\frac{3}{24} - \\frac{2}{24} = \\frac{1}{24}$$

of the tank per hour. The remaining $\\frac{5}{8}$ then takes

$$\\frac{\\frac{5}{8}}{\\frac{1}{24}} = \\frac{5}{8} \\cdot 24 = 15$$

hours, not $7$. Seven hours at that net rate would fill only $\\frac{7}{24}$ of a tank, and $\\frac{7}{24} < \\frac{5}{8}$. The tank is full $15$ hours after the leak starts, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `Five independent stories at the top of the subsection: diluting alcohol without changing the solute, two trains covering the sum of their lengths, a clock whose gain compounds with the time it shows, a two-part number split, and a tap that later has to fight a leak.`,
  },
  {
    id: `math-4-23`,
    case_id: `MATH 4.23`,
    title: `Mixing a 25% copper alloy with a 55% alloy`,
    subsection: `4.1`,
    context: `A smith needs an alloy that is $40\\%$ copper. He already has $12$ kg of an alloy that is $25\\%$ copper, and he may mix it with a second alloy that is $55\\%$ copper. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `He should add $12$ kg of the $55\\%$ alloy.`,
      `The final mixture then weighs $24$ kg.`,
      `The final mixture contains $9.6$ kg of copper.`,
      `If instead he added only $8$ kg of the $55\\%$ alloy, the mixture would be $35\\%$ copper.`,
      `Using only the $25\\%$ alloy, more than $20$ kg of it would be needed to obtain $9.6$ kg of copper.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The $12$ kg already on the bench hold $0.25 \\cdot 12 = 3$ kg of copper. Let $x$ kg of the $55\\%$ alloy be added. The blend must be $40\\%$ copper.

$$3 + 0.55x = 0.40(12 + x)$$

$$3 + 0.55x = 4.8 + 0.40x$$

$$0.15x = 1.8$$

$$x = 12$$

Twelve kilograms of the richer alloy is exactly what the target requires, so the statement is True.`,
      `**B.** → True

Twelve kilograms of the first alloy plus twelve kilograms of the second is

$$12 + 12 = 24$$

kg. That is the mass of the $40\\%$ blend, so the statement is True.`,
      `**C.** → True

Forty percent of $24$ kg is

$$0.40 \\cdot 24 = 9.6$$

kg of copper. The same figure comes from adding the two copper contributions: $3 + 0.55 \\cdot 12 = 3 + 6.6 = 9.6$. The statement is True.`,
      `**D.** → False

Eight kilograms of the $55\\%$ alloy bring $0.55 \\cdot 8 = 4.4$ kg of copper. Together with the original $3$ kg that is $7.4$ kg of copper in $20$ kg of mixture.

$$\\frac{7.4}{20} = 0.37 = 37\\%$$

The claim says $35\\%$. Thirty-five percent of $20$ kg would be $7$ kg of copper, $0.4$ kg short of what is actually there. The mixture would be $37\\%$ copper, so the statement is False.`,
      `**E.** → True

At $25\\%$ copper, the mass needed for $9.6$ kg of copper is

$$\\frac{9.6}{0.25} = 38.4$$

kg, which is more than $20$ kg. Twenty kilograms of the poor alloy hold only $5$ kg of copper. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 23,
    solution_overview: `One mixing story, five checks. Twelve kilograms at $25\\%$ copper are blended with $x$ kilograms at $55\\%$ copper to hit $40\\%$. Conservation of copper gives $3 + 0.55x = 0.40(12 + x)$, so $x = 12$. Later letters are extra arithmetic on that blend.`,
  },
  {
    id: `math-4-24`,
    case_id: `MATH 4.24`,
    title: `A path around a field, harmonic mean, an 80% prize chain`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangular field is $20$ m longer than it is wide. A path $2$ m wide runs around the outside. If the field is $30$ m wide, the path covers $216$ m$^{2}$.`,
      `A man walks from A to B at $4$ km/h and returns from B to A at $6$ km/h. His average speed for the round trip is $4.8$ km/h.`,
      `A prize of $15250$ EUR is split so that second place gets $80\\%$ of first place and third place gets $80\\%$ of second place. Then second place is $5000$ EUR.`,
      `A cook has $2$ litres of $9\\%$ vinegar and wants a $6\\%$ mixture. Then $1$ litre of water must be added.`,
      `A car travels at an average speed of $60$ km/h. At $3{:}30$ pm it has gone $90$ km. Then it started at $2{:}00$ pm.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

If the field is $30$ m by $50$ m, the outer edge of a $2$ m path is $34$ m by $54$ m.

$$\\text{path} = 34 \\cdot 54 - 30 \\cdot 50 = 1836 - 1500 = 336$$

square metres, not $216$. The figure $216$ belongs to a different width: the path area is $8w + 96$, and $8w + 96 = 216$ forces $w = 15$ m, not $30$ m. At $30$ m the path is $336$ m$^{2}$, so the statement is False.`,
      `**B.** → True

Equal distances at two speeds do not average by adding the speeds and dividing by two. The harmonic mean of $4$ and $6$ is

$$\\frac{2 \\cdot 4 \\cdot 6}{4 + 6} = \\frac{48}{10} = 4.8$$

On a $12$ km out-and-back, outward takes $3$ hours and return takes $2$ hours, so $24$ km in $5$ hours is $4.8$ km/h. The statement is True.`,
      `**C.** → True

Let second place be $y$ euros. Then first is $\\frac{y}{0.8} = 1.25y$ and third is $0.8y$.

$$1.25y + y + 0.8y = 15250$$

$$3.05y = 15250$$

$$y = 5000$$

Check: first $6250$, second $5000$, third $4000$, and $6250 + 5000 + 4000 = 15250$. Second place is $5000$ EUR, so the statement is True.`,
      `**D.** → True

Two litres at $9\\%$ hold $0.18$ litres of acid. After adding $w$ litres of water the concentration is $6\\%$.

$$\\frac{0.18}{2 + w} = 0.06$$

$$0.18 = 0.12 + 0.06w$$

$$w = 1$$

One litre of water makes $3$ litres in total, and $\\frac{0.18}{3} = 0.06$. The statement is True.`,
      `**E.** → True

$$t = \\frac{90}{60} = 1.5$$

hours. Counting $1.5$ hours back from $3{:}30$ pm lands at $2{:}00$ pm. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Five independent exam-style claims: a path as outer rectangle minus inner field, a round-trip average that is a harmonic mean, an $80\\%$ prize chain, a dilution to a target percentage, and a start time from average speed.`,
  },
  {
    id: `math-4-25`,
    case_id: `MATH 4.25`,
    title: `Father and son, consecutive integers, A twice as fast as B`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The ages of a father and son add to $56$ years. The father's age is $6$ years less than three times the son's. The son is $16$ years old.`,
      `Three consecutive integers are such that four times the first plus twice the third equals $88$. The middle integer is $15$.`,
      `A and B together finish a job in $10$ days. A is twice as fast as B. Then A alone would take $15$ days.`,
      `A man walks $5$ km at $5$ km/h, rests for $20$ minutes, then walks $3$ km at $6$ km/h. The time from the start of the walk to the end is $1$ hour $40$ minutes.`,
      `Two numbers differ by $18$ and add to $64$. The larger is $41$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Let the son's age be $s$. Then the father is $3s - 6$, and the two ages add to $56$.

$$s + (3s - 6) = 56$$

$$4s = 62$$

$$s = 15.5$$

The claim says $16$. Sixteen would make the father $3 \\cdot 16 - 6 = 42$ and the sum $58$, two years over $56$. The son is $15.5$ years old, so the statement is False.`,
      `**B.** → True

Let the three integers be $n$, $n + 1$, and $n + 2$.

$$4n + 2(n + 2) = 88$$

$$4n + 2n + 4 = 88$$

$$6n = 84$$

$$n = 14$$

The integers are $14$, $15$, and $16$. The middle one is $15$. Check: $4 \\cdot 14 + 2 \\cdot 16 = 56 + 32 = 88$. The statement is True.`,
      `**C.** → True

Let B's rate be $r$ jobs per day. Then A's rate is $2r$, and together they do $3r = \\frac{1}{10}$ of the job per day.

$$r = \\frac{1}{30}, \\qquad 2r = \\frac{1}{15}$$

A alone takes $15$ days. In those $15$ days B would do only half a job, and $1 + \\frac{1}{2} = \\frac{3}{2}$ jobs in $15$ days is a rate of $\\frac{1}{10}$ per day, matching the together time. The statement is True.`,
      `**D.** → False

Walking $5$ km at $5$ km/h takes $1$ hour. The rest is $20$ minutes, which is $\\frac{1}{3}$ of an hour. Walking $3$ km at $6$ km/h takes $\\frac{1}{2}$ hour.

$$1 + \\frac{1}{3} + \\frac{1}{2} = \\frac{6 + 2 + 3}{6} = \\frac{11}{6}$$

hours, which is $1$ hour and $50$ minutes, not $1$ hour $40$ minutes. The claim is what you get if the rest is taken as $10$ minutes, or if the second leg is timed at $5$ km/h. The total is $1$ h $50$ min, so the statement is False.`,
      `**E.** → True

Let the larger number be $x$. Then the smaller is $x - 18$, and they add to $64$.

$$x + (x - 18) = 64$$

$$2x = 82$$

$$x = 41$$

The smaller is $23$, and $41 - 23 = 18$. Equivalently the larger is half the sum plus half the difference: $\\frac{64 + 18}{2} = 41$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 25,
    solution_overview: `Five independent stories: a father-and-son age pair, three consecutive integers with a weighted sum, two workers with a rate ratio, a walk that includes a rest, and two numbers given by sum and difference.`,
  },
  {
    id: `math-4-26`,
    case_id: `MATH 4.26`,
    title: `Three hours at $60$ km/h, then the rest at $40$`,
    subsection: `4.1`,
    context: `A $300$ km journey is driven in $6$ hours. Part of the time the motorist holds $60$ km/h and the rest of the time $40$ km/h. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `He drove for $3$ hours at $60$ km/h.`,
      `He covered $180$ km at the higher speed.`,
      `The slower part of the trip was $120$ km.`,
      `His average speed for the whole journey was $50$ km/h.`,
      `If the whole $300$ km had been driven at $50$ km/h, the trip would have taken $30$ minutes less.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let $t$ hours be driven at $60$ km/h. Then $6 - t$ hours are driven at $40$ km/h, and the distances add to $300$ km.

$$60t + 40(6 - t) = 300$$

$$60t + 240 - 40t = 300$$

$$20t = 60$$

$$t = 3$$

Three hours at the higher speed, so the statement is True.`,
      `**B.** → True

Three hours at $60$ km/h cover

$$60 \\cdot 3 = 180$$

km. That is the higher-speed distance, so the statement is True.`,
      `**C.** → True

The remaining three hours at $40$ km/h cover

$$40 \\cdot 3 = 120$$

km, and $180 + 120 = 300$. The slower part is $120$ km, so the statement is True.`,
      `**D.** → True

Average speed is total distance over total time, not the arithmetic mean of $60$ and $40$.

$$\\frac{300}{6} = 50$$

The average is $50$ km/h, so the statement is True. (Here the two speeds were held for equal times, so the arithmetic mean happens to agree; that is a coincidence of $t = 3$, not a general rule.)`,
      `**E.** → False

Three hundred kilometres at $50$ km/h takes

$$\\frac{300}{50} = 6$$

hours, which is exactly the time already used. There is no $30$-minute saving. Half an hour less would be a $5.5$ hour trip, needing about $54.5$ km/h. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 26,
    solution_overview: `One journey, five checks. Distance $300$ km in $6$ hours, split between $60$ km/h and $40$ km/h. The mix $60t + 40(6 - t) = 300$ recovers $t = 3$ hours at the higher speed. Later letters read distances and the average off that split.`,
  },
  {
    id: `math-4-27`,
    case_id: `MATH 4.27`,
    title: `Men and women on a job, a 1000 m race, a garrison's food`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Eight men can finish a job in $10$ days, and twelve women can finish the same job in $10$ days. Then four men and six women working together also finish it in $10$ days.`,
      `In a $1000$ m race A beats B by $100$ m. The ratio of A's speed to B's speed is $9 : 10$.`,
      `A can do a job in $10$ days and B in $15$ days. They work together for $2$ days, then A leaves. B finishes the rest in $8$ more days.`,
      `A garrison of $1200$ men has food for $50$ days. After $10$ days, $200$ men leave. The remaining food then lasts the $1000$ men left behind for $48$ more days.`,
      `A boat's speed in still water is $15$ km/h and the current is $3$ km/h. Going $36$ km downstream and returning the same $36$ km upstream takes $5$ hours.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Eight men in $10$ days do the same job as twelve women in $10$ days, so $8$ men have the same combined rate as $12$ women: two men match three women. Then four men match six women, and four men plus six women match eight men.

Eight men finish in $10$ days, so this mixed crew does too. The statement is True.`,
      `**B.** → False

When A finishes $1000$ m, B has run only $900$ m. Speeds are in the ratio of those distances in the same time.

$$\\frac{\\text{speed of A}}{\\text{speed of B}} = \\frac{1000}{900} = \\frac{10}{9}$$

The claim writes $9 : 10$, which is the ratio the other way around. A's speed is larger, so the ratio is $10 : 9$. The statement is False.`,
      `**C.** → False

Together they do $\\frac{1}{10} + \\frac{1}{15} = \\frac{1}{6}$ of the job per day. In two days they complete $\\frac{1}{3}$, so $\\frac{2}{3}$ remains. B alone does $\\frac{1}{15}$ per day, so the rest takes

$$\\frac{\\frac{2}{3}}{\\frac{1}{15}} = 10$$

days, not $8$. Eight more days of B would cover only $\\frac{8}{15}$ of a job, and $\\frac{8}{15} < \\frac{2}{3}$. B needs $10$ more days, so the statement is False.`,
      `**D.** → True

The store is $1200 \\cdot 50 = 60000$ man-days of food. Ten days with $1200$ men use $12000$ man-days, so $48000$ remain. One thousand men then have

$$\\frac{48000}{1000} = 48$$

days of food. The statement is True.`,
      `**E.** → True

Downstream the boat does $15 + 3 = 18$ km/h, so $36$ km takes $2$ hours. Upstream it does $15 - 3 = 12$ km/h, so $36$ km takes $3$ hours.

$$2 + 3 = 5$$

The round trip takes $5$ hours, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 27,
    solution_overview: `Five independent stories: men and women as equivalent rates, a race handicap as a speed ratio, leftover work after a joint spell, man-days of food after the garrison shrinks, and a downstream-and-back total time.`,
  },
  {
    id: `math-4-28`,
    case_id: `MATH 4.28`,
    title: `A 44 cm perimeter, 16% acid, leftover work for B`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `One side of a rectangle is $4$ cm longer than twice the other side. The perimeter is $44$ cm. Then the longer side is $16$ cm.`,
      `A car travels at an average speed of $80$ km/h. At $5{:}15$ pm it has gone $210$ km. Then it started at $2{:}30$ pm.`,
      `A chemist has $2.5$ litres of $16\\%$ acid and wants a $10\\%$ solution. Then $1.5$ litres of water must be added.`,
      `A prize of $18300$ EUR is split so that second place gets $80\\%$ of first place and third place gets $80\\%$ of second place. Then second place is $5500$ EUR.`,
      `A can finish a job in $12$ days and B in $18$ days. They work together for $3$ days, then A leaves. B still needs $10.5$ days to finish.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let the shorter side be $x$ cm. Then the longer is $2x + 4$, and the perimeter is $44$.

$$2\\bigl(x + (2x + 4)\\bigr) = 44$$

$$2(3x + 4) = 44$$

$$3x + 4 = 22$$

$$3x = 18$$

$$x = 6$$

The longer side is $2 \\cdot 6 + 4 = 16$ cm. Check: $2(6 + 16) = 44$. The statement is True.`,
      `**B.** → False

Time on the road is distance over speed.

$$t = \\frac{210}{80} = 2.625$$

hours, which is $2$ hours and $37.5$ minutes. Counting that back from $5{:}15$ pm lands at $2{:}37{:}30$ pm, not $2{:}30$ pm. The figure $2{:}30$ is what you get by treating $2.625$ hours as $2$ h $45$ min, or by dividing $210$ by $70$. The start was $2{:}37{:}30$ pm, so the statement is False.`,
      `**C.** → True

Two and a half litres at $16\\%$ hold

$$0.16 \\cdot 2.5 = 0.4$$

litres of acid. After adding $w$ litres of water the concentration is $10\\%$.

$$\\frac{0.4}{2.5 + w} = 0.10$$

$$0.4 = 0.25 + 0.10w$$

$$w = 1.5$$

Adding $1.5$ litres makes $4$ litres in total, and $\\frac{0.4}{4} = 0.10$. The statement is True.`,
      `**D.** → False

Let second place be $y$ euros. Then first is $1.25y$ and third is $0.8y$.

$$1.25y + y + 0.8y = 18300$$

$$3.05y = 18300$$

$$y = 6000$$

The claim says $5500$. Check of the recovered split: first $7500$, second $6000$, third $4800$, and $7500 + 6000 + 4800 = 18300$. Second place is $6000$ EUR, so the statement is False.`,
      `**E.** → True

Together they do $\\frac{1}{12} + \\frac{1}{18} = \\frac{5}{36}$ of the job per day. In three days they complete

$$3 \\cdot \\frac{5}{36} = \\frac{15}{36} = \\frac{5}{12}$$

so $\\frac{7}{12}$ remains. B does $\\frac{1}{18}$ per day, so the rest takes

$$\\frac{\\frac{7}{12}}{\\frac{1}{18}} = \\frac{7}{12} \\cdot 18 = \\frac{21}{2} = 10.5$$

days. B still needs $10.5$ days, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 28,
    solution_overview: `Five independent exam-style claims at the ceiling of this subsection: a rectangle whose length is twice the width plus $4$, a start time that is not a whole number of minutes, a dilution to $10\\%$, an $80\\%$ prize chain whose second place is not the obvious round number, and leftover work after a three-day joint spell.`,
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
    title: `Consecutive integers whose product is $12$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square has area $64$ m$^{2}$. Then its side is $8$ m.`,
      `Two consecutive integers multiply to $12$. The positive pair is $3$ and $4$.`,
      `Two consecutive integers multiply to $12$. The pair $2$ and $6$ is not consecutive.`,
      `A rectangle is $1$ cm longer than it is wide and has area $12$ cm$^{2}$. Then the width is $3$ cm.`,
      `That same rectangle has longer side $4$ cm.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$s^{2} = 64 \\Rightarrow s = 8$$

because a length is positive. Check: $8 \\cdot 8 = 64$. The statement is True.`,
      `**B.** → True

Let the smaller integer be $n$. Then

$$n(n + 1) = 12$$

$$n^{2} + n - 12 = 0$$

$$(n + 4)(n - 3) = 0$$

so $n = 3$ or $n = -4$. The positive pair is $3$ and $4$, and $3 \\cdot 4 = 12$. The statement is True.`,
      `**C.** → True

$2$ and $6$ are not consecutive, even though $2 \\cdot 6 = 12$. Consecutive integers differ by $1$. The statement is True.`,
      `**D.** → True

Let the width be $x$ cm. Then the length is $x + 1$, and the area is $12$.

$$x(x + 1) = 12$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

The positive width is $x = 3$. Then the length is $4$, and $3 \\cdot 4 = 12$. The statement is True.`,
      `**E.** → True

The longer side is $3 + 1 = 4$ cm. The statement is True.`,
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
    title: `Sum and product of the roots $2$ and $5$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} - 7x + 10 = 0$, the sum of the roots is $7$.`,
      `For that same equation, the product of the roots is $10$.`,
      `The roots are $3$ and $4$.`,
      `The larger root is $6$.`,
      `Both roots are greater than $4$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Vieta's formulas for $x^{2} + px + q = 0$ written as $x^{2} - (\\text{sum})x + (\\text{product}) = 0$ give sum $7$ here. You can also add the roots once you have them: $2 + 5 = 7$. The statement is True.`,
      `**B.** → True

The constant term of a monic quadratic is the product of the roots: $2 \\cdot 5 = 10$. The statement is True.`,
      `**C.** → False

Factor: $(x - 2)(x - 5) = x^{2} - 7x + 10$. The roots are $2$ and $5$, not $3$ and $4$. Those would belong to $x^{2} - 7x + 12 = 0$. The statement is False.`,
      `**D.** → False

The larger root is $5$, not $6$. Six would belong to a sum of $8$ with the other root $2$. The statement is False.`,
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
      `The equation $x^{2} + x - 6 = 0$ has a positive root $3$.`,
      `The negative root of that equation is $-2$.`,
      `The discriminant of $x^{2} + x - 6$ is $16$.`,
      `That equation has two distinct real solutions.`,
      `That equation has no real solution.`,
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
    title: `A rectangle $2$ cm longer than it is wide, area $48$`,
    subsection: `4.2`,
    context: `A rectangle is $2$ cm longer than it is wide, and its area is $48$ cm$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The longer side is $8$ cm.`,
      `The shorter side is $6$ cm.`,
      `The perimeter is $28$ cm.`,
      `If the longer side were $10$ cm with the same shorter side, the area would still be $48$ cm$^{2}$.`,
      `The two sides differ by $2$ cm.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $x$ cm. Then the length is $x + 2$, and the area is $48$.

$$x(x + 2) = 48$$

$$x^{2} + 2x - 48 = 0$$

$$(x + 8)(x - 6) = 0$$

The positive width is $6$, so the longer side is $8$ cm. Check: $6 \\cdot 8 = 48$. The statement is True.`,
      `**B.** → True

The positive root of that quadratic is $x = 6$. The shorter side is $6$ cm, so the statement is True.`,
      `**C.** → True

$$P = 2(6 + 8) = 28$$

The perimeter is $28$ cm, so the statement is True.`,
      `**D.** → False

Keeping width $6$ and stretching the length to $10$ gives area $60$, not $48$. The statement is False.`,
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
      `Two consecutive integers multiply to $56$. The smaller positive one is $7$.`,
      `The larger of that positive pair is $8$.`,
      `There is also a negative pair, $-8$ and $-7$.`,
      `The integers $6$ and $9$ multiply to $54$, not $56$.`,
      `The positive pair adds to $15$.`,
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
    context: `A rectangle has area $60$ cm$^{2}$, and its length is $7$ cm more than its width. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is $5$ cm.`,
      `The length is $11$ cm.`,
      `The perimeter is $40$ cm.`,
      `The diagonal is $13$ cm.`,
      `The width is $6$ cm.`,
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

Length $5 + 7 = 12$ cm, not $11$. Eleven with width $5$ would give area $55$, not $60$. The statement is False.`,
      `**C.** → False

$$P = 2(5 + 12) = 34$$

The claim says $40$ cm. Forty would be $2(6 + 14)$ or a $10$ by $10$ square. The perimeter is $34$ cm, so the statement is False.`,
      `**D.** → True

$$d^{2} = 5^{2} + 12^{2} = 25 + 144 = 169$$

so $d = 13$. This is the $5$-$12$-$13$ triple. The statement is True.`,
      `**E.** → False

Width $6$ would give length $13$ and area $78$, not $60$. The recovered width is $5$ cm. The statement is False.`,
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
      `The positive root of $x^{2} - 2x - 15 = 0$ is $6$.`,
      `A right triangle has legs $x$ cm and $x + 1$ cm and hypotenuse $5$ cm. Then the shorter leg is $3$ cm.`,
      `That triangle is equilateral.`,
      `The area of that triangle is $12$ cm$^{2}$.`,
      `The longer leg is $4$ cm.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A.** → False

$$x^{2} - 2x - 15 = (x - 5)(x + 3)$$

The roots are $5$ and $-3$. The positive one is $5$, not $6$. Six would solve $x^{2} - 2x - 24 = 0$. The statement is False.`,
      `**B.** → True

Pythagoras gives

$$x^{2} + (x + 1)^{2} = 25$$

$$2x^{2} + 2x + 1 = 25$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

The positive leg is $x = 3$. The other leg is $4$, and $3^{2} + 4^{2} = 25$. The statement is True.`,
      `**C.** → False

The sides are $3$, $4$, and $5$, three different lengths. An equilateral triangle would need all three equal. The statement is False.`,
      `**D.** → False

Area is half the product of the legs:

$$\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$$

The claim says $12$, which is the product without the half. The statement is False.`,
      `**E.** → True

The legs are $3$ and $4$, so the longer leg is $4$ cm. The statement is True.`,
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
    title: `Completing the square for $x^{2} - 6x + 5$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Completing the square turns $x^{2} - 6x + 5 = 0$ into $(x - 3)^{2} = 4$.`,
      `The two real roots of that equation are $2$ and $4$.`,
      `Both roots are larger than $2$.`,
      `The axis of symmetry of $y = x^{2} - 6x + 5$ is the line $x = 3$.`,
      `The sum of the two roots is $8$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Move the constant, then add the square of half the middle coefficient, which is $3$.

$$x^{2} - 6x = -5$$

$$x^{2} - 6x + 9 = 4$$

$$(x - 3)^{2} = 4$$

Half of $6$ is $3$, and $3^{2} = 9$ is what completes the square. The statement is True.`,
      `**B.** → False

A square equals $4$ when the inside is $2$ or $-2$.

$$x - 3 = 2 \\quad \\text{or} \\quad x - 3 = -2$$

so $x = 5$ or $x = 1$, not $2$ and $4$. Those would be centred at $3$ only if they summed to $6$ and differed by $2$, which $2$ and $4$ do, but they solve $(x - 3)^{2} = 1$. Check: $4 - 12 + 5 = -3$, not $0$. The statement is False.`,
      `**C.** → False

$5 > 2$, but $1$ is not larger than $2$. Both roots larger than $2$ would need the smaller one past $2$, which would shift the constant term. The statement is False.`,
      `**D.** → True

The completed square is centred at $x = 3$, which is also $-\\frac{b}{2a} = \\frac{6}{2} = 3$. That vertical line is the axis of symmetry. The statement is True.`,
      `**E.** → False

Vieta's formula for $x^{2} - 6x + 5 = 0$ says the sum of the roots is $6$, and $1 + 5 = 6$. The claim says $8$. Eight would belong to $x^{2} - 8x + 5 = 0$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 41,
    solution_overview: `Five independent claims about completing the square on $x^{2} - 6x + 5 = 0$. Adding $9$ produces $(x - 3)^{2} = 4$, so the roots are $1$ and $5$, with axis $x = 3$ and sum $6$.`,
  },
  {
    id: `math-4-42`,
    case_id: `MATH 4.42`,
    title: `A $30$ by $20$ picture in a uniform frame`,
    subsection: `4.2`,
    context: `A rectangular picture measures $30$ cm by $20$ cm. It is surrounded by a uniform wooden frame $2$ cm wide. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The outer rectangle is $34$ cm by $24$ cm.`,
      `The area of that outer rectangle is $816$ cm$^{2}$.`,
      `The wooden frame itself has area $216$ cm$^{2}$.`,
      `If the frame were $3$ cm wide instead, the outer area would be $900$ cm$^{2}$.`,
      `A $3$ cm frame around the same picture would have area $336$ cm$^{2}$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The frame adds $2$ cm on every side, so $4$ cm in each direction.

$$30 + 4 = 34, \\qquad 20 + 4 = 24$$

The outer rectangle is $34$ cm by $24$ cm. The statement is True.`,
      `**B.** → True

$$34 \\cdot 24 = 816$$

That is the outer area in square centimetres. The statement is True.`,
      `**C.** → True

The picture itself is $30 \\cdot 20 = 600$ cm$^{2}$. The wood is the outer area minus the picture.

$$816 - 600 = 216$$

The frame has area $216$ cm$^{2}$. The statement is True.`,
      `**D.** → False

A $3$ cm frame adds $6$ cm in each direction, so the outer size is $36$ cm by $26$ cm.

$$36 \\cdot 26 = 936$$

The claim says $900$. Nine hundred would be $30 \\cdot 30$, a square that this frame is not. The outer area is $936$ cm$^{2}$, so the statement is False.`,
      `**E.** → True

A $3$ cm frame around the same $30$ by $20$ picture has outer area $36 \\cdot 26 = 936$, so the wood is $936 - 600 = 336$ cm$^{2}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 42,
    solution_overview: `One framed picture, five checks. A uniform frame of width $w$ around a $30$ by $20$ rectangle has outer sides $30 + 2w$ and $20 + 2w$. For $w = 2$ the outer rectangle is $34$ by $24$. The wood is outer area minus $600$.`,
  },
  {
    id: `math-4-43`,
    case_id: `MATH 4.43`,
    title: `Consecutive even integers whose product is $168$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two consecutive even positive integers multiply to $168$. They are $12$ and $14$.`,
      `There is also a negative pair, $-14$ and $-12$.`,
      `If $n$ is the smaller of two consecutive even integers with product $168$, then $n = 12$ or $n = -14$.`,
      `The integers $10$ and $16$ multiply to $160$, not $168$.`,
      `The equation $n(n + 2) = 168$ has two distinct integer solutions.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Consecutive even integers differ by $2$. Let the smaller be $n$.

$$n(n + 2) = 168$$

$$n^{2} + 2n - 168 = 0$$

$$\\Delta = 4 + 672 = 676 = 26^{2}$$

$$n = \\frac{-2 \\pm 26}{2}$$

The positive root is $n = 12$, so the pair is $12$ and $14$. Check: $12 \\cdot 14 = 168$. The statement is True.`,
      `**B.** → True

The other root is $n = -14$, so the pair is $-14$ and $-12$, and $(-14)\\cdot(-12) = 168$. The statement is True.`,
      `**C.** → True

Those are exactly the two roots of the quadratic. Each names the smaller member of one pair. The statement is True.`,
      `**D.** → True

$10 \\cdot 16 = 160$, not $168$, and those two differ by $6$, so they are not consecutive even integers. The statement is True.`,
      `**E.** → True

The quadratic $n^{2} + 2n - 168 = 0$ has two real roots, both integers: $12$ and $-14$. Two distinct integer solutions for $n$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Five independent claims about consecutive even integers with product $168$. The model is $n(n + 2) = 168$. The integer solutions for the smaller one are $n = 12$ and $n = -14$.`,
  },
  {
    id: `math-4-44`,
    case_id: `MATH 4.44`,
    title: `A rectangle $50\\%$ longer than it is wide, area $54$`,
    subsection: `4.2`,
    context: `A rectangle has area $54$ cm$^{2}$, and its length is $50\\%$ more than its width. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is $4$ cm.`,
      `The length is $12$ cm.`,
      `The perimeter is $36$ cm.`,
      `The width is $9$ cm.`,
      `The length is one and a half times the width.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ cm. Then the length is $\\frac{3}{2}w$, and the area is $54$.

$$w \\cdot \\frac{3}{2}w = 54$$

$$\\frac{3}{2}w^{2} = 54$$

$$w^{2} = 36$$

A length is positive, so $w = 6$, not $4$. Width $4$ would give length $6$ and area $24$, not $54$. The statement is False.`,
      `**B.** → False

Length $\\frac{3}{2}\\cdot 6 = 9$ cm, not $12$. Twelve would be twice the width. The statement is False.`,
      `**C.** → False

$$P = 2(6 + 9) = 30$$

The claim says $36$ cm. Thirty-six would be $2(6 + 12)$ or a $9$ by $9$ square. The perimeter is $30$ cm, so the statement is False.`,
      `**D.** → False

Width $9$ would force length $\\frac{3}{2}\\cdot 9 = 13.5$ and area $121.5$, not $54$. The recovered width is $6$ cm. The statement is False.`,
      `**E.** → True

That is the opening relation: $50\\%$ more means the length is $\\frac{3}{2}$ of the width, and $9 = \\frac{3}{2}\\cdot 6$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `One rectangle, five checks. Length $\\frac{3}{2}$ of the width and area $54$ give $\\frac{3}{2}w^{2} = 54$, so $w = 6$ and the length is $9$. The perimeter is then $30$ cm.`,
  },
  {
    id: `math-4-45`,
    case_id: `MATH 4.45`,
    title: `Distance $5t^{2}$ metres after $t$ seconds`,
    subsection: `4.2`,
    context: `A body starts from rest. After $t$ seconds it has travelled $5t^{2}$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $4$ seconds the body has travelled $80$ m.`,
      `After $2$ seconds it has travelled $20$ m.`,
      `After $2$ seconds it has travelled $40$ m, half of the $4$-second distance.`,
      `After $3$ seconds it has travelled $60$ m.`,
      `It takes $8$ seconds to cover $80$ m.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$5 \\cdot 4^{2} = 5 \\cdot 16 = 80$$

After $4$ seconds the distance is $80$ m. The statement is True.`,
      `**B.** → True

$$5 \\cdot 2^{2} = 5 \\cdot 4 = 20$$

After $2$ seconds the distance is $20$ m. The statement is True.`,
      `**C.** → False

Distance here grows with $t^{2}$, not with $t$. Half the time is not half the distance. Half of $80$ is $40$, but the $2$-second reading is $20$, not $40$. The statement is False.`,
      `**D.** → False

$$5 \\cdot 3^{2} = 5 \\cdot 9 = 45$$

not $60$. Sixty would be $5 \\cdot (\\sqrt{12})^{2}$, which is not an integer time. After $3$ seconds the distance is $45$ m. The statement is False.`,
      `**E.** → False

Set $5t^{2} = 80$, so $t^{2} = 16$ and $t = 4$ (time is positive). Eight seconds would give $5 \\cdot 64 = 320$ m. The $80$ m mark is at $4$ seconds, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `One motion law $s = 5t^{2}$, five checks. Substitute the given times, and solve $5t^{2} = 80$ for the time that belongs to $80$ m. Because $s$ is quadratic in $t$, doubling the time quadruples the distance.`,
  },
  {
    id: `math-4-46`,
    case_id: `MATH 4.46`,
    title: `Two numbers that differ by $5$ and multiply to $36$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two positive numbers differ by $5$ and multiply to $36$. They are $4$ and $9$.`,
      `Those two numbers differ by $5$.`,
      `The smaller positive number is $6$.`,
      `There is also a negative pair, $-9$ and $-4$.`,
      `The positive pair adds to $13$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let the smaller be $x$. Then the larger is $x + 5$, and

$$x(x + 5) = 36$$

$$x^{2} + 5x - 36 = 0$$

$$\\Delta = 25 + 144 = 169 = 13^{2}$$

$$x = \\frac{-5 \\pm 13}{2}$$

The positive root is $x = 4$, so the pair is $4$ and $9$. Check: $4 \\cdot 9 = 36$ and $9 - 4 = 5$. The statement is True.`,
      `**B.** → True

$9 - 4 = 5$, which is the opening relation. The statement is True.`,
      `**C.** → False

The smaller positive number is $4$, not $6$. Six with a difference of $5$ would be paired with $11$, and $6 \\cdot 11 = 66$, not $36$. The statement is False.`,
      `**D.** → True

The other root is $x = -9$, so the pair is $-9$ and $-4$. Then $(-9)\\cdot(-4) = 36$ and $-4 - (-9) = 5$. The statement is True.`,
      `**E.** → True

$4 + 9 = 13$. That is the positive pair, not the two roots of $x^{2} + 5x - 36 = 0$ (those roots are $4$ and $-9$, and they add to $-5$). The claim asks about the two positive numbers, and they add to $13$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `Five independent claims about two numbers that differ by $5$ and multiply to $36$. The model $x(x + 5) = 36$ has roots $x = 4$ and $x = -9$, giving the pairs $4, 9$ and $-9, -4$.`,
  },
  {
    id: `math-4-47`,
    case_id: `MATH 4.47`,
    title: `An isosceles right triangle with hypotenuse $10$`,
    subsection: `4.2`,
    context: `An isosceles right triangle has hypotenuse $10$ cm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Each leg is $5\\sqrt{2}$ cm.`,
      `Each leg is $5$ cm.`,
      `The area of the triangle is $25$ cm$^{2}$.`,
      `The perimeter is $20$ cm.`,
      `The area of the triangle is $50$ cm$^{2}$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The two legs are equal. Call each one $a$ cm. Pythagoras gives

$$a^{2} + a^{2} = 10^{2}$$

$$2a^{2} = 100$$

$$a^{2} = 50$$

$$a = 5\\sqrt{2}$$

(the positive root, as a length). Check: $(5\\sqrt{2})^{2} + (5\\sqrt{2})^{2} = 50 + 50 = 100$. The statement is True.`,
      `**B.** → False

Legs of $5$ cm would give hypotenuse $\\sqrt{25 + 25} = 5\\sqrt{2}$, about $7.07$ cm, not $10$. The legs that belong to hypotenuse $10$ are $5\\sqrt{2}$ cm. The statement is False.`,
      `**C.** → True

Area is half the product of the legs.

$$\\frac{1}{2} \\cdot 5\\sqrt{2} \\cdot 5\\sqrt{2} = \\frac{1}{2} \\cdot 25 \\cdot 2 = 25$$

The area is $25$ cm$^{2}$. The statement is True.`,
      `**D.** → False

Two legs plus the hypotenuse:

$$5\\sqrt{2} + 5\\sqrt{2} + 10 = 10 + 10\\sqrt{2} = 10(1 + \\sqrt{2})$$

which is about $24.1$ cm, not $20$. Twenty would be the two legs if each were $5$, plus the hypotenuse $10$, which is the wrong triangle. The statement is False.`,
      `**E.** → False

Fifty is $a^{2}$, the square of one leg, or the product of the legs without the half. Area is $25$ cm$^{2}$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `One isosceles right triangle, five checks. Equal legs $a$ and hypotenuse $10$ give $2a^{2} = 100$, so $a = 5\\sqrt{2}$. Area is half the product of the legs, and the perimeter is $10(1 + \\sqrt{2})$.`,
  },
  {
    id: `math-4-48`,
    case_id: `MATH 4.48`,
    title: `A rectangle of perimeter $36$ and area $80$`,
    subsection: `4.2`,
    context: `A rectangle has perimeter $36$ cm and area $80$ cm$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The sides are $8$ cm and $10$ cm.`,
      `The rectangle is a square.`,
      `A square with the same perimeter has side $9$ cm.`,
      `That square has area $81$ cm$^{2}$, which is larger than $80$.`,
      `The sides are $10$ cm and $16$ cm.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Perimeter $36$ means the sum of adjacent sides is $18$. Let one side be $x$ cm. Then the other is $18 - x$, and the area is $80$.

$$x(18 - x) = 80$$

$$x^{2} - 18x + 80 = 0$$

$$\\Delta = 324 - 320 = 4$$

$$x = \\frac{18 \\pm 2}{2}$$

so $x = 10$ or $x = 8$. The sides are $8$ cm and $10$ cm. Check: $8 + 10 = 18$ and $8 \\cdot 10 = 80$. The statement is True.`,
      `**B.** → False

A square would need equal sides, so $9$ and $9$, with area $81$, not $80$. The recovered sides $8$ and $10$ are different. The statement is False.`,
      `**C.** → True

The same perimeter $36$ on a square means four equal sides of $\\frac{36}{4} = 9$ cm. The statement is True.`,
      `**D.** → True

$$9^{2} = 81 > 80$$

Among rectangles of a fixed perimeter, the square has the largest area. Here that maximum is $81$, a little above the given $80$. The statement is True.`,
      `**E.** → False

Sides $10$ and $16$ add to $26$, so the perimeter would be $52$, not $36$, and the area would be $160$, not $80$. The recovered sides are $8$ and $10$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `One rectangle, five checks. Perimeter $36$ and area $80$ mean the sides $x$ and $18 - x$ satisfy $x(18 - x) = 80$. The solutions are $8$ and $10$. A square of the same perimeter has side $9$ and area $81$.`,
  },
  {
    id: `math-4-49`,
    case_id: `MATH 4.49`,
    title: `A father $24$ years older, ages multiplying to $180$`,
    subsection: `4.2`,
    context: `A father is $24$ years older than his son, and the product of their ages is $180$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The son is $6$ years old.`,
      `The father is $30$ years old.`,
      `In $6$ years the product of their ages will be $432$.`,
      `The father is $30$ years old now, not $36$.`,
      `In $6$ years the son will be $12$ and the father $36$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Let the son's age be $s$ years. Then the father is $s + 24$, and

$$s(s + 24) = 180$$

$$s^{2} + 24s - 180 = 0$$

$$\\Delta = 576 + 720 = 1296 = 36^{2}$$

$$s = \\frac{-24 \\pm 36}{2}$$

The positive root is $s = 6$. Check: $6 \\cdot 30 = 180$. The statement is True.`,
      `**B.** → True

The father is $6 + 24 = 30$ years old. The statement is True.`,
      `**C.** → True

In $6$ years they will be $12$ and $36$, and $12 \\cdot 36 = 432$. The statement is True.`,
      `**D.** → True

Thirty-six is the father's age in $6$ years. Now he is $30$. The statement is True.`,
      `**E.** → True

Son $6 + 6 = 12$, father $30 + 6 = 36$. Both ages increase by the same $6$ years. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `One family, five checks. Son $s$, father $s + 24$, product $180$ gives $s^{2} + 24s - 180 = 0$. The positive root is $s = 6$, so the father is $30$. Later ages add $6$ to each.`,
  },
  {
    id: `math-4-50`,
    case_id: `MATH 4.50`,
    title: `A $13$ m ladder against a wall`,
    subsection: `4.2`,
    context: `A $13$ m ladder leans against a vertical wall. Its foot is $5$ m from the wall. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The top of the ladder is $12$ m up the wall.`,
      `If the foot is pulled out to $9$ m from the wall, the top drops by $4$ m.`,
      `After that move, the top is $\\sqrt{88}$ m up the wall.`,
      `At first, the area of the triangle formed by the wall, the ground and the ladder is $30$ m$^{2}$.`,
      `That first area is $32$ m$^{2}$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Pythagoras with hypotenuse $13$ and base $5$:

$$h^{2} + 5^{2} = 13^{2}$$

$$h^{2} = 169 - 25 = 144$$

$$h = 12$$

This is the $5$-$12$-$13$ triple. The top is $12$ m up the wall. The statement is True.`,
      `**B.** → False

With the foot at $9$ m, the new height $h_{1}$ satisfies

$$h_{1}^{2} + 9^{2} = 13^{2}$$

$$h_{1}^{2} = 169 - 81 = 88$$

$$h_{1} = \\sqrt{88}$$

which is not $8$. The drop would be $12 - 8 = 4$ only if the new height were $8$. It is not: $\\sqrt{88}$ is a little more than $9$, so the drop is less than $3$ m. Subtracting the bases $13 - 5 = 8$ and $13 - 9 = 4$ does not give the heights. The statement is False.`,
      `**C.** → True

That is the height just computed: $\\sqrt{88} = 2\\sqrt{22}$ metres. The statement is True.`,
      `**D.** → True

The right triangle has legs $5$ and $12$.

$$\\frac{1}{2} \\cdot 5 \\cdot 12 = 30$$

The area is $30$ m$^{2}$. The statement is True.`,
      `**E.** → False

Thirty-two is not half of $5 \\cdot 12$. Half of $64$, or $4 \\cdot 8$, would be $32$. The area is $30$ m$^{2}$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `One ladder, five checks. At first the $13$ m hypotenuse and $5$ m base force height $12$. Moving the foot to $9$ m makes the height $\\sqrt{88}$, not $8$, so the top does not drop by $4$ m.`,
  },
  {
    id: `math-4-51`,
    case_id: `MATH 4.51`,
    title: `A longer-by-$4$ rectangle, $x + \\frac{1}{x}$, and $x^{2} + 1$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle is $4$ cm longer than it is wide, and its area is $45$ cm$^{2}$. The sides are $5$ cm and $9$ cm.`,
      `The equation $x + \\frac{1}{x} = \\frac{5}{2}$ has the unique real solution $x = 2$.`,
      `A body travels $5t^{2}$ metres in $t$ seconds. It has gone $125$ m after $5$ seconds.`,
      `Two consecutive positive integers multiply to $72$. They are $8$ and $9$.`,
      `The equation $x^{2} + 1 = 0$ has two distinct real roots.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then

$$w(w + 4) = 45$$

$$w^{2} + 4w - 45 = 0$$

$$\\Delta = 16 + 180 = 196 = 14^{2}$$

$$w = \\frac{-4 \\pm 14}{2}$$

The positive value is $w = 5$, so the length is $9$. Check: $5 \\cdot 9 = 45$. The statement is True.`,
      `**B.** → False

$x = 2$ does work, because $2 + \\frac{1}{2} = \\frac{5}{2}$. But it is not the only real solution. Multiply through by $x$ (and $x \\neq 0$):

$$x^{2} + 1 = \\frac{5}{2}x$$

$$2x^{2} - 5x + 2 = 0$$

$$(2x - 1)(x - 2) = 0$$

so $x = 2$ or $x = \\frac{1}{2}$. Check of the second: $\\frac{1}{2} + \\frac{1}{\\frac{1}{2}} = \\frac{1}{2} + 2 = \\frac{5}{2}$. Two real solutions, not one. The statement is False.`,
      `**C.** → True

$$5 \\cdot 5^{2} = 5 \\cdot 25 = 125$$

After $5$ seconds the distance is $125$ m. The statement is True.`,
      `**D.** → True

$$n(n + 1) = 72$$

$$n^{2} + n - 72 = 0$$

$$\\Delta = 1 + 288 = 289 = 17^{2}$$

$$n = \\frac{-1 \\pm 17}{2}$$

The positive root is $n = 8$, so the pair is $8$ and $9$. Check: $8 \\cdot 9 = 72$. The statement is True.`,
      `**E.** → False

$$x^{2} + 1 = 0 \\quad \\Rightarrow \\quad x^{2} = -1$$

A square of a real number cannot be negative, and $\\Delta = 0 - 4 = -4 < 0$. There are no real roots. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 51,
    solution_overview: `Five independent quadratic stories: a $5$ by $9$ rectangle, the reciprocal equation $x + \\frac{1}{x} = \\frac{5}{2}$, a $5t^{2}$ motion reading, consecutive integers with product $72$, and $x^{2} + 1 = 0$ which has no real root.`,
  },
  {
    id: `math-4-52`,
    case_id: `MATH 4.52`,
    title: `Length $3$ more than width, diagonal $15$`,
    subsection: `4.2`,
    context: `A rectangle is $3$ cm longer than it is wide, and its diagonal is $15$ cm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is $9$ cm.`,
      `The length is $12$ cm.`,
      `The area is $108$ cm$^{2}$.`,
      `The sides and the diagonal form a $3$-$4$-$5$ triangle scaled by $3$.`,
      `The width is $8$ cm.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $w + 3$, and Pythagoras gives

$$w^{2} + (w + 3)^{2} = 15^{2}$$

$$w^{2} + w^{2} + 6w + 9 = 225$$

$$2w^{2} + 6w - 216 = 0$$

$$w^{2} + 3w - 108 = 0$$

$$\\Delta = 9 + 432 = 441 = 21^{2}$$

$$w = \\frac{-3 \\pm 21}{2}$$

The positive value is $w = 9$. Check: $9^{2} + 12^{2} = 81 + 144 = 225$. The statement is True.`,
      `**B.** → True

Length $9 + 3 = 12$ cm. The statement is True.`,
      `**C.** → True

$$9 \\cdot 12 = 108$$

The area is $108$ cm$^{2}$. The statement is True.`,
      `**D.** → True

$9, 12, 15$ is $3, 4, 5$ multiplied by $3$. The statement is True.`,
      `**E.** → False

Width $8$ would give length $11$ and

$$8^{2} + 11^{2} = 64 + 121 = 185 \\neq 225$$

The recovered width is $9$ cm. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 52,
    solution_overview: `One rectangle, five checks. Width $w$, length $w + 3$, diagonal $15$ give $w^{2} + 3w - 108 = 0$. The positive root is $w = 9$, so the sides are $9$ cm and $12$ cm.`,
  },
  {
    id: `math-4-53`,
    case_id: `MATH 4.53`,
    title: `A courtyard $3$ m longer than it is wide, diagonal $15$`,
    subsection: `4.2`,
    context: `A rectangular courtyard is $3$ m longer than it is wide, and a diagonal path across it is $15$ m. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The shorter side of the courtyard is $9$ m.`,
      `The longer side is $12$ m.`,
      `The perimeter of the courtyard is $42$ m.`,
      `The area of the courtyard is $120$ m$^{2}$.`,
      `A square courtyard with side $12$ m would have diagonal $12\\sqrt{2}$ m.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ metres. Then the length is $w + 3$, and the diagonal is $15$ m.

$$w^{2} + (w + 3)^{2} = 225$$

$$w^{2} + w^{2} + 6w + 9 = 225$$

$$2w^{2} + 6w - 216 = 0$$

$$w^{2} + 3w - 108 = 0$$

$$\\Delta = 9 + 432 = 441 = 21^{2}$$

$$w = \\frac{-3 \\pm 21}{2}$$

The positive root is $w = 9$. Check: $9^{2} + 12^{2} = 81 + 144 = 225$. The shorter side is $9$ m. The statement is True.`,
      `**B.** → True

Length $9 + 3 = 12$ m, and $9^{2} + 12^{2} = 225$. The statement is True.`,
      `**C.** → True

$$P = 2(9 + 12) = 42$$

The perimeter is $42$ m. The statement is True.`,
      `**D.** → False

$$9 \\cdot 12 = 108$$

The claim says $120$. One hundred twenty would be $10 \\cdot 12$ or $8 \\cdot 15$. The area is $108$ m$^{2}$, so the statement is False.`,
      `**E.** → True

A square of side $12$ has diagonal $\\sqrt{12^{2} + 12^{2}} = \\sqrt{288} = 12\\sqrt{2}$. That is longer than $15$, because $12\\sqrt{2} \\approx 17.0$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 53,
    solution_overview: `One courtyard, five checks. Width $w$, length $w + 3$, diagonal $15$ give $w^{2} + (w + 3)^{2} = 225$. The positive width is $9$ m, so the rectangle is $9$ by $12$. Later letters read perimeter, area, and a comparison square off those sides.`,
  },
  {
    id: `math-4-54`,
    case_id: `MATH 4.54`,
    title: `Two pipes together in $6$ hours, one $5$ hours slower`,
    subsection: `4.2`,
    context: `Two pipes fill a tank together in $6$ hours. One pipe, working alone, is $5$ hours slower than the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The faster pipe alone takes $10$ hours.`,
      `The slower pipe alone takes $15$ hours.`,
      `The faster pipe alone takes $8$ hours.`,
      `In $3$ hours together they fill half the tank.`,
      `Their combined rate is $\\frac{1}{6}$ of the tank per hour.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let the faster pipe take $t$ hours alone. Then the slower takes $t + 5$ hours, and together they do one tank in $6$ hours.

$$\\frac{1}{t} + \\frac{1}{t + 5} = \\frac{1}{6}$$

$$\\frac{2t + 5}{t(t + 5)} = \\frac{1}{6}$$

$$6(2t + 5) = t^{2} + 5t$$

$$t^{2} - 7t - 30 = 0$$

$$(t - 10)(t + 3) = 0$$

The positive root is $t = 10$. The faster pipe takes $10$ hours. The statement is True.`,
      `**B.** → True

The slower pipe takes $10 + 5 = 15$ hours. Check: $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{1}{6}$. The statement is True.`,
      `**C.** → False

Eight hours for the faster pipe would force $13$ hours for the slower. Then

$$\\frac{1}{8} + \\frac{1}{13} = \\frac{13 + 8}{104} = \\frac{21}{104}$$

while $\\frac{1}{6} = \\frac{21}{126}$, and $\\frac{21}{104} \\neq \\frac{1}{6}$. The recovered time is $10$ hours. The statement is False.`,
      `**D.** → True

Together they fill $\\frac{1}{6}$ of the tank each hour, so in $3$ hours they fill $\\frac{3}{6} = \\frac{1}{2}$. The statement is True.`,
      `**E.** → True

That is the together-in-$6$-hours rate: one tank in $6$ hours is $\\frac{1}{6}$ of a tank per hour. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `One tank, five checks. Rates $\\frac{1}{t} + \\frac{1}{t + 5} = \\frac{1}{6}$ give $t^{2} - 7t - 30 = 0$, so the times are $10$ hours and $15$ hours. Three hours together is half the tank.`,
  },
  {
    id: `math-4-55`,
    case_id: `MATH 4.55`,
    title: `The reciprocal relation $x = 2 + \\frac{6}{x}$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `One solution of $x = 2 + \\frac{6}{x}$ is $x = 3$.`,
      `That equation rearranges to $x^{2} - 2x - 6 = 0$.`,
      `The two real solutions are $1 + \\sqrt{7}$ and $1 - \\sqrt{7}$.`,
      `The product of the two roots is $6$.`,
      `The sum of the two roots is $2$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

If $x = 3$, the right-hand side is $2 + \\frac{6}{3} = 2 + 2 = 4$, which is not $3$. Three is not a solution. The statement is False.`,
      `**B.** → True

Multiply through by $x$ (and $x \\neq 0$, which cannot solve the original anyway):

$$x^{2} = 2x + 6$$

$$x^{2} - 2x - 6 = 0$$

The statement is True.`,
      `**C.** → True

$$\\Delta = 4 + 24 = 28 = 4 \\cdot 7$$

$$x = \\frac{2 \\pm 2\\sqrt{7}}{2} = 1 \\pm \\sqrt{7}$$

Those are the two real roots. The statement is True.`,
      `**D.** → False

For $x^{2} - 2x - 6 = 0$ the product of the roots is the constant term, $-6$, not $6$. Check: $(1 + \\sqrt{7})(1 - \\sqrt{7}) = 1 - 7 = -6$. The statement is False.`,
      `**E.** → True

The sum of the roots of $x^{2} - 2x - 6 = 0$ is $2$. Check: $(1 + \\sqrt{7}) + (1 - \\sqrt{7}) = 2$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 55,
    solution_overview: `Five independent claims about $x = 2 + \\frac{6}{x}$. Clearing the denominator produces $x^{2} - 2x - 6 = 0$, whose roots are $1 \\pm \\sqrt{7}$. Their sum is $2$ and their product is $-6$.`,
  },
  {
    id: `math-4-56`,
    case_id: `MATH 4.56`,
    title: `A $+5$ cm rectangle, consecutive product $132$, and $x^{2} - x + 1$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A rectangle is $5$ cm longer than it is wide, and its area is $36$ cm$^{2}$. The sides are $4$ cm and $9$ cm.`,
      `Two consecutive positive integers multiply to $132$. They are $11$ and $12$.`,
      `A body travels $5t^{2}$ metres in $t$ seconds. It has gone $180$ m after $5$ seconds.`,
      `The equation $x^{2} - x + 1 = 0$ has two distinct real roots.`,
      `Two numbers add to $20$ and multiply to $96$. They are $8$ and $12$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then

$$w(w + 5) = 36$$

$$w^{2} + 5w - 36 = 0$$

$$\\Delta = 25 + 144 = 169 = 13^{2}$$

$$w = \\frac{-5 \\pm 13}{2}$$

The positive value is $w = 4$, so the length is $9$. Check: $4 \\cdot 9 = 36$. The statement is True.`,
      `**B.** → True

$$n(n + 1) = 132$$

$$n^{2} + n - 132 = 0$$

$$\\Delta = 1 + 528 = 529 = 23^{2}$$

$$n = \\frac{-1 \\pm 23}{2}$$

The positive root is $n = 11$, so the pair is $11$ and $12$. Check: $11 \\cdot 12 = 132$. The statement is True.`,
      `**C.** → False

After $5$ seconds the distance is $5 \\cdot 5^{2} = 125$ m, not $180$. The $180$ m mark is at $t = 6$, because $5 \\cdot 6^{2} = 180$. The statement is False.`,
      `**D.** → False

$$\\Delta = 1 - 4 = -3 < 0$$

No real roots. Completing the square gives $\\left(x - \\frac{1}{2}\\right)^{2} + \\frac{3}{4} = 0$, a square plus a positive number, which cannot be zero. The statement is False.`,
      `**E.** → True

Numbers with sum $20$ and product $96$ are the roots of $t^{2} - 20t + 96 = 0$.

$$\\Delta = 400 - 384 = 16$$

$$t = \\frac{20 \\pm 4}{2}$$

so $t = 12$ or $t = 8$. Check: $8 + 12 = 20$ and $8 \\cdot 12 = 96$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 56,
    solution_overview: `Five independent quadratic stories: a $4$ by $9$ rectangle, consecutive integers with product $132$, a $5t^{2}$ motion reading, $x^{2} - x + 1 = 0$ with negative discriminant, and the pair with sum $20$ and product $96$.`,
  },
  {
    id: `math-4-57`,
    case_id: `MATH 4.57`,
    title: `Three over a number equals one fourth`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Three litres of oil, poured as equal shares, fill a jerrycan if each share is one-fourth of the jerrycan. Then the jerrycan holds $12$ litres.`,
      `The equation $\\frac{3}{x} = \\frac{1}{4}$ is undefined at $x = 0$.`,
      `That same equation has solution $x = 3$.`,
      `Check: $\\frac{3}{12} = \\frac{1}{4}$.`,
      `The number $-12$ also solves $\\frac{3}{x} = \\frac{1}{4}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Each share is $\\frac{1}{4}$ of the jerrycan, and three shares make the whole fill, so four shares would be the full capacity.

$$\\frac{3}{x} = \\frac{1}{4} \\quad \\Rightarrow \\quad x = 12$$

Twelve litres. The statement is True.`,
      `**B.** → True

The left side has denominator $x$. At $x = 0$ you would divide by zero. That value is not allowed. The statement is True.`,
      `**C.** → False

At $x = 3$ you get $\\frac{3}{3} = 1$, not $\\frac{1}{4}$. The recovered capacity is $12$ litres. The statement is False.`,
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
      `That number is $1$.`,
      `The fraction is undefined when the number is $-2$.`,
      `The number $4$ also gives the ratio $\\frac{1}{3}$.`,
      `You may cross-multiply even at $x = -2$.`,
      `The number that works is $3$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x + 2} = \\frac{1}{3}$$

with $x \\neq -2$. Then $3x = x + 2$, so $2x = 2$ and $x = 1$. Check: $\\frac{1}{3} = \\frac{1}{3}$. The statement is True.`,
      `**B.** → True

The denominator $x + 2$ vanishes at $x = -2$. The original fraction is not defined there. The statement is True.`,
      `**C.** → False

$\\frac{4}{6} = \\frac{2}{3}$, not $\\frac{1}{3}$. The statement is False.`,
      `**D.** → False

Cross-multiplying assumes the denominators are not zero. At $x = -2$ the original equation is undefined, so that step is not allowed. The statement is False.`,
      `**E.** → False

At $x = 3$ the fraction is $\\frac{3}{5}$, not $\\frac{1}{3}$. The recovered value is $1$. The statement is False.`,
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
      `The equation $\\frac{2}{x} = 0$ has solution $x = 0$.`,
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
    title: `A square bed after 3 extra square metres`,
    subsection: `4.3`,
    context: `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. Let $x$ be the original area in square metres, so $\\sqrt{x + 3} = 4$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The new area is $16$ m$^{2}$.`,
      `The original area was $13$ m$^{2}$.`,
      `The original side was $\\sqrt{13}$ m.`,
      `The equation $\\sqrt{x + 3} = 4$ has solution $x = 13$.`,
      `The original area was $19$ m$^{2}$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A square of side $4$ m has area $16$ m$^{2}$. That is the bed after the extra soil. The statement is True.`,
      `**B.** → True

Original area $x$ satisfies $\\sqrt{x + 3} = 4$, so $x + 3 = 16$ and $x = 13$. The statement is True.`,
      `**C.** → True

The original area is $13$ m$^{2}$, so the original side is $\\sqrt{13}$ m. The statement is True.`,
      `**D.** → True

Squaring is safe here because both sides are nonnegative. Check: $\\sqrt{16} = 4$. The statement is True.`,
      `**E.** → False

Nineteen would be $16 + 3$, adding the extra soil instead of removing it. The original area is $13$ m$^{2}$. The statement is False.`,
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
    title: `Five over one less than a number equals 1`,
    subsection: `4.3`,
    context: `Five kilograms of flour, packed into bags of one kilogram less than a certain number of kilograms, fill exactly one such bag-count. In symbols $\\frac{5}{x - 1} = 1$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `That number of kilograms is $6$.`,
      `The denominator forbids $x = 1$.`,
      `Check: $\\frac{5}{5} = 1$.`,
      `Each bag then holds $5$ kg.`,
      `Clearing the denominator gives $5 = x - 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{5}{x - 1} = 1, \\quad x \\neq 1$$

so $5 = x - 1$ and $x = 6$. The statement is True.`,
      `**B.** → True

At $x = 1$ the left side is undefined. The statement is True.`,
      `**C.** → True

Bags of $6 - 1 = 5$ kg: $\\frac{5}{5} = 1$. The statement is True.`,
      `**D.** → True

One less than $6$ is $5$ kg per bag. The statement is True.`,
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
      `That number is $18$.`,
      `The courtyard has area $25$ m$^{2}$.`,
      `The equation $\\sqrt{x + 7} = 5$ has solution $x = 18$.`,
      `The number is $-18$.`,
      `After squaring, $x + 7 = 25$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\sqrt{x + 7} = 5 \\quad \\Rightarrow \\quad x + 7 = 25 \\quad \\Rightarrow \\quad x = 18$$

Check: $\\sqrt{25} = 5$. The statement is True.`,
      `**B.** → True

Side $5$ m gives area $25$ m$^{2}$. The statement is True.`,
      `**C.** → True

That is the same radical equation, and $x = 18$ checks. The statement is True.`,
      `**D.** → False

Negative eighteen would make $x + 7 = -11$, which cannot equal $25$ and cannot be a square of $5$. The statement is False.`,
      `**E.** → True

Both sides of $\\sqrt{x + 7} = 5$ are nonnegative, so squaring is valid and yields $x + 7 = 25$. The statement is True.`,
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
      `The number is $11$.`,
      `Squaring both sides gives $4x + 5 = 49$.`,
      `The number is $6$.`,
      `Check: $\\sqrt{44 + 5} = \\sqrt{49} = 7$.`,
      `The equation $\\sqrt{4x + 5} = -7$ has the same real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$4x + 5 = 49 \\quad \\Rightarrow \\quad 4x = 44 \\quad \\Rightarrow \\quad x = 11$$

The statement is True.`,
      `**B.** → True

The right-hand side $7$ is nonnegative, so squaring is allowed. The statement is True.`,
      `**C.** → False

At $x = 6$ you get $\\sqrt{24 + 5} = \\sqrt{29}$, not $7$. The recovered value is $11$. The statement is False.`,
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
      `The distance from $2x$ to $4$ is $4$.`,
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

The equation says that distance is $6$, not $4$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `One absolute-value equation $\\lvert 2x - 4 \\rvert = 6$, which splits into $2x - 4 = \\pm 6$. The solutions are $x = 5$ and $x = -1$.`,
  },
  {
    id: `math-4-66`,
    case_id: `MATH 4.66`,
    title: `Flour divided by 4 cups less than the flour`,
    subsection: `4.3`,
    context: `A baker uses a number of cups of flour that, divided by $4$ cups less than that number, equals $3$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The baker uses $6$ cups of flour.`,
      `Four cups less than the flour is $2$ cups.`,
      `The ratio is undefined when the flour is $4$ cups.`,
      `If the baker used $8$ cups of flour, the ratio would be $2$, not $3$.`,
      `The flour is three times that $2$-cup remainder.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{x - 4} = 3, \\quad x \\neq 4$$

gives $x = 3x - 12$, so $x = 6$. Check: $\\frac{6}{2} = 3$. The statement is True.`,
      `**B.** → True

$6 - 4 = 2$ cups. The statement is True.`,
      `**C.** → True

At $x = 4$ the denominator is zero. The original ratio is not defined. The statement is True.`,
      `**D.** → True

Eight cups would leave $4$ cups in the denominator, and $\\frac{8}{4} = 2$, not $3$. The statement is True.`,
      `**E.** → True

$6 = 3 \\cdot 2$, which is the same as the ratio $3$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `One rational equation $\\frac{x}{x - 4} = 3$. Exclude $x = 4$. The solution is $x = 6$ cups, remainder $2$ cups.`,
  },
  {
    id: `math-4-67`,
    case_id: `MATH 4.67`,
    title: `Two square gardens, smaller side plus 1 is 4`,
    subsection: `4.3`,
    context: `Two square gardens. The smaller has area $3$ m$^{2}$ less than the larger. The side of the smaller, plus $1$ m, equals $4$ m. So $\\sqrt{x - 3} + 1 = 4$, where $x$ is the larger area. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The larger garden has area $12$ m$^{2}$.`,
      `The smaller garden has area $9$ m$^{2}$.`,
      `The smaller garden has side $4$ m.`,
      `The larger garden has side $4$ m.`,
      `The two areas differ by $3$ m$^{2}$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\sqrt{x - 3} = 3 \\quad \\Rightarrow \\quad x - 3 = 9 \\quad \\Rightarrow \\quad x = 12$$

The statement is True.`,
      `**B.** → True

Smaller area $12 - 3 = 9$ m$^{2}$, and $\\sqrt{9} = 3$. The statement is True.`,
      `**C.** → False

The smaller side is $3$ m, not $4$. Four metres is that side plus one. The statement is False.`,
      `**D.** → False

The larger side is $\\sqrt{12} = 2\\sqrt{3}$ m, not $4$. The statement is False.`,
      `**E.** → True

That is the opening relation in the radical: the areas differ by $3$ m$^{2}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 67,
    solution_overview: `One radical equation $\\sqrt{x - 3} + 1 = 4$. Isolate the root, square, and recover larger area $12$ m$^{2}$ and smaller area $9$ m$^{2}$.`,
  },
  {
    id: `math-4-68`,
    case_id: `MATH 4.68`,
    title: `A temperature 4 degrees from 9`,
    subsection: `4.3`,
    context: `A stored reading is $4^{\\circ}\\mathrm{C}$ away from $9^{\\circ}\\mathrm{C}$, so $\\lvert x - 9 \\rvert = 4$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The reading is $13^{\\circ}\\mathrm{C}$ or $5^{\\circ}\\mathrm{C}$.`,
      `Both readings are positive.`,
      `The only possibility is $13^{\\circ}\\mathrm{C}$.`,
      `The two readings are centred at $9^{\\circ}\\mathrm{C}$.`,
      `Check: $\\lvert 13 - 9 \\rvert = 4$ and $\\lvert 5 - 9 \\rvert = 4$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

$$x - 9 = 4 \\quad \\text{or} \\quad x - 9 = -4$$

so $x = 13$ or $x = 5$. The statement is True.`,
      `**B.** → True

Both $13$ and $5$ are positive. The statement is True.`,
      `**C.** → False

Absolute value equal to $4$ always gives two points, one on each side of $9$. Five degrees is the other one. The statement is False.`,
      `**D.** → True

The midpoint of $5$ and $13$ is $9$. The statement is True.`,
      `**E.** → True

Both distances equal $4$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 68,
    solution_overview: `One absolute-value equation $\\lvert x - 9 \\rvert = 4$. The two readings are $13$ and $5$, centred at $9$.`,
  },
  {
    id: `math-4-69`,
    case_id: `MATH 4.69`,
    title: `A number equal to the square root of two more than itself`,
    subsection: `4.3`,
    context: `A number equals the square root of two more than the number: $\\sqrt{x + 2} = x$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number $2$ works.`,
      `The number $-1$ works.`,
      `Squaring both sides produces $x^{2} - x - 2 = 0$.`,
      `Both roots of that quadratic solve the original equation.`,
      `The original equation has only one real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

At $x = 2$: $\\sqrt{4} = 2$. Both sides match, and the right-hand side is nonnegative. The statement is True.`,
      `**B.** → False

At $x = -1$: $\\sqrt{1} = 1 \\neq -1$. A principal square root cannot equal a negative number. Minus one is an extra root of the squared equation. The statement is False.`,
      `**C.** → True

Require $x \\geq 0$, then $x + 2 = x^{2}$, so $x^{2} - x - 2 = 0$. The statement is True.`,
      `**D.** → False

The quadratic factors as $(x - 2)(x + 1) = 0$. Only $x = 2$ survives the check in the original radical equation. The statement is False.`,
      `**E.** → True

After discarding $x = -1$, only $x = 2$ remains. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `The radical equation $\\sqrt{x + 2} = x$. Squaring produces extras. Check in the original: only $x = 2$ works.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `Equally far from posts minus 1 and 5`,
    subsection: `4.3`,
    context: `A depot on a straight road is equally far from kilometre post $-1$ and kilometre post $5$, so $\\lvert x + 1 \\rvert = \\lvert x - 5 \\rvert$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The depot is at kilometre $2$.`,
      `Its distance to each of those posts is $3$ km.`,
      `The depot is at kilometre $3$.`,
      `That absolute-value equation has exactly one real solution.`,
      `Every point on the road is equally far from those two posts.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Equal distance from two points on a line is the midpoint: $\\frac{-1 + 5}{2} = 2$. Algebra: $x + 1 = -(x - 5)$ gives $x = 2$. The statement is True.`,
      `**B.** → True

$\\lvert 2 + 1 \\rvert = 3$ and $\\lvert 2 - 5 \\rvert = 3$. The statement is True.`,
      `**C.** → False

Kilometre $3$ is $4$ km from $-1$ and $2$ km from $5$. Those are not equal. The statement is False.`,
      `**D.** → True

$x + 1 = x - 5$ is impossible, so only the reflected case remains, one root. The statement is True.`,
      `**E.** → False

Only the midpoint is equally far from both posts. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 70,
    solution_overview: `The equation $\\lvert x + 1 \\rvert = \\lvert x - 5 \\rvert$ is the midpoint of $-1$ and $5$, so $x = 2$.`,
  },
  {
    id: `math-4-71`,
    case_id: `MATH 4.71`,
    title: `Twice over a number equals three over three more`,
    subsection: `4.3`,
    context: `Twice a number of litres, divided by that number, equals three litres divided by three more than the number: $\\frac{2}{x} = \\frac{3}{x + 3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number is $6$.`,
      `The equation is undefined at $x = 0$ and at $x = -3$.`,
      `The number is $3$.`,
      `Check: $\\frac{2}{6} = \\frac{1}{3}$ and $\\frac{3}{9} = \\frac{1}{3}$.`,
      `Cross-multiplying gives $2(x + 3) = 3x$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

For $x \\neq 0$ and $x \\neq -3$,

$$2(x + 3) = 3x \\quad \\Rightarrow \\quad 2x + 6 = 3x \\quad \\Rightarrow \\quad x = 6$$

The statement is True.`,
      `**B.** → True

Those two values zero a denominator. The statement is True.`,
      `**C.** → False

At $x = 3$: $\\frac{2}{3}$ versus $\\frac{3}{6} = \\frac{1}{2}$. They are not equal. The recovered value is $6$. The statement is False.`,
      `**D.** → True

Both sides equal $\\frac{1}{3}$. The statement is True.`,
      `**E.** → True

That is the cleared form, valid away from the two forbidden values. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `One rational equation $\\frac{2}{x} = \\frac{3}{x + 3}$. Exclude $0$ and $-3$, then $x = 6$.`,
  },
  {
    id: `math-4-72`,
    case_id: `MATH 4.72`,
    title: `A number plus its reciprocal is 13 over 6`,
    subsection: `4.3`,
    context: `A number plus its reciprocal equals $\\frac{13}{6}$: $x + \\frac{1}{x} = \\frac{13}{6}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `One such number is $\\frac{3}{2}$.`,
      `The other is $\\frac{2}{3}$.`,
      `The two numbers are reciprocals of each other.`,
      `Their sum is $\\frac{13}{6}$.`,
      `The number $1$ does not work.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Multiply $x + \\frac{1}{x} = \\frac{13}{6}$ by $6x$ ($x \\neq 0$):

$$6x^{2} - 13x + 6 = 0$$

$$x = \\frac{13 \\pm 5}{12}$$

so $x = \\frac{3}{2}$ or $x = \\frac{2}{3}$. Check: $\\frac{3}{2} + \\frac{2}{3} = \\frac{13}{6}$. The statement is True.`,
      `**B.** → True

That is the other root. The statement is True.`,
      `**C.** → True

$\\frac{3}{2} \\cdot \\frac{2}{3} = 1$. The statement is True.`,
      `**D.** → True

That is the given sum, and $\\frac{3}{2} + \\frac{2}{3} = \\frac{13}{6}$. The statement is True.`,
      `**E.** → True

$1 + 1 = 2 = \\frac{12}{6}$, not $\\frac{13}{6}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `The rational equation $x + \\frac{1}{x} = \\frac{13}{6}$ clears to $6x^{2} - 13x + 6 = 0$. The roots $\\frac{3}{2}$ and $\\frac{2}{3}$ are reciprocals.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `The principal square root is never negative`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square garden of area $9$ m$^{2}$ has side $-3$ m.`,
      `For every real number $x$, $\\sqrt{x^{2}} = x$.`,
      `For every real number $x$, $\\sqrt{x^{2}} = x$, including $x = -3$.`,
      `A square of area $9$ m$^{2}$ can have side $-3$ m as a length.`,
      `The equation $\\sqrt{x} = -3$ has no real solution.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

A length is positive. $\\sqrt{9} = 3$, not $-3$. The statement is False.`,
      `**B.** → False

If $x = -3$, then $\\sqrt{9} = 3$, not $-3$. The identity fails for negative $x$. The statement is False.`,
      `**C.** → False

Same counter-example: $\\sqrt{(-3)^{2}} = 3 \\neq -3$. The correct identity is $\\sqrt{x^{2}} = \\lvert x \\rvert$. The statement is False.`,
      `**D.** → False

A geometric side cannot be negative. The statement is False.`,
      `**E.** → True

The symbol $\\sqrt{x}$ means the nonnegative root. It cannot equal $-3$. Squaring would give $x = 9$, and $\\sqrt{9} = 3 \\neq -3$. No real solution. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `Five independent claims about the principal square root. $\\sqrt{x^{2}} = \\lvert x \\rvert$, not $x$. A negative right-hand side for $\\sqrt{x}$ is impossible.`,
  },
  {
    id: `math-4-74`,
    case_id: `MATH 4.74`,
    title: `Flour over sugar equals five fourths`,
    subsection: `4.3`,
    context: `A recipe uses $1$ cup more flour than sugar. Flour divided by sugar is $\\frac{5}{4}$, so $\\frac{s + 1}{s} = \\frac{5}{4}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recipe uses $4$ cups of sugar.`,
      `It uses $5$ cups of flour.`,
      `Sugar is $5$ cups.`,
      `The two amounts add to $8$ cups.`,
      `If sugar were $8$ cups, flour would be $9$ cups and the ratio would still be $\\frac{5}{4}$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$4(s + 1) = 5s, \\quad s \\neq 0 \\quad \\Rightarrow \\quad s = 4$$

Check: flour $5$, ratio $\\frac{5}{4}$. The statement is True.`,
      `**B.** → True

Flour is $4 + 1 = 5$ cups. The statement is True.`,
      `**C.** → False

Five cups is the flour, not the sugar. The statement is False.`,
      `**D.** → False

$4 + 5 = 9$ cups, not $8$. The statement is False.`,
      `**E.** → False

Sugar $8$ and flour $9$ give $\\frac{9}{8}$, not $\\frac{5}{4}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `One rational equation $\\frac{s + 1}{s} = \\frac{5}{4}$. The solution is $s = 4$ cups of sugar and $5$ cups of flour.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `Two more than a square's side is 6 m`,
    subsection: `4.3`,
    context: `A square lawn has side $\\sqrt{x}$ metres, and two more than that side is $6$ m: $\\sqrt{x} + 2 = 6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The side is $4$ m.`,
      `The area is $16$ m$^{2}$.`,
      `The side is $6$ m.`,
      `Isolating the root gives $\\sqrt{x} = 4$.`,
      `The area is $36$ m$^{2}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\sqrt{x} = 4 \\quad \\Rightarrow \\quad x = 16$$

The side is $4$ m. The statement is True.`,
      `**B.** → True

Area $4^{2} = 16$ m$^{2}$. The statement is True.`,
      `**C.** → False

Six metres is the side plus two, not the side. The statement is False.`,
      `**D.** → True

Subtract $2$ from both sides before squaring. The statement is True.`,
      `**E.** → False

Thirty-six would be $6^{2}$, as if the side were $6$ m. The area is $16$ m$^{2}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 75,
    solution_overview: `One radical equation $\\sqrt{x} + 2 = 6$. Isolate, square, and recover side $4$ m and area $16$ m$^{2}$.`,
  },
  {
    id: `math-4-76`,
    case_id: `MATH 4.76`,
    title: `A part 50 mm long, off by exactly 2 mm`,
    subsection: `4.3`,
    context: `A machine part is specified at $50$ mm. The inspector flags pieces whose length $x$ satisfies $\\lvert x - 50 \\rvert = 2$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two boundary lengths are $48$ mm and $52$ mm.`,
      `A piece of $50$ mm satisfies that equation.`,
      `A piece of $54$ mm is not on that $2$ mm boundary.`,
      `The equation has only one solution.`,
      `The two boundary lengths are centred at $50$ mm.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$x - 50 = 2$ or $x - 50 = -2$, so $x = 52$ or $x = 48$. The statement is True.`,
      `**B.** → False

At $50$ mm the error is $0$, not $2$. The statement is False.`,
      `**C.** → True

$\\lvert 54 - 50 \\rvert = 4$, which is not $2$. The statement is True.`,
      `**D.** → False

A positive right-hand side gives two solutions, one on each side of $50$. The statement is False.`,
      `**E.** → True

The midpoint of $48$ and $52$ is $50$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 76,
    solution_overview: `The absolute-value equation $\\lvert x - 50 \\rvert = 2$ is the $2$ mm boundary: $48$ mm and $52$ mm. The target $50$ mm itself is not on that boundary.`,
  },
  {
    id: `math-4-77`,
    case_id: `MATH 4.77`,
    title: `A rational, a radical, and an absolute value of 5`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Twice a number, divided by one less than the number, equals $1$. Then the number is $3$.`,
      `The square root of one less than a number equals one less than the number. The only real solution is $2$.`,
      `A number is $5$ units from $3$ on the line. The number is $-2$ or $8$.`,
      `A number's reciprocal, plus $\\frac{1}{6}$, equals $\\frac{1}{2}$. Then the number is $6$.`,
      `The equation $\\sqrt{2x - 3} = -1$ has a real solution.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{2}{x - 1} = 1, \\quad x \\neq 1 \\quad \\Rightarrow \\quad x = 3$$

Check: $\\frac{2}{2} = 1$. The statement is True.`,
      `**B.** → False

$\\sqrt{x - 1} = x - 1$ has two real solutions, $x = 1$ and $x = 2$, because $\\sqrt{u} = u$ for $u = 0$ and $u = 1$. Not only $2$. The statement is False.`,
      `**C.** → True

$\\lvert x - 3 \\rvert = 5$ gives $x = 8$ or $x = -2$. The statement is True.`,
      `**D.** → False

$$\\frac{1}{x} = \\frac{1}{2} - \\frac{1}{6} = \\frac{1}{3} \\quad \\Rightarrow \\quad x = 3$$

not $6$. Check of $3$: $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$. The statement is False.`,
      `**E.** → False

A principal square root is never negative. No real solution. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Five independent equations of the subsection: $\\frac{2}{x - 1} = 1$, $\\sqrt{x - 1} = x - 1$ with two surviving roots, $\\lvert x - 3 \\rvert = 5$, a reciprocal sum, and a square root equal to $-1$.`,
  },
  {
    id: `math-4-78`,
    case_id: `MATH 4.78`,
    title: `Three more than a number over three less equals 2`,
    subsection: `4.3`,
    context: `Three more than a number, divided by three less than the number, equals $2$: $\\frac{x + 3}{x - 3} = 2$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number is $9$.`,
      `The fraction is undefined at $x = 3$.`,
      `The number is $6$.`,
      `Check: $\\frac{12}{6} = 2$.`,
      `Cross-multiplying gives $x + 3 = 2(x - 3)$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

For $x \\neq 3$,

$$x + 3 = 2x - 6 \\quad \\Rightarrow \\quad 9 = x$$

The statement is True.`,
      `**B.** → True

The denominator $x - 3$ is zero at $x = 3$. The statement is True.`,
      `**C.** → False

At $x = 6$: $\\frac{9}{3} = 3$, not $2$. The recovered value is $9$. The statement is False.`,
      `**D.** → True

$9 + 3 = 12$ and $9 - 3 = 6$, and $\\frac{12}{6} = 2$. The statement is True.`,
      `**E.** → True

That is the cleared form, valid for $x \\neq 3$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `One rational equation $\\frac{x + 3}{x - 3} = 2$. Exclude $x = 3$, then $x = 9$.`,
  },
];
