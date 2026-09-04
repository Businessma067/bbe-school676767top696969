#!/usr/bin/env python3
"""Rewrite every tactical explanation in the Chapter 7 mixed exam (7.5) from scratch.

House style is Chapter 4 (`src/data/math-ch4-cases.json`): a header line, short
narrative sentences naming the idea, one display formula per step, and a closing
sentence that ends with ", so the statement is True." / "False.".

The generator that produced this bank (`gen-ch7-mixed-exam.py`) forced an even
spread of TRUE counts per task by relabelling claims it could not actually
repair, which left a number of answer keys contradicting their own statements.
Those keys are corrected here (see KEY_FIXES) so that the write-ups can stay
honest; statements and stems are untouched.

Run: python3 scripts/rewrite-ch7-mixed-explanations.py
"""

from __future__ import annotations

import json
import re
import statistics
from collections import Counter
from pathlib import Path

from sympy import (
    Poly,
    Rational,
    expand,
    factor,
    latex,
    solve,
    symbols,
)

PATH = Path("/workspace/src/data/math-ch7-mixed-exam.json")
LETTERS = "ABCDE"
x, t, A_sym = symbols("x t A")

BANNED = [
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "Keep the intermediate",
    "Read the stem once more",
    r"\deg",
    r"\circ",
    r"\text{stem}",
    r"\text{algebra}",
    r"\text{compare}",
    r"\text{verdict}",
    r"\text{check}",
    r"\text{model}",
    r"\text{trap}",
]


# ---------------------------------------------------------------------------
# Answer-key repairs (statement text is the guard: a mismatch aborts the run)
# ---------------------------------------------------------------------------

KEY_FIXES: dict[tuple[str, str], tuple[bool, str, str]] = {
    ("MATH 7.E03", "E"): (
        False,
        "multiplying by",
        "metres become millimetres by a factor 1000, so the gap is 25000 mm",
    ),
    ("MATH 7.E05", "A"): (
        False,
        "is tangent to the line",
        "Delta(3)=128, so the line cuts twice instead of touching",
    ),
    ("MATH 7.E05", "E"): (
        False,
        "making $\\Delta(t)=0$",
        "Delta(t)=4t^2+20t+32 has negative discriminant, so no real t gives tangency",
    ),
    ("MATH 7.E09", "E"): (
        False,
        "must have degree $3$",
        "g(f(x)) is quadratic; substitution multiplies degrees",
    ),
    ("MATH 7.E10", "B"): (
        False,
        "shifting the intercept",
        "a parallel line through a shifted intercept misses the point",
    ),
    ("MATH 7.E10", "D"): (
        False,
        "has degree $3$",
        "g(f(x)) is quadratic",
    ),
    ("MATH 7.E10", "E"): (
        False,
        "multiply to $-5$",
        "the roots of x^2-6x+5 multiply to 5",
    ),
    ("MATH 7.E11", "D"): (
        False,
        "horizontal line",
        "the axis of a parabola is vertical",
    ),
    ("MATH 7.E12", "B"): (
        False,
        "slope of the continuous line",
        "a first difference of a quadratic sequence is not a slope",
    ),
    ("MATH 7.E12", "D"): (
        False,
        "second differences are constantly",
        "the table's second differences are 2, not 1",
    ),
    ("MATH 7.E16", "E"): (
        False,
        "The axis of the rebuilt parabola",
        "the rebuilt axis is x=5",
    ),
    ("MATH 7.E17", "B"): (
        False,
        "because degrees add",
        "g(f(x)) is quadratic",
    ),
    ("MATH 7.E17", "E"): (
        False,
        "always equals",
        "composition is not commutative; letter D already shows -70 vs -156",
    ),
    ("MATH 7.E20", "E"): (
        False,
        "multiply to $-12$",
        "the roots of x^2-8x+12 multiply to 12",
    ),
    ("MATH 7.E23", "C"): (
        False,
        "degrees add under nesting",
        "g(f(x)) is quadratic",
    ),
    ("MATH 7.E23", "E"): (
        False,
        "multiplying by",
        "metres become millimetres by a factor 1000, so the gap is 56000 mm",
    ),
    ("MATH 7.E24", "C"): (
        False,
        "both roots must be positive",
        "a positive product also allows two negative roots",
    ),
    ("MATH 7.E25", "D"): (
        True,
        "When $k=2$",
        "Delta(2)=37>0, so the shifted line does meet twice",
    ),
    ("MATH 7.E29", "C"): (
        False,
        "equals $\\frac{24}{25}$",
        "the rewrite coefficient is -1/25",
    ),
    ("MATH 7.E29", "E"): (
        False,
        "degree $3$",
        "g(f(x)) is quadratic",
    ),
}


# ---------------------------------------------------------------------------
# LaTeX helpers
# ---------------------------------------------------------------------------

def L(v) -> str:
    s = latex(v, order="lex")
    return "-" + s[2:] if s.startswith("- ") else s


def par(v) -> str:
    """Bracket a number when it would otherwise glue onto a coefficient or power."""
    r = Rational(v)
    return f"\\left({L(r)}\\right)" if r < 0 or r.q != 1 else L(r)


def factor_tail(v) -> str:
    """A trailing factor in a product: '\\cdot 3' or '\\left(-3\\right)'."""
    return f"\\cdot {L(v)}" if v >= 0 else f"\\left({L(v)}\\right)"


def arg(v) -> str:
    return f"\\left({L(v)}\\right)"


def coeffs(poly):
    p = Poly(expand(poly), x)
    c = p.all_coeffs()
    while len(c) < 3:
        c = [0] + c
    return [Rational(v) for v in c]


def mono(coef, body: str, first: bool) -> str:
    if coef == 0:
        return ""
    sign = "-" if coef < 0 else ("" if first else "+")
    mag = abs(coef)
    if body == "":
        return sign + L(mag)
    if mag == 1:
        return sign + body
    return sign + L(mag) + body


def subst_expr(poly, v) -> str:
    """Write out the substitution, e.g. '-\\left(-4\\right)^{2}-8\\left(-4\\right)+3'."""
    a, b, c = coeffs(poly)
    out = mono(a, f"{arg(v)}^{{2}}", True)
    out += mono(b, arg(v), out == "")
    out += mono(c, "", out == "")
    return out or "0"


def nest_expr(g, inner) -> str:
    """Write g with `inner` substituted, before any expansion."""
    a, b, c = coeffs(g)
    body = f"\\left({L(inner)}\\right)"
    out = mono(a, f"{body}^{{2}}", True)
    out += mono(b, body, out == "")
    out += mono(c, "", out == "")
    return out


def axis_expr(poly) -> str:
    a, b, _ = coeffs(poly)
    return f"x=-\\frac{{{L(b)}}}{{2{factor_tail(a)}}}"


def axis_of(poly):
    a, b, _ = coeffs(poly)
    return Rational(-b, 2 * a)


def vertex_of(poly):
    h = axis_of(poly)
    return h, Rational(expand(poly).subs(x, h))


def disc_expr(poly) -> str:
    a, b, c = coeffs(poly)
    return f"\\Delta={par(b)}^{{2}}-4{factor_tail(a)}{factor_tail(c)}"


def disc_of(poly):
    a, b, c = coeffs(poly)
    return b**2 - 4 * a * c


def nmeet(f, g) -> int:
    d = disc_of(expand(g - f))
    return 2 if d > 0 else (1 if d == 0 else 0)


def rewrite_in_powers(g, f):
    """Solve g = A f^2 + B f + C and return (A, B, C)."""
    A, B, C = symbols("Acoef Bcoef Ccoef")
    sol = solve(
        Poly(expand(A * f**2 + B * f + C - g), x).all_coeffs(),
        [A, B, C],
        dict=True,
    )[0]
    return Rational(sol[A]), Rational(sol[B]), Rational(sol[C])


def rewrite_line(g, f) -> str:
    A, B, C = rewrite_in_powers(g, f)
    out = "g(x)="
    out += mono(A, "f(x)^{2}", True)
    out += mono(B, "f(x)", False)
    out += mono(C, "", False)
    return out


# ---------------------------------------------------------------------------
# Explanation assembly
# ---------------------------------------------------------------------------

def D(body: str) -> str:
    body = body.strip().replace("=- ", "=-")
    assert "\n" not in body, body
    assert "$" not in body, body
    return f"$${body}$$"


def build(letter: str, truth: bool, blocks: list[str]) -> str:
    verdict = "True" if truth else "False"
    body = "\n\n".join(b.strip() for b in blocks if b and b.strip())
    tail = f", so the statement is {verdict}."
    assert body.endswith(tail), (letter, body[-90:])
    return f"**{letter}.** → {verdict}\n\n{body}"


