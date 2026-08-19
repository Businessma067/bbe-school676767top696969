/**
 * Chapter 4 — Equations (subsections 4.1–4.5).
 * Exam format: five True/False claims. Each letter is a closed exam sentence
 * in nested prose (a student reports, a candidate claims, if ... then ...),
 * matching the WU item style. Explanations follow MATH 13.18.
 * Explanations follow MATH 13.18: name the rule, write the algebra, say in words
 * what the numbers mean, then close with the verdict.
 */

import type { MathTask } from "@/data/math-chapters";
import { MATH_CH4_4_EXPONENTIAL } from "@/data/math-ch4-4-exponential";

export const MATH_CH4_SUBSECTIONS = [
  { id: "4.1", title: "Linear equations in one unknown" },
  { id: "4.2", title: "Quadratic equations" },
  { id: "4.3", title: "Rational, radical and absolute-value equations" },
  { id: "4.4", title: "Exponential and logarithmic equations" },
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
      `For $2x + 6 = 14$, the sum of all admissible roots equals $7$.`,
      `For $5x - 3 = 12$, the equation has two distinct admissible real solutions.`,
      `For $\frac{x - 7}{2} = 4$, the product of all admissible roots equals $15$.`,
      `For $3x + 3 = 12$, the equation has no admissible real solution.`,
      `For $4x + 2 = 14$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

Doubling a price and then adding $6$ EUR is undone by subtracting $6$ and dividing by $2$. In words: twice the original price, plus $6$, equals $14$.

$$2x + 6 = 14$$

Subtract $6$ from both sides:

$$2x = 8$$

Divide by $2$:

$$x = 4$$

That $4$ is the original price in EUR. The clerk reports $5$. Substituting the claimed value:

$$2 \\cdot 5 + 6 = 16$$

which is not $14$, so the statement is False.`,
      `**B.** → False

A linear equation $ax + b = c$ with $a \\neq 0$ is solved by inverse operations, and the solution is unique. Adding $3$ and then dividing by $5$ isolates $x$:

$$5x - 3 = 12$$

$$5x = 15$$

$$x = 7$$

The isolated solution is $x = 3$, and $3$ is not an even integer. The candidate's property is false, so the statement is False.`,
      `**C.** → True

Taking $7$ EUR off a bill and then splitting the remainder into two equal shares is undone by doubling and then adding $7$. In words: half of the original bill minus $7$ equals $4$.

$$\\frac{x - 7}{2} = 4$$

$$x - 7 = 8$$

$$x = 15$$

That $15$ is the original bill in EUR. Check:

$$15 - 7 = 8$$

and half of $8$ is $4$. The claim matches, so the statement is True.`,
      `**D.** → False

The distributive law expands the product first, then inverse operations isolate $x$:

$$3(x + 1) = 12$$

$$3x + 3 = 12$$

$$3x = 9$$

$$x = 3$$

The isolated solution is $x = 3$, and $3$ is not even. The student's property is false, so the statement is False.`,
      `**E.** → False

Four times a change, plus $2$ degrees, equals $14$ degrees. Adding $2$ is undone by subtracting $2$, then dividing by $4$:

$$4x + 2 = 14$$

$$4x = 12$$

$$x = 3$$

The change is $3$ degrees, not $4$. Substituting the claimed $4$:

$$4 \\cdot 4 + 2 = 18$$

which is not $14$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Five independent linear sentences. Isolate the unknown by inverse operations: undo addition or subtraction first, then divide by a nonzero coefficient. A linear equation $ax + b = c$ with $a \\neq 0$ has exactly one real solution.`,
  },
  {
    id: `math-4-2`,
    case_id: `MATH 4.02`,
    title: `What each inverse step leaves`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x + 5 = 11$, the sum of all admissible roots equals $6$.`,
      `For $7x = 21$, the equation has two distinct admissible real solutions.`,
      `For $\frac{x - 8}{2} = 5$, the product of all admissible roots equals $20$.`,
      `For $6x = 30$, the equation has no admissible real solution.`,
      `For $x + 0 = 9$, the sum of all admissible roots equals $9$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

Adding $5$ EUR is undone by subtracting $5$. In words: the starting amount plus $5$ equals $11$.

$$x + 5 = 11$$

$$x = 6$$

That $6$ is the amount the purse started with, in EUR. Substituting it:

$$6 + 5 = 11$$

which matches the total, so the statement is True.`,
      `**B.** → False

Multiplying by $7$ is undone by dividing by $7$:

$$7x = 21$$

$$x = 3$$

The unique real solution is $x = 3$, and $3$ is not even. The candidate's property is false, so the statement is False.`,
      `**C.** → False

Pouring $8$ litres out and then splitting the remainder into two equal drums is undone by doubling and then adding $8$. In words: half of the starting volume minus $8$ equals $5$.

$$\\frac{x - 8}{2} = 5$$

$$x - 8 = 10$$

$$x = 18$$

That $18$ is the starting volume in litres. The student reports $16$. Substituting the claimed value:

$$\\frac{16 - 8}{2} = 4$$

which is not $5$, so the statement is False.`,
      `**D.** → False

Dividing both sides by $6$ is the inverse of multiplying by $6$:

$$6x = 30$$

$$x = 5$$

The unique real solution is $x = 5$, and $5$ is not even. The student's property is false, so the statement is False.`,
      `**E.** → True

Adding zero does not change a number, so a scale that shows a mass with no extra weight already reads that mass.

$$x + 0 = 9$$

$$x = 9$$

That $9$ is the mass in kilograms, matching the claim, so the statement is True.`,
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
      `For $x + 4 = 11$, the sum of all admissible roots equals $7$.`,
      `For $3x = 18$, the equation has two distinct real solutions.`,
      `For $\frac{x - 8}{2} = 6$, the product of all admissible roots equals $20$.`,
      `For $\frac{x}{2} = 9$, the equation has exactly one admissible real solution.`,
      `For $\frac{x - 6}{2} = 5$, the sum of all admissible roots equals $19$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A number increased by $4$ equals $11$. Adding $4$ is undone by subtracting $4$:

$$x + 4 = 11$$

$$x = 7$$

That $7$ is the original number. Substituting it:

$$7 + 4 = 11$$

which matches the sentence, so the statement is True.`,
      `**B.** → False

Three times a number equals $18$. Multiplying by $3$ is undone by dividing by $3$:

$$3x = 18$$

$$x = 6$$

The student claims $5$. Substituting that value:

$$3 \\cdot 5 = 15$$

which is not $18$, so the statement is False.`,
      `**C.** → True

After $8$ is subtracted, the remainder is split into two equal parts of $6$. Doubling and then adding $8$ restores the original number:

$$\\frac{x - 8}{2} = 6$$

$$x - 8 = 12$$

$$x = 20$$

That $20$ is the original number. Check: $20 - 8 = 12$, and half of $12$ is $6$. The claim matches, so the statement is True.`,
      `**D.** → True

Half of a number is $9$. Multiplying by $\\frac{1}{2}$ is undone by multiplying by $2$:

$$\\frac{x}{2} = 9$$

$$x = 18$$

That $18$ is the number itself. It exceeds $15$, because

$$18 > 15$$

Half of $18$ is $9$, matching the sentence, so the statement is True.`,
      `**E.** → False

Decreasing by $6$ and then taking half is undone by doubling and then adding $6$:

$$\\frac{x - 6}{2} = 5$$

$$x - 6 = 10$$

$$x = 16$$

That $16$ is the original number. The student claims $4$. Substituting that value:

$$\\frac{4 - 6}{2} = -1$$

which is not $5$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Five independent word sentences, each hiding a linear equation. Translate the English, then undo the operations in reverse order.`,
  },
  {
    id: `math-4-4`,
    case_id: `MATH 4.04`,
    title: `Brackets before isolating`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2x + 6 = 14$, the sum of all admissible roots equals $4$.`,
      `For $5x - 10 = 20$, the equation has exactly one real solution.`,
      `For $3(2x + 1) = 21$, the product of all admissible roots equals $5$.`,
      `For $4x = 32$, the equation has exactly one admissible real solution.`,
      `For $(x + 3) + (x - 1) = 10$, the sum of all admissible roots equals $4$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The baker adds $3$ g of starter and then doubles the batch. In words: twice the original batch plus $3$ equals $14$. Expand with the distributive law, then isolate $x$:

$$2(x + 3) = 14$$

$$2x + 6 = 14$$

$$2x = 8$$

$$x = 4$$

That $4$ is the original batch in grams. Substituting it:

$$2(4 + 3) = 14$$

which matches the scale, so the statement is True.`,
      `**B.** → True

The distributive law expands the product first, then inverse operations isolate $x$:

$$5(x - 2) = 20$$

$$5x - 10 = 20$$

$$5x = 30$$

$$x = 6$$

The isolated solution is $x = 6$, and $6$ is positive and even. The statement is True.`,
      `**C.** → False

Twice the sample, plus $1$ ml, is then tripled. Expand with the distributive law:

$$3(2x + 1) = 21$$

$$6x + 3 = 21$$

$$6x = 18$$

$$x = 3$$

That $3$ is the original sample in millilitres. The chemist reports $4$. Substituting the claimed value:

$$3(2 \\cdot 4 + 1) = 27$$

which is not $21$, so the statement is False.`,
      `**D.** → True

Expand with the distributive law, then isolate $x$:

$$4(x - 5) = 12$$

$$4x - 20 = 12$$

$$4x = 32$$

$$x = 8$$

The isolated solution is $x = 8$, and $8 > 5$. The statement is True.`,
      `**E.** → True

One rod is $3$ cm longer than the marked length $x$, the other $1$ cm shorter, and together they measure $10$ cm:

$$(x + 3) + (x - 1) = 10$$

$$2x + 2 = 10$$

$$2x = 8$$

$$x = 4$$

That $4$ is the marked length in centimetres. Substituting it:

$$(4 + 3) + (4 - 1) = 10$$

which matches the total, so the statement is True.`,
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
      `For $\frac{x}{4} = 5$, the sum of all admissible roots equals $20$.`,
      `For $\frac{x}{3} + 2 = 6$, the equation has two distinct admissible real solutions.`,
      `For $\frac{2 \cdot 12}{5} = \frac{24}{5}$, the product of all admissible roots equals $17$.`,
      `For $\frac{x + 1}{2} = 5$, the equation has exactly one admissible real solution.`,
      `For $\frac{3x}{2} = 9$, the sum of all admissible roots equals $8$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

One-fourth of the jug is $5$ litres. Multiplying by $\\frac{1}{4}$ is undone by multiplying by $4$:

$$\\frac{x}{4} = 5$$

$$x = 20$$

That $20$ is the full jug in litres. One-fourth of it is $5$, matching the claim, so the statement is True.`,
      `**B.** → False

Subtract $2$ first, then multiply by $3$ to clear the denominator:

$$\\frac{x}{3} + 2 = 6$$

$$\\frac{x}{3} = 4$$

$$x = 12$$

The isolated solution is $x = 12$, and $12$ is not odd. The statement is False.`,
      `**C.** → False

Two-fifths of the tank is $6$ litres. Multiply through by $5$, then divide by $2$:

$$\\frac{2x}{5} = 6$$

$$2x = 30$$

$$x = 15$$

That $15$ is the tank's capacity in litres. The clerk reports $12$. Substituting the claimed value:

$$\\frac{2 \\cdot 12}{5} = \\frac{24}{5}$$

which is not $6$, so the statement is False.`,
      `**D.** → True

Multiply through by $2$ to clear the denominator, then subtract $1$:

$$\\frac{x + 1}{2} = 5$$

$$x + 1 = 10$$

$$x = 9$$

The isolated solution is $x = 9$, and $9$ is odd. The statement is True.`,
      `**E.** → False

One and a half times a wage is $\\frac{3}{2}$ of the wage, and that product equals $9$ EUR. Multiply through by $2$, then divide by $3$:

$$\\frac{3x}{2} = 9$$

$$3x = 18$$

$$x = 6$$

That $6$ is the wage in EUR. The clerk reports $4$. Substituting the claimed value:

$$\\frac{3 \\cdot 4}{2} = 6$$

which is not $9$, so the statement is False.`,
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
      `The equation has exactly one real solution.`,
      `For $3x - 5 = 16$, the equation has two distinct admissible real solutions.`,
      `The equation has exactly one real solution.`,
      `For $x + (x + 4) = 30$, the equation has exactly one admissible real solution.`,
      `For $\frac{3}{4}x - 10 = 20$, the sum of all admissible roots equals $40$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The width is $4$ cm and the length is $3$ cm more than the width, so the length is $7$ cm. The perimeter is twice the sum of the sides:

$$P = 2(4 + 7)$$

$$P = 2 \\cdot 11$$

$$P = 22$$

That $22$ is the perimeter in centimetres, matching the claim, so the statement is True.`,
      `**B.** → False

Three times a number, minus $5$, equals $16$. Multiplying by $3$ is undone by dividing by $3$:

$$3x - 5 = 16$$

$$3x = 21$$

$$x = 7$$

That $7$ is the number. The student claims $6$. Substituting that value:

$$3 \\cdot 6 - 5 = 13$$

which is not $16$, so the statement is False.`,
      `**C.** → True

Let the smallest of the three consecutive integers be $n$. Then the three are $n$, $n + 1$, and $n + 2$, and their sum is $42$:

$$n + (n + 1) + (n + 2) = 42$$

$$3n + 3 = 42$$

$$3n = 39$$

$$n = 13$$

The middle integer is $n + 1 = 14$. The claim is that same value, so the statement is True.`,
      `**D.** → True

Split $30$ into two parts where one part is $4$ more than the other. Let the smaller part be $x$:

$$x + (x + 4) = 30$$

$$2x + 4 = 30$$

$$2x = 26$$

$$x = 13$$

The parts are $13$ and $17$. Those are the figures in the claim, so the statement is True.`,
      `**E.** → True

Losing one-quarter leaves three-quarters, then $10$ litres more are poured out, and $20$ litres remain:

$$\\frac{3}{4}x - 10 = 20$$

$$\\frac{3}{4}x = 30$$

$$x = 40$$

That $40$ is the starting volume in litres. Check: a quarter of $40$ is $10$, so $30$ litres are left, then $10$ more leave $20$. The claim matches, so the statement is True.`,
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
      `For $2x + 3 = 3x - 5$, the sum of all admissible roots equals $8$.`,
      `For $5 - x = 2x + 8$, the equation has exactly one real solution.`,
      `For $4x - 4 = 2x + 10$, the product of all admissible roots equals $7$.`,
      `For $2x = 14$, the equation has exactly one admissible real solution.`,
      `For $7x - 2 - 3x = 10$, the sum of all admissible roots equals $3$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Twice a wage plus $3$ EUR equals three times the same wage minus $5$ EUR. Gather the unknown on one side and the constants on the other:

$$2x + 3 = 3x - 5$$

$$3 = x - 5$$

$$x = 8$$

That $8$ is the wage in EUR. Both sides then equal $19$:

$$2 \\cdot 8 + 3 = 19$$

$$3 \\cdot 8 - 5 = 19$$

which match, so the statement is True.`,
      `**B.** → True

Collect like terms: add $x$ to both sides, then subtract $8$, then divide by $3$:

$$5 - x = 2x + 8$$

$$5 = 3x + 8$$

$$-3 = 3x$$

$$x = -1$$

The isolated solution is $x = -1$, and that number is negative. The statement is True.`,
      `**C.** → True

Four boxes after $1$ unit is taken from each match two boxes after $5$ units are added to each:

$$4(x - 1) = 2(x + 5)$$

$$4x - 4 = 2x + 10$$

$$4x - 2x = 10 + 4$$

$$2x = 14$$

$$x = 7$$

That $7$ is the starting contents of each box. Both sides then equal $24$:

$$4(7 - 1) = 24$$

$$2(7 + 5) = 24$$

which match, so the statement is True.`,
      `**D.** → True

Solve each linear equation separately and compare the unique solutions.

$$x + 3 = 10$$

$$x = 7$$

and

$$2x = 14$$

$$x = 7$$

They share the solution $x = 7$, so the statement is True.`,
      `**E.** → True

Seven times a length, minus $2$ cm, minus three times the same length, equals $10$ cm. Combine like terms, then isolate $x$:

$$7x - 2 - 3x = 10$$

$$4x - 2 = 10$$

$$4x = 12$$

$$x = 3$$

That $3$ is the length in centimetres. It is a positive integer and $3 < 5$, so the property claim holds. Substituting it:

$$7 \\cdot 3 = 21$$

$$3 \\cdot 3 = 9$$

$$21 - 2 - 9 = 10$$

which matches the right-hand side, so the statement is True.`,
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
      `For $\frac{x}{2} + \frac{x}{3} = 5$, the sum of all admissible roots equals $8$.`,
      `For $\frac{x - 1}{3} = \frac{x + 1}{5}$, the equation has two distinct admissible real solutions.`,
      `For $\frac{2 \cdot 10}{3} = \frac{20}{3}$, the product of all admissible roots equals $14$.`,
      `For $\frac{x}{4} - \frac{x}{6} = 1$, the equation has no admissible real solution.`,
      `For $\frac{3x + 1}{4} = 4$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Half a tank plus one-third of the same tank is $5$ litres. Clear the denominators by multiplying through by the least common denominator $6$:

$$\\frac{x}{2} + \\frac{x}{3} = 5$$

$$3x + 2x = 30$$

$$5x = 30$$

$$x = 6$$

That $6$ is the tank's volume in litres. The student reports $8$. Substituting the claimed value:

$$\\frac{8}{2} = 4$$

$$4 + \\frac{8}{3} = \\frac{20}{3}$$

which is not $5$, so the statement is False.`,
      `**B.** → False

Cross-multiply the proportion, then collect like terms:

$$\\frac{x - 1}{3} = \\frac{x + 1}{5}$$

$$5(x - 1) = 3(x + 1)$$

$$5x - 5 = 3x + 3$$

$$5x - 3x = 3 + 5$$

$$2x = 8$$

$$x = 4$$

The isolated solution is $x = 4$, and $4$ is not odd. The candidate's property is false, so the statement is False.`,
      `**C.** → False

Two-thirds of a bottle is $8$ ml. Multiply through by $3$, then divide by $2$:

$$\\frac{2x}{3} = 8$$

$$2x = 24$$

$$x = 12$$

That $12$ is the bottle in millilitres. The chemist reports $10$. Substituting the claimed value:

$$\\frac{2 \\cdot 10}{3} = \\frac{20}{3}$$

which is not $8$, so the statement is False.`,
      `**D.** → False

Clear the denominators by multiplying through by the least common denominator $12$:

$$\\frac{x}{4} - \\frac{x}{6} = 1$$

$$3x - 2x = 12$$

$$x = 12$$

The isolated solution is $x = 12$, and $12$ is not odd. The statement is False.`,
      `**E.** → True

Three times a fee plus $1$ EUR, all divided by $4$, equals $4$ EUR. Multiply through by $4$, then isolate $x$:

$$\\frac{3x + 1}{4} = 4$$

$$3x + 1 = 16$$

$$3x = 15$$

$$x = 5$$

That $5$ is the fee in EUR. Substituting it:

$$\\frac{3 \\cdot 5 + 1}{4} = 4$$

which matches the right-hand side, so the statement is True.`,
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
      `For $2\bigl(x + (x + 3)\bigr) = 22$, the sum of all admissible roots equals $7$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $2x + 1 = x + 8$, the sum of all admissible roots equals $7$.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

The longer side is $3$ cm more than the shorter side, and the perimeter is $22$ cm. Let the shorter side be $x$ cm. Then the longer side is $x + 3$, and twice the sum of the sides equals $22$:

$$2\\bigl(x + (x + 3)\\bigr) = 22$$

$$2(2x + 3) = 22$$

$$4x + 6 = 22$$

$$4x = 16$$

$$x = 4$$

The shorter side is $4$ cm, so the longer side is $7$ cm, not the claimed $5$ cm. Substituting a longer side of $5$ cm would force a shorter side of $2$ cm:

$$2(5 + 2) = 14$$

which is not $22$. If instead $5$ cm were taken as the shorter side, the longer side would be $8$ cm and the perimeter would be $26$ cm, still not $22$. The recovered longer side is $7$ cm, so the statement is False.`,
      `**B.** → True

Time on the road is distance divided by average speed:

$$t = \\frac{112}{64}$$

$$t = \\frac{7}{4}$$

$$t = 1.75$$

hours. That is $1$ hour and $45$ minutes. Counting $1$ hour back from $3$ pm lands at $2$ pm; counting a further $45$ minutes back lands at $1{:}15$ pm. The recovered start time matches the claim, so the statement is True.`,
      `**C.** → True

One litre of $8\\%$ vinegar holds $0.08$ litres of pure vinegar. After adding $w$ litres of water the total volume is $1 + w$ litres, and the concentration should be $5\\%$:

$$\\frac{0.08}{1 + w} = 0.05$$

$$0.08 = 0.05(1 + w)$$

$$0.08 = 0.05 + 0.05w$$

$$0.03 = 0.05w$$

$$w = \\frac{0.03}{0.05}$$

$$w = 0.6$$

That $0.6$ is the litres of water to add. Substituting it recovers the $5\\%$ concentration:

$$1 + 0.6 = 1.6$$

$$\\frac{0.08}{1.6} = 0.05$$

which matches the recipe, so the statement is True.`,
      `**D.** → True

Let the first-place prize be $a$ EUR. Then second place is $80\\%$ of first place, and third place is $80\\%$ of second place:

$$0.8a$$

$$0.8 \\cdot 0.8a = 0.64a$$

The three prizes sum to $12200$ EUR:

$$a + 0.8a + 0.64a = 12200$$

$$2.44a = 12200$$

$$a = \\frac{12200}{2.44}$$

$$a = 5000$$

First place is $5000$ EUR, so second place is

$$0.8 \\cdot 5000 = 4000$$

That $4000$ exceeds $3500$ EUR, so the property claim holds and the statement is True.`,
      `**E.** → True

Gather the unknown on one side and the constants on the other:

$$2x + 1 = x + 8$$

$$2x - x = 8 - 1$$

$$x = 7$$

The unique real solution is $7$, which is an odd integer, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 9,
    solution_overview: `Five independent closed claims. Translate each story into one linear equation (a perimeter, a $t = d/v$ start time, a dilution, a percentage split, and an unknown on both sides), then isolate the unknown.`,
  },
  {
    id: `math-4-10`,
    case_id: `MATH 4.10`,
    title: `One solution, none, or every $x$`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x + 3 = x + 5$, the equation has exactly one real solution.`,
      `For $2(x + 4) = 2x + 8$, the equation has infinitely many real solutions.`,
      `For $-3x = 12$, the product of all admissible roots equals $-1$.`,
      `For $5x + 2 = 5x + 2$, the equation has no real solution.`,
      `For $x = x + 1$, the equation has two distinct real solutions.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

The two tills add $3$ EUR and $5$ EUR to the same original bill $x$. For the tills to match,

$$x + 3 = x + 5$$

Subtract $x$ from both sides:

$$3 = 5$$

which is never true. Substituting the claimed original bill $x = 0$ gives $3 = 5$ as well. There is no real solution, so the statement is False.`,
      `**B.** → True

Expanding the left-hand side with the distributive law produces the same linear expression as the right-hand side, so the equation is an identity:

$$2(x + 4) = 2x + 8$$

$$2x + 8 = 2x + 8$$

Every real $x$ satisfies it, so the statement is True.`,
      `**C.** → False

Three times a temperature change, taken with the opposite sign, equals $12$ degrees:

$$-3x = 12$$

$$x = -4$$

That $-4$ is the temperature change in degrees. The student reports $4$. Substituting the claimed value:

$$-3 \\cdot 4 = -12$$

which is not $12$, so the statement is False.`,
      `**D.** → False

The two sides are identical, so the equation is an identity:

$$5x + 2 = 5x + 2$$

Every real $x$ works. That is infinitely many solutions, not none, so the statement is False.`,
      `**E.** → False

A number equal to one more than itself is the contradiction

$$x = x + 1$$

Subtract $x$ from both sides:

$$0 = 1$$

which is never true. So the equation has no real solution, not infinitely many. The statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Five independent claims about how many solutions a linear equation can have. After simplifying, an identity is true for every $x$, a contradiction is true for none, and a remaining $ax = b$ with $a \\neq 0$ has one solution.`,
  },
  {
    id: `math-4-11`,
    case_id: `MATH 4.11`,
    title: `Ages, coins, and a tank that is not yet full`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $s + 28 + 8 = 2(s + 8)$, the sum of all admissible roots equals $0$.`,
      `The equation has no real solution.`,
      `For $5x + 2(16 - x) = 53$, the product of all admissible roots equals $7$.`,
      `The equation has no real solution.`,
      `For $x + \frac{x}{3} = 48$, the sum of all admissible roots equals $38$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the son's present age be $s$ years. The father is then $s + 28$ years old now. In $8$ years the father will be twice as old as the son will be then:

$$s + 28 + 8 = 2(s + 8)$$

$$s + 36 = 2s + 16$$

$$36 - 16 = 2s - s$$

$$s = 20$$

The son is now $20$ years old and the father is $48$. In $8$ years they will be $28$ and $56$, and

$$56 = 2 \\cdot 28$$

which matches the age relation, so the statement is True.`,
      `**B.** → False

Consecutive odd integers differ by $2$. Let the smallest be $n$:

$$n + (n + 2) + (n + 4) = 75$$

$$3n + 6 = 75$$

$$3n = 69$$

$$n = 23$$

The three integers are $23$, $25$, and $27$. The largest is $27$, not the claimed $29$. The triple $25$, $27$, $29$ sums to

$$25 + 27 + 29 = 81$$

which is not $75$, so the statement is False.`,
      `**C.** → True

Let $x$ be the number of $5$ EUR coins. Then there are $16 - x$ coins of $2$ EUR, and the total value is $53$ EUR:

$$5x + 2(16 - x) = 53$$

$$5x + 32 - 2x = 53$$

$$3x + 32 = 53$$

$$3x = 21$$

$$x = 7$$

There are $7$ coins of $5$ EUR and $9$ coins of $2$ EUR:

$$7 \\cdot 5 = 35$$

$$9 \\cdot 2 = 18$$

$$35 + 18 = 53$$

which matches the purse, so the statement is True.`,
      `**D.** → False

Water flows at $15$ litres per minute for $12$ minutes, so the volume delivered is

$$15 \\cdot 12 = 180$$

litres. That volume is four-fifths of the tank, not the whole tank. The capacity $C$ therefore satisfies

$$\\frac{4}{5}C = 180$$

$$C = 180 \\cdot \\frac{5}{4}$$

$$C = 225$$

The tank holds $225$ litres, not the claimed $180$. Substituting capacity $180$ would make $12$ minutes fill the tank completely rather than four-fifths of it, so the statement is False.`,
      `**E.** → False

A number plus one-third of itself equals $48$. Add the coefficients, then multiply through by $3$:

$$x + \\frac{x}{3} = 48$$

$$\\frac{4x}{3} = 48$$

$$4x = 144$$

$$x = 36$$

That $36$ is the original number. The claim says $40$. Substituting that value:

$$40 + \\frac{40}{3} = \\frac{160}{3}$$

which is not $48$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 11,
    solution_overview: `Five independent stories, each hiding one linear equation. Translate the English (an age relation, consecutive odd integers, a two-coin purse, a tank filled to a fraction of its capacity, a number plus a fraction of itself), then isolate the unknown.`,
  },
  {
    id: `math-4-12`,
    case_id: `MATH 4.12`,
    title: `Runners, printers, and a train past a pole`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Time is distance divided by speed on each leg separately. The times do not add as a single speed:

$$t_1 = \\frac{9}{6}$$

$$t_1 = \\frac{3}{2}$$

$$t_2 = \\frac{6}{9}$$

$$t_2 = \\frac{2}{3}$$

$$t = \\frac{3}{2} + \\frac{2}{3}$$

$$t = \\frac{9}{6} + \\frac{4}{6}$$

$$t = \\frac{13}{6}$$

hours, which is $2$ hours and $10$ minutes, not the claimed $2$ hours. Substituting a total of $2$ hours would require the two legs to take $2$ hours together, but they take $\\frac{13}{6}$ hours, so the statement is False.`,
      `**B.** → True

Work rates add. The faster printer does $\\frac{1}{6}$ of the job per hour, and together they do $\\frac{1}{4}$ per hour. Let $s$ be the slower printer's time in hours for one job:

$$\\frac{1}{6} + \\frac{1}{s} = \\frac{1}{4}$$

$$\\frac{1}{s} = \\frac{1}{4} - \\frac{1}{6}$$

$$\\frac{1}{s} = \\frac{3}{12} - \\frac{2}{12}$$

$$\\frac{1}{s} = \\frac{1}{12}$$

$$s = 12$$

The slower printer takes $12$ hours alone, matching the claim, so the statement is True.`,
      `**C.** → True

Passing a pole means covering the train's own length. Speed in metres per second is distance over time:

$$\\frac{180}{12} = 15$$

Convert metres per second to kilometres per hour by the factor $3.6$:

$$15 \\cdot 3.6 = 54$$

That $54$ is the speed in km/h, matching the claim, so the statement is True.`,
      `**D.** → False

The first car leaves at $8{:}00$ at $60$ km/h, so by $9{:}00$ it has a head start of

$$60 \\cdot 1 = 60$$

kilometres. The second car is $30$ km/h faster, so the gap closes at $30$ km/h. Time after $9{:}00$ until they meet:

$$\\frac{60}{30} = 2$$

hours, which is $11{:}00$, not noon. At the claimed noon the first car has been out for $4$ hours and the second for $3$ hours:

$$60 \\cdot 4 = 240$$

$$90 \\cdot 3 = 270$$

The distances from the depot are not equal, so the statement is False.`,
      `**E.** → True

The tap fills $240$ litres in $8$ minutes, so the rate is

$$\\frac{240}{8} = 30$$

litres per minute. Left open for $5$ minutes it pours

$$30 \\cdot 5 = 150$$

litres, matching the claim, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Five independent motion and work stories. Split a two-leg run into two times; add work rates as fractions of a job per hour; convert m/s to km/h by the factor $3.6$; a chase closes at the speed difference.`,
  },
  {
    id: `math-4-13`,
    case_id: `MATH 4.13`,
    title: `Wire around a garden, angles in a triangle`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Each equal side is $5$ cm longer than the base $b$, and the perimeter is $40$ cm:

$$2(b + 5) + b = 40$$

$$2b + 10 + b = 40$$

$$3b + 10 = 40$$

$$3b = 30$$

$$b = 10$$

The sides are $10$ cm, $15$ cm, and $15$ cm. The base matches the claim, so the statement is True.`,
      `**B.** → True

The garden is $3$ m longer than it is wide. Let the width be $w$ metres. Fencing all four sides uses $54$ m:

$$2(w + w + 3) = 54$$

$$2(2w + 3) = 54$$

$$4w + 6 = 54$$

$$4w = 48$$

$$w = 12$$

The garden is $12$ m by $15$ m, and the width matches the claim, so the statement is True.`,
      `**C.** → True

The three angles of a triangle sum to $180^{\\circ}$. Consecutive integers $n$, $n + 1$, and $n + 2$ therefore satisfy

$$n + (n + 1) + (n + 2) = 180$$

$$3n + 3 = 180$$

$$3n = 177$$

$$n = 59$$

The largest angle is $61^{\\circ}$. Substituting the three measures:

$$59 + 60 + 61 = 180$$

which matches a triangle, so the statement is True.`,
      `**D.** → True

An equilateral triangle with perimeter $12$ cm has side length

$$\\frac{12}{3} = 4$$

centimetres. The square has the same side length, so its perimeter is

$$4 \\cdot 4 = 16$$

centimetres, matching the claim, so the statement is True.`,
      `**E.** → True

Perimeter is twice the sum of length and width. Increasing only the length by $2$ cm adds $2$ cm on each of two sides:

$$\\Delta P = 2 \\cdot 2$$

$$\\Delta P = 4$$

The width does not enter that difference. The perimeter increases by $4$ cm, matching the claim, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Five independent geometry stories that stay linear. Write a perimeter or an angle sum, expand, and isolate the unknown. A change in only one pair of sides changes the perimeter by twice that change.`,
  },
  {
    id: `math-4-14`,
    case_id: `MATH 4.14`,
    title: `Five separate shopping bills`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2(x + 3) + 3x = 21$, the sum of all admissible roots equals $3$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Apples cost $2$ EUR per kilogram and pears $3$ EUR per kilogram. Let pears be $x$ kg. Then apples are $x + 3$ kg, and the bill is $21$ EUR:

$$2(x + 3) + 3x = 21$$

$$2x + 6 + 3x = 21$$

$$5x + 6 = 21$$

$$5x = 15$$

$$x = 3$$

The customer bought $3$ kg of pears, matching the claim, so the statement is True.`,
      `**B.** → True

Notebooks cost $4$ EUR each and pens $2$ EUR each. Let notebooks be $n$. Then pens are $n + 5$, and the bill is $22$ EUR:

$$4n + 2(n + 5) = 22$$

$$4n + 2n + 10 = 22$$

$$6n + 10 = 22$$

$$6n = 12$$

$$n = 2$$

The student bought $2$ notebooks, matching the claim, so the statement is True.`,
      `**C.** → True

Tea is $5$ EUR per kilogram and sugar $2$ EUR per kilogram. Let sugar be $s$ kg. Then tea is $2s$ kg, and the bill is $24$ EUR:

$$5(2s) + 2s = 24$$

$$10s + 2s = 24$$

$$12s = 24$$

$$s = 2$$

Tea is then $4$ kg, so the tea alone costs

$$4 \\cdot 5 = 20$$

EUR, matching the claim, so the statement is True.`,
      `**D.** → True

Five kilograms of apples at $2$ EUR per kilogram and two kilograms of pears at $3$ EUR per kilogram cost

$$5 \\cdot 2 = 10$$

$$2 \\cdot 3 = 6$$

$$10 + 6 = 16$$

EUR. The bill is $16$ EUR, matching the claim, so the statement is True.`,
      `**E.** → True

Four loaves at $2$ EUR and two cartons at $1.5$ EUR cost

$$4 \\cdot 2 = 8$$

$$2 \\cdot 1.5 = 3$$

$$8 + 3 = 11$$

EUR. Milk is $3$ EUR of that $11$ EUR bill. One-third of the bill would be

$$\\frac{11}{3}$$

and $3 < \\frac{11}{3}$. Milk made up less than one-third of the bill, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `Five independent shopping bills, each a linear equation in one unknown. Translate quantities and unit prices into one equation, isolate the unknown, then read the claimed line of the bill.`,
  },
  {
    id: `math-4-15`,
    case_id: `MATH 4.15`,
    title: `Five separate percentage and dilution stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Let the original volume be $V$ litres of $20\\%$ acid. Drawing $2$ litres removes $0.20 \\cdot 2$ litres of pure acid, then replacing that volume with water leaves the same tank volume $V$ at $16\\%$ acid:

$$0.20 \\cdot 2 = 0.40$$

Remaining acid is $0.20V - 0.40$, which is also $0.20(V - 2)$. The new concentration is

$$\\frac{0.20(V - 2)}{V} = 0.16$$

$$0.20(V - 2) = 0.16V$$

$$0.20V - 0.40 = 0.16V$$

$$0.20V - 0.16V = 0.40$$

$$0.04V = 0.40$$

$$V = 10$$

That $10$ is the original volume in litres. Substituting it:

$$0.20(10 - 2) = 1.6$$

$$\\frac{1.6}{10} = 0.16$$

which matches the $16\\%$ mixture, so the statement is True.`,
      `**B.** → False

The vat holds $8$ litres of $25\\%$ acid, so the pure acid present is

$$0.25 \\cdot 8 = 2$$

litres. Adding $2$ litres of pure acid brings the total volume to

$$8 + 2 = 10$$

litres and the total pure acid to

$$2 + 2 = 4$$

litres. The new concentration is

$$\\frac{4}{10} = 0.40$$

so the mixture is $40\\%$ acid, not the claimed $35\\%$. The claim does not match the concentration after the addition, so the statement is False.`,
      `**C.** → False

A $20\\%$ discount leaves $80\\%$ of the original price $p$:

$$0.80p = 64$$

$$p = \\frac{64}{0.80}$$

$$p = 80$$

The original price is $80$ EUR, not the claimed $90$ EUR. Substituting $p = 90$:

$$0.80 \\cdot 90 = 72$$

which is not $64$, so the statement is False.`,
      `**D.** → False

Successive percentage changes multiply. A $25\\%$ rise followed by a $25\\%$ fall is the product of the two factors:

$$1.25 \\cdot 0.75 = 0.9375$$

The final price is $93.75\\%$ of the original listed price, not $94\\%$. The two changes do not cancel, and $0.9375$ is not $0.94$, so the statement is False.`,
      `**E.** → False

Two successive $10\\%$ raises multiply. Starting from $2400$ EUR:

$$2400 \\cdot 1.1 = 2640$$

$$2640 \\cdot 1.1 = 2904$$

The new salary is $2904$ EUR, not $2880$ EUR. The figure $2880$ would be a single $20\\%$ raise on $2400$, which is not the same as two successive $10\\%$ raises. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 15,
    solution_overview: `Five independent percentage stories. Write a concentration or a scale factor, then isolate the unknown. Successive percentage changes multiply; they do not add or cancel.`,
  },
  {
    id: `math-4-16`,
    case_id: `MATH 4.16`,
    title: `Five separate motion and current stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

Towns $X$ and $Y$ are $132$ km apart. The first car has a $30$ minute head start at $48$ km/h, so by $12{:}30$ it has covered

$$48 \\cdot \\frac{1}{2} = 24$$

kilometres. The remaining gap is

$$132 - 24 = 108$$

kilometres. From $12{:}30$ the cars close at

$$48 + 72 = 120$$

kilometres per hour. The time after $12{:}30$ until they meet is

$$t = \\frac{108}{120}$$

$$t = \\frac{9}{10}$$

$$t = 0.9$$

hours, which is $54$ minutes. Adding $54$ minutes to $12{:}30$ gives $1{:}24$ pm, and $54$ minutes is the recovered closing time in the claim, so the statement is True.`,
      `**B.** → False

The later car starts at $12{:}30$. A full hour of driving would run until $1{:}30$ pm. The closing time after $12{:}30$ is $0.9$ hours:

$$0.9 \\cdot 60 = 54$$

minutes, not $60$ minutes. The later car has then been driving for $54$ minutes, not a full hour, so the statement is False.`,
      `**C.** → False

Downstream speed is distance over time:

$$\\frac{24}{2} = 12$$

kilometres per hour. Upstream speed is

$$\\frac{24}{3} = 8$$

kilometres per hour. Still-water speed is the average of those two:

$$\\frac{12 + 8}{2} = 10$$

The boat's speed in still water is $10$ km/h, not the claimed $12$ km/h. Substituting a still-water speed of $12$ km/h would make the downstream speed strictly larger than $12$, but the downstream speed is $12$, so the statement is False.`,
      `**D.** → False

Time is distance divided by speed on each leg. Outward:

$$\\frac{30}{15} = 2$$

hours. Return:

$$\\frac{30}{10} = 3$$

hours. The round trip is

$$2 + 3 = 5$$

hours, not the claimed $4$ hours. Averaging the two speeds or treating each leg as two hours does not recover the total time, so the statement is False.`,
      `**E.** → True

Thirty minutes is $\\frac{1}{2}$ hour. Distance is speed times time:

$$48 \\cdot \\frac{1}{2} = 24$$

That $24$ is the head-start distance in kilometres, matching the claim, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Five independent motion claims. Peel a head start, then close the remaining gap at the sum of the oncoming speeds. A current is half the downstream-upstream gap; a round trip adds the two one-way times.`,
  },
  {
    id: `math-4-17`,
    case_id: `MATH 4.17`,
    title: `A rod, a recipe, and two-fifths of a number`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x + (x + 60) = 240$, the sum of all admissible roots equals $90$.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `For $\frac{3x}{5} - \frac{x}{5} = 12$, the sum of all admissible roots equals $32$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Work in centimetres so the units match: $2.4$ m is $240$ cm. One piece is $60$ cm longer than the other. Let the shorter piece be $x$ cm:

$$x + (x + 60) = 240$$

$$2x + 60 = 240$$

$$2x = 180$$

$$x = 90$$

That $90$ is the shorter piece in centimetres, matching the claim, so the statement is True.`,
      `**B.** → False

The mean of three numbers is $14$, so their sum is

$$3 \\cdot 14 = 42$$

The third number is then

$$42 - 11 - 15 = 16$$

not the claimed $18$. Substituting $18$ as the third number:

$$11 + 15 + 18 = 44$$

and $\\frac{44}{3} \\neq 14$, so the statement is False.`,
      `**C.** → False

Scale the recipe by the portion ratio $\\frac{12}{8}$:

$$\\frac{12}{8} = \\frac{3}{2}$$

$$600 \\cdot \\frac{3}{2} = 900$$

Twelve portions need $900$ g of flour, not the claimed $1000$ g. Substituting $1000$ g would scale by $\\frac{1000}{600} = \\frac{5}{3}$, which is not $\\frac{12}{8}$, so the statement is False.`,
      `**D.** → False

Length is twice width $w$, and the perimeter is $48$ cm:

$$2(2w + w) = 48$$

$$2(3w) = 48$$

$$6w = 48$$

$$w = 8$$

The width is $8$ cm, not the claimed $10$ cm. Substituting width $10$ cm forces length $20$ cm and perimeter

$$2(20 + 10) = 60$$

which is not $48$, so the statement is False.`,
      `**E.** → False

Three-fifths of a number minus one-fifth of the same number is $12$. Clear the denominators by multiplying through by $5$:

$$\\frac{3x}{5} - \\frac{x}{5} = 12$$

$$\\frac{2x}{5} = 12$$

$$2x = 60$$

$$x = 30$$

That $30$ is the original number. The claim says $25$. Substituting $x = 25$:

$$\\frac{3 \\cdot 25}{5} = 15$$

$$\\frac{25}{5} = 5$$

$$15 - 5 = 10$$

which is not $12$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Five independent stories. Convert mixed units first when needed, then write one linear equation (a rod split, a missing mean, a recipe scaled by portions, a $2{:}1$ rectangle, a comparison of two fifths).`,
  },
  {
    id: `math-4-18`,
    case_id: `MATH 4.18`,
    title: `Five separate fractional linear equations`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{3x - 1}{4} + \frac{x + 3}{2} = 5$, the sum of all admissible roots equals $3$.`,
      `For $\frac{x + 1}{2} - \frac{x - 1}{3} = 2$, the equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $\frac{x}{2} + \frac{x}{3} = 5$, the equation has no admissible real solution.`,
      `For $\frac{2x + 1}{5} = \frac{x - 4}{3}$, the sum of all admissible roots equals $-20$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Clear the denominators by multiplying through by $4$:

$$\\frac{3x - 1}{4} + \\frac{x + 3}{2} = 5$$

$$3x - 1 + 2(x + 3) = 20$$

$$3x - 1 + 2x + 6 = 20$$

$$5x + 5 = 20$$

$$5x = 15$$

$$x = 3$$

The recovered solution is $x = 3$, which is an integer. The statement is True.`,
      `**B.** → True

Clear the denominators by multiplying through by $6$:

$$\\frac{x + 1}{2} - \\frac{x - 1}{3} = 2$$

$$3(x + 1) - 2(x - 1) = 12$$

$$3x + 3 - 2x + 2 = 12$$

$$x + 5 = 12$$

$$x = 7$$

The recovered solution is $x = 7$, and $7$ is odd. The statement is True.`,
      `**C.** → True

A common multiple of $3$, $4$, and $6$ must be a multiple of each of them. The least such positive integer is $12$, because

$$12 = 3 \\cdot 4$$

$$12 = 4 \\cdot 3$$

$$12 = 6 \\cdot 2$$

and no smaller positive integer is a multiple of all three. Multiplying through by $12$ is therefore the economical clearing, so the statement is True.`,
      `**D.** → False

Half a wage plus one-third of the same wage is $5$ EUR. Clear the denominators by multiplying through by $6$:

$$\\frac{x}{2} + \\frac{x}{3} = 5$$

$$3x + 2x = 30$$

$$5x = 30$$

$$x = 6$$

That $6$ is the wage in EUR. The clerk reports $4$. Substituting the claimed value:

$$\\frac{4}{2} = 2$$

$$2 + \\frac{4}{3} = \\frac{10}{3}$$

which is not $5$, so the statement is False.`,
      `**E.** → False

Cross-multiply the proportion on its domain, where both denominators are allowed to be nonzero:

$$\\frac{2x + 1}{5} = \\frac{x - 4}{3}$$

$$3(2x + 1) = 5(x - 4)$$

$$6x + 3 = 5x - 20$$

$$6x - 5x = -20 - 3$$

$$x = -23$$

The recovered solution is $x = -23$, which is not positive. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Five independent fractional linear equations. Clear denominators by multiplying through by the least common multiple, then collect like terms. Each statement uses a different equation or a separate LCD fact.`,
  },
  {
    id: `math-4-19`,
    case_id: `MATH 4.19`,
    title: `Five separate wage, parts, and overtime bills`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The first $3$ hours cost $40$ EUR per hour, overtime after that costs $60$ EUR per hour, and parts add a fixed $50$ EUR. Let $h$ be the duration in hours with $h > 3$:

$$40 \\cdot 3 + 60(h - 3) + 50 = 290$$

$$120 + 60(h - 3) + 50 = 290$$

$$170 + 60(h - 3) = 290$$

$$60(h - 3) = 120$$

$$h - 3 = 2$$

$$h = 5$$

That $5$ is the job's duration in hours, and $5 > 4$, so the property claim holds and the statement is True.`,
      `**B.** → True

A plumber charges $45$ EUR per hour plus a $30$ EUR call-out fee, and the visit comes to $165$ EUR:

$$45h + 30 = 165$$

$$45h = 135$$

$$h = 3$$

That $3$ is the duration in hours, matching the claim, so the statement is True.`,
      `**C.** → True

On the $5$ hour job, the first $3$ hours of labour cost

$$40 \\cdot 3 = 120$$

EUR, and the remaining $2$ hours cost

$$60 \\cdot 2 = 120$$

EUR. Labour in all is

$$120 + 120 = 240$$

EUR. Adding the $50$ EUR parts charge:

$$240 + 50 = 290$$

Labour was billed at $240$ EUR with $50$ EUR remaining for parts, matching the claim, so the statement is True.`,
      `**D.** → False

A $4$ hour job has $1$ hour of overtime:

$$40 \\cdot 3 = 120$$

$$60 \\cdot 1 = 60$$

$$120 + 60 + 50 = 230$$

The bill would be $230$ EUR, not the claimed $290$ EUR. Overtime has started, but one overtime hour is not enough to reach $290$, so the statement is False.`,
      `**E.** → True

A $50$ EUR parts charge on a $290$ EUR bill is the fraction

$$\\frac{50}{290} = \\frac{5}{29}$$

One-fifth of the bill would be

$$\\frac{290}{5} = 58$$

and $50 < 58$. Parts are less than one-fifth of the bill, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Five independent billing claims. Write a two-band labour tariff plus a fixed parts charge as one linear equation in the duration, then isolate the unknown.`,
  },
  {
    id: `math-4-20`,
    case_id: `MATH 4.20`,
    title: `Five separate time, rate, and distance stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Distance in each band is speed times time, and the bands add:

$$15 \\cdot 2 + 10 \\cdot 1$$

$$= 30 + 10$$

$$= 40$$

The cyclist covers $40$ km. The claim is that same distance, so the statement is True.`,
      `**B.** → True

When two bodies approach, their relative speed is the sum of their speeds:

$$40 + 20 = 60$$

Meeting time is total separation divided by that relative speed:

$$\\frac{120}{60} = 2$$

They meet after $2$ hours. The claim is that same time, so the statement is True.`,
      `**C.** → False

Fifty minutes is $\\frac{5}{6}$ of an hour. Average speed is distance divided by time:

$$\\frac{10}{50/60}$$

$$= 10 \\cdot \\frac{60}{50}$$

$$= 12$$

The average speed is $12$ km/h, not $15$ km/h. At $15$ km/h the runner would cover only

$$15 \\cdot \\frac{5}{6} = 12.5$$

km in $50$ minutes, so the statement is False.`,
      `**D.** → False

At $60$ km/h, time in hours is distance divided by speed:

$$\\frac{180}{60} = 3$$

The trip takes $3$ hours, not $2.5$. In $2.5$ hours at $60$ km/h the car would cover only

$$60 \\cdot 2.5 = 150$$

km, so the statement is False.`,
      `**E.** → True

Distance is speed times time:

$$5 \\cdot 2.4 = 12$$

The hiker covers $12$ km. The claim is that same distance, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Five independent time-rate-distance claims. Distance is speed times time; meeting time is separation divided by relative speed; average speed is total distance divided by elapsed time.`,
  },
  {
    id: `math-4-21`,
    case_id: `MATH 4.21`,
    title: `Five separate age and consecutive-number stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $4s + 20 = 2(s + 20)$, the sum of all admissible roots equals $0$.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A present-age ratio together with a future-age ratio is one linear equation in the son's present age.

Let $s$ be the son's age now, in years. The father is now four times as old, so the father is now $4s$. In $20$ years the father will be twice as old as the son will be then:

$$4s + 20 = 2(s + 20)$$

$$4s + 20 = 2s + 40$$

$$2s = 20$$

$$s = 10$$

The son is now $10$ years old, and the father is now $40$. The claim is that same age $10$, so the statement is True.`,
      `**B.** → True

A present-age ratio together with a future-age ratio is one linear equation in the daughter's present age.

Let $d$ be the daughter's age now, in years. The mother is now three times as old, so the mother is now $3d$. In $12$ years the mother will be twice as old as the daughter will be then:

$$3d + 12 = 2(d + 12)$$

$$3d + 12 = 2d + 24$$

$$d = 12$$

The daughter is now $12$ years old. The claim is that same age $12$, so the statement is True.`,
      `**C.** → False

Ages grow by adding the elapsed time.

A father who is now $40$ will, after $20$ years, be

$$40 + 20 = 60$$

He will be $60$, not $50$. The claimed $50$ would mean only $10$ years of growth from $40$, so the statement is False.`,
      `**D.** → True

The difference of two ages is unchanged when both grow by the same number of years.

$$40 - 10 = 30$$

The gap is $30$ years now. After any common wait of $t$ years the ages are $40 + t$ and $10 + t$, and their difference is still $30$. The claim matches that constant gap, so the statement is True.`,
      `**E.** → False

Past ages are present ages minus the elapsed time, and a ratio is their quotient.

Five years ago the father was $35$ and the son was $5$:

$$40 - 5 = 35$$

$$10 - 5 = 5$$

$$\\frac{35}{5} = 7$$

They were in the ratio seven to one, not five to one. Five to one would have required ages $35$ and $7$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Five independent age claims. Translate a present ratio and a future ratio into one linear equation. Ages that grow together keep a constant gap.`,
  },
  {
    id: `math-4-22`,
    case_id: `MATH 4.22`,
    title: `Five separate train-passing and unit-conversion stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Opposite trains pass when they cover the sum of their lengths at the sum of their speeds.

The lengths add to

$$180 + 320 = 500$$

metres. The speeds add to

$$72 + 108 = 180$$

kilometres per hour. A speed in kilometres per hour converts to metres per second by multiplying by $\\frac{5}{18}$:

$$180 \\cdot \\frac{5}{18}$$

$$= 50$$

metres per second. The passing time is then

$$t = \\frac{500}{50}$$

$$= 10$$

seconds. The recovered time is $10$ seconds, matching the claim, so the statement is True.`,
      `**B.** → True

A speed in kilometres per hour converts to metres per second by multiplying by $\\frac{5}{18}$.

$$54 \\cdot \\frac{5}{18}$$

$$= 15$$

The speed is $15$ metres per second. The claim is that same figure, so the statement is True.`,
      `**C.** → False

Trains running in the same direction pass at the difference of their speeds.

$$90 - 54 = 36$$

kilometres per hour. Convert to metres per second:

$$36 \\cdot \\frac{5}{18}$$

$$= 10$$

metres per second. They must still cover the sum of their lengths:

$$150 + 250 = 400$$

metres, so

$$t = \\frac{400}{10}$$

$$= 40$$

seconds. The recovered time is $40$ seconds, not $20$. The claimed $20$ seconds at $10$ m/s would cover only $200$ m, so the statement is False.`,
      `**D.** → False

Time is distance divided by speed.

$$t = \\frac{45}{15}$$

$$= 3$$

hours. Three hours is

$$3 \\cdot 60 = 180$$

minutes, not $15$ minutes. The claimed $15$ minutes would cover only

$$15 \\cdot \\frac{15}{60} = 3.75$$

kilometres at $15$ km/h, so the statement is False.`,
      `**E.** → False

A speed in kilometres per hour converts to metres per second by multiplying by $\\frac{5}{18}$.

$$36 \\cdot \\frac{5}{18}$$

$$= 10$$

The conversion is $10$ metres per second, not $12$. The claimed $12$ m/s would be the conversion of $43.2$ km/h, not of $36$ km/h, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `Five independent rate and conversion claims. Opposite trains cover the sum of lengths at the sum of speeds; same-direction passing uses the speed difference. Convert km/h to m/s with $\\frac{5}{18}$. Journey time is distance over speed.`,
  },
  {
    id: `math-4-23`,
    case_id: `MATH 4.23`,
    title: `Five separate mixing and alloy stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `For $8 + 0.50x = 12.5 + 0.25x$, the equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Water adds volume without adding acid, so the acid amount stays fixed and the concentration is acid over new volume.

The original acid is $20\\%$ of $40$ litres:

$$0.20 \\cdot 40 = 8$$

litres of acid. After $10$ litres of water the vat holds

$$40 + 10 = 50$$

litres. The new concentration is

$$\\frac{8}{50} = 0.16$$

The vat is then $16\\%$ acid. The claim is that same concentration, so the statement is True.`,
      `**B.** → True

Acid is conserved when stock is poured in. Let $x$ be the litres of $50\\%$ stock added to the $50$ litre mixture that already holds $8$ litres of acid. The mixture is to reach $25\\%$ acid:

$$8 + 0.50x = 0.25(50 + x)$$

$$8 + 0.50x = 12.5 + 0.25x$$

$$0.25x = 4.5$$

$$x = 18$$

Then $18$ litres of stock must be added. The claim is that same volume, so the statement is True.`,
      `**C.** → True

The final volume is the $50$ litre mixture plus the $18$ litres of stock:

$$50 + 18 = 68$$

The vat then holds $68$ litres. The claim is that same volume, so the statement is True.`,
      `**D.** → False

Final acid is the original $8$ litres plus half of the $18$ litres of stock.

$$0.50 \\cdot 18 = 9$$

$$8 + 9 = 17$$

The final mixture contains $17$ litres of acid, not $20$. The claimed $20$ litres in $68$ litres would be a concentration of $\\frac{20}{68}$, which is not $25\\%$, so the statement is False.`,
      `**E.** → True

Twenty-five percent of the final $68$ litres is the acid amount.

$$0.25 \\cdot 68 = 17$$

$$\\frac{17}{68} = 0.25$$

The final mixture contains $17$ litres of acid, which is $25\\%$ of $68$ litres. The claim matches that check, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 23,
    solution_overview: `Five independent mixing claims. Water first drops $40$ litres at $20\\%$ to $50$ litres at $16\\%$ with $8$ litres of acid still in the vat. Then $18$ litres at $50\\%$ bring the mixture to $25\\%$ in $68$ litres.`,
  },
  {
    id: `math-4-24`,
    case_id: `MATH 4.24`,
    title: `Five separate path, average-speed, and prize stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A.** → False

A uniform outer path is the difference of two rectangle areas. Let the field width be $w$ metres. Then the length is $w + 8$. The path is $1.5$ m on every side, so it adds $3$ m to each dimension. The outer rectangle is $w + 3$ by $w + 11$, and the path area is $141$ m$^{2}$:

$$(w + 3)(w + 11) - w(w + 8) = 141$$

$$w^{2} + 14w + 33 - w^{2} - 8w = 141$$

$$6w + 33 = 141$$

$$6w = 108$$

$$w = 18$$

The field is $18$ m wide, not $15$ m. The claimed width $15$ would make the length $23$ m and the path area

$$6 \\cdot 15 + 33 = 123$$

square metres, not $141$, so the statement is False.`,
      `**B.** → True

A uniform outer border is the difference of two rectangle areas. Let the lawn width be $w$ metres. Then the length is $w + 4$. The $1$ m border adds $2$ m to each dimension. The outer rectangle is $w + 2$ by $w + 6$, and the border area is $48$ m$^{2}$:

$$(w + 2)(w + 6) - w(w + 4) = 48$$

$$w^{2} + 8w + 12 - w^{2} - 4w = 48$$

$$4w + 12 = 48$$

$$4w = 36$$

$$w = 9$$

The lawn is $9$ m wide. The claim is that same width, so the statement is True.`,
      `**C.** → True

A uniform path around the outside adds twice its width to each dimension.

The pitch length is $20$ m and the path is $2$ m on each end, so the outer length is

$$20 + 2 \\cdot 2 = 24$$

metres. The claim is that same outer length, so the statement is True.`,
      `**D.** → True

The path area is the outer rectangle minus the patio.

The patio is $12$ m by $8$ m. A $1$ m path all round makes the outer rectangle $14$ m by $10$ m:

$$14 \\cdot 10 = 140$$

$$12 \\cdot 8 = 96$$

$$140 - 96 = 44$$

The path covers $44$ m$^{2}$. The claim is that same area, so the statement is True.`,
      `**E.** → True

Walking once around a rectangle covers the perimeter, twice the sum of length and width.

$$2(20 + 30) = 100$$

The walk covers $100$ m. The claim is that same distance, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Five independent path-and-rectangle stories. A uniform outer path is the difference of two rectangle areas, and it adds twice its width to each side of the inner rectangle.`,
  },
  {
    id: `math-4-25`,
    case_id: `MATH 4.25`,
    title: `Five separate work-rate and leftover-work stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Work rates add, and remaining work divided by the combined rate is the time still needed.

$A$ does $\\frac{1}{12}$ of the job per day, $B$ does $\\frac{1}{18}$, and $C$ does $\\frac{1}{24}$. Together $A$ and $B$ do

$$\\frac{1}{12} + \\frac{1}{18}$$

$$= \\frac{3}{36} + \\frac{2}{36}$$

$$= \\frac{5}{36}$$

of a job per day. In two days they finish

$$2 \\cdot \\frac{5}{36} = \\frac{10}{36}$$

$$= \\frac{5}{18}$$

so the remainder is

$$1 - \\frac{5}{18} = \\frac{13}{18}$$

All three together do

$$\\frac{1}{12} + \\frac{1}{18} + \\frac{1}{24}$$

$$= \\frac{6}{72} + \\frac{4}{72} + \\frac{3}{72}$$

$$= \\frac{13}{72}$$

of a job per day. The remaining $\\frac{13}{18}$ at that rate takes

$$\\frac{13}{18} \\cdot \\frac{72}{13} = 4$$

days, not $6$. The claimed $6$ days at $\\frac{13}{72}$ per day would cover $\\frac{13}{12}$ of a job, more than the remainder, so the statement is False.`,
      `**B.** → True

The remainder is one minus the share already finished.

$A$ and $B$ together finish $\\frac{5}{18}$ of the job in those first two days, so

$$1 - \\frac{5}{18} = \\frac{13}{18}$$

remains. The claim is that same leftover share, so the statement is True.`,
      `**C.** → True

Remaining work divided by the combined rate of $A$, $B$, and $C$ is the time still needed.

The remainder is $\\frac{13}{18}$ of the job and the three together do $\\frac{13}{72}$ per day, so

$$\\frac{13}{18} \\cdot \\frac{72}{13} = 4$$

They need $4$ more days to finish. The claim is that same time, so the statement is True.`,
      `**D.** → False

Time for $C$ alone is remaining work divided by $C$'s rate $\\frac{1}{24}$ per day.

$$\\frac{13}{18} \\cdot 24 = \\frac{52}{3}$$

That is $\\frac{52}{3}$ days, not $8$. In the claimed $8$ days, $C$ would finish only

$$8 \\cdot \\frac{1}{24} = \\frac{1}{3}$$

of the job, which is less than the remaining $\\frac{13}{18}$, so the statement is False.`,
      `**E.** → True

Combined rate is the sum of the individual rates.

$$\\frac{1}{12} + \\frac{1}{18} + \\frac{1}{24}$$

$$= \\frac{6}{72} + \\frac{4}{72} + \\frac{3}{72}$$

$$= \\frac{13}{72}$$

The three together do $\\frac{13}{72}$ of a job per day. The claim is that same rate, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 25,
    solution_overview: `Five independent work-rate claims. Rates add. $A$ and $B$ for two days leave $\\frac{13}{18}$ of the job. Then $A$, $B$, and $C$ together do $\\frac{13}{72}$ per day and finish the rest in $4$ days.`,
  },
  {
    id: `math-4-26`,
    case_id: `MATH 4.26`,
    title: `Five separate two-speed journey stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Each leg is $120$ km. Time is distance divided by speed in each band:

$$\\frac{120}{80} + \\frac{120}{60}$$

$$= 1.5 + 2$$

$$= 3.5$$

The total driving time is $3.5$ hours, which exceeds $3$, so the statement is True.`,
      `**B.** → False

The whole drive covers

$$90 + 60 = 150$$

km. The time in each band is distance divided by speed:

$$\\frac{90}{45} + \\frac{60}{60}$$

$$= 2 + 1$$

$$= 3$$

Average speed is total distance divided by total driving time:

$$\\frac{150}{3} = 50$$

The average is $50$ km/h, not $55$ km/h. At $55$ km/h for $3$ hours the distance would be only

$$55 \\cdot 3 = 165$$

km, so the statement is False.`,
      `**C.** → True

Each leg is $100$ km. Outbound time is $100/50 = 2$ hours and return time is $100/25 = 4$ hours:

$$2 + 4 = 6$$

The round trip takes $6$ hours. The claim is that same time, so the statement is True.`,
      `**D.** → True

On the first leg, time in hours is distance divided by speed:

$$\\frac{80}{80} = 1$$

The first leg takes exactly $1$ hour. The claim is that same duration, so the statement is True.`,
      `**E.** → False

A $30$ minute rest is $0.5$ hour, so driving time within the $4$ hour clock is

$$4 - 0.5 = 3.5$$

hours. Average driving speed is distance divided by driving time:

$$\\frac{200}{3.5} = \\frac{400}{7}$$

That is about $57.1$ km/h, not $50$ km/h. At $50$ km/h for $3.5$ hours the motorist would cover only

$$50 \\cdot 3.5 = 175$$

km, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 26,
    solution_overview: `Five independent two-speed claims. Distance is speed times time in each band; average speed is total distance divided by total driving time; clock time minus rest is driving time.`,
  },
  {
    id: `math-4-27`,
    case_id: `MATH 4.27`,
    title: `Five separate race-handicap and garrison stories`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

A beating margin in a fixed race is a speed ratio, and ratios compose by matching the common runner.

When $A$ runs $100$ m, $B$ has run $80$ m, so

$$A : B = 100 : 80$$

$$= 5 : 4$$

When $B$ runs $100$ m, $C$ has run $75$ m, so

$$B : C = 100 : 75$$

$$= 4 : 3$$

When $B$ runs $80$ m, $C$ runs $\\frac{3}{4}$ of that:

$$\\frac{3}{4} \\cdot 80 = 60$$

When $A$ has run $100$ m, $C$ has run $60$ m. The claim is that same distance, so the statement is True.`,
      `**B.** → False

The speed ratio is the distances covered in the same time.

When $A$ runs $100$ m, $B$ has run $80$ m, so

$$A : B = 100 : 80$$

$$= 5 : 4$$

The ratio of $A$ to $B$ is $5 : 4$, not $4 : 5$. The claimed $4 : 5$ is the ratio the other way around, so the statement is False.`,
      `**C.** → False

$A$ beats $C$ by the distance $C$ still has left when $A$ finishes $100$ m.

When $A$ has run $100$ m, $C$ has run $60$ m, so $C$ still has $40$ m to go:

$$100 - 60 = 40$$

$A$ beats $C$ by $40$ m in a $100$ m race, not $50$ m. The claimed $50$ m would mean $C$ had run only $50$ m, so the statement is False.`,
      `**D.** → True

The composed speed ratio of $A$ to $C$ is the product of $A : B$ and $B : C$.

$$A : B = 5 : 4$$

$$B : C = 4 : 3$$

$$A : C = 5 : 3$$

When $A$ runs $100$ m, $C$ runs $60$ m, and

$$100 : 60 = 5 : 3$$

The claim is that same ratio, so the statement is True.`,
      `**E.** → True

$A$ beats $B$ by $20$ m in $100$ m means that when $A$ finishes, $B$ has $20$ m still to run.

$$100 - 20 = 80$$

When $A$ has run $100$ m, $B$ has run $80$ m. That is the opening handicap of $A$ against $B$. The claim matches that reading, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 27,
    solution_overview: `Five independent race-handicap claims. A beating margin in a fixed race is a speed ratio. $A : B = 5 : 4$ and $B : C = 4 : 3$ compose to $A : C = 5 : 3$.`,
  },
  {
    id: `math-4-28`,
    case_id: `MATH 4.28`,
    title: `Five separate nested linear word equations`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{x - 3}{4} = \frac{x}{3} - 2$, the sum of all admissible roots equals $0$.`,
      `For $\frac{x + 5}{2} = x - 3$, the equation has two distinct admissible real solutions.`,
      `The equation has exactly one real solution.`,
      `For $\frac{x + 1}{5} = \frac{x}{2} - 3$, the equation has no admissible real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Translate the word sentence into a linear equation, then clear the denominators.

Let $x$ be the number. Subtract $3$ and divide by $4$, and that equals $2$ less than one-third of the number:

$$\\frac{x - 3}{4} = \\frac{x}{3} - 2$$

Multiply through by $12$:

$$3(x - 3) = 4x - 24$$

$$3x - 9 = 4x - 24$$

$$15 = x$$

The unique real number with this property is $15$. Check: $\\frac{15 - 3}{4} = 3$ and $\\frac{15}{3} - 2 = 3$. The claim is that same value, so the statement is True.`,
      `**B.** → False

Translate the word sentence into a linear equation, then clear the denominator.

Let $x$ be the number. A number plus $5$, all divided by $2$, equals $3$ less than the number:

$$\\frac{x + 5}{2} = x - 3$$

$$x + 5 = 2x - 6$$

$$11 = x$$

The unique real number with this property is $11$, not $12$. The claimed $12$ would give $\\frac{12 + 5}{2} = \\frac{17}{2}$ on the left and $12 - 3 = 9$ on the right, so the statement is False.`,
      `**C.** → True

Three consecutive integers are a middle integer and the integers one below and one above it.

Let the middle integer be $n$. Then

$$(n - 1) + n + (n + 1) = 48$$

$$3n = 48$$

$$n = 16$$

The three consecutive integers are $15$, $16$, and $17$. The middle integer $16$ is even, so the statement is True.`,
      `**D.** → False

Translate the word sentence into a linear equation, then clear the denominators.

Let $x$ be the number. Add $1$ and divide by $5$, and that equals $3$ less than half the number:

$$\\frac{x + 1}{5} = \\frac{x}{2} - 3$$

Multiply through by $10$:

$$2(x + 1) = 5x - 30$$

$$2x + 2 = 5x - 30$$

$$32 = 3x$$

$$x = \\frac{32}{3}$$

The unique real number is $\\frac{32}{3}$, not $12$. The claimed $12$ would give $\\frac{12 + 1}{5} = \\frac{13}{5}$ on the left and $\\frac{12}{2} - 3 = 3$ on the right, so the statement is False.`,
      `**E.** → True

At a constant fill rate, time is proportional to the filled fraction.

Twelve minutes fill $\\frac{2}{5}$ of the tank, so the full time is

$$12 \\cdot \\frac{5}{2} = 30$$

minutes. The tank is full after $30$ minutes. The claim is that same time, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 28,
    solution_overview: `Five independent nested linear claims. Translate each word sentence into an equation, clear denominators, and isolate the unknown. Consecutive integers centred on $n$ add to $3n$.`,
  },
  {
    id: `math-4-29`,
    case_id: `MATH 4.29`,
    title: `A square of area $49$, and both signs of a square root`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A square of area $49$ m$^{2}$ has side length $7$ m.`,
      `For $x^{2} = 16$, the equation has no real solution.`,
      `For $x^{2} = 36$, the larger root exceeds the smaller by $14$.`,
      `For $x^{2} = 9$, the equation has exactly one real solution.`,
      `$5^{2} - 4^{2}$ equals $7$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The area of a square is the side times itself, and a geometric side is the positive square root.

If the side is $s$ cm, then

$$s^{2} = 49$$

$$s = \\pm 7$$

A length is positive, so $s = 7$, not $-7$. Check:

$$7 \\cdot 7 = 49$$

Each side is $7$ cm, so the statement is True.`,
      `**B.** → False

The equation $x^{2} = a$ with $a > 0$ has two real roots, $\\pm\\sqrt{a}$.

$$x^{2} = 16$$

$$x = \\pm 4$$

Both $4$ and $-4$ square to $16$, because $(-4)^{2} = 16$ as well as $4^{2} = 16$. The claim says $4$ is the only real number that works. There are two real numbers, so the statement is False.`,
      `**C.** → False

The equation $x^{2} = a$ with $a > 0$ has two real roots, $\\pm\\sqrt{a}$.

$$x^{2} = 36$$

$$x = \\pm 6$$

The real numbers that work are $6$ and $-6$. Seven is not among them:

$$7^{2} = 49$$

which is not $36$, so the statement is False.`,
      `**D.** → False

The area equation of the square is $x^{2} = 9$. That number sentence has two real roots.

$$x^{2} = 9$$

$$x = \\pm 3$$

A geometric side must be positive, so the side of the square is $3$ cm. But the corresponding real-number equation $x^{2} = 9$ also has $x = -3$, because $(-3)^{2} = 9$. So the equation has two real solutions, not exactly one. The statement is False.`,
      `**E.** → False

A difference of squares is the difference of the two squared values.

$$5^{2} - 4^{2}$$

$$= 25 - 16$$

$$= 9$$

The difference is $9$, not $7$. The claimed $7$ would be $5 + 2$, not $25 - 16$, so the statement is False.`,
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
      `For $(x - 2)(x - 5) = 0$, the sum of all admissible roots equals $5$.`,
      `For $x^{2} - 5x + 6 = 0$, the equation admits two distinct real roots.`,
      `For $x^{2} - 9 = 0$, the sum of all admissible roots equals $2$.`,
      `The equation has exactly one real solution.`,
      `For $x^{2} - 5x = 0$, multiplying the roots gives $2$.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

A product is zero only when at least one factor is zero.

Let $x$ be the number. The factors are $x - 2$ and $x - 5$, so

$$(x - 2)(x - 5) = 0$$

Then either

$$x - 2 = 0$$

or

$$x - 5 = 0$$

so $x = 2$ or $x = 5$. The sum of the roots is

$$2 + 5 = 7$$

not $8$. The claim says $8$, so the statement is False.`,
      `**B.** → True

Move everything to one side, factor, and set each factor to zero.

A number squared, minus five times the number, plus six, is zero:

$$x^{2} - 5x + 6 = 0$$

$$(x - 2)(x - 3) = 0$$

Then $x = 2$ or $x = 3$. Both roots are positive integers and they are distinct. The statement is True.`,
      `**C.** → False

Move everything to one side before factoring.

A number squared, minus nine, is zero:

$$x^{2} - 9 = 0$$

$$(x - 3)(x + 3) = 0$$

Then $x = 3$ or $x = -3$. The negative root $x = -3$ is a real solution, so the claim of no negative real roots is incorrect. The statement is False.`,
      `**D.** → True

That is the zero-product property: a product of real numbers is zero if and only if at least one factor is zero.

If $ab = 0$, then $a = 0$ or $b = 0$ (or both). This is why factoring solves a quadratic. The claim is that same rule, so the statement is True.`,
      `**E.** → False

Move every term to one side before factoring. Dividing by the unknown would throw away the root $x = 0$.

A number times itself equals five times the number:

$$x^{2} = 5x$$

$$x^{2} - 5x = 0$$

$$x(x - 5) = 0$$

Then $x = 0$ or $x = 5$. One root is zero, which is not positive. Both roots cannot be positive, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 30,
    solution_overview: `Five independent claims about factoring. Move everything to one side, factor, then set each factor to zero. Each statement uses a different quadratic or a separate factoring rule.`,
  },
  {
    id: `math-4-31`,
    case_id: `MATH 4.31`,
    title: `Five separate square and consecutive-integer stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $s^{2} = 81$, the sum of all admissible roots equals $0$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `A square of area $49$ m$^{2}$ has side length $8$ m.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The area of a square is the side times itself, and a geometric side is the positive square root.

$$s^{2} = 81$$

$$s = \\pm 9$$

A length is positive, so $s = 9$, not $-9$. Check:

$$9 \\cdot 9 = 81$$

The side is $9$ m. The claim is that same positive length, so the statement is True.`,
      `**B.** → True

Consecutive integers differ by $1$, so their product is a quadratic.

Let $n$ be the smaller integer. Then

$$n(n + 1) = 30$$

$$n^{2} + n - 30 = 0$$

$$(n + 6)(n - 5) = 0$$

so $n = -6$ or $n = 5$. The smaller positive integer is $5$, and the next is $6$. Their sum is

$$5 + 6 = 11$$

The claim is that same sum, so the statement is True.`,
      `**C.** → True

The perimeter of a rectangle is twice the sum of length and width.

$$P = 2(6 + 7)$$

$$P = 26$$

The perimeter is $26$ cm. The claim is that same perimeter, so the statement is True.`,
      `**D.** → False

Area is length times width.

$$5 \\cdot 8 = 40$$

The area is $40$ cm$^{2}$, not $35$. The claimed $35$ does not match the product of the given sides, so the statement is False.`,
      `**E.** → False

The area of a square is the side times itself.

$$s^{2} = 49$$

$$s = 7$$

A geometric side is positive, so the side is $7$ cm, not $8$ cm. Check:

$$7^{2} = 49$$

The claim $8$ cm does not match, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 31,
    solution_overview: `Five independent quadratic stories: a square with area $81$ m$^{2}$, consecutive integers with product $30$, a $6$ by $7$ perimeter check, a $5$ by $8$ area check, and a square of area $49$ cm$^{2}$.`,
  },
  {
    id: `math-4-32`,
    case_id: `MATH 4.32`,
    title: `A repeated root and a discriminant of zero`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} - 4x = 0$, the two roots sum to $7$.`,
      `For $x(x - 4) = 0$, the equation has two distinct admissible real solutions.`,
      `The equation has no real solution.`,
      `For $x^{2} - 4x + 4 = (x - 2)^{2}$, the equation has no admissible real solution.`,
      `For $(x - 2)^{2} = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Move every term to one side, factor, and set each factor to zero.

A number times itself, minus four times the number, is zero:

$$x^{2} - 4x = 0$$

$$x(x - 4) = 0$$

Then $x = 0$ or $x = 4$. Neither root is $5$. The claimed root $5$ would solve $x(x - 5) = 0$, not this equation, so the statement is False.`,
      `**B.** → False

Zero is an allowed real number, and it must be checked in the factored equation.

The same equation is $x(x - 4) = 0$. Substituting $x = 0$ gives

$$0^{2} - 4 \\cdot 0 = 0$$

Zero is a genuine solution, not a discarded extra. The claim that zero is not allowed is incorrect, so the statement is False.`,
      `**C.** → False

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$.

Here $a = 1$, $b = -4$, and $c = 4$:

$$\\Delta = (-4)^{2} - 4 \\cdot 1 \\cdot 4$$

$$\\Delta = 16 - 16$$

$$\\Delta = 0$$

The discriminant is $0$, not $4$. The claimed $4$ is the middle coefficient with the sign dropped, so the statement is False.`,
      `**D.** → False

A discriminant of zero means a repeated real root, not two distinct ones.

The discriminant of this quadratic is $0$. Completing the square, or factoring, gives

$$x^{2} - 4x + 4 = (x - 2)^{2}$$

$$(x - 2)^{2} = 0$$

$$x = 2$$

The root $x = 2$ appears twice. There are not two distinct real roots, so the statement is False.`,
      `**E.** → True

A square is zero only when the thing being squared is zero.

A squared difference from $2$ is zero:

$$(x - 2)^{2} = 0$$

$$x - 2 = 0$$

$$x = 2$$

The root $x = 2$ appears twice, so the equation has a repeated root. The claim matches that count, so the statement is True.`,
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
      `For $(x - 2)(x - 5) = x^{2} - 7x + 10$, the sum of all admissible roots equals $0$.`,
      `For $(x - 4)(x - 5) = x^{2} - 9x + 20$, the equation has exactly one real solution.`,
      `For $x^{2} - 7x + 10 = 0$, the larger root exceeds the smaller by $5$.`,
      `For $x^{2} - 7x + 10 = 0$, the equation has exactly one real solution.`,
      `For $x^{2} - Sx + P = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

For a monic quadratic $x^{2} - Sx + P = 0$, the sum of the roots is $S$ and the product is $P$.

The middle term matches a sum of $7$ and the constant term is $10$, so the quadratic is $x^{2} - 7x + 10 = 0$. The roots therefore add to $7$. Factoring confirms it:

$$(x - 2)(x - 5) = x^{2} - 7x + 10$$

$$2 + 5 = 7$$

The roots add to $7$. The claim is that same sum, so the statement is True.`,
      `**B.** → True

The constant term of a monic quadratic is the product of the roots.

For $x^{2} - 9x + 20 = 0$ that product is $20$. Factoring confirms it:

$$(x - 4)(x - 5) = x^{2} - 9x + 20$$

$$4 \\cdot 5 = 20$$

The product of the roots is $20$. The claim is that same product, so the statement is True.`,
      `**C.** → False

Two numbers that add to $S$ and multiply to $P$ are the roots of $x^{2} - Sx + P = 0$.

Here $S = 7$ and $P = 10$, so

$$x^{2} - 7x + 10 = 0$$

$$(x - 2)(x - 5) = 0$$

The integers are $2$ and $5$. The smaller is $2$, which is not greater than $2$. Both greater than $2$ would require a different pair, so the statement is False.`,
      `**D.** → False

The roots of $x^{2} - 7x + 10 = 0$ are $2$ and $5$.

The larger root is $5$, which does not exceed $5$. The claim requires a root strictly greater than $5$, so the statement is False.`,
      `**E.** → False

The two numbers that add to $7$ and multiply to $10$ are $2$ and $5$.

Then $5 > 4$, but $2$ is not greater than $4$. Both greater than $4$ would require a different pair. The claim fails for the smaller number, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 33,
    solution_overview: `Five independent Vieta claims. For $x^{2} - Sx + P = 0$ the sum of roots is $S$ and the product is $P$.`,
  },
  {
    id: `math-4-34`,
    case_id: `MATH 4.34`,
    title: `Five separate quadratic root and discriminant claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} - 5x + 6 = 0$, the two roots sum to $5$.`,
      `The equation has no real solution.`,
      `For $x^{2} - 4x + 4 = (x - 2)^{2}$, the product of all admissible roots equals $2$.`,
      `For $x^{2} + 3x - 10 = 0$, the equation has two distinct real solutions.`,
      `For $x^{2} - 2x - 8 = 0$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Move everything to one side, factor, and set each factor to zero.

