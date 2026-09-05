#!/usr/bin/env python3
"""Task builders for Chapter 10 exp/log bank."""
from __future__ import annotations
import math
from typing import Any

def ln(x: float) -> float:
    return math.log(x)

def _base(title, context, statements, answer_key, bodies, overview, stem_kind) -> dict[str, Any]:
    return {
        "title": title,
        "context": context,
        "statements": statements,
        "answer_key": answer_key,
        "bodies": bodies,
        "overview": overview,
        "stem_kind": stem_kind,
    }

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
        f"Substitute $t={c['claim_t']}$:\n\n$$f({c['claim_t']})={P0:g}\\,e^{{{k:g}\\cdot{c['claim_t']}}}$$\n\n$$\\approx{f_claim_t:.4f}$$\n\nCompare with ${c['claim_level']}$ {c['unit']}:\n\n$${f_claim_t:.4f}{' > ' if B else ' ≤ '}{c['claim_level']}$$",
        f"In $f(t)=P_0 e^{{kt}}$ the continuous annual force is the coefficient $k$.\n\n$$k={k:g}$$\n\n$$100k={annual_pct:g}$$\n\nThe claim asserts exactly ${c['claim_pct_year']:g}\\%$, which {'matches' if C else 'does not match'} $100k$.",
        f"A discrete annual model with nominal rate $r={c['claim_pct_year']/100:g}$ is\n\n$$g(t)={P0:g}\\,(1+{c['claim_pct_year']/100:g})^{{t}}$$\n\nContinuous compounding uses $e^{{kt}}$. These agree for all $t$ only if $1+r=e^{{k}}$.\n\n$$1+{c['claim_pct_year']/100:g}={1+c['claim_pct_year']/100:g}$$\n\n$$e^{{{k:g}}}\\approx{math.exp(k):.6f}$$\n\nSince ${1+c['claim_pct_year']/100:g}\\neq e^{{{k:g}}}$, the paths differ.",
        f"Under continuous force $k$, the one-year multiplier is $e^{{k}}$, not $1+k$.\n\n$$e^{{{k:g}}}-1\\approx{disc:.6f}$$\n\n$$100(e^{{k}}-1)\\approx{100*disc:.4f}\\%$$\n\nThat is not exactly ${c['claim_pct_year']:g}\\%$ in the discrete year-over-year sense.",
    ]
    return _base(
        f"{c['city']} — continuous population force",
        f"A regional demographer models the population of {c['city']} by $f(t)={P0:g}\\,e^{{{k:g}t}}$, where $t$ is years after a census and $f(t)$ is measured in {c['unit']}s of residents.",
        statements, [A, B, C, D, E], bodies, overview, "population_continuous",
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
        f"Count half-lives:\n\n$$\\frac{{{t:g}}}{{{half:g}}}={n_half:g}$$\n\n$$m({t:g})={m0:g}\\cdot\\left(\\tfrac12\\right)^{{{n_half:g}}}={remain:g}$$\n\n$${remain:g}{' < ' if A else ' ≥ '}{c['claim_remain']:g}$$",
        f"$$k=\\frac{{\\ln 2}}{{{half:g}}}\\approx{k:.6f}$$\n\nThe claim $k=0.1$ {'matches' if B else 'does not match'}.",
        f"One eighth remains after three half-lives. Here $t/T_{{1/2}}={n_half:g}$, and $m({t:g})={remain:g}$ while $m_0/8={m0/8:g}$.",
        f"From the overview, $m({t:g})={remain:g}$.\n\n$${remain:g}{' > ' if D else ' ≤ '}{c['claim_remain2']:g}$$",
        f"Solve $m(t)={target:g}$:\n\n$${m0:g}\\,e^{{-kt}}={target:g}$$\n\n$$t=\\frac{{\\ln({m0:g}/{target:g})}}{{k}}\\approx{t_to:.4f}$$\n\n$${t_to:.4f}{' < ' if E else ' ≥ '}{t:g}$$",
    ]
    return _base(
        f"Radioactive sample — half-life {half:g} h",
        f"A lab sample of mass $m_0={m0:g}$ grams decays with half-life $T_{{1/2}}={half:g}$ hours under $m(t)=m_0 e^{{-kt}}$.",
        statements, [A, B, C, D, E], bodies, overview, "radioactive_decay",
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
        f"$$A_{{\\mathrm{{cont}}}}\\approx{cont:.4f},\\ A_{{\\mathrm{{disc}}}}\\approx{disc:.4f}$$\n\n$${cont:.4f}{' > ' if A else ' ≤ '}{disc:.4f}$$",
        f"$$A_{{\\mathrm{{ann}}}}\\approx{annual:.4f},\\ A_{{\\mathrm{{disc}}}}\\approx{disc:.4f}$$\n\n$${disc:.4f}{' > ' if B else ' ≤ '}{annual:.4f}$$",
        f"$$\\frac{{|A_c-A_d|}}{{A_d}}\\approx{rel:.6f}$$\n\n$${rel:.6f}{' < ' if C else ' ≥ '}0.01$$",
        f"$$\\left(1+\\frac{{{r:g}}}{{{n:g}}}\\right)^{{{n:g}}}-1\\approx{ear:.6f}$$\n\n$${ear:.6f}{' > ' if D else ' ≤ '}{r:g}$$",
        f"$$t=\\frac{{\\ln 2}}{{{r:g}}}\\approx{t2:.4f}$$\n\n$${t2:.4f}{' < ' if E else ' ≥ '}12$$",
    ]
    return _base(
        f"Compound interest — n={n:g} vs continuous",
        f"An account opens with principal ${P:,.0f}$ euros at nominal annual rate $r={r:g}$. Compare ${n:g}$ compoundings per year with continuous compounding over ${t:g}$ years.",
        statements, [A, B, C, D, E], bodies, overview, "compound_interest",
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
        f"$$y(t)=y_0 e^{{(g-p)t}}$$ so the force is $g-p={k:g}$.",
        f"$$y({t:g})\\approx{yt:.4f},\\ 1.3 y_0={1.3*y0:.4f}$$\n\n$${yt:.4f}{' > ' if B else ' ≤ '}{1.3*y0:.4f}$$",
        f"$$Y({t:g})\\approx{Yt:.2f},\\ 3Y_0={3*Y0:g}$$\n\n$${Yt:.2f}{' > ' if C else ' ≤ '}{3*Y0:g}$$",
        f"$$N({t:g})\\approx{Popt:.4f},\\ 2N_0={2*pop0:g}$$\n\n$${Popt:.4f}{' > ' if D else ' ≤ '}{2*pop0:g}$$",
        f"$$k={k:g}$$\n\n$${k:g}{' > ' if E else ' ≤ '}0.01$$",
    ]
    return _base(
        "GDP per capita — exponential ratio",
        f"Aggregate real GDP follows $Y(t)={Y0:g}\\,e^{{{g:g}t}}$ while population follows $N(t)={pop0:g}\\,e^{{{p:g}t}}$ (millions). Track $y=Y/N$.",
        statements, [A, B, C, D, E], bodies, overview, "gdp_productivity",
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
        f"$$f({t:g})\\approx{ft:.4f}$$\n\n$${ft:.4f}{' > ' if A else ' ≤ '}{claim:g}$$",
        f"Extrapolation $\\approx{wrong:.4f}$ vs true $\\approx{ft:.4f}$.\n\n$${wrong:.4f}{' > ' if B else ' ≤ '}{ft:.4f}$$",
        f"$$f({T:g})\\approx{fT:.4f},\\ 1.2P_0={1.2*P0:g}$$\n\n$${fT:.4f}{' > ' if C else ' ≤ '}{1.2*P0:g}$$",
        f"$$f(t)=P_0 e^{{k_1 T+k_2(t-T)}}$$ so $\\bar k=(k_1 T+k_2(t-T))/t\\approx{avg:.6f}$.",
        f"$${ft:.4f}{' > ' if E else ' ≤ '}{wrong:.4f}$$",
    ]
    return _base(
        "Piecewise growth — rate switch",
        f"A fund starts at $P_0={P0:g}$ and grows continuously at force ${k1:g}$ until $t={T:g}$, then at force ${k2:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "piecewise_rate",
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
        f"$$t\\approx{t_double:.4f}$$\n\n$${t_double:.4f}{' < ' if A else ' ≥ '}{c['claim_t']:g}$$",
        f"$$|0.72/r - t|\\approx{abs(rule72-t_double):.4f}$$ compared with $0.5$.",
        f"$$({a:g})^{{10}}\\approx{a**10:.6f}$$\n\n$${a**10:.6f}{' > ' if C else ' ≤ '}1.5$$",
        f"Linearised $1/r={1/r:.4f}$ vs exact ${t_double:.4f}$.",
        f"$${t_double:.4f}{' > ' if E else ' ≤ '}{c['claim_rule72']:g}$$",
    ]
    return _base(
        "Doubling time — discrete annual growth",
        f"A quantity grows by the discrete annual factor ${a:g}$ each year, so $f(t)=f_0\\cdot({a:g})^{{t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "doubling_half_life",
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
    bodies = [
        f"$$k=\\ln({a:g})\\approx{k:.6f}$$ vs claimed ${c['claim_k']:g}$.",
        f"By definition $a^{{t}}=\\exp(t\\ln a)$ for $a>0$.",
        f"$$({a:g})^{{{t:g}}}\\approx{val:.6f}$$.",
        f"$${k:.6f}{' > ' if D else ' ≤ '}{c['claim_k']:g}$$",
        f"$$(1+{c['claim_k']:g})^{{{t:g}}}\\approx{(1+c['claim_k'])**t:.6f}$$ vs ${val:.6f}$.",
    ]
    return _base(
        "Base conversion — a^t as e^{kt}",
        f"A discrete factor model uses base ${a:g}$, i.e. $f(t)=f_0\\cdot({a:g})^{{t}}$. An analyst wants an equivalent continuous force $k$.",
        statements, [A, B, C, D, E], bodies, overview, "base_conversion",
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
    # Algebraic identity (always True): ln(f/g)=(k-ln a)t
    E = abs(ln(cont / disc) - (k - ln(a)) * t) < 1e-9
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
        f"$${cont:.4f}{' > ' if A else ' ≤ '}{disc:.4f}$$",
        f"$$\\ln({a:g})\\approx{ln(a):.6f}$$; compare with ${k:g}$.",
        f"Relative gap $\\approx{abs(cont-disc)/max(cont,disc):.6f}$.",
        f"Doubling times ${t_cont:.4f}$ vs ${t_disc:.4f}$.",
        f"$$\\ln\\frac{{P e^{{kt}}}}{{P a^{{t}}}}=(k-\\ln a)t\\approx{(k-ln(a))*t:.6f}$$.",
    ]
    return _base(
        "Comparing continuous and discrete growth",
        f"Two forecasts start at ${P:g}$: continuous $f(t)={P:g}\\,e^{{{k:g}t}}$ and discrete $g(t)={P:g}\\,({a:g})^{{t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "compare_growth_models",
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
        f"$$N({t:g})={Nt:g}$$\n\n$${Nt:g}{' > ' if A else ' ≤ '}{claim:g}$$",
        f"$$({fac:g})^{{t/{per:g}}}=e^{{kt}}$$ with that $k$.",
        f"$$t/\\text{{period}}={nper:g}$$.",
        f"Period factor is ${fac:g}$, {'equal' if D else 'not equal'} to $2$.",
        f"$$k\\approx{k:.6f}$$.",
    ]
    return _base(
        "Culture growth — periodic multiplication",
        f"A culture starts at $N_0={N0:g}$ and multiplies by ${fac:g}$ every ${per:g}$ hours.",
        statements, [A, B, C, D, E], bodies, overview, "bacteria_periodic",
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
    # time to reach claim
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
        f"$$T({t:g})\\approx{Tt:.4f}$$\n\n$${Tt:.4f}{' < ' if A else ' ≥ '}{claim:g}$$",
        f"Since $e^{{-kt}}>0$, $T(t)>T_{{\\mathrm{{env}}}}$ for all finite $t$. Here ${Tt:.4f}>{Te:g}$.",
        f"$$\\frac{{T(t)-T_{{\\mathrm{{env}}}}}}{{T_0-T_{{\\mathrm{{env}}}}}}=e^{{-kt}}$.",
        f"Solving $T(t)={claim:g}$ gives $t\\approx{t_hit:.4f}$." if not math.isnan(t_hit) else "Claim temperature not between $T_0$ and ambient.",
        f"$$k={k:g}$$.",
    ]
    return _base(
        "Cooling — Newton exponential gap",
        f"An object cools toward ambient temperature ${Te:g}$ from initial ${T0:g}$ with $T(t)={Te:g}+({T0:g}-{Te:g})e^{{-{k:g}t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "cooling_decay",
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
    # log_b(a), log_c(a), change of base
    log_b_a = ln(c["a"]) / ln(c["b"])
    log_c_a = ln(c["a"]) / ln(c["c"])
    # log_b(a) / log_b(c) = log_c(a)
    A = abs(log_b_a / (ln(c["c"]) / ln(c["b"])) - log_c_a) < 1e-9
    B = log_b_a > c["claim"]
    C = abs(log_b_a - math.log(c["a"], c["b"])) < 1e-9
    # D: log_c(a) = log_b(a) / 2 when c = b^2
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
    # Fix C: is log_b(a) an integer?
    C = abs(log_b_a - round(log_b_a)) < 1e-9
    bodies = [
        f"Change-of-base formula with intermediate base ${c['b']}$ yields the identity.",
        f"$$\\log_{{{c['b']}}}({c['a']})={log_b_a:g}$$\n\n$${log_b_a:g}{' > ' if B else ' ≤ '}{c['claim']:g}$$",
        f"$$\\log_{{{c['b']}}}({c['a']})={log_b_a:g}$$, which {'is' if C else 'is not'} an integer.",
        f"$$\\log_{{{c['b']}}}({c['c']})=2$$ so dividing by $2$ halves the log. Value ${log_c_a:g}$ vs half ${log_b_a/2:g}$.",
        f"$${log_c_a:g}{' > ' if E else ' ≤ '}{c['claim']:g}$$",
    ]
    return _base(
        "Change of base — twin logarithms",
        f"Consider $\\log_{{{c['b']}}}({c['a']})$ and $\\log_{{{c['c']}}}({c['a']})$ with ${c['c']}={c['b']}^2$.",
        statements, [A, B, C, D, E], bodies, overview, "change_of_base",
    )

def log_quadratic(v: int) -> dict:
    configs = [
        dict(base=2, roots=(1, 2)),  # (log2 x)^2 - 3 log2 x + 2 = 0 → x=2,4
        dict(base=3, roots=(1, 2)),
        dict(base=2, roots=(2, 3)),  # t^2-5t+6
        dict(base=10, roots=(1, 2)),
        dict(base=5, roots=(1, 3)),
        dict(base=2, roots=(0, 2)),  # t(t-2)=0 → x=1,4
    ]
    c = configs[v % len(configs)]
    b = c["base"]
    r1, r2 = c["roots"]
    # equation (log_b x)^2 - (r1+r2) log_b x + r1*r2 = 0
    s, p = r1 + r2, r1 * r2
    x1, x2 = b ** r1, b ** r2
    product = x1 * x2
    A = True  # domain x>0
    B = True  # roots of aux are r1,r2
    C = abs(product - b ** (r1 + r2)) < 1e-9
    D = min(x1, x2) < 1
    E = (x1 + x2) > (b + 1)
    # Add a false trap: claim product equals b^{r1*r2} instead of b^{r1+r2}
    # Replace C with that trap comparison for more False variety when product identity is "too easy True"
    C_wrong = abs(product - b ** (r1 * r2)) < 1e-9
    # Keep C as the correct identity (True); flip statement C wording later if needed
    # Make A a subtler claim: "x=0 is admissible" → False
    A = False

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
        f"$\\log_{{{b}}} x$ requires $x>0$.",
        f"$t^2-({s})t+({p})=(t-{r1})(t-{r2})$.",
        f"$$x_1 x_2={b}^{{{r1}}}\\cdot{b}^{{{r2}}}={b}^{{{s}}}$$.",
        f"Solutions ${x1:g}$ and ${x2:g}$; min is ${min(x1,x2):g}$.",
        f"Sum ${x1+x2:g}$ versus ${b+1:g}$.",
    ]
    return _base(
        "Quadratic in a logarithm",
        f"The equation $(\\log_{{{b}}} x)^2 - {s}\\log_{{{b}}} x + {p} = 0$ is studied on its natural domain.",
        statements, [A, B, C, D, E], bodies, overview, "log_equations_quadratic",
    )

def log_product(v: int) -> dict:
    configs = [
        dict(b=10, u=2, w=5, claim=100),  # log u + log w = log(uw)
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
    bodies = [
        f"Product rule gives $\\log_b(uw)=\\log_b u+\\log_b w$.",
        f"$${u:g}\\cdot{w:g}={prod:g}$$ vs ${c['claim']:g}$.",
        f"$$\\log_{{{b}}}({u:g})={math.log(u,b):g}$$.",
        f"$$\\log_{{{b}}}({w/u:g})={math.log(w/u,b):g}$$.",
        f"Quotient rule identity.",
    ]
    return _base(
        "Log product and quotient rules",
        f"Work with base-${b:g}$ logarithms of the positive numbers ${u:g}$ and ${w:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "log_product_quotient",
    )

def log_solve_linear(v: int) -> dict:
    configs = [
        dict(eq="5^x=2^{x+3}", x=3*ln(2)/(ln(5)-ln(2)), claim_int=False, claim_gt=3),
        dict(eq="3^x=7^{x-1}", x=ln(7)/(ln(7)-ln(3)), claim_int=False, claim_gt=2),
        dict(eq="2^{x+1}=5^x", x=ln(2)/(ln(5)-ln(2)), claim_int=False, claim_gt=1),
        dict(eq="4^x=3^{x+2}", x=2*ln(3)/(ln(4)-ln(3)), claim_int=False, claim_gt=5),
        dict(eq="9^x=27^{x-1}", x=3, claim_int=True, claim_gt=2),  # special clean
        dict(eq="8^x=2^{x+6}", x=2, claim_int=True, claim_gt=3),
    ]
    # Fix special cases analytically
    specials = [
        # 5^x = 2^{x+3}
        dict(name="5^{x}=2^{x+3}", x=3*ln(2)/(ln(5)-ln(2)), form="\\dfrac{3\\ln 2}{\\ln 5-\\ln 2}"),
        dict(name="3^{x}=7^{x-1}", x=ln(7)/(ln(7)-ln(3)), form="\\dfrac{\\ln 7}{\\ln 7-\\ln 3}"),
        dict(name="2^{x+1}=5^{x}", x=ln(2)/(ln(5)-ln(2)), form="\\dfrac{\\ln 2}{\\ln 5-\\ln 2}"),
        dict(name="4^{x}=3^{x+2}", x=2*ln(3)/(ln(4)-ln(3)), form="\\dfrac{2\\ln 3}{\\ln 4-\\ln 3}"),
        dict(name="9^{x}=27^{x-1}", x=3.0, form="3"),
        dict(name="8^{x}=2^{x+6}", x=2.0, form="2"),
    ]
    c = specials[v % len(specials)]
    x = c["x"]
    A = True  # unique real solution
    B = abs(x - round(x)) < 1e-9
    C = x > 2
    D = x < 4
    E = abs(x - float(c["form"])) < 1e-6 if c["form"].replace(".","").isdigit() else True
    # E: claimed closed form matches - always true by construction for form string display
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
        f"After taking logs, a linear equation with nonzero coefficient for $x$ appears, hence uniqueness.",
        f"$$x\\approx{x:.6f}$$, {'an integer' if B else 'not an integer'}.",
        f"$${x:.6f}{' > ' if C else ' ≤ '}2$$",
        f"$${x:.6f}{' < ' if D else ' ≥ '}4$$",
        f"Algebraic rearrangement produces exactly $x={c['form']}$.",
    ]
    return _base(
        "Log-linear exponential equation",
        f"The exponential equation ${c['name']}$ is solved over the reals by taking logarithms.",
        statements, [A, B, C, D, E], bodies, overview, "log_equations_linear",
    )

def elasticity(v: int) -> dict:
    """log-linear demand: ln Q = a - b ln P"""
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
    A = abs(b - 1.5) < 1e-9 or True  # elasticity magnitude is b
    # A: price elasticity of demand is -b (constant)
    A = True
    B = Q > c["claim_Q"]
    C = lnQ > 1
    D = b > 1  # elastic
    # E: doubling price multiplies Q by 2^{-b}
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
        f"Differentiating $\\ln Q=a-b\\ln P$ yields $\\dfrac{{d\\ln Q}}{{d\\ln P}}=-b$, the elasticity.",
        f"$$Q=e^{{{a:g}-{b:g}\\ln({P:g})}}\\approx{Q:.4f}$$.",
        f"$$\\ln Q\\approx{lnQ:.4f}$$.",
        f"$$|\\varepsilon|=b={b:g}$${' > 1' if D else ' ≤ 1'}.",
        f"$$\\frac{{Q(2P)}}{{Q(P)}}=2^{{-b}}={factor:.6f}$$ by the constant-elasticity structure.",
    ]
    return _base(
        "Elasticity — log-linear demand",
        f"Demand obeys $\\ln Q = {a:g} - {b:g}\\ln P$ for $P>0$.",
        statements, [A, B, C, D, E], bodies, overview, "elasticity_log_linear",
    )

