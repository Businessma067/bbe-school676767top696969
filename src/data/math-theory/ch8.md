# Chapter 8 — Power functions

A power function raises the input to a fixed exponent. The same shape appears as a cost that falls with scale, as output that grows with labour, as a price that falls with quantity, and as a simple graph such as $y=x^2$ or $y=1/x$.

The tasks in this chapter keep asking the same few moves: name the domain, evaluate a **level**, scale by $k^{b}$, recover a coefficient, compose two powers, and read a limit. Polynomials with several different powers added belong to the next chapter. Exponential functions $a^x$ belong to Chapter 10.

## Learning objectives

- Recognise $f(x)=ax^b$ and say what $a$ and $b$ do.
- Decide the domain from the exponent: integers, roots, and negative powers.
- Tell even graphs from odd graphs, and say when the function is neither.
- Compare $x^p$ and $x^q$ on $(0,1)$ and on $(1,\infty)$.
- Read limits as $x\to\infty$, as $x\to 0^+$, and at a hole such as $x=0$ for $1/x$.
- Invert a power function and solve $ax^b=c$.
- Tell a **level** $f(x)$ from a **scale** $f(kx)/f(x)=k^b$.
- Recover the coefficient from one audited point, then compose two powers.
- Handle isoelastic demand, revenue, and a finite percentage change without confusing it with $b$ times the percent.
- Spot affine add-ons, unit changes, and average product $f(x)/x$.

---

## 8.1 What a power function is

### The formula

A **power function** has the form

$$
f(x)=ax^{b},
$$

where $a\neq 0$ is a constant **coefficient** and $b$ is a constant **exponent**. The input $x$ is the base. The exponent does not change with $x$.

Typical members of the family:

| Formula | Same shape | Name you will hear |
| --- | --- | --- |
| $x^2$ | $ax^2$ | square |
| $x^3$ | $ax^3$ | cube |
| $x^{1/2}=\sqrt{x}$ | $a\sqrt{x}$ | square root |
| $x^{1/3}=\sqrt[3]{x}$ | $a\sqrt[3]{x}$ | cube root |
| $x^{-1}=1/x$ | $a/x$ | reciprocal |
| $x^{-2}=1/x^2$ | $a/x^2$ | inverse square |

The constant $a$ stretches the graph vertically. If $a<0$, the graph is also flipped through the $x$-axis.

### What is not a power function

$f(x)=2^x$ is exponential: the variable is the exponent. $f(x)=x^2+x$ is a polynomial with two different powers added. $f(x)=(x+1)^2$ expands to $x^2+2x+1$, which is again not a single power. $f(x)=x^x$ is not a power function, because the exponent is not constant.

A linear function $f(x)=mx+c$ is a power function only in the special case $c=0$, when it becomes $f(x)=mx^1$. A nonzero intercept spoils the form $ax^b$.

**Example 1.** A warehouse charges a handling fee

$$
C(q)=12q^{0.8}
$$

euros to process $q$ crates. This is a power function with $a=12$ and $b=0.8$. The fee

$$
C(q)=12q^{0.8}+40
$$

is not a pure power function, because of the added $40$.

### The algebra you already need

On the positive reals the usual power rules hold:

$$
x^{p}x^{q}=x^{p+q}, \qquad \frac{x^{p}}{x^{q}}=x^{p-q}, \qquad (x^{p})^{q}=x^{pq}, \qquad x^{0}=1 \ (x\neq 0).
$$

Also

$$
x^{-b}=\frac{1}{x^{b}} \quad (x\neq 0), \qquad x^{1/n}=\sqrt[n]{x}
$$

when the root is defined. These identities are how you rewrite a statement before you judge it true or false.

**Example 2.** Rewrite $\dfrac{8}{x^{3/2}}$.

$$
\frac{8}{x^{3/2}}=8x^{-3/2}.
$$

That is a power function with $a=8$ and $b=-3/2$. Now $x^{3/2}=(x^{1/2})^{3}$, so an even root is involved and $x=0$ is excluded by the negative exponent. Domain: $x>0$.

