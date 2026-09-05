#!/usr/bin/env python3
"""Task builders for Chapter 10 exp/log bank (MATH 13.18-depth explanations + SVG figures)."""
from __future__ import annotations
import math
from typing import Any

from ch10_svg import (
    svg_exp,
    svg_log,
    svg_piecewise_exp,
    svg_curves,
    competing_populations,
    semi_log_exp,
    gdp_per_capita,
)


def ln(x: float) -> float:
    return math.log(x)


def _deepen_body(body: str) -> str:
    """Pass-through: builder bodies already carry the teacher math. No coaching wrappers."""
    return body.strip()


def _base(title, context, statements, answer_key, bodies, overview, stem_kind, figure=None) -> dict[str, Any]:
    bodies = [_deepen_body(b) for b in bodies]
    out = {
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answer_key,
        "bodies": bodies,
        "overview": overview,
        "stem_kind": stem_kind,
    }
    if figure:
        out["figure"] = figure
    return out


# ===================== 10.1 Exponential styles =====================

def pop_continuous(v: int) -> dict:
    configs = [
        dict(P0=10.0, unit="million", k=0.02, city="Lysova", claim_double_t=30, claim_level=12, claim_t=10, claim_pct_year=2.0),
        dict(P0=8.0, unit="million", k=0.025, city="Nordheim", claim_double_t=28, claim_level=10, claim_t=8, claim_pct_year=2.5),
        dict(P0=5.0, unit="million", k=0.03, city="Eastmere", claim_double_t=20, claim_level=7, claim_t=12, claim_pct_year=3.0),
        dict(P0=12.0, unit="million", k=0.015, city="Valborg", claim_double_t=40, claim_level=15, claim_t=15, claim_pct_year=1.5),
        dict(P0=6.0, unit="million", k=0.04, city="Sorn", claim_double_t=15, claim_level=9, claim_t=7, claim_pct_year=4.0),
        dict(P0=15.0, unit="million", k=0.01, city="Kestrel", claim_double_t=70, claim_level=18, claim_t=25, claim_pct_year=1.0),
    ]
    c = configs[v % len(configs)]
    P0, k = c["P0"], c["k"]
    t_double = ln(2) / k
    f_claim_t = P0 * math.exp(k * c["claim_t"])
    annual_pct = 100 * k
    disc = math.exp(k) - 1
    A = t_double < c["claim_double_t"]
    B = f_claim_t > c["claim_level"]
    C = abs(annual_pct - c["claim_pct_year"]) < 1e-9
    D = False
    E = False
    overview = (
        f"The overview recovers the continuous model\n\n$$f(t)={P0:g}\\,e^{{{k:g}t}}$$\n\n"
        f"with $t$ in years and $f$ in {c['unit']}s of people in {c['city']}. "
        f"The continuous annual force is $k={k:g}$, so $100k={annual_pct:g}\\%$. "
        f"Doubling solves $e^{{kt}}=2$, hence $t=\\ln 2/k\\approx{t_double:.4f}$. "
        f"At $t={c['claim_t']}$, $f({c['claim_t']})\\approx{f_claim_t:.4f}$ {c['unit']}."
    )
    statements = [
        f"The doubling time of $f$ is strictly less than ${c['claim_double_t']}$ years.",
        f"At $t={c['claim_t']}$, the population exceeds ${c['claim_level']}$ {c['unit']}.",
        f"The continuous annual growth rate encoded by the model is exactly ${c['claim_pct_year']:g}\\%$.",
        f"The same path is given by the discrete annual model $f(t)={P0:g}\\,(1+{c['claim_pct_year']/100:g})^{{t}}$.",
        f"Because the exponent is ${k:g}t$, the population increases by exactly ${c['claim_pct_year']:g}\\%$ of its previous year-end value each calendar year.",
    ]
    bodies = [
        f"Doubling means $f(t)=2f(0)$, so\n\n$$e^{{{k:g}t}}=2$$\n\n$$t=\\frac{{\\ln 2}}{{{k:g}}}$$\n\n$$t\\approx{t_double:.4f}$$\n\nCompare with ${c['claim_double_t']}$:\n\n$${t_double:.4f}{'<' if A else '>'}{c['claim_double_t']}$$",
        f"Substitute $t={c['claim_t']}$:\n\n$$f({c['claim_t']})={P0:g}\\,e^{{{k:g}\\cdot{c['claim_t']}}}$$\n\n$$\\approx{f_claim_t:.4f}$$\n\nCompare with ${c['claim_level']}$ {c['unit']}:\n\n$${f_claim_t:.4f}{' > ' if B else ' \\le '}{c['claim_level']}$$",
        f"In $f(t)=P_0 e^{{kt}}$ the continuous annual force is the coefficient $k$.\n\n$$k={k:g}$$\n\n$$100k={annual_pct:g}$$\n\nThe claim asserts exactly ${c['claim_pct_year']:g}\\%$, which {'matches' if C else 'does not match'} $100k$.",
        f"A discrete annual model with nominal rate $r={c['claim_pct_year']/100:g}$ is\n\n$$g(t)={P0:g}\\,(1+{c['claim_pct_year']/100:g})^{{t}}$$\n\nContinuous compounding uses $e^{{kt}}$. These agree for all $t$ only if $1+r=e^{{k}}$.\n\n$$1+{c['claim_pct_year']/100:g}={1+c['claim_pct_year']/100:g}$$\n\n$$e^{{{k:g}}}\\approx{math.exp(k):.6f}$$\n\nSince ${1+c['claim_pct_year']/100:g}\\neq e^{{{k:g}}}$, the paths differ.",
        f"Under continuous force $k$, the one-year multiplier is $e^{{k}}$, not $1+k$.\n\n$$e^{{{k:g}}}-1\\approx{disc:.6f}$$\n\n$$100(e^{{k}}-1)\\approx{100*disc:.4f}\\%$$\n\nThat is not exactly ${c['claim_pct_year']:g}\\%$ in the discrete year-over-year sense.",
    ]
    fig = svg_exp(P0=P0, k=k, tmax=max(c["claim_t"] * 1.4, t_double * 1.1), title=f"{c['city']} continuous population", mark_t=c["claim_t"], ylabel=c["unit"])
    return _base(
        f"{c['city']} — continuous population force",
        f"A regional demographer models the population of {c['city']} by $f(t)={P0:g}\\,e^{{{k:g}t}}$, where $t$ is years after a census and $f(t)$ is measured in {c['unit']}s of residents.",
        statements, [A, B, C, D, E], bodies, overview, "population_continuous", fig,
    )

def radioactive(v: int) -> dict:
    configs = [
        dict(m0=80.0, half=8.0, t=24, claim_remain=12, claim_remain2=12),
        dict(m0=64.0, half=6.0, t=18, claim_remain=10, claim_remain2=10),
        dict(m0=100.0, half=10.0, t=30, claim_remain=15, claim_remain2=20),
        dict(m0=48.0, half=12.0, t=36, claim_remain=8, claim_remain2=10),
        dict(m0=120.0, half=5.0, t=20, claim_remain=10, claim_remain2=15),
        dict(m0=90.0, half=9.0, t=27, claim_remain=15, claim_remain2=20),
    ]
    c = configs[v % len(configs)]
    m0, half, t = c["m0"], c["half"], c["t"]
    k = ln(2) / half
    n_half = t / half
    remain = m0 * (0.5) ** n_half
    A = remain < c["claim_remain"]
    B = abs(k - 0.1) < 1e-6
    C = abs(n_half - 3) < 1e-9
    D = remain > c["claim_remain2"]
    target = c["claim_remain2"]
    t_to = ln(m0 / target) / k
    E = t_to < t
    overview = (
        f"Half-life $T_{{1/2}}={half:g}$ forces\n\n$$k=\\frac{{\\ln 2}}{{{half:g}}}\\approx{k:.6f}$$\n\n"
        f"and\n\n$$m(t)={m0:g}\\,e^{{-kt}}={m0:g}\\left(\\tfrac12\\right)^{{t/{half:g}}}$$\n\n"
        f"At $t={t:g}$, $m({t:g})={remain:g}$."
    )
    statements = [
        f"After ${t:g}$ hours the remaining mass is strictly less than ${c['claim_remain']:g}$ grams.",
        f"The continuous decay constant satisfies $k=0.1$ exactly.",
        f"After ${t:g}$ hours the sample retains exactly one eighth of its initial mass.",
        f"After ${t:g}$ hours more than ${c['claim_remain2']:g}$ grams remain.",
        f"The mass falls below ${target:g}$ grams at some time strictly before $t={t:g}$.",
    ]
    bodies = [
        (
            f"Count completed half-lives and apply the half-life form.\n\n"
            f"$$\\frac{{{t:g}}}{{{half:g}}}={n_half:g}$$\n\n"
            f"$$m({t:g})={m0:g}\\cdot\\left(\\tfrac12\\right)^{{{n_half:g}}}$$\n\n"
            f"$$={remain:g}$$\n\n"
            f"Compare with the claimed threshold ${c['claim_remain']:g}$:\n\n"
            f"$${remain:g}{' < ' if A else ' \\ge '}{c['claim_remain']:g}$$"
        ),
        (
            f"The continuous decay constant is fixed by the half-life identity.\n\n"
            f"$$k=\\frac{{\\ln 2}}{{{half:g}}}$$\n\n"
            f"$$k\\approx{k:.6f}$$\n\n"
            f"The claim asserts $k=0.1$ exactly, which {'matches' if B else 'does not match'} this value."
        ),
        (
            f"One eighth of the initial mass remains after exactly three half-lives.\n\n"
            f"$$\\frac{{{t:g}}}{{{half:g}}}={n_half:g}$$\n\n"
            f"$$m({t:g})={remain:g},\\qquad \\frac{{m_0}}{{8}}={m0/8:g}$$\n\n"
            f"Three half-lives would require the ratio ${n_half:g}$ to equal $3$, which "
            f"{'holds' if C else 'fails'} here."
        ),
        (
            f"Reuse the mass already computed at the horizon.\n\n"
            f"$$m({t:g})={remain:g}$$\n\n"
            f"Compare with ${c['claim_remain2']:g}$ grams:\n\n"
            f"$${remain:g}{' > ' if D else ' \\le '}{c['claim_remain2']:g}$$"
        ),
        (
            f"Solve $m(t)={target:g}$ under continuous decay.\n\n"
            f"$${m0:g}\\,e^{{-kt}}={target:g}$$\n\n"
            f"$$e^{{-kt}}=\\frac{{{target:g}}}{{{m0:g}}}$$\n\n"
            f"$$t=\\frac{{\\ln({m0:g}/{target:g})}}{{k}}\\approx{t_to:.4f}$$\n\n"
            f"Compare with the horizon ${t:g}$:\n\n"
            f"$${t_to:.4f}{' < ' if E else ' \\ge '}{t:g}$$"
        ),
    ]
    fig = svg_exp(P0=m0, k=-k, tmax=t, title=f"Decay, half-life {half:g} h", mark_t=half, ylabel="mass (g)")
    return _base(
        f"Radioactive sample — half-life {half:g} h",
        f"A lab sample of mass $m_0={m0:g}$ grams decays with half-life $T_{{1/2}}={half:g}$ hours under $m(t)=m_0 e^{{-kt}}$.",
        statements, [A, B, C, D, E], bodies, overview, "radioactive_decay", fig,
    )


def compound(v: int) -> dict:
    configs = [
        dict(P=10000, r=0.06, n=12, t=5),
        dict(P=8000, r=0.05, n=4, t=6),
        dict(P=12000, r=0.04, n=12, t=8),
        dict(P=5000, r=0.08, n=2, t=4),
        dict(P=15000, r=0.03, n=365, t=10),
        dict(P=9000, r=0.07, n=12, t=3),
    ]
    c = configs[v % len(configs)]
    P, r, n, t = c["P"], c["r"], c["n"], c["t"]
    disc = P * (1 + r / n) ** (n * t)
    cont = P * math.exp(r * t)
    annual = P * (1 + r) ** t
    rel = abs(cont - disc) / disc
    ear = (1 + r / n) ** n - 1
    t2 = ln(2) / r
    A = cont > disc
    B = disc > annual
    C = rel < 0.01
    D = ear > r
    E = t2 < 12
    overview = (
        f"Principal $P={P:g}$ at nominal annual rate $r={r:g}$.\n\n"
        f"$$A_{{\\mathrm{{disc}}}}=P\\left(1+\\frac{{r}}{{n}}\\right)^{{nt}}\\approx{disc:.4f}$$\n\n"
        f"$$A_{{\\mathrm{{cont}}}}=Pe^{{rt}}\\approx{cont:.4f}$$\n\n"
        f"EAR discrete $\\approx{ear:.6f}$. Continuous doubling time $\\approx{t2:.4f}$."
    )
    statements = [
        f"After ${t:g}$ years the continuously compounded balance exceeds the balance with ${n:g}$ compounding periods per year.",
        f"With ${n:g}$ compoundings per year the ${t:g}$-year balance exceeds once-per-year compounding at the same nominal rate.",
        f"The absolute gap between continuous and ${n:g}$-per-year balances after ${t:g}$ years is less than $1\\%$ of the discrete balance.",
        f"The effective annual rate under ${n:g}$ compoundings per year is strictly larger than the nominal rate $r={r:g}$.",
        f"Under continuous compounding at rate $r$, the doubling time is strictly less than $12$ years.",
    ]
    bodies = [
        (
            f"Evaluate both closed forms at the same horizon $t={t:g}$.\n\n"
            f"$$A_{{\\mathrm{{cont}}}}=P e^{{rt}}={P:g}\\,e^{{{r:g}\\cdot{t:g}}}\\approx{cont:.4f}$$\n\n"
            f"$$A_{{\\mathrm{{disc}}}}=P\\left(1+\\frac{{{r:g}}}{{{n:g}}}\\right)^{{{n:g}\\cdot{t:g}}}\\approx{disc:.4f}$$\n\n"
            f"Compare:\n\n$${cont:.4f}{' > ' if A else ' \\le '}{disc:.4f}$$"
        ),
        (
            f"Annual compounding uses one period per year:\n\n"
            f"$$A_{{\\mathrm{{ann}}}}=P(1+r)^{{t}}={P:g}(1+{r:g})^{{{t:g}}}\\approx{annual:.4f}$$\n\n"
            f"Against the ${n:g}$-per-year balance ${disc:.4f}$:\n\n"
            f"$${disc:.4f}{' > ' if B else ' \\le '}{annual:.4f}$$"
        ),
        (
            f"Form the relative gap between continuous and discrete balances.\n\n"
            f"$$\\frac{{|A_{{\\mathrm{{cont}}}}-A_{{\\mathrm{{disc}}}}|}}{{A_{{\\mathrm{{disc}}}}}}"
            f"=\\frac{{|{cont:.4f}-{disc:.4f}|}}{{{disc:.4f}}}\\approx{rel:.6f}$$\n\n"
            f"Compare with $1\\%=0.01$:\n\n$${rel:.6f}{' < ' if C else ' \\ge '}0.01$$"
        ),
        (
            f"The effective annual rate under ${n:g}$ compoundings is\n\n"
            f"$$\\left(1+\\frac{{{r:g}}}{{{n:g}}}\\right)^{{{n:g}}}-1\\approx{ear:.6f}$$\n\n"
            f"Compare with the nominal rate $r={r:g}$:\n\n"
            f"$${ear:.6f}{' > ' if D else ' \\le '}{r:g}$$"
        ),
        (
            f"Continuous doubling solves $e^{{rt}}=2$.\n\n"
            f"$$t=\\frac{{\\ln 2}}{{{r:g}}}\\approx{t2:.4f}$$\n\n"
            f"Compare with $12$ years:\n\n$${t2:.4f}{' < ' if E else ' \\ge '}12$$"
        ),
    ]
    fig = svg_exp(P0=P, k=r, tmax=t, title=f"Compounding n={n:g} vs continuous", discrete_r=r, mark_t=t)
    return _base(
        f"Compound interest — n={n:g} vs continuous",
        f"An account opens with principal ${P:,.0f}$ euros at nominal annual rate $r={r:g}$. Compare ${n:g}$ compoundings per year with continuous compounding over ${t:g}$ years.",
        statements, [A, B, C, D, E], bodies, overview, "compound_interest", fig,
    )

