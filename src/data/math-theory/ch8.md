# Chapter 8 — Power functions

A power function raises the input to a fixed exponent. The same shape appears as a cost that falls with scale, as output that grows with labour, as a price that falls with quantity, and as a simple graph such as $y=x^2$ or $y=1/x$.

The tasks in this chapter keep asking the same few moves: name the domain, evaluate a **level**, scale by $k^{b}$, recover a coefficient, compose two powers, and read a limit. Some items are written as pure formulas. Many more are **text tasks**: a warehouse, a resin cube, a wait-time rule, a demand curve. The story changes. The algebra does not.

Polynomials with several different powers added belong to the next chapter. Exponential functions $a^x$ belong to Chapter 10.

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
- Work both formula items and **text tasks** (warehouse, resin cube, wait-time, demand) with the same algebra.
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

**Example 2 (text).** Nora’s print shop bills a run of $n>0$ copies as a fixed setup plus a square-root charge,

$$
C(n)=F+A n^{1/2}.
$$

A $16$-copy run costs $250$ euros. A $64$-copy run costs $450$ euros. Is $C$ a power function of $n$? Recover $F$ and $A$, then decide.

The two invoices are

$$
F+4A=250, \qquad F+8A=450,
$$

because $\sqrt{16}=4$ and $\sqrt{64}=8$. Subtracting cancels $F$:

$$
4A=200 \quad\Rightarrow\quad A=50.
$$

Then $F+4\cdot 50=250$, so $F=50$. The recovered bill is

$$
C(n)=50+50\sqrt{n}.
$$

The $50$ euro setup sits outside the power of $n$. So $C$ is **not** a power function of the run size, even though the variable part is $n^{1/2}$. A statement “the whole bill is proportional to $\sqrt{n}$” is false. A statement “unit cost $C(n)/n$ falls as $n$ grows” can still be true, because that leftover setup is spread over more copies.

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

**Example 3.** Rewrite $\dfrac{8}{x^{3/2}}$.

$$
\frac{8}{x^{3/2}}=8x^{-3/2}.
$$

That is a power function with $a=8$ and $b=-3/2$. Now $x^{3/2}=(x^{1/2})^{3}$, so an even root is involved and $x=0$ is excluded by the negative exponent. Domain: $x>0$.

The rewrite is not decoration. Exam statements often hide a negative exponent inside a fraction. Once the formula is $ax^{b}$, domain, scale and limits are the usual checklist.

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

**Example 4 (text).** A turbidity gauge reports

$$
R(t)=\frac{50}{t^{2}}
$$

units, $t$ hours after a reset. A colleague writes: “At the reset the reading is $0$, because nothing has had time to cloud the water.”

The formula is $50t^{-2}$. The exponent is negative, so $t=0$ is not in the domain. There is no real reading at the reset. The graph has a vertical asymptote there: as $t\to 0^{+}$ the index becomes arbitrarily large, it does not fall to $0$. The story about “no time to cloud” is chemistry, not this model.

A second instrument on the same shift records dissolved load $D(t)=6\sqrt{t}$. That one **does** accept $t=0$, and $D(0)=0$. Same letter $t$, two different exponents, two different domains. Do not copy the domain from one formula onto the other.

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

[[FIGURE:power-even-odd|Even power $x^{2}$ versus odd power $x^{3}$. Axes, ticks and a clip frame; $x^{3}$ leaves the window because it grows faster.]]

**Example 3 (text).** A beacon’s signal is $S(x)=80/x^{3}$ millivolts at distance $x>0$ metres. Packet counts follow $T(x)=2\sqrt{x}$. A statement says: “$S$ is an even function, because the graph on the right of $0$ would match the left if we could plot it.”

Refuse the claim. The domain of $S$ is $x>0$, which is not symmetric about $0$. A function that is not defined for $-x$ cannot be even or odd. The same holds for $T$. Even/odd is a test you run only after the domain has been checked.

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

