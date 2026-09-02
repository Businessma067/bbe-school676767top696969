#!/usr/bin/env python3
"""Generate Chapter 7 — Linear & quadratic functions (diverse stems).

Stem kinds:
  formula  — f and g given in math
  text     — prose scene; rebuild formulas first
  points   — roots / slope / intercepts in words
  hybrid   — one formula printed, the other only verbal

Difficulties 1/5 … 5/5 (10 each). Levels 4–5 use traps, compositions,
recoveries, and text→formula work. Explanations follow MATH 13.18 rhythm.
"""

from __future__ import annotations

import json
import random
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

from sympy import Poly, Rational, Symbol, discriminant, expand, latex, solve

x = Symbol("x")
OUT = Path("/workspace/src/data/math-ch7-linear-quadratic.json")


def L(expr) -> str:
    return latex(expr)


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def signed_term(r) -> str:
    """Render +k or -k for concatenation after another term."""
    r = Rational(r)
    if r >= 0:
        return f"+{F(r)}"
    return f"-{F(-r)}"


def x_shift(h) -> str:
    """Render (x-h) with a clean sign when h is negative."""
    h = Rational(h)
    if h >= 0:
        return f"\\left(x-{F(h)}\\right)"
    return f"\\left(x+{F(-h)}\\right)"


def poly_lead(a) -> str:
    a = Rational(a)
    if a == 1:
        return ""
    if a == -1:
        return "-"
    return F(a)


def P(h, k) -> str:
    return f"\\left({F(h)}, {F(k)}\\right)"


def B(v) -> bool:
    return bool(v)


@dataclass
class Model:
    f: object
    g: object
    title: str
    stem_kind: str
    scene: str | None = None


def M(fa, fb, ga, gb, gc, title, kind, scene=None) -> Model:
    return Model(fa * x + fb, ga * x**2 + gb * x + gc, title, kind, scene)


FORMULA = [
    M(4, 2, 1, -1, -2, "Vertex, Linear Rewrite, and Crossings", "formula"),
    M(2, -1, 1, -3, 2, "Integer Roots and Axis Check", "formula"),
    M(3, 1, 1, 2, -3, "Opening Direction and Meetings", "formula"),
    M(-2, 4, 1, -4, 3, "Minimum Point and Difference Graph", "formula"),
    M(5, -5, 2, -4, -6, "Scaled Parabola Against a Steep Line", "formula"),
    M(1, 3, 1, 0, -4, "Even Parabola and Shifted Line", "formula"),
    M(-1, 2, 1, 1, -6, "Falling Line Through Twin Roots", "formula"),
    M(4, -2, 1, -5, 6, "Factorable Quadratic Parallel Trap", "formula"),
    M(2, 4, -1, 2, 3, "Downward Parabola Versus Rising Line", "formula"),
    M(6, 0, 1, -6, 5, "Through-Origin Line and Twin Roots", "formula"),
    M(2, -3, 1, 1, -6, "Axis Versus Vieta Sum", "formula"),
    M(-4, -2, 2, 0, -18, "Deep Even Minimum", "formula"),
    M(7, 1, 1, -6, 8, "Steep Line Twin Roots", "formula"),
    M(1, -4, 1, -1, -12, "Distant Roots Shallow Line", "formula"),
    M(3, -6, 1, -2, -8, "Wide Roots Translation Trap", "formula"),
    M(8, -4, 1, -1, -6, "Half-Integer Mid Vertex", "formula"),
    M(-5, 10, 2, -2, -12, "Scaled Fall Against Rising Line", "formula"),
    M(4, 3, 1, -8, 15, "Roots Three and Five", "formula"),
    M(2, 2, 1, -1, -20, "Large Negative Constant", "formula"),
    M(5, 0, 1, -4, -5, "Proportional Line Product Trap", "formula"),
]

TEXT = [
    M(
        4, 2, 1, -1, -2, "Warehouse Fees Hidden in Prose", "text",
        "A logistics desk bills a fixed handling fee of 2 euros plus 4 euros for each pallet "
        "handled — call this linear rule $f$. A rival quote instead squares the pallet count, "
        "subtracts the pallet count once, then subtracts 2 — call this quadratic rule $g$.",
    ),
    M(
        3, -1, 1, -5, 6, "Lab Calibration Described in Words", "text",
        "A sensor outputs three times the reading minus one (the linear map $f$). "
        "A second processing stage takes the square of the reading, subtracts five times "
        "the reading, and adds six (the quadratic map $g$).",
    ),
    M(
        2, 0, 1, -4, 3, "Ticket Prices From a Narrative", "text",
        "Adult tickets cost twice the number of seats reserved with no fixed surcharge ($f$). "
        "A group deal squares the seat count, then subtracts four times that count, then adds three ($g$).",
    ),
    M(
        -2, 5, 1, 0, -9, "Cooling Curve Told in Sentences", "text",
        "An oven cools with offset 5 while losing 2 degrees per minute of the timer ($f$). "
        "Residual heat squares elapsed minutes and then subtracts 9 ($g$).",
    ),
    M(
        1, 4, -1, 2, 8, "Revenue Story Without Printed Formulas", "text",
        "Unit revenue grows by one euro per item after a base of four euros ($f$). "
        "A promotional curve opens downwards: eight plus twice the volume, minus the square of the volume ($g$).",
    ),
    M(
        5, 1, 2, -8, 6, "Production Cost Buried in Text", "text",
        "Machine A charges a setup of 1 plus five per batch ($f$). Machine B costs twice the "
        "square of the batch size, minus eight times that size, plus six ($g$).",
    ),
    M(
        3, 0, 1, -2, -8, "Bridge Load Described Verbally", "text",
        "Safe linear load grows as three times the span coordinate with no constant term ($f$). "
        "Parabolic stress is the square of the span, minus twice the span, minus eight ($g$).",
    ),
    M(
        -3, 6, 1, -3, -10, "Discount Schedule in Ordinary Language", "text",
        "A coupon subtracts three euros per item from a starting credit of six ($f$). "
        "A loyalty score squares visits, subtracts three times visits, then subtracts ten ($g$).",
    ),
    M(
        4, -8, 1, -6, 5, "Irrigation Settings From a Briefing", "text",
        "Flow starts eight units below zero offset and rises by four per notch ($f$). "
        "Pressure follows the square of the notch, minus six notches, plus five ($g$).",
    ),
    M(
        2, 5, 1, 4, 3, "No-Root Trap Hidden in a Story", "text",
        "A quote is five plus twice the order size ($f$). A penalty curve is the square of "
        "order size plus four times that size plus three ($g$) — and $g$ never crosses zero.",
    ),
    M(
        6, -2, 1, -7, 10, "Fleet Mileage Brief Written Out", "text",
        "Dispatch pays six times the route index minus two ($f$). Fuel burn is the square of "
        "the index, minus seven times the index, plus ten ($g$).",
    ),
    M(
        -1, 0, 1, -2, -3, "Negative Identity in a Memo", "text",
        "Controller $f$ simply negates the input. Residual $g$ squares the input, subtracts "
        "twice the input, then subtracts three.",
    ),
]