$$x^{2} - 5x + 6 = 0$$

$$(x - 2)(x - 3) = 0$$

Then $x = 2$ or $x = 3$. Both roots are positive and distinct. The discriminant confirms two distinct real roots:

$$\\Delta = (-5)^{2} - 4 \\cdot 1 \\cdot 6$$

$$\\Delta = 25 - 24$$

$$\\Delta = 1 > 0$$

The claim matches that sign pattern, so the statement is True.`,
      `**B.** → False

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$.

Here $a = 1$, $b = 2$, and $c = 5$:

$$\\Delta = 2^{2} - 4 \\cdot 1 \\cdot 5$$

$$\\Delta = 4 - 20$$

$$\\Delta = -16$$

The discriminant is $-16$, not $4$. A discriminant of $4$ would belong to a quadratic such as $x^{2} + 2x + 1$, so the statement is False.`,
      `**C.** → True

A discriminant of zero means a repeated real root.

For $x^{2} - 4x + 4 = 0$, here $a = 1$, $b = -4$, and $c = 4$:

$$\\Delta = (-4)^{2} - 4 \\cdot 1 \\cdot 4$$

$$\\Delta = 16 - 16$$

$$\\Delta = 0$$

Factoring makes the repeated root visible:

$$x^{2} - 4x + 4 = (x - 2)^{2}$$

