#!/usr/bin/env python3
"""Append 47 new Chapter 7 tasks (MATH 7.51 - 7.97) to the linear/quadratic bank.

The existing 50 tasks are preserved untouched. Every non-symbolic claim carries a
sympy predicate that is evaluated before the task is accepted, so the answer keys
are machine-verified. Symbolic tasks carry no concrete numbers and are checked for
that instead.

Run:  python3 scripts/gen-ch7-append-47.py
"""

from __future__ import annotations

import json
import re
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Optional

import sympy as sp

OUT = Path("/workspace/src/data/math-ch7-linear-quadratic.json")

X = sp.Symbol("x")
R = sp.Rational


# ---------------------------------------------------------------------------
# sympy helpers
# ---------------------------------------------------------------------------

def cf(e, n: int):
    """Coefficient of x**n."""
    return sp.expand(sp.sympify(e)).coeff(X, n)


def slope(f):
    return cf(f, 1)


def eq(a, b) -> bool:
    return sp.simplify(sp.sympify(a) - sp.sympify(b)) == 0


def ev(e, v):
    return sp.simplify(sp.expand(sp.sympify(e)).subs(X, v))


def axis(g):
    return sp.simplify(-cf(g, 1) / (2 * cf(g, 2)))


def vertex(g):
    h = axis(g)
    return h, ev(g, h)


def disc(e):
    e = sp.expand(sp.sympify(e))
    return sp.simplify(cf(e, 1) ** 2 - 4 * cf(e, 2) * cf(e, 0))


def all_roots(e) -> list:
    return sp.solve(sp.Eq(sp.expand(sp.sympify(e)), 0), X)


def real_roots(e) -> list:
    return sorted(r for r in all_roots(e) if r.is_real)


def vsum(g):
    return sp.simplify(-cf(g, 1) / cf(g, 2))


def vprod(g):
    return sp.simplify(cf(g, 0) / cf(g, 2))


def nmeet(f, g) -> int:
    return len(real_roots(sp.expand(g - f)))


def meets_at(f, g, v) -> bool:
    return eq(ev(g, v), ev(f, v))


def avg_rate(g, p, q):
    return sp.simplify((ev(g, q) - ev(g, p)) / (q - p))


def deg(e) -> int:
    e = sp.expand(sp.sympify(e))
    return int(sp.degree(e, X)) if e != 0 else 0


def is_even(g) -> bool:
    e = sp.expand(sp.sympify(g))
    return sp.simplify(e.subs(X, -X) - e) == 0


def abc(g, f) -> Optional[dict]:
    """Solve g = A f^2 + B f + C for (A, B, C)."""
    A, B, C = sp.symbols("A B C")
    eqs = sp.Poly(sp.expand(A * f ** 2 + B * f + C - sp.expand(g)), X).coeffs()
    sol = sp.solve(eqs, [A, B, C], dict=True)
    if not sol:
        return None
    s = sol[0]
    return {"A": s.get(A), "B": s.get(B), "C": s.get(C)}


def has_sol(rel, sym) -> bool:
    return sp.solveset(rel, sym, sp.S.Reals) != sp.S.EmptySet


def n_param_solutions(expr, sym) -> int:
    return len([s for s in sp.solve(sp.Eq(expr, 0), sym) if s.is_real])


# ---------------------------------------------------------------------------
# Spec model
# ---------------------------------------------------------------------------

@dataclass
class Claim:
    text: str
    truth: bool
    explanation: str
    check: Optional[Callable[[], bool]] = None


@dataclass
class Spec:
    title: str
    context: str
    difficulty: int
    stem_kind: str
    claims: list[Claim]
    overview: str


def C(text: str, truth: bool, explanation: str = "Stub.",
      check: Optional[Callable[[], bool]] = None) -> Claim:
    return Claim(text, truth, explanation, check)


def S(title, context, difficulty, kind, claims, overview) -> Spec:
    return Spec(title, context, difficulty, kind, claims, overview)


TAIL = "Evaluate each statement. Mark it TRUE or FALSE."


# ---------------------------------------------------------------------------
# Difficulty 1/5 - nine formula tasks (coefficient reading, direct evaluation)
# ---------------------------------------------------------------------------

def t_d1_01() -> Spec:
    f, g = 7 * X + 2, X ** 2 + 6 * X
    return S(
        "Slope, Constant Term, Axis",
        f"Let $f(x)=7x+2$ and $g(x)=x^{{2}}+6x$. {TAIL}",
        1, "formula",
        [C("The slope of $y=f(x)$ is $7$.", True, "Coefficient of $x$.",
           lambda: eq(slope(f), 7)),
         C("$f(0)=2$.", True, "Constant term.", lambda: eq(ev(f, 0), 2)),
         C("The parabola $g$ opens downwards.", False, "Leading coefficient is positive.",
           lambda: cf(g, 2) < 0),
         C("$g(0)=0$.", True, "No constant term.", lambda: eq(ev(g, 0), 0)),
         C("The axis of symmetry of $g$ is $x=-3$.", True, "$-b/(2a)=-3$.",
           lambda: eq(axis(g), -3))],
        "Slope $7$, intercept $2$, axis $x=-3$, upward opening.",
    )


def t_d1_02() -> Spec:
    f, g = -4 * X + 9, 2 * X ** 2 - 8
    return S(
        "Intercepts of a Falling Line",
        f"Let $f(x)=-4x+9$ and $g(x)=2x^{{2}}-8$. {TAIL}",
        1, "formula",
        [C("$f(0)=9$.", True, "Constant term.", lambda: eq(ev(f, 0), 9)),
         C("$g(0)=-8$.", True, "Constant term.", lambda: eq(ev(g, 0), -8)),
         C("The function $f$ is increasing.", False, "Slope is negative.",
           lambda: slope(f) > 0),
         C("The roots of $g$ are $2$ and $-2$.", True, "$2x^{2}=8$.",
           lambda: real_roots(g) == [-2, 2]),
         C("The parabola $g$ opens upwards.", True, "Leading coefficient $2$.",
           lambda: cf(g, 2) > 0)],
        "$g(x)=2(x-2)(x+2)$; the line falls with slope $-4$.",
    )


def t_d1_03() -> Spec:
    f, g = X + 6, -3 * X ** 2 + 12 * X - 4
    return S(
        "Which Way Does It Open?",
        f"Let $f(x)=x+6$ and $g(x)=-3x^{{2}}+12x-4$. {TAIL}",
        1, "formula",
        [C("The parabola $g$ opens downwards.", True, "Leading coefficient $-3$.",
           lambda: cf(g, 2) < 0),
         C("The axis of symmetry of $g$ is $x=2$.", True, "$-12/(2\\cdot(-3))=2$.",
           lambda: eq(axis(g), 2)),
         C("The slope of $y=f(x)$ is $6$.", False, "The slope is $1$; $6$ is the intercept.",
           lambda: eq(slope(f), 6)),
         C("$g(0)=4$.", False, "$g(0)=-4$.", lambda: eq(ev(g, 0), 4)),
         C("The function $g$ takes its largest value at $x=2$.", True,
           "Downward parabola peaks on its axis.",
           lambda: cf(g, 2) < 0 and eq(axis(g), 2))],
        "Downward parabola with axis $x=2$ and $g(0)=-4$.",
    )


def t_d1_04() -> Spec:
    f, g = -X + 5, (X + 3) ** 2 - 7
    return S(
        "Vertex Form on Sight",
        f"Let $f(x)=-x+5$ and $g(x)=(x+3)^{{2}}-7$. {TAIL}",
        1, "formula",
        [C("The vertex of the graph of $g$ is $(-3,-7)$.", True, "Vertex form.",
           lambda: eq(axis(g), -3) and eq(vertex(g)[1], -7)),
         C("The axis of symmetry of $g$ is $x=3$.", False, "The axis is $x=-3$.",
           lambda: eq(axis(g), 3)),
         C("The parabola $g$ opens upwards.", True, "Leading coefficient $1$.",
           lambda: cf(g, 2) > 0),
         C("The smallest value of $g$ is $-7$.", True, "Vertex height.",
           lambda: cf(g, 2) > 0 and eq(vertex(g)[1], -7)),
         C("$f(0)=5$.", True, "Constant term.", lambda: eq(ev(f, 0), 5))],
        "Vertex $(-3,-7)$ is already visible in the given form.",
    )


