# Chapter 4: Equations

This chapter is the theory of equations with one unknown: linear, quadratic, rational, radical and absolute-value, then exponential and logarithmic. It starts from what an equation is and what it means to solve one. If you have never isolated an unknown before, begin at the first section and read straight through.

On the BBE exam, Chapter 4 statements are almost never bare arithmetic. They ask about the number of solutions, the sign of a root, a parameter condition, a domain restriction, or an extraneous root. The text below teaches the ideas first. Worked examples come after each block of theory, first easy ones, then harder exam-depth ones.

## Learning objectives

- Recognise a linear equation in one unknown and solve it by inverse operations.
- Decide whether a linear equation has one solution, none, or infinitely many, including when a parameter appears.
- Solve quadratic equations by factoring, completing the square, and the quadratic formula.
- Use the discriminant and Vieta’s relations to read root count, signs, sums and derived expressions.
- Clear denominators in rational equations and exclude values that make a denominator zero.
- Isolate and square radical equations, then check every candidate for extraneous roots.
- Split absolute-value equations into cases and keep only values that match the case.
- Solve exponential and logarithmic equations with matching bases, logarithm laws, and domain checks.

---

## 4.1 Linear equations in one unknown

### What an equation is

An **equation** is a statement that two amounts are equal, with at least one number missing. The missing number is written as a letter and called the **unknown**. The letter is only a name. You could call it $x$, $t$, $p$ or $k$. What matters is that the same letter always stands for the same number inside one equation.

$$
3x + 4 = 19.
$$

This says: some number $x$, multiplied by $3$, then increased by $4$, gives $19$. To **solve** the equation means to find every value of $x$ that makes the statement true. A value that works is called a **solution** or a **root**. The set of all solutions is the **solution set**.

Think of an equation as a balance scale. The left side sits in one pan, the right side in the other, and they are level. As long as you do the same thing to both pans, the scale stays level. That single idea is the whole method for linear equations. You are not inventing a new number. You are revealing the number that was already forced by the equality.

### Why inverse operations work

Every ordinary arithmetic operation has an inverse. Addition is undone by subtraction. Subtraction is undone by addition. Multiplication by a nonzero number is undone by division. Division by a nonzero number is undone by multiplication.

The phrase “nonzero” matters. You may never divide both sides by zero, and you may never multiply both sides by zero if you want to keep an equivalent equation. Multiplying by zero turns every equation into $0 = 0$ or $0 = c$, which destroys information.

When you undo operations, you peel the equation from the outside in. In $3x + 4 = 19$, the last thing done to $x$ was “add $4$”, so remove $4$ first. Then the last remaining operation is “multiply by $3$”, so divide by $3$. That order is the reverse of the order in which the expression was built.

### Language you will keep meeting

A **term** is a single piece of an expression, such as $3x$ or $4$. Terms are separated by $+$ or $-$ signs when the expression is written in expanded form.

A **coefficient** is the number multiplying a letter. In $3x$ the coefficient is $3$. In $-x$ the coefficient is $-1$. In $x$ alone the coefficient is $1$, even though the $1$ is not written.

**Like terms** carry the same letter power and can be added or subtracted: $2x + 5x = 7x$. The expressions $2x$ and $5$ are not like terms, so they cannot be collapsed into one term.

A **linear equation in one unknown** is an equation that can be rewritten as

$$
ax + b = 0
$$

with $a \neq 0$, or more loosely as $ax + b = c$. The unknown appears only to the first power. It is not squared, not under a root, and not in a denominator.

### Cleaning an equation before isolating

Real exam equations are rarely already tidy. They may contain brackets, fractions, decimals, or the unknown on both sides. The cleaning stage comes before isolation.

If there are brackets, expand them with the distributive law $a(b + c) = ab + ac$. A minus in front of a bracket distributes onto every term inside:

$$
-(2x - 5) = -2x + 5.
$$

Losing that sign change is one of the commonest mistakes in the whole chapter.

If there are fractions, multiply every term on both sides by a common denominator. The point is not to “make fractions disappear by magic”. The point is that multiplying both sides by the same nonzero number preserves equality, so the new equation has exactly the same solutions as the old one.

If the unknown appears on both sides, move all terms with the unknown to one side and all constant terms to the other. Moving a term across the equals sign is the same as adding its opposite to both sides. After that, you should have a single term $ax$ equal to a number.

### Equivalent equations

Two equations are **equivalent** when they have exactly the same solution set. Allowed moves that keep equivalence are:

- adding the same number to both sides;
- subtracting the same number from both sides;
- multiplying or dividing both sides by the same nonzero number;
- expanding brackets or collecting like terms.

Forbidden or dangerous moves include dividing by an expression that might be zero, and multiplying by zero. Later sections will add more dangerous moves, such as squaring both sides. For linear equations, the safe list above is enough.

### One solution, none, or infinitely many

After simplifying, a linear equation ends in one of three ways. These endings are not decoration. They are the whole classification.

| Ending | Meaning | Solution set |
| --- | --- | --- |
| $ax = b$ with $a \neq 0$ | Unique solution | $x = b/a$ |
| $0 = c$ with $c \neq 0$ | Contradiction | Empty set: no solution |
| $0 = 0$ | Identity | Every real $x$ works |

The middle case says the cleaned equation claims something false, such as $0 = 5$. No value of $x$ can repair a false numerical statement, so there is no solution.

The last case says the cleaned equation claims something that is always true. The original equation did not constrain $x$ at all. Every real number works.

Many students meet only the first case in school and then freeze when an exam statement talks about “no solution” or “infinitely many solutions”. The table is the answer key for those statements.

### Parameters

A **parameter** is a letter treated as a fixed but unknown number while you solve for $x$. Typical letters are $k$, $m$ or $a$. The equation still has one unknown, $x$. The parameter is part of the data, but the data is not a single number yet.

The question changes from “what is $x$?” to “for which values of the parameter does the equation behave this or that way?”. Write the cleaned equation as

$$
A(k)\, x = B(k),
$$

then classify using the same three endings.

| Condition on $A(k)$ and $B(k)$ | Number of solutions for $x$ |
| --- | --- |
| $A(k) \neq 0$ | Exactly one: $x = B(k)/A(k)$ |
| $A(k) = 0$ and $B(k) \neq 0$ | None |
| $A(k) = 0$ and $B(k) = 0$ | Infinitely many |

The critical step is not plugging in random values of $k$. The critical step is finding when the coefficient of $x$ vanishes, and then checking the right-hand side at those same values. Exam claims about “exactly one $k$ with infinitely many solutions” or “no solution if and only if $k = -1$” are answered from this classification.

When a unique formula $x = B(k)/A(k)$ exists, further claims about signs or inequalities become ordinary inequalities in $k$. For example, “for every $k > 2$ the unique $x$ is positive” means: whenever $k > 2$, one also has $A(k) \neq 0$ and $B(k)/A(k) > 0$.

### Word problems and units

A word problem is a linear equation wearing a story. Translate the story into algebra, solve, then read the answer back into the story. Algebra does not know what the letters mean, so you must apply sense yourself. Volumes and times are usually nonnegative. Counts of people are whole numbers. A concentration must make sense between the concentrations being mixed.

In mixture and draw-off problems, the trap is almost always the same: the liquid you remove is still a mixture, so it carries solute with it. Evaporation of water removes volume but not solute. Adding a richer stock adds both volume and solute. Keep those three ideas separate.

### Worked examples for 4.1

**Example 1 (easy).** Solve $3x + 4 = 19$.

Subtract $4$ from both sides:

$$
3x = 15.
$$

Divide by $3$:

$$
x = 5.
$$

Check: $3(5) + 4 = 19$. True, so $x = 5$ is the solution.

**Example 2 (easy).** Solve $3(x + 1) = 12$ and $\dfrac{x - 7}{2} = 4$.

First expand the brackets:

$$
3x + 3 = 12, \qquad 3x = 9, \qquad x = 3.
$$

Check: $3(3 + 1) = 12$. True.

For the fraction, multiply both sides by $2$:

$$
x - 7 = 8, \qquad x = 15.
$$

Check: $\dfrac{15 - 7}{2} = 4$. True.

**Example 3 (easy).** The equation $2x + 1 = 2x + 5$ simplifies to $1 = 5$, so there is no solution. The equation $2(x + 3) = 2x + 6$ simplifies to $0 = 0$, so every real $x$ is a solution.

**Example 4 (hard).** Study the parametric balance

$$
(k - 1)x - 2 = k(x - 3) + 1
$$

and decide, for every real $k$, how many solutions $x$ exist. Then answer three typical claims.

Expand and collect:

$$
(k - 1)x - 2 = kx - 3k + 1,
$$

$$
(k - 1)x - kx = -3k + 1 + 2,
$$

$$
kx - x - kx = -3k + 3,
$$

$$
-x = -3(k - 1),
$$

