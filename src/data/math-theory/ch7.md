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
- Read linear and quadratic behaviour from tables by checking first and second differences.
- Expand a nested rule such as $g(f(x))$ and see that the order of nesting matters.
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

Many Chapter 7 tasks give a table and no formula. Your job is to decide whether the hidden rule is a line or a parabola, then rebuild what you need (slope, leading coefficient, axis, vertex, next value).

Almost every table in the course uses equally spaced inputs with step $1$ (for example $n=0,1,2,3,\ldots$ or $p=1,2,3,\ldots$). Work with that case first.

### First differences

Write the outputs in a row. Under each pair of neighbours, write the gap

$$
\text{next output}-\text{current output}.
$$

Those gaps are the **first differences**.

**Example 1 (line).**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $y$ | $-1$ | $2$ | $5$ | $8$ | $11$ |

First differences: $3,3,3,3$.

The first differences are constant. So the rule is linear. With step $1$, that common gap is the slope:

$$
m=3.
$$

Using the first point,

$$
y=3x-1.
$$

You can now extend the table by keeping the same gap: $y(5)=11+3=14$.

### Second differences

If the first differences are not constant, form gaps of those gaps. Those are the **second differences**.

**Example 2 (parabola).**

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- | --- |
| $s_n$ | $3$ | $0$ | $-1$ | $0$ | $3$ | $8$ |

First differences: $-3,-1,1,3,5$.

Second differences: $2,2,2,2$.

The second differences are constant and nonzero. So the rule is quadratic. With step $1$,

$$
\text{common second difference}=2a.
$$

Here $2a=2$, so $a=1$. Matching the first two points gives

$$
s_n=n^{2}-4n+3=(n-1)(n-3).
$$

From that rebuilt formula you can read everything the claims ask for:

- roots at $n=1$ and $n=3$;
- axis at the midpoint $n=2$;
- vertex height $s_2=-1$;
- the next value $s_6=6^{2}-4\cdot 6+3=15$, not $12$.

### How to decide on an exam table

1. Compute first differences.
2. If they are constant, use a line. Slope equals that common gap when the step is $1$.
3. If they are not constant, compute second differences.
4. If second differences are constant, use a parabola. Leading coefficient satisfies $2a=$ that common second gap when the step is $1$.
5. Rebuild only as far as the claim needs: sometimes $a$ alone is enough, sometimes you also need roots, axis, or one more table value.

### Traps that appear in the course

- A claim may say a line through the first and last points also hits a middle point. Check that middle value directly. In Example 2, the line through $(0,3)$ and $(5,8)$ has slope $1$, so at $n=2$ it predicts $5$, but the table has $-1$. The claim is false.
- A claim may extend the pattern wrongly. Keep adding the same second difference to the first differences, then add that new first difference to the last output. Do not invent a new gap.
- Constant first differences mean a line. Do not force a parabola onto that table.

**Example 3 (revenue table).**

| $p$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- |
| $R$ | $7$ | $12$ | $15$ | $16$ | $15$ |

First differences: $5,3,1,-1$. Second differences: $-2,-2,-2$. So $2a=-2$ and $a=-1$. Matching $R(1)=7$ recovers

$$
R(p)=p(8-p)=-p^{2}+8p.
$$

The peak is at the midpoint $p=4$ of the roots $0$ and $8$. Revenue does not increase at every listed step: from $4$ to $5$ it falls from $16$ to $15$.

---

## 7.8 Nesting a line and a parabola

Course tasks often give a line $f$ and a parabola $g$, then ask about $g(f(x))$ or $f(g(x))$. You do not need abstract degree theory. Expand the expression and read the result.

### What nesting means

$g(f(x))$ means: first compute the line value, then feed that number into the parabola.

$f(g(x))$ means: first compute the parabola value, then feed that number into the line.

### Expand both orders

**Example 1.** Let $f(x)=x+1$ and $g(x)=x^{2}$.

$$
g(f(x))=(x+1)^{2}=x^{2}+2x+1,
$$

$$
f(g(x))=x^{2}+1.
$$

Both results have highest power $x^{2}$. Nesting a line with a parabola does not create an $x^{3}$ term. The false claim “$1+2=3$, so there is an $x^{3}$ term” is a standard trap.

The two nestings are different functions. A quick check:

$$
g(f(1))=4,\qquad f(g(1))=2.
$$