def t_d1_05() -> Spec:
    f, g = 3 * X - 9, (X - 1) * (X + 6)
    return S(
        "Zeros of a Simple Product",
        f"Let $f(x)=3x-9$ and $g(x)=(x-1)(x+6)$. {TAIL}",
        1, "formula",
        [C("The roots of $g$ are $1$ and $-6$.", True, "Factored form.",
           lambda: real_roots(g) == [-6, 1]),
         C("$f(3)=0$.", True, "$9-9=0$.", lambda: eq(ev(f, 3), 0)),
         C("The sum of the roots of $g$ is $-5$.", True, "$1+(-6)=-5$.",
           lambda: eq(vsum(g), -5)),
         C("The parabola $g$ opens downwards.", False, "Expanded leading coefficient $1$.",
           lambda: cf(g, 2) < 0),
         C("$g(0)=6$.", False, "$g(0)=(-1)\\cdot 6=-6$.", lambda: eq(ev(g, 0), 6))],
        "Roots $1$ and $-6$; sum $-5$; $g(0)=-6$.",
    )


def t_d1_06() -> Spec:
    f, g = 6 - 2 * X, X ** 2 + 4
    return S(
        "Two Values, Two Functions",
        f"Let $f(x)=6-2x$ and $g(x)=x^{{2}}+4$. {TAIL}",
        1, "formula",
        [C("$f(1)=4$.", True, "$6-2=4$.", lambda: eq(ev(f, 1), 4)),
         C("$g(1)=5$.", True, "$1+4=5$.", lambda: eq(ev(g, 1), 5)),
         C("The function $g$ has no real roots.", True, "$x^{2}=-4$ is impossible.",
           lambda: len(real_roots(g)) == 0),
         C("The function $f$ is decreasing.", True, "Slope $-2<0$.",
           lambda: slope(f) < 0),
         C("$g(0)=0$.", False, "$g(0)=4$.", lambda: eq(ev(g, 0), 0))],
        "$g\\ge 4$ everywhere, so the parabola never reaches the $x$-axis.",
    )


def t_d1_07() -> Spec:
    f, g = 4 * X + 10, X ** 2 - 25
    return S(
        "Where the Line Crosses Zero",
        f"Let $f(x)=4x+10$ and $g(x)=x^{{2}}-25$. {TAIL}",
        1, "formula",
        [C("The graph of $f$ crosses the $x$-axis at $x=-\\frac{5}{2}$.", True,
           "$4x+10=0$.", lambda: eq(ev(f, R(-5, 2)), 0)),
         C("The roots of $g$ are $5$ and $-5$.", True, "$x^{2}=25$.",
           lambda: real_roots(g) == [-5, 5]),
         C("The axis of symmetry of $g$ is the $y$-axis.", True, "No linear term.",
           lambda: eq(axis(g), 0)),
         C("The parabola $g$ opens downwards.", False, "Leading coefficient $1$.",
           lambda: cf(g, 2) < 0),
         C("The slope of $y=f(x)$ is $10$.", False, "The slope is $4$.",
           lambda: eq(slope(f), 10))],
        "Line zero at $x=-5/2$; parabola zeros at $\\pm 5$.",
    )


def t_d1_08() -> Spec:
    f, g = sp.Integer(-7), -X ** 2 + 6 * X - 5
    return S(
        "Peak of a Falling Parabola",
        f"Let $f(x)=-7$ and $g(x)=-x^{{2}}+6x-5$. {TAIL}",
        1, "formula",
        [C("The parabola $g$ opens downwards.", True, "Leading coefficient $-1$.",
           lambda: cf(g, 2) < 0),
         C("The axis of symmetry of $g$ is $x=3$.", True, "$-6/(2\\cdot(-1))=3$.",
           lambda: eq(axis(g), 3)),
         C("The largest value of $g$ is $4$.", True, "$g(3)=4$.",
           lambda: cf(g, 2) < 0 and eq(vertex(g)[1], 4)),
         C("The graph of $f$ is a horizontal line.", True, "Constant function.",
           lambda: eq(slope(f), 0) and deg(f) == 0),
         C("$g(0)=5$.", False, "$g(0)=-5$.", lambda: eq(ev(g, 0), 5))],
        "Vertex $(3,4)$; the constant line sits well below it.",
    )


def t_d1_09() -> Spec:
    f, g = R(1, 3) * X - 2, 5 * X ** 2 + 10 * X + 3
    return S(
        "Reading Off Two Fractions",
        f"Let $f(x)=\\frac{{1}}{{3}}x-2$ and $g(x)=5x^{{2}}+10x+3$. {TAIL}",
        1, "formula",
        [C("The slope of $y=f(x)$ is $\\frac{1}{3}$.", True, "Coefficient of $x$.",
           lambda: eq(slope(f), R(1, 3))),
         C("The slope of $y=f(x)$ is $3$.", False, "That is the reciprocal.",
           lambda: eq(slope(f), 3)),
         C("The axis of symmetry of $g$ is $x=-1$.", True, "$-10/10=-1$.",
           lambda: eq(axis(g), -1)),
         C("The axis of symmetry of $g$ is $x=1$.", False, "Sign error in $-b/(2a)$.",
           lambda: eq(axis(g), 1)),
         C("$g(0)=10$.", False, "$g(0)=3$.", lambda: eq(ev(g, 0), 10))],
        "Slope $1/3$, axis $x=-1$, $g(0)=3$.",
    )


# ---------------------------------------------------------------------------
# Difficulty 2/5 - nine formula tasks (Vieta, vertex, meetings)
# ---------------------------------------------------------------------------

def t_d2_01() -> Spec:
    f, g = 3 * X - 4, X ** 2 - 7 * X + 12
    return S(
        "Sum and Product Side by Side",
        f"Let $f(x)=3x-4$ and $g(x)=x^{{2}}-7x+12$. {TAIL}",
        2, "formula",
        [C("The sum of the roots of $g$ is $7$.", True, "$-b/a=7$.",
           lambda: eq(vsum(g), 7)),
         C("The product of the roots of $g$ is $12$.", True, "$c/a=12$.",
           lambda: eq(vprod(g), 12)),
         C("The roots of $g$ are $3$ and $4$.", True, "$(x-3)(x-4)$.",
           lambda: real_roots(g) == [3, 4]),
         C("The axis of symmetry of $g$ is $x=7$.", False,
           "The axis is the half-sum $x=7/2$.", lambda: eq(axis(g), 7)),
         C("$g(4)=0$.", True, "$4$ is a root.", lambda: eq(ev(g, 4), 0))],
        "Roots $3,4$: sum $7$, product $12$, axis $x=7/2$.",
    )


def t_d2_02() -> Spec:
    f, g = X - 6, 3 * X ** 2 - 12 * X + 7
    return S(
        "Vertex of a Stretched Parabola",
        f"Let $f(x)=x-6$ and $g(x)=3x^{{2}}-12x+7$. {TAIL}",
        2, "formula",
        [C("The axis of symmetry of $g$ is $x=2$.", True, "$12/6=2$.",
           lambda: eq(axis(g), 2)),
         C("The vertex of the graph of $g$ is $(2,-5)$.", True, "$g(2)=-5$.",
           lambda: eq(axis(g), 2) and eq(vertex(g)[1], -5)),
         C("The smallest value of $g$ is $7$.", False,
           "$7$ is $g(0)$; the minimum is $-5$.",
           lambda: cf(g, 2) > 0 and eq(vertex(g)[1], 7)),
         C("The parabola $g$ opens upwards.", True, "Leading coefficient $3$.",
           lambda: cf(g, 2) > 0),
         C("$f(2)=-4$.", True, "$2-6=-4$.", lambda: eq(ev(f, 2), -4))],
        "Stretch factor $3$ does not move the axis; vertex $(2,-5)$.",
    )


def t_d2_03() -> Spec:
    f, g = 2 * X + 3, X ** 2 - X - 1
    return S(
        "Two Crossings Found by Factoring",
        f"Let $f(x)=2x+3$ and $g(x)=x^{{2}}-x-1$. {TAIL}",
        2, "formula",
        [C("The graphs of $f$ and $g$ meet at $x=-1$.", True,
           "$g-f=(x-4)(x+1)$.", lambda: meets_at(f, g, -1)),
         C("The graphs of $f$ and $g$ meet at $x=4$.", True, "Same factorisation.",
           lambda: meets_at(f, g, 4)),
         C("The graphs meet at exactly two points.", True, "Two simple roots.",
           lambda: nmeet(f, g) == 2),
         C("The graphs of $f$ and $g$ meet at $x=1$.", False, "$g(1)=-1$, $f(1)=5$.",
           lambda: meets_at(f, g, 1)),
         C("The sum of the roots of $g$ is $-1$.", False, "The sum is $1$.",
           lambda: eq(vsum(g), -1))],
        "$g-f=x^{2}-3x-4=(x-4)(x+1)$.",
    )