WORDS = {0: "no", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five"}


def word(n) -> str:
    return WORDS[int(n)]


def num(pattern: str, text: str) -> Rational:
    m = re.search(pattern, text)
    assert m, (pattern, text)
    return Rational(m.group(1))


# ---------------------------------------------------------------------------
# Per-task models
# ---------------------------------------------------------------------------

MODELS: dict[str, dict] = {
    # graph
    "MATH 7.E01": dict(f=2 * x - 5, g=-x**2 - 4 * x + 2),
    "MATH 7.E11": dict(f=2 * x - 4, g=x**2 - 12 * x + 5),
    "MATH 7.E21": dict(f=2 * x - 3, g=-x**2 - 8 * x + 8),
    # table / sequence
    "MATH 7.E02": dict(
        g=x**2 - 6 * x + 3, f=3 * x - 4, s=[3, -2, -5, -6, -5, -2, 3]
    ),
    "MATH 7.E12": dict(
        g=x**2 - 14 * x + 6, f=None, s=[6, -7, -18, -27, -34, -39, -42]
    ),
    "MATH 7.E22": dict(
        g=x**2 - 10 * x + 2, f=None, s=[2, -7, -14, -19, -22, -23, -22]
    ),
    # applied
    "MATH 7.E03": dict(f=4 * x - 3, g=x**2 - 8 * x + 4),
    "MATH 7.E13": dict(f=4 * x - 2, g=-x**2 - 4 * x + 7),
    "MATH 7.E23": dict(f=4 * x - 1, g=x**2 - 12 * x + 3),
    # rebuild
    "MATH 7.E06": dict(f=2 * x, g=x**2 - 14 * x + 7, pt=(4, 8)),
    "MATH 7.E16": dict(f=2 * x + 1, g=x**2 - 10 * x + 3, pt=(2, 5)),
    "MATH 7.E26": dict(f=2 * x + 2, g=x**2 - 6 * x + 6, pt=(3, 8)),
    # nested
    "MATH 7.E07": dict(f=3 * x + 1, g=x**2 - 4 * x + 8),
    "MATH 7.E17": dict(f=3 * x + 2, g=-x**2 - 12 * x + 4),
    "MATH 7.E27": dict(f=3 * x + 3, g=x**2 - 8 * x + 7),
    # factored
    "MATH 7.E08": dict(f=3 * x - 2, lead=1, roots=(1, 5)),
    "MATH 7.E18": dict(f=2 * x + 4, lead=-1, roots=(-3, 2)),
    "MATH 7.E28": dict(f=1 - x, lead=2, roots=(0, 4)),
    # hybrid
    "MATH 7.E09": dict(f=5 * x + 3, g=-x**2 - 8 * x + 3),
    "MATH 7.E19": dict(f=5 * x - 5, g=x**2 - 4 * x + 6),
    "MATH 7.E29": dict(f=5 * x - 4, g=-x**2 - 12 * x + 2),
    # text_dense
    "MATH 7.E10": dict(
        p=5 * x**2 - 3 * x + 1,
        slope=3,
        pt=(2, 11),
        q=-2 * x**2 + 6 * x - 4,
        inner=x + 1,
        outer=x * (2 * x - 3),
        vieta=x**2 - 6 * x + 5,
    ),
    "MATH 7.E20": dict(
        p=5 * x**2 - 5 * x + 2,
        slope=5,
        pt=(2, 15),
        q=-2 * x**2 + 7 * x - 4,
        inner=x + 2,
        outer=2 * x * (x - 2),
        vieta=x**2 - 8 * x + 12,
    ),
    "MATH 7.E30": dict(
        p=5 * x**2 - 3 * x + 3,
        slope=3,
        pt=(2, 11),
        q=-3 * x**2 + 8 * x - 4,
        inner=x + 3,
        outer=x * (2 * x - 5),
        vieta=x**2 - 10 * x + 21,
    ),
}

for _cid in MODELS:
    if "roots" in MODELS[_cid]:
        r1, r2 = MODELS[_cid]["roots"]
        MODELS[_cid]["g"] = expand(MODELS[_cid]["lead"] * (x - r1) * (x - r2))


# ---------------------------------------------------------------------------
# graph  (E01, E11, E21)
# ---------------------------------------------------------------------------

def graph_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    f, g = m["f"], m["g"]
    a, b, _ = coeffs(g)
    h, kv = vertex_of(g)
    gap = Rational(expand(f - g).subs(x, h))
    d = expand(g - f)
    dd = disc_of(d)
    meet = nmeet(f, g)
    mid = axis_of(d)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "The turning point of a parabola sits on its axis of symmetry, and that "
        "axis has abscissa $-b/(2a)$. For the curve in the figure:",
        D(axis_expr(g)),
        D(f"x={L(h)}"),
        "Substituting that abscissa returns the turning height:",
        D(f"g{arg(h)}={subst_expr(g, h)}"),
        D(f"g{arg(h)}={L(kv)}"),
        "Vieta gives the sum of the zeros as $-b/a$, and the axis always bisects "
        "the two zeros, so half that sum has to land on the same abscissa:",
        D(f"x_{{1}}+x_{{2}}=-\\frac{{{L(b)}}}{{{L(a)}}}"),
        D(f"x_{{1}}+x_{{2}}={L(-b / a)}"),
        D(f"\\frac{{x_{{1}}+x_{{2}}}}{{2}}={L(h)}"),
        f"The reading from the plot and the Vieta midpoint both give ${L(h)}$, and "
        f"the height at that abscissa is ${L(kv)}$, so the statement is True.",
    ]))

    # B ------------------------------------------------------------- False
    claim_gap = num(r"gap \$f-g\$ equals \$(-?\d+)\$", st[1])
    out.append(build("B", False, [
        "Two separate things are asserted: the size of the vertical gap over the "
        "axis, and how often the graphs cross. Take the gap first, at the axis "
        f"abscissa $x={L(h)}$:",
        D(f"f{arg(h)}={L(f.subs(x, h))}"),
        D(f"g{arg(h)}={L(kv)}"),
        D(f"f{arg(h)}-g{arg(h)}={L(gap)}"),
        f"The claim names ${L(claim_gap)}$. The crossing count is a different "
        "computation: the meeting abscissae are the real zeros of the difference.",
        D(f"d(x)=g(x)-f(x)={L(d)}"),
        D(disc_expr(d)),
        D(f"\\Delta={L(dd)}"),
        f"A positive discriminant gives {word(meet)} crossings, not none. Both halves "
        "of the compound claim fail, so the statement is False.",
    ]))

    # C ------------------------------------ True for E11/E21, False for E01
    claim_mid = num(r"equals \$x=(-?\d+)\$", st[2])
    if claim_mid == mid:
        out.append(build("C", True, [
            "The graphs meet where the difference vanishes, so the meeting "
            "abscissae are the zeros of $d=g-f$ and their midpoint is the axis of "
            "$d$ rather than the axis of $g$.",
            D(f"d(x)={L(d)}"),
            D(f"x_{{1}}+x_{{2}}={L(-coeffs(d)[1] / coeffs(d)[0])}"),
            D(f"\\frac{{x_{{1}}+x_{{2}}}}{{2}}={L(mid)}"),
            "The parabola's own axis is built from $g$ alone:",
            D(f"x={L(h)}"),
            "Subtracting the line changed the linear coefficient, which slides the "
            "midpoint of the meetings away from the vertex abscissa, exactly as "
            "the claim says, so the statement is True.",
        ]))
    else:
        out.append(build("C", False, [
            "The meeting abscissae are the zeros of $d=g-f$, so their midpoint is "
            "the axis of that difference:",
            D(f"d(x)={L(d)}"),
            D(f"x_{{1}}+x_{{2}}={L(-coeffs(d)[1] / coeffs(d)[0])}"),
            D(f"\\frac{{x_{{1}}+x_{{2}}}}{{2}}={L(mid)}"),
            "The vertex abscissa of the parabola is a different number:",
            D(f"x={L(h)}"),
            f"The midpoint is ${L(mid)}$, not the ${L(claim_mid)}$ the claim "
            f"quotes, and the claim goes on to assert that ${L(claim_mid)}$ differs "
            f"from ${L(h)}$ — the same number twice, so the statement is False.",
        ]))

    # D ------------------------------------------------------------- False
    claim_y = num(r"line \$y=(-?\d+)\$", st[3])
    out.append(build("D", False, [
        "For $ax^{2}+bx+c$ the mirror line runs vertically through the turning "
        "point, so it is described by fixing $x$, never by fixing $y$. Here the "
        "axis is",
        D(f"x={L(h)}"),
        "and folding the curve along it matches heights at equal distances either "
        "side:",
        D(f"g{arg(h - 1)}=g{arg(h + 1)}={L(expand(g).subs(x, h - 1))}"),
        "A horizontal line cannot do that; it meets the parabola in at most two "
        f"points instead of reflecting it. The number ${L(claim_y)}$ is not even "
        "the turning height, which is",
        D(f"g{arg(h)}={L(kv)}"),
        f"The axis is the vertical line $x={L(h)}$, so the statement is False.",
    ]))

    # E ---------------------------------- True for E11, False for E01/E21
    claim_n = num(r"exactly (\d+) real points", st[4])
    claim_gap_e = num(r"gap \$f-g\$ equals \$(-?\d+)\$", st[4])
    if claim_n == meet and claim_gap_e == gap:
        out.append(build("E", True, [
            "Both halves need checking separately. The crossings are the real "
            "zeros of the difference:",
            D(f"d(x)={L(d)}"),
            D(f"\\Delta={L(dd)}"),
            f"A positive discriminant means {word(meet)} distinct crossings, which "
            "is what the figure shows. The signed gap is read at the axis "
            "abscissa:",
            D(f"f{arg(h)}={L(f.subs(x, h))}"),
            D(f"g{arg(h)}={L(kv)}"),
            D(f"f{arg(h)}-g{arg(h)}={L(gap)}"),
            f"Two crossings and a signed gap of ${L(gap)}$: both halves hold, so "
            "the statement is True.",
        ]))
    else:
        wrong = "count" if claim_n != meet else "gap"
        out.append(build("E", False, [
            "The crossing count and the axis gap are independent computations, and "
            "here only one of them survives. The difference is quadratic, so its "
            "discriminant settles the count:",
            D(f"d(x)={L(d)}"),
            D(f"\\Delta={L(dd)}"),
            f"That gives {word(meet)} crossings, while the claim counts "
            f"{word(claim_n)}; a "
            "quadratic difference can never supply a third. The gap, on the other "
            "hand, is quoted correctly:",
            D(f"f{arg(h)}-g{arg(h)}={L(gap)}"),
            f"A compound claim needs both halves, and the {wrong} is wrong, so the "
            "statement is False.",
        ]))
    return out


# ---------------------------------------------------------------------------
# table / sequence  (E02, E12, E22)
# ---------------------------------------------------------------------------

