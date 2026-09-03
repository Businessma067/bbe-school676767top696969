#!/usr/bin/env python3
"""Chapter 7 bank: ~25% symbolic (no numbers) + hard 4–5/5 in any form.

Writes src/data/math-ch7-linear-quadratic.json
Schema matches existing bank / MathTasksPage.
"""

from __future__ import annotations

import json
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path

OUT = Path("/workspace/src/data/math-ch7-linear-quadratic.json")


@dataclass
class Claim:
    text: str
    truth: bool
    explanation: str


@dataclass
class Spec:
    title: str
    context: str
    difficulty: int
    stem_kind: str
    claims: list[Claim]
    overview: str
    is_photo: bool = False


def expl(letter: str, truth: bool, body: str) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body.strip()}"


def C(text: str, truth: bool, explanation: str) -> Claim:
    return Claim(text, truth, explanation)


def S(title, context, difficulty, kind, claims, overview, is_photo=False) -> Spec:
    return Spec(title, context, difficulty, kind, claims, overview, is_photo)


# ---------------------------------------------------------------------------
# Symbolic (~26%): no concrete numbers in stems
# ---------------------------------------------------------------------------

SYMBOLIC: list[Spec] = [
    S(
        "Axis, Vieta, and the Half-Sum Trap",
        "Let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$, and write $S$ for the sum of the roots of $g$ "
        "in $\\mathbb{C}$. Let $\\ell$ be the axis of symmetry of the graph of $g$. "
        "No concrete coefficients are given. Evaluate each statement. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("The vertical line $\\ell$ is always the same as the vertical line $x=S$.", False,
              "The axis is $x=S/2$, not $x=S$."),
            C("In all cases, $\\ell$ is the line $x=S/2$.", True,
              "By Vieta $S=-b/a$, so $-b/(2a)=S/2$."),
            C("If $S=0$, then the axis of $g$ is the $y$-axis.", True,
              "$S=0\\Rightarrow b=0\\Rightarrow$ axis $x=0$."),
            C("If $a>0$ and $S>0$, then both real roots (when they exist) must be positive.", False,
              "A positive sum allows opposite signs, e.g. roots $-1$ and $3$."),
            C("Changing the constant term $c$ never moves the axis $\\ell$.", True,
              "The axis depends only on $a$ and $b$."),
        ],
        "$$\nS=-\\frac{b}{a}\\qquad \\ell:\\ x=\\frac{S}{2}.\n$$\nThe axis is the midpoint of the roots.",
    ),
    S(
        "Writing a Parabola Using a Line",
        "Let $f$ be any non-constant linear function and $g$ any quadratic function. "
        "$\\mathbb{R}$. Evaluate each statement. Mark it TRUE or FALSE.",
        4, "symbolic",
        [
            C("There always exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.", True,
              "If $\\deg f=1$, then $\\{1,f,f^{2}\\}$ spans all polynomials of degree $\\le 2$."),
            C("The coefficient $A$ is uniquely determined by $g$ and $f$.", True,
              "Matching leading coefficients: $A=a_g/a_f^{2}$."),
            C("The same identity remains true if $f$ is replaced by a non-zero constant polynomial.", False,
              "Constants cannot produce an $x^{2}$ term."),
            C("If $g=Af^{2}+Bf+C$, then $g(f(x))$ always has an $x^{4}$ term.", False,
              "Degrees multiply: $\\deg(g\\circ f)=2\\cdot 1=2$."),
            C("If $g=Af^{2}+Bf+C$ with $A\\neq 0$, then $g$ and $f$ have exactly the same roots.", False,
              "Roots of $g$ solve a quadratic in the value $f(x)$."),
        ],
        "Degree-$1$ $f$ makes $\\{1,f,f^{2}\\}$ a basis of polynomials of degree at most $2$.",
    ),
    S(
        "Nested Functions Without Numbers",
        "Let $f$ be a non-constant linear function and $g$ a quadratic function. No further data are "
        "given. Evaluate each claim about compositions. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("The nested function $g(f(x))$ always has an $x^{3}$ term, because one adds $1$ and $2$.", False,
              "Degrees multiply: $2\\cdot 1=2$."),
            C("The nested function $f(g(x))$ is always a parabola (highest power $x^{2}$).", True, "$\\deg(f\\circ g)=1\\cdot 2=2$."),
            C("The nested functions $g(f(x))$ and $f(g(x))$ always have the same highest power of $x$.", True, "Both equal $2$."),
            C("The polynomials $g\\circ f$ and $f\\circ g$ are always identical as functions.", False,
              "Composition does not commute."),
            C("If one replaces $f$ by $f^{2}$ (still using the same $g$), then $g(f(x)^{2})$ has highest power $x^{4}$.", True,
              "$\\deg(f^{2})=2$, so $\\deg(g\\circ f^{2})=4$."),
        ],
        "Degree multiplies under composition. Adding degrees ($1+2=3$) is the trap.",
    ),
    S(
        "Vertex Form Uniqueness",
        "A quadratic is written $g(x)=a(x-h)^{2}+k$ with $a\\neq 0$. No numeric values are "
        "supplied. Evaluate each statement. Mark it TRUE or FALSE.",
        4, "symbolic",
        [
            C("The point $(h,k)$ is always the unique vertex of the graph of $g$.", True,
              "By construction of vertex form."),
            C("If $a<0$, then $k$ is the global minimum value of $g$.", False,
              "If $a<0$, then $k$ is the global maximum."),
            C("The axis of symmetry is always $x=h$, independent of $k$.", True,
              "Vertical translation does not move the axis."),
            C("Replacing $h$ by $-h$ never changes the graph of $g$.", False, "Only when $h=0$."),
            C("Every real quadratic admits such a representation for unique $(a,h,k)$.", True,
              "Completing the square; uniqueness of vertex and leading coefficient."),
        ],
        "Vertex form is unique: $(h,k)$ is the vertex and $a$ is the leading coefficient.",
    ),
    S(
        "Discriminant Logic for Quadratics",
        "Let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$ and $\\Delta=b^{2}-4ac$. Evaluate each "
        "statement. Mark it TRUE or FALSE.",
        3, "symbolic",
        [
            C("If $\\Delta<0$, then $g$ has no real roots.", True, "Standard discriminant."),
            C("If $\\Delta<0$, then $g$ has no vertex.", False,
              "The vertex $x=-b/(2a)$ always exists over $\\mathbb{R}$."),
            C("If $\\Delta=0$, then the graph of $g$ touches the $x$-axis at exactly one point.", True,
              "A double root is tangency to the $x$-axis."),
            C("If $a$ and $c$ have opposite signs, then necessarily $\\Delta>0$.", True,
              "Then $ac<0$, so $-4ac>0$, hence $\\Delta>0$."),
            C("If $\\Delta>0$, then the axis of symmetry lies strictly between the two real roots.", True,
              "The axis is their midpoint."),
        ],
        "Discriminant dictionary; the vertex exists independently of $\\Delta$.",
    ),
    S(
        "Line Meets Parabola: Structural Bound",
        "Let $f$ be any linear function and $g$ any quadratic function over $\\mathbb{R}$. "
        "Evaluate each statement about their graphs. Mark it TRUE or FALSE.",
        4, "symbolic",
        [
            C("The graphs of $f$ and $g$ can intersect in three distinct real points.", False,
              "$g-f$ has degree at most $2$."),
            C("It is possible that the graphs do not intersect at all.", True,
              "Example: $g(x)=x^{2}+1$ and $f(x)=0$."),
            C("If the graphs are tangent at a point, then $g-f$ has a double root there.", True,
              "Shared value and derivative $\\Leftrightarrow$ double root."),
            C("If $f$ is constant, the graphs always intersect twice.", False,
              "A horizontal line may miss, touch, or cut the parabola."),
            C("Translating $g$ vertically by any constant can create a third intersection with $f$.", False,
              "Vertical translation preserves $\\deg(g-f)\\le 2$."),
        ],
        "$f=g$ is at most quadratic $\\Rightarrow$ at most two real meetings.",
    ),
    S(
        "Monotonicity: Line Versus Parabola",
        "Let $f(x)=mx+k$ with $m\\neq 0$, and let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$. "
        "Evaluate each claim. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("$f$ is strictly monotone on all of $\\mathbb{R}$.", True,
              "$m\\neq 0$ forces a global strict increase or decrease."),
            C("$g$ is strictly monotone on all of $\\mathbb{R}$.", False,
              "$g'(x)=2ax+b$ changes sign at the axis."),
            C("On the half-line to the right of the axis of $g$, the restriction of $g$ is strictly monotone.", True,
              "The derivative keeps constant sign on each open half-line from the axis."),
            C("If $m>0$ and $a>0$, then $f(x)<g(x)$ for all sufficiently large $x$.", True,
              "A quadratic with $a>0$ dominates every line as $x\\to+\\infty$."),
            C("A constant function (slope zero) is still strictly monotone.", False,
              "Constant functions are not strictly monotone."),
        ],
        "Non-constant lines are globally monotone; quadratics only on each side of the axis.",
    ),
    S(
        "Even Quadratic Symmetry",
        "Let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$. Evaluate each statement about evenness. "
        "Mark it TRUE or FALSE.",
        3, "symbolic",
        [
            C("$g$ is an even function if and only if $b=0$.", True,
              "$g(-x)-g(x)=-2bx$ vanishes identically iff $b=0$."),
            C("If $g$ is even, then its vertex lies on the $y$-axis.", True,
              "$b=0\\Rightarrow$ vertex at $x=0$."),
            C("Every even quadratic is also an odd function.", False,
              "The only both-even-and-odd function is zero."),
            C("If the axis of $g$ is $x=0$, then $g$ is even.", True,
              "Axis $x=0\\Leftrightarrow b=0\\Leftrightarrow$ even."),
            C("Multiplying $g$ by $-1$ can destroy evenness.", False,
              "$-g$ still has linear coefficient $0$ whenever $b=0$."),
        ],
        "$g$ is even iff $b=0$ iff the axis is the $y$-axis.",
    ),
    S(
        "Parameter Tangency Criterion",
        "Let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$, and let $f_t(x)=tx+1$ be a family of lines "
        "parametrised by $t\\in\\mathbb{R}$. Evaluate each statement. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("For every real $t$, the line $y=f_t(x)$ is tangent to the graph of $g$.", False,
              "Tangency is a single algebraic condition on $t$, not an identity."),
            C("There exists at least one real $t$ for which $y=f_t$ is tangent to $y=g$.", False,
              "Let $\\Delta(t)=(b-t)^{2}-4a(c-1)$. As a quadratic in $t$ its discriminant is "
              "$16a(c-1)$. When $a(c-1)<0$, one has $\\Delta(t)>0$ for all $t$, so no tangent."),
            C("If $y=f_t$ is tangent to $y=g$ at $x_0$, then $g'(x_0)=t$.", True,
              "Shared derivative at the contact point."),
            C("If $g-f_t$ has two distinct real roots, then the graphs intersect at two points and are not tangent.", True,
              "Two simple roots mean two transversal meetings."),
            C("Replacing the intercept $1$ in $f_t$ by an arbitrary constant $q$ can change whether a tangent slope exists.", True,
              "The condition involves $c-q$."),
        ],
        "Tangency means $\\Delta(t)=0$ for $ax^{2}+(b-t)x+(c-1)$; this may have $0$, $1$, or $2$ real solutions.",
    ),
    S(
        "Range of a Quadratic, Symbolically",
        "Let $g(x)=a(x-h)^{2}+k$ with $a\\neq 0$. Evaluate each statement about the range of $g$. "
        "Mark it TRUE or FALSE.",
        4, "symbolic",
        [
            C("If $a>0$, then the range of $g$ is $[k,+\\infty)$.", True, "Vertex form."),
            C("If $a<0$, then the range of $g$ is $[k,+\\infty)$.", False, "Then $(-\\infty,k]$."),
            C("The range of $g$ is never all of $\\mathbb{R}$.", True, "Unbounded on only one side."),
            C("Any non-constant linear function has range $\\mathbb{R}$.", True,
              "Strictly monotone continuous $\\mathbb{R}\\to\\mathbb{R}$ is surjective."),
            C("When the vertex sits on the $x$-axis and the parabola opens upwards, $g$ never takes negative values.", True, "Range $[0,+\\infty)$."),
        ],
        "Opening direction decides whether the range is $[k,+\\infty)$ or $(-\\infty,k]$.",
    ),
    S(
        "Shifts and Scalings of a Parabola",
        "Start from $g(x)=ax^{2}+bx+c$ with $a\\neq 0$. Consider $g_1(x)=g(x-r)$, "
        "$g_2(x)=g(x)+s$, and $g_3(x)=\\lambda g(x)$ with $\\lambda\\neq 0$. No numeric data. "
        "Evaluate each statement. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("The axis of $g_1$ is the axis of $g$ shifted by $r$ units to the right.", True,
              "If $g$ has axis $x=h$, then $g_1$ has axis $x=h+r$."),
            C("The axis of $g_2$ differs from the axis of $g$.", False,
              "A vertical shift does not move the axis."),
            C("If $\\lambda<0$, then $g_3$ opens in the opposite direction from $g$.", True,
              "Leading coefficient becomes $\\lambda a$."),
            C("There exist $r\\neq 0$ such that $g_1$ has a different axis from $g$ but the same leading coefficient.", True,
              "Horizontal shift changes the axis and preserves $a$."),
            C("$g_3$ always has the same roots as $g$.", True,
              "For $\\lambda\\neq 0$, $\\lambda g(x)=0\\Leftrightarrow g(x)=0$."),
        ],
        "Horizontal shifts move the axis; vertical shifts preserve it; nonzero scalings preserve roots.",
    ),
    S(
        "Difference $f-g$ and Intercept Traps",
        "Let $f$ be linear and $g$ quadratic. Write $d=f-g$. Evaluate each statement. "
        "Mark it TRUE or FALSE.",
        4, "symbolic",
        [
            C("The difference $d=f-g$ is always a quadratic function.", True, "A quadratic minus a linear polynomial still has degree $2$."),
            C("The $y$-intercept of $d$ is $f(0)-g(0)$.", True, "Direct evaluation."),
            C("If $d(0)=0$, then the graphs of $f$ and $g$ intersect on the $y$-axis.", True,
              "$f(0)=g(0)$ means a common point $(0,f(0))$."),
            C("If $d$ has two distinct real roots, the graphs intersect more than twice.", False,
              "Two roots of $d$ mean exactly two intersections."),
            C("The graph of $d$ is itself a parabola (opens like a quadratic).", True, "It is a degree-$2$ polynomial."),
        ],
        "$d=f-g$ is quadratic; its zeros are the intersection abscissae.",
    ),
    S(
        "Root Product Versus Vertex Height",
        "Let $g(x)=ax^{2}+bx+c$ with $a\\neq 0$, product of roots $P=c/a$, and vertex height "
        "$k=g\\!\\left(-b/(2a)\\right)$. No numbers. Evaluate each statement. Mark it TRUE or FALSE.",
        5, "symbolic",
        [
            C("Always $k=c$.", False, "$k=c$ if and only if $b=0$."),
            C("Always $P=c/a$.", True, "Vieta's formula."),
            C("If $b=0$, then $k=c$.", True, "Vertex at $x=0$, so $k=g(0)=c$."),
            C("If $P=0$, then one root is $0$ and the graph passes through the origin.", True,
              "$P=0\\Rightarrow c=0\\Rightarrow g(0)=0$."),
            C("The sign of $k$ is always the same as the sign of $a$.", False,
              "Vertex height and opening direction are independent."),
        ],
        "$$\nk=c-\\frac{b^{2}}{4a}.\n$$\nIn particular $k=c$ only when $b=0$.",
    ),
]


