# Chapter 8 — Power functions

A power function raises the input to a fixed exponent. The same shape appears as a cost that falls with scale, as output that grows with labour, as a price that falls with quantity, and as a simple graph such as $y=x^2$ or $y=1/x$. The exam asks you to read the formula, name the domain, describe the graph, compare two powers, and turn a story into $y=ax^b$.

This chapter stays with power functions. Polynomials with several different powers together belong to the next chapter. Exponential functions $a^x$, where the variable sits in the exponent, belong to Chapter 10.

## Learning objectives

- Recognise $f(x)=ax^b$ and say what $a$ and $b$ do.
- Decide the domain from the exponent: integers, roots, and negative powers.
- Tell even graphs from odd graphs, and say when the function is neither.
- Compare $x^p$ and $x^q$ on $(0,1)$ and on $(1,\infty)$.
- Read limits as $x\to\infty$, as $x\to 0^+$, and at a hole such as $x=0$ for $1/x$.
- Invert a power function and solve $ax^b=c$.
- Use a power in an applied story (output, demand, scaling) without mixing it up with an exponential.

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

## 8.6 Inverse powers and solving

### Solving $ax^{b}=c$

Assume $a\neq 0$, $c$ in the range, and $x$ in the domain. Then

$$
x^{b}=\frac{c}{a}, \qquad x=\left(\frac{c}{a}\right)^{1/b}
$$

when the real $b$-th root exists. If $b$ is an even integer you may get two real solutions, $x$ and $-x$, from $x^{b}=k>0$. If $b$ is odd there is one real solution.

**Example 1.** Solve $2x^{3}=54$.

$$
x^{3}=27, \qquad x=3.
$$

The cube root of a positive number is unique in the reals. A statement that adds a second solution $x=-3$ is false, because $(-3)^{3}=-27$.

**Example 2.** Solve $x^{4}=16$.

$$
x=\pm 2.
$$

Both $2^{4}=16$ and $(-2)^{4}=16$. Missing the negative root is a common false statement in the other direction: claiming there is only $x=2$.

### Inverse function

If $y=ax^{b}$ with $a>0$, $b\neq 0$ and $x>0$, the inverse on $(0,\infty)$ is another power function:

$$
x=\left(\frac{y}{a}\right)^{1/b}=\ a^{-1/b}\, y^{1/b}.
$$

The new exponent is the reciprocal of the old one. If output is a square root of labour, labour is a square of output.

**Example 3.** Wheat output (tonnes) from $L$ hours of labour is

$$
Q=4L^{1/2}, \qquad L>0.
$$

Solve for labour:

$$
\frac{Q}{4}=L^{1/2}, \qquad L=\left(\frac{Q}{4}\right)^{2}=\frac{Q^{2}}{16}.
$$

The labour needed for a given harvest is a power function of $Q$, with exponent $2$. A statement that “the inverse is not a power function” is false.

To **double** output from $Q$ to $2Q$,

$$
L_{\text{new}}=\frac{(2Q)^{2}}{16}=4\cdot\frac{Q^{2}}{16}=4\,L_{\text{old}}.
$$

Labour must be multiplied by $4$, not by $2$. Whenever $0<b<1$, doubling output requires more than doubling the input. If $b>1$, doubling output requires less than doubling the input. If $b=1$, they scale together.

---

## 8.7 Applied power functions

Exam tasks rarely say “consider $x^{b}$”. They wrap the same algebra in output, price, cost or physical scaling. Translate first, then use the properties from 8.2–8.6.

### Production of the form $Q=AL^{b}$

$A>0$ is a productivity constant. $L>0$ is labour (or some other input). The exponent $b$ is the same $b$ as in the theory.

| $b$ | Reading |
| --- | --- |
| $0<b<1$ | Output rises with $L$, but extra hours add less and less |
| $b=1$ | Output is proportional to labour |
| $b>1$ | Extra hours add more and more |

The inverse $L=(Q/A)^{1/b}$ is a power function of $Q$, as in Example 3 of 8.6.

**Example 1.** Two farms. Farm A: $Q_{A}=6L^{0.5}$. Farm B: $Q_{B}=3L^{0.8}$. At $L=16$,

$$
Q_{A}=6\cdot 4=24, \qquad Q_{B}=3\cdot 16^{0.8}.
$$

$16^{0.8}=(16^{4/5})=(2^4)^{4/5}=2^{16/5}=2^{3.2}\approx 9.19$, so $Q_{B}\approx 27.6$. Farm B produces more at this scale even though its coefficient $3$ is smaller, because $16$ is well above $1$ and $0.8>0.5$. A statement that “the larger coefficient always means more output” is false. You must compare $AL^{b}$ at the given $L$, not $A$ alone.

### Demand of the form $p=Aq^{-b}$

Price falling as a power of quantity is a negative-exponent power function. Domain $q>0$. As $q\to 0^{+}$, $p\to\infty$. As $q\to\infty$, $p\to 0$.

**Example 2.** $p=48q^{-1}$. This is $p=48/q$. Doubling quantity halves the price. A statement that “doubling quantity cuts the price to one quarter” would match $q^{-2}$, not $q^{-1}$.

### Geometric scaling

If a length is scaled by $k>0$, areas scale by $k^{2}$ and volumes by $k^{3}$. Those are power functions of the scale factor, with exponents $2$ and $3$.

**Example 3.** A cubic crate has side $s$. Volume $V=s^{3}$. To multiply volume by $8$,

