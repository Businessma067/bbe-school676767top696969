# DEMO MATH 7.H01

ak=[False, True, False, False, True]

current_lens=[472, 348, 340, 566, 412]

## title
Parametric quadratic family — critical cases

## context
For each real parameter $k$, define
$$
g_k(x)=x^{2}-(2k+1)x+(k^{2}-4).
$$
Decide whether each claim about this family is true or false.

## statement A
For every real $k$, the equation $g_k(x)=0$ has two distinct real roots.

## current A
**A.** → False

Two distinct real roots require a strictly positive discriminant. Expand

$$
\Delta=(2k+1)^{2}-4(k^{2}-4)
$$

First square:

$$
(2k+1)^{2}=4k^{2}+4k+1
$$

Then the second term:

$$
4(k^{2}-4)=4k^{2}-16
$$

Subtract:

$$
\Delta=4k^{2}+4k+1-(4k^{2}-16)=4k^{2}+4k+1-4k^{2}+16=4k+17
$$

At $k=-5$:

$$
\Delta=4(-5)+17=-20+17=-3<0
$$

so $g_{-5}$ has no real roots. The claim that every real $k$ yields two distinct real roots fails.

So the statement is False.

## statement B
The axis of symmetry of $y=g_k(x)$ is $x=k+\tfrac12$ for every $k$.

## current B
**B.** → True

For a monic quadratic $x^{2}-Bx+C$, the axis of symmetry is $x=B/2$. Here $B=2k+1$, so

$$
x=\frac{2k+1}{2}=k+\frac{1}{2}
$$

This identity holds for every real parameter $k$; no discriminant restriction appears. Quick checks: at $k=0$ the axis is $x=\tfrac12$; at $k=2$ it is $x=\tfrac52$, matching $B=5$.

So the statement is True.

## statement C
If $k=2$, then the roots are $x=1$ and $x=5$.

## current C
**C.** → False

Substitute $k=2$ into each coefficient. Linear term:

$$
2k+1=2\cdot 2+1=5
$$

Constant term:

$$
k^{2}-4=2^{2}-4=0
$$

The specialised quadratic is therefore

$$
g_2(x)=x^{2}-5x=x(x-5)
$$

Roots $x=0$ or $x=5$. The claim asserts $1$ and $5$; only one of those matches, so the statement is false.

So the statement is False.

## statement D
There exists a real $k$ for which both roots are equal to $0$.

## current D
**D.** → False

A double root at $0$ would require both $g_k(0)=0$ and $g_k'(0)=0$. Constant term:

$$
g_k(0)=k^{2}-4=0\qquad\Rightarrow\qquad k=\pm 2
$$

Differentiate:

$$
g_k'(x)=2x-(2k+1)\qquad\Rightarrow\qquad g_k'(0)=-(2k+1)=0\qquad\Rightarrow\qquad k=-\frac{1}{2}
$$

Check $k=-\tfrac12$ against $k^{2}-4=0$:

$$
\Bigl(-\frac{1}{2}\Bigr)^{2}-4=\frac{1}{4}-4=-\frac{15}{4}\neq 0
$$

Conversely, at $k=2$: $g_2'(0)=-(4+1)=-5\neq 0$. At $k=-2$: $g_{-2}'(0)=-(-4+1)=3\neq 0$. The two conditions are incompatible, so no such $k$ exists.

So the statement is False.

## statement E
The vertex $y$-coordinate equals $-\dfrac{17}{4}$ when $k=0$.

## current E
**E.** → True

For $k=0$ the quadratic is

$$
g_0(x)=x^{2}-x-4
$$

Axis from letter B: $x=\tfrac12$. Evaluate:

$$
g_0\Bigl(\frac{1}{2}\Bigr)=\Bigl(\frac{1}{2}\Bigr)^{2}-\frac{1}{2}-4=\frac{1}{4}-\frac{1}{2}-4=-\frac{17}{4}
$$

Alternatively via the discriminant shortcut $\Delta=4\cdot 0+17=17$:

$$
-\frac{\Delta}{4}=-\frac{17}{4}
$$

which matches the claimed vertex $y$-coordinate.

So the statement is True.