# ---------------------------------------------------------------------------
# Numeric / parametric / hybrid banks
# ---------------------------------------------------------------------------

def photo() -> Spec:
    return S(
        "Vertex, Linear Rewrite, and Crossings of a Line and a Parabola",
        "Consider the following linear and quadratic functions: "
        "$f(x) = 4x + 2$ and $g(x) = x^{2} - x - 2$. "
        "Evaluate each statement. Mark it TRUE or FALSE.",
        3, "formula",
        [
            C("The point on the graph of $g(x)$ with the lowest $y$ coordinate is "
              "$\\left(\\frac{1}{2}, -\\frac{9}{4}\\right)$.", True,
              "Axis $x=1/2$; $g(1/2)=-9/4$; $a>0$ so this is the minimum."),
            C("There exist values $a, b, c \\in \\mathbb{R}$ such that "
              "$g(x) = a f(x)^{2} + b f(x) + c$.", True,
              "$\\{1,f,f^{2}\\}$ spans degree $\\le 2$; matching recovers $a=1/16$, $b=-1/2$, $c=-5/4$."),
            C("The sum of the roots of function $g(x)$ is $-1$.", False, "Sum $=-b/a=1$, not $-1$."),
            C("The graph of the function $f(x) - g(x)$ intersects with the $y$-axis at $y = 0$.", False,
              "$(f-g)(0)=4\\neq 0$."),
            C("The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.", False,
              "$f=g$ is quadratic with $\\Delta=41>0$: exactly two meetings."),
        ],
        "$$\nf(x)=4x+2\\qquad g(x)=x^{2}-x-2\n$$\n\n"
        "$$\n\\mathrm{vertex}=\\left(\\frac{1}{2},-\\frac{9}{4}\\right)"
        "\\qquad \\mathrm{sum}=1\\qquad \\#\\mathrm{meetings}=2\n$$\n\n"
        "Rewrite $g=Af^{2}+Bf+C$ yields $A=1/16$, $B=-1/2$, $C=-5/4$.",
        is_photo=True,
    )


