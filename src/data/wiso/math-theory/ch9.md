# Chapter 9 — Polynomial functions

A polynomial is a finite sum of powers of one variable with constant coefficients. The same object appears as a cubic speed law, a warehouse cost, a temperature schedule, a graph with two turns, or a short table of sampled values. The stories change. The algebra does not.

This chapter starts from the definition of degree and leading coefficient and builds every tool the BBE tasks use: evaluation, parity, end behaviour, roots and factors, multiplicity, sums and products, composition, meetings of curves, finite differences, parametric families, and applied models that mix a formula with a table. The later examples combine several ideas because the difficult questions rarely tell you which rule to use.

## Learning objectives

- Read degree, leading coefficient and constant term from any written form.
- Evaluate a polynomial and rewrite it in descending powers when needed.
- Decide even, odd or neither from coefficients or from $p(-x)$.
- Predict end behaviour from degree and the sign of the leading coefficient.
- Use roots, factors, the factor theorem and multiplicity (touch versus cross).
- Track how degree changes under sum, difference, product and composition, including cancellation.
- Bound turning points and count meetings of two polynomial graphs.
- Diagnose degree from equally spaced samples by subtracting neighbouring values.
- Rebuild a monic polynomial from a root pattern, including fractional roots, and read Vieta sums and products.
- Handle one-parameter families: how many real zeros, where the turns sit, and what the sliding letter does.
- Solve applied stems that mix differentiation of a cubic model with table averages.
- Spot the usual traps that flip True/False statements on the exam.

---

## 9.1 What a polynomial is

### The formula

A **polynomial** in one variable $x$ is a function of the form

$$
p(x)=a_n x^n+a_{n-1}x^{n-1}+\cdots+a_1 x+a_0,
$$

where $n$ is a non-negative integer, each $a_i$ is a real constant, and $a_n\neq 0$ when the polynomial is not the zero polynomial.

The number $n$ is the **degree** of $p$, written $\deg(p)=n$. The coefficient $a_n$ is the **leading coefficient**. The constant $a_0$ is the **constant term**, and it equals $p(0)$.

If the leading coefficient is $1$, the polynomial is called **monic**. Many rebuild tasks ask for a monic cubic from a given root pattern.

Typical low degrees:

| Degree | Name | Example |
| --- | --- | --- |
| $0$ | constant (nonzero) | $p(x)=5$ |
| $1$ | linear | $p(x)=2x-3$ |
| $2$ | quadratic | $p(x)=x^2-4x+1$ |
| $3$ | cubic | $p(x)=x^3-2x+4$ |
| $4$ | quartic | $p(x)=x^4-3x^2+5$ |

The zero polynomial $p(x)=0$ is a special case. Its degree is often left undefined, or defined as $-\infty$, so that degree rules for products stay consistent. Exam tasks almost always work with nonzero polynomials.

### What is not a polynomial

$f(x)=2^x$ is exponential: the variable sits in the exponent. $f(x)=\sqrt{x}=x^{1/2}$ has a fractional exponent. $f(x)=1/x=x^{-1}$ has a negative exponent. $f(x)=|x|$ is not a polynomial. $f(x)=\ln x$ is not a polynomial.

A **power function** $ax^b$ from Chapter 8 is a polynomial only when $b$ is a non-negative integer. Sums of several different powers, such as $x^3+x$, are polynomials, but they are not pure power functions.

**Example 1.** Let

$$
p(x)=5-3x^2+x^4.
$$

Rewrite in descending powers:

$$
p(x)=x^4-3x^2+5.
$$

The highest surviving power is $x^4$, so $\deg(p)=4$. The leading coefficient is $1$. The constant term is $5$. There is no $x^3$ term and no $x$ term: those coefficients are zero, but zero coefficients do not change the degree.

**Example 2.** Let

$$
q(x)=4x^3-x+5.
$$

Then $\deg(q)=3$ and the leading coefficient is $4$. The coefficient of $x$ is $-1$. Quoting $-1$ as the leading coefficient is a common mix-up between the two ends of the polynomial.

### Domain

Every polynomial is defined for every real $x$. There is no denominator to vanish and no even root of a negative number. When a story restricts $q\ge 0$ for quantity or $t\ge 0$ for time, that restriction comes from the story, not from the algebra of the polynomial itself.

---

## 9.2 Evaluation and basic reading

### Substitution

To evaluate $p$ at a number $a$, replace every $x$ by $a$ and simplify the powers.

**Example 1.** For $p(x)=x^3-2x+4$,

$$
p(0)=4,\qquad p(1)=1-2+4=3,\qquad p(-1)=-1+2+4=5.
$$

Watch the signs carefully when the input is negative. Odd powers flip sign. Even powers do not.

### Constant term versus leading term

$p(0)$ is always the constant term. The leading term $a_n x^n$ dominates for large $|x|$, but it is not $p(0)$.

Claims that confuse “the leftover constant” with “the leading coefficient” appear often when the polynomial is written out of order, as in $5-3x^2+x^4$.

### Factored form

A product of linear factors is still a polynomial. Expanding is optional when the claim only needs roots or degree.

**Example 2.** Let

$$
p(x)=(x-1)(x+2)(x-3).
$$

Each factor contributes degree $1$, so $\deg(p)=3$. The zeros are $x=1$, $x=-2$ and $x=3$. Expanding gives