def table_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    g, f, s = m["g"], m["f"], m["s"]
    a, b, c = coeffs(g)
    d1 = [s[i + 1] - s[i] for i in range(len(s) - 1)]
    ax = axis_of(g)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "A quadratic sequence $s_n=an^{2}+bn+c$ has constant second differences, "
        "and that constant is $2a$. The bottom row of the table therefore fixes "
        "the leading coefficient:",
        D("2a=2"),
        D(f"a={L(a)}"),
        "The opening first difference is $s_{1}-s_{0}$, which for this shape "
        "equals $a+b$, so the second unknown follows:",
        D(f"a+b={L(d1[0])}"),
        D(f"b={L(b)}"),
        "The constant term is simply the entry at $n=0$:",
        D(f"c=s_{{0}}={L(c)}"),
        f"The rebuild gives $s_{{n}}=n^{{2}}{mono(b, 'n', False)}"
        f"{mono(c, '', False)}$, the same coefficients as the continuous model "
        "$g$, so the statement is True.",
    ]))

    # B ------------------------------------------------------------- False
    if f is not None:
        out.append(build("B", False, [
            "A first difference and a slope are different objects. The slope of a "
            "line is the number multiplying $x$ in its own formula:",
            D(f"f(x)={L(f)}"),
            D(f"m={L(coeffs(f)[1])}"),
            f"The value ${L(d1[0])}$ is only the first step of the sequence, and "
            "those steps do not repeat — each one is larger than the last by the "
            "constant second difference:",
            D(f"s_{{1}}-s_{{0}}={L(d1[0])}"),
            D(f"s_{{2}}-s_{{1}}={L(d1[1])}"),
            f"A line has one slope for all of its points, so nothing about the "
            f"sequence's opening step can force the slope to be ${L(d1[0])}$, and "
            f"the printed slope is ${L(coeffs(f)[1])}$, so the statement is False.",
        ]))
    else:
        out.append(build("B", False, [
            "No formula for a line is printed in this stem, and even if one were, "
            "an opening first difference could not fix its slope. A line steps by "
            "the same amount every time; this sequence changes its step by $2$ at "
            "each index:",
            D(f"\\Delta^{{(2)}}=\\Delta^{{(1)}}_{{n+1}}-\\Delta^{{(1)}}_{{n}}=2"),
            "So the steps run",
            D(f"s_{{1}}-s_{{0}}={L(d1[0])}"),
            D(f"s_{{2}}-s_{{1}}={L(d1[1])}"),
            f"and continue climbing towards zero. No single line has both slopes, "
            f"so the opening difference ${L(d1[0])}$ is not the slope of anything "
            "here, so the statement is False.",
        ]))

    # C -------------------------------------------------------------- True
    sym_pairs = [
        (i, j)
        for i in range(len(s))
        for j in range(i + 1, len(s))
        if Rational(i + j, 2) == ax and s[i] == s[j]
    ]
    blocks = [
        f"With $a={L(a)}$ and $b={L(b)}$ recovered, the axis of the discrete "
        "quadratic is computed exactly as for any parabola:",
        D(axis_expr(g).replace("x=", "n=")),
        D(f"n={L(ax)}"),
        "The continuous model carries the identical coefficients, so its axis is "
        "the identical calculation:",
        D(f"x={L(ax)}"),
    ]
    if sym_pairs:
        i, j = sym_pairs[0]
        blocks += [
            "The table shows the same mirror directly, since entries at equal "
            "distances from that index agree:",
            D(f"s_{{{i}}}=s_{{{j}}}={L(s[i])}"),
        ]
    else:
        blocks += [
            "The table stops before that index, which is why the printed steps are "
            "still negative — they are shrinking towards the turn:",
            D(f"s_{{6}}-s_{{5}}={L(d1[5])}"),
        ]
    blocks.append(
        f"Discrete and continuous axes are both $x={L(ax)}$, so the statement is "
        "True."
    )
    out.append(build("C", True, blocks))

    # D ------------------------------------------------------------- False
    claim_d2 = num(r"constantly \$(-?\d+)\$", st[3])
    claim_a = Rational(claim_d2, 2)
    out.append(build("D", False, [
        "The rule quoted is the right rule: second differences of a quadratic "
        f"sequence equal $2a$, so a constant row of ${L(claim_d2)}$ really would "
        f"force a leading coefficient of ${L(claim_a)}$.",
        D(f"2a={L(claim_d2)}"),
        D(f"a={L(claim_a)}"),
        "What fails is the premise. The bottom row of the printed table is "
        "constant at a different value:",
        D("\\Delta^{(2)}=2"),
        D(f"a={L(a)}"),
        f"The leading coefficient is ${L(a)}$, not ${L(claim_a)}$, so the "
        "statement is False.",
    ]))

    # E ------------------------------- True for E12/E22, False for E02
    idx_named = int(num(r"At \$n=(\d+)\$", st[4]))
    idx_entry = int(num(r"s_(\d+)", st[4]))
    if idx_named == idx_entry:
        out.append(build("E", True, [
            "The claim ties one table entry to one evaluation of the continuous "
            f"model, so check the index first. At $n={idx_entry}$ the table reads",
            D(f"s_{{{idx_entry}}}={L(s[idx_entry])}"),
            "Evaluating the rebuilt formula at the same abscissa:",
            D(f"g{arg(idx_entry)}={subst_expr(g, Rational(idx_entry))}"),
            D(f"g{arg(idx_entry)}={L(expand(g).subs(x, idx_entry))}"),
            "The index quoted and the index used agree, and so do the two values, "
            "so the statement is True.",
        ]))
    else:
        out.append(build("E", False, [
            "The two numbers quoted are correct and the label in front of them is "
            "not, which is enough to sink the claim. The entry and the evaluation "
            "do match:",
            D(f"s_{{{idx_entry}}}={L(s[idx_entry])}"),
            D(f"g{arg(idx_entry)}={L(expand(g).subs(x, idx_entry))}"),
            f"But the column named is $n={idx_named}$, and that column holds a "
            "different value:",
            D(f"s_{{{idx_named}}}={L(s[idx_named])}"),
            D(f"g{arg(idx_named)}={L(expand(g).subs(x, idx_named))}"),
            f"The entry $s_{{{idx_entry}}}$ does not sit at $n={idx_named}$, so "
            "the statement is False.",
        ]))
    return out


# ---------------------------------------------------------------------------
# applied  (E03, E13, E23)
# ---------------------------------------------------------------------------

def applied_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    f, g = m["f"], m["g"]
    h, kv = vertex_of(g)
    gap = Rational(expand(f - g).subs(x, h))
    R = expand(x * f)
    rax = axis_of(R)
    d = expand(g - f)
    meet = nmeet(f, g)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "The gap is measured over the axis of the clearance parabola, so locate "
        "that abscissa first:",
        D(axis_expr(g)),
        D(f"x={L(h)}"),
        "Now evaluate both models there and subtract in the order named, $f$ minus "
        "$g$:",
        D(f"f{arg(h)}={L(f.subs(x, h))}"),
        D(f"g{arg(h)}={L(kv)}"),
        D(f"f{arg(h)}-g{arg(h)}={L(gap)}"),
        "Metres become centimetres by a factor of one hundred:",
        D(f"{L(gap)}\\cdot 100={L(gap * 100)}"),
        f"Gap and conversion both match the claim, so the statement is True.",
    ]))

    # B ------------------------------------------------------------- False
    out.append(build("B", False, [
        "Revenue and clearance are two different parabolas, so there is no reason "
        "for their axes to coincide. Multiplying the fare by the distance gives",
        D(f"R(x)=x\\left({L(f)}\\right)"),
        D(f"R(x)={L(R)}"),
        D(axis_expr(R)),
        D(f"x={L(rax)}"),
        f"So the abscissa ${L(rax)}$ is genuinely the vertex of $R$ — though with "
        f"a positive leading coefficient ${L(coeffs(R)[0])}$ that vertex is the "
        "lowest point of revenue, not a peak. The clearance parabola turns "
        "somewhere else entirely:",
        D(f"x={L(h)}"),
        f"The two abscissae ${L(rax)}$ and ${L(h)}$ are not equal, so the "
        "statement is False.",
    ]))

    # C ------------------------------------------------------------- False
    gf = expand(g.subs(x, f))
    out.append(build("C", False, [
        "Substitution is not multiplication: nesting replaces $x$ by a linear "
        "expression, and the degrees multiply rather than add. Write it out:",
        D(f"g(f(x))={nest_expr(g, f)}"),
        D(f"g(f(x))={L(gf)}"),
        "The only square in play is the square of a linear expression, which "
        "reaches $x^{2}$ and stops there:",
        D(f"\\left({L(f)}\\right)^{{2}}={L(expand(f**2))}"),
        "There is no cubic term anywhere in the composition, so the statement is "
        "False.",
    ]))

    # D ---------------------------------- True for E03/E23, False for E13
    claim_n = num(r"exactly (\d+) distinct real points", st[3])
    if claim_n == meet:
        out.append(build("D", True, [
            "Meetings are the real solutions of $f(x)=g(x)$, so move everything to "
            "one side and count zeros:",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            "A positive discriminant gives two distinct real roots, so the line "
            "cuts the clearance parabola at two separate abscissae, so the "
            "statement is True.",
        ]))
    else:
        out.append(build("D", False, [
            "The difference of a line and a parabola is quadratic, so it has at "
            "most two real zeros and the graphs can meet at most twice. Here",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            f"A positive discriminant gives exactly {word(meet)} crossings, and no "
            "quadratic difference can supply the third one the claim counts, so the "
            "statement is False.",
        ]))

    # E ------------------------------------------------------------- False
    claim_mm = num(r"gives \$(-?\d+)\$ mm", st[4])
    out.append(build("E", False, [
        f"The gap itself is settled above: over the axis $f-g$ measures "
        f"${L(gap)}$ metres.",
        D(f"f{arg(h)}-g{arg(h)}={L(gap)}"),
        "What the claim mishandles is the unit step rather than the arithmetic. "
        "Multiplying by ten does give the number quoted:",
        D(f"{L(gap)}\\cdot 10={L(claim_mm)}"),
        "But one metre is a thousand millimetres, so the conversion needs the "
        "larger factor:",
        D(f"{L(gap)}\\cdot 1000={L(gap * 1000)}"),
        f"The factor $10$ only carries centimetres to millimetres. In millimetres "
        f"the gap is ${L(gap * 1000)}$, not ${L(claim_mm)}$, so the statement is "
        "False.",
    ]))
    return out


# ---------------------------------------------------------------------------
# symbolic  (E04, E14, E24) — no numeric data in these stems
# ---------------------------------------------------------------------------

def symbolic_task(task: dict, cycle: int) -> list[str]:
    if cycle == 0:
        return symbolic_difference()
    if cycle == 1:
        return symbolic_mirror()
    return symbolic_vieta()


def symbolic_difference() -> list[str]:
    return [
        build("A", True, [
            "Subtracting a line from a parabola leaves the squared term alone but "
            "changes the linear coefficient. Writing $g(x)=ax^{2}+bx+c$ and "
            "$f(x)=mx+k$:",
            D("d(x)=ax^{2}+\\left(b-m\\right)x+\\left(c-k\\right)"),
            "An axis depends only on the first two coefficients, so compare the "
            "two axes built from them:",
            D("x_{d}=-\\frac{b-m}{2a}"),
            D("x_{g}=-\\frac{b}{2a}"),
            D("x_{d}-x_{g}=\\frac{m}{2a}"),
            "That difference vanishes only when $m$ does, and a non-constant line "
            "has $m\\neq 0$, so the two axes really do sit apart, so the "
            "statement is True.",
        ]),
        build("B", True, [
            "The subtraction runs coefficient by coefficient, and a line has no "
            "squared term to contribute:",
            D("d(x)=\\left(ax^{2}+bx+c\\right)-\\left(mx+k\\right)"),
            D("d(x)=ax^{2}+\\left(b-m\\right)x+\\left(c-k\\right)"),
            "Only the linear and constant coefficients absorb $m$ and $k$, so the "
            "coefficient of $x^{2}$ in $d$ is the untouched leading coefficient "
            "of $g$:",
            D("a_{d}=a"),
            "That is exactly what the claim asserts, so the statement is True.",
        ]),
        build("C", True, [
            "Tangency means the graphs touch without crossing, so the equation "
            "$g(x)=f(x)$ has one repeated solution. A repeated solution of the "
            "difference is a double zero:",
            D("d(x)=a\\left(x-x_{0}\\right)^{2}"),
            "A double zero sits on the axis, so $x_{0}$ is the vertex abscissa, "
            "and the vertex height is the value of $d$ there:",
            D("d\\left(x_{0}\\right)=0"),
            "A vertex of height zero lies on the horizontal axis, so the statement "
            "is True.",
        ]),
        build("D", False, [
            "Degrees add when polynomials are multiplied; under substitution they "
            "multiply instead. Put the line inside the quadratic:",
            D("g(f(x))=a\\left(mx+k\\right)^{2}+b\\left(mx+k\\right)+c"),
            "Squaring a linear expression reaches $x^{2}$ and no further, so the "
            "expansion closes at the second power:",
            D("g(f(x))=am^{2}x^{2}+\\left(2amk+bm\\right)x+\\left(ak^{2}+bk+c\\right)"),
            "The highest power is $x^{2}$, the product of the two degrees, while "
            "the rule in the claim would predict $x^{3}$, so the statement is "
            "False.",
        ]),
        build("E", True, [
            "The difference inherits the leading coefficient of $g$, so it opens "
            "the same way $g$ does:",
            D("d(x)=ax^{2}+\\left(b-m\\right)x+\\left(c-k\\right)"),
            "An upward parabola falls to its vertex and rises after it, so the "
            "vertex height is the least value it ever takes:",
            D("d(x)\\geq d\\left(x_{d}\\right)"),
            "A downward one has a greatest value instead and falls without bound "
            "on both sides, so it has no smallest value at all. The existence of a "
            "minimum is therefore exactly the upward case:",
            D("a>0"),
            "That is the condition named, so the statement is True.",
        ]),
    ]


