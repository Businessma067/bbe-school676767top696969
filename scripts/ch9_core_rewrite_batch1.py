#!/usr/bin/env python3
"""Rewrite tactical explanations for a Chapter 9 core-bank batch (batch 1).

Style: Chapter 4 tutor voice (narrative opener, one formula per display,
connecting prose, closing ', so the statement is True|False.').

EXPL maps each task id to five explanation bodies INCLUDING the
``**A.** → True|False`` header line.

KEY_FIXES records honest answer-key flips where the live statement and the
keyed truth disagree, and algebra decides against the key. Statements,
stems and context are never rewritten.

Sidecar: scripts/ch9-core-batch1-key-fixes.md

Run: python3 scripts/ch9_core_rewrite_batch1.py
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"
SIDECAR = Path(__file__).resolve().parents[1] / "scripts/ch9-core-batch1-key-fixes.md"
BATCH = Path("/tmp/ch9-bad-batch1.json")

LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "The rewritten claim restates",
    "yes-or-no decision",
    "Retargeted",
    "This settles the claim",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
]

# (task id, 0-based statement index) -> honest truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-9", 3): False,   # first differences -1, 1, 5 are not constant
    ("math-9-10", 1): False,  # descending order: lead of x^4 is 1, not 5
    ("math-9-10", 4): False,  # no x^3 term in x^4 - 3x^2 + 5
    ("math-9-12", 4): False,  # (x-2)(x^3+1) is degree 4, not cubic
    ("math-9-13", 2): True,   # third differences of the table are 6, 6
    ("math-9-13", 4): True,   # the x=0 column lists 1
    ("math-9-17", 3): False,  # (x-1)^3 is a right shift of x^3, not the same curve
    ("math-9-18", 3): True,   # negative cubic lead: T(t) -> -infty as t -> +infty
    ("math-9-23", 4): False,  # p(0) = 2, so x=0 is not a root
    ("math-9-25", 2): True,   # three distinct real roots give three real linear factors
    ("math-9-25", 3): True,   # a vertical shift of x^3-3x changes the real-root count
    ("math-9-28", 3): False,  # first differences 1, 15, 65, ... are not constant
    ("math-9-30", 1): True,   # p(1) = 1 - 2 - 8 = -9
    ("math-9-30", 2): True,   # p(x) = x(x+2)(x-4) has constant term 0
    ("math-9-31", 3): False,  # addition never adds the two exponents
    ("math-9-31", 4): False,  # unequal highest powers cannot cancel
    ("math-9-32", 1): True,   # p-q has leading coefficient 2a != 0
    ("math-9-32", 2): True,   # product of nonzero leads is -a^2 != 0
    ("math-9-32", 4): True,   # p and -q share leading coefficient a
    ("math-9-35", 4): False,  # (p+c)' = p', independent of c
    ("math-9-36", 0): False,  # stationary points are (x, y); the y-values move with a
    ("math-9-36", 2): False,  # three distinct real roots only for -2 < a < 2
    ("math-9-36", 4): False,  # the leading coefficient is 1 for every a
    ("math-9-37", 1): True,   # 900 m / 90 s = 10 m/s = 36 km/h
    ("math-9-37", 3): True,  # v is cubic, so v' is quadratic
    ("math-9-37", 4): True,  # interval speeds 6, 8, 10, 12, 14, 10 peak once
    ("math-9-38", 2): True,  # local max at x=1 with value 2
    ("math-9-38", 3): True,  # leading coefficient -1 sends the right end to -infty
    ("math-9-40", 3): False,  # leading coefficient is 1, independent of k
    ("math-9-42", 4): False,  # p' identically 0 means p is constant
    ("math-9-43", 1): False,  # x^3 has one stationary point, not n-1 = 2
    ("math-9-43", 3): False,  # a horizontal shift preserves the count
    ("math-9-48", 2): False,  # x=-3 is simple, so p'(-3) = 16 != 0
    ("math-9-49", 3): True,   # p-ell = x^4 - 6x^2 + 5 still has top power x^4
    ("math-9-51", 1): True,   # 575 m / 50 s = 11.5 m/s
    ("math-9-51", 4): True,   # v has a nonzero t^3 term
}

# task id -> five full explanation bodies (header included).
EXPL: dict[str, list[str]] = {}

EXPL["math-9-9"] = [
    r"""**A.** → True

The column sitting under $x=0$ is the cubic's height at the origin, already printed in the table.

$$p(0)=1$$

That listed $1$ is exactly the claimed value. The unique cubic through the four nodes confirms the same constant term:

$$p(x)=\frac{1}{3}x^{3}+x^{2}-\frac{1}{3}x+1$$

Substituting $x=0$ recovers $1$ again, so the statement is True.""",
    r"""**B.** → True

Two steps to the right of the origin the table records a single height, and that is the number to test.

$$p(2)=7$$

The listed $7$ matches the claim. The interpolating cubic gives the same check independently:

$$p(2)=\frac{8}{3}+4-\frac{2}{3}+1=7$$

Both the printed column and the closed form agree on $7$, so the statement is True.""",
    r"""**C.** → False

A straight line sampled at equal integer steps would rise or fall by the same amount each time.

$$2,\;1,\;2,\;7$$

The successive jumps from those heights are

$$1-2=-1,\qquad 2-1=1,\qquad 7-2=5$$

Those three first differences are not one repeated number, so the samples cannot come from a linear function, so the statement is False.""",
    r"""**D.** → False

First differences of a table are the jumps from one listed height to the next, taken in order of increasing $x$.

$$p(-1)=2,\quad p(0)=1,\quad p(1)=2,\quad p(2)=7$$

Subtract neighbouring values:

$$-1,\quad 1,\quad 5$$

A constant first-difference row would require those three numbers to be equal. They grow, so the first differences are not constant, so the statement is False.""",
    r"""**E.** → True

The two columns one unit either side of the origin can be compared by reading the table, with no extra algebra.

$$p(-1)=2$$

$$p(1)=2$$

The two heights are the same number $2$. (The interpolating cubic is not even, so this pairing is a coincidence of these four samples, not a symmetry of every cubic.) The two listed values agree, so the statement is True.""",
]

EXPL["math-9-10"] = [
    r"""**A.** → True

Written out of descending order, the polynomial still has a highest surviving power of $x$.

$$p(x)=5-3x^{2}+x^{4}$$

Collect like powers from largest exponent to smallest:

$$p(x)=x^{4}-3x^{2}+5$$

The $x^{4}$ term is present with coefficient $1\neq 0$, and no higher power appears. The highest power is $x^{4}$, so the statement is True.""",
    r"""**B.** → False

The leading coefficient is the number in front of the highest surviving power, not the leftover constant.

$$p(x)=x^{4}-3x^{2}+5$$

The top term is $1\cdot x^{4}$, so the leading coefficient is $1$. The $5$ is $p(0)$, the constant term.

$$p(0)=5$$

Calling $5$ the leading coefficient mixes the two ends of the polynomial, so the statement is False.""",
    r"""**C.** → True

Every power of $x$ vanishes at the origin, so $p(0)$ is exactly the constant term of the written rule.

$$p(x)=5-3x^{2}+x^{4}$$

$$p(0)=5-3\cdot 0+0=5$$

That $5$ is the number named in the claim. Substituting $x=0$ into the descending form $x^{4}-3x^{2}+5$ gives the same $5$, because every positive power still vanishes. The constant term is $5$, so the statement is True.""",
    r"""**D.** → True

Evenness is the identity $p(-x)=p(x)$, checked by replacing every $x$ with $-x$.

$$p(-x)=5-3(-x)^{2}+(-x)^{4}$$

$$p(-x)=5-3x^{2}+x^{4}$$

Every exponent here is even, so each term is unchanged. The two sides are identical, and the graph is symmetric about the $y$-axis. A single odd power would have broken the test; none is present. The identity $p(-x)=p(x)$ holds, so the statement is True.""",
    r"""**E.** → False

A polynomial has an $x^{3}$ term only when the coefficient of $x^{3}$ is nonzero.

