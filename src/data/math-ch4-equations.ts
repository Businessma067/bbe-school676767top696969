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
  { id: "4.4", title: "Exponential and logarithmic equations" },
  { id: "4.5", title: "Applied word problems and mixed exam sets" },
] as const;

export const MATH_CH4_EQUATIONS: MathTask[] = [
  {
    id: `math-4-1`,
    case_id: `MATH 4.01`,
    title: `Undo one operation at a time`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The solution of $2x + 6 = 14$ is $x = 4$.`,
      `The equation $5x - 3 = 12$ has solution $x = 2$.`,
      `If $x - 7 = 2$, then $x = 9$.`,
      `The solution of $3(x + 1) = 12$ is $x = 3$.`,
      `The equation $4x = 0$ has no solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A linear equation stays true if you do the same thing to both sides. Undo addition by subtracting, then undo multiplication by dividing.

$$2x + 6 = 14$$

$$2x = 8$$

$$x = 4$$

Put $4$ back in: $2\\cdot 4 + 6 = 8 + 6 = 14$. Both sides match, so $x = 4$ really is the solution, and the statement is True.`,
      `**B.** → False

$$5x - 3 = 12$$

$$5x = 15$$

$$x = 3$$

The claim says $x = 2$. That would give $5\\cdot 2 - 3 = 7$, which is not $12$. The recovered solution is $3$, so the statement is False.`,
      `**C.** → True

$$x - 7 = 2$$

$$x = 9$$

Check: $9 - 7 = 2$. The number that works is $9$, so the statement is True.`,
      `**D.** → True

$$3(x + 1) = 12$$

$$3x + 3 = 12$$

$$3x = 9$$

$$x = 3$$

Check: $3(3 + 1) = 12$. The solution is $3$, so the statement is True.`,
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
      `Adding $8$ to both sides of $x - 8 = 10$ produces $x = 18$.`,
      `Dividing both sides of $6x = 30$ by $6$ gives $x = 4$.`,
      `The equation $x + 0 = 9$ is solved by $x = 9$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$x + 5 = 11$$

$$x = 6$$

Check: $6 + 5 = 11$. Subtracting $5$ does leave $x = 6$, so the statement is True.`,
      `**B.** → False

$$7x = 21$$

$$x = 3$$

The claim says $4$. That would need $7\\cdot 4 = 28$ on the right. The number that works is $3$, so the statement is False.`,
      `**C.** → True

$$x - 8 = 10$$

$$x = 18$$

Check: $18 - 8 = 10$. Adding $8$ produces $x = 18$, so the statement is True.`,
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
      `The equation $(x + 3) + (x - 1) = 10$ has solution $x = 3$.`,
    ],
    answer_key: [true, true, false, true, false],
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
      `**E.** → False

$$(x + 3) + (x - 1) = 10 \\Rightarrow 2x + 2 = 10 \\Rightarrow x = 4$$

The claim says $x = 3$. At $x = 3$ the left side is $8$, not $10$. The statement is False.`,
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
      `Solving $\\dfrac{x}{3} + 2 = 6$ gives $x = 12$.`,
      `The equation $\\dfrac{2x}{5} = 6$ has solution $x = 12$.`,
      `If $\\dfrac{x + 1}{2} = 5$, then $x = 9$.`,
      `The equation $\\dfrac{3x}{2} = 9$ is solved by $x = 4$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{x}{4} = 5 \\Rightarrow x = 20$$

Check: $\\frac{20}{4} = 5$. The statement is True.`,
      `**B.** → True

$$\\frac{x}{3} + 2 = 6 \\Rightarrow \\frac{x}{3} = 4 \\Rightarrow x = 12$$

Check: $4 + 2 = 6$. The statement is True.`,
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
      `A number that is $5$ more than twice $8$ is $26$.`,
      `Splitting $30$ into two parts where one part is $4$ more than the other gives the parts $17$ and $13$.`,
      `A tank holds $40$ litres. After $15$ litres are poured out, $20$ litres remain.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Width $4$ cm, length $7$ cm. Perimeter $2(4 + 7) = 22$. The statement is True.`,
      `**B.** → True

$$P = 4 \\cdot 6 = 24$$

The statement is True.`,
      `**C.** → False

$$2 \\cdot 8 + 5 = 21$$

The claim says $26$. The number the sentence describes is $21$, so the statement is False.`,
      `**D.** → True

$$x + (x + 4) = 30 \\Rightarrow x = 13$$

The parts are $13$ and $17$. The statement is True.`,
      `**E.** → False

$$40 - 15 = 25$$

The claim says $20$ litres remain. Twenty-five litres remain, so the statement is False.`,
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
      `The equations $x + 3 = 10$ and $2x = 16$ have the same solution.`,
      `Collecting like terms in $7x - 2 - 3x = 10$ yields $4x = 12$, so $x = 3$.`,
    ],
    answer_key: [true, true, true, false, true],
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
      `**D.** → False

$$x + 3 = 10 \\Rightarrow x = 7$$, while $$2x = 16 \\Rightarrow x = 8$$. They do not share a solution, so the statement is False.`,
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
      `The equation $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ has solution $x = 6$.`,
      `The equation $\\dfrac{x - 1}{3} = \\dfrac{x + 1}{5}$ has solution $x = 2$.`,
      `Clearing the denominator in $\\dfrac{2x}{3} = 8$ gives $x = 10$.`,
      `The equation $\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ has solution $x = 12$.`,
      `The solution of $\\dfrac{3x + 1}{4} = 4$ is $x = 5$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Multiply through by $6$: $3x + 2x = 30 \\Rightarrow x = 6$. Check: $3 + 2 = 5$. The statement is True.`,
      `**B.** → False

$$5(x - 1) = 3(x + 1) \\Rightarrow 5x - 5 = 3x + 3 \\Rightarrow x = 4$$

The claim says $x = 2$. The recovered solution is $4$, so the statement is False.`,
      `**C.** → False

$$2x = 24 \\Rightarrow x = 12$$

The claim says $x = 10$. The statement is False.`,
      `**D.** → True

Multiply through by $12$: $3x - 2x = 12 \\Rightarrow x = 12$. Check: $3 - 2 = 1$. The statement is True.`,
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
      `A cook has $2$ litres of $20\\%$ vinegar and mixes it with $2$ litres of water. The mixture is then $10\\%$ vinegar.`,
      `A prize of $9000$ EUR is split so that second place gets $50\\%$ of first place, and third place gets $50\\%$ of second place. Then second place is $3000$ EUR.`,
      `The solution of $2x + 1 = x + 8$ is smaller than $10$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$2(x + x + 3) = 22 \\Rightarrow 2x + 3 = 11 \\Rightarrow x = 4$$

The longer side is $7$ cm. The statement is True.`,
      `**B.** → False

$$t = \\frac{90}{60} = 1.5$$

hours, not $2$. The statement is False.`,
      `**C.** → True

Acid $0.40$ litres in $4$ litres total is $10\\%$. The statement is True.`,
      `**D.** → False

$$1.75a = 9000 \\Rightarrow a \\approx 5142.86$$, so second place is about $2571$ EUR, not $3000$. The statement is False.`,
      `**E.** → True

$$2x + 1 = x + 8 \\Rightarrow x = 7$$

Seven is smaller than ten. The statement is True.`,
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
      `The equation $x + 3 = x + 5$ has no solution.`,
      `The equation $2(x + 4) = 2x + 8$ is true for every real number $x$.`,
      `The equation $-3x = 12$ has solution $x = 4$.`,
      `The equation $5x + 2 = 5x + 2$ has infinitely many solutions.`,
      `The equation $x = x + 1$ is solved by $x = 0$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Subtract $x$: $3 = 5$, which is never true. No solution, so the statement is True.`,
      `**B.** → True

Both sides are $2x + 8$. The equation is an identity, so the statement is True.`,
      `**C.** → False

$$x = \\frac{12}{-3} = -4$$

The claim says $x = 4$. The solution is $-4$, so the statement is False.`,
      `**D.** → True

The two sides are identical, so every real $x$ works. The statement is True.`,
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
      `A number plus one-third of itself equals $48$. That number is $36$.`,
    ],
    answer_key: [true, false, true, false, true],
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
      `**E.** → True

$$x + \\frac{x}{3} = 48 \\Rightarrow \\frac{4x}{3} = 48 \\Rightarrow x = 36$$

Check: $36 + 12 = 48$. The statement is True.`,
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

Passing a pole means covering the train's own length: $180 / 12 = 15$ m/s, and $15 \\cdot 3.6 = 54$ km/h. The statement is True.`,
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
      `A square and an equilateral triangle have the same side length. The triangle's perimeter is $12$ cm, so the square's perimeter is also $12$ cm.`,
      `A rectangle has width $8$ cm. If the length is increased by $2$ cm and the width is left unchanged, the perimeter increases by $4$ cm.`,
    ],
    answer_key: [true, true, true, false, true],
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
      `**D.** → False

The triangle's side is $4$ cm, so the square's perimeter is $16$ cm, not $12$. The statement is False.`,
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
    title: `Apples at $2$ EUR and pears at $3$ EUR`,
    subsection: `4.1`,
    context: `A stall sells apples at $2$ EUR per kilogram and pears at $3$ EUR per kilogram. A customer buys some kilograms of each and pays $21$ EUR in total. The mass of apples is $3$ kg more than the mass of pears. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The customer bought $3$ kg of pears.`,
      `The customer bought $6$ kg of apples.`,
      `Apples accounted for $12$ EUR of the bill.`,
      `If the customer had bought $1$ kg less of each fruit, the bill would have been $15$ EUR.`,
      `Pears made up more than half of the total mass purchased.`,
    ],
    answer_key: [true, true, true, false, false],
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
      `**D.** → False

Then $5$ kg of apples and $2$ kg of pears cost $10 + 6 = 16$ EUR, not $15$. The statement is False.`,
      `**E.** → False

Pears are $3$ kg of $9$ kg total, which is one-third, not more than half. The statement is False.`,
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
      `$40\\%$ of a number, increased by $12$, gives $32$. The number is $50$.`,
      `A vat holds $8$ litres of juice that is $12\\%$ concentrate. After $2$ litres of water are added, the concentrate is $10\\%$.`,
      `A salary of $2400$ EUR is increased by $10\\%$ and then by a further $10\\%$. The new salary is $2904$ EUR.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$0.80p = 64 \\Rightarrow p = 80$$

Check: $20\\%$ of $80$ is $16$, and $80 - 16 = 64$. The statement is True.`,
      `**B.** → False

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original, not $100\\%$. The statement is False.`,
      `**C.** → True

$$0.40x + 12 = 32 \\Rightarrow x = 50$$

Check: $20 + 12 = 32$. The statement is True.`,
      `**D.** → False

Concentrate $0.12 \\cdot 8 = 0.96$ litres in $10$ litres total is $9.6\\%$, not $10\\%$. The statement is False.`,
      `**E.** → True

$$2400 \\cdot 1.1 \\cdot 1.1 = 2400 \\cdot 1.21 = 2904$$

Two $10\\%$ raises are a $21\\%$ raise, not $20\\%$. The statement is True.`,
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
      `A boat goes $24$ km downstream in $2$ hours and returns the same $24$ km upstream in $3$ hours. The boat's speed in still water is $10$ km/h.`,
      `A cyclist rides to town at $15$ km/h and back at $10$ km/h. The one-way distance is $30$ km, so the round trip takes $4$ hours.`,
      `Pipe A alone fills a pool in $10$ hours and pipe B alone fills it in $15$ hours. Together they fill the pool in $6$ hours.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$t = \\frac{180}{90} = 2$$

In two hours they cover $100$ km and $80$ km. The statement is True.`,
      `**B.** → False

After one hour, $135$ km remains. They close at $105$ km/h, so $t = 135 / 105 = 9/7$ hours, not $2$. The statement is False.`,
      `**C.** → True

Downstream $12$ km/h, upstream $8$ km/h. Still water is their average, $10$ km/h. The statement is True.`,
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
      `A rectangle's length is twice its width. The perimeter is $48$ cm, so the width is $8$ cm.`,
      `Three-fifths of a number is $12$ more than one-fifth of the same number. The number is $30$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Work in centimetres: $240$ cm total.

$$x + (x + 60) = 240 \\Rightarrow x = 90$$

The statement is True.`,
      `**B.** → False

The three numbers add to $42$, so the third is $42 - 11 - 15 = 16$, not $18$. The statement is False.`,
      `**C.** → False

Scale by $12/8 = 1.5$: flour $600 \\cdot 1.5 = 900$ g, not $1000$. The statement is False.`,
      `**D.** → True

$$2(2w + w) = 48 \\Rightarrow w = 8$$

The rectangle is $8$ by $16$. The statement is True.`,
      `**E.** → True

$$\\frac{3x}{5} - \\frac{x}{5} = 12 \\Rightarrow \\frac{2x}{5} = 12 \\Rightarrow x = 30$$

Check: $18 - 6 = 12$. The statement is True.`,
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
      `The solution of $4(x - 3) = 2x + 10$ is smaller than $10$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

$$2(x + x + 5) = 38 \\Rightarrow 2x + 5 = 19 \\Rightarrow x = 7$$

The longer side is $12$ cm. The statement is True.`,
      `**B.** → True

$$t = 180 / 72 = 2.5$$

hours back from $4$ pm is $1{:}30$ pm. The statement is True.`,
      `**C.** → True

Acid $0.18$ litres. Then $0.18 / (1.5 + w) = 0.08$ gives $w = 0.75$. The statement is True.`,
      `**D.** → False

$$1.75a = 9150 \\Rightarrow a \\approx 5229$$, so second place is about $2614$ EUR, not $3000$. The statement is False.`,
      `**E.** → False

$$4x - 12 = 2x + 10 \\Rightarrow x = 11$$

Eleven is not smaller than ten. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent exam-style claims: a perimeter, a start time from average speed, a dilution to a target percentage, a $50\\%$ prize chain, and a comparison after solving.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Labour at $45$ EUR an hour plus parts`,
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

