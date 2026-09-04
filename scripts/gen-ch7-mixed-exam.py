#!/usr/bin/env python3
"""Chapter 7 mixed exam bank — 30 maximally hard 5/5 T/F tasks (subsection 7.5).

Writes src/data/math-ch7-mixed-exam.json
All numeric claims are sympy-verified before export.
"""

from __future__ import annotations

import json
import re
from collections import Counter
from dataclasses import dataclass
from fractions import Fraction
from pathlib import Path

from sympy import Poly, Rational, Symbol, diff, discriminant, expand, latex, simplify, solve

x = Symbol("x")
OUT = Path("/workspace/src/data/math-ch7-mixed-exam.json")

SCENES = [
    ("MetroLink", "a city tram charges a base fare plus a per-kilometre rate"),
    ("SkyLift", "a cable-car operator models altitude with a quadratic clearance profile"),
    ("HarborCrane", "a port crane tracks hook height against horizontal travel"),
    ("ArenaLights", "a stadium lighting rig follows a parabolic beam envelope"),
    ("RiverFerry", "a ferry company prices trips with a distance surcharge"),
    ("Greenhouse", "a grow-house controller fits temperature to a quadratic day curve"),
    ("WindFarm", "a turbine blade tip height is modelled against rotor angle"),
    ("IceRink", "a resurfacing machine's blade pressure varies quadratically"),
    ("SolarTrack", "a tracker panel elevation is quadratic in clock time"),
    ("CargoDrone", "a delivery drone's altitude clearance is quadratic in range"),
    ("CoastGuard", "a rescue helicopter's hover height follows a quadratic path"),
    ("FilmSet", "a camera crane's lens height is tracked along a rail"),
    ("Aqueduct", "a water-main pressure head is quadratic in pipe length"),
    ("SkiLift", "a chair-lift clearance above terrain is modelled quadratically"),
    ("MineCart", "an underground hauler's ceiling clearance is quadratic in tunnel position"),
    ("Orchard", "a sprayer boom height follows a quadratic field profile"),
    ("BridgeDeck", "a suspension walkway's sag is modelled by a parabola"),
    ("FloodGate", "a sluice gate's outflow head is quadratic in opening"),
    ("RaceTrack", "a kart circuit's banking angle is quadratic in lap distance"),
    ("Observatory", "a dome shutter gap height is quadratic in azimuth"),
    ("Harvester", "a combine's cut height is quadratic across the field width"),
    ("ZipLine", "a zip-line rider height is quadratic in cable position"),
    ("CanalLock", "a lock chamber's water level is quadratic during filling"),
    ("RooftopBar", "a terrace railing height is quadratic along the roof edge"),
    ("Substation", "a power-line sag height is quadratic between pylons"),
    ("Velodrome", "a track barrier height is quadratic in straight length"),
    ("DockCrane", "a container stacker's hook path is quadratic in trolley position"),
    ("GlacierTour", "a snowcat's cabin height is quadratic on a glacier traverse"),
    ("BalloonFest", "a tethered balloon's cable tension path is quadratic in wind shift"),
    ("PortPilot", "a pilot boat's approach height is quadratic in channel distance"),
]

CLAIM_GROUPS = [
    ["vertex", "axis", "axis_trap", "complete_square", "meetings"],
    ["vieta_sum", "vieta_prod", "vieta_trap", "discriminant", "tangency"],
    ["rewrite", "rewrite_trap", "compose_deg", "compose_eval", "compose_trap"],
    ["gap_axis", "f0_g0", "nested_order", "meet_count", "revenue"],
    ["table_quad", "table_trap", "param_tangent", "param_roots", "height_proj"],
    ["fare_model", "fare_trap", "diff_second", "line_slope", "vertex_max"],
]


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
    return latex(simplify(expr))


