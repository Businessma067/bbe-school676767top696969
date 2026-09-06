# Chapter 7 — Linear and quadratic functions

A linear function draws a straight line. A quadratic function draws a parabola. On the BBE exam, Chapter 7 asks you to read those graphs from formulas, tables, and stories, and to decide True/False claims about slope, intercepts, vertex, axis, roots, meetings, and rewrites.

This chapter starts from zero. It builds the two families one piece at a time, then shows how they meet, how composition works, how a parameter slides a graph, and how applied stories hide the same algebra. The later examples combine several ideas, because the difficult tasks rarely name the formula you need.

Chapter 4 solves equations. This chapter studies the functions themselves: what the graph looks like, where it turns, where it crosses a line, and what happens when you shift or nest the expressions.

## Learning objectives

- Recognise $f(x)=mx+c$ and read slope, intercepts, and monotonicity from the formula.
- Recognise $g(x)=ax^{2}+bx+c$ with $a\neq 0$ and read opening direction from $a$.
- Move between standard form, vertex form, and factored form.
- Find the axis $x=-b/(2a)$ and the vertex, and connect the axis to Vieta’s sum of roots.
- Use the discriminant to count real roots and meetings with a horizontal line.
- Decide how many times a line meets a parabola, including tangency.
- Read linear and quadratic behaviour from tables of first and second differences.
- Compose a line with a parabola and rewrite one using the other.
- Rebuild a line or a parabola from roots, a vertex, or a few points.
- Translate applied stories (fare, ball toss, revenue, cost) into the same algebra.
- Spot the common traps: confusing roots with the vertex, half-sum mistakes, wrong nesting degrees.

---

## 7.1 Linear functions

### The formula

A **linear function** has the form

$$
f(x)=mx+c,
$$

where $m$ and $c$ are constants. The graph is a straight line.

| Symbol | Name | What it does |
| --- | --- | --- |
| $m$ | Slope (gradient) | Rise over run; how much $f$ changes when $x$ increases by $1$ |
| $c$ | $y$-intercept | The value $f(0)$; where the line crosses the vertical axis |
| $x$ | Input | The horizontal coordinate |

If $m>0$, the line rises as you move to the right. If $m<0$, the line falls. If $m=0$, the graph is a horizontal line at height $c$.

### Intercepts

The **$y$-intercept** is the point $(0,c)$.

The **$x$-intercept** (root of the line) solves $mx+c=0$. When $m\neq 0$,

$$
x=-\frac{c}{m}.
$$

If $m=0$ and $c\neq 0$, there is no $x$-intercept. If $m=0$ and $c=0$, every $x$ is an intercept (the zero function).

**Example 1.** Take $f(x)=-2x+6$.

- Slope $m=-2$: the line falls by $2$ for each unit step to the right.
- $y$-intercept: $(0,6)$.
- $x$-intercept: $-2x+6=0$ gives $x=3$, so the point $(3,0)$.

### Other writings of the same line

The same line can appear as

$$
f(x)=m(x-x_{0})+y_{0}
$$

when it is forced to pass through a known point $(x_{0},y_{0})$. Expanding recovers $mx+c$ with $c=y_{0}-mx_{0}$.

A line written as a single fraction, for example

$$
f(x)=\frac{2x-4}{3}=\frac{2}{3}x-\frac{4}{3},
$$

is still linear. Clear the constant denominator first, then read $m$ and $c$.

### Average rate of change

Between two inputs $x_{1}$ and $x_{2}$,

$$
\frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}}=m.
$$

For a linear function the average rate equals the slope on every interval. That is the table test for a line: successive first differences are constant when the $x$-step is constant.

**Example 2.** A taxi fare is

$$
C(d)=3.5+1.2\,d
$$

euros for distance $d$ kilometres. The fixed fee is $3.5$. Each extra kilometre adds $1.2$. The graph is a rising line. The claim “the fare doubles when the distance doubles” is false in general, because of the nonzero fixed fee.

---

## 7.2 Quadratic functions: standard form and opening

### The formula

A **quadratic function** has the form

$$
g(x)=ax^{2}+bx+c\qquad\text{with }a\neq 0.
$$

The condition $a\neq 0$ is part of the definition. If $a=0$, the expression collapses to a linear (or constant) function, and the parabola theory no longer applies.

The graph is a **parabola**.

| Coefficient | Role |
| --- | --- |
| $a$ | Opening and vertical stretch |
| $b$ | Horizontal placement of the axis (together with $a$) |
| $c$ | $y$-intercept: $g(0)=c$ |

### Opening direction

- If $a>0$, the parabola opens **upwards**. The vertex is a global **minimum** (a trough).
- If $a<0$, the parabola opens **downwards**. The vertex is a global **maximum** (a peak).

Changing the size of $|a|$ stretches or compresses the graph vertically. Replacing $a$ by $-a$ flips the graph through the $x$-axis, but keeps the same axis of symmetry only when the other coefficients are adjusted accordingly. For a fixed $b$ and $c$, flipping the sign of $a$ moves the vertex.