$$
p(x)=x^3-2x^2-5x+6,
$$

but you do not need the expanded form to answer “where does $p$ vanish?”

**Example 3.** Let

$$
p(x)=(2x-1)(x^2+1).
$$

The quadratic $x^2+1$ has no real roots. The only real root comes from $2x-1=0$, so $x=\frac12$. The degree is still $3$, because $x^2+1$ contributes degree $2$.

---

## 9.3 Even and odd polynomials

### The definitions

A function $p$ is **even** when

$$
p(-x)=p(x)
$$

for every $x$ in the domain. Its graph is symmetric across the $y$-axis.

A function $p$ is **odd** when

$$
p(-x)=-p(x)
$$

for every $x$. Its graph is symmetric through the origin.

Most polynomials are neither. The test is mechanical: form $p(-x)$ and compare.

### Coefficient reading

For a polynomial, parity is a coefficient reading:

- only even powers ($x^0$, $x^2$, $x^4$, …) survive in an even polynomial;
- only odd powers ($x$, $x^3$, $x^5$, …) survive in an odd polynomial.

If both even and odd powers appear with nonzero coefficients, $p$ is neither.

**Example 1.** Let $p(x)=x^3-4x$. Then

$$
p(-x)=-x^3+4x=-(x^3-4x)=-p(x),
$$

so $p$ is odd.

**Example 2.** Let $p(x)=x^4-3x^2+5$. Only even powers appear, so $p$ is even.

**Example 3.** Let $p(x)=x^3+x^2$. Then

$$
p(-x)=-x^3+x^2,
$$

which equals neither $p(x)$ nor $-p(x)$. The polynomial is neither even nor odd.

### Shifts destroy oddness

If $p$ is odd and $c\neq 0$, then

$$
q(x)=p(x)+c
$$

satisfies $q(0)=c\neq 0$. An odd function must send $0$ to $0$, so $q$ cannot be odd. Vertical shifts preserve evenness when $p$ was even, because

$$
q(-x)=p(-x)+c=p(x)+c=q(x).
$$

Exam stems often add a constant and ask whether parity survives. Check $q(0)$ first for oddness.

### Even and odd parts

Any polynomial splits uniquely as

$$
p(x)=p_{\mathrm{even}}(x)+p_{\mathrm{odd}}(x),
$$

where

$$
p_{\mathrm{even}}(x)=\frac{p(x)+p(-x)}{2},\qquad
p_{\mathrm{odd}}(x)=\frac{p(x)-p(-x)}{2}.
$$

You rarely need the formulas by name. You need the habit of collecting even powers and odd powers separately.

---

## 9.4 End behaviour

### What “start” and “end” mean here

A polynomial is defined for every real $x$. So the graph has no first or last point on the axis. When we say where the graph **starts** and **ends**, we mean the far left and the far right:

- far left: what happens as $x\to-\infty$;
- far right: what happens as $x\to+\infty$.

In both directions the graph either rises without bound ($+\infty$) or falls without bound ($-\infty$). Those two far ends are the **end behaviour**.

### The leading term decides the far field

For large $|x|$, the graph of $p$ follows its leading term $a_n x^n$. Lower-degree terms become small by comparison.

Two facts control the picture:

1. whether the degree $n$ is even or odd;
2. the sign of the leading coefficient $a_n$.

| Degree | Leading coefficient | Far left ($x\to-\infty$) | Far right ($x\to+\infty$) |
| --- | --- | --- | --- |
| even | $a_n>0$ | $+\infty$ | $+\infty$ |
| even | $a_n<0$ | $-\infty$ | $-\infty$ |
| odd | $a_n>0$ | $-\infty$ | $+\infty$ |
| odd | $a_n<0$ | $+\infty$ | $-\infty$ |

Odd degree: the two ends go **opposite** ways.

[[FIGURE:poly-ends-odd|Odd-degree polynomials. Solid curve: positive lead (left −∞, right +∞). Dashed curve: negative lead (left +∞, right −∞).]]

Even degree: the two ends go the **same** way.

[[FIGURE:poly-ends-even|Even-degree polynomials. Solid curve: positive lead (both ends +∞). Dashed curve: negative lead (both ends −∞).]]

**Example 1.** For $p(x)=-2x^3+x+1$, the degree is odd and $a_n=-2<0$. So

$$
p(x)\to-\infty\quad\text{as }x\to+\infty,
\qquad
p(x)\to+\infty\quad\text{as }x\to-\infty.
$$

**Example 2.** For $p(x)=x^4-3x^2+5$, the degree is even and $a_n=1>0$. Both ends go to $+\infty$.

### Comparing two polynomials at infinity

If $\deg(p)>\deg(q)$, then for large positive $x$ the sign of $p(x)-q(x)$ matches the sign of the leading term of $p$. If the degrees are equal, compare leading coefficients of the difference.

A quartic with positive lead eventually sits above every cubic. An odd-degree cubic with negative lead eventually falls below every horizontal line on the far right.

---

## 9.5 Roots, factors and multiplicity

### Root and zero

A real number $r$ is a **root** (or **zero**) of $p$ when $p(r)=0$. Geometrically, the graph meets the $x$-axis at $x=r$.

### Factor theorem

