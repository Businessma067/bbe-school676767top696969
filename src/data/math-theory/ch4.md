# Chapter 4: Equations

This chapter is the theory of equations with one unknown: linear, quadratic, rational, radical and absolute-value, then exponential and logarithmic. It starts from what an equation is and what it means to solve one. If you have never isolated an unknown before, begin at the first section and read straight through.

On the BBE exam, Chapter 4 statements are almost never bare arithmetic. They ask about the number of solutions, the sign of a root, a parameter condition, a domain restriction, or an extraneous root. The examples below are few on purpose. Each one is worked in full exam depth.

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

An **equation** is a statement that two amounts are equal, with at least one number missing. The missing number is written as a letter and called the **unknown**.

$$
3x + 4 = 19.
$$

This says: some number $x$, multiplied by $3$, then increased by $4$, gives $19$. To **solve** the equation means to find every value of $x$ that makes the statement true.

Think of an equation as a balance scale. The left side sits in one pan, the right side in the other, and they are level. As long as you do the same thing to both pans, the scale stays level. That single idea is the whole method for linear equations.

### Inverse operations and cleaning

Every operation has an inverse. Addition is undone by subtraction. Multiplication by a nonzero number is undone by division. The working order for a tidy linear equation is:

1. Expand brackets if there are any.
2. Collect like terms on each side.
3. Move all terms with the unknown to one side and the constants to the other.
4. Divide by the coefficient of the unknown, provided that coefficient is not zero.
5. Check the answer in the original equation.

A **term** is a single piece of an expression, such as $3x$ or $4$. A **coefficient** is the number multiplying a letter. **Like terms** carry the same letter power and can be added.

If an equation contains brackets, expand them before isolating. Use $a(b + c) = ab + ac$, and watch a leading minus:

$$
-(2x - 5) = -2x + 5.
$$

When fractions appear, multiply through by a common denominator so the new equation has no fractions. That step preserves equality because both sides are scaled by the same nonzero number.

### One solution, none, or infinitely many

After simplifying, a linear equation ends in one of three ways.

| Ending | Meaning | Solution set |
| --- | --- | --- |
| $ax = b$ with $a \neq 0$ | Unique solution | $x = b/a$ |
| $0 = c$ with $c \neq 0$ | Contradiction | Empty set: no solution |
| $0 = 0$ | Identity | Every real $x$ works |

### Parameters in a linear equation

A **parameter** is a letter treated as a fixed but unknown number while you solve for $x$. Typical letters are $k$, $m$ or $a$. Write the cleaned equation as

$$
A(k)\, x = B(k),
$$

then classify.

| Condition on $A(k)$ and $B(k)$ | Number of solutions for $x$ |
| --- | --- |
| $A(k) \neq 0$ | Exactly one: $x = B(k)/A(k)$ |
| $A(k) = 0$ and $B(k) \neq 0$ | None |
| $A(k) = 0$ and $B(k) = 0$ | Infinitely many |

Exam claims about “exactly one $k$ with infinitely many solutions”, “no solution if and only if $k = \ldots$”, or “for every $k > 2$ the unique $x$ is positive” are answered from this table, not by guessing a few values of $k$.

**Example 1.** Study the parametric balance

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

Now test claims of the exam type:

- “There is exactly one real $k$ for which the equation has infinitely many solutions.” False. The coefficient of $x$ never vanishes.
- “When $k = 3$, the unique solution satisfies $x > 2$.” True, because $x = 3(3 - 1) = 6 > 2$.
- “For every $k < 1$, the unique solution is strictly negative.” True, because $k - 1 < 0$ forces $x = 3(k - 1) < 0$.

The same routine on a different equation can produce a genuine singular value. For

$$
(k + 1)x = 2k + 2 = 2(k + 1),
$$

the case $k = -1$ makes both sides zero, so every $x$ works, while $k \neq -1$ forces the unique root $x = 2$. That contrast is why parameter analysis must be done before any claim about uniqueness.

**Example 2.** A $60$ litre vat starts at $10\%$ acid. Twelve litres of water evaporate, then $12$ litres of $40\%$ acid are poured in. After that, $x$ litres of the new mixture are drawn off and replaced by pure water so that the final concentration equals $12\%$. Find $x$, and decide whether the claim “less than $20$ litres must be drawn off” is true.