$$(x - 2)^{2} = 0$$

$$x = 2$$

There is exactly one real solution, a double root at $x = 2$. The claim matches that count, so the statement is True.`,
      `**D.** → True

Move everything to one side, factor, and set each factor to zero.

$$x^{2} + 3x - 10 = 0$$

$$(x + 5)(x - 2) = 0$$

Then $x = -5$ or $x = 2$. The negative root is $-5$, and its absolute value is

$$|-5| = 5$$

which exceeds $4$. The claim matches that property, so the statement is True.`,
      `**E.** → False

A negative discriminant means no real roots.

For $x^{2} - 2x - 8 = 0$, here $a = 1$, $b = -2$, and $c = -8$:

$$\\Delta = (-2)^{2} - 4 \\cdot 1 \\cdot (-8)$$

$$\\Delta = 4 + 32$$

$$\\Delta = 36$$

Since $\\Delta = 36 > 0$, there are two distinct real roots. Factoring gives

$$(x - 4)(x + 2) = 0$$

so real roots exist. The claim of no real solutions is incorrect, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 34,
    solution_overview: `Five independent quadratic claims on different equations. Factor when possible, or read the discriminant $b^{2} - 4ac$ to decide root count and sign.`,
  },
  {
    id: `math-4-35`,
    case_id: `MATH 4.35`,
    title: `Five separate rectangle and consecutive-integer stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} + 2x - 48 = 0$, the two roots sum to $-2$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Area is length times width. Let the width be $x$ cm. Then the length is $x + 2$, and the area is $48$ cm$^{2}$:

$$x(x + 2) = 48$$

$$x^{2} + 2x - 48 = 0$$

$$(x + 8)(x - 6) = 0$$

so $x = -8$ or $x = 6$. A width is positive, so $x = 6$. The longer side is then

$$6 + 2 = 8$$

Check: $6 \\cdot 8 = 48$. The longer side is $8$ cm. The claim is that same length, so the statement is True.`,
      `**B.** → True

Consecutive integers differ by $1$, so their product is a quadratic.

Let $n$ be the smaller integer. Then

$$n(n + 1) = 42$$

$$n^{2} + n - 42 = 0$$

$$(n + 7)(n - 6) = 0$$

so $n = -7$ or $n = 6$. The smaller positive integer is $6$, and the next is $7$. Their sum is

$$6 + 7 = 13$$

The claim is that same sum, so the statement is True.`,
      `**C.** → True

The perimeter of a rectangle is twice the sum of length and width.

$$P = 2(6 + 8)$$

$$P = 28$$

The perimeter is $28$ cm. The claim is that same perimeter, so the statement is True.`,
      `**D.** → False

Area is length times width.

$$6 \\cdot 10 = 60$$

The area is $60$ cm$^{2}$, not $48$. The claimed $48$ is the area of the $6$ by $8$ rectangle, so the statement is False.`,
      `**E.** → True

If the length is $2$ cm more than the width, the two sides differ by $2$ cm.

That is the opening relation of the $48$ cm$^{2}$ rectangle. The sides differ by $2$ cm whether or not one first recovers the widths $6$ and $8$. The claim matches that relation, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 35,
    solution_overview: `Five independent quadratic stories: a rectangle $2$ cm longer than it is wide with area $48$ cm$^{2}$, consecutive integers with product $42$, and a $6$ by $10$ area check.`,
  },
  {
    id: `math-4-36`,
    case_id: `MATH 4.36`,
    title: `Two consecutive integers whose product is $56$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Consecutive integers differ by $1$, so their product is a quadratic.

Let $n$ be the smaller integer. Then

$$n(n + 1) = 56$$

$$n^{2} + n - 56 = 0$$

$$(n + 8)(n - 7) = 0$$

so $n = -8$ or $n = 7$. The two integer roots are $7$ and $-8$, which are distinct. The claim matches that count, so the statement is True.`,
      `**B.** → True

The sum of a consecutive pair is twice the smaller plus one.

The positive pair is $7$ and $8$, so

$$7 + 8 = 15$$

They add to $15$. The claim is that same sum, so the statement is True.`,
      `**C.** → True

The quadratic $n^{2} + n - 56 = 0$ has two integer roots, $7$ and $-8$.

The negative root $n = -8$ gives the consecutive pair $-8$ and $-7$. Check:

$$(-8) \\cdot (-7) = 56$$

Besides the positive pair there is also that negative pair. The claim matches both roots, so the statement is True.`,
      `**D.** → True

Consecutive integers differ by $1$, and the product in the story is $56$.

$$6 \\cdot 9 = 54$$

That product is $54$, not $56$, and $6$ and $9$ differ by $3$, not by $1$. They are not the consecutive pair, so the statement is True.`,
      `**E.** → True

The sum of a consecutive pair is twice the smaller plus one.

The positive pair is $7$ and $8$, so

$$7 + 8 = 15$$

They add to $15$. The claim is that same sum, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 36,
    solution_overview: `Five independent claims about $n(n + 1) = 56$. The integer solutions for $n$ are $7$ and $-8$, giving the pairs $7$, $8$ and $-8$, $-7$.`,
  },
  {
    id: `math-4-37`,
    case_id: `MATH 4.37`,
    title: `A $5$ by $12$ rectangle from area $60$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Area is length times width. Let the width be $w$ cm. Then the length is $w + 7$, and the area is $60$ cm$^{2}$:

$$w(w + 7) = 60$$

$$w^{2} + 7w - 60 = 0$$

The discriminant of $aw^{2} + bw + c$ is $b^{2} - 4ac$. Here $a = 1$, $b = 7$, and $c = -60$:

$$\\Delta = 7^{2} - 4 \\cdot 1 \\cdot (-60)$$

$$\\Delta = 49 + 240$$

$$\\Delta = 289$$

$$\\Delta = 17^{2}$$

The quadratic formula then gives

$$w = \\frac{-7 \\pm 17}{2}$$

$$w = 5$$

or $w = -12$. A width is positive, so $w = 5$. Check:

$$5 \\cdot 12 = 60$$

The width is $5$ cm. That is a positive integer less than $6$ cm, so the statement is True.`,
      `**B.** → False

Area is length times width.

$$5 \\cdot 11 = 55$$

The area is $55$ cm$^{2}$, not $60$. The claimed $60$ would need the second side to be $12$ cm, so the statement is False.`,
      `**C.** → False

The perimeter of a rectangle is twice the sum of length and width.

$$P = 2(5 + 12)$$

$$P = 34$$

The perimeter is $34$ cm, not $40$. The claimed $40$ would be $2(8 + 12)$, so the statement is False.`,
      `**D.** → True

Pythagoras says that in a right triangle the square of the hypotenuse equals the sum of the squares of the legs.

Let the hypotenuse be $d$ cm. Then

$$d^{2} = 5^{2} + 12^{2}$$

$$d^{2} = 25 + 144$$

$$d^{2} = 169$$

$$d = 13$$

taking the positive length. Check: $13^{2} = 169$. The hypotenuse is $13$ cm. The claim is that same length, so the statement is True.`,
      `**E.** → False

Area is length times width. Let the width be $w$ metres. Then the length is $w + 4$, and the area is $45$ m$^{2}$:

$$w(w + 4) = 45$$

$$w^{2} + 4w - 45 = 0$$

$$(w + 9)(w - 5) = 0$$

so $w = -9$ or $w = 5$. A width is positive, so $w = 5$. The claimed $6$ m would give

$$6 \\cdot 10 = 60$$

which is not $45$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 37,
    solution_overview: `A rectangle of area $60$ with length $7$ more than width leads to $w^{2} + 7w - 60 = 0$. The positive root is $5$, so the sides are $5$ cm and $12$ cm. Those legs make a $5$-$12$-$13$ right triangle on the diagonal.`,
  },
  {
    id: `math-4-38`,
    case_id: `MATH 4.38`,
    title: `Five separate Pythagoras and factoring stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} + (x + 1)^{2} = 25$, the sum of all admissible roots equals $0$.`,
      `For $x^{2} + (x^{2} + 2x + 1) = 25$, the equation has exactly one real solution.`,
      `For $x^{2} + (x + 1)^{2} = 25$, the sum of all admissible roots equals $2$.`,
      `For $x^{2} + (x + 1)^{2} = 25$, the equation has no admissible real solution.`,
      `For $x^{2} + (x + 1)^{2} = 25$, the sum of all admissible roots equals $0$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Move everything to one side, factor, and set each factor to zero.

The factors are a number minus $5$ and the same number plus $3$, so

$$(x - 5)(x + 3) = 0$$

$$x^{2} - 2x - 15 = 0$$

Then $x = 5$ or $x = -3$. One root is positive and one is negative, so the statement is True.`,
      `**B.** → True

Pythagoras says that the square of the hypotenuse equals the sum of the squares of the legs.

The legs are $x$ cm and $x + 1$ cm and the hypotenuse is $5$ cm:

$$x^{2} + (x + 1)^{2} = 5^{2}$$

$$x^{2} + (x^{2} + 2x + 1) = 25$$

$$2x^{2} + 2x + 1 = 25$$

$$2x^{2} + 2x - 24 = 0$$

$$x^{2} + x - 12 = 0$$

$$(x + 4)(x - 3) = 0$$

so $x = -4$ or $x = 3$. A length is positive, so $x = 3$ and the legs are $3$ cm and $4$ cm. Both are positive integers, so the statement is True.`,
      `**C.** → False

An equilateral triangle has all three sides equal.

The sides $3$ cm, $4$ cm, and $5$ cm are three different lengths, so the triangle is not equilateral. It is a right triangle, not an equilateral one, so the statement is False.`,
      `**D.** → False

The area of a right triangle is half the product of the legs.

$$\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$$

The area is $6$ cm$^{2}$, not $12$. The claimed $12$ is the product of the legs without the half, so the statement is False.`,
      `**E.** → True

The longer leg is the larger of the two legs.

