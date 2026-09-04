"""Rewrite tactical explanations for math-9-97..115 (Ch9 core bank, batch 4).

Style target: Chapter 4 (src/data/math-ch4-cases.json). Each letter opens with a
narrative sentence, alternates single-line $$ displays with prose, and closes
with ", so the statement is True/False."

Answer keys that disagreed with the written claims are recorded in KEY_FIXES.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

TARGET_IDS = [f"math-9-{n}" for n in range(97, 116)]
LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "read the stem fully",
    "translate words",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
    "as forced by the coefficients",
    "for every real shift of the graph",
    "and the same holds after replacing",
    "equals settled by",
    "A solver who",
    "rushed solver",
    "Watch.",
    "Trap:",
    "—",
    "Statement A links",
    "Statement B links",
    "Statement C links",
    "Statement D links",
    "Statement E links",
    "concrete polynomial fact",
    "Substitute, factor, differentiate",
    "This settles the claim",
    "That is not what the claim asserts",
    "The algebra matches",
    "corrected figure",
    "highest power p'",
]

# (task id, statement index) -> corrected truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-97", 4): False,   # product (-2)(1)(4) = -8, not 0
    ("math-9-98", 3): False,   # p(0) = 0 is not strictly greater than 0
    ("math-9-99", 1): True,    # 2 is a listed zero
    ("math-9-99", 2): True,    # three distinct zeros give two turning points
    ("math-9-100", 2): True,   # three distinct zeros give two turning points
    ("math-9-100", 3): True,   # p(0) = 8 > 0
    ("math-9-101", 1): True,   # 2 is a listed zero
    ("math-9-101", 2): True,   # three distinct zeros give two turning points
    ("math-9-101", 4): True,   # the product includes the zero 0
    ("math-9-102", 2): True,   # p' = 4 - 3x^2 has two real zeros
    ("math-9-102", 4): True,   # the product includes the zero 0
    ("math-9-103", 3): True,   # p(0) = 15 > 0
    ("math-9-104", 3): False,  # x^2 - 1 is quadratic, not linear
    ("math-9-105", 2): False,  # x^3 - 6x is odd, not even
    ("math-9-105", 3): False,  # x^2 - 4 is quadratic
    ("math-9-105", 4): False,  # p(0) = 0 while ell(0) = -4
    ("math-9-106", 0): True,   # x^3 - 4x - 1 has three real roots
    ("math-9-106", 3): True,   # x + 1 is a degree-1 (linear) function
    ("math-9-107", 0): True,   # four real meetings: 0 and the three cubic roots
    ("math-9-107", 4): True,   # both vanish at x = 0
    ("math-9-108", 4): True,   # 1 + 1 + (-3) = -1
    ("math-9-112", 3): False,  # r vanishes at x = 0 and x = -1
    ("math-9-112", 4): False,  # the leading coefficient of r is 1, not 2
    ("math-9-113", 2): True,   # zeros \pm1, \pm3
    ("math-9-113", 3): True,   # even degree, positive leading coefficient
    ("math-9-114", 3): True,   # p(0) = -2
    ("math-9-114", 4): True,   # -1 + -1 + 2 = 0
    ("math-9-115", 3): True,   # p >= 11/4, so p(p-1) never hits 0
}

EXPL: dict[str, list[str]] = {}

EXPL["math-9-97"] = [
    r"""
Only the leading term of a cubic survives far to the right, and the stem already names that coefficient as $-1$.

$$p(x)=-(x+2)(x-1)(x-4)$$

$$p(x)=-x^{3}+3x^{2}+6x-8$$

Dividing by $x^{3}$ leaves $-1$ plus terms that vanish as $x\to+\infty$.

$$\lim_{x\to+\infty}p(x)=-\infty$$

The right-hand end therefore dives, so the statement is True.
""",
    r"""
A marked crossing is a root: substitute the claimed abscissa into the factored cubic.

$$p(x)=-(x+2)(x-1)(x-4)$$

$$p(1)=-(3)(0)(-3)=0$$

The middle factor vanishes, so the graph sits on the axis at $x=1$. Expanding is only a check.

$$-1+3+6-8=0$$

The value $p(1)=0$ matches the claim, so the statement is True.
""",
    r"""
Three distinct zeros force two turns. Rolle places a stationary point in each gap $(-2,1)$ and $(1,4)$, and a cubic derivative is quadratic, so those two are the full list.

$$p'(x)=-3x^{2}+6x+6$$

$$x^{2}-2x-2=0$$

$$x=1\pm\sqrt{3}$$

Both roots are real and distinct, so the graph has exactly two turning points, so the statement is True.
""",
    r"""
The $y$-intercept is $p(0)$, read by multiplying the three linear factors at the origin.

$$p(0)=-(2)(-1)(-4)=-8$$

The comparison asked for is the strict inequality $-8>0$, which fails: the graph meets the vertical axis below the origin.

$$-8>0$$

The intercept is negative rather than positive, so the statement is False.
""",
    r"""
Multiply the three marked zeros rather than guessing from a sketch of the intercept.

$$(-2)\cdot 1\cdot 4=-8$$

Zero is not among $\{-2,1,4\}$, so the product cannot vanish. The same number is the constant term of $p(x)=-x^{3}+3x^{2}+6x-8$.

$$p(0)=-8$$

The product is $-8$, not $0$, so the statement is False.
""",
]

EXPL["math-9-98"] = [
    r"""
An odd power with a negative coefficient copies the sign of $-x$ at both infinities. The stem fixes the lead as $-1$ and the zeros as $0$, $1$ and $5$.

$$p(x)=-x(x-1)(x-5)$$

$$p(x)=-x^{3}+6x^{2}-5x$$

