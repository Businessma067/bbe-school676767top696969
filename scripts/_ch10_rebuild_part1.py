#!/usr/bin/env python3
"""Rebuild Chapter 10 exp/log bank: hard multi-step claims, graphs, MATH 13.18 explanations."""
from __future__ import annotations

import json
import math
import random
import statistics
import sys
from collections import Counter
from pathlib import Path
from typing import Any, Callable

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import (  # noqa: E402
    competing_populations,
    exp_decay,
    exp_growth,
    gdp_per_capita,
    log_curve,
    piecewise_kink,
    semi_log_exp,
    two_models,
)

OUT = Path("/workspace/src/data/math-ch10-exp-log.json")
LETTERS = "ABCDE"
TAIL = "Evaluate each statement. Mark it TRUE or FALSE."


def ln(x: float) -> float:
    return math.log(x)


def fmt(x: float, digs: int = 4) -> str:
    if abs(x - round(x)) < 1e-9 and abs(x) < 1e6:
        return str(int(round(x)))
    return f"{x:.{digs}f}".rstrip("0").rstrip(".")


def verd(truth: bool) -> str:
    return "True" if truth else "False"


def expl(letter: str, truth: bool, body: str) -> str:
    body = body.strip()
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + f".\n\nSo the statement is {verd(truth)}."
    return f"**{letter}.** → {verd(truth)}\n\n{body}"


