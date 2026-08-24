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

Start from

$$2x + 6 = 14$$

Subtract $6$ from both sides:

$$2x = 8$$

Divide both sides by $2$:

$$x = 4$$

Put $4$ back in: $2\\cdot 4 + 6 = 8 + 6 = 14$. Both sides match, so $x = 4$ really is the solution, and the statement is True.`,
      `**B.** → False

The same undoing, now with a subtraction on the left.

$$5x - 3 = 12$$

Add $3$ to both sides:

$$5x = 15$$

Divide by $5$:

$$x = 3$$

The claim says $x = 2$. That would give $5\\cdot 2 - 3 = 7$, which is not $12$. The recovered solution is $3$, not $2$, so the statement is False.`,
      `**C.** → True

Subtracting $7$ is undone by adding $7$ to both sides.

$$x - 7 = 2$$

$$x = 2 + 7 = 9$$

Check: $9 - 7 = 2$. The number that works is $9$, so the statement is True.`,
      `**D.** → True

The $3$ sits outside the bracket, so expand first, then isolate $x$.

$$3(x + 1) = 12$$

$$3x + 3 = 12$$

Subtract $3$:

$$3x = 9$$

Divide by $3$:

$$x = 3$$

Check: $3(3 + 1) = 3\\cdot 4 = 12$. The solution is $3$, so the statement is True.`,
      `**E.** → False

"No solution" would mean no real number makes the two sides equal. Here

$$4x = 0$$

Divide by $4$:

$$x = 0$$

Zero is a perfectly good number, and $4\\cdot 0 = 0$. The equation has the unique solution $x = 0$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Five independent claims about linear equations in one unknown. A linear equation $ax + b = c$ with $a \\neq 0$ has exactly one solution, found by undoing operations on both sides until $x$ stands alone. Zero is allowed as a solution. Each letter is its own equation.`,
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

Addition of $5$ is undone by subtraction of $5$. The two sides stay equal because both lose the same amount.

$$x + 5 = 11$$

$$x = 11 - 5 = 6$$

Check: $6 + 5 = 11$. Subtracting $5$ does leave $x = 6$, so the statement is True.`,
      `**B.** → False

A product $7x$ is undone by dividing by $7$.

$$7x = 21$$

$$x = \\frac{21}{7} = 3$$

The claim says $4$. That would need $7\\cdot 4 = 28$ on the right, not $21$. The number that works is $3$, so the statement is False.`,
      `**C.** → True

The left side has already subtracted $8$, so add $8$ back to both sides.

$$x - 8 = 10$$

$$x = 10 + 8 = 18$$

Check: $18 - 8 = 10$. Adding $8$ produces $x = 18$, so the statement is True.`,
      `**D.** → False

Division by $6$ is the right inverse for this equation.

$$6x = 30$$

$$x = \\frac{30}{6} = 5$$

The claim says $x = 4$. That would require $6\\cdot 4 = 24$ on the right. The quotient is $5$, not $4$, so the statement is False.`,
      `**E.** → True

Adding zero does not change a number, so the equation $x + 0 = 9$ is the same as $x = 9$.

Check: $9 + 0 = 9$. The solution is $9$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `Five independent claims about the inverse of a single operation. Adding $a$ is undone by subtracting $a$; multiplying by $a \\neq 0$ is undone by dividing by $a$. Each letter checks one of those moves, not a shared unknown.`,
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

"Increased by $4$" means add $4$ to the unknown. Let the number be $x$.

$$x + 4 = 11$$

$$x = 11 - 4 = 7$$

Seven plus four is eleven, which is exactly the story. The number is $7$, so the statement is True.`,
      `**B.** → False

"Three times a number" is $3x$.

$$3x = 18$$

$$x = \\frac{18}{3} = 6$$

The claim says $5$. Three fives are $15$, not $18$. The number that fits the sentence is $6$, so the statement is False.`,
      `**C.** → True

Subtracting $8$ and being left with $13$ is

$$x - 8 = 13$$

$$x = 13 + 8 = 21$$

From $21$, take away $8$ and $13$ remains. The original number is $21$, so the statement is True.`,
      `**D.** → True

Half of $x$ is $\\frac{x}{2}$.

$$\\frac{x}{2} = 9$$

Multiply both sides by $2$:

$$x = 18$$

Half of $18$ is $9$. The number itself is $18$, so the statement is True.`,
      `**E.** → False

"Decreased by $6$" is subtraction, not a leftover of $4$.

$$x - 6 = 10$$

$$x = 10 + 6 = 16$$

The claim says $4$, which looks like someone subtracted $6$ from $10$ instead of adding it back. Sixteen decreased by six is ten; four decreased by six is not. The number is $16$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Five independent word sentences, each hiding one linear equation. Translate the English into $x \\pm a = b$ or $kx = b$, then undo the operation. The trap on a false letter is usually doing the inverse the wrong way (subtracting when you should add back).`,
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