For large positive $x$ every factor is positive, and the overall minus sign sends the values to $-\infty$.

$$p(10)=-10\cdot 9\cdot 5=-450$$

The right end dives, so the statement is True.
""",
    r"""
Evaluate the product of the three linear factors at the named input $x=1$.

$$p(x)=-x(x-1)(x-5)$$

$$p(1)=-1\cdot 0\cdot(-4)=0$$

The factor $(x-1)$ is zero there, which is exactly the geometric meaning of a marked crossing at $x=1$.

$$p(1)=0$$

The graph meets the axis at $x=1$, so the statement is True.
""",
    r"""
A cubic with three distinct real zeros has two turning points: one in $(0,1)$ and one in $(1,5)$, by Rolle, and no more, because $p'$ is quadratic.

$$p'(x)=-3x^{2}+12x-5$$

$$x=2\pm\frac{\sqrt{21}}{3}$$

Those abscissas are about $0.47$ and $3.53$, both real. Two distinct stationary points sit on the graph, so the statement is True.
""",
    r"""
The origin is itself a listed zero, so the height there is zero rather than a positive number.

$$p(x)=-x(x-1)(x-5)$$

$$p(0)=0$$

The claim is the strict inequality $p(0)>0$. Equality to zero fails that test.

$$0>0$$

The intercept sits on the axis, not above it, so the statement is False.
""",
    r"""
A product of real numbers is zero precisely when at least one factor is zero. Read the three zeros off the stem.

$$0\cdot 1\cdot 5=0$$

The factor $0$ already kills the product. Equivalently, $p$ has no constant term.

$$p(x)=-x^{3}+6x^{2}-5x$$

The product of the zeros is $0$, so the statement is True.
""",
]

EXPL["math-9-99"] = [
    r"""
Pull the cubic factor out of the expanded polynomial and read the remaining bracket as $x\to+\infty$.

$$p(x)=-(x+1)(x-2)(x-3)$$

$$p(x)=-x^{3}+4x^{2}-x-6$$

$$p(x)=x^{3}\left(-1+\frac{4}{x}-\frac{1}{x^{2}}-\frac{6}{x^{3}}\right)$$

The bracket tends to $-1$ while $x^{3}\to+\infty$, so the product tends to $-\infty$. The right end dives, so the statement is True.
""",
    r"""
The stem lists the zeros $-1$, $2$ and $3$, so $x=2$ is one of the three marked crossings.

$$p(x)=-(x+1)(x-2)(x-3)$$

$$p(2)=-(3)(0)(-1)=0$$

The middle factor vanishes. A direct expansion check gives the same height.

$$-8+16-2-6=0$$

The graph meets the axis at $x=2$, so the statement is True.
""",
    r"""
Count turning points from the derivative, not from a guess about how cubics look.

$$p'(x)=-3x^{2}+8x-1$$

The discriminant of that quadratic is $64-12=52>0$, so two distinct real roots.

$$x=\frac{4\pm\sqrt{13}}{3}$$

Those values lie near $0.13$ and $2.54$, one in each gap between consecutive zeros. Two turning points occur, so the statement is True.
""",
    r"""
Substitute $x=0$ into the factored form to read the intercept.

$$p(0)=-(1)(-2)(-3)=-6$$

The claim $p(0)>0$ would need a positive height. Here the graph meets the vertical axis six units below the origin.

$$-6>0$$

The intercept is negative, so the statement is False.
""",
    r"""
Form the product of the three zeros named in the stem.

$$(-1)\cdot 2\cdot 3=-6$$

None of $-1$, $2$, $3$ is zero, so the product stays nonzero. The same number appears as $p(0)$ because the leading coefficient is $-1$.

$$p(0)=-6$$

The product is $-6$, not $0$, so the statement is False.
""",
]

EXPL["math-9-100"] = [
    r"""
End behaviour is decided by the highest power, never by the three marked roots. The lead is $-1$ on an odd degree.

$$p(x)=-(x-1)(x-2)(x-4)$$

$$p(x)=-x^{3}+7x^{2}-14x+8$$

$$\lim_{x\to+\infty}p(x)=-\infty$$

As a numerical check, $p(10)=-(9)(8)(6)=-432$, already large and negative. The right end dives, so the statement is True.
""",
    r"""
The claimed root $x=2$ is one of the three zeros listed in the stem.

$$p(x)=-(x-1)(x-2)(x-4)$$

$$p(2)=-(1)(0)(-2)=0$$

The factor $(x-2)$ is zero, so the height is zero independently of the other two factors.

$$p(2)=0$$

The graph crosses the axis at $x=2$, so the statement is True.
""",
    r"""
Between three distinct zeros a cubic must turn twice, once in $(1,2)$ and once in $(2,4)$.

$$p'(x)=-3x^{2}+14x-14$$

$$x=\frac{7\pm\sqrt{7}}{3}$$

Those abscissas are about $1.45$ and $3.22$, both real. A cubic cannot have a third stationary point because $p'$ has degree $2$. Two turning points occur, so the statement is True.
""",
    r"""
The intercept equals the product of the zeros when the leading coefficient is $-1$.

$$p(0)=-( -1)(-2)(-4)=8$$

$$8>0$$

The graph meets the vertical axis eight units above the origin, which is exactly the strict inequality in the claim.

$$p(x)=-x^{3}+7x^{2}-14x+8$$

The intercept is positive, so the statement is True.
""",
    r"""
Multiply the three zeros $1$, $2$ and $4$.

$$1\cdot 2\cdot 4=8$$

The product is $8$, not $0$. None of the three marked crossings sits at the origin, so a zero factor never appears.

$$p(0)=8$$

The product of the zeros is $8$, so the statement is False.
""",
]

EXPL["math-9-101"] = [
    r"""