def symbolic_mirror() -> list[str]:
    return [
        build("A", True, [
            "Replacing $x$ by $-x$ reflects both graphs in the vertical axis, and "
            "a reflection moves crossings without creating or destroying them. A "
            "meeting abscissa of the mirrored pair solves",
            D("f(-x)=g(-x)"),
            "Substituting $u=-x$ turns that into the original equation:",
            D("f(u)=g(u)"),
            "So each meeting of the original pair at $u$ corresponds to exactly one "
            "meeting of the mirrored pair at $-u$, and the correspondence works in "
            "both directions:",
            D("u\\mapsto -u"),
            "A one-to-one pairing keeps the counts equal, so the statement is True.",
        ]),
        build("B", True, [
            "Tangency is a statement about a repeated solution, and the "
            "substitution $u=-x$ preserves multiplicity. The mirrored difference "
            "is the old difference read backwards:",
            D("\\tilde g(x)-\\tilde f(x)=g(-x)-f(-x)"),
            "If the original difference has a double zero at $u_{0}$, factor it and "
            "substitute:",
            D("g(u)-f(u)=a\\left(u-u_{0}\\right)^{2}"),
            D("g(-x)-f(-x)=a\\left(x+u_{0}\\right)^{2}"),
            "The mirrored difference again has a double zero, at $-u_{0}$, which is "
            "again a touch without a crossing, so the statement is True.",
        ]),
        build("C", False, [
            "The number of meetings is the number of real zeros of the difference, "
            "and mirroring does not change the shape of that difference:",
            D("\\tilde g(x)-\\tilde f(x)=g(-x)-f(-x)"),
            "The reflection leaves the squared term intact, because the minus sign "
            "is squared away:",
            D("a\\left(-x\\right)^{2}=ax^{2}"),
            "So the mirrored difference is still quadratic in $x$, only with the "
            "linear term reversed:",
            D("\\tilde g(x)-\\tilde f(x)=ax^{2}-\\left(b-m\\right)x+\\left(c-k\\right)"),
            "Two before and at most two after; a third meeting is out of reach for "
            "either pair, so the statement is False.",
        ]),
        build("D", False, [
            "The reflection leaves the leading coefficient untouched, since the "
            "square kills the minus sign:",
            D("a\\left(-x\\right)^{2}=ax^{2}"),
            "So the mirrored parabola does open the same way as the original — but "
            "precisely because its leading coefficient is unchanged. Replacing that "
            "coefficient by its opposite would flip the opening instead:",
            D("a\\mapsto -a"),
            "The rider attached to the claim reverses the very fact it is supposed "
            "to explain, so the statement is False.",
        ]),
        build("E", False, [
            "Reflecting in the vertical axis carries the axis of symmetry to its "
            "mirror image. If the original turns at $x_{0}$, the mirrored curve "
            "takes the same heights at the opposite abscissae:",
            D("\\tilde g\\left(-x_{0}\\right)=g\\left(x_{0}\\right)"),
            D("x_{\\tilde g}=-x_{0}"),
            "The two axes therefore coincide only in one special case:",
            D("x_{0}=0"),
            "The word \"always\" is what breaks the claim, since any parabola whose "
            "axis is off centre is a counterexample, so the statement is False.",
        ]),
    ]


def symbolic_vieta() -> list[str]:
    return [
        build("A", True, [
            "With two distinct real roots the product is a genuine product of two "
            "nonzero numbers, and its sign records whether they agree:",
            D("P=x_{1}x_{2}<0"),
            "If both roots were positive the product would be positive; if both "
            "were negative the two minus signs would cancel and the product would "
            "be positive again:",
            D("\\left(-p\\right)\\left(-q\\right)=pq>0"),
            "Only one positive and one negative root leaves the product negative, "
            "so the statement is True.",
        ]),
        build("B", True, [
            "Read the two conditions in turn. A positive product rules out roots of "
            "opposite signs, so the roots share a sign:",
            D("P=x_{1}x_{2}>0"),
            "The sum then decides which sign that is, because two positive numbers "
            "cannot add to something negative:",
            D("S=x_{1}+x_{2}<0"),
            "Same sign together with a negative total leaves exactly one case:",
            D("x_{1}<0,\\ x_{2}<0"),
            "That is what the claim concludes, so the statement is True.",
        ]),
        build("C", False, [
            "A positive product says only that the roots share a sign; it does not "
            "say which sign, because two negatives multiply to a positive just as "
            "two positives do:",
            D("P=x_{1}x_{2}>0"),
            "The sum is what separates the cases, and the claim never consults it:",
            D("S=x_{1}+x_{2}"),
            "A pair of negative roots gives a positive product with a negative sum, "
            "so it satisfies the hypothesis and refutes the conclusion:",
            D("\\left(-p\\right)\\left(-q\\right)=pq>0"),
            "\"Both positive\" is therefore not forced, so the statement is False.",
        ]),
        build("D", True, [
            "Vieta's sum and the axis carry the same information. A vanishing sum "
            "makes the roots negatives of each other:",
            D("x_{1}+x_{2}=S=0"),
            D("x_{2}=-x_{1}"),
            "The axis of a parabola bisects its zeros, so it sits at their average:",
            D("\\frac{x_{1}+x_{2}}{2}=0"),
            "A vertical mirror at abscissa zero is the vertical coordinate axis "
            "itself, so both halves of the claim hold, so the statement is True.",
        ]),
        build("E", True, [
            "The product of the roots is not a free number: Vieta ties it to the "
            "coefficients.",
            D("P=\\frac{c}{a}"),
            "A negative product with a positive leading coefficient forces the "
            "constant term to be negative:",
            D("\\frac{c}{a}<0"),
            D("c<0"),
            "The constant term is the height of the graph over the vertical axis, "
            "because substituting zero kills the other two terms:",
            D("g(0)=c"),
            "So that height is negative, so the statement is True.",
        ]),
    ]


# ---------------------------------------------------------------------------
# parametric  (E05, E15, E25)
# ---------------------------------------------------------------------------

def parametric_task(task: dict, cycle: int) -> list[str]:
    if cycle == 0:
        return parametric_riverferry(task)
    if cycle == 1:
        return parametric_minecart(task)
    return parametric_substation(task)


def parametric_riverferry(task: dict) -> list[str]:
    f = 6 * x - 1
    gt = x**2 - 2 * t * x + t
    d = expand(gt - f)
    dt = expand(-coeffs_t(d, 1))
    disc_t = expand(dt**2 - 4 * coeffs_t(d, 0))
    t0 = Rational(3)
    g3 = expand(gt.subs(t, t0))
    d3 = expand(g3 - f)
    disc3 = disc_of(d3)
    inner = expand(disc_t)
    a_t, b_t, c_t = Poly(inner, t).all_coeffs()
    disc_of_disc = b_t**2 - 4 * a_t * c_t
    return [
        build("A", False, [
            "Tangency is the case of a single repeated meeting, which happens "
            "exactly when the difference has discriminant zero. Build that "
            "difference for the whole family first:",
            D("g_t(x)-f(x)=x^{2}-\\left(2t+6\\right)x+\\left(t+1\\right)"),
            D(f"\\Delta(t)=\\left({L(dt)}\\right)^{{2}}-4\\left({L(coeffs_t(d, 0))}\\right)"),
            D(f"\\Delta(t)={L(inner)}"),
            "Now substitute the run under review:",
            D(f"\\Delta(3)={L(disc3)}"),
            f"A discriminant of ${L(disc3)}$ is far from zero, so the line cuts "
            "this parabola at two separate abscissae instead of touching it once, "
            "so the statement is False.",
        ]),
        build("B", True, [
            "The question is whether the discriminant stays positive along the "
            "whole half-line, and that is itself a quadratic question. The "
            "discriminant of the family is",
            D(f"\\Delta(t)={L(inner)}"),
            "Its own discriminant decides whether it ever reaches zero:",
            D(f"{L(b_t)}^{{2}}-4\\cdot {L(a_t)}\\cdot {L(c_t)}={L(disc_of_disc)}"),
            f"A negative value there means $\\Delta(t)$ has no real zeros, and its "
            f"leading coefficient ${L(a_t)}$ is positive, so it never drops to the "
            "axis:",
            D("\\Delta(t)>0"),
            "Positive for every $t$ is in particular positive for every $t>4$, and "
            "a positive discriminant means two distinct crossings, so the statement "
            "is True.",
        ]),
        build("C", True, [
            "At a fixed parameter the family collapses to a single parabola, so "
            "substitute before counting:",
            D(f"g_3(x)={L(g3)}"),
            D(f"g_3(x)-f(x)={L(d3)}"),
            D(disc_expr(d3)),
            D(f"\\Delta={L(disc3)}"),
            "A positive discriminant leaves the difference with two distinct real "
            "zeros, and each zero is a crossing, so the statement is True.",
        ]),
        build("D", True, [
            "Whatever the parameter does to the coefficients, subtracting a line "
            "never removes the squared term:",
            D("g_t(x)-f(x)=x^{2}-\\left(2t+6\\right)x+\\left(t+1\\right)"),
            "The leading coefficient stays $1$ for every $t$, so the difference is "
            "a genuine quadratic and the quadratic formula offers only two "
            "candidate abscissae:",
            D(f"x=\\frac{{{L(dt)}\\pm\\sqrt{{\\Delta(t)}}}}{{2}}"),
            "Depending on the sign of $\\Delta(t)$ that list supplies two crossings, "
            "one, or none, but never a third, so the statement is True.",
        ]),
        build("E", False, [
            "Tangency somewhere in the family would need the discriminant to vanish "
            "for some real parameter, so solve that equation:",
            D(f"{L(inner)}=0"),
            D(f"{L(expand(inner / 4))}=0"),
            "Whether a real $t$ exists is decided by the discriminant of this "
            "parameter equation:",
            D(f"5^{{2}}-4\\cdot 1\\cdot 8={L(25 - 32)}"),
            "A negative value means no real $t$ solves it, so $\\Delta(t)$ never "
            "reaches zero and no member of the family is tangent to the line, so "
            "the statement is False.",
        ]),
    ]