Distribute the $2$, then isolate.

$$2(x + 3) = 14$$

$$2x + 6 = 14$$

$$2x = 8$$

$$x = 4$$

Check: $2(4 + 3) = 2\\cdot 7 = 14$. The solution is $4$, so the statement is True.`,
      `**B.** → True

The bracket is a subtraction this time.

$$5(x - 2) = 20$$

$$5x - 10 = 20$$

$$5x = 30$$

$$x = 6$$

Check: $5(6 - 2) = 5\\cdot 4 = 20$. The solution is $6$, so the statement is True.`,
      `**C.** → False

There is a $2$ inside the bracket as well as a $3$ outside, so the $x$ term becomes $6x$, not $3x$.

$$3(2x + 1) = 21$$

$$6x + 3 = 21$$

$$6x = 18$$

$$x = 3$$

The claim says $x = 4$. That would give $3(8 + 1) = 27$, which overshoots $21$. The recovered solution is $3$, so the statement is False.`,
      `**D.** → True

Expand, then move the constant.

$$4(x - 5) = 12$$

$$4x - 20 = 12$$

$$4x = 32$$

$$x = 8$$

Check: $4(8 - 5) = 4\\cdot 3 = 12$. Expanding and solving does give $x = 8$, so the statement is True.`,
      `**E.** → False

Two copies of $x$ add, and the constants $3$ and $-1$ add separately.

$$(x + 3) + (x - 1) = 10$$

$$2x + 2 = 10$$

$$2x = 8$$

$$x = 4$$

The claim says $x = 3$. Plugging $3$ in gives $(3 + 3) + (3 - 1) = 6 + 2 = 8$, which is short of $10$. The solution is $4$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `Five independent linear equations that start with brackets. Expand with the distributive law, collect like terms, then isolate $x$. A missed factor inside the bracket is the usual source of a wrong claimed root.`,
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

A quotient $\\frac{x}{4}$ is undone by multiplying both sides by $4$.

$$\\frac{x}{4} = 5$$

$$x = 5 \\cdot 4 = 20$$

Check: $\\frac{20}{4} = 5$. The solution is $20$, so the statement is True.`,
      `**B.** → True

Peel the added $2$ first, then clear the denominator.

$$\\frac{x}{3} + 2 = 6$$

$$\\frac{x}{3} = 4$$

$$x = 4 \\cdot 3 = 12$$

Check: $\\frac{12}{3} + 2 = 4 + 2 = 6$. Solving gives $x = 12$, so the statement is True.`,
      `**C.** → False

The $2$ is in the numerator, so multiplying by $5$ produces $2x$, not $x$.

$$\\frac{2x}{5} = 6$$

$$2x = 30$$

$$x = 15$$

The claim says $12$, which is $2 \\cdot 6$ with the $5$ ignored, or $6 \\cdot 2$ as if the $5$ were not there. Fifteen checks: $\\frac{2\\cdot 15}{5} = \\frac{30}{5} = 6$. The solution is $15$, not $12$, so the statement is False.`,
      `**D.** → True

The whole of $x + 1$ is being halved.

$$\\frac{x + 1}{2} = 5$$

$$x + 1 = 10$$

$$x = 9$$

Check: $\\frac{9 + 1}{2} = \\frac{10}{2} = 5$. Then $x = 9$, so the statement is True.`,
      `**E.** → False

Multiply through by $2$ first, then divide by $3$.

$$\\frac{3x}{2} = 9$$

$$3x = 18$$

$$x = 6$$

The claim says $4$. Four would give $\\frac{3\\cdot 4}{2} = 6$, not $9$. The solution is $6$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 5,
    solution_overview: `Five independent linear equations with a single fraction. Multiply through by the denominator to clear it, then finish as an ordinary linear equation. Watch whether the unknown is $x$ or $2x$ after that multiplication.`,
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

Width $4$ cm and length $3$ cm more than that means the long side is $7$ cm. Perimeter of a rectangle is twice the sum of the two distinct sides.

$$P = 2(4 + 7) = 2 \\cdot 11 = 22$$

Twenty-two centimetres is exactly the claimed perimeter, so the statement is True.`,
      `**B.** → True

A square has four equal sides, so the perimeter is four times one side.

$$P = 4 \\cdot 6 = 24$$

The perimeter is $24$ cm, so the statement is True.`,
      `**C.** → False

"Twice $8$" is $16$. Five more than that is

$$2 \\cdot 8 + 5 = 16 + 5 = 21$$

The claim says $26$. That would be $8 \\cdot 3 + 2$, or $16 + 8 + 2$, not "five more than twice eight". The number the sentence describes is $21$, so the statement is False.`,
      `**D.** → True