The legs are $3$ cm and $4$ cm, so the longer leg is $4$ cm. The claim is that same length, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 38,
    solution_overview: `Five independent claims. One is a factored quadratic $(x - 5)(x + 3)$. The others turn Pythagoras $x^{2} + (x + 1)^{2} = 25$ into a $3$-$4$-$5$ triangle.`,
  },
  {
    id: `math-4-39`,
    case_id: `MATH 4.39`,
    title: `Five separate discriminant and root-count claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} - 6x + 10 = 0$, the discriminant equals $-4$.`,
      `For $x^{2} + 2x + 1 = (x + 1)^{2}$, the equation has exactly one real solution.`,
      `For $x^{2} + x - 12 = 0$, the sum of all admissible roots equals $0$.`,
      `For $x^{2} + 2x + 3 = 0$, the equation has exactly one real solution.`,
      `For $3x^{2} - 2x + 1 = 0$, the equation has no admissible real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$. A negative discriminant means no real roots.

For $x^{2} - 6x + 10 = 0$, here $a = 1$, $b = -6$, and $c = 10$:

$$\\Delta = (-6)^{2} - 4 \\cdot 1 \\cdot 10$$

$$\\Delta = 36 - 40$$

$$\\Delta = -4$$

Since $\\Delta < 0$, there are no real roots. Completing the square gives the same conclusion:

$$(x - 3)^{2} + 1 = 0$$

A square plus one cannot be zero. No real number works, so the statement is True.`,
      `**B.** → True

A discriminant of zero means a repeated real root. Divide the equation by $2$ first:

$$x^{2} + 2x + 1 = 0$$

Here $a = 1$, $b = 2$, and $c = 1$:

$$\\Delta = 2^{2} - 4 \\cdot 1 \\cdot 1$$

$$\\Delta = 4 - 4$$

$$\\Delta = 0$$

Factoring makes the repeated root visible:

$$x^{2} + 2x + 1 = (x + 1)^{2}$$

$$(x + 1)^{2} = 0$$

$$x = -1$$

There is exactly one distinct real root, a double root at $x = -1$. The claim matches that count, so the statement is True.`,
      `**C.** → True

A positive discriminant means two distinct real roots.

For $x^{2} + x - 12 = 0$, here $a = 1$, $b = 1$, and $c = -12$:

$$\\Delta = 1^{2} - 4 \\cdot 1 \\cdot (-12)$$

$$\\Delta = 1 + 48$$

$$\\Delta = 49$$

Since $\\Delta > 0$, two different real numbers work. Factoring confirms:

$$(x + 4)(x - 3) = 0$$

The claim matches that count, so the statement is True.`,
      `**D.** → False

The discriminant decides whether distinct real roots exist.

For $x^{2} + 2x + 3 = 0$, here $a = 1$, $b = 2$, and $c = 3$:

$$\\Delta = 2^{2} - 4 \\cdot 1 \\cdot 3$$

$$\\Delta = 4 - 12$$

$$\\Delta = -8$$

Since $\\Delta < 0$, there are no real roots at all, let alone two distinct ones. The claim is incorrect, so the statement is False.`,
      `**E.** → True

The discriminant of $ax^{2} + bx + c$ is $b^{2} - 4ac$.

For $3x^{2} - 2x + 1 = 0$, here $a = 3$, $b = -2$, and $c = 1$:

$$\\Delta = (-2)^{2} - 4 \\cdot 3 \\cdot 1$$

$$\\Delta = 4 - 12$$

$$\\Delta = -8$$

Since $\\Delta < 0$, there are no real solutions. The claim matches that count, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 39,
    solution_overview: `Five independent discriminant claims on different quadratics. Compute $\\Delta = b^{2} - 4ac$: negative means none, zero means one repeated root, positive means two distinct real roots.`,
  },
  {
    id: `math-4-40`,
    case_id: `MATH 4.40`,
    title: `Five separate Vieta sum-and-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $(t - 4)(t - 8) = 0$, the sum of all admissible roots equals $0$.`,
      `For $(t - 2)(t - 7) = 0$, the equation has exactly one real solution.`,
      `For $(t - 3)(t - 8) = 0$, the sum of all admissible roots equals $0$.`,
      `For $(t - 4)(t - 9) = 0$, the equation has no admissible real solution.`,
      `For $(t - 3)(t - 5) = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Two numbers with sum $S$ and product $P$ are the roots of $t^{2} - St + P = 0$.

Here $S = 12$ and $P = 32$, so

$$t^{2} - 12t + 32 = 0$$

$$(t - 4)(t - 8) = 0$$

The numbers are $4$ and $8$. Both are even, so the statement is True.`,
      `**B.** → True

Two numbers that add to $9$ and multiply to $14$ are the roots of

$$t^{2} - 9t + 14 = 0$$

$$(t - 2)(t - 7) = 0$$

The numbers are $2$ and $7$. Their difference is

$$7 - 2 = 5$$

The claimed difference is $5$, so the statement is True.`,
      `**C.** → True

Two numbers with sum $11$ and product $24$ solve

$$t^{2} - 11t + 24 = 0$$

$$(t - 3)(t - 8) = 0$$

The numbers are $3$ and $8$. One is odd and one is even, so the statement is True.`,
      `**D.** → False

Two numbers that add to $13$ and multiply to $36$ are the roots of

$$t^{2} - 13t + 36 = 0$$

$$(t - 4)(t - 9) = 0$$

The numbers are $4$ and $9$. Then $9 > 6$, but $4$ is not greater than $6$. Both greater than $6$ would be a different pair whose product exceeds $36$, so the statement is False.`,
      `**E.** → False

Two numbers with sum $8$ and product $15$ are the roots of

$$t^{2} - 8t + 15 = 0$$

$$(t - 3)(t - 5) = 0$$

The numbers are $3$ and $5$, both positive. A negative pair with product $15$ would need a negative sum as well, because a negative times a negative is positive and the sum of two negatives is negative. The sum here is $8 > 0$, so both numbers are positive. The claim that each is negative is incorrect, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 40,
    solution_overview: `Five independent Vieta claims with different sum-and-product pairs. Each pair is the roots of $t^{2} - (\\text{sum})t + (\\text{product}) = 0$.`,
  },
  {
    id: `math-4-41`,
    case_id: `MATH 4.41`,
    title: `Five separate completing-the-square and factoring claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} + 6x + 9 = -5 + 9$, the sum of all admissible roots equals $0$.`,
      `For $x^{2} - 8x + 12 = (x - 2)(x - 6)$, the equation has exactly one real solution.`,
      `For $x^{2} - 4x + 4 = 1 + 4$, the sum of all admissible roots equals $0$.`,
      `For $x^{2} + 5x + 6 = 0$, the equation has exactly one real solution.`,
      `For $x^{2} - 3x - 4 = 0$, multiplying the roots gives $-1$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Completing the square moves the constant, then adds the square of half the linear coefficient so the left side becomes a perfect square.

$$x^{2} + 6x + 5 = 0$$

$$x^{2} + 6x = -5$$

Half of the coefficient of $x$ is

$$\\frac{1}{2} \\cdot 6 = 3$$

Squaring that half gives the constant that completes the square:

$$3^{2} = 9$$

Adding $9$ to both sides:

$$x^{2} + 6x + 9 = -5 + 9$$

The left side is the expansion of $\\left(x + 3\\right)^{2}$:

$$\\left(x + 3\\right)^{2} = 4$$

That is the completed-square form in the claim, so the statement is True.`,
      `**B.** → True

Factor by finding two numbers that multiply to the constant term and add to the linear coefficient.

For $x^{2} - 8x + 12 = 0$, the numbers $-2$ and $-6$ multiply to $12$ and add to $-8$:

$$x^{2} - 8x + 12 = (x - 2)(x - 6)$$

Check by expanding:

$$(x - 2)(x - 6) = x^{2} - 8x + 12$$

The claim is that same factorisation, so the statement is True.`,
      `**C.** → True

Completing the square moves the constant, then adds the square of half the linear coefficient.

$$x^{2} - 4x - 1 = 0$$

$$x^{2} - 4x = 1$$

Half of the coefficient of $x$ is

$$\\frac{1}{2} \\cdot (-4) = -2$$

Squaring that half gives

$$(-2)^{2} = 4$$

Adding $4$ to both sides:

$$x^{2} - 4x + 4 = 1 + 4$$

The left side is $\\left(x - 2\\right)^{2}$:

$$\\left(x - 2\\right)^{2} = 5$$

That is the completed-square form in the claim, so the statement is True.`,
      `**D.** → False

For a monic quadratic $x^{2} + bx + c = 0$, Vieta's product formula says the roots multiply to the constant term $c$.

For $x^{2} + 5x + 6 = 0$, the product is $6$. Factoring confirms:

$$(x + 2)(x + 3) = 0$$

$$2 \\cdot 3 = 6$$

The claim reports $8$, which would require constant term $8$, not $6$, so the statement is False.`,
      `**E.** → False

Move everything to one side, factor, and set each factor to zero.

$$x^{2} - 3x - 4 = 0$$

$$(x - 4)(x + 1) = 0$$

The two real roots are $4$ and $-1$. One of them is negative, so they cannot both be positive. The claim fails, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 41,
    solution_overview: `Five independent completing-the-square and factoring claims on different quadratics. Vieta's product on a monic quadratic is the constant term.`,
  },
  {
    id: `math-4-42`,
    case_id: `MATH 4.42`,
    title: `Five separate frame and rectangle-area stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $24 \cdot 16 + 24 \cdot 2x + 2x \cdot 16 + 2x \cdot 2x = 768$, the sum of all admissible roots equals $4$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The picture measures $24$ cm by $16$ cm, so its area is

$$24 \\cdot 16 = 384$$

Twice that area is the outer rectangle:

$$2 \\cdot 384 = 768$$

A uniform frame of width $x$ cm adds $x$ on each side, so it adds $2x$ to each dimension:

$$(24 + 2x)(16 + 2x) = 768$$

Expanding the left side:

$$24 \\cdot 16 + 24 \\cdot 2x + 2x \\cdot 16 + 2x \\cdot 2x = 768$$

$$384 + 48x + 32x + 4x^{2} = 768$$

$$4x^{2} + 80x + 384 = 768$$

$$4x^{2} + 80x - 384 = 0$$

Divide by $4$:

$$x^{2} + 20x - 96 = 0$$

The discriminant is

$$\\Delta = 20^{2} - 4(1)(-96) = 400 + 384 = 784 = 28^{2}$$

$$x = \\frac{-20 \\pm 28}{2}$$

$$x = \\frac{8}{2} = 4$$

$$x = \\frac{-48}{2} = -24$$

A frame width cannot be negative, so $x = 4$. That is the claimed width, so the statement is True.`,
      `**B.** → True

A uniform frame of width $2$ cm adds $2$ cm on each side, so it adds $4$ cm to each dimension of the $30$ cm by $20$ cm picture:

$$30 + 2 \\cdot 2 = 34$$

$$20 + 2 \\cdot 2 = 24$$

The outer rectangle is $34$ cm by $24$ cm, so the statement is True.`,
      `**C.** → True

A $4$ cm frame around a $24$ cm by $16$ cm picture makes the outer sides

$$24 + 2 \\cdot 4 = 32$$

$$16 + 2 \\cdot 4 = 24$$

The outer area is

$$32 \\cdot 24 = 768$$

That matches the claimed $768$ cm$^{2}$, so the statement is True.`,
      `**D.** → False

The wood is the outer area minus the picture. With a $4$ cm frame the outer area is $768$ cm$^{2}$ and the picture is $384$ cm$^{2}$:

$$768 - 384 = 384$$

The claim says $500$ cm$^{2}$. That figure is not the difference of the two rectangles, so the statement is False.`,
      `**E.** → True

The wood area is the outer rectangle minus the picture:

$$768 - 384 = 384$$

That wood area equals the picture area $384$ cm$^{2}$. Twice the picture is the outer area:

$$384 + 384 = 768$$

$$768 = 2 \\cdot 384$$

So $384$ cm$^{2}$ of wood is exactly what "outer area twice the picture" required, so the statement is True.`,
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
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $(t - 5)(t - 8) = 0$, the equation has no admissible real solution.`,
      `For $(t - 3)(t - 7) = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the smaller positive integer be $n$. Then the larger is $n + 5$, and the product is $84$:

$$n(n + 5) = 84$$

$$n^{2} + 5n - 84 = 0$$

The discriminant is

$$\\Delta = 5^{2} - 4(1)(-84)$$

$$\\Delta = 25 + 336$$

$$\\Delta = 361 = 19^{2}$$

$$n = \\frac{-5 \\pm 19}{2}$$

$$n = \\frac{14}{2} = 7$$

$$n = \\frac{-24}{2} = -12$$

The positive pair is $7$ and $12$. Both exceed $6$, so the statement is True.`,
      `**B.** → True

Let the smaller consecutive integer be $n$. Then the next is $n + 1$, and the product is $56$:

$$n(n + 1) = 56$$

$$n^{2} + n - 56 = 0$$

$$(n + 8)(n - 7) = 0$$

Then $n = 7$ or $n = -8$. The positive pair is $7$ and $8$:

$$7 + 8 = 15$$

The sum is $15$, matching the claim, so the statement is True.`,
      `**C.** → True

Let the width be $w$ cm. Then the length is $w + 3$ cm, and the area is $54$ cm$^{2}$:

$$w(w + 3) = 54$$

$$w^{2} + 3w - 54 = 0$$

$$(w + 9)(w - 6) = 0$$

Then $w = 6$ or $w = -9$. A width must be positive, so $w = 6$ cm. The claim is that same width, so the statement is True.`,
      `**D.** → False

Two numbers that add to $13$ and multiply to $40$ are the roots of

$$t^{2} - 13t + 40 = 0$$

$$(t - 5)(t - 8) = 0$$

Then $t = 5$ or $t = 8$. The larger number is $8$. The claim says it exceeds $8$, but

$$8 \\not> 8$$

so the statement is False.`,
      `**E.** → False

Two prices that add to $10$ EUR and multiply to $21$ EUR are the roots of

$$t^{2} - 10t + 21 = 0$$

$$(t - 3)(t - 7) = 0$$

Then the prices are $3$ EUR and $7$ EUR. The price $3$ EUR does not exceed $4$ EUR, because

$$3 \\not> 4$$

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Five independent product-and-sum stories. Model a pair with $n(n + d) = p$ or Vieta's quadratic $t^{2} - St + P = 0$, then check the claim against the recovered roots.`,
  },
  {
    id: `math-4-44`,
    case_id: `MATH 4.44`,
    title: `Five separate rectangle-side stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A.** → False

Let the width be $w$ cm. Then the length is $2w + 1$ cm, and the area is $36$ cm$^{2}$:

$$w(2w + 1) = 36$$

$$2w^{2} + w - 36 = 0$$

$$\\Delta = 1^{2} - 4(2)(-36) = 1 + 288 = 289 = 17^{2}$$

$$w = \\frac{-1 \\pm 17}{4}$$

$$w = \\frac{16}{4} = 4$$

$$w = \\frac{-18}{4} = -\\frac{9}{2}$$

A width must be positive, so $w = 4$ cm.

The claim says $6$ cm. Substituting $w = 6$:

$$6(2 \\cdot 6 + 1) = 6 \\cdot 13 = 78 \\neq 36$$

The width that works is $4$ cm, so the statement is False.`,
      `**B.** → False

Let the width be $w$ cm. The length is $2w$ cm and the area is $48$ cm$^{2}$:

$$w \\cdot 2w = 48$$

$$2w^{2} = 48$$

$$w^{2} = 24$$

$$w = \\sqrt{24}$$

The length is $2w = 2\\sqrt{24}$, not $12$.

If the length were the claimed $12$ cm, the width would be $6$ cm because the banner is twice as long as it is wide:

$$6 \\cdot 12 = 72 \\neq 48$$

The claimed length does not produce area $48$, so the statement is False.`,
      `**C.** → False

The perimeter of a rectangle is twice the sum of its sides:

$$P = 2(4 + 9)$$

$$P = 26$$

The claim says $40$ cm. The tape measures $26$ cm, so the statement is False.`,
      `**D.** → False

The area of a $5$ cm by $11$ cm board is

$$5 \\cdot 11 = 55$$

not the claimed $36$ cm$^{2}$.

Twice the width plus $1$ is $2 \\cdot 5 + 1 = 11$, so that length relation matches the sides. The area figure $36$ does not, so the statement is False.`,
      `**E.** → True

Let the width be $w$ cm. Then the length is $w + 4$ cm and the area is $45$ cm$^{2}$:

$$w(w + 4) = 45$$

$$w^{2} + 4w - 45 = 0$$

$$(w + 9)(w - 5) = 0$$

so $w = -9$ or $w = 5$. A width must be positive, so $w = 5$ cm.

Check:

$$5 \\cdot 9 = 45$$

The width is $5$ cm, a positive integer with $5 < 6$, so the property claim holds and the statement is True.`,
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
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The height after $t$ seconds is $h = 24t - 6t^{2}$ metres. At $t = 1$:

$$h(1) = 24 \\cdot 1 - 6 \\cdot 1^{2}$$

$$h(1) = 24 - 6$$

$$h(1) = 18$$

The height is $18$ m after $1$ second, so the statement is True.`,
      `**B.** → True

The height is the quadratic $h = -3t^{2} + 18t$. The peak time is

$$t = -\\frac{b}{2a}$$

$$t = -\\frac{18}{2(-3)}$$

$$t = 3$$

At $t = 3$:

$$h(3) = 18 \\cdot 3 - 3 \\cdot 9$$

$$h(3) = 54 - 27$$

$$h(3) = 27$$

The maximum height is $27$ m, matching the claim, so the statement is True.`,
      `**C.** → True

Ground level means $h = 0$:

$$12t - 3t^{2} = 0$$

$$3t(4 - t) = 0$$

Then $t = 0$ or $t = 4$. The return after launch is at $t = 4$ seconds, matching the claim, so the statement is True.`,
      `**D.** → False

At $t = 2$:

$$h(2) = 20 \\cdot 2 - 4 \\cdot 4$$

$$h(2) = 40 - 16$$

$$h(2) = 24$$

The height is $24$ m, not $30$ m. The claim says $30$ m, so the statement is False.`,
      `**E.** → False

The peak time of $h = -2t^{2} + 16t$ is

$$t = -\\frac{16}{2(-2)}$$

$$t = 4$$

The ball peaks at $t = 4$ seconds, not $t = 5$. At the claimed time:

$$h(5) = 16 \\cdot 5 - 2 \\cdot 25$$

$$h(5) = 80 - 50$$

$$h(5) = 30$$

which is below the maximum of $32$ m at $t = 4$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Five independent quadratic motion claims. Evaluate $h(t)$ at a given time, find the vertex with $t = -b/(2a)$, or solve $h = 0$ for the return time. Each statement uses different coefficients.`,
  },
  {
    id: `math-4-46`,
    case_id: `MATH 4.46`,
    title: `Five separate Vieta sum-and-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `For $(t - 4)(t - 8) = 0$, the equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `For $(x + 1)(y + 1) = xy + x + y + 1$, the equation has exactly one admissible real solution.`,
      `For $x^{2} + y^{2} = (x + y)^{2} - 2xy$, the equation has exactly one real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Two numbers that add to $15$ and multiply to $44$ are the roots of the monic quadratic whose linear coefficient is the sum and whose constant is the product:

$$t^{2} - 15t + 44 = 0$$

$$\\Delta = 15^{2} - 4 \\cdot 44$$

$$\\Delta = 225 - 176$$

$$\\Delta = 49 = 7^{2}$$

$$t = \\frac{15 \\pm 7}{2}$$

$$t = \\frac{22}{2} = 11$$

$$t = \\frac{8}{2} = 4$$

The prices are $4$ EUR and $11$ EUR. The larger price $11$ EUR exceeds $10$ EUR, so the statement is True.`,
      `**B.** → True

Numbers that add to $12$ and multiply to $32$ are the roots of

$$t^{2} - 12t + 32 = 0$$

$$(t - 4)(t - 8) = 0$$

so the numbers are $4$ and $8$. Their difference is

$$8 - 4 = 4$$

The claimed difference is $4$, so the statement is True.`,
      `**C.** → False

The pair with sum $9$ EUR and product $14$ EUR solves $t^{2} - 9t + 14 = 0$:

$$\\Delta = 81 - 56 = 25 = 5^{2}$$

$$t = \\frac{9 \\pm 5}{2}$$

$$t = 2$$

$$t = 7$$

The amounts are $2$ EUR and $7$ EUR. The smaller is $2$ EUR, which does not exceed $5$ EUR. Both amounts cannot exceed $5$ EUR, so the statement is False.`,
      `**D.** → True

Let the two numbers be $x$ and $y$, with $x + y = 8$ and $xy = 15$. Then

$$(x + 1)(y + 1) = xy + x + y + 1$$

$$= 15 + 8 + 1$$

$$= 24$$

The claimed product of the increased values is $24$, so the statement is True.`,
      `**E.** → False

Let the two numbers be $x$ and $y$, with $x + y = 13$ and $xy = 36$. The sum of squares identity is

$$x^{2} + y^{2} = (x + y)^{2} - 2xy$$

$$x^{2} + y^{2} = 13^{2} - 2 \\cdot 36$$

$$x^{2} + y^{2} = 169 - 72$$

$$x^{2} + y^{2} = 97$$

The claimed sum of squares is $145$, not $97$. The statement is False.`,
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
      `For $2x^{2} + 14x + 49 - 169 = 0$, the sum of all admissible roots equals $-12$.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Pythagoras says the squares of the legs add to the square of the hypotenuse:

$$x^{2} + (x + 7)^{2} = 13^{2}$$

$$x^{2} + x^{2} + 14x + 49 = 169$$

$$2x^{2} + 14x + 49 - 169 = 0$$

$$2x^{2} + 14x - 120 = 0$$

Divide by $2$:

$$x^{2} + 7x - 60 = 0$$

$$(x + 12)(x - 5) = 0$$

so $x = -12$ or $x = 5$. A length must be positive, so the shorter leg is $5$ cm, which is less than $6$ cm. The statement is True.`,
      `**B.** → False

Pythagoras gives

$$c^{2} = 9^{2} + 12^{2}$$

$$c^{2} = 81 + 144$$

$$c^{2} = 225$$

$$c = 15$$

The hypotenuse is $15$ cm, not $16$ cm. The claim does not match, so the statement is False.`,
      `**C.** → True

Pythagoras gives

$$c^{2} = 8^{2} + 15^{2}$$

$$c^{2} = 64 + 225$$

$$c^{2} = 289$$

$$c = 17$$

The hypotenuse is $17$ cm, so the statement is True.`,
      `**D.** → False

The hypotenuse is

$$c^{2} = 6^{2} + 8^{2}$$

$$c^{2} = 36 + 64$$

$$c^{2} = 100$$

$$c = 10$$

The perimeter is

$$6 + 8 + 10 = 24$$

not $22$ cm. The claim does not match, so the statement is False.`,
      `**E.** → True

The area of a right triangle is half the product of the legs:

$$A = \\frac{1}{2} \\cdot 7 \\cdot 24$$

$$A = 84$$

The claimed area is $84$ cm$^{2}$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `Five independent right-triangle claims. Use Pythagoras, perimeter, or the area formula $\\frac{1}{2}ab$ on the stated side lengths.`,
  },
  {
    id: `math-4-48`,
    case_id: `MATH 4.48`,
    title: `Five separate perimeter-and-area rectangle stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $(t - 7)(t - 8) = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Perimeter $40$ cm means the sum of length and width is $20$ cm:

$$2(L + w) = 40$$

$$L + w = 20$$

The area is $96$ cm$^{2}$, so $Lw = 96$. The sides are the roots of

$$t^{2} - 20t + 96 = 0$$

$$\\Delta = 400 - 384 = 16 = 4^{2}$$

$$t = \\frac{20 \\pm 4}{2}$$

$$t = 12$$

or

$$t = 8$$

The sides are $8$ cm and $12$ cm. Check: $8 + 12 = 20$ and $8 \\cdot 12 = 96$. Those are the claimed sides, so the statement is True.`,
      `**B.** → True

Let the width be $w$ cm. Then the length is $w + 3$, and the area is $54$ cm$^{2}$:

$$w(w + 3) = 54$$

$$w^{2} + 3w - 54 = 0$$

$$(w + 9)(w - 6) = 0$$

so $w = -9$ or $w = 6$. A width is positive, so $w = 6$ cm. Check:

$$6 \\cdot 9 = 54$$

The width is $6$ cm, so the statement is True.`,
      `**C.** → True

A square of perimeter $40$ cm has four equal sides, so each side is

$$\\frac{40}{4} = 10$$

The area is

$$10^{2} = 100$$

The claimed area is $100$ cm$^{2}$, so the statement is True.`,
      `**D.** → True

Area is length times width:

$$7 \\cdot 11 = 77$$

The claimed area is $77$ cm$^{2}$, so the statement is True.`,
      `**E.** → False

Perimeter $30$ cm means the sum of length and width is $15$ cm. The claimed sides $6$ cm and $9$ cm add to $15$, but their product is

$$6 \\cdot 9 = 54 \\neq 56$$

The actual pair with sum $15$ and product $56$ solves $t^{2} - 15t + 56 = 0$:

$$(t - 7)(t - 8) = 0$$

so the sides are $7$ cm and $8$ cm, not $6$ cm and $9$ cm. The statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Five independent rectangle claims. Use $2(L + w) = P$ and $Lw = A$, or check area and perimeter directly on the stated sides.`,
  },
  {
    id: `math-4-49`,
    case_id: `MATH 4.49`,
    title: `Five separate age-product stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $s^{2} + 20s - 125 = 0$, the sum of all admissible roots equals $0$.`,
      `For $s^{2} + 12s - 160 = 0$, the equation has two distinct admissible real solutions.`,
      `The equation has no real solution.`,
      `For $(s + 15 + t) - (s + t) = 15$, the equation has exactly one admissible real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the child's present age be $s$ years. The parent is then $s + 20$, and the product of the ages is $125$:

$$s(s + 20) = 125$$

$$s^{2} + 20s - 125 = 0$$

$$(s + 25)(s - 5) = 0$$

so $s = -25$ or $s = 5$. An age must be positive, so the child is $5$ years old. Check:

$$5 \\cdot 25 = 125$$

That is the claimed age, so the statement is True.`,
      `**B.** → False

Let the child's present age be $s$ years. The parent is $s + 12$, and the product is $160$:

$$s(s + 12) = 160$$

$$s^{2} + 12s - 160 = 0$$

$$(s + 20)(s - 8) = 0$$

so $s = -20$ or $s = 8$. The child is $8$ years old, so the parent is

$$8 + 12 = 20$$

years old, not $22$. The claimed parent age does not match, so the statement is False.`,
      `**C.** → False

In $3$ years the child is

$$7 + 3 = 10$$

years old and the parent is

$$35 + 3 = 38$$

years old. Their product is then

$$10 \\cdot 38 = 380$$

not $304$. The claimed product does not match, so the statement is False.`,
      `**D.** → True

After $t$ years the ages are $s + t$ and $(s + 15) + t$. The difference is

$$(s + 15 + t) - (s + t) = 15$$

The gap stays $15$ years, so the statement is True.`,
      `**E.** → False

The present ages are $24$ and $4$:

$$\\frac{24}{4} = 6$$

so the ratio is $6 : 1$, not $5 : 1$. The claim does not match the ratio, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Five independent age-product claims. Each story uses its own age gap and product, or a separate age property such as a fixed gap or a ratio check.`,
  },
  {
    id: `math-4-50`,
    case_id: `MATH 4.50`,
    title: `Five separate ladder and Pythagoras stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Let the height on the wall be $h$ m. Then the foot is $h + 2$ m from the wall, and the ladder is the hypotenuse $10$ m. Pythagoras gives

$$h^{2} + (h + 2)^{2} = 10^{2}$$

$$h^{2} + h^{2} + 4h + 4 = 100$$

$$2h^{2} + 4h + 4 - 100 = 0$$

$$2h^{2} + 4h - 96 = 0$$

Divide by $2$:

$$h^{2} + 2h - 48 = 0$$

$$(h + 8)(h - 6) = 0$$

so $h = -8$ or $h = 6$. A height must be positive, so $h = 6$ m.

Check: the foot is $8$ m out, and $6^{2} + 8^{2} = 36 + 64 = 100$. The height is $6$ m, so the statement is True.`,
      `**B.** → False

Let the foot be $b$ m from the wall. Pythagoras with height $5$ m and hypotenuse $13$ m:

$$5^{2} + b^{2} = 13^{2}$$

$$25 + b^{2} = 169$$

$$b^{2} = 144$$

$$b = 12$$

taking the positive length. The claim says $7$ m. Substituting $b = 7$:

$$5^{2} + 7^{2} = 25 + 49 = 74 \\neq 169$$

The foot is $12$ m from the wall, so the statement is False.`,
      `**C.** → True

Let the foot be $b$ m from the wall. Pythagoras with height $6$ m and hypotenuse $10$ m:

$$6^{2} + b^{2} = 10^{2}$$

$$36 + b^{2} = 100$$

$$b^{2} = 64$$

$$b = 8$$

The foot sits $8$ m from the wall, so the statement is True.`,
      `**D.** → True

The area of a right triangle is half the product of the legs:

$$A = \\frac{1}{2} \\cdot 9 \\cdot 12$$

$$A = 54$$

The claimed area is $54$ m$^{2}$, so the statement is True.`,
      `**E.** → False

Let the height on the wall be $h$ m. Pythagoras with foot $12$ m and hypotenuse $13$ m:

$$12^{2} + h^{2} = 13^{2}$$

$$144 + h^{2} = 169$$

$$h^{2} = 25$$

$$h = 5$$

The claim says $9$ m. Substituting $h = 9$:

$$12^{2} + 9^{2} = 144 + 81 = 225 \\neq 169$$

The height is $5$ m, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Five independent ladder claims. Foot $2$ m more than height with hypotenuse $10$ m recovers height $6$ m. A $5$-$12$-$13$ ladder is a separate story.`,
  },
  {
    id: `math-4-51`,
    case_id: `MATH 4.51`,
    title: `Five separate reciprocal-sum claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} + 2 \cdot x \cdot \frac{2}{x} + \frac{4}{x^{2}} = 9$, the sum of all admissible roots equals $0$.`,
      `For $x \cdot x + x \cdot \frac{3}{x} = 4x$, the equation has exactly one real solution.`,
      `For $x^{2} - 6x + 5 = 0$, the product of the roots equals $5$.`,
      `For $x^{3} + \frac{1}{x^{3}} + 3 \cdot 1 \cdot \left(x + \frac{1}{x}\right) = 27$, the equation has no real solution.`,
      `For $x^{2} - 5x + 4 = 0$, multiplying the roots gives $7$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the number be $x \\neq 0$, with

$$x + \\frac{2}{x} = 3$$

Square both sides. The expansion is $(a + b)^{2} = a^{2} + 2ab + b^{2}$ with $a = x$ and $b = \\frac{2}{x}$, so the cross term is $4$:

$$\\left(x + \\frac{2}{x}\\right)^{2} = 3^{2}$$

$$x^{2} + 2 \\cdot x \\cdot \\frac{2}{x} + \\frac{4}{x^{2}} = 9$$

$$x^{2} + 4 + \\frac{4}{x^{2}} = 9$$

$$x^{2} + \\frac{4}{x^{2}} = 5$$

The claimed value is $5$, so the statement is True.`,
      `**B.** → True

The equation is $x + \\frac{3}{x} = 4$ with $x \\neq 0$. Multiply through by $x$ to clear the denominator:

$$x \\cdot x + x \\cdot \\frac{3}{x} = 4x$$

$$x^{2} + 3 = 4x$$

$$x^{2} - 4x + 3 = 0$$

That is the claimed quadratic, so the statement is True.`,
      `**C.** → True

Clear the denominator in $x + \\frac{5}{x} = 6$ with $x \\neq 0$:

$$x^{2} + 5 = 6x$$

$$x^{2} - 6x + 5 = 0$$

$$(x - 1)(x - 5) = 0$$

The discriminant is

$$\\Delta = 36 - 20 = 16 > 0$$

so there are two distinct real solutions. Both $x = 1$ and $x = 5$ check in the original equation, so the statement is True.`,
      `**D.** → False

Cube the identity $x + \\frac{1}{x} = 3$. The expansion $(a + b)^{3} = a^{3} + b^{3} + 3ab(a + b)$ with $ab = 1$ gives

$$\\left(x + \\frac{1}{x}\\right)^{3} = 3^{3}$$

$$x^{3} + \\frac{1}{x^{3}} + 3 \\cdot 1 \\cdot \\left(x + \\frac{1}{x}\\right) = 27$$

$$x^{3} + \\frac{1}{x^{3}} + 3 \\cdot 3 = 27$$

$$x^{3} + \\frac{1}{x^{3}} + 9 = 27$$

$$x^{3} + \\frac{1}{x^{3}} = 18$$

The claim reports $27$, which is $3^{3}$ with the $3\\left(x + \\frac{1}{x}\\right)$ term left in. The cube sum is $18$, not $27$, so the statement is False.`,
      `**E.** → False

Clear $x + \\frac{4}{x} = 5$ with $x \\neq 0$:

$$x^{2} + 4 = 5x$$

$$x^{2} - 5x + 4 = 0$$

$$(x - 1)(x - 4) = 0$$

There are two distinct real solutions, $x = 1$ and $x = 4$, not exactly one. The discriminant is

$$\\Delta = 25 - 16 = 9 > 0$$

confirming two roots, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 51,
    solution_overview: `Five independent reciprocal-sum claims. Squaring and cubing identities, clearing denominators, and reading the discriminant of the cleared quadratic decide each statement.`,
  },
  {
    id: `math-4-52`,
    case_id: `MATH 4.52`,
    title: `Five separate biquadratic claims`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{4} - 10x^{2} + 9 = 0$, the sum of all admissible roots equals $0$.`,
      `For $x^{4} - 8x^{2} + 15 = 0$, the equation has exactly one real solution.`,
      `For $x^{4} - 5x^{2} + 4 = 0$, the sum of all admissible roots equals $0$.`,
      `For $x^{4} - 3x^{2} + 2 = 0$, the equation has no admissible real solution.`,
      `For $x^{4} - 13x^{2} + 36 = 0$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The equation is $x^{4} - 10x^{2} + 9 = 0$. Substitute $u = x^{2}$, so $u \\ge 0$:

$$u^{2} - 10u + 9 = 0$$

$$(u - 9)(u - 1) = 0$$

$$u = 9$$

or

$$u = 1$$

Then $x^{2} = 9$ gives $x = \\pm 3$, and $x^{2} = 1$ gives $x = \\pm 1$. All four solutions are integers, so the statement is True.`,
      `**B.** → True

Substitute $u = x^{2}$ in $x^{4} - 8x^{2} + 15 = 0$:

$$u^{2} - 8u + 15 = 0$$

$$(u - 5)(u - 3) = 0$$

$$u = 5$$

or

$$u = 3$$

Then $x = \\pm \\sqrt{5}$ and $x = \\pm \\sqrt{3}$. These are four different real numbers, so the statement is True.`,
      `**C.** → True

For a monic degree-$4$ polynomial $x^{4} + ax^{3} + \\cdots$, Vieta's sum of roots is $-a$. Here there is no $x^{3}$ term, so $a = 0$ and the sum is $0$.

Substitute $u = x^{2}$ in $x^{4} - 5x^{2} + 4 = 0$:

$$u^{2} - 5u + 4 = 0$$

$$(u - 4)(u - 1) = 0$$

Then $x^{2} = 4$ gives $x = \\pm 2$, and $x^{2} = 1$ gives $x = \\pm 1$. Check:

$$1 + (-1) + 2 + (-2) = 0$$

The sum of all four roots is $0$, so the statement is True.`,
      `**D.** → False

Substitute $u = x^{2}$ in $x^{4} - 3x^{2} + 2 = 0$:

$$u^{2} - 3u + 2 = 0$$

$$(u - 2)(u - 1) = 0$$

$$u = 2$$

or

$$u = 1$$

Then $x^{2} = 2$ gives $x = \\pm \\sqrt{2}$, and $x^{2} = 1$ gives $x = \\pm 1$. That is four real solutions, not exactly two. The claim is incorrect, so the statement is False.`,
      `**E.** → False

Substitute $u = x^{2}$ in $x^{4} - 13x^{2} + 36 = 0$:

$$u^{2} - 13u + 36 = 0$$

$$(u - 4)(u - 9) = 0$$

Then $x^{2} = 4$ gives $x = \\pm 2$, and $x^{2} = 9$ gives $x = \\pm 3$. The roots include $-2$ and $-3$, which are negative real numbers. The claim of no negative real solutions is incorrect, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 52,
    solution_overview: `Five independent biquadratic claims. Substitute $u = x^{2}$ to reduce to a quadratic in $u$, then take square roots. A missing $x^{3}$ term makes the four-root sum zero.`,
  },
  {
    id: `math-4-53`,
    case_id: `MATH 4.53`,
    title: `Five separate long-rectangle stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Let the width be $w$ cm. Then the length is $w + 8$ cm and the area is $240$ cm$^{2}$:

$$w(w + 8) = 240$$

$$w^{2} + 8w - 240 = 0$$

$$\\Delta = 8^{2} - 4(1)(-240)$$

$$\\Delta = 64 + 960$$

$$\\Delta = 1024 = 32^{2}$$

$$w = \\frac{-8 \\pm 32}{2}$$

$$w = \\frac{24}{2} = 12$$

$$w = \\frac{-40}{2} = -20$$

A width must be positive, so $w = 12$ cm. Check: $12 \\cdot 20 = 240$. That is the claimed width, so the statement is True.`,
      `**B.** → False

Let the width be $w$ cm. Then the length is $w + 5$ cm and the area is $84$ cm$^{2}$:

$$w(w + 5) = 84$$

$$w^{2} + 5w - 84 = 0$$

$$(w + 12)(w - 7) = 0$$

A width must be positive, so $w = 7$ cm. The length is then

$$7 + 5 = 12$$

cm. The diagonal $d$ satisfies Pythagoras:

$$d^{2} = 7^{2} + 12^{2}$$

$$d^{2} = 49 + 144$$

$$d^{2} = 193$$

$$d = \\sqrt{193}$$

which is not $13$ cm. The claimed $13$ cm would be the hypotenuse of a $5$-$12$-$13$ triangle, not of $7$ by $12$, so the statement is False.`,
      `**C.** → True

The perimeter of a rectangle is twice the sum of length and width.

$$P = 2(9 + 16)$$

$$P = 2 \\cdot 25$$

$$P = 50$$

The perimeter is $50$ cm. The claim is that same figure, so the statement is True.`,
      `**D.** → True

The length is $10$ cm more than the width $6$ cm:

$$6 + 10 = 16$$

cm. The area is the product of the sides:

$$6 \\cdot 16 = 96$$

That equals the claimed area $96$ cm$^{2}$, so the statement is True.`,
      `**E.** → True

The area of a right triangle is half the product of its legs.

$$A = \\frac{1}{2} \\cdot 5 \\cdot 12$$

$$A = \\frac{60}{2}$$

$$A = 30$$

The area is $30$ cm$^{2}$. The claim is that same figure, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 53,
    solution_overview: `Five independent rectangle and Pythagoras claims. Width $w$ and length $w + k$ with given area recover the sides by factoring or the quadratic formula; perimeter, area, and diagonal follow.`,
  },
  {
    id: `math-4-54`,
    case_id: `MATH 4.54`,
    title: `Five separate together-and-alone work stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $4(t + 6) + 4t = t(t + 6)$, the sum of all admissible roots equals $0$.`,
      `For $6(t + 5) + 6t = t(t + 5)$, the equation has exactly one real solution.`,
      `For $5(t + 4) + 5t = t(t + 4)$, the sum of all admissible roots equals $2$.`,
      `The equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let the faster worker alone take $t$ hours. Then the slower worker takes $t + 6$ hours. Together they finish one job in $4$ hours, so the rates add to $\\frac{1}{4}$ of a job per hour:

$$\\frac{1}{t} + \\frac{1}{t + 6} = \\frac{1}{4}$$

The values $t = 0$ and $t = -6$ are excluded, because they zero a denominator. Clear the denominators by multiplying through by $4t(t + 6)$:

$$4(t + 6) + 4t = t(t + 6)$$

$$4t + 24 + 4t = t^{2} + 6t$$

$$8t + 24 = t^{2} + 6t$$

$$0 = t^{2} - 2t - 24$$

$$t^{2} - 2t - 24 = 0$$

$$\\Delta = 4 + 96 = 100 = 10^{2}$$

$$t = \\frac{2 \\pm 10}{2}$$

$$t = 6$$

or

$$t = -4$$

A working time must be positive, so $t = 6$ hours. That is the claimed time for the faster worker, so the statement is True.`,
      `**B.** → True

Let the faster worker alone take $t$ hours. Then the slower worker takes $t + 5$ hours, and together they finish one job in $6$ hours:

$$\\frac{1}{t} + \\frac{1}{t + 5} = \\frac{1}{6}$$

Multiply through by $6t(t + 5)$:

$$6(t + 5) + 6t = t(t + 5)$$

$$12t + 30 = t^{2} + 5t$$

$$t^{2} - 7t - 30 = 0$$

$$(t - 10)(t + 3) = 0$$

The positive root is $t = 10$, so the slower worker takes $15$ hours. Check:

$$\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{1}{6}$$

The statement is True.`,
      `**C.** → False

Let the faster pipe alone take $t$ hours. Then the slower pipe takes $t + 4$ hours, and together they fill one tank in $5$ hours:

$$\\frac{1}{t} + \\frac{1}{t + 4} = \\frac{1}{5}$$

Multiply through by $5t(t + 4)$:

$$5(t + 4) + 5t = t(t + 4)$$

$$10t + 20 = t^{2} + 4t$$

$$t^{2} - 6t - 20 = 0$$

$$t = 3 + \\sqrt{29}$$

which is a little more than $8.4$ hours, not $8$. Substituting the claimed $8$ hours makes the slower pipe take $12$ hours:

$$\\frac{1}{8} + \\frac{1}{12} = \\frac{5}{24}$$

and $\\frac{5}{24} \\neq \\frac{1}{5}$. The statement is False.`,
      `**D.** → True

Together the pipes fill $\\frac{1}{6}$ of the tank per hour. In $3$ hours they fill

$$3 \\cdot \\frac{1}{6} = \\frac{3}{6}$$

$$\\frac{3}{6} = \\frac{1}{2}$$

That is half the tank, so the statement is True.`,
      `**E.** → True

One job in $4$ hours means the combined rate is the reciprocal of the time:

$$\\frac{1}{4}$$

of a job per hour. That is the claimed rate, so the statement is True.`,
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
      `For $x^{2} - 4x + 4 = 0$, the sum of all roots equals $4$.`,
      `For $x^{2} - 4x + 3 = 0$, the equation admits two distinct real roots.`,
      `For $x^{2} - 6x + 8 = 0$, the product of the roots equals $8$.`,
      `For $x^{2} - 3x + 2 = 0$, the equation has exactly one real solution.`,
      `For $x^{2} - 7x + 12 = 0$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The equation is $x + \\frac{4}{x} = 4$ with $x \\neq 0$. Multiply through by $x$:

$$x^{2} + 4 = 4x$$

$$x^{2} - 4x + 4 = 0$$

$$(x - 2)^{2} = 0$$

The discriminant is

$$\\Delta = 16 - 16 = 0$$

so there is exactly one real solution, the repeated root $x = 2$. Check:

$$2 + \\frac{4}{2} = 4$$

The claim matches that count, so the statement is True.`,
      `**B.** → True

Clear $x + \\frac{3}{x} = 4$ with $x \\neq 0$:

$$x^{2} + 3 = 4x$$

$$x^{2} - 4x + 3 = 0$$

$$(x - 1)(x - 3) = 0$$

The two real solutions are $1$ and $3$. Both are positive and both check in the original reciprocal equation, so the statement is True.`,
      `**C.** → True

Start from $x + \\frac{8}{x} = 6$ with $x \\neq 0$. Multiply through by $x$ to clear the denominator:

$$x^{2} + 8 = 6x$$

$$x^{2} - 6x + 8 = 0$$

That is the claimed quadratic, so the statement is True.`,
      `**D.** → False

Clear $x + \\frac{2}{x} = 3$ with $x \\neq 0$:

$$x^{2} + 2 = 3x$$

$$x^{2} - 3x + 2 = 0$$

For this monic quadratic, Vieta's product of roots is the constant term $2$:

$$(x - 1)(x - 2) = 0$$

$$1 \\cdot 2 = 2$$

The claim reports $3$. Three is the sum of the roots, not the product:

$$1 + 2 = 3$$

The product is $2$, not $3$, so the statement is False.`,
      `**E.** → False

Clear $x + \\frac{12}{x} = 7$ with $x \\neq 0$:

$$x^{2} + 12 = 7x$$

$$x^{2} - 7x + 12 = 0$$

$$(x - 3)(x - 4) = 0$$

The discriminant is

$$\\Delta = 49 - 48 = 1 > 0$$

so there are two distinct real solutions, $3$ and $4$. Both check in the original equation. The claim of no real solutions is incorrect, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 55,
    solution_overview: `Five independent reciprocal-equation claims. Clearing produces a quadratic; the discriminant and Vieta's formulas decide root count, sign, sum, and product.`,
  },
  {
    id: `math-4-56`,
    case_id: `MATH 4.56`,
    title: `Five separate hard quadratics from different stories`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{4} - 13x^{2} + 36 = 0$, the sum of all admissible roots equals $0$.`,
      `For $2x^{2} - 3x - 2 = 0$, the equation admits two distinct real roots.`,
      `For $x^{2} + x + 1 = \left(x + \frac{1}{2}\right)^{2} + \frac{3}{4}$, exactly one admissible root satisfies the equation.`,
      `For $2x^{2} - 3x - 2 = 0$, the equation has exactly one real solution.`,
      `For $2x^{2} - 3x - 2 = 0$, the larger root exceeds the smaller by $4.123105625617661$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The equation is $x^{4} - 13x^{2} + 36 = 0$. Substitute $u = x^{2}$:

$$u^{2} - 13u + 36 = 0$$

$$(u - 4)(u - 9) = 0$$

$$u = 4$$

or

$$u = 9$$

Then $x^{2} = 4$ gives $x = \\pm 2$, and $x^{2} = 9$ gives $x = \\pm 3$. All four solutions are integers, so the statement is True.`,
      `**B.** → True

Expand and bring $8$ to the left:

$$(x - 3)(x - 5) = 8$$

$$x^{2} - 8x + 15 = 8$$

$$x^{2} - 8x + 7 = 0$$

$$(x - 1)(x - 7) = 0$$

so $x = 1$ or $x = 7$. Both roots are positive integers and they are distinct, so the statement is True.`,
      `**C.** → False

The discriminant of $x^{2} + x + 1$ is

$$\\Delta = 1^{2} - 4(1)(1)$$

$$\\Delta = 1 - 4$$

$$\\Delta = -3$$

Because $\\Delta < 0$, there are no real roots. Completing the square gives the same conclusion:

$$x^{2} + x + 1 = \\left(x + \\frac{1}{2}\\right)^{2} + \\frac{3}{4}$$

and that quantity is positive for every real $x$. Two different real solutions do not exist, so the statement is False.`,
      `**D.** → False

The pair with sum $9$ and product $14$ solves $t^{2} - 9t + 14 = 0$:

$$(t - 2)(t - 7) = 0$$

so the numbers are $2$ and $7$. Both are not greater than $5$, because $2 \\le 5$. The claim that both exceed $5$ is incorrect, so the statement is False.`,
      `**E.** → True

The discriminant of $2x^{2} - 3x - 2$ is

$$\\Delta = (-3)^{2} - 4(2)(-2)$$

$$\\Delta = 9 + 16$$

$$\\Delta = 25$$

Because $\\Delta = 25 > 0$, there are two distinct real roots. The quadratic formula gives

$$x = \\frac{3 \\pm 5}{4}$$

$$x = \\frac{8}{4} = 2$$

$$x = \\frac{-2}{4} = -\\frac{1}{2}$$

Two distinct real roots, so the statement is True.`,
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
      `For $\frac{3}{x} = \frac{1}{4}$, the sum of all admissible roots equals $12$.`,
      `For $\frac{3}{x} = \frac{1}{4}$, the equation has exactly one real solution.`,
      `For $\frac{5}{x} = 1$, the sum of all admissible roots equals $2$.`,
      `For $\frac{4}{x + 1} = \frac{2}{3}$, the equation has exactly one admissible real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Three litres split into equal shares that are each one-fourth of the jerrycan means

$$\\frac{3}{x} = \\frac{1}{4}$$

where $x$ litres is the capacity. First exclude the hole $x = 0$, which zeros the denominator. Then clear denominators by multiplying through by $4x$:

$$3 \\cdot 4 = 1 \\cdot x$$

$$x = 12$$

Check: $\\frac{3}{12} = \\frac{1}{4}$. The jerrycan holds $12$ litres, so the statement is True.`,
      `**B.** → True

The equation is

$$\\frac{3}{x} = \\frac{1}{4}$$

First exclude the hole $x = 0$, which zeros the denominator. On the remaining domain, cross-multiply:

$$3 \\cdot 4 = 1 \\cdot x$$

$$12 = x$$

The unique real solution is $x = 12$, which is divisible by $6$. The statement is True.`,
      `**C.** → False

Five litres filling the can in shares that each equal the whole can means

$$\\frac{5}{x} = 1$$

Exclude $x = 0$, then multiply through by $x$:

$$5 = x$$

The can holds $5$ litres, not $3$. Substituting the claimed $x = 3$:

$$\\frac{5}{3} \\neq 1$$

so the statement is False.`,
      `**D.** → True

First exclude the hole $x = -1$, which zeros the denominator $x + 1$. Then cross-multiply:

$$\\frac{4}{x + 1} = \\frac{2}{3}$$

$$3 \\cdot 4 = 2(x + 1)$$

$$12 = 2x + 2$$

$$10 = 2x$$

$$x = 5$$

The value $x = 5$ is not the hole $-1$. Check:

$$\\frac{4}{5 + 1} = \\frac{4}{6} = \\frac{2}{3}$$

The unique real solution is $x = 5$, and it is positive, so the statement is True.`,
      `**E.** → False

A negative capacity $x = -12$ is not the hole $x = 0$, so the expression is defined, but

$$\\frac{3}{-12} = -\\frac{1}{4}$$

and $-\\frac{1}{4} \\neq \\frac{1}{4}$. The two sides of $\\frac{3}{x} = \\frac{1}{4}$ do not match, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 57,
    solution_overview: `Five independent rational claims. Cross-multiply after excluding values that zero a denominator. Each statement uses a different proportion or capacity story.`,
  },
  {
    id: `math-4-58`,
    case_id: `MATH 4.58`,
    title: `Five separate rational proportions`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{x}{x + 3} = \frac{2}{5}$, the sum of all admissible roots equals $2$.`,
      `For $\frac{x}{x + 1} = \frac{3}{4}$, the equation has exactly one real solution.`,
      `For $\frac{x + 1}{x + 3} = \frac{1}{2}$, the product of all admissible roots equals $4$.`,
      `For $\dfrac{x}{x - 2} = 1$, the equation has no admissible real solution.`,
      `For $\frac{2x}{x + 5} = -\frac{4}{3}$, the sum of all admissible roots equals $-2$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The left denominator vanishes at $x = -3$, so first exclude that hole. Then clear denominators by multiplying through by $5(x + 3)$:

$$\\frac{x}{x + 3} = \\frac{2}{5}$$

$$5x = 2(x + 3)$$

$$5x = 2x + 6$$

$$3x = 6$$

$$x = 2$$

The value $x = 2$ is not the hole $-3$. Check:

$$\\frac{2}{2 + 3} = \\frac{2}{5}$$

The solution is the integer $2$, so the statement is True.`,
      `**B.** → True

First exclude the hole $x = -1$ in

$$\\frac{x}{x + 1} = \\frac{3}{4}$$

Clear denominators:

$$4x = 3(x + 1)$$

$$4x = 3x + 3$$

$$x = 3$$

The recovered solution is $x = 3$, which is positive. The statement is True.`,
      `**C.** → False

First exclude the hole $x = -3$ in

$$\\frac{x + 1}{x + 3} = \\frac{1}{2}$$

Clear denominators:

$$2(x + 1) = 1 \\cdot (x + 3)$$

$$2x + 2 = x + 3$$

$$x = 1$$

The recovered solution is $1$, which is not strictly greater than $5$. The statement is False.`,
      `**D.** → False

The equation $\\dfrac{x}{x - 2} = 1$ requires $x - 2 \\neq 0$, so the value where $x - 2 = 0$ makes the original equation undefined. Clearing denominators can introduce that excluded value as an apparent solution, but it is not a genuine root. The statement is False.`,
      `**E.** → True

First exclude the hole $x = -5$ in

$$\\frac{2x}{x + 5} = -\\frac{4}{3}$$

Clear denominators:

$$3 \\cdot 2x = -4(x + 5)$$

$$6x = -4x - 20$$

$$10x = -20$$

$$x = -2$$

The value $x = -2$ is not the hole $-5$, and it is negative. Check:

$$\\frac{2(-2)}{-2 + 5} = \\frac{-4}{3} = -\\frac{4}{3}$$

The statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 58,
    solution_overview: `Five independent rational proportions. Exclude holes, cross-multiply, then check whether the recovered value lies in the allowed domain and matches the claimed property.`,
  },
  {
    id: `math-4-59`,
    case_id: `MATH 4.59`,
    title: `Five separate rational hole and no-solution equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{2}{x - 3} = \frac{8}{x - 3}$, the equation has no real solution.`,
      `For $\dfrac{5}{x + 2} = \dfrac{5}{x + 2}$, the equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `For $\frac{1}{x} + \frac{1}{x} = \frac{3}{x}$, the equation has no real solution.`,
      `For $\frac{4}{x} = \frac{1}{3}$, the sum of all admissible roots equals $14$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The claim is

$$\\frac{2}{x - 3} = \\frac{8}{x - 3}$$

First exclude the hole $x = 3$, which zeros the denominator. For every other $x$, the common nonzero denominator may be cleared:

$$2 = 8$$

which is never true. At the excluded hole both sides are undefined, so that value is not a solution either. No real number works, so the statement is True.`,
      `**B.** → False

For the equation $\\dfrac{5}{x + 2} = \\dfrac{5}{x + 2}$ to be defined, require $x + 2 \\neq 0$. On that allowed domain the two sides are identical, so every allowed real $x$ satisfies the equation. There are infinitely many solutions, not exactly one. The statement is False.`,
      `**C.** → True

A fraction $\\dfrac{N}{D}$ is zero only when $N = 0$ and $D \\neq 0$. Here $N = 7 \\neq 0$, so the left side can never equal $0$ on any value where the denominator is allowed to be nonzero. The equation has no real solution, so the statement is True.`,
      `**D.** → True

First exclude the hole $x = 0$. On the remaining domain,

$$\\frac{1}{x} + \\frac{1}{x} = \\frac{3}{x}$$

becomes

$$\\frac{2}{x} = \\frac{3}{x}$$

Clearing the common denominator gives

$$2 = 3$$

which is never true. No allowed real $x$ works, so the statement is True.`,
      `**E.** → False

Four litres split into equal shares that are each one-third of the tank means

$$\\frac{4}{x} = \\frac{1}{3}$$

where $x$ litres is the capacity. First exclude the hole $x = 0$, then clear denominators by multiplying through by $3x$:

$$4 \\cdot 3 = 1 \\cdot x$$

$$x = 12$$

Check: $\\frac{4}{12} = \\frac{1}{3}$. The tank holds $12$ litres, not the claimed $8$ litres, so the statement is False.`,
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
      `A square with side $4$ m has area $16$ m$^{2}$.`,
      `For $\sqrt{x + 3} = 4$, the equation has exactly one real solution.`,
      `A square of area $13$ m$^{2}$ has side length greater than $3$ m.`,
      `For $\sqrt{x + 7} = 5$, the equation has exactly one admissible real solution.`,
      `For $\sqrt{x + 5} = 4$, the sum of all admissible roots equals $14$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A square of side $4$ m has area equal to the side times itself:

$$4^{2} = 16$$

The new area is $16$ m$^{2}$, so the statement is True.`,
      `**B.** → True

The equation is $\\sqrt{x + 3} = 4$. The principal square root is defined only for a nonnegative inside, so first require

$$x + 3 \\ge 0$$

$$x \\ge -3$$

The right-hand side $4$ is already nonnegative, so squaring is valid. Square both sides:

$$x + 3 = 4^{2}$$

$$x + 3 = 16$$

$$x = 13$$

The value $13$ lies in the domain $x \\ge -3$. Check, using that the principal square root is never negative:

$$\\sqrt{16} = 4$$

The solution is $x = 13$, so the statement is True.`,
      `**C.** → True

The area of a square is the side squared. If the area is $13$ m$^{2}$ and the side $s$ is a length, then $s > 0$ and

$$s^{2} = 13$$

$$s = \\sqrt{13}$$

because the principal square root is the nonnegative one. The side is $\\sqrt{13}$ m, so the statement is True.`,
      `**D.** → True

The equation is $\\sqrt{x + 7} = 5$. Require $x + 7 \\ge 0$, so $x \\ge -7$. Both sides are nonnegative ($5 \\ge 0$, and a principal square root is never negative), so squaring is valid:

$$x + 7 = 5^{2}$$

$$x + 7 = 25$$

$$x = 18$$

The value $18$ lies in the domain. Check: $\\sqrt{25} = 5$. The length is $18$ m, so the statement is True.`,
      `**E.** → False

The equation is $\\sqrt{x + 5} = 4$. Require $x + 5 \\ge 0$, so $x \\ge -5$. Both sides are nonnegative, so squaring is valid:

$$x + 5 = 4^{2}$$

$$x + 5 = 16$$

$$x = 11$$

The value $11$ lies in the domain. Check:

$$\\sqrt{16} = 4$$

The unique solution is $x = 11$, not $21$. Substituting the claimed value:

$$\\sqrt{21 + 5} = \\sqrt{26} \\neq 4$$

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 60,
    solution_overview: `Five independent radical claims. $\\sqrt{x + 3} = 4$ recovers $x = 13$. A second square $\\sqrt{x + 7} = 5$ recovers $x = 18$.`,
  },
  {
    id: `math-4-61`,
    case_id: `MATH 4.61`,
    title: `Five independent absolute-value distance equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\lvert x - 7 \rvert = 4$, the two roots sum to $14$.`,
      `For $\lvert x + 2 \rvert = \lvert 5 \rvert$, the equation has no real solution.`,
      `For $\lvert 2x - 6 \rvert = \lvert 10 \rvert$, the product of the roots equals $-16$.`,
      `For $\lvert x - 1 \rvert = -3$, the equation has no real solution.`,
      `For $\lvert 3x + 1 \rvert = \lvert 7 \rvert$, the sum of all admissible roots equals $5$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Distance on the number line is the absolute value. A positive right-hand side splits into two linear cases:

$$\\lvert x - 7 \\rvert = 4$$

First case:

$$x - 7 = 4$$

$$x = 11$$

Second case:

$$x - 7 = -4$$

$$x = 3$$

The recovered points are $11$ and $3$, four units from $7$ on either side. That is exactly two real solutions, so the statement is True.`,
      `**B.** → False

The equation $\\lvert x + 2 \\rvert = 5$ has a positive right-hand side, so it splits into two cases:

$$x + 2 = 5$$

$$x = 3$$

and

$$x + 2 = -5$$

$$x = -7$$

The recovered values are $3$ and $-7$. Only $3$ is positive, but the equation has two real solutions, not a unique one. The statement is False.`,
      `**C.** → True

The equation $\\lvert 2x - 6 \\rvert = 10$ splits into two cases:

$$2x - 6 = 10$$

$$2x = 16$$

$$x = 8$$

and

$$2x - 6 = -10$$

$$2x = -4$$

$$x = -2$$

The recovered values are $8$ and $-2$. The value $-2$ is a negative integer solution, so the statement is True.`,
      `**D.** → True

By definition $\\lvert x - 1 \\rvert \\ge 0$ for every real $x$. The equation

$$\\lvert x - 1 \\rvert = -3$$

asks an absolute value to equal a negative number, which never happens. There is no real solution, so the statement is True.`,
      `**E.** → False

The equation $\\lvert 3x + 1 \\rvert = 7$ has a positive right-hand side, so it splits into two cases:

$$3x + 1 = 7$$

$$3x = 6$$

$$x = 2$$

and

$$3x + 1 = -7$$

$$3x = -8$$

$$x = -\\frac{8}{3}$$

The recovered values are $2$ and $-\\frac{8}{3}$, so there are two real solutions, not exactly one. The statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 61,
    solution_overview: `Five independent absolute-value distance equations. For $\\lvert x - a \\rvert = b$ with $b > 0$ there are two points. A negative right-hand side is impossible.`,
  },
  {
    id: `math-4-62`,
    case_id: `MATH 4.62`,
    title: `Five separate packing and reciprocal stories`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{5}{x - 1} = 1$, the sum of all admissible roots equals $6$.`,
      `For $\frac{4}{x - 3} = 1$, the equation has exactly one real solution.`,
      `For $\frac{5}{x - 1} = 1$, the sum of all admissible roots equals $0$.`,
      `For $\frac{5}{x - 1} = 1$, the equation has exactly one admissible real solution.`,
      `For $\frac{5}{x - 1} = 1$, the sum of all admissible roots equals $0$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Five kilograms packed into bags of one kilogram less than $x$ kilograms fill one such bag-count:

$$\\frac{5}{x - 1} = 1$$

The left side is undefined at the hole $x = 1$, so that value is never a root. For $x \\neq 1$ multiply through by $x - 1$:

$$5 = x - 1$$

$$x = 6$$

The recovered bag size is $6$ kg, and $6 \\neq 1$, so the hole is not this value. Substitute back:

$$\\frac{5}{6 - 1} = 1$$

That is the claimed number of kilograms, so the statement is True.`,
      `**B.** → True

Solve $\\frac{4}{x - 3} = 1$ on its allowed domain (excluding the hole where $x - 3 = 0$):

$$4 = x - 3$$

$$x = 7$$

So the unique real solution is $x = 7$, and that solution satisfies $7 > 3$.

Therefore the statement is True.`,
      `**C.** → True

If the bags are $5$ kg each, the same packing ratio is

$$\\frac{5}{5} = 1$$

One bag-count of that size is filled. That is the claimed arithmetic, so the statement is True.`,
      `**D.** → True

Eight litres emptied at $2$ litres per hour means

$$\\frac{8}{t} = 2$$

The time $t$ is not allowed to be $0$. Multiply through by $t$:

$$8 = 2t$$

$$t = 4$$

The recovered time is $4$ hours. Substitute back:

$$\\frac{8}{4} = 2$$

The claim reports $t = 4$, so the statement is True.`,
      `**E.** → True

For $\\frac{5}{x - 1} = 1$ the hole $x = 1$ is excluded first. On the remaining domain, multiply through by the nonzero factor $x - 1$:

$$5 = x - 1$$

That is the cleared equation named in the claim, and it is valid precisely because $x \\neq 1$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 62,
    solution_overview: `Five independent rational claims. $\\frac{5}{x - 1} = 1$ recovers $x = 6$. A tank $\\frac{8}{t} = 2$ recovers $t = 4$.`,
  },
  {
    id: `math-4-63`,
    case_id: `MATH 4.63`,
    title: `Five independent radical equations from square roots`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 7} = 5$, the sum of all admissible roots equals $18$.`,
      `For $\sqrt{x + 7} = 5$, the equation has exactly one real solution.`,
      `For $\sqrt{x + 12} = 8$, the product of all admissible roots equals $55$.`,
      `For $\sqrt{x + 7} = 5$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 7} = 5$, the sum of all admissible roots equals $20$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The right-hand side of $\\sqrt{x + 7} = 5$ is nonnegative, so squaring is valid. Require $x + 7 \\ge 0$, then square both sides:

$$x + 7 = 25$$

$$x = 18$$

The recovered value is $18$, which is an even integer. Substitute back into the original:

$$\\sqrt{18 + 7} = \\sqrt{25} = 5$$

The candidate survives, so the statement is True.`,
      `**B.** → True

The right-hand side of $\\sqrt{3x - 2} = 4$ is nonnegative, so squaring is valid. Require $3x - 2 \\ge 0$, then square:

$$3x - 2 = 16$$

$$3x = 18$$

$$x = 6$$

The recovered value is $6$, an integer. Substitute back:

$$\\sqrt{3 \\cdot 6 - 2} = \\sqrt{16} = 4$$

The candidate survives, so the statement is True.`,
      `**C.** → False

The right-hand side of $\\sqrt{x + 12} = 8$ is nonnegative, so squaring is valid:

$$x + 12 = 64$$

$$x = 52$$

The recovered value is $52$, which is an even integer, not an odd integer. The claim about parity is wrong, so the statement is False.`,
      `**D.** → False

The right-hand side of $\\sqrt{5x + 1} = 6$ is nonnegative, so squaring is valid:

$$5x + 1 = 36$$

$$5x = 35$$

$$x = 7$$

The recovered value is $7$, a positive integer. There is no negative real solution, so the statement is False.`,
      `**E.** → True

The right-hand side of $\\sqrt{2x + 9} = 7$ is nonnegative, so squaring is valid:

$$2x + 9 = 49$$

$$2x = 40$$

$$x = 20$$

The recovered value is $20$, which is divisible by $5$. Substitute back:

$$\\sqrt{2 \\cdot 20 + 9} = \\sqrt{49} = 7$$

The candidate survives, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 63,
    solution_overview: `Five independent radical equations. $\\sqrt{x + 7} = 5$ recovers $x = 18$. $\\sqrt{3x - 2} = 4$ recovers $x = 6$. A principal square root never yields a negative solution.`,
  },
  {
    id: `math-4-64`,
    case_id: `MATH 4.64`,
    title: `Five independent square-root equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 3} = 6$, the sum of all admissible roots equals $11$.`,
      `For $\sqrt{x + 3} = 6$, the equation has exactly one real solution.`,
      `For $\sqrt{x + 3} = 6$, the sum of all admissible roots equals $2$.`,
      `For $\sqrt{x + 20} = 9$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 3} = 6$, the sum of all admissible roots equals $4$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The right-hand side of $\\sqrt{4x + 5} = 7$ is nonnegative, so squaring is valid:

$$4x + 5 = 49$$

$$4x = 44$$

$$x = 11$$

The recovered value is $11$, an odd integer. Substitute back:

$$\\sqrt{4 \\cdot 11 + 5} = \\sqrt{49} = 7$$

The candidate survives, so the statement is True.`,
      `**B.** → True

The right-hand side of $\\sqrt{x + 3} = 6$ is nonnegative, so squaring is valid:

$$x + 3 = 36$$

$$x = 33$$

The recovered value is $33$, which is greater than $30$. Substitute back:

$$\\sqrt{33 + 3} = \\sqrt{36} = 6$$

The candidate survives, so the statement is True.`,
      `**C.** → False

The right-hand side of $\\sqrt{9x - 5} = 10$ is nonnegative, so squaring is valid:

$$9x - 5 = 100$$

$$9x = 105$$

$$x = \\frac{35}{3}$$

The recovered value is $\\frac{35}{3}$, which is not an integer and therefore not an even integer. The statement is False.`,
      `**D.** → False

The right-hand side of $\\sqrt{x + 20} = 9$ is nonnegative, so squaring is valid:

$$x + 20 = 81$$

$$x = 61$$

The recovered value is $61$, a single real number. A principal square root equation of this form has at most one real solution, not exactly two, so the statement is False.`,
      `**E.** → True

The right-hand side of $\\sqrt{6x + 1} = 5$ is nonnegative, so squaring is valid:

$$6x + 1 = 25$$

$$6x = 24$$

$$x = 4$$

The recovered value is $4$, which is a multiple of $4$. Substitute back:

$$\\sqrt{6 \\cdot 4 + 1} = \\sqrt{25} = 5$$