def coeffs_t(poly, power: int):
    """Coefficient of x**power in a polynomial that also involves t."""
    return Rational(0) + Poly(poly, x).coeff_monomial(x**power) if power else Poly(
        poly, x
    ).coeff_monomial(1)


def parametric_minecart(task: dict) -> list[str]:
    a_sym = symbols("a")
    f = 6 * x
    ga = a_sym * x**2 + 2 * x - 3
    d = expand(ga - f)
    disc_a = expand(16 + 12 * a_sym)
    tan_a = Rational(-4, 3)
    return [
        build("A", True, [
            "Tangency asks for a vanishing discriminant, so build the difference "
            "and read its discriminant as a function of the parameter:",
            D(f"g_a(x)-f(x)={L(d)}"),
            D("\\Delta(a)=\\left(-4\\right)^{2}-4a\\left(-3\\right)"),
            D(f"\\Delta(a)={L(disc_a)}"),
            "Setting that to zero picks out one parameter value:",
            D("12a+16=0"),
            D(f"a={L(tan_a)}"),
            "That value is nonzero, so it is admissible for the family, and there "
            "the line touches the parabola exactly once, so the statement is True.",
        ]),
        build("B", False, [
            "For genuine parabolas the inequality is the right one: two crossings "
            "need a positive discriminant, and that happens above the tangency "
            "threshold.",
            D(f"\\Delta(a)={L(disc_a)}"),
            D(f"\\Delta(a)>0\\Leftrightarrow a>{L(tan_a)}"),
            "The trouble is that the half-line as written also contains the one "
            "value the family excludes, and there the squared term disappears "
            "altogether:",
            D("g_0(x)=2x-3"),
            "Two lines of different slopes meet once, not twice:",
            D("2x-3=6x"),
            "Restricted to admissible parameters the count would be right, but "
            "\"every $a>-\\frac{4}{3}$\" reaches one value too far, so the "
            "statement is False.",
        ]),
        build("C", True, [
            "A complete miss means the difference has no real zero, so make the "
            "discriminant negative:",
            D(f"\\Delta(a)={L(disc_a)}"),
            D("12a+16<0"),
            D(f"a<{L(tan_a)}"),
            "Any parameter below that threshold qualifies, for instance",
            D(f"\\Delta(-2)={L(disc_a.subs(a_sym, -2))}"),
            "A negative discriminant leaves the line and the parabola without a "
            "common abscissa, so such $a$ exist, so the statement is True.",
        ]),
        build("D", False, [
            "The axis of $ax^{2}+2x-3$ is built from its first two coefficients, "
            "and only one of those is fixed:",
            D("x=-\\frac{2}{2a}"),
            D("x=-\\frac{1}{a}"),
            "The parameter sits in the denominator, so changing it moves the axis:",
            D("a=1\\Rightarrow x=-1"),
            D("a=2\\Rightarrow x=-\\frac{1}{2}"),
            "Different parameters give different axes, so the statement is False.",
        ]),
        build("E", True, [
            "The crossing of the vertical axis is the value at abscissa zero, and "
            "there both the squared and the linear term collapse whatever the "
            "parameter is:",
            D("g_a(0)=a\\cdot 0^{2}+2\\cdot 0-3"),
            D("g_a(0)=-3"),
            "The parameter multiplies a term that has already vanished, so every "
            "member of the family crosses the vertical axis at the same height, "
            "which is the crossing named, so the statement is True.",
        ]),
    ]


def parametric_substation(task: dict) -> list[str]:
    k = symbols("k")
    g = x**2 - 2 * x - 5
    fk = x + k
    d = expand(g - fk)
    disc_k = expand(9 + 4 * (5 + k))
    k_tan = Rational(-29, 4)
    probe = Rational(2)
    d2 = expand(d.subs(k, probe))
    return [
        build("A", True, [
            "Sliding the line vertically changes only the constant term of the "
            "difference, so the discriminant comes out linear in the shift:",
            D("g(x)-f_k(x)=x^{2}-3x-\\left(5+k\\right)"),
            D("\\Delta(k)=\\left(-3\\right)^{2}-4\\left(-5-k\\right)"),
            D(f"\\Delta(k)={L(disc_k)}"),
            "A linear expression vanishes at exactly one place:",
            D("4k+29=0"),
            D(f"k={L(k_tan)}"),
            "One shift and no other makes the discriminant zero, which is one "
            "touching point, so the statement is True.",
        ]),
        build("B", False, [
            "Below the tangency threshold the discriminant is negative, and a "
            "negative discriminant means no meeting at all:",
            D(f"\\Delta(k)={L(disc_k)}"),
            D(f"k<{L(k_tan)}\\Rightarrow\\Delta(k)<0"),
            "Taking a shift from that range shows it:",
            D(f"\\Delta(-10)={L(disc_k.subs(k, -10))}"),
            "No real abscissa then satisfies $g(x)=f_k(x)$, so the line misses the "
            "parabola entirely rather than cutting it twice, so the statement is "
            "False.",
        ]),
        build("C", False, [
            "Two crossings need a positive discriminant, and that fixes the "
            "threshold exactly:",
            D(f"\\Delta(k)={L(disc_k)}"),
            D(f"\\Delta(k)>0\\Leftrightarrow k>{L(k_tan)}"),
            "The threshold quoted in the claim is the smaller number "
            "$-\\frac{30}{4}$, so its range also admits shifts between the two "
            "values. Test one:",
            D(f"\\Delta\\left(-\\frac{{59}}{{8}}\\right)={L(disc_k.subs(k, Rational(-59, 8)))}"),
            "There the line misses the parabola completely, so the claim fails on "
            "part of its own range, so the statement is False.",
        ]),
        build("D", True, [
            "Substitute the shift into the discriminant that was set up for the "
            "family:",
            D(f"\\Delta(k)={L(disc_k)}"),
            D(f"\\Delta(2)={L(disc_k.subs(k, probe))}"),
            "A positive value means the difference has two distinct real zeros, and "
            "the difference itself confirms the shape:",
            D(f"{L(d2)}=0"),
            "Two distinct real abscissae are two crossings, exactly as claimed, so "
            "the statement is True.",
        ]),
        build("E", False, [
            "Whether the line reaches the parabola depends on the shift, so the "
            "word \"every\" is the part to test:",
            D(f"\\Delta(k)={L(disc_k)}"),
            "The discriminant is negative for all shifts below the threshold:",
            D(f"k<{L(k_tan)}"),
            "One explicit counterexample settles it:",
            D(f"\\Delta(-8)={L(disc_k.subs(k, -8))}"),
            "For that shift the difference has no real zero, so those two graphs "
            "never touch, so the statement is False.",
        ]),
    ]


# ---------------------------------------------------------------------------
# rebuild  (E06, E16, E26)
# ---------------------------------------------------------------------------

def rebuild_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    f, g = m["f"], m["g"]
    px, py = m["pt"]
    slope = coeffs(f)[1]
    q = coeffs(f)[2]
    h, kv = vertex_of(g)
    d = expand(g - f)
    meet = nmeet(f, g)
    A, B, C = rewrite_in_powers(g, f)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "A slope and one point determine a line: keep the slope and let the point "
        "fix the intercept.",
        D(f"y={L(slope)}x+q"),
        D(f"{L(py)}={L(slope)}\\cdot {L(px)}+q"),
        D(f"q={L(q)}"),
        f"So the line is $f(x)={L(f)}$. Substituting the given abscissa checks it:",
        D(f"f{arg(px)}={L(f.subs(x, px))}"),
        "The rebuilt formula reproduces the point with the stated slope, so the "
        "statement is True.",
    ]))

    # B ----------------------------------- True for E16/E26, False for E06
    sq = expand(f**2)
    if "f(x)^3" in st[1] or "f(x)^{3}" in st[1]:
        out.append(build("B", False, [
            f"The number ${L(A)}$ is right, but the power attached to it is not. A "
            "cube of a linear expression climbs to $x^{3}$, and the rebuilt "
            "parabola has no cubic term to absorb it:",
            D(f"f(x)^{{3}}={L(expand(f**3))}"),
            "The square is the power that fits, and matching squared terms fixes "
            "the coefficient:",
            D(f"f(x)^{{2}}={L(sq)}"),
            D(f"{L(coeffs(sq)[0])}A=1"),
            D(f"A={L(A)}"),
            "With that value the rewrite closes:",
            D(rewrite_line(g, f)),
            "The correct rewrite uses $f(x)^{2}$, not $f(x)^{3}$, so the statement "
            "is False.",
        ]))
    else:
        out.append(build("B", True, [
            "Writing $g$ in powers of the line is coefficient matching, and only "
            "the squared terms decide $A$. Square the line first:",
            D(f"f(x)^{{2}}={L(sq)}"),
            "Nothing else on the right-hand side is quadratic, so the squared "
            "terms have to agree on their own:",
            D(f"{L(coeffs(sq)[0])}A=1"),
            D(f"A={L(A)}"),
            "The linear and constant coefficients then fix the other two numbers "
            "and the rewrite closes:",
            D(rewrite_line(g, f)),
            f"The leading coefficient of the rewrite is ${L(A)}$, as claimed, so "
            "the statement is True.",
        ]))

    # C ------------------------------------------------------------- False
    claim_A = Rational(5, 4)
    out.append(build("C", False, [
        "Only the squared terms matter for the leading coefficient of the rewrite, "
        "so compare them directly:",
        D(f"f(x)^{{2}}={L(sq)}"),
        D(f"A\\cdot {L(coeffs(sq)[0])}x^{{2}}=x^{{2}}"),
        D(f"A={L(A)}"),
        "Testing the claimed value shows the mismatch at once:",
        D(f"{L(claim_A)}\\cdot {L(coeffs(sq)[0])}x^{{2}}={L(claim_A * coeffs(sq)[0])}x^{{2}}"),
        f"That would describe a parabola {word(claim_A * coeffs(sq)[0])} times as "
        f"steep as the rebuilt one, whose squared term is plain $x^{{2}}$, so the "
        "statement is False.",
    ]))

    # D ---------------------------------- True for E16, False for E06/E26
    claim_n = num(r"exactly (\d+) distinct real points", st[3])
    if claim_n == meet:
        out.append(build("D", True, [
            "Two things travel together here: how often the curves meet, and where "
            "the vertex sits. Meetings come from the difference:",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            "A positive discriminant gives two distinct crossings. The vertex "
            "height can be confirmed straight from the rebuilt formula:",
            D(f"g{arg(h)}={L(kv)}"),
            f"Two meetings and a vertex height of ${L(kv)}$: both halves hold, so "
            "the statement is True.",
        ]))
    else:
        out.append(build("D", False, [
            "The vertex height in the claim is correct, so the count is what has to "
            "be tested. Subtract the line from the parabola:",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            f"A positive discriminant means {word(meet)} distinct real crossings, "
            f"and a "
            "quadratic difference cannot supply a third. The height does check out:",
            D(f"g{arg(h)}={L(kv)}"),
            "A correct height cannot rescue a wrong count, so the statement is "
            "False.",
        ]))

    # E ------------------------------------------------------------- False
    claim_ax = num(r"axis of the rebuilt parabola is \$x=(-?\d+)\$", st[4])
    mirror = 2 * claim_ax - h
    out.append(build("E", False, [
        "The axis runs through the vertex, and the rebuild data name that vertex "
        "outright:",
        D(f"V=\\left({L(h)},{L(kv)}\\right)"),
        "The rebuilt coefficients say the same thing:",
        D(axis_expr(g)),
        D(f"x={L(h)}"),
        f"If the mirror were the claimed $x={L(claim_ax)}$, heights at equal "
        "distances from it would agree, and they do not:",
        D(f"g{arg(h)}={L(kv)}"),
        D(f"g{arg(mirror)}={L(expand(g).subs(x, mirror))}"),
        f"The axis is $x={L(h)}$, not $x={L(claim_ax)}$, so the statement is False.",
    ]))
    return out