Parts $160$ EUR, and $160 > 430 / 3 \\approx 143$. The statement is True.`,
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
      `A clock gains $2$ minutes per hour. After $6$ true hours it shows that $6$ hours and $12$ minutes have passed.`,
      `Two-thirds of a journey is $48$ km. The whole journey is $64$ km.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Together $\\frac{5}{36}$ per day, so four days complete $\\frac{5}{9}$. Remaining $\\frac{4}{9}$ takes A $\\frac{16}{3}$ days, not $5$. The statement is False.`,
      `**B.** → True

$$\\frac{160 + 300}{50} = 9.20$$

The statement is True.`,
      `**C.** → True

Outer rectangle $36$ by $26$, perimeter $2 \\cdot 62 = 124$. The statement is True.`,
      `**D.** → True

$$2 \\cdot 6 = 12$$

minutes of extra time shown. The statement is True.`,
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

One-thirtieth of the cistern per hour means a full cistern in $30$ hours. Check: in $30$ hours the pipe would pour $30 / 12 = 2.5$ cisterns and the leak would dump $30 / 20 = 1.5$ cisterns, leaving $1$ cistern. The statement is True.`,
      `**B.** → True

Let the daughter's present age be $d$ years. Then the mother is $3d$ now. In twelve years the mother is twice the daughter.

$$3d + 12 = 2(d + 12)$$

$$3d + 12 = 2d + 24$$

$$d = 12$$

The daughter is $12$ and the mother is $36$. In twelve years they are $24$ and $48$, and $48 = 2 \\cdot 24$. The statement is True.`,
      `**C.** → False

Downstream speed is $18 / 2 = 9$ km/h. Upstream speed is $18 / 6 = 3$ km/h. The current is half the difference of those two, because it adds on the way down and subtracts on the way up.

$$\\text{current} = \\frac{9 - 3}{2} = 3$$

The claim says $4$ km/h. Still water is the average $(9 + 3) / 2 = 6$, and $6 + 4$ would be $10$ downstream, which is not the $9$ we have. The current is $3$ km/h, so the statement is False.`,
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

