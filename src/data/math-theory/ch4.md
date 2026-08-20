# Chapter 4: Equations

This chapter is the theory of equations with one unknown, from linear statements through quadratic, rational, radical and absolute-value equations, and on to exponential and logarithmic equations. The last section shows how those types sit together in mixed exam sets. The chapter starts from what an equation is and what it means to solve one. If you have never isolated an unknown before, begin at the first section and read straight through.

On the BBE exam, Chapter 4 statements are almost never bare arithmetic. They ask about the number of solutions, the sign of a root, a parameter condition, a domain restriction, or an extraneous root. The algebra below is written for that kind of claim.

## Learning objectives

- Recognise a linear equation in one unknown and solve it by inverse operations.
- Decide whether a linear equation has one solution, none, or infinitely many, including when a parameter appears.
- Solve quadratic equations by factoring, completing the square, and the quadratic formula.
- Use the discriminant and Vieta’s relations to read root count, signs and sums without guessing roots.
- Clear denominators in rational equations and exclude values that make a denominator zero.
- Isolate and square radical equations, then check every candidate for extraneous roots.
- Split absolute-value equations into cases and keep only values that match the case.
- Solve exponential and logarithmic equations with matching bases, logarithm laws, and domain checks.
- Choose the right model inside a mixed story and translate an exam claim into a precise algebraic question.

---

## 4.1 Linear equations in one unknown

### What an equation is

An **equation** is a statement that two amounts are equal, with at least one number missing. The missing number is written as a letter and called the **unknown**.

$$
3x + 4 = 19.
$$

This says: some number $x$, multiplied by $3$, then increased by $4$, gives $19$. To **solve** the equation means to find every value of $x$ that makes the statement true.

Think of an equation as a balance scale. The left side sits in one pan, the right side in the other, and they are level. As long as you do the same thing to both pans, the scale stays level. That single idea is the whole method for linear equations.

### Inverse operations

Every operation has an inverse. Addition is undone by subtraction. Multiplication by a nonzero number is undone by division. The working order for a tidy linear equation is:

1. Expand brackets if there are any.
2. Collect like terms on each side.
3. Move all terms with the unknown to one side and the constants to the other.
4. Divide by the coefficient of the unknown, provided that coefficient is not zero.
5. Check the answer in the original equation.

**Example 1.** Solve $3x + 4 = 19$.

Subtract $4$ from both sides:

$$
3x = 15.
$$

Divide both sides by $3$:

$$
x = 5.
$$

Check: $3(5) + 4 = 19$. True, so $x = 5$ is the solution.

### Terms, coefficients and like terms

A **term** is a single piece of an expression, such as $3x$ or $4$. A **coefficient** is the number multiplying a letter, so in $3x$ the coefficient is $3$. **Like terms** carry the same letter power and can be added: $2x + 5x = 7x$, but $2x + 5$ cannot be collapsed into one term.

**Example 2.** Solve $5x - 2x + 7 = 22$.

$$
3x + 7 = 22, \qquad 3x = 15, \qquad x = 5.
$$

### Brackets first

If an equation contains brackets, expand them before isolating. Use the distributive law: $a(b + c) = ab + ac$.

**Example 3.** Solve $3(x + 1) = 12$.

$$
3x + 3 = 12, \qquad 3x = 9, \qquad x = 3.
$$

Check: $3(3 + 1) = 12$. True.

If a minus sits in front of a bracket, distribute the minus carefully:

$$
-(2x - 5) = -2x + 5.
$$

Losing that sign change is one of the commonest exam errors.

### Fractions and clearing denominators

When every term is a fraction, multiply through by a common denominator so that the new equation has no fractions. That step is allowed because multiplying both sides by the same nonzero number preserves equality.

**Example 4.** Solve $\dfrac{x - 7}{2} = 4$.

Multiply both sides by $2$:

$$
x - 7 = 8, \qquad x = 15.
$$

Check: $\dfrac{15 - 7}{2} = 4$. True.

If several denominators appear, use their least common multiple.

**Example 5.** Solve $\dfrac{x}{2} + \dfrac{x}{3} = 10$.

Multiply through by $6$:

$$
3x + 2x = 60, \qquad 5x = 60, \qquad x = 12.
$$