$$
(s_{\text{new}})^{3}=8s^{3} \Rightarrow s_{\text{new}}=2s.
$$

Sides only double. A statement “the side must be multiplied by $8$” confuses the exponent.

### Writing the model from words

“$y$ is proportional to $x^{b}$” means $y=ax^{b}$ for some $a\neq 0$. “Inversely proportional to the square of $x$” means $y=a/x^{2}=ax^{-2}$. Find $a$ from one given pair $(x,y)$ if the statement needs a number.

**Example 4.** Cost is inversely proportional to the square of batch size. When the batch is $10$ units, cost is $36$. Then

$$
C=\frac{a}{n^{2}}, \qquad 36=\frac{a}{100}, \qquad a=3600, \qquad C=\frac{3600}{n^{2}}.
$$

At $n=20$, $C=9$. A claim that doubling the batch halves the cost is false for this exponent: doubling $n$ divides cost by $4$.

---

## 8.8 Common errors

### Error 1: mixing power and exponential

$x^{2}$ is a power. $2^{x}$ is exponential. They meet at some points (for instance $x=2$ and $x=4$) but they are different functions. Limits as $x\to\infty$ are not the same family of statements.

### Error 2: domain copied from a neighbour

$x^{1/3}$ allows negatives. $x^{1/2}$ does not. $x^{2/3}$ allows negatives. $x^{3/2}$ does not. Read the fraction as root then power, in lowest terms.

### Error 3: even/odd by looking at the formula carelessly

$\sqrt{x}$ is not even. $x^{2}+1$ is even, but it is not a pure power function. $x^{2}+x$ is neither even nor odd. $1/x^{2}$ is even, even though it is undefined at $0$: the domain is still symmetric.

### Error 4: comparing powers without splitting at $1$

$x^{4}>x^{2}$ is not always true. On $(0,1)$ it is the other way around. Always test a point in $(0,1)$ and a point in $(1,\infty)$, unless the statement already restricts $x$.

### Error 5: limits at $0$ mixed with limits at $\infty$

Negative exponents go to $0$ at infinity and blow up at $0$. Positive exponents do the opposite (go to $0$ at $0^{+}$, and to $\infty$ at $\infty$). Swapping these two sentences is a standard false statement.

### Error 6: doubling output versus doubling input

From $Q=AL^{b}$,

$$
\frac{L_{\text{double}}}{L}=\ 2^{1/b}.
$$

If $b=1/2$, the factor is $4$. If $b=2$, the factor is $\sqrt{2}\approx 1.41$. The slogan “double the input, double the output” is only true for $b=1$.

### Error 7: dropping a sign when $b$ is even

$x^{4}=16$ has two real roots. $x^{3}=8$ has one. $(-2)^{3}$ is $-8$, not $8$.

### Error 8: calling a shifted graph a power function

$f(x)=(x-3)^{2}$ is a translation of $x^{2}$. It is a quadratic, and it is a polynomial, but it is not of the form $ax^{b}$. Statements that treat every parabola as $ax^{b}$ are false unless the vertex is at the origin.

---

## 8.9 Summary reference

| Question | What to do |
| --- | --- |
| Is it a power function? | Can it be written $ax^{b}$ with $b$ constant? |
| Domain | Integer $b>0$: all $x$. Integer $b<0$: $x\neq 0$. Even root: $x\ge 0$. Also drop $0$ if $b<0$. |
| Even or odd | $f(-x)=f(x)$ even; $f(-x)=-f(x)$ odd; otherwise neither (or domain not symmetric). |
| Increasing on $(0,\infty)$ | For $a>0$: yes if $b>0$, no if $b<0$. |
| Compare $x^{p}$ and $x^{q}$ | Split at $x=1$. Higher exponent wins only for $x>1$. |
| $x\to\infty$ | $b>0\to\infty$; $b<0\to 0$. |
| $x\to 0^{+}$ | $b>0\to 0$; $b<0\to\infty$. |
| Asymptotes if $b<0$ | $x=0$ vertical, $y=0$ horizontal. |
| Solve $ax^{b}=c$ | $x=(c/a)^{1/b}$, then add $-x$ when the even power allows it. |
| Inverse of $ax^{b}$ on $(0,\infty)$ | $a^{-1/b}y^{1/b}$. |
| Double the output | Multiply the input by $2^{1/b}$. |

Standard form:

$$
f(x)=ax^{b}.
$$

Inverse on $(0,\infty)$, $a>0$, $b\neq 0$:

$$
f^{-1}(y)=a^{-1/b}y^{1/b}.
$$

Scaling for output $Q=AL^{b}$:

$$
L=\Bigl(\frac{Q}{A}\Bigr)^{1/b}, \qquad \frac{L(2Q)}{L(Q)}=2^{1/b}.
$$

**Working order.** Write the formula as $ax^{b}$. Name $a$ and $b$. Fix the domain before any comparison or limit. Decide even/odd only after the domain is symmetric. For inequalities, split $(0,1)$ from $(1,\infty)$. For stories, invert or scale with $2^{1/b}$ rather than guessing.

**Self-check.** Why is $2^{x}$ not a power function? Why is $\sqrt{x}$ neither even nor odd? For which $x$ is $x^{3}>x^{2}$? What is $\lim_{x\to\infty}x^{-3}$, and what is $\lim_{x\to 0^{+}}x^{-3}$? Why does $1/x$ have no two-sided limit at $0$? If $Q=5L^{1/3}$, by what factor must labour rise to double output? And why does $x^{4}=81$ have two real roots while $x^{3}=81$ has one?
