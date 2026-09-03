#!/usr/bin/env python3
"""Chapter 9 — Polynomial functions. Exam T/F bank (~50).

Mix: ~25% symbolic + formula / applied / table / graph / parametric.
MATH 9.01 is the Item 32 train exemplar (3/5).
Explanations follow Chapter 4 voice: narrative, one $$line$$, natural verdict.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path

from sympy import Poly, Rational, Symbol, diff, expand, factor, latex, simplify

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
t = Symbol("t")
OUT = Path("/workspace/src/data/math-ch9-polynomials.json")


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def close(truth: bool, bridge: str) -> str:
    verd = "True" if truth else "False"
    b = bridge.rstrip(" .")
    return f"{b}, so the statement is {verd}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def Lx(expr) -> str:
    return latex(simplify(expand(expr)))


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
    tables_markdown: str | None = None
    figure: str | None = None


def C(text: str, truth: bool, expl: str) -> Claim:
    return Claim(text, truth, expl)


def S(**kw) -> Spec:
    return Spec(**kw)


def expl(letter: str, truth: bool, body: str) -> str:
    if body.startswith("**"):
        return body
    return pack(letter, truth, [body]) if "so the statement is" not in body.lower() else (
        f"**{letter}.** → {'True' if truth else 'False'}\n\n{body.strip()}"
    )


# ---------------------------------------------------------------------------
# MATH 9.01 — Item 32 exemplar
# ---------------------------------------------------------------------------

ITEM32_TABLE = (
    "| Time $t$ in seconds | $0$ | $10$ | $20$ | $30$ | $40$ | $50$ | $60$ | $70$ | $80$ | $90$ | $100$ | $110$ | $120$ |\n"
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n"
    "| Distance in metres | $0$ | $70$ | $160$ | $290$ | $430$ | $580$ | $730$ | $860$ | $1010$ | $1160$ | $1280$ | $1350$ | $1400$ |"
)


def item32() -> Spec:
    return S(
        title="Two Lines Between A and B: Cubic Speed and a Distance Table",
        context=(
            "Elisabeth commutes regularly by train between stops $A$ and $B$. "
            "Line L1 is described by the velocity (in m/s)\n\n"
            + D(r"v(t)=0.00002t^{3}-0.005t^{2}+0.4t")
            + "\n\nLine L1 passes through stop $B$ but does not stop there. "
            "Line L2 records the total travel distance from $A$ every $10$ seconds "
            "(table below). The run of L2 from $A$ to $B$ lasts $120$ seconds. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        ),
        difficulty=3,
        stem_kind="applied",
        tables_markdown=ITEM32_TABLE,
        overview=(
            "Differentiate the cubic speed of L1 to read acceleration; the second "
            "derivative locates the extreme of $a(t)$. For L2 the table gives "
            "interval average speeds as first differences over $10$ s, and the "
            "whole-trip average is total distance over $120$ s, converted by "
            "the factor $3.6$ from m/s into km/h."
        ),
        claims=[
            C(
                "Line L1 is decelerating at $t=80$.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "Deceleration means that the acceleration $a=v'$ is negative at that instant, so differentiate the cubic speed.",
                        D(r"v(t)=0.00002t^{3}-0.005t^{2}+0.4t"),
                        D(r"a(t)=v'(t)=0.00006t^{2}-0.01t+0.4"),
                        "Substitute $t=80$.",
                        D(r"a(80)=0.00006\cdot 80^{2}-0.01\cdot 80+0.4=-0.016"),
                        close(True, "The value is negative, so L1 is slowing down at $t=80$"),
                    ],
                ),
            ),
            C(
                "The minimal acceleration of Line L1 between stops $A$ and $B$ is reached before $t=75$.",
                False,
                pack(
                    "B",
                    False,
                    [
                        "The acceleration of a cubic speed is a quadratic, so its minimum on the line occurs where $a'(t)=0$ and the leading coefficient of $a$ is positive.",
                        D(r"a'(t)=0.00012t-0.01"),
                        D(r"0.00012t-0.01=0\implies t=\frac{0.01}{0.00012}=\frac{250}{3}"),
                        D(r"t=\frac{250}{3}\approx 83.3"),
                        "That critical time is after $75$, not before it.",
                        close(False, "The minimal acceleration is reached near $t=83$, later than $t=75$"),
                    ],
                ),
            ),
            C(
                r"The average velocity between the two stops $A$ and $B$ of Line L2 is more than $45$ km/h.",
                False,
                pack(
                    "C",
                    False,
                    [
                        "The whole-trip average speed of L2 is the last distance divided by the last time, then converted from m/s into km/h.",
                        D(r"\bar v=\frac{1400}{120}=\frac{35}{3}\ \mathrm{m/s}"),
                        D(r"\frac{35}{3}\cdot 3.6=42\ \mathrm{km/h}"),
                        close(False, "$42$ is not greater than $45$"),
                    ],
                ),
            ),
            C(
                "The velocity of Line L2 has only one local maximum.",
                False,
                pack(
                    "D",
                    False,
                    [
                        "On a discrete table the interval velocities are the first differences of distance over each $10$ s block.",
                        D(r"\Delta s/\Delta t:\ 7,9,13,14,15,15,13,15,15,12,7,5"),
                        "A local maximum of this sequence is a value strictly larger than both neighbours (or a plateau that falls on both sides). The plateau $15,15$ around $40$–$60$ s and the later plateau $15,15$ around $70$–$90$ s are two separate local peaks, with $13$ sitting between them.",
                        close(False, "There are two local maxima, not only one"),
                    ],
                ),
            ),
            C(
                "The highest average velocity of Line L2 was reached between $60$ and $70$ seconds.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "The average velocity on $[60,70]$ is the corresponding first difference.",
                        D(r"\frac{860-730}{10}=13\ \mathrm{m/s}"),
                        "Several other blocks reach $15$ m/s, which is larger.",
                        D(r"\frac{580-430}{10}=15\qquad \frac{1010-860}{10}=15"),
                        close(False, "The highest interval average is $15$ m/s, not the $13$ on $[60,70]$"),
                    ],
                ),
            ),
        ],
    )


# ---------------------------------------------------------------------------
# Remaining specs
# ---------------------------------------------------------------------------

def bank() -> list[Spec]:
    specs: list[Spec] = [item32()]
    specs += d1()
    specs += d2()
    specs += d3_rest()
    specs += d4()
    specs += d5()
    return specs


def d1() -> list[Spec]:
    p = expand((x - 1) * (x + 2) * (x - 3))  # x^3-2x^2-5x+6
    return [
        S(
            title="Reading a Cubic at Three Abscissas",
            context="Let $p(x)=x^{3}-2x+4$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="A cubic is evaluated by substituting the named number and simplifying the powers.",
            claims=[
                C("$p(0)=4$.", True, pack("A", True, [
                    "The value at $0$ is the constant term.",
                    D(r"p(0)=4"),
                    close(True, "That is the claimed number"),
                ])),
                C("$p(1)=3$.", True, pack("B", True, [
                    "Substitute $x=1$.",
                    D(r"p(1)=1^{3}-2\cdot 1+4=3"),
                    close(True, "The value is $3$"),
                ])),
                C("$p(-1)=7$.", False, pack("C", False, [
                    "Substitute $x=-1$.",
                    D(r"p(-1)=(-1)^{3}-2(-1)+4=-1+2+4=5"),
                    close(False, "The value is $5$, not $7$"),
                ])),
                C("The highest power of $x$ in $p$ is $x^{3}$.", True, pack("D", True, [
                    "The written formula already shows a non-zero $x^{3}$ term and nothing higher.",
                    D(r"p(x)=x^{3}-2x+4"),
                    close(True, "The highest power is $x^{3}$"),
                ])),
                C("The constant term of $p$ is $-2$.", False, pack("E", False, [
                    "The constant term is the value at $0$, already computed as $4$.",
                    D(r"p(0)=4"),
                    close(False, "The constant term is $4$, not $-2$"),
                ])),
            ],
        ),
        S(
            title="Degree and Leading Coefficient on Sight",
            context="Let $q(x)=4x^{3}-x+5$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="Degree and leading coefficient are read from the highest written power.",
            claims=[
                C("The highest power of $x$ in $q$ is $x^{3}$.", True, pack("A", True, [
                    "The term $4x^{3}$ is present and no $x^{4}$ appears.",
                    D(r"q(x)=4x^{3}-x+5"),
                    close(True, "The highest power is $x^{3}$"),
                ])),
                C("The leading coefficient of $q$ is $4$.", True, pack("B", True, [
                    "The leading coefficient is the coefficient of the highest power.",
                    D(r"4x^{3}"),
                    close(True, "That coefficient is $4$"),
                ])),
                C("$q$ is a quadratic function.", False, pack("C", False, [
                    "A quadratic has highest power $x^{2}$. Here the highest power is $x^{3}$.",
                    close(False, "$q$ is cubic, not quadratic"),
                ])),
                C("$q(0)=5$.", True, pack("D", True, [
                    D(r"q(0)=5"),
                    close(True, "The constant term is $5$"),
                ])),
                C("The leading coefficient of $q$ is $-1$.", False, pack("E", False, [
                    "The coefficient of $x$ is $-1$, but the leading term is $4x^{3}$.",
                    close(False, "The leading coefficient is $4$"),
                ])),
            ],
        ),
        S(
            title="Roots from a Factored Cubic",
            context=r"Let $p(x)=(x-1)(x+2)(x-3)$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="A product of linear factors vanishes exactly at those roots.",
            claims=[
                C("The roots of $p$ are $1$, $-2$ and $3$.", True, pack("A", True, [
                    "A product is zero precisely when one of the factors is zero.",
                    D(r"x-1=0\ \text{or}\ x+2=0\ \text{or}\ x-3=0"),
                    D(r"x=1,\quad x=-2,\quad x=3"),
                    close(True, "Those are the three roots"),
                ])),
                C("$p(1)=0$.", True, pack("B", True, [
                    D(r"p(1)=(1-1)(1+2)(1-3)=0"),
                    close(True, "The first factor vanishes"),
                ])),
                C("$p(0)=6$.", True, pack("C", True, [
                    D(r"p(0)=(-1)(2)(-3)=6"),
                    close(True, "The constant value is $6$"),
                ])),
                C("$p$ has highest power $x^{2}$.", False, pack("D", False, [
                    "Three linear factors multiply to a cubic.",
                    D(r"(x-1)(x+2)(x-3)=x^{3}-2x^{2}-5x+6"),
                    close(False, "The highest power is $x^{3}$"),
                ])),
                C("$x=2$ is a root of $p$.", False, pack("E", False, [
                    D(r"p(2)=(2-1)(2+2)(2-3)=1\cdot 4\cdot(-1)=-4"),
                    close(False, "The value is $-4$, not $0$"),
                ])),
            ],
        ),
        S(
            title="A Line Times a Square",
            context=r"Let $p(x)=(2x-1)(x^{2}+1)$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="The product of a line and a quadratic with no real roots is a cubic with exactly one real root.",
            claims=[
                C("The highest power of $x$ in $p$ is $x^{3}$.", True, pack("A", True, [
                    "The $x$ from the line times $x^{2}$ produces $x^{3}$.",
                    D(r"p(x)=2x^{3}-x^{2}+2x-1"),
                    close(True, "The highest power is $x^{3}$"),
                ])),
                C("$p$ has exactly one real root.", True, pack("B", True, [
                    "$x^{2}+1$ never vanishes on $\\mathbb{R}$, so the only real root comes from the line.",
                    D(r"2x-1=0\implies x=\frac{1}{2}"),
                    close(True, "That is the only real root"),
                ])),
                C("$p(0)=-1$.", True, pack("C", True, [
                    D(r"p(0)=(-1)(1)=-1"),
                    close(True, "The value is $-1$"),
                ])),
                C("The leading coefficient of $p$ is $1$.", False, pack("D", False, [
                    D(r"2x\cdot x^{2}=2x^{3}"),
                    close(False, "The leading coefficient is $2$"),
                ])),
                C("$p$ is even.", False, pack("E", False, [
                    "An even function satisfies $p(-x)=p(x)$. Expanding shows both even and odd powers.",
                    D(r"p(x)=2x^{3}-x^{2}+2x-1"),
                    close(False, "Odd powers are present, so $p$ is not even"),
                ])),
            ],
        ),
        S(
            title="Adding Two Cubics",
            context=r"Let $p(x)=x^{3}+x$ and $q(x)=-x^{3}+4x^{2}-2$. Write $s=p+q$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="Adding cancels the $x^{3}$ terms and leaves a quadratic.",
            claims=[
                C("$s(x)=4x^{2}+x-2$.", True, pack("A", True, [
                    "Add coefficient-wise.",
                    D(r"s(x)=(x^{3}-x^{3})+4x^{2}+(x)+(-2)=4x^{2}+x-2"),
                    close(True, "The sum is exactly that quadratic"),
                ])),
                C("The highest power of $x$ in $s$ is $x^{3}$.", False, pack("B", False, [
                    "The two $x^{3}$ coefficients cancel.",
                    D(r"1+(-1)=0"),
                    close(False, "The highest remaining power is $x^{2}$"),
                ])),
                C("$s(0)=-2$.", True, pack("C", True, [
                    D(r"s(0)=-2"),
                    close(True, "The constant term is $-2$"),
                ])),
                C("$s$ is a quadratic function.", True, pack("D", True, [
                    "After cancellation the leading term is $4x^{2}$.",
                    close(True, "$s$ is quadratic"),
                ])),
                C("The leading coefficient of $s$ is $4$.", True, pack("E", True, [
                    D(r"s(x)=4x^{2}+x-2"),
                    close(True, "The leading coefficient is $4$"),
                ])),
            ],
        ),
        S(
            title="Odd Cubic on Sight",
            context=r"Let $p(x)=x^{3}-4x$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="Only odd powers appear, so $p(-x)=-p(x)$.",
            claims=[
                C("$p$ is an odd function.", True, pack("A", True, [
                    D(r"p(-x)=(-x)^{3}-4(-x)=-x^{3}+4x=-p(x)"),
                    close(True, "That is the definition of an odd function"),
                ])),
                C("The graph of $p$ is symmetric about the $y$-axis.", False, pack("B", False, [
                    "Symmetry about the $y$-axis is evenness, $p(-x)=p(x)$. Here $p$ is odd.",
                    close(False, "The graph is symmetric about the origin, not about the $y$-axis"),
                ])),
                C("$p(0)=0$.", True, pack("C", True, [
                    D(r"p(0)=0"),
                    close(True, "Every odd function vanishes at the origin"),
                ])),
                C("The roots of $p$ are $0$, $2$ and $-2$.", True, pack("D", True, [
                    D(r"p(x)=x(x^{2}-4)=x(x-2)(x+2)"),
                    close(True, "Those three numbers are the roots"),
                ])),
                C("$p(2)=4$.", False, pack("E", False, [
                    D(r"p(2)=8-8=0"),
                    close(False, "The value is $0$, because $2$ is a root"),
                ])),
            ],
        ),
        S(
            title="End Behaviour of a Downward Cubic",
            context=r"Let $p(x)=-2x^{3}+x+1$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            figure=svg_polynomial([-2, 0, 1, 1], xmin=-2.2, xmax=2.2, title="y = -2x³ + x + 1", marks=[(0, "p(0)")]),
            overview="A cubic with negative leading coefficient falls to $-\\infty$ on the right and rises to $+\\infty$ on the left.",
            claims=[
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", True, pack("A", True, [
                    "The leading term $-2x^{3}$ dominates for large positive $x$, and $-2<0$.",
                    close(True, "The graph disappears downwards on the right"),
                ])),
                C("As $x\\to -\\infty$, $p(x)\\to -\\infty$.", False, pack("B", False, [
                    "For large negative $x$, $x^{3}$ is negative, so $-2x^{3}$ is positive.",
                    close(False, "The graph rises to $+\\infty$ on the left"),
                ])),
                C("The leading coefficient of $p$ is $-2$.", True, pack("C", True, [
                    D(r"p(x)=-2x^{3}+x+1"),
                    close(True, "The leading coefficient is $-2$"),
                ])),
                C("$p(0)=1$.", True, pack("D", True, [
                    D(r"p(0)=1"),
                    close(True, "The graph crosses the $y$-axis at height $1$"),
                ])),
                C("$p$ is a quadratic function.", False, pack("E", False, [
                    "The highest power is $x^{3}$.",
                    close(False, "$p$ is cubic"),
                ])),
            ],
        ),
        S(
            title="A Short Value Table for a Cubic",
            context="The cubic $p$ takes the values in the table. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="table",
            tables_markdown="| $x$ | $-1$ | $0$ | $1$ | $2$ |\n| --- | --- | --- | --- | --- |\n| $p(x)$ | $2$ | $1$ | $2$ | $7$ |",
            overview="The table is consistent with $p(x)=x^{3}-x+1$. First differences already show the growth is not linear.",
            claims=[
                C("$p(0)=1$.", True, pack("A", True, [
                    "Read the column $x=0$.",
                    close(True, "The table lists $1$"),
                ])),
                C("$p(2)=7$.", True, pack("B", True, [
                    "Read the column $x=2$.",
                    close(True, "The table lists $7$"),
                ])),
                C("$p$ is a linear function.", False, pack("C", False, [
                    "The first differences $p(x+1)-p(x)$ are $-1+2=1$, then $2-1=1$, then $7-2=5$, which are not constant.",
                    close(False, "A line would have a constant first difference"),
                ])),
                C("The first differences of $p$ are constant.", False, pack("D", False, [
                    "They run $1,1,5$.",
                    close(False, "The last step is already larger"),
                ])),
                C("$p(1)=p(-1)$.", True, pack("E", True, [
                    "Both columns list $2$.",
                    close(True, "The two values agree"),
                ])),
            ],
        ),
        S(
            title="Constant Term Versus Leading Term",
            context=r"Let $p(x)=5-3x^{2}+x^{4}$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            overview="Rewrite in descending powers: $p(x)=x^{4}-3x^{2}+5$.",
            claims=[
                C("The highest power of $x$ in $p$ is $x^{4}$.", True, pack("A", True, [
                    D(r"p(x)=x^{4}-3x^{2}+5"),
                    close(True, "The highest power is $x^{4}$"),
                ])),
                C("The leading coefficient of $p$ is $5$.", False, pack("B", False, [
                    "The $5$ is the constant term, not the coefficient of $x^{4}$.",
                    close(False, "The leading coefficient is $1$"),
                ])),
                C("$p(0)=5$.", True, pack("C", True, [
                    D(r"p(0)=5"),
                    close(True, "The constant term is $5$"),
                ])),
                C("$p$ is even.", True, pack("D", True, [
                    "Only even powers appear, so $p(-x)=p(x)$.",
                    close(True, "$p$ is even"),
                ])),
                C("$p$ has an $x^{3}$ term.", False, pack("E", False, [
                    "No odd power is written.",
                    close(False, "There is no $x^{3}$ term"),
                ])),
            ],
        ),
        S(
            title="A Horizontal Line Against a Cubic",
            context=r"Let $p(x)=x^{3}-x$ and let $c$ be the constant function $c(x)=0$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=1, stem_kind="formula",
            figure=svg_polynomial([1, 0, -1, 0], xmin=-2, xmax=2, title="y = x³ − x", marks=[(-1, ""), (0, ""), (1, "")]),
            overview="The zeros of $p$ are the meetings with the $x$-axis.",
            claims=[
                C("The graphs of $p$ and $c$ meet at three points.", True, pack("A", True, [
                    D(r"x^{3}-x=x(x-1)(x+1)=0"),
                    close(True, "Three distinct real roots give three meetings"),
                ])),
                C("$p$ is odd.", True, pack("B", True, [
                    D(r"p(-x)=-x^{3}+x=-p(x)"),
                    close(True, "$p$ is odd"),
                ])),
                C("The leading coefficient of $p$ is $-1$.", False, pack("C", False, [
                    D(r"p(x)=x^{3}-x"),
                    close(False, "The leading coefficient is $1$"),
                ])),
                C("$p(1)=0$.", True, pack("D", True, [
                    D(r"p(1)=1-1=0"),
                    close(True, "$1$ is a root"),
                ])),
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", False, pack("E", False, [
                    "The leading coefficient is positive, so $p$ rises on the right.",
                    close(False, "$p(x)\\to +\\infty$ as $x\\to +\\infty$"),
                ])),
            ],
        ),
    ]


def d2() -> list[Spec]:
    return [
        S(
            title="Product of a Line and a Cubic",
            context=r"Let $f(x)=x-2$ and $p(x)=x^{3}+1$. Write $h=f\cdot p$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            overview="The product of a non-constant line and a cubic has highest power $x^{4}$.",
            claims=[
                C("The highest power of $x$ in $h$ is $x^{4}$.", True, pack("A", True, [
                    "The $x$ from the line times $x^{3}$ produces $x^{4}$.",
                    D(r"h(x)=(x-2)(x^{3}+1)=x^{4}-2x^{3}+x-2"),
                    close(True, "The highest power is $x^{4}$"),
                ])),
                C("The leading coefficient of $h$ is $1$.", True, pack("B", True, [
                    D(r"x\cdot x^{3}=x^{4}"),
                    close(True, "The leading coefficient is $1$"),
                ])),
                C("$h(2)=0$.", True, pack("C", True, [
                    "The factor $x-2$ vanishes at $2$.",
                    close(True, "$2$ is a root of the product"),
                ])),
                C("$h(-1)=0$.", True, pack("D", True, [
                    D(r"p(-1)=-1+1=0"),
                    close(True, "The cubic factor already vanishes, so the product does too"),
                ])),
                C("$h$ is a cubic function.", False, pack("E", False, [
                    "The highest power is $x^{4}$.",
                    close(False, "$h$ is quartic"),
                ])),
            ],
        ),
        S(
            title="First Differences Hint at the Degree",
            context="A polynomial $p$ is sampled at equally spaced points.",
            difficulty=2, stem_kind="table",
            tables_markdown="| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |\n| --- | --- | --- | --- | --- | --- |\n| $p(x)$ | $1$ | $2$ | $9$ | $28$ | $65$ |",
            overview="The values match $p(x)=x^{3}+1$. Third differences of a cubic are constant.",
            claims=[
                C("The first differences are $1,7,19,37$.", True, pack("A", True, [
                    D(r"2-1=1,\ 9-2=7,\ 28-9=19,\ 65-28=37"),
                    close(True, "Those are the successive steps"),
                ])),
                C("The second differences are constant.", False, pack("B", False, [
                    D(r"7-1=6,\ 19-7=12,\ 37-19=18"),
                    close(False, "The second differences still grow"),
                ])),
                C("The third differences are constant and equal to $6$.", True, pack("C", True, [
                    D(r"12-6=6,\ 18-12=6"),
                    close(True, "A constant third difference is the signature of a cubic"),
                ])),
                C("$p$ could be a quadratic function.", False, pack("D", False, [
                    "A quadratic has constant second differences. Here they are $6,12,18$.",
                    close(False, "The table is not quadratic"),
                ])),
                C("$p(0)=1$.", True, pack("E", True, [
                    "Read the first column.",
                    close(True, "The table lists $1$"),
                ])),
            ],
        ),
        S(
            title="Warehouse Cost as a Cubic",
            context=(
                r"Weekly handling cost, in hundreds of euros, is modelled by "
                r"$C(q)=q^{3}-6q^{2}+20q$ for output $q\ge 0$ (in tonnes). "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=2, stem_kind="applied",
            overview="Evaluate the cubic cost and factor $C(q)=q(q^{2}-6q+20)$ to see there is no other positive root.",
            claims=[
                C("$C(0)=0$.", True, pack("A", True, [
                    D(r"C(0)=0"),
                    close(True, "Zero output carries zero modelled cost"),
                ])),
                C("$C(2)=24$.", True, pack("B", True, [
                    D(r"C(2)=8-24+40=24"),
                    close(True, "The cost is $24$ hundred euros"),
                ])),
                C("$C(6)=C(0)$.", False, pack("C", False, [
                    D(r"C(6)=216-216+120=120"),
                    close(False, "The two values are $120$ and $0$"),
                ])),
                C("The highest power of $q$ in $C$ is $q^{3}$.", True, pack("D", True, [
                    D(r"C(q)=q^{3}-6q^{2}+20q"),
                    close(True, "The model is cubic"),
                ])),
                C("$C$ has a positive real root besides $q=0$.", False, pack("E", False, [
                    D(r"q^{2}-6q+20=0\qquad \Delta=36-80<0"),
                    close(False, "The quadratic factor has no real roots"),
                ])),
            ],
        ),
        S(
            title="Turning-Point Budget of a Cubic",
            context=r"Let $p(x)=x^{3}-3x^{2}+2$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            figure=svg_polynomial([1, -3, 0, 2], xmin=-1, xmax=3.5, title="y = x³ − 3x² + 2", marks=[(0, "p(0)"), (2, "")]),
            overview="A cubic has at most two turning points, located where $p'(x)=0$.",
            claims=[
                C("$p$ can have at most two turning points.", True, pack("A", True, [
                    "The derivative of a cubic is a quadratic, and a quadratic equation has at most two real roots.",
                    D(r"p'(x)=3x^{2}-6x"),
                    close(True, "At most two stationary points are possible"),
                ])),
                C("The stationary points lie at $x=0$ and $x=2$.", True, pack("B", True, [
                    D(r"p'(x)=3x(x-2)=0"),
                    close(True, "Those are the two roots of $p'$"),
                ])),
                C("$p(0)=2$.", True, pack("C", True, [
                    D(r"p(0)=2"),
                    close(True, "The $y$-intercept is $2$"),
                ])),
                C("$p(2)=2$.", False, pack("D", False, [
                    D(r"p(2)=8-12+2=-2"),
                    close(False, "The value is $-2$, not $2$"),
                ])),
                C("As $x\\to +\\infty$, $p(x)\\to +\\infty$.", True, pack("E", True, [
                    "The leading coefficient is $+1$.",
                    close(True, "The graph rises on the right"),
                ])),
            ],
        ),
        S(
            title="Factor Theorem at a Named Point",
            context=r"Let $p(x)=x^{3}-4x^{2}+x+6$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            overview="If $p(a)=0$ then $x-a$ is a factor. Here $p(2)=0$ and $p(-1)=0$.",
            claims=[
                C("$x-2$ is a factor of $p$.", True, pack("A", True, [
                    D(r"p(2)=8-16+2+6=0"),
                    close(True, "A root at $2$ gives the factor $x-2$"),
                ])),
                C("$x+1$ is a factor of $p$.", True, pack("B", True, [
                    D(r"p(-1)=-1-4-1+6=0"),
                    close(True, "A root at $-1$ gives the factor $x+1$"),
                ])),
                C("$p(1)=4$.", True, pack("C", True, [
                    D(r"p(1)=1-4+1+6=4"),
                    close(True, "The value is $4$"),
                ])),
                C("$x-3$ is a factor of $p$.", True, pack("D", True, [
                    D(r"p(3)=27-36+3+6=0"),
                    close(True, "$3$ is also a root"),
                ])),
                C("$p$ has no real roots.", False, pack("E", False, [
                    "Already $p(2)=p(-1)=p(3)=0$.",
                    close(False, "There are three real roots"),
                ])),
            ],
        ),
        S(
            title="Shift of a Cubic",
            context=r"Let $p(x)=x^{3}$ and $q(x)=p(x-1)=(x-1)^{3}$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            overview="Replacing $x$ by $x-1$ slides the graph one unit to the right and does not change the highest power.",
            claims=[
                C("The highest power of $x$ in $q$ is still $x^{3}$.", True, pack("A", True, [
                    D(r"q(x)=x^{3}-3x^{2}+3x-1"),
                    close(True, "The shift never lowers the highest power"),
                ])),
                C("$q(1)=0$.", True, pack("B", True, [
                    D(r"q(1)=(1-1)^{3}=0"),
                    close(True, "The root moves from $0$ to $1$"),
                ])),
                C("$q(0)=-1$.", True, pack("C", True, [
                    D(r"q(0)=(-1)^{3}=-1"),
                    close(True, "The $y$-intercept is $-1$"),
                ])),
                C("The graphs of $p$ and $q$ are the same curve.", False, pack("D", False, [
                    "$p(0)=0$ while $q(0)=-1$.",
                    close(False, "A horizontal shift produces a different graph"),
                ])),
                C("The leading coefficient of $q$ is $1$.", True, pack("E", True, [
                    D(r"(x-1)^{3}=x^{3}+\cdots"),
                    close(True, "The leading coefficient stays $1$"),
                ])),
            ],
        ),
        S(
            title="Cooling Chamber: Cubic Temperature",
            context=(
                r"The temperature in $^{\circ}\mathrm{C}$ of a cooling chamber follows "
                r"$T(t)=-0.01t^{3}+0.3t^{2}-t+8$ for $0\le t\le 20$ minutes. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=2, stem_kind="applied",
            overview="Evaluate $T$ at the named times; the leading coefficient is negative.",
            claims=[
                C("$T(0)=8$.", True, pack("A", True, [
                    D(r"T(0)=8"),
                    close(True, "The chamber starts at $8^{\\circ}\\mathrm{C}$"),
                ])),
                C("$T(10)=18$.", True, pack("B", True, [
                    D(r"T(10)=-10+30-10+8=18"),
                    close(True, "The temperature is $18^{\\circ}\\mathrm{C}$"),
                ])),
                C("The highest power of $t$ in $T$ is $t^{2}$.", False, pack("C", False, [
                    "The written formula contains $-0.01t^{3}$.",
                    close(False, "The model is cubic"),
                ])),
                C("As $t$ becomes large, $T(t)$ eventually decreases without bound.", True, pack("D", True, [
                    "The leading coefficient $-0.01$ is negative, so $-0.01t^{3}\\to -\\infty$.",
                    close(True, "A downward cubic cannot stay high forever"),
                ])),
                C("$T(20)=8$.", False, pack("E", False, [
                    D(r"T(20)=-80+120-20+8=28"),
                    close(False, "The value is $28$, not $8$"),
                ])),
            ],
        ),
        S(
            title="Meetings of a Cubic and a Line",
            context=r"Let $p(x)=x^{3}-x$ and $\ell(x)=x$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            overview=r"Meetings solve $p-\ell=0$. Here $p-\ell=x^{3}-2x=x(x^{2}-2)$.",
            claims=[
                C("The graphs meet at three real points.", True, pack("A", True, [
                    D(r"x^{3}-x-x=x^{3}-2x=x(x^{2}-2)=0"),
                    D(r"x=0,\ \pm\sqrt{2}"),
                    close(True, "Three distinct real solutions"),
                ])),
                C("One meeting is at the origin.", True, pack("B", True, [
                    D(r"p(0)=\ell(0)=0"),
                    close(True, "Both graphs pass through $(0,0)$"),
                ])),
                C("A cubic and a line can never meet more than twice.", False, pack("C", False, [
                    "The difference $p-\\ell$ can still have highest power $x^{3}$, so up to three real roots.",
                    close(False, "Three meetings are possible and occur here"),
                ])),
                C("$p(1)=\\ell(1)$.", False, pack("D", False, [
                    D(r"p(1)=0\qquad \ell(1)=1"),
                    close(False, "The heights $0$ and $1$ differ"),
                ])),
                C("The difference $p-\\ell$ has highest power $x^{3}$.", True, pack("E", True, [
                    D(r"p(x)-\ell(x)=x^{3}-2x"),
                    close(True, "The $x^{3}$ term survives"),
                ])),
            ],
        ),
        S(
            title="Revenue Cubic and a Break-Even Read",
            context=(
                r"A one-day stall models revenue by $R(n)=-\frac{1}{10}n^{3}+3n^{2}+20n$ "
                r"in euros, where $n$ is the number of items sold, $0\le n\le 25$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=2, stem_kind="applied",
            overview="Evaluate $R$ at the named integers; the leading coefficient is negative.",
            claims=[
                C("$R(0)=0$.", True, pack("A", True, [
                    D(r"R(0)=0"),
                    close(True, "No sales, no revenue"),
                ])),
                C("$R(10)=400$.", True, pack("B", True, [
                    D(r"R(10)=-100+300+200=400"),
                    close(True, "The revenue is $400$ euros"),
                ])),
                C("The leading coefficient of $R$ is positive.", False, pack("C", False, [
                    D(r"-\frac{1}{10}<0"),
                    close(False, "The cubic term opens downwards"),
                ])),
                C("$R(5)=R(0)+R(5)$ forces $R(5)=0$.", False, pack("D", False, [
                    "That identity would require $R(5)=R(5)+R(5)$, hence $R(5)=0$, but",
                    D(r"R(5)=-\frac{125}{10}+75+100=162.5"),
                    close(False, "The claimed implication is false because $R(5)\\neq 0$"),
                ])),
                C("The highest power of $n$ in $R$ is $n^{3}$.", True, pack("E", True, [
                    close(True, "The model is written as a cubic"),
                ])),
            ],
        ),
        S(
            title="Even Quartic from a Square",
            context=r"Let $p(x)=(x^{2}-3)^{2}-1$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=2, stem_kind="formula",
            figure=svg_polynomial([1, 0, -6, 0, 8], xmin=-3.2, xmax=3.2, title="y = (x² − 3)² − 1"),
            overview="Expanding gives $p(x)=x^{4}-6x^{2}+8$. Only even powers appear.",
            claims=[
                C("$p(x)=x^{4}-6x^{2}+8$.", True, pack("A", True, [
                    D(r"(x^{2}-3)^{2}-1=x^{4}-6x^{2}+9-1=x^{4}-6x^{2}+8"),
                    close(True, "The expanded form matches"),
                ])),
                C("$p$ is even.", True, pack("B", True, [
                    "Only even powers appear.",
                    close(True, "$p(-x)=p(x)$"),
                ])),
                C("The highest power of $x$ in $p$ is $x^{2}$.", False, pack("C", False, [
                    "Squaring $x^{2}$ produces $x^{4}$.",
                    close(False, "The highest power is $x^{4}$"),
                ])),
                C("$p(\\sqrt{3})=-1$.", True, pack("D", True, [
                    D(r"p(\sqrt{3})=(3-3)^{2}-1=-1"),
                    close(True, "The inner square vanishes"),
                ])),
                C("$p$ has no real roots.", False, pack("E", False, [
                    D(r"x^{4}-6x^{2}+8=(x^{2}-2)(x^{2}-4)"),
                    close(False, "The roots $\\pm\\sqrt{2}$ and $\\pm 2$ are real"),
                ])),
            ],
        ),
    ]


def d3_rest() -> list[Spec]:
    truck_table = (
        "| Time $t$ in seconds | $0$ | $8$ | $16$ | $24$ | $32$ | $40$ |\n"
        "| --- | --- | --- | --- | --- | --- | --- |\n"
        "| Distance in metres | $0$ | $48$ | $128$ | $240$ | $352$ | $440$ |"
    )
    return [
        S(
            title="Delivery Van: Cubic Speed Against a Short Table",
            context=(
                "A delivery van leaves the depot with modelled speed "
                + D(r"v(t)=0.0004t^{3}-0.036t^{2}+0.9t")
                + " in m/s. A second van is timed from the depot; its distances "
                "are in the table. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="applied",
            tables_markdown=truck_table,
            overview="Differentiate $v$ for acceleration. Interval speeds of the table are $\\Delta s/8$.",
            claims=[
                C("The first van is decelerating at $t=40$.", True, pack("A", True, [
                    D(r"a(t)=v'(t)=0.0012t^{2}-0.072t+0.9"),
                    D(r"a(40)=0.0012\cdot 1600-0.072\cdot 40+0.9=-0.06"),
                    close(True, "Negative acceleration means deceleration"),
                ])),
                C("The average speed of the second van over the $40$ s is $11$ m/s.", True, pack("B", True, [
                    D(r"\frac{440}{40}=11"),
                    close(True, "The whole-run average is $11$ m/s"),
                ])),
                C("That whole-run average exceeds $45$ km/h.", False, pack("C", False, [
                    D(r"11\cdot 3.6=39.6\ \mathrm{km/h}"),
                    close(False, "$39.6$ is less than $45$"),
                ])),
                C("The highest interval speed of the second van is on $[0,8]$.", False, pack("D", False, [
                    D(r"\frac{48}{8}=6,\quad \frac{80}{8}=10,\quad \frac{112}{8}=14,\quad \frac{112}{8}=14,\quad \frac{88}{8}=11"),
                    close(False, "The peak interval speed is $14$ m/s, later than the first block"),
                ])),
                C("The speed $v$ of the first van is a cubic polynomial in $t$.", True, pack("E", True, [
                    close(True, "The written formula has highest power $t^{3}$"),
                ])),
            ],
        ),
        S(
            title="Graph of a Cubic with Two Turns",
            context=(
                "The figure shows the graph of a cubic $p$ with leading coefficient $1$. "
                "The curve crosses the $x$-axis at $-1$, $1$ and $2$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="graph",
            figure=svg_polynomial(
                [1, -2, -1, 2], xmin=-1.8, xmax=2.8, title="A monic cubic with roots −1, 1, 2",
                marks=[(-1, "−1"), (1, "1"), (2, "2")],
            ),
            overview=r"$p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2$.",
            claims=[
                C("$p(x)=(x+1)(x-1)(x-2)$.", True, pack("A", True, [
                    "A monic cubic is determined by its three roots as that product of factors.",
                    close(True, "Those are the three crossings"),
                ])),
                C("$p(0)=2$.", True, pack("B", True, [
                    D(r"p(0)=(1)(-1)(-2)=2"),
                    close(True, "The $y$-intercept is $2$"),
                ])),
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", False, pack("C", False, [
                    "The leading coefficient is $+1$.",
                    close(False, "The graph rises on the right"),
                ])),
                C("$p$ has a stationary point between $1$ and $2$.", True, pack("D", True, [
                    "Between two consecutive roots a continuous cubic that rises from the axis and returns to it must turn once.",
                    D(r"p'(x)=3x^{2}-4x-1"),
                    "One root of $p'$ lies in $(1,2)$ because $p'(1)=-2<0$ and $p'(2)=3>0$.",
                    close(True, "A turning point sits in that interval"),
                ])),
                C("$x=0$ is a root of $p$.", False, pack("E", False, [
                    D(r"p(0)=2\neq 0"),
                    close(False, "The graph misses the origin"),
                ])),
            ],
        ),
        S(
            title="Production: Cubic Cost and a Piece Table",
            context=(
                r"Unit cost in euros is modelled by $C(q)=0.02q^{3}-0.6q^{2}+8q+20$ "
                r"for daily output $q$ in dozens. A second workshop records total cost "
                "in the table. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="applied",
            tables_markdown="| Dozens $q$ | $0$ | $5$ | $10$ | $15$ | $20$ |\n| --- | --- | --- | --- | --- | --- |\n| Total cost (€) | $20$ | $70$ | $140$ | $230$ | $340$ |",
            overview="Evaluate the cubic; interval average costs are $\\Delta C/\\Delta q$.",
            claims=[
                C("$C(0)=20$.", True, pack("A", True, [
                    D(r"C(0)=20"),
                    close(True, "The fixed cost is $20$ euros"),
                ])),
                C("$C(10)=40$.", False, pack("B", False, [
                    D(r"C(10)=20-60+80+20=60"),
                    close(False, "The model gives $60$, not $40$"),
                ])),
                C("The second workshop's average cost per dozen from $0$ to $20$ is $16$ euros.", True, pack("C", True, [
                    D(r"\frac{340-20}{20}=16"),
                    close(True, "The whole-run average is $16$ €/dozen"),
                ])),
                C("The highest interval average cost of the table is on $[0,5]$.", False, pack("D", False, [
                    D(r"\frac{50}{5}=10,\ \frac{70}{5}=14,\ \frac{90}{5}=18,\ \frac{110}{5}=22"),
                    close(False, "The last block at $22$ is the largest"),
                ])),
                C("The highest power of $q$ in $C$ is $q^{3}$.", True, pack("E", True, [
                    close(True, "The written model is cubic"),
                ])),
            ],
        ),
        S(
            title="How Many Real Roots Can a Cubic Have?",
            context=(
                "Let $p$ be any cubic polynomial with real coefficients. "
                "No concrete coefficients are given. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="symbolic",
            overview="A cubic always has at least one real root; it cannot have four.",
            claims=[
                C("A real cubic always has at least one real root.", True, pack("A", True, [
                    "As $x\\to\\pm\\infty$ a cubic tends to opposite infinities, so the intermediate-value theorem forces a crossing of the $x$-axis.",
                    close(True, "At least one real root is guaranteed"),
                ])),
                C("A real cubic can have four distinct real roots.", False, pack("B", False, [
                    "A non-zero cubic equation has at most three roots, counting multiplicity.",
                    close(False, "Four distinct roots would force the cubic to be identically zero"),
                ])),
                C("If a cubic has three distinct real roots, it factors into three real linear factors.", True, pack("C", True, [
                    "Each real root supplies a linear factor, and a cubic is a product of three linear factors over $\\mathbb{C}$; here all three are real.",
                    close(True, "The factorisation is entirely real"),
                ])),
                C("Changing the constant term can change the number of real roots.", True, pack("D", True, [
                    "A vertical shift of $x^{3}-x$ turns three crossings into one.",
                    D(r"x^{3}-x+2=0\ \text{has only one real root}"),
                    close(True, "The constant term does affect the count"),
                ])),
                C("Every cubic is an odd function.", False, pack("E", False, [
                    "$x^{3}+1$ satisfies $p(-x)\\neq -p(x)$.",
                    close(False, "A non-zero constant term already destroys oddness"),
                ])),
            ],
        ),
        S(
            title="Leading Coefficient and the Far Right",
            context=(
                "Let $p(x)=a_n x^{n}+\\cdots+a_0$ with $n\\ge 1$ and $a_n\\neq 0$. "
                "No further numbers are given. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="symbolic",
            overview="End behaviour is read from $n$ and the sign of $a_n$ alone.",
            claims=[
                C("If $n$ is odd and $a_n>0$, then $p(x)\\to +\\infty$ as $x\\to +\\infty$.", True, pack("A", True, [
                    "The leading term dominates, and a positive times a large positive power stays positive.",
                    close(True, "The graph disappears upwards on the right"),
                ])),
                C("If $n$ is even and $a_n>0$, then $p(x)\\to -\\infty$ as $x\\to -\\infty$.", False, pack("B", False, [
                    "An even power is positive on both sides, so a positive leading coefficient sends both ends up.",
                    close(False, "Both ends tend to $+\\infty$"),
                ])),
                C("The value $p(0)$ equals the constant term $a_0$.", True, pack("C", True, [
                    D(r"p(0)=a_0"),
                    close(True, "Every other term contains $x$"),
                ])),
                C("The highest power of $x$ is $x^{n}$.", True, pack("D", True, [
                    close(True, "That is the definition of $n$"),
                ])),
                C("If $n$ is odd, then $p$ is necessarily an odd function.", False, pack("E", False, [
                    "$x^{3}+x^{2}$ has odd degree but is not odd as a function.",
                    close(False, "Odd degree is not the same as an odd function"),
                ])),
            ],
        ),
        S(
            title="Nested Polynomials Without Cancelling the Top Power",
            context=r"Let $p(x)=x^{2}+1$ and $q(x)=x^{3}-x$. Write $r=q\circ p$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=3, stem_kind="formula",
            overview=r"$r(x)=(x^{2}+1)^{3}-(x^{2}+1)$. The highest power is $x^{6}$.",
            claims=[
                C("The highest power of $x$ in $r$ is $x^{6}$.", True, pack("A", True, [
                    "Cubing $x^{2}$ produces $x^{6}$, and nothing cancels that term.",
                    D(r"(x^{2})^{3}=x^{6}"),
                    close(True, "The highest power is $x^{6}$"),
                ])),
                C("$r(0)=0$.", True, pack("B", True, [
                    D(r"p(0)=1\qquad q(1)=1-1=0"),
                    close(True, "The composition vanishes at $0$"),
                ])),
                C("$r$ is a cubic function.", False, pack("C", False, [
                    "The highest power is $x^{6}$.",
                    close(False, "$r$ is of degree $6$"),
                ])),
                C("The leading coefficient of $r$ is $1$.", True, pack("D", True, [
                    D(r"q(u)=u^{3}-u\implies r(x)=(x^{2})^{3}+\cdots=x^{6}+\cdots"),
                    close(True, "The leading coefficient stays $1$"),
                ])),
                C("$r(x)=q(x)\\cdot p(x)$.", False, pack("E", False, [
                    "Composition substitutes $p(x)$ into $q$; it is not the pointwise product.",
                    close(False, "The two constructions are different"),
                ])),
            ],
        ),
        S(
            title="Finite Differences of a Quartic Sample",
            context="A polynomial $p$ is sampled below. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=3, stem_kind="table",
            tables_markdown="| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n| --- | --- | --- | --- | --- | --- | --- |\n| $p(x)$ | $1$ | $2$ | $17$ | $82$ | $257$ | $626$ |",
            overview="The values match $p(x)=x^{4}+1$. Fourth differences of a quartic are constant.",
            claims=[
                C("$p(0)=1$.", True, pack("A", True, [
                    close(True, "The first column lists $1$"),
                ])),
                C("The first differences are constant.", False, pack("B", False, [
                    D(r"2-1=1,\ 17-2=15,\ 82-17=65"),
                    close(False, "The steps grow quickly"),
                ])),
                C("$p(2)=17$.", True, pack("C", True, [
                    close(True, "The table lists $17$"),
                ])),
                C("A linear model $mx+c$ can fit every listed point.", False, pack("D", False, [
                    "A line cannot reproduce first differences $1,15,65,\\ldots$.",
                    close(False, "The table is far from linear"),
                ])),
                C("The values are consistent with $p(x)=x^{4}+1$.", True, pack("E", True, [
                    D(r"2^{4}+1=17\qquad 3^{4}+1=82\qquad 4^{4}+1=257"),
                    close(True, "Each listed height matches $x^{4}+1$"),
                ])),
            ],
        ),
        S(
            title="Canal Lock: Height as a Cubic in Time",
            context=(
                r"The water height in metres is $h(t)=0.002t^{3}-0.09t^{2}+t$ "
                r"for $0\le t\le 30$ minutes after opening a valve. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="applied",
            overview="Evaluate $h$ and $h'=v$ at the named times.",
            claims=[
                C("$h(0)=0$.", True, pack("A", True, [
                    D(r"h(0)=0"),
                    close(True, "The lock starts at the reference height"),
                ])),
                C("$h(10)=3$.", True, pack("B", True, [
                    D(r"h(10)=2-9+10=3"),
                    close(True, "The height is $3$ m"),
                ])),
                C("The instantaneous rate $h'(10)$ is positive.", False, pack("C", False, [
                    D(r"h'(t)=0.006t^{2}-0.18t+1"),
                    D(r"h'(10)=0.6-1.8+1=-0.2"),
                    close(False, "The rate is negative at $t=10$"),
                ])),
                C("The highest power of $t$ in $h$ is $t^{3}$.", True, pack("D", True, [
                    close(True, "The model is cubic"),
                ])),
                C("$h(30)=h(0)$.", False, pack("E", False, [
                    D(r"h(30)=54-81+30=3"),
                    close(False, "The height is $3$ m, not $0$"),
                ])),
            ],
        ),
        S(
            title="Rebuild a Monic Cubic from Three Roots",
            context=(
                "A monic cubic $p$ has roots $-2$, $0$ and $4$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3, stem_kind="hybrid",
            overview=r"$p(x)=x(x+2)(x-4)=x^{3}-2x^{2}-8x$.",
            claims=[
                C("$p(x)=x^{3}-2x^{2}-8x$.", True, pack("A", True, [
                    D(r"x(x+2)(x-4)=x(x^{2}-2x-8)=x^{3}-2x^{2}-8x"),
                    close(True, "That is the unique monic cubic with those roots"),
                ])),
                C("$p(1)=-9$.", True, pack("B", True, [
                    D(r"p(1)=1-2-8=-9"),
                    close(True, "The value is $-9$"),
                ])),
                C("The constant term of $p$ is $0$.", True, pack("C", True, [
                    "One root is $0$, so $p(0)=0$.",
                    close(True, "The graph passes through the origin"),
                ])),
                C("The sum of the roots is $-2$.", False, pack("D", False, [
                    D(r"-2+0+4=2"),
                    close(False, "The sum is $2$, which also equals the middle-coefficient rule $2$"),
                ])),
                C("$p$ is even.", False, pack("E", False, [
                    "The expansion contains $x^{3}$ and $x$, which are odd powers.",
                    close(False, "$p$ is not even"),
                ])),
            ],
        ),
    ]


def d4() -> list[Spec]:
    return [
        S(
            title="Degree of a Sum, Symbolically",
            context=(
                "Let $p$ have highest power $x^{n}$ and $q$ have highest power $x^{m}$, "
                "with $n>m\\ge 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="symbolic",
            overview="When the highest powers differ, they cannot cancel in the sum.",
            claims=[
                C("The highest power of $x$ in $p+q$ is $x^{n}$.", True, pack("A", True, [
                    "The leading term of $p$ has nothing of the same power in $q$ to cancel it.",
                    close(True, "The sum keeps highest power $x^{n}$"),
                ])),
                C("The highest power of $x$ in $p-q$ is $x^{n}$.", True, pack("B", True, [
                    "Subtracting still leaves the leading term of $p$ untouched.",
                    close(True, "The difference keeps highest power $x^{n}$"),
                ])),
                C("The highest power of $x$ in $p\\cdot q$ is $x^{n+m}$.", True, pack("C", True, [
                    "Leading terms multiply and the exponents add.",
                    close(True, "The product has highest power $x^{n+m}$"),
                ])),
                C("The highest power of $x$ in $p+q$ is always $x^{n+m}$.", False, pack("D", False, [
                    "Adding never adds the exponents; that is the product rule.",
                    close(False, "The sum has highest power $x^{n}$, not $x^{n+m}$"),
                ])),
                C("If the two leading coefficients are opposite, the highest power of $p+q$ must drop below $n$.", False, pack("E", False, [
                    "The leading powers are different, so there is nothing of power $n$ in $q$ to cancel.",
                    close(False, "Cancellation of the top term requires equal highest powers"),
                ])),
            ],
        ),
        S(
            title="When Leading Terms Cancel",
            context=(
                "Let $p$ and $q$ both have highest power $x^{n}$ and leading coefficients "
                "$a$ and $b$, with $a+b=0$ and $a\\neq 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="symbolic",
            overview="Equal highest powers with opposite leading coefficients cancel in the sum.",
            claims=[
                C("The highest power of $x$ in $p+q$ is strictly less than $n$.", True, pack("A", True, [
                    "The two leading terms add to $(a+b)x^{n}=0$.",
                    close(True, "The top power disappears"),
                ])),
                C("The highest power of $x$ in $p-q$ is still $x^{n}$.", True, pack("B", True, [
                    D(r"a-b=a-(-a)=2a\neq 0"),
                    close(True, "The difference doubles the leading term instead of cancelling it"),
                ])),
                C("The highest power of $x$ in $p\\cdot q$ is $x^{2n}$.", True, pack("C", True, [
                    close(True, "Exponents add under multiplication"),
                ])),
                C("$p+q$ must be the zero polynomial.", False, pack("D", False, [
                    "Only the leading terms are forced to cancel; lower terms may survive.",
                    D(r"(x^{2}+1)+(-x^{2}+x)=x+1"),
                    close(False, "The sum can be a non-zero lower-power polynomial"),
                ])),
                C("The graphs of $p$ and $-q$ have the same end behaviour on the far right.", True, pack("E", True, [
                    "$-q$ has leading coefficient $-b=a$, the same as $p$, and the same highest power.",
                    close(True, "The two leading terms agree"),
                ])),
            ],
        ),
        S(
            title="Even and Odd Parts of a Polynomial",
            context=(
                "Let $p$ be any polynomial. Write $p_{\\mathrm{e}}(x)=\\frac{p(x)+p(-x)}{2}$ "
                r"and $p_{\mathrm{o}}(x)=\frac{p(x)-p(-x)}{2}$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="symbolic",
            overview="Every polynomial splits uniquely into an even part and an odd part.",
            claims=[
                C("$p_{\\mathrm{e}}$ is always an even function.", True, pack("A", True, [
                    D(r"p_{\mathrm{e}}(-x)=\frac{p(-x)+p(x)}{2}=p_{\mathrm{e}}(x)"),
                    close(True, "That is evenness"),
                ])),
                C("$p_{\\mathrm{o}}$ is always an odd function.", True, pack("B", True, [
                    D(r"p_{\mathrm{o}}(-x)=\frac{p(-x)-p(x)}{2}=-p_{\mathrm{o}}(x)"),
                    close(True, "That is oddness"),
                ])),
                C("$p=p_{\\mathrm{e}}+p_{\\mathrm{o}}$.", True, pack("C", True, [
                    "Adding the two displayed formulae recovers $p(x)$.",
                    close(True, "The split reconstructs $p$"),
                ])),
                C("If $p$ contains only even powers, then $p_{\\mathrm{o}}$ is the zero polynomial.", True, pack("D", True, [
                    "Then $p(-x)=p(x)$, so the numerator of $p_{\\mathrm{o}}$ vanishes.",
                    close(True, "The odd part is identically zero"),
                ])),
                C("$p_{\\mathrm{e}}$ is always a constant polynomial.", False, pack("E", False, [
                    "For $p(x)=x^{2}$ one has $p_{\\mathrm{e}}=p$, which is not constant.",
                    close(False, "The even part can have any even powers"),
                ])),
            ],
        ),
        S(
            title="Composition Multiplies the Highest Powers",
            context=(
                "Let $p$ have highest power $x^{n}$ and $q$ have highest power $x^{m}$, "
                "with $n,m\\ge 1$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="symbolic",
            overview="The highest power of $q\\circ p$ is $x^{nm}$, not $x^{n+m}$.",
            claims=[
                C("The highest power of $x$ in $q(p(x))$ is $x^{nm}$.", True, pack("A", True, [
                    "If $p$ behaves like $ax^{n}$ and $q$ like $b u^{m}$, then $q(p(x))$ behaves like $b a^{m} x^{nm}$.",
                    close(True, "The exponents multiply"),
                ])),
                C("The highest power of $x$ in $q(p(x))$ is $x^{n+m}$.", False, pack("B", False, [
                    "Adding the exponents is the product rule $p\\cdot q$, not composition.",
                    close(False, "Composition multiplies the highest powers"),
                ])),
                C("The highest power of $x$ in $p(q(x))$ is also $x^{nm}$.", True, pack("C", True, [
                    "The same count with the roles reversed still multiplies $n$ by $m$.",
                    close(True, "Both orders give highest power $x^{nm}$"),
                ])),
                C("$p\\circ q$ and $q\\circ p$ are always the same polynomial.", False, pack("D", False, [
                    r"$p(x)=x+1$, $q(x)=x^{2}$ give $x^{2}+1$ versus $(x+1)^{2}$.",
                    close(False, "Composition does not commute"),
                ])),
                C("If $p$ is non-constant, then $q\\circ p$ cannot be a non-zero constant.", True, pack("E", True, [
                    "A non-constant polynomial takes infinitely many values, and a non-constant $q$ cannot crush all of them to one number.",
                    close(True, "The composition stays non-constant"),
                ])),
            ],
        ),
        S(
            title="A Vertical Shift Cannot Create Extra Roots Beyond the Degree",
            context=(
                "Let $p$ be a polynomial of highest power $x^{n}$ with $n\\ge 1$, and let "
                r"$p_c(x)=p(x)+c$ for a real shift $c$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="symbolic",
            overview="A vertical shift never raises the highest power, so the root count stays at most $n$.",
            claims=[
                C("For every $c$, the highest power of $p_c$ is still $x^{n}$.", True, pack("A", True, [
                    "Adding a constant never touches the leading term.",
                    close(True, "The highest power is unchanged"),
                ])),
                C("Some choice of $c$ can give $p_c$ more than $n$ distinct real roots.", False, pack("B", False, [
                    "A non-zero polynomial of highest power $x^{n}$ has at most $n$ roots.",
                    close(False, "A shift cannot create an $(n+1)$-st root"),
                ])),
                C("There exists $c$ such that $p_c$ has at least one real root if $n$ is odd.", True, pack("C", True, [
                    "An odd-highest-power polynomial already tends to opposite infinities, so it already has a real root; the same holds after any shift.",
                    close(True, "Every odd-degree real polynomial crosses the axis"),
                ])),
                C("If $n$ is even and the leading coefficient is positive, some $c$ makes $p_c$ have no real roots.", True, pack("D", True, [
                    "Then $p$ is bounded below; choose $c$ larger than $-\\min p$.",
                    close(True, "A large upward shift lifts the whole graph above the axis"),
                ])),
                C("The derivative $p_c'$ depends on $c$.", False, pack("E", False, [
                    "A constant shift disappears upon differentiating.",
                    close(False, "$p_c'=p'$ for every $c$"),
                ])),
            ],
        ),
        S(
            title="Family $p_a(x)=x^{3}-3x+a$",
            context=(
                r"Let $p_a(x)=x^{3}-3x+a$ for a real parameter $a$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="parametric",
            figure=svg_polynomial([1, 0, -3, 0], xmin=-2.4, xmax=2.4, title="y = x³ − 3x  (a = 0)"),
            overview=r"$p_a'=3x^{2}-3$, critical values $p_a(-1)=a+2$ and $p_a(1)=a-2$.",
            claims=[
                C("The stationary points of $p_a$ do not depend on $a$.", True, pack("A", True, [
                    D(r"p_a'(x)=3x^{2}-3=3(x-1)(x+1)"),
                    close(True, "The shift $a$ never enters $p_a'$"),
                ])),
                C("For $a=0$ there are three distinct real roots.", True, pack("B", True, [
                    D(r"x^{3}-3x=x(x-\sqrt{3})(x+\sqrt{3})"),
                    close(True, "Three distinct real roots"),
                ])),
                C("For every $a$ there are three distinct real roots.", False, pack("C", False, [
                    "When $|a|>2$ the horizontal axis misses the local max/min, leaving only one real root.",
                    D(r"p_3(x)=x^{3}-3x+3=0\ \text{has one real root}"),
                    close(False, "A large shift kills two of the crossings"),
                ])),
                C("There is a unique $a$ for which $x=1$ is a double root.", True, pack("D", True, [
                    "Need $p_a(1)=0$ and $p_a'(1)=0$. The derivative already vanishes at $1$, so",
                    D(r"p_a(1)=a-2=0\implies a=2"),
                    close(True, "That single parameter makes the local minimum sit on the axis"),
                ])),
                C("The leading coefficient of $p_a$ depends on $a$.", False, pack("E", False, [
                    close(False, "The leading term is $x^{3}$ for every $a$"),
                ])),
            ],
        ),
        S(
            title="Bicycle Speed: Another Cubic and a Table",
            context=(
                "A rider's speed in m/s is "
                + D(r"v(t)=0.00001t^{3}-0.003t^{2}+0.24t")
                + " A second rider's distances from the start are tabulated. "
                "The second rider finishes $90$ s after the start at $900$ m. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="applied",
            tables_markdown=(
                "| Time $t$ in seconds | $0$ | $15$ | $30$ | $45$ | $60$ | $75$ | $90$ |\n"
                "| --- | --- | --- | --- | --- | --- | --- | --- |\n"
                "| Distance in metres | $0$ | $90$ | $210$ | $360$ | $540$ | $750$ | $900$ |"
            ),
            overview="Differentiate $v$; convert the second rider's $900/90$ into km/h.",
            claims=[
                C("The first rider is decelerating at $t=60$.", True, pack("A", True, [
                    D(r"a(t)=0.00003t^{2}-0.006t+0.24"),
                    D(r"a(60)=0.108-0.36+0.24=-0.012"),
                    close(True, "The acceleration is negative"),
                ])),
                C("The second rider's average speed is $36$ km/h.", True, pack("B", True, [
                    D(r"\frac{900}{90}=10\ \mathrm{m/s}=36\ \mathrm{km/h}"),
                    close(True, "The conversion factor $3.6$ turns $10$ into $36$"),
                ])),
                C("The highest interval speed of the second rider is on $[0,15]$.", False, pack("C", False, [
                    D(r"6,\ 8,\ 10,\ 12,\ 14,\ 10\ \mathrm{m/s}"),
                    close(False, "The peak is $14$ m/s on $[60,75]$"),
                ])),
                C("The first rider's acceleration $a(t)$ is a quadratic polynomial.", True, pack("D", True, [
                    close(True, "The derivative of a cubic is quadratic"),
                ])),
                C("The second rider's interval speeds have only one local maximum.", True, pack("E", True, [
                    "The sequence $6,8,10,12,14,10$ rises then falls once.",
                    close(True, "A single peak occurs at $14$"),
                ])),
            ],
        ),
        S(
            title="Graph: Which Cubic Matches the Turns?",
            context=(
                "The figure shows a cubic that turns at $x=-1$ and $x=1$, with "
                "$p(-1)=-2$ and $p(1)=2$. The leading coefficient is $-1$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="graph",
            figure=svg_polynomial([-1, 0, 3, 0], xmin=-2.2, xmax=2.2, title="y = −x³ + 3x", marks=[(-1, "min"), (1, "max")]),
            overview=r"$p(x)=-x^{3}+3x$. Then $p'= -3x^{2}+3$, so turns at $\pm 1$.",
            claims=[
                C("$p(x)=-x^{3}+3x$.", True, pack("A", True, [
                    "A cubic with leading coefficient $-1$ and stationary points at $\\pm 1$ has derivative $-3x^{2}+3$, which integrates to $-x^{3}+3x$ up to a constant; the figure crosses the origin, so the constant is $0$.",
                    D(r"p'(x)=-3x^{2}+3= -3(x-1)(x+1)"),
                    close(True, "That is the unique such cubic through the origin"),
                ])),
                C("$p$ is an odd function.", True, pack("B", True, [
                    D(r"p(-x)=x^{3}-3x=-p(x)"),
                    close(True, "Only odd powers appear"),
                ])),
                C("The local maximum value is $2$.", True, pack("C", True, [
                    "The derivative $p'=-3x^{2}+3$ is positive on $(-1,1)$ and negative on $(1,\\infty)$, so the local maximum is at $x=1$.",
                    D(r"p(1)=-1+3=2"),
                    close(True, "The local maximum value is $2$"),
                ])),
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", True, pack("D", True, [
                    "The leading coefficient is $-1$.",
                    close(True, "The graph falls on the right"),
                ])),
                C("$p(0)=3$.", False, pack("E", False, [
                    D(r"p(0)=0"),
                    close(False, "The graph crosses the origin"),
                ])),
            ],
        ),
        S(
            title="Quartic End Behaviour Against a Cubic",
            context=r"Let $p(x)=x^{4}-4x^{2}$ and $q(x)=-x^{3}+x$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=4, stem_kind="formula",
            figure=svg_polynomial([1, 0, -4, 0, 0], xmin=-2.6, xmax=2.6, title="y = x⁴ − 4x²"),
            overview="Even highest power with positive leading coefficient lifts both ends of $p$.",
            claims=[
                C("As $x\\to\\pm\\infty$, $p(x)\\to +\\infty$.", True, pack("A", True, [
                    "Highest power $x^{4}$ is even and the leading coefficient is $+1$.",
                    close(True, "Both ends of $p$ rise"),
                ])),
                C("As $x\\to +\\infty$, $q(x)\\to +\\infty$.", False, pack("B", False, [
                    "The leading term of $q$ is $-x^{3}$.",
                    close(False, "$q$ falls on the right"),
                ])),
                C("$p$ is even.", True, pack("C", True, [
                    D(r"p(-x)=x^{4}-4x^{2}=p(x)"),
                    close(True, "Only even powers appear"),
                ])),
                C("The roots of $p$ are $0$, $2$ and $-2$.", True, pack("D", True, [
                    D(r"p(x)=x^{2}(x^{2}-4)=x^{2}(x-2)(x+2)"),
                    close(True, "Those are the real roots, with $0$ repeated"),
                ])),
                C("$p$ and $q$ have the same highest power of $x$.", False, pack("E", False, [
                    close(False, "$p$ has highest power $x^{4}$ while $q$ has $x^{3}$"),
                ])),
            ],
        ),
        S(
            title="Parameter Window for Three Real Roots",
            context=(
                r"Let $g_k(x)=x^{3}-kx$ with real $k$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=4, stem_kind="parametric",
            overview=r"$g_k(x)=x(x^{2}-k)$. Three distinct real roots precisely when $k>0$.",
            claims=[
                C("If $k>0$, then $g_k$ has three distinct real roots.", True, pack("A", True, [
                    D(r"x=0,\ \pm\sqrt{k}"),
                    close(True, "Those three numbers are distinct when $k>0$"),
                ])),
                C("If $k=0$, then $g_k$ has three distinct real roots.", False, pack("B", False, [
                    D(r"g_0(x)=x^{3}"),
                    close(False, "The only root is $0$, with multiplicity three"),
                ])),
                C("If $k<0$, then $g_k$ has only one real root.", True, pack("C", True, [
                    "$x^{2}-k>0$ for every real $x$, so the only real solution of $x(x^{2}-k)=0$ is $x=0$.",
                    close(True, "A negative $k$ leaves a single real root"),
                ])),
                C("The leading coefficient of $g_k$ depends on $k$.", False, pack("D", False, [
                    close(False, "The leading term is $x^{3}$ for every $k$"),
                ])),
                C("$g_k$ is an odd function for every $k$.", True, pack("E", True, [
                    D(r"g_k(-x)=-x^{3}+kx=-g_k(x)"),
                    close(True, "Only odd powers appear"),
                ])),
            ],
        ),
    ]


def d5() -> list[Spec]:
    return [
        S(
            title="How Many Times Can Two Polynomials Meet?",
            context=(
                "Let $p$ have highest power $x^{n}$ and $q$ have highest power $x^{m}$, "
                "with $n>m\\ge 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="symbolic",
            overview="Meetings are roots of $p-q$, whose highest power is $x^{n}$.",
            claims=[
                C("The graphs of $p$ and $q$ meet in at most $n$ points, unless $p=q$.", True, pack("A", True, [
                    "The difference $p-q$ has highest power $x^{n}$, so at most $n$ roots unless it is identically zero.",
                    close(True, "That is the bound on meetings"),
                ])),
                C("The graphs of $p$ and $q$ can meet in $n+1$ distinct points without $p$ coinciding with $q$.", False, pack("B", False, [
                    "Then $p-q$ would have $n+1$ roots and highest power $x^{n}$, forcing $p-q\\equiv 0$.",
                    close(False, "An extra meeting collapses the two polynomials"),
                ])),
                C("If $p-q$ has highest power $x^{n}$, the graphs cannot be the same.", True, pack("C", True, [
                    "The zero polynomial has no highest power in the usual sense; a surviving $x^{n}$ term means $p\\neq q$.",
                    close(True, "A non-zero difference forbids identical graphs"),
                ])),
                C("Translating $q$ vertically can create more than $n$ meetings with $p$.", False, pack("D", False, [
                    "A vertical shift of $q$ still leaves $p-q$ of highest power $x^{n}$.",
                    close(False, "The degree bound is unchanged"),
                ])),
                C("If $m=n$ and the leading coefficients differ, the meeting bound is still $n$.", True, pack("E", True, [
                    "Then $p-q$ still has highest power $x^{n}$.",
                    close(True, "The bound remains $n$"),
                ])),
            ],
        ),
        S(
            title="Multiple Roots and the Derivative",
            context=(
                "Let $p$ be a non-constant polynomial and let $a$ be a real number. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="symbolic",
            overview="A multiple root of $p$ is a common root of $p$ and $p'$.",
            claims=[
                C("If $x-a$ is a repeated factor of $p$, then $p(a)=0$ and $p'(a)=0$.", True, pack("A", True, [
                    "Write $p(x)=(x-a)^{2} q(x)$. Differentiating gives $p'(x)=2(x-a)q(x)+(x-a)^{2}q'(x)$, so $p'(a)=0$.",
                    close(True, "A repeated root is a stationary root"),
                ])),
                C("If $p(a)=0$ and $p'(a)=0$, then $x-a$ is a repeated factor of $p$.", True, pack("B", True, [
                    "Over the reals one may write $p(x)=(x-a)r(x)$. Then $p'(a)=r(a)$, so $r(a)=0$ and $x-a$ divides $r$ as well.",
                    close(True, "The two conditions force multiplicity at least two"),
                ])),
                C("Every root of $p'$ is a root of $p$.", False, pack("C", False, [
                    "For $p(x)=x^{2}+1$ one has $p'(x)=2x$, so $x=0$ is stationary but $p(0)=1\\neq 0$.",
                    close(False, "A turning point need not sit on the $x$-axis"),
                ])),
                C("A cubic can have a repeated root and a third distinct simple root.", True, pack("D", True, [
                    D(r"(x-1)^{2}(x-2)=x^{3}-4x^{2}+5x-2"),
                    close(True, "That cubic has roots $1$ (double) and $2$ (simple)"),
                ])),
                C("If $p'$ is identically zero, then $p$ is a non-constant polynomial.", False, pack("E", False, [
                    "A vanishing derivative means $p$ is constant.",
                    close(False, "The only polynomials with $p'\\equiv 0$ are the constants"),
                ])),
            ],
        ),
        S(
            title="Bounds on Turning Points",
            context=(
                "Let $p$ have highest power $x^{n}$ with $n\\ge 2$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="symbolic",
            overview="$p'$ has highest power $x^{n-1}$, so at most $n-1$ stationary points.",
            claims=[
                C("$p$ has at most $n-1$ stationary points, unless $p'$ is identically zero.", True, pack("A", True, [
                    "The equation $p'(x)=0$ has at most $n-1$ roots.",
                    close(True, "That is the turning-point budget"),
                ])),
                C("Every polynomial of highest power $x^{n}$ has exactly $n-1$ stationary points.", False, pack("B", False, [
                    "$x^{3}+x$ has $p'=3x^{2}+1>0$, so no real stationary point at all.",
                    close(False, "The bound $n-1$ need not be attained"),
                ])),
                C("A vertical stretch $kp$ with $k\\neq 0$ keeps the same stationary abscissas.", True, pack("C", True, [
                    D(r"(kp)'=k p'"),
                    close(True, "The zeros of the derivative are unchanged"),
                ])),
                C("A horizontal shift $p(x-h)$ can increase the number of stationary points.", False, pack("D", False, [
                    "A shift only slides the graph; it does not create new turns.",
                    close(False, "The count of stationary points is invariant under translation"),
                ])),
                C("If $n$ is even, $p'$ has odd highest power, so $p'$ has at least one real root.", True, pack("E", True, [
                    "An odd-highest-power real polynomial always crosses the axis, so $p'$ has a real root and $p$ has at least one stationary point.",
                    close(True, "Even-degree polynomials always turn at least once"),
                ])),
            ],
        ),
        S(
            title="Palindromic Coefficients",
            context=(
                r"Let $p(x)=a_n x^{n}+\cdots+a_0$ satisfy $a_k=a_{n-k}$ for every $k$, "
                "with $a_n\\neq 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="symbolic",
            overview=r"Such a $p$ satisfies $x^{n}p(1/x)=p(x)$ wherever $x\neq 0$.",
            claims=[
                C("If $r\\neq 0$ is a root of $p$, then $1/r$ is also a root.", True, pack("A", True, [
                    D(r"r^{n}p(1/r)=p(r)=0\implies p(1/r)=0"),
                    close(True, "Non-zero roots come in reciprocal pairs"),
                ])),
                C("$p(0)$ cannot be zero.", True, pack("B", True, [
                    "$p(0)=a_0=a_n\\neq 0$.",
                    close(True, "The constant term equals the leading coefficient"),
                ])),
                C("Every such $p$ is an even function.", False, pack("C", False, [
                    "$x^{2}+3x+1$ has palindromic coefficients but is not even.",
                    close(False, "Palindromic is not the same as even"),
                ])),
                C("The value $p(1)$ equals twice the sum of the first half of the coefficients when $n$ is odd.", False, pack("D", False, [
                    D(r"p(1)=a_n+\cdots+a_0"),
                    "That is the sum of all coefficients, not a forced doubling independent of the middle term.",
                    close(False, "The claimed doubling is not a general identity"),
                ])),
                C("$x^{2}+1$ is an example of such a polynomial.", True, pack("E", True, [
                    "The coefficients read $1,0,1$, which are palindromic.",
                    close(True, "That quadratic fits the pattern"),
                ])),
            ],
        ),
        S(
            title="Integer Coefficients and Integer Roots",
            context=(
                "Let $p$ be a monic polynomial with integer coefficients. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="symbolic",
            overview="Any integer root of a monic integer polynomial divides the constant term.",
            claims=[
                C("Every integer root of $p$ divides the constant term $p(0)$.", True, pack("A", True, [
                    "If $p(a)=0$ with $a\\in\\mathbb{Z}$, write $p(x)=(x-a)q(x)$ with $q$ also integer-coefficient, so $p(0)=-a\\,q(0)$.",
                    close(True, "The constant term is a multiple of the root"),
                ])),
                C("If $p(0)=6$, then the only possible integer roots are the divisors of $6$.", True, pack("B", True, [
                    close(True, "The candidate list is $\\pm 1,\\pm 2,\\pm 3,\\pm 6$"),
                ])),
                C("Every monic integer polynomial has at least one integer root.", False, pack("C", False, [
                    "$x^{2}+1$ is monic with integer coefficients and no real root at all.",
                    close(False, "Integer coefficients do not force an integer root"),
                ])),
                C("If $a$ is an integer root, then $x-a$ is a factor of $p$ in the integer-coefficient polynomials.", True, pack("D", True, [
                    "That is the factor theorem together with Gauss's lemma for monic polynomials.",
                    close(True, "The factor stays inside $\\mathbb{Z}[x]$"),
                ])),
                C("A monic cubic $x^{3}+x+1$ has $x=-1$ as a root.", False, pack("E", False, [
                    D(r"(-1)^{3}+(-1)+1=-1"),
                    close(False, "The value is $-1$, not $0$"),
                ])),
            ],
        ),
        S(
            title="Min Acceleration of a Family of Cubics",
            context=(
                r"A train's speed is $v_b(t)=0.00002t^{3}-b t^{2}+0.4t$ with $b>0$, "
                r"on $0\le t\le 120$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="parametric",
            overview=r"$a=v_b'=0.00006t^{2}-2bt+0.4$, and $a'=0.00012t-2b$.",
            claims=[
                C("The time of minimal acceleration is $t=\\dfrac{2b}{0.00012}$.", True, pack("A", True, [
                    D(r"a'(t)=0.00012t-2b=0\implies t=\frac{2b}{0.00012}"),
                    close(True, "That is the unique critical point of the quadratic $a$"),
                ])),
                C("For $b=0.005$, the minimal acceleration occurs before $t=75$.", False, pack("B", False, [
                    D(r"t=\frac{0.01}{0.00012}=\frac{250}{3}\approx 83.3"),
                    close(False, "The critical time is after $75$"),
                ])),
                C("Larger $b$ moves the moment of minimal acceleration to the right.", True, pack("C", True, [
                    "The critical time is proportional to $b$.",
                    close(True, "Increasing $b$ delays the minimum of $a$"),
                ])),
                C("$v_b$ is a cubic polynomial in $t$ for every $b>0$.", True, pack("D", True, [
                    close(True, "The $t^{3}$ term is present and non-zero"),
                ])),
                C("The sign of $a(0)$ depends on $b$.", False, pack("E", False, [
                    D(r"a(0)=0.4"),
                    close(False, "The initial acceleration is $0.4$ for every $b$"),
                ])),
            ],
        ),
        S(
            title="Workshop Output: Cubic Versus Recorded Totals",
            context=(
                r"Daily output in units is modelled by $Q(t)=-\frac{1}{50}t^{3}+t^{2}+2t$ "
                r"for $0\le t\le 40$ (hours of a production run). A second line records "
                "cumulative output in the table. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="applied",
            tables_markdown=(
                "| Hours $t$ | $0$ | $8$ | $16$ | $24$ | $32$ | $40$ |\n"
                "| --- | --- | --- | --- | --- | --- | --- |\n"
                "| Cumulative units | $0$ | $80$ | $200$ | $360$ | $520$ | $640$ |"
            ),
            overview="Evaluate $Q$ and $Q'$; table interval rates are $\\Delta Q/8$.",
            claims=[
                C("$Q(10)=90$.", False, pack("A", False, [
                    D(r"Q(10)=-\frac{1000}{50}+100+20=100"),
                    close(False, "The model gives $100$ units, not $90$"),
                ])),
                C("The second line's average output per hour over the $40$ h is $16$ units/h.", True, pack("B", True, [
                    D(r"\frac{640}{40}=16"),
                    close(True, "The whole-run average is $16$"),
                ])),
                C("The highest interval rate of the table is on $[0,8]$.", False, pack("C", False, [
                    D(r"10,\ 15,\ 20,\ 20,\ 15"),
                    close(False, "The peak blocks are $20$ units/h, later than the first"),
                ])),
                C("$Q'(0)=2$.", True, pack("D", True, [
                    D(r"Q'(t)=-\frac{3}{50}t^{2}+2t+2\qquad Q'(0)=2"),
                    close(True, "The initial instantaneous rate is $2$"),
                ])),
                C("The model $Q$ is a cubic polynomial in $t$.", True, pack("E", True, [
                    close(True, "The highest power is $t^{3}$"),
                ])),
            ],
        ),
        S(
            title="Rebuild from a Double Root and a Simple Root",
            context=(
                "A monic cubic $p$ has a double root at $x=1$ and a simple root at $x=-3$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="hybrid",
            overview=r"$p(x)=(x-1)^{2}(x+3)=x^{3}+x^{2}-5x+3$.",
            claims=[
                C("$p(x)=x^{3}+x^{2}-5x+3$.", True, pack("A", True, [
                    D(r"(x-1)^{2}(x+3)=(x^{2}-2x+1)(x+3)=x^{3}+x^{2}-5x+3"),
                    close(True, "That is the unique monic cubic with those roots"),
                ])),
                C("$p'(1)=0$.", True, pack("B", True, [
                    "A double root is a stationary root.",
                    D(r"p'(x)=3x^{2}+2x-5\qquad p'(1)=3+2-5=0"),
                    close(True, "The derivative vanishes at the double root"),
                ])),
                C("$p(-3)=0$ and $p'(-3)=0$.", False, pack("C", False, [
                    D(r"p'(-3)=27-6-5=16\neq 0"),
                    close(False, "The root at $-3$ is simple, so $p'$ does not vanish there"),
                ])),
                C("The constant term of $p$ is $3$.", True, pack("D", True, [
                    D(r"p(0)=3"),
                    close(True, "The constant term is $3$"),
                ])),
                C("The sum of the roots counted with multiplicity is $-1$.", True, pack("E", True, [
                    D(r"1+1+(-3)=-1"),
                    D(r"-\frac{b}{a}=-1"),
                    close(True, "The multiplicity-weighted sum is $-1$"),
                ])),
            ],
        ),
        S(
            title="Crossing a Quartic and a Line Three Times",
            context=r"Let $p(x)=x^{4}-5x^{2}+4$ and $\ell(x)=x^{2}-1$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=5, stem_kind="formula",
            overview=r"$p-\ell=x^{4}-6x^{2}+5=(x^{2}-1)(x^{2}-5)$.",
            claims=[
                C("The graphs meet at four distinct real points.", True, pack("A", True, [
                    D(r"p(x)-\ell(x)=x^{4}-6x^{2}+5=(x^{2}-1)(x^{2}-5)"),
                    D(r"x=\pm 1,\ \pm\sqrt{5}"),
                    close(True, "Four distinct real meetings"),
                ])),
                C("$p$ is even.", True, pack("B", True, [
                    close(True, "Only even powers appear in $p$"),
                ])),
                C("$\\ell$ is a cubic function.", False, pack("C", False, [
                    close(False, "$\\ell$ is quadratic"),
                ])),
                C("The highest power of $x$ in $p-\\ell$ is $x^{4}$.", True, pack("D", True, [
                    close(True, "The $x^{4}$ term of $p$ is untouched"),
                ])),
                C("$p(0)=\\ell(0)$.", False, pack("E", False, [
                    D(r"p(0)=4\qquad \ell(0)=-1"),
                    close(False, "The intercepts $4$ and $-1$ differ"),
                ])),
            ],
        ),
        S(
            title="Graph of $x^{3}-x$ Versus a Raised Copy",
            context=(
                r"The figure shows $p(x)=x^{3}-x$. Let $q(x)=p(x)+c$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=5, stem_kind="graph",
            figure=svg_polynomial([1, 0, -1, 0], xmin=-2, xmax=2, title="y = x³ − x", marks=[(-1, ""), (1, "")]),
            overview="A vertical shift of $x^{3}-x$ keeps the same turning abscissas $\\pm 1/\\sqrt{3}$.",
            claims=[
                C("For $c=0$ the graph meets the $x$-axis three times.", True, pack("A", True, [
                    D(r"x(x-1)(x+1)=0"),
                    close(True, "Three distinct crossings"),
                ])),
                C("The turning abscissas of $q$ depend on $c$.", False, pack("B", False, [
                    D(r"q'(x)=p'(x)=3x^{2}-1"),
                    close(False, "A vertical shift never moves the stationary $x$-coordinates"),
                ])),
                C("There exist values of $c$ for which $q$ has only one real root.", True, pack("C", True, [
                    "The local max and min of $p$ are $p(-1/\\sqrt{3})$ and $p(1/\\sqrt{3})$; a shift larger than that gap lifts or drops the axis past both turns.",
                    close(True, "A large enough $|c|$ leaves a single crossing"),
                ])),
                C("$p$ is odd.", True, pack("D", True, [
                    close(True, "Only odd powers appear"),
                ])),
                C("For every $c$, $q$ remains odd.", False, pack("E", False, [
                    "$q(0)=c$, and an odd function must vanish at $0$.",
                    close(False, "A non-zero shift destroys oddness"),
                ])),
            ],
        ),
    ]


# ---------------------------------------------------------------------------
# Assemble / write
# ---------------------------------------------------------------------------

def render(spec: Spec, idx: int) -> dict:
    letters = "ABCDE"
    task = {
        "id": f"math-9-{idx + 1}",
        "case_id": f"MATH 9.{idx + 1:02d}",
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
        "subsection": "9",
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }
    if spec.tables_markdown:
        task["tables_markdown"] = spec.tables_markdown
    if spec.figure:
        task["figure"] = spec.figure
    return task


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 50, len(tasks)
    diffs = Counter(t["difficulty_level"] for t in tasks)
    print("difficulties", dict(sorted(diffs.items())))
    kinds = Counter(t["stem_kind"] for t in tasks)
    print("stem_kinds", dict(kinds))
    assert kinds["symbolic"] >= 12, kinds
    assert tasks[0]["case_id"] == "MATH 9.01"
    assert tasks[0]["answer_key"] == [True, False, False, False, False]
    for t in tasks:
        assert len(t["statements"]) == 5, t["case_id"]
        assert len(set(t["statements"])) == 5, t["case_id"]
        truths = sum(1 for x in t["answer_key"] if x)
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
        assert "Matching the claim" not in "".join(t["tactical_explanations"])
        assert not re.search(r"\\deg\b", " ".join(t["statements"]))
        for e in t["tactical_explanations"]:
            assert "so the statement is" in e, (t["case_id"], e[:80])
            assert e.count("$$") % 2 == 0
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1), (t["case_id"], m.group(1)[:40])


def main() -> None:
    specs = bank()
    tasks = [render(s, i) for i, s in enumerate(specs)]
    for t in tasks:
        t["context"] = normalize_displays(t["context"])
        t["solution_overview"] = normalize_displays(t["solution_overview"])
        t["tactical_explanations"] = [normalize_displays(e) for e in t["tactical_explanations"]]
    validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("figures", sum(1 for t in tasks if t.get("figure")))
    print("tables", sum(1 for t in tasks if t.get("tables_markdown")))
    expls = [e for t in tasks for e in t["tactical_explanations"]]
    print("expl median", sorted(len(e) for e in expls)[len(expls) // 2])


if __name__ == "__main__":
    main()
 