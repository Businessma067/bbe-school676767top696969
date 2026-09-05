#!/usr/bin/env python3
"""Deepen Ch7 CORE (math-7-1 … math-7-50) explanations toward MATH 7.79 depth.

Restores tasks 51+ from HEAD. Overlays only solution_overview and
tactical_explanations on math-7-1 … math-7-50.
"""
from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")
KEEP = {f"math-7-{i}" for i in range(1, 51)}
LETTERS = "ABCDE"

BANNED = [
    "as in the overview",
    "from the overview",
    "as above",
    r"\deg",
    r"\circ",
    "already found",
    "already computed",
]


def expl(letter: str, truth: bool, *parts: str) -> str:
    verdict = "True" if truth else "False"
    body = "\n\n".join(p.strip() for p in parts if str(p).strip())
    text = f"**{letter}.** → {verdict}\n\n{body}"
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        raise ValueError(f"{letter} missing close")
    if text.count("so the statement is") != 1:
        raise ValueError(f"{letter} close count")
    return text


def splice(text: str, *parts: str) -> str:
    extra = "\n\n".join(p.strip() for p in parts if str(p).strip())
    if not extra:
        return text
    head, close = text.rsplit("\n\n", 1)
    if "so the statement is" not in close:
        raise ValueError("splice: last paragraph is not the close")
    return head + "\n\n" + extra + "\n\n" + close


# ---------------------------------------------------------------------------
# Overviews: short structural prep (~7.79 length), letters do not depend on them
# ---------------------------------------------------------------------------