$$p(x)=x^{4}+0\cdot x^{3}-3x^{2}+0\cdot x+5$$

After rewriting in descending powers, the coefficients of $x^{3}$ and of $x$ are both $0$.

$$p(x)=x^{4}-3x^{2}+5$$

No cubic term is present. Pairing $x^{4}$ with $-3x^{2}$ never manufactures an $x^{3}$ by accident. The $x^{3}$ coefficient is zero, so the statement is False.""",
]

EXPL["math-9-12"] = [
    r"""**A.** → True

The product of a non-constant line and a cubic multiplies the two highest powers.

$$h(x)=(x-2)(x^{3}+1)$$

$$x\cdot x^{3}=x^{4}$$

Expanding to audit the lower terms does not touch that top power:

$$h(x)=x^{4}-2x^{3}+x-2$$

The coefficient of $x^{4}$ is $1\neq 0$, so the highest power in $h$ is $x^{4}$, so the statement is True.""",
    r"""**B.** → True

The leading coefficient of a product is the product of the two leading coefficients.

$$h(x)=(x-2)(x^{3}+1)$$

Each factor is monic, so the top term of the product is $1\cdot 1\cdot x^{4}$.

$$h(x)=x^{4}-2x^{3}+x-2$$

The number in front of $x^{4}$ is $1$. The $-2$ in the linear factor only affects the $x^{3}$ term $-2x^{3}$, never the lead. The leading coefficient of $h$ is $1$, so the statement is True.""",
    r"""**C.** → True

A product vanishes wherever either factor vanishes, and the linear factor is built to vanish at $2$.

$$f(2)=2-2=0$$

$$h(2)=f(2)\cdot p(2)=0\cdot 9=0$$

The cubic factor at $x=2$ is $8+1=9\neq 0$, so $x=2$ is a simple root of $h$ coming from the line alone. Expanding $h(2)=(16-16+2-2)$ is a second way to see the zero. The product is zero there, so the statement is True.""",
    r"""**D.** → True

The other factor of the product is the cubic $x^{3}+1$, which itself vanishes at $x=-1$.

$$p(-1)=(-1)^{3}+1=-1+1=0$$

$$h(-1)=f(-1)\cdot p(-1)=(-3)\cdot 0=0$$

The linear factor $f(-1)=-3$ is safely nonzero, so this zero of $h$ is inherited entirely from $p$. The product is zero at $x=-1$, so the statement is True.""",
    r"""**E.** → False

A cubic function has highest power $x^{3}$. The expanded product has already been written out.

$$h(x)=x^{4}-2x^{3}+x-2$$

The $x^{4}$ term is present with coefficient $1$, so $h$ has highest power $x^{4}$.

$$(x-2)(x^{3}+1)$$

A non-constant line times a genuine cubic is degree $4$, never degree $3$, so the statement is False.""",
]

EXPL["math-9-13"] = [
    r"""**A.** → True

On unit spacing the first differences are just neighbouring heights subtracted in order.

$$1,\;2,\;9,\;28,\;65$$

$$2-1=1,\quad 9-2=7,\quad 28-9=19,\quad 65-28=37$$

Those four jumps are exactly the list $1,7,19,37$. (They already grow, which is the later letters' cue that the source is not linear.) The first-difference row matches the claim, so the statement is True.""",
    r"""**B.** → False

Second differences are the jumps of the first-difference row.

$$1,\;7,\;19,\;37$$

$$7-1=6,\quad 19-7=12,\quad 37-19=18$$

A quadratic sampled at equal steps would freeze that second row to a single repeated number. Here the second differences still grow by $6$ each time, so they are not constant, so the statement is False.""",
    r"""**C.** → True

One more pass produces the third differences, and a cubic on unit spacing freezes them.

$$6,\;12,\;18$$

$$12-6=6,\quad 18-12=6$$

The third row is the constant $6$. For a monic cubic the third difference on unit spacing is $3!=6$, which matches $p(x)=x^{3}+1$. The third differences are constant and equal to $6$, so the statement is True.""",
    r"""**D.** → False

A quadratic would need constant second differences, and those have already been computed.

$$6,\;12,\;18$$

They form an arithmetic sequence rather than a constant, so the degree is at least $3$. The closed form $p(x)=x^{3}+1$ reproduces every column and is cubic, not quadratic.

$$p(4)=64+1=65$$

The table cannot come from a quadratic, so the statement is False.""",
    r"""**E.** → True

The leftmost column of the table is the sample at $x=0$.

$$p(0)=1$$

That is the number named in the claim. The reconstruction $p(x)=x^{3}+1$ gives the same constant term:

$$0^{3}+1=1$$

The next columns $p(1)=2$ and $p(2)=9$ are consistent with that same rule, but they are not needed here. The listed height at the origin is $1$, so the statement is True.""",
]

EXPL["math-9-17"] = [
    r"""**A.** → True

Replacing $x$ by $x-1$ slides the graph but does not lower the highest power.

$$q(x)=(x-1)^{3}$$

Expand by the binomial theorem:

$$q(x)=x^{3}-3x^{2}+3x-1$$

The $x^{3}$ term survives with coefficient $1\neq 0$, and no $x^{4}$ is created. The highest power of $x$ in $q$ is still $x^{3}$, so the statement is True.""",
    r"""**B.** → True

The shifted cube vanishes where the inner factor vanishes, namely at $x=1$.

$$q(1)=(1-1)^{3}=0^{3}=0$$

That is the image of the original root $p(0)=0$ after sliding one unit to the right. Expanding is unnecessary for this check, but it agrees:

$$1-3+3-1=0$$

The value at $x=1$ is $0$, so the statement is True.""",
    r"""**C.** → True

The $y$-intercept of $q$ is the value at $x=0$, which is the original cube evaluated one unit to the left of the origin.

$$q(0)=(0-1)^{3}=(-1)^{3}=-1$$

The expanded form gives the same constant term:

$$q(x)=x^{3}-3x^{2}+3x-1$$

So $q(0)=-1$, matching the claimed height. That $-1$ is also the constant term of the expansion $x^{3}-3x^{2}+3x-1$. The intercept of $q$ is $-1$, so the statement is True.""",
    r"""**D.** → False

Two graphs are the same curve only when the functions agree at every $x$. Compare them at the origin.

$$p(0)=0^{3}=0$$

$$q(0)=(0-1)^{3}=-1$$

Already $p(0)\neq q(0)$. Expanding $q$ makes the mismatch visible as extra lower terms $-3x^{2}+3x-1$. Replacing $x$ by $x-1$ slides $y=x^{3}$ one unit to the right; it does not leave the curve unmoved, so the statement is False.""",
    r"""**E.** → True

The leading coefficient is the number in front of the highest power after expansion.

$$q(x)=(x-1)^{3}=x^{3}-3x^{2}+3x-1$$

The top term is $1\cdot x^{3}$. Shifting never changes that leading $1$, because

$$(x-1)^{3}=x^{3}+\cdots$$

with no extra factor in front of $x^{3}$. The leading coefficient of $q$ is $1$, so the statement is True.""",
]

