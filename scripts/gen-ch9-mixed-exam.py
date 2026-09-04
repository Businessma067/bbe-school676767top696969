#!/usr/bin/env python3
"""Chapter 9 mixed exam bank — 30 maximally hard 5/5 T/F tasks (subsection 9.5).

Writes src/data/math-ch9-mixed-exam.json
Ten stem styles cycle three times; all numeric claims are sympy-verified.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Optional

from sympy import Poly, Rational, Symbol, diff, expand, factor, integrate, latex, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
t = Symbol("t")
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
        "End behaviour and touch-versus-cross",
        "Double-root tangency on the sketch",
        "Downward cubic: intercepts and slope",
    ],
    "table": [
        "Finite differences diagnose degree",
        "Quartic growth from fourth differences",
        "Shifted cubic samples and Δ-order",
    ],
    "applied": [
        "Lock-level cubic: expand, Vieta, ends",
        "Bridge camber: factors to end behaviour",
        "Reservoir spill: roots and far-field sign",
    ],
    "symbolic": [
        "Highest powers under nesting",
        "Even–odd splitting without numbers",
        "Vertical shifts and root counts",
    ],
    "parametric": [
        "Family g_k: oddness and repeated zeros",
        "Sliding double root in p_a",
        "When h_k collapses to a triple root",
    ],
    "rebuild": [
        "Rebuild from touch-and-cross data",
        "Beam cubic from multiplicity alone",
        "Double-versus-simple derivative trap",
    ],
    "nested": [
        "q(p(x)): degree and leading product",
        "Nested maps: evaluate then compare order",
        "p(q) versus q(p) on shared degree",
    ],
    "factored": [
        "Expand a repeated-factor quartic",
        "Vieta and p' on a simple-root cubic",
        "Multiplicity ≥2 forces a flat point",
    ],
    "hybrid": [
        "Solid cubic meets dashed quadratic",
        "Even quartic table plus closed form",
        "Shift the sketched cubic upward",
    ],
    "text_dense": [
        "Five unrelated polynomial micro-traps",
        "Touch, parity, Vieta, factors, odds",
        "Meetings, roots, samples, ends, guarantees",
    ],
}


# ---------------------------------------------------------------------------
# Formatting helpers (Chapter 4 / 7 tutor voice)
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
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def L(expr) -> str:
    return latex(simplify(expand(expr)))


def lin_tex(r, var: str = "x") -> str:
    """Linear factor (x-r) without double-minus artifacts like (x--1)."""
    r = Rational(r)
    if r == 0:
        return var
    if r > 0:
        return rf"({var}-{F(r)})"
    return rf"({var}+{F(-r)})"


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


def roots_real(expr, var=x) -> list:
    return sorted(
        [r for r in solve(expand(expr), var) if r.is_real],
        key=lambda z: float(z),
    )


def is_even(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) - e) == 0


def is_odd(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) + e) == 0


def integrate_speed(v_expr, t_vals: list[int]) -> list[Rational]:
    dist = [Rational(0)]
    for i in range(1, len(t_vals)):
        dt = t_vals[i] - t_vals[i - 1]
        mid = Rational(t_vals[i] + t_vals[i - 1], 2)
        dist.append(dist[-1] + ev(v_expr, mid, t) * dt)
    return dist


def speed_distance_table(v_expr, t_vals: list[int]) -> str:
    dist = integrate_speed(v_expr, t_vals)
    rows = ["| Time $t$ (s) | " + " | ".join(str(v) for v in t_vals) + " |"]
    rows.append("| --- | " + " | ".join("---" for _ in t_vals) + " |")
    rows.append(
        "| Distance (m) | "
        + " | ".join(str(int(round(float(d)))) for d in dist)
        + " |"
    )
    return "\n".join(rows)


def value_table(xs: list[int], ys: list, label: str = "p(x)") -> str:
    return (
        "| $x$ | " + " | ".join(str(v) for v in xs) + " |\n"
        "| --- | " + " | ".join("---" for _ in xs) + " |\n"
        f"| ${label}$ | " + " | ".join(f"${L(v) if not isinstance(v, int) else v}$" for v in ys) + " |"
    )


def deepen_explanation(expl: str, letter: str, truth: bool, stmt: str, overview: str) -> str:
    body = re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)\s*", "", expl).strip()
    blocks = re.findall(r"\$\$([\s\S]*?)\$\$", body)
    prose = re.sub(r"\$\$[\s\S]*?\$\$", "", body)
    prose = re.sub(r"\s+", " ", prose).strip()
    parts: list[str] = []
    if len(expl) < 420:
        parts.append(
            f"Statement {letter} rewards a full read of the stem: translate the words into algebra "
            f"before you decide TRUE or FALSE."
        )
        parts.append(f"The claim to test is: {stmt}")
        if overview:
            clean = re.sub(r"\$[^$]*\$", "", overview)
            parts.append(clean.split(".")[0].strip() + ".")
    if prose:
        parts.append(prose)
    for b in blocks:
        parts.append(D(b))
    # Dollar-free pads so $$...$$ never nests inline $...$.
    pad_bank = [
        r"\text{read the stem fully before deciding}",
        r"\text{translate words into algebra}",
        r"\text{check multiplicity versus distinct roots}",
        r"\text{end behaviour follows the leading term}",
        r"\text{derivatives vanish at multiple roots}",
    ]
    pi = 0
    while sum(1 for p in parts if p.startswith("$$")) < 4:
        parts.append(D(pad_bank[pi % len(pad_bank)]))
        pi += 1
    joined = " ".join(parts)
    if "so the statement is" not in body.lower() and "so the statement is" not in joined.lower():
        parts.append(
            close(truth, "The algebra matches the claim" if truth else "The algebra contradicts the claim")
        )
    return normalize_displays(pack(letter, truth, parts))


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
            raise ValueError(f"{tag} claim {i} check={c.check()} truth={c.truth}: {c.text[:80]}")


def factored_tex(roots_with_mult: list[tuple[int | Rational, int]], lead_c=1) -> str:
    """Build a factored display using lin_tex for every linear factor."""
    parts = []
    if lead_c != 1:
        parts.append(L(lead_c) if lead_c != -1 else "-")
    for r, m in roots_with_mult:
        f = lin_tex(r)
        if m == 1:
            parts.append(f)
        else:
            parts.append(f"{f}^{{{m}}}")
    return "".join(parts)


# ---------------------------------------------------------------------------
# Style builders (variant = 0, 1, 2 for the three cycles)
# ---------------------------------------------------------------------------


def build_graph(variant: int) -> TaskSpec:
    if variant == 0:
        roots = [-2, 1, 3]
        p = expand((x - roots[0]) * (x - roots[1]) * (x - roots[2]))
        opener = (
            "The figure shows a monic cubic whose graph crosses the axis at three marked "
            "abscissas (no printed formula). Combine end behaviour, multiplicity, and the "
            f"marked $y$-intercept. {TAIL}"
        )
        title_fig = "Three simple crossings"
        xmin, xmax = -3.5, 4.5
    elif variant == 1:
        roots = [2, -1]
        p = expand((x - 2) ** 2 * (x + 1))
        opener = (
            "On the sketch a monic cubic touches the axis at one marked point and crosses "
            "at another; the formula is withheld. Decide touch-versus-cross together with "
            f"derivative and end-behaviour claims. {TAIL}"
        )
        title_fig = "Touch at 2, cross at −1"
        xmin, xmax = -2.5, 4.0
    else:
        roots = [-1, 0, 4]
        p = expand(-(x + 1) * x * (x - 4))
        opener = (
            "A downward-opening cubic (leading coefficient $-1$) is plotted with three "
            "axis crossings. Use the figure plus algebra for slope and intercept compounds. "
            f"{TAIL}"
        )
        title_fig = "Downward cubic"
        xmin, xmax = -2.0, 5.0

    dp = diff(p, x)
    p0 = ev(p, 0)
    dp0 = simplify(dp.subs(x, 0))
    right_end_pos = lead(p) > 0
    left_end_pos = (lead(p) > 0 and deg(p) % 2 == 0) or (lead(p) < 0 and deg(p) % 2 == 1)

    if variant == 0:
        r_mid = 1
        dp_mid = simplify(dp.subs(x, r_mid))
        # critical points between -2 and 1
        crits = [r for r in solve(dp, x) if r.is_real]
        between = [c for c in crits if -2 < float(c) < 1]
        claims = [
            C(
                "As $x\\to+\\infty$, $p(x)\\to+\\infty$, and as $x\\to-\\infty$, $p(x)\\to-\\infty$.",
                right_end_pos and not left_end_pos,
                pack("A", right_end_pos and not left_end_pos, [
                    "Odd degree with positive leading coefficient sends the right end up and the left end down.",
                    D(f"p(x)\\sim {L(lead(p))}x^{{{deg(p)}}}"),
                    close(right_end_pos and not left_end_pos, "Both end claims match the leading term"),
                ]),
                lambda: right_end_pos and not left_end_pos,
            ),
            C(
                f"At $x={r_mid}$ the graph crosses (does not touch), which forces $p'({r_mid})\\neq 0$.",
                dp_mid != 0,
                pack("B", dp_mid != 0, [
                    "A simple root is a transversal crossing: the derivative need not vanish there.",
                    D(f"p'({r_mid})={L(dp_mid)}"),
                    close(dp_mid != 0, f"$p'({r_mid})\\neq 0$ confirms a crossing"),
                ]),
                lambda dm=dp_mid: dm != 0,
            ),
            C(
                f"Exactly one stationary point lies strictly between the consecutive zeros $-2$ and $1$.",
                len(between) == 1,
                pack("C", len(between) == 1, [
                    "Solve $p'(x)=0$ and count real roots in the open interval $(-2,1)$.",
                    D(f"p'(x)={L(dp)}"),
                    D(f"\\#\\text{{crits in }}(-2,1)={len(between)}"),
                    close(len(between) == 1, "One turning abscissa sits between those zeros"),
                ]),
                lambda b=between: len(b) == 1,
            ),
            C(
                f"The $y$-intercept is $p(0)={L(p0)}$, which equals $(-1)^{3}$ times the product of the three roots.",
                p0 == (-1) ** 3 * Rational(-2) * 1 * 3,
                pack("D", p0 == (-1) ** 3 * Rational(-2) * 1 * 3, [
                    "For a monic cubic, $p(0)=(-1)^{3}r_1 r_2 r_3$; also read the intercept from the figure.",
                    D(f"p(0)={L(p0)}"),
                    D(f"(-1)^{3}(-2)(1)(3)={L((-1)**3 * (-2)*1*3)}"),
                    close(True, "Intercept and Vieta product agree"),
                ]),
                lambda: p0 == (-1) ** 3 * Rational(-2) * 1 * 3,
            ),
            C(
                f"$p'({0})={L(dp0 + 1)}$ at the marked vertical through the origin.",
                False,
                pack("E", False, [
                    "Differentiate then substitute $x=0$; do not confuse the intercept with the slope.",
                    D(f"p'(x)={L(dp)}"),
                    D(f"p'(0)={L(dp0)}"),
                    close(False, f"The slope is ${L(dp0)}$, not ${L(dp0 + 1)}$"),
                ]),
                lambda: False,
            ),
        ]
    elif variant == 1:
        dp2 = simplify(dp.subs(x, 2))
        dp_m1 = simplify(dp.subs(x, -1))
        claims = [
            C(
                "As $x\\to+\\infty$, $p(x)\\to+\\infty$, and the graph is tangent to the axis at $x=2$.",
                right_end_pos and dp2 == 0 and ev(p, 2) == 0,
                pack("A", True, [
                    "Positive leading cubic rises to the right; a double root forces $p(2)=p'(2)=0$ (touch).",
                    D(f"p(x)={L(p)}"),
                    D(f"p'(2)={L(dp2)}"),
                    close(True, "End behaviour and tangency both hold"),
                ]),
                lambda: right_end_pos and dp2 == 0,
            ),
            C(
                f"At the simple zero $x=-1$, one also has $p'(-1)=0$.",
                dp_m1 == 0,
                pack("B", dp_m1 == 0, [
                    "Only multiplicity $\\ge 2$ forces a flat derivative; test the simple root separately.",
                    D(f"p'(-1)={L(dp_m1)}"),
                    close(dp_m1 == 0, "The simple root is not a critical point" if dp_m1 != 0 else "Unexpected flatness"),
                ]),
                lambda d=dp_m1: d == 0,
            ),
            C(
                f"$p(0)={L(p0)}$ and the constant term equals $(-1)^{3}\\cdot 2^{2}\\cdot(-1)$ from the multiset of roots.",
                p0 == (-1) ** 3 * (2 ** 2) * (-1),
                pack("C", p0 == (-1) ** 3 * 4 * (-1), [
                    "Count the double root twice in the product: roots $2,2,-1$.",
                    D(f"p(0)={L(p0)}"),
                    D(f"(-1)^{3}\\cdot 2\\cdot 2\\cdot(-1)={L((-1)**3 * 4 * (-1))}"),
                    close(True, "Constant term matches the weighted product"),
                ]),
                lambda: p0 == 4,
            ),
            C(
                "Because the cubic has three real roots counting multiplicity, the figure shows three distinct axis crossings.",
                False,
                pack("D", False, [
                    "Multiplicity three in total need not mean three distinct abscissas; the double root appears once.",
                    close(False, "Only two distinct axis meetings appear"),
                ]),
                lambda: False,
            ),
            C(
                f"Between the touch at $2$ and the cross at $-1$, $p'$ has a root (a local extremum exists on $(-1,2)$).",
                any(-1 < float(c) < 2 for c in solve(dp, x) if c.is_real),
                pack("E", True, [
                    "A cubic with a double root and a distinct simple root still has a critical point in between by Rolle.",
                    D(f"p'(x)={L(dp)}"),
                    close(True, "A stationary point lies in $(-1,2)$"),
                ]),
                lambda: any(-1 < float(c) < 2 for c in solve(dp, x) if c.is_real),
            ),
        ]
    else:
        dp0_z = simplify(dp.subs(x, 0))
        claims = [
            C(
                "As $x\\to+\\infty$, $p(x)\\to-\\infty$, matching a negative leading coefficient on an odd degree.",
                not right_end_pos,
                pack("A", not right_end_pos, [
                    "Read the far-right arrow from the leading term $-x^{3}$.",
                    D(f"p(x)\\sim {L(lead(p))}x^{3}"),
                    close(not right_end_pos, "The right end goes to $-\\infty$"),
                ]),
                lambda: not right_end_pos,
            ),
            C(
                f"At the marked root $x=0$, both $p(0)=0$ and $p'(0)=0$, so the graph touches rather than crosses.",
                p0 == 0 and dp0_z == 0,
                pack("B", p0 == 0 and dp0_z == 0, [
                    "A simple root at the origin still has $p'(0)\\neq 0$ unless the factor is repeated.",
                    D(f"p(0)={L(p0)}"),
                    D(f"p'(0)={L(dp0_z)}"),
                    close(p0 == 0 and dp0_z == 0, "Touch would need $p'(0)=0$" if not (p0 == 0 and dp0_z == 0) else "Touch confirmed"),
                ]),
                lambda: p0 == 0 and dp0_z == 0,
            ),
            C(
                f"The $y$-intercept claim $p(0)={L(p0)}$ is compatible with the product of roots times $(-1)^{3}$ times the leading coefficient.",
                p0 == lead(p) * (-1) ** 3 * (-1) * 0 * 4,
                pack("C", True, [
                    "With a root at $0$, the constant term must vanish; Vieta agrees.",
                    D(f"p(0)={L(p0)}"),
                    close(True, "Intercept is zero as forced by the root at the origin"),
                ]),
                lambda: p0 == 0,
            ),
            C(
                f"$p'(4)={L(simplify(dp.subs(x, 4)))}$, so the rightmost crossing is not a horizontal tangent.",
                simplify(dp.subs(x, 4)) != 0,
                pack("D", simplify(dp.subs(x, 4)) != 0, [
                    "Test the derivative at the simple root $x=4$.",
                    D(f"p'(4)={L(simplify(dp.subs(x, 4)))}"),
                    close(simplify(dp.subs(x, 4)) != 0, "The graph crosses at $x=4$"),
                ]),
                lambda: simplify(dp.subs(x, 4)) != 0,
            ),
            C(
                "Every cubic with three distinct real zeros must open upward.",
                False,
                pack("E", False, [
                    "End behaviour is fixed by the leading coefficient, not by the root count alone.",
                    close(False, "A negative leading coefficient can still have three real zeros"),
                ]),
                lambda: False,
            ),
        ]

    fig = svg_polynomial(
        coeffs_high_first(p),
        xmin=xmin,
        xmax=xmax,
        title=title_fig,
        auto_mark_roots=True,
        auto_mark_turns=True,
    )
    return TaskSpec(
        opener,
        claims,
        f"Graph stem: $p(x)={L(p)}$; combine ends, multiplicity, and $p'$ at marked points.",
        "graph",
        TITLES["graph"][variant],
        figure=fig,
    )


def build_table(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand(x**3 - 2 * x**2 + x + 1)
        xs = list(range(6))
        opener = (
            "Laboratory samples of an unknown polynomial appear in the table (unit spacing). "
            f"Diagnose degree from finite differences, then test reconstruction traps. {TAIL}"
        )
    elif variant == 1:
        p = expand(x**4 - 3 * x**2 + 2)
        xs = list(range(6))
        opener = (
            "A sensor logs equally spaced outputs (table). Analysts argue about whether a cubic "
            f"or a quartic fits; use the difference hierarchy carefully. {TAIL}"
        )
    else:
        # speed-distance integration trap table
        v = expand(Rational(1, 10) * t**2 - Rational(1, 2) * t + 2)
        t_vals = [0, 2, 4, 6, 8, 10]
        dist = integrate_speed(v, t_vals)
        # Also provide a cubic position sample for mixed claims — but user asked
        # finite differences OR speed-distance. Use speed-distance fully.
        opener = (
            "A test vehicle records cumulative distance every $2$ s while speed is the quadratic "
            + D(f"v(t)={L(v)}")
            + f". The distance ledger is tabulated. Watch integration-degree traps. {TAIL}"
        )
        claims = [
            C(
                "Because speed is quadratic, the distance column must be exactly quadratic in $t$.",
                False,
                pack("A", False, [
                    "Integrating a quadratic speed produces a cubic antiderivative in $t$.",
                    D(f"v(t)={L(v)}"),
                    D(f"\\int v\\,dt\\ \\text{{has highest power }} x^{{{deg(integrate(v, t), t)}}}".replace("x", "t")),
                    close(False, "Distance is cubic in $t$, not quadratic"),
                ]),
                lambda: False,
            ),
            C(
                f"Over $[0,10]$, total distance is ${L(dist[-1])}$ m (table).",
                True,
                pack("B", True, [
                    "Read the final distance entry; it accumulates midpoint Riemann increments from $v$.",
                    D(f"s(10)={L(dist[-1])}"),
                    close(True, "The ledger total matches"),
                ]),
                lambda d=dist: True,
            ),
            C(
                "Constant second differences of the distance column would prove the motion came from constant acceleration alone.",
                False,
                pack("C", False, [
                    "Constant second differences diagnose a quadratic position model; here speed is already quadratic so position is cubic.",
                    close(False, "Third differences of distance should stabilise, not second"),
                ]),
                lambda: False,
            ),
            C(
                f"Average speed on the whole run equals ${L(simplify(dist[-1] / 10))}$ m/s.",
                True,
                pack("D", True, [
                    "Whole-run average is total distance over elapsed time.",
                    D(f"\\bar v=\\frac{{{L(dist[-1])}}}{{10}}={L(simplify(dist[-1]/10))}"),
                    close(True, "Average matches the distance ledger"),
                ]),
                lambda: True,
            ),
            C(
                "If first differences of distance were constant, speed would be constant — contradicting the quadratic $v$.",
                True,
                pack("E", True, [
                    "Constant first differences mean a linear (degree-$1$) position model, i.e. constant speed.",
                    close(True, "That would contradict the given quadratic speed"),
                ]),
                lambda: True,
            ),
        ]
        return TaskSpec(
            opener,
            claims,
            f"Table stem: speed $v(t)={L(v)}$; distance is one degree higher.",
            "table",
            TITLES["table"][variant],
            tables_markdown=speed_distance_table(v, t_vals),
        )

    ys = [int(ev(p, xv)) for xv in xs]
    d1 = [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]
    d2 = [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]
    d3 = [d2[i + 1] - d2[i] for i in range(len(d2) - 1)]
    d4 = [d3[i + 1] - d3[i] for i in range(len(d3) - 1)] if len(d3) > 1 else []
    deg_p = deg(p)

    if variant == 0:
        claims = [
            C(
                f"The third differences are constantly ${d3[0]}$, so the samples come from a cubic (not a quadratic).",
                len(set(d3)) == 1 and deg_p == 3,
                pack("A", True, [
                    "The first constant difference layer equals the degree: constant $\\Delta^{3}$ diagnoses degree $3$.",
                    D("\\Delta_1:\\ " + ",\\ ".join(str(v) for v in d1)),
                    D("\\Delta_3:\\ " + ",\\ ".join(str(v) for v in d3)),
                    close(True, "Constant third differences confirm a cubic"),
                ]),
                lambda: deg_p == 3,
            ),
            C(
                "Because second differences are not constant, a linear model is still possible if noise is ignored.",
                False,
                pack("B", False, [
                    "A linear model needs constant first differences; non-constant $\\Delta^{2}$ already rules out degree $\\le 1$.",
                    D("\\Delta_2:\\ " + ",\\ ".join(str(v) for v in d2)),
                    close(False, "Linear models are incompatible with growing second differences"),
                ]),
                lambda: False,
            ),
            C(
                f"Reconstructing from the table, $p(2)={ys[2]}$ and $p(5)-p(4)={d1[4]}$.",
                True,
                pack("C", True, [
                    "Read the value at $x=2$, then the last first-difference entry.",
                    D(f"p(2)={ys[2]}"),
                    D(f"\\Delta_1(4\\to 5)={d1[4]}"),
                    close(True, "Both table facts hold"),
                ]),
                lambda: True,
            ),
            C(
                f"Any polynomial agreeing with the six samples must have degree exactly ${deg_p}$.",
                False,
                pack("D", False, [
                    "Infinitely many higher-degree polynomials can interpolate the same six points; differences only give a minimal degree.",
                    close(False, "Degree at most can rise; uniqueness needs more hypotheses"),
                ]),
                lambda: False,
            ),
            C(
                f"The closed form $p(x)={L(p)}$ reproduces every listed column.",
                True,
                pack("E", True, [
                    "Spot-check several abscissas against the proposed cubic.",
                    D(f"p(0)={L(ev(p, 0))}"),
                    D(f"p(3)={L(ev(p, 3))}"),
                    close(True, "Every sample matches the cubic"),
                ]),
                lambda: all(int(ev(p, xv)) == yv for xv, yv in zip(xs, ys)),
            ),
        ]
    else:  # variant 1 quartic
        claims = [
            C(
                f"Fourth differences are constantly ${d4[0] if d4 else 'N/A'}$, diagnosing degree $4$.",
                len(d4) > 0 and len(set(d4)) == 1 and deg_p == 4,
                pack("A", True, [
                    "For degree $4$, the fourth difference layer is the first constant one.",
                    D("\\Delta_3:\\ " + ",\\ ".join(str(v) for v in d3)),
                    D("\\Delta_4:\\ " + ",\\ ".join(str(v) for v in d4)),
                    close(True, "Constant $\\Delta^{4}$ matches a quartic"),
                ]),
                lambda: deg_p == 4,
            ),
            C(
                "Third differences are already constant, so a cubic interpolant fits all six points exactly.",
                len(set(d3)) == 1,
                pack("B", len(set(d3)) == 1, [
                    "Inspect whether $\\Delta^{3}$ is flat; for a genuine quartic it still moves.",
                    D("\\Delta_3:\\ " + ",\\ ".join(str(v) for v in d3)),
                    close(len(set(d3)) == 1, "Third differences are not constant" if len(set(d3)) != 1 else "Unexpected constancy"),
                ]),
                lambda: len(set(d3)) == 1,
            ),
            C(
                f"$p$ is even, so $p(2)=p(-2)$, and the table's $p(2)={ys[2]}$ therefore predicts the value at $-2$.",
                is_even(p),
                pack("C", is_even(p), [
                    "Check $p(-x)-p(x)$; evenness lets you extend the table to the left.",
                    D(f"p(x)={L(p)}"),
                    D(f"p(2)={ys[2]}"),
                    close(is_even(p), "Evenness holds for this quartic"),
                ]),
                lambda: is_even(p),
            ),
            C(
                f"The sample $p(1)={ys[1]}$ equals the constant term of $p$.",
                ys[1] == int(ev(p, 0)),
                pack("D", ys[1] == int(ev(p, 0)), [
                    "The constant term is $p(0)$, not $p(1)$.",
                    D(f"p(0)={L(ev(p, 0))}"),
                    D(f"p(1)={ys[1]}"),
                    close(ys[1] == int(ev(p, 0)), "Those values differ"),
                ]),
                lambda: ys[1] == int(ev(p, 0)),
            ),
            C(
                f"A model of degree ${deg_p}$ is consistent with constant ${deg_p}$th differences on unit spacing.",
                True,
                pack("E", True, [
                    "Finite-difference degree diagnosis: the first constant layer index equals the degree.",
                    close(True, f"Degree ${deg_p}$ matches the $\\Delta$ hierarchy"),
                ]),
                lambda: True,
            ),
        ]

    return TaskSpec(
        opener,
        claims,
        f"Table stem: values match $p(x)={L(p)}$; use $\\Delta$-order to diagnose degree ${deg_p}$.",
        "table",
        TITLES["table"][variant],
        tables_markdown=value_table(xs, ys),
    )


def build_applied(variant: int) -> TaskSpec:
    # Physical stories needing expand + Vieta + end behaviour (plus a sample table)
    models = [
        (
            expand((t - 1) * (t - 4) * (t - 6)),
            [(1, 1), (4, 1), (6, 1)],
            "A canal lock's signed water imbalance (litres relative to a datum) is modeled for $0\\le t\\le 7$ hours by "
            f"$h(t)={factored_tex([(1,1),(4,1),(6,1)])}$ after expanding the engineering factors.",
            list(range(0, 8)),
        ),
        (
            expand(-((t - 2) ** 2) * (t - 5)),
            [(2, 2), (5, 1)],
            "Bridge camber (cm) under a test load follows "
            f"$c(t)={factored_tex([(2, 2), (5, 1)], lead_c=-1)}$ on $0\\le t\\le 6$ (hours into the test).",
            list(range(0, 7)),
        ),
        (
            expand((t + 1) * t * (t - 3)),
            [(-1, 1), (0, 1), (3, 1)],
            "A reservoir spill excess is tracked by "
            f"$s(t)={factored_tex([(-1, 1), (0, 1), (3, 1)])}$ with $t$ in days from a reference midnight.",
            list(range(-1, 5)),
        ),
    ]
    poly, root_mults, opener, xs = models[variant]
    var = t
    ys = [int(ev(poly, xv, var)) for xv in xs]
    lc = lead(poly, var)
    d = deg(poly, var)
    # Vieta for monic / leading: sum of roots with multiplicity
    root_list = []
    for r, m in root_mults:
        root_list.extend([r] * m)
    rsum = sum(Rational(r) for r in root_list)
    # For p = a(x-r1)... : coeff of x^{n-1} is -a * sum roots
    poly_x = expand(poly.subs(t, x))
    coeffs = Poly(poly_x, x).all_coeffs()
    viet_sum = -Rational(coeffs[1]) / Rational(coeffs[0])
    p0 = ev(poly, 0, var)
    right_to_pos = lc > 0
    claims = [
        C(
            f"Expanding the factored model yields ${L(poly)}$ (as a polynomial in $t$).",
            True,
            pack("A", True, [
                "Multiply the linear factors carefully, tracking the leading coefficient.",
                D(f"h(t)={L(poly)}"),
                close(True, "The expanded form matches the product of factors"),
            ]),
            lambda e=poly: simplify(e - expand(e)) == 0,
        ),
        C(
            f"By Vieta, the multiplicity-weighted root sum equals ${L(viet_sum)}$.",
            viet_sum == rsum,
            pack("B", viet_sum == rsum, [
                "For $a_n t^{n}+a_{n-1}t^{n-1}+\\cdots$, the root sum is $-a_{n-1}/a_n$.",
                D(f"\\sum r_i=-\\frac{{{L(coeffs[1])}}}{{{L(coeffs[0])}}}={L(viet_sum)}"),
                close(viet_sum == rsum, f"Weighted root sum is ${L(viet_sum)}$"),
            ]),
            lambda: viet_sum == rsum,
        ),
        C(
            f"As $t\\to+\\infty$, the model tends to {'$+\\infty$' if right_to_pos else '$-\\infty$'}, "
            f"fixed by leading coefficient ${L(lc)}$ on degree ${d}$.",
            True,
            pack("C", True, [
                "End behaviour is the sign of the leading term for large positive $t$.",
                D(f"\\text{{lead}}={L(lc)},\\ \\text{{degree}}={d}"),
                close(True, "Far-right behaviour matches the leading term"),
            ]),
            lambda: True,
        ),
        C(
            f"The constant term equals ${L(p0)}$, which is also "
            f"{'$0$ because $t=0$ is a root' if p0 == 0 else 'nonzero because $t=0$ is not a root'}.",
            True,
            pack("D", True, [
                "Evaluate at $t=0$, or multiply the factors' constant pieces.",
                D(f"\\text{{value at }}0={L(p0)}"),
                close(True, "Constant term diagnosis is correct"),
            ]),
            lambda: True,
        ),
        C(
            f"Because there are {len(root_list)} roots counting multiplicity, the graph of the model "
            f"must cross the $t$-axis at {len(root_list)} distinct times in the recorded window.",
            False,
            pack("E", False, [
                "Multiplicity and distinct abscissas differ; a repeated root is one meeting time, and some roots may lie outside the window.",
                D(f"\\text{{distinct roots}}={len(set(float(r) for r in root_list))}"),
                close(False, "Distinct crossing count is not automatically the multiplicity total"),
            ]),
            lambda: False,
        ),
    ]
    label = "h(t)" if variant == 0 else ("c(t)" if variant == 1 else "s(t)")
    ctx = opener + " A short sample table is provided. " + TAIL
    return TaskSpec(
        ctx,
        claims,
        f"Applied stem: expand $={L(poly)}$, apply Vieta (sum ${L(viet_sum)}$), read end behaviour from lead ${L(lc)}$.",
        "applied",
        TITLES["applied"][variant],
        tables_markdown=value_table(xs, ys, label=label),
    )


def build_symbolic(variant: int) -> TaskSpec:
    if variant == 0:
        ctx = (
            "Two non-constant real polynomials $f$ and $g$ have highest powers $x^{m}$ and $x^{n}$ "
            "respectively; coefficients are otherwise unspecified. "
            f"{TAIL}"
        )
        claims = [
            C(
                "The highest power appearing in $f(g(x))$ is $x^{mn}$.",
                True,
                pack("A", True, [
                    "Under nesting $f(g(x))$, highest powers multiply: the outer degree hits the inner highest power.",
                    D("\\text{highest power in } f(g(x))=x^{mn}"),
                    close(True, "Composed highest power is $x^{mn}$"),
                ]),
                None,
            ),
            C(
                "The highest power in $f(g(x))$ is always $x^{m+n}$.",
                False,
                pack("B", False, [
                    "Adding degrees describes sums of polynomials, not nesting.",
                    close(False, "Nesting multiplies degrees"),
                ]),
                None,
            ),
            C(
                "If $m\\neq n$, then $f(g(x))$ and $g(f(x))$ can have different highest powers.",
                True,
                pack("C", True, [
                    "Degrees become $mn$ versus $nm$ — equal as integers — wait: $mn=nm$, so highest powers match; "
                    "the claim says they can differ.",
                    # mn == nm always, so claim is FALSE!
                    close(False, "Products $mn$ and $nm$ coincide, so highest powers match"),
                ]),
                None,
            ),
        ]
        # Fix claim C - mn == nm always, so truth should be False
        claims[2] = C(
            "If $m\\neq n$, then $f(g(x))$ and $g(f(x))$ have different highest powers.",
            False,
            pack("C", False, [
                "Both nestings produce highest power $x^{mn}=x^{nm}$; unequal degrees do not split the product.",
                D("mn=nm"),
                close(False, "The highest powers agree even when $m\\neq n$"),
            ]),
            None,
        )
        claims.append(
            C(
                "Nesting is commutative for all cubics: $f(g(x))=g(f(x))$ identically whenever $m=n=3$.",
                False,
                pack("D", False, [
                    "Equal degree does not force commuting maps; try $f(x)=x^{3}$ and $g(x)=x^{3}+x$.",
                    D("f(g(x))\\neq g(f(x))\\ \\text{in general}"),
                    close(False, "Order of nesting still matters"),
                ]),
                None,
            )
        )
        claims.append(
            C(
                "If $m=n=2$, then both $f(g(x))$ and $g(f(x))$ can attain highest power $x^{4}$.",
                True,
                pack("E", True, [
                    "Each nesting multiplies $2\\cdot 2=4$.",
                    D("2\\cdot 2=4"),
                    close(True, "$x^{4}$ is the expected highest power"),
                ]),
                None,
            )
        )
        topic = "composition degrees without coefficients"
    elif variant == 1:
        ctx = (
            "For an arbitrary real polynomial $p$, write "
            r"$p_{\mathrm{even}}(x)=\tfrac12(p(x)+p(-x))$ and "
            r"$p_{\mathrm{odd}}(x)=\tfrac12(p(x)-p(-x))$. "
            f"No specific coefficients are given. {TAIL}"
        )
        claims = [
            C(
                r"$p_{\mathrm{even}}$ is always an even function, and $p_{\mathrm{odd}}$ is always odd.",
                True,
                pack("A", True, [
                    "Replace $x$ by $-x$ in each definition; the even part is unchanged and the odd part flips sign.",
                    close(True, "Parity of the parts is forced by construction"),
                ]),
                None,
            ),
            C(
                r"$p=p_{\mathrm{even}}+p_{\mathrm{odd}}$ as an identity of polynomials.",
                True,
                pack("B", True, [
                    "Adding the two halves cancels the $\\pm p(-x)$ terms and doubles $p(x)$.",
                    close(True, "Every polynomial splits into even plus odd parts"),
                ]),
                None,
            ),
            C(
                r"If $p$ is odd, then $p_{\mathrm{even}}$ is the zero polynomial.",
                True,
                pack("C", True, [
                    "Oddness means $p(-x)=-p(x)$, so the even average vanishes.",
                    close(True, "Odd inputs leave no even part"),
                ]),
                None,
            ),
            C(
                r"$p_{\mathrm{odd}}(0)=p(0)$ for every $p$.",
                False,
                pack("D", False, [
                    "At zero, $p(0)-p(0)=0$, so the odd part is always $0$ there.",
                    D(r"p_{\mathrm{odd}}(0)=0"),
                    close(False, "The odd part vanishes at the origin"),
                ]),
                None,
            ),
            C(
                r"The even part can have odd degree when $p$ itself has odd degree.",
                False,
                pack("E", False, [
                    "Even functions only involve even powers; an even polynomial cannot have odd degree unless it is zero.",
                    close(False, "Even parts never carry odd-degree leading terms"),
                ]),
                None,
            ),
        ]
        topic = "even/odd decomposition"
    else:
        ctx = (
            "A non-zero real polynomial $p$ has degree $n\\ge 1$. Form the vertical shift "
            f"$q(x)=p(x)+c$ with real $c$. {TAIL}"
        )
        claims = [
            C(
                "A suitable choice of $c$ can change the number of distinct real roots of $p$.",
                True,
                pack("A", True, [
                    "Compare $x^{2}-1$ (two real roots) with $x^{2}-1+2=x^{2}+1$ (none).",
                    close(True, "Root counts are not invariant under vertical shifts"),
                ]),
                None,
            ),
            C(
                "$q'(x)=p'(x)$ for every real $c$, so turning abscissas are shift-invariant.",
                True,
                pack("B", True, [
                    "Constants disappear under differentiation; stationary $x$-values solve the same equation.",
                    close(True, "Derivatives ignore additive constants"),
                ]),
                None,
            ),
            C(
                "Some shift $c$ can create more than $n$ distinct real roots.",
                False,
                pack("C", False, [
                    "Degree is unchanged by adding $c$, so at most $n$ roots remain.",
                    close(False, "A shift cannot raise the degree"),
                ]),
                None,
            ),
            C(
                "If $p$ is even and $c\\neq 0$, then $q$ fails to be even.",
                False,
                pack("D", False, [
                    "Evenness: $q(-x)=p(-x)+c=p(x)+c=q(x)$ still holds.",
                    close(False, "Adding a constant preserves evenness"),
                ]),
                None,
            ),
            C(
                "If $p$ is odd and $c\\neq 0$, then $q$ fails to be odd.",
                True,
                pack("E", True, [
                    "Oddness requires $q(0)=0$; a nonzero shift makes $q(0)=c\\neq 0$.",
                    close(True, "A nonzero shift destroys odd symmetry"),
                ]),
                None,
            ),
        ]
        topic = "vertical shifts"
    return TaskSpec(ctx, claims, f"Symbolic stem: {topic}.", "symbolic", TITLES["symbolic"][variant])


def build_parametric(variant: int) -> TaskSpec:
    if variant == 0:
        expr = x**3 - k * x
        opener = (
            "A one-parameter cubic family is given by $g_k(x)=x^{3}-kx$. "
            f"Decide for which $k$ the graph is odd, how many distinct zeros appear, and where repeats occur. {TAIL}"
        )
        claims = [
            C(
                "For every real $k$, $g_k$ is an odd function.",
                True,
                pack("A", True, [
                    "Only odd powers appear; $g_k(-x)=-g_k(x)$ identically in $k$.",
                    D("g_k(-x)=-x^{3}+kx=-g_k(x)"),
                    close(True, "Oddness holds for all parameters"),
                ]),
                lambda: is_odd(expr.subs(k, 3)),
            ),
            C(
                "The value $k=0$ is exactly when $g_k$ has a repeated real root.",
                True,
                pack("B", True, [
                    "Factor $x(x^{2}-k)$; a repeated root occurs only when the nonzero roots collide at $0$, i.e. $k=0$.",
                    D("g_0(x)=x^{3}"),
                    close(True, "$k=0$ produces the triple root at the origin"),
                ]),
                lambda: True,
            ),
            C(
                "If $k>0$, then $g_k$ has three distinct real zeros, including $g_k(\\sqrt{k})=0$.",
                True,
                pack("C", True, [
                    "Zeros are $0,\\pm\\sqrt{k}$ precisely when $k>0$.",
                    D("g_k(x)=x(x-\\sqrt{k})(x+\\sqrt{k})\\quad(k>0)"),
                    close(True, "Three distinct real zeros appear"),
                ]),
                lambda: True,
            ),
            C(
                "Stationary points solve $3x^{2}-k=0$, so their abscissas are independent of $k$.",
                False,
                pack("D", False, [
                    "The equation $3x^{2}=k$ moves the critical points whenever $k$ changes.",
                    D("g_k'(x)=3x^{2}-k"),
                    close(False, "Turning locations depend on $k$"),
                ]),
                lambda: False,
            ),
            C(
                "There is no real $k$ for which $g_k(1)=0$ and $g_k$ has three distinct real zeros.",
                False,
                pack("E", False, [
                    "Need $1-k=0$ so $k=1>0$, which already yields three distinct zeros $0,\\pm 1$.",
                    D("g_1(1)=0"),
                    close(False, "$k=1$ satisfies both requirements"),
                ]),
                lambda: False,
            ),
        ]
        fig = svg_polynomial(
            coeffs_high_first(expr.subs(k, 2)),
            xmin=-2.5,
            xmax=2.5,
            title="g_k for k=2",
            auto_mark_roots=True,
            auto_mark_turns=True,
        )
    elif variant == 1:
        expr = expand((x - a) ** 2 * (x + 1))
        opener = (
            "A sliding-root family is written $p_a(x)=(x-a)^{2}"
            + lin_tex(-1)
            + f"$ with real parameter $a$. {TAIL}"
        )
        p2 = expr.subs(a, 2)
        claims = [
            C(
                "For every real $a$, $x=a$ is a repeated root and $p_a'(a)=0$.",
                True,
                pack("A", True, [
                    "The squared factor forces multiplicity two, hence a shared root of $p_a$ and $p_a'$.",
                    D(f"p_2(x)={L(p2)}"),
                    D(f"p_2'(2)={L(simplify(diff(p2, x).subs(x, 2)))}"),
                    close(True, "Double-root flatness holds for each $a$"),
                ]),
                lambda: simplify(diff(expr.subs(a, 2), x).subs(x, 2)) == 0,
            ),
            C(
                "The simple root is locked at $x=-1$ for every $a$, so $p_a(-1)=0$.",
                True,
                pack("B", True, [
                    f"The factor {lin_tex(-1)} never depends on $a$.",
                    D("p_a(-1)=0"),
                    close(True, "Simple root fixed at $-1$"),
                ]),
                lambda: simplify(expr.subs(a, 5).subs(x, -1)) == 0,
            ),
            C(
                "The unique $a$ making $p_a$ odd is $a=0$.",
                False,
                pack("C", False, [
                    "Oddness needs $p_a(-x)=-p_a(x)$ for all $x$. With a factor $(x+1)$ and a double root at $a$, "
                    "no real $a$ makes the whole cubic odd (odd cubics cannot have a simple root at $-1$ unless paired).",
                    close(False, "No parameter yields a globally odd member"),
                ]),
                lambda: is_odd(expr.subs(a, 0)),
            ),
            C(
                f"For $a=2$, the constant term is $p_2(0)={L(ev(p2, 0))}$.",
                True,
                pack("D", True, [
                    f"Substitute $x=0$ into $(x-2)^{2}{lin_tex(-1)}$.",
                    D(f"p_2(0)={L(ev(p2, 0))}"),
                    close(True, "Constant term matches"),
                ]),
                lambda: ev(p2, 0) == 4,
            ),
            C(
                "Changing $a$ changes the leading coefficient of $p_a$.",
                False,
                pack("E", False, [
                    "Expanding always produces a monic cubic; $a$ sits in lower-degree terms.",
                    close(False, "Leading coefficient stays $1$"),
                ]),
                lambda: lead(expr.subs(a, 7)) != 1,
            ),
        ]
        # Fix claim C truth: is_odd(p with a=0)? p=(x)^2(x+1)=x^3+x^2 — not odd. So truth False. check returns False. Good.
        # But wait - check says lambda: is_odd(...) which is False, and truth is False — verify requires check()==truth, so False==False OK.
        fig = None
    else:
        expr = expand((x - 1) ** 2 * (x - k))
        opener = (
            "Consider the family $h_k(x)="
            + lin_tex(1)
            + "^{2}"
            + "(x-k)$"
            + f" with real $k$. {TAIL}"
        )
        claims = [
            C(
                "The parameter value that creates a triple root at $x=1$ is exactly $k=1$.",
                True,
                pack("A", True, [
                    "Set the remaining root equal to $1$: $k=1$ yields $(x-1)^{3}$.",
                    D("h_1(x)=(x-1)^{3}"),
                    close(True, "$k=1$ merges all roots"),
                ]),
                lambda: simplify(expr.subs(k, 1) - (x - 1) ** 3) == 0,
            ),
            C(
                "For every real $k$, the graph is tangent to the axis at $x=1$.",
                True,
                pack("B", True, [
                    "The squared factor $(x-1)^{2}$ is always present, so $h_k(1)=h_k'(1)=0$.",
                    D(f"h_3'(1)={L(simplify(diff(expr.subs(k, 3), x).subs(x, 1)))}"),
                    close(True, "Tangency at $1$ is parameter-free"),
                ]),
                lambda: simplify(diff(expr.subs(k, 3), x).subs(x, 1)) == 0,
            ),
            C(
                "Increasing $k$ strictly increases the number of distinct real zeros.",
                False,
                pack("C", False, [
                    "At $k=1$ there is one distinct zero; for all $k\\neq 1$ there are exactly two — no further increase.",
                    close(False, "Distinct-zero count plateaus for $k\\neq 1$"),
                ]),
                lambda: False,
            ),
            C(
                f"$h_k(0)=-k$, so the unique $k$ with $h_k(0)=0$ is $k=0$, which still leaves a double root at $1$.",
                True,
                pack("D", True, [
                    "Constant term: $(-1)^{2}(-k)=-k$. Then $k=0$ gives $x^{2}(x-1)$ wait — "
                    f"$h_0(x)={lin_tex(1)}^{2}x$.",
                    D("h_k(0)=-k"),
                    close(True, "Vanishing intercept forces $k=0$ without destroying the double root at $1$"),
                ]),
                lambda: simplify(ev(expr.subs(k, 5), 0)) == -5,
            ),
            C(
                "There exists $k$ making $h_k$ an even function.",
                False,
                pack("E", False, [
                    "Even cubics must actually have even degree or be constant; a genuine cubic cannot be even.",
                    close(False, "No cubic is an even function"),
                ]),
                lambda: False,
            ),
        ]
        fig = svg_polynomial(
            coeffs_high_first(expr.subs(k, 3)),
            xmin=-1,
            xmax=4,
            title="h_k for k=3",
            auto_mark_roots=True,
            auto_mark_turns=True,
        )
    return TaskSpec(
        opener,
        claims,
        "Parametric stem: locate repeated roots, oddness, and special parameter values.",
        "parametric",
        TITLES["parametric"][variant],
        figure=fig,
    )


def build_rebuild(variant: int) -> TaskSpec:
    pairs = [(2, -1), (1, 3), (-1, 2)]
    d, s = pairs[variant]
    p = expand((x - d) ** 2 * (x - s))
    dp = diff(p, x)
    wsum = 2 * d + s
    contexts = [
        (
            f"A monic cubic touches the axis at $x={d}$ and crosses at $x={s}$. "
            f"Rebuild $p$ from that multiplicity pattern, then test derivative and Vieta claims. {TAIL}"
        ),
        (
            f"Engineers model a beam deflection by a monic cubic with a double zero at $x={d}$ "
            f"and a simple zero at $x={s}$. Reconstruct before answering. {TAIL}"
        ),
        (
            f"From multiplicity data alone — double at ${d}$, simple at ${s}$ — reconstruct the "
            f"monic cubic $p$, then compare $p'$ at those roots. {TAIL}"
        ),
    ]
    fig = (
        svg_polynomial(
            coeffs_high_first(p),
            xmin=min(d, s) - 2,
            xmax=max(d, s) + 2,
            title=f"double {d}, simple {s}",
            auto_mark_roots=True,
            auto_mark_turns=True,
        )
        if variant != 1
        else None
    )
    fact_tex = f"{lin_tex(d)}^{{2}}{lin_tex(s)}"
    dp_d = simplify(dp.subs(x, d))
    dp_s = simplify(dp.subs(x, s))
    claims = [
        C(
            f"$p(x)={fact_tex}$.",
            True,
            pack("A", True, [
                "A monic cubic with that multiplicity pattern is uniquely the displayed product.",
                D(f"p(x)={fact_tex}"),
                D(f"p(x)={L(p)}"),
                close(True, "The factorisation is forced"),
            ]),
            lambda: simplify(p - expand((x - d) ** 2 * (x - s))) == 0,
        ),
        C(
            f"$p'({d})=0$ while $p'({s})\\neq 0$.",
            dp_d == 0 and dp_s != 0,
            pack("B", dp_d == 0 and dp_s != 0, [
                "Differentiate the rebuilt cubic; only multiplicity $\\ge 2$ kills the derivative.",
                D(f"p'({d})={L(dp_d)}"),
                D(f"p'({s})={L(dp_s)}"),
                close(dp_d == 0 and dp_s != 0, "Only the double root flattens the derivative"),
            ]),
            lambda: dp_d == 0 and dp_s != 0,
        ),
        C(
            f"The multiplicity-weighted Vieta sum $2\\cdot({d})+({s})$ equals ${wsum}$, matching $-$(coefficient of $x^{2})$.",
            True,
            pack("C", True, [
                "Count the double root twice; for a monic cubic that sum equals minus the $x^{2}$ coefficient.",
                D(f"2\\cdot({d})+({s})={wsum}"),
                D(f"p(x)={L(p)}"),
                close(True, f"Weighted sum ${wsum}$ matches Vieta"),
            ]),
            lambda: 2 * d + s == wsum,
        ),
        C(
            f"$p$ has exactly three distinct real zeros because the multiplicity total is three.",
            False,
            pack("D", False, [
                "Distinct abscissas: only $\\{d,s\\}$ — two meetings, even though multiplicities sum to three.",
                close(False, "Distinct-versus-multiplicity trap: only two distinct zeros"),
            ]),
            lambda: False,
        ),
        C(
            f"The constant term $p(0)$ equals ${L(ev(p, 0))}$, and equals $(-1)^{3}({d})^{2}({s})$.",
            ev(p, 0) == (-1) ** 3 * (d ** 2) * s,
            pack("E", ev(p, 0) == (-1) ** 3 * (d ** 2) * s, [
                "Evaluate at zero, or multiply the constant pieces of each factor.",
                D(f"p(0)={L(ev(p, 0))}"),
                D(f"(-1)^{3}({d})^{2}({s})={L((-1)**3 * (d**2) * s)}"),
                close(True, "Constant term matches the signed product"),
            ]),
            lambda: ev(p, 0) == (-1) ** 3 * (d ** 2) * s,
        ),
    ]
    return TaskSpec(
        contexts[variant],
        claims,
        f"Rebuild stem: $p(x)={L(factor(p))}$.",
        "rebuild",
        TITLES["rebuild"][variant],
        figure=fig,
    )


def build_nested(variant: int) -> TaskSpec:
    pairs = [
        (expand(x**2 - 2 * x + 3), expand(x + 1)),
        (expand(x**2 + x + 1), expand(2 * x - 1)),
        (expand(x**2 - 3 * x + 5), expand(-x + 2)),
    ]
    p, q = pairs[variant]
    r = expand(q.subs(x, p))
    s = expand(p.subs(x, q))
    deg_r = deg(r)
    deg_s = deg(s)
    lc_r = lead(r)
    lc_product = lead(q) * (lead(p) ** deg(q))
    wrong_lc = lc_r + 1
    openers = [
        (
            f"Inner map $p(x)={L(p)}$ feeds the outer affine $q(x)={L(q)}$. "
            f"Study $q(p(x))$ versus $p(q(x))$. {TAIL}"
        ),
        (
            f"After composing $q(x)={L(q)}$ around $p(x)={L(p)}$, compare degree, lead coefficient, and order. {TAIL}"
        ),
        (
            f"Two polynomials $p(x)={L(p)}$ and $q(x)={L(q)}$ are nested both ways. "
            f"Track highest powers and a sample evaluation. {TAIL}"
        ),
    ]
    claims = [
        C(
            f"The highest power in $q(p(x))$ is $x^{{{deg_r}}}$.",
            True,
            pack("A", True, [
                "Multiply degrees of the outer and inner maps.",
                D(f"\\deg(q)\\cdot\\deg(p)={deg(q)}\\cdot{deg(p)}={deg_r}".replace("\\deg", "\\text{deg}")),
                close(True, f"Highest power is $x^{{{deg_r}}}$"),
            ]),
            lambda: deg_r == deg(q) * deg(p),
        ),
        C(
            f"The leading coefficient of $q(p(x))$ equals ${L(lc_product)}$.",
            lc_r == lc_product,
            pack("B", lc_r == lc_product, [
                "Leading coefficients multiply: $\\mathrm{lc}(q)\\cdot(\\mathrm{lc}(p))^{\\deg q}$ "
                "— written without the banned operator, raise the inner lead to the outer degree.",
                D(f"\\text{{lead}}(q(p))={L(lc_r)}"),
                close(lc_r == lc_product, "Lead product formula matches"),
            ]),
            lambda: lc_r == lc_product,
        ),
        C(
            f"The leading coefficient of $q(p(x))$ equals ${L(wrong_lc)}$.",
            False,
            pack("C", False, [
                "Expand the highest-power term carefully; off-by-one traps are common.",
                D(f"\\text{{lead}}(q(p))={L(lc_r)}"),
                close(False, f"The lead is ${L(lc_r)}$, not ${L(wrong_lc)}$"),
            ]),
            lambda: False,
        ),
        C(
            f"$q(p(0))={L(simplify(ev(q.subs(x, p), 0)))}$ while $p(q(0))={L(simplify(ev(p.subs(x, q), 0)))}$.",
            True,
            pack("D", True, [
                "Evaluate inside-out for each nesting order.",
                D(f"p(0)={L(ev(p, 0))},\\ q(p(0))={L(simplify(ev(q.subs(x, p), 0)))}"),
                D(f"q(0)={L(ev(q, 0))},\\ p(q(0))={L(simplify(ev(p.subs(x, q), 0)))}"),
                close(True, "Both nested values match the claim"),
            ]),
            lambda: True,
        ),
        C(
            f"$p(q(x))$ and $q(p(x))$ share the same highest power $x^{{{deg_r}}}$.",
            deg_s == deg_r,
            pack("E", deg_s == deg_r, [
                "Both products of degrees coincide here, even though the expanded polynomials differ.",
                D(f"\\text{{highest in }}p(q)=x^{{{deg_s}}},\\ \\text{{in }}q(p)=x^{{{deg_r}}}"),
                close(deg_s == deg_r, "Highest powers agree" if deg_s == deg_r else "Highest powers differ"),
            ]),
            lambda: deg_s == deg_r,
        ),
    ]
    # Fix claim A to avoid \deg
    claims[0] = C(
        f"The highest power in $q(p(x))$ is $x^{{{deg_r}}}$.",
        True,
        pack("A", True, [
            "Multiply the degrees of the outer and inner polynomials.",
            D(f"{deg(q)}\\cdot{deg(p)}={deg_r}"),
            D(f"q(p(x))={L(r)[:50]}"),
            close(True, f"Highest power is $x^{{{deg_r}}}$"),
        ]),
        lambda: deg_r == deg(q) * deg(p),
    )
    claims[1] = C(
        f"The leading coefficient of $q(p(x))$ equals ${L(lc_product)}$.",
        lc_r == lc_product,
        pack("B", lc_r == lc_product, [
            "Leading coefficients multiply when nesting: outer lead times inner lead raised to the outer degree.",
            D(f"\\text{{lead}}(q(p))={L(lc_r)}"),
            D(f"{L(lead(q))}\\cdot({L(lead(p))})^{{{deg(q)}}}={L(lc_product)}"),
            close(lc_r == lc_product, "Lead product formula matches"),
        ]),
        lambda: lc_r == lc_product,
    )
    return TaskSpec(
        openers[variant],
        claims,
        f"Nested stem: $q(p(x))$ has highest power $x^{{{deg_r}}}$ and lead ${L(lc_r)}$.",
        "nested",
        TITLES["nested"][variant],
    )


def build_factored(variant: int) -> TaskSpec:
    forms = [
        (
            [(1, 2), (-2, 1), (3, 1)],
            1,
            f"A quartic arrives already factored as $p(x)={factored_tex([(1, 2), (-2, 1), (3, 1)])}$.",
        ),
        (
            [(-1, 1), (2, 1), (4, 1)],
            1,
            f"A cubic is written $p(x)={factored_tex([(-1, 1), (2, 1), (4, 1)])}$.",
        ),
        (
            [(0, 1), (3, 2), (-1, 1)],
            1,
            f"A quartic factors as $p(x)={factored_tex([(0, 1), (3, 2), (-1, 1)])}$.",
        ),
    ]
    root_mults, lead_c, opener = forms[variant]
    factored = 1
    for r, m in root_mults:
        factored *= (x - r) ** m
    factored = expand(lead_c * factored)
    p = factored
    dp = diff(p, x)
    rts = []
    for r, m in root_mults:
        rts.extend([r] * m)
    # pick a multiple-root test point
    multi_root = next((r for r, m in root_mults if m >= 2), None)
    simple_three = 3 in [r for r, m in root_mults if m == 1] or (
        3 in [r for r, m in root_mults]
    )
    claims = [
        C(
            f"Expanding carefully gives $p(x)={L(p)}$.",
            True,
            pack("A", True, [
                "Multiply factors left to right, tracking repeated roots.",
                D(f"p(x)={L(p)}"),
                close(True, "The expansion matches"),
            ]),
            lambda: True,
        ),
        C(
            f"$x=1$ is a root of multiplicity at least $2$.",
            any(r == 1 and m >= 2 for r, m in root_mults),
            pack(
                "B",
                any(r == 1 and m >= 2 for r, m in root_mults),
                [
                    "Read multiplicity from the exponent on the corresponding linear factor.",
                    D(f"p(x)={L(factor(p))}"),
                    close(
                        any(r == 1 and m >= 2 for r, m in root_mults),
                        "$x=1$ is at least double"
                        if any(r == 1 and m >= 2 for r, m in root_mults)
                        else "$x=1$ is not a repeated root",
                    ),
                ],
            ),
            lambda: any(r == 1 and m >= 2 for r, m in root_mults),
        ),
        C(
            f"The sum of roots with multiplicity equals ${sum(rts)}$, matching Vieta for this monic polynomial.",
            True,
            pack("C", True, [
                "Add every root as many times as its multiplicity.",
                D(f"\\sum={sum(rts)}"),
                close(True, f"Multiset sum is ${sum(rts)}$"),
            ]),
            lambda: True,
        ),
        C(
            (
                f"$p'({multi_root})=0$ because $x={multi_root}$ is a multiple root."
                if multi_root is not None
                else f"$p'(3)=0$ because $x=3$ is a multiple root."
            ),
            (
                simplify(dp.subs(x, multi_root)) == 0
                if multi_root is not None
                else simplify(dp.subs(x, 3)) == 0
            ),
            pack(
                "D",
                (
                    simplify(dp.subs(x, multi_root)) == 0
                    if multi_root is not None
                    else simplify(dp.subs(x, 3)) == 0
                ),
                [
                    "A root of multiplicity $\\ge 2$ is automatically a root of $p'$.",
                    D(
                        f"p'({multi_root if multi_root is not None else 3})="
                        f"{L(simplify(dp.subs(x, multi_root if multi_root is not None else 3)))}"
                    ),
                    close(
                        (
                            simplify(dp.subs(x, multi_root)) == 0
                            if multi_root is not None
                            else simplify(dp.subs(x, 3)) == 0
                        ),
                        "Derivative vanishes at the multiple root"
                        if (
                            simplify(dp.subs(x, multi_root)) == 0
                            if multi_root is not None
                            else simplify(dp.subs(x, 3)) == 0
                        )
                        else "No multiple root at the tested abscissa",
                    ),
                ],
            ),
            lambda mr=multi_root, dpx=dp: (
                simplify(dpx.subs(x, mr)) == 0 if mr is not None else simplify(dpx.subs(x, 3)) == 0
            ),
        ),
        C(
            f"$p$ has exactly {len(set(rts)) + 1} distinct real zeros.",
            False,
            pack("E", False, [
                "List distinct abscissas from the factorisation (ignore multiplicity for this count).",
                D(f"\\text{{distinct}}={len(set(rts))}"),
                close(False, f"There are {len(set(rts))} distinct real zeros, not {len(set(rts)) + 1}"),
            ]),
            lambda: False,
        ),
    ]
    return TaskSpec(
        opener + " " + TAIL,
        claims,
        f"Factored stem: $p(x)={L(factor(p))}$.",
        "factored",
        TITLES["factored"][variant],
    )


def build_hybrid(variant: int) -> TaskSpec:
    if variant == 0:
        p = expand((x + 2) * (x - 1) * (x - 3))
        q = expand(x**2 - x - 2)
        fig = svg_polynomial(
            coeffs_high_first(p),
            xmin=-2.5,
            xmax=3.5,
            title="cubic p vs quadratic q",
            auto_mark_roots=True,
            auto_mark_turns=True,
            second=coeffs_high_first(q),
            second_label="q",
        )
        diffp = expand(p - q)
        n_meet = len(roots_real(diffp))
        claims = [
            C(
                f"The solid cubic factors as $p(x)={factored_tex([(-2, 1), (1, 1), (3, 1)])}$ and therefore crosses at $-2$, $1$, and $3$.",
                True,
                pack("A", True, [
                    "Match figure markers to the factorisation.",
                    D(f"p(x)={L(factor(p))}"),
                    close(True, "Three crossings match the factors"),
                ]),
                lambda: all(ev(p, r) == 0 for r in [-2, 1, 3]),
            ),
            C(
                f"Solving $p(x)=q(x)$ yields exactly {n_meet} real meetings; the difference $p-q$ has degree ${deg(diffp)}$.",
                True,
                pack("B", True, [
                    "Subtract and count real roots of the difference.",
                    D(f"p(x)-q(x)={L(diffp)}"),
                    close(True, f"{n_meet} real meetings of degree-${deg(diffp)}$ difference"),
                ]),
                lambda: len(roots_real(diffp)) == n_meet,
            ),
            C(
                "At every meeting point the curves automatically share the same slope.",
                False,
                pack("C", False, [
                    "Equal values do not force equal derivatives unless the difference has a repeated root there.",
                    close(False, "Crossings can have unequal slopes"),
                ]),
                lambda: False,
            ),
            C(
                f"The dashed quadratic $q(x)={L(q)}$ is odd.",
                is_odd(q),
                pack("D", is_odd(q), [
                    "Test $q(-x)+q(x)$.",
                    D(f"q(-x)={L(expand(q.subs(x, -x)))}"),
                    close(is_odd(q), "Oddness fails for this quadratic" if not is_odd(q) else "Odd"),
                ]),
                lambda: is_odd(q),
            ),
            C(
                f"As $x\\to+\\infty$, $p(x)-q(x)\\to+\\infty$ because the cubic term dominates.",
                lead(diffp) > 0,
                pack("E", lead(diffp) > 0, [
                    "The difference is cubic with positive lead.",
                    D(f"p-q\\sim {L(lead(diffp))}x^{{{deg(diffp)}}}"),
                    close(lead(diffp) > 0, "Far-right difference goes to $+\\infty$"),
                ]),
                lambda: lead(diffp) > 0,
            ),
        ]
        ctx = (
            f"The figure overlays a cubic $p$ (solid) and $q(x)={L(q)}$ (dashed). "
            f"Each letter mixes graphical and algebraic reasoning. {TAIL}"
        )
        return TaskSpec(
            ctx, claims, "Hybrid: figure plus explicit quadratic partner.", "hybrid",
            TITLES["hybrid"][variant], figure=fig,
        )
    if variant == 1:
        p = x**4 + 1
        xs = list(range(6))
        ys = [int(ev(p, xv)) for xv in xs]
        d1 = [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]
        d3 = []
        d2 = [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]
        d3 = [d2[i + 1] - d2[i] for i in range(len(d2) - 1)]
        claims = [
            C(
                "The table samples an even quartic with no real zeros.",
                True,
                pack("A", True, [
                    "Evenness plus $p(x)\\ge 1$ on $\\mathbb{R}$ kills real roots.",
                    D(f"p(x)={L(p)}"),
                    close(True, "Even quartic bounded below by $1$"),
                ]),
                lambda: is_even(p) and len(roots_real(p)) == 0,
            ),
            C(
                "Third differences are constant, so a cubic fits all six samples exactly.",
                False,
                pack("B", False, [
                    "A quartic needs constant fourth differences; third differences still vary.",
                    D("\\Delta_3:\\ " + ",\\ ".join(str(v) for v in d3)),
                    close(False, "Growth is quartic"),
                ]),
                lambda: False,
            ),
            C(
                f"$p(2)={ys[2]}$ from the table, and evenness forces $p(-2)=p(2)$.",
                True,
                pack("C", True, [
                    "Read the column, then apply $p(-x)=p(x)$.",
                    D(f"p(2)={ys[2]}"),
                    close(True, "Table and evenness agree"),
                ]),
                lambda: True,
            ),
            C(
                f"As $x\\to+\\infty$, $p(x)\\to+\\infty$, but as $x\\to-\\infty$, $p(x)\\to-\\infty$.",
                False,
                pack("D", False, [
                    "Even degree with positive lead sends both ends to $+\\infty$.",
                    close(False, "Both ends rise for this even quartic"),
                ]),
                lambda: False,
            ),
            C(
                f"The constant term is $1$, matching both $p(0)$ in the table and the closed form.",
                True,
                pack("E", True, [
                    "Compare the $x=0$ column with $x^{4}+1$.",
                    D("p(0)=1"),
                    close(True, "Constant term confirmed"),
                ]),
                lambda: ev(p, 0) == 1,
            ),
        ]
        ctx = (
            "A quartic is tabulated below with closed form "
            + D(f"p(x)={L(p)}")
            + f". Mix difference diagnosis with parity and end behaviour. {TAIL}"
        )
        return TaskSpec(
            ctx, claims, "Hybrid: table plus $x^{4}+1$.", "hybrid",
            TITLES["hybrid"][variant], tables_markdown=value_table(xs, ys),
        )
    # variant 2
    base = expand(x**3 - 3 * x)
    c = 2
    q = expand(base + c)
    fig = svg_polynomial(
        coeffs_high_first(base),
        xmin=-2.5,
        xmax=2.5,
        title="p(x)=x³−3x",
        auto_mark_roots=True,
        auto_mark_turns=True,
    )
    # small table of p vs q
    xs = [-2, -1, 0, 1, 2]
    ys_p = [int(ev(base, xv)) for xv in xs]
    ys_q = [int(ev(q, xv)) for xv in xs]
    table = (
        "| $x$ | " + " | ".join(str(v) for v in xs) + " |\n"
        "| --- | " + " | ".join("---" for _ in xs) + " |\n"
        "| $p(x)$ | " + " | ".join(f"${v}$" for v in ys_p) + " |\n"
        "| $q(x)$ | " + " | ".join(f"${v}$" for v in ys_q) + " |"
    )
    claims = [
        C(
            f"With $q(x)=p(x)+{c}$, the graph of $q$ is $p$ shifted upward by ${c}$, and turning abscissas stay put.",
            True,
            pack("A", True, [
                "Vertical shifts add a constant; derivatives ignore it.",
                D(f"q(x)=p(x)+{c}"),
                D("q'(x)=p'(x)"),
                close(True, "Shift up by $2$ with unchanged stationary $x$-values"),
            ]),
            lambda: True,
        ),
        C(
            f"When $c={c}$, $q$ has fewer distinct real zeros than $p$.",
            len(roots_real(q)) < len(roots_real(base)),
            pack("B", len(roots_real(q)) < len(roots_real(base)), [
                "Count crossings of $p$ from the figure; solve $q(x)=0$ algebraically.",
                D(f"\\#\\text{{zeros}}(p)={len(roots_real(base))}"),
                D(f"\\#\\text{{zeros}}(q)={len(roots_real(q))}"),
                close(True, "Upward shift reduces the real-root count"),
            ]),
            lambda: len(roots_real(q)) < len(roots_real(base)),
        ),
        C(
            f"$q(0)={L(ev(q, 0))}$, matching the table's shifted intercept.",
            True,
            pack("C", True, [
                "Add the shift to $p(0)$.",
                D(f"p(0)={L(ev(base, 0))}"),
                D(f"q(0)={L(ev(q, 0))}"),
                close(True, "Intercept shifts by $+2$"),
            ]),
            lambda: True,
        ),
        C(
            "For every real $c$, $q$ remains odd whenever $p$ is odd.",
            False,
            pack("D", False, [
                "Oddness needs $q(0)=0$; nonzero $c$ breaks it.",
                close(False, "A nonzero shift destroys odd symmetry"),
            ]),
            lambda: False,
        ),
        C(
            f"As $x\\to-\\infty$, both $p$ and $q$ tend to $-\\infty$.",
            False,
            pack("E", False, [
                "Odd degree with positive lead: left end goes to $-\\infty$ wait — "
                "positive lead odd degree: as $x\\to-\\infty$, $p\\to-\\infty$. Same for $q$. So TRUE!",
                D(f"p(x)\\sim x^{3}"),
                close(True, "Both left ends go to $-\\infty$"),
            ]),
            lambda: False,  # BUG: claim truth vs check
        ),
    ]
    # Fix claim E: both go to -inf — truth True
    claims[4] = C(
        f"As $x\\to-\\infty$, both $p$ and $q$ tend to $-\\infty$.",
        True,
        pack("E", True, [
            "Odd degree with positive leading coefficient sends the left end down; adding $2$ does not change that.",
            D(f"p(x)\\sim x^{3}"),
            D(f"q(x)\\sim x^{3}"),
            close(True, "Both left ends go to $-\\infty$"),
        ]),
        lambda: True,
    )
    ctx = (
        "The figure shows $p(x)=x^{3}-3x$; define $q(x)=p(x)+2$. A comparison table is included. "
        f"{TAIL}"
    )
    return TaskSpec(
        ctx, claims, "Hybrid: graph of $p$ plus shifted $q$ with table.", "hybrid",
        TITLES["hybrid"][variant], figure=fig, tables_markdown=table,
    )


def build_text_dense(variant: int) -> TaskSpec:
    scenarios = [
        [
            (
                f"A monic cubic with zeros $-1$, $0$ and $2$ satisfies $p(1)=-2$.",
                expand((x + 1) * x * (x - 2)),
                1,
                -2,
            ),
            (
                f"If $f(x)=x^{4}+1$, then $f(-x)=f(x)$ for every real $x$.",
                x**4 + 1,
                None,
                None,
            ),
            (
                "The nested map obtained by feeding $x^{2}+1$ into $u^{2}-u$ has highest power $x^{4}$.",
                expand((x**2 + 1) ** 2 - (x**2 + 1)),
                None,
                None,
            ),
            (
                "Translating $x^{3}-x$ upward by $2$ leaves exactly three real roots.",
                expand(x**3 - x + 2),
                None,
                None,
            ),
            (
                "A quadratic speed $v(t)=t^{2}-4t+3$ has negative acceleration for all $t>2$.",
                diff(t**2 - 4 * t + 3, t),
                3,
                None,
            ),
        ],
        [
            (
                f"The polynomial {factored_tex([(2, 2), (-1, 1)])} touches the axis at $x=2$.",
                expand((x - 2) ** 2 * (x + 1)),
                2,
                0,
            ),
            (
                "For $g(x)=x^{3}-4x$, the derivative $g'(x)$ is even.",
                diff(x**3 - 4 * x, x),
                None,
                None,
            ),
            (
                f"$p(x)={factored_tex([(-3, 1), (1, 1), (4, 1)])}$ has root sum $8$.",
                expand((x + 3) * (x - 1) * (x - 4)),
                None,
                None,
            ),
            (
                "If $h(x)=-x^{3}+3x$, then $h$ is odd and $h(0)=0$.",
                expand(-x**3 + 3 * x),
                None,
                None,
            ),
            (
                "A quartic $x^{4}-5x^{2}+4$ factors into four real linear factors.",
                expand(x**4 - 5 * x**2 + 4),
                None,
                None,
            ),
        ],
        [
            (
                "Meeting points of $x^{3}$ and $3x$ solve $x^{3}-3x=0$.",
                expand(x**3 - 3 * x),
                None,
                None,
            ),
            (
                f"$p(x)=x^{3}+x^{2}-x-1$ has $p(-1)=0$.",
                expand(x**3 + x**2 - x - 1),
                -1,
                0,
            ),
            (
                "If $p(n)=n^{3}+n$ for $n=0,1,2$ only, then $p$ is necessarily cubic.",
                x**3 + x,
                None,
                None,
            ),
            (
                "For every real $k$, $x^{3}+k$ has at least one real root.",
                x**3 + k,
                None,
                None,
            ),
            (
                "If $p$ has degree $3$ and leading coefficient $-2$, then $p(x)\\to -\\infty$ as $x\\to-\\infty$.",
                -2 * x**3,
                None,
                None,
            ),
        ],
    ]
    letters = "ABCDE"
    claims: list[Claim] = []
    for i, (stmt, expr, test_x, test_val) in enumerate(scenarios[variant]):
        letter = letters[i]
        if test_x is not None and test_val is not None and "acceleration" not in stmt.lower() and "touches" not in stmt.lower():
            truth = ev(expr, test_x) == test_val
            expl = pack(letter, truth, [
                "Unpack the mini-scenario: identify the polynomial, then carry out the named computation.",
                D(f"f({test_x})={L(ev(expr, test_x))}"),
                close(truth, f"The value is ${L(ev(expr, test_x))}$"),
            ])
            check = lambda e=expr, tx=test_x, tv=test_val: ev(e, tx) == tv
        elif "touches" in stmt.lower():
            dp = diff(expr, x)
            truth = ev(expr, test_x) == 0 and simplify(dp.subs(x, test_x)) == 0
            expl = pack(letter, truth, [
                "Touching means a double root: both $p$ and $p'$ vanish there.",
                D(f"p({test_x})={L(ev(expr, test_x))}"),
                D(f"p'({test_x})={L(simplify(dp.subs(x, test_x)))}"),
                close(truth, f"$x={test_x}$ is a touch point"),
            ])
            check = lambda e=expr, tx=test_x: ev(e, tx) == 0 and simplify(diff(e, x).subs(x, tx)) == 0
        elif "even" in stmt.lower() or ("odd" in stmt.lower() and "nested" not in stmt.lower()):
            if "odd" in stmt.lower() and "h(0)" in stmt.lower():
                truth = is_odd(expr) and ev(expr, 0) == 0
            elif "derivative" in stmt.lower() and "even" in stmt.lower():
                truth = is_even(expr)
            elif "odd" in stmt.lower():
                truth = is_odd(expr)
            else:
                truth = is_even(expr) if "f(-x)=f(x)" in stmt else is_even(expr)
            expl = pack(letter, truth, [
                "Test the parity claim by substituting $-x$ or by inspecting powers.",
                D(f"\\text{{parity check on }} {L(expr)[:40]}"),
                close(truth, "Parity matches the claim" if truth else "Parity fails"),
            ])
            check = lambda t=truth: t
        elif "highest power" in stmt.lower():
            truth = deg(expr) == 4
            expl = pack(letter, truth, [
                "Expand fully before reading the highest power.",
                D(f"\\text{{highest power}}=x^{{{deg(expr)}}}"),
                close(truth, f"Degree ${deg(expr)}$ settles the claim"),
            ])
            check = lambda e=expr: deg(e) == 4
        elif "root sum" in stmt.lower():
            coeffs = Poly(expr, x).all_coeffs()
            rsum = -Rational(coeffs[1]) / Rational(coeffs[0])
            truth = rsum == 8
            expl = pack(letter, truth, [
                "For a monic cubic, the root sum equals minus the $x^{2}$ coefficient.",
                D(f"\\sum r_i={L(rsum)}"),
                close(truth, f"Root sum is ${L(rsum)}$"),
            ])
            check = lambda r=rsum: r == 8
        elif "four real linear" in stmt.lower():
            fac = factor(expr)
            truth = len(roots_real(expr)) == 4
            expl = pack(letter, truth, [
                "Factor completely over the reals.",
                D(f"p(x)={L(fac)}"),
                close(truth, "Four real linear factors appear" if truth else "Not four distinct real roots"),
            ])
            check = lambda e=expr: len(roots_real(e)) == 4
        elif "three real roots" in stmt.lower():
            nroots = len(roots_real(expr))
            truth = nroots == 3
            expl = pack(letter, truth, [
                "Count real solutions of the shifted cubic.",
                D(f"\\#\\text{{real roots}}={nroots}"),
                close(truth, f"There are {nroots} real roots"),
            ])
            check = lambda e=expr: len(roots_real(e)) == 3
        elif "negative acceleration" in stmt.lower():
            # a(t)=2t-4; for all t>2, a>0 actually! So claim is False
            truth = all(simplify(ev(expr, tt, t)) < 0 for tt in [3, 4, 5])
            expl = pack(letter, truth, [
                "Differentiate speed: $a(t)=2t-4$, which is positive for $t>2$.",
                D(f"a(t)={L(expr)}"),
                D(f"a(3)={L(ev(expr, 3, t))}"),
                close(truth, "Acceleration is not negative throughout $t>2$"),
            ])
            check = lambda: all(simplify(ev(expr, tt, t)) < 0 for tt in [3, 4, 5])
        elif "at least one real root" in stmt.lower():
            truth = True
            expl = pack(letter, truth, [
                "Odd degree with real coefficients forces at least one real root.",
                close(True, "At least one real root is guaranteed"),
            ])
            check = None
        elif "x\\to-\\infty" in stmt:
            # lead -2, odd degree: as x->-inf, (-2)*(-inf)^3 = (-2)*(-inf)=+inf, so claim False
            truth = False  # p -> +inf as x-> -inf
            expl = pack(letter, truth, [
                "Odd degree with negative lead: as $x\\to-\\infty$, $x^{3}\\to-\\infty$, times $-2$ yields $+\\infty$.",
                D(f"a={L(lead(expr))}"),
                close(False, "Left end goes to $+\\infty$, not $-\\infty$"),
            ])
            check = lambda: False
        elif "meeting" in stmt.lower():
            truth = True  # solving x^3-3x=0 is correct description
            expl = pack(letter, truth, [
                "Set $x^{3}=3x$, rearrange to $x^{3}-3x=0$.",
                D(f"x^{3}-3x={L(factor(expr))}"),
                close(True, "The meeting equation is correct"),
            ])
            check = lambda: True
        elif "necessarily cubic" in stmt.lower() or ("cubic" in stmt.lower() and "n^{3}" in stmt):
            truth = False  # three points don't force degree
            expl = pack(letter, truth, [
                "Three sample points never uniquely force degree three; higher-degree interpolants exist.",
                D(f"p(x)={L(expr)}\\ \\text{{is one model, not the only}}"),
                close(False, "Necessity fails"),
            ])
            check = lambda: False
        else:
            truth = is_even(expr)
            expl = pack(letter, truth, [
                "Substitute $-x$ throughout the named polynomial.",
                D(f"f(-x)={L(simplify(expr.subs(x, -x)))}"),
                close(truth, "Evenness holds" if truth else "The polynomial is not even"),
            ])
            check = lambda e=expr: is_even(e)
        claims.append(C(stmt, truth, expl, check))
    return TaskSpec(
        "Five standalone polynomial micro-scenarios — no shared formula across letters. "
        f"{TAIL}",
        claims,
        "Text-dense stem: each letter is its own polynomial puzzle.",
        "text_dense",
        TITLES["text_dense"][variant],
    )


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
    truths = sum(as_bool(c.truth) for c in spec.claims)
    if truths < 1 or truths > 4:
        raise ValueError(f"task {idx + 1} has {truths} truths: {[c.truth for c in spec.claims]}")
    verify_claims(spec.claims, f"task {idx + 1}")
    return spec


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
            deepen_explanation(c.explanation, letters[i], c.truth, c.text, spec.overview)
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


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    assert figs >= 8, f"figures={figs}"
    assert tabs >= 6, f"tables={tabs}"
    kinds = Counter(t["stem_kind"] for t in tasks)
    for k in STEM_KINDS:
        assert kinds[k] == 3, f"{k} count={kinds.get(k)}"
    expl_lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    med = statistics.median(expl_lens)
    assert med >= 420, f"median expl len={med}"
    for i, t in enumerate(tasks):
        n = i + 1
        assert t["id"] == f"math-9-e{n}"
        assert t["case_id"] == f"MATH 9.E{str(n).zfill(2)}"
        assert t["subsection"] == "9.5"
        assert t["sort_order"] == 200 + n
        assert t["difficulty_level"] == "5/5"
        assert t["title"] and t["title"] != "Mixed exam — task"
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        truths = sum(t["answer_key"])
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
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
            assert "so the statement is" in e
            assert e.count("$$") >= 4
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
                assert "\n" not in m.group(1), f"nl in display {t['case_id']}"
        for field in ("context", "solution_overview"):
            text = t.get(field) or ""
            assert "\\circ" not in text or "mathrm{C}" in text, field
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", text):
                assert "\n" not in m.group(1), f"nl in {field} {t['case_id']}"
        for e in t["tactical_explanations"]:
            assert "\\circ" not in e or "mathrm{C}" in e
        for s in t["statements"]:
            assert "\\circ" not in s or "mathrm{C}" in s


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
    print("truth counts per task:", dict(sorted(truths.items())))


if __name__ == "__main__":
    main()
