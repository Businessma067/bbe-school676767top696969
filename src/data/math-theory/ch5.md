# Chapter 5 — Linear equations in two unknowns

This chapter is the full theory of linear equations with two unknowns and of systems built from them. It starts from the very beginning, with what an equation is and what it means to solve one, and then builds up to systems, their geometry, every standard solving method, and hard multi step problems. If you have never solved a system before, start at the first section and read straight through. Nothing here assumes you remember anything beyond adding, multiplying and moving terms across an equals sign.

## Learning objectives

- Understand what an equation is, what a solution is, and why moving terms is allowed.
- Define a linear equation in two unknowns and describe its whole solution set.
- Read a system of two equations and say exactly what solving it means.
- See the three geometric cases: lines that cross, lines that are parallel, and one line written twice.
- Use only transformations that keep the solution set unchanged.
- Solve systems by substitution, by elimination, by comparison, and by graph.
- Decide from the coefficients alone whether there is one solution, none, or infinitely many.
- Handle untidy systems with brackets, fractions, decimals and unknowns in denominators.
- Turn hard word problems into systems, solve them, and read the answer back into the story.

---

## 5.1 Starting from zero: equations with one unknown

### What an equation is

An **equation** is a statement that two amounts are equal, with at least one number missing. The missing number is written as a letter and called the **unknown**.

$$
3x + 4 = 19.
$$

This says: some number $x$, multiplied by $3$, then increased by $4$, gives $19$. To **solve** the equation means to find every value of $x$ that makes the statement true.

Think of an equation as a balance scale. The left side sits in one pan, the right side in the other, and they are level. As long as you do the same thing to both pans, the scale stays level. That single idea is the whole method.

### Solving step by step

$$
3x + 4 = 19.
$$

Take $4$ away from both sides. The scale stays level:

$$
3x = 15.
$$

Divide both sides by $3$:

$$
x = 5.
$$

Now check the answer in the original equation, because that is the only place where a mistake cannot hide:

$$
3(5) + 4 = 19. \quad \text{True.}
$$

### Two words you will keep meeting

A **term** is a single piece of the expression, such as $3x$ or $4$. A **coefficient** is the number multiplying a letter, so in $3x$ the coefficient is $3$.

The important lesson from this section is that one equation with one unknown normally pins the unknown down to a single value. That is exactly what stops working when a second unknown appears, and dealing with that is what the rest of the chapter is about.

---

## 5.2 One equation, two unknowns

### The definition

An equation is **linear in two unknowns** when it can be written as

$$
ax + by = c,
$$

where $x$ and $y$ are the unknowns, and $a$, $b$, $c$ are given numbers with $a$ and $b$ not both zero. The numbers $a$ and $b$ are the **coefficients**, and $c$ is the **constant term**.

The word linear means that each unknown appears only to the first power. Nothing is squared, the unknowns are never multiplied together, and no unknown sits inside a root or under a fraction bar.

| Equation | Linear in two unknowns? | Reason |
| --- | --- | --- |
| $3x + 5y = 12$ | Yes | Both unknowns to the first power |
| $y = 4 - 2x$ | Yes | Rearranges to $2x + y = 4$ |
| $x^2 + y = 4$ | No | $x$ is squared |
| $xy = 6$ | No | The unknowns are multiplied together |
| $\dfrac{1}{x} + y = 1$ | No | $x$ sits in a denominator |
| $\sqrt{y} + x = 3$ | No | $y$ is under a root |

### What a solution looks like now

With two unknowns, a single number cannot be an answer. You have to say what $x$ is **and** what $y$ is at the same time. So a **solution** is an ordered pair $(x, y)$ that makes the equation true. The order matters: $(1,3)$ means $x = 1$ and $y = 3$, while $(3,1)$ means the opposite.

**Example 1.** Look at

$$
2x + y = 7.
$$

Test $(2,3)$: $2(2) + 3 = 7$, true, so it is a solution. Test $(1,5)$: $2(1) + 5 = 7$, also true, so it is a solution too. Test $(2,4)$: $2(2) + 4 = 8$, false, so it is not a solution.

### Why there are infinitely many solutions

Choose any value you like for $x$. The equation then becomes an ordinary one unknown equation for $y$, and it always has an answer. So you can never run out of solutions.

**Example 2.** Rearrange $2x + y = 7$ into

$$
y = 7 - 2x,
$$

then feed in values of $x$.

| $x$ | $y = 7 - 2x$ | Solution pair |
| --- | --- | --- |
| $0$ | $7$ | $(0,7)$ |
| $1$ | $5$ | $(1,5)$ |
| $2$ | $3$ | $(2,3)$ |
| $3$ | $1$ | $(3,1)$ |
| $-1$ | $9$ | $(-1,9)$ |
| $\tfrac12$ | $6$ | $\left(\tfrac12, 6\right)$ |