---

## 8.2 Domain and restrictions

The **domain** is the set of real $x$ for which $f(x)$ is a real number. For power functions the domain is decided by the exponent. Always check three things: division by zero, even roots of negative numbers, and whether $x=0$ is allowed.

### Positive integer exponents

If $b=1,2,3,\ldots$, then $x^b$ is defined for every real $x$. In particular $0^b=0$.

$$
f(x)=x^4 \quad\text{has domain }\mathbb{R}.
$$

### Negative integer exponents

If $b=-1,-2,-3,\ldots$, you are dividing by a power of $x$, so $x=0$ is forbidden.

$$
f(x)=x^{-3}=\frac{1}{x^3}, \qquad \text{domain } \mathbb{R}\setminus\{0\}.
$$

### Roots and fractional exponents

Write a fraction in lowest terms, $b=p/q$ with $q>0$.

- If $q$ is **odd**, $x^{p/q}=\sqrt[q]{x^p}$ is defined for all $x$ where $x^p$ makes sense. Cube roots of negatives are fine: $\sqrt[3]{-8}=-2$.
- If $q$ is **even**, you cannot take that root of a negative number in the reals. Square roots need $x\ge 0$, and if the exponent is also negative you must drop $x=0$ as well.

A compact table for the cases that appear in statements:

| $f(x)$ | Domain |
| --- | --- |
| $x^{2}$, $x^{4}$, $x^{3}$ | all real $x$ |
| $\sqrt{x}=x^{1/2}$ | $x\ge 0$ |
| $\sqrt[3]{x}=x^{1/3}$ | all real $x$ |
| $x^{2/3}=(\sqrt[3]{x})^{2}$ | all real $x$ |
| $x^{3/2}=(\sqrt{x})^{3}$ | $x\ge 0$ |
| $1/\sqrt{x}=x^{-1/2}$ | $x>0$ |
| $1/x^{2}=x^{-2}$ | $x\neq 0$ |
| $x^{1/4}$ | $x\ge 0$ |

**Example 1.** Is $x=-8$ in the domain of $f(x)=x^{2/3}$?

Yes. First take the cube root: $\sqrt[3]{-8}=-2$. Then square: $(-2)^{2}=4$. So $f(-8)=4$. The even power is on the outside after the odd root, so negative inputs are allowed.

**Example 2.** Is $x=-8$ in the domain of $g(x)=x^{3/2}$?

No. $x^{3/2}=(\sqrt{x})^{3}$ needs a square root. $\sqrt{-8}$ is not real. Do not “repair” this by reading it as $\sqrt{x^3}=\sqrt{-512}$, which is also not real.

The order in $p/q$ matters for the domain, not only the decimal value of the exponent.

### Zero as an input

- If $b>0$, then $0^b=0$. The graph meets the origin.
- If $b<0$, then $0^b$ is undefined. There is a hole, usually a vertical asymptote, at $x=0$.
- $0^0$ is left undefined. Exam statements that plug $x=0$ into $x^{0}$ should be treated as false, or as outside the usual convention $x^0=1$ for $x\neq 0$.

**Example 3.** A statement says: “$f(x)=5x^{-0.4}$ is defined at $x=0$ and $f(0)=0$.”

False. The exponent is negative, so you would divide by $0^{0.4}=0$. The function is only defined for $x>0$ (and, if an even root is involved, not for $x<0$ either). Here $-0.4=-2/5$, so $f(x)=5/x^{2/5}=5/(\sqrt[5]{x})^{2}$. The fifth root exists for negatives, but $x=0$ is still out.

---

## 8.3 Graphs, even and odd

### Even and odd

A function is **even** when $f(-x)=f(x)$ for every $x$ in the domain (and $-x$ is then also in the domain). The graph is symmetric across the $y$-axis.

A function is **odd** when $f(-x)=-f(x)$ for every $x$ in the domain. The graph is symmetric under a half-turn about the origin.