def t_d2_04() -> Spec:
    f, g = 5 * X, X ** 2 + 8 * X + 10
    return S(
        "Completing the Square with a Negative Shift",
        f"Let $f(x)=5x$ and $g(x)=x^{{2}}+8x+10$. {TAIL}",
        2, "formula",
        [C("Completing the square gives $g(x)=(x+4)^{2}-6$.", True,
           "$(x+4)^{2}=x^{2}+8x+16$.",
           lambda: eq(g, (X + 4) ** 2 - 6)),
         C("The vertex of the graph of $g$ is $(-4,-6)$.", True, "From vertex form.",
           lambda: eq(axis(g), -4) and eq(vertex(g)[1], -6)),
         C("The smallest value of $g$ is $10$.", False, "The minimum is $-6$.",
           lambda: cf(g, 2) > 0 and eq(vertex(g)[1], 10)),
         C("The parabola $g$ opens upwards.", True, "Leading coefficient $1$.",
           lambda: cf(g, 2) > 0),
         C("The axis of symmetry of $g$ is $x=4$.", False, "The axis is $x=-4$.",
           lambda: eq(axis(g), 4))],
        "$g(x)=(x+4)^{2}-6$, so the vertex is $(-4,-6)$.",
    )


def t_d2_05() -> Spec:
    f, g = -2 * X + 7, X ** 2 + X - 1
    return S(
        "Gap on the $y$-Axis",
        f"Let $f(x)=-2x+7$ and $g(x)=x^{{2}}+x-1$. {TAIL}",
        2, "formula",
        [C("$(f-g)(0)=8$.", True, "$7-(-1)=8$.", lambda: eq(ev(f - g, 0), 8)),
         C("The graphs of $f$ and $g$ meet on the $y$-axis.", False,
           "They differ by $8$ there.", lambda: meets_at(f, g, 0)),
         C("The function $f-g$ is a quadratic function.", True,
           "A line minus a parabola keeps the square term.",
           lambda: deg(f - g) == 2),
         C("$g(0)=-1$.", True, "Constant term.", lambda: eq(ev(g, 0), -1)),
         C("The slope of $y=f(x)$ is $2$.", False, "The slope is $-2$.",
           lambda: eq(slope(f), 2))],
        "$(f-g)(0)=8\\neq 0$: no meeting on the $y$-axis.",
    )


def t_d2_06() -> Spec:
    f, g = -4 * X + 1, -3 * (X + 2) * (X - 5)
    return S(
        "Roots Preserved Under Scaling",
        f"Let $f(x)=-4x+1$ and $g(x)=-3(x+2)(x-5)$. {TAIL}",
        2, "formula",
        [C("The roots of $g$ are $-2$ and $5$.", True, "Nonzero scaling keeps roots.",
           lambda: real_roots(g) == [-2, 5]),
         C("The parabola $g$ opens downwards.", True, "Leading coefficient $-3$.",
           lambda: cf(g, 2) < 0),
         C("The axis of symmetry of $g$ is $x=\\frac{3}{2}$.", True,
           "Midpoint of $-2$ and $5$.", lambda: eq(axis(g), R(3, 2))),
         C("The product of the roots of $g$ is $-10$.", True, "$(-2)\\cdot 5=-10$.",
           lambda: eq(vprod(g), -10)),
         C("The leading coefficient of $g$ is $3$.", False, "It is $-3$.",
           lambda: eq(cf(g, 2), 3))],
        "$g(x)=-3x^{2}+9x+30$: roots $-2,5$, axis $x=3/2$.",
    )


def t_d2_07() -> Spec:
    f, g = 6 * X, 2 * X ** 2 - 18
    return S(
        "Symmetry About the $y$-Axis",
        f"Let $f(x)=6x$ and $g(x)=2x^{{2}}-18$. {TAIL}",
        2, "formula",
        [C("The function $g$ is even.", True, "Only even powers of $x$ occur.",
           lambda: is_even(g)),
         C("The axis of symmetry of $g$ is the $y$-axis.", True, "No linear term.",
           lambda: eq(axis(g), 0)),
         C("The roots of $g$ are $3$ and $-3$.", True, "$2x^{2}=18$.",
           lambda: real_roots(g) == [-3, 3]),
         C("The function $f$ is even.", False, "$f(-x)=-f(x)\\neq f(x)$.",
           lambda: is_even(f)),
         C("The product of the roots of $g$ is $9$.", False, "It is $-9$.",
           lambda: eq(vprod(g), 9))],
        "$g$ is even with roots $\\pm 3$ and product $-9$.",
    )


def t_d2_08() -> Spec:
    f, g = -5 * X + 2, X ** 2 + 2 * X - 8
    return S(
        "Average Rate on a Short Interval",
        f"Let $f(x)=-5x+2$ and $g(x)=x^{{2}}+2x-8$. {TAIL}",
        2, "formula",
        [C("The average rate of change of $g$ on $[1,3]$ is $6$.", True,
           "$(g(3)-g(1))/2=(7-(-5))/2$.", lambda: eq(avg_rate(g, 1, 3), 6)),
         C("That average rate of change equals the slope of $y=f(x)$.", False,
           "The slope of $f$ is $-5$.", lambda: eq(avg_rate(g, 1, 3), slope(f))),
         C("The roots of $g$ are $-4$ and $2$.", True, "$(x+4)(x-2)$.",
           lambda: real_roots(g) == [-4, 2]),
         C("The axis of symmetry of $g$ is $x=-1$.", True, "$-2/2=-1$.",
           lambda: eq(axis(g), -1)),
         C("$g(0)=8$.", False, "$g(0)=-8$.", lambda: eq(ev(g, 0), 8))],
        "Average rate $6$ on $[1,3]$; slope of $f$ is $-5$.",
    )


def t_d2_09() -> Spec:
    f, g = X + 3, X ** 2 + 6 * X + 4
    return S(
        "Building a Parabola Out of a Line",
        f"Let $f(x)=x+3$ and $g(x)=x^{{2}}+6x+4$. {TAIL}",
        2, "formula",
        [C("There exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.", True,
           "A degree-one $f$ gives a basis $\\{1,f,f^{2}\\}$.",
           lambda: abc(g, f) is not None),
         C("One such choice has $B=0$.", True, "$g=f^{2}-5$.",
           lambda: eq(abc(g, f)["B"], 0)),
         C("Completing the square gives $g(x)=(x+3)^{2}-5$.", True, "Direct completion.",
           lambda: eq(g, (X + 3) ** 2 - 5)),
         C("The vertex of the graph of $g$ is $(-3,-5)$.", True, "From vertex form.",
           lambda: eq(axis(g), -3) and eq(vertex(g)[1], -5)),
         C("The graphs of $f$ and $g$ meet at $x=0$.", False, "$f(0)=3$, $g(0)=4$.",
           lambda: meets_at(f, g, 0))],
        "$g=f^{2}-5$ with $f(x)=x+3$; vertex $(-3,-5)$.",
    )


# ---------------------------------------------------------------------------
# Difficulty 3/5 - two symbolic, one geometric, seven formula
# ---------------------------------------------------------------------------

def t_d3_sym_01() -> Spec:
    return S(
        "Who Wins Far to the Right?",
        "Let $f$ be a non-constant linear function and let $g$ be a quadratic function "
        "whose leading coefficient $a$ is nonzero. No numeric data are supplied. " + TAIL,
        3, "symbolic",
        [C("If $a$ is positive, then $g(x)>f(x)$ for all sufficiently large $x$.", True,
           "The square term eventually outgrows any line."),
         C("If $a$ is positive, then $g(x)>f(x)$ for every real $x$.", False,
           "A line can cut an upward parabola on a bounded stretch."),
         C("If $a$ is negative, then $g(x)<f(x)$ for all sufficiently large $x$.", True,
           "A downward parabola eventually falls below every line."),
         C("There is a line whose graph stays above the whole graph of an upward-opening "
           "parabola.", False,
           "The parabola outgrows the line in both directions."),
         C("If $g$ opens upwards, then the difference $g-f$ is bounded below on "
           "$\\mathbb{R}$.", True,
           "$g-f$ is again an upward parabola, so it has a smallest value.")],
        "Far from the origin the square term decides; a line can only win locally.",
    )