### Unknowns on both sides

Bring every term with $x$ to one side and every constant to the other.

**Example 6.** Solve $5x - 3 = 2x + 9$.

Subtract $2x$ from both sides:

$$
3x - 3 = 9.
$$

Add $3$:

$$
3x = 12, \qquad x = 4.
$$

Check: $5(4) - 3 = 17$ and $2(4) + 9 = 17$. True.

### One solution, none, or infinitely many

After simplifying, a linear equation ends in one of three ways.

| Ending | Meaning | Solution set |
| --- | --- | --- |
| $ax = b$ with $a \neq 0$ | Unique solution | $x = b/a$ |
| $0 = c$ with $c \neq 0$ | Contradiction | Empty set: no solution |
| $0 = 0$ | Identity | Every real $x$ works |

**Example 7.** The equation $2x + 1 = 2x + 5$ simplifies to $1 = 5$, which is false. There is no solution.

**Example 8.** The equation $2(x + 3) = 2x + 6$ simplifies to $2x + 6 = 2x + 6$, hence $0 = 0$. Every real $x$ is a solution.

Exam statements often hide these endings behind a parameter. That is the next idea.

### Parameters in a linear equation

A **parameter** is a letter treated as a fixed but unknown number while you solve for $x$. Typical letters are $k$, $m$ or $a$. The question becomes: for which values of the parameter does the equation have one solution, none, or infinitely many?

Write the equation in the shape

$$
A(k)\, x = B(k),
$$

then read the coefficient of $x$.

| Condition on $A(k)$ and $B(k)$ | Number of solutions for $x$ |
| --- | --- |
| $A(k) \neq 0$ | Exactly one: $x = B(k)/A(k)$ |
| $A(k) = 0$ and $B(k) \neq 0$ | None |
| $A(k) = 0$ and $B(k) = 0$ | Infinitely many |

**Example 9.** Consider

$$
(k - 2)x = 6.
$$

- If $k \neq 2$, then $x = 6/(k - 2)$ is the unique solution.
- If $k = 2$, the equation becomes $0 = 6$, so there is no solution.
- There is no value of $k$ that makes both sides zero here, so infinitely many solutions never occur.

**Example 10.** Consider

$$
(k + 1)x = 2k + 2.
$$

Rewrite the right side as $2(k + 1)$:

$$
(k + 1)x = 2(k + 1).
$$

- If $k \neq -1$, divide by $k + 1$ to get $x = 2$.
- If $k = -1$, both sides are zero for every $x$, so the equation is an identity and every real $x$ is a solution.

So there is exactly one parameter value, $k = -1$, that produces infinitely many solutions. That is the kind of claim you meet in parametric equilibrium and cost-sharing models.

### Word problems that become linear

Translate the story into an equation, solve, then read the answer back into the story. Units and signs matter: a volume cannot be negative, a price is usually positive, and a count of people must be a whole number.

**Example 11.** A vat holds $40$ litres of $25\%$ acid. Eight litres are drawn off and replaced by $50\%$ acid. What is the new concentration?

Start with $0.25 \cdot 40 = 10$ litres of pure acid. Drawing $8$ litres of the $25\%$ mix removes $2$ litres of acid, leaving $8$ litres of acid in $32$ litres of mixture. Adding $8$ litres of $50\%$ stock adds $4$ litres of acid, so $12$ litres of acid sit in $40$ litres:

$$
\frac{12}{40} = 0.30 = 30\%.
$$

The new concentration is $30\%$, not $32\%$. The trap is treating the removed liquid as pure water or forgetting that the drawn-off part still contains acid.

**Example 12.** Pipe $A$ fills a tank in $20$ minutes and pipe $B$ in $30$ minutes. How long do they need together?

Rates add:

$$
\frac{1}{20} + \frac{1}{30} = \frac{1}{12},
$$

so together they finish the tank in $12$ minutes.

### Exam traps in 4.1

- Dividing by a coefficient that might be zero when a parameter is present.
- Reading $0 = 0$ as “no solution” instead of “every $x$”.
- Reading $0 = 5$ as “$x = 0$”.
- Expanding $-(x - 3)$ as $-x - 3$ instead of $-x + 3$.
- Checking a claimed root by substitution and calling the statement true when the substitution fails.

