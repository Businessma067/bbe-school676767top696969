"""Rewrite tactical explanations for Chapter 9 core bank, batch 2.

Scope: the task ids listed in /tmp/ch9-bad-batch2.json (math-9-52..55,
math-9-57..74). Only those records in src/data/math-ch9-polynomials.json
are updated.

Style: Chapter 4 tutor voice — narrative opener, one formula per display,
connecting prose, close with ", so the statement is True/False."

EXPL stores full letter texts, including the **A.** → True|False headers.
KEY_FIXES records every answer-key boolean that algebra forced to change.
Statements, stems, and context are left untouched.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

LETTERS = "ABCDE"

BATCH_IDS = [
    "math-9-52",
    "math-9-53",
    "math-9-54",
    "math-9-55",
    "math-9-57",
    "math-9-58",
    "math-9-59",
    "math-9-60",
    "math-9-61",
    "math-9-62",
    "math-9-63",
    "math-9-64",
    "math-9-65",
    "math-9-66",
    "math-9-67",
    "math-9-68",
    "math-9-69",
    "math-9-70",
    "math-9-71",
    "math-9-72",
    "math-9-73",
    "math-9-74",
]

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "The rewritten claim restates",
    "yes-or-no decision",
    "Retargeted",
    "This settles the claim",
    "Substitute, factor, differentiate",
    "Each letter is then",
    "The stem produces",
    "That is the comparison the claim",
]

# (task id, statement index) -> honest truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-52", 3): True,    # p' root (2+sqrt(19))/3 ≈ 2.12 lies in (1, 3)
    ("math-9-54", 0): False,   # third differences are 36, 60, 84
    ("math-9-54", 3): False,   # fourth differences 24, so no cubic interpolant
    ("math-9-55", 1): False,   # a cubic has at most three distinct real zeros
    ("math-9-55", 4): False,   # x^3 + 1 is a cubic that is not odd
    ("math-9-57", 2): True,    # p(x) = x(x+2)(x-4) has constant term 0
    ("math-9-59", 3): False,   # table interval averages peak at 19 on [15, 20]
    ("math-9-60", 4): False,   # monic cubic: p(x) → +∞ as x → +∞
    ("math-9-62", 2): False,   # adding never adds exponents; top power stays x^n
    ("math-9-63", 1): True,    # lead(p-q) = a-b = 2a ≠ 0, so still x^n
    ("math-9-63", 3): True,    # lead(p q) = a(-a) = -a^2 ≠ 0, so x^{2n}
    ("math-9-63", 4): True,    # lead(-q) = -b = a = lead(p)
    ("math-9-64", 4): True,    # g_k(-x) = -g_k(x) for every real k
    ("math-9-67", 0): False,   # W'(5) = -1/4 < 0
    ("math-9-67", 4): False,   # W has highest power t^3, not a quadratic
    ("math-9-68", 2): True,    # the table lists p(4) = 65
    ("math-9-68", 3): True,    # the five samples are exactly x^3 + 1
    ("math-9-69", 3): True,    # p(0) = 3 is the constant term
    ("math-9-69", 4): True,    # 1 + 1 + (-3) = -1
    ("math-9-70", 3): True,    # p >= 2 and p-1 >= 1, so r never vanishes
    ("math-9-71", 2): True,    # zeros ±1, ±2 are four distinct reals
    ("math-9-71", 3): True,    # even degree, positive lead → +∞ at both ends
    ("math-9-74", 1): False,   # k = 0 gives x^3, one distinct real zero
    ("math-9-74", 3): False,   # leading coefficient is 1, independent of k
}

EXPL: dict[str, list[str]] = {}

EXPL["math-9-52"] = [
    r"""**A.** → True

A monic cubic that meets the axis at three listed abscissas is the product of those three linear factors.

$$p(x)=(x+2)(x-1)(x-3)$$

Multiply the last pair first:

$$(x-1)(x-3)=x^{2}-4x+3$$

Then distribute the remaining factor:

$$(x+2)(x^{2}-4x+3)=x^{3}-2x^{2}-5x+6$$

The lead is $1$, matching the monic sketch, so the statement is True.""",
    r"""**B.** → True

The $y$-intercept is the height at $x=0$, read from the factored cubic by multiplying the constant pieces of the three factors.

$$p(x)=(x+2)(x-1)(x-3)$$

$$p(0)=(2)(-1)(-3)$$

$$p(0)=6$$

That intercept $6$ is the number named on the card, so the statement is True.""",
    r"""**C.** → False

Far to the right, only the highest power survives, and this cubic is monic.

$$p(x)=x^{3}-2x^{2}-5x+6$$

$$p(x)=x^{3}\left(1-\frac{2}{x}-\frac{5}{x^{2}}+\frac{6}{x^{3}}\right)$$

As $x\to+\infty$ the bracket tends to $1$, so $p(x)$ tends to $+\infty$ rather than to $-\infty$. An odd power with a positive lead rises on the right, so the statement is False.""",
    r"""**D.** → True

Between consecutive roots a cubic must flatten once. The consecutive zeros named here are $1$ and $3$.

$$p'(x)=3x^{2}-4x-5$$

$$x=\frac{2\pm\sqrt{19}}{3}$$

Those stationary abscissas are about $-0.79$ and $2.12$. The second sits strictly inside $(1,3)$, which Rolle's theorem already required, so the statement is True.""",
    r"""**E.** → False

A root is an input where the graph meets the axis, so test the candidate $x=2$ in the factored cubic.

$$p(2)=(4)(1)(-1)$$

$$p(2)=-4$$

The height is $-4$, not $0$. The three marked crossings are $-2$, $1$ and $3$, and $2$ is none of them, so the statement is False.""",
]