First stage: the vat starts with $0.10 \cdot 60 = 6$ litres of pure acid. Evaporating $12$ litres of water leaves those $6$ litres of acid in $48$ litres of mixture. Adding $12$ litres of $40\%$ stock adds

$$
0.40 \cdot 12 = 4.8
$$

litres of acid, so $10.8$ litres of acid sit in $60$ litres. The concentration after the first stage is

$$
\frac{10.8}{60} = 0.18 = 18\%.
$$

Second stage: draw off $x$ litres of the $18\%$ mix. That removes $0.18x$ litres of acid and leaves $10.8 - 0.18x$ litres of acid in $60 - x$ litres. Adding $x$ litres of water restores volume $60$ and leaves the acid amount unchanged. The final concentration condition is

$$
\frac{10.8 - 0.18x}{60} = 0.12.
$$

Solve:

$$
10.8 - 0.18x = 7.2, \qquad -0.18x = -3.6, \qquad x = 20.
$$

Check: after drawing $20$ litres of the $18\%$ mix, acid left is $10.8 - 3.6 = 7.2$ litres in $60$ litres, which is exactly $12\%$.

So the required draw-off is $20$ litres. The claim “less than $20$ litres must be drawn off” is false. The trap is stopping after the evaporation step and treating $18\%$ as the final answer, or forgetting that the drawn-off liquid still contains acid.

### Exam traps in 4.1

- Dividing by a coefficient that might be zero when a parameter is present.
- Reading $0 = 0$ as “no solution”, or reading $0 = 5$ as “$x = 0$”.
- Expanding $-(x - 3)$ as $-x - 3$.
- In mixture stories, treating removed liquid as pure water when it is still a mixture.

**Working order for a linear claim.** Clean brackets and fractions, collect $x$ on one side, and look at the coefficient of $x$. If a parameter remains, classify the cases $A \neq 0$, $A = 0$ with $B \neq 0$, and $A = B = 0$. Then answer the claim about uniqueness, sign, or a parameter condition.

---

## 4.2 Quadratic equations

### The standard form

An equation is **quadratic** when it can be written as

$$
ax^{2} + bx + c = 0
$$

with $a \neq 0$. Each unknown appears only to the first or second power.

| Equation | Quadratic? | Reason |
| --- | --- | --- |
| $x^{2} - 5x + 6 = 0$ | Yes | Standard form |
| $(x - 3)(x - 5) = 8$ | Yes | Expands to a quadratic |
| $x^{3} - x = 0$ | No | Degree three |
| $\dfrac{1}{x} + x = 2$ | No | Unknown in a denominator |

### Solving methods

If a product equals zero, at least one factor is zero: $AB = 0$ gives $A = 0$ or $B = 0$.

Completing the square rewrites the equation so a perfect square appears. For $a = 1$,

$$
x^{2} + bx = \left(x + \frac{b}{2}\right)^{2} - \left(\frac{b}{2}\right)^{2}.
$$

The quadratic formula for $ax^{2} + bx + c = 0$ is

$$
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}.
$$

The **discriminant** $\Delta = b^{2} - 4ac$ decides the number of real roots.

| Discriminant | Number of real roots |
| --- | --- |
| $\Delta > 0$ | Two distinct real roots |
| $\Delta = 0$ | Exactly one real root (repeated) |
| $\Delta < 0$ | No real roots |

### Vieta’s relations and signs

If the roots are $x_1$ and $x_2$, then

$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}.
$$

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

Once $\Delta \ge 0$, signs follow from sum and product.

| Product $x_1 x_2$ | Sum $x_1 + x_2$ | Conclusion |
| --- | --- | --- |
| Positive | Positive | Both roots positive |
| Positive | Negative | Both roots negative |
| Negative | Any | Opposite signs |
| Zero | Any | At least one root is zero |

For “both strictly positive” you need $\Delta \ge 0$, sum $> 0$, and product $> 0$. When coefficients depend on a parameter $m$, those three conditions become inequalities in $m$.

A **biquadratic** $ay^{4} + by^{2} + c = 0$ is reduced by $u = y^{2}$ with $u \ge 0$. Only nonnegative roots $u$ produce real $y$.