POINTS = [
    M(
        2, 1, 1, -5, 6, "Rebuild From Roots and a Slope", "points",
        "The line $f$ has slope $2$ and $y$-intercept $1$. The parabola $g$ opens upwards with "
        "leading coefficient $1$ and crosses the $x$-axis at $x=2$ and $x=3$.",
    ),
    M(
        3, -3, 1, -1, -12, "Recover Models From Axis Data", "points",
        "Line $f$ passes through $(0,-3)$ with slope $3$. Quadratic $g$ has roots $-3$ and $4$ "
        "and leading coefficient $1$.",
    ),
    M(
        -1, 4, 1, -4, 3, "Vertex-Free Reconstruction", "points",
        "The linear rule $f$ sends $0$ to $4$ and $1$ to $3$. The quadratic $g$ factors as $(x-1)(x-3)$.",
    ),
    M(
        4, 0, 1, 2, -8, "Two Points and Two Roots", "points",
        "$f$ is proportional to $x$ with $f(2)=8$. $g$ has roots $2$ and $-4$ and opens upwards "
        "with coefficient $1$.",
    ),
    M(
        1, -2, 2, -8, 6, "Scaled Factor Recovery", "points",
        "$f(0)=-2$ and $f(3)=1$. The quadratic $g$ has roots $1$ and $3$ but is scaled so that "
        "its leading coefficient is $2$.",
    ),
    M(
        5, -5, 1, -6, 8, "Intercept Pair Plus Twin Roots", "points",
        "$f$ has slope $5$ and meets the $y$-axis at $-5$. $g$ is the monic quadratic with roots $2$ and $4$.",
    ),
    M(
        -2, 1, 1, 5, 4, "Falling Line From Two Values", "points",
        "$f(0)=1$ and $f(2)=-3$. $g$ has no real roots: it equals $(x+1)(x+4)$.",
    ),
    M(
        6, 2, -1, 3, 4, "Printed Slope Against Peak Data", "points",
        "$f$ rises with slope $6$ through $(0,2)$. $g$ opens downwards with leading coefficient $-1$, "
        "equals $4$ at the origin, and has linear coefficient $3$.",
    ),
]

HYBRID = [
    M(
        5, -2, 1, -6, 8, "Formula Plus a Verbal Twin", "hybrid",
        "You are given $f(x)=5x-2$ in closed form. The matching quadratic $g$ is described only "
        "in words: it opens upwards, leading coefficient one, and vanishes at $x=2$ and $x=4$.",
    ),
    M(
        -2, 1, 1, 5, 4, "Named Line, Story Parabola", "hybrid",
        "Let $f(x)=-2x+1$. Separately, a warehouse residual is the square of stock days plus "
        "five times those days plus four — that residual is $g$.",
    ),
    M(
        6, 2, -1, 3, 4, "Closed Form Against a Peak Story", "hybrid",
        "$f(x)=6x+2$ is printed on the sheet. $g$ opens downwards, equals $4$ at the origin, "
        "has initial slope $3$, and leading coefficient $-1$.",
    ),
    M(
        1, 1, 1, -8, 15, "Unit Line Versus Roots in Prose", "hybrid",
        "Take $f(x)=x+1$. The quadratic $g$ is promised to have roots $3$ and $5$ with leading "
        "coefficient $1$.",
    ),
    M(
        3, 2, 1, -5, 6, "Printed Line, Factorable Story", "hybrid",
        "$f(x)=3x+2$ is given. $g$ is the monic quadratic that factors as $(x-2)(x-3)$.",
    ),
    M(
        4, -1, 1, -3, -10, "Half-Printed Pair", "hybrid",
        "Use $f(x)=4x-1$. The quadratic $g$ opens upwards, leading coefficient $1$, with roots "
        "$-2$ and $5$.",
    ),
    M(
        2, 3, 1, 0, -9, "Line Given, Even Parabola Told", "hybrid",
        "$f(x)=2x+3$ is explicit. $g$ is even about the $y$-axis, leading coefficient $1$, and "
        "equals $-9$ at the origin.",
    ),
    M(
        -3, 6, 2, -4, -6, "Verbal Scale Factor", "hybrid",
        "$f(x)=-3x+6$ is given. $g$ has roots $-1$ and $3$ but is scaled by leading coefficient $2$.",
    ),
]


def all_models() -> list[Model]:
    return FORMULA + TEXT + POINTS + HYBRID


def vertex(g):
    a, b = Poly(g, x).nth(2), Poly(g, x).nth(1)
    h = Rational(-b / (2 * a))
    k = Rational(expand(g.subs(x, h)))
    return h, k