def gdp(v: int) -> dict:
    configs = [
        dict(Y0=50000, g=0.02, pop0=10, p=0.005, t=20),
        dict(Y0=40000, g=0.025, pop0=8, p=0.01, t=15),
        dict(Y0=60000, g=0.018, pop0=12, p=0.006, t=25),
        dict(Y0=35000, g=0.03, pop0=5, p=0.008, t=10),
        dict(Y0=45000, g=0.022, pop0=9, p=0.004, t=18),
        dict(Y0=55000, g=0.015, pop0=11, p=0.012, t=16),
    ]
    c = configs[v % len(configs)]
    Y0, g, pop0, p, t = c["Y0"], c["g"], c["pop0"], c["p"], c["t"]
    y0 = Y0 / pop0
    k = g - p
    yt = y0 * math.exp(k * t)
    Yt = Y0 * math.exp(g * t)
    Popt = pop0 * math.exp(p * t)
    A = True
    B = yt > 1.3 * y0
    C = Yt > 3 * Y0
    D = Popt > 2 * pop0
    E = k > 0.01
    overview = (
        f"GDP $Y(t)={Y0:g}\\,e^{{{g:g}t}}$ and population $N(t)={pop0:g}\\,e^{{{p:g}t}}$. Per capita\n\n"
        f"$$y(t)=\\frac{{Y(t)}}{{N(t)}}={y0:g}\\,e^{{{k:g}t}}$$\n\n"
        f"At $t={t:g}$: $y\\approx{yt:.4f}$, $Y\\approx{Yt:.2f}$, $N\\approx{Popt:.4f}$."
    )
    statements = [
        f"Real GDP per capita grows at continuous annual rate exactly ${k:g}$.",
        f"After ${t:g}$ years, GDP per capita exceeds $1.3$ times its initial level.",
        f"After ${t:g}$ years, aggregate GDP exceeds three times its initial level.",
        f"After ${t:g}$ years, population exceeds twice its initial level.",
        f"The continuous growth rate of GDP per capita is strictly larger than $1\\%$ per year.",
    ]
    bodies = [
        (
            f"Per capita output is the ratio of the two exponential paths.\n\n"
            f"$$y(t)=\\frac{{Y_0 e^{{gt}}}}{{N_0 e^{{pt}}}}=y_0 e^{{(g-p)t}}$$\n\n"
            f"$$g-p={g:g}-{p:g}={k:g}$$\n\n"
            f"So the continuous annual force on $y$ is exactly ${k:g}$."
        ),
        (
            f"Evaluate per capita output at the horizon and compare with $1.3 y_0$.\n\n"
            f"$$y({t:g})={y0:g}\\,e^{{{k:g}\\cdot{t:g}}}\\approx{yt:.4f}$$\n\n"
            f"$$1.3 y_0={1.3*y0:.4f}$$\n\n"
            f"$${yt:.4f}{' > ' if B else ' \\le '}{1.3*y0:.4f}$$"
        ),
        (
            f"Aggregate GDP follows the force $g$ alone.\n\n"
            f"$$Y({t:g})={Y0:g}\\,e^{{{g:g}\\cdot{t:g}}}\\approx{Yt:.2f}$$\n\n"
            f"$$3Y_0={3*Y0:g}$$\n\n"
            f"$${Yt:.2f}{' > ' if C else ' \\le '}{3*Y0:g}$$"
        ),
        (
            f"Population follows the force $p$.\n\n"
            f"$$N({t:g})={pop0:g}\\,e^{{{p:g}\\cdot{t:g}}}\\approx{Popt:.4f}$$\n\n"
            f"$$2N_0={2*pop0:g}$$\n\n"
            f"$${Popt:.4f}{' > ' if D else ' \\le '}{2*pop0:g}$$"
        ),
        (
            f"Compare the per capita force with the $1\\%$ threshold.\n\n"
            f"$$k=g-p={k:g}$$\n\n"
            f"$$0.01=0.01$$\n\n"
            f"$${k:g}{' > ' if E else ' \\le '}0.01$$"
        ),
    ]
    fig = gdp_per_capita(Y0, g, pop0, p, t, "GDP and per capita paths")
    return _base(
        "GDP per capita — exponential ratio",
        f"Aggregate real GDP follows $Y(t)={Y0:g}\\,e^{{{g:g}t}}$ while population follows $N(t)={pop0:g}\\,e^{{{p:g}t}}$ (millions). Track $y=Y/N$.",
        statements, [A, B, C, D, E], bodies, overview, "gdp_productivity", fig,
    )


def piecewise(v: int) -> dict:
    configs = [
        dict(P0=1000, k1=0.04, T=5, k2=0.01, t=12, claim=1400),
        dict(P0=2000, k1=0.03, T=4, k2=0.02, t=10, claim=2800),
        dict(P0=500, k1=0.05, T=6, k2=-0.02, t=11, claim=600),
        dict(P0=1500, k1=0.02, T=8, k2=0.04, t=14, claim=2500),
        dict(P0=800, k1=0.06, T=3, k2=0.01, t=9, claim=1200),
        dict(P0=2500, k1=0.01, T=10, k2=0.03, t=16, claim=3200),
    ]
    c = configs[v % len(configs)]
    P0, k1, T, k2, t, claim = c["P0"], c["k1"], c["T"], c["k2"], c["t"], c["claim"]
    fT = P0 * math.exp(k1 * T)
    ft = fT * math.exp(k2 * (t - T))
    wrong = P0 * math.exp(k1 * t)
    avg = (k1 * T + k2 * (t - T)) / t
    A = ft > claim
    B = wrong > ft
    C = fT > 1.2 * P0
    D = True
    E = ft > wrong
    overview = (
        f"Piecewise force: $k={k1:g}$ on $[0,{T:g}]$ and $k={k2:g}$ afterward.\n\n"
        f"$$f({T:g})\\approx{fT:.4f},\\quad f({t:g})\\approx{ft:.4f}$$\n\n"
        f"Path-average force $\\bar k\\approx{avg:.6f}$."
    )
    statements = [
        f"At $t={t:g}$ the level exceeds ${claim:g}$.",
        f"Applying the early rate $k={k1:g}$ all the way to $t={t:g}$ overstates the true level $f({t:g})$.",
        f"At the switch time $t={T:g}$ the level already exceeds $1.2$ times the initial value.",
        f"The continuous rate $\\bar k$ satisfying $f(t)=P_0 e^{{\\bar k t}}$ equals $\\dfrac{{{k1:g}\\cdot{T:g}+{k2:g}\\cdot({t:g}-{T:g})}}{{{t:g}}}$.",
        f"The true $f({t:g})$ exceeds the constant-rate extrapolation $P_0 e^{{{k1:g}t}}$.",
    ]
    bodies = [
        (
            f"Chain the two exponential segments up to the horizon.\n\n"
            f"$$f({T:g})={P0:g}\\,e^{{{k1:g}\\cdot{T:g}}}\\approx{fT:.4f}$$\n\n"
            f"$$f({t:g})=f({T:g})\\,e^{{{k2:g}\\cdot({t:g}-{T:g})}}\\approx{ft:.4f}$$\n\n"
            f"Compare with ${claim:g}$:\n\n$${ft:.4f}{' > ' if A else ' \\le '}{claim:g}$$"
        ),
        (
            f"The constant-rate extrapolation keeps the early force forever:\n\n"
            f"$$P_0 e^{{{k1:g}t}}={P0:g}\\,e^{{{k1:g}\\cdot{t:g}}}\\approx{wrong:.4f}$$\n\n"
            f"True piecewise level $\\approx{ft:.4f}$. Compare:\n\n"
            f"$${wrong:.4f}{' > ' if B else ' \\le '}{ft:.4f}$$"
        ),
        (
            f"At the switch instant only the first force has acted.\n\n"
            f"$$f({T:g})\\approx{fT:.4f}$$\n\n"
            f"$$1.2 P_0={1.2*P0:g}$$\n\n"
            f"$${fT:.4f}{' > ' if C else ' \\le '}{1.2*P0:g}$$"
        ),
        (
            f"Write the piecewise path as a single exponential with average force.\n\n"
            f"$$f(t)=P_0 e^{{k_1 T+k_2(t-T)}}=P_0 e^{{\\bar k t}}$$\n\n"
            f"$$\\bar k=\\frac{{k_1 T+k_2(t-T)}}{{t}}=\\frac{{{k1:g}\\cdot{T:g}+{k2:g}\\cdot({t:g}-{T:g})}}{{{t:g}}}$$\n\n"
            f"$$\\bar k\\approx{avg:.6f}$$\n\n"
            f"The displayed formula matches this identity."
        ),
        (
            f"Compare the true piecewise level with the early-rate extrapolation.\n\n"
            f"$$f({t:g})\\approx{ft:.4f}$$\n\n"
            f"$$P_0 e^{{{k1:g}t}}\\approx{wrong:.4f}$$\n\n"
            f"$${ft:.4f}{' > ' if E else ' \\le '}{wrong:.4f}$$"
        ),
    ]
    fig = svg_piecewise_exp(P0=P0, k1=k1, k2=k2, t_switch=T, tmax=t, title="Piecewise continuous force")
    return _base(
        "Piecewise growth — rate switch",
        f"A fund starts at $P_0={P0:g}$ and grows continuously at force ${k1:g}$ until $t={T:g}$, then at force ${k2:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "piecewise_rate", fig,
    )


def doubling(v: int) -> dict:
    configs = [
        dict(base=1.05, claim_t=15, claim_rule72=14),
        dict(base=1.07, claim_t=12, claim_rule72=10),
        dict(base=1.04, claim_t=20, claim_rule72=18),
        dict(base=1.08, claim_t=10, claim_rule72=9),
        dict(base=1.06, claim_t=14, claim_rule72=11),
        dict(base=1.03, claim_t=25, claim_rule72=24),
    ]
    c = configs[v % len(configs)]
    a = c["base"]
    r = a - 1
    t_double = ln(2) / ln(a)
    rule72 = 0.72 / r
    A = t_double < c["claim_t"]
    B = abs(rule72 - t_double) < 0.5
    C = (a ** 10) > 1.5
    D = False
    E = t_double > c["claim_rule72"]
    overview = (
        f"Discrete annual growth $f(t)=f_0\\cdot({a:g})^{{t}}$. Doubling:\n\n"
        f"$$t=\\frac{{\\ln 2}}{{\\ln({a:g})}}\\approx{t_double:.4f}$$\n\n"
        f"Rule-of-$72$ estimate $\\approx{rule72:.4f}$."
    )
    statements = [
        f"The exact doubling time is strictly less than ${c['claim_t']:g}$ years.",
        f"The rule-of-$72$ estimate $0.72/r$ lies within $0.5$ years of the exact doubling time.",
        f"Over a $10$-year window the accumulation factor exceeds $1.5$.",
        f"The doubling time equals $1/r$ with $r={r:g}$.",
        f"The exact doubling time exceeds ${c['claim_rule72']:g}$ years.",
    ]
    bodies = [
        (
            f"Doubling under discrete base $a$ means $a^{{t}}=2$.\n\n"
            f"$$t=\\frac{{\\ln 2}}{{\\ln({a:g})}}$$\n\n"
            f"$$t\\approx{t_double:.4f}$$\n\n"
            f"Compare with ${c['claim_t']:g}$:\n\n$${t_double:.4f}{' < ' if A else ' \\ge '}{c['claim_t']:g}$$"
        ),
        (
            f"The rule-of-$72$ approximation with $r={r:g}$ is\n\n"
            f"$$\\frac{{0.72}}{{{r:g}}}\\approx{rule72:.4f}$$\n\n"
            f"Exact doubling time $\\approx{t_double:.4f}$. Absolute gap:\n\n"
            f"$$|{rule72:.4f}-{t_double:.4f}|\\approx{abs(rule72-t_double):.4f}$$\n\n"
            f"Compare with $0.5$:\n\n$${abs(rule72-t_double):.4f}{' < ' if B else ' \\ge '}0.5$$"
        ),
        (
            f"Ten-year accumulation uses the discrete power directly.\n\n"
            f"$$({a:g})^{{10}}\\approx{a**10:.6f}$$\n\n"
            f"Compare with $1.5$:\n\n$${a**10:.6f}{' > ' if C else ' \\le '}1.5$$"
        ),
        (
            f"A linearised reciprocal $1/r$ is sometimes confused with doubling time.\n\n"
            f"$$\\frac{{1}}{{{r:g}}}\\approx{1/r:.4f}$$\n\n"
            f"$$t_{{\\times 2}}=\\frac{{\\ln 2}}{{\\ln({a:g})}}\\approx{t_double:.4f}$$\n\n"
            f"These are unequal, so equating doubling time to $1/r$ fails."
        ),
        (
            f"Reuse the exact doubling time and compare with ${c['claim_rule72']:g}$.\n\n"
            f"$$t\\approx{t_double:.4f}$$\n\n"
            f"$${t_double:.4f}{' > ' if E else ' \\le '}{c['claim_rule72']:g}$$"
        ),
    ]
    fig = svg_exp(P0=1.0, k=ln(a), tmax=t_double * 1.25, title=f"Doubling under base {a:g}", discrete_r=r, mark_t=t_double)
    return _base(
        "Doubling time — discrete annual growth",
        f"A quantity grows by the discrete annual factor ${a:g}$ each year, so $f(t)=f_0\\cdot({a:g})^{{t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "doubling_half_life", fig,
    )


def base_convert(v: int) -> dict:
    configs = [
        dict(a=1.05, claim_k=0.05, t=10),
        dict(a=1.02, claim_k=0.02, t=20),
        dict(a=0.95, claim_k=-0.05, t=8),
        dict(a=1.1, claim_k=0.1, t=7),
        dict(a=1.03, claim_k=0.03, t=12),
        dict(a=0.98, claim_k=-0.02, t=15),
    ]
    c = configs[v % len(configs)]
    a, t = c["a"], c["t"]
    k = ln(a)
    val = a ** t
    A = abs(k - c["claim_k"]) < 1e-6
    B = True
    C = val > 1.5 if a > 1 else val < 0.7
    D = k > c["claim_k"]
    E = abs((1 + c["claim_k"]) ** t - val) < 1e-9
    overview = (
        f"Rewrite $({a:g})^{{t}}=e^{{t\\ln({a:g})}}$ so $k=\\ln({a:g})\\approx{k:.6f}$. "
        f"At $t={t:g}$, factor $\\approx{val:.6f}$."
    )
    statements = [
        f"The continuous force $k$ satisfying $({a:g})^{{t}}=e^{{kt}}$ for all $t$ equals exactly ${c['claim_k']:g}$.",
        f"For every real $t$, $({a:g})^{{t}}=e^{{t\\ln({a:g})}}$.",
        f"At $t={t:g}$ the factor $({a:g})^{{t}}$ exceeds $1.5$." if a > 1 else f"At $t={t:g}$ the factor $({a:g})^{{t}}$ is strictly less than $0.7$.",
        f"The exact force $\\ln({a:g})$ is strictly larger than ${c['claim_k']:g}$.",
        f"Replacing the base by $1+{c['claim_k']:g}$ leaves every value $({a:g})^{{t}}$ unchanged.",
    ]
    thr = 1.5 if a > 1 else 0.7
    bodies = [
        (
            f"Equivalence $a^{{t}}=e^{{kt}}$ for all $t$ forces $k=\\ln a$.\n\n"
            f"$$k=\\ln({a:g})\\approx{k:.6f}$$\n\n"
            f"The claim asserts $k={c['claim_k']:g}$ exactly, which {'matches' if A else 'does not match'}."
        ),
        (
            f"By definition of the exponential and logarithm,\n\n"
            f"$$a^{{t}}=\\exp(t\\ln a)$$\n\n"
            f"holds for every real $t$ whenever $a>0$. Here $a={a:g}>0$, so the identity is exact."
        ),
        (
            f"Evaluate the discrete factor at the stated horizon.\n\n"
            f"$$({a:g})^{{{t:g}}}\\approx{val:.6f}$$\n\n"
            f"Compare with ${thr:g}$:\n\n"
            f"$${val:.6f}{' > ' if (val>thr) else ' \\le '}{thr:g}$$" if a > 1 else
            f"$$({a:g})^{{{t:g}}}\\approx{val:.6f}$$\n\nCompare with $0.7$:\n\n$${val:.6f}{' < ' if C else ' \\ge '}0.7$$"
        ),
        (
            f"Compare the exact force with the claimed number.\n\n"
            f"$$\\ln({a:g})\\approx{k:.6f}$$\n\n"
            f"$${k:.6f}{' > ' if D else ' \\le '}{c['claim_k']:g}$$"
        ),
        (
            f"The rival base $1+{c['claim_k']:g}$ produces\n\n"
            f"$$(1+{c['claim_k']:g})^{{{t:g}}}\\approx{(1+c['claim_k'])**t:.6f}$$\n\n"
            f"while $({a:g})^{{{t:g}}}\\approx{val:.6f}$. "
            f"{'They coincide.' if E else 'They differ, so the replacement changes the path.'}"
        ),
    ]
    fig = svg_exp(P0=1.0, k=k, tmax=t, title=f"Base {a:g} as continuous force", discrete_r=(a-1), mark_t=t)
    return _base(
        "Base conversion — a^t as e^{kt}",
        f"A discrete factor model uses base ${a:g}$, i.e. $f(t)=f_0\\cdot({a:g})^{{t}}$. An analyst wants an equivalent continuous force $k$.",
        statements, [A, B, C, D, E], bodies, overview, "base_conversion", fig,
    )

