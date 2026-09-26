# DEMO MATH 9.H01

ak=[True, True, True, False, True]

current_lens=[329, 870, 891, 853, 434]

## title
Cubic over quadratic — limits and roots

## context
Let
$$
r(x)=ax^{3}+bx^{2}+cx+d,\qquad a\neq 0,
$$
be a real cubic, and define
$$
s(x)=\dfrac{r(x)}{x^{2}+4}.
$$
Decide whether each claim is true or false.

## statement A
$\displaystyle\lim_{x\to+\infty}s(x)=+\infty$ whenever $a>0$.

## current A
**A.** → True

Rewrite the rational function by factoring $ax$ out of the numerator:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

As $x\to+\infty$ the fraction tends to $1$, so

$$
s(x)\sim ax
$$

When $a>0$ this tends to $+\infty$, matching the claim.

So the statement is True.

## statement B
$\displaystyle\lim_{x\to-\infty}r(x)=-\infty$ whenever $a>0$.

## current B
**B.** → True

$$
r(x)=ax^{3}+bx^{2}+cx+d
$$

$$
r(x)=ax^{3}\Bigl(1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}\Bigr)
$$

As $x\to-\infty$:

$$
x\to-\infty
$$

$$
x^{2}=(-|x|)^{2}=|x|^{2}\to+\infty
$$

$$
x^{3}=(-|x|)^{3}=-|x|^{3}\to-\infty
$$

With $a>0$:

$$
a>0
$$

$$
ax^{3}\to-\infty
$$

Each correction term vanishes:

$$
\frac{b}{ax}\to 0
$$

$$
\frac{c}{ax^{2}}\to 0
$$

$$
\frac{d}{ax^{3}}\to 0
$$

so the parenthesis tends to $1$ and

$$
\lim_{x\to-\infty}r(x)=-\infty
$$

Numerical check with $a=3$, $b=c=d=0$ at $x=-10$:

$$
(-10)^{3}=-1000\qquad 3\cdot(-1000)=-3000
$$

$$
r(-10)=-3000
$$

At $x=-100$:

$$
(-100)^{2}=10000\qquad (-100)^{3}=-1000000
$$

$$
3\cdot(-1000000)=-3000000\qquad r(-100)=-3000000
$$

$$
-3000000<-3000
$$

which grows more negative as $x\to-\infty$, consistent with the limit $-\infty$ whenever $a>0$.

So the statement is True.

## statement C
If $r(2)=0$ and $r'(2)=0$, then $(x-2)^{2}$ divides $r(x)$, so $x=2$ is at least a double root.

## current C
**C.** → True

Differentiate the cubic coefficient by coefficient:

$$
r(x)=ax^{3}+bx^{2}+cx+d
$$

$$
\frac{d}{dx}(ax^{3})=3ax^{2}
$$

$$
\frac{d}{dx}(bx^{2})=2bx
$$

$$
\frac{d}{dx}(cx)=c\qquad \frac{d}{dx}(d)=0
$$

$$
r'(x)=3ax^{2}+2bx+c
$$

The hypothesis gives two vanishing conditions at $x=2$:

$$
r(2)=0\qquad r'(2)=0
$$

A standard factorisation fact: if a polynomial and its first derivative both vanish at $\alpha$, then $(x-\alpha)^{2}$ divides the polynomial. Taking $\alpha=2$:

$$
(x-2)^{2}\mid r(x)
$$

Hence $x=2$ is at least a double root.

Concrete illustration with $a=1$, $b=-4$, $c=4$, $d=0$ so $r(x)=x(x-2)^{2}$:

$$
r(x)=x(x^{2}-4x+4)
$$

$$
r(x)=x^{3}-4x^{2}+4x
$$

$$
r'(x)=3x^{2}-8x+4
$$

Evaluate at $x=2$:

$$
r(2)=8-16+8=0
$$

$$
r'(2)=12-16+4=0
$$

and the factor $(x-2)^{2}$ is visible by construction. The claimed implication holds.

So the statement is True.

## statement D
For every choice of $a,b,c,d$ with $a\neq 0$, the horizontal line $y=0$ is a horizontal asymptote of $s$.

## current D
**D.** → False

From the asymptotic rewrite:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

$$
s(x)\sim ax
$$

Degree comparison:

$$
\deg r=3
$$

$$
\deg(x^{2}+4)=2\qquad 3-2=1
$$

$$
3>2
$$

Because $a\neq 0$:

$$
|a|>0
$$

$$
|ax|\to\infty\qquad\text{as }|x|\to\infty
$$

$$
|s(x)|\to\infty\qquad\text{as }|x|\to\infty
$$

A horizontal asymptote $y=0$ would require

$$
s(x)\to 0
$$

but that contradicts $|s(x)|\to\infty$.

Numerical counter-example with $a=3$, $b=c=d=0$:

$$
s(100)=\frac{3\cdot 100^{3}}{100^{2}+4}
$$

$$
100^{2}=10000\qquad 100^{3}=1000000
$$

$$
10000+4=10004
$$

$$
\frac{3000000}{10004}\approx 299.88
$$

$$
299.88\neq 0
$$

and the values grow without bound as $|x|$ grows. So $y=0$ is not a horizontal asymptote for any coefficients with $a\neq 0$.

So the statement is False.

## statement E
If $a=3$, $b=-6$, $c=0$, $d=0$, then $r(x)=3x^{2}(x-2)$, so $x=0$ is a double root and $x=2$ is a simple root.

## current E
**E.** → True

Substitute $a=3$, $b=-6$, $c=0$, $d=0$:

$$
r(x)=3x^{3}-6x^{2}=3x^{2}(x-2)
$$

Roots from the factorisation: $x=0$ (multiplicity $2$) and $x=2$ (multiplicity $1$). Confirm with the derivative $r'(x)=9x^{2}-12x$:

$$
r'(0)=0\qquad r(0)=0
$$

so multiplicity at least $2$ at $0$. At $x=2$:

$$
r(2)=0\qquad r'(2)=9\cdot 4-12\cdot 2=36-24=12\neq 0
$$

so $x=2$ is a simple root. The claim holds.

So the statement is True.