$$
x = 3(k - 1).
$$

Here the $k$-terms cancelled on the left, and the coefficient of $x$ became $-1$, which is never zero. So for **every** real $k$ there is exactly one solution,

$$
x = 3(k - 1).
$$

There is no parameter value with no solution, and no parameter value with infinitely many solutions.

Claims:

- “There is exactly one real $k$ for which the equation has infinitely many solutions.” False. The coefficient of $x$ never vanishes.
- “When $k = 3$, the unique solution satisfies $x > 2$.” True, because $x = 3(3 - 1) = 6 > 2$.
- “For every $k < 1$, the unique solution is strictly negative.” True, because $k - 1 < 0$ forces $x = 3(k - 1) < 0$.

Contrast that with $(k + 1)x = 2(k + 1)$. Here $k = -1$ makes both sides zero, so every $x$ works, while $k \neq -1$ forces $x = 2$. The same routine can produce a singular parameter value. That is why classification comes before any uniqueness claim.

**Example 5 (hard).** A $60$ litre vat starts at $10\%$ acid. Twelve litres of water evaporate, then $12$ litres of $40\%$ acid are poured in. After that, $x$ litres of the new mixture are drawn off and replaced by pure water so that the final concentration equals $12\%$. Find $x$, and decide whether the claim “less than $20$ litres must be drawn off” is true.

First stage: start with $0.10 \cdot 60 = 6$ litres of pure acid. Evaporating $12$ litres of water leaves those $6$ litres of acid in $48$ litres. Adding $12$ litres of $40\%$ stock adds $0.40 \cdot 12 = 4.8$ litres of acid, so $10.8$ litres of acid sit in $60$ litres. The concentration is $18\%$.

Second stage: draw off $x$ litres of the $18\%$ mix. That removes $0.18x$ litres of acid. Adding $x$ litres of water restores volume $60$ and leaves the acid amount unchanged. The final condition is

$$
\frac{10.8 - 0.18x}{60} = 0.12.
$$

Solve:

$$
10.8 - 0.18x = 7.2, \qquad x = 20.
$$

Check: acid left is $7.2$ litres in $60$ litres, which is $12\%$. The required draw-off is $20$ litres, so “less than $20$ litres” is false.

### Exam traps in 4.1

- Dividing by a coefficient that might be zero when a parameter is present.
- Reading $0 = 0$ as “no solution”, or reading $0 = 5$ as “$x = 0$”.
- Expanding $-(x - 3)$ as $-x - 3$.
- In mixture stories, treating removed liquid as pure water when it is still a mixture.

**Working order for a linear claim.** Clean brackets and fractions, collect $x$ on one side, and look at the coefficient of $x$. If a parameter remains, classify the cases $A \neq 0$, $A = 0$ with $B \neq 0$, and $A = B = 0$. Then answer the claim about uniqueness, sign, or a parameter condition.

---

## 4.2 Quadratic equations

### What makes an equation quadratic

An equation is **quadratic** when it can be written as

$$
ax^{2} + bx + c = 0
$$

with $a \neq 0$. The number $a$ is the leading coefficient, $b$ is the linear coefficient, and $c$ is the constant term. The unknown may appear to the second power and the first power only.

The condition $a \neq 0$ is part of the definition. If a parameter makes the leading coefficient zero, the equation is no longer quadratic. It collapses to a linear equation, or to one of the three linear endings from §4.1. Always check that before using quadratic formulas.

| Equation | Quadratic? | Reason |
| --- | --- | --- |
| $x^{2} - 5x + 6 = 0$ | Yes | Standard form |
| $(x - 3)(x - 5) = 8$ | Yes | Expands to a quadratic |
| $x^{3} - x = 0$ | No | Degree three |
| $\dfrac{1}{x} + x = 2$ | No | Unknown in a denominator |

### Why quadratics can have two roots

A linear equation is a balance that usually pins $x$ to one value. A quadratic compares a curved expression with zero. Geometrically, $y = ax^{2} + bx + c$ is a parabola. Solving $ax^{2} + bx + c = 0$ means finding where that parabola meets the horizontal axis. A parabola can cross the axis twice, touch it once, or miss it entirely. That is why the number of real solutions is not always one.

### Factoring and the zero-product rule

If a product equals zero, at least one factor is zero:

$$
AB = 0 \quad \Rightarrow \quad A = 0 \ \text{or}\ B = 0.
$$

That rule is the reason factoring works. If you can rewrite a quadratic as $(x - r)(x - s) = 0$, the roots are immediately $r$ and $s$. Factoring is often the fastest method when the numbers are small integers. It is not a general method for every quadratic with ugly coefficients.