def compare_models(v: int) -> dict:
    configs = [
        dict(P=100, k=0.03, a=1.03, t=10),
        dict(P=100, k=0.05, a=1.04, t=8),
        dict(P=200, k=0.02, a=1.025, t=15),
        dict(P=50, k=0.04, a=1.05, t=6),
        dict(P=120, k=0.025, a=1.02, t=12),
        dict(P=80, k=0.06, a=1.055, t=5),
    ]
    c = configs[v % len(configs)]
    P, k, a, t = c["P"], c["k"], c["a"], c["t"]
    cont = P * math.exp(k * t)
    disc = P * (a ** t)
    A = cont > disc
    B = k > ln(a)
    C = abs(cont - disc) / max(cont, disc) < 0.05
    t_cont = ln(2) / k
    t_disc = ln(2) / ln(a)
    D = t_cont < t_disc
    E = abs(ln(cont / disc) - (k - ln(a)) * t) < 1e-9
    rel = abs(cont - disc) / max(cont, disc)
    overview = (
        f"Continuous ${P:g}e^{{{k:g}t}}$ vs discrete ${P:g}({a:g})^{{t}}$. "
        f"At $t={t:g}$: ${cont:.4f}$ vs ${disc:.4f}$. Forces ${k:g}$ vs $\\ln({a:g})\\approx{ln(a):.6f}$."
    )
    statements = [
        f"At $t={t:g}$ the continuous model exceeds the discrete base-${a:g}$ model.",
        f"The continuous force ${k:g}$ exceeds $\\ln({a:g})$.",
        f"At $t={t:g}$ the two models differ by less than $5\\%$ relative to the larger value.",
        f"The continuous model doubles strictly sooner than the discrete model.",
        f"$\\ln(f({t:g})/g({t:g}))$ equals $({k:g}-\\ln({a:g}))\\cdot{t:g}$.",
    ]
    bodies = [
        (
            f"Evaluate both forecasts at $t={t:g}$.\n\n"
            f"$$f({t:g})={P:g}\\,e^{{{k:g}\\cdot{t:g}}}\\approx{cont:.4f}$$\n\n"
            f"$$g({t:g})={P:g}\\,({a:g})^{{{t:g}}}\\approx{disc:.4f}$$\n\n"
            f"$${cont:.4f}{' > ' if A else ' \\le '}{disc:.4f}$$"
        ),
        (
            f"The discrete base converts to continuous force $\\ln a$.\n\n"
            f"$$\\ln({a:g})\\approx{ln(a):.6f}$$\n\n"
            f"Compare with the continuous force ${k:g}$:\n\n"
            f"$${k:g}{' > ' if B else ' \\le '}{ln(a):.6f}$$"
        ),
        (
            f"Form the relative gap against the larger terminal value.\n\n"
            f"$$\\frac{{|f-g|}}{{\\max(f,g)}}\\approx{rel:.6f}$$\n\n"
            f"Compare with $0.05$:\n\n$${rel:.6f}{' < ' if C else ' \\ge '}0.05$$"
        ),
        (
            f"Doubling times come from each force separately.\n\n"
            f"$$t_f=\\frac{{\\ln 2}}{{{k:g}}}\\approx{t_cont:.4f}$$\n\n"
            f"$$t_g=\\frac{{\\ln 2}}{{\\ln({a:g})}}\\approx{t_disc:.4f}$$\n\n"
            f"$${t_cont:.4f}{' < ' if D else ' \\ge '}{t_disc:.4f}$$"
        ),
        (
            f"Take the log of the ratio of the two closed forms.\n\n"
            f"$$\\ln\\frac{{f(t)}}{{g(t)}}=\\ln\\frac{{P e^{{kt}}}}{{P a^{{t}}}}=(k-\\ln a)t$$\n\n"
            f"$$(k-\\ln a)t=({k:g}-{ln(a):.6f})\\cdot{t:g}\\approx{(k-ln(a))*t:.6f}$$\n\n"
            f"The identity holds exactly for these parameters."
        ),
    ]
    fig = svg_exp(P0=P, k=k, tmax=t, title="Continuous vs discrete growth", discrete_r=a-1, mark_t=t)
    return _base(
        "Comparing continuous and discrete growth",
        f"Two forecasts start at ${P:g}$: continuous $f(t)={P:g}\\,e^{{{k:g}t}}$ and discrete $g(t)={P:g}\\,({a:g})^{{t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "compare_growth_models", fig,
    )


def bacteria(v: int) -> dict:
    configs = [
        dict(N0=1000, factor=2, period=3, t=12, claim=20000),
        dict(N0=500, factor=3, period=4, t=12, claim=40000),
        dict(N0=2000, factor=2, period=5, t=20, claim=30000),
        dict(N0=800, factor=4, period=6, t=18, claim=50000),
        dict(N0=1500, factor=2, period=4, t=16, claim=25000),
        dict(N0=600, factor=5, period=5, t=15, claim=80000),
    ]
    c = configs[v % len(configs)]
    N0, fac, per, t, claim = c["N0"], c["factor"], c["period"], c["t"], c["claim"]
    nper = t / per
    Nt = N0 * (fac ** nper)
    k = ln(fac) / per
    A = Nt > claim
    B = True
    C = nper > 3
    D = fac == 2
    E = k > 0.2
    overview = (
        f"$N(t)={N0:g}\\cdot({fac:g})^{{t/{per:g}}}$. Force $k=\\ln({fac:g})/{per:g}\\approx{k:.6f}$. "
        f"At $t={t:g}$, $N\\approx{Nt:.4f}$ after ${nper:g}$ cycles."
    )
    statements = [
        f"At $t={t:g}$ the culture exceeds ${claim:g}$ individuals.",
        f"The continuous force $k=\\dfrac{{\\ln({fac:g})}}{{{per:g}}}$ reproduces $N(t)$ for all $t$.",
        f"The elapsed time $t={t:g}$ covers strictly more than three full growth periods of length ${per:g}$.",
        f"The culture doubles in every single growth period of length ${per:g}$.",
        f"The equivalent continuous force exceeds $0.2$ per unit time.",
    ]
    bodies = [
        (
            f"Count growth cycles and apply the periodic multiplier.\n\n"
            f"$$\\frac{{{t:g}}}{{{per:g}}}={nper:g}$$\n\n"
            f"$$N({t:g})={N0:g}\\cdot({fac:g})^{{{nper:g}}}={Nt:g}$$\n\n"
            f"Compare with ${claim:g}$:\n\n$${Nt:g}{' > ' if A else ' \\le '}{claim:g}$$"
        ),
        (
            f"Rewrite the periodic model as a continuous exponential.\n\n"
            f"$$({fac:g})^{{t/{per:g}}}=e^{{(t/{per:g})\\ln({fac:g})}}=e^{{kt}}$$\n\n"
            f"with\n\n$$k=\\frac{{\\ln({fac:g})}}{{{per:g}}}\\approx{k:.6f}$$\n\n"
            f"So that force reproduces $N(t)$ for every $t$."
        ),
        (
            f"Compare the number of completed periods with three.\n\n"
            f"$$\\frac{{{t:g}}}{{{per:g}}}={nper:g}$$\n\n"
            f"$${nper:g}{' > ' if C else ' \\le '}3$$"
        ),
        (
            f"Doubling each period would require the period factor to be exactly $2$.\n\n"
            f"$$\\text{{period factor}}={fac:g}$$\n\n"
            f"{'This equals $2$, so the culture doubles each period.' if D else 'This is not $2$, so the culture does not double each period.'}"
        ),
        (
            f"Compare the equivalent continuous force with $0.2$.\n\n"
            f"$$k=\\frac{{\\ln({fac:g})}}{{{per:g}}}\\approx{k:.6f}$$\n\n"
            f"$${k:.6f}{' > ' if E else ' \\le '}0.2$$"
        ),
    ]
    fig = svg_exp(P0=N0, k=k, tmax=t, title="Bacterial culture growth", mark_t=t, ylabel="individuals")
    return _base(
        "Culture growth — periodic multiplication",
        f"A culture starts at $N_0={N0:g}$ and multiplies by ${fac:g}$ every ${per:g}$ hours.",
        statements, [A, B, C, D, E], bodies, overview, "bacteria_periodic", fig,
    )


def cooling(v: int) -> dict:
    """Newton-style: T(t)=Tenv+(T0-Tenv)e^{-kt}"""
    configs = [
        dict(T0=90, Tenv=20, k=0.1, t=10, claim=40),
        dict(T0=80, Tenv=25, k=0.08, t=15, claim=35),
        dict(T0=100, Tenv=20, k=0.05, t=20, claim=50),
        dict(T0=70, Tenv=15, k=0.12, t=8, claim=30),
        dict(T0=95, Tenv=22, k=0.09, t=12, claim=45),
        dict(T0=85, Tenv=18, k=0.07, t=14, claim=40),
    ]
    c = configs[v % len(configs)]
    T0, Te, k, t, claim = c["T0"], c["Tenv"], c["k"], c["t"], c["claim"]
    Tt = Te + (T0 - Te) * math.exp(-k * t)
    if T0 > claim > Te:
        t_hit = -ln((claim - Te) / (T0 - Te)) / k
    else:
        t_hit = float("nan")
    A = Tt < claim
    B = Tt > Te
    C = abs(math.exp(-k * t) - (Tt - Te) / (T0 - Te)) < 1e-9
    D = (not math.isnan(t_hit)) and t_hit < t
    E = k > 0.1
    overview = (
        f"$$T(t)={Te:g}+({T0:g}-{Te:g})e^{{-{k:g}t}}$$\n\n"
        f"At $t={t:g}$, $T\\approx{Tt:.4f}$. Gap ratio $e^{{-kt}}\\approx{math.exp(-k*t):.6f}$."
    )
    statements = [
        f"At $t={t:g}$ the temperature is strictly below ${claim:g}$.",
        f"At $t={t:g}$ the temperature is still strictly above the ambient level ${Te:g}$.",
        f"The remaining gap fraction equals $e^{{-{k:g}\\cdot{t:g}}}$.",
        f"The temperature crosses ${claim:g}$ at some time strictly before $t={t:g}$.",
        f"The cooling constant satisfies $k>0.1$.",
    ]
    bodies = [
        (
            f"Substitute the horizon into Newton's law of cooling.\n\n"
            f"$$T({t:g})={Te:g}+({T0:g}-{Te:g})e^{{-{k:g}\\cdot{t:g}}}$$\n\n"
            f"$$\\approx{Tt:.4f}$$\n\n"
            f"Compare with ${claim:g}$:\n\n$${Tt:.4f}{' < ' if A else ' \\ge '}{claim:g}$$"
        ),
        (
            f"The exponential gap factor is always positive for finite $t$, so the temperature "
            f"stays strictly above ambient.\n\n"
            f"$$e^{{-{k:g}\\cdot{t:g}}}\\approx{math.exp(-k*t):.6f}>0$$\n\n"
            f"$$T({t:g})\\approx{Tt:.4f}$$\n\n"
            f"$${Tt:.4f}{' > ' if B else ' \\le '}{Te:g}$$"
        ),
        (
            f"Rearrange Newton's formula for the remaining gap fraction.\n\n"
            f"$$\\frac{{T(t)-T_{{\\mathrm{{env}}}}}}{{T_0-T_{{\\mathrm{{env}}}}}}=e^{{-kt}}$$\n\n"
            f"$$\\frac{{{Tt:.4f}-{Te:g}}}{{{T0:g}-{Te:g}}}\\approx{(Tt-Te)/(T0-Te):.6f}$$\n\n"
            f"$$e^{{-{k:g}\\cdot{t:g}}}\\approx{math.exp(-k*t):.6f}$$\n\n"
            f"The two sides match."
        ),
        (
            (
                f"Solve $T(t)={claim:g}$ for the crossing time.\n\n"
                f"$${Te:g}+({T0:g}-{Te:g})e^{{-kt}}={claim:g}$$\n\n"
                f"$$e^{{-kt}}=\\frac{{{claim:g}-{Te:g}}}{{{T0:g}-{Te:g}}}$$\n\n"
                f"$$t=\\frac{{1}}{{{k:g}}}\\ln\\frac{{{T0:g}-{Te:g}}}{{{claim:g}-{Te:g}}}\\approx{t_hit:.4f}$$\n\n"
                f"Compare with ${t:g}$:\n\n$${t_hit:.4f}{' < ' if D else ' \\ge '}{t:g}$$"
            )
            if not math.isnan(t_hit)
            else "The claimed temperature does not lie between $T_0$ and ambient, so no crossing time exists in the model."
        ),
        (
            f"Read the cooling constant from the model and compare with $0.1$.\n\n"
            f"$$k={k:g}$$\n\n"
            f"$${k:g}{' > ' if E else ' \\le '}0.1$$"
        ),
    ]
    fig = svg_curves(
        [(lambda x, T0=T0, Te=Te, k=k: Te + (T0 - Te) * math.exp(-k * x), "#8B5A2B", "T(t)")],
        xmin=0, xmax=t, title="Newton cooling", ylabel="temperature",
        hlines=[Te, claim], marks=[(t, Tt, f"t={t:g}")],
    )
    return _base(
        "Cooling — Newton exponential gap",
        f"An object cools toward ambient temperature ${Te:g}$ from initial ${T0:g}$ with $T(t)={Te:g}+({T0:g}-{Te:g})e^{{-{k:g}t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "cooling_decay", fig,
    )


EXP_BUILDERS = [pop_continuous, radioactive, compound, gdp, piecewise, doubling, base_convert, compare_models, bacteria, cooling]

# ===================== 10.2 Logarithmic styles =====================

def change_of_base(v: int) -> dict:
    configs = [
        dict(a=8, b=2, c=4, claim=1.5),
        dict(a=27, b=3, c=9, claim=1.5),
        dict(a=16, b=2, c=4, claim=2.0),
        dict(a=81, b=3, c=9, claim=2.0),
        dict(a=32, b=2, c=4, claim=2.5),
        dict(a=243, b=3, c=9, claim=2.5),
    ]
    c = configs[v % len(configs)]
    log_b_a = ln(c["a"]) / ln(c["b"])
    log_c_a = ln(c["a"]) / ln(c["c"])
    A = abs(log_b_a / (ln(c["c"]) / ln(c["b"])) - log_c_a) < 1e-9
    B = log_b_a > c["claim"]
    C = abs(log_b_a - round(log_b_a)) < 1e-9
    D = abs(log_c_a - log_b_a / 2) < 1e-9
    E = log_c_a > c["claim"]
    overview = (
        f"$$\\log_{{{c['b']}}}({c['a']})={log_b_a:g},\\quad "
        f"\\log_{{{c['c']}}}({c['a']})={log_c_a:g}$$\n\n"
        f"Change of base: $\\log_c a=\\log_b a/\\log_b c$."
    )
    statements = [
        f"$\\log_{{{c['c']}}}({c['a']})=\\dfrac{{\\log_{{{c['b']}}}({c['a']})}}{{\\log_{{{c['b']}}}({c['c']})}}$.",
        f"$\\log_{{{c['b']}}}({c['a']})$ is strictly larger than ${c['claim']:g}$.",
        f"$\\log_{{{c['b']}}}({c['a']})$ equals the integer power matching ${c['b']}^k={c['a']}$ for integer $k$.",
        f"Because ${c['c']}={c['b']}^2$, one has $\\log_{{{c['c']}}}({c['a']})=\\tfrac12\\log_{{{c['b']}}}({c['a']})$.",
        f"$\\log_{{{c['c']}}}({c['a']})$ exceeds ${c['claim']:g}$.",
    ]
    bodies = [
        (
            f"Apply the change-of-base formula with intermediate base ${c['b']}$.\n\n"
            f"$$\\log_{{{c['c']}}}({c['a']})=\\frac{{\\log_{{{c['b']}}}({c['a']})}}{{\\log_{{{c['b']}}}({c['c']})}}$$\n\n"
            f"$$\\log_{{{c['b']}}}({c['c']})=\\log_{{{c['b']}}}({c['b']}^2)=2$$\n\n"
            f"$$\\frac{{{log_b_a:g}}}{{2}}={log_c_a:g}$$\n\n"
            f"The identity holds exactly."
        ),
        (
            f"Evaluate the base-${c['b']}$ logarithm by matching powers.\n\n"
            f"$$\\log_{{{c['b']}}}({c['a']})={log_b_a:g}$$\n\n"
            f"Compare with ${c['claim']:g}$:\n\n"
            f"$${log_b_a:g}{' > ' if B else ' \\le '}{c['claim']:g}$$"
        ),
        (
            f"Check whether the logarithm is an integer power.\n\n"
            f"$$\\log_{{{c['b']}}}({c['a']})={log_b_a:g}$$\n\n"
            f"{'This is an integer, so $'+str(c['b'])+'^k='+str(c['a'])+' for integer $k$.' if C else 'This is not an integer, so it is not a pure integer power match in the claimed sense.'}"
        ),
        (
            f"Since ${c['c']}={c['b']}^2$, change of base halves the logarithm.\n\n"
            f"$$\\log_{{{c['c']}}}({c['a']})=\\frac{{\\log_{{{c['b']}}}({c['a']})}}{{2}}=\\frac{{{log_b_a:g}}}{{2}}={log_c_a:g}$$\n\n"
            f"Half of ${log_b_a:g}$ is ${log_b_a/2:g}$, matching $\\log_{{{c['c']}}}({c['a']})$."
        ),
        (
            f"Compare the base-${c['c']}$ logarithm with the claim threshold.\n\n"
            f"$$\\log_{{{c['c']}}}({c['a']})={log_c_a:g}$$\n\n"
            f"$${log_c_a:g}{' > ' if E else ' \\le '}{c['claim']:g}$$"
        ),
    ]
    fig = svg_log(base=float(c["b"]), xmin=0.5, xmax=max(c["a"] * 1.05, 4), title=f"y=log_{c['b']}(x)", mark_x=float(c["a"]))
    return _base(
        "Change of base — twin logarithms",
        f"Consider $\\log_{{{c['b']}}}({c['a']})$ and $\\log_{{{c['c']}}}({c['a']})$ with ${c['c']}={c['b']}^2$.",
        statements, [A, B, C, D, E], bodies, overview, "change_of_base", fig,
    )