The table could go on forever, and fractions and negatives are allowed. So one linear equation in two unknowns does not have "the answer". It has an endless family of answers.

**Example 3.** The same works with bigger coefficients. From

$$
3x - 5y = 15
$$

we get $y = \dfrac{3x - 15}{5}$. Then $x = 0$ gives $y = -3$, $x = 5$ gives $y = 0$, and $x = 10$ gives $y = 3$. Values of $x$ that are not multiples of $5$ still work, they just give fractional $y$, as with $x = 1$ and $y = -\dfrac{12}{5}$.

---

## 5.3 The picture of one equation

### The graph is a straight line

Plot every solution pair as a point in the coordinate plane and you get a straight line. That is why these equations are called linear, and it is the reason the geometry in the next sections works so well.

The fastest way to draw the line of $ax + by = c$ is to use the two intercepts.

1. Put $x = 0$ and find $y$. That is the point where the line meets the vertical axis.
2. Put $y = 0$ and find $x$. That is the point where it meets the horizontal axis.
3. Draw the line through those two points.

**Example 1.** For $3x - 5y = 15$, putting $x = 0$ gives $y = -3$, so the line passes through $(0,-3)$. Putting $y = 0$ gives $x = 5$, so it passes through $(5,0)$. Two points are enough to fix a straight line.

### Slope form

When $b \neq 0$, solve for $y$:

$$
y = -\frac{a}{b}x + \frac{c}{b}.
$$

This is the familiar shape $y = mx + n$, where $m$ is the **slope**, meaning how steeply the line rises, and $n$ is the value of $y$ when $x = 0$.

For $3x - 5y = 15$ this becomes $y = \dfrac{3}{5}x - 3$, so the slope is $\dfrac35$ and the line crosses the vertical axis at $-3$.

### The two flat cases

If $b = 0$, the equation is $ax = c$, so $x = \dfrac{c}{a}$ and $y$ is free. The graph is a vertical line, for example $2x = 8$ giving the line $x = 4$.

If $a = 0$, the equation is $by = c$, so $y = \dfrac{c}{b}$ and $x$ is free. The graph is a horizontal line, for example $3y = -9$ giving the line $y = -3$.

Keep this in mind: **one equation gives a whole line of possibilities**. To land on a single point, you need a second piece of information.

---

## 5.4 Systems: two equations at once

### The definition

A **system of two linear equations in two unknowns** is a pair of equations that have to be true at the same time:

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2.
\end{cases}
$$

The brace is read as "and", not "or". Both lines of the system talk about the same $x$ and the same $y$. Such equations are also called **simultaneous equations**, because they hold simultaneously.

A **solution of the system** is an ordered pair $(x,y)$ that satisfies **both** equations. The set of all such pairs is the **solution set**, and solving the system means describing that set completely.

**Example 1.** Take

$$
\begin{cases}
2x + y = 7,\\
x - y = 2.
\end{cases}
$$

Check $(3,1)$. First equation: $2(3) + 1 = 7$, true. Second: $3 - 1 = 2$, true. So $(3,1)$ is a solution of the system.

Now check $(1,5)$. It satisfies the first equation, since $2(1) + 5 = 7$, but the second gives $1 - 5 = -4$, not $2$. A pair that fits only one equation is worthless here. Both conditions must hold.

### Why two facts are usually needed

Each equation on its own allows a whole line of pairs. Demanding both at once cuts that freedom down hard, and normally exactly one pair survives. That is the practical rule you will use constantly: two unknowns usually need two independent facts.

The word independent matters. "The sum of two numbers is $10$" and "twice their sum is $20$" are the same fact said twice, so they still leave a whole line of possibilities.

---

## 5.5 The geometry of a system

Each equation is a line, and a solution of the system is a point shared by both lines. Two straight lines in a plane can sit in exactly three ways, so a system has exactly three possible outcomes.

| Position of the lines | Number of solutions | Name |
| --- | --- | --- |
| They cross at one point | Exactly one | Consistent and independent |
| They are parallel and different | None | Inconsistent |
| They lie on top of each other | Infinitely many | Consistent and dependent |

### Case 1: they cross once

Different slopes force the lines to meet, and two straight lines can only meet once.

**Example 1.**

$$
\begin{cases}
y = 2x + 1,\\
y = -x + 7.
\end{cases}
$$

The slopes $2$ and $-1$ are different. At the meeting point both formulas give the same $y$, so

$$
2x + 1 = -x + 7,
$$

$$
3x = 6, \qquad x = 2,
$$

and then $y = 2(2) + 1 = 5$. The unique solution is $(2,5)$.

### Case 2: no solution