def t_d3_sym_02() -> Spec:
    return S(
        "When Is the Difference Still Curved?",
        "Let $f$ be a linear function, let $g$ be a quadratic function whose leading "
        "coefficient $a$ is nonzero, and set $d=g-f$. No numeric data are supplied. " + TAIL,
        3, "symbolic",
        [C("The coefficient of $x^{2}$ in $d$ is nonzero.", True,
           "Subtracting a line cannot touch the square term."),
         C("Some choice of $f$ makes $d$ a linear function.", False,
           "The square term survives every subtraction of a line."),
         C("Some choice of $f$ makes the coefficient of $x$ in $d$ vanish.", True,
           "Choose the slope of $f$ equal to the linear coefficient of $g$."),
         C("If the coefficient of $x$ in $d$ vanishes, then the axis of $g$ is the "
           "vertical coordinate axis.", False,
           "That condition constrains $f$, not the axis of $g$."),
         C("Whatever $f$ is, the graph of $d$ opens in the same direction as the graph "
           "of $g$.", True,
           "Both have leading coefficient $a$.")],
        "Only the linear part of $d$ can be tuned by $f$; the opening is inherited from $g$.",
    )


def t_d3_geo() -> Spec:
    f, g = sp.Integer(2), X ** 2 + 2 * X + 3
    return S(
        "Touching at the Vertex",
        f"Let $f(x)=2$ and $g(x)=x^{{2}}+2x+3$. {TAIL}",
        3, "geometric",
        [C("The graphs of $f$ and $g$ have exactly one point in common.", True,
           "$g-f=(x+1)^{2}$ has a double root.", lambda: nmeet(f, g) == 1),
         C("That common point is the vertex of the graph of $g$.", True,
           "The double root sits at the axis $x=-1$.",
           lambda: real_roots(g - f) == [axis(g)]),
         C("At the common point the two graphs have the same slope.", True,
           "$g'(-1)=0$ and the line is horizontal.",
           lambda: eq(sp.diff(g, X).subs(X, -1), sp.diff(f, X))),
         C("The two graphs cross each other at that point.", False,
           "A double root means contact without crossing.",
           lambda: not eq(disc(g - f), 0)),
         C("The function $g$ has two distinct real roots.", False,
           "Its discriminant is negative.",
           lambda: len(real_roots(g)) == 2)],
        "$g-f=(x+1)^{2}$: the horizontal line touches the parabola at the vertex.",
    )


def t_d3_01() -> Spec:
    f, g = 3 * X + 2, X ** 2 - 4 * X - 1
    return S(
        "Nested Values in Both Orders",
        f"Let $f(x)=3x+2$ and $g(x)=x^{{2}}-4x-1$. {TAIL}",
        3, "formula",
        [C("$g(f(0))=-5$.", True, "$f(0)=2$ and $g(2)=-5$.",
           lambda: eq(ev(g, ev(f, 0)), -5)),
         C("$f(g(0))=-1$.", True, "$g(0)=-1$ and $f(-1)=-1$.",
           lambda: eq(ev(f, ev(g, 0)), -1)),
         C("$g(f(0))=f(g(0))$.", False, "$-5\\neq -1$.",
           lambda: eq(ev(g, ev(f, 0)), ev(f, ev(g, 0)))),
         C("The vertex of the graph of $g$ is $(2,-5)$.", True, "$g(2)=-5$.",
           lambda: eq(axis(g), 2) and eq(vertex(g)[1], -5)),
         C("The value $g(f(0))$ is the smallest value of $g$.", True,
           "It equals the vertex height of an upward parabola.",
           lambda: cf(g, 2) > 0 and eq(ev(g, ev(f, 0)), vertex(g)[1]))],
        "Order matters in a composition; here one order lands exactly on the vertex.",
    )


def t_d3_02() -> Spec:
    f, g = X - 4, X ** 2 - 10 * X + 21
    return S(
        "Vertex Height Versus $y$-Intercept",
        f"Let $f(x)=x-4$ and $g(x)=x^{{2}}-10x+21$. {TAIL}",
        3, "formula",
        [C("The vertex of the graph of $g$ is $(5,-4)$.", True, "$g(5)=-4$.",
           lambda: eq(axis(g), 5) and eq(vertex(g)[1], -4)),
         C("The $y$-intercept of $g$ equals the vertex height of $g$.", False,
           "$g(0)=21$ but the vertex height is $-4$.",
           lambda: eq(ev(g, 0), vertex(g)[1])),
         C("The roots of $g$ are $3$ and $7$.", True, "$(x-3)(x-7)$.",
           lambda: real_roots(g) == [3, 7]),
         C("The vertex of the graph of $g$ lies on the line $y=f(x)$.", False,
           "$f(5)=1\\neq -4$.",
           lambda: eq(ev(f, axis(g)), vertex(g)[1])),
         C("The axis of symmetry of $g$ passes through the midpoint of its roots.", True,
           "Always true for a quadratic.",
           lambda: eq(axis(g), sum(real_roots(g)) / 2))],
        "Vertex $(5,-4)$; roots $3$ and $7$ straddle the axis $x=5$.",
    )


def t_d3_03() -> Spec:
    f, g = -X + 8, X ** 2 - 8 * X + 12
    return S(
        "Measuring the Gap Above the Vertex",
        f"Let $f(x)=-x+8$ and $g(x)=x^{{2}}-8x+12$. {TAIL}",
        3, "formula",
        [C("The axis of symmetry of $g$ is $x=4$.", True, "$8/2=4$.",
           lambda: eq(axis(g), 4)),
         C("At the axis of $g$ the vertical gap $f-g$ equals $8$.", True,
           "$f(4)-g(4)=4-(-4)$.", lambda: eq(ev(f - g, axis(g)), 8)),
         C("The graphs of $f$ and $g$ are tangent at the axis of $g$.", False,
           "There the graphs are eight units apart.",
           lambda: eq(disc(g - f), 0)),
         C("The roots of $g$ are $2$ and $6$.", True, "$(x-2)(x-6)$.",
           lambda: real_roots(g) == [2, 6]),
         C("The product of the roots of $g$ is $-12$.", False, "It is $12$.",
           lambda: eq(vprod(g), -12))],
        "Vertex $(4,-4)$, line value $4$: a gap of $8$ above the vertex.",
    )


def t_d3_04() -> Spec:
    f, g = 2 * X - 6, X ** 2 - 6 * X + 1
    return S(
        "Rewriting Through a Shifted Line",
        f"Let $f(x)=2x-6$ and $g(x)=x^{{2}}-6x+1$. {TAIL}",
        3, "formula",
        [C("There exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.", True,
           "$\\{1,f,f^{2}\\}$ spans the quadratics.",
           lambda: abc(g, f) is not None),
         C("Matching coefficients forces $A=\\frac{1}{4}$.", True,
           "Leading terms: $4A=1$.", lambda: eq(abc(g, f)["A"], R(1, 4))),
         C("One may take $B=0$ in that rewriting.", True,
           "$g=\\tfrac{1}{4}f^{2}-8$.", lambda: eq(abc(g, f)["B"], 0)),
         C("The vertex of the graph of $g$ is $(3,-8)$.", True, "$g(3)=-8$.",
           lambda: eq(axis(g), 3) and eq(vertex(g)[1], -8)),
         C("The function $g$ has no real roots.", False,
           "Its discriminant is positive.", lambda: len(real_roots(g)) == 0)],
        "$g=\\tfrac{1}{4}f^{2}-8$; vertex $(3,-8)$ with two real roots.",
    )


def t_d3_05() -> Spec:
    f, g = X + 3, -X ** 2 - 2
    return S(
        "A Line the Parabola Never Reaches",
        f"Let $f(x)=x+3$ and $g(x)=-x^{{2}}-2$. {TAIL}",
        3, "formula",
        [C("The graphs of $f$ and $g$ have no point in common.", True,
           "$g-f$ has a negative discriminant.", lambda: nmeet(f, g) == 0),
         C("The parabola $g$ opens downwards.", True, "Leading coefficient $-1$.",
           lambda: cf(g, 2) < 0),
         C("The largest value of $g$ is $-2$.", True, "Vertex $(0,-2)$.",
           lambda: cf(g, 2) < 0 and eq(vertex(g)[1], -2)),
         C("The function $g$ has two real roots.", False, "$-x^{2}=2$ is impossible.",
           lambda: len(real_roots(g)) == 2),
         C("The average rate of change of $g$ on $[-1,1]$ is $0$.", True,
           "The endpoints are symmetric about the axis.",
           lambda: eq(avg_rate(g, -1, 1), 0))],
        "The parabola peaks at $-2$ while the line is already above it there.",
    )