Let the smaller part be $x$. Then the larger is $x + 4$, and they add to $30$.

$$x + (x + 4) = 30$$

$$2x + 4 = 30$$

$$2x = 26$$

$$x = 13$$

The other part is $13 + 4 = 17$. The two parts are $13$ and $17$, which is the split in the claim, so the statement is True.`,
      `**E.** → False

Pouring out $15$ litres from $40$ leaves the difference, not a new round number chosen by hand.

$$40 - 15 = 25$$

The claim says $20$ litres remain. That would need $20$ litres poured out, not $15$. Twenty-five litres remain, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Five independent short stories, each closing on a number. Translate the sentence into a linear relation (perimeter, "more than", a two-part split, a leftover volume), compute, and compare with the figure in the claim.`,
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

Move the $x$ terms to one side and the constants to the other. Subtract $2x$ from both sides:

$$3 = x - 5$$

Add $5$:

$$x = 8$$

Check: left $2\\cdot 8 + 3 = 19$, right $3\\cdot 8 - 5 = 19$. Both sides agree at $x = 8$, so the statement is True.`,
      `**B.** → True

Add $x$ to both sides so every $x$ sits on the right.

$$5 = 3x + 8$$

Subtract $8$:

$$-3 = 3x$$

Divide by $3$:

$$x = -1$$

Check: left $5 - (-1) = 6$, right $2(-1) + 8 = 6$. The solution is $-1$, so the statement is True.`,
      `**C.** → True

Expand both brackets first.

$$4x - 4 = 2x + 10$$

Subtract $2x$:

$$2x - 4 = 10$$

Add $4$:

$$2x = 14$$

$$x = 7$$

Check: left $4(7 - 1) = 24$, right $2(7 + 5) = 24$. The solution is $7$, so the statement is True.`,
      `**D.** → False

Two equations have the same solution only if the number that works in one also works in the other.

$$x + 3 = 10 \\quad \\Rightarrow \\quad x = 7$$

$$2x = 16 \\quad \\Rightarrow \\quad x = 8$$

Seven is not eight. The first equation is solved by $7$; the second by $8$. They do not share a solution, so the statement is False.`,
      `**E.** → True

The two $x$ terms on the left combine, and the constant $-2$ moves across.

$$7x - 3x - 2 = 10$$

$$4x - 2 = 10$$

$$4x = 12$$

$$x = 3$$

Check: $7\\cdot 3 - 2 - 3\\cdot 3 = 21 - 2 - 9 = 10$. Collecting like terms does give $4x = 12$ and $x = 3$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 7,
    solution_overview: `Five independent linear equations, some with $x$ on both sides. Gather unknown terms on one side and constants on the other, then divide by the remaining coefficient. Two different equations are equivalent only when they produce the same $x$.`,
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

The least common denominator of $2$ and $3$ is $6$. Multiply every term by $6$.

$$6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5$$

$$3x + 2x = 30$$

$$5x = 30$$

$$x = 6$$

Check: $\\frac{6}{2} + \\frac{6}{3} = 3 + 2 = 5$. The solution is $6$, so the statement is True.`,
      `**B.** → False

Cross-multiply, because each side is a single fraction.

$$5(x - 1) = 3(x + 1)$$

$$5x - 5 = 3x + 3$$

$$2x = 8$$

$$x = 4$$

The claim says $x = 2$. At $x = 2$ the left side is $\\frac{1}{3}$ and the right side is $\\frac{3}{5}$, which are not equal. The recovered solution is $4$, so the statement is False.`,
      `**C.** → False

Multiply both sides by $3$ to clear the denominator, then divide by $2$.

$$\\frac{2x}{3} = 8$$

$$2x = 24$$

$$x = 12$$

The claim says $x = 10$. Ten would give $\\frac{20}{3}$, not $8$. Clearing the denominator produces $x = 12$, so the statement is False.`,
      `**D.** → True

The least common denominator of $4$ and $6$ is $12$.

$$12 \\cdot \\frac{x}{4} - 12 \\cdot \\frac{x}{6} = 12 \\cdot 1$$

$$3x - 2x = 12$$

$$x = 12$$

Check: $\\frac{12}{4} - \\frac{12}{6} = 3 - 2 = 1$. The solution is $12$, so the statement is True.`,
      `**E.** → True

Multiply through by $4$, then peel the $+1$.

$$\\frac{3x + 1}{4} = 4$$

$$3x + 1 = 16$$

$$3x = 15$$

$$x = 5$$

Check: $\\frac{3\\cdot 5 + 1}{4} = \\frac{16}{4} = 4$. The solution is $5$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 8,
    solution_overview: `Five independent linear equations with one or two fractional terms. Clear denominators by multiplying through by the least common denominator (or by cross-multiplying when each side is a single fraction), then finish as a linear equation in $x$.`,
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

Let the shorter side be $x$ cm. Then the longer side is $x + 3$, and the perimeter is twice the sum of the two sides.

$$2\\bigl(x + (x + 3)\\bigr) = 22$$

$$2(2x + 3) = 22$$

$$2x + 3 = 11$$

$$2x = 8$$

$$x = 4$$

The longer side is $4 + 3 = 7$ cm. That is the length in the claim, so the statement is True.`,
      `**B.** → False

Time is distance divided by speed, with the units kept as kilometres and hours.

$$t = \\frac{90}{60} = 1.5$$

One and a half hours is not two hours. Two hours at $60$ km/h would cover $120$ km, not $90$. The trip took $1.5$ hours, so the statement is False.`,
      `**C.** → True

The amount of pure vinegar does not change when water is added. Two litres at $20\\%$ hold

$$0.20 \\cdot 2 = 0.4$$

litres of vinegar. After adding $2$ litres of water the total volume is $4$ litres, so the new concentration is

$$\\frac{0.4}{4} = 0.10 = 10\\%$$

The mixture is $10\\%$ vinegar, so the statement is True.`,
      `**D.** → False

Let first place be $a$ euros. Then second is $0.5a$ and third is $0.5 \\cdot 0.5a = 0.25a$. The three prizes add to $9000$.

$$a + 0.5a + 0.25a = 9000$$

$$1.75a = 9000$$

$$a = \\frac{9000}{1.75} = 5142.86\\ldots$$

Second place is half of that:

$$0.5a = 2571.43\\ldots$$

which is not $3000$. The figure $3000$ is what you get by cutting $9000$ into three equal shares, ignoring the $50\\%$ chain. Second place is about $2571$ EUR, so the statement is False.`,
      `**E.** → True

Subtract $x$ from both sides, then subtract $1$.

$$2x + 1 = x + 8$$

$$x + 1 = 8$$

$$x = 7$$

Seven is smaller than ten. The solution is $7$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `Five independent closed claims in the exam mix: a perimeter, a speed, a dilution, a percentage split, and a short linear equation. Translate each story into one equation, solve it, and compare the recovered number with the figure in the sentence.`,
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

Subtract $x$ from both sides.

$$3 = 5$$

That is a false number sentence. No choice of $x$ can make $3$ equal $5$, so the original equation has no solution, and the statement is True.`,
      `**B.** → True

Expand the left side.

$$2(x + 4) = 2x + 8$$

The two sides are the same expression. Subtracting $2x$ from both sides leaves $8 = 8$, which is true for every real $x$. The equation is an identity, so the statement is True.`,
      `**C.** → False

The coefficient of $x$ is negative, so dividing reverses the sign of the constant.

$$-3x = 12$$

$$x = \\frac{12}{-3} = -4$$

The claim says $x = 4$. Plus four would give $-3\\cdot 4 = -12$, the wrong sign on the right. The solution is $-4$, so the statement is False.`,
      `**D.** → True

The two sides are written identically. Subtracting $5x + 2$ from both sides leaves $0 = 0$, which is true for every real $x$. Infinitely many solutions (in fact every real number) is the right description, so the statement is True.`,
      `**E.** → False

Subtract $x$ from both sides.

$$0 = 1$$

That never holds, including at $x = 0$: $0$ is not equal to $1$. The equation has no solution at all, so it is not solved by $x = 0$, and the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Five independent claims about how many solutions a linear equation can have. After simplifying, either you reach $x = $ a number (one solution), or $0 = 0$ (every $x$), or a false number sentence such as $0 = 1$ (no solution). A negative coefficient still gives one solution; it does not wipe the solution out.`,
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

