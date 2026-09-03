#!/usr/bin/env python3
"""Statement templates for the Chapter 7 single-model stems.

Every builder returns ``(statement, truth)``: the wording is fixed here and the
truth value is computed from the model with sympy, so an answer key can never
drift away from the claim it grades.  ``scripts/enrich-ch7-explanations-ch4.py``
recognises the same wordings and recomputes each truth value independently.
"""

from __future__ import annotations

from sympy import Poly, Rational, Symbol, discriminant, expand, solve

x = Symbol("x")


# --------------------------------------------------------------------------- #
# Rendering helpers
# --------------------------------------------------------------------------- #

def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def T(expr) -> str:
    """LaTeX for a polynomial of degree at most two, written in descending order."""
    a2, a1, a0 = coeffs(expr)
    out = ""
    for coef, base in ((a2, "x^{2}"), (a1, "x"), (a0, "")):
        if coef == 0:
            continue
        mag = abs(coef)
        body = base if (base and mag == 1) else f"{F(mag)}{base}"
        out += ("-" if coef < 0 else ("+" if out else "")) + body
    return out or "0"


def coeffs(q):
    p = Poly(q, x)
    return Rational(p.nth(2)), Rational(p.nth(1)), Rational(p.nth(0))


def axis_of(q) -> Rational:
    a, b, _ = coeffs(q)
    return Rational(-b, 2 * a) if a else None


def vertex_of(q):
    h = axis_of(q)
    return h, Rational(expand(q.subs(x, h)))


def roots_of(q):
    a, b, c = coeffs(q)
    d = Rational(discriminant(Poly(q, x)))
    if d < 0:
        return []
    return sorted(Rational(r) for r in solve(Poly(q, x), x))


def vertex_form_tex(q) -> str:
    a, _, _ = coeffs(q)
    h, k = vertex_of(q)
    shift = rf"\left(x-{F(h)}\right)^{{2}}" if h >= 0 else rf"\left(x+{F(-h)}\right)^{{2}}"
    lead = "" if a == 1 else ("-" if a == -1 else F(a))
    if k == 0:
        return f"{lead}{shift}"
    return f"{lead}{shift}+{F(k)}" if k > 0 else f"{lead}{shift}-{F(-k)}"


def arg_tex(v) -> str:
    v = Rational(v)
    return F(v) if (v >= 0 and v.q == 1) else f"\\left({F(v)}\\right)"


# --------------------------------------------------------------------------- #
# Quadratic claims
# --------------------------------------------------------------------------- #

def q_axis(n, q, claim):
    return f"The axis of symmetry of ${n}$ is the line $x={F(claim)}$.", Rational(claim) == axis_of(q)


def q_axis_yaxis(n, q):
    return f"The graph of ${n}$ is symmetric about the $y$-axis.", axis_of(q) == 0


def q_vertex(n, q, h, k):
    hh, kk = vertex_of(q)
    return (
        rf"The vertex of the graph of ${n}$ is the point $\left({F(h)},{F(k)}\right)$.",
        (Rational(h) == hh and Rational(k) == kk),
    )


def q_opens(n, q, up: bool):
    a, _, _ = coeffs(q)
    word = "upwards" if up else "downwards"
    return f"The graph of ${n}$ opens {word}.", (a > 0) == up


def q_sum_roots(n, q, claim):
    a, b, _ = coeffs(q)
    return f"The two roots of ${n}$ add up to ${F(claim)}$.", Rational(claim) == Rational(-b, 1) / a


def q_prod_roots(n, q, claim):
    a, _, c = coeffs(q)
    return f"The two roots of ${n}$ multiply to ${F(claim)}$.", Rational(claim) == c / a


def q_roots(n, q, r1, r2):
    rs = roots_of(q)
    ok = sorted([Rational(r1), Rational(r2)]) == rs and len(rs) == 2
    return f"The roots of ${n}$ are ${F(r1)}$ and ${F(r2)}$.", ok


