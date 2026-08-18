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
    title: `A 20% acid vat, two litres drawn and replaced with water`,
    subsection: `4.1`,
    context: `A chemist has a vat of $20\\%$ acid. Two litres are drawn off and replaced with water. The mixture is then $16\\%$ acid. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The vat originally held $10$ litres.`,
      `The two litres drawn off contained $0.5$ litres of pure acid.`,
      `After the swap, $2$ litres of acid remain in the vat.`,
      `Adding the water increased the amount of acid.`,
      `The original volume was $12$ litres.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Let the original volume be $V$ litres. Then $0.20V$ litres of acid sit in the vat. Drawing $2$ litres removes $0.20 \\cdot 2 = 0.40$ litres of acid, so $0.20(V - 2)$ litres of acid remain, now diluted in $V$ litres.

$$\\frac{0.20(V - 2)}{V} = 0.16$$

$$0.20V - 0.40 = 0.16V$$

$$0.04V = 0.40$$

$$V = 10$$

The original volume is $10$ litres. The statement is True.`,
      `**B.** → False

The drawn liquid is still $20\\%$ acid, so those two litres hold $0.40$ litres of acid, not $0.5$. Half a litre would be $25\\%$ of the sample. The statement is False.`,
      `**C.** → False

Acid left: $0.20 \\cdot 8 = 1.6$ litres, not $2$. Two litres of acid would be the original amount in a $10$ litre vat before anything was drawn. The statement is False.`,
      `**D.** → False

Water carries no acid. The acid amount falls when the sample is drawn, then stays put. The statement is False.`,
      `**E.** → False

Twelve litres in the same model would finish at $\\frac{0.20 \\cdot 10}{12} \\approx 16.7\\%$, not $16\\%$. The recovered volume is $10$ litres. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `One dilution, five checks. Drawing $2$ litres of $20\\%$ acid and topping up with water leaves $0.20(V - 2)$ litres of acid in volume $V$. Setting the new concentration to $16\\%$ recovers $V = 10$.`,
  },
  {
    id: `math-4-16`,
    case_id: `MATH 4.16`,
    title: `Two cars, a 30 minute head start, $132$ km apart`,
    subsection: `4.1`,
    context: `Towns $X$ and $Y$ are $132$ km apart. At noon a car leaves $X$ toward $Y$ at $48$ km/h. Thirty minutes later a second car leaves $Y$ toward $X$ at $72$ km/h. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The cars meet $54$ minutes after noon.`,
      `The second car has been driving for $1$ hour when they meet.`,
      `The first car has covered $72$ km by the meeting.`,
      `They meet $40$ km from the midpoint of $XY$.`,
      `In the $30$ minute head start the first car covered $24$ km.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

In the first half hour the $48$ km/h car covers $24$ km, so $108$ km remains when the second car starts. They then close at $48 + 72 = 120$ km/h.

$$t = \\frac{108}{120} = 0.9$$

hours after $12{:}30$, which is $54$ minutes after noon. The statement is True.`,
      `**B.** → False

The second car drives those $0.9$ hours, which is $54$ minutes, not $1$ hour. One hour of the second car would cover $72$ km and would be a meeting only if $108$ km remained at $108$ km/h. The statement is False.`,
      `**C.** → False

The first car has been out for $1.4$ hours: $48 \\cdot 1.4 = 67.2$ km, not $72$. Seventy-two kilometres is one hour of the second car, or $1.5$ hours of the first. The statement is False.`,
      `**D.** → False

The midpoint is $66$ km from $X$. The meeting is $67.2$ km from $X$, so $1.2$ km past the midpoint, not $40$ km. The statement is False.`,
      `**E.** → True

Half an hour at $48$ km/h is $24$ km. That is the gap closed before the second car starts. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `One meeting, five checks. A $30$ minute head start at $48$ km/h leaves $108$ km. Closing speed $120$ km/h gives $0.9$ hours after $12{:}30$, so they meet $54$ minutes after noon.`,
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
    title: `Three denominators, LCD $12$`,
    subsection: `4.1`,
    context: `Evaluate each statement about $\\frac{x - 2}{3} - \\frac{2x + 1}{4} = \\frac{x}{6} - 2$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = \\frac{13}{4}$.`,
      `Clearing denominators yields the relation $4x = 13$.`,
      `The least common multiple of $3$, $4$, and $6$ is $12$.`,
      `The solution is $x = 4$.`,
      `At the recovered $x$, both sides equal $-\\frac{35}{24}$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $12$:

$$4(x - 2) - 3(2x + 1) = 2x - 24$$

$$4x - 8 - 6x - 3 = 2x - 24$$

$$-2x - 11 = 2x - 24$$

$$13 = 4x$$

$$x = \\frac{13}{4}$$

The statement is True.`,
      `**B.** → True

The last displayed line of that clearing is $4x = 13$. The statement is True.`,
      `**C.** → True

$12$ is a multiple of each of $3$, $4$, and $6$, and no smaller positive integer is. The statement is True.`,
      `**D.** → False

Four would give $4x = 16$, not $13$. Substituting $x = 4$ into the original makes the two sides unequal. The recovered value is $\\frac{13}{4}$. The statement is False.`,
      `**E.** → True

Left side: $\\frac{\\frac{13}{4} - 2}{3} - \\frac{\\frac{13}{2} + 1}{4} = \\frac{5}{12} - \\frac{15}{8} = -\\frac{35}{24}$.
Right side: $\\frac{13}{24} - 2 = -\\frac{35}{24}$. Both sides match. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `One linear equation with three denominators. The LCD $12$ produces $4x = 13$, so $x = \\frac{13}{4}$. Both sides then equal $-\\frac{35}{24}$.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Forty euros an hour, then sixty after 3 hours`,
    subsection: `4.1`,
    context: `A workshop bills $40$ EUR per hour for the first $3$ hours of a job and $60$ EUR per hour after that, plus a fixed $50$ EUR for parts. One job comes to $290$ EUR. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The job ran for $5$ hours.`,
      `Two of those hours were billed at the overtime rate.`,
      `Labour on the job was billed at $240$ EUR.`,
      `A $4$ hour job on the same tariff would also cost $290$ EUR.`,
      `The parts charge is less than one-fifth of the $290$ EUR bill.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

If the job lasted $h \\le 3$ hours, then $40h + 50 = 290$ would force $h = 6$, which contradicts $h \\le 3$. So $h > 3$:

$$40 \\cdot 3 + 60(h - 3) + 50 = 290$$

$$120 + 60h - 180 + 50 = 290$$

$$60h - 10 = 290$$

$$h = 5$$

Five hours. The statement is True.`,
      `**B.** → True

Overtime is $h - 3 = 2$ hours. The statement is True.`,
      `**C.** → True

Labour is $120 + 60 \\cdot 2 = 240$ EUR. Parts sit on top of that. The statement is True.`,
      `**D.** → False

Four hours: $120 + 60 \\cdot 1 + 50 = 230$ EUR, not $290$. The statement is False.`,
      `**E.** → True