**Example 1.** For the parametric break-even model

$$
x^{2} - (2m + 1)x + (m^{2} - 4) = 0,
$$

determine every real $m$ for which there are two distinct real roots of opposite signs. Then decide whether the claim “those opposite-sign roots occur precisely when $-2 < m < 2$” is true, and whether “the sum of the squares of the roots is minimised at $m = 0$ among all $m$ with $\Delta > 0$” is true.

Here

$$
a = 1, \qquad b = -(2m + 1), \qquad c = m^{2} - 4,
$$

so

$$
\Delta = (2m + 1)^{2} - 4(m^{2} - 4) = 4m^{2} + 4m + 1 - 4m^{2} + 16 = 4m + 17.
$$

Distinct real roots need $\Delta > 0$, that is

$$
m > -\frac{17}{4}.
$$

Opposite signs need product $< 0$:

$$
m^{2} - 4 < 0 \quad \Leftrightarrow \quad -2 < m < 2.
$$

Intersecting with $\Delta > 0$:

$$
m \in (-2, 2)
$$

already lies inside $m > -17/4$. So opposite-sign distinct real roots occur precisely for $-2 < m < 2$. The first claim is true.

For the sum of squares, Vieta gives sum $= 2m + 1$ and product $= m^{2} - 4$, hence

$$
x_1^{2} + x_2^{2} = (2m + 1)^{2} - 2(m^{2} - 4) = 4m^{2} + 4m + 1 - 2m^{2} + 8 = 2m^{2} + 4m + 9.
$$

On the open interval where $\Delta > 0$, this quadratic in $m$ opens upwards. Its vertex is at

$$
m = -\frac{4}{2 \cdot 2} = -1.
$$

The value $m = -1$ lies in $(-17/4, \infty)$, so among all $m$ with two distinct real roots the sum of squares is minimised at $m = -1$, not at $m = 0$. The second claim is false.

At $m = -1$ one also has product $= 1 - 4 = -3 < 0$, so the minimising parameter still produces opposite signs. That is the depth the exam wants: discriminant, Vieta, and a calculus-free quadratic minimum on an interval, all from one model.

**Example 2.** Replace $x$ by $y^{2}$ in

$$
x^{2} - 5x + 4 = 0
$$

and study the resulting biquadratic in $y$. Then answer: “exactly four distinct real solutions” and “the product of all real solutions is zero”.

Set $u = y^{2}$. Then

$$
u^{2} - 5u + 4 = 0, \qquad (u - 1)(u - 4) = 0,
$$

so $u = 1$ or $u = 4$. Both are positive, hence

$$
y = \pm 1 \quad \text{or} \quad y = \pm 2.
$$

There are four distinct real solutions. Their product is

$$
(-2)(-1)(1)(2) = 4 \neq 0,
$$

so the claim that the product is zero is false. If the quadratic in $u$ had produced a negative root, that root would have contributed no real $y$, and the count would drop below four. Always filter $u \ge 0$ before taking square roots.

### Exam traps in 4.2

- Using Vieta while $\Delta < 0$.
- Forgetting the $\pm$ when taking square roots.
- Dropping $a \neq 0$ when the leading coefficient depends on a parameter.
- Treating every root of a $u$-quadratic as if it automatically gives two real $y$ values.
- Confusing “two real roots, only one physically admissible” with “exactly one real root of the equation”.

**Working order for a quadratic claim.** Bring the equation to $ax^{2} + bx + c = 0$. Compute $\Delta$. If the claim is about count of roots, stop there. If it is about sum, product, signs or sum of squares, use Vieta. If a parameter appears, solve inequalities on $\Delta$, sum and product. Always check which roots the story allows.

---

## 4.3 Rational, radical and absolute-value equations

### Rational equations

A **rational equation** has the unknown in a denominator. Before solving, write the **domain**: every value that zeros a denominator is excluded.

Multiply through by the common denominator. The new polynomial equation is equivalent only on the domain. After solving, discard every candidate that hits a hole. Those discarded values are **extraneous**.

### Radical equations

For square roots over the reals:

1. State the domain: every radicand is nonnegative, and a square root equal to an expression forces that expression to be nonnegative.
2. Isolate one radical.
3. Square both sides.
4. Solve the resulting equation.
5. Check every candidate in the original equation and against the domain.