def rewrite_coeffs(f, g):
    from sympy import Symbol as Sym
    from sympy import solve as sy_solve

    A, B, C = Sym("A"), Sym("B"), Sym("C")
    rhs = expand(A * f**2 + B * f + C)
    eqs = Poly(expand(g - rhs), x).coeffs()
    sol = sy_solve(eqs, [A, B, C], dict=True)[0]
    return Rational(sol[A]), Rational(sol[B]), Rational(sol[C])


def intersect_count(f, g) -> int:
    d = Rational(discriminant(Poly(expand(g - f), x)))
    if d > 0:
        return 2
    if d == 0:
        return 1
    return 0


def pool_easy(f, g, rng: random.Random):
    a_f = Rational(Poly(f, x).nth(1))
    a_g = Rational(Poly(g, x).nth(2))
    h, k = vertex(g)
    pool = []
    pool += [
        (f"The slope of $y=f(x)$ is ${F(a_f)}$.", True, {"kind": "slope", "m": a_f}),
        (f"The slope of $y=f(x)$ is ${F(-a_f if a_f != 0 else 1)}$.", False, {"kind": "slope", "m": a_f, "bad": -a_f if a_f != 0 else 1}),
        ("The parabola $g$ opens upwards.", B(a_g > 0), {"kind": "opens", "a": a_g}),
        ("The parabola $g$ opens downwards.", B(a_g < 0), {"kind": "opens", "a": a_g}),
    ]
    x0 = Rational(rng.choice([0, 1, 2]))
    val = Rational(expand(g.subs(x, x0)))
    pool += [
        (f"$g({F(x0)})={F(val)}$.", True, {"kind": "eval_g", "x0": x0, "val": val}),
        (f"$g({F(x0)})={F(val+3)}$.", False, {"kind": "eval_g", "x0": x0, "val": val, "bad": val + 3}),
        (f"The axis of symmetry of $g$ is $x={F(h)}$.", True, {"kind": "axis", "h": h}),
        (f"The axis of symmetry of $g$ is $x={F(h+1)}$.", False, {"kind": "axis", "h": h, "bad": h + 1}),
    ]
    f0 = Rational(expand(f.subs(x, 0)))
    pool += [
        (f"$f(0)={F(f0)}$.", True, {"kind": "eval_f", "val": f0}),
        (f"$f(0)={F(f0+1)}$.", False, {"kind": "eval_f", "val": f0, "bad": f0 + 1}),
    ]
    if a_g > 0:
        pool += [
            (f"The minimum value of $g$ is ${F(k)}$.", True, {"kind": "min", "k": k}),
            (f"The minimum value of $g$ is ${F(k+2)}$.", False, {"kind": "min", "k": k, "bad": k + 2}),
        ]
    else:
        pool += [
            (f"The maximum value of $g$ is ${F(k)}$.", True, {"kind": "max", "k": k}),
            (f"The maximum value of $g$ is ${F(k-2)}$.", False, {"kind": "max", "k": k, "bad": k - 2}),
        ]
    return pool


