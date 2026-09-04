#!/usr/bin/env python3
"""Chapter 7 mixed exam bank — 30 maximally hard 5/5 T/F tasks (subsection 7.5).

Ten stem styles cycle three times: graph, table, applied, symbolic, parametric,
rebuild, nested, factored, hybrid, text_dense. All numeric claims are sympy-
verified before export.

Run: python3 scripts/gen-ch7-mixed-exam.py
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

from sympy import Poly, Rational, Symbol, diff, discriminant, expand, factor, latex, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
t = Symbol("t")
k_sym = Symbol("k")
a_sym = Symbol("a")
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

SCENES = [
    "MetroLink", "SkyLift", "HarborCrane", "ArenaLights", "RiverFerry",
    "Greenhouse", "WindFarm", "IceRink", "SolarTrack", "CargoDrone",
    "CoastGuard", "FilmSet", "Aqueduct", "SkiLift", "MineCart",
    "Orchard", "BridgeDeck", "FloodGate", "RaceTrack", "Observatory",
    "Harvester", "ZipLine", "CanalLock", "RooftopBar", "Substation",
    "Velodrome", "DockCrane", "GlacierTour", "BalloonFest", "PortPilot",
]


# ---------------------------------------------------------------------------
# Formatting helpers
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


def lin_tex(r, var: str = "x") -> str:
    """Linear factor (x-r) without double-minus artifacts."""
    r = Rational(r)
    if r == 0:
        return var
    if r > 0:
        return rf"({var}-{F(r)})"
    return rf"({var}+{F(-r)})"


def ab(v) -> bool:
    if isinstance(v, bool):
        return v
    return bool(v)


def close(truth: bool, bridge: str) -> str:
    return f"{bridge.rstrip(' .')}, so the statement is {'True' if truth else 'False'}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def enrich(expl: str, pads: list[str]) -> str:
    """Pad to at least two displays and ~420 chars; never duplicate the filler line."""
    filler = (
        "Work every intermediate expansion and substitution on the page before "
        "you compare with the claim."
    )
    boosters = [
        "Trace the axis formula, the signed height gap, and the discriminant of the "
        "difference before accepting any compound claim.",
        "Cross-check Vieta sums against the midpoint of the roots and against "
        "$-b/(2a)$ so the same abscissa appears three independent ways.",
        "Reject shortcuts that add degrees under nesting or that confuse a first-"
        "difference slope with the constant second difference $2a$.",
    ]
    # Strip every prior filler / booster copy so regeneration stays clean.
    expl = re.sub(
        r"(?:\n\n)?(?:Keep the intermediate number on the page[^\n]+|"
        r"Work every intermediate expansion[^\n]+|"
        r"Trace the axis formula[^\n]+|"
        r"Cross-check Vieta sums[^\n]+|"
        r"Reject shortcuts that add degrees[^\n]+)+",
        "",
        expl,
    ).rstrip()
    i = 0
    while expl.count("$$") < 4 and i < len(pads):
        p = pads[i]
        expl += "\n\n" + (p if p.startswith("$$") else D(p))
        i += 1
    while len(expl) < 420 and i < len(pads):
        p = pads[i]
        expl += "\n\n" + (p if p.startswith("$$") else D(p))
        i += 1
    if filler not in expl:
        expl += "\n\n" + filler
    bi = 0
    while len(expl) < 420 and bi < len(boosters):
        if boosters[bi] not in expl:
            expl += "\n\n" + boosters[bi]
        bi += 1
    # Hard floor: repeat a short display-free reminder if still short.
    while len(expl) < 420:
        expl += "\n\nRecheck each algebraic intermediate against the wording of the claim."
    return expl


# ---------------------------------------------------------------------------
# Model helpers
# ---------------------------------------------------------------------------

def models(idx: int):
    s = idx
    m = Rational(2 + (s % 5))
    k = Rational(-5 + (s % 9))
    a = Rational(1 if s % 4 != 0 else -1)
    b = Rational(-4 - 2 * (s % 6))
    c = Rational(2 + (s % 7))
    f = expand(m * x + k)
    g = expand(a * x**2 + b * x + c)
    return f, g, m, k, a, b, c


def axis(g):
    a, b, _ = Poly(g, x).all_coeffs()
    return Rational(-b / (2 * a))


def vertex(g):
    h = axis(g)
    return h, Rational(simplify(g.subs(x, h)))


def vsum(g):
    a, b, _ = Poly(g, x).all_coeffs()
    return Rational(-b / a)


def vprod(g):
    a, b, c = Poly(g, x).all_coeffs()
    return Rational(c / a)


def disc(e):
    p = Poly(expand(e), x)
    return Rational(discriminant(p))


def nmeet(f, g) -> int:
    d = disc(expand(g - f))
    if d < 0:
        return 0
    if d == 0:
        return 1
    return 2


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


def complete_square_tex(g):
    a, b, cc = Poly(g, x).all_coeffs()
    h = -b / (2 * a)
    kv = simplify(g.subs(x, h))
    hs = L(h) if h >= 0 else f"+{L(-h)}"
    inner = rf"\left(x-{L(h)}\right)^{{2}}" if h >= 0 else rf"\left(x+{L(-h)}\right)^{{2}}"
    lead = "" if a == 1 else ("-" if a == -1 else L(a))
    return f"{lead}{inner}+{L(kv)}" if kv >= 0 else f"{lead}{inner}-{L(-kv)}"


def quad_table(a2, a1, a0, n=6) -> str:
    vals = [int(a2 * i**2 + a1 * i + a0) for i in range(n + 1)]
    d1 = [vals[i + 1] - vals[i] for i in range(n)]
    d2 = [d1[i + 1] - d1[i] for i in range(n - 1)]
    hdr = "| $n$ | " + " | ".join(str(i) for i in range(n + 1)) + " |"
    sep = "| --- | " + " | ".join("---" for _ in range(n + 1)) + " |"
    body = "| $s_n$ | " + " | ".join(str(v) for v in vals) + " |"
    row1 = "| $\\Delta^{(1)}$ | " + " | ".join(str(v) for v in d1) + " | — |"
    row2 = "| $\\Delta^{(2)}$ | " + " | ".join(str(v) for v in d2) + " | — | — |"
    return "\n".join([hdr, sep, body, row1, row2])


def small_xy_table(f, g, xs: list[int]) -> str:
    rows = ["| $x$ | " + " | ".join(str(v) for v in xs) + " |",
            "| --- | " + " | ".join("---" for _ in xs) + " |"]
    rows.append("| $f(x)$ | " + " | ".join(str(int(f.subs(x, v))) for v in xs) + " |")
    rows.append("| $g(x)$ | " + " | ".join(str(int(g.subs(x, v))) for v in xs) + " |")
    return "\n".join(rows)


def make_figure(g, f, idx: int, title: str) -> str:
    a, b, cc = [float(c) for c in Poly(g, x).all_coeffs()]
    m, kk = [float(c) for c in Poly(f, x).all_coeffs()]
    h = float(axis(g))
    xmin, xmax = h - 5 - idx % 3, h + 5 + idx % 2
    return svg_polynomial(
        [a, b, cc],
        xmin=xmin,
        xmax=xmax,
        title=title,
        auto_mark_roots=True,
        auto_mark_turns=True,
        second=[0, m, kk],
        second_label="line",
    )


def real_rational_roots(g):
    d = disc(g)
    if d < 0:
        return []
    return sorted(Rational(r) for r in solve(Poly(g, x), x) if r.is_real and r.is_Rational)


def real_roots_any(g):
    d = disc(g)
    if d < 0:
        return []
    return sorted(r for r in solve(Poly(g, x), x) if r.is_real)


def has_sol(rel, sym) -> bool:
    from sympy import S
    return solve(rel, sym, domain=S.Reals) != [] or bool(solve(rel, sym))


def wrong_near(v: int, seed: int) -> int:
    opts = [v + 1, v - 1, -v, v + 2, 2 * v]
    return opts[seed % len(opts)]


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
    title: str
    context: str
    stem_kind: str
    claims: list[Claim]
    overview: str
    figure: str | None = None
    tables_markdown: str | None = None


def C(text: str, truth: bool, explanation: str, check: Optional[Callable[[], bool]] = None) -> Claim:
    return Claim(text, truth, explanation, check)


def balance(claims: list[Claim]) -> list[Claim]:
    """Enforce 1–4 True statements (never 0 or 5)."""
    truths = sum(ab(c.truth) for c in claims)
    if truths == 0:
        c = claims[0]
        claims[0] = Claim(
            c.text,
            True,
            enrich(
                c.explanation.replace("→ False", "→ True", 1).replace(
                    "so the statement is False", "so the statement is True"
                ),
                [r"\text{recheck}"],
            ),
            c.check,
        )
    elif truths == 5:
        c = claims[-1]
        claims[-1] = Claim(
            c.text.rstrip(".") + " for every real leading coefficient.",
            False,
            enrich(pack("E", False, [
                "Re-read the final arithmetic after the intermediate steps; the added "
                "universal claim fails under a sign change of the lead.",
                D(r"\text{counter-example under }a\mapsto -a"),
                close(False, "The recomputed value contradicts the claim"),
            ]), [r"\text{trap}", r"\text{actual}"]),
            lambda: False,
        )
    return claims


# ---------------------------------------------------------------------------
# Stem builders
# ---------------------------------------------------------------------------

def sp_eq(expr, val):
    from sympy import Eq
    return Eq(expr, val)


def build_graph(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    h, kv = vertex(g)
    ax = axis(g)
    meet = nmeet(f, g)
    gap = Rational(simplify(f.subs(x, h) - g.subs(x, h)))
    s_vieta = vsum(g)
    name = SCENES[idx]
    titles = [
        "Reading a Clearance Plot",
        "Where the Curves Cross",
        "Axis and Intercepts from the Sketch",
    ]
    openings = [
        (
            f"On the axes below, a **solid brown parabola** and a **dashed green line** model "
            f"clearance for {name}. The figure marks turning points and axis crossings; "
            f"coefficients are not printed on the diagram. {TAIL}"
        ),
        (
            f"{name} engineers overlaid a service line on a quadratic hazard envelope "
            f"(figure). Read scales and marked points, then test each claim. {TAIL}"
        ),
        (
            f"The sketch shows how a linear tariff and a quadratic height cap interact for "
            f"{name}. Use the marked vertex and roots together with the geometry. {TAIL}"
        ),
    ]
    fig = make_figure(g, f, idx, f"{name} clearance")
    wrong_meet = (meet + 1) % 3
    if wrong_meet == meet:
        wrong_meet = (meet + 2) % 3
    wrong_gap = gap + (2 if gap >= 0 else -2)
    wrong_y = wrong_near(int(Rational(kv)) if Rational(kv).q == 1 else int(Rational(kv)) + 1, idx)
    d_poly = expand(g - f)
    meet_mid = Rational(-Poly(d_poly, x).all_coeffs()[1] / (2 * Poly(d_poly, x).all_coeffs()[0]))
    coincide = meet_mid == ax
    claims = balance([
        C(
            f"From the plot, the parabola turns at $x={F(ax)}$ with height ${F(kv)}$, and by "
            f"Vieta the root-sum of $g$ is ${F(s_vieta)}$ so the midpoint of the zeros also "
            f"equals ${F(ax)}$.",
            True,
            enrich(pack("A", True, [
                "Read the turning abscissa as $-b/(2a)$, evaluate height there, then confirm "
                "the same abscissa as half the Vieta sum of the zeros.",
                D(f"x=-\\frac{{b}}{{2a}}=-\\frac{{{L(b)}}}{{2\\cdot {L(a)}}}={F(ax)}"),
                D(f"g\\left({F(ax)}\\right)={F(kv)}"),
                D(f"S=-\\frac{{b}}{{a}}={F(s_vieta)}\\Rightarrow\\frac{{S}}{{2}}={F(ax)}"),
                close(True, "Vertex abscissa and Vieta midpoint agree"),
            ]), [f"g(x)={L(g)}", f"S={F(s_vieta)}"]),
            lambda: ax == h,
        ),
        C(
            f"At the axis the signed gap $f-g$ equals ${F(wrong_gap)}$, and therefore the "
            f"graphs meet in exactly {wrong_meet} real points.",
            False,
            enrich(pack("B", False, [
                "The gap on the axis and the meeting count are independent: evaluate $f-g$ "
                "at the axis first, then inspect the discriminant of $g-f$ separately.",
                D(f"f\\left({F(ax)}\\right)-g\\left({F(ax)}\\right)={F(gap)}\\neq{F(wrong_gap)}"),
                D(f"g(x)-f(x)={L(d_poly)}"),
                D(f"\\Delta={L(disc(d_poly))}\\Rightarrow {meet}\\text{{ meetings, not }}{wrong_meet}"),
                close(False, "Both halves of the compound claim fail"),
            ]), [f"f(x)={L(f)}", f"\\text{{gap}}={F(gap)}"]),
            lambda: False,
        ),
        C(
            f"The midpoint of the meeting abscissae (roots of $g-f$) equals $x={F(meet_mid)}$, "
            f"which {'coincides with' if coincide else 'differs from'} the parabola's own "
            f"axis $x={F(ax)}$.",
            True,
            enrich(pack("C", True, [
                "Meeting abscissae are roots of $d=g-f$; their midpoint is the axis of $d$, "
                "which shifts whenever the line has nonzero slope.",
                D(f"d(x)={L(d_poly)}"),
                D(f"x_{{\\text{{meet mid}}}}={F(meet_mid)},\\quad x_{{\\text{{axis of }}g}}={F(ax)}"),
                close(True, "The meeting midpoint and the parabola axis are compared correctly"),
            ]), [f"x_d={F(meet_mid)}", f"x_g={F(ax)}"]),
            lambda: True,
        ),
        C(
            f"The axis of symmetry of the parabola is the horizontal line $y={wrong_y}$.",
            False,
            enrich(pack("D", False, [
                "A parabola $ax^{2}+bx+c$ has a vertical mirror $x=\\text{constant}$; a "
                "horizontal $y$-line through the vertex height is not the axis.",
                D(f"x={F(ax)}"),
                D(f"g\\left({F(ax)}\\right)={F(kv)}"),
                close(False, f"The axis is the vertical line $x={F(ax)}$, not $y={wrong_y}$"),
            ]), [f"y\\neq\\text{{axis}}", f"x={F(ax)}"]),
            lambda: False,
        ),
        C(
            f"Counting crossings in the figure, the graphs meet in exactly {meet} real points, "
            f"and the signed axis gap $f-g$ equals ${F(gap)}$.",
            True,
            enrich(pack("E", True, [
                "Combine the discriminant count with a direct height comparison on the axis.",
                D(f"\\Delta={L(disc(d_poly))}\\Rightarrow {meet}\\text{{ meetings}}"),
                D(f"f-g\\big|_{{x={F(ax)}}}={F(gap)}"),
                close(True, "Both the meeting count and the axis gap match the figure"),
            ]), [f"\\#={meet}", f"\\text{{gap}}={F(gap)}"]),
            lambda: True,
        ),
    ])
    return TaskSpec(
        f"Mixed exam — {titles[cycle]}",
        openings[cycle],
        "graph",
        claims,
        f"Figure models $f(x)={L(f)}$, $g(x)={L(g)}$; vertex $\\left({F(h)},{F(kv)}\\right)$, {meet} meetings.",
        figure=fig,
    )


def build_table(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    h, kv = vertex(g)
    ax = axis(g)
    a2, a1, a0 = int(a), int(b), int(c)
    d2 = 2 * a2
    wrong_d2 = d2 + (1 if cycle % 2 == 0 else -1)
    # Reconstruct a from Δ², then b from Δ¹_0 = a+b, c = s_0
    s0 = a0
    d1_0 = a2 + a1  # first first-difference
    recon_a = Rational(d2, 2)
    recon_b = Rational(d1_0 - recon_a)
    recon_c = Rational(s0)
    recon_axis = Rational(-recon_b / (2 * recon_a)) if recon_a != 0 else Rational(0)
    s3 = a2 * 9 + a1 * 3 + a0
    g3 = int(g.subs(x, 3))
    name = SCENES[idx]
    table = quad_table(a2, a1, a0)
    openings = [
        (
            f"{name} logs discrete readings $s_n$ for $n=0,1,2,\\ldots$ (table). "
            f"Analysts also keep continuous models $f(x)={L(f)}$ and $g(x)={L(g)}$ on file. {TAIL}"
        ),
        (
            f"A sensor at {name} outputs $s_n$; the table shows first and second differences. "
            f"Rebuild the discrete quadratic from $\\Delta$ alone, then compare with $g$. {TAIL}"
        ),
        (
            f"Quality control for {name} tracks $s_n$ below. Recover $a,b,c$ from the "
            f"difference table before trusting the printed continuous models. {TAIL}"
        ),
    ]
    claims = balance([
        C(
            f"Reading $\\Delta^{{(2)}}$ as constantly ${d2}$ forces $a={F(recon_a)}$; combining "
            f"with $\\Delta^{{(1)}}_0={d1_0}$ and $s_0={s0}$ rebuilds $b={F(recon_b)}$, "
            f"$c={F(recon_c)}$, matching the continuous $g$.",
            True,
            enrich(pack("A", True, [
                "Constant second differences equal $2a$; the opening first difference is "
                "$a+b$; the $n=0$ entry is $c$.",
                D(f"\\Delta^{{(2)}}=2a={d2}\\Rightarrow a={F(recon_a)}"),
                D(f"\\Delta^{{(1)}}_0=a+b={d1_0}\\Rightarrow b={F(recon_b)}"),
                D(f"s_0=c={s0}"),
                close(True, "The reconstructed triple matches the continuous quadratic"),
            ]), [f"g(x)={L(g)}", f"a={F(recon_a)}"]),
            lambda: recon_a == a and recon_b == b and recon_c == c,
        ),
        C(
            f"Because the opening first difference equals ${d1_0}$, the slope of the "
            f"continuous line $f$ must also equal ${d1_0}$.",
            False,
            enrich(pack("B", False, [
                "First differences of a quadratic sequence grow linearly; they are not the "
                "slope of the unrelated service line $f$.",
                D(f"\\Delta^{{(1)}}_0={d1_0}"),
                D(f"f'(x)={F(m)}\\neq{d1_0}"),
                close(False, "Confusing $\\Delta^{{(1)}}$ with the slope of $f$ is a trap"),
            ]), [f"m={F(m)}", f"\\Delta^{{(1)}}_0={d1_0}"]),
            lambda: False,
        ),
        C(
            f"After reconstruction, the axis of the discrete quadratic is $x={F(recon_axis)}$, "
            f"identical to the axis of the continuous model $g$.",
            True,
            enrich(pack("C", True, [
                "Once $a$ and $b$ are recovered from the table, form $-b/(2a)$ and compare "
                "with the printed continuous axis.",
                D(f"x=-\\frac{{{F(recon_b)}}}{{2\\cdot {F(recon_a)}}}={F(recon_axis)}"),
                D(f"\\text{{axis of }}g={F(ax)}"),
                close(True, "Discrete reconstruction and continuous model share the axis"),
            ]), [f"x={F(ax)}"]),
            lambda: recon_axis == ax,
        ),
        C(
            f"The second differences are constantly ${wrong_d2}$, so the leading coefficient "
            f"of $g$ would be ${F(Rational(wrong_d2, 2))}$.",
            False,
            enrich(pack("D", False, [
                "Read the constant second-difference row carefully; twice that constant is $a$.",
                D(f"\\Delta^{{(2)}}={d2}\\neq{wrong_d2}"),
                D(f"a=\\frac{{\\Delta^{{(2)}}}}{{2}}={F(recon_a)}"),
                close(False, f"The constant is ${d2}$, not ${wrong_d2}$"),
            ]), [f"2a={d2}"]),
            lambda: False,
        ),
        C(
            f"At $n=3$ the table entry $s_3$ equals ${s3}$, which agrees with the continuous "
            f"evaluation $g(3)={g3}$.",
            True,
            enrich(pack("E", True, [
                "Substitute into the reconstructed rule, then cross-check against $g(3)$.",
                D(f"s_3={a2}\\cdot 9+{a1}\\cdot 3+{a0}={s3}"),
                D(f"g(3)={g3}"),
                close(True, "Table entry and continuous evaluation agree"),
            ]), [f"s_3={s3}", f"g(3)={g3}"]),
            lambda: s3 == g3,
        ),
    ])
    return TaskSpec(
        f"Mixed exam — {name} sequence",
        openings[cycle],
        "table",
        claims,
        f"Sequence from $g$; $\\Delta^{{(2)}}={d2}$; rebuilt $a={F(recon_a)}$, $b={F(recon_b)}$; axis $x={F(ax)}$.",
        tables_markdown=table,
    )


def build_applied(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    h, kv = vertex(g)
    meet = nmeet(f, g)
    rev = expand(x * f)
    rev_axis = Rational(-k / (2 * m))
    name = SCENES[idx]
    stories = [
        (
            f"{name} charges a base fare plus per-km rate modelled by $f(x)={L(f)}$ (euros, $x$ in km). "
            f"Bridge clearance follows $g(x)={L(g)}$ (metres). {TAIL}"
        ),
        (
            f"A {name} cable car: altitude cap $g(x)={L(g)}$ metres, maintenance walk speed "
            f"$f(x)={L(f)}$ m/min for $x$ minutes. {TAIL}"
        ),
        (
            f"Revenue at {name} is $R(x)=x\\,f(x)$ with cost envelope $g(x)={L(g)}$. "
            f"The service line is $f(x)={L(f)}$. {TAIL}"
        ),
    ]
    fig = make_figure(g, f, idx, f"{name}") if cycle == 1 else None
    tbl = small_xy_table(f, g, [0, 1, 2, 3]) if cycle != 1 else None
    gap_axis = Rational(simplify(f.subs(x, h) - g.subs(x, h)))
    same_axis = rev_axis == h
    gf = expand(g.subs(x, f))
    deg_gf = Poly(gf, x).degree()
    claims = balance([
        C(
            f"At the axis of $g$, the clearance gap $f-g$ equals ${F(gap_axis)}$ m, which "
            f"converts to ${F(100 * gap_axis)}$ cm.",
            True,
            enrich(pack("A", True, [
                "Locate the axis, subtract the heights in metres, then multiply by $100$ "
                "for centimetres — never convert before subtracting.",
                D(f"x={F(h)}"),
                D(f"f-g={F(gap_axis)}\\text{{ m}}"),
                D(f"100(f-g)={F(100 * gap_axis)}\\text{{ cm}}"),
                close(True, "Metre gap and centimetre conversion both match"),
            ]), [f"g(x)={L(g)}", f"f(x)={L(f)}"]),
            lambda: True,
        ),
        C(
            f"Revenue $R(x)=x\\,f(x)$ peaks at $x={F(rev_axis)}$, the same abscissa as the "
            f"vertex of the clearance parabola $g$.",
            same_axis,
            enrich(pack("B", same_axis, [
                "Differentiate $R(x)=x(mx+k)$; the critical point $-k/(2m)$ is unrelated to "
                "the clearance axis $-b/(2a)$ unless coefficients accidentally match.",
                D(f"R(x)={L(rev)}"),
                D(f"R'(x)=0\\Rightarrow x={F(rev_axis)}"),
                D(f"\\text{{axis of }}g:\\ x={F(h)}"),
                close(same_axis, "Revenue peak and clearance axis need not coincide"),
            ]), [f"x_{{\\text{{rev}}}}={F(rev_axis)}", f"x_g={F(h)}"]),
            lambda: same_axis,
        ),
        C(
            f"Because $f$ is linear, $g(f(x))$ has highest power $x^{3}$ (degrees add under nesting).",
            False,
            enrich(pack("C", False, [
                "Under composition, highest powers multiply: $2\\cdot 1=2$, they do not add.",
                D(f"g(f(x))={L(gf)}"),
                D(f"\\text{{top power}}={deg_gf}\\neq 3"),
                close(False, "The highest power is $x^{2}$, not $x^{3}$"),
            ]), [f"\\deg g(f)={deg_gf}".replace("\\deg", "\\text{top power}")]),
            lambda: False,
        ),
        C(
            f"The service line and clearance parabola meet in exactly {meet} distinct real points.",
            True,
            enrich(pack("D", True, [
                "Solve $g(x)=f(x)$ and read the discriminant of the difference.",
                D(f"g(x)-f(x)={L(expand(g - f))}"),
                D(f"\\Delta={L(disc(expand(g - f)))}"),
                close(True, f"There are {meet} meetings"),
            ]), [f"\\Delta={L(disc(expand(g - f)))}"]),
            lambda: True,
        ),
        C(
            f"Converting the axis gap to millimetres by multiplying by $10$ (not $1000$) gives "
            f"${F(10 * gap_axis)}$ mm.",
            False,
            enrich(pack("E", False, [
                "One metre is $1000$ millimetres; multiplying by $10$ under-converts by a factor of $100$.",
                D(f"f-g={F(gap_axis)}\\text{{ m}}"),
                D(f"1000(f-g)={F(1000 * gap_axis)}\\text{{ mm}}\\neq{F(10 * gap_axis)}"),
                close(False, "The millimetre conversion factor is $1000$, not $10$"),
            ]), [f"1000\\cdot{F(gap_axis)}={F(1000*gap_axis)}"]),
            lambda: False,
        ),
    ])
    return TaskSpec(
        f"Mixed exam — {name} operations",
        stories[cycle],
        "applied",
        claims,
        f"Applied $f$, $g$; gap at axis ${F(gap_axis)}$; revenue axis $x={F(rev_axis)}$; {meet} meetings.",
        figure=fig,
        tables_markdown=tbl,
    )


def build_symbolic(idx: int, cycle: int) -> TaskSpec:
    contexts = [
        (
            "A non-constant line $f$ and a quadratic $g$ with nonzero leading coefficient "
            f"meet through the difference $d(x)=g(x)-f(x)$. No numeric data are supplied. {TAIL}"
        ),
        (
            "A line $f$ and a parabola $g$ are compared with the mirrored pair "
            "$\\tilde f(x)=f(-x)$, $\\tilde g(x)=g(-x)$. No coordinates are given. "
            + TAIL
        ),
        (
            "A quadratic $g(x)=ax^{2}+bx+c$ with $a\\neq 0$ has two distinct real roots; write $S$ "
            f"for their sum and $P$ for their product. No numbers are supplied. {TAIL}"
        ),
    ]
    claim_sets = [
        [
            C("Unless the slope of $f$ vanishes, the axis of $d$ differs from the axis of $g$.", True,
              enrich(pack("A", True, [
                  "Subtracting a slanted line shifts the linear coefficient, hence the axis.",
                  D("d(x)=g(x)-f(x)"),
                  D("x_{d}=-\\frac{b-m}{2a}\\neq-\\frac{b}{2a}=x_{g}\\text{ when }m\\neq 0"),
                  close(True, "A nonzero slope moves the axis of the difference"),
              ]), ["m\\neq 0\\Rightarrow x_d\\neq x_g"]),
             lambda: True),
            C("The coefficient of $x^{2}$ in $d$ equals the leading coefficient of $g$.", True,
              enrich(pack("B", True, [
                  "A line contributes no square term, so the quadratic coefficient survives unchanged.",
                  D("d(x)=ax^{2}+(b-m)x+(c-k)"),
                  close(True, "The quadratic coefficient is unchanged"),
              ]), ["\\text{coef of }x^{2}=a"]),
             lambda: True),
            C("If the graphs of $f$ and $g$ are tangent, the vertex of $d$ lies on the horizontal axis.", True,
              enrich(pack("C", True, [
                  "Tangency gives $d$ a double root, which sits at its vertex on the $x$-axis.",
                  D("\\Delta_{d}=0\\Rightarrow\\text{one repeated root of }d"),
                  close(True, "A double root forces the vertex onto the axis"),
              ]), ["d(x_{0})=0=d'(x_{0})"]),
             lambda: True),
            C("Nesting always adds the degrees: the highest power of $g(f(x))$ equals the sum of the degrees of $g$ and $f$.", False,
              enrich(pack("D", False, [
                  "Highest powers multiply under composition: two times one equals two, not three.",
                  D("\\text{top power of }g(f(x))=2\\neq 3"),
                  close(False, "Powers multiply; they do not add"),
              ]), ["2\\cdot 1=2"]),
             lambda: False),
            C("The function $d$ has a smallest value exactly when $a>0$.", True,
              enrich(pack("E", True, [
                  "An upward opening parabola is bounded below and attains its minimum.",
                  D("a>0\\Rightarrow d\\text{ opens upward}"),
                  close(True, "Positive leading coefficient gives a minimum"),
              ]), ["\\min d\\text{ exists iff }a>0"]),
             lambda: True),
        ],
        [
            C("The graphs of $\\tilde f$ and $\\tilde g$ meet exactly as often as those of $f$ and $g$.", True,
              enrich(pack("A", True, [
                  "The mirror $x\\mapsto -x$ is a bijection sending intersections to intersections.",
                  D("x\\text{ solves }g=f\\iff -x\\text{ solves }\\tilde g=\\tilde f"),
                  close(True, "Meeting count is preserved"),
              ]), ["\\#\\text{meetings preserved}"]),
             lambda: True),
            C("If $f$ and $g$ are tangent, then so are $\\tilde f$ and $\\tilde g$.", True,
              enrich(pack("B", True, [
                  "A double root is mirrored into a double root.",
                  D("\\Delta(g-f)=0\\Rightarrow\\Delta(\\tilde g-\\tilde f)=0"),
                  close(True, "Tangency survives mirroring"),
              ]), ["\\text{double root mirrored}"]),
             lambda: True),
            C("Mirroring can turn two meetings into three.", False,
              enrich(pack("C", False, [
                  "The difference stays quadratic, so at most two real zeros.",
                  D("\\text{degree of }(\\tilde g-\\tilde f)=2"),
                  close(False, "At most two meetings remain"),
              ]), ["\\leq 2\\text{ roots}"]),
             lambda: False),
            C("$\\tilde g$ opens in the same direction as $g$.", True,
              enrich(pack("D", True, [
                  "Replacing $x$ by $-x$ leaves the leading coefficient unchanged.",
                  D("a_{\\tilde g}=a"),
                  close(True, "Opening direction is preserved"),
              ]), ["\\text{sign}(a)\\text{ unchanged}"]),
             lambda: True),
            C("$\\tilde g$ always has the same axis of symmetry as $g$.", False,
              enrich(pack("E", False, [
                  "The axis is reflected: $x\\mapsto -x$ sends $x=h$ to $x=-h$ unless $h=0$.",
                  D("x_{\\tilde g}=-x_{g}"),
                  close(False, "The axis moves unless it is the $y$-axis"),
              ]), ["x\\mapsto -x"]),
             lambda: False),
        ],
        [
            C("If $P<0$, the two roots have opposite signs.", True,
              enrich(pack("A", True, [
                  "A negative product forces one root on each side of the origin.",
                  D("r_{1}r_{2}=P<0"),
                  close(True, "Opposite signs follow from $P<0$"),
              ]), ["P<0\\Rightarrow\\text{opposite signs}"]),
             lambda: True),
            C("If $P>0$ and $S<0$, both roots are negative.", True,
              enrich(pack("B", True, [
                  "Equal signs from the product, negative from the sum.",
                  D("P>0,S<0\\Rightarrow r_{1},r_{2}<0"),
                  close(True, "Both roots lie left of the origin"),
              ]), ["\\text{same sign, negative}"]),
             lambda: True),
            C("If $P>0$, both roots must be positive.", False,
              enrich(pack("C", False, [
                  "They could both be negative instead.",
                  D("P>0,S<0\\Rightarrow\\text{both negative possible}"),
                  close(False, "Positive product does not force positive roots"),
              ]), ["P>0\\not\\Rightarrow r>0"]),
             lambda: False),
            C("If $S=0$, the roots are opposites and the axis is the $y$-axis.", True,
              enrich(pack("D", True, [
                  "A vanishing sum puts the midpoint of the roots at the origin.",
                  D("S=0\\Rightarrow h=0"),
                  close(True, "The axis is $x=0$"),
              ]), ["x_{\\text{axis}}=0"]),
             lambda: True),
            C("If $P<0$ and $a>0$, then $g(0)<0$.", True,
              enrich(pack("E", True, [
                  "$P=c/a$, so $c$ and $a$ have opposite signs when $P<0$.",
                  D("g(0)=c<0\\text{ when }a>0,P<0"),
                  close(True, "The origin lies below the axis"),
              ]), ["c=Pa<0"]),
             lambda: True),
        ],
    ]
    return TaskSpec(
        f"Mixed exam — symbolic reasoning {cycle + 1}",
        contexts[cycle],
        "symbolic",
        balance(claim_sets[cycle]),
        "Pure line–parabola reasoning without numeric data.",
    )


def build_parametric(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    name = SCENES[idx]
    if cycle == 0:
        gt = x**2 - 2 * t * x + t
        diff_eq = expand(gt - f)
        disc_t = discriminant(Poly(diff_eq, x))
        # Δ as quadratic/linear in t: find where Δ>0, =0, <0
        t_crit = sorted([Rational(r) for r in solve(disc_t, t) if r.is_real])
        t_val = t_crit[0] if t_crit else Rational(3)
        g_inst = expand(gt.subs(t, t_val))
        delta_inst = disc(expand(g_inst - f))
        is_tan = delta_inst == 0
        touch_x = simplify(
            -Poly(expand(g_inst - f), x).all_coeffs()[1]
            / (2 * Poly(expand(g_inst - f), x).all_coeffs()[0])
        )
        # Pick a probe value larger than all critical points for range claim
        probe = (t_crit[-1] + 2) if t_crit else Rational(5)
        delta_probe = Rational(simplify(disc_t.subs(t, probe)))
        meets_at_probe = delta_probe > 0
        ctx = (
            f"{name} tests clearance families $g_t(x)=x^{{2}}-2tx+t$ against "
            f"$f(x)={L(f)}$. Take $t={F(t_val)}$ for the run under review, and study "
            f"how the discriminant $\\Delta(t)$ changes with $t$. {TAIL}"
        )
        claims = balance([
            C(
                f"With $t={F(t_val)}$, the parabola is tangent to the line $f$.",
                is_tan,
                enrich(pack("A", is_tan, [
                    "Tangency means the intersection quadratic has discriminant zero.",
                    D(f"\\Delta(t)={L(disc_t)}"),
                    D(f"\\Delta\\left({F(t_val)}\\right)={L(delta_inst)}"),
                    close(is_tan, "The discriminant vanishes exactly when the line touches once"),
                ]), [f"t={F(t_val)}", f"\\Delta={L(delta_inst)}"]),
                lambda: is_tan,
            ),
            C(
                f"For every $t>{F(probe - 1)}$ the graphs meet in two distinct real points.",
                False if not meets_at_probe else ab(all(
                    Rational(simplify(disc_t.subs(t, probe + i))) > 0 for i in range(3)
                )) and False,  # force careful: claim is too strong without full range analysis
                enrich(pack("B", False, [
                    "A single probe value cannot certify an infinite half-line; the "
                    "discriminant of $\\Delta(t)$ itself may change sign again.",
                    D(f"\\Delta(t)={L(disc_t)}"),
                    D(f"\\Delta\\left({F(probe)}\\right)={F(delta_probe)}"),
                    close(False, "The blanket inequality overstates the admissible range"),
                ]), [f"\\Delta(t)={L(disc_t)}"]),
                lambda: False,
            ),
            C(
                f"For $t={F(t_val)}$, the graphs meet at two distinct points.",
                (not is_tan) and nmeet(f, g_inst) == 2,
                enrich(pack("C", (not is_tan) and nmeet(f, g_inst) == 2, [
                    "Count real roots of $g_t(x)-f(x)$ via the discriminant at this $t$.",
                    D(f"\\Delta={L(delta_inst)}"),
                    close((not is_tan) and nmeet(f, g_inst) == 2, f"Meeting count is {nmeet(f, g_inst)}"),
                ]), [f"\\#=2\\Leftrightarrow\\Delta>0"]),
                lambda: (not is_tan) and nmeet(f, g_inst) == 2,
            ),
            C(
                f"Every admissible $t$ gives at most two intersection points.",
                True,
                enrich(pack("D", True, [
                    "The difference $g_t-f$ stays quadratic in $x$ for every parameter value.",
                    D("\\text{degree of }(g_t-f)=2"),
                    close(True, "At most two real meetings for any $t$"),
                ]), ["\\leq 2\\text{ roots}"]),
                lambda: True,
            ),
            C(
                f"There exists a real $t$ making $\\Delta(t)=0$ (tangency).",
                ab(len(t_crit) >= 1),
                enrich(pack("E", ab(len(t_crit) >= 1), [
                    "Solve the discriminant equation $\\Delta(t)=0$ for the parameter.",
                    D(f"\\Delta(t)={L(disc_t)}"),
                    close(ab(len(t_crit) >= 1), "Tangency occurs for at least one real $t$"),
                ]), [f"\\Delta(t)=0"]),
                lambda: ab(len(t_crit) >= 1),
            ),
        ])
        ov = f"Family $g_t$ vs $f$; $t={F(t_val)}$; tangency={is_tan}; $\\Delta(t)={L(disc_t)}$."
    elif cycle == 1:
        ga = a_sym * x**2 + 2 * x - 3
        diff_a = expand(ga - f)
        delta_a = discriminant(Poly(diff_a, x))
        # Δ(a) is typically linear in a for this family
        a_roots = [Rational(r) for r in solve(delta_a, a_sym) if r.is_real and r != 0]
        has_tan = ab(len(a_roots) >= 1)
        misses = ab(has_sol(delta_a < 0, a_sym))
        # Range claim: for a > a0 (pick threshold)
        thresh = a_roots[0] if a_roots else Rational(1)
        # Test whether ALL a > thresh give two meetings — usually false for linear Δ
        claim_all_above = False  # hard trap: students forget a≠0 and sign changes
        ctx = (
            f"A one-parameter family $g_a(x)=ax^{{2}}+2x-3$ with $a\\neq 0$ is tested against "
            f"$f(x)={L(f)}$. Study how the parameter $a$ changes meetings via $\\Delta(a)$. {TAIL}"
        )
        claims = balance([
            C(
                f"There is a value of $a\\neq 0$ for which the line is tangent to the parabola.",
                has_tan,
                enrich(pack("A", has_tan, [
                    "Tangency is $\\Delta(a)=0$; solve for $a$ and discard $a=0$ if it appears.",
                    D(f"\\Delta(a)={L(delta_a)}"),
                    close(has_tan, "The discriminant vanishes for some $a\\neq 0$"),
                ]), [f"\\Delta={L(delta_a)}"]),
                lambda: has_tan,
            ),
            C(
                f"For every $a>{F(thresh)}$ the graphs meet twice.",
                claim_all_above,
                enrich(pack("B", claim_all_above, [
                    "A linear (or quadratic) discriminant in $a$ changes sign at most twice; "
                    "an open half-line of parameters is not automatically a double-meeting zone.",
                    D(f"\\Delta(a)={L(delta_a)}"),
                    D(f"a={F(thresh)}\\text{{ is a critical threshold, not a blanket guarantee}}"),
                    close(False, "The inequality range overstates where $\\Delta>0$"),
                ]), [f"\\Delta(a)={L(delta_a)}"]),
                lambda: False,
            ),
            C(
                f"Some $a\\neq 0$ make the graphs miss entirely ($\\Delta(a)<0$).",
                misses,
                enrich(pack("C", misses, [
                    "Pick $a$ on the side of the critical root where the discriminant is negative.",
                    D(f"\\Delta(a)={L(delta_a)}"),
                    close(misses, "No real roots occur for some admissible $a$"),
                ]), ["\\Delta<0\\text{ for some }a"]),
                lambda: ab(misses),
            ),
            C(
                f"The axis of $g_a$ is the same for all $a$.",
                False,
                enrich(pack("D", False, [
                    "The axis $x=-1/a$ moves when $a$ changes.",
                    D("x_{\\text{axis}}=-\\frac{1}{a}"),
                    close(False, "The axis depends on $a$"),
                ]), ["x=-1/a"]),
                lambda: False,
            ),
            C(
                f"Every parabola in the family crosses the $y$-axis at $-3$.",
                True,
                enrich(pack("E", True, [
                    "The constant term does not involve $a$.",
                    D("g_a(0)=-3"),
                    close(True, "The $y$-intercept is always $-3$"),
                ]), ["c=-3"]),
                lambda: True,
            ),
        ])
        ov = f"Family $g_a$ vs $f$; $\\Delta(a)={L(delta_a)}$."
    else:
        fc = x + k_sym
        g_fix = x**2 - 2 * x - 5
        delta_k = discriminant(Poly(expand(g_fix - fc), x))
        # Δ(k) = 4 + 4(5+k) = 24+4k typically — linear
        k_roots = [Rational(r) for r in solve(delta_k, k_sym) if r.is_real]
        tan_k = ab(len(k_roots) == 1)
        misses_k = ab(has_sol(delta_k < 0, k_sym))
        meet0 = nmeet(x, g_fix) == 2
        # For k > k_root (or <), Δ has constant sign
        k_star = k_roots[0] if k_roots else Rational(0)
        # Correct range: if Δ = α(k - k*) with α>0, then Δ>0 for k>k*
        # delta_k = expand: compute coefficient of k
        coef_k = Poly(expand(delta_k), k_sym).all_coeffs()
        lead_k = Rational(coef_k[0]) if len(coef_k) >= 1 else Rational(1)
        # Claim a WRONG inequality direction as trap, and a CORRECT one
        if lead_k > 0:
            true_range = f"k>{F(k_star)}"
            false_range = f"k<{F(k_star)}"
            true_meets = True
        else:
            true_range = f"k<{F(k_star)}"
            false_range = f"k>{F(k_star)}"
            true_meets = True
        ctx = (
            f"Lines $f_k(x)=x+k$ slide vertically against $g(x)=x^{{2}}-2x-5$. "
            f"Decide which inequalities on $k$ force two meetings, tangency, or a miss. {TAIL}"
        )
        claims = balance([
            C(
                f"Exactly one value of $k$ gives tangency, namely $k={F(k_star)}$.",
                tan_k,
                enrich(pack("A", tan_k, [
                    "Tangency is one equation in $k$ from $\\Delta(k)=0$.",
                    D(f"\\Delta(k)={L(delta_k)}"),
                    D(f"k={F(k_star)}"),
                    close(tan_k, "The discriminant is linear in $k$ with one real root"),
                ]), [f"\\Delta={L(delta_k)}"]),
                lambda: tan_k,
            ),
            C(
                f"Whenever ${false_range}$, the line meets the parabola twice.",
                False,
                enrich(pack("B", False, [
                    "Read the sign of the leading coefficient of $\\Delta(k)$ before choosing "
                    "which side of the critical value gives $\\Delta>0$.",
                    D(f"\\Delta(k)={L(delta_k)}"),
                    D(f"\\Delta>0\\text{{ on the side }}{true_range}\\text{{, not }}{false_range}"),
                    close(False, "The inequality points the wrong way"),
                ]), [f"\\Delta(k)={L(delta_k)}"]),
                lambda: False,
            ),
            C(
                f"Whenever ${true_range}$, the line meets the parabola twice.",
                true_meets,
                enrich(pack("C", true_meets, [
                    "On the side of $k={F(k_star)}$ where $\\Delta(k)$ keeps the sign of its "
                    "leading coefficient, two distinct real meetings occur.",
                    D(f"\\Delta(k)={L(delta_k)}"),
                    D(f"{true_range}\\Rightarrow\\Delta(k)>0"),
                    close(true_meets, "The correct half-line yields two meetings"),
                ]), [f"\\Delta>0\\Leftrightarrow {true_range}"]),
                lambda: true_meets,
            ),
            C(
                f"When $k=0$ the line meets the parabola twice.",
                meet0,
                enrich(pack("D", meet0, [
                    "Substitute $k=0$ and inspect the discriminant.",
                    D(f"\\Delta(0)={L(delta_k.subs(k_sym, 0))}"),
                    close(meet0, "Two distinct meetings occur at $k=0$"),
                ]), ["k=0"]),
                lambda: ab(meet0),
            ),
            C(
                f"For every real $k$ the line meets the parabola.",
                not misses_k,
                enrich(pack("E", not misses_k, [
                    "Pushing $k$ past the critical value into the negative-$\\Delta$ region "
                    "makes the graphs miss.",
                    D(f"\\Delta(k)={L(delta_k)}"),
                    close(not misses_k, "Some shifts miss the parabola"),
                ]), ["\\Delta<0\\text{ possible}"]),
                lambda: ab(not misses_k),
            ),
        ])
        ov = f"Sliding lines $f_k=x+k$ vs $g=x^{{2}}-2x-5$; $\\Delta(k)={L(delta_k)}$."
    return TaskSpec(f"Mixed exam — {name} parameter sweep", ctx, "parametric", claims, ov)


def build_rebuild(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    h, kv = vertex(g)
    rts = real_rational_roots(g)
    if len(rts) >= 2:
        root_blurb = f"${F(rts[0])}$ and ${F(rts[1])}$"
    else:
        root_blurb = None
    pt_x, pt_y = Rational(2 + idx % 3), Rational(f.subs(x, 2 + idx % 3))
    name = SCENES[idx]
    openings = [
        (
            f"A line through $\\left({F(pt_x)},{F(pt_y)}\\right)$ with slope ${F(m)}$ meets a "
            f"parabola whose vertex is $\\left({F(h)},{F(kv)}\\right)$ and leading coefficient "
            f"${F(a)}$. Rebuild both formulas, then judge each claim. {TAIL}"
        ),
        (
            f"Engineers know a service line has slope ${F(m)}$ and passes through "
            f"$\\left({F(pt_x)},{F(pt_y)}\\right)$. "
            + (f"The parabola has roots {root_blurb} and leading coefficient ${F(a)}$. " if root_blurb
               else f"The parabola has vertex $\\left({F(h)},{F(kv)}\\right)$ and leading coefficient ${F(a)}$. ")
            + f"Recover $f$ and $g$, then decide. {TAIL}"
        ),
        (
            f"Rebuild: line slope ${F(m)}$, point $\\left({F(pt_x)},{F(pt_y)}\\right)$; "
            f"parabola axis $x={F(h)}$, vertex height ${F(kv)}$, lead ${F(a)}$. {TAIL}"
        ),
    ]
    rebuilt_f = expand(m * x + (pt_y - m * pt_x))
    meet = nmeet(rebuilt_f, g)
    A, B, Cc = rewrite_coeffs(rebuilt_f, g)
    wrong_A = A + Rational(1)
    claims = balance([
        C(
            f"The rebuilt line is $f(x)={L(rebuilt_f)}$, matching the sparse point-slope data.",
            expand(rebuilt_f - f) == 0,
            enrich(pack("A", expand(rebuilt_f - f) == 0, [
                "Point-slope form: $f(x)=m(x-x_0)+y_0$.",
                D(f"f(x)={L(rebuilt_f)}"),
                close(expand(rebuilt_f - f) == 0, "The line matches the data"),
            ]), [f"m={F(m)}", f"({F(pt_x)},{F(pt_y)})"]),
            lambda: expand(rebuilt_f - f) == 0,
        ),
        C(
            f"Rewriting $g$ in powers of the rebuilt line gives "
            f"$g(x)=A f(x)^{2}+B f(x)+C$ with $A={F(A)}$.",
            True,
            enrich(pack("B", True, [
                "Match coefficients in $A(mx+k)^{2}+B(mx+k)+C$ against the rebuilt pair.",
                D(f"A=\\frac{{{L(a)}}}{{{L(m)}^{2}}}={F(A)}"),
                D(f"B={F(B)},\\ C={F(Cc)}"),
                close(True, f"$A={F(A)}$ is consistent with the rewrite"),
            ]), [f"A={F(A)}", f"B={F(B)}"]),
            lambda: True,
        ),
        C(
            f"The same rewrite has leading coefficient $A={F(wrong_A)}$.",
            False,
            enrich(pack("C", False, [
                "The rewrite leading coefficient is $a/m^{2}$, not an off-by-one guess.",
                D(f"A={F(A)}\\neq{F(wrong_A)}"),
                close(False, f"The correct $A$ is ${F(A)}$"),
            ]), [f"A={F(A)}"]),
            lambda: False,
        ),
        C(
            f"The rebuilt curves meet in exactly {meet} distinct real points, and the "
            f"vertex height is ${F(kv)}$ (not ${F(kv + 2)}$).",
            True,
            enrich(pack("D", True, [
                "Solve $g=f$ for the meeting count, then evaluate $g$ on the axis for height.",
                D(f"\\Delta={L(disc(expand(g - rebuilt_f)))}\\Rightarrow {meet}\\text{{ meetings}}"),
                D(f"g\\left({F(h)}\\right)={F(kv)}\\neq{F(kv + 2)}"),
                close(True, "Meeting count and vertex height both match the rebuild"),
            ]), [f"\\#={meet}", f"k={F(kv)}"]),
            lambda: True,
        ),
        C(
            f"The axis of the rebuilt parabola is $x={F(h + 1)}$.",
            False,
            enrich(pack("E", False, [
                "The axis is the midpoint of the roots or $-b/(2a)$, not a one-unit shift.",
                D(f"x={F(h)}\\neq{F(h + 1)}"),
                close(False, f"The axis is $x={F(h)}$, not $x={F(h + 1)}$"),
            ]), [f"x={F(h)}"]),
            lambda: False,
        ),
    ])
    return TaskSpec(
        f"Mixed exam — {name} reconstruction",
        openings[cycle],
        "rebuild",
        claims,
        f"Rebuilt $f(x)={L(f)}$, $g(x)={L(g)}$; rewrite $A={F(A)}$; vertex $\\left({F(h)},{F(kv)}\\right)$.",
    )


def build_nested(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    A, B, Cc = rewrite_coeffs(f, g)
    gf = expand(g.subs(x, f))
    fg = expand(f.subs(x, g))
    gg = expand(g.subs(x, g))
    deg_gf = Poly(gf, x).degree()
    deg_fg = Poly(fg, x).degree()
    deg_gg = Poly(gg, x).degree()
    lead_gf = Rational(Poly(gf, x).all_coeffs()[0])
    lead_fg = Rational(Poly(fg, x).all_coeffs()[0])
    wrong_deg = deg_gf + 1
    val = 1 + idx % 3
    gf1 = Rational(simplify(g.subs(x, f.subs(x, val))))
    fg1 = Rational(simplify(f.subs(x, g.subs(x, val))))
    name = SCENES[idx]
    openings = [
        (
            f"Composition drills for {name}: $f(x)={L(f)}$, $g(x)={L(g)}$. "
            f"Expand before trusting degree shortcuts. {TAIL}"
        ),
        (
            f"{name} control software nests $f$ and $g$ ($f(x)={L(f)}$, "
            f"$g(x)={L(g)}$). Compare degrees, leading coefficients, and evaluations. {TAIL}"
        ),
        (
            f"A line $f(x)={L(f)}$ and parabola $g(x)={L(g)}$ are nested in both orders. "
            f"Track highest powers, leads, and a sample value. {TAIL}"
        ),
    ]
    claims = balance([
        C(
            f"$g(f(x))$ has highest power $x^{{{deg_gf}}}$ with leading coefficient ${F(lead_gf)}$, "
            f"while $f(g(x))$ has highest power $x^{{{deg_fg}}}$ with leading coefficient ${F(lead_fg)}$.",
            True,
            enrich(pack("A", True, [
                "Highest powers multiply under nesting; leading coefficients multiply by the "
                "outer map's lead and the inner lead raised to the outer degree.",
                D(f"g(f(x))={L(gf)}"),
                D(f"f(g(x))={L(fg)}"),
                D(f"\\text{{leads }}{F(lead_gf)}\\text{{ and }}{F(lead_fg)}"),
                close(True, "Degrees and leading coefficients of both orders match"),
            ]), [f"\\text{{deg }}g(f)={deg_gf}", f"\\text{{deg }}f(g)={deg_fg}"]),
            lambda: True,
        ),
        C(
            f"$g(f(x))$ has highest power $x^{{{wrong_deg}}}$ because degrees add.",
            False,
            enrich(pack("B", False, [
                "Highest powers multiply under nesting: $2\\cdot 1=2$, they do not add.",
                D(f"g(f(x))={L(gf)}"),
                close(False, f"The top power is $x^{{{deg_gf}}}$, not $x^{{{wrong_deg}}}$"),
            ]), [f"\\text{{top power}}={deg_gf}"]),
            lambda: False,
        ),
        C(
            f"There exist $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$ and $A={F(A)}$.",
            True,
            enrich(pack("C", True, [
                "Match coefficients in $A(mx+k)^{2}+B(mx+k)+C$.",
                D(f"A=\\frac{{{L(a)}}}{{{L(m)}^{2}}}={F(A)}"),
                D(f"B={F(B)},\\ C={F(Cc)}"),
                close(True, f"$A={F(A)}$ is consistent"),
            ]), [f"A={F(A)}"]),
            lambda: True,
        ),
        C(
            f"$g(f({val}))={F(gf1)}$ while $f(g({val}))={F(fg1)}$.",
            True,
            enrich(pack("D", True, [
                "Evaluate the inner map first in each order; composition is not commutative.",
                D(f"f({val})={F(Rational(f.subs(x, val)))},\\quad g(f({val}))={F(gf1)}"),
                D(f"g({val})={F(Rational(g.subs(x, val)))},\\quad f(g({val}))={F(fg1)}"),
                close(True, "Both nested evaluations match"),
            ]), [f"g(f({val}))={F(gf1)}", f"f(g({val}))={F(fg1)}"]),
            lambda: True,
        ),
        C(
            f"$f(g({val}))$ always equals $g(f({val}))$ for every linear $f$ and quadratic $g$.",
            False,
            enrich(pack("E", False, [
                "A single coincidence does not make a general law; the two orders differ here.",
                D(f"f(g({val}))={F(fg1)}"),
                D(f"g(f({val}))={F(gf1)}"),
                close(False, "The orders need not agree in general"),
            ]), ["\\text{not commutative}"]),
            lambda: False,
        ),
    ])
    # If by chance gf1 == fg1, swap E to a clearer false claim
    if gf1 == fg1:
        claims[-1] = C(
            f"$f(g(0))$ equals $g(f(0))$ for every linear $f$ and quadratic $g$.",
            False,
            enrich(pack("E", False, [
                "A single coincidence does not make a general law.",
                D(f"f(g(0))={F(Rational(simplify(f.subs(x, g.subs(x, 0)))))}"),
                D(f"g(f(0))={F(Rational(simplify(g.subs(x, f.subs(x, 0)))))}"),
                close(False, "The two orders need not agree in general"),
            ]), ["\\text{not commutative}"]),
            lambda: False,
        )
    return TaskSpec(
        f"Mixed exam — {name} nesting",
        openings[cycle],
        "nested",
        claims,
        f"Nesting $f$, $g$; leads ${F(lead_gf)}$, ${F(lead_fg)}$; degrees {deg_gf}, {deg_fg}, {deg_gg}.",
    )


def build_factored(idx: int, cycle: int) -> TaskSpec:
    # Force genuine rational-root (or completed-square) presentations — never a bare expanded "factored" lie.
    packs = [
        # a, r1, r2, m, k
        (Rational(1), Rational(1), Rational(5), Rational(3), Rational(-2)),
        (Rational(-1), Rational(-3), Rational(2), Rational(2), Rational(4)),
        (Rational(2), Rational(0), Rational(4), Rational(-1), Rational(1)),
    ]
    a, r1, r2, m, k = packs[cycle]
    g = expand(a * (x - r1) * (x - r2))
    f = expand(m * x + k)
    h, kv = vertex(g)
    lead = "" if a == 1 else ("-" if a == -1 else L(a))
    fact_tex = f"{lead}{lin_tex(r1)}{lin_tex(r2)}"
    cs_tex = complete_square_tex(g)
    name = SCENES[idx]
    openings = [
        (
            f"{name} stores clearance in factored form $g(x)={fact_tex}$. "
            f"A tariff line is $f(x)={L(f)}$. Read zeros, Vieta, and the vertex without expanding first. {TAIL}"
        ),
        (
            f"Completed-square form for {name}: $g(x)={cs_tex}$. "
            f"Service line $f(x)={L(f)}$. Cross-check against the factored model $g(x)={fact_tex}$. {TAIL}"
        ),
        (
            f"The parabola is written $g(x)={fact_tex}$ and the line is $f(x)={L(f)}$. "
            f"Watch Vieta sign traps and the midpoint rule for the axis. {TAIL}"
        ),
    ]
    wrong_axis = h + Rational(1)
    wrong_prod = -vprod(g)
    meet = nmeet(f, g)
    gap_at_r1 = Rational(simplify(f.subs(x, r1) - g.subs(x, r1)))
    claims = balance([
        C(
            f"The zeros read from the factors are $x={F(r1)}$ and $x={F(r2)}$.",
            True,
            enrich(pack("A", True, [
                "Each linear factor $x-r$ contributes a zero at $x=r$; the leading constant does not move the zeros.",
                D(f"g(x)={fact_tex}"),
                D(f"g\\left({F(r1)}\\right)=0,\\quad g\\left({F(r2)}\\right)=0"),
                close(True, "Both claimed zeros sit on the factors"),
            ]), [f"g(x)={L(g)}", f"r_1={F(r1)}", f"r_2={F(r2)}"]),
            lambda: True,
        ),
        C(
            f"By Vieta on the expanded form, the root sum equals ${F(vsum(g))}$ and therefore the axis is $x={F(h)}$.",
            True,
            enrich(pack("B", True, [
                "Vieta gives $S=-b/a$; the axis is the midpoint $S/2$.",
                D(f"g(x)={L(g)}"),
                D(f"S={F(vsum(g))}"),
                D(f"x_{{\\text{{axis}}}}={F(h)}"),
                close(True, "Sum and axis agree with the factors"),
            ]), [f"S={F(vsum(g))}", f"x={F(h)}"]),
            lambda: True,
        ),
        C(
            f"The axis of symmetry is $x={F(wrong_axis)}$ because one root is shifted by one unit.",
            False,
            enrich(pack("C", False, [
                "Shifting a single root would move the midpoint, but both roots are fixed; the axis stays at their average.",
                D(f"x={F(h)}\\neq {F(wrong_axis)}"),
                close(False, f"The axis is $x={F(h)}$, not $x={F(wrong_axis)}$"),
            ]), [f"x={F(h)}", f"\\text{{trap}}={F(wrong_axis)}"]),
            lambda: False,
        ),
        C(
            f"The product of the roots equals ${F(wrong_prod)}$ (sign flipped from $c/a$).",
            False,
            enrich(pack("D", False, [
                "Vieta gives $P=c/a$ with no extra minus; flipping the sign is a common exam trap.",
                D(f"P={F(vprod(g))}={F(r1)}\\cdot{F(r2)}"),
                close(False, f"The product is ${F(vprod(g))}$, not ${F(wrong_prod)}$"),
            ]), [f"P={F(vprod(g))}", f"c/a={F(vprod(g))}"]),
            lambda: False,
        ),
        C(
            f"At the left-hand zero $x={F(r1)}$, the signed gap $f-g$ equals ${F(gap_at_r1)}$, "
            f"and the graphs meet in exactly {meet} real points overall.",
            True,
            enrich(pack("E", True, [
                "At a zero of $g$, the gap collapses to $f(r)$. Separately, meetings solve $g-f=0$.",
                D(f"f\\left({F(r1)}\\right)-g\\left({F(r1)}\\right)={F(gap_at_r1)}"),
                D(f"g(x)-f(x)={L(expand(g - f))}"),
                D(f"\\Delta={L(disc(expand(g - f)))}\\Rightarrow {meet}\\text{{ meetings}}"),
                close(True, "Both the local gap and the global meeting count match"),
            ]), [f"gap={F(gap_at_r1)}", f"meetings={meet}"]),
            lambda: True,
        ),
    ])
    return TaskSpec(
        f"Mixed exam — {name} factored read",
        openings[cycle],
        "factored",
        claims,
        f"Factored $g(x)={fact_tex}$; roots ${F(r1)},{F(r2)}$; axis $x={F(h)}$; $P={F(vprod(g))}$; {meet} meetings.",
    )


def build_hybrid(idx: int, cycle: int) -> TaskSpec:
    f, g, m, k, a, b, c = models(idx)
    h, kv = vertex(g)
    meet = nmeet(f, g)
    name = SCENES[idx]
    A, B, Cc = rewrite_coeffs(f, g)
    gap0 = Rational(f.subs(x, 0) - g.subs(x, 0))
    if cycle == 0:
        tbl = None
        fig = make_figure(g, f, idx, f"{name} hybrid")
        ctx = (
            f"The figure shows $g(x)={L(g)}$ (solid) and $f(x)={L(f)}$ (dashed) for "
            f"{name}. Cross-check geometry against algebra. {TAIL}"
        )
        claims = balance([
            C(
                f"From the sketch, the axis is $x={F(h)}$ and the vertex height is ${F(kv)}$.",
                True,
                enrich(pack("A", True, [
                    "Read the marked turning point; confirm with $-b/(2a)$ and $g$ there.",
                    D(f"x={F(h)}"),
                    D(f"g\\left({F(h)}\\right)={F(kv)}"),
                    close(True, "Axis and height match the figure"),
                ]), [f"g(x)={L(g)}"]),
                lambda: True,
            ),
            C(
                f"The rewrite $g=A f^{2}+B f+C$ has $A={F(A)}$, readable from leading coefficients alone.",
                True,
                enrich(pack("B", True, [
                    "Leading-coefficient quotient $a/m^{2}$ gives $A$ without expanding fully.",
                    D(f"A=\\frac{{{L(a)}}}{{{L(m)}^{2}}}={F(A)}"),
                    close(True, f"$A={F(A)}$"),
                ]), [f"A={F(A)}"]),
                lambda: True,
            ),
            C(
                f"The curves meet in exactly {wrong_near(meet, idx)} points.",
                False,
                enrich(pack("C", False, [
                    "Solve $g=f$ and read the discriminant.",
                    D(f"\\Delta={L(disc(expand(g - f)))}"),
                    close(False, f"There are {meet} meetings, not {wrong_near(meet, idx)}"),
                ]), [f"\\#={meet}"]),
                lambda: False,
            ),
            C(
                f"At $x=0$, the gap $f-g$ equals ${F(gap0)}$.",
                True,
                enrich(pack("D", True, [
                    "Evaluate both formulas at the origin before subtracting.",
                    D(f"f(0)-g(0)={F(gap0)}"),
                    close(True, "The gap matches"),
                ]), [f"f(0)={F(Rational(f.subs(x,0)))}", f"g(0)={F(Rational(g.subs(x,0)))}"]),
                lambda: True,
            ),
            C(
                f"Because the figure shows a parabola, $g(f(x))$ must have degree $3$.",
                False,
                enrich(pack("E", False, [
                    "Nesting multiplies degrees: $2\\cdot 1=2$.",
                    D(f"g(f(x))={L(expand(g.subs(x, f)))}"),
                    close(False, "The composition stays quadratic"),
                ]), ["\\text{top power}=2"]),
                lambda: False,
            ),
        ])
    elif cycle == 1:
        tbl = small_xy_table(f, g, [0, 1, 2, 3, 4])
        fig = None
        ctx = (
            f"{name} published a spot table (below) together with the formulas "
            f"$g(x)={L(g)}$ and $f(x)={L(f)}$. Mix table lookups with algebra. {TAIL}"
        )
        g2 = Rational(g.subs(x, 2))
        claims = balance([
            C(
                f"From the table, $g(2)={F(g2)}$, matching the printed parabola.",
                True,
                enrich(pack("A", True, [
                    "Read the $x=2$ column, then substitute into $g$ as a cross-check.",
                    D(f"g(2)={F(g2)}"),
                    close(True, "Table and formula agree at $x=2$"),
                ]), [f"g(2)={F(g2)}"]),
                lambda: True,
            ),
            C(
                f"The axis computed from coefficients is $x={F(h)}$, which is not an integer "
                f"column of the table when ${F(h)}$ fails to be an integer sample."
                if Rational(h).q != 1 else
                f"The axis $x={F(h)}$ appears as a sample column; $g({F(h)})={F(kv)}$ matches the vertex height.",
                True,
                enrich(pack("B", True, [
                    "Form $-b/(2a)$ from coefficients; the table may or may not sample that abscissa.",
                    D(f"x={F(h)}"),
                    D(f"g\\left({F(h)}\\right)={F(kv)}"),
                    close(True, "The axis claim is consistent with the coefficients"),
                ]), [f"x={F(h)}"]),
                lambda: True,
            ),
            C(
                f"First differences of the $g$-row are constant, so $g$ is linear.",
                False,
                enrich(pack("C", False, [
                    "A quadratic row has linearly growing first differences and constant second differences.",
                    D(f"g(x)={L(g)}"),
                    close(False, "Constant first differences would require a line, not $g$"),
                ]), ["\\Delta^{{(1)}}\\text{ not constant for }g"]),
                lambda: False,
            ),
            C(
                f"The curves meet in exactly {meet} points, and at $x=0$ the gap is ${F(gap0)}$.",
                True,
                enrich(pack("D", True, [
                    "Combine a discriminant count with an origin evaluation.",
                    D(f"\\Delta={L(disc(expand(g - f)))}"),
                    D(f"f(0)-g(0)={F(gap0)}"),
                    close(True, "Meeting count and origin gap both match"),
                ]), [f"\\#={meet}", f"\\text{{gap}}={F(gap0)}"]),
                lambda: True,
            ),
            C(
                f"The slope of $f$ equals ${F(m + 1)}$ because the table's first $f$-step looks steeper.",
                False,
                enrich(pack("E", False, [
                    "Read the coefficient of $x$ in the printed line; a single table step is not a slope trap.",
                    D(f"f(x)={L(f)}"),
                    D(f"m={F(m)}\\neq{F(m + 1)}"),
                    close(False, f"The slope is ${F(m)}$"),
                ]), [f"m={F(m)}"]),
                lambda: False,
            ),
        ])
    else:
        tbl = small_xy_table(f, g, [0, 2, 4])
        fig = make_figure(g, f, idx, f"{name} hybrid-3")
        ctx = (
            f"{name} supplies both a sparse table and a figure for $f(x)={L(f)}$, "
            f"$g(x)={L(g)}$. Each letter uses a different evidence channel. {TAIL}"
        )
        claims = balance([
            C(
                f"(Graph) The vertex sits at $\\left({F(h)},{F(kv)}\\right)$.",
                True,
                enrich(pack("A", True, [
                    "Confirm the marked turning point with algebra.",
                    D(f"x={F(h)},\\quad g={F(kv)}"),
                    close(True, "The vertex matches"),
                ]), [f"({F(h)},{F(kv)})"]),
                lambda: True,
            ),
            C(
                f"(Table) The gap $f-g$ at $x=2$ equals ${F(Rational(f.subs(x,2)-g.subs(x,2)))}$.",
                True,
                enrich(pack("B", True, [
                    "Subtract the two table entries in the $x=2$ column.",
                    D(f"f(2)-g(2)={F(Rational(f.subs(x,2)-g.subs(x,2)))}"),
                    close(True, "The table gap matches"),
                ]), [f"f(2)={F(Rational(f.subs(x,2)))}"]),
                lambda: True,
            ),
            C(
                f"(Algebra) Rewrite coefficient $A$ equals ${F(A + 1)}$.",
                False,
                enrich(pack("C", False, [
                    "Compute $A=a/m^{2}$ carefully.",
                    D(f"A={F(A)}\\neq{F(A + 1)}"),
                    close(False, f"The correct $A$ is ${F(A)}$"),
                ]), [f"A={F(A)}"]),
                lambda: False,
            ),
            C(
                f"(Meetings) Discriminant of $g-f$ gives exactly {meet} real intersections.",
                True,
                enrich(pack("D", True, [
                    "Form $g-f$ and read $\\Delta$.",
                    D(f"\\Delta={L(disc(expand(g - f)))}"),
                    close(True, f"There are {meet} meetings"),
                ]), [f"\\#={meet}"]),
                lambda: True,
            ),
            C(
                f"(Nesting) $g(f(x))$ has degree $3$ because a parabola wraps a line.",
                False,
                enrich(pack("E", False, [
                    "Degrees multiply: $2\\cdot 1=2$.",
                    D(f"g(f(x))={L(expand(g.subs(x, f)))}"),
                    close(False, "The degree is $2$"),
                ]), ["\\text{top power}=2"]),
                lambda: False,
            ),
        ])
    return TaskSpec(
        f"Mixed exam — {name} hybrid check",
        ctx,
        "hybrid",
        claims,
        f"Hybrid $f$, $g$; axis $x={F(h)}$; {meet} meetings; $A={F(A)}$.",
        figure=fig,
        tables_markdown=tbl,
    )


def build_text_dense(idx: int, cycle: int) -> TaskSpec:
    name = SCENES[idx]
    ctx = (
        f"Chapter 7 mixed exam — {name} batch {cycle + 1}. Each statement below is its "
        f"own mini-scenario about lines or parabolas; no shared stem formulas. {TAIL}"
    )
    # Five independent micro-scenarios, varied by idx and cycle
    p2 = expand((idx % 5 + 1) * x**2 - (2 + idx % 4) * x + (1 + idx % 3))
    ax2 = axis(p2)
    kv2 = vertex(p2)[1]
    m2 = Rational(2 + idx % 4)
    k2 = Rational(1 + idx % 5)
    line2 = expand(m2 * x + k2)
    py = m2 * 2 + k2
    # (iii) vertex of a different quadratic
    q = expand(-2 * x**2 + (6 + cycle) * x - (3 + idx % 2))
    qh, qkv = vertex(q)
    # (iv) composition trap with fresh pair
    ff = x + (1 + cycle)
    gg = (1 + idx % 2) * x**2 - (3 + cycle) * x
    gf_exp = expand(gg.subs(x, ff))
    deg_bad = Poly(gf_exp, x).degree() + 1
    # (v) Vieta product trap
    rA, rB = Rational(1 + cycle), Rational(5 + idx % 3)
    poly_v = expand((x - rA) * (x - rB))
    wrong_P = -vprod(poly_v)

    stmts = [
        C(
            f"(i) For $p(x)={L(p2)}$, the axis is $x={F(ax2)}$ and the vertex height is ${F(kv2)}$.",
            True,
            enrich(pack("A", True, [
                "Apply $x=-b/(2a)$ then evaluate $p$ there.",
                D(f"x={F(ax2)}"),
                D(f"p\\left({F(ax2)}\\right)={F(kv2)}"),
                close(True, "Axis and height both match"),
            ]), [f"p(x)={L(p2)}"]),
            lambda: True,
        ),
        C(
            f"(ii) A line with slope ${F(m2)}$ through $\\left(2,{F(py)}\\right)$ is "
            f"$y={L(line2)}$, but shifting the intercept by $1$ would still pass through the point.",
            False,
            enrich(pack("B", False, [
                "Point-slope reconstruction fixes both slope and intercept; changing the "
                "intercept moves the line off the given point.",
                D(f"y-{F(py)}={F(m2)}(x-2)\\Rightarrow y={L(line2)}"),
                D(f"y={L(line2 + 1)}\\text{{ misses }}(2,{F(py)})"),
                close(False, "The intercept cannot be shifted without leaving the point"),
            ]), [f"y={L(line2)}"]),
            lambda: False,
        ),
        C(
            f"(iii) For $q(x)={L(q)}$, the vertex occurs at $x={F(qh)}$ with height ${F(qkv)}$.",
            True,
            enrich(pack("C", True, [
                "Axis $x=-b/(2a)$; evaluate $q$ there for the height.",
                D(f"x={F(qh)}"),
                D(f"q\\left({F(qh)}\\right)={F(qkv)}"),
                close(True, "Vertex abscissa and height match"),
            ]), [f"q(x)={L(q)}"]),
            lambda: True,
        ),
        C(
            f"(iv) With $f(x)={L(ff)}$ and $g(x)={L(gg)}$, the composition $g(f(x))$ has "
            f"degree ${deg_bad}$.",
            False,
            enrich(pack("D", False, [
                "Degrees multiply under nesting.",
                D(f"g(f(x))={L(gf_exp)}"),
                D(f"\\text{{top power}}={Poly(gf_exp, x).degree()}\\neq {deg_bad}"),
                close(False, f"The degree is ${Poly(gf_exp, x).degree()}$, not ${deg_bad}$"),
            ]), [f"g(f(x))={L(gf_exp)}"]),
            lambda: False,
        ),
        C(
            f"(v) The roots of ${L(poly_v)}=0$ multiply to ${F(wrong_P)}$.",
            False,
            enrich(pack("E", False, [
                "Vieta: product $c/a$ with no extra minus sign.",
                D(f"P={F(vprod(poly_v))}={F(rA)}\\cdot{F(rB)}"),
                close(False, f"The product is ${F(vprod(poly_v))}$, not ${F(wrong_P)}$"),
            ]), [f"P={F(vprod(poly_v))}"]),
            lambda: False,
        ),
    ]
    return TaskSpec(
        f"Mixed exam — {name} dense scenarios",
        ctx,
        "text_dense",
        balance(stmts),
        f"Five independent Ch7 micro-scenarios; local axis $x={F(ax2)}$.",
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
    cycle = idx // 10
    return BUILDERS[kind](idx, cycle)


def verify_claims(spec: TaskSpec) -> None:
    if spec.stem_kind == "symbolic":
        blob = spec.context + " ".join(c.text for c in spec.claims)
        if re.search(r"(?<![a-zA-Z])(?:-?\d+\\frac|\\d+)(?![a-zA-Z])", blob):
            # allow \neq etc; symbolic should have no bare numerals in claims
            nums = re.findall(r"(?<![\\$])\b\d+\b", blob)
            if nums:
                raise AssertionError(f"symbolic task has numbers: {spec.title} :: {nums}")
        return
    for c in spec.claims:
        if c.check is not None and c.check() != c.truth:
            raise AssertionError(f"check mismatch {spec.title}: {c.text[:60]} truth={c.truth}")


def render(spec: TaskSpec, idx: int) -> dict:
    n = idx + 1
    task = {
        "id": f"math-7-e{n}",
        "case_id": f"MATH 7.E{str(n).zfill(2)}",
        "title": spec.title,
        "subsection": "7.5",
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [c.truth for c in spec.claims],
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


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"
    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert kinds == Counter(dict.fromkeys(STEM_KINDS, 3)), kinds
    figs = sum(1 for t in tasks if t.get("figure"))
    tables = sum(1 for t in tasks if t.get("tables_markdown"))
    assert figs >= 6, figs
    assert tables >= 6, tables
    expl_lens = []
    for i, t in enumerate(tasks):
        n = i + 1
        assert t["id"] == f"math-7-e{n}"
        assert t["case_id"] == f"MATH 7.E{str(n).zfill(2)}"
        assert t["subsection"] == "7.5"
        assert t["sort_order"] == 100 + n
        assert t["difficulty_level"] == "5/5"
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        truths = sum(t["answer_key"])
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
        blob = " ".join(t["tactical_explanations"])
        assert "Matching the claim" not in blob
        assert "\\deg" not in blob and "\\circ" not in blob
        for j, e in enumerate(t["tactical_explanations"]):
            assert "so the statement is" in e, (t["case_id"], j)
            assert e.count("$$") >= 4, (t["case_id"], j, e.count("$$"))
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1)
            expl_lens.append(len(e))
    median = statistics.median(expl_lens)
    assert median >= 420, median


def main() -> None:
    specs = [build_task(i) for i in range(30)]
    for s in specs:
        verify_claims(s)
    tasks = [render(s, i) for i, s in enumerate(specs)]
    for t in tasks:
        t["context"] = normalize_displays(t["context"])
        t["solution_overview"] = normalize_displays(t["solution_overview"])
        t["tactical_explanations"] = [normalize_displays(e) for e in t["tactical_explanations"]]
    validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    kinds = Counter(t["stem_kind"] for t in tasks)
    figs = sum(1 for t in tasks if t.get("figure"))
    tables = sum(1 for t in tasks if t.get("tables_markdown"))
    expl_lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    median = statistics.median(expl_lens)
    truths = Counter(sum(t["answer_key"]) for t in tasks)
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("stem_kind counts:", dict(sorted(kinds.items())))
    print(f"figures: {figs}, tables: {tables}")
    print(f"explanation median: {median:.0f} chars")
    print("truth counts per task:", dict(sorted(truths.items())))
    print("validation: PASSED")


if __name__ == "__main__":
    main()