OV: dict[str, str] = {
    "math-7-1": r"""The stem hands over a concrete line and a concrete parabola.

$$f(x)=4x+2\qquad g(x)=x^{2}-x-2$$

The axis of $g$ is read from the first two coefficients, and the vertex is the value of $g$ there. Meetings of the two graphs are the roots of the quadratic $f-g$, of which there can be at most two. Because $f$ is a non-constant line, the three maps $f^{2}$, $f$ and $1$ already span every parabola. Vieta still reads the sum of the roots of $g$ as $-b/a$, without solving.""",
    "math-7-2": r"""A line and a parabola are written with numbers already in place.

$$f(x)=3x-5\qquad g(x)=-2x^{2}+x+4$$

The slope of a line is the coefficient of $x$, and the constant term of either formula is the height on the $y$-axis. The opening of $g$ is decided by the sign in front of $x^{2}$ and by nothing else. A claimed slope with the wrong sign is the same coefficient with a minus attached, which a unit step $f(1)-f(0)$ immediately rejects.""",
    "math-7-3": r"""The two rules are concrete, so the axis formula and a single substitution settle the geometric claims.

$$f(x)=2x+1\qquad g(x)=x^{2}-6x+5$$

The axis of $g$ sits at $x=-b/(2a)$, independent of the constant term. Completing the square on the same parabola recovers the height on that axis. Dropping the minus sign in $-b/(2a)$ is the usual way to land on the opposite abscissa $x=-3$.""",
    "math-7-4": r"""The fare is a single line: a fixed call-out plus a constant charge per kilometre.

$$C(x)=3x+5$$

The slope $3$ is the change of fare for each extra kilometre, and the constant $5$ is charged once. Doubling $x$ therefore cannot double $C$, because that constant is not doubled with the rest. Every claimed fare is a substitution into this one model, and the first difference $C(x+1)-C(x)$ is the constant $3$.""",
    "math-7-5": r"""The stem fixes a line through the origin and a difference of squares.

$$f(x)=5x\qquad g(x)=x^{2}-4$$

The slope and the two values at $x=0$ are read off the coefficients. The roots of $g$ are the solutions of $g(x)=0$, and the sign of the leading coefficient decides the opening. Factoring $g=(x-2)(x+2)$ names both zeros at sight, without the quadratic formula.""",
    "math-7-6": r"""The parabola is already in completed-square form, which displays the vertex directly.

$$g(x)=(x-2)^{2}+3\qquad f(x)=x-2$$

The axis is the vertical line through that vertex. A shared root would have to kill both formulas at the same input, so each formula has to be tested there separately. The opening is the sign in front of the square, and the slope of $f$ is the invisible $1$ in front of $x$.""",
    "math-7-7": r"""A shallow line sits next to a parabola that already factors through the origin.

$$f(x)=\frac{1}{2}x+7\qquad g(x)=3x^{2}-x$$

The slope of $f$ is the coefficient of $x$, not the constant term. The axis of $g$ is $x=-b/(2a)$, and the opening is the sign of the leading $3$. The missing constant term of $g$ is the $y$-intercept $0$, visible as the factor $x$ in $x(3x-1)$.""",
    "math-7-8": r"""Meetings of the identity line with this parabola are the roots of $g-f$.

$$f(x)=x\qquad g(x)=x^{2}-2x$$

That difference is still quadratic, so there are at most two real meetings. Each claimed abscissa can also be checked by comparing the two heights there. The opening of $g$ is the sign of the leading $1$, and the slope of the identity line is $1$.""",
    "math-7-9": r"""The height of the ball is one downward parabola.

$$H(x)=-5x^{2}+20x$$

The axis $x=-b/(2a)$ locates the highest point, and factoring $H$ locates the two times when the height is zero. Between those two roots the leading coefficient is negative, so the height stays positive. A claimed height at a particular second is a substitution, not the vertex value.""",
    "math-7-10": r"""The parabola arrives already factored, so its roots are the numbers that kill a factor.

$$g(x)=(x+1)(x-4)\qquad f(x)=-2x+3$$

Vieta then reads the sum of those roots off the expanded middle coefficient. The slope of $f$ is the coefficient of $x$, and the opening of $g$ is the sign of the leading $1$ obtained after expanding the product. The constant term of $f$ is the $y$-intercept.""",
    "math-7-11": r"""A single falling line is given.

$$s(x)=6-2x$$

Ordering the terms as $-2x+6$ displays the slope and the $y$-intercept at once. Setting the height to zero locates the unique $x$-intercept, and the sign of the slope decides whether the graph rises or falls. A claimed height at one input is a substitution into this same rule.""",
    "math-7-12": r"""Vieta and the axis formula both run on the coefficients of $g$ without solving.

$$f(x)=2x-1\qquad g(x)=x^{2}-5x+6$$

The sum of the roots is $-b/a$ and the product is $c/a$. The axis is the midpoint of the two roots, which is also $x=-b/(2a)$. Factoring $(x-2)(x-3)$ names the roots individually and checks every Vieta claim.""",
    "math-7-13": r"""The vertex of $g$ is the point on the axis, found by substituting $x=-b/(2a)$ into $g$.

$$f(x)=x+3\qquad g(x)=2x^{2}-8x+3$$

The constant term $g(0)$ is the $y$-intercept, which is a different point from the vertex unless the axis happens to be the $y$-axis. The opening is the sign of the leading $2$. A claimed value of the line is a single substitution at the same abscissa.""",
    "math-7-14": r"""The two graphs meet where $g-f$ vanishes.

$$f(x)=x+1\qquad g(x)=x^{2}-x-2$$

That difference is quadratic, so the meeting count is $0$, $1$ or $2$. Each claimed abscissa can be tested by comparing the two heights, and Vieta reads the sum of the roots of $g$ off its coefficients. The slope of $f$ decides whether the line rises or falls.""",
    "math-7-15": r"""Completing the square rewrites $g$ so that the vertex is visible.

$$g(x)=x^{2}+4x+1\qquad f(x)=-x$$

The square $(x+2)^{2}$ is never negative, so the constant sitting beside it is the extreme value of $g$. The $y$-intercept $g(0)$ is a different number, and the slope of $f$ is the coefficient of $x$, including its minus sign.""",
    "math-7-16": r"""The unusual fraction is still a line, once it is expanded.

$$t(x)=\frac{5-x}{2}=-\frac{1}{2}x+\frac{5}{2}$$

The slope, the $y$-intercept and the $x$-intercept are then the usual three numbers. A claimed point lies on the graph only when $t$ of its first coordinate equals its second. A step of $4$ in the input always produces $4$ times the slope as the change of height.""",
    "math-7-17": r"""The parabola is scaled and already factored, so the roots and the leading coefficient are both on display.

$$g(x)=2(x-1)(x-3)\qquad f(x)=3x$$

The sum of the roots is still the sum of $1$ and $3$, independent of the leading $2$. The axis is the midpoint of those two roots. Expanding confirms the leading coefficient $2$, and the slope of $f$ is the coefficient of $x$.""",
    "math-7-18": r"""A falling line is paired with a factorable parabola.

$$f(x)=-x+2\qquad g(x)=x^{2}+x-6$$

Vieta reads the sum of the roots of $g$ as $-b/a$. The axis is half of that sum, and a claimed zero of $f$ is a single substitution. The opening of $g$ is the sign of the leading $1$, visible before any factoring.""",
    "math-7-19": r"""A difference of squares is even, because only even powers of $x$ appear.

$$g(x)=x^{2}-9\qquad f(x)=2x+1$$

Evenness of $g$ is the identity $g(-x)=g(x)$, which forces the axis onto the $y$-axis. A line with a non-zero slope cannot be even: $f(-x)$ reverses the linear term. Vieta’s product is the constant term of $g$.""",
    "math-7-20": r"""The table is sampled at unit steps, so the first differences of the $y$-column decide whether a line can fit.

$$y=4x-3$$

Constant first differences of $4$ are the slope. The same slope is the average rate of change on any interval, and the next table value is one more step of that slope. Checking a later row against $4x-3$ confirms that this is the unique line through the given pairs.""",
    "math-7-21": r"""A line of slope $1$ sits next to a difference of squares.

$$f(x)=x-1\qquad g(x)=x^{2}-1$$

Because $f$ is non-constant, $g$ can be rebuilt from $f^{2}$, $f$ and a constant. Meetings are the roots of $g-f$, and opening is a property of parabolas, not of lines. Vieta’s sum for $g$ is zero because the middle coefficient is absent.""",
    "math-7-22": r"""Everything is stated for a general parabola, so the reasoning runs on $\Delta=b^{2}-4ac$ and on the axis $x=-b/(2a)$, not on a private numerical example.

$$\Delta=b^{2}-4ac\qquad x=-\frac{b}{2a}$$

The sign of $\Delta$ counts the real roots, but the vertex exists whether or not those roots are real: the axis formula never consults $\Delta$. Opposite signs of $a$ and $c$ make $-4ac$ positive, so they force $\Delta>0$. When two real roots exist, the axis is their midpoint.""",
    "math-7-23": r"""Evenness of a quadratic is the identity $g(-x)=g(x)$.

$$g(-x)=ax^{2}-bx+c$$

That identity holds for every $x$ precisely when the odd middle term vanishes. The axis then sits on the $y$-axis, and multiplying by $-1$ cannot create a middle term that was not there. An even quadratic need not be odd: $g(0)=c$ is free.""",
    "math-7-24": r"""Tangency is the algebraic statement that $g-f$ has a repeated root.

$$g(x)=x^{2}-4x+5\qquad f(x)=2x-3$$

A repeated root would also force the two derivatives to agree at that abscissa. The vertex of $g$ is still read from $x=-b/(2a)$, independently of the line. A positive discriminant of $g-f$ is two distinct crossings, not a touch.""",
    "math-7-25": r"""Nesting is substitution: $g(f(x))$ replaces $x$ inside $g$ by the line.

$$f(x)=2x+1\qquad g(x)=x^{2}-x-2$$

The two orders $g(f(x))$ and $f(g(x))$ are different maps in general. Each claimed numeric value is a two-step evaluation, and the composite $g(f(x))$ remains quadratic because a line inside a square still produces a square. Vieta’s sum for $g$ is $-b/a$.""",
    "math-7-26": r"""Completing the square displays the vertex of $g$, after which meetings with the line are a discriminant computation.

$$f(x)=3x\qquad g(x)=x^{2}-6x+10$$

The square $(x-3)^{2}$ is never negative, so the constant beside it is the global minimum. The graphs meet where $g-f$ vanishes, and equality of the two heights at the axis would be a meeting there. The axis is the completed-square shift $x=3$.""",
    "math-7-27": r"""The line is rebuilt from its slope and intercept, and the monic parabola from its two roots.

$$f(x)=2x+1\qquad g(x)=(x-2)(x-3)$$

Vieta then reads the sum of those roots. Because $f$ is non-constant, a rewrite $g=Af^{2}+Bf+C$ exists, and $g-f$ remains quadratic. The middle coefficient of the expanded $g$ is minus the sum, not the sum itself.""",
    "math-7-28": r"""The vertex of $g$ is the point on its axis; it lies on the line only if the two heights agree there.

$$f(x)=x-1\qquad g(x)=x^{2}-2x-3$$

Vieta’s sum is $-b/a$, which is twice the axis abscissa, not the axis itself. Nesting the line after the parabola only rescales and shifts the values, so the highest power stays $2$. Factoring names the two roots of $g$ individually.""",
    "math-7-29": r"""The vertical gap at a chosen abscissa is the difference of the two heights there.

$$f(x)=4x-1\qquad g(x)=x^{2}-4x+1$$

The axis of $g$ is $x=-b/(2a)$. Tangency at that axis would require both $g=f$ and $g'=f'$ there, which is a stronger demand than a mere gap computation. Vieta’s sum is twice the axis abscissa, and the opening is the sign of the leading $1$.""",
    "math-7-30": r"""A discriminant can be negative, in which case $g$ never meets the $x$-axis.

$$f(x)=x\qquad g(x)=x^{2}+x+1$$

Meetings with the identity line are the roots of $g-f$, a different quadratic. Vieta still supplies the product of the two complex roots from the constant term. The vertex exists regardless, at $x=-b/(2a)$, and a constant function would have slope $0$.""",
    "math-7-31": r"""A non-constant line $f(x)=mx+q$ can be used as a new coordinate on the $x$-axis.

$$g(x)=A(mx+q)^{2}+B(mx+q)+C$$

Matching the $x^{2}$ coefficients forces $A=a/m^{2}$ uniquely. A constant function cannot play this role, because its square is still constant and cannot produce a genuine $x^{2}$ term. Nesting $g(f(x))$ is a different operation from writing $g$ in terms of $f$.""",
    "math-7-32": r"""Completed-square form names the vertex as the pair $(h,k)$ sitting in the formula.

$$g(x)=a(x-h)^{2}+k$$

The axis is the vertical line $x=h$, independent of the height $k$. The sign of $a$ decides whether $k$ is a minimum or a maximum, and replacing $h$ by $-h$ moves that axis unless $h$ was already $0$. Every quadratic completes the square in exactly one way.""",
    "math-7-33": r"""Meetings of a line and a parabola are the roots of the quadratic $g-f$.

$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q)$$

A quadratic equation has at most two real solutions, so three meetings are impossible. Vertical translation of $g$ only changes the constant term of that difference, never its degree. A constant line still meets $g$ according to a discriminant, which can be negative.""",
    "math-7-34": r"""The square $(x-h)^{2}$ is never negative, so the range of $g$ is cut off at the vertex height $k$.

$$g(x)=a(x-h)^{2}+k$$

If $a>0$ the values run from $k$ upwards; if $a<0$ they run from $k$ downwards. A non-constant line has no such cut-off, because solving $mx+q=y$ produces a real $x$ for every real $y$. A vertex on the $x$-axis with $a>0$ keeps $g$ non-negative.""",
    "math-7-35": r"""The difference $d=f-g$ is the function whose zeros are the meeting abscissas.

$$d(x)=f(x)-g(x)$$

Subtracting a parabola from a line leaves a parabola (leading coefficient $-a\neq 0$). The value $d(0)$ is the vertical gap on the $y$-axis, and two zeros of $d$ are two meetings, not three. The graph of $d$ is itself a parabola, opening opposite to $g$.""",
    "math-7-36": r"""A one-parameter family of lines through the origin is compared with a fixed parabola.

$$g(x)=x^{2}-2x+2\qquad f_{t}(x)=tx$$

Meetings are governed by $\Delta(t)$ of $g-f_{t}$. Tangency is $\Delta(t)=0$, which is a quadratic equation in $t$ and can therefore have two real roots. A negative discriminant is a miss, and the vertex height of $g$ is $g(1)$, not zero.""",
    "math-7-37": r"""Nesting substitutes one formula into the other; the two orders are different maps.

$$f(x)=3x-1\qquad g(x)=2x^{2}-4x-6$$

A line applied after a parabola only rescales the values, so $f(g(x))$ stays quadratic. Matching $g=Af^{2}+Bf+C$ reads the leading coefficient $A$ from $a/m^{2}$. Each claimed nested value is a two-step evaluation at a concrete input.""",
    "math-7-38": r"""Completing the square must copy the sign of the middle coefficient into the shift.

$$g(x)=x^{2}-3x-10\qquad f(x)=-3x+6$$

The average rate of $g$ on an interval is a difference quotient, which need not equal the slope of $f$. A vertical translation of $g$ cannot cancel the $x^{2}$ term of $f-g$. The wrong shift $(x+3/2)^{2}$ expands with the opposite middle coefficient.""",
    "math-7-39": r"""The difference $d=f-g$ is computed by subtracting the two given formulas.

$$f(x)=2x+3\qquad g(x)=x^{2}-x-2$$

The leading term of $d$ comes from $-g$, so $d$ is quadratic with leading coefficient $-1$. Meetings of the graphs are exactly the zeros of $d$, of which a quadratic supplies at most two. The constant term $d(0)$ is the vertical gap on the $y$-axis.""",
    "math-7-40": r"""A family of parabolas with moving leading coefficient is compared with the identity line.

$$g_{a}(x)=ax^{2}-4x+1\qquad f(x)=x$$

The difference $g_{a}-f$ has discriminant $25-4a$. The axis of $g_{a}$ is $x=2/a$, which still depends on $a$, and the opening is the sign of $a$. Tangency is the vanishing of that discriminant at a legitimate non-zero $a$.""",
    "math-7-41": r"""The axis and Vieta’s sum are two different readings of the same two coefficients.

$$\ell:\; x=-\frac{b}{2a}\qquad S=-\frac{b}{a}$$

Thus the axis is always the vertical line $x=S/2$, not $x=S$. The constant term $c$ is absent from both formulas, so it cannot move the axis. A positive sum does not force both roots to be positive, because the product $c/a$ can still be negative.""",
    "math-7-42": r"""Nesting two polynomials multiplies their highest powers instead of adding them.

$$f(x)=mx+q\qquad g(x)=ax^{2}+bx+c$$

A line inside a parabola, or a parabola inside a line, therefore still produces highest power $2$. The two orders $g(f(x))$ and $f(g(x))$ are different functions in general. Replacing the inner map by $f^{2}$ multiplies an extra $2$ and reaches $x^{4}$.""",
    "math-7-43": r"""A non-constant line keeps a constant slope, so it never turns.

$$f(x)=mx+k\qquad g(x)=ax^{2}+bx+c$$

A parabola always turns at its axis, so it cannot be strictly monotone on the whole real line. On either half-line determined by that axis, the restriction of $g$ does not turn any more. A constant function has slope zero and is not strictly monotone.""",
    "math-7-44": r"""Tangency of $y=tx+1$ with a general parabola is a discriminant condition in $t$.

$$\Delta(t)=(b-t)^{2}-4a(c-1)$$

That square equals $4a(c-1)$ only when the right-hand side is non-negative, which a general triple $(a,b,c)$ need not grant. Changing the intercept of the line changes the constant term of $g-f_{t}$ and can therefore change the picture. Two distinct roots of $g-f_{t}$ are two crossings, not a touch.""",
    "math-7-45": r"""Three elementary moves are applied to a general parabola.

$$g_{1}(x)=g(x-r)\qquad g_{2}(x)=g(x)+s\qquad g_{3}(x)=\lambda g(x)$$

A horizontal shift moves the axis; a vertical shift does not. Scaling by $\lambda\neq 0$ keeps the roots (it does not add or remove zeros) but flips the opening when $\lambda$ is negative. The leading coefficient of $g_{1}$ is still $a$, even though the axis has moved.""",
    "math-7-46": r"""The same concrete pair as a rewrite-and-vertex exercise.

$$f(x)=4x+2\qquad g(x)=x^{2}-x-2$$

Matching $g=Af^{2}+Bf+C$ is a three-coefficient linear system. Completing the square displays the vertex, and the two nested evaluations $g(f(0))$ and $f(g(0))$ are different numbers in general. The difference $f-g$ stays quadratic, so three meetings cannot occur.""",
    "math-7-47": r"""Every line of the family shares the $y$-intercept of the given parabola.

$$g(x)=x^{2}-4x+1\qquad f_{k}(x)=kx+1$$

The difference $g-f_{k}$ therefore always has a factor $x$, so $x=0$ is a meeting for every slope. Tangency is that remaining root colliding with the origin, which happens for exactly one $k$, namely the derivative $g'(0)$. For every other slope a second meeting exists, and it can be placed in $x>0$ by taking $k>-4$.""",
    "math-7-48": r"""The monic factor $(x-2)(x-4)$ is scaled by the announced leading coefficient $2$.

$$g(x)=2(x-2)(x-4)\qquad f(x)=5x-2$$

The distance between the roots is $|4-2|$, independent of that leading $2$. Completing the square on the expanded formula displays the vertex at the midpoint $x=3$. Matching $g=Af^{2}+Bf+C$ reads $A$ from the ratio of leading coefficients, and the two nested orders disagree at $x=0$.""",
    "math-7-49": r"""The average rate of $g$ on an interval is a difference quotient, not the slope of a neighbouring line.

$$g(x)=x^{2}-6x+5\qquad f(x)=4x-8$$

The mean-value theorem still produces a point of $(0,2)$ where $g'$ equals that average. Vieta’s sum is $-b/a$, and a nested evaluation $f(g(0))$ is two substitutions. Completing the square uses the axis $x=3$ as the shift.""",
    "math-7-50": r"""A vertical shift of $g$ changes only the constant term of $g-f$.

$$f(x)=2x\qquad g_{s}(x)=x^{2}-x-2+s$$

The discriminant of $g_{s}-f$ is linear in $s$, so it can be positive, zero or negative. The axis formula ignores the constant term, so $s$ cannot move the axis, and the difference stays quadratic. A third meeting would require a cubic difference, which a vertical shift cannot create.""",
}