EXPL["math-9-53"] = [
    r"""**A.** → True

A touch at $x=1$ spends an even exponent on $(x-1)$, a crossing at $x=-2$ spends an odd exponent on $(x+2)$, and a monic cubic has only three factors to spend.

$$p(x)=(x-1)^{2}(x+2)$$

$$(x^{2}-2x+1)(x+2)=x^{3}-3x+2$$

The expanded cubic is exactly the formula on the card, so the statement is True.""",
    r"""**B.** → True

A repeated root is always a stationary point of the graph: the factor $(x-1)^{2}$ forces both $p$ and $p'$ to vanish at $x=1$.

$$p(x)=x^{3}-3x+2$$

$$p'(x)=3x^{2}-3$$

$$p'(1)=3-3=0$$

The tangent at the touch is horizontal, so the statement is True.""",
    r"""**C.** → False

A simple crossing need not be flat. Differentiate the same cubic and substitute the crossing $x=-2$.

$$p'(x)=3x^{2}-3$$

$$p'(-2)=3\cdot 4-3=9$$

The slope $9$ is not zero. Only the double root at $1$ is a turning point on the axis, so the statement is False.""",
    r"""**D.** → True

The constant term of a polynomial is its value at $x=0$, which here is the product of the constant pieces of the factors.

$$p(x)=(x-1)^{2}(x+2)$$

$$p(0)=(-1)^{2}(2)=2$$

That leftover $2$ is both $p(0)$ and the constant term of $x^{3}-3x+2$, so the statement is True.""",
    r"""**E.** → False

A nonzero cubic has three roots counting multiplicity, never four distinct real zeros.

$$p(x)=(x-1)^{2}(x+2)$$

The zero set is $\{1,-2\}$: the number $1$ counted twice and the number $-2$ counted once. That is two distinct real roots, not four, so the statement is False.""",
]

EXPL["math-9-54"] = [
    r"""**A.** → False

Finite differences are built from the tabulated row, not guessed. The six samples at unit spacing are

$$1,\ 2,\ 17,\ 82,\ 257,\ 626$$

First differences $1,15,65,175,369$ and second differences $14,50,110,194$ lead to the third row

$$36,\ 60,\ 84$$

Those thirds are not $12,60,180$. The quoted triple belongs to a different table, so the statement is False.""",
    r"""**B.** → True

One more pass on the genuine third differences $36,60,84$ produces the fourth row.

$$60-36=24$$

$$84-60=24$$

The fourth differences are constantly $24$. For a monic quartic sampled at unit spacing that constant must be $4!=24$, matching $p(x)=x^{4}+1$, so the statement is True.""",
    r"""**C.** → False

Read the column under $x=3$ rather than rounding the entry.

$$p(3)=82$$

The closed form that fits every column gives the same height:

$$3^{4}+1=81+1=82$$

The table records $82$, not $80$. Off by two already kills the claim, so the statement is False.""",
    r"""**D.** → False

A cubic sampled at unit spacing would have vanishing fourth differences. These samples do not.

$$24,\ 24$$

That constant $24$ is the signature of a genuine quartic (leading coefficient $1$). Six points from $x^{4}+1$ cannot all lie on a cubic, so the statement is False.""",
    r"""**E.** → True

Test the proposed closed form against the tabulated columns, starting at the ends and at $x=3$.

$$0^{4}+1=1$$

$$3^{4}+1=82$$

$$5^{4}+1=626$$

Every listed height matches $x^{4}+1$, and the constant fourth difference $24$ is the same polynomial's fingerprint, so the statement is True.""",
]

EXPL["math-9-55"] = [
    r"""**A.** → True

A real cubic has odd degree, so its two ends point in opposite directions.

$$p(x)=ax^{3}+\cdots,\qquad a\neq 0$$

If $a>0$ then $p(x)\to-\infty$ as $x\to-\infty$ and $p(x)\to+\infty$ as $x\to+\infty$; if $a<0$ the ends swap. In either case the graph must cross the axis at least once, so the statement is True.""",
    r"""**B.** → False

A nonzero polynomial of degree $3$ has at most three roots, counting multiplicity, so it cannot vanish at four distinct real numbers.

$$x^{3}-x=x(x-1)(x+1)$$

That example already uses the full budget of three distinct real zeros. Adding a fourth distinct root would force a fourth linear factor and raise the degree, so the statement is False.""",
    r"""**C.** → True

Each distinct real root $r$ supplies a real linear factor $x-r$ by the factor theorem. Three distinct real roots therefore spend the whole degree.

$$p(x)=a(x-r)(x-s)(x-t)$$

The remaining factor after two divisions is linear, hence real, and the three linear pieces are exactly the three real roots. The factorisation is entirely over $\mathbb{R}$, so the statement is True.""",
    r"""**D.** → True

A vertical translation adds a constant and can lift a local minimum off the axis or drop a local maximum onto it. Compare

$$x^{3}-3x$$

which has three real zeros, with the shifted cubic

$$x^{3}-3x+3$$

whose local minimum value is $+1$, so only one real root survives. The number of real roots changed, so the statement is True.""",
    r"""**E.** → False

Oddness is the identity $p(-x)=-p(x)$ for every $x$, not a consequence of being cubic. The counterexample $x^{3}+1$ already fails it.

$$p(x)=x^{3}+1$$

$$p(-x)=-x^{3}+1$$

$$-p(x)=-x^{3}-1$$

The two right-hand sides differ (at $x=0$ they are $1$ and $-1$), so not every cubic is odd, and the statement is False.""",
]

EXPL["math-9-57"] = [
    r"""**A.** → True

A monic cubic with zeros $-2$, $0$ and $4$ is uniquely the product of those three linear factors.

$$p(x)=x(x+2)(x-4)$$

$$(x+2)(x-4)=x^{2}-2x-8$$

$$x(x^{2}-2x-8)=x^{3}-2x^{2}-8x$$

The expanded formula is the one on the card, so the statement is True.""",
    r"""**B.** → True

Substitute $x=1$ into the factored cubic rather than expanding first.

$$p(1)=(1)(1+2)(1-4)$$

$$p(1)=(1)(3)(-3)$$

$$p(1)=-9$$

The value is exactly $-9$, so the statement is True.""",
    r"""**C.** → True

The constant term is $p(0)$. One of the three zeros is already $0$, so the factor $x$ kills every leftover constant.

$$p(x)=x^{3}-2x^{2}-8x$$

$$p(0)=0$$

There is no standalone number at the end of the expanded cubic. The constant term is $0$, so the statement is True.""",
    r"""**D.** → False

Add the three given zeros instead of copying a sign from Vieta without looking.

$$-2+0+4=2$$

For a monic cubic the sum of the zeros equals minus the coefficient of $x^{2}$, and that coefficient is $-2$, so the sum is $2$. The card says $-2$, which is the coefficient itself rather than the sum, so the statement is False.""",
    r"""**E.** → False

Evenness would require $p(-x)=p(x)$ identically, which fails as soon as an odd power is present.

$$p(x)=x^{3}-2x^{2}-8x$$

$$p(-x)=-x^{3}-2x^{2}+8x$$

Already $p(1)=-9$ while $p(-1)=(-1)-2+8=5$, so the two sides are unequal. The cubic is not even, so the statement is False.""",
]