### Completing the square

Completing the square rewrites the quadratic so a perfect square appears. For $a = 1$,

$$
x^{2} + bx = \left(x + \frac{b}{2}\right)^{2} - \left(\frac{b}{2}\right)^{2}.
$$

The idea is geometric as well as algebraic: you add and subtract the same square so that the variable part becomes $(x + \frac{b}{2})^{2}$. Once the equation looks like

$$
\left(x - h\right)^{2} = k,
$$

you can read the solutions as $x = h \pm \sqrt{k}$ when $k \ge 0$, and as no real solution when $k < 0$. Completing the square is also the clean way to see a vertex form in a profit or operating model.

### The quadratic formula and the discriminant

The quadratic formula packages completing the square for the general case $a \neq 0$:

$$
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}.
$$

The expression under the square root is the **discriminant**:

$$
\Delta = b^{2} - 4ac.
$$

| Discriminant | Number of real roots | Geometric reading |
| --- | --- | --- |
| $\Delta > 0$ | Two distinct real roots | Parabola crosses the axis twice |
| $\Delta = 0$ | Exactly one real root (repeated) | Parabola touches the axis once |
| $\Delta < 0$ | No real roots | Parabola misses the axis |

The discriminant answers “how many real solutions?” before you compute the solutions themselves. On the exam, that is often all the claim asks.

### Vieta’s relations

If $ax^{2} + bx + c = 0$ has roots $x_1$ and $x_2$ (counting a repeated root twice), then

$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}.
$$

These identities come from expanding $a(x - x_1)(x - x_2)$ and comparing coefficients. They let you answer claims about sums, products, sums of squares, and sums of reciprocals without naming each root first.

Useful rearrangements:

$$
x_1^{2} + x_2^{2} = (x_1 + x_2)^{2} - 2x_1 x_2,
$$

$$
\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2} \quad (x_1 x_2 \neq 0),
$$

$$
|x_1 - x_2| = \frac{\sqrt{\Delta}}{|a|}.
$$

Vieta is not a substitute for the discriminant. If $\Delta < 0$, there are no real roots to sum. If a claim mentions “the sum of the roots”, it silently assumes that real roots exist, or else it is talking about complex roots, which this course does not use.

### Signs of the roots

Once $\Delta \ge 0$, the signs are read from the sum and product.

| Product $x_1 x_2$ | Sum $x_1 + x_2$ | Conclusion |
| --- | --- | --- |
| Positive | Positive | Both roots positive |
| Positive | Negative | Both roots negative |
| Negative | Any | Opposite signs |
| Zero | Any | At least one root is zero |

For “both strictly positive” you typically need three conditions at once: $\Delta \ge 0$, sum $> 0$, and product $> 0$. For “opposite signs” the product condition alone is usually enough, because a negative product already forces $\Delta > 0$ for a real quadratic with real coefficients in standard form.

### Parameters in quadratic equations

When coefficients depend on a parameter $m$, treat $\Delta(m)$, the sum and the product as functions of $m$. Typical exam moves:

- “Exactly one real solution iff $m = \ldots$” means solve $\Delta(m) = 0$ and check that the equation stays quadratic.
- “Two distinct positive roots” means solve the system $\Delta > 0$, sum $> 0$, product $> 0$.
- “Opposite signs” means product $< 0$.
- Claims about $x_1^{2} + x_2^{2}$ become ordinary functions of $m$ after Vieta, and can be minimised by completing the square or reading a vertex.

### Biquadratic equations

An equation of the form $ay^{4} + by^{2} + c = 0$ is **biquadratic**. Set $u = y^{2}$ with the extra condition $u \ge 0$. Solve the quadratic in $u$, then take square roots of every nonnegative root $u$. A negative $u$ contributes no real $y$. Forgetting that filter is the standard way to invent four real solutions when only two exist.

### Worked examples for 4.2

**Example 1 (easy).** Solve $x^{2} - 5x + 6 = 0$ by factoring.

$$
(x - 2)(x - 3) = 0,
$$

so $x = 2$ or $x = 3$.

**Example 2 (easy).** Read the number of real roots of $x^{2} + x + 1 = 0$ and of $2x^{2} - 3x - 2 = 0$ from the discriminant, then find the roots of the second equation.

For $x^{2} + x + 1 = 0$,

$$
\Delta = 1 - 4 = -3 < 0,
$$

so there are no real roots.

