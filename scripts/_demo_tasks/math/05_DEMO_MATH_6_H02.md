# DEMO MATH 6.H02

ak=[True, True, False, True, False]

current_lens=[894, 512, 557, 624, 490]

## title
Hard mixed inequalities — varied interval claims

## context
Decide whether each claim is true or false. All five letters are inequalities, but the claims are worded differently on purpose: absence of counterexamples, existence inside an open interval, existence on a closed interval, containment of a segment, and nonempty intersection.

## statement A
No point of the interval $[1,4]$ violates $|x^{2}-5x+4|+|2x-3|\le x+6$.

## current A
**A.** → True

The claim is a universal "no counterexample" statement on the closed interval $[1,4]$. Critical points of the absolute expressions are $x=1$, $x=4$ and $x=\tfrac{3}{2}$.

On $[1,\tfrac{3}{2}]$: $x^{2}-5x+4\le 0$ and $2x-3\le 0$, so the inequality reads

$$
-(x^{2}-5x+4)+(3-2x)\le x+6
$$

Expand and rearrange:

$$
-x^{2}+3x-1\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-2x+7
$$

Discriminant of $x^{2}-2x+7$:

$$
(-2)^{2}-4\cdot 7=4-28=-24<0
$$

so the right side is always positive; the inequality holds identically on this piece.

On $[\tfrac{3}{2},4]$: $x^{2}-5x+4\le 0$ and $2x-3\ge 0$, so

$$
-(x^{2}-5x+4)+(2x-3)\le x+6
$$

$$
-x^{2}+7x-7\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-6x+13
$$

Discriminant of $x^{2}-6x+13$:

$$
(-6)^{2}-4\cdot 13=36-52=-16<0
$$

so this piece likewise holds identically. Hence no point of $[1,4]$ is a counterexample.

So the statement is True.

## statement B
The inequality $\sqrt{2x+5}+|x-2|\le 4$ admits at least one solution in the open interval $(1,2)$.

## current B
**B.** → True

The claim only asks for existence inside the open interval $(1,2)$. Domain of the radical requires $2x+5\ge 0$, i.e. $x\ge -\tfrac{5}{2}$, which already contains $(1,2)$. Pick the convenient interior test point $x=\tfrac{3}{2}$:

$$
\sqrt{2\cdot\frac{3}{2}+5}+\left|\frac{3}{2}-2\right|=\sqrt{8}+\frac{1}{2}=2\sqrt{2}+\frac{1}{2}
$$

With $\sqrt{2}\approx 1.414$, one has $2\sqrt{2}+\tfrac12\approx 3.328\le 4$. So at least one point of $(1,2)$ satisfies the inequality.

So the statement is True.

## statement C
There exists some $x\in[0,1]$ for which $\dfrac{x^{2}-5x+6}{x^{2}-x-2}\ge 1$.

## current C
**C.** → False

Ask whether any point of the closed interval $[0,1]$ can satisfy the rational inequality. Poles are $x=-1$ and $x=2$. Away from the poles,

$$
\frac{x^{2}-5x+6}{x^{2}-x-2}-1=\frac{(x-2)(x-3)-(x-2)(x+1)}{(x-2)(x+1)}
$$

Factor the numerator:

$$
\frac{-4(x-2)}{(x-2)(x+1)}
$$

Cancel the shared factor:

$$
\frac{-4}{x+1}
$$

so the inequality reduces to $x<-1$. The interval $[0,1]$ lies entirely outside that half-line. Check directly at $x=0$:

$$
\frac{6}{-2}=-3
$$

$$
-3\ngeq 1
$$

No point of $[0,1]$ works.

So the statement is False.

## statement D
The solution set of $\dfrac{|x|}{x+3}+\sqrt{x+1}\le 2$ contains every point of $[0,1]$.

## current D
**D.** → True

The claim asks for containment of the whole segment $[0,1]$ in the solution set. On $[0,1]$ one has $x\ge 0$, so $|x|=x$, and both $x+3>0$ and $x+1\ge 0$. The inequality reads

$$
\frac{x}{x+3}+\sqrt{x+1}\le 2
$$

Each summand is increasing on $[0,1]$, so the left-hand side is maximized at the right endpoint $x=1$:

$$
\frac{1}{4}=0.25
$$

$$
\sqrt{2}\approx 1.414
$$

$$
0.25+1.414=1.664
$$

$$
1.664\le 2
$$

At the left endpoint $x=0$:

$$
0+\sqrt{1}=1
$$

$$
1\le 2
$$

Because the maximum on the segment is already $\le 2$, every point of $[0,1]$ belongs to the solution set.

So the statement is True.

## statement E
The inequality $\dfrac{|2x-5|}{|x+1|}+|x-2|\le 4$ has nonempty intersection with the interval $[-4,-2]$.

## current E
**E.** → False

The claim asks whether the solution set meets $[-4,-2]$. The pole $x=-1$ does not meet that interval, so every point of $[-4,-2]$ is domain-legal. Test the interior point $x=-3$:

$$
\frac{|2(-3)-5|}{|-3+1|}+|-3-2|=\frac{|-11|}{2}+5=\frac{11}{2}+5=10.5
$$

$$
10.5\le 4
$$

is false. The same failure pattern persists throughout $[-4,-2]$ (the expression stays larger than $4$ on that segment). The intersection with $[-4,-2]$ is therefore empty.

So the statement is False.