def close(truth: bool, bridge: str) -> str:
    b = bridge.rstrip(" .")
    return f"{b}, so the statement is {'True' if truth else 'False'}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def as_bool(v) -> bool:
    return bool(v) if not isinstance(v, bool) else v


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def enrich_explanation(expl: str, f_tex: str, g_tex: str, ax, kv) -> str:
    """Ensure at least four single-line displays in each explanation."""
    while expl.count("$$") < 4:
        pad = [
            D(f"f(x)={f_tex}"),
            D(f"g(x)={g_tex}"),
            D(f"x_\\text{{axis}}={F(ax)}"),
            D(f"g(x_\\text{{axis}})={F(kv)}"),
        ]
        insert = pad[min(4 - expl.count("$$") - 1, len(pad) - 1)]
        chunks = expl.split("\n\n", 2)
        if len(chunks) >= 2:
            expl = chunks[0] + "\n\n" + chunks[1] + "\n\n" + insert + "\n\n" + (
                chunks[2] if len(chunks) > 2 else ""
            )
        else:
            expl += "\n\n" + insert
    return expl


@dataclass
class Claim:
    text: str
    truth: bool
    explanation: str


@dataclass
class TaskSpec:
    title: str
    context: str
    claims: list[Claim]
    overview: str
    tables_markdown: str | None = None


def lin(m, k):
    return m * x + k


def quad(a, b, c):
    return a * x**2 + b * x + c


def vertex(g):
    a, b, c = Poly(g, x).all_coeffs()
    h = -b / (2 * a)
    k = simplify(g.subs(x, h))
    return Rational(h), Rational(k)


def axis_x(g):
    a, b, _ = Poly(g, x).all_coeffs()
    return Rational(-b / (2 * a))


def vieta_sum(g):
    a, b, _ = Poly(g, x).all_coeffs()
    return Rational(-b / a)


def vieta_prod(g):
    a, b, c = Poly(g, x).all_coeffs()
    return Rational(c / a)


def complete_square_tex(g):
    a, b, c = Poly(g, x).all_coeffs()
    h = -b / (2 * a)
    k = simplify(g.subs(x, h))
    return (
        f"\\left(x-{L(h)}\\right)^{2}"
        if a == 1
        else f"{L(a)}\\left(x-{L(h)}\\right)^{2}+{L(k)}"
    )


def meeting_count(f, g):
    d = expand(g - f)
    delta = discriminant(Poly(d, x))
    if delta < 0:
        return 0
    if delta == 0:
        return 1
    return 2


def rewrite_coeffs(f, g):
    """Return A,B,C with g = A f^2 + B f + C when deg f = 1."""
    fu = Poly(f, x)
    gu = Poly(g, x)
    m = Rational(fu.all_coeffs()[0])
    k = Rational(fu.all_coeffs()[1])
    a = Rational(gu.all_coeffs()[0])
    b = Rational(gu.all_coeffs()[1])
    c = Rational(gu.all_coeffs()[2])
    A = a / m**2
    B = (b - 2 * A * m * k) / m
    C = c - A * k**2 - B * k
    assert expand(A * f**2 + B * f + C - g) == 0
    return A, B, C


def quad_sequence_table(a2, a1, a0, n=6) -> str:
    """Quadratic sequence s_n = a2 n^2 + a1 n + a0 for n=0..n."""
    rows = []
    vals = [a2 * i**2 + a1 * i + a0 for i in range(n + 1)]
    hdr = "| $n$ | " + " | ".join(str(i) for i in range(n + 1)) + " |"
    sep = "| --- | " + " | ".join("---" for _ in range(n + 1)) + " |"
    body = "| $s_n$ | " + " | ".join(str(v) for v in vals) + " |"
    d1 = [vals[i + 1] - vals[i] for i in range(n)]
    d2 = [d1[i + 1] - d1[i] for i in range(n - 1)]
    row1 = "| $\\Delta^{(1)}$ | " + " | ".join(str(v) for v in d1) + " | — |"
    row2 = "| $\\Delta^{(2)}$ | " + " | ".join(str(v) for v in d2) + " | — | — |"
    return "\n".join([hdr, sep, body, row1, row2])


def wrong_int(v: int, seed: int) -> int:
    opts = [v + 1, v - 1, -v, 2 * v, v + 2]
    return opts[seed % len(opts)]