For $f(x)=x^{n}$ with $n$ a whole number:

- even $n$ (including $0$ if you count $x^0=1$) gives an even function;
- odd $n$ gives an odd function.

So $x^2$ and $x^{-2}=1/x^2$ are even. $x^3$ and $x^{-1}=1/x$ are odd.

A function whose domain is not symmetric about $0$ cannot be even or odd. $\sqrt{x}$ is defined only for $x\ge 0$, so it is neither even nor odd. Do not call it even just because the formula “looks like” a half-power.

**Example 1.** Check $f(x)=4x^{-2}$.

$$
f(-x)=4(-x)^{-2}=4x^{-2}=f(x).
$$

Even. The graph is above the $x$-axis on both sides, and the two wings match.

**Example 2.** Check $g(x)=-x^{5}$.

$$
g(-x)=-(-x)^{5}=-(-x^{5})=x^{5}=-g(x).
$$

Odd. The minus sign in front does not destroy oddness: it only reflects the usual $x^5$ graph through the $x$-axis.

[[FIGURE:power-even-odd|Even power $x^{2}$ versus odd power $x^{3}$.]]

### Shape on the positive axis

For $x>0$ and $a>0$:

- if $b>0$, the graph starts at the origin (or approaches it if you only look at $x>0$) and rises as $x$ grows;
- if $b<0$, the graph is high near $0$ and falls toward $0$ as $x$ grows;
- if $b=0$, the graph is the horizontal line $y=a$ (for $x\neq 0$).

The value $b=1$ is the ray $y=ax$. The value $b=2$ is a parabola opening up. The value $b=1/2$ is the right-hand square-root curve: steep at $0$, then flattening.

---

## 8.4 Increase, decrease and comparing exponents

### Monotonicity on $(0,\infty)$

Assume $a>0$. Then $f(x)=ax^{b}$ on $(0,\infty)$ is

- **strictly increasing** if $b>0$;
- **strictly decreasing** if $b<0$;
- constant if $b=0$.

If $a<0$, the inequalities reverse: $ax^{2}$ with $a<0$ decreases as $x$ increases through positive values.

On the whole real line the story depends on even versus odd. $x^2$ falls on $(-\infty,0]$ and rises on $[0,\infty)$. $x^3$ rises on the whole of $\mathbb{R}$.

**Example 1.** A statement says: “$h(x)=x^{-1/3}$ is increasing on $(0,\infty)$.”

False. The exponent is negative, so as $x$ grows the cube root grows and $1$ over that cube root falls. Check two points: $h(1)=1$ and $h(8)=1/2$.

### Comparing two powers

For $x>0$ the ranking of $x^{p}$ and $x^{q}$ depends on whether $x$ is less than $1$ or greater than $1$.

Fix $p>q$. Then

$$
\begin{cases}
x^{p} < x^{q} & \text{if } 0<x<1,\\
x^{p} = x^{q} & \text{if } x=1,\\
x^{p} > x^{q} & \text{if } x>1.
\end{cases}
$$

At $x=1$ every power is $1$. On $(0,1)$ a higher exponent makes a smaller value, because you are multiplying a number smaller than $1$ by itself more often. On $(1,\infty)$ a higher exponent makes a larger value.

**Example 2.** Compare $x$, $x^{2}$ and $x^{3}$ at $x=1/2$ and at $x=2$.

$$
\left(\tfrac12\right)^{3}=\tfrac18 < \left(\tfrac12\right)^{2}=\tfrac14 < \tfrac12,
$$

$$
2^{3}=8 > 2^{2}=4 > 2.
$$

A statement “$x^{3}>x^{2}$ for all $x>0$” is false. It holds only for $x>1$.

[[FIGURE:power-compare|$y=x$, $y=x^{2}$ and $y=x^{3}$ on $[0,2]$. They cross at $x=1$.]]

**Example 3.** Which is larger, $\sqrt{0.09}$ or $0.09^{2}$?

$$
\sqrt{0.09}=0.3, \qquad 0.09^{2}=0.0081.
$$