def bank_d1() -> list[Spec]:
    return [
        S("Slope and Opening at a Glance",
          "Let $f(x)=3x-5$ and $g(x)=-2x^{2}+x+4$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The slope of $y=f(x)$ is $3$.", True, "Coefficient of $x$."),
           C("The parabola $g$ opens upwards.", False, "Leading coefficient $-2<0$."),
           C("$f(0)=-5$.", True, "Constant term."),
           C("$g(0)=4$.", True, "Constant term."),
           C("The slope of $y=f(x)$ is $-3$.", False, "Slope is $3$.")],
          "Read coefficients: slope $3$; $g$ opens downwards."),
        S("Axis from Coefficients",
          "Let $g(x)=x^{2}-6x+5$ and $f(x)=2x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The axis of symmetry of $g$ is $x=3$.", True, "$-b/(2a)=3$."),
           C("$g$ opens downwards.", False, "$a=1>0$."),
           C("The slope of $f$ is $2$.", True, "Read off."),
           C("$g(3)=-4$.", True, "$9-18+5=-4$."),
           C("The axis of $g$ is $x=-3$.", False, "Sign error in $-b/(2a)$.")],
          "Axis $x=3$; $g=(x-1)(x-5)$."),
        S("Evaluate and Compare",
          "Let $f(x)=-x+4$ and $g(x)=x^{2}+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("$f(2)=2$.", True, "$-2+4=2$."),
           C("$g(0)=0$.", False, "$g(0)=1$."),
           C("The minimum of $g$ is $1$.", True, "Vertex $(0,1)$."),
           C("$f$ is increasing.", False, "Slope $-1<0$."),
           C("$g(1)=2$.", True, "$1+1=2$.")],
          "Direct evaluation; $g\\ge 1$."),
        S("Intercept Checklist",
          "Let $f(x)=5x$ and $g(x)=x^{2}-4$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("$f(0)=0$.", True, "Through the origin."),
           C("$g$ has roots $2$ and $-2$.", True, "$x^{2}=4$."),
           C("The slope of $f$ is $5$.", True, "Read off."),
           C("$g$ opens downwards.", False, "$a=1$."),
           C("$g(0)=-4$.", True, "Constant term.")],
          "$f$ through origin; $g$ roots $\\pm 2$."),
        S("Simple Vertex Read",
          "Let $g(x)=(x-2)^{2}+3$ and $f(x)=x-2$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The vertex of $g$ is $(2,3)$.", True, "Vertex form."),
           C("The axis of $g$ is $x=2$.", True, "Same $h$."),
           C("$f$ and $g$ share the root $x=2$.", False, "$g(2)=3\\neq 0$."),
           C("$g$ opens upwards.", True, "$a=1$."),
           C("The slope of $f$ is $1$.", True, "Read off.")],
          "Vertex already visible at $(2,3)$."),
        S("Leading Coefficient Sign",
          "Let $f(x)=\\frac{1}{2}x+7$ and $g(x)=3x^{2}-x$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("$g$ opens upwards.", True, "$a=3>0$."),
           C("$g(0)=0$.", True, "No constant term."),
           C("The slope of $f$ is $7$.", False, "Slope is $1/2$."),
           C("$f(0)=7$.", True, "Intercept."),
           C("The axis of $g$ is $x=\\frac{1}{6}$.", True, "$-b/(2a)=1/6$.")],
          "Positive leading coefficient; axis $x=1/6$."),
        S("Two Easy Meetings",
          "Let $f(x)=x$ and $g(x)=x^{2}-2x$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The graphs meet at $x=0$.", True, "$f(0)=g(0)=0$."),
           C("The graphs meet at $x=3$.", True, "$f(3)=g(3)=3$."),
           C("The graphs meet at three points.", False, "Degree at most $2$."),
           C("$g$ opens downwards.", False, "$a=1$."),
           C("The slope of $f$ is $1$.", True, "Identity line.")],
          "$g-f=x(x-3)$."),
        S("Downward Peak",
          "Let $g(x)=-x^{2}+4x$ and $f(x)=2$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The maximum of $g$ is $4$.", True, "$g(2)=4$."),
           C("The axis of $g$ is $x=2$.", True, "$-b/(2a)=2$."),
           C("$f$ is a horizontal line.", True, "Constant."),
           C("$g$ opens upwards.", False, "$a=-1$."),
           C("$g(0)=4$.", False, "$g(0)=0$.")],
          "Vertex at $(2,4)$."),
        S("Factor Roots Quickly",
          "Let $g(x)=(x+1)(x-4)$ and $f(x)=-2x+3$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The roots of $g$ are $-1$ and $4$.", True, "Factored form."),
           C("The sum of the roots of $g$ is $3$.", True, "Add the roots."),
           C("The slope of $f$ is $-2$.", True, "Read off."),
           C("$g$ opens downwards.", False, "Expanded leading coefficient $1$."),
           C("$f(0)=3$.", True, "Intercept.")],
          "Roots $-1$ and $4$; sum $3$."),
        S("Constant Versus Square",
          "Let $f(x)=5$ and $g(x)=x^{2}+5$. Evaluate each statement. Mark it TRUE or FALSE.",
          1, "formula",
          [C("The graphs touch at $(0,5)$.", True, "$f(0)=g(0)=5$."),
           C("$g(x)\\ge 5$ for all real $x$.", True, "$x^{2}\\ge 0$."),
           C("$f$ has slope $5$.", False, "Slope $0$."),
           C("$g$ opens upwards.", True, "$a=1$."),
           C("The graphs intersect twice.", False, "Only one contact point.")],
          "$g-f=x^{2}$: single contact."),
    ]


