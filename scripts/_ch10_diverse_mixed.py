#!/usr/bin/env python3
"""Diverse hard mixed-exam builders for Chapter 10.3 (exponential + logarithmic).

Exports:
  MIXED_COUNT = 30
  build_mixed_tasks() -> list[dict]   # exactly 30 hard 5/5 mashups

Each task packs title, context, statements[5], answer_key[5],
tactical_explanations[5], solution_overview, stem_kind, and optional
figure / tables_markdown. Letters are self-contained tutoring write-ups;
solution_overview holds shared recovered quantities once for reuse.
"""
from __future__ import annotations

import math
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import (  # noqa: E402
    competing_populations,
    gdp_per_capita,
    piecewise_kink,
    semi_log_exp,
    svg_curves,
    svg_exp,
    svg_log,
    two_models,
)

MIXED_COUNT = 30
LETTERS = "ABCDE"
TAIL = "Evaluate each statement. Mark it TRUE or FALSE."

STEMS = [
    "hybrid",
    "graph",
    "table",
    "symbolic",
    "parametric",
    "piecewise",
    "nested",
    "text_dense",
    "rebuild",
    "applied_letter",
]

# Six tasks at each truth-count 1..5 (same balance as Ch7/Ch9 mixed exams).
PLANNED_TRUTHS = [
    2, 3, 4, 5, 1, 3, 2, 4, 5, 1,
    3, 4, 1, 2, 5, 4, 3, 1, 2, 5,
    4, 1, 5, 3, 2, 1, 5, 2, 3, 4,
]


def ln(x: float) -> float:
    return math.log(x)


def fmt(x: float, digs: int = 4) -> str:
    if not math.isfinite(x):
        return "\\infty"
    if abs(x - round(x)) < 1e-9 and abs(x) < 1e9:
        return str(int(round(x)))
    s = f"{x:.{digs}f}".rstrip("0").rstrip(".")
    return s


def D(inner: str) -> str:
    return f"$${re.sub(r'\\s+', ' ', inner.strip())}$$"


def close(truth: bool, clause: str) -> str:
    clause = clause.strip().rstrip(".,;")
    verd = "True" if truth else "False"
    return f"{clause}.\n\nSo the statement is {verd}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    chunks: list[str] = []
    for p in parts:
        p = str(p).strip()
        if not p:
            continue
        chunks.append(p)
    body = "\n\n".join(chunks)
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + ".\n\nSo the statement is " + ("True" if truth else "False") + "."
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def ensure_tail(context: str) -> str:
    ctx = context.strip()
    if TAIL not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + TAIL
    return ctx


def md_table(headers: list[str], rows: list[list[str]]) -> str:
    head = "| " + " | ".join(headers) + " |"
    sep = "| " + " | ".join("---" for _ in headers) + " |"
    body = "\n".join("| " + " | ".join(r) + " |" for r in rows)
    return "\n".join([head, sep, body])