Equal slopes with different starting heights give parallel lines that never touch.

**Example 2.**

$$
\begin{cases}
y = 3x + 2,\\
y = 3x - 4.
\end{cases}
$$

If some $x$ worked in both, then $3x + 2 = 3x - 4$, which simplifies to $2 = -4$. That is impossible, so there is no solution. The system is inconsistent, and the two facts contradict each other.

### Case 3: infinitely many solutions

Sometimes the second equation is only the first one in disguise.

**Example 3.**

$$
\begin{cases}
x + 2y = 4,\\
3x + 6y = 12.
\end{cases}
$$

Multiply the first equation by $3$ and you get the second one exactly. So the second equation carries no new information, and every point of the line $x + 2y = 4$ solves the system. You can describe the answer as $x = 4 - 2t$, $y = t$, where $t$ is any number.

The habit to build here is that "no solution" and "infinitely many solutions" are real answers, not signs that you made a mistake. Later sections show how each one shows up in the algebra.

---

## 5.6 Moves that are allowed

Two systems are **equivalent** when they have exactly the same solution set. Every solving method works the same way: replace the system by an easier equivalent system, again and again, until the answer is obvious.

These moves never change the solution set.

1. **Swap the two equations.** Order was never part of the meaning.
2. **Add or subtract the same amount on both sides of one equation.** The balance stays level.
3. **Multiply or divide one whole equation by a number that is not zero.** Doubling both sides of a true equality keeps it true.
4. **Replace one equation by its sum with, or difference from, the other equation.** If two statements are both true, their sum is true as well.
5. **Simplify one side without changing its value**, for example by expanding brackets or collecting like terms.

Two moves are forbidden, and both are common in real mistakes.

Multiplying an equation by zero turns it into $0 = 0$, which is true for everything and so throws the information away. And multiplying only part of a side breaks the equality, which is the single most frequent error in this chapter.

**Example 1.** To clear fractions in

$$
\frac{x}{2} + \frac{y}{3} = 1,
$$

multiply **every term** by $6$:

$$
3x + 2y = 6.
$$

**Example 2.** Scaling $2x + 3y = 12$ by $3$ gives

$$
6x + 9y = 36,
$$

not $6x + 9y = 12$. The right side is part of the equation and must be multiplied too.

---

## 5.7 Substitution

Substitution turns a system into a single equation with one unknown, which you already know how to handle from §5.1.

The plan:

1. Pick one equation and express one unknown in terms of the other.
2. Put that expression into the **other** equation.
3. Solve the resulting one unknown equation.
4. Substitute the value back to get the second unknown.
5. Write the answer as an ordered pair, then check it in both original equations.

Step 2 is the one people get wrong. Putting the expression back into the same equation it came from gives $0 = 0$ and tells you nothing.

**Example 1 (a gentle start).**

$$
\begin{cases}
y = 2x - 1,\\
3x + 2y = 12.
\end{cases}
$$

The first equation already tells us what $y$ is, so replace $y$ in the second:

$$
3x + 2(2x - 1) = 12,
$$

$$
3x + 4x - 2 = 12,
$$

$$
7x = 14, \qquad x = 2.
$$

Then $y = 2(2) - 1 = 3$. The solution is $(2,3)$, and the check gives $3(2) + 2(3) = 12$, true.

**Example 2 (isolate a coefficient of one).**

$$
\begin{cases}
x - 3y = 7,\\
4x + 5y = 45.
\end{cases}
$$

In the first equation $x$ has coefficient $1$, so isolating it costs nothing:

$$
x = 7 + 3y.
$$

Substitute into the second equation:

$$
4(7 + 3y) + 5y = 45,
$$

$$
28 + 12y + 5y = 45,
$$

$$
17y = 17, \qquad y = 1,
$$

and then $x = 7 + 3(1) = 10$. The solution is $(10,1)$. Check: $10 - 3 = 7$ and $4(10) + 5 = 45$, both true.

**Example 3 (fractions on the way, whole numbers at the end).**

$$
\begin{cases}
3x + 2y = 8,\\
5x - 4y = 6.
\end{cases}
$$

No coefficient is $1$, so something fractional will appear. Isolate $y$ in the first equation:

$$
y = \frac{8 - 3x}{2}.
$$

Substitute into the second equation:

$$
5x - 4 \cdot \frac{8 - 3x}{2} = 6.
$$

The $4$ and the $2$ cancel, which is why isolating $y$ here was smart:

$$
5x - 2(8 - 3x) = 6,
$$

$$
5x - 16 + 6x = 6,
$$

$$
11x = 22, \qquad x = 2,
$$

and then $y = \dfrac{8 - 6}{2} = 1$. The solution is $(2,1)$. Check the second equation: $5(2) - 4(1) = 6$, true.

