#!/usr/bin/env python3
"""Rewrite Ch7 mixed-exam solution_overview + tactical_explanations.

Style: a detailed shared solution first (Chapter 7 core tutoring: recover or
write the models, then prepare vertex, axis, Delta, roots, meetings, rebuild
coefficients). Letter write-ups then reuse those facts instead of rediscovering
the model. Numbers are sympy-checked.

Used by:
  python3 scripts/enrich-ch7-mixed-overviews.py
  scripts/gen-ch7-mixed-medium-first.py  (applied at the end of build_all)

Does not touch stems, statements, answer_key, figures, or tables.
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from pathlib import Path

from sympy import Poly, Rational, Symbol, discriminant, expand, simplify, solve

x = Symbol("x")
t_sym = Symbol("t")
p_sym = Symbol("p")
q_sym = Symbol("q")
a_sym = Symbol("a")
s_sym = Symbol("s")
n_sym = Symbol("n")

OUT = Path("/workspace/src/data/math-ch7-mixed-exam.json")
LETTERS = "ABCDE"
BANNED = (r"\deg", r"\circ")

KEYS = {
    "MATH 7.E01": [True, False, False, False, True],
    "MATH 7.E02": [False, True, False, True, True],
    "MATH 7.E03": [True, True, False, True, True],
    "MATH 7.E04": [True, True, True, True, True],
    "MATH 7.E05": [True, False, False, False, False],
    "MATH 7.E06": [True, True, True, False, False],
    "MATH 7.E07": [True, True, False, False, False],
    "MATH 7.E08": [True, True, True, True, False],
    "MATH 7.E09": [True, True, True, True, True],
    "MATH 7.E10": [False, False, False, False, True],
    "MATH 7.E11": [True, True, False, False, True],
    "MATH 7.E12": [True, False, True, True, True],
    "MATH 7.E13": [True, False, False, False, False],
    "MATH 7.E14": [True, True, False, False, False],
    "MATH 7.E15": [True, True, True, True, True],
    "MATH 7.E16": [True, True, True, False, True],
    "MATH 7.E17": [True, True, True, False, False],
    "MATH 7.E18": [True, False, False, False, False],
    "MATH 7.E19": [True, True, False, False, False],
    "MATH 7.E20": [True, True, True, True, True],
    "MATH 7.E21": [True, False, True, True, True],
    "MATH 7.E22": [False, False, False, False, True],
    "MATH 7.E23": [True, True, True, True, True],
    "MATH 7.E24": [True, False, True, True, False],
    "MATH 7.E25": [True, True, False, False, False],
    "MATH 7.E26": [True, False, False, False, False],
    "MATH 7.E27": [True, True, True, True, True],
    "MATH 7.E28": [True, True, False, False, False],
    "MATH 7.E29": [True, True, True, False, False],
    "MATH 7.E30": [True, True, True, True, False],
}


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s.strip())
    assert inner, "empty display"
    return f"$${inner}$$"


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def L(letter: str, truth: bool, *parts: str) -> str:
    body = join(*parts)
    verd = "True" if truth else "False"
    tail = f"so the statement is {verd}."
    if not body.endswith(tail):
        raise ValueError(f"{letter} close mismatch: {body[-120:]!r}")
    n_disp = body.count("$$") // 2
    if n_disp < 1:
        raise ValueError(f"{letter} needs at least one display")
    return f"**{letter}.** → {verd}\n\n{body}"


def ev(expr, val, var=x):
    return Rational(simplify(expand(expr).subs(var, val)))


def axis_of(g, var=x):
    coeffs = Poly(expand(g), var).all_coeffs()
    a, b = Rational(coeffs[0]), Rational(coeffs[1])
    return Rational(-b / (2 * a))


def vertex_of(g, var=x):
    h = axis_of(g, var)
    return h, ev(g, h, var)


def disc_of(expr, var=x):
    return Rational(discriminant(Poly(expand(expr), var)))


def lead(expr, var=x):
    return Rational(Poly(expand(expr), var).LC())


def vsum(g, var=x):
    a, b, _c = (Rational(c) for c in Poly(expand(g), var).all_coeffs())
    return Rational(-b / a)


def vprod(g, var=x):
    a, _b, c = (Rational(c) for c in Poly(expand(g), var).all_coeffs())
    return Rational(c / a)


def rewrite_ABC(f, g):
    fu, gu = Poly(expand(f), x), Poly(expand(g), x)
    m = Rational(fu.all_coeffs()[0])
    k = Rational(fu.all_coeffs()[1])
    a, b, c = (Rational(coeff) for coeff in gu.all_coeffs())
    A = a / m**2
    B = (b - 2 * A * m * k) / m
    C = c - A * k**2 - B * k
    assert expand(A * f**2 + B * f + C - g) == 0
    return A, B, C


def first_diffs(ys):
    return [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]


def second_diffs(ys):
    d1 = first_diffs(ys)
    return first_diffs(d1)


def pack(cid: str, overview: str, expls: list[str]) -> tuple[str, list[str]]:
    key = KEYS[cid]
    assert len(expls) == 5, cid
    for i, e in enumerate(expls):
        verd = "True" if key[i] else "False"
        assert e.startswith(f"**{LETTERS[i]}.** → {verd}"), (cid, i, e[:80])
        assert e.rstrip().endswith(f"so the statement is {verd}."), (cid, i)
    ov = overview.strip()
    if len(ov) < 500:
        raise ValueError(f"{cid} overview too short: {len(ov)}")
    return ov, expls


# ---------------------------------------------------------------------------
# Task builders
# ---------------------------------------------------------------------------

def e01():
    g = expand(-(x**2) + 4)
    f = expand(-x + 2)
    h, k = vertex_of(g)
    assert (h, k) == (0, 4)
    assert solve(g, x) == [-2, 2]
    assert solve(g - f, x) == [-1, 2]
    assert disc_of(g - f) == 9
    assert ev(g, 0) == 4 and ev(f, 0) == 2
    ov = join(
        "The figure prints no formulas, so the first job is to recover both rules from the ticks and the marked points. The solid brown curve peaks on the vertical axis at height $4$ and meets the horizontal axis at $x=\\pm 2$; those three facts force a downward unit square.",
        D(r"g(x)=-x^{2}+4"),
        "The dashed green line falls through $(0,2)$ with slope $-1$.",
        D(r"f(x)=-x+2"),
        "The turning point is already sitting in completed-square form: the axis is the vertical coordinate axis and the height there is $4$.",
        D(r"g(x)=4-x^{2}\qquad \text{vertex}=\left(0,4\right)"),
        "At that same abscissa the line sits two units lower, so the peak is strictly above the dashed trace.",
        D(r"g(0)=4\qquad f(0)=2"),
        "Coefficients of $g$ settle the sum and the product of the roots, and the discriminant confirms that both axis crossings are real.",
        D(r"S=0\qquad P=-4\qquad \Delta_{g}=16\qquad x=\pm 2"),
        "Common points of the two graphs are the zeros of the quadratic difference; a positive discriminant leaves two meetings.",
        D(r"g(x)-f(x)=-x^{2}+x+2\qquad\Delta=9"),
        D(r"x=-1\qquad x=2"),
        "Between those two roots the parabola arches above the axis while the line cuts lower, so on that open interval brown stays above green. The leading coefficient $-1$ sends the arms downwards.",
    )
    expls = [
        L("A", True,
          "The overview already recovered the solid curve as $g(x)=-x^{2}+4$ and located its two axis crossings as the roots of that rule.",
          D(r"g(x)=0"),
          D(r"x=\pm 2"),
          "Two distinct real roots match the two marked brown meetings with the horizontal axis, so the statement is True."),
        L("B", False,
          "The shared vertex sits at $(0,4)$, and the dashed line was evaluated on the same abscissa.",
          D(r"g(0)=4"),
          D(r"f(0)=2"),
          "The turning point lies above the dashed line, not below it, so the statement is False."),
        L("C", False,
          "The difference $g-f$ was prepared above and its discriminant is $9$, so the graphs meet twice.",
          D(r"x=-1\qquad x=2"),
          "Two real meetings are present, not one, so the statement is False."),
        L("D", False,
          "On the open interval between the overview's roots $x=\\pm 2$, the midpoint $x=0$ already compared the two heights.",
          D(r"g(0)=4>2=f(0)"),
          "The solid curve stays above the dashed line there, not below it, so the statement is False."),
        L("E", True,
          "The recovered leading coefficient is negative, and the figure's falling arms agree.",
          D(r"a=-1"),
          D(r"a<0"),
          "The solid curve opens downwards, so the statement is True."),
    ]
    return pack("MATH 7.E01", ov, expls)


def e02():
    ys = [k * k - 4 * k + 3 for k in range(6)]
    d1 = first_diffs(ys)
    d2 = second_diffs(ys)
    assert ys == [3, 0, -1, 0, 3, 8]
    assert d1 == [-3, -1, 1, 3, 5]
    assert d2 == [2, 2, 2, 2]
    g = n_sym**2 - 4 * n_sym + 3
    h, k = vertex_of(g, n_sym)
    assert (h, k) == (2, -1)
    ov = join(
        "The table is the whole stem, so read it as a list of pairs and form the neighbouring gaps; no closed form is printed, but a quadratic can be rebuilt from those gaps.",
        D(r"(0,3),\;(1,0),\;(2,-1),\;(3,0),\;(4,3),\;(5,8)"),
        "The inputs are equally spaced by $1$, which makes the first differences the fastest diagnostic.",
        D(r"\text{first}:\ -3,\ -1,\ 1,\ 3,\ 5"),
        "Those first gaps themselves change by a constant $2$, the signature of a quadratic sequence rather than a line.",
        D(r"\text{second}:\ 2,\ 2,\ 2,\ 2"),
        "For unit spacing the second-difference constant equals $2a$, so the leading coefficient is $1$. Matching $s_0=3$ and $s_1=0$ then fixes the remaining two coefficients.",
        D(r"2a=2\qquad a=1"),
        D(r"s_n=n^{2}-4n+3"),
        "The rebuilt parabola turns at $n=2$ with height $-1$, and the table is symmetric about that input: $s_0=s_4=3$ and $s_1=s_3=0$. A linear rule is impossible because the first differences are not constant.",
        D(r"\text{vertex}=\left(2,-1\right)\qquad s_0=s_4=3"),
    )
    expls = [
        L("A", False,
          "Look back at the first-difference row already computed in the overview.",
          D(r"(-3,-1,1,3,5)"),
          "Those gaps change from step to step, so they are not constant, so the statement is False."),
        L("B", True,
          "The overview's second-difference row is constantly $2$.",
          D(r"(2,2,2,2)"),
          "Every second difference equals $2$, so the statement is True."),
        L("C", False,
          "A single linear rule would force constant first differences. Here the first gaps move while the second ones stand still, and the rebuilt leading coefficient is not zero.",
          D(r"a=1\neq 0"),
          "No single line can fit every listed point, so the statement is False."),
        L("D", True,
          "From the recovered rule, unit spacing converts the second-difference constant into the leading coefficient by dividing by $2$.",
          D(r"2a=2"),
          D(r"a=1"),
          "The rebuilt leading coefficient is $1$, so the statement is True."),
        L("E", True,
          "The two table entries the overview already compared are equal.",
          D(r"s_0=3"),
          D(r"s_4=3"),
          "The listed heights agree, so the statement is True."),
    ]
    return pack("MATH 7.E02", ov, expls)


def e03():
    R = p_sym * (8 - p_sym)
    ys = [int(R.subs(p_sym, k)) for k in range(1, 6)]
    assert ys == [7, 12, 15, 16, 15]
    h, k = vertex_of(expand(R), p_sym)
    assert (h, k) == (4, 16)
    d1 = first_diffs(ys)
    assert d1 == [5, 3, 1, -1]
    ov = join(
        "The desk sheet prints only five prices and the corresponding revenues, so treat the table as a list of pairs and, behind the scenes, rebuild the hidden quadratic $R(p)=p(8-p)$ that generated them.",
        D(r"(1,7),\;(2,12),\;(3,15),\;(4,16),\;(5,15)"),
        "Neighbouring gaps of the revenue row are not constant, so the model is not a line; they decrease by $2$ each step, the second-difference signature of a downward parabola.",
        D(r"\text{first}:\ 5,\ 3,\ 1,\ -1\qquad \text{second}:\ -2,\ -2,\ -2"),
        "For unit spacing that second-difference constant equals $2a$, hence $a=-1$. Matching $R(1)=7$ recovers the factored revenue rule.",
        D(r"R(p)=p(8-p)=-p^{2}+8p"),
        "A downward parabola has its largest listed value at the vertex, which sits at the midpoint of the roots $0$ and $8$.",
        D(r"\text{vertex}=\left(4,16\right)\qquad R(3)=R(5)=15\qquad R(2)=12"),
        "From $p=4$ to $p=5$ the listed revenue drops from $16$ to $15$. Revenue therefore does not increase at every step from $1$ to $5$.",
    )
    expls = [
        L("A", True,
          "Among the five listed heights the overview's vertex is the unique peak.",
          D(r"R(4)=16"),
          "That largest listed revenue occurs at $p=4$, so the statement is True."),
        L("B", True,
          "The recovered parabola is symmetric about $p=4$, so the two prices one step either side agree.",
          D(r"R(3)=15"),
          D(r"R(5)=15"),
          "The two revenues are equal, so the statement is True."),
        L("C", False,
          "The first-difference row already computed is $5,3,1,-1$; the last gap is negative.",
          D(r"R(5)-R(4)=15-16=-1"),
          "Revenue does not increase at every step, so the statement is False."),
        L("D", True,
          "Read the recovered rule (or the table pair) at $p=2$.",
          D(r"R(2)=2\cdot 6=12"),
          "The revenue at $p=2$ is $12$ euros, so the statement is True."),
        L("E", True,
          "The same last gap of the first-difference row is the change from price $4$ to $5$.",
          D(r"16\to 15"),
          "Raising the price from $4$ to $5$ decreases the listed revenue, so the statement is True."),
    ]
    return pack("MATH 7.E03", ov, expls)


def e04():
    f = 2 * x + 1
    g = x**2 - 3 * x + 1
    h, k = vertex_of(g)
    assert (h, k) == (Rational(3, 2), Rational(-5, 4))
    assert vprod(g) == 1
    assert vsum(g) == 3
    d = expand(g - f)
    assert solve(d, x) == [0, 5]
    assert disc_of(d) == 25
    A, B, C = rewrite_ABC(f, g)
    assert (A, B, C) == (Rational(1, 4), -2, Rational(11, 4))
    ov = join(
        "Both rules are handed over with numbers already in place.",
        D(r"f(x)=2x+1\qquad g(x)=x^{2}-3x+1"),
        "The turning point of $g$ is worth having in hand: the axis comes from the first two coefficients, and evaluating $g$ there supplies the height.",
        D(r"x=\frac{3}{2}\qquad g\left(\frac{3}{2}\right)=-\frac{5}{4}"),
        D(r"g(x)=\left(x-\frac{3}{2}\right)^{2}-\frac{5}{4}\qquad \text{vertex}=\left(\frac{3}{2},-\frac{5}{4}\right)"),
        "Coefficients alone settle the sum and the product of the roots of $g$, and the discriminant tells how many of those roots are real.",
        D(r"S=3\qquad P=1\qquad \Delta_{g}=5"),
        "Wherever the two graphs touch, the difference $g-f$ is zero; that difference is quadratic and its discriminant leaves two crossings.",
        D(r"g(x)-f(x)=x^{2}-5x\qquad\Delta=25"),
        D(r"x=0\qquad x=5"),
        "Because $f$ is a line with non-zero slope, the square $f(x)^{2}$ already carries an $x^{2}$ term, so $g$ can be rebuilt from $f(x)^{2}$, $f(x)$ and a constant. Matching coefficients gives the triple named in letter E.",
        D(r"A=\frac{1}{4},\quad B=-2,\quad C=\frac{11}{4}"),
    )
    expls = [
        L("A", True,
          "The overview already computed the discriminant of $g-f$ and listed the two meetings.",
          D(r"\Delta=25>0"),
          D(r"x=0\qquad x=5"),
          "The graphs meet at exactly two real points, so the statement is True."),
        L("B", True,
          "The axis was read off the first two coefficients of $g$ in the shared work.",
          D(r"x=-\frac{-3}{2\cdot 1}=\frac{3}{2}"),
          "The axis is $x=\\frac{3}{2}$, so the statement is True."),
        L("C", True,
          "The overview's vertex height is the value of $g$ on that axis.",
          D(r"g\left(\frac{3}{2}\right)=-\frac{5}{4}"),
          "The vertex height equals $-\\frac{5}{4}$, so the statement is True."),
        L("D", True,
          "Vieta on the expanded parabola gave the product of the roots as the constant term over the leading coefficient.",
          D(r"P=\frac{1}{1}=1"),
          "The product of the roots of $g$ equals $1$, so the statement is True."),
        L("E", True,
          "The shared matching already produced one concrete triple, and substituting it back reproduces $g$.",
          D(r"\frac{1}{4}(2x+1)^{2}-2(2x+1)+\frac{11}{4}=x^{2}-3x+1"),
          "Such a triple of real numbers exists (and the claimed one works), so the statement is True."),
    ]
    return pack("MATH 7.E04", ov, expls)


def e05():
    g = x**2 + 1
    # f_t = t x, Delta of g - t x = t^2 - 4
    Delta = t_sym**2 - 4
    assert disc_of(x**2 - 3 * x + 1) == 5
    assert disc_of(x**2 + 1) == -4
    ov = join(
        "The parabola is fixed and the line slides through the origin as the slope $t$ varies.",
        D(r"g(x)=x^{2}+1\qquad f_t(x)=tx"),
        "Meetings solve $g(x)=tx$, which rearranges to a quadratic in $x$ whose coefficients still depend on $t$.",
        D(r"g(x)-f_t(x)=x^{2}-tx+1"),
        "The discriminant of that family is a quadratic in the parameter, and its sign sorts the geometry into miss, tangency, and two crossings.",
        D(r"\Delta(t)=t^{2}-4=(t-2)(t+2)"),
        "Miss when $|t|<2$ (in particular $t=0$ gives $x^{2}+1=0$, no real $x$), tangency at the two values $t=\\pm 2$, and two meetings when $|t|>2$. For $t=3$ one has $\\Delta=5>0$, so the graphs meet twice rather than miss.",
        D(r"|t|<2:\\ \text{none}\qquad |t|=2:\\ \text{tangent}\qquad |t|>2:\\ \text{two}"),
        "The axis of $g$ is read from its own coefficients and never sees $t$.",
        D(r"x=0\qquad \text{vertex}=\left(0,1\right)\qquad a=1"),
    )
    expls = [
        L("A", True,
          "The case $t=0$ of the overview's discriminant is $\\Delta(0)=-4<0$, so the horizontal axis through the origin misses $g$.",
          D(r"x^{2}+1=0"),
          D(r"x^{2}=-1"),
          "No real meeting exists for $t=0$, so the statement is True."),
        L("B", False,
          "The shared discriminant is negative throughout the open interval $|t|<2$, so plenty of slopes miss the parabola.",
          D(r"\Delta(0)=-4<0"),
          "The graphs do miss each other for some (in fact, infinitely many) values of $t$, so the statement is False."),
        L("C", False,
          "Tangency is the double-root case $\\Delta(t)=0$, and that equation has two real roots.",
          D(r"t^{2}-4=0"),
          D(r"t=\pm 2"),
          "Tangency occurs for two real values of $t$, not exactly one, so the statement is False."),
        L("D", False,
          "For $t=3$ the overview's discriminant is already positive.",
          D(r"\Delta(3)=9-4=5>0"),
          "The graphs meet twice when $t=3$, so they do not miss each other, so the statement is False."),
        L("E", False,
          "The axis of $g$ was computed from $g$ alone and does not involve the sliding slope.",
          D(r"x=0"),
          "The axis is independent of $t$, so the statement is False."),
    ]
    return pack("MATH 7.E05", ov, expls)


def e06():
    # vertex (2,-3) through (0,5), opens up:  a(0-2)^2 - 3 = 5 => 4a=8 => a=2
    g = 2 * (x - 2) ** 2 - 3
    assert expand(g) == 2 * x**2 - 8 * x + 5
    assert ev(g, 0) == 5
    assert ev(g, 4) == 5
    assert vertex_of(g) == (2, -3)
    ov = join(
        "A vertex and a second point determine a unique parabola of the completed-square shape $a(x-h)^{2}+k$, and the stem already names both $h$ and $k$.",
        D(r"g(x)=a(x-2)^{2}-3"),
        "The extra point $(0,5)$ fixes the stretch $a$. Substitute $x=0$ and solve the one-step equation.",
        D(r"a(0-2)^{2}-3=5"),
        D(r"4a=8\qquad a=2"),
        "The rebuilt rule is therefore",
        D(r"g(x)=2(x-2)^{2}-3=2x^{2}-8x+5"),
        "The axis is the vertical line through the given vertex, and evaluating at the two symmetric inputs $x=0$ and $x=4$ gives the same height $5$.",
        D(r"\text{axis}:\ x=2\qquad g(0)=5\qquad g(4)=5"),
        "The vertex height $-3$ lies below the horizontal axis, so the turning point is a trough rather than a peak above $y=0$. Because $a=2>0$ the arms open upwards, matching the stem.",
        D(r"\text{vertex}=\left(2,-3\right)\qquad a=2>0"),
    )
    expls = [
        L("A", True,
          "The stretch computed from the given point is $a=2$, which is exactly the claimed rule.",
          D(r"g(x)=2(x-2)^{2}-3"),
          "The rebuilt formula matches, so the statement is True."),
        L("B", True,
          "The $y$-intercept is the overview value $g(0)$, already used to fix the stretch.",
          D(r"g(0)=5"),
          "The $y$-intercept equals $5$, so the statement is True."),
        L("C", True,
          "The axis is the vertical line through the given vertex, recorded in the shared work.",
          D(r"x=2"),
          "The axis of symmetry is $x=2$, so the statement is True."),
        L("D", False,
          "The overview's vertex height is negative.",
          D(r"k=-3<0"),
          "The vertex lies below the horizontal axis, not above it, so the statement is False."),
        L("E", False,
          "Symmetry about $x=2$ sends $x=4$ to the same height as $x=0$, already computed as $5$.",
          D(r"g(4)=2(2)^{2}-3=5"),
          "The value is $5$, not $-3$, so the statement is False."),
    ]
    return pack("MATH 7.E06", ov, expls)


def e07():
    f = x + 1
    g = x**2
    gf = expand(g.subs(x, f))
    fg = expand(f.subs(x, g))
    assert gf == x**2 + 2 * x + 1
    assert fg == x**2 + 1
    assert ev(gf, 1) == 4 and ev(fg, 1) == 2
    ov = join(
        "The stem names a line and a parabola, and the letters ask for both nestings, so expand each composition once and keep the two polynomials.",
        D(r"f(x)=x+1\qquad g(x)=x^{2}"),
        "Feeding the line into the parabola squares the whole linear expression.",
        D(r"g(f(x))=(x+1)^{2}=x^{2}+2x+1"),
        "Feeding the parabola into the line only shifts the square by a constant.",
        D(r"f(g(x))=x^{2}+1"),
        "Both results are quadratic — nesting a line with a parabola cannot raise the highest power above $x^{2}$ — but the coefficients differ, so the two nested rules are different functions. A single test point already separates them.",
        D(r"g(f(1))=4\qquad f(g(1))=2"),
        "The highest power in $f(g(x))$ is $x^{2}$, not $x^{3}$. Substituting a degree-$1$ rule into a degree-$2$ rule (or the other way around) multiplies those degrees and leaves a quadratic.",
        D(r"f(g(x))=x^{2}+1\qquad \text{highest power }x^{2}"),
    )
    expls = [
        L("A", True,
          "The nested rule $g(f(x))$ was expanded in the overview by squaring the whole line $x+1$.",
          D(r"g(f(x))=(x+1)^{2}"),
          D(r"x^{2}+2x+1"),
          "The expansion matches the claim, so the statement is True."),
        L("B", True,
          "The other nesting $f(g(x))$ only shifts the square $x^{2}$ by the intercept of the line.",
          D(r"f(x^{2})=x^{2}+1"),
          D(r"f(g(x))=x^{2}+1"),
          "That expansion matches as well, so the statement is True."),
        L("C", False,
          "The two expansions sit next to each other in the shared work and are visibly different polynomials.",
          D(r"x^{2}+2x+1\neq x^{2}+1"),
          "The nested rules are not identical as functions, so the statement is False."),
        L("D", False,
          "The test point $x=1$ was already evaluated on both nestings.",
          D(r"g(f(1))=4"),
          D(r"f(g(1))=2"),
          "The two values are not equal, so the statement is False."),
        L("E", False,
          "The highest power of $f(g(x))$ was recorded as $x^{2}$.",
          D(r"f(g(x))=x^{2}+1"),
          "The highest power is $x^{2}$, not $x^{3}$, so the statement is False."),
    ]
    return pack("MATH 7.E07", ov, expls)


def e08():
    g = 2 * (x - 1) * (x - 4)
    ge = expand(g)
    assert ge == 2 * x**2 - 10 * x + 8
    h, k = vertex_of(ge)
    assert (h, k) == (Rational(5, 2), Rational(-9, 2))
    assert vsum(ge) == 5 and vprod(ge) == 4
    ov = join(
        "The parabola is already factored, so the roots can be read off the brackets before any expansion.",
        D(r"g(x)=2(x-1)(x-4)"),
        "The zeros are $x=1$ and $x=4$. Their midpoint is the axis, and Vieta will confirm the same midpoint after expanding.",
        D(r"x=1\qquad x=4\qquad \text{axis }x=\frac{5}{2}"),
        "Expanding once produces the three coefficients every later letter needs.",
        D(r"g(x)=2x^{2}-10x+8"),
        "The middle coefficient is $-10$ and the constant term is $8$. The vertex height is the value of $g$ on the axis, not the constant term and not $-4$.",
        D(r"g\left(\frac{5}{2}\right)=2\cdot\frac{25}{4}-10\cdot\frac{5}{2}+8=-\frac{9}{2}"),
        D(r"S=5\qquad P=4\qquad \Delta_{g}=36\qquad \text{vertex}=\left(\frac{5}{2},-\frac{9}{2}\right)"),
        "Because the leading coefficient $2$ is positive the arms open upwards and this vertex is a trough.",
    )
    expls = [
        L("A", True,
          "The brackets in the given (and overview) factorisation vanish at $1$ and $4$.",
          D(r"g(1)=0\qquad g(4)=0"),
          "Those are the two roots, so the statement is True."),
        L("B", True,
          "The axis is the midpoint of those two roots, already recorded as $x=\\frac{5}{2}$.",
          D(r"x=\frac{1+4}{2}=\frac{5}{2}"),
          "The axis is $x=\\frac{5}{2}$, so the statement is True."),
        L("C", True,
          "The expanded middle coefficient sits in the shared polynomial.",
          D(r"g(x)=2x^{2}-10x+8"),
          "The middle coefficient equals $-10$, so the statement is True."),
        L("D", True,
          "The constant term of the expanded polynomial $2x^{2}-10x+8$ is the value at the origin.",
          D(r"g(0)=2(0-1)(0-4)"),
          D(r"g(0)=8"),
          "The constant term equals $8$, so the statement is True."),
        L("E", False,
          "The overview's vertex height is $-\\frac{9}{2}$, not $-4$.",
          D(r"g\left(\frac{5}{2}\right)=-\frac{9}{2}"),
          "The vertex height is $-\\frac{9}{2}$, not $-4$, so the statement is False."),
    ]
    return pack("MATH 7.E08", ov, expls)


def e09():
    g = x**2 - 4
    ell = 2 * x + 1
    ys = [int(ell.subs(x, k)) for k in range(4)]
    assert ys == [1, 3, 5, 7]
    assert first_diffs(ys) == [2, 2, 2]
    h, k = vertex_of(g)
    assert (h, k) == (0, -4)
    assert solve(g, x) == [-2, 2]
    ov = join(
        "Two media sit side by side: a figure for the unknown parabola $g$ and a four-point table for the unknown line $\\ell$. Recover each model once, then reuse the recovered rules.",
        D(r"g(x)=x^{2}-4\qquad \ell(x)=2x+1"),
        "The solid brown curve is an upward trough on the vertical axis, meeting the horizontal axis at $x=\\pm 2$. Completing the square is immediate.",
        D(r"g(x)=x^{2}-4\qquad \text{vertex}=\left(0,-4\right)\qquad x=\pm 2"),
        "The vertex lies $4$ units below the horizontal axis. The leading coefficient $1$ sends the arms upwards.",
        D(r"a=1>0\qquad S=0\qquad P=-4\qquad \Delta_{g}=16"),
        "The tabled heights form an arithmetic sequence: each step of the input raises the output by $2$.",
        D(r"\ell:\ 1,\ 3,\ 5,\ 7\qquad \text{first}:\ 2,\ 2,\ 2"),
        "Constant first differences of $2$ with unit spacing mean slope $2$, and the value at $x=0$ is the intercept $1$, recovering $\\ell(x)=2x+1$.",
        D(r"m=2\qquad \ell(0)=1"),
    )
    expls = [
        L("A", True,
          "The recovered parabola meets the horizontal axis at the two roots already listed.",
          D(r"x=\pm 2"),
          "Two distinct crossings are present, so the statement is True."),
        L("B", True,
          "The overview's turning point sits at height $-4$, strictly below the axis.",
          D(r"g(0)=-4<0"),
          "The turning point lies below the horizontal axis, so the statement is True."),
        L("C", True,
          "The first-difference row of the table was constantly $2$.",
          D(r"(2,2,2)"),
          "The tabled rule has constant first difference $2$, so the statement is True."),
        L("D", True,
          "Unit spacing converts that constant first difference into the slope of the recovered line.",
          D(r"m=2"),
          "The tabled rule is consistent with slope $2$, so the statement is True."),
        L("E", True,
          "The intercept of the recovered line is the table's value at $x=0$.",
          D(r"\ell(0)=1"),
          "The tabled height at $x=0$ equals $1$, so the statement is True."),
    ]
    return pack("MATH 7.E09", ov, expls)


def e10():
    g = Rational(-5, 4) * (x + 1) * (x - 3)
    ge = expand(g)
    assert ev(ge, 1) == 5
    unscaled = expand(-(x + 1) * (x - 3))
    assert ev(unscaled, 1) == 4
    f = -x + 2
    d = expand(ge - f)
    Delta = disc_of(d)
    assert Delta == 21
    ov = join(
        "The clearance brief names a downward parabola by its vertex and its two deck meetings, together with a sensor line through $(0,2)$ of slope $-1$. Those data determine both rules uniquely.",
        D(r"g(x)=a(x+1)(x-3)"),
        "The unscaled product $-(x+1)(x-3)$ already has the right roots and the right axis, but its height at $x=1$ is $4$, not $5$. The stretch $a$ must make up the missing unit.",
        D(r"-(1+1)(1-3)=4\neq 5"),
        D(r"a(2)(-2)=5\qquad a=-\frac{5}{4}"),
        "The rebuilt clearance curve and the sensor path are therefore",
        D(r"g(x)=-\frac{5}{4}(x+1)(x-3)\qquad f(x)=-x+2"),
        "The claimed sensor $f(x)=-x+3$ would pass through $(0,3)$, not through the given point $(0,2)$. Meetings of $g$ with the true sensor are the zeros of $g-f$; that discriminant is positive, so there are two real meetings rather than one.",
        D(r"g(x)-f(x)=-\frac{5}{4}x^{2}+\frac{7}{2}x+\frac{7}{4}\qquad\Delta=21"),
        "At the crown abscissa $x=1$ the sensor sits at height $1$, strictly below the clearance peak $5$.",
        D(r"g(1)=5\qquad f(1)=1"),
    )
    expls = [
        L("A", False,
          "The overview's stretch is $-\\frac{5}{4}$, not $-1$, so the unscaled product is not yet the clearance curve.",
          D(r"a=-\frac{5}{4}\neq -1"),
          "The rule is not $g(x)=-(x+1)(x-3)$, so the statement is False."),
        L("B", False,
          "The unscaled product was evaluated at the vertex abscissa in the shared work.",
          D(r"-(1+1)(1-3)=4"),
          "That height is $4$, not $5$, so the statement is False."),
        L("C", False,
          "The sensor was rebuilt from the given intercept $(0,2)$ and slope $-1$.",
          D(r"f(x)=-x+2"),
          D(r"f(0)=2\neq 3"),
          "The path is not $f(x)=-x+3$, so the statement is False."),
        L("D", False,
          "The discriminant of $g-f$ was computed above and is positive.",
          D(r"\Delta=21>0"),
          "The sensor and the clearance curve meet twice, not at exactly one real point, so the statement is False."),
        L("E", True,
          "At the crown abscissa the two overview heights are $5$ and $1$.",
          D(r"f(1)=1<5=g(1)"),
          "The sensor lies below the clearance peak at $x=1$, so the statement is True."),
    ]
    return pack("MATH 7.E10", ov, expls)


def e11():
    g = x**2 - 4 * x + 3
    h, k = vertex_of(g)
    assert (h, k) == (2, -1)
    assert solve(g, x) == [1, 3]
    assert disc_of(g + 1) == 0
    ov = join(
        "The figure withholds formulas, so recover the solid parabola from the marked trough and the two axis crossings, and recover the dashed level from its constant height.",
        D(r"g(x)=x^{2}-4x+3\qquad y=-1"),
        "The brown curve opens upwards (a trough, not a peak) and meets the horizontal axis at $x=1$ and $x=3$. Completing the square places the vertex exactly on the dashed line.",
        D(r"g(x)=(x-2)^{2}-1\qquad \text{vertex}=\left(2,-1\right)"),
        "Because the vertex height equals the dashed level, the line is tangent to the parabola at the trough: they share exactly one point, not two, and the line does not sit entirely above the curve.",
        D(r"g(x)+1=(x-2)^{2}\qquad\Delta=0"),
        "Coefficients of $g$ confirm the same geometry: positive leading coefficient, two real roots, axis $x=2$.",
        D(r"a=1>0\qquad S=4\qquad P=3\qquad \Delta_{g}=4"),
        D(r"x=1\qquad x=3"),
    )
    expls = [
        L("A", True,
          "The recovered leading coefficient is positive, so the marked turn is a trough.",
          D(r"a=1>0"),
          "The solid curve has a lowest point, not a highest point, so the statement is True."),
        L("B", True,
          "The overview listed two distinct real roots of $g$.",
          D(r"x=1\qquad x=3"),
          "The solid curve crosses the horizontal axis twice, so the statement is True."),
        L("C", False,
          "The dashed level is the vertex height itself, so the graphs touch at the trough.",
          D(r"g(2)=-1"),
          "The dashed line does not lie entirely above the solid curve, so the statement is False."),
        L("D", False,
          "Tangency was recorded as a double root of $g+1$, hence a single shared point.",
          D(r"\Delta=0"),
          "They meet at exactly one point, not two, so the statement is False."),
        L("E", True,
          "The recovered leading coefficient is positive, matching the marked trough with arms that rise on both sides.",
          D(r"a=1"),
          D(r"a>0"),
          "The solid curve opens upwards, so the statement is True."),
    ]
    return pack("MATH 7.E11", ov, expls)


def e12():
    ys = [3 * k - 1 for k in range(5)]
    assert ys == [-1, 2, 5, 8, 11]
    d1 = first_diffs(ys)
    d2 = second_diffs(ys)
    assert d1 == [3, 3, 3, 3] and d2 == [0, 0, 0]
    ov = join(
        "The table lists five equally spaced samples of an unknown rule. Form the neighbouring gaps; constant first differences diagnose a line, and the common gap is the slope.",
        D(r"(0,-1),\;(1,2),\;(2,5),\;(3,8),\;(4,11)"),
        D(r"\text{first}:\ 3,\ 3,\ 3,\ 3"),
        "Every first difference equals $3$, not $2$. The second differences of a linear table all vanish.",
        D(r"\text{second}:\ 0,\ 0,\ 0"),
        "Unit spacing with slope $3$ and intercept $y(0)=-1$ rebuilds the hidden line. One further step of the same gap produces the next term.",
        D(r"y=3x-1"),
        D(r"y(5)=3\cdot 5-1=14"),
        "A quadratic would have produced a non-zero constant second difference; here those second gaps are zero, confirming the linear diagnosis.",
        D(r"m=3\qquad y(0)=-1"),
    )
    expls = [
        L("A", True,
          "The first-difference row computed in the overview is constantly $3$.",
          D(r"(3,3,3,3)"),
          "The first differences of the $y$-row are constant, so the statement is True."),
        L("B", False,
          "That same constant equals $3$, not the claimed $2$.",
          D(r"3\neq 2"),
          "The constant first difference is $3$, not $2$, so the statement is False."),
        L("C", True,
          "Unit spacing converts the constant first difference into the slope of the recovered line.",
          D(r"m=3"),
          "The rule is consistent with a line of slope $3$, so the statement is True."),
        L("D", True,
          "Extending the arithmetic pattern one more step was already carried out.",
          D(r"y(5)=14"),
          "The next term is $14$, so the statement is True."),
        L("E", True,
          "The second-difference row of a linear table vanishes, as recorded above.",
          D(r"(0,0,0)"),
          "The second differences all vanish, so the statement is True."),
    ]
    return pack("MATH 7.E12", ov, expls)


def e13():
    h = -(t_sym**2) + 6 * t_sym
    hv, hk = vertex_of(h, t_sym)
    assert (hv, hk) == (3, 9)
    assert solve(h, t_sym) == [0, 6]
    assert ev(h, 1, t_sym) == 5 and ev(h, 5, t_sym) == 5
    assert ev(h, 2, t_sym) == 8
    ov = join(
        "The toss is drawn as a solid brown parabola against time, with the horizontal axis as ground. Recover the hidden height rule from the two ground meetings $t=0$, $t=6$ and the marked peak at $t=3$ of height $9$.",
        D(r"h(t)=-t^{2}+6t=t(6-t)"),
        "Completing the square (or reading $-b/(2a)$) places the vertex at the midpoint of the ground times.",
        D(r"h(t)=9-(t-3)^{2}\qquad \text{vertex}=\left(3,9\right)"),
        "The greatest height on the figure is therefore $9$ metres, occurring at $t=3$, not at $t=2$ (where the height is only $8$). After the peak the completed square $9-(t-3)^{2}$ strictly decreases.",
        D(r"h(2)=8\qquad h(3)=9\qquad h(4)=8"),
        "The two ground times are symmetric about $t=3$. In particular the heights at $t=1$ and $t=5$ agree, so neither is greater.",
        D(r"h(1)=5\qquad h(5)=5"),
        "The leading coefficient $-1$ sends the arms downwards, matching a ball that leaves the ground and returns.",
        D(r"a=-1<0\qquad \Delta=36"),
    )
    expls = [
        L("A", True,
          "The recovered rule factors as $t(6-t)$, so it vanishes at exactly two times.",
          D(r"t=0\qquad t=6"),
          "Exactly two ground times are visible, so the statement is True."),
        L("B", False,
          "The overview's vertex sits at $t=3$, and the height at $t=2$ is the neighbouring value $8$.",
          D(r"t=3\neq 2"),
          "The greatest height occurs at $t=3$, not at $t=2$, so the statement is False."),
        L("C", False,
          "Symmetry about $t=3$ already equated the two heights.",
          D(r"h(1)=h(5)=5"),
          "The height at $t=1$ is not greater than at $t=5$, so the statement is False."),
        L("D", False,
          "After $t=3$ the completed square $9-(t-3)^{2}$ is strictly smaller: one second later the height has already dropped from $9$ to $8$.",
          D(r"h(3)=9"),
          D(r"h(4)=8<9"),
          "Height falls after the peak, so the statement is False."),
        L("E", False,
          "The shared vertex height is $9$ metres, while $8$ is only the height at $t=2$.",
          D(r"h(3)=9\neq 8"),
          "The greatest height is $9$ metres, not $8$, so the statement is False."),
    ]
    return pack("MATH 7.E13", ov, expls)


def e14():
    g = x**2 + 6 * x + 5
    assert expand((x + 3)**2 - 4) == g
    h, k = vertex_of(g)
    assert (h, k) == (-3, -4)
    assert solve(g, x) == [-5, -1]
    assert disc_of(g) == 16
    shifted = expand(g + 5)
    assert disc_of(shifted) == -4
    ov = join(
        "The stem hands over a monic parabola, so complete the square once and keep the vertex, the discriminant, and the two roots.",
        D(r"g(x)=x^{2}+6x+5"),
        "Half the middle coefficient is $3$, so add and subtract $9$.",
        D(r"x^{2}+6x+5=(x^{2}+6x+9)-9+5"),
        D(r"g(x)=(x+3)^{2}-4\qquad \text{vertex}=\left(-3,-4\right)"),
        "The discriminant is $36-20=16$, so two real roots exist; factoring (or the quadratic formula) finds them both on the negative side of the origin.",
        D(r"\Delta=16\qquad x=-1\qquad x=-5"),
        D(r"S=-6\qquad P=5"),
        "Shifting the graph up by $5$ units produces $(x+3)^{2}+1$, whose discriminant is negative: there is no double root. A double root would have required a shift of $4$, cancelling the $-4$ in the completed square.",
        D(r"g(x)+5=(x+3)^{2}+1\qquad\Delta=-4"),
    )
    expls = [
        L("A", True,
          "The completed-square form was the first display of the shared work.",
          D(r"g(x)=(x+3)^{2}-4"),
          "The vertex form matches, so the statement is True."),
        L("B", True,
          "The completed square $g(x)=(x+3)^{2}-4$ names the axis $x=-3$ and the height $-4$ in one line.",
          D(r"x=-3\qquad g(-3)=-4"),
          "The vertex is $(-3,-4)$, so the statement is True."),
        L("C", False,
          "Both roots listed in the overview are negative.",
          D(r"x=-1\qquad x=-5"),
          "Neither root is positive, so the statement is False."),
        L("D", False,
          "The shared discriminant is $16$, not $15$.",
          D(r"\Delta=16\neq 15"),
          "The discriminant equals $16$, so the statement is False."),
        L("E", False,
          "The shift by $5$ was carried out above and left a positive completed square, not a double root.",
          D(r"(x+3)^{2}+1\neq (x+3)^{2}"),
          "The shifted graph is not a perfect square with a double root, so the statement is False."),
    ]
    return pack("MATH 7.E14", ov, expls)


def e15():
    # g_s = x^2 - 4x + s, Delta = 16 - 4s
    assert disc_of(x**2 - 4 * x + 3) == 4
    assert disc_of(x**2 - 4 * x + 4) == 0
    assert disc_of(x**2 - 4 * x + 5) == -4
    ov = join(
        "A vertical shift $s$ slides the same parabola up and down without moving its axis. Write the family and the discriminant that counts meetings with the horizontal axis $f(x)=0$.",
        D(r"g_s(x)=x^{2}-4x+s\qquad f(x)=0"),
        D(r"\Delta(s)=16-4s=4(4-s)"),
        "The sign of $\\Delta(s)$ is the whole story: two meetings when $s<4$, tangency when $s=4$, and a miss when $s>4$. In particular $s=3$ gives $\\Delta=4>0$, $s=4$ gives $\\Delta=0$, and $s=5$ gives $\\Delta=-4<0$.",
        D(r"s=3:\\ \Delta=4\qquad s=4:\\ \Delta=0\qquad s=5:\\ \Delta=-4"),
        "The axis depends only on the $x^{2}$ and $x$ coefficients, both independent of $s$, so it is the vertical line $x=2$ for every shift. The vertex height is the value of $g_s$ there.",
        D(r"x=2\qquad g_s(2)=s-4"),
        "Completing the square makes the same two facts visible at a glance.",
        D(r"g_s(x)=(x-2)^{2}+(s-4)"),
    )
    expls = [
        L("A", True,
          "The case $s=3$ of the overview's discriminant is already positive.",
          D(r"\Delta(3)=4>0"),
          "Two real meetings with the axis occur, so the statement is True."),
        L("B", True,
          "The case $s=4$ is the double-root value recorded above.",
          D(r"\Delta(4)=0"),
          "The graph touches the axis exactly once, so the statement is True."),
        L("C", True,
          "The family discriminant $\\Delta(s)=16-4s$ becomes negative once the shift climbs past $4$.",
          D(r"s=5"),
          D(r"\Delta(5)=-4<0"),
          "The graph misses the axis, so the statement is True."),
        L("D", True,
          "The axis was computed from $a$ and $b$ alone and never sees $s$.",
          D(r"x=2"),
          "The axis is $x=2$ for every $s$, so the statement is True."),
        L("E", True,
          "The vertex height is the constant term of the completed square.",
          D(r"g_s(2)=s-4"),
          "The vertex height equals $s-4$, so the statement is True."),
    ]
    return pack("MATH 7.E15", ov, expls)


def e16():
    f = -2 * x + 4
    assert ev(f, 0) == 4 and ev(f, 2) == 0 and ev(f, 1) == 2
    ov = join(
        "Two points determine a unique line. The given intercepts are $(0,4)$ and $(2,0)$, so the slope is the ratio of the rise to the run.",
        D(r"m=\frac{0-4}{2-0}=\frac{-4}{2}=-2"),
        "Point-slope (or intercept form) then writes the rule. The $y$-intercept is already $4$, matching $f(0)=4$.",
        D(r"f(x)=-2x+4"),
        "Setting the height to zero recovers the given $x$-intercept, and the negative slope means the line falls from left to right.",
        D(r"-2x+4=0\qquad x=2"),
        "The midpoint of the two given points is a convenient check: at $x=1$ the height is $2$, not $1$.",
        D(r"f(1)=-2+4=2"),
        "One extra unit of $x$ always changes the height by the constant slope $-2$.",
        D(r"f(x+1)-f(x)=-2"),
    )
    expls = [
        L("A", True,
          "The slope is the ratio of the rise to the run between the two given points, already computed in the shared work.",
          D(r"m=\frac{0-4}{2-0}=-2"),
          "The slope equals $-2$, so the statement is True."),
        L("B", True,
          "That slope together with the intercept $(0,4)$ is the recovered rule.",
          D(r"f(x)=-2x+4"),
          "The rule matches, so the statement is True."),
        L("C", True,
          "The $x$-intercept was recovered by setting the rebuilt rule to zero.",
          D(r"x=2"),
          "The line meets the horizontal axis at $x=2$, so the statement is True."),
        L("D", False,
          "The midpoint check in the overview already evaluated $x=1$.",
          D(r"f(1)=2\neq 1"),
          "The height at $x=1$ is $2$, not $1$, so the statement is False."),
        L("E", True,
          "A negative slope, recorded above as $m=-2$, means the line falls from left to right.",
          D(r"m=-2<0"),
          "The line falls from left to right, so the statement is True."),
    ]
    return pack("MATH 7.E16", ov, expls)


def e17():
    f = 2 * x - 1
    g = x**2 - 4
    fg = expand(f.subs(x, g))
    gf = expand(g.subs(x, f))
    assert fg == 2 * x**2 - 9
    assert gf == 4 * x**2 - 4 * x - 3
    assert ev(fg, 0) == -9 and ev(gf, 0) == -3
    ov = join(
        "The stem names a line and a shifted parabola, and the letters compare both nestings, so expand each composition once.",
        D(r"f(x)=2x-1\qquad g(x)=x^{2}-4"),
        "Feeding the parabola into the line scales and then shifts the square; no linear term survives.",
        D(r"f(g(x))=2(x^{2}-4)-1=2x^{2}-9"),
        "Feeding the line into the parabola squares the whole linear expression and then subtracts $4$.",
        D(r"g(f(x))=(2x-1)^{2}-4=4x^{2}-4x-3"),
        "Both nested rules are quadratic — the highest power is $x^{2}$ in each case — but the coefficients differ. In particular $f(g(x))$ has no $x$ term, while $g(f(x))$ does. A single test point already shows that composition does not commute.",
        D(r"f(g(0))=-9\qquad g(f(0))=-3"),
        "Nesting a degree-$1$ rule with a degree-$2$ rule multiplies those degrees and leaves a quadratic either way; there is no $x^{3}$ term in either expansion.",
        D(r"f(g(x))=2x^{2}-9\qquad g(f(x))=4x^{2}-4x-3"),
    )
    expls = [
        L("A", True,
          "The nesting $f(g(x))$ was expanded in the overview by feeding the parabola into the line.",
          D(r"f(g(x))=2(x^{2}-4)-1"),
          D(r"2x^{2}-9"),
          "The expansion matches, so the statement is True."),
        L("B", True,
          "The other nesting $g(f(x))$ was expanded alongside it.",
          D(r"g(f(x))=4x^{2}-4x-3"),
          "That expansion matches as well, so the statement is True."),
        L("C", True,
          "Both shared expansions are quadratic, so they share the same highest power $x^{2}$.",
          D(r"2x^{2}-9\qquad 4x^{2}-4x-3"),
          "Both nested rules have the same highest power of $x$, so the statement is True."),
        L("D", False,
          "The expansion of $f(g(x))$ has no linear term.",
          D(r"f(g(x))=2x^{2}-9"),
          "There is no linear term in $x$, so the statement is False."),
        L("E", False,
          "The test point $x=0$ was already evaluated on both nestings.",
          D(r"f(g(0))=-9\neq -3=g(f(0))"),
          "The two values are not equal, so the statement is False."),
    ]
    return pack("MATH 7.E17", ov, expls)


def e18():
    g = (x + 3) * (x - 3)
    ge = expand(g)
    assert ge == x**2 - 9
    h, k = vertex_of(ge)
    assert (h, k) == (0, -9)
    ov = join(
        "Opposite roots $x=\\pm 3$ make the axis the vertical coordinate axis and make $g$ an even function. Expand once to see the missing linear term.",
        D(r"g(x)=(x+3)(x-3)=x^{2}-9"),
        "There is no $x$ term, so $g(-x)=g(x)$ for every $x$: the graph is symmetric about the $y$-axis, which is therefore the axis of symmetry. An odd rule would have required $g(-x)=-g(x)$, which fails as soon as $g$ is even and not identically zero.",
        D(r"g(-x)=(-x)^{2}-9=g(x)\neq -g(x)"),
        "The vertex sits on that axis at height $-9$, the lowest point of an upward parabola, not at $(0,9)$.",
        D(r"\text{vertex}=\left(0,-9\right)\qquad a=1>0"),
        "The two roots are $3$ and $-3$, so they are not both positive. Between them $g$ is negative, so the inequality $g(x)\\ge 0$ fails on $(-3,3)$.",
        D(r"S=0\qquad P=-9\qquad \Delta_{g}=36"),
        D(r"g(0)=-9<0"),
    )
    expls = [
        L("A", True,
          "The midpoint of the opposite roots is the origin, already recorded as the axis.",
          D(r"x=\frac{-3+3}{2}=0"),
          "The axis of symmetry is the vertical coordinate axis, so the statement is True."),
        L("B", False,
          "The overview checked evenness: $g(-x)=g(x)$, which is the opposite of the odd identity.",
          D(r"g(-x)=g(x)\neq -g(x)"),
          "The function $g$ is even, not odd, so the statement is False."),
        L("C", False,
          "One of the two roots listed above is negative.",
          D(r"x=-3\qquad x=3"),
          "The roots are not both positive, so the statement is False."),
        L("D", False,
          "The vertex sits on the axis $x=0$, and the overview evaluated $g$ there as $-9$, the bottom of an upward parabola.",
          D(r"g(0)=-9"),
          D(r"-9\neq 9"),
          "The vertex is $(0,-9)$, not $(0,9)$, so the statement is False."),
        L("E", False,
          "Inside the two roots the parabola dips below the axis; the overview already evaluated the origin.",
          D(r"g(0)=-9<0"),
          "The inequality $g(x)\\ge 0$ fails, so the statement is False."),
    ]
    return pack("MATH 7.E18", ov, expls)


def e19():
    g = expand(-(x - 1) * (x - 5))
    assert g == -x**2 + 6 * x - 5
    h, k = vertex_of(g)
    assert (h, k) == (3, 4)
    assert solve(g, x) == [1, 5]
    ell = -3 * x + 4
    ys = [int(ell.subs(x, i)) for i in range(4)]
    assert ys == [4, 1, -2, -5]
    assert first_diffs(ys) == [-3, -3, -3]
    assert disc_of(g - 1) == 12
    ov = join(
        "The figure shows a downward hill and a dashed horizontal line; the table lists four samples of a separate line. Recover each model once.",
        D(r"g(x)=-(x-1)(x-5)=-x^{2}+6x-5"),
        "The solid curve opens downwards, so the marked turn is a highest point. The roots $1$ and $5$ put the axis at $x=3$, and the height there is $4$.",
        D(r"\text{vertex}=\left(3,4\right)\qquad a=-1<0"),
        "The dashed level $y=1$ sits well below that peak, so it cuts the hill twice rather than lying above it.",
        D(r"g(x)-1=-x^{2}+6x-6\qquad\Delta=12>0"),
        D(r"g(3)=4>1"),
        "The tabled heights fall by $3$ at every unit step, an arithmetic sequence of slope $-3$, not $+3$.",
        D(r"\ell:\ 4,\ 1,\ -2,\ -5\qquad \text{first}:\ -3,\ -3,\ -3"),
        D(r"\ell(x)=-3x+4\qquad m=-3"),
    )
    expls = [
        L("A", True,
          "The recovered leading coefficient is negative, so the marked turn is a peak.",
          D(r"a=-1<0"),
          "The solid curve has a highest point, not a trough, so the statement is True."),
        L("B", True,
          "The factored form already names two distinct roots.",
          D(r"x=1\qquad x=5"),
          "The solid curve crosses the horizontal axis twice, so the statement is True."),
        L("C", False,
          "The dashed level $y=1$ was compared with the peak height $4$.",
          D(r"1<4"),
          "The dashed line lies below the peak, not above it, so the statement is False."),
        L("D", False,
          "The first-difference row of the table is constantly $-3$, not $3$.",
          D(r"(-3,-3,-3)"),
          "The constant first difference is $-3$, not $3$, so the statement is False."),
        L("E", False,
          "That same constant is the slope of the recovered line.",
          D(r"m=-3\neq 3"),
          "The tabled rule is consistent with slope $-3$, not $3$, so the statement is False."),
    ]
    return pack("MATH 7.E19", ov, expls)


def e20():
    R = p_sym * (16 - p_sym)
    C = 2 * p_sym + 20
    Pi = expand(R - C)
    assert Pi == -(p_sym**2) + 14 * p_sym - 20
    hR, kR = vertex_of(expand(R), p_sym)
    hP, kP = vertex_of(Pi, p_sym)
    assert (hR, kR) == (8, 64)
    assert (hP, kP) == (7, 29)
    assert ev(R, 0, p_sym) == 0 and ev(C, 0, p_sym) == 20
    assert ev(R, 10, p_sym) == 60 and ev(C, 10, p_sym) == 40
    ov = join(
        "Weekend revenue is a downward parabola in the ticket price, and staff cost is a line. Write both rules and their difference, which is the profit to be maximised.",
        D(r"R(p)=p(16-p)=-p^{2}+16p\qquad C(p)=2p+20"),
        D(r"\Pi(p)=R(p)-C(p)=-p^{2}+14p-20"),
        "Revenue opens downwards (leading coefficient $-1$) and turns at the midpoint of the roots $0$ and $16$.",
        D(r"\text{revenue vertex}=\left(8,64\right)\qquad a_R=-1<0"),
        "Profit is a different downward parabola: its axis uses the middle coefficient $14$, so the most profitable price is $7$, one euro below the revenue-maximising price.",
        D(r"\text{profit vertex}=\left(7,29\right)"),
        "At the free-ticket price, revenue vanishes while cost is still $20$. At $p=10$, revenue $60$ already exceeds cost $40$.",
        D(r"R(0)=0<20=C(0)"),
        D(r"R(10)=60>40=C(10)"),
    )
    expls = [
        L("A", True,
          "The leading coefficient of the revenue rule is negative.",
          D(r"a_R=-1<0"),
          "Revenue is a downward-opening parabola in $p$, so the statement is True."),
        L("B", True,
          "Revenue is a downward parabola, so its largest value is the vertex already computed from the roots $0$ and $16$.",
          D(r"p=\frac{0+16}{2}=8"),
          D(r"R(8)=64"),
          "Revenue is largest at $p=8$, so the statement is True."),
        L("C", True,
          "Profit uses a different axis, already computed as $p=7$.",
          D(r"p=\frac{14}{2}=7"),
          "Profit $R-C$ is largest at $p=7$, so the statement is True."),
        L("D", True,
          "The two values at $p=0$ were compared in the shared work.",
          D(r"R(0)=0<20=C(0)"),
          "At $p=0$ revenue is less than cost, so the statement is True."),
        L("E", True,
          "The same comparison at $p=10$ runs the other way.",
          D(r"R(10)=60>40=C(10)"),
          "At $p=10$ revenue exceeds cost, so the statement is True."),
    ]
    return pack("MATH 7.E20", ov, expls)


def e21():
    g = x**2 - 4
    assert solve(g, x) == [-2, 2]
    assert vertex_of(g) == (0, -4)
    assert solve(g + 2, x)  # ±sqrt(2)
    assert disc_of(g + 2) == 8
    ov = join(
        "The figure shows an upward parabola and a dashed horizontal line, with no formulas printed. Recover $g$ from the two axis crossings $x=\\pm 2$ and the marked trough at $(0,-4)$, and recover the dashed level from its constant height $-2$.",
        D(r"g(x)=x^{2}-4\qquad y=-2"),
        "The solid curve meets the horizontal axis once on each side of the origin. Completing the square is immediate, and the vertex sits two units below the dashed line.",
        D(r"g(x)=x^{2}-4\qquad \text{vertex}=\left(0,-4\right)"),
        D(r"g(0)=-4<-2"),
        "The dashed line is not the axis $y=0$: it runs at height $-2$. Meetings with that level solve $x^{2}-4=-2$, a positive-discriminant equation with two real roots.",
        D(r"x^{2}=2\qquad x=\pm\sqrt{2}\qquad\Delta=8"),
        "The leading coefficient $1$ sends the arms upwards, matching the marked trough.",
        D(r"a=1>0\qquad S=0\qquad P=-4\qquad \Delta_{g}=16"),
    )
    expls = [
        L("A", True,
          "The recovered roots of $g$ sit symmetrically about the origin.",
          D(r"x=\pm 2"),
          "The solid curve crosses the horizontal axis once on each side of the origin, so the statement is True."),
        L("B", False,
          "The dashed level was recovered as $y=-2$, not as the axis $y=0$.",
          D(r"y=-2\neq 0"),
          "The dashed line does not sit at height $0$, so the statement is False."),
        L("C", True,
          "The discriminant of $g+2$ was computed above and is positive.",
          D(r"\Delta=8>0"),
          "The solid curve and the dashed line share exactly two points, so the statement is True."),
        L("D", True,
          "The overview already compared the trough with the dashed height.",
          D(r"-4<-2"),
          "The turning point lies below the dashed line, so the statement is True."),
        L("E", True,
          "The recovered leading coefficient is positive, and the marked turn is a trough rather than a peak.",
          D(r"a=1"),
          D(r"a>0"),
          "The solid curve opens upwards, so the statement is True."),
    ]
    return pack("MATH 7.E21", ov, expls)


def e22():
    h = x**2 - 2 * x
    ys = [int(h.subs(x, k)) for k in range(6)]
    assert ys == [0, -1, 0, 3, 8, 15]
    d1 = first_diffs(ys)
    d2 = second_diffs(ys)
    assert d1 == [-1, 1, 3, 5, 7]
    assert d2 == [2, 2, 2, 2]
    assert ev(h, 6) == 24
    ov = join(
        "The table samples an unknown rule at six consecutive integers. Form the neighbouring gaps; constant second differences diagnose a quadratic, which can then be rebuilt and extended.",
        D(r"(0,0),\;(1,-1),\;(2,0),\;(3,3),\;(4,8),\;(5,15)"),
        D(r"\text{first}:\ -1,\ 1,\ 3,\ 5,\ 7"),
        "The first gaps are not constant, so no linear model can fit every listed point. Their own gaps, however, stand still at $2$, not at $4$.",
        D(r"\text{second}:\ 2,\ 2,\ 2,\ 2"),
        "For unit spacing the second-difference constant equals $2a$, hence $a=1$. Matching $h(0)=0$ and $h(1)=-1$ recovers the hidden rule.",
        D(r"2a=2\qquad a=1"),
        D(r"h(x)=x^{2}-2x=x(x-2)"),
        "One further step of the first-difference pattern (add $7+2=9$ to the last height) extends the table to $x=6$.",
        D(r"h(6)=36-12=24"),
    )
    expls = [
        L("A", False,
          "Look back at the first-difference row already computed.",
          D(r"(-1,1,3,5,7)"),
          "Those gaps change from step to step, so they are not constant, so the statement is False."),
        L("B", False,
          "The overview's second-difference constant is $2$, not $4$.",
          D(r"(2,2,2,2)"),
          D(r"2\neq 4"),
          "The second differences equal $2$, not $4$, so the statement is False."),
        L("C", False,
          "A linear model would have required constant first differences, which the table does not have.",
          D(r"a=1\neq 0"),
          "A linear model cannot fit every listed point, so the statement is False."),
        L("D", False,
          "Extending the second-difference pattern was already carried out, and the next height is $24$.",
          D(r"h(6)=24\neq 20"),
          "The extension gives $24$, not $20$, so the statement is False."),
        L("E", True,
          "Constancy of the second-difference row does not depend on the claimed value $4$; the row is constantly $2$.",
          D(r"(2,2,2,2)"),
          "The second differences of the listed heights are constant, so the statement is True."),
    ]
    return pack("MATH 7.E22", ov, expls)


def e23():
    C = q_sym**2 - 4 * q_sym + 9
    ys = [int(C.subs(q_sym, k)) for k in range(6)]
    assert ys == [9, 6, 5, 6, 9, 14]
    d1 = first_diffs(ys)
    d2 = second_diffs(ys)
    assert d2 == [2, 2, 2, 2]
    assert d1 == [-3, -1, 1, 3, 5]
    h, k = vertex_of(C, q_sym)
    assert (h, k) == (2, 5)
    ov = join(
        "The logbook prints only batch sizes and total costs, so read the table as pairs and rebuild the hidden quadratic $C(q)=q^{2}-4q+9$ from the second-difference constant.",
        D(r"(0,9),\;(1,6),\;(2,5),\;(3,6),\;(4,9),\;(5,14)"),
        D(r"\text{first}:\ -3,\ -1,\ 1,\ 3,\ 5\qquad \text{second}:\ 2,\ 2,\ 2,\ 2"),
        "Constant second differences of $2$ with unit spacing mean leading coefficient $a=1$. Matching $C(0)=9$ and $C(1)=6$ recovers the completed-square trough at $q=2$.",
        D(r"C(q)=q^{2}-4q+9=(q-2)^{2}+5"),
        D(r"\text{vertex}=\left(2,5\right)"),
        "Among the listed batches the unique minimum is therefore $5$ euros at $q=2$. The table is symmetric about that batch: $C(0)=C(4)=9$ and $C(1)=C(3)=6$. Cost rises from $q=2$ to $q=3$ (from $5$ to $6$), and from $q=4$ to $q=5$ it rises by $5$ euros.",
        D(r"C(3)-C(2)=1\qquad C(5)-C(4)=5"),
    )
    expls = [
        L("A", True,
          "The overview's vertex is the unique listed minimum.",
          D(r"C(2)=5"),
          "Among the listed batches, cost is smallest at $q=2$, so the statement is True."),
        L("B", True,
          "Symmetry about $q=2$ already equated the two endpoints of a two-step jump.",
          D(r"C(0)=C(4)=9"),
          "Cost at $q=0$ equals cost at $q=4$, so the statement is True."),
        L("C", True,
          "The first gap after the trough is positive.",
          D(r"C(3)-C(2)=6-5=1"),
          "Cost rises from $q=2$ to $q=3$, so the statement is True."),
        L("D", True,
          "The second-difference row computed above is constantly $2$.",
          D(r"(2,2,2,2)"),
          "The second differences of the cost row are constant, so the statement is True."),
        L("E", True,
          "The last first-difference of the table is the change from batch $4$ to $5$.",
          D(r"14-9=5"),
          "Raising the batch from $4$ to $5$ increases cost by $5$ euros, so the statement is True."),
    ]
    return pack("MATH 7.E23", ov, expls)


def e24():
    f = 4 * x - 1
    g = x**2 + x - 1
    d = expand(g - f)
    assert d == x**2 - 3 * x
    assert disc_of(d) == 9
    assert solve(d, x) == [0, 3]
    h, k = vertex_of(g)
    assert h == Rational(-1, 2)
    assert ev(g, 0) == -1 and ev(f, 0) == -1
    assert lead(d) == 1
    ov = join(
        "Both rules are given explicitly, so the shared work is the difference $g-f$, the axis of $g$, and the two values at $x=0$.",
        D(r"f(x)=4x-1\qquad g(x)=x^{2}+x-1"),
        "Meetings solve $g(x)=f(x)$. The difference is a quadratic that happens to factor through the origin.",
        D(r"g(x)-f(x)=x^{2}-3x=x(x-3)"),
        D(r"\Delta=9\qquad x=0\qquad x=3"),
        "A positive discriminant means two distinct meetings, so the graphs cut rather than touch: they are not tangent. The leading coefficient of that difference is $1$, not $2$.",
        D(r"a_{g-f}=1\neq 2"),
        "The axis of $g$ uses only $g$'s own coefficients. At $x=0$ both rules take the value $-1$, which is consistent with $x=0$ being one of the two meetings.",
        D(r"x=-\frac{1}{2}\qquad g(0)=f(0)=-1"),
        D(r"g(x)=\left(x+\frac{1}{2}\right)^{2}-\frac{5}{4}\qquad \text{vertex}=\left(-\frac{1}{2},-\frac{5}{4}\right)"),
    )
    expls = [
        L("A", True,
          "The discriminant of $g-f$ was computed in the overview.",
          D(r"\Delta=9>0"),
          "The discriminant of $g-f$ is positive, so the statement is True."),
        L("B", False,
          "Tangency would have required a double root, i.e. $\\Delta=0$. Here $\\Delta=9$ and the two meetings are distinct.",
          D(r"x=0\qquad x=3"),
          "The graphs cut twice rather than touch, so the statement is False."),
        L("C", True,
          "The axis of $g$ was read off its own first two coefficients.",
          D(r"x=-\frac{1}{2}"),
          "The axis of $g$ is $x=-\\frac{1}{2}$, so the statement is True."),
        L("D", True,
          "Both constant terms were compared at the origin, and they agree.",
          D(r"g(0)=f(0)=-1"),
          "At $x=0$ one has $g(0)=f(0)$, so the statement is True."),
        L("E", False,
          "The leading coefficient of the shared difference is $1$.",
          D(r"a_{g-f}=1\neq 2"),
          "The leading coefficient of $g-f$ equals $1$, not $2$, so the statement is False."),
    ]
    return pack("MATH 7.E24", ov, expls)


def e25():
    # g_a - 3 = a x^2 - 4x = x(a x - 4)
    ov = join(
        "The family $g_a$ is a parabola whose leading coefficient $a$ is the parameter, and the comparison line is the constant level $y=3$. Meetings solve $g_a(x)=3$.",
        D(r"g_a(x)=ax^{2}-4x+3\qquad f(x)=3"),
        D(r"g_a(x)-3=ax^{2}-4x=x(ax-4)"),
        "The factor $x$ is independent of $a$, so $x=0$ is a meeting for every $a\\neq 0$. The other meeting slides with the parameter: $x=4/a$. In particular $a=1$ gives the second meeting $x=4$, while $a=2$ gives $x=2$, not $x=3$.",
        D(r"x=0\qquad x=\frac{4}{a}"),
        D(r"a=1:\\ x=4\qquad a=2:\\ x=2"),
        "The axis $-b/(2a)$ still involves $a$, so it is not independent of the leading coefficient.",
        D(r"x=\frac{4}{2a}=\frac{2}{a}"),
        "The opening direction is the sign of $a$. For $a=-1$ the arms go downwards.",
        D(r"a=-1<0"),
    )
    expls = [
        L("A", True,
          "The factor $x$ in the overview's difference is present for every $a\\neq 0$.",
          D(r"g_a(0)=3=f(0)"),
          "The graphs meet at $x=0$ for every $a\\neq 0$, so the statement is True."),
        L("B", True,
          "The second-meeting formula at $a=1$ was recorded as $x=4$.",
          D(r"x=\frac{4}{1}=4"),
          "When $a=1$ there is a second meeting at $x=4$, so the statement is True."),
        L("C", False,
          "The same formula at $a=2$ gives $x=2$, not $x=3$.",
          D(r"x=\frac{4}{2}=2\neq 3"),
          "The second meeting is at $x=2$, not at $x=3$, so the statement is False."),
        L("D", False,
          "The axis $-b/(2a)$ still involves the leading coefficient, so it slides when $a$ changes.",
          D(r"x=\frac{2}{a}"),
          D(r"a=1:\\ x=2\qquad a=2:\\ x=1"),
          "The axis of $g_a$ depends on $a$, so the statement is False."),
        L("E", False,
          "A negative leading coefficient turns the arms downwards.",
          D(r"a=-1<0"),
          "When $a=-1$ the parabola opens downwards, not upwards, so the statement is False."),
    ]
    return pack("MATH 7.E25", ov, expls)


def e26():
    g = (x + 1) * (x - 3)
    ge = expand(g)
    assert ge == x**2 - 2 * x - 3
    h, k = vertex_of(ge)
    assert (h, k) == (1, -4)
    assert ge.subs(x, 0) == -3
    ov = join(
        "A monic parabola is determined by its two roots: write the product of the corresponding linear factors and expand once.",
        D(r"g(x)=(x+1)(x-3)"),
        D(r"g(x)=x^{2}-2x-3"),
        "The expanded form is $x^{2}-2x-3$, not $x^{2}-2x+3$: the constant term is the product of the roots with a sign, $(-1)\\cdot 3=-3$. The claimed expansion $x^{2}-2x+3$ would have product $3$ and no real roots.",
        D(r"S=2\qquad P=-3\qquad \Delta_{g}=16"),
        "The axis is the midpoint of the roots, $x=1$, not $x=0$. Evaluating there gives the vertex height $-4$, not $-3$.",
        D(r"x=\frac{-1+3}{2}=1\qquad g(1)=-4"),
        D(r"g(x)=(x-1)^{2}-4\qquad \text{vertex}=\left(1,-4\right)"),
        "The constant term $g(0)=-3$ is not $3$.",
        D(r"g(0)=-3"),
    )
    expls = [
        L("A", True,
          "A monic parabola with those two roots is exactly the product written in the overview.",
          D(r"g(x)=(x+1)(x-3)"),
          "The rule matches, so the statement is True."),
        L("B", False,
          "The shared expansion has constant term $-3$, not $+3$.",
          D(r"g(x)=x^{2}-2x-3"),
          "The expanded form is not $x^{2}-2x+3$, so the statement is False."),
        L("C", False,
          "The axis is the midpoint of the roots, already recorded as $x=1$.",
          D(r"x=1\neq 0"),
          "The axis is not $x=0$, so the statement is False."),
        L("D", False,
          "The overview's vertex height is $-4$.",
          D(r"g(1)=-4\neq -3"),
          "The vertex height is $-4$, not $-3$, so the statement is False."),
        L("E", False,
          "The constant term is the value at the origin, computed as $-3$.",
          D(r"g(0)=-3\neq 3"),
          "The constant term equals $-3$, not $3$, so the statement is False."),
    ]
    return pack("MATH 7.E26", ov, expls)


def e27():
    f = x - 2
    finv = x + 2
    g = x**2 - 1
    nested = expand(g.subs(x, finv))
    assert nested == x**2 + 4 * x + 3
    assert solve(nested, x) == [-3, -1]
    ov = join(
        "The inner map is the inverse line $f^{-1}(x)=x+2$, so substituting it into the parabola shifts every input two units to the left before squaring.",
        D(r"f(x)=x-2\qquad f^{-1}(x)=x+2\qquad g(x)=x^{2}-1"),
        D(r"g(f^{-1}(x))=(x+2)^{2}-1"),
        "Expanding the square produces a monic quadratic with a linear term $4x$ and constant $3$. Factoring recovers the two roots as the original roots of $g$ shifted by $-2$.",
        D(r"g(f^{-1}(x))=x^{2}+4x+3=(x+1)(x+3)"),
        "The nested rule therefore vanishes at $x=-1$ and at $x=-3$. The leading coefficient $1$ is positive, so the nested graph is a parabola that opens upwards. Substituting an inverse line never raises the highest power above $x^{2}$.",
        D(r"x=-1\qquad x=-3\qquad a=1>0"),
        D(r"S=-4\qquad P=3\qquad \Delta=4"),
    )
    expls = [
        L("A", True,
          "The substitution $g(f^{-1}(x))$ was written before expanding.",
          D(r"g(f^{-1}(x))=(x+2)^{2}-1"),
          "The nested rule equals $(x+2)^{2}-1$, so the statement is True."),
        L("B", True,
          "Expanding the overview's $(x+2)^{2}-1$ produces the claimed quadratic.",
          D(r"(x+2)^{2}-1=x^{2}+4x+4-1"),
          D(r"x^{2}+4x+3"),
          "The expanded form matches, so the statement is True."),
        L("C", True,
          "One of the two factored roots is $x=-1$.",
          D(r"(x+1)(x+3)=0"),
          D(r"x=-1"),
          "The nested rule vanishes at $x=-1$, so the statement is True."),
        L("D", True,
          "The original roots of $g$ are $x=\\pm 1$; substituting $f^{-1}(x)=x+2$ shifts each of them by $-2$.",
          D(r"x+2=-1\qquad x=-3"),
          "The nested rule vanishes at $x=-3$, so the statement is True."),
        L("E", True,
          "The leading coefficient of the nested quadratic is $1$.",
          D(r"a=1>0"),
          "The nested rule is a parabola that opens upwards, so the statement is True."),
    ]
    return pack("MATH 7.E27", ov, expls)


def e28():
    g = (x - 2) ** 2
    ge = expand(g)
    assert ge == x**2 - 4 * x + 4
    assert disc_of(ge) == 0
    assert vertex_of(ge) == (2, 0)
    ov = join(
        "A repeated linear factor is a double root: the parabola is tangent to the horizontal axis at that root, and the vertex lies on the axis.",
        D(r"g(x)=(x-2)^{2}"),
        D(r"g(x)=x^{2}-4x+4\qquad\Delta=0"),
        "The unique axis meeting is $x=2$, which is also the axis of symmetry and the vertex abscissa. The vertex height is $g(2)=0$, so the turning point lies on the horizontal axis.",
        D(r"\text{vertex}=\left(2,0\right)\qquad \text{axis }x=2"),
        "The claimed expansion $x^{2}-4x+5$ would be this square plus one, with discriminant $-4$ and vertex height $1$; that is a different parabola. The discriminant of the given $g$ is $0$, not $1$. The axis is $x=2$, not $x=3$.",
        D(r"S=4\qquad P=4\qquad a=1>0"),
        "Because $a>0$ the arms open upwards and the double root is a trough sitting on the axis.",
    )
    expls = [
        L("A", True,
          "A double root is a single axis meeting, recorded as $\\Delta=0$.",
          D(r"x=2"),
          "The graph meets the horizontal axis at exactly one point, so the statement is True."),
        L("B", True,
          "That unique meeting is the vertex, whose height is zero.",
          D(r"g(2)=0"),
          "The vertex lies on the horizontal axis, so the statement is True."),
        L("C", False,
          "The axis is the vertical line through the double root, already recorded as $x=2$.",
          D(r"x=2\neq 3"),
          "The axis of symmetry is not $x=3$, so the statement is False."),
        L("D", False,
          "The shared expansion is $x^{2}-4x+4$, not $x^{2}-4x+5$.",
          D(r"g(x)=x^{2}-4x+4"),
          "Expanding does not give $x^{2}-4x+5$, so the statement is False."),
        L("E", False,
          "The discriminant of a double root is zero.",
          D(r"\Delta=0\neq 1"),
          "The discriminant of $g$ equals $0$, not $1$, so the statement is False."),
    ]
    return pack("MATH 7.E28", ov, expls)


def e29():
    q = (x - 2) ** 2 + 1
    ys = [int(q.subs(x, k)) for k in range(5)]
    assert ys == [5, 2, 1, 2, 5]
    d1 = first_diffs(ys)
    d2 = second_diffs(ys)
    assert d1 == [-3, -1, 1, 3]
    assert d2 == [2, 2, 2]
    abs_ys = [abs(k - 2) + 1 for k in range(5)]
    assert abs_ys == [3, 2, 1, 2, 3]
    assert ev(q, 5) == 10
    ov = join(
        "The table is symmetric about $x=2$ and the second differences are constant, so a quadratic trough at $x=2$ is the right model. Matching the vertex height $1$ rebuilds $q(x)=(x-2)^{2}+1$, which fits every listed point.",
        D(r"(0,5),\;(1,2),\;(2,1),\;(3,2),\;(4,5)"),
        D(r"\text{first}:\ -3,\ -1,\ 1,\ 3\qquad \text{second}:\ 2,\ 2,\ 2"),
        D(r"q(x)=(x-2)^{2}+1"),
        "The candidate absolute-value rule $|x-2|+1$ matches the three middle heights but fails at the endpoints: it would read $3,2,1,2,3$ rather than $5,2,1,2,5$. A V-shape cannot reproduce a constant second difference of $2$.",
        D(r"|x-2|+1:\ 3,2,1,2,3"),
        "Extending the quadratic one more step uses the next first difference $3+2=5$ on top of $q(4)=5$, or direct substitution into the recovered rule.",
        D(r"q(5)=(3)^{2}+1=10"),
        "The claimed extension $8$ would fit neither the quadratic nor the V-shape.",
        D(r"\text{vertex}=\left(2,1\right)\qquad a=1"),
    )
    expls = [
        L("A", True,
          "The listed heights read the same forwards and backwards about $x=2$.",
          D(r"q(0)=q(4)=5\qquad q(1)=q(3)=2"),
          "The table is symmetric about $x=2$, so the statement is True."),
        L("B", True,
          "The second-difference row computed above is constantly $2$.",
          D(r"(2,2,2)"),
          "The second differences are constant, so the statement is True."),
        L("C", True,
          "The recovered quadratic was checked against every listed point.",
          D(r"q(x)=(x-2)^{2}+1"),
          "The candidate matches every listed point, so the statement is True."),
        L("D", False,
          "The absolute-value candidate was evaluated on the same inputs and fails at the ends.",
          D(r"|0-2|+1=3\neq 5"),
          "The candidate $|x-2|+1$ does not match every listed point, so the statement is False."),
        L("E", False,
          "The overview's extension of the quadratic gives $q(5)=10$.",
          D(r"q(5)=10\neq 8"),
          "The next height is $10$, not $8$, so the statement is False."),
    ]
    return pack("MATH 7.E29", ov, expls)


def e30():
    g = 4 - (x - 2) ** 2
    f = 2 - x / 2
    ge = expand(g)
    assert ge == -x**2 + 4 * x
    assert solve(g, x) == [0, 4]
    assert vertex_of(ge) == (2, 4)
    assert ev(f, 2) == 1
    ov = join(
        "The arch is already written in completed-square form, and the trolley path is a line. Write both rules and the quantities every letter will need: the road meetings, the crown, and the trolley height at the same abscissa.",
        D(r"g(x)=4-(x-2)^{2}\qquad f(x)=2-\frac{1}{2}x"),
        "The arch meets the road $y=0$ where the completed square equals $4$, i.e. where $|x-2|=2$. Those two roots are $x=0$ and $x=4$, so the span of the bridge is $4$ units and the axis is the midline $x=2$.",
        D(r"g(x)=0\qquad x=0\qquad x=4"),
        "The crown is the vertex of the downward parabola: height $4$ at $x=2$. The leading coefficient of the expanded form $-x^{2}+4x$ is negative, matching an arch.",
        D(r"g(x)=-x^{2}+4x\qquad \text{vertex}=\left(2,4\right)\qquad a=-1<0"),
        "The trolley path is already in slope-intercept form: slope $-\\frac{1}{2}$ and intercept $2$. At the crown abscissa the trolley sits at height $1$, three units below the arch, so the chord lies below the arch there, not above it.",
        D(r"m=-\frac{1}{2}\qquad f(2)=1<4=g(2)"),
        "The height gap at $x=2$ already settles the last claim without a further intersection count.",
        D(r"g(2)-f(2)=3"),
    )
    expls = [
        L("A", True,
          "The overview solved $g(x)=0$ and listed the two road meetings.",
          D(r"x=0\qquad x=4"),
          "The arch meets the road at $x=0$ and $x=4$, so the statement is True."),
        L("B", True,
          "The crown is the vertex of $g(x)=4-(x-2)^{2}$, whose height is the constant $4$ sitting outside the square.",
          D(r"g(2)=4-0=4"),
          "The crown of the arch is at height $4$, so the statement is True."),
        L("C", True,
          "The slope of the trolley path was read off the given linear rule.",
          D(r"m=-\frac{1}{2}"),
          "The trolley path has slope $-\\frac{1}{2}$, so the statement is True."),
        L("D", True,
          "The trolley height at the crown abscissa was evaluated in the overview.",
          D(r"f(2)=1"),
          "At the crown abscissa the trolley is at height $1$, so the statement is True."),
        L("E", False,
          "The same two heights show the trolley sitting strictly below the arch.",
          D(r"f(2)=1<4=g(2)"),
          "The trolley path lies below the arch at $x=2$, not above it, so the statement is False."),
    ]
    return pack("MATH 7.E30", ov, expls)


BUILDERS = [
    e01, e02, e03, e04, e05, e06, e07, e08, e09, e10,
    e11, e12, e13, e14, e15, e16, e17, e18, e19, e20,
    e21, e22, e23, e24, e25, e26, e27, e28, e29, e30,
]


def apply_overviews(tasks: list[dict]) -> None:
    """Overwrite solution_overview and tactical_explanations in place."""
    assert len(tasks) == 30, len(tasks)
    assert len(BUILDERS) == 30
    for t, builder in zip(tasks, BUILDERS):
        ov, expls = builder()
        cid = t["case_id"]
        assert cid in KEYS, cid
        assert t["answer_key"] == KEYS[cid], (cid, t["answer_key"], KEYS[cid])
        t["solution_overview"] = ov
        t["tactical_explanations"] = expls


def validate_style(tasks: list[dict]) -> None:
    kinds = Counter(t["stem_kind"] for t in tasks)
    print("stem_kind:", dict(kinds))
    assert all(kinds[k] == 3 for k in kinds), kinds

    ov_lens = sorted(len(t["solution_overview"]) for t in tasks)
    ov_med = statistics.median(ov_lens)
    print(f"overview len min/med/max {ov_lens[0]}/{ov_med}/{ov_lens[-1]}")
    assert ov_med >= 500, ov_med

    expls = [e for t in tasks for e in t["tactical_explanations"]]
    elens = sorted(len(e) for e in expls)
    print(f"expl len min/med/max {elens[0]}/{statistics.median(elens)}/{elens[-1]}")

    empty_disp = 0
    for t in tasks:
        blob = t["solution_overview"] + "\n" + "\n".join(t["tactical_explanations"])
        for tok in BANNED:
            assert tok not in blob, (t["case_id"], tok)
        for i, e in enumerate(t["tactical_explanations"]):
            letter = LETTERS[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{letter}.** → {verd}"), (t["case_id"], i, e[:80])
            assert e.rstrip().endswith(f"so the statement is {verd}."), (t["case_id"], letter)
            assert e.count("$$") >= 2 and e.count("$$") % 2 == 0, (t["case_id"], letter)
            n_disp = e.count("$$") // 2
            assert 1 <= n_disp <= 6, (t["case_id"], letter, n_disp)
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
                inner = m.group(1)
                assert inner.strip(), (t["case_id"], letter, "empty $$")
                assert "\n" not in inner, (t["case_id"], letter)
                if not inner.strip():
                    empty_disp += 1
            # overviews too
        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", t["solution_overview"]):
            inner = m.group(1)
            assert inner.strip(), (t["case_id"], "empty overview $$")
            if not inner.strip():
                empty_disp += 1
    assert empty_disp == 0
    print("style validation OK")


def main() -> None:
    data = json.loads(OUT.read_text())
    tasks = data["tasks"]
    apply_overviews(tasks)
    validate_style(tasks)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} overviews+explanations -> {OUT}")


if __name__ == "__main__":
    main()