def make_task(
    *,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    bodies: list[list[str]],
    overview: str,
    stem_kind: str,
    figure: str | None = None,
    tables_markdown: str | None = None,
) -> dict[str, Any]:
    assert stem_kind in STEMS, stem_kind
    assert len(statements) == 5 == len(answer_key) == len(bodies)
    teas = [pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    out: dict[str, Any] = {
        "title": title,
        "context": ensure_tail(context),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": overview.strip(),
        "stem_kind": stem_kind,
    }
    if figure:
        out["figure"] = figure
    if tables_markdown:
        out["tables_markdown"] = tables_markdown
    return out


# =============================================================================
# Task builders — each hard mashup recovers shared quantities in the overview;
# letter explanations reuse those values and finish the local comparison.
# =============================================================================


def t01_hybrid_piecewise_hit() -> dict:
    """Piecewise growth + log hitting time + domain side-condition. 2 true."""
    A, alpha, beta = 1000.0, 0.05, 0.025
    tau = ln(2) / alpha  # ατ = ln 2 ⇒ f(τ)=2A
    M = 4.0 * A
    f_tau = A * math.exp(alpha * tau)
    t_hit = tau + ln(M / f_tau) / beta
    t_wrong = ln(M / A) / alpha
    avg = (alpha * tau + beta * (t_hit - tau)) / t_hit
    # Claims: A t_hit>τ True; B avg reproduces M True; C t=ln(M/A)/α False;
    # D β>α False; E f(τ)≥M False
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(f_tau - 2 * A) < 1e-9
    assert abs(A * math.exp(avg * t_hit) - M) < 1e-6
    assert t_hit > tau and t_wrong != t_hit and beta < alpha and f_tau < M

    fig = piecewise_kink(A, alpha, tau, beta, t_hit + 2, "Piecewise fund vs target")
    overview = (
        f"With $\\alpha\\tau=\\ln 2$, $f(\\tau)=2A$. Target $M=4A$ forces "
        f"$t_{{\\mathrm{{hit}}}}=\\tau+\\ln 2/\\beta\\approx{fmt(t_hit)}$, "
        f"path-average $\\bar k\\approx{fmt(avg,6)}$. Constant-$\\alpha$ "
        f"mis-hit $t_{{\\alpha}}=\\ln 4/\\alpha\\approx{fmt(t_wrong)}$."
    )
    return make_task(
        title="Hybrid — piecewise force, log hit, and a false constant-rate shortcut",
        context=(
            f"A fund starts at $A={fmt(A)}$, grows at continuous force $\\alpha={fmt(alpha)}$ "
            f"until $t=\\tau$ with $\\alpha\\tau=\\ln 2$, then at force $\\beta={fmt(beta)}$. "
            f"The target level is $M=4A$. The figure shows the piecewise path."
        ),
        statements=[
            r"The target is reached strictly after the rate switch.",
            r"The path-average force $\bar k=\ln(M/A)/t_{\mathrm{hit}}$ reproduces $f(t_{\mathrm{hit}})=M$.",
            r"The hitting time equals $\ln(M/A)/\alpha$ (ignoring the switch).",
            r"The late force $\beta$ is strictly larger than the early force $\alpha$.",
            r"At the switch the fund already meets or exceeds the target $M$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Chain the segments and solve $f(t)=M$ in the late regime.",
                D(r"f(\tau)=A e^{\alpha\tau}=2A"),
                D(rf"t_{{\mathrm{{hit}}}}=\tau+\frac{{\ln(M/f(\tau))}}{{\beta}}=\tau+\frac{{\ln 2}}{{\beta}}\approx{fmt(t_hit)}"),
                D(rf"{fmt(t_hit)}>\tau\approx{fmt(tau)}"),
                close(True, "The hit is strictly after the switch"),
            ],
            [
                "Average force is the total log-increment per unit time.",
                D(rf"\bar k=\frac{{\alpha\tau+\beta(t_{{\mathrm{{hit}}}}-\tau)}}{{t_{{\mathrm{{hit}}}}}}\approx{fmt(avg,6)}"),
                D(rf"A e^{{\bar k\,t_{{\mathrm{{hit}}}}}}\approx{fmt(A*math.exp(avg*t_hit))}"),
                close(True, "The average force recovers the target exactly"),
            ],
            [
                "A constant-$\\alpha$ formula pretends the switch never happened.",
                D(rf"t_{{\alpha}}=\frac{{\ln(M/A)}}{{\alpha}}=\frac{{\ln 4}}{{\alpha}}\approx{fmt(t_wrong)}"),
                D(rf"t_{{\mathrm{{hit}}}}\approx{fmt(t_hit)}\neq{fmt(t_wrong)}"),
                close(False, "The no-switch formula is not the piecewise hitting time"),
            ],
            [
                "Compare the two force parameters directly.",
                D(rf"\beta={fmt(beta)},\qquad \alpha={fmt(alpha)}"),
                D(rf"{fmt(beta)}<{fmt(alpha)}"),
                close(False, "The late force is smaller, not larger"),
            ],
            [
                "Evaluate the level at the kink.",
                D(rf"f(\tau)=2A={fmt(2*A)},\qquad M=4A={fmt(M)}"),
                D(rf"2A<4A"),
                close(False, "At the switch the fund is still strictly below the target"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t02_graph_two_populations() -> dict:
    """Two populations cross; log meeting time; force comparison. 3 true."""
    A0, kA, B0, kB = 1000.0, 0.03, 1500.0, 0.01
    t_meet = ln(B0 / A0) / (kA - kB)
    tmax = 40.0
    At = A0 * math.exp(kA * tmax)
    Bt = B0 * math.exp(kB * tmax)
    # A: meet in (0,tmax) True; B: A(tmax)>B(tmax) True; C: kA>kB True;
    # D: meet at ln(A0/B0)/(kA-kB) False (sign); E: ln(A/A0)=ln(B/B0) at tmax False
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert 0 < t_meet < tmax and At > Bt and kA > kB
    fig = competing_populations(A0, kA, B0, kB, tmax, "Competing populations A and B")
    overview = (
        f"$A(t)={fmt(A0)}e^{{{fmt(kA)}t}}$, $B(t)={fmt(B0)}e^{{{fmt(kB)}t}}$. "
        f"Meeting $t^*=\\ln(B_0/A_0)/(k_A-k_B)\\approx{fmt(t_meet)}$. "
        f"At $t={fmt(tmax)}$: $A\\approx{fmt(At)}$, $B\\approx{fmt(Bt)}$."
    )
    return make_task(
        title="Graph — crossing populations and the log meeting clock",
        context=(
            f"Two populations follow $A(t)=A_0 e^{{k_A t}}$ and $B(t)=B_0 e^{{k_B t}}$ with "
            f"$A_0={fmt(A0)}$, $k_A={fmt(kA)}$, $B_0={fmt(B0)}$, $k_B={fmt(kB)}$. "
            f"The figure shows both paths on $[0,{fmt(tmax)}]$."
        ),
        statements=[
            rf"The populations meet at some strictly positive time before $t={fmt(tmax)}$.",
            rf"At $t={fmt(tmax)}$, population $A$ exceeds population $B$.",
            r"The continuous force of $A$ exceeds that of $B$.",
            r"The meeting time equals $\ln(A_0/B_0)/(k_A-k_B)$.",
            rf"Over $[0,{fmt(tmax)}]$, $\ln(A/A_0)$ equals $\ln(B/B_0)$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Set $A_0 e^{k_A t}=B_0 e^{k_B t}$ and take logs.",
                D(rf"t^*=\frac{{\ln(B_0/A_0)}}{{k_A-k_B}}\approx{fmt(t_meet)}"),
                D(rf"0<{fmt(t_meet)}<{fmt(tmax)}"),
                close(True, "A unique crossing sits inside the open interval"),
            ],
            [
                "Evaluate both levels at the horizon.",
                D(rf"A({fmt(tmax)})\approx{fmt(At)},\qquad B({fmt(tmax)})\approx{fmt(Bt)}"),
                close(True, "Population $A$ is strictly larger at the horizon"),
            ],
            [
                "Compare forces directly.",
                D(rf"k_A={fmt(kA)}>{fmt(kB)}=k_B"),
                close(True, "Force $A$ dominates force $B$"),
            ],
            [
                "The correct log ratio is $B_0/A_0$, not $A_0/B_0$.",
                D(rf"\frac{{\ln(A_0/B_0)}}{{k_A-k_B}}\approx{fmt(ln(A0/B0)/(kA-kB))}"),
                D(rf"t^*\approx{fmt(t_meet)}"),
                close(False, "Flipping the ratio flips the sign of the meeting time"),
            ],
            [
                "Log-growth equals force times horizon.",
                D(rf"k_A\cdot{fmt(tmax)}={fmt(kA*tmax)},\qquad k_B\cdot{fmt(tmax)}={fmt(kB*tmax)}"),
                close(False, "The log-increments differ because the forces differ"),
            ],
        ],
        overview=overview,
        stem_kind="graph",
        figure=fig,
    )


def t03_table_recover_force() -> dict:
    """Two-observation table → recover k via log → doubling / domain. 4 true."""
    y1, t1, k = 800.0, 2.0, 0.05
    t2 = 7.0
    y2 = y1 * math.exp(k * (t2 - t1))
    dt = t2 - t1
    k_hat = ln(y2 / y1) / dt
    t_double = ln(2) / k_hat
    y_plus10 = y1 * math.exp(k_hat * 10)
    # A formula True; B double<20 True; C y(+10)>2 y1 True; D ln ratio>0.2 True; E k>0.06 False
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert abs(k_hat - k) < 1e-12
    table = md_table(
        ["$t$", "$y(t)$"],
        [[f"${fmt(t1)}$", f"${fmt(y1)}$"], [f"${fmt(t2)}$", f"${fmt(y2,2)}$"]],
    )
    fig = svg_exp(P0=y1, k=k, tmax=12, title="Recovered continuous path", mark_t=t2)
    overview = (
        f"From the table, $k=\\ln(y_2/y_1)/\\Delta t\\approx{fmt(k_hat,6)}$. "
        f"Doubling $t_{{\\times 2}}\\approx{fmt(t_double)}$; "
        f"ten years after $t_1$: $y\\approx{fmt(y_plus10)}$."
    )
    return make_task(
        title="Table — recover continuous force, then log comparisons",
        context=(
            "A continuous exponential path $y(t)=y_0 e^{kt}$ is observed at two times "
            "(table). Recover the force by logarithm, then judge the claims."
        ),
        statements=[
            rf"The continuous force equals $\ln(y({fmt(t2)})/y({fmt(t1)}))/{fmt(dt)}$.",
            r"The doubling time is strictly less than $20$ years.",
            rf"Ten years after $t={fmt(t1)}$, the level exceeds twice $y({fmt(t1)})$.",
            rf"$\ln(y({fmt(t2)})/y({fmt(t1)}))$ is strictly larger than $0.2$.",
            r"The recovered force is strictly larger than $0.06$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Start from $y_2=y_1 e^{k\\Delta t}$ and solve for $k$.",
                D(rf"k=\frac{{\ln(y_2/y_1)}}{{\Delta t}}=\frac{{\ln(y({fmt(t2)})/y({fmt(t1)}))}}{{{fmt(dt)}}}"),
                D(rf"k\approx{fmt(k_hat,6)}"),
                close(True, "The log-ratio formula is exactly the recovered force"),
            ],
            [
                "Doubling solves $e^{kt}=2$.",
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k}}\approx{fmt(t_double)}"),
                D(rf"{fmt(t_double)}<20"),
                close(True, "Doubling finishes before twenty years"),
            ],
            [
                "Propagate ten years from the first observation.",
                D(rf"y(t_1+10)=y_1 e^{{10k}}\approx{fmt(y_plus10)}"),
                D(rf"2y_1={fmt(2*y1)}"),
                close(True, "The ten-year level exceeds twice the first observation"),
            ],
            [
                "Evaluate the log-ratio between the tabulated points.",
                D(rf"\ln(y_2/y_1)=k\cdot\Delta t\approx{fmt(k*dt)}"),
                D(rf"{fmt(k*dt)}>0.2"),
                close(True, "The log-ratio clears the $0.2$ threshold"),
            ],
            [
                "Compare the recovered force with $0.06$.",
                D(rf"k\approx{fmt(k_hat,6)}\le 0.06"),
                close(False, "The force equals $0.05$, which is not strictly above $0.06$"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        figure=fig,
        tables_markdown=table,
    )


def t04_symbolic_inverse_growth() -> dict:
    """Inverse exp/log beside a growth model; domain of log. 5 true."""
    # f(t)=P e^{kt}, g=f^{-1} on range, k>0,P>0
    P, k = 200.0, 0.04
    # Symbolic identities — all five carefully True
    # A: g(y)=(1/k)ln(y/P) True
    # B: g(f(t))=t True
    # C: domain of g is y>0 True (since range of f is (0,∞))
    # D: f(g(y))=y for y>0 True
    # E: dg/dy = 1/(k y) True
    key = [True, True, True, True, True]
    assert sum(key) == 5
    fig = svg_curves(
        [
            (lambda t, P=P, k=k: P * math.exp(k * t), "#8B5A2B", "f(t)"),
            (lambda y, P=P, k=k: ln(y / P) / k if y > 0 else float("nan"), "#2F5D50", "g on range", "6 4"),
        ],
        xmin=0,
        xmax=30,
        title="Growth map and its inverse",
        xlabel="t or y",
        ylabel="value",
    )
    # Second curve as inverse doesn't plot well on same axes — use log curve instead
    fig = svg_log(base=math.e, xmin=0.2, xmax=8, title="Log shape of the inverse clock", mark_x=math.e)
    overview = (
        f"Growth $f(t)=P e^{{kt}}$ with $P={fmt(P)}$, $k={fmt(k)}>0$ is bijective "
        f"$\\mathbb{{R}}\\to(0,\\infty)$. Inverse $g(y)=\\frac{{1}}{{k}}\\ln(y/P)$ "
        f"satisfies $g\\circ f=\\mathrm{{id}}$ and $f\\circ g=\\mathrm{{id}}_{{(0,\\infty)}}$."
    )
    return make_task(
        title="Symbolic — inverse log clock beside an exponential stock",
        context=(
            f"A stock follows $f(t)=P e^{{kt}}$ with parameters $P={fmt(P)}>0$ and "
            f"$k={fmt(k)}>0$. Let $g$ denote the inverse of $f$ as a map "
            f"$\\mathbb{{R}}\\to(0,\\infty)$."
        ),
        statements=[
            r"$g(y)=\dfrac{1}{k}\ln(y/P)$ for every $y>0$.",
            r"$g(f(t))=t$ for every real $t$.",
            r"The natural domain of $g$ is the positive half-line $(0,\infty)$.",
            r"$f(g(y))=y$ for every $y>0$.",
            r"The derivative satisfies $g'(y)=\dfrac{1}{ky}$ for every $y>0$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Solve $y=P e^{kt}$ for $t$.",
                D(r"\frac{y}{P}=e^{kt}"),
                D(r"t=\frac{1}{k}\ln(y/P)"),
                close(True, "That formula is exactly $g(y)$"),
            ],
            [
                "Compose $g$ after $f$.",
                D(r"g(f(t))=\frac{1}{k}\ln(P e^{kt}/P)=\frac{1}{k}\cdot kt=t"),
                close(True, "Left inverse identity holds for all real $t$"),
            ],
            [
                "Range of $f$ is $(0,\\infty)$ because $e^{kt}>0$ always.",
                "An inverse is defined precisely on that range.",
                close(True, "The domain of $g$ is $(0,\\infty)$"),
            ],
            [
                "Compose $f$ after $g$ on $y>0$.",
                D(r"f(g(y))=P\exp\bigl(\ln(y/P)\bigr)=y"),
                close(True, "Right inverse identity holds on the positive half-line"),
            ],
            [
                "Differentiate $g(y)=k^{-1}(\\ln y-\\ln P)$.",
                D(r"g'(y)=\frac{1}{k}\cdot\frac{1}{y}=\frac{1}{ky}"),
                close(True, "The logarithmic derivative matches the claim"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
        figure=fig,
    )


def t05_parametric_nested_log() -> dict:
    """Nested log constraints on parameters of an exp model. 1 true."""
    # Model N(t)=N0 e^{kt} with constraints: ln(ln(N0))=0 ⇒ N0=e, and ln(k)=-ln 2 ⇒ k=1/2
    # Wait want letters: ln(ln A)=0 ⇒ A=e; k=e^{-c} with c=ln 2 ⇒ k=1/2
    A = math.e
    c = ln(2)
    k = math.exp(-c)  # 1/2
    # Claims designed so only one is true:
    # A: A=e True
    # B: k=2 False (k=1/2)
    # C: doubling time = ln2 / k = 2 ln 2 False claim says = ln 2
    # D: N(2)=A e^{2k}=e * e = e^2, claim N(2)=A False
    # E: ln(ln A)+ln k = 0 + (-ln2) < 0, claim =0 False
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(A - math.e) < 1e-12 and abs(k - 0.5) < 1e-12
    t_double = ln(2) / k
    overview = (
        f"Constraints $\\ln(\\ln A)=0$ and $\\ln k=-\\ln 2$ force $A=e$ and "
        f"$k=1/2$. Then $t_{{\\times 2}}=\\ln 2/k=2\\ln 2\\approx{fmt(t_double)}$, "
        f"and $N(2)=A e^{{2k}}=e^{2}$."
    )
    return make_task(
        title="Parametric — nested logs pinning an exponential stock",
        context=(
            r"A stock $N(t)=A e^{kt}$ has unknown $A>1$ and $k>0$ constrained by "
            r"the nested-log conditions $\ln(\ln A)=0$ and $\ln k=-\ln 2$."
        ),
        statements=[
            r"The level parameter satisfies $A=e$.",
            r"The force satisfies $k=2$.",
            r"The doubling time equals $\ln 2$ exactly.",
            r"$N(2)=A$.",
            r"$\ln(\ln A)+\ln k=0$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Unwind the outer logarithm.",
                D(r"\ln(\ln A)=0\implies \ln A=1\implies A=e"),
                close(True, "The nested constraint pins $A=e$"),
            ],
            [
                "Unwind the force constraint.",
                D(r"\ln k=-\ln 2\implies k=e^{-\ln 2}=\tfrac12"),
                D(r"k=\tfrac12\neq 2"),
                close(False, "The force is one half, not two"),
            ],
            [
                "Doubling time is $\\ln 2/k$.",
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{1/2}}=2\ln 2\approx{fmt(t_double)}"),
                D(rf"2\ln 2\neq\ln 2"),
                close(False, "Doubling time is $2\\ln 2$, not $\\ln 2$"),
            ],
            [
                "Evaluate at $t=2$.",
                D(r"N(2)=A e^{2k}=e\cdot e^{2\cdot(1/2)}=e\cdot e=e^{2}"),
                D(r"e^{2}\neq A=e"),
                close(False, "After two years the stock is $e^{2}$, not $A$"),
            ],
            [
                "Add the two constrained logs.",
                D(r"\ln(\ln A)+\ln k=0+(-\ln 2)=-\ln 2\neq 0"),
                close(False, "The sum equals $-\\ln 2$, not zero"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
    )


def t06_piecewise_domain_side() -> dict:
    """Piecewise growth with log solve and positivity side-conditions. 3 true."""
    P0, k1, T, k2 = 500.0, 0.06, 3.0, -0.02
    # late decay; target still reachable? f(T)=P0 e^{k1 T}; if target < f(T) hit in early regime
    fT = P0 * math.exp(k1 * T)
    target = P0 * math.exp(0.5 * k1 * T)  # mid-early: hit before switch
    t_hit = ln(target / P0) / k1
    # After switch, level falls; ask about eventual vs target
    # A: hit before T True; B: f eventually < target after switch? as t→∞ f→0 so yes True
    # C: k2>0 False; D: ln(f(T)/P0)=k1 T True; E: target > f(T) False
    key = [True, True, False, True, False]
    assert sum(key) == 3
    assert 0 < t_hit < T < 10 and target < fT and k2 < 0
    fig = piecewise_kink(P0, k1, T, k2, 12, "Rise then decay kink")
    overview = (
        f"Early force $k_1={fmt(k1)}$ until $T={fmt(T)}$, then $k_2={fmt(k2)}<0$. "
        f"$f(T)\\approx{fmt(fT)}$. Target $M={fmt(target)}$ is hit at "
        f"$t=\\ln(M/P_0)/k_1\\approx{fmt(t_hit)}\\in(0,T)$."
    )
    return make_task(
        title="Piecewise — log hit before the kink, with a decaying tail",
        context=(
            f"A level starts at $P_0={fmt(P0)}$, grows at force $k_1={fmt(k1)}$ on "
            f"$[0,T]$ with $T={fmt(T)}$, then decays at force $k_2={fmt(k2)}$. "
            f"A threshold $M={fmt(target)}$ is watched. The figure shows the kink."
        ),
        statements=[
            rf"The threshold $M$ is crossed at some time strictly before $t={fmt(T)}$.",
            r"Because $k_2<0$, the path eventually falls back below $M$ after the switch.",
            r"The late force $k_2$ is strictly positive.",
            rf"$\ln(f({fmt(T)})/P_0)$ equals $k_1 T$ exactly.",
            rf"The threshold $M$ exceeds the switch level $f({fmt(T)})$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Solve in the early regime $P_0 e^{k_1 t}=M$.",
                D(rf"t_{{\mathrm{{hit}}}}=\frac{{\ln(M/P_0)}}{{k_1}}\approx{fmt(t_hit)}"),
                D(rf"0<{fmt(t_hit)}<{fmt(T)}"),
                close(True, "The first crossing is before the kink"),
            ],
            [
                "After the switch the level is $f(T)e^{k_2(t-T)}$ with $k_2<0$.",
                "As $t\\to\\infty$ this tends to $0$, which lies below $M$.",
                "By continuity it must cross $M$ again while falling.",
                close(True, "The decaying tail re-crosses $M$ from above"),
            ],
            [
                "Read the late force from the stem.",
                D(rf"k_2={fmt(k2)}<0"),
                close(False, "The late force is negative, not positive"),
            ],
            [
                "Only the early force has acted by the switch.",
                D(rf"\ln(f(T)/P_0)=k_1 T={fmt(k1*T)}"),
                close(True, "The log-increment at the kink is exactly $k_1 T$"),
            ],
            [
                "Compare threshold and switch level.",
                D(rf"M={fmt(target)},\qquad f(T)\approx{fmt(fT)}"),
                D(rf"M<f(T)"),
                close(False, "The threshold lies strictly below the switch level"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t07_nested_log_exp_params() -> dict:
    """Nested log on growth parameters; compare hitting times. 2 true."""
    # P(t)=P0 b^{t} with b=e^{k}, and ln(ln b)=ln(ln e^{0.05}) — use b=e^{1/e}? 
    # Simpler: require ln(k)=-2 and ln(P0)=3 ⇒ k=e^{-2}, P0=e^3
    P0 = math.exp(3)
    k = math.exp(-2)
    target = P0 * math.e  # one e-fold
    t_hit = ln(target / P0) / k  # 1/k = e^2
    # A: P0=e^3 True; B: k=e^{-2} True; C: t_hit=e^{-2} False (is e^2);
    # D: ln(target/P0)=k False (=1); E: b:=e^k satisfies ln b = e^{-2} True — wait that's same as k
    # Redesign for exactly 2 true: A True, B True, C F, D F, E F
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(t_hit - math.exp(2)) < 1e-9
    overview = (
        f"Constraints $\\ln P_0=3$ and $\\ln k=-2$ give $P_0=e^{3}$, $k=e^{{-2}}$. "
        f"One $e$-fold needs $t=1/k=e^{2}\\approx{fmt(t_hit)}$."
    )
    return make_task(
        title="Nested — log constraints on an exponential hitting clock",
        context=(
            r"A balance $P(t)=P_0 e^{kt}$ has $P_0>1$ and $k>0$ fixed by "
            r"$\ln P_0=3$ and $\ln k=-2$. The target is one $e$-fold above $P_0$, "
            r"namely $M=e\cdot P_0$."
        ),
        statements=[
            r"$P_0=e^{3}$.",
            r"$k=e^{-2}$.",
            r"The hitting time of $M$ equals $e^{-2}$.",
            r"$\ln(M/P_0)$ equals $k$.",
            r"The discrete annual base $e^{k}$ equals $e^{2}$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Exponentiate $\\ln P_0=3$.",
                D(r"P_0=e^{3}"),
                close(True, "The level parameter is $e^{3}$"),
            ],
            [
                "Exponentiate $\\ln k=-2$.",
                D(r"k=e^{-2}"),
                close(True, "The force is $e^{-2}$"),
            ],
            [
                "Hitting one $e$-fold solves $e^{kt}=e$, so $t=1/k$.",
                D(rf"t=e^{{2}}\approx{fmt(t_hit)}\neq e^{{-2}}"),
                close(False, "The hitting time is $e^{2}$, not $e^{-2}$"),
            ],
            [
                "By construction $M/P_0=e$, so the log-ratio is $1$.",
                D(r"\ln(M/P_0)=1,\qquad k=e^{-2}"),
                D(r"1\neq e^{-2}"),
                close(False, "The log-ratio is $1$, not equal to $k$"),
            ],
            [
                "The equivalent discrete base is $e^{k}=e^{e^{-2}}$, not $e^{2}$.",
                D(r"e^{k}=e^{e^{-2}}\neq e^{2}"),
                close(False, "The base is far smaller than $e^{2}$"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
    )


def t08_text_dense_microtraps() -> dict:
    """Five dense micro-traps mixing cont/disc, elasticity, logs. 4 true."""
    r, t = 0.05, 10.0
    # Cont vs disc: e^r > 1+r; ln(1+r)<r
    # Elasticity b=1.2 with price force g=0.03 ⇒ q force = -0.036
    b, g = 1.2, 0.03
    qf = -b * g
    # A: e^r > 1+r True; B: ln(1+r)<r True; C: q force = -bg True;
    # D: |qf|>0.05 False (0.036); E: (1+r)^t < e^{rt} True
    key = [True, True, True, False, True]
    assert sum(key) == 4
    assert math.exp(r) > 1 + r and ln(1 + r) < r and abs(qf) < 0.05
    assert (1 + r) ** t < math.exp(r * t)
    overview = (
        f"Micro-facts: $e^{{r}}>1+r$ and $\\ln(1+r)<r$ for $r={fmt(r)}$; "
        f"quantity force $-bg={fmt(qf,6)}$; discrete "
        f"$(1+r)^{t}<e^{{rt}}$ at $t={fmt(t)}$."
    )
    return make_task(
        title="Text-dense — five entangled exp/log micro-traps",
        context=(
            f"Fix a nominal rate $r={fmt(r)}$ and horizon $t={fmt(t)}$. Separately, "
            f"prices drift at force $g={fmt(g)}$ while demand has constant elasticity "
            f"magnitude $b={fmt(b)}$, so $\\ln Q=C-b\\ln P$."
        ),
        statements=[
            rf"$e^{{{fmt(r)}}}$ is strictly larger than $1+{fmt(r)}$.",
            rf"$\ln(1+{fmt(r)})$ is strictly smaller than ${fmt(r)}$.",
            rf"Quantity's continuous force equals $-{fmt(b)}\cdot{fmt(g)}$.",
            r"The absolute size of that quantity force exceeds $0.05$.",
            rf"At horizon $t={fmt(t)}$, annual compounding $(1+r)^{{t}}$ stays strictly below continuous $e^{{rt}}$.",
        ],
        answer_key=key,
        bodies=[
            [
                "The exponential series $e^{r}=1+r+r^{2}/2+\\cdots$ exceeds $1+r$ for $r>0$.",
                D(rf"e^{{{fmt(r)}}}\\approx{fmt(math.exp(r),6)}>1+{fmt(r)}"),
                close(True, "Continuous one-year growth beats the linear nominal"),
            ],
            [
                "Strict concavity of $\\ln$ at $1$ gives $\\ln(1+r)<r$ for $r>0$.",
                D(rf"\ln(1+{fmt(r)})\\approx{fmt(ln(1+r),6)}<{fmt(r)}"),
                close(True, "The log-linearisation overstates the log-return"),
            ],
            [
                "Differentiate $\\ln Q=C-b\\ln P$ in time.",
                D(r"\frac{d\ln Q}{dt}=-b\frac{d\ln P}{dt}=-bg"),
                D(rf"=-{fmt(b)}\cdot{fmt(g)}={fmt(qf,6)}"),
                close(True, "Quantity force is exactly $-bg$"),
            ],
            [
                "Compare $|-bg|$ with $0.05$.",
                D(rf"|{fmt(qf,6)}|={fmt(abs(qf),6)}\le 0.05"),
                close(False, "The absolute force is $0.036$, not above $0.05$"),
            ],
            [
                "Because $1+r<e^{r}$, raising both sides to power $t>0$ preserves the inequality.",
                D(rf"(1+r)^{{t}}\\approx{fmt((1+r)**t)},\qquad e^{{rt}}\\approx{fmt(math.exp(r*t))}"),
                close(True, "Annual compounding trails continuous compounding"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
    )


def t09_rebuild_from_observations() -> dict:
    """Rebuild continuous force from two obs; compare hitting clocks. 5 true."""
    y0, y1, t1 = 1200.0, 1200.0 * math.exp(0.03 * 6), 6.0
    k = ln(y1 / y0) / t1
    T_double = ln(2) / k
    T_triple = ln(3) / k
    # All true carefully:
    # A: k=ln(y1/y0)/t1 True
    # B: T_double < 25 True
    # C: T_triple > T_double True
    # D: y(T_double)=2 y0 True by def
    # E: semi-log slope equals k True
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert T_double < 25 and T_triple > T_double
    fig = semi_log_exp(y0, k, 30, "Semi-log rebuild of the force")
    table = md_table(
        ["$t$", "$y(t)$", "$\\ln y(t)$"],
        [
            ["$0$", f"${fmt(y0)}$", f"${fmt(ln(y0),4)}$"],
            [f"${fmt(t1)}$", f"${fmt(y1,2)}$", f"${fmt(ln(y1),4)}$"],
        ],
    )
    overview = (
        f"Rebuilt force $k=\\ln(y_1/y_0)/t_1\\approx{fmt(k,6)}$. "
        f"Doubling $\\approx{fmt(T_double)}$, tripling $\\approx{fmt(T_triple)}$. "
        f"Semi-log slope equals $k$."
    )
    return make_task(
        title="Rebuild — force from two observations, then multiple hitting clocks",
        context=(
            f"Only two observations of a continuous exponential stock are known "
            f"(table): $y(0)={fmt(y0)}$ and $y({fmt(t1)})\\approx{fmt(y1,2)}$. "
            f"Rebuild the force, then compare doubling and tripling clocks. "
            f"The figure is the semi-log view."
        ),
        statements=[
            rf"The continuous force equals $\ln(y({fmt(t1)})/y(0))/{fmt(t1)}$.",
            r"Doubling time is strictly less than $25$ years.",
            r"Tripling time is strictly larger than doubling time.",
            r"At the doubling time the level is exactly twice $y(0)$.",
            r"On a semi-log plot of $\ln y$ against $t$, the slope equals the rebuilt force.",
        ],
        answer_key=key,
        bodies=[
            [
                "Two-point log recovery.",
                D(rf"k=\frac{{\ln(y_1/y_0)}}{{t_1}}\approx{fmt(k,6)}"),
                close(True, "That quotient is the rebuilt continuous force"),
            ],
            [
                "Doubling clock.",
                D(rf"T_{{\times 2}}=\frac{{\ln 2}}{{k}}\approx{fmt(T_double)}"),
                D(rf"{fmt(T_double)}<25"),
                close(True, "Doubling finishes before twenty-five years"),
            ],
            [
                "Because $\\ln 3>\\ln 2$ and $k>0$, tripling takes longer.",
                D(rf"T_{{\times 3}}=\frac{{\ln 3}}{{k}}\approx{fmt(T_triple)}>{fmt(T_double)}"),
                close(True, "Tripling strictly follows doubling"),
            ],
            [
                "By definition of the doubling time under $y=y_0 e^{kt}$.",
                D(r"y(T_{\times 2})=y_0 e^{k\cdot(\ln 2)/k}=2y_0"),
                close(True, "The level is exactly double at that clock"),
            ],
            [
                "Write $\\ln y(t)=\\ln y_0+kt$.",
                "The slope in the $(t,\\ln y)$-plane is exactly $k$.",
                close(True, "Semi-log slope recovers the same force"),
            ],
        ],
        overview=overview,
        stem_kind="rebuild",
        figure=fig,
        tables_markdown=table,
    )


def t10_applied_gdp_letters() -> dict:
    """GDP per capita force with log recovery — letters dominant. 1 true."""
    Y0, g, N0, p, t = 100.0, 0.03, 10.0, 0.01, 20.0
    k = g - p
    dln_y = k * t
    # A: Δln y = (g-p)t True
    # B: Δln y > 0.5 False (0.4)
    # C: per capita force = g+p False
    # D: Δln Y = g t > 0.5 True? gt=0.6>0.5 — but we need only 1 true total
    # Redesign: only A true
    # B: dln_y > 0.5 False (0.4)
    # C: force = g+p False
    # D: Δln Y < 0.5 False (0.6 not <)
    # E: k > 0.025 False (0.02)
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(dln_y - 0.4) < 1e-12 and abs(g * t - 0.6) < 1e-12 and abs(k - 0.02) < 1e-12
    fig = gdp_per_capita(Y0 * 1000, g, N0, p, t, "GDP vs per capita paths")
    overview = (
        f"Per-capita force $k=g-p={fmt(k)}$. Over $t={fmt(t)}$, "
        f"$\\Delta\\ln y={fmt(dln_y)}$, $\\Delta\\ln Y={fmt(g*t)}$, "
        f"$\\Delta\\ln N={fmt(p*t)}$."
    )
    return make_task(
        title="Applied letters — GDP per capita force via logs",
        context=(
            f"Aggregate GDP and population follow $Y(t)=Y_0 e^{{gt}}$ and "
            f"$N(t)=N_0 e^{{pt}}$ with $Y_0={fmt(Y0)}$, $g={fmt(g)}$, "
            f"$N_0={fmt(N0)}$, $p={fmt(p)}$. Per capita is $y=Y/N$. "
            f"Horizon $t={fmt(t)}$. The figure tracks both scales."
        ),
        statements=[
            rf"The change in log GDP per capita over ${fmt(t)}$ years equals $(g-p)t$.",
            r"That log change exceeds $0.5$.",
            r"The per-capita continuous force equals $g+p$.",
            rf"Log aggregate GDP rises by less than $0.5$ over the ${fmt(t)}$-year horizon.",
            r"The per-capita force is strictly larger than $0.025$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Logs turn the quotient into a difference of forces.",
                D(r"\ln y(t)=\ln(Y_0/N_0)+(g-p)t"),
                D(rf"\Delta\ln y=(g-p)t={fmt(dln_y)}"),
                close(True, "The log-per-capita change is exactly $(g-p)t$"),
            ],
            [
                "Compare with $0.5$.",
                D(rf"\Delta\ln y={fmt(dln_y)}\le 0.5"),
                close(False, "The log change is $0.4$, not above $0.5$"),
            ],
            [
                "Per capita is a ratio, so forces subtract.",
                D(rf"k_y=g-p={fmt(k)}\neq g+p={fmt(g+p)}"),
                close(False, "Adding forces would track $Y\\cdot N$, not $Y/N$"),
            ],
            [
                "Aggregate log-growth is $gt$.",
                D(rf"\Delta\ln Y=gt={fmt(g*t)}"),
                D(rf"{fmt(g*t)}\not< 0.5"),
                close(False, "Log GDP rises by $0.6$, which is not less than $0.5$"),
            ],
            [
                "Compare $k=g-p$ with $0.025$.",
                D(rf"k={fmt(k)}\le 0.025"),
                close(False, "The per-capita force equals $0.02$"),
            ],
        ],
        overview=overview,
        stem_kind="applied_letter",
        figure=fig,
    )


# ---- Cycle 2 ---------------------------------------------------------------


def t11_hybrid_cont_disc_hit() -> dict:
    """Continuous vs discrete hitting times via logs. 3 true."""
    P, k, a, target = 1000.0, 0.05, 1.04, 2000.0
    t_cont = ln(target / P) / k
    t_disc = ln(target / P) / ln(a)
    # A: t_cont < t_disc True (since e^k≈1.051>1.04)
    # B: e^k ≠ a True
    # C: same hitting time False
    # D: t_cont < 20 True
    # E: substituting t_cont recovers target True — wait need 3 true: A,B,D or A,B,E
    # A T, B T, C F, D T, E T would be 4. Use E False somehow?
    # E: claim disc hits sooner — False
    key = [True, True, False, True, False]
    assert sum(key) == 3
    assert t_cont < t_disc and abs(math.exp(k) - a) > 1e-6 and t_cont < 20
    fig = two_models(P, k, a, max(t_cont, t_disc) + 1, "Continuous vs discrete to target")
    overview = (
        f"Continuous hit $t_c=\\ln(2)/k\\approx{fmt(t_cont)}$; "
        f"discrete hit $t_d=\\ln 2/\\ln a\\approx{fmt(t_disc)}$. "
        f"$e^{{k}}\\approx{fmt(math.exp(k),6)}\\neq a={fmt(a)}$."
    )
    return make_task(
        title="Hybrid — continuous versus discrete log hitting times",
        context=(
            f"A balance starts at $P={fmt(P)}$. Compare continuous force $k={fmt(k)}$ "
            f"with discrete annual base $a={fmt(a)}$ when chasing target $M={fmt(target)}$. "
            f"The figure overlays both compounding conventions."
        ),
        statements=[
            r"The continuous model reaches the target strictly sooner than the discrete model.",
            rf"The one-year continuous multiplier $e^{{{fmt(k)}}}$ differs from the discrete base ${fmt(a)}$.",
            r"Both models share the same hitting time for the target.",
            r"The continuous hitting time is strictly less than $20$ years.",
            r"The discrete model reaches the target strictly sooner than the continuous model.",
        ],
        answer_key=key,
        bodies=[
            [
                "Solve both hitting clocks with logarithms.",
                D(rf"t_c=\frac{{\ln(M/P)}}{{k}}\approx{fmt(t_cont)}"),
                D(rf"t_d=\frac{{\ln(M/P)}}{{\ln a}}\approx{fmt(t_disc)}"),
                D(rf"{fmt(t_cont)}<{fmt(t_disc)}"),
                close(True, "Continuous compounding wins the race to the target"),
            ],
            [
                "Compare one-year multipliers.",
                D(rf"e^{{{fmt(k)}}}\\approx{fmt(math.exp(k),6)},\qquad a={fmt(a)}"),
                close(True, "The multipliers differ, so the paths are not reparametrisations"),
            ],
            [
                "The two hitting times computed above are unequal.",
                D(rf"{fmt(t_cont)}\neq{fmt(t_disc)}"),
                close(False, "Shared hitting time fails"),
            ],
            [
                D(rf"t_c\approx{fmt(t_cont)}<20"),
                close(True, "Continuous hitting finishes inside twenty years"),
            ],
            [
                "The inequality runs the other way.",
                D(rf"t_d\approx{fmt(t_disc)}>t_c"),
                close(False, "Discrete compounding is slower to the target"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t12_graph_decay_vs_invest() -> dict:
    """Decay clock vs investment clock. 4 true."""
    m0, half, P, r, goal = 80.0, 8.0, 5000.0, 0.05, 7000.0
    kdec = ln(2) / half
    t_half3 = 3 * half
    remain = m0 * (0.5) ** 3
    t_goal = ln(goal / P) / r
    # A remain<15 True (10); B t_goal<10 True; C kdec=r False;
    # D 3 half-lives < t_goal? 24 vs ~6.73 — False actually 24>6.73
    # Need 4 true: A T, B T, C F, D: claim 3 half-lives take MORE calendar time than invest hit — True
    # E: Pe^{r t_goal}=goal True
    key = [True, True, False, True, True]
    assert sum(key) == 4
    assert remain < 15 and t_goal < 10 and abs(kdec - r) > 1e-6 and t_half3 > t_goal
    fig = svg_curves(
        [
            (lambda t, m0=m0, kdec=kdec: m0 * math.exp(-kdec * t), "#8B5A2B", "mass"),
            (lambda t, P=P, r=r: P * math.exp(r * t) / 100, "#2F5D50", "invest/100"),
        ],
        xmin=0,
        xmax=max(t_half3, t_goal) + 2,
        title="Decay clock vs investment clock",
        ylabel="scaled level",
        vlines=[t_goal, t_half3],
    )
    overview = (
        f"Decay $k_{{\\mathrm{{dec}}}}=\\ln 2/{fmt(half)}\\approx{fmt(kdec,6)}$; "
        f"after $3T_{{1/2}}={fmt(t_half3)}$ mass is ${fmt(remain)}$. "
        f"Investment hits ${fmt(goal)}$ at $t\\approx{fmt(t_goal)}$."
    )
    return make_task(
        title="Graph — radioactive half-lives beside an investment hitting clock",
        context=(
            f"A sample of $m_0={fmt(m0)}$ grams has half-life $T_{{1/2}}={fmt(half)}$ hours. "
            f"Separately, an investment of $P={fmt(P)}$ compounds continuously at force "
            f"$r={fmt(r)}$ toward goal ${fmt(goal)}$. The figure overlays both clocks."
        ),
        statements=[
            r"After three half-lives the sample has mass strictly below $15$ grams.",
            rf"The investment reaches ${fmt(goal)}$ in strictly less than $10$ years.",
            rf"The decay constant equals the investment force $r={fmt(r)}$.",
            r"Three half-lives span strictly more calendar time than the investment needs to hit its goal.",
            r"Substituting the investment hitting time recovers the goal balance.",
        ],
        answer_key=key,
        bodies=[
            [
                "Three half-lives leave one eighth of the mass.",
                D(rf"m(3T_{{1/2}})={fmt(m0)}/8={fmt(remain)}"),
                D(rf"{fmt(remain)}<15"),
                close(True, "Remaining mass is $10$ grams"),
            ],
            [
                "Solve $P e^{rt}=\\mathrm{goal}$.",
                D(rf"t_{{\mathrm{{goal}}}}=\frac{{\ln({fmt(goal)}/{fmt(P)})}}{{r}}\approx{fmt(t_goal)}"),
                D(rf"{fmt(t_goal)}<10"),
                close(True, "The investment clock finishes inside ten years"),
            ],
            [
                D(rf"k_{{\mathrm{{dec}}}}\\approx{fmt(kdec,6)}\neq r={fmt(r)}"),
                close(False, "Decay force and investment force are different parameters"),
            ],
            [
                D(rf"3T_{{1/2}}={fmt(t_half3)},\qquad t_{{\mathrm{{goal}}}}\\approx{fmt(t_goal)}"),
                D(rf"{fmt(t_half3)}>{fmt(t_goal)}"),
                close(True, "Three half-lives take longer than the investment hit"),
            ],
            [
                "By construction of the continuous hitting time,",
                D(rf"P e^{{r t_{{\mathrm{{goal}}}}}}=goal={fmt(goal)}"),
                close(True, "Substitution recovers the goal exactly"),
            ],
        ],
        overview=overview,
        stem_kind="graph",
        figure=fig,
    )


def t13_table_elasticity_stock() -> dict:
    """Elasticity beside exp stock with a small table. 1 true."""
    a_log, b, Pprice = 5.0, 1.4, 3.0
    Q = math.exp(a_log - b * ln(Pprice))
    P0, k, t = 200.0, 0.04, 10.0
    Nt = P0 * math.exp(k * t)
    # Only C true? Need 1 true.
    # A: b>1 True — elastic. That would be true. Make A false claim b<1
    # A: demand inelastic (|ε|<1) False
    # B: Q>5 False? Q=exp(5-1.4*ln3)=exp(5-1.4*1.0986)=exp(5-1.538)=exp(3.462)≈31.9 >5 True
    # Need only 1 true: A F (inelastic claim), B: Q<5 False, C: Nt>1.4 P0 True, D: ε=k False, E: recovered force ≠k False claim
    # C True only
    key = [False, False, True, False, False]
    assert sum(key) == 1
    assert b > 1 and Q > 5 and Nt > 1.4 * P0
    table = md_table(
        ["object", "value"],
        [
            ["$\\ln Q$ intercept $a$", f"${fmt(a_log)}$"],
            ["elasticity magnitude $b$", f"${fmt(b)}$"],
            ["price $P$", f"${fmt(Pprice)}$"],
            ["stock $N_0$", f"${fmt(P0)}$"],
            ["stock force $k$", f"${fmt(k)}$"],
        ],
    )
    overview = (
        f"Demand $\\ln Q={fmt(a_log)}-{fmt(b)}\\ln P$ at $P={fmt(Pprice)}$ gives "
        f"$Q\\approx{fmt(Q,4)}$ with $|\\varepsilon|={fmt(b)}$. "
        f"Stock $N({fmt(t)})\\approx{fmt(Nt)}$."
    )
    return make_task(
        title="Table — elasticity schedule beside an exponential stock",
        context=(
            f"Demand follows $\\ln Q=a-b\\ln P$ while a separate stock follows "
            f"$N(t)=N_0 e^{{kt}}$. Parameters are tabulated. Horizon $t={fmt(t)}$."
        ),
        statements=[
            r"Demand is price-inelastic ($|\varepsilon|<1$).",
            r"At the stated price, quantity is strictly less than $5$.",
            rf"At $t={fmt(t)}$ the growing stock exceeds $1.4$ times its initial level.",
            rf"The demand elasticity equals the stock's continuous force ${fmt(k)}$.",
            rf"The stock force recovered from $\ln(N({fmt(t)})/N_0)/{fmt(t)}$ differs from ${fmt(k)}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"|\varepsilon|=b={fmt(b)}>1"),
                close(False, "Demand is elastic, not inelastic"),
            ],
            [
                D(rf"Q=e^{{a-b\ln P}}\approx{fmt(Q,4)}"),
                D(rf"{fmt(Q,4)}\not< 5"),
                close(False, "Quantity is far above $5$"),
            ],
            [
                D(rf"N({fmt(t)})=N_0 e^{{kt}}\approx{fmt(Nt)}"),
                D(rf"1.4 N_0={fmt(1.4*P0)}"),
                close(True, "The stock clears the $1.4$ threshold"),
            ],
            [
                "Elasticity $b$ and force $k$ live in different models.",
                D(rf"b={fmt(b)}\neq k={fmt(k)}"),
                close(False, "Equating elasticity with the stock force is a category error"),
            ],
            [
                D(rf"\frac{{1}}{{t}}\ln\frac{{N(t)}}{{N_0}}=k={fmt(k)}"),
                close(False, "Log recovery returns exactly $k$, so they do not differ"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        tables_markdown=table,
    )


def t14_symbolic_change_base() -> dict:
    """Change of base inside exponential equation. 2 true."""
    a, b, expn = 8, 2, 5
    log_b_a = math.log(a, b)  # 3
    x = expn / log_b_a  # 5/3
    # A: log_b a integer True; B: x=expn/log True; C: x<expn True; D: sides equal True; E: log>4 False
    # Need 2 true: A T, B T, C F? x=5/3<5 so C true — too many
    # Use: A T, B T, C: x>expn False, D: a^x = b^{expn+1} False, E: log>4 False
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(log_b_a - 3) < 1e-12 and abs(a ** x - b ** expn) < 1e-9
    fig = svg_log(base=float(b), xmin=0.5, xmax=10, title=f"log_{b} used in the power solve", mark_x=float(a))
    overview = (
        f"$\\log_{{{b}}}({a})={fmt(log_b_a)}$. Solving ${a}^{x}={b}^{{{expn}}}$ gives "
        f"$x={expn}/{fmt(log_b_a)}={fmt(x,6)}$."
    )
    return make_task(
        title="Symbolic — change-of-base logarithm inside a power equation",
        context=(
            f"Relate powers of ${a}$ and ${b}$ through $\\log_{{{b}}}({a})$. "
            f"Solve ${a}^{x}={b}^{{{expn}}}$."
        ),
        statements=[
            rf"$\log_{{{b}}}({a})$ is an integer.",
            rf"The solution is $x=\dfrac{{{expn}}}{{\log_{{{b}}}({a})}}$.",
            rf"That solution is strictly larger than ${expn}$.",
            rf"Substituting the solved $x$ yields ${a}^{x}={b}^{{{expn}+1}}$.",
            rf"$\log_{{{b}}}({a})$ is strictly larger than $4$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"\log_{{{b}}}({a})=\frac{{\ln {a}}}{{\ln {b}}}={fmt(log_b_a)}"),
                close(True, "The logarithm is the integer $3$"),
            ],
            [
                f"Take $\\log_{{{b}}}$ of both sides of ${a}^{x}={b}^{{{expn}}}$.",
                D(rf"x\log_{{{b}}}({a})={expn}"),
                D(rf"x=\frac{{{expn}}}{{\log_{{{b}}}({a})}}={fmt(x,6)}"),
                close(True, "Change-of-base produces that exact quotient"),
            ],
            [
                D(rf"x={fmt(x,6)}<{expn}"),
                close(False, "The solution is smaller than the exponent, not larger"),
            ],
            [
                D(rf"a^{{x}}=b^{{{expn}}}={b**expn},\qquad b^{{{expn}+1}}={b**(expn+1)}"),
                close(False, "Substitution recovers $b^{5}$, not $b^{6}$"),
            ],
            [
                D(rf"\log_{{{b}}}({a})={fmt(log_b_a)}\le 4"),
                close(False, "The logarithm equals $3$, not above $4$"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
        figure=fig,
    )


def t15_parametric_family_force() -> dict:
    """Parametric family P_λ(t)=A e^{λt} with log constraints. 5 true."""
    A = 100.0
    # Family indexed by λ>0; define λ* by ln(λ*)=-ln 5 ⇒ λ*=1/5
    lam = math.exp(-ln(5))
    t_double = ln(2) / lam
    # All true:
    # A: λ*=1/5 True
    # B: P_λ*(ln5)=A e^{(1/5)ln5}=A 5^{1/5} — claim >A True
    # C: doubling = 5 ln2 True
    # D: d/dλ ln P = t True (∂_λ ln P_λ = t)
    # E: for λ>λ*, doubling time shorter True
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs(lam - 0.2) < 1e-12 and abs(t_double - 5 * ln(2)) < 1e-12
    overview = (
        f"Constraint $\\ln\\lambda^*=-\\ln 5$ pins $\\lambda^*=1/5$. "
        f"Doubling $t_{{\\times 2}}=5\\ln 2\\approx{fmt(t_double)}$. "
        f"Larger $\\lambda$ shortens doubling."
    )
    return make_task(
        title="Parametric — force family pinned by a log constraint",
        context=(
            f"Consider the family $P_\\lambda(t)=A e^{{\\lambda t}}$ with fixed $A={fmt(A)}$ "
            f"and force parameter $\\lambda>0$. A distinguished member $\\lambda^*$ satisfies "
            f"$\\ln\\lambda^*=-\\ln 5$."
        ),
        statements=[
            r"The distinguished force equals $\dfrac{1}{5}$.",
            r"$P_{\lambda^*}(\ln 5)$ is strictly larger than $A$.",
            r"The doubling time at $\lambda^*$ equals $5\ln 2$.",
            r"For each fixed $t$, $\dfrac{\partial}{\partial\lambda}\ln P_\lambda(t)=t$.",
            r"Every force $\lambda>\lambda^*$ has a strictly shorter doubling time than $\lambda^*$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln\lambda^*=-\ln 5\implies\lambda^*=e^{-\ln 5}=\frac{1}{5}"),
                close(True, "The log constraint pins $\\lambda^*=1/5$"),
            ],
            [
                D(r"P_{\lambda^*}(\ln 5)=A\exp\bigl(\tfrac15\ln 5\bigr)=A\cdot 5^{1/5}>A"),
                close(True, "A positive exponent lifts the level above $A$"),
            ],
            [
                D(r"t_{\times 2}=\frac{\ln 2}{\lambda^*}=5\ln 2"),
                close(True, "Doubling time is exactly $5\\ln 2$"),
            ],
            [
                D(r"\ln P_\lambda(t)=\ln A+\lambda t"),
                D(r"\frac{\partial}{\partial\lambda}\ln P_\lambda(t)=t"),
                close(True, "The cross-partial in force is calendar time"),
            ],
            [
                "Doubling time $t_{{\\times 2}}=\\ln 2/\\lambda$ is strictly decreasing in $\\lambda>0$.",
                close(True, "Any larger force doubles strictly sooner"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
    )



def t16_piecewise_gdp_switch() -> dict:
    """Piecewise GDP force with constant pop; per capita logs. 4 true."""
    Y0, g, N0, p, T, k2, t = 500.0, 0.03, 10.0, 0.01, 5.0, 0.015, 15.0
    y0 = Y0 / N0
    yT = y0 * math.exp((g - p) * T)
    yt = yT * math.exp((k2 - p) * (t - T))
    wrong = y0 * math.exp((g - p) * t)
    # A: yt > 1.1 y0 True; B: after switch ky=k2+p False; C: ky=k2-p True;
    # D: wrong misstates True; E: yT>y0 True
    key = [True, False, True, True, True]
    assert sum(key) == 4
    assert yt > 1.1 * y0 and yT > y0 and abs(wrong - yt) > 1e-6
    fig = gdp_per_capita(Y0, g, N0, p, t, "GDP path (early force shown)")
    # Also show piecewise conceptually via kink on per capita
    fig = piecewise_kink(y0, g - p, T, k2 - p, t, "Per capita with GDP force switch")
    overview = (
        f"Per-capita force is ${fmt(g-p)}$ then ${fmt(k2-p)}$. "
        f"$y(T)\\approx{fmt(yT,4)}$, $y({fmt(t)})\\approx{fmt(yt,4)}$. "
        f"Ignoring the switch gives ${fmt(wrong,4)}$."
    )
    return make_task(
        title="Piecewise — GDP force switch read through per-capita logs",
        context=(
            f"Aggregate GDP grows at force $g={fmt(g)}$ until $t={fmt(T)}$ and at force "
            f"$k_2={fmt(k2)}$ afterward. Population grows steadily at force $p={fmt(p)}$. "
            f"Initial per capita is $y_0=Y_0/N_0={fmt(y0)}$. Horizon $t={fmt(t)}$."
        ),
        statements=[
            rf"At $t={fmt(t)}$, GDP per capita exceeds $1.1$ times its initial level.",
            rf"After the switch, the per-capita force equals ${fmt(k2)}+{fmt(p)}$.",
            rf"After the switch, the per-capita force equals ${fmt(k2)}-{fmt(p)}$.",
            rf"Keeping the early GDP force all the way to $t={fmt(t)}$ mis-states the true per-capita level.",
            r"At the switch time, per capita already exceeds its initial level.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"y({fmt(t)})\approx{fmt(yt,4)},\qquad 1.1 y_0={fmt(1.1*y0,4)}"),
                close(True, "Per capita clears the $1.1$ threshold"),
            ],
            [
                "Per capita is a ratio, so forces subtract.",
                D(rf"k_y=k_2-p={fmt(k2-p)}\neq k_2+p={fmt(k2+p)}"),
                close(False, "Adding forces would track $Y\\cdot N$"),
            ],
            [
                D(rf"k_y={fmt(k2)}-{fmt(p)}={fmt(k2-p)}"),
                close(True, "The late per-capita force is the difference"),
            ],
            [
                D(rf"y_{{\mathrm{{wrong}}}}\approx{fmt(wrong,4)}\neq y({fmt(t)})\approx{fmt(yt,4)}"),
                close(True, "Ignoring the GDP switch mis-states the terminal level"),
            ],
            [
                D(rf"y(T)\approx{fmt(yT,4)}>y_0={fmt(y0)}"),
                close(True, "Early force $g-p>0$ already lifts per capita by the kink"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t17_nested_inverse_constraints() -> dict:
    """Nested logs constraining inverse of growth map. 3 true."""
    # f(t)=e^{kt} with k pinned by ln k = -1 ⇒ k=1/e
    # g inverse: g(y)=ln(y)/k
    k = math.exp(-1)
    # A: k=1/e True
    # B: g(e)=1/k=e True
    # C: g(1)=0 True
    # D: domain includes 0 False
    # E: g(e^k)=1 True? e^k = e^{1/e}, g= ln(e^{1/e})/k = (1/e)/k = (1/e)/(1/e)=1 True
    # That's 4 true (A,B,C,E). Need 3: make B false — claim g(e)=1/e
    key = [True, False, True, False, True]
    assert sum(key) == 3
    assert abs(k - 1 / math.e) < 1e-12
    overview = (
        f"Force constraint $\\ln k=-1$ gives $k=e^{{-1}}$. "
        f"Inverse $g(y)=\\ln y/k$ sends $1\\mapsto 0$ and $e^{{k}}\\mapsto 1$, "
        f"while $g(e)=e$."
    )
    return make_task(
        title="Nested — log-pinned force and its inverse clock",
        context=(
            r"A normalised stock $f(t)=e^{kt}$ ($f(0)=1$) has force $k>0$ fixed by "
            r"$\ln k=-1$. Let $g$ be the inverse of $f$."
        ),
        statements=[
            r"$k=e^{-1}$.",
            r"$g(e)=e^{-1}$.",
            r"$g(1)=0$.",
            r"The number $0$ lies in the domain of $g$.",
            r"$g(e^{k})=1$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln k=-1\implies k=e^{-1}"),
                close(True, "The nested (here single) log pins the force"),
            ],
            [
                D(r"g(e)=\frac{\ln e}{k}=\frac{1}{k}=e"),
                D(r"e\neq e^{-1}"),
                close(False, "The inverse clock returns $e$, not $e^{-1}$"),
            ],
            [
                D(r"g(1)=\frac{\ln 1}{k}=0"),
                close(True, "The inverse of the initial level is time zero"),
            ],
            [
                "Range of $f$ is $(0,\\infty)$, which excludes $0$.",
                close(False, "Zero is not in the domain of $g$"),
            ],
            [
                D(r"g(e^{k})=\frac{\ln(e^{k})}{k}=\frac{k}{k}=1"),
                close(True, "One year of force maps back to calendar time $1$"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
    )


def t18_text_dense_mixed_clocks() -> dict:
    """Text-dense mashup of half-life, EAR, and log ratios. 1 true."""
    half, r, n = 10.0, 0.06, 12.0
    kdec = ln(2) / half
    ear = (1 + r / n) ** n - 1
    # A: kdec = ln2/10 True — but need only 1 true total
    # Make A: kdec=0.1 False
    # B: EAR > r True typically for compounding — ear > r? (1+r/n)^n -1 > r is FALSE for small r actually
    # (1+0.06/12)^12 -1 ≈ 0.06168 > 0.06 True
    # C: ln(1+ear) = r False
    # D: half-life formula t=ln2/k with k=r False claim
    # E: e^r -1 = ear False
    # Only B true
    key = [False, True, False, False, False]
    assert sum(key) == 1
    assert abs(kdec - 0.1) > 1e-6 and ear > r
    overview = (
        f"Decay $k=\\ln 2/{fmt(half)}\\approx{fmt(kdec,6)}$. "
        f"Nominal $r={fmt(r)}$ with $n={fmt(n)}$ gives EAR $\\approx{fmt(ear,6)}$."
    )
    return make_task(
        title="Text-dense — half-life force tangled with an EAR claim",
        context=(
            f"A sample decays with half-life $T_{{1/2}}={fmt(half)}$. Separately a loan "
            f"quotes nominal annual rate $r={fmt(r)}$ compounded $n={fmt(n)}$ times per year."
        ),
        statements=[
            r"The continuous decay constant equals $0.1$ exactly.",
            r"The effective annual rate of the loan strictly exceeds the nominal rate $r$.",
            r"$\ln(1+\mathrm{EAR})$ equals the nominal rate $r$.",
            rf"Using the loan force $r$ as if it were a decay constant would give half-life $\ln 2/r\approx{fmt(ln(2)/r)}$. That equals $T_{{1/2}}$.",
            r"The continuous-equivalent annual yield $e^{r}-1$ equals the loan's EAR.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"k=\frac{{\ln 2}}{{{fmt(half)}}}\\approx{fmt(kdec,6)}\neq 0.1"),
                close(False, "Half-life $10$ does not produce force $0.1$"),
            ],
            [
                D(rf"\mathrm{{EAR}}=\bigl(1+\frac{{r}}{{n}}\bigr)^{n}-1\\approx{fmt(ear,6)}"),
                D(rf"{fmt(ear,6)}>{fmt(r)}"),
                close(True, "Intra-year compounding lifts EAR above the nominal"),
            ],
            [
                D(rf"\ln(1+\mathrm{{EAR}})\\approx{fmt(ln(1+ear),6)}\neq r={fmt(r)}"),
                close(False, "That log recovers the continuous force equivalent to EAR, not $r$"),
            ],
            [
                D(rf"\frac{{\ln 2}}{{r}}\\approx{fmt(ln(2)/r)}\neq T_{{1/2}}={fmt(half)}"),
                close(False, "Loan force and decay half-life are unrelated"),
            ],
            [
                D(rf"e^{{r}}-1\\approx{fmt(math.exp(r)-1,6)},\qquad \mathrm{{EAR}}\\approx{fmt(ear,6)}"),
                close(False, "Continuous yield on $r$ is not the discrete EAR"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
    )


def t19_rebuild_semi_log_table() -> dict:
    """Rebuild from semi-log table; compare models. 2 true."""
    P0, k = 500.0, 0.045
    ts = [0.0, 4.0, 8.0]
    ys = [P0 * math.exp(k * t) for t in ts]
    lns = [ln(y) for y in ys]
    slope = (lns[2] - lns[0]) / (ts[2] - ts[0])
    # A: slope = k True; B: P0 = e^{ln y(0)} True; C: discrete (1+k)^t matches False
    # D: doubling < 10 False (ln2/0.045≈15.4); E: y(8)/y(4)=y(4)/y(0) True (equal ratios)
    # Want 2 true: A T, B T, C F, D F, E T would be 3. Make B: P0=600 False
    key = [True, False, False, False, True]
    assert sum(key) == 2
    assert abs(slope - k) < 1e-12
    ratio = ys[1] / ys[0]
    table = md_table(
        ["$t$", "$y(t)$", "$\\ln y(t)$"],
        [[f"${fmt(t)}$", f"${fmt(y,2)}$", f"${fmt(ly,4)}$"] for t, y, ly in zip(ts, ys, lns)],
    )
    fig = semi_log_exp(P0, k, 10, "Semi-log samples")
    overview = (
        f"Semi-log slope $\\approx{fmt(slope,6)}$ recovers $k={fmt(k)}$. "
        f"Equal time steps give equal ratios $y_{{t+\\Delta}}/y_t=e^{{k\\Delta}}\\approx{fmt(ratio,4)}$."
    )
    return make_task(
        title="Rebuild — semi-log table forces and equal-ratio check",
        context=(
            "A continuous exponential stock is sampled at three times (table). "
            "The figure shows the semi-log path. Rebuild the force from the outer samples."
        ),
        statements=[
            rf"The semi-log slope between $t={fmt(ts[0])}$ and $t={fmt(ts[2])}$ equals the continuous force $k={fmt(k)}$.",
            rf"The initial level is $P_0=600$.",
            rf"The discrete model $y(t)=P_0(1+{fmt(k)})^{{t}}$ matches the continuous path for all $t$.",
            r"Doubling time is strictly less than $10$ years.",
            rf"The growth ratio $y({fmt(ts[1])})/y({fmt(ts[0])})$ equals $y({fmt(ts[2])})/y({fmt(ts[1])})$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"\frac{{\ln y({fmt(ts[2])})-\ln y({fmt(ts[0])})}}{{{fmt(ts[2]-ts[0])}}}\\approx{fmt(slope,6)}"),
                close(True, "Outer semi-log slope recovers $k$"),
            ],
            [
                D(rf"P_0=y(0)={fmt(P0)}\neq 600"),
                close(False, "The initial level is $500$, not $600$"),
            ],
            [
                D(rf"1+k={fmt(1+k)},\qquad e^{{k}}\\approx{fmt(math.exp(k),6)}"),
                close(False, "Discrete base $1+k$ is not the continuous multiplier $e^{k}$"),
            ],
            [
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k}}\\approx{fmt(ln(2)/k)}"),
                D(rf"{fmt(ln(2)/k)}\not< 10"),
                close(False, "Doubling takes about $15.4$ years"),
            ],
            [
                "Equal time steps on a pure exponential give equal ratios.",
                D(rf"\frac{{y(4)}}{{y(0)}}=e^{{4k}}=\frac{{y(8)}}{{y(4)}}\\approx{fmt(ratio,4)}"),
                close(True, "The two successive ratios match"),
            ],
        ],
        overview=overview,
        stem_kind="rebuild",
        figure=fig,
        tables_markdown=table,
    )


def t20_applied_letter_two_funds() -> dict:
    """Two letter-parameter funds; cross and log time. 5 true."""
    # Fund A: A e^{αt}, Fund B: B e^{βt} with A=B e^{γ}, α=β+δ, concrete
    A, alpha, B, beta = 800.0, 0.04, 1200.0, 0.02
    t_meet = ln(B / A) / (alpha - beta)
    # All carefully true with these numbers:
    # A: t_meet = ln(B/A)/(α-β) True
    # B: t_meet > 0 True (B>A, α>β)
    # C: after meet A overtakes (α>β) True
    # D: ln(A(t)/B(t)) = ln(A/B)+(α-β)t True
    # E: at t=0, B>A True
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert t_meet > 0
    fig = competing_populations(A, alpha, B, beta, t_meet + 10, "Two letter-parameter funds")
    overview = (
        f"Funds $A(t)={fmt(A)}e^{{{fmt(alpha)}t}}$, $B(t)={fmt(B)}e^{{{fmt(beta)}t}}$. "
        f"Crossing $t^*=\\ln(B/A)/(\\alpha-\\beta)\\approx{fmt(t_meet)}$; "
        f"thereafter $A$ leads because $\\alpha>\\beta$."
    )
    return make_task(
        title="Applied letters — two funds, log crossing, and who leads after",
        context=(
            f"Fund $A$ follows $A(t)=A_0 e^{{\\alpha t}}$ and fund $B$ follows "
            f"$B(t)=B_0 e^{{\\beta t}}$ with $A_0={fmt(A)}$, $\\alpha={fmt(alpha)}$, "
            f"$B_0={fmt(B)}$, $\\beta={fmt(beta)}$."
        ),
        statements=[
            r"The funds meet at $t^{*}=\dfrac{\ln(B_0/A_0)}{\alpha-\beta}$.",
            r"That meeting time is strictly positive.",
            r"For every $t>t^{*}$, fund $A$ strictly exceeds fund $B$.",
            r"$\ln(A(t)/B(t))=\ln(A_0/B_0)+(\alpha-\beta)t$ for every $t$.",
            r"At $t=0$, fund $B$ strictly exceeds fund $A$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Set $A_0 e^{\\alpha t}=B_0 e^{\\beta t}$ and take logs.",
                D(r"t^{*}=\frac{\ln(B_0/A_0)}{\alpha-\beta}"),
                close(True, "The log crossing formula matches the claim"),
            ],
            [
                D(rf"t^{{*}}\\approx{fmt(t_meet)}>0"),
                close(True, "Because $B_0>A_0$ and $\\alpha>\\beta$, the crossing is in the future"),
            ],
            [
                "After the crossing the higher force dominates.",
                D(rf"\alpha-\beta={fmt(alpha-beta)}>0"),
                "so $A(t)/B(t)$ is strictly increasing through $1$ at $t^{*}$.",
                close(True, "Fund $A$ leads for all later times"),
            ],
            [
                D(r"\ln\frac{A(t)}{B(t)}=\ln\frac{A_0}{B_0}+(\alpha-\beta)t"),
                close(True, "Log-quotient is affine in $t$ with slope $\\alpha-\\beta$"),
            ],
            [
                D(rf"B_0={fmt(B)}>A_0={fmt(A)}"),
                close(True, "Initially $B$ is larger"),
            ],
        ],
        overview=overview,
        stem_kind="applied_letter",
        figure=fig,
    )


# ---- Cycle 3 ---------------------------------------------------------------


def t21_hybrid_piece_and_elasticity() -> dict:
    """Piecewise stock + elasticity on a drifting price. 4 true."""
    P0, k1, T, k2 = 1000.0, 0.05, 4.0, 0.02
    b, g = 1.5, 0.03
    fT = P0 * math.exp(k1 * T)
    ft = fT * math.exp(k2 * 6)  # at t=T+6=10
    t = T + 6
    qf = -b * g
    # A: ln(f(t)/P0)=k1 T + k2(t-T) True
    # B: avg force > 0.03 True? avg=(0.05*4+0.02*6)/10=0.32/10=0.032>0.03 True
    # C: qf = -bg True
    # D: demand inelastic False (b=1.5>1)
    # E: f(t)>1.5 P0 True? e^{0.32}≈1.377 <1.5 False
    # Wait need 4 true — E false is good. D false. A,B,C true only 3.
    # Change E: f(t)>1.3 P0 — e^{0.32}≈1.377>1.3 True
    key = [True, True, True, False, True]
    assert sum(key) == 4
    avg = (k1 * T + k2 * (t - T)) / t
    assert avg > 0.03 and math.exp(avg * t) > 1.3
    fig = piecewise_kink(P0, k1, T, k2, t, "Piecewise stock beside price drift")
    overview = (
        f"Piecewise log-increment $k_1 T+k_2(t-T)={fmt(k1*T+k2*(t-T))}$, "
        f"$\\bar k\\approx{fmt(avg,6)}$. Quantity force $-bg={fmt(qf,6)}$."
    )
    return make_task(
        title="Hybrid — piecewise stock force beside constant-elasticity demand",
        context=(
            f"A stock starts at $P_0={fmt(P0)}$, grows at force $k_1={fmt(k1)}$ until "
            f"$t={fmt(T)}$, then at force $k_2={fmt(k2)}$. Separately prices drift at "
            f"force $g={fmt(g)}$ with demand elasticity magnitude $b={fmt(b)}$. "
            f"Read the stock at horizon $t={fmt(t)}$."
        ),
        statements=[
            rf"$\ln(f({fmt(t)})/P_0)$ equals $k_1 T+k_2(t-T)$ exactly.",
            rf"The average stock force $\bar k=\ln(f({fmt(t)})/P_0)/{fmt(t)}$ exceeds $0.03$.",
            rf"Quantity's continuous force equals $-{fmt(b)}\cdot{fmt(g)}$.",
            r"Demand is price-inelastic ($b<1$).",
            rf"At $t={fmt(t)}$ the stock exceeds $1.3$ times $P_0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"f(t)=P_0 e^{k_1 T}e^{k_2(t-T)}"),
                D(rf"\ln(f(t)/P_0)=k_1 T+k_2(t-T)={fmt(k1*T+k2*(t-T))}"),
                close(True, "Logs add across the kink"),
            ],
            [
                D(rf"\bar k\\approx{fmt(avg,6)}>0.03"),
                close(True, "Path-average force clears $0.03$"),
            ],
            [
                D(rf"\frac{{d\ln Q}}{{dt}}=-bg={fmt(qf,6)}"),
                close(True, "Constant elasticity converts price force into quantity force"),
            ],
            [
                D(rf"b={fmt(b)}>1"),
                close(False, "Demand is elastic"),
            ],
            [
                D(rf"f(t)=P_0 e^{{\bar k t}}\\approx{fmt(P0*math.exp(avg*t))}"),
                D(rf"1.3 P_0={fmt(1.3*P0)}"),
                close(True, "The stock clears the $1.3$ threshold"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t22_graph_semi_log_trap() -> dict:
    """Semi-log graph reading traps. 1 true."""
    P0, k = 2000.0, 0.02
    # A: semi-log is straight True — only one true
    # B: slope equals P0 False
    # C: intercept of ln y is ln P0, claim =P0 False
    # D: at t=ln2/k, y=4 P0 False (is 2 P0)
    # E: discrete same slope False
    key = [True, False, False, False, False]
    assert sum(key) == 1
    fig = semi_log_exp(P0, k, 40, "Semi-log of a pure exponential")
    overview = (
        f"$\\ln y(t)=\\ln P_0+kt$ with $P_0={fmt(P0)}$, $k={fmt(k)}$ is affine; "
        f"slope $k$, intercept $\\ln P_0\\approx{fmt(ln(P0),4)}$."
    )
    return make_task(
        title="Graph — semi-log straightness and three tempting misreads",
        context=(
            f"A level $y(t)=P_0 e^{{kt}}$ with $P_0={fmt(P0)}$ and $k={fmt(k)}$ is plotted "
            f"on a semi-log chart (figure): vertical axis $\\ln y$, horizontal axis $t$."
        ),
        statements=[
            r"The semi-log graph is a straight line.",
            rf"The slope of that line equals $P_0={fmt(P0)}$.",
            rf"The vertical intercept of $\ln y$ equals $P_0$.",
            rf"At $t=\ln 2/k$ the level equals $4P_0$.",
            rf"The discrete path $P_0(1+{fmt(k)})^{{t}}$ shares the same semi-log slope $k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln y(t)=\ln P_0+kt"),
                close(True, "An affine function of $t$ is a straight semi-log graph"),
            ],
            [
                D(rf"\mathrm{{slope}}=k={fmt(k)}\neq P_0"),
                close(False, "Slope is the force, not the initial level"),
            ],
            [
                D(rf"\ln y(0)=\ln P_0\\approx{fmt(ln(P0),4)}\neq P_0"),
                close(False, "The intercept is $\\ln P_0$, not $P_0$"),
            ],
            [
                D(r"y(\ln 2/k)=P_0 e^{\ln 2}=2P_0\neq 4P_0"),
                close(False, "That clock is doubling, not quadrupling"),
            ],
            [
                D(rf"\ln\bigl(P_0(1+k)^{{t}}\bigr)=\ln P_0+t\ln(1+k)"),
                D(rf"\ln(1+k)\\approx{fmt(ln(1+k),6)}\neq k"),
                close(False, "Discrete semi-log slope is $\\ln(1+k)$, not $k$"),
            ],
        ],
        overview=overview,
        stem_kind="graph",
        figure=fig,
    )


def t23_table_cont_disc_ratios() -> dict:
    """Table of cont vs disc balances; log returns. 5 true."""
    P, r, years = 1000.0, 0.05, [1.0, 5.0, 10.0]
    rows = []
    for t in years:
        rows.append((t, P * math.exp(r * t), P * (1 + r) ** t))
    t = 10.0
    Ac, Ad = rows[-1][1], rows[-1][2]
    # All true:
    # A: Ac>Ad at t=10 True
    # B: ln(Ac/P)=r t True
    # C: ln(Ad/P)/t = ln(1+r) < r True
    # D: cont reaches Ad before t=10 True
    # E: relative gap Ac/Ad -1 > 0 True
    key = [True, True, True, True, True]
    assert sum(key) == 5
    t_star = ln(Ad / P) / r
    assert t_star < t and Ac > Ad
    table = md_table(
        ["$t$", "$A_c=Pe^{rt}$", "$A_d=P(1+r)^{t}$"],
        [[f"${fmt(t)}$", f"${fmt(ac,2)}$", f"${fmt(ad,2)}$"] for t, ac, ad in rows],
    )
    fig = svg_exp(P0=P, k=r, tmax=10, title="Continuous vs annual", discrete_r=r, mark_t=10)
    overview = (
        f"At $t={fmt(t)}$: $A_c\\approx{fmt(Ac,2)}$, $A_d\\approx{fmt(Ad,2)}$. "
        f"Continuous time to match $A_d$ is $t^*\\approx{fmt(t_star)}$. "
        f"Average discrete force $\\ln(1+r)\\approx{fmt(ln(1+r),6)}$."
    )
    return make_task(
        title="Table — continuous versus annual balances and log returns",
        context=(
            f"Principal $P={fmt(P)}$ at nominal rate $r={fmt(r)}$. The table compares "
            f"continuous $A_c=Pe^{{rt}}$ with annual $A_d=P(1+r)^{t}$. The figure overlays both."
        ),
        statements=[
            rf"At $t={fmt(t)}$, continuous compounding exceeds annual compounding.",
            rf"$\ln(A_c/P)$ at $t={fmt(t)}$ equals $rt$ exactly.",
            rf"The average continuous force implied by $A_d$, namely $\ln(A_d/P)/{fmt(t)}$, is strictly less than $r$.",
            rf"The continuous model reaches the annual model's ${fmt(t)}$-year balance in strictly less than ${fmt(t)}$ years.",
            r"The continuous balance exceeds the annual balance (strict inequality of levels).",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"A_c\\approx{fmt(Ac,2)}>A_d\\approx{fmt(Ad,2)}"),
                close(True, "Continuous wins at the shared horizon"),
            ],
            [
                D(r"\ln(A_c/P)=\ln(e^{rt})=rt"),
                close(True, "Log-return of continuous compounding is exactly $rt$"),
            ],
            [
                D(rf"\frac{{\ln(A_d/P)}}{{t}}=\ln(1+r)\\approx{fmt(ln(1+r),6)}<{fmt(r)}"),
                close(True, "Strict concavity of $\\ln$ forces $\\ln(1+r)<r$"),
            ],
            [
                D(rf"t^*=\frac{{\ln(A_d/P)}}{{r}}\\approx{fmt(t_star)}<{fmt(t)}"),
                close(True, "Continuous compounding hits the annual terminal early"),
            ],
            [
                D(rf"A_c-A_d\\approx{fmt(Ac-Ad,2)}>0"),
                close(True, "Levels differ strictly"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        figure=fig,
        tables_markdown=table,
    )


def t24_symbolic_log_identities() -> dict:
    """Symbolic exp/log identities with a growth side-condition. 3 true."""
    # A: ln(e^{kt})=kt True
    # B: e^{ln u}=u for u>0 True
    # C: ln(uv)=ln u + ln v True
    # D: ln(u+v)=ln u + ln v False
    # E: (e^k)^t = e^{k+t} False (=e^{kt})
    key = [True, True, True, False, False]
    assert sum(key) == 3
    overview = (
        "Standard identities: $\\ln(e^{kt})=kt$, $e^{\\ln u}=u$ ($u>0$), "
        "$\\ln(uv)=\\ln u+\\ln v$. Sums and the false exponent rule break."
    )
    return make_task(
        title="Symbolic — which exp/log identities survive beside growth",
        context=(
            r"Let $k$ be a real force and $t$ a real time. Let $u,v>0$ be positive levels. "
            r"Judge each identity claim on its own."
        ),
        statements=[
            r"$\ln(e^{kt})=kt$ for every real $k,t$.",
            r"$e^{\ln u}=u$ for every $u>0$.",
            r"$\ln(uv)=\ln u+\ln v$ for every $u,v>0$.",
            r"$\ln(u+v)=\ln u+\ln v$ for every $u,v>0$.",
            r"$(e^{k})^{t}=e^{k+t}$ for every real $k,t$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Natural log undoes the exponential.",
                D(r"\ln(e^{kt})=kt"),
                close(True, "This is the defining inverse identity"),
            ],
            [
                D(r"e^{\ln u}=u\qquad(u>0)"),
                close(True, "Exponential undoes the natural log on $(0,\\infty)$"),
            ],
            [
                D(r"\ln(uv)=\ln u+\ln v"),
                close(True, "Log turns products into sums"),
            ],
            [
                "Counter-example: $u=v=e$ gives $\\ln(2e)=\\ln 2+1$ while $\\ln u+\\ln v=2$.",
                D(r"\ln 2+1\neq 2"),
                close(False, "Logs do not linearise sums"),
            ],
            [
                D(r"(e^{k})^{t}=e^{kt}\neq e^{k+t}"),
                close(False, "Exponents multiply under powering, they do not add that way"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
    )


def t25_parametric_domain_side() -> dict:
    """Parametric exp model with log domain side-conditions. 2 true."""
    # N(t)=A e^{kt} with A>0,k real; require ln(A-1) defined ⇒ A>1; and ln(2-k) defined ⇒ k<2
    # Pick A=e, k=0.5 — both ok
    A, k = math.e, 0.5
    # A: A>1 True
    # B: k<2 True
    # C: ln(A-1)=0 ⇒ A-1=1 ⇒ A=2 False (A=e)
    # D: domain of ln(2-k) needs k<2, claim k>2 False
    # E: N(0)=A True — would be 3rd true. Claim N(0)=1 False
    key = [True, True, False, False, False]
    assert sum(key) == 2
    overview = (
        f"Side-conditions $\\ln(A-1)$ and $\\ln(2-k)$ force $A>1$ and $k<2$. "
        f"Here $A=e$ and $k={fmt(k)}$ obey both; $\\ln(A-1)=\\ln(e-1)\\neq 0$."
    )
    return make_task(
        title="Parametric — log domain side-conditions on an exponential stock",
        context=(
            r"A stock $N(t)=A e^{kt}$ carries auxiliary log expressions $\ln(A-1)$ and "
            r"$\ln(2-k)$ that must be defined in the reals. Suppose the calibrated "
            r"pair is $A=e$ and $k=\dfrac{1}{2}$."
        ),
        statements=[
            r"The calibrated level satisfies $A>1$.",
            r"The calibrated force satisfies $k<2$.",
            r"$\ln(A-1)=0$.",
            r"The expression $\ln(2-k)$ requires $k>2$ as a domain condition.",
            r"$N(0)=1$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"A=e>1"),
                close(True, "The level clears the domain threshold for $\\ln(A-1)$"),
            ],
            [
                D(r"k=\tfrac12<2"),
                close(True, "The force sits below the domain threshold for $\\ln(2-k)$"),
            ],
            [
                D(r"\ln(A-1)=\ln(e-1)\neq 0"),
                close(False, "$e-1\\neq 1$, so the log is not zero"),
            ],
            [
                "Natural log $\\ln(2-k)$ needs $2-k>0$, i.e. $k<2$.",
                close(False, "The domain inequality runs $k<2$, not $k>2$"),
            ],
            [
                D(r"N(0)=A=e\neq 1"),
                close(False, "Initial stock equals $A=e$, not $1$"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
    )


def t26_piecewise_wrong_average() -> dict:
    """Piecewise with a false average-force claim. 1 true."""
    P0, k1, T, k2, t = 900.0, 0.07, 2.0, 0.03, 8.0
    ft = P0 * math.exp(k1 * T) * math.exp(k2 * (t - T))
    avg_true = (k1 * T + k2 * (t - T)) / t
    avg_wrong = (k1 + k2) / 2
    # A: ln(f/P0)=k1T+k2(t-T) True — only one
    # B: avg = (k1+k2)/2 False
    # C: k2>k1 False
    # D: f(t)<P0 False (growth)
    # E: hit of 2P0 uses only k1 False
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(avg_true - avg_wrong) > 1e-6 and ft > P0 and k2 < k1
    fig = piecewise_kink(P0, k1, T, k2, t, "Piecewise path vs naive average")
    overview = (
        f"True average $\\bar k={fmt(avg_true,6)}$ from weighted forces; "
        f"naive $(k_1+k_2)/2={fmt(avg_wrong,6)}$ differs. "
        f"$f({fmt(t)})\\approx{fmt(ft)}$."
    )
    return make_task(
        title="Piecewise — true log-average versus arithmetic mean of forces",
        context=(
            f"A fund starts at $P_0={fmt(P0)}$, grows at force $k_1={fmt(k1)}$ until "
            f"$t={fmt(T)}$, then at force $k_2={fmt(k2)}$ through horizon $t={fmt(t)}$."
        ),
        statements=[
            rf"$\ln(f({fmt(t)})/P_0)$ equals $k_1 T+k_2(t-T)$ exactly.",
            rf"The path-average force equals $(k_1+k_2)/2={fmt(avg_wrong)}$.",
            r"The late force is strictly larger than the early force.",
            rf"At $t={fmt(t)}$ the fund lies strictly below $P_0$.",
            rf"Doubling time from $P_0$ equals $\ln 2/k_1$ even after the switch.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"\ln(f(t)/P_0)=k_1 T+k_2(t-T)={fmt(k1*T+k2*(t-T))}"),
                close(True, "Logs add across segments"),
            ],
            [
                D(rf"\bar k=\frac{{k_1 T+k_2(t-T)}}{{t}}={fmt(avg_true,6)}\neq{fmt(avg_wrong)}"),
                close(False, "Time-weighted average is not the arithmetic mean of the two forces"),
            ],
            [
                D(rf"k_2={fmt(k2)}<k_1={fmt(k1)}"),
                close(False, "The late force is smaller"),
            ],
            [
                D(rf"f(t)\\approx{fmt(ft)}>P_0"),
                close(False, "Positive forces lift the fund above $P_0$"),
            ],
            [
                "After the switch the correct doubling solve uses both segments.",
                D(rf"\frac{{\ln 2}}{{k_1}}\\approx{fmt(ln(2)/k1)}"),
                "is only valid if $2P_0$ is reached before the kink — not guaranteed as a general rule.",
                close(False, "The constant-$k_1$ doubling clock ignores the switch"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t27_nested_double_log_growth() -> dict:
    """Nested double-log constraint on growth. 5 true."""
    # ln(ln A) = ln 2 ⇒ ln A = 2 ⇒ A = e^2
    # ln(ln (1/k)) = 0 ⇒ ln(1/k)=1 ⇒ 1/k=e ⇒ k=1/e
    A = math.exp(2)
    k = 1 / math.e
    t_hit = ln(A) / k  # grow from 1? Use N(t)=e^{kt} hit A: t=ln(A)/k=2e
    # Actually model N(t)=N0 e^{kt} with N0=1, hit A
    # A: A=e^2 True
    # B: k=e^{-1} True
    # C: t_hit = ln(A)/k = 2e True
    # D: ln(ln A)=ln 2 True
    # E: A k = e^2 / e = e True claim A k = e
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs(t_hit - 2 * math.e) < 1e-12
    overview = (
        f"Nested constraints give $A=e^{2}$, $k=e^{{-1}}$. "
        f"Hitting $A$ from $N(0)=1$ takes $t=\\ln A/k=2e\\approx{fmt(t_hit)}$."
    )
    return make_task(
        title="Nested — double-log constraints pinning level and force",
        context=(
            r"A normalised stock $N(t)=e^{kt}$ is aimed at a level $A>e$. The pair "
            r"$(A,k)$ satisfies $\ln(\ln A)=\ln 2$ and $\ln(\ln(1/k))=0$."
        ),
        statements=[
            r"$A=e^{2}$.",
            r"$k=e^{-1}$.",
            r"The hitting time of level $A$ equals $2e$.",
            r"$\ln(\ln A)=\ln 2$.",
            r"The product $Ak$ equals $e$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln(\ln A)=\ln 2\implies\ln A=2\implies A=e^{2}"),
                close(True, "Unwinding both logs pins $A=e^{2}$"),
            ],
            [
                D(r"\ln(\ln(1/k))=0\implies\ln(1/k)=1\implies 1/k=e\implies k=e^{-1}"),
                close(True, "The nested constraint on $1/k$ pins the force"),
            ],
            [
                D(r"t=\frac{\ln A}{k}=\frac{2}{e^{-1}}=2e"),
                close(True, "Hitting time is exactly $2e$"),
            ],
            [
                "This is the given constraint, already verified by $A=e^{2}$.",
                D(r"\ln(\ln e^{2})=\ln 2"),
                close(True, "The outer nested log recovers $\\ln 2$"),
            ],
            [
                D(r"Ak=e^{2}\cdot e^{-1}=e"),
                close(True, "The product collapses to $e$"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
    )


def t28_text_dense_inverse_traps() -> dict:
    """Text-dense inverse/exp traps with a growth model. 2 true."""
    P, k = 50.0, 0.1
    # f(t)=P e^{kt}; g inverse
    # A: g(2P)=ln2/k True
    # B: g(P)=0 True
    # C: g(-1) defined False
    # D: f(g(y))=y for y=-3 False (not in range)
    # E: g(f(3))=3 True — would be 3rd. Claim g(f(3))=1/k False
    key = [True, True, False, False, False]
    assert sum(key) == 2
    overview = (
        f"Inverse of $f(t)={fmt(P)}e^{{{fmt(k)}t}}$ is "
        f"$g(y)=\\frac{{1}}{{{fmt(k)}}}\\ln(y/{fmt(P)})$ on $(0,\\infty)$; "
        f"$g(2P)=\\ln 2/k$, $g(P)=0$."
    )
    return make_task(
        title="Text-dense — inverse clock traps beside exponential growth",
        context=(
            f"Let $f(t)=P e^{{kt}}$ with $P={fmt(P)}$ and $k={fmt(k)}$, and let $g$ be its inverse."
        ),
        statements=[
            rf"$g(2P)=\dfrac{{\ln 2}}{{{fmt(k)}}}$.",
            r"$g(P)=0$.",
            r"$g(-1)$ is defined as a real number.",
            r"$f(g(y))=y$ holds for $y=-3$.",
            rf"$g(f(3))=\dfrac{{1}}{{{fmt(k)}}}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"g(2P)=\frac{{1}}{{k}}\ln 2=\frac{{\ln 2}}{{{fmt(k)}}}"),
                close(True, "Doubling the level takes time $\\ln 2/k$"),
            ],
            [
                D(r"g(P)=\frac{1}{k}\ln 1=0"),
                close(True, "The inverse of the initial level is time zero"),
            ],
            [
                "Range of $f$ is $(0,\\infty)$; $-1$ is outside.",
                close(False, "$g(-1)$ is not real-defined"),
            ],
            [
                "Right-inverse identity needs $y>0$.",
                close(False, "$y=-3$ is not in the range of $f$"),
            ],
            [
                D(r"g(f(3))=3"),
                D(rf"3\neq\frac{{1}}{{{fmt(k)}}}"),
                close(False, "Left inverse returns the original time $3$"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
    )


def t29_rebuild_two_obs_cross() -> dict:
    """Rebuild two forces from observations; compare crossing. 3 true."""
    # A observed (0,1000),(5,1000*e^{0.03*5}); B observed (0,1500),(5,1500*e^{0.01*5})
    A0, kA, B0, kB, t_obs = 1000.0, 0.03, 1500.0, 0.01, 5.0
    A5 = A0 * math.exp(kA * t_obs)
    B5 = B0 * math.exp(kB * t_obs)
    kA_hat = ln(A5 / A0) / t_obs
    kB_hat = ln(B5 / B0) / t_obs
    t_meet = ln(B0 / A0) / (kA_hat - kB_hat)
    # A: kA_hat=0.03 True; B: kB_hat=0.01 True; C: meet>0 True;
    # D: meet < t_obs False (t_meet=ln(1.5)/0.02≈20.27); E: A5>B5 False
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert abs(kA_hat - kA) < 1e-12 and t_meet > t_obs and A5 < B5
    table = md_table(
        ["series", f"$t=0$", f"$t={fmt(t_obs)}$"],
        [
            ["$A$", f"${fmt(A0)}$", f"${fmt(A5,2)}$"],
            ["$B$", f"${fmt(B0)}$", f"${fmt(B5,2)}$"],
        ],
    )
    fig = competing_populations(A0, kA, B0, kB, 30, "Rebuilt forces and future cross")
    overview = (
        f"Rebuilt $k_A\\approx{fmt(kA_hat,6)}$, $k_B\\approx{fmt(kB_hat,6)}$. "
        f"Meeting $t^*\\approx{fmt(t_meet)}$ lies after the observation window."
    )
    return make_task(
        title="Rebuild — two series, two forces, one future crossing",
        context=(
            "Two continuous exponential series $A$ and $B$ are each observed at two times "
            "(table). Rebuild both forces, then locate their crossing."
        ),
        statements=[
            rf"The rebuilt force of $A$ equals ${fmt(kA)}$.",
            rf"The rebuilt force of $B$ equals ${fmt(kB)}$.",
            r"The implied meeting time is strictly positive.",
            rf"The meeting occurs strictly before $t={fmt(t_obs)}$.",
            rf"At $t={fmt(t_obs)}$, series $A$ already exceeds series $B$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"k_A=\frac{{\ln(A({fmt(t_obs)})/A(0))}}{{{fmt(t_obs)}}}={fmt(kA_hat,6)}"),
                close(True, "Log recovery returns force $0.03$"),
            ],
            [
                D(rf"k_B=\frac{{\ln(B({fmt(t_obs)})/B(0))}}{{{fmt(t_obs)}}}={fmt(kB_hat,6)}"),
                close(True, "Log recovery returns force $0.01$"),
            ],
            [
                D(rf"t^*=\frac{{\ln(B_0/A_0)}}{{k_A-k_B}}\\approx{fmt(t_meet)}>0"),
                close(True, "A future crossing exists"),
            ],
            [
                D(rf"t^*\\approx{fmt(t_meet)}>{fmt(t_obs)}"),
                close(False, "The crossing lies after the observation window"),
            ],
            [
                D(rf"A({fmt(t_obs)})\\approx{fmt(A5,2)},\qquad B({fmt(t_obs)})\\approx{fmt(B5,2)}"),
                close(False, "At the second observation $B$ is still larger"),
            ],
        ],
        overview=overview,
        stem_kind="rebuild",
        figure=fig,
        tables_markdown=table,
    )


def t30_applied_letter_gdp_nested() -> dict:
    """GDP letters with nested log side-condition on rates. 4 true."""
    # g and p with ln(g/p)=ln 3 ⇒ g=3p; pick p=0.01, g=0.03
    p, g, t = 0.01, 0.03, 25.0
    Y0, N0 = 120.0, 8.0
    k = g - p
    # A: g=3p True; B: k=0.02 True; C: Δln y = k t = 0.5 True;
    # D: Δln y > Δln N True (0.5 > 0.25); E: g+p = k False
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert abs(g / p - 3) < 1e-12 and abs(k * t - 0.5) < 1e-12
    fig = gdp_per_capita(Y0 * 1000, g, N0, p, t, "Letter GDP with nested rate link")
    overview = (
        f"Constraint $\\ln(g/p)=\\ln 3$ forces $g=3p$. With $p={fmt(p)}$, "
        f"$g={fmt(g)}$, $k=g-p={fmt(k)}$, $\\Delta\\ln y={fmt(k*t)}$ over $t={fmt(t)}$."
    )
    return make_task(
        title="Applied letters — nested log link between GDP and population forces",
        context=(
            f"GDP and population forces $g$ and $p$ satisfy the nested-log link "
            f"$\\ln(g/p)=\\ln 3$, with $p={fmt(p)}$. Horizon $t={fmt(t)}$, "
            f"initial levels $Y_0={fmt(Y0)}$, $N_0={fmt(N0)}$."
        ),
        statements=[
            r"$g=3p$.",
            rf"The per-capita force equals ${fmt(k)}$.",
            rf"Over the horizon, $\Delta\ln y$ equals ${fmt(k*t)}$.",
            r"Over the horizon, $\Delta\ln y$ strictly exceeds $\Delta\ln N$.",
            r"The per-capita force equals $g+p$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln(g/p)=\ln 3\implies g/p=3\implies g=3p"),
                close(True, "The nested log link collapses to $g=3p$"),
            ],
            [
                D(rf"k=g-p={fmt(g)}-{fmt(p)}={fmt(k)}"),
                close(True, "Per-capita force is the difference"),
            ],
            [
                D(rf"\Delta\ln y=kt={fmt(k*t)}"),
                close(True, "Log per-capita change is force times horizon"),
            ],
            [
                D(rf"\Delta\ln y={fmt(k*t)},\qquad \Delta\ln N=pt={fmt(p*t)}"),
                D(rf"{fmt(k*t)}>{fmt(p*t)}"),
                close(True, "Per-capita log-growth outpaces population log-growth"),
            ],
            [
                D(rf"g+p={fmt(g+p)}\neq k={fmt(k)}"),
                close(False, "Sums of forces do not give per-capita force"),
            ],
        ],
        overview=overview,
        stem_kind="applied_letter",
        figure=fig,
    )


BUILDERS = [
    t01_hybrid_piecewise_hit,
    t02_graph_two_populations,
    t03_table_recover_force,
    t04_symbolic_inverse_growth,
    t05_parametric_nested_log,
    t06_piecewise_domain_side,
    t07_nested_log_exp_params,
    t08_text_dense_microtraps,
    t09_rebuild_from_observations,
    t10_applied_gdp_letters,
    t11_hybrid_cont_disc_hit,
    t12_graph_decay_vs_invest,
    t13_table_elasticity_stock,
    t14_symbolic_change_base,
    t15_parametric_family_force,
    t16_piecewise_gdp_switch,
    t17_nested_inverse_constraints,
    t18_text_dense_mixed_clocks,
    t19_rebuild_semi_log_table,
    t20_applied_letter_two_funds,
    t21_hybrid_piece_and_elasticity,
    t22_graph_semi_log_trap,
    t23_table_cont_disc_ratios,
    t24_symbolic_log_identities,
    t25_parametric_domain_side,
    t26_piecewise_wrong_average,
    t27_nested_double_log_growth,
    t28_text_dense_inverse_traps,
    t29_rebuild_two_obs_cross,
    t30_applied_letter_gdp_nested,
]


def build_mixed_tasks() -> list[dict]:
    """Return exactly 30 hard mixed-exam task dicts for subsection 10.3."""
    assert len(BUILDERS) == MIXED_COUNT == len(PLANNED_TRUTHS)
    tasks: list[dict] = []
    for i, builder in enumerate(BUILDERS):
        task = builder()
        assert task["stem_kind"] == STEMS[i % len(STEMS)], (i, task["stem_kind"])
        got = sum(1 for v in task["answer_key"] if v)
        assert got == PLANNED_TRUTHS[i], (i, builder.__name__, got, PLANNED_TRUTHS[i])
        assert TAIL in task["context"]
        assert len(task["statements"]) == 5
        assert len(task["tactical_explanations"]) == 5
        for j, ex in enumerate(task["tactical_explanations"]):
            letter = LETTERS[j]
            verd = "True" if task["answer_key"][j] else "False"
            assert ex.startswith(f"**{letter}.** → {verd}"), (i, j, ex[:60])
            assert ex.rstrip().endswith(f"So the statement is {verd}."), (i, j)
            # KaTeX-safety: no double-escaped neq/commands in output
            assert r"\\\\neq" not in ex
            assert r"\\\\ln" not in ex
        blob = json_safe_blob(task)
        assert r"\\\\neq" not in blob
        tasks.append(task)

    assert len(tasks) == MIXED_COUNT
    truths = [sum(1 for v in t["answer_key"] if v) for t in tasks]
    hist = Counter(truths)
    assert all(hist[k] == 6 for k in range(1, 6)), dict(hist)
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert all(kinds[k] == 3 for k in STEMS), dict(kinds)
    with_viz = sum(1 for t in tasks if t.get("figure") or t.get("tables_markdown"))
    assert with_viz >= MIXED_COUNT / 2, with_viz
    return tasks


def json_safe_blob(task: dict) -> str:
    parts = [
        task["title"],
        task["context"],
        task["solution_overview"],
        *task["statements"],
        *task["tactical_explanations"],
    ]
    if task.get("tables_markdown"):
        parts.append(task["tables_markdown"])
    return "\n".join(parts)


if __name__ == "__main__":
    ts = build_mixed_tasks()
    viz = sum(1 for t in ts if t.get("figure") or t.get("tables_markdown"))
    tabs = sum(1 for t in ts if t.get("tables_markdown"))
    figs = sum(1 for t in ts if t.get("figure"))
    print(f"OK {len(ts)} tasks; figures={figs} tables={tabs} viz={viz}")
    print("true_hist", dict(sorted(Counter(sum(t['answer_key']) for t in ts).items())))
    print("stems", dict(Counter(t["stem_kind"] for t in ts)))