def t_d3_06() -> Spec:
    f, g = 6 * X - 5, X ** 2
    return S(
        "Two Meetings and Their Midpoint",
        f"Let $f(x)=6x-5$ and $g(x)=x^{{2}}$. {TAIL}",
        3, "formula",
        [C("The graphs of $f$ and $g$ meet at $x=1$ and at $x=5$.", True,
           "$g-f=(x-1)(x-5)$.", lambda: real_roots(g - f) == [1, 5]),
         C("The midpoint of the two meeting abscissae is $x=3$.", True,
           "$(1+5)/2=3$.",
           lambda: eq(sum(real_roots(g - f)) / 2, 3)),
         C("The axis of symmetry of $g$ passes through $x=3$.", False,
           "The axis of $g$ is the $y$-axis.", lambda: eq(axis(g), 3)),
         C("The function $g$ has a double root at $x=0$.", True,
           "$g(x)=x^{2}$.",
           lambda: eq(disc(g), 0) and eq(ev(g, 0), 0)),
         C("The graphs of $f$ and $g$ meet at three points.", False,
           "The difference is quadratic.", lambda: nmeet(f, g) == 3)],
        "$g-f=x^{2}-6x+5$: meetings at $1$ and $5$, midpoint $3$, axis of $g$ still $x=0$.",
    )


def t_d3_07() -> Spec:
    f, g = -2 * X + 11, X ** 2 + 5 * X - 14
    return S(
        "Sum, Product, and a Wrong Sign",
        f"Let $f(x)=-2x+11$ and $g(x)=x^{{2}}+5x-14$. {TAIL}",
        3, "formula",
        [C("The product of the roots of $g$ is $-14$.", True, "$c/a=-14$.",
           lambda: eq(vprod(g), -14)),
         C("The sum of the roots of $g$ is $5$.", False,
           "The sum is $-5$; the minus sign in $-b/a$ is easy to drop.",
           lambda: eq(vsum(g), 5)),
         C("The roots of $g$ are $-7$ and $2$.", True, "$(x+7)(x-2)$.",
           lambda: real_roots(g) == [-7, 2]),
         C("The axis of symmetry of $g$ is $x=-\\frac{5}{2}$.", True,
           "Half of the root sum.", lambda: eq(axis(g), R(-5, 2))),
         C("$f(2)=7$.", True, "$-4+11=7$.", lambda: eq(ev(f, 2), 7))],
        "Roots $-7,2$: sum $-5$, product $-14$, axis $x=-5/2$.",
    )


# ---------------------------------------------------------------------------
# Difficulty 4/5 - five symbolic, two parametric, three formula
# ---------------------------------------------------------------------------

def t_d4_sym_01() -> Spec:
    return S(
        "Undoing a Line Around a Parabola",
        "Let $f$ be a non-constant linear function with inverse $f^{-1}$, and let $g$ be a "
        "quadratic function. No numeric data are supplied. " + TAIL,
        4, "symbolic",
        [C("The inverse $f^{-1}$ is again a non-constant linear function.", True,
           "Solving $y=mx+k$ for $x$ gives a line."),
         C("The composite $g\\circ f^{-1}$ is a quadratic function.", True,
           "A linear change of variable preserves the highest power."),
         C("The composite $f^{-1}\\circ g$ is a quadratic function.", True,
           "Applying a line after $g$ only rescales and shifts values."),
         C("The composite $g\\circ f^{-1}$ always has the same roots as $g$.", False,
           "Its roots are the images of the roots of $g$ under $f$."),
         C("The composite $f^{-1}\\circ g$ always has the same axis of symmetry as $g$.",
           True,
           "Acting on values, not on inputs, cannot move the axis.")],
        "Composing inside moves the roots; composing outside preserves the axis.",
    )


def t_d4_sym_02() -> Spec:
    return S(
        "Mirroring a Line and a Parabola",
        "Let $f$ be a linear function and $g$ a quadratic function, and consider the "
        "mirrored pair $\\tilde f(x)=f(-x)$ and $\\tilde g(x)=g(-x)$. No numeric data are "
        "supplied. " + TAIL,
        4, "symbolic",
        [C("The graphs of $\\tilde f$ and $\\tilde g$ meet exactly as often as those of "
           "$f$ and $g$.", True,
           "The mirror is a bijection of the plane sending meetings to meetings."),
         C("If the graphs of $f$ and $g$ are tangent, then so are those of $\\tilde f$ "
           "and $\\tilde g$.", True,
           "A double root is mirrored into a double root."),
         C("Mirroring in this way can turn two meetings into three.", False,
           "The difference stays quadratic."),
         C("The parabola $\\tilde g$ always opens in the same direction as $g$.", True,
           "The leading coefficient is unchanged by replacing $x$ with its opposite."),
         C("The parabola $\\tilde g$ always has the same axis of symmetry as $g$.", False,
           "The axis is reflected, so it moves unless it is the vertical coordinate axis.")],
        "Mirroring preserves counts, tangency and opening direction, but flips the axis.",
    )


def t_d4_sym_03() -> Spec:
    return S(
        "How Many Points Pin Down a Curve?",
        "Let $P$, $Q$ and $R$ be pairwise distinct points of the plane, no two of which lie "
        "on the same vertical line. No coordinates are supplied. " + TAIL,
        4, "symbolic",
        [C("Exactly one linear function has both $P$ and $Q$ on its graph.", True,
           "Two points with different abscissae determine a unique line."),
         C("There is always at least one quadratic function having $P$, $Q$ and $R$ on "
           "its graph.", False,
           "If the points are collinear, the interpolating polynomial is a line."),
         C("If $P$, $Q$ and $R$ are not collinear, then exactly one quadratic function has "
           "all three on its graph.", True,
           "Interpolation through three distinct abscissae is unique."),
         C("Infinitely many quadratic functions have both $P$ and $Q$ on their graphs.",
           True,
           "One free coefficient remains after two conditions."),
         C("A quadratic function and a linear function can agree at all three points.",
           False,
           "Their difference is quadratic, so it has at most two zeros.")],
        "Two points fix a line; three non-collinear points fix a parabola.",
    )


def t_d4_sym_04() -> Spec:
    return S(
        "Where the Difference Reaches Its Extreme",
        "Let $f$ be a linear function with slope $m$, let $g$ be a quadratic function whose "
        "leading coefficient $a$ is nonzero, and set $d=g-f$. No numeric data are "
        "supplied. " + TAIL,
        4, "symbolic",
        [C("Unless $m$ vanishes, the axis of $d$ differs from the axis of $g$.", True,
           "Subtracting a slanted line shifts the linear coefficient, hence the axis."),
         C("The axis of $d$ never depends on $m$.", False,
           "It moves by an amount proportional to $m$."),
         C("The coefficient of $x^{2}$ in $d$ equals $a$.", True,
           "A line has no square term."),
         C("The function $d$ has a smallest value exactly when $a$ is positive.", True,
           "An upward parabola is bounded below and attains its minimum."),
         C("If the graphs of $f$ and $g$ are tangent, then the vertex of $d$ lies on the "
           "horizontal coordinate axis.", True,
           "Tangency gives $d$ a double root, which sits at its vertex.")],
        "Only the axis of $d$ feels the slope of $f$; the opening and tangency read off $d$.",
    )


def t_d4_sym_05() -> Spec:
    return S(
        "Signs of the Roots from Sum and Product",
        "Let $g(x)=ax^{2}+bx+c$ with nonzero $a$ have two distinct real roots; write $S$ "
        "for their sum and $P$ for their product. No numeric data are supplied. " + TAIL,
        4, "symbolic",
        [C("If $P$ is negative, then the two roots have opposite signs.", True,
           "A negative product forces one root on each side of the origin."),
         C("If $P$ is positive and $S$ is negative, then both roots are negative.", True,
           "Equal signs from the product, negative from the sum."),
         C("If $P$ is negative and $a$ is positive, then $g$ takes a negative value at the "
           "origin.", True,
           "$P=c/a$, so $c$ and $a$ have opposite signs, giving a negative $g$ at the origin."),
         C("If $P$ is positive, then both roots must be positive.", False,
           "They could both be negative instead."),
         C("If $S$ vanishes, then the roots are opposites of each other and the axis is "
           "the vertical coordinate axis.", True,
           "A vanishing sum puts the midpoint of the roots at the origin.")],
        "Product fixes whether the signs agree; sum then decides which sign it is.",
    )


