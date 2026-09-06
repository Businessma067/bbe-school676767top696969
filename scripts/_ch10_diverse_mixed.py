#!/usr/bin/env python3
"""Hard mixed-exam builders for Chapter 10.3 (exponential + logarithmic mashup).

Exports:
  MIXED_COUNT = 30
  build_mixed_tasks() -> list[dict]   # exactly 30 hard 5/5 final-exam mashups

Final-exam feel: piecewise continuous forces, recover k from tables then
compare doubling / thresholds, nested exp∘log and log∘exp, competing
populations, change-of-base inside inequalities, hybrid graph+equation stems.
Letters are Ch7/Ch9 tactical write-ups; solution_overview holds shared recovery.
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


_OVERESC = re.compile(r"\\\\([A-Za-z]+)")


def fix_overescaped_latex(s: str) -> str:
    """Collapse rf-string over-escapes like \\\\approx → \\approx."""
    prev = None
    while prev != s:
        prev = s
        s = _OVERESC.sub(r"\\\1", s)
    return s


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
        body = (
            body.rstrip(".")
            + ".\n\nSo the statement is "
            + ("True" if truth else "False")
            + "."
        )
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
    teas = [
        fix_overescaped_latex(pack(LETTERS[i], answer_key[i], bodies[i]))
        for i in range(5)
    ]
    out: dict[str, Any] = {
        "title": title,
        "context": fix_overescaped_latex(ensure_tail(context)),
        "statements": [fix_overescaped_latex(s) for s in statements],
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": fix_overescaped_latex(overview.strip()),
        "stem_kind": stem_kind,
    }
    if figure:
        out["figure"] = figure
    if tables_markdown:
        out["tables_markdown"] = fix_overescaped_latex(tables_markdown)
    return out


# =============================================================================
# Task builders — brand-new hard exam mashups (no trivial graph/table reads).
# =============================================================================


def t01_hybrid_piecewise_thresholds() -> dict:
    """Piecewise force + log hit + false constant-rate and change-of-base clocks. 2 true."""
    A, alpha, beta = 1024.0, ln(2) / 8.0, ln(2) / 16.0
    tau = ln(2) / alpha  # = 8
    M = 4.0 * A  # needs two more doublings after start; one happens by tau
    f_tau = A * math.exp(alpha * tau)  # 2A
    t_hit = tau + ln(M / f_tau) / beta  # tau + ln2/beta = 8+16=24
    avg = (alpha * tau + beta * (t_hit - tau)) / t_hit
    t_alpha = ln(M / A) / alpha  # pretends no switch
    cob_wrong = math.log(M / A, 2) / beta  # change-of-base misuse
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(tau - 8) < 1e-12 and abs(t_hit - 24) < 1e-9
    assert abs(A * math.exp(avg * t_hit) - M) < 1e-6
    assert t_alpha < t_hit and cob_wrong != t_hit and f_tau < M

    fig = piecewise_kink(A, alpha, tau, beta, t_hit + 4, "Piecewise path vs target M")
    overview = (
        f"With $\\alpha\\tau=\\ln 2$, $f(\\tau)=2A$. Target $M=4A$ forces "
        f"$t_{{\\mathrm{{hit}}}}=\\tau+\\ln 2/\\beta={fmt(t_hit)}$. "
        f"Path-average $\\bar k=\\ln(M/A)/t_{{\\mathrm{{hit}}}}={fmt(avg,6)}$. "
        f"Constant-$\\alpha$ mis-clock $t_\\alpha={fmt(t_alpha)}$; "
        f"mis-scaled change-of-base $\\log_2(M/A)/\\beta={fmt(cob_wrong)}$."
    )
    return make_task(
        title="Hybrid — piecewise hit, path-average force, and two false clocks",
        context=(
            f"A fund starts at $A={fmt(A)}$, grows at continuous force "
            f"$\\alpha=\\ln 2/8$ until $t=\\tau$ with $\\alpha\\tau=\\ln 2$, then at "
            f"force $\\beta=\\ln 2/16$. Target level $M=4A$. The figure shows the path."
        ),
        statements=[
            r"The target is reached strictly after the rate switch, at $t_{\mathrm{hit}}=\tau+\ln 2/\beta$.",
            r"The path-average force $\bar k=\ln(M/A)/t_{\mathrm{hit}}$ reproduces $f(t_{\mathrm{hit}})=M$.",
            r"The hitting time equals $\ln(M/A)/\alpha$ (constant early force, no switch).",
            r"The hitting time equals $\log_2(M/A)/\beta$.",
            r"At the switch the fund already meets or exceeds $M$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Chain the segments and solve $f(t)=M$ in the late regime.",
                D(r"f(\tau)=A e^{\alpha\tau}=2A"),
                D(rf"t_{{\mathrm{{hit}}}}=\tau+\frac{{\ln(M/(2A))}}{{\beta}}=\tau+\frac{{\ln 2}}{{\beta}}={fmt(t_hit)}"),
                D(rf"{fmt(t_hit)}>\tau={fmt(tau)}"),
                close(True, "The hit sits strictly after the switch at the claimed clock"),
            ],
            [
                "Average force is total log-increment per unit time.",
                D(rf"\bar k=\frac{{\ln(M/A)}}{{t_{{\mathrm{{hit}}}}}}=\frac{{\ln 4}}{{{fmt(t_hit)}}}={fmt(avg,6)}"),
                D(rf"A e^{{\bar k\,t_{{\mathrm{{hit}}}}}}={fmt(M)}"),
                close(True, "The average force recovers the target exactly"),
            ],
            [
                "A constant-$\\alpha$ formula pretends the switch never happened.",
                D(rf"t_{{\alpha}}=\frac{{\ln(M/A)}}{{\alpha}}=\frac{{\ln 4}}{{\alpha}}={fmt(t_alpha)}"),
                D(rf"t_{{\mathrm{{hit}}}}={fmt(t_hit)}\neq{fmt(t_alpha)}"),
                close(False, "The no-switch clock is not the piecewise hitting time"),
            ],
            [
                "Change-of-base alone does not cancel the early segment.",
                D(rf"\frac{{\log_2(M/A)}}{{\beta}}=\frac{{2}}{{\beta}}={fmt(cob_wrong)}"),
                D(rf"t_{{\mathrm{{hit}}}}={fmt(t_hit)}\neq{fmt(cob_wrong)}"),
                close(False, "Dividing $\\log_2(M/A)$ by $\\beta$ skips the early force entirely"),
            ],
            [
                "Evaluate the level at the kink.",
                D(rf"f(\tau)=2A={fmt(2*A)},\qquad M=4A={fmt(M)}"),
                close(False, "At the switch the fund is still strictly below the target"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t02_graph_competing_cross() -> dict:
    """Competing populations: meet, overtake, log-gap; two sign/identity traps. 3 true."""
    A0, kA, B0, kB = 800.0, 0.04, 1200.0, 0.01
    t_meet = ln(B0 / A0) / (kA - kB)
    tmax = 50.0
    At = A0 * math.exp(kA * tmax)
    Bt = B0 * math.exp(kB * tmax)
    log_gap = ln(At / Bt)
    # A meet in (0,tmax) T; B A(tmax)>B T; C log_gap = ln(A0/B0)+(kA-kB)tmax T
    # D meet = ln(A0/B0)/(kA-kB) F; E doubling time of A equals t_meet F
    t_double_A = ln(2) / kA
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert 0 < t_meet < tmax and At > Bt
    assert abs(log_gap - (ln(A0 / B0) + (kA - kB) * tmax)) < 1e-9
    assert abs(t_double_A - t_meet) > 1e-6

    fig = competing_populations(A0, kA, B0, kB, tmax, "Competing A and B")
    overview = (
        f"$A(t)={fmt(A0)}e^{{{fmt(kA)}t}}$, $B(t)={fmt(B0)}e^{{{fmt(kB)}t}}$. "
        f"Meeting $t^*=\\ln(B_0/A_0)/(k_A-k_B)\\approx{fmt(t_meet)}$. "
        f"At $t={fmt(tmax)}$: $\\ln(A/B)\\approx{fmt(log_gap)}$. "
        f"Doubling clock of $A$ is $\\ln 2/k_A\\approx{fmt(t_double_A)}$."
    )
    return make_task(
        title="Graph — crossing populations, log-gap, and a flipped meeting formula",
        context=(
            f"Two populations follow $A(t)=A_0 e^{{k_A t}}$ and $B(t)=B_0 e^{{k_B t}}$ with "
            f"$A_0={fmt(A0)}$, $k_A={fmt(kA)}$, $B_0={fmt(B0)}$, $k_B={fmt(kB)}$. "
            f"The figure shows both paths on $[0,{fmt(tmax)}]$."
        ),
        statements=[
            rf"The populations meet at some time strictly inside $(0,{fmt(tmax)})$.",
            rf"At $t={fmt(tmax)}$, population $A$ strictly exceeds population $B$.",
            rf"$\ln(A({fmt(tmax)})/B({fmt(tmax)}))=\ln(A_0/B_0)+(k_A-k_B)\cdot{fmt(tmax)}$.",
            r"The meeting time equals $\ln(A_0/B_0)/(k_A-k_B)$.",
            r"The meeting time equals the doubling time of $A$.",
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
                "Log-quotient is affine in $t$.",
                D(r"\ln\frac{A(t)}{B(t)}=\ln\frac{A_0}{B_0}+(k_A-k_B)t"),
                D(rf"\ln\frac{{A({fmt(tmax)})}}{{B({fmt(tmax)})}}\approx{fmt(log_gap)}"),
                close(True, "The log-gap identity holds at the horizon"),
            ],
            [
                "The correct ratio is $B_0/A_0$, not $A_0/B_0$.",
                D(rf"\frac{{\ln(A_0/B_0)}}{{k_A-k_B}}\approx{fmt(ln(A0/B0)/(kA-kB))}"),
                D(rf"t^*\\approx{fmt(t_meet)}"),
                close(False, "Flipping the ratio flips the sign of the meeting time"),
            ],
            [
                "Doubling of $A$ solves $e^{k_A t}=2$, unrelated to the cross.",
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k_A}}\approx{fmt(t_double_A)}"),
                D(rf"t^*\\approx{fmt(t_meet)}\neq{fmt(t_double_A)}"),
                close(False, "Doubling time of $A$ is not the meeting clock"),
            ],
        ],
        overview=overview,
        stem_kind="graph",
        figure=fig,
    )


def t03_table_recover_compare() -> dict:
    """Two-obs table → recover k, then doubling / thresholds / false force. 4 true."""
    y1, t1, k = 800.0, 1.0, ln(2) / 10.0  # doubles every 10
    t2 = 6.0
    y2 = y1 * math.exp(k * (t2 - t1))
    dt = t2 - t1
    k_hat = ln(y2 / y1) / dt
    t_double = ln(2) / k_hat
    y_plus15 = y1 * math.exp(k_hat * 15)
    ln_ratio = ln(y2 / y1)
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert abs(k_hat - k) < 1e-12
    assert t_double < 12 and y_plus15 > 2 * y1 and ln_ratio > 0.3
    assert not (k_hat > 0.08)

    table = md_table(
        ["$t$", "$y(t)$"],
        [[f"${fmt(t1)}$", f"${fmt(y1)}$"], [f"${fmt(t2)}$", f"${fmt(y2,2)}$"]],
    )
    fig = svg_exp(P0=y1, k=k, tmax=16, title="Recovered continuous path", mark_t=t2)
    overview = (
        f"From the table, $k=\\ln(y_2/y_1)/\\Delta t={fmt(k_hat,6)}$. "
        f"Doubling $t_{{\\times 2}}={fmt(t_double)}$; "
        f"fifteen years after $t_1$: $y\\approx{fmt(y_plus15)}$; "
        f"$\\ln(y_2/y_1)={fmt(ln_ratio,6)}$."
    )
    return make_task(
        title="Table — recover force, then doubling and threshold comparisons",
        context=(
            "A continuous exponential path $y(t)=y_0 e^{kt}$ is observed at two times "
            "(table). Recover the force by logarithm, then judge the claims."
        ),
        statements=[
            rf"The continuous force equals $\ln\!\bigl(y({fmt(t2)})/y({fmt(t1)})\bigr)/{fmt(dt)}$.",
            r"The doubling time is strictly less than $12$.",
            rf"Fifteen years after $t={fmt(t1)}$, the level strictly exceeds $2\,y({fmt(t1)})$.",
            rf"$\ln\!\bigl(y({fmt(t2)})/y({fmt(t1)})\bigr)$ is strictly larger than $0.3$.",
            r"The recovered force is strictly larger than $0.08$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Start from $y_2=y_1 e^{k\\Delta t}$ and solve for $k$.",
                D(rf"k=\frac{{\ln(y_2/y_1)}}{{\Delta t}}=\frac{{\ln\!\bigl(y({fmt(t2)})/y({fmt(t1)})\bigr)}}{{{fmt(dt)}}}"),
                D(rf"k={fmt(k_hat,6)}"),
                close(True, "The log-ratio formula is exactly the recovered force"),
            ],
            [
                "Doubling solves $e^{kt}=2$.",
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k}}={fmt(t_double)}"),
                D(rf"{fmt(t_double)}<12"),
                close(True, "Doubling finishes before twelve time units"),
            ],
            [
                "Propagate fifteen years from the first observation.",
                D(rf"y(t_1+15)=y_1 e^{{15k}}\approx{fmt(y_plus15)}"),
                D(rf"2y_1={fmt(2*y1)}"),
                close(True, "Fifteen years push the level past a double"),
            ],
            [
                "Evaluate the log-ratio between the tabulated points.",
                D(rf"\ln(y_2/y_1)=k\cdot\Delta t={fmt(ln_ratio,6)}"),
                D(rf"{fmt(ln_ratio,6)}>0.3"),
                close(True, "The log-ratio clears the $0.3$ threshold"),
            ],
            [
                "Compare the recovered force with $0.08$.",
                D(rf"k={fmt(k_hat,6)}<0.08"),
                close(False, "The force equals $\\ln 2/10\\approx 0.0693$, below $0.08$"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        figure=fig,
        tables_markdown=table,
    )


def t04_symbolic_nested_inverses() -> dict:
    """Nested exp/log inverses beside a growth model — five hard but true claims. 5 true."""
    P, k = 250.0, 0.05
    # g = f^{-1}: g(y)=(1/k)ln(y/P)
    # All five carefully True and multi-step:
    # A: g(f(t))=t for all t
    # B: f(g(y))=y for all y>0
    # C: g(P e^{2})=2/k  (nested)
    # D: (f circ g circ f)(t)=f(t)
    # E: d/dy [k g(y)] = 1/y
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs((1 / k) * ln((P * math.exp(k * 3)) / P) - 3) < 1e-12
    assert abs((1 / k) * ln((P * math.exp(2)) / P) - 2 / k) < 1e-12

    fig = svg_curves(
        [
            (lambda t, P=P, k=k: P * math.exp(k * t), "#8B5A2B", "f"),
            (lambda y, P=P, k=k: (1 / k) * math.log(max(y, 1e-9) / P), "#2F5D50", "g on range", "6 4"),
        ],
        xmin=0.2,
        xmax=40,
        title="Growth f and inverse g (schematic)",
        ylabel="value",
    )
    overview = (
        f"$f(t)=P e^{{kt}}$ with $P={fmt(P)}$, $k={fmt(k)}$; "
        f"inverse $g(y)=\\frac{{1}}{{k}}\\ln(y/P)$ on $(0,\\infty)$. "
        f"Nested check: $g(P e^{{2}})=2/k={fmt(2/k)}$."
    )
    return make_task(
        title="Symbolic — nested exp∘log inverses of a continuous growth map",
        context=(
            f"Let $f(t)=P e^{{kt}}$ with $P={fmt(P)}>0$ and $k={fmt(k)}>0$, and let "
            f"$g$ be the inverse of $f$ on the range of $f$."
        ),
        statements=[
            r"$g(f(t))=t$ for every real $t$.",
            r"$f(g(y))=y$ for every $y>0$.",
            r"$g(P e^{2})=2/k$.",
            r"$(f\circ g\circ f)(t)=f(t)$ for every real $t$.",
            r"$\dfrac{d}{dy}\bigl(k\,g(y)\bigr)=\dfrac{1}{y}$ for every $y>0$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Invert $y=P e^{kt}$ by taking logs.",
                D(r"g(y)=\frac{1}{k}\ln(y/P)"),
                D(r"g(f(t))=\frac{1}{k}\ln(e^{kt})=t"),
                close(True, "Left-inverse holds on the whole real line"),
            ],
            [
                "Compose the other way on the positive reals.",
                D(r"f(g(y))=P\exp\bigl(\ln(y/P)\bigr)=y"),
                close(True, "Right-inverse holds for every $y>0$"),
            ],
            [
                "Substitute the nested argument $P e^{2}$.",
                D(r"g(P e^{2})=\frac{1}{k}\ln(e^{2})=\frac{2}{k}"),
                close(True, "The nested exponential cancels under the log inverse"),
            ],
            [
                "Associativity of composition with a two-sided inverse.",
                D(r"(f\circ g\circ f)(t)=f\bigl(g(f(t))\bigr)=f(t)"),
                close(True, "The middle $g\\circ f$ is the identity on the domain of $f$"),
            ],
            [
                "Differentiate $k g(y)=\\ln(y/P)$.",
                D(r"k g(y)=\ln y-\ln P"),
                D(r"\frac{d}{dy}(k g(y))=\frac{1}{y}"),
                close(True, "The scaled inverse differentiates to the reciprocal"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
        figure=fig,
    )


def t05_parametric_family_one_survivor() -> dict:
    """Parametric family y_a(t)=a e^{kt}; only one claim survives. 1 true."""
    k = 0.025
    a_star = math.exp(2)  # e^2
    t_double = ln(2) / k
    # A True: y_{e^2}(t_double)=2 e^2
    # B False: for every a>0, y_a(1/k)=a e  — wait that's TRUE. Need false.
    # B False: y_a(1/k)=a^e  (wrong)
    # C False: argmax_a of y_a(t) at fixed t is a=1/k
    # D False: ln y_a(t) - ln y_1(t) = ln a + k t  (extra kt)
    # E False: doubling time depends on a
    key = [True, False, False, False, False]
    assert sum(key) == 1
    y = a_star * math.exp(k * t_double)
    assert abs(y - 2 * a_star) < 1e-9

    fig = svg_curves(
        [
            (lambda t, a=1.0, k=k: a * math.exp(k * t), "#8B5A2B", "a=1"),
            (lambda t, a=a_star, k=k: a * math.exp(k * t), "#2F5D50", r"a=e^2"),
        ],
        xmin=0,
        xmax=t_double + 5,
        title="Parametric family a e^{kt}",
        ylabel="level",
    )
    overview = (
        f"Family $y_a(t)=a e^{{{fmt(k)}t}}$. "
        f"At $t=\\ln 2/k={fmt(t_double)}$, every path doubles its own $a$; "
        f"in particular $y_{{e^2}}({fmt(t_double)})=2e^2$. "
        f"Doubling time is independent of $a$."
    )
    return make_task(
        title="Parametric — one surviving doubling claim in a force family",
        context=(
            f"For each $a>0$ define $y_a(t)=a e^{{kt}}$ with fixed force $k={fmt(k)}$. "
            f"Let $t_{{\\times 2}}=\\ln 2/k$."
        ),
        statements=[
            rf"$y_{{e^{{2}}}}(t_{{\times 2}})=2e^{{2}}$.",
            rf"$y_a(1/k)=a^{{e}}$ for every $a>0$.",
            rf"For fixed $t>0$, the level $y_a(t)$ is maximised at $a=1/k$.",
            r"$\ln y_a(t)-\ln y_1(t)=\ln a+kt$ for every $a>0$ and every $t$.",
            r"The doubling time $t_{\times 2}$ depends on the parameter $a$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Every path doubles at the same clock, including $a=e^{2}$.",
                D(rf"y_{{e^{{2}}}}(t_{{\times 2}})=e^{{2}}e^{{k\cdot(\ln 2/k)}}=e^{{2}}\cdot 2=2e^{{2}}"),
                close(True, "The nested exponential cancels and leaves a double"),
            ],
            [
                "Evaluate the claimed power identity.",
                D(rf"y_a(1/k)=a e^{{k\cdot(1/k)}}=a e"),
                D(r"a e\neq a^{e}\quad(a\neq e)"),
                close(False, "The path yields $ae$, not $a^{e}$"),
            ],
            [
                "At fixed $t$, $y_a(t)=a e^{kt}$ is strictly increasing in $a>0$.",
                D(r"\partial_a y_a(t)=e^{kt}>0"),
                close(False, "There is no maximiser at $a=1/k$ on $(0,\\infty)$"),
            ],
            [
                "Subtract log-levels carefully.",
                D(r"\ln y_a(t)-\ln y_1(t)=\ln a+kt-\ln 1-kt=\ln a"),
                close(False, "The $kt$ terms cancel; the claim keeps a spurious $+kt$"),
            ],
            [
                "Doubling solves $e^{kt}=2$, independent of $a$.",
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k}}={fmt(t_double)}"),
                close(False, "The doubling clock does not depend on $a$"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
        figure=fig,
    )

def t06_piecewise_avg_and_threshold() -> dict:
    """Piecewise continuous path: continuity, log-increment, avg force; two traps. 3 true."""
    P0, k1, T, k2 = 600.0, 0.05, 8.0, 0.02
    t = 20.0
    fT = P0 * math.exp(k1 * T)
    ft = fT * math.exp(k2 * (t - T))
    log_inc = k1 * T + k2 * (t - T)
    avg = log_inc / t
    # A continuous at T T; B ln(f(t)/P0)=log_inc T; C avg > 0.03 T
    # D f(t) > 3 P0 F (e^{0.64}≈1.90); E late force exceeds avg F
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert abs(ln(ft / P0) - log_inc) < 1e-12
    assert avg > 0.03 and ft < 3 * P0 and k2 < avg

    fig = piecewise_kink(P0, k1, T, k2, t, "Piecewise continuous fund")
    overview = (
        f"Switch at $T={fmt(T)}$: $f(T)\\approx{fmt(fT)}$. "
        f"At $t={fmt(t)}$, $\\ln(f/P_0)={fmt(log_inc)}$ so "
        f"$\\bar k={fmt(avg,6)}$. Compare $3P_0={fmt(3*P0)}$ with "
        f"$f(t)\\approx{fmt(ft)}$; late force $k_2={fmt(k2)}<\\bar k$."
    )
    return make_task(
        title="Piecewise — continuity, log-increment, and average-force tests",
        context=(
            f"A fund starts at $P_0={fmt(P0)}$, grows at force $k_1={fmt(k1)}$ on "
            f"$[0,{fmt(T)}]$, then at force $k_2={fmt(k2)}$. Read the path at "
            f"$t={fmt(t)}$ (figure)."
        ),
        statements=[
            rf"The path is continuous at the switch $t={fmt(T)}$.",
            rf"$\ln(f({fmt(t)})/P_0)$ equals $k_1 T+k_2(t-T)$ exactly.",
            rf"The path-average force $\bar k=\ln(f({fmt(t)})/P_0)/{fmt(t)}$ exceeds $0.03$.",
            rf"At $t={fmt(t)}$ the fund exceeds $3P_0$.",
            r"The late force $k_2$ strictly exceeds the path-average force $\bar k$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Left and right limits share the matching factor $e^{k_1 T}$.",
                D(r"f(T^{-})=P_0 e^{k_1 T},\qquad f(T^{+})=P_0 e^{k_1 T}e^{k_2\cdot 0}"),
                close(True, "Both sides agree, so the path is continuous at the switch"),
            ],
            [
                "Logs add across the kink.",
                D(rf"f(t)=P_0 e^{{k_1 T}}e^{{k_2(t-T)}}"),
                D(rf"\ln(f(t)/P_0)=k_1 T+k_2(t-T)={fmt(log_inc)}"),
                close(True, "The log-increment formula is exact"),
            ],
            [
                "Average force is log-increment over elapsed time.",
                D(rf"\bar k=\frac{{{fmt(log_inc)}}}{{{fmt(t)}}}={fmt(avg,6)}>0.03"),
                close(True, "The average clears the $0.03$ threshold"),
            ],
            [
                "Compare the level with $3P_0$.",
                D(rf"f(t)=P_0 e^{{{fmt(log_inc)}}}\\approx{fmt(ft)}"),
                D(rf"3P_0={fmt(3*P0)}"),
                close(False, "The fund is still below three times its start"),
            ],
            [
                "Compare $k_2$ with the path average.",
                D(rf"k_2={fmt(k2)},\qquad \bar k={fmt(avg,6)}"),
                D(rf"{fmt(k2)}<{fmt(avg,6)}"),
                close(False, "The late force sits below the path average"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t07_nested_exp_log_mash() -> dict:
    """Nested exp∘log and log∘exp with growth side-conditions. 2 true."""
    # Let u = exp(ln(8)/3) = 2; v = ln(exp(5)/e^2) = 5-2 = 3
    # Growth: P(t)=100 e^{0.02 t}
    # A True: exp(ln(8)/3)=2
    # B True: ln(P(50)/100)=1  (0.02*50=1)
    # C False: ln(exp(5)/e^2)=5/2
    # D False: exp(ln(P(t)))/P(0) = e^{kt}/P(0) wait
    # D False: log_2(exp(ln 8)) = ln 8  (should be 3)
    # E False: nested exp(ln(ln(e^e))) = e
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(math.exp(ln(8) / 3) - 2) < 1e-12
    assert abs(0.02 * 50 - 1) < 1e-12
    assert abs(ln(math.exp(5) / math.exp(2)) - 3) < 1e-12
    assert abs(math.log(math.exp(ln(8)), 2) - 3) < 1e-12
    nested = math.exp(ln(ln(math.exp(math.e))))  # exp(ln(e))=e
    assert abs(nested - math.e) < 1e-12

    fig = svg_exp(P0=100, k=0.02, tmax=60, title="Side growth P(t)=100 e^{0.02 t}", mark_t=50)
    overview = (
        "Nested cancellations: $\\exp(\\ln 8/3)=2$, "
        "$\\ln(P(50)/100)=1$, $\\ln(e^{5}/e^{2})=3$, "
        "$\\log_2(e^{\\ln 8})=3$, $\\exp(\\ln(\\ln e^{e}))=e$."
    )
    return make_task(
        title="Nested — exp∘log / log∘exp mashup beside a growth clock",
        context=(
            r"Work with nested exponential and logarithmic compositions, and with the "
            r"side path $P(t)=100 e^{0.02 t}$ (figure)."
        ),
        statements=[
            r"$\exp(\ln 8/3)=2$.",
            r"$\ln(P(50)/100)=1$.",
            r"$\ln(e^{5}/e^{2})=5/2$.",
            r"$\log_2\!\bigl(\exp(\ln 8)\bigr)=\ln 8$.",
            r"$\exp\!\bigl(\ln(\ln e^{e})\bigr)=e^{2}$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Change-of-base style nest: $\\exp(c\\ln a)=a^{c}$.",
                D(r"\exp(\ln 8/3)=8^{1/3}=2"),
                close(True, "The nest collapses to the cube root of eight"),
            ],
            [
                "Log-increment of the side path is force times time.",
                D(r"\ln(P(50)/100)=0.02\cdot 50=1"),
                close(True, "Fifty years at force $0.02$ produce log-increment $1$"),
            ],
            [
                "Expand the quotient of exponentials.",
                D(r"\ln(e^{5}/e^{2})=5-2=3\neq 5/2"),
                close(False, "The nest yields $3$, not $5/2$"),
            ],
            [
                "Inner $\\exp\\circ\\ln$ cancels before the outer base-$2$ log.",
                D(r"\log_2(\exp(\ln 8))=\log_2 8=3"),
                D(r"3\neq\ln 8"),
                close(False, "The value is $3$, not $\\ln 8$"),
            ],
            [
                "Peel the nest from the inside.",
                D(r"\ln e^{e}=e,\qquad \ln(\ln e^{e})=\ln e=1"),
                D(r"\exp(1)=e\neq e^{2}"),
                close(False, "The nest equals $e$, not $e^{2}$"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
        figure=fig,
    )


def t08_text_dense_clocks() -> dict:
    """Dense text: cont vs disc clocks, change-of-base inequality, hit times. 4 true."""
    P, k, r = 1000.0, 0.04, 0.04
    # continuous double td=ln2/k; discrete tn=ln2/ln(1+r)
    td = ln(2) / k
    tn = ln(2) / ln(1 + r)
    # cont hits 2P earlier than disc because k > ln(1+r)
    # A True: td < tn
    # B True: k > ln(1+r)
    # C True: cont level at tn exceeds 2P? e^{k tn} = e^{k ln2 / ln(1+r)} > 2 since k>ln(1+r)
    # D True: log_2(e^{k t}) = k t / ln2
    # E False: disc hits 2P at t=ln2/k
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert td < tn and k > ln(1 + r)
    cont_at_tn = P * math.exp(k * tn)
    assert cont_at_tn > 2 * P

    fig = two_models(P, k, 1 + r, tn + 5, "Continuous vs discrete doubling race")
    overview = (
        f"Continuous doubling $t_d=\\ln 2/k\\approx{fmt(td)}$; "
        f"discrete $t_n=\\ln 2/\\ln(1+r)\\approx{fmt(tn)}$. "
        f"Since $k>\\ln(1+r)$, continuous leads; at $t_n$ continuous level "
        f"$\\approx{fmt(cont_at_tn)}$."
    )
    return make_task(
        title="Text-dense — continuous vs discrete clocks and a change-of-base identity",
        context=(
            f"A principal $P={fmt(P)}$ may grow continuously at force $k={fmt(k)}$ "
            f"or discretely by factor $(1+r)$ each year with $r={fmt(r)}$. "
            f"Let $t_d$ be continuous doubling time and $t_n$ discrete doubling time."
        ),
        statements=[
            r"$t_d$ is strictly smaller than $t_n$.",
            r"$k$ is strictly larger than $\ln(1+r)$.",
            r"At time $t_n$, the continuous path already strictly exceeds $2P$.",
            r"$\log_2(e^{kt})=\dfrac{kt}{\ln 2}$ for every $t$.",
            r"The discrete path reaches $2P$ at time $t=\ln 2/k$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Write both doubling clocks.",
                D(rf"t_d=\frac{{\ln 2}}{{k}}\approx{fmt(td)},\qquad t_n=\frac{{\ln 2}}{{\ln(1+r)}}\\approx{fmt(tn)}"),
                D(rf"{fmt(td)}<{fmt(tn)}"),
                close(True, "Continuous doubling finishes first"),
            ],
            [
                "Compare force with the discrete log-step.",
                D(rf"\ln(1+r)=\ln(1.04)\\approx{fmt(ln(1+r),6)}"),
                D(rf"k={fmt(k)}>{fmt(ln(1+r),6)}"),
                close(True, "Continuous force exceeds the discrete log-step"),
            ],
            [
                "Evaluate the continuous path at the discrete doubling clock.",
                D(rf"P e^{{k t_n}}=P\exp\!\bigl(k\ln 2/\ln(1+r)\bigr)\\approx{fmt(cont_at_tn)}"),
                D(rf"{fmt(cont_at_tn)}>2P={fmt(2*P)}"),
                close(True, "Continuous growth has already cleared a double by $t_n$"),
            ],
            [
                "Change of base on an exponential.",
                D(r"\log_2(e^{kt})=\frac{\ln(e^{kt})}{\ln 2}=\frac{kt}{\ln 2}"),
                close(True, "The change-of-base identity holds for every $t$"),
            ],
            [
                "Discrete doubling uses $\\ln(1+r)$, not $k$.",
                D(rf"\frac{{\ln 2}}{{k}}\approx{fmt(td)}\neq t_n\\approx{fmt(tn)}"),
                close(False, "The continuous doubling clock is not the discrete hitting time"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
        figure=fig,
    )


def t09_rebuild_from_three_obs() -> dict:
    """Rebuild force from three consistent observations; all five true. 5 true."""
    P0, k = 500.0, 0.03
    ts = [0.0, 4.0, 10.0]
    ys = [P0 * math.exp(k * t) for t in ts]
    k01 = ln(ys[1] / ys[0]) / (ts[1] - ts[0])
    k12 = ln(ys[2] / ys[1]) / (ts[2] - ts[1])
    k02 = ln(ys[2] / ys[0]) / (ts[2] - ts[0])
    # A k01=k T; B k12=k T; C k01=k12 T; D k02=k T; E y2/y0 = e^{k*10} T
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs(k01 - k) < 1e-12 and abs(k12 - k) < 1e-12 and abs(k02 - k) < 1e-12

    table = md_table(
        ["$t$", "$y(t)$"],
        [[f"${fmt(t)}$", f"${fmt(y,2)}$"] for t, y in zip(ts, ys)],
    )
    fig = svg_exp(P0=P0, k=k, tmax=12, title="Three-observation rebuild", mark_t=ts[2])
    overview = (
        f"Three samples of $y(t)=500 e^{{0.03 t}}$ rebuild the same force: "
        f"$k_{{01}}=k_{{12}}=k_{{02}}={fmt(k)}$. "
        f"Outer ratio $y({fmt(ts[2])})/y(0)=e^{{{fmt(k*ts[2])}}}$."
    )
    return make_task(
        title="Rebuild — three consistent samples force a unique continuous $k$",
        context=(
            "A continuous exponential path is observed at three times (table). "
            "Rebuild pairwise forces and compare."
        ),
        statements=[
            rf"The force from $t={fmt(ts[0])}$ to $t={fmt(ts[1])}$ equals $0.03$.",
            rf"The force from $t={fmt(ts[1])}$ to $t={fmt(ts[2])}$ equals $0.03$.",
            r"Those two adjacent rebuilt forces are equal.",
            rf"The force from $t={fmt(ts[0])}$ to $t={fmt(ts[2])}$ equals $0.03$.",
            rf"$y({fmt(ts[2])})/y({fmt(ts[0])})=e^{{0.3}}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"k_{{01}}=\frac{{\ln(y({fmt(ts[1])})/y({fmt(ts[0])}))}}{{{fmt(ts[1]-ts[0])}}}={fmt(k01,6)}"),
                close(True, "Adjacent rebuild returns force $0.03$"),
            ],
            [
                D(rf"k_{{12}}=\frac{{\ln(y({fmt(ts[2])})/y({fmt(ts[1])}))}}{{{fmt(ts[2]-ts[1])}}}={fmt(k12,6)}"),
                close(True, "Next adjacent rebuild returns the same force"),
            ],
            [
                D(rf"k_{{01}}={fmt(k01,6)}=k_{{12}}"),
                close(True, "Equal adjacent forces certify a single continuous $k$"),
            ],
            [
                D(rf"k_{{02}}=\frac{{\ln(y({fmt(ts[2])})/y({fmt(ts[0])}))}}{{{fmt(ts[2]-ts[0])}}}={fmt(k02,6)}"),
                close(True, "Outer rebuild agrees with the adjacent ones"),
            ],
            [
                D(rf"\frac{{y({fmt(ts[2])})}}{{y({fmt(ts[0])})}}=e^{{0.03\cdot 10}}=e^{{0.3}}"),
                close(True, "Outer ratio is exactly $e^{0.3}$"),
            ],
        ],
        overview=overview,
        stem_kind="rebuild",
        figure=fig,
        tables_markdown=table,
    )


def t10_applied_gdp_one_survivor() -> dict:
    """GDP per capita letters; only one claim true. 1 true."""
    Y0, g, N0, p, t = 200.0, 0.04, 10.0, 0.01, 25.0
    y0 = Y0 / N0
    k = g - p
    y_t = y0 * math.exp(k * t)
    # A True: k = g-p = 0.03
    # B False: Δln y = g t  (actually k t)
    # C False: y(t)/y0 = e^{g t}
    # D False: Δln Y - Δln N = g+p  (actually g-p)
    # E False: per-capita doubles by t=25 (needs ln2/k≈23.1 — wait e^{0.75}≈2.11 >2 so TRUE)
    # Adjust: claim doubles by t=20: e^{0.6}≈1.82 <2 False. Good.
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(k - 0.03) < 1e-12
    assert abs(k * t - (g - p) * t) < 1e-12
    assert y0 * math.exp(k * 20) < 2 * y0

    fig = gdp_per_capita(Y0 * 1000, g, N0, p, t, "GDP and per-capita paths")
    overview = (
        f"Per-capita force $k=g-p={fmt(k)}$. Over $t={fmt(t)}$, "
        f"$\\Delta\\ln y={fmt(k*t)}$. Doubling needs $\\ln 2/k\\approx{fmt(ln(2)/k)}$; "
        f"at $t=20$ the per-capita factor is only $e^{{{fmt(k*20)}}}$."
    )
    return make_task(
        title="Applied letters — GDP per-capita force with four tempting misreads",
        context=(
            f"GDP follows $Y(t)=Y_0 e^{{gt}}$ and population $N(t)=N_0 e^{{pt}}$ with "
            f"$Y_0={fmt(Y0)}$, $g={fmt(g)}$, $N_0={fmt(N0)}$, $p={fmt(p)}$. "
            f"Per-capita output is $y=Y/N$. Horizon $t={fmt(t)}$."
        ),
        statements=[
            r"The per-capita continuous force equals $g-p$.",
            rf"Over the horizon, $\Delta\ln y$ equals $g\cdot{fmt(t)}$.",
            rf"$y({fmt(t)})/y(0)=e^{{g\cdot{fmt(t)}}}$.",
            r"$\Delta\ln Y-\Delta\ln N=g+p$ over any horizon.",
            r"Per-capita output doubles on or before $t=20$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Per-capita log-derivative is the difference of forces.",
                D(r"\frac{d}{dt}\ln y=g-p"),
                close(True, "The per-capita force is exactly $g-p$"),
            ],
            [
                D(rf"\Delta\ln y=(g-p)t={fmt(k*t)}\neq g t={fmt(g*t)}"),
                close(False, "Population force must be subtracted"),
            ],
            [
                D(rf"y(t)/y(0)=e^{{(g-p)t}}=e^{{{fmt(k*t)}}}\neq e^{{gt}}"),
                close(False, "The exponent is $k=g-p$, not $g$"),
            ],
            [
                D(r"\Delta\ln Y-\Delta\ln N=gt-pt=(g-p)"),
                D(rf"g-p={fmt(k)}\neq g+p={fmt(g+p)}"),
                close(False, "Differences of log-increments give $g-p$, not $g+p$"),
            ],
            [
                D(rf"y(20)/y(0)=e^{{20k}}=e^{{{fmt(20*k)}}}\\approx{fmt(math.exp(20*k))}"),
                D(r"<2"),
                close(False, "At $t=20$ per-capita output has not yet doubled"),
            ],
        ],
        overview=overview,
        stem_kind="applied_letter",
        figure=fig,
    )

def t11_hybrid_piece_elasticity() -> dict:
    """Piecewise stock beside constant-elasticity demand. 3 true."""
    P0, k1, T, k2 = 1000.0, 0.06, 5.0, 0.02
    b, g = 1.5, 0.04
    t = 15.0
    log_inc = k1 * T + k2 * (t - T)
    avg = log_inc / t
    q_force = -b * g
    ft = P0 * math.exp(log_inc)
    # A True: ln(f(t)/P0)=log_inc
    # B True: avg > 0.03
    # C True: quantity force = -b g
    # D False: demand inelastic (b<1)
    # E False: f(t) > 2 P0  (e^{0.5}=1.65)
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert avg > 0.03 and ft < 2 * P0 and b > 1

    fig = piecewise_kink(P0, k1, T, k2, t, "Piecewise stock beside price drift")
    overview = (
        f"Log-increment ${fmt(log_inc)}$, $\\bar k={fmt(avg,6)}$. "
        f"Quantity force $-bg={fmt(q_force)}$. "
        f"At $t={fmt(t)}$, $f\\approx{fmt(ft)}$ vs $2P_0={fmt(2*P0)}$."
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
            rf"At $t={fmt(t)}$ the stock exceeds $2P_0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"f(t)=P_0 e^{k_1 T}e^{k_2(t-T)}"),
                D(rf"\ln(f(t)/P_0)={fmt(log_inc)}"),
                close(True, "Logs add across the kink"),
            ],
            [
                D(rf"\bar k={fmt(avg,6)}>0.03"),
                close(True, "Path-average force clears $0.03$"),
            ],
            [
                D(rf"\frac{{d\ln Q}}{{dt}}=-bg={fmt(q_force)}"),
                close(True, "Constant elasticity converts price force into quantity force"),
            ],
            [
                D(rf"b={fmt(b)}>1"),
                close(False, "Demand is elastic, not inelastic"),
            ],
            [
                D(rf"f(t)\\approx{fmt(ft)}<2P_0={fmt(2*P0)}"),
                close(False, "The stock has not yet doubled"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t12_graph_decay_vs_invest() -> dict:
    """Decay mass vs investing fund race on a shared figure. 4 true."""
    M0, kd = 2000.0, 0.05  # decay
    P0, kg = 500.0, 0.03   # growth
    tmax = 40.0
    t_meet = ln(M0 / P0) / (kg + kd)  # M0 e^{-kd t}=P0 e^{kg t}
    Mt = M0 * math.exp(-kd * tmax)
    Pt = P0 * math.exp(kg * tmax)
    # A True: meet in (0,tmax)
    # B True: at tmax, P>M
    # C True: t_meet = ln(M0/P0)/(kg+kd)
    # D True: half-life of mass = ln2/kd
    # E False: meeting time equals half-life
    t_half = ln(2) / kd
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert 0 < t_meet < tmax and Pt > Mt
    assert abs(t_meet - t_half) > 0.5

    fig = svg_curves(
        [
            (lambda t, M0=M0, kd=kd: M0 * math.exp(-kd * t), "#8B5A2B", "mass"),
            (lambda t, P0=P0, kg=kg: P0 * math.exp(kg * t), "#2F5D50", "fund"),
        ],
        xmin=0,
        xmax=tmax,
        title="Decaying mass vs growing fund",
        ylabel="level",
    )
    overview = (
        f"Mass $M(t)={fmt(M0)}e^{{-{fmt(kd)}t}}$, fund $P(t)={fmt(P0)}e^{{{fmt(kg)}t}}$. "
        f"Meeting $t^*=\\ln(M_0/P_0)/(k_g+k_d)\\approx{fmt(t_meet)}$. "
        f"Half-life $\\ln 2/k_d\\approx{fmt(t_half)}$."
    )
    return make_task(
        title="Graph — decaying mass versus growing fund and the meeting clock",
        context=(
            f"A mass $M(t)=M_0 e^{{-k_d t}}$ with $M_0={fmt(M0)}$, $k_d={fmt(kd)}$ "
            f"competes with a fund $P(t)=P_0 e^{{k_g t}}$ with $P_0={fmt(P0)}$, "
            f"$k_g={fmt(kg)}$. The figure shows both on $[0,{fmt(tmax)}]$."
        ),
        statements=[
            rf"The two paths meet at some time strictly inside $(0,{fmt(tmax)})$.",
            rf"At $t={fmt(tmax)}$, the fund strictly exceeds the mass.",
            r"The meeting time equals $\ln(M_0/P_0)/(k_g+k_d)$.",
            r"The half-life of the mass equals $\ln 2/k_d$.",
            r"The meeting time equals the half-life of the mass.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"t^*=\frac{{\ln(M_0/P_0)}}{{k_g+k_d}}\approx{fmt(t_meet)}"),
                D(rf"0<{fmt(t_meet)}<{fmt(tmax)}"),
                close(True, "A unique crossing sits inside the window"),
            ],
            [
                D(rf"P({fmt(tmax)})\\approx{fmt(Pt)},\qquad M({fmt(tmax)})\\approx{fmt(Mt)}"),
                close(True, "The fund leads at the horizon"),
            ],
            [
                "Set $M_0 e^{-k_d t}=P_0 e^{k_g t}$ and take logs.",
                D(r"t^*=\frac{\ln(M_0/P_0)}{k_g+k_d}"),
                close(True, "Opposite-sign forces add in the denominator"),
            ],
            [
                D(rf"t_{{1/2}}=\frac{{\ln 2}}{{k_d}}={fmt(t_half)}"),
                close(True, "Half-life is the standard log-two clock"),
            ],
            [
                D(rf"t^*\\approx{fmt(t_meet)}\neq t_{{1/2}}={fmt(t_half)}"),
                close(False, "Meeting and half-life are different clocks"),
            ],
        ],
        overview=overview,
        stem_kind="graph",
        figure=fig,
    )


def t13_table_two_series_cross() -> dict:
    """Two series in a table; recover forces and future crossing. 1 true."""
    A0, kA, B0, kB = 400.0, 0.05, 700.0, 0.02
    t_obs = 5.0
    A5 = A0 * math.exp(kA * t_obs)
    B5 = B0 * math.exp(kB * t_obs)
    t_meet = ln(B0 / A0) / (kA - kB)
    # Only A True: kA = ln(A5/A0)/5
    # B False: kB > kA
    # C False: already crossed by t_obs
    # D False: meet at ln(A0/B0)/(kA-kB)
    # E False: A5 > B5
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert t_meet > t_obs and A5 < B5 and kA > kB

    table = md_table(
        ["$t$", "$A(t)$", "$B(t)$"],
        [
            ["$0$", f"${fmt(A0)}$", f"${fmt(B0)}$"],
            [f"${fmt(t_obs)}$", f"${fmt(A5,2)}$", f"${fmt(B5,2)}$"],
        ],
    )
    fig = competing_populations(A0, kA, B0, kB, t_meet + 5, "Two series toward a cross")
    overview = (
        f"Recovered $k_A={fmt(kA)}$, $k_B={fmt(kB)}$. "
        f"Crossing $t^*\\approx{fmt(t_meet)}>={fmt(t_obs)}$. "
        f"At observation, $A\\approx{fmt(A5,2)}<B\\approx{fmt(B5,2)}$."
    )
    return make_task(
        title="Table — recover two forces, then judge the future crossing",
        context=(
            "Two continuous exponential series $A$ and $B$ are sampled at $t=0$ and "
            f"$t={fmt(t_obs)}$ (table). Recover forces, then judge the claims."
        ),
        statements=[
            rf"$k_A=\ln\!\bigl(A({fmt(t_obs)})/A(0)\bigr)/{fmt(t_obs)}$.",
            r"The recovered force of $B$ strictly exceeds that of $A$.",
            rf"The series have already met on $[0,{fmt(t_obs)}]$.",
            r"The meeting time equals $\ln(A_0/B_0)/(k_A-k_B)$.",
            rf"At $t={fmt(t_obs)}$, series $A$ already exceeds series $B$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"k_A=\frac{{\ln(A({fmt(t_obs)})/A(0))}}{{{fmt(t_obs)}}}={fmt(kA)}"),
                close(True, "Log recovery returns force $0.05$"),
            ],
            [
                D(rf"k_B={fmt(kB)}<{fmt(kA)}=k_A"),
                close(False, "Force $B$ is smaller, not larger"),
            ],
            [
                D(rf"t^*=\frac{{\ln(B_0/A_0)}}{{k_A-k_B}}\\approx{fmt(t_meet)}>{fmt(t_obs)}"),
                close(False, "The crossing lies after the observation window"),
            ],
            [
                D(rf"\frac{{\ln(A_0/B_0)}}{{k_A-k_B}}\\approx{fmt(ln(A0/B0)/(kA-kB))}<0"),
                close(False, "Flipping the ratio makes the formula negative"),
            ],
            [
                D(rf"A({fmt(t_obs)})\\approx{fmt(A5,2)}<B({fmt(t_obs)})\\approx{fmt(B5,2)}"),
                close(False, "At the second observation $B$ is still larger"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        figure=fig,
        tables_markdown=table,
    )


def t14_symbolic_change_base_ineq() -> dict:
    """Change-of-base inside inequalities and log identities. 2 true."""
    # A True: log_2 12 > log_3 12  (since 1/ln2 > 1/ln3 for same ln12)
    # B True: log_2 12 = ln12/ln2
    # C False: log_2 12 + log_2 3 = log_2 15  (should be log2 36)
    # D False: log_5 (1/25) = 2
    # E False: (ln 9)/(ln 3) > 3  (=2)
    key = [True, True, False, False, False]
    assert sum(key) == 2
    log2_12 = ln(12) / ln(2)
    log3_12 = ln(12) / ln(3)
    assert log2_12 > log3_12
    assert abs(math.log(1 / 25, 5) - (-2)) < 1e-12
    assert abs(ln(9) / ln(3) - 2) < 1e-12

    fig = svg_log(base=2, xmin=0.5, xmax=16, title="log_2 reference curve", mark_x=12)
    overview = (
        f"$\\log_2 12=\\ln 12/\\ln 2\\approx{fmt(log2_12)}$, "
        f"$\\log_3 12\\approx{fmt(log3_12)}$. "
        f"$\\log_2 12+\\log_2 3=\\log_2 36$, "
        f"$\\log_5(1/25)=-2$, $\\ln 9/\\ln 3=2$."
    )
    return make_task(
        title="Symbolic — change-of-base inequalities and product/power traps",
        context=(
            r"Compare logarithms at different bases and test standard log identities. "
            r"The figure shows $y=\log_2 x$ for reference."
        ),
        statements=[
            r"$\log_2 12>\log_3 12$.",
            r"$\log_2 12=\dfrac{\ln 12}{\ln 2}$.",
            r"$\log_2 12+\log_2 3=\log_2 15$.",
            r"$\log_5(1/25)=2$.",
            r"$\dfrac{\ln 9}{\ln 3}>3$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Change of base: $\\log_b 12=\\ln 12/\\ln b$, decreasing in $b>1$.",
                D(rf"\log_2 12\\approx{fmt(log2_12)}>\log_3 12\\approx{fmt(log3_12)}"),
                close(True, "Smaller base yields a larger logarithm of the same argument"),
            ],
            [
                D(r"\log_2 12=\frac{\ln 12}{\ln 2}"),
                close(True, "Change-of-base is an identity"),
            ],
            [
                D(r"\log_2 12+\log_2 3=\log_2(12\cdot 3)=\log_2 36\neq\log_2 15"),
                close(False, "The product rule produces $\\log_2 36$, not $\\log_2 15$"),
            ],
            [
                D(r"\log_5(1/25)=\log_5(5^{-2})=-2\neq 2"),
                close(False, "The power is negative two"),
            ],
            [
                D(r"\frac{\ln 9}{\ln 3}=\log_3 9=2\not>3"),
                close(False, "The change-of-base quotient equals $2$, not more than $3$"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
        figure=fig,
    )


def t15_parametric_force_threshold() -> dict:
    """Parametric force k in a family; five carefully true threshold claims. 5 true."""
    # y(t)=e^{k t}; require for k in (0,1):
    # Actually fix k=ln2/5 so y(5)=2
    k = ln(2) / 5.0
    # A True: y(5)=2
    # B True: y(10)=4
    # C True: integral? skip — use ln y(t)=k t
    # C True: (ln y(15))/15 = k
    # D True: y(t)^2 = y(2t)
    # E True: doubling time is 5
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs(math.exp(k * 5) - 2) < 1e-12
    assert abs(math.exp(k * 10) - 4) < 1e-12

    fig = svg_exp(P0=1.0, k=k, tmax=15, title="Unit-start path with force ln2/5", mark_t=5)
    overview = (
        f"$y(t)=e^{{kt}}$ with $k=\\ln 2/5$. Then $y(5)=2$, $y(10)=4$, "
        f"$(\\ln y(t))/t=k$, and $y(t)^{2}=y(2t)$."
    )
    return make_task(
        title="Parametric — unit-start exponential locked to a doubling clock of $5$",
        context=(
            r"Let $y(t)=e^{kt}$ with the force fixed by the normalisation $y(5)=2$ "
            r"(equivalently $k=\ln 2/5$)."
        ),
        statements=[
            r"$y(5)=2$.",
            r"$y(10)=4$.",
            r"$\dfrac{\ln y(15)}{15}=k$.",
            r"$y(t)^{2}=y(2t)$ for every $t$.",
            r"The doubling time equals $5$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"y(5)=e^{k\cdot 5}=e^{\ln 2}=2"),
                close(True, "The normalisation forces $y(5)=2$"),
            ],
            [
                D(r"y(10)=e^{2\ln 2}=4"),
                close(True, "Ten units are two doubling clocks"),
            ],
            [
                D(r"\frac{\ln y(15)}{15}=\frac{15k}{15}=k"),
                close(True, "Log-level over time recovers the force"),
            ],
            [
                D(r"y(t)^{2}=e^{2kt}=e^{k(2t)}=y(2t)"),
                close(True, "Squaring the level doubles the clock"),
            ],
            [
                D(r"t_{\times 2}=\frac{\ln 2}{k}=5"),
                close(True, "Doubling time is exactly five"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
        figure=fig,
    )

def t16_piecewise_gdp_switch() -> dict:
    """Piecewise GDP growth switch; per-capita comparisons. 4 true."""
    Y0, g1, T, g2, N0, p = 100.0, 0.05, 10.0, 0.02, 5.0, 0.01
    t = 20.0
    # Y continuous piecewise; N = N0 e^{pt}
    YT = Y0 * math.exp(g1 * T)
    Yt = YT * math.exp(g2 * (t - T))
    Nt = N0 * math.exp(p * t)
    y0, yt = Y0 / N0, Yt / Nt
    # per-capita log inc = g1*T + g2*(t-T) - p*t
    dln_y = g1 * T + g2 * (t - T) - p * t
    # A True: Y continuous at T
    # B True: Δln Y = g1 T + g2(t-T)
    # C True: Δln y = dln_y
    # D True: Δln y > 0
    # E False: late GDP force exceeds early force
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert dln_y > 0 and g2 < g1

    fig = gdp_per_capita(Y0 * 1000, (g1 * T + g2 * (t - T)) / t, N0, p, t, "Piecewise GDP (avg force shown)")
    overview = (
        f"GDP log-increment ${fmt(g1*T+g2*(t-T))}$; population ${fmt(p*t)}$. "
        f"Per-capita $\\Delta\\ln y={fmt(dln_y)}$. Early force $g_1={fmt(g1)}>g_2={fmt(g2)}$."
    )
    return make_task(
        title="Piecewise — GDP force switch with per-capita log accounting",
        context=(
            f"GDP starts at $Y_0={fmt(Y0)}$, grows at force $g_1={fmt(g1)}$ until "
            f"$t={fmt(T)}$, then at force $g_2={fmt(g2)}$. Population is "
            f"$N(t)={fmt(N0)}e^{{{fmt(p)}t}}$. Horizon $t={fmt(t)}$."
        ),
        statements=[
            rf"GDP is continuous at the switch $t={fmt(T)}$.",
            rf"$\Delta\ln Y$ over $[0,{fmt(t)}]$ equals $g_1 T+g_2(t-T)$.",
            rf"$\Delta\ln y$ over $[0,{fmt(t)}]$ equals $g_1 T+g_2(t-T)-p\cdot{fmt(t)}$.",
            r"Per-capita log-change over the horizon is strictly positive.",
            r"The late GDP force $g_2$ strictly exceeds the early force $g_1$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"Y(T)=Y_0 e^{{g_1 T}}={fmt(YT)}"),
                "and the late segment starts from that same level.",
                close(True, "Matching levels make GDP continuous at the switch"),
            ],
            [
                D(rf"\Delta\ln Y=g_1 T+g_2(t-T)={fmt(g1*T+g2*(t-T))}"),
                close(True, "Piecewise GDP logs add"),
            ],
            [
                D(rf"\Delta\ln y=\Delta\ln Y-\Delta\ln N={fmt(dln_y)}"),
                close(True, "Per-capita log-change subtracts population growth"),
            ],
            [
                D(rf"\Delta\ln y={fmt(dln_y)}>0"),
                close(True, "Per-capita output grows in log terms over the horizon"),
            ],
            [
                D(rf"g_2={fmt(g2)}<{fmt(g1)}=g_1"),
                close(False, "The late force is smaller than the early force"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t17_nested_inverse_constraints() -> dict:
    """Nested inverse constraints linking growth parameters. 3 true."""
    # Constraint: ln(k/0.01)=ln 3 ⇒ k=0.03; P=e^2
    k = 0.03
    P = math.exp(2)
    t = ln(2) / k
    # A True: k=0.03
    # B True: P(t)=P e^{kt} doubles at t
    # C True: ln P = 2
    # D False: k/0.01 = e^3
    # E False: g(P)=0 for inverse g of f(t)=P e^{kt} — g(P)=0 actually TRUE!
    # E False: g(2P)=1/k  wait that's the doubling time... g(2P)=(1/k)ln2 = t True
    # E False: g(P^2)=(2/k)ln P = 4/k
    # claim: g(P^2)=2/k  False (actually 4/k since ln(P^2/P)=ln P=2, so 2/k)
    # g(P^2)=(1/k)ln(P^2/P)=(1/k)ln P=2/k — that would be TRUE
    # claim E: g(e)=1/k  — g(e)=(1/k)ln(e/P)=(1/k)(1-2)=-1/k ≠ 1/k False
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert abs(ln(k / 0.01) - ln(3)) < 1e-12
    g_e = (1 / k) * ln(math.e / P)
    assert abs(g_e + 1 / k) < 1e-9

    fig = svg_exp(P0=P, k=k, tmax=t + 5, title="Constrained growth path", mark_t=t)
    overview = (
        f"Constraint $\\ln(k/0.01)=\\ln 3$ forces $k={fmt(k)}$. "
        f"$P=e^{{2}}$ so $\\ln P=2$. Doubling clock $t=\\ln 2/k\\approx{fmt(t)}$. "
        f"Inverse $g(e)=(1/k)\\ln(e/P)=-{fmt(1/k)}$."
    )
    return make_task(
        title="Nested — log constraint on force beside an inverse evaluation",
        context=(
            r"A growth map $f(t)=P e^{kt}$ is constrained by the nested-log link "
            r"$\ln(k/0.01)=\ln 3$ and by $P=e^{2}$. Let $g$ be the inverse of $f$."
        ),
        statements=[
            r"$k=0.03$.",
            r"$f$ doubles its initial level in time $\ln 2/k$.",
            r"$\ln P=2$.",
            r"$k/0.01=e^{3}$.",
            r"$g(e)=1/k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln(k/0.01)=\ln 3\implies k/0.01=3\implies k=0.03"),
                close(True, "The nested log link collapses to $k=0.03$"),
            ],
            [
                D(r"f(\ln 2/k)=P e^{\ln 2}=2P"),
                close(True, "The standard doubling clock works under the constrained force"),
            ],
            [
                D(r"\ln P=\ln(e^{2})=2"),
                close(True, "The initial level is exactly $e^{2}$"),
            ],
            [
                D(r"k/0.01=3\neq e^{3}"),
                close(False, "The link gives ratio $3$, not $e^{3}$"),
            ],
            [
                D(rf"g(e)=\frac{{1}}{{k}}\ln(e/P)=\frac{{1-2}}{{k}}=-{fmt(1/k)}"),
                D(rf"-{fmt(1/k)}\neq 1/k"),
                close(False, "Because $P=e^{2}>e$, the inverse at $e$ is negative"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
        figure=fig,
    )


def t18_text_dense_mixed_identities() -> dict:
    """Dense mixed exp/log micro-claims; only one true. 1 true."""
    # A True: ln(e^3 / 8) = 3 - ln 8
    # B False: e^{ln 5 + ln 2} = 7
    # C False: log_2(1/8) = 3
    # D False: (ln 16)/(ln 2) = 8
    # E False: exp(2 ln 3) = 6
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(ln(math.exp(3) / 8) - (3 - ln(8))) < 1e-12
    assert abs(math.exp(ln(5) + ln(2)) - 10) < 1e-12
    assert abs(math.log(1 / 8, 2) - (-3)) < 1e-12
    assert abs(ln(16) / ln(2) - 4) < 1e-12
    assert abs(math.exp(2 * ln(3)) - 9) < 1e-12

    fig = svg_log(base=2, xmin=0.1, xmax=16, title="Reference log_2 for the micro-traps")
    overview = (
        r"Useful expansions: $\ln(e^{3}/8)=3-\ln 8$, "
        r"$e^{\ln 5+\ln 2}=10$, $\log_2(1/8)=-3$, "
        r"$\ln 16/\ln 2=4$, $e^{2\ln 3}=9$."
    )
    return make_task(
        title="Text-dense — five mixed exp/log micro-claims, one survivor",
        context=(
            r"Each claim is a compact exponential/logarithmic identity or evaluation. "
            r"The figure is only a $\log_2$ reference."
        ),
        statements=[
            r"$\ln(e^{3}/8)=3-\ln 8$.",
            r"$e^{\ln 5+\ln 2}=7$.",
            r"$\log_2(1/8)=3$.",
            r"$\dfrac{\ln 16}{\ln 2}=8$.",
            r"$\exp(2\ln 3)=6$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln(e^{3}/8)=\ln(e^{3})-\ln 8=3-\ln 8"),
                close(True, "Difference of logs expands the quotient"),
            ],
            [
                D(r"e^{\ln 5+\ln 2}=e^{\ln 10}=10\neq 7"),
                close(False, "The sum of logs is $\\ln 10$, not a route to $7$"),
            ],
            [
                D(r"\log_2(1/8)=\log_2(2^{-3})=-3\neq 3"),
                close(False, "The power is negative three"),
            ],
            [
                D(r"\frac{\ln 16}{\ln 2}=\log_2 16=4\neq 8"),
                close(False, "Sixteen is $2^4$, not $2^8$"),
            ],
            [
                D(r"\exp(2\ln 3)=3^{2}=9\neq 6"),
                close(False, "The nest yields nine"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
        figure=fig,
    )


def t19_rebuild_semi_log_slopes() -> dict:
    """Rebuild force from semi-log samples; compare models. 2 true."""
    P0, k = 1000.0, 0.04
    ts = [0.0, 5.0, 10.0]
    ys = [P0 * math.exp(k * t) for t in ts]
    slope_outer = (ln(ys[2]) - ln(ys[0])) / (ts[2] - ts[0])
    slope_mid = (ln(ys[1]) - ln(ys[0])) / (ts[1] - ts[0])
    # A True: outer semi-log slope = k
    # B True: mid slope = k
    # C False: discrete (1+k)^t shares slope k
    # D False: y(10)/y(0) = 1+10k
    # E False: ln y(10) - ln y(0) = 10
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(slope_outer - k) < 1e-12 and abs(slope_mid - k) < 1e-12

    table = md_table(
        ["$t$", "$y(t)$", "$\\ln y(t)$"],
        [[f"${fmt(t)}$", f"${fmt(y,2)}$", f"${fmt(ln(y),4)}$"] for t, y in zip(ts, ys)],
    )
    fig = semi_log_exp(P0, k, 12, "Semi-log path for slope rebuild")
    overview = (
        f"Semi-log slopes between any sample pair equal $k={fmt(k)}$. "
        f"Discrete slope would be $\\ln(1+k)\\approx{fmt(ln(1+k),6)}$. "
        f"Outer ratio $y(10)/y(0)=e^{{0.4}}\\approx{fmt(ys[2]/ys[0])}$, not $1+10k$."
    )
    return make_task(
        title="Rebuild — semi-log sample slopes versus discrete and linear traps",
        context=(
            "A continuous exponential is sampled at three times (table). "
            "The figure shows the semi-log path. Rebuild slopes from the samples."
        ),
        statements=[
            rf"The semi-log slope between $t={fmt(ts[0])}$ and $t={fmt(ts[2])}$ equals $k={fmt(k)}$.",
            rf"The semi-log slope between $t={fmt(ts[0])}$ and $t={fmt(ts[1])}$ equals $k={fmt(k)}$.",
            rf"The discrete path $P_0(1+{fmt(k)})^{{t}}$ shares the same semi-log slope $k$.",
            rf"$y({fmt(ts[2])})/y({fmt(ts[0])})=1+{fmt(k)}\cdot{fmt(ts[2])}$.",
            rf"$\ln y({fmt(ts[2])})-\ln y({fmt(ts[0])})=10$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"\frac{{\ln y({fmt(ts[2])})-\ln y({fmt(ts[0])})}}{{{fmt(ts[2]-ts[0])}}}={fmt(slope_outer,6)}"),
                close(True, "Outer semi-log slope recovers $k$"),
            ],
            [
                D(rf"\frac{{\ln y({fmt(ts[1])})-\ln y({fmt(ts[0])})}}{{{fmt(ts[1]-ts[0])}}}={fmt(slope_mid,6)}"),
                close(True, "Adjacent semi-log slope recovers the same $k$"),
            ],
            [
                D(rf"\ln\bigl(P_0(1+k)^{{t}}\bigr)=\ln P_0+t\ln(1+k)"),
                D(rf"\ln(1+k)\\approx{fmt(ln(1+k),6)}\neq k"),
                close(False, "Discrete semi-log slope is $\\ln(1+k)$, not $k$"),
            ],
            [
                D(rf"\frac{{y(10)}}{{y(0)}}=e^{{0.4}}\\approx{fmt(ys[2]/ys[0])}"),
                D(rf"1+10k={fmt(1+10*k)}"),
                close(False, "Linearisation $1+kt$ is not the exponential ratio"),
            ],
            [
                D(rf"\ln y(10)-\ln y(0)=k\cdot 10={fmt(k*10)}\neq 10"),
                close(False, "The log-increment is $0.4$, not $10$"),
            ],
        ],
        overview=overview,
        stem_kind="rebuild",
        figure=fig,
        tables_markdown=table,
    )


def t20_applied_two_funds_letters() -> dict:
    """Two letter-parameter funds; all five carefully true. 5 true."""
    A, alpha, B, beta = 800.0, 0.05, 1200.0, 0.02
    t_meet = ln(B / A) / (alpha - beta)
    meet_level = A * math.exp(alpha * t_meet)
    # Also = A * (B/A)^{alpha/(alpha-beta)}
    meet_alt = A * ((B / A) ** (alpha / (alpha - beta)))
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert t_meet > 0 and abs(meet_level - meet_alt) < 1e-6

    fig = competing_populations(A, alpha, B, beta, t_meet + 10, "Two letter-parameter funds")
    overview = (
        f"Funds $A(t)={fmt(A)}e^{{{fmt(alpha)}t}}$, $B(t)={fmt(B)}e^{{{fmt(beta)}t}}$. "
        f"Crossing $t^*=\\ln(B/A)/(\\alpha-\\beta)\\approx{fmt(t_meet)}$; "
        f"meeting level $\\approx{fmt(meet_level)}$. "
        f"Thereafter $A$ leads because $\\alpha>\\beta$."
    )
    return make_task(
        title="Applied letters — two funds, log crossing, and meeting-level algebra",
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
            r"The common meeting level equals $A_0\cdot(B_0/A_0)^{\alpha/(\alpha-\beta)}$.",
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
                "Substitute the meeting clock into fund $A$.",
                D(
                    r"A(t^{*})=A_0\exp\!\Bigl(\alpha\cdot\frac{\ln(B_0/A_0)}{\alpha-\beta}\Bigr)"
                    r"=A_0\cdot(B_0/A_0)^{\alpha/(\alpha-\beta)}"
                ),
                D(rf"A(t^{{*}})\\approx{fmt(meet_level)}"),
                close(True, "The power form is exactly the meeting level"),
            ],
        ],
        overview=overview,
        stem_kind="applied_letter",
        figure=fig,
    )

def t21_hybrid_cont_disc_piece() -> dict:
    """Hybrid: piecewise continuous vs a discrete rival hitting the same target. 4 true."""
    A, alpha, beta = 500.0, 0.06, 0.03
    tau = 5.0
    M = 500.0 * math.exp(alpha * tau) * math.exp(beta * 10)  # hit at t=15 by construction
    t_hit = tau + 10.0
    f_tau = A * math.exp(alpha * tau)
    # discrete rival: A(1+r)^t = M ⇒ t = ln(M/A)/ln(1+r); pick r=0.05
    r = 0.03
    t_disc = ln(M / A) / ln(1 + r)
    avg = ln(M / A) / t_hit
    # A True: t_hit = tau + ln(M/f_tau)/beta
    # B True: avg reproduces M
    # C True: t_disc > t_hit  (need verify)
    # D True: ln(M/A) = alpha*tau + beta*10
    # E False: discrete hits earlier than continuous piecewise
    key = [True, True, True, True, False]
    assert sum(key) == 4
    assert abs(t_hit - (tau + ln(M / f_tau) / beta)) < 1e-9
    assert t_disc > t_hit

    fig = piecewise_kink(A, alpha, tau, beta, t_hit + 5, "Piecewise continuous vs target")
    overview = (
        f"Piecewise hit $t_{{\\mathrm{{hit}}}}={fmt(t_hit)}$, "
        f"$\\bar k={fmt(avg,6)}$. Discrete rival with $r={fmt(r)}$ needs "
        f"$t_{{\\mathrm{{disc}}}}\\approx{fmt(t_disc)}>t_{{\\mathrm{{hit}}}}$."
    )
    return make_task(
        title="Hybrid — piecewise continuous hit racing a discrete $(1+r)^{t}$ rival",
        context=(
            f"A fund starts at $A={fmt(A)}$, grows at force $\\alpha={fmt(alpha)}$ until "
            f"$t=\\tau={fmt(tau)}$, then at force $\\beta={fmt(beta)}$. Target "
            f"$M\\approx{fmt(M,2)}$. A discrete rival starts at the same $A$ and grows by "
            f"factor $(1+r)$ each year with $r={fmt(r)}$."
        ),
        statements=[
            r"The continuous hitting time equals $\tau+\ln(M/f(\tau))/\beta$.",
            r"The path-average force $\bar k=\ln(M/A)/t_{\mathrm{hit}}$ reproduces the target.",
            r"The discrete rival reaches $M$ strictly later than the piecewise continuous path.",
            rf"$\ln(M/A)$ equals $\alpha\tau+\beta\cdot 10$.",
            r"The discrete rival reaches $M$ strictly earlier than the piecewise continuous path.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"f(\tau)=A e^{{\alpha\tau}}\\approx{fmt(f_tau)}"),
                D(rf"t_{{\mathrm{{hit}}}}=\tau+\frac{{\ln(M/f(\tau))}}{{\beta}}={fmt(t_hit)}"),
                close(True, "Late-regime log solve recovers the piecewise hitting time"),
            ],
            [
                D(rf"\bar k=\frac{{\ln(M/A)}}{{t_{{\mathrm{{hit}}}}}}={fmt(avg,6)}"),
                D(rf"A e^{{\bar k t_{{\mathrm{{hit}}}}}}=M"),
                close(True, "Average force is exactly the log-increment rate"),
            ],
            [
                D(rf"t_{{\mathrm{{disc}}}}=\frac{{\ln(M/A)}}{{\ln(1+r)}}\\approx{fmt(t_disc)}"),
                D(rf"{fmt(t_disc)}>{fmt(t_hit)}"),
                close(True, "Discrete compounding lags the piecewise continuous hit"),
            ],
            [
                D(rf"\ln(M/A)=\alpha\tau+\beta\cdot 10={fmt(alpha*tau+beta*10)}"),
                close(True, "Total log-increment is the sum of the two segments"),
            ],
            [
                D(rf"t_{{\mathrm{{disc}}}}\\approx{fmt(t_disc)}>t_{{\mathrm{{hit}}}}={fmt(t_hit)}"),
                close(False, "The discrete rival is slower, not faster"),
            ],
        ],
        overview=overview,
        stem_kind="hybrid",
        figure=fig,
    )


def t22_graph_log_gap_traps() -> dict:
    """Semi-log of pure exponential: slope/intercept/doubling traps — no straight-line claim. 1 true."""
    P0, k = 2000.0, 0.025
    t_double = ln(2) / k
    # A True: slope of ln y vs t equals k
    # B False: slope equals P0
    # C False: vertical intercept of ln y equals P0
    # D False: at t=ln2/k, y=4 P0
    # E False: discrete P0(1+k)^t shares slope k
    key = [True, False, False, False, False]
    assert sum(key) == 1

    fig = semi_log_exp(P0, k, 50, "Semi-log of a pure exponential")
    overview = (
        f"$\\ln y(t)=\\ln P_0+kt$ with $P_0={fmt(P0)}$, $k={fmt(k)}$: "
        f"slope $k$, intercept $\\ln P_0\\approx{fmt(ln(P0),4)}$. "
        f"At $t=\\ln 2/k\\approx{fmt(t_double)}$ the level is $2P_0$, not $4P_0$. "
        f"Discrete slope is $\\ln(1+k)$."
    )
    return make_task(
        title="Graph — semi-log slope, intercept, and doubling misreads",
        context=(
            f"A level $y(t)=P_0 e^{{kt}}$ with $P_0={fmt(P0)}$ and $k={fmt(k)}$ is plotted "
            f"on a semi-log chart (figure): vertical axis $\\ln y$, horizontal axis $t$."
        ),
        statements=[
            rf"The slope of $\ln y$ against $t$ equals the force $k={fmt(k)}$.",
            rf"The slope of that line equals $P_0={fmt(P0)}$.",
            rf"The vertical intercept of $\ln y$ equals $P_0$.",
            rf"At $t=\ln 2/k$ the level equals $4P_0$.",
            rf"The discrete path $P_0(1+{fmt(k)})^{{t}}$ shares the same semi-log slope $k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln y(t)=\ln P_0+kt"),
                D(rf"\mathrm{{slope}}=k={fmt(k)}"),
                close(True, "Differentiating the log-level recovers the force"),
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


def t23_table_cont_disc_balances() -> dict:
    """Table of continuous vs discrete balances; five true log-return claims. 5 true."""
    P, r = 1000.0, 0.05
    k = ln(1 + r)  # match at 1 year? Or use k=r
    # Use k=0.05 continuous vs discrete r=0.05
    k = 0.05
    years = [1.0, 5.0, 10.0]
    rows = []
    for t in years:
        rows.append([f"${fmt(t)}$", f"${fmt(P*math.exp(k*t),2)}$", f"${fmt(P*((1+r)**t),2)}$"])
    # A True: cont > disc at each listed t>0 (since e^{kt}>(1+k)^t for k=r=0.05? 
    # Actually e^{0.05}≈1.05127 > 1.05, so yes cont > disc
    # B True: ln(cont(10)/P)=10k=0.5
    # C True: ln(disc(10)/P)=10 ln(1+r)
    # D True: cont(10)/cont(5) = e^{5k}
    # E True: disc(10)/disc(5) = (1+r)^5
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert math.exp(k) > (1 + r)

    table = md_table(["$t$", "continuous $Pe^{kt}$", "discrete $P(1+r)^{t}$"], rows)
    fig = two_models(P, k, 1 + r, 12, "Continuous vs discrete balances")
    overview = (
        f"With $k=r={fmt(k)}$, continuous leads because $e^{{k}}>1+k$. "
        f"$\\ln(P e^{{10k}}/P)=0.5$, $\\ln(P(1+r)^{{10}}/P)=10\\ln(1+r)\\approx{fmt(10*ln(1+r),4)}$."
    )
    return make_task(
        title="Table — continuous versus discrete balances and exact log-returns",
        context=(
            f"A principal $P={fmt(P)}$ grows either continuously at force $k={fmt(k)}$ "
            f"or discretely by factor $(1+r)$ each year with $r={fmt(r)}$. "
            f"Balances at selected times are tabulated."
        ),
        statements=[
            r"At each tabulated positive time, the continuous balance strictly exceeds the discrete balance.",
            r"$\ln(P e^{10k}/P)=0.5$.",
            rf"$\ln\!\bigl(P(1+r)^{{10}}/P\bigr)=10\ln(1+r)$.",
            r"The continuous five-year growth factor from $t=5$ to $t=10$ equals $e^{5k}$.",
            r"The discrete five-year growth factor from $t=5$ to $t=10$ equals $(1+r)^{5}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"e^{{k}}={fmt(math.exp(k),6)}>(1+r)={fmt(1+r)}"),
                "so the continuous path stays strictly above the discrete path for all $t>0$.",
                close(True, "Strict dominance holds at every tabulated positive time"),
            ],
            [
                D(r"\ln(e^{10k})=10k=0.5"),
                close(True, "Ten years at force $0.05$ give log-return $0.5$"),
            ],
            [
                D(r"\ln((1+r)^{10})=10\ln(1+r)"),
                close(True, "Discrete log-return is years times $\\ln(1+r)$"),
            ],
            [
                D(r"\frac{P e^{10k}}{P e^{5k}}=e^{5k}"),
                close(True, "Continuous growth factors multiply by adding exponents"),
            ],
            [
                D(r"\frac{P(1+r)^{10}}{P(1+r)^{5}}=(1+r)^{5}"),
                close(True, "Discrete growth factors multiply by adding years in the exponent"),
            ],
        ],
        overview=overview,
        stem_kind="table",
        figure=fig,
        tables_markdown=table,
    )


def t24_symbolic_log_exp_domain() -> dict:
    """Symbolic domain/range traps for mixed compositions. 3 true."""
    # f(x)=ln(e^x - 1) for x>0; g(y)=ln(1+e^y)
    # Simpler concrete:
    # A True: domain of ln(e^x - 1) is x>0
    # B True: ln(e^x - 1) < x for all x>0
    # C True: exp(ln(3)-ln(2))=3/2
    # D False: domain of ln(e^x - 1) includes x=0
    # E False: ln(e^x - 1) > x for x>1
    key = [True, True, True, False, False]
    assert sum(key) == 3
    # verify B: ln(e^x - 1) < x iff e^x - 1 < e^x iff -1<0 True
    assert abs(math.exp(ln(3) - ln(2)) - 1.5) < 1e-12

    fig = svg_curves(
        [(lambda x: math.log(math.exp(x) - 1) if x > 0.05 else float("nan"), "#8B5A2B", "ln(e^x-1)")],
        xmin=0.1,
        xmax=4,
        title="ln(e^x-1) on (0,∞)",
        xlabel="x",
        ylabel="value",
    )
    overview = (
        r"Domain of $\ln(e^{x}-1)$ is $x>0$. "
        r"For $x>0$, $\ln(e^{x}-1)<x$ because $e^{x}-1<e^{x}$. "
        r"$\exp(\ln 3-\ln 2)=3/2$. At $x=0$ the argument vanishes."
    )
    return make_task(
        title="Symbolic — domain of $\\ln(e^{x}-1)$ and nested exp/log evaluations",
        context=(
            r"Consider $h(x)=\ln(e^{x}-1)$ together with standard nested exp/log "
            r"evaluations. The figure sketches $h$ on $(0,\infty)$."
        ),
        statements=[
            r"The natural domain of $h(x)=\ln(e^{x}-1)$ is the open half-line $x>0$.",
            r"For every $x>0$, $h(x)<x$.",
            r"$\exp(\ln 3-\ln 2)=3/2$.",
            r"The point $x=0$ lies in the natural domain of $h$.",
            r"For every $x>1$, $h(x)>x$.",
        ],
        answer_key=key,
        bodies=[
            [
                "Need $e^{x}-1>0$, i.e. $e^{x}>1$, i.e. $x>0$.",
                D(r"e^{x}-1>0\iff x>0"),
                close(True, "The natural domain is exactly the positive half-line"),
            ],
            [
                D(r"h(x)<x\iff e^{x}-1<e^{x}\iff -1<0"),
                close(True, "The inequality holds for every $x>0$"),
            ],
            [
                D(r"\exp(\ln 3-\ln 2)=\exp(\ln(3/2))=3/2"),
                close(True, "Difference of logs becomes a quotient under exp"),
            ],
            [
                D(r"e^{0}-1=0"),
                "and $\\ln 0$ is undefined.",
                close(False, "Zero is not in the domain"),
            ],
            [
                "The opposite inequality was already ruled out in B.",
                D(r"h(x)<x\quad(x>0)"),
                close(False, "In particular $h(x)$ never exceeds $x$ on $(1,\\infty)$"),
            ],
        ],
        overview=overview,
        stem_kind="symbolic",
        figure=fig,
    )


def t25_parametric_domain_side() -> dict:
    """Parametric family with domain side-condition on log. 2 true."""
    # y_a(t)=a e^{0.1 t}, require ln(a)=1 ⇒ a=e
    a = math.e
    k = 0.1
    # A True: a=e
    # B True: y_a(ln10 / k)=10 e   because e^{k t}=10
    # C False: y_a(10)=10 a
    # D False: domain of ln(y_a(t)) excludes some t (never, always positive)
    # E False: doubling time is ln2 / a
    t10 = ln(10) / k
    key = [True, True, False, False, False]
    assert sum(key) == 2
    assert abs(a * math.exp(k * t10) - 10 * a) < 1e-9

    fig = svg_exp(P0=a, k=k, tmax=t10 + 2, title="Parametric path with ln a = 1", mark_t=t10)
    overview = (
        f"Constraint $\\ln a=1$ forces $a=e$. Force $k={fmt(k)}$. "
        f"Clock $t=\\ln 10/k={fmt(t10)}$ sends the path to $10e$. "
        f"Doubling time is $\\ln 2/k$, not $\\ln 2/a$."
    )
    return make_task(
        title="Parametric — log side-condition on the initial level",
        context=(
            rf"For $a>0$ let $y_a(t)=a e^{{{fmt(k)}t}}$. Impose the side-condition "
            rf"$\ln a=1$."
        ),
        statements=[
            r"$a=e$.",
            rf"$y_a(\ln 10/k)=10e$.",
            rf"$y_a(10)=10a$.",
            r"There exist times $t$ at which $\ln(y_a(t))$ is undefined.",
            r"The doubling time equals $\ln 2/a$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln a=1\implies a=e"),
                close(True, "The side-condition fixes the initial level"),
            ],
            [
                D(rf"y_a(\ln 10/k)=e\cdot e^{{\ln 10}}=10e"),
                close(True, "The nest multiplies the initial level by ten"),
            ],
            [
                D(rf"y_a(10)=a e^{{10k}}=a e={fmt(a*math.exp(1))}"),
                D(rf"10a={fmt(10*a)}"),
                close(False, "Exponent $10k=1$ yields factor $e$, not $10$"),
            ],
            [
                D(r"y_a(t)=a e^{kt}>0\quad\text{for all }t"),
                close(False, "The log-level is defined for every real $t$"),
            ],
            [
                D(rf"t_{{\times 2}}=\frac{{\ln 2}}{{k}}={fmt(ln(2)/k)}\neq\frac{{\ln 2}}{{a}}"),
                close(False, "Doubling uses the force in the denominator, not the initial level"),
            ],
        ],
        overview=overview,
        stem_kind="parametric",
        figure=fig,
    )

def t26_piecewise_wrong_average() -> dict:
    """Piecewise path with a wrong arithmetic-average trap. 1 true."""
    P0, k1, T, k2 = 400.0, 0.08, 4.0, 0.02
    t = 12.0
    log_inc = k1 * T + k2 * (t - T)
    avg = log_inc / t
    arith = (k1 + k2) / 2
    ft = P0 * math.exp(log_inc)
    key = [True, False, False, False, False]
    assert sum(key) == 1
    assert abs(avg - arith) > 1e-6 and ft > P0

    fig = piecewise_kink(P0, k1, T, k2, t, "Piecewise path vs wrong averages")
    overview = (
        f"True path-average $\\bar k={fmt(avg,6)}$ from log-increment "
        f"${fmt(log_inc)}$. Arithmetic mean $(k_1+k_2)/2={fmt(arith)}$ "
        f"and the late force $k_2$ both mis-predict $f(t)\\approx{fmt(ft)}$."
    )
    return make_task(
        title="Piecewise — true log-average versus arithmetic-mean traps",
        context=(
            f"A path starts at $P_0={fmt(P0)}$, grows at force $k_1={fmt(k1)}$ on "
            f"$[0,{fmt(T)}]$, then at force $k_2={fmt(k2)}$ through $t={fmt(t)}$."
        ),
        statements=[
            rf"The path-average force equals $\ln(f({fmt(t)})/P_0)/{fmt(t)}$.",
            r"The path-average force equals $(k_1+k_2)/2$.",
            rf"$f({fmt(t)})=P_0 e^{{((k_1+k_2)/2)\cdot{fmt(t)}}}$.",
            r"The path-average force equals the late force $k_2$.",
            rf"$f({fmt(t)})<P_0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"\bar k=\frac{{\ln(f(t)/P_0)}}{{t}}=\frac{{{fmt(log_inc)}}}{{{fmt(t)}}}={fmt(avg,6)}"),
                close(True, "Path-average is log-increment over elapsed time"),
            ],
            [
                D(rf"\frac{{k_1+k_2}}{{2}}={fmt(arith)}\neq\bar k={fmt(avg,6)}"),
                close(False, "Equal-weight arithmetic mean ignores unequal segment lengths"),
            ],
            [
                D(rf"P_0 e^{{\mathrm{{arith}}\cdot t}}\\approx{fmt(P0*math.exp(arith*t))}"),
                D(rf"f(t)\\approx{fmt(ft)}"),
                close(False, "Exponentiating the arithmetic mean misses the true level"),
            ],
            [
                D(rf"\bar k={fmt(avg,6)}\neq k_2={fmt(k2)}"),
                close(False, "The early high-force segment still lifts the average"),
            ],
            [
                D(rf"f(t)\\approx{fmt(ft)}>P_0"),
                close(False, "Both forces are positive, so the level rises"),
            ],
        ],
        overview=overview,
        stem_kind="piecewise",
        figure=fig,
    )


def t27_nested_double_log_growth() -> dict:
    """Double-log nests beside a growth model; five true claims. 5 true."""
    k = 0.5
    t_mark = 2 * ln(2)
    key = [True, True, True, True, True]
    assert sum(key) == 5
    assert abs(ln(ln(math.exp(math.e))) - 1) < 1e-12
    assert abs(math.exp(ln(ln(math.exp(math.e)))) - math.e) < 1e-9
    assert abs(math.log(math.exp(ln(8)), 2) - 3) < 1e-12
    assert abs(ln(math.exp(k * t_mark)) - ln(2)) < 1e-12

    fig = svg_exp(P0=1.0, k=k, tmax=6, title="Side path P(t)=e^{0.5 t}", mark_t=t_mark)
    overview = (
        r"Nests: $\ln(\ln e^{e})=1$, $\exp(\ln(\ln e^{e}))=e$, "
        r"$\log_2(e^{\ln 8})=3$. Side path $P(t)=e^{0.5 t}$ satisfies "
        r"$\ln P(2\ln 2)=\ln 2$ and $(\ln P(t))/t=1/2$."
    )
    return make_task(
        title="Nested — double logs, change-of-base, and a side growth path",
        context=(
            r"Evaluate nested exponential/logarithmic compositions, and use the side "
            r"path $P(t)=e^{0.5 t}$ (figure)."
        ),
        statements=[
            r"$\ln(\ln e^{e})=1$.",
            r"$\exp\!\bigl(\ln(\ln e^{e})\bigr)=e$.",
            r"$\log_2\!\bigl(\exp(\ln 8)\bigr)=3$.",
            r"$\ln\!\bigl(P(2\ln 2)\bigr)=\ln 2$.",
            r"For every $t\neq 0$, $\dfrac{\ln P(t)}{t}=\dfrac{1}{2}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln e^{e}=e,\qquad \ln(\ln e^{e})=\ln e=1"),
                close(True, "The double log peels down to $1$"),
            ],
            [
                D(r"\ln(\ln e^{e})=1,\qquad \exp(1)=e"),
                close(True, "One outer exponential restores $e$"),
            ],
            [
                D(r"\exp(\ln 8)=8,\qquad \log_2 8=3"),
                close(True, "Inner cancellation leaves an integer base-$2$ log"),
            ],
            [
                D(r"P(2\ln 2)=e^{0.5\cdot 2\ln 2}=e^{\ln 2}=2"),
                D(r"\ln 2=\ln 2"),
                close(True, "The marked clock sends the side path to $2$"),
            ],
            [
                D(r"\frac{\ln P(t)}{t}=\frac{0.5 t}{t}=\frac{1}{2}"),
                close(True, "Log-level over time recovers the constant force"),
            ],
        ],
        overview=overview,
        stem_kind="nested",
        figure=fig,
    )


def t28_text_dense_inverse_traps() -> dict:
    """Dense inverse / composition traps for exp and log. 2 true."""
    # A True: (ln ∘ exp)(x)=x for all real x
    # B True: (exp ∘ ln)(x)=x for all x>0
    # C False: (ln ∘ exp)(x)=x for complex... keep real: claim domain of exp∘ln is all reals F
    # D False: ln(exp(x)+exp(-x))=0 for all x? Only x=0? Actually cosh... ln(2cosh x)≠0
    # E False: inverse of e^{2t} is (1/2)e^{-something} — claim g(y)=ln y  F (is (1/2)ln y)
    key = [True, True, False, False, False]
    assert sum(key) == 2

    fig = svg_curves(
        [
            (lambda x: x, "#8B5A2B", "id"),
            (lambda x: math.exp(math.log(x)) if x > 0.05 else float("nan"), "#2F5D50", "exp∘ln", "6 4"),
        ],
        xmin=0.2,
        xmax=5,
        title="exp∘ln agrees with id on (0,∞)",
        xlabel="x",
        ylabel="value",
    )
    overview = (
        r"$(\ln\circ\exp)(x)=x$ on $\mathbb{R}$; $(\exp\circ\ln)(x)=x$ on $(0,\infty)$ only. "
        r"$\ln(e^{x}+e^{-x})=\ln(2\cosh x)\neq 0$ in general. "
        r"Inverse of $e^{2t}$ is $\frac{1}{2}\ln y$."
    )
    return make_task(
        title="Text-dense — inverse compositions and a wrong inverse formula",
        context=(
            r"Compare the compositions $\ln\circ\exp$ and $\exp\circ\ln$, and invert "
            r"the map $f(t)=e^{2t}$."
        ),
        statements=[
            r"$(\ln\circ\exp)(x)=x$ for every real $x$.",
            r"$(\exp\circ\ln)(x)=x$ for every $x>0$.",
            r"$(\exp\circ\ln)(x)=x$ for every real $x$.",
            r"$\ln(e^{x}+e^{-x})=0$ for every real $x$.",
            r"The inverse of $f(t)=e^{2t}$ is $g(y)=\ln y$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln(e^{x})=x"),
                close(True, "Natural log undoes the exponential on the whole line"),
            ],
            [
                D(r"\exp(\ln x)=x\qquad(x>0)"),
                close(True, "On the positive reals the other composition is the identity"),
            ],
            [
                "At $x=-1$, $\\ln x$ is undefined over the reals.",
                close(False, "The domain of $\\exp\\circ\\ln$ is only $(0,\\infty)$"),
            ],
            [
                D(r"\ln(e^{x}+e^{-x})=\ln(2\cosh x)"),
                D(r"\ln(2\cosh 0)=\ln 2\neq 0"),
                close(False, "Even at $x=0$ the value is $\\ln 2$, not $0$"),
            ],
            [
                D(r"y=e^{2t}\implies t=\frac{1}{2}\ln y"),
                D(r"\frac{1}{2}\ln y\neq\ln y\quad(y\neq 1)"),
                close(False, "The factor $2$ in the exponent forces a factor $1/2$ in the inverse"),
            ],
        ],
        overview=overview,
        stem_kind="text_dense",
        figure=fig,
    )


def t29_rebuild_two_obs_cross() -> dict:
    """Rebuild two forces from a joint table, then crossing comparisons. 3 true."""
    A0, kA, B0, kB = 600.0, 0.04, 900.0, 0.01
    t_obs = 8.0
    A8 = A0 * math.exp(kA * t_obs)
    B8 = B0 * math.exp(kB * t_obs)
    t_meet = ln(B0 / A0) / (kA - kB)
    key = [True, True, True, False, False]
    assert sum(key) == 3
    assert t_meet > t_obs and A8 < B8

    table = md_table(
        ["$t$", "$A(t)$", "$B(t)$"],
        [
            ["$0$", f"${fmt(A0)}$", f"${fmt(B0)}$"],
            [f"${fmt(t_obs)}$", f"${fmt(A8,2)}$", f"${fmt(B8,2)}$"],
        ],
    )
    fig = competing_populations(A0, kA, B0, kB, t_meet + 8, "Rebuild then cross")
    overview = (
        f"Recovered $k_A={fmt(kA)}$, $k_B={fmt(kB)}$. "
        f"Future crossing $t^*\\approx{fmt(t_meet)}$. "
        f"At $t={fmt(t_obs)}$, $A\\approx{fmt(A8,2)}<B\\approx{fmt(B8,2)}$."
    )
    return make_task(
        title="Rebuild — two tabulated forces and a still-future crossing",
        context=(
            "Two continuous exponential series are observed at $t=0$ and "
            f"$t={fmt(t_obs)}$ (table). Rebuild both forces, then judge the claims."
        ),
        statements=[
            rf"$k_A=\ln\!\bigl(A({fmt(t_obs)})/A(0)\bigr)/{fmt(t_obs)}$.",
            rf"$k_B=\ln\!\bigl(B({fmt(t_obs)})/B(0)\bigr)/{fmt(t_obs)}$.",
            r"A future crossing time $t^{*}>0$ exists.",
            rf"The crossing already occurs on $[0,{fmt(t_obs)}]$.",
            rf"At $t={fmt(t_obs)}$, series $A$ already exceeds series $B$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(rf"k_A=\frac{{\ln(A({fmt(t_obs)})/A(0))}}{{{fmt(t_obs)}}}={fmt(kA)}"),
                close(True, "Log recovery returns force $0.04$"),
            ],
            [
                D(rf"k_B=\frac{{\ln(B({fmt(t_obs)})/B(0))}}{{{fmt(t_obs)}}}={fmt(kB)}"),
                close(True, "Log recovery returns force $0.01$"),
            ],
            [
                D(rf"t^*=\frac{{\ln(B_0/A_0)}}{{k_A-k_B}}\\approx{fmt(t_meet)}>0"),
                close(True, "A future crossing exists because $k_A>k_B$ and $B_0>A_0$"),
            ],
            [
                D(rf"t^*\\approx{fmt(t_meet)}>{fmt(t_obs)}"),
                close(False, "The crossing lies after the observation window"),
            ],
            [
                D(rf"A({fmt(t_obs)})\\approx{fmt(A8,2)}<B({fmt(t_obs)})\\approx{fmt(B8,2)}"),
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
    p, g, t = 0.01, 0.03, 25.0
    Y0, N0 = 120.0, 8.0
    k = g - p
    # Constraint ln(g/p)=ln 3 ⇒ g=3p already built in
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
    t01_hybrid_piecewise_thresholds,
    t02_graph_competing_cross,
    t03_table_recover_compare,
    t04_symbolic_nested_inverses,
    t05_parametric_family_one_survivor,
    t06_piecewise_avg_and_threshold,
    t07_nested_exp_log_mash,
    t08_text_dense_clocks,
    t09_rebuild_from_three_obs,
    t10_applied_gdp_one_survivor,
    t11_hybrid_piece_elasticity,
    t12_graph_decay_vs_invest,
    t13_table_two_series_cross,
    t14_symbolic_change_base_ineq,
    t15_parametric_force_threshold,
    t16_piecewise_gdp_switch,
    t17_nested_inverse_constraints,
    t18_text_dense_mixed_identities,
    t19_rebuild_semi_log_slopes,
    t20_applied_two_funds_letters,
    t21_hybrid_cont_disc_piece,
    t22_graph_log_gap_traps,
    t23_table_cont_disc_balances,
    t24_symbolic_log_exp_domain,
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
    forbidden = [
        "the semi-log graph is a straight line",
        "is the graph a straight line",
        "is it decreasing",
        "meets the axis at",
        "the asymptote is visible",
    ]
    for i, builder in enumerate(BUILDERS):
        task = builder()
        assert task["stem_kind"] == STEMS[i % len(STEMS)], (i, task["stem_kind"])
        got = sum(1 for v in task["answer_key"] if v)
        assert got == PLANNED_TRUTHS[i], (i, builder.__name__, got, PLANNED_TRUTHS[i])
        assert TAIL in task["context"]
        assert len(task["statements"]) == 5
        assert len(task["tactical_explanations"]) == 5
        blob_l = json_safe_blob(task).lower()
        for phrase in forbidden:
            assert phrase not in blob_l, (i, phrase)
        for j, ex in enumerate(task["tactical_explanations"]):
            letter = LETTERS[j]
            verd = "True" if task["answer_key"][j] else "False"
            assert ex.startswith(f"**{letter}.** → {verd}"), (i, j, ex[:60])
            assert ex.rstrip().endswith(f"So the statement is {verd}."), (i, j)
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
    print("true_hist", dict(sorted(Counter(sum(t["answer_key"]) for t in ts).items())))
    print("stems", dict(Counter(t["stem_kind"] for t in ts)))
