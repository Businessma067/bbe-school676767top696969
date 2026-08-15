# Chapter 5 — Linear equations in two unknowns

This chapter is the general theory of linear equations with two unknowns and of systems built from them. It starts from what a single equation means, moves to what a pair of equations means together, and then covers the standard solving methods and the three possible outcomes. No earlier knowledge beyond basic algebra is assumed.

## Learning objectives

- Define a linear equation in two unknowns and describe its solution set.
- Understand a system of two linear equations and what "solving" it means.
- Read the three geometric cases: intersecting lines, parallel lines, and one line drawn twice.
- Use equivalent transformations that keep the solution set unchanged.
- Solve systems by substitution, by elimination, and by comparison.
- Decide from the coefficients whether a system has one solution, none, or infinitely many.
- Bring untidy systems into standard form and check a solution properly.

---

## 5.1 Linear equations in two unknowns

### Definition

An equation is **linear in two unknowns** when it can be written as

$$
ax + by = c,
$$

where $x$ and $y$ are the unknowns, and $a$, $b$, $c$ are given numbers with $a$ and $b$ not both zero.

The word linear means each unknown appears to the first power only. There is no $x^2$, no $xy$, no $\sqrt{y}$, and no $x$ in a denominator. So $3x + 5y = 12$ is linear, while $x^2 + y = 4$, $xy = 6$, and $\dfrac{1}{x} + y = 1$ are not.

The numbers $a$ and $b$ are called **coefficients**, and $c$ is the **constant term**.

### What counts as a solution

A **solution** of $ax + by = c$ is an ordered pair $(x, y)$ that makes the equation true. The order matters, because $(1,3)$ and $(3,1)$ are different pairs.

**Example 1.** Consider

$$
2x + y = 7.
$$

The pair $(2,3)$ is a solution, because $2(2) + 3 = 7$. The pair $(1,5)$ is also a solution, because $2(1) + 5 = 7$. The pair $(2,4)$ is not, because $2(2) + 4 = 8$.

### One equation has infinitely many solutions

Pick any value for $x$, then solve for $y$. There is always a matching partner, so one linear equation in two unknowns has infinitely many solutions.

**Example 2.** For $2x + y = 7$, solve for $y$:

$$
y = 7 - 2x.
$$

Now build a small table of solutions.

| $x$ | $y = 7 - 2x$ | Solution pair |
| --- | --- | --- |
| $0$ | $7$ | $(0,7)$ |
| $1$ | $5$ | $(1,5)$ |
| $2$ | $3$ | $(2,3)$ |
| $3$ | $1$ | $(3,1)$ |

The list never ends, and fractional and negative values are allowed as well.

### The graph is a straight line

If we plot all solution pairs in the coordinate plane, they form a straight line. That is why the equation is called linear.

When $b \neq 0$, we can rewrite $ax + by = c$ as

$$
y = -\frac{a}{b}x + \frac{c}{b},
$$

which is the familiar form $y = mx + n$ with slope $m$ and $y$-intercept $n$.

Two special cases are worth naming. If $b = 0$, the equation becomes $ax = c$, so $x = c/a$ and the graph is a vertical line. If $a = 0$, the equation becomes $by = c$, so $y = c/b$ and the graph is a horizontal line.

---

## 5.2 Systems of two linear equations

### Definition

A **system of two linear equations in two unknowns** is a pair of equations that must hold at the same time:

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2.
\end{cases}
$$

The brace means "both at once". Such equations are also called **simultaneous equations**.

A **solution of the system** is an ordered pair $(x,y)$ that satisfies both equations. The collection of all such pairs is the **solution set**. To **solve** a system means to find that set, not just one convenient value.

**Example 1.** Take the system

$$
\begin{cases}
x + y = 5,\\
x - y = 1.
\end{cases}
$$

The pair $(3,2)$ satisfies the first equation, since $3+2=5$, and the second, since $3-2=1$. So $(3,2)$ is a solution of the system.

The pair $(4,1)$ satisfies the first equation only, because $4-1=3$, not $1$. A pair that fits just one equation is not a solution of the system.

### Why two equations are usually needed