def pack(
    n: int,
    subsection: str,
    difficulty: str,
    *,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    bodies: list[str],
    overview: str,
    stem_kind: str,
    figure: str | None = None,
) -> dict[str, Any]:
    assert len(statements) == 5 == len(answer_key) == len(bodies)
    ctx = context.strip()
    if "TRUE or FALSE" not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + TAIL
    teas = [expl(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    task: dict[str, Any] = {
        "id": f"math-10-{n}",
        "case_id": f"MATH 10.{n:02d}",
        "title": title,
        "subsection": subsection,
        "context": ctx,
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": overview,
        "difficulty_level": difficulty,
        "sort_order": n,
        "placeholder": False,
        "stem_kind": stem_kind,
    }
    if figure:
        task["figure"] = figure
    return task


# ---------------------------------------------------------------------------
# 10.1 Exponential builders
# ---------------------------------------------------------------------------


def build_cont_vs_disc(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(city="Lysova", P0=10.0, unit="million", k=0.02, t=25, level=16.0),
        dict(city="Nordheim", P0=8.0, unit="million", k=0.025, t=20, level=13.0),
        dict(city="Eastmere", P0=5.0, unit="million", k=0.03, t=18, level=8.5),
        dict(city="Valborg", P0=12.0, unit="million", k=0.015, t=30, level=18.0),
        dict(city="Sorn", P0=6.0, unit="million", k=0.04, t=12, level=9.5),
        dict(city="Kestrel", P0=15.0, unit="million", k=0.018, t=22, level=22.0),
    ]
    c = configs[v % len(configs)]
    P0, k, t = c["P0"], c["k"], c["t"]
    cont = P0 * math.exp(k * t)
    disc = P0 * (1 + k) ** t
    one_year_cont = math.exp(k) - 1
    t_double = ln(2) / k
    # unit trap: stem says millions; claim uses raw "10" as if people
    A = cont > c["level"]
    B = False  # claim: discrete (1+k)^t equals continuous
    C = one_year_cont > k  # e^k - 1 > k for k>0
    D = t_double < 40
    E = disc < cont  # discrete at rate k understates continuous
    overview = (
        f"The overview recovers the continuous census model\n\n"
        f"$$f(t)={fmt(P0)}\\,e^{{{fmt(k)}t}}$$\n\n"
        f"for {c['city']}, with $f$ in {c['unit']}s of residents. "
        f"The continuous annual force is $k={fmt(k)}$. "
        f"At $t={t}$,\n\n$$f({t})={fmt(P0)}\\,e^{{{fmt(k)}\\cdot{t}}}\\approx{fmt(cont,4)}$$\n\n"
        f"The naive discrete rival $g(t)={fmt(P0)}(1+{fmt(k)})^{{t}}$ gives "
        f"$g({t})\\approx{fmt(disc,4)}$. "
        f"One-year continuous growth is $e^{{k}}-1\\approx{fmt(one_year_cont,6)}$, "
        f"not the force $k$ itself. Doubling solves $e^{{kt}}=2$, so "
        f"$t=\\ln 2/k\\approx{fmt(t_double,4)}$."
    )
    statements = [
        f"At $t={t}$, the continuous model exceeds ${fmt(c['level'])}$ {c['unit']}.",
        f"Replacing $e^{{{fmt(k)}t}}$ by $(1+{fmt(k)})^{{t}}$ leaves the path unchanged for every $t$.",
        f"Over a single year the continuous model multiplies the population by a factor strictly larger than $1+{fmt(k)}$.",
        f"The continuous doubling time is strictly less than $40$ years.",
        f"At $t={t}$, the discrete path $g(t)={fmt(P0)}(1+{fmt(k)})^{{t}}$ lies strictly below the continuous path.",
    ]
    bodies = [
        (
            f"Substitute the recovered force into the continuous level formula.\n\n"
            f"$$f({t})={fmt(P0)}\\,e^{{{fmt(k)}\\cdot{t}}}$$\n\n"
            f"$$={fmt(P0)}\\,e^{{{fmt(k*t,4)}}}$$\n\n"
            f"$$\\approx{fmt(cont,4)}$$\n\n"
            f"Compare with the claimed threshold ${fmt(c['level'])}$ {c['unit']}:\n\n"
            f"$${fmt(cont,4)}{' > ' if A else ' \\le '}{fmt(c['level'])}$$"
        ),
        (
            f"Two closed forms agree for all $t$ only when their one-year multipliers match.\n\n"
            f"$$1+{fmt(k)}={fmt(1+k)}$$\n\n"
            f"$$e^{{{fmt(k)}}}\\approx{fmt(math.exp(k),6)}$$\n\n"
            f"Since ${fmt(1+k)}\\neq e^{{{fmt(k)}}}$, the discrete replacement "
            f"$(1+{fmt(k)})^{{t}}$ is not identical to $e^{{{fmt(k)}t}}$. "
            f"At the concrete horizon $t={t}$ the values already differ "
            f"({fmt(disc,4)} versus {fmt(cont,4)})."
        ),
        (
            f"Under continuous force $k$, the exact one-year multiplier is $e^{{k}}$, not $1+k$.\n\n"
            f"$$e^{{{fmt(k)}}}-1\\approx{fmt(one_year_cont,6)}$$\n\n"
            f"$$1+{fmt(k)}={fmt(1+k)}$$\n\n"
            f"For $k>0$ the inequality $e^{{k}}>1+k$ holds, so the continuous year-over-year "
            f"growth factor exceeds $1+{fmt(k)}$.\n\n"
            f"$${fmt(math.exp(k),6)}{' > ' if C else ' \\le '}{fmt(1+k)}$$"
        ),
        (
            f"Doubling means $f(t)=2f(0)$, which forces $e^{{kt}}=2$.\n\n"
            f"$$t=\\frac{{\\ln 2}}{{{fmt(k)}}}$$\n\n"
            f"$$t\\approx{fmt(t_double,4)}$$\n\n"
            f"Compare with $40$:\n\n"
            f"$${fmt(t_double,4)}{' < ' if D else ' \\ge '}40$$"
        ),
        (
            f"From the overview, we have $f({t})\\approx{fmt(cont,4)}$ and "
            f"$g({t})\\approx{fmt(disc,4)}$. Compare those two levels directly:\n\n"
            f"$$g({t})={fmt(P0)}(1+{fmt(k)})^{{{t}}}\\approx{fmt(disc,4)}$$\n\n"
            f"$$f({t})\\approx{fmt(cont,4)}$$\n\n"
            f"$${fmt(disc,4)}{' < ' if E else ' \\ge '}{fmt(cont,4)}$$"
        ),
    ]
    fig = (
        two_models(P0, k, 1 + k, t, f"{c['city']}: continuous vs discrete")
        if want_fig
        else None
    )
    return dict(
        title=f"{c['city']} — continuous force versus discrete {fmt(100*k)}%",
        context=(
            f"A demographer models the population of {c['city']} by "
            f"$f(t)={fmt(P0)}\\,e^{{{fmt(k)}t}}$, where $t$ is years after a census and "
            f"$f(t)$ is measured in {c['unit']}s of residents. A rival analyst proposes "
            f"replacing the continuous path by annual compounding at nominal rate ${fmt(100*k)}\\%$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="cont_vs_disc_annual",
        figure=fig,
    )


def build_gdp(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(name="Aurora", Y0=500, g=0.03, N0=10, p=0.01, t=20),
        dict(name="Boreal", Y0=400, g=0.025, N0=8, p=0.008, t=18),
        dict(name="Cinder", Y0=600, g=0.028, N0=12, p=0.012, t=25),
        dict(name="Drift", Y0=350, g=0.035, N0=7, p=0.015, t=15),
        dict(name="Ember", Y0=480, g=0.022, N0=9, p=0.006, t=22),
        dict(name="Frost", Y0=550, g=0.04, N0=11, p=0.018, t=12),
    ]
    c = configs[v % len(configs)]
    Y0, g, N0, p, t = c["Y0"], c["g"], c["N0"], c["p"], c["t"]
    # Y0 in billions, N0 in millions → y0 in thousands
    y0 = Y0 / N0
    k = g - p
    yt = y0 * math.exp(k * t)
    Yt = Y0 * math.exp(g * t)
    Nt = N0 * math.exp(p * t)
    wrong_add = y0 * math.exp((g + p) * t)  # additive trap
    A = abs(k - (g - p)) < 1e-15  # always True: per-capita force is difference
    A = True
    B = yt > 1.4 * y0
    C = False  # claim: per-capita force is g+p
    D = Yt / Nt > yt * 0.999  # identity check approx True
    D = abs(Yt / Nt - yt) < 1e-6
    E = wrong_add > yt  # the additive trap overstates
    overview = (
        f"Aggregate real GDP (billions) follows $Y(t)={fmt(Y0)}\\,e^{{{fmt(g)}t}}$ while "
        f"population (millions) follows $N(t)={fmt(N0)}\\,e^{{{fmt(p)}t}}$. "
        f"GDP per capita is the ratio\n\n"
        f"$$y(t)=\\frac{{Y(t)}}{{N(t)}}={fmt(y0)}\\,e^{{({fmt(g)}-{fmt(p)})t}}={fmt(y0)}\\,e^{{{fmt(k)}t}}$$\n\n"
        f"So the continuous per-capita force is the difference $g-p={fmt(k)}$, not a sum. "
        f"At $t={t}$:\n\n"
        f"$$y({t})\\approx{fmt(yt,4)},\\quad Y({t})\\approx{fmt(Yt,4)},\\quad N({t})\\approx{fmt(Nt,4)}.$$"
    )
    statements = [
        f"Real GDP per capita grows at continuous annual force exactly ${fmt(k)}$.",
        f"After ${t}$ years, GDP per capita exceeds $1.4$ times its initial level.",
        f"Because both GDP and population grow, the per-capita force equals ${fmt(g)}+{fmt(p)}$.",
        f"The identity $y(t)=Y(t)/N(t)$ holds at $t={t}$ for the recovered paths.",
        f"Using force ${fmt(g)}+{fmt(p)}$ for per capita overstates the true $y({t})$.",
    ]
    bodies = [
        (
            f"Take natural logs of the ratio definition.\n\n"
            f"$$\\ln y(t)=\\ln Y(t)-\\ln N(t)$$\n\n"
            f"$$=\\ln Y_0+gt-(\\ln N_0+pt)$$\n\n"
            f"$$=\\ln(Y_0/N_0)+(g-p)t$$\n\n"
            f"Hence the continuous force on $y$ is exactly $g-p={fmt(g)}-{fmt(p)}={fmt(k)}$."
        ),
        (
            f"The overview recovered $y({t})\\approx{fmt(yt,4)}$ and $y_0={fmt(y0)}$.\n\n"
            f"$$1.4\\,y_0={fmt(1.4*y0,4)}$$\n\n"
            f"$$y({t})={fmt(y0)}\\,e^{{{fmt(k)}\\cdot{t}}}\\approx{fmt(yt,4)}$$\n\n"
            f"$${fmt(yt,4)}{' > ' if B else ' \\le '}{fmt(1.4*y0,4)}$$"
        ),
        (
            f"Adding the two forces would describe a product $Y\\cdot N$, not the ratio $Y/N$.\n\n"
            f"$$\\frac{{d}}{{dt}}\\ln(Y/N)=g-p={fmt(k)}$$\n\n"
            f"$$g+p={fmt(g+p)}$$\n\n"
            f"The claim asserts force ${fmt(g+p)}$, but the recovered per-capita force is "
            f"${fmt(k)}$. Those are not equal."
        ),
        (
            f"Compute the ratio of the recovered aggregate paths and compare with $y({t})$.\n\n"
            f"$$\\frac{{Y({t})}}{{N({t})}}=\\frac{{{fmt(Yt,4)}}}{{{fmt(Nt,4)}}}\\approx{fmt(Yt/Nt,4)}$$\n\n"
            f"$$y({t})\\approx{fmt(yt,4)}$$\n\n"
            f"The absolute gap is about ${fmt(abs(Yt/Nt-yt),6)}$, which is numerical noise, "
            f"so the identity holds."
        ),
        (
            f"The additive-trap path would be\n\n"
            f"$$y_{{\\mathrm{{wrong}}}}(t)={fmt(y0)}\\,e^{{({fmt(g)}+{fmt(p)})t}}\\approx{fmt(wrong_add,4)}$$\n\n"
            f"while the true level is\n\n"
            f"$$y({t})\\approx{fmt(yt,4)}$$\n\n"
            f"$${fmt(wrong_add,4)}{' > ' if E else ' \\le '}{fmt(yt,4)}$$"
        ),
    ]
    fig = (
        gdp_per_capita(Y0, g, N0, p, t, f"{c['name']}: GDP vs per capita")
        if want_fig
        else None
    )
    return dict(
        title=f"{c['name']} — GDP per capita force trap",
        context=(
            f"In {c['name']}, aggregate real GDP (billions of dollars) follows "
            f"$Y(t)={fmt(Y0)}\\,e^{{{fmt(g)}t}}$ while population (millions) follows "
            f"$N(t)={fmt(N0)}\\,e^{{{fmt(p)}t}}$. Analysts track GDP per capita $y=Y/N$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="gdp_per_capita_trap",
        figure=fig,
    )


def build_piecewise(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(fund="Orion", P0=1000, k1=0.05, T=6, k2=0.01, target=1500),
        dict(fund="Polar", P0=2000, k1=0.04, T=5, k2=0.02, target=2800),
        dict(fund="Quill", P0=800, k1=0.06, T=4, k2=-0.01, target=900),
        dict(fund="Raven", P0=1500, k1=0.03, T=8, k2=0.045, target=2600),
        dict(fund="Sable", P0=1200, k1=0.055, T=3, k2=0.015, target=1600),
        dict(fund="Thorn", P0=2500, k1=0.02, T=10, k2=0.035, target=4000),
    ]
    c = configs[v % len(configs)]
    P0, k1, T, k2, target = c["P0"], c["k1"], c["T"], c["k2"], c["target"]
    fT = P0 * math.exp(k1 * T)
    # solve fT * e^{k2(t-T)} = target for t > T (if possible)
    if k2 == 0:
        t_hit = float("inf")
    else:
        t_hit = T + ln(target / fT) / k2
    # also compare constant-k1 extrapolation
    t_wrong = ln(target / P0) / k1
    A = t_hit > T and math.isfinite(t_hit)
    B = (t_hit > T) and (t_hit < t_wrong if k1 > k2 else t_hit > t_wrong)
    # claim: hits target before T (usually false if target > fT)
    C = fT >= target  # hit already by switch
    D = abs((ln(fT / P0) / T) - k1) < 1e-9
    # E: after switch, time from T to target is ln(target/fT)/k2
    E = A and abs((t_hit - T) - ln(target / fT) / k2) < 1e-9
    overview = (
        f"The fund starts at $P_0={fmt(P0)}$ and grows with piecewise continuous force "
        f"$k={fmt(k1)}$ on $[0,{T}]$ and $k={fmt(k2)}$ afterward.\n\n"
        f"$$f({T})={fmt(P0)}\\,e^{{{fmt(k1)}\\cdot{T}}}\\approx{fmt(fT,4)}$$\n\n"
        f"For $t>{T}$,\n\n"
        f"$$f(t)=f({T})\\,e^{{{fmt(k2)}(t-{T})}}.$$\n\n"
        f"Hitting level ${fmt(target)}$ after the switch solves "
        f"$t={T}+\\ln({fmt(target)}/f({T}))/{fmt(k2)}$"
        + (f" $\\approx{fmt(t_hit,4)}$." if math.isfinite(t_hit) else ".")
    )
    statements = [
        f"The target level ${fmt(target)}$ is first reached at some time strictly after the rate switch $t={T}$.",
        f"Ignoring the rate switch and extrapolating force ${fmt(k1)}$ all the way changes the hitting time.",
        f"By the switch time $t={T}$ the fund has already reached at least ${fmt(target)}$.",
        f"The average continuous force on $[0,{T}]$ recovered from $f({T})/P_0$ equals ${fmt(k1)}$.",
        f"Conditional on crossing after the switch, the remaining time equals "
        f"$\\ln({fmt(target)}/f({T}))/{fmt(k2)}$.",
    ]
    bodies = [
        (
            f"At the switch, $f({T})\\approx{fmt(fT,4)}$. Compare with the target ${fmt(target)}$:\n\n"
            f"$${fmt(fT,4)}{' < ' if fT < target else ' \\ge '}{fmt(target)}$$\n\n"
            + (
                f"Because the switch level is still below the target and $k_2={fmt(k2)}"
                f"{'>' if k2>0 else '<'}0$, solve\n\n"
                f"$$f({T})\\,e^{{{fmt(k2)}(t-{T})}}={fmt(target)}$$\n\n"
                f"$$t={T}+\\frac{{\\ln({fmt(target)}/{fmt(fT,4)})}}{{{fmt(k2)}}}\\approx{fmt(t_hit,4)}$$\n\n"
                f"Since ${fmt(t_hit,4)}>{T}$, the first hitting time is after the switch."
                if fT < target and k2 > 0
                else f"The geometry of the piecewise path does not place the first hitting time "
                f"strictly after $t={T}$ under these parameters "
                f"(switch level {fmt(fT,4)}, target {fmt(target)}, $k_2={fmt(k2)}$)."
            )
        ),
        (
            f"Constant-force extrapolation with $k={fmt(k1)}$ would solve\n\n"
            f"$${fmt(P0)}\\,e^{{{fmt(k1)}t}}={fmt(target)}$$\n\n"
            f"$$t=\\frac{{\\ln({fmt(target)}/{fmt(P0)})}}{{{fmt(k1)}}}\\approx{fmt(t_wrong,4)}$$\n\n"
            f"The piecewise hitting time is "
            + (f"$\\approx{fmt(t_hit,4)}$" if math.isfinite(t_hit) else "undefined/infinite")
            + f". Those times differ, so ignoring the switch changes the answer."
        ),
        (
            f"Evaluate the piecewise path at the switch only.\n\n"
            f"$$f({T})\\approx{fmt(fT,4)}$$\n\n"
            f"$${fmt(fT,4)}{' \\ge ' if C else ' < '}{fmt(target)}$$"
        ),
        (
            f"On $[0,{T}]$ the force is constant $k_1$, so\n\n"
            f"$$\\frac{{1}}{{T}}\\ln\\frac{{f({T})}}{{P_0}}=\\frac{{1}}{{{T}}}\\ln\\frac{{{fmt(fT,4)}}}{{{fmt(P0)}}}$$\n\n"
            f"$$\\approx{fmt(ln(fT/P0)/T,6)}$$\n\n"
            f"which matches $k_1={fmt(k1)}$."
        ),
        (
            f"From $f({T})\\,e^{{k_2(t-T)}}={fmt(target)}$ take logs:\n\n"
            f"$$k_2(t-T)=\\ln\\frac{{{fmt(target)}}}{{f({T})}}$$\n\n"
            f"$$t-T=\\frac{{\\ln({fmt(target)}/f({T}))}}{{{fmt(k2)}}}$$\n\n"
            f"That is exactly the claimed remaining-time formula "
            f"{'and applies here' if E else 'but the crossing is not after the switch under these data'}."
        ),
    ]
    # Honest keys
    A_key = (fT < target) and (k2 > 0) and math.isfinite(t_hit) and (t_hit > T)
    B_key = A_key and abs(t_hit - t_wrong) > 1e-6
    C_key = fT >= target
    D_key = True
    E_key = A_key  # formula is the definition when A holds
    tmax = max(T + 8, (t_hit + 2) if math.isfinite(t_hit) else T + 10)
    fig = (
        piecewise_kink(P0, k1, T, k2, tmax, f"{c['fund']}: piecewise force")
        if want_fig
        else None
    )
    return dict(
        title=f"{c['fund']} — piecewise force then solve for $t$",
        context=(
            f"The {c['fund']} fund starts at ${fmt(P0)}$ and grows continuously at force "
            f"${fmt(k1)}$ until $t={T}$, then at force ${fmt(k2)}$. "
            f"A covenant asks when the balance first reaches ${fmt(target)}$."
        ),
        statements=statements,
        answer_key=[A_key, B_key, C_key, D_key, E_key],
        bodies=bodies,
        overview=overview,
        stem_kind="piecewise_rate_solve_t",
        figure=fig,
    )


def build_decay(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(iso="Iodine-131", m0=80.0, half=8.0, t=24, claim=8),
        dict(iso="Sample-A", m0=64.0, half=6.0, t=18, claim=6),
        dict(iso="Sample-B", m0=100.0, half=10.0, t=30, claim=10),
        dict(iso="Sample-C", m0=48.0, half=12.0, t=36, claim=5),
        dict(iso="Sample-D", m0=120.0, half=5.0, t=20, claim=6),
        dict(iso="Sample-E", m0=90.0, half=9.0, t=27, claim=10),
    ]
    c = configs[v % len(configs)]
    m0, half, t = c["m0"], c["half"], c["t"]
    k = ln(2) / half
    n_half = t / half
    remain = m0 * (0.5) ** n_half
    t_to_claim = ln(m0 / c["claim"]) / k
    A = remain < c["claim"] * 1.5  # calibrated per config below
    A = remain < 15
    B = abs(k - ln(2) / half) < 1e-12
    B = True
    C = abs(n_half - 3) < 1e-9
    D = remain > c["claim"]
    E = t_to_claim < t
    overview = (
        f"Half-life $T_{{1/2}}={fmt(half)}$ forces continuous decay constant\n\n"
        f"$$k=\\frac{{\\ln 2}}{{{fmt(half)}}}\\approx{fmt(k,6)}$$\n\n"
        f"and\n\n"
        f"$$m(t)={fmt(m0)}\\,e^{{-kt}}={fmt(m0)}\\left(\\tfrac12\\right)^{{t/{fmt(half)}}}.$$\n\n"
        f"At $t={fmt(t)}$, the sample has lived ${fmt(n_half)}$ half-lives, so "
        f"$m({fmt(t)})={fmt(remain)}$."
    )
    statements = [
        f"After ${fmt(t)}$ hours the remaining mass is strictly less than $15$ grams.",
        f"The continuous decay constant equals $\\ln 2/{fmt(half)}$.",
        f"After ${fmt(t)}$ hours the sample retains exactly one eighth of its initial mass.",
        f"After ${fmt(t)}$ hours more than ${fmt(c['claim'])}$ grams remain.",
        f"The mass falls below ${fmt(c['claim'])}$ grams at some time strictly before $t={fmt(t)}$.",
    ]
    bodies = [
        (
            f"Count half-lives and apply the geometric decay formula.\n\n"
            f"$$\\frac{{{fmt(t)}}}{{{fmt(half)}}}={fmt(n_half)}$$\n\n"
            f"$$m({fmt(t)})={fmt(m0)}\\cdot\\left(\\tfrac12\\right)^{{{fmt(n_half)}}}={fmt(remain)}$$\n\n"
            f"$${fmt(remain)}{' < ' if A else ' \\ge '}15$$"
        ),
        (
            f"By definition of half-life under $m(t)=m_0 e^{{-kt}}$,\n\n"
            f"$$m(T_{{1/2}})=\\tfrac12 m_0\\implies e^{{-k T_{{1/2}}}}=\\tfrac12$$\n\n"
            f"$$k=\\frac{{\\ln 2}}{{T_{{1/2}}}}=\\frac{{\\ln 2}}{{{fmt(half)}}}\\approx{fmt(k,6)}.$$\n\n"
            f"The claim matches that identity."
        ),
        (
            f"One eighth remains after exactly three half-lives. Here\n\n"
            f"$$\\frac{{t}}{{T_{{1/2}}}}={fmt(n_half)}$$\n\n"
            f"and $m_0/8={fmt(m0/8)}$. The actual remainder is ${fmt(remain)}$, "
            f"so the claim is {'correct' if C else 'incorrect'}."
        ),
        (
            f"From the overview, $m({fmt(t)})={fmt(remain)}$. Compare with ${fmt(c['claim'])}$:\n\n"
            f"$${fmt(remain)}{' > ' if D else ' \\le '}{fmt(c['claim'])}$$"
        ),
        (
            f"Solve $m(t)={fmt(c['claim'])}$ under the recovered $k$.\n\n"
            f"$${fmt(m0)}\\,e^{{-kt}}={fmt(c['claim'])}$$\n\n"
            f"$$t=\\frac{{\\ln({fmt(m0)}/{fmt(c['claim'])})}}{{k}}\\approx{fmt(t_to_claim,4)}$$\n\n"
            f"$${fmt(t_to_claim,4)}{' < ' if E else ' \\ge '}{fmt(t)}$$"
        ),
    ]
    fig = exp_decay(m0, k, t, f"{c['iso']}: radioactive decay") if want_fig else None
    return dict(
        title=f"{c['iso']} — half-life decay",
        context=(
            f"A lab sample of mass $m_0={fmt(m0)}$ grams of {c['iso']} decays with "
            f"half-life $T_{{1/2}}={fmt(half)}$ hours under $m(t)=m_0 e^{{-kt}}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="radioactive_decay",
        figure=fig,
    )


def build_compound(v: int, want_fig: bool) -> dict[str, Any]:
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
    ear = (1 + r / n) ** n - 1
    t2 = ln(2) / r
    A = cont > disc
    B = disc > annual
    C = abs(cont - disc) / disc < 0.01
    D = ear > r
    E = t2 < 12
    overview = (
        f"Principal $P={fmt(P)}$ at nominal annual rate $r={fmt(r)}$.\n\n"
        f"$$A_{{\\mathrm{{disc}}}}=P\\left(1+\\frac{{r}}{{n}}\\right)^{{nt}}"
        f"=\\left(1+\\frac{{{fmt(r)}}}{{{fmt(n)}}}\\right)^{{{fmt(n*t)}}}\\cdot{fmt(P)}"
        f"\\approx{fmt(disc,4)}$$\n\n"
        f"$$A_{{\\mathrm{{cont}}}}=Pe^{{rt}}\\approx{fmt(cont,4)}$$\n\n"
        f"EAR under ${fmt(n)}$ compoundings: $\\left(1+r/n\\right)^{{n}}-1\\approx{fmt(ear,6)}$. "
        f"Continuous doubling time $\\ln 2/r\\approx{fmt(t2,4)}$."
    )
    statements = [
        f"After ${fmt(t)}$ years the continuously compounded balance exceeds the balance with "
        f"${fmt(n)}$ compounding periods per year.",
        f"With ${fmt(n)}$ compoundings per year the ${fmt(t)}$-year balance exceeds once-per-year "
        f"compounding at the same nominal rate.",
        f"The absolute gap between continuous and ${fmt(n)}$-per-year balances after ${fmt(t)}$ years "
        f"is less than $1\\%$ of the discrete balance.",
        f"The effective annual rate under ${fmt(n)}$ compoundings per year is strictly larger than "
        f"the nominal rate $r={fmt(r)}$.",
        f"Under continuous compounding at rate $r$, the doubling time is strictly less than $12$ years.",
    ]
    bodies = [
        (
            f"Compare the two recovered terminal balances.\n\n"
            f"$$A_{{\\mathrm{{cont}}}}\\approx{fmt(cont,4)}$$\n\n"
            f"$$A_{{\\mathrm{{disc}}}}\\approx{fmt(disc,4)}$$\n\n"
            f"$${fmt(cont,4)}{' > ' if A else ' \\le '}{fmt(disc,4)}$$"
        ),
        (
            f"Once-per-year compounding yields\n\n"
            f"$$P(1+r)^{{t}}={fmt(P)}(1+{fmt(r)})^{{{fmt(t)}}}\\approx{fmt(annual,4)}$$\n\n"
            f"while ${fmt(n)}$-per-year compounding yields $\\approx{fmt(disc,4)}$.\n\n"
            f"$${fmt(disc,4)}{' > ' if B else ' \\le '}{fmt(annual,4)}$$"
        ),
        (
            f"Relative gap:\n\n"
            f"$$\\frac{{|A_{{\\mathrm{{cont}}}}-A_{{\\mathrm{{disc}}}}|}}{{A_{{\\mathrm{{disc}}}}}}"
            f"\\approx{fmt(abs(cont-disc)/disc,6)}$$\n\n"
            f"Compare with $0.01$:\n\n"
            f"$${fmt(abs(cont-disc)/disc,6)}{' < ' if C else ' \\ge '}0.01$$"
        ),
        (
            f"The EAR identity is\n\n"
            f"$$\\mathrm{{EAR}}=\\left(1+\\frac{{r}}{{n}}\\right)^{{n}}-1\\approx{fmt(ear,6)}.$$\n\n"
            f"For $n>1$ and $r>0$, EAR $>r$. Here $r={fmt(r)}$, so\n\n"
            f"$${fmt(ear,6)}{' > ' if D else ' \\le '}{fmt(r)}$$"
        ),
        (
            f"Continuous doubling solves $e^{{rt}}=2$.\n\n"
            f"$$t=\\frac{{\\ln 2}}{{r}}\\approx{fmt(t2,4)}$$\n\n"
            f"$${fmt(t2,4)}{' < ' if E else ' \\ge '}12$$"
        ),
    ]
    fig = two_models(P, r, 1 + r / n, t, "Continuous vs periodic compounding") if want_fig else None
    return dict(
        title="Compound interest — continuous versus periodic",
        context=(
            f"An account starts with principal ${fmt(P)}$ at nominal annual rate $r={fmt(r)}$. "
            f"Compare continuous compounding with ${fmt(n)}$ compoundings per year over ${fmt(t)}$ years."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="compound_interest",
        figure=fig,
    )


def build_compare_models(v: int, want_fig: bool) -> dict[str, Any]:
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
    t_cont = ln(2) / k
    t_disc = ln(2) / ln(a)
    A = cont > disc
    B = k > ln(a)
    C = abs(cont - disc) / max(cont, disc) < 0.05
    D = t_cont < t_disc
    E = abs(ln(cont / disc) - (k - ln(a)) * t) < 1e-9
    overview = (
        f"Continuous forecast $f(t)={fmt(P)}e^{{{fmt(k)}t}}$ versus discrete "
        f"$g(t)={fmt(P)}({fmt(a)})^{{t}}$. At $t={t}$:\n\n"
        f"$$f({t})\\approx{fmt(cont,4)},\\quad g({t})\\approx{fmt(disc,4)}.$$\n\n"
        f"Equivalent discrete force $\\ln({fmt(a)})\\approx{fmt(ln(a),6)}$. "
        f"Doubling times ${fmt(t_cont,4)}$ (continuous) and ${fmt(t_disc,4)}$ (discrete)."
    )
    statements = [
        f"At $t={t}$ the continuous model exceeds the discrete base-${fmt(a)}$ model.",
        f"The continuous force ${fmt(k)}$ exceeds $\\ln({fmt(a)})$.",
        f"At $t={t}$ the two models differ by less than $5\\%$ relative to the larger value.",
        f"The continuous model doubles strictly sooner than the discrete model.",
        f"$\\ln(f({t})/g({t}))$ equals $({fmt(k)}-\\ln({fmt(a)}))\\cdot{t}$.",
    ]
    bodies = [
        (
            f"Read the two terminal levels from the overview (or the figure).\n\n"
            f"$$f({t})\\approx{fmt(cont,4)}$$\n\n"
            f"$$g({t})\\approx{fmt(disc,4)}$$\n\n"
            f"$${fmt(cont,4)}{' > ' if A else ' \\le '}{fmt(disc,4)}$$"
        ),
        (
            f"Compute the discrete force and compare with $k$.\n\n"
            f"$$\\ln({fmt(a)})\\approx{fmt(ln(a),6)}$$\n\n"
            f"$${fmt(k)}{' > ' if B else ' \\le '}{fmt(ln(a),6)}$$"
        ),
        (
            f"Relative gap against the larger level:\n\n"
            f"$$\\frac{{|f-g|}}{{\\max(f,g)}}\\approx{fmt(abs(cont-disc)/max(cont,disc),6)}$$\n\n"
            f"$${fmt(abs(cont-disc)/max(cont,disc),6)}{' < ' if C else ' \\ge '}0.05$$"
        ),
        (
            f"$$t_{{\\mathrm{{cont}}}}=\\frac{{\\ln 2}}{{{fmt(k)}}}\\approx{fmt(t_cont,4)}$$\n\n"
            f"$$t_{{\\mathrm{{disc}}}}=\\frac{{\\ln 2}}{{\\ln({fmt(a)})}}\\approx{fmt(t_disc,4)}$$\n\n"
            f"$${fmt(t_cont,4)}{' < ' if D else ' \\ge '}{fmt(t_disc,4)}$$"
        ),
        (
            f"Algebraically,\n\n"
            f"$$\\ln\\frac{{Pe^{{kt}}}}{{P a^{{t}}}}=(k-\\ln a)t$$\n\n"
            f"$$=({fmt(k)}-{fmt(ln(a),6)})\\cdot{t}\\approx{fmt((k-ln(a))*t,6)}.$$\n\n"
            f"Direct evaluation of $\\ln(f/g)$ recovers the same number, so the identity holds."
        ),
    ]
    fig = two_models(P, k, a, t, "Two competing growth models") if want_fig else None
    return dict(
        title="Competing continuous and discrete forecasts",
        context=(
            f"Two forecasts start at ${fmt(P)}$: continuous $f(t)={fmt(P)}\\,e^{{{fmt(k)}t}}$ "
            f"and discrete $g(t)={fmt(P)}\\,({fmt(a)})^{{t}}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="compare_growth_models",
        figure=fig,
    )


def build_cooling(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(T0=90, Ta=20, k=0.05, t=30, claim=40),
        dict(T0=85, Ta=25, k=0.04, t=40, claim=45),
        dict(T0=95, Ta=15, k=0.06, t=25, claim=35),
        dict(T0=80, Ta=20, k=0.03, t=50, claim=42),
        dict(T0=100, Ta=20, k=0.07, t=20, claim=50),
        dict(T0=75, Ta=15, k=0.045, t=35, claim=30),
    ]
    c = configs[v % len(configs)]
    T0, Ta, k, t = c["T0"], c["Ta"], c["k"], c["t"]
    Tt = Ta + (T0 - Ta) * math.exp(-k * t)
    t_to = -ln((c["claim"] - Ta) / (T0 - Ta)) / k
    A = Tt < c["claim"]
    B = Tt > Ta
    C = False  # claim: temperature approaches T0
    D = t_to < t
    E = abs((Tt - Ta) - (T0 - Ta) * math.exp(-k * t)) < 1e-9
    overview = (
        f"Newton cooling: $T(t)=T_a+(T_0-T_a)e^{{-kt}}$ with "
        f"$T_0={fmt(T0)}$, $T_a={fmt(Ta)}$, $k={fmt(k)}$.\n\n"
        f"$$T({t})={fmt(Ta)}+({fmt(T0)}-{fmt(Ta)})e^{{-{fmt(k)}\\cdot{t}}}\\approx{fmt(Tt,4)}.$$\n\n"
        f"Time to reach ${fmt(c['claim'])}$ solves "
        f"$t=-\\ln\\frac{{{fmt(c['claim'])}-T_a}}{{T_0-T_a}}/k\\approx{fmt(t_to,4)}$."
    )
    statements = [
        f"At $t={t}$ the temperature is strictly below ${fmt(c['claim'])}$.",
        f"At $t={t}$ the temperature remains strictly above ambient $T_a={fmt(Ta)}$.",
        f"As $t\\to\\infty$ the model temperature approaches the initial temperature $T_0$.",
        f"The temperature reaches ${fmt(c['claim'])}$ at some time strictly before $t={t}$.",
        f"The deviation from ambient at $t={t}$ equals $(T_0-T_a)e^{{-{fmt(k)}\\cdot{t}}}$.",
    ]
    bodies = [
        (
            f"Substitute into Newton's law.\n\n"
            f"$$T({t})={fmt(Ta)}+({fmt(T0-Ta)})e^{{-{fmt(k*t,4)}}}$$\n\n"
            f"$$\\approx{fmt(Tt,4)}$$\n\n"
            f"$${fmt(Tt,4)}{' < ' if A else ' \\ge '}{fmt(c['claim'])}$$"
        ),
        (
            f"Because $e^{{-kt}}\\in(0,1)$ for finite $t>0$ and $T_0>T_a$,\n\n"
            f"$$T(t)-T_a=(T_0-T_a)e^{{-kt}}>0.$$\n\n"
            f"Numerically $T({t})\\approx{fmt(Tt,4)}>{fmt(Ta)}$."
        ),
        (
            f"The long-run limit of Newton's law is the ambient temperature, not $T_0$:\n\n"
            f"$$\\lim_{{t\\to\\infty}}T(t)=T_a={fmt(Ta)}.$$\n\n"
            f"The claim that the limit equals $T_0={fmt(T0)}$ is false."
        ),
        (
            f"Solve $T(t)={fmt(c['claim'])}$:\n\n"
            f"$$t=-\\frac{{1}}{{k}}\\ln\\frac{{{fmt(c['claim'])}-{fmt(Ta)}}}{{{fmt(T0)}-{fmt(Ta)}}}"
            f"\\approx{fmt(t_to,4)}$$\n\n"
            f"$${fmt(t_to,4)}{' < ' if D else ' \\ge '}{fmt(t)}$$"
        ),
        (
            f"Rearrange the model:\n\n"
            f"$$T(t)-T_a=(T_0-T_a)e^{{-kt}}.$$\n\n"
            f"At $t={t}$ the right-hand side equals "
            f"${fmt((T0-Ta)*math.exp(-k*t),4)}$, matching $T({t})-T_a$."
        ),
    ]
    fig = (
        exp_growth(T0 - Ta, -k, t, "Newton cooling deviation")  # wrong sign visually
        if False
        else None
    )
    if want_fig:
        # plot temperature path
        from ch10_svg import svg_curves

        fig = svg_curves(
            [
                (
                    lambda tt, Ta=Ta, T0=T0, k=k: Ta + (T0 - Ta) * math.exp(-k * tt),
                    "#8B5A2B",
                    "T(t)",
                )
            ],
            xmin=0,
            xmax=t,
            title="Newton cooling",
            ylabel="temperature",
            hlines=[Ta, c["claim"]],
            marks=[(t, Tt, "")],
        )
    return dict(
        title="Newton cooling — ambient trap",
        context=(
            f"A cup cools under Newton's law $T(t)=T_a+(T_0-T_a)e^{{-kt}}$ with "
            f"$T_0={fmt(T0)}$, ambient $T_a={fmt(Ta)}$, and $k={fmt(k)}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="newton_cooling",
        figure=fig,
    )


def build_bacteria(v: int, want_fig: bool) -> dict[str, Any]:
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
    t_claim = ln(claim / N0) / k
    A = Nt > claim
    B = True
    C = nper > 3
    D = fac == 2
    E = t_claim < t
    overview = (
        f"$N(t)={fmt(N0)}\\cdot({fmt(fac)})^{{t/{fmt(per)}}}$. "
        f"Equivalent continuous force $k=\\ln({fmt(fac)})/{fmt(per)}\\approx{fmt(k,6)}$. "
        f"At $t={t}$, after ${fmt(nper)}$ growth periods, $N\\approx{fmt(Nt,4)}$. "
        f"Time to reach ${fmt(claim)}$ is $t=\\ln({fmt(claim)}/{fmt(N0)})/k\\approx{fmt(t_claim,4)}$."
    )
    statements = [
        f"At $t={t}$ the culture exceeds ${fmt(claim)}$ individuals.",
        f"The continuous force $k=\\ln({fmt(fac)})/{fmt(per)}$ reproduces $N(t)$ for all $t$.",
        f"The elapsed time $t={t}$ covers strictly more than three full growth periods of length ${fmt(per)}$.",
        f"The culture doubles in every single growth period of length ${fmt(per)}$.",
        f"The culture reaches ${fmt(claim)}$ individuals at some time strictly before $t={t}$.",
    ]
    bodies = [
        (
            f"$$N({t})={fmt(N0)}\\cdot({fmt(fac)})^{{{fmt(nper)}}}={fmt(Nt)}$$\n\n"
            f"$${fmt(Nt)}{' > ' if A else ' \\le '}{fmt(claim)}$$"
        ),
        (
            f"Rewrite the period model as an exponential:\n\n"
            f"$$({fmt(fac)})^{{t/{fmt(per)}}}=e^{{(t/{fmt(per)})\\ln({fmt(fac)})}}=e^{{kt}}$$\n\n"
            f"with $k=\\ln({fmt(fac)})/{fmt(per)}\\approx{fmt(k,6)}$. "
            f"Thus the continuous force reproduces $N(t)$ identically."
        ),
        (
            f"$$\\frac{{t}}{{\\text{{period}}}}=\\frac{{{t}}}{{{fmt(per)}}}={fmt(nper)}$$\n\n"
            f"$${fmt(nper)}{' > ' if C else ' \\le '}3$$"
        ),
        (
            f"Each period multiplies by ${fmt(fac)}$, not necessarily by $2$. "
            f"Doubling every period would require factor $2$. "
            f"Here the factor is ${fmt(fac)}$, so the claim is {'true' if D else 'false'}."
        ),
        (
            f"Solve $N(t)={fmt(claim)}$:\n\n"
            f"$$t=\\frac{{\\ln({fmt(claim)}/{fmt(N0)})}}{{k}}\\approx{fmt(t_claim,4)}$$\n\n"
            f"$${fmt(t_claim,4)}{' < ' if E else ' \\ge '}{fmt(t)}$$"
        ),
    ]
    fig = exp_growth(N0, k, t, "Bacterial growth") if want_fig else None
    return dict(
        title="Bacterial culture — period growth",
        context=(
            f"A culture starts at $N_0={fmt(N0)}$ and multiplies by ${fmt(fac)}$ every "
            f"${fmt(per)}$ hours: $N(t)={fmt(N0)}({fmt(fac)})^{{t/{fmt(per)}}}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="bacteria_period_growth",
        figure=fig,
    )


def build_investment_solve_t(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(P=5000, r=0.045, goal=8000),
        dict(P=10000, r=0.06, goal=20000),
        dict(P=7500, r=0.035, goal=12000),
        dict(P=4000, r=0.05, goal=9000),
        dict(P=12000, r=0.04, goal=18000),
        dict(P=6000, r=0.055, goal=10000),
    ]
    c = configs[v % len(configs)]
    P, r, goal = c["P"], c["r"], c["goal"]
    t_cont = ln(goal / P) / r
    t_disc = ln(goal / P) / ln(1 + r)
    A = t_cont < t_disc
    B = t_cont < 15
    C = False  # claim: t = (goal/P - 1)/r linear
    t_lin = (goal / P - 1) / r
    D = t_lin > t_cont
    E = abs(P * math.exp(r * t_cont) - goal) < 1e-6
    overview = (
        f"Continuous compounding $A(t)=Pe^{{rt}}$ with $P={fmt(P)}$, $r={fmt(r)}$. "
        f"Hitting ${fmt(goal)}$ solves\n\n"
        f"$$t=\\frac{{\\ln({fmt(goal)}/{fmt(P)})}}{{{fmt(r)}}}\\approx{fmt(t_cont,4)}.$$\n\n"
        f"Annual discrete compounding at the same nominal rate needs "
        f"$t=\\ln({fmt(goal)}/{fmt(P)})/\\ln(1+{fmt(r)})\\approx{fmt(t_disc,4)}$. "
        f"A linearised estimate $(A/P-1)/r\\approx{fmt(t_lin,4)}$ overstates the continuous time."
    )
    statements = [
        f"Under continuous compounding the goal is reached strictly sooner than under annual discrete compounding at rate ${fmt(r)}$.",
        f"Under continuous compounding the goal is reached in strictly less than $15$ years.",
        f"The continuous hitting time equals the linearised estimate $({fmt(goal)}/{fmt(P)}-1)/{fmt(r)}$.",
        f"The linearised estimate exceeds the true continuous hitting time.",
        f"Substituting the continuous hitting time back into $Pe^{{rt}}$ recovers the goal ${fmt(goal)}$.",
    ]
    bodies = [
        (
            f"$$t_{{\\mathrm{{cont}}}}\\approx{fmt(t_cont,4)}$$\n\n"
            f"$$t_{{\\mathrm{{disc}}}}\\approx{fmt(t_disc,4)}$$\n\n"
            f"$${fmt(t_cont,4)}{' < ' if A else ' \\ge '}{fmt(t_disc,4)}$$"
        ),
        (
            f"From the overview, $t_{{\\mathrm{{cont}}}}\\approx{fmt(t_cont,4)}$.\n\n"
            f"$${fmt(t_cont,4)}{' < ' if B else ' \\ge '}15$$"
        ),
        (
            f"The linearised estimate is\n\n"
            f"$$t_{{\\mathrm{{lin}}}}=\\frac{{{fmt(goal)}/{fmt(P)}-1}}{{{fmt(r)}}}\\approx{fmt(t_lin,4)}$$\n\n"
            f"while the exact continuous time is ${fmt(t_cont,4)}$. They are not equal."
        ),
        (
            f"$${fmt(t_lin,4)}{' > ' if D else ' \\le '}{fmt(t_cont,4)}$$"
        ),
        (
            f"$$P e^{{r t_{{\\mathrm{{cont}}}}}}={fmt(P)}\\,e^{{{fmt(r)}\\cdot{fmt(t_cont,4)}}}"
            f"\\approx{fmt(P*math.exp(r*t_cont),4)}$$\n\n"
            f"which matches the goal ${fmt(goal)}$ by construction of $t_{{\\mathrm{{cont}}}}$."
        ),
    ]
    fig = (
        two_models(P, r, 1 + r, max(t_disc, t_cont) + 1, "Investment: cont vs annual")
        if want_fig
        else None
    )
    return dict(
        title="Investment — solve for hitting time",
        context=(
            f"An investment of ${fmt(P)}$ compounds continuously at force $r={fmt(r)}$. "
            f"The investor wants to know when the balance first reaches ${fmt(goal)}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="investment_solve_t",
        figure=fig,
    )


def build_unit_trap(v: int, want_fig: bool) -> dict[str, Any]:
    """Population in millions; claims that confuse millions with raw counts."""
    configs = [
        dict(city="Harbor", P0=2.5, k=0.02, t=10),
        dict(city="Inlet", P0=3.0, k=0.025, t=8),
        dict(city="Jetty", P0=1.8, k=0.03, t=12),
        dict(city="Lagoon", P0=4.0, k=0.015, t=15),
        dict(city="Marina", P0=2.2, k=0.028, t=9),
        dict(city="Narrows", P0=5.0, k=0.012, t=20),
    ]
    c = configs[v % len(configs)]
    P0, k, t = c["P0"], c["k"], c["t"]
    ft = P0 * math.exp(k * t)
    # trap: claim "exceeds 10" meaning 10 people vs 10 million
    A = ft > 10  # in millions — usually false for these P0
    B = ft > 3
    C = False  # claim: f(t) counted in people equals P0*e^{kt} with P0=2.5 people
    D = ft * 1_000_000 > 10  # true if reading units correctly for "10 people" nonsense
    # Better claims:
    # A: exceeds 10 million (compare ft>10)
    # C: the model value at t is less than 10 people (absurd unit misread) → False because ft is millions
    A = ft > 10
    C = False  # "f(t) < 10 people" — misreading units; actual is millions so claim false if interpreted as model output <10 in model units? 
    # Clearer:
    statements_A = ft > 10
    # claim B: population exceeds 3 million
    statements_B = ft > 3
    # claim C: because P0=2.5, after growth the count of people is under 10 (treating millions as people)
    statements_C = False
    # claim D: in people, population exceeds 2.5e6 * e^{kt}
    statements_D = True  # identity
    # claim E: continuous annual percent is exactly 100k%
    statements_E = True
    overview = (
        f"{c['city']} is modelled by $f(t)={fmt(P0)}\\,e^{{{fmt(k)}t}}$ where $f$ is in "
        f"**millions** of residents.\n\n"
        f"$$f({t})={fmt(P0)}\\,e^{{{fmt(k)}\\cdot{t}}}\\approx{fmt(ft,4)}\\text{{ million}}.$$\n\n"
        f"In people that is about ${fmt(ft*1e6,1)}$. The continuous force $k={fmt(k)}$ "
        f"is a $100k={fmt(100*k)}\\%$ continuous annual rate, not a headcount."
    )
    statements = [
        f"At $t={t}$ the model exceeds $10$ million residents.",
        f"At $t={t}$ the model exceeds $3$ million residents.",
        f"Reading $f({t})$ as a count of individual people (not millions) shows fewer than $10$ people.",
        f"Converting $f({t})$ from millions to people multiplies the model output by $10^{{6}}$.",
        f"The continuous annual growth rate encoded by the force is exactly ${fmt(100*k)}\\%$.",
    ]
    bodies = [
        (
            f"$$f({t})\\approx{fmt(ft,4)}$$ million.\n\n"
            f"$${fmt(ft,4)}{' > ' if statements_A else ' \\le '}10$$"
        ),
        (
            f"$$f({t})\\approx{fmt(ft,4)}$$ million.\n\n"
            f"$${fmt(ft,4)}{' > ' if statements_B else ' \\le '}3$$"
        ),
        (
            f"The stem measures $f$ in millions. At $t={t}$, $f({t})\\approx{fmt(ft,4)}$ million, "
            f"i.e. about ${fmt(ft*1e6,1)}$ people. The claim that the reading is fewer than "
            f"$10$ people confuses the unit. In model units the output is ${fmt(ft,4)}$, "
            f"not a headcount under $10$."
        ),
        (
            f"One million residents is $10^{{6}}$ people, so\n\n"
            f"$$f_{{\\mathrm{{people}}}}=f_{{\\mathrm{{million}}}}\\cdot 10^{{6}}.$$\n\n"
            f"At $t={t}$ that conversion yields about ${fmt(ft*1e6,1)}$ people."
        ),
        (
            f"In $f(t)=P_0 e^{{kt}}$ the continuous annual force is $k$.\n\n"
            f"$$100k={fmt(100*k)}.$$\n\n"
            f"The claim asserts exactly ${fmt(100*k)}\\%$, which matches."
        ),
    ]
    fig = exp_growth(P0, k, t, f"{c['city']} population (millions)") if want_fig else None
    return dict(
        title=f"{c['city']} — millions versus headcount trap",
        context=(
            f"The population of {c['city']} follows $f(t)={fmt(P0)}\\,e^{{{fmt(k)}t}}$, "
            f"where $f(t)$ is measured in millions of residents."
        ),
        statements=statements,
        answer_key=[statements_A, statements_B, statements_C, statements_D, statements_E],
        bodies=bodies,
        overview=overview,
        stem_kind="unit_trap_millions",
        figure=fig,
    )


def build_doubling(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(base=1.05, claim_t=15),
        dict(base=1.07, claim_t=12),
        dict(base=1.04, claim_t=20),
        dict(base=1.08, claim_t=10),
        dict(base=1.06, claim_t=14),
        dict(base=1.03, claim_t=25),
    ]
    c = configs[v % len(configs)]
    a = c["base"]
    r = a - 1
    t_double = ln(2) / ln(a)
    rule72 = 0.72 / r
    A = t_double < c["claim_t"]
    B = abs(rule72 - t_double) < 0.5
    C = (a ** 10) > 1.5
    D = False  # claim t = 1/r
    E = t_double > rule72 - 1  # usually true; use: exact > 0.72/r - 0.5 already in B
    E = t_double > 8
    overview = (
        f"Discrete annual growth $f(t)=f_0\\cdot({fmt(a)})^{{t}}$. Exact doubling:\n\n"
        f"$$t=\\frac{{\\ln 2}}{{\\ln({fmt(a)})}}\\approx{fmt(t_double,4)}.$$\n\n"
        f"Rule-of-$72$ estimate $0.72/r$ with $r={fmt(r)}$ gives $\\approx{fmt(rule72,4)}$. "
        f"Ten-year factor $({fmt(a)})^{{10}}\\approx{fmt(a**10,6)}$."
    )
    statements = [
        f"The exact doubling time is strictly less than ${fmt(c['claim_t'])}$ years.",
        f"The rule-of-$72$ estimate $0.72/r$ lies within $0.5$ years of the exact doubling time.",
        f"Over a $10$-year window the accumulation factor exceeds $1.5$.",
        f"The doubling time equals $1/r$ with $r={fmt(r)}$.",
        f"The exact doubling time exceeds $8$ years.",
    ]
    bodies = [
        (
            f"$$t=\\frac{{\\ln 2}}{{\\ln({fmt(a)})}}\\approx{fmt(t_double,4)}$$\n\n"
            f"$${fmt(t_double,4)}{' < ' if A else ' \\ge '}{fmt(c['claim_t'])}$$"
        ),
        (
            f"$$\\left|\\frac{{0.72}}{{r}}-t\\right|=\\left|{fmt(rule72,4)}-{fmt(t_double,4)}\\right|"
            f"\\approx{fmt(abs(rule72-t_double),4)}$$\n\n"
            f"$${fmt(abs(rule72-t_double),4)}{' < ' if B else ' \\ge '}0.5$$"
        ),
        (
            f"$$({fmt(a)})^{{10}}\\approx{fmt(a**10,6)}$$\n\n"
            f"$${fmt(a**10,6)}{' > ' if C else ' \\le '}1.5$$"
        ),
        (
            f"The linearised $1/r={fmt(1/r,4)}$ is not the exact doubling time "
            f"${fmt(t_double,4)}$. Exact doubling uses $\\ln 2/\\ln(1+r)$."
        ),
        (
            f"$${fmt(t_double,4)}{' > ' if E else ' \\le '}8$$"
        ),
    ]
    k = ln(a)
    fig = exp_growth(1.0, k, t_double + 2, "Doubling under discrete annual growth") if want_fig else None
    return dict(
        title="Doubling time — exact versus rule of 72",
        context=(
            f"A balance grows by the discrete annual factor ${fmt(a)}$ each year: "
            f"$f(t)=f_0\\cdot({fmt(a)})^{{t}}$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="doubling_half_life",
        figure=fig,
    )


def build_semi_log(v: int, want_fig: bool) -> dict[str, Any]:
    configs = [
        dict(P0=100, k=0.04, t1=5, t2=10),
        dict(P0=50, k=0.05, t1=4, t2=8),
        dict(P0=200, k=0.03, t1=6, t2=12),
        dict(P0=80, k=0.06, t1=3, t2=9),
        dict(P0=150, k=0.025, t1=8, t2=16),
        dict(P0=120, k=0.035, t1=5, t2=15),
    ]
    c = configs[v % len(configs)]
    P0, k, t1, t2 = c["P0"], c["k"], c["t1"], c["t2"]
    slope = k  # d/dt ln f = k
    # chord slope on semi-log between t1 and t2
    y1, y2 = P0 * math.exp(k * t1), P0 * math.exp(k * t2)
    chord = (ln(y2) - ln(y1)) / (t2 - t1)
    A = abs(chord - k) < 1e-9
    B = ln(y2) > ln(y1)
    C = False  # claim: semi-log plot is curved (it's straight)
    D = y2 / y1 == math.exp(k * (t2 - t1)) or abs(y2 / y1 - math.exp(k * (t2 - t1))) < 1e-9
    E = chord > 0.02
    overview = (
        f"For $f(t)={fmt(P0)}e^{{{fmt(k)}t}}$, the semi-log path $t\\mapsto\\ln f(t)$ is linear "
        f"with slope $k={fmt(k)}$. Between $t={t1}$ and $t={t2}$,\n\n"
        f"$$\\frac{{\\ln f({t2})-\\ln f({t1})}}{{{t2}-{t1}}}={fmt(chord,6)}.$$\n\n"
        f"Levels: $f({t1})\\approx{fmt(y1,4)}$, $f({t2})\\approx{fmt(y2,4)}$."
    )
    statements = [
        f"The chord slope of $\\ln f$ between $t={t1}$ and $t={t2}$ equals the continuous force ${fmt(k)}$.",
        f"$\\ln f({t2})$ is strictly larger than $\\ln f({t1})$.",
        f"On a semi-log plot the graph of $f$ is visibly curved over $[{t1},{t2}]$.",
        f"The growth factor $f({t2})/f({t1})$ equals $e^{{{fmt(k)}\\cdot({t2}-{t1})}}$.",
        f"The semi-log chord slope exceeds $0.02$.",
    ]
    bodies = [
        (
            f"Because $\\ln f(t)=\\ln P_0+kt$ is exactly linear,\n\n"
            f"$$\\frac{{\\ln f({t2})-\\ln f({t1})}}{{{t2}-{t1}}}=k={fmt(k)}.$$\n\n"
            f"Numerically the chord is ${fmt(chord,6)}$."
        ),
        (
            f"$$\\ln f({t2})\\approx{fmt(ln(y2),4)},\\quad \\ln f({t1})\\approx{fmt(ln(y1),4)}$$\n\n"
            f"Since $k>0$ and $t2>t1$, the log-level rises."
        ),
        (
            f"A semi-log plot of pure exponential growth is a straight line with slope $k$. "
            f"The claim that the graph is curved contradicts $\\ln f(t)=\\ln P_0+kt$."
        ),
        (
            f"$$\\frac{{f({t2})}}{{f({t1})}}=e^{{k({t2}-{t1})}}=e^{{{fmt(k*(t2-t1),4)}}}"
            f"\\approx{fmt(y2/y1,6)}.$$\n\n"
            f"Direct division of the recovered levels matches."
        ),
        (
            f"$${fmt(chord,6)}{' > ' if E else ' \\le '}0.02$$"
        ),
    ]
    fig = semi_log_exp(P0, k, t2, "Semi-log: straight growth") if want_fig else None
    return dict(
        title="Semi-log straight line — read the force",
        context=(
            f"A quantity follows $f(t)={fmt(P0)}e^{{{fmt(k)}t}}$. "
            f"The figure (when present) shows $\\ln f$ against $t$."
        ),
        statements=statements,
        answer_key=[A, B, C, D, E],
        bodies=bodies,
        overview=overview,
        stem_kind="semi_log_straight",
        figure=fig,
    )


EXP_BUILDERS = [
    build_cont_vs_disc,
    build_gdp,
    build_piecewise,
    build_decay,
    build_compound,
    build_compare_models,
    build_cooling,
    build_bacteria,
    build_investment_solve_t,
    build_unit_trap,
    build_doubling,
    build_semi_log,
]