For $2x^{2} - 3x - 2 = 0$,

$$
\Delta = 9 + 16 = 25 > 0,
$$

$$
x = \frac{3 \pm 5}{4},
$$

so $x = 2$ or $x = -\tfrac12$.

**Example 3 (hard).** For the parametric break-even model

$$
x^{2} - (2m + 1)x + (m^{2} - 4) = 0,
$$

determine every real $m$ for which there are two distinct real roots of opposite signs. Then decide whether the claim “those opposite-sign roots occur precisely when $-2 < m < 2$” is true, and whether “the sum of the squares of the roots is minimised at $m = 0$ among all $m$ with $\Delta > 0$” is true.

Here $a = 1$, $b = -(2m + 1)$, $c = m^{2} - 4$, so

$$
\Delta = (2m + 1)^{2} - 4(m^{2} - 4) = 4m + 17.
$$

Distinct real roots need $m > -17/4$. Opposite signs need $m^{2} - 4 < 0$, that is $-2 < m < 2$. The intersection is exactly $-2 < m < 2$, so the first claim is true.

For the sum of squares,

$$
x_1^{2} + x_2^{2} = (2m + 1)^{2} - 2(m^{2} - 4) = 2m^{2} + 4m + 9.
$$

This opens upwards and has vertex at $m = -1$, which lies in the $\Delta > 0$ region. The minimum is at $m = -1$, not at $m = 0$, so the second claim is false.

**Example 4 (hard).** Replace $x$ by $y^{2}$ in $x^{2} - 5x + 4 = 0$ and study the biquadratic in $y$.

Set $u = y^{2}$. Then $(u - 1)(u - 4) = 0$, so $u = 1$ or $u = 4$. Both are positive, hence $y = \pm 1$ or $y = \pm 2$. Four distinct real solutions. Their product is $4$, not $0$. The claim that the product is zero is false.

### Exam traps in 4.2

- Using Vieta while $\Delta < 0$.
- Forgetting the $\pm$ when taking square roots.
- Dropping $a \neq 0$ when the leading coefficient depends on a parameter.
- Treating every root of a $u$-quadratic as if it automatically gives two real $y$ values.
- Confusing “two real roots, only one physically admissible” with “exactly one real root of the equation”.

**Working order for a quadratic claim.** Bring the equation to $ax^{2} + bx + c = 0$. Compute $\Delta$. If the claim is about count of roots, stop there. If it is about sum, product, signs or sum of squares, use Vieta. If a parameter appears, solve inequalities on $\Delta$, sum and product. Always check which roots the story allows.

---

## 4.3 Rational, radical and absolute-value equations

### Why these equations need extra care

Linear and quadratic equations are polynomial. Every real number is allowed as a candidate, and the transformations used so far stay equivalent when handled carefully. The three families in this section break that comfort.

A **rational equation** can be undefined at holes. A **radical equation** only makes sense on a restricted domain, and squaring can create extra candidates. An **absolute-value equation** is defined piecewise, so one algebraic line is really several different linear equations on different regions.

The shared exam theme is: write the restrictions first, transform second, filter third. Students who reverse that order invent roots.

### Rational equations and the domain

A rational equation has the unknown in a denominator. The **domain** is the set of real numbers that make every denominator nonzero. Those forbidden values are called **holes** or excluded values.

Clearing denominators means multiplying through by a common denominator. On the domain, that move is equivalent. Off the domain, the original equation was not even defined, so a root of the cleared polynomial that lands on a hole is not a solution of the rational equation. It is an **extraneous** root created by the transformation.

After clearing, you may get a linear or quadratic auxiliary equation. Solve it completely, then discard every candidate that hits a hole. Only then count solutions or compare them with a claimed bound.

### What “extraneous” means here

An extraneous root is a number that satisfies an intermediate equation but not the original one. In rational equations, the usual cause is a cancelled factor that hid a hole. In radical equations, the usual cause is squaring. The word does not mean “almost a root” or “approximately right”. It means “not a root of the original equation”.

### Radical equations

A radical equation contains the unknown under a root. This course works with square roots over the real numbers. Two restrictions appear at once:

1. every radicand must be nonnegative;
2. if a square root stands alone equal to an expression, that expression must be nonnegative, because a principal square root cannot be negative.

The standard method is:

1. write the domain;
2. isolate one radical;
3. square both sides;
4. solve the resulting equation;
5. check every candidate in the original equation and against the domain.