Write the cubic as a product, then ask what happens when every factor is large and positive.

$$p(x)=-x(x-2)(x-3)$$

$$p(x)=-x^{3}+5x^{2}-6x$$

For $x>3$ each of $x$, $x-2$ and $x-3$ is positive, and the overall minus sign makes $p(x)$ negative and growing in size.

$$p(6)=-6\cdot 4\cdot 3=-72$$

As $x\to+\infty$ those values tend to $-\infty$, so the statement is True.
""",
    r"""
The stem marks zeros at $0$, $2$ and $3$, so the claim $p(2)=0$ is the middle crossing.

$$p(x)=-x(x-2)(x-3)$$

$$p(2)=-2\cdot 0\cdot(-1)=0$$

The factor $(x-2)$ vanishes. Expanding and substituting gives the same identity.

$$-8+20-12=0$$

The height at $x=2$ is zero, so the statement is True.
""",
    r"""
Differentiate the expanded cubic and solve $p'(x)=0$.

$$p'(x)=-3x^{2}+10x-6$$

$$x=\frac{5\pm\sqrt{7}}{3}$$

The two roots are about $0.78$ and $2.55$, lying in $(0,2)$ and $(2,3)$ respectively. Rolle already promised those two stationary points, and a quadratic cannot supply a third. Two turning points occur, so the statement is True.
""",
    r"""
Because $x=0$ is a listed zero, the graph already sits on the axis at the origin.

$$p(x)=-x(x-2)(x-3)$$

$$p(0)=0$$

The claim requires a strictly positive intercept. A height of $0$ is not greater than $0$.

$$0>0$$

The intercept is zero, so the statement is False.
""",
    r"""
The product of the zeros includes the marked root at the origin.

$$0\cdot 2\cdot 3=0$$

Any product with a factor $0$ is $0$. Equivalently, every term of $p$ contains $x$, so there is no constant term.

$$p(x)=-x^{3}+5x^{2}-6x$$

The product of the zeros is $0$, so the statement is True.
""",
]

EXPL["math-9-102"] = [
    r"""
The odd part $-x^{3}$ dominates the linear term once $|x|$ is large. Expand the stem's cubic.

$$p(x)=-x(x^{2}-4)$$

$$p(x)=-x^{3}+4x$$

$$p(x)=x^{3}\left(-1+\frac{4}{x^{2}}\right)$$

As $x\to+\infty$ the bracket tends to $-1$, so $p(x)\to-\infty$. The right end dives, so the statement is True.
""",
    r"""
The origin is one of the three listed zeros $-2$, $0$ and $2$.

$$p(x)=-x(x-2)(x+2)$$

$$p(0)=-0\cdot(-2)\cdot 2=0$$

The explicit factor $x$ already forces the height to vanish. Expanding gives $p(x)=-x^{3}+4x$, which has no constant term.

$$-0+0=0$$

The graph meets the axis at $x=0$, so the statement is True.
""",
    r"""
Differentiate the odd cubic $p(x)=-x^{3}+4x$ and solve for the stationary points.

$$p'(x)=-3x^{2}+4$$

$$x=\pm\frac{2}{\sqrt{3}}$$

Both values are real and distinct, about $\pm 1.15$, sitting in $(-2,0)$ and $(0,2)$. Rolle already requires those two turns for three distinct zeros. Two turning points occur, so the statement is True.
""",
    r"""
A root at the origin makes the intercept zero, and zero is not a positive number.

$$p(x)=-x^{3}+4x$$

$$p(0)=0$$

The claim is the strict inequality $p(0)>0$. Sitting on the axis fails that test.

$$0>0$$

The intercept is zero rather than positive, so the statement is False.
""",
    r"""
Among the zeros $-2$, $0$ and $2$ sits the number $0$, which kills the product at once.

$$(-2)\cdot 0\cdot 2=0$$

Equivalently, $p(x)=-x(x^{2}-4)$ has no constant term.

$$p(x)=-x^{3}+4x$$

The product of the zeros is $0$, so the statement is True.
""",
]

EXPL["math-9-103"] = [
    r"""
A negative leading coefficient on an odd-degree graph sends the right branch down. The stem names that lead as $-1$.

$$p(x)=-(x-1)(x-3)(x-5)$$

$$p(x)=-x^{3}+9x^{2}-23x+15$$

$$\lim_{x\to+\infty}p(x)=-\infty$$

As a check, $p(8)=-(7)(5)(3)=-105$. The right end dives, so the statement is True.
""",
    r"""
The middle marked crossing is $x=3$. Substitute that abscissa into the product of factors.

$$p(x)=-(x-1)(x-3)(x-5)$$

$$p(3)=-(2)(0)(-2)=0$$

The factor $(x-3)$ is zero, so the height is zero regardless of the other two factors.

$$p(3)=0$$

The graph meets the axis at $x=3$, so the statement is True.
""",
    r"""
Three distinct zeros $1$, $3$ and $5$ force a turn in $(1,3)$ and a turn in $(3,5)$.

$$p'(x)=-3x^{2}+18x-23$$

$$x=3\pm\frac{2\sqrt{3}}{3}$$

Those abscissas are about $1.85$ and $4.15$, both real. A quadratic $p'$ cannot hide a third root. Two turning points occur, so the statement is True.
""",
    r"""
With leading coefficient $-1$, the intercept equals the product of the three zeros.

$$p(0)=-( -1)(-3)(-5)=15$$

$$15>0$$

The graph meets the vertical axis fifteen units above the origin, which is the strict inequality in the claim.

$$p(x)=-x^{3}+9x^{2}-23x+15$$

The intercept is positive, so the statement is True.
""",
    r"""
Multiply the three zeros $1$, $3$ and $5$.