def log_graph(v: int) -> dict:
    configs = [
        dict(b=2, shift=0),
        dict(b=10, shift=0),
        dict(b=math.e, shift=0),
        dict(b=2, shift=1),  # log(x-1) conceptually - keep simple log_b x
        dict(b=3, shift=0),
        dict(b=math.e, shift=0),
    ]
    # Use pure log_b(x) claims
    bases = [2, 10, math.e, 2, 3, 0.5]
    b = bases[v % len(bases)]
    # For b=0.5, decreasing
    increasing = b > 1
    A = increasing  # claim: strictly increasing on (0,inf)
    B = abs(math.log(1, b) if b != 1 else 0) < 1e-15 or True
    B = True  # log_b(1)=0
    # C: log_b(b)=1
    C = abs(math.log(b, b) - 1) < 1e-12
    # D: as x→0+, log → -∞ if b>1, else +∞
    D = True  # we'll state the correct direction for b>1 and wrong for b<1 carefully
    if b > 1:
        D_claim_neg_inf = True
        D = True
        claim_D = "As $x\\to 0^{+}$, $\\log_{b}(x)\\to-\\infty$."
    else:
        # b=0.5: as x→0+, log_{1/2}x → +∞
        D = False  # claim will say → -∞ which is false
        claim_D = "As $x\\to 0^{+}$, $\\log_{b}(x)\\to-\\infty$."
    # E: log_b(x^2)=2 log_b x for x>0
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
        claim_D.replace("b", b_disp).replace("\\log_{b}", f"\\log_{{{b_disp}}}"),
        f"For every $x>0$, $\\log_{{{b_disp}}}(x^{2})=2\\log_{{{b_disp}}}(x)$.",
    ]
    # fix claim_D in statements - already set
    statements[3] = f"As $x\\to 0^{{+}}$, $\\log_{{{b_disp}}}(x)\\to-\\infty$."
    D = b > 1
    bodies = [
        f"Derivative $1/(x\\ln {b_disp})$ is {'positive' if increasing else 'negative'} for $x>0$.",
        f"Any log base satisfies $\\log_b 1=0$.",
        f"By definition $\\log_b(b)=1$.",
        f"For base ${b_disp}${' > 1' if b>1 else ' ∈ (0,1)'}, the left-end limit is {'$-\\infty$' if b>1 else '$+\\infty$'}.",
        f"Power rule: $\\log_b(x^2)=2\\log_b x$ on $(0,\\infty)$.",
    ]
    return _base(
        "Graph of a logarithm — qualitative claims",
        f"Let $f(x)=\\log_{{{b_disp}}}(x)$ with domain $(0,\\infty)$.",
        statements, [A, B, C, D, E], bodies, overview, "graph_of_log",
    )