EXPL["math-9-18"] = [
    r"""**A.** → True

At the start of the twenty minutes every power of $t$ drops out, leaving the constant term.

$$T(t)=-0.01t^{3}+0.3t^{2}-t+8$$

$$T(0)=8$$

That $8$ is the chamber temperature in degrees Celsius at $t=0$. Substituting zero into any of the other three terms gives zero, so nothing else can change the reading, so the statement is True.""",
    r"""**B.** → True

Ten minutes in, substitute $t=10$ term by term.

$$T(10)=-0.01\cdot 1000+0.3\cdot 100-10+8$$

$$T(10)=-10+30-10+8=18$$

The four contributions add to $18$, which is the claimed temperature. (Along the way the cubic and linear terms cancelled, leaving $30+8-20$.) The value at $t=10$ is $18$, so the statement is True.""",
    r"""**C.** → False

The highest power is the largest exponent whose coefficient is nonzero.

$$T(t)=-0.01t^{3}+0.3t^{2}-t+8$$

The coefficient of $t^{3}$ is $-0.01\neq 0$, so the top power is $t^{3}$ rather than $t^{2}$.

$$-0.01\neq 0$$

A quadratic model would have stopped at $t^{2}$. The written rule is cubic, so the statement is False.""",
    r"""**D.** → True

Far-field behaviour is settled by the leading term, whose coefficient is negative.

$$T(t)=-0.01t^{3}+\cdots$$

$$t\to+\infty\quad\Longrightarrow\quad T(t)\to-\infty$$

An odd power with a negative lead dives on the right: after the quadratic bump, $T$ decreases without a lower bound. Restricting attention to the twenty-minute window hides that, since $T(20)=28$ is still finite, but the claim is about $t$ becoming large. The cubic eventually falls without bound, so the statement is True.""",
    r"""**E.** → False

Twenty minutes is the right-hand end of the given window, so substitute $t=20$.

$$T(20)=-0.01\cdot 8000+0.3\cdot 400-20+8$$

$$T(20)=-80+120-20+8=28$$

That is $28$, not $8$. The reading $8$ belongs to $t=0$, not to $t=20$. The two endpoints of the window are different temperatures, so the statement is False.""",
]

EXPL["math-9-23"] = [
    r"""**A.** → True

A monic cubic is completely fixed by its three simple roots: the graph crosses at $-1$, $1$ and $2$, and the leading coefficient is $1$.

$$p(x)=(x+1)(x-1)(x-2)$$

Expanding to audit:

$$p(x)=(x^{2}-1)(x-2)=x^{3}-2x^{2}-x+2$$

No extra constant factor is allowed by the monic lead, so this is the unique such cubic. The factored form matches the crossings, so the statement is True.""",
    r"""**B.** → True

The $y$-intercept is the product of the three constant pieces of the linear factors.

$$p(0)=(0+1)(0-1)(0-2)$$

$$p(0)=(1)(-1)(-2)=2$$

From the expanded form $x^{3}-2x^{2}-x+2$ the same number is the constant term. The figure's intercept sits two units above the origin, matching that product. The height at $x=0$ is $2$, so the statement is True.""",
    r"""**C.** → False

Far to the right the leading term $x^{3}$ dominates, and its coefficient is $+1$.

$$p(x)=x^{3}-2x^{2}-x+2$$

$$x\to+\infty\quad\Longrightarrow\quad p(x)\to+\infty$$

Odd degree with a positive lead rises on the right and falls on the left. The claimed dive to $-\infty$ would need a negative leading coefficient. The right end of the figure goes up, so the statement is False.""",
    r"""**D.** → True

Between two consecutive roots a continuous cubic that leaves the axis and returns to it must turn once.

$$p'(x)=3x^{2}-4x-1$$

Evaluate the derivative at the two crossings that bound the interval:

$$p'(1)=3-4-1=-2<0$$

$$p'(2)=12-8-1=3>0$$

A sign change of $p'$ on $[1,2]$ forces a root of $p'$ in $(1,2)$. Rolle's theorem already promised one stationary point there, so the statement is True.""",
    r"""**E.** → False

A root is an input where the graph meets the $x$-axis, equivalently where $p$ evaluates to $0$.

$$p(0)=(1)(-1)(-2)=2$$

That $y$-intercept is $2$, not $0$. The three crossings named in the stem are $-1$, $1$ and $2$; the origin is not among them.

$$p(0)\neq 0$$

So $x=0$ is not a root of $p$, so the statement is False.""",
]

EXPL["math-9-25"] = [
    r"""**A.** → True

A real cubic is an odd-degree polynomial, so its two ends point in opposite directions.

$$p(x)=ax^{3}+bx^{2}+cx+d\qquad a\neq 0$$

If $a>0$ then $p\to-\infty$ on the left and $p\to+\infty$ on the right; if $a<0$ those ends swap. A continuous function that is negative somewhere and positive somewhere else must cross zero.

$$x^{3}+1=0\quad\Longrightarrow\quad x=-1$$

Even a cubic with only one real root still has that one. Every real cubic therefore has at least one real root, so the statement is True.""",
    r"""**B.** → False

A nonzero polynomial of highest power $x^{3}$ has at most three roots, counting multiplicity.

$$ax^{3}+bx^{2}+cx+d=a(x-r)(x-s)(x-t)$$

Four distinct real numbers would require four distinct linear factors, hence highest power $x^{4}$. The cubic $x^{3}-x=x(x-1)(x+1)$ already uses the full budget of three distinct real roots.

$$x(x-1)(x+1)=0$$

A fourth distinct real root is impossible, so the statement is False.""",
    r"""**C.** → True

Three distinct real roots $r,s,t$ produce three real linear factors, and the leading coefficient supplies the remaining constant.

$$p(x)=a(x-r)(x-s)(x-t)$$

Over the reals there is nothing left: a cubic cannot hide a quadratic factor once three distinct real zeros are known. A concrete case is $x^{3}-x$.

$$x^{3}-x=x(x-1)(x+1)$$

The factorisation into three real linear factors is forced, so the statement is True.""",
    r"""**D.** → True

Adding a constant slides the graph vertically and can change how many times it meets the axis.

$$q_{c}(x)=x^{3}-3x+c$$

For $c=0$ the roots are $0,\pm\sqrt{3}$, three distinct real numbers. For $c=3$ the local-minimum value is already positive, so the graph crosses the axis only once.

$$q_{0}(x)=x(x^{2}-3)$$

$$q_{3}(1)=1$$

The number of real roots changed when the constant term changed, so the statement is True.""",
    r"""**E.** → False

Oddness is the identity $p(-x)=-p(x)$, which forces every even power to vanish. A constant term already breaks that.

$$p(x)=x^{3}+1$$

$$p(-1)=-1+1=0$$

$$-p(1)=-(1+1)=-2$$

The two numbers $0$ and $-2$ differ, so $x^{3}+1$ is not odd. A cubic is odd only when it contains exclusively odd powers, which is a special case rather than a rule, so the statement is False.""",
]

EXPL["math-9-28"] = [
    r"""**A.** → True

The first column of the table is the sample at the origin.

$$p(0)=1$$

That listed $1$ is the claimed height. The closed form that fits every column, $p(x)=x^{4}+1$, has the same constant term:

$$0^{4}+1=1$$

Both the table and the reconstruction give $1$ at $x=0$. The later columns $2,17,82$ are for other letters; they are not needed to read $p(0)$. The listed height at the origin is $1$, so the statement is True.""",
    r"""**B.** → False

Constant first differences are the signature of a linear sample. Subtract neighbouring heights.

$$1,\;2,\;17,\;82,\;257,\;626$$

$$2-1=1,\quad 17-2=15,\quad 82-17=65,\quad 257-82=175,\quad 626-257=369$$

Those jumps $1,15,65,175,369$ grow rapidly. A line would have frozen the first row to one repeated number. The first differences are not constant, so the statement is False.""",
    r"""**C.** → True

The column under $x=2$ is a single printed height.

$$p(2)=17$$

The reconstruction $p(x)=x^{4}+1$ agrees independently:

$$2^{4}+1=16+1=17$$

Both routes give $17$. (By contrast $p(1)=2$ and $p(3)=82$ sit on either side, as a quartic should.) The listed value at $x=2$ is $17$, so the statement is True.""",
    r"""**D.** → False

A linear model $mx+c$ can pass through every listed point only if the first differences are constant.

$$1,\;15,\;65,\;175,\;369$$

Those five jumps are not one number, so no single slope $m$ fits all six samples. Two points determine a line, but the third already misses: the line through $(0,1)$ and $(1,2)$ would predict $p(2)=3$, while the table records $17$.

$$1+2\cdot 1=3\neq 17$$

A line cannot fit every listed point, so the statement is False.""",
    r"""**E.** → True

Test the proposed closed form against each tabulated argument.

$$p(x)=x^{4}+1$$

$$0^{4}+1=1,\quad 1^{4}+1=2,\quad 2^{4}+1=17$$

$$3^{4}+1=82,\quad 4^{4}+1=257,\quad 5^{4}+1=626$$

Every listed height is reproduced. Fourth differences of a quartic are constant, which is consistent with these rapidly growing first differences. The values match $x^{4}+1$, so the statement is True.""",
]