**Example 4 (harder, negative answer, ugly middle).**

$$
\begin{cases}
4x + 7y = -2,\\
5x - 2y = 19.
\end{cases}
$$

Isolate $x$ in the second equation:

$$
x = \frac{19 + 2y}{5}.
$$

Substitute into the first:

$$
4 \cdot \frac{19 + 2y}{5} + 7y = -2.
$$

Multiply the whole equation by $5$ to clear the fraction, and remember the right side:

$$
4(19 + 2y) + 35y = -10,
$$

$$
76 + 8y + 35y = -10,
$$

$$
43y = -86, \qquad y = -2.
$$

Then $x = \dfrac{19 + 2(-2)}{5} = \dfrac{15}{5} = 3$. The solution is $(3,-2)$. Check both: $4(3) + 7(-2) = -2$ and $5(3) - 2(-2) = 19$, both true.

**Example 5 (how the special cases appear).** In

$$
\begin{cases}
y = 3x + 2,\\
-6x + 2y = 1,
\end{cases}
$$

substitution gives

$$
-6x + 2(3x + 2) = 1,
$$

$$
-6x + 6x + 4 = 1,
$$

$$
4 = 1.
$$

Both unknowns vanished and what is left is false, so the system has no solution. If the second equation had been $-6x + 2y = 4$, the same steps would end at $4 = 4$, which is always true, and the system would have infinitely many solutions.

Substitution is the natural choice when a coefficient is $1$ or $-1$, or when one equation is already written as $y = \ldots$ or $x = \ldots$.

---

## 5.8 Elimination

Elimination removes one unknown by adding or subtracting whole equations. It is usually the faster method when no coefficient is $1$.

The plan:

1. Write both equations as $ax + by = c$.
2. Simplify each one, and divide by a common factor if you can.
3. Scale one or both equations so that one unknown has equal or opposite coefficients.
4. Subtract when they are equal, add when they are opposite. That unknown disappears.
5. Solve for the remaining unknown, substitute back, and check.

**Example 1 (coefficients already match).**

$$
\begin{cases}
5x + 2y = 24,\\
3x + 2y = 16.
\end{cases}
$$

The $y$ terms are identical, so subtract the second equation from the first:

$$
(5x - 3x) + (2y - 2y) = 24 - 16,
$$

$$
2x = 8, \qquad x = 4.
$$

Substituting into $3x + 2y = 16$ gives $2y = 4$, so $y = 2$. The solution is $(4,2)$.

**Example 2 (scale both equations, then add).**

$$
\begin{cases}
2x + 3y = 16,\\
5x - 2y = 2.
\end{cases}
$$

To remove $y$, make the $y$ coefficients $6$ and $-6$. Multiply the first equation by $2$ and the second by $3$:

$$
\begin{cases}
4x + 6y = 32,\\
15x - 6y = 6.
\end{cases}
$$

The $y$ terms are now opposite, so add:

$$
19x = 38, \qquad x = 2.
$$

From $2x + 3y = 16$ we get $3y = 12$, so $y = 4$. The solution is $(2,4)$. Check: $5(2) - 2(4) = 2$, true.

**Example 3 (use the least common multiple).**

$$
\begin{cases}
6x - 5y = 3,\\
4x + 3y = 21.
\end{cases}
$$

To remove $x$, use the least common multiple of $6$ and $4$, which is $12$. Multiply the first equation by $2$ and the second by $3$:

$$
\begin{cases}
12x - 10y = 6,\\
12x + 9y = 63.
\end{cases}
$$

Now the $x$ terms are equal, so subtract the first from the second:

$$
19y = 57, \qquad y = 3.
$$

From $4x + 3(3) = 21$ we get $4x = 12$, so $x = 3$. The solution is $(3,3)$. Check the first equation: $6(3) - 5(3) = 3$, true.

**Example 4 (harder, big scaling and a negative answer).**

$$
\begin{cases}
7x + 9y = 8,\\
5x - 4y = 37.
\end{cases}
$$

Remove $y$. The least common multiple of $9$ and $4$ is $36$, so multiply the first equation by $4$ and the second by $9$:

$$
\begin{cases}
28x + 36y = 32,\\
45x - 36y = 333.
\end{cases}
$$

Add them:

$$
73x = 365, \qquad x = 5.
$$

From $7(5) + 9y = 8$ we get $9y = -27$, so $y = -3$. The solution is $(5,-3)$. Check the second equation: $5(5) - 4(-3) = 25 + 12 = 37$, true.

### Two habits that prevent errors

Shrink before you grow. In $4x + 6y = 22$ every term is even, so divide by $2$ and work with $2x + 3y = 11$. Smaller numbers mean fewer slips.

Subtract complete sides, not single terms. For example