So claims that “the two nested rules are identical” or “they have the same vertex” are false here.

From the expansions you can also read geometry:

- $g(f(x))=(x+1)^{2}$ is a perfect square, so its vertex lies on the horizontal axis;
- $f(g(x))=x^{2}+1$ has the same axis $x=0$ as $g$, and vertex $(0,1)$.

### Checking a rewrite claim

Some tasks claim that the parabola can be written using the line, for example

$$
g(x)=f(x)^{2}-6\,f(x)+6.
$$

The method is simple: replace $f(x)$ by its formula and expand. If you recover $g(x)$, the claim is true. If not, it is false.

**Example 2.** Let $f(x)=x+1$ and $g(x)=x^{2}-4x+1$. Expand the proposed rewrite:

$$
(x+1)^{2}-6(x+1)+6=x^{2}+2x+1-6x-6+6=x^{2}-4x+1=g(x).
$$

The claim is true.

You do not need a general theorem about bases of polynomials for these tasks. Expand and compare.

### Shifts you meet in claims

- $g(x)+s$ moves the graph up by $s$ and leaves the axis fixed.
- $g(x-t)$ moves the graph right by $t$ and moves the axis with it.
- Multiplying by a nonzero constant stretches heights and keeps the roots when the constant is nonzero.

That is enough for the shift and nesting claims in the chapter.

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

### Error 5: inventing an $x^{3}$ term from nesting

Expand $g(f(x))$ or $f(g(x))$. For a line and a parabola the highest power stays $x^{2}$. Do not add $1+2=3$.

### Error 6: assuming nesting order does not matter

$g(f(x))$ and $f(g(x))$ can both be quadratic and still be different functions. Check with one test point.

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

The eight tasks below are taken from the course Chapter 7.5 bank (difficulty $5/5$). Each one is a True/False pack. Work from the table, formula, or figure data, not from a slogan. Where the live course shows a figure or an unprinted table, the needed values are written out so you can practise here.

### Exam task 1 — Sampled heights (table)

A sequence $s_n$ is recorded for $n=0,1,2,3,4,5$. No closed form is supplied.

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- | --- |
| $s_n$ | $3$ | $0$ | $-1$ | $0$ | $3$ | $8$ |

**Claims.**

1. The unique quadratic through the listed points has roots at $n=1$ and $n=3$.
2. Extending the constant-second-difference pattern one step past $n=5$ produces $s_6=12$.
3. The axis of that interpolating parabola is $n=2$, the unique listed input of smallest height.
4. A line matching $s_0$ and $s_5$ also matches $s_2$.
5. The vertex height of the interpolating parabola equals $-1$.

**Solution.**

First differences: $-3,-1,1,3,5$. Second differences: $2,2,2,2$. So $2a=2$ and $a=1$. Matching the first points recovers

$$
s_n=n^{2}-4n+3=(n-1)(n-3).
$$

Roots at $1$ and $3$: claim 1 true. Axis at midpoint $n=2$, and $s_2=-1$ is the unique listed minimum: claims 3 and 5 true.

Next value: keep second difference $2$, so the next first difference after $5$ is $7$, hence $s_6=8+7=15$, not $12$. Claim 2 false.

Line through $(0,3)$ and $(5,8)$ has slope $1$, so at $n=2$ it predicts $5$, but $s_2=-1$. Claim 4 false.

**Answers.** True, False, True, False, True.

### Exam task 2 — Ticket desk revenue (applied table)

A club sells tickets at price $p$ euros. Total revenue $R$ is observed at five prices. No formula is printed.

| $p$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- |
| $R$ | $7$ | $12$ | $15$ | $16$ | $15$ |

**Claims.**

1. Among the listed prices, the unique maximum occurs at the midpoint of the two prices where revenue equals $15$.
2. Rebuilding a quadratic from the constant second difference recovers leading coefficient $-1$.
3. Revenue increases at every listed step from $p=1$ to $p=5$.
4. The interpolating parabola has roots $0$ and $8$, so its axis is $p=4$.
5. Raising the price from $4$ to $5$ decreases the listed revenue by $1$ euro.

**Solution.**

First differences: $5,3,1,-1$. Second differences: $-2,-2,-2$. So $2a=-2$ and $a=-1$. Matching $R(1)=7$ recovers

$$
R(p)=p(8-p)=-p^{2}+8p.
$$