EXPL["math-9-30"] = [
    r"""**A.** → True

A monic cubic with roots $-2$, $0$ and $4$ is the product of the three corresponding linear factors.

$$p(x)=x(x+2)(x-4)$$

Multiply the last two brackets first, then distribute $x$:

$$(x+2)(x-4)=x^{2}-2x-8$$

$$p(x)=x^{3}-2x^{2}-8x$$

The expanded form is exactly the claimed cubic, so the statement is True.""",
    r"""**B.** → True

Substitute $x=1$ into the expanded cubic, or into the factored form.

$$p(1)=1-2-8=-9$$

From the factors:

$$p(1)=1\cdot(1+2)\cdot(1-4)=1\cdot 3\cdot(-3)=-9$$

Both routes give $-9$, which is the number named in the claim. (A sign error in the last factor would have produced $+9$ instead.) The value at $x=1$ is $-9$, so the statement is True.""",
    r"""**C.** → True

The constant term of a polynomial is its value at $x=0$, equivalently the product of the constant pieces of its factors.

$$p(0)=0\cdot(2)\cdot(-4)=0$$

One of the roots is $0$ itself, so $x$ is a factor and there is no leftover constant.

$$p(x)=x^{3}-2x^{2}-8x+0$$

The constant term is $0$, so the statement is True.""",
    r"""**D.** → False

The sum of the three roots is a plain addition, or Vieta's rule: for a monic cubic it equals minus the coefficient of $x^{2}$.

$$(-2)+0+4=2$$

$$-(-2)=2$$

The claimed sum $-2$ is the individual root $-2$, not the total. Confusing the sum with minus the coefficient of $x$ would also miss: that coefficient is $-8$, and $-(-8)=8$. The three roots add to $2$, not to $-2$, so the statement is False.""",
    r"""**E.** → False

Evenness requires $p(-x)=p(x)$ for every $x$. The expanded form has odd powers as well as even ones.

$$p(x)=x^{3}-2x^{2}-8x$$

$$p(-1)=-1-2+8=5$$

$$p(1)=-9$$

Those two values differ, so the graph is not symmetric about the $y$-axis. A cubic with a root at $0$ and two other roots of opposite sign but unequal size cannot be even, so the statement is False.""",
]

EXPL["math-9-31"] = [
    r"""**A.** → True

When the highest powers differ, they cannot cancel in a sum. Here $n>m$, so $x^{n}$ has no partner in $q$.

$$p(x)=ax^{n}+\cdots$$

$$q(x)=bx^{m}+\cdots$$

$$p(x)+q(x)=ax^{n}+\cdots$$

The coefficient $a$ of $x^{n}$ is nonzero by assumption, so it survives. A concrete pair: $x^{3}+x$ still has highest power $x^{3}$. The highest power of $p+q$ is $x^{n}$, so the statement is True.""",
    r"""**B.** → True

Subtracting $q$ only changes the sign of $q$'s coefficients. The top term of $p$ is still unmatched.

$$p(x)-q(x)=ax^{n}+\cdots$$

Because $n>m$, the power $x^{n}$ does not appear in $q$, so it cannot be cancelled by $-q$. With $p(x)=x^{3}$ and $q(x)=x$,

$$x^{3}-x$$

still has highest power $x^{3}$. The highest power of $p-q$ is $x^{n}$, so the statement is True.""",
    r"""**C.** → True

The highest power of a product is the product of the two highest powers, equivalently the sum of the two exponents.

$$(ax^{n})(bx^{m})=ab\,x^{n+m}$$

The coefficient $ab$ is a product of nonzero numbers, hence nonzero. Taking $p(x)=x^{3}$ and $q(x)=x^{2}$ gives $x^{5}$, and $3+2=5$.

$$x^{3}\cdot x^{2}=x^{5}$$

The highest power of $p\cdot q$ is $x^{n+m}$, so the statement is True.""",
    r"""**D.** → False

Adding polynomials never adds their exponents. The sum keeps the larger of the two highest powers.

$$p+q=ax^{n}+\cdots\qquad n>m$$

The exponent $n+m$ would appear in a product, not in a sum. With $n=3$ and $m=1$,

$$x^{3}+x$$

has highest power $x^{3}$, not $x^{4}$. The claimed $x^{n+m}$ is the wrong operation, so the statement is False.""",
    r"""**E.** → False

Opposite leading coefficients can cancel only when they sit on the same power of $x$.

$$n>m$$

The top term $ax^{n}$ of $p$ has no counterpart in $q$, whatever the sign of $b$. Opposite signs would matter if $n=m$, but here the degrees differ.

$$x^{3}+(-x^{2})=x^{3}-x^{2}$$

still has highest power $x^{3}$. The degree of $p+q$ cannot drop below $n$, so the statement is False.""",
]

EXPL["math-9-32"] = [
    r"""**A.** → True

Equal highest powers with opposite leading coefficients cancel in the sum.

$$a+b=0,\qquad a\neq 0$$

The $x^{n}$ terms $ax^{n}+bx^{n}=(a+b)x^{n}$ vanish, so whatever survives has exponent strictly less than $n$. A concrete pair: $p(x)=x^{2}+1$ and $q(x)=-x^{2}+x$ give

$$p+q=x+1$$

which has highest power $x^{1}$, strictly below $2$. The top power of $p+q$ drops, so the statement is True.""",
    r"""**B.** → True

Subtracting $q$ doubles the leading coefficient instead of cancelling it.

$$p-q=(a-b)x^{n}+\cdots$$

Because $b=-a$, the combination $a-b=a-(-a)=2a$ is nonzero.

$$2a\neq 0$$

With $p(x)=x^{2}+1$ and $q(x)=-x^{2}+x$ one gets $p-q=2x^{2}-x+1$, still of highest power $x^{2}$. The highest power of $p-q$ remains $x^{n}$, so the statement is True.""",
    r"""**C.** → True

The product of two degree-$n$ polynomials has degree $2n$, because the leading coefficients multiply rather than add.

$$(ax^{n})(bx^{n})=ab\,x^{2n}$$

Here $ab=a(-a)=-a^{2}$. Since $a\neq 0$, that product is nonzero, so the $x^{2n}$ term survives.

$$-a^{2}\neq 0$$

For $p(x)=x^{2}+1$ and $q(x)=-x^{2}+x$ the product begins $-x^{4}+\cdots$. The highest power of $p\cdot q$ is $x^{2n}$, so the statement is True.""",
    r"""**D.** → False

Cancellation of the top terms does not force every lower term to vanish.

$$p(x)=x^{2}+1$$

$$q(x)=-x^{2}+x$$

$$p+q=x+1$$

That sum is not the zero polynomial. The identity $p+q\equiv 0$ would require $q=-p$ as functions, which is stronger than matching leading coefficients. Opposite leads kill only the $x^{n}$ term, so the statement is False.""",
    r"""**E.** → True

End behaviour on the far right is settled by the leading term. The polynomial $-q$ has leading coefficient $-b$.

$$-b=-(-a)=a$$

So $p$ and $-q$ share the same degree $n$ and the same leading coefficient $a$. As $x\to+\infty$ they therefore tend to the same infinity.

$$p(x)\sim ax^{n}$$

$$-q(x)\sim ax^{n}$$

The two graphs have the same right-hand end behaviour. For even $n$ both go to $+\infty$ when $a>0$; for odd $n$ both go to $+\infty$ when $a>0$. The claim holds in every case, so the statement is True.""",
]