def q_root_distance(n, q, claim):
    rs = roots_of(q)
    ok = len(rs) == 2 and abs(rs[1] - rs[0]) == Rational(claim)
    return f"The distance between the two roots of ${n}$ is ${F(claim)}$.", ok


def q_root_count(n, q, kind: str):
    d = Rational(discriminant(Poly(q, x)))
    words = {
        "two": "two distinct real solutions",
        "one": "exactly one real solution",
        "none": "no real solution",
    }
    actual = "two" if d > 0 else ("one" if d == 0 else "none")
    return f"The equation ${n}(x)=0$ has {words[kind]}.", actual == kind


def q_complete_square(n, q, claimed_expr):
    """``claimed_expr`` is the quadratic whose vertex form is printed in the claim."""
    tex = vertex_form_tex(claimed_expr)
    return (
        f"Completing the square gives ${n}(x)={tex}$.",
        expand(claimed_expr - q) == 0,
    )


def q_expand(n, q, claimed_expr):
    return f"Expanding gives ${n}(x)={T(claimed_expr)}$.", expand(claimed_expr - q) == 0


def q_rule(n, q, claimed_expr):
    return f"The rule is ${n}(x)={T(claimed_expr)}$.", expand(claimed_expr - q) == 0


def q_extreme(n, q, claim, smallest=True):
    a, _, _ = coeffs(q)
    _, k = vertex_of(q)
    word = "smallest" if smallest else "largest"
    ok = ((a > 0) == smallest) and Rational(claim) == k
    return f"The {word} value taken by ${n}$ is ${F(claim)}$.", ok


def y_intercept(n, fn, claim):
    return (
        f"The graph of ${n}$ meets the $y$-axis at $y={F(claim)}$.",
        Rational(expand(fn.subs(x, 0))) == Rational(claim),
    )


def value_at(n, fn, x0, claim):
    return (
        f"${n}({F(x0)})={F(claim)}$.",
        Rational(expand(fn.subs(x, x0))) == Rational(claim),
    )


def q_monotone(n, q, bound, decreasing=True):
    a, _, _ = coeffs(q)
    h = axis_of(q)
    bound = Rational(bound)
    # An upward parabola falls on $(-\infty,h]$ and rises on $[h,\infty)$; a
    # downward one can never be monotone on a half-line that reaches infinity
    # on the side named in the claim.
    if decreasing:
        return f"${n}$ is decreasing for every $x<{F(bound)}$.", a > 0 and bound <= h
    return f"${n}$ is increasing for every $x>{F(bound)}$.", a > 0 and bound >= h


def q_range(n, q, bound, at_least=True):
    a, _, _ = coeffs(q)
    _, k = vertex_of(q)
    bound = Rational(bound)
    rel = r"\ge" if at_least else r"\le"
    ok = (a > 0 and bound <= k) if at_least else (a < 0 and bound >= k)
    return f"${n}(x){rel} {F(bound)}$ holds for every real $x$.", ok


def q_horizontal(n, q, c):
    a, _, _ = coeffs(q)
    _, k = vertex_of(q)
    c = Rational(c)
    ok = (c > k) if a > 0 else (c < k)
    return (
        f"The horizontal line $y={F(c)}$ meets the graph of ${n}$ at two different points.",
        ok,
    )


def q_equal_values(n, q, p1, p2):
    v1 = Rational(expand(q.subs(x, p1)))
    v2 = Rational(expand(q.subs(x, p2)))
    return f"The values ${n}({F(p1)})$ and ${n}({F(p2)})$ are equal.", v1 == v2


def lead_coefficient(n, q, claim):
    a, _, _ = coeffs(q)
    return f"The leading coefficient of ${n}$ is ${F(claim)}$.", Rational(claim) == a


# --------------------------------------------------------------------------- #
# Line claims
# --------------------------------------------------------------------------- #

def l_slope(n, line, claim):
    m = Rational(Poly(line, x).nth(1))
    return f"The slope of the graph of ${n}$ is ${F(claim)}$.", Rational(claim) == m


def l_zero(n, line, claim):
    m = Rational(Poly(line, x).nth(1))
    t = Rational(Poly(line, x).nth(0))
    ok = m != 0 and Rational(-t, m) == Rational(claim)
    return f"The graph of ${n}$ crosses the $x$-axis at $x={F(claim)}$.", ok


def l_monotone(n, line, increasing=True):
    m = Rational(Poly(line, x).nth(1))
    word = "increasing" if increasing else "decreasing"
    return f"${n}$ is {word}.", (m > 0) == increasing and m != 0


def l_step(n, line, d, claim):
    m = Rational(Poly(line, x).nth(1))
    return (
        f"Increasing $x$ by ${F(d)}$ always changes ${n}$ by ${F(claim)}$.",
        Rational(claim) == m * Rational(d),
    )


def l_point(n, line, p, qv):
    return (
        rf"The point $\left({F(p)},{F(qv)}\right)$ lies on the graph of ${n}$.",
        Rational(expand(line.subs(x, p))) == Rational(qv),
    )


# --------------------------------------------------------------------------- #
# Applied claims (the model is a formula, the wording is a story)
# --------------------------------------------------------------------------- #

def _unit(u: str) -> str:
    return f" {u}" if u else ""


def a_value(subject, fn, x0, claim, unit=""):
    return (
        f"At $x={F(x0)}$ the {subject} equals ${F(claim)}${_unit(unit)}.",
        Rational(expand(fn.subs(x, x0))) == Rational(claim),
    )


def a_solve(subject, fn, claim, x0, unit=""):
    return (
        f"The {subject} equals ${F(claim)}${_unit(unit)} at $x={F(x0)}$.",
        Rational(expand(fn.subs(x, x0))) == Rational(claim),
    )


def a_step(subject, line, claim, step_noun="unit of $x$", unit=""):
    m = Rational(Poly(line, x).nth(1))
    return (
        f"Each extra {step_noun} changes the {subject} by ${F(claim)}${_unit(unit)}.",
        Rational(claim) == m,
    )


def a_doubling(subject, line):
    t = Rational(Poly(line, x).nth(0))
    return f"Doubling $x$ always doubles the {subject}.", t == 0


def a_extreme_at(subject, q, x0, largest=True):
    a, _, _ = coeffs(q)
    word = "largest" if largest else "smallest"
    ok = ((a < 0) == largest) and axis_of(q) == Rational(x0)
    return f"The {subject} is {word} at $x={F(x0)}$.", ok


def a_extreme_value(subject, q, claim, largest=True, unit=""):
    a, _, _ = coeffs(q)
    _, k = vertex_of(q)
    word = "largest" if largest else "smallest"
    ok = ((a < 0) == largest) and Rational(claim) == k
    return f"The {word} possible {subject} equals ${F(claim)}${_unit(unit)}.", ok


def a_zeros(subject, q, r1, r2):
    rs = roots_of(q)
    ok = len(rs) == 2 and rs == sorted([Rational(r1), Rational(r2)])
    return f"The {subject} is zero exactly at $x={F(r1)}$ and $x={F(r2)}$.", ok


def a_average_rate(subject, fn, p, qq, claim, unit=""):
    p, qq = Rational(p), Rational(qq)
    rate = (Rational(expand(fn.subs(x, qq))) - Rational(expand(fn.subs(x, p)))) / (qq - p)
    return (
        f"Between $x={F(p)}$ and $x={F(qq)}$ the {subject} changes at an "
        f"average rate of ${F(claim)}${_unit(unit)} per unit of $x$.",
        Rational(claim) == rate,
    )


def a_positive_between(subject, q, r1, r2):
    a, _, _ = coeffs(q)
    rs = roots_of(q)
    ok = len(rs) == 2 and rs == sorted([Rational(r1), Rational(r2)]) and a < 0
    return (
        f"The {subject} is positive for every $x$ strictly between "
        f"${F(r1)}$ and ${F(r2)}$.",
        ok,
    )


def a_constant_change(subject, fn, step_noun="unit of $x$"):
    return (
        f"The {subject} changes by the same amount for every extra {step_noun}.",
        Poly(fn, x).degree() <= 1,
    )


def a_never_zero(subject, q):
    return (
        f"The {subject} is never zero.",
        Rational(discriminant(Poly(q, x))) < 0,
    )


# --------------------------------------------------------------------------- #
# Table claims
# --------------------------------------------------------------------------- #

def table_fit(points):
    """Return (degree, expression) of the polynomial rule behind the table."""
    ys = [p[1] for p in points]
    xs = [p[0] for p in points]
    d1 = [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]
    dx = xs[1] - xs[0]
    if len(set(d1)) == 1:
        m = Rational(d1[0], dx)
        return 1, expand(m * (x - xs[0]) + ys[0])
    d2 = [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]
    if len(set(d2)) == 1:
        a = Rational(d2[0], 2 * dx * dx)
        b = Rational(d1[0], dx) - a * (2 * xs[0] + dx)
        c = ys[0] - a * xs[0] ** 2 - b * xs[0]
        return 2, expand(a * x**2 + b * x + c)
    return 0, None


def first_differences(points):
    ys = [p[1] for p in points]
    return [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]


def second_differences(points):
    d1 = first_differences(points)
    return [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]


def t_first_diff_constant(points):
    d1 = first_differences(points)
    return "The first differences of the $y$-values are constant.", len(set(d1)) == 1


def t_second_diff(points, claim):
    d2 = second_differences(points)
    return (
        f"The second differences of the $y$-values are constant and equal to ${F(claim)}$.",
        len(set(d2)) == 1 and Rational(d2[0]) == Rational(claim),
    )


def t_linear_model(points):
    deg, _ = table_fit(points)
    return "The table is consistent with a linear model.", deg == 1


def t_quadratic_model(points):
    deg, _ = table_fit(points)
    return "The table is consistent with a quadratic model.", deg == 2


def t_rule(points, claimed_expr):
    _, fit = table_fit(points)
    ok = fit is not None and expand(claimed_expr - fit) == 0
    return f"The table is produced by the rule $y={T(claimed_expr)}$.", ok


def t_slope(points, claim):
    deg, fit = table_fit(points)
    ok = deg == 1 and Rational(Poly(fit, x).nth(1)) == Rational(claim)
    return f"A linear rule through the table has slope ${F(claim)}$.", ok


def t_lead_coefficient(points, claim):
    deg, fit = table_fit(points)
    ok = deg == 2 and Rational(Poly(fit, x).nth(2)) == Rational(claim)
    return f"A quadratic rule through the table has leading coefficient ${F(claim)}$.", ok


def t_average_rate(points, p, qq, claim):
    d = dict(points)
    rate = Rational(d[qq] - d[p], qq - p)
    return (
        f"The average rate of change between $x={F(p)}$ and $x={F(qq)}$ is ${F(claim)}$.",
        Rational(claim) == rate,
    )


def t_continue(points, x0, claim):
    _, fit = table_fit(points)
    ok = fit is not None and Rational(expand(fit.subs(x, x0))) == Rational(claim)
    return (
        f"Continuing the pattern, the value at $x={F(x0)}$ is ${F(claim)}$.",
        ok,
    )


def t_extreme_row(points, x0, largest=True):
    word = "largest" if largest else "smallest"
    ys = [p[1] for p in points]
    target = max(ys) if largest else min(ys)
    ok = dict(points)[x0] == target and ys.count(target) == 1
    return f"The $y$-values in the table are {word} at $x={F(x0)}$.", ok