**Example 1.** Compare $g(x)=2x^{2}-8x+5$ and $h(x)=-2x^{2}-8x+5$.

Both have the same $b$ and $c$, but opposite $a$. The first opens up. The second opens down. Their axes are different, because the axis formula uses $a$:

$$
x=-\frac{b}{2a}.
$$

For $g$, the axis is $x=2$. For $h$, the axis is $x=-2$.

### The $y$-intercept

Always $g(0)=c$. Claims that confuse $c$ with the vertex height are common and false in general.

### Far to the right and far to the left

As $x\to+\infty$:

- if $a>0$, then $g(x)\to+\infty$;
- if $a<0$, then $g(x)\to-\infty$.

As $x\to-\infty$, the same leading term $ax^{2}$ dominates, and the signs reverse relative to the right-hand end only in the sense that both ends go the same way: an upward parabola goes to $+\infty$ on both sides, and a downward parabola goes to $-\infty$ on both sides.

That is why a line can never “trap” a parabola forever on both sides. A line grows at most linearly. A quadratic eventually overtakes every line in the direction of its opening.

---

## 7.3 Axis, vertex, and completing the square

### Axis of symmetry

The **axis of symmetry** of $g(x)=ax^{2}+bx+c$ is the vertical line

$$
x=-\frac{b}{2a}.
$$

Every parabola of this form is symmetric about that line. The constant term $c$ never appears in the axis formula, so changing $c$ alone slides the graph up or down without moving the axis.

### Vertex

The **vertex** is the turning point. Its abscissa is the axis value. Its ordinate is the function value there:

$$
h=-\frac{b}{2a},\qquad k=g(h).
$$

The vertex is the point $(h,k)$.

- If $a>0$, then $k$ is the global minimum value of $g$.
- If $a<0$, then $k$ is the global maximum value of $g$.

The vertex always exists over the reals, whether or not the parabola has real roots. A negative discriminant does not remove the vertex.

### Completing the square

Completing the square rewrites the quadratic as

$$
g(x)=a\left(x-h\right)^{2}+k,
$$

which is called **vertex form**. Here $(h,k)$ is the vertex and $a$ is the same leading coefficient as in standard form.

One standard calculation is

$$
\begin{aligned}
g(x)&=ax^{2}+bx+c\\
&=a\left(x^{2}+\frac{b}{a}x\right)+c\\
&=a\left(\left(x+\frac{b}{2a}\right)^{2}-\left(\frac{b}{2a}\right)^{2}\right)+c\\
&=a\left(x+\frac{b}{2a}\right)^{2}+c-\frac{b^{2}}{4a}.
\end{aligned}
$$

So

$$
h=-\frac{b}{2a},\qquad k=c-\frac{b^{2}}{4a}=\frac{4ac-b^{2}}{4a}=-\frac{\Delta}{4a},
$$

where $\Delta=b^{2}-4ac$ is the discriminant.

**Example 1.** Take $g(x)=x^{2}-6x+5$.

$$
g(x)=(x-3)^{2}-9+5=(x-3)^{2}-4.
$$

The vertex is $(3,-4)$. The axis is $x=3$. Because $a=1>0$, the value $-4$ is a minimum.

**Example 2.** Take $g(x)=-2x^{2}+8x-3$.

$$
\begin{aligned}
g(x)&=-2\left(x^{2}-4x\right)-3\\
&=-2\left((x-2)^{2}-4\right)-3\\
&=-2(x-2)^{2}+8-3\\
&=-2(x-2)^{2}+5.
\end{aligned}
$$

The vertex is $(2,5)$. The graph opens down, so $5$ is a maximum.

### Uniqueness of vertex form

Every real quadratic admits a representation $a(x-h)^{2}+k$ with unique $(a,h,k)$. The leading coefficient is unique. The vertex is unique. Replacing $h$ by $-h$ changes the graph unless $h=0$.

### Range

From vertex form:

- if $a>0$, the range is $[k,+\infty)$;
- if $a<0$, the range is $(-\infty,k]$.

A claim that a downward parabola “takes every real value” is false. It never exceeds its peak $k$.

---

## 7.4 Roots, factored form, and Vieta

### Real roots as $x$-intercepts

The real roots of $g$ are the solutions of $g(x)=0$. Geometrically they are the points where the parabola meets the horizontal axis.

### Factored form

When there are two real roots $r$ and $s$ (possibly equal),

$$
g(x)=a(x-r)(x-s).
$$

If $r=s$, this is a double root and the graph touches the axis at one point.

**Example 1.** $g(x)=2(x-1)(x-4)=2x^{2}-10x+8$.

- Roots at $x=1$ and $x=4$.
- Axis at the midpoint $x=\dfrac{1+4}{2}=2.5$.
- Leading coefficient $2>0$, so the graph opens up.
- On the open interval $(1,4)$ the product $(x-1)(x-4)$ is negative, so $g$ is negative between the roots. Outside $[1,4]$, $g$ is positive.