The claim says $30$ litres. Thirty litres would make $90$ litres in total and $15 / 90 = 16.7\\%$, still above $15\\%$. Forty litres of water are needed, so the statement is False.`,
      `**B.** → True

While they pass, the two trains together must cover the sum of their lengths, $120 + 180 = 300$ m, at the sum of their speeds. Convert $90$ km/h to metres per second by multiplying by $5/18$.

$$90 \\cdot \\frac{5}{18} = 25 \\text{ m/s}$$

$$t = \\frac{300}{25} = 12$$

seconds. The passing time is $12$ seconds, so the statement is True.`,
      `**C.** → False

The clock runs $64$ minutes of its own for every $60$ true minutes, so true time is $60/64$ of the time shown. When the clock shows $6$ hours it has counted $360$ of its minutes.

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

In the first three hours, with no leak, the tap fills $3/8$ of the tank, so $5/8$ remains. From then on the net rate is

$$\\frac{1}{8} - \\frac{1}{12} = \\frac{3}{24} - \\frac{2}{24} = \\frac{1}{24}$$

of the tank per hour. The remaining $5/8$ then takes

$$\\frac{5/8}{1/24} = \\frac{5}{8} \\cdot 24 = 15$$

hours, not $7$. Seven hours at that net rate would fill only $7/24$ of a tank, and $7/24 < 5/8$. The tank is full $15$ hours after the leak starts, so the statement is False.`,
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

Let second place be $y$ euros. Then first is $y / 0.8 = 1.25y$ and third is $0.8y$.

$$1.25y + y + 0.8y = 15250$$

$$3.05y = 15250$$

$$y = 5000$$

Check: first $6250$, second $5000$, third $4000$, and $6250 + 5000 + 4000 = 15250$. Second place is $5000$ EUR, so the statement is True.`,
      `**D.** → True

Two litres at $9\\%$ hold $0.18$ litres of acid. After adding $w$ litres of water the concentration is $6\\%$.

$$\\frac{0.18}{2 + w} = 0.06$$

$$0.18 = 0.12 + 0.06w$$

$$w = 1$$

One litre of water makes $3$ litres in total, and $0.18 / 3 = 0.06$. The statement is True.`,
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