Here $0<0.09<1$ and the exponents satisfy $1/2<2$, so the higher power is smaller, which matches $0.0081<0.3$.

### Extra output from one more unit

Exam stories often ask whether “one extra hour of labour” adds more output at a small scale than at a large scale. You can answer this with two ordinary differences. You do not need a derivative.

Take $Q(L)=\sqrt{L}$. Then

$$
Q(4)-Q(1)=2-1=1, \qquad Q(9)-Q(4)=3-2=1,
$$

but the steps in $L$ were $3$ and $5$. Equal extra output needed more extra labour later. Over equal steps of $1$,

$$
Q(4)-Q(3)=\sqrt{4}-\sqrt{3}\approx 0.268, \qquad Q(9)-Q(8)=\sqrt{9}-\sqrt{8}\approx 0.172.
$$

The extra output from one more hour is smaller when $L$ is already large. That is the usual picture for $0<b<1$. For $b>1$ the extra output grows. For $b=1$ it stays constant.

---

## 8.5 Limits and asymptotes

A **limit** describes the value that $f(x)$ approaches, even if $f$ never lands there. Power functions have three limits you must be able to read off the exponent.

### As $x$ becomes large

For $a>0$ and $x\to\infty$:

$$
ax^{b} \to
\begin{cases}
\infty & \text{if } b>0,\\
a & \text{if } b=0,\\
0 & \text{if } b<0.
\end{cases}
$$

So $x^{5}$ grows without bound, and $1/x^{5}$ dies away to $0$. The larger $|b|$ is, the faster a positive power grows and the faster a negative power falls to $0$.

As $x\to-\infty$, only integer (or odd-root) powers are defined. Even positive powers still go to $+\infty$ (for $a>0$). Odd positive powers go to $-\infty$. Negative even powers still go to $0$ from above. Negative odd powers go to $0$ from below.

**Example 1.** A statement says: “As $x\to\infty$, $x^{-4}$ becomes large.”

False. $x^{-4}=1/x^{4}$ becomes small. $\lim_{x\to\infty}x^{-4}=0$.

### As $x$ approaches $0$ from the right

For $a>0$ and $x\to 0^{+}$:

$$
ax^{b} \to
\begin{cases}
0 & \text{if } b>0,\\
a & \text{if } b=0,\\
\infty & \text{if } b<0.
\end{cases}
$$

Positive powers go to the origin. Negative powers blow up. This is why $1/x$ and $1/\sqrt{x}$ cannot be given a finite value at $0$.

From the left, $x\to 0^{-}$, you need the function to be defined for negative $x$. Then $1/x\to-\infty$, while $1/x^{2}\to+\infty$. The two one-sided limits of $1/x$ at $0$ are not equal, so $\lim_{x\to 0}1/x$ does not exist.

### Asymptotes

If $b<0$, the line $x=0$ is a **vertical asymptote**. The line $y=0$ is a **horizontal asymptote** as $|x|\to\infty$.

[[FIGURE:power-reciprocal|$1/x$ (odd, sign change) and $1/x^{2}$ (even, always positive). Both have asymptotes $x=0$ and $y=0$.]]

**Example 2.** Let $p(x)=3/x^{2}$. Which of the following are true?

- $p(x)>0$ for all $x\neq 0$. True.
- $\lim_{x\to 0}p(x)=0$. False: the values become large positive.
- $\lim_{x\to\infty}p(x)=0$. True.
- The graph crosses the $y$-axis. False: $x=0$ is not in the domain.

**Example 3.** A demand function is $p(q)=18q^{-0.5}$ for $q>0$. As quantity demanded becomes huge, the price approaches $0$. As quantity approaches $0$, the price becomes arbitrarily large. Both limits are the standard negative-exponent picture, not a programming error in the model.

---

## 8.6 Level versus scale

Almost every task in this chapter is one of two questions. Mixing them is the fastest way to mark a true statement false.

### A level

A **level** is a value of the function at one input:

$$
f(x)=ax^{b}.
$$

You need the coefficient $a$. The exponent acts on $x$, never on $a$. So $5\cdot 3^{3}=5\cdot 27=135$, not $5^{3}=125$.

**Example 1.** Mass $M(s)=5s^{3}$ grams. Then $M(2)=5\cdot 8=40$ and $M(1)=5$. At the unit input every power is $1$, so the level equals the coefficient. That coincidence dies as soon as $s\neq 1$.

### A scale factor

A **scale** asks what happens when the input is multiplied by $k>0$:

$$
\frac{f(kx)}{f(x)}=\frac{a(kx)^{b}}{ax^{b}}=k^{b}.
$$

The coefficient cancels. Doubling $a$ doubles every level and leaves every ratio unchanged.

| Exponent $b$ | Doubling the input ($k=2$) | Ten percent extra ($k=1.1$) |
| --- | --- | --- |
| $1$ | $\times 2$ | $\times 1.1$ ($+10\%$) |
| $2$ | $\times 4$ | $\times 1.21$ ($+21\%$) |
| $3$ | $\times 8$ | $\times 1.331$ ($+33.1\%$) |
| $1/2$ | $\times\sqrt{2}\approx 1.414$ | $\times\sqrt{1.1}\approx 1.049$ |
| $-1$ | $\times 1/2$ | $\times 1/1.1\approx 0.909$ |
| $-2$ | $\times 1/4$ | $\times 1/1.21\approx 0.826$ |

A fifty percent wider panel is $k=1.5$, not “plus fifty percent of the paint”. If primer goes as radius squared, paint is multiplied by $1.5^{2}=2.25$. Halving the radius is $k=0.5$, and $0.5^{2}=0.25$, not $0.5$. Percentage up and percentage down are not symmetric once $b\neq 1$.

**Example 2.** Energy index $E(v)=0.5 v^{2}$. A ten percent overspeed is $k=1.1$, so $E$ rises by $21\%$, not by $10\%$. The trap is copying the input’s percentage onto the output.

**Example 3.** Output $Q(s)=8s^{1/2}$. Quadrupling staff is $k=4$, so output is multiplied by $2$, not by $4$. A statement that “four times the staff gives four times the crates” is the $b=1$ story.

### Crossing of two powers

If $F(n)=2n^{2}$ and $G(n)=n^{3}$ on $n>0$, then

$$
G(n)-F(n)=n^{2}(n-2).
$$

They meet at $n=2$. For $n>2$, the cubic is larger. For $0<n<2$, the quadratic is larger. As $n\to\infty$, the ratio $G/F=n/2\to\infty$, not $1$. The higher exponent dominates at infinity.

---

## 8.7 Calibration

Often the stem gives the exponent and one audited point. Then

$$
a=\frac{f(x_0)}{x_0^{b}}.
$$

After that, every other level uses this $a$, and every scale still ignores it.

**Example 1.** $Q(s)=A s^{1/2}$ and $Q(25)=40$. Then $A\cdot 5=40$, so $A=8$ and $Q(s)=8s^{1/2}$. Hence $Q(4)=16$ and $Q(100)=80$. Quadrupling staff still doubles output, even if a later statement pretends $A$ was $16$.

Sometimes the audit is a **difference** of two levels:

$$
A\bigl(x_2^{b}-x_1^{b}\bigr)=\text{recorded gain}.
$$

Solve for $A$, then go on. Do not treat the gain as if it were a single level $A x^{b}$.

Two points can also recover an unknown exponent. If $f(kx)/f(x)=r$, then $k^{b}=r$, so $b=\log r/\log k$. You only need logarithms if $b$ is not a small integer you can test by matching powers, such as $1.2^{3}=1.728$.

### Change of units

If $s$ is in metres and you switch to centimetres, you are composing with a linear change $s=0.01 u$. Then $as^{b}=a(0.01)^{b} u^{b}$. The exponent stays $b$; the coefficient absorbs the unit factor. A statement that “switching units changes the exponent” is false.