### Vieta’s rules

For $g(x)=ax^{2}+bx+c$ with $a\neq 0$, if the roots (in $\mathbb{C}$, counting multiplicity) are $r$ and $s$, then

$$
r+s=-\frac{b}{a},\qquad rs=\frac{c}{a}.
$$

Over the reals these formulas still hold whenever the roots are real.

### Axis as half the sum of roots

The axis is

$$
x=-\frac{b}{2a}=\frac{r+s}{2}.
$$

Write $S=r+s$. Then the axis is $x=S/2$, not $x=S$. This half-sum fact is one of the most frequent traps in the chapter.

**Example 2.** Suppose $g(x)=ax^{2}+bx+c$ and $S$ is the sum of the roots. The claim “the axis is the line $x=S$” is false. The axis is $x=S/2$. If $S=0$, then $b=0$ and the axis is the $y$-axis.

### Sign information from sum and product

| Condition | Meaning for real roots |
| --- | --- |
| $rs>0$ and $r+s>0$ | Both roots positive (when they are real) |
| $rs>0$ and $r+s<0$ | Both roots negative |
| $rs<0$ | Opposite signs |
| $r+s=0$ | Opposite roots: $s=-r$, and the axis is $x=0$ |

A positive sum alone does not force both roots positive. Roots $-1$ and $3$ sum to $2$ but have opposite signs. You need the product test as well.

### Changing $c$ does not move the axis

Because the axis depends only on $a$ and $b$, a vertical shift that changes $c$ alone leaves the axis fixed. It does change the roots and the product $rs=c/a$.

---

## 7.5 Discriminant and counting roots

### The discriminant

$$
\Delta=b^{2}-4ac.
$$

| $\Delta$ | Real roots | Graph against the $x$-axis |
| --- | --- | --- |
| $\Delta>0$ | Two distinct real roots | Two crossings |
| $\Delta=0$ | One real root (double) | Tangency at the vertex’s abscissa? Not always the vertex height zero, but the touch point is on the axis of symmetry |
| $\Delta<0$ | No real roots | No crossing; the whole graph stays strictly above or strictly below the $x$-axis |

When $\Delta=0$, the unique root is exactly the axis value $x=-b/(2a)$, and the vertex lies on the $x$-axis.

### Vertex exists even when $\Delta<0$

The formula $x=-b/(2a)$ does not use $\Delta$. So “no real roots ⇒ no vertex” is false.

### Opposite signs of $a$ and $c$

If $a$ and $c$ have opposite signs, then $ac<0$, so $-4ac>0$, hence $\Delta=b^{2}-4ac>0$. There are always two distinct real roots in that case. One root is positive and one is negative, because the product $c/a$ is negative.

### Horizontal probe lines

Asking how many times $g(x)=k$ has real solutions is the same as studying

$$
ax^{2}+bx+(c-k)=0
$$

with discriminant

$$
\Delta(k)=b^{2}-4a(c-k).
$$

Geometrically this is meetings between the parabola and the horizontal line $y=k$.

- Two meetings when the level $k$ sits strictly on the side of the vertex that the opening allows.
- One meeting (tangency) when $k$ equals the vertex height.
- No meeting when $k$ is beyond the vertex in the wrong direction.

**Example 1.** Let $g(x)=(x-2)^{2}+(s-4)$. This is a vertical-shift family.

- Axis $x=2$ for every $s$.
- Vertex height $s-4$.
- Two real roots when $s-4<0$, that is $s<4$.
- Double root when $s=4$.
- No real root when $s>4$.

---

## 7.6 Meetings of a line and a parabola

### The equation of meetings

Let $f(x)=mx+d$ be linear and $g(x)=ax^{2}+bx+c$ quadratic. Their graphs meet where

$$
g(x)=f(x)\iff ax^{2}+(b-m)x+(c-d)=0.
$$

This is again a quadratic equation (unless $a=0$, which it is not). The discriminant of that difference decides the number of meetings.

| Discriminant of $g-f$ | Geometric meaning |
| --- | --- |
| Positive | Two distinct meeting points |
| Zero | Exactly one meeting: the line is tangent to the parabola |
| Negative | No meeting |

A line and a parabola never meet more than twice. That structural bound does not depend on the particular coefficients.

### Tangency

Tangency means the graphs touch at one point and share the same slope there. For Chapter 7 tasks it is enough to set the discriminant of $g-f$ to zero. That produces a condition on a parameter (often a slope or a vertical shift).

**Example 1.** Let $g(x)=x^{2}$ and $f_{m}(x)=mx+1$. Meetings solve

$$
x^{2}-mx-1=0,\qquad \Delta=m^{2}+4.
$$

Here $\Delta>0$ for every real $m$, so every such line meets the parabola twice. There is no tangency in this family, because the constant term keeps the line from settling into a tangent position with this intercept.

**Example 2.** Let $g(x)=x^{2}$ and $f_{t}(x)=2x+t$. Then