$$
(2x + 3y) - (5x - 2y) = 2x + 3y - 5x + 2y = -3x + 5y.
$$

Notice that $-2y$ became $+2y$. Forgetting that sign flip is the classic elimination mistake, and writing the subtraction in brackets first prevents it.

Just like substitution, elimination announces the special cases. A leftover statement such as $0 = 7$ means no solution, and $0 = 0$ means infinitely many.

---

## 5.9 Comparison and graphing

### Comparison

When both equations give the same unknown, set the two expressions equal to each other.

**Example 1.**

$$
\begin{cases}
y = 4x - 3,\\
y = x + 6.
\end{cases}
$$

Both right sides equal $y$, so they equal each other:

$$
4x - 3 = x + 6,
$$

$$
3x = 9, \qquad x = 3,
$$

and $y = 3 + 6 = 9$. The solution is $(3,9)$.

This is substitution wearing different clothes, and it is the quickest route when both equations are already solved for the same unknown.

### Graphing

Draw both lines and read off the crossing point. Graphing is excellent for understanding, and it shows instantly which of the three cases you are in, because you can see whether the lines cross, run parallel, or coincide.

Its weakness is precision. A solution like $\left(\dfrac{7}{3}, \dfrac{4}{3}\right)$ cannot be read reliably off a hand drawn picture. So use the graph to see what is going on, and then confirm exact values with substitution or elimination.

---

## 5.10 Counting solutions from the coefficients

Sometimes the question is not "what is the solution" but "how many solutions are there". You can answer that without solving anything.

For the system

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2,
\end{cases}
$$

compare the ratios of matching coefficients.

| Condition | Lines | Solutions |
| --- | --- | --- |
| $\dfrac{a_1}{a_2} \neq \dfrac{b_1}{b_2}$ | Cross at one point | Exactly one |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$ | Parallel and different | None |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | The same line | Infinitely many |

The idea behind the table is simple. The first two ratios compare the directions of the lines, and the third compares their positions. Same direction and different position means parallel. Same direction and same position means one line.

Ratios need non zero denominators, so there is a division free version of the same test. Compute

$$
D = a_1b_2 - a_2b_1,
$$

called the **determinant** of the system. If $D \neq 0$, there is exactly one solution. If $D = 0$, the lines have the same direction, and the constants decide whether there is no solution or infinitely many.

**Example 1.**

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 11.
\end{cases}
$$

Here $\dfrac24 = \dfrac36 = \dfrac12$, but $\dfrac{5}{11} \neq \dfrac12$. The lines are parallel, so there is no solution. The determinant agrees: $D = 2(6) - 4(3) = 0$.

**Example 2.**

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 10.
\end{cases}
$$

Now all three ratios equal $\dfrac12$, so the two equations describe one line and there are infinitely many solutions.

### Harder work: systems with a letter in the coefficients

These problems look intimidating and are actually just the table above, read backwards.

**Example 3.** For which value of $k$ does the system

$$
\begin{cases}
3x - ky = 7,\\
6x - 4y = 5
\end{cases}
$$

have no solution?

No solution needs the direction ratios equal and the constant ratio different. So

$$
\frac{3}{6} = \frac{-k}{-4} = \frac{k}{4}, \qquad \frac{k}{4} = \frac12, \qquad k = 2.
$$

Check the constants: $\dfrac{7}{5} \neq \dfrac12$, so with $k = 2$ the lines really are parallel and there is no solution. For every other $k$ the directions differ, so there is exactly one solution, and no value of $k$ gives infinitely many.

**Example 4.** For which $m$ and $n$ does

$$
\begin{cases}
2x + 3y = 7,\\
mx + 9y = n
\end{cases}
$$

have infinitely many solutions?

All three ratios must match:

$$
\frac{2}{m} = \frac{3}{9} = \frac{7}{n} = \frac13.
$$

From $\dfrac{2}{m} = \dfrac13$ we get $m = 6$, and from $\dfrac{7}{n} = \dfrac13$ we get $n = 21$. So the second equation must be $6x + 9y = 21$, which is exactly three times the first.

**Example 5.** For which $k$ does

$$
\begin{cases}
kx + 2y = 6,\\
3x - y = 4
\end{cases}
$$

have exactly one solution?

Use the determinant: $D = k(-1) - 3(2) = -k - 6$. One solution requires $D \neq 0$, so $k \neq -6$. When $k = -6$ the first equation becomes $-6x + 2y = 6$, that is $-3x + y = 3$, while the second says $-3x + y = -4$. Those contradict each other, so $k = -6$ gives no solution.

---

## 5.11 Untidy systems and useful tricks

Real questions rarely arrive in standard form. Clean up first, choose a method second.

### Brackets

Expand everything, then collect like terms.