[[FIGURE:power-compare|$y=x$, $y=x^{2}$ and $y=x^{3}$ on $[0,2]$. They meet at $(1,1)$. After that $x^{3}$ grows out of the window first.]]

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

**Example 4 (text).** Harvest follows $Y(h)=2h^{1/3}$ kilograms after $h$ watering hours. Eight hours give $4$ kg. A grower says: “One extra hour after $8$ hours adds the same kilograms as one extra hour after $27$ hours, because the coefficient $2$ never changes.”

The coefficient is not the extra output. Compare two equal one-hour steps:

$$
Y(9)-Y(8)=2\bigl(9^{1/3}-8^{1/3}\bigr)\approx 2(2.080-2)=0.160,
$$

$$
Y(28)-Y(27)=2\bigl(28^{1/3}-3\bigr)\approx 2(3.037-3)=0.074.
$$

The extra hour is worth less later. The exponent $1/3<1$ is the whole reason. A statement that extra output is constant would need $b=1$.

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

[[FIGURE:power-reciprocal|$1/x$ (odd, sign change) and $1/x^{2}$ (even, always positive). Both have a hole at the origin: vertical asymptote $x=0$ and horizontal asymptote $y=0$.]]

**Example 2.** Let $p(x)=3/x^{2}$. Which of the following are true?

- $p(x)>0$ for all $x\neq 0$. True.
- $\lim_{x\to 0}p(x)=0$. False: the values become large positive.
- $\lim_{x\to\infty}p(x)=0$. True.
- The graph crosses the $y$-axis. False: $x=0$ is not in the domain.

**Example 3.** A demand function is $p(q)=18q^{-0.5}$ for $q>0$. As quantity demanded becomes huge, the price approaches $0$. As quantity approaches $0$, the price becomes arbitrarily large. Both limits are the standard negative-exponent picture, not a programming error in the model.

**Example 4 (text).** Median response time follows $W(k)=216\,k^{-3/2}$ milliseconds on $k>0$ servers. A manager claims two things: “With a very large farm the wait settles at $216$ ms,” and “near $k=0$ the wait falls to $0$.”

Both are the limits swapped. The exponent is negative, so

$$
\lim_{k\to\infty}W(k)=0, \qquad \lim_{k\to 0^{+}}W(k)=\infty.
$$

A large farm drives wait toward $0$, not toward the coefficient. A collapsing farm makes wait blow up, not fade. The number $216$ is the coefficient, not a floor.

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

**Example 2.** Energy index $E(v)=0.5 v^{2}$. A ten percent overspeed is $k=1.1$:

$$
1.1^{2}=1.21.
$$

So $E$ rises by $21\%$, not by $10\%$. The trap is copying the input’s percentage onto the output. The coefficient $0.5$ never enters the ratio.

**Example 3.** Output $Q(s)=8s^{1/2}$. Quadrupling staff is $k=4$, so output is multiplied by $4^{1/2}=2$, not by $4$. A statement that “four times the staff gives four times the crates” is the $b=1$ story.

**Example 4 (text, a full exam item).** A cube resin block has mass $M(s)=5s^{3}$ grams for side $s>0$ centimetres. Judge these five claims. This is the same rhythm as the practice bank: some letters are levels, one is a scale, two are trap numbers.

1. Side $2$ cm gives mass $40$ grams.  
   Level. $M(2)=5\cdot 2^{3}=5\cdot 8=40$. True. The exponent acts on the side, never on the $5$.

2. Side $3$ cm gives mass $125$ grams.  
   $M(3)=5\cdot 27=135$, not $125$. The figure $125$ is $5^{3}$: someone cubed the density and ignored the side. False.

3. Doubling the side multiplies the mass by $8$.  
   Scale. The coefficient cancels:

   $$
   \frac{M(2s)}{M(s)}=2^{3}=8.
   $$

   True. “Twice the side, twice the mass” would be exponent $1$. “Four times the mass” would be the area story, exponent $2$.