$$
x^{2}-2x-t=0,\qquad \Delta=4+4t=4(1+t).
$$

- Two meetings when $t>-1$.
- Tangency when $t=-1$.
- No meeting when $t<-1$.

### Sum and product of meeting abscissas

If the meetings occur at $x_{1}$ and $x_{2}$, Vieta on $g-f=0$ gives their sum and product. Claims about “the product of meeting abscissas is negative” are product-of-roots claims for that difference equation.

### Vertex relative to a line

A frequent claim asks whether the vertex lies on a given line, above it, or below it. Compute the vertex $(h,k)$, then compare $k$ with $f(h)$. Do not confuse “vertex on the axis of symmetry” with “vertex on the given line”.

### Secants and chords

A chord joining the two roots of a parabola is a horizontal segment on the $x$-axis only when both roots are real and you join $(r,0)$ to $(s,0)$. A dashed line in a figure may look similar to that chord but sit at a different height. Recover both formulas before comparing.

---

## 7.7 Tables: first and second differences

### Constant first differences

Suppose inputs are equally spaced: $x,x+h,x+2h,\ldots$. Look at successive output gaps

$$
\Delta y_{i}=y_{i+1}-y_{i}.
$$

If the first differences are constant, the underlying rule is linear (affine). The common difference equals $m\cdot h$, so

$$
m=\frac{\text{common first difference}}{h}.
$$

### Constant second differences

Second differences are differences of first differences. If second differences are constant and nonzero, the underlying rule is quadratic.

For a quadratic $g(x)=ax^{2}+bx+c$ sampled at step $h$,

$$
\text{common second difference}=2ah^{2}.
$$

So

$$
a=\frac{\text{common second difference}}{2h^{2}}.
$$

**Example 1.** Heights every second:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $h(t)$ | $0$ | $15$ | $20$ | $15$ | $0$ |

First differences: $15,5,-5,-15$. Second differences: $-10,-10,-10$. The second differences are constant, so a quadratic fits. With $h=1$,

$$
2a=-10\implies a=-5.
$$

The pattern matches a ball toss that returns to ground at $t=0$ and $t=4$, with peak at the midpoint $t=2$.

### False constant-gap claims

Exam tables sometimes almost look quadratic. Check the second gaps carefully. One wrong gap kills the “perfect quadratic” claim. Also, a constant first difference cannot come from a genuine parabola: a square cannot fit an arithmetic sequence of outputs at equal steps.

### Choosing between models

Given a short table, compare:

1. Are first differences constant? Prefer a line.
2. Are second differences constant? Prefer a parabola.
3. Neither? Neither pure model fits exactly.

Do not force a parabola onto arithmetic data.

---

## 7.8 Composition, rewriting, and nesting

### Degrees multiply under composition

If $f$ is linear of degree $1$ and $g$ is quadratic of degree $2$, then

$$
\deg(g\circ f)=2\cdot 1=2,\qquad \deg(f\circ g)=1\cdot 2=2.
$$

Both nestings are quadratic polynomials. The trap is to add degrees and claim an $x^{3}$ term. Adding $1+2=3$ is wrong for composition.

**Example 1.** Let $f(x)=x+1$ and $g(x)=x^{2}$.

$$
g(f(x))=(x+1)^{2}=x^{2}+2x+1,
$$

$$
f(g(x))=x^{2}+1.
$$

Both have highest power $x^{2}$. They are not the same function. Composition does not commute.

### Writing a parabola using a line

If $f$ is any non-constant linear function, the set $\{1,f,f^{2}\}$ spans all polynomials of degree at most $2$. So every quadratic $g$ can be written

$$
g(x)=A\,f(x)^{2}+B\,f(x)+C
$$

for unique real $A,B,C$. Matching leading coefficients gives

$$
A=\frac{a_{g}}{a_{f}^{2}}.
$$

A constant “line” cannot produce an $x^{2}$ term, so the rewrite fails if $f$ is constant.

### Linear substitution and roots

If $g(x)=A(f(x)-r)(f(x)-s)$, the roots of $g$ solve $f(x)=r$ or $f(x)=s$. They are not automatically the same as the roots of $f$. Reading roots “through” a linear substitution means solving those linear equations.

### Shifts and scalings

- Horizontal shift: $g(x-t)$ moves the graph by $t$ to the right and moves the axis with it.
- Vertical shift: $g(x)+s$ moves the graph up by $s$ and leaves the axis fixed.
- Vertical scale: $A g(x)$ multiplies heights by $A$ and preserves roots when $A\neq 0$.
- Evenness: if $g(-x)=g(x)$ for all $x$, the graph is symmetric about the $y$-axis, which forces $b=0$ in standard form.

A translation alone never flattens a parabola into a line. Degree is preserved by shifts.

---

## 7.9 Parametric families

### What a parameter does

A parameter $m$, $t$, or $s$ often slides a line’s slope, slides a line vertically, or slides a parabola up, down, or sideways. Each claim about “for which values there are two meetings / tangency / none” is a discriminant condition in that parameter.