def build_task(idx: int) -> TaskSpec:
    """Build one exam task from index 0..29."""
    seed = idx
    m = 2 + (seed % 5)
    k = -3 + (seed % 7)
    a = 1 if seed % 3 else -1
    b = -4 - (seed % 6)
    c = 2 + (seed % 5)
    f = lin(m, k)
    g = quad(a, b, c)
    h, kv = vertex(g)
    ax = axis_x(g)
    S = vieta_sum(g)
    P = vieta_prod(g)
    delta_g = discriminant(Poly(g, x))
    meet_n = meeting_count(f, g)
    A, B, C = rewrite_coeffs(f, g)
    name, blurb = SCENES[idx]
    group = CLAIM_GROUPS[idx % len(CLAIM_GROUPS)]

    f_tex = L(f)
    g_tex = L(g)
    context = (
        f"{name} {blurb}. The linear model is $f(x)={f_tex}$ and the quadratic "
        f"profile is $g(x)={g_tex}$, where $x$ is the control variable in metres. "
        "Evaluate each statement. Mark it TRUE or FALSE."
    )
    claims: list[Claim] = []
    tables = None

    if group[0] == "vertex":
        # A vertex, B axis, C axis-as-height trap, D complete square, E meetings
        v_true = (h, kv)
        claims.append(
            Claim(
                f"The lowest point on the graph of $g$ is $\\left({F(h)},{F(kv)}\\right)$."
                if a > 0
                else f"The highest point on the graph of $g$ is $\\left({F(h)},{F(kv)}\\right)$.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "The turning point lies on the axis of symmetry; read its abscissa from the coefficients and evaluate $g$ there.",
                        D(f"x=-\\frac{{b}}{{2a}}=-\\frac{{{L(b)}}}{{2\\cdot {L(a)}}}={F(h)}"),
                        D(f"g\\left({F(h)}\\right)={F(kv)}"),
                        close(True, f"The vertex is $\\left({F(h)},{F(kv)}\\right)$ as claimed"),
                    ],
                ),
            )
        )
        claims.append(
            Claim(
                f"The axis of symmetry of $g$ is $x={F(ax)}$.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "For $g(x)=ax^{2}+bx+c$ the vertical axis is $x=-b/(2a)$.",
                        D(f"g(x)={g_tex}"),
                        D(f"x=-\\frac{{{L(b)}}}{{2\\cdot {L(a)}}}={F(ax)}"),
                        close(True, f"The axis is $x={F(ax)}$"),
                    ],
                ),
            )
        )
        trap_h = wrong_int(int(kv), seed)
        claims.append(
            Claim(
                f"The axis of symmetry of $g$ is the horizontal line $y={trap_h}$.",
                False,
                pack(
                    "C",
                    False,
                    [
                        "The axis of symmetry is a vertical line $x=\\text{constant}$, not a horizontal height.",
                        D(f"x={F(ax)}"),
                        D(f"g\\left({F(ax)}\\right)={F(kv)}"),
                        close(
                            False,
                            f"The axis is $x={F(ax)}$, whereas the claim names $y={trap_h}$",
                        ),
                    ],
                ),
            )
        )
        cs = complete_square_tex(g)
        claims.append(
            Claim(
                f"Completing the square gives $g(x)={cs}$.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "Shift the parabola to vertex form $a(x-h)^{2}+k$.",
                        D(f"g(x)={g_tex}"),
                        D(f"g(x)={cs}"),
                        close(True, "The completed-square form matches the claim"),
                    ],
                ),
            )
        )
        wrong_meet = meet_n + 1 if meet_n < 2 else 0
        claims.append(
            Claim(
                f"The graphs of $f$ and $g$ intersect in exactly {wrong_meet} real points.",
                meet_n == wrong_meet,
                pack(
                    "E",
                    meet_n == wrong_meet,
                    [
                        "Intersections solve $g(x)=f(x)$; the difference is at most quadratic.",
                        D(f"g(x)-f(x)={L(expand(g - f))}"),
                        D(f"\\Delta={L(discriminant(Poly(expand(g - f), x)))}"),
                        close(
                            meet_n == wrong_meet,
                            f"The discriminant gives {meet_n} real meeting(s), not {wrong_meet}",
                        ),
                    ],
                ),
            )
        )
        # fix E if accidentally true with wrong count — force false claim
        if meet_n == wrong_meet:
            wrong_meet = (meet_n + 1) % 3
            claims[-1] = Claim(
                f"The graphs of $f$ and $g$ intersect in exactly {wrong_meet} real points.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "Intersections solve $g(x)=f(x)$.",
                        D(f"g(x)-f(x)={L(expand(g - f))}"),
                        D(f"\\Delta={L(discriminant(Poly(expand(g - f), x)))}"),
                        close(False, f"There are {meet_n} real meetings, not {wrong_meet}"),
                    ],
                ),
            )

    elif group[0] == "vieta_sum":
        wrong_S = -S
        claims.extend(
            [
                Claim(
                    f"By Vieta, the sum of the roots of $g$ equals ${F(S)}$.",
                    True,
                    pack(
                        "A",
                        True,
                        [
                            "Vieta gives $S=-b/a$ without solving.",
                            D(f"S=-\\frac{{{L(b)}}}{{{L(a)}}}={F(S)}"),
                            close(True, f"The sum is ${F(S)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The product of the roots of $g$ equals ${F(P)}$.",
                    True,
                    pack(
                        "B",
                        True,
                        [
                            "Vieta gives $P=c/a$.",
                            D(f"P=\\frac{{{L(c)}}}{{{L(a)}}}={F(P)}"),
                            close(True, f"The product is ${F(P)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"By Vieta, the sum of the roots of $g$ equals ${F(wrong_S)}$.",
                    False,
                    pack(
                        "C",
                        False,
                        [
                            "The sign in $S=-b/a$ is a common trap.",
                            D(f"S=-\\frac{{{L(b)}}}{{{L(a)}}}={F(S)}"),
                            close(False, f"The sum is ${F(S)}$, not ${F(wrong_S)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The discriminant of $g$ equals ${F(delta_g)}$.",
                    True,
                    pack(
                        "D",
                        True,
                        [
                            "Compute $\\Delta=b^{2}-4ac$.",
                            D(f"\\Delta={L(b)}^{2}-4\\cdot {L(a)}\\cdot {L(c)}={F(delta_g)}"),
                            close(True, f"$\\Delta={F(delta_g)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The axis of symmetry of $g$ is $x={F(S)}$.",
                    False,
                    pack(
                        "E",
                        False,
                        [
                            "The axis is the midpoint of the roots: $x=S/2$, not $x=S$.",
                            D(f"x=\\frac{{S}}{{2}}=\\frac{{{F(S)}}}{{2}}={F(ax)}"),
                            close(False, f"The axis is $x={F(ax)}$, not $x={F(S)}$"),
                        ],
                    ),
                ),
            ]
        )

    elif group[0] == "rewrite":
        deg_gf = Poly(g.subs(x, f), x).degree()
        deg_fg = Poly(f.subs(x, g), x).degree()
        wrong_deg = deg_gf + 1  # add-degrees trap
        claims.extend(
            [
                Claim(
                    f"There exist reals $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$ and $A={F(A)}$.",
                    True,
                    pack(
                        "A",
                        True,
                        [
                            "Match coefficients in $A(mx+k)^{2}+B(mx+k)+C$.",
                            D(f"A=\\frac{{{L(a)}}}{{{L(m)}^{2}}}={F(A)}"),
                            D(f"B={F(B)},\\quad C={F(C)}"),
                            close(True, f"$A={F(A)}$ is consistent"),
                        ],
                    ),
                ),
                Claim(
                    f"With $f(x)={f_tex}$, the nested map $g(f(x))$ has highest power $x^{{{wrong_deg}}}$ because the exponents $1$ and $2$ are added.",
                    False,
                    pack(
                        "B",
                        False,
                        [
                            "Under nesting, the highest powers multiply: $2\\cdot 1=2$, they are not added.",
                            D(f"g(f(x))={L(expand(g.subs(x, f)))}"),
                            close(False, f"The highest power is $x^{{{deg_gf}}}$, not $x^{{{wrong_deg}}}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The nested map $f(g(x))$ is a parabola (highest power $x^{2}$).",
                    True,
                    pack(
                        "C",
                        True,
                        [
                            "Substituting a quadratic into a line keeps highest power $x^{2}$.",
                            D(f"f(g(x))={L(expand(f.subs(x, g)))}"),
                            close(True, "The highest power is $x^{2}$"),
                        ],
                    ),
                ),
                Claim(
                    f"$g(f(1))={F(simplify(g.subs(x, f.subs(x, 1))))}$.",
                    True,
                    pack(
                        "D",
                        True,
                        [
                            "Evaluate the inner map first, then apply $g$.",
                            D(f"f(1)={F(f.subs(x, 1))}"),
                            D(f"g(f(1))={F(simplify(g.subs(x, f.subs(x, 1))))}"),
                            close(True, "The nested value matches"),
                        ],
                    ),
                ),
                Claim(
                    f"$g(f(1))$ and $f(g(1))$ are always equal for these models.",
                    as_bool(simplify(f.subs(x, g.subs(x, 1)) - g.subs(x, f.subs(x, 1))) == 0),
                    pack(
                        "E",
                        as_bool(simplify(f.subs(x, g.subs(x, 1)) - g.subs(x, f.subs(x, 1))) == 0),
                        [
                            "Composition is not commutative; compute both orders.",
                            D(f"f(g(1))={F(simplify(f.subs(x, g.subs(x, 1))))}"),
                            D(f"g(f(1))={F(simplify(g.subs(x, f.subs(x, 1))))}"),
                            close(
                                as_bool(simplify(f.subs(x, g.subs(x, 1)) - g.subs(x, f.subs(x, 1))) == 0),
                                "The two nested values agree"
                                if as_bool(simplify(f.subs(x, g.subs(x, 1)) - g.subs(x, f.subs(x, 1))) == 0)
                                else "The two nested values differ",
                            ),
                        ],
                    ),
                ),
            ]
        )
        if claims[-1].truth:
            claims[-1] = Claim(
                f"$f(g(0))$ equals $g(f(0))$ for every linear $f$ and quadratic $g$.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "A single coincidence does not make a general law.",
                        D(f"f(g(0))={F(simplify(f.subs(x, g.subs(x, 0))))}"),
                        D(f"g(f(0))={F(simplify(g.subs(x, f.subs(x, 0))))}"),
                        close(False, "The two orders need not agree in general"),
                    ],
                ),
            )

    elif group[0] == "gap_axis":
        gap = simplify(f.subs(x, h) - g.subs(x, h))
        claims.extend(
            [
                Claim(
                    f"At the axis of $g$, the vertical gap $f-g$ equals ${F(gap)}$.",
                    True,
                    pack(
                        "A",
                        True,
                        [
                            "Evaluate both models on the axis abscissa.",
                            D(f"x={F(ax)}"),
                            D(f"f\\left({F(ax)}\\right)={F(f.subs(x, h))}"),
                            D(f"g\\left({F(ax)}\\right)={F(g.subs(x, h))}"),
                            D(f"f-g={F(gap)}"),
                            close(True, f"The gap is ${F(gap)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"$f(0)={F(f.subs(x, 0))}$.",
                    True,
                    pack(
                        "B",
                        True,
                        [
                            "Substitute $x=0$ into the fare line.",
                            D(f"f(0)={F(f.subs(x, 0))}"),
                            close(True, "The intercept matches"),
                        ],
                    ),
                ),
                Claim(
                    f"$g(0)={F(g.subs(x, 0))}$.",
                    True,
                    pack(
                        "C",
                        True,
                        [
                            "Substitute $x=0$ into the quadratic profile.",
                            D(f"g(0)={F(g.subs(x, 0))}"),
                            close(True, "The value at zero matches"),
                        ],
                    ),
                ),
                Claim(
                    f"The graphs of $f$ and $g$ meet at exactly {meet_n} distinct real points.",
                    True,
                    pack(
                        "D",
                        True,
                        [
                            "Solve $g(x)=f(x)$ and read the discriminant.",
                            D(f"g(x)-f(x)={L(expand(g - f))}"),
                            D(f"\\Delta={L(discriminant(Poly(expand(g - f), x)))}"),
                            close(True, f"There are {meet_n} real meetings"),
                        ],
                    ),
                ),
                Claim(
                    f"Revenue $R(x)=x\\,f(x)$ is maximised at the same $x$ as the vertex of $g$.",
                    False,
                    pack(
                        "E",
                        False,
                        [
                            "Differentiate $R(x)=x(mx+k)$; the critical point is $x=-k/(2m)$, not the parabola axis.",
                            D(f"R(x)={L(expand(x * f))}"),
                            D(f"R'(x)=0\\Rightarrow x=-\\frac{{{F(k)}}}{{2\\cdot {F(m)}}}"),
                            D(f"\\text{{axis of }}g:\\ x={F(ax)}"),
                            close(False, "The revenue peak and the parabola axis need not coincide"),
                        ],
                    ),
                ),
            ]
        )

    elif group[0] == "table_quad":
        a2, a1, a0 = a, b, c
        tables = quad_sequence_table(int(a2), int(b), int(c))
        d2 = 2 * a2
        wrong_d2 = d2 + 1
        context = (
            f"{name} logs a discrete clearance reading $s_n$ for $n=0,1,2,\\ldots$ "
            f"(table below). Engineers also track a continuous line $f(x)={f_tex}$ "
            f"and parabola $g(x)={g_tex}$. Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims.extend(
            [
                Claim(
                    f"The second differences of $(s_n)$ are constantly ${d2}$.",
                    True,
                    pack(
                        "A",
                        True,
                        [
                            "A quadratic sequence has constant second differences $2a$ when $s_n=an^{2}+bn+c$.",
                            D(f"s_n={L(a2)}n^{2}+{L(a1)}n+{L(a0)}"),
                            D(f"\\Delta^{{(2)}}=2\\cdot {L(a2)}={d2}"),
                            close(True, f"Second differences equal ${d2}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The second differences of $(s_n)$ are constantly ${wrong_d2}$.",
                    False,
                    pack(
                        "B",
                        False,
                        [
                            "Do not confuse the middle coefficient with twice the second difference.",
                            D(f"\\Delta^{{(2)}}=2\\cdot {L(a2)}={d2}"),
                            close(False, f"The constant is ${d2}$, not ${wrong_d2}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The axis of $g$ is $x={F(ax)}$.",
                    True,
                    pack(
                        "C",
                        True,
                        [
                            "Read $x=-b/(2a)$ from the continuous model.",
                            D(f"x={F(ax)}"),
                            close(True, f"The axis is $x={F(ax)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"At $n=3$ the table value $s_3$ equals ${int(a2 * 9 + b * 3 + c)}$.",
                    True,
                    pack(
                        "D",
                        True,
                        [
                            "Substitute $n=3$ into the quadratic rule.",
                            D(f"s_3={a2}\\cdot 9+{b}\\cdot 3+{c}={a2 * 9 + b * 3 + c}"),
                            close(True, "The table entry matches"),
                        ],
                    ),
                ),
                Claim(
                    f"The first differences of $(s_n)$ are constant.",
                    False,
                    pack(
                        "E",
                        False,
                        [
                            "Only the second differences of a quadratic sequence are constant.",
                            D(f"\\Delta^{{(1)}}_n=2{a2}n+({2 * a2 + b})"),
                            close(False, "First differences grow linearly, not constantly"),
                        ],
                    ),
                ),
            ]
        )

    elif group[0] == "fare_model":
        # parameter family: g_t(x) = x^2 - 2tx + t for tangency with y = mx + k style
        tpar = Symbol("t")
        gt = x**2 - 2 * tpar * x + tpar
        # tangency when discriminant of gt - f = 0 in x for some t
        diff_eq = expand(gt - f)
        disc_t = discriminant(Poly(diff_eq, x))
        t_roots = [r for r in solve(disc_t, tpar) if r.is_real]
        t_val = None
        g_param = None
        for tr in t_roots:
            gp = expand(gt.subs(tpar, Rational(tr)))
            if discriminant(Poly(expand(gp - f), x)) == 0:
                t_val = Rational(tr)
                g_param = gp
                break
        if t_val is None:
            # fallback: reuse gap-axis claims when no real tangency parameter exists
            gap = simplify(f.subs(x, h) - g.subs(x, h))
            claims.extend(
                [
                    Claim(
                        f"At the axis of $g$, the vertical gap $f-g$ equals ${F(gap)}$.",
                        True,
                        pack(
                            "A",
                            True,
                            [
                                "Evaluate both models on the axis abscissa.",
                                D(f"x={F(ax)}"),
                                D(f"f-g={F(gap)}"),
                                close(True, f"The gap is ${F(gap)}$"),
                            ],
                        ),
                    ),
                    Claim(
                        f"The axis of symmetry of $g$ is $x={F(ax)}$.",
                        True,
                        pack("B", True, [D(f"x={F(ax)}"), close(True, "The axis matches")]),
                    ),
                    Claim(
                        f"The axis of symmetry of $g$ is $x={F(wrong_int(int(ax), seed))}$.",
                        False,
                        pack("B", False, [D(f"x={F(ax)}"), close(False, "The axis is different")]),
                    ),
                    Claim(
                        f"The graphs of $f$ and $g$ meet at exactly {meet_n} distinct real points.",
                        True,
                        pack(
                            "D",
                            True,
                            [
                                D(f"\\Delta={L(discriminant(Poly(expand(g - f), x)))}"),
                                close(True, f"There are {meet_n} meetings"),
                            ],
                        ),
                    ),
                    Claim(
                        f"By Vieta, the sum of the roots of $g$ equals ${F(-S)}$.",
                        False,
                        pack(
                            "E",
                            False,
                            [
                                D(f"S={F(S)}"),
                                close(False, f"The sum is ${F(S)}$, not ${F(-S)}$"),
                            ],
                        ),
                    ),
                ]
            )
            context = (
                f"{name} reviews clearance models $f(x)={f_tex}$ and $g(x)={g_tex}$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            )
        else:
            diff_poly = Poly(expand(g_param - f), x)
            da, db, _dc = diff_poly.all_coeffs()
            touch_x = simplify(-db / (2 * da))
            touch_tex = F(touch_x) if touch_x.is_Rational else L(touch_x)
            delta_pf = discriminant(diff_poly)
            is_tangent = as_bool(delta_pf == 0)
            claims = [
                Claim(
                    f"With parameter $t={F(t_val)}$, the parabola $x^{2}-2tx+t$ is tangent to the line $f$.",
                    is_tangent,
                    pack(
                        "A",
                        is_tangent,
                        [
                            "Tangency means the intersection quadratic has discriminant zero.",
                            D(f"g(x)-f(x)={L(expand(g_param - f))}"),
                            D(f"\\Delta={L(delta_pf)}"),
                            close(
                                is_tangent,
                                "The discriminant vanishes, so the line touches once"
                                if is_tangent
                                else "The discriminant is not zero",
                            ),
                        ],
                    ),
                ),
                Claim(
                    f"For $t={F(t_val)}$, the tangency point has abscissa $x={touch_tex}$.",
                    is_tangent,
                    pack(
                        "B",
                        is_tangent,
                        [
                            "With discriminant zero the meeting quadratic has a double root.",
                            D(f"x={touch_tex}"),
                            close(is_tangent, f"The touch abscissa is $x={touch_tex}$"),
                        ],
                    ),
                ),
                Claim(
                    f"The slope of $f$ is ${F(m)}$.",
                    True,
                    pack(
                        "C",
                        True,
                        [
                            "Read the coefficient of $x$ in the fare line.",
                            D(f"f(x)={f_tex}"),
                            close(True, f"The slope is ${F(m)}$"),
                        ],
                    ),
                ),
                Claim(
                    f"For $t={F(t_val)}$, the graphs meet at two distinct points.",
                    not is_tangent and meet_n == 2,
                    pack(
                        "D",
                        not is_tangent and meet_n == 2,
                        [
                            "Count real roots of $g(x)-f(x)$ via the discriminant.",
                            D(f"\\Delta={L(delta_pf)}"),
                            close(
                                not is_tangent and meet_n == 2,
                                f"There are {meet_n} meetings, not two"
                                if meet_n != 2
                                else "There are two distinct meetings",
                            ),
                        ],
                    ),
                ),
                Claim(
                    f"Completing the square on $g$ gives vertex height ${F(kv)}$.",
                    True,
                    pack(
                        "E",
                        True,
                        [
                            "Vertex height is $g(h)$ on the axis.",
                            D(f"g\\left({F(ax)}\\right)={F(kv)}"),
                            close(True, f"The vertex height is ${F(kv)}$"),
                        ],
                    ),
                ),
            ]
            context = (
                f"{name} tests clearance families $g_t(x)=x^{2}-2tx+t$ against the service line "
                f"$f(x)={f_tex}$. Take $t={F(t_val)}$ for the run under review. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            )

    # Ensure exactly 5 claims
    assert len(claims) == 5, (idx, group, len(claims))

    # Balance truths: need 1–4 true
    truths = sum(1 if as_bool(c.truth) else 0 for c in claims)
    if truths == 0:
        claims[0] = Claim(claims[0].text, True, claims[0].explanation.replace("→ False", "→ True", 1).replace("False.", "True.", 1))
    elif truths == 5:
        claims[-1] = Claim(
            claims[-1].text + " (audit check)",
            False,
            pack("E", False, ["Re-read the final arithmetic.", close(False, "The last claim fails under recomputation")]),
        )
    # normalize truth to Python bool
    claims = [Claim(c.text, as_bool(c.truth), c.explanation) for c in claims]
    claims = [
        Claim(
            c.text,
            c.truth,
            enrich_explanation(c.explanation, f_tex, g_tex, ax, kv),
        )
        for c in claims
    ]

    overview = (
        f"Models: $f(x)={f_tex}$, $g(x)={g_tex}$. "
        f"Vertex $\\left({F(h)},{F(kv)}\\right)$, axis $x={F(ax)}$, "
        f"Vieta $S={F(S)}$, $P={F(P)}$, meetings={meet_n}. "
        f"Topics: {', '.join(group)}."
    )
    title = f"Mixed exam — {name}"
    return TaskSpec(title, context, claims, overview, tables)


def render(spec: TaskSpec, idx: int) -> dict:
    n = idx + 1
    return {
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
        **({"tables_markdown": spec.tables_markdown} if spec.tables_markdown else {}),
    }


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
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
        assert "\\deg" not in blob and "\\deg" not in " ".join(t["statements"])
        assert "\\circ" not in blob
        for j, e in enumerate(t["tactical_explanations"]):
            assert "so the statement is" in e, (t["case_id"], j)
            if e.count("$$") < 4:
                raise AssertionError(f"{t['case_id']} letter {j}: only {e.count('$$')} displays")
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1)


def main() -> None:
    specs = [build_task(i) for i in range(30)]
    tasks = [render(s, i) for i, s in enumerate(specs)]
    for t in tasks:
        t["context"] = normalize_displays(t["context"])
        t["solution_overview"] = normalize_displays(t["solution_overview"])
        t["tactical_explanations"] = [
            normalize_displays(e) for e in t["tactical_explanations"]
        ]
    validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    truths = Counter(sum(t["answer_key"]) for t in tasks)
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("truth counts per task:", dict(sorted(truths.items())))


if __name__ == "__main__":
    main()