4. Side $1$ cm gives mass $5$ grams.  
   $M(1)=5\cdot 1=5$. True, but only because every power of $1$ is $1$. A reader who cubed $5$ would land on $125$ again and confuse this letter with (2).

5. Side $4$ cm gives mass $240$ grams.  
   $M(4)=5\cdot 64=320$, not $240$. False. Nothing in $5s^{3}$ produces $240$.

Write the formula. Decide level versus scale. Never put the exponent on $a$. That is the chapter in miniature.

### Crossing of two powers

If $F(n)=2n^{2}$ and $G(n)=n^{3}$ on $n>0$, then

$$
G(n)-F(n)=n^{2}(n-2).
$$

They meet at $n=2$. For $n>2$, the cubic is larger. For $0<n<2$, the quadratic is larger. As $n\to\infty$, the ratio $G/F=n/2\to\infty$, not $1$. The higher exponent dominates at infinity.

**Example 5 (text).** Two inspection bills on a batch of $n>0$ documents: automated $C(n)=n^{2}$ and manual $D(n)=16n$. On a batch of $16$ they cost the same, $256$ each. A statement says: “Past $16$ documents the automated bill is cheaper, because a machine should win on large batches.”

The gap is

$$
C(n)-D(n)=n(n-16).
$$

For $n>16$ the gap is **positive**, so automated is more expensive, not cheaper. The quadratic grows faster once you are past the meeting point. The story about machines is not the algebra. The algebra is the sign of $n-16$.

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

**Example 2 (text).** Wait follows $W(k)=A k^{-3/2}$ milliseconds for $k>0$ servers. The log does not state $A$. It only records that moving from $4$ servers to $9$ servers cut the median wait by exactly $19$ ms. Recover $A$, then $W(4)$ and $W(9)$.

The recorded $19$ is that difference, not a level:

$$
W(4)-W(9)=A\bigl(4^{-3/2}-9^{-3/2}\bigr)=19.
$$

Now $4^{-3/2}=1/8$ and $9^{-3/2}=1/27$, so

$$
A\Bigl(\frac{1}{8}-\frac{1}{27}\Bigr)=19, \qquad A\cdot\frac{19}{216}=19, \qquad A=216.
$$

Then $W(4)=216/8=27$ and $W(9)=216/27=8$. A solver who treated $19$ as if it were $W(4)$ would recover the wrong coefficient and every later letter would follow it.

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

**Example 1.** $2x^{3}=54$ gives $x=3$ only:

$$
x^{3}=27, \qquad x=3.
$$

Even integer $b$ can give two real roots: $x^{4}=16$ gives $x=\pm 2$. A statement that lists only the positive root when $b$ is even is incomplete unless the domain was already restricted to $x>0$.

### Inverse

On $(0,\infty)$ with $a>0$ and $b\neq 0$,

$$
y=ax^{b} \quad\Rightarrow\quad x=a^{-1/b} y^{1/b}.
$$

The new exponent is the reciprocal. If two stages undo each other, their exponents multiply to $1$ and the coefficients are matched so that $g(f(x))=x$.

**Example 2.** $Q=4L^{1/2}$ inverts to $L=Q^{2}/16$. Doubling $Q$ multiplies $L$ by $4=2^{1/(1/2)}$.

**Example 3 (text).** Harvest is $Y(h)=2h^{1/3}$ on $h>0$. A grower wants $10$ kg instead of $4$ kg and asks whether watering time is still a power of harvest.

Solve $2h^{1/3}=Y$ for $h$:

$$
h=\Bigl(\frac{Y}{2}\Bigr)^{3}.
$$

That is a cube of a linear function of $Y$, still a power of $Y$. At $Y=10$,

$$
h=\Bigl(\frac{10}{2}\Bigr)^{3}=125
$$

hours. Doubling harvest from $4$ kg to $8$ kg multiplies hours by $2^{3}=8$, from $8$ hours to $64$ hours. If the stem had been $Y=2+h^{1/3}$, the inverse would have left the power-function class. The stem has no setup hours, so the inverse stays a monomial.

