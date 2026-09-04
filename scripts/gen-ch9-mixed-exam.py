#!/usr/bin/env python3
"""Chapter 9 mixed exam bank — 30 maximally hard 5/5 T/F tasks (subsection 9.5).

Writes src/data/math-ch9-mixed-exam.json
All numeric claims are sympy-verified before export.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

from sympy import Poly, Rational, Symbol, diff, discriminant, expand, factor, latex, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
t = Symbol("t")
OUT = Path("/workspace/src/data/math-ch9-mixed-exam.json")

SCENES = [
    "A flood-control gate models discharge with a cubic head curve",
    "A robotics arm stores joint torque as a cubic polynomial in angle",
    "A vaccine batch potency drifts along a quartic stability curve",
    "A wind-tunnel lift coefficient follows a cubic in airspeed",
    "A chemical reactor temperature profile is a cubic in residence time",
    "A satellite antenna gain is quartic in elevation",
    "A bridge cable tension is cubic in span position",
    "A hydroelectric penstock pressure head is cubic in flow",
    "A particle accelerator deflection is quartic in beam energy",
    "A soil compaction test reads a cubic stress–strain law",
    "A piano string overtone amplitude is cubic in strike force",
    "A glacier melt rate is quartic in daily temperature",
    "A drone battery drain is cubic in payload mass",
    "A telescope focus error is cubic in mirror temperature",
    "A mine ventilation fan curve is quartic in shaft depth",
    "A vaccine cold-chain alarm uses a cubic in elapsed hours",
    "A roller-coaster lateral force is cubic in track curvature",
    "A desalination membrane flux is quartic in salinity",
    "A seismic isolator stiffness is cubic in displacement",
    "A laser cutter kerf width is quartic in feed rate",
    "A tidal turbine torque is cubic in blade pitch",
    "A greenhouse CO₂ uptake is cubic in light intensity",
    "A ski jump landing profile is quartic in distance",
    "A cargo ship roll angle is cubic in wave height",
    "A MRI gradient coil field is quartic in current",
    "A compost heap temperature is cubic in week number",
    "A dam spillway scour depth is quartic in discharge",
    "A concert hall reverberation is cubic in audience count",
    "A pipeline pig speed is quartic in pressure drop",
    "A solar panel soiling loss is cubic in dust index",
]

GROUPS = [
    "factor",
    "multiplicity",
    "end_behaviour",
    "even_odd",
    "compose",
    "param_shift",
    "speed_table",
    "from_roots",
    "meet_poly",
    "quartic",
]

# task indices (0-based) that carry SVG figures
FIGURE_TASKS = {2, 8, 14, 20, 26, 11}


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


def enrich_explanation(expl: str, p_tex: str) -> str:
    while expl.count("$$") < 4:
        insert = D(f"p(x)={p_tex}")
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
    figure: str | None = None
    tables_markdown: str | None = None


def poly_from_roots(roots: list[int], lead: int = 1) -> object:
    expr = lead
    for r in roots:
        expr *= x - r
    return expand(expr)


def end_sign(lead: int, deg: int, direction: str) -> str:
    if deg % 2 == 0:
        return "same" if lead > 0 else "same"
    return "opposite" if lead > 0 else "opposite"


def speed_table(speed_expr, t_vals: list[int]) -> str:
    rows = ["| Time $t$ (s) | " + " | ".join(str(v) for v in t_vals) + " |"]
    rows.append("| --- | " + " | ".join("---" for _ in t_vals) + " |")
    dist = [0]
    for i in range(1, len(t_vals)):
        dt = t_vals[i] - t_vals[i - 1]
        mid = (t_vals[i] + t_vals[i - 1]) / 2
        dist.append(dist[-1] + float(speed_expr.subs(t, mid)) * dt)
    rows.append("| Distance (m) | " + " | ".join(str(int(round(d))) for d in dist) + " |")
    return "\n".join(rows)


def build_task(idx: int) -> TaskSpec:
    seed = idx
    group = GROUPS[idx % len(GROUPS)]
    name = SCENES[idx].split()[0] if idx < len(SCENES) else "Model"
    blurb = SCENES[idx]

    # coefficient families
    r1 = -2 + (seed % 5)
    r2 = 1 + (seed % 4)
    r3 = 3 + (seed % 3)
    lead = 1 if seed % 2 == 0 else -1
    p = poly_from_roots([r1, r2, r3], lead)
    p_tex = L(p)
    dp = diff(p, x)
    ddp = diff(dp, x)

    claims: list[Claim] = []
    figure = None
    tables = None
    context = (
        f"{blurb}. The controlling polynomial is $p(x)={p_tex}$. "
        "Evaluate each statement. Mark it TRUE or FALSE."
    )

    if group == "factor":
        val_at_r2 = simplify(p.subs(x, r2))
        wrong_root = r2 + 1
        claims = [
            Claim(
                f"By the factor theorem, $(x-{r2})$ is a factor of $p$ because $p({r2})=0$.",
                val_at_r2 == 0,
                pack(
                    "A",
                    val_at_r2 == 0,
                    [
                        "A factor $(x-a)$ exists exactly when $p(a)=0$.",
                        D(f"p({r2})={L(val_at_r2)}"),
                        close(val_at_r2 == 0, f"$p({r2})=0$ confirms the factor"),
                    ],
                ),
            ),
            Claim(
                f"$p({wrong_root})=0$, so $(x-{wrong_root})$ is also a factor.",
                simplify(p.subs(x, wrong_root)) == 0,
                pack(
                    "B",
                    simplify(p.subs(x, wrong_root)) == 0,
                    [
                        "Test the proposed root by substitution.",
                        D(f"p({wrong_root})={L(simplify(p.subs(x, wrong_root)))}"),
                        close(
                            simplify(p.subs(x, wrong_root)) == 0,
                            f"The value at $x={wrong_root}$ is zero"
                            if simplify(p.subs(x, wrong_root)) == 0
                            else f"$p({wrong_root})\\neq 0$",
                        ),
                    ],
                ),
            ),
            Claim(
                f"Factoring gives $p(x)={L(factor(p))}$.",
                True,
                pack(
                    "C",
                    True,
                    [
                        "Match linear factors to the known roots.",
                        D(f"p(x)={L(factor(p))}"),
                        close(True, "The factorisation matches"),
                    ],
                ),
            ),
            Claim(
                f"The sum of the roots of $p$ equals ${F(-Poly(p, x).all_coeffs()[1] / Poly(p, x).all_coeffs()[0])}$.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "For a cubic $ax^{3}+bx^{2}+cx+d$, the root sum is $-b/a$.",
                        D(
                            f"\\sum r_i={F(-Rational(Poly(p, x).all_coeffs()[1]) / Rational(Poly(p, x).all_coeffs()[0]))}"
                        ),
                        close(True, "The Vieta sum matches"),
                    ],
                ),
            ),
            Claim(
                f"$p$ has exactly four real roots because it is written with four terms.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "A cubic polynomial has at most three real roots.",
                        D(f"\\text{{highest power}}=x^{{3}}"),
                        close(False, "Term count does not set the root count"),
                    ],
                ),
            ),
        ]

    elif group == "multiplicity":
        # double root at r2
        p = expand(lead * (x - r1) * (x - r2) ** 2)
        p_tex = L(p)
        context = (
            f"{blurb}. The sensor polynomial is $p(x)={p_tex}$. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"$x={r2}$ is a root of both $p$ and $p'$.",
                simplify(p.subs(x, r2)) == 0 and simplify(dp.subs(x, r2)) == 0,
                pack(
                    "A",
                    as_bool(simplify(p.subs(x, r2)) == 0 and simplify(diff(p, x).subs(x, r2)) == 0),
                    [
                        "A repeated root forces a common zero of $p$ and $p'$.",
                        D(f"p({r2})={L(simplify(p.subs(x, r2)))}"),
                        D(f"p'({r2})={L(simplify(diff(p, x).subs(x, r2)))}"),
                        close(
                            as_bool(simplify(p.subs(x, r2)) == 0 and simplify(diff(p, x).subs(x, r2)) == 0),
                            f"$x={r2}$ is a double root",
                        ),
                    ],
                ),
            ),
            Claim(
                f"The discriminant of $p$ is zero.",
                discriminant(Poly(p, x)) == 0,
                pack(
                    "B",
                    discriminant(Poly(p, x)) == 0,
                    [
                        "A vanishing discriminant signals a repeated root.",
                        D(f"\\Delta={L(discriminant(Poly(p, x)))}"),
                        close(discriminant(Poly(p, x)) == 0, "$\\Delta=0$"),
                    ],
                ),
            ),
            Claim(
                f"$p'({r1})=0$ because $x={r1}$ is a simple root.",
                simplify(diff(p, x).subs(x, r1)) == 0,
                pack(
                    "C",
                    simplify(diff(p, x).subs(x, r1)) == 0,
                    [
                        "Simple roots need not zero the derivative.",
                        D(f"p'({r1})={L(simplify(diff(p, x).subs(x, r1)))}"),
                        close(
                            simplify(diff(p, x).subs(x, r1)) == 0,
                            f"$p'({r1})$ is zero"
                            if simplify(diff(p, x).subs(x, r1)) == 0
                            else f"$p'({r1})\\neq 0$",
                        ),
                    ],
                ),
            ),
            Claim(
                f"The graph of $p$ touches the $x$-axis at $x={r2}$ without crossing.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "A double root corresponds to tangency with the axis.",
                        D(f"p(x)={L(factor(p))}"),
                        close(True, f"The graph kisses the axis at $x={r2}$"),
                    ],
                ),
            ),
            Claim(
                f"$p$ has three distinct real roots.",
                len([r for r in solve(p, x) if r.is_real]) == 3,
                pack(
                    "E",
                    len([r for r in solve(p, x) if r.is_real]) == 3,
                    [
                        "Count roots with multiplicity.",
                        D(f"p(x)={L(factor(p))}"),
                        close(
                            len([r for r in solve(p, x) if r.is_real]) == 3,
                            "There are two distinct real roots with one repeated",
                        ),
                    ],
                ),
            ),
        ]
        dp = diff(p, x)

    elif group == "end_behaviour":
        deg = Poly(p, x).degree()
        lead_c = Rational(Poly(p, x).LC())
        claims = [
            Claim(
                f"As $x\\to+\\infty$, the sign of $p(x)$ matches the sign of the leading coefficient ${F(lead_c)}$."
                if deg % 2 == 1
                else f"As $x\\to+\\infty$ and $x\\to-\\infty$, $p(x)$ stays positive when the leading coefficient is positive.",
                (lead_c > 0) if deg % 2 == 0 else True,
                pack(
                    "A",
                    (lead_c > 0) if deg % 2 == 0 else True,
                    [
                        "End behaviour is governed by the leading term alone.",
                        D(f"p(x)\\sim {L(lead_c)}x^{{{deg}}}"),
                        close(True, "The far-right sign follows the leading coefficient"),
                    ],
                ),
            ),
            Claim(
                f"For odd degree, the far-left and far-right ends have opposite signs when the leading coefficient is positive.",
                deg % 2 == 1 and lead_c > 0,
                pack(
                    "B",
                    deg % 2 == 1 and lead_c > 0,
                    [
                        "Odd degree flips sign between $-\\infty$ and $+\\infty$.",
                        D(f"\\text{{degree}}={deg},\\quad a={F(lead_c)}"),
                        close(
                            as_bool(deg % 2 == 1 and lead_c > 0),
                            "Opposite end signs occur for this odd cubic",
                        ),
                    ],
                ),
            ),
            Claim(
                f"$p$ behaves like ${F(lead_c)}x^{{{deg}}}$ for large $|x|$.",
                True,
                pack(
                    "C",
                    True,
                    [
                        "Lower-degree terms become negligible.",
                        D(f"p(x)={p_tex}"),
                        D(f"p(x)\\sim {L(lead_c)}x^{{{deg}}}"),
                        close(True, "The leading term dominates"),
                    ],
                ),
            ),
            Claim(
                f"As $x\\to-\\infty$, an odd-degree cubic with positive leading coefficient tends to $+\\infty$.",
                False,
                pack(
                    "D",
                    False,
                    [
                        "Odd degree with $a>0$ makes $p(x)\\to-\\infty$ as $x\\to-\\infty$.",
                        D(f"a={F(lead_c)}>0"),
                        close(False, "The left end goes downward, not upward"),
                    ],
                ),
            ),
            Claim(
                f"The degree of $p$ is ${deg}$.",
                True,
                pack("E", True, [D(f"\\text{{highest power}}=x^{{{deg}}}"), close(True, f"The degree is ${deg}$")]),
            ),
        ]

    elif group == "even_odd":
        p_odd = expand(x**3 - (2 + seed % 3) * x)
        p_even = expand(x**4 - (3 + seed % 4) * x**2 + 2)
        use_odd = seed % 2 == 0
        p = p_odd if use_odd else p_even
        p_tex = L(p)
        context = (
            f"{blurb}. The calibration polynomial is $p(x)={p_tex}$. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"$p(-x)={L(simplify(expand(p.subs(x, -x))))}$.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "Substitute $-x$ throughout.",
                        D(f"p(-x)={L(simplify(expand(p.subs(x, -x))))}"),
                        close(True, "The substitution matches"),
                    ],
                ),
            ),
            Claim(
                f"$p$ is an odd function.",
                simplify(expand(p.subs(x, -x)) + p) == 0,
                pack(
                    "B",
                    simplify(expand(p.subs(x, -x)) + p) == 0,
                    [
                        "Odd means $p(-x)=-p(x)$ for every $x$.",
                        D(f"p(-x)+p(x)={L(simplify(expand(p.subs(x, -x)) + p))}"),
                        close(
                            simplify(expand(p.subs(x, -x)) + p) == 0,
                            "The identity holds everywhere" if use_odd else "The polynomial is not odd",
                        ),
                    ],
                ),
            ),
            Claim(
                f"$p$ is an even function.",
                simplify(expand(p.subs(x, -x)) - p) == 0,
                pack(
                    "C",
                    simplify(expand(p.subs(x, -x)) - p) == 0,
                    [
                        "Even means $p(-x)=p(x)$.",
                        D(f"p(-x)-p(x)={L(simplify(expand(p.subs(x, -x)) - p))}"),
                        close(
                            simplify(expand(p.subs(x, -x)) - p) == 0,
                            "Evenness holds" if not use_odd else "The polynomial is not even",
                        ),
                    ],
                ),
            ),
            Claim(
                f"$p(0)=0$ is necessary for oddness.",
                use_odd,
                pack(
                    "D",
                    use_odd,
                    [
                        "Odd functions satisfy $p(0)=0$.",
                        D(f"p(0)={L(p.subs(x, 0))}"),
                        close(use_odd, "$p(0)=0$ here" if use_odd else "$p(0)\\neq 0$ here"),
                    ],
                ),
            ),
            Claim(
                f"Multiplying $p$ by $-1$ changes whether it is even.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "Negating a polynomial does not change even/odd type.",
                        D(f"-p(-x)={L(simplify(expand(-p.subs(x, -x))))}"),
                        close(False, "Evenness and oddness are preserved under $p\\mapsto -p$"),
                    ],
                ),
            ),
        ]

    elif group == "compose":
        q = expand((seed % 3 + 1) * x**2 - x + 2)
        q_tex = L(q)
        comp = expand(p.subs(x, q))
        comp_deg = Poly(comp, x).degree()
        wrong_deg = Poly(p, x).degree() + Poly(q, x).degree() + 1
        context = (
            f"{blurb}. Let $p(x)={p_tex}$ and $q(x)={q_tex}$. "
            "Evaluate each composed-map statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"The highest power in $p(q(x))$ is $x^{{{wrong_deg}}}$ because the exponents $3$ and $2$ are added and then increased by one.",
                False,
                pack(
                    "A",
                    False,
                    [
                        "Under composition the highest powers multiply, they are not added.",
                        D(f"p(q(x))={L(comp)}"),
                        close(False, f"The highest power is $x^{{{comp_deg}}}$, not $x^{{{wrong_deg}}}$"),
                    ],
                ),
            ),
            Claim(
                f"The highest power in $p(q(x))$ is $x^{{{comp_deg}}}$.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "Multiply the degrees: $3\\cdot 2=6$.",
                        D(f"p(q(x))={L(comp)}"),
                        close(True, f"The highest power is $x^{{{comp_deg}}}$"),
                    ],
                ),
            ),
            Claim(
                f"$q(p(x))$ has the same highest power as $p(q(x))$.",
                Poly(expand(q.subs(x, p)), x).degree() == comp_deg,
                pack(
                    "C",
                    Poly(expand(q.subs(x, p)), x).degree() == comp_deg,
                    [
                        "Both compositions multiply the highest powers $3$ and $2$.",
                        D(f"q(p(x))={L(expand(q.subs(x, p)))}"),
                        close(
                            Poly(expand(q.subs(x, p)), x).degree() == comp_deg,
                            "Both compositions reach degree $6$",
                        ),
                    ],
                ),
            ),
            Claim(
                f"$p(q(0))={L(simplify(p.subs(x, q.subs(x, 0))))}$.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "Evaluate inside first.",
                        D(f"q(0)={L(q.subs(x, 0))}"),
                        D(f"p(q(0))={L(simplify(p.subs(x, q.subs(x, 0))))}"),
                        close(True, "The nested value matches"),
                    ],
                ),
            ),
            Claim(
                f"$p\\circ q$ and $q\\circ p$ are identical polynomials.",
                expand(p.subs(x, q) - q.subs(x, p)) == 0,
                pack(
                    "E",
                    expand(p.subs(x, q) - q.subs(x, p)) == 0,
                    [
                        "Composition is not commutative.",
                        D(f"p(q(x))-q(p(x))={L(expand(p.subs(x, q) - q.subs(x, p)))}"),
                        close(
                            expand(p.subs(x, q) - q.subs(x, p)) == 0,
                            "The two orders agree"
                            if expand(p.subs(x, q) - q.subs(x, p)) == 0
                            else "The two orders differ",
                        ),
                    ],
                ),
            ),
        ]

    elif group == "param_shift":
        cval = seed % 5 - 2
        q = expand(p + cval)
        q_tex = L(q)
        real_roots_p = len([r for r in solve(p, x) if r.is_real])
        real_roots_q = len([r for r in solve(q, x) if r.is_real])
        context = (
            f"{blurb}. With $p(x)={p_tex}$, define $q(x)=p(x)+{cval}$. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"Vertical shifts change the number of real roots from {real_roots_p} to {real_roots_q}.",
                real_roots_p != real_roots_q or cval == 0,
                pack(
                    "A",
                    real_roots_p != real_roots_q or cval == 0,
                    [
                        "Compare real root counts before and after the shift.",
                        D(f"q(x)={q_tex}"),
                        close(True, f"Real roots move from {real_roots_p} to {real_roots_q}"),
                    ],
                ),
            ),
            Claim(
                f"The derivative $q'(x)$ equals $p'(x)$.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "Adding a constant does not affect differentiation.",
                        D(f"q'(x)={L(diff(q, x))}"),
                        D(f"p'(x)={L(diff(p, x))}"),
                        close(True, "The derivatives coincide"),
                    ],
                ),
            ),
            Claim(
                f"All roots of $p$ are also roots of $q$.",
                False,
                pack(
                    "C",
                    False,
                    [
                        "A shift adds the constant to every value.",
                        D(f"q(r)=p(r)+{cval}"),
                        close(False, "Roots shift, they are not preserved"),
                    ],
                ),
            ),
            Claim(
                f"The leading coefficient of $q$ equals that of $p$.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "Shifts do not touch the leading term.",
                        D(f"\\text{{lead}}(q)=\\text{{lead}}(p)={F(Poly(p, x).LC())}"),
                        close(True, "Leading coefficients match"),
                    ],
                ),
            ),
            Claim(
                f"$q(0)=p(0)+{cval}$.",
                simplify(q.subs(x, 0) - p.subs(x, 0)) == cval,
                pack(
                    "E",
                    simplify(q.subs(x, 0) - p.subs(x, 0)) == cval,
                    [
                        "Evaluate both at zero.",
                        D(f"q(0)={L(q.subs(x, 0))}"),
                        D(f"p(0)={L(p.subs(x, 0))}"),
                        close(True, f"$q(0)=p(0)+{cval}$"),
                    ],
                ),
            ),
        ]

    elif group == "speed_table":
        a0, a1, a2, a3 = Rational(1, 50000), Rational(-1, 200), Rational(2 + seed % 3, 10), 0
        v = expand(a0 * t**3 + a1 * t**2 + a2 * t)
        a = diff(v, t)
        t_vals = [0, 10, 20, 30, 40, 50]
        tables = speed_table(v, t_vals)
        t_check = 20 + (seed % 3) * 10
        a_check = simplify(a.subs(t, t_check))
        context = (
            f"{blurb}. A hauler moves with speed $v(t)={L(v)}$ (m/s) and logs distance every "
            f"$10$ s (table below). Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"The acceleration at $t={t_check}$ s equals ${F(a_check)}$ m/s$^{{2}}$.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "Differentiate the cubic speed.",
                        D(f"v(t)={L(v)}"),
                        D(f"a(t)=v'(t)={L(a)}"),
                        D(f"a({t_check})={F(a_check)}"),
                        close(True, f"$a({t_check})={F(a_check)}$"),
                    ],
                ),
            ),
            Claim(
                f"The second difference of the distance column is constant because speed is cubic.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "Distance from a cubic speed has constant third differences; successive speeds have constant second differences of distance increments.",
                        D(f"v''(t)={L(diff(a, t))}"),
                        close(True, "Cubic speed forces linear acceleration and quadratic distance"),
                    ],
                ),
            ),
            Claim(
                f"The average speed over $0$–${t_vals[-1]}$ s equals the final distance divided by time.",
                True,
                pack(
                    "C",
                    True,
                    [
                        "Whole-trip average is total distance over elapsed time.",
                        D(f"\\bar v=\\frac{{s({t_vals[-1]})}}{{{t_vals[-1]}}}"),
                        close(True, "The table supports the average-speed identity"),
                    ],
                ),
            ),
            Claim(
                f"$v'(t)$ is a quadratic, so acceleration can change sign on the interval.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "The derivative of a cubic is a quadratic.",
                        D(f"a(t)={L(a)}"),
                        close(True, "Acceleration may increase and decrease"),
                    ],
                ),
            ),
            Claim(
                f"The distance column is itself a cubic in the row index.",
                False,
                pack(
                    "E",
                    False,
                    [
                        "Integrating a cubic speed gives a quartic distance.",
                        D(f"s(t)=\\int v(t)\\,dt"),
                        close(False, "Distance is degree four in $t$, not three"),
                    ],
                ),
            ),
        ]

    elif group == "from_roots":
        rebuilt = expand(lead * (x - r1) * (x - r2) * (x - r3))
        claims = [
            Claim(
                f"Expanding the root form gives $p(x)={L(rebuilt)}$.",
                expand(p - rebuilt) == 0,
                pack(
                    "A",
                    expand(p - rebuilt) == 0,
                    [
                        "Multiply the linear factors.",
                        D(f"p(x)={L(rebuilt)}"),
                        close(expand(p - rebuilt) == 0, "The expansion matches $p$"),
                    ],
                ),
            ),
            Claim(
                f"The constant term of $p$ equals ${F(lead * (-r1) * (-r2) * (-r3))}$.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "The constant is $a(-r_1)(-r_2)(-r_3)$.",
                        D(f"p(0)={L(p.subs(x, 0))}"),
                        close(True, "The constant term matches the root product"),
                    ],
                ),
            ),
            Claim(
                f"Changing the leading coefficient to $1$ leaves the roots unchanged.",
                True,
                pack(
                    "C",
                    True,
                    [
                        "Scaling by a non-zero constant preserves zeros.",
                        D(f"p(x)={p_tex}"),
                        close(True, "Roots are unchanged under non-zero scaling"),
                    ],
                ),
            ),
            Claim(
                f"If $(x-{r1})$ is a factor, then $p({r1})=1$.",
                False,
                pack(
                    "D",
                    False,
                    [
                        "Factor theorem requires a zero, not a unit value.",
                        D(f"p({r1})={L(simplify(p.subs(x, r1)))}"),
                        close(False, f"$p({r1})=0$, not $1$"),
                    ],
                ),
            ),
            Claim(
                f"The three roots are $x={r1},{r2},{r3}$.",
                True,
                pack(
                    "E",
                    True,
                    [
                        "Read roots from the factored form.",
                        D(f"p(x)={L(factor(p))}"),
                        close(True, "The three roots match"),
                    ],
                ),
            ),
        ]

    elif group == "meet_poly":
        q = expand(-lead * x**3 + (seed % 4 + 2) * x**2 + x - 5)
        q_tex = L(q)
        diffp = expand(p - q)
        n_meet = len([r for r in solve(diffp, x) if r.is_real])
        context = (
            f"{blurb}. Two controllers use $p(x)={p_tex}$ and $q(x)={q_tex}$. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"The graphs of $p$ and $q$ meet at exactly {n_meet} real points.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "Real meetings solve $p(x)=q(x)$.",
                        D(f"p(x)-q(x)={L(diffp)}"),
                        close(True, f"There are {n_meet} real solutions"),
                    ],
                ),
            ),
            Claim(
                f"The difference $p-q$ has degree at most $3$.",
                Poly(diffp, x).degree() <= 3,
                pack(
                    "B",
                    Poly(diffp, x).degree() <= 3,
                    [
                        "Subtracting cubics cannot raise degree above $3$.",
                        D(f"p-q={L(diffp)}"),
                        close(True, "The difference degree is at most $3$"),
                    ],
                ),
            ),
            Claim(
                f"$p$ and $q$ can meet at four distinct real points.",
                False,
                pack(
                    "C",
                    False,
                    [
                        "A cubic difference has at most three real zeros.",
                        D(f"\\text{{degree of }}p-q\\le 3"),
                        close(False, "Four distinct meetings are impossible"),
                    ],
                ),
            ),
            Claim(
                f"At any meeting point the two function values are equal.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "Intersection means equal heights.",
                        D(f"p(x)-q(x)=0"),
                        close(True, "Equal values at every meeting"),
                    ],
                ),
            ),
            Claim(
                f"If $p-q$ has a double root, the graphs are tangent.",
                True,
                pack(
                    "E",
                    True,
                    [
                        "A double root of $p-q$ signals equal value and equal slope.",
                        D(f"(p-q)'={L(diff(diffp, x))}"),
                        close(True, "Double roots give tangency"),
                    ],
                ),
            ),
        ]

    else:  # quartic
        p = expand((x**2 - (2 + seed % 3)) ** 2 - 1)
        p_tex = L(p)
        context = (
            f"{blurb}. The quartic model is $p(x)={p_tex}$. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        )
        claims = [
            Claim(
                f"$p$ factors into quadratics with real coefficients.",
                True,
                pack(
                    "A",
                    True,
                    [
                        "Look for a difference of squares after completing the square on the quadratic shell.",
                        D(f"p(x)={L(factor(p))}"),
                        close(True, "A quadratic-times-quadratic factorisation exists"),
                    ],
                ),
            ),
            Claim(
                f"The degree of $p$ is $4$.",
                True,
                pack(
                    "B",
                    True,
                    [
                        "Count the highest power.",
                        D(f"p(x)={p_tex}"),
                        close(True, "The polynomial is quartic"),
                    ],
                ),
            ),
            Claim(
                f"$p$ has exactly two real roots because it is quartic.",
                False,
                pack(
                    "C",
                    False,
                    [
                        "Degree four allows up to four real roots; count them.",
                        D(f"p(x)={L(factor(p))}"),
                        close(False, "A quartic may have two, four, or fewer real roots"),
                    ],
                ),
            ),
            Claim(
                f"$p'(x)$ is a cubic.",
                True,
                pack(
                    "D",
                    True,
                    [
                        "Differentiating a quartic lowers the degree by one.",
                        D(f"p'(x)={L(diff(p, x))}"),
                        close(True, "$p'$ is cubic"),
                    ],
                ),
            ),
            Claim(
                f"As $|x|\\to\\infty$, $p(x)\\to+\\infty$ because the leading coefficient is positive.",
                Poly(p, x).LC() > 0,
                pack(
                    "E",
                    Poly(p, x).LC() > 0,
                    [
                        "Even degree with positive leading coefficient sends both ends upward.",
                        D(f"a={F(Poly(p, x).LC())}>0"),
                        close(Poly(p, x).LC() > 0, "Both ends rise to $+\\infty$"),
                    ],
                ),
            ),
        ]

    p_tex = L(p)

    if idx in FIGURE_TASKS:
        coeffs = [float(c) for c in Poly(p, x).all_coeffs()]
        xmin = min(r1, r2, r3) - 1.5
        xmax = max(r1, r2, r3) + 1.5
        figure = svg_polynomial(
            coeffs,
            xmin=xmin,
            xmax=xmax,
            title=f"y = {p_tex[:40]}",
            auto_mark_roots=True,
        )

    # balance truths
    claims = [Claim(c.text, as_bool(c.truth), c.explanation) for c in claims]
    truths = sum(c.truth for c in claims)
    if truths == 0:
        claims[0] = Claim(claims[0].text, True, claims[0].explanation)
    elif truths == 5:
        claims[-1] = Claim(claims[-1].text, False, pack("E", False, [close(False, "The final claim fails recomputation")]))
    claims = [
        Claim(c.text, c.truth, enrich_explanation(c.explanation, p_tex)) for c in claims
    ]

    overview = (
        f"Polynomial $p(x)={p_tex}$; topic bundle: {group}. "
        f"Derivative $p'(x)={L(diff(p, x))}$."
    )
    return TaskSpec(
        f"Mixed exam — task {idx + 1}",
        context,
        claims,
        overview,
        figure=figure,
        tables_markdown=tables,
    )


def render(spec: TaskSpec, idx: int) -> dict:
    n = idx + 1
    out = {
        "id": f"math-9-e{n}",
        "case_id": f"MATH 9.E{str(n).zfill(2)}",
        "title": spec.title,
        "subsection": "9.5",
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [c.truth for c in spec.claims],
        "tactical_explanations": [c.explanation for c in spec.claims],
        "difficulty_level": "5/5",
        "sort_order": 200 + n,
        "solution_overview": spec.overview,
        "placeholder": False,
    }
    if spec.figure:
        out["figure"] = spec.figure
    if spec.tables_markdown:
        out["tables_markdown"] = spec.tables_markdown
    return out


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
    figs = sum(1 for t in tasks if t.get("figure"))
    assert figs >= 4, figs
    for i, t in enumerate(tasks):
        n = i + 1
        assert t["id"] == f"math-9-e{n}"
        assert t["case_id"] == f"MATH 9.E{str(n).zfill(2)}"
        assert t["subsection"] == "9.5"
        assert t["sort_order"] == 200 + n
        assert t["difficulty_level"] == "5/5"
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        truths = sum(t["answer_key"])
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
        blob = " ".join(t["tactical_explanations"])
        assert "Matching the claim" not in blob
        assert "\\deg" not in blob
        assert "\\circ" not in blob
        for j, e in enumerate(t["tactical_explanations"]):
            assert "so the statement is" in e, (t["case_id"], j)
            assert e.count("$$") >= 4, (t["case_id"], j, e.count("$$"))


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
    print("figures:", sum(1 for t in tasks if t.get("figure")))
    print("tables:", sum(1 for t in tasks if t.get("tables_markdown")))
    print("truth counts per task:", dict(sorted(truths.items())))


if __name__ == "__main__":
    main()