$$1\cdot 3\cdot 5=15$$

None of them is zero, so the product stays positive. The same number is the constant term of the expanded cubic.

$$p(0)=15$$

The product of the zeros is $15$, not $0$, so the statement is False.
""",
]

EXPL["math-9-104"] = [
    r"""
Meetings of the two graphs are the real roots of $p-\ell=0$. Subtract the parabola from the quartic.

$$p(x)-\ell(x)=x^{4}-7x^{2}+6$$

$$(x^{2}-1)(x^{2}-6)=0$$

$$x=\pm 1,\ \pm\sqrt{6}$$

Four distinct real solutions appear, which is more than two meetings. The graphs meet at least twice, so the statement is True.
""",
    r"""
The difference $p-\ell$ is the polynomial whose degree decides the claim.

$$p(x)-\ell(x)=x^{4}-6x^{2}+5-(x^{2}-1)$$

$$x^{4}-7x^{2}+6$$

The highest surviving power is $x^{4}$, so the difference is a quartic, not a cubic. A cubic would need that $x^{4}$ term to cancel, but $\ell$ only reaches degree $2$. The difference is not a cubic, so the statement is False.
""",
    r"""
Evenness is the identity $p(-x)=p(x)$. Substitute $-x$ into the given quartic.

$$p(x)=x^{4}-6x^{2}+5$$

$$p(-x)=(-x)^{4}-6(-x)^{2}+5$$

$$p(-x)=x^{4}-6x^{2}+5=p(x)$$

Only even powers appear, so reflecting the input changes nothing. The polynomial is even, so the statement is True.
""",
    r"""
A linear function has the shape $ax+b$, with highest power $x^{1}$. The second formula in the stem is a quadratic.

$$\ell(x)=x^{2}-1$$

The $x^{2}$ term is present with coefficient $1\neq 0$, so the graph of $\ell$ is a parabola, not a straight line.

$$\ell(-x)=x^{2}-1=\ell(x)$$

Evenness of $\ell$ is compatible with a quadratic, but it does not make $\ell$ linear. The function is not linear, so the statement is False.
""",
    r"""
Evaluate both rules at the origin and compare the two numbers.

$$p(0)=5$$

$$\ell(0)=-1$$

$$5=-1$$

The two heights are different: the quartic sits at $5$ while the parabola sits at $-1$. The graphs do not meet at $x=0$, so the statement is False.
""",
]

EXPL["math-9-105"] = [
    r"""
Meetings solve $p-\ell=0$. Expand the difference and watch the sign changes.

$$p(x)-\ell(x)=x^{3}-x^{2}-6x+4$$

The values $f(-3)=-14$, $f(-2)=4$, $f(1)=-2$ and $f(3)=4$ already force three sign changes.

$$f(-2)=4,\quad f(1)=-2,\quad f(3)=4$$

Three real roots (near $-2.32$, $0.64$ and $2.68$) mean three meetings, which is at least twice, so the statement is True.
""",
    r"""
Subtract the quadratic from the cubic and read the highest surviving power.

$$p(x)=x^{3}-6x$$

$$\ell(x)=x^{2}-4$$

$$p(x)-\ell(x)=x^{3}-x^{2}-6x+4$$

The $x^{3}$ term is untouched, so the difference is a cubic polynomial. That is exactly the shape named in the claim, so the statement is True.
""",
    r"""
Evenness would require $p(-x)=p(x)$. Test the given cubic against its reflection.

$$p(x)=x(x^{2}-6)=x^{3}-6x$$

$$p(-x)=-x^{3}+6x=-p(x)$$

The identity that holds is oddness, $p(-x)=-p(x)$, not evenness. Odd powers only cannot make an even function.

$$p(1)=-5,\quad p(-1)=5$$

The two values are opposites, so $p$ is not even, so the statement is False.
""",
    r"""
A linear function is a polynomial of degree $1$. The second formula in the stem has degree $2$.

$$\ell(x)=x^{2}-4$$

The coefficient of $x^{2}$ is $1\neq 0$, so $\ell$ is a quadratic. Its graph is a parabola opening upwards, not a straight line.

$$\ell(0)=-4,\quad \ell(2)=0$$

Those two heights already refuse to lie on a non-horizontal line through a single slope in the degree-$1$ sense. The function is not linear, so the statement is False.
""",
    r"""
Substitute $x=0$ into each formula separately.

$$p(0)=0\cdot(0-6)=0$$

$$\ell(0)=-4$$

$$0=-4$$

The cubic crosses the origin while the parabola sits four units below it. The two values are not equal, so the statement is False.
""",
]

EXPL["math-9-106"] = [
    r"""
Meetings are the real roots of $p(x)-\ell(x)=0$. Form that cubic and locate its sign changes.

$$p(x)-\ell(x)=x^{3}-4x-1$$

$$f(-2)=-1,\quad f(-1)=2,\quad f(0)=-1,\quad f(2)=-1,\quad f(3)=14$$

Three sign changes give three real roots, near $-1.86$, $-0.25$ and $2.11$. Three meetings is at least twice, so the statement is True.
""",
    r"""
The difference of a cubic and a line keeps the cubic term.

$$p(x)=x^{3}-3x$$

$$\ell(x)=x+1$$

$$p(x)-\ell(x)=x^{3}-4x-1$$

The highest power is $x^{3}$ with coefficient $1\neq 0$, so $p-\ell$ is a cubic polynomial. That matches the claim, so the statement is True.
""",
    r"""
Test $p(-x)$ against $p(x)$. The given rule is an odd cubic.

$$p(x)=x(x^{2}-3)=x^{3}-3x$$

$$p(-x)=-x^{3}+3x=-p(x)$$

