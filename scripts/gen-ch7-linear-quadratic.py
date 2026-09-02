#!/usr/bin/env python3
"""Generate Chapter 7 — Linear and quadratic functions (no subtopics).

Exam-style stems like Item 29: given f linear and g quadratic, five multi-hop
True/False claims. Difficulties spread across 1/5 … 5/5. Explanations follow
MATH 13.18 rhythm.
"""

from __future__ import annotations

import json
import random
from dataclasses import dataclass
from fractions import Fraction
from pathlib import Path

from sympy import Eq, Poly, Rational, Symbol, discriminant, expand, latex, solve, symbols

x = Symbol("x")
OUT = Path("/workspace/src/data/math-ch7-linear-quadratic.json")


def F(n, d=1) -> Rational:
    return Rational(n, d)


def L(expr) -> str:
    """KaTeX-friendly latex without spaces around = in fractions."""
    return latex(expr)


def frac_tex(r: Rational | Fraction | int) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(r.p)
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


@dataclass
class Pair:
    f: object  # sympy expr
    g: object
    title: str
    seed_note: str


def make_pairs() -> list[Pair]:
    """Diverse (f, g) pairs with clean arithmetic."""
    pairs: list[Pair] = []

    specs = [
        # (f coeffs ax+b, g coeffs a,b,c for ax^2+bx+c, title)
        ((4, 2), (1, -1, -2), "Vertex, Rewrite, and Crossing of a Line and a Parabola"),
        ((2, -1), (1, -3, 2), "Roots, Axis, and a Linear Rewrite Check"),
        ((3, 1), (1, 2, -3), "Opening Direction, Intercepts, and Meeting Points"),
        ((-2, 4), (1, -4, 3), "Minimum Point and the Difference Graph"),
        ((5, -5), (2, -4, -6), "Scaled Parabola Against a Steep Line"),
        ((1, 3), (1, 0, -4), "Even Parabola and a Shifted Line"),
        ((-1, 2), (1, 1, -6), "Downward Line Through an Upward Parabola"),
        ((4, -2), (1, -5, 6), "Factorable Quadratic and a Parallel Slope Test"),
        ((3, -6), (1, -2, -8), "Wide Roots and a Translation Claim"),
        ((2, 4), (-1, 2, 3), "Downward Parabola Against an Increasing Line"),
        ((6, 0), (1, -6, 5), "Through the Origin Line and Twin Roots"),
        ((-3, 0), (1, 4, 3), "Negative Slope Line and a Vertex Below Zero"),
        ((1, -4), (1, -1, -12), "Large Product of Roots Versus a Shallow Line"),
        ((5, 1), (2, 0, -8), "Even Quadratic Scaled by Two"),
        ((-4, 8), (1, -3, -10), "Intercept Hunt on f Minus g"),
        ((2, -6), (1, 3, -4), "Positive Slope and a Left-Shifted Vertex"),
        ((7, -7), (1, -2, -15), "Steep Line Crossing a Wide Parabola"),
        ((1, 1), (-1, 4, -3), "Downward Opening and a Unit-Slope Line"),
        ((3, 0), (1, -8, 12), "Proportional Line and Integer Roots"),
        ((-5, 10), (2, -2, -12), "Scaled Quadratic Against a Falling Line"),
        ((4, 0), (1, 2, -8), "Through Origin and an Axis at Minus One"),
        ((2, 1), (1, -6, 5), "Near-Integer Vertex Check"),
        ((-2, -4), (1, 0, -9), "Even Parabola Shifted Down"),
        ((6, -3), (1, 1, -2), "Half-Integer Vertex and Composition Span"),
        ((1, -2), (2, -8, 6), "Scaled Factorable Quadratic"),
        ((3, 3), (1, -4, 4), "Perfect Square Parabola and a Rising Line"),
        ((-1, 5), (1, -5, 4), "Falling Line and Twin Positive Roots"),
        ((8, -4), (1, -1, -6), "Steep Positive Line and a Mid Vertex"),
        ((2, 0), (-1, 0, 4), "Even Downward Parabola Against y Equals Two x"),
        ((5, -10), (1, 6, 5), "Negative Vertex Region and a Steep Line"),
        ((4, 1), (1, -7, 10), "Integer Roots Two and Five"),
        ((-3, 6), (1, 2, -15), "Crossing Count for a Falling Line"),
        ((1, 0), (1, -3, -4), "Identity Line Against a Shifted Parabola"),
        ((2, 5), (1, 4, 3), "No Real Roots Trap Against a Rising Line"),
        ((-6, 3), (1, -2, 1), "Perfect Square and a Steep Fall"),
        ((3, -1), (2, -6, -8), "Scaled Quadratic With Twin Roots"),
        ((4, -8), (1, 0, -1), "Even Unit Parabola and a Parallel-Looking Line"),
        ((1, 4), (-1, 2, 8), "Downward Parabola Peak Claim"),
        ((5, 0), (1, -4, -5), "Proportional Line and Product of Roots"),
        ((-2, 1), (1, 5, 4), "Left Vertex and a Falling Line"),
        ((7, 1), (1, -6, 8), "Integer Roots Two and Four"),
        ((2, -3), (1, 1, -6), "Axis Claim Versus Vieta Sum"),
        ((-4, -2), (2, 0, -18), "Even Scaled Parabola Deep Minimum"),
        ((3, 2), (1, -5, 6), "Classic Factorable Pair"),
        ((1, -1), (1, 3, -10), "Shallow Line and Distant Roots"),
        ((6, 2), (-1, 3, 4), "Downward Opening Intercept Mix"),
        ((-1, 0), (1, -2, -3), "Negative Identity Line"),
        ((4, 3), (1, -8, 15), "Roots Three and Five"),
        ((2, 2), (1, -1, -20), "Large Negative Constant Term"),
        ((5, -2), (1, 4, -12), "Mixed-Sign Linear Against Twin Roots"),
    ]

    for (fa, fb), (ga, gb, gc), title in specs:
        f = fa * x + fb
        g = ga * x**2 + gb * x + gc
        pairs.append(Pair(f=f, g=g, title=title, seed_note=f"f={fa}x+{fb}; g={ga}x^2+{gb}x+{gc}"))
    return pairs


def poly_coeffs(expr, deg):
    p = Poly(expand(expr), x)
    return [p.nth(i) for i in range(deg, -1, -1)]


def can_rewrite_g_in_f(f, g) -> bool:
    """True iff g lies in span{1, f, f^2} (always when deg f = 1 and deg g <= 2)."""
    pf = Poly(expand(f), x)
    pg = Poly(expand(g), x)
    if pf.degree() != 1:
        return False
    if pg.degree() > 2:
        return False
    # Solve g = a f^2 + b f + c by matching coefficients
    a, b, c = symbols("a b c")
    rhs = expand(a * f**2 + b * f + c)
    eqs = Poly(expand(g - rhs), x).coeffs()
    sol = solve(eqs, [a, b, c], dict=True)
    return bool(sol)