def t_d4_par_01() -> Spec:
    c = sp.Symbol("c")
    g = X ** 2 - 2 * X - 5
    fc = X + c
    delta = disc(g - fc)
    return S(
        "Sliding a Line Until It Touches",
        "Let $g(x)=x^{2}-2x-5$ and let $f_c(x)=x+c$ be the family of lines of slope one, "
        f"where $c$ runs through $\\mathbb{{R}}$. {TAIL}",
        4, "parametric",
        [C("There is exactly one value of $c$ for which the line touches the parabola at a "
           "single point.", True, "The tangency condition is one equation in $c$.",
           lambda: n_param_solutions(delta, c) == 1),
         C("When the line passes through the origin, it meets the parabola twice.", True,
           "The discriminant is then positive.",
           lambda: nmeet(fc.subs(c, 0), g) == 2),
         C("For every real $c$ the line meets the parabola.", False,
           "Pushing the line far down makes the discriminant negative.",
           lambda: not has_sol(sp.Lt(delta, 0), c)),
         C("All the lines of the family have the same slope.", True,
           "Only the intercept changes.",
           lambda: eq(sp.diff(cf(fc, 1), c), 0)),
         C("Whatever $c$ is, the graphs meet at no more than two points.", True,
           "The difference stays a quadratic.",
           lambda: deg(sp.expand(g - fc)) == 2)],
        "$g-f_c=x^{2}-3x-(5+c)$ with discriminant $29+4c$: two meetings, one, or none.",
    )


def t_d4_par_02() -> Spec:
    a = sp.Symbol("a")
    ga = a * X ** 2 + 2 * X - 3
    f = X + 1
    delta = disc(ga - f)
    return S(
        "Choosing the Leading Coefficient",
        "Let $g_a(x)=ax^{2}+2x-3$ with $a\\neq 0$ and let $f(x)=x+1$. Consider what the "
        f"real parameter $a$ can do. {TAIL}",
        4, "parametric",
        [C("There is a value of $a$ for which the line is tangent to the parabola.", True,
           "The discriminant vanishes for one admissible $a$.",
           lambda: any(s != 0 for s in sp.solve(sp.Eq(delta, 0), a))),
         C("For every $a\\neq 0$ the graphs meet at two distinct points.", False,
           "Sufficiently negative $a$ makes the discriminant negative.",
           lambda: not has_sol(sp.Le(delta, 0), a)),
         C("Some choice of $a$ makes the graphs miss each other entirely.", True,
           "The discriminant can be made negative.",
           lambda: has_sol(sp.Lt(delta, 0), a)),
         C("The axis of symmetry of $g_a$ is the same for all admissible $a$.", False,
           "The axis depends on $a$.",
           lambda: eq(sp.diff(axis(ga), a), 0)),
         C("Every parabola of the family crosses the $y$-axis at the same point.", True,
           "The constant term does not involve $a$.",
           lambda: eq(sp.diff(ev(ga, 0), a), 0))],
        "$g_a-f=ax^{2}+x-4$ with discriminant $1+16a$; all curves pass through $(0,-3)$.",
    )


def t_d4_01() -> Spec:
    f, g = 5 * X + 1, 3 * X ** 2 - 2 * X - 1
    return S(
        "Coefficient Match Against a Composition",
        f"Let $f(x)=5x+1$ and $g(x)=3x^{{2}}-2x-1$. {TAIL}",
        4, "formula",
        [C("Matching $g=Af^{2}+Bf+C$ forces $A=\\frac{3}{25}$.", True,
           "Leading terms: $25A=3$.", lambda: eq(abc(g, f)["A"], R(3, 25))),
         C("Matching $g=Af^{2}+Bf+C$ forces $B=-2$.", False,
           "$B$ is not the linear coefficient of $g$; here $B=-16/25$.",
           lambda: eq(abc(g, f)["B"], -2)),
         C("The highest power of $x$ in the nested function $f(g(x))$ is $x^{2}$.", True,
           "Degrees multiply, they do not add.",
           lambda: deg(sp.expand(f.subs(X, g))) == 2),
         C("$g(f(0))=0$.", True, "$f(0)=1$ and $g(1)=0$.",
           lambda: eq(ev(g, ev(f, 0)), 0)),
         C("$f(g(0))=g(f(0))$.", False, "$f(-1)=-4$ while $g(1)=0$.",
           lambda: eq(ev(f, ev(g, 0)), ev(g, ev(f, 0))))],
        "$A=3/25$, $B=-16/25$, $C=-12/25$; the nested functions differ.",
    )


def t_d4_02() -> Spec:
    f, g = 7 * X + 2, X ** 2 + 3 * X - 40
    return S(
        "Root Distance, Midpoint, and a Sign",
        f"Let $f(x)=7x+2$ and $g(x)=x^{{2}}+3x-40$. {TAIL}",
        4, "formula",
        [C("The distance between the real roots of $g$ is $13$.", True,
           "The roots are $-8$ and $5$.",
           lambda: eq(abs(real_roots(g)[1] - real_roots(g)[0]), 13)),
         C("The axis of symmetry of $g$ is the midpoint of its roots.", True,
           "True for every quadratic with real roots.",
           lambda: eq(axis(g), sum(real_roots(g)) / 2)),
         C("The sum of the roots of $g$ is $3$.", False, "The sum is $-3$.",
           lambda: eq(vsum(g), 3)),
         C("The product of the roots of $g$ is $-40$.", True, "$c/a=-40$.",
           lambda: eq(vprod(g), -40)),
         C("The graphs of $f$ and $g$ meet at more than two points.", False,
           "The difference is quadratic.", lambda: nmeet(f, g) > 2)],
        "Roots $-8$ and $5$: distance $13$, sum $-3$, product $-40$, axis $x=-3/2$.",
    )


def t_d4_03() -> Spec:
    f, g = -6 * X + 4, 2 * X ** 2 + 3 * X - 2
    s = sp.Symbol("s")
    return S(
        "A Translation Cannot Flatten a Parabola",
        f"Let $f(x)=-6x+4$ and $g(x)=2x^{{2}}+3x-2$. {TAIL}",
        4, "formula",
        [C("Completing the square gives "
           "$g(x)=2\\left(x+\\frac{3}{4}\\right)^{2}-\\frac{25}{8}$.", True,
           "Factor out $2$ and complete.",
           lambda: eq(g, 2 * (X + R(3, 4)) ** 2 - R(25, 8))),
         C("Some vertical translation of $g$ makes $f-g$ a constant function.", False,
           "A vertical shift cannot remove the square term.",
           lambda: deg(sp.expand(f - (g + s))) < 2),
         C("The vertex of the graph of $g$ is "
           "$\\left(-\\frac{3}{4},-\\frac{25}{8}\\right)$.", True, "From vertex form.",
           lambda: eq(axis(g), R(-3, 4)) and eq(vertex(g)[1], R(-25, 8))),
         C("The average rate of change of $g$ on $[0,2]$ equals the slope of $y=f(x)$.",
           False, "The average rate is $7$, the slope is $-6$.",
           lambda: eq(avg_rate(g, 0, 2), slope(f))),
         C("$f(g(0))=16$.", True, "$g(0)=-2$ and $f(-2)=16$.",
           lambda: eq(ev(f, ev(g, 0)), 16))],
        "Vertex $(-3/4,-25/8)$; translations move the curve but never straighten it.",
    )


# ---------------------------------------------------------------------------
# Difficulty 5/5 - five symbolic, two parametric, one hybrid, one formula
# ---------------------------------------------------------------------------

def t_d5_sym_01() -> Spec:
    return S(
        "Lines Through the Vertex",
        "Let $g$ be a quadratic function with vertex $V$ and nonzero leading coefficient "
        "$a$, and let $f$ be a linear function with slope $m$ whose graph passes through "
        "$V$. No numeric data are supplied. " + TAIL,
        5, "symbolic",
        [C("If $m$ vanishes, then $V$ is the only common point of the two graphs.", True,
           "The difference becomes a perfect square with its double root at the vertex."),
         C("If $m$ is nonzero, then the graphs have a second common point different from "
           "$V$.", True,
           "The difference factors as the vertex factor times a non-constant line."),
         C("Whatever $m$ is, the two graphs are tangent at $V$.", False,
           "A slanted line through the vertex cuts the parabola there."),
         C("The two graphs always have at least one common point.", True,
           "They share the vertex by construction."),
         C("When a second common point exists, it lies to the right of the axis of $g$ "
           "exactly when $m$ and $a$ have the same sign.", True,
           "The second meeting sits at the vertex abscissa displaced by $m/a$.")],
        "Through the vertex, only the horizontal line is tangent; every other slope cuts.",
    )