Oddness is the opposite identity from evenness. A quick numerical check: $p(1)=-2$ while $p(-1)=2$.

$$p(1)=-2$$

The values are opposites, not equals, so $p$ is not even, so the statement is False.
""",
    r"""
A linear function has the form $ax+b$. The second formula in the stem is already written that way.

$$\ell(x)=x+1$$

The coefficient of $x$ is $1$ and there is no $x^{2}$ term, so the graph is a straight line of slope $1$ with intercept $1$.

$$\ell(0)=1,\quad \ell(2)=3$$

Those samples increase by $2$ when $x$ increases by $2$, the constant slope of a line. The function is linear, so the statement is True.
""",
    r"""
Compare the two heights at the origin.

$$p(0)=0\cdot(0-3)=0$$

$$\ell(0)=1$$

$$0=1$$

The cubic passes through the origin while the line sits at height $1$. The two values differ, so the statement is False.
""",
]

EXPL["math-9-107"] = [
    r"""
Meetings solve $p(x)=x$, or equivalently $p(x)-x=0$. Factor the difference.

$$p(x)-x=x^{4}-4x^{2}-x$$

$$x(x^{3}-4x-1)=0$$

One root is $x=0$. The cubic $x^{3}-4x-1$ has three further real roots (near $-1.86$, $-0.25$ and $2.11$), none of them zero. Four real meetings is at least twice, so the statement is True.
""",
    r"""
Read the degree of $p-\ell$ from the expanded difference.

$$p(x)=x^{4}-4x^{2}$$

$$\ell(x)=x$$

$$p(x)-\ell(x)=x^{4}-4x^{2}-x$$

The $x^{4}$ term survives, so the difference is a quartic, not a cubic. Cancelling would require $\ell$ to contain an $x^{4}$ term, which a line does not. The difference is not a cubic, so the statement is False.
""",
    r"""
Only even powers appear in $p$, so reflecting the input should change nothing.

$$p(x)=x^{2}(x^{2}-4)=x^{4}-4x^{2}$$

$$p(-x)=(-x)^{4}-4(-x)^{2}=x^{4}-4x^{2}$$

$$p(-x)=p(x)$$

The identity $p(-x)=p(x)$ is evenness. The graph is symmetric across the $y$-axis, so the statement is True.
""",
    r"""
The second formula is $\ell(x)=x$, the identity map, which is the linear function of slope $1$ through the origin.

$$\ell(x)=x$$

Highest power $x^{1}$, leading coefficient $1$, constant term $0$: that is the model example of a line.

$$\ell(0)=0,\quad \ell(3)=3$$

The samples lie on a straight line through the origin, so the statement is True.
""",
    r"""
Evaluate both functions at $x=0$.

$$p(0)=0^{2}(0-4)=0$$

$$\ell(0)=0$$

$$0=0$$

Both rules vanish at the origin, so the two graphs meet there. Direct inspection of $p(x)-x=x(x^{3}-4x-1)$ also shows the factor $x$. The values agree, so the statement is True.
""",
]

EXPL["math-9-108"] = [
    r"""
A monic cubic is pinned down by its roots with multiplicity. A double root at $1$ and a simple root at $-3$ give exactly one such polynomial.

$$p(x)=(x-1)^{2}(x+3)$$

$$p(x)=(x^{2}-2x+1)(x+3)$$

$$p(x)=x^{3}+x^{2}-5x+3$$

That is the unique monic cubic with those roots, matching the displayed formula, so the statement is True.
""",
    r"""
A factor $(x-1)^{2}$ forces both $p$ and $p'$ to vanish at $x=1$. Differentiate the product.

$$p'(x)=2(x-1)(x+3)+(x-1)^{2}$$

$$p'(x)=(x-1)(3x+5)$$

$$p'(1)=0\cdot 8=0$$

The double root is a stationary point. The slope at $x=1$ is zero, so the statement is True.
""",
    r"""
A simple root need not be stationary. Evaluate the same derivative at $x=-3$.

$$p'(x)=(x-1)(3x+5)$$

$$p'(-3)=(-4)(-9+5)=(-4)(-4)=16$$

The slope is $16$, not $0$. Geometrically the graph cuts the axis at $x=-3$ rather than touching it.

$$p'(-3)=16$$

The derivative does not vanish at the simple root, so the statement is False.
""",
    r"""
The constant term of a polynomial is its value at $x=0$. Substitute into the factored form.

$$p(0)=(-1)^{2}(3)=3$$

Expanding confirms the same constant: $p(x)=x^{3}+x^{2}-5x+3$.

$$p(x)=x^{3}+x^{2}-5x+3$$

The constant term is $3$, so the statement is True.
""",
    r"""
Count each root as often as its multiplicity, then add.

$$1+1+(-3)=-1$$

For a monic cubic $x^{3}+ax^{2}+\cdots$ that sum equals $-a$. Here $a=1$, so the weighted sum is $-1$.

$$p(x)=x^{3}+x^{2}-5x+3$$

The multiplicity-weighted sum of roots is $-1$, so the statement is True.
""",
]

EXPL["math-9-109"] = [
    r"""
The square of a quadratic has degree $4$, and subtracting $p$ itself cannot cancel that top term.

$$p(x)=x^{2}-2x+3$$

$$r(x)=p(x)^{2}-p(x)$$

The leading term of $p$ is $x^{2}$, so the leading term of $p^{2}$ is $x^{4}$. The subtracted copy of $p$ only reaches degree $2$.

$$r(x)=x^{4}-4x^{3}+9x^{2}-10x+6$$

The highest power in $r$ is $x^{4}$, so the statement is True.
""",
    r"""
Factor the difference of squares against a linear term in $p$ by grouping.

$$r(x)=p(x)^{2}-p(x)$$