The candidate survives, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 64,
    solution_overview: `Five independent square-root equations. $\\sqrt{4x + 5} = 7$ recovers $x = 11$. $\\sqrt{x + 3} = 6$ recovers $x = 33$. $\\sqrt{6x + 1} = 5$ recovers $x = 4$.`,
  },
  {
    id: `math-4-65`,
    case_id: `MATH 4.65`,
    title: `Five separate absolute-value readings`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\lvert 2x - 4 \rvert = 6$, the two roots sum to $4$.`,
      `For $\lvert 2x - 4 \rvert = 6$, the equation has no real solution.`,
      `For $\lvert 3x - 6 \rvert = \lvert 9 \rvert$, the larger root exceeds the smaller by $8$.`,
      `For $\lvert 2x - 4 \rvert = 6$, the equation has no admissible real solution.`,
      `For $\lvert 2x - 4 \rvert = 6$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The absolute error from twice the reading to $4$ is $6$:

$$\\lvert 2x - 4 \\rvert = 6$$

A positive right-hand side splits into two linear cases.

First case:

$$2x - 4 = 6$$

$$2x = 10$$

$$x = 5$$

Second case:

$$2x - 4 = -6$$

$$2x = -2$$

$$x = -1$$

The recovered readings are $5$ and $-1$. Substitute each back:

$$\\lvert 2 \\cdot 5 - 4 \\rvert = 6$$

$$\\lvert 2 \\cdot (-1) - 4 \\rvert = 6$$

Both claimed values work, so the statement is True.`,
      `**B.** → False

Five units from $3$ means $\\lvert x - 3 \\rvert = 5$. Split into two cases:

$$x - 3 = 5$$

$$x = 8$$

and

$$x - 3 = -5$$

$$x = -2$$

The recovered numbers are $8$ and $-2$. Only $8$ is positive.

The claim says both numbers are positive, so the statement is False.`,
      `**C.** → False

The equation $\\lvert 3x - 6 \\rvert = 9$ has a positive right-hand side, so it splits into two cases, not one.

First case:

$$3x - 6 = 9$$

$$3x = 15$$

$$x = 5$$

Second case:

$$3x - 6 = -9$$

$$3x = -3$$

$$x = -1$$

The inside can equal $9$ or $-9$. The claim keeps only the first case, so the statement is False.`,
      `**D.** → False

Plug the claimed reading $x = 2$ into $\\lvert 2x - 4 \\rvert = 6$:

$$\\lvert 2 \\cdot 2 - 4 \\rvert = \\lvert 0 \\rvert = 0$$

and $0 \\neq 6$. The recovered readings are $5$ and $-1$, not $2$, so the statement is False.`,
      `**E.** → False

The original error equation sets that distance equal to $6$:

$$\\lvert 2x - 4 \\rvert = 6$$

If the distance were $4$ instead, the two cases would be $2x - 4 = \\pm 4$, recovering $x = 4$ or $x = 0$, not the pair $5$ and $-1$.

The recorded distance is $6$, not $4$, so the statement is False.`,
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
      `For $\frac{x}{x - 1} = 3$, the sum of all admissible roots equals $0$.`,
      `The equation has exactly one real solution.`,
      `For $\frac{x}{x - 4} = 2$, the product of all admissible roots equals $8$.`,
      `For $\frac{2}{x} = \frac{3}{x + 3}$, the equation has exactly one admissible real solution.`,
      `For $\frac{x + 3}{x - 3} = 2$, the sum of all admissible roots equals $9$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Cups of flour $x$, divided by one cup less, equal three:

$$\\frac{x}{x - 1} = 3$$

The hole $x = 1$ zeros the denominator, so it is never a root. For $x \\neq 1$ multiply through by $x - 1$:

$$x = 3(x - 1)$$

$$x = 3x - 3$$

$$2x = 3$$

$$x = \\frac{3}{2}$$

The recovered amount is $\\frac{3}{2}$ cups, and $\\frac{3}{2} \\neq 1$. Substitute back:

$$\\frac{\\frac{3}{2}}{\\frac{3}{2} - 1} = \\frac{\\frac{3}{2}}{\\frac{1}{2}} = 3$$

The hole is not this value, so the statement is True.`,
      `**B.** → True

A rational equation is undefined where a denominator is zero, and those holes are never roots. Here both sides share the denominator $x - 2$.

If $x = 2$, both sides are undefined.

If $x \\neq 2$, the common nonzero denominator may be cancelled, and the claim reduces to

$$1 = 3$$

which is never true. No real $x$ remains, so the statement is True.`,
      `**C.** → True

Flour $x$ cups, divided by four cups less, equals two:

$$\\frac{x}{x - 4} = 2$$

The hole $x = 4$ is never a root. For $x \\neq 4$ multiply through by $x - 4$:

$$x = 2(x - 4)$$

$$x = 2x - 8$$

$$x = 8$$

The recovered amount is $8$ cups, and $8 \\neq 4$. Substitute back:

$$\\frac{8}{8 - 4} = 2$$

At $4$ cups the original ratio is undefined, so the statement is True.`,
      `**D.** → True

Twice a volume over the volume equals three over three more than the volume:

$$\\frac{2}{x} = \\frac{3}{x + 3}$$

The holes $x = 0$ and $x = -3$ are never roots. On the remaining domain, cross-multiply:

$$2(x + 3) = 3x$$

$$2x + 6 = 3x$$

$$x = 6$$

The recovered volume is $6$ litres, which is neither hole. Both sides of the original then equal $\\frac{1}{3}$:

$$\\frac{2}{6} = \\frac{1}{3}$$

$$\\frac{3}{6 + 3} = \\frac{1}{3}$$

That matches the claim, so the statement is True.`,
      `**E.** → True

Three more than a number, over three less, equals $2$:

$$\\frac{x + 3}{x - 3} = 2$$

The hole $x = 3$ is never a root. For $x \\neq 3$ multiply through by $x - 3$:

$$x + 3 = 2(x - 3)$$

$$x + 3 = 2x - 6$$

$$x = 9$$

The recovered number is $9$, and $9 \\neq 3$. Substitute back:

$$\\frac{9 + 3}{9 - 3} = 2$$

At $x = 3$ the original is undefined, so the statement is True.`,
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
      `For $\sqrt{x + 5} + \sqrt{x - 3} = 4$, the sum of all admissible roots equals $4$.`,
      `For $4x + 5 = 49$, the equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `For $\sqrt{x + 3} = 4$, the equation has no admissible real solution.`,
      `The equation has exactly one real solution.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The two sides add to $4$ m:

$$\\sqrt{x + 5} + \\sqrt{x - 3} = 4$$

The insides force $x \\ge 3$. Isolate one root, requiring the other side to stay nonnegative because a principal square root is never negative:

$$\\sqrt{x + 5} = 4 - \\sqrt{x - 3}$$

$$4 - \\sqrt{x - 3} \\ge 0$$

so $x \\le 19$. Square both sides:

$$x + 5 = 16 - 8\\sqrt{x - 3} + (x - 3)$$

$$x + 5 = x + 13 - 8\\sqrt{x - 3}$$

$$8\\sqrt{x - 3} = 8$$

$$\\sqrt{x - 3} = 1$$

$$x - 3 = 1$$

$$x = 4$$

The candidate $x = 4$ lies in $[3, 19]$. Substitute back into the original:

$$\\sqrt{4 + 5} + \\sqrt{4 - 3} = 3 + 1 = 4$$

The recovered larger area is $4$ m$^{2}$, so the statement is True.`,
      `**B.** → True

The surveyor’s equation is

$$\\sqrt{4x + 5} = 7$$

The right-hand side $7$ is nonnegative, so squaring is valid:

$$4x + 5 = 49$$

$$4x = 44$$

$$x = 11$$

The recovered value is $11$. Substitute back:

$$\\sqrt{4 \\cdot 11 + 5} = \\sqrt{49} = 7$$

The candidate survives, so the statement is True.`,
      `**C.** → False

Isolate-and-square on the original sum recovered $x = 4$, not $x = 8$. Plug the claimed larger area $8$ m$^{2}$:

$$\\sqrt{8 + 5} + \\sqrt{8 - 3} = \\sqrt{13} + \\sqrt{5}$$

Now $\\sqrt{13} > \\sqrt{9} = 3$ and $\\sqrt{5} > \\sqrt{4} = 2$, so the sum is greater than $5$, hence not $4$.

The recovered area is $4$ m$^{2}$, so the statement is False.`,
      `**D.** → False

The right-hand side of $\\sqrt{x + 3} = 4$ is nonnegative, so squaring is valid:

$$x + 3 = 16$$

$$x = 13$$

The recovered value is $13$, and $13$ is not an even integer, so the statement is False.`,
      `**E.** → True

The isolate-and-square candidate $x = 4$ produces sides $3$ m and $1$ m. Substitute those into the original sum:

$$\\sqrt{9} + \\sqrt{1} = 3 + 1 = 4$$

Both roots are defined, and the candidate survives, so the statement is True.`,
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
      `For $\lvert x - 4 \rvert = \lvert 6 \rvert$, the two roots sum to $8$.`,
      `For $\lvert x - 50 \rvert = 3$, the equation admits two distinct real roots.`,
      `For $\lvert x - a \rvert = b$, the product of all admissible roots equals $11$.`,
      `For $\lvert 3x - 6 \rvert = 9$, the equation has two distinct real solutions.`,
      `For $\lvert x - a \rvert = b$, the equation has no admissible real solution.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

A stored temperature $6^{\\circ}\\mathrm{C}$ from $4^{\\circ}\\mathrm{C}$ means

$$\\lvert x - 4 \\rvert = 6$$

A positive right-hand side splits into two cases.

First case:

$$x - 4 = 6$$

$$x = 10$$

Second case:

$$x - 4 = -6$$

$$x = -2$$

The recovered readings are $10^{\\circ}\\mathrm{C}$ and $-2^{\\circ}\\mathrm{C}$. Ten degrees is one of those two, so the statement is True.`,
      `**B.** → True

A length $3$ mm off a $50$ mm specification means

$$\\lvert x - 50 \\rvert = 3$$

Split into two cases:

$$x - 50 = 3$$

$$x = 53$$

and

$$x - 50 = -3$$

$$x = 47$$

The recovered boundary lengths are $53$ mm and $47$ mm. That is the claimed pair, so the statement is True.`,
      `**C.** → False

Equal absolute values split into two cases, $2x - 5 = x + 4$ and $2x - 5 = -(x + 4)$, not one.

First case:

$$2x - 5 = x + 4$$

$$x = 9$$

Second case:

$$2x - 5 = -x - 4$$

$$3x = 1$$

$$x = \\frac{1}{3}$$

The recovered values are $9$ and $\\frac{1}{3}$. Substitute each back:

$$\\lvert 2 \\cdot 9 - 5 \\rvert = \\lvert 9 + 4 \\rvert$$

$$\\left\\lvert 2 \\cdot \\frac{1}{3} - 5 \\right\\rvert = \\left\\lvert \\frac{1}{3} + 4 \\right\\rvert$$

Two distinct real solutions, not one, so the statement is False.`,
      `**D.** → True

A gauge error of $9$ around three times a value minus $6$ is

$$\\lvert 3x - 6 \\rvert = 9$$

Split into two cases.

First case:

$$3x - 6 = 9$$

$$3x = 15$$

$$x = 5$$

Second case:

$$3x - 6 = -9$$

$$3x = -3$$

$$x = -1$$

The recovered values are $5$ and $-1$. Substitute each back:

$$\\lvert 3 \\cdot 5 - 6 \\rvert = 9$$

$$\\lvert 3 \\cdot (-1) - 6 \\rvert = 9$$

Both claimed numbers check, so the statement is True.`,
      `**E.** → True

By definition $\\lvert x \\rvert \\ge 0$ for every real $x$. The equation

$$\\lvert x \\rvert = -4$$

asks an absolute value to equal a negative number. There is no real solution, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 68,
    solution_overview: `Five independent absolute-value claims. For $\\lvert x - a \\rvert = b$ with $b > 0$ there are two points. Equal absolute values give two cases. A negative right-hand side is empty.`,
  },
  {
    id: `math-4-69`,
    case_id: `MATH 4.69`,
    title: `Five radical equations with extraneous-root checks`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2x + 1 = x^{2} - 2x + 1$, the sum of all admissible roots equals $0$.`,
      `For $0 = x^{2} - 7x + 6$, the equation has two distinct admissible real solutions.`,
      `For $x + 1 = 9 - 6x + x^{2}$, the sum of all admissible roots equals $0$.`,
      `For $3x + 4 = x^{2} - 4x + 4$, the equation has exactly one admissible real solution.`,
      `For $x - 2 = 16 - 8x + x^{2}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A principal square root is never negative, so the domain needs $2x + 1 \\ge 0$ and $x - 1 \\ge 0$, hence $x \\ge 1$. Isolate and square:

$$2x + 1 = (x - 1)^{2}$$

$$2x + 1 = x^{2} - 2x + 1$$

$$0 = x^{2} - 4x$$

$$0 = x(x - 4)$$

The candidates are $x = 0$ and $x = 4$. The value $x = 0$ lies outside $x \\ge 1$, so it is extra. The value $x = 4$ satisfies the original:

$$\\sqrt{2 \\cdot 4 + 1} = 3$$

$$4 - 1 = 3$$

Exactly one real solution survives, so the statement is True.`,
      `**B.** → False

A principal square root is never negative, so the domain needs $x + 3 \\ge 0$ and $x - 3 \\ge 0$, hence $x \\ge 3$. Isolate and square:

$$x + 3 = (x - 3)^{2}$$

$$0 = x^{2} - 7x + 6$$

$$0 = (x - 1)(x - 6)$$

The candidates are $x = 1$ and $x = 6$. The value $x = 1$ lies outside $x \\ge 3$, so it is extra. Only $x = 6$ survives:

$$\\sqrt{6 + 3} = 3 = 6 - 3$$

There is exactly one real solution, not two, so the statement is False.`,
      `**C.** → True

A principal square root is never negative, so both $x + 1 \\ge 0$ and $3 - x \\ge 0$. The domain is $-1 \\le x \\le 3$. Isolate and square:

$$x + 1 = (3 - x)^{2}$$

$$x + 1 = 9 - 6x + x^{2}$$

$$0 = x^{2} - 7x + 8$$

$$x = \\frac{7 \\pm \\sqrt{17}}{2}$$

The larger candidate $\\frac{7 + \\sqrt{17}}{2}$ exceeds $3$, so $3 - x < 0$ there and it is extra. The smaller candidate $\\frac{7 - \\sqrt{17}}{2}$ lies in $[-1, 3]$ and survives in the original.

Exactly one real solution survives, so the statement is True.`,
      `**D.** → True

A principal square root is never negative, so the domain needs $3x + 4 \\ge 0$ and $x - 2 \\ge 0$, hence $x \\ge 2$. Isolate and square:

$$3x + 4 = (x - 2)^{2}$$

$$3x + 4 = x^{2} - 4x + 4$$

$$0 = x^{2} - 7x$$

$$0 = x(x - 7)$$

The candidates are $x = 0$ and $x = 7$. The value $x = 0$ lies outside $x \\ge 2$, so it is extra. The value $x = 7$ satisfies the original:

$$\\sqrt{3 \\cdot 7 + 4} = 5$$

$$7 - 2 = 5$$

The surviving solution $7$ is greater than $5$, so the statement is True.`,
      `**E.** → False

A principal square root is never negative, so both $x - 2 \\ge 0$ and $4 - x \\ge 0$. The domain is $2 \\le x \\le 4$. Isolate and square:

$$x - 2 = (4 - x)^{2}$$

$$x - 2 = 16 - 8x + x^{2}$$

$$0 = x^{2} - 9x + 18$$

$$0 = (x - 3)(x - 6)$$

The candidates are $x = 3$ and $x = 6$. The value $x = 6$ exceeds $4$, so $4 - x < 0$ there and it is extra. Only $x = 3$ survives:

$$\\sqrt{3 - 2} = 1 = 4 - 3$$

There is exactly one real solution, not two, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `Five independent radical equations. Squaring can introduce extra roots. A principal square root is never negative, so the domain and a check in the original are required.`,
  },
  {
    id: `math-4-70`,
    case_id: `MATH 4.70`,
    title: `Five independent absolute-value and radical distance claims`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\lvert x - 3 \rvert = 5$, the two roots sum to $6$.`,
      `For $\lvert 2x + 1 \rvert = 9$, the equation admits two distinct real roots.`,
      `For $x - 4 = -(x + 2)$, the product of all admissible roots equals $4$.`,
      `For $\sqrt{x} = 7 - 3$, the equation has exactly one admissible real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Absolute value splits into two linear cases:

$$\\lvert x - 3 \\rvert = 5$$

Either $x - 3 = 5$, giving $x = 8$, or $x - 3 = -5$, giving $x = -2$.

Those are two distinct real numbers, and no other value satisfies the equation, so the statement is True.`,
      `**B.** → True

Split the absolute value:

$$\\lvert 2x + 1 \\rvert = 9$$

Either $2x + 1 = 9$, giving $x = 4$, or $2x + 1 = -9$, giving

$$2x = -10$$

$$x = -5$$

The value $-5$ is a negative integer solution, so the statement is True.`,
      `**C.** → False

Equal absolute values mean equal distance from $4$ and from $-2$. Either the expressions match, or one equals the negative of the other:

$$x - 4 = x + 2$$

has no solution. The second case gives

$$x - 4 = -(x + 2)$$

$$x - 4 = -x - 2$$

$$2x = 2$$

$$x = 1$$

The recovered solution is $x = 1$, which is positive, not negative. The claim that the solution is negative is wrong, so the statement is False.`,
      `**D.** → True

The principal square root requires $x \\ge 0$. Isolate the radical:

$$\\sqrt{x} = 7 - 3$$

$$\\sqrt{x} = 4$$

Both sides are nonnegative, so squaring is valid:

$$x = 16$$

The value $16$ lies in the domain. Check:

$$\\sqrt{16} + 3 = 4 + 3 = 7$$

The unique solution is $x = 16$, so the statement is True.`,
      `**E.** → False

At $x = 10$, both posts lie to the left, so each distance is a positive difference:

$$\\lvert 10 - 6 \\rvert + \\lvert 10 - 2 \\rvert$$

$$= 4 + 8$$

$$= 12$$

and $12 \\neq 8$. The claimed point does not satisfy the equation, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 70,
    solution_overview: `Five independent absolute-value and radical distance claims. Split $\\lvert \\cdot \\rvert$ into cases, isolate a square root before squaring, and evaluate sums of distances at a test point.`,
  },
  {
    id: `math-4-71`,
    case_id: `MATH 4.71`,
    title: `Five independent rational proportion equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{x}{x - 3} = \frac{x + 6}{x - 1}$, the sum of all admissible roots equals $0$.`,
      `For $\frac{x + 2}{x - 4} = \frac{x + 8}{x - 2}$, the equation has exactly one real solution.`,
      `For $\frac{x}{x + 1} = \frac{x + 3}{x - 2}$, the sum of all admissible roots equals $2$.`,
      `For $\frac{2x}{x + 5} = \frac{x - 1}{x - 3}$, the equation has no admissible real solution.`,
      `For $\frac{x - 1}{x + 2} = \frac{x + 4}{x - 5}$, the sum of all admissible roots equals $0$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The holes $x = 3$ and $x = 1$ zero a denominator, so they are never roots. On the remaining domain, cross-multiply:

$$\\frac{x}{x - 3} = \\frac{x + 6}{x - 1}$$

$$x(x - 1) = (x + 6)(x - 3)$$

$$x^{2} - x = x^{2} + 3x - 18$$

$$-x = 3x - 18$$

$$-4x = -18$$

$$x = \\frac{9}{2}$$

The recovered value is $\\frac{9}{2}$, a non-integer rational number that is neither hole. The statement is True.`,
      `**B.** → True

The holes $x = 4$ and $x = 2$ are never roots. On the remaining domain, cross-multiply:

$$\\frac{x + 2}{x - 4} = \\frac{x + 8}{x - 2}$$

$$(x + 2)(x - 2) = (x + 8)(x - 4)$$

$$x^{2} - 4 = x^{2} + 4x - 32$$

$$-4 = 4x - 32$$

$$28 = 4x$$

$$x = 7$$

The recovered value is $7$, an integer that is neither hole. Substitute back into each side:

$$\\frac{7 + 2}{7 - 4} = 3$$

$$\\frac{7 + 8}{7 - 2} = 3$$

Both sides equal $3$, so the statement is True.`,
      `**C.** → False

The holes $x = -1$ and $x = 2$ are never roots. On the remaining domain, cross-multiply:

$$\\frac{x}{x + 1} = \\frac{x + 3}{x - 2}$$

$$x(x - 2) = (x + 3)(x + 1)$$

$$x^{2} - 2x = x^{2} + 4x + 3$$

$$-2x = 4x + 3$$

$$-6x = 3$$

$$x = -\\frac{1}{2}$$

The recovered value is $-\\frac{1}{2}$, a single real number. There is exactly one real solution, not two, so the statement is False.`,
      `**D.** → False

The holes $x = -5$ and $x = 3$ are never roots. On the remaining domain, cross-multiply:

$$\\frac{2x}{x + 5} = \\frac{x - 1}{x - 3}$$

$$2x(x - 3) = (x - 1)(x + 5)$$

$$2x^{2} - 6x = x^{2} + 4x - 5$$

$$x^{2} - 10x + 5 = 0$$

$$x = 5 \\pm 2\\sqrt{5}$$

The discriminant is positive, so there are two real solutions. Neither is negative, because $5 - 2\\sqrt{5} > 0$. The claim of a unique negative solution is wrong, so the statement is False.`,
      `**E.** → True

The holes $x = -2$ and $x = 5$ are never roots. On the remaining domain, cross-multiply:

$$\\frac{x - 1}{x + 2} = \\frac{x + 4}{x - 5}$$

$$(x - 1)(x - 5) = (x + 4)(x + 2)$$

$$x^{2} - 6x + 5 = x^{2} + 6x + 8$$

$$-6x + 5 = 6x + 8$$

$$-12x = 3$$

$$x = -\\frac{1}{4}$$

The recovered value is $-\\frac{1}{4}$, which is neither hole. That is the unique real solution, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `Five independent rational proportions. Exclude every zero of a denominator, cross-multiply on the remaining domain, and check the recovered value in the original.`,
  },
  {
    id: `math-4-72`,
    case_id: `MATH 4.72`,
    title: `Five independent reciprocal equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{x + 1}{x} + \frac{x}{x + 1} = \frac{5}{2}$, the sum of all admissible roots equals $0$.`,
      `For $\frac{x + 1}{x} + \frac{x}{x + 1} = \frac{5}{2}$, the equation has exactly one real solution.`,
      `For $\frac{x + 1}{x} + \frac{x}{x + 1} = \frac{5}{2}$, the product of all admissible roots equals $-3$.`,
      `For $\frac{x + 1}{x} + \frac{x}{x + 1} = \frac{5}{2}$, the equation has no admissible real solution.`,
      `For $\frac{x + 3}{x} + \frac{x}{x + 3} = \frac{10}{3}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The holes $x = 0$ and $x = -1$ are never roots. On the remaining domain, multiply through by $2x(x + 1)$:

$$\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$$

$$2(x + 1)^{2} + 2x^{2} = 5x(x + 1)$$

$$4x^{2} + 4x + 2 = 5x^{2} + 5x$$

$$0 = x^{2} + x - 2$$

$$0 = (x + 2)(x - 1)$$

The candidates are $x = 1$ and $x = -2$, neither of which is a hole. Both satisfy the original, so there are exactly two real solutions. The statement is True.`,
      `**B.** → True

The holes $x = 0$ and $x = -1$ are never roots. On the remaining domain, multiply through by $2x(x + 1)$:

$$\\frac{1}{x} + \\frac{1}{x + 1} = \\frac{3}{2}$$

$$2(x + 1) + 2x = 3x(x + 1)$$

$$4x + 2 = 3x^{2} + 3x$$

$$0 = 3x^{2} - x - 2$$

$$0 = (3x + 2)(x - 1)$$

The candidates are $x = 1$ and $x = -\\frac{2}{3}$. One is positive and one is negative, so the solutions are of opposite signs. There are exactly two real solutions, so the statement is True.`,
      `**C.** → True

The holes $x = 0$ and $x = -1$ are never roots. On the remaining domain, cross-multiply:

$$\\frac{3}{x} = \\frac{2}{x + 1}$$

$$3(x + 1) = 2x$$

$$3x + 3 = 2x$$

$$x = -3$$

The recovered value is $-3$, a negative integer that is neither hole. Substitute back:

$$\\frac{3}{-3} = -1$$

$$\\frac{2}{-3 + 1} = -1$$

Both sides equal $-1$, so the statement is True.`,
      `**D.** → False

The holes $x = 0$ and $x = -2$ are never roots. On the remaining domain, multiply through by $6x(x + 2)$:

$$\\frac{1}{x} + \\frac{1}{x + 2} = \\frac{5}{6}$$

$$6(x + 2) + 6x = 5x(x + 2)$$

$$12x + 12 = 5x^{2} + 10x$$

$$0 = 5x^{2} - 2x - 12$$

The discriminant is $(-2)^{2} - 4 \\cdot 5 \\cdot (-12) = 4 + 240 = 244$, which is positive. There are two distinct real solutions, not a unique one, so the statement is False.`,
      `**E.** → False

The holes $x = 0$ and $x = -3$ are never roots. On the remaining domain, multiply through by $3x(x + 3)$:

$$\\frac{x + 3}{x} + \\frac{x}{x + 3} = \\frac{10}{3}$$

$$3(x + 3)^{2} + 3x^{2} = 10x(x + 3)$$

$$3(x^{2} + 6x + 9) + 3x^{2} = 10x^{2} + 30x$$

$$6x^{2} + 18x + 27 = 10x^{2} + 30x$$

$$0 = 4x^{2} + 12x - 27$$

The discriminant is $12^{2} - 4 \\cdot 4 \\cdot (-27) = 144 + 432 = 576 = 24^{2}$, which is positive. There are two real solutions, not none, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 72,
    solution_overview: `Five independent reciprocal equations. $\\frac{x + 1}{x} + \\frac{x}{x + 1} = \\frac{5}{2}$ clears to two roots. $\\frac{3}{x} = \\frac{2}{x + 1}$ recovers $x = -3$. Exclude every hole before clearing.`,
  },
  {
    id: `math-4-73`,
    case_id: `MATH 4.73`,
    title: `Five independent radical isolation equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $2x + 1 = x^{2} - 8x + 16$, the sum of all admissible roots equals $0$.`,
      `For $x - 1 = 4 - 4x + x^{2}$, the equation has two distinct admissible real solutions.`,
      `For $x + 5 = x^{2} - 2x + 1$, the sum of all admissible roots equals $0$.`,
      `For $3x + 1 = x^{2} + 2x + 1$, the equation has no admissible real solution.`,
      `For $x - 4 = 36 - 12x + x^{2}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

A principal square root is never negative, so the domain needs $2x + 1 \\ge 0$ and $4 - x \\ge 0$, giving $-\\frac{1}{2} \\le x \\le 4$. Isolate and square:

$$2x + 1 = (4 - x)^{2}$$

$$2x + 1 = x^{2} - 8x + 16$$

$$0 = x^{2} - 10x + 15$$

$$x = 5 \\pm \\sqrt{10}$$

The root $5 + \\sqrt{10}$ exceeds $4$, so it is outside the domain and extra. The root $5 - \\sqrt{10}$ lies in $-\\frac{1}{2} \\le x \\le 4$ and survives in the original. Exactly one real solution remains, so the statement is True.`,
      `**B.** → False

A principal square root is never negative, so both $x - 1 \\ge 0$ and $2 - x \\ge 0$. The domain is $1 \\le x \\le 2$. Isolate and square:

$$x - 1 = (2 - x)^{2}$$

$$x - 1 = 4 - 4x + x^{2}$$

$$0 = x^{2} - 5x + 5$$

$$x = \\frac{5 \\pm \\sqrt{5}}{2}$$

The larger candidate $\\frac{5 + \\sqrt{5}}{2}$ exceeds $2$, so $2 - x < 0$ there and it is extra. The smaller candidate $\\frac{5 - \\sqrt{5}}{2}$ lies in $[1, 2]$ and survives.

Exactly one real solution survives, not two, so the statement is False.`,
      `**C.** → True

A principal square root is never negative, so the domain needs $x + 5 \\ge 0$ and $x - 1 \\ge 0$, hence $x \\ge 1$. Isolate and square:

$$x + 5 = (x - 1)^{2}$$

$$x + 5 = x^{2} - 2x + 1$$

$$0 = x^{2} - 3x - 4$$

$$0 = (x - 4)(x + 1)$$

The candidates are $x = 4$ and $x = -1$. The value $x = -1$ lies outside $x \\ge 1$, so it is extra. Only $x = 4$ survives:

$$\\sqrt{4 + 5} = 3 = 4 - 1$$

Exactly one real solution remains, so the statement is True.`,
      `**D.** → False

A principal square root is never negative, so the domain needs $3x + 1 \\ge 0$ and $x + 1 \\ge 0$, hence $x \\ge -\\frac{1}{3}$. Isolate and square:

$$3x + 1 = (x + 1)^{2}$$

$$3x + 1 = x^{2} + 2x + 1$$

$$0 = x^{2} - x$$

$$0 = x(x - 3)$$

The candidates are $x = 0$ and $x = 3$. Both lie in the domain and both satisfy the original:

$$\\sqrt{3 \\cdot 0 + 1} = 1 = 0 + 1$$

$$\\sqrt{3 \\cdot 3 + 1} = 4 = 3 + 1$$

There are two real solutions, not exactly one, so the statement is False.`,
      `**E.** → False

A principal square root is never negative, so both $x - 4 \\ge 0$ and $6 - x \\ge 0$. The domain is $4 \\le x \\le 6$. Isolate and square:

$$x - 4 = (6 - x)^{2}$$

$$x - 4 = 36 - 12x + x^{2}$$

$$0 = x^{2} - 13x + 40$$

$$0 = (x - 5)(x - 8)$$

The candidates are $x = 5$ and $x = 8$. The value $x = 8$ exceeds $6$, so $6 - x < 0$ there and it is extra. The value $x = 5$ survives:

$$\\sqrt{5 - 4} = 1 = 6 - 5$$

There is exactly one real solution, not none, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 73,
    solution_overview: `Five independent radical isolation equations. Squaring can introduce extras; a principal square root is never negative, so the domain restricts which candidates survive.`,
  },
  {
    id: `math-4-74`,
    case_id: `MATH 4.74`,
    title: `Five independent radical difference equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 12} = 2 + \sqrt{x}$, the sum of all admissible roots equals $4$.`,
      `For $\sqrt{x + 24} = 2 + \sqrt{x}$, the equation has exactly one real solution.`,
      `For $\sqrt{x + 8} = 1 + \sqrt{x}$, the sum of all admissible roots equals $2$.`,
      `For $\sqrt{x + 5} = 1 + \sqrt{x}$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 20} = 4 + \sqrt{x}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The domain needs $x \\ge 0$. Isolate the first root; the other side is $2 + \\sqrt{x}$, which is nonnegative:

$$\\sqrt{x + 12} = 2 + \\sqrt{x}$$

Square both sides:

$$x + 12 = 4 + 4\\sqrt{x} + x$$

$$12 = 4 + 4\\sqrt{x}$$

$$8 = 4\\sqrt{x}$$

$$\\sqrt{x} = 2$$

$$x = 4$$

The recovered value is $4$, which is a perfect square. Substitute back:

$$\\sqrt{4 + 12} - \\sqrt{4} = 4 - 2 = 2$$

The candidate survives, so the statement is True.`,
      `**B.** → True

The domain needs $x \\ge 0$. Isolate and square:

$$\\sqrt{x + 24} = 2 + \\sqrt{x}$$

$$x + 24 = 4 + 4\\sqrt{x} + x$$

$$20 = 4\\sqrt{x}$$

$$5 = \\sqrt{x}$$

$$x = 25$$

The recovered value is $25$, which is greater than $20$. Substitute back:

$$\\sqrt{25 + 24} - \\sqrt{25} = 7 - 5 = 2$$

The candidate survives, so the statement is True.`,
      `**C.** → False

The domain needs $x \\ge 0$. Isolate and square:

$$\\sqrt{x + 8} = 1 + \\sqrt{x}$$

$$x + 8 = 1 + 2\\sqrt{x} + x$$

$$7 = 2\\sqrt{x}$$

$$\\sqrt{x} = \\frac{7}{2}$$

$$x = \\frac{49}{4}$$

The recovered value is $\\frac{49}{4}$, which is not an integer. The statement is False.`,
      `**D.** → False

The domain needs $x \\ge 0$. Isolate and square:

$$\\sqrt{x + 5} = 1 + \\sqrt{x}$$

$$x + 5 = 1 + 2\\sqrt{x} + x$$

$$4 = 2\\sqrt{x}$$

$$\\sqrt{x} = 2$$

$$x = 4$$

The recovered value is $4$, a single real number. A difference of two principal square roots of this form has at most one real solution, not exactly two, so the statement is False.`,
      `**E.** → False

The domain needs $x \\ge 0$. Isolate and square:

$$\\sqrt{x + 20} = 4 + \\sqrt{x}$$

$$x + 20 = 16 + 8\\sqrt{x} + x$$

$$4 = 8\\sqrt{x}$$

$$\\sqrt{x} = \\frac{1}{2}$$

$$x = \\frac{1}{4}$$

The recovered value is $\\frac{1}{4}$, which is not divisible by $3$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 74,
    solution_overview: `Five independent radical difference equations. Isolating $\\sqrt{x + 12} - \\sqrt{x} = 2$ recovers $x = 4$. A second gap $\\sqrt{x + 24} - \\sqrt{x} = 2$ recovers $x = 25$.`,
  },
  {
    id: `math-4-75`,
    case_id: `MATH 4.75`,
    title: `Five further radical isolations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 8} + \sqrt{x} = 6$, the sum of all admissible roots equals $0$.`,
      `For $\sqrt{x + 8} + \sqrt{x} = 6$, the equation has infinitely many real solutions.`,
      `For $\sqrt{x + 8} + \sqrt{x} = 6$, the sum of all admissible roots equals $2$.`,
      `For $\sqrt{x + 8} + \sqrt{x} = 6$, the equation has exactly one admissible real solution.`,
      `For $\sqrt{x + 8} + \sqrt{x} = 6$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The sum of square roots is

$$\\sqrt{x + 8} + \\sqrt{x} = 6$$

The domain needs $x \\ge 0$. Isolate one root, requiring the other side to stay nonnegative because a principal square root is never negative:

$$\\sqrt{x + 8} = 6 - \\sqrt{x}$$

$$6 - \\sqrt{x} \\ge 0$$

so $x \\le 36$. Square both sides:

$$x + 8 = 36 - 12\\sqrt{x} + x$$

$$8 = 36 - 12\\sqrt{x}$$