Let the son's present age be $s$ years. Then the father is $s + 28$ now. In eight years the father is $s + 36$ and the son is $s + 8$, and the father is then twice the son.

$$s + 28 + 8 = 2(s + 8)$$

$$s + 36 = 2s + 16$$

$$20 = s$$

The son is $20$ now, and the father is $48$. In eight years they are $56$ and $28$, and $56 = 2 \\cdot 28$. The statement is True.`,
      `**B.** → False

Consecutive odd integers differ by $2$. Let the smallest be $n$. Then the three numbers are $n$, $n + 2$, and $n + 4$, and they add to $75$.

$$n + (n + 2) + (n + 4) = 75$$

$$3n + 6 = 75$$

$$3n = 69$$

$$n = 23$$

The largest is $23 + 4 = 27$, not $29$. Twenty-nine would belong to the triple $25, 27, 29$, whose sum is $81$. The largest is $27$, so the statement is False.`,
      `**C.** → True

Let $x$ be the number of $5$ EUR coins. Then there are $16 - x$ coins of $2$ EUR, and the total value is $53$ EUR.

$$5x + 2(16 - x) = 53$$

$$5x + 32 - 2x = 53$$

$$3x = 21$$

$$x = 7$$

Seven fives and nine twos: $35 + 18 = 53$, and $7 + 9 = 16$ coins. There are $7$ coins of $5$ EUR, so the statement is True.`,
      `**D.** → False