For a polynomial $p$ and a real number $r$,

$$
p(r)=0\quad\text{if and only if}\quad (x-r)\text{ divides }p(x).
$$

In other words, $x-r$ is a factor exactly when substitution at $r$ returns zero.

The companion statement is the **remainder theorem**: when $p$ is divided by $x-r$, the remainder is the constant $p(r)$. So if $p(r)=0$, the remainder is zero and the division is exact.

**Example 1 (integer root).** Let $p(x)=x^3-4x^2+x+6$. Then

$$
p(2)=8-16+2+6=0,
$$

so $x-2$ is a factor. Also

$$
p(-1)=-1-4-1+6=0,
$$

so $x+1$ is a factor.

**Example 2 (fractional root).** Let

$$
p(x)=(2x-1)(x+2)(x-3).
$$

One root comes from $2x-1=0$, so

$$
x=\frac12.
$$

Check the factor theorem by substitution:

$$
p\Bigl(\frac12\Bigr)=\Bigl(2\cdot\frac12-1\Bigr)\Bigl(\frac12+2\Bigr)\Bigl(\frac12-3\Bigr)=0\cdot\frac52\cdot\Bigl(-\frac52\Bigr)=0.
$$

So $x-\frac12$ divides $p$. Clearing the fraction, the same factor can be written as the integer-coefficient line $2x-1$:

$$
x-\frac12=\frac{1}{2}(2x-1).
$$

Both forms mark the same root. On the exam, a claim may say “$x-\frac12$ is a factor” or “$2x-1$ is a factor”. Both are true for this $p$.

**Example 3 (another fraction).** Let $q(x)=2x^3+x^2-x$. Factor out $x$ first:

$$
q(x)=x(2x^2+x-1)=x(2x-1)(x+1).
$$

The roots are $0$, $\frac12$ and $-1$. In particular

$$
q\Bigl(\frac12\Bigr)=2\Bigl(\frac12\Bigr)^3+\Bigl(\frac12\Bigr)^2-\frac12=\frac14+\frac14-\frac12=0,
$$

so again $x-\frac12$ (or $2x-1$) is a factor. A false claim might say the only roots are integers; the half is easy to miss if you only test $\pm 1,\pm 2$.

### Multiplicity

If

$$
p(x)=(x-r)^m q(x)
$$

with $q(r)\neq 0$ and $m\ge 1$, then $r$ is a root of **multiplicity** $m$.

- Multiplicity $1$ (simple root): the graph **crosses** the axis at $r$.
- Multiplicity $2$ (double root): the graph **touches** the axis at $r$ and turns back.
- Higher even multiplicity: touches and turns.
- Higher odd multiplicity: crosses, but flatter than a simple crossing.

**Example 2.** Let

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

There is a double root at $x=1$ and a simple root at $x=-3$. The graph touches at $x=1$ and crosses at $x=-3$. Distinct real zeros: two. Roots counted with multiplicity: three.

### Multiple roots and the derivative

If $(x-r)^2$ divides $p$, then both $p$ and $p'$ vanish at $r$:

$$
p(r)=0\quad\text{and}\quad p'(r)=0.
$$

Conversely, for polynomials over the reals, $p(r)=p'(r)=0$ forces $(x-r)^2$ to divide $p$.

A simple root of $p$ need not be a root of $p'$. A root of $p'$ need not be a root of $p$ (it may be a turning point off the axis).

**Example 3.** For $p(x)=(x+1)^2(x-2)$,

$$
p'(-1)=0
$$

because of the squared factor, but

$$
p'(2)
$$

need not be zero: $x=2$ is only a simple root.

### How many real roots?

A nonzero polynomial of degree $n$ has **at most** $n$ real roots, counting multiplicity, and at most $n$ distinct real roots.

A cubic always has at least one real root (odd-degree polynomials with real coefficients always cross the axis at least once). It may have three distinct real roots, or one real root and two complex conjugate roots, or a repeated real pattern such as a double root plus a simple root.

A vertical shift $p(x)+c$ keeps the same degree, so it still has at most $\deg(p)$ distinct real roots. Shifting cannot create more roots than the degree allows.

### Rebuilding a monic cubic

If a monic cubic has roots $r$, $s$, $t$ (listed with multiplicity), then

$$
p(x)=(x-r)(x-s)(x-t).
$$

Expand when a claim asks for coefficients.

**Vieta** for a monic cubic $x^3+Ax^2+Bx+C$ says:

$$
r+s+t=-A,\qquad rs+rt+st=B,\qquad rst=-C.
$$

So the sum of the roots (with multiplicity) is the negative of the $x^2$ coefficient.

**Example 4.** Double root at $1$, simple root at $-3$:

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

Sum of roots with multiplicity: $1+1+(-3)=-1$, which matches $-A=-1$. Constant term $3$. Also $p'(1)=0$, but $p'(-3)\neq 0$.

### Integer roots

If a monic polynomial has integer coefficients and an integer root $r$, then $r$ divides the constant term. This is a quick filter for candidate roots, not a full solution method. Most BBE stems give the candidates or the factored form directly.

---

## 9.6 Sums, products and composition

### Degree of a sum

If $\deg(p)=n$, $\deg(q)=m$ and $n>m$, then

$$
\deg(p+q)=n.
$$