EXPL["math-9-58"] = [
    r"""**A.** → True

The cards call the stem polynomial $p$. An odd highest power with a positive lead keeps the sign of $x$ itself for large positive $x$.

$$p(x)=a_{n}x^{n}+\cdots+a_{0}$$

Factor out the highest power, using that $n$ is odd and $a_{n}>0$:

$$p(x)=x^{n}\left(a_{n}+\frac{a_{n-1}}{x}+\cdots+\frac{a_{0}}{x^{n}}\right)$$

The bracket tends to $a_{n}>0$ and $x^{n}\to+\infty$, so $p(x)\to+\infty$ as $x\to+\infty$, and the statement is True.""",
    r"""**B.** → False

An even power stays positive at both ends. With $a_{n}>0$ the far-left end therefore rises, not falls.

$$p(x)=x^{2}\qquad(n=2,\ a_{n}=1)$$

$$\lim_{x\to-\infty}p(x)=+\infty$$

The same holds for any even $n$ and positive lead: $x^{n}\to+\infty$ as $x\to-\infty$, so $p(x)\to+\infty$, not to $-\infty$. The claimed dive is wrong, so the statement is False.""",
    r"""**C.** → True

Putting $x=0$ into a polynomial kills every term that still carries a positive power of $x$, and the leftover is the constant term.

$$p(x)=a_{n}x^{n}+\cdots+a_{1}x+a_{0}$$

$$p(0)=a_{0}$$

That identity is the definition of $a_{0}$, independent of $n$ and of the other coefficients, so the statement is True.""",
    r"""**D.** → False

Odd degree controls the two ends; oddness is the stronger identity $p(-x)=-p(x)$. A single extra even power already breaks it.

$$p(x)=x^{3}+1$$

$$p(-x)=-x^{3}+1\neq -p(x)$$

Here $n=3$ is odd, yet $p$ is not an odd function. The implication from odd degree to oddness fails, so the statement is False.""",
    r"""**E.** → True

The stem writes $p$ (called $f$ in the opening line) with leading term $a_{n}x^{n}$ and $a_{n}\neq 0$, so the highest surviving power is exactly $x^{n}$.

$$p(x)=a_{n}x^{n}+\cdots+a_{0},\qquad a_{n}\neq 0$$

No higher power is present, and the coefficient of $x^{n}$ is nonzero, so that power is genuinely on top. The highest power is $x^{n}$, so the statement is True.""",
]

EXPL["math-9-59"] = [
    r"""**A.** → True

The constant term of the cost polynomial is the cost of producing nothing. Substitute $q=0$ into the given rule.

$$C(q)=\frac{1}{50}q^{3}-\frac{3}{5}q^{2}+4q+10$$

$$C(0)=10$$

The table's first column records the same $10$ €. Both readings agree with the card, so the statement is True.""",
    r"""**B.** → False

Keep the cubic rule, not a round number. Substitute $q=10$.

$$C(10)=\frac{1000}{50}-\frac{3}{5}\cdot 100+40+10$$

$$C(10)=20-60+40+10=10$$

The cost is $10$ €, not $100$ €. (The table's second line lists $90$ at $q=10$, which is a different recording and is still not $100$.) The value $100$ is wrong, so the statement is False.""",
    r"""**C.** → True

The second line is the recorded totals $10,45,90,155,250$. The average cost per unit from $q=0$ to $q=20$ is the whole-run rise divided by $20$.

$$250-10=240$$

$$\frac{240}{20}=12$$

That average is $12$ € per unit, so the statement is True.""",
    r"""**D.** → False

Interval averages on the table are first differences of the totals, each over a block of $5$ units.

$$\frac{35}{5}=7,\quad \frac{45}{5}=9,\quad \frac{65}{5}=13,\quad \frac{95}{5}=19$$

The four averages are $7,9,13,19$ on $[0,5]$, $[5,10]$, $[10,15]$, $[15,20]$. The peak is $19$ on $[15,20]$, not $13$ on $[10,15]$, so the statement is False.""",
    r"""**E.** → True

The highest power is the largest exponent whose coefficient is nonzero. The given rule opens with a cubic term.

$$C(q)=\frac{1}{50}q^{3}-\frac{3}{5}q^{2}+4q+10$$

The coefficient $\frac{1}{50}$ is not zero, and no $q^{4}$ appears. The top power is $q^{3}$, so the statement is True.""",
]