**Example 1.** From

$$
2(x + 3y) - (x - y) = 10
$$

we get $2x + 6y - x + y = 10$, so $x + 7y = 10$. Watch the minus sign in front of the bracket, since it flips both terms inside.

### Fractions

Multiply every term by a common denominator.

**Example 2.**

$$
\begin{cases}
\dfrac{x}{2} + \dfrac{y}{3} = 8,\\
\dfrac{x}{4} - \dfrac{y}{2} = 0.
\end{cases}
$$

Multiply the first equation by $6$ and the second by $4$:

$$
\begin{cases}
3x + 2y = 48,\\
x - 2y = 0.
\end{cases}
$$

The second equation says $x = 2y$. Substituting gives $6y + 2y = 48$, so $y = 6$ and $x = 12$. The solution is $(12,6)$.

### Decimals

Multiply by a power of ten chosen by the longest decimal.

**Example 3.** The equation $0.3x + 0.05y = 1.2$ has two decimal places at most, so multiply by $100$:

$$
30x + 5y = 120,
$$

and then divide by $5$ to get $6x + y = 24$.

### Proportions

An equation given as a ratio becomes linear after cross multiplication.

**Example 4.** From

$$
\frac{x + 1}{y + 2} = \frac34
$$

we get $4(x + 1) = 3(y + 2)$, so $4x + 4 = 3y + 6$ and finally $4x - 3y = 2$.

### Unknowns in denominators

An equation like $\dfrac{3}{x} + \dfrac{2}{y} = 2$ is not linear in $x$ and $y$. But it is linear in $\dfrac1x$ and $\dfrac1y$, and that is enough.

**Example 5.** Solve

$$
\begin{cases}
\dfrac{3}{x} + \dfrac{2}{y} = 2,\\
\dfrac{9}{x} - \dfrac{4}{y} = 1.
\end{cases}
$$

Let $u = \dfrac1x$ and $v = \dfrac1y$. The system becomes ordinary:

$$
\begin{cases}
3u + 2v = 2,\\
9u - 4v = 1.
\end{cases}
$$

Multiply the first equation by $2$ to get $6u + 4v = 4$, then add the second:

$$
15u = 5, \qquad u = \frac13.
$$

Then $3\left(\dfrac13\right) + 2v = 2$ gives $v = \dfrac12$. Now translate back: $x = \dfrac1u = 3$ and $y = \dfrac1v = 2$. Check the second original equation: $\dfrac93 - \dfrac42 = 3 - 2 = 1$, true.

Two warnings for this trick. Never lose the final translation step, because $u$ and $v$ are not the answer. And zero is not allowed in a denominator, so $x = 0$ and $y = 0$ can never be solutions here.

### Grouped unknowns

If $x + y$ and $x - y$ appear as blocks, treat the blocks as the unknowns.

**Example 6.** Solve

$$
\begin{cases}
2(x + y) + 3(x - y) = 24,\\
4(x + y) - (x - y) = 20.
\end{cases}
$$

Let $s = x + y$ and $d = x - y$:

$$
\begin{cases}
2s + 3d = 24,\\
4s - d = 20.
\end{cases}
$$

From the second equation $d = 4s - 20$. Substituting gives $2s + 12s - 60 = 24$, so $14s = 84$ and $s = 6$, then $d = 4$. Finally solve the small system $x + y = 6$ and $x - y = 4$, which gives $x = 5$ and $y = 1$.

### Choosing a method

| Situation | Convenient method |
| --- | --- |
| One unknown already isolated | Substitution or comparison |
| A coefficient equal to $1$ or $-1$ | Substitution |
| Matching or opposite coefficients | Elimination straight away |
| Awkward coefficients on both unknowns | Elimination after scaling |
| Fractions, decimals or brackets | Clean up first, then decide |
| Unknowns in denominators | Substitute $u = 1/x$, $v = 1/y$ |
| Only the shape of the answer matters | Graph or the ratio test |

Every correct method gives the same solution set, so the choice is only about speed and comfort.

---

## 5.12 Turning problems into systems

Word problems are where this chapter earns its place. The algebra is the easy half. The real skill is translation.

The routine:

1. Say clearly what each letter means, with units.
2. Write one equation for each independent fact in the text.
3. Solve with whichever method fits.
4. Read the numbers back into the story and check that they make sense there too.

The most useful phrase to notation map:

| Wording | Equation piece |
| --- | --- |
| the sum is $30$ | $x + y = 30$ |
| $x$ is $4$ more than $y$ | $x = y + 4$ |
| $x$ is $4$ less than $y$ | $x = y - 4$ |
| twice as many $x$ as $y$ | $x = 2y$ |
| the ratio of $x$ to $y$ is $3 : 5$ | $5x = 3y$ |
| total cost of $x$ items at $12$ each | $12x$ |
| $15\%$ of $y$ | $0.15y$ |