Each single equation allows infinitely many pairs. Asking for both at once cuts that freedom down. Usually only one pair survives, which is why two unknowns normally require two independent facts.

---

## 5.3 The geometric picture

Each equation of the system is a line. Solving the system means finding the points the two lines share. Two straight lines in a plane can sit in exactly three ways.

| Position of the lines | Solutions | Name of the system |
| --- | --- | --- |
| They cross at one point | Exactly one | Consistent and independent |
| They are parallel and different | None | Inconsistent |
| They coincide, one line drawn twice | Infinitely many | Consistent and dependent |

### One intersection point

Different slopes force the lines to meet exactly once, so the system has a unique solution.

**Example 1.**

$$
\begin{cases}
y = 2x + 1,\\
y = -x + 7.
\end{cases}
$$

The slopes $2$ and $-1$ differ, so the lines cross once. Setting the right-hand sides equal gives $2x+1 = -x+7$, so $3x = 6$ and $x = 2$. Then $y = 2(2)+1 = 5$, and the unique solution is $(2,5)$.

### No solution

Equal slopes with different intercepts give parallel lines that never meet.

**Example 2.**

$$
\begin{cases}
y = 3x + 2,\\
y = 3x - 4.
\end{cases}
$$

The same $x$ cannot give both $3x+2$ and $3x-4$, since that would require $2 = -4$. The system has no solution.

### Infinitely many solutions

If the second equation is just the first one rescaled, both describe the same line. Every point of that line solves the system.

**Example 3.**

$$
\begin{cases}
x + 2y = 4,\\
3x + 6y = 12.
\end{cases}
$$

Multiplying the first equation by $3$ gives the second. The second adds no new information, so the solution set is the whole line $x + 2y = 4$.

---

## 5.4 Equivalent transformations

Two systems are **equivalent** when they have exactly the same solution set. Solving a system means replacing it by simpler equivalent systems until the answer is visible.

The following steps never change the solution set.

1. Swap the two equations.
2. Add or subtract the same expression on both sides of one equation.
3. Multiply or divide one whole equation by a number that is not zero.
4. Replace one equation by its sum with, or difference from, another equation of the system.
5. Simplify one side of an equation without touching its value, for example by expanding brackets or collecting like terms.

Two moves are not allowed. Multiplying an equation by zero destroys information, and multiplying only part of a side breaks the equality.

**Example 1.** In the equation

$$
\frac{x}{2} + \frac{y}{3} = 1,
$$

multiply every term by $6$:

$$
3x + 2y = 6.
$$

The new equation has the same solutions but no fractions.

---

## 5.5 Substitution method

Substitution replaces one unknown by an expression in the other, which turns the system into a single equation with one unknown.

The steps are:

1. Choose one equation and express one unknown in terms of the other.
2. Substitute that expression into the other equation.
3. Solve the resulting equation with one unknown.
4. Substitute the value back to find the remaining unknown.
5. Write the answer as an ordered pair.

**Example 1.** Solve

$$
\begin{cases}
x + 3y = 11,\\
2x - y = 1.
\end{cases}
$$

From the first equation,

$$
x = 11 - 3y.
$$

Substitute into the second equation:

$$
2(11 - 3y) - y = 1.
$$

Expand and solve:

$$
22 - 6y - y = 1,
$$

$$
-7y = -21,
$$

$$
y = 3.
$$

Substitute back:

$$
x = 11 - 3(3) = 2.
$$

The solution is $(2,3)$.

**Example 2.** Substitution also detects the special cases. In

$$
\begin{cases}
y = 3x + 2,\\
-6x + 2y = 1,
\end{cases}
$$

substituting gives

$$
-6x + 2(3x+2) = 1,
$$

$$
4 = 1,
$$

which is false. A false numeric statement means the system has no solution. If instead the result had been a true statement such as $4 = 4$, the system would have infinitely many solutions.

Substitution is most convenient when one coefficient is $1$ or $-1$, or when one equation is already written as $y = \ldots$ or $x = \ldots$.

---

## 5.6 Elimination method

Elimination removes one unknown by adding or subtracting the equations.

The steps are:

1. Write both equations in the form $ax + by = c$.
2. If needed, multiply one or both equations so that one unknown has coefficients that are equal or opposite.
3. Add or subtract the equations to eliminate that unknown.
4. Solve for the remaining unknown.
5. Substitute back and write the ordered pair.

**Example 1.** Solve

$$
\begin{cases}
3x + 4y = 18,\\
3x - 2y = 6.
\end{cases}
$$

The $x$ coefficients already match, so subtract the second equation from the first:

$$
6y = 12,
$$

so $y = 2$. Substituting into the first equation gives $3x + 8 = 18$, so $x = \dfrac{10}{3}$. The solution is $\left(\dfrac{10}{3}, 2\right)$.

**Example 2.** Solve

$$
\begin{cases}
2x + 3y = 16,\\
5x - 2y = 2.
\end{cases}
$$

To eliminate $y$, multiply the first equation by $2$ and the second by $3$:

$$
\begin{cases}
4x + 6y = 32,\\
15x - 6y = 6.
\end{cases}
$$

Now add them, since the $y$ terms are opposite:

$$
19x = 38,
$$

so $x = 2$. Substituting into $2x + 3y = 16$ gives $3y = 12$, so $y = 4$. The solution is $(2,4)$.

### Two practical remarks

Divide an equation by a common factor before scaling it, because smaller numbers mean fewer arithmetic slips. Also subtract complete sides rather than single terms, since

$$
(2x + 3y) - (5x - 2y) = -3x + 5y,
$$

and forgetting to change the sign of $-2y$ is a frequent error.

As with substitution, a contradiction such as $0 = 7$ signals no solution, while an identity such as $0 = 0$ signals infinitely many solutions.

---

## 5.7 Comparison and graphical methods

### Comparison

When both equations express the same unknown, we can compare the right-hand sides directly. From

$$
\begin{cases}
y = 4x - 3,\\
y = x + 6,
\end{cases}
$$

equal left sides force

$$
4x - 3 = x + 6,
$$

so $3x = 9$ and $x = 3$. Then $y = 3 + 6 = 9$, giving $(3,9)$.

This is really substitution in a convenient dress, and it is the fastest route when both equations are already solved for $y$.

### Graphing

Drawing both lines shows the solution as their intersection point. Graphing gives good intuition and instantly reveals which of the three cases applies, but it is only as accurate as the drawing. Use it to understand or to check, then confirm the exact values by substitution or elimination.

---

## 5.8 Deciding the number of solutions from the coefficients

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
| $\dfrac{a_1}{a_2} \neq \dfrac{b_1}{b_2}$ | Intersecting | Exactly one |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$ | Parallel and different | None |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | The same line | Infinitely many |

The ratios assume the denominators are not zero. The same test can be written without division through the number

$$
D = a_1b_2 - a_2b_1,
$$

which is the **determinant** of the system. If $D \neq 0$, there is exactly one solution. If $D = 0$, the system has either no solution or infinitely many, and the constants decide which.

**Example 1.** For

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 11,
\end{cases}
$$

we get $\dfrac{2}{4} = \dfrac{3}{6} = \dfrac12$ but $\dfrac{5}{11} \neq \dfrac12$. The lines are parallel and the system has no solution. The determinant confirms it, since $D = 2(6) - 4(3) = 0$.

**Example 2.** For

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 10,
\end{cases}
$$

all three ratios equal $\dfrac12$, so the equations describe one line and there are infinitely many solutions.

---

## 5.9 Bringing a system into standard form

Before choosing a method, tidy both equations.

- Expand brackets: $2(x + 3y) = 8$ becomes $2x + 6y = 8$.
- Clear fractions by multiplying by a common denominator.
- Clear decimals by multiplying by a power of ten, so $0.3x + 0.05y = 1.2$ becomes $30x + 5y = 120$.
- Move all unknown terms to the left and all constants to the right.
- Collect like terms and divide by common factors.

**Example 1.** Tidy the system

$$
\begin{cases}
\dfrac{x}{2} + \dfrac{y}{3} = 4,\\
0.2x - y = 1.
\end{cases}
$$

Multiply the first equation by $6$ and the second by $5$:

$$
\begin{cases}
3x + 2y = 24,\\
x - 5y = 5.
\end{cases}
$$