EXPL["math-9-60"] = [
    r"""**A.** → True

A touch at $x=2$ spends an even exponent on $(x-2)$; a crossing at $x=-1$ spends an odd exponent on $(x+1)$. Degree three and a monic lead leave only one possibility.

$$p(x)=(x-2)^{2}(x+1)$$

$$(x^{2}-4x+4)(x+1)=x^{3}-3x^{2}+4$$

The reconstruction is the stated product, so the statement is True.""",
    r"""**B.** → True

The $y$-intercept is $p(0)$, which in factored form is the product of the constant pieces.

$$p(x)=(x-2)^{2}(x+1)$$

$$p(0)=(-2)^{2}(1)=4$$

The expanded cubic $x^{3}-3x^{2}+4$ has the same constant term $4$, so the statement is True.""",
    r"""**C.** → True

A double root is automatically a stationary point. Differentiate the reconstruction and evaluate at the touch.

$$p'(x)=3x^{2}-6x=3x(x-2)$$

$$p'(2)=0$$

The factor $(x-2)$ in $p'$ is inherited from the squared factor in $p$, so the tangent at $x=2$ is horizontal and the statement is True.""",
    r"""**D.** → True

Distinct zeros are the distinct numbers at which $p$ vanishes, ignoring how often each factor is repeated.

$$p(x)=(x-2)^{2}(x+1)$$

The zero set is $\{2,-1\}$. Multiplicity accounts for three roots in total, but only two of those roots are different numbers. Exactly two distinct real zeros appear, so the statement is True.""",
    r"""**E.** → False

The cubic is monic, so the far-right end rises.

$$p(x)=x^{3}-3x^{2}+4$$

$$p(x)=x^{3}\left(1-\frac{3}{x}+\frac{4}{x^{3}}\right)$$

As $x\to+\infty$ the bracket tends to $1$ and $x^{3}\to+\infty$, so $p(x)\to+\infty$, not to $-\infty$. The claimed dive contradicts the positive lead, so the statement is False.""",
]

EXPL["math-9-61"] = [
    r"""**A.** → True

The $y$-intercept of a monic cubic with $x$-intercepts $-1$, $2$ and $4$ is the product of those three numbers with a sign.

$$p(x)=(x+1)(x-2)(x-4)$$

$$p(0)=(1)(-2)(-4)=8$$

The expanded form $x^{3}-5x^{2}+2x+8$ has the same constant term $8$, so the statement is True.""",
    r"""**B.** → True

Between the consecutive zeros $2$ and $4$ a monic cubic dips below the axis. Already the midpoint is negative:

$$p(3)=(4)(1)(-1)=-4$$

The stationary point in $(2,4)$ is a local minimum, and a local minimum sitting below $p(3)=-4$ is certainly negative. The local minimum between $2$ and $4$ is negative, so the statement is True.""",
    r"""**C.** → True

Rolle's theorem places a root of $p'$ in every gap between consecutive zeros, including the gap $(2,4)$.

$$p'(x)=3x^{2}-10x+2$$

$$x=\frac{5\pm\sqrt{19}}{3}$$

The larger root is about $3.12$, which lies in $(2,4)$. So $p'(x)=0$ has a solution in that interval, and the statement is True.""",
    r"""**D.** → False

Evenness would require $p(-x)=p(x)$. A cubic with three zeros not symmetric about the origin cannot be even.

$$p(x)=x^{3}-5x^{2}+2x+8$$

$$p(1)=(2)(-1)(-3)=6,\qquad p(-1)=(0)(-3)(-5)=0$$

Those two values already differ, so $p$ is not even, and the statement is False.""",
    r"""**E.** → True

Add the three marked intercepts.

$$-1+2+4=5$$

For a monic cubic that sum equals minus the coefficient of $x^{2}$. Expanding gives $x^{3}-5x^{2}+\cdots$, and $-(-5)=5$, matching. The sum of the zeros is $5$, so the statement is True.""",
]

EXPL["math-9-62"] = [
    r"""**A.** → True

When the highest powers are unequal, the taller one has nothing of the same degree to cancel against. Write $p=a_{n}x^{n}+\cdots$ and $q=b_{m}x^{m}+\cdots$ with $n>m$ and $a_{n}\neq 0$.

$$p+q=a_{n}x^{n}+\cdots$$

The term $a_{n}x^{n}$ survives, and no higher power is present. The highest power in the sum is $x^{n}$, so the statement is True.""",
    r"""**B.** → True

Leading terms multiply, and the exponents add. With $a_{n}\neq 0$ and $b_{m}\neq 0$ the product of the leads cannot vanish.

$$p\cdot q=a_{n}b_{m}x^{n+m}+\cdots$$

No cancellation of the top term is possible, so the highest power in the product is $x^{n+m}$, and the statement is True.""",
    r"""**C.** → False

Adding polynomials never adds the exponents; that is the product rule. A concrete pair with $n=3$ and $m=1$ separates the two operations.

$$p(x)=x^{3},\qquad q(x)=x$$

$$p+q=x^{3}+x$$

The highest power in the sum is $x^{3}=x^{n}$, not $x^{4}=x^{n+m}$. The claimed exponent $n+m$ belongs to $p\cdot q$, so the statement is False.""",
    r"""**D.** → True

The leading coefficient of $p+q$ is the leading coefficient of $p$, because $q$ has no $x^{n}$ term to mix with it.

$$p+q=a_{n}x^{n}+\cdots$$

If $a_{n}>0$, that surviving lead is positive (the sign of $b_{m}$ is irrelevant). So $p+q$ has a positive leading coefficient, and the statement is True.""",
    r"""**E.** → True

Subtracting $q$ still cannot touch the $x^{n}$ term of $p$, because $q$ has no such term.

$$p-q=a_{n}x^{n}+\cdots$$

The coefficient $a_{n}$ is unchanged and nonzero, so the highest power of $p-q$ remains $x^{n}$ for every such pair, and the statement is True.""",
]