def log_quadratic(v: int) -> dict:
    configs = [
        dict(base=2, roots=(1, 2)),
        dict(base=3, roots=(1, 2)),
        dict(base=2, roots=(2, 3)),
        dict(base=10, roots=(1, 2)),
        dict(base=5, roots=(1, 3)),
        dict(base=2, roots=(0, 2)),
    ]
    c = configs[v % len(configs)]
    b = c["base"]
    r1, r2 = c["roots"]
    s, p = r1 + r2, r1 * r2
    x1, x2 = b ** r1, b ** r2
    A = True
    B = True
    C = abs(x1 * x2 - b ** (r1 + r2)) < 1e-9
    D = min(x1, x2) < 1
    E = (x1 + x2) > (b + 1)
    overview = (
        f"With $t=\\log_{{{b}}} x$, the equation is $t^2-({s})t+({p})=0$ with roots "
        f"$t={r1}$ and $t={r2}$. Back-substitute $x={b}^t$ to get $x\\in\\{{{x1:g},{x2:g}\\}}$."
    )
    statements = [
        f"Every real solution must satisfy $x>0$.",
        f"The auxiliary quadratic in $t=\\log_{{{b}}} x$ has roots $t={r1}$ and $t={r2}$.",
        f"The product of the real solutions equals ${b}^{{{s}}}$.",
        f"At least one real solution is strictly smaller than $1$.",
        f"The sum of the real solutions exceeds ${b}+1$.",
    ]
    bodies = [
        (
            f"The logarithm $\\log_{{{b}}} x$ is defined only for positive arguments.\n\n"
            f"$$x>0$$\n\n"
            f"Any candidate with $x\\le 0$ is excluded before the quadratic substitution is even formed."
        ),
        (
            f"Substitute $t=\\log_{{{b}}} x$ to obtain the auxiliary quadratic.\n\n"
            f"$$t^2-({s})t+({p})=0$$\n\n"
            f"$$(t-{r1})(t-{r2})=0$$\n\n"
            f"So the auxiliary roots are exactly $t={r1}$ and $t={r2}$."
        ),
        (
            f"Back-substitute $x=b^{{t}}$ for each auxiliary root.\n\n"
            f"$$x_1={b}^{{{r1}}}={x1:g},\\qquad x_2={b}^{{{r2}}}={x2:g}$$\n\n"
            f"$$x_1 x_2={b}^{{{r1}}}\\cdot{b}^{{{r2}}}={b}^{{{s}}}$$\n\n"
            f"The product equals ${b}^{{{s}}}$ as claimed."
        ),
        (
            f"Inspect the two real solutions against the threshold $1$.\n\n"
            f"$$x\\in\\{{{x1:g},{x2:g}\\}}$$\n\n"
            f"$$\\min(x_1,x_2)={min(x1,x2):g}$$\n\n"
            f"$${min(x1,x2):g}{' < ' if D else ' \\ge '}1$$"
        ),
        (
            f"Sum the real solutions and compare with $b+1$.\n\n"
            f"$$x_1+x_2={x1:g}+{x2:g}={x1+x2:g}$$\n\n"
            f"$$b+1={b+1:g}$$\n\n"
            f"$${x1+x2:g}{' > ' if E else ' \\le '}{b+1:g}$$"
        ),
    ]
    fig = svg_log(base=float(b), xmin=0.5, xmax=max(x1, x2) * 1.2, title=f"log_{b} and quadratic solutions", mark_x=float(max(x1, x2)))
    return _base(
        "Quadratic in a logarithm",
        f"The equation $(\\log_{{{b}}} x)^2 - {s}\\log_{{{b}}} x + {p} = 0$ is studied on its natural domain.",
        statements, [A, B, C, D, E], bodies, overview, "log_equations_quadratic", fig,
    )


def log_product(v: int) -> dict:
    configs = [
        dict(b=10, u=2, w=5, claim=100),
        dict(b=2, u=8, w=4, claim=32),
        dict(b=3, u=9, w=27, claim=243),
        dict(b=5, u=25, w=5, claim=125),
        dict(b=10, u=4, w=25, claim=100),
        dict(b=2, u=16, w=8, claim=128),
    ]
    c = configs[v % len(configs)]
    b, u, w = c["b"], c["u"], c["w"]
    prod = u * w
    A = abs(math.log(u, b) + math.log(w, b) - math.log(prod, b)) < 1e-9
    B = prod == c["claim"]
    C = math.log(u, b) > 1
    D = math.log(w / u, b) > 0 if u != 0 else False
    E = abs(math.log(u, b) - math.log(w, b) - math.log(u / w, b)) < 1e-9
    overview = (
        f"Product rule $\\log_b(uw)=\\log_b u+\\log_b w$ and quotient rule "
        f"$\\log_b(u/w)=\\log_b u-\\log_b w$. Here $u={u:g}$, $w={w:g}$, $b={b:g}$, $uw={prod:g}$."
    )
    statements = [
        f"$\\log_{{{b}}}({u:g})+\\log_{{{b}}}({w:g})=\\log_{{{b}}}({prod:g})$.",
        f"The product ${u:g}\\cdot{w:g}$ equals ${c['claim']:g}$.",
        f"$\\log_{{{b}}}({u:g})$ is strictly larger than $1$.",
        f"$\\log_{{{b}}}\\!\\left(\\dfrac{{{w:g}}}{{{u:g}}}\\right)$ is strictly positive.",
        f"$\\log_{{{b}}}({u:g})-\\log_{{{b}}}({w:g})=\\log_{{{b}}}\\!\\left(\\dfrac{{{u:g}}}{{{w:g}}}\\right)$.",
    ]
    lu, lw = math.log(u, b), math.log(w, b)
    bodies = [
        (
            f"Invoke the product rule for logarithms of positive numbers.\n\n"
            f"$$\\log_b(uw)=\\log_b u+\\log_b w$$\n\n"
            f"$$\\log_{{{b}}}({u:g})+\\log_{{{b}}}({w:g})={lu:g}+{lw:g}={lu+lw:g}$$\n\n"
            f"$$\\log_{{{b}}}({prod:g})={math.log(prod,b):g}$$\n\n"
            f"The two sides agree."
        ),
        (
            f"Compute the ordinary product and compare with the claimed value.\n\n"
            f"$${u:g}\\cdot{w:g}={prod:g}$$\n\n"
            f"$${prod:g}{' = ' if B else ' \\neq '}{c['claim']:g}$$"
        ),
        (
            f"Evaluate the single logarithm and compare with $1$.\n\n"
            f"$$\\log_{{{b}}}({u:g})={lu:g}$$\n\n"
            f"$${lu:g}{' > ' if C else ' \\le '}1$$"
        ),
        (
            f"The quotient rule converts the ratio into a difference of logs.\n\n"
            f"$$\\log_{{{b}}}\\!\\left(\\frac{{{w:g}}}{{{u:g}}}\\right)=\\log_{{{b}}}({w/u:g})={math.log(w/u,b):g}$$\n\n"
            f"$${math.log(w/u,b):g}{' > ' if D else ' \\le '}0$$"
        ),
        (
            f"Apply the quotient rule with numerator ${u:g}$ and denominator ${w:g}$.\n\n"
            f"$$\\log_b\\!\\left(\\frac{{u}}{{w}}\\right)=\\log_b u-\\log_b w$$\n\n"
            f"$$\\log_{{{b}}}({u:g})-\\log_{{{b}}}({w:g})={lu:g}-{lw:g}={lu-lw:g}$$\n\n"
            f"$$\\log_{{{b}}}\\!\\left(\\frac{{{u:g}}}{{{w:g}}}\\right)={math.log(u/w,b):g}$$\n\n"
            f"The identity holds."
        ),
    ]
    fig = svg_log(base=float(b), xmin=0.5, xmax=max(prod, u, w) * 1.1, title=f"log_{b} product/quotient", mark_x=float(prod))
    return _base(
        "Log product and quotient rules",
        f"Work with base-${b:g}$ logarithms of the positive numbers ${u:g}$ and ${w:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "log_product_quotient", fig,
    )

def log_solve_linear(v: int) -> dict:
    specials = [
        dict(name="5^{x}=2^{x+3}", x=3*ln(2)/(ln(5)-ln(2)), form="\\dfrac{3\\ln 2}{\\ln 5-\\ln 2}"),
        dict(name="3^{x}=7^{x-1}", x=ln(7)/(ln(7)-ln(3)), form="\\dfrac{\\ln 7}{\\ln 7-\\ln 3}"),
        dict(name="2^{x+1}=5^{x}", x=ln(2)/(ln(5)-ln(2)), form="\\dfrac{\\ln 2}{\\ln 5-\\ln 2}"),
        dict(name="4^{x}=3^{x+2}", x=2*ln(3)/(ln(4)-ln(3)), form="\\dfrac{2\\ln 3}{\\ln 4-\\ln 3}"),
        dict(name="9^{x}=27^{x-1}", x=3.0, form="3"),
        dict(name="8^{x}=2^{x+6}", x=2.0, form="2"),
    ]
    c = specials[v % len(specials)]
    x = c["x"]
    A = True
    B = abs(x - round(x)) < 1e-9
    C = x > 2
    D = x < 4
    E = True
    overview = (
        f"Taking logs in ${c['name']}$ yields a linear equation for $x$. "
        f"The unique solution is $x={c['form']}\\approx{x:.6f}$."
    )
    statements = [
        f"The equation ${c['name']}$ has exactly one real solution.",
        f"That unique solution is an integer.",
        f"The unique solution is strictly greater than $2$.",
        f"The unique solution is strictly less than $4$.",
        f"The unique solution equals ${c['form']}$.",
    ]
    bodies = [
        (
            f"Take natural logs of both sides of ${c['name']}$ and collect coefficients of $x$.\n\n"
            f"The resulting equation is linear in $x$ with a nonzero coefficient on $x$, "
            f"so it has exactly one real root.\n\n"
            f"$$x={c['form']}\\approx{x:.6f}$$"
        ),
        (
            f"Inspect whether the unique root is an integer.\n\n"
            f"$$x\\approx{x:.6f}$$\n\n"
            f"{'The value rounds to an integer within numerical tolerance.' if B else 'The value is not an integer.'}"
        ),
        (
            f"Compare the solved root with $2$.\n\n"
            f"$$x\\approx{x:.6f}$$\n\n"
            f"$${x:.6f}{' > ' if C else ' \\le '}2$$"
        ),
        (
            f"Compare the solved root with $4$.\n\n"
            f"$$x\\approx{x:.6f}$$\n\n"
            f"$${x:.6f}{' < ' if D else ' \\ge '}4$$"
        ),
        (
            f"Algebraic rearrangement of ${c['name']}$ produces the closed form\n\n"
            f"$$x={c['form']}$$\n\n"
            f"Numerically $x\\approx{x:.6f}$, matching that expression."
        ),
    ]
    # visualize two sides as exp curves in x
    fig = svg_curves(
        [
            (lambda z: math.exp(z * math.log(2)), "#2F5D50", "ref base-2 growth"),
            (lambda z: math.exp(z * math.log(3)), "#8B5A2B", "ref base-3 growth"),
        ],
        xmin=0, xmax=max(x * 1.3, 4), title="Exponential sides (illustration)", ylabel="value",
        vlines=[x], marks=[(x, math.exp(x * math.log(2)), f"x≈{x:.2f}")],
    )
    return _base(
        "Log-linear exponential equation",
        f"The exponential equation ${c['name']}$ is solved over the reals by taking logarithms.",
        statements, [A, B, C, D, E], bodies, overview, "log_equations_linear", fig,
    )


def elasticity(v: int) -> dict:
    configs = [
        dict(a=5.0, b=1.5, P=4.0, claim_Q=8),
        dict(a=4.0, b=2.0, P=2.0, claim_Q=4),
        dict(a=6.0, b=1.2, P=math.exp(1), claim_Q=20),
        dict(a=3.5, b=0.8, P=math.exp(0.5), claim_Q=10),
        dict(a=5.5, b=1.0, P=math.e, claim_Q=15),
        dict(a=4.5, b=1.25, P=4.0, claim_Q=6),
    ]
    c = configs[v % len(configs)]
    a, b, P = c["a"], c["b"], c["P"]
    lnQ = a - b * ln(P)
    Q = math.exp(lnQ)
    A = True
    B = Q > c["claim_Q"]
    C = lnQ > 1
    D = b > 1
    factor = 2 ** (-b)
    E = abs(math.exp(a - b * ln(2 * P)) / Q - factor) < 1e-9
    overview = (
        f"Log-linear demand $\\ln Q={a:g}-{b:g}\\ln P$. At $P={P:g}$, "
        f"$\\ln Q\\approx{lnQ:.4f}$ so $Q\\approx{Q:.4f}$. Elasticity is $-{b:g}$."
    )
    statements = [
        f"The price elasticity of demand is the constant $-{b:g}$.",
        f"At price $P={P:g}$, quantity exceeds ${c['claim_Q']:g}$.",
        f"At that same price, $\\ln Q$ is strictly larger than $1$.",
        f"Demand is price-elastic in the sense $|\\varepsilon|>1$.",
        f"Doubling the price multiplies quantity by exactly $2^{{-{b:g}}}$.",
    ]
    bodies = [
        (
            f"Differentiate the log-linear demand with respect to $\\ln P$.\n\n"
            f"$$\\ln Q={a:g}-{b:g}\\ln P$$\n\n"
            f"$$\\frac{{d\\ln Q}}{{d\\ln P}}=-{b:g}$$\n\n"
            f"Hence the price elasticity of demand is the constant $-{b:g}$."
        ),
        (
            f"Exponentiate the log-demand at the stated price.\n\n"
            f"$$\\ln Q={a:g}-{b:g}\\ln({P:g})\\approx{lnQ:.4f}$$\n\n"
            f"$$Q=e^{{\\ln Q}}\\approx{Q:.4f}$$\n\n"
            f"Compare with ${c['claim_Q']:g}$:\n\n$${Q:.4f}{' > ' if B else ' \\le '}{c['claim_Q']:g}$$"
        ),
        (
            f"Reuse $\\ln Q$ at that price and compare with $1$.\n\n"
            f"$$\\ln Q\\approx{lnQ:.4f}$$\n\n"
            f"$${lnQ:.4f}{' > ' if C else ' \\le '}1$$"
        ),
        (
            f"Price elasticity has magnitude $b$.\n\n"
            f"$$|\\varepsilon|=b={b:g}$$\n\n"
            f"$${b:g}{' > ' if D else ' \\le '}1$$\n\n"
            f"So demand is {'elastic' if D else 'not elastic'} in the $|\\varepsilon|>1$ sense."
        ),
        (
            f"Constant elasticity implies a pure power response to scaling price.\n\n"
            f"$$\\frac{{Q(2P)}}{{Q(P)}}=\\frac{{e^{{a-b\\ln(2P)}}}}{{e^{{a-b\\ln P}}}}=2^{{-b}}$$\n\n"
            f"$$2^{{-{b:g}}}={factor:.6f}$$\n\n"
            f"Direct evaluation confirms the same factor."
        ),
    ]
    fig = svg_curves(
        [(lambda p, a=a, b=b: math.exp(a - b * math.log(max(p, 1e-9))), "#8B5A2B", "Q(P)")],
        xmin=max(P / 4, 0.2), xmax=P * 3, title="Constant-elasticity demand", xlabel="P", ylabel="Q",
        marks=[(P, Q, f"P={P:g}")],
    )
    return _base(
        "Elasticity — log-linear demand",
        f"Demand obeys $\\ln Q = {a:g} - {b:g}\\ln P$ for $P>0$.",
        statements, [A, B, C, D, E], bodies, overview, "elasticity_log_linear", fig,
    )