**Working order for a linear claim.** Clean brackets and fractions, collect $x$ on one side, and look at the coefficient of $x$. If a parameter remains, classify the cases $A \neq 0$, $A = 0$ with $B \neq 0$, and $A = B = 0$. Then answer the claim about uniqueness, sign, or a parameter condition.

---

## 4.2 Quadratic equations

### The standard form

An equation is **quadratic** when it can be written as

$$
ax^{2} + bx + c = 0
$$

with $a \neq 0$. The number $a$ is the leading coefficient, $b$ is the linear coefficient, and $c$ is the constant term. The unknown may appear only to the second power and the first power. No higher powers, no $x$ in a denominator, and no $x$ under a root in the pure quadratic case.

| Equation | Quadratic? | Reason |
| --- | --- | --- |
| $x^{2} - 5x + 6 = 0$ | Yes | Standard form with $a = 1$ |
| $2x^{2} = 8$ | Yes | Rearranges to $2x^{2} - 8 = 0$ |
| $(x - 3)(x - 5) = 8$ | Yes | Expands to a quadratic |
| $x^{3} - x = 0$ | No | Degree three |
| $\dfrac{1}{x} + x = 2$ | No | Unknown in a denominator |

### Factoring when a product is zero

If a product equals zero, at least one factor is zero:

$$
AB = 0 \quad \Rightarrow \quad A = 0 \ \text{or}\ B = 0.
$$

**Example 1.** Solve $x^{2} - 5x + 6 = 0$.

$$
(x - 2)(x - 3) = 0,
$$

so $x = 2$ or $x = 3$.

**Example 2.** Solve $x^{2} = 49$.

$$
x^{2} - 49 = 0, \qquad (x - 7)(x + 7) = 0,
$$

so $x = 7$ or $x = -7$. Both signs of a square root matter unless the story forbids one of them.

### Completing the square

Rewrite $ax^{2} + bx + c = 0$ so that a perfect square appears. For $a = 1$:

$$
x^{2} + bx = \left(x + \frac{b}{2}\right)^{2} - \left(\frac{b}{2}\right)^{2}.
$$

**Example 3.** Solve $x^{2} + 6x - 7 = 0$ by completing the square.

$$
x^{2} + 6x = 7,
$$

$$
\left(x + 3\right)^{2} - 9 = 7,
$$

$$
\left(x + 3\right)^{2} = 16,
$$

$$
x + 3 = \pm 4,
$$

so $x = 1$ or $x = -7$.

Completing the square is also the clean way to read a vertex form such as $(x - h)^{2} = k$ in a profit or operating model.

### The quadratic formula and the discriminant

For $ax^{2} + bx + c = 0$ with $a \neq 0$,

$$
x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}.
$$

The expression under the square root is the **discriminant**:

$$
\Delta = b^{2} - 4ac.
$$

| Discriminant | Number of real roots |
| --- | --- |
| $\Delta > 0$ | Two distinct real roots |
| $\Delta = 0$ | Exactly one real root (a repeated root) |
| $\Delta < 0$ | No real roots |

**Example 4.** For $x^{2} + x + 1 = 0$,

$$
\Delta = 1 - 4 = -3 < 0,
$$

so there are no real roots. Completing the square gives the same conclusion:

$$
x^{2} + x + 1 = \left(x + \tfrac12\right)^{2} + \tfrac34 > 0
$$

for every real $x$.

**Example 5.** For $2x^{2} - 3x - 2 = 0$,

$$
\Delta = 9 + 16 = 25 > 0,
$$

$$
x = \frac{3 \pm 5}{4},
$$

so $x = 2$ or $x = -\tfrac12$.

### Vieta’s relations

If $ax^{2} + bx + c = 0$ has roots $x_1$ and $x_2$ (counting a repeated root twice), then

$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}.
$$

These identities let you answer claims about sums, products, sums of squares, and sums of reciprocals without naming each root first.

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

**Example 6.** The roots of $x^{2} - 9x + 14 = 0$ have sum $9$ and product $14$. They are $2$ and $7$. The claim “both roots exceed $5$” is false because $2 \le 5$.

