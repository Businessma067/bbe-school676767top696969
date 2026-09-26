# DEMO MATH 4.H02

ak=[False, True, False, False, True]

current_lens=[834, 764, 985, 510, 823]

## title
Five mixed hard equations — no shortcuts

## context
Decide whether each claim is true or false. Five independent mixed equations. The five claims deliberately use different judgment styles — candidate survival, root count, size comparison, threshold, and sign/location — so do not expect the same wording twice.

## statement A
Squaring twice for $\sqrt{3x+7}+\sqrt{x+1}=4$ produces two real candidates, and both of them survive domain checks and back-substitution.

## current A
**A.** → False

Begin with the domain of both radicals: $x\ge -1$. Isolate one square root:

$$
\sqrt{3x+7}=4-\sqrt{x+1}
$$

The right side must stay nonnegative, which requires $x\le 15$. Square once:

$$
3x+7=16-8\sqrt{x+1}+(x+1)
$$

Collect like terms:

$$
2x-10=-8\sqrt{x+1}
$$

Divide by $-2$:

$$
5-x=4\sqrt{x+1}
$$

which forces the additional restriction $x\le 5$. Square again:

$$
(5-x)^{2}=16(x+1)
$$

Expand both sides:

$$
25-10x+x^{2}=16x+16
$$

Move everything to one side:

$$
x^{2}-26x+9=0
$$

Discriminant and roots:

$$
26^{2}-4\cdot 9=676-36=640
$$

$$
x=\frac{26\pm\sqrt{640}}{2}=13\pm 4\sqrt{10}
$$

Two real candidates appear, but only the smaller one lies in $[-1,5]$ and survives back-substitution. The larger candidate is discarded. So it is not true that both candidates survive.

So the statement is False.

## statement B
After discarding the poles $x=1$ and $x=-4$, the equation $\dfrac{x+2}{x-1}+\dfrac{2x-3}{x+4}=\dfrac{3x^{2}+5x-2}{(x-1)(x+4)}$ reduces to a linear condition with exactly one surviving real root.

## current B
**B.** → True

Work on the common domain that excludes the poles

$$
x\neq 1
$$

$$
x\neq -4
$$

Clear the common denominator $(x-1)(x+4)$:

$$
(x+2)(x+4)+(2x-3)(x-1)=3x^{2}+5x-2
$$

Expand the first product:

$$
(x+2)(x+4)=x^{2}+4x+2x+8
$$

$$
x^{2}+6x+8
$$

Expand the second product:

$$
(2x-3)(x-1)=2x\cdot x+2x\cdot(-1)+(-3)\cdot x+(-3)\cdot(-1)
$$

$$
2x^{2}-2x-3x+3
$$

$$
2x^{2}-5x+3
$$

$$
x^{2}+6x+8+2x^{2}-5x+3
$$

$$
3x^{2}+(6-5)x+(8+3)
$$

$$
3x^{2}+x+11
$$

Equate to the right-hand side:

$$
3x^{2}+x+11=3x^{2}+5x-2
$$

$$
x+11=5x-2
$$

Collect $x$-terms:

$$
11+2=5x-x
$$

$$
13=4x\qquad 4x=13
$$

$$
x=\frac{13}{4}\qquad \frac{13}{4}=3.25
$$

Check poles:

$$
3.25\neq 1
$$

$$
3.25\neq -4
$$

Exactly one root survives.

So the statement is True.

## statement C
Every real solution of $|x^{2}-6x+5|=3x-4$ is strictly larger than $3$.

## current C
**C.** → False

An absolute value equals a real expression only when that expression is nonnegative, so require $3x-4\ge 0$, i.e. $x\ge\tfrac{4}{3}$. Split on the sign of $x^{2}-6x+5$.

Case 1 ($x^{2}-6x+5\ge 0$): the equation reads $x^{2}-6x+5=3x-4$, i.e.

$$
x^{2}-9x+9=0
$$

$$
9^{2}-4\cdot 9=81-36=45\qquad x=\frac{9\pm\sqrt{45}}{2}=\frac{9\pm 3\sqrt{5}}{2}
$$

Only $x=\dfrac{9+3\sqrt5}{2}\approx 7.85$ satisfies both $x\ge 5$ (needed for $x^{2}-6x+5\ge0$) and the domain; the other root fails that sign requirement.

Case 2 ($x^{2}-6x+5<0$): the equation reads $-(x^{2}-6x+5)=3x-4$, i.e.

$$
x^{2}-3x+1=0
$$

$$
3^{2}-4\cdot 1=9-4=5\qquad x=\frac{3\pm\sqrt{5}}{2}
$$

Only $x=\dfrac{3+\sqrt5}{2}\approx 2.62$ lies in the required range $1<x<5$ and the domain $x\ge\tfrac{4}{3}$; the other root is below $1$.

The second surviving root is real and domain-legal, yet

$$
2.62<3
$$

so it is not true that every real solution is strictly larger than $3$.

So the statement is False.

## statement D
Every domain-legal real solution of $\log_{2}(x-1)+\log_{2}(x+3)=\log_{2}(3x+5)$ is strictly larger than $4$.

## current D
**D.** → False

Logarithms force a strict domain $x>1$ (and $3x+5>0$, which is automatic once $x>1$). Combine the logs into a single product identity:

$$
(x-1)(x+3)=3x+5
$$

Expand and move terms to one side:

$$
x^{2}-x-8=0
$$

Discriminant and roots:

$$
(-1)^{2}-4\cdot(-8)=1+32=33\qquad x=\frac{1\pm\sqrt{33}}{2}
$$

Only the plus branch is domain-legal:

$$
\frac{1+\sqrt{33}}{2}\approx 3.37
$$

$$
3.37<4
$$

The unique domain-legal solution is therefore not larger than $4$.

So the statement is False.

## statement E
The equation $\sqrt{x+3}+|x-1|=4$ has at least one negative real solution and at least one real solution greater than $2$.

## current E
**E.** → True

Split the absolute value at the kink $x=1$.

For $x\ge 1$: $|x-1|=x-1$, so the equation becomes $\sqrt{x+3}=5-x$, with the extra restriction $x\le 5$. Square:

$$
x+3=(5-x)^{2}
$$

$$
x+3=25-10x+x^{2}
$$

$$
x^{2}-11x+22=0
$$

$$
(-11)^{2}-4\cdot 22=121-88=33\qquad x=\frac{11\pm\sqrt{33}}{2}
$$

Only the minus branch lies in $[1,5]$:

$$
x=\frac{11-\sqrt{33}}{2}
$$

$$
\frac{11-\sqrt{33}}{2}\approx 2.63
$$

$$
2.63>2
$$

For $-3\le x<1$: $|x-1|=1-x$, so the equation becomes $\sqrt{x+3}=3+x$. Square:

$$
x+3=(3+x)^{2}
$$

$$
x+3=9+6x+x^{2}
$$

$$
x^{2}+5x+6=0
$$

$$
(x+2)(x+3)=0
$$

$$
x=-2
$$

$$
x=-3
$$

Both are negative and both satisfy $3+x\ge 0$, so both survive back-substitution. So there is at least one negative solution and at least one solution greater than $2$.

So the statement is True.