### Typical patterns

1. **Sliding slope family.** $f_{m}(x)=mx+d$ against a fixed parabola. Set $\Delta(m)=0$ for tangency.
2. **Vertical shift of a line.** $f_{t}(x)=mx+t$. Again $\Delta(t)=0$ marks the tangent height.
3. **Vertical shift of a parabola.** $g_{s}(x)=a(x-h)^{2}+(s-k_{0})$. Root count flips when the vertex crosses the $x$-axis.
4. **Horizontal slide.** $g_{t}(x)=a(x-t)^{2}+k$. The axis moves with $t$. Meetings with a fixed line change with $t$.

**Example 1.** Shared intercept with a sliding second meeting: a line through a fixed point on the parabola will generally meet the parabola again somewhere else. The second meeting can be solved from the difference equation after cancelling the known root $(x-x_{0})$.

### Opening constraints

Sometimes a parameter multiplies the leading coefficient, for example $g_{a}(x)=ax^{2}+bx+c$. Then “opens upwards” means $a>0$, and meetings with a fixed line become conditions on $a$ through a discriminant inequality.

---

## 7.10 Rebuilding and applied stories

### Rebuild a line

A non-vertical line is fixed by:

- slope and one point, or
- two distinct points, or
- slope and intercept.

Two points determine

$$
m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}},\qquad f(x)=y_{1}+m(x-x_{1}).
$$

### Rebuild a parabola

Common sufficient data:

| Data | Typical reconstruction |
| --- | --- |
| Two roots $r,s$ and leading $a$ | $g(x)=a(x-r)(x-s)$ |
| Vertex $(h,k)$ and one other point | $g(x)=a(x-h)^{2}+k$, solve for $a$ |
| Three non-collinear points | Solve the $3\times 3$ system for $a,b,c$ |
| Roots and the value at one extra point | Factored form with unknown $a$, then calibrate |

**Example 1.** Vertex $(2,5)$ and point $(0,1)$:

$$
g(x)=a(x-2)^{2}+5,\qquad g(0)=4a+5=1\implies a=-1.
$$

So $g(x)=-(x-2)^{2}+5$.

**Example 2.** Roots at $1$ and $5$, monic parabola:

$$
g(x)=(x-1)(x-5)=x^{2}-6x+5.
$$

The axis is $x=3$. The vertex height is $g(3)=-4$. A claim that the peak is $5$ because “one of the roots is $5$” is nonsense.

### Applied stories use the same algebra

| Story | Hidden function | Typical exam asks |
| --- | --- | --- |
| Taxi / draining tank at steady rate | Linear | Slope, intercept, doubling trap |
| Ball toss / arch | Downward parabola | Peak as midpoint of ground times |
| Ticket revenue | Often quadratic in price | Break-even roots, vertex revenue |
| Cost trough | Upward parabola | Minimum cost, meetings with a budget line |
| Profit | Revenue minus cost | Profit peak need not equal revenue peak |

For a ball tossed straight up with ground times $t=r$ and $t=s$,

$$
h(t)=a(t-r)(t-s)\qquad(a<0),
$$

and the greatest height occurs at the midpoint $(r+s)/2$. After the peak, height falls. Claims that “height keeps rising after the peak” are false.

Revenue peak versus profit peak: if cost also depends on the same variable, the two vertex locations generally differ. Do not transfer the revenue vertex onto the profit graph without recalculating.

---

## 7.11 Reading graphs without printed formulas

Many exam tasks show a solid parabola and a dashed line with ticks but no closed form. The working order is:

1. Recover the parabola from marked roots, vertex, or a few lattice points.
2. Recover the line from intercepts and slope ticks.
3. Only then judge claims about meetings, gaps, chords, and midpoints.

**Example 1.** A downward unit square peaking at $(0,4)$ and meeting the axis at $x=\pm 2$ forces

$$
g(x)=4-x^{2}.
$$

A dashed line through $(0,2)$ with slope $-1$ forces

$$
f(x)=-x+2.
$$

Meetings solve $4-x^{2}=-x+2$, that is $x^{2}-x-2=0$, so $(x-2)(x+1)=0$. Meetings at $x=-1$ and $x=2$. The product of meeting abscissas is $-2<0$. At the turning abscissa $x=0$, the line sits at height $2$ while the curve sits at $4$, so the line is two units below the curve, not above.

A chord joining the axis crossings $(\pm 2,0)$ lies on the $x$-axis. It does not coincide with the dashed line $y=-x+2$.

---

## 7.12 Common errors

### Error 1: confusing roots with the vertex

Roots are $x$-intercepts. The vertex is the turning point. They coincide only in special cases (for example a double root on the axis). “The vertex is at the root $x=3$” is usually false when there are two distinct roots.

### Error 2: writing the axis as $x=S$ instead of $x=S/2$

If $S$ is the sum of the roots, the axis is the midpoint $S/2$.

