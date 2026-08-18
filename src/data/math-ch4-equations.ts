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

$$x + 3 = 10 \\Rightarrow x = 7$$

while

$$2x = 16 \\Rightarrow x = 8$$

They do not share a solution, so the statement is False.`,
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
    title: `Apples at 2 EUR and pears at 3 EUR`,
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

After one hour, $135$ km remains. They close at $105$ km/h, so $t = \\frac{135}{105} = \\frac{9}{7}$ hours, not $2$. The statement is False.`,
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

Scale by $\\frac{12}{8} = 1.5$: flour $600 \\cdot 1.5 = 900$ g, not $1000$. The statement is False.`,
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

$$t = \\frac{180}{72} = 2.5$$

hours back from $4$ pm is $1{:}30$ pm. The statement is True.`,
      `**C.** → True

Acid $0.18$ litres. Then $\\frac{0.18}{1.5 + w} = 0.08$ gives $w = 0.75$. The statement is True.`,
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
      `A number times itself equals $36$. One number that works is $-6$.`,
      `If a square of side $x$ cm has area $9$ cm$^{2}$, then $x = 3$ is the only real possibility.`,
      `$5^{2} - 4^{2}$ equals $9$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The area of a square is the side times itself. If the side is $s$ cm, then

$$s^{2} = 49$$

A length is positive, so $s = 7$, not $-7$. Check: $7 \\cdot 7 = 49$. Each side is $7$ cm, so the statement is True.`,
      `**B.** → False

$$x^{2} = 16$$

splits into two real numbers, because $(-4)^{2} = 16$ as well as $4^{2} = 16$. The claim says $4$ is the only real number that works. There are two: $4$ and $-4$. The statement is False.`,
      `**C.** → True

$$x^{2} = 36$$

has solutions $x = 6$ and $x = -6$. The claim only asks whether $-6$ is one of them. It is, because $(-6)\\cdot(-6) = 36$. The statement is True.`,
      `**D.** → False

A geometric side must be positive, so $x = 3$ is the side of that square. But the equation $x^{2} = 9$ as a number sentence also has $x = -3$. The claim says $x = 3$ is the only real possibility for that equation. As an equation it is not; as a length it is. The statement is about the equation of area written with $x$, and it rules out $-3$ without saying "side length". The only-real-possibility wording is therefore false for $x^{2} = 9$. The statement is False.`,
      `**E.** → True

$$5^{2} - 4^{2} = 25 - 16 = 9$$

The difference of those squares is $9$, so the statement is True.`,
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
      `The solutions of $(x - 2)(x - 5) = 0$ are $x = 2$ and $x = 5$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has solutions $2$ and $3$.`,
      `The equation $x^{2} - 5x + 6 = 0$ has solutions $1$ and $6$.`,
      `If a product of two real numbers is zero, then at least one of those numbers is zero.`,
      `The equation $x^{2} = 5x$ has only the solution $x = 5$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A product is zero only when at least one factor is zero.

$$x - 2 = 0 \\quad \\text{or} \\quad x - 5 = 0$$

so $x = 2$ or $x = 5$. Both check in the original product. The statement is True.`,
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
      `Two consecutive integers multiply to $12$. The pair is $2$ and $6$.`,
      `A rectangle is $1$ cm longer than it is wide and has area $12$ cm$^{2}$. Then the width is $3$ cm.`,
      `That same rectangle has longer side $5$ cm.`,
    ],
    answer_key: [true, true, false, true, false],
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
      `**C.** → False

$2$ and $6$ are not consecutive, and $2 \\cdot 6 = 12$ is a different split. Consecutive integers differ by $1$. The statement is False.`,
      `**D.** → True

Let the width be $x$ cm. Then the length is $x + 1$, and the area is $12$.

$$x(x + 1) = 12$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

The positive width is $x = 3$. Then the length is $4$, and $3 \\cdot 4 = 12$. The statement is True.`,
      `**E.** → False

The longer side is $3 + 1 = 4$ cm, not $5$. Five would need area $3 \\cdot 5 = 15$, not $12$. The statement is False.`,
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
      `The equation $x^{2} - 4x = 0$ means $x$ is $0$ or $4$.`,
      `A number squared, minus four times the number, is zero. Zero itself is allowed.`,
      `The discriminant of $x^{2} - 4x + 4$ is $4$.`,
      `The equation $x^{2} - 4x + 4 = 0$ has two distinct real roots.`,
      `The equation $(x - 2)^{2} = 0$ has solution $x = 2$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$x(x - 4) = 0$$

so $x = 0$ or $x = 4$. Both satisfy the original. The statement is True.`,
      `**B.** → True

That is the same equation. $x = 0$ gives $0 - 0 = 0$. Zero is a genuine solution, not a discarded extra. The statement is True.`,
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
      `The roots are $2$ and $5$.`,
      `The larger root is $6$.`,
      `Both roots are greater than $4$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Vieta's formulas for $x^{2} + px + q = 0$ written as $x^{2} - (\\text{sum})x + (\\text{product}) = 0$ give sum $7$ here. You can also add the roots once you have them: $2 + 5 = 7$. The statement is True.`,
      `**B.** → True

The constant term of a monic quadratic is the product of the roots: $2 \\cdot 5 = 10$. The statement is True.`,
      `**C.** → True

Factor: $(x - 2)(x - 5) = x^{2} - 7x + 10$. The roots are $2$ and $5$. The statement is True.`,
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
      `The equation $x^{2} + x - 6 = 0$ has a positive root $2$.`,
      `The negative root of that equation is $-2$.`,
      `The discriminant of $x^{2} + x - 6$ is $25$.`,
      `That equation has two distinct real solutions.`,
      `That equation has no real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$x^{2} + x - 6 = (x + 3)(x - 2)$$

The roots are $-3$ and $2$. One of them is the positive number $2$. Check: $4 + 2 - 6 = 0$. The statement is True.`,
      `**B.** → False

The negative root is $-3$, not $-2$. Check of $-2$: $4 - 2 - 6 = -4$, not $0$. The statement is False.`,
      `**C.** → True

$$\\Delta = 1^{2} - 4(1)(-6) = 1 + 24 = 25$$

The discriminant is $25$, so the statement is True.`,
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
      `The integers $6$ and $9$ also multiply to $56$.`,
      `The positive pair adds to $16$.`,
    ],
    answer_key: [true, true, true, false, false],
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
      `**D.** → False

$6 \\cdot 9 = 54$, not $56$, and those two are not consecutive. The statement is False.`,
      `**E.** → False

$7 + 8 = 15$, not $16$. Sixteen would be $7 + 9$. The statement is False.`,
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
      `The length is $12$ cm.`,
      `The perimeter is $40$ cm.`,
      `The diagonal is $13$ cm.`,
      `The width is $6$ cm.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $w + 7$.

$$w(w + 7) = 60$$

$$w^{2} + 7w - 60 = 0$$

$$\\Delta = 49 + 240 = 289 = 17^{2}$$

$$w = \\frac{-7 \\pm 17}{2}$$

The positive value is $w = 5$. Check: $5 \\cdot 12 = 60$. The statement is True.`,
      `**B.** → True

Length $5 + 7 = 12$ cm. The statement is True.`,
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
      `The positive root of $x^{2} - 2x - 15 = 0$ is $5$.`,
      `A right triangle has legs $x$ cm and $x + 1$ cm and hypotenuse $5$ cm. Then the shorter leg is $3$ cm.`,
      `That triangle is equilateral.`,
      `The area of that triangle is $12$ cm$^{2}$.`,
      `The longer leg is $4$ cm.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

$$x^{2} - 2x - 15 = (x - 5)(x + 3)$$

The roots are $5$ and $-3$. The positive one is $5$. The statement is True.`,
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
      `The equation $x^{2} + 4x + 5 = 0$ has two distinct real roots.`,
      `The equation $x^{2} + 4x + 4 = 0$ has exactly one real solution (a double root).`,
      `The equation $x^{2} + 4x + 3 = 0$ has two distinct real roots.`,
      `Those two roots of $x^{2} + 4x + 3 = 0$ are $-1$ and $-3$.`,
      `All three equations have the same number of distinct real roots.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

$$\\Delta = 16 - 20 = -4 < 0$$

No real roots. Completing the square gives $(x + 2)^{2} + 1 = 0$, a square plus one, which cannot be zero. The statement is False.`,
      `**B.** → True

$$\\Delta = 16 - 16 = 0$$

and $x^{2} + 4x + 4 = (x + 2)^{2}$, so $x = -2$ is a double root. Exactly one real solution. The statement is True.`,
      `**C.** → True

$$\\Delta = 16 - 12 = 4 > 0$$

Two distinct real roots. The statement is True.`,
      `**D.** → True

$(x + 1)(x + 3) = x^{2} + 4x + 3$. The roots are $-1$ and $-3$. The statement is True.`,
      `**E.** → False

The three discriminants are negative, zero, and positive, so the counts are $0$, $1$, and $2$ distinct real roots. They are not the same. The statement is False.`,
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
      `Two numbers add to $10$ and multiply to $21$. They are $3$ and $7$.`,
      `Those two numbers are the roots of $t^{2} - 10t + 24 = 0$.`,
      `Both numbers are larger than $4$.`,
      `Their difference is $4$.`,
      `Each of them is positive.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

$3 + 7 = 10$ and $3 \\cdot 7 = 21$. They are the two numbers. The statement is True.`,
      `**B.** → False

Numbers that add to $10$ and multiply to $21$ are the roots of $t^{2} - 10t + 21 = 0$, because

$$(t - 3)(t - 7) = t^{2} - 10t + 21.$$

The claimed equation is $t^{2} - 10t + 24 = 0$, whose constant term is $24$, not $21$. That one factors as $(t - 4)(t - 6)$, so its roots are $4$ and $6$. Those add to $10$ as well, but they multiply to $24$. The statement is False.`,
      `**C.** → False

$7 > 4$, but $3$ is not larger than $4$. Both numbers larger than $4$ would need a product larger than $16$ with sum $10$ in a different pair, such as $4$ and $6$. The statement is False.`,
      `**D.** → True

$$7 - 3 = 4$$

The two numbers differ by $4$. The statement is True.`,
      `**E.** → True

Both $3$ and $7$ are positive. Their product $21$ is positive and their sum $10$ is positive, which already forces both signs to be plus. The statement is True.`,
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
      `The two real roots of that equation are $1$ and $5$.`,
      `Both roots are larger than $2$.`,
      `The axis of symmetry of $y = x^{2} - 6x + 5$ is the line $x = 3$.`,
      `The sum of the two roots is $8$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Move the constant, then add the square of half the middle coefficient, which is $3$.

$$x^{2} - 6x = -5$$

$$x^{2} - 6x + 9 = 4$$

$$(x - 3)^{2} = 4$$

Half of $6$ is $3$, and $3^{2} = 9$ is what completes the square. The statement is True.`,
      `**B.** → True

A square equals $4$ when the inside is $2$ or $-2$.

$$x - 3 = 2 \\quad \\text{or} \\quad x - 3 = -2$$

so $x = 5$ or $x = 1$. Check: $1 - 6 + 5 = 0$ and $25 - 30 + 5 = 0$. The statement is True.`,
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
      `A $3$ cm frame around the same picture would have area $300$ cm$^{2}$.`,
    ],
    answer_key: [true, true, true, false, false],
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
      `**E.** → False

A $3$ cm frame around the same $30$ by $20$ picture has outer area $36 \\cdot 26 = 936$, so the wood is $936 - 600 = 336$ cm$^{2}$, not $300$. The statement is False.`,
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
      `The integers $10$ and $16$ also multiply to $168$.`,
      `The equation $n(n + 2) = 168$ has four distinct integer solutions.`,
    ],
    answer_key: [true, true, true, false, false],
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
      `**D.** → False

$10 \\cdot 16 = 160$, not $168$, and those two differ by $6$, so they are not consecutive even integers. The statement is False.`,
      `**E.** → False

The quadratic $n^{2} + 2n - 168 = 0$ has two real roots, both integers: $12$ and $-14$. Two solutions for $n$, not four. Four would count the four numbers that appear in the two pairs, but those are not four solutions of one equation in $n$. The statement is False.`,
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
      `The width is $6$ cm.`,
      `The length is $9$ cm.`,
      `The perimeter is $36$ cm.`,
      `The width is $9$ cm.`,
      `The length is one and a half times the width.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $\\frac{3}{2}w$, and the area is $54$.

$$w \\cdot \\frac{3}{2}w = 54$$

$$\\frac{3}{2}w^{2} = 54$$

$$w^{2} = 36$$

A length is positive, so $w = 6$. Check: $6 \\cdot 9 = 54$. The statement is True.`,
      `**B.** → True

Length $\\frac{3}{2}\\cdot 6 = 9$ cm. The statement is True.`,
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
      `After $3$ seconds it has travelled $45$ m.`,
      `It takes $8$ seconds to cover $80$ m.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

$$5 \\cdot 4^{2} = 5 \\cdot 16 = 80$$

After $4$ seconds the distance is $80$ m. The statement is True.`,
      `**B.** → True

$$5 \\cdot 2^{2} = 5 \\cdot 4 = 20$$

After $2$ seconds the distance is $20$ m. The statement is True.`,
      `**C.** → False

Distance here grows with $t^{2}$, not with $t$. Half the time is not half the distance. Half of $80$ is $40$, but the $2$-second reading is $20$, not $40$. The statement is False.`,
      `**D.** → True

$$5 \\cdot 3^{2} = 5 \\cdot 9 = 45$$

After $3$ seconds the distance is $45$ m. The statement is True.`,
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
      `The perimeter is $10(1 + \\sqrt{2})$ cm.`,
      `The area of the triangle is $50$ cm$^{2}$.`,
    ],
    answer_key: [true, false, true, true, false],
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
      `**D.** → True

Two legs plus the hypotenuse:

$$5\\sqrt{2} + 5\\sqrt{2} + 10 = 10 + 10\\sqrt{2} = 10(1 + \\sqrt{2})$$

The perimeter is $10(1 + \\sqrt{2})$ cm. The statement is True.`,
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
      `In $6$ years the product of their ages will be $360$.`,
      `The father is $36$ years old now.`,
      `In $6$ years the son will be $12$ and the father $36$.`,
    ],
    answer_key: [true, true, false, false, true],
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
      `**C.** → False

In $6$ years they will be $12$ and $36$, and $12 \\cdot 36 = 432$, not $360$. Three hundred sixty would be $12 \\cdot 30$, as if the father had not aged. The statement is False.`,
      `**D.** → False

Thirty-six is the father's age in $6$ years, not now. Now he is $30$. The statement is False.`,
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
    title: `A number and its reciprocal`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two numbers multiply to $1$. One of them is $5$. The other is $\\frac{1}{5}$.`,
      `The reciprocal of $2$ is $2$.`,
      `The reciprocal of $\\frac{1}{4}$ is $4$.`,
      `Zero has a reciprocal.`,
      `If the reciprocal of a number is $\\frac{1}{6}$, then the number itself is $6$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Two numbers that multiply to $1$ are reciprocals of each other. If one is $5$, the other is $\\frac{1}{5}$, because $5 \\cdot \\frac{1}{5} = 1$. The statement is True.`,
      `**B.** → False