**Example 7.** If two break-even quantities are roots of a quadratic and their product is negative, then the roots have opposite signs. By Vieta, that means $c/a < 0$.

### Signs of the roots

Once $\Delta \ge 0$, the signs are read from the sum and product:

| Product $x_1 x_2$ | Sum $x_1 + x_2$ | Conclusion |
| --- | --- | --- |
| Positive | Positive | Both roots positive (or both zero only in degenerate cases) |
| Positive | Negative | Both roots negative |
| Negative | Any | Opposite signs |
| Zero | any | At least one root is zero |

For “both strictly positive” you typically need $\Delta \ge 0$, sum $> 0$, and product $> 0$. Exam statements with a parameter $m$ ask you to turn those three conditions into inequalities on $m$.

### Parametric quadratics

When coefficients depend on a parameter $m$, treat $\Delta(m)$, the sum and the product as functions of $m$. Typical claims:

- “Exactly one real solution if and only if $m = \ldots$” means $\Delta(m) = 0$ at that value alone.
- “Two distinct positive roots” means $\Delta > 0$, sum $> 0$, product $> 0$.
- “Opposite signs” means product $< 0$ (and then $\Delta > 0$ follows automatically for real coefficients in the usual monic setup, but still check).

**Example 8.** Suppose a model gives

$$
x^{2} - (m-1)x + (m - 4) = 0.
$$

Then

$$
\Delta = (m-1)^{2} - 4(m-4).
$$

Set $\Delta = 0$ to find the parameter values that produce a repeated root. Compare the sum $m-1$ and the product $m-4$ with zero to classify signs.

### Biquadratic equations

An equation of the form $ay^{4} + by^{2} + c = 0$ is **biquadratic**. Set $u = y^{2}$ with $u \ge 0$, solve the quadratic in $u$, then take square roots of every nonnegative root $u$.

**Example 9.** Solve $u^{2} - 5u + 4 = 0$ after the substitution $u = y^{2}$.

$$
(u - 1)(u - 4) = 0,
$$

so $u = 1$ or $u = 4$. Then $y = \pm 1$ or $y = \pm 2$: four distinct real solutions. If a quadratic in $u$ returned a negative root, that root would contribute no real $y$.

### Word problems that become quadratic

Areas, Pythagoras, consecutive integers, and break-even quantities often produce quadratics.

**Example 10.** Two consecutive integers have product $56$.

$$
n(n + 1) = 56, \qquad n^{2} + n - 56 = 0.
$$

$$
\Delta = 1 + 224 = 225, \qquad n = \frac{-1 \pm 15}{2},
$$

so $n = 7$ or $n = -8$. The consecutive pairs are $7,8$ and $-8,-7$.

**Example 11.** A rectangle has area $60$ and one side is $5$ more than the other.

$$
w(w + 5) = 60, \qquad w^{2} + 5w - 60 = 0.
$$

The positive root is $w = 5$, so the sides are $5$ and $10$.

### Exam traps in 4.2

- Forgetting the $\pm$ when taking square roots.
- Using Vieta while $\Delta < 0$ (there are no real roots to sum).
- Claiming “unique root” whenever the story wants a positive length, even though the algebra still has two real roots and only one is admissible.
- Dropping the condition $a \neq 0$ when the leading coefficient depends on a parameter.
- Treating a biquadratic as if every root of the $u$-quadratic automatically gives two real $y$ values.

**Working order for a quadratic claim.** Bring the equation to $ax^{2} + bx + c = 0$. Compute $\Delta$. If the claim is about count of roots, stop there. If it is about sum, product, or signs, use Vieta. If a parameter appears, solve inequalities on $\Delta$, sum and product. Always check which roots the story allows.

---

## 4.3 Rational, radical and absolute-value equations

### Rational equations and the domain

A **rational equation** has the unknown in a denominator. Before solving, write the **domain**: every value that makes any denominator zero is excluded.

**Example 1.** For

$$
\frac{x}{x + 3} = \frac{2}{5},
$$

the hole is $x = -3$. That value is never a solution, even if it appears later as a root of an auxiliary equation.

### Clearing denominators

Multiply through by the common denominator. The new equation is only equivalent on the domain. After solving the auxiliary equation, discard every candidate that hits a hole.