$$r(x)=p(x)\bigl(p(x)-1\bigr)$$

That identity holds for any function $p$, and in particular for this quadratic. The two displayed formulae are the same polynomial.

$$r=p(p-1)$$

The factorisation is an algebraic identity, so the statement is True.
""",
    r"""
First read $p(0)$, then feed that number into $r=p^{2}-p$.

$$p(0)=3$$

$$r(0)=3^{2}-3=6$$

The same value comes from the factored form $r(0)=p(0)(p(0)-1)=3\cdot 2=6$.

$$3\cdot 2=6$$

The constant term of $r$ is $6$, so the statement is True.
""",
    r"""
Zeros of $r$ occur where $p=0$ or $p=1$. Complete the square for $p$.

$$p(x)=(x-1)^{2}+2$$

$$p(x)\ge 2$$

The range of $p$ starts at $2$ and never reaches $0$ or $1$. Both $p=0$ and $p=1$ would need a negative discriminant.

$$(x-1)^{2}+2=1\implies (x-1)^{2}=-1$$

No real $x$ makes $r$ vanish, so the statement is True.
""",
    r"""
The leading term of $r$ is the square of the leading term of $p$.

$$p(x)=x^{2}+\cdots$$

$$p(x)^{2}=x^{4}+\cdots$$

Subtracting $p$ does not touch $x^{4}$, so the leading coefficient of $r$ is $1^{2}=1$, not $2$.

$$r(x)=x^{4}-4x^{3}+\cdots$$

The leading coefficient is $1$, so the statement is False.
""",
]

EXPL["math-9-110"] = [
    r"""
The stem already writes the polynomial in descending powers. Compare coefficient by coefficient with the displayed formula.

$$p(x)=x^{4}-5x^{2}+4$$

Leading coefficient $1$, no $x^{3}$ term, $-5$ on $x^{2}$, constant $4$: every term matches. A factorisation is optional confirmation.

$$p(x)=(x^{2}-4)(x^{2}-1)$$

The identity is the given expression itself, so the statement is True.
""",
    r"""
Evenness is the identity $p(-x)=p(x)$. Only even powers appear in the given quartic.

$$p(x)=x^{4}-5x^{2}+4$$

$$p(-x)=(-x)^{4}-5(-x)^{2}+4$$

$$p(-x)=x^{4}-5x^{2}+4=p(x)$$

Reflecting the input leaves every term unchanged. The polynomial is even, so the statement is True.
""",
    r"""
Factor as a biquadratic, then split each quadratic.

$$p(x)=(x^{2}-4)(x^{2}-1)$$

$$p(x)=(x-2)(x+2)(x-1)(x+1)$$

The four zeros are $-2$, $-1$, $1$ and $2$, all real and pairwise distinct.

$$p(\pm 1)=0,\quad p(\pm 2)=0$$

Four distinct real zeros occur, so the statement is True.
""",
    r"""
An even degree with a positive leading coefficient sends both far ends up.

$$p(x)=x^{4}-5x^{2}+4$$

$$p(x)=x^{4}\left(1-\frac{5}{x^{2}}+\frac{4}{x^{4}}\right)$$

As $x\to\pm\infty$ the bracket tends to $1$ while $x^{4}\to+\infty$, so $p(x)\to+\infty$ on both sides.

$$\lim_{x\to\pm\infty}p(x)=+\infty$$

Both ends rise, so the statement is True.
""",
    r"""
A cubic has highest power $x^{3}$. The given polynomial has highest power $x^{4}$.

$$p(x)=x^{4}-5x^{2}+4$$

The coefficient of $x^{4}$ is $1\neq 0$, so the degree is $4$, not $3$. Factoring into quadratics does not lower that degree.

$$(x^{2}-4)(x^{2}-1)=x^{4}+\cdots$$

The function is a quartic, not a cubic, so the statement is False.
""",
]

EXPL["math-9-111"] = [
    r"""
The unique monic cubic with a double root at $2$ and a simple root at $-1$ is the product of those factors.

$$p(x)=(x-2)^{2}(x+1)$$

$$p(x)=(x^{2}-4x+4)(x+1)$$

$$p(x)=x^{3}-3x^{2}+4$$

That expansion matches the displayed formula coefficient by coefficient, so the statement is True.
""",
    r"""
A double factor $(x-2)^{2}$ forces the derivative to share the root $x=2$. Differentiate the product.

$$p'(x)=2(x-2)(x+1)+(x-2)^{2}$$

$$p'(x)=3x(x-2)$$

$$p'(2)=0$$

The slope at the double root is zero, so the statement is True.
""",
    r"""
The simple root $x=-1$ is a crossing, not a tangency. Evaluate $p'$ there.

$$p'(x)=3x(x-2)$$

$$p'(-1)=3(-1)(-3)=9$$

The slope is $9$, not $0$. Horizontal tangents occur only at $x=0$ and $x=2$.

$$p'(-1)=9$$

The derivative does not vanish at $x=-1$, so the statement is False.
""",
    r"""
The constant term is $p(0)$. Substitute into the factored cubic.

$$p(0)=(-2)^{2}(1)=4$$

Expanding gives $p(x)=x^{3}-3x^{2}+4$, whose constant term is $4$.

$$p(x)=x^{3}-3x^{2}+4$$

The constant term is $4$, so the statement is True.
""",
    r"""
Add the roots with multiplicity: the double root $2$ contributes twice.

$$2+2+(-1)=3$$

Vieta for the monic cubic $x^{3}-3x^{2}+4$ gives the same sum as the coefficient $3$ with opposite sign.

$$p(x)=x^{3}-3x^{2}+4$$

The multiplicity-weighted sum of roots is $3$, so the statement is True.
""",
]

EXPL["math-9-112"] = [
    r"""