### Error 3: “no real roots ⇒ no vertex”

The vertex formula never needs $\Delta\geq 0$.

### Error 4: “positive sum of roots ⇒ both roots positive”

Opposite signs can still produce a positive sum. Check the product.

### Error 5: adding degrees under composition

$\deg(g\circ f)=\deg(g)\cdot\deg(f)$. For a line and a parabola both nestings have degree $2$, not $3$.

### Error 6: assuming composition commutes

$g(f(x))$ and $f(g(x))$ can share degree and still be different functions.

### Error 7: thinking a vertical shift moves the axis

Changing $c$ or adding a constant slides the graph vertically. The axis stays put.

### Error 8: mistaking a secant level for the $x$-axis

A horizontal dashed line at height $k\neq 0$ is not the axis. Meetings with that line are not the roots of $g$.

### Error 9: forcing a parabola onto arithmetic table data

Constant first differences mean linear. Constant second differences mean quadratic.

### Error 10: “the line doubles when $x$ doubles”

Only true for lines through the origin. A nonzero intercept breaks pure proportionality.

### Error 11: transferring a revenue peak onto a profit peak

Different objective functions have different vertices.

### Error 12: claiming a line can meet a parabola three times

The difference $g-f$ has degree at most $2$.

### Error 13: wrong completed-square sign

From $x^{2}+bx$, the completed square is $\left(x+\dfrac{b}{2}\right)^{2}-\left(\dfrac{b}{2}\right)^{2}$. Dropping the minus sign ruins the vertex height.

### Error 14: “changing $c$ never changes the roots”

It usually does. It does not move the axis, but roots depend on $c$.

### Error 15: reading average rate as if it were the instantaneous slope of a parabola

On a parabola the average rate over $[x_{1},x_{2}]$ equals the slope of the chord, which equals the derivative at the midpoint, not at an endpoint. For Chapter 7, compare average rates carefully and do not treat them as the slope of a linear model unless the function is linear.

---

## 7.13 Difficult exam-style tasks

The tasks below match the style of Chapter 7.5: several True/False claims, often with no hint which formula to open first. Work each claim from the recovered algebra, not from a slogan.

### Exam task 1 — Axis, Vieta, and the half-sum trap

Let $g(x)=ax^{2}+bx+c$ with $a\neq 0$, and write $S$ for the sum of the roots of $g$ in $\mathbb{C}$. Let $\ell$ be the axis of symmetry of the graph of $g$. No concrete coefficients are given.

**Claims.**

1. The vertical line $\ell$ is always the same as the vertical line $x=S$.
2. In all cases, $\ell$ is the line $x=S/2$.
3. If $S=0$, then the axis of $g$ is the $y$-axis.
4. If $a>0$ and $S>0$, then both real roots (when they exist) must be positive.
5. Changing the constant term $c$ never moves the axis $\ell$.

**Solution.**

By Vieta, $S=-b/a$. The axis is

$$
x=-\frac{b}{2a}=\frac{S}{2}.
$$

So claim 1 is false and claim 2 is true. If $S=0$, then $b=0$ and the axis is $x=0$, so claim 3 is true. Claim 4 is false: roots $-1$ and $3$ give $S=2>0$ with opposite signs. Claim 5 is true, because the axis depends only on $a$ and $b$.

**Answers.** False, True, True, False, True.

### Exam task 2 — Nested functions without numbers

Let $f$ be a non-constant linear function and $g$ a quadratic function. No further data are given.

**Claims.**

1. The nested function $g(f(x))$ always has an $x^{3}$ term, because one adds $1$ and $2$.
2. The nested function $f(g(x))$ is always a parabola (highest power $x^{2}$).
3. The nested functions $g(f(x))$ and $f(g(x))$ always have the same highest power of $x$.
4. The polynomials $g\circ f$ and $f\circ g$ are always identical as functions.
5. If one replaces $f$ by $f^{2}$ (still using the same $g$), then $g(f(x)^{2})$ has highest power $x^{4}$.

**Solution.**

Degrees multiply: $\deg(g\circ f)=2$ and $\deg(f\circ g)=2$. Claim 1 is false. Claims 2 and 3 are true. Composition does not commute, so claim 4 is false. Finally $\deg(f^{2})=2$, so $\deg(g\circ f^{2})=4$, and claim 5 is true.

**Answers.** False, True, True, False, True.

### Exam task 3 — Vertical shift family and root count

For each real $s$ let

$$
g_{s}(x)=(x-2)^{2}+(s-4).
$$

**Claims.**

1. For $s=3$ the vertex sits one unit below the axis, so there are two distinct real roots whose midpoint is $x=2$.
2. For $s=4$ the vertex lies on the axis, so there is a double root at $x=2$ and no other.
3. For $s=5$ the vertex sits one unit above the axis, so $g_{s}$ has no real root.
4. The axis of symmetry of $g_{s}$ is $x=2$ for every $s$.
5. The vertex height of $g_{s}$ equals $s-4$, so the graph sits below the axis precisely when $s<4$.