In twelve minutes the tank receives

$$15 \\cdot 12 = 180$$

litres. That volume is four-fifths of the capacity, not the capacity itself.

$$\\text{capacity} = 180 \\cdot \\frac{5}{4} = 225$$

The claim treats the $180$ litres as a full tank. The tank holds $225$ litres, so the statement is False.`,
      `**E.** → True

Let the number be $x$. One-third of it is $\\frac{x}{3}$, and those two amounts add to $48$.

$$x + \\frac{x}{3} = 48$$

$$\\frac{4x}{3} = 48$$

$$x = 48 \\cdot \\frac{3}{4} = 36$$

Check: $36 + 12 = 48$. The number is $36$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `Five independent stories, each hiding one linear equation: an age relation, consecutive odd integers, a two-coin purse, a tank filled to a fraction of its capacity, and a number plus a fraction of itself. Translate the sentence, solve, and compare with the closing figure.`,
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

Time is distance over speed on each leg, then add the two times. Do not add the speeds and divide the total distance by that sum.

$$t = \\frac{9}{6} + \\frac{6}{9} = 1.5 + \\frac{2}{3} = \\frac{13}{6}$$

hours, which is $2$ hours and $10$ minutes, not $2$ hours. Two hours would need the second leg to take only half an hour, and $6$ km at $9$ km/h takes $40$ minutes. The run takes $\\frac{13}{6}$ hours, so the statement is False.`,
      `**B.** → True

Work rates add. The faster printer does $\\frac{1}{6}$ of the job per hour. Together they do $\\frac{1}{4}$ per hour, so the slower rate is the difference.

$$\\frac{1}{6} + \\frac{1}{s} = \\frac{1}{4}$$

$$\\frac{1}{s} = \\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12}$$

$$s = 12$$

In twelve hours the slower printer does one full job. The statement is True.`,
      `**C.** → True

Passing a pole means the train covers its own length. Speed in metres per second is length over time:

$$v = \\frac{180}{12} = 15 \\text{ m/s}.$$

In kilometres per hour that is $15 \\cdot 3.6 = 54$. The speed is $54$ km/h, so the statement is True.`,
      `**D.** → False

The first car has a one-hour head start, so it is already $60$ km down the road when the second leaves. After that they close at $90 - 60 = 30$ km/h.

$$t = \\frac{60}{30} = 2$$

hours after $9{:}00$, so they meet at $11{:}00$, not at noon. At noon the first car would have been out for $4$ hours ($240$ km) and the second for $3$ hours ($270$ km). They meet at $11{:}00$, so the statement is False.`,
      `**E.** → True

The tap's rate is $\\frac{240}{8} = 30$ litres per minute. In five minutes it pours

$$30 \\cdot 5 = 150$$

litres. That is the claimed volume, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Five independent motion and work stories. Split a two-leg run into two times; add work rates as fractions of a job per hour; convert m/s to km/h by the factor $3.6$; a chase starts after the head-start distance is on the road.`,
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

Let the base be $b$ cm. Each equal side is $b + 5$, and the three sides add to $40$.

$$2(b + 5) + b = 40$$

$$3b + 10 = 40$$

$$3b = 30$$

$$b = 10$$

The sides are then $10$, $15$, and $15$, and $10 + 15 + 15 = 40$. The base is $10$ cm, so the statement is True.`,
      `**B.** → True

Let the width be $w$ metres. Then the length is $w + 3$, and the perimeter is $54$.

$$2\\bigl(w + (w + 3)\\bigr) = 54$$

$$2(2w + 3) = 54$$

$$2w + 3 = 27$$

$$2w = 24$$

$$w = 12$$

The garden is $12$ m by $15$ m, and $2(12 + 15) = 54$. The width is $12$ m, so the statement is True.`,
      `**C.** → True

The angles of a triangle add to $180^{\\circ}$. Consecutive integers are $n$, $n + 1$, and $n + 2$.

$$n + (n + 1) + (n + 2) = 180$$

$$3n + 3 = 180$$

$$3n = 177$$

$$n = 59$$

The largest is $61^{\\circ}$. Check: $59 + 60 + 61 = 180$. The statement is True.`,
      `**D.** → False

An equilateral triangle with perimeter $12$ cm has side $4$ cm. The square uses the same side length, so its perimeter is four sides, not three.

$$4 \\cdot 4 = 16$$

The claim repeats the triangle's $12$ cm as if a square had only three sides. The square's perimeter is $16$ cm, so the statement is False.`,
      `**E.** → True

Perimeter is twice length plus twice width. Increasing only the length by $2$ cm adds $2$ cm to each of the two lengths, so the perimeter grows by $4$ cm. The original width $8$ cm never enters that difference.

$$\\Delta P = 2 \\cdot 2 = 4$$

The perimeter increases by $4$ cm, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Five independent geometry stories that stay linear: an isosceles perimeter, a fenced rectangle, consecutive angle measures, a square versus a triangle on the same side, and how a perimeter reacts when only the length grows.`,
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