def bank_d2() -> list[Spec]:
    return [
        S("Vieta Against a Line",
          "Let $f(x)=2x-1$ and $g(x)=x^{2}-5x+6$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The sum of the roots of $g$ is $5$.", True, "$-b/a=5$."),
           C("The product of the roots of $g$ is $-6$.", False, "Product $6$."),
           C("The axis of $g$ is $x=\\frac{5}{2}$.", True, "Midpoint."),
           C("The slope of $f$ is $2$.", True, "Read off."),
           C("$g(2)=0$.", True, "Root.")],
          "Roots $2,3$; sum $5$; product $6$."),
        S("Vertex Versus Intercept",
          "Let $g(x)=2x^{2}-8x+3$ and $f(x)=x+3$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The vertex of $g$ is $(2,-5)$.", True, "$g(2)=-5$."),
           C("$g(0)$ equals the vertex height of $g$.", False, "$3\\neq -5$."),
           C("The axis of $g$ is $x=2$.", True, "$-b/(2a)=2$."),
           C("$f(2)=5$.", True, "$2+3$."),
           C("$g$ opens downwards.", False, "$a=2$.")],
          "Axis $x=2$; vertex height $-5\\neq g(0)$."),
        S("Count the Meetings",
          "Let $f(x)=x+1$ and $g(x)=x^{2}-x-2$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The graphs intersect at exactly two points.", True, "$\\Delta>0$."),
           C("The graphs intersect at $x=-1$.", True, "$g-f=(x-3)(x+1)$."),
           C("The graphs intersect at $x=3$.", True, "Same factorisation."),
           C("The sum of roots of $g$ is $-1$.", False, "Sum $=1$."),
           C("$f$ is decreasing.", False, "Slope $1$.")],
          "$g-f=(x-3)(x+1)$."),
        S("Completing the Square, Easy",
          "Let $g(x)=x^{2}+4x+1$ and $f(x)=-x$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("Completing the square gives $g(x)=(x+2)^{2}-3$.", True, "Standard completion."),
           C("The vertex of $g$ is $(-2,-3)$.", True, "From vertex form."),
           C("The minimum value of $g$ is $1$.", False, "Minimum is $-3$."),
           C("The slope of $f$ is $-1$.", True, "Read off."),
           C("$g$ opens upwards.", True, "$a=1$.")],
          "$g(x)=(x+2)^{2}-3$."),
        S("Difference $y$-Intercept",
          "Let $f(x)=4x+2$ and $g(x)=x^{2}+3$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("$(f-g)(0)=0$.", False, "$2-3=-1$."),
           C("The graphs meet on the $y$-axis.", False, "Same as previous."),
           C("$g$ has no real roots.", True, "$x^{2}=-3$."),
           C("The slope of $f$ is $4$.", True, "Read off."),
           C("$g(0)=3$.", True, "Constant.")],
          "$(f-g)(0)=-1$."),
        S("Scaled Parabola Roots",
          "Let $g(x)=2(x-1)(x-3)$ and $f(x)=3x$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The roots of $g$ are $1$ and $3$.", True, "Factors."),
           C("The leading coefficient of $g$ is $2$.", True, "Scale factor."),
           C("The sum of the roots is $2$.", False, "Sum $4$."),
           C("The axis of $g$ is $x=2$.", True, "Midpoint."),
           C("The slope of $f$ is $3$.", True, "Read off.")],
          "Scaling preserves roots; sum $4$."),
        S("Falling Line Twin Roots",
          "Let $f(x)=-x+2$ and $g(x)=x^{2}+x-6$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The roots of $g$ are $-3$ and $2$.", True, "$(x+3)(x-2)$."),
           C("The axis of $g$ is $x=-\\frac{1}{2}$.", True, "Midpoint."),
           C("$f(2)=0$.", True, "Root of the line."),
           C("The sum of roots of $g$ is $1$.", False, "Sum $=-1$."),
           C("$g$ opens upwards.", True, "$a=1$.")],
          "Roots $-3,2$; axis $x=-1/2$."),
        S("Even Parabola Check",
          "Let $g(x)=x^{2}-9$ and $f(x)=2x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("$g$ is even.", True, "Only even powers."),
           C("The axis of $g$ is $x=0$.", True, "$b=0$."),
           C("The product of roots of $g$ is $-9$.", True, "Vieta."),
           C("$f$ is even.", False, "Nonzero slope."),
           C("$g(3)=0$.", True, "Root.")],
          "Even about the $y$-axis; roots $\\pm 3$."),
        S("Average Rate Warm-Up",
          "Let $g(x)=x^{2}-4x$ and $f(x)=3x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("The average rate of change of $g$ on $[0,2]$ is $-2$.", True, "$(g(2)-g(0))/2=-2$."),
           C("That average rate equals the slope of $f$.", False, "Slope of $f$ is $3$."),
           C("The axis of $g$ is $x=2$.", True, "$-b/(2a)=2$."),
           C("$g(0)=0$.", True, "Through origin."),
           C("$f(0)=1$.", True, "Intercept.")],
          "Average rate $-2\\neq$ slope $3$."),
        S("Rewrite Exists at Level Two",
          "Let $f(x)=x-1$ and $g(x)=x^{2}-1$. Evaluate each statement. Mark it TRUE or FALSE.",
          2, "formula",
          [C("There exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.", True, "Degree-$1$ basis."),
           C("$g$ factors as $(x-1)(x+1)$.", True, "Difference of squares."),
           C("The graphs meet at $x=1$.", True, "$f(1)=g(1)=0$."),
           C("The sum of roots of $g$ is $0$.", True, "Vieta."),
           C("$f$ opens upwards.", False, "Lines do not open.")],
          "$g=f^{2}+2f$; rewrite exists."),
    ]