import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch7_779_letters import REPLACE  # noqa: E402
from _ch7_779_inserts import INSERT as INSERT_A  # noqa: E402
from _ch7_779_inserts_b import INSERT_B  # noqa: E402

INSERT: dict[tuple[str, str], tuple[str, ...]] = {**INSERT_A, **INSERT_B}

# Second-pass beats for letters that remain thinner than the 7.79 floor.
EXTRA2: dict[tuple[str, str], tuple[str, ...]] = {
    ("math-7-8", "E"): (
        r"There is no constant term to confuse with the slope: $f(0)=0$, and the graph is the diagonal through the origin.",
        r"$$f(x)=x$$",
    ),
    ("math-7-10", "E"): (
        r"A unit step from the intercept lowers the height by $2$, which is the slope, not a change of intercept.",
        r"$$f(1)=1$$",
    ),
    ("math-7-11", "A"): (
        r"Writing $s(x)=6-2x$ without reordering can hide the coefficient; the $-2$ in front of $x$ is still the slope.",
        r"$$s(x)=-2x+6$$",
    ),
    ("math-7-11", "B"): (
        r"A line meets the $y$-axis at exactly one point. That point is $(0,6)$.",
        r"$$(0,s(0))=(0,6)$$",
    ),
    ("math-7-12", "D"): (
        r"The constant $-1$ is the $y$-intercept, which never enters the slope.",
        r"$$f(0)=-1\qquad m=2$$",
    ),
    ("math-7-12", "E"): (
        r"The companion root $x=3$ is a different claim; here only $g(2)$ is asked.",
        r"$$g(3)=0\qquad g(2)=0$$",
    ),
    ("math-7-13", "C"): (
        r"The midpoint of the two (possibly complex) roots is the same $x=2$, because Vieta’s sum is $4$.",
        r"$$\frac{S}{2}=\frac{4}{2}=2$$",
    ),
    ("math-7-13", "D"): (
        r"No property of $g$ is required: the claim names only the line at this one input.",
        r"$$f(x)=x+3\qquad f(2)=5$$",
    ),
    ("math-7-14", "E"): (
        r"The constant $+1$ only lifts the graph; it cannot reverse a positive slope.",
        r"$$f(x)=x+1\qquad m=1>0$$",
    ),
    ("math-7-15", "D"): (
        r"The graph of $y=-x$ is the decreasing diagonal through the origin.",
        r"$$f(0)=0\qquad f(1)=-1$$",
    ),
    ("math-7-17", "E"): (
        r"The graph of $y=3x$ is a line through the origin of slope $3$, with no constant term to confuse with $m$.",
        r"$$f(x)=3x\qquad f(0)=0$$",
    ),
    ("math-7-18", "C"): (
        r"The unique $x$-intercept of a non-constant line is this one root.",
        r"$$-x+2=0\qquad x=2$$",
    ),
    ("math-7-18", "E"): (
        r"A test on either side of the axis $x=-1/2$ sits above the vertex, which is the geometry of $a>0$.",
        r"$$g(-3)=0\qquad g(2)=0$$",
    ),
    ("math-7-19", "C"): (
        r"A difference of squares $x^{2}-9$ has constant term $-9$ and leading $1$, so the product is that ratio.",
        r"$$P=\frac{-9}{1}=-9$$",
    ),
    ("math-7-19", "E"): (
        r"The companion root $x=-3$ is a different claim; here only $g(3)$ is asked.",
        r"$$g(-3)=0$$",
    ),
    ("math-7-21", "B"): (
        r"The two roots $\pm 1$ are exactly the zeros of a difference of squares, with no extra factor.",
        r"$$g(1)=0\qquad g(-1)=0$$",
    ),
    ("math-7-21", "D"): (
        r"A parabola with no $x$ term is symmetric about $x=0$, so its roots (when real) are opposites and add to $0$.",
        r"$$b=0\qquad S=0$$",
    ),
    ("math-7-23", "D"): (
        r"Conversely, if $b\neq 0$ then the axis is not the $y$-axis and $g$ fails evenness at $x=1$.",
        r"$$g(1)-g(-1)=2b$$",
    ),
    ("math-7-24", "C"): (
        r"Because $a=1>0$, this vertex is the unique lowest point of $g$.",
        r"$$g(x)=(x-2)^{2}+1\ge 1$$",
    ),
    ("math-7-26", "D"): (
        r"The constant term $10$ never enters the axis formula, so it cannot move $x=3$.",
        r"$$x=-\frac{b}{2a}=3$$",
    ),
    ("math-7-28", "B"): (
        r"Because $a=1>0$, this vertex is the unique lowest point, four units below the $x$-axis.",
        r"$$g(x)=(x-1)^{2}-4\ge -4$$",
    ),
    ("math-7-28", "C"): (
        r"A product of two linear factors has no third real root.",
        r"$$(x-3)(x+1)=0$$",
    ),
    ("math-7-29", "B"): (
        r"The constant term $1$ never enters the axis formula.",
        r"$$x=-\frac{-4}{2}=2$$",
    ),
    ("math-7-29", "D"): (
        r"Dropping the minus in $-b/a$ would produce the trap $-4$ instead of $4$.",
        r"$$S=-\frac{-4}{1}=4$$",
    ),
    ("math-7-29", "E"): (
        r"The leading $1$ is visible before completing the square.",
        r"$$a=1>0$$",
    ),
    ("math-7-38", "D"): (
        r"The two substitutions must be done in this order: parabola first, then the line.",
        r"$$g(0)=-10\qquad f(-10)=36$$",
    ),
    ("math-7-39", "A"): (
        r"Expanding $f-g$ term by term makes the $-x^{2}$ impossible to miss.",
        r"$$(2x+3)-(x^{2}-x-2)=-x^{2}+3x+5$$",
    ),
    ("math-7-46", "C"): (
        r"The two orders of nesting are different maps; a single input $x=0$ already separates them.",
        r"$$0\neq -6$$",
    ),
    ("math-7-48", "C"): (
        r"The two orders of nesting are different maps; a single input $x=0$ already separates them.",
        r"$$48\neq 78$$",
    ),
    ("math-7-49", "E"): (
        r"The two substitutions must be done in this order: parabola first, then the line.",
        r"$$g(0)=5\qquad f(5)=12$$",
    ),
}