EXPL["math-9-35"] = [
    r"""**A.** → True

Adding a constant never creates or destroys the highest power of $x$.

$$p_{c}(x)=p(x)+c$$

If $p(x)=ax^{n}+\cdots$ with $a\neq 0$ and $n\ge 1$, the same $ax^{n}$ is the top term of $p_{c}$ for every real $c$.

$$p_{c}(x)=ax^{n}+\cdots+c$$

The shift $c$ sits in degree $0$, far below $n$. The highest power of $p_{c}$ remains $x^{n}$ for every $c$, so the statement is True.""",
    r"""**B.** → False

A nonzero polynomial of highest power $x^{n}$ has at most $n$ distinct real roots, and a vertical shift does not raise that power.

$$p_{c}(x)=ax^{n}+\cdots+c$$

Whatever $c$ is chosen, $p_{c}$ still has highest power $x^{n}$, so it cannot have $n+1$ distinct real zeros. Shifting $x^{2}$ up by $1$ gives $x^{2}+1$, which has fewer roots, not more.

$$x^{2}+1>0$$

No extra real root appears. No choice of $c$ can produce more than $n$ distinct real roots, so the statement is False.""",
    r"""**C.** → True

An odd highest power makes the two ends of the graph point opposite ways, and adding $c$ does not change that power.

$$p_{c}(x)=ax^{n}+\cdots+c$$

If $n$ is odd then every $p_{c}$ still has odd degree, so a real root exists for every real $c$. Existence of one such $c$ is weaker: even the unshifted polynomial already crosses the axis.

$$x^{3}+c=0\qquad\Longrightarrow\qquad x=-\sqrt[3]{c}$$

For odd $n$ such a shift therefore exists, so the statement is True.""",

    r"""**D.** → True

An even power with a positive leading coefficient has the same sign at both infinities, so its graph has a global minimum.

$$p(x)=x^{2}$$

$$p_{c}(x)=x^{2}+c$$

Choose $c$ larger than the gap from $0$ down to that global minimum. For $p(x)=x^{2}$ the minimum is $0$, so $c=1$ already lifts the whole graph strictly above the axis.

$$x^{2}+1>0$$

That shifted quadratic has no real root. The same lifting works for any even $n$ with positive lead, so the statement is True.""",
    r"""**E.** → False

Differentiating kills every constant, so the shift $c$ disappears from the derivative.

$$p_{c}(x)=p(x)+c$$

$$p_{c}'(x)=p'(x)$$

The right-hand side does not mention $c$. For $p(x)=x^{2}$ one has $p_{c}'(x)=2x$ whether $c=0$ or $c=7$. Stationary abscissas therefore stay put under a vertical shift. The derivative of $p_{c}$ is independent of $c$, so the statement is False.""",
]

EXPL["math-9-36"] = [
    r"""**A.** → False

The $x$-coordinates of the turns come from the derivative, which does not contain $a$.

$$p_{a}'(x)=3x^{2}-3=3(x-1)(x+1)$$

So the graph is flat at $x=\pm 1$ for every $a$. The stationary points are the pairs $(x,p_{a}(x))$, and those heights do move.

$$p_{a}(-1)=a+2$$

$$p_{a}(1)=a-2$$

For $a=0$ the points are $(-1,2)$ and $(1,-2)$; for $a=1$ they are $(-1,3)$ and $(1,-1)$. The points depend on $a$, so the statement is False.""",
    r"""**B.** → True

Set $a=0$ and factor the remaining odd cubic.

$$p_{0}(x)=x^{3}-3x=x(x^{2}-3)$$

$$x=0,\quad x=\pm\sqrt{3}$$

Those three numbers are distinct. Equivalently, the critical values are $p_{0}(-1)=2>0$ and $p_{0}(1)=-2<0$, so the graph crosses the axis three times. For $a=0$ there are three distinct real roots, so the statement is True.""",
    r"""**C.** → False

Three distinct real roots occur only while the axis sits strictly between the two critical values.

$$p_{a}(-1)=a+2>0$$

$$p_{a}(1)=a-2<0$$

That pair of inequalities is $-2<a<2$. Outside the window the count drops to one: for $a=3$ the local minimum is already positive, since $p_{3}(1)=1$. Not every $a$ gives three distinct real roots, so the statement is False.""",
    r"""**D.** → True

A double root at $x=1$ requires both $p_{a}(1)=0$ and $p_{a}'(1)=0$. The derivative condition is automatic.

$$p_{a}'(1)=3-3=0$$

The value condition pins the parameter uniquely:

$$p_{a}(1)=1-3+a=a-2=0$$

so $a=2$, and then $p_{2}(x)=(x-1)^{2}(x+2)$. No other $a$ produces a double root at $x=1$, so the statement is True.""",
    r"""**E.** → False

The leading coefficient is the number in front of $x^{3}$, and $a$ is added as a constant.

$$p_{a}(x)=x^{3}-3x+a$$

The top term is $1\cdot x^{3}$ for every real $a$. Changing $a$ slides the graph vertically but never rescales $x^{3}$. The leading coefficient is $1$, independent of $a$, so the statement is False.""",
]

EXPL["math-9-37"] = [
    r"""**A.** → True

Decelerating means negative acceleration, so differentiate the cubic speed and evaluate at $t=60$.

$$v(t)=0.00001t^{3}-0.003t^{2}+0.24t$$

$$a(t)=v'(t)=0.00003t^{2}-0.006t+0.24$$

$$a(60)=0.00003\cdot 3600-0.006\cdot 60+0.24=-0.012$$

The acceleration is $-0.012$, hence negative. The first rider is slowing down at $t=60$, so the statement is True.""",
    r"""**B.** → True

The second rider covers $900$ m in $90$ s. Average speed is distance over time, then convert metres per second into kilometres per hour by the factor $3.6$.

$$\frac{900}{90}=10$$

$$10\cdot 3.6=36$$

Ten metres per second is exactly $36$ km/h. The claimed whole-run average is that converted figure, so the statement is True.""",
    r"""**C.** → False

Interval speed is the jump in distance over each $15$ s block of the table.

$$90,\;120,\;150,\;180,\;210,\;150$$

Divide by $15$:

$$6,\;8,\;10,\;12,\;14,\;10$$

The first interval $[0,15]$ has the smallest of these, $6$ m/s. The peak $14$ m/s sits on $[60,75]$. The highest interval speed is not on $[0,15]$, so the statement is False.""",
    r"""**D.** → True

Acceleration is the derivative of speed. Differentiating a cubic produces a quadratic.

$$v(t)=0.00001t^{3}-0.003t^{2}+0.24t$$

$$a(t)=0.00003t^{2}-0.006t+0.24$$

The $t^{2}$ coefficient $0.00003$ is nonzero, so $a(t)$ is genuinely quadratic rather than linear or constant. The first rider's acceleration is a quadratic polynomial in $t$, so the statement is True.""",
    r"""**E.** → True

The six interval speeds of the second rider, already computed from neighbouring distances, form the sequence

$$6,\;8,\;10,\;12,\;14,\;10$$

Reading left to right, the list climbs to $14$ and then drops once to $10$. That single peak sits at the fifth interval, larger than both neighbours $12$ and $10$. There is only one local maximum, so the statement is True.""",
]