def t_d5_sym_02() -> Spec:
    return S(
        "Composing a Parabola With Itself",
        "Let $f$ be a non-constant linear function and let $g$ be a quadratic function. "
        "Consider the compositions $g\\circ g$ and $g\\circ f\\circ g$. No numeric data "
        "are supplied. " + TAIL,
        5, "symbolic",
        [C("The highest power of $x$ in $g\\circ g$ is $x^{4}$.", True,
           "Degrees multiply: two times two."),
         C("The highest power of $x$ in $g\\circ f\\circ g$ is $x^{4}$.", True,
           "A degree-one map inserted in the middle changes nothing."),
         C("The highest power of $x$ in $g\\circ g$ is $x^{4}$ because the two powers are "
           "added rather than multiplied.", False,
           "Adding would give a cube; the correct rule is multiplication."),
         C("The composition $f\\circ f$ is again a non-constant linear function.", True,
           "The slopes multiply and stay nonzero."),
         C("For a suitable $g$, the composition $g\\circ g$ is a quadratic function.",
           False,
           "The leading coefficient of $g\\circ g$ is a nonzero cube, so the degree stays four.")],
        "Under composition degrees multiply, so a parabola inside a parabola gives $x^{4}$.",
    )


def t_d5_sym_03() -> Spec:
    return S(
        "Can a Line Trap a Parabola?",
        "Let $g$ be a quadratic function whose leading coefficient $a$ is nonzero, and let "
        "$f$ be a linear function. No numeric data are supplied. " + TAIL,
        5, "symbolic",
        [C("If $a$ is positive, some line lies strictly below the whole graph of $g$.",
           True, "Any horizontal line under the vertex works."),
         C("If $a$ is positive, some line lies strictly above the whole graph of $g$.",
           False, "The parabola outgrows every line in both directions."),
         C("If $a$ is positive, then $g-f$ attains a smallest value for every linear $f$.",
           True, "The difference is again an upward parabola."),
         C("If $a$ is negative, some horizontal line lies strictly above the whole graph "
           "of $g$.", True, "Take any level above the vertex height."),
         C("The graph of $g$ can be squeezed between two distinct parallel lines over all "
           "of $\\mathbb{R}$.", False,
           "A parabola is unbounded relative to any line.")],
        "A line can bound a parabola on the flat side only, never on the opening side.",
    )


def t_d5_sym_04() -> Spec:
    return S(
        "Reading Roots Through a Linear Substitution",
        "Let $f$ be a non-constant linear function with slope $m$, let "
        "$q(y)=Ay^{2}+By+C$ with nonzero $A$, and set $g=q\\circ f$. No numeric data are "
        "supplied. " + TAIL,
        5, "symbolic",
        [C("The function $g$ is a quadratic function.", True,
           "A linear substitution keeps the highest power."),
         C("Every real root of $g$ is a point at which $f$ takes a root value of $q$.",
           True, "$g$ vanishes exactly where the value of $f$ is a root of $q$."),
         C("If $q$ has no real roots, then $g$ has no real roots.", True,
           "There is no admissible value for $f$ to hit."),
         C("The roots of $g$ coincide with the roots of $q$.", False,
           "They are the preimages of the roots of $q$ under $f$."),
         C("The coefficient of $x^{2}$ in $g$ equals $A$.", False,
           "It equals $A$ times the square of $m$.")],
        "Substituting a line permutes the roots by the inverse line and scales the "
        "leading coefficient.",
    )


def t_d5_sym_05() -> Spec:
    return S(
        "Equal Values and the Axis",
        "Let $g$ be a quadratic function with nonzero leading coefficient and axis of "
        "symmetry $\\ell$, and let $u$ and $v$ be distinct real numbers with $g(u)=g(v)$. "
        "No numeric data are supplied. " + TAIL,
        5, "symbolic",
        [C("The line $\\ell$ passes through the midpoint of $u$ and $v$.", True,
           "Equal values force symmetry about the axis."),
         C("The numbers $u$ and $v$ must be the roots of $g$.", False,
           "They are a symmetric pair at an arbitrary common height."),
         C("For every positive real $t$, the two points at distance $t$ from $\\ell$ on "
           "either side carry equal values of $g$.", True,
           "That is precisely the symmetry of the parabola."),
         C("The sum $u+v$ is determined by the coefficients of $g$ alone.", True,
           "It is twice the abscissa of the axis."),
         C("Such a pair of distinct numbers with equal values exists for every quadratic "
           "$g$.", True,
           "Reflect any point other than the vertex in the axis.")],
        "Equal values pair up symmetrically about the axis, whatever the common height.",
    )


def t_d5_par_01() -> Spec:
    t = sp.Symbol("t")
    g = X ** 2 - 4 * X + 6
    ft = t * (X - 1) + 2
    delta = disc(g - ft)
    return S(
        "A Pencil of Lines and Two Tangents",
        "Let $g(x)=x^{2}-4x+6$ and let $f_t(x)=t(x-1)+2$ be the family of lines obtained as "
        f"the real parameter $t$ varies. {TAIL}",
        5, "parametric",
        [C("Every line of the family passes through one and the same point.", True,
           "All of them pass through $(1,2)$.",
           lambda: eq(sp.diff(ev(ft, 1), t), 0)),
         C("There are exactly two slopes for which the line touches the parabola at a "
           "single point.", True, "The tangency condition is quadratic in $t$.",
           lambda: n_param_solutions(delta, t) == 2),
         C("There are slopes for which the line misses the parabola completely.", True,
           "Between the two tangent slopes the discriminant is negative.",
           lambda: has_sol(sp.Lt(delta, 0), t)),
         C("For every slope the line meets the parabola at two distinct points.", False,
           "Tangency and separation both occur.",
           lambda: not has_sol(sp.Le(delta, 0), t)),
         C("The fixed point common to all the lines lies on the parabola.", False,
           "The parabola takes the value $3$ there, not $2$.",
           lambda: eq(ev(g, 1), ev(ft, 1)))],
        "$g-f_t=x^{2}-(4+t)x+(4+t)$ with discriminant $t(4+t)$: two tangent slopes, and "
        "no meeting in between.",
    )


def t_d5_par_02() -> Spec:
    r = sp.Symbol("r")
    gr = (X - r) ** 2 - 4
    f = 2 * X - 1
    delta = disc(gr - f)
    return S(
        "Sliding the Parabola Sideways",
        "Let $f(x)=2x-1$ and let $g_r(x)=(x-r)^{2}-4$ be the family of parabolas obtained "
        f"as the real shift $r$ varies. {TAIL}",
        5, "parametric",
        [C("There is exactly one shift for which the line is tangent to the parabola.",
           True, "The discriminant is linear in $r$, so it vanishes once.",
           lambda: n_param_solutions(delta, r) == 1),
         C("For sufficiently negative shifts the line and the parabola do not meet.", True,
           "The discriminant becomes negative.",
           lambda: has_sol(sp.Lt(delta, 0), r)),
         C("The vertex height of $g_r$ depends on $r$.", False,
           "Every parabola of the family has vertex height $-4$.",
           lambda: not eq(sp.diff(vertex(gr)[1], r), 0)),
         C("The axis of symmetry of $g_r$ moves as $r$ changes.", True,
           "The axis is the vertical line through $r$.",
           lambda: not eq(sp.diff(axis(gr), r), 0)),
         C("Every parabola of the family crosses the $y$-axis at the same point.", False,
           "The value at the origin is $r^{2}-4$.",
           lambda: eq(sp.diff(ev(gr, 0), r), 0))],
        "$g_r-f=x^{2}-(2r+2)x+(r^{2}-3)$ with discriminant $8r+16$: tangency at $r=-2$.",
    )


def t_d5_hyb() -> Spec:
    f, g = -3 * X + 5, 2 * X ** 2 - 8 * X
    return S(
        "Rebuild from a Vertex and a Point",
        "The line $f$ has slope $-3$ and passes through the point $(1,2)$. The quadratic "
        "$g$ has leading coefficient $2$ and its vertex at $(2,-8)$. Recover both formulas, "
        f"then judge the statements. {TAIL}",
        5, "hybrid",
        [C("$f(x)=-3x+5$.", True, "Point-slope recovery.",
           lambda: eq(f, -3 * X + 5) and eq(ev(f, 1), 2) and eq(slope(f), -3)),
         C("$g(x)=2x^{2}-8x$.", True, "$2(x-2)^{2}-8$ expanded.",
           lambda: eq(g, 2 * (X - 2) ** 2 - 8)),
         C("The roots of $g$ are $0$ and $4$.", True, "$2x(x-4)$.",
           lambda: real_roots(g) == [0, 4]),
         C("The graphs of $f$ and $g$ meet at a point of the $y$-axis.", False,
           "$f(0)=5$ while $g(0)=0$.", lambda: meets_at(f, g, 0)),
         C("Matching $g=Af^{2}+Bf+C$ forces $A=\\frac{2}{9}$.", True,
           "Leading terms: $9A=2$.", lambda: eq(abc(g, f)["A"], R(2, 9)))],
        "$$\nf(x)=-3x+5\\qquad g(x)=2(x-2)^{2}-8=2x^{2}-8x\n$$",
    )