**Example 1 (digits of a number).** The digits of a two digit number add up to $11$. Swapping the digits makes the number $27$ larger. Find the number.

Let $a$ be the tens digit and $b$ the units digit. The number itself is $10a + b$, not $ab$, and that is the step most people miss. The swapped number is $10b + a$. The two facts give

$$
\begin{cases}
a + b = 11,\\
10b + a = 10a + b + 27.
\end{cases}
$$

Tidy the second equation:

$$
9b - 9a = 27, \qquad b - a = 3.
$$

Add this to $a + b = 11$:

$$
2b = 14, \qquad b = 7, \qquad a = 4.
$$

The number is $47$. Check the story: $4 + 7 = 11$, and $74 - 47 = 27$. Both digits are whole numbers between $0$ and $9$, so the answer is legal.

**Example 2 (mixing two solutions).** A lab mixes a $40\%$ acid solution with a $15\%$ acid solution to get $20$ litres of $25\%$ solution. How much of each is used?

Let $x$ be litres of the strong solution and $y$ litres of the weak one. One equation counts litres of liquid, the other counts litres of pure acid:

$$
\begin{cases}
x + y = 20,\\
0.4x + 0.15y = 0.25(20) = 5.
\end{cases}
$$

Clear the decimals by multiplying the second equation by $100$, then divide by $5$:

$$
40x + 15y = 500, \qquad 8x + 3y = 100.
$$

From the first equation $x = 20 - y$, so

$$
8(20 - y) + 3y = 100,
$$

$$
160 - 5y = 100, \qquad y = 12, \qquad x = 8.
$$

So $8$ litres of the $40\%$ solution and $12$ litres of the $15\%$ solution. Check the acid: $0.4(8) + 0.15(12) = 3.2 + 1.8 = 5$, which is $25\%$ of $20$ litres.

**Example 3 (boat and current).** A boat travels $36$ km downstream in $2$ hours and the same $36$ km upstream in $3$ hours. Find the speed of the boat in still water and the speed of the current.

Let $b$ be the boat speed and $c$ the current speed, both in km per hour. Downstream the current helps, upstream it fights back:

$$
\begin{cases}
b + c = \dfrac{36}{2} = 18,\\
b - c = \dfrac{36}{3} = 12.
\end{cases}
$$

Add the equations: $2b = 30$, so $b = 15$, and then $c = 3$. The boat does $15$ km/h in still water and the current runs at $3$ km/h. Both are positive, which they must be, and the current is slower than the boat, otherwise going upstream would be impossible.

**Example 4 (cost structure and break even).** A stand's total monthly cost is $1400$ when it serves $100$ cups and $2600$ when it serves $250$ cups. Costs are made of a fixed part and a constant amount per cup. Find both parts, then find how many cups must be sold at a price of $20$ per cup to break even.

Let $F$ be the fixed cost per month and $v$ the variable cost per cup:

$$
\begin{cases}
F + 100v = 1400,\\
F + 250v = 2600.
\end{cases}
$$

Subtract the first equation from the second:

$$
150v = 1200, \qquad v = 8,
$$

and then $F = 1400 - 100(8) = 600$. So the stand pays $600$ each month plus $8$ per cup.

Break even means revenue equals total cost. With $q$ cups sold at $20$ each,

$$
20q = 600 + 8q,
$$

$$
12q = 600, \qquad q = 50.
$$

Fifty cups per month covers the costs. Notice how the system produced the cost model, and the model then answered a new question.

**Example 5 (two rates of work).** Working together, one machine for $3$ hours and another for $4$ hours finishes exactly one job. The same job is also finished when the first machine works $6$ hours and the second works $2$ hours. How long does each machine need alone?

Rates are the unknowns here, not times. Let $a$ be the fraction of the job the first machine does in one hour, and $b$ the same for the second machine:

$$
\begin{cases}
3a + 4b = 1,\\
6a + 2b = 1.
\end{cases}
$$

Multiply the first equation by $2$:

$$
6a + 8b = 2,
$$

then subtract the second equation:

$$
6b = 1, \qquad b = \frac16.
$$

From $3a + 4\left(\dfrac16\right) = 1$ we get $3a = \dfrac13$, so $a = \dfrac19$. A rate of $\dfrac19$ of the job per hour means the first machine needs $9$ hours alone, and the second needs $6$ hours alone.

**Example 6 (money split at two rates).** An amount of $10000$ is split between an account paying $5\%$ per year and one paying $8\%$ per year. The total interest for the year is $680$. How much went into each account?

Let $x$ be the amount at $5\%$ and $y$ the amount at $8\%$:

$$
\begin{cases}
x + y = 10000,\\
0.05x + 0.08y = 680.
\end{cases}
$$

Multiply the second equation by $100$ to get $5x + 8y = 68000$, and substitute $x = 10000 - y$:

$$
50000 - 5y + 8y = 68000,
$$

$$
3y = 18000, \qquad y = 6000, \qquad x = 4000.
$$

So $4000$ at $5\%$ and $6000$ at $8\%$. Check: $200 + 480 = 680$.

### The story sets extra rules

Algebra does not know what the letters mean, so you have to apply the sense of the problem yourself. Counts of people, tickets or machines must be whole numbers. Lengths, prices, masses and speeds cannot be negative. A digit must be between $0$ and $9$. If the algebra returns $-3$ chairs or $2.5$ students, the model or the arithmetic is wrong, even though the numbers satisfy the equations.

---

## 5.13 Checking, and the mistakes to avoid

### How to check properly

Substitute the pair into **both original** equations, the ones as first written. Checking against your own rearranged version is weak, because any error you made while rearranging will be repeated and hidden.

For $(2,4)$ in the system of Example 2 in §5.8:

$$
2(2) + 3(4) = 16, \qquad 5(2) - 2(4) = 2.
$$

Both are true, so the pair is confirmed.

If the answer came from a word problem, run a second check in words. Do the two numbers really add to what the text said, and do they make sense as objects, prices or speeds?

### Frequent mistakes

1. **Trying to pin down two unknowns with one equation.** One equation leaves a whole line of pairs.
2. **Reversing a relation.** "$x$ is $4$ less than $y$" is $x = y - 4$. Reading it as $x = y + 4$ changes the whole problem.
3. **Writing a two digit number as $ab$.** It is $10a + b$.
4. **Multiplying only one side, or only part of a side.** Scaling $2x + 3y = 12$ by $3$ gives $6x + 9y = 36$.
5. **Losing a sign when subtracting equations.** Bracket both sides first, then remove the brackets.
6. **Substituting back into the equation the expression came from.** Always use the other equation.
7. **Stopping after one unknown.** The answer is a pair, so finish the back substitution.
8. **Checking in one equation only.** A wrong pair often satisfies one of them.
9. **Reading $0 = 5$ as $x = 0$.** A contradiction means no solution.
10. **Reading $0 = 0$ as no solution.** An identity means infinitely many solutions.
11. **Rounding in the middle.** Keep fractions until the last line, then round once if asked.
12. **Ignoring what the story allows.** Negative counts and fractional people are not answers.

---

## 5.14 Summary reference

| Task | Method |
| --- | --- |
| Recognise a linear equation | It can be written as $ax + by = c$, first powers only |
| Describe one equation's solutions | Infinitely many pairs, forming a straight line |
| Solve a system | Find every pair that satisfies both equations |
| One unknown already isolated | Substitution or comparison |
| A coefficient of $1$ or $-1$ | Substitution |
| Coefficients match or are opposite | Elimination |
| Awkward coefficients | Scale to a common multiple, then eliminate |
| Fractions or decimals | Multiply through to clear them |
| Unknowns in denominators | Set $u = 1/x$, $v = 1/y$, solve, then translate back |
| $x + y$ and $x - y$ as blocks | Set $s = x + y$, $d = x - y$ |
| Count the solutions | Compare coefficient ratios, or test $D = a_1b_2 - a_2b_1$ |
| A contradiction appears | No solution |
| An identity appears | Infinitely many solutions |
| Verify | Substitute into both original equations, then re read the story |

Standard form of a system:

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2.
\end{cases}
$$

Slope form of one equation, when $b \neq 0$:

$$
y = -\frac{a}{b}x + \frac{c}{b}.
$$

Uniqueness test:

$$
D = a_1b_2 - a_2b_1, \qquad D \neq 0 \ \Rightarrow \ \text{exactly one solution}.
$$

**Working order.** Clean both equations into standard form and clear fractions, decimals and brackets. Choose substitution when an unknown is easy to isolate, and elimination when coefficients are easy to match. Solve for one unknown, substitute back for the other, and write the answer as an ordered pair. Then check the pair in both original equations, and read a contradiction as no solution and an identity as infinitely many.

**Self-check.** Why does a single linear equation in two unknowns have infinitely many solutions? What does a solution of a system mean on a graph? What are the three possible positions of two lines, and what does each mean for the solution set? Which transformations of a system are allowed, and which two are forbidden? When is substitution faster than elimination? How do the coefficient ratios, or the determinant, tell you the number of solutions before you solve? What do the endings $0 = 0$ and $0 = 5$ mean? Why is a two digit number written as $10a + b$? And why can a pair that satisfies both equations still be a wrong answer to a word problem?