def log_graph(v: int) -> dict:
    bases = [2, 10, math.e, 2, 3, 0.5]
    b = bases[v % len(bases)]
    increasing = b > 1
    A = increasing
    B = True
    C = abs(math.log(b, b) - 1) < 1e-12
    D = b > 1
    E = True
    b_disp = "e" if abs(b - math.e) < 1e-9 else f"{b:g}"
    overview = (
        f"The function $f(x)=\\log_{{{b_disp}}}(x)$ on $(0,\\infty)$ is "
        f"{'strictly increasing' if increasing else 'strictly decreasing'}, with $f(1)=0$ and $f(b)=1$."
    )
    statements = [
        f"The map $x\\mapsto\\log_{{{b_disp}}}(x)$ is strictly increasing on $(0,\\infty)$.",
        f"$\\log_{{{b_disp}}}(1)=0$.",
        f"$\\log_{{{b_disp}}}({b_disp})=1$.",
        f"As $x\\to 0^{{+}}$, $\\log_{{{b_disp}}}(x)\\to-\\infty$.",
        f"For every $x>0$, $\\log_{{{b_disp}}}(x^{2})=2\\log_{{{b_disp}}}(x)$.",
    ]
    bodies = [
        (
            f"Differentiate $f(x)=\\log_{{{b_disp}}}(x)=\\ln x/\\ln({b_disp})$.\n\n"
            f"$$f'(x)=\\frac{{1}}{{x\\ln({b_disp})}}$$\n\n"
            f"For $x>0$, the sign of $f'$ equals the sign of $\\ln({b_disp})$. "
            f"Here base ${b_disp}$ gives a {'positive' if increasing else 'negative'} derivative, "
            f"so $f$ is {'strictly increasing' if increasing else 'strictly decreasing'}."
        ),
        (
            f"Every logarithm vanishes at $1$.\n\n"
            f"$$\\log_{{{b_disp}}}(1)=\\frac{{\\ln 1}}{{\\ln({b_disp})}}=0$$\n\n"
            f"So the claim holds."
        ),
        (
            f"By definition of logarithm as the inverse of the exponential,\n\n"
            f"$$\\log_{{{b_disp}}}({b_disp})=1$$\n\n"
            f"because $({b_disp})^{{1}}={b_disp}$."
        ),
        (
            f"The left-end limit depends on whether the base exceeds $1$.\n\n"
            f"{'For base $>1$, $\\log_b(x)\\to-\\infty$ as $x\\to 0^{+}$.' if b>1 else 'For base $0<b<1$, $\\log_b(x)\\to+\\infty$ as $x\\to 0^{+}$, so the claim $\\to-\\infty$ is false.'}"
        ),
        (
            f"Apply the power rule on the positive reals.\n\n"
            f"$$\\log_{{{b_disp}}}(x^{2})=2\\log_{{{b_disp}}}(x)\\qquad(x>0)$$\n\n"
            f"Both sides are defined for every $x>0$, so the identity holds on the whole domain."
        ),
    ]
    fig = svg_log(base=float(b), xmin=0.2, xmax=max(b * 2, 4), title=f"y=log_{b_disp}(x)")
    return _base(
        "Graph of a logarithm — qualitative claims",
        f"Let $f(x)=\\log_{{{b_disp}}}(x)$ with domain $(0,\\infty)$.",
        statements, [A, B, C, D, E], bodies, overview, "graph_of_log", fig,
    )


def log_of_growth(v: int) -> dict:
    configs = [
        dict(P0=1000, k=0.05, t1=4, t2=10),
        dict(P0=500, k=0.08, t1=3, t2=9),
        dict(P0=2000, k=0.03, t1=5, t2=15),
        dict(P0=800, k=0.06, t1=2, t2=8),
        dict(P0=1500, k=0.04, t1=6, t2=12),
        dict(P0=1200, k=0.07, t1=5, t2=10),
    ]
    c = configs[v % len(configs)]
    P0, k, t1, t2 = c["P0"], c["k"], c["t1"], c["t2"]
    A = True
    dln = k * (t2 - t1)
    B = abs((ln(P0 * math.exp(k * t2)) - ln(P0 * math.exp(k * t1))) - dln) < 1e-9
    C = dln > 0.4
    D = ln(P0) > 6
    E = False
    overview = (
        f"$f(t)={P0:g}e^{{{k:g}t}}$ linearizes to\n\n$$\\ln f(t)=\\ln({P0:g})+{k:g}t$$\n\n"
        f"with slope ${k:g}$. From $t={t1:g}$ to ${t2:g}$, $\\Delta\\ln f={dln:.4f}$."
    )
    statements = [
        f"$\\ln f(t)$ is an affine function of $t$ with slope exactly ${k:g}$.",
        f"The change $\\ln f({t2:g})-\\ln f({t1:g})$ equals ${k:g}\\cdot({t2:g}-{t1:g})$.",
        f"That same change $\\Delta\\ln f$ is strictly larger than $0.4$.",
        f"The intercept $\\ln f(0)$ exceeds $6$.",
        f"$\\ln f(t)$ is a quadratic polynomial in $t$.",
    ]
    bodies = [
        (
            f"Take the natural log of the exponential path.\n\n"
            f"$$\\ln f(t)=\\ln\\!\\left({P0:g}e^{{{k:g}t}}\\right)=\\ln({P0:g})+{k:g}t$$\n\n"
            f"This is affine in $t$ with slope exactly ${k:g}$."
        ),
        (
            f"Differences cancel the intercept.\n\n"
            f"$$\\ln f({t2:g})-\\ln f({t1:g})=k({t2:g}-{t1:g})$$\n\n"
            f"$$={k:g}\\cdot({t2:g}-{t1:g})={dln:.4f}$$\n\n"
            f"Direct evaluation of both logs recovers the same increment."
        ),
        (
            f"Compare that log-increment with $0.4$.\n\n"
            f"$$\\Delta\\ln f={dln:.4f}$$\n\n"
            f"$${dln:.4f}{' > ' if C else ' \\le '}0.4$$"
        ),
        (
            f"The intercept is the log of the initial level.\n\n"
            f"$$\\ln f(0)=\\ln({P0:g})\\approx{ln(P0):.4f}$$\n\n"
            f"$${ln(P0):.4f}{' > ' if D else ' \\le '}6$$"
        ),
        (
            f"An affine function has degree $1$ in $t$.\n\n"
            f"$$\\ln f(t)=\\ln({P0:g})+{k:g}t$$\n\n"
            f"There is no $t^{2}$ term, so $\\ln f$ is not a quadratic polynomial."
        ),
    ]
    fig = semi_log_exp(P0, k, t2, "Semi-log view of exponential growth")
    return _base(
        "Log-linearizing an exponential path",
        f"A stock follows $f(t)={P0:g}\\,e^{{{k:g}t}}$. Analysts work with $\\ln f(t)$.",
        statements, [A, B, C, D, E], bodies, overview, "log_of_growth", fig,
    )

def inverse_exp_log(v: int) -> dict:
    configs = [
        dict(b=2, x=3),
        dict(b=10, x=2),
        dict(b=math.e, x=1),
        dict(b=3, x=4),
        dict(b=2, x=5),
        dict(b=5, x=2),
    ]
    c = configs[v % len(configs)]
    b, x = c["b"], c["x"]
    b_disp = "e" if abs(b - math.e) < 1e-9 else f"{b:g}"
    A = abs(math.log(b ** x, b) - x) < 1e-9
    B = abs(b ** (math.log(7, b)) - 7) < 1e-9
    C = True
    D = x > 2
    E = False
    overview = (
        f"Inverse pair: $\\log_{{{b_disp}}}({b_disp}^{{u}})=u$ and "
        f"${b_disp}^{{\\log_{{{b_disp}}}(v)}}=v$ for $v>0$."
    )
    statements = [
        f"$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}$.",
        f"${b_disp}^{{\\log_{{{b_disp}}}(7)}}=7$.",
        f"$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})$ equals ${x}$, not ${x}^{2}$.",
        f"$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})$ is strictly larger than $2$.",
        f"$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}^{2}$.",
    ]
    bodies = [
        (
            f"Apply the inverse identity with exponent $u={x}$.\n\n"
            f"$$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}$$\n\n"
            f"because the logarithm undoes the exponential of the same base."
        ),
        (
            f"Apply the companion inverse identity with positive argument $v=7$.\n\n"
            f"$${b_disp}^{{\\log_{{{b_disp}}}(7)}}=7$$\n\n"
            f"The exponential undoes the logarithm on $(0,\\infty)$."
        ),
        (
            f"The inverse identity returns the original exponent.\n\n"
            f"$$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}$$\n\n"
            f"$$x^{{2}}={x*x:g}$$\n\n"
            f"Unless $x\\in\\{{0,1\\}}$, these differ; here the value is ${x}$, not ${x}^{2}$."
        ),
        (
            f"The identity gives the numeric value ${x}$.\n\n"
            f"$$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}$$\n\n"
            f"$${x}{' > ' if D else ' \\le '}2$$"
        ),
        (
            f"Equating the identity to $x^{{2}}$ would require ${x}={x*x:g}$.\n\n"
            f"$$\\log_{{{b_disp}}}\\!({b_disp}^{{{x}}})={x}\\neq{x*x:g}=x^{{2}}$$\n\n"
            f"for the present $x$, so the claim is false."
        ),
    ]
    fig = svg_curves(
        [
            (lambda t, b=b: b ** t, "#8B5A2B", f"{b_disp}^t"),
            (lambda t, b=b: math.log(max(t, 1e-9)) / math.log(b), "#2F5D50", f"log_{b_disp}"),
        ],
        xmin=0.2, xmax=max(b ** x, 8), title="Exp/log inverse pair", xlabel="x",
        marks=[(b ** x, x, f"b^x")],
    )
    return _base(
        "Inverse relationship of exp and log",
        f"Use base ${b_disp}$ exponential and logarithm as inverse functions.",
        statements, [A, B, C, D, E], bodies, overview, "inverse_exp_log", fig,
    )


def log_domain(v: int) -> dict:
    variants = [
        dict(
            ctx=r"Consider $f(x)=\log(x-2)+\log(5-x)$ (any base $>1$).",
            overview=r"Need $x-2>0$ and $5-x>0$, so $x\in(2,5)$.",
            statements=[
                r"The natural domain is the open interval $(2,5)$.",
                r"The number $x=2$ lies in the domain.",
                r"The number $x=4$ lies in the domain.",
                r"The number $x=5$ lies in the domain.",
                r"The domain contains every real $x>2$.",
            ],
            key=[True, False, True, False, False],
            bodies=[
                (
                    "Both logarithmic arguments must be strictly positive.\n\n"
                    "$$x-2>0\\quad\\Rightarrow\\quad x>2$$\n\n"
                    "$$5-x>0\\quad\\Rightarrow\\quad x<5$$\n\n"
                    "Intersecting these open conditions yields the natural domain $(2,5)$."
                ),
                (
                    "Test the endpoint $x=2$.\n\n"
                    "$$x-2=0$$\n\n"
                    "$$\\log(0)$$ is undefined over the reals, so $x=2$ is excluded."
                ),
                (
                    "Test the interior point $x=4$.\n\n"
                    "$$4-2=2>0,\\qquad 5-4=1>0$$\n\n"
                    "Both arguments are positive, so $x=4$ lies in the domain."
                ),
                (
                    "Test the endpoint $x=5$.\n\n"
                    "$$5-x=0$$\n\n"
                    "Again $\\log(0)$ is undefined, so $x=5$ is excluded."
                ),
                (
                    "Values with $x\\ge 5$ make $5-x\\le 0$.\n\n"
                    "$$5-x\\le 0\\quad(x\\ge 5)$$\n\n"
                    "Those points fail the second argument test, so the domain is not all of $(2,\\infty)$."
                ),
            ],
            fig_base=10, fig_x=4,
        ),
        dict(
            ctx=r"Consider $f(x)=\log x+\log(x-1)$ (any base $>1$).",
            overview=r"Need $x>0$ and $x-1>0$, hence $x>1$.",
            statements=[
                r"The natural domain is $(1,\infty)$.",
                r"The number $x=1$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The identity $\log x+\log(x-1)=\log(x(x-1))$ holds on the whole domain.",
                r"The domain includes some negative $x$.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                (
                    "Require both arguments positive.\n\n"
                    "$$x>0$$\n\n"
                    "$$x-1>0\\quad\\Rightarrow\\quad x>1$$\n\n"
                    "The stricter condition $x>1$ is the natural domain."
                ),
                (
                    "At $x=1$ the second argument vanishes.\n\n"
                    "$$\\log(x-1)=\\log 0$$\n\n"
                    "which is undefined, so $x=1$ is not in the domain."
                ),
                (
                    "At $x=2$ both arguments are positive.\n\n"
                    "$$2>0,\\qquad 2-1=1>0$$\n\n"
                    "so $x=2$ lies in the domain."
                ),
                (
                    "On the domain both logs are defined, so the product rule applies.\n\n"
                    "$$\\log x+\\log(x-1)=\\log\\bigl(x(x-1)\\bigr)$$\n\n"
                    "for every $x>1$."
                ),
                (
                    "If $x<0$ then $\\log x$ is already undefined over the reals.\n\n"
                    "$$x<0\\quad\\Rightarrow\\quad \\log x\\notin\\mathbb{R}$$\n\n"
                    "Hence no negative $x$ enters the domain."
                ),
            ],
            fig_base=10, fig_x=2,
        ),
        dict(
            ctx=r"Consider $f(x)=\log(3-x)-\log(x+1)$ (any base $>1$).",
            overview=r"Need $3-x>0$ and $x+1>0$, so $x\in(-1,3)$.",
            statements=[
                r"The natural domain is $(-1,3)$.",
                r"The number $x=0$ lies in the domain.",
                r"The number $x=3$ lies in the domain.",
                r"On the domain, $f(x)=\log\dfrac{3-x}{x+1}$.",
                r"The domain is all of $\mathbb{R}$.",
            ],
            key=[True, True, False, True, False],
            bodies=[
                (
                    "Both arguments must be positive.\n\n"
                    "$$3-x>0\\quad\\Rightarrow\\quad x<3$$\n\n"
                    "$$x+1>0\\quad\\Rightarrow\\quad x>-1$$\n\n"
                    "Intersection: $x\\in(-1,3)$."
                ),
                (
                    "At $x=0$ the arguments are $3$ and $1$, both positive, so $x=0$ is allowed."
                ),
                (
                    "At $x=3$ the first argument vanishes.\n\n"
                    "$$3-x=0$$\n\n"
                    "so $x=3$ is excluded."
                ),
                (
                    "On the domain the quotient rule applies.\n\n"
                    "$$\\log(3-x)-\\log(x+1)=\\log\\frac{3-x}{x+1}$$"
                ),
                (
                    "Outside $(-1,3)$ at least one argument fails positivity, so the domain is not all of $\\mathbb{R}$."
                ),
            ],
            fig_base=10, fig_x=0,
        ),
        dict(
            ctx=r"Consider $f(x)=\log(2x-1)$ (any base $>1$).",
            overview=r"Need $2x-1>0$, so $x>1/2$.",
            statements=[
                r"The natural domain is $(1/2,\infty)$.",
                r"The number $x=1/2$ lies in the domain.",
                r"The number $x=1$ lies in the domain.",
                r"$f(1)=\log 1=0$.",
                r"The domain includes $x=0$.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                (
                    "Require a positive argument.\n\n"
                    "$$2x-1>0$$\n\n"
                    "$$x>\\frac{1}{2}$$\n\n"
                    "So the natural domain is $(1/2,\\infty)$."
                ),
                (
                    "At the endpoint $x=1/2$ the argument is zero, and $\\log 0$ is undefined."
                ),
                (
                    "At $x=1$ the argument equals $1>0$, so $x=1$ lies in the domain."
                ),
                (
                    "Direct evaluation:\n\n"
                    "$$f(1)=\\log(2\\cdot 1-1)=\\log 1=0$$"
                ),
                (
                    "At $x=0$ the argument is $-1<0$, so $x=0$ is excluded."
                ),
            ],
            fig_base=10, fig_x=1,
        ),
        dict(
            ctx=r"Consider $f(x)=\log(x^{2}-1)$ (any base $>1$).",
            overview=r"Need $x^{2}-1>0$, so $x\in(-\infty,-1)\cup(1,\infty)$.",
            statements=[
                r"The natural domain is $(-\infty,-1)\cup(1,\infty)$.",
                r"The number $x=0$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The number $x=-2$ lies in the domain.",
                r"The domain is $(1,\infty)$ only.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                (
                    "Require $x^{2}-1>0$.\n\n"
                    "$$|x|>1$$\n\n"
                    "Hence $x\\in(-\\infty,-1)\\cup(1,\\infty)$."
                ),
                (
                    "At $x=0$ the argument is $-1<0$, so $x=0$ is excluded."
                ),
                (
                    "At $x=2$ the argument is $3>0$, so $x=2$ is allowed."
                ),
                (
                    "At $x=-2$ the argument is again $3>0$, so $x=-2$ is allowed."
                ),
                (
                    "Negative $x<-1$ also satisfy $|x|>1$, so the domain is not merely $(1,\\infty)$."
                ),
            ],
            fig_base=10, fig_x=2,
        ),
        dict(
            ctx=r"Consider $f(x)=\log(4-x^{2})$ (any base $>1$).",
            overview=r"Need $4-x^{2}>0$, so $x\in(-2,2)$.",
            statements=[
                r"The natural domain is $(-2,2)$.",
                r"The number $x=0$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The number $x=-1$ lies in the domain.",
                r"The domain equals $[-2,2]$.",
            ],
            key=[True, True, False, True, False],
            bodies=[
                (
                    "Require $4-x^{2}>0$.\n\n"
                    "$$x^{2}<4$$\n\n"
                    "$$|x|<2$$\n\n"
                    "So the natural domain is the open interval $(-2,2)$."
                ),
                (
                    "At $x=0$ the argument equals $4>0$, so $x=0$ is allowed."
                ),
                (
                    "At $x=2$ the argument equals $0$, and $\\log 0$ is undefined."
                ),
                (
                    "At $x=-1$ the argument equals $3>0$, so $x=-1$ is allowed."
                ),
                (
                    "The endpoints make the argument zero and are excluded; the domain is open, not $[-2,2]$."
                ),
            ],
            fig_base=10, fig_x=0,
        ),
    ]
    c = variants[v % len(variants)]
    fig = svg_log(base=float(c["fig_base"]), xmin=0.5, xmax=6, title="Log arguments (domain illustration)", mark_x=float(c["fig_x"]) if c["fig_x"] > 0 else None)
    return _base(
        "Domain of a logarithmic expression",
        c["ctx"],
        c["statements"], c["key"], c["bodies"], c["overview"], "log_domain", fig,
    )