EXPL["math-9-63"] = [
    r"""**A.** → True

Opposite leading coefficients cancel the top power of the sum. With $a+b=0$ and $a\neq 0$,

$$p+q=(a+b)x^{n}+\cdots=0\cdot x^{n}+\cdots$$

Whatever remains has strictly smaller degree (or is the zero polynomial, whose degree is not $n$ either). The highest power in $p+q$ is strictly less than $n$, so the statement is True.""",
    r"""**B.** → True

Subtraction doubles the leading coefficient instead of cancelling it, because $b=-a$.

$$a-b=a-(-a)=2a$$

$$p-q=2ax^{n}+\cdots$$

Since $a\neq 0$, the coefficient $2a$ is nonzero, so the highest power of $p-q$ is still $x^{n}$, and the statement is True.""",
    r"""**C.** → False

Cancelling the top power does not force every lower term to vanish. A concrete pair with $a=1$ and $b=-1$ keeps a linear remainder.

$$p(x)=x^{2}+1,\qquad q(x)=-x^{2}+x$$

$$p+q=x+1$$

That sum is not the zero polynomial. Only the $x^{n}$ terms were required to cancel, so the statement is False.""",
    r"""**D.** → True

The product of the two nonzero leads is nonzero, even though those leads are opposites.

$$ab=a(-a)=-a^{2}\neq 0$$

$$p\cdot q=-a^{2}x^{2n}+\cdots$$

The highest power is $x^{2n}$. Taking $p(x)=x^{2}+1$ and $q(x)=-x^{2}$ gives $-x^{4}-x^{2}$, still degree $4=2n$, so the statement is True.""",
    r"""**E.** → True

The polynomial $-q$ has leading coefficient $-b$. The stem forces $b=-a$, so

$$-b=-(-a)=a$$

That is exactly the leading coefficient of $p$. The two polynomials $p$ and $-q$ therefore open with the same $ax^{n}$, and the statement is True.""",
]

EXPL["math-9-64"] = [
    r"""**A.** → True

Factor out the obvious linear piece and read the remaining quadratic from the sign of $k$.

$$g_{k}(x)=x(x^{2}-k)$$

If $k>0$ then $x^{2}=k$ has two real solutions $\pm\sqrt{k}$, distinct from each other and from $0$. The three zeros $-\sqrt{k}$, $0$, $\sqrt{k}$ are distinct, so the statement is True.""",
    r"""**B.** → False

The parameter value $k=0$ collapses the quadratic factor onto a repeated origin.

$$g_{0}(x)=x^{3}$$

The only real zero is $x=0$, now of multiplicity three. Distinct zeros are counted without multiplicity, so there is one, not three, and the statement is False.""",
    r"""**C.** → True

If $k<0$ then $x^{2}-k=x^{2}+|k|$ is always positive, so it contributes no real root.

$$g_{k}(x)=x(x^{2}-k)$$

The only real solution of $g_{k}(x)=0$ is $x=0$. One real zero (simple) is exactly the count claimed, so the statement is True.""",
    r"""**D.** → False

The leading term is $x^{3}$ for every real $k$. The parameter multiplies only the linear term.

$$g_{k}(x)=x^{3}-kx$$

The coefficient of $x^{3}$ is $1$, independent of $k$. Changing $k$ moves the roots but never the lead, so the statement is False.""",
    r"""**E.** → True

Oddness is the identity $g_{k}(-x)=-g_{k}(x)$. Every term of the family carries an odd power of $x$.

$$g_{k}(-x)=(-x)^{3}-k(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-(x^{3}-kx)=-g_{k}(x)$$

The parameter $k$ rides along untouched, including the case $k=0$ where $g_{0}(x)=x^{3}$. The identity holds for every real $k$, so the statement is True.""",
]

EXPL["math-9-65"] = [
    r"""**A.** → True

A cubic whose leading coefficient is $-1$ dives on the far right, regardless of the three zeros.

$$p(x)=-(x+1)(x-1)(x-3)$$

$$p(x)=-x^{3}+3x^{2}+x-3$$

$$p(x)=-x^{3}\left(1-\frac{3}{x}-\frac{1}{x^{2}}+\frac{3}{x^{3}}\right)$$

As $x\to+\infty$ the bracket tends to $1$, so $p(x)\to-\infty$, and the statement is True.""",
    r"""**B.** → True

One of the three listed zeros is $x=1$, so the factor $(x-1)$ is present and the graph meets the axis there.

$$p(x)=-(x+1)(x-1)(x-3)$$

$$p(1)=-(2)(0)(-2)=0$$

The value is $0$ by construction of the figure, so the statement is True.""",
    r"""**C.** → True

A generic cubic has two turning points, located where the derivative (a quadratic) has two distinct real roots.

$$p'(x)=-3x^{2}+6x+1$$

The discriminant of that quadratic is $36+12=48>0$, so there are two distinct real stationary abscissas. Two turning points appear, so the statement is True.""",
    r"""**D.** → False

The $y$-intercept is the product of the three zeros, with a minus from the leading coefficient $-1$.

$$p(0)=-(1)(-1)(-3)$$

$$p(0)=-3$$

The intercept is negative, so the comparison $p(0)>0$ fails. The graph sits three units below the origin, so the statement is False.""",
    r"""**E.** → False

Multiply the three listed zeros.

$$(-1)\cdot(1)\cdot(3)=-3$$

The product is $-3$, not $0$. A product of zeros is zero only when one of the zeros itself is $0$, and $0$ is not among $-1$, $1$, $3$, so the statement is False.""",
]

EXPL["math-9-66"] = [
    r"""**A.** → True

The graphs meet where their difference vanishes.

$$p(x)-\ell(x)=x(x^{2}-4)-x=x^{3}-5x$$

$$x(x^{2}-5)=0$$

The real solutions are $x=0$ and $x=\pm\sqrt{5}$. That is three meetings, which is certainly at least two, so the statement is True.""",
    r"""**B.** → True

Subtracting the line $\ell(x)=x$ from the cubic $p$ cannot cancel the $x^{3}$ term, because $\ell$ has no such term.

$$p(x)-\ell(x)=x^{3}-5x$$

The result is a cubic (leading coefficient $1$, highest power $x^{3}$). So $p-\ell$ is a cubic polynomial, and the statement is True.""",
    r"""**C.** → False

Evenness would require $p(-x)=p(x)$. This $p$ is in fact odd: it has only odd powers.

$$p(x)=x^{3}-4x$$

$$p(-x)=-x^{3}+4x=-p(x)$$

In particular $p(1)=-3$ while $p(-1)=3\neq p(1)$, so $p$ is not even, and the statement is False.""",
    r"""**D.** → True

A linear function is a polynomial whose highest power is $x^{1}$ (or a constant, which is degree $0$). The second formula is

$$\ell(x)=x$$

That is a degree-$1$ polynomial, the identity map. So $\ell$ is a linear function, and the statement is True.""",
    r"""**E.** → True

Both rules vanish at the origin, so they meet there.

$$p(0)=0\cdot(0-4)=0$$

$$\ell(0)=0$$

$$p(0)=\ell(0)$$

The common value is $0$, which was already one of the three meeting points in letter A, so the statement is True.""",
]