Squaring is not reversible without a check. From $A = B$ you get $A^{2} = B^{2}$, but $A^{2} = B^{2}$ also allows $A = -B$.

### Absolute-value equations

$|A|$ is $A$ when $A \ge 0$ and $-A$ when $A < 0$. Geometrically, $|x - a|$ is distance from $x$ to $a$.

$$
|A| = b \quad (b \ge 0) \quad \Rightarrow \quad A = b \ \text{or}\ A = -b.
$$

If $b < 0$, there is no solution. When several absolute values appear, split the real line at the critical points where inside expressions change sign, solve in each region, and keep only solutions that belong to that region.

**Example 1.** Solve

$$
\frac{2}{x - 3} - \frac{1}{x + 1} = 1
$$

over the reals, and decide whether the claim “exactly one real solution” is true. Then check the follow-up claim that “if the right-hand side is replaced by $0$, the new equation has no real solution”.

Domain: $x \neq 3$ and $x \neq -1$. Multiply through by $(x - 3)(x + 1)$:

$$
2(x + 1) - 1(x - 3) = (x - 3)(x + 1),
$$

$$
2x + 2 - x + 3 = x^{2} - 2x - 3,
$$

$$
x + 5 = x^{2} - 2x - 3,
$$

$$
0 = x^{2} - 3x - 8,
$$

$$
x = \frac{3 \pm \sqrt{9 + 32}}{2} = \frac{3 \pm \sqrt{41}}{2}.
$$

Neither root equals $3$ or $-1$, because $\sqrt{41}$ is irrational and lies strictly between $6$ and $7$, so

$$
\frac{3 + \sqrt{41}}{2} \in (4.5, 5), \qquad \frac{3 - \sqrt{41}}{2} \in (-2, -1.5).
$$

Both candidates are admissible. The original equation has two distinct real solutions, so “exactly one real solution” is false.

Now replace the right-hand side by $0$:

$$
\frac{2}{x - 3} - \frac{1}{x + 1} = 0 \quad \Rightarrow \quad \frac{2}{x - 3} = \frac{1}{x + 1}.
$$

On the same domain, cross-multiply:

$$
2(x + 1) = x - 3, \qquad 2x + 2 = x - 3, \qquad x = -5.
$$

The value $-5$ is not a hole, and it satisfies the cleared equation. Direct check:

$$
\frac{2}{-5 - 3} - \frac{1}{-5 + 1} = \frac{2}{-8} - \frac{1}{-4} = -\frac14 + \frac14 = 0.
$$

So the modified equation has a real solution. The follow-up claim is false. The point of the double claim is that changing a constant can change the solution count, but you still have to solve. You cannot guess “harder right-hand side means no solution”.

**Example 2.** Solve

$$
\sqrt{4w + 9} - \sqrt{w} = 3
$$

for real $w$, with the story restriction $w > 0$. Decide whether “no strictly positive solution survives because squaring introduces an extraneous root” is true.

Domain from the radicals: $4w + 9 \ge 0$ (automatic for $w \ge 0$) and $w \ge 0$. The story asks for $w > 0$. Isolate:

$$
\sqrt{4w + 9} = 3 + \sqrt{w}.
$$

Both sides are nonnegative for $w \ge 0$, so squaring is safe in direction, but the check is still mandatory:

$$
4w + 9 = 9 + 6\sqrt{w} + w,
$$

$$
3w = 6\sqrt{w}.
$$

If $w = 0$, this holds, but $w = 0$ is excluded by $w > 0$. For $w > 0$ divide by $3$:

$$
w = 2\sqrt{w}.
$$

Set $t = \sqrt{w} > 0$. Then $t^{2} = 2t$, so $t(t - 2) = 0$, hence $t = 2$ and $w = 4$.

Check in the original:

$$
\sqrt{16 + 9} - \sqrt{4} = 5 - 2 = 3.
$$

Valid. There is a strictly positive solution $w = 4$. The claim is false: squaring did produce the candidate $w = 0$ as well, but that candidate fails the story filter $w > 0$, while $w = 4$ survives. Extraneous-root language must be used precisely. A root can be excluded by the domain, by the check, or by a physical restriction, and those are three different reasons.

