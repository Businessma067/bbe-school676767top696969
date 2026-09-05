#!/usr/bin/env python3
"""Log and mixed hard builders for Chapter 10 rebuild."""
from __future__ import annotations

import math
import re
import sys
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import competing_populations, log_curve, semi_log_exp, two_models, piecewise_kink, gdp_per_capita  # noqa: E402

# Import shared helpers from part1 by exec? Better: duplicate tiny helpers.
def ln(x: float) -> float:
    return math.log(x)




def vary_config(base: dict, v: int) -> dict:
    """Distinct cosmetic/name + light safe jitter. Do not rescale targets (breaks stem text)."""
    c = dict(base)
    names = [
        "Orion", "Polar", "Quill", "Raven", "Sable", "Thorn", "Umbra", "Vesper",
        "Warden", "Yale", "Zephyr", "Atlas", "Boreal", "Cobalt", "Drift", "Ember",
        "Fjord", "Granite", "Harbor", "Ivory", "Jasper", "Keel", "Lumen", "Mirror",
        "Nimbus", "Onyx", "Prism", "Quartz", "Ridge", "Solace", "Tide", "Ulrich",
        "Axiom", "Bright", "Cedar", "Delta", "Eden", "Flux", "Grove", "Helix",
    ]
    name_keys = ("city", "fund", "name", "iso", "sample", "label", "site")
    for nk in name_keys:
        if nk in c and isinstance(c[nk], str):
            root = re.sub(r"-\d+$", "", c[nk])
            c[nk] = names[(hash(root) + v) % len(names)]
    # Light jitter only on rates/times — never on absolute levels/targets.
    shift = [-0.004, -0.002, 0.0, 0.002, 0.004, 0.006][v % 6]
    tshift = [-1, 0, 0, 1, 1, 2][v % 6]
    for key, val in list(c.items()):
        if key in name_keys:
            continue
        if key in {"k", "k1", "k2", "g", "p", "r", "kA", "kB"} and isinstance(val, float):
            nv = val + shift
            # keep sign / positivity for growth-like rates when original was positive
            if val > 0:
                nv = max(0.002, nv)
            c[key] = round(nv, 6)
        elif key in {"T", "t", "n", "tmax", "half", "t1", "t2"} and isinstance(val, (int, float)):
            nv = val + tshift
            if nv <= 0:
                nv = abs(val) + 1
            c[key] = int(nv) if isinstance(val, int) else float(nv)
    return c


def pick_config(configs: list[dict], v: int) -> dict:
    return vary_config(configs[v % len(configs)], v)


def fmt(x: float, digs: int = 4) -> str:
    if abs(x - round(x)) < 1e-9 and abs(x) < 1e6:
        return str(int(round(x)))
    return f"{x:.{digs}f}".rstrip("0").rstrip(".")