Why the check is mandatory: from $A = B$ you may deduce $A^{2} = B^{2}$, but from $A^{2} = B^{2}$ you may only deduce $A = B$ or $A = -B$. Squaring enlarges the solution set. The check throws away the extras.

Isolating before squaring reduces clutter. If two radicals remain, you may need to isolate and square more than once. After each squaring, the domain and the check still govern what survives.

### Absolute-value equations

The absolute value $|A|$ is $A$ when $A \ge 0$ and $-A$ when $A < 0$. Geometrically, $|x - a|$ is the distance from $x$ to $a$ on the number line. That distance reading is often clearer than casework for simple equations such as $|x - 3| = 5$.

The basic equation

$$
|A| = b
$$

has no solution when $b < 0$, because a distance cannot be negative. When $b \ge 0$, it splits into $A = b$ or $A = -b$.

When several absolute values appear, or when the right-hand side also contains variables, split the real line at the **critical points** where expressions inside absolute values change sign. On each open piece the equation becomes linear, with no absolute values left. Solve there, then keep only solutions that actually lie in that piece. A number that solves the algebra of the wrong region must be discarded.

### Parameters and physical filters

A parameter in a rational equation can move the holes or change the degree after clearing. Always express the excluded set in terms of the parameter before counting solutions.

Applied stories add a second filter on top of the mathematical domain. Speeds and volumes may need to be positive. A cancelled hole is still forbidden even if a simplified expression looks defined there. Keep mathematical domain and physical restriction as two separate lists.

### Worked examples for 4.3

**Example 1 (easy).** Solve $\dfrac{x}{x + 3} = \dfrac{2}{5}$.

Exclude $x = -3$. Multiply by $5(x + 3)$:

$$
5x = 2(x + 3), \qquad 3x = 6, \qquad x = 2.
$$

The value $2$ is not the hole. Check: $\dfrac{2}{5} = \dfrac{2}{5}$. Unique solution $x = 2$.

**Example 2 (easy).** Solve $\sqrt{x + 24} - \sqrt{x} = 2$ with $x \ge 0$.

Isolate, then square:

$$
\sqrt{x + 24} = 2 + \sqrt{x},
$$

$$
x + 24 = 4 + 4\sqrt{x} + x, \qquad \sqrt{x} = 5, \qquad x = 25.
$$

Check: $\sqrt{49} - \sqrt{25} = 2$. Valid.

**Example 3 (easy).** Solve $|x - 3| = 5$.

$$
x - 3 = 5 \quad \text{or} \quad x - 3 = -5,
$$

so $x = 8$ or $x = -2$.

**Example 4 (hard).** Solve

$$
\frac{2}{x - 3} - \frac{1}{x + 1} = 1
$$

and decide whether “exactly one real solution” is true. Then check the follow-up claim that replacing the right-hand side by $0$ yields no real solution.

Domain: $x \neq 3$ and $x \neq -1$. Clearing gives

$$
x^{2} - 3x - 8 = 0, \qquad x = \frac{3 \pm \sqrt{41}}{2}.
$$

Neither root is a hole, so there are two real solutions. “Exactly one” is false.

With right-hand side $0$, the same domain yields $x = -5$, which is allowed and checks. The follow-up claim is false.

**Example 5 (hard).** Solve $\sqrt{4w + 9} - \sqrt{w} = 3$ with story restriction $w > 0$. Decide whether “no strictly positive solution survives because squaring introduces an extraneous root” is true.

Isolate and square:

$$
\sqrt{4w + 9} = 3 + \sqrt{w}, \qquad 3w = 6\sqrt{w}.
$$

Candidates include $w = 0$ and $w = 4$. Only $w = 4$ meets $w > 0$, and it checks. The claim is false. Extraneous-root language must name the correct filter: domain, check, or physical restriction.

**Example 6 (hard).** Solve $|2x - 1| + |x + 3| = 8$ by regions.

Critical points: $x = -3$ and $x = \tfrac12$.

- For $x < -3$: recover $x = -10/3$, which lies in the region. Keep it.
- For $-3 \le x < 1/2$: recover $x = -4$, which does not lie in the region. Discard it.
- For $x \ge 1/2$: recover $x = 2$, which lies in the region. Keep it.

Two real solutions, so “exactly one” is false.

### Exam traps in 4.3

- Accepting a root that makes a denominator zero.
- Squaring without checking, then counting an extraneous root as valid.
- Writing $\sqrt{A} = -3$ as if it could hold over the reals.
- Keeping a case solution that lies outside its own region.