$$12\\sqrt{x} = 28$$

$$\\sqrt{x} = \\frac{7}{3}$$

$$x = \\frac{49}{9}$$

The candidate $\\frac{49}{9}$ lies in $[0, 36]$. Substitute back:

$$\\sqrt{\\frac{49}{9} + 8} + \\frac{7}{3} = \\sqrt{\\frac{121}{9}} + \\frac{7}{3} = \\frac{11}{3} + \\frac{7}{3} = 6$$

The recovered length $\\frac{49}{9}$ m is positive and less than $6$ m, so the property claim holds and the statement is True.`,
      `**B.** → True

After the isolation and squaring in A, the remaining relation is

$$\\sqrt{x} = \\frac{7}{3}$$

At the recovered length $\\frac{49}{9}$ m that identity holds, so the statement is True.`,
      `**C.** → False

The isolate-and-square recovered $x = \\frac{49}{9}$, not $x = 9$. Plug the claimed length $9$ m:

$$\\sqrt{9 + 8} + \\sqrt{9} = \\sqrt{17} + 3$$

Now $\\sqrt{17} > \\sqrt{16} = 4$, so the sum is greater than $7$, hence not $6$. Adding $\\sqrt{9} + \\sqrt{9}$ would require the other inside to be $9$ as well, but it is $17$.

The claimed length fails, so the statement is False.`,
      `**D.** → True

After isolating,

$$\\sqrt{x + 8} = 6 - \\sqrt{x}$$

A principal square root is never negative, so the isolated right-hand side must satisfy

$$6 - \\sqrt{x} \\ge 0$$

Otherwise that side could not equal a principal square root, so the statement is True.`,
      `**E.** → False

Plug the claimed length $x = 4$:

$$\\sqrt{4 + 8} + \\sqrt{4} = \\sqrt{12} + 2$$

Now $\\sqrt{9} = 3 < \\sqrt{12} < 4 = \\sqrt{16}$, so the sum lies strictly between $5$ and $6$, and is not $6$.

The recovered length is $\\frac{49}{9}$ m, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 75,
    solution_overview: `Five independent radical isolations. $\\sqrt{x + 8} + \\sqrt{x} = 6$ recovers $x = \\frac{49}{9}$ after requiring $6 - \\sqrt{x} \\ge 0$.`,
  },
  {
    id: `math-4-76`,
    case_id: `MATH 4.76`,
    title: `Five independent absolute-value equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\lvert 3 - 2x \rvert = \lvert -x - 1 \rvert$, the equation has no real solution.`,
      `For $\lvert 2x + 1 \rvert = \lvert 5 \rvert$, the equation admits two distinct real roots.`,
      `For $\lvert 2x - 5 \rvert = \lvert -x - 1 \rvert$, the product of all admissible roots equals $8$.`,
      `For $\lvert x - 4 \rvert = \lvert -2x + 1 \rvert$, the equation has exactly one admissible real solution.`,
      `For $\lvert 5 - x \rvert = \lvert -2x - 3 \rvert$, the sum of all admissible roots equals $-5$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

An absolute value is never negative, so the right-hand side must satisfy $x + 1 \\ge 0$, hence $x \\ge -1$. Split the left side into two cases.

First case, $3 - 2x = x + 1$:

$$3 - 1 = 3x$$

$$x = \\frac{2}{3}$$

Second case, $3 - 2x = -(x + 1)$:

$$3 - 2x = -x - 1$$

$$4 = x$$

Both candidates meet $x \\ge -1$ and satisfy the original. There are exactly two real solutions, so the statement is True.`,
      `**B.** → True

The equation $\\lvert 2x + 1 \\rvert = 5$ has a positive right-hand side, so it splits into two cases:

$$2x + 1 = 5$$

$$2x = 4$$

$$x = 2$$

and

$$2x + 1 = -5$$

$$2x = -6$$

$$x = -3$$

The recovered values are $2$ and $-3$. The value $-3$ is a negative integer solution, so the statement is True.`,
      `**C.** → False

An absolute value is never negative, so the right-hand side requires $x + 1 \\ge 0$, hence $x \\ge -1$. Split into two cases.

First case, $2x - 5 = x + 1$:

$$x = 6$$

Second case, $2x - 5 = -(x + 1)$:

$$2x - 5 = -x - 1$$

$$3x = 4$$

$$x = \\frac{4}{3}$$

Both candidates meet $x \\ge -1$ and satisfy the original. There are two real solutions, not exactly one, so the statement is False.`,
      `**D.** → True

An absolute value is never negative, so the right-hand side requires $2x - 1 \\ge 0$, hence $x \\ge \\frac{1}{2}$. Split into two cases.

First case, $x - 4 = 2x - 1$:

$$-4 + 1 = x$$

$$x = -3$$

This lies outside $x \\ge \\frac{1}{2}$, so it is rejected.

Second case, $x - 4 = -(2x - 1)$:

$$x - 4 = -2x + 1$$

$$3x = 5$$

$$x = \\frac{5}{3}$$

This meets $x \\ge \\frac{1}{2}$ and satisfies the original:

$$\\left\\lvert \\frac{5}{3} - 4 \\right\\rvert = \\left\\lvert -\\frac{7}{3} \\right\\rvert = \\frac{7}{3}$$

$$2 \\cdot \\frac{5}{3} - 1 = \\frac{7}{3}$$

Exactly one real solution survives, so the statement is True.`,
      `**E.** → False

An absolute value is never negative, so the right-hand side requires $2x + 3 \\ge 0$, hence $x \\ge -\\frac{3}{2}$. Split into two cases.

First case, $5 - x = 2x + 3$:

$$5 - 3 = 3x$$

$$x = \\frac{2}{3}$$

Second case, $5 - x = -(2x + 3)$:

$$5 - x = -2x - 3$$

$$x = -8$$

Only $x = \\frac{2}{3}$ meets $x \\ge -\\frac{3}{2}$ and satisfies the original:

$$\\left\\lvert 5 - \\frac{2}{3} \\right\\rvert = \\frac{13}{3}$$

$$2 \\cdot \\frac{2}{3} + 3 = \\frac{13}{3}$$

There is a real solution, not none, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 76,
    solution_overview: `Five independent absolute-value equations. When the right-hand side is an expression, require it to be nonnegative first. Splitting can produce two, one, or no surviving roots.`,
  },
  {
    id: `math-4-77`,
    case_id: `MATH 4.77`,
    title: `A reciprocal difference, a radical extra, and three more`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{1}{x - 1} - \frac{1}{x + 1} = \frac{1}{4}$, the sum of all admissible roots equals $3$.`,
      `For $\sqrt{x + 3} = x - 3$, the equation has two distinct admissible real solutions.`,
      `For $\lvert x + 2 \rvert = \lvert 2x - 7 \rvert$, the product of all admissible roots equals $9$.`,
      `For $\sqrt{x + 4} = -2$, the equation has exactly one real solution.`,
      `For $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$, the equation has exactly one real solution.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The reciprocal difference is

$$\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{1}{4}$$

The holes $x = 1$ and $x = -1$ are never roots. On the remaining domain, multiply through by $4(x^{2} - 1)$:

$$4(x + 1) - 4(x - 1) = x^{2} - 1$$

$$4x + 4 - 4x + 4 = x^{2} - 1$$

$$8 = x^{2} - 1$$

$$x^{2} = 9$$

$$x = 3$$

or

$$x = -3$$

Neither value is a hole. Substitute $x = 3$:

$$\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$$

Substitute $x = -3$:

$$\\frac{1}{-4} - \\frac{1}{-2} = -\\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4}$$

Both recovered solutions check, so the statement is True.`,
      `**B.** → False

For $\\sqrt{x + 3} = x - 3$ a principal square root is never negative, so the domain needs $x \\ge 3$. Isolate and square:

$$x + 3 = (x - 3)^{2}$$

$$0 = (x - 1)(x - 6)$$

The candidates are $x = 1$ and $x = 6$. Plug the extra $x = 1$:

$$\\sqrt{1 + 3} = 2$$

$$1 - 3 = -2$$

and $2 \\neq -2$. Only $x = 6$ survives. The claim keeps both squared roots, so the statement is False.`,
      `**C.** → True

Equal absolute values split into two cases. Distance to $-2$ matching a scaled distance to $\\frac{7}{2}$ is

$$\\lvert x + 2 \\rvert = \\lvert 2x - 7 \\rvert$$

First case:

$$x + 2 = 2x - 7$$

$$x = 9$$

Second case:

$$x + 2 = 7 - 2x$$

$$3x = 5$$

$$x = \\frac{5}{3}$$

Substitute each back:

$$\\lvert 9 + 2 \\rvert = \\lvert 18 - 7 \\rvert$$

$$\\left\\lvert \\frac{5}{3} + 2 \\right\\rvert = \\left\\lvert \\frac{10}{3} - 7 \\right\\rvert$$

Both recovered sites $9$ and $\\frac{5}{3}$ check, so the statement is True.`,
      `**D.** → False

A principal square root is never negative. The equation

$$\\sqrt{x + 4} = -2$$

has no real solution. Squaring would produce $x + 4 = 4$, hence $x = 0$, but that candidate is extra:

$$\\sqrt{0 + 4} = 2 \\neq -2$$

Zero does not solve the original, so the statement is False.`,
      `**E.** → False

The left side $\\frac{x^{2} - 4}{x - 2}$ is undefined where its denominator equals $0$, so that point is a hole, never a root. For values where $x - 2 \\neq 0$ the fraction simplifies:

$$\\frac{(x - 2)(x + 2)}{x - 2} = x + 2$$

and $x + 2 = x$ would require $2 = 0$, which never holds.

The identity does not hold at the hole, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Five independent equations of the subsection: a reciprocal difference with two surviving roots, a radical that drops $x = 1$, an equal-absolute-value pair, a negative principal root, and a hole at $x = 2$.`,
  },
  {
    id: `math-4-78`,
    case_id: `MATH 4.78`,
    title: `Five independent rational difference equations`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $(2x^{2} + 3x + 1) - (x^{2} + 2x - 3) = x^{2} + x + 4$, the sum of all admissible roots equals $-5$.`,
      `For $(3x^{2} - 4x - 4) - (2x^{2} - x - 1) = x^{2} - 3x - 3$, the equation has exactly one real solution.`,
      `The equation has exactly one real solution.`,
      `For $(x^{2} + 6x + 8) - (2x^{2} - 2x) = -x^{2} + 8x + 8$, the equation has exactly one admissible real solution.`,
      `For $(2x^{2} - 3x + 1) - (x^{2} + 5x + 6) = x^{2} - 8x - 5$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The holes $x = 1$ and $x = -1$ are never roots. On the remaining domain, multiply through by $(x - 1)(x + 1)$:

$$\\frac{2x + 1}{x - 1} - \\frac{x + 3}{x + 1} = 1$$

$$(2x + 1)(x + 1) - (x + 3)(x - 1) = x^{2} - 1$$

Expand the left side:

$$(2x^{2} + 3x + 1) - (x^{2} + 2x - 3) = x^{2} + x + 4$$

So

$$x^{2} + x + 4 = x^{2} - 1$$

$$x + 4 = -1$$

$$x = -5$$

The recovered value is $-5$, a negative number that is neither hole. The statement is True.`,
      `**B.** → True

The holes $x = -1$ and $x = 2$ are never roots. On the remaining domain, multiply through by $(x + 1)(x - 2)$:

$$\\frac{3x + 2}{x + 1} - \\frac{2x - 1}{x - 2} = 1$$

$$(3x + 2)(x - 2) - (2x - 1)(x + 1) = (x + 1)(x - 2)$$

Expand the left side:

$$(3x^{2} - 4x - 4) - (2x^{2} - x - 1) = x^{2} - 3x - 3$$

So

$$x^{2} - 3x - 3 = x^{2} - x - 2$$

$$-3x - 3 = -x - 2$$

$$-2x = 1$$

$$x = -\\frac{1}{2}$$

The recovered value is $-\\frac{1}{2}$, a non-integer rational number that is neither hole. The statement is True.`,
      `**C.** → True

A rational difference is undefined where a denominator is zero. The denominators $x - 2$ and $x + 1$ vanish at

$$x = 2$$

and

$$x = -1$$

Those are exactly two holes, never roots, so the statement is True.`,
      `**D.** → True

The holes $x = 1$ and $x = -2$ are never roots. On the remaining domain, multiply through by $(x - 1)(x + 2)$:

$$\\frac{x + 4}{x - 1} - \\frac{2x}{x + 2} = 1$$

$$(x + 4)(x + 2) - 2x(x - 1) = (x - 1)(x + 2)$$

Expand the left side:

$$(x^{2} + 6x + 8) - (2x^{2} - 2x) = -x^{2} + 8x + 8$$

So

$$-x^{2} + 8x + 8 = x^{2} + x - 2$$

$$0 = 2x^{2} - 7x - 10$$

The discriminant is $(-7)^{2} - 4 \\cdot 2 \\cdot (-10) = 49 + 80 = 129$, which is positive. There are exactly two distinct real solutions, so the statement is True.`,
      `**E.** → False

The holes $x = -3$ and $x = 1$ are never roots. On the remaining domain, multiply through by $(x + 3)(x - 1)$:

$$\\frac{2x - 1}{x + 3} - \\frac{x + 2}{x - 1} = 1$$

$$(2x - 1)(x - 1) - (x + 2)(x + 3) = (x + 3)(x - 1)$$

Expand the left side:

$$(2x^{2} - 3x + 1) - (x^{2} + 5x + 6) = x^{2} - 8x - 5$$

So

$$x^{2} - 8x - 5 = x^{2} + 2x - 3$$

$$-8x - 5 = 2x - 3$$

$$-10x = 2$$

$$x = -\\frac{1}{5}$$

The recovered value is $-\\frac{1}{5}$, which is neither hole. There is a real solution, not none, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `Five independent rational difference equations. Clearing can cancel $x^{2}$ to leave a linear equation, or produce a quadratic with two roots. Exclude every hole first.`,
  },
  {
    id: `math-4-79`,
    case_id: `MATH 4.79`,
    title: `Nested remainders, reversed digits, and a delayed leak`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{3}{4} \cdot \frac{4}{5}x = \frac{3}{5}x$, the sum of all admissible roots equals $92$.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `For $s + 24 = 5(s - 4)$, the equation has exactly one admissible real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Let the start be $x$ EUR. After one-fifth, $\\frac{4}{5}x$ remains. After one-quarter of that remainder,

$$\\frac{3}{4} \\cdot \\frac{4}{5}x = \\frac{3}{5}x$$

After one-third of that, $\\frac{2}{5}x$ remains. After one-half of the last remainder,

$$\\frac{1}{2} \\cdot \\frac{2}{5}x = \\frac{1}{5}x$$

Set the leftover equal to $18$:

$$\\frac{1}{5}x = 18$$

$$x = 90$$

The purse started at $90$ EUR, not $80$. Eighty would leave $16$ EUR. The statement is False.`,
      `**B.** → True

Let the units digit be $u$. Then the tens digit is $u + 2$, the number is $10(u + 2) + u$, and the reverse is $10u + (u + 2)$:

$$11(u + 2) + 11u = 132$$

$$u + 2 + u = 12$$

$$2u = 10$$

$$u = 5$$

The tens digit is $7$, so the number is $75$. Check: $75 + 57 = 132$. The statement is True.`,
      `**C.** → False

Four minutes of $A$ alone finish $\\frac{4}{20} = \\frac{1}{5}$ of the tank, so $\\frac{4}{5}$ remains. Three minutes of $A$ and $B$ together finish

$$3\\left(\\frac{1}{20} + \\frac{1}{30}\\right) = 3 \\cdot \\frac{1}{12} = \\frac{1}{4}$$

so $\\frac{4}{5} - \\frac{1}{4} = \\frac{11}{20}$ remains. With the leak as well the net rate is

$$\\frac{1}{20} + \\frac{1}{30} - \\frac{1}{60} = \\frac{1}{15}$$

The remaining time is

$$t = \\frac{11/20}{1/15} = \\frac{33}{4}$$

minutes, not $6$. The statement is False.`,
      `**D.** → True

Let the son's present age be $s$ years. The father is $s + 28$. Four years ago:

$$s + 24 = 5(s - 4)$$

$$s + 24 = 5s - 20$$

$$44 = 4s$$

$$s = 11$$

They are $39$ and $11$ now, and four years ago $35$ and $7$. The son is now $11$, so the statement is True.`,
      `**E.** → False

The vat starts with $10$ litres of pure acid. Drawing $8$ litres of the $25\\%$ mix removes $2$ litres of acid, leaving $8$ litres of acid in $32$ litres. Adding $8$ litres of $50\\%$ stock adds $4$ litres of acid, so $12$ litres of acid sit in $40$ litres, which is $30\\%$, not $32\\%$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 79,
    solution_overview: `Five independent linear stories. Nested remainders of a purse, a two-digit number plus its reverse, a three-stage fill with a late leak, a past age ratio, and a draw-and-replace mix.`,
  },
  {
    id: `math-4-80`,
    case_id: `MATH 4.80`,
    title: `A platform, overlapping hands, and a faster leftover fill`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `For $6 + 0.7x = 0.4(30 + x)$, the product of all admissible roots equals $20$.`,
      `The equation has no real solution.`,
      `For $s + 36 = 2(s + 6)$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Passing a platform means covering the train's length plus the platform:

$$150 + 250 = 400$$

metres in $24$ seconds, so the speed is $\\frac{400}{24} = \\frac{50}{3}$ metres per second. Convert by multiplying by $3.6$:

$$\\frac{50}{3} \\cdot 3.6 = 60$$

The recovered speed is $60$ km/h, so the statement is True.`,
      `**B.** → False

The minute hand moves $6^{\\circ}$ per minute and the hour hand $0.5^{\\circ}$ per minute. After $2$ o'clock they overlap when

$$60 + 0.5m = 6m$$

$$60 = 5.5m$$

$$m = \\frac{120}{11}$$

which is $10$ minutes and $\\frac{10}{11}$ of a minute, not $2{:}10$ exactly. At $2{:}10$ the hour hand is at $65^{\\circ}$ and the minute hand at $60^{\\circ}$. The statement is False.`,
      `**C.** → True

Thirty kilograms of $20\\%$ hold $6$ kg of copper. Let $x$ be the kilograms of $70\\%$ alloy:

$$6 + 0.7x = 0.4(30 + x)$$

$$6 + 0.7x = 12 + 0.4x$$

$$0.3x = 6$$

$$x = 20$$

Twenty kilograms of the richer alloy recover $40\\%$. The statement is True.`,
      `**D.** → False

Work rates add:

$$\\frac{1}{12} + \\frac{1}{b} = \\frac{1}{8}$$

$$\\frac{1}{b} = \\frac{1}{8} - \\frac{1}{12} = \\frac{1}{24}$$

so $B$ alone needs $24$ days, not $20$. The statement is False.`,
      `**E.** → False

Let the son's present age be $s$ years. The father is $s + 30$. In six years:

$$s + 36 = 2(s + 6)$$

$$s + 36 = 2s + 12$$

$$s = 24$$

The son is now $24$, not $18$. Eighteen would make them $48$ and $24$ in six years, but $48 \\neq 2 \\cdot 24$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 80,
    solution_overview: `Five independent linear stories. A train covering its own length plus a platform, clock-hand overlap $m = 60H/11$, an alloy, a two-worker split, and a future doubling of ages.`,
  },
  {
    id: `math-4-81`,
    case_id: `MATH 4.81`,
    title: `A reverse that is $9$ more, a current, and a geometric prize`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `For $\frac{3}{4}x + 12 = 2x - 20$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Let the tens digit be $a$ and the units digit be $b$. Then $a + b = 9$ and

$$(10b + a) - (10a + b) = 9$$

$$9b - 9a = 9$$

$$b - a = 1$$

Together with $a + b = 9$ this gives $a = 4$ and $b = 5$, so the original number is $45$. Check: $54 - 45 = 9$. The statement is True.`,
      `**B.** → False

Downstream speed is $36/2 = 18$ km/h and upstream speed is $36/4 = 9$ km/h. Still-water speed is the average of those two, and the current is half the difference:

$$c = \\frac{18 - 9}{2} = \\frac{9}{2}$$

so $4.5$ km/h, not $3$ km/h. Check: still water would be $13.5$ km/h, and $13.5 + 4.5 = 18$, $13.5 - 4.5 = 9$. The statement is False.`,
      `**C.** → False

Let first place be $a$ EUR. Then second is $\\frac{1}{2}a$ and third is $\\frac{1}{4}a$, and the three prizes add to $8000$:

$$a + \\frac{1}{2}a + \\frac{1}{4}a = 8000$$

$$\\frac{7}{4}a = 8000$$

$$a = \\frac{32000}{7}$$

Second place is half of that:

$$\\frac{1}{2} \\cdot \\frac{32000}{7} = \\frac{16000}{7}$$

which is a little more than $2285$ EUR, not $2000$. Two thousand would be a quarter of $8000$, as if the three shares were equal to $1 + \\frac{1}{2} + \\frac{1}{2}$. The statement is False.`,
      `**D.** → True

The job is $15 \\cdot 10 = 150$ worker-days. Four days with fifteen workers finish $60$ worker-days, so $90$ remain and $6$ days are left on the original timetable. After five workers leave, ten remain, giving only $60$ worker-days in those six days, so $30$ worker-days are missing. Over six days that shortfall is $5$ extra workers. Check: $10 + 5 = 15$ workers for $6$ days is $90$ worker-days. The statement is True.`,
      `**E.** → False

Three-quarters of the wage, plus $12$ EUR, equals twice the wage minus $20$ EUR:

$$\\frac{3}{4}x + 12 = 2x - 20$$

$$12 + 20 = 2x - \\frac{3}{4}x$$

$$32 = \\frac{5}{4}x$$

$$x = \\frac{128}{5}$$

The wage is $25.6$ EUR, not $64$. Substituting $64$:

$$\\frac{3}{4} \\cdot 64 + 12 = 60$$

and $2 \\cdot 64 - 20 = 108$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 81,
    solution_overview: `Five independent linear stories. Reversed digits with a given sum, a current from two legs, a geometric prize split, a worker-day shortfall, and a nested wage.`,
  },
  {
    id: `math-4-82`,
    case_id: `MATH 4.82`,
    title: `Evaporation then a richer stock, a delayed meeting, and successive percentages`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `For $s + 30 - 5 = 3(s - 5)$, the sum of all admissible roots equals $2$.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

The vat starts with $0.10 \\cdot 60 = 6$ litres of pure acid. Evaporating $12$ litres of water leaves those $6$ litres of acid in $48$ litres of mixture. Adding $12$ litres of $40\\%$ stock adds

$$0.40 \\cdot 12 = 4.8$$

litres of acid, so $10.8$ litres of acid sit in $60$ litres, which is $18\\%$, not $16\\%$. Sixteen percent of $60$ litres would be $9.6$ litres of acid. The statement is False.`,
      `**B.** → False

The slower car starts $20$ minutes, that is $\\frac{1}{3}$ hour, later. In that head start the faster car covers

$$50 \\cdot \\frac{1}{3} = \\frac{50}{3}$$

kilometres, so

$$180 - \\frac{50}{3} = \\frac{490}{3}$$

kilometres remain. The cars then close at $50 + 40 = 90$ km/h, which takes

$$\\frac{490/3}{90} = \\frac{49}{27}$$

hours after the slower car starts. The total time after the faster car starts is

$$\\frac{1}{3} + \\frac{49}{27} = \\frac{58}{27}$$

hours, a little more than $2$ hours $8$ minutes, not $2$ hours. The statement is False.`,
      `**C.** → False

Let the son's present age be $s$ years and the father's $s + 30$. Five years ago the father was three times the son:

$$s + 30 - 5 = 3(s - 5)$$

$$s + 25 = 3s - 15$$

$$40 = 2s$$

$$s = 20$$

The father is now $50$, not $45$. Check: five years ago they were $45$ and $15$, and $45 = 3 \\cdot 15$. Forty-five now would make them $40$ and $10$ five years ago, and $40 \\neq 3 \\cdot 10$. The statement is False.`,
      `**D.** → True

Successive percentage factors multiply. The marked price, the discount, and the loyalty card give

$$1.20 \\cdot 0.90 \\cdot 0.98 = 1.0584$$

so the customer pays $5.84\\%$ more than the original list. That increase is positive and below $6\\%$, so the property claim holds and the statement is True.`,
      `**E.** → False

Twelve minutes fill $\\frac{2}{5}$ of the tank at the original rate, so the original full-tank time is $30$ minutes and $18$ minutes of that old rate remain. Increasing the rate by one-quarter multiplies it by $\\frac{5}{4}$, so the leftover time is

$$18 \\cdot \\frac{4}{5} = \\frac{72}{5}$$

minutes, that is $14.4$ minutes, not $15$. Fifteen minutes at the new rate would cover $\\frac{5}{4} \\cdot \\frac{15}{30} = \\frac{5}{8}$ of the tank, which is more than the remaining $\\frac{3}{5}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 82,
    solution_overview: `Five independent linear stories. Evaporation keeps the solute. A delayed meeting splits into a head-start plus a closing speed. Successive percentages multiply.`,
  },
  {
    id: `math-4-83`,
    case_id: `MATH 4.83`,
    title: `Four nested remainders, a late third pipe, and a $90\\%$ stock`,
    subsection: `4.1`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\frac{4}{5} \cdot \frac{5}{6}x = \frac{2}{3}x$, the sum of all admissible roots equals $62$.`,
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has no real solution.`,
      `For $15 + 0.9x = 25 + 0.5x$, the sum of all admissible roots equals $28$.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Let the start be $x$ EUR. After one-sixth, $\\frac{5}{6}x$ remains. After one-fifth of that remainder,

$$\\frac{4}{5} \\cdot \\frac{5}{6}x = \\frac{2}{3}x$$

After one-quarter of that, $\\frac{3}{4} \\cdot \\frac{2}{3}x = \\frac{1}{2}x$ remains. After one-third of the last remainder,

$$\\frac{2}{3} \\cdot \\frac{1}{2}x = \\frac{1}{3}x$$

Set the leftover equal to $20$:

$$\\frac{1}{3}x = 20$$

$$x = 60$$

The purse started at $60$ EUR, not $72$. Seventy-two would leave $24$ EUR. The statement is False.`,
      `**B.** → True

Two litres of $12\\%$ vinegar hold $0.24$ litres of pure vinegar. Adding $w$ litres of water keeps that solute and raises the volume to $2 + w$:

$$\\frac{0.24}{2 + w} = 0.08$$

$$0.24 = 0.08(2 + w)$$

$$3 = 2 + w$$

$$w = 1$$

One litre of water recovers $8\\%$. Check: $0.24 / 3 = 0.08$. The statement is True.`,
      `**C.** → False

Pipes $A$, $B$, and $C$ have rates $\\frac{1}{6}$, $\\frac{1}{8}$, and $\\frac{1}{24}$ of the job per hour. Two hours of $A$ and $B$ finish

$$2\\left(\\frac{1}{6} + \\frac{1}{8}\\right) = 2 \\cdot \\frac{7}{24} = \\frac{7}{12}$$

so $\\frac{5}{12}$ remains. All three together do

$$\\frac{1}{6} + \\frac{1}{8} + \\frac{1}{24} = \\frac{1}{3}$$

of the job per hour, so the remaining time is

$$t = \\frac{5/12}{1/3} = \\frac{5}{4}$$

hours, not $4$. Four more hours at $\\frac{1}{3}$ per hour would cover $\\frac{4}{3}$ of a job. The statement is False.`,
      `**D.** → False

Let the middle integer be $n$. The five consecutive integers are $n - 2$, $n - 1$, $n$, $n + 1$, and $n + 2$. Four times the smallest exceeds the largest by $17$:

$$4(n - 2) = (n + 2) + 17$$

$$4n - 8 = n + 19$$

$$3n = 27$$

$$n = 9$$

The middle integer is $9$, which does not exceed $15$. The statement is False.`,
      `**E.** → False

Fifty kilograms of $30\\%$ copper hold $15$ kg of copper. Let $x$ be the kilograms of $90\\%$ alloy:

$$15 + 0.9x = 0.5(50 + x)$$

$$15 + 0.9x = 25 + 0.5x$$

$$0.4x = 10$$

$$x = 25$$

Twenty-five kilograms of the richer alloy recover $50\\%$, not $20$ kg. Twenty kilograms would give $15 + 18 = 33$ kg of copper in $70$ kg, which is $47.1\\%$, not $50\\%$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 83,
    solution_overview: `Five independent linear stories. Four nested remainders leave one-third of the purse. A dilution conserves solute. A late third pipe changes the leftover rate.`,
  },
  {
    id: `math-4-84`,
    case_id: `MATH 4.84`,
    title: `An inner path, a projectile at $40$ m, and consecutive odds`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $192 - 56x + 4x^{2} = 96$, the two roots sum to $2$.`,
      `For $(t - 2)(t - 4) = 0$, the equation has two distinct admissible real solutions.`,
      `The equation has exactly one real solution.`,
      `For $x - \frac{1}{x} = \frac{8}{3}$, the equation has no admissible real solution.`,
      `A square of area $13$ m$^{2}$ has side length less than $3$ m.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

Let the path width be $x$ metres. The inner grass is $(16 - 2x)$ by $(12 - 2x)$ and has area $96$ m$^{2}$:

$$(16 - 2x)(12 - 2x) = 96$$

$$192 - 56x + 4x^{2} = 96$$

$$x^{2} - 14x + 24 = 0$$

$$(x - 2)(x - 12) = 0$$

The root $x = 12$ would make the inner rectangle negative, so the path is $2$ m wide, not $3$ m. Check: inner $12$ by $8$ has area $96$. A $3$ m path would leave $10$ by $6$, which is $60$ m$^{2}$. The statement is False.`,
      `**B.** → False

Set the height equal to $40$ m:

$$30t - 5t^{2} = 40$$

$$5t^{2} - 30t + 40 = 0$$

$$t^{2} - 6t + 8 = 0$$

$$(t - 2)(t - 4) = 0$$

The height $40$ m occurs at $t = 2$ and at $t = 4$, on the way up and on the way down, not only at $t = 2$. The statement is False.`,
      `**C.** → True

Let the smaller odd positive integer be $n$. Then the next odd integer is $n + 2$ and

$$n(n + 2) = 143$$

$$n^{2} + 2n - 143 = 0$$

The positive root is

$$n = -1 + \\sqrt{144} = 11$$

and $11 \\cdot 13 = 143$. Their sum is

$$11 + 13 = 24$$

The claim is that same sum, so the statement is True.`,
      `**D.** → False

A positive number exceeds its reciprocal by $\\frac{8}{3}$:

$$x - \\frac{1}{x} = \\frac{8}{3}$$

Multiply through by $3x$:

$$3x^{2} - 3 = 8x$$

$$3x^{2} - 8x - 3 = 0$$

$$(3x + 1)(x - 3) = 0$$

The positive root is $x = 3$, not less than $2$. Check: $3 - \\frac{1}{3} = \\frac{8}{3}$. The claim that the positive solution is less than $2$ is incorrect, so the statement is False.`,
      `**E.** → False

A rectangle of perimeter $48$ cm has sides adding to $24$ cm, and the area is $135$ cm$^{2}$. The sides are the roots of

$$t^{2} - 24t + 135 = 0$$

$$(t - 9)(t - 15) = 0$$

so the sides are $9$ cm and $15$ cm. A square would need equal sides, hence area $12^{2} = 144$ cm$^{2}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 84,
    solution_overview: `Five independent quadratic stories. An inner path, a projectile at a given height, consecutive odd integers, a number minus its reciprocal, and sides from perimeter and area.`,
  },
  {
    id: `math-4-85`,
    case_id: `MATH 4.85`,
    title: `A $10$-$24$-$26$ ladder, a slip, and a vertex`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `The equation has exactly one real solution.`,
      `For $(t - 2)(t - 4) = 0$, the equation has no admissible real solution.`,
      `For $w = \frac{-1 + \sqrt{1 + 960}}{4} = \frac{-1 + 31}{4} = \frac{15}{2}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the reach up the wall be $h$ metres. Pythagoras on the ladder, the wall, and the ground gives

$$h^{2} + 10^{2} = 26^{2}$$

$$h^{2} + 100 = 676$$

$$h^{2} = 576$$

$$h = 24$$

Check: $10^{2} + 24^{2} = 100 + 576 = 676$. The ladder reaches $24$ m up the wall, so the statement is True.`,
      `**B.** → False

Originally the reach $h$ satisfies $h^{2} + 5^{2} = 13^{2}$, so $h^{2} = 144$ and $h = 12$. After the foot slips out to $9$ m from the wall, the new reach $k$ satisfies

$$k^{2} + 9^{2} = 13^{2}$$

$$k^{2} = 169 - 81 = 88$$

$$k = 2\\sqrt{22}$$

which is a little more than $9.38$ m. The drop is $12 - k$, less than $2.62$ m, not $4$ m. A $4$ m drop would leave $8$ m up the wall, and $8^{2} + 9^{2} = 145 \\neq 169$. The statement is False.`,
      `**C.** → True

Let the middle even integer be $n$. The three integers are $n - 2$, $n$, and $n + 2$. The sum of squares is

$$(n - 2)^{2} + n^{2} + (n + 2)^{2} = 200$$

$$3n^{2} + 8 = 200$$

$$3n^{2} = 192$$

$$n^{2} = 64$$

$$n = 8$$

since $n$ is a positive even integer. The middle integer $8$ exceeds $6$, so the statement is True.`,
      `**D.** → False

Set the height equal to $32$ m:

$$24t - 4t^{2} = 32$$

$$4t^{2} - 24t + 32 = 0$$

$$t^{2} - 6t + 8 = 0$$

$$(t - 2)(t - 4) = 0$$

The height $32$ m occurs at $t = 2$ and at $t = 4$, not only at $t = 2$. The statement is False.`,
      `**E.** → False

Let the width be $w$ cm. The length is $2w + 1$, and the area is $120$ cm$^{2}$:

$$w(2w + 1) = 120$$

$$2w^{2} + w - 120 = 0$$

$$w = \\frac{-1 + \\sqrt{1 + 960}}{4} = \\frac{-1 + 31}{4} = \\frac{15}{2}$$

The width is $7.5$ cm, which does not exceed $8$ cm. An $8$ cm width would give length $17$ cm and area $136$ cm$^{2}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 85,
    solution_overview: `Five independent quadratic claims. A $10$-$24$-$26$ ladder, a slip, three consecutive even integers, a vertex, and $w(2w + 1) = 120$.`,
  },
  {
    id: `math-4-86`,
    case_id: `MATH 4.86`,
    title: `A $7$ hour gap, a $5$-$12$-$13$ rectangle, and the last $3$ seconds`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $12(t + 7) + 12t = t(t + 7)$, the sum of all admissible roots equals $0$.`,
      `The equation has exactly one real solution.`,
      `For $n = \frac{-1 + \sqrt{841}}{2} = \frac{-1 + 29}{2} = 14$, the sum of all admissible roots equals $2$.`,
      `For $96 + 40x + 4x^{2} = 192$, the equation has exactly one real solution.`,
      `For $t^{2} - (t^{2} - 6t + 9) = 15$, the sum of all admissible roots equals $0$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Let the faster worker alone take $t$ hours. Then the slower worker takes $t + 7$ hours, and together they finish one job in $12$ hours:

$$\\frac{1}{t} + \\frac{1}{t + 7} = \\frac{1}{12}$$

Multiply through by $12t(t + 7)$:

$$12(t + 7) + 12t = t(t + 7)$$

$$24t + 84 = t^{2} + 7t$$

$$t^{2} - 17t - 84 = 0$$

$$(t - 21)(t + 4) = 0$$

The positive root is $t = 21$. Check: $\\frac{1}{21} + \\frac{1}{28} = \\frac{4 + 3}{84} = \\frac{1}{12}$. The statement is True.`,
      `**B.** → True

Let the sides be $a$ and $b$. Then $ab = 60$ and $a^{2} + b^{2} = 13^{2} = 169$. The pair $5$ and $12$ has product $60$ and

$$5^{2} + 12^{2} = 25 + 144 = 169$$

Both sides are positive integers, so the statement is True.`,
      `**C.** → False

Let the smaller consecutive positive integer be $n$. Then

$$n(n + 1) = 210$$

$$n^{2} + n - 210 = 0$$

$$n = \\frac{-1 + \\sqrt{841}}{2} = \\frac{-1 + 29}{2} = 14$$

The smaller integer is $14$, which does not exceed $14$. The claim requires a value strictly greater than $14$, so the statement is False.`,
      `**D.** → False

Let the frame width be $x$ cm. The outer rectangle is $(12 + 2x)$ by $(8 + 2x)$ and has area $192$ cm$^{2}$:

$$(12 + 2x)(8 + 2x) = 192$$

$$96 + 40x + 4x^{2} = 192$$

$$x^{2} + 10x - 24 = 0$$

$$(x + 12)(x - 2) = 0$$

The positive root is $x = 2$, not $3$. Check: outer $16$ by $12$ has area $192$. A $3$ cm frame would give outer $18$ by $14$, which is $252$ cm$^{2}$. The statement is False.`,
      `**E.** → True

Distance fallen in $t$ seconds is $5t^{2}$ metres. The last $3$ seconds cover $75$ m, so

$$5t^{2} - 5(t - 3)^{2} = 75$$

$$t^{2} - (t^{2} - 6t + 9) = 15$$

$$6t - 9 = 15$$

$$6t = 24$$

$$t = 4$$

The tower height is $5 \\cdot 4^{2} = 80$ m. Check: in $1$ second the object falls $5$ m, so the last $3$ seconds of a $4$ second fall cover $80 - 5 = 75$ m. The statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 86,
    solution_overview: `Five independent quadratic stories. Together in $12$ hours with a $7$ hour gap recovers $21$. A $5$-$12$-$13$ rectangle has area $60$. The last $3$ seconds of $s = 5t^{2}$ recover height $80$ m.`,
  },
  {
    id: `math-4-87`,
    case_id: `MATH 4.87`,
    title: `Legs differing by $4$, a $12$-$16$-$20$ area, and an inner $24$ by $16$`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $x^{2} + x^{2} + 8x + 16 = 400$, the sum of all admissible roots equals $0$.`,
      `The equation has no real solution.`,
      `For $(t - 6)(t - 14) = 0$, the sum of all admissible roots equals $0$.`,
      `For $(t - 2)(t - 6) = 0$, the equation has no admissible real solution.`,
      `For $384 - 80x + 4x^{2} = 240$, multiplying the roots gives $-238$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let the shorter leg be $x$ cm. Then the other leg is $x + 4$ and the hypotenuse is $20$ cm:

$$x^{2} + (x + 4)^{2} = 400$$

$$x^{2} + x^{2} + 8x + 16 = 400$$

$$2x^{2} + 8x - 384 = 0$$

$$x^{2} + 4x - 192 = 0$$

$$(x + 16)(x - 12) = 0$$

The positive root is $x = 12$. The sides are $12$, $16$, and $20$. Since $12 > 10$, the shorter leg exceeds $10$ cm. The statement is True.`,
      `**B.** → False

The missing leg $b$ satisfies Pythagoras:

$$12^{2} + b^{2} = 20^{2}$$

$$b^{2} = 256$$

$$b = 16$$

The area is then

$$\\frac{1}{2} \\cdot 12 \\cdot 16 = 96$$

square centimetres, not $100$. The statement is False.`,
      `**C.** → True

Two numbers add to $20$ and multiply to $84$, so they are the roots of

$$t^{2} - 20t + 84 = 0$$

$$(t - 6)(t - 14) = 0$$

The numbers are $6$ and $14$. Both are even, so the statement is True.`,
      `**D.** → False

Set the height equal to $24$ m:

$$16t - 2t^{2} = 24$$

$$2t^{2} - 16t + 24 = 0$$

$$t^{2} - 8t + 12 = 0$$

$$(t - 2)(t - 6) = 0$$

The height $24$ m occurs at $t = 2$ and at $t = 6$, not at $t = 3$. At $t = 3$: $h = 48 - 18 = 30$ m. The statement is False.`,
      `**E.** → False

Let the path width be $x$ metres. The inner grass is $(24 - 2x)$ by $(16 - 2x)$ and has area $240$ m$^{2}$:

$$(24 - 2x)(16 - 2x) = 240$$

$$384 - 80x + 4x^{2} = 240$$

$$x^{2} - 20x + 36 = 0$$

$$(x - 2)(x - 18) = 0$$

The root $x = 18$ would make the inner rectangle negative, so the path is $2$ m wide, not $4$ m. Check: inner $20$ by $12$ has area $240$. A $4$ m path would leave $16$ by $8$, which is $128$ m$^{2}$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 87,
    solution_overview: `Five independent quadratic geometry claims. Legs differing by $4$ with hypotenuse $20$ recover $12$ and $16$. An inner path on $24$ by $16$ recovers width $2$ m.`,
  },
  {
    id: `math-4-88`,
    case_id: `MATH 4.88`,
    title: `Sum $15$ product $54$, a walkway, and three consecutives`,
    subsection: `4.2`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $(x + y)^{2} = x^{2} + 2xy + y^{2}$, the sum of all admissible roots equals $0$.`,
      `For $(x + y)^{2} = x^{2} + 2xy + y^{2} = 73 + 48 = 121$, the equation has exactly one real solution.`,
      `The equation has no real solution.`,
      `For $t = \frac{28 + \sqrt{784 + 1920}}{10} = \frac{28 + 52}{10} = 8$, the equation has no admissible real solution.`,
      `The equation has no real solution.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Let the numbers be $x$ and $y$. Then $x + y = 15$ and $x^{2} + y^{2} = 117$. Expand the square of the sum:

$$(x + y)^{2} = x^{2} + 2xy + y^{2}$$

$$225 = 117 + 2xy$$

$$xy = 54$$

The numbers are the roots of $t^{2} - 15t + 54 = 0$, which factors as $(t - 6)(t - 9)$. The pair is $6$ and $9$. Both are divisible by $3$, so the statement is True.`,
      `**B.** → True

Let the numbers be $x$ and $y$. Then $xy = 24$ and $x^{2} + y^{2} = 73$. Expand the square of the sum:

$$(x + y)^{2} = x^{2} + 2xy + y^{2} = 73 + 48 = 121$$

so $x + y = 11$ (positive). The numbers are the roots of $t^{2} - 11t + 24 = 0$, which factors as $(t - 3)(t - 8)$. The pair is $3$ and $8$. The number $3$ is prime, so the statement is True.`,
      `**C.** → False

An isosceles right triangle with hypotenuse $10\\sqrt{2}$ has equal legs $\\ell$ satisfying

$$\\ell^{2} + \\ell^{2} = 200$$

$$2\\ell^{2} = 200$$

$$\\ell = 10$$

The area is $\\frac{1}{2} \\cdot 10 \\cdot 10 = 50$ cm$^{2}$, not $100$. One hundred would be the square of a leg, not the triangular area. The statement is False.`,
      `**D.** → False

Let the faster worker alone take $t$ hours. Then the slower worker takes $t + 4$ hours, and together they finish one job in $\\frac{24}{5}$ hours:

$$\\frac{1}{t} + \\frac{1}{t + 4} = \\frac{5}{24}$$

Multiply through by $24t(t + 4)$:

$$24(t + 4) + 24t = 5t(t + 4)$$

$$48t + 96 = 5t^{2} + 20t$$

$$0 = 5t^{2} - 28t - 96$$

The positive root of $5t^{2} - 28t - 96 = 0$ is

$$t = \\frac{28 + \\sqrt{784 + 1920}}{10} = \\frac{28 + 52}{10} = 8$$

The faster worker alone takes $8$ hours, not $10$. Check: $\\frac{1}{8} + \\frac{1}{12} = \\frac{5}{24}$. The statement is False.`,
      `**E.** → False

Let the middle integer be $n$. Four times the middle exceeds the product of the neighbours by $2$:

$$4n = (n - 1)(n + 1) + 2$$

$$4n = n^{2} - 1 + 2$$

$$n^{2} - 4n + 1 = 0$$

$$n = 2 \\pm \\sqrt{3}$$

Neither root is a perfect square. The middle integer from the property is not a perfect square, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 88,
    solution_overview: `Five independent quadratic claims. Pairs from sum and product, or from product and sum of squares. Together in $24/5$ hours with a $4$ hour gap recovers $8$ and $12$.`,
  },
  {
    id: `math-4-89`,
    case_id: `MATH 4.89`,
    title: `A $2$ m isolate-and-square gap, posts $1$ and $7$, and a radical extra`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 21} = 2 + \sqrt{x + 1}$, the sum of all admissible roots equals $17$.`,
      `For $\sqrt{x + 5} + \sqrt{x - 3} = 4$, the equation has exactly one real solution.`,
      `For $\lvert x - 1 \rvert + \lvert x - 7 \rvert = 6$, the sum of all admissible roots equals $2$.`,
      `For $\sqrt{x + 21} - \sqrt{x + 1} = 2$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 21} - \sqrt{x + 1} = 2$, the sum of all admissible roots equals $8$.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Isolate and square, with $x \\ge 0$:

$$\\sqrt{x + 21} = 2 + \\sqrt{x + 1}$$

$$x + 21 = 4 + 4\\sqrt{x + 1} + x + 1$$

$$16 = 4\\sqrt{x + 1}$$

$$4 = \\sqrt{x + 1}$$

$$x + 1 = 16$$

$$x = 15$$

The distance is $15$ m, not $9$ m. Check of $15$: $\\sqrt{36} - \\sqrt{16} = 6 - 4 = 2$. Nine would give $\\sqrt{30} - \\sqrt{10}$, which is not $2$. The statement is False.`,
      `**B.** → True

Let $a = \\sqrt{x + 5}$ and $b = \\sqrt{x - 3}$, so $a + b = 4$ and $a^{2} - b^{2} = 8$. Then $a - b = 2$. Together this gives $a = 3$ and $b = 1$, so $x = 4$. Check: $\\sqrt{9} + \\sqrt{1} = 4$. The statement is True.`,
      `**C.** → False

Between the posts the sum is constantly $6$. Outside, $x < 1$ gives $x = -1$ and $x > 7$ gives $x = 9$. The sites are $-1$ and $9$, not $0$ and $8$. The statement is False.`,
      `**D.** → False

Need $x \\neq 1$ and $x \\neq -2$. Multiply by $(x - 1)(x + 2)$:

$$x + 2 + x - 1 = (x - 1)(x + 2)$$

$$2x + 1 = x^{2} + x - 2$$

$$0 = x^{2} - x - 3$$

$$x = \\frac{1 \\pm \\sqrt{13}}{2}$$

Both roots are real and neither equals $1$ or $-2$, so there are two real solutions, not exactly one. The statement is False.`,
      `**E.** → False

Need $x - 1 \\ge 0$ and $2x + 6 \\ge 0$, so $x \\ge 1$. Squaring:

$$2x + 6 = (x - 1)^{2}$$

$$2x + 6 = x^{2} - 2x + 1$$

$$0 = x^{2} - 4x - 5$$

$$x^{2} - 4x - 5 = (x - 5)(x + 1)$$

$$x = 5$$

$$x = -1$$

Only $x = 5$ lies in the domain $x \\ge 1$, so there is exactly one real solution, not two. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 89,
    solution_overview: `Five independent 4.3 claims. Isolating $\\sqrt{x + 21} - \\sqrt{x + 1} = 2$ recovers $x = 15$. Squaring $\\sqrt{2x + 6} = x - 1$ drops $x = -1$.`,
  },
  {
    id: `math-4-90`,
    case_id: `MATH 4.90`,
    title: `A sum of two roots equal to $9$, three regions, and a $1$ m gap`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 12} + \sqrt{x + 3} = 9$, the sum of all admissible roots equals $2$.`,
      `For $\frac{3x^{2} - 1}{x(x^{2} - 1)} = \frac{13}{12}$, the equation has exactly one real solution.`,
      `For $\lvert 2x - 4 \rvert + \lvert x - 5 \rvert = 9$, the sum of all admissible roots equals $2$.`,
      `For $\left(x + 3\right)\left(x + 1\right) = 2x(x - 2)$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 8} = 1 + \sqrt{x}$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Let $a = \\sqrt{x + 12}$ and $b = \\sqrt{x + 3}$, so $a + b = 9$ and $a^{2} - b^{2} = 9$. Then

$$(a - b)(a + b) = 9$$

$$a - b = 1$$

Adding the two linear relations gives $2a = 10$, so $a = 5$ and $b = 4$. Then $x + 3 = 16$ and $x = 13$, not $4$. Check of $13$: $\\sqrt{25} + \\sqrt{16} = 9$. The statement is False.`,
      `**B.** → True

Need $x \\neq -1$, $x \\neq 0$, and $x \\neq 1$. Combine the first and last fraction:

$$\\frac{1}{x - 1} + \\frac{1}{x + 1} = \\frac{(x + 1) + (x - 1)}{(x - 1)(x + 1)}$$

$$= \\frac{2x}{x^{2} - 1}$$

So the left side is

$$\\frac{1}{x} + \\frac{2x}{x^{2} - 1}$$

Put over $x(x^{2} - 1)$:

$$\\frac{1}{x} = \\frac{x^{2} - 1}{x(x^{2} - 1)}$$

$$\\frac{2x}{x^{2} - 1} = \\frac{2x^{2}}{x(x^{2} - 1)}$$

So

$$\\frac{1}{x} + \\frac{2x}{x^{2} - 1} = \\frac{(x^{2} - 1) + 2x^{2}}{x(x^{2} - 1)}$$

$$= \\frac{3x^{2} - 1}{x(x^{2} - 1)}$$

Set equal to $\\frac{13}{12}$ and cross-multiply:

$$\\frac{3x^{2} - 1}{x(x^{2} - 1)} = \\frac{13}{12}$$

$$12(3x^{2} - 1) = 13x(x^{2} - 1)$$

$$36x^{2} - 12 = 13x^{3} - 13x$$

$$0 = 13x^{3} - 36x^{2} - 13x + 12$$

Factor out $(x - 3)$:

$$0 = (x - 3)(13x^{2} + 3x - 4)$$

So one root is $x = 3$ and the other two satisfy

$$13x^{2} + 3x - 4 = 0$$

$$\\Delta = 3^{2} - 4 \\cdot 13 \\cdot (-4)$$

$$\\Delta = 9 + 208 = 217$$

$$x = \\frac{-3 \\pm \\sqrt{217}}{26}$$

At $x = 0$ the polynomial gives $12 \\neq 0$, and at $x = 1$ it gives $-24 \\neq 0$, so none of the holes is a root. Therefore the equation has three real solutions, so the statement is True.`,
      `**C.** → False

Breakpoints are $x = 2$ and $x = 5$.

For $x \\le 2$:

$$|2x - 4| + |x - 5| = (4 - 2x) + (5 - x)$$

$$= 9 - 3x$$

$$9 - 3x = 9$$

$$x = 0$$

For $2 \\le x \\le 5$:

$$|2x - 4| + |x - 5| = (2x - 4) + (5 - x)$$

$$= x + 1$$

$$x + 1 = 9$$

$$x = 8$$

but $8 \\notin [2,5]$.

For $x \\ge 5$:

$$|2x - 4| + |x - 5| = (2x - 4) + (x - 5)$$

$$= 3x - 9$$

$$3x - 9 = 9$$

$$3x = 18$$

$$x = 6$$

So the equation has two real solutions $x = 0$ and $x = 6$, not exactly one. The statement is False.`,
      `**D.** → False

Need $x \\neq 2$ and $x \\neq -1$. Cross-multiply:

$$\\frac{x + 3}{x - 2} = \\frac{2x}{x + 1}$$

$$\\left(x + 3\\right)\\left(x + 1\\right) = 2x(x - 2)$$

$$x^{2} + 4x + 3 = 2x^{2} - 4x$$

$$0 = x^{2} - 8x - 3$$

$$x = \\frac{8 \\pm \\sqrt{64 + 12}}{2}$$

$$x = 4 \\pm \\sqrt{19}$$

Both roots are real and allowed, so there are two real solutions, not exactly one. The statement is False.`,
      `**E.** → False

Isolate and square, with $x \\ge 0$:

$$\\sqrt{x + 8} = 1 + \\sqrt{x}$$

$$x + 8 = 1 + 2\\sqrt{x} + x$$

$$7 = 2\\sqrt{x}$$

$$\\sqrt{x} = \\frac{7}{2}$$

$$x = \\frac{49}{4}$$

The distance is $\\frac{49}{4}$ m, not $16$ m. Sixteen would give $\\sqrt{24} - 4$, which is not $1$. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 90,
    solution_overview: `Five independent 4.3 claims. A sum of two square roots recovers $x = 13$. A three-term reciprocal sum holds at $x = 3$. A two-piece absolute-value sum has two outer roots.`,
  },
  {
    id: `math-4-91`,
    case_id: `MATH 4.91`,
    title: `A $1$ m radical gap, a two-modulus sum, and a cancelled hole`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 5} = 1 + \sqrt{x - 2}$, the sum of all admissible roots equals $11$.`,
      `For $\sqrt{x + 5} - \sqrt{x - 2} = 1$, the equation has no real solution.`,
      `For $\sqrt{x + 5} - \sqrt{x - 2} = 1$, exactly one admissible root satisfies the equation.`,
      `For $\sqrt{x + 5} - \sqrt{x - 2} = 1$, the equation has no admissible real solution.`,
      `For $\sqrt{x + 5} - \sqrt{x - 2} = 1$, the equation has two distinct real solutions.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Isolate and square, with $x \\ge 2$:

$$\\sqrt{x + 5} = 1 + \\sqrt{x - 2}$$

$$x + 5 = 1 + 2\\sqrt{x - 2} + x - 2$$

$$6 = 2\\sqrt{x - 2}$$

$$3 = \\sqrt{x - 2}$$

$$x - 2 = 9$$

$$x = 11$$

Check: $\\sqrt{16} - \\sqrt{9} = 4 - 3 = 1$. The distance is $11$ m, so the statement is True.`,
      `**B.** → False

Breakpoints are $x = 3$ and $x = -\\frac{1}{2}$.

For $x \\ge 3$:

$$|x - 3| + |2x + 1| = (x - 3) + (2x + 1)$$

$$= 3x - 2$$

$$3x - 2 = 11$$

$$3x = 13$$

$$x = \\frac{13}{3}$$

For $-\\frac{1}{2} \\le x \\le 3$:

$$|x - 3| + |2x + 1| = (3 - x) + (2x + 1)$$

$$= x + 4$$

$$x + 4 = 11$$

$$x = 7$$

but $7 \\notin \\left[-\\frac{1}{2},3\\right]$.

For $x \\le -\\frac{1}{2}$:

$$|x - 3| + |2x + 1| = (3 - x) + (-(2x + 1))$$

$$= 3 - x - 2x - 1$$

$$= 2 - 3x$$

$$2 - 3x = 11$$

$$-3x = 9$$

$$x = -3$$

So there are two real solutions $x = \\frac{13}{3}$ and $x = -3$, not exactly one. The statement is False.`,
      `**C.** → False

Need $x \\neq -1$ and $x \\neq 1$. Multiply by $(x + 1)(x - 1)$:

$$2(x - 1) - 3(x + 1) = (x + 1)(x - 1)$$

$$2x - 2 - 3x - 3 = x^{2} - 1$$

$$-x - 5 = x^{2} - 1$$

$$0 = x^{2} + x + 4$$

$$\\Delta = 1 - 4 \\cdot 1 \\cdot 4$$

$$\\Delta = 1 - 16 = -15$$

Negative discriminant means there are no real solutions. So the statement is False.`,
      `**D.** → False

Need $4x - 3 \\ge 0$, so $x \\ge \\frac{3}{4}$.

Also $\\sqrt{4x - 3} = x - 1$ has left side nonnegative, so $x - 1 \\ge 0$ and $x \\ge 1$.

Squaring:

$$4x - 3 = (x - 1)^{2}$$

$$4x - 3 = x^{2} - 2x + 1$$

$$0 = x^{2} - 6x + 4$$

$$x = 3 \\pm \\sqrt{5}$$

But $3 - \\sqrt{5} \\lt 1$, so it violates the domain condition $x \\ge 1$. Only $3 + \\sqrt{5}$ is allowed, so there is exactly one real solution, not two. The statement is False.`,
      `**E.** → False

At $x = 3$ the left side is undefined. For $x \\neq 3$ the equation becomes $x + 3 = x + 5$, hence $3 = 5$, which never holds. There are no real solutions. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 91,
    solution_overview: `Five independent 4.3 checks. Isolating $\\sqrt{x + 5} - \\sqrt{x - 2} = 1$ recovers $x = 11$. Cancelling $x - 3$ in $\\frac{x^{2} - 9}{x - 3} = x + 5$ leaves a contradiction, not two roots.`,
  },
  {
    id: `math-4-92`,
    case_id: `MATH 4.92`,
    title: `A sum of roots equal to $7$, equal abs-values, and a two-fraction mix`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 15} + \sqrt{x + 8} = 7$, the sum of all admissible roots equals $1$.`,
      `For $\lvert 3 - 2x \rvert = \lvert x + 4 \rvert$, the equation has two distinct admissible real solutions.`,
      `For $\frac{3}{x(x + 3)} = \frac{1}{4}$, the sum of all admissible roots equals $2$.`,
      `For $2x + 1 = x^{2} - 8x + 16$, the equation has exactly one admissible real solution.`,
      `For $\left(2x - 1\right)(x - 1) + (x - 3)(x + 2) = 3(x + 2)(x - 1)$, the sum of all admissible roots equals $0$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let $a = \\sqrt{x + 15}$ and $b = \\sqrt{x + 8}$, so $a + b = 7$ and $a^{2} - b^{2} = 7$. Then $a - b = 1$, hence $a = 4$ and $b = 3$, so $x = 1$. Check: $\\sqrt{16} + \\sqrt{9} = 7$. The statement is True.`,
      `**B.** → False

Split the absolute values into two cases:

$$3 - 2x = x + 4$$

$$-3x = 1$$

$$x = -\\frac{1}{3}$$

and

$$3 - 2x = -x - 4$$

$$7 = x$$

$$x = 7$$

So there are two real solutions $x = -\\frac{1}{3}$ and $x = 7$, not exactly one. The statement is False.`,
      `**C.** → False

Need $x \\neq 0$ and $x \\neq -3$. Combine the two fractions:

$$\\frac{1}{x} - \\frac{1}{x + 3} = \\frac{(x + 3) - x}{x(x + 3)}$$

$$= \\frac{3}{x(x + 3)}$$

Set equal to $\\frac{1}{4}$:

$$\\frac{3}{x(x + 3)} = \\frac{1}{4}$$

$$12 = x(x + 3)$$

$$12 = x^{2} + 3x$$

$$0 = x^{2} + 3x - 12$$

$$\\Delta = 3^{2} - 4 \\cdot 1 \\cdot (-12)$$

$$\\Delta = 9 + 48 = 57$$

$$x = \\frac{-3 \\pm \\sqrt{57}}{2}$$

The discriminant is positive, so there are two real solutions, not exactly one. The statement is False.`,
      `**D.** → True

Domain comes from the square root and the sign of the right-hand side:

$$2x + 1 \\ge 0$$

$$x \\ge -\\frac{1}{2}$$

$$4 - x \\ge 0$$

$$x \\le 4$$

So $-\\frac{1}{2} \\le x \\le 4$.

Squaring:

$$2x + 1 = (4 - x)^{2}$$

$$2x + 1 = x^{2} - 8x + 16$$

$$0 = x^{2} - 10x + 15$$

$$x = 5 \\pm \\sqrt{10}$$

The root $5 + \\sqrt{10}$ exceeds $4$, so it is not in the domain. The root $5 - \\sqrt{10}$ is in $-\\frac{1}{2} \\le x \\le 4$. Therefore the equation has exactly one real solution, so the statement is True.`,
      `**E.** → True

Need $x \\neq -2$ and $x \\neq 1$. Multiply by $(x + 2)(x - 1)$:

$$\\left(2x - 1\\right)(x - 1) + (x - 3)(x + 2) = 3(x + 2)(x - 1)$$

$$2x^{2} - 3x + 1 + x^{2} - x - 6 = 3x^{2} + 3x - 6$$

$$3x^{2} - 4x - 5 = 3x^{2} + 3x - 6$$

$$-4x - 5 = 3x - 6$$

$$-7x = -1$$

$$x = \\frac{1}{7}$$

This value is allowed because $\\frac{1}{7} \\neq -2$ and $\\frac{1}{7} \\neq 1$. So the equation has exactly one real solution, hence the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 92,
    solution_overview: `Five independent 4.3 claims. A sum of two square roots recovers $x = 1$. Equal abs-values give two cases. The radical equation leaves one in-domain root, and the rational equation leaves one allowed solution $x = 1/7$.`,
  },
  {
    id: `math-4-93`,
    case_id: `MATH 4.93`,
    title: `A $2$ m gap recovering $25$, posts adding to $12$, and $\\sqrt{5x + 1}$`,
    subsection: `4.3`,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $\sqrt{x + 24} = 2 + \sqrt{x}$, the sum of all admissible roots equals $25$.`,
      `For $\sqrt{x + 24} - \sqrt{x} = 2$, the equation has two distinct admissible real solutions.`,
      `For $\sqrt{x + 24} - \sqrt{x} = 2$, the sum of all admissible roots equals $2$.`,
      `For $\sqrt{x + 24} - \sqrt{x} = 2$, the equation has no admissible real solution.`,
      `For $x^{2} + 8x + 15 - (x^{2} - 3x + 2) = 2(x^{2} + 2x - 3)$, the sum of all admissible roots equals $2$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Isolate and square, with $x \\ge 0$:

$$\\sqrt{x + 24} = 2 + \\sqrt{x}$$

$$x + 24 = 4 + 4\\sqrt{x} + x$$

$$20 = 4\\sqrt{x}$$

$$5 = \\sqrt{x}$$

$$x = 25$$

Check: $\\sqrt{49} - \\sqrt{25} = 7 - 5 = 2$. The distance is $25$ m, so the statement is True.`,
      `**B.** → False

Between $-2$ and $6$ the sum is constantly $8$. Outside, $x < -2$ recovers $x = -4$ and $x > 6$ recovers $x = 8$. The sites are $-4$ and $8$, not $0$ and $8$. At kilometre $0$ the sum is $8$, not $12$. The statement is False.`,
      `**C.** → False

Need $x \\neq -1$ and $x \\neq 3$. Multiply through by $(x - 3)(x + 1)$:

$$2(x + 1) - 1(x - 3) = (x - 3)(x + 1)$$

$$2x + 2 - x + 3 = x^{2} - 2x - 3$$

$$x + 5 = x^{2} - 2x - 3$$

$$0 = x^{2} - 3x - 8$$

$$x = \\frac{3 \\pm \\sqrt{41}}{2}$$

These are two distinct real values, so there are two real solutions, not exactly one. The statement is False.`,
      `**D.** → False

The square root needs $5x + 1 \\ge 0$, so $x \\ge -\\frac{1}{5}$. The right-hand side $x + 1$ must be nonnegative, so $x \\ge -1$. The tighter of those is $x \\ge -\\frac{1}{5}$. Squaring both sides of $\\sqrt{5x + 1} = x + 1$ gives

$$5x + 1 = (x + 1)^{2}$$

$$5x + 1 = x^{2} + 2x + 1$$

$$0 = x^{2} - 3x$$

$$x(x - 3) = 0$$

so $x = 0$ or $x = 3$. Both lie in the domain, so there are two real solutions, not exactly one. The statement is False.`,
      `**E.** → False

Need $x \\neq 1$ and $x \\neq -3$. Multiply through by $(x - 1)(x + 3)$:

$$ (x + 5)(x + 3) - (x - 2)(x - 1) = 2(x - 1)(x + 3) $$

$$x^{2} + 8x + 15 - (x^{2} - 3x + 2) = 2(x^{2} + 2x - 3)$$

$$11x + 13 = 2x^{2} + 4x - 6$$

$$0 = 2x^{2} - 7x - 19$$

$$x = \\frac{7 \\pm \\sqrt{201}}{4}$$

The discriminant $201$ is positive, so both roots are real. Therefore the equation has real solutions, not none. The statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 93,
    solution_overview: `Five independent closing 4.3 claims. Isolating $\\sqrt{x + 24} - \\sqrt{x} = 2$ recovers $x = 25$. $\\sqrt{5x + 1} = x + 1$ keeps both $0$ and $3$.`,
  },
  ...MATH_CH4_4_EXPONENTIAL,
];