**Example 2.** Solve $\dfrac{x}{x + 3} = \dfrac{2}{5}$.

Exclude $x = -3$. Multiply by $5(x + 3)$:

$$
5x = 2(x + 3), \qquad 5x = 2x + 6, \qquad 3x = 6, \qquad x = 2.
$$

The value $2$ is not the hole. Check: $\dfrac{2}{5} = \dfrac{2}{5}$. So $x = 2$ is the unique solution.

**Example 3.** Solve $\dfrac{1}{x} - \dfrac{1}{x + 3} = \dfrac{1}{4}$.

Need $x \neq 0$ and $x \neq -3$. Combine the left side:

$$
\frac{3}{x(x + 3)} = \frac{1}{4}, \qquad x(x + 3) = 12, \qquad x^{2} + 3x - 12 = 0.
$$

$$
\Delta = 9 + 48 = 57, \qquad x = \frac{-3 \pm \sqrt{57}}{2}.
$$

Both roots miss the holes, so there are two real solutions. A claim that says “exactly one real solution” is false.

### Extraneous roots from clearing

Sometimes clearing denominators creates an extra root that sits on a hole. That root solves the polynomial equation you wrote, but it does not solve the original rational equation.

**Example 4.** Consider $\dfrac{x}{x - 2} = 1$.

Exclude $x = 2$. Clearing gives $x = x - 2$, hence $0 = -2$, a contradiction. There is no solution. If someone multiplies carelessly and then “plugs $x = 2$ back in”, that value is excluded by the domain: it is extraneous in the strongest sense, because the original left side is undefined there.

### Radical equations

A **radical equation** contains the unknown under a root. For square roots over the reals:

1. State the domain: every radicand must be nonnegative, and if a square root stands alone equal to an expression, that expression must be nonnegative too.
2. Isolate one radical.
3. Square both sides.
4. Solve the resulting polynomial equation.
5. Check every candidate in the original equation and against the domain.

Squaring is not reversible without a check. The equation $A = B$ implies $A^{2} = B^{2}$, but $A^{2} = B^{2}$ also allows $A = -B$. Candidates that fail the check are called **extraneous roots**.

**Example 5.** Solve $\sqrt{5x + 1} = x + 1$.

Domain from the radicand: $x \ge -\tfrac15$. From the right side: $x + 1 \ge 0$, so $x \ge -1$. The tighter condition is $x \ge -\tfrac15$.

Square:

$$
5x + 1 = (x + 1)^{2}, \qquad 0 = x^{2} - 3x, \qquad x(x - 3) = 0.
$$

Candidates: $x = 0$ and $x = 3$. Both lie in the domain. Check:

$$
\sqrt{1} = 1, \qquad \sqrt{16} = 4.
$$

Both work, so there are two real solutions. A claim of “exactly one” is false.

**Example 6.** Solve $\sqrt{2x + 1} = 4 - x$.

Need $x \ge -\tfrac12$ and $4 - x \ge 0$, so $-\tfrac12 \le x \le 4$. Squaring yields

$$
2x + 1 = (4 - x)^{2}, \qquad x^{2} - 10x + 15 = 0, \qquad x = 5 \pm \sqrt{10}.
$$

Only $5 - \sqrt{10}$ lies in $[-\tfrac12, 4]$. The other root is extraneous. Exactly one real solution survives.

**Example 7.** Isolate-and-square with a difference of roots:

$$
\sqrt{x + 24} - \sqrt{x} = 2, \qquad x \ge 0.
$$

Isolate:

$$
\sqrt{x + 24} = 2 + \sqrt{x}.
$$

Square:

$$
x + 24 = 4 + 4\sqrt{x} + x, \qquad 20 = 4\sqrt{x}, \qquad \sqrt{x} = 5, \qquad x = 25.
$$

Check: $\sqrt{49} - \sqrt{25} = 2$. Valid.

### Absolute-value equations

The absolute value $|A|$ is $A$ when $A \ge 0$ and $-A$ when $A < 0$. Geometrically, $|x - a|$ is the distance from $x$ to $a$ on the number line.

Basic equation:

$$
|A| = b \quad (b \ge 0) \quad \Rightarrow \quad A = b \ \text{or}\ A = -b.
$$