**Example 3.** Solve

$$
|2x - 1| + |x + 3| = 8
$$

by splitting at the critical points, and decide whether “exactly one real solution” is true.

The expressions $2x - 1$ and $x + 3$ change sign at $x = \tfrac12$ and $x = -3$. The real line splits into three regions: $x < -3$, $-3 \le x < \tfrac12$, and $x \ge \tfrac12$.

Region $x < -3$:

$$
-(2x - 1) - (x + 3) = 8, \qquad -2x + 1 - x - 3 = 8, \qquad -3x = 10, \qquad x = -\frac{10}{3}.
$$

But $-\tfrac{10}{3} \approx -3.33$ is less than $-3$, so it lies in the region. Keep it.

Region $-3 \le x < \tfrac12$:

$$
-(2x - 1) + (x + 3) = 8, \qquad -2x + 1 + x + 3 = 8, \qquad -x = 4, \qquad x = -4.
$$

Now $-4 < -3$, so it does **not** lie in this region. Discard it.

Region $x \ge \tfrac12$:

$$
(2x - 1) + (x + 3) = 8, \qquad 3x + 2 = 8, \qquad 3x = 6, \qquad x = 2.
$$

The value $2$ is at least $\tfrac12$, so keep it.

The solutions are $x = -\tfrac{10}{3}$ and $x = 2$. Exactly two real solutions, so the claim “exactly one” is false. Direct checks:

$$
\left|2\left(-\tfrac{10}{3}\right) - 1\right| + \left|-\tfrac{10}{3} + 3\right| = \left|-\tfrac{23}{3}\right| + \left|-\tfrac{1}{3}\right| = \tfrac{23}{3} + \tfrac{1}{3} = 8,
$$

$$
|4 - 1| + |2 + 3| = 3 + 5 = 8.
$$

Both valid. The discarded $x = -4$ is the classic case-error: it solves the algebra of a region it does not belong to.

### Exam traps in 4.3

- Accepting a root that makes a denominator zero.
- Squaring without checking, then counting an extraneous root as valid.
- Writing $\sqrt{A} = -3$ as if it could hold over the reals.
- Keeping a case solution that lies outside its own region.

**Working order.** Write the domain first. Transform (clear, isolate and square, or split cases). Solve the auxiliary equation. Filter by domain, by direct substitution, and by any physical restriction. Only then answer a claim about uniqueness, sign, or an extraneous root.

---

## 4.4 Exponential and logarithmic equations

### Exponential equations

An **exponential equation** has the unknown in an exponent. For a positive base $a \neq 1$,

$$
a^{u} = a^{v} \quad \Rightarrow \quad u = v.
$$

Powers that look different are rewritten over a common base. For example $4 = 2^{2}$, $8 = 2^{3}$, $9 = 3^{2}$, $27 = 3^{3}$. After both sides are powers of the same base, equate exponents.

### Logarithms

The statement

$$
\log_{a} x = y
$$

means

$$
a^{y} = x,
$$

with base $a > 0$, $a \neq 1$, and argument $x > 0$. The natural logarithm $\ln x$ is $\log_{e} x$.

Immediate facts:

$$
\log_{a} 1 = 0, \qquad \log_{a} a = 1, \qquad \log_{a}(a^{k}) = k.
$$

Laws for positive arguments:

$$
\log_{a}(xy) = \log_{a} x + \log_{a} y,
$$

$$
\log_{a}\!\left(\frac{x}{y}\right) = \log_{a} x - \log_{a} y,
$$

$$
\log_{a}(x^{k}) = k \log_{a} x.
$$

Before solving a logarithmic equation, write every domain condition: each argument positive, each base allowed. Domain usually decides which algebraic roots survive.

Growth and decay models have the shape $A(t) = A_{0} a^{t}$ or $A(t) = A_{0} e^{kt}$. Solving for time means isolating the exponential factor and taking a logarithm.

**Example 1.** Compare the solutions of

$$
16^{x} = 8^{x + 1} \qquad \text{and} \qquad 4^{x} = 8.
$$

Decide whether “the first solution is smaller than the second” is true, and whether “both solutions are integers” is true.

Rewrite everything as powers of $2$.

First equation:

$$
(2^{4})^{x} = (2^{3})^{x + 1}, \qquad 2^{4x} = 2^{3x + 3}, \qquad 4x = 3x + 3, \qquad x = 3.
$$

Second equation:

$$
(2^{2})^{x} = 2^{3}, \qquad 2^{2x} = 2^{3}, \qquad 2x = 3, \qquad x = \tfrac32.
$$

The first solution is $3$, the second is $\tfrac32$. So $3 > \tfrac32$: the first is **not** smaller than the second. The claim is false. Also only one of the two solutions is an integer, so “both are integers” is false.

The exam move is not just solving one exponential equation. It is solving two related ones carefully enough to compare them, without mixing the rewritten exponents.

**Example 2.** Solve

$$
\log_{2}(t + 6) + \log_{2}(t - 1) = 3
$$

and the companion equation

$$
\log_{2}(t + 6) - \log_{2}(t - 1) = 1
$$

on their common domain. Then decide whether “the two equations share exactly one common real root” is true, and whether “the product of all algebraic roots of the summed equation (before the domain filter) equals $-14$” is true.

Domain for both: $t + 6 > 0$ and $t - 1 > 0$, so $t > 1$.

Sum equation:

$$
\log_{2}\big((t + 6)(t - 1)\big) = 3,
$$

$$
(t + 6)(t - 1) = 8,
$$

$$
t^{2} + 5t - 6 = 8, \qquad t^{2} + 5t - 14 = 0,
$$

$$
(t + 7)(t - 2) = 0,
$$

so algebraic roots $t = -7$ and $t = 2$. Only $t = 2$ lies in $t > 1$. The product of the algebraic roots is $-14$, so the second claim is true.

Difference equation:

$$
\log_{2}\!\left(\frac{t + 6}{t - 1}\right) = 1,
$$

$$
\frac{t + 6}{t - 1} = 2, \qquad t + 6 = 2t - 2, \qquad t = 8.
$$

The value $8$ satisfies $t > 1$. Direct check: $\log_{2} 14 - \log_{2} 7 = \log_{2} 2 = 1$.

The admissible roots are $t = 2$ for the sum equation and $t = 8$ for the difference equation. They share no common root. The first claim is false.

This is the standard hard log pattern: combine with a law, solve a quadratic, watch an extraneous negative root, then compare with a second equation on the same domain.

**Example 3.** A capital grows by the factor $1.25$ each year:

$$
A(t) = A_{0}(1.25)^{t}.
$$

A second fund grows continuously:

$$
B(t) = A_{0} e^{0.2 t}.
$$

Find the unique $t > 0$ at which $A(t) = B(t)$, and decide whether that crossing time is strictly less than $2$. Then decide whether the half-capital time for $A$, meaning $A(t) = \tfrac12 A_{0}$, can occur for any real $t$.

Set $A(t) = B(t)$ with $A_{0} > 0$:

$$
(1.25)^{t} = e^{0.2 t}.
$$

For $t = 0$ both sides are $1$, but the question asks for $t > 0$. Take the natural log:

$$
t \ln 1.25 = 0.2 t.
$$

For $t \neq 0$ divide by $t$:

$$
\ln 1.25 = 0.2.
$$

But $\ln 1.25 = \ln(5/4) \approx 0.22314 > 0.2$, so the equality $\ln 1.25 = 0.2$ is false. Therefore the only real solution of $(1.25)^{t} = e^{0.2 t}$ is $t = 0$. There is **no** $t > 0$ at which the two funds meet. The claim that the crossing time is strictly less than $2$ is false, because no positive crossing exists.

For the half-capital equation with fund $A$:

$$
(1.25)^{t} = \tfrac12.
$$

The left side is always positive, but for every real $t$ one has $1.25^{t} > 0$, and since $1.25 > 1$ the map $t \mapsto 1.25^{t}$ is increasing with values always at least as large as values heading to $0$ only as $t \to -\infty$. In particular $1.25^{t} = 1/2$ does have a negative solution

$$
t = \frac{\ln(1/2)}{\ln 1.25} < 0.
$$

So a real half-capital time exists, but it is not a future time. If an exam claim says “the capital falls to half in some positive number of years”, that claim is false for a growth factor greater than $1$. Growth models do not produce future halving.

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