Parts $50$ EUR, and $\\frac{50}{290} < \\frac{1}{5}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `One tariff, five checks. The $290$ EUR bill cannot come from the $40$ EUR band alone. Overtime at $60$ EUR after $3$ hours recovers $h = 5$.`,
  },
  {
    id: `math-4-20`,
    case_id: `MATH 4.20`,
    title: `A clock that gains 4 minutes per true hour`,
    subsection: `4.1`,
    context: `A clock is set right at noon and gains $4$ minutes in every true hour, so it runs $64$ minutes of its own for every $60$ true minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `When the clock first shows $8$ pm, the true time is $7{:}20$ pm.`,
      `The clock runs $64$ of its own minutes in $60$ true minutes.`,
      `When the clock first shows $8$ pm, the true time is $7{:}30$ pm.`,
      `True time is $8$ hours minus $4 \\cdot 8 = 32$ minutes, hence $7{:}28$ pm.`,
      `After $4$ true hours the clock shows $4{:}20$.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

When the clock shows $8$ hours it has counted $480$ of its minutes. True minutes after noon are $480 \\cdot \\frac{60}{64} = 450$, which is $7$ hours $30$ minutes, not $7{:}20$. The statement is False.`,
      `**B.** → True

A gain of $4$ minutes per true hour means $64$ clock minutes per $60$ true minutes. That is the opening relation. The statement is True.`,
      `**C.** → True

As in A, $450$ true minutes after noon is $7{:}30$ pm. The statement is True.`,
      `**D.** → False

Subtracting $4$ minutes for each hour the clock shows treats the gain as if it were $4$ minutes of true time per clock hour. The correct factor is $\\frac{60}{64}$, and the true time is $7{:}30$ pm, not $7{:}28$. The statement is False.`,
      `**E.** → False

Four true hours put $4 \\cdot 64 = 256$ minutes on the clock, which is $4$ hours $16$ minutes, not $4{:}20$. Twenty extra minutes would be a $5$ minute gain each hour. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `One fast clock, five checks. The clock runs $64$ of its minutes per $60$ true minutes. True time is clock time times $\\frac{60}{64}$, not a flat $4$ minutes subtracted per hour shown.`,
  },
  {
    id: `math-4-21`,
    case_id: `MATH 4.21`,
    title: `Father four times the son, twice as old in 20 years`,
    subsection: `4.1`,
    context: `A father is now four times as old as his son. In $20$ years the father will be twice as old as the son will be then. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The son is now $10$ years old.`,
      `The father is now $40$ years old.`,
      `In $20$ years the father will be $50$.`,
      `The two ages differ by $30$ years.`,
      `Five years ago the father was five times as old as the son was then.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the son's present age be $s$ years. The father is $4s$. In twenty years:

$$4s + 20 = 2(s + 20)$$

$$4s + 20 = 2s + 40$$

$$2s = 20$$

$$s = 10$$

The son is $10$. The statement is True.`,
      `**B.** → True

The father is $4 \\cdot 10 = 40$. In twenty years they are $30$ and $60$, and $60 = 2 \\cdot 30$. The statement is True.`,
      `**C.** → False

In twenty years the father is $60$, not $50$. Fifty would be a ten-year jump. The statement is False.`,
      `**D.** → True

$$40 - 10 = 30$$

The gap is fixed. The statement is True.`,
      `**E.** → False

Five years ago they were $35$ and $5$, and $35 = 7 \\cdot 5$, not five times. Five times would have been the claim $25$ and $5$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `One family, five checks. Present ages $4s$ and $s$, and $4s + 20 = 2(s + 20)$, recover $s = 10$ and father $40$.`,
  },
  {
    id: `math-4-22`,
    case_id: `MATH 4.22`,
    title: `Two trains, $150$ m and $250$ m, opposite at $54$ and $36$ km/h`,
    subsection: `4.1`,
    context: `Two trains $150$ m and $250$ m long run toward each other on parallel tracks at $54$ km/h and $36$ km/h. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `From the instant their fronts meet until they have completely passed takes $12$ seconds.`,
      `While they pass they must cover $400$ m relative to one another.`,
      `Their closing speed $90$ km/h is $20$ m/s.`,
      `The passing time is $16$ seconds.`,
      `If they ran in the same direction, they would take $40$ seconds to pass.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Passing time is combined length over relative speed. Combined length $400$ m. Relative speed $90$ km/h $= 90 \\cdot \\frac{5}{18} = 25$ m/s, so $t = \\frac{400}{25} = 16$ seconds, not $12$. Twelve seconds would need $400$ m at about $33$ m/s. The statement is False.`,
      `**B.** → True

Each train must clear the other's full length, so the relative path is $150 + 250 = 400$ m. The statement is True.`,
      `**C.** → False

$$90 \\cdot \\frac{5}{18} = 25$$

metres per second, not $20$. Twenty m/s is $72$ km/h. The statement is False.`,
      `**D.** → True

$$\\frac{400}{25} = 16$$

seconds. The statement is True.`,
      `**E.** → False

Same direction: relative speed $18$ km/h $= 5$ m/s, so $t = \\frac{400}{5} = 80$ seconds, not $40$. Forty seconds is what you get if you forget one of the lengths. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `One passing, five checks. Opposite trains cover the sum of their lengths at the sum of their speeds. Convert $90$ km/h to $25$ m/s to obtain $16$ seconds.`,
  },
  {
    id: `math-4-23`,
    case_id: `MATH 4.23`,
    title: `Forty litres at 20%, then water, then a 50% stock`,
    subsection: `4.1`,
    context: `A vat holds $40$ litres of $20\\%$ acid. Ten litres of water are added. Then a $50\\%$ acid stock is poured in until the mixture is $25\\%$ acid. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After the water is added, the vat is $16\\%$ acid.`,
      `Then $18$ litres of the $50\\%$ stock must be added.`,
      `The final volume is $68$ litres.`,
      `The final mixture contains $20$ litres of acid.`,
      `The final mixture contains $17$ litres of acid.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The original $40$ litres hold $8$ litres of acid. Water does not add acid, so after $10$ litres of water there are $8$ litres of acid in $50$ litres.

$$\\frac{8}{50} = 0.16$$

The vat is then $16\\%$ acid. The statement is True.`,
      `**B.** → True

Let $x$ litres of $50\\%$ stock be added.

$$8 + 0.50x = 0.25(50 + x)$$

$$8 + 0.50x = 12.5 + 0.25x$$

$$0.25x = 4.5$$

$$x = 18$$

Eighteen litres of stock. The statement is True.`,
      `**C.** → True

$$50 + 18 = 68$$

litres. The statement is True.`,
      `**D.** → False

Final acid is $8 + 0.50 \\cdot 18 = 8 + 9 = 17$ litres, not $20$. Twenty litres would be $8 + 12$, as if $24$ litres of stock had been used. The statement is False.`,
      `**E.** → True

Seventeen litres in $68$ litres is $\\frac{17}{68} = 0.25$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 23,
    solution_overview: `One vat, two operations. Water first drops $40$ litres at $20\\%$ to $50$ litres at $16\\%$. Then $x$ litres at $50\\%$ are added to hit $25\\%$, so $x = 18$.`,
  },
  {
    id: `math-4-24`,
    case_id: `MATH 4.24`,
    title: `A $1.5$ m path around a field $8$ m longer than it is wide`,
    subsection: `4.1`,
    context: `A rectangular field is $8$ m longer than it is wide. A path $1.5$ m wide runs around the outside and covers $141$ m$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The field is $15$ m wide.`,
      `The field is $18$ m wide.`,
      `The field is $26$ m long.`,
      `The path area $141$ m$^{2}$ matches those sides.`,
      `The outer perimeter of the path is $100$ m.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ metres. The field is $w$ by $w + 8$, and the outer rectangle is $w + 3$ by $w + 11$.

$$(w + 3)(w + 11) - w(w + 8) = 141$$

$$6w + 33 = 141$$

$$w = 18$$

not $15$. Fifteen metres would make the path $6 \\cdot 15 + 33 = 123$ m$^{2}$. The statement is False.`,
      `**B.** → True

The recovered width is $18$ m. The statement is True.`,
      `**C.** → True

Length $18 + 8 = 26$ m. The statement is True.`,
      `**D.** → True

Outer $21$ by $29$: $21 \\cdot 29 - 18 \\cdot 26 = 609 - 468 = 141$. The statement is True.`,
      `**E.** → True

$$2(21 + 29) = 100$$

metres. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `One field and a uniform $1.5$ m path. Outer minus inner equals $141$ m$^{2}$ and simplifies to $6w + 33 = 141$, so the field is $18$ m by $26$ m.`,
  },
  {
    id: `math-4-25`,
    case_id: `MATH 4.25`,
    title: `A and B for two days, then C joins`,
    subsection: `4.1`,
    context: `$A$ finishes a job in $12$ days, $B$ in $18$ days, and $C$ in $24$ days. $A$ and $B$ work together for $2$ days, then $C$ joins them until the job is done. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $C$ joins, the three still need $6$ days.`,
      `After the first two days, $\\frac{13}{18}$ of the job remains.`,
      `Then all three need $4$ more days.`,
      `$C$ alone would finish that remainder in $8$ days.`,
      `The combined rate of $A$, $B$, and $C$ is $\\frac{13}{72}$ of a job per day.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

$A$ and $B$ together do $\\frac{1}{12} + \\frac{1}{18} = \\frac{5}{36}$ per day, so two days complete $\\frac{10}{36} = \\frac{5}{18}$. Remaining $\\frac{13}{18}$. All three do $\\frac{5}{36} + \\frac{1}{24} = \\frac{13}{72}$ per day, so the rest takes $\\frac{13/18}{13/72} = 4$ days, not $6$. The statement is False.`,
      `**B.** → True

$$1 - \\frac{5}{18} = \\frac{13}{18}$$

The statement is True.`,
      `**C.** → True

Four more days at $\\frac{13}{72}$ per day finish exactly $\\frac{13}{18}$. The statement is True.`,
      `**D.** → False

$C$ does $\\frac{1}{24}$ per day, so the remainder takes $\\frac{13}{18} \\cdot 24 = \\frac{52}{3}$ days, a little over $17$, not $8$. The statement is False.`,
      `**E.** → True

$$\\frac{1}{12} + \\frac{1}{18} + \\frac{1}{24} = \\frac{6 + 4 + 3}{72} = \\frac{13}{72}$$

The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 25,
    solution_overview: `One job, three rates. $A$ and $B$ for two days leave $\\frac{13}{18}$. Then $A+B+C = \\frac{13}{72}$ per day finishes the rest in $4$ days.`,
  },
  {
    id: `math-4-26`,
    case_id: `MATH 4.26`,
    title: `Three hundred kilometres, a 30 minute rest, two speeds`,
    subsection: `4.1`,
    context: `A $300$ km journey is scheduled to take $5$ hours of clock time, including a $30$ minute rest. The driver holds $80$ km/h before the rest and $40$ km/h after it. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `He drove for $3$ hours at $80$ km/h.`,
      `The slower driving spell lasted $1.5$ hours.`,
      `He covered $240$ km at the higher speed.`,
      `His average speed for the whole $5$ hours of clock time is $60$ km/h.`,
      `Without the rest the same driving would take $3$ hours.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Driving time is $5 - 0.5 = 4.5$ hours. Let $t$ hours be driven at $80$ km/h. Then $4.5 - t$ hours are driven at $40$ km/h.

$$80t + 40(4.5 - t) = 300$$

$$80t + 180 - 40t = 300$$

$$40t = 120$$

$$t = 3$$

Three hours at $80$ km/h. The statement is True.`,
      `**B.** → True

$$4.5 - 3 = 1.5$$

hours at $40$ km/h. The statement is True.`,
      `**C.** → True

$$80 \\cdot 3 = 240$$

km. The statement is True.`,
      `**D.** → True

Average speed uses clock time, rest included: $\\frac{300}{5} = 60$ km/h. The statement is True.`,
      `**E.** → False

Driving time is already $4.5$ hours. Dropping the rest shortens the clock to $4.5$ hours, not $3$. Three hours would require $100$ km/h the whole way. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 26,
    solution_overview: `One journey with a rest. Clock $5$ hours, rest $0.5$ hours, so $4.5$ hours of driving split between $80$ km/h and $40$ km/h add to $300$ km and recover $t = 3$ hours at the higher speed.`,
  },
  {
    id: `math-4-27`,
    case_id: `MATH 4.27`,
    title: `A beats B by $20$ m, B beats C by $25$ m, in $100$ m`,
    subsection: `4.1`,
    context: `In a $100$ m race, $A$ beats $B$ by $20$ m, and $B$ beats $C$ by $25$ m. Speeds stay constant. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `When $A$ has run $100$ m, $C$ has run $60$ m.`,
      `The speed ratio of $A$ to $B$ is $4 : 5$.`,
      `$A$ beats $C$ by $50$ m in a $100$ m race.`,
      `The speed ratio of $A$ to $C$ is $5 : 3$.`,
      `When $A$ has run $100$ m, $B$ has run $80$ m.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

When $A$ runs $100$ m, $B$ has run $80$ m. When $B$ runs $100$ m, $C$ has run $75$ m, so when $B$ runs $80$ m,

$$C \\text{ runs } 80 \\cdot \\frac{75}{100} = 60$$

metres. In the time $A$ runs $100$ m, $C$ runs $60$ m. The statement is True.`,
      `**B.** → False

$A : B = 100 : 80 = 5 : 4$, not $4 : 5$. The claim reverses the ratio. The statement is False.`,
      `**C.** → False

$A$ beats $C$ by $40$ m in a $100$ m race, not $50$. Fifty metres would be a $2 : 1$ speed ratio. The statement is False.`,
      `**D.** → True

$$A : C = 100 : 60 = 5 : 3$$

The statement is True.`,
      `**E.** → True

That is the opening handicap: $A$ beats $B$ by $20$ m in $100$ m. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 27,
    solution_overview: `Two race handicaps chained. $A:B = 5:4$ and $B:C = 4:3$, so $A:C = 5:3$. When $A$ runs $100$ m, $C$ has run $60$ m.`,
  },
  {
    id: `math-4-28`,
    case_id: `MATH 4.28`,
    title: `Subtract 3 and divide by 4, versus a third of the number minus 2`,
    subsection: `4.1`,
    context: `A number has this property: if you subtract $3$ and divide by $4$, you get $2$ less than one-third of the number. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number is $15$.`,
      `One-third of the number is $4$.`,
      `Check: $\\frac{15 - 3}{4} = 3$ and $\\frac{15}{3} - 2 = 3$.`,
      `The number is $12$.`,
      `Clearing the equation multiplies through by $12$ and produces $3(x - 3) = 4x - 24$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x - 3}{4} = \\frac{x}{3} - 2$$

Multiply through by $12$:

$$3(x - 3) = 4x - 24$$

$$3x - 9 = 4x - 24$$

$$x = 15$$

The statement is True.`,
      `**B.** → False

One-third of $15$ is $5$, not $4$. Four would be one-third of $12$. The statement is False.`,
      `**C.** → True

Both sides equal $3$. The statement is True.`,
      `**D.** → False

At $x = 12$ the left side is $\\frac{9}{4}$ and the right side is $2$, which are not equal. The recovered number is $15$. The statement is False.`,
      `**E.** → True

The original equation is $\\frac{x - 3}{4} = \\frac{x}{3} - 2$. The denominators $4$ and $3$ have LCD $12$, and multiplying through by $12$ is exactly $3(x - 3) = 4x - 24$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 28,
    solution_overview: `One nested linear relation $\\frac{x - 3}{4} = \\frac{x}{3} - 2$. Clearing by $12$ recovers $x = 15$.`,
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
    title: `Completing the square for $x^{2} - \\frac{7}{2}x - 2$`,
    subsection: `4.2`,
    context: `Evaluate each statement about $x^{2} - \\frac{7}{2}x - 2 = 0$. Mark it TRUE or FALSE.`,
    statements: [
      `Completing the square produces $\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16}$.`,
      `The two real roots are $2$ and $\\frac{1}{2}$.`,
      `Both roots are positive.`,
      `The positive root is $4$.`,
      `The product of the roots is $2$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Half of $\\frac{7}{2}$ is $\\frac{7}{4}$, and $\\left(\\frac{7}{4}\\right)^{2} = \\frac{49}{16}$.