# ---------------------------------------------------------------------------
# nested  (E07, E17, E27)
# ---------------------------------------------------------------------------

def nested_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    f, g = m["f"], m["g"]
    gf = expand(g.subs(x, f))
    fg = expand(f.subs(x, g))
    lead_gf, lead_fg = coeffs(gf)[0], coeffs(fg)[0]
    A, B, C = rewrite_in_powers(g, f)
    sq = expand(f**2)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "Composition substitutes one formula into the other, so expand both orders "
        "before comparing. First the line inside the parabola:",
        D(f"g(f(x))={nest_expr(g, f)}"),
        D(f"g(f(x))={L(gf)}"),
        "Now the parabola inside the line, where the outer formula only scales and "
        "shifts what it receives:",
        D(f"f(g(x))={L(coeffs(f)[1])}\\left({L(g)}\\right)+{L(coeffs(f)[2])}"),
        D(f"f(g(x))={L(fg)}"),
        f"Both compositions are quadratic, with leading coefficients ${L(lead_gf)}$ "
        f"and ${L(lead_fg)}$ as claimed, so the statement is True.",
    ]))

    # B ------------------------------------------------------------- False
    out.append(build("B", False, [
        "Degrees add when polynomials are multiplied; under substitution they "
        "multiply, and here one of the two degrees is $1$. Expanding shows where "
        "the highest power comes from:",
        D(f"g(f(x))={nest_expr(g, f)}"),
        D(f"g(f(x))={L(gf)}"),
        "The only square in play is the square of a linear expression:",
        D(f"\\left({L(f)}\\right)^{{2}}={L(sq)}"),
        "That reaches $x^{2}$ and stops, and no other term in $g$ raises the power, "
        "so there is no cubic term to be had, so the statement is False.",
    ]))

    # C -------------------------------------------------------------- True
    out.append(build("C", True, [
        "Rewriting $g$ in powers of $f$ is coefficient matching, and the squared "
        "term alone fixes $A$. Square the line:",
        D(f"f(x)^{{2}}={L(sq)}"),
        f"Only $A f(x)^{{2}}$ can produce a squared term, since $B f(x)+C$ is "
        "linear, so match the two squared terms:",
        D(f"{L(coeffs(sq)[0])}A={L(coeffs(g)[0])}"),
        D(f"A={L(A)}"),
        "The linear and constant coefficients then determine the other two numbers "
        "and the rewrite closes:",
        D(rewrite_line(g, f)),
        f"Such $A$, $B$, $C$ exist and $A={L(A)}$, so the statement is True.",
    ]))

    # D ----------------------------------- True for E17/E27, False for E07
    m1 = re.search(r"g\(f\((-?\d+)\)\)=(-?\d+)", st[3])
    m2 = re.search(r"f\(g\((-?\d+)\)\)=(-?\d+)", st[3])
    assert m1 and m2, st[3]
    v1, c1 = Rational(m1.group(1)), Rational(m1.group(2))
    v2, c2 = Rational(m2.group(1)), Rational(m2.group(2))
    true1 = Rational(expand(gf).subs(x, v1))
    true2 = Rational(expand(fg).subs(x, v2))
    if c1 == true1 and c2 == true2:
        out.append(build("D", True, [
            "Both sides are single evaluations, so work from the inside out and "
            "keep the two orders apart. Line first, then parabola:",
            D(f"f{arg(v1)}={L(f.subs(x, v1))}"),
            D(f"g\\left({L(f.subs(x, v1))}\\right)={L(true1)}"),
            "Now the other order, parabola first:",
            D(f"g{arg(v2)}={L(expand(g).subs(x, v2))}"),
            D(f"f\\left({L(expand(g).subs(x, v2))}\\right)={L(true2)}"),
            "Both numbers land where the claim says, so the statement is True.",
        ]))
    else:
        out.append(build("D", False, [
            "Each composition is evaluated from the inside out. For the first one "
            "the line acts before the parabola:",
            D(f"f{arg(v1)}={L(f.subs(x, v1))}"),
            D(f"g\\left({L(f.subs(x, v1))}\\right)={L(true1)}"),
            f"The claim quotes ${L(c1)}$, which this composition does reach — but "
            "one unit earlier, at a different inner abscissa:",
            D(f"g(f(1))={L(Rational(expand(gf).subs(x, 1)))}"),
            "The second evaluation in the claim does hold:",
            D(f"g{arg(v2)}={L(expand(g).subs(x, v2))}"),
            D(f"f\\left({L(expand(g).subs(x, v2))}\\right)={L(true2)}"),
            f"One of the two numbers is ${L(true1)}$ rather than ${L(c1)}$, and a "
            "compound claim needs both, so the statement is False.",
        ]))

    # E ------------------------------------------------------------- False
    p = num(r"f\(g\((-?\d+)\)\)", st[4])
    gfp = Rational(expand(gf).subs(x, p))
    fgp = Rational(expand(fg).subs(x, p))
    out.append(build("E", False, [
        "Composition is not symmetric: the inner formula acts first, so swapping "
        "the order changes what gets substituted. The stem's own pair already "
        f"disagrees at $x={L(p)}$:",
        D(f"g(f({L(p)}))={L(gfp)}"),
        D(f"f(g({L(p)}))={L(fgp)}"),
        "A single pair where the two orders differ is enough to refute a claim "
        "about every line and every parabola:",
        D(f"{L(gfp)}\\neq {L(fgp)}"),
        "Equality can happen for special pairs, but not for every pair, so the "
        "statement is False.",
    ]))
    return out


# ---------------------------------------------------------------------------
# factored  (E08, E18, E28)
# ---------------------------------------------------------------------------

def factored_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    f, g, lead = m["f"], m["g"], m["lead"]
    r1, r2 = m["roots"]
    a, b, c = coeffs(g)
    ax = axis_of(g)
    S, P = r1 + r2, r1 * r2
    d = expand(g - f)
    meet = nmeet(f, g)
    st = task["statements"]
    out = []

    # A -------------------------------------------------------------- True
    out.append(build("A", True, [
        "A product is zero exactly when one of its factors is zero, so the "
        "factored form hands over the zeros with no expansion at all:",
        D(f"x{mono(-r1, '', False) or '-0'}=0" if r1 else "x=0"),
        D(f"x{mono(-r2, '', False)}=0"),
        f"The two abscissae are ${L(r1)}$ and ${L(r2)}$. Substituting either one "
        "collapses the whole product:",
        D(f"g{arg(r1)}=0"),
        D(f"g{arg(r2)}=0"),
        "Those are exactly the zeros named, so the statement is True.",
    ]))

    # B ------------------------------------ True for E08/E28, False for E18
    claim_S = num(r"root sum equals \$(-?\d+)\$", st[1])
    vieta_sum = f"x_{{1}}+x_{{2}}=-\\frac{{{L(b)}}}{{{L(a)}}}"
    if claim_S == S:
        out.append(build("B", True, [
            "Expanding puts the coefficients where Vieta can reach them:",
            D(f"g(x)={L(g)}"),
            D(vieta_sum),
            D(f"x_{{1}}+x_{{2}}={L(S)}"),
            "The axis bisects the zeros, so halving that sum gives it:",
            D(f"\\frac{{{L(S)}}}{{2}}={L(ax)}"),
            f"Root sum ${L(S)}$ and axis $x={L(ax)}$, both as claimed, so the "
            "statement is True.",
        ]))
    else:
        out.append(build("B", False, [
            "The axis quoted is correct, but the root sum it is supposed to come "
            "from is not. Expand first:",
            D(f"g(x)={L(g)}"),
            D(vieta_sum),
            D(f"x_{{1}}+x_{{2}}={L(S)}"),
            "The zeros confirm it directly, and halving still gives the quoted "
            "axis:",
            D(f"{L(r1)}+{par(r2)}={L(S)}"),
            D(f"\\frac{{x_{{1}}+x_{{2}}}}{{2}}={L(ax)}"),
            f"A root sum of ${L(S)}$ cannot be reported as ${L(claim_S)}$, even "
            "when the axis that follows from it is right, so the statement is "
            "False.",
        ]))

    # C ------------------------------------------------------------- False
    claim_ax = ax + 1
    out.append(build("C", False, [
        "The axis sits midway between the zeros, so it is their average and not a "
        "root shifted by hand:",
        D(f"\\frac{{{L(r1)}+{L(r2)}}}{{2}}={L(ax)}"),
        f"Sliding it one unit to $x={L(claim_ax)}$ would demand that heights at "
        "equal distances either side of that line agree. They do not:",
        D(f"g{arg(claim_ax - 1)}={L(expand(g).subs(x, claim_ax - 1))}"),
        D(f"g{arg(claim_ax + 1)}={L(expand(g).subs(x, claim_ax + 1))}"),
        f"Only $x={L(ax)}$ folds the curve onto itself, so the statement is False.",
    ]))

    # D ------------------------------------ True for E28, False for E08/E18
    claim_P = num(r"product of the roots equals \$(-?\d+)\$", st[3])
    if claim_P == P:
        out.append(build("D", True, [
            "Vieta reads the product off the expanded coefficients:",
            D(f"g(x)={L(g)}"),
            D(f"x_{{1}}x_{{2}}=\\frac{{{L(c)}}}{{{L(a)}}}"),
            D(f"x_{{1}}x_{{2}}={L(P)}"),
            "The factored form agrees, because one of the zeros is the origin:",
            D(f"{L(r1)}\\cdot {L(r2)}={L(P)}"),
            "Flipping the sign of zero changes nothing, so the number named is "
            "right either way, so the statement is True.",
        ]))
    else:
        out.append(build("D", False, [
            "Vieta gives the product as $c/a$, with no extra minus sign attached:",
            D(f"x_{{1}}x_{{2}}=\\frac{{{L(c)}}}{{{L(a)}}}"),
            D(f"x_{{1}}x_{{2}}={L(P)}"),
            "The factored form says the same without any formula at all:",
            D(f"{L(r1)}\\cdot {par(r2)}={L(P)}"),
            f"The claim flips a sign that was never there, reporting ${L(claim_P)}$ "
            f"instead of ${L(P)}$, so the statement is False.",
        ]))

    # E ------------------------------------ True for E08/E28, False for E18
    zero_named = num(r"left-hand zero \$x=(-?\d+)\$", st[4])
    gap_named = num(r"gap \$f-g\$ equals \$(-?\d+)\$", st[4])
    if zero_named == min(r1, r2):
        out.append(build("E", True, [
            "Two things to settle: the signed gap at a named abscissa, and the "
            "total number of crossings. At the left-hand zero the parabola is on "
            "the horizontal axis, so the gap is just the height of the line:",
            D(f"g{arg(zero_named)}=0"),
            D(f"f{arg(zero_named)}={L(f.subs(x, zero_named))}"),
            D(f"f{arg(zero_named)}-g{arg(zero_named)}={L(gap_named)}"),
            "For the crossings, subtract and count real zeros:",
            D(f"g(x)-f(x)={L(d)}"),
            D(f"\\Delta={L(disc_of(d))}"),
            f"A positive discriminant gives {word(meet)} crossings, so both halves "
            f"hold, "
            "so the statement is True.",
        ]))
    else:
        out.append(build("E", False, [
            f"The zeros of this parabola are ${L(r1)}$ and ${L(r2)}$, so the "
            f"left-hand one is ${L(r1)}$, not the ${L(zero_named)}$ the claim "
            "names. At the abscissa actually quoted the parabola is nowhere near "
            "the horizontal axis:",
            D(f"g{arg(zero_named)}={L(expand(g).subs(x, zero_named))}"),
            D(f"f{arg(zero_named)}={L(f.subs(x, zero_named))}"),
            D(f"f{arg(zero_named)}-g{arg(zero_named)}="
              f"{L(Rational(expand(f - g).subs(x, zero_named)))}"),
            f"At the genuine left-hand zero the gap would indeed be the quoted "
            f"${L(gap_named)}$:",
            D(f"f{arg(r1)}-g{arg(r1)}={L(Rational(expand(f - g).subs(x, r1)))}"),
            f"The crossing count of {word(meet)} is right as well, but the abscissa "
            f"named "
            "is not a zero of $g$, so the statement is False.",
        ]))
    return out