If $b < 0$, there is no solution.

**Example 8.** Solve $|x - 3| = 5$.

$$
x - 3 = 5 \quad \text{or} \quad x - 3 = -5,
$$

so $x = 8$ or $x = -2$.

When both sides involve absolute values, split into cases according to the critical points where expressions inside absolute values change sign. Solve inside each region, then keep only solutions that lie in that region.

**Example 9.** Solve $|3 - 2x| = |x + 4|$.

Case 1: $3 - 2x = x + 4$ gives $x = -\tfrac13$.

Case 2: $3 - 2x = -(x + 4)$ gives $x = 7$.

Both values are admissible for this equal-absolute-value setup, so there are two real solutions. A claim of “exactly one” is false.

**Example 10.** A depot on a straight road has distances to kilometre-posts $-2$ and $6$ that add to $12$:

$$
|x + 2| + |x - 6| = 12.
$$

Between $-2$ and $6$ the sum of distances is constantly $8$, which is less than $12$. Outside that interval the equation recovers $x = -4$ or $x = 8$. The sites are $-4$ and $8$, not $0$ and $8$.

### Parametric rational equations

If a denominator or a cleared equation depends on a parameter, first write the holes as functions of the parameter, then clear, then discard forbidden roots. Claims often ask whether replacing a numerator changes the number of admissible solutions, or whether the unique survivor is an odd integer, or whether an auxiliary quadratic has roots symmetric about zero.

### Exam traps in 4.3

- Accepting a root that makes a denominator zero.
- Squaring without checking, then counting an extraneous root as valid.
- Forgetting that a square root is nonnegative, so $\sqrt{A} = -3$ is immediately impossible.
- Solving $|A| = B$ when $B$ might be negative.
- Mixing the regions when splitting absolute-value cases.

**Working order.** Write the domain first. Transform (clear, isolate and square, or split cases). Solve the auxiliary equation. Filter by domain and by direct substitution into the original equation. Only then answer a claim about uniqueness, sign, or an extraneous root.

---

## 4.4 Exponential and logarithmic equations

### Exponential equations with the same base

An **exponential equation** has the unknown in an exponent. When both sides are powers of the same positive base $a \neq 1$,

$$
a^{u} = a^{v} \quad \Rightarrow \quad u = v.
$$

**Example 1.** Solve $2^{x} = 8$.

$$
2^{x} = 2^{3} \quad \Rightarrow \quad x = 3.
$$

The solution is odd, so a claim that it is odd is true.

**Example 2.** Solve $3^{x + 1} = 81$.

$$
3^{x + 1} = 3^{4} \quad \Rightarrow \quad x + 1 = 4 \quad \Rightarrow \quad x = 3,
$$

a positive integer.

**Example 3.** Solve $5^{2x} = 125$.

$$
5^{2x} = 5^{3} \quad \Rightarrow \quad 2x = 3 \quad \Rightarrow \quad x = \tfrac32,
$$

which is not an integer.

**Example 4.** Solve $2^{x} = \dfrac{1}{16}$.

$$
2^{x} = 2^{-4} \quad \Rightarrow \quad x = -4,
$$

which is negative.

**Example 5.** Solve $7^{x - 1} = 1$.

Any nonzero number to the power $0$ is $1$, and $7^{0} = 1$, so

$$
x - 1 = 0 \quad \Rightarrow \quad x = 1.
$$

The equation does have a solution. A claim that it has none is false.

### Matching bases that look different

Powers such as $4^{x}$, $8^{x}$ and $16^{x}$ are rewritten as powers of $2$. Powers of $9$ and $27$ become powers of $3$.

**Example 6.** Solve $4^{x} = 8$.

$$
(2^{2})^{x} = 2^{3}, \qquad 2^{2x} = 2^{3}, \qquad 2x = 3, \qquad x = \tfrac32,
$$

not an integer.

**Example 7.** Solve $8^{x} = 4^{x + 1}$.

$$
(2^{3})^{x} = (2^{2})^{x + 1}, \qquad 2^{3x} = 2^{2x + 2}, \qquad 3x = 2x + 2, \qquad x = 2,
$$

an even number.

**Example 8.** Solve $9^{x} = 27$.