def log_of_growth(v: int) -> dict:
    """Apply log to exponential growth to linearize."""
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
    # ln f(t) = ln P0 + k t
    slope = k
    A = True
    dln = k * (t2 - t1)
    B = abs((ln(P0 * math.exp(k * t2)) - ln(P0 * math.exp(k * t1))) - dln) < 1e-9
    C = dln > 0.4
    D = ln(P0) > 6
    E = False  # claim: ln f is quadratic in t
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
        f"$$\\ln({P0:g}e^{{kt}})=\\ln({P0:g})+kt$$.",
        f"$$\\Delta\\ln f=k\\Delta t={dln:.4f}$$.",
        f"$${dln:.4f}{' > ' if C else ' ≤ '}0.4$$",
        f"$$\\ln({P0:g})\\approx{ln(P0):.4f}$$.",
        f"The right-hand side is degree $1$ in $t$, not degree $2$.",
    ]
    return _base(
        "Log-linearizing an exponential path",
        f"A stock follows $f(t)={P0:g}\\,e^{{{k:g}t}}$. Analysts work with $\\ln f(t)$.",
        statements, [A, B, C, D, E], bodies, overview, "log_of_growth",
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
    C = False  # trap: claim log_b(b^x)=x^2 in statement C? wait statements say equals x not x^2
    # Statement C says equals x not x^2 — keep True; instead make D use threshold 100
    C = abs(math.log(b ** x, b) - x) < 1e-9
    D = math.log(b ** x, b) > 100  # almost always False
    E = False  # claim log_b(b^x)=x^2
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
    C = True
    D = x > 2
    E = False
    bodies = [
        f"Inverse identity with $u={x}$.",
        f"Inverse identity with $v=7>0$.",
        f"The identity returns the exponent ${x}$, not its square.",
        f"Value is ${x}$, compared with $2$.",
        f"The identity gives ${x}$, so equating to ${x}^{2}$ fails unless $x\\in\\{{0,1\\}}$.",
    ]
    return _base(
        "Inverse relationship of exp and log",
        f"Use base ${b_disp}$ exponential and logarithm as inverse functions.",
        statements, [A, B, C, D, E], bodies, overview, "inverse_exp_log",
    )

def log_domain(v: int) -> dict:
    configs = [
        dict(expr="log(x-2)+log(5-x)", domain_low=2, domain_high=5),
        dict(expr="log(x)+log(x-1)", domain_low=1, domain_high=None),
        dict(expr="log(3-x)-log(x+1)", domain_low=-1, domain_high=3),
        dict(expr="log(2x-1)", domain_low=0.5, domain_high=None),
        dict(expr="log(x^2-1)", domain_low=1, domain_high=None),  # |x|>1 actually
        dict(expr="log(4-x^2)", domain_low=-2, domain_high=2),
    ]
    # Carefully set claims per variant
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
                r"Both arguments positive iff $x>2$ and $x<5$.",
                r"At $x=2$, $x-2=0$, and $\log 0$ is undefined.",
                r"At $x=4$, arguments $2$ and $1$ are positive.",
                r"At $x=5$, $5-x=0$, undefined.",
                r"Values $x\\ge 5$ make $5-x\\le 0$.",
            ],
        ),
        dict(
            ctx=r"Consider $f(x)=\log x+\log(x-1)$ (any base $>1$).",
            overview=r"Need $x>0$ and $x-1>0$, hence $x>1$.",
            statements=[
                r"The natural domain is $(1,\\infty)$.",
                r"The number $x=1$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The identity $\log x+\log(x-1)=\log(x(x-1))$ holds on the whole domain.",
                r"The domain includes some negative $x$.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                r"Both $x>0$ and $x>1$ reduce to $x>1$.",
                r"At $x=1$, $\log(x-1)=\log 0$ is undefined.",
                r"At $x=2$ both arguments are positive.",
                r"Product rule applies whenever both logs are defined.",
                r"If $x<0$ then $\log x$ is undefined over the reals.",
            ],
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
                r"$x<3$ and $x>-1$.",
                r"At $x=0$ arguments $3$ and $1$ are positive.",
                r"At $x=3$, $3-x=0$.",
                r"Quotient rule on the domain.",
                r"Outside $(-1,3)$ at least one argument fails.",
            ],
        ),
        dict(
            ctx=r"Consider $f(x)=\log(2x-1)$ (any base $>1$).",
            overview=r"Need $2x-1>0$, so $x>1/2$.",
            statements=[
                r"The natural domain is $(1/2,\\infty)$.",
                r"The number $x=1/2$ lies in the domain.",
                r"The number $x=1$ lies in the domain.",
                r"$f(1)=\log 1=0$.",
                r"The domain includes $x=0$.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                r"$2x-1>0\\iff x>1/2$.",
                r"At the endpoint the argument is zero.",
                r"At $x=1$, argument $1>0$.",
                r"$\\log(2\\cdot 1-1)=\\log 1=0$.",
                r"At $x=0$, argument $-1<0$.",
            ],
        ),
        dict(
            ctx=r"Consider $f(x)=\log(x^{2}-1)$ (any base $>1$).",
            overview=r"Need $x^{2}-1>0$, so $x\\in(-\\infty,-1)\\cup(1,\\infty)$.",
            statements=[
                r"The natural domain is $(-\\infty,-1)\\cup(1,\\infty)$.",
                r"The number $x=0$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The number $x=-2$ lies in the domain.",
                r"The domain is $(1,\\infty)$ only.",
            ],
            key=[True, False, True, True, False],
            bodies=[
                r"$|x|>1$.",
                r"At $x=0$, argument $-1<0$.",
                r"At $x=2$, argument $3>0$.",
                r"At $x=-2$, argument $3>0$.",
                r"Negative $x<-1$ also work.",
            ],
        ),
        dict(
            ctx=r"Consider $f(x)=\log(4-x^{2})$ (any base $>1$).",
            overview=r"Need $4-x^{2}>0$, so $x\\in(-2,2)$.",
            statements=[
                r"The natural domain is $(-2,2)$.",
                r"The number $x=0$ lies in the domain.",
                r"The number $x=2$ lies in the domain.",
                r"The number $x=-1$ lies in the domain.",
                r"The domain equals $[-2,2]$.",
            ],
            key=[True, True, False, True, False],
            bodies=[
                r"$x^{2}<4$.",
                r"At $x=0$, argument $4>0$.",
                r"At $x=2$, argument $0$.",
                r"At $x=-1$, argument $3>0$.",
                r"Endpoints make the argument zero, so they are excluded.",
            ],
        ),
    ]
    c = variants[v % len(variants)]
    return _base(
        "Domain of a logarithmic expression",
        c["ctx"],
        c["statements"], c["key"], c["bodies"], c["overview"], "log_domain",
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
    # log_b(log_b(b^{inner})) style — keep simpler: log_b(inner)
    A = abs(val - c["claim"]) < 1e-9
    B = val > 2
    C = abs(b ** val - inner) < 1e-6
    D = math.log(math.log(inner, b) + 1e-15, b) if val > 0 else float("nan")
    # D: claim nested log_b(log_b(inner)) is defined and positive
    D = val > 1  # log_b(val) defined when val>0 always for positive; need val>0 which is true; for positivity need val>1 if b>1
    nested = math.log(val, b) if val > 0 else float("nan")
    D_claim_positive = nested > 0
    D = D_claim_positive
    E = abs(val - c["claim"]) < 1e-9
    overview = (
        f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$\n\n"
        f"Nested $\\log_{{{b_disp}}}(\\log_{{{b_disp}}}({inner:g}))"
        f"{'='+str(round(nested,6)) if val>0 else ' undefined'}$."
    )
    statements = [
        f"$\\log_{{{b_disp}}}({inner:g})={c['claim']:g}$.",
        f"$\\log_{{{b_disp}}}({inner:g})$ is strictly larger than $2$.",
        f"${b_disp}^{{\\log_{{{b_disp}}}({inner:g})}}={inner:g}$.",
        f"$\\log_{{{b_disp}}}\\!\\left(\\log_{{{b_disp}}}({inner:g})\\right)$ is defined and strictly positive.",
        f"The single logarithm $\\log_{{{b_disp}}}({inner:g})$ equals the integer ${c['claim']:g}$.",
    ]
    bodies = [
        f"$$\\log_{{{b_disp}}}({inner:g})={val:g}$$.",
        f"$${val:g}{' > ' if B else ' ≤ '}2$$",
        f"Inverse identity.",
        f"Need argument $\\log_{{{b_disp}}}({inner:g})={val:g}>0$ for definition, and $>1$ for positivity when base $>1$. Nested value $\\approx{nested:.6f}$.",
        f"Same as statement A: value ${val:g}$ vs ${c['claim']:g}$.",
    ]
    # E same as A
    E = A
    return _base(
        "Nested logarithms",
        f"Evaluate and compare $\\log_{{{b_disp}}}({inner:g})$ and its nested companion.",
        statements, [A, B, C, D, E], bodies, overview, "nested_logs",
    )

def applied_log_scale(v: int) -> dict:
    """Richter/pH style: M = log10(A/A0)"""
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
    # C: amplitude ratio A/other = 10^{M-M_other}
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
        f"$$M=\\log_{{10}}({c['A']:g})\\approx{M:.4f}$$.",
        f"$${M:.4f}{' > ' if B else ' ≤ '}{M_other:.4f}$$",
        f"$$\\frac{{A}}{{A'}}=10^{{M-M'}}\\approx{ratio:.6g}$$.",
        f"$$M-M'\\approx{M-M_other:.4f}$$.",
        f"$${M:.4f}{' > ' if E else ' ≤ '}5$$",
    ]
    return _base(
        "Log scale — magnitude comparisons",
        f"A magnitude is defined by $M=\\log_{{10}}(A/A_0)$ with reference $A_0={c['A0']:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "applied_log_scale",
    )

LOG_BUILDERS = [change_of_base, log_quadratic, log_product, log_solve_linear, elasticity, log_graph, log_of_growth, inverse_exp_log, log_domain, nested_log, applied_log_scale]


# ===================== 10.3 Mixed exam styles =====================

def mixed_recover_k_log(v: int) -> dict:
    """Recover continuous k from two observations, then log questions."""
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
    # y at t1+10
    y10 = c["y1"] * math.exp(k * 10)
    A = abs(k - round(k, 3)) < 5e-4 or True
    # A: recovered k equals the designed value within 1e-9
    A = True  # we'll claim exact expression
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
        f"Solving $y_2=y_1 e^{{k\\Delta t}}$ yields exactly that quotient of logs.",
        f"$$t_{{\\times 2}}=\\ln 2/k\\approx{t_double:.4f}$$.",
        f"$$y(t_1+10)=y_1 e^{{10k}}\\approx{y10:.4f}$$ vs $2y_1={2*c['y1']:g}$.",
        f"$$\\ln(y_2/y_1)\\approx{ln(c['y2']/c['y1']):.4f}$$.",
        f"$$k\\approx{k:.6f}$$.",
    ]
    return _base(
        "Mixed — recover force, then log comparisons",
        f"A continuous exponential path is observed at two times: $y({c['t1']})={c['y1']:g}$ and $y({c['t2']})={c['y2']:.6g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_recover_k",
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
    # time for continuous to reach disc's terminal? 
    # solve Pe^{rt*}=disc → t* = ln(disc/P)/r
    t_star = ln(disc / P) / r
    A = cont > disc
    B = t_star < t
    C = abs(ln(cont / P) - r * t) < 1e-9
    D = ln(disc / P) / t < r  # average log return of discrete < r
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
        f"$${cont:.4f}{' > ' if A else ' ≤ '}{disc:.4f}$$",
        f"$$t^*=\\ln(A_d/P)/r\\approx{t_star:.4f}$$.",
        f"$$\\ln(e^{{rt}})=rt$$.",
        f"$$\\ln(1+r)\\approx{ln(1+r):.6f}<{r:g}$$ so the averaged force is smaller.",
        f"$$A_c/A_d-1\\approx{cont/disc-1:.6f}$$.",
    ]
    return _base(
        "Mixed — continuous vs annual with log returns",
        f"Compare $A_c=P e^{{rt}}$ and $A_d=P(1+r)^{{t}}$ for $P={P:g}$, $r={r:g}$, horizon ${t:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_cont_disc_log",
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
        f"Chain the exponentials and take logs.",
        f"$$\\bar k\\approx{avg:.6f}$$.",
        f"$$\\ln(f_T/P_0)=k_1 T={k1*T:.4f}$$.",
        f"$$f({t:g})\\approx{ft:.4f}$$ vs ${1.5*P0:g}$.",
        f"$${k2:g}{' > ' if E else ' ≤ '}{k1:g}$$",
    ]
    return _base(
        "Mixed — piecewise growth read through logs",
        f"A fund starts at $P_0={P0:g}$, grows at force ${k1:g}$ until $t={T:g}$, then at force ${k2:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_piecewise_log",
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
    # log per capita growth over horizon
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
        f"$$\\Delta\\ln y=(g-n)t={dln_y:.4f}$$.",
        f"$${dln_y:.4f}{' > ' if B else ' ≤ '}0.3$$",
        f"$$\\Delta\\ln Y=gt={g*t:.4f}$$.",
        f"$$\\Delta\\ln N=nt={n*t:.4f}$$.",
        f"$$k={k:g}$$.",
    ]
    return _base(
        "Mixed — GDP logs and per capita force",
        f"GDP and population follow $Y(t)=Y_0 e^{{{g:g}t}}$ and $N(t)=N_0 e^{{{n:g}t}}$ with $Y_0={Y0:g}$, $N_0={N0:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_gdp_log",
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
    E = False  # claim t = (target/P0)/k without log
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
    bodies = [
        f"Take $\\ln$ of $e^{{kt}}=\\mathrm{{target}}/P_0$.",
        f"$$t\\approx{t:.4f}$$.",
        f"$${t:.4f}{' < ' if C else ' ≥ '}25$$",
        f"$$\\mathrm{{target}}/P_0={target/P0:g}$$.",
        f"Omitting the log replaces $\\ln(\\mathrm{{ratio}})$ by the ratio itself: "
        f"${(target/P0)/k:.4f}\\neq{t:.4f}$.",
    ]
    return _base(
        "Mixed — solve exponential hitting time with logs",
        f"A balance $f(t)={P0:g}e^{{{k:g}t}}$ is watched until it reaches ${target:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_solve_t",
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
    # P(t)=P0 e^{gt}, Q = A P^{-b} so ln Q = const - b ln P
    # growth of Q: dlnQ/dt = -b g
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
        f"Chain rule on $\\ln Q=C-b\\ln P$ with $\\dot{{\\ln P}}=g$.",
        f"Force ${q_force:.6f}$ is {'negative' if B else 'nonnegative'}.",
        f"$$|{q_force:.6f}|={' > ' if C else ' ≤ '}0.04$$ vs $0.04$.",
        f"$$b={b:g}$$.",
        f"$$e^{{q_force t}}\\approx{math.exp(q_force*t):.6f}$$.",
    ]
    return _base(
        "Mixed — elasticity meeting exponential prices",
        f"Prices drift as $P(t)=P_0 e^{{{g:g}t}}$ while demand satisfies $Q=A P^{{-{b:g}}}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_elasticity_growth",
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
        f"From $e^{{-kt}}=\\mathrm{{target}}/m_0$ and $k=\\ln 2/T_{{1/2}}$.",
        f"$$t/T_{{1/2}}\\approx{n_half:.4f}$$.",
        f"$$t\\approx{t:.4f}$$.",
        f"$$m_0/4={m0/4:g}$$ vs target ${target:g}$.",
        f"Half-life definition.",
    ]
    return _base(
        "Mixed — half-life via logarithms",
        f"A sample of ${m0:g}$ grams has half-life ${half:g}$ hours under continuous decay.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_half_life_log",
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
    # a^x = b^{x log_b a} 
    log_b_a = math.log(a, b)
    A = abs(log_b_a - round(log_b_a)) < 1e-9
    # solve a^x = b^{exp} → x log a = exp log b → x = exp / log_b(a)
    x = expn / log_b_a
    B = abs(x - expn / log_b_a) < 1e-12
    C = x < expn
    D = a ** x == b ** expn or abs(a ** x - b ** expn) < 1e-6
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
        f"$$\\log_{{{b}}}({a})={log_b_a:g}$$.",
        f"Take $\\log_{{{b}}}$: $x\\log_{{{b}}} a={expn}$.",
        f"$$x={x:g}$${' < ' if C else ' ≥ '}{expn}$.",
        f"By construction of the log solve.",
        f"$${log_b_a:g}{' > ' if E else ' ≤ '}2$$",
    ]
    return _base(
        "Mixed — change of base inside an exponential equation",
        f"Relate powers of ${a}$ and ${b}$ using $\\log_{{{b}}}({a})$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_change_base_exp",
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
    # catch-up: A0 e^{kA t}=B0 e^{kB t} → t = ln(B0/A0)/(kA-kB) if kA!=kB
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
        f"$${At:.4f}{' > ' if A else ' ≤ '}{Bt:.4f}$$",
        f"Meeting time $\\approx{t_meet:.4f}$ compared with ${t:g}$.",
        f"$$k_A t={kA*t:.4f}$$ vs $$k_B t={kB*t:.4f}$$.",
        f"$${kA:g}{' > ' if D else ' ≤ '}{kB:g}$$",
        f"$$A+B\\approx{At+Bt:.4f}$$ vs ${2*(A0+B0):g}$.",
    ]
    return _base(
        "Mixed — two exponential populations",
        f"Species $A$ and $B$ follow $A(t)={A0:g}e^{{{kA:g}t}}$ and $B(t)={B0:g}e^{{{kB:g}t}}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_two_populations",
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
        f"$$({a:g})^{{t}}=e^{{t\\ln({a:g})}}$$.",
        f"$${disc:.4f}{' > ' if B else ' ≤ '}{cont_alt:.4f}$$",
        f"$$t_{{\\times 2}}=\\ln 2/\\ln({a:g})\\approx{t_double:.4f}$$.",
        f"$$\\ln(({a:g})^{{{t:g}}})={t:g}\\ln({a:g})\\approx{t*k:.4f}$$.",
        f"$${k:.6f}{' > ' if E else ' ≤ '}{k_alt:g}$$",
    ]
    return _base(
        "Mixed — discrete base, force, and rival continuous path",
        f"A balance follows $f(t)={P:g}\\cdot({a:g})^{{t}}$. Compare with a continuous rival using force ${k_alt:g}$.",
        statements, [A, B, C, D, E], bodies, overview, "mixed_exam_mashup",
    )

MIXED_BUILDERS = [
    mixed_recover_k_log, mixed_cont_vs_disc_log, mixed_piecewise_log, mixed_gdp_log,
    mixed_solve_for_t, mixed_elasticity_growth, mixed_half_life_log, mixed_change_base_exp,
    mixed_two_populations, mixed_exam_mashup,
]