Squaring a quadratic produces degree $4$, and subtracting $p$ cannot cancel $x^{4}$.

$$p(x)=x^{2}+x+1$$

$$r(x)=p(x)^{2}-p(x)$$

The leading term of $p^{2}$ is $(x^{2})^{2}=x^{4}$. The copy of $p$ that is subtracted only reaches degree $2$.

$$r(x)=x^{4}+2x^{3}+2x^{2}+x$$

The highest power in $r$ is $x^{4}$, so the statement is True.
""",
    r"""
Pull out a common factor $p$ from the two-term expression defining $r$.

$$r(x)=p(x)^{2}-p(x)$$

$$r(x)=p(x)\bigl(p(x)-1\bigr)$$

The identity does not depend on the particular quadratic. Both writings name the same polynomial.

$$r=p(p-1)$$

The factorisation holds identically, so the statement is True.
""",
    r"""
Substitute $x=0$ into $p$, then into $r=p^{2}-p$.

$$p(0)=1$$

$$r(0)=1^{2}-1=0$$

The factored form gives the same: $r(0)=1\cdot(1-1)=0$.

$$1\cdot 0=0$$

The value $r(0)$ is $0$, so the statement is True.
""",
    r"""
Zeros of $r$ occur where $p=0$ or $p=1$. The equation $p=1$ is immediate.

$$x^{2}+x+1=1$$

$$x^{2}+x=0$$

$$x(x+1)=0$$

The roots $x=0$ and $x=-1$ are real, and $r(0)=0$ already exhibits one of them. The polynomial $r$ has real zeros, so the statement is False.
""",
    r"""
The leading coefficient of $r$ is the square of the leading coefficient of $p$.

$$p(x)=x^{2}+\cdots$$

$$p(x)^{2}=x^{4}+\cdots$$

The coefficient of $x^{4}$ in $r$ is $1$, not $2$. Expanding confirms $r(x)=x^{4}+2x^{3}+2x^{2}+x$.

$$r(x)=x^{4}+\cdots$$

The leading coefficient is $1$, so the statement is False.
""",
]

EXPL["math-9-113"] = [
    r"""
Compare the stem with the displayed formula, term by term.

$$p(x)=x^{4}-10x^{2}+9$$

Leading $1$, no odd powers, $-10$ on $x^{2}$, constant $9$. Every coefficient agrees. Factoring is only a check.

$$p(x)=(x^{2}-9)(x^{2}-1)$$

The two writings are the same polynomial, so the statement is True.
""",
    r"""
Substitute $-x$ and compare with $p(x)$. All powers in the given quartic are even.

$$p(x)=x^{4}-10x^{2}+9$$

$$p(-x)=(-x)^{4}-10(-x)^{2}+9$$

$$p(-x)=x^{4}-10x^{2}+9=p(x)$$

The identity $p(-x)=p(x)$ holds, so $p$ is even, so the statement is True.
""",
    r"""
Factor the biquadratic into quadratics, then into linear factors.

$$p(x)=(x^{2}-9)(x^{2}-1)$$

$$p(x)=(x-3)(x+3)(x-1)(x+1)$$

The four zeros are $-3$, $-1$, $1$ and $3$, all real and distinct.

$$p(\pm 1)=0,\quad p(\pm 3)=0$$

Four distinct real zeros occur, so the statement is True.
""",
    r"""
A positive leading coefficient on an even degree sends both infinities upward.

$$p(x)=x^{4}-10x^{2}+9$$

$$p(x)=x^{4}\left(1-\frac{10}{x^{2}}+\frac{9}{x^{4}}\right)$$

As $x\to\pm\infty$ the bracket tends to $1$ and $x^{4}$ tends to $+\infty$.

$$\lim_{x\to\pm\infty}p(x)=+\infty$$

Both far ends rise, so the statement is True.
""",
    r"""
Degree is the largest exponent with a nonzero coefficient. Here that exponent is $4$.

$$p(x)=x^{4}-10x^{2}+9$$

A cubic would stop at $x^{3}$, but the $x^{4}$ term has coefficient $1\neq 0$.

$$(x^{2}-9)(x^{2}-1)=x^{4}+\cdots$$

The function is a quartic, not a cubic, so the statement is False.
""",
]

EXPL["math-9-114"] = [
    r"""
A monic cubic with a double root at $-1$ and a simple root at $2$ is the product of those factors.

$$p(x)=(x+1)^{2}(x-2)$$

$$p(x)=(x^{2}+2x+1)(x-2)$$

$$p(x)=x^{3}-3x-2$$

That is the unique monic cubic with the stated roots, matching the claim, so the statement is True.
""",
    r"""
The double factor $(x+1)^{2}$ makes $x=-1$ a root of the derivative as well.

$$p'(x)=2(x+1)(x-2)+(x+1)^{2}$$

$$p'(x)=3(x+1)(x-1)$$

$$p'(-1)=0$$

The slope at the double root is zero, so the statement is True.
""",
    r"""
The simple root $x=2$ is a crossing. Evaluate the derivative there.

$$p'(x)=3(x+1)(x-1)$$

$$p'(2)=3(3)(1)=9$$

The slope is $9$, not $0$. Stationary points sit at $x=\pm 1$, not at $x=2$.

$$p'(2)=9$$

The derivative does not vanish at the simple root, so the statement is False.
""",
    r"""
The constant term is the height at $x=0$. Substitute into the factored form.

$$p(0)=(1)^{2}(-2)=-2$$

Expanding gives $p(x)=x^{3}-3x-2$, whose last term is $-2$.

$$p(x)=x^{3}-3x-2$$

The constant term is $-2$, so the statement is True.
""",
    r"""
Add the roots counted with multiplicity.