The second equation now has a coefficient of $1$, so substitution with $x = 5 + 5y$ is convenient.

### Which method to choose

| Situation | Convenient method |
| --- | --- |
| One unknown already isolated | Substitution or comparison |
| A coefficient equal to $1$ or $-1$ | Substitution |
| Matching or opposite coefficients | Elimination |
| Larger coefficients on both unknowns | Elimination after scaling |
| Only a rough picture is needed | Graphing |

Every correct method gives the same solution set, so the choice is only about speed and comfort.

---

## 5.10 Word problems as systems

Applied questions become systems once the unknowns are named.

1. Say clearly what $x$ and $y$ stand for, including units.
2. Write one equation for each independent piece of information.
3. Solve the system with any method.
4. Interpret the numbers back in the original wording and check that the answer makes sense.

**Example 1.** Two numbers add up to $30$, and one is $4$ greater than the other.

Let $x$ be the larger number and $y$ the smaller one. Then

$$
\begin{cases}
x + y = 30,\\
x = y + 4.
\end{cases}
$$

Substituting the second into the first gives $2y + 4 = 30$, so $y = 13$ and $x = 17$.

**Example 2.** Pens cost $x$ each and notebooks cost $y$ each. Three pens and two notebooks cost $16$, while one pen and four notebooks cost $22$.

$$
\begin{cases}
3x + 2y = 16,\\
x + 4y = 22.
\end{cases}
$$

Multiply the second equation by $3$ and subtract the first:

$$
10y = 50,
$$

so $y = 5$ and then $x = 2$. A pen costs $2$ and a notebook costs $5$.

A solution must also fit the context. Counts of objects and prices cannot be negative, and quantities of items must be whole numbers even when the algebra allows fractions.

---

## 5.11 Checking the answer and common errors

### How to check

Substitute the pair into **both** original equations, not into a rearranged version, because an error made while rearranging would be repeated by the check.

For $(2,4)$ in the system of §5.6:

$$
2(2) + 3(4) = 16, \qquad 5(2) - 2(4) = 2.
$$

Both statements are true, so the pair is confirmed.

### Frequent mistakes

1. Treating one equation as enough to fix both unknowns.
2. Reversing a relation, for example writing $x = y + 4$ when the text says $x$ is $4$ less than $y$.
3. Multiplying only one side, or only part of a side, of an equation.
4. Losing a sign when subtracting equations.
5. Finding one unknown and stopping before back-substitution.
6. Checking the pair in one equation only.
7. Reading a contradiction such as $0 = 5$ as $x = 0$ instead of "no solution".
8. Reading an identity such as $0 = 0$ as "no solution" instead of "infinitely many".
9. Rounding in the middle of the work instead of at the end.
10. Ignoring context limits such as non-negative or whole-number answers.

---

## 5.12 Summary reference

| Task | Method |
| --- | --- |
| Recognise a linear equation | It can be written as $ax + by = c$ with first powers only |
| Describe one equation's solutions | Infinitely many pairs, forming a straight line |
| Solve a system | Find every pair satisfying both equations |
| One unknown isolated | Substitution or comparison |
| Coefficients match or are opposite | Elimination |
| Coefficients do not match | Scale first, then eliminate |
| Fractions or decimals present | Multiply through to clear them |
| Count the solutions | Compare coefficient ratios or test $D = a_1b_2 - a_2b_1$ |
| Contradiction appears | No solution |
| Identity appears | Infinitely many solutions |
| Verify | Substitute into both original equations |

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

**Working order.** Write both equations in standard form and clear fractions or decimals. Choose substitution when an unknown is easy to isolate, and elimination when coefficients are easy to match. Solve for one unknown, substitute back for the other, and state the answer as an ordered pair. Then check the pair in both original equations, and read a contradiction as no solution and an identity as infinitely many.

**Self-check.** Can you explain why a single linear equation in two unknowns has infinitely many solutions? What does a solution of a system mean geometrically? Which three positions can two lines take, and what does each mean for the solution set? How do substitution and elimination differ, and when is each faster? How do the coefficient ratios or the determinant tell you the number of solutions? What do the results $0 = 0$ and $0 = 5$ mean at the end of a calculation?