Let the mass of pears be $x$ kg. Then apples are $x + 3$ kg, and the bill is $21$ EUR.

$$2(x + 3) + 3x = 21$$

$$2x + 6 + 3x = 21$$

$$5x = 15$$

$$x = 3$$

The customer bought $3$ kg of pears, so the statement is True.`,
      `**B.** → True

Apples are $3$ kg more than the pears already recovered.

$$x + 3 = 3 + 3 = 6$$

Six kilograms of apples at $2$ EUR/kg is consistent with the $21$ EUR bill once the pears are included. The statement is True.`,
      `**C.** → True

Six kilograms of apples at $2$ EUR per kilogram contribute

$$6 \\cdot 2 = 12$$

euros. That is the apple share of the $21$ EUR, so the statement is True.`,
      `**D.** → False

One kilogram less of each fruit would be $5$ kg of apples and $2$ kg of pears.

$$5 \\cdot 2 + 2 \\cdot 3 = 10 + 6 = 16$$

The claim says $15$ EUR. Sixteen euros is the new bill, so the statement is False.`,
      `**E.** → False

The total mass is $3 + 6 = 9$ kg. Pears are $3$ kg of that, which is one-third, not more than half.

$$\\frac{3}{9} = \\frac{1}{3} < \\frac{1}{2}$$

Pears are the smaller share, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `One shopping story, five checks. Apples at $2$ EUR/kg, pears at $3$ EUR/kg, apples $3$ kg heavier than pears, bill $21$ EUR. That recovers $3$ kg of pears and $6$ kg of apples. Letters C to E are extra arithmetic on that same pair.`,
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

A $20\\%$ discount leaves $80\\%$ of the original price $p$.

$$0.80p = 64$$

$$p = \\frac{64}{0.80} = 80$$

Check: $20\\%$ of $80$ is $16$, and $80 - 16 = 64$. The original price was $80$ EUR, so the statement is True.`,
      `**B.** → False

The two $25\\%$ moves do not cancel. A raise by $25\\%$ multiplies by $1.25$. A cut by $25\\%$ then multiplies by $0.75$.

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original, not $100\\%$. The second $25\\%$ is taken off a larger figure than the first $25\\%$ was added to. The statement is False.`,
      `**C.** → True

Forty percent of $x$, then plus $12$, equals $32$.

$$0.40x + 12 = 32$$

$$0.40x = 20$$

$$x = 50$$

Check: $40\\%$ of $50$ is $20$, and $20 + 12 = 32$. The number is $50$, so the statement is True.`,
      `**D.** → False

The amount of concentrate does not change when water is added. Eight litres at $12\\%$ hold

$$0.12 \\cdot 8 = 0.96$$

litres of concentrate. After two litres of water the total volume is $10$ litres, so the new percentage is

$$\\frac{0.96}{10} = 0.096 = 9.6\\%$$

The claim says $10\\%$. That would need $1$ litre of concentrate in $10$ litres, but only $0.96$ litres is there. The mixture is $9.6\\%$, so the statement is False.`,
      `**E.** → True

Two successive $10\\%$ raises multiply by $1.1$ twice, which is a $21\\%$ raise in one step, not $20\\%$.

$$2400 \\cdot 1.1 \\cdot 1.1 = 2400 \\cdot 1.21 = 2904$$

The new salary is $2904$ EUR, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `Five independent percentage stories. A discount leaves the complementary share of the original; successive percentage changes multiply, they do not add; concentrate is an amount of solute that water does not increase.`,
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

When two cars close a gap from both ends, their speeds add.

$$t = \\frac{180}{50 + 40} = \\frac{180}{90} = 2$$

In two hours the first covers $100$ km and the second $80$ km, which is the whole $180$ km. They meet after $2$ hours, so the statement is True.`,
      `**B.** → False

In the hour before the second courier starts, the first one already covers $45$ km, so $135$ km remains. After that they close at $45 + 60 = 105$ km/h.

$$t = \\frac{135}{105} = \\frac{9}{7}$$

hours, about $1$ hour and $17$ minutes, not $2$ hours. After two hours of the second courier the two would have covered $45 \\cdot 3 + 60 \\cdot 2 = 255$ km, which overshoots $180$. They meet after $\\frac{9}{7}$ hours, so the statement is False.`,
      `**C.** → True