**Working order.** Write the domain first. Transform (clear, isolate and square, or split cases). Solve the auxiliary equation. Filter by domain, by direct substitution, and by any physical restriction. Only then answer a claim about uniqueness, sign, or an extraneous root.

---

## 4.4 Exponential and logarithmic equations

### Why exponents and logs belong together

An exponential expression raises a fixed base to a variable power. A logarithm undoes that operation. The two languages describe the same relationship from opposite sides:

$$
a^{y} = x \quad \Leftrightarrow \quad \log_{a} x = y,
$$

with the usual restrictions on base and argument. If you can read both directions fluently, most of this section becomes translation rather than invention.

### Exponential equations

An **exponential equation** has the unknown in an exponent. For a positive base $a \neq 1$, the exponential function $y = a^{x}$ is one-to-one. That is why matching bases works:

$$
a^{u} = a^{v} \quad \Rightarrow \quad u = v.
$$

If $0 < a < 1$, the function is still one-to-one, only decreasing. The same matching rule applies.

When the bases look different, rewrite them as powers of a common base. The standard toolkit is:

$$
4 = 2^{2},\quad 8 = 2^{3},\quad 16 = 2^{4},\quad 9 = 3^{2},\quad 27 = 3^{3},\quad 81 = 3^{4}.
$$

After both sides are powers of the same base, equate exponents. Prefer this route to taking logarithms when the numbers cooperate, because matching exponents stays exact and avoids calculator approximation.

If the bases refuse to match, isolate the exponential factor and take logarithms. That is the natural method for growth and decay equations with awkward rates.

### Special values worth remembering

For any allowed base $a$,

$$
a^{0} = 1, \qquad a^{1} = a.
$$

So an equation such as $7^{x - 1} = 1$ is not mysterious: it says the exponent is zero, hence $x = 1$. Likewise $a^{x} = a$ forces $x = 1$. Claims that “an exponential equation equal to $1$ has no solution” are almost always false.

### Logarithms

The statement $\log_{a} x = y$ means $a^{y} = x$. The restrictions are part of the definition, not optional etiquette:

- base $a > 0$ and $a \neq 1$;
- argument $x > 0$.

The **natural logarithm** $\ln x$ is $\log_{e} x$ with $e \approx 2.71828$. The **common logarithm** $\log x$ often means $\log_{10} x$ in applied texts. In this course, a written base such as $\log_{2}$ is unambiguous.

Immediate facts:

$$
\log_{a} 1 = 0, \qquad \log_{a} a = 1, \qquad \log_{a}(a^{k}) = k.
$$

In particular, a logarithm can be zero. The equation $\ln x = 0$ has the solution $x = 1$.

### Logarithm laws

For positive arguments and allowed bases:

$$
\log_{a}(xy) = \log_{a} x + \log_{a} y,
$$

$$
\log_{a}\!\left(\frac{x}{y}\right) = \log_{a} x - \log_{a} y,
$$

$$
\log_{a}(x^{k}) = k \log_{a} x.
$$

These laws let you compress a sum of logs into a single log, or expand a single log into a sum. On the exam, a sum of logs equal to a constant usually becomes one log equal to that constant, then an exponential equation, then a polynomial after clearing.

### Domain decides the answer

Before solving a logarithmic equation, write every condition:

- each argument of a logarithm is positive;
- each base is positive and not equal to $1$;
- any extra restrictions from denominators or radicals, if present.

A quadratic produced after combining logs may have two algebraic roots. Often only one lies in the domain. Counting both without the filter is the classic false “two solutions” claim.

When the unknown is the base, as in $\log_{x} 81 = 4$, remember that the base itself must satisfy $x > 0$ and $x \neq 1$. Negative bases are not used in the real logarithm of this course.

### Growth and decay

Many applied exponential equations have the shape

$$
A(t) = A_{0} a^{t}
$$

or

$$
A(t) = A_{0} e^{kt}.
$$

Here $A_{0}$ is the starting amount, $a$ is a growth or decay factor per period, and $k$ is a continuous rate. Growth means $a > 1$ or $k > 0$. Decay means $0 < a < 1$ or $k < 0$.

Solving for time means isolating the exponential factor and taking a logarithm. Comparing two funds means setting their formulas equal and simplifying carefully. A common hard point: after taking logs you may obtain an equation such as $t \ln a = ct$. Then $t = 0$ is always a mathematical solution, but a claim about a future crossing needs a positive $t$. If $\ln a \neq c$, no positive crossing exists.