**Solution.**

Expand or read vertex form directly: axis $x=2$, vertex height $s-4$. The equation $g_{s}(x)=0$ becomes $(x-2)^{2}=4-s$.

- $s=3$: right-hand side $1>0$, two roots, midpoint $2$.
- $s=4$: right-hand side $0$, double root at $2$.
- $s=5$: right-hand side $-1<0$, no real root.

Vertical shift never moves the axis. With $a>0$, the graph is below the $x$-axis between its roots precisely when the vertex is below the axis, that is when $s-4<0$. All five claims are true.

**Answers.** True, True, True, True, True.

### Exam task 4 — Meetings, vertex, and a rewrite in $f$

Let $f(x)=x+1$ and $g(x)=x^{2}-4x+1$.

**Claims.**

1. The sum of the meeting abscissas of the two graphs equals $5$.
2. The axis of $g$ is $x=2$, which is half the Vieta sum of the roots of $g$.
3. The vertex of $g$ lies $3$ units below the horizontal axis.
4. The product of the roots of $g$ equals $1$, matching $g(0)$.
5. $g(x)=f(x)^{2}-6\,f(x)+6$.

**Solution.**

Meetings: $x^{2}-4x+1=x+1$, so $x^{2}-5x=0$, hence $x(x-5)=0$. Meeting abscissas $0$ and $5$, sum $5$. Claim 1 is true.

For $g$ itself, $S=4$, axis $x=2=S/2$. Claim 2 is true.

Vertex height:

$$
g(2)=4-8+1=-3,
$$

so the vertex is $(2,-3)$, three units below the axis. Claim 3 is true.

Product of roots $c/a=1$, and $g(0)=1$. Claim 4 is true.

Expand the proposed rewrite:

$$
(x+1)^{2}-6(x+1)+6=x^{2}+2x+1-6x-6+6=x^{2}-4x+1=g(x).
$$

Claim 5 is true.

**Answers.** True, True, True, True, True.

### Exam task 5 — Ball toss from a figure

A ball is tossed straight up. Height $h$ (metres) against time $t$ (seconds) is a downward parabola. The horizontal axis is ground level. The visible ground times are $t=0$ and $t=6$, and the marked peak is at height $9$.

**Claims.**

1. The time of greatest height is the midpoint of the two visible ground times.
2. The greatest height occurs at $t=2$, which would be the midpoint of the two visible ground times.
3. At $t=1$ the height is greater than at $t=5$.
4. After the peak, height keeps rising.
5. The greatest height on the figure is $8$ metres, matching the height at $t=4$.

**Solution.**

Recover

$$
h(t)=t(6-t)=6t-t^{2}=9-(t-3)^{2}.
$$

The peak is at the midpoint $t=3$, height $9$. Claim 1 is true. Claim 2 is false (it names $t=2$). By symmetry about $t=3$, heights at $t=1$ and $t=5$ are equal, both equal to $5$, so claim 3 is false. After the peak the completed square decreases, so claim 4 is false. The greatest height is $9$, not $8$, so claim 5 is false.

**Answers.** True, False, False, False, False.

### Exam task 6 — Sliding slope family and tangency

Let $g(x)=x^{2}-2x+2$ and $f_{m}(x)=mx$. Study meetings as $m$ varies.

**Claims.**

1. Meetings solve $x^{2}-(2+m)x+2=0$.
2. There is a real slope $m$ for which the line is tangent to the parabola.
3. Tangency occurs exactly when the discriminant $(2+m)^{2}-8=0$.
4. One tangent slope is $m=-2+2\sqrt{2}$.
5. For every real $m$ the two graphs meet at least once.

**Solution.**

Set $x^{2}-2x+2=mx$, so $x^{2}-(2+m)x+2=0$. Claim 1 is true (sign carefully: $x^{2}-2x-mx+2=0$).

Discriminant:

$$
\Delta(m)=(2+m)^{2}-8.
$$

Tangency when $\Delta=0$, so claim 3 is true. Solving,

$$
2+m=\pm\sqrt{8}=\pm 2\sqrt{2}\implies m=-2\pm 2\sqrt{2}.
$$

So claim 2 is true and claim 4 is true. Claim 5 is false: when $|2+m|<\sqrt{8}$, one has $\Delta<0$ and no meeting.

**Answers.** True, True, True, True, False.

### Exam task 7 — Rebuild from vertex and a point, then probe

A parabola has vertex $(1,-2)$ and passes through $(3,2)$. A horizontal line sits at height $0$.

**Claims.**

1. The parabola has equation $g(x)=(x-1)^{2}-2$.
2. After calibrating with $(3,2)$, one gets $g(x)=2(x-1)^{2}-2$.
3. The axis is $x=1$ for either of the two displayed candidates above.
4. The calibrated parabola meets $y=0$ at two real points.
5. Because the vertex lies below the line $y=0$ and the parabola opens up, there are two meetings with that line.

**Solution.**