def rewrite_coeffs(f, g):
    a, b, c = symbols("a b c")
    rhs = expand(a * f**2 + b * f + c)
    eqs = Poly(expand(g - rhs), x).coeffs()
    sol = solve(eqs, [a, b, c], dict=True)[0]
    return sol[a], sol[b], sol[c]


def vertex(g):
    pg = Poly(g, x)
    a, b, c = pg.nth(2), pg.nth(1), pg.nth(0)
    h = -b / (2 * a)
    k = g.subs(x, h)
    return Rational(h), Rational(expand(k))


def roots_of(g):
    return solve(Eq(g, 0), x)


def y_intercept(expr):
    return Rational(expand(expr.subs(x, 0)))


def intersection_count(f, g) -> int:
    sols = solve(Eq(f, g), x)
    # count real distinct
    real = []
    for s in sols:
        if s.is_real is False:
            continue
        if s not in real:
            real.append(s)
    # also check discriminant path for quadratics
    diff = expand(g - f)
    d = discriminant(Poly(diff, x))
    if d < 0:
        return 0
    if d == 0:
        return 1
    return 2 if Poly(diff, x).degree() == 2 else len(real)


def fmt_point(h, k) -> str:
    return f"\\left({frac_tex(h)}, {frac_tex(k)}\\right)"


def statement_vertex_lowest(g, true: bool) -> tuple[str, bool, str]:
    h, k = vertex(g)
    a = Poly(g, x).nth(2)
    if a <= 0:
        # for downward, "lowest" is false conceptually; flip to highest wording later
        pass
    if true:
        claim = f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(h, k)}$."
        if a < 0:
            # lowest does not exist (unbounded below) — force false claim using the vertex as if it were min
            claim = f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(h, k)}$."
            true = False
            why = "downward"
        else:
            why = "ok"
        return claim, true, why
    # false: flip sign of k or shift h
    bad_h, bad_k = h + 1, k
    claim = f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(bad_h, bad_k)}$."
    return claim, False, "shifted"


def pybool(v) -> bool:
    return bool(v)


# Claim-kind bands used to tilt selection by difficulty (1 = easiest).
EASY_KINDS = {"slope", "opens", "eval", "axis", "disc"}
MEDIUM_KINDS = {"vertex", "min", "max", "vieta", "diff", "intersect"}
HARD_KINDS = {"rewrite", "comp", "avg", "common", "lead", "vertex_on"}


def kind_band(kind: str) -> str:
    head = kind.split("_")[0]
    if kind.startswith("vertex_on") or head in {"rewrite", "comp", "avg", "common", "lead"}:
        return "hard"
    if head in {"vertex", "min", "max", "vieta", "diff", "intersect"}:
        return "medium"
    return "easy"


