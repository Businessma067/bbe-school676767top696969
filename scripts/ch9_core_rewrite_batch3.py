#!/usr/bin/env python3
"""Rewrite tactical explanations for Chapter 9 core bank, batch 3 (math-9-75..96).

Style target: Chapter 4 (src/data/math-ch4-cases.json) and the rewritten mixed
exam in src/data/math-ch9-mixed-exam.json. Each letter opens with a narrative
sentence, alternates one-formula displays with connecting prose, and closes
with ", so the statement is True/False."

Stems and statement wordings are left untouched. Answer keys that contradict
the algebra are corrected in KEY_FIXES so the write-ups can stay honest.

Run: python3 scripts/ch9_core_rewrite_batch3.py
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

TARGET_IDS = [f"math-9-{n}" for n in range(75, 97)]
LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "rewritten claim restates",
    "yes-or-no decision",
    "read the stem fully",
    "stem-fully",
    "translate words",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
    "The stem produces",
    "Retargeted",
    "A solver who",
    "rushed solver",
    "Watch.",
    "Trap:",
    "—",
]

# (task id, statement index) -> corrected truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-75", 1): True,    # 2 is a listed zero, so p(2)=0
    ("math-9-75", 2): True,    # three distinct real zeros force two turns
    ("math-9-75", 4): True,    # 0*2*5 = 0
    ("math-9-77", 3): True,    # R(0)=0
    ("math-9-78", 4): False,   # table matches 3x^2-x+2, not a line
    ("math-9-79", 2): False,   # simple root: p'(-1)=9
    ("math-9-80", 1): True,    # r = p(p-1) identically
    ("math-9-80", 2): True,    # r(0)=0
    ("math-9-82", 2): True,    # |c| > 2*sqrt(3)/9 gives one real zero
    ("math-9-83", 3): True,    # lead of p+q is a_n > 0
    ("math-9-83", 4): True,    # n>m, so p-q keeps x^n
    ("math-9-84", 4): True,    # lead(-q) = -b = a
    ("math-9-85", 3): False,   # leading coefficient is always 1
    ("math-9-86", 3): False,   # p(0)=0, so not p(0)>0
    ("math-9-88", 3): True,    # H(0)=0
    ("math-9-90", 3): False,   # leading coefficient is always 1
    ("math-9-92", 3): False,   # leading coefficient is always 1
    ("math-9-93", 1): False,   # k=0 gives x^3, one distinct zero
    ("math-9-93", 3): False,   # leading coefficient is always 1
    ("math-9-94", 2): True,    # k<0 leaves only x=0
    ("math-9-94", 4): True,    # odd for every real k
    ("math-9-95", 4): True,    # odd for every real k
    ("math-9-96", 3): True,    # p(0)=6>0
}

EXPL: dict[str, list[str]] = {}

# ---------------------------------------------------------------------------
# math-9-75  Downward cubic, zeros 0, 2, 5, lead -1
# p(x) = -x(x-2)(x-5) = -x^3 + 7x^2 - 10x
# Honest key: T T T F T
# ---------------------------------------------------------------------------
EXPL["math-9-75"] = [
    r"""
Far out on the right a cubic is dominated by its leading term, and the figure fixes that term as $-x^{3}$.

$$p(x)=-x(x-2)(x-5)$$

$$p(x)=-x^{3}+7x^{2}-10x$$

Dividing through by $x^{3}$ leaves $-1+\frac{7}{x}-\frac{10}{x^{2}}$, which tends to $-1$, so for large positive $x$ the sign of $p$ matches the sign of $-x^{3}$.

$$\lim_{x\to+\infty}p(x)=-\infty$$

An odd highest power with a negative coefficient therefore falls on the far right, so the statement is True.
""",
    r"""
A listed zero is an input where the graph meets the axis, which here means a linear factor vanishes.

$$p(x)=-x(x-2)(x-5)$$

$$p(2)=-2\cdot 0\cdot(-3)$$

$$p(2)=0$$

The middle factor is zero, so the whole product is zero independently of the remaining factors and of the leading $-1$. The expanded check $-8+28-20=0$ gives the same height. The graph crosses at $x=2$, so the statement is True.
""",
    r"""
Three distinct axis crossings force a turn in each open interval between them.

$$p'(x)=-3x^{2}+14x-10$$

$$14^{2}-4\cdot 3\cdot 10=76$$

The discriminant is positive, so the quadratic $p'$ has two distinct real roots, and a cubic cannot have more than two. Rolle's theorem already places one stationary point in $(0,2)$ and one in $(2,5)$. Two turning points occur, so the statement is True.
""",
    r"""
The height at the origin is the constant term, and one of the three zeros is $0$ itself.

$$p(x)=-x(x-2)(x-5)$$

$$p(0)=0$$

A strict inequality $p(0)>0$ would need a positive intercept. Expanding gives $p(x)=-x^{3}+7x^{2}-10x$, whose constant term is $0$, so the graph passes through the origin rather than sitting above it. The value $0$ is not greater than $0$, so the statement is False.
""",
    r"""
The three zeros marked on the figure are $0$, $2$ and $5$; the product of a list that contains $0$ is $0$.

$$0\cdot 2\cdot 5=0$$

$$p(x)=-x^{3}+7x^{2}-10x$$