### Composition of two powers

If $u=A x^{p}$ and $v=B u^{q}$, then

$$
v=B A^{q} x^{pq}.
$$

Exponents **multiply**. Coefficients combine as $B A^{q}$, not as $BA$. Inner exponent $3/2$ and outer $2/3$ give a linear monomial. Inner square root and outer square also give exponent $1$.

**Example 4.** Metal $M=8u^{3/2}$, strength $S=\frac12 M^{2/3}$. Then

$$
S=\frac12\cdot (8u^{3/2})^{2/3}
=\frac12\cdot 8^{2/3}\, u
=\frac12\cdot 4\, u
=2u.
$$

Inner exponent $3/2$ and outer $2/3$ multiply to $1$. Strength is proportional to purity. A rival quote $S=2u+5$ is **affine**. It is not a power function, because of the intercept. They meet where $2u=1.8u+5$, so $u=25$, once, not “never”.

### Average product

For $f(x)=ax^{b}$ on $x>0$,

$$
\frac{f(x)}{x}=ax^{b-1}.
$$

The leftover exponent is $b-1$. If $b<1$, average product **falls** as $x$ grows. If $b>1$, it **rises**. If $b=1$, it is constant. This is how square-root technologies and cubic costs are told apart without drawing a graph.

**Example 5 (text).** Warehouse throughput is $H(s)=8s^{1/2}$ pallets per hour with $s>0$ staff. A statement says: “Pallets per worker stay constant when the shift is enlarged, because the technology never changes.”

Pallets per worker is the average product

$$
\frac{H(s)}{s}=8s^{-1/2}.
$$

The leftover exponent is negative, so the average **falls** as $s$ grows. At $s=16$, average product is $2$. At $s=64$, it is $1$. The technology is the same power. The average is not constant. Constant average product would need $b=1$.

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

**Example 2 (text).** Monthly subscriptions follow $q(p)=A p^{-2}$, and at $5$ euros the service sells $400$ subscriptions. Revenue is $R=pq$. A proposed $10\%$ price rise is claimed to cut quantity by exactly $20\%$, and to raise revenue.

First recover $A$:

$$
A\cdot 5^{-2}=400 \quad\Rightarrow\quad A\cdot \frac{1}{25}=400 \quad\Rightarrow\quad A=10000.
$$

So $q(p)=10000\,p^{-2}$ and $R(p)=10000\,p^{-1}$. A $10\%$ rise is $k=1.1$, not “twice $10\%$ because the exponent is $-2$”:

$$
\frac{q(1.1p)}{q(p)}=1.1^{-2}\approx 0.8264.
$$

Quantity falls by about $17.4\%$, not by $20\%$ and not by $30\%$. Revenue at the new price is

$$
R(5.5)=\frac{10000}{5.5}\approx 1818,
$$

against $R(5)=2000$. Revenue **falls**. For $q\propto p^{-2}$ the exponent on revenue is $1-2=-1$, so a higher price lowers $R$. The elasticity shortcut $2\times 10\%=20\%$ is a first-order guess. The exact factor is $k^{b}$.

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

**Self-check.** Why is $5\cdot 3^{3}$ not $125$? Why does doubling the coefficient leave $f(2x)/f(x)$ unchanged? What is $1.1^{2}$ as a percentage rise? Why does $\sqrt{x}$ accept $0$ and refuse $-4$, while $x^{-2}$ does the opposite? If $u=8x^{3/2}$ and $v=\frac12 u^{2/3}$, why is $v$ proportional to $x$? For $q\propto p^{-3}$, is a $10\%$ price rise exactly a $30\%$ quantity fall? Why does $f(x)/x$ fall when $0<b<1$? In a print-shop bill $F+A\sqrt{n}$, what stops the whole bill from being a power of $n$? And if wait falls by $19$ ms between two server counts, why is that $19$ not the coefficient $A$?