EXPL["math-9-67"] = [
    r"""**A.** → False

Differentiate the throughput cubic and evaluate the derivative at $t=5$. Expand first to make the powers visible.

$$W(t)=\frac{t^{3}}{100}-\frac{3}{10}t^{2}+2t$$

$$W'(t)=\frac{3t^{2}}{100}-\frac{3}{5}t+2$$

$$W'(5)=\frac{75}{100}-3+2=-\frac{1}{4}$$

The slope is negative, so $W'(5)>0$ fails, and the statement is False.""",
    r"""**B.** → True

Substitute $t=5$ into the factored rule.

$$W(5)=\frac{5(25-150+200)}{100}$$

$$W(5)=\frac{5\cdot 75}{100}=\frac{375}{100}=\frac{15}{4}$$

The value is exactly $\frac{15}{4}$, so the statement is True.""",
    r"""**C.** → True

Clear the denominator and read the largest exponent whose coefficient survives.

$$W(t)=\frac{1}{100}t^{3}-\frac{3}{10}t^{2}+2t$$

The coefficient of $t^{3}$ is $\frac{1}{100}\neq 0$, and no higher power appears. The highest power of $t$ in $W$ is $t^{3}$, so the statement is True.""",
    r"""**D.** → True

The factored model has a factor of $t$ in the numerator, so the origin is a root.

$$W(0)=\frac{0\cdot(0-0+200)}{100}=0$$

Producing nothing at time $0$ records throughput $0$. The value is $0$, so the statement is True.""",
    r"""**E.** → False

A quadratic function has highest power $t^{2}$. This model has a genuine cubic term.

$$W(t)=\frac{1}{100}t^{3}-\frac{3}{10}t^{2}+2t$$

The $t^{3}$ coefficient $\frac{1}{100}$ is not zero, so $W$ is cubic, not quadratic. Letter C already identified the top power as $t^{3}$, so the statement is False.""",
]

EXPL["math-9-68"] = [
    r"""**A.** → True

Read the column under $x=1$ on the tabulated row.

$$p(1)=2$$

The same height comes from the closed form that fits every column:

$$1^{3}+1=2$$

The table lists $2$ at $x=1$, so the statement is True.""",
    r"""**B.** → False

First differences of a linear table would be constant. These five samples produce

$$2-1=1,\quad 9-2=7,\quad 28-9=19,\quad 65-28=37$$

$$1,\ 7,\ 19,\ 37$$

Those jumps grow, so the first differences are not constant and the source is not a straight line, and the statement is False.""",
    r"""**C.** → True

The last tabulated column sits under $x=4$ and records $65$.

$$p(4)=65$$

Checking the closed form that matches the whole row:

$$4^{3}+1=64+1=65$$

The table and the cubic $x^{3}+1$ agree at $x=4$, so the statement is True.""",
    r"""**D.** → True

Compare each listed height with $x^{3}+1$.

$$0^{3}+1=1,\quad 1^{3}+1=2,\quad 2^{3}+1=9$$

$$3^{3}+1=28,\quad 4^{3}+1=65$$

The five samples are exactly the values of $x^{3}+1$. Third differences of the table are constantly $6=3!$, the fingerprint of a monic cubic, so the statement is True.""",
    r"""**E.** → False

A linear polynomial would need constant first differences. The first differences $1,7,19,37$ already grow, and the third differences settle at $6$, the signature of a cubic.

$$p(x)=x^{3}+1$$

That is degree $3$, not degree $1$. The samples are not collinear, so the statement is False.""",
]

EXPL["math-9-69"] = [
    r"""**A.** → True

A double root at $x=1$ and a simple root at $x=-3$, together with a monic lead, pin the cubic down completely.

$$p(x)=(x-1)^{2}(x+3)$$

$$(x^{2}-2x+1)(x+3)=x^{3}+x^{2}-5x+3$$

The reconstruction is the stated product, so the statement is True.""",
    r"""**B.** → True

A double root is a stationary point. Differentiate the reconstruction (or the expanded cubic) and evaluate at $x=1$.

$$p'(x)=3x^{2}+2x-5$$

$$p'(1)=3+2-5=0$$

The tangent at the double root is horizontal, so the statement is True.""",
    r"""**C.** → False

A simple root need not be flat. Substitute $x=-3$ into the same derivative.

$$p'(x)=3x^{2}+2x-5$$

$$p'(-3)=3\cdot 9+2\cdot(-3)-5=27-6-5=16$$

The slope $16$ is not zero. Only the double root at $1$ forces $p'=0$ on the axis, so the statement is False.""",
    r"""**D.** → True

The constant term is $p(0)$, which in factored form is the product of the constant pieces.

$$p(x)=(x-1)^{2}(x+3)$$

$$p(0)=(-1)^{2}(3)=3$$

The expanded cubic $x^{3}+x^{2}-5x+3$ ends with that same $3$, so the statement is True.""",
    r"""**E.** → True

Count the double root twice: the multiplicity-weighted sum is $1+1+(-3)$.

$$1+1-3=-1$$

Vieta gives the same number as minus the coefficient of $x^{2}$ in $x^{3}+x^{2}-5x+3$, and $-1=-1$. The weighted sum is $-1$, so the statement is True.""",
]