def nested_log(v: int) -> dict:
    configs = [
        dict(b=2, inner=8, claim=3),
        dict(b=3, inner=81, claim=4),
        dict(b=10, inner=1000, claim=3),
        dict(b=2, inner=16, claim=4),
        dict(b=math.e, inner=math.e ** 2, claim=2),
        dict(b=5, inner=125, claim=3),
    ]
    c = configs[v % len(configs)]
    b, inner = c["b"], c["inner"]
    b_disp = "e" if abs(b - math.e) < 1e-9 else f"{b:g}"
    val = math.log(inner, b)
    A = abs(val - c["claim"]) < 1e-9
    B = val > 2
    C = abs(b ** val - inner) < 1e-6
    nested = math.log(val, b) if val > 0 else float("nan")
    D = nested > 0
    E = A
    overview = (
        f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$\n\n"
        f"Nested $\\log_{{{b_disp}}}(\\log_{{{b_disp}}}({inner:g}))"
        f"{'='+format(nested,'.6f') if val>0 else ' undefined'}$."
    )
    statements = [
        f"$\\log_{{{b_disp}}}({inner:g})={c['claim']:g}$.",
        f"$\\log_{{{b_disp}}}({inner:g})$ is strictly larger than $2$.",
        f"${b_disp}^{{\\log_{{{b_disp}}}({inner:g})}}={inner:g}$.",
        f"$\\log_{{{b_disp}}}\\!\\left(\\log_{{{b_disp}}}({inner:g})\\right)$ is defined and strictly positive.",
        f"The single logarithm $\\log_{{{b_disp}}}({inner:g})$ equals the integer ${c['claim']:g}$.",
    ]
    bodies = [
        (
            f"Match the argument to a pure power of the base.\n\n"
            f"$$\\log_{{{b_disp}}}({inner:g})=\\frac{{\\ln({inner:g})}}{{\\ln({b_disp})}}={val:g}$$\n\n"
            f"Compare with the claimed value ${c['claim']:g}$:\n\n"
            f"$${val:g}{' = ' if A else ' \\neq '}{c['claim']:g}$$"
        ),
        (
            f"Compare that logarithm with $2$.\n\n"
            f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$\n\n"
            f"$${val:g}{' > ' if B else ' \\le '}2$$"
        ),
        (
            f"Apply the inverse identity.\n\n"
            f"$${b_disp}^{{\\log_{{{b_disp}}}({inner:g})}}={inner:g}$$\n\n"
            f"Numerically ${b_disp}^{{{val:g}}}={b**val:g}$, recovering the argument."
        ),
        (
            f"The nested log requires the inner value to be positive, and positivity of the outer log "
            f"(base $>1$) needs the inner log to exceed $1$.\n\n"
            f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$\n\n"
            f"$$\\log_{{{b_disp}}}({val:g})\\approx{nested:.6f}$$\n\n"
            f"{'Both definedness and positivity hold.' if D else 'The nested value is not strictly positive (or not defined).'}"
        ),
        (
            f"This is the same numeric comparison as the first claim.\n\n"
            f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$\n\n"
            f"$${val:g}{' = ' if E else ' \\neq '}{c['claim']:g}$$"
        ),
    ]
    fig = svg_log(base=float(b if abs(b-math.e)>1e-9 else math.e), xmin=0.5, xmax=max(inner * 1.05, 4), title=f"Nested log base {b_disp}", mark_x=float(inner))
    return _base(
        "Nested logarithms",
        f"Evaluate and compare $\\log_{{{b_disp}}}({inner:g})$ and its nested companion.",
        statements, [A, B, C, D, E], bodies, overview, "nested_logs", fig,
    )


def applied_log_scale(v: int) -> dict:
    configs = [
        dict(A=10**5, A0=1, claim=5, other=10**3),
        dict(A=10**6, A0=1, claim=6, other=10**4),
        dict(A=2*10**4, A0=1, claim=4.3, other=10**3),
        dict(A=10**7, A0=1, claim=7, other=10**5),
        dict(A=5*10**3, A0=1, claim=3.7, other=10**2),
        dict(A=10**4, A0=1, claim=4, other=10**2),
    ]
    c = configs[v % len(configs)]
    M = math.log10(c["A"] / c["A0"])
    M_other = math.log10(c["other"] / c["A0"])
    A = abs(M - c["claim"]) < 0.05
    B = M > M_other
    ratio = c["A"] / c["other"]
    C = abs(ratio - 10 ** (M - M_other)) < 1e-6
    D = (M - M_other) > 1.5
    E = M > 5
    overview = (
        f"Magnitude $M=\\log_{{10}}(A/A_0)$. For $A={c['A']:g}$, $M\\approx{M:.4f}$. "
        f"For $A'={c['other']:g}$, $M'\\approx{M_other:.4f}$. Ratio $A/A'=10^{{M-M'}}$."
    )
    statements = [
        f"The magnitude of amplitude ${c['A']:g}$ (relative to $A_0={c['A0']:g}$) equals ${c['claim']:g}$ within $0.05$.",
        f"That event has strictly larger magnitude than the event of amplitude ${c['other']:g}$.",
        f"The amplitude ratio equals $10$ raised to the difference of magnitudes.",
        f"The magnitude gap between the two events exceeds $1.5$.",
        f"The larger event has magnitude strictly above $5$.",
    ]
    bodies = [
        (
            f"Apply the base-$10$ magnitude definition.\n\n"
            f"$$M=\\log_{{10}}\\!\\left(\\frac{{{c['A']:g}}}{{{c['A0']:g}}}\\right)=\\log_{{10}}({c['A']:g})\\approx{M:.4f}$$\n\n"
            f"$$|M-{c['claim']:g}|\\approx{abs(M-c['claim']):.4f}$$\n\n"
            f"Compare with tolerance $0.05$:\n\n$${abs(M-c['claim']):.4f}{' < ' if A else ' \\ge '}0.05$$"
        ),
        (
            f"Compare the two magnitudes directly.\n\n"
            f"$$M\\approx{M:.4f},\\qquad M'\\approx{M_other:.4f}$$\n\n"
            f"$${M:.4f}{' > ' if B else ' \\le '}{M_other:.4f}$$"
        ),
        (
            f"Exponentiate the magnitude gap.\n\n"
            f"$$\\frac{{A}}{{A'}}=10^{{M-M'}}$$\n\n"
            f"$$10^{{{M:.4f}-{M_other:.4f}}}=10^{{{M-M_other:.4f}}}\\approx{10**(M-M_other):.6g}$$\n\n"
            f"$$\\frac{{{c['A']:g}}}{{{c['other']:g}}}={ratio:.6g}$$\n\n"
            f"The two expressions agree."
        ),
        (
            f"Form the magnitude gap and compare with $1.5$.\n\n"
            f"$$M-M'\\approx{M-M_other:.4f}$$\n\n"
            f"$${M-M_other:.4f}{' > ' if D else ' \\le '}1.5$$"
        ),
        (
            f"Compare the larger magnitude with $5$.\n\n"
            f"$$M\\approx{M:.4f}$$\n\n"
            f"$${M:.4f}{' > ' if E else ' \\le '}5$$"
        ),
    ]
    fig = svg_curves(
        [(lambda x: math.log10(max(x, 1e-12)), "#8B5A2B", "log10(A)")],
        xmin=1, xmax=max(c["A"], c["other"]) * 1.2, title="Log10 magnitude scale", xlabel="amplitude", ylabel="M",
        y_transform=None,
        marks=[(c["A"], M, "A"), (c["other"], M_other, "A'")],
    )
    return _base(
        "Log scale — magnitude comparisons",
        f"A magnitude is defined by $M=\\log_{{10}}(A/A_0)$ with reference $A_0={c['A0']:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "applied_log_scale", fig,
    )


LOG_BUILDERS = [change_of_base, log_quadratic, log_product, log_solve_linear, elasticity, log_graph, log_of_growth, inverse_exp_log, log_domain, nested_log, applied_log_scale]

# ===================== 10.3 Mixed exam styles =====================

def mixed_recover_k_log(v: int) -> dict:
    configs = [
        dict(t1=0, y1=1000, t2=5, y2=1000 * math.exp(0.04 * 5), claim_double=20),
        dict(t1=0, y1=500, t2=4, y2=500 * math.exp(0.06 * 4), claim_double=15),
        dict(t1=0, y1=2000, t2=8, y2=2000 * math.exp(0.025 * 8), claim_double=30),
        dict(t1=2, y1=800, t2=7, y2=800 * math.exp(0.05 * 5), claim_double=18),
        dict(t1=0, y1=1200, t2=6, y2=1200 * math.exp(0.03 * 6), claim_double=25),
        dict(t1=1, y1=900, t2=9, y2=900 * math.exp(0.045 * 8), claim_double=16),
    ]
    c = configs[v % len(configs)]
    dt = c["t2"] - c["t1"]
    k = ln(c["y2"] / c["y1"]) / dt
    t_double = ln(2) / k
    y10 = c["y1"] * math.exp(k * 10)
    A = True
    B = t_double < c["claim_double"]
    C = y10 > 2 * c["y1"]
    D = ln(c["y2"] / c["y1"]) > 0.2
    E = k > 0.03
    overview = (
        f"From $y({c['t1']})={c['y1']:g}$ and $y({c['t2']})={c['y2']:.6g}$ under $y=y_0 e^{{kt}}$,\n\n"
        f"$$k=\\frac{{\\ln(y_2/y_1)}}{{{dt:g}}}\\approx{k:.6f}$$\n\n"
        f"Doubling time $\\approx{t_double:.4f}$. Ten years after the first observation: "
        f"$y\\approx{y10:.4f}$."
    )
    statements = [
        f"The continuous force equals $\\dfrac{{\\ln(y({c['t2']})/y({c['t1']}))}}{{{dt:g}}}$.",
        f"The doubling time is strictly less than ${c['claim_double']:g}$ years.",
        f"Ten years after the first observation, the level exceeds twice $y({c['t1']})$.",
        f"$\\ln\\!\\left(\\dfrac{{y({c['t2']})}}{{y({c['t1']})}}\\right)$ is strictly larger than $0.2$.",
        f"The recovered force is strictly larger than $0.03$.",
    ]
    bodies = [
        (
            f"Start from $y_2=y_1 e^{{k\\Delta t}}$ and solve for the force.\n\n"
            f"$$\\frac{{y_2}}{{y_1}}=e^{{k\\Delta t}}$$\n\n"
            f"$$k=\\frac{{\\ln(y_2/y_1)}}{{\\Delta t}}=\\frac{{\\ln(y({c['t2']})/y({c['t1']}))}}{{{dt:g}}}$$\n\n"
            f"$$k\\approx{k:.6f}$$"
        ),
        (
            f"Doubling solves $e^{{kt}}=2$.\n\n"
            f"$$t_{{\\times 2}}=\\frac{{\\ln 2}}{{k}}\\approx{t_double:.4f}$$\n\n"
            f"Compare with ${c['claim_double']:g}$:\n\n"
            f"$${t_double:.4f}{' < ' if B else ' \\ge '}{c['claim_double']:g}$$"
        ),
        (
            f"Propagate ten years from the first observation.\n\n"
            f"$$y(t_1+10)=y({c['t1']})\\,e^{{10k}}\\approx{y10:.4f}$$\n\n"
            f"$$2y({c['t1']})={2*c['y1']:g}$$\n\n"
            f"$${y10:.4f}{' > ' if C else ' \\le '}{2*c['y1']:g}$$"
        ),
        (
            f"Evaluate the log-ratio between the two observations.\n\n"
            f"$$\\ln\\!\\left(\\frac{{y({c['t2']})}}{{y({c['t1']})}}\\right)\\approx{ln(c['y2']/c['y1']):.4f}$$\n\n"
            f"$${ln(c['y2']/c['y1']):.4f}{' > ' if D else ' \\le '}0.2$$"
        ),
        (
            f"Compare the recovered force with $0.03$.\n\n"
            f"$$k\\approx{k:.6f}$$\n\n"
            f"$${k:.6f}{' > ' if E else ' \\le '}0.03$$"
        ),
    ]
    fig = svg_exp(P0=c["y1"], k=k, tmax=max(c["t2"] - c["t1"], 10) + c["t1"], title="Recovered continuous path", mark_t=c["t2"])
    return _base(
        "Mixed — recover force, then log comparisons",
        f"A continuous exponential path is observed at two times: $y({c['t1']})={c['y1']:g}$ and $y({c['t2']})={c['y2']:.6g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_recover_k", fig,
    )