$$
(3^{2})^{x} = 3^{3}, \qquad 2x = 3, \qquad x = \tfrac32,
$$

which lies strictly between $1$ and $2$.

### When the unknown is only in the exponent after a rewrite

Sometimes one side is a constant and the other is already a pure exponential. Take logarithms only when bases refuse to match. If they do match after rewriting, prefer matching exponents, because that stays exact.

### Definition of a logarithm

The statement

$$
\log_{a} x = y
$$

means

$$
a^{y} = x,
$$

where the base satisfies $a > 0$, $a \neq 1$, and the argument satisfies $x > 0$. The **natural logarithm** $\ln x$ is $\log_{e} x$ with $e \approx 2.718$.

Immediate consequences:

$$
\log_{a} 1 = 0, \qquad \log_{a} a = 1, \qquad \log_{a}(a^{k}) = k.
$$

**Example 9.** Solve $\log_{2} x = 5$.

$$
x = 2^{5} = 32,
$$

which is larger than $30$.

**Example 10.** Solve $\ln x = 0$.

$$
x = e^{0} = 1.
$$

A logarithm can vanish: $\log_{a} 1 = 0$. The claim that $\ln x = 0$ has no solution is false.

**Example 11.** Solve $\log_{3}(x - 2) = 2$.

Domain: $x - 2 > 0$, so $x > 2$. Then

$$
x - 2 = 3^{2} = 9, \qquad x = 11,
$$

a two-digit integer.

**Example 12.** Solve $\log_{4} x = \tfrac12$.

$$
x = 4^{1/2} = 2,
$$

which is not greater than $3$.

**Example 13.** Solve $\log_{x} 81 = 4$.

Domain for the base: $x > 0$, $x \neq 1$, and the argument $81 > 0$ is fine. Then

$$
x^{4} = 81 = 3^{4}, \qquad x = 3
$$

(the real positive solution with $x \neq 1$). The unknown base equals $3$, which is smaller than $4$.

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

**Example 14.** Solve $\log_{2}(t + 6) + \log_{2}(t - 1) = 3$.

Domain: $t + 6 > 0$ and $t - 1 > 0$, so $t > 1$. Combine:

$$
\log_{2}\big((t + 6)(t - 1)\big) = 3,
$$

$$
(t + 6)(t - 1) = 2^{3} = 8,
$$

$$
t^{2} + 5t - 6 = 8, \qquad t^{2} + 5t - 14 = 0,
$$

$$
(t + 7)(t - 2) = 0,
$$

so $t = -7$ or $t = 2$. Only $t = 2$ lies in $t > 1$. The product of the algebraic roots is $-14$, but only one root is admissible.

### Domain decides the answer

Before solving a logarithmic equation, write every condition:

- each argument of a logarithm is positive;
- each base is positive and not equal to $1$;
- if a logarithm sits in a denominator or under a root, add those restrictions too.

Failing to check the domain is the main source of false “two solutions” claims in 4.4.

### Growth and decay models

Exponential equations appear in capital growth and percentage decay.

If a capital doubles at a fixed periodic rate, or a substance loses a fixed percent each year, the model has the shape

$$
A(t) = A_{0} a^{t}
$$

or

$$
A(t) = A_{0} e^{kt}.
$$

Solving for time means taking a logarithm after isolating the exponential factor.

**Example 15.** A substance loses $5\%$ a year, so a factor of $0.95$ remains each year:

$$
A(t) = A_{0}(0.95)^{t}.
$$

The half-life condition $A(t) = \tfrac12 A_{0}$ becomes

$$
(0.95)^{t} = \tfrac12, \qquad t = \frac{\ln(1/2)}{\ln(0.95)}.
$$

The exact value is what the algebra produces. Exam claims usually compare that $t$ with a stated integer or with another solved time from a companion equation.

### Exam traps in 4.4

- Writing $\log_{a} 1 = 1$ instead of $0$.
- Allowing a nonpositive argument of a logarithm.
- Matching bases incorrectly, for example treating $4^{x} = (2^{x})^{2}$ as if the exponents alone must match without rewriting both sides over $2$.
- Taking $\log$ of both sides and dropping the condition that both sides are positive.
- Counting an algebraic root that violates $t > 1$ or $x > 0$.