EXPL["math-9-70"] = [
    r"""**A.** → True

Squaring a quadratic produces a quartic, and subtracting $p$ cannot cancel the new $x^{4}$ term.

$$p(x)=x^{2}-2x+3$$

$$r(x)=p(x)^{2}-p(x)=(x^{2}-2x+3)^{2}-(x^{2}-2x+3)$$

The lead of $p^{2}$ is $(x^{2})^{2}=x^{4}$. So the highest power of $x$ in $r$ is $x^{4}$, and the statement is True.""",
    r"""**B.** → True

Factor $r$ as a difference of the form $u^{2}-u$.

$$r(x)=p(x)^{2}-p(x)=p(x)\bigl(p(x)-1\bigr)$$

That identity is purely algebraic and does not use the coefficients of $p$. The factorisation on the card is exactly $p(p-1)$, so the statement is True.""",
    r"""**C.** → True

Evaluate $p$ at $0$ first, then form $r(0)=p(0)(p(0)-1)$.

$$p(0)=3$$

$$r(0)=3\cdot(3-1)=6$$

Direct expansion $r(x)=x^{4}-4x^{3}+9x^{2}-10x+6$ has the same constant term $6$, so the statement is True.""",
    r"""**D.** → True

The product $p(p-1)$ vanishes only if $p=0$ or $p=1$. Complete the square for both.

$$p(x)=(x-1)^{2}+2\ge 2$$

$$p(x)-1=(x-1)^{2}+1\ge 1$$

Both pieces stay strictly positive for every real $x$, so $r$ never hits zero on $\mathbb{R}$. There are no real zeros, so the statement is True.""",
    r"""**E.** → False

The leading coefficient of $r$ is the square of the leading coefficient of $p$, which is $1$.

$$p(x)=x^{2}+\cdots$$

$$r(x)=(x^{2})^{2}+\cdots=x^{4}+\cdots$$

The coefficient of $x^{4}$ is $1$, not $2$. Expanding confirms $r(x)=x^{4}-4x^{3}+9x^{2}-10x+6$, so the statement is False.""",
]

EXPL["math-9-71"] = [
    r"""**A.** → True

The stem already writes this exact quartic, so the card restates the given formula coefficient by coefficient.

$$p(x)=x^{4}-5x^{2}+4$$

Every power on the card agrees with the stem: lead $1$ on $x^{4}$, no $x^{3}$, coefficient $-5$ on $x^{2}$, constant $4$. The two writings are identical, so the statement is True.""",
    r"""**B.** → True

Evenness is the identity $p(-x)=p(x)$. Only even powers appear, so substituting $-x$ changes nothing.

$$p(-x)=(-x)^{4}-5(-x)^{2}+4$$

$$p(-x)=x^{4}-5x^{2}+4=p(x)$$

The graph is symmetric about the $y$-axis, so $p$ is even, and the statement is True.""",
    r"""**C.** → True

Treat the quartic as a quadratic in $x^{2}$ and factor.

$$p(x)=(x^{2}-1)(x^{2}-4)$$

$$p(x)=(x-1)(x+1)(x-2)(x+2)$$

The four zeros are $-2,-1,1,2$, four distinct real numbers. The zero set has four elements, so the statement is True.""",
    r"""**D.** → True

An even degree with a positive leading coefficient rises at both ends.

$$p(x)=x^{4}\left(1-\frac{5}{x^{2}}+\frac{4}{x^{4}}\right)$$

As $x\to\pm\infty$ the bracket tends to $1$ and $x^{4}\to+\infty$, so $p(x)\to+\infty$ at both infinities. The claimed end behaviour holds, so the statement is True.""",
    r"""**E.** → False

A cubic function has highest power $x^{3}$. This polynomial opens with $x^{4}$.

$$p(x)=x^{4}-5x^{2}+4$$

The coefficient of $x^{4}$ is $1\neq 0$, so the degree is $4$. A quartic is not a cubic, so the statement is False.""",
]

EXPL["math-9-72"] = [
    r"""**A.** → True

For $c=0$ the shifted graph is $p$ itself. Factor and read the zeros.

$$q(x)=x(x^{2}-3)$$

$$x=0,\qquad x=\pm\sqrt{3}$$

Those three real numbers are distinct. So $c=0$ gives three real zeros, and the statement is True.""",
    r"""**B.** → False

A vertical shift $q=p+c$ does not change the derivative, so the stationary abscissas cannot move with $c$.

$$q'(x)=p'(x)=3x^{2}-3$$

$$x=\pm 1$$

Those two abscissas are independent of $c$. Adding a constant raises or lowers the graph but does not slide the peaks left or right, so the statement is False.""",
    r"""**C.** → True

The local maximum of $p$ is $p(-1)=2$ and the local minimum is $p(1)=-2$. Shifting by more than $2$ lifts the local maximum off the axis or drops the local minimum below it.

$$q(x)=x^{3}-3x+c$$

For $c=3$, the local maximum value is $5>0$ and the local minimum value is $1>0$, so only the far-left end still crosses. Such a $c$ exists, so the statement is True.""",
    r"""**D.** → True

Oddness is $p(-x)=-p(x)$. The given cubic has only odd powers.

$$p(x)=x^{3}-3x$$

$$p(-x)=-x^{3}+3x=-p(x)$$

The identity holds on the whole line (and $p(0)=0$ as oddness requires), so $p$ is odd, and the statement is True.""",
    r"""**E.** → False

Adding a nonzero constant destroys oddness, because an odd function must vanish at the origin.

$$q(0)=p(0)+c=c$$

If $c\neq 0$ then $q(0)\neq 0$, so $q$ is not odd. Even a tiny shift such as $c=1$ gives $q(x)=x^{3}-3x+1$, which fails $q(-x)=-q(x)$. The universal claim is false, so the statement is False.""",
]