Downstream speed is $\\frac{24}{2} = 12$ km/h. Upstream speed is $\\frac{24}{3} = 8$ km/h. Still-water speed is the average of those two, because the current cancels.

$$\\frac{12 + 8}{2} = 10$$

The current is then $2$ km/h either way: $10 + 2 = 12$ down and $10 - 2 = 8$ up. The still-water speed is $10$ km/h, so the statement is True.`,
      `**D.** → False

Add the two legs. Outward $30 / 15 = 2$ hours; return $30 / 10 = 3$ hours.

$$2 + 3 = 5$$

The claim says $4$ hours, which is what you get by averaging $15$ and $10$ to $12.5$ and then doing $60 / 12.5$, or by pretending the whole $60$ km ran at $15$ km/h. The round trip takes $5$ hours, so the statement is False.`,
      `**E.** → True

Rates add. Pipe A does $\\frac{1}{10}$ of the pool per hour, pipe B does $\\frac{1}{15}$.

$$\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{5}{30} = \\frac{1}{6}$$

Together they do one-sixth of the pool per hour, so the pool fills in $6$ hours. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Five independent motion and filling stories. Opposite cars add speeds; a delayed start leaves a remaining gap; still-water speed is the average of downstream and upstream; a round trip at two speeds adds the two times, it does not use the arithmetic mean of the speeds.`,
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

Work in centimetres so the units match: $2.4$ m is $240$ cm. Let the shorter piece be $x$ cm. Then the longer is $x + 60$.

$$x + (x + 60) = 240$$

$$2x = 180$$

$$x = 90$$

The pieces are $90$ cm and $150$ cm, and $90 + 150 = 240$. The shorter piece is $90$ cm, so the statement is True.`,
      `**B.** → False

Three numbers with mean $14$ add to $42$. Take off the two that are given.

$$42 - 11 - 15 = 16$$

The claim says $18$. Eighteen would push the mean to $\\frac{11 + 15 + 18}{3} = \\frac{44}{3}$, above $14$. The third number is $16$, so the statement is False.`,
      `**C.** → False

Portions scale by the factor $\\frac{12}{8} = 1.5$. Flour scales by the same factor.

$$600 \\cdot 1.5 = 900$$

The claim says $1000$ g, which is a round number that overshoots the proportion. For $12$ portions one needs $900$ g, so the statement is False.`,
      `**D.** → True

Let the width be $w$ cm. Then the length is $2w$, and the perimeter is $48$.

$$2(2w + w) = 48$$

$$6w = 48$$

$$w = 8$$

The rectangle is $8$ cm by $16$ cm, and $2(8 + 16) = 48$. The width is $8$ cm, so the statement is True.`,
      `**E.** → True

Let the number be $x$. Three-fifths of it exceeds one-fifth of it by $12$.

$$\\frac{3x}{5} - \\frac{x}{5} = 12$$

$$\\frac{2x}{5} = 12$$

$$2x = 60$$

$$x = 30$$

Check: $\\frac{3}{5}\\cdot 30 = 18$ and $\\frac{1}{5}\\cdot 30 = 6$, and $18 - 6 = 12$. The number is $30$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Five independent stories: a rod in mixed units, a missing value from a mean, a recipe scaled by portions, a $2{:}1$ rectangle, and a comparison of two fifths of the same number. Convert metres to centimetres before adding lengths.`,
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

Let the shorter side be $x$ cm. Then the longer is $x + 5$, and the perimeter is $38$.

$$2\\bigl(x + (x + 5)\\bigr) = 38$$

$$2(2x + 5) = 38$$

$$2x + 5 = 19$$

$$2x = 14$$

$$x = 7$$

The longer side is $7 + 5 = 12$ cm. Check: $2(7 + 12) = 38$. The statement is True.`,
      `**B.** → True

Time is distance over speed.

$$t = \\frac{180}{72} = 2.5$$

hours, which is $2$ hours and $30$ minutes. Counting $2.5$ hours back from $4$ pm lands at $1{:}30$ pm. The statement is True.`,
      `**C.** → True

The vinegar itself does not change. One and a half litres at $12\\%$ hold

$$0.12 \\cdot 1.5 = 0.18$$

litres of acid. After adding $w$ litres of water the concentration is $8\\%$.

$$\\frac{0.18}{1.5 + w} = 0.08$$

$$0.18 = 0.08(1.5 + w)$$

$$0.18 = 0.12 + 0.08w$$

$$0.06 = 0.08w$$

$$w = 0.75$$

Adding $0.75$ litres makes $2.25$ litres in total, and $0.18 / 2.25 = 0.08$. The statement is True.`,
      `**D.** → False