def mixed_cont_vs_disc_log(v: int) -> dict:
    configs = [
        dict(P=1000, r=0.05, t=10),
        dict(P=2000, r=0.04, t=12),
        dict(P=1500, r=0.06, t=8),
        dict(P=2500, r=0.03, t=15),
        dict(P=1800, r=0.07, t=7),
        dict(P=2200, r=0.045, t=11),
    ]
    c = configs[v % len(configs)]
    P, r, t = c["P"], c["r"], c["t"]
    cont = P * math.exp(r * t)
    disc = P * (1 + r) ** t
    t_star = ln(disc / P) / r
    A = cont > disc
    B = t_star < t
    C = abs(ln(cont / P) - r * t) < 1e-9
    D = ln(disc / P) / t < r
    E = (cont / disc) > 1.02
    overview = (
        f"Continuous $Pe^{{rt}}$ vs annual $(1+r)^t$ with $P={P:g}$, $r={r:g}$, $t={t:g}$.\n\n"
        f"$$A_c\\approx{cont:.4f},\\ A_d\\approx{disc:.4f}$$\n\n"
        f"Log-growth of continuous over the horizon is $rt={r*t:.4f}$."
    )
    statements = [
        f"After ${t:g}$ years continuous compounding exceeds annual compounding at the same nominal rate.",
        f"The continuous model reaches the annual model's ${t:g}$-year balance in strictly less than ${t:g}$ years.",
        f"$\\ln(A_c/P)$ equals exactly $rt={r:g}\\cdot{t:g}$.",
        f"The average continuous force implied by the annual balance, $\\dfrac{{\\ln(A_d/P)}}{{t}}$, is strictly less than $r$.",
        f"The continuous balance exceeds the annual balance by more than $2\\%$ of the annual balance.",
    ]
    bodies = [
        (
            f"Evaluate both compounding conventions at the same horizon.\n\n"
            f"$$A_c=P e^{{rt}}\\approx{cont:.4f}$$\n\n"
            f"$$A_d=P(1+r)^{{t}}\\approx{disc:.4f}$$\n\n"
            f"$${cont:.4f}{' > ' if A else ' \\le '}{disc:.4f}$$"
        ),
        (
            f"Solve for the continuous time that matches the annual terminal balance.\n\n"
            f"$$P e^{{r t^*}}=A_d$$\n\n"
            f"$$t^*=\\frac{{\\ln(A_d/P)}}{{r}}\\approx{t_star:.4f}$$\n\n"
            f"Compare with ${t:g}$:\n\n$${t_star:.4f}{' < ' if B else ' \\ge '}{t:g}$$"
        ),
        (
            f"Take the log of the continuous accumulation factor.\n\n"
            f"$$\\ln(A_c/P)=\\ln(e^{{rt}})=rt$$\n\n"
            f"$$rt={r:g}\\cdot{t:g}={r*t:.4f}$$\n\n"
            f"The equality is exact."
        ),
        (
            f"The annual path implies average continuous force $\\ln(1+r)$.\n\n"
            f"$$\\frac{{\\ln(A_d/P)}}{{t}}=\\ln(1+r)\\approx{ln(1+r):.6f}$$\n\n"
            f"$$\\ln(1+r){' < ' if D else ' \\ge '}{r:g}$$\n\n"
            f"for $r>0$, so the averaged force is strictly below the nominal rate."
        ),
        (
            f"Form the relative excess of continuous over annual.\n\n"
            f"$$\\frac{{A_c}}{{A_d}}-1\\approx{cont/disc-1:.6f}$$\n\n"
            f"Compare with $0.02$:\n\n$${cont/disc-1:.6f}{' > ' if E else ' \\le '}0.02$$"
        ),
    ]
    fig = svg_exp(P0=P, k=r, tmax=t, title="Continuous vs annual compounding", discrete_r=r, mark_t=t)
    return _base(
        "Mixed — continuous vs annual with log returns",
        f"Compare $A_c=P e^{{rt}}$ and $A_d=P(1+r)^{{t}}$ for $P={P:g}$, $r={r:g}$, horizon ${t:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_cont_disc_log", fig,
    )


def mixed_piecewise_log(v: int) -> dict:
    configs = [
        dict(P0=1000, k1=0.05, T=4, k2=0.02, t=10),
        dict(P0=800, k1=0.04, T=5, k2=0.01, t=12),
        dict(P0=1200, k1=0.03, T=6, k2=0.05, t=11),
        dict(P0=600, k1=0.06, T=3, k2=-0.01, t=9),
        dict(P0=1500, k1=0.02, T=7, k2=0.04, t=13),
        dict(P0=900, k1=0.07, T=2, k2=0.03, t=8),
    ]
    c = configs[v % len(configs)]
    P0, k1, T, k2, t = c["P0"], c["k1"], c["T"], c["k2"], c["t"]
    fT = P0 * math.exp(k1 * T)
    ft = fT * math.exp(k2 * (t - T))
    avg = (k1 * T + k2 * (t - T)) / t
    A = abs(ln(ft / P0) - (k1 * T + k2 * (t - T))) < 1e-9
    B = avg > 0.03
    C = ln(fT / P0) > 0.15
    D = ft > 1.5 * P0
    E = k2 > k1
    overview = (
        f"Piecewise continuous growth with switch at ${T:g}$. "
        f"$\\ln(f(t)/P_0)=k_1 T+k_2(t-T)\\approx{k1*T+k2*(t-T):.4f}$, "
        f"average force $\\approx{avg:.6f}$, $f(t)\\approx{ft:.4f}$."
    )
    statements = [
        f"$\\ln(f({t:g})/P_0)$ equals $k_1 T+k_2(t-T)$ exactly.",
        f"The average force $\\bar k=\\ln(f({t:g})/P_0)/{t:g}$ exceeds $0.03$.",
        f"$\\ln(f({T:g})/P_0)$ exceeds $0.15$.",
        f"At $t={t:g}$ the fund exceeds $1.5$ times $P_0$.",
        f"The late force $k_2$ is strictly larger than the early force $k_1$.",
    ]
    bodies = [
        (
            f"Chain the two exponential segments and take logs.\n\n"
            f"$$f(t)=P_0 e^{{k_1 T}}e^{{k_2(t-T)}}$$\n\n"
            f"$$\\ln(f(t)/P_0)=k_1 T+k_2(t-T)$$\n\n"
            f"$$={k1:g}\\cdot{T:g}+{k2:g}\\cdot({t:g}-{T:g})={k1*T+k2*(t-T):.4f}$$"
        ),
        (
            f"Average force is the log-increment per unit time.\n\n"
            f"$$\\bar k=\\frac{{\\ln(f(t)/P_0)}}{{t}}\\approx{avg:.6f}$$\n\n"
            f"$${avg:.6f}{' > ' if B else ' \\le '}0.03$$"
        ),
        (
            f"At the switch, only the early force has acted.\n\n"
            f"$$\\ln(f({T:g})/P_0)=k_1 T={k1*T:.4f}$$\n\n"
            f"$${k1*T:.4f}{' > ' if C else ' \\le '}0.15$$"
        ),
        (
            f"Evaluate the piecewise level at the horizon.\n\n"
            f"$$f({t:g})\\approx{ft:.4f}$$\n\n"
            f"$$1.5 P_0={1.5*P0:g}$$\n\n"
            f"$${ft:.4f}{' > ' if D else ' \\le '}{1.5*P0:g}$$"
        ),
        (
            f"Compare the two force parameters directly.\n\n"
            f"$$k_2={k2:g},\\qquad k_1={k1:g}$$\n\n"
            f"$${k2:g}{' > ' if E else ' \\le '}{k1:g}$$"
        ),
    ]
    fig = svg_piecewise_exp(P0=P0, k1=k1, k2=k2, t_switch=T, tmax=t, title="Piecewise force (mixed log view)")
    return _base(
        "Mixed — piecewise growth read through logs",
        f"A fund starts at $P_0={P0:g}$, grows at force ${k1:g}$ until $t={T:g}$, then at force ${k2:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_piecewise_log", fig,
    )


def mixed_gdp_log(v: int) -> dict:
    configs = [
        dict(Y0=100, g=0.03, N0=10, n=0.01, t=20),
        dict(Y0=80, g=0.025, N0=8, n=0.015, t=16),
        dict(Y0=120, g=0.04, N0=12, n=0.02, t=12),
        dict(Y0=90, g=0.02, N0=9, n=0.005, t=25),
        dict(Y0=110, g=0.035, N0=11, n=0.012, t=18),
        dict(Y0=70, g=0.045, N0=7, n=0.02, t=10),
    ]
    c = configs[v % len(configs)]
    Y0, g, N0, n, t = c["Y0"], c["g"], c["N0"], c["n"], c["t"]
    k = g - n
    dln_y = k * t
    A = abs(dln_y - (g - n) * t) < 1e-12
    B = dln_y > 0.3
    C = g * t > 0.5
    D = n * t < 0.3
    E = k > 0.02
    overview = (
        f"$\\ln y(t)=\\ln(Y_0/N_0)+(g-n)t$ with $g-n={k:g}$. "
        f"Over ${t:g}$ years, $\\Delta\\ln y={dln_y:.4f}$."
    )
    statements = [
        f"The change in log GDP per capita over ${t:g}$ years equals $({g:g}-{n:g})\\cdot{t:g}$.",
        f"That log change exceeds $0.3$.",
        f"Log aggregate GDP rises by more than $0.5$ over the horizon.",
        f"Log population rises by less than $0.3$ over the horizon.",
        f"The per capita continuous force exceeds $0.02$.",
    ]
    bodies = [
        (
            f"Per capita log-growth is the difference of the two forces.\n\n"
            f"$$\\Delta\\ln y=(g-n)t$$\n\n"
            f"$$=({g:g}-{n:g})\\cdot{t:g}={dln_y:.4f}$$"
        ),
        (
            f"Compare that log change with $0.3$.\n\n"
            f"$$\\Delta\\ln y={dln_y:.4f}$$\n\n"
            f"$${dln_y:.4f}{' > ' if B else ' \\le '}0.3$$"
        ),
        (
            f"Aggregate GDP contributes log-increment $gt$.\n\n"
            f"$$\\Delta\\ln Y=g t={g:g}\\cdot{t:g}={g*t:.4f}$$\n\n"
            f"$${g*t:.4f}{' > ' if C else ' \\le '}0.5$$"
        ),
        (
            f"Population contributes log-increment $nt$.\n\n"
            f"$$\\Delta\\ln N=n t={n:g}\\cdot{t:g}={n*t:.4f}$$\n\n"
            f"$${n*t:.4f}{' < ' if D else ' \\ge '}0.3$$"
        ),
        (
            f"The per capita force is $g-n$.\n\n"
            f"$$k={g:g}-{n:g}={k:g}$$\n\n"
            f"$${k:g}{' > ' if E else ' \\le '}0.02$$"
        ),
    ]
    fig = gdp_per_capita(Y0 * 1000, g, N0, n, t, "GDP logs / per capita")
    return _base(
        "Mixed — GDP logs and per capita force",
        f"GDP and population follow $Y(t)=Y_0 e^{{{g:g}t}}$ and $N(t)=N_0 e^{{{n:g}t}}$ with $Y_0={Y0:g}$, $N_0={N0:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_gdp_log", fig,
    )

def mixed_solve_for_t(v: int) -> dict:
    configs = [
        dict(P0=1000, k=0.04, target=2000),
        dict(P0=500, k=0.05, target=1500),
        dict(P0=2000, k=0.03, target=5000),
        dict(P0=800, k=0.06, target=2400),
        dict(P0=1200, k=0.025, target=3000),
        dict(P0=1500, k=0.07, target=4500),
    ]
    c = configs[v % len(configs)]
    P0, k, target = c["P0"], c["k"], c["target"]
    t = ln(target / P0) / k
    A = abs(t - ln(target / P0) / k) < 1e-12
    B = t > 10
    C = t < 25
    D = target / P0 > 2
    E = False
    overview = (
        f"Solve ${P0:g}e^{{{k:g}t}}={target:g}$:\n\n"
        f"$$t=\\frac{{\\ln({target:g}/{P0:g})}}{{{k:g}}}\\approx{t:.4f}$$"
    )
    statements = [
        f"The hitting time is $t=\\dfrac{{\\ln({target:g}/{P0:g})}}{{{k:g}}}$.",
        f"That hitting time exceeds $10$ years.",
        f"That hitting time is strictly less than $25$ years.",
        f"The target is more than double the initial level.",
        f"The hitting time equals $\\dfrac{{{target:g}/{P0:g}}}{{{k:g}}}$ (no logarithm).",
    ]
    wrong = (target / P0) / k
    bodies = [
        (
            f"Divide by $P_0$ and take natural logs.\n\n"
            f"$$e^{{kt}}=\\frac{{{target:g}}}{{{P0:g}}}$$\n\n"
            f"$$kt=\\ln\\!\\left(\\frac{{{target:g}}}{{{P0:g}}}\\right)$$\n\n"
            f"$$t=\\frac{{\\ln({target:g}/{P0:g})}}{{{k:g}}}\\approx{t:.4f}$$"
        ),
        (
            f"Compare the hitting time with $10$.\n\n"
            f"$$t\\approx{t:.4f}$$\n\n"
            f"$${t:.4f}{' > ' if B else ' \\le '}10$$"
        ),
        (
            f"Compare the hitting time with $25$.\n\n"
            f"$$t\\approx{t:.4f}$$\n\n"
            f"$${t:.4f}{' < ' if C else ' \\ge '}25$$"
        ),
        (
            f"Form the target-to-initial ratio.\n\n"
            f"$$\\frac{{{target:g}}}{{{P0:g}}}={target/P0:g}$$\n\n"
            f"$${target/P0:g}{' > ' if D else ' \\le '}2$$"
        ),
        (
            f"Omitting the logarithm replaces $\\ln(\\mathrm{{ratio}})$ by the ratio itself.\n\n"
            f"$$\\frac{{{target:g}/{P0:g}}}{{{k:g}}}={wrong:.4f}$$\n\n"
            f"$$t=\\frac{{\\ln({target/P0:g})}}{{{k:g}}}\\approx{t:.4f}$$\n\n"
            f"Since ${wrong:.4f}\\neq{t:.4f}$, the no-log formula is false."
        ),
    ]
    fig = svg_exp(P0=P0, k=k, tmax=t * 1.15, title="Hitting-time solve", mark_t=t)
    return _base(
        "Mixed — solve exponential hitting time with logs",
        f"A balance $f(t)={P0:g}e^{{{k:g}t}}$ is watched until it reaches ${target:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_solve_t", fig,
    )


def mixed_elasticity_growth(v: int) -> dict:
    configs = [
        dict(b=1.2, g=0.03, t=10),
        dict(b=0.8, g=0.04, t=8),
        dict(b=1.5, g=0.02, t=12),
        dict(b=2.0, g=0.025, t=6),
        dict(b=1.1, g=0.05, t=9),
        dict(b=0.5, g=0.06, t=7),
    ]
    c = configs[v % len(configs)]
    b, g, t = c["b"], c["g"], c["t"]
    q_force = -b * g
    A = abs(q_force + b * g) < 1e-12
    B = q_force < 0
    C = abs(q_force) > 0.04
    D = b > 1
    E = math.exp(q_force * t) < 0.7
    overview = (
        f"Price $P(t)=P_0 e^{{{g:g}t}}$ and constant-elasticity demand $Q\\propto P^{{-{b:g}}}$. "
        f"Then $\\dfrac{{d\\ln Q}}{{dt}}=-b g={q_force:.6f}$."
    )
    statements = [
        f"Quantity's continuous growth force equals $-{b:g}\\cdot{g:g}$.",
        f"Quantity is declining over time (negative force).",
        f"The absolute size of that force exceeds $0.04$.",
        f"Demand is elastic ($b>1$).",
        f"Over ${t:g}$ years, quantity falls to less than $70\\%$ of its initial level.",
    ]
    bodies = [
        (
            f"Start from $\\ln Q=C-b\\ln P$ and differentiate in time.\n\n"
            f"$$\\frac{{d\\ln Q}}{{dt}}=-b\\frac{{d\\ln P}}{{dt}}=-b g$$\n\n"
            f"$$=-{b:g}\\cdot{g:g}={q_force:.6f}$$"
        ),
        (
            f"Inspect the sign of the quantity force.\n\n"
            f"$$\\frac{{d\\ln Q}}{{dt}}={q_force:.6f}$$\n\n"
            f"{'Negative, so quantity declines.' if B else 'Nonnegative, so quantity is not declining.'}"
        ),
        (
            f"Compare the absolute force with $0.04$.\n\n"
            f"$$|{q_force:.6f}|={abs(q_force):.6f}$$\n\n"
            f"$${abs(q_force):.6f}{' > ' if C else ' \\le '}0.04$$"
        ),
        (
            f"Elasticity magnitude is the parameter $b$.\n\n"
            f"$$b={b:g}$$\n\n"
            f"$${b:g}{' > ' if D else ' \\le '}1$$"
        ),
        (
            f"Quantity scales by the exponential of force times horizon.\n\n"
            f"$$\\frac{{Q(t)}}{{Q(0)}}=e^{{q_{{\\mathrm{{force}}}} t}}=e^{{{q_force:.6f}\\cdot{t:g}}}\\approx{math.exp(q_force*t):.6f}$$\n\n"
            f"Compare with $0.7$:\n\n$${math.exp(q_force*t):.6f}{' < ' if E else ' \\ge '}0.7$$"
        ),
    ]
    fig = svg_curves(
        [
            (lambda x, g=g: math.exp(g * x), "#2F5D50", "P/P0"),
            (lambda x, q_force=q_force: math.exp(q_force * x), "#8B5A2B", "Q/Q0"),
        ],
        xmin=0, xmax=t, title="Price drift vs quantity response", marks=[(t, math.exp(q_force * t), "Q ratio")],
    )
    return _base(
        "Mixed — elasticity meeting exponential prices",
        f"Prices drift as $P(t)=P_0 e^{{{g:g}t}}$ while demand satisfies $Q=A P^{{-{b:g}}}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_elasticity_growth", fig,
    )