EXPL["math-9-38"] = [
    r"""**A.** → True

A cubic with leading coefficient $-1$ and turns at $x=\pm 1$ is determined up to a constant, and the two given heights pin that constant.

$$p(x)=-x^{3}+3x$$

Check the data: $p'(x)=-3x^{2}+3=3(1-x^{2})$ vanishes at $\pm 1$, and

$$p(-1)=1-3=-2$$

$$p(1)=-1+3=2$$

The leading term is $-x^{3}$. Every marked requirement is met, so the statement is True.""",
    r"""**B.** → True

Oddness is the identity $p(-x)=-p(x)$. Every term of this cubic has odd degree.

$$p(-x)=-(-x)^{3}+3(-x)=x^{3}-3x$$

$$-p(x)=-(-x^{3}+3x)=x^{3}-3x$$

The two sides agree, so $p(-x)=-p(x)$. A quick numerical check is $p(-1)=-2$ and $-p(1)=-2$. The graph is rotationally symmetric about the origin, so the statement is True.""",
    r"""**C.** → True

The second derivative decides which turn is a local maximum.

$$p'(x)=-3x^{2}+3$$

$$p''(x)=-6x$$

At $x=-1$ one has $p''(-1)=6>0$, a local minimum of value $p(-1)=-2$. At $x=1$ one has $p''(1)=-6<0$, a local maximum of value $p(1)=2$.

$$p(1)=2$$

The local maximum value is $2$, so the statement is True.""",
    r"""**D.** → True

Far-field behaviour is settled by the leading term $-x^{3}$.

$$p(x)=-x^{3}+3x$$

$$x\to+\infty\qquad\Longrightarrow\qquad p(x)\to-\infty$$

A negative leading coefficient on an odd power sends the right end down. The figure's right-hand arm dives, matching $p(2)=-8+6=-2$ already heading downwards. As $x\to+\infty$, $p(x)\to-\infty$, so the statement is True.""",
    r"""**E.** → False

The value at the origin is the constant term, and this cubic has none.

$$p(0)=-0+0=0$$

The claimed height $3$ is the coefficient of $x$, not $p(0)$. Oddness also forces $p(0)=0$, because $p(0)=-p(0)$.

$$p(0)\neq 3$$

Substituting into $-x^{3}+3x$ cannot produce $3$ at the origin. The intercept is $0$, not $3$, so the statement is False.""",
]

EXPL["math-9-40"] = [
    r"""**A.** → True

Factor out $x$ and read the remaining quadratic.

$$g_{k}(x)=x^{3}-kx=x(x^{2}-k)$$

If $k>0$ then $x^{2}=k$ has two real solutions $\pm\sqrt{k}$, distinct from $0$ and from each other.

$$x=0,\quad x=\pm\sqrt{k}$$

Those three numbers are distinct precisely when $k$ is positive. For $k=4$ they are $-2,0,2$. Three distinct real roots appear, so the statement is True.""",
    r"""**B.** → False

At $k=0$ the family collapses to a pure cube.

$$g_{0}(x)=x^{3}$$

The only real root is $x=0$, of multiplicity three. Distinct roots are different numbers, and here there is only one number.

$$x^{3}=0\qquad\Longrightarrow\qquad x=0$$

Three distinct real roots would need three different solutions. They do not exist for $k=0$, so the statement is False.""",
    r"""**C.** → True

If $k$ is negative then $x^{2}-k=x^{2}+|k|$ is always positive, so it contributes no real root.

$$g_{k}(x)=x(x^{2}-k)$$

The product is zero only when $x=0$. For $k=-1$,

$$g_{-1}(x)=x^{3}+x=x(x^{2}+1)$$

and $x^{2}+1\ge 1$ for every real $x$. No extra real root appears from the quadratic factor. A single real root remains, so the statement is True.""",
    r"""**D.** → False

The leading coefficient is the number in front of $x^{3}$, and $k$ multiplies only the linear term.

$$g_{k}(x)=x^{3}-kx$$

The top term is $1\cdot x^{3}$ for every real $k$. Changing $k$ opens or closes the side roots but never rescales $x^{3}$. The leading coefficient is $1$, independent of $k$, so the statement is False.""",
    r"""**E.** → True

Oddness is $g_{k}(-x)=-g_{k}(x)$. Every term here has odd degree, and $k$ is only a coefficient of $x$.

$$g_{k}(-x)=(-x)^{3}-k(-x)=-x^{3}+kx$$

$$-g_{k}(x)=-(x^{3}-kx)=-x^{3}+kx$$

The two sides agree for every real $k$, including $k=0$ where $g_{0}(x)=x^{3}$ is the standard odd cube. The family is odd for every $k$, so the statement is True.""",
]

EXPL["math-9-42"] = [
    r"""**A.** → True

A repeated linear factor means $p(x)=(x-a)^{2}q(x)$ for some polynomial $q$. Substituting $x=a$ gives $p(a)=0$ at once.

$$p(x)=(x-a)^{2}q(x)$$

Differentiate by the product rule:

$$p'(x)=2(x-a)q(x)+(x-a)^{2}q'(x)$$

$$p'(a)=0$$

Both $p$ and $p'$ vanish at $a$. A repeated factor always produces a common root of $p$ and $p'$, so the statement is True.""",
    r"""**B.** → True

For polynomials the converse also holds. If $p(a)=0$ then $x-a$ is already a factor, say $p(x)=(x-a)q(x)$. Differentiating and using $p'(a)=0$ forces $q(a)=0$ as well.

$$p'(x)=q(x)+(x-a)q'(x)$$

$$p'(a)=q(a)=0$$

So $x-a$ divides $q$, hence $(x-a)^{2}$ divides $p$. A common root of $p$ and $p'$ is a repeated root of $p$, so the statement is True.""",
    r"""**C.** → False

The derivative's zeros are stationary points, not automatically roots of $p$. A cubic such as $x^{3}-x$ is flat where $p'=3x^{2}-1=0$, namely at $x=\pm 1/\sqrt{3}$.

$$p'(x)=3x^{2}-1$$

$$p\left(\frac{1}{\sqrt{3}}\right)=\frac{1}{3\sqrt{3}}-\frac{1}{\sqrt{3}}\neq 0$$

Those turning points sit off the axis. Not every root of $p'$ is a root of $p$, so the statement is False.""",
    r"""**D.** → True

Spend two of the three factors on a repeated root and the last on a different simple root.

$$p(x)=(x-1)^{2}(x-2)$$

Then $x=1$ is repeated and $x=2$ is a distinct simple root. Expanding gives $x^{3}-4x^{2}+5x-2$, a genuine cubic. The graph touches at $1$ and crosses at $2$. A cubic can carry that pattern, so the statement is True.""",
    r"""**E.** → False

If $p'$ is the zero polynomial then $p$ has no $x$ in it at all: $p$ is a constant.

$$p'(x)\equiv 0\qquad\Longrightarrow\qquad p(x)=c$$

A constant is not a non-constant polynomial. The stem already assumed $p$ non-constant, which forces $p'$ to be nonzero. The implication in the claim runs the wrong way, so the statement is False.""",
]

EXPL["math-9-43"] = [
    r"""**A.** → True

Stationary points are the real roots of $p'$. Differentiating drops the highest power by one.

$$p(x)=ax^{n}+\cdots\qquad\Longrightarrow\qquad p'(x)=nax^{n-1}+\cdots$$

A nonzero polynomial of highest power $x^{n-1}$ has at most $n-1$ distinct real roots, unless it is identically zero (which cannot happen for genuine degree $n\ge 2$). So $p$ has at most $n-1$ stationary points, so the statement is True.""",
    r"""**B.** → False

"At most $n-1$" is not "exactly $n-1$". The cubic $x^{3}$ has derivative $3x^{2}$, whose only real root is $x=0$.

$$p(x)=x^{3}$$

$$p'(x)=3x^{2}$$

Here $n=3$, so $n-1=2$, but there is only one stationary point. Multiple roots of $p'$, or complex roots, reduce the count. Not every degree-$n$ polynomial has exactly $n-1$ stationary points, so the statement is False.""",
    r"""**C.** → True

A vertical stretch multiplies $p$ by a nonzero constant $k$, and the chain rule (or factoring $k$) leaves the zeros of the derivative unchanged.

$$(kp)'(x)=k\,p'(x)$$

Because $k\neq 0$, one has $(kp)'(x)=0$ if and only if $p'(x)=0$. The stationary abscissas are the same set.

$$kp'(x)=0\qquad\Longleftrightarrow\qquad p'(x)=0$$

A vertical stretch keeps the same stationary $x$-values, so the statement is True.""",
    r"""**D.** → False

Replacing $x$ by $x-h$ slides the graph horizontally. Every stationary point moves by $h$, but none is created or destroyed.

$$q(x)=p(x-h)\qquad\Longrightarrow\qquad q'(x)=p'(x-h)$$

The equation $q'(x)=0$ is $p'(x-h)=0$, which has as many solutions as $p'(u)=0$. A shift cannot increase the count.

$$p(x)=x^{3}$$

$$p(x-1)=(x-1)^{3}$$

still has a single stationary point. The number of stationary points is invariant, so the statement is False.""",
    r"""**E.** → True

If $n$ is even then $n-1$ is odd, so $p'$ has odd highest power.

$$p'(x)=nax^{n-1}+\cdots$$

An odd-degree real polynomial always has at least one real root, by the same end-behaviour argument as for cubics. That real root of $p'$ is a stationary point of $p$. For $p(x)=x^{4}-x$ one has

$$p'(x)=4x^{3}-1$$

which vanishes at $x=4^{-1/3}$. Even degree forces at least one stationary point, so the statement is True.""",
]