Revenue $15$ occurs at $p=3$ and $p=5$; the midpoint is $p=4$, where $R=16$ is the unique listed maximum. Claim 1 true. Claim 2 true. Claim 3 false, because the step from $4$ to $5$ falls. Roots $0$ and $8$ give axis $p=4$: claim 4 true. From $16$ to $15$ is a drop of $1$: claim 5 true.

**Answers.** True, True, False, True, True.

### Exam task 3 — Meetings, vertex, and a rewrite in $f$

Let $f(x)=x+1$ and $g(x)=x^{2}-4x+1$. Work in symbols; no figure is supplied.

**Claims.**

1. The sum of the meeting abscissas of the two graphs equals $5$.
2. The axis of $g$ is $x=2$, which is half the Vieta sum of the roots of $g$.
3. The vertex of $g$ lies $3$ units below the horizontal axis.
4. The product of the roots of $g$ equals $1$, matching $g(0)$.
5. $g(x)=f(x)^{2}-6\,f(x)+6$.

**Solution.**

Meetings: $x^{2}-4x+1=x+1$ gives $x^{2}-5x=0$, so $x=0$ or $x=5$. Sum $5$: claim 1 true.

For $g$, sum of roots $4$, axis $x=2$: claim 2 true. Vertex height $g(2)=4-8+1=-3$: claim 3 true. Product $c/a=1$ and $g(0)=1$: claim 4 true.

Expand the rewrite:

$$
(x+1)^{2}-6(x+1)+6=x^{2}-4x+1=g(x).
$$

Claim 5 true.

**Answers.** True, True, True, True, True.

### Exam task 4 — Sliding slope family

For each real $t$ let $f_{t}(x)=tx$ and $g(x)=x^{2}+1$. Study how the line family meets the fixed parabola.

**Claims.**

1. Tangency occurs precisely at the two slopes $t=2$ and $t=-2$.
2. The graphs never miss each other: every real $t$ produces at least one meeting.
3. For $t=0$ the graphs meet at two real points, because $x^{2}+1$ factors over the reals.
4. When $t=3$ the graphs miss each other, because $|t|>2$ forces a negative discriminant.
5. The axis of $g$ depends on $t$, and for $t=0$ that axis coincides with the line $f_{0}$.

**Solution.**

Meetings solve $x^{2}-tx+1=0$. Discriminant $\Delta(t)=t^{2}-4$.

- miss when $|t|<2$;
- tangency when $t=\pm 2$;
- two meetings when $|t|>2$.

Claim 1 true. Claim 2 false (miss when $|t|<2$). Claim 3 false ($t=0$ gives $x^{2}+1=0$, no real root). Claim 4 false ($t=3$ gives $\Delta=5>0$, two meetings). Axis of $g$ is $x=0$ for every $t$, and $f_{0}$ is the horizontal line $y=0$, not the vertical axis: claim 5 false.

**Answers.** True, False, False, False, False.

### Exam task 5 — Rebuild from vertex and a point

A parabola has vertex $(2,-3)$ and passes through $(0,5)$. It opens upwards.

**Claims.**

1. The stretch factor in vertex form equals $2$, so the rebuilt rule is $g(x)=2(x-2)^{2}-3$.
2. $g(4)=g(0)=5$, matching the symmetry of a parabola about $x=2$.
3. $g(1)=-1$ and $g(3)=-1$, so those two inputs sit equally far from the axis $x=2$.
4. The vertex lies above the horizontal axis, and therefore both given points $(0,5)$ and $(2,-3)$ have positive height.
5. The rule is $g(x)=(x-2)^{2}-3$.

**Solution.**

Start from $g(x)=a(x-2)^{2}-3$. Use $(0,5)$:

$$
4a-3=5\implies 4a=8\implies a=2.
$$

So $g(x)=2(x-2)^{2}-3$. Claim 1 true. Claim 5 false (wrong stretch). Symmetry about $x=2$ gives $g(4)=g(0)=5$ and $g(1)=g(3)=-1$: claims 2 and 3 true. Vertex height $-3$ is below the axis, and the point $(2,-3)$ is not positive: claim 4 false.

**Answers.** True, True, True, False, False.

### Exam task 6 — Line inside a square (nesting)

Let $f(x)=x+1$ and $g(x)=x^{2}$. Study the nested rules $g(f(x))$ and $f(g(x))$.

**Claims.**