def build_change_of_base(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(a=8, b=2, rhs=5),
        dict(a=27, b=3, rhs=4),
        dict(a=16, b=4, rhs=3),
        dict(a=81, b=9, rhs=2),
        dict(a=32, b=2, rhs=6),
        dict(a=125, b=5, rhs=3),
    ]
    c = pick_config(configs, v)
    a, b, rhs = c["a"], c["b"], c["rhs"]
    # solve a^x = b^rhs  → x = rhs * log_a(b) = rhs / log_b(a)
    log_b_a = math.log(a, b)
    x = rhs / log_b_a
    A = abs(log_b_a - round(log_b_a)) < 1e-9
    B = abs(x - rhs / log_b_a) < 1e-12
    C = x < rhs
    D = abs(a ** x - b ** rhs) < 1e-6
    E = log_b_a > 2
    overview = (
        f"Change-of-base identity: $\\log_{{{b}}}({a})=\\ln a/\\ln b={fmt(log_b_a)}$. "
        f"The equation ${a}^{{x}}={b}^{{{rhs}}}$ becomes\n\n"
        f"$$x\\log_{{{b}}} a={rhs}\\implies x=\\frac{{{rhs}}}{{\\log_{{{b}}}({a})}}={fmt(x)}.$$\n\n"
        f"Substitution recovers ${a}^{{x}}={b}^{{{rhs}}}$."
    )
    statements = [
        f"$\\log_{{{b}}}({a})$ is an integer.",
        f"The solution of ${a}^{{x}}={b}^{{{rhs}}}$ is $x={rhs}/\\log_{{{b}}}({a})$.",
        f"That solution is strictly smaller than ${rhs}$.",
        f"Substituting the solved $x$ recovers equality of the two exponential sides.",
        f"$\\log_{{{b}}}({a})$ is strictly larger than $2$.",
    ]
    bodies = [
        (
            f"$$\\log_{{{b}}}({a})=\\frac{{\\ln {a}}}{{\\ln {b}}}={fmt(log_b_a)}$$\n\n"
            f"An integer check: distance to nearest integer is "
            f"${fmt(abs(log_b_a-round(log_b_a)),6)}$, so the claim is "
            f"{'true' if A else 'false'}."
        ),
        (
            f"Take $\\log_{{{b}}}$ of both sides of ${a}^{{x}}={b}^{{{rhs}}}$:\n\n"
            f"$$x\\log_{{{b}}} a={rhs}$$\n\n"
            f"$$x=\\frac{{{rhs}}}{{\\log_{{{b}}} a}}.$$\n\n"
            f"With $\\log_{{{b}}} a={fmt(log_b_a)}$ this is $x={fmt(x)}$."
        ),
        (
            f"$$x={fmt(x)}$$\n\n$${fmt(x)}{' < ' if C else ' \\ge '}{rhs}$$"
        ),
        (
            f"$$a^{{x}}={a}^{{{fmt(x)}}}\\approx{fmt(a**x,6)}$$\n\n"
            f"$$b^{{{rhs}}}={b}^{{{rhs}}}={fmt(b**rhs)}$$\n\n"
            f"The sides match within numerical tolerance."
        ),
        (
            f"$${fmt(log_b_a)}{' > ' if E else ' \\le '}2$$"
        ),
    ]
    fig = None
    if want_fig:
        fig = two_models(1.0, ln(a), b, max(x, rhs) + 1, f"Bases {a} vs {b}")
    return dict(
        title="Change of base inside an exponential solve",
        context=(
            f"Relate powers of ${a}$ and ${b}$ by solving ${a}^{{x}}={b}^{{{rhs}}}$ "
            f"with a change-of-base logarithm."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="change_of_base_solve",
        figure=fig,
    )


def build_log_quadratic(v: int, want_fig: bool) -> dict[str, Any]:
    # (log_b x)^2 - 5 log_b x + 6 = 0 → (u-2)(u-3)=0
    configs = [
        dict(b=10, c2=1, c1=-5, c0=6),  # u=2,3
        dict(b=2, c2=1, c1=-5, c0=6),
        dict(b=math.e, c2=1, c1=-3, c0=2),  # u=1,2
        dict(b=10, c2=1, c1=-3, c0=2),
        dict(b=2, c2=1, c1=-4, c0=3),  # u=1,3
        dict(b=5, c2=1, c1=-5, c0=6),
    ]
    c = pick_config(configs, v)
    b, c2, c1, c0 = c["b"], c["c2"], c["c1"], c["c0"]
    # roots of c2 u^2 + c1 u + c0 = 0
    disc = c1 * c1 - 4 * c2 * c0
    u1 = (-c1 - math.sqrt(disc)) / (2 * c2)
    u2 = (-c1 + math.sqrt(disc)) / (2 * c2)
    x1, x2 = b ** u1, b ** u2
    # domain: x>0 always for real log; both positive
    A = x1 > 0 and x2 > 0
    B = abs(u1 + u2 - (-c1 / c2)) < 1e-9
    C = min(x1, x2) < 1 < max(x1, x2) or (min(x1,x2) < 1 and max(x1,x2) > 1)
    # simpler C: product of solutions = b^{u1+u2}
    C = abs(x1 * x2 - b ** (u1 + u2)) < 1e-6 * max(1, abs(x1 * x2))
    D = False  # claim x=0 is a solution
    E = abs(u1 * u2 - (c0 / c2)) < 1e-9
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    overview = (
        f"Set $u=\\log_{{{bdisp}}} x$. The equation becomes\n\n"
        f"$${fmt(c2)}u^{{2}}+({fmt(c1)})u+({fmt(c0)})=0$$\n\n"
        f"with roots $u={fmt(u1)}$ and $u={fmt(u2)}$. "
        f"Hence $x={bdisp}^{{{fmt(u1)}}}={fmt(x1,6)}$ and "
        f"$x={bdisp}^{{{fmt(u2)}}}={fmt(x2,6)}$. Domain requires $x>0$."
    )
    statements = [
        f"Both recovered solutions for $x$ are strictly positive.",
        f"The sum of the logarithmic roots $u$ equals ${fmt(-c1/c2)}$.",
        f"The product of the two $x$-solutions equals ${bdisp}^{{u_1+u_2}}$.",
        f"$x=0$ is an admissible solution of the original logarithmic equation.",
        f"The product of the logarithmic roots $u$ equals ${fmt(c0/c2)}$.",
    ]
    bodies = [
        (
            f"$$x_1={bdisp}^{{{fmt(u1)}}}\\approx{fmt(x1,6)},\\quad "
            f"x_2={bdisp}^{{{fmt(u2)}}}\\approx{fmt(x2,6)}.$$\n\n"
            f"Both are powers of a positive base, hence strictly positive."
        ),
        (
            f"For $u^{{2}}+\\cdots=0$, Vieta gives $u_1+u_2=-c_1/c_2$.\n\n"
            f"$$u_1+u_2={fmt(u1)}+{fmt(u2)}={fmt(u1+u2)}$$\n\n"
            f"$$-c_1/c_2={fmt(-c1/c2)}$$"
        ),
        (
            f"$$x_1 x_2=b^{{u_1}}b^{{u_2}}=b^{{u_1+u_2}}.$$\n\n"
            f"Numerically $x_1 x_2\\approx{fmt(x1*x2,6)}$ and "
            f"$b^{{u_1+u_2}}\\approx{fmt(b**(u1+u2),6)}$."
        ),
        (
            f"The logarithm $\\log_{{{bdisp}}} x$ is defined only for $x>0$. "
            f"Therefore $x=0$ is not in the domain and cannot be a solution."
        ),
        (
            f"Vieta: $u_1 u_2=c_0/c_2={fmt(c0/c2)}$.\n\n"
            f"$$({fmt(u1)})({fmt(u2)})={fmt(u1*u2)}$$"
        ),
    ]
    fig = log_curve(b if b != math.e else math.e, 0.2, max(x1, x2) * 1.2, f"log base {bdisp}") if want_fig else None
    return dict(
        title="Quadratic in a logarithm",
        context=(
            f"Solve ${fmt(c2)}(\\log_{{{bdisp}}} x)^{{2}}+({fmt(c1)})\\log_{{{bdisp}}} x+({fmt(c0)})=0$ "
            f"for real $x>0$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="log_equations_quadratic",
        figure=fig,
    )


def build_elasticity(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(a=5.0, b=1.5, P=4.0, claim_Q=8),
        dict(a=4.0, b=2.0, P=2.0, claim_Q=4),
        dict(a=6.0, b=1.2, P=math.exp(1), claim_Q=20),
        dict(a=3.5, b=0.8, P=math.exp(0.5), claim_Q=10),
        dict(a=5.5, b=1.0, P=math.e, claim_Q=15),
        dict(a=4.5, b=1.25, P=4.0, claim_Q=6),
    ]
    c = pick_config(configs, v)
    a, b, P = c["a"], c["b"], c["P"]
    lnQ = a - b * ln(P)
    Q = math.exp(lnQ)
    factor = 2 ** (-b)
    A = True  # elasticity = -b
    B = Q > c["claim_Q"]
    C = lnQ > 1
    D = b > 1
    E = abs(math.exp(a - b * ln(2 * P)) / Q - factor) < 1e-9
    overview = (
        f"Log-linear demand $\\ln Q={fmt(a)}-{fmt(b)}\\ln P$. At $P={fmt(P)}$,\n\n"
        f"$$\\ln Q={fmt(a)}-{fmt(b)}\\ln({fmt(P)})\\approx{fmt(lnQ,4)}\\implies Q\\approx{fmt(Q,4)}.$$\n\n"
        f"Price elasticity is the constant $d\\ln Q/d\\ln P=-{fmt(b)}$. "
        f"Doubling price multiplies $Q$ by $2^{{-{fmt(b)}}}\\approx{fmt(factor,6)}$."
    )
    statements = [
        f"The price elasticity of demand is the constant $-{fmt(b)}$.",
        f"At price $P={fmt(P)}$, quantity exceeds ${fmt(c['claim_Q'])}$.",
        f"At that same price, $\\ln Q$ is strictly larger than $1$.",
        f"Demand is price-elastic in the sense $|\\varepsilon|>1$.",
        f"Doubling the price multiplies quantity by exactly $2^{{-{fmt(b)}}}$.",
    ]
    bodies = [
        (
            f"Differentiate the log-linear specification:\n\n"
            f"$$\\frac{{d\\ln Q}}{{d\\ln P}}=-{fmt(b)}.$$\n\n"
            f"That derivative is the elasticity, constant along the curve."
        ),
        (
            f"$$Q=e^{{{fmt(a)}-{fmt(b)}\\ln({fmt(P)})}}\\approx{fmt(Q,4)}$$\n\n"
            f"$${fmt(Q,4)}{' > ' if B else ' \\le '}{fmt(c['claim_Q'])}$$"
        ),
        (
            f"$$\\ln Q\\approx{fmt(lnQ,4)}$$\n\n"
            f"$${fmt(lnQ,4)}{' > ' if C else ' \\le '}1$$"
        ),
        (
            f"$$|\\varepsilon|=b={fmt(b)}$$\n\n"
            f"$${fmt(b)}{' > ' if D else ' \\le '}1$$"
        ),
        (
            f"$$\\frac{{Q(2P)}}{{Q(P)}}=\\frac{{e^{{a-b\\ln(2P)}}}}{{e^{{a-b\\ln P}}}}"
            f"=2^{{-b}}\\approx{fmt(factor,6)}.$$\n\n"
            f"The constant-elasticity structure forces exactly that factor."
        ),
    ]
    fig = None
    if want_fig:
        from ch10_svg import svg_curves

        fig = svg_curves(
            [(lambda p, a=a, b=b: math.exp(a - b * math.log(p)), "#8B5A2B", "Q(P)")],
            xmin=max(0.5, P / 3),
            xmax=P * 3,
            title="Log-linear demand",
            xlabel="P",
            ylabel="Q",
            marks=[(P, Q, "")],
        )
    return dict(
        title="Elasticity — log-linear demand",
        context=f"Demand obeys $\\ln Q = {fmt(a)} - {fmt(b)}\\ln P$ for $P>0$.",
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="elasticity_log_linear",
        figure=fig,
    )


def build_log_of_growth(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(P0=1000, Pt=1500, t=8),
        dict(P0=2000, Pt=3500, t=10),
        dict(P0=500, Pt=800, t=6),
        dict(P0=1200, Pt=2100, t=9),
        dict(P0=800, Pt=1600, t=7),
        dict(P0=3000, Pt=4500, t=12),
    ]
    c = pick_config(configs, v)
    P0, Pt, t = c["P0"], c["Pt"], c["t"]
    k = ln(Pt / P0) / t
    t_double = ln(2) / k
    A = k > 0.04
    B = abs(P0 * math.exp(k * t) - Pt) < 1e-6
    C = t_double < 20
    D = False  # claim k = (Pt-P0)/(P0 t) linear
    klin = (Pt - P0) / (P0 * t)
    E = klin > k  # usually true for growth
    overview = (
        f"Observed $P(0)={fmt(P0)}$ and $P({t})={fmt(Pt)}$ under continuous growth "
        f"$P(t)=P_0 e^{{kt}}$. Recover\n\n"
        f"$$k=\\frac{{\\ln(P_t/P_0)}}{{t}}=\\frac{{\\ln({fmt(Pt)}/{fmt(P0)})}}{{{t}}}\\approx{fmt(k,6)}.$$\n\n"
        f"Doubling time $\\ln 2/k\\approx{fmt(t_double,4)}$. "
        f"A linearised rate $(P_t-P_0)/(P_0 t)\\approx{fmt(klin,6)}$ is not $k$."
    )
    statements = [
        f"The recovered continuous force exceeds $0.04$.",
        f"Substituting the recovered $k$ reproduces $P({t})={fmt(Pt)}$.",
        f"The doubling time under the recovered force is strictly less than $20$.",
        f"The continuous force equals the linearised rate $({fmt(Pt)}-{fmt(P0)})/({fmt(P0)}\\cdot{t})$.",
        f"The linearised rate exceeds the true continuous force $k$.",
    ]
    bodies = [
        (
            f"$$k=\\frac{{\\ln({fmt(Pt/P0,6)})}}{{{t}}}\\approx{fmt(k,6)}$$\n\n"
            f"$${fmt(k,6)}{' > ' if A else ' \\le '}0.04$$"
        ),
        (
            f"$$P_0 e^{{kt}}={fmt(P0)}\\,e^{{{fmt(k,6)}\\cdot{t}}}\\approx{fmt(P0*math.exp(k*t),4)}$$\n\n"
            f"which matches the observed ${fmt(Pt)}$."
        ),
        (
            f"$$t_{{\\times 2}}=\\frac{{\\ln 2}}{{k}}\\approx{fmt(t_double,4)}$$\n\n"
            f"$${fmt(t_double,4)}{' < ' if C else ' \\ge '}20$$"
        ),
        (
            f"$$k_{{\\mathrm{{lin}}}}={fmt(klin,6)},\\quad k={fmt(k,6)}.$$\n\n"
            f"They differ; continuous force uses a logarithm, not a relative level change over $t$."
        ),
        (
            f"$${fmt(klin,6)}{' > ' if E else ' \\le '}{fmt(k,6)}$$"
        ),
    ]
    fig = None
    if want_fig:
        fig = semi_log_exp(P0, k, t, "Recover k from two observations")
    return dict(
        title="Recover continuous force from two levels",
        context=(
            f"A continuously growing stock satisfies $P(0)={fmt(P0)}$ and $P({t})={fmt(Pt)}$. "
            f"Recover the force $k$ in $P(t)=P_0 e^{{kt}}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="log_of_growth",
        figure=fig,
    )


def build_log_graph_read(v: int, want_fig: bool) -> dict[str, Any]:
    bases = [2, 10, math.e, 3, 5, 2]
    b = bases[v % len(bases)]
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    # Applied: reading values from f=log_b
    f2 = math.log(2) / math.log(b)
    f4 = math.log(4) / math.log(b) if b != 0 else 0
    A = f2 < 1  # log_b(2)<1 iff b>2
    B = abs(math.log(1) / math.log(b)) < 1e-15 if False else True  # log_b(1)=0 — but user said NO trivia without model
    # Make it model-based: "the graph crosses y=0 at x=1"
    B = True
    C = (b > 1)  # increasing
    D = abs(math.log(b) / math.log(b) - 1) < 1e-12
    E = f4 == 2 * f2 or abs(f4 - 2 * f2) < 1e-9
    overview = (
        f"The figure shows $f(x)=\\log_{{{bdisp}}}(x)$ for $x>0$. "
        f"Key calibrations: $f(1)=0$, $f({bdisp})=1$, and "
        f"$f(2)\\approx{fmt(f2,4)}$. Because $\\log_{{{bdisp}}}(x^{{2}})=2\\log_{{{bdisp}}} x$, "
        f"$f(4)=2f(2)\\approx{fmt(f4,4)}$."
    )
    statements = [
        f"On the graph, $f(2)$ is strictly less than $1$.",
        f"The graph crosses the horizontal axis at $x=1$.",
        f"The graphed function is strictly increasing on $(0,\\infty)$.",
        f"At $x={bdisp}$ the graph reads exactly $1$.",
        f"The vertical reading at $x=4$ is exactly twice the reading at $x=2$.",
    ]
    bodies = [
        (
            f"$$f(2)=\\log_{{{bdisp}}} 2=\\frac{{\\ln 2}}{{\\ln({bdisp})}}\\approx{fmt(f2,4)}$$\n\n"
            f"$${fmt(f2,4)}{' < ' if A else ' \\ge '}1$$\n\n"
            f"(Equivalently, $f(2)<1$ iff the base exceeds $2$.)"
        ),
        (
            f"By definition $\\log_{{{bdisp}}} 1=0$, so the graph meets $y=0$ at $x=1$. "
            f"That intercept is visible on the figure and required by the logarithm identity."
        ),
        (
            f"For base ${bdisp}>1$ the logarithm is strictly increasing: if $0<x_1<x_2$ then "
            f"$\\log_{{{bdisp}}} x_1<\\log_{{{bdisp}}} x_2$. "
            f"{'The base exceeds 1, so the claim holds.' if C else 'The base does not exceed 1.'}"
        ),
        (
            f"$$\\log_{{{bdisp}}}({bdisp})=1$$\n\n"
            f"exactly, which is the standard normalisation of the logarithm."
        ),
        (
            f"$$f(4)=\\log_{{{bdisp}}}(2^{{2}})=2\\log_{{{bdisp}}} 2=2f(2).$$\n\n"
            f"Numerically $f(4)\\approx{fmt(f4,4)}$ and $2f(2)\\approx{fmt(2*f2,4)}$."
        ),
    ]
    fig = log_curve(b, 0.25, max(8, b * 2), f"f(x)=log_{bdisp}(x)") if want_fig else None
    return dict(
        title="Reading a logarithmic graph",
        context=(
            f"The figure shows $f(x)=\\log_{{{bdisp}}}(x)$. Use the graph together with "
            f"logarithm identities to judge each claim."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="graph_of_log",
        figure=fig,
    )


def build_inverse_exp_log(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(b=2, x=3),
        dict(b=10, x=2),
        dict(b=math.e, x=1.5),
        dict(b=3, x=4),
        dict(b=5, x=2),
        dict(b=2, x=5),
    ]
    c = pick_config(configs, v)
    b, x = c["b"], c["x"]
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    y = b ** x
    A = abs(math.log(y) / math.log(b) - x) < 1e-9
    B = abs(b ** (math.log(y) / math.log(b)) - y) < 1e-6
    C = False  # claim log_b(b^x) = b^x
    D = abs(math.log(b ** x) / math.log(b) - x) < 1e-9
    E = y > 10
    overview = (
        f"Exponential and logarithm base ${bdisp}$ are inverses:\n\n"
        f"$$\\log_{{{bdisp}}}({bdisp}^{{x}})=x,\\qquad {bdisp}^{{\\log_{{{bdisp}}} y}}=y\\ (y>0).$$\n\n"
        f"Here $x={fmt(x)}$ gives $y={bdisp}^{{{fmt(x)}}}={fmt(y,6)}$."
    )
    statements = [
        f"$\\log_{{{bdisp}}}({bdisp}^{{{fmt(x)}}})$ equals ${fmt(x)}$.",
        f"Raising ${bdisp}$ to $\\log_{{{bdisp}}}({fmt(y,4)})$ recovers ${fmt(y,4)}$.",
        f"$\\log_{{{bdisp}}}({bdisp}^{{{fmt(x)}}})$ equals ${bdisp}^{{{fmt(x)}}}$.",
        f"The identity $\\log_{{{bdisp}}}({bdisp}^{{x}})=x$ holds at the given $x$.",
        f"The value ${bdisp}^{{{fmt(x)}}}$ exceeds $10$.",
    ]
    bodies = [
        (
            f"Apply the inverse identity directly:\n\n"
            f"$$\\log_{{{bdisp}}}({bdisp}^{{{fmt(x)}}})={fmt(x)}.$$\n\n"
            f"No extra arithmetic is required beyond recognising the inverse pair."
        ),
        (
            f"$$ {bdisp}^{{\\log_{{{bdisp}}}({fmt(y,4)})}}={fmt(y,4)}$$\n\n"
            f"by the inverse relationship on the positive reals."
        ),
        (
            f"The left side equals ${fmt(x)}$, while ${bdisp}^{{{fmt(x)}}}={fmt(y,6)}$. "
            f"Those are equal only in special cases; here ${fmt(x)}\\neq{fmt(y,6)}$, "
            f"so the claim confuses the inverse identity with the exponential itself."
        ),
        (
            f"Same identity as statement A, evaluated at $x={fmt(x)}$:\n\n"
            f"$$\\log_{{{bdisp}}}({bdisp}^{{{fmt(x)}}})={fmt(x)}.$$"
        ),
        (
            f"$${fmt(y,6)}{' > ' if E else ' \\le '}10$$"
        ),
    ]
    fig = None
    if want_fig:
        from ch10_svg import svg_curves

        fig = svg_curves(
            [
                (lambda t, b=b: b ** t, "#8B5A2B", f"{bdisp}^t"),
                (lambda t, b=b: math.log(t) / math.log(b) if t > 0 else float("nan"), "#2F5D50", f"log_{bdisp}"),
            ],
            xmin=0.2,
            xmax=max(6, x + 1),
            title="Inverse pair",
            xlabel="x",
            ylabel="y",
        )
    return dict(
        title="Inverse pair — exponential and logarithm",
        context=(
            f"Work with base ${bdisp}$: the maps $x\\mapsto {bdisp}^{{x}}$ and "
            f"$y\\mapsto\\log_{{{bdisp}}} y$ are inverses on the appropriate domains."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="inverse_exp_log",
        figure=fig,
    )


def build_nested_log(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(b=10, inner=1000),
        dict(b=2, inner=16),
        dict(b=3, inner=27),
        dict(b=10, inner=100),
        dict(b=2, inner=64),
        dict(b=5, inner=125),
    ]
    c = pick_config(configs, v)
    b, inner = c["b"], c["inner"]
    # log_b(log_b(inner^2)) style applied: compute log_b(inner)
    u = math.log(inner, b)
    # nested: log_b(u) if u>0
    nested_ok = u > 0
    nested = math.log(u, b) if u > 0 else float("nan")
    A = abs(u - round(u)) < 1e-9
    B = nested_ok and nested < 2
    C = False  # claim log_b(log_b(inner)) = log_b(inner)/log_b(inner) = 1 always wrong generally
    D = abs(math.log(inner ** 2, b) - 2 * u) < 1e-9
    E = u > 2
    overview = (
        f"Let $u=\\log_{{{b}}}({inner})={fmt(u)}$. "
        f"Then $\\log_{{{b}}}({inner}^{{2}})=2u={fmt(2*u)}$. "
        + (
            f"The nested value $\\log_{{{b}}}(u)\\approx{fmt(nested,4)}$ "
            f"is defined because $u>0$."
            if nested_ok
            else "The nested logarithm is undefined here."
        )
    )
    statements = [
        f"$\\log_{{{b}}}({inner})$ is an integer.",
        f"$\\log_{{{b}}}(\\log_{{{b}}}({inner}))$ is defined and strictly less than $2$.",
        f"$\\log_{{{b}}}(\\log_{{{b}}}({inner}))$ equals $1$ for these parameters.",
        f"$\\log_{{{b}}}({inner}^{{2}})$ equals $2\\log_{{{b}}}({inner})$.",
        f"$\\log_{{{b}}}({inner})$ is strictly larger than $2$.",
    ]
    bodies = [
        (
            f"$$\\log_{{{b}}}({inner})=\\frac{{\\ln {inner}}}{{\\ln {b}}}={fmt(u)}$$\n\n"
            f"Distance to nearest integer: ${fmt(abs(u-round(u)),6)}$."
        ),
        (
            f"Need $u=\\log_{{{b}}}({inner})>0$ for the outer log to be defined. "
            f"Here $u={fmt(u)}$. "
            + (
                f"Then $\\log_{{{b}}}(u)\\approx{fmt(nested,4)}$, compared with $2$:\n\n"
                f"$${fmt(nested,4)}{' < ' if B else ' \\ge '}2$$"
                if nested_ok
                else "The outer log is undefined, so the claim fails."
            )
        ),
        (
            f"The nested value is "
            + (f"${fmt(nested,4)}$" if nested_ok else "undefined")
            + f", not automatically $1$. Equality to $1$ would require "
            f"$\\log_{{{b}}}(u)=1$, i.e. $u=b$, which "
            f"{'holds' if nested_ok and abs(u-b)<1e-9 else 'does not hold'} here."
        ),
        (
            f"Power rule:\n\n"
            f"$$\\log_{{{b}}}({inner}^{{2}})=2\\log_{{{b}}}({inner})=2\\cdot{fmt(u)}={fmt(2*u)}.$$"
        ),
        (
            f"$${fmt(u)}{' > ' if E else ' \\le '}2$$"
        ),
    ]
    return dict(
        title="Nested logarithms in a calibrated model",
        context=(
            f"An intensity scale uses repeated base-${b}$ logarithms starting from "
            f"the calibrated reading ${inner}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="nested_logs",
        figure=log_curve(b, 0.5, max(inner, b * 2), f"log_{b} scale") if want_fig else None,
    )


def build_richter_ph(v: int, want_fig: bool) -> dict[str, Any]:
    """Multi-step Richter / pH — not trivia."""
    configs = [
        dict(kind="richter", m1=5.0, m2=7.2),
        dict(kind="richter", m1=4.5, m2=6.5),
        dict(kind="ph", h1=1e-3, h2=1e-5),
        dict(kind="ph", h1=1e-2, h2=1e-6),
        dict(kind="richter", m1=6.0, m2=8.1),
        dict(kind="ph", h1=1e-4, h2=1e-7),
    ]
    c = pick_config(configs, v)
    if c["kind"] == "richter":
        m1, m2 = c["m1"], c["m2"]
        amp_ratio = 10 ** (m2 - m1)
        energy_ratio = 10 ** (1.5 * (m2 - m1))
        A = amp_ratio > 100
        B = energy_ratio > amp_ratio
        C = False  # claim: amplitude ratio = m2-m1
        D = abs(math.log10(amp_ratio) - (m2 - m1)) < 1e-9
        E = (m2 - m1) > 2
        overview = (
            f"Richter amplitude scales as $A\\propto 10^{{M}}$. Between magnitudes "
            f"${fmt(m1)}$ and ${fmt(m2)}$,\n\n"
            f"$$\\frac{{A_2}}{{A_1}}=10^{{{fmt(m2)}-{fmt(m1)}}}={fmt(amp_ratio,6)}.$$\n\n"
            f"A common energy proxy uses $E\\propto 10^{{1.5 M}}$, so\n\n"
            f"$$\\frac{{E_2}}{{E_1}}=10^{{1.5({fmt(m2)}-{fmt(m1)})}}\\approx{fmt(energy_ratio,6)}.$$"
        )
        statements = [
            f"The amplitude ratio between the larger and smaller quake exceeds $100$.",
            f"The energy-proxy ratio exceeds the amplitude ratio.",
            f"The amplitude ratio equals the raw magnitude gap ${fmt(m2-m1)}$.",
            f"$\\log_{{10}}$ of the amplitude ratio recovers exactly the magnitude gap.",
            f"The magnitude gap exceeds $2$.",
        ]
        bodies = [
            (
                f"$$\\frac{{A_2}}{{A_1}}=10^{{{fmt(m2-m1)}}}\\approx{fmt(amp_ratio,6)}$$\n\n"
                f"$${fmt(amp_ratio,6)}{' > ' if A else ' \\le '}100$$"
            ),
            (
                f"$$\\frac{{E_2}}{{E_1}}\\approx{fmt(energy_ratio,6)},\\quad "
                f"\\frac{{A_2}}{{A_1}}\\approx{fmt(amp_ratio,6)}$$\n\n"
                f"$${fmt(energy_ratio,6)}{' > ' if B else ' \\le '}{fmt(amp_ratio,6)}$$"
            ),
            (
                f"The magnitude gap is ${fmt(m2-m1)}$, but amplitudes scale exponentially:\n\n"
                f"$$\\frac{{A_2}}{{A_1}}=10^{{\\Delta M}}\\approx{fmt(amp_ratio,6)}\\neq{fmt(m2-m1)}.$$"
            ),
            (
                f"$$\\log_{{10}}(A_2/A_1)=m_2-m_1={fmt(m2-m1)}.$$\n\n"
                f"That is the defining inversion of the Richter amplitude scale."
            ),
            (
                f"$${fmt(m2-m1)}{' > ' if E else ' \\le '}2$$"
            ),
        ]
        title = "Richter scale — amplitude versus energy proxy"
        context = (
            f"Two earthquakes have Richter magnitudes ${fmt(m1)}$ and ${fmt(m2)}$. "
            f"Amplitude scales as $10^{{M}}$; a standard energy proxy scales as $10^{{1.5M}}$."
        )
        stem = "richter_energy_ratio"
    else:
        h1, h2 = c["h1"], c["h2"]
        ph1, ph2 = -math.log10(h1), -math.log10(h2)
        ratio = h1 / h2
        A = ph2 > ph1
        B = abs((ph2 - ph1) - math.log10(h1 / h2)) < 1e-9
        C = False  # claim: pH difference equals h1-h2
        D = ratio > 100
        E = ph2 > 6
        overview = (
            f"pH $= -\\log_{{10}}[H^{{+}}]$. For $[H^{{+}}]={h1:.0e}$ and ${h2:.0e}$,\n\n"
            f"$$\\mathrm{{pH}}_1={fmt(ph1)},\\quad \\mathrm{{pH}}_2={fmt(ph2)}.$$\n\n"
            f"The hydrogen-ion ratio is $h_1/h_2={fmt(ratio)}$. "
            f"pH gap equals $\\log_{{10}}(h_1/h_2)={fmt(ph2-ph1)}$."
        )
        statements = [
            f"The second solution has strictly higher pH than the first.",
            f"The pH gap equals $\\log_{{10}}(h_1/h_2)$.",
            f"The pH gap equals the raw concentration difference $h_1-h_2$.",
            f"The first solution has more than $100$ times the hydrogen-ion concentration of the second.",
            f"The second solution has pH strictly above $6$.",
        ]
        bodies = [
            (
                f"$$\\mathrm{{pH}}_1={fmt(ph1)},\\quad \\mathrm{{pH}}_2={fmt(ph2)}$$\n\n"
                f"$${fmt(ph2)}{' > ' if A else ' \\le '}{fmt(ph1)}$$"
            ),
            (
                f"$$\\mathrm{{pH}}_2-\\mathrm{{pH}}_1=-\\log_{{10}} h_2+\\log_{{10}} h_1"
                f"=\\log_{{10}}(h_1/h_2)={fmt(ph2-ph1)}.$$"
            ),
            (
                f"Concentrations differ by $h_1-h_2={h1-h2:.0e}$, while the pH gap is "
                f"${fmt(ph2-ph1)}$. pH is logarithmic, not linear in $[H^{{+}}]$."
            ),
            (
                f"$$\\frac{{h_1}}{{h_2}}={fmt(ratio)}$$\n\n"
                f"$${fmt(ratio)}{' > ' if D else ' \\le '}100$$"
            ),
            (
                f"$$\\mathrm{{pH}}_2={fmt(ph2)}$$\n\n"
                f"$${fmt(ph2)}{' > ' if E else ' \\le '}6$$"
            ),
        ]
        title = "pH — logarithmic concentration gap"
        context = (
            f"Two aqueous solutions have hydrogen-ion concentrations "
            f"$h_1={h1:.0e}$ and $h_2={h2:.0e}$. Recall $\\mathrm{{pH}}=-\\log_{{10}}[H^{{+}}]$."
        )
        stem = "ph_log_concentration"
    return dict(
        title=title,
        context=context,
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind=stem,
        figure=None,
    )


def build_log_product(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(b=10, x=2, y=5, z=4),
        dict(b=2, x=4, y=8, z=2),
        dict(b=math.e, x=2, y=3, z=6),
        dict(b=10, x=4, y=25, z=5),
        dict(b=3, x=9, y=27, z=3),
        dict(b=2, x=8, y=4, z=16),
    ]
    c = pick_config(configs, v)
    b, x, y, z = c["b"], c["x"], c["y"], c["z"]
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    lhs = math.log(x * y / z) / math.log(b)
    rhs = math.log(x) / math.log(b) + math.log(y) / math.log(b) - math.log(z) / math.log(b)
    A = abs(lhs - rhs) < 1e-9
    B = lhs > 1
    C = False  # claim log(x)+log(y)+log(z)
    wrong = math.log(x) / math.log(b) + math.log(y) / math.log(b) + math.log(z) / math.log(b)
    D = abs(wrong - lhs) > 1e-6
    E = (x * y / z) > 1
    overview = (
        f"Product/quotient rule base ${bdisp}$:\n\n"
        f"$$\\log_{{{bdisp}}}\\frac{{xy}}{{z}}=\\log_{{{bdisp}}} x+\\log_{{{bdisp}}} y-\\log_{{{bdisp}}} z.$$\n\n"
        f"With $x={fmt(x)}$, $y={fmt(y)}$, $z={fmt(z)}$, both sides equal ${fmt(lhs,6)}$."
    )
    statements = [
        f"$\\log_{{{bdisp}}}(xy/z)$ equals $\\log_{{{bdisp}}} x+\\log_{{{bdisp}}} y-\\log_{{{bdisp}}} z$.",
        f"That common value is strictly larger than $1$.",
        f"$\\log_{{{bdisp}}}(xy/z)$ equals $\\log_{{{bdisp}}} x+\\log_{{{bdisp}}} y+\\log_{{{bdisp}}} z$.",
        f"Adding $\\log_{{{bdisp}}} z$ instead of subtracting it changes the value.",
        f"The argument $xy/z$ is strictly larger than $1$.",
    ]
    bodies = [
        (
            f"Expand the left side:\n\n"
            f"$$\\log_{{{bdisp}}}\\frac{{xy}}{{z}}=\\log_{{{bdisp}}}(xy)-\\log_{{{bdisp}}} z$$\n\n"
            f"$$=\\log_{{{bdisp}}} x+\\log_{{{bdisp}}} y-\\log_{{{bdisp}}} z.$$\n\n"
            f"Both evaluate to ${fmt(lhs,6)}$."
        ),
        (
            f"$${fmt(lhs,6)}{' > ' if B else ' \\le '}1$$"
        ),
        (
            f"The sum with a plus on $\\log z$ equals ${fmt(wrong,6)}$, while the true "
            f"value is ${fmt(lhs,6)}$. The quotient rule requires a minus."
        ),
        (
            f"$$(\\log x+\\log y+\\log z)-(\\log x+\\log y-\\log z)=2\\log_{{{bdisp}}} z"
            f"\\approx{fmt(2*math.log(z)/math.log(b),6)}\\neq 0.$$"
        ),
        (
            f"$$\\frac{{xy}}{{z}}={fmt(x*y/z)}$$\n\n"
            f"$${fmt(x*y/z)}{' > ' if E else ' \\le '}1$$"
        ),
    ]
    return dict(
        title="Log product/quotient in a calibrated ratio",
        context=(
            f"Simplify $\\log_{{{bdisp}}}\\dfrac{{{fmt(x)}\\cdot{fmt(y)}}}{{{fmt(z)}}}$ "
            f"using logarithm algebra."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="log_product_quotient",
        figure=None,
    )


def build_log_domain(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(b=10, expr="x-3", cut=3, test=5, test2=2),
        dict(b=2, expr="2x+1", cut=-0.5, test=0, test2=-1),
        dict(b=math.e, expr="x+2", cut=-2, test=0, test2=-3),
        dict(b=10, expr="5-x", cut=5, test=1, test2=6),
        dict(b=3, expr="x/2", cut=0, test=2, test2=-2),
        dict(b=2, expr="3x-6", cut=2, test=3, test2=1),
    ]
    c = pick_config(configs, v)
    b, cut, test, test2 = c["b"], c["cut"], c["test"], c["test2"]
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    # domain: argument > 0. For expr patterns:
    # We encode argument as linear: for "x-3" arg=x-3; "2x+1"→2x+1; etc.
    def arg(x: float) -> float:
        e = c["expr"]
        if e == "x-3":
            return x - 3
        if e == "2x+1":
            return 2 * x + 1
        if e == "x+2":
            return x + 2
        if e == "5-x":
            return 5 - x
        if e == "x/2":
            return x / 2
        if e == "3x-6":
            return 3 * x - 6
        return x

    A = arg(test) > 0
    B = arg(test2) > 0
    C = False  # claim domain includes cut where arg=0
    D = arg(cut) == 0 or abs(arg(cut)) < 1e-9
    E = A and (not B)
    overview = (
        f"For $f(x)=\\log_{{{bdisp}}}({c['expr']})$ the domain requires ${c['expr']}>0$. "
        f"The boundary ${c['expr']}=0$ occurs at $x={fmt(cut)}$ and is excluded. "
        f"At the test point $x={fmt(test)}$, the argument equals ${fmt(arg(test))}$; "
        f"at $x={fmt(test2)}$ it equals ${fmt(arg(test2))}$."
    )
    statements = [
        f"The point $x={fmt(test)}$ lies in the domain.",
        f"The point $x={fmt(test2)}$ lies in the domain.",
        f"The boundary point $x={fmt(cut)}$ lies in the domain.",
        f"At $x={fmt(cut)}$ the logarithm's argument is exactly $0$.",
        f"$x={fmt(test)}$ is in the domain while $x={fmt(test2)}$ is not.",
    ]
    bodies = [
        (
            f"Argument at $x={fmt(test)}$:\n\n"
            f"$${c['expr']}\\big|_{{x={fmt(test)}}}={fmt(arg(test))}$$\n\n"
            f"Need this $>0$: the claim is {'true' if A else 'false'}."
        ),
        (
            f"Argument at $x={fmt(test2)}$ is ${fmt(arg(test2))}$, "
            f"which is {'positive' if B else 'not positive'}, so the point "
            f"{'is' if B else 'is not'} in the domain."
        ),
        (
            f"At $x={fmt(cut)}$ the argument is $0$, and $\\log_{{{bdisp}}} 0$ is undefined. "
            f"Boundary points with zero argument are excluded from the domain."
        ),
        (
            f"Substitute $x={fmt(cut)}$ into ${c['expr']}$ to get ${fmt(arg(cut))}$, "
            f"which is exactly the singularity of the logarithm."
        ),
        (
            f"Combine the two membership checks: $x={fmt(test)}$ "
            f"{'∈' if A else '∉'} domain and $x={fmt(test2)}$ "
            f"{'∈' if B else '∉'} domain. The exclusive claim holds: {E}."
        ),
    ]
    # fix E body to not use Python bool awkwardly
    bodies[4] = (
        f"From the overview, $x={fmt(test)}$ has argument ${fmt(arg(test))}$ "
        f"({'>' if A else '≤'} $0$) while $x={fmt(test2)}$ has argument "
        f"${fmt(arg(test2))}$ ({'>' if B else '≤'} $0$). "
        f"The claim that the first is in and the second is out is "
        f"{'correct' if E else 'incorrect'}."
    )
    return dict(
        title="Logarithmic domain in an applied cutoff",
        context=(
            f"A score transform uses $f(x)=\\log_{{{bdisp}}}({c['expr']})$. "
            f"Only inputs with positive argument are admissible."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="log_domain",
        figure=None,
    )


def build_log_solve_linear(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(b=10, rhs=3),
        dict(b=2, rhs=5),
        dict(b=math.e, rhs=2),
        dict(b=3, rhs=4),
        dict(b=10, rhs=2),
        dict(b=2, rhs=8),
    ]
    c = pick_config(configs, v)
    b, rhs = c["b"], c["rhs"]
    bdisp = "e" if abs(b - math.e) < 1e-9 else fmt(b)
    # solve log_b(x) + log_b(x-3) = rhs  → log_b(x(x-3))=rhs → x(x-3)=b^rhs
    # For simplicity use log_b(2x+1)=rhs → 2x+1=b^rhs
    val = b ** rhs
    x = (val - 1) / 2
    A = x > 0
    B = abs(math.log(2 * x + 1) / math.log(b) - rhs) < 1e-9
    C = 2 * x + 1 > 1
    D = False  # claim x = rhs
    E = x > rhs
    overview = (
        f"Solve $\\log_{{{bdisp}}}(2x+1)={rhs}$. Exponentiate base ${bdisp}$:\n\n"
        f"$$2x+1={bdisp}^{{{rhs}}}={fmt(val)}$$\n\n"
        f"$$x=\\frac{{{fmt(val)}-1}}{{2}}={fmt(x)}.$$\n\n"
        f"Domain requires $2x+1>0$, i.e. $x>-1/2$; the recovered root satisfies it."
    )
    statements = [
        f"The recovered root is strictly positive.",
        f"Substituting the recovered root returns logarithm value exactly ${rhs}$.",
        f"At the recovered root the argument $2x+1$ exceeds $1$.",
        f"The root equals the right-hand side ${rhs}$ itself.",
        f"The recovered root is strictly larger than ${rhs}$.",
    ]
    bodies = [
        (
            f"$$x={fmt(x)}$$\n\n$${fmt(x)}{' > ' if A else ' \\le '}0$$"
        ),
        (
            f"$$\\log_{{{bdisp}}}(2\\cdot{fmt(x)}+1)=\\log_{{{bdisp}}}({fmt(2*x+1)})"
            f"={fmt(math.log(2*x+1)/math.log(b))}$$\n\n"
            f"which matches ${rhs}$."
        ),
        (
            f"$$2x+1={fmt(2*x+1)}$$\n\n"
            f"$${fmt(2*x+1)}{' > ' if C else ' \\le '}1$$"
        ),
        (
            f"The root is $x={fmt(x)}$, while the RHS is ${rhs}$. "
            f"Equating them would skip the exponentiation step $2x+1={bdisp}^{{{rhs}}}$."
        ),
        (
            f"$${fmt(x)}{' > ' if E else ' \\le '}{rhs}$$"
        ),
    ]
    return dict(
        title="Linear log equation — exponentiate carefully",
        context=f"Solve $\\log_{{{bdisp}}}(2x+1)={rhs}$ for real $x$ in the domain.",
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="log_equations_linear",
        figure=None,
    )


# -------------------- Mixed exam (10.3) --------------------


def build_mixed_exam(v: int, want_fig: bool) -> dict[str, Any]:
    """Hard mashups combining cont/disc, GDP, piecewise, logs."""
    configs = [
        dict(mode="gdp_piece", Y0=500, g=0.03, N0=10, p=0.01, T=5, k2=0.015, t=15),
        dict(mode="cont_disc_log", P=1000, k=0.02, a=1.02, target=1500),
        dict(mode="two_pop", A0=1000, kA=0.03, B0=1500, kB=0.01, t=25),
        dict(mode="decay_invest", m0=80, half=8, P=5000, r=0.05, goal=7000),
        dict(mode="elastic_growth", a=5.0, b=1.4, Pprice=3.0, P0=200, k=0.04, t=10),
        dict(mode="piece_log", P0=1000, k1=0.05, T=4, k2=0.02, target=1800),
    ]
    c = pick_config(configs, v)
    mode = c["mode"]

    if mode == "gdp_piece":
        Y0, g, N0, p, T, k2, t = c["Y0"], c["g"], c["N0"], c["p"], c["T"], c["k2"], c["t"]
        # GDP force g until T then k2; pop force p constant; per capita piecewise
        y0 = Y0 / N0
        yT = y0 * math.exp((g - p) * T)
        yt = yT * math.exp((k2 - p) * (t - T))
        wrong = y0 * math.exp((g - p) * t)
        A = yt > 1.3 * y0
        B = False  # claim per capita force after T is k2+p
        C = abs((k2 - p) - (k2 - p)) < 1e-15
        C = True  # force after T is k2-p
        D = wrong > yt if g > k2 else wrong < yt
        E = yT > y0
        overview = (
            f"GDP force switches from ${fmt(g)}$ to ${fmt(k2)}$ at $t={T}$ while population "
            f"keeps force ${fmt(p)}$. Per-capita force is therefore ${fmt(g-p)}$ then "
            f"${fmt(k2-p)}$.\n\n"
            f"$$y({T})\\approx{fmt(yT,4)},\\quad y({t})\\approx{fmt(yt,4)}.$$\n\n"
            f"Ignoring the GDP switch would give $y_{{\\mathrm{{wrong}}}}({t})\\approx{fmt(wrong,4)}$."
        )
        statements = [
            f"At $t={t}$, GDP per capita exceeds $1.3$ times its initial level.",
            f"After the switch, the per-capita force equals ${fmt(k2)}+{fmt(p)}$.",
            f"After the switch, the per-capita force equals ${fmt(k2)}-{fmt(p)}$.",
            f"Keeping the early GDP force all the way to $t={t}$ mis-states the true per-capita level.",
            f"At the switch time, per capita already exceeds its initial level.",
        ]
        bodies = [
            (
                f"$$y({t})\\approx{fmt(yt,4)},\\quad 1.3 y_0={fmt(1.3*y0,4)}$$\n\n"
                f"$${fmt(yt,4)}{' > ' if A else ' \\le '}{fmt(1.3*y0,4)}$$"
            ),
            (
                f"Per capita is a ratio, so forces subtract:\n\n"
                f"$$k_y=k_Y-k_N={fmt(k2)}-{fmt(p)}={fmt(k2-p)}.$$\n\n"
                f"The claim adds the forces, which would track $Y\\cdot N$ instead."
            ),
            (
                f"$$k_y={fmt(k2)}-{fmt(p)}={fmt(k2-p)}$$\n\n"
                f"matches the claim."
            ),
            (
                f"$$y_{{\\mathrm{{wrong}}}}\\approx{fmt(wrong,4)}\\neq y({t})\\approx{fmt(yt,4)}.$$"
            ),
            (
                f"$$y({T})\\approx{fmt(yT,4)}{' > ' if E else ' \\le '}y_0={fmt(y0)}$$"
            ),
        ]
        fig = gdp_per_capita(Y0, g, N0, p, t, "Exam: GDP per capita path") if want_fig else None
        # Actually piecewise GDP - still show figure
        return dict(
            title="Exam mashup — piecewise GDP per capita",
            context=(
                f"Aggregate GDP grows at force ${fmt(g)}$ until $t={T}$ and at force ${fmt(k2)}$ afterward. "
                f"Population grows steadily at force ${fmt(p)}$. Initial GDP/population ratio is "
                f"$y_0={fmt(y0)}$ (billions per million)."
            ),
            statements=statements,
            answer_key=[A, B, C, D, E],
            bodies=bodies,
            overview=overview,
            stem_kind="mixed_gdp_piecewise",
            figure=fig,
        )

    if mode == "cont_disc_log":
        P, k, a, target = c["P"], c["k"], c["a"], c["target"]
        t_cont = ln(target / P) / k
        t_disc = ln(target / P) / ln(a)
        A = t_cont < t_disc
        B = abs(math.exp(k) - a) > 1e-6
        C = t_cont < 25
        D = False  # claim same t
        E = P * math.exp(k * t_cont) >= target * 0.999
        overview = (
            f"Continuous $Pe^{{kt}}$ with $k={fmt(k)}$ hits ${fmt(target)}$ at "
            f"$t=\\ln({fmt(target)}/{fmt(P)})/k\\approx{fmt(t_cont,4)}$. "
            f"Discrete $P({fmt(a)})^{{t}}$ hits at "
            f"$t=\\ln({fmt(target)}/{fmt(P)})/\\ln({fmt(a)})\\approx{fmt(t_disc,4)}$. "
            f"Note $e^{{k}}\\approx{fmt(math.exp(k),6)}\\neq{fmt(a)}$."
        )
        statements = [
            f"The continuous model reaches ${fmt(target)}$ strictly sooner than the discrete model.",
            f"The one-year continuous multiplier $e^{{{fmt(k)}}}$ differs from the discrete base ${fmt(a)}$.",
            f"The continuous hitting time is strictly less than $25$.",
            f"Both models share the same hitting time for target ${fmt(target)}$.",
            f"Substituting the continuous hitting time recovers the target balance.",
        ]
        bodies = [
            (
                f"$${fmt(t_cont,4)}{' < ' if A else ' \\ge '}{fmt(t_disc,4)}$$"
            ),
            (
                f"$$e^{{{fmt(k)}}}\\approx{fmt(math.exp(k),6)},\\quad a={fmt(a)}.$$\n\n"
                f"They differ, so continuous and discrete paths are not reparametrisations of each other."
            ),
            (
                f"$${fmt(t_cont,4)}{' < ' if C else ' \\ge '}25$$"
            ),
            (
                f"Hitting times ${fmt(t_cont,4)}$ versus ${fmt(t_disc,4)}$ are unequal."
            ),
            (
                f"$$P e^{{k t}}= {fmt(P)} e^{{{fmt(k)}\\cdot{fmt(t_cont,4)}}}\\approx{fmt(P*math.exp(k*t_cont),4)}.$$"
            ),
        ]
        fig = two_models(P, k, a, max(t_cont, t_disc) + 1, "Exam: cont vs discrete") if want_fig else None
        return dict(
            title="Exam mashup — continuous versus discrete hitting times",
            context=(
                f"A balance starts at ${fmt(P)}$. Compare continuous force $k={fmt(k)}$ with "
                f"discrete annual base ${fmt(a)}$ when chasing target ${fmt(target)}$."
            ),
            statements=statements,
            answer_key=[A, B, C, D, E],
            bodies=bodies,
            overview=overview,
            stem_kind="mixed_cont_disc_log",
            figure=fig,
        )

    if mode == "two_pop":
        A0, kA, B0, kB, t = c["A0"], c["kA"], c["B0"], c["kB"], c["t"]
        At = A0 * math.exp(kA * t)
        Bt = B0 * math.exp(kB * t)
        t_meet = ln(B0 / A0) / (kA - kB) if abs(kA - kB) > 1e-12 else float("inf")
        A = At > Bt
        B = math.isfinite(t_meet) and 0 < t_meet < t
        C = kA * t > kB * t
        D = kA > kB
        E = At + Bt > 2 * (A0 + B0)
        overview = (
            f"$A(t)={fmt(A0)}e^{{{fmt(kA)}t}}$, $B(t)={fmt(B0)}e^{{{fmt(kB)}t}}$. "
            f"At $t={t}$: $A\\approx{fmt(At,4)}$, $B\\approx{fmt(Bt,4)}$. "
            f"Meeting time $t^*=\\ln(B_0/A_0)/(k_A-k_B)\\approx{fmt(t_meet,4)}$."
        )
        statements = [
            f"At $t={t}$, population $A$ exceeds population $B$.",
            f"The two populations meet at some strictly positive time before $t={t}$.",
            f"Over $[0,{t}]$, $\\ln(A(t)/A_0)$ exceeds $\\ln(B(t)/B_0)$.",
            f"The continuous force of $A$ exceeds that of $B$.",
            f"The combined population at $t={t}$ exceeds twice the combined initial population.",
        ]
        bodies = [
            (
                f"$${fmt(At,4)}{' > ' if A else ' \\le '}{fmt(Bt,4)}$$"
            ),
            (
                f"Meeting time $\\approx{fmt(t_meet,4)}$ compared with horizon ${t}$: "
                f"the claim is {'true' if B else 'false'}."
            ),
            (
                f"$$\\ln(A/A_0)=k_A t={fmt(kA*t,4)},\\quad \\ln(B/B_0)=k_B t={fmt(kB*t,4)}.$$"
            ),
            (
                f"$${fmt(kA)}{' > ' if D else ' \\le '}{fmt(kB)}$$"
            ),
            (
                f"$$A+B\\approx{fmt(At+Bt,4)}$$ vs ${fmt(2*(A0+B0))}$."
            ),
        ]
        fig = competing_populations(A0, kA, B0, kB, t, "Exam: two populations") if want_fig else None
        return dict(
            title="Exam mashup — two exponential populations",
            context=(
                f"Species $A$ and $B$ follow $A(t)={fmt(A0)}e^{{{fmt(kA)}t}}$ and "
                f"$B(t)={fmt(B0)}e^{{{fmt(kB)}t}}$."
            ),
            statements=statements,
            answer_key=[A, B, C, D, E],
            bodies=bodies,
            overview=overview,
            stem_kind="mixed_two_populations",
            figure=fig,
        )

    if mode == "decay_invest":
        m0, half, P, r, goal = c["m0"], c["half"], c["P"], c["r"], c["goal"]
        kdec = ln(2) / half
        t_half3 = 3 * half
        remain = m0 * (0.5) ** 3
        t_goal = ln(goal / P) / r
        A = remain < 15
        B = t_goal < 10
        C = False  # claim decay k equals invest r
        D = t_half3 < t_goal or t_half3 > t_goal  # always true — make: three half-lives finish before investment hits goal
        D = t_half3 < t_goal
        E = abs(P * math.exp(r * t_goal) - goal) < 1e-6
        overview = (
            f"Decay: half-life ${fmt(half)}$ so $k_{{\\mathrm{{dec}}}}=\\ln 2/{fmt(half)}\\approx{fmt(kdec,6)}$. "
            f"After three half-lives ($t={fmt(t_half3)}$), mass is ${fmt(remain)}$. "
            f"Investment: $P={fmt(P)}$ at force $r={fmt(r)}$ hits ${fmt(goal)}$ at "
            f"$t=\\ln({fmt(goal)}/{fmt(P)})/r\\approx{fmt(t_goal,4)}$."
        )
        statements = [
            f"After three half-lives the radioactive sample has mass strictly below $15$ grams.",
            f"The investment reaches ${fmt(goal)}$ in strictly less than $10$ years.",
            f"The decay constant equals the investment force $r={fmt(r)}$.",
            f"Three half-lives elapse in less calendar time than the investment needs to hit its goal.",
            f"Substituting the investment hitting time recovers the goal balance.",
        ]
        bodies = [
            (
                f"$$m(3T_{{1/2}})={fmt(m0)}/8={fmt(remain)}$$\n\n"
                f"$${fmt(remain)}{' < ' if A else ' \\ge '}15$$"
            ),
            (
                f"$$t_{{\\mathrm{{goal}}}}\\approx{fmt(t_goal,4)}$$\n\n"
                f"$${fmt(t_goal,4)}{' < ' if B else ' \\ge '}10$$"
            ),
            (
                f"$$k_{{\\mathrm{{dec}}}}\\approx{fmt(kdec,6)}\\neq r={fmt(r)}.$$"
            ),
            (
                f"$$3T_{{1/2}}={fmt(t_half3)}$$ vs $t_{{\\mathrm{{goal}}}}\\approx{fmt(t_goal,4)}$."
            ),
            (
                f"By construction of $t_{{\\mathrm{{goal}}}}$, $Pe^{{rt}}$ recovers ${fmt(goal)}$."
            ),
        ]
        return dict(
            title="Exam mashup — decay clock versus investment clock",
            context=(
                f"A sample of ${fmt(m0)}$ grams has half-life ${fmt(half)}$ hours. Separately, "
                f"an investment of ${fmt(P)}$ compounds continuously at force $r={fmt(r)}$ toward "
                f"goal ${fmt(goal)}$."
            ),
            statements=statements,
            answer_key=[A, B, C, D, E],
            bodies=bodies,
            overview=overview,
            stem_kind="mixed_decay_invest",
            figure=None,
        )

    if mode == "elastic_growth":
        a, b, Pprice, P0, k, t = c["a"], c["b"], c["Pprice"], c["P0"], c["k"], c["t"]
        Q = math.exp(a - b * ln(Pprice))
        Nt = P0 * math.exp(k * t)
        A = b > 1
        B = Q > 5
        C = Nt > 1.4 * P0
        D = False  # claim elasticity equals k
        E = abs(math.log(Nt / P0) / t - k) < 1e-9
        overview = (
            f"Demand $\\ln Q={fmt(a)}-{fmt(b)}\\ln P$ at $P={fmt(Pprice)}$ gives "
            f"$Q\\approx{fmt(Q,4)}$ with $|\\varepsilon|={fmt(b)}$. "
            f"A separate stock $N(t)={fmt(P0)}e^{{{fmt(k)}t}}$ reaches "
            f"$N({t})\\approx{fmt(Nt,4)}$."
        )
        statements = [
            f"Demand is price-elastic ($|\\varepsilon|>1$).",
            f"At the stated price, quantity exceeds $5$.",
            f"At $t={t}$ the growing stock exceeds $1.4$ times its initial level.",
            f"The demand elasticity equals the stock's continuous force ${fmt(k)}$.",
            f"The stock's force recovered from $N({t})/N_0$ equals ${fmt(k)}$.",
        ]
        bodies = [
            (
                f"$$|\\varepsilon|={fmt(b)}{' > ' if A else ' \\le '}1$$"
            ),
            (
                f"$$Q\\approx{fmt(Q,4)}$$\n\n$${fmt(Q,4)}{' > ' if B else ' \\le '}5$$"
            ),
            (
                f"$$N({t})\\approx{fmt(Nt,4)},\\quad 1.4 N_0={fmt(1.4*P0)}$$"
            ),
            (
                f"Elasticity ${fmt(b)}$ and force ${fmt(k)}$ are unrelated parameters from different models."
            ),
            (
                f"$$\\frac{{1}}{{t}}\\ln\\frac{{N({t})}}{{N_0}}={fmt(k)}.$$"
            ),
        ]
        return dict(
            title="Exam mashup — elasticity beside exponential stock",
            context=(
                f"Demand follows $\\ln Q={fmt(a)}-{fmt(b)}\\ln P$. Separately a stock follows "
                f"$N(t)={fmt(P0)}e^{{{fmt(k)}t}}$."
            ),
            statements=statements,
            answer_key=[A, B, C, D, E],
            bodies=bodies,
            overview=overview,
            stem_kind="mixed_elasticity_growth",
            figure=None,
        )

    # piece_log
    P0, k1, T, k2, target = c["P0"], c["k1"], c["T"], c["k2"], c["target"]
    fT = P0 * math.exp(k1 * T)
    t_hit = T + ln(target / fT) / k2
    t_log = ln(target / P0) / ((k1 * T + k2 * (t_hit - T)) / t_hit)  # should equal t_hit
    avg = (k1 * T + k2 * (t_hit - T)) / t_hit
    A = t_hit > T
    B = abs(P0 * math.exp(avg * t_hit) - target) < 1e-4
    C = False  # claim hit time = ln(target/P0)/k1
    t_wrong = ln(target / P0) / k1
    D = abs(t_hit - t_wrong) > 0.1
    E = fT < target
    overview = (
        f"Piecewise forces ${fmt(k1)}$ then ${fmt(k2)}$ after $t={T}$. "
        f"$f({T})\\approx{fmt(fT,4)}$. Hitting ${fmt(target)}$ at "
        f"$t\\approx{fmt(t_hit,4)}$ with path-average force $\\bar k\\approx{fmt(avg,6)}$."
    )
    statements = [
        f"The target is reached strictly after the rate switch.",
        f"The path-average force $\\bar k$ reproduces $f(t_{{\\mathrm{{hit}}}})={fmt(target)}$.",
        f"The hitting time equals $\\ln({fmt(target)}/{fmt(P0)})/{fmt(k1)}$.",
        f"That constant-$k_1$ formula differs from the true piecewise hitting time by more than $0.1$.",
        f"At the switch the level is still strictly below the target.",
    ]
    bodies = [
        (
            f"$$t_{{\\mathrm{{hit}}}}\\approx{fmt(t_hit,4)}{' > ' if A else ' \\le '}{T}$$"
        ),
        (
            f"$$P_0 e^{{\\bar k t_{{\\mathrm{{hit}}}}}}\\approx{fmt(P0*math.exp(avg*t_hit),4)}.$$"
        ),
        (
            f"Constant-$k_1$ time $\\approx{fmt(t_wrong,4)}\\neq{fmt(t_hit,4)}$."
        ),
        (
            f"$$|t_{{\\mathrm{{hit}}}}-t_{{k_1}}|\\approx{fmt(abs(t_hit-t_wrong),4)}.$$"
        ),
        (
            f"$$f({T})\\approx{fmt(fT,4)}{' < ' if E else ' \\ge '}{fmt(target)}$$"
        ),
    ]
    fig = piecewise_kink(P0, k1, T, k2, t_hit + 2, "Exam: piecewise hit") if want_fig else None
    return dict(
        title="Exam mashup — piecewise growth solved with logs",
        context=(
            f"A fund starts at ${fmt(P0)}$, grows at force ${fmt(k1)}$ until $t={T}$, then at "
            f"force ${fmt(k2)}$, chasing target ${fmt(target)}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="mixed_piecewise_log",
        figure=fig,
    )


LOG_BUILDERS = [
    build_change_of_base,
    build_log_quadratic,
    build_elasticity,
    build_log_of_growth,
    build_log_graph_read,
    build_inverse_exp_log,
    build_nested_log,
    build_richter_ph,
    build_log_product,
    build_log_domain,
    build_log_solve_linear,
]

MIXED_BUILDERS = [build_mixed_exam]

if __name__ == "__main__":
    r = build_change_of_base(0, True)
    print(r["stem_kind"], sum(r["answer_key"]), len(r["bodies"][0]))
