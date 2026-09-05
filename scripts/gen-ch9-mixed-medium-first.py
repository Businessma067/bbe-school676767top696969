#!/usr/bin/env python3
"""Chapter 9 mixed exam — medium-first stems, small integers, 30 hard 5/5 tasks.

Each stem style forces solving FROM that medium (figure, raw table, story data,
or algebra). Integers in −20…20 (prefer 1–10). Writes
src/data/math-ch9-mixed-exam.json.

Shared solution_overview fields and letter explanations that build on them
are rewritten afterwards by scripts/enrich-ch9-mixed-overviews.py (Ch7-core
tutoring depth). Re-run that enricher after regenerating this bank.
"""

from __future__ import annotations

import json
import math
import re
import statistics
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Optional

from sympy import (
    Poly,
    Rational,
    Symbol,
    diff,
    expand,
    factor,
    latex,
    real_roots,
    simplify,
    solve,
)

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
k = Symbol("k")
a = Symbol("a")
OUT = Path("/workspace/src/data/math-ch9-mixed-exam.json")

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

TITLES = {
    "graph": [
        "Touch, ends, and a dashed mark from ticks",
        "Odd cubic against a dashed line",
        "Even quartic read from the axes",
    ],
    "table": [
        "Degree and factors from raw samples",
        "Cubic samples with three visible factors",
        "Quartic samples: differences and factors",
    ],
    "applied": [
        "Lock imbalance from the hourly ledger",
        "Beam camber against a design mark",
        "Warehouse deviation from daily closes",
    ],
    "symbolic": [
        "Shared roots, parity, and nested degree",
        "Remainders, mixed parity, nested power",
        "An odd cubic: factors, Vieta, nesting",
    ],
    "parametric": [
        "The cubic family with a sliding gap",
        "A double root with a sliding companion",
        "A double root fixed at the origin",
    ],
    "rebuild": [
        "Rebuild a touch-and-cross monic cubic",
        "Double at 2 and simple at −1",
        "Three simple zeros force a monic cubic",
    ],
    "nested": [
        "Affine outer map around a difference of squares",
        "Two even maps nested both ways",
        "A cubic around a shift: factors of the nest",
    ],
    "factored": [
        "A squared factor and the derivative",
        "Three simple linear factors",
        "Simple at 0, double at 2",
    ],
    "hybrid": [
        "Solid cubic, dashed line, and a value table",
        "Touch cubic on axes plus raw samples",
        "Three crossings, a dashed mark, and table factors",
    ],
    "text_dense": [
        "Five independent small-integer traps",
        "Parity, shift, Vieta, and linear factors",
        "Meetings, interpolation, and far-field sign",
    ],
}


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return rf"{sign}\frac{{{r.p}}}{{{r.q}}}"


def L(expr) -> str:
    return latex(simplify(expand(expr)))


def lin_tex(r, var: str = "x") -> str:
    r = Rational(r)
    if r == 0:
        return var
    if r > 0:
        return rf"({var}-{F(r)})"
    return rf"({var}+{F(-r)})"


def factored_tex(roots_with_mult: list[tuple[int, int]], lead_c: int = 1) -> str:
    parts: list[str] = []
    if lead_c == -1:
        parts.append("-")
    elif lead_c != 1:
        parts.append(L(lead_c))
    for r, m in roots_with_mult:
        f = lin_tex(r)
        parts.append(f if m == 1 else f"{f}^{{{m}}}")
    return "".join(parts)


def close(truth: bool, bridge: str) -> str:
    b = bridge.rstrip(" .")
    return f"{b}, so the statement is {'True' if truth else 'False'}."


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


def coeffs_high_first(expr, var=x) -> list[float]:
    p = Poly(expand(expr), var)
    d = p.degree()
    return [float(p.coeff_monomial(var**i)) for i in range(d, -1, -1)]


def ev(expr, val, var=x):
    return simplify(expand(expr).subs(var, val))


def deg(expr, var=x) -> int:
    e = expand(expr)
    return int(Poly(e, var).degree()) if e != 0 else 0


def lead(expr, var=x):
    return Rational(Poly(expand(expr), var).LC())


def distinct_real_zeros(expr, var=x) -> list:
    return sorted({r for r in solve(expand(expr), var) if r.is_real}, key=float)


def is_even(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) - e) == 0


def is_odd(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) + e) == 0


def n_turns(expr, xmin: float, xmax: float, var=x) -> int:
    rts = []
    for r in solve(diff(expand(expr), var), var):
        if r.is_real:
            v = float(r)
            if xmin + 1e-9 < v < xmax - 1e-9:
                if not rts or abs(v - rts[-1]) > 1e-6:
                    rts.append(v)
    return len(rts)


def n_meet(p, q, xmin: float, xmax: float, var=x) -> int:
    seen: list[float] = []
    for r in real_roots(Poly(expand(p - q), var)):
        v = float(r)
        if xmin - 1e-9 <= v <= xmax + 1e-9:
            if not seen or abs(v - seen[-1]) > 1e-6:
                seen.append(v)
    return len(seen)


def diff_layers(ys: list[int]) -> list[list[int]]:
    layers = [list(map(int, ys))]
    while len(layers[-1]) > 1:
        prev = layers[-1]
        layers.append([prev[i + 1] - prev[i] for i in range(len(prev) - 1)])
    return layers


def next_sample(ys: list[int]) -> int:
    layers = diff_layers(ys)
    extra = layers[-1][-1]
    for i in range(len(layers) - 2, -1, -1):
        extra = layers[i][-1] + extra
    return int(extra)


def layer_tex(vals: list[int]) -> str:
    return ",\\ ".join(str(v) for v in vals)


def value_table(xs: list[int], ys: list[int], xlab: str = "x", ylab: str = "p(x)") -> str:
    return (
        f"| ${xlab}$ | " + " | ".join(str(int(v)) for v in xs) + " |\n"
        "| --- | " + " | ".join("---" for _ in xs) + " |\n"
        f"| ${ylab}$ | " + " | ".join(f"${int(v)}$" for v in ys) + " |"
    )


def make_fig(
    expr,
    xmin: int,
    xmax: int,
    ymin: int,
    ymax: int,
    title: str,
    second=None,
    xlabel: str = "x",
    ylabel: str = "y",
    mark_roots: bool = True,
) -> str:
    return svg_polynomial(
        coeffs_high_first(expr),
        xmin=float(xmin),
        xmax=float(xmax),
        ymin=float(ymin),
        ymax=float(ymax),
        title=title,
        xlabel=xlabel,
        ylabel=ylabel,
        auto_mark_roots=mark_roots,
        auto_mark_turns=True,
        second=coeffs_high_first(second) if second is not None else None,
        second_label=None,
    )


def lim_right(p) -> str:
    lc, d = lead(p), deg(p)
    if d % 2 == 0:
        return "+\\infty" if lc > 0 else "-\\infty"
    return "+\\infty" if lc > 0 else "-\\infty"


def lim_left(p) -> str:
    lc, d = lead(p), deg(p)
    if d % 2 == 0:
        return "+\\infty" if lc > 0 else "-\\infty"
    return "-\\infty" if lc > 0 else "+\\infty"


def right_up(p) -> bool:
    return lim_right(p) == "+\\infty"


def left_up(p) -> bool:
    return lim_left(p) == "+\\infty"


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
class TaskSpec:
    context: str
    claims: list[Claim]
    overview: str
    stem_kind: str
    title: str
    figure: str | None = None
    tables_markdown: str | None = None


def C(text: str, truth: bool, expl: str, check: Optional[Callable[[], bool]] = None) -> Claim:
    return Claim(text, truth, expl, check)


def as_bool(v) -> bool:
    return bool(v)


def verify_claims(claims: list[Claim], tag: str) -> None:
    for i, c in enumerate(claims):
        if c.check is not None and as_bool(c.check()) != as_bool(c.truth):
            raise ValueError(f"{tag} claim {i} check={c.check()} truth={c.truth}: {c.text[:90]}")