1. The nested rule $g(f(x))$ expands to a perfect square, so its vertex lies on the horizontal axis.
2. The nested rule $f(g(x))$ has the same axis of symmetry as $g$.
3. The two nested rules are identical as functions.
4. The nested rules $g(f(x))$ and $f(g(x))$ have the same vertex.
5. The highest power appearing in $f(g(x))$ is $x^{3}$.

**Solution.**

$$
g(f(x))=(x+1)^{2}=x^{2}+2x+1,\qquad f(g(x))=x^{2}+1.
$$

Claim 1 true (vertex $(-1,0)$ on the axis). Claim 2 true (both have axis $x=0$). The functions differ: $g(f(1))=4$ while $f(g(1))=2$, so claim 3 false. Vertices $(-1,0)$ and $(0,1)$ differ, so claim 4 false. Highest power in $f(g(x))$ is $x^{2}$, not $x^{3}$: claim 5 false.

**Answers.** True, True, False, False, False.

### Exam task 7 — Ball toss (figure)

A ball is tossed straight up. The figure shows height $h$ (metres) against time $t$ (seconds) as a solid brown curve; the horizontal axis is ground level. The visible ground times are $t=0$ and $t=6$, and the marked peak has height $9$.

**Claims.**

1. The time of greatest height is the midpoint of the two visible ground times.
2. The greatest height occurs at $t=2$, which would be the midpoint of the two visible ground times.
3. At $t=1$ the height is greater than at $t=5$.
4. After the peak, height keeps rising.
5. The greatest height on the figure is $8$ metres, matching the height at $t=4$.

**Solution.**

Recover

$$
h(t)=t(6-t)=9-(t-3)^{2}.
$$

Peak at midpoint $t=3$, height $9$. Claim 1 true. Claim 2 false (names $t=2$). Heights at $t=1$ and $t=5$ are equal ($5$), so claim 3 false. After the peak the completed square falls, so claim 4 false. Greatest height is $9$, not $8$, so claim 5 false.

**Answers.** True, False, False, False, False.

### Exam task 8 — Vertical shift family

For each real $s$ let $g_{s}(x)=(x-2)^{2}+(s-4)$. Study how the vertical shift changes the graph.

**Claims.**

1. For $s=3$ the vertex sits one unit below the axis, so there are two distinct real roots whose midpoint is $x=2$.
2. For $s=4$ the vertex lies on the axis, so there is a double root at $x=2$ and no other.
3. For $s=5$ the vertex sits one unit above the axis, so $g_{s}$ has no real root.
4. The axis of symmetry of $g_{s}$ is $x=2$ for every $s$, because the $(x-2)^{2}$ term never moves horizontally.
5. The vertex height of $g_{s}$ equals $s-4$, so the graph sits below the axis precisely when $s<4$.

**Solution.**

Axis $x=2$ for every $s$. Vertex height $s-4$. Solving $(x-2)^{2}=4-s$:

- $s=3$: two roots, midpoint $2$;
- $s=4$: double root at $2$;
- $s=5$: no real root.

All five claims are true.

**Answers.** True, True, True, True, True.

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
| Table: quadratic? | Constant second differences; with step $1$, $2a=$ that gap |
| Nesting $g(f(x))$ or $f(g(x))$ | Expand; highest power stays $x^{2}$; order matters |
| Rewrite claim using a line | Replace the line by its formula and expand |
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

**Working order.** Name whether the object is a line, a parabola, a difference, a table, or a story. Recover the formula (or the discriminant condition) before judging a claim. For graphs without printed formulas, rebuild from ticks first. For nested expressions, expand and compare; do not invent an $x^{3}$ term. For Vieta claims, write sum and product explicitly and remember the axis is the half-sum. Keep parameter cases separate: two meetings, tangency, or none.

**Self-check.** Can you read slope and both intercepts from $f(x)=mx+c$? Why does $a\neq 0$ matter for a quadratic? How do you get the axis from coefficients, and why is it $S/2$ rather than $S$? Why does a parabola still have a vertex when $\Delta<0$? How many times can a line meet a parabola? What do constant first and second differences tell you in a table? After expanding $g(f(x))$ for a line and a parabola, why is the highest power $x^{2}$, not $x^{3}$? How do you rebuild a parabola from a vertex and one extra point? In a ball-toss figure, where is the peak relative to the ground times? And why can a revenue peak and a profit peak sit at different inputs?