def t_d5_01() -> Spec:
    f, g = 3 * X - 7, X ** 2 - 5 * X + 2
    return S(
        "Axis Gap, Vieta, and Nested Order",
        f"Let $f(x)=3x-7$ and $g(x)=x^{{2}}-5x+2$. {TAIL}",
        5, "formula",
        [C("Completing the square gives "
           "$g(x)=\\left(x-\\frac{5}{2}\\right)^{2}-\\frac{17}{4}$.", True,
           "Standard completion.",
           lambda: eq(g, (X - R(5, 2)) ** 2 - R(17, 4))),
         C("At the axis of $g$ the gap $f-g$ equals $\\frac{19}{4}$.", True,
           "$f(5/2)=1/2$ and $g(5/2)=-17/4$.",
           lambda: eq(ev(f - g, axis(g)), R(19, 4))),
         C("By Vieta the sum of the roots of $g$ is $-5$.", False,
           "The sum is $5$; the sign of $-b/a$ is the trap.",
           lambda: eq(vsum(g), -5)),
         C("$g(f(0))=f(g(0))$.", False, "$g(-7)=86$ while $f(2)=-1$.",
           lambda: eq(ev(g, ev(f, 0)), ev(f, ev(g, 0)))),
         C("The graphs of $f$ and $g$ meet at two distinct points.", True,
           "The difference has a positive discriminant.",
           lambda: nmeet(f, g) == 2)],
        "Vertex $(5/2,-17/4)$, gap $19/4$ at the axis, sum of roots $5$, two meetings.",
    )


# ---------------------------------------------------------------------------
# Assemble, verify, render
# ---------------------------------------------------------------------------

BUILDERS = [
    t_d1_01, t_d1_02, t_d1_03, t_d1_04, t_d1_05, t_d1_06, t_d1_07, t_d1_08, t_d1_09,
    t_d2_01, t_d2_02, t_d2_03, t_d2_04, t_d2_05, t_d2_06, t_d2_07, t_d2_08, t_d2_09,
    t_d3_sym_01, t_d3_sym_02, t_d3_geo,
    t_d3_01, t_d3_02, t_d3_03, t_d3_04, t_d3_05, t_d3_06, t_d3_07,
    t_d4_sym_01, t_d4_sym_02, t_d4_sym_03, t_d4_sym_04, t_d4_sym_05,
    t_d4_par_01, t_d4_par_02, t_d4_01, t_d4_02, t_d4_03,
    t_d5_sym_01, t_d5_sym_02, t_d5_sym_03, t_d5_sym_04, t_d5_sym_05,
    t_d5_par_01, t_d5_par_02, t_d5_hyb, t_d5_01,
]

PLAN_DIFF = {1: 9, 2: 9, 3: 10, 4: 10, 5: 9}
PLAN_KINDS = {"symbolic": 12, "parametric": 4, "hybrid": 1, "geometric": 1, "formula": 29}

BRACE = re.compile(r"[\^_]\{[^{}]*\}")
DIGIT = re.compile(r"\d")


def verify(spec: Spec) -> None:
    """Machine-check every claim of a non-symbolic task; policy-check symbolic ones."""
    if spec.stem_kind == "symbolic":
        for claim in spec.claims:
            blob = BRACE.sub("", claim.text)
            if DIGIT.search(blob):
                raise SystemExit(f"symbolic task carries a number: {spec.title} :: {claim.text}")
        blob = BRACE.sub("", spec.context)
        if DIGIT.search(blob):
            raise SystemExit(f"symbolic context carries a number: {spec.title}")
        return
    for letter, claim in zip("ABCDE", spec.claims):
        if claim.check is None:
            raise SystemExit(f"missing sympy check: {spec.title} / {letter}")
        got = bool(claim.check())
        if got != claim.truth:
            raise SystemExit(
                f"answer-key mismatch in '{spec.title}' statement {letter}: "
                f"sympy says {got}, spec says {claim.truth}\n  {claim.text}"
            )


def expl(letter: str, truth: bool, body: str) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body.strip()}"


def render(spec: Spec, order: int) -> dict:
    letters = "ABCDE"
    return {
        "id": f"math-7-{order}",
        "case_id": f"MATH 7.{order:02d}",
        "title": spec.title,
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [c.truth for c in spec.claims],
        "tactical_explanations": [
            expl(letters[i], c.truth, c.explanation) for i, c in enumerate(spec.claims)
        ],
        "difficulty_level": f"{spec.difficulty}/5",
        "sort_order": order,
        "solution_overview": spec.overview,
        "subsection": "7",
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }


def main() -> None:
    data = json.loads(OUT.read_text())
    loaded = data["tasks"]
    if len(loaded) < 50:
        raise SystemExit(f"expected at least 50 existing tasks, found {len(loaded)}")
    # Re-runnable: a previous run of this script only ever added 7.51 and beyond.
    existing = [t for t in loaded if t["sort_order"] <= 50]
    if len(existing) != 50:
        raise SystemExit(f"expected 50 tasks with sort_order <= 50, found {len(existing)}")

    specs = [build() for build in BUILDERS]
    if len(specs) != 47:
        raise SystemExit(f"expected 47 new specs, got {len(specs)}")

    diffs = Counter(s.difficulty for s in specs)
    if diffs != Counter(PLAN_DIFF):
        raise SystemExit(f"difficulty plan mismatch: {dict(sorted(diffs.items()))}")
    kinds = Counter(s.stem_kind for s in specs)
    if kinds != Counter(PLAN_KINDS):
        raise SystemExit(f"stem_kind plan mismatch: {dict(kinds)}")

    old_titles = {t["title"] for t in existing}
    old_contexts = {t["context"] for t in existing}
    seen_titles: set[str] = set()
    for spec in specs:
        if spec.title in old_titles or spec.title in seen_titles:
            raise SystemExit(f"duplicate title: {spec.title}")
        seen_titles.add(spec.title)
        if spec.context in old_contexts:
            raise SystemExit(f"duplicate context: {spec.title}")
        if len(spec.claims) != 5:
            raise SystemExit(f"{spec.title}: {len(spec.claims)} statements")
        texts = [c.text for c in spec.claims]
        if len(set(texts)) != 5:
            raise SystemExit(f"{spec.title}: repeated statement")
        trues = sum(1 for c in spec.claims if c.truth)
        if not 1 <= trues <= 4:
            raise SystemExit(f"{spec.title}: {trues} true statements")
        verify(spec)

    new_tasks = [render(spec, 51 + i) for i, spec in enumerate(specs)]
    tasks = existing + new_tasks

    if len(tasks) != 97:
        raise SystemExit(f"expected 97 tasks, got {len(tasks)}")
    for i, task in enumerate(tasks):
        if task["sort_order"] != i + 1 or task["case_id"] != f"MATH 7.{i + 1:02d}":
            raise SystemExit(f"numbering broken at index {i}: {task['case_id']}")
        if task["id"] != f"math-7-{i + 1}":
            raise SystemExit(f"id broken at index {i}: {task['id']}")
    if len({t["title"] for t in tasks}) != 97:
        raise SystemExit("titles are not unique across the merged bank")

    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")

    new_diffs = Counter(t["difficulty_level"] for t in new_tasks)
    new_kinds = Counter(t["stem_kind"] for t in new_tasks)
    all_diffs = Counter(t["difficulty_level"] for t in tasks)
    all_kinds = Counter(t["stem_kind"] for t in tasks)
    print(f"Wrote {len(tasks)} tasks -> {OUT}")
    print(f"  kept {len(existing)}, appended {len(new_tasks)}")
    print("new difficulties:", dict(sorted(new_diffs.items())))
    print("new stem_kinds:", dict(sorted(new_kinds.items())))
    print("bank difficulties:", dict(sorted(all_diffs.items())))
    print("bank stem_kinds:", dict(sorted(all_kinds.items())))
    print(f"new symbolic: {new_kinds['symbolic']}/47 "
          f"= {100 * new_kinds['symbolic'] / 47:.0f}%")
    print(f"bank symbolic: {all_kinds['symbolic']}/97 "
          f"= {100 * all_kinds['symbolic'] / 97:.0f}%")
    print("first new:", new_tasks[0]["case_id"], "|", new_tasks[0]["title"])
    print("last new: ", new_tasks[-1]["case_id"], "|", new_tasks[-1]["title"])
    checks = sum(1 for s in specs if s.stem_kind != "symbolic") * 5
    print(f"sympy-verified claims: {checks}")


if __name__ == "__main__":
    main()