def bank_d3() -> list[Spec]:
    """9 medium tasks; photo is separate."""
    return [
        S("Tangent Line Probe",
          "Let $g(x)=x^{2}-4x+5$ and $f(x)=2x-3$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "geometric",
          [C("The graphs are tangent.", False, "$g-f=(x-2)(x-4)$: two meetings."),
           C("The graphs meet at $x=2$ and $x=4$.", True, "Factorisation."),
           C("The vertex of $g$ is $(2,1)$.", True, "$g(2)=1$."),
           C("$g'(2)=0$.", True, "$g'=2x-4$."),
           C("$f'(x)=g'(x)$ for all $x$.", False, "Only possible at isolated points.")],
          "$g-f=(x-2)(x-4)$: two meetings, not tangent."),
        S("Nested Evaluation Chain",
          "Let $f(x)=2x+1$ and $g(x)=x^{2}-x-2$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "formula",
          [C("$g(f(0))=-2$.", True, "$f(0)=1$, $g(1)=-2$."),
           C("$f(g(0))=-3$.", True, "$g(0)=-2$, $f(-2)=-3$."),
           C("$g(f(0))=f(g(0))$.", False, "$-2\\neq -3$."),
           C("The sum of roots of $g$ is $1$.", True, "Vieta."),
           C("The nested function $g(f(x))$ is always a parabola.", True, "$2\\cdot 1=2$.")],
          "Composition order matters."),
        S("Complete Square and Meetings",
          "Let $f(x)=3x$ and $g(x)=x^{2}-6x+10$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "formula",
          [C("Completing the square gives $g(x)=(x-3)^{2}+1$.", True, "Standard completion."),
           C("The minimum of $g$ is $1$.", True, "Vertex height."),
           C("The graphs of $f$ and $g$ never meet.", False, "$\\Delta=41>0$."),
           C("The axis of $g$ is $x=3$.", True, "From vertex form."),
           C("$g(3)=f(3)$.", False, "$g(3)=1$, $f(3)=9$.")],
          "$g=(x-3)^{2}+1$; still meets the line twice."),
        S("Rebuild from Roots and Slope",
          "The line $f$ has slope $2$ and $y$-intercept $1$. The monic quadratic $g$ has roots "
          "$2$ and $3$. Rebuild the formulas, then evaluate each statement. Mark it TRUE or FALSE.",
          3, "hybrid",
          [C("$f(x)=2x+1$.", True, "Slope-intercept recovery."),
           C("$g(x)=x^{2}-5x+6$.", True, "Monic with given roots."),
           C("The sum of roots of $g$ is $-5$.", False, "Sum $5$."),
           C("There exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.", True, "Linear basis."),
           C("The graphs meet more than twice.", False, "Degree bound.")],
          "$$\nf(x)=2x+1\\qquad g(x)=(x-2)(x-3)\n$$"),
        S("Vertex on the Line?",
          "Let $f(x)=x-1$ and $g(x)=x^{2}-2x-3$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "formula",
          [C("The vertex of $g$ lies on $y=f(x)$.", False, "$f(1)=0\\neq -4$."),
           C("The vertex of $g$ is $(1,-4)$.", True, "$g(1)=-4$."),
           C("The roots of $g$ are $-1$ and $3$.", True, "$(x+1)(x-3)$."),
           C("The axis of $g$ equals the Vieta sum of its roots.", False, "Axis $1$, sum $2$."),
           C("The nested function $f(g(x))$ is always a parabola.", True, "Degree multiply.")],
          "Vertex $(1,-4)$ is not on the line."),
        S("Horizontal Gap at the Axis",
          "Let $f(x)=4x-1$ and $g(x)=x^{2}-4x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "formula",
          [C("At the axis of $g$, the vertical gap $f-g$ equals $10$.", True, "$f(2)-g(2)=7-(-3)=10$."),
           C("The axis of $g$ is $x=2$.", True, "$-b/(2a)=2$."),
           C("The graphs are tangent at the axis.", False, "Gap $\\neq 0$."),
           C("The sum of roots of $g$ is $4$.", True, "Vieta."),
           C("$g$ opens downwards.", False, "$a=1$.")],
          "Axis $x=2$; gap $10$."),
        S("No Real Roots Versus Line",
          "Let $f(x)=x$ and $g(x)=x^{2}+x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
          3, "formula",
          [C("$g$ has no real roots.", True, "$\\Delta=-3$."),
           C("The graphs of $f$ and $g$ do not meet.", True, "$g-f=x^{2}+1>0$."),
           C("The vertex of $g$ is $\\left(-\\frac{1}{2},\\frac{3}{4}\\right)$.", True, "Direct computation."),
           C("The product of complex roots of $g$ is $1$.", True, "Vieta $c/a$."),
           C("$f$ is constant.", False, "Slope $1$.")],
          "$\\Delta_g<0$ and $g-f=x^{2}+1$."),
    ]