EXPL["math-9-73"] = [
    r"""**A.** → True

Unequal top powers cannot cancel in a sum. With $n>m$ the $x^{n}$ term of $p$ has no partner in $q$.

$$p+q=a_{n}x^{n}+\cdots$$

The coefficient $a_{n}$ is nonzero and no higher power appears, so the highest power in $p+q$ is $x^{n}$, and the statement is True.""",
    r"""**B.** → True

Leading terms multiply and exponents add. Neither lead is zero, so the top term of the product survives.

$$p\cdot q=a_{n}b_{m}x^{n+m}+\cdots$$

A concrete check: $x^{3}\cdot x^{2}=x^{5}$ with $n+m=5$. The highest power in the product is $x^{n+m}$, so the statement is True.""",
    r"""**C.** → False

The exponent $n+m$ is the product rule, not the sum rule. Take $n=2$ and $m=1$.

$$p(x)=x^{2},\qquad q(x)=x$$

$$p+q=x^{2}+x$$

The highest power in the sum is $x^{2}=x^{n}$, not $x^{3}=x^{n+m}$. Adding never adds the exponents, so the statement is False.""",
    r"""**D.** → True

The leading coefficient of the sum is $a_{n}$, because $q$ contributes nothing at degree $n$.

$$p+q=a_{n}x^{n}+\cdots$$

If $a_{n}>0$ that surviving lead is positive, whatever the sign of $b_{m}$. So $p+q$ has a positive leading coefficient, and the statement is True.""",
    r"""**E.** → True

Subtracting a strictly lower-degree polynomial leaves the top term of $p$ untouched.

$$p-q=a_{n}x^{n}+\cdots$$

Since $a_{n}\neq 0$, the highest power of $p-q$ is always $x^{n}$ under the hypothesis $n>m$, so the statement is True.""",
]

EXPL["math-9-74"] = [
    r"""**A.** → True

Factor the family and split according to the sign of $k$.

$$g_{k}(x)=x(x^{2}-k)$$

When $k>0$ the quadratic $x^{2}-k$ has two real roots $\pm\sqrt{k}$, distinct from $0$. The three zeros $-\sqrt{k}$, $0$, $\sqrt{k}$ are distinct, so the statement is True.""",
    r"""**B.** → False

Setting $k=0$ removes the linear term and leaves a pure cube.

$$g_{0}(x)=x^{3}$$

The equation $x^{3}=0$ has the single real solution $x=0$, of multiplicity three. Distinct real zeros number one, not three, so the statement is False.""",
    r"""**C.** → True

A negative parameter makes $x^{2}-k$ a sum of squares, hence always positive.

$$k<0\implies x^{2}-k=x^{2}+|k|>0$$

Then $g_{k}(x)=x(x^{2}-k)$ vanishes only at $x=0$. Exactly one real zero remains, so the statement is True.""",
    r"""**D.** → False

The parameter $k$ multiplies $x$, never $x^{3}$. The leading coefficient is identically $1$.

$$g_{k}(x)=x^{3}-kx$$

Whether $k=4$ or $k=-7$, the cubic still opens with $x^{3}$. The lead does not depend on $k$, so the statement is False.""",
    r"""**E.** → True

Check the oddness identity with the parameter still in place.

$$g_{k}(-x)=-x^{3}+kx=-(x^{3}-kx)=-g_{k}(x)$$

Every term has odd degree, so the identity holds for every real $k$, including $k=0$. The family is odd for every real $k$, so the statement is True.""",
]


def honest_key(task_id: str, index: int, original: bool) -> bool:
    return KEY_FIXES.get((task_id, index), original)


def validate_text(task_id: str, index: int, key: bool, text: str) -> list[str]:
    problems: list[str] = []
    label = f"{task_id}.{LETTERS[index]}"
    verdict = "True" if key else "False"
    if not text.startswith(f"**{LETTERS[index]}.** \u2192 {verdict}"):
        problems.append(f"{label}: header does not match key ({verdict})")
    if not text.endswith(f", so the statement is {verdict}."):
        problems.append(f"{label}: closing line missing or wrong verdict")
    if "$$ $$" in text or "$$$$" in text:
        problems.append(f"{label}: empty display")
    displays = re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)
    if not displays:
        problems.append(f"{label}: no display math")
    for display in displays:
        if not display.strip():
            problems.append(f"{label}: empty display")
        if "\n" in display:
            problems.append(f"{label}: newline inside a display")
    for i in range(len(displays) - 1):
        if displays[i] == displays[i + 1]:
            problems.append(f"{label}: consecutive identical displays")
    for pattern in BANNED:
        if re.search(pattern, text):
            problems.append(f"{label}: banned phrase {pattern!r}")
    opener = re.findall(r"\u2192 (?:True|False)\n\n(.+)", text)
    if not opener:
        problems.append(f"{label}: no narrative opener after the header")
    return problems


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    missing = [tid for tid in BATCH_IDS if tid not in by_id]
    if missing:
        raise SystemExit(f"missing tasks in bank: {missing}")
    missing_expl = [tid for tid in BATCH_IDS if tid not in EXPL]
    if missing_expl:
        raise SystemExit(f"no explanations authored for: {missing_expl}")

    problems: list[str] = []
    lengths: list[int] = []
    short_long: list[str] = []

    for task_id in BATCH_IDS:
        task = by_id[task_id]
        bodies = [block.strip() for block in EXPL[task_id]]
        if len(bodies) != 5:
            raise SystemExit(f"{task_id}: expected 5 explanations, got {len(bodies)}")
        new_key = [
            honest_key(task_id, i, bool(task["answer_key"][i])) for i in range(5)
        ]
        for i, (key, text) in enumerate(zip(new_key, bodies)):
            problems.extend(validate_text(task_id, i, key, text))
            lengths.append(len(text))
            if not (350 <= len(text) <= 700):
                short_long.append(f"{task_id}.{LETTERS[i]}: length {len(text)}")
        first_lines = [re.split(r"\n\n", text, maxsplit=2)[1] for text in bodies]
        if len(set(first_lines)) < 5:
            problems.append(f"{task_id}: repeated openers across letters")
        displays = [tuple(re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)) for text in bodies]
        if len(set(displays)) < 4:
            problems.append(f"{task_id}: repeated display sequences across letters")
        task["answer_key"] = new_key
        task["tactical_explanations"] = bodies

    if problems:
        raise SystemExit("validation failed:\n" + "\n".join(problems))

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    print(f"tasks rewritten: {len(BATCH_IDS)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median explanation length: {int(statistics.median(lengths))} characters")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections applied: {len(KEY_FIXES)}")
    if short_long:
        print("length notes (target 350-700):")
        for line in short_long:
            print(" ", line)
    print("KEY_FIXES:")
    for (tid, idx), val in KEY_FIXES.items():
        print(f"  {tid} {LETTERS[idx]} -> {val}")


if __name__ == "__main__":
    main()