The leading term of $p$ survives unchanged.

If $n=m$ and the leading coefficients are $a$ and $b$, then:

- if $a+b\neq 0$, then $\deg(p+q)=n$ with leading coefficient $a+b$;
- if $a+b=0$, the top terms cancel and $\deg(p+q)<n$ (or $p+q$ is the zero polynomial).

**Example 1.** Let $p(x)=x^3+x$ and $q(x)=-x^3+4x^2-2$. Then

$$
p+q=4x^2+x-2,
$$

which has degree $2$, strictly less than $3$. Cancellation of equal leading terms is the whole point of the claim.

For the difference $p-q$ with equal degree and leading coefficients $a$ and $b$, the top power cancels only when $a-b=0$, that is when $a=b$. If $a=-b\neq 0$, then $p+q$ cancels while $p-q$ keeps degree $n$.

### Degree of a product

If $p$ and $q$ are nonzero,

$$
\deg(p\cdot q)=\deg(p)+\deg(q).
$$

Leading coefficients multiply. There is no cancellation of the top term in a product of nonzero polynomials.

**Example 2.** A non-constant linear factor times a cubic produces a degree-$4$ polynomial.

### Composition multiplies degrees

If $\deg(p)=n\ge 1$ and $\deg(q)=m\ge 1$, then

$$
\deg\bigl(q(p(x))\bigr)=nm,\qquad
\deg\bigl(p(q(x))\bigr)=nm.
$$

Both compositions have the same degree. They are usually **not** the same polynomial.

**Example 3.** Let $p(x)=x^2$ and $q(x)=x^3+1$. Then

$$
q(p(x))=(x^2)^3+1=x^6+1,
$$

$$
p(q(x))=(x^3+1)^2=x^6+2x^3+1.
$$

Same degree $6$, different formulas. Nesting is not commutative.

If $p$ is non-constant, $q(p(x))$ is a non-zero constant only in degenerate cases that the exam almost never gives you. For ordinary nonzero $q$ of positive degree, $q(p(x))$ is non-constant.

### Square of a quadratic

Expressions such as

$$
\bigl(x^2+ax+b\bigr)^2-(x^2+ax+b)
$$

expand to degree $4$ in general. Factor out the common quadratic when roots are needed:

$$
u^2-u=u(u-1)
$$

with $u=x^2+ax+b$.

---

## 9.7 Graphs, turning points and meetings

### Turning points

A **turning point** is a place where the graph changes from rising to falling, or from falling to rising. At a turn the slope is zero, so

$$
p'(x)=0.
$$