$$(-1)+(-1)+2=0$$

Vieta agrees: the monic cubic $x^{3}+0\cdot x^{2}-3x-2$ has $x^{2}$-coefficient $0$, so the weighted sum of roots is $0$.

$$p(x)=x^{3}-3x-2$$

The multiplicity-weighted sum of roots is $0$, so the statement is True.
""",
]

EXPL["math-9-115"] = [
    r"""
The square of a quadratic has degree $4$. Subtracting $p$ leaves that degree unchanged.

$$p(x)=x^{2}-3x+5$$

$$r(x)=p(x)^{2}-p(x)$$

The leading term of $p^{2}$ is $x^{4}$. The subtracted copy of $p$ only reaches $x^{2}$, so it cannot cancel the top power.

$$r(x)=x^{4}-6x^{3}+18x^{2}-27x+20$$

The highest power in $r$ is $x^{4}$, so the statement is True.
""",
    r"""
Rewrite $p^{2}-p$ by factoring out $p$.

$$r(x)=p(x)^{2}-p(x)$$

$$r(x)=p(x)\bigl(p(x)-1\bigr)$$

The two expressions are identical as polynomials. The identity holds for this $p$ just as it holds in general.

$$r=p(p-1)$$

The factorisation is valid, so the statement is True.
""",
    r"""
Compute $p(0)$ first, then $r(0)=p(0)^{2}-p(0)$.

$$p(0)=5$$

$$r(0)=25-5=20$$

The factored form agrees: $r(0)=5\cdot(5-1)=20$.

$$5\cdot 4=20$$

The value $r(0)$ is $20$, so the statement is True.
""",
    r"""
Zeros of $r$ need $p=0$ or $p=1$. Complete the square.

$$p(x)=\left(x-\frac{3}{2}\right)^{2}+\frac{11}{4}$$

$$p(x)\ge\frac{11}{4}>1$$

The range of $p$ starts above $1$, so it never hits $0$ and never hits $1$. The discriminants of $p=0$ and $p=1$ are $9-20<0$ and $9-16<0$.

$$p(x)-1=x^{2}-3x+4$$

No real zero of $r$ exists, so the statement is True.
""",
    r"""
The leading coefficient of $r$ is the square of the leading coefficient of $p$.

$$p(x)=x^{2}+\cdots$$

$$p(x)^{2}=x^{4}+\cdots$$

That coefficient is $1$, not $2$. Expanding $r$ begins $x^{4}-6x^{3}+\cdots$.

$$r(x)=x^{4}-6x^{3}+\cdots$$

The leading coefficient is $1$, so the statement is False.
""",
]


def _body(block: str) -> str:
    return block.strip()


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    missing = [tid for tid in TARGET_IDS if tid not in EXPL]
    if missing:
        raise SystemExit(f"no explanations authored for: {missing}")
    extra = [tid for tid in EXPL if tid not in TARGET_IDS]
    if extra:
        raise SystemExit(f"unexpected EXPL ids: {extra}")

    for tid in TARGET_IDS:
        task = by_id[tid]
        bodies = [_body(block) for block in EXPL[tid]]
        if len(bodies) != len(task["statements"]):
            raise SystemExit(f"{tid}: expected {len(task['statements'])} explanations, got {len(bodies)}")
        for (fix_id, index), value in KEY_FIXES.items():
            if fix_id == tid:
                task["answer_key"][index] = value
        task["tactical_explanations"] = [
            f"**{LETTERS[i]}.** \u2192 {'True' if key else 'False'}\n\n{body}"
            for i, (key, body) in enumerate(zip(task["answer_key"], bodies))
        ]

    problems: list[str] = []
    lengths: list[int] = []
    for tid in TARGET_IDS:
        task = by_id[tid]
        for i, (key, text) in enumerate(zip(task["answer_key"], task["tactical_explanations"])):
            label = f"{tid}.{LETTERS[i]}"
            n = len(text)
            lengths.append(n)
            verdict = "True" if key else "False"
            if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
                problems.append(f"{label}: header does not match key ({verdict})")
            if not text.endswith(f", so the statement is {verdict}."):
                problems.append(f"{label}: closing line missing or wrong verdict")
            if n < 350 or n > 700:
                problems.append(f"{label}: length {n} outside 350-700")
            for pattern in BANNED:
                if re.search(pattern, text):
                    problems.append(f"{label}: banned phrase {pattern!r}")
            displays = re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)
            if not displays:
                problems.append(f"{label}: no display formulae")
            if any("\n" in d for d in displays):
                problems.append(f"{label}: newline inside a display")
            if any(not d.strip() for d in displays):
                problems.append(f"{label}: empty display")
            if len(displays) != len(set(displays)):
                problems.append(f"{label}: duplicate display {displays!r}")
            openings = re.findall(r"\u2192 (?:True|False)\n\n(.+)", text)
            if not openings:
                problems.append(f"{label}: no narrative opener after the header")

        first_lines = [
            re.split(r"\n\n", text, maxsplit=2)[1] for text in task["tactical_explanations"]
        ]
        if len(set(first_lines)) < 4:
            problems.append(f"{tid}: repeated openers across letters")
        display_seqs = [
            tuple(re.findall(r"\$\$(.+?)\$\$", text, flags=re.S))
            for text in task["tactical_explanations"]
        ]
        if len(set(display_seqs)) < 4:
            problems.append(f"{tid}: repeated display sequences across letters")

    if problems:
        raise SystemExit("validation failed:\n" + "\n".join(problems))

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    print(f"tasks rewritten: {len(TARGET_IDS)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median explanation length: {int(statistics.median(lengths))} characters")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections applied: {len(KEY_FIXES)}")


if __name__ == "__main__":
    main()