---

## 8.8 Inverse, composition and average product

### Solving $ax^{b}=c$

$$
x=\Bigl(\frac{c}{a}\Bigr)^{1/b}
$$

when the real root exists. Even integer $b$ can give two real roots when $c/a>0$. Odd $b$ gives one.

**Example 1.** $2x^{3}=54$ gives $x=3$ only. $x^{4}=16$ gives $x=\pm 2$.

### Inverse

On $(0,\infty)$ with $a>0$ and $b\neq 0$,

$$
y=ax^{b} \quad\Rightarrow\quad x=a^{-1/b} y^{1/b}.
$$

The new exponent is the reciprocal. If two stages undo each other, their exponents multiply to $1$ and the coefficients are matched so that $g(f(x))=x$.

**Example 2.** $Q=4L^{1/2}$ inverts to $L=Q^{2}/16$. Doubling $Q$ multiplies $L$ by $4=2^{1/(1/2)}$.

### Composition of two powers

If $u=A x^{p}$ and $v=B u^{q}$, then

$$
v=B A^{q} x^{pq}.
$$

Exponents **multiply**. Coefficients combine as $B A^{q}$, not as $BA$. Inner exponent $3/2$ and outer $2/3$ give a linear monomial. Inner square root and outer square also give exponent $1$.

**Example 3.** Metal $M=8u^{3/2}$, strength $S=\frac12 M^{2/3}$. Then

$$
S=\frac12\cdot 8^{2/3} u=\frac12\cdot 4\, u=2u.
$$

Strength is proportional to purity. A rival quote $S=2u+5$ is **affine**. It is not a power function, because of the intercept.

### Average product

For $f(x)=ax^{b}$ on $x>0$,

$$
\frac{f(x)}{x}=ax^{b-1}.
$$

The leftover exponent is $b-1$. If $b<1$, average product **falls** as $x$ grows. If $b>1$, it **rises**. If $b=1$, it is constant. This is how square-root technologies and cubic costs are told apart without drawing a graph.

---

## 8.9 Demand, revenue and a finite percentage change

Isoelastic demand is a negative-power function, for example

$$
q=Ap^{-3}\qquad\text{or}\qquad p=Aq^{-1/2}.
$$

Revenue is $R=pq$. Substituting $p=A q^{-b}$ gives

$$
R=A q^{1-b}.
$$

If $b>1$ (elastic), a higher quantity lowers revenue. If $0<b<1$ (inelastic), a higher quantity raises revenue. If $b=1$, revenue is the constant $A$.

### The elasticity shortcut versus the exact scale

A $10\%$ price rise is $k=1.1$, not “add $0.10$ times the exponent and stop”. The exact quantity factor is $k^{b}$. For $q\propto p^{-3}$,

$$
\frac{q(1.1p)}{q(p)}=1.1^{-3}\approx 0.751.
$$

Quantity falls by about $24.9\%$. The shortcut $3\times 10\%=30\%$ is a first-order guess. It overstates the cut. Exam statements often ask you to compare the exact $k^{b}$ with a round threshold such as $20\%$ or $30\%$, and separately to say whether revenue rises or falls.

**Example 1.** Highly elastic demand: price up, quantity down by more than the price rose, so $pq$ falls. Inelastic demand is the opposite region for revenue.

### Floors, caps and learning curves

A **floor** or **ceiling** is an inequality on top of the power, such as “cost cannot fall below $12$” or “output cannot exceed $400$”. The power still gives the formula; the cap truncates it. The formula $12+40x^{-1/2}$ is a floor plus a power, hence not a pure monomial.

A **learning curve** is still $ax^{b}$ with $b<0$ (or $0<b<1$ on cumulative output, depending on the stem). Extra experience lowers unit hours. An $80\%$ learning curve means that doubling cumulative output multiplies unit time by $0.8=2^{b}$, so $b=\log 0.8/\log 2<0$. The same scale identity as in 8.6.

---

## 8.10 Common errors