If $\deg(p)=n$, then $\deg(p')=n-1$, so $p'$ has at most $n-1$ real roots. A polynomial of degree $n$ therefore has at most $n-1$ turning points.

| Degree of $p$ | Degree of $p'$ | At most how many turns |
| --- | --- | --- |
| $2$ | $1$ | $1$ |
| $3$ | $2$ | $2$ |
| $4$ | $3$ | $3$ |

A cubic can have two turns, one turn, or none (for example a strictly increasing cubic).

**Example 1.** For $p(x)=x^3-3x$,

$$
p'(x)=3x^2-3=3(x-1)(x+1).
$$

There are two turns, at $x=-1$ (local max) and $x=1$ (local min). The same cubic comes from $-\infty$ on the left and goes to $+\infty$ on the right.

[[FIGURE:poly-turning-points|A cubic with two turning points. Far left: the graph comes from −∞. Far right: it goes to +∞. The marked peaks are the turns.]]

### Reading a sketch

Exam figures for cubics often show:

- three distinct axis crossings (three simple real roots);
- or a touch and a cross (double root plus simple root);
- or a single crossing (one real root).

Between consecutive roots of a smooth function there is at least one turning point. So a cubic that crosses three times must turn at least twice, and since a cubic has at most two turns, it turns exactly twice, once in each gap between roots.

### Meetings with a horizontal line

A dashed horizontal line $y=c$ on the figure asks how many solutions

$$
p(x)=c
$$

has. Count the crossings of the curve with that dashed line. Each crossing is one meeting.

[[FIGURE:poly-horizontal-line|The solid cubic meets the dashed line y = c three times, so p(x) = c has three real solutions for that height c.]]

If you raise the dashed line above the local max, some meetings disappear. If you set $c=0$, the meetings are exactly the roots.

### Meetings of two polynomials

The graphs of $p$ and $q$ meet where

$$
p(x)-q(x)=0.
$$

If $p-q$ is not the zero polynomial, the number of meetings is at most $\deg(p-q)$.

**Example 2.** A cubic and a line: $p(x)-(\ell x+m)$ is still degree $3$ when the cubic’s $x^3$ coefficient is nonzero, so at most three meetings.

A quartic and a quadratic: the difference has degree at most $4$, so at most four meetings.

If leading terms cancel, the difference may have lower degree than either original polynomial, and the meeting count drops with it.

### Local behaviour near a double root

Near a double root the graph looks like a parabola touching the axis. Claims that “the figure shows three distinct crossings” are false when one of the axis contacts is only a tangency.

---

## 9.8 Tables without a formula (finite differences)

### What this section is for

Sometimes the exam does **not** give you the polynomial formula. It only gives a table of values, for example distance every $10$ seconds, or cost at outputs $0,1,2,3,\ldots$.

You still need to answer questions such as:

- what degree could this be?
- what is the next missing value?
- where is a root (a zero in the table)?
- which time block had the highest average speed?

**Finite differences** are the tool for that. The name sounds heavy. The idea is ordinary subtraction in a column.

### Step 1: write the jumps

Suppose the inputs are equally spaced (same step each time: $1$, or $10$, or any fixed $h$). List the outputs in a row. Under them, write how much each value jumped to the next one:

$$
\text{first difference}=\text{next value}-\text{this value}.
$$

Those jumps are the **first differences**.

Then do the same to the first differences. Those new jumps are the **second differences**. Keep going if needed.

### Step 2: read the degree from which row becomes constant

When the step is fixed and the table really comes from a polynomial of degree $n$:

| If this row becomes constant | The degree is |
| --- | --- |
| first differences | $1$ (linear) |
| second differences | $2$ (quadratic) |
| third differences | $3$ (cubic) |
| fourth differences | $4$ (quartic) |

So:

- constant first differences mean a straight line;
- constant second differences mean a parabola;
- constant third differences mean a cubic;
- and so on.

If the second differences are still changing, the table is **not** quadratic. That one sentence kills many False claims.

**Example 1.** Samples

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $p(x)$ | $1$ | $2$ | $9$ | $28$ | $65$ |

First differences: $1,7,19,37$ (not constant).

Second differences: $6,12,18$ (not constant).

Third differences: $6,6$ (constant).

So the table fits a cubic. A claim that “$p$ could be quadratic” is false, because the second differences are not constant.

**Example 2.** Samples

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- |
| $p(x)$ | $4$ | $0$ | $-2$ | $-2$ | $0$ | $4$ |

First differences: $-4,-2,0,2,4$.

Second differences: $2,2,2,2$ (constant).

So the table fits a quadratic. With step $1$, constant second difference $2$ means leading coefficient $1$ for $ax^2+\cdots$, because that constant equals $2a$. Also $p(-1)=0$ and $p(2)=0$, so $x+1$ and $x-2$ are factors.

To predict the next sample at $x=4$: continue the constant second difference $2$. The next first difference is $4+2=6$, so the next value is $4+6=10$.

### Where you use this in practice

1. **Degree diagnosis.** “Is this cubic?” Check whether third differences settle to a constant.
2. **Next value.** Extend the constant difference row one step and rebuild the next table entry.
3. **Roots from a table.** A zero in the output row is a root. Then the factor theorem applies.
4. **Train / delivery tables.** Distance against time: first differences over each block are the metres travelled in that block. Divide by the time step to get average speed on that block. Whole-trip average is total distance over total time. Convert m/s to km/h with the factor $3.6$ when the claim uses km/h.
5. **Local peaks on a table.** Look at the sequence of interval speeds. A local maximum is a value higher than both neighbours, or a plateau that falls on both sides. Two separate plateaus with a dip between them are **two** peaks, not one.

You do not need a fancy name for the method in the answer. You need the subtractions and the constant-row rule.

---

## 9.9 Families with a sliding number (parameters)

### What this section is for

Sometimes the exam writes one formula that still contains a letter, for example

$$
p_a(x)=x^3-3x+a
$$

or

$$
g_k(x)=x^3-kx.
$$

That letter is a **parameter**. Each choice of the letter gives a different polynomial, but they all belong to the same family.

Typical claims:

- for which values are there three real roots?
- do the turning $x$-values move when the letter changes?
- is every member odd?
- is there a value that makes a double root?

So this section is about **one shape with a sliding control**, not about a brand-new theory.

### Picture 1: sliding the graph up or down

Take

$$
p_a(x)=x^3-3x+a.
$$

The letter $a$ is only added at the end. Adding a constant moves the whole graph **up** (if $a$ increases) or **down** (if $a$ decreases). It does not stretch the graph sideways.

Differentiate:

$$
p_a'(x)=3x^2-3.
$$

There is no $a$ in the derivative. So the turns stay at the same $x$-places

$$
x=\pm 1
$$

for every $a$. Only the heights of those turns change:

$$
p_a(\pm 1)=\mp 2+a.
$$

**How many roots?**

- For $a=0$, $p_0(x)=x(x^2-3)$ has three distinct real roots.
- If you slide too far up or down, the $x$-axis no longer cuts the wiggle three times. Then only one real root remains.

**Double root.** A double root needs both $p_a(r)=0$ and $p_a'(r)=0$. For $r=1$, that forces $a=2$. For $r=-1$, it forces $a=-2$.

**Practical use.** Claims about “the turning points do not depend on $a$” are about the $x$-coordinates. The points as pairs $(x,y)$ do move vertically with $a$. Read the wording.

### Picture 2: changing the linear stretch

Take

$$
g_k(x)=x^3-kx=x(x^2-k).
$$

Now the letter sits in front of $x$, not as a plain add-on. Factoring shows the roots at once:

- $x=0$ is always a root;
- the other roots are $x=\pm\sqrt{k}$ when $k>0$.

Checklist you can reuse:

| Question | Answer for $g_k$ |
| --- | --- |
| Is every $g_k$ odd? | Yes. Only odd powers appear, for every $k$. |
| Three distinct real zeros? | Exactly when $k>0$. |
| Repeated root? | At $k=0$, where $g_0(x)=x^3$. |
| Only one real zero? | When $k<0$. |
| Where are the turns? | Solve $g_k'(x)=3x^2-k=0$. For $k>0$ they sit at $x=\pm\sqrt{k/3}$, so they **move** with $k$. |

**Practical use.** This is the family behind many “parameter $k$ / $m$ / $t$” True/False packs: oddness for all $k$, count of zeros, and whether $g_k(2)=0$ for a named $k$ (substitute and check).

### The contrast in one sentence

- $p_a(x)=x^3-3x+a$: slide up/down. Turns keep the same $x$. Root count can change.
- $g_k(x)=x^3-kx$: stretch the linear part. Turns move with $k$. Root count changes with the sign of $k$.

You almost never need a discriminant formula by name. On the exam, plug in the named parameter, factor if you can, and test the claimed root by substitution.

---

## 9.10 Applied polynomial models

### Cost, revenue, height, temperature, speed

The chapter’s applied stems name a polynomial of time, quantity or output. Later claims are ordinary polynomial operations in disguise:

- substitute a named value;
- read degree or leading coefficient;
- factor to see positive roots;
- differentiate to get velocity from position, or acceleration from velocity;
- compare a formula model with a recorded table.

**Example (warehouse).** Weekly cost

$$
C(q)=q^3-6q^2+20q=q(q^2-6q+20)
$$

for $q\ge 0$. The quadratic $q^2-6q+20$ has discriminant $36-80<0$, so it never vanishes. The only non-negative root of $C$ is $q=0$. Claims about another positive break-even quantity are false.

### Differentiation inside a cubic speed law

If velocity is cubic,

$$
v(t)=at^3+bt^2+ct+d,
$$

then acceleration is the quadratic

$$
a(t)=v'(t)=3at^2+2bt+c,
$$

and the extreme of acceleration solves $a'(t)=0$, a linear equation.

Decelerating at an instant means $a(t)<0$ there. Minimal acceleration on a long interval, when $a''>0$ (equivalently when the leading coefficient of $a$ is positive), occurs at that critical point of $a$.

### Mixing formula and table

One line may be given by a closed-form cubic. Another line may be given only by a distance table. Treat them separately. Do not import the cubic’s derivative into the table line. On the table line, work with first differences and averages only.

---

## 9.11 Common errors

### Error 1: mistaking the constant term for the leading coefficient

In $5-3x^2+x^4$, the constant is $5$ and the lead is $1$. Order does not matter once you rewrite in descending powers.

### Error 2: quoting a lower coefficient as the lead

In $4x^3-x+5$, the lead is $4$, not $-1$.

### Error 3: forgetting cancellation in a sum

Equal degree and opposite leading coefficients make $\deg(p+q)<n$. Assuming the degree always stays at $n$ is false.

### Error 4: adding degrees under composition

Composition multiplies degrees: $nm$, not $n+m$. Products add degrees. Do not swap the two rules.

### Error 5: assuming $p\circ q=q\circ p$

Same degree does not mean same polynomial.

### Error 6: counting a tangency as a crossing

A double root is one distinct zero, and the graph touches rather than crosses. “Three crossings” fails when one contact is a touch.

### Error 7: counting multiplicity totals as distinct zeros

$x(x-3)^2(x+1)$ has three distinct zeros, even though the multiplicity total is four.

### Error 8: thinking a vertical shift creates extra roots beyond the degree

Degree is preserved by adding a constant. At most $n$ distinct real roots remain.

### Error 9: thinking every vertical shift preserves oddness

A nonzero constant kills oddness because $q(0)\neq 0$. Evenness survives.

### Error 10: reading first differences as proof of a quadratic

Constant first differences mean linear. Constant second differences mean quadratic. Constant third differences mean cubic.

### Error 11: stopping at $p(r)=0$ when the claim needs $p'(r)=0$

Repeated factors require both. A simple root does not force $p'(r)=0$.

### Error 12: confusing stationary abscissas with stationary points as pairs $(x,y)$

An additive parameter may leave the $x$-coordinates fixed while moving the $y$-coordinates. Read the claim’s wording.

### Error 13: converting units incorrectly on average speed

Metres per second to kilometres per hour uses the factor $3.6$. Whole-trip average uses total distance over total time, not the maximum interval speed.

### Error 14: treating two table plateaus as one local maximum

A dip between two equal peaks produces two local maxima of the discrete speed sequence.

### Error 15: assuming a cubic always has three distinct real roots

Odd degree guarantees at least one real root, not three. The parameter window matters.

---

## 9.12 Difficult exam-style examples

The following stems match the style of the chapter’s harder tasks and mixed exam items. Work every letter. Answers and short reasons follow each stem.

### Example A — Cubic speed and a distance table

Elisabeth travels between stops $A$ and $B$. Line L1 has velocity (m/s)

$$
v(t)=0.00002t^3-0.005t^2+0.4t.
$$

Line L2 records distance from $A$ every $10$ seconds:

| $t$ (s) | $0$ | $10$ | $20$ | $30$ | $40$ | $50$ | $60$ | $70$ | $80$ | $90$ | $100$ | $110$ | $120$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| distance (m) | $0$ | $70$ | $160$ | $290$ | $430$ | $580$ | $730$ | $860$ | $1010$ | $1160$ | $1280$ | $1350$ | $1400$ |

Decide True or False:

**A.** Line L1 is decelerating at $t=80$.

**B.** The minimal acceleration of L1 on the run is reached before $t=75$.

**C.** The average velocity of L2 from $A$ to $B$ is more than $45$ km/h.

**D.** The velocity of L2 (from the table) has only one local maximum.

**E.** The highest interval average velocity of L2 occurs between $60$ and $70$ seconds.

**Solutions.**

**A.** True. Acceleration is

$$
a(t)=v'(t)=0.00006t^2-0.01t+0.4.
$$

Then $a(80)=-0.016<0$, so L1 is decelerating.

**B.** False. Minimise $a$ by solving $a'(t)=0$:

$$
a'(t)=0.00012t-0.01=0\implies t=\frac{250}{3}\approx 83.3>75.
$$

**C.** False. Whole-trip average:

$$
\frac{1400}{120}=\frac{35}{3}\ \mathrm{m/s},\qquad
\frac{35}{3}\cdot 3.6=42\ \mathrm{km/h},
$$

which is not more than $45$.

**D.** False. Interval speeds (m/s): $7,9,13,14,15,15,13,15,15,12,7,5$. Two separate plateaus at $15$ with a $13$ between them give two local maxima.

**E.** False. On $[60,70]$ the average is $13$ m/s, while several blocks reach $15$ m/s.

---

### Example B — Family $p_a(x)=x^3-3x+a$

Let $p_a(x)=x^3-3x+a$.

**A.** The stationary abscissas of $p_a$ do not depend on $a$.

**B.** For $a=0$ there are three distinct real roots.

**C.** For every real $a$ there are three distinct real roots.

**D.** There is a unique $a$ for which $x=1$ is a double root.

**E.** The leading coefficient of $p_a$ depends on $a$.

**Solutions.**

**A.** True: $p_a'(x)=3x^2-3=0$ gives $x=\pm 1$ for every $a$. The $y$-values at those abscissas do move with $a$, but the claim here names abscissas only.

**B.** True: $x^3-3x=x(x-\sqrt{3})(x+\sqrt{3})$.

**C.** False: large $|a|$ leaves only one real root.

**D.** True: $p_a(1)=0$ and $p_a'(1)=0$ force $-2+a=0$, so $a=2$.

**E.** False: the lead is always $1$.

---

### Example C — Double root and a simple root

A monic cubic $p$ has a double root at $x=1$ and a simple root at $x=-3$.

**A.** $p(x)=x^3+x^2-5x+3$.

**B.** $p'(1)=0$.

**C.** $p(-3)=0$ and $p'(-3)=0$.

**D.** The constant term of $p$ is $3$.

**E.** The sum of the roots counted with multiplicity is $-1$.

**Solutions.**

**A.** True:

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

**B.** True: the squared factor forces $p'(1)=0$.

**C.** False: $p(-3)=0$, but the root is simple, so $p'(-3)\neq 0$.

**D.** True: $p(0)=3$.

**E.** True: $1+1+(-3)=-1$, matching the negative of the $x^2$ coefficient.

---

### Example D — Leading-term cancellation

Let $p$ and $q$ both have degree $n$, with leading coefficients $a$ and $b$, where $a+b=0$ and $a\neq 0$.

**A.** The highest power in $p+q$ is strictly less than $n$.

**B.** The highest power in $p-q$ is still $x^n$.

**C.** The highest power in $p\cdot q$ is $x^{2n}$.

**D.** $p+q$ must be the zero polynomial.

**E.** The graphs of $p$ and $-q$ have the same end behaviour on the far right.

**Solutions.**

**A.** True: leading terms cancel in the sum.

**B.** True: leading coefficient of $p-q$ is $a-b=a-(-a)=2a\neq 0$.

**C.** True: product degrees add.

**D.** False: lower terms may survive. Cancellation of the top term alone does not force the zero polynomial.

**E.** True: $-q$ has leading coefficient $-b=a$, the same as $p$, and the same degree, so the far-right ends match.

---

### Example E — Squared factor, derivative and parity

Let $p(x)=(x+1)^2(x-2)$.

**A.** $p'(-1)=0$.

**B.** $p'(2)=0$.

**C.** $p$ has exactly two distinct real zeros.

**D.** $p(0)=-2$.

**E.** $p$ is an odd function.

**Solutions.**

**A.** True: multiplicity $2$ at $x=-1$.

**B.** False: $x=2$ is simple.

**C.** True: zeros at $-1$ and $2$ only.

**D.** True: $p(0)=(1)^2(-2)=-2$.

**E.** False: both even and odd powers appear after expansion, and $p(0)\neq 0$.

---

### Example F — Composition degrees

Let $\deg(p)=n\ge 1$ and $\deg(q)=m\ge 1$.

**A.** $\deg(q(p(x)))=nm$.

**B.** $\deg(q(p(x)))=n+m$.

**C.** $\deg(p(q(x)))=nm$ as well.

**D.** $p(q(x))$ and $q(p(x))$ are always the same polynomial.

**E.** If $p$ is non-constant and $q$ is non-constant, then $q(p(x))$ is non-constant.

**Solutions.**

**A.** True.

**B.** False: that rule is for products, not composition.

**C.** True.

**D.** False: counterexamples such as $p(x)=x^2$, $q(x)=x^3+1$.

**E.** True: degree $nm\ge 1$.

---

### Example G — Finite differences without a closed form

An unknown polynomial is sampled with unit spacing:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- |
| $p(x)$ | $4$ | $0$ | $-2$ | $-2$ | $0$ | $4$ |

**A.** The second differences are constantly $2$, so a quadratic with leading coefficient $1$ fits the columns.

**B.** The factor $x+1$ divides $p$.

**C.** The factor $x-2$ divides $p$.

**D.** The first differences are not constant, so the samples are not from a linear polynomial.

**E.** Extending the same second-difference pattern gives $p(4)=10$.

**Solutions.**

All five are True. First differences $-4,-2,0,2,4$; second differences $2,2,2,2$. Then $p(-1)=p(2)=0$, and the next sample is $4+6=10$.

---

### Example H — Odd family $g_k(x)=x^3-kx$

**A.** For every real $k$, $g_k$ is odd.

**B.** If $k=1$, then $g_k$ has three distinct real zeros.

**C.** The value $k=0$ is exactly when $g_k$ has a repeated real root at the origin in this family.

**D.** If $k=4$, then $g_k(2)=0$.

**E.** If $k=3$, the stationary points are at $x=\pm 1$.

**Solutions.**

All five are True.

$$
g_k(-x)=-g_k(x)
$$

for every $k$. For $k=1$, zeros at $-1,0,1$. For $k=0$, $g_0(x)=x^3$. For $k=4$, $g_4(x)=x(x-2)(x+2)$. For $k=3$, $g_3'(x)=3x^2-3=0$ at $\pm 1$.

---

## 9.13 Summary reference

| Question | What to do |
| --- | --- |
| Degree / leading coefficient | Rewrite in descending powers; read the highest nonzero term. |
| Constant term | Evaluate $p(0)$, or read $a_0$. |
| Even / odd / neither | Form $p(-x)$, or inspect parity of powers. |
| End behaviour | Use degree parity and sign of $a_n$. |
| Is $r$ a root? | Compute $p(r)$. |
| Is $x-r$ a factor? | Factor theorem: same as $p(r)=0$. |
| Multiplicity $\ge 2$? | Check $p(r)=p'(r)=0$, or read a squared factor. |
| Touch or cross? | Even multiplicity touches; odd multiplicity crosses. |
| Rebuild monic from roots | Write $\prod(x-r_i)$ and expand if needed. |
| Vieta sum of roots | For monic $x^3+Ax^2+\cdots$, sum is $-A$. |
| Degree of $p+q$ | Max of degrees, unless leading terms cancel. |
| Degree of $p\cdot q$ | Sum of degrees. |
| Degree of $q(p(x))$ | Product of degrees. |
| Turning-point budget | At most $\deg(p)-1$. |
| Meetings of $p$ and $q$ | Roots of $p-q$; at most $\deg(p-q)$. |
| Table degree test | Subtract neighbouring values; the first constant difference row tells the degree. |
| Next table value | Extend the constant difference row, then rebuild one step. |
| Parameter $p(x)+a$ | Graph slides up/down; turn $x$-values stay put; root count may change. |
| Parameter $x^3-kx$ | Odd for all $k$; root count depends on the sign of $k$; turns move with $k$. |
| Applied cubic speed | Differentiate for acceleration; use table differences separately. |

Central formulas:

$$
p(x)=a_n x^n+\cdots+a_0,\quad a_n\neq 0,\quad \deg(p)=n,
$$

$$
p(r)=0\iff (x-r)\mid p(x),
$$

$$
\deg(p\cdot q)=\deg(p)+\deg(q),
$$

$$
\deg(q\circ p)=\deg(q)\cdot\deg(p)\quad(\deg p,\deg q\ge 1),
$$

$$
\text{$n$-th differences constant}\iff \text{samples fit a degree-$n$ polynomial}.
$$

For a monic cubic with roots $r,s,t$ (with multiplicity):

$$
p(x)=(x-r)(x-s)(x-t)=x^3-(r+s+t)x^2+\cdots.
$$

**Working order.** Rewrite the polynomial if the powers are scrambled. Name degree and lead before answering shape claims. Translate words into an evaluation, a factor check, a derivative condition, a degree rule, or a difference table. On mixed stems, keep the closed-form line and the table line separate. Keep exact fractions until the final comparison.

**Self-check.** Can you find the degree of $5-3x^2+x^4$ in one glance? Why does $4x^3-x+5$ have leading coefficient $4$? How do you test oddness without expanding? What does $-2x^3$ do on the far left and far right? Why does $p(r)=0$ give a factor $x-r$, and how does that work for $r=\frac12$? How can a cubic have only two distinct real zeros? When does $\deg(p+q)$ drop below $\max(\deg p,\deg q)$? Why is $\deg(q\circ p)=nm$ rather than $n+m$? How many turns can a cubic have, and how do you count meetings with a dashed horizontal line? What do constant third differences tell you about a table when no formula is given? How does adding $a$ differ from putting $k$ in front of $x$ in $x^3-kx$? And why can a train stem ask both $v'(80)<0$ and a question about first differences of a distance table in the same item?