$$x^{2} - \\frac{7}{2}x = 2$$

$$x^{2} - \\frac{7}{2}x + \\frac{49}{16} = 2 + \\frac{49}{16} = \\frac{81}{16}$$

$$\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16}$$

The statement is True.`,
      `**B.** → False

$$x - \\frac{7}{4} = \\pm \\frac{9}{4}$$

so $x = 4$ or $x = -\\frac{1}{2}$, not $2$ and $\\frac{1}{2}$. The statement is False.`,
      `**C.** → False

$4$ is positive, but $-\\frac{1}{2}$ is not. The statement is False.`,
      `**D.** → True

The two roots are $4$ and $-\\frac{1}{2}$. The positive one is $4$. Check: $16 - 14 - 2 = 0$. The statement is True.`,
      `**E.** → False

For $x^{2} - \\frac{7}{2}x - 2 = 0$ the product of the roots is $-2$, not $2$. Check: $4 \\cdot \\left(-\\frac{1}{2}\\right) = -2$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 41,
    solution_overview: `Completing the square on $x^{2} - \\frac{7}{2}x - 2 = 0$ centres at $\\frac{7}{4}$ and yields $\\left(x - \\frac{7}{4}\\right)^{2} = \\frac{81}{16}$. The roots are $4$ and $-\\frac{1}{2}$.`,
  },
  {
    id: `math-4-42`,
    case_id: `MATH 4.42`,
    title: `A $24$ by $16$ picture whose frame doubles the area`,
    subsection: `4.2`,
    context: `A rectangular picture measures $24$ cm by $16$ cm. A uniform frame of width $x$ cm surrounds it, and the outer area is twice the area of the picture. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The frame is $4$ cm wide.`,
      `The outer rectangle is $32$ cm by $24$ cm.`,
      `The outer area is $768$ cm$^{2}$.`,
      `The wood itself has area $500$ cm$^{2}$.`,
      `The wood itself has area $384$ cm$^{2}$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The picture has area $384$ cm$^{2}$, so the outer area is $768$ cm$^{2}$.

$$(24 + 2x)(16 + 2x) = 768$$

$$x^{2} + 20x - 96 = 0$$

$$\\Delta = 400 + 384 = 784 = 28^{2}$$

$$x = \\frac{-20 + 28}{2} = 4$$

(the positive root). The statement is True.`,
      `**B.** → True

Outer sides $24 + 8 = 32$ and $16 + 8 = 24$. The statement is True.`,
      `**C.** → True

$$32 \\cdot 24 = 768$$

which is twice $384$. The statement is True.`,
      `**D.** → False

Wood is outer minus picture: $768 - 384 = 384$ cm$^{2}$, not $500$. The statement is False.`,
      `**E.** → True

That $384$ cm$^{2}$ of wood equals the picture's own area, which is the opening 'twice' condition. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 42,
    solution_overview: `One frame. Outer area twice $24 \\cdot 16 = 384$ forces $(24 + 2x)(16 + 2x) = 768$. The positive width is $x = 4$ cm.`,
  },
  {
    id: `math-4-43`,
    case_id: `MATH 4.43`,
    title: `Two numbers that differ by $7$ and multiply to $198$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The positive pair is $11$ and $18$.`,
      `There is also a negative pair, $-18$ and $-11$.`,
      `The positive pair adds to $29$.`,
      `The discriminant of $n^{2} + 7n - 198$ is a perfect square.`,
      `If $n$ is the smaller member of a pair, then $n(n + 7) = 198$ has two integer solutions.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$n(n + 7) = 198$$

$$n^{2} + 7n - 198 = 0$$

$$\\Delta = 49 + 792 = 841 = 29^{2}$$

$$n = \\frac{-7 \\pm 29}{2}$$

The positive root is $n = 11$, so the pair is $11$ and $18$. Check: $11 \\cdot 18 = 198$. The statement is True.`,
      `**B.** → True

The other root is $n = -18$, so the pair is $-18$ and $-11$. The statement is True.`,
      `**C.** → True

$$11 + 18 = 29$$

The statement is True.`,
      `**D.** → True

$\\Delta = 841 = 29^{2}$. The statement is True.`,
      `**E.** → True

The two integer solutions for $n$ are $11$ and $-18$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Five claims about $n(n + 7) = 198$. The discriminant $841$ is $29^{2}$, so the integer values of the smaller member are $n = 11$ and $n = -18$.`,
  },
  {
    id: `math-4-44`,
    case_id: `MATH 4.44`,
    title: `Length $1$ more than twice the width, area $36$`,
    subsection: `4.2`,
    context: `A rectangle has area $36$ cm$^{2}$, and its length is $1$ cm more than twice its width. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is $6$ cm.`,
      `The length is $12$ cm.`,
      `The perimeter is $40$ cm.`,
      `Width $5$ cm and length $11$ cm would give area $36$ cm$^{2}$.`,
      `The width is $4$ cm.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ cm. Then the length is $2w + 1$, and

$$w(2w + 1) = 36$$

$$2w^{2} + w - 36 = 0$$

$$\\Delta = 1 + 288 = 289 = 17^{2}$$

$$w = \\frac{-1 + 17}{4} = 4$$

not $6$. Width $6$ would force length $13$ and area $78$. The statement is False.`,
      `**B.** → False

Length $2 \\cdot 4 + 1 = 9$ cm, not $12$. The statement is False.`,
      `**C.** → False

$$P = 2(4 + 9) = 26$$

not $40$. The statement is False.`,
      `**D.** → False

$5 \\cdot 11 = 55$, not $36$, and $11$ is not $1$ more than twice $5$. The statement is False.`,
      `**E.** → True

The positive root is $w = 4$. Check: $4 \\cdot 9 = 36$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `One rectangle. $w(2w + 1) = 36$ is the quadratic $2w^{2} + w - 36 = 0$. The positive width is $4$ cm, so the length is $9$ cm.`,
  },
  {
    id: `math-4-45`,
    case_id: `MATH 4.45`,
    title: `Height $h = 20t - 5t^{2}$ metres after $t$ seconds`,
    subsection: `4.2`,
    context: `A stone is thrown upward so that its height in metres after $t$ seconds is $h = 20t - 5t^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $1$ second the height is $15$ m.`,
      `The maximum height is $20$ m.`,
      `The maximum occurs at $t = 3$ seconds.`,
      `The stone is back at ground level after $3$ seconds.`,
      `After $2$ seconds the height is $30$ m.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

$$h(1) = 20 - 5 = 15$$

The statement is True.`,
      `**B.** → True

Write $h = -5\\bigl(t^{2} - 4t\\bigr) = -5\\bigl((t - 2)^{2} - 4\\bigr) = 20 - 5(t - 2)^{2}$. The peak value is $20$ m. Equivalently the vertex is at $t = \\frac{20}{10} = 2$, and $h(2) = 40 - 20 = 20$. The statement is True.`,
      `**C.** → False

The vertex is at $t = 2$ seconds, not $3$. At $t = 3$, $h = 60 - 45 = 15$ m, already on the way down. The statement is False.`,
      `**D.** → False

$h = 0$ when $5t(4 - t) = 0$, so $t = 0$ or $t = 4$. Back at the ground after $4$ seconds, not $3$. The statement is False.`,
      `**E.** → False

$h(2) = 20$ m, the maximum, not $30$. Thirty metres is above the vertex. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `One projectile $h = 20t - 5t^{2}$. Completing the square (or the vertex formula) puts the peak at $t = 2$ seconds and $h = 20$ m. The stone returns at $t = 4$.`,
  },
  {
    id: `math-4-46`,
    case_id: `MATH 4.46`,
    title: `Two numbers that add to $15$ and multiply to $44$`,
    subsection: `4.2`,
    context: `Two numbers add to $15$ and multiply to $44$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The numbers are $4$ and $11$.`,
      `They differ by $7$.`,
      `The numbers are $5$ and $9$.`,
      `If the numbers are $x$ and $y$, then $(x + 1)(y + 1) = 60$.`,
      `$x^{2} + y^{2} = 137$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

They are the roots of $t^{2} - 15t + 44 = 0$.

$$\\Delta = 225 - 176 = 49$$

$$t = \\frac{15 \\pm 7}{2}$$

so $t = 11$ or $t = 4$. The statement is True.`,
      `**B.** → True

$$11 - 4 = 7$$

The statement is True.`,
      `**C.** → False

$5 + 9 = 14$ and $5 \\cdot 9 = 45$, neither matching. The statement is False.`,
      `**D.** → True

$$(x + 1)(y + 1) = xy + x + y + 1 = 44 + 15 + 1 = 60$$

The statement is True.`,
      `**E.** → True

$$x^{2} + y^{2} = (x + y)^{2} - 2xy = 225 - 88 = 137$$

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `Two numbers with sum $15$ and product $44$ are the roots of $t^{2} - 15t + 44 = 0$, so $4$ and $11$. Later letters read $(x+1)(y+1)$ and $x^{2} + y^{2}$ from Vieta, without listing the roots again.`,
  },
  {
    id: `math-4-47`,
    case_id: `MATH 4.47`,
    title: `Right triangle, legs $x$ and $x + 7$, hypotenuse $13$`,
    subsection: `4.2`,
    context: `A right triangle has legs $x$ cm and $x + 7$ cm and hypotenuse $13$ cm. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The shorter leg is $5$ cm.`,
      `The longer leg is $10$ cm.`,
      `The area is $30$ cm$^{2}$.`,
      `The perimeter is $28$ cm.`,
      `The triangle is isosceles.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

$$x^{2} + (x + 7)^{2} = 169$$

$$2x^{2} + 14x + 49 = 169$$

$$x^{2} + 7x - 60 = 0$$

$$\\Delta = 49 + 240 = 289 = 17^{2}$$

$$x = \\frac{-7 + 17}{2} = 5$$

The shorter leg is $5$ cm, and $5^{2} + 12^{2} = 169$. The statement is True.`,
      `**B.** → False

The longer leg is $5 + 7 = 12$ cm, not $10$. The statement is False.`,
      `**C.** → True

$$\\frac{1}{2} \\cdot 5 \\cdot 12 = 30$$

The statement is True.`,
      `**D.** → False

$$5 + 12 + 13 = 30$$

not $28$. The statement is False.`,
      `**E.** → False

The sides $5$, $12$, $13$ are all different. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `Pythagoras $x^{2} + (x + 7)^{2} = 13^{2}$ becomes $x^{2} + 7x - 60 = 0$. The positive root is $x = 5$, so the triangle is $5$-$12$-$13$.`,
  },
  {
    id: `math-4-48`,
    case_id: `MATH 4.48`,
    title: `Perimeter $40$ cm and area $96$ cm$^{2}$`,
    subsection: `4.2`,
    context: `A rectangle has perimeter $40$ cm and area $96$ cm$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The sides are $8$ cm and $12$ cm.`,
      `The rectangle is a square.`,
      `A square with the same perimeter has area $100$ cm$^{2}$.`,
      `That square's area is larger than $96$ cm$^{2}$.`,
      `The sides are $6$ cm and $14$ cm.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Adjacent sides add to $20$. Let one side be $x$ cm.

$$x(20 - x) = 96$$

$$x^{2} - 20x + 96 = 0$$

$$\\Delta = 400 - 384 = 16$$

$$x = \\frac{20 \\pm 4}{2}$$

so $x = 12$ or $x = 8$. The statement is True.`,
      `**B.** → False

$8 \\neq 12$. A square of perimeter $40$ would have side $10$ and area $100$, not $96$. The statement is False.`,
      `**C.** → True

Side $\\frac{40}{4} = 10$, area $100$. The statement is True.`,
      `**D.** → True

$100 > 96$. Among rectangles of fixed perimeter the square maximises area. The statement is True.`,
      `**E.** → False

$6 + 14 = 20$, so the perimeter would match, but $6 \\cdot 14 = 84$, not $96$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Sides $x$ and $20 - x$ with product $96$ give $x^{2} - 20x + 96 = 0$. The sides are $8$ cm and $12$ cm. A square of the same perimeter has area $100$.`,
  },
  {
    id: `math-4-49`,
    case_id: `MATH 4.49`,
    title: `A parent $24$ years older, ages multiplying to $180$`,
    subsection: `4.2`,
    context: `A parent is $24$ years older than a child, and the product of their present ages is $180$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The child is $6$ years old.`,
      `The parent is $30$ years old.`,
      `In $4$ years the product of their ages will be $340$.`,
      `The age gap stays $24$ years.`,
      `The present ages are in the ratio $5 : 1$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$$s(s + 24) = 180$$

$$s^{2} + 24s - 180 = 0$$

$$\\Delta = 576 + 720 = 1296 = 36^{2}$$

$$s = \\frac{-24 + 36}{2} = 6$$

The statement is True.`,
      `**B.** → True

$6 + 24 = 30$. Check: $6 \\cdot 30 = 180$. The statement is True.`,
      `**C.** → True

In four years they are $10$ and $34$, and $10 \\cdot 34 = 340$. The statement is True.`,
      `**D.** → True

Both ages increase equally, so the difference is unchanged. The statement is True.`,
      `**E.** → True

$$\\frac{30}{6} = 5$$

The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Ages $s$ and $s + 24$ with product $180$ give $s^{2} + 24s - 180 = 0$. The positive root is $s = 6$, so the parent is $30$.`,
  },
  {
    id: `math-4-50`,
    case_id: `MATH 4.50`,
    title: `A $10$ m ladder, foot $2$ m farther out than the height`,
    subsection: `4.2`,
    context: `A $10$ m ladder leans against a wall. Its foot is $2$ m farther from the wall than the height it reaches. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The top is $6$ m up the wall.`,
      `The foot is $7$ m from the wall.`,
      `The foot is $8$ m from the wall.`,
      `The right triangle of wall, ground and ladder has area $24$ m$^{2}$.`,
      `The foot is $9$ m from the wall.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let the height be $h$ metres. Then the foot is $h + 2$, and

$$h^{2} + (h + 2)^{2} = 100$$

$$2h^{2} + 4h + 4 = 100$$

$$h^{2} + 2h - 48 = 0$$

$$\\Delta = 4 + 192 = 196 = 14^{2}$$

$$h = \\frac{-2 + 14}{2} = 6$$

The top is $6$ m up. Check: $6^{2} + 8^{2} = 100$. The statement is True.`,
      `**B.** → False

The foot is $6 + 2 = 8$ m, not $7$. The statement is False.`,
      `**C.** → True

Eight metres. The statement is True.`,
      `**D.** → True

$$\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$$

The statement is True.`,
      `**E.** → False

Nine metres with hypotenuse $10$ would force height $\\sqrt{19}$, not $6$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Pythagoras with foot $2$ m more than height: $h^{2} + (h + 2)^{2} = 10^{2}$. The positive height is $6$ m, so the foot is $8$ m.`,
  },
  {
    id: `math-4-51`,
    case_id: `MATH 4.51`,
    title: `The substitution $x + \\frac{1}{x} = 4$`,
    subsection: `4.2`,
    context: `A nonzero number satisfies $x + \\frac{1}{x} = 4$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$x^{2} + \\frac{1}{x^{2}} = 16$.`,
      `$x^{2} + \\frac{1}{x^{2}} = 14$.`,
      `Clearing the original equation produces $x^{2} - 4x + 1 = 0$.`,
      `$x^{3} + \\frac{1}{x^{3}} = 64$.`,
      `One solution is $2 + \\sqrt{3}$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Square the given sum: $\\left(x + \\frac{1}{x}\\right)^{2} = 16$, so $x^{2} + 2 + \\frac{1}{x^{2}} = 16$, hence $x^{2} + \\frac{1}{x^{2}} = 14$, not $16$. Sixteen forgets to subtract the middle $2$. The statement is False.`,
      `**B.** → True

That is the identity just derived. The statement is True.`,
      `**C.** → True

Multiply $x + \\frac{1}{x} = 4$ by $x$: $x^{2} + 1 = 4x$, so $x^{2} - 4x + 1 = 0$. The statement is True.`,
      `**D.** → False

The recurrence is $x^{3} + \\frac{1}{x^{3}} = \\left(x + \\frac{1}{x}\\right)\\left(x^{2} + \\frac{1}{x^{2}}\\right) - \\left(x + \\frac{1}{x}\\right) = 4 \\cdot 14 - 4 = 52$, not $64$. Sixty-four is $4^{3}$. The statement is False.`,
      `**E.** → True

$$x = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = 2 \\pm \\sqrt{3}$$

One of those is $2 + \\sqrt{3}$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 51,
    solution_overview: `From $x + \\frac{1}{x} = 4$, squaring gives $x^{2} + \\frac{1}{x^{2}} = 14$, and the cubic identity then gives $52$. The underlying quadratic is $x^{2} - 4x + 1 = 0$.`,
  },
  {
    id: `math-4-52`,
    case_id: `MATH 4.52`,
    title: `The biquadratic $x^{4} - 5x^{2} + 4 = 0$`,
    subsection: `4.2`,
    context: `Evaluate each statement about $x^{4} - 5x^{2} + 4 = 0$. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has four distinct real roots.`,
      `The roots are $\\pm 1$ and $\\pm 2$.`,
      `The product of all four roots is $4$.`,
      `The sum of all four roots is $0$.`,
      `All four roots are positive.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Put $u = x^{2}$. Then $u^{2} - 5u + 4 = 0$, so $(u - 4)(u - 1) = 0$. Thus $x^{2} = 4$ or $x^{2} = 1$, four distinct real $x$. The statement is True.`,
      `**B.** → True

$x = \\pm 2$ and $x = \\pm 1$. The statement is True.`,
      `**C.** → True

For $x^{4} + 0x^{3} - 5x^{2} + 0x + 4$, the product of the roots is the constant term $4$. Check: $(1)(-1)(2)(-2) = 4$. The statement is True.`,
      `**D.** → True

No $x^{3}$ term, so the sum of roots is $0$. Pairs $\\pm 1$ and $\\pm 2$ cancel. The statement is True.`,
      `**E.** → False

Two of the four roots are negative. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 52,
    solution_overview: `The substitution $u = x^{2}$ turns $x^{4} - 5x^{2} + 4 = 0$ into $(u - 4)(u - 1) = 0$. The four real roots are $\\pm 1$ and $\\pm 2$.`,
  },
  {
    id: `math-4-53`,
    case_id: `MATH 4.53`,
    title: `A rectangle $14$ cm longer than it is wide, area $240$`,
    subsection: `4.2`,
    context: `A rectangle is $14$ cm longer than it is wide, and its area is $240$ cm$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The width is $10$ cm.`,
      `The length is $24$ cm.`,
      `The diagonal is $26$ cm.`,
      `The perimeter is $60$ cm.`,
      `The area check $10 \\cdot 24 = 240$ holds.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$w(w + 14) = 240$$

$$w^{2} + 14w - 240 = 0$$

$$\\Delta = 196 + 960 = 1156 = 34^{2}$$

$$w = \\frac{-14 + 34}{2} = 10$$

The statement is True.`,
      `**B.** → True

Length $10 + 14 = 24$ cm. The statement is True.`,
      `**C.** → True

$$10^{2} + 24^{2} = 100 + 576 = 676 = 26^{2}$$

This is the $5$-$12$-$13$ triple scaled by $2$. The statement is True.`,
      `**D.** → False

$$P = 2(10 + 24) = 68$$

not $60$. The statement is False.`,
      `**E.** → True

$10 \\cdot 24 = 240$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 53,
    solution_overview: `Width $w$, length $w + 14$, area $240$ give $w^{2} + 14w - 240 = 0$. The positive root is $w = 10$, so the rectangle is $10$ by $24$, a $10$-$24$-$26$ right triangle on the diagonal.`,
  },
  {
    id: `math-4-54`,
    case_id: `MATH 4.54`,
    title: `Together in $4$ hours, one worker $6$ hours slower`,
    subsection: `4.2`,
    context: `Two workers finish a job together in $4$ hours. One of them, working alone, is $6$ hours slower than the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The faster worker alone takes $6$ hours.`,
      `The slower worker alone takes $12$ hours.`,
      `The faster worker alone takes $8$ hours.`,
      `In $2$ hours together they complete half the job.`,
      `Their combined rate is $\\frac{1}{4}$ of a job per hour.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let the faster time be $t$ hours. Then

$$\\frac{1}{t} + \\frac{1}{t + 6} = \\frac{1}{4}$$

$$\\frac{2t + 6}{t(t + 6)} = \\frac{1}{4}$$

$$8t + 24 = t^{2} + 6t$$

$$t^{2} - 2t - 24 = 0$$

$$(t - 6)(t + 4) = 0$$

The positive root is $t = 6$. The statement is True.`,
      `**B.** → True

The slower time is $12$ hours. Check: $\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$. The statement is True.`,
      `**C.** → False

Eight hours for the faster worker would force $14$ for the slower, and $\\frac{1}{8} + \\frac{1}{14} = \\frac{11}{56} \\neq \\frac{1}{4}$. The statement is False.`,
      `**D.** → True

Together they do $\\frac{1}{4}$ of a job per hour, so two hours is $\\frac{1}{2}$. The statement is True.`,
      `**E.** → True

That is the together-in-$4$-hours rate. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Rates $\\frac{1}{t} + \\frac{1}{t + 6} = \\frac{1}{4}$ rearrange to $t^{2} - 2t - 24 = 0$. The times are $6$ hours and $12$ hours.`,
  },
  {
    id: `math-4-55`,
    case_id: `MATH 4.55`,
    title: `The reciprocal equation $x + \\frac{6}{x} = 5$`,
    subsection: `4.2`,
    context: `Evaluate each statement about $x + \\frac{6}{x} = 5$, with $x \\neq 0$. Mark it TRUE or FALSE.`,
    statements: [
      `The only real solution is $x = 2$.`,
      `The two real solutions are $2$ and $3$.`,
      `Clearing the denominator produces $x^{2} - 5x + 6 = 0$.`,
      `The product of the two solutions is $5$.`,
      `The sum of the two solutions is $5$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Multiply by $x$: $x^{2} + 6 = 5x$, so $x^{2} - 5x + 6 = 0$, $(x - 2)(x - 3) = 0$. Both $2$ and $3$ work. Check: $2 + 3 = 5$ and $3 + 2 = 5$. The statement is False.`,
      `**B.** → True

Those are the two roots. The statement is True.`,
      `**C.** → True

That is the cleared quadratic. The statement is True.`,
      `**D.** → False

The product is the constant term $6$, not $5$. Five is the sum. The statement is False.`,
      `**E.** → True

Vieta: the sum of the roots of $x^{2} - 5x + 6 = 0$ is $5$. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 55,
    solution_overview: `Clearing $x + \\frac{6}{x} = 5$ produces $x^{2} - 5x + 6 = 0$, whose roots $2$ and $3$ both satisfy the original.`,
  },
  {
    id: `math-4-56`,
    case_id: `MATH 4.56`,
    title: `A biquadratic, a rearranged product, and $x^{2} + x + 1$`,
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

Put $u = x^{2}$. Then $u^{2} - 13u + 36 = 0$, so $(u - 4)(u - 9) = 0$. Thus $x^{2} = 4$ or $x^{2} = 9$, and $x = \\pm 2, \\pm 3$. The statement is True.`,
      `**B.** → True

Expand: $x^{2} - 8x + 15 = 8$, so $x^{2} - 8x + 7 = 0$, $(x - 1)(x - 7) = 0$. Check: at $x = 1$, $(-2)(-4) = 8$; at $x = 7$, $4 \\cdot 2 = 8$. The statement is True.`,
      `**C.** → False

$$\\Delta = 1 - 4 = -3 < 0$$

No real roots. The statement is False.`,
      `**D.** → False

$3 + 6 = 9$ but $3 \\cdot 6 = 18$, not $14$. The pair with product $14$ is $2$ and $7$. The statement is False.`,
      `**E.** → True

$$\\Delta = 9 + 16 = 25 > 0$$

Roots $\\frac{3 \\pm 5}{4}$, so $2$ and $-\\frac{1}{2}$. Two distinct real roots. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 56,
    solution_overview: `Five independent quadratics: a biquadratic in $x^{2}$, a rearranged product, a negative discriminant, a Vieta trap, and $2x^{2} - 3x - 2 = 0$.`,
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
    title: `$\\frac{2}{x - 1} - \\frac{1}{x + 1} = \\frac{3}{x^{2} - 1}$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\frac{2}{x - 1} - \\frac{1}{x + 1} = \\frac{3}{x^{2} - 1}$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = 0$.`,
      `The original equation is undefined at $x = \\pm 1$.`,
      `Clearing the common denominator $(x - 1)(x + 1)$ produces $2(x + 1) - (x - 1) = 3$.`,
      `At $x = 0$ both sides equal $-3$.`,
      `$x = 1$ is not a solution.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The common denominator is $x^{2} - 1 = (x - 1)(x + 1)$, forbidden at $x = \\pm 1$.

$$2(x + 1) - (x - 1) = 3$$

$$2x + 2 - x + 1 = 3$$

$$x + 3 = 3$$

$$x = 0$$

which is allowed. Check below. The statement is True.`,
      `**B.** → True

Each of $x - 1$, $x + 1$, and $x^{2} - 1$ vanishes at one or both of $\\pm 1$. The statement is True.`,
      `**C.** → True

That is the numerator identity after multiplying through by $x^{2} - 1$. The statement is True.`,
      `**D.** → True

Left: $\\frac{2}{-1} - \\frac{1}{1} = -2 - 1 = -3$. Right: $\\frac{3}{-1} = -3$. The statement is True.`,
      `**E.** → True

At $x = 1$ every term is undefined. A hole is never a root. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `One rational equation. Exclude $x = \\pm 1$, clear $x^{2} - 1$, and recover $x = 0$. Direct substitution confirms both sides equal $-3$.`,
  },
  {
    id: `math-4-67`,
    case_id: `MATH 4.67`,
    title: `$\\sqrt{x + 5} + \\sqrt{x - 3} = 4$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\sqrt{x + 5} + \\sqrt{x - 3} = 4$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = 4$.`,
      `At that solution, $\\sqrt{x - 3} = 1$.`,
      `The solution is $x = 8$.`,
      `$x = 0$ is a real solution.`,
      `The candidate $x = 4$ survives the check in the original.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Domain: $x \\ge 3$. Let $a = \\sqrt{x + 5}$ and $b = \\sqrt{x - 3}$. Then $a + b = 4$ and $a^{2} - b^{2} = 8$, so $(a - b)(a + b) = 8$, hence $a - b = 2$. Adding: $2a = 6$, $a = 3$, $b = 1$. Then $x - 3 = 1$, so $x = 4$. The statement is True.`,
      `**B.** → True

$b = 1$ as just recovered. The statement is True.`,
      `**C.** → False

At $x = 8$: $\\sqrt{13} + \\sqrt{5} \\approx 5.8$, not $4$. The recovered value is $4$. The statement is False.`,
      `**D.** → False

At $x = 0$ the second root is $\\sqrt{-3}$, not real. Domain requires $x \\ge 3$. The statement is False.`,
      `**E.** → True

$\\sqrt{9} + \\sqrt{1} = 3 + 1 = 4$. Both roots are defined. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 67,
    solution_overview: `One radical sum. Set $a = \\sqrt{x + 5}$, $b = \\sqrt{x - 3}$. Then $a + b = 4$ and $a^{2} - b^{2} = 8$ give $a = 3$, $b = 1$, so $x = 4$.`,
  },
  {
    id: `math-4-68`,
    case_id: `MATH 4.68`,
    title: `$\\lvert 2x - 5 \\rvert = \\lvert x + 4 \\rvert$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\lvert 2x - 5 \\rvert = \\lvert x + 4 \\rvert$. Mark it TRUE or FALSE.`,
    statements: [
      `One solution is $x = 9$.`,
      `The other solution is $x = \\frac{1}{3}$.`,
      `There is only one real solution.`,
      `Both recovered candidates satisfy the original equation.`,
      `$x = 0$ is not a solution.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Equal absolute values mean $2x - 5 = x + 4$ or $2x - 5 = -(x + 4)$. The first case: $x = 9$. Check: $\\lvert 18 - 5 \\rvert = 13$ and $\\lvert 9 + 4 \\rvert = 13$. The statement is True.`,
      `**B.** → True

The reflected case: $2x - 5 = -x - 4$, so $3x = 1$ and $x = \\frac{1}{3}$. Check: $\\lvert \\frac{2}{3} - 5 \\rvert = \\frac{13}{3}$ and $\\lvert \\frac{1}{3} + 4 \\rvert = \\frac{13}{3}$. The statement is True.`,
      `**C.** → False

Two distinct real solutions, $9$ and $\\frac{1}{3}$. The statement is False.`,
      `**D.** → True

Both checks in A and B succeed, and neither case is empty. The statement is True.`,
      `**E.** → True

At $x = 0$: $\\lvert -5 \\rvert = 5$ and $\\lvert 4 \\rvert = 4$, which are not equal. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 68,
    solution_overview: `The equation $\\lvert 2x - 5 \\rvert = \\lvert x + 4 \\rvert$ splits into $2x - 5 = \\pm(x + 4)$. The two solutions are $x = 9$ and $x = \\frac{1}{3}$.`,
  },
  {
    id: `math-4-69`,
    case_id: `MATH 4.69`,
    title: `$\\sqrt{2x + 1} = x - 1$, and the extra root`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\sqrt{2x + 1} = x - 1$. Mark it TRUE or FALSE.`,
    statements: [
      `$x = 4$ solves the original equation.`,
      `$x = 0$ solves the original equation.`,
      `Squaring produces the quadratic $x(x - 4) = 0$.`,
      `Both roots of that quadratic solve the original.`,
      `The original equation has only one real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

A principal square root is nonnegative, so $x - 1 \\ge 0$, hence $x \\ge 1$, and also $2x + 1 \\ge 0$. At $x = 4$: $\\sqrt{9} = 3 = 4 - 1$. The statement is True.`,
      `**B.** → False

At $x = 0$ the right-hand side is $-1$, which cannot equal a square root. Also $x = 0$ fails $x \\ge 1$. The statement is False.`,
      `**C.** → True

Squaring (after requiring $x \\ge 1$): $2x + 1 = (x - 1)^{2} = x^{2} - 2x + 1$, so $0 = x^{2} - 4x = x(x - 4)$. The statement is True.`,
      `**D.** → False

$x = 0$ is an extra root of the squared equation and fails the original. Only $x = 4$ survives. The statement is False.`,
      `**E.** → True

After the domain check, only $x = 4$ remains. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `The radical equation $\\sqrt{2x + 1} = x - 1$ requires $x \\ge 1$. Squaring produces $x = 0$ or $x = 4$; only $x = 4$ survives.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `$\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert = 8$. Mark it TRUE or FALSE.`,
    statements: [
      `The solutions are $x = -1$ and $x = 7$.`,
      `Those two solutions are $8$ units apart.`,
      `$x = 3$ is a solution.`,
      `There are exactly two real solutions.`,
      `Every $x$ between $1$ and $5$ is a solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The kinks are at $1$ and $5$. For $x < 1$: $(1 - x) + (5 - x) = 6 - 2x = 8$, so $x = -1$. For $x > 5$: $(x - 1) + (x - 5) = 2x - 6 = 8$, so $x = 7$. In the middle the left side is constantly $4$, not $8$. The two solutions are $-1$ and $7$. The statement is True.`,
      `**B.** → True

$$7 - (-1) = 8$$

The statement is True.`,
      `**C.** → False

At $x = 3$, which sits between $1$ and $5$, the left side equals the distance between the posts, $4$, not $8$. The statement is False.`,
      `**D.** → True

One root on each outer ray, none in the middle. The statement is True.`,
      `**E.** → False

On $[1, 5]$ the sum of distances is constantly $4$, never $8$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 70,
    solution_overview: `The sum $\\lvert x - 1 \\rvert + \\lvert x - 5 \\rvert$ equals $4$ between the posts and grows linearly outside. Setting it equal to $8$ gives $x = -1$ and $x = 7$.`,
  },
  {
    id: `math-4-71`,
    case_id: `MATH 4.71`,
    title: `$\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = \\frac{9}{2}$.`,
      `The original equation is undefined at $x = 1$ and at $x = 3$.`,
      `$x = 3$ is a root.`,
      `At the recovered $x$, both sides equal $3$.`,
      `Cross-multiplying is valid at the recovered $x$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Exclude $x = 1$ and $x = 3$, then

$$x(x - 1) = (x + 6)(x - 3)$$

$$x^{2} - x = x^{2} + 3x - 18$$

$$18 = 4x$$

$$x = \\frac{9}{2}$$

which is allowed. The statement is True.`,
      `**B.** → True

Those two values zero a denominator. The statement is True.`,
      `**C.** → False

At $x = 3$ the left side is undefined. The statement is False.`,
      `**D.** → True

$\\frac{9/2}{9/2 - 3} = \\frac{9/2}{3/2} = 3$ and $\\frac{9/2 + 6}{9/2 - 1} = \\frac{21/2}{7/2} = 3$. The statement is True.`,
      `**E.** → True

The recovered $x = \\frac{9}{2}$ is not $1$ or $3$, so both denominators are nonzero. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `One rational proportion. Exclude $x = 1$ and $x = 3$, cross-multiply, and recover $x = \\frac{9}{2}$. Both sides then equal $3$.`,
  },
  {
    id: `math-4-72`,
    case_id: `MATH 4.72`,
    title: `$\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$. Mark it TRUE or FALSE.`,
    statements: [
      `One solution is $x = 1$.`,
      `The other solution is $x = -2$.`,
      `The original equation is undefined at $x = 0$ and at $x = -1$.`,
      `Both recovered values satisfy the original equation.`,
      `Clearing denominators produces the quadratic $x^{2} + x - 2 = 0$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Common denominator $x(x + 1)$:

$$\\frac{(x + 1)^{2} + x^{2}}{x(x + 1)} = \\frac{5}{2}$$

$$2(2x^{2} + 2x + 1) = 5x(x + 1)$$

$$4x^{2} + 4x + 2 = 5x^{2} + 5x$$

$$0 = x^{2} + x - 2$$

$$(x + 2)(x - 1) = 0$$

so $x = 1$ or $x = -2$, both allowed. At $x = 1$: $2 + \\frac{1}{2} = \\frac{5}{2}$. The statement is True.`,
      `**B.** → True

At $x = -2$: $\\frac{-1}{-2} + \\frac{-2}{-1} = \\frac{1}{2} + 2 = \\frac{5}{2}$. The statement is True.`,
      `**C.** → True

Those two values zero a denominator. The statement is True.`,
      `**D.** → True

The two checks in A and B both work. The statement is True.`,
      `**E.** → True

That is the cleared quadratic. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `The rational sum $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ clears to $x^{2} + x - 2 = 0$. Both roots $1$ and $-2$ lie in the domain.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `$\\sqrt{x - 1} = 2 - x$ and the sign of the right-hand side`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\sqrt{x - 1} = 2 - x$. Mark it TRUE or FALSE.`,
    statements: [
      `Both candidates from squaring solve the original equation.`,
      `The original equation has two real solutions.`,
      `The candidate $x = \\frac{5 + \\sqrt{5}}{2}$ solves the original.`,
      `You may skip the condition $2 - x \\ge 0$.`,
      `Exactly one real solution survives.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Domain: $x \\ge 1$ and $2 - x \\ge 0$, so $1 \\le x \\le 2$. Squaring: $x - 1 = (2 - x)^{2} = 4 - 4x + x^{2}$, hence $x^{2} - 5x + 5 = 0$, $x = \\frac{5 \\pm \\sqrt{5}}{2}$. Only $\\frac{5 - \\sqrt{5}}{2} \\approx 1.38$ lies in $[1, 2]$. The other candidate is about $3.62$, where $2 - x$ is negative. The statement is False.`,
      `**B.** → False

Only one of the two quadratic roots survives. The statement is False.`,
      `**C.** → False

$\\frac{5 + \\sqrt{5}}{2} > 2$, so the right-hand side is negative and cannot equal a square root. The statement is False.`,
      `**D.** → False

A principal square root is never negative. The condition $2 - x \\ge 0$ is required, and it is what kills the larger candidate. The statement is False.`,
      `**E.** → True

The smaller root $\\frac{5 - \\sqrt{5}}{2}$ lies in $[1, 2]$ and checks: both sides are positive and equal after squaring was valid. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `The radical $\\sqrt{x - 1} = 2 - x$ lives only on $[1, 2]$. Squaring produces $x^{2} - 5x + 5 = 0$; only $\\frac{5 - \\sqrt{5}}{2}$ stays in that interval.`,
  },
  {
    id: `math-4-74`,
    case_id: `MATH 4.74`,
    title: `$\\sqrt{x + 12} - \\sqrt{x} = 2$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\sqrt{x + 12} - \\sqrt{x} = 2$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = 4$.`,
      `At that solution, $\\sqrt{x} = 2$.`,
      `The solution is $x = 9$.`,
      `After squaring once you may stop without checking in the original.`,
      `$x = 0$ also solves the original equation.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Domain $x \\ge 0$. Isolate: $\\sqrt{x + 12} = 2 + \\sqrt{x}$. Square:

$$x + 12 = 4 + 4\\sqrt{x} + x$$

$$8 = 4\\sqrt{x}$$

$$\\sqrt{x} = 2$$

$$x = 4$$

Check: $\\sqrt{16} - \\sqrt{4} = 4 - 2 = 2$. The statement is True.`,
      `**B.** → True

That is the isolated relation just obtained. The statement is True.`,
      `**C.** → False

At $x = 9$: $\\sqrt{21} - 3 \\approx 1.58$, not $2$. The statement is False.`,
      `**D.** → False

Squaring can introduce extras. The isolated right-hand side $2 + \\sqrt{x}$ is automatically nonnegative, but the candidate must still be substituted back. Skipping the check is not allowed. The statement is False.`,
      `**E.** → False

At $x = 0$: $\\sqrt{12} - 0 \\neq 2$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `Isolate $\\sqrt{x + 12} = 2 + \\sqrt{x}$ and square once. The candidate $x = 4$ checks in the original; $x = 0$ and $x = 9$ do not.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `$\\sqrt{x + 8} + \\sqrt{x} = 6$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\sqrt{x + 8} + \\sqrt{x} = 6$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = \\frac{49}{9}$.`,
      `At that solution, $\\sqrt{x} = \\frac{7}{3}$.`,
      `The solution is $x = 9$.`,
      `Isolating requires $6 - \\sqrt{x} \\ge 0$.`,
      `$x = 4$ also solves the original equation.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Isolate $\\sqrt{x + 8} = 6 - \\sqrt{x}$, which needs $\\sqrt{x} \\le 6$. Square:

$$x + 8 = 36 - 12\\sqrt{x} + x$$

$$12\\sqrt{x} = 28$$

$$\\sqrt{x} = \\frac{7}{3}$$

$$x = \\frac{49}{9}$$

Check: $\\sqrt{\\frac{49}{9} + 8} + \\frac{7}{3} = \\sqrt{\\frac{121}{9}} + \\frac{7}{3} = \\frac{11}{3} + \\frac{7}{3} = 6$. The statement is True.`,
      `**B.** → True

That is the isolated square root just obtained. The statement is True.`,
      `**C.** → False

At $x = 9$: $\\sqrt{17} + 3 \\approx 7.1$, not $6$. The statement is False.`,
      `**D.** → True

The isolated right-hand side must be a principal square root, hence nonnegative. The statement is True.`,
      `**E.** → False

At $x = 4$: $\\sqrt{12} + 2 \\approx 5.46$, not $6$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 75,
    solution_overview: `Isolate $\\sqrt{x + 8} = 6 - \\sqrt{x}$ and square. The candidate $x = \\frac{49}{9}$ lies in the domain $\\sqrt{x} \\le 6$ and checks.`,
  },
  {
    id: `math-4-76`,
    case_id: `MATH 4.76`,
    title: `$\\lvert 3 - 2x \\rvert = x + 1$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\lvert 3 - 2x \\rvert = x + 1$. Mark it TRUE or FALSE.`,
    statements: [
      `$x = 4$ is a solution.`,
      `$x = -2$ is a solution.`,
      `$x = \\frac{2}{3}$ is a solution.`,
      `There is only one real solution.`,
      `Every candidate that meets $x \\ge -1$ survives in the original.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The right-hand side is an absolute value, so $x + 1 \\ge 0$, hence $x \\ge -1$. Then $3 - 2x = x + 1$ or $3 - 2x = -(x + 1)$. The second case: $3 - 2x = -x - 1$, so $x = 4$. Check: $\\lvert 3 - 8 \\rvert = 5$ and $4 + 1 = 5$. The statement is True.`,
      `**B.** → False

At $x = -2$ the right-hand side is $-1 < 0$, impossible for an absolute value. The statement is False.`,
      `**C.** → True

The first case: $3 - 2x = x + 1$, so $2 = 3x$ and $x = \\frac{2}{3} \\ge -1$. Check: $\\lvert 3 - \\frac{4}{3} \\rvert = \\frac{5}{3}$ and $\\frac{2}{3} + 1 = \\frac{5}{3}$. The statement is True.`,
      `**D.** → False

Two solutions, $\\frac{2}{3}$ and $4$. The statement is False.`,
      `**E.** → True

The two case-split candidates that already satisfy $x \\ge -1$ both check. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 76,
    solution_overview: `Because $\\lvert 3 - 2x \\rvert = x + 1$ needs $x \\ge -1$, the split $3 - 2x = \\pm(x + 1)$ is then checked. Both $x = \\frac{2}{3}$ and $x = 4$ survive.`,
  },
  {
    id: `math-4-77`,
    case_id: `MATH 4.77`,
    title: `A difference of reciprocals, a radical extra, and $\\lvert x + 2 \\rvert = \\lvert 2x - 7 \\rvert$`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{1}{4}$ has solutions $x = 3$ and $x = -3$.`,
      `Both $x = 1$ and $x = 6$ solve $\\sqrt{x + 3} = x - 3$.`,
      `The equation $\\lvert x + 2 \\rvert = \\lvert 2x - 7 \\rvert$ has solutions $x = 9$ and $x = \\frac{5}{3}$.`,
      `The equation $\\sqrt{4 - x} = -2$ has a real solution.`,
      `$x = 2$ solves $\\frac{x^{2} - 4}{x - 2} = x$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

LCD $x^{2} - 1$: $(x + 1) - (x - 1) = \\frac{1}{4}(x^{2} - 1)$, so $2 = \\frac{x^{2} - 1}{4}$, hence $x^{2} = 9$ and $x = \\pm 3$, both allowed. Check of $3$: $\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. Check of $-3$: $-\\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4}$. The statement is True.`,
      `**B.** → False

$\\sqrt{x + 3} = x - 3$ needs $x \\ge 3$. Squaring: $x + 3 = (x - 3)^{2} = x^{2} - 6x + 9$, so $x^{2} - 7x + 6 = 0$, $(x - 1)(x - 6) = 0$. Only $x = 6$ meets $x \\ge 3$. At $x = 1$ the right-hand side is $-2$. Not both. The statement is False.`,
      `**C.** → True

$x + 2 = 2x - 7$ gives $x = 9$. And $x + 2 = 7 - 2x$ gives $3x = 5$, $x = \\frac{5}{3}$. Checks: $\\lvert 11 \\rvert = \\lvert 11 \\rvert$ and $\\lvert \\frac{11}{3} \\rvert = \\lvert \\frac{11}{3} \\rvert$. The statement is True.`,
      `**D.** → False

A principal square root is never negative. Squaring would give $4 - x = 4$, $x = 0$, and $\\sqrt{4} = 2 \\neq -2$. No real solution. The statement is False.`,
      `**E.** → False

At $x = 2$ the left side is undefined. For $x \\neq 2$ the left side is $x + 2$, and $x + 2 = x$ never holds. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Five independent equations of the subsection: a difference of reciprocals with two surviving roots, a radical that drops $x = 1$, an equal-absolute-value pair, a negative principal root, and a hole at $x = 2$.`,
  },
  {
    id: `math-4-78`,
    case_id: `MATH 4.78`,
    title: `$\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$`,
    subsection: `4.3`,
    context: `Evaluate each statement about $\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$. Mark it TRUE or FALSE.`,
    statements: [
      `The solution is $x = -5$.`,
      `The original equation is undefined at $x = \\pm 1$.`,
      `$x = 1$ is a solution.`,
      `At the recovered $x$, both sides of the original equal $1$.`,
      `After clearing, the $x^{2}$ terms cancel.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Exclude $x = \\pm 1$. Multiply through by $(x - 1)(x + 1)$:

$$(2x + 1)(x + 1) - (x + 3)(x - 1) = x^{2} - 1$$

$$2x^{2} + 3x + 1 - (x^{2} + 2x - 3) = x^{2} - 1$$

$$2x^{2} + 3x + 1 - x^{2} - 2x + 3 = x^{2} - 1$$

$$x^{2} + x + 4 = x^{2} - 1$$

$$x = -5$$

which is allowed. The statement is True.`,
      `**B.** → True

Those two values zero a denominator. The statement is True.`,
      `**C.** → False

At $x = 1$ the first fraction is undefined. The statement is False.`,
      `**D.** → True

Left: $\\frac{-10 + 1}{-5 - 1} - \\frac{-5 + 3}{-5 + 1} = \\frac{-9}{-6} - \\frac{-2}{-4} = \\frac{3}{2} - \\frac{1}{2} = 1$, which matches the right-hand side. The statement is True.`,
      `**E.** → True

In the cleared form the $x^{2}$ terms on the two sides cancel and leave a linear equation. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `One rational difference. Clearing $(x - 1)(x + 1)$ cancels $x^{2}$ and recovers $x = -5$, away from the holes $\\pm 1$.`,
  },
];