def validate_text(tid: str, letter: str, text: str, truth: bool) -> list[str]:
    issues: list[str] = []
    verdict = "True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verdict}\n\n"):
        issues.append(f"{tid} {letter}: bad header {text[:40]!r}")
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        issues.append(f"{tid} {letter}: bad close {text[-80:]!r}")
    if text.count("so the statement is") != 1:
        issues.append(f"{tid} {letter}: close count")
    for bad in BANNED:
        if bad in text:
            issues.append(f"{tid} {letter}: banned {bad!r}")
    low = text.lower()
    if "as in the overview" in low or "from the overview" in low:
        issues.append(f"{tid} {letter}: overview cross-ref")
    if "\\deg" in text or "\\circ" in text:
        issues.append(f"{tid} {letter}: deg/circ")
    return issues


def restore_and_patch() -> None:
    head = json.loads(
        subprocess.check_output(
            ["git", "show", "HEAD:src/data/math-ch7-linear-quadratic.json"]
        )
    )
    cur = json.loads(PATH.read_text())
    curm = {t["id"]: t for t in cur["tasks"]}
    new_tasks = []
    for t in head["tasks"]:
        tid = t["id"]
        if tid in KEEP:
            now = curm[tid]
            merged = dict(t)
            merged["tactical_explanations"] = list(now["tactical_explanations"])
            merged["solution_overview"] = now["solution_overview"]
            new_tasks.append(merged)
        else:
            new_tasks.append(t)
    out = dict(head)
    out["tasks"] = new_tasks

    issues: list[str] = []
    n_ov = n_rep = n_ins = 0
    for t in out["tasks"]:
        tid = t["id"]
        if tid not in KEEP:
            continue
        if tid in OV:
            t["solution_overview"] = OV[tid]
            n_ov += 1
        keys = t["answer_key"]
        expls = list(t["tactical_explanations"])
        for i, L in enumerate(LETTERS):
            key = (tid, L)
            if key in REPLACE:
                expls[i] = REPLACE[key]
                n_rep += 1
            else:
                if key in INSERT and INSERT[key][0][:48] not in expls[i]:
                    expls[i] = splice(expls[i], *INSERT[key])
                    n_ins += 1
                if key in EXTRA2 and EXTRA2[key][0][:48] not in expls[i]:
                    expls[i] = splice(expls[i], *EXTRA2[key])
                    n_ins += 1
            issues.extend(validate_text(tid, L, expls[i], bool(keys[i])))
        t["tactical_explanations"] = expls

    if issues:
        raise SystemExit("validation:\n" + "\n".join(issues[:80]))

    PATH.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    print(f"overviews {n_ov}, replaced {n_rep}, spliced {n_ins}")


if __name__ == "__main__":
    restore_and_patch()