def bank_d4() -> list[Spec]:
    return [
        S("Family of Lines Seeking Tangency",
          "Let $g(x)=x^{2}-2x+2$ and $f_t(x)=tx$. Evaluate each statement about the real "
          "parameter $t$. Mark it TRUE or FALSE.",
          4, "parametric",
          [C("There exist real values of $t$ for which $y=f_t$ is tangent to $y=g$.", True,
             "$\\Delta(t)=(2+t)^{2}-8=0$ has solutions $t=-2\\pm 2\\sqrt{2}$."),
           C("There is a slope for which the line misses the parabola entirely.", True, "$\\Delta(0)=-4<0$."),
           C("If $\\Delta(t)>0$, the graphs intersect at two distinct points.", True, "Definition."),
           C("The vertex of $g$ lies on the $x$-axis.", False, "Vertex $(1,1)$; $f_0\\equiv 0$."),
           C("Tangency can occur for at most one real $t$.", False, "Two solutions.")],
          "$g-f_t=x^{2}-(2+t)x+2$, $\\Delta(t)=(2+t)^{2}-8$."),
        S("Composition Trap with Explicit Maps",
          "Let $f(x)=3x-1$ and $g(x)=2x^{2}-4x-6$. Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("Because $f$ is a line and $g$ is a parabola, the nested function $f(g(x))$ must have an $x^{3}$ term.", False,
             "Degrees multiply: degree $2$."),
           C("The nested function $g(f(x))$ is always a parabola.", True, "$2\\cdot 1=2$."),
           C("$g(f(0))=0$.", True, "$f(0)=-1$, $g(-1)=0$."),
           C("$f(g(0))=g(f(0))$.", False, "$f(-6)=-19\\neq 0$."),
           C("Matching $g=Af^{2}+Bf+C$ forces $A=\\frac{2}{9}$.", True, "Leading: $A\\cdot 9=2$.")],
          "Degree multiply, nested mismatch, $A=2/9$."),
        S("Wrong Completed Square Sign",
          "Let $g(x)=x^{2}-3x-10$ and $f(x)=-3x+6$. Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("Completing the square gives $g(x)=\\left(x-\\frac{3}{2}\\right)^{2}-\\frac{49}{4}$.", True,
             "Correct vertex form."),
           C("Completing the square gives $g(x)=\\left(x+\\frac{3}{2}\\right)^{2}-\\frac{49}{4}$.", False,
             "Wrong sign in the shift."),
           C("The average rate of change of $g$ on $[0,2]$ equals the slope of $f$.", False,
             "Average $-1$; slope of $f$ is $-3$."),
           C("$f(g(0))=36$.", True, "$g(0)=-10$, $f(-10)=36$."),
           C("A vertical translation of $g$ can make $f-g$ a constant function.", False,
             "The quadratic term survives any vertical shift.")],
          "True completion uses $x-3/2$; translation cannot kill $x^{2}$."),
        S("Three Maps: Line, Square, Difference",
          "Let $f(x)=2x+3$, $g(x)=x^{2}-x-2$, and $d=f-g$. Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("The leading coefficient of $d$ is $-1$.", True, "$d=-x^{2}+3x+5$."),
           C("The difference $d=f-g$ is a quadratic function.", True, "Quadratic."),
           C("The graphs of $f$ and $g$ meet wherever $d=0$.", True, "Definition."),
           C("$d(0)=0$.", False, "$d(0)=5$."),
           C("Because $d$ looks cubic at a glance, $f$ and $g$ can meet three times.", False,
             "Still degree $2$.")],
          "$d=-x^{2}+3x+5$."),
        S("Parameter Constraint on Opening",
          "Let $g_a(x)=ax^{2}-4x+1$ with $a\\neq 0$, and let $f(x)=x$. Evaluate each statement. "
          "Mark it TRUE or FALSE.",
          4, "parametric",
          [C("When the leading coefficient of $g_a$ is positive and not too large, the graphs can meet twice.", True, "$\\Delta=25-4a=21>0$."),
           C("Making the leading coefficient of $g_a$ large enough can make the graphs miss each other.", True, "$\\Delta=25-40<0$."),
           C("The axis of $g_a$ is $x=2$ for every $a$.", False, "Axis $x=2/a$."),
           C("If $a<0$, then $g_a$ opens downwards.", True, "Sign of leading coefficient."),
           C("There exists $a$ for which $y=f$ is tangent to $y=g_a$.", True, "$\\Delta=0$ at $a=25/4$.")],
          "$g_a-f=ax^{2}-5x+1$, $\\Delta=25-4a$."),
        S("Vieta Trap Combined with Rewrite",
          "Let $f(x)=4x-1$ and $g(x)=x^{2}-3x-10$. Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("By Vieta, the sum of roots of $g$ is $-3$ (forgetting the minus).", False, "Sum $=3$."),
           C("The product of roots of $g$ is $-10$.", True, "Vieta."),
           C("Matching $g=Af^{2}+Bf+C$ forces $A=\\frac{1}{16}$.", True, "Leading $A\\cdot 16=1$."),
           C("Matching forces $B=-3$.", False, "$B$ is not the raw linear coefficient of $g$."),
           C("The nested function $g(f(x))$ is always a parabola.", True, "Degree multiply.")],
          "Sum $3$, product $-10$, $A=1/16$."),
        S("Root Distance and Midpoint",
          "Let $g(x)=x^{2}-x-12$ and $f(x)=5x-5$. Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("The distance between the real roots of $g$ is $7$.", True, "$|-3-4|=7$."),
           C("The midpoint of the roots equals the axis of symmetry.", True, "Always for a quadratic."),
           C("The axis of $g$ coincides with the Vieta sum of the roots.", False, "Axis $1/2$, sum $1$."),
           C("$f(1)=0$.", True, "$5-5=0$."),
           C("The graphs meet more than twice.", False, "Degree bound.")],
          "Roots $-3,4$; midpoint $=$ axis $=1/2$."),
        S("Inverse Linear Then Quadratic",
          "Let $f(x)=2x-4$ (invertible) and $g(x)=x^{2}-5x+6$. Let $f^{-1}$ be the inverse of $f$. "
          "Evaluate each statement. Mark it TRUE or FALSE.",
          4, "formula",
          [C("$f^{-1}(x)=\\frac{x+4}{2}$.", True, "Solve $y=2x-4$."),
           C("The nested function $g(f^{-1}(x))$ is always a parabola.", True, "Linear change of variable."),
           C("$g(f^{-1}(f(2)))=0$.", True, "$f(2)=0$, $f^{-1}(0)=2$, $g(2)=0$."),
           C("$f^{-1}$ is quadratic.", False, "Inverse of linear is linear."),
           C("The product of roots of $g$ is $6$.", True, "Vieta.")],
          "$f^{-1}(x)=(x+4)/2$."),
        S("Hybrid: Printed Line, Roots in Words",
          "Take $f(x)=x+1$. The quadratic $g$ is monic with roots $3$ and $5$. Recover $g$, "
          "then evaluate each statement. Mark it TRUE or FALSE.",
          4, "hybrid",
          [C("The average rate of change of $g$ on $[0,2]$ is $-6$.", True,
             "$(g(2)-g(0))/2=(3-15)/2=-6$."),
           C("Matching $g=Af^{2}+Bf+C$ forces $B=-9$.", False,
             "With $A=1$: match gives $B=-10$, $C=24$."),
           C("The $y$-intercept of $g$ equals the vertex height.", False,
             "$g(0)=15$, vertex height $g(4)=-1$."),
           C("$f(g(0))=16$.", True, "$g(0)=15$, $f(15)=16$."),
           C("The graphs meet more than twice.", False, "Degree bound.")],
          "$$\ng(x)=(x-3)(x-5)=x^{2}-8x+15\n$$"),
        S("Forced Coefficient System",
          "Suppose $g(x)=x^{2}+px+q$ passes through $(0,-3)$ and has axis $x=2$. Let $f(x)=x-2$. "
          "Evaluate each statement. Mark it TRUE or FALSE.",
          4, "parametric",
          [C("$p=-4$.", True, "Axis $x=2\\Rightarrow -p/2=2$."),
           C("$q=-3$.", True, "From $g(0)=-3$."),
           C("The vertex of $g$ is $(2,-7)$.", True, "$g(2)=-7$."),
           C("$f$ vanishes at the axis of $g$.", True, "$f(2)=0$."),
           C("$g$ has two positive real roots.", False, "Product $q=-3<0$: opposite signs.")],
          "$$\ng(x)=x^{2}-4x-3\\qquad f(x)=x-2\n$$"),
    ]