def truth_target(idx: int) -> int:
    return ((idx % 10 + 3 * (idx // 10)) % 5) + 1


# ---------------------------------------------------------------------------
# Graph
# ---------------------------------------------------------------------------


def build_graph(variant: int) -> TaskSpec:
    if variant == 0:
        # Touch cubic; 1 true. Students must count the touch as one zero.
        p = expand((x + 1) ** 2 * (x - 2))
        q = Rational(-2)
        xmin, xmax, ymin, ymax = -2, 3, -5, 17
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid polynomial; dashed design mark",
            second=q,
        )
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        n_t = n_turns(p, xmin, xmax)
        p0 = int(ev(p, 0))
        ctx = (
            "The figure shows a polynomial (solid) and a constant dashed companion. "
            "No algebraic formula is printed. Read the axis ticks for ends, axis meetings, "
            f"intercept sign, symmetry, and meetings with the dashed mark. {TAIL}"
        )
        claims = [
            C(
                "As $x\\to+\\infty$ the solid graph tends to $-\\infty$, and as $x\\to-\\infty$ it tends to $+\\infty$.",
                False,
                pack("A", False, [
                    "End behaviour is read from how the solid curve leaves the window, then confirmed by reconstructing the polynomial from the ticks. The solid graph touches the axis near $x=-1$ and crosses near $x=2$; at $x=0$ the height is $-2$. A cubic with those zeros has the shape $c(x+1)^{2}(x-2)$, and the intercept forces $c=1$.",
                    D(r"p(x)=(x+1)^{2}(x-2)"),
                    D(r"p(x)=x^{3}-3x-2"),
                    "An odd power with a positive leading coefficient keeps the sign of $x$ itself at the far ends.",
                    D(r"\lim_{x\to+\infty}p(x)=+\infty"),
                    D(r"\lim_{x\to-\infty}p(x)=-\infty"),
                    close(False, "The statement swaps those two arrows"),
                ]),
                lambda: (not right_up(p)) and left_up(p),
            ),
            C(
                "The solid graph meets the horizontal axis at exactly two distinct points in the window.",
                True,
                pack("B", True, [
                    "A touch still counts as a single meeting with the axis: read the ticks, do not double-count the flattening. The solid curve kisses the axis at $x=-1$ and cuts it at $x=2$; nowhere else in the window does it return to height $0$.",
                    D(r"p(x)=(x+1)^{2}(x-2)"),
                    D(r"p(-1)=0,\quad p(2)=0"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    close(True, "Two distinct axis meetings are visible"),
                ]),
                lambda: n_z == 2,
            ),
            C(
                "Reading the vertical axis, the $y$-intercept of the solid graph is positive.",
                False,
                pack("C", False, [
                    "The intercept is the height at $x=0$, read where the solid curve cuts the vertical axis. That meeting sits below the origin on the ticks.",
                    D(rf"p(0)={p0}"),
                    D(r"p(0)=(0+1)^{2}(0-2)=-2"),
                    close(False, "The intercept is negative, not positive"),
                ]),
                lambda: p0 > 0,
            ),
            C(
                "The solid graph is that of an odd function.",
                False,
                pack("D", False, [
                    "An odd graph is symmetric under a half-turn about the origin: $(x,y)$ on the curve would force $(-x,-y)$ on the curve, and in particular the intercept would have to be $0$. Here the intercept is $-2$, already enough to kill oddness, and the touch at $-1$ has no matching touch at $+1$.",
                    D(rf"p(0)={p0}\\neq 0"),
                    D(r"p(1)=1-3-2=-4,\quad p(-1)=0"),
                    D(r"p(-1)\neq -p(1)"),
                    close(False, "The figure is not origin-symmetric"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "The solid curve meets the dashed mark at exactly two distinct points in the plotted window.",
                False,
                pack("E", False, [
                    "Count distinct intersections with the dashed horizontal, again reading ticks rather than guessing. The dashed mark sits at height $-2$, which is also the intercept, so one meeting is at the origin. Two further meetings occur where the cubic returns to that height.",
                    D(r"p(x)+2=x^{3}-3x=x(x^{2}-3)"),
                    D(rf"x=0,\ \pm\sqrt{{3}}"),
                    D(rf"\text{{meetings in window}}={n_m}"),
                    close(False, f"There are {n_m} distinct meetings, not $2$"),
                ]),
                lambda: n_m == 2,
            ),
        ]
        overview = (
            f"Graph stem: reconstruct $p(x)=x^{{3}}-3x-2$ from ticks "
            f"(touch at $-1$, cross at $2$, intercept $-2$); dashed $y=-2$; "
            f"{n_z} zeros, {n_m} meetings, {n_t} turns."
        )
    elif variant == 1:
        p = expand(x * (x - 2) * (x + 2))
        q = x
        xmin, xmax, ymin, ymax = -3, 3, -16, 16
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid polynomial; dashed companion",
            second=q,
        )
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        n_t = n_turns(p, xmin, xmax)
        p0 = int(ev(p, 0))
        ctx = (
            "The figure shows a polynomial (solid) together with a dashed companion. "
            "No algebraic formula is printed. Read the ticks for end behaviour, distinct "
            f"axis meetings, intercept, origin symmetry, and solid–dashed meetings. {TAIL}"
        )
        claims = [
            C(
                "The solid graph meets the horizontal axis at exactly three distinct points in the window.",
                True,
                pack("A", True, [
                    "Count distinct axis meetings from the ticks: one at the origin and one on each side, aligned with the integer marks $\\pm 2$. None of those meetings is a touch — the curve cuts through each time.",
                    D(r"p(x)=x(x-2)(x+2)"),
                    D(r"p(x)=x^{3}-4x"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    close(True, "Three distinct crossings are visible"),
                ]),
                lambda: n_z == 3,
            ),
            C(
                "The solid graph is that of an odd function.",
                True,
                pack("B", True, [
                    "Origin symmetry is visible: a half-turn about the origin carries the curve onto itself, and the intercept is $0$. Reconstructing from the three simple crossings at $-2$, $0$, $2$ with positive lead (right end up) gives an odd cubic.",
                    D(r"p(x)=x^{3}-4x"),
                    D(r"p(-x)=-x^{3}+4x=-p(x)"),
                    D(r"p(1)=-3,\quad p(-1)=3"),
                    close(True, "The figure is origin-symmetric"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "As $x\\to+\\infty$ the solid graph tends to $+\\infty$, and as $x\\to-\\infty$ it tends to $-\\infty$.",
                True,
                pack("C", True, [
                    "On the right of the window the solid curve is already climbing through the last crossing; on the left it is falling away. That is the signature of an odd-degree polynomial with positive leading coefficient.",
                    D(r"p(x)=x^{3}-4x"),
                    D(r"\lim_{x\to+\infty}p(x)=+\infty"),
                    D(r"\lim_{x\to-\infty}p(x)=-\infty"),
                    close(True, "Both end claims match the leading term $x^{3}$"),
                ]),
                lambda: right_up(p) and not left_up(p),
            ),
            C(
                "The solid curve meets the dashed companion at exactly three distinct points in the plotted window.",
                True,
                pack("D", True, [
                    "The dashed graph is the line through the origin of slope $1$. Meetings solve $p(x)=x$. One meeting is at the origin (both graphs pass through $0$); two further meetings sit near $\\pm 2.2$, inside the window.",
                    D(r"p(x)-x=x^{3}-5x=x(x^{2}-5)"),
                    D(r"x=0,\ \pm\sqrt{5}"),
                    D(rf"\text{{meetings in window}}={n_m}"),
                    close(True, "Three distinct solid–dashed meetings are visible"),
                ]),
                lambda: n_m == 3,
            ),
            C(
                "Exactly three turning points are visible on the solid curve in the window.",
                False,
                pack("E", False, [
                    "Turning points are local peaks and troughs, not axis crossings. An odd cubic of this shape has one local max and one local min, sitting near $x=\\pm 1$.",
                    D(r"p'(x)=3x^{2}-4"),
                    D(r"x=\pm\frac{2}{\sqrt{3}}"),
                    D(rf"\text{{turning points in window}}={n_t}"),
                    close(False, f"There are {n_t} turning points, not $3$"),
                ]),
                lambda: n_t == 3,
            ),
        ]
        overview = (
            f"Graph stem: $p(x)=x^{{3}}-4x$ (odd) vs dashed $y=x$; "
            f"{n_z} zeros, {n_m} meetings, intercept $0$."
        )
    else:
        p = expand((x ** 2 - 1) ** 2)
        q = Rational(1)
        xmin, xmax, ymin, ymax = -2, 2, -1, 10
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid polynomial; dashed mark",
            second=q,
        )
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        n_t = n_turns(p, xmin, xmax)
        p0 = int(ev(p, 0))
        ctx = (
            "The figure shows a polynomial (solid) and a constant dashed companion. "
            "No algebraic formula is printed. Read the ticks: both ends, distinct axis "
            f"meetings, intercept sign, oddness, and meetings with the dashed mark. {TAIL}"
        )
        claims = [
            C(
                "As $x\\to+\\infty$ and as $x\\to-\\infty$, the solid graph tends to $+\\infty$ in both directions.",
                True,
                pack("A", True, [
                    "Both edges of the window sit well above the axis (height $9$ at $x=\\pm 2$), and the curve is rising as it leaves on each side. That is even-degree behaviour with a positive leading coefficient. Reconstructing from the two touches at $\\pm 1$ and intercept $1$ gives a monic square of a quadratic.",
                    D(r"p(x)=(x^{2}-1)^{2}"),
                    D(r"p(x)=x^{4}-2x^{2}+1"),
                    D(r"\lim_{|x|\to\infty}p(x)=+\infty"),
                    close(True, "Both ends rise"),
                ]),
                lambda: right_up(p) and left_up(p),
            ),
            C(
                "The solid graph meets the horizontal axis at exactly two distinct points in the window.",
                True,
                pack("B", True, [
                    "Each meeting with the axis is a touch, not a cut: the curve flattens at $x=-1$ and again at $x=1$, and it does not return to height $0$ anywhere else in the window (the intercept is $+1$).",
                    D(r"p(x)=(x-1)^{2}(x+1)^{2}"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    D(r"p(0)=1\\neq 0"),
                    close(True, "Two distinct axis meetings, both tangencies"),
                ]),
                lambda: n_z == 2,
            ),
            C(
                "The solid graph is that of an odd function.",
                False,
                pack("C", False, [
                    "An odd graph cannot live entirely on one side of the horizontal axis, and it cannot have a positive intercept. The solid curve is mirror-symmetric across the vertical axis — that is evenness, the opposite of oddness.",
                    D(r"p(-x)=(x^{2}-1)^{2}=p(x)"),
                    D(rf"p(0)={p0}>0"),
                    close(False, "The figure is even, not odd"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "Reading the vertical axis, the $y$-intercept of the solid graph is negative.",
                False,
                pack("D", False, [
                    "The solid curve cuts the vertical axis above the origin, at height $1$ on the ticks. That height is also the dashed mark, so the two graphs touch at the intercept.",
                    D(rf"p(0)={p0}"),
                    D(r"p(0)=(0-1)^{2}(0+1)^{2}=1"),
                    close(False, "The intercept is positive, not negative"),
                ]),
                lambda: p0 < 0,
            ),
            C(
                "The solid curve meets the dashed mark at exactly two distinct points in the plotted window.",
                False,
                pack("E", False, [
                    "The dashed mark is the horizontal through height $1$. One meeting is the intercept (a touch at the local max). Two further meetings sit at $x=\\pm\\sqrt{2}$, still inside the window.",
                    D(r"p(x)-1=x^{2}(x^{2}-2)"),
                    D(r"x=0,\ \pm\sqrt{2}"),
                    D(rf"\text{{meetings in window}}={n_m}"),
                    close(False, f"There are {n_m} distinct meetings, not $2$"),
                ]),
                lambda: n_m == 2,
            ),
        ]
        overview = (
            f"Graph stem: $p(x)=(x^{{2}}-1)^{{2}}$ vs dashed $y=1$; "
            f"{n_z} zeros, {n_m} meetings, even, intercept $1$."
        )
    return TaskSpec(ctx, claims, overview, "graph", TITLES["graph"][variant], figure=fig)


# ---------------------------------------------------------------------------
# Table
# ---------------------------------------------------------------------------


def build_table(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand((x + 1) * (x - 1) * (x - 2))
        xs = [-2, -1, 0, 1, 2, 3]
        opener = (
            "An unknown polynomial is sampled at equally spaced integers (table). "
            "No closed form and no difference columns are supplied. Diagnose degree from "
            f"differences you compute, then apply the factor test. {TAIL}"
        )
        # 2 true
        ys = [int(ev(p, v)) for v in xs]
        layers = diff_layers(ys)
        d3 = layers[3]
        claims = [
            C(
                "The third differences of the samples are constant, so a cubic with leading coefficient $1$ is consistent with every listed column.",
                True,
                pack("A", True, [
                    "Finite differences of unit-spaced samples lose one degree per pass; the first constant layer is the degree, and that constant equals $3!$ times the leading coefficient. Start from the raw row.",
                    D(layer_tex(ys)),
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"\Delta_{3}:\ " + layer_tex(d3)),
                    close(True, r"Constant third differences $6=3!\cdot 1$ diagnose a monic cubic"),
                ]),
                lambda: len(set(d3)) == 1 and d3[0] == 6,
            ),
            C(
                "The factor $x$ divides the unknown polynomial, because the table records a zero in the $x=0$ column.",
                False,
                pack("B", False, [
                    "The factor theorem says $x-r$ divides $p$ precisely when $p(r)=0$. Read the $x=0$ column rather than assuming a root at the origin.",
                    D(r"p(0)=2"),
                    D(r"2\neq 0"),
                    close(False, "The constant term is $2$, so $x$ is not a factor"),
                ]),
                lambda: ys[xs.index(0)] == 0,
            ),
            C(
                "The second differences are already constant, so a quadratic interpolant fits every listed column.",
                False,
                pack("C", False, [
                    "A quadratic would freeze at the second difference layer. Compute that layer from the table.",
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"-10,\ -4,\ 2,\ 8"),
                    close(False, "Second differences still move, so the degree is not $2$"),
                ]),
                lambda: len(set(layers[2])) == 1,
            ),
            C(
                "The factor $x-1$ divides the unknown polynomial.",
                True,
                pack("D", True, [
                    "The factor theorem is a table-lookup: $x-1$ divides $p$ if and only if the $x=1$ column is $0$.",
                    D(r"p(1)=0"),
                    D(r"p(x)=(x+1)(x-1)(x-2)"),
                    close(True, "The $x=1$ sample vanishes, so $x-1$ is a factor"),
                ]),
                lambda: ys[xs.index(1)] == 0,
            ),
            C(
                "Any polynomial that reproduces the six samples must have degree exactly $3$.",
                False,
                pack("E", False, [
                    "Differences diagnose a minimal degree. The same six nodes also lie on infinitely many higher-degree polynomials: add any multiple of the product of all six $(x-r)$ factors.",
                    D(r"r(x)=p(x)+c\,x(x+2)(x+1)(x-1)(x-2)(x-3)"),
                    D(r"r(x)=c x^{6}+\cdots\quad (c\neq 0)"),
                    close(False, "The samples force degree at least $3$, not exactly $3$"),
                ]),
                lambda: False,
            ),
        ]
        overview = f"Table stem: samples of $p(x)={L(p)}$; $\\Delta_3=6$; factors $x\\pm 1$ and $x-2$."
    elif variant == 1:
        p = expand((x - 2) * (x + 1))
        xs = [-2, -1, 0, 1, 2, 3]
        opener = (
            "Laboratory readings of an unknown polynomial appear in the table (unit spacing). "
            "No closed form and no difference columns are supplied. Recover degree, factors, "
            f"and the next sample from the raw values alone. {TAIL}"
        )
        ys = [int(ev(p, v)) for v in xs]
        layers = diff_layers(ys)
        nxt = next_sample(ys)
        claims = [
            C(
                "The second differences are constantly $2$, so a quadratic with leading coefficient $1$ fits every listed column.",
                True,
                pack("A", True, [
                    "Compute differences from the raw row until a layer freezes. For unit spacing the second difference of a quadratic $ax^{2}+\\cdots$ equals $2a$.",
                    D(layer_tex(ys)),
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"2a=2\\Rightarrow a=1"),
                    close(True, "Constant second differences $2$ diagnose a monic quadratic"),
                ]),
                lambda: len(set(layers[2])) == 1 and layers[2][0] == 2,
            ),
            C(
                "The factor $x+1$ divides the unknown polynomial.",
                True,
                pack("B", True, [
                    "Apply the factor theorem to the $x=-1$ column.",
                    D(r"p(-1)=0"),
                    D(r"x-(-1)=x+1"),
                    close(True, "The sample at $-1$ vanishes, so $x+1$ is a factor"),
                ]),
                lambda: ys[xs.index(-1)] == 0,
            ),
            C(
                "The factor $x-2$ divides the unknown polynomial.",
                True,
                pack("C", True, [
                    "The same test at $x=2$.",
                    D(r"p(2)=0"),
                    D(r"p(x)=(x-2)(x+1)"),
                    close(True, "The sample at $2$ vanishes, so $x-2$ is a factor"),
                ]),
                lambda: ys[xs.index(2)] == 0,
            ),
            C(
                "The first differences are not constant, so the samples cannot come from a linear polynomial.",
                True,
                pack("D", True, [
                    "A linear model would freeze at the first difference layer. Read that layer from the table.",
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"-4,\ -2,\ 0,\ 2,\ 4"),
                    close(True, "First differences still move, so the degree is at least $2$"),
                ]),
                lambda: len(set(layers[1])) > 1,
            ),
            C(
                "If the same second-difference pattern continues, the next sample (at $x=4$) equals $10$.",
                True,
                pack("E", True, [
                    "Newton's forward step: the constant second difference $2$ updates the last first difference, which then updates the last sample.",
                    D(r"\Delta_{2}=2"),
                    D(r"\Delta_{1}^{\mathrm{next}}=4+2=6"),
                    D(r"p(4)=4+6=10"),
                    D(r"p(4)=(4-2)(4+1)=10"),
                    close(True, "The extrapolated value is $10$"),
                ]),
                lambda: nxt == 10 and int(ev(p, 4)) == 10,
            ),
        ]
        overview = f"Table stem: samples of $p(x)={L(p)}$; $\\Delta_2=2$; $p(4)=10$."
    else:
        p = expand((x ** 2 - 1) ** 2)
        xs = [-2, -1, 0, 1, 2]
        opener = (
            "Five equally spaced samples of an unknown polynomial are tabulated. "
            "No closed form and no difference columns are supplied. Decide degree and "
            f"factors from the raw values. {TAIL}"
        )
        ys = [int(ev(p, v)) for v in xs]
        layers = diff_layers(ys)
        claims = [
            C(
                "The third differences are not constant, so a cubic interpolant cannot fit all five samples.",
                True,
                pack("A", True, [
                    "A cubic would freeze at the third difference layer. Compute down from the raw row.",
                    D(layer_tex(ys)),
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
                    close(True, "Third differences still change sign, so the degree is not $3$"),
                ]),
                lambda: len(set(layers[3])) > 1,
            ),
            C(
                "The factor $x-1$ divides the unknown polynomial.",
                True,
                pack("B", True, [
                    "Read the $x=1$ column and apply the factor theorem.",
                    D(r"p(1)=0"),
                    close(True, "The sample at $1$ vanishes, so $x-1$ is a factor"),
                ]),
                lambda: ys[xs.index(1)] == 0,
            ),
            C(
                "The factor $x+1$ divides the unknown polynomial.",
                True,
                pack("C", True, [
                    "The same test at $x=-1$.",
                    D(r"p(-1)=0"),
                    D(r"p(x)=(x-1)^{2}(x+1)^{2}"),
                    close(True, "The sample at $-1$ vanishes, so $x+1$ is a factor"),
                ]),
                lambda: ys[xs.index(-1)] == 0,
            ),
            C(
                "The first differences are constant, so the samples come from a linear polynomial.",
                False,
                pack("D", False, [
                    "Constant first differences are the signature of a line. Compute them.",
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"-9,\ 1,\ -1,\ 9"),
                    close(False, "First differences are not constant"),
                ]),
                lambda: len(set(layers[1])) == 1,
            ),
            C(
                "The factor $x$ divides the unknown polynomial, because the middle column sits at the origin of the $x$-row.",
                False,
                pack("E", False, [
                    "The middle $x$-value is $0$, but the factor theorem asks for the $p$-value there, not the $x$-label.",
                    D(r"p(0)=1"),
                    D(r"1\neq 0"),
                    close(False, "The intercept sample is $1$, so $x$ is not a factor"),
                ]),
                lambda: ys[xs.index(0)] == 0,
            ),
        ]
        overview = f"Table stem: samples of $p(x)={L(p)}$; not cubic; factors $x\\pm 1$."
    return TaskSpec(
        opener, claims, overview, "table", TITLES["table"][variant],
        tables_markdown=value_table(xs, ys),
    )


# ---------------------------------------------------------------------------
# Applied
# ---------------------------------------------------------------------------


def build_applied(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand(x * (x - 2) * (x - 3))
        xs = [0, 1, 2, 3, 4]
        ys = [int(ev(p, v)) for v in xs]
        layers = diff_layers(ys)
        fig = make_fig(
            p, 0, 4, -2, 9,
            "Recorded imbalance",
            xlabel="t (h)",
            ylabel="litres",
        )
        ctx = (
            "A canal lock records signed water imbalance (litres relative to a datum) "
            "at hourly marks $t=0,1,2,3,4$. The table and figure are the only data; "
            f"no closed-form model is issued. {TAIL}"
        )
        claims = [
            C(
                "The imbalance is zero at exactly three of the recorded hours.",
                True,
                pack("A", True, [
                    "Zero imbalance means a tabulated entry $0$. Read the $h(t)$ row: the ledger vanishes at $t=0$, $t=2$ and $t=3$, and at no other recorded hour.",
                    D(r"h(0)=0,\quad h(2)=0,\quad h(3)=0"),
                    D(r"h(1)=2,\quad h(4)=8"),
                    close(True, "Three recorded zeros, and only three"),
                ]),
                lambda: sum(1 for y in ys if y == 0) == 3,
            ),
            C(
                "The opening imbalance (at $t=0$) is zero.",
                True,
                pack("B", True, [
                    "The first column is the opening reading. It is the intercept of the model as well as the first tabulated height.",
                    D(r"h(0)=0"),
                    close(True, "The lock starts on the datum"),
                ]),
                lambda: ys[0] == 0,
            ),
            C(
                "The third differences of the hourly samples are constant, so a cubic model is consistent with the ledger.",
                True,
                pack("C", True, [
                    "Compute differences from the raw litre row. Five samples produce two third differences; they agree.",
                    D(layer_tex(ys)),
                    D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
                    close(True, r"Constant $\Delta_3=6$ matches a monic cubic"),
                ]),
                lambda: len(set(layers[3])) == 1,
            ),
            C(
                "The factor $t-1$ divides the underlying polynomial, because hour $1$ is recorded in the table.",
                False,
                pack("D", False, [
                    "Being a tabulated abscissa is not the factor test. The factor $t-1$ divides the model only if the imbalance at $t=1$ is $0$.",
                    D(r"h(1)=2"),
                    D(r"2\neq 0"),
                    close(False, "Hour $1$ is off the datum, so $t-1$ is not a factor"),
                ]),
                lambda: ys[xs.index(1)] == 0,
            ),
            C(
                "A quadratic model is compatible with every listed hour.",
                False,
                pack("E", False, [
                    "A quadratic would freeze at the second difference layer.",
                    D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                    D(r"-4,\ 2,\ 8"),
                    close(False, "Second differences still move, so a quadratic cannot fit"),
                ]),
                lambda: len(set(layers[2])) == 1,
            ),
        ]
        return TaskSpec(
            ctx, claims,
            f"Applied stem: lock ledger of $h(t)={L(p)}$; three recorded zeros; cubic $\\Delta_3$.",
            "applied", TITLES["applied"][variant],
            figure=fig, tables_markdown=value_table(xs, ys, "t", "h(t)"),
        )
    if variant == 1:
        p = expand(-(x + 1) * (x - 1) * (x - 2))
        q = Rational(-2)
        xmin, xmax, ymin, ymax = -2, 3, -9, 13
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid: camber; dashed: design mark",
            xlabel="t",
            ylabel="camber",
            second=q,
        )
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        n_t = n_turns(p, xmin, xmax)
        p0 = int(ev(p, 0))
        ctx = (
            "A surveyor plots a beam’s signed camber (solid) against a constant dashed "
            "design mark. No formula is printed. Read the ticks for zeros, intercept sign, "
            f"ends, oddness, and meetings with the design mark. {TAIL}"
        )
        claims = [
            C(
                "As $t\\to+\\infty$ the camber tends to $+\\infty$.",
                False,
                pack("A", False, [
                    "The right of the window already shows the solid curve falling through the last crossing. Reconstructing from the three simple zeros at $-1$, $1$, $2$ with that downward right end forces a negative leading coefficient.",
                    D(r"c(t)=-(t+1)(t-1)(t-2)"),
                    D(r"c(t)=-t^{3}+2t^{2}+t-2"),
                    D(r"\lim_{t\to+\infty}c(t)=-\infty"),
                    close(False, "The far-right camber falls, not rises"),
                ]),
                lambda: right_up(p),
            ),
            C(
                "The camber is zero at exactly three distinct times in the plotted window.",
                True,
                pack("B", True, [
                    "Count distinct axis meetings from the ticks: one left of the origin and two to its right, all simple crossings.",
                    D(r"c(t)=-(t+1)(t-1)(t-2)"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    close(True, "Three distinct zero-camber times are visible"),
                ]),
                lambda: n_z == 3,
            ),
            C(
                "At $t=0$ the recorded camber is positive.",
                False,
                pack("C", False, [
                    "The intercept is the height at $t=0$, where the solid curve cuts the vertical axis. That meeting sits below the origin, coinciding with the dashed design mark.",
                    D(rf"c(0)={p0}"),
                    D(r"c(0)=-2"),
                    close(False, "The opening camber is negative"),
                ]),
                lambda: p0 > 0,
            ),
            C(
                "The camber graph is that of an odd function of $t$.",
                False,
                pack("D", False, [
                    "Oddness would require $c(0)=0$ and half-turn symmetry about the origin. The intercept is $-2$, and the three zeros $-1,1,2$ are not symmetric about $0$.",
                    D(rf"c(0)={p0}\\neq 0"),
                    D(r"c(1)=0,\quad c(-1)=0,\quad c(2)=0"),
                    close(False, "The figure is not origin-symmetric"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "The solid camber meets the dashed design mark at exactly one point in the window.",
                False,
                pack("E", False, [
                    "The dashed mark is the horizontal through the intercept height $-2$. Meetings solve $c(t)=-2$. One meeting is at $t=0$; two further meetings lie inside the window.",
                    D(r"c(t)+2=-t(t^{2}-2t-1)"),
                    D(rf"\text{{meetings in window}}={n_m}"),
                    close(False, f"There are {n_m} meetings with the design mark, not $1$"),
                ]),
                lambda: n_m == 1,
            ),
        ]
        return TaskSpec(
            ctx, claims,
            f"Applied stem: camber $c(t)={L(p)}$ vs dashed $y=-2$; {n_z} zeros, {n_m} meetings, {n_t} turns.",
            "applied", TITLES["applied"][variant], figure=fig,
        )
    # variant 2 — cubic ledger (keep 4 truths)
    p = expand(x * (x - 2) * (x - 4))
    xs = [0, 1, 2, 3, 4, 5]
    ys = [int(ev(p, v)) for v in xs]
    layers = diff_layers(ys)
    ctx = (
        "A warehouse logs signed stock deviation (units above or below a target) at "
        "closing on days $n=0,1,2,3,4,5$. The table is the only source; no closed form "
        f"is issued. {TAIL}"
    )
    claims = [
        C(
            "The third differences are constantly $6$, so a cubic with leading coefficient $1$ is consistent with the ledger.",
            True,
            pack("A", True, [
                "Compute differences from the raw deviation row until a layer freezes. For a cubic $an^{3}+\\cdots$ on unit spacing the third difference equals $6a$.",
                D(layer_tex(ys)),
                D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
                D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
                close(True, r"Constant third differences $6=3!\cdot 1$ diagnose a monic cubic"),
            ]),
            lambda: len(set(layers[3])) == 1 and layers[3][0] == 6,
        ),
        C(
            "The stock deviation is zero on exactly three of the tabulated days.",
            True,
            pack("B", True, [
                "Read the zeros of the ledger: the deviation vanishes on day $0$, day $2$ and day $4$.",
                D(r"s(0)=0,\quad s(2)=0,\quad s(4)=0"),
                D(r"s(1)=3,\quad s(3)=-3,\quad s(5)=15"),
                close(True, "Exactly three recorded zeros"),
            ]),
            lambda: sum(1 for y in ys if y == 0) == 3,
        ),
        C(
            "The factor $n-2$ divides the underlying polynomial.",
            True,
            pack("C", True, [
                "The factor theorem at day $2$: $n-2$ divides the model if and only if that column is $0$.",
                D(r"s(2)=0"),
                D(r"s(n)=n(n-2)(n-4)"),
                close(True, "Day $2$ is on target, so $n-2$ is a factor"),
            ]),
            lambda: ys[xs.index(2)] == 0,
        ),
        C(
            "The opening deviation (day $0$) is zero.",
            True,
            pack("D", True, [
                "The first column is the opening reading, equivalently the intercept of the cubic.",
                D(r"s(0)=0"),
                D(r"s(n)=n(n-2)(n-4)"),
                close(True, "The warehouse opens on target"),
            ]),
            lambda: ys[0] == 0,
        ),
        C(
            "A quadratic model is compatible with every listed day.",
            False,
            pack("E", False, [
                "A quadratic would freeze at the second difference layer. Compute that layer from the ledger.",
                D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
                D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
                close(False, "Second differences still move, so the ledger is not quadratic"),
            ]),
            lambda: len(set(layers[2])) == 1,
        ),
    ]
    return TaskSpec(
        ctx, claims,
        f"Applied stem: stock $s(n)={L(p)}$; zeros at $0,2,4$; cubic $\\Delta_3=6$.",
        "applied", TITLES["applied"][variant],
        tables_markdown=value_table(xs, ys, "n", "s(n)"),
    )


# ---------------------------------------------------------------------------
# Symbolic
# ---------------------------------------------------------------------------


def build_symbolic(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand(x ** 2 - 1)
        q = expand(x ** 3 - x)
        qp = expand(q.subs(x, p))
        pq = expand(p.subs(x, q))
        ctx = (
            f"Two polynomials are given by $p(x)={L(p)}$ and $q(x)={L(q)}$. "
            f"Work with shared roots, parity, and nested highest powers. {TAIL}"
        )
        claims = [
            C(
                "Every real root of $p$ is also a root of $q$.",
                True,
                pack("A", True, [
                    "The roots of $p$ are the solutions of $x^{2}=1$. Substitute each into $q$, or factor $q$ and look for $p$ as a block.",
                    D(r"p(x)=(x-1)(x+1)"),
                    D(r"q(x)=x(x-1)(x+1)=x\,p(x)"),
                    D(r"q(1)=0,\quad q(-1)=0"),
                    close(True, "Both roots of $p$ lie among the roots of $q$"),
                ]),
                lambda: all(ev(q, r) == 0 for r in distinct_real_zeros(p)),
            ),
            C(
                "$q$ is an odd function.",
                True,
                pack("B", True, [
                    "Only odd powers appear, so replacing $x$ by $-x$ flips the sign of every term.",
                    D(r"q(-x)=-x^{3}+x=-q(x)"),
                    D(r"q(2)=8-2=6,\quad q(-2)=-6"),
                    close(True, "The identity $q(-x)=-q(x)$ holds"),
                ]),
                lambda: is_odd(q),
            ),
            C(
                "$p$ is an even function.",
                True,
                pack("C", True, [
                    "Only even powers appear.",
                    D(r"p(-x)=x^{2}-1=p(x)"),
                    D(r"p(2)=p(-2)=3"),
                    close(True, "The identity $p(-x)=p(x)$ holds"),
                ]),
                lambda: is_even(p),
            ),
            C(
                "The highest power in $p(q(x))$ is $x^{6}$.",
                True,
                pack("D", True, [
                    "Nesting multiplies degrees: the outer degree $2$ hits the inner highest power $x^{3}$.",
                    D(r"2\cdot 3=6"),
                    D(rf"p(q(x))={L(pq)}"),
                    close(True, "The nested highest power is $x^{6}$"),
                ]),
                lambda: deg(pq) == 6,
            ),
            C(
                "The highest power in $q(p(x))$ is $x^{5}$.",
                False,
                pack("E", False, [
                    "The same product of degrees runs in the other order: outer degree $3$ times inner degree $2$ is again $6$, not $5$. Adding the degrees would describe a product $q\\,p$, not a nesting.",
                    D(r"3\cdot 2=6"),
                    D(rf"q(p(x))={L(qp)}"),
                    close(False, "The nested highest power is $x^{6}$, not $x^{5}$"),
                ]),
                lambda: deg(qp) == 5,
            ),
        ]
        topic = f"$p={L(p)}$, $q={L(q)}$; $q=x p$; nested degree $6$."
    elif variant == 1:
        f = expand(x ** 3 - x)
        g = expand(x ** 2 - 4)
        fg = expand(f.subs(x, g))
        ctx = (
            f"Two polynomials are given by $f(x)={L(f)}$ and $g(x)={L(g)}$. "
            f"Use the remainder theorem, parity, and nested degree. {TAIL}"
        )
        claims = [
            C(
                "The remainder when $f$ is divided by $x-1$ is $0$.",
                True,
                pack("A", True, [
                    "The remainder theorem says that the remainder on division by $x-1$ is the number $f(1)$.",
                    D(r"f(1)=1-1=0"),
                    D(r"f(x)=x(x-1)(x+1)"),
                    close(True, "The remainder is $0$, so $x-1$ divides $f$"),
                ]),
                lambda: ev(f, 1) == 0,
            ),
            C(
                "The remainder when $g$ is divided by $x-1$ is $0$.",
                False,
                pack("B", False, [
                    "The same theorem at the same abscissa, now for $g$.",
                    D(r"g(1)=1-4=-3"),
                    D(r"-3\neq 0"),
                    close(False, "The remainder is $-3$, not $0$"),
                ]),
                lambda: ev(g, 1) == 0,
            ),
            C(
                "The sum $f+g$ is an even function.",
                False,
                pack("C", False, [
                    "Even plus odd is even only if the odd summand is zero. Here $f$ is odd and $g$ is even, so $f+g$ inherits the odd part of $f$.",
                    D(rf"f(x)+g(x)={L(f+g)}"),
                    D(r"(f+g)(-x)=-x^{3}+x^{2}+x-4"),
                    D(r"(f+g)(-x)\\neq f(x)+g(x)"),
                    close(False, "The sum is neither even nor odd"),
                ]),
                lambda: is_even(f + g),
            ),
            C(
                "The highest power in $f(g(x))$ is $x^{6}$.",
                True,
                pack("D", True, [
                    "Nesting multiplies degrees: outer $3$ times inner $2$.",
                    D(r"3\cdot 2=6"),
                    D(rf"f(g(x))={L(fg)}"),
                    close(True, "The nested highest power is $x^{6}$"),
                ]),
                lambda: deg(fg) == 6,
            ),
            C(
                "$f$ and $g$ share a common linear factor over the reals.",
                False,
                pack("E", False, [
                    "List the real linear factors of each map and compare.",
                    D(r"f(x)=x(x-1)(x+1)"),
                    D(r"g(x)=(x-2)(x+2)"),
                    D(r"\{-1,0,1\}\\cap\\{-2,2\}=\\emptyset"),
                    close(False, "The two factorisations are disjoint"),
                ]),
                lambda: bool(set(distinct_real_zeros(f)) & set(distinct_real_zeros(g))),
            ),
        ]
        topic = f"$f={L(f)}$, $g={L(g)}$; remainder $f(1)=0$, $g(1)=-3$; nested degree $6$."
    else:
        p = expand(x ** 3 - 4 * x)
        q = expand(x ** 2)
        pq = expand(p.subs(x, q))
        ctx = (
            f"A cubic is given by $p(x)={L(p)}$. Test parity, the factor theorem, "
            f"Vieta, nested degree, and the distinct-zero count. {TAIL}"
        )
        rsum = sum(distinct_real_zeros(p))
        claims = [
            C(
                "$p$ is an odd function.",
                True,
                pack("A", True, [
                    "Only odd powers appear.",
                    D(r"p(-x)=-x^{3}+4x=-p(x)"),
                    D(r"p(1)=-3,\quad p(-1)=3"),
                    close(True, "The identity $p(-x)=-p(x)$ holds"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "The factor $x-2$ divides $p$.",
                True,
                pack("B", True, [
                    "The factor theorem: evaluate at $2$.",
                    D(r"p(2)=8-8=0"),
                    D(r"p(x)=x(x-2)(x+2)"),
                    close(True, "$p(2)=0$, so $x-2$ is a factor"),
                ]),
                lambda: ev(p, 2) == 0,
            ),
            C(
                "By Vieta, the multiplicity-weighted sum of real roots of $p$ is $0$.",
                True,
                pack("C", True, [
                    "For a monic cubic $x^{3}+Ax^{2}+Bx+C$ the root sum is $-A$. Here there is no $x^{2}$ term, so $A=0$. Directly: $-2+0+2=0$.",
                    D(r"p(x)=x^{3}+0\cdot x^{2}-4x+0"),
                    D(r"-2+0+2=0"),
                    close(True, "The weighted root sum is $0$"),
                ]),
                lambda: rsum == 0,
            ),
            C(
                "The highest power in $p(x^{2})$ is $x^{6}$.",
                True,
                pack("D", True, [
                    "Substitute $u=x^{2}$ into a cubic: the outer degree $3$ hits $x^{2}$, producing degree $6$.",
                    D(r"3\cdot 2=6"),
                    D(rf"p(x^{2})={L(pq)}"),
                    close(True, "The nested highest power is $x^{6}$"),
                ]),
                lambda: deg(pq) == 6,
            ),
            C(
                "$p$ has three distinct real zeros.",
                True,
                pack("E", True, [
                    "Factor completely over the reals and list distinct abscissas.",
                    D(r"p(x)=x(x-2)(x+2)"),
                    D(r"x=-2,\ 0,\ 2"),
                    close(True, "Three distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 3,
            ),
        ]
        topic = f"$p={L(p)}$; odd; factors $x,x\\pm 2$; $p(x^{2})$ of degree $6$."
    return TaskSpec(ctx, claims, f"Symbolic stem: {topic}", "symbolic", TITLES["symbolic"][variant])


# ---------------------------------------------------------------------------
# Parametric
# ---------------------------------------------------------------------------


def build_parametric(variant: int) -> TaskSpec:
    if variant == 0:
        gk = x ** 3 - k * x
        ctx = (
            r"A one-parameter family is given by $g_{k}(x)=x^{3}-kx$. "
            f"Decide oddness, repeated roots, distinct-zero counts, and stationary points as $k$ varies. {TAIL}"
        )
        claims = [
            C(
                r"For every real $k$, $g_{k}$ is an odd function of $x$.",
                True,
                pack("A", True, [
                    "The parameter $k$ sits on an odd power. Replacing $x$ by $-x$ flips every term, independently of $k$.",
                    D(r"g_{k}(-x)=-x^{3}+kx=-g_{k}(x)"),
                    D(r"g_{k}(x)=x(x^{2}-k)"),
                    close(True, "Oddness holds for every real $k$"),
                ]),
                lambda: simplify(gk.subs(x, -x) + gk) == 0,
            ),
            C(
                r"If $k=1$, then $g_{k}$ has three distinct real zeros.",
                True,
                pack("B", True, [
                    "Substitute the named parameter and factor.",
                    D(r"g_{1}(x)=x^{3}-x=x(x-1)(x+1)"),
                    D(r"x=-1,\ 0,\ 1"),
                    close(True, "Three distinct real zeros when $k=1$"),
                ]),
                lambda: len(distinct_real_zeros(gk.subs(k, 1))) == 3,
            ),
            C(
                r"The value $k=0$ is exactly when $g_{k}$ has a repeated real root.",
                True,
                pack("C", True, [
                    "A repeated root occurs when $g_{k}$ and $g_{k}'$ share a root. Differentiating gives $g_{k}'(x)=3x^{2}-k$. The origin is always a root of $g_{k}$; it is a root of the derivative precisely when $k=0$, and then $g_{0}(x)=x^{3}$.",
                    D(r"g_{k}(0)=0"),
                    D(r"g_{k}'(x)=3x^{2}-k"),
                    D(r"g_{0}(x)=x^{3}"),
                    close(True, "A repeated root occurs if and only if $k=0$"),
                ]),
                lambda: len(distinct_real_zeros(gk.subs(k, 0))) == 1,
            ),
            C(
                r"If $k=4$, then $g_{k}(2)=0$.",
                True,
                pack("D", True, [
                    "Substitute both the parameter and the abscissa.",
                    D(r"g_{4}(2)=8-4\cdot 2=0"),
                    D(r"g_{4}(x)=x(x-2)(x+2)"),
                    close(True, "$x=2$ is a root when $k=4$"),
                ]),
                lambda: ev(gk.subs(k, 4), 2) == 0,
            ),
            C(
                r"If $k=3$, the stationary points of $g_{k}$ are at $x=\pm 1$.",
                True,
                pack("E", True, [
                    "Stationary points solve $g_{k}'(x)=0$.",
                    D(r"g_{k}'(x)=3x^{2}-k"),
                    D(r"3x^{2}-3=0\\Rightarrow x^{2}=1"),
                    D(r"x=\pm 1"),
                    close(True, "The stationary abscissas are $\\pm 1$ when $k=3$"),
                ]),
                lambda: set(solve(diff(gk.subs(k, 3), x), x)) == {-1, 1},
            ),
        ]
        overview = r"Parametric stem: $g_k(x)=x^{3}-kx$; always odd; repeat at $k=0$; $k=1$ three zeros."
    elif variant == 1:
        pa = expand((x - 1) ** 2 * (x - a))
        ctx = (
            r"A monic cubic family is given by $p_{a}(x)=(x-1)^{2}(x-a)$. "
            f"Track multiplicity, the derivative at the double root, and distinct-zero counts as $a$ moves. {TAIL}"
        )
        p1 = expand(pa.subs(a, 1))
        p2 = expand(pa.subs(a, 2))
        dp2 = diff(p2, x)
        claims = [
            C(
                r"If $a=1$, then $p_{a}$ has a root of multiplicity $3$.",
                True,
                pack("A", True, [
                    "When the sliding root lands on the double root, the two factors coalesce.",
                    D(r"p_{1}(x)=(x-1)^{2}(x-1)=(x-1)^{3}"),
                    D(rf"p_{1}(x)={L(p1)}"),
                    close(True, "A triple root at $x=1$"),
                ]),
                lambda: simplify(p1 - (x - 1) ** 3) == 0,
            ),
            C(
                r"If $a=2$, then $p_{a}'(1)=0$.",
                True,
                pack("B", True, [
                    "A root of multiplicity at least $2$ is automatically a root of the derivative. For $a=2$ the double root at $x=1$ survives.",
                    D(r"p_{2}(x)=(x-1)^{2}(x-2)"),
                    D(rf"p_{2}'(x)={L(dp2)}"),
                    D(rf"p_{2}'(1)={L(ev(dp2, 1))}"),
                    close(True, "The double root flattens the derivative at $x=1$"),
                ]),
                lambda: ev(dp2, 1) == 0,
            ),
            C(
                r"For every real $a$, $p_{a}$ is a monic cubic.",
                True,
                pack("C", True, [
                    "Expand the leading term: the product of three monic linear factors is monic of degree $3$, and $a$ never touches the $x^{3}$ coefficient.",
                    D(r"(x-1)^{2}(x-a)=x^{3}-(a+2)x^{2}+\cdots"),
                    D(r"\text{leading coefficient}=1"),
                    close(True, "Every member is monic of degree $3$"),
                ]),
                lambda: all(deg(expand(pa.subs(a, v))) == 3 and lead(expand(pa.subs(a, v))) == 1 for v in (-2, 0, 1, 2, 5)),
            ),
            C(
                r"If $a=2$, then $p_{a}$ has three distinct real zeros.",
                False,
                pack("D", False, [
                    "Distinct zeros ignore multiplicity. For $a=2$ the roots are $1$ (twice) and $2$ (once): two distinct abscissas, not three.",
                    D(r"p_{2}(x)=(x-1)^{2}(x-2)"),
                    D(r"\{1,2\}"),
                    close(False, "Only two distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p2)) == 3,
            ),
            C(
                r"If $a=0$, then $p_{a}$ is an odd function.",
                False,
                pack("E", False, [
                    "Substitute $a=0$ and test $p_{0}(-x)+p_{0}(x)$.",
                    D(r"p_{0}(x)=x(x-1)^{2}=x^{3}-2x^{2}+x"),
                    D(r"p_{0}(0)=0"),
                    D(r"p_{0}(-1)=-1-2-1=-4\\neq -p_{0}(1)=0"),
                    close(False, "An $x^{2}$ term destroys oddness"),
                ]),
                lambda: is_odd(expand(pa.subs(a, 0))),
            ),
        ]
        overview = r"Parametric stem: $p_a=(x-1)^{2}(x-a)$; $a=1$ triple; $a=2$ two distinct zeros."
    else:
        hk = expand(x ** 2 * (x - k))
        h2 = expand(hk.subs(k, 2))
        dh2 = diff(h2, x)
        ctx = (
            r"A monic cubic family is given by $h_{k}(x)=x^{2}(x-k)$. "
            f"The double root is pinned at the origin; the simple root slides with $k$. {TAIL}"
        )
        claims = [
            C(
                r"For every real $k$, $h_{k}$ is an odd function of $x$.",
                False,
                pack("A", False, [
                    "The double factor $x^{2}$ is even, but the sliding factor $x-k$ is not odd unless $k=0$. In general an $x^{2}$ term appears.",
                    D(r"h_{k}(x)=x^{3}-k x^{2}"),
                    D(r"h_{2}(x)=x^{3}-2x^{2}"),
                    D(r"h_{2}(-x)=-x^{3}-2x^{2}\\neq -h_{2}(x)"),
                    close(False, "Oddness fails as soon as $k\\neq 0$"),
                ]),
                lambda: all(is_odd(expand(hk.subs(k, v))) for v in (0, 1, 2)),
            ),
            C(
                r"If $k=2$, then $h_{k}$ has exactly two distinct real zeros.",
                True,
                pack("B", True, [
                    "Count distinct roots, not multiplicity. For $k=2$ the origin is a double root and $x=2$ is simple.",
                    D(r"h_{2}(x)=x^{2}(x-2)"),
                    D(r"\{0,2\}"),
                    close(True, "Two distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(h2)) == 2,
            ),
            C(
                r"If $k=2$, then $h_{k}'(0)\\neq 0$.",
                False,
                pack("C", False, [
                    "A double root forces the derivative to vanish there.",
                    D(rf"h_{{2}}'(x)={L(dh2)}"),
                    D(rf"h_{{2}}'(0)={L(ev(dh2, 0))}"),
                    close(False, "The double root at the origin flattens $h_{2}'$"),
                ]),
                lambda: ev(dh2, 0) != 0,
            ),
            C(
                r"If $k=2$, then as $x\\to+\\infty$, $h_{k}(x)\\to-\\infty$.",
                False,
                pack("D", False, [
                    "The family is monic of odd degree for every $k$: the leading term is $x^{3}$.",
                    D(r"h_{2}(x)=x^{3}-2x^{2}"),
                    D(r"\lim_{x\to+\infty}h_{2}(x)=+\infty"),
                    close(False, "The right end rises, not falls"),
                ]),
                lambda: not right_up(h2),
            ),
            C(
                r"If $k=2$, the $y$-intercept of $h_{k}$ equals $2$.",
                False,
                pack("E", False, [
                    "The intercept is $h_{k}(0)$. The double factor $x^{2}$ forces every member through the origin.",
                    D(r"h_{2}(0)=0"),
                    D(r"0\neq 2"),
                    close(False, "The intercept is $0$ for every $k$"),
                ]),
                lambda: ev(h2, 0) == 2,
            ),
        ]
        overview = r"Parametric stem: $h_k=x^{2}(x-k)$; $k=2$ has zeros $0,2$; intercept always $0$."
    return TaskSpec(ctx, claims, overview, "parametric", TITLES["parametric"][variant])


# ---------------------------------------------------------------------------
# Rebuild
# ---------------------------------------------------------------------------


def build_rebuild(variant: int) -> TaskSpec:
    if variant == 0:
        d, s = 1, -2
        p = expand((x - d) ** 2 * (x - s))
        ctx = (
            "A monic cubic touches the axis at $x=1$ and crosses at $x=-2$. "
            f"No expanded formula is given. Rebuild $p$ from that multiplicity pattern. {TAIL}"
        )
        dp = diff(p, x)
        claims = [
            C(
                rf"$p(x)={factored_tex([(d, 2), (s, 1)])}$.",
                True,
                pack("A", True, [
                    "A monic cubic is uniquely determined by a double root and a simple root: each linear factor is monic, and the double root supplies the squared factor.",
                    D(rf"p(x)={factored_tex([(d, 2), (s, 1)])}"),
                    D(rf"p(x)={L(p)}"),
                    D(r"p(1)=0,\quad p'(1)=0,\quad p(-2)=0"),
                    close(True, "The reconstruction is forced"),
                ]),
                lambda: simplify(p - expand((x - 1) ** 2 * (x + 2))) == 0,
            ),
            C(
                "The rebuilt cubic has three distinct real zeros.",
                False,
                pack("B", False, [
                    "Multiplicity total $3$ is not the same as three distinct abscissas. The double root and the simple root are two distinct points.",
                    D(r"\{1,-2\}"),
                    D(rf"p(x)={L(factor(p))}"),
                    close(False, "Only two distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 3,
            ),
            C(
                r"$p'(-2)=0$.",
                False,
                pack("C", False, [
                    "Only multiplicity at least $2$ forces a flat derivative. The root at $-2$ is simple.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(-2)={L(ev(dp, -2))}"),
                    close(False, "The simple root is a genuine crossing, with nonzero slope"),
                ]),
                lambda: ev(dp, -2) == 0,
            ),
            C(
                "$p$ is an odd function.",
                False,
                pack("D", False, [
                    "Oddness would require $p(0)=0$ and $p(-x)=-p(x)$. The rebuilt constant term is $2$.",
                    D(rf"p(0)={L(ev(p, 0))}"),
                    D(rf"p(x)={L(p)}"),
                    close(False, "A nonzero constant term kills oddness"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                r"$p(0)=-2$.",
                False,
                pack("E", False, [
                    "Evaluate the rebuilt product at the origin, or multiply the constant pieces of the factors.",
                    D(r"p(0)=(0-1)^{2}(0+2)=2"),
                    D(r"2\neq -2"),
                    close(False, "The intercept is $2$, not $-2$"),
                ]),
                lambda: ev(p, 0) == -2,
            ),
        ]
        overview = f"Rebuild stem: $p(x)={L(factor(p))}$; double at $1$, simple at $-2$."
    elif variant == 1:
        d, s = 2, -1
        p = expand((x - d) ** 2 * (x - s))
        dp = diff(p, x)
        wsum = 2 * d + s
        ctx = (
            "A monic cubic touches the axis at $x=2$ and crosses at $x=-1$. "
            f"Rebuild $p$ from that multiplicity pattern, then test $p'$ and Vieta. {TAIL}"
        )
        claims = [
            C(
                rf"$p(x)={factored_tex([(d, 2), (s, 1)])}$.",
                True,
                pack("A", True, [
                    "Monic normalisation plus the stated multiplicities pin the product down completely.",
                    D(rf"p(x)={factored_tex([(d, 2), (s, 1)])}"),
                    D(rf"p(x)={L(p)}"),
                    close(True, "The reconstruction is forced"),
                ]),
                lambda: simplify(p - expand((x - 2) ** 2 * (x + 1))) == 0,
            ),
            C(
                r"$p'(2)=0$.",
                True,
                pack("B", True, [
                    "A double root is a root of the derivative.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(2)={L(ev(dp, 2))}"),
                    close(True, "The touch at $x=2$ is flat"),
                ]),
                lambda: ev(dp, 2) == 0,
            ),
            C(
                r"$p'(-1)\\neq 0$.",
                True,
                pack("C", True, [
                    "The root at $-1$ is simple, so the crossing has nonzero slope.",
                    D(rf"p'(-1)={L(ev(dp, -1))}"),
                    D(r"9\neq 0"),
                    close(True, "The simple root is not a stationary point"),
                ]),
                lambda: ev(dp, -1) != 0,
            ),
            C(
                rf"The multiplicity-weighted root sum equals ${wsum}$, matching the Vieta coefficient of $x^{{2}}$.",
                True,
                pack("D", True, [
                    "Count the double root twice. For a monic cubic that sum equals minus the coefficient of $x^{2}$.",
                    D(rf"2\cdot 2+(-1)={wsum}"),
                    D(rf"p(x)={L(p)}"),
                    D(rf"-(-3)={wsum}"),
                    close(True, f"Weighted sum ${wsum}$ matches Vieta"),
                ]),
                lambda: wsum == -Poly(p, x).all_coeffs()[1],
            ),
            C(
                "The rebuilt cubic has three distinct real zeros.",
                False,
                pack("E", False, [
                    "Distinct abscissas: only $2$ and $-1$.",
                    D(r"\{2,-1\}"),
                    close(False, "Two distinct real zeros, not three"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 3,
            ),
        ]
        overview = f"Rebuild stem: $p(x)={L(factor(p))}$; $p'(2)=0$, $p'(-1)\\neq 0$; Vieta sum $3$."
    else:
        p = expand((x + 2) * (x - 1) * (x - 3))
        dp = diff(p, x)
        ctx = (
            "A monic cubic has simple zeros at $x=-2$, $x=1$ and $x=3$. "
            f"Rebuild $p$ from those three simple roots, then test Vieta, parity, and $p'$. {TAIL}"
        )
        claims = [
            C(
                rf"$p(x)={factored_tex([(-2, 1), (1, 1), (3, 1)])}$.",
                True,
                pack("A", True, [
                    "Three distinct simple zeros and a monic leading term force the product of the three monic linear factors.",
                    D(rf"p(x)={factored_tex([(-2, 1), (1, 1), (3, 1)])}"),
                    D(rf"p(x)={L(p)}"),
                    close(True, "The reconstruction is forced"),
                ]),
                lambda: simplify(p - expand((x + 2) * (x - 1) * (x - 3))) == 0,
            ),
            C(
                "By Vieta, the sum of the three roots equals $2$.",
                True,
                pack("B", True, [
                    "For a monic cubic the root sum equals minus the coefficient of $x^{2}$. Directly: $-2+1+3=2$.",
                    D(r"-2+1+3=2"),
                    D(rf"p(x)={L(p)}"),
                    D(r"-(-2)=2"),
                    close(True, "The root sum is $2$"),
                ]),
                lambda: -2 + 1 + 3 == 2,
            ),
            C(
                r"$p(0)=-6$.",
                False,
                pack("C", False, [
                    "The constant term is the signed product of the roots, and also the intercept $p(0)$.",
                    D(r"p(0)=(2)(-1)(-3)=6"),
                    D(r"6\neq -6"),
                    close(False, "The intercept is $6$, not $-6$"),
                ]),
                lambda: ev(p, 0) == -6,
            ),
            C(
                "$p$ is an even function.",
                False,
                pack("D", False, [
                    "Evenness would require $p(-x)=p(x)$ and in particular a mirror-symmetric zero set. The zeros $-2,1,3$ are not symmetric about $0$.",
                    D(rf"p(-x)={L(expand(p.subs(x, -x)))}"),
                    D(rf"p(-x)\\neq p(x)"),
                    close(False, "The rebuilt cubic is not even"),
                ]),
                lambda: is_even(p),
            ),
            C(
                "The derivative $p'$ vanishes at each of the three zeros.",
                False,
                pack("E", False, [
                    "Each given root is simple, so each is a crossing rather than a touch. Check one of them.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(1)={L(ev(dp, 1))}"),
                    close(False, "Simple roots do not flatten $p'$"),
                ]),
                lambda: all(ev(dp, r) == 0 for r in (-2, 1, 3)),
            ),
        ]
        overview = f"Rebuild stem: $p(x)={L(factor(p))}$; Vieta sum $2$; intercept $6$."
    return TaskSpec(ctx, claims, overview, "rebuild", TITLES["rebuild"][variant])


# ---------------------------------------------------------------------------
# Nested
# ---------------------------------------------------------------------------


def build_nested(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand(x ** 2 - 1)
        q = expand(x - 2)
        qp = expand(q.subs(x, p))
        pq = expand(p.subs(x, q))
        ctx = (
            f"Inner map $p(x)={L(p)}$ feeds the outer affine map $q(x)={L(q)}$. "
            f"Compare $q(p(x))$ with $p(q(x))$ on degree, evaluation, and factors. {TAIL}"
        )
        claims = [
            C(
                r"The highest power in $q(p(x))$ is $x^{2}$.",
                True,
                pack("A", True, [
                    "An affine outer map has degree $1$, so it preserves the inner degree.",
                    D(r"1\cdot 2=2"),
                    D(rf"q(p(x))={L(qp)}"),
                    close(True, "The nested highest power is $x^{2}$"),
                ]),
                lambda: deg(qp) == 2,
            ),
            C(
                r"The highest power in $p(q(x))$ is $x^{3}$.",
                False,
                pack("B", False, [
                    "Now the outer map is quadratic and the inner map is affine of degree $1$, so the product of degrees is $2$, not $3$.",
                    D(r"2\cdot 1=2"),
                    D(rf"p(q(x))={L(pq)}"),
                    close(False, "The nested highest power is $x^{2}$, not $x^{3}$"),
                ]),
                lambda: deg(pq) == 3,
            ),
            C(
                r"$q(p(0))=p(q(0))$.",
                False,
                pack("C", False, [
                    "Evaluate inside-out in each order; nesting does not commute.",
                    D(r"p(0)=-1,\quad q(p(0))=q(-1)=-3"),
                    D(r"q(0)=-2,\quad p(q(0))=p(-2)=4-1=3"),
                    D(r"-3\neq 3"),
                    close(False, "The two nested values differ"),
                ]),
                lambda: ev(qp, 0) == ev(pq, 0),
            ),
            C(
                r"The factor $x-1$ divides $p(q(x))$.",
                True,
                pack("D", True, [
                    "The factor theorem at $x=1$: compute $p(q(1))$.",
                    D(r"q(1)=-1"),
                    D(r"p(q(1))=p(-1)=0"),
                    D(rf"p(q(x))={L(pq)}=(x-1)(x-3)"),
                    close(True, "$p(q(1))=0$, so $x-1$ divides the nesting"),
                ]),
                lambda: ev(pq, 1) == 0,
            ),
            C(
                r"$q(p(x))$ is an odd function.",
                False,
                pack("E", False, [
                    "The nesting $q(p(x))=x^{2}-3$ involves only even powers.",
                    D(rf"q(p(x))={L(qp)}"),
                    D(r"q(p(-x))=x^{2}-3=q(p(x))"),
                    close(False, "The nesting is even, not odd"),
                ]),
                lambda: is_odd(qp),
            ),
        ]
        overview = f"Nested stem: $q(p)={L(qp)}$, $p(q)={L(pq)}$; $(x-1)$ divides $p(q)$."
    elif variant == 1:
        p = expand(x ** 2 - 1)
        q = expand(x ** 2 + 1)
        qp = expand(q.subs(x, p))
        pq = expand(p.subs(x, q))
        ctx = (
            f"Two even maps $p(x)={L(p)}$ and $q(x)={L(q)}$ are nested both ways. "
            f"Track highest powers, sample values, real roots, and parity of the nestings. {TAIL}"
        )
        claims = [
            C(
                r"Both $q(p(x))$ and $p(q(x))$ have highest power $x^{4}$.",
                True,
                pack("A", True, [
                    "Each map has degree $2$, and $2\\cdot 2=4$ in either order. Leading coefficients are $1$, so neither nesting drops degree.",
                    D(r"2\cdot 2=4"),
                    D(rf"q(p(x))={L(qp)}"),
                    D(rf"p(q(x))={L(pq)}"),
                    close(True, "Both nestings are degree $4$"),
                ]),
                lambda: deg(qp) == 4 and deg(pq) == 4,
            ),
            C(
                r"$q(p(0))=2$.",
                True,
                pack("B", True, [
                    "Evaluate inside-out.",
                    D(r"p(0)=-1"),
                    D(r"q(-1)=1+1=2"),
                    close(True, "The nested value is $2$"),
                ]),
                lambda: ev(qp, 0) == 2,
            ),
            C(
                r"$p(q(0))=0$.",
                True,
                pack("C", True, [
                    "The other order, at the same input.",
                    D(r"q(0)=1"),
                    D(r"p(1)=1-1=0"),
                    close(True, "The nested value is $0$"),
                ]),
                lambda: ev(pq, 0) == 0,
            ),
            C(
                r"$q(p(x))$ has no real root.",
                True,
                pack("D", True, [
                    "The outer map $q(u)=u^{2}+1$ is at least $1$ for every real $u$, so it never vanishes, no matter what real values $p$ feeds it.",
                    D(r"q(u)=u^{2}+1\\ge 1"),
                    D(rf"q(p(x))={L(qp)}"),
                    D(r"x^{4}-2x^{2}+2=(x^{2}-1)^{2}+1\\ge 1"),
                    close(True, "The nesting stays at least $1$"),
                ]),
                lambda: len(distinct_real_zeros(qp)) == 0,
            ),
            C(
                "Both nestings are even functions.",
                True,
                pack("E", True, [
                    "An even inner map makes $p(-x)=p(x)$, so any outer function of $p$ is even. An even outer map composed with anything even in $x$ is even as well. Here both $p$ and $q$ are even, so both nestings are even.",
                    D(r"q(p(-x))=q(p(x))"),
                    D(r"p(q(-x))=p(q(x))"),
                    D(rf"q(p(x))={L(qp)}"),
                    close(True, "Both nestings involve only even powers"),
                ]),
                lambda: is_even(qp) and is_even(pq),
            ),
        ]
        overview = f"Nested stem: $q(p)={L(qp)}\\ge 1$; $p(q)={L(pq)}$; both even of degree $4$."
    else:
        p = expand(x - 1)
        q = expand(x ** 3 - x)
        qp = expand(q.subs(x, p))
        pq = expand(p.subs(x, q))
        ctx = (
            f"Inner shift $p(x)={L(p)}$ feeds the outer cubic $q(x)={L(q)}$. "
            f"Compare nested degrees, factors of $q(p(x))$, and whether the two nestings agree. {TAIL}"
        )
        claims = [
            C(
                r"Both $q(p(x))$ and $p(q(x))$ have highest power $x^{3}$.",
                True,
                pack("A", True, [
                    "Degree $3$ times degree $1$ is $3$ in either order.",
                    D(r"3\cdot 1=1\cdot 3=3"),
                    D(rf"q(p(x))={L(qp)}"),
                    D(rf"p(q(x))={L(pq)}"),
                    close(True, "Both nestings are cubic"),
                ]),
                lambda: deg(qp) == 3 and deg(pq) == 3,
            ),
            C(
                r"The factor $x-1$ divides $q(p(x))$.",
                True,
                pack("B", True, [
                    "Evaluate the nesting at $x=1$. The inner shift vanishes there, and $q(0)=0$.",
                    D(r"p(1)=0"),
                    D(r"q(p(1))=q(0)=0"),
                    D(rf"q(p(x))={L(factor(qp))}"),
                    close(True, "$q(p(1))=0$, so $x-1$ is a factor"),
                ]),
                lambda: ev(qp, 1) == 0,
            ),
            C(
                r"The factor $x$ divides $q(p(x))$.",
                True,
                pack("C", True, [
                    "The factor theorem at the origin: $q(p(0))=q(-1)$.",
                    D(r"p(0)=-1"),
                    D(r"q(-1)=-1+1=0"),
                    D(rf"q(p(x))={L(factor(qp))}"),
                    close(True, "$q(p(0))=0$, so $x$ is a factor"),
                ]),
                lambda: ev(qp, 0) == 0,
            ),
            C(
                r"$q(p(x))=p(q(x))$ as an identity of polynomials.",
                False,
                pack("D", False, [
                    "Equal degree does not force the nestings to coincide. Compare them at $x=0$, or expand both.",
                    D(rf"q(p(x))={L(qp)}"),
                    D(rf"p(q(x))={L(pq)}"),
                    D(r"q(p(0))=0,\quad p(q(0))=-1"),
                    close(False, "The two nestings differ already at $x=0$"),
                ]),
                lambda: simplify(qp - pq) == 0,
            ),
            C(
                r"$p(q(0))=0$.",
                False,
                pack("E", False, [
                    "Evaluate inside-out.",
                    D(r"q(0)=0"),
                    D(r"p(0)=-1"),
                    D(r"-1\neq 0"),
                    close(False, "The nested value is $-1$, not $0$"),
                ]),
                lambda: ev(pq, 0) == 0,
            ),
        ]
        overview = f"Nested stem: $q(p)={L(factor(qp))}$; $p(q)={L(pq)}$; nestings disagree."
    return TaskSpec(ctx, claims, overview, "nested", TITLES["nested"][variant])


# ---------------------------------------------------------------------------
# Factored
# ---------------------------------------------------------------------------


def build_factored(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand((x + 1) ** 2 * (x - 2))
        dp = diff(p, x)
        ctx = (
            rf"A cubic arrives already factored as $p(x)={factored_tex([( -1, 2), (2, 1)])}$. "
            f"Use multiplicity, $p'$, the intercept, and parity — do not stop at expanding. {TAIL}"
        )
        claims = [
            C(
                r"$p'(-1)=0$.",
                True,
                pack("A", True, [
                    "A squared factor means a double root, and a double root is a root of the derivative. Differentiate the product, or simply invoke that theorem at $x=-1$.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(-1)={L(ev(dp, -1))}"),
                    close(True, "The double root flattens $p'$"),
                ]),
                lambda: ev(dp, -1) == 0,
            ),
            C(
                r"$p'(2)=0$.",
                False,
                pack("B", False, [
                    "The factor $x-2$ appears only once, so $x=2$ is a simple root and a genuine crossing.",
                    D(rf"p'(2)={L(ev(dp, 2))}"),
                    D(r"9\neq 0"),
                    close(False, "The simple root does not flatten $p'$"),
                ]),
                lambda: ev(dp, 2) == 0,
            ),
            C(
                "$p$ has exactly two distinct real zeros.",
                True,
                pack("C", True, [
                    "Read distinct linear factors, ignoring exponents.",
                    D(r"\{-1,2\}"),
                    D(r"p(-1)=0,\quad p(2)=0"),
                    close(True, "Two distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 2,
            ),
            C(
                r"$p(0)=-2$.",
                True,
                pack("D", True, [
                    "The intercept is the product of the constant pieces of the factors.",
                    D(r"p(0)=(1)^{2}(-2)=-2"),
                    D(rf"p(x)={L(p)}"),
                    close(True, "The intercept is $-2$"),
                ]),
                lambda: ev(p, 0) == -2,
            ),
            C(
                "$p$ is an odd function.",
                False,
                pack("E", False, [
                    "Oddness requires $p(0)=0$. The intercept is $-2$.",
                    D(r"p(0)=-2\\neq 0"),
                    D(r"p(1)=-4,\quad p(-1)=0"),
                    close(False, "A nonzero intercept kills oddness"),
                ]),
                lambda: is_odd(p),
            ),
        ]
        overview = f"Factored stem: $p(x)={L(factor(p))}$; $p'(-1)=0$, $p'(2)\\neq 0$; intercept $-2$."
    elif variant == 1:
        p = expand((x - 1) * (x + 1) * (x - 2))
        dp = diff(p, x)
        ctx = (
            rf"A cubic is written $p(x)={factored_tex([(1, 1), (-1, 1), (2, 1)])}$. "
            f"Test distinct zeros, $p'$ at a simple root, parity, Vieta, and the intercept. {TAIL}"
        )
        claims = [
            C(
                "$p$ has exactly three distinct real zeros.",
                True,
                pack("A", True, [
                    "Three distinct linear factors, each to the first power.",
                    D(r"\{-1,1,2\}"),
                    close(True, "Three distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 3,
            ),
            C(
                r"$p'(1)=0$.",
                False,
                pack("B", False, [
                    "The factor $x-1$ appears once, so $x=1$ is simple.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(1)={L(ev(dp, 1))}"),
                    close(False, "A simple root does not flatten $p'$"),
                ]),
                lambda: ev(dp, 1) == 0,
            ),
            C(
                "$p$ is an odd function.",
                False,
                pack("C", False, [
                    "The zero set $\\{-1,1,2\\}$ is not symmetric about the origin, and $p(0)=2\\neq 0$.",
                    D(rf"p(0)={L(ev(p, 0))}"),
                    D(rf"p(-x)={L(expand(p.subs(x, -x)))}"),
                    close(False, "The cubic is not odd"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "By Vieta, the sum of the three roots is $0$.",
                False,
                pack("D", False, [
                    "Add the roots, or read minus the $x^{2}$ coefficient.",
                    D(r"-1+1+2=2"),
                    D(rf"p(x)={L(p)}"),
                    D(r"-(-2)=2"),
                    close(False, "The root sum is $2$, not $0$"),
                ]),
                lambda: -1 + 1 + 2 == 0,
            ),
            C(
                r"$p(0)=0$.",
                False,
                pack("E", False, [
                    "The origin is a root only if $x$ itself is a factor. It is not.",
                    D(r"p(0)=(0-1)(0+1)(0-2)=2"),
                    D(r"2\neq 0"),
                    close(False, "The intercept is $2$"),
                ]),
                lambda: ev(p, 0) == 0,
            ),
        ]
        overview = f"Factored stem: $p(x)={L(factor(p))}$; three simple zeros; Vieta sum $2$; intercept $2$."
    else:
        p = expand(x * (x - 2) ** 2)
        dp = diff(p, x)
        ctx = (
            rf"A cubic factors as $p(x)={factored_tex([(0, 1), (2, 2)])}$. "
            f"Separate the simple root from the double root, then apply Vieta. {TAIL}"
        )
        claims = [
            C(
                "The origin is a simple root of $p$.",
                True,
                pack("A", True, [
                    "The factor $x$ appears to the first power, while the squared factor is $x-2$.",
                    D(r"p(x)=x(x-2)^{2}"),
                    D(rf"p'(0)={L(ev(dp, 0))}"),
                    close(True, "The origin is a simple crossing, with $p'(0)=4\\neq 0$"),
                ]),
                lambda: ev(p, 0) == 0 and ev(dp, 0) != 0,
            ),
            C(
                r"$p'(2)=0$.",
                True,
                pack("B", True, [
                    "The squared factor makes $x=2$ a double root, hence a root of $p'$.",
                    D(rf"p'(x)={L(dp)}"),
                    D(rf"p'(2)={L(ev(dp, 2))}"),
                    close(True, "The double root flattens $p'$"),
                ]),
                lambda: ev(dp, 2) == 0,
            ),
            C(
                "$p$ has exactly two distinct real zeros.",
                True,
                pack("C", True, [
                    "Distinct factors: $x$ and $x-2$.",
                    D(r"\{0,2\}"),
                    close(True, "Two distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p)) == 2,
            ),
            C(
                "$p$ is an odd function.",
                False,
                pack("D", False, [
                    "The expanded form has an $x^{2}$ term. Oddness would keep only odd powers.",
                    D(rf"p(x)={L(p)}"),
                    D(r"p(-1)=-1-4-4=-9,\quad -p(1)=-1"),
                    close(False, "The $x^{2}$ term destroys oddness"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "By Vieta, the multiplicity-weighted root sum equals $4$.",
                True,
                pack("E", True, [
                    "Count the double root twice: $0+2+2=4$. For a monic cubic that sum equals minus the coefficient of $x^{2}$.",
                    D(r"0+2+2=4"),
                    D(rf"p(x)={L(p)}"),
                    D(r"-(-4)=4"),
                    close(True, "The weighted sum is $4$"),
                ]),
                lambda: 0 + 2 + 2 == 4,
            ),
        ]
        overview = f"Factored stem: $p(x)={L(factor(p))}$; simple at $0$, double at $2$; Vieta sum $4$."
    return TaskSpec(ctx, claims, overview, "factored", TITLES["factored"][variant])


# ---------------------------------------------------------------------------
# Hybrid (figure-only letters + table-only letters; no printed poly)
# ---------------------------------------------------------------------------


def build_hybrid(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand(x ** 3 - 4 * x)
        q = x
        xmin, xmax, ymin, ymax = -3, 3, -16, 16
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid polynomial; dashed companion",
            second=q,
        )
        xs = [-2, -1, 0, 1, 2]
        ys = [int(ev(p, v)) for v in xs]
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        ctx = (
            "The figure shows a polynomial (solid) and a dashed companion; a raw sample "
            "table of the solid graph is also given. Letters A–C are to be decided from the "
            "figure alone; letters D–E from the table alone. No closed form is printed. "
            f"{TAIL}"
        )
        claims = [
            C(
                "From the figure: the solid graph meets the horizontal axis at exactly three distinct points in the window.",
                True,
                pack("A", True, [
                    "Read only the solid curve against the horizontal axis. Three simple crossings are visible, aligned with the integer ticks $-2$, $0$ and $2$.",
                    D(r"p(x)=x(x-2)(x+2)"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    close(True, "Three distinct axis meetings are visible on the figure"),
                ]),
                lambda: n_z == 3,
            ),
            C(
                "From the figure: the solid graph is that of an odd function.",
                True,
                pack("B", True, [
                    "The figure is origin-symmetric: a half-turn about the origin carries the solid curve onto itself, and the intercept is $0$.",
                    D(r"p(x)=x^{3}-4x"),
                    D(r"p(-x)=-p(x)"),
                    close(True, "Origin symmetry is visible on the figure"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "From the figure: the solid curve meets the dashed companion at exactly three distinct points in the window.",
                True,
                pack("C", True, [
                    "Count solid–dashed intersections, not axis crossings. One meeting is at the origin; two further meetings sit near $x=\\pm 2.2$, still inside the window.",
                    D(r"p(x)-x=x(x^{2}-5)"),
                    D(rf"\text{{meetings in window}}={n_m}"),
                    close(True, "Three distinct solid–dashed meetings are visible"),
                ]),
                lambda: n_m == 3,
            ),
            C(
                "From the table: the sample at $x=-1$ equals $3$.",
                True,
                pack("D", True, [
                    "Read the $x=-1$ column of the table; do not use the figure for this letter.",
                    D(r"p(-1)=3"),
                    close(True, "The tabulated height at $x=-1$ is $3$"),
                ]),
                lambda: ys[xs.index(-1)] == 3,
            ),
            C(
                "From the table: the factor $x-1$ divides the unknown polynomial.",
                False,
                pack("E", False, [
                    "The factor theorem is a table-lookup at $x=1$.",
                    D(r"p(1)=-3"),
                    D(r"-3\neq 0"),
                    close(False, "The $x=1$ sample is $-3$, so $x-1$ is not a factor"),
                ]),
                lambda: ys[xs.index(1)] == 0,
            ),
        ]
        overview = (
            f"Hybrid: figure of $p(x)={L(p)}$ vs $y=x$; table samples {ys}; "
            f"{n_z} zeros, {n_m} meetings."
        )
        return TaskSpec(
            ctx, claims, overview, "hybrid", TITLES["hybrid"][variant],
            figure=fig, tables_markdown=value_table(xs, ys),
        )
    if variant == 1:
        p = expand((x - 2) ** 2 * (x + 1))
        q = Rational(2)
        xmin, xmax, ymin, ymax = -2, 3, -17, 6
        fig = make_fig(
            p, xmin, xmax, ymin, ymax,
            "Solid polynomial; dashed mark",
            second=q,
        )
        xs = [-1, 0, 1, 2, 3]
        ys = [int(ev(p, v)) for v in xs]
        n_z = len(distinct_real_zeros(p))
        n_m = n_meet(p, q, xmin, xmax)
        p0 = int(ev(p, 0))
        ctx = (
            "The figure shows a polynomial (solid) and a constant dashed mark; a raw sample "
            "table of the solid graph is also given. Letters A–C are to be decided from the "
            "figure alone; letters D–E from the table alone. No closed form is printed. "
            f"{TAIL}"
        )
        claims = [
            C(
                "From the figure: the solid graph meets the horizontal axis at exactly two distinct points in the window.",
                True,
                pack("A", True, [
                    "One meeting is a touch (flattening on the axis) and one is a simple crossing. The touch still counts as a single distinct zero.",
                    D(r"p(x)=(x-2)^{2}(x+1)"),
                    D(rf"\text{{distinct zeros}}={n_z}"),
                    close(True, "Two distinct axis meetings are visible"),
                ]),
                lambda: n_z == 2,
            ),
            C(
                "From the figure: the $y$-intercept of the solid graph is negative.",
                False,
                pack("B", False, [
                    "Read the height at $x=0$ on the vertical axis. The solid curve cuts above the origin.",
                    D(rf"p(0)={p0}"),
                    D(r"4>0"),
                    close(False, "The intercept is positive, not negative"),
                ]),
                lambda: p0 < 0,
            ),
            C(
                "From the figure: the solid graph is that of an odd function.",
                False,
                pack("C", False, [
                    "Oddness requires a zero intercept and half-turn symmetry. The intercept is $+4$, and the touch at $x=2$ has no matching touch at $x=-2$.",
                    D(rf"p(0)={p0}\\neq 0"),
                    close(False, "The figure is not origin-symmetric"),
                ]),
                lambda: is_odd(p),
            ),
            C(
                "From the table: the factor $x+1$ divides the unknown polynomial.",
                True,
                pack("D", True, [
                    "Read the $x=-1$ column.",
                    D(r"p(-1)=0"),
                    D(r"x-(-1)=x+1"),
                    close(True, "The sample at $-1$ vanishes, so $x+1$ is a factor"),
                ]),
                lambda: ys[xs.index(-1)] == 0,
            ),
            C(
                "From the table: the factor $x$ divides the unknown polynomial.",
                False,
                pack("E", False, [
                    "The factor theorem at $x=0$ is the intercept column of the table.",
                    D(r"p(0)=4"),
                    D(r"4\neq 0"),
                    close(False, "The intercept sample is $4$, so $x$ is not a factor"),
                ]),
                lambda: ys[xs.index(0)] == 0,
            ),
        ]
        overview = (
            f"Hybrid: figure of $p(x)={L(p)}$ vs $y=2$; table {ys}; "
            f"{n_z} zeros, {n_m} meetings with the dashed mark."
        )
        return TaskSpec(
            ctx, claims, overview, "hybrid", TITLES["hybrid"][variant],
            figure=fig, tables_markdown=value_table(xs, ys),
        )
    # variant 2
    p = expand((x + 1) * (x - 1) * (x - 2))
    q = Rational(2)
    xmin, xmax, ymin, ymax = -2, 3, -13, 9
    fig = make_fig(
        p, xmin, xmax, ymin, ymax,
        "Solid polynomial; dashed mark",
        second=q,
    )
    xs = [-1, 0, 1, 2, 3]
    ys = [int(ev(p, v)) for v in xs]
    n_z = len(distinct_real_zeros(p))
    n_m = n_meet(p, q, xmin, xmax)
    p0 = int(ev(p, 0))
    ctx = (
        "The figure shows a polynomial (solid) and a constant dashed mark; a raw sample "
        "table of the solid graph is also given. Letters A–C are to be decided from the "
        "figure alone; letters D–E from the table alone. No closed form is printed. "
        f"{TAIL}"
    )
    claims = [
        C(
            "From the figure: the solid graph meets the horizontal axis at exactly three distinct points in the window.",
            True,
            pack("A", True, [
                "Three simple crossings are visible: one left of the origin and two to its right.",
                D(r"p(x)=(x+1)(x-1)(x-2)"),
                D(rf"\text{{distinct zeros}}={n_z}"),
                close(True, "Three distinct axis meetings are visible"),
            ]),
            lambda: n_z == 3,
        ),
        C(
            "From the figure: the $y$-intercept of the solid graph is positive.",
            True,
            pack("B", True, [
                "The solid curve cuts the vertical axis above the origin, at the same height as the dashed mark.",
                D(rf"p(0)={p0}"),
                D(r"2>0"),
                close(True, "The intercept is positive"),
            ]),
            lambda: p0 > 0,
        ),
        C(
            "From the figure: the solid curve meets the dashed mark at exactly three distinct points in the window.",
            True,
            pack("C", True, [
                "The dashed mark is the horizontal through the intercept. One meeting is at $x=0$. Two further meetings lie inside the window, near $x=-0.4$ and $x=2.4$.",
                D(r"p(x)-2=x(x^{2}-2x-1)"),
                D(r"x=0,\ 1\\pm\\sqrt{2}"),
                D(rf"\text{{meetings in window}}={n_m}"),
                close(True, "Three distinct solid–dashed meetings are visible"),
            ]),
            lambda: n_m == 3,
        ),
        C(
            "From the table: the factor $x-1$ divides the unknown polynomial.",
            True,
            pack("D", True, [
                "Read the $x=1$ column.",
                D(r"p(1)=0"),
                close(True, "The sample at $1$ vanishes, so $x-1$ is a factor"),
            ]),
            lambda: ys[xs.index(1)] == 0,
        ),
        C(
            "From the table: the factor $x-2$ divides the unknown polynomial.",
            True,
            pack("E", True, [
                "Read the $x=2$ column.",
                D(r"p(2)=0"),
                close(True, "The sample at $2$ vanishes, so $x-2$ is a factor"),
            ]),
            lambda: ys[xs.index(2)] == 0,
        ),
    ]
    overview = (
        f"Hybrid: figure of $p(x)={L(p)}$ vs $y=2$; table {ys}; "
        f"{n_z} zeros, {n_m} meetings."
    )
    return TaskSpec(
        ctx, claims, overview, "hybrid", TITLES["hybrid"][variant],
        figure=fig, tables_markdown=value_table(xs, ys),
    )


# ---------------------------------------------------------------------------
# Text-dense
# ---------------------------------------------------------------------------


def build_text_dense(variant: int) -> TaskSpec:
    ctx = (
        "Five standalone polynomial micro-scenarios — no shared formula across letters. "
        f"{TAIL}"
    )
    if variant == 0:
        p_a = expand((x + 1) * x * (x - 2))
        p_e = expand((x - 1) ** 2 * (x + 1))
        dp_e = diff(p_e, x)
        nest = expand((x ** 2) ** 2 - 1)
        p_d = expand(x ** 3 - 4 * x)
        claims = [
            C(
                r"A monic cubic with simple zeros at $-1$, $0$ and $2$ satisfies $p(1)=-2$.",
                True,
                pack("A", True, [
                    "Form the unique monic cubic with those simple zeros, then substitute $x=1$. Each factor contributes one signed distance from $1$ to a zero.",
                    D(r"p(x)=x(x+1)(x-2)"),
                    D(r"p(1)=(1)(2)(-1)=-2"),
                    close(True, "The value at $x=1$ is $-2$"),
                ]),
                lambda: ev(p_a, 1) == -2,
            ),
            C(
                r"If $f(x)=x^{4}+1$, then $f(-x)=f(x)$ for every real $x$.",
                True,
                pack("B", True, [
                    "Only even powers appear, so replacing $x$ by $-x$ changes nothing.",
                    D(r"f(-x)=(-x)^{4}+1=x^{4}+1=f(x)"),
                    D(r"f(1)=2=f(-1)"),
                    close(True, "$f$ is even"),
                ]),
                lambda: is_even(x ** 4 + 1),
            ),
            C(
                r"Feeding $x^{2}$ into $u^{2}-1$ produces a polynomial whose highest power is $x^{4}$.",
                True,
                pack("C", True, [
                    "Nesting multiplies degrees: the outer quadratic hits the inner highest power $x^{2}$.",
                    D(r"2\cdot 2=4"),
                    D(rf"(x^{2})^{2}-1={L(nest)}"),
                    close(True, "The nested highest power is $x^{4}$"),
                ]),
                lambda: deg(nest) == 4,
            ),
            C(
                r"The cubic $x^{3}-4x$ has three distinct real zeros.",
                True,
                pack("D", True, [
                    "Factor by pulling out $x$, then difference of squares.",
                    D(r"x^{3}-4x=x(x-2)(x+2)"),
                    D(r"x=-2,\ 0,\ 2"),
                    close(True, "Three distinct real zeros"),
                ]),
                lambda: len(distinct_real_zeros(p_d)) == 3,
            ),
            C(
                r"The polynomials $(x-1)^{2}(x+1)$ and its derivative share a common real root.",
                True,
                pack("E", True, [
                    "A root of multiplicity at least $2$ is automatically a root of the derivative. Here $x=1$ is double.",
                    D(r"p(x)=(x-1)^{2}(x+1)"),
                    D(rf"p'(x)={L(dp_e)}"),
                    D(r"p(1)=0=p'(1)"),
                    close(True, "The double root is a shared root with $p'$"),
                ]),
                lambda: ev(p_e, 1) == 0 and ev(dp_e, 1) == 0,
            ),
        ]
        overview = "Text-dense: five independent true small-integer claims (evaluate, evenness, nest, factor, $p'$)."
    elif variant == 1:
        shifted = expand(x ** 3 - x + 2)
        g = expand(x ** 3 - 4 * x)
        dg = diff(g, x)
        p_v = expand((x + 1) * (x - 1) * (x - 2))
        h = expand(-x ** 3 + 3 * x)
        q4 = expand(x ** 4 - 5 * x ** 2 + 4)
        claims = [
            C(
                r"Translating $x^{3}-x$ upward by $2$ leaves exactly three real roots.",
                False,
                pack("A", False, [
                    "A vertical shift preserves turning abscissas but can change how many times the graph meets the axis. The unshifted cubic $x^{3}-x$ has local max/min of height $\\pm 2/(3\\sqrt{3})\\approx\\pm 0.38$, much smaller than the shift $2$, so only one real root survives.",
                    D(r"q(x)=x^{3}-x+2"),
                    D(rf"\text{{real roots}}={len(distinct_real_zeros(shifted))}"),
                    D(r"q(-1)=-1+1+2=2\\neq 0"),
                    close(False, "Only one real root remains after the shift"),
                ]),
                lambda: len(distinct_real_zeros(shifted)) == 3,
            ),
            C(
                r"For $g(x)=x^{3}-4x$, the derivative $g'$ is an even function.",
                True,
                pack("B", True, [
                    "Differentiate, then test $g'(-x)$.",
                    D(rf"g'(x)={L(dg)}"),
                    D(r"g'(-x)=3x^{2}-4=g'(x)"),
                    close(True, "$g'$ involves only even powers"),
                ]),
                lambda: is_even(dg),
            ),
            C(
                rf"$p(x)={factored_tex([(-1, 1), (1, 1), (2, 1)])}$ has root sum $8$.",
                False,
                pack("C", False, [
                    "Add the three simple roots, or read minus the $x^{2}$ coefficient of the monic cubic.",
                    D(r"-1+1+2=2"),
                    D(rf"p(x)={L(p_v)}"),
                    D(r"2\neq 8"),
                    close(False, "The root sum is $2$, not $8$"),
                ]),
                lambda: -1 + 1 + 2 == 8,
            ),
            C(
                r"If $h(x)=-x^{3}+3x$, then $h$ is odd and $h(0)=0$.",
                True,
                pack("D", True, [
                    "Only odd powers appear, and the constant term is $0$.",
                    D(r"h(-x)=x^{3}-3x=-h(x)"),
                    D(r"h(0)=0"),
                    close(True, "Oddness and a zero intercept both hold"),
                ]),
                lambda: is_odd(h) and ev(h, 0) == 0,
            ),
            C(
                r"The quartic $x^{4}-5x^{2}+4$ factors into four real linear factors.",
                True,
                pack("E", True, [
                    "Treat it as a quadratic in $x^{2}$, then factor each difference of squares.",
                    D(r"x^{4}-5x^{2}+4=(x^{2}-1)(x^{2}-4)"),
                    D(r"=(x-1)(x+1)(x-2)(x+2)"),
                    close(True, "Four distinct real linear factors"),
                ]),
                lambda: len(distinct_real_zeros(q4)) == 4,
            ),
        ]
        overview = "Text-dense: shift kills two roots; $g'$ even; Vieta trap; odd $h$; four linear factors."
    else:
        meet = expand(x ** 3 - 3 * x)
        p_b = expand(x ** 3 + x ** 2 - x - 1)
        claims = [
            C(
                r"Meeting points of $y=x^{3}$ and $y=3x$ solve $x^{3}-3x=0$.",
                True,
                pack("A", True, [
                    "Set the two expressions equal and bring every term to one side.",
                    D(r"x^{3}=3x"),
                    D(rf"x^{3}-3x={L(factor(meet))}"),
                    close(True, "The meeting equation is $x^{3}-3x=0$"),
                ]),
                lambda: True,
            ),
            C(
                r"$p(x)=x^{3}+x^{2}-x-1$ satisfies $p(-1)=2$.",
                False,
                pack("B", False, [
                    "Substitute $x=-1$ term by term. Grouping as $(x^{3}-x)+(x^{2}-1)$ also shows a factor $x+1$.",
                    D(r"p(-1)=-1+1+1-1=0"),
                    D(r"p(x)=(x+1)(x^{2}-1)=(x+1)^{2}(x-1)"),
                    D(r"0\neq 2"),
                    close(False, "The value is $0$, not $2$"),
                ]),
                lambda: ev(p_b, -1) == 2,
            ),
            C(
                r"If a polynomial satisfies $p(n)=n^{3}+n$ at $n=0,1,2$ only, then $p$ is necessarily cubic.",
                False,
                pack("C", False, [
                    r"Three samples never force a degree. One cubic interpolant is $x^{3}+x$, but so is $x^{3}+x+c\,x(x-1)(x-2)$ for any $c\neq 0$, which has degree $4$.",
                    D(r"r(x)=x^{3}+x+c\,x(x-1)(x-2)"),
                    D(r"r(0)=r(1)=r(2)\\ \text{match the samples}"),
                    close(False, "Higher-degree interpolants exist"),
                ]),
                lambda: False,
            ),
            C(
                r"For $k=8$, the cubic $x^{3}+k$ has three distinct real roots.",
                False,
                pack("D", False, [
                    "The map $x^{3}$ is strictly increasing, so $x^{3}+8=0$ has the unique real solution $x=-2$. The other two roots are complex.",
                    D(r"x^{3}+8=(x+2)(x^{2}-2x+4)"),
                    D(r"x^{2}-2x+4=(x-1)^{2}+3>0"),
                    close(False, "Only one real root, $x=-2$"),
                ]),
                lambda: len(distinct_real_zeros(x ** 3 + 8)) == 3,
            ),
            C(
                r"If $p$ has degree $3$ and leading coefficient $-1$, then $p(x)\\to-\\infty$ as $x\\to-\\infty$.",
                False,
                pack("E", False, [
                    "Odd degree with negative lead: as $x\\to-\\infty$, the cube $x^{3}\\to-\\infty$, and multiplying by $-1$ flips that to $+\\infty$.",
                    D(r"p(x)\\sim -x^{3}"),
                    D(r"x\\to-\\infty\\Rightarrow x^{3}\\to-\\infty\\Rightarrow -x^{3}\\to+\\infty"),
                    close(False, "The left end tends to $+\\infty$, not $-\\infty$"),
                ]),
                lambda: False,
            ),
        ]
        overview = "Text-dense: meetings identity; $p(-1)=0$ trap; interpolation degree; one real cube root; left-end sign."
    return TaskSpec(ctx, claims, overview, "text_dense", TITLES["text_dense"][variant])


# ---------------------------------------------------------------------------
# Render / validate
# ---------------------------------------------------------------------------


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
    variant = idx // 10
    spec = BUILDERS[kind](variant)
    if spec.stem_kind != kind:
        raise ValueError(f"task {idx + 1}: builder kind {spec.stem_kind} != {kind}")
    truths = sum(as_bool(c.truth) for c in spec.claims)
    target = truth_target(idx)
    if truths != target:
        raise ValueError(
            f"task {idx + 1} ({kind}/{variant}) has {truths} truths, expected {target}: "
            f"{[c.truth for c in spec.claims]}"
        )
    if len(spec.claims) != 5:
        raise ValueError(f"task {idx + 1} has {len(spec.claims)} claims")
    verify_claims(spec.claims, f"task {idx + 1} {kind}")
    return spec


def _interpret_display(latex_src: str, kind: str) -> str:
    s = latex_src.replace(" ", "")
    if s.startswith(r"\lim"):
        return "Only the highest-power term survives at infinity; every lower term is killed by dividing through by that power and sending $x$ out of the window."
    if r"\Delta" in latex_src:
        return "Each difference pass drops the degree by one. The first constant layer is therefore the degree, and the constant itself is (degree)! times the leading coefficient on unit spacing."
    if re.search(r"p\^\{\\prime\}|p'|g'|h'|f'|q'", latex_src) or "p'(" in latex_src.replace(" ", ""):
        return "A root of multiplicity at least two is always a root of the derivative; a simple root is a crossing, so the derivative need not vanish there."
    if "\\to" in latex_src and "infty" in latex_src:
        return "The sign of the leading coefficient, together with whether the degree is odd or even, fixes both arrows."
    if re.search(r"p\(0\)|c\(0\)|h\(0\)|s\(0\)|g\(0\)|f\(0\)|q\(0\)", latex_src):
        return "The intercept is the height at input $0$: it is the constant term of the expanded form, and it is also the table column headed $0$ when a table is present."
    if re.match(r"[pqfghc]_{?[a-zA-Z]*}?\(x\)=", s) or re.match(r"[pqfghc]\(x\)=", s):
        return "Once the polynomial is written in this form, every later substitution is mechanical: put the named input in place of $x$ and simplify."
    if "cdot" in s or re.search(r"\d\\cdot\d", latex_src):
        return "Nesting multiplies degrees; a product of polynomials would have added them instead. The leading coefficient of a nesting is the outer lead times the inner lead raised to the outer degree."
    if s.startswith(r"\{") or "distinct" in latex_src:
        return "Distinct zeros ignore multiplicity: a squared factor still contributes only one abscissa to this count."
    if "Vieta" in latex_src or s.startswith("-(") or re.search(r"-\(-?\d+\)=", s):
        return "For a monic polynomial the elementary symmetric sums of the roots (counted with multiplicity) are plus or minus the lower coefficients."
    if kind in ("graph", "hybrid", "applied"):
        return "This identity is what the ticks (or the raw ledger) force, not an extra formula printed in the stem."
    if kind == "table":
        return "Every number in this display is computed from the raw sample row; the table itself never listed a difference column or a closed form."
    return "Keep the same polynomial; only the named input or the named coefficient has changed."


def ch4ify(expl: str, letter: str, truth: bool, stmt: str, overview: str, kind: str) -> str:
    """Chapter-4 tutor voice: keep the original algebra, put a method beat after the opener."""
    expl = normalize_displays(expl)
    expl = re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)\s*", "", expl).strip()
    paras = [p.strip() for p in re.split(r"\n\s*\n", expl) if p.strip()]
    closer = close(truth, "This settles the claim")
    if paras and "so the statement is" in paras[-1].lower():
        closer = paras.pop()
    expl = "\n\n".join(paras)

    displays = re.findall(r"\$\$([\s\S]*?)\$\$", expl)
    pieces = re.split(r"\$\$[\s\S]*?\$\$", expl)
    opener = (pieces[0] if pieces else "").strip()
    if not opener:
        opener = "Carry out the named polynomial test in full; a glance at the shape is not enough."

    parts: list[str] = [opener]
    # Kind-specific second beat, varied by letter so five letters in one task do not clone.
    kind_beats = {
        "graph": [
            "The stem prints no formula: the ticks have to supply zeros, intercept sign, and the leading-sign from the ends before any algebra begins.",
            "A touch still counts as one axis meeting; a turning point is a peak or trough and need not lie on the axis.",
            "The dashed companion is a second graph. Meetings with it are solutions of $p=q$, not extra zeros of $p$.",
            "Oddness is origin symmetry. A nonzero intercept already kills it; evenness is mirror symmetry across the vertical axis.",
            "End behaviour is the pair of arrows as $|x|$ leaves the window, fixed by degree parity and the sign of the leading coefficient.",
        ],
        "table": [
            "The table is raw values on unit spacing. Differences are computed by hand; they are not printed as extra rows.",
            "The factor theorem is a column lookup: $x-r$ divides the unknown polynomial if and only if the entry at $x=r$ is $0$.",
            "A constant difference layer diagnoses a minimal degree; the same nodes still lie on infinitely many higher-degree interpolants.",
            "A listed heading is not a root. Only a listed value of $0$ is a root.",
            "Each first difference is a consecutive jump in the raw row; constancy there would mean a line.",
        ],
        "applied": [
            "The story's ledger (or plot) is the only source; no engineering formula is issued in the stem.",
            "A recorded zero is a tabulated $0$, not merely a tabulated hour or day.",
            "Degree diagnosis on a ledger is the same finite-difference test as on an abstract table.",
            "The opening reading is the intercept: the column headed $0$, or the height at the vertical axis on a figure.",
            "A linear model would freeze at first differences; a quadratic would freeze at second differences.",
        ],
        "symbolic": [
            "Shared roots are tested by substitution or by comparing complete real factorisations.",
            r"Parity is the identity $p(-x)=\pm p(x)$, visible at a glance from even versus odd powers.",
            "The remainder on division by $x-r$ is the number $p(r)$, by the remainder theorem.",
            "Nesting multiplies degrees; equal nested degree does not make the two nestings identical as polynomials.",
            "Vieta reads multiplicity-weighted elementary symmetric sums from the coefficients, after making the polynomial monic.",
        ],
        "parametric": [
            "The parameter sits in a coefficient. Identities that hold for every value of the parameter must not use a special substitution.",
            "A repeated root occurs where the family and its derivative share a root; that is a condition on the parameter.",
            "Distinct-zero counts ignore multiplicity and can jump when a sliding root collides with a multiple root.",
            "Monic of a fixed degree is a leading-term statement: the parameter is not allowed to touch the highest power.",
            "Stationary points solve the derivative equation, whose roots generally move with the parameter.",
        ],
        "rebuild": [
            "A monic polynomial with a stated multiplicity pattern is the product of the corresponding monic linear factors.",
            "The derivative vanishes at every multiple root and need not vanish at a simple root.",
            "Vieta counts a double root twice when it forms the sum that matches minus the next-to-leading coefficient.",
            "Distinct zeros are the distinct factors, not the multiplicity total.",
            "The intercept is the product of the constant pieces of those factors, including signs.",
        ],
        "nested": [
            "Evaluate a nesting inside-out: compute the inner value first, then feed it to the outer map.",
            "The highest power of $q(p(x))$ is $x$ raised to the product of the two degrees, with leading coefficient equal to the outer lead times the inner lead raised to the outer degree.",
            "The two nestings $q(p(x))$ and $p(q(x))$ share a highest power because multiplication of degrees commutes, but they are not equal as polynomials in general.",
            "A factor $x-r$ divides a nesting when the nesting evaluates to $0$ at $r$.",
            "Parity of a nesting follows from parity of the inner and outer maps: an even inner map makes every outer function of it even.",
        ],
        "factored": [
            "Read multiplicity from the exponent on each linear factor; do not expand first unless a coefficient is required.",
            "The derivative test separates a double root from a simple crossing without a full expansion.",
            "Distinct zeros are the distinct linear factors, regardless of exponents.",
            "The intercept is the product of the constant terms of the factors, with the overall leading sign.",
            "Oddness fails as soon as an even power appears, equivalently as soon as the intercept is nonzero for a non-constant polynomial that is not odd.",
        ],
        "hybrid": [
            "Each letter is locked to one medium. Figure letters may not borrow a table column; table letters may not borrow a visual crossing.",
            "On the figure, count distinct axis meetings and solid–dashed meetings separately; they are different equations.",
            "Oddness and intercept sign are figure facts: origin symmetry and the height at $x=0$ on the vertical axis.",
            "On the table, the factor theorem is a column lookup, and a listed sample is read off the matching heading.",
            "No closed form is printed beside the figure; any formula in this explanation is reconstructed after the medium has been read.",
        ],
        "text_dense": [
            "This letter is independent of the others: identify its own polynomial, then carry out the named test.",
            "A vertical shift preserves turning abscissas but can change the number of real roots.",
            "Three samples never force a degree; a multiple of the nodal product may be added.",
            "An odd-degree real polynomial has at least one real root, but not necessarily three distinct real roots.",
            "Far-field sign is the leading coefficient times infinity to the degree, with the usual sign rules for odd and even powers.",
        ],
    }
    beats = kind_beats.get(kind, kind_beats["symbolic"])
    beat = beats["ABCDE".index(letter) if letter in "ABCDE" else 0]
    if beat not in opener:
        parts.append(beat)

    for i, disp in enumerate(displays):
        parts.append(D(disp))
        mid = pieces[i + 1].strip() if i + 1 < len(pieces) else ""
        if mid:
            parts.append(mid)
        else:
            note = _interpret_display(disp, kind)
            if note not in parts[-3:]:
                parts.append(note)

    parts.append(closer)
    return normalize_displays(pack(letter, truth, parts))


def render(spec: TaskSpec, idx: int) -> dict:
    n = idx + 1
    letters = "ABCDE"
    out = {
        "id": f"math-9-e{n}",
        "case_id": f"MATH 9.E{str(n).zfill(2)}",
        "title": spec.title,
        "subsection": "9.5",
        "context": normalize_displays(spec.context),
        "statements": [c.text for c in spec.claims],
        "answer_key": [bool(c.truth) for c in spec.claims],
        "tactical_explanations": [
            ch4ify(c.explanation, letters[i], c.truth, c.text, spec.overview, spec.stem_kind)
            for i, c in enumerate(spec.claims)
        ],
        "difficulty_level": "5/5",
        "sort_order": 200 + n,
        "solution_overview": normalize_displays(spec.overview),
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }
    if spec.figure:
        out["figure"] = spec.figure
    if spec.tables_markdown:
        out["tables_markdown"] = spec.tables_markdown
    return out


CLOSED_FORM = re.compile(
    r"\$p\(x\)\s*=\s*(?:\\left)?\(?x[\^]|\$p\(x\)\s*=\s*\(x"
    r"|\$h\(t\)\s*=\s*(?:\\left)?\(?t[\^]|\$s\(n\)\s*=\s*"
)


def stem_blob(task: dict) -> str:
    return task["context"] + " " + " ".join(task["statements"])


def table_values(md: str) -> list[int]:
    return [int(v) for v in re.findall(r"\$\s*(-?\d+)\s*\$", md)]


def ints_outside(text: str) -> list[int]:
    t = re.sub(r"\^\{?-?\d+\}?", "", text)
    t = re.sub(r"E0\d+", "", t)
    nums = [int(n) for n in re.findall(r"(?<![A-Za-z\\])-?\d+", t)]
    return [n for n in nums if abs(n) > 20]


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    assert figs >= 8, f"figures={figs}"
    assert tabs >= 6, f"tables={tabs}"
    kinds = Counter(t["stem_kind"] for t in tasks)
    for knd in STEM_KINDS:
        assert kinds[knd] == 3, f"{knd} count={kinds.get(knd)}"
    expl_lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    med = statistics.median(expl_lens)
    assert med >= 400, f"median expl len={med}"

    for i, t in enumerate(tasks):
        n = i + 1
        kind = t["stem_kind"]
        assert t["id"] == f"math-9-e{n}"
        assert t["case_id"] == f"MATH 9.E{str(n).zfill(2)}"
        assert t["subsection"] == "9.5"
        assert t["sort_order"] == 200 + n
        assert t["difficulty_level"] == "5/5"
        assert t["title"] and t["title"] != "Mixed exam — task"
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        truths = sum(t["answer_key"])
        assert 1 <= truths <= 5, (t["case_id"], t["answer_key"])
        blob = " ".join(t["tactical_explanations"])
        assert "Matching the claim" not in blob
        assert "\\deg" not in blob
        full = json.dumps(t)
        assert "x--" not in full, t["case_id"]
        assert "(x--" not in full
        ctx = t.get("context") or ""
        assert not re.match(r"^\s*Let\s+", ctx), f"Let-opening {t['case_id']}"
        assert "Let $p$" not in ctx and "Let $f$" not in ctx
        for e in t["tactical_explanations"]:
            assert "so the statement is" in e, t["case_id"]
            assert e.count("$$") >= 2, t["case_id"]
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
                assert "\n" not in m.group(1), f"nl in display {t['case_id']}"
        for field in ("context", "solution_overview"):
            text = t.get(field) or ""
            assert "\\circ" not in text, field
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", text):
                assert "\n" not in m.group(1), f"nl in {field} {t['case_id']}"
        for e in t["tactical_explanations"]:
            assert "\\circ" not in e
        for s in t["statements"]:
            assert "\\circ" not in s

        stem = stem_blob(t)
        if kind in ("graph", "table", "applied", "hybrid"):
            if CLOSED_FORM.search(stem):
                raise AssertionError(f"closed-form leak in stem {t['case_id']}: {CLOSED_FORM.search(stem).group(0)}")
            if kind == "graph":
                assert t.get("figure"), t["case_id"]
                assert not t.get("tables_markdown"), t["case_id"]
            if kind == "table":
                assert t.get("tables_markdown"), t["case_id"]
                assert not t.get("figure"), t["case_id"]
                assert "\\Delta" not in (t.get("tables_markdown") or "")
            if kind == "hybrid":
                assert t.get("figure") and t.get("tables_markdown"), t["case_id"]
                low = stem.lower()
                assert "from the figure" in low and "from the table" in low, t["case_id"]

        if t.get("tables_markdown"):
            vals = table_values(t["tables_markdown"])
            bad = [v for v in vals if abs(v) > 20]
            assert not bad, f"{t['case_id']} table values {bad}"

        bad_stmt = []
        for s in t["statements"]:
            bad_stmt.extend(ints_outside(s))
        # Allow a few structural numbers already filtered; flag remaining
        assert not bad_stmt, f"{t['case_id']} statement ints {bad_stmt} in {t['statements']}"

        # Graph: do not restate roots as givens
        if kind == "graph":
            for s in t["statements"]:
                assert not re.search(r"crosses at \$x=", s)
                assert "touches the axis at $x=" not in s

    dist = Counter(sum(t["answer_key"]) for t in tasks)
    assert all(dist.get(knd, 0) == 6 for knd in range(1, 6)), dist


def main() -> None:
    specs = [build_task(i) for i in range(30)]
    tasks = [render(s, i) for i, s in enumerate(specs)]
    validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    kinds = Counter(t["stem_kind"] for t in tasks)
    expl_lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    truths = Counter(sum(t["answer_key"]) for t in tasks)
    print("PASSED")
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("stem_kind counts:", dict(sorted(kinds.items())))
    print("figures:", sum(1 for t in tasks if t.get("figure")))
    print("tables:", sum(1 for t in tasks if t.get("tables_markdown")))
    print("explanation median chars:", int(statistics.median(expl_lens)))
    print("explanation min/max chars:", min(expl_lens), max(expl_lens))
    print("truth counts per task:", dict(sorted(truths.items())))
    print("answer_key totals T/F:", sum(sum(t["answer_key"]) for t in tasks), 150 - sum(sum(t["answer_key"]) for t in tasks))


if __name__ == "__main__":
    main()