Vieta agrees: for $p(x)=-x^{3}+\cdots$ the constant term is $0$, which is $(-1)^{3}$ times the leading coefficient times the product of the zeros. The product is $0$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-76  p(x)=x^3-x against ell(x)=x^2-1
# Honest key: T T F F F
# ---------------------------------------------------------------------------
EXPL["math-9-76"] = [
    r"""
Meetings are the real roots of the difference $p-\ell$, so subtract the two rules and factor.

$$p(x)-\ell(x)=x^{3}-x-(x^{2}-1)$$

$$p(x)-\ell(x)=x^{3}-x^{2}-x+1$$

$$(x-1)^{2}(x+1)=0$$

The roots are $x=1$ (a double meeting) and $x=-1$ (a simple crossing). Checking the original pair: $p(1)=0=\ell(1)$ and $p(-1)=-(-1)-1=0=\ell(-1)$. That is already two distinct real abscissas, so the statement is True.
""",
    r"""
The highest power of a difference is the highest power that does not cancel, and here the two leading terms are $x^{3}$ and $x^{2}$.

$$p(x)-\ell(x)=x^{3}-x^{2}-x+1$$

The cubic term survives because $\ell$ has no $x^{3}$ to cancel it, while every lower power is allowed to remain.

$$x^{3}$$

A polynomial whose top surviving power is $x^{3}$ is cubic, so the statement is True.
""",
    r"""
Evenness is the identity $p(-x)=p(x)$ on the whole line, so substitute $-x$ and compare.

$$p(-x)=(-x)^{3}-(-x)$$

$$p(-x)=-x^{3}+x$$

$$p(-x)=-(x^{3}-x)=-p(x)$$

The two sides are opposites, which is the odd test, not the even one. A numerical check: $p(2)=8-2=6$ while $p(-2)=-8+2=-6\neq 6$. Only odd powers appear in $x^{3}-x$, so $p$ is odd rather than even, so the statement is False.
""",
    r"""
A linear function has highest power $x^{1}$, so read the written rule for $\ell$ by descending powers.

$$\ell(x)=x^{2}-1$$

The top term is $x^{2}$, with leading coefficient $1$, and there is no linear term at all.

$$x^{2}$$

Evaluating at two points shows the bend: $\ell(0)=-1$ and $\ell(2)=3$. A line has highest power $x^{1}$, but the written top term is $x^{2}$. A polynomial whose highest power is $x^{2}$ is quadratic, not linear, so the statement is False.
""",
    r"""
Two graphs have the same height at $x=0$ only if their constant terms agree.

$$p(0)=0^{3}-0=0$$

$$\ell(0)=0^{2}-1=-1$$

$$0=-1$$

The cubic passes through the origin while the parabola sits one unit below it. Even a nearby check $p(1)=0$ against $\ell(1)=0$ is a meeting elsewhere, not at $x=0$. The two values at $0$ are different, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-77  Stall revenue R(n)=n(-n^2+60n+200)/20
# Honest key: T T T T F
# ---------------------------------------------------------------------------
EXPL["math-9-77"] = [
    r"""
Revenue increases at a named input when the derivative is positive there, so expand $R$ and differentiate.

$$R(n)=\frac{-n^{3}+60n^{2}+200n}{20}$$

$$R'(n)=\frac{-3n^{2}+120n+200}{20}$$

$$R'(8)=\frac{-192+960+200}{20}=\frac{242}{5}$$

The value $\frac{242}{5}$ is positive, so the model is still climbing at $n=8$, so the statement is True.
""",
    r"""
Substitute $n=8$ into the factored model rather than estimating from a sketch.

$$R(8)=\frac{8\bigl(-64+480+200\bigr)}{20}$$

$$R(8)=\frac{8\cdot 616}{20}=\frac{4928}{20}$$

$$R(8)=\frac{1232}{5}$$

Cancel a factor of $4$ in the fraction: $4928\div 4=1232$ and $20\div 4=5$, so the value is $\frac{1232}{5}$. The exact value is the quoted fraction, so the statement is True.
""",
    r"""
The highest power is the largest exponent whose coefficient survives after the constant $20$ is distributed.

$$R(n)=-\frac{1}{20}n^{3}+3n^{2}+10n$$

The $n^{3}$ term has coefficient $-\frac{1}{20}\neq 0$, so it is not cancelled by anything in the numerator.

$$n^{3}$$

No higher power appears, and the cubic term is present, so the statement is True.
""",
    r"""
The constant term of a polynomial is its value at $0$, and this model has an explicit factor of $n$.

$$R(n)=\frac{n(-n^{2}+60n+200)}{20}$$

$$R(0)=\frac{0\cdot 200}{20}=0$$

With no sales the predicted revenue is zero. Expanding gives $R(n)=-\frac{1}{20}n^{3}+3n^{2}+10n$, which has no constant term, so $R(0)=0$ identically. The value is $0$, so the statement is True.
""",
    r"""
A quadratic function has highest power $n^{2}$ and nothing above it, so look at the expanded rule.

$$R(n)=-\frac{1}{20}n^{3}+3n^{2}+10n$$

The cubic term is present with a nonzero coefficient, so the graph is not a parabola.

$$-\frac{1}{20}n^{3}$$

A model whose top power is $n^{3}$ is cubic rather than quadratic, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-78  Table: 2,4,12,26,46,72 fits 3x^2-x+2
# Honest key: T F T T F
# ---------------------------------------------------------------------------
EXPL["math-9-78"] = [
    r"""
Read the column whose argument is $x=1$ directly from the table, then confirm against the proposed closed form.

$$p(1)=4$$

The same number comes from substituting into $3x^{2}-x+2$.

$$3\cdot 1^{2}-1+2=4$$

The neighbouring columns agree as well: $p(0)=2$ and $p(2)=12$ sit on either side of this height $4$. Both routes give $4$, matching the listed height, so the statement is True.
""",
    r"""
On unit spacing a linear source would make the first differences a constant row, so subtract consecutive outputs.

$$4-2=2,\quad 12-4=8,\quad 26-12=14$$

$$46-26=20,\quad 72-46=26$$

Those jumps $2,8,14,20,26$ grow by $6$ each time; a constant first-difference row would be required for a line. The first differences are not constant, so the statement is False.
""",
    r"""
The last tabulated argument is $x=5$, and the last listed height is $72$.

$$p(5)=72$$

The closed form $3x^{2}-x+2$ reproduces that column independently.

$$3\cdot 25-5+2=72$$

A neighbouring check $p(4)=46$ from both the table and $3\cdot 16-4+2$ sits next to this last column. The table and the algebraic rule agree on $72$, so the statement is True.
""",
    r"""
Check the proposed quadratic against every tabulated column rather than against a single point.

$$3\cdot 0^{2}-0+2=2$$

$$3\cdot 4^{2}-4+2=46$$

$$3\cdot 25-5+2=72$$

The remaining columns $x=1,2,3$ likewise return $4$, $12$ and $26$. Second differences of the table are constantly $6$, matching $2!\cdot 3$ for this leading coefficient. Every listed height matches $3x^{2}-x+2$, so the statement is True.
""",
    r"""
A linear model needs constant first differences, but the second differences of this table have already settled.

$$8-2=6,\quad 14-8=6,\quad 20-14=6,\quad 26-20=6$$

Constant second differences of $6$ are the signature of a quadratic with leading coefficient $3$, since $2\cdot 3=6$ on unit spacing.

$$p(x)=3x^{2}-x+2$$

The samples come from a parabola, not from a line, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-79  Monic cubic, double root 2, simple root -1
# p(x)=(x-2)^2(x+1)=x^3-3x^2+4
# Honest key: T T F T T
# ---------------------------------------------------------------------------
EXPL["math-9-79"] = [
    r"""
A monic cubic is uniquely fixed by its roots with multiplicity: a square at $2$ and a simple factor at $-1$.

$$p(x)=(x-2)^{2}(x+1)$$

$$(x^{2}-4x+4)(x+1)=x^{3}+x^{2}-4x^{2}-4x+4x+4$$

$$p(x)=x^{3}-3x^{2}+4$$

Any other cubic with this root pattern would be a constant multiple, and monic normalisation forces that constant to be $1$. The reconstruction is the stated product, so the statement is True.
""",
    r"""
A root of multiplicity at least two is always a root of the derivative, so differentiate the product.

$$p'(x)=2(x-2)(x+1)+(x-2)^{2}$$

$$p'(x)=(x-2)\bigl(2x+2+x-2\bigr)=(x-2)\cdot 3x$$

$$p'(2)=0$$

The factor $(x-2)$ remains in $p'$, so the tangent at the double root is horizontal. Expanding $p'(x)=3x^{2}-6x$ and substituting $x=2$ likewise gives $12-12=0$. The derivative vanishes at $x=2$, so the statement is True.
""",
    r"""
A simple root has no reason to be stationary: the leftover factor of $p'$ need not vanish there.

$$p'(x)=3x(x-2)$$

$$p'(-1)=3(-1)(-3)=9$$

The horizontal tangents sit at $x=0$ and at the double root $x=2$, not at $x=-1$. Expanding $p'(x)=3x^{2}-6x$ gives $p'(-1)=3+6=9$ by the same arithmetic. The slope at the simple zero is $9$, not $0$, so the statement is False.
""",
    r"""
The constant term is the height at $x=0$, which can be read from the factors without expanding.

$$p(0)=(-2)^{2}(1)=4$$

The expanded form $x^{3}-3x^{2}+4$ displays the same constant $4$, and Vieta agrees: $(-1)^{3}\cdot 2\cdot 2\cdot(-1)=4$. A nearby value $p(1)=(1-2)^{2}(2)=-2$ is not the constant term. The constant term is $4$, so the statement is True.
""",
    r"""
Vieta counts each root as often as its multiplicity, and the double root at $2$ must be added twice.

$$2+2+(-1)=3$$

For a monic cubic that sum equals minus the coefficient of $x^{2}$.

$$-(-3)=3$$

Both routes give $3$, matching the multiplicity-weighted sum of the roots. Counting without multiplicity would give the unweighted total $2+(-1)=1$, which is the wrong tally here. The weighted sum is $3$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-80  p=x^2+x+1, r=p^2-p
# Honest key: T T T F F
# ---------------------------------------------------------------------------
EXPL["math-9-80"] = [
    r"""
Squaring a quadratic produces a quartic, and subtracting $p$ cannot cancel that top term.

$$p(x)=x^{2}+x+1$$

$$r(x)=(x^{2}+x+1)^{2}-(x^{2}+x+1)$$

$$r(x)=x^{4}+2x^{3}+2x^{2}+x$$

The leading piece of the square is $(x^{2})^{2}=x^{4}$, with coefficient $1$, and $p$ has no $x^{4}$ to cancel it. The highest power of $r$ is $x^{4}$, so the statement is True.
""",
    r"""
Factor $r$ by taking out the common $p$, which is an algebraic identity rather than a special feature of this quadratic.

$$r(x)=p(x)^{2}-p(x)$$

$$r(x)=p(x)\bigl(p(x)-1\bigr)$$

Expanding the right-hand side returns $p^{2}-p$, exactly the definition in the stem.

$$p(p-1)=p^{2}-p$$

The two expressions are identical as polynomials, so the statement is True.
""",
    r"""
The value at $0$ is the constant term of $r$, and it can be read from $p(0)$ without expanding the quartic.

$$p(0)=1$$

$$r(0)=1^{2}-1=0$$

Equivalently, $r(0)=p(0)\bigl(p(0)-1\bigr)=1\cdot 0=0$. Either way the graph of $r$ meets the origin.

$$r(x)=x(x+1)(x^{2}+x+1)$$

The factor $x$ makes $r(0)=0$ visible, so the statement is True.
""",
    r"""
A real zero of $r$ is a real zero of $p$ or of $p-1$, so inspect the two factors separately.

$$p(x)-1=x^{2}+x=x(x+1)$$

$$x(x+1)=0$$

The roots $x=0$ and $x=-1$ are real, and $p(x)=x^{2}+x+1$ itself has negative discriminant $1-4=-3$ so it never vanishes. Still, $r$ already vanishes at $0$ and at $-1$. Real zeros exist, so the statement is False.
""",
    r"""
The leading coefficient of a square is the square of the inner lead, and here that inner lead is $1$.

$$r(x)=x^{4}+2x^{3}+2x^{2}+x$$

The coefficient of $x^{4}$ is $1$, coming from $(x^{2})^{2}$. A leading $2$ would require $p$ to start with $\sqrt{2}\,x^{2}$ or a similar rescaling, which it does not.

$$1\neq 2$$

The leading coefficient of $r$ is $1$, not $2$, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-81  p(x)=x^4-10x^2+9
# Honest key: T T T T F
# ---------------------------------------------------------------------------
EXPL["math-9-81"] = [
    r"""
The stem already writes $p$ in descending even powers; factoring as a quadratic in $x^{2}$ recovers the same coefficients.

$$p(x)=x^{4}-10x^{2}+9$$

$$p(x)=(x^{2}-1)(x^{2}-9)$$

$$p(x)=(x-1)(x+1)(x-3)(x+3)$$

Expanding the four linear factors returns $x^{4}-10x^{2}+9$ with nothing left over. The displayed rule is exactly $p$, so the statement is True.
""",
    r"""
Evenness is the identity $p(-x)=p(x)$, and a polynomial of only even powers satisfies it automatically.

$$p(-x)=(-x)^{4}-10(-x)^{2}+9$$

$$p(-x)=x^{4}-10x^{2}+9$$

$$p(-x)=p(x)$$

Every exponent here is even, so substituting $-x$ changes nothing. A numerical check $p(2)=16-40+9=-15=p(-2)$ agrees. The graph is symmetric about the $y$-axis, so the statement is True.
""",
    r"""
The real zeros are the roots of the linear factors after the difference of squares is used twice.

$$p(x)=(x^{2}-1)(x^{2}-9)$$

$$x=\pm 1,\quad x=\pm 3$$

Those four numbers $-3,-1,1,3$ are distinct, and each makes one factor vanish while the others stay nonzero. Direct substitution: $p(1)=1-10+9=0$ and $p(3)=81-90+9=0$. Four distinct real zeros occur, so the statement is True.
""",
    r"""
Far from the origin the leading term $x^{4}$ dominates, and an even power with a positive coefficient lifts both ends.

$$p(x)=x^{4}\left(1-\frac{10}{x^{2}}+\frac{9}{x^{4}}\right)$$

The bracket tends to $1$ as $x\to\pm\infty$, so $p$ has the sign of $x^{4}$, which is positive.

$$\lim_{x\to\pm\infty}p(x)=+\infty$$

Both ends of the graph rise, so the statement is True.
""",
    r"""
A cubic function has highest power $x^{3}$ and nothing above it, so read the written rule by descending powers.

$$p(x)=x^{4}-10x^{2}+9$$

The top term is $x^{4}$, with leading coefficient $1$.

$$x^{4}$$

A polynomial whose highest power is $x^{4}$ is quartic, not cubic. There is not even an $x^{3}$ term in the expansion, so the cubic label fails twice over, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-82  p(x)=x^3-x, q=p+c
# Honest key: T F T T F
# ---------------------------------------------------------------------------
EXPL["math-9-82"] = [
    r"""
With $c=0$ the shifted graph is $p$ itself, and $p$ factors into three distinct linear pieces.

$$q(x)=x^{3}-x$$

$$q(x)=x(x-1)(x+1)$$

The zeros are $-1$, $0$ and $1$, three different real numbers. Direct checks: $q(0)=0$, $q(1)=0$ and $q(-1)=0$. For this unshifted case $c=0$ the axis is crossed three times, so the statement is True.
""",
    r"""
A vertical shift adds a constant, which disappears upon differentiating, so the stationary abscissas cannot move with $c$.

$$q(x)=x^{3}-x+c$$

$$q'(x)=3x^{2}-1$$

$$x=\pm\frac{1}{\sqrt{3}}$$

Those two solutions of $q'=0$ make no reference to $c$. The turning points slide up or down as $c$ changes, but they keep the same $x$-coordinates, so the statement is False.
""",
    r"""
A large enough vertical shift can push the local max and min onto the same side of the axis, leaving a single real root.

$$q(x)=x^{3}-x+1$$

The local values of $p$ are $\pm\frac{2\sqrt{3}}{9}\approx\pm 0.385$, so for $c=1$ both turning heights of $q$ stay positive.

$$q(-2)=-8+2+1=-5$$

and at the origin

$$q(0)=1$$

One sign change from $q(-2)$ to $q(0)$ and none afterwards: exactly one real zero. Such a $c$ exists, so the statement is True.
""",
    r"""
Oddness is the identity $p(-x)=-p(x)$, and every term of $x^{3}-x$ carries an odd power.

$$p(-x)=(-x)^{3}-(-x)$$

$$p(-x)=-x^{3}+x$$

$$p(-x)=-(x^{3}-x)=-p(x)$$

The identity holds on the whole line. A numerical check $p(2)=8-2=6$ and $p(-2)=-8+2=-6=-p(2)$ agrees. Only odd powers appear in $x^{3}-x$, so $p$ is odd, so the statement is True.
""",
    r"""
Adding a nonzero constant breaks oddness, because the constant does not change sign with $x$.

$$q(-x)=-x^{3}+x+c$$

$$-q(x)=-x^{3}+x-c$$

These agree for every $x$ only if $c=-c$, hence only if $c=0$. For the sample $c=1$ one has $q(-1)=1$ while $-q(1)=-1$. Adding $c$ is a vertical shift, which destroys the origin-symmetry of an odd graph. The shifted graph is not odd for every $c$, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-83  deg p = n > m = deg q
# Honest key: T T F T T
# ---------------------------------------------------------------------------
EXPL["math-9-83"] = [
    r"""
When the highest powers are unequal they cannot cancel in a sum, so the top term of $p$ survives.

$$p(x)=x^{3}$$

together with

$$q(x)=2x$$

$$p(x)+q(x)=x^{3}+2x$$

Here $n=3>m=1$, and the surviving top power is $x^{3}=x^{n}$. In general the leading term of $p$ has nothing of the same power in $q$ to cancel it. The highest power in $p+q$ is $x^{n}$, so the statement is True.
""",
    r"""
Leading terms multiply and the exponents add, and the product of two nonzero leading coefficients stays nonzero.

$$p(x)=x^{3}$$

together with

$$q(x)=2x$$

$$p(x)q(x)=2x^{4}$$

The top power is $x^{4}=x^{3+1}=x^{n+m}$. The same counting holds for any $n>m$: the coefficient $a_n b_m$ cannot vanish. The highest power in the product is $x^{n+m}$, so the statement is True.
""",
    r"""
Adding never adds the exponents; that arithmetic belongs to a product. A concrete pair separates the two rules.

$$p(x)+q(x)=x^{3}+2x$$

The highest power here is $x^{3}=x^{n}$, not $x^{4}=x^{n+m}$.

$$n+m=4\neq 3$$

The sum keeps the larger of the two input powers, so claiming $x^{n+m}$ for $p+q$ misapplies the product rule, so the statement is False.
""",
    r"""
The leading coefficient of $p+q$ is the leading coefficient of $p$, because $q$ has no matching power to combine with $a_n$.

$$p(x)=x^{2}+1$$

together with

$$q(x)=3x$$

$$p(x)+q(x)=x^{2}+3x+1$$

Both $a_2=1$ and $b_1=3$ are positive, and the lead of the sum is $1$, which is positive. In general that lead is $a_n$ itself. A positive $a_n$ therefore makes the lead of $p+q$ positive, so the statement is True.
""",
    r"""
Subtracting $q$ still leaves the leading term of $p$ untouched, since $q$ has no $x^{n}$ term when $n>m$.

$$p(x)-q(x)=x^{3}-2x$$

The highest power remains $x^{3}=x^{n}$. The same holds for every such pair: the coefficient of $x^{n}$ in $p-q$ is $a_n\neq 0$.

$$x^{n}$$

The difference always keeps highest power $x^{n}$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-84  a+b=0, both degree n, a≠0
# Honest key: T T F T T
# ---------------------------------------------------------------------------
EXPL["math-9-84"] = [
    r"""
Opposite leading coefficients cancel the top power of the sum, dropping the highest remaining exponent strictly below $n$.

$$p(x)=x^{2}+1$$

together with

$$q(x)=-x^{2}+x$$

$$p(x)+q(x)=x+1$$

Here $n=2$ and $a+b=1+(-1)=0$, so the $x^{2}$ terms cancel and the sum has highest power $x^{1}$. In general the coefficient of $x^{n}$ in $p+q$ is $a+b=0$. The highest power of $p+q$ is strictly less than $n$, so the statement is True.
""",
    r"""
Subtracting reverses the sign of $b$, so the top coefficients no longer cancel: they double.

$$p(x)-q(x)=\bigl(x^{2}+1\bigr)-\bigl(-x^{2}+x\bigr)$$

$$p(x)-q(x)=2x^{2}-x+1$$

The leading coefficient is $a-b=a-(-a)=2a\neq 0$, since $a\neq 0$. In the example the top term is $2x^{2}$, so the highest power of $p-q$ remains $x^{n}$ with $n=2$. Subtracting cannot cancel opposite leads, so the statement is True.
""",
    r"""
Cancellation of the leading terms does not force every lower coefficient to vanish, so $p+q$ need not be the zero polynomial.

$$p(x)+q(x)=x+1$$

That sum is linear, not identically zero. A second pair $x^{n}$ and $-x^{n}+1$ likewise leaves the constant $1$.

$$x^{n}+(-x^{n}+1)=1$$

Only the top power is guaranteed to disappear, so $p+q$ is not forced to be the zero polynomial, so the statement is False.
""",
    r"""
Leading coefficients multiply, and $ab=a(-a)=-a^{2}$ is nonzero because $a\neq 0$.

$$p(x)q(x)=(x^{2}+1)(-x^{2}+x)$$

$$p(x)q(x)=-x^{4}+x^{3}-x^{2}+x$$

The top power is $x^{4}=x^{2n}$. In general the product of two degree-$n$ polynomials with nonzero leads has highest power $x^{2n}$. The product keeps $x^{2n}$, so the statement is True.
""",
    r"""
The leading coefficient of $-q$ is $-b$, and the hypothesis $a+b=0$ rewrites as $-b=a$.

$$-q(x)=x^{2}-x$$

That leading coefficient is $1$, which is exactly the leading coefficient $a$ of $p(x)=x^{2}+1$. In general $-q$ starts with $-b\,x^{n}=a\,x^{n}$, the same top term as $p$. So $p$ and $-q$ share the leading coefficient $a$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-85  g_k(x)=x^3-kx   (variant 85)
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-85"] = [
    r"""
Factor out $x$ and read the remaining quadratic: three distinct real zeros appear precisely when that quadratic has two nonzero real roots.

$$g_{k}(x)=x(x^{2}-k)$$

Take $k=4>0$. Then $x^{2}=4$, so the zeros are $-2$, $0$ and $2$.

$$g_{4}(x)=x(x-2)(x+2)$$

Those three numbers are distinct. The same pattern $0,\pm\sqrt{k}$ holds for every $k>0$, so the statement is True.
""",
    r"""
Setting the parameter to zero collapses the family to a pure cube, which has only one distinct real zero.

$$g_{0}(x)=x^{3}-0\cdot x=x^{3}$$

$$x^{3}=0$$

The only real solution is $x=0$, now of multiplicity three. Three distinct zeros would need three different numbers, and a triple root at the origin is just one number. The case $k=0$ fails the count, so the statement is False.
""",
    r"""
A negative parameter makes $x^{2}-k$ a sum of squares, hence always positive, so the factorisation leaves only the root $x=0$.

$$g_{k}(x)=x(x^{2}-k)$$

For $k=-4$ this is $x(x^{2}+4)$, and $x^{2}+4\ge 4>0$ for every real $x$.

$$x^{2}+4=0$$

has no real solution. The only real zero is $x=0$, so a negative $k$ leaves a single real zero, so the statement is True.
""",
    r"""
The leading coefficient is the number in front of $x^{3}$, and that number is written as $1$ for every member of the family.

$$g_{k}(x)=x^{3}-kx$$

$$g_{1}(x)=x^{3}-x$$

and

$$g_{5}(x)=x^{3}-5x$$

Both start with $x^{3}$. The parameter $k$ only rescales the linear term; it never touches the cubic coefficient. The leading coefficient is constantly $1$, independent of $k$, so the statement is False.
""",
    r"""
Oddness is the identity $g_{k}(-x)=-g_{k}(x)$, and both terms of the family carry odd powers of $x$.

$$g_{k}(-x)=(-x)^{3}-k(-x)$$

$$g_{k}(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-(x^{3}-kx)=-g_{k}(x)$$

The parameter $k$ rides along untouched, so the identity holds for every real $k$, including $k=0$. The family is odd for every real $k$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-86  Cubic lead -1, zeros -2, 0, 3
# p(x)=-x(x+2)(x-3)=-x^3+x^2+6x
# Honest key: T T T F T
# ---------------------------------------------------------------------------
EXPL["math-9-86"] = [
    r"""
The right-hand end of a cubic is settled by the leading term $-x^{3}$, which the figure names explicitly.

$$p(x)=-x(x+2)(x-3)$$

$$p(x)=-x^{3}+x^{2}+6x$$

For large positive $x$ the cubic term dominates, and $-x^{3}$ is large and negative.

$$\lim_{x\to+\infty}p(x)=-\infty$$

Odd degree with a negative lead therefore dives on the far right, so the statement is True.
""",
    r"""
The origin is listed as a zero, which is the statement that the graph meets the axis at $x=0$.

$$p(x)=-x(x+2)(x-3)$$

$$p(0)=0\cdot(-2)\cdot(-3)=0$$

The explicit factor $-x$ vanishes at the origin, so the product is zero regardless of the other two roots. The expanded form $-0+0+0=0$ agrees. The intercept is $0$, so the statement is True.
""",
    r"""
Three distinct real zeros place one stationary point in each gap, and a cubic cannot have more than two.

$$p'(x)=-3x^{2}+2x+6$$

$$2^{2}-4(-3)(6)=76$$

The discriminant is positive, so $p'$ has two distinct real roots. Rolle's theorem already puts one of them in $(-2,0)$ and the other in $(0,3)$. Two turning points occur, so the statement is True.
""",
    r"""
A strict inequality $p(0)>0$ needs a positive intercept, but $0$ is itself a listed zero.

$$p(x)=-x(x+2)(x-3)$$

$$p(0)=0$$

The graph passes through the origin rather than sitting above it. Expanding $p(x)=-x^{3}+x^{2}+6x$ shows the constant term is $0$, so the intercept is not positive. The number $0$ is not greater than $0$, so the statement is False.
""",
    r"""
The three zeros named on the figure are $-2$, $0$ and $3$, and any product that includes $0$ is $0$.

$$(-2)\cdot 0\cdot 3=0$$

The expanded rule $p(x)=-x^{3}+x^{2}+6x$ has constant term $0$, matching that product. Vieta for a cubic $-x^{3}+\cdots$ ties the constant term to the signed product of the zeros, here $0$. The product of the zeros is $0$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-87  p=x^4-5x^2+4 against ell=x^2-1
# Honest key: T F T F F
# ---------------------------------------------------------------------------
EXPL["math-9-87"] = [
    r"""
Meetings solve $p-\ell=0$, so subtract and factor the resulting even quartic as a quadratic in $x^{2}$.

$$p(x)-\ell(x)=x^{4}-5x^{2}+4-(x^{2}-1)$$

$$p(x)-\ell(x)=x^{4}-6x^{2}+5$$

$$(x^{2}-1)(x^{2}-5)=0$$

The real solutions are $x=\pm 1$ and $x=\pm\sqrt{5}$, four distinct meetings. That is certainly at least two, so the statement is True.
""",
    r"""
The highest power of $p-\ell$ is the highest power that does not cancel, and both $p$ and $\ell$ are even.

$$p(x)-\ell(x)=x^{4}-6x^{2}+5$$

The $x^{4}$ term of $p$ has no counterpart in $\ell$, so it survives.

$$x^{4}$$

A polynomial whose top power is $x^{4}$ is quartic, not cubic. The $x^{3}$ coefficient in $p-\ell$ is $0$ as well, so the cubic label has nothing to attach to, so the statement is False.
""",
    r"""
Evenness is the identity $p(-x)=p(x)$, and every exponent in $p$ is even.

$$p(-x)=(-x)^{4}-5(-x)^{2}+4$$

$$p(-x)=x^{4}-5x^{2}+4$$

$$p(-x)=p(x)$$

Substituting $-x$ leaves the formula unchanged. A numerical check $p(2)=16-20+4=0=p(-2)$ agrees, as does $p(1)=1-5+4=0=p(-1)$. The graph is symmetric about the $y$-axis, so the statement is True.
""",
    r"""
A linear function has highest power $x^{1}$, so inspect the written rule for $\ell$.

$$\ell(x)=x^{2}-1$$

The top term is $x^{2}$, with leading coefficient $1$.

$$x^{2}$$

That is a quadratic, not a line. The graph of $\ell$ is a parabola: $\ell(0)=-1$ and $\ell(2)=3$ already fail to sit on a line of slope matching a single power $x$. The highest power is $x^{2}$, so the statement is False.
""",
    r"""
Compare the two constant terms, which are the heights at $x=0$.

$$p(0)=4$$

$$\ell(0)=-1$$

$$4=-1$$

The quartic sits four units above the origin while the parabola sits one unit below it. A meeting at $x=0$ would require $p(0)=\ell(0)$, that is $4=-1$, which is false. Those two constant terms differ exactly, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-88  Tank height H(t)=t(t^2-50t+200)/200
# Honest key: F T T T F
# ---------------------------------------------------------------------------
EXPL["math-9-88"] = [
    r"""
The model is rising at a named time only if $H'$ is positive there, so expand and differentiate.

$$H(t)=\frac{t^{3}-50t^{2}+200t}{200}$$

$$H'(t)=\frac{3t^{2}-100t+200}{200}$$

$$H'(12)=\frac{432-1200+200}{200}=\frac{-71}{25}$$

The value $-\frac{71}{25}$ is negative, so the tank is falling at $t=12$ rather than rising, so the statement is False.
""",
    r"""
Substitute $t=12$ into the factored model and simplify the fraction.

$$H(12)=\frac{12\bigl(144-600+200\bigr)}{200}$$

$$H(12)=\frac{12\cdot(-256)}{200}=\frac{-3072}{200}$$

$$H(12)=-\frac{384}{25}$$

The exact height is the quoted value. As a decimal that is $-15.36$, matching $-384\div 25$. The substitution agrees with the claim, so the statement is True.
""",
    r"""
Distribute the constant $200$ and read the largest surviving exponent.

$$H(t)=\frac{1}{200}t^{3}-\frac{1}{4}t^{2}+t$$

The coefficient of $t^{3}$ is $\frac{1}{200}\neq 0$, so that term is present.

$$t^{3}$$

No higher power appears, and the cubic term survives. Multiplying through by $200$ recovers the numerator $t^{3}-50t^{2}+200t$, whose top power is visibly $t^{3}$. The highest power of $t$ in $H$ is $t^{3}$, so the statement is True.
""",
    r"""
The model has an explicit factor of $t$, so the intercept at the opening instant is zero.

$$H(t)=\frac{t(t^{2}-50t+200)}{200}$$

$$H(0)=\frac{0\cdot 200}{200}=0$$

With no elapsed time the predicted height relative to the datum is zero. Expanding $H(t)=\frac{1}{200}t^{3}-\frac{1}{4}t^{2}+t$ shows there is no constant term, so $H(0)=0$ identically. The value is $0$, so the statement is True.
""",
    r"""
A quadratic function would have highest power $t^{2}$ and nothing above it, so look at the expanded rule.

$$H(t)=\frac{1}{200}t^{3}-\frac{1}{4}t^{2}+t$$

The cubic term is present with a nonzero coefficient.

$$\frac{1}{200}t^{3}$$

A model whose top power is $t^{3}$ is cubic rather than quadratic. If $H$ were quadratic the $t^{3}$ coefficient would have to be $0$, but $\frac{1}{200}\neq 0$. The quadratic label fails, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-89  Table: 1,1,7,25 fits x^3-x+1
# Honest key: T F T T F
# ---------------------------------------------------------------------------
EXPL["math-9-89"] = [
    r"""
The column at $x=1$ lists the height $1$, and the proposed cubic returns the same number.

$$p(1)=1$$

$$1^{3}-1+1=1$$

Both the table and the closed form agree on $1$. The neighbouring columns $p(0)=1$ and $p(2)=7$ sit on either side of this height, consistent with a cubic that is flat-then-rising. The value at $x=1$ is the number named, so the statement is True.
""",
    r"""
A linear source would produce a constant first-difference row, so subtract consecutive tabulated outputs.

$$1-1=0,\quad 7-1=6,\quad 25-7=18$$

The jumps $0,6,18$ are not all equal. Already the second step is six times the first.

$$6\neq 0$$

Constant first differences fail, so the samples cannot come from a line, so the statement is False.
""",
    r"""
The column at $x=3$ lists $25$, and substituting into the proposed cubic reproduces that entry.

$$p(3)=25$$

$$27-3+1=25$$

The table and $x^{3}-x+1$ agree on $25$. The previous column $p(2)=7$ and the first-difference jump $18$ already show the cubic acceleration into this last listed height. The named height is correct, so the statement is True.
""",
    r"""
Test the cubic $x^{3}-x+1$ against every listed column, not just one of them.

$$0^{3}-0+1=1$$

$$8-2+1=7$$

$$27-3+1=25$$

The remaining column $x=1$ returns $1$ as well. First differences $0,6,18$ already grow, matching a cubic rather than a line or a parabola. Every tabulated height matches $x^{3}-x+1$ exactly, so the statement is True.
""",
    r"""
Four samples of a line would need constant first differences, but these jumps already grow, and the third differences of a cubic are the ones that settle.

$$0,\ 6,\ 18$$

$$6,\ 12$$

The second differences still move, which already rules out both a line and a parabola. The closed form $x^{3}-x+1$ is cubic. The samples are not linear, so the statement is False.
""",
]

# ---------------------------------------------------------------------------
# math-9-90  g_k variant 90
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-90"] = [
    r"""
For a positive parameter the quadratic factor $x^{2}-k$ has two real roots, distinct from each other and from $0$.

$$g_{k}(x)=x(x^{2}-k)$$

With $k=9$ those roots are $\pm 3$, so the zero set is $\{-3,0,3\}$.

$$g_{9}(3)=27-27=0$$

Three different real numbers, and the same counting $0,\pm\sqrt{k}$ works for every $k>0$. Three distinct real zeros occur, so the statement is True.
""",
    r"""
The zero-parameter member of the family is a monomial cube, whose only real root is the origin.

$$g_{0}(x)=x^{3}$$

$$g_{0}(x)=x\cdot x\cdot x$$

That is a single distinct zero of multiplicity three, not three different axis crossings. For instance $g_{0}(1)=1\neq 0$ and $g_{0}(-1)=-1\neq 0$. Distinctness fails as soon as $k=0$, so the statement is False.
""",
    r"""
When $k$ is negative the quadratic $x^{2}-k$ never hits zero, because it equals $x^{2}$ plus a positive constant.

$$g_{-1}(x)=x^{3}+x=x(x^{2}+1)$$

$$x^{2}+1\ge 1>0$$

The only real solution of $x(x^{2}+1)=0$ is $x=0$. A second sample $k=-4$ gives $x(x^{2}+4)$, again only $x=0$. Every negative $k$ leaves this same single real zero, so the statement is True.
""",
    r"""
Write two members side by side and compare the coefficients of $x^{3}$.

$$g_{2}(x)=x^{3}-2x$$

$$g_{7}(x)=x^{3}-7x$$

Both are monic cubics: the number in front of $x^{3}$ is $1$ in each case. Changing $k$ only changes the coefficient of $x$, from $-2$ to $-7$ in the sample. The leading coefficient does not depend on $k$, so the statement is False.
""",
    r"""
Every power in $x^{3}-kx$ is odd, so replacing $x$ by $-x$ multiplies the whole formula by $-1$.

$$g_{k}(-x)=-x^{3}+kx$$

$$-g_{k}(x)=-x^{3}+kx$$

The two sides match for every real $k$. In particular $g_{0}(-x)=-x^{3}=-g_{0}(x)$ still holds, and $g_{1}(-2)=-8+2=-6=-g_{1}(2)$. The family is odd for every real $k$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-91  g_k variant 91 (key already honest: T F T F T)
# ---------------------------------------------------------------------------
EXPL["math-9-91"] = [
    r"""
Solve $x^{3}-kx=0$ by factoring, then use the sign of $k$ to count the real roots of $x^{2}=k$.

$$x(x^{2}-k)=0$$

If $k>0$ then $x=0$ together with $x=\pm\sqrt{k}$ are three different real numbers. For $k=1$ this is the familiar $x(x-1)(x+1)$.

$$g_{1}(x)=x^{3}-x$$

Three distinct real zeros occur whenever $k$ is positive, so the statement is True.
""",
    r"""
Plug $k=0$ into the same factorisation: the quadratic factor becomes $x^{2}$, and the three roots collide.

$$g_{0}(x)=x^{3}=x\cdot x\cdot x$$

$$x=0$$

Only one distinct real zero remains, of multiplicity three. Nearby values $g_{0}(1)=1$ and $g_{0}(-1)=-1$ are nonzero, so no extra axis crossings hide off the origin. The claim that three distinct zeros survive at $k=0$ is therefore wrong, so the statement is False.
""",
    r"""
A negative $k$ turns $x^{2}-k$ into a positive-definite quadratic, so it contributes no extra real root.

$$g_{-9}(x)=x^{3}+9x=x(x^{2}+9)$$

$$x^{2}+9=0$$

has no real solution, because $x^{2}+9\ge 9$. The factor $x$ still gives the simple root $x=0$, and nothing else. A nearby value $g_{-9}(1)=1+9=10\neq 0$ confirms there is no extra real zero. Only one real zero remains, so the statement is True.
""",
    r"""
The cubic term is written without a parameter in front of it, so the lead cannot move with $k$.

$$g_{k}(x)=1\cdot x^{3}-k\cdot x$$

Compare $k=0$ and $k=10$: both formulas begin with $x^{3}$.

$$g_{0}(x)=x^{3}$$

and

$$g_{10}(x)=x^{3}-10x$$

The leading coefficient is $1$ in every case. It does not depend on $k$, so the statement is False.
""",
    r"""
Test the odd identity directly on the two-term formula, keeping $k$ as a spectator.

$$g_{k}(-x)=(-x)^{3}-k(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-(x^{3}-kx)=-g_{k}(x)$$

The algebra never uses the sign or the size of $k$, so the identity is valid for every real parameter. A check at $k=2$: $g_{2}(-1)=-1+2=1$ and $-g_{2}(1)=-(1-2)=1$. Each $g_{k}$ is an odd function, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-92  g_k variant 92
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-92"] = [
    r"""
The equation $x^{3}=kx$ rearranges to $x(x^{2}-k)=0$, and a positive $k$ supplies two extra real square roots.

$$g_{k}(x)=x^{3}-kx$$

For $k=16$ the zeros are $-4$, $0$ and $4$.

$$g_{16}(-4)=-64+64=0$$

Those three values are distinct. Direct checks $g_{16}(4)=64-64=0$ and $g_{16}(0)=0$ complete the triple. The same pattern $0,\pm\sqrt{k}$ appears for every $k>0$, so the statement is True.
""",
    r"""
At $k=0$ there is nothing left to take a square root of, and the cubic degenerates.

$$g_{0}(x)=x^{3}$$

$$g_{0}(1)=1\neq 0$$

while

$$g_{0}(0)=0$$

The graph of $x^{3}$ meets the axis only at the origin. Nearby, $g_{0}(2)=8\neq 0$ and $g_{0}(-2)=-8\neq 0$, so no extra real zeros hide off zero. One distinct real zero is not three, so the statement is False.
""",
    r"""
For $k<0$ write $k=-c$ with $c>0$, so the second factor is $x^{2}+c$, which has no real root.

$$g_{-4}(x)=x^{3}+4x=x(x^{2}+4)$$

$$x^{2}+4\ge 4$$

The product $x(x^{2}+4)$ vanishes only at $x=0$. A check $g_{-4}(1)=1+4=5\neq 0$ shows there is no extra real root. A negative parameter therefore leaves a single real zero, so the statement is True.
""",
    r"""
A leading coefficient that depended on $k$ would have to sit in front of $x^{3}$, but that slot is occupied by the constant $1$.

$$g_{3}(x)=x^{3}-3x$$

$$g_{-3}(x)=x^{3}+3x$$

Opposite values of $k$ change the linear term from $-3x$ to $+3x$ but leave the cubic term untouched. The leading coefficient does not depend on $k$, so the statement is False.
""",
    r"""
Oddness does not consult the parameter: both $x^{3}$ and $-kx$ flip sign when $x$ does.

$$g_{k}(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-g_{k}(x)$$

$$g_{4}(-1)=-1+4=3$$

and

$$-g_{4}(1)=-(1-4)=3$$

The numerical check for $k=4$ matches, and the same identity holds for every other real $k$. The family is odd for every real $k$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-93  g_k variant 93
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-93"] = [
    r"""
Positive $k$ makes $x^{2}-k$ a difference of squares with two real roots, distinct from the root $x=0$ of the remaining factor.

$$g_{k}(x)=x(x-\sqrt{k})(x+\sqrt{k})$$

For $k=25$ this is $x(x-5)(x+5)$, with zeros $-5$, $0$ and $5$.

$$g_{25}(5)=125-125=0$$

Three distinct real zeros, and the same counting holds for every $k>0$, so the statement is True.
""",
    r"""
The claim asks for three distinct zeros at $k=0$, but substituting that value leaves a triple root at a single point.

$$g_{0}(x)=x^{3}-0\cdot x=x^{3}$$

$$g_{0}'(x)=3x^{2}$$

$$g_{0}'(0)=0$$

The graph of $x^{3}$ is flat at the origin and meets the axis only there. Distinct zeros require distinct numbers, so $k=0$ fails, so the statement is False.
""",
    r"""
If $k<0$ then $x^{2}-k>0$ for every real $x$, so the quadratic factor never contributes a real root.

$$g_{-16}(x)=x^{3}+16x=x(x^{2}+16)$$

$$x^{2}+16\ge 16>0$$

The only real root of the product is $x=0$. A check $g_{-16}(1)=1+16=17\neq 0$ confirms no extra real zero. Every negative parameter leaves this single real zero, so the statement is True.
""",
    r"""
The family is monic for every $k$: the coefficient of $x^{3}$ is written as $1$ and never mentioned as a function of $k$.

$$g_{k}(x)=x^{3}-kx$$

$$g_{8}(x)=x^{3}-8x$$

The linear coefficient $-k$ does depend on the parameter, but the leading coefficient does not. The number in front of $x^{3}$ is constantly $1$, so the statement is False.
""",
    r"""
A function built only from odd powers is odd, and $k$ merely scales the linear odd power.

$$g_{k}(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-(x^{3}-kx)=-g_{k}(x)$$

The identity makes no restriction on $k$. In particular it holds at $k=0$, where $g_{0}(x)=x^{3}$ is the standard odd cube, and at $k=1$ one has $g_{1}(-2)=-6=-g_{1}(2)$. Every $g_{k}$ is odd, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-94  g_k variant 94
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-94"] = [
    r"""
Factor $g_{k}$ and note that a positive $k$ gives two extra real square roots besides $x=0$.

$$g_{k}(x)=x(x^{2}-k)$$

$$x=0,\quad x=\pm\sqrt{k}$$

For $k=36$ those zeros are $-6$, $0$ and $6$, three different real numbers. Direct checks $g_{36}(6)=216-216=0$ and $g_{36}(0)=0$ complete the list. The same triple appears for every $k>0$, so the statement is True.
""",
    r"""
At $k=0$ the two extra roots $\pm\sqrt{k}$ both collapse onto $0$, leaving a single axis point.

$$g_{0}(x)=x^{3}$$

$$x^{3}=0\implies x=0$$

Multiplicity three at the origin is still one distinct real zero. Nearby values $g_{0}(1)=1$ and $g_{0}(-1)=-1$ are nonzero, so no extra crossings hide off zero. The distinctness claimed for $k=0$ does not hold, so the statement is False.
""",
    r"""
A negative $k$ makes $x^{2}-k$ strictly positive, so it cannot vanish and cannot add a real root.

$$g_{-25}(x)=x^{3}+25x=x(x^{2}+25)$$

$$x^{2}+25=0$$

has no real solution. The remaining factor $x$ gives the unique real zero $x=0$. A check $g_{-25}(1)=1+25=26\neq 0$ shows there is no extra real root. Only one real zero survives, so the statement is True.
""",
    r"""
Compare the expanded form at two different parameters and read the cubic coefficient in each.

$$g_{6}(x)=x^{3}-6x$$

$$g_{0}(x)=x^{3}$$

Both start with $x^{3}$. The parameter controls only the coefficient of $x$, which drops out of the leading-term test: $g_{6}$ starts $x^{3}-6x$ while $g_{0}$ is the pure cube. The leading coefficient is $1$ for every $k$, so the statement is False.
""",
    r"""
Substitute $-x$ into the two-term rule and factor out a minus sign; $k$ never has to be specialised.

$$g_{k}(-x)=(-x)^{3}-k(-x)$$

$$g_{k}(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-g_{k}(x)$$

The identity is an equality of polynomials in $x$ whose coefficients involve $k$ only as a spectator. It holds for every real $k$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-95  g_k variant 95
# Honest key: T F T F T
# ---------------------------------------------------------------------------
EXPL["math-9-95"] = [
    r"""
The real roots of $x^{3}=kx$ are $x=0$ and, when $k>0$, the two real square roots of $k$.

$$g_{k}(x)=x^{3}-kx$$

For $k=49$ one has $g_{49}(7)=343-343=0$ and likewise $g_{49}(-7)=0$.

$$g_{49}(x)=x(x-7)(x+7)$$

The zeros $-7$, $0$ and $7$ are distinct. Every positive $k$ produces the same three-root pattern, so the statement is True.
""",
    r"""
Put $k=0$ into $x^{3}-kx$ and count distinct solutions of $x^{3}=0$.

$$g_{0}(x)=x^{3}$$

$$g_{0}(-2)=-8\neq 0$$

Only $x=0$ solves the equation. Nearby, $g_{0}(1)=1$ and $g_{0}(2)=8$ are both nonzero, so the cube does not hide extra real roots. A triple root at the origin is not three distinct real zeros at $k=0$, so the statement is False.
""",
    r"""
For $k<0$ the graph of $y=x^{3}$ meets the line $y=kx$ only at the origin, because a line of negative slope through the origin stays opposite in sign to $x^{3}$ off zero.

$$g_{-2}(x)=x^{3}+2x=x(x^{2}+2)$$

$$x^{2}+2\ge 2>0$$

The quadratic factor never vanishes, so the only real zero is $x=0$. A negative $k$ leaves a single real zero, so the statement is True.
""",
    r"""
The leading coefficient is read from the highest power, which is $x^{3}$ with coefficient $1$ in the given formula.

$$g_{k}(x)=x^{3}-kx$$

$$g_{11}(x)=x^{3}-11x$$

Changing $11$ to any other $k$ never rescales $x^{3}$. The linear coefficient $-k$ does depend on the parameter, but that is not the leading coefficient. The leading coefficient is independent of $k$, so the statement is False.
""",
    r"""
Oddness can be checked on the factored form $x(x^{2}-k)$ as well as on the expanded form.

$$g_{k}(-x)=(-x)\bigl((-x)^{2}-k\bigr)$$

$$g_{k}(-x)=-x(x^{2}-k)$$

$$g_{k}(-x)=-g_{k}(x)$$

The factor $x^{2}-k$ is even in $x$, so the whole product is odd for every real $k$. A check at $k=3$: $g_{3}(-1)=-1+3=2$ and $-g_{3}(1)=-(1-3)=2$. The family is odd for every real $k$, so the statement is True.
""",
]

# ---------------------------------------------------------------------------
# math-9-96  Cubic lead -1, zeros -3, -1, 2
# p(x)=-(x+3)(x+1)(x-2)=-x^3-2x^2+5x+6
# Honest key: T T T T F
# ---------------------------------------------------------------------------
EXPL["math-9-96"] = [
    r"""
The figure names a cubic with leading coefficient $-1$, so the far-right end is the end of $-x^{3}$.

$$p(x)=-(x+3)(x+1)(x-2)$$

$$p(x)=-x^{3}-2x^{2}+5x+6$$

For large positive $x$ the cubic term dominates and is negative.

$$\lim_{x\to+\infty}p(x)=-\infty$$

Odd degree with a negative lead therefore falls on the far right, so the statement is True.
""",
    r"""
The value $-1$ is listed as a zero, so the corresponding linear factor vanishes there.

$$p(x)=-(x+3)(x+1)(x-2)$$

$$p(-1)=-(2)(0)(-3)$$

$$p(-1)=0$$

The middle factor is zero, so the product is zero independently of the leading $-1$. The expanded check $1-2-5+6=0$ agrees. The graph meets the axis at $x=-1$, so the statement is True.
""",
    r"""
Three distinct real zeros force two turning points, one in each interval between consecutive roots.

$$p'(x)=-3x^{2}-4x+5$$

$$(-4)^{2}-4(-3)(5)=16+60=76$$

The discriminant is positive, so $p'$ has two distinct real roots. Rolle's theorem already places them in $(-3,-1)$ and in $(-1,2)$. Two turning points occur, so the statement is True.
""",
    r"""
The intercept is the product of the factors at $x=0$, including the leading minus sign.

$$p(x)=-(x+3)(x+1)(x-2)$$

$$p(0)=-(3)(1)(-2)=6$$

The height $6$ is positive, so the graph sits above the origin. Equivalently the expanded constant term of $-x^{3}-2x^{2}+5x+6$ is $+6$. A strict inequality only needs the sign of that intercept.

$$6>0$$

The intercept is positive, so the statement is True.
""",
    r"""
The three zeros named on the figure are $-3$, $-1$ and $2$, none of which is $0$.

$$(-3)\cdot(-1)\cdot 2=6$$

$$6=0$$

The product is $6$, not $0$. The intercept $p(0)=6$ being nonzero is the same information: $x=0$ is not a root. A product of zeros equals $0$ only when at least one zero is $0$, and none of $-3,-1,2$ is. The product of the zeros is not $0$, so the statement is False.
""",
]


def assemble(task_id: str, keys: list[bool]) -> list[str]:
    bodies = [block.strip() for block in EXPL[task_id]]
    if len(bodies) != 5:
        raise SystemExit(f"{task_id}: expected 5 explanations, got {len(bodies)}")
    return [
        f"**{LETTERS[i]}.** \u2192 {'True' if key else 'False'}\n\n{body}"
        for i, (key, body) in enumerate(zip(keys, bodies))
    ]


def validate(task_id: str, keys: list[bool], texts: list[str]) -> list[str]:
    problems: list[str] = []
    first_lines: list[str] = []
    display_seqs: list[tuple[str, ...]] = []
    for i, (key, text) in enumerate(zip(keys, texts)):
        label = f"{task_id}.{LETTERS[i]}"
        verdict = "True" if key else "False"
        if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
            problems.append(f"{label}: header does not match key ({verdict})")
        if not text.endswith(f", so the statement is {verdict}."):
            problems.append(f"{label}: closing line missing or wrong verdict")
        n = len(text)
        if n < 350 or n > 700:
            problems.append(f"{label}: length {n} not in 350-700")
        for pattern in BANNED:
            if re.search(pattern, text):
                problems.append(f"{label}: banned phrase {pattern!r}")
        displays = re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)
        if not displays:
            problems.append(f"{label}: no display formula")
        for display in displays:
            if not display.strip():
                problems.append(f"{label}: empty display")
            if "\n" in display:
                problems.append(f"{label}: newline inside a display")
        if len(displays) != len(set(displays)):
            problems.append(f"{label}: duplicate display")
        openings = re.findall(r"\u2192 (?:True|False)\n\n(.+)", text)
        if not openings:
            problems.append(f"{label}: no narrative opener after the header")
        parts = re.split(r"\n\n", text, maxsplit=2)
        first_lines.append(parts[1] if len(parts) > 1 else "")
        display_seqs.append(tuple(displays))
    if len(set(first_lines)) < 4:
        problems.append(f"{task_id}: repeated openers across letters")
    if len(set(display_seqs)) < 4:
        problems.append(f"{task_id}: repeated display sequences across letters")
    return problems


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    missing = [tid for tid in TARGET_IDS if tid not in by_id]
    if missing:
        raise SystemExit(f"ids not in bank: {missing}")
    missing_expl = [tid for tid in TARGET_IDS if tid not in EXPL]
    if missing_expl:
        raise SystemExit(f"no explanations authored for: {missing_expl}")

    problems: list[str] = []
    lengths: list[int] = []
    applied_fixes = 0

    for task_id in TARGET_IDS:
        task = by_id[task_id]
        keys = list(task["answer_key"])
        for (tid, index), fixed in KEY_FIXES.items():
            if tid == task_id:
                if keys[index] != fixed:
                    applied_fixes += 1
                keys[index] = fixed
        texts = assemble(task_id, keys)
        problems.extend(validate(task_id, keys, texts))
        lengths.extend(len(t) for t in texts)
        task["answer_key"] = keys
        task["tactical_explanations"] = texts

    if problems:
        raise SystemExit("validation failed:\n" + "\n".join(problems))

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    print(f"tasks rewritten: {len(TARGET_IDS)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median explanation length: {int(statistics.median(lengths))} characters")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections applied: {applied_fixes}")
    print("validation: all headers, closes, lengths, displays, and openers passed")


if __name__ == "__main__":
    main()