def bank_d5() -> list[Spec]:
    return [
        S("Double Composition and Leading Match",
          "Let $f(x)=4x+2$ and $g(x)=x^{2}-x-2$. Evaluate each statement. Mark it TRUE or FALSE.",
          5, "formula",
          [C("Matching $g=Af^{2}+Bf+C$ forces "
             "$A=\\frac{1}{16}$, $B=-\\frac{1}{2}$, $C=-\\frac{5}{4}$.", True,
             "Full coefficient match."),
           C("Because $f-g$ can be mistaken for a cubic, the graphs may meet three times.", False,
             "Still degree $2$."),
           C("$g(f(0))=f(g(0))$.", False, "$f(0)=2$, $g(2)=0$; $g(0)=-2$, $f(-2)=-6$."),
           C("At the axis of $g$, the gap $f-g$ equals $\\frac{17}{4}$.", False,
             "Axis $x=1/2$; $f=4$, $g=-9/4$; gap $25/4$ (not $17/4$)."),
           C("Completing the square gives "
             "$g(x)=\\left(x-\\frac{1}{2}\\right)^{2}-\\frac{9}{4}$.", True, "Vertex form.")],
          "Multi-hop on the photo models: rewrite triple, nested mismatch, axis gap."),
        S("Parameter Window for Two Meetings",
          "Let $g(x)=x^{2}-4x+1$ and $f_k(x)=kx+1$. Evaluate each statement about the real "
          "parameter $k$. Mark it TRUE or FALSE.",
          5, "parametric",
          [C("For every $k$, the graphs intersect at the point $(0,1)$.", True, "$g(0)=f_k(0)=1$."),
           C("There is a unique slope that makes the line touch the parabola at exactly one point.", True, "$g-f_k=x^{2}$: double root at $0$."),
           C("That unique touch happens at the shared $y$-intercept $(0,1)$ and matches the slope of the parabola there.", True,
             "Double root and $g'(0)=-4=k$."),
           C("Besides the shared $y$-intercept, the graphs can meet again at a point with positive $x$-coordinate.", True, "Roots $0$ and $4$."),
           C("There exists a real $k$ for which the graphs fail to meet.", False,
             "They always share the point $(0,1)$.")],
          "$g-f_k=x^{2}-(4+k)x$. Always through $(0,1)$; tangency at $k=-4$."),
        S("Scaled Roots and Nested Order",
          "You are given $f(x)=5x-2$. The quadratic $g$ has roots $2$ and $4$ but leading "
          "coefficient $2$. Recover $g$, then evaluate each statement. Mark it TRUE or FALSE.",
          5, "hybrid",
          [C("$g(x)=2x^{2}-12x+16$.", True, "$2(x-2)(x-4)$."),
           C("Matching $g=Af^{2}+Bf+C$ forces $A=\\frac{2}{25}$.", True, "Leading $A\\cdot 25=2$."),
           C("$g(f(0))=f(g(0))$.", False, "$f(0)=-2$, $g(-2)=48$; $g(0)=16$, $f(16)=78$."),
           C("The distance between the roots of $g$ is $2$.", True, "Scaling does not move roots."),
           C("Completing the square gives $g(x)=2(x-3)^{2}-2$.", True, "Vertex at $x=3$; $g(3)=-2$.")],
          "$$\ng(x)=2(x-2)(x-4)=2x^{2}-12x+16\n$$"),
        S("Average Rate Versus Instantaneous Slope",
          "Let $g(x)=x^{2}-6x+5$ and $f(x)=4x-8$. Evaluate each statement. Mark it TRUE or FALSE.",
          5, "formula",
          [C("The average rate of change of $g$ on $[0,2]$ equals the slope of $f$.", False,
             "Average $-4$; slope of $f$ is $+4$."),
           C("There exists $c\\in(0,2)$ with $g'(c)$ equal to that average rate.", True,
             "Mean value theorem; explicitly $g'(1)=-4$."),
           C("Completing the square gives $g(x)=(x-3)^{2}-4$.", True, "Vertex form."),
           C("By Vieta, the sum of roots is $-6$.", False, "Sum $=6$; sign trap."),
           C("$f(g(0))=12$.", True, "$g(0)=5$, $f(5)=12$.")],
          "Average $-4$; MVT witness $c=1$; Vieta sign trap."),
        S("When Does Vertical Shift Kill Meetings?",
          "Let $f(x)=2x$ and $g_s(x)=x^{2}-x-2+s$ with real shift $s$. Evaluate each statement. "
          "Mark it TRUE or FALSE.",
          5, "parametric",
          [C("With no vertical shift, the graphs meet at two points.", True, "$\\Delta=17>0$."),
           C("A large enough upward shift can make the graphs miss each other.", True, "$\\Delta=17-20<0$."),
           C("There exists $s$ making the graphs tangent.", True, "$\\Delta=0$ at $s=17/4$."),
           C("Vertical shifts can create a third intersection with $f$.", False, "Degree stays $2$."),
           C("The axis of $g_s$ depends on $s$.", False, "Axis still $x=1/2$.")],
          "$g_s-f=x^{2}-3x+(s-2)$, $\\Delta=17-4s$."),
        S("Simultaneous Vertex and Intercept Constraints",
          "A monic quadratic $g$ has vertex at $(1,-4)$ and a linear $f$ satisfies $f(1)=0$ "
          "and $f(0)=-2$. Rebuild both, then evaluate each statement. Mark it TRUE or FALSE.",
          5, "geometric",
          [C("$g(x)=x^{2}-2x-3$.", True, "$(x-1)^{2}-4$."),
           C("$f(x)=2x-2$.", True, "Two-point recovery."),
           C("The vertex of $g$ lies on $y=f(x)$.", False, "$f(1)=0\\neq -4$."),
           C("The roots of $g$ are $-1$ and $3$.", True, "Factor."),
           C("The nested function $g(f(x))$ is always a parabola.", True, "Degree multiply.")],
          "$$\ng(x)=(x-1)^{2}-4\\qquad f(x)=2x-2\n$$"),
        S("False Constant After Translation",
          "Let $f(x)=-3x+6$ and $g(x)=x^{2}-3x-10$. Evaluate each statement. Mark it TRUE or FALSE.",
          5, "formula",
          [C("Completing the square gives "
             "$g(x)=\\left(x-\\frac{3}{2}\\right)^{2}-\\frac{49}{4}$.", True, "Correct vertex form."),
           C("Because $f$ is a line and $g$ is a parabola, $f(g(x))$ must have an $x^{3}$ term.", False,
             "Degree $2$."),
           C("$f(g(0))=36$.", True, "$g(0)=-10$, $f(-10)=36$."),
           C("The average rate of change of $g$ on $[0,2]$ equals the slope of $f$.", False,
             "Average $-1$; slope $-3$."),
           C("Since $f$ has slope $-3$, translating $g$ by $6$ units vertically would make $f-g$ constant.", False,
             "The quadratic term remains.")],
          "Composition-degree trap; translation cannot kill $x^{2}$."),
        S("Cross-Condition Web",
          "Let $f(x)=x+1$, $g(x)=x^{2}-8x+15$, and $h(x)=g(x)-f(x)$. Evaluate each statement. "
          "Mark it TRUE or FALSE.",
          5, "formula",
          [C("The graphs of $f$ and $g$ meet at $x=2$ and $x=7$.", True, "$h=(x-2)(x-7)$."),
           C("Matching $g=Af^{2}+Bf+C$ forces $A=1$.", True, "Leading match with $f^{2}$."),
           C("The $y$-intercept of $g$ equals the vertex height of $g$.", False,
             "$g(0)=15$, vertex height $g(4)=-1$."),
           C("$f(g(0))=16$.", True, "$15+1$."),
           C("$h$ opens downwards.", False, "Leading coefficient $+1$.")],
          "$h=x^{2}-9x+14$; rewrite leading $A=1$."),
        S("Slope Family Against Fixed Vertex",
          "Let $g(x)=(x-2)^{2}-1$ be fixed, and let $f_m(x)=m(x-2)-1$ be the pencil of lines "
          "through the vertex of $g$. Evaluate each statement. Mark it TRUE or FALSE.",
          5, "parametric",
          [C("For every $m$, the graphs intersect at the vertex of $g$.", True,
             "Both pass through $(2,-1)$."),
           C("When the line is horizontal through the shared intercept setup, the graphs touch at exactly one point.", True,
             "$g-f_0=(x-2)^{2}$: double root at the vertex."),
           C("A steeper line through the same intercept can cut the parabola at a second point with positive $x$.", True,
             "Second root $x=2+m$."),
           C("For $m\\neq 0$, the line is tangent to the parabola.", False,
             "Two distinct intersections when $m\\neq 0$."),
           C("No line in the pencil can be tangent except $m=0$.", True, "Only then a double root.")],
          "$g-f_m=(x-2)\\bigl((x-2)-m\\bigr)$. Tangency only for $m=0$."),
        S("Linked Conditions on Sum and Gap",
          "Let $g(x)=x^{2}-Sx+P$ with unknown Vieta data. Suppose the axis is $x=3$, the product "
          "of roots is $-4$, and $f(x)=2x$. Recover $g$, then evaluate each statement. "
          "Mark it TRUE or FALSE.",
          5, "parametric",
          [C("$S=6$.", True, "Axis $x=S/2=3$."),
           C("$P=-4$.", True, "Given product."),
           C("$g(x)=x^{2}-6x-4$.", True, "Recovered model."),
           C("At the axis, $f-g=19$.", True, "$f(3)=6$, $g(3)=-13$, gap $19$."),
           C("The graphs of $f$ and $g$ meet more than twice.", False, "Degree bound.")],
          "Axis $\\Rightarrow S=6$; product $\\Rightarrow P=-4$; gap at $x=3$ equals $19$."),
    ]