The reciprocal of $2$ is $\\frac{1}{2}$, not $2$. Two times two is $4$, not $1$. The statement is False.`,
      `**C.** → True

$\\frac{1}{4} \\cdot 4 = 1$, so $4$ is the reciprocal of $\\frac{1}{4}$. Turning a fraction upside down gives the same reading. The statement is True.`,
      `**D.** → False

The reciprocal of $x$ is $\\frac{1}{x}$. Division by zero is not allowed, so $0$ has no reciprocal. The statement is False.`,
      `**E.** → True

If $\\frac{1}{x} = \\frac{1}{6}$, then $x = 6$. Check: the reciprocal of $6$ is $\\frac{1}{6}$. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 57,
    solution_overview: `Five independent claims about reciprocals. The reciprocal of a nonzero number $x$ is $\\frac{1}{x}$. Zero is excluded because you cannot divide by zero.`,
  },
  {
    id: `math-4-58`,
    case_id: `MATH 4.58`,
    title: `A number over four more than itself`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number, divided by $2$ more than the number, equals $\\frac{1}{3}$. That number is $1$.`,
      `That fraction is undefined when the number is $-2$.`,
      `The number $4$ also satisfies the same ratio $\\frac{1}{3}$.`,
      `Cross-multiplying $3x = x + 2$ is allowed for every value except $x = -2$.`,
      `The number that works is $3$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the number be $x$. Then

$$\\frac{x}{x + 2} = \\frac{1}{3}$$

For $x \\neq -2$, cross-multiply:

$$3x = x + 2$$

$$2x = 2$$

$$x = 1$$

Check: $\\frac{1}{3} = \\frac{1}{3}$. The statement is True.`,
      `**B.** → True

The denominator $x + 2$ is zero at $x = -2$. The original fraction is not a number there. The statement is True.`,
      `**C.** → False

$\\frac{4}{6} = \\frac{2}{3}$, not $\\frac{1}{3}$. Four would fit a ratio of $2$ to $3$, not $1$ to $3$. The statement is False.`,
      `**D.** → True

Clearing denominators is valid precisely when those denominators are not zero. Here that forbids only $x = -2$. The statement is True.`,
      `**E.** → False

At $x = 3$ the fraction is $\\frac{3}{5}$, not $\\frac{1}{3}$. The recovered value is $1$. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 58,
    solution_overview: `Five independent claims about $\\frac{x}{x + 2} = \\frac{1}{3}$. Cross-multiply only after ruling out $x = -2$. The solution is $x = 1$.`,
  },
  {
    id: `math-4-59`,
    case_id: `MATH 4.59`,
    title: `When a denominator forbids a candidate`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation $\\frac{1}{x - 2} = \\frac{3}{x - 2}$ has no solution.`,
      `$x = 2$ is a solution of that equation.`,
      `The equation $\\frac{5}{x + 1} = \\frac{5}{x + 1}$ is true for every real $x$ except $x = -1$.`,
      `The equation $\\frac{2}{x} = 0$ has solution $x = 0$.`,
      `The equation $\\frac{6}{x} = 2$ has solution $x = 3$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

If $x \\neq 2$, both sides have the same nonzero denominator, so the equation says $1 = 3$, which is never true. If $x = 2$, both sides are undefined. There is nowhere left for a solution. The statement is True.`,
      `**B.** → False

At $x = 2$ you are dividing by zero. That value is not in the domain, so it cannot be a solution. The statement is False.`,
      `**C.** → True

When $x \\neq -1$ the two sides are the same number, so the equation holds. At $x = -1$ it is undefined. An identity with a hole, not a solution at the hole. The statement is True.`,
      `**D.** → False

A fraction is zero only when the numerator is zero and the denominator is not. Here the numerator is $2$, never zero, and $x = 0$ is undefined anyway. No solution. The statement is False.`,
      `**E.** → True

$$\\frac{6}{x} = 2 \\quad \\Rightarrow \\quad 6 = 2x \\quad \\Rightarrow \\quad x = 3$$

provided $x \\neq 0$. Check: $\\frac{6}{3} = 2$. The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 59,
    solution_overview: `Five independent rational equations. A value that makes a denominator zero is never a solution. Two fractions with the same denominator are equal only when their numerators are equal, and only where the denominator is allowed.`,
  },
  {
    id: `math-4-60`,
    case_id: `MATH 4.60`,
    title: `A square bed after 3 extra square metres`,
    subsection: `4.3`,
    context: `A gardener adds $3$ m$^{2}$ of soil to a square bed. The new bed is still square, and each side is $4$ m. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The new area is $16$ m$^{2}$.`,
      `The original area was $13$ m$^{2}$.`,
      `The original side was $4$ m.`,
      `The equation $\\sqrt{x + 3} = 4$ has solution $x = 13$.`,
      `The original area was $19$ m$^{2}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A square of side $4$ m has area $4 \\cdot 4 = 16$ m$^{2}$. That is the bed after the extra soil. The statement is True.`,
      `**B.** → True

The extra soil is $3$ m$^{2}$, so the original area is $16 - 3 = 13$ m$^{2}$. The statement is True.`,
      `**C.** → False

The original area is $13$ m$^{2}$, so the original side is $\\sqrt{13}$ m, not $4$. Four metres is the side after the addition. The statement is False.`,
      `**D.** → True

Let $x$ be the original area in square metres. The new side is $\\sqrt{x + 3}$, and that equals $4$.

$$\\sqrt{x + 3} = 4$$

$$x + 3 = 16$$

$$x = 13$$

The principal square root is nonnegative, and $4$ is nonnegative, so squaring is safe here. Check: $\\sqrt{16} = 4$. The statement is True.`,
      `**E.** → False

Nineteen would be $16 + 3$, adding instead of subtracting. The original area is $13$ m$^{2}$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 60,
    solution_overview: `One square bed, five checks. After $3$ m$^{2}$ of soil the side is $4$ m, so the new area is $16$ m$^{2}$. The original area $x$ satisfies $\\sqrt{x + 3} = 4$.`,
  },
  {
    id: `math-4-61`,
    case_id: `MATH 4.61`,
    title: `Five units from $3$ on the number line`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A number that is $5$ units from $3$ on the number line is $8$ or $-2$.`,
      `The equation $\\lvert x - 3 \\rvert = 5$ has both of those solutions.`,
      `The only number $5$ units from $3$ is $8$.`,
      `The equation $\\lvert x \\rvert = 0$ has solution $x = 0$.`,
      `The equation $\\lvert x \\rvert = -2$ has two real solutions.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Distance on the line is absolute value. Five units to the right of $3$ is $8$. Five units to the left is $3 - 5 = -2$. The statement is True.`,
      `**B.** → True

$\\lvert x - 3 \\rvert = 5$ means $x - 3 = 5$ or $x - 3 = -5$, so $x = 8$ or $x = -2$. Both distances equal $5$. The statement is True.`,
      `**C.** → False

Distance does not choose a side. The left-hand point $-2$ is just as far from $3$ as $8$ is. The statement is False.`,
      `**D.** → True

Absolute value is zero only at zero. $\\lvert 0 \\rvert = 0$. The statement is True.`,
      `**E.** → False

Absolute value is never negative. $\\lvert x \\rvert = -2$ has no real $x$. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 61,
    solution_overview: `Five independent claims about absolute value as distance. $\\lvert x - a \\rvert = b$ with $b > 0$ gives two points, $a + b$ and $a - b$. A negative right-hand side is impossible.`,
  },
  {
    id: `math-4-62`,
    case_id: `MATH 4.62`,
    title: `To town at 40 km/h and back at 60`,
    subsection: `4.3`,
    context: `A courier rides $120$ km to town at $40$ km/h and returns the same $120$ km at $60$ km/h. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The ride to town takes $3$ hours.`,
      `The ride back takes $2$ hours.`,
      `The average speed for the round trip is $50$ km/h.`,
      `The average speed for the round trip is $48$ km/h.`,
      `The whole trip takes $4$ hours.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Time is distance over speed.

$$\\frac{120}{40} = 3$$

Three hours to town. The statement is True.`,
      `**B.** → True

$$\\frac{120}{60} = 2$$

Two hours back. The statement is True.`,
      `**C.** → False

Average speed is total distance over total time, not the arithmetic mean of $40$ and $60$. The two speeds are not held for equal times, so $\\frac{40 + 60}{2} = 50$ is the wrong average. The statement is False.`,
      `**D.** → True

Total distance $240$ km, total time $3 + 2 = 5$ hours.

$$\\frac{240}{5} = 48$$

The average is $48$ km/h. Equivalently the harmonic mean of the two speeds for equal distances:

$$\\frac{2}{\\frac{1}{40} + \\frac{1}{60}} = \\frac{2}{\\frac{3 + 2}{120}} = 48$$

The statement is True.`,
      `**E.** → False

The two legs take $5$ hours, not $4$. Four hours would be a $60$ km/h average on $240$ km. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 62,
    solution_overview: `One round trip, five checks. Times are $\\frac{120}{40}$ and $\\frac{120}{60}$. Average speed is $\\frac{240}{5}$, the harmonic mean of the two speeds, not their arithmetic mean.`,
  },
  {
    id: `math-4-63`,
    case_id: `MATH 4.63`,
    title: `A in 6 days, B in 12, working together`,
    subsection: `4.3`,
    context: `A can finish a job in $6$ days and B can finish the same job in $12$ days. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Working together they finish the job in $4$ days.`,
      `In $2$ days together they complete half the job.`,
      `In the same time A does twice as much as B.`,
      `Working together they finish in $9$ days.`,
      `B alone would finish the job in $6$ days.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

A's rate is $\\frac{1}{6}$ of the job per day, B's is $\\frac{1}{12}$. Together

$$\\frac{1}{6} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{1}{4}$$

of the job per day, so the job takes $4$ days. The statement is True.`,
      `**B.** → True

Two days at $\\frac{1}{4}$ of a job per day is $\\frac{1}{2}$ of the job. The statement is True.`,
      `**C.** → True

A's rate is twice B's, because $\\frac{1}{6} = 2 \\cdot \\frac{1}{12}$. In any common stretch of time A does twice the work B does. The statement is True.`,
      `**D.** → False

Nine is the arithmetic mean of $6$ and $12$. Work rates add as reciprocals of the times, not as an average of the times. Together they take $4$ days, which is shorter than either worker alone. The statement is False.`,
      `**E.** → False

B's time alone is $12$ days, not $6$. Six days is A's time. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 63,
    solution_overview: `One job, five checks. Rates $\\frac{1}{6}$ and $\\frac{1}{12}$ add to $\\frac{1}{4}$ of a job per day. Together the job takes $4$ days. Averaging the two times is the usual trap.`,
  },
  {
    id: `math-4-64`,
    case_id: `MATH 4.64`,
    title: `A square lawn of side 5 m`,
    subsection: `4.3`,
    context: `A square lawn has side $5$ m. Its area is $1$ m$^{2}$ more than twice a certain number of square metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `That number is $12$.`,
      `The area of the lawn is $25$ m$^{2}$.`,
      `The equation $\\sqrt{2x + 1} = 5$ has solution $x = 12$.`,
      `The number is $-12$.`,
      `Every solution of the squared equation $2x + 1 = 25$ automatically solves $\\sqrt{2x + 1} = -5$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The area is $5^{2} = 25$ m$^{2}$, and that is $1$ more than twice the number $x$.

$$2x + 1 = 25$$

$$2x = 24$$

$$x = 12$$

Check: $2 \\cdot 12 + 1 = 25$. The statement is True.`,
      `**B.** → True

Side $5$ m gives area $25$ m$^{2}$. The statement is True.`,
      `**C.** → True

The side is the principal square root of the area, so $\\sqrt{2x + 1} = 5$. Squaring (both sides nonnegative) returns $2x + 1 = 25$ and $x = 12$. Check: $\\sqrt{25} = 5$. The statement is True.`,
      `**D.** → False

Negative twelve would make $2x + 1 = -23$, which cannot be an area and cannot be a square of $5$. The recovered number is $12$. The statement is False.`,
      `**E.** → False

The principal square root is never negative, so $\\sqrt{2x + 1} = -5$ has no real solution at all. Squaring would still produce $2x + 1 = 25$, whose root $x = 12$ does not satisfy the equation with $-5$ on the right. Squaring can invent extras, and a negative right-hand side is already impossible. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 64,
    solution_overview: `One lawn, five checks. Area $25$ is $2x + 1$, so $x = 12$. The same relation written as $\\sqrt{2x + 1} = 5$ is a radical equation whose squared form must be checked against the principal root.`,
  },
  {
    id: `math-4-65`,
    case_id: `MATH 4.65`,
    title: `A reading 4 off twice the true value`,
    subsection: `4.3`,
    context: `A gauge is supposed to show twice a true reading $x$. Instead, the absolute error from $4$ is $6$: $\\lvert 2x - 4 \\rvert = 6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The true reading is $5$ or $-1$.`,
      `Both possible readings are positive.`,
      `$2x - 4$ equals $6$ or $-6$.`,
      `If the true reading is $2$, the equation holds.`,
      `The distance from $2x$ to $4$ is $6$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\lvert 2x - 4 \\rvert = 6$$

splits into two linear equations.

$$2x - 4 = 6 \\quad \\text{or} \\quad 2x - 4 = -6$$

$$2x = 10 \\quad \\text{or} \\quad 2x = -2$$

$$x = 5 \\quad \\text{or} \\quad x = -1$$

Check: $\\lvert 10 - 4 \\rvert = 6$ and $\\lvert -2 - 4 \\rvert = 6$. The statement is True.`,
      `**B.** → False

$5$ is positive, but $-1$ is not. The statement is False.`,
      `**C.** → True

That is the definition of absolute value equal to $6$: the inside is $6$ or $-6$. The statement is True.`,
      `**D.** → False

At $x = 2$ the inside is $4 - 4 = 0$, and $\\lvert 0 \\rvert = 0$, not $6$. Two is where the error would be zero. The statement is False.`,
      `**E.** → True

$\\lvert 2x - 4 \\rvert$ is the distance between $2x$ and $4$. The equation says that distance is $6$. The statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `One absolute-value equation, five checks. $\\lvert 2x - 4 \\rvert = 6$ opens into $2x - 4 = \\pm 6$, so $x = 5$ or $x = -1$.`,
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
      `The ratio is also defined when the flour is $4$ cups.`,
      `If the baker used $8$ cups of flour, the same ratio $3$ would still hold.`,
      `The flour is three times that $2$-cup remainder.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let flour be $x$ cups. Then

$$\\frac{x}{x - 4} = 3$$

with $x \\neq 4$. Cross-multiply:

$$x = 3(x - 4)$$

$$x = 3x - 12$$

$$12 = 2x$$

$$x = 6$$

Check: $\\frac{6}{2} = 3$. The statement is True.`,
      `**B.** → True

$6 - 4 = 2$ cups. That is the denominator. The statement is True.`,
      `**C.** → False

If the flour is $4$ cups, the denominator $x - 4$ is zero. The ratio is undefined, so $x = 4$ is not a solution and not a legal recipe. The working amount is $6$ cups. The statement is False.`,
      `**D.** → False

Eight cups would give leftover $4$ and ratio $\\frac{8}{4} = 2$, not $3$. The statement is False.`,
      `**E.** → True

Flour $6$ cups is three times the $2$-cup remainder, which is the same as $\\frac{6}{2} = 3$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `One recipe, five checks. $\\frac{x}{x - 4} = 3$ with $x \\neq 4$ gives $x = 6$ cups of flour and a $2$-cup remainder.`,
  },
  {
    id: `math-4-67`,
    case_id: `MATH 4.67`,
    title: `Two square gardens that differ by 3 square metres`,
    subsection: `4.3`,
    context: `Two square gardens. The smaller has area $3$ m$^{2}$ less than the larger. The side of the smaller, plus $1$ m, equals $4$ m. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Let the larger area be $x$ m$^{2}$. Then the smaller area is $x - 3$, and its side plus $1$ is $4$:

$$\\sqrt{x - 3} + 1 = 4$$

$$\\sqrt{x - 3} = 3$$

$$x - 3 = 9$$

$$x = 12$$

The larger area is $12$ m$^{2}$. The statement is True.`,
      `**B.** → True

Smaller area $12 - 3 = 9$ m$^{2}$, and $\\sqrt{9} = 3$, so $3 + 1 = 4$. The statement is True.`,
      `**C.** → False

The smaller side is $3$ m, not $4$. Four metres is that side plus one. The statement is False.`,
      `**D.** → False

The larger side is $\\sqrt{12} = 2\\sqrt{3}$ m, about $3.46$ m, not $4$. The statement is False.`,
      `**E.** → True

That is the opening relation: the areas differ by $3$ m$^{2}$. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 67,
    solution_overview: `Two square gardens, five checks. The smaller side satisfies $\\sqrt{x - 3} + 1 = 4$, so the larger area is $12$ m$^{2}$ and the smaller is $9$ m$^{2}$.`,
  },
  {
    id: `math-4-68`,
    case_id: `MATH 4.68`,
    title: `Two pipes, one twice as fast as the other`,
    subsection: `4.3`,
    context: `Pipe A fills a tank in $3$ hours. Pipe B fills the same tank in $6$ hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Together the two pipes fill the tank in $2$ hours.`,
      `In $1$ hour together they fill half the tank.`,
      `Together they fill the tank in $4.5$ hours.`,
      `In the same time A pours twice as much as B.`,
      `Together they take $9$ hours.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Rates add.

$$\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{1}{2}$$

of the tank per hour, so the tank is full in $2$ hours. The statement is True.`,
      `**B.** → True

One hour at half a tank per hour is half a tank. The statement is True.`,
      `**C.** → False

$4.5$ is the arithmetic mean of $3$ and $6$. Combined work is faster than either pipe, not a compromise between the two times. They take $2$ hours together. The statement is False.`,
      `**D.** → True

A's rate $\\frac{1}{3}$ is twice B's rate $\\frac{1}{6}$. In any common hour A pours twice B's volume. The statement is True.`,
      `**E.** → False

Nine hours is $3 + 6$, as if they took turns for a full tank each. Together they share one tank and finish in $2$ hours. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 68,
    solution_overview: `One tank, five checks. Reciprocal times $\\frac{1}{3}$ and $\\frac{1}{6}$ add to $\\frac{1}{2}$ of a tank per hour, so together the job takes $2$ hours.`,
  },
  {
    id: `math-4-69`,
    case_id: `MATH 4.69`,
    title: `A number equal to the square root of two more than itself`,
    subsection: `4.3`,
    context: `A number equals the square root of two more than the number. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The number $2$ works.`,
      `The number $-1$ works.`,
      `Squaring both sides of $\\sqrt{x + 2} = x$ produces $x^{2} - x - 2 = 0$.`,
      `Both roots of that quadratic solve the original equation.`,
      `The original equation has only one real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The claim is $\\sqrt{x + 2} = x$. At $x = 2$:

$$\\sqrt{4} = 2$$

Both sides match, and $2$ is nonnegative, which a principal square root requires on the right as well. The statement is True.`,
      `**B.** → False

At $x = -1$:

$$\\sqrt{1} = 1 \\neq -1$$

The left side is $1$, the right side is $-1$. Also a principal square root cannot equal a negative number. Minus one is an extra root of the squared equation, not of the original. The statement is False.`,
      `**C.** → True

Square both sides (after requiring $x \\geq 0$, because the right side is a principal root):

$$x + 2 = x^{2}$$

$$x^{2} - x - 2 = 0$$

The statement is True.`,
      `**D.** → False

$$(x - 2)(x + 1) = 0$$

gives $x = 2$ and $x = -1$. Only $x = 2$ survives the check. Squaring is not reversible: it can add a false candidate. The statement is False.`,
      `**E.** → True

After the check, only $x = 2$ remains. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `Five independent checks of $\\sqrt{x + 2} = x$. Squaring produces $x^{2} - x - 2 = 0$, whose roots are $2$ and $-1$. Only the nonnegative candidate $x = 2$ solves the original.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `Equally far from kilometre posts minus 1 and 5`,
    subsection: `4.3`,
    context: `A depot on a straight road is equally far from kilometre post $-1$ and kilometre post $5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The depot is at kilometre $2$.`,
      `Its distance to each of those posts is $3$ km.`,
      `The depot is at kilometre $3$.`,
      `The equation $\\lvert x + 1 \\rvert = \\lvert x - 5 \\rvert$ has exactly one real solution.`,
      `Every point on the road is equally far from those two posts.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Equal distance from two points on a line means the midpoint.

$$\\frac{-1 + 5}{2} = 2$$

Check: $\\lvert 2 - (-1) \\rvert = 3$ and $\\lvert 2 - 5 \\rvert = 3$. The depot is at km $2$. The statement is True.`,
      `**B.** → True

Both distances are $3$ km. The statement is True.`,
      `**C.** → False

Kilometre $3$ is $4$ km from $-1$ and $2$ km from $5$. Those are not equal. The midpoint is $2$, not $3$. The statement is False.`,
      `**D.** → True

$\\lvert x + 1 \\rvert = \\lvert x - 5 \\rvert$ means $x + 1 = x - 5$ (impossible) or $x + 1 = -(x - 5)$.

$$x + 1 = -x + 5$$

$$2x = 4$$

$$x = 2$$

One real solution. The statement is True.`,
      `**E.** → False

Only the midpoint is equally far from both posts. Any other point is closer to one of them. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 70,
    solution_overview: `One depot, five checks. Equal distance from $-1$ and $5$ is the midpoint $2$, which is the unique solution of $\\lvert x + 1 \\rvert = \\lvert x - 5 \\rvert$.`,
  },
  {
    id: `math-4-71`,
    case_id: `MATH 4.71`,
    title: `A 40 litre vat of 20 percent acid, drained and refilled`,
    subsection: `4.3`,
    context: `A vat holds $40$ litres of a $20\\%$ acid solution. A worker drains some litres and refills the vat with water. The new mixture is $12\\%$ acid. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$16$ litres were drained.`,
      `After the swap, $4.8$ litres of acid remain.`,
      `$20$ litres were drained.`,
      `After the swap the vat is still $40$ litres in all.`,
      `The new mixture is $15\\%$ acid.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The original acid is $0.20 \\cdot 40 = 8$ litres. Let $x$ litres be drained. Then $0.20x$ litres of acid leave, and $8 - 0.20x$ litres of acid remain in $40$ litres of mixture.

$$\\frac{8 - 0.20x}{40} = 0.12$$

$$8 - 0.20x = 4.8$$

$$0.20x = 3.2$$

$$x = 16$$

Sixteen litres were drained. The statement is True.`,
      `**B.** → True

Acid left: $8 - 0.20 \\cdot 16 = 8 - 3.2 = 4.8$ litres, which is $12\\%$ of $40$. The statement is True.`,
      `**C.** → False

Twenty litres drained would leave $0.20 \\cdot 20 = 4$ litres of acid in $40$ litres, which is $10\\%$, not $12\\%$. The recovered volume is $16$ litres. The statement is False.`,
      `**D.** → True

The worker refills with water up to the original mark, so the vat is $40$ litres again. Only the acid concentration has changed. The statement is True.`,
      `**E.** → False

The new concentration is $12\\%$, not $15\\%$. Fifteen percent would need $6$ litres of acid still in the vat, which would mean draining only $10$ litres. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `One vat, five checks. Drain $x$ litres of a $20\\%$ mix from $40$ litres and refill with water. The new concentration $12\\%$ recovers $x = 16$.`,
  },
  {
    id: `math-4-72`,
    case_id: `MATH 4.72`,
    title: `A number plus its reciprocal is 13 over 6`,
    subsection: `4.3`,
    context: `A number plus its reciprocal equals $\\frac{13}{6}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `One such number is $\\frac{3}{2}$.`,
      `The other is $\\frac{2}{3}$.`,
      `The two numbers are reciprocals of each other.`,
      `Their sum is $2$.`,
      `The number $1$ works.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the number be $x \\neq 0$. Then

$$x + \\frac{1}{x} = \\frac{13}{6}$$

Multiply through by $6x$:

$$6x^{2} + 6 = 13x$$

$$6x^{2} - 13x + 6 = 0$$

$$\\Delta = 169 - 144 = 25$$

$$x = \\frac{13 \\pm 5}{12}$$

so $x = \\frac{18}{12} = \\frac{3}{2}$ or $x = \\frac{8}{12} = \\frac{2}{3}$. Check: $\\frac{3}{2} + \\frac{2}{3} = \\frac{9 + 4}{6} = \\frac{13}{6}$. The statement is True.`,
      `**B.** → True

That is the other root. The statement is True.`,
      `**C.** → True

$\\frac{3}{2} \\cdot \\frac{2}{3} = 1$. Each is the reciprocal of the other, which is why both solve the same reciprocal equation. The statement is True.`,
      `**D.** → False

$\\frac{3}{2} + \\frac{2}{3} = \\frac{13}{6}$, not $2$. Two would be $1 + 1$. The statement is False.`,
      `**E.** → False

$1 + \\frac{1}{1} = 2 = \\frac{12}{6}$, which is not $\\frac{13}{6}$. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `Five independent claims about $x + \\frac{1}{x} = \\frac{13}{6}$. Clearing the denominator gives $6x^{2} - 13x + 6 = 0$, whose roots $\\frac{3}{2}$ and $\\frac{2}{3}$ are reciprocals.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `The principal square root is never negative`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square garden of area $9$ m$^{2}$ has side $3$ m, not $-3$ m.`,
      `For every real number $x$, $\\sqrt{x^{2}} = x$.`,
      `For every real number $x$, $\\sqrt{x^{2}} = \\lvert x \\rvert$.`,
      `A square of area $9$ m$^{2}$ can have side $-3$ m.`,
      `The equation $\\sqrt{x} = -3$ has no real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

A length is positive. $\\sqrt{9} = 3$, the principal (nonnegative) square root. The statement is True.`,
      `**B.** → False

If $x = -3$, then $\\sqrt{(-3)^{2}} = \\sqrt{9} = 3$, not $-3$. The identity $\\sqrt{x^{2}} = x$ fails for negative $x$. The statement is False.`,
      `**C.** → True

$\\sqrt{x^{2}}$ is the principal square root of a square, which is $\\lvert x \\rvert$. For $x = 3$ both sides are $3$; for $x = -3$ both sides are $3$. The statement is True.`,
      `**D.** → False

A geometric side cannot be negative. The equation $s^{2} = 9$ as a number sentence has $s = -3$, but a side of a garden does not. The statement is False.`,
      `**E.** → True

The symbol $\\sqrt{x}$ already means the nonnegative root. It cannot equal $-3$. Squaring would give $x = 9$, and $\\sqrt{9} = 3 \\neq -3$. No real solution. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `Five independent claims about the principal square root. $\\sqrt{x^{2}} = \\lvert x \\rvert$, not $x$. A negative right-hand side for $\\sqrt{x}$ is impossible.`,
  },
  {
    id: `math-4-74`,
    case_id: `MATH 4.74`,
    title: `A recipe with one extra cup of flour`,
    subsection: `4.3`,
    context: `A recipe uses $1$ cup more flour than sugar. The amount of flour, divided by the amount of sugar, is $\\frac{5}{4}$. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Let sugar be $s$ cups. Then flour is $s + 1$, and

$$\\frac{s + 1}{s} = \\frac{5}{4}$$

with $s \\neq 0$. Cross-multiply:

$$4(s + 1) = 5s$$

$$4s + 4 = 5s$$

$$4 = s$$

Four cups of sugar. Check: flour $5$, and $\\frac{5}{4}$ matches. The statement is True.`,
      `**B.** → True

Flour is $4 + 1 = 5$ cups. The statement is True.`,
      `**C.** → False

Five cups is the flour, not the sugar. The statement is False.`,
      `**D.** → False

$4 + 5 = 9$ cups, not $8$. Eight would be $4 + 4$. The statement is False.`,
      `**E.** → False

Sugar $8$ and flour $9$ give ratio $\\frac{9}{8}$, not $\\frac{5}{4}$. The extra cup is a fixed $1$, so the ratio $\\frac{s + 1}{s}$ falls toward $1$ as $s$ grows. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `One recipe, five checks. Flour $s + 1$ over sugar $s$ equals $\\frac{5}{4}$, so $s = 4$ and flour is $5$ cups.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `A 10 m ladder, foot pulled from 6 m to 8 m`,
    subsection: `4.3`,
    context: `A $10$ m ladder leans against a wall, foot $6$ m from the wall. The foot is then pulled out to $8$ m from the wall. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At first the top is $8$ m up the wall.`,
      `After the move the top is $6$ m up the wall.`,
      `The top drops by $4$ m.`,
      `The first position is a $6$-$8$-$10$ triangle.`,
      `The area of the first triangle is $48$ m$^{2}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Pythagoras with hypotenuse $10$ and base $6$:

$$h^{2} + 6^{2} = 10^{2}$$

$$h^{2} = 100 - 36 = 64$$

$$h = \\sqrt{64} = 8$$

(the positive root). The top is $8$ m up. The statement is True.`,
      `**B.** → True

With the foot at $8$ m:

$$h_{1}^{2} + 8^{2} = 10^{2}$$

$$h_{1}^{2} = 100 - 64 = 36$$

$$h_{1} = \\sqrt{36} = 6$$

The top is $6$ m up. The statement is True.`,
      `**C.** → False

The drop is $8 - 6 = 2$ m, not $4$. Four would be the difference of the two bases, $8 - 4$, or a mix-up with $10 - 6$. Heights come from square roots, not from subtracting the bases from the hypotenuse. The statement is False.`,
      `**D.** → True

$6^{2} + 8^{2} = 36 + 64 = 100 = 10^{2}$. It is the $3$-$4$-$5$ triple scaled by $2$. The statement is True.`,
      `**E.** → False

Area is half the product of the legs:

$$\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$$

Forty-eight is the product without the half. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 75,
    solution_overview: `One ladder, five checks. Heights are $\\sqrt{10^{2} - 6^{2}} = 8$ and $\\sqrt{10^{2} - 8^{2}} = 6$. The top drops by $2$ m, not $4$ m.`,
  },
  {
    id: `math-4-76`,
    case_id: `MATH 4.76`,
    title: `A part that must be 50 mm, off by exactly 2 mm`,
    subsection: `4.3`,
    context: `A machine part is specified at $50$ mm. The inspector flags pieces whose length $x$ satisfies $\\lvert x - 50 \\rvert = 2$, the exact $2$ mm boundary. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two boundary lengths are $48$ mm and $52$ mm.`,
      `A piece of $50$ mm satisfies $\\lvert x - 50 \\rvert = 2$.`,
      `A piece of $54$ mm is not on that $2$ mm boundary.`,
      `The equation $\\lvert x - 50 \\rvert = 2$ has only one solution.`,
      `The two boundary lengths are centred at $50$ mm.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

$$\\lvert x - 50 \\rvert = 2$$

means $x - 50 = 2$ or $x - 50 = -2$, so $x = 52$ or $x = 48$. Those are the two exact-boundary lengths. The statement is True.`,
      `**B.** → False

At $50$ mm the error is $0$, and $\\lvert 0 \\rvert = 0$, not $2$. Fifty millimetres is the target, not the boundary. The statement is False.`,
      `**C.** → True

$\\lvert 54 - 50 \\rvert = 4$, which is $4$ mm off, not $2$. Fifty-four millimetres is outside that boundary equation. The statement is True.`,
      `**D.** → False

Absolute value equal to a positive number always gives two solutions, one on each side of the centre. Here $48$ and $52$. The statement is False.`,
      `**E.** → True

The midpoint of $48$ and $52$ is $50$. That is the specified length. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 76,
    solution_overview: `One tolerance, five checks. $\\lvert x - 50 \\rvert = 2$ is the $2$ mm boundary, so the lengths are $48$ mm and $52$ mm. The target $50$ mm itself is not on that boundary.`,
  },
  {
    id: `math-4-77`,
    case_id: `MATH 4.77`,
    title: `A reciprocal, a square root, and a distance of 5`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Twice a number, divided by one less than the number, equals $1$. Then the number is $3$.`,
      `The square root of one less than a number equals one less than the number. The only real solution is $2$.`,
      `A number is $5$ units from $3$ on the line. The number is $-2$ or $8$.`,
      `A number's reciprocal, plus $\\frac{1}{6}$, equals $\\frac{1}{2}$. Then the number is $3$.`,
      `The equation $\\sqrt{2x - 3} = -1$ has a real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

$$\\frac{2}{x - 1} = 1$$

with $x \\neq 1$. Then $2 = x - 1$, so $x = 3$. Check: $\\frac{2}{2} = 1$. The statement is True.`,
      `**B.** → False

$$\\sqrt{x - 1} = x - 1$$

Let $u = x - 1$. The domain needs $u \\geq 0$, and $\\sqrt{u} = u$ gives $u = 0$ or $u = 1$. So $x = 1$ or $x = 2$. Check: $\\sqrt{0} = 0$ and $\\sqrt{1} = 1$. Two real solutions, not only $2$. The statement is False.`,
      `**C.** → True

$\\lvert x - 3 \\rvert = 5$ gives $x = 8$ or $x = -2$. Distance $5$ from $3$. The statement is True.`,
      `**D.** → True

$$\\frac{1}{x} + \\frac{1}{6} = \\frac{1}{2}$$

$$\\frac{1}{x} = \\frac{1}{2} - \\frac{1}{6} = \\frac{3 - 1}{6} = \\frac{1}{3}$$

so $x = 3$, and $x \\neq 0$. Check: $\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$. The statement is True.`,
      `**E.** → False

A principal square root is never negative. No real $x$ makes $\\sqrt{2x - 3} = -1$. (Squaring would give $2x - 3 = 1$, so $x = 2$, and $\\sqrt{1} = 1 \\neq -1$.) The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Five independent stories: a rational equation $\\frac{2}{x - 1} = 1$, a radical $\\sqrt{x - 1} = x - 1$ with two surviving roots, a distance $5$ from $3$, a reciprocal plus $\\frac{1}{6}$, and a square root equal to $-1$ which is impossible.`,
  },
  {
    id: `math-4-78`,
    case_id: `MATH 4.78`,
    title: `Half a 240 km trip at 40 km/h, average 60`,
    subsection: `4.3`,
    context: `A $240$ km journey is driven in two equal $120$ km halves. The first half is at $40$ km/h. The driver wants an average of $60$ km/h for the whole $240$ km. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The second half must be driven at $120$ km/h.`,
      `The first $120$ km take $3$ hours.`,
      `The average speed of the whole trip is then $80$ km/h.`,
      `The whole trip takes $4$ hours.`,
      `The second $120$ km then take $3$ hours.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Average $60$ km/h on $240$ km means total time $4$ hours. The first half already used

$$\\frac{120}{40} = 3$$

hours, so $1$ hour remains for the second $120$ km.

$$\\frac{120}{1} = 120$$

The second half must be at $120$ km/h. Equivalently, equal distances give the harmonic mean

$$\\frac{2}{\\frac{1}{40} + \\frac{1}{v}} = 60 \\quad \\Rightarrow \\quad \\frac{1}{v} = \\frac{1}{30} - \\frac{1}{40} = \\frac{1}{120}$$

so $v = 120$. The statement is True.`,
      `**B.** → True

$\\frac{120}{40} = 3$ hours. The statement is True.`,
      `**C.** → False

The arithmetic mean of $40$ and $120$ is $80$, but the car spends $3$ hours slow and only $1$ hour fast, so the trip average is $60$ km/h, not $80$. The statement is False.`,
      `**D.** → True

That is the $60$ km/h average on $240$ km:

$$\\frac{240}{60} = 4$$

hours. Also $3 + 1 = 4$. The statement is True.`,
      `**E.** → False

The second $120$ km have only $1$ hour left, so they take $1$ hour at $120$ km/h, not $3$. Three hours is the first-half time. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `One journey in two equal distances, five checks. First half at $40$ km/h uses $3$ of the $4$ hours allowed by a $60$ km/h average, so the second half must be at $120$ km/h. The arithmetic mean $80$ is the trap.`,
  },
];