def pool_medium(f, g, rng: random.Random):
    a_g, b_g, c_g = [Rational(Poly(g, x).nth(i)) for i in (2, 1, 0)]
    h, k = vertex(g)
    sum_r, prod_r = Rational(-b_g / a_g), Rational(c_g / a_g)
    ydiff = Rational(expand((f - g).subs(x, 0)))
    n_int = intersect_count(f, g)
    rw = rewrite_coeffs(f, g)
    pool = []
    if a_g > 0:
        pool += [
            (f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${P(h, k)}$.", True, {"kind": "vertex_min", "h": h, "k": k}),
            (f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${P(h+1, k)}$.", False, {"kind": "vertex_min", "h": h, "k": k, "bad": True}),
        ]
    else:
        pool += [
            (f"The point on the graph of $g(x)$ with the highest $y$ coordinate is ${P(h, k)}$.", True, {"kind": "vertex_max", "h": h, "k": k}),
            (f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${P(h, k)}$.", False, {"kind": "vertex_min_impossible", "h": h, "k": k}),
        ]
    pool += [
        ("There exist values $a,b,c\\in\\mathbb{R}$ such that $g(x)=a f(x)^{2}+b f(x)+c$.", True, {"kind": "rewrite", "rw": rw}),
        (f"The sum of the roots of $g(x)$ is ${F(sum_r)}$.", True, {"kind": "vieta_sum", "s": sum_r}),
        (f"The sum of the roots of $g(x)$ is ${F(-sum_r if sum_r != 0 else 1)}$.", False, {"kind": "vieta_sum", "s": sum_r, "bad": -sum_r if sum_r != 0 else 1}),
        (f"The product of the roots of $g(x)$ is ${F(prod_r)}$.", True, {"kind": "vieta_prod", "p": prod_r}),
        ("The graph of $f(x)-g(x)$ intersects the $y$-axis at $y=0$.", ydiff == 0, {"kind": "diff_yint", "y": ydiff}),
        ("The graphs of $f(x)$ and $g(x)$ intersect more than twice.", False, {"kind": "intersect_gt2", "n": n_int}),
        (f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${n_int}$ point{'s' if n_int != 1 else ''}.", True, {"kind": "intersect_exact", "n": n_int}),
    ]
    return pool


def pool_hard(f, g, rng: random.Random):
    a_f = Rational(Poly(f, x).nth(1))
    b_f = Rational(Poly(f, x).nth(0))
    a_g, b_g, c_g = [Rational(Poly(g, x).nth(i)) for i in (2, 1, 0)]
    h, k = vertex(g)
    sum_r, prod_r = Rational(-b_g / a_g), Rational(c_g / a_g)
    n_int = intersect_count(f, g)
    rw = rewrite_coeffs(f, g)
    fg = expand(f.subs(x, g))
    gf = expand(g.subs(x, f))
    deg_fg = int(Poly(fg, x).degree())
    deg_gf = int(Poly(gf, x).degree())
    avg = Rational(expand((g.subs(x, 2) - g.subs(x, 0)) / 2))
    on_line = B(expand(f.subs(x, h) - k) == 0)
    fh = Rational(expand(f.subs(x, h)))
    lead_diff = Rational(Poly(expand(f - g), x).LC())
    disc = Rational(discriminant(Poly(g, x)))
    n_real = 2 if disc > 0 else (1 if disc == 0 else 0)
    nested = Rational(expand(g.subs(x, f.subs(x, 0))))
    nested_flip = Rational(expand(f.subs(x, g.subs(x, 0))))
    wrong_deg = 3 if deg_gf != 3 else 1
    # traps: confuse axis with Vieta sum, confuse vertex height with g(0), swap compositions
    axis_as_sum = B(h == sum_r)
    gap = Rational(fh - k)
    mid_roots = Rational(sum_r / 2)
    mid_is_axis = B(mid_roots == h)
    # wrong completing-the-square with flipped shift sign
    bad_h = -h if h != 0 else Rational(1)
    # distance between roots when real
    root_span = None
    if n_real == 2:
        roots = solve(g, x)
        root_span = Rational(abs(roots[0] - roots[1]))
    pool = [
        (f"Completing the square gives $g(x)={poly_lead(a_g)}{x_shift(h)}^{{2}}{signed_term(k)}$.", True, {"kind": "complete_sq", "a": a_g, "h": h, "k": k}),
        (f"Completing the square gives $g(x)={poly_lead(a_g)}{x_shift(bad_h)}^{{2}}{signed_term(k)}$.", False, {"kind": "complete_sq", "a": a_g, "h": h, "k": k, "bad_h": bad_h}),
        (f"The composition $g(f(x))$ has degree ${deg_gf}$.", True, {"kind": "comp_gf", "deg": deg_gf}),
        (f"The composition $f(g(x))$ has degree ${deg_fg}$.", True, {"kind": "comp_fg", "deg": deg_fg}),
        (f"The composition $g(f(x))$ has degree ${wrong_deg}$.", False, {"kind": "comp_gf", "deg": deg_gf, "bad": wrong_deg}),
        (f"Because $\\deg f=1$ and $\\deg g=2$, the composition $f(g(x))$ must have degree $3$.", False, {"kind": "comp_fg", "deg": deg_fg, "bad": 3}),
        (f"The average rate of change of $g$ on $[0,2]$ is ${F(avg)}$.", True, {"kind": "avg", "avg": avg}),
        (f"The average rate of change of $g$ on $[0,2]$ equals the slope of $f$, namely ${F(a_f)}$.", avg == a_f, {"kind": "avg_vs_slope", "avg": avg, "m": a_f}),
        ("The vertex of $g$ lies on the line $y=f(x)$.", on_line, {"kind": "vertex_on_f", "h": h, "k": k, "fh": fh}),
        (f"The vertical gap $f(h)-g(h)$ at the axis of $g$ equals ${F(gap)}$.", True, {"kind": "gap", "gap": gap, "h": h, "fh": fh, "k": k}),
        (f"The vertical gap $f(h)-g(h)$ at the axis of $g$ equals ${F(gap+a_f)}$.", False, {"kind": "gap", "gap": gap, "h": h, "fh": fh, "k": k, "bad": gap + a_f}),
        (f"Matching $g=Af^{2}+Bf+C$ forces $A={F(rw[0])}$, $B={F(rw[1])}$, $C={F(rw[2])}$.", True, {"kind": "rewrite_full", "rw": rw}),
        (f"Matching $g=Af^{2}+Bf+C$ forces $A={F(rw[0])}$.", True, {"kind": "rewrite_A", "rw": rw}),
        (f"Matching $g=Af^{2}+Bf+C$ forces $A={F(rw[0]*2)}$.", False, {"kind": "rewrite_A", "rw": rw, "bad": rw[0] * 2}),
        (f"Matching $g=Af^{2}+Bf+C$ forces $B={F(rw[1]+1)}$.", False, {"kind": "rewrite_B", "rw": rw, "bad": rw[1] + 1}),
        (f"By Vieta, the sum of roots of $g$ is ${F(b_g)}$ (forgetting the sign and the division by $a$).", False, {"kind": "vieta_trap", "s": sum_r, "bad": b_g}),
        (f"The axis of symmetry $x={F(h)}$ coincides with the Vieta sum of the roots.", axis_as_sum, {"kind": "axis_vs_sum", "h": h, "s": sum_r}),
        (f"The midpoint of the roots of $g$ is $x={F(mid_roots)}$, which equals the axis of symmetry.", mid_is_axis, {"kind": "mid_axis", "mid": mid_roots, "h": h}),
        ("Because $f-g$ looks cubic at a glance, the graphs can meet three times.", False, {"kind": "false_cubic", "n": n_int}),
        (f"The leading coefficient of $f-g$ is ${F(lead_diff)}$.", True, {"kind": "lead_diff", "lead": lead_diff}),
        (f"The sum of the roots of $g$ is ${F(sum_r)}$ and their product is ${F(prod_r)}$.", True, {"kind": "vieta_both", "s": sum_r, "p": prod_r}),
        (f"$g(f(0))={F(nested)}$.", True, {"kind": "nested_eval", "val": nested}),
        (f"$g(f(0))={F(nested+a_f)}$.", False, {"kind": "nested_eval", "val": nested, "bad": nested + a_f}),
        (f"$f(g(0))={F(nested_flip)}$.", True, {"kind": "nested_flip", "val": nested_flip}),
        (f"$f(g(0))=g(f(0))$, so composition order does not matter at $0$.", nested_flip == nested, {"kind": "nested_commute", "a": nested, "b": nested_flip}),
        (f"$g(x)=0$ has exactly ${n_real}$ distinct real root{'s' if n_real != 1 else ''}.", True, {"kind": "disc", "d": disc, "n": n_real}),
        ("A line meets a parabola at most twice, yet these two graphs meet more than twice.", False, {"kind": "contradict_meet", "n": n_int}),
        (f"Since $f$ has slope ${F(a_f)}$, translating $g$ by ${F(b_f)}$ units vertically would make $f-g$ constant.", False, {"kind": "false_const", "m": a_f, "b": b_f}),
        (f"The $y$-intercept of $g$ equals the vertex height, so $g(0)={F(k)}$.", B(c_g == k), {"kind": "yint_vs_vertex", "c": c_g, "k": k}),
    ]
    if root_span is not None:
        pool += [
            (f"The distance between the two real roots of $g$ is ${F(root_span)}$.", True, {"kind": "root_span", "span": root_span}),
            (f"The distance between the two real roots of $g$ is ${F(root_span + 1)}$.", False, {"kind": "root_span", "span": root_span, "bad": root_span + 1}),
        ]
    return pool


def pick_claims(f, g, rng: random.Random, difficulty: int):
    hard_kinds = {
        "complete_sq", "comp_gf", "comp_fg", "false_cubic", "nested_eval", "nested_flip",
        "nested_commute", "rewrite_A", "rewrite_B", "rewrite_full", "vieta_trap",
        "contradict_meet", "avg_vs_slope", "vertex_on_f", "gap", "axis_vs_sum",
        "mid_axis", "lead_diff", "vieta_both", "disc", "root_span", "false_const",
        "yint_vs_vertex", "avg",
    }
    if difficulty <= 2:
        pool = pool_easy(f, g, rng)
    elif difficulty == 3:
        pool = pool_medium(f, g, rng) + pool_easy(f, g, rng)
    elif difficulty == 4:
        # mostly hard, a little medium for variety
        pool = pool_hard(f, g, rng) + pool_medium(f, g, rng)[:4]
    else:
        # 5/5: hard only — no easy slope/opens fillers
        pool = pool_hard(f, g, rng)

    rng.shuffle(pool)
    chosen = []
    seen_kind, seen_text = set(), set()
    for stmt, truth, meta in pool:
        head = meta["kind"].split("_")[0]
        if stmt in seen_text:
            continue
        if difficulty <= 2 and meta["kind"] in hard_kinds:
            continue
        # for 5/5 prefer distinct hard heads; skip medium leftovers if any
        if difficulty >= 5 and meta["kind"] not in hard_kinds and len(chosen) < 4:
            continue
        if head in seen_kind and len(chosen) < 4:
            continue
        chosen.append((stmt, B(truth), meta))
        seen_kind.add(head)
        seen_text.add(stmt)
        if len(chosen) == 5:
            break
    for item in pool:
        if len(chosen) == 5:
            break
        if item[0] in seen_text:
            continue
        chosen.append((item[0], B(item[1]), item[2]))
        seen_text.add(item[0])
    while len(chosen) < 5:
        s = f"The graphs of $f$ and $g$ intersect at exactly ${30 + len(chosen)}$ points."
        if s not in seen_text:
            chosen.append((s, False, {"kind": "intersect_pad", "n": 30 + len(chosen)}))
            seen_text.add(s)
    chosen = chosen[:5]
    truths = sum(1 for _, t, _ in chosen if t)
    if truths == 0:
        # keep difficulty: use a true hard claim, not a slope giveaway
        h, k = vertex(g)
        a_g = Rational(Poly(g, x).nth(2))
        chosen[0] = (
            f"Completing the square gives $g(x)={poly_lead(a_g)}{x_shift(h)}^{{2}}{signed_term(k)}$.",
            True,
            {"kind": "complete_sq", "a": a_g, "h": h, "k": k},
        )
    elif truths == 5:
        chosen[4] = ("The graphs of $f(x)$ and $g(x)$ intersect more than twice.", False, {"kind": "intersect_gt2", "n": intersect_count(f, g)})
    # final unique
    out, seen = [], set()
    for item in chosen:
        if item[0] in seen:
            continue
        seen.add(item[0])
        out.append(item)
    while len(out) < 5:
        s = f"The graphs of $f$ and $g$ intersect at exactly ${40 + len(out)}$ points."
        out.append((s, False, {"kind": "intersect_pad"}))
    return out[:5]


def explain(letter, stmt, truth, meta, f, g) -> str:
    kind = meta["kind"]
    a_g = Rational(Poly(g, x).nth(2))
    b_g = Rational(Poly(g, x).nth(1))
    h, k = vertex(g)
    lines = [f"**{letter}.** → {'True' if truth else 'False'}", ""]

    def end(ok: bool):
        lines.append(f"so the statement is {'True' if ok else 'False'}.")

    if kind == "slope":
        lines += ["Read the coefficient of $x$:", "", "$$", f"f(x)={L(f)}", "$$", ""]
        if "bad" in meta:
            lines += [f"The slope is ${F(meta['m'])}$, not ${F(meta['bad'])}$,", ""]
            end(False)
        else:
            lines += [f"The slope is ${F(meta['m'])}$,", ""]
            end(True)
    elif kind == "opens":
        lines += ["Leading coefficient:", "", "$$", f"a={F(a_g)}", "$$", "", "Upwards iff $a>0$.", ""]
        end(truth)
    elif kind == "eval_g":
        lines += [f"Substitute $x={F(meta['x0'])}$:", "", "$$", f"g({F(meta['x0'])})={F(meta['val'])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "eval_f":
        lines += ["Evaluate at the origin:", "", "$$", f"f(0)={F(meta['val'])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "axis":
        lines += ["Axis $x=-b/(2a)$:", "", "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$", ""]
        end("bad" not in meta)
    elif kind in ("min", "max"):
        lines += ["Vertex height:", "", "$$", f"x={F(h)}\\qquad g({F(h)})={F(k)}", "$$", ""]
        if "bad" in meta:
            lines += [f"True extreme ${F(k)}$, not ${F(meta['bad'])}$,", ""]
            end(False)
        else:
            end(True)
    elif kind in ("vertex_min", "vertex_max", "vertex_min_impossible"):
        lines += ["Vertex:", "", "$$", f"x={F(h)}\\qquad g({F(h)})={F(k)}", "$$", ""]
        if kind == "vertex_min_impossible" or (kind == "vertex_min" and a_g < 0):
            lines += ["With $a<0$ there is no lowest point,", ""]
            end(False)
        elif meta.get("bad"):
            lines += ["The claimed point is not the vertex,", ""]
            end(False)
        else:
            end(True)
    elif kind == "rewrite":
        A, B, C = meta["rw"]
        lines += ["Since $\\deg f=1$, $\\{1,f,f^{2}\\}$ spans degree $\\le 2$. Matching gives", "", "$$", f"A={F(A)},\\ B={F(B)},\\ C={F(C)}", "$$", ""]
        end(True)
    elif kind == "rewrite_full":
        A, B, C = meta["rw"]
        lines += ["Match coefficients of $Af^{2}+Bf+C$ against $g$:", "", "$$", f"A={F(A)},\\ B={F(B)},\\ C={F(C)}", "$$", ""]
        end(True)
    elif kind == "rewrite_A":
        lines += ["Match the $x^{2}$ coefficient in $Af^{2}+Bf+C$:", "", "$$", f"A={F(meta['rw'][0])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "rewrite_B":
        lines += ["Match the linear coefficient in $Af^{2}+Bf+C$:", "", "$$", f"B={F(meta['rw'][1])}", "$$", ""]
        end(False)
    elif kind == "vieta_sum":
        lines += ["Sum $=-b/a$:", "", "$$", f"-\\frac{{{F(b_g)}}}{{{F(a_g)}}}={F(meta['s'])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "vieta_prod":
        c_g = Rational(Poly(g, x).nth(0))
        lines += ["Product $=c/a$:", "", "$$", f"\\frac{{{F(c_g)}}}{{{F(a_g)}}}={F(meta['p'])}", "$$", ""]
        end(True)
    elif kind == "vieta_both":
        lines += ["Both Vieta formulas:", "", "$$", f"\\mathrm{{sum}}={F(meta['s'])}\\qquad \\mathrm{{product}}={F(meta['p'])}", "$$", ""]
        end(True)
    elif kind == "vieta_trap":
        lines += ["Sum is $-b/a$, not the raw $b$:", "", "$$", f"-\\frac{{{F(b_g)}}}{{{F(a_g)}}}={F(meta['s'])}", "$$", ""]
        end(False)
    elif kind == "axis_vs_sum":
        lines += [
            "Axis $x=-b/(2a)$ versus Vieta sum $-b/a$:", "", "$$",
            f"x={F(meta['h'])}\\qquad \\mathrm{{sum}}={F(meta['s'])}", "$$", "",
            "These coincide only in special cases (often when the sum is twice the axis).", "",
        ]
        end(truth)
    elif kind == "mid_axis":
        lines += [
            "Midpoint of roots is half the Vieta sum; axis is $-b/(2a)$:", "", "$$",
            f"\\mathrm{{mid}}={F(meta['mid'])}\\qquad \\mathrm{{axis}}={F(meta['h'])}", "$$", "",
        ]
        end(truth)
    elif kind == "diff_yint":
        lines += ["$y$-intercept of $f-g$:", "", "$$", f"(f-g)(0)={F(meta['y'])}", "$$", ""]
        end(truth)
    elif kind in ("intersect_gt2", "intersect_exact", "false_cubic", "contradict_meet", "intersect_pad"):
        n = meta.get("n", intersect_count(f, g))
        lines += ["Solve $f=g$:", "", "$$", f"{L(expand(g - f))}=0", "$$", ""]
        d = Rational(discriminant(Poly(expand(g - f), x)))
        lines += [f"$\\Delta={F(d)}$ yields ${n}$ real meeting(s). A line and a parabola meet at most twice.", ""]
        end(truth)
    elif kind == "complete_sq":
        a, hh, kk = meta["a"], meta["h"], meta["k"]
        lines += ["Vertex form:", "", "$$", f"g(x)={poly_lead(a)}{x_shift(hh)}^{{2}}{signed_term(kk)}", "$$", ""]
        if "bad" in meta or "bad_h" in meta:
            lines += ["The claimed completed-square form does not match this vertex form,", ""]
            end(False)
        else:
            end(True)
    elif kind in ("comp_gf", "comp_fg"):
        comp = expand(g.subs(x, f) if kind == "comp_gf" else f.subs(x, g))
        name = "g(f(x))" if kind == "comp_gf" else "f(g(x))"
        deg = int(Poly(comp, x).degree())
        lines += [f"Expand ${name}$:", "", "$$", L(comp), "$$", "", f"Degree ${deg}$ (not the naive sum of degrees when the outer map is linear).", ""]
        end("bad" not in meta)
    elif kind in ("avg", "avg_vs_slope"):
        g0, g2 = Rational(expand(g.subs(x, 0))), Rational(expand(g.subs(x, 2)))
        lines += ["Difference quotient on $[0,2]$:", "", "$$", f"\\frac{{g(2)-g(0)}}{{2}}=\\frac{{{F(g2)}-{F(g0)}}}{{2}}={F(meta['avg'])}", "$$", ""]
        if kind == "avg_vs_slope":
            lines += [f"Compare with slope of $f$, namely ${F(meta['m'])}$.", ""]
            end(truth)
        else:
            end(True)
    elif kind == "vertex_on_f":
        lines += [f"Vertex ${P(meta['h'], meta['k'])}$ vs", "", "$$", f"f({F(meta['h'])})={F(meta['fh'])}", "$$", ""]
        end(truth)
    elif kind == "gap":
        lines += [
            f"At the axis $x={F(meta['h'])}$:", "", "$$",
            f"f({F(meta['h'])})={F(meta['fh'])}\\qquad g({F(meta['h'])})={F(meta['k'])}", "$$", "",
            f"Difference ${F(meta['gap'])}$.", "",
        ]
        end("bad" not in meta)
    elif kind == "lead_diff":
        lines += ["Expand $f-g$:", "", "$$", L(expand(f - g)), "$$", ""]
        end(True)
    elif kind == "nested_eval":
        lines += ["Inside-out:", "", "$$", f"f(0)={F(Rational(expand(f.subs(x, 0))))}", "$$", "", "$$", f"g(f(0))={F(meta['val'])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "nested_flip":
        lines += ["Other order:", "", "$$", f"g(0)={F(Rational(expand(g.subs(x, 0))))}", "$$", "", "$$", f"f(g(0))={F(meta['val'])}", "$$", ""]
        end(True)
    elif kind == "nested_commute":
        lines += [
            "Compare both nestings at $0$:", "", "$$",
            f"g(f(0))={F(meta['a'])}\\qquad f(g(0))={F(meta['b'])}", "$$", "",
        ]
        end(truth)
    elif kind == "disc":
        lines += ["Discriminant of $g$:", "", "$$", f"\\Delta={F(meta['d'])}", "$$", "", f"Exactly ${meta['n']}$ distinct real root(s),", ""]
        end(True)
    elif kind == "root_span":
        lines += ["With two real roots, distance $=\\sqrt{\\Delta}/|a|$:", "", "$$", f"\\mathrm{{span}}={F(meta['span'])}", "$$", ""]
        end("bad" not in meta)
    elif kind == "false_const":
        lines += [
            "A vertical shift of $g$ changes only the constant term of $f-g$; the $x$ and $x^{2}$ "
            "pieces remain, so $f-g$ cannot become constant.", "",
        ]
        end(False)
    elif kind == "yint_vs_vertex":
        lines += [
            "Compare $g(0)$ with the vertex height:", "", "$$",
            f"g(0)={F(meta['c'])}\\qquad g(h)={F(meta['k'])}", "$$", "",
        ]
        end(truth)
    else:
        lines += ["Compare the claim with the recovered models.", ""]
        end(truth)
    return "\n".join(lines)


def overview(model: Model) -> str:
    f, g = model.f, model.g
    h, k = vertex(g)
    a_g, b_g, c_g = [Rational(Poly(g, x).nth(i)) for i in (2, 1, 0)]
    sum_r, prod_r = Rational(-b_g / a_g), Rational(c_g / a_g)
    n_int = intersect_count(f, g)
    rw = rewrite_coeffs(f, g)
    parts = []
    if model.stem_kind != "formula" and model.scene:
        parts += ["**Part 0: Recover the models from the stem.**", "", model.scene, "", "Translating the stem into formulas gives"]
    else:
        parts += ["The stem gives the models directly:"]
    parts += ["", "$$", f"f(x)={L(f)}\\qquad g(x)={L(g)}", "$$", "",
              "**Part 1: Shared facts.**", "", "$$",
              f"\\mathrm{{vertex}}=\\left({F(h)},{F(k)}\\right)\\qquad \\mathrm{{sum}}={F(sum_r)}\\qquad \\mathrm{{product}}={F(prod_r)}",
              "$$", "", "**Part 2: Difference and meetings.**", "", "$$",
              f"f-g={L(expand(f - g))}\\qquad \\#\\mathrm{{intersections}}={n_int}", "$$", "",
              "**Part 3: Linear basis.**", "",
              f"Because $\\deg f=1$, write $g=Af^{2}+Bf+C$ with $A={F(rw[0])}$, $B={F(rw[1])}$, $C={F(rw[2])}$.",
              "", f"**Answer.** vertex $={P(h, k)}$ | sum $={F(sum_r)}$ | product $={F(prod_r)}$ | meetings $={n_int}$"]
    return "\n".join(parts)


def build_context(model: Model) -> str:
    if model.stem_kind == "formula":
        return (
            f"Consider the linear and quadratic functions $f(x)={L(model.f)}$ and "
            f"$g(x)={L(model.g)}$. Evaluate each statement. Mark it TRUE or FALSE."
        )
    if model.stem_kind == "text":
        return (
            f"{model.scene} First recover the formulas for $f$ and $g$ from the text, "
            f"then evaluate each statement. Mark it TRUE or FALSE."
        )
    if model.stem_kind == "points":
        return (
            f"{model.scene} Rebuild $f$ and $g$ from these facts, then evaluate each statement. "
            f"Mark it TRUE or FALSE."
        )
    return (
        f"{model.scene} Recover any missing formula, then evaluate each statement. "
        f"Mark it TRUE or FALSE."
    )


def assign_slots(models: list[Model], rng: random.Random) -> list[tuple[Model, int]]:
    formula = [m for m in models if m.stem_kind == "formula"]
    text = [m for m in models if m.stem_kind == "text"]
    points = [m for m in models if m.stem_kind == "points"]
    hybrid = [m for m in models if m.stem_kind == "hybrid"]
    for bucket in (formula, text, points, hybrid):
        rng.shuffle(bucket)

    photo = next(m for m in formula if Poly(m.f, x).nth(1) == 4 and Poly(m.f, x).nth(0) == 2)
    formula = [m for m in formula if m is not photo]
    slots: list[tuple[Model, int]] = [(photo, 3)]

    # Target mix among remaining 49, with hard diffs biased to text/points/hybrid
    plan = []
    # difficulties: need 1×9 more of 3, and 10 of each 1,2,4,5
    diffs = [1] * 10 + [2] * 10 + [3] * 9 + [4] * 10 + [5] * 10
    rng.shuffle(diffs)
    for d in diffs:
        if d >= 4:
            kind = rng.choice(["text", "text", "text", "points", "hybrid", "hybrid", "formula"])
        elif d <= 2:
            kind = rng.choice(["formula", "formula", "formula", "text", "points"])
        else:
            kind = rng.choice(["formula", "text", "points", "hybrid", "formula"])
        plan.append((kind, d))

    idx = {"formula": 0, "text": 0, "points": 0, "hybrid": 0}
    bags = {"formula": formula, "text": text, "points": points, "hybrid": hybrid}
    used: set[int] = set()

    def take(kind: str) -> Model:
        order = [kind, "text", "hybrid", "points", "formula"]
        for k in order:
            bag = bags[k]
            start = idx[k]
            for offset in range(len(bag)):
                i = (start + offset) % len(bag)
                m = bag[i]
                mid = id(m)
                if mid in used:
                    continue
                used.add(mid)
                idx[k] = i + 1
                return m
        # last resort: reuse formula models
        m = bags["formula"][idx["formula"] % len(bags["formula"])]
        idx["formula"] += 1
        return m

    for kind, d in plan:
        slots.append((take(kind), d))
    assert len(slots) == 50
    assert Counter(d for _, d in slots) == Counter({1: 10, 2: 10, 3: 10, 4: 10, 5: 10})
    return slots


def build_task(idx: int, model: Model, difficulty: int, rng: random.Random) -> dict:
    claims = pick_claims(model.f, model.g, rng, difficulty)
    letters = "ABCDE"
    return {
        "id": f"math-7-{idx + 1}",
        "case_id": f"MATH 7.{idx + 1:02d}",
        "title": model.title,
        "context": build_context(model),
        "statements": [c[0] for c in claims],
        "answer_key": [c[1] for c in claims],
        "tactical_explanations": [
            explain(letters[i], claims[i][0], claims[i][1], claims[i][2], model.f, model.g)
            for i in range(5)
        ],
        "difficulty_level": f"{difficulty}/5",
        "sort_order": idx + 1,
        "solution_overview": overview(model),
        "subsection": "7",
        "placeholder": False,
        "stem_kind": model.stem_kind,
    }


def patch_photo(task: dict) -> dict:
    task = dict(task)
    f, g = 4 * x + 2, x**2 - x - 2
    task.update(
        {
            "title": "Vertex, Linear Rewrite, and Crossings of a Line and a Parabola",
            "context": (
                "Consider the following linear and quadratic functions: "
                "$f(x) = 4x + 2$ and $g(x) = x^{2} - x - 2$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            "statements": [
                "The point on the graph of $g(x)$ with the lowest $y$ coordinate is $\\left(\\frac{1}{2}, -\\frac{9}{4}\\right)$.",
                "There exist values $a, b, c \\in \\mathbb{R}$ such that $g(x) = a f(x)^{2} + b f(x) + c$.",
                "The sum of the roots of function $g(x)$ is $-1$.",
                "The graph of the function $f(x) - g(x)$ intersects with the $y$-axis at $y = 0$.",
                "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.",
            ],
            "answer_key": [True, True, False, False, False],
            "difficulty_level": "3/5",
            "stem_kind": "formula",
            "tactical_explanations": [
                "**A.** → True\n\nVertex abscissa $-b/(2a)$:\n\n$$\nx=-\\frac{-1}{2}=\\frac{1}{2}\n$$\n\n$$\ng\\left(\\frac{1}{2}\\right)=\\frac{1}{4}-\\frac{1}{2}-2=-\\frac{9}{4}\n$$\n\nWith $a>0$ this is the lowest point, so the statement is True.",
                "**B.** → True\n\n$\\{1,f,f^{2}\\}$ spans degree $\\le 2$. Matching recovers $a=1/16$, $b=-1/2$, $c=-5/4$, so the statement is True.",
                "**C.** → False\n\nSum $=-b/a=1$, not $-1$, so the statement is False.",
                "**D.** → False\n\n$(f-g)(0)=4\\neq 0$, so the statement is False.",
                "**E.** → False\n\n$f=g$ is quadratic with $\\Delta=41>0$, hence exactly two meetings, so the statement is False.",
            ],
            "solution_overview": overview(Model(f, g, task["title"], "formula")),
        }
    )
    return task


def main():
    rng = random.Random(17)
    slots = assign_slots(all_models(), rng)
    tasks = [build_task(i, m, d, rng) for i, (m, d) in enumerate(slots)]
    tasks[0] = patch_photo(tasks[0])

    for t in tasks:
        assert len(set(t["statements"])) == 5, t["case_id"]
        assert 1 <= sum(1 for x in t["answer_key"] if x) <= 4, (t["case_id"], t["answer_key"])
        assert len(t["tactical_explanations"]) == 5

    diffs = Counter(t["difficulty_level"] for t in tasks)
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert diffs == Counter({f"{d}/5": 10 for d in range(1, 6)}), diffs

    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("difficulties:", dict(sorted(diffs.items())))
    print("stem_kinds:", dict(kinds))
    print("true-counts:", dict(Counter(sum(1 for x in t["answer_key"] if x) for t in tasks)))
    # show a couple of text stems
    for t in tasks:
        if t["stem_kind"] == "text":
            print("TEXT sample:", t["case_id"], t["difficulty_level"], t["context"][:100], "...")
            break
    for t in tasks:
        if t["difficulty_level"] == "5/5" and t["stem_kind"] != "formula":
            print("HARD sample:", t["case_id"], t["stem_kind"], t["statements"][0][:80])
            break


if __name__ == "__main__":
    main()