**Working order.** Rewrite to a common base when possible. Otherwise isolate a logarithm or an exponential and apply the definition. Write the domain first for every log equation. Filter roots, then answer the claim about sign, size, or uniqueness.

---

## 4.5 Mixed exam sets

### What a mixed set is asking

A mixed task puts several equation types into one story: a linear procurement model, a quadratic break-even, a radical quality check, a rational delivery speed, and a logarithmic growth time may sit in the same five statements. Each letter is still one closed claim. You do not solve “the whole company”. You identify which model the letter refers to, solve that equation, and test the claim.

### A short map from wording to model

| Clue in the story | Likely model |
| --- | --- |
| Cost share, mixture volume, rate sum, parameter $k$ in a linear balance | Linear equation in one unknown |
| Break-even quantities, area, profit zero, two output levels | Quadratic equation |
| Speeds in a denominator, concentration fractions, holes | Rational equation |
| Square-root quality gap, isolate-and-square | Radical equation |
| Distance on a line, tolerance band | Absolute value |
| Doubling time, same-base powers, $\log$, $\ln$ | Exponential or logarithmic |

### Strategy for each letter

1. Name the equation the letter is talking about.
2. State the domain or parameter restrictions.
3. Solve with the method of the matching section above.
4. Translate the claim into a comparison: “unique”, “two distinct”, “strictly greater than $7$”, “extraneous root”, “no parameter gives infinitely many solutions”.
5. Decide true or false only after the algebra is finished.

**Example 1.** A mixed logistics claim says the rational overhead equation admits exactly one valid solution because a factor cancels and creates a hole. That is a 4.3 problem inside a 4.5 story: clear denominators, list the holes, and count survivors.

**Example 2.** A mixed start-up claim says a logarithmic milestone is solved by a unique $t > 2.5$. Solve the log equation, keep the domain, and compare the survivor with $2.5$.

**Example 3.** A mixed production claim says there is no real $k$ for which a linear grain model has infinitely many solutions. Rewrite as $A(k)x = B(k)$ and check whether $A$ and $B$ can vanish together. If they never do, the claim is true.

### Keeping models separate

Do not reuse a root from the quadratic profit model as if it answered the radical quality equation. Each statement has its own unknown and its own domain. Shared letters such as $x$ or $t$ in different statements are not the same quantity unless the text explicitly says so.

### Physical filters in applied stories

After the algebra, apply the story’s extra rules:

- volumes, times and speeds are usually nonnegative, and often strictly positive;
- a cancelled hole in a simplified rational expression is still forbidden;
- an extraneous squared root is still not a solution;
- a parameter that makes a leading coefficient zero must be handled as a separate case, not plugged into a formula that divided by that coefficient.

### Summary reference

| Task | Method |
| --- | --- |
| Linear equation | Inverse operations; classify $ax = b$, $0 = c$, $0 = 0$ |
| Linear with parameter | Study $A(k)x = B(k)$ |
| Quadratic | Factor, complete the square, or use the formula |
| Count real quadratic roots | Read $\Delta = b^{2} - 4ac$ |
| Sum and product of roots | Vieta: $-b/a$ and $c/a$ |
| Rational equation | Domain first, clear denominators, discard holes |
| Radical equation | Domain, isolate, square, check for extraneous roots |
| Absolute value | Split cases or use distance; reject negative right-hand sides |
| Exponential, same base | Match exponents |
| Exponential, related bases | Rewrite as powers of $2$ or $3$, then match |
| Logarithm | Use $a^{y} = x$; keep argument positive and base allowed |
| Mixed exam letter | Identify the model, solve only that equation, test the claim |

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

**Working order on a Chapter 4 statement.** Identify the equation type. Write every domain or parameter restriction. Solve with the matching technique. Filter illegal or extraneous roots. Only then accept or reject the true/false claim about uniqueness, sign, size, or a parameter condition.

**Self-check.** When does a linear equation have infinitely many solutions? How do you read the number of real quadratic roots from $\Delta$? What do Vieta’s sum and product tell you about signs? Why must holes be excluded after clearing denominators? Why can squaring create an extraneous root? What domain conditions belong to $\log_{a} x = y$? In a mixed set, why must each letter be solved as its own equation?