EXPL["math-9-48"] = [
    r"""**A.** → True

A monic cubic with a double root at $x=1$ and a simple root at $x=-3$ is the product of those factors.

$$p(x)=(x-1)^{2}(x+3)$$

Expand $(x-1)^{2}=x^{2}-2x+1$, then multiply by $x+3$:

$$(x^{2}-2x+1)(x+3)=x^{3}+3x^{2}-2x^{2}-6x+x+3$$

$$p(x)=x^{3}+x^{2}-5x+3$$

The expanded cubic is the claimed formula, so the statement is True.""",
    r"""**B.** → True

A repeated root is always a root of the derivative. Differentiate the reconstruction.

$$p(x)=(x-1)^{2}(x+3)$$

$$p'(x)=2(x-1)(x+3)+(x-1)^{2}$$

$$p'(1)=0$$

From the expanded form, $p'(x)=3x^{2}+2x-5$ and $p'(1)=3+2-5=0$ as well. The tangent is horizontal at the double root $x=1$, as multiplicity two always forces. The derivative vanishes there, so the statement is True.""",
    r"""**C.** → False

The factor $x+3$ appears only once, so $x=-3$ is a simple root: $p(-3)=0$ but $p'$ need not vanish there.

$$p'(x)=3x^{2}+2x-5$$

$$p'(-3)=27-6-5=16\neq 0$$

The graph crosses the axis at $x=-3$ rather than touching. Both halves of the claim would require a double root at $-3$, and only the first half holds. The derivative is not zero at $x=-3$, so the statement is False.""",
    r"""**D.** → True

The constant term is $p(0)$, or the product of the constant pieces of the factors.

$$p(0)=(0-1)^{2}(0+3)=1\cdot 3=3$$

From the expansion $x^{3}+x^{2}-5x+3$ the leftover number is likewise $3$. Vieta's product of the roots with multiplicity is $1\cdot 1\cdot(-3)=-3$, and $(-1)^{3}(-3)=3$ recovers the same constant.

$$p(x)=x^{3}+x^{2}-5x+3$$

The constant term is $3$, so the statement is True.""",
    r"""**E.** → True

Roots counted with multiplicity are $1$, $1$ and $-3$. Their sum is a plain addition, or Vieta's rule for a monic cubic: minus the coefficient of $x^{2}$.

$$1+1+(-3)=-1$$

$$- (1)=-1$$

Both routes give $-1$. Counting $1$ only once would have produced $1-3=-2$, which is the unweighted distinct-root sum instead. The multiplicity-weighted sum of the roots is $-1$, so the statement is True.""",
]

EXPL["math-9-49"] = [
    r"""**A.** → True

The graphs meet where $p-\ell=0$. Subtract the two rules.

$$p(x)-\ell(x)=x^{4}-5x^{2}+4-(x^{2}-1)=x^{4}-6x^{2}+5$$

$$x^{4}-6x^{2}+5=(x^{2}-1)(x^{2}-5)$$

The zeros are $x=\pm 1$ and $x=\pm\sqrt{5}$, four distinct real numbers. Each is a genuine intersection because $\ell$ is defined everywhere. The graphs meet at four distinct real points, so the statement is True.""",
    r"""**B.** → True

Evenness is $p(-x)=p(x)$. Every exponent in $p$ is even.

$$p(-x)=(-x)^{4}-5(-x)^{2}+4=x^{4}-5x^{2}+4$$

That is $p(x)$ again. Equivalently, $p$ contains only even powers, so the graph is symmetric about the $y$-axis.

$$p(-2)=16-20+4=0=p(2)$$

The identity holds for every $x$. A quartic of only even powers is a quadratic in $x^{2}$, which is automatically even. The polynomial $p$ is even, so the statement is True.""",
    r"""**C.** → False

A cubic function has highest power $x^{3}$. The second map is

$$\ell(x)=x^{2}-1$$

The highest power is $x^{2}$, with no $x^{3}$ term at all. It is a quadratic (a parabola), not a cubic.

$$\ell(x)=0\cdot x^{3}+x^{2}-1$$

Calling $\ell$ cubic confuses it with the quartic $p$. Highest power $x^{2}$ makes $\ell$ a quadratic, so the statement is False.""",
    r"""**D.** → True

Subtracting $\ell$ cannot cancel the $x^{4}$ term of $p$, because $\ell$ has no $x^{4}$.

$$p(x)-\ell(x)=x^{4}-6x^{2}+5$$

The coefficient of $x^{4}$ is $1\neq 0$, so the highest power of the difference is $x^{4}$.

$$(x^{2}-1)(x^{2}-5)=x^{4}+\cdots$$

The top power survives. A cancellation would have needed $\ell$ to contain $x^{4}$ as well, which it does not. The highest power of $p-\ell$ is $x^{4}$, so the statement is True.""",
    r"""**E.** → False

Compare the two values at the origin, which are the two constant terms.

$$p(0)=4$$

$$\ell(0)=-1$$

Those numbers differ. Equivalently $p(0)-\ell(0)=5\neq 0$, so $x=0$ is not among the four meeting points $\pm 1,\pm\sqrt{5}$. A meeting at the origin would have required equal constant terms. The graphs miss each other at $x=0$, so the statement is False.""",
]

EXPL["math-9-51"] = [
    r"""**A.** → True

Decelerating means negative acceleration. Differentiate the cubic speed and evaluate at $t=45$.

$$v(t)=\frac{1}{2500}t^{3}-\frac{9}{100}t^{2}+\frac{9}{10}t$$

$$a(t)=\frac{3}{2500}t^{2}-\frac{18}{100}t+\frac{9}{10}$$

$$a(45)=\frac{3\cdot 2025}{2500}-\frac{18}{100}\cdot 45+\frac{9}{10}$$

$$a(45)=2.43-8.1+0.9=-4.77$$

The acceleration is negative, so the train is slowing down at $t=45$, so the statement is True.""",
    r"""**B.** → True

The second locomotive's table ends at $t=50$ s with distance $575$ m. Whole-run average speed is last distance over last time.

$$\frac{575}{50}=11.5$$

That is $11.5$ metres per second, the number named in the claim. (In kilometres per hour it would be $11.5\cdot 3.6=41.4$, which is a later letter.) The whole-run average is $11.5$ m/s, so the statement is True.""",
    r"""**C.** → False

Convert the whole-run average $11.5$ m/s into kilometres per hour by the factor $3.6$.

$$11.5\cdot 3.6=41.4$$

Compare with $45$:

$$41.4<45$$

The average is $41.4$ km/h, which does not exceed $45$ km/h. Crossing $45$ km/h would have needed more than $12.5$ m/s over the $50$ s run. The claimed comparison fails, so the statement is False.""",
    r"""**D.** → False

Interval speed is the jump in distance over each $10$ s block.

$$55,\;85,\;115,\;145,\;175$$

Divide by $10$:

$$5.5,\;8.5,\;11.5,\;14.5,\;17.5$$

Those speeds increase all the way to the last interval. The peak $17.5$ m/s occurs on $[40,50]$, not on $[30,40]$ (which is only $14.5$). The table's peak interval is the last one, so the statement is False.""",
    r"""**E.** → True

A cubic polynomial is one whose highest surviving power is $t^{3}$. Read the written speed.

$$v(t)=\frac{1}{2500}t^{3}-\frac{9}{100}t^{2}+\frac{9}{10}t$$

The coefficient of $t^{3}$ is $1/2500\neq 0$, and no higher power appears.

$$\frac{1}{2500}\neq 0$$

So $v$ is a cubic polynomial in $t$, so the statement is True.""",
]