Let B's rate be $r$ jobs per day. Then A's rate is $2r$, and together they do $3r = 1/10$ of the job per day.

$$r = \\frac{1}{30}, \\qquad 2r = \\frac{1}{15}$$

A alone takes $15$ days. In those $15$ days B would do only half a job, and $1 + 1/2 = 3/2$ jobs in $15$ days is a rate of $1/10$ per day, matching the together time. The statement is True.`,
      `**D.** → False

Walking $5$ km at $5$ km/h takes $1$ hour. The rest is $20$ minutes, which is $\\frac{1}{3}$ of an hour. Walking $3$ km at $6$ km/h takes $\\frac{1}{2}$ hour.

$$1 + \\frac{1}{3} + \\frac{1}{2} = \\frac{6 + 2 + 3}{6} = \\frac{11}{6}$$

hours, which is $1$ hour and $50$ minutes, not $1$ hour $40$ minutes. The claim is what you get if the rest is taken as $10$ minutes, or if the second leg is timed at $5$ km/h. The total is $1$ h $50$ min, so the statement is False.`,
      `**E.** → True

Let the larger number be $x$. Then the smaller is $x - 18$, and they add to $64$.

$$x + (x - 18) = 64$$

$$2x = 82$$

$$x = 41$$

The smaller is $23$, and $41 - 23 = 18$. Equivalently the larger is half the sum plus half the difference: $(64 + 18) / 2 = 41$. The statement is True.`,
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

$$\\frac{2/3}{1/15} = 10$$

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

Adding $1.5$ litres makes $4$ litres in total, and $0.4 / 4 = 0.10$. The statement is True.`,
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

$$\\frac{7/12}{1/18} = \\frac{7}{12} \\cdot 18 = \\frac{21}{2} = 10.5$$

days. B still needs $10.5$ days, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 28,
    solution_overview: `Five independent exam-style claims at the ceiling of this subsection: a rectangle whose length is twice the width plus $4$, a start time that is not a whole number of minutes, a dilution to $10\\%$, an $80\\%$ prize chain whose second place is not the obvious round number, and leftover work after a three-day joint spell.`,
  },
];