Let first place be $a$ euros. Then second is $0.5a$ and third is $0.25a$, and the three add to $9150$.

$$a + 0.5a + 0.25a = 9150$$

$$1.75a = 9150$$

$$a = 5228.57\\ldots$$

Second place is half of that, about $2614$ EUR, not $3000$. The figure $3000$ is what you get by cutting $9150$ into three equal shares. Second place is not $3000$ EUR, so the statement is False.`,
      `**E.** → False

$$4(x - 3) = 2x + 10$$

$$4x - 12 = 2x + 10$$

$$2x = 22$$

$$x = 11$$

Eleven is not smaller than ten. The solution is $11$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent exam-style claims: a perimeter, a start time from average speed, a dilution to a target percentage, a $50\\%$ prize chain, and a comparison after solving. Convert $2.5$ hours into $2$ h $30$ min before counting back from $4$ pm.`,
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

Let the first job use $h$ hours. Then it costs $45h + 80$. The second job uses $h + 2$ hours and costs $45(h + 2) + 80$. Together they are $430$ EUR.

$$(45h + 80) + \\bigl(45(h + 2) + 80\\bigr) = 430$$

$$90h + 250 = 430$$

$$90h = 180$$

$$h = 2$$

The first job used $2$ hours of labour, so the statement is True.`,
      `**B.** → True

The second job used $2 + 2 = 4$ hours.

$$45 \\cdot 4 + 80 = 180 + 80 = 260$$

The second job costs $260$ EUR, so the statement is True.`,
      `**C.** → True

Labour hours in total are $2 + 4 = 6$.

$$45 \\cdot 6 = 270$$

Parts are extra, on top of this $270$ EUR. Labour on the two jobs is $270$ EUR, so the statement is True.`,
      `**D.** → False

One hour less on each job would be $1$ hour and $3$ hours, with the same two parts charges.

$$(45 \\cdot 1 + 80) + (45 \\cdot 3 + 80) = 125 + 215 = 340$$

The claim says $320$ EUR, which is $20$ short (as if one of the $80$ EUR parts charges had been dropped). The combined bill would be $340$ EUR, so the statement is False.`,
      `**E.** → True

Two jobs each carry $80$ EUR of parts, so parts total $160$ EUR. One-third of $430$ is

$$\\frac{430}{3} \\approx 143.33.$$

Then $160 > 143.33$, so parts are more than one-third of the bill. The statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `One workshop story, five checks. Labour at $45$ EUR/h plus $80$ EUR parts on every job; the second job runs two hours longer; the two bills add to $430$ EUR. That recovers $h = 2$ for the first job. Later letters are extra arithmetic on those two bills.`,
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

A does $\\frac{1}{12}$ of the job per day, B does $\\frac{1}{18}$. Together they do $\\frac{1}{12} + \\frac{1}{18} = \\frac{5}{36}$ per day. In four days they complete

$$4 \\cdot \\frac{5}{36} = \\frac{5}{9}$$

of the job, so $\\frac{4}{9}$ remains. A alone then needs

$$\\frac{4/9}{1/12} = \\frac{4}{9} \\cdot 12 = \\frac{16}{3}$$

days, which is $5$ days and $8$ hours, not $5$ days. Five days of A would cover $\\frac{5}{12}$ of a job, and $\\frac{5}{12} < \\frac{4}{9}$. A still needs $\\frac{16}{3}$ days, so the statement is False.`,
      `**B.** → True

The mixture's value per kilogram is total value over total mass.

$$\\frac{20 \\cdot 8 + 30 \\cdot 10}{20 + 30} = \\frac{160 + 300}{50} = \\frac{460}{50} = 9.20$$

The blend is $9.20$ EUR/kg, so the statement is True.`,
      `**C.** → True

A $3$ cm frame all around adds $6$ cm to each dimension: the outer rectangle is $36$ cm by $26$ cm.

$$P = 2(36 + 26) = 2 \\cdot 62 = 124$$

The outer perimeter is $124$ cm, so the statement is True.`,
      `**D.** → True

A gain of $2$ minutes in each true hour, over $6$ true hours, is

$$2 \\cdot 6 = 12$$

minutes of extra time shown. The clock then reads $6$ hours and $12$ minutes, so the statement is True.`,
      `**E.** → False

If two-thirds of the journey is $48$ km, the whole journey is

$$48 \\cdot \\frac{3}{2} = 72$$

kilometres, not $64$. Sixty-four would be the result of subtracting a third of $48$ from $48$, or of treating $48$ as three-quarters. The whole journey is $72$ km, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Five independent stories at the top of this subsection: leftover work after a joint period, a weighted tea blend, a frame that adds to both dimensions, a clock that gains, and scaling a fraction of a journey up to the whole.`,
  },
];