Vertex form starts as $g(x)=a(x-1)^{2}-2$. Calibrate with $(3,2)$:

$$
2=a(3-1)^{2}-2=4a-2\implies 4a=4\implies a=1.
$$

So

$$
g(x)=(x-1)^{2}-2.
$$

Claim 1 matches this calibrated equation, so it is true. Claim 2 uses leading coefficient $2$, which fails at $(3,2)$, so it is false. The axis is $x=1$ in either displayed candidate’s vertex form, so claim 3 is true. Solving $(x-1)^{2}=2$ gives two real roots, so claim 4 is true. The vertex sits below $y=0$ and $a>0$, so the upward parabola crosses that horizontal line twice, and claim 5 is true.

**Answers.** True, False, True, True, True.

### Exam task 8 — Table versus two candidate formulas

Outputs at $x=0,1,2,3$:

| $x$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- |
| $y$ | $2$ | $3$ | $6$ | $11$ |

Candidate A: $y=x^{2}+2$. Candidate B: $y=2x+2$.

**Claims.**

1. First differences are $1,3,5$, so the rule is not linear.
2. Second differences are constant and equal to $2$, so a quadratic with $a=1$ fits when the step is $1$.
3. Candidate A matches every table value.
4. Candidate B matches the first two values, therefore matches the whole table.
5. The unique monic quadratic through the four points is $x^{2}+2$.

**Solution.**

First differences $1,3,5$ are not constant, so not linear: claim 1 true. Second differences $2,2$ are constant: with step $1$, $2a=2$ so $a=1$, claim 2 true. Candidate A gives $2,3,6,11$ and matches the whole table, so claim 3 is true. Candidate B gives $2,4,6,8$. It already fails at $x=1$ ($4\neq 3$), so matching only a prefix of the table is not enough and claim 4 is false. Claim 5 is true: $x^{2}+2$ hits all four points, and a monic quadratic is already fixed by three consistent non-collinear conditions.

**Answers.** True, True, True, False, True.

---

## 7.14 Summary reference

| Question | What to do |
| --- | --- |
| Read a line $mx+c$ | Slope $m$, $y$-intercept $c$, $x$-intercept $-c/m$ if $m\neq 0$ |
| Opening of $ax^{2}+bx+c$ | Up if $a>0$, down if $a<0$ |
| Axis of a parabola | $x=-b/(2a)$ |
| Vertex | $(h,g(h))$ with $h=-b/(2a)$; or read $(h,k)$ from vertex form |
| Complete the square | Reach $a(x-h)^{2}+k$ |
| Real roots | Solve $g(x)=0$; use $\Delta=b^{2}-4ac$ to count them |
| Vieta | Sum $-b/a$, product $c/a$; axis $=(\text{sum})/2$ |
| Line meets parabola | Solve $g(x)=f(x)$; discriminant of $g-f$ counts meetings |
| Tangency | Discriminant of $g-f$ equals zero |
| Table: linear? | Constant first differences |
| Table: quadratic? | Constant second differences; $2ah^{2}=$ that gap |
| Composition degree | Multiply degrees; do not add them |
| Rewrite $g$ through line $f$ | $g=Af^{2}+Bf+C$ when $\deg f=1$ |
| Rebuild from vertex and a point | Start from $a(x-h)^{2}+k$, solve for $a$ |
| Ball toss peak | Midpoint of the two ground times |
| Parameter root-count | Track vertex height or $\Delta(\text{parameter})$ |

The central formulas are

$$
f(x)=mx+c,
$$

$$
g(x)=ax^{2}+bx+c\qquad(a\neq 0),
$$

$$
x_{\text{axis}}=-\frac{b}{2a},
$$

$$
g(x)=a\left(x+\frac{b}{2a}\right)^{2}-\frac{\Delta}{4a},
$$

$$
\Delta=b^{2}-4ac,
$$

$$
r+s=-\frac{b}{a},\qquad rs=\frac{c}{a},
$$

$$
g(x)-f(x)=0\quad\text{for meetings}.
$$

**Working order.** Name whether the object is a line, a parabola, a difference, a table, or a story. Recover the formula (or the discriminant condition) before judging a claim. For graphs without printed formulas, rebuild from ticks first. For nested expressions, multiply degrees. For Vieta claims, write sum and product explicitly and remember the axis is the half-sum. Keep parameter cases separate: two meetings, tangency, or none.

**Self-check.** Can you read slope and both intercepts from $f(x)=mx+c$? Why does $a\neq 0$ matter for a quadratic? How do you get the axis from coefficients, and why is it $S/2$ rather than $S$? Why does a parabola still have a vertex when $\Delta<0$? How many times can a line meet a parabola? What do constant first and second differences tell you in a table? Why is $g(f(x))$ of degree $2$, not $3$, when $f$ is linear and $g$ is quadratic? How do you rebuild a parabola from a vertex and one extra point? In a ball-toss figure, where is the peak relative to the ground times? And why can a revenue peak and a profit peak sit at different inputs?