# ---------------------------------------------------------------------------
# hybrid  (E09, E19, E29)
# ---------------------------------------------------------------------------

def hybrid_task(task: dict, cycle: int) -> list[str]:
    if cycle == 0:
        return hybrid_solartrack(task)
    if cycle == 1:
        return hybrid_racetrack(task)
    return hybrid_balloonfest(task)


def hybrid_solartrack(task: dict) -> list[str]:
    m = MODELS["MATH 7.E09"]
    f, g = m["f"], m["g"]
    h, kv = vertex_of(g)
    d = expand(g - f)
    sq = expand(f**2)
    A, B, C = rewrite_in_powers(g, f)
    roots = sorted(solve(d, x))
    gf = expand(g.subs(x, f))
    return [
        build("A", True, [
            "The sketch shows a downward parabola, and its turning point is where "
            "the axis meets the curve. Compute that abscissa from the "
            "coefficients:",
            D(axis_expr(g)),
            D(f"x={L(h)}"),
            "Substituting it returns the height of the turning point:",
            D(f"g{arg(h)}={subst_expr(g, h)}"),
            D(f"g{arg(h)}={L(kv)}"),
            f"Axis at $x={L(h)}$ and vertex height ${L(kv)}$: the geometry in the "
            "figure and the algebra agree, so the statement is True.",
        ]),
        build("B", True, [
            "Rewriting $g$ in powers of the line is coefficient matching, and only "
            "the squared terms decide the leading coefficient. Square the line:",
            D(f"f(x)^{{2}}={L(sq)}"),
            f"The term $B f(x)+C$ contributes nothing quadratic, so the squared "
            "term of $g$ has to come out of $A f(x)^{2}$ alone:",
            D(f"{L(coeffs(sq)[0])}A={L(coeffs(g)[0])}"),
            D(f"A={L(A)}"),
            f"Only the two leading coefficients were needed, ${L(coeffs(g)[0])}$ "
            f"for $g$ and ${L(coeffs(f)[1])}$ for $f$, so the statement is True.",
        ]),
        build("C", False, [
            "A line and a parabola meet where their difference vanishes, and that "
            "difference is quadratic, so four real zeros are impossible. Subtract:",
            D(f"g(x)-f(x)={L(d)}"),
            D(f"{L(factor(d))}=0"),
            D(f"x={L(roots[0])}"),
            D(f"x={L(roots[1])}"),
            "Two crossings, and the shape of the equation forbids any more, so the "
            "statement is False.",
        ]),
        build("D", True, [
            "At the vertical axis both formulas collapse onto their constant "
            "terms:",
            D(f"f(0)={L(f.subs(x, 0))}"),
            D(f"g(0)={L(expand(g).subs(x, 0))}"),
            D("f(0)-g(0)=0"),
            "A signed gap of zero means the two graphs pass through the same point "
            "there, which is exactly the crossing at $x=0$ found from the "
            "difference, so the statement is True.",
        ]),
        build("E", False, [
            "What the figure shows is the shape of $g$; the degree of a "
            "composition has to be expanded, not read off a picture. Substituting "
            "the line into the parabola:",
            D(f"g(f(x))={nest_expr(g, f)}"),
            D(f"g(f(x))={L(gf)}"),
            "The only square present is the square of a linear expression, which "
            "reaches $x^{2}$ and stops:",
            D(f"\\left({L(f)}\\right)^{{2}}={L(sq)}"),
            "The composition is quadratic, not cubic, so the statement is False.",
        ]),
    ]


def hybrid_racetrack(task: dict) -> list[str]:
    m = MODELS["MATH 7.E19"]
    f, g = m["f"], m["g"]
    h, kv = vertex_of(g)
    d = expand(g - f)
    grow = [Rational(expand(g).subs(x, v)) for v in range(5)]
    frow = [Rational(f.subs(x, v)) for v in range(5)]
    return [
        build("A", True, [
            "A table is a set of samples, so the check is whether the sampled entry "
            f"agrees with the printed formula. The column at $x={L(h)}$ reads "
            f"${L(kv)}$, and the formula gives",
            D(f"g{arg(h)}={subst_expr(g, h)}"),
            D(f"g{arg(h)}={L(kv)}"),
            "The neighbouring columns match as well, which is what a correctly "
            "tabulated parabola looks like:",
            D(f"g(1)={L(grow[1])}"),
            D(f"g(3)={L(grow[3])}"),
            "Table entry and formula agree, so the statement is True.",
        ]),
        build("B", True, [
            "The axis comes from the coefficients rather than from the table:",
            D(axis_expr(g)),
            D(f"x={L(h)}"),
            "That abscissa happens to be one of the sampled columns, so the "
            "turning height can be read straight off the table and confirmed on "
            "the formula:",
            D(f"g{arg(h)}={L(kv)}"),
            "The mirror symmetry of the row about that column is the visible sign "
            "of the same fact:",
            D(f"g(0)=g(4)={L(grow[0])}"),
            f"A sampled axis at $x={L(h)}$ with matching vertex height, so the "
            "statement is True.",
        ]),
        build("C", False, [
            "Constant first differences are the signature of a line, so compute "
            "the differences of the tabulated row instead of assuming them:",
            D(f"{L(grow[1])}-{L(grow[0])}={L(grow[1] - grow[0])}"),
            D(f"{L(grow[2])}-{L(grow[1])}={L(grow[2] - grow[1])}"),
            D(f"{L(grow[3])}-{L(grow[2])}={L(grow[3] - grow[2])}"),
            "The steps change, and they change by the same amount each time, which "
            "is the signature of a quadratic:",
            D("\\Delta^{(2)}=2"),
            "The first differences are not constant, so $g$ is not linear, so the "
            "statement is False.",
        ]),
        build("D", False, [
            "The gap at the vertical axis is quoted correctly, so the count is "
            "what fails. Reading the first column:",
            D(f"f(0)-g(0)={L(frow[0])}-{L(grow[0])}"),
            D(f"f(0)-g(0)={L(frow[0] - grow[0])}"),
            "Crossings come from the difference, which is quadratic:",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            "A positive discriminant gives two crossings and never a third, so the "
            "statement is False.",
        ]),
        build("E", False, [
            "Steepness in a printed table is about how the columns are spaced; the "
            "slope is the constant step per unit of $x$. The tabulated row moves "
            "in equal steps:",
            D(f"{L(frow[1])}-\\left({L(frow[0])}\\right)={L(frow[1] - frow[0])}"),
            D(f"{L(frow[2])}-{L(frow[1])}={L(frow[2] - frow[1])}"),
            "The formula says the same thing:",
            D(f"f(x)={L(f)}"),
            D(f"m={L(coeffs(f)[1])}"),
            f"The slope is ${L(coeffs(f)[1])}$, not $6$, so the statement is False.",
        ]),
    ]


