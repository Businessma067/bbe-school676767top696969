#!/usr/bin/env python3
"""Chapter 7 mixed exam — medium-first 30-task bank (subsection 7.5).

Each stem_kind forces the student to solve FROM that medium:
  graph       figure only (no formulae / vertex coords / root lists in stems)
  table       raw s_n values (no Δ rows, no closed form)
  applied     story + table OR figure as the sole numeric source (no unit traps)
  hybrid      ≥1 figure-only letter and ≥1 table/algebra letter; no printed formulae
  algebra     small integers, multi-step (axis, Vieta, meetings, discriminant, nesting)

Integers in stems lie in −20…20 (coefficients prefer 1–10). Difficulty 5/5.
Chapter 4 explanations: header, one-line displays, closing verdict.
Sympy verifies every answer key.

Run: python3 scripts/gen-ch7-mixed-medium-first.py
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

from sympy import Poly, Rational, Symbol, discriminant, expand, latex, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
t_sym = Symbol("t")
a_sym = Symbol("a")
k_sym = Symbol("k")

OUT = Path("/workspace/src/data/math-ch7-mixed-exam.json")

STEM_KINDS = [
    "graph",
    "table",
    "applied",
    "symbolic",
    "parametric",
    "rebuild",
    "nested",
    "factored",
    "hybrid",
    "text_dense",
]

TAIL = "Evaluate each statement. Mark it TRUE or FALSE."


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def D(s: str) -> str:
    return f"$${re.sub(r'\\s+', ' ', s).strip()}$$"


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def L(expr) -> str:
    return latex(simplify(expand(expr)))


def par(r) -> str:
    r = Rational(r)
    s = F(r)
    return s if (r >= 0 and r.q == 1) else rf"\left({s}\right)"


def close(truth: bool, bridge: str) -> str:
    return f"{bridge.rstrip(' .')}, so the statement is {'True' if truth else 'False'}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


# ---------------------------------------------------------------------------
# Model
# ---------------------------------------------------------------------------

def rewrite_coeffs(f, g):
    fu, gu = Poly(f, x), Poly(g, x)
    m = Rational(fu.all_coeffs()[0])
    kk = Rational(fu.all_coeffs()[1])
    a, b, cc = [Rational(c) for c in gu.all_coeffs()]
    A = a / m**2
    B = (b - 2 * A * m * kk) / m
    C = cc - A * kk**2 - B * kk
    assert expand(A * f**2 + B * f + C - g) == 0
    return A, B, C


class FG:
    def __init__(self, f, g):
        self.f = expand(f)
        self.g = expand(g)
        fc = [Rational(c) for c in Poly(self.f, x).all_coeffs()]
        gc = [Rational(c) for c in Poly(self.g, x).all_coeffs()]
        if len(fc) == 1:
            self.m, self.k = Rational(0), fc[0]
        else:
            self.m, self.k = fc[0], fc[1]
        if len(gc) == 2:
            gc = [Rational(0)] + gc
        self.a, self.b, self.c = gc[0], gc[1], gc[2]
        self.h = Rational(-self.b / (2 * self.a))
        self.kv = Rational(simplify(self.g.subs(x, self.h)))
        self.diff = expand(self.g - self.f)
        self.delta = Rational(discriminant(Poly(self.diff, x)))
        if self.delta < 0:
            self.meet = 0
        elif self.delta == 0:
            self.meet = 1
        else:
            self.meet = 2
        self.s = Rational(-self.b / self.a)
        self.p = Rational(self.c / self.a)
        self.gf = expand(self.g.subs(x, self.f))
        self.fg = expand(self.f.subs(x, self.g))
        self.A, self.B, self.C = rewrite_coeffs(self.f, self.g)
        self.g_lead = self.a

    def at(self, expr, val):
        return Rational(simplify(expr.subs(x, val)))

    def g_at(self, val):
        return self.at(self.g, val)

    def f_at(self, val):
        return self.at(self.f, val)

    def seq(self, ns: list[int]) -> list[int]:
        return [int(self.g_at(n)) for n in ns]


def seq_from(a, b, c, ns: list[int]) -> list[int]:
    return [int(a * n * n + b * n + c) for n in ns]


def second_diffs(vals: list[int]) -> list[int]:
    d1 = [vals[i + 1] - vals[i] for i in range(len(vals) - 1)]
    return [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]


def first_diffs(vals: list[int]) -> list[int]:
    return [vals[i + 1] - vals[i] for i in range(len(vals) - 1)]


def raw_table(ns: list[int], vals: list[int], row: str = "s_n") -> str:
    hdr = "| $n$ | " + " | ".join(str(n) for n in ns) + " |"
    sep = "| --- | " + " | ".join("---" for _ in ns) + " |"
    body = f"| ${row}$ | " + " | ".join(str(v) for v in vals) + " |"
    return "\n".join([hdr, sep, body])


def xy_table(xs: list[int], f_vals: list[int], g_vals: list[int], f_name: str, g_name: str) -> str:
    hdr = "| $x$ | " + " | ".join(str(v) for v in xs) + " |"
    sep = "| --- | " + " | ".join("---" for _ in xs) + " |"
    fr = f"| {f_name} | " + " | ".join(str(v) for v in f_vals) + " |"
    gr = f"| {g_name} | " + " | ".join(str(v) for v in g_vals) + " |"
    return "\n".join([hdr, sep, fr, gr])


def poly_coeffs(expr) -> list[float]:
    return [float(c) for c in Poly(expand(expr), x).all_coeffs()]


def make_figure(g, f, title: str, xmin: int, xmax: int) -> str:
    return svg_polynomial(
        poly_coeffs(g),
        xmin=float(xmin),
        xmax=float(xmax),
        title=title,
        ymin=-20,
        ymax=20,
        auto_mark_roots=True,
        auto_mark_turns=True,
        second=poly_coeffs(f),
    )


def y_ok(expr, xmin: int, xmax: int) -> None:
    for n in range(xmin, xmax + 1):
        y = Rational(simplify(expr.subs(x, n)))
        if y.q != 1:
            continue
        if abs(int(y)) > 20:
            raise AssertionError(f"|y|={y} at x={n} for {expr} exceeds 20")


# ---------------------------------------------------------------------------
# Spec
# ---------------------------------------------------------------------------

@dataclass
class Claim:
    text: str
    truth: bool
    explanation: str
    check: Optional[Callable[[], bool]] = None


@dataclass
class TaskSpec:
    title: str
    context: str
    stem_kind: str
    claims: list[Claim]
    overview: str
    figure: str | None = None
    tables_markdown: str | None = None


def C(text: str, truth: bool, explanation: str, check: Optional[Callable[[], bool]] = None) -> Claim:
    return Claim(text, truth, explanation, check)


def assert_claims(spec: TaskSpec) -> None:
    if len(spec.claims) != 5:
        raise AssertionError(f"{spec.title}: need 5 claims")
    if len({c.text for c in spec.claims}) != 5:
        raise AssertionError(f"{spec.title}: duplicate statements")
    ntrue = sum(1 for c in spec.claims if c.truth)
    if not (1 <= ntrue <= 5):
        raise AssertionError(f"{spec.title}: {ntrue} trues")
    for c in spec.claims:
        if c.check is not None and bool(c.check()) != bool(c.truth):
            raise AssertionError(f"{spec.title}: key drift on: {c.text[:80]}")


# ---------------------------------------------------------------------------
# GRAPH — figure is the only source
# ---------------------------------------------------------------------------

def build_graph(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(x - 3, -(x**2) + 4 * x + 1)
        xmin, xmax, name = -2, 6, "MetroLink"
        title = "Reading a clearance plot"
        ntrue = 1
        claims = [
            C(
                "The solid curve and the dashed line meet in exactly two points.",
                True,
                pack("A", True, [
                    "Two graphs meet where their heights agree, so the crossings on the sketch are the real zeros of the difference.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"f(x)={L(M.f)}"),
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    "A quadratic difference has at most two real zeros; the discriminant decides how many actually occur.",
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "The discriminant is positive and the plot shows two crossings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The turning point of the solid curve lies below the dashed line.",
                False,
                pack("B", False, [
                    "The turning point sits on the axis of the parabola. Recover that abscissa from the reconstructed coefficients, then compare heights.",
                    D(rf"x=-\frac{{{F(M.b)}}}{{2\cdot {par(M.a)}}}={F(M.h)}"),
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    D(rf"f\left({F(M.h)}\right)={F(M.f_at(M.h))}"),
                    close(False, "The turning height sits above the dashed line, not below it"),
                ]),
                lambda: M.kv < M.f_at(M.h),
            ),
            C(
                "At the integer mark $x=0$ the dashed line sits above the solid curve.",
                False,
                pack("C", False, [
                    "Compare the two heights on the vertical axis, which is the integer mark $x=0$.",
                    D(rf"g(0)={F(M.g_at(0))}"),
                    D(rf"f(0)={F(M.f_at(0))}"),
                    "The signed gap dashed-minus-solid is therefore negative, so the solid curve is the higher of the two.",
                    D(rf"f(0)-g(0)={F(M.f_at(0) - M.g_at(0))}"),
                    close(False, "At $x=0$ the solid curve sits above the dashed line"),
                ]),
                lambda: M.f_at(0) > M.g_at(0),
            ),
            C(
                "The solid curve opens upwards.",
                False,
                pack("D", False, [
                    "A parabola opens upwards only when its leading coefficient is positive. The reconstructed solid curve is",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    "A negative leading coefficient turns the arms down, which is also why the marked turning point is a peak rather than a trough.",
                    close(False, "The solid curve opens downwards"),
                ]),
                lambda: M.a > 0,
            ),
            C(
                "At the integer mark $x=3$ the dashed line is higher than the solid curve.",
                False,
                pack("E", False, [
                    "Read both heights at the tick $x=3$ on the horizontal axis, then confirm by substituting into the reconstructed models.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"g(3)={F(M.g_at(3))}"),
                    D(rf"f(x)={L(M.f)}"),
                    D(rf"f(3)={F(M.f_at(3))}"),
                    close(False, "The solid height $4$ sits above the dashed height $0$"),
                ]),
                lambda: M.f_at(3) > M.g_at(3),
            ),
        ]
    elif cycle == 1:
        M = FG(2 * x - 8, x**2 - 6 * x + 5)
        xmin, xmax, name = -1, 7, "CoastGuard"
        title = "Vertex against the service line"
        ntrue = 2
        claims = [
            C(
                "The graphs meet in more than two points.",
                False,
                pack("A", False, [
                    "A line and a parabola differ by a quadratic, so they cannot meet three times.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    "A positive discriminant supplies two distinct real meetings and no more.",
                    D(rf"{M.meet}"),
                    close(False, "The count is two, never more than two"),
                ]),
                lambda: M.meet > 2,
            ),
            C(
                "The turning point of the solid curve lies below the dashed line.",
                True,
                pack("B", True, [
                    "Locate the axis of the solid curve, evaluate both models there, and compare.",
                    D(rf"x={F(M.h)}"),
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    D(rf"f\left({F(M.h)}\right)={F(M.f_at(M.h))}"),
                    close(True, "The turning height $-4$ sits below the dashed height $-2$"),
                ]),
                lambda: M.kv < M.f_at(M.h),
            ),
            C(
                "The solid curve opens downwards.",
                False,
                pack("C", False, [
                    "Opening is the sign of the leading coefficient alone.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    "A positive leading coefficient sends the arms up, so the marked turning point is a trough.",
                    close(False, "The solid curve opens upwards"),
                ]),
                lambda: M.a < 0,
            ),
            C(
                "At $x=0$ the solid curve sits above the dashed line.",
                True,
                pack("D", True, [
                    "The vertical axis is the integer mark $x=0$; read the two intercepts and subtract.",
                    D(rf"g(0)={F(M.g_at(0))}"),
                    D(rf"f(0)={F(M.f_at(0))}"),
                    D(rf"g(0)-f(0)={F(M.g_at(0) - M.f_at(0))}"),
                    close(True, "The solid intercept $5$ sits well above the dashed intercept $-8$"),
                ]),
                lambda: M.g_at(0) > M.f_at(0),
            ),
            C(
                "At the integer mark $x=4$ the solid curve is higher than the dashed line.",
                False,
                pack("E", False, [
                    "Compare heights at the tick $x=4$.",
                    D(rf"g(4)={F(M.g_at(4))}"),
                    D(rf"f(4)={F(M.f_at(4))}"),
                    close(False, "The dashed height $0$ sits above the solid height $-3$"),
                ]),
                lambda: M.g_at(4) > M.f_at(4),
            ),
        ]
    else:
        M = FG(-x + 2, -(x**2) + 2 * x + 8)
        xmin, xmax, name = -3, 5, "WindFarm"
        title = "Opening, crossings, and a height comparison"
        ntrue = 3
        claims = [
            C(
                "The graphs meet in exactly two points.",
                True,
                pack("A", True, [
                    "Count the crossings on the sketch, then confirm with the discriminant of the difference.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant matches the two visible crossings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The turning point of the solid curve lies above the dashed line.",
                True,
                pack("B", True, [
                    "The axis of the reconstructed parabola is an integer tick, so both heights can be read and then checked.",
                    D(rf"x={F(M.h)}"),
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    D(rf"f\left({F(M.h)}\right)={F(M.f_at(M.h))}"),
                    close(True, "The peak height $9$ sits above the dashed height $1$"),
                ]),
                lambda: M.kv > M.f_at(M.h),
            ),
            C(
                "The solid curve opens upwards.",
                False,
                pack("C", False, [
                    "Recover the leading coefficient from the reconstructed solid curve.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(False, "A negative leading coefficient opens the curve downwards"),
                ]),
                lambda: M.a > 0,
            ),
            C(
                "At $x=0$ the dashed line sits above the solid curve.",
                False,
                pack("D", False, [
                    "The gap at the origin is the difference of the two intercepts.",
                    D(rf"g(0)={F(M.g_at(0))}"),
                    D(rf"f(0)={F(M.f_at(0))}"),
                    close(False, "The solid intercept $8$ sits above the dashed intercept $2$"),
                ]),
                lambda: M.f_at(0) > M.g_at(0),
            ),
            C(
                "At the integer mark $x=3$ the solid curve is higher than the dashed line.",
                True,
                pack("E", True, [
                    "Read both heights at $x=3$.",
                    D(rf"g(3)={F(M.g_at(3))}"),
                    D(rf"f(3)={F(M.f_at(3))}"),
                    close(True, "The solid height $5$ sits above the dashed height $-1$"),
                ]),
                lambda: M.g_at(3) > M.f_at(3),
            ),
        ]
    y_ok(M.g, xmin, xmax)
    y_ok(M.f, xmin, xmax)
    assert sum(c.truth for c in claims) == ntrue
    ctx = (
        f"On the axes below, a **solid brown parabola** and a **dashed green line** model "
        f"clearance for {name}. Coefficients are not printed on the diagram. {TAIL}"
    )
    ov = (
        f"The figure is the only source. Reconstructing the two models gives "
        f"$f(x)={L(M.f)}$ and $g(x)={L(M.g)}$. "
        f"The vertex is $\\left({F(M.h)},{F(M.kv)}\\right)$ and the graphs meet {M.meet} times."
    )
    spec = TaskSpec(
        f"Mixed exam — {title}",
        ctx,
        "graph",
        claims,
        ov,
        figure=make_figure(M.g, M.f, f"{name} clearance", xmin, xmax),
    )
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# TABLE — raw values only
# ---------------------------------------------------------------------------

def build_table(cycle: int) -> TaskSpec:
    if cycle == 0:
        a, b, c = 1, -6, 8
        ns = list(range(0, 7))
        vals = seq_from(a, b, c, ns)
        name, title = "SkyLift", "SkyLift sequence"
        ntrue = 2
        s7 = a * 49 + b * 7 + c
        axis_n = Rational(-b, 2 * a)
        d2 = second_diffs(vals)[0]
        claims = [
            C(
                "Diagnosing the table by successive differences, the sequence is quadratic with leading coefficient $1$.",
                True,
                pack("A", True, [
                    "A quadratic sequence $s_n=an^{2}+bn+c$ has constant second differences equal to $2a$. Build the first differences from the raw row, then the second differences from those.",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in first_diffs(vals))})"),
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"2a={d2}\Rightarrow a={F(Rational(d2, 2))}"),
                    close(True, "The constant $2$ forces leading coefficient $1$"),
                ]),
                lambda: d2 == 2 and a == 1,
            ),
            C(
                "The first differences are constant, so the sequence is linear.",
                False,
                pack("B", False, [
                    "A linear sequence is the unique case in which first differences do not change. The first differences of this row are",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in first_diffs(vals))})"),
                    "Those steps themselves grow by $2$ each time, which is the signature of a quadratic, not a line.",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    close(False, "Growing first differences rule out a linear model"),
                ]),
                lambda: len(set(first_diffs(vals))) == 1,
            ),
            C(
                f"Extrapolating one step beyond the table gives $s_{{7}}={s7}$.",
                True,
                pack("C", True, [
                    "Once $a$ is known from the second differences, the opening first difference $a+b$ and the $n=0$ entry recover $b$ and $c$.",
                    D(rf"a=1,\quad a+b={vals[1]-vals[0]}\Rightarrow b={b}"),
                    D(rf"c=s_0={c}"),
                    "The same rule evaluated at $n=7$ is the extrapolated term.",
                    D(rf"s_7={a}\cdot 7^{{2}}+({b})\cdot 7+{c}={s7}"),
                    close(True, "The next term is $15$"),
                ]),
                lambda: s7 == 15,
            ),
            C(
                "After the quadratic is rebuilt, its axis is $n=4$.",
                False,
                pack("D", False, [
                    "The axis of $an^{2}+bn+c$ is $n=-b/(2a)$. With $a=1$ and $b=-6$",
                    D(rf"n=-\frac{{{b}}}{{2\cdot {a}}}={F(axis_n)}"),
                    close(False, "The axis is $n=3$, not $n=4$"),
                ]),
                lambda: axis_n == 4,
            ),
            C(
                "A linear model fitted to the first two samples predicts $s_{4}$ correctly.",
                False,
                pack("E", False, [
                    "The unique line through the first two samples has slope $s_1-s_0$ and intercept $s_0$.",
                    D(rf"s_n={vals[0]}+({vals[1]-vals[0]})n"),
                    D(rf"s_4^{{\text{{lin}}}}={vals[0]+(vals[1]-vals[0])*4}"),
                    "The table's quadratic rule gives a different value at $n=4$.",
                    D(rf"s_4={vals[4]}"),
                    close(False, "The linear extrapolation misses $s_4$"),
                ]),
                lambda: vals[0] + (vals[1] - vals[0]) * 4 == vals[4],
            ),
        ]
    elif cycle == 1:
        a, b, c = 1, -4, 1
        ns = list(range(0, 6))
        vals = seq_from(a, b, c, ns)
        name, title = "IceRink", "IceRink readings"
        ntrue = 3
        s6 = a * 36 + b * 6 + c
        axis_n = Rational(-b, 2 * a)
        d2 = second_diffs(vals)[0]
        d1 = first_diffs(vals)
        claims = [
            C(
                "Diagnosing the table by successive differences, the leading coefficient is $1$.",
                True,
                pack("A", True, [
                    "Compute successive differences from the raw row.",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in d1)})"),
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{\Delta^{{(2)}}}}{{2}}={F(Rational(d2, 2))}"),
                    close(True, "The leading coefficient is $1$"),
                ]),
                lambda: d2 == 2,
            ),
            C(
                "The rebuilt discrete quadratic has its axis at $n=3$.",
                False,
                pack("B", False, [
                    "From $2a=2$ and $a+b=s_1-s_0$ the linear coefficient follows, and then the axis.",
                    D(rf"a=1,\quad b={b}"),
                    D(rf"n=-\frac{{{b}}}{{2\cdot 1}}={F(axis_n)}"),
                    close(False, "The axis is $n=2$, not $n=3$"),
                ]),
                lambda: axis_n == 3,
            ),
            C(
                f"Extrapolating one step beyond the table gives $s_{{6}}={s6}$.",
                True,
                pack("C", True, [
                    "The rebuilt rule is $s_n=n^{2}-4n+1$. One further index is then a substitution.",
                    D(rf"s_6=6^{{2}}-4\cdot 6+1={s6}"),
                    close(True, "The extrapolated term is $13$"),
                ]),
                lambda: s6 == 13,
            ),
            C(
                "The first differences grow by $2$ at each step, confirming that the sequence has degree $2$.",
                True,
                pack("D", True, [
                    "Degree is read from the first order at which differences become constant. Here the first differences themselves form an arithmetic progression with common difference $2$.",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in d1)})"),
                    D(rf"\Delta^{{(2)}}={d2}"),
                    close(True, "Constant second differences are the fingerprint of a quadratic"),
                ]),
                lambda: d2 == 2,
            ),
            C(
                "A linear model through the first two samples predicts $s_{4}$ correctly.",
                False,
                pack("E", False, [
                    "The line through $(0,s_0)$ and $(1,s_1)$ is",
                    D(rf"s_n={vals[0]}+({d1[0]})n"),
                    D(rf"s_4^{{\text{{lin}}}}={vals[0]+d1[0]*4}"),
                    D(rf"s_4={vals[4]}"),
                    close(False, "The linear forecast misses the quadratic value at $n=4$"),
                ]),
                lambda: vals[0] + d1[0] * 4 == vals[4],
            ),
        ]
    else:
        a, b, c = -1, 4, 1
        ns = list(range(0, 7))
        vals = seq_from(a, b, c, ns)
        name, title = "SolarTrack", "SolarTrack samples"
        ntrue = 4
        s7 = a * 49 + b * 7 + c
        s_m1 = a * 1 + b * (-1) + c
        axis_n = Rational(-b, 2 * a)
        d2 = second_diffs(vals)[0]
        claims = [
            C(
                "Diagnosing the table by successive differences, the leading coefficient is $-1$.",
                True,
                pack("A", True, [
                    "Second differences of $an^{2}+bn+c$ equal $2a$. From the raw row",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{{d2}}}{{2}}={a}"),
                    close(True, "The leading coefficient is $-1$"),
                ]),
                lambda: d2 == -2 and a == -1,
            ),
            C(
                "The sequence is cubic, because the later values fall.",
                False,
                pack("B", False, [
                    "A cubic would have constant third differences and non-constant second differences. Here the second differences are already constant.",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    "A downward-opening quadratic falls on both sides of its axis; the drop in the tail is that geometry, not a change of degree.",
                    close(False, "Constant second differences keep the degree at $2$"),
                ]),
                lambda: False,
            ),
            C(
                f"Extrapolating one step beyond the table gives $s_{{7}}={s7}$.",
                True,
                pack("C", True, [
                    "With $a=-1$ and $a+b=s_1-s_0$ the remaining coefficients are $b=4$ and $c=1$.",
                    D(rf"s_n=-n^{{2}}+4n+1"),
                    D(rf"s_7=-7^{{2}}+4\cdot 7+1={s7}"),
                    close(True, "The next term is $-20$"),
                ]),
                lambda: s7 == -20,
            ),
            C(
                f"The axis of the rebuilt quadratic is $n={F(axis_n)}$.",
                True,
                pack("D", True, [
                    "The axis formula uses only the first two rebuilt coefficients.",
                    D(rf"n=-\frac{{{b}}}{{2\cdot ({a})}}={F(axis_n)}"),
                    "The table itself mirrors about that index: $s_0=s_4$ and $s_1=s_3$.",
                    close(True, "The axis is $n=2$"),
                ]),
                lambda: axis_n == 2,
            ),
            C(
                f"Stepping one index to the left of the table gives $s_{{-1}}={s_m1}$.",
                True,
                pack("E", True, [
                    "The same rebuilt rule is valid at $n=-1$.",
                    D(rf"s_{{-1}}=-(-1)^{{2}}+4(-1)+1={s_m1}"),
                    close(True, "The backward extrapolation is $-4$"),
                ]),
                lambda: s_m1 == -4,
            ),
        ]
    assert all(abs(v) <= 20 for v in vals)
    assert sum(c.truth for c in claims) == ntrue
    ctx = (
        f"{name} logs discrete readings $s_n$ for $n=0,1,2,\\ldots$ in the table. "
        f"No closed form is supplied. {TAIL}"
    )
    ov = (
        f"Only the raw row is given. Constant second differences $\\Delta^{{(2)}}={d2}$ "
        f"rebuild $s_n={a}n^{{2}}{b:+d}n{c:+d}$, with axis $n={F(axis_n)}$."
    )
    spec = TaskSpec(
        f"Mixed exam — {title}",
        ctx,
        "table",
        claims,
        ov,
        tables_markdown=raw_table(ns, vals),
    )
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# APPLIED — story + table OR figure as sole numeric source
# ---------------------------------------------------------------------------

def build_applied(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(3 * x + 2, x**2 - 6 * x + 5)
        xs = [0, 1, 2, 3, 4]
        fv = [int(M.f_at(v)) for v in xs]
        gv = [int(M.g_at(v)) for v in xs]
        name, title = "HarborCrane", "HarborCrane operations"
        ntrue = 3
        d2 = second_diffs(gv)[0]
        slope = first_diffs(fv)[0]
        claims = [
            C(
                "The clearance row is quadratic with leading coefficient $1$.",
                True,
                pack("A", True, [
                    "Second differences of a quadratic row equal $2a$. From the clearance values",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in first_diffs(gv))})"),
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{{d2}}}{{2}}=1"),
                    close(True, "Clearance is quadratic with leading coefficient $1$"),
                ]),
                lambda: d2 == 2,
            ),
            C(
                "The fare row is linear with slope $4$.",
                False,
                pack("B", False, [
                    "A linear row has constant first differences, and that constant is the slope.",
                    D(rf"\Delta^{{(1)}}_{{\text{{fare}}}}=({','.join(str(v) for v in first_diffs(fv))})"),
                    D(rf"m={slope}"),
                    close(False, "The fare slope is $3$, not $4$"),
                ]),
                lambda: slope == 4,
            ),
            C(
                "Among the integer loads in the table, clearance is lowest at $x=3$.",
                True,
                pack("C", True, [
                    "The axis of the rebuilt clearance parabola is $x=-b/(2a)$. With $a=1$ and $a+b$ equal to the opening clearance step",
                    D(rf"b={M.b},\quad x={F(M.h)}"),
                    "That axis is an integer column of the table, and the vertex of an upward parabola is its lowest point.",
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    close(True, "The sampled minimum sits at $x=3$"),
                ]),
                lambda: M.h == 3 and M.a > 0,
            ),
            C(
                "If the same linear fare and quadratic clearance continue off the table, they meet twice.",
                True,
                pack("D", True, [
                    "Meetings are the real zeros of the rebuilt difference.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "At the axis of clearance, clearance exceeds fare.",
                False,
                pack("E", False, [
                    "Evaluate both rebuilt models on the clearance axis $x=3$.",
                    D(rf"f(3)={F(M.f_at(3))}"),
                    D(rf"g(3)={F(M.g_at(3))}"),
                    close(False, "Fare $11$ exceeds clearance $-4$ on that axis"),
                ]),
                lambda: M.g_at(M.h) > M.f_at(M.h),
            ),
        ]
        tbl = xy_table(xs, fv, gv, "fare", "clearance")
        fig = None
        ctx = (
            f"{name} logs fare (euros) and bridge clearance (metres) against load $x$ (tonnes) "
            f"in the table. No closed form is on file. {TAIL}"
        )
        ov = (
            f"The table is the only numeric source. Fitting gives $f(x)={L(M.f)}$ and "
            f"$g(x)={L(M.g)}$; axis $x={F(M.h)}$, {M.meet} meetings."
        )
    elif cycle == 1:
        M = FG(x - 1, -(x**2) + 4 * x + 2)
        xmin, xmax = -1, 6
        name, title = "RiverFerry", "RiverFerry altitude track"
        ntrue = 4
        y_ok(M.g, xmin, xmax)
        y_ok(M.f, xmin, xmax)
        claims = [
            C(
                "The altitude curve and the linear track meet in exactly two points.",
                True,
                pack("A", True, [
                    "Count the crossings on the figure, then confirm with the discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "Two crossings match a positive discriminant"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The peak of the altitude curve lies above the linear track.",
                True,
                pack("B", True, [
                    "The peak is the turning point of the solid curve.",
                    D(rf"x={F(M.h)}"),
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    D(rf"f\left({F(M.h)}\right)={F(M.f_at(M.h))}"),
                    close(True, "The peak height $6$ sits above the track height $1$"),
                ]),
                lambda: M.kv > M.f_at(M.h),
            ),
            C(
                "The altitude curve opens downwards.",
                True,
                pack("C", True, [
                    "Opening is the sign of the leading coefficient of the reconstructed altitude.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(True, "A negative leading coefficient opens the curve downwards"),
                ]),
                lambda: M.a < 0,
            ),
            C(
                "At $x=0$ the linear track sits above the altitude curve.",
                False,
                pack("D", False, [
                    "Compare the two intercepts on the vertical axis.",
                    D(rf"g(0)={F(M.g_at(0))}"),
                    D(rf"f(0)={F(M.f_at(0))}"),
                    close(False, "Altitude $2$ sits above the track intercept $-1$"),
                ]),
                lambda: M.f_at(0) > M.g_at(0),
            ),
            C(
                "At the integer mark $x=1$ the altitude curve sits above the linear track.",
                True,
                pack("E", True, [
                    "Read both heights at the tick $x=1$, then confirm by substituting into the reconstructed models.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"g(1)={F(M.g_at(1))}"),
                    D(rf"f(x)={L(M.f)}"),
                    D(rf"f(1)={F(M.f_at(1))}"),
                    close(True, "Altitude $5$ sits above the track height $0$"),
                ]),
                lambda: M.g_at(1) > M.f_at(1),
            ),
        ]
        tbl = None
        fig = make_figure(M.g, M.f, f"{name} altitude", xmin, xmax)
        ctx = (
            f"{name} overlays a linear service track on a quadratic altitude cap "
            f"(figure). No formulae are printed. {TAIL}"
        )
        ov = (
            f"The figure is the only numeric source. The models are $f(x)={L(M.f)}$ and "
            f"$g(x)={L(M.g)}$; vertex $\\left({F(M.h)},{F(M.kv)}\\right)$, {M.meet} meetings."
        )
    else:
        M = FG(2 * x - 4, x**2 - 5 * x + 4)
        xs = [0, 1, 2, 3, 4, 5]
        fv = [int(M.f_at(v)) for v in xs]
        gv = [int(M.g_at(v)) for v in xs]
        name, title = "Greenhouse", "Greenhouse climate log"
        ntrue = 5
        d2 = second_diffs(gv)[0]
        slope = first_diffs(fv)[0]
        g6 = int(M.g_at(6))
        claims = [
            C(
                "The temperature row is quadratic with leading coefficient $1$.",
                True,
                pack("A", True, [
                    "Second differences diagnose degree and leading coefficient.",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{{d2}}}{{2}}=1"),
                    close(True, "Temperature is quadratic with leading coefficient $1$"),
                ]),
                lambda: d2 == 2,
            ),
            C(
                "The target row is linear with slope $2$.",
                True,
                pack("B", True, [
                    "Constant first differences of the target row are the slope.",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in first_diffs(fv))})"),
                    D(rf"m={slope}"),
                    close(True, "The target slope is $2$"),
                ]),
                lambda: slope == 2,
            ),
            C(
                "If both fitted models continue, they meet twice.",
                True,
                pack("C", True, [
                    "Form the difference of the rebuilt models and read its discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                f"Extrapolating the temperature row one step gives the value ${g6}$ at $x=6$.",
                True,
                pack("D", True, [
                    "The rebuilt temperature rule is $g(x)=x^{2}-5x+4$.",
                    D(rf"g(6)=6^{{2}}-5\cdot 6+4={g6}"),
                    close(True, "The next temperature reading is $10$"),
                ]),
                lambda: g6 == 10,
            ),
            C(
                "The axis of the temperature parabola sits halfway between the two equal samples at $x=2$ and $x=3$.",
                True,
                pack("E", True, [
                    "A parabola is symmetric about its axis, so two equal heights at integer inputs force the axis to their midpoint.",
                    D(rf"g(2)=g(3)={gv[2]}"),
                    D(rf"x=\frac{{2+3}}{{2}}={F(M.h)}"),
                    "The coefficient formula agrees.",
                    D(rf"x=-\frac{{{F(M.b)}}}{{2\cdot {F(M.a)}}}={F(M.h)}"),
                    close(True, "The axis is $x=\\frac{5}{2}$"),
                ]),
                lambda: M.h == Rational(5, 2),
            ),
        ]
        tbl = xy_table(xs, fv, gv, "target", "temperature")
        fig = None
        ctx = (
            f"{name} logs a linear target and a quadratic temperature against hour $x$ "
            f"in the table. No closed form is supplied. {TAIL}"
        )
        ov = (
            f"Fitting the two rows gives $f(x)={L(M.f)}$ and $g(x)={L(M.g)}$; "
            f"axis $x={F(M.h)}$, {M.meet} meetings."
        )
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(
        f"Mixed exam — {title}",
        ctx,
        "applied",
        claims,
        ov,
        figure=fig,
        tables_markdown=tbl,
    )
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# SYMBOLIC — no numeric data
# ---------------------------------------------------------------------------

def build_symbolic(cycle: int) -> TaskSpec:
    if cycle == 0:
        ntrue = 4
        ctx = (
            "A non-constant line $f$ and a quadratic $g$ with nonzero leading coefficient "
            f"meet through the difference $d(x)=g(x)-f(x)$. No numeric data are supplied. {TAIL}"
        )
        title = "symbolic reasoning 1"
        claims = [
            C(
                "Unless the slope of $f$ vanishes, the axis of $d$ differs from the axis of $g$.",
                True,
                pack("A", True, [
                    "Subtracting a slanted line leaves the square term of $g$ untouched but shifts the linear coefficient.",
                    D(r"d(x)=ax^{2}+(b-m)x+(c-k)"),
                    "An axis depends only on the first two coefficients, so the two axes split by a term proportional to the slope.",
                    D(r"x_{d}-x_{g}=\frac{m}{2a}"),
                    close(True, "A nonzero slope moves the axis of the difference"),
                ]),
                lambda: True,
            ),
            C(
                "The coefficient of $x^{2}$ in $d$ equals the leading coefficient of $g$.",
                True,
                pack("B", True, [
                    "A line has no square term to contribute, so the subtraction cannot change the leading coefficient of $g$.",
                    D(r"d(x)=ax^{2}+(b-m)x+(c-k)"),
                    close(True, "The square-term coefficient of $d$ is still $a$"),
                ]),
                lambda: True,
            ),
            C(
                "If the graphs of $f$ and $g$ are tangent, the vertex of $d$ lies on the horizontal axis.",
                True,
                pack("C", True, [
                    "Tangency means $g=f$ has a repeated root, so $d$ has a double zero. A double zero of a parabola sits at its vertex, and the value there is zero.",
                    D(r"d(x)=a\left(x-x_{0}\right)^{2}"),
                    D(r"d\left(x_{0}\right)=0"),
                    close(True, "A vertex of height zero lies on the horizontal axis"),
                ]),
                lambda: True,
            ),
            C(
                "Nesting always adds the degrees: the highest power of $g(f(x))$ equals the sum of the degrees of $g$ and $f$.",
                False,
                pack("D", False, [
                    "Degrees add under multiplication and multiply under substitution. Putting a line inside a parabola squares a linear expression and stops at the second power.",
                    D(r"g(f(x))=a(mx+k)^{2}+b(mx+k)+c"),
                    D(r"a(mx+k)^{2}=am^{2}x^{2}+\cdots"),
                    close(False, "The highest power is $x^{2}$, the product of the two degrees, not their sum"),
                ]),
                lambda: False,
            ),
            C(
                "The function $d$ has a smallest value exactly when $a>0$.",
                True,
                pack("E", True, [
                    "The difference inherits the leading coefficient of $g$, so it opens the same way $g$ does. An upward parabola is bounded below by its vertex; a downward one is not bounded below at all.",
                    D(r"a>0\Rightarrow d(x)\geq d\left(x_{d}\right)"),
                    close(True, "A smallest value exists precisely when the leading coefficient is positive"),
                ]),
                lambda: True,
            ),
        ]
        ov = "Pure line–parabola reasoning: $d=g-f$ keeps the square term of $g$, shifts the axis when the slope is nonzero, and has a minimum exactly when it opens upwards."
    elif cycle == 1:
        ntrue = 5
        ctx = (
            "A line $f$ and a parabola $g$ are compared with the mirrored pair "
            "$\\tilde f(x)=f(-x)$, $\\tilde g(x)=g(-x)$. No coordinates are given. "
            + TAIL
        )
        title = "symbolic reasoning 2"
        claims = [
            C(
                "The graphs of $\\tilde f$ and $\\tilde g$ meet exactly as often as those of $f$ and $g$.",
                True,
                pack("A", True, [
                    "The map $x\\mapsto -x$ is a bijection of the real line, and it sends a meeting of $f$ and $g$ to a meeting of the mirrors.",
                    D(r"g(x)=f(x)\iff \tilde g(-x)=\tilde f(-x)"),
                    close(True, "The meeting count is preserved"),
                ]),
                lambda: True,
            ),
            C(
                "If $f$ and $g$ are tangent, then so are $\\tilde f$ and $\\tilde g$.",
                True,
                pack("B", True, [
                    "Tangency is a double root of $g-f$. Replacing $x$ by $-x$ sends a double root to a double root.",
                    D(r"\Delta(g-f)=0\Rightarrow \Delta(\tilde g-\tilde f)=0"),
                    close(True, "Tangency survives mirroring"),
                ]),
                lambda: True,
            ),
            C(
                "The difference $\\tilde g-\\tilde f$ stays quadratic, so the mirrored graphs meet in at most two points.",
                True,
                pack("C", True, [
                    "Mirroring does not raise the highest power: $\\tilde g$ is still a parabola and $\\tilde f$ is still a line.",
                    D(r"\tilde g(x)-\tilde f(x)=a x^{2}-(b-m)x+(c-k)"),
                    close(True, "A quadratic equation has at most two real roots"),
                ]),
                lambda: True,
            ),
            C(
                "$\\tilde g$ opens in the same direction as $g$.",
                True,
                pack("D", True, [
                    "Replacing $x$ by $-x$ leaves the leading coefficient untouched, and opening is that sign alone.",
                    D(r"a_{\tilde g}=a"),
                    close(True, "The opening direction is preserved"),
                ]),
                lambda: True,
            ),
            C(
                "The axis of $\\tilde g$ is the reflection of the axis of $g$.",
                True,
                pack("E", True, [
                    "The axis $x=h$ of $g$ is sent to $x=-h$ under $x\\mapsto -x$, which is precisely the axis of the mirrored parabola.",
                    D(r"x_{\tilde g}=-x_{g}"),
                    close(True, "The axis is reflected"),
                ]),
                lambda: True,
            ),
        ]
        ov = "Mirroring $x\\mapsto -x$ preserves meeting count, tangency, degree and opening, and reflects the axis."
    else:
        ntrue = 1
        ctx = (
            "A quadratic $g(x)=ax^{2}+bx+c$ with $a\\neq 0$ has two distinct real roots; write $S$ "
            f"for their sum and $P$ for their product. No numbers are supplied. {TAIL}"
        )
        title = "symbolic reasoning 3"
        claims = [
            C(
                "If $P<0$, the two roots have opposite signs.",
                True,
                pack("A", True, [
                    "The product of the roots is $P$. A negative product means one factor is positive and the other is negative.",
                    D(r"r_{1}r_{2}=P<0"),
                    close(True, "Opposite signs follow from a negative product"),
                ]),
                lambda: True,
            ),
            C(
                "If $P>0$, both roots must be positive.",
                False,
                pack("B", False, [
                    "A positive product only forces the two roots to share a sign. Combined with a negative sum they are both negative.",
                    D(r"P>0,\quad S<0\Rightarrow r_{1},r_{2}<0"),
                    close(False, "A positive product does not force both roots to be positive"),
                ]),
                lambda: False,
            ),
            C(
                "If $S=0$, the product $P$ must be positive.",
                False,
                pack("C", False, [
                    "A vanishing sum means the roots are opposites $r$ and $-r$, so their product is $-r^{2}$. For two distinct real roots that quantity is strictly negative.",
                    D(r"S=0\Rightarrow P=-r^{2}<0"),
                    close(False, "The product is negative, not positive"),
                ]),
                lambda: False,
            ),
            C(
                "If $P>0$ and $S<0$, both roots are positive.",
                False,
                pack("D", False, [
                    "Equal signs come from the product; the shared sign is read from the sum. A negative sum puts both roots to the left of the origin.",
                    D(r"P>0,\ S<0\Rightarrow r_{1}<0,\ r_{2}<0"),
                    close(False, "Both roots are negative, not positive"),
                ]),
                lambda: False,
            ),
            C(
                "If $P<0$ and $a>0$, then $g(0)>0$.",
                False,
                pack("E", False, [
                    "The constant term is $g(0)=c=aP$. A positive leading coefficient times a negative product makes $c$ negative.",
                    D(r"g(0)=aP<0"),
                    close(False, "The origin lies below the graph, so $g(0)$ is negative"),
                ]),
                lambda: False,
            ),
        ]
        ov = "Vieta: $S=-b/a$ and $P=c/a$. Sign patterns of the roots follow from $S$ and $P$ alone; $g(0)=aP$."
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "symbolic", claims, ov)
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# PARAMETRIC
# ---------------------------------------------------------------------------

def build_parametric(cycle: int) -> TaskSpec:
    if cycle == 0:
        f = 2 * x - 1
        gt = x**2 - 2 * t_sym * x + t_sym
        disc_t = expand(discriminant(Poly(expand(gt - f), x)))
        # Δ = 4t(t+1)
        t_val = Rational(2)
        g_inst = expand(gt.subs(t_sym, t_val))
        M = FG(f, g_inst)
        delta_inst = Rational(simplify(disc_t.subs(t_sym, t_val)))
        delta3 = Rational(simplify(disc_t.subs(t_sym, 3)))
        name, title = "ArenaLights", "ArenaLights parameter sweep"
        ntrue = 5
        claims = [
            C(
                f"With $t={F(t_val)}$, the graphs meet in two distinct points (they are not tangent).",
                True,
                pack("A", True, [
                    "Tangency is a vanishing discriminant of $g_t-f$. Expanding that discriminant as a function of $t$ gives",
                    D(rf"\Delta(t)={L(disc_t)}"),
                    D(rf"\Delta\left({F(t_val)}\right)={F(delta_inst)}"),
                    close(True, "A positive value means two distinct meetings, not a tangency"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "Tangency occurs at $t=0$.",
                True,
                pack("B", True, [
                    "The discriminant factors as $4t(t+1)$, so it vanishes at $t=0$ and at $t=-1$.",
                    D(rf"\Delta(t)={L(disc_t)}"),
                    D(r"\Delta(0)=0"),
                    close(True, "The value $t=0$ is a tangency parameter"),
                ]),
                lambda: Rational(simplify(disc_t.subs(t_sym, 0))) == 0,
            ),
            C(
                "For $t=3$ the graphs meet twice.",
                True,
                pack("C", True, [
                    "Substitute $t=3$ into the same discriminant.",
                    D(rf"\Delta(3)={F(delta3)}"),
                    close(True, "A positive discriminant at $t=3$ gives two meetings"),
                ]),
                lambda: delta3 > 0,
            ),
            C(
                "For every real $t$ the difference $g_t-f$ is quadratic in $x$, so there are at most two intersection points.",
                True,
                pack("D", True, [
                    "The parameter $t$ sits in the linear and constant terms, never in a cube.",
                    D(r"g_t(x)-f(x)=x^{2}-(2t+2)x+(t+1)"),
                    close(True, "A quadratic in $x$ has at most two real zeros for any $t$"),
                ]),
                lambda: True,
            ),
            C(
                "There exists a real $t$ making $\\Delta(t)=0$.",
                True,
                pack("E", True, [
                    "The factored discriminant $4t(t+1)$ has two real roots.",
                    D(r"t=0\quad\text{and}\quad t=-1"),
                    close(True, "Tangency occurs for at least one real parameter"),
                ]),
                lambda: True,
            ),
        ]
        ctx = (
            f"{name} tests clearance families $g_t(x)=x^{{2}}-2tx+t$ against "
            f"$f(x)={L(f)}$. Take $t={F(t_val)}$ for the run under review, and study "
            f"how $\\Delta(t)$ changes with $t$. {TAIL}"
        )
        ov = rf"Family $g_t$ versus $f(x)={L(f)}$. Discriminant $\Delta(t)={L(disc_t)}$; at $t=2$ there are two meetings."
    elif cycle == 1:
        f = x + 1
        ga = a_sym * x**2 + 2 * x - 3
        delta_a = expand(discriminant(Poly(expand(ga - f), x)))
        # Δ = 1 + 16a
        name, title = "CargoDrone", "CargoDrone leading-coefficient sweep"
        ntrue = 1
        claims = [
            C(
                "There is a value of $a\\neq 0$ for which the line is tangent to the parabola.",
                True,
                pack("A", True, [
                    "Tangency is $\\Delta(a)=0$. Expanding the discriminant of $g_a-f$ gives a linear equation in $a$.",
                    D(rf"\Delta(a)={L(delta_a)}"),
                    D(rf"a=-\frac{{1}}{{16}}"),
                    close(True, "A nonzero parameter produces a double root"),
                ]),
                lambda: True,
            ),
            C(
                "For every $a>1$ the graphs miss entirely.",
                False,
                pack("B", False, [
                    "The discriminant $\\Delta(a)=1+16a$ is positive once $a$ exceeds $-1/16$, so in particular every $a>1$ yields two meetings, not a miss.",
                    D(rf"\Delta(a)={L(delta_a)}"),
                    D(r"a>1\Rightarrow \Delta(a)>0"),
                    close(False, "Those parameters meet twice rather than miss"),
                ]),
                lambda: False,
            ),
            C(
                "The axis of $g_a$ is independent of $a$.",
                False,
                pack("C", False, [
                    "The axis formula $x=-b/(2a)$ still involves the leading coefficient.",
                    D(r"x=-\frac{1}{a}"),
                    close(False, "The axis moves when $a$ changes"),
                ]),
                lambda: False,
            ),
            C(
                "Every parabola in the family crosses the vertical axis at $3$.",
                False,
                pack("D", False, [
                    "The constant term of $g_a$ does not involve $a$, but that constant is $-3$, not $3$.",
                    D(r"g_a(0)=-3"),
                    close(False, "The intercept is $-3$ for every $a$"),
                ]),
                lambda: False,
            ),
            C(
                "For every real $a\\neq 0$ the graphs meet at least once.",
                False,
                pack("E", False, [
                    "On the side $a<-1/16$ the discriminant is negative, so the graphs miss.",
                    D(rf"\Delta\left(-1\right)={F(Rational(simplify(delta_a.subs(a_sym, -1))))}"),
                    close(False, "Some admissible leading coefficients produce no meeting"),
                ]),
                lambda: False,
            ),
        ]
        ctx = (
            f"A one-parameter family $g_a(x)=ax^{{2}}+2x-3$ with $a\\neq 0$ is tested against "
            f"$f(x)={L(f)}$. Study how $a$ changes meetings via $\\Delta(a)$. {TAIL}"
        )
        ov = rf"Family $g_a$ versus $f(x)={L(f)}$. Discriminant $\Delta(a)={L(delta_a)}$; tangency at $a=-1/16$."
    else:
        g = x**2 - 4 * x + 3
        fk = 2 * x + k_sym
        delta_k = expand(discriminant(Poly(expand(g - fk), x)))
        # Δ = 4(k+6)
        k_star = Rational(-6)
        name, title = "FilmSet", "FilmSet sliding line"
        ntrue = 2
        claims = [
            C(
                f"Exactly one value of $k$ gives tangency, namely $k={F(k_star)}$.",
                True,
                pack("A", True, [
                    "The discriminant of $g-f_k$ is linear in $k$, so it has exactly one root.",
                    D(rf"\Delta(k)={L(delta_k)}"),
                    D(rf"k={F(k_star)}"),
                    close(True, "Tangency occurs at the unique root $k=-6$"),
                ]),
                lambda: Rational(simplify(delta_k.subs(k_sym, k_star))) == 0,
            ),
            C(
                f"Whenever $k>{F(k_star)}$, the line meets the parabola twice.",
                True,
                pack("B", True, [
                    "The leading coefficient of $\\Delta(k)$ is positive, so $\\Delta$ is positive to the right of its root.",
                    D(rf"\Delta(k)={L(delta_k)}"),
                    D(rf"k>{F(k_star)}\Rightarrow \Delta(k)>0"),
                    close(True, "That half-line is exactly the two-meeting zone"),
                ]),
                lambda: True,
            ),
            C(
                "Whenever $k<-7$, the line meets the parabola twice.",
                False,
                pack("C", False, [
                    "For $k<-6$ the discriminant is negative. The stricter inequality $k<-7$ sits inside that miss region.",
                    D(rf"\Delta(-8)={F(Rational(simplify(delta_k.subs(k_sym, -8))))}"),
                    close(False, "Those shifts miss the parabola"),
                ]),
                lambda: False,
            ),
            C(
                "When $k=0$ the line misses the parabola.",
                False,
                pack("D", False, [
                    "Substitute $k=0$ into the discriminant.",
                    D(rf"\Delta(0)={F(Rational(simplify(delta_k.subs(k_sym, 0))))}"),
                    close(False, "A positive discriminant at $k=0$ gives two meetings"),
                ]),
                lambda: False,
            ),
            C(
                "For every real $k$ the line meets the parabola.",
                False,
                pack("E", False, [
                    "Pushing $k$ past $-6$ into the negative-$\\Delta$ region makes the graphs miss.",
                    D(rf"\Delta(k)={L(delta_k)}"),
                    close(False, "Some vertical shifts miss the parabola"),
                ]),
                lambda: False,
            ),
        ]
        ctx = (
            f"Lines $f_k(x)=2x+k$ slide vertically against $g(x)=x^{{2}}-4x+3$ at {name}. "
            f"Decide which inequalities on $k$ force two meetings, tangency, or a miss. {TAIL}"
        )
        ov = rf"Sliding lines $f_k=2x+k$ versus $g=x^{{2}}-4x+3$. Discriminant $\Delta(k)={L(delta_k)}$; tangency at $k=-6$."
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "parametric", claims, ov)
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# REBUILD
# ---------------------------------------------------------------------------

def build_rebuild(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(3 * x - 1, x**2 - 4 * x + 1)
        pt = (1, 2)
        ntrue = 1
        name, title = "Aqueduct", "Aqueduct reconstruction"
        claims = [
            C(
                rf"The rebuilt line is $f(x)={L(M.f)}$.",
                True,
                pack("A", True, [
                    "Point-slope form uses the given slope and the given point.",
                    D(rf"f(x)={F(M.m)}\left(x-{pt[0]}\right)+{pt[1]}"),
                    D(rf"f(x)={L(M.f)}"),
                    close(True, "The reconstructed line matches the data"),
                ]),
                lambda: expand(M.f - (3 * x - 1)) == 0,
            ),
            C(
                rf"The rebuilt parabola is $g(x)=x^{{2}}-4x+3$.",
                False,
                pack("B", False, [
                    "Vertex form with the given turning point and leading coefficient $1$ is",
                    D(rf"g(x)=\left(x-{F(M.h)}\right)^{{2}}+{F(M.kv)}"),
                    D(rf"g(x)={L(M.g)}"),
                    close(False, "The constant term is $1$, not $3$"),
                ]),
                lambda: False,
            ),
            C(
                "The rebuilt curves meet in exactly one point.",
                False,
                pack("C", False, [
                    "Meetings are the real zeros of $g-f$.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "A positive discriminant gives two meetings, not one"),
                ]),
                lambda: M.meet == 1,
            ),
            C(
                "The axis of the rebuilt parabola is $x=3$.",
                False,
                pack("D", False, [
                    "The axis is the abscissa of the given vertex, equivalently $-b/(2a)$ after expansion.",
                    D(rf"x={F(M.h)}"),
                    close(False, "The axis is $x=2$, not $x=3$"),
                ]),
                lambda: M.h == 3,
            ),
            C(
                "The vertex height is $0$.",
                False,
                pack("E", False, [
                    "The vertex height is the value of $g$ on its axis, which was part of the given turning point.",
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    close(False, "The vertex height is $-3$, not $0$"),
                ]),
                lambda: M.kv == 0,
            ),
        ]
        ctx = (
            f"A line through $({pt[0]},{pt[1]})$ with slope ${F(M.m)}$ meets a parabola whose "
            f"vertex is $({F(M.h)},{F(M.kv)})$ and whose leading coefficient is ${F(M.a)}$. "
            f"Rebuild both formulas for {name}, then judge each claim. {TAIL}"
        )
    elif cycle == 1:
        M = FG(2 * x - 4, x**2 - 6 * x + 5)
        pt = (0, -4)
        r1, r2 = 1, 5
        ntrue = 2
        name, title = "SkiLift", "SkiLift reconstruction"
        claims = [
            C(
                rf"The rebuilt line is $f(x)={L(M.f)}$.",
                True,
                pack("A", True, [
                    "Slope $2$ through the intercept $(0,-4)$ is already slope-intercept form.",
                    D(rf"f(x)={L(M.f)}"),
                    close(True, "The line matches the sparse data"),
                ]),
                lambda: expand(M.f - (2 * x - 4)) == 0,
            ),
            C(
                rf"The rebuilt parabola is $g(x)={L(M.g)}$.",
                True,
                pack("B", True, [
                    "A monic parabola with the two given roots expands by Vieta.",
                    D(rf"g(x)=(x-{r1})(x-{r2})"),
                    D(rf"g(x)={L(M.g)}"),
                    close(True, "The expanded parabola matches the root data"),
                ]),
                lambda: expand(M.g - (x**2 - 6 * x + 5)) == 0,
            ),
            C(
                "Rewriting $g$ in powers of the rebuilt line gives leading coefficient $A=1$.",
                False,
                pack("C", False, [
                    "Matching $g=A f^{2}+B f+C$ starts with the square-term quotient $a/m^{2}$.",
                    D(rf"A=\frac{{{F(M.a)}}}{{{F(M.m)}^{{2}}}}={F(M.A)}"),
                    close(False, "The rewrite coefficient is $1/4$, not $1$"),
                ]),
                lambda: M.A == 1,
            ),
            C(
                "The rebuilt curves miss each other.",
                False,
                pack("D", False, [
                    "The discriminant of $g-f$ decides.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "A positive discriminant means two meetings"),
                ]),
                lambda: M.meet == 0,
            ),
            C(
                "The axis of the rebuilt parabola is $x=2$.",
                False,
                pack("E", False, [
                    "The axis is the midpoint of the two given roots, equivalently $-b/(2a)$ after expanding $g(x)=(x-1)(x-5)=x^{2}-6x+5$.",
                    D(rf"x=\frac{{{r1}+{r2}}}{{2}}={F(M.h)}"),
                    D(rf"x=-\frac{{-6}}{{2\cdot 1}}={F(M.h)}"),
                    close(False, "The axis is $x=3$, not $x=2$"),
                ]),
                lambda: M.h == 2,
            ),
        ]
        ctx = (
            f"Engineers at {name} know a service line has slope ${F(M.m)}$ and passes through "
            f"$({pt[0]},{pt[1]})$. The parabola has roots ${r1}$ and ${r2}$ and leading coefficient "
            f"${F(M.a)}$. Recover $f$ and $g$, then decide. {TAIL}"
        )
    else:
        M = FG(-x + 5, -(x**2) + 2 * x + 3)
        pt = (2, 3)
        ntrue = 3
        name, title = "MineCart", "MineCart reconstruction"
        claims = [
            C(
                rf"The rebuilt line is $f(x)={L(M.f)}$.",
                True,
                pack("A", True, [
                    "Point-slope with slope $-1$ through $(2,3)$ expands to",
                    D(rf"f(x)=-1\cdot (x-2)+3"),
                    D(rf"f(x)={L(M.f)}"),
                    close(True, "The line matches the given slope and point"),
                ]),
                lambda: expand(M.f - (-x + 5)) == 0,
            ),
            C(
                rf"The rebuilt parabola is $g(x)={L(M.g)}$.",
                True,
                pack("B", True, [
                    "Vertex form with axis $x=1$, height $4$, and leading coefficient $-1$ expands to",
                    D(rf"g(x)=-\left(x-1\right)^{{2}}+4"),
                    D(rf"g(x)={L(M.g)}"),
                    close(True, "The expanded parabola matches the vertex data"),
                ]),
                lambda: expand(M.g - (-(x**2) + 2 * x + 3)) == 0,
            ),
            C(
                "The rebuilt curves meet in exactly two points.",
                True,
                pack("C", True, [
                    "Form the difference and read the discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The vertex height is $2$.",
                False,
                pack("D", False, [
                    "The vertex height was part of the given data and can be rechecked by substitution.",
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    close(False, "The vertex height is $4$, not $2$"),
                ]),
                lambda: M.kv == 2,
            ),
            C(
                "The rewrite $g=A f^{2}+B f+C$ has $A=1$.",
                False,
                pack("E", False, [
                    "The leading rewrite coefficient is the quotient of the two leading coefficients, with the line's slope squared in the denominator.",
                    D(rf"A=\frac{{{F(M.a)}}}{{{F(M.m)}^{{2}}}}={F(M.A)}"),
                    close(False, "The coefficient $A$ is $-1$, not $1$"),
                ]),
                lambda: M.A == 1,
            ),
        ]
        ctx = (
            f"Rebuild for {name}: line slope ${F(M.m)}$, point $({pt[0]},{pt[1]})$; "
            f"parabola axis $x={F(M.h)}$, vertex height ${F(M.kv)}$, leading coefficient ${F(M.a)}$. {TAIL}"
        )
    ov = (
        f"Rebuilt $f(x)={L(M.f)}$, $g(x)={L(M.g)}$; vertex $\\left({F(M.h)},{F(M.kv)}\\right)$; "
        f"{M.meet} meetings; rewrite $A={F(M.A)}$."
    )
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "rebuild", claims, ov)
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# NESTED
# ---------------------------------------------------------------------------

def build_nested(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(2 * x - 1, x**2 - 4 * x + 1)
        ntrue = 2
        name, title = "Orchard", "Orchard compositions"
        gf_axis = Rational(
            -Poly(M.gf, x).nth(1) / (2 * Poly(M.gf, x).nth(2))
        )
        claims = [
            C(
                rf"$g(f(x))={L(M.gf)}$.",
                True,
                pack("A", True, [
                    "Substitute the line into the parabola and expand, term by term.",
                    D(rf"g(f(x))=g\left({L(M.f)}\right)"),
                    D(rf"({L(M.f)})^{{2}}-4({L(M.f)})+1"),
                    D(rf"g(f(x))={L(M.gf)}"),
                    close(True, "The expanded composition matches the claim"),
                ]),
                lambda: expand(M.gf - (4 * x**2 - 12 * x + 6)) == 0,
            ),
            C(
                "The highest power of $f(g(x))$ equals the highest power of $g(f(x))$.",
                True,
                pack("B", True, [
                    "Highest powers multiply under substitution. Both orders use degrees $1$ and $2$, so both close at $x^{2}$. Expanding the other order confirms it.",
                    D(rf"f(g(x))={L(M.fg)}"),
                    D(rf"g(f(x))={L(M.gf)}"),
                    close(True, "Both compositions are quadratic"),
                ]),
                lambda: Poly(M.gf, x).degree() == Poly(M.fg, x).degree() == 2,
            ),
            C(
                "The highest power of $g(f(x))$ is $x^{3}$.",
                False,
                pack("C", False, [
                    "Squaring a linear expression reaches $x^{2}$ and stops; the remaining terms of $g$ are linear or constant in $f$.",
                    D(rf"g(f(x))={L(M.gf)}"),
                    close(False, "The highest power is $x^{2}$, not $x^{3}$"),
                ]),
                lambda: Poly(M.gf, x).degree() == 3,
            ),
            C(
                "The axis of $g(f)$ equals the axis of $g$.",
                False,
                pack("D", False, [
                    "Each parabola has its own axis, computed from its own first two coefficients.",
                    D(rf"x_{{g(f)}}={F(gf_axis)}"),
                    D(rf"x_g={F(M.h)}"),
                    close(False, "The axes are $\\frac{3}{2}$ and $2$, which are not equal"),
                ]),
                lambda: gf_axis == M.h,
            ),
            C(
                "$f(g(1))$ equals $g(f(1))$.",
                False,
                pack("E", False, [
                    "The two orders of substitution are different functions. Evaluate each at $1$.",
                    D(rf"g(1)={F(M.g_at(1))}"),
                    D(rf"f(g(1))={F(M.at(M.fg, 1))}"),
                    D(rf"g(f(1))={F(M.at(M.gf, 1))}"),
                    close(False, "The two values are $-5$ and $-2$"),
                ]),
                lambda: M.at(M.fg, 1) == M.at(M.gf, 1),
            ),
        ]
        ctx = (
            f"Composition drills for {name}: $f(x)={L(M.f)}$, $g(x)={L(M.g)}$. "
            f"Expand before trusting degree shortcuts. {TAIL}"
        )
    elif cycle == 1:
        M = FG(x + 2, -(x**2) + 2 * x + 3)
        ntrue = 3
        name, title = "BridgeDeck", "BridgeDeck nested maps"
        gf_axis = Rational(
            -Poly(M.gf, x).nth(1) / (2 * Poly(M.gf, x).nth(2))
        )
        claims = [
            C(
                rf"$g(f(x))={L(M.gf)}$.",
                True,
                pack("A", True, [
                    "Replace $x$ by $x+2$ in $g$ and expand.",
                    D(rf"g(x+2)=-(x+2)^{{2}}+2(x+2)+3"),
                    D(rf"g(f(x))={L(M.gf)}"),
                    close(True, "The expanded composition matches"),
                ]),
                lambda: expand(M.gf - (-(x**2) - 2 * x + 3)) == 0,
            ),
            C(
                "The highest power of $f(g(x))$ is $x^{2}$.",
                True,
                pack("B", True, [
                    "The outer map $f$ is linear, so it cannot raise the highest power of $g$. Expanding confirms a quadratic.",
                    D(rf"f(g(x))={L(M.fg)}"),
                    close(True, "The composition $f(g(x))$ is quadratic"),
                ]),
                lambda: Poly(M.fg, x).degree() == 2,
            ),
            C(
                rf"The axis of $g(f)$ is $x={F(gf_axis)}$.",
                True,
                pack("C", True, [
                    "Apply $-b/(2a)$ to the expanded composition $g(f)$.",
                    D(rf"g(f(x))={L(M.gf)}"),
                    D(rf"x={F(gf_axis)}"),
                    close(True, "The axis of the composition is $x=-1$"),
                ]),
                lambda: gf_axis == -1,
            ),
            C(
                "The axis of $g(f)$ equals the axis of $g$.",
                False,
                pack("D", False, [
                    "The axis of a parabola is $-b/(2a)$ computed from that parabola's own coefficients, not inherited from an inner map. Expand $g(f)$ first.",
                    D(rf"g(f(x))={L(M.gf)}"),
                    D(rf"x_{{g(f)}}={F(gf_axis)}"),
                    "The inner parabola $g$ has a different linear coefficient, so its axis is different.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"x_g={F(M.h)}"),
                    close(False, "The axes are $-1$ and $1$"),
                ]),
                lambda: gf_axis == M.h,
            ),
            C(
                "$g(f(0))$ equals $f(g(0))$.",
                False,
                pack("E", False, [
                    "The two orders of substitution are different functions. Evaluate each at the origin by first computing the inner value.",
                    D(rf"f(0)={F(M.f_at(0))}"),
                    D(rf"g(f(0))=g\left({F(M.f_at(0))}\right)={F(M.at(M.gf, 0))}"),
                    D(rf"g(0)={F(M.g_at(0))}"),
                    D(rf"f(g(0))=f\left({F(M.g_at(0))}\right)={F(M.at(M.fg, 0))}"),
                    close(False, "The values are $3$ and $5$"),
                ]),
                lambda: M.at(M.gf, 0) == M.at(M.fg, 0),
            ),
        ]
        ctx = (
            f"{name} control software nests $f$ and $g$ ($f(x)={L(M.f)}$, "
            f"$g(x)={L(M.g)}$). Compare highest powers, axes, and a sample value. {TAIL}"
        )
    else:
        M = FG(3 * x + 1, x**2 - 2 * x)
        ntrue = 4
        name, title = "FloodGate", "FloodGate nested maps"
        gf_axis = Rational(0)  # 9x^2 - 1, no linear term
        gg = expand(M.g.subs(x, M.g))
        claims = [
            C(
                rf"$g(f(x))={L(M.gf)}$.",
                True,
                pack("A", True, [
                    "Substitute the line into $g(x)=x^{2}-2x$ and expand.",
                    D(rf"(3x+1)^{{2}}-2(3x+1)"),
                    D(rf"g(f(x))={L(M.gf)}"),
                    close(True, "The composition simplifies to $9x^{2}-1$"),
                ]),
                lambda: expand(M.gf - (9 * x**2 - 1)) == 0,
            ),
            C(
                rf"$f(g(x))={L(M.fg)}$.",
                True,
                pack("B", True, [
                    "The other order applies the line to $g$ itself.",
                    D(rf"f(g(x))=3(x^{{2}}-2x)+1"),
                    D(rf"f(g(x))={L(M.fg)}"),
                    close(True, "The expanded $f(g(x))$ matches"),
                ]),
                lambda: expand(M.fg - (3 * x**2 - 6 * x + 1)) == 0,
            ),
            C(
                "The axis of $g(f)$ is the vertical axis.",
                True,
                pack("C", True, [
                    "After expansion $g(f)$ has no linear term, so $-b/(2a)$ is zero.",
                    D(rf"g(f(x))={L(M.gf)}"),
                    D(rf"x={F(gf_axis)}"),
                    close(True, "The axis of $g(f)$ is $x=0$"),
                ]),
                lambda: gf_axis == 0,
            ),
            C(
                "The graph of $g(f)$ meets the horizontal axis in two real points.",
                True,
                pack("D", True, [
                    "Set the expanded composition equal to zero.",
                    D(rf"9x^{{2}}-1=0"),
                    D(rf"x=\pm\frac{{1}}{{3}}"),
                    close(True, "Two distinct real zeros sit on the horizontal axis"),
                ]),
                lambda: discriminant(Poly(M.gf, x)) > 0,
            ),
            C(
                "The highest power of $g(g(x))$ is $x^{2}$.",
                False,
                pack("E", False, [
                    "Nesting a quadratic in itself multiplies the degrees: $2\\cdot 2=4$. Expanding makes the fourth power visible.",
                    D(rf"g(g(x))={L(gg)}"),
                    close(False, "The highest power is $x^{4}$, not $x^{2}$"),
                ]),
                lambda: Poly(gg, x).degree() == 2,
            ),
        ]
        ctx = (
            f"A line $f(x)={L(M.f)}$ and parabola $g(x)={L(M.g)}$ are nested in both orders at {name}. "
            f"Track highest powers, axes, and meetings with the horizontal axis. {TAIL}"
        )
    ov = (
        f"Compositions $g(f(x))={L(M.gf)}$ and $f(g(x))={L(M.fg)}$. "
        f"Highest powers multiply; axes of $g(f)$ and $g$ need not agree."
    )
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "nested", claims, ov)
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# FACTORED
# ---------------------------------------------------------------------------

def build_factored(cycle: int) -> TaskSpec:
    if cycle == 0:
        r1, r2 = 1, 5
        M = FG(2 * x - 2, (x - r1) * (x - r2))
        ntrue = 3
        name, title = "RaceTrack", "RaceTrack factored parabola"
        fact = rf"(x-{r1})(x-{r2})"
        claims = [
            C(
                rf"The axis is the midpoint of the roots, so $x={F(M.h)}$.",
                True,
                pack("A", True, [
                    "A factored monic parabola $g(x)=(x-r_1)(x-r_2)$ has axis at the midpoint of the roots, which is also $-b/(2a)$ after expansion.",
                    D(rf"x=\frac{{{r1}+{r2}}}{{2}}={F(M.h)}"),
                    D(rf"g(x)={L(M.g)}"),
                    close(True, "The axis is $x=3$"),
                ]),
                lambda: M.h == 3,
            ),
            C(
                rf"The product of the roots is ${F(M.p)}$.",
                True,
                pack("B", True, [
                    "Vieta reads the product from the constant term of a monic quadratic, and also as the product of the displayed roots.",
                    D(rf"P={r1}\cdot {r2}={F(M.p)}"),
                    D(rf"P=\frac{{c}}{{a}}={F(M.p)}"),
                    close(True, "The product is $5$"),
                ]),
                lambda: M.p == 5,
            ),
            C(
                rf"The vertex height is ${F(M.kv)}$.",
                True,
                pack("C", True, [
                    "The axis is already the midpoint $x=3$. Evaluate the factored form there, then cross-check against the expansion.",
                    D(rf"g\left({F(M.h)}\right)=({F(M.h)}-{r1})({F(M.h)}-{r2})={F(M.kv)}"),
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"g(3)=9-18+5={F(M.kv)}"),
                    close(True, "The vertex height is $-4$"),
                ]),
                lambda: M.kv == -4,
            ),
            C(
                "The line and the parabola meet in exactly one point.",
                False,
                pack("D", False, [
                    "The difference $g-f$ is still quadratic. Its discriminant decides the meeting count.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 1,
            ),
            C(
                "The factored parabola opens downwards.",
                False,
                pack("E", False, [
                    "The leading coefficient of $(x-1)(x-5)$ is $+1$.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(False, "A positive leading coefficient opens the parabola upwards"),
                ]),
                lambda: M.a < 0,
            ),
        ]
        ctx = (
            f"At {name} the parabola is given in factored form $g(x)={fact}$ and the line is "
            f"$f(x)={L(M.f)}$. Use Vieta, the axis, and the discriminant of $g-f$. {TAIL}"
        )
    elif cycle == 1:
        r1, r2 = -1, 3
        M = FG(x - 1, -((x - r1) * (x - r2)))
        ntrue = 4
        name, title = "Observatory", "Observatory factored parabola"
        fact = rf"-(x+1)(x-3)"
        claims = [
            C(
                rf"The axis is $x={F(M.h)}$.",
                True,
                pack("A", True, [
                    "The axis is still the midpoint of the displayed roots; the overall minus sign does not move it.",
                    D(rf"x=\frac{{({F(r1)})+{r2}}}{{2}}={F(M.h)}"),
                    close(True, "The axis is $x=1$"),
                ]),
                lambda: M.h == 1,
            ),
            C(
                rf"The product of the roots is ${F(M.p)}$.",
                True,
                pack("B", True, [
                    "The displayed roots multiply to $-3$. Vieta on the expanded form $g(x)=-x^{2}+2x+3$ agrees, because $P=c/a$.",
                    D(rf"({F(r1)})\cdot {r2}={F(M.p)}"),
                    D(rf"P=\frac{{{F(M.c)}}}{{{F(M.a)}}}={F(M.p)}"),
                    close(True, "The product is $-3$"),
                ]),
                lambda: M.p == -3,
            ),
            C(
                rf"The vertex height is ${F(M.kv)}$.",
                True,
                pack("C", True, [
                    "Evaluate the factored form on the axis $x=1$, then confirm from the expanded rule $g(x)=-x^{2}+2x+3$.",
                    D(rf"g(1)=-(1+1)(1-3)={F(M.kv)}"),
                    D(rf"g(1)=-1+2+3={F(M.kv)}"),
                    close(True, "The vertex height is $4$"),
                ]),
                lambda: M.kv == 4,
            ),
            C(
                "The line and the parabola meet twice.",
                True,
                pack("D", True, [
                    "Expand, subtract the line, and read the discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The line passes through both roots of $g$.",
                False,
                pack("E", False, [
                    "A line through both roots would be the zero function on those two abscissae, hence would have to be the zero line after two hits on a parabola's roots only if it were $y=0$. Check the given line at a root.",
                    D(rf"g({r2})=0"),
                    D(rf"f({r2})={F(M.f_at(r2))}"),
                    close(False, "The line misses the root $x=3$"),
                ]),
                lambda: M.f_at(r1) == 0 and M.f_at(r2) == 0,
            ),
        ]
        ctx = (
            f"At {name} the parabola is $g(x)={fact}$ and the line is $f(x)={L(M.f)}$. "
            f"Use the displayed roots together with Vieta and the discriminant. {TAIL}"
        )
    else:
        r1, r2 = 1, 4
        M = FG(2 * x - 3, (x - r1) * (x - r2))
        ntrue = 5
        name, title = "Harvester", "Harvester factored parabola"
        fact = rf"(x-{r1})(x-{r2})"
        claims = [
            C(
                rf"The axis is the midpoint $x={F(M.h)}$.",
                True,
                pack("A", True, [
                    "The midpoint of the displayed roots is the axis.",
                    D(rf"x=\frac{{{r1}+{r2}}}{{2}}={F(M.h)}"),
                    close(True, "The axis is $x=\\frac{5}{2}$"),
                ]),
                lambda: M.h == Rational(5, 2),
            ),
            C(
                rf"The product of the roots is ${F(M.p)}$.",
                True,
                pack("B", True, [
                    "Vieta: for a monic quadratic the product equals the constant term.",
                    D(rf"P={r1}\cdot {r2}={F(M.p)}"),
                    close(True, "The product is $4$"),
                ]),
                lambda: M.p == 4,
            ),
            C(
                rf"The sum of the roots is ${F(M.s)}$.",
                True,
                pack("C", True, [
                    "Vieta: the sum is $-b/a$, which for a monic quadratic is the unsigned linear coefficient.",
                    D(rf"S={r1}+{r2}={F(M.s)}"),
                    D(rf"S=-\frac{{{F(M.b)}}}{{{F(M.a)}}}={F(M.s)}"),
                    close(True, "The sum is $5$"),
                ]),
                lambda: M.s == 5,
            ),
            C(
                "The discriminant of $g-f$ is positive, so the graphs meet twice.",
                True,
                pack("D", True, [
                    "Expand $g$, subtract the line, and compute the discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The value $g(0)$ equals the product of the roots.",
                True,
                pack("E", True, [
                    "For a monic quadratic, $g(0)=c$ and Vieta says $P=c$. Directly from the factors",
                    D(rf"g(0)=(-{r1})(-{r2})={F(M.g_at(0))}"),
                    D(rf"P={F(M.p)}"),
                    close(True, "Both quantities equal $4$"),
                ]),
                lambda: M.g_at(0) == M.p,
            ),
        ]
        ctx = (
            f"At {name} the parabola is $g(x)={fact}$ and the line is $f(x)={L(M.f)}$. "
            f"Combine Vieta with the discriminant of $g-f$. {TAIL}"
        )
    ov = (
        f"Factored $g(x)={fact}$; roots ${F(r1)},{F(r2)}$; axis $x={F(M.h)}$; "
        f"$P={F(M.p)}$; {M.meet} meetings."
    )
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "factored", claims, ov)
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# HYBRID — figure + table, no printed formulae
# ---------------------------------------------------------------------------

def build_hybrid(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(x - 2, -(x**2) + 6 * x - 5)
        xmin, xmax = 0, 7
        ns = [0, 1, 2, 3, 4]
        vals = M.seq(ns)
        s5 = int(M.g_at(5))
        d2 = second_diffs(vals)[0]
        ntrue = 4
        name, title = "ZipLine", "ZipLine hybrid check"
        claims = [
            C(
                "From the figure, the solid curve opens downwards.",
                True,
                pack("A", True, [
                    "Opening is visible on the sketch as a peak rather than a trough, and it matches the reconstructed leading coefficient.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(True, "A negative leading coefficient opens the solid curve downwards"),
                ]),
                lambda: M.a < 0,
            ),
            C(
                "From the figure, the graphs meet in exactly two points.",
                True,
                pack("B", True, [
                    "Count the crossings of the solid stroke against the dashed stroke, then confirm with the discriminant.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "Two visible crossings match a positive discriminant"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "From the table, successive differences show that the sampled sequence is quadratic with leading coefficient $-1$.",
                True,
                pack("C", True, [
                    "Build differences from the raw $s_n$ row (the figure is not needed for this letter).",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{{d2}}}{{2}}={F(M.a)}"),
                    close(True, "The table rebuilds leading coefficient $-1$"),
                ]),
                lambda: d2 == -2,
            ),
            C(
                f"From the table, extrapolating one step gives $s_{{5}}={s5}$.",
                True,
                pack("D", True, [
                    "The same rebuilt rule $s_n=-n^{2}+6n-5$ is evaluated at the first missing index.",
                    D(rf"s_5=-5^{{2}}+6\cdot 5-5={s5}"),
                    close(True, "The next term is $0$"),
                ]),
                lambda: s5 == 0,
            ),
            C(
                "After fitting the table, the axis is $x=4$.",
                False,
                pack("E", False, [
                    "With $a=-1$ and $a+b$ equal to the opening first difference, $b=6$ and the axis is",
                    D(rf"x=-\frac{{6}}{{2\cdot (-1)}}={F(M.h)}"),
                    close(False, "The axis is $x=3$, not $x=4$"),
                ]),
                lambda: M.h == 4,
            ),
        ]
    elif cycle == 1:
        M = FG(2 * x - 6, x**2 - 4 * x)
        xmin, xmax = -1, 5
        ns = [0, 1, 2, 3, 4]
        vals = M.seq(ns)
        s5 = int(M.g_at(5))
        d2 = second_diffs(vals)[0]
        ntrue = 5
        name, title = "CanalLock", "CanalLock hybrid check"
        claims = [
            C(
                "From the figure, the solid curve opens upwards.",
                True,
                pack("A", True, [
                    "The sketch shows a trough. The reconstructed leading coefficient confirms it.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(True, "A positive leading coefficient opens the curve upwards"),
                ]),
                lambda: M.a > 0,
            ),
            C(
                "From the figure, the turning point of the solid curve lies below the dashed line.",
                True,
                pack("B", True, [
                    "Compare the two heights on the axis of the solid curve.",
                    D(rf"x={F(M.h)}"),
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    D(rf"f\left({F(M.h)}\right)={F(M.f_at(M.h))}"),
                    close(True, "The trough height $-4$ sits below the dashed height $-2$"),
                ]),
                lambda: M.kv < M.f_at(M.h),
            ),
            C(
                "From the table, successive differences show that the sampled sequence is quadratic with leading coefficient $1$.",
                True,
                pack("C", True, [
                    "Differences of the raw $s_n$ row give",
                    D(rf"\Delta^{{(2)}}={d2}"),
                    D(rf"a=\frac{{{d2}}}{{2}}={F(M.a)}"),
                    close(True, "The table rebuilds leading coefficient $1$"),
                ]),
                lambda: d2 == 2,
            ),
            C(
                f"From the table, extrapolating one step gives $s_{{5}}={s5}$.",
                True,
                pack("D", True, [
                    "The rebuilt rule $s_n=n^{2}-4n$ at the next index is",
                    D(rf"s_5=5^{{2}}-4\cdot 5={s5}"),
                    close(True, "The next term is $5$"),
                ]),
                lambda: s5 == 5,
            ),
            C(
                f"After fitting the table, the axis is $x={F(M.h)}$.",
                True,
                pack("E", True, [
                    "With $a=1$ and $b=-4$ the axis formula gives",
                    D(rf"x=-\frac{{-4}}{{2\cdot 1}}={F(M.h)}"),
                    close(True, "The fitted axis is $x=2$"),
                ]),
                lambda: M.h == 2,
            ),
        ]
    else:
        M = FG(x + 1, -(x**2) + 2 * x + 4)
        xmin, xmax = -2, 4
        ns = [0, 1, 2, 3]
        vals = M.seq(ns)
        s4 = int(M.g_at(4))
        d2 = second_diffs(vals)[0]
        ntrue = 1
        name, title = "DockCrane", "DockCrane hybrid check"
        claims = [
            C(
                "From the figure, the solid curve opens upwards.",
                False,
                pack("A", False, [
                    "The sketch shows a peak. The reconstructed leading coefficient is negative.",
                    D(rf"g(x)={L(M.g)}"),
                    D(rf"a={F(M.a)}"),
                    close(False, "The solid curve opens downwards"),
                ]),
                lambda: M.a > 0,
            ),
            C(
                "From the figure, the graphs meet in exactly three points.",
                False,
                pack("B", False, [
                    "A line and a parabola cannot meet three times. The discriminant of the difference confirms the actual count.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "Two meetings occur, not three"),
                ]),
                lambda: M.meet == 3,
            ),
            C(
                "From the table, the first differences are constant, so $s_n$ is linear.",
                False,
                pack("C", False, [
                    "The first differences of the raw row are not constant.",
                    D(rf"\Delta^{{(1)}}=({','.join(str(v) for v in first_diffs(vals))})"),
                    D(rf"\Delta^{{(2)}}={d2}"),
                    close(False, "Constant second differences keep the sequence quadratic"),
                ]),
                lambda: len(set(first_diffs(vals))) == 1,
            ),
            C(
                f"From the table, extrapolating one step gives $s_{{4}}={s4}$.",
                True,
                pack("D", True, [
                    "Rebuild $s_n=-n^{2}+2n+4$ from $\\Delta^{{(2)}}=-2$ together with the opening step and $s_0$, then substitute $n=4$.",
                    D(rf"s_4=-4^{{2}}+2\cdot 4+4={s4}"),
                    close(True, "The next term is $-4$"),
                ]),
                lambda: s4 == -4,
            ),
            C(
                "After fitting the table, the axis is $x=0$.",
                False,
                pack("E", False, [
                    "Second differences of the raw row recover $2a=-2$, so $a=-1$. The opening first difference is $a+b=s_1-s_0=1$, hence $b=2$.",
                    D(rf"a=-1,\quad b=2"),
                    D(rf"x=-\frac{{2}}{{2\cdot (-1)}}={F(M.h)}"),
                    "An axis at $x=0$ would have required a vanishing linear coefficient.",
                    close(False, "The axis is $x=1$, not $x=0$"),
                ]),
                lambda: M.h == 0,
            ),
        ]
    y_ok(M.g, xmin, xmax)
    y_ok(M.f, xmin, xmax)
    assert sum(c.truth for c in claims) == ntrue
    ctx = (
        f"{name} supplies a figure (solid brown parabola, dashed green line) and a raw table of "
        f"the solid curve's integer samples. No closed form is printed. {TAIL}"
    )
    ov = (
        f"Figure plus table, no printed formulae. Reconstructing gives $f(x)={L(M.f)}$ and "
        f"$g(x)={L(M.g)}$; axis $x={F(M.h)}$, {M.meet} meetings."
    )
    spec = TaskSpec(
        f"Mixed exam — {title}",
        ctx,
        "hybrid",
        claims,
        ov,
        figure=make_figure(M.g, M.f, f"{name} hybrid", xmin, xmax),
        tables_markdown=raw_table(ns, vals),
    )
    assert_claims(spec)
    return spec


# ---------------------------------------------------------------------------
# TEXT DENSE — one paragraph is the sole source
# ---------------------------------------------------------------------------

def build_text_dense(cycle: int) -> TaskSpec:
    if cycle == 0:
        M = FG(4 * x - 3, (x - 1) * (x - 3))
        ntrue = 5
        name, title = "Velodrome", "Velodrome dense briefing"
        ctx = (
            f"At {name} a line of slope $4$ through $(0,-3)$ is used together with a monic parabola "
            f"whose roots are $1$ and $3$. Recover both models from that sentence, then test each claim. {TAIL}"
        )
        claims = [
            C(
                rf"The axis of the parabola is $x={F(M.h)}$.",
                True,
                pack("A", True, [
                    "A monic parabola with roots $1$ and $3$ expands to $g(x)=x^{2}-4x+3$. The axis is both the midpoint of the roots and $-b/(2a)$.",
                    D(rf"g(x)=(x-1)(x-3)=x^{{2}}-4x+3"),
                    D(rf"x=\frac{{1+3}}{{2}}={F(M.h)}"),
                    D(rf"x=-\frac{{-4}}{{2\cdot 1}}={F(M.h)}"),
                    close(True, "Both routes give axis $x=2$"),
                ]),
                lambda: M.h == 2,
            ),
            C(
                rf"The vertex height is ${F(M.kv)}$.",
                True,
                pack("B", True, [
                    "Evaluate the monic factored form on the axis already recovered as $x=2$.",
                    D(rf"g(x)=(x-1)(x-3)"),
                    D(rf"g(2)=(2-1)(2-3)={F(M.kv)}"),
                    "The same height comes from substituting into the expansion $x^{2}-4x+3$.",
                    D(rf"g(2)=4-8+3={F(M.kv)}"),
                    close(True, "The vertex height is $-1$"),
                ]),
                lambda: M.kv == -1,
            ),
            C(
                "The line and the parabola meet twice.",
                True,
                pack("C", True, [
                    "The line through $(0,-3)$ with slope $4$ is $f(x)=4x-3$. Subtract from $g(x)=x^{2}-4x+3$.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(True, "A positive discriminant gives two meetings"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                rf"The product of the roots is ${F(M.p)}$.",
                True,
                pack("D", True, [
                    "The two given roots multiply to $3$, and Vieta on the expansion agrees.",
                    D(rf"P=1\cdot 3={F(M.p)}"),
                    close(True, "The product is $3$"),
                ]),
                lambda: M.p == 3,
            ),
            C(
                "The $y$-intercept of the line is $-3$.",
                True,
                pack("E", True, [
                    "A line of slope $4$ through $(0,-3)$ already displays its intercept.",
                    D(rf"f(x)={L(M.f)}"),
                    D(rf"f(0)={F(M.f_at(0))}"),
                    close(True, "The intercept is $-3$"),
                ]),
                lambda: M.f_at(0) == -3,
            ),
        ]
        ov = (
            f"The dense sentence rebuilds $f(x)={L(M.f)}$ and $g(x)={L(M.g)}$; "
            f"axis $x={F(M.h)}$, vertex height ${F(M.kv)}$, {M.meet} meetings."
        )
    elif cycle == 1:
        M = FG(x - 4, x**2 - x - 2)
        ntrue = 1
        name, title = "BalloonFest", "BalloonFest dense briefing"
        ctx = (
            f"A briefing at {name} states: a line of slope $1$ through $(4,0)$ is drawn against a monic "
            f"parabola with roots $-1$ and $2$. Recover both models from that sentence. {TAIL}"
        )
        claims = [
            C(
                "The line and the parabola meet twice.",
                False,
                pack("A", False, [
                    "The line through $(4,0)$ with slope $1$ is $f(x)=x-4$. The monic parabola with those roots is $g(x)=(x+1)(x-2)=x^{2}-x-2$. Their difference has discriminant",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "A negative discriminant means the graphs miss"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The axis of the parabola is $x=1$.",
                False,
                pack("B", False, [
                    "The midpoint of the given roots is",
                    D(rf"x=\frac{{-1+2}}{{2}}={F(M.h)}"),
                    close(False, "The axis is $x=\\frac{1}{2}$, not $x=1$"),
                ]),
                lambda: M.h == 1,
            ),
            C(
                "The product of the roots is $2$.",
                False,
                pack("C", False, [
                    "The given roots multiply to $-2$. Vieta on the expansion $g(x)=x^{2}-x-2$ agrees.",
                    D(rf"P=(-1)\cdot 2={F(M.p)}"),
                    close(False, "The product is $-2$, not $2$"),
                ]),
                lambda: M.p == 2,
            ),
            C(
                "The slope of the line is $1$.",
                True,
                pack("D", True, [
                    "The briefing states the slope directly, and point-slope through $(4,0)$ reproduces it.",
                    D(rf"f(x)=1\cdot (x-4)+0"),
                    D(rf"f(x)={L(M.f)}"),
                    close(True, "The slope is $1$"),
                ]),
                lambda: M.m == 1,
            ),
            C(
                "The vertex height is $0$.",
                False,
                pack("E", False, [
                    "Evaluate $g$ on its axis.",
                    D(rf"g\left({F(M.h)}\right)={F(M.kv)}"),
                    close(False, "The vertex height is $-\\frac{9}{4}$, not $0$"),
                ]),
                lambda: M.kv == 0,
            ),
        ]
        ov = (
            f"The sentence rebuilds $f(x)={L(M.f)}$ and $g(x)={L(M.g)}$. "
            f"The discriminant of $g-f$ is negative, so the graphs miss; axis $x={F(M.h)}$."
        )
    else:
        M = FG(2 * x + 1, -(x**2) + 6 * x - 5)
        ntrue = 2
        name, title = "PortPilot", "PortPilot dense briefing"
        ctx = (
            f"PortPilot's note reads: a line of slope $2$ through $(0,1)$ is set against a parabola that "
            f"opens downwards, has roots $1$ and $5$, and leading coefficient $-1$. Recover both models. {TAIL}"
        )
        claims = [
            C(
                rf"The axis of the parabola is $x={F(M.h)}$.",
                True,
                pack("A", True, [
                    "The axis is the midpoint of the given roots, independent of the leading-coefficient sign.",
                    D(rf"x=\frac{{1+5}}{{2}}={F(M.h)}"),
                    close(True, "The axis is $x=3$"),
                ]),
                lambda: M.h == 3,
            ),
            C(
                "The parabola opens downwards.",
                True,
                pack("B", True, [
                    "The briefing names leading coefficient $-1$, which is the opening test.",
                    D(rf"g(x)=-(x-1)(x-5)"),
                    D(rf"a={F(M.a)}"),
                    close(True, "A negative leading coefficient opens the parabola downwards"),
                ]),
                lambda: M.a < 0,
            ),
            C(
                "The line and the parabola meet twice.",
                False,
                pack("C", False, [
                    "The line through $(0,1)$ with slope $2$ is $f(x)=2x+1$. Subtract from the expanded $g$.",
                    D(rf"g(x)-f(x)={L(M.diff)}"),
                    D(rf"\Delta={F(M.delta)}"),
                    close(False, "A negative discriminant means the graphs miss"),
                ]),
                lambda: M.meet == 2,
            ),
            C(
                "The vertex height is $0$.",
                False,
                pack("D", False, [
                    "The axis is the midpoint $x=3$ of the given roots. Evaluate the factored form $g(x)=-(x-1)(x-5)$ there.",
                    D(rf"g(3)=-(3-1)(3-5)={F(M.kv)}"),
                    "The expansion $-x^{2}+6x-5$ returns the same height.",
                    D(rf"g(3)=-9+18-5={F(M.kv)}"),
                    close(False, "The vertex height is $4$, not $0$"),
                ]),
                lambda: M.kv == 0,
            ),
            C(
                "The product of the roots is $-5$.",
                False,
                pack("E", False, [
                    "The displayed roots multiply to $5$. Vieta on $g(x)=-x^{2}+6x-5$ gives $P=c/a=(-5)/(-1)=5$ as well.",
                    D(rf"P=1\cdot 5={F(M.p)}"),
                    close(False, "The product is $5$, not $-5$"),
                ]),
                lambda: M.p == -5,
            ),
        ]
        ov = (
            f"The note rebuilds $f(x)={L(M.f)}$ and $g(x)={L(M.g)}$; axis $x={F(M.h)}$, "
            f"vertex height ${F(M.kv)}$, {M.meet} meetings."
        )
    assert sum(c.truth for c in claims) == ntrue
    spec = TaskSpec(f"Mixed exam — {title}", ctx, "text_dense", claims, ov)
    assert_claims(spec)
    return spec


BUILDERS = {
    "graph": build_graph,
    "table": build_table,
    "applied": build_applied,
    "symbolic": build_symbolic,
    "parametric": build_parametric,
    "rebuild": build_rebuild,
    "nested": build_nested,
    "factored": build_factored,
    "hybrid": build_hybrid,
    "text_dense": build_text_dense,
}


def build_task(idx: int) -> TaskSpec:
    kind = STEM_KINDS[idx % 10]
    cycle = idx // 10
    return BUILDERS[kind](cycle)


def render(spec: TaskSpec, idx: int) -> dict:
    n = idx + 1
    task = {
        "id": f"math-7-e{n}",
        "case_id": f"MATH 7.E{str(n).zfill(2)}",
        "title": spec.title,
        "subsection": "7.5",
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [bool(c.truth) for c in spec.claims],
        "tactical_explanations": [c.explanation for c in spec.claims],
        "difficulty_level": "5/5",
        "sort_order": 100 + n,
        "solution_overview": spec.overview,
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }
    if spec.figure:
        task["figure"] = spec.figure
    if spec.tables_markdown:
        task["tables_markdown"] = spec.tables_markdown
    return task


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------

GRAPH_LEAK = re.compile(
    r"(?:turns at|with height|vertex at|g\(x\)\s*=|f\(x\)\s*=|"
    r"leading coefficient|root(?:s)? (?:at|are)|"
    r"axis of symmetry is \$x=)",
    re.I,
)

INT_RE = re.compile(r"(?<![A-Za-z\\])-?\d+")


def stem_blob(task: dict) -> str:
    parts = [task["context"], *task["statements"]]
    if task.get("tables_markdown"):
        parts.append(task["tables_markdown"])
    return "\n".join(parts)


def stem_ints(task: dict) -> list[int]:
    blob = stem_blob(task)
    blob = re.sub(r"\^\{?-?\d+\}?", "", blob)
    blob = re.sub(r"E\d{2}", "", blob)
    return [int(m.group(0)) for m in INT_RE.finditer(blob)]


def validate(tasks: list[dict]) -> dict:
    assert len(tasks) == 30, len(tasks)
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert kinds == Counter({k: 3 for k in STEM_KINDS}), dict(kinds)

    expl_lens: list[int] = []
    all_stem_ints: list[int] = []
    truth_hist = Counter(sum(t["answer_key"]) for t in tasks)
    leaks: list[str] = []

    for i, t in enumerate(tasks):
        n = i + 1
        assert t["id"] == f"math-7-e{n}"
        assert t["case_id"] == f"MATH 7.E{str(n).zfill(2)}"
        assert t["subsection"] == "7.5"
        assert t["sort_order"] == 100 + n
        assert t["difficulty_level"] == "5/5"
        assert t["placeholder"] is False
        assert t["stem_kind"] == STEM_KINDS[i % 10]
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        ntrue = sum(t["answer_key"])
        assert 1 <= ntrue <= 5, (t["case_id"], t["answer_key"])

        if t["stem_kind"] == "graph":
            assert t.get("figure"), t["case_id"]
            blob = t["context"] + " " + " ".join(t["statements"])
            if GRAPH_LEAK.search(blob):
                leaks.append(t["case_id"] + ": " + GRAPH_LEAK.search(blob).group(0))

        if t["stem_kind"] == "table":
            md = t.get("tables_markdown") or ""
            assert md, t["case_id"]
            assert "Delta" not in md and "\\Delta" not in md, t["case_id"]
            ctx = t["context"]
            assert not re.search(r"[fg]\(x\)\s*=", ctx), t["case_id"]

        if t["stem_kind"] == "applied":
            assert t.get("figure") or t.get("tables_markdown"), t["case_id"]
            assert "cm" not in t["context"].lower()
            assert "mm" not in " ".join(t["statements"]).lower()

        if t["stem_kind"] == "hybrid":
            assert t.get("figure") and t.get("tables_markdown"), t["case_id"]
            assert not re.search(r"[fg]\(x\)\s*=", t["context"]), t["case_id"]
            joined = " ".join(t["statements"]).lower()
            assert "from the figure" in joined
            assert "from the table" in joined or "fitting the table" in joined or "after fitting" in joined

        ints = stem_ints(t)
        all_stem_ints.extend(ints)
        if ints:
            mx = max(abs(v) for v in ints)
            assert mx <= 20, (t["case_id"], mx, ints)

        blob_expl = " ".join(t["tactical_explanations"])
        assert "Matching the claim" not in blob_expl
        assert "\\deg" not in blob_expl
        assert "\\circ" not in blob_expl
        for j, e in enumerate(t["tactical_explanations"]):
            assert "so the statement is" in e, (t["case_id"], j)
            assert e.count("$$") >= 2, (t["case_id"], j, e.count("$$"))
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1), (t["case_id"], j)
            expl_lens.append(len(e))

    assert not leaks, leaks
    median = statistics.median(expl_lens)
    assert median >= 180, median
    max_abs = max(abs(v) for v in all_stem_ints) if all_stem_ints else 0
    return {
        "stem_kind": dict(sorted(kinds.items())),
        "truth_hist": dict(sorted(truth_hist.items())),
        "max_abs_int": max_abs,
        "median_expl": median,
        "figures": sum(1 for t in tasks if t.get("figure")),
        "tables": sum(1 for t in tasks if t.get("tables_markdown")),
        "graph_leaks": 0,
    }


def main() -> None:
    specs = [build_task(i) for i in range(30)]
    tasks = [render(s, i) for i, s in enumerate(specs)]
    for t in tasks:
        t["context"] = normalize_displays(t["context"])
        t["solution_overview"] = normalize_displays(t["solution_overview"])
        t["tactical_explanations"] = [normalize_displays(e) for e in t["tactical_explanations"]]
        t["statements"] = [normalize_displays(s) for s in t["statements"]]
    stats = validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {OUT}")
    for k, v in stats.items():
        print(f"  {k}: {v}")
    print("validation: PASSED")


if __name__ == "__main__":
    main()