SIDECAR_BODY = """# Chapter 9 core bank — batch 1 answer-key corrections

While rewriting `tactical_explanations` for the tasks listed in
`/tmp/ch9-bad-batch1.json`, several statements could not be justified as keyed:
the live wording and the keyed truth disagreed, and algebra decided against the
key. Statement text, context, figures and tables were left untouched; only the
affected `answer_key` booleans were flipped.

| Task | Letter | Was | Now | Reason |
| --- | --- | --- | --- | --- |
| 9.09 | D | True | False | First differences of $2,1,2,7$ are $-1,1,5$, not constant. |
| 9.10 | B | True | False | Descending form $x^4-3x^2+5$ has leading coefficient $1$, not $5$. |
| 9.10 | E | True | False | There is no $x^3$ term. |
| 9.12 | E | True | False | $(x-2)(x^3+1)=x^4-2x^3+x-2$ is degree $4$, not cubic. |
| 9.13 | C | False | True | Third differences of the table are $6,6$. |
| 9.13 | E | False | True | The $x=0$ column lists $1$. |
| 9.17 | D | True | False | $p(0)=0$ while $q(0)=-1$; a right shift is a different curve. |
| 9.18 | D | False | True | Negative cubic lead: $T(t)\\to-\\infty$ as $t\\to+\\infty$. |
| 9.23 | E | True | False | $p(0)=2\\neq 0$, so $x=0$ is not a root. |
| 9.25 | C | False | True | Three distinct real roots give three real linear factors. |
| 9.25 | D | False | True | $x^3-3x+c$ changes real-root count with $c$. |
| 9.28 | D | True | False | First differences $1,15,65,\\ldots$ are not constant, so no line fits. |
| 9.30 | B | False | True | $p(1)=1-2-8=-9$. |
| 9.30 | C | False | True | A root at $0$ forces constant term $0$. |
| 9.31 | D | True | False | Addition keeps the larger degree $n$, never $n+m$. |
| 9.31 | E | True | False | Unequal highest powers cannot cancel. |
| 9.32 | B | False | True | $p-q$ has leading coefficient $2a\\neq 0$. |
| 9.32 | C | False | True | Product of nonzero leads is $-a^2\\neq 0$, degree $2n$. |
| 9.32 | E | False | True | $p$ and $-q$ share leading coefficient $a$. |
| 9.35 | E | True | False | $(p+c)'=p'$, independent of $c$. |
| 9.36 | A | True | False | Stationary *points* $(x,p_a(x))$ have $y$-values $a\\pm 2$. |
| 9.36 | C | True | False | Three distinct real roots only for $-2<a<2$. |
| 9.36 | E | True | False | Leading coefficient is $1$ for every $a$. |
| 9.37 | B | False | True | $900/90=10$ m/s $=36$ km/h. |
| 9.37 | D | False | True | Differentiating a cubic speed gives a quadratic $a(t)$. |
| 9.37 | E | False | True | Interval speeds $6,8,10,12,14,10$ peak once. |
| 9.38 | C | False | True | Local max at $x=1$ with value $2$. |
| 9.38 | D | False | True | Leading coefficient $-1$ sends $p\\to-\\infty$ on the right. |
| 9.40 | D | True | False | Leading coefficient is $1$, independent of $k$. |
| 9.42 | E | True | False | $p'\\equiv 0$ means $p$ is constant. |
| 9.43 | B | True | False | $x^3$ has one stationary point, not $n-1=2$. |
| 9.43 | D | True | False | A horizontal shift preserves the stationary-point count. |
| 9.48 | C | True | False | $x=-3$ is simple: $p'(-3)=16\\neq 0$. |
| 9.49 | D | False | True | $p-\\ell=x^4-6x^2+5$ still has top power $x^4$. |
| 9.51 | B | False | True | $575/50=11.5$ m/s. |
| 9.51 | E | False | True | $v$ has a nonzero $t^3$ term. |
"""


def _truth_from_header(text: str) -> str | None:
    m = re.match(r"\*\*[A-E]\.\*\* → (True|False)\n", text)
    return m.group(1) if m else None


def _first_paragraph(text: str) -> str:
    parts = re.split(r"\n\n", text.strip(), maxsplit=2)
    return parts[1] if len(parts) > 1 else ""


def validate_task(task: dict, texts: list[str], problems: list[str], lengths: list[int]) -> None:
    keys = task["answer_key"]
    tid = task["id"]
    firsts: list[str] = []
    display_seqs: list[tuple[str, ...]] = []
    for i, (key, text) in enumerate(zip(keys, texts)):
        label = f"{tid}.{LETTERS[i]}"
        lengths.append(len(text))
        verdict = "True" if key else "False"
        if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
            problems.append(f"{label}: header does not match key ({verdict})")
        if not text.rstrip().endswith(f", so the statement is {verdict}."):
            problems.append(f"{label}: closing line missing or wrong verdict")
        for pattern in BANNED:
            if re.search(pattern, text):
                problems.append(f"{label}: banned phrase {pattern!r}")
        displays = re.findall(r"\$\$(.*?)\$\$", text, flags=re.S)
        display_seqs.append(tuple(displays))
        if not displays:
            problems.append(f"{label}: no display formula")
        for j, display in enumerate(displays):
            if display.strip() == "":
                problems.append(f"{label}: empty display")
            if "\n" in display:
                problems.append(f"{label}: newline inside a display")
            if j > 0 and display == displays[j - 1]:
                problems.append(f"{label}: consecutive identical displays")
        opener = _first_paragraph(text)
        if not opener:
            problems.append(f"{label}: no narrative opener after the header")
        firsts.append(opener)
        n = len(text)
        if n < 300 or n > 850:
            problems.append(f"{label}: length {n} outside 300-850")
    if len(set(firsts)) < 4:
        problems.append(f"{tid}: repeated openers across letters")
    if len(set(display_seqs)) < 4:
        problems.append(f"{tid}: repeated display sequences across letters")


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    missing = [tid for tid in EXPL if tid not in by_id]
    if missing:
        raise SystemExit(f"ids not in bank: {missing}")

    expected = json.loads(BATCH.read_text()) if BATCH.exists() else []
    expected_ids = [row["id"] for row in expected] if expected else list(EXPL)
    leftover = [tid for tid in expected_ids if tid not in EXPL]
    if leftover:
        raise SystemExit(f"batch ids with no EXPL: {leftover}")

    for (tid, index), fixed in KEY_FIXES.items():
        if tid not in EXPL:
            raise SystemExit(f"KEY_FIXES for id not in EXPL: {tid}")
        by_id[tid]["answer_key"][index] = fixed

    for tid, bodies in EXPL.items():
        task = by_id[tid]
        texts = [block.strip() for block in bodies]
        if len(texts) != 5:
            raise SystemExit(f"{tid}: expected 5 explanations, got {len(texts)}")
        task["tactical_explanations"] = texts

    problems: list[str] = []
    lengths: list[int] = []
    for tid in EXPL:
        validate_task(by_id[tid], by_id[tid]["tactical_explanations"], problems, lengths)

    print("=== validation summary ===")
    print(f"tasks rewritten: {len(EXPL)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median length: {int(statistics.median(lengths))} chars")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections: {len(KEY_FIXES)}")
    if problems:
        print(f"problems ({len(problems)}):")
        print("\n".join(problems))
        raise SystemExit("validation failed")
    print("header/close match: ok")
    print("banned hits: none")
    print("lengths: ok")

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    SIDECAR.write_text(SIDECAR_BODY)
    print(f"wrote {DATA}")
    print(f"wrote {SIDECAR}")


if __name__ == "__main__":
    main()