def hybrid_balloonfest(task: dict) -> list[str]:
    m = MODELS["MATH 7.E29"]
    f, g = m["f"], m["g"]
    h, kv = vertex_of(g)
    d = expand(g - f)
    sq = expand(f**2)
    A, B, C = rewrite_in_powers(g, f)
    gf = expand(g.subs(x, f))
    return [
        build("A", True, [
            "The turning point follows from the coefficients of $g$, and the figure "
            "only has to agree with them. The axis first:",
            D(axis_expr(g)),
            D(f"x={L(h)}"),
            "Then the height at that abscissa:",
            D(f"g{arg(h)}={subst_expr(g, h)}"),
            D(f"g{arg(h)}={L(kv)}"),
            f"The vertex is $\\left({L(h)},{L(kv)}\\right)$, exactly the point "
            "named, so the statement is True.",
        ]),
        build("B", True, [
            "The table supplies both values at $x=2$, so the gap is a subtraction "
            "in the order named, $f$ minus $g$:",
            D(f"f(2)={L(f.subs(x, 2))}"),
            D(f"g(2)={L(expand(g).subs(x, 2))}"),
            D(f"f(2)-g(2)={L(Rational(expand(f - g).subs(x, 2)))}"),
            "The formulas confirm both tabulated entries:",
            D(f"5\\cdot 2-4={L(f.subs(x, 2))}"),
            D(f"{subst_expr(g, Rational(2))}={L(expand(g).subs(x, 2))}"),
            f"The signed gap is ${L(Rational(expand(f - g).subs(x, 2)))}$, as "
            "claimed, so the statement is True.",
        ]),
        build("C", False, [
            "The rewrite coefficient is fixed by the squared terms alone, so square "
            "the line and compare:",
            D(f"f(x)^{{2}}={L(sq)}"),
            f"Only $A f(x)^{{2}}$ can produce a squared term, so it must match the "
            "squared term of $g$:",
            D(f"{L(coeffs(sq)[0])}A={L(coeffs(g)[0])}"),
            D(f"A={L(A)}"),
            "The claimed value has the wrong sign as well as the wrong size, and it "
            "would make the rewrite open upwards:",
            D(f"\\frac{{24}}{{25}}\\cdot {L(coeffs(sq)[0])}x^{{2}}=24x^{{2}}"),
            f"The coefficient is ${L(A)}$, not $\\frac{{24}}{{25}}$, so the "
            "statement is False.",
        ]),
        build("D", True, [
            "Intersections are the real zeros of the difference, so subtract and "
            "take the discriminant:",
            D(f"g(x)-f(x)={L(d)}"),
            D(disc_expr(d)),
            D(f"\\Delta={L(disc_of(d))}"),
            "A positive discriminant gives two distinct real zeros, hence two "
            "crossings, exactly as claimed, so the statement is True.",
        ]),
        build("E", False, [
            "Wrapping a parabola around a line multiplies the two degrees instead "
            "of adding them, and one of them is $1$. Expanding settles it:",
            D(f"g(f(x))={nest_expr(g, f)}"),
            D(f"g(f(x))={L(gf)}"),
            "No term can climb past $x^{2}$, because the only square in play is "
            "the square of a linear expression:",
            D(f"\\left({L(f)}\\right)^{{2}}={L(sq)}"),
            "The composition is quadratic, not cubic, so the statement is False.",
        ]),
    ]


# ---------------------------------------------------------------------------
# text_dense  (E10, E20, E30)
# ---------------------------------------------------------------------------

def text_dense_task(task: dict, cycle: int) -> list[str]:
    m = MODELS[task["case_id"]]
    p, q = m["p"], m["q"]
    slope = Rational(m["slope"])
    px, py = m["pt"]
    inner, outer = m["inner"], m["outer"]
    vieta = m["vieta"]
    st = task["statements"]
    out = []

    # A — scenario (i) ----------------------------------------------- True
    hp, kp = vertex_of(p)
    out.append(build("A", True, [
        "Scenario (i) asks for the axis and the turning height of one parabola. "
        "The axis comes from the first two coefficients:",
        D(axis_expr(p)),
        D(f"x={L(hp)}"),
        "Substituting that abscissa gives the height:",
        D(f"p\\left({L(hp)}\\right)={subst_expr(p, hp)}"),
        D(f"p\\left({L(hp)}\\right)={L(kp)}"),
        f"Axis ${L(hp)}$ and height ${L(kp)}$ are the two numbers claimed, so the "
        "statement is True.",
    ]))

    # B — scenario (ii) --------------------------------------------- False
    q0 = py - slope * px
    out.append(build("B", False, [
        "Scenario (ii) has a correct first half and a false second half. The slope "
        "and the point fix the intercept:",
        D(f"{L(py)}={L(slope)}\\cdot {L(px)}+q"),
        D(f"q={L(q0)}"),
        f"So $y={L(slope)}x+{L(q0)}$ is right. Shifting the intercept by one unit "
        "gives a parallel line, and parallel lines with different intercepts have "
        "no point in common:",
        D(f"y={L(slope)}x+{L(q0 + 1)}"),
        D(f"{L(slope)}\\cdot {L(px)}+{L(q0 + 1)}={L(slope * px + q0 + 1)}"),
        f"That height is ${L(slope * px + q0 + 1)}$, not the ${L(py)}$ the point "
        "requires, so the statement is False.",
    ]))

    # C — scenario (iii) -------------- True for E10/E20, False for E30
    hq, kq = vertex_of(q)
    m_frac = re.search(r"vertex occurs at \$x=\\frac\{(-?\d+)\}\{(\d+)\}\$", st[2])
    if m_frac:
        claim_hq = Rational(int(m_frac.group(1)), int(m_frac.group(2)))
    else:
        claim_hq = num(r"vertex occurs at \$x=(-?\d+)\$", st[2])
    if claim_hq == hq:
        out.append(build("C", True, [
            "Scenario (iii) is a downward parabola, so its vertex is a highest "
            "point. The abscissa first:",
            D(axis_expr(q)),
            D(f"x={L(hq)}"),
            "Then the height there:",
            D(f"q\\left({L(hq)}\\right)={subst_expr(q, hq)}"),
            D(f"q\\left({L(hq)}\\right)={L(kq)}"),
            f"Vertex abscissa ${L(hq)}$ and height ${L(kq)}$, as claimed, so the "
            "statement is True.",
        ]))
    else:
        out.append(build("C", False, [
            "Scenario (iii) names an abscissa that is not the axis of this "
            "parabola. Compute it from the coefficients:",
            D(axis_expr(q)),
            D(f"x={L(hq)}"),
            "The height at the genuine vertex is not the claimed number either:",
            D(f"q\\left({L(hq)}\\right)={L(kq)}"),
            "At the abscissa the claim quotes, the curve is on the horizontal axis:",
            D(f"q\\left({L(claim_hq)}\\right)={L(Rational(expand(q).subs(x, claim_hq)))}"),
            "Neither the abscissa nor the height matches, so the statement is "
            "False.",
        ]))

    # D — scenario (iv) --------------------------------------------- False
    comp = expand(outer.subs(x, inner))
    oa, ob, _ = coeffs(outer)
    subst = (
        f"\\left({L(inner)}\\right)\\left({L(oa)}\\left({L(inner)}\\right)"
        f"{mono(ob, '', False)}\\right)"
    )
    out.append(build("D", False, [
        "Scenario (iv) substitutes a line into a parabola, and substitution "
        "multiplies the degrees instead of adding them. Replace $x$ by the line "
        "inside $g$:",
        D(f"g(f(x))={subst}"),
        D(f"g(f(x))={L(comp)}"),
        "The factored form makes the same point: a product of two linear factors "
        "is quadratic.",
        D(f"g(f(x))={L(factor(comp))}"),
        "The highest power is $x^{2}$, so the composition is quadratic rather than "
        "cubic, so the statement is False.",
    ]))

    # E — scenario (v) ---------------------------------------------- False
    vr = sorted(solve(vieta, x))
    prod = Rational(vr[0] * vr[1])
    claim_prod = num(r"multiply to \$(-?\d+)\$", st[4])
    out.append(build("E", False, [
        "Scenario (v) is a Vieta sign trap. For a monic quadratic the product of "
        "the roots is the constant term itself, with no sign change:",
        D(f"x_{{1}}x_{{2}}=\\frac{{{L(coeffs(vieta)[2])}}}{{1}}"),
        D(f"x_{{1}}x_{{2}}={L(prod)}"),
        "Factoring confirms it, since the roots can be read off directly:",
        D(f"{L(vieta)}=\\left(x-{L(vr[0])}\\right)\\left(x-{L(vr[1])}\\right)"),
        D(f"{L(vr[0])}\\cdot {L(vr[1])}={L(prod)}"),
        f"The product is ${L(prod)}$, not ${L(claim_prod)}$, so the statement is "
        "False.",
    ]))
    return out


# ---------------------------------------------------------------------------
# driver
# ---------------------------------------------------------------------------

BUILDERS = {
    "graph": graph_task,
    "table": table_task,
    "applied": applied_task,
    "symbolic": symbolic_task,
    "parametric": parametric_task,
    "rebuild": rebuild_task,
    "nested": nested_task,
    "factored": factored_task,
    "hybrid": hybrid_task,
    "text_dense": text_dense_task,
}


def apply_key_fixes(tasks: list[dict]) -> list[str]:
    log = []
    for task in tasks:
        for j, letter in enumerate(LETTERS):
            fix = KEY_FIXES.get((task["case_id"], letter))
            if not fix:
                continue
            new_key, guard, reason = fix
            assert guard in task["statements"][j], (task["case_id"], letter, guard)
            old = bool(task["answer_key"][j])
            assert old != new_key, (task["case_id"], letter, "key already correct")
            task["answer_key"][j] = new_key
            log.append(f"{task['case_id']} {letter}: {old} -> {new_key} ({reason})")
    return log


def validate(tasks: list[dict]) -> list[int]:
    lens: list[int] = []
    for task in tasks:
        assert len(task["statements"]) == 5
        assert len(task["tactical_explanations"]) == 5
        for j, expl in enumerate(task["tactical_explanations"]):
            letter = LETTERS[j]
            verdict = "True" if task["answer_key"][j] else "False"
            where = f"{task['case_id']} {letter}"
            assert expl.startswith(f"**{letter}.** → {verdict}\n\n"), where
            assert expl.rstrip().endswith(
                f", so the statement is {verdict}."
            ), (where, expl[-80:])
            assert expl.count("so the statement is") == 1, where
            for bad in BANNED:
                assert bad not in expl, (where, bad)
            displays = re.findall(r"\$\$(.+?)\$\$", expl, flags=re.S)
            assert len(displays) >= 2, where
            for disp in displays:
                assert "\n" not in disp, where
                assert disp.strip() == disp, where
                assert re.search(r"=|<|>|\\neq|\\geq|\\leq|\\mapsto", disp), (
                    where,
                    disp,
                )
            assert len(displays) == len(set(displays)), (
                where,
                [d for d, n in Counter(displays).items() if n > 1],
            )
            assert expl.count("$$") == 2 * len(displays), where
            assert "\n\n\n" not in expl, where
            lens.append(len(expl))
    return lens


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    assert len(tasks) == 30

    fixes = apply_key_fixes(tasks)

    for i, task in enumerate(tasks):
        kind = task["stem_kind"]
        expls = BUILDERS[kind](task, i // 10)
        assert len(expls) == 5, (task["case_id"], len(expls))
        task["tactical_explanations"] = expls

    lens = validate(tasks)
    PATH.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(f"answer-key corrections: {len(fixes)}")
    for line in fixes:
        print("  " + line)
    dist = Counter(sum(t["answer_key"]) for t in tasks)
    print(f"TRUE per task: {dict(sorted(dist.items()))}")
    print(f"TRUE total: {sum(sum(t['answer_key']) for t in tasks)}/150")
    print(
        f"explanations: n={len(lens)} min={min(lens)} "
        f"median={int(statistics.median(lens))} max={max(lens)}"
    )


if __name__ == "__main__":
    main()