def build_claims(
    f, g, rng: random.Random, difficulty: int = 3
) -> list[tuple[str, bool, dict]]:
    """Return 5 (statement, truth, meta) with diverse multi-hop checks."""
    h, k = vertex(g)
    a_g, b_g, c_g = Poly(g, x).nth(2), Poly(g, x).nth(1), Poly(g, x).nth(0)
    a_f, b_f = Poly(f, x).nth(1), Poly(f, x).nth(0)
    rs = roots_of(g)
    real_roots = [r for r in rs if r.is_real is not False]
    sum_roots = Rational(-b_g / a_g)
    prod_roots = Rational(c_g / a_g)
    diff = expand(f - g)
    y_diff = y_intercept(diff)
    n_int = intersection_count(f, g)
    can_rw = can_rewrite_g_in_f(f, g)
    rw = rewrite_coeffs(f, g) if can_rw else None
    disc = Rational(discriminant(Poly(g, x)))

    pool: list[tuple[str, bool, dict]] = []

    # A-family: vertex lowest / highest
    if pybool(a_g > 0):
        pool.append(
            (
                f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(h, k)}$.",
                True,
                {"kind": "vertex_min", "h": h, "k": k},
            )
        )
        pool.append(
            (
                f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(h + 1, k)}$.",
                False,
                {"kind": "vertex_min", "h": h, "k": k, "bad": True},
            )
        )
        pool.append(
            (
                f"The minimum value of $g(x)$ is ${frac_tex(k + 1)}$.",
                False,
                {"kind": "min_value", "k": k},
            )
        )
        pool.append(
            (
                f"The minimum value of $g(x)$ is ${frac_tex(k)}$.",
                True,
                {"kind": "min_value", "k": k},
            )
        )
    else:
        pool.append(
            (
                f"The point on the graph of $g(x)$ with the highest $y$ coordinate is ${fmt_point(h, k)}$.",
                True,
                {"kind": "vertex_max", "h": h, "k": k},
            )
        )
        pool.append(
            (
                f"The point on the graph of $g(x)$ with the lowest $y$ coordinate is ${fmt_point(h, k)}$.",
                False,
                {"kind": "vertex_min_impossible", "h": h, "k": k},
            )
        )
        pool.append(
            (
                f"The maximum value of $g(x)$ is ${frac_tex(k)}$.",
                True,
                {"kind": "max_value", "k": k},
            )
        )

    # rewrite span
    pool.append(
        (
            "There exist values $a, b, c \\in \\mathbb{R}$ such that $g(x) = a f(x)^{2} + b f(x) + c$.",
            pybool(can_rw),
            {"kind": "rewrite", "rw": rw},
        )
    )

    # Vieta sum
    pool.append(
        (
            f"The sum of the roots of $g(x)$ is ${frac_tex(sum_roots)}$.",
            True,
            {"kind": "vieta_sum", "s": sum_roots},
        )
    )
    pool.append(
        (
            f"The sum of the roots of $g(x)$ is ${frac_tex(-sum_roots)}$.",
            pybool(sum_roots == 0),  # only true when sum is 0 (then -sum equals sum)
            {"kind": "vieta_sum", "s": sum_roots, "claimed": -sum_roots},
        )
    )
    # if -sum == sum (sum=0), replace with a clearly false claim
    if pybool(sum_roots == 0):
        pool[-1] = (
            f"The sum of the roots of $g(x)$ is ${frac_tex(1)}$.",
            False,
            {"kind": "vieta_sum", "s": sum_roots, "claimed": Rational(1)},
        )

    # Vieta product
    pool.append(
        (
            f"The product of the roots of $g(x)$ is ${frac_tex(prod_roots)}$.",
            True,
            {"kind": "vieta_prod", "p": prod_roots},
        )
    )
    pool.append(
        (
            f"The product of the roots of $g(x)$ is ${frac_tex(-prod_roots if prod_roots != 0 else Rational(2))}$.",
            False,
            {"kind": "vieta_prod", "p": prod_roots, "claimed": -prod_roots if prod_roots != 0 else Rational(2)},
        )
    )

    # y-intercept of f-g
    pool.append(
        (
            f"The graph of $f(x) - g(x)$ intersects the $y$-axis at $y = {frac_tex(y_diff)}$.",
            True,
            {"kind": "diff_yint", "y": y_diff},
        )
    )
    pool.append(
        (
            "The graph of the function $f(x) - g(x)$ intersects with the $y$-axis at $y = 0$.",
            pybool(y_diff == 0),
            {"kind": "diff_yint", "y": y_diff, "claimed": Rational(0)},
        )
    )

    # intersections
    pool.append(
        (
            "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.",
            False,
            {"kind": "intersect_gt2", "n": n_int},
        )
    )
    pool.append(
        (
            f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${n_int}$ point{'s' if n_int != 1 else ''}.",
            True,
            {"kind": "intersect_exact", "n": n_int},
        )
    )
    if n_int != 1:
        pool.append(
            (
                "The graphs of $f(x)$ and $g(x)$ intersect at exactly one point.",
                False,
                {"kind": "intersect_exact", "n": n_int, "claimed": 1},
            )
        )
    if n_int != 0:
        pool.append(
            (
                "The graphs of $f(x)$ and $g(x)$ never intersect.",
                False,
                {"kind": "intersect_exact", "n": n_int, "claimed": 0},
            )
        )
    else:
        pool.append(
            (
                "The graphs of $f(x)$ and $g(x)$ never intersect.",
                True,
                {"kind": "intersect_exact", "n": 0},
            )
        )

    # axis of symmetry
    pool.append(
        (
            f"The axis of symmetry of $g(x)$ is the line $x = {frac_tex(h)}$.",
            True,
            {"kind": "axis", "h": h},
        )
    )
    pool.append(
        (
            f"The axis of symmetry of $g(x)$ is the line $x = {frac_tex(-h if h != 0 else Rational(1))}$.",
            False if h != 0 else False,
            {"kind": "axis", "h": h, "claimed": -h if h != 0 else Rational(1)},
        )
    )

    # discriminant / real roots
    n_real = 2 if disc > 0 else (1 if disc == 0 else 0)
    pool.append(
        (
            f"The equation $g(x) = 0$ has exactly ${n_real}$ distinct real root{'s' if n_real != 1 else ''}.",
            True,
            {"kind": "disc", "d": disc, "n": n_real},
        )
    )
    wrong_n = 0 if n_real != 0 else 2
    pool.append(
        (
            f"The equation $g(x) = 0$ has exactly ${wrong_n}$ distinct real roots.",
            False,
            {"kind": "disc", "d": disc, "n": n_real, "claimed": wrong_n},
        )
    )

    # opening
    pool.append(
        (
            "The parabola $g(x)$ opens upwards.",
            pybool(a_g > 0),
            {"kind": "opens", "a": a_g},
        )
    )
    pool.append(
        (
            "The parabola $g(x)$ opens downwards.",
            pybool(a_g < 0),
            {"kind": "opens", "a": a_g},
        )
    )

    # composition / evaluation
    x0 = Rational(rng.choice([0, 1, 2, -1]))
    gf = expand(g.subs(x, f.subs(x, x0))) if False else expand(g.subs(x, x0))
    # g at a point
    val = Rational(expand(g.subs(x, x0)))
    pool.append(
        (
            f"$g({frac_tex(x0)}) = {frac_tex(val)}$.",
            True,
            {"kind": "eval_g", "x0": x0, "val": val},
        )
    )
    pool.append(
        (
            f"$g({frac_tex(x0)}) = {frac_tex(val + 2)}$.",
            False,
            {"kind": "eval_g", "x0": x0, "val": val, "claimed": val + 2},
        )
    )

    # f(g) degree claim — multi-hop
    fg = expand(f.subs(x, g))
    pool.append(
        (
            f"The composition $f(g(x))$ is a polynomial of degree $2$.",
            Poly(fg, x).degree() == 2,
            {"kind": "comp_deg", "deg": int(Poly(fg, x).degree())},
        )
    )
    gf_comp = expand(g.subs(x, f))
    pool.append(
        (
            f"The composition $g(f(x))$ is a polynomial of degree $2$.",
            Poly(gf_comp, x).degree() == 2,
            {"kind": "comp_deg_gf", "deg": int(Poly(gf_comp, x).degree())},
        )
    )

    # average rate of change of g on [p,q]
    p, q = Rational(0), Rational(2)
    if q != p:
        avg = Rational(expand((g.subs(x, q) - g.subs(x, p)) / (q - p)))
        pool.append(
            (
                f"The average rate of change of $g$ on $[{frac_tex(p)}, {frac_tex(q)}]$ is ${frac_tex(avg)}$.",
                True,
                {"kind": "avg_rate", "p": p, "q": q, "avg": avg},
            )
        )
        pool.append(
            (
                f"The average rate of change of $g$ on $[{frac_tex(p)}, {frac_tex(q)}]$ is ${frac_tex(avg + 1)}$.",
                False,
                {"kind": "avg_rate", "p": p, "q": q, "avg": avg, "claimed": avg + 1},
            )
        )

    # slope of f
    pool.append(
        (
            f"The slope of the line $y = f(x)$ is ${frac_tex(a_f)}$.",
            True,
            {"kind": "slope", "m": a_f},
        )
    )
    pool.append(
        (
            f"The slope of the line $y = f(x)$ is ${frac_tex(-a_f if a_f != 0 else Rational(1))}$.",
            False,
            {"kind": "slope", "m": a_f, "claimed": -a_f if a_f != 0 else Rational(1)},
        )
    )

    # point on both graphs?
    if real_roots:
        r0 = Rational(real_roots[0])
        # whether (r0, 0) on f? only if f(r0)=0
        on_f = pybool(expand(f.subs(x, r0)) == 0)
        pool.append(
            (
                f"The point $\\left({frac_tex(r0)}, 0\\right)$ lies on both graphs.",
                on_f,
                {"kind": "common_root_point", "r": r0, "on_f": on_f},
            )
        )

    # f-g leading coefficient
    lead = Poly(diff, x).LC()
    pool.append(
        (
            f"The leading coefficient of $f(x) - g(x)$ is ${frac_tex(Rational(lead))}$.",
            True,
            {"kind": "lead_diff", "lead": Rational(lead)},
        )
    )

    # vertex lies on the line y=f(x)?
    on_line = pybool(expand(f.subs(x, h) - k) == 0)
    pool.append(
        (
            "The vertex of $g(x)$ lies on the line $y = f(x)$.",
            on_line,
            {"kind": "vertex_on_f", "h": h, "k": k, "fh": Rational(expand(f.subs(x, h)))},
        )
    )

    # Prefer claim bands that match the difficulty, then fall back.
    if difficulty <= 2:
        preferred = {"easy", "medium"}
    elif difficulty == 3:
        preferred = {"easy", "medium", "hard"}
    else:
        preferred = {"medium", "hard"}

    def sort_key(item):
        band = kind_band(item[2]["kind"])
        # lower is better
        return (0 if band in preferred else 1, rng.random())

    pool_sorted = sorted(pool, key=sort_key)
    chosen: list[tuple[str, bool, dict]] = []
    seen_kinds = set()
    # first pass: unique kinds with difficulty tilt
    for item in pool_sorted:
        kind = item[2]["kind"].split("_")[0]
        if kind in seen_kinds:
            continue
        if difficulty <= 2 and kind_band(item[2]["kind"]) == "hard" and len(chosen) < 4:
            # keep hard claims rare on easy tasks
            continue
        if difficulty >= 4 and kind_band(item[2]["kind"]) == "easy" and len(chosen) < 3:
            continue
        chosen.append(item)
        seen_kinds.add(kind)
        if len(chosen) == 5:
            break
    # fill
    for item in pool_sorted:
        if len(chosen) == 5:
            break
        if item in chosen:
            continue
        chosen.append(item)

    # ensure not all true or all false, and unique statement texts
    def finalize(chosen):
        # dedupe by statement text, refill from pool
        seen = set()
        uniq = []
        for item in chosen:
            if item[0] in seen:
                continue
            seen.add(item[0])
            uniq.append((item[0], pybool(item[1]), item[2]))
        for item in pool:
            if len(uniq) >= 5:
                break
            if item[0] in seen:
                continue
            seen.add(item[0])
            uniq.append((item[0], pybool(item[1]), item[2]))
        while len(uniq) < 5:
            # synthetic false filler
            filler = (
                f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${len(uniq) + 10}$ points.",
                False,
                {"kind": "intersect_exact", "n": n_int, "claimed": len(uniq) + 10},
            )
            if filler[0] not in seen:
                uniq.append(filler)
                seen.add(filler[0])
            else:
                break
        truths = sum(1 for _, t, _ in uniq[:5])
        out = uniq[:5]
        texts = {s for s, _, _ in out}
        if truths == 5:
            replacement = (
                "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.",
                False,
                {"kind": "intersect_gt2", "n": n_int},
            )
            if replacement[0] in texts:
                replacement = (
                    f"The graphs of $f(x)$ and $g(x)$ intersect at exactly $7$ points.",
                    False,
                    {"kind": "intersect_exact", "n": n_int, "claimed": 7},
                )
            out[4] = replacement
        elif truths == 0:
            replacement = (
                "There exist values $a, b, c \\in \\mathbb{R}$ such that $g(x) = a f(x)^{2} + b f(x) + c$.",
                True,
                {"kind": "rewrite", "rw": rw},
            )
            if replacement[0] in texts:
                # already present as False somehow — flip that slot
                for i, (s, t, m) in enumerate(out):
                    if s == replacement[0]:
                        out[i] = replacement
                        break
            else:
                out[0] = replacement
        # final safety: unique texts
        final = []
        seen2 = set()
        for item in out:
            if item[0] in seen2:
                continue
            seen2.add(item[0])
            final.append(item)
        for item in pool:
            if len(final) >= 5:
                break
            if item[0] in seen2:
                continue
            seen2.add(item[0])
            final.append((item[0], pybool(item[1]), item[2]))
        i = 0
        while len(final) < 5:
            s = f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${20 + i}$ points."
            i += 1
            if s in seen2:
                continue
            seen2.add(s)
            final.append((s, False, {"kind": "intersect_exact", "n": n_int, "claimed": 20 + i}))
        # re-check mix and force a known true/false if needed
        truths = sum(1 for _, t, _ in final[:5])
        if truths == 5:
            final[4] = (
                f"The graphs of $f(x)$ and $g(x)$ intersect at exactly $9$ points.",
                False,
                {"kind": "intersect_exact", "n": n_int, "claimed": 9},
            )
        elif truths == 0:
            # Prefer a short true claim that cannot collide with the false pool noise.
            true_axis = (
                f"The axis of symmetry of $g(x)$ is the line $x = {frac_tex(h)}$.",
                True,
                {"kind": "axis", "h": h},
            )
            # Drop any existing axis claim, then put the true one first.
            final = [item for item in final if not str(item[2].get("kind", "")).startswith("axis")]
            final.insert(0, true_axis)
            # keep length 5
            final = final[:5]
            while len(final) < 5:
                s = f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${30 + len(final)}$ points."
                final.append((s, False, {"kind": "intersect_exact", "n": n_int, "claimed": 30 + len(final)}))
        # Absolute last resort
        truths = sum(1 for _, t, _ in final[:5])
        if truths == 0:
            final[0] = (
                f"The slope of the line $y = f(x)$ is ${frac_tex(Rational(Poly(f, x).nth(1)))}$.",
                True,
                {"kind": "slope", "m": Rational(Poly(f, x).nth(1))},
            )
        elif truths == 5:
            final[4] = (
                "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.",
                False,
                {"kind": "intersect_gt2", "n": n_int},
            )
        return [(s, pybool(t), m) for s, t, m in final[:5]]

    chosen = finalize(chosen)

    # Stabilize order: vertex-ish, rewrite, vieta, intercept, intersect preferred like the photo
    priority = {
        "vertex": 0,
        "min": 0,
        "max": 0,
        "rewrite": 1,
        "vieta": 2,
        "diff": 3,
        "intersect": 4,
        "axis": 2,
        "disc": 2,
        "opens": 3,
        "eval": 3,
        "comp": 4,
        "avg": 3,
        "slope": 4,
        "common": 4,
        "lead": 3,
    }

    def prio(item):
        k = item[2]["kind"]
        for pref, val in priority.items():
            if k.startswith(pref):
                return val
        return 5

    chosen.sort(key=prio)
    # Force plain Python bools (sympy comparisons otherwise leak BooleanAtom)
    return [(s, pybool(t), m) for s, t, m in chosen[:5]]


def explain(letter: str, stmt: str, truth: bool, meta: dict, f, g) -> str:
    header = f"**{letter}.** → {'True' if truth else 'False'}"
    kind = meta["kind"]
    a_g = Poly(g, x).nth(2)
    b_g = Poly(g, x).nth(1)
    h, k = vertex(g)
    lines = [header, ""]

    def close(ok: bool):
        lines.append(f"so the statement is {'True' if ok else 'False'}.")

    if kind in ("vertex_min", "vertex_max"):
        lines.append(
            "For a quadratic $g(x)=ax^{2}+bx+c$, the vertex has $x$-coordinate $-\\dfrac{b}{2a}$:"
        )
        lines.append("")
        lines.append("$$")
        lines.append(f"x = -\\frac{{{L(b_g)}}}{{2\\cdot {L(a_g)}}} = {frac_tex(h)}")
        lines.append("$$")
        lines.append("")
        lines.append("Substitute that abscissa into $g$:")
        lines.append("")
        lines.append("$$")
        lines.append(f"g\\!\\left({frac_tex(h)}\\right) = {frac_tex(k)}")
        lines.append("$$")
        lines.append("")
        if kind == "vertex_min" and a_g > 0 and not meta.get("bad"):
            lines.append(
                f"Since $a = {frac_tex(Rational(a_g))} > 0$, the parabola opens upwards, so the vertex is the lowest point ${fmt_point(h, k)}$."
            )
            lines.append("")
            close(True)
        elif kind == "vertex_min" and meta.get("bad"):
            lines.append(
                f"The genuine lowest point is ${fmt_point(h, k)}$, not the claimed point."
            )
            lines.append("")
            close(False)
        elif kind == "vertex_max" and a_g < 0:
            lines.append(
                f"Since $a = {frac_tex(Rational(a_g))} < 0$, the parabola opens downwards, so the vertex is the highest point ${fmt_point(h, k)}$."
            )
            lines.append("")
            close(True)
        else:
            lines.append("Comparing the claimed point with the vertex just computed:")
            lines.append("")
            close(truth)

    elif kind == "vertex_min_impossible":
        lines.append(
            f"Here $a = {frac_tex(Rational(a_g))} < 0$, so $g$ opens downwards and is unbounded below."
        )
        lines.append("")
        lines.append("$$")
        lines.append(f"\\lim_{{x \\to \\pm\\infty}} g(x) = -\\infty")
        lines.append("$$")
        lines.append("")
        lines.append(
            "A lowest point on the graph therefore does not exist (the vertex is a maximum, not a minimum),"
        )
        lines.append("")
        close(False)

    elif kind in ("min_value", "max_value"):
        lines.append("The extreme value of a quadratic is the $y$-coordinate of its vertex:")
        lines.append("")
        lines.append("$$")
        lines.append(
            f"x = -\\frac{{{L(b_g)}}}{{2\\cdot {L(a_g)}}} = {frac_tex(h)}\\qquad "
            f"g\\!\\left({frac_tex(h)}\\right) = {frac_tex(k)}"
        )
        lines.append("$$")
        lines.append("")
        claimed = meta.get("claimed", meta["k"] if truth else None)
        if truth:
            lines.append(f"The claim matches ${frac_tex(k)}$,")
            lines.append("")
            close(True)
        else:
            lines.append(f"The true extreme value is ${frac_tex(k)}$, which is not the claimed figure,")
            lines.append("")
            close(False)

    elif kind == "rewrite":
        lines.append(
            "Because $f$ is degree $1$, the set $\\{1, f, f^{2}\\}$ spans every polynomial of degree at most $2$."
        )
        lines.append("")
        if meta.get("rw"):
            a, b, c = meta["rw"]
            lines.append("Matching coefficients in $g(x) = a f(x)^{2} + b f(x) + c$ recovers")
            lines.append("")
            lines.append("$$")
            lines.append(
                f"a = {frac_tex(Rational(a))},\\quad b = {frac_tex(Rational(b))},\\quad c = {frac_tex(Rational(c))}"
            )
            lines.append("$$")
            lines.append("")
            lines.append("Such real coefficients exist,")
            lines.append("")
            close(True)
        else:
            lines.append("No such real triple exists for these particular $f$ and $g$,")
            lines.append("")
            close(False)

    elif kind == "vieta_sum":
        lines.append("For $g(x)=ax^{2}+bx+c$, Vieta's formula gives the sum of roots as $-\\dfrac{b}{a}$:")
        lines.append("")
        lines.append("$$")
        lines.append(f"-\\frac{{{L(b_g)}}}{{{L(a_g)}}} = {frac_tex(meta['s'])}")
        lines.append("$$")
        lines.append("")
        if truth and "claimed" not in meta:
            lines.append("The claim matches that sum,")
            lines.append("")
            close(True)
        else:
            claimed = meta.get("claimed")
            lines.append(
                f"The claim uses ${frac_tex(claimed)}$, which is not ${frac_tex(meta['s'])}$,"
            )
            lines.append("")
            close(False)

    elif kind == "vieta_prod":
        lines.append("For $g(x)=ax^{2}+bx+c$, Vieta's formula gives the product of roots as $\\dfrac{c}{a}$:")
        lines.append("")
        c_g = Poly(g, x).nth(0)
        lines.append("$$")
        lines.append(f"\\frac{{{L(c_g)}}}{{{L(a_g)}}} = {frac_tex(meta['p'])}")
        lines.append("$$")
        lines.append("")
        if truth and "claimed" not in meta:
            lines.append("The claim matches that product,")
            lines.append("")
            close(True)
        else:
            lines.append(
                f"The claim uses ${frac_tex(meta['claimed'])}$, which is not ${frac_tex(meta['p'])}$,"
            )
            lines.append("")
            close(False)

    elif kind == "diff_yint":
        lines.append("The $y$-intercept of $f - g$ is the value at $x = 0$:")
        lines.append("")
        lines.append("$$")
        lines.append(f"(f - g)(0) = f(0) - g(0) = {frac_tex(meta['y'])}")
        lines.append("$$")
        lines.append("")
        claimed = meta.get("claimed", meta["y"])
        if truth and meta.get("claimed") is None:
            lines.append("The claim matches that intercept,")
            lines.append("")
            close(True)
        elif meta.get("claimed") is not None:
            if meta["y"] == meta["claimed"]:
                lines.append("The intercept is indeed $0$,")
                lines.append("")
                close(True)
            else:
                lines.append(
                    f"The intercept is ${frac_tex(meta['y'])}$, not ${frac_tex(meta['claimed'])}$,"
                )
                lines.append("")
                close(False)
        else:
            close(truth)

    elif kind in ("intersect_gt2", "intersect_exact"):
        lines.append("Intersection points solve $f(x) = g(x)$, or equivalently")
        lines.append("")
        diff = expand(g - f)
        lines.append("$$")
        lines.append(f"{L(diff)} = 0")
        lines.append("$$")
        lines.append("")
        d = discriminant(Poly(diff, x))
        lines.append("This is at most quadratic, so it has at most two real roots. The discriminant is")
        lines.append("")
        lines.append("$$")
        lines.append(f"\\Delta = {frac_tex(Rational(d))}")
        lines.append("$$")
        lines.append("")
        n = meta["n"]
        if kind == "intersect_gt2":
            lines.append(
                f"With $\\Delta = {frac_tex(Rational(d))}$ there are ${n}$ real intersection(s), which is not more than two,"
            )
            lines.append("")
            close(False)
        else:
            claimed = meta.get("claimed", n)
            if claimed == n:
                lines.append(f"Hence the graphs meet at exactly ${n}$ point(s),")
                lines.append("")
                close(True)
            else:
                lines.append(
                    f"Hence the graphs meet at exactly ${n}$ point(s), not ${claimed}$,"
                )
                lines.append("")
                close(False)

    elif kind == "axis":
        lines.append("The axis of symmetry of $g(x)=ax^{2}+bx+c$ is")
        lines.append("")
        lines.append("$$")
        lines.append(f"x = -\\frac{{{L(b_g)}}}{{2\\cdot {L(a_g)}}} = {frac_tex(h)}")
        lines.append("$$")
        lines.append("")
        if "claimed" in meta:
            lines.append(
                f"The claim uses $x = {frac_tex(meta['claimed'])}$, which is not ${frac_tex(h)}$,"
            )
            lines.append("")
            close(False)
        else:
            lines.append("The claim matches that line,")
            lines.append("")
            close(True)

    elif kind == "disc":
        d = meta["d"]
        lines.append("The number of distinct real roots of $g(x)=0$ is read from the discriminant:")
        lines.append("")
        lines.append("$$")
        lines.append(f"\\Delta = b^{2} - 4ac = {frac_tex(d)}")
        lines.append("$$")
        lines.append("")
        n = meta["n"]
        if "claimed" in meta:
            lines.append(
                f"So there are ${n}$ distinct real root(s), not ${meta['claimed']}$,"
            )
            lines.append("")
            close(False)
        else:
            lines.append(f"So there are exactly ${n}$ distinct real root(s),")
            lines.append("")
            close(True)

    elif kind == "opens":
        lines.append("The leading coefficient decides the opening direction:")
        lines.append("")
        lines.append("$$")
        lines.append(f"a = {frac_tex(Rational(a_g))}")
        lines.append("$$")
        lines.append("")
        if a_g > 0:
            lines.append("Since $a > 0$, the parabola opens upwards,")
        else:
            lines.append("Since $a < 0$, the parabola opens downwards,")
        lines.append("")
        close(truth)

    elif kind == "eval_g":
        x0, val = meta["x0"], meta["val"]
        lines.append(f"Substitute $x = {frac_tex(x0)}$ into $g$:")
        lines.append("")
        lines.append("$$")
        lines.append(f"g\\!\\left({frac_tex(x0)}\\right) = {frac_tex(val)}")
        lines.append("$$")
        lines.append("")
        if "claimed" in meta:
            lines.append(
                f"The claim uses ${frac_tex(meta['claimed'])}$, which disagrees,"
            )
            lines.append("")
            close(False)
        else:
            lines.append("The claim matches that value,")
            lines.append("")
            close(True)

    elif kind in ("comp_deg", "comp_deg_gf"):
        if kind == "comp_deg":
            comp = expand(f.subs(x, g))
            name = "f(g(x))"
        else:
            comp = expand(g.subs(x, f))
            name = "g(f(x))"
        deg = Poly(comp, x).degree()
        lines.append(f"Expand the composition ${name}$:")
        lines.append("")
        lines.append("$$")
        lines.append(L(comp))
        lines.append("$$")
        lines.append("")
        lines.append(f"The degree is ${deg}$.")
        lines.append("")
        close(truth)

    elif kind == "avg_rate":
        p, q, avg = meta["p"], meta["q"], meta["avg"]
        gp = Rational(expand(g.subs(x, p)))
        gq = Rational(expand(g.subs(x, q)))
        lines.append("Average rate of change on an interval is the difference quotient:")
        lines.append("")
        lines.append("$$")
        lines.append(
            f"\\frac{{g({frac_tex(q)}) - g({frac_tex(p)})}}{{{frac_tex(q)} - {frac_tex(p)}}} "
            f"= \\frac{{{frac_tex(gq)} - {frac_tex(gp)}}}{{{frac_tex(q - p)}}} = {frac_tex(avg)}"
        )
        lines.append("$$")
        lines.append("")
        if "claimed" in meta:
            lines.append(
                f"The claim uses ${frac_tex(meta['claimed'])}$, which disagrees,"
            )
            lines.append("")
            close(False)
        else:
            lines.append("The claim matches that rate,")
            lines.append("")
            close(True)

    elif kind == "slope":
        m = meta["m"]
        lines.append("A linear rule $f(x) = mx + k$ has slope equal to the coefficient of $x$:")
        lines.append("")
        lines.append("$$")
        lines.append(f"m = {frac_tex(m)}")
        lines.append("$$")
        lines.append("")
        if "claimed" in meta:
            lines.append(
                f"The claim uses ${frac_tex(meta['claimed'])}$, which disagrees,"
            )
            lines.append("")
            close(False)
        else:
            lines.append("The claim matches that slope,")
            lines.append("")
            close(True)

    elif kind == "common_root_point":
        r = meta["r"]
        lines.append(f"The point $\\left({frac_tex(r)}, 0\\right)$ lies on $g$ because it is a root of $g$.")
        lines.append("")
        fr = Rational(expand(f.subs(x, r)))
        lines.append("On the line $y = f(x)$ the same abscissa gives")
        lines.append("")
        lines.append("$$")
        lines.append(f"f\\!\\left({frac_tex(r)}\\right) = {frac_tex(fr)}")
        lines.append("$$")
        lines.append("")
        if meta["on_f"]:
            lines.append("That height is $0$, so the point lies on both graphs,")
            lines.append("")
            close(True)
        else:
            lines.append("That height is not $0$, so the point is not on both graphs,")
            lines.append("")
            close(False)

    elif kind == "lead_diff":
        lead = meta["lead"]
        lines.append("Expand $f(x) - g(x)$ and read the leading coefficient:")
        lines.append("")
        lines.append("$$")
        lines.append(L(expand(f - g)))
        lines.append("$$")
        lines.append("")
        lines.append(f"The leading coefficient is ${frac_tex(lead)}$,")
        lines.append("")
        close(True)

    elif kind == "vertex_on_f":
        fh = meta["fh"]
        lines.append("The vertex is")
        lines.append("")
        lines.append("$$")
        lines.append(fmt_point(meta["h"], meta["k"]))
        lines.append("$$")
        lines.append("")
        lines.append("The line height at the same $x$ is")
        lines.append("")
        lines.append("$$")
        lines.append(f"f\\!\\left({frac_tex(meta['h'])}\\right) = {frac_tex(fh)}")
        lines.append("$$")
        lines.append("")
        if truth:
            lines.append("These $y$-values agree, so the vertex lies on the line,")
            lines.append("")
            close(True)
        else:
            lines.append(
                f"These disagree (${frac_tex(meta['k'])} \\neq {frac_tex(fh)}$), so the vertex is not on the line,"
            )
            lines.append("")
            close(False)

    else:
        lines.append("Direct evaluation of the claim against $f$ and $g$ decides the verdict.")
        lines.append("")
        close(truth)

    return "\n".join(lines)


def overview(f, g) -> str:
    h, k = vertex(g)
    a_g, b_g, c_g = Poly(g, x).nth(2), Poly(g, x).nth(1), Poly(g, x).nth(0)
    sum_r = Rational(-b_g / a_g)
    prod_r = Rational(c_g / a_g)
    diff = expand(f - g)
    n_int = intersection_count(f, g)
    d = Rational(discriminant(Poly(diff, x)))
    rw = rewrite_coeffs(f, g)

    parts = []
    parts.append(
        f"Consider the linear function $f(x) = {L(f)}$ and the quadratic function $g(x) = {L(g)}$."
    )
    parts.append("")
    parts.append("**Part 1: Shared facts.**")
    parts.append("")
    parts.append("Vertex of $g$ (axis $x = -b/(2a)$):")
    parts.append("")
    parts.append("$$")
    parts.append(
        f"x = {frac_tex(h)}\\qquad g\\!\\left({frac_tex(h)}\\right) = {frac_tex(k)}"
    )
    parts.append("$$")
    parts.append("")
    parts.append("Vieta for $g(x) = 0$:")
    parts.append("")
    parts.append("$$")
    parts.append(
        f"\\text{{sum of roots}} = {frac_tex(sum_r)}\\qquad "
        f"\\text{{product of roots}} = {frac_tex(prod_r)}"
    )
    parts.append("$$")
    parts.append("")
    parts.append("**Part 2: Difference and intersections.**")
    parts.append("")
    parts.append("$$")
    parts.append(f"f(x) - g(x) = {L(diff)}")
    parts.append("$$")
    parts.append("")
    parts.append("$$")
    parts.append(
        f"(f - g)(0) = {frac_tex(y_intercept(diff))}\\qquad "
        f"\\Delta(g - f) = {frac_tex(d)}\\ \\Rightarrow\\ {n_int}\\ \\text{{real intersection(s)}}"
    )
    parts.append("$$")
    parts.append("")
    parts.append("**Part 3: Rewrite in the linear basis.**")
    parts.append("")
    parts.append(
        f"Because $\\deg f = 1$, we can write $g = a f^{2} + b f + c$ with "
        f"$a = {frac_tex(Rational(rw[0]))}$, $b = {frac_tex(Rational(rw[1]))}$, "
        f"$c = {frac_tex(Rational(rw[2]))}$."
    )
    parts.append("")
    parts.append(
        f"**Answer.** vertex $={fmt_point(h, k)}$ | "
        f"sum $={frac_tex(sum_r)}$ | product $={frac_tex(prod_r)}$ | "
        f"intersections $={n_int}$"
    )
    return "\n".join(parts)


def difficulty_for_index(idx: int, total: int = 50) -> int:
    """Spread difficulties 1..5 evenly across the bank (10 each for 50 tasks)."""
    per = total // 5
    # Round-robin so easy/hard are interleaved, not a wall of 1s then 5s.
    return (idx % 5) + 1 if total % 5 == 0 else min(5, idx // per + 1)


def build_task(idx: int, pair: Pair, rng: random.Random, difficulty: int) -> dict:
    claims = build_claims(pair.f, pair.g, rng, difficulty=difficulty)
    letters = "ABCDE"
    statements = [c[0] for c in claims]
    answer_key = [c[1] for c in claims]
    explanations = [
        explain(letters[i], claims[i][0], claims[i][1], claims[i][2], pair.f, pair.g)
        for i in range(5)
    ]
    n = idx + 1
    context = (
        f"Consider the following linear and quadratic functions: "
        f"$f(x) = {L(pair.f)}$ and $g(x) = {L(pair.g)}$. "
        f"Evaluate each statement. Mark it TRUE or FALSE."
    )
    return {
        "id": f"math-7-{n}",
        "case_id": f"MATH 7.{n:02d}",
        "title": pair.title,
        "context": context,
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": explanations,
        "difficulty_level": f"{difficulty}/5",
        "sort_order": n,
        "solution_overview": overview(pair.f, pair.g),
        "subsection": "7",
        "placeholder": False,
    }


def patch_photo_task(task: dict) -> dict:
    """MATH 7.01 mirrors the reference exam item (difficulty 3/5)."""
    task = dict(task)
    task["title"] = "Vertex, Linear Rewrite, and Crossings of a Line and a Parabola"
    task["context"] = (
        "Consider the following linear and quadratic functions: "
        "$f(x) = 4x + 2$ and $g(x) = x^{2} - x - 2$. "
        "Evaluate each statement. Mark it TRUE or FALSE."
    )
    task["statements"] = [
        "The point on the graph of $g(x)$ with the lowest $y$ coordinate is $\\left(\\frac{1}{2}, -\\frac{9}{4}\\right)$.",
        "There exist values $a, b, c \\in \\mathbb{R}$ such that $g(x) = a f(x)^{2} + b f(x) + c$.",
        "The sum of the roots of function $g(x)$ is $-1$.",
        "The graph of the function $f(x) - g(x)$ intersects with the $y$-axis at $y = 0$.",
        "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice.",
    ]
    task["answer_key"] = [True, True, False, False, False]
    task["difficulty_level"] = "3/5"
    task["tactical_explanations"] = [
        "**A.** → True\n\nFor a quadratic $g(x)=ax^{2}+bx+c$, the vertex abscissa is $-\\dfrac{b}{2a}$:\n\n$$\nx = -\\frac{-1}{2\\cdot 1} = \\frac{1}{2}\n$$\n\nSubstitute into $g$:\n\n$$\ng\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2}\\right)^{2} - \\frac{1}{2} - 2\n$$\n\n$$\n= \\frac{1}{4} - \\frac{1}{2} - 2 = -\\frac{9}{4}\n$$\n\nSince $a = 1 > 0$, the parabola opens upwards, so the vertex is the lowest point $\\left(\\frac{1}{2}, -\\frac{9}{4}\\right)$.\n\nThe claim matches that point, so the statement is True.",
        "**B.** → True\n\nBecause $f$ is degree $1$, the set $\\{1, f, f^{2}\\}$ spans every polynomial of degree at most $2$. Matching coefficients in $g(x) = a f(x)^{2} + b f(x) + c$ recovers\n\n$$\na = \\frac{1}{16},\\quad b = -\\frac{1}{2},\\quad c = -\\frac{5}{4}\n$$\n\nSuch real coefficients exist, so the statement is True.",
        "**C.** → False\n\nFor $g(x)=ax^{2}+bx+c$, Vieta's formula gives the sum of roots as $-\\dfrac{b}{a}$:\n\n$$\n-\\frac{-1}{1} = 1\n$$\n\nThe claim uses $-1$, which is not $1$, so the statement is False.",
        "**D.** → False\n\nThe $y$-intercept of $f - g$ is the value at $x = 0$:\n\n$$\n(f - g)(0) = f(0) - g(0) = 2 - (-2) = 4\n$$\n\nThe intercept is $4$, not $0$, so the statement is False.",
        "**E.** → False\n\nIntersection points solve $f(x) = g(x)$, or equivalently\n\n$$\nx^{2} - 5x - 4 = 0\n$$\n\nThis is at most quadratic, so it has at most two real roots. The discriminant is\n\n$$\n\\Delta = 25 + 16 = 41 > 0\n$$\n\nWith $\\Delta = 41$ there are $2$ real intersection(s), which is not more than two, so the statement is False.",
    ]
    task["solution_overview"] = (
        "Consider the linear function $f(x) = 4x + 2$ and the quadratic function $g(x) = x^{2} - x - 2$.\n\n"
        "**Part 1: Shared facts.**\n\n"
        "Vertex of $g$ from $x = -\\dfrac{b}{2a}$:\n\n"
        "$$\nx = -\\frac{-1}{2\\cdot 1} = \\frac{1}{2}\n$$\n\n"
        "$$\ng\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2}\\right)^{2} - \\frac{1}{2} - 2 = \\frac{1}{4} - \\frac{1}{2} - 2 = -\\frac{9}{4}\n$$\n\n"
        "Vieta for $g(x) = 0$:\n\n"
        "$$\n\\text{sum of roots} = -\\frac{b}{a} = 1\\qquad \\text{product of roots} = \\frac{c}{a} = -2\n$$\n\n"
        "**Part 2: Difference and intersections.**\n\n"
        "$$\nf(x) - g(x) = (4x + 2) - (x^{2} - x - 2) = -x^{2} + 5x + 4\n$$\n\n"
        "$$\n(f - g)(0) = 4\\qquad g(x) - f(x) = x^{2} - 5x - 4 = 0 \\text{ has discriminant } 41 > 0\n$$\n\n"
        "so the graphs meet at exactly two real points.\n\n"
        "**Part 3: Rewrite in the linear basis.**\n\n"
        "Because $\\deg f = 1$, the span $\\{1, f, f^{2}\\}$ covers every polynomial of degree at most $2$, "
        "so real $a,b,c$ with $g = a f^{2} + b f + c$ exist. Matching coefficients yields "
        "$a = \\dfrac{1}{16}$, $b = -\\dfrac{1}{2}$, $c = -\\dfrac{5}{4}$.\n\n"
        "**Answer.** vertex $=\\left(\\frac{1}{2}, -\\frac{9}{4}\\right)$ | sum $=1$ | product $=-2$ | intersections $=2$"
    )
    return task


def sanitize_task(task: dict, f, g) -> dict:
    """Guarantee unique statements and a mixed T/F key."""
    from sympy import Poly as _Poly

    stmts = list(task["statements"])
    keys = [bool(x) for x in task["answer_key"]]
    expls = list(task["tactical_explanations"])
    # dedupe statements
    seen = set()
    keep_idx = []
    for i, s in enumerate(stmts):
        if s in seen:
            continue
        seen.add(s)
        keep_idx.append(i)
    stmts = [stmts[i] for i in keep_idx]
    keys = [keys[i] for i in keep_idx]
    expls = [expls[i] for i in keep_idx]
    # refill to 5
    n = 0
    while len(stmts) < 5:
        s = f"The graphs of $f(x)$ and $g(x)$ intersect at exactly ${40 + n}$ points."
        n += 1
        if s in seen:
            continue
        seen.add(s)
        stmts.append(s)
        keys.append(False)
        expls.append(
            f"**{chr(64 + len(stmts))}.** → False\n\n"
            "A line and a parabola meet in at most two points, so the claim is impossible,\n\n"
            "so the statement is False."
        )
    stmts, keys, expls = stmts[:5], keys[:5], expls[:5]
    truths = sum(1 for k in keys if k)
    if truths == 0:
        a_f = _Poly(f, x).nth(1)
        stmts[0] = f"The slope of the line $y = f(x)$ is ${frac_tex(Rational(a_f))}$."
        keys[0] = True
        expls[0] = (
            f"**A.** → True\n\n"
            f"The coefficient of $x$ in $f$ is the slope:\n\n"
            f"$$\nm = {frac_tex(Rational(a_f))}\n$$\n\n"
            f"The claim matches that slope, so the statement is True."
        )
    elif truths == 5:
        stmts[4] = "The graphs of the functions $f(x)$ and $g(x)$ intersect more than twice."
        keys[4] = False
        expls[4] = (
            "**E.** → False\n\n"
            "Intersection points solve $f(x)=g(x)$, which is at most quadratic, so there are at most two real solutions.\n\n"
            "More than two intersections is impossible, so the statement is False."
        )
    # re-letter explanations headers lightly if needed — keep existing bodies
    task = dict(task)
    task["statements"] = stmts
    task["answer_key"] = keys
    task["tactical_explanations"] = expls
    return task


def main():
    rng = random.Random(7)
    pairs = make_pairs()
    assert len(pairs) == 50
    # Interleave difficulties 1..5 across the bank (10 of each).
    difficulties = [difficulty_for_index(i) for i in range(50)]
    # Keep MATH 7.01 (photo exemplar) at 3/5: swap so index 0 gets difficulty 3.
    if difficulties[0] != 3:
        j = difficulties.index(3)
        difficulties[0], difficulties[j] = difficulties[j], difficulties[0]

    tasks = [build_task(i, pairs[i], rng, difficulties[i]) for i in range(50)]
    tasks = [sanitize_task(t, pairs[i].f, pairs[i].g) for i, t in enumerate(tasks)]
    tasks[0] = patch_photo_task(tasks[0])

    # uniqueness check on statements within each case
    for t in tasks:
        assert len(set(t["statements"])) == 5, (t["case_id"], t["statements"])
        assert 1 <= sum(1 for x in t["answer_key"] if x) <= 4, (t["case_id"], t["answer_key"])
        assert len(t["tactical_explanations"]) == 5
        assert t["difficulty_level"] in {f"{d}/5" for d in range(1, 6)}, t["difficulty_level"]

    OUT.write_text(json.dumps(tasks, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} tasks to {OUT}")
    # summary
    true_counts = [sum(1 for x in t["answer_key"] if x) for t in tasks]
    print("true-counts:", {k: true_counts.count(k) for k in sorted(set(true_counts))})
    diffs = [t["difficulty_level"] for t in tasks]
    print("difficulties:", {k: diffs.count(k) for k in sorted(set(diffs))})


if __name__ == "__main__":
    main()