# ---------------------------------------------------------------------------
# Assemble
# ---------------------------------------------------------------------------

def assemble() -> list[Spec]:
    photo_task = photo()
    d1 = bank_d1()
    d2 = bank_d2()
    # d3: photo + 2 symbolic@3 + 7 medium
    sym3 = [t for t in SYMBOLIC if t.difficulty == 3]
    d3 = [photo_task] + sym3[:2] + bank_d3()
    # d4: 5 symbolic@4 + 5 hard4  → overall ~25% symbolic with d3/d5
    sym4 = [t for t in SYMBOLIC if t.difficulty == 4]
    d4 = sym4[:5] + bank_d4()[:5]
    # d5: 5 symbolic@5 + 5 hard5
    sym5 = [t for t in SYMBOLIC if t.difficulty == 5]
    d5 = sym5[:5] + bank_d5()[:5]

    for label, bucket in [("1", d1), ("2", d2), ("3", d3), ("4", d4), ("5", d5)]:
        if len(bucket) != 10:
            raise SystemExit(f"diff {label}: {len(bucket)}")
        if any(t.difficulty != int(label) for t in bucket):
            bad = [t.title for t in bucket if t.difficulty != int(label)]
            raise SystemExit(f"diff mismatch in {label}: {bad}")

    # Order: photo first, then remaining by cycling difficulties
    rest = d1 + d2 + [t for t in d3 if not t.is_photo] + d4 + d5
    final = [photo_task] + rest
    assert len(final) == 50
    assert Counter(t.difficulty for t in final) == Counter({1: 10, 2: 10, 3: 10, 4: 10, 5: 10})
    assert sum(1 for t in final if t.stem_kind == "symbolic") >= 12
    assert final[0].is_photo
    return final


def render(spec: Spec, idx: int) -> dict:
    letters = "ABCDE"
    return {
        "id": f"math-7-{idx + 1}",
        "case_id": f"MATH 7.{idx + 1:02d}",
        "title": spec.title,
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [c.truth for c in spec.claims],
        "tactical_explanations": [
            expl(letters[i], c.truth, c.explanation) for i, c in enumerate(spec.claims)
        ],
        "difficulty_level": f"{spec.difficulty}/5",
        "sort_order": idx + 1,
        "solution_overview": spec.overview,
        "subsection": "7",
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 50
    assert Counter(t["difficulty_level"] for t in tasks) == Counter({f"{d}/5": 10 for d in range(1, 6)})
    sym = sum(1 for t in tasks if t["stem_kind"] == "symbolic")
    assert sym >= 12, sym
    assert tasks[0]["case_id"] == "MATH 7.01"
    assert tasks[0]["difficulty_level"] == "3/5"
    assert "4x + 2" in tasks[0]["context"] or "4x+2" in tasks[0]["context"].replace(" ", "")
    for t in tasks:
        assert len(t["statements"]) == 5 and len(set(t["statements"])) == 5, t["case_id"]
        truths = sum(1 for x in t["answer_key"] if x)
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
        assert len(t["tactical_explanations"]) == 5
        if t["stem_kind"] == "symbolic":
            blob = (t["context"] + " ".join(t["statements"])).lower()
            assert "euro" not in blob and "pallet" not in blob


def main() -> None:
    specs = assemble()
    tasks = [render(s, i) for i, s in enumerate(specs)]
    validate(tasks)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    kinds = Counter(t["stem_kind"] for t in tasks)
    diffs = Counter(t["difficulty_level"] for t in tasks)
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("difficulties:", dict(sorted(diffs.items())))
    print("stem_kinds:", dict(kinds))
    print(f"symbolic: {kinds['symbolic']}/50 = {100 * kinds['symbolic'] / 50:.0f}%")
    print("7.01:", tasks[0]["title"], tasks[0]["difficulty_level"])
    for t in tasks:
        if t["stem_kind"] == "symbolic" and t["difficulty_level"] in ("4/5", "5/5"):
            print("SYM hard:", t["case_id"], t["difficulty_level"], t["title"])
            print("  A:", t["statements"][0][:110])
            break
    for t in tasks:
        if t["difficulty_level"] == "5/5" and t["stem_kind"] != "symbolic":
            print("NUM5:", t["case_id"], t["stem_kind"], t["title"])
            break


if __name__ == "__main__":
    main()