1. **Exponent on the coefficient.** $5s^{3}$ at $s=3$ is $135$, not $125=5^{3}$.
2. **Scale copied as a level.** Doubling $A$ doubles $f(x)$, not $f(kx)/f(x)$.
3. **Percentage inherited.** $k=1.1$ and $b=2$ give $+21\%$, not $+10\%$.
4. **Domain copied from a neighbour.** $\sqrt{x}$ refuses negatives and accepts $0$. $x^{-2}$ accepts negatives and refuses $0$.
5. **Even/odd by eye.** $\sqrt{x}$ is neither. $1/x^{2}$ is even.
6. **Comparing powers without splitting at $1$.** $x^{3}>x^{2}$ only for $x>1$.
7. **Limits at $0$ swapped with limits at $\infty$.** Negative exponents die at infinity and blow up at $0$.
8. **Affine called a power.** $ax^{b}+c$ with $c\neq 0$ is not $ax^{b}$.
9. **Composition as $BA$ instead of $B A^{q}$.** Outer exponent hits the inner coefficient.
10. **Inverse missing the negative root** when $b$ is even, or inventing one when $b$ is odd.
11. **Elasticity shortcut treated as exact.** Use $k^{b}$ for a finite change.
12. **Average product given the same exponent as total product.** Leftover exponent is $b-1$.

---

## 8.11 Summary reference

| Question | What to do |
| --- | --- |
| Is it a power function? | Can it be written $ax^{b}$ with $b$ constant and no added intercept? |
| Domain | Even root: $x\ge 0$. Negative exponent: $x\neq 0$. Both: $x>0$. Odd integer: all $x$. |
| Level | Compute $a x^{b}$. Exponent on $x$ only. |
| Scale | $f(kx)/f(x)=k^{b}$. Coefficient cancels. |
| $10\%$ extra input | $k=1.1$, factor $1.1^{b}$, not $b\times 10\%$. |
| Even or odd | Check $f(-x)$ after the domain is symmetric. |
| $x\to\infty$ | $b>0\to\infty$; $b<0\to 0$. |
| $x\to 0^{+}$ | $b>0\to 0$; $b<0\to\infty$. |
| Calibrate | $a=f(x_0)/x_0^{b}$, or split a recorded difference. |
| Compose $A x^{p}$ then $B(\,\cdot\,)^{q}$ | Exponent $pq$, coefficient $B A^{q}$. |
| Inverse on $(0,\infty)$ | $a^{-1/b} y^{1/b}$. |
| Average product | $ax^{b-1}$. Sign of $b-1$ tells rise or fall. |
| Double the output $Q=AL^{b}$ | Multiply $L$ by $2^{1/b}$. |
| Isoelastic revenue | $R=A q^{1-b}$ from $p=A q^{-b}$. |

Standard identities:

$$
f(x)=ax^{b}, \qquad \frac{f(kx)}{f(x)}=k^{b}, \qquad \frac{f(x)}{x}=ax^{b-1}.
$$

$$
f^{-1}(y)=a^{-1/b} y^{1/b} \quad (x>0,\ a>0,\ b\neq 0).
$$

**Working order.** Write $ax^{b}$. Fix the domain. Decide whether the claim is a level, a scale, a calibration, a composition, or a limit. Never put the exponent on the coefficient. Never copy a percentage from the input to the output unless $b=1$. Check affine intercepts before calling something a power function.

**Self-check.** Why is $5\cdot 3^{3}$ not $125$? Why does doubling the coefficient leave $f(2x)/f(x)$ unchanged? What is $1.1^{2}$ as a percentage rise? Why does $\sqrt{x}$ accept $0$ and refuse $-4$, while $x^{-2}$ does the opposite? If $u=8x^{3/2}$ and $v=\frac12 u^{2/3}$, why is $v$ proportional to $x$? For $q\propto p^{-3}$, is a $10\%$ price rise exactly a $30\%$ quantity fall? And why does $f(x)/x$ fall when $0<b<1$?