Halving under growth is another frequent trap. If $a > 1$, the equation $a^{t} = 1/2$ has a negative solution only. A growing capital does not fall to half in future time.

### Worked examples for 4.4

**Example 1 (easy).** Solve $2^{x} = 8$ and $3^{x + 1} = 81$.

$$
2^{x} = 2^{3} \quad \Rightarrow \quad x = 3.
$$

$$
3^{x + 1} = 3^{4} \quad \Rightarrow \quad x = 3.
$$

**Example 2 (easy).** Solve $4^{x} = 8$ by rewriting over base $2$.

$$
(2^{2})^{x} = 2^{3}, \qquad 2x = 3, \qquad x = \tfrac32.
$$

**Example 3 (easy).** Solve $\log_{2} x = 5$ and $\ln x = 0$.

$$
x = 2^{5} = 32, \qquad x = e^{0} = 1.
$$

**Example 4 (hard).** Compare the solutions of $16^{x} = 8^{x + 1}$ and $4^{x} = 8$.

$$
(2^{4})^{x} = (2^{3})^{x + 1} \quad \Rightarrow \quad x = 3,
$$

$$
(2^{2})^{x} = 2^{3} \quad \Rightarrow \quad x = \tfrac32.
$$

The first solution is larger, not smaller. Only one of them is an integer. Both “first is smaller” and “both are integers” are false.

**Example 5 (hard).** Solve

$$
\log_{2}(t + 6) + \log_{2}(t - 1) = 3
$$

and

$$
\log_{2}(t + 6) - \log_{2}(t - 1) = 1
$$

on the common domain $t > 1$.

The sum equation becomes $(t + 6)(t - 1) = 8$, hence $t^{2} + 5t - 14 = 0$, with algebraic roots $-7$ and $2$. Only $t = 2$ survives. The product of the algebraic roots is $-14$.

The difference equation becomes $\dfrac{t + 6}{t - 1} = 2$, hence $t = 8$, which is allowed. The two equations share no common root.

**Example 6 (hard).** Compare $A(t) = A_{0}(1.25)^{t}$ with $B(t) = A_{0} e^{0.2 t}$.

Setting $A(t) = B(t)$ gives $(1.25)^{t} = e^{0.2 t}$, so $t \ln 1.25 = 0.2 t$. Since $\ln 1.25 \neq 0.2$, the only real solution is $t = 0$. There is no positive crossing time.

The half-capital equation $(1.25)^{t} = 1/2$ has a negative solution only. A claim of future halving under growth is false.

### Exam traps in 4.4

- Writing $\log_{a} 1 = 1$ instead of $0$.
- Allowing a nonpositive argument of a logarithm.
- Matching bases incorrectly after a sloppy rewrite.
- Counting an algebraic root that violates the domain.
- Comparing two exponential solutions without rewriting both over the same base.

**Working order.** Rewrite to a common base when possible. Otherwise isolate a logarithm or an exponential and apply the definition. Write the domain first for every log equation. Filter roots, then answer the claim about sign, size, uniqueness or a comparison between two models.

### Summary reference

| Task | Method |
| --- | --- |
| Linear equation | Inverse operations; classify $ax = b$, $0 = c$, $0 = 0$ |
| Linear with parameter | Study $A(k)x = B(k)$ |
| Quadratic | Factor, complete the square, or use the formula |
| Count real quadratic roots | Read $\Delta = b^{2} - 4ac$ |
| Sum, product, sum of squares | Vieta and rearrangements |
| Rational equation | Domain first, clear denominators, discard holes |
| Radical equation | Domain, isolate, square, check for extraneous roots |
| Absolute value | Split cases; keep only in-region solutions |
| Exponential, same or related bases | Rewrite, then match exponents |
| Logarithm | Use $a^{y} = x$; keep argument positive and base allowed |

Key formulas:

$$
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}, \qquad \Delta = b^{2} - 4ac,
$$

$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a},
$$

$$
a^{u} = a^{v} \Rightarrow u = v, \qquad \log_{a} x = y \Leftrightarrow a^{y} = x.
$$

**Working order on a Chapter 4 statement.** Identify the equation type. Write every domain or parameter restriction. Solve with the matching technique. Filter illegal or extraneous roots. Only then accept or reject the true/false claim.

**Self-check.** When does a linear equation have infinitely many solutions? How do you read the number of real quadratic roots from $\Delta$? What do Vieta’s sum and product tell you about signs? Why must holes be excluded after clearing denominators? Why can squaring create an extraneous root? What domain conditions belong to $\log_{a} x = y$?