def mixed_half_life_log(v: int) -> dict:
    configs = [
        dict(m0=100, half=8, target=25),
        dict(m0=80, half=6, target=20),
        dict(m0=64, half=10, target=8),
        dict(m0=120, half=5, target=15),
        dict(m0=90, half=9, target=30),
        dict(m0=50, half=12, target=12.5),
    ]
    c = configs[v % len(configs)]
    m0, half, target = c["m0"], c["half"], c["target"]
    k = ln(2) / half
    t = ln(m0 / target) / k
    n_half = t / half
    A = abs(t - half * ln(m0 / target) / ln(2)) < 1e-9
    B = n_half > 2
    C = t > 15
    D = target < m0 / 4
    E = abs(k - ln(2) / half) < 1e-12
    overview = (
        f"Decay $m={m0:g}e^{{-kt}}$ with $T_{{1/2}}={half:g}$, so $k=\\ln 2/{half:g}$. "
        f"Hitting ${target:g}$ takes $t\\approx{t:.4f}$ (${n_half:.4f}$ half-lives)."
    )
    statements = [
        f"The time to reach ${target:g}$ equals ${half:g}\\cdot\\dfrac{{\\ln({m0:g}/{target:g})}}{{\\ln 2}}$.",
        f"That time spans strictly more than two half-lives.",
        f"That time exceeds $15$ hours.",
        f"The target is strictly less than one quarter of the initial mass.",
        f"The decay constant is exactly $\\ln 2/{half:g}$.",
    ]
    bodies = [
        (
            f"From $m_0 e^{{-kt}}=\\mathrm{{target}}$ and $k=\\ln 2/T_{{1/2}}$,\n\n"
            f"$$t=\\frac{{\\ln(m_0/\\mathrm{{target}})}}{{k}}=T_{{1/2}}\\frac{{\\ln(m_0/\\mathrm{{target}})}}{{\\ln 2}}$$\n\n"
            f"$$={half:g}\\cdot\\frac{{\\ln({m0:g}/{target:g})}}{{\\ln 2}}\\approx{t:.4f}$$"
        ),
        (
            f"Express the hitting time in half-life units.\n\n"
            f"$$\\frac{{t}}{{T_{{1/2}}}}\\approx{n_half:.4f}$$\n\n"
            f"$${n_half:.4f}{' > ' if B else ' \\le '}2$$"
        ),
        (
            f"Compare the hitting time with $15$ hours.\n\n"
            f"$$t\\approx{t:.4f}$$\n\n"
            f"$${t:.4f}{' > ' if C else ' \\le '}15$$"
        ),
        (
            f"Compare the target with one quarter of the initial mass.\n\n"
            f"$$\\frac{{m_0}}{{4}}={m0/4:g}$$\n\n"
            f"$${target:g}{' < ' if D else ' \\ge '}{m0/4:g}$$"
        ),
        (
            f"Half-life definition fixes the decay constant.\n\n"
            f"$$k=\\frac{{\\ln 2}}{{{half:g}}}\\approx{k:.6f}$$\n\n"
            f"which is exactly $\\ln 2/{half:g}$."
        ),
    ]
    fig = svg_exp(P0=m0, k=-k, tmax=max(t, half * 3), title=f"Half-life {half:g} via logs", mark_t=t, ylabel="mass")
    return _base(
        "Mixed — half-life via logarithms",
        f"A sample of ${m0:g}$ grams has half-life ${half:g}$ hours under continuous decay.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_half_life_log", fig,
    )


def mixed_change_base_exp(v: int) -> dict:
    configs = [
        dict(a=8, b=2, exp=5),
        dict(a=27, b=3, exp=4),
        dict(a=16, b=4, exp=3),
        dict(a=81, b=9, exp=2),
        dict(a=32, b=2, exp=6),
        dict(a=125, b=5, exp=3),
    ]
    c = configs[v % len(configs)]
    a, b, expn = c["a"], c["b"], c["exp"]
    log_b_a = math.log(a, b)
    A = abs(log_b_a - round(log_b_a)) < 1e-9
    x = expn / log_b_a
    B = abs(x - expn / log_b_a) < 1e-12
    C = x < expn
    D = abs(a ** x - b ** expn) < 1e-6
    E = log_b_a > 2
    overview = (
        f"$\\log_{{{b}}}({a})={log_b_a:g}$. Solving ${a}^{{x}}={b}^{{{expn}}}$ gives "
        f"$x={expn}/{log_b_a:g}={x:g}$."
    )
    statements = [
        f"$\\log_{{{b}}}({a})$ is an integer.",
        f"The solution of ${a}^{{x}}={b}^{{{expn}}}$ is $x=\\dfrac{{{expn}}}{{\\log_{{{b}}}({a})}}$.",
        f"That solution is strictly smaller than ${expn}$.",
        f"Substituting the solved $x$ recovers equality of the two exponential sides.",
        f"$\\log_{{{b}}}({a})$ is strictly larger than $2$.",
    ]
    bodies = [
        (
            f"Evaluate the change-of-base logarithm.\n\n"
            f"$$\\log_{{{b}}}({a})=\\frac{{\\ln {a}}}{{\\ln {b}}}={log_b_a:g}$$\n\n"
            f"{'This is an integer.' if A else 'This is not an integer.'}"
        ),
        (
            f"Take $\\log_{{{b}}}$ of both sides of ${a}^{{x}}={b}^{{{expn}}}$.\n\n"
            f"$$x\\log_{{{b}}}({a})={expn}$$\n\n"
            f"$$x=\\frac{{{expn}}}{{\\log_{{{b}}}({a})}}={x:g}$$"
        ),
        (
            f"Compare the solved exponent with ${expn}$.\n\n"
            f"$$x={x:g}$$\n\n"
            f"$${x:g}{' < ' if C else ' \\ge '}{expn}$$"
        ),
        (
            f"Substitute $x={x:g}$ back into both sides.\n\n"
            f"$${a}^{{{x:g}}}\\approx{a**x:.6g}$$\n\n"
            f"$${b}^{{{expn}}}={b**expn:g}$$\n\n"
            f"{'The sides match.' if D else 'The sides do not match.'}"
        ),
        (
            f"Compare $\\log_{{{b}}}({a})$ with $2$.\n\n"
            f"$$\\log_{{{b}}}({a})={log_b_a:g}$$\n\n"
            f"$${log_b_a:g}{' > ' if E else ' \\le '}2$$"
        ),
    ]
    fig = svg_log(base=float(b), xmin=0.5, xmax=max(a * 1.1, 4), title=f"log_{b}({a}) in exponential solve", mark_x=float(a))
    return _base(
        "Mixed — change of base inside an exponential equation",
        f"Relate powers of ${a}$ and ${b}$ using $\\log_{{{b}}}({a})$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_change_base_exp", fig,
    )


def mixed_two_populations(v: int) -> dict:
    configs = [
        dict(A0=1000, kA=0.02, B0=1500, kB=0.01, t=20),
        dict(A0=800, kA=0.03, B0=1200, kB=0.015, t=15),
        dict(A0=2000, kA=0.025, B0=1800, kB=0.03, t=10),
        dict(A0=500, kA=0.04, B0=800, kB=0.02, t=12),
        dict(A0=1100, kA=0.015, B0=900, kB=0.035, t=18),
        dict(A0=700, kA=0.05, B0=1000, kB=0.01, t=8),
    ]
    c = configs[v % len(configs)]
    A0, kA, B0, kB, t = c["A0"], c["kA"], c["B0"], c["kB"], c["t"]
    At = A0 * math.exp(kA * t)
    Bt = B0 * math.exp(kB * t)
    if abs(kA - kB) > 1e-12:
        t_meet = ln(B0 / A0) / (kA - kB)
    else:
        t_meet = float("inf")
    A = At > Bt
    B = (not math.isinf(t_meet)) and t_meet > 0 and t_meet < t
    C = ln(At / A0) > ln(Bt / B0)
    D = kA > kB
    E = At + Bt > 2 * (A0 + B0)
    overview = (
        f"$A(t)={A0:g}e^{{{kA:g}t}}$, $B(t)={B0:g}e^{{{kB:g}t}}$. "
        f"At $t={t:g}$: $A\\approx{At:.4f}$, $B\\approx{Bt:.4f}$. "
        f"Meeting time $t^*=\\ln(B_0/A_0)/(k_A-k_B)\\approx{t_meet:.4f}$."
        if not math.isinf(t_meet) else
        f"$A(t)={A0:g}e^{{{kA:g}t}}$, $B(t)={B0:g}e^{{{kB:g}t}}$ with equal forces."
    )
    statements = [
        f"At $t={t:g}$, population $A$ exceeds population $B$.",
        f"The two populations meet at some strictly positive time before $t={t:g}$.",
        f"Over $[0,{t:g}]$, $\\ln(A(t)/A_0)$ exceeds $\\ln(B(t)/B_0)$.",
        f"The continuous force of $A$ exceeds that of $B$.",
        f"The combined population at $t={t:g}$ exceeds twice the combined initial population.",
    ]
    bodies = [
        (
            f"Evaluate both populations at the horizon.\n\n"
            f"$$A({t:g})={A0:g}e^{{{kA:g}\\cdot{t:g}}}\\approx{At:.4f}$$\n\n"
            f"$$B({t:g})={B0:g}e^{{{kB:g}\\cdot{t:g}}}\\approx{Bt:.4f}$$\n\n"
            f"$${At:.4f}{' > ' if A else ' \\le '}{Bt:.4f}$$"
        ),
        (
            f"Solve $A_0 e^{{k_A t}}=B_0 e^{{k_B t}}$ for a meeting time.\n\n"
            f"$$t^*=\\frac{{\\ln(B_0/A_0)}}{{k_A-k_B}}"
            + (f"\\approx{t_meet:.4f}$$\n\nCompare with the open interval $(0,{t:g})$:\n\n"
               f"meeting time is {'inside' if B else 'not inside'} that interval."
               if not math.isinf(t_meet) else
               "$\\to\\infty$ when forces coincide, so no finite meeting time.")
        ),
        (
            f"Log-growth over the horizon equals force times time.\n\n"
            f"$$\\ln(A({t:g})/A_0)=k_A t={kA*t:.4f}$$\n\n"
            f"$$\\ln(B({t:g})/B_0)=k_B t={kB*t:.4f}$$\n\n"
            f"$${kA*t:.4f}{' > ' if C else ' \\le '}{kB*t:.4f}$$"
        ),
        (
            f"Compare the continuous forces directly.\n\n"
            f"$$k_A={kA:g},\\qquad k_B={kB:g}$$\n\n"
            f"$${kA:g}{' > ' if D else ' \\le '}{kB:g}$$"
        ),
        (
            f"Sum the terminal populations and compare with twice the initial total.\n\n"
            f"$$A({t:g})+B({t:g})\\approx{At+Bt:.4f}$$\n\n"
            f"$$2(A_0+B_0)={2*(A0+B0):g}$$\n\n"
            f"$${At+Bt:.4f}{' > ' if E else ' \\le '}{2*(A0+B0):g}$$"
        ),
    ]
    fig = competing_populations(A0, kA, B0, kB, t, "Two exponential populations")
    return _base(
        "Mixed — two exponential populations",
        f"Species $A$ and $B$ follow $A(t)={A0:g}e^{{{kA:g}t}}$ and $B(t)={B0:g}e^{{{kB:g}t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_two_populations", fig,
    )


def mixed_exam_mashup(v: int) -> dict:
    """Hard mashup: rewrite a^t, solve with logs, compare continuous."""
    configs = [
        dict(a=1.05, P=1000, t=12, k_alt=0.05),
        dict(a=1.04, P=2000, t=15, k_alt=0.04),
        dict(a=1.06, P=1500, t=10, k_alt=0.055),
        dict(a=1.03, P=2500, t=20, k_alt=0.03),
        dict(a=1.07, P=800, t=8, k_alt=0.065),
        dict(a=1.025, P=3000, t=16, k_alt=0.024),
    ]
    c = configs[v % len(configs)]
    a, P, t, k_alt = c["a"], c["P"], c["t"], c["k_alt"]
    k = ln(a)
    disc = P * a ** t
    cont_alt = P * math.exp(k_alt * t)
    t_double = ln(2) / k
    A = abs(k - ln(a)) < 1e-15
    B = disc > cont_alt
    C = t_double < 20
    D = ln(disc / P) > 0.5
    E = k > k_alt
    overview = (
        f"Discrete $P\\cdot({a:g})^{{t}}$ has force $k=\\ln({a:g})\\approx{k:.6f}$. "
        f"At $t={t:g}$, value $\\approx{disc:.4f}$. Alternate continuous force ${k_alt:g}$ "
        f"gives $\\approx{cont_alt:.4f}$. Doubling time $\\approx{t_double:.4f}$."
    )
    statements = [
        f"The continuous force equivalent to base ${a:g}$ is exactly $\\ln({a:g})$.",
        f"At $t={t:g}$ the discrete model exceeds the continuous model with force ${k_alt:g}$.",
        f"The discrete model's doubling time is strictly less than $20$ years.",
        f"$\\ln(f({t:g})/P)$ for the discrete model exceeds $0.5$.",
        f"The equivalent force $\\ln({a:g})$ exceeds the alternate force ${k_alt:g}$.",
    ]
    bodies = [
        (
            f"Rewrite the discrete base as a continuous exponential.\n\n"
            f"$$({a:g})^{{t}}=e^{{t\\ln({a:g})}}$$\n\n"
            f"$$k=\\ln({a:g})\\approx{k:.6f}$$\n\n"
            f"So the equivalent continuous force is exactly $\\ln({a:g})$."
        ),
        (
            f"Evaluate both models at the shared horizon.\n\n"
            f"$$f_{{\\mathrm{{disc}}}}={P:g}\\cdot({a:g})^{{{t:g}}}\\approx{disc:.4f}$$\n\n"
            f"$$f_{{\\mathrm{{alt}}}}={P:g}\\,e^{{{k_alt:g}\\cdot{t:g}}}\\approx{cont_alt:.4f}$$\n\n"
            f"$${disc:.4f}{' > ' if B else ' \\le '}{cont_alt:.4f}$$"
        ),
        (
            f"Discrete doubling solves $a^{{t}}=2$.\n\n"
            f"$$t_{{\\times 2}}=\\frac{{\\ln 2}}{{\\ln({a:g})}}\\approx{t_double:.4f}$$\n\n"
            f"Compare with $20$:\n\n$${t_double:.4f}{' < ' if C else ' \\ge '}20$$"
        ),
        (
            f"The log-accumulation of the discrete path is\n\n"
            f"$$\\ln(f({t:g})/P)=\\ln(({a:g})^{{{t:g}}})={t:g}\\ln({a:g})\\approx{t*k:.4f}$$\n\n"
            f"$${t*k:.4f}{' > ' if D else ' \\le '}0.5$$"
        ),
        (
            f"Compare the equivalent force with the alternate continuous force.\n\n"
            f"$$\\ln({a:g})\\approx{k:.6f}$$\n\n"
            f"$${k:.6f}{' > ' if E else ' \\le '}{k_alt:g}$$"
        ),
    ]
    fig = svg_exp(P0=P, k=k, tmax=t, title="Discrete base vs rival continuous", discrete_r=a-1, mark_t=t)
    return _base(
        "Mixed — discrete base, force, and rival continuous path",
        f"A balance follows $f(t)={P:g}\\cdot({a:g})^{{t}}$. Compare with a continuous rival using force ${k_alt:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_exam_mashup", fig,
    )


MIXED_BUILDERS = [
    mixed_recover_k_log, mixed_cont_vs_disc_log, mixed_piecewise_log, mixed_gdp_log,
    mixed_solve_for_t, mixed_elasticity_growth, mixed_half_life_log, mixed_change_base_exp,
    mixed_two_populations, mixed_exam_mashup,
]
