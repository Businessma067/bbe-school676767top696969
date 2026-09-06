#!/usr/bin/env python3
"""Hard Chapter 10.1 exponential exam bank (from-scratch rewrite).

Exports:
    EXP_COUNT = 44
    build_exp_tasks() -> list[dict]
"""
from __future__ import annotations

import math
import re
import sys
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import (  # noqa: E402
    competing_populations,
    exp_growth,
    gdp_per_capita,
    piecewise_kink,
    semi_log_exp,
    svg_curves,
    svg_exp,
    two_models,
)

EXP_COUNT = 44
LETTERS = "ABCDE"
TAIL = "Evaluate each statement. Mark it TRUE or FALSE."
LN2 = math.log(2)
LN3 = math.log(3)


def D(s: str) -> str:
    return f"$${s}$$"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    verd = "True" if truth else "False"
    body = "\n\n".join(p.strip() for p in parts if p and str(p).strip()).strip()
    if body.endswith("$$"):
        return f"**{letter}.** → {verd}\n\n{body}\n\nSo the statement is {verd}."
    body = body.rstrip(".")
    return f"**{letter}.** → {verd}\n\n{body}.\n\nSo the statement is {verd}."


def _ensure_tail(context: str) -> str:
    ctx = context.strip()
    if "TRUE or FALSE" not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + TAIL
    return ctx


def make_task(
    *,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    bodies: list[list[str]],
    solution_overview: str,
    stem_kind: str,
    figure: str | None = None,
    tables_markdown: str | None = None,
) -> dict[str, Any]:
    assert len(statements) == 5 and len(answer_key) == 5 and len(bodies) == 5
    teas = [pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    return {
        "title": title,
        "context": _ensure_tail(context),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": solution_overview.strip(),
        "stem_kind": stem_kind,
        "figure": figure,
        "tables_markdown": tables_markdown,
    }


# ---------------------------------------------------------------------------
# 01–11
# ---------------------------------------------------------------------------


def t01() -> dict[str, Any]:
    k = LN2 / 8
    fig = exp_growth(1024, k, 24, "Continuous level P(t)=1024 e^{(ln 2)t/8}", ylabel="P(t)")
    return make_task(
        title="Doubling clock and multi-step ratios on a continuous path",
        context=(
            r"A continuous stock follows $P(t)=1024\,e^{kt}$ with unknown force $k>0$. "
            r"The figure is consistent with the marked heights $P(0)=1024$ and $P(8)=2048$."
        ),
        statements=[
            r"Recovering the force from $P(8)/P(0)=2$ yields $k=\dfrac{\ln 2}{8}$, so $P(16)=4096$.",
            r"The unique doubling time $T$ solving $P(T)=2P(0)$ equals $8$, and therefore $P(24)/P(0)=8$.",
            r"The average relative change $\dfrac{P(8)-P(0)}{8P(0)}$ equals the force $k$.",
            r"Solving $P(t)=512$ yields $t=-8$, which is not a time in the plotted window $t\ge 0$.",
            r"Because $e^{4k}=\sqrt{2}$, the identity $P(4)=\dfrac{P(0)+P(8)}{2}$ holds.",
        ],
        answer_key=[True, True, False, True, False],
        bodies=[
            [
                r"The marked heights give the eight-unit growth factor.",
                D(r"\frac{P(8)}{P(0)}=\frac{2048}{1024}=2=e^{8k}"),
                D(r"k=\frac{\ln 2}{8}"),
                r"Two doubling intervals multiply by four.",
                D(r"P(16)=1024\cdot e^{16k}=1024\cdot 4=4096"),
            ],
            [
                r"Doubling solves $e^{kT}=2$, hence $T=\ln 2/k=8$.",
                D(r"P(24)=1024\cdot e^{24k}=1024\cdot 2^{3}=8192"),
                D(r"\frac{P(24)}{P(0)}=8"),
            ],
            [
                r"The average relative change over $[0,8]$ is the linear rise per unit time.",
                D(r"\frac{P(8)-P(0)}{8P(0)}=\frac{1}{8}"),
                D(r"k=\frac{\ln 2}{8}\neq\frac{1}{8}"),
                r"The force is the log-rate, not that linear relative rise.",
            ],
            [
                r"Halving asks for $e^{kt}=1/2$.",
                D(r"t=-\frac{\ln 2}{k}=-8"),
                r"A negative abscissa is outside the plotted window $t\ge 0$.",
            ],
            [
                r"The time midpoint is the geometric mean of the endpoint heights.",
                D(r"P(4)=1024\sqrt{2}"),
                D(r"\frac{P(0)+P(8)}{2}=1536"),
                D(r"1024\sqrt{2}\neq 1536"),
            ],
        ],
        solution_overview=(
            r"From $P(8)/P(0)=2$ recover $k=\ln 2/8$. Powers of two settle later heights; "
            r"the linear relative rise $1/8$ is not $k$; the midpoint $P(4)$ is geometric."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t02() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $1$ | $2$ | $3$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $P(t)$ | $250$ | $500$ | $1000$ | $2000$ |"
    )
    return make_task(
        title="Recover continuous force from an exact doubling table",
        context=(
            r"A positive level is known to be continuous-exponential, $P(t)=P_0 e^{kt}$. "
            r"The table records exact (unrounded) samples at four consecutive integers."
        ),
        statements=[
            r"Every consecutive ratio equals $2$, so the continuous force is $k=\ln 2$.",
            r"The same force is recovered from the two-step ratio: $\dfrac{1}{2}\ln\dfrac{P(2)}{P(0)}=\ln 2$.",
            r"The discrete model $Q(t)=250\cdot(1+\ln 2)^{t}$ reproduces every tabulated height.",
            r"Solving $P(t)=4000$ yields the integer time $t=4$.",
            r"The identity $\ln P(3)-\ln P(1)=2\ln 2$ holds, confirming constant force on that window.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                r"Read consecutive ratios from the table.",
                D(r"\frac{500}{250}=\frac{1000}{500}=\frac{2000}{1000}=2"),
                D(r"e^{k}=2\qquad k=\ln 2"),
            ],
            [
                r"A two-step jump multiplies by four, so half the log recovers $k$.",
                D(r"\frac{P(2)}{P(0)}=\frac{1000}{250}=4"),
                D(r"\frac{1}{2}\ln 4=\ln 2"),
            ],
            [
                r"The continuous one-year factor is $e^{k}=2$, while the discrete rival uses $1+\ln 2$.",
                D(r"1+\ln 2\neq 2"),
                r"Already at $t=1$ the discrete model yields $250(1+\ln 2)\neq 500$.",
            ],
            [
                r"From $P(t)=250\cdot 2^{t}=4000$ obtain $2^{t}=16$.",
                D(r"t=4"),
            ],
            [
                r"Constant force means equal log-increments on equal time gaps.",
                D(r"\ln P(3)-\ln P(1)=\ln\frac{2000}{500}=\ln 4=2\ln 2"),
            ],
        ],
        solution_overview=(
            r"The table is pure doubling: $P(t)=250\cdot 2^{t}=250 e^{(\ln 2)t}$. "
            r"Any recovery of $k$ from a ratio $\ln(P(t+\Delta)/P(t))/\Delta$ returns $\ln 2$. "
            r"Replacing $e^{k}$ by $1+k$ breaks the table."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t03() -> dict[str, Any]:
    kA, kB = LN2 / 6, LN2 / 3
    fig = competing_populations(400, kA, 100, kB, 24, "Populations A and B")
    return make_task(
        title="Crossing time of two continuous populations",
        context=(
            r"Two populations follow $A(t)=400\,e^{k_A t}$ and $B(t)=100\,e^{k_B t}$ with "
            r"$k_A=\dfrac{\ln 2}{6}$ and $k_B=\dfrac{\ln 2}{3}$. The figure sketches both paths."
        ),
        statements=[
            r"The unique crossing time in $t>0$ is $t=12$, where $A(12)=B(12)=1600$.",
            r"At $t=6$ the ratio $A(6)/B(6)$ equals $2$.",
            r"Because $k_B=2k_A$, the crossing time equals half the doubling time of $A$.",
            r"For every $t>12$ one has $B(t)>A(t)$.",
            r"The product $A(t)B(t)$ is continuous-exponential with force $k_A+k_B=\dfrac{\ln 2}{2}$.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                r"Set $A(t)=B(t)$ and cancel the common exponential shape.",
                D(r"400 e^{k_A t}=100 e^{k_B t}"),
                D(r"4=e^{(k_B-k_A)t}=e^{(\ln 2/6)t}"),
                D(r"t=\frac{6\ln 4}{\ln 2}=12"),
                D(r"A(12)=400\cdot 2^{2}=1600=B(12)"),
            ],
            [
                r"Substitute $t=6$ into both rules.",
                D(r"A(6)=400\cdot e^{\ln 2}=800"),
                D(r"B(6)=100\cdot e^{2\ln 2}=400"),
                D(r"A(6)/B(6)=2"),
            ],
            [
                r"The doubling time of $A$ is $T_A=\ln 2/k_A=6$. Half of that is $3$, not the crossing time $12$.",
                D(r"t_{\mathrm{cross}}=\frac{\ln(A_0/B_0)}{k_B-k_A}=12\neq 3"),
            ],
            [
                r"After the crossing, the faster force $k_B$ dominates.",
                D(r"\frac{B(t)}{A(t)}=\frac{1}{4}e^{(k_B-k_A)t}"),
                r"For $t>12$ the exponential factor exceeds $4$, so $B>A$.",
            ],
            [
                r"Multiply the two closed forms.",
                D(r"A(t)B(t)=40000\,e^{(k_A+k_B)t}"),
                D(r"k_A+k_B=\frac{\ln 2}{6}+\frac{\ln 2}{3}=\frac{\ln 2}{2}"),
            ],
        ],
        solution_overview=(
            r"Crossing solves $400 e^{k_A t}=100 e^{k_B t}$, giving $t=12$. "
            r"Ratios before/after follow $e^{(k_B-k_A)t}$. The product carries force $k_A+k_B$."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t04() -> dict[str, Any]:
    return make_task(
        title="Nested exponential equation $e^{2x}-5e^{x}+6=0$",
        context=(
            r"Let $u=e^{x}$ and consider the quadratic relation "
            r"$e^{2x}-5e^{x}+6=0$ for real $x$."
        ),
        statements=[
            r"The substitution $u=e^{x}$ factors the equation as $(u-2)(u-3)=0$, so the real solutions are $x=\ln 2$ and $x=\ln 3$.",
            r"Both roots satisfy $e^{x}>1$, so both solution abscissae are strictly positive.",
            r"The sum of the two real solutions equals $\ln 6$.",
            r"Replacing the left-hand side by $(e^{x}-2)(e^{x}-4)$ yields the same solution set.",
            r"If $x=\ln 2$, then $e^{2x}+6=5e^{x}$ holds as a numerical identity.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                r"Set $u=e^{x}>0$ and factor.",
                D(r"u^{2}-5u+6=(u-2)(u-3)=0"),
                D(r"u=2\ \text{or}\ u=3"),
                D(r"x=\ln 2\ \text{or}\ x=\ln 3"),
            ],
            [
                r"Both $2$ and $3$ exceed $1$, and $\ln$ is increasing.",
                D(r"\ln 2>0\qquad \ln 3>0"),
            ],
            [
                r"Add the two logarithms.",
                D(r"\ln 2+\ln 3=\ln 6"),
            ],
            [
                r"The rival factorisation $(e^{x}-2)(e^{x}-4)=0$ has roots $\ln 2$ and $\ln 4$.",
                D(r"\{\ln 2,\ln 4\}\neq\{\ln 2,\ln 3\}"),
            ],
            [
                r"At $x=\ln 2$ both sides of the rearranged equation match.",
                D(r"e^{2\ln 2}+6=4+6=10"),
                D(r"5e^{\ln 2}=10"),
            ],
        ],
        solution_overview=(
            r"With $u=e^{x}$ the equation is $(u-2)(u-3)=0$. "
            r"Real roots are $\ln 2$ and $\ln 3$; their sum is $\ln 6$. "
            r"A different factorisation changes the root set."
        ),
        stem_kind="symbolic",
    )


def t05() -> dict[str, Any]:
    fig = piecewise_kink(80, LN2, 3, -LN2 / 2, 9, "Piecewise force switch at T=3")
    return make_task(
        title="Piecewise exponential with a force switch at $T=3$",
        context=(
            r"A continuous level follows $P(t)=80\,e^{(\ln 2)\,t}$ for $0\le t\le 3$, and "
            r"$P(t)=P(3)\,e^{-(\ln 2/2)(t-3)}$ for $t\ge 3$. The figure shows the kink at the switch."
        ),
        statements=[
            r"Continuity at the switch forces $P(3)=640$.",
            r"The later rule gives $P(5)=320$ and $P(7)=160$.",
            r"The time $t=5$ is a half-life measured from the switch: $P(5)=\tfrac12 P(3)$.",
            r"Extending the first force past $t=3$ would give $P(5)=80\cdot 2^{5}=2560$, which matches the piecewise value.",
            r"The average force on $[0,7]$, defined by $P(7)=80\,e^{k_{\mathrm{avg}}\cdot 7}$, equals $\dfrac{\ln 2}{7}$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                r"Substitute the switch time into the first piece.",
                D(r"P(3)=80\cdot e^{3\ln 2}=80\cdot 8=640"),
            ],
            [
                r"From the second piece with force $-\ln 2/2$.",
                D(r"P(5)=640\cdot e^{-\ln 2}=320"),
                D(r"P(7)=640\cdot e^{-2\ln 2}=160"),
            ],
            [
                r"Two units of time at force $-\ln 2/2$ multiply by $e^{-\ln 2}=1/2$.",
                D(r"P(5)=\tfrac12 P(3)"),
            ],
            [
                r"Blindly extending the first force contradicts the switch.",
                D(r"80\cdot 2^{5}=2560\neq 320"),
            ],
            [
                r"Match the endpoint to a single exponential.",
                D(r"160=80\,e^{7k_{\mathrm{avg}}}"),
                D(r"e^{7k_{\mathrm{avg}}}=2\qquad k_{\mathrm{avg}}=\frac{\ln 2}{7}"),
            ],
        ],
        solution_overview=(
            r"Match at $t=3$ to get $P(3)=640$, then decay with force $-\ln 2/2$. "
            r"Endpoint matching recovers the average force $\ln 2/7$ on $[0,7]$."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t06() -> dict[str, Any]:
    fig = gdp_per_capita(1000, 0.06, 50, 0.02, 30, "GDP and per-capita index")
    return make_task(
        title="Per-capita force $g-p$ from GDP and population",
        context=(
            r"Aggregate output follows $Y(t)=Y_0 e^{gt}$ with $g=0.06$, while population follows "
            r"$N(t)=N_0 e^{pt}$ with $p=0.02$. Per-capita output is $y(t)=Y(t)/N(t)$."
        ),
        statements=[
            r"The per-capita path is $y(t)=y_0 e^{(g-p)t}$ with force $0.04$.",
            r"The per-capita doubling time is $T=\dfrac{\ln 2}{0.04}$.",
            r"At the per-capita doubling time, aggregate output has grown by the factor $e^{0.06T}=4$.",
            r"If the population force were misread as $-p$, the per-capita force would become $g+p=0.08$.",
            r"The identity $y(2t)/y(t)=e^{0.04 t}$ holds for every $t>0$.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                r"Divide the two closed forms.",
                D(r"y(t)=\frac{Y_0}{N_0}e^{(g-p)t}=y_0 e^{0.04 t}"),
            ],
            [
                r"Doubling solves $e^{0.04 T}=2$.",
                D(r"T=\frac{\ln 2}{0.04}"),
            ],
            [
                r"At that same $T$, aggregate growth is $e^{gT}$.",
                D(r"e^{0.06\cdot(\ln 2)/0.04}=e^{(3/2)\ln 2}=2^{3/2}=2\sqrt{2}\neq 4"),
            ],
            [
                r"Flipping the sign of $p$ in the quotient replaces $g-p$ by $g+p$.",
                D(r"g+p=0.08"),
            ],
            [
                r"Compare levels two $t$-steps apart.",
                D(r"\frac{y(2t)}{y(t)}=e^{0.04(2t)-0.04 t}=e^{0.04 t}"),
            ],
        ],
        solution_overview=(
            r"Per capita carries force $g-p=0.04$. Doubling time is $\ln 2/0.04$; "
            r"aggregate growth over that horizon is $2^{3/2}$, not $4$."
        ),
        stem_kind="applied_letter",
        figure=fig,
    )


def t07() -> dict[str, Any]:
    k = LN2 / 5
    fig = semi_log_exp(200, k, 20, "Semi-log plot of P(t)=200 e^{(ln 2)t/5}")
    return make_task(
        title="Semi-log slope recovers the continuous force",
        context=(
            r"A level $P(t)=200\,e^{kt}$ is plotted with a logarithmic vertical axis "
            r"(semi-log). The figure is consistent with $P(0)=200$ and $P(5)=400$."
        ),
        statements=[
            r"On the semi-log axes the graph of $\ln P(t)$ is affine with slope $k=\dfrac{\ln 2}{5}$.",
            r"The rise $\ln P(10)-\ln P(0)$ equals $2\ln 2$.",
            r"Because $\ln P(t)$ is affine in $t$, the level $P(t)$ itself must be an affine function of $t$.",
            r"Solving $\ln P(t)=\ln 200+\ln 8$ yields $t=15$.",
            r"The same slope $k$ is recovered from $\dfrac{\ln P(15)-\ln P(5)}{10}$.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                r"Take logarithms of the closed form.",
                D(r"\ln P(t)=\ln 200+kt"),
                D(r"k=\frac{1}{5}\ln\frac{400}{200}=\frac{\ln 2}{5}"),
            ],
            [
                D(r"\ln P(10)-\ln P(0)=10k=2\ln 2"),
            ],
            [
                r"Affinity of $\ln P$ means $P$ is exponential, not affine.",
                D(r"P(t)=200 e^{kt}"),
                r"An affine level path would require constant first differences, which this closed form does not have.",
            ],
            [
                r"The equation $\ln P=\ln 200+\ln 8$ means $P=200\cdot 8$.",
                D(r"e^{kt}=8=2^{3}\qquad kt=3\ln 2"),
                D(r"t=\frac{3\ln 2}{k}=15"),
            ],
            [
                D(r"\frac{\ln P(15)-\ln P(5)}{10}=\frac{15k-5k}{10}=k"),
            ],
        ],
        solution_overview=(
            r"Semi-log turns $P=200 e^{kt}$ into the affine law $\ln P=\ln 200+kt$ with "
            r"$k=\ln 2/5$. Level claims still need the exponential, not the log-line."
        ),
        stem_kind="hybrid",
        figure=fig,
    )


def t08() -> dict[str, Any]:
    return make_task(
        title="Rebuild $P(t)=P_0 e^{kt}$ from two exact observations",
        context=(
            r"A continuous exponential $P(t)=P_0 e^{kt}$ with $P_0>0$ satisfies the exact "
            r"observations $P(2)=180$ and $P(6)=1440$."
        ),
        statements=[
            r"The four-unit ratio recovers $e^{4k}=8$, hence $k=\dfrac{3\ln 2}{4}$.",
            r"Back-solving from $t=2$ yields $P_0=45\sqrt{2}$.",
            r"The doubling time equals $T=2$.",
            r"The interpolated value satisfies $P(4)=180\cdot 2\sqrt{2}$.",
            r"A rival model $Q(t)=P_0(1+k)^{t}$ with the same $P_0$ and same $k$ matches both observations.",
        ],
        answer_key=[True, True, False, True, False],
        bodies=[
            [
                D(r"\frac{P(6)}{P(2)}=\frac{1440}{180}=8=e^{4k}"),
                D(r"4k=\ln 8=3\ln 2\qquad k=\frac{3\ln 2}{4}"),
            ],
            [
                D(r"P_0=P(2)e^{-2k}=180\cdot e^{-(3\ln 2)/2}=180\cdot 2^{-3/2}=45\sqrt{2}"),
            ],
            [
                r"Doubling solves $e^{kT}=2$.",
                D(r"T=\frac{\ln 2}{k}=\frac{4}{3}\neq 2"),
            ],
            [
                r"Geometric interpolation between $t=2$ and $t=6$.",
                D(r"P(4)=P(2)e^{2k}=180\cdot e^{(3\ln 2)/2}=180\cdot 2\sqrt{2}"),
            ],
            [
                r"Discrete compounding with factor $1+k$ cannot match $e^{k}$ for $k>0$.",
                D(r"1+k\neq e^{k}"),
                r"Even matching $P_0$ cannot hit both tabulated heights under the discrete law.",
            ],
        ],
        solution_overview=(
            r"From $P(6)/P(2)=8$ recover $k=(3\ln 2)/4$ and $P_0=45\sqrt{2}$. "
            r"Doubling time is $4/3$; the discrete rival with factor $1+k$ misses the table."
        ),
        stem_kind="rebuild",
    )


def t09() -> dict[str, Any]:
    return make_task(
        title="Newton cooling with ambient $20$ and half-gap time $10$",
        context=(
            r"A body cools according to $T(t)-20=60\,e^{-kt}$ with $k=\dfrac{\ln 2}{10}$. "
            r"Thus the gap to ambient halves every $10$ time units."
        ),
        statements=[
            r"At $t=10$ the temperature is $T(10)=50$.",
            r"At $t=20$ the temperature is $T(20)=35$.",
            r"Solving $T(t)=30$ yields $t=20$.",
            r"The instantaneous relative rate of the gap $T(t)-20$ equals the constant $-k$.",
            r"Rewriting $T(t)=20+60\cdot 2^{-t/10}$ is equivalent to the given model.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                D(r"T(10)-20=60\cdot e^{-\ln 2}=30"),
                D(r"T(10)=50"),
            ],
            [
                D(r"T(20)-20=60\cdot e^{-2\ln 2}=15"),
                D(r"T(20)=35"),
            ],
            [
                r"Set the gap equal to $10$.",
                D(r"60 e^{-kt}=10\qquad e^{-kt}=\frac{1}{6}"),
                D(r"t=\frac{\ln 6}{k}=\frac{10\ln 6}{\ln 2}\neq 20"),
            ],
            [
                r"Differentiate the gap $G(t)=T(t)-20=60 e^{-kt}$.",
                D(r"G'(t)=-k G(t)"),
                r"The relative rate $G'/G$ is the constant $-k$.",
            ],
            [
                D(r"e^{-kt}=e^{-(\ln 2)t/10}=2^{-t/10}"),
                D(r"T(t)=20+60\cdot 2^{-t/10}"),
            ],
        ],
        solution_overview=(
            r"The gap halves every $10$ units: $T(10)=50$, $T(20)=35$. "
            r"Hitting $T=30$ solves $e^{-kt}=1/6$, not a pure power of $1/2$."
        ),
        stem_kind="symbolic",
        figure=svg_exp(P0=80, k=-LN2 / 10, tmax=40, title="Illustrative cooling gap+ambient", ylabel="T"),
    )


def t10() -> dict[str, Any]:
    fig = two_models(1000, LN2 / 10, 1.05, 30, "Continuous e^{kt} vs discrete (1.05)^t")
    return make_task(
        title="Matching discrete factor $1.05$ to a continuous force",
        context=(
            r"A continuous model $P(t)=1000\,e^{kt}$ is compared with a discrete rival "
            r"$Q(t)=1000\cdot(1.05)^{t}$. Assume throughout that $k=\ln 1.05$."
        ),
        statements=[
            r"With $k=\ln 1.05$ the two paths agree for every $t\ge 0$.",
            r"If instead one set $k=0.05$, then $P(t)>Q(t)$ for every $t>0$.",
            r"The continuous doubling time with $k=\ln 1.05$ equals $\dfrac{\ln 2}{\ln 1.05}$.",
            r"The discrete doubling time solving $(1.05)^{T}=2$ equals $\dfrac{\ln 2}{0.05}$.",
            r"The one-year continuous multiplier $e^{k}$ equals $1.05$ precisely when $k=\ln 1.05$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"P(t)=1000 e^{(\ln 1.05)t}=1000\cdot(1.05)^{t}=Q(t)"),
            ],
            [
                r"The strict inequality $e^{0.05}>1.05$ lifts to every positive power.",
                D(r"e^{0.05 t}>(1.05)^{t}\qquad(t>0)"),
                D(r"P(t)>Q(t)"),
            ],
            [
                D(r"e^{kT}=2\qquad T=\frac{\ln 2}{k}=\frac{\ln 2}{\ln 1.05}"),
            ],
            [
                r"Discrete doubling solves $(1.05)^{T}=2$.",
                D(r"T=\frac{\ln 2}{\ln 1.05}\neq\frac{\ln 2}{0.05}"),
                r"The denominator must be $\ln 1.05$, not the raw $0.05$.",
            ],
            [
                D(r"e^{k}=1.05\iff k=\ln 1.05"),
            ],
        ],
        solution_overview=(
            r"Equality of paths needs $k=\ln 1.05$. The trap $k=0.05$ overshoots because "
            r"$e^{0.05}>1.05$. Doubling times use $\ln 1.05$ in the denominator."
        ),
        stem_kind="parametric",
        figure=fig,
    )


def t11() -> dict[str, Any]:
    return make_task(
        title="Tangled quantifiers on continuous exponential paths",
        context=(
            r"Throughout, $P(t)=P_0 e^{kt}$ with $P_0>0$ and $k\in\mathbb{R}$. "
            r"Decide each quantified claim."
        ),
        statements=[
            r"For every $k>0$ there exists $T>0$ such that $P(T)=2P_0$, namely $T=\ln 2/k$.",
            r"There exists $k\in\mathbb{R}$ such that $P(t)=P_0(1+t)$ for every $t\ge 0$.",
            r"For every $t>0$, the map $k\mapsto P(t)$ is strictly increasing on $\mathbb{R}$.",
            r"If $P(t)=P(2t)$ for every $t>0$, then necessarily $k=0$.",
            r"For every $k\neq 0$, the equation $P(t)=P_0$ has a unique solution $t=0$ in $\mathbb{R}$.",
        ],
        answer_key=[True, False, True, True, True],
        bodies=[
            [
                D(r"e^{kT}=2\qquad T=\frac{\ln 2}{k}>0"),
            ],
            [
                r"An exponential equals the affine path $P_0(1+t)$ for all $t$ only in degenerate cases.",
                D(r"P_0 e^{kt}=P_0(1+t)\quad\forall t\ge 0"),
                r"Already the second derivative test fails: left side has $P''(0)=P_0 k^{2}$ while the right side has $0$, forcing $k=0$, which then collapses $1=1+t$.",
            ],
            [
                r"Fix $t>0$. The derivative in the force parameter is positive.",
                D(r"\partial_k P(t)=P_0 t e^{kt}>0"),
            ],
            [
                D(r"e^{kt}=e^{2kt}\quad\forall t>0\implies e^{kt}=1\implies k=0"),
            ],
            [
                D(r"e^{kt}=1\iff kt=0\iff t=0\quad(k\neq 0)"),
            ],
        ],
        solution_overview=(
            r"Doubling exists for every $k>0$. An exponential cannot track $1+t$ globally. "
            r"Force monotonicity in $k$ for fixed $t>0$ is immediate from $\partial_k P>0$."
        ),
        stem_kind="text_dense",
    )


# ---------------------------------------------------------------------------
# 12–22
# ---------------------------------------------------------------------------


def t12() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $1$ | $2$ | $3$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $P(t)$ | $81$ | $108$ | $144$ | $192$ |"
    )
    return make_task(
        title="Diagnose a pure geometric table and recover its factor",
        context=(
            r"Exact samples of a positive level $P$ are recorded below. Decide whether a "
            r"continuous exponential $P(t)=P_0 e^{kt}$ (equivalently a geometric discrete path) fits."
        ),
        statements=[
            r"Every consecutive ratio equals $\dfrac{4}{3}$, so $P(t)=81\cdot\bigl(\dfrac{4}{3}\bigr)^{t}$ fits every column.",
            r"The continuous force matching that geometric factor is $k=\ln\dfrac{4}{3}$.",
            r"The three-step ratio satisfies $\dfrac{P(3)}{P(0)}=\bigl(\dfrac{4}{3}\bigr)^{3}=\dfrac{64}{27}$.",
            r"Because the first differences $27,36,48$ are themselves geometric with ratio $\dfrac{4}{3}$, the level cannot be exponential.",
            r"Solving $81\cdot(4/3)^{t}=256$ yields $t=\dfrac{\ln(256/81)}{\ln(4/3)}$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"\frac{108}{81}=\frac{144}{108}=\frac{192}{144}=\frac{4}{3}"),
                D(r"P(t)=81\cdot\bigl(\tfrac{4}{3}\bigr)^{t}"),
            ],
            [
                D(r"e^{k}=\tfrac{4}{3}\qquad k=\ln\tfrac{4}{3}"),
            ],
            [
                D(r"\frac{192}{81}=\frac{64}{27}=\bigl(\tfrac{4}{3}\bigr)^{3}"),
            ],
            [
                r"First differences of a geometric sequence are themselves geometric with the same ratio — that is consistent with an exponential level, not a contradiction.",
                D(r"27,36,48\qquad \frac{36}{27}=\frac{48}{36}=\frac{4}{3}"),
            ],
            [
                D(r"\bigl(\tfrac{4}{3}\bigr)^{t}=\frac{256}{81}"),
                D(r"t=\frac{\ln(256/81)}{\ln(4/3)}"),
            ],
        ],
        solution_overview=(
            r"Constant ratio $4/3$ diagnoses $P(t)=81(4/3)^{t}$ with force $\ln(4/3)$. "
            r"Geometric first differences are expected, not a disqualification."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t13() -> dict[str, Any]:
    return make_task(
        title="Radioactive decay with half-life $14$",
        context=(
            r"A mass follows $m(t)=m_0 e^{-\lambda t}$ with half-life $T_{1/2}=14$, so "
            r"$\lambda=\dfrac{\ln 2}{14}$ and $m_0>0$."
        ),
        statements=[
            r"After two half-lives, $m(28)=\dfrac{1}{4}m_0$.",
            r"The time to reach $\dfrac{1}{8}m_0$ is $t=42$.",
            r"The force satisfies $\lambda=\dfrac{\ln(m_0/m(7))}{7}$, and that common value equals $\dfrac{\ln 2}{14}$.",
            r"Because $\lambda>0$, the mass $m(t)$ eventually becomes negative.",
            r"Rewriting $m(t)=m_0\cdot 2^{-t/14}$ is equivalent to the given continuous model.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"m(28)=m_0 e^{-\lambda\cdot 28}=m_0 e^{-2\ln 2}=\tfrac14 m_0"),
            ],
            [
                D(r"e^{-\lambda t}=\tfrac18=2^{-3}"),
                D(r"\lambda t=3\ln 2\qquad t=42"),
            ],
            [
                D(r"m(7)=m_0 e^{-(\ln 2)/2}=m_0/\sqrt{2}"),
                D(r"\frac{\ln(m_0/m(7))}{7}=\frac{\tfrac12\ln 2}{7}=\frac{\ln 2}{14}=\lambda"),
            ],
            [
                r"An exponential with negative force stays positive for all finite $t$.",
                D(r"m(t)=m_0 e^{-\lambda t}>0"),
            ],
            [
                D(r"e^{-\lambda t}=e^{-(\ln 2)t/14}=2^{-t/14}"),
            ],
        ],
        solution_overview=(
            r"Half-life $14$ means $m(t)=m_0 2^{-t/14}$. Powers of $1/2$ settle fraction claims; "
            r"the mass never crosses zero."
        ),
        stem_kind="symbolic",
        figure=svg_exp(P0=1.0, k=-LN2 / 14, tmax=56, title="Decay with half-life 14", ylabel="mass"),
    )


def t14() -> dict[str, Any]:
    return make_task(
        title=r"Parametric family $P_\alpha(t)=800\,e^{\alpha t}$ ordered by force",
        context=(
            r"For each real parameter $\alpha$, define $P_\alpha(t)=800\,e^{\alpha t}$. "
            r"Compare members of the family."
        ),
        statements=[
            r"If $\alpha>\beta$, then $P_\alpha(t)>P_\beta(t)$ for every $t>0$.",
            r"The ratio $P_\alpha(t)/P_\beta(t)$ equals $e^{(\alpha-\beta)t}$, independent of the shared start $800$.",
            r"The doubling time of $P_\alpha$ (for $\alpha>0$) is $T=\ln 2/\alpha$, so doubling times shrink as $\alpha$ grows.",
            r"There is a unique $\alpha$ such that $P_\alpha(3)=1600$, namely $\alpha=\dfrac{\ln 2}{3}$.",
            r"For $\alpha=-\beta$ with $\beta>0$, the identity $P_\alpha(t)P_\beta(t)=800^{2}$ holds for every $t$.",
        ],
        answer_key=[True, True, True, True, True],
        bodies=[
            [
                D(r"\frac{P_\alpha(t)}{P_\beta(t)}=e^{(\alpha-\beta)t}>1\quad(t>0,\ \alpha>\beta)"),
            ],
            [
                D(r"\frac{P_\alpha(t)}{P_\beta(t)}=e^{(\alpha-\beta)t}"),
            ],
            [
                D(r"T=\frac{\ln 2}{\alpha}"),
                r"Larger positive force shortens the doubling clock.",
            ],
            [
                D(r"800 e^{3\alpha}=1600\qquad e^{3\alpha}=2\qquad\alpha=\frac{\ln 2}{3}"),
            ],
            [
                D(r"P_{-\beta}(t)P_{\beta}(t)=800^{2} e^{-\beta t}e^{\beta t}=800^{2}"),
            ],
        ],
        solution_overview=(
            r"Force order lifts to path order for $t>0$. Ratios cancel the shared start. "
            r"Opposite forces multiply back to the constant $800^{2}$."
        ),
        stem_kind="parametric",
    )


def t15() -> dict[str, Any]:
    return make_task(
        title="Nested composition $\\ln(P_0 e^{kt})$ and threshold solving",
        context=(
            r"Let $P(t)=P_0 e^{kt}$ with $P_0>0$ and $k\neq 0$. Consider $\ln P(t)$ and related equations."
        ),
        statements=[
            r"Simplifying gives $\ln P(t)=\ln P_0+kt$ for every $t$.",
            r"Solving $\ln P(t)=\ln(4P_0)$ yields the unique time $t=\dfrac{\ln 4}{k}$.",
            r"The equation $\ln P(t)=0$ has the unique solution $t=-\dfrac{\ln P_0}{k}$.",
            r"If $k>0$ and $P_0=1$, then $\ln P(t)=kt$ is positive for every $t\neq 0$.",
            r"The composition $\ln P(t)-\ln P(0)$ equals $kt$ and therefore recovers the force as $\dfrac{1}{t}\bigl(\ln P(t)-\ln P(0)\bigr)$ for every $t\neq 0$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"\ln P(t)=\ln(P_0 e^{kt})=\ln P_0+kt"),
            ],
            [
                D(r"\ln P_0+kt=\ln P_0+\ln 4"),
                D(r"kt=\ln 4\qquad t=\frac{\ln 4}{k}"),
            ],
            [
                D(r"\ln P_0+kt=0\qquad t=-\frac{\ln P_0}{k}"),
            ],
            [
                r"With $P_0=1$ one has $\ln P(t)=kt$, which is negative whenever $t<0$.",
                D(r"kt<0\quad(t<0)"),
            ],
            [
                D(r"\ln P(t)-\ln P(0)=kt"),
                D(r"k=\frac{1}{t}\bigl(\ln P(t)-\ln P(0)\bigr)\quad(t\neq 0)"),
            ],
        ],
        solution_overview=(
            r"Logarithms linearise the exponential: $\ln P=\ln P_0+kt$. "
            r"Threshold equations are affine in $t$; force recovery is a difference quotient of $\ln P$."
        ),
        stem_kind="nested",
    )


def t16() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $2$ | $4$ | $6$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $P(t)$ | $125$ | $250$ | $500$ | $1000$ |"
    )
    fig = exp_growth(125, LN2 / 2, 8, "Hybrid: table meets continuous path", ylabel="P(t)")
    return make_task(
        title="Hybrid — doubling every two units meets continuous force $\\ln 2/2$",
        context=(
            r"The table and figure describe the same continuous exponential "
            r"$P(t)=125\,e^{kt}$. Use both sources."
        ),
        statements=[
            r"Each two-unit step doubles, so $k=\dfrac{\ln 2}{2}$.",
            r"The one-unit multiplier is $e^{k}=\sqrt{2}$, hence $P(1)=125\sqrt{2}$.",
            r"The average force on $[0,6]$, matching $P(6)=125 e^{6k_{\mathrm{avg}}}$, equals $\dfrac{\ln 2}{2}$.",
            r"Solving $P(t)=2000$ yields $t=8$.",
            r"Because the samples are geometric with ratio $2$ on step $2$, the discrete law $Q(t)=125\cdot 2^{t}$ matches the table.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"\frac{P(2)}{P(0)}=2=e^{2k}\qquad k=\frac{\ln 2}{2}"),
            ],
            [
                D(r"P(1)=125 e^{k}=125\sqrt{2}"),
            ],
            [
                D(r"P(6)=1000=125\cdot 8=125 e^{6k}"),
                D(r"k_{\mathrm{avg}}=k=\frac{\ln 2}{2}"),
                r"A pure exponential has constant force, so the window average equals $k$.",
            ],
            [
                D(r"125\cdot 2^{t/2}=2000\qquad 2^{t/2}=16\qquad t/2=4\qquad t=8"),
            ],
            [
                r"The discrete law $125\cdot 2^{t}$ would give $P(2)=500$, but the table shows $250$.",
                D(r"125\cdot 2^{2}=500\neq 250"),
                r"The correct discrete rewrite is $125\cdot 2^{t/2}$, not $125\cdot 2^{t}$.",
            ],
        ],
        solution_overview=(
            r"Two-unit doubling forces $k=\ln 2/2$. The matching geometric form is "
            r"$125\cdot 2^{t/2}$; writing $2^{t}$ overshoots the table."
        ),
        stem_kind="hybrid",
        figure=fig,
        tables_markdown=table,
    )


def t17() -> dict[str, Any]:
    fig = piecewise_kink(100, LN2 / 2, 4, LN2, 10, "Policy raise of force after T=4")
    return make_task(
        title="Policy switch raising the force after $T=4$",
        context=(
            r"A stock follows $P(t)=100\,e^{(\ln 2/2)t}$ on $[0,4]$ and "
            r"$P(t)=P(4)\,e^{(\ln 2)(t-4)}$ for $t\ge 4$."
        ),
        statements=[
            r"Continuity gives $P(4)=400$.",
            r"At $t=6$ the level is $P(6)=1600$.",
            r"The time from the switch to the next doubling of $P(4)$ is $1$.",
            r"Had the original force $\ln 2/2$ continued past $t=4$, one would still have $P(6)=1600$.",
            r"The average force on $[0,6]$ defined by $P(6)=100 e^{6k_{\mathrm{avg}}}$ equals $\dfrac{2\ln 2}{3}$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"P(4)=100\cdot e^{2\ln 2}=100\cdot 4=400"),
            ],
            [
                D(r"P(6)=400\cdot e^{2\ln 2}=400\cdot 4=1600"),
            ],
            [
                r"After the switch the force is $\ln 2$, so doubling takes time $1$.",
                D(r"e^{(\ln 2)\cdot 1}=2"),
            ],
            [
                r"Extending the old force gives a smaller height.",
                D(r"100\cdot e^{(\ln 2/2)\cdot 6}=100\cdot 2^{3}=800\neq 1600"),
            ],
            [
                D(r"1600=100 e^{6k_{\mathrm{avg}}}\qquad e^{6k_{\mathrm{avg}}}=16=2^{4}"),
                D(r"k_{\mathrm{avg}}=\frac{4\ln 2}{6}=\frac{2\ln 2}{3}"),
            ],
        ],
        solution_overview=(
            r"Match at $t=4$ to get $P(4)=400$, then grow with force $\ln 2$. "
            r"Endpoint matching on $[0,6]$ recovers average force $2\ln 2/3$."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t18() -> dict[str, Any]:
    return make_task(
        title="Applied unit trap — millions versus raw counts",
        context=(
            r"A city reports population in millions by $M(t)=2\,e^{(\ln 2/10)t}$, so the raw "
            r"headcount is $P(t)=10^{6}M(t)$."
        ),
        statements=[
            r"The continuous force of $M$ and of $P$ is the same number $\dfrac{\ln 2}{10}$.",
            r"Doubling time for the raw headcount is $10$.",
            r"At $t=10$ one has $M(10)=4$ and therefore $P(10)=4\cdot 10^{6}$.",
            r"Because $P=10^{6}M$, the force of $P$ equals $10^{6}$ times the force of $M$.",
            r"The ratio $P(20)/P(5)$ equals $2^{3/2}=2\sqrt{2}$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"P(t)=10^{6}\cdot 2\,e^{(\ln 2/10)t}"),
                r"A positive constant factor does not change the continuous force.",
            ],
            [
                D(r"e^{(\ln 2/10)T}=2\qquad T=10"),
            ],
            [
                D(r"M(10)=2\cdot e^{\ln 2}=4"),
                D(r"P(10)=4\cdot 10^{6}"),
            ],
            [
                r"Constants scale the level, not the logarithmic force.",
                D(r"\frac{P'}{P}=\frac{M'}{M}=\frac{\ln 2}{10}"),
            ],
            [
                D(r"\frac{P(20)}{P(5)}=e^{(\ln 2/10)(15)}=2^{3/2}=2\sqrt{2}"),
            ],
        ],
        solution_overview=(
            r"Scaling by $10^{6}$ leaves the force $\ln 2/10$ unchanged. "
            r"Doubling time and ratios are read from that shared force."
        ),
        stem_kind="applied_letter",
    )


def t19() -> dict[str, Any]:
    return make_task(
        title="Rewriting $a^{t}$ as continuous force $\\ln a$",
        context=(
            r"Fix a base $a>0$ with $a\neq 1$, and set $P(t)=a^{t}$. "
            r"Compare with the continuous form $e^{kt}$."
        ),
        statements=[
            r"The identity $a^{t}=e^{t\ln a}$ holds for every real $t$, so the continuous force is $k=\ln a$.",
            r"If $a=8$, then $P(t)=e^{t\ln 8}=e^{3t\ln 2}$, hence $P(2)=64$.",
            r"The doubling time of $P(t)=a^{t}$ (for $a>1$) equals $\dfrac{\ln 2}{\ln a}=\log_{a} 2$.",
            r"For $0<a<1$ the force $\ln a$ is negative, so $P(t)=a^{t}$ tends to $0$ as $t\to+\infty$.",
            r"The equality $a^{t}=(1+(a-1))^{t}$ shows that the continuous force equals $a-1$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"a^{t}=e^{t\ln a}\qquad k=\ln a"),
            ],
            [
                D(r"\ln 8=3\ln 2"),
                D(r"P(2)=8^{2}=64=e^{2\cdot 3\ln 2}"),
            ],
            [
                D(r"a^{T}=2\qquad T=\frac{\ln 2}{\ln a}=\log_{a} 2"),
            ],
            [
                D(r"0<a<1\implies\ln a<0"),
                D(r"\lim_{t\to+\infty}a^{t}=0"),
            ],
            [
                r"The algebraic rewrite $(1+(a-1))^{t}$ is discrete-looking but does not identify the continuous force with $a-1$.",
                D(r"k=\ln a\neq a-1\quad(a\neq 1)"),
            ],
        ],
        solution_overview=(
            r"Change-of-base writes $a^{t}=e^{t\ln a}$. Doubling time is $\log_a 2$. "
            r"The gap $a-1$ is not the continuous force."
        ),
        stem_kind="nested",
    )



def t20() -> dict[str, Any]:
    return make_task(
        title="Precisely-when criteria for continuous exponential structure",
        context=(
            r"Let $P:(0,\infty)\to(0,\infty)$ be differentiable. Decide each structural claim."
        ),
        statements=[
            r"If $P'(t)=k P(t)$ for a constant $k$ and every $t>0$, then $P(t)=P(1)e^{k(t-1)}$ for every $t>0$.",
            r"If $\dfrac{P(t+1)}{P(t)}$ equals the same positive constant for every $t>0$, then on the positive integers $P$ is a geometric sequence.",
            r"If $\ln P(t)$ is an affine function of $t$ on $(0,\infty)$, then $P$ is continuous-exponential on $(0,\infty)$.",
            r"No continuous-exponential $P(t)=P_0 e^{kt}$ can satisfy $P(2t)=2P(t)$ for every $t>0$.",
            r"Constant elasticity $t P'(t)/P(t)=\alpha$ for all $t>0$ forces $P(t)=C t^{\alpha}$, which is exponential in $t$ only when $\alpha=0$.",
        ],
        answer_key=[True, True, True, True, True],
        bodies=[
            [
                r"The ODE $P'=kP$ has solutions $P(t)=Ce^{kt}$; matching at $t=1$ fixes $C=P(1)e^{-k}$.",
                D(r"P(t)=P(1)e^{k(t-1)}"),
            ],
            [
                r"A constant consecutive ratio restricts to a geometric sequence on the integers.",
                D(r"P(n)=P(1)r^{n-1}"),
            ],
            [
                D(r"\ln P(t)=a+bt\implies P(t)=e^{a}e^{bt}"),
            ],
            [
                r"Impose $P(2t)=2P(t)$ on $P(t)=P_0 e^{kt}$.",
                D(r"e^{2kt}=2 e^{kt}\qquad e^{kt}=2\quad\forall t>0"),
                r"No real $k$ makes $e^{kt}$ equal the constant $2$ for every positive $t$.",
            ],
            [
                D(r"t\frac{P'}{P}=\alpha\implies P(t)=C t^{\alpha}"),
                r"A power in $t$ is exponential in $t$ only when $\alpha=0$.",
            ],
        ],
        solution_overview=(
            r"ODE, constant ratio, and affine $\ln P$ each characterise continuous exponentials. "
            r"The relation $P(2t)=2P(t)$ never holds for a continuous-exponential path. "
            r"Constant elasticity produces powers, not exponentials."
        ),
        stem_kind="text_dense",
    )


def t21() -> dict[str, Any]:
    fig = exp_growth(500, LN2 / 12, 36, "Continuous growth P=500 e^{(ln 2)t/12}", ylabel="P(t)")
    return make_task(
        title="Graph recovery — force $\\ln 2/12$ and threshold times",
        context=(
            r"The figure shows $P(t)=500\,e^{kt}$ with unknown $k>0$, consistent with "
            r"$P(0)=500$ and $P(12)=1000$."
        ),
        statements=[
            r"The recovered force is $k=\dfrac{\ln 2}{12}$, so $P(24)=2000$.",
            r"The time at which $P$ first reaches $4000$ is $t=36$.",
            r"The average relative change $\dfrac{P(12)-P(0)}{12P(0)}$ equals the force $k$.",
            r"Solving $P(t)=250$ yields $t=-12$, outside the plotted window $t\ge 0$.",
            r"The identity $P(6)^{2}=P(0)P(12)$ holds.",
        ],
        answer_key=[True, True, False, True, True],
        bodies=[
            [
                D(r"e^{12k}=2\qquad k=\frac{\ln 2}{12}"),
                D(r"P(24)=500\cdot 4=2000"),
            ],
            [
                D(r"500\cdot 2^{t/12}=4000\qquad 2^{t/12}=8\qquad t=36"),
            ],
            [
                D(r"\frac{P(12)-P(0)}{12P(0)}=\frac{1}{12}"),
                D(r"k=\frac{\ln 2}{12}\neq\frac{1}{12}"),
            ],
            [
                D(r"e^{kt}=\tfrac12\qquad t=-\frac{\ln 2}{k}=-12"),
            ],
            [
                D(r"P(6)=500\sqrt{2}"),
                D(r"P(6)^{2}=500^{2}\cdot 2=P(0)P(12)"),
            ],
        ],
        solution_overview=(
            r"From $P(12)/P(0)=2$ recover $k=\ln 2/12$. Threshold times are multiples of the "
            r"doubling clock. The linear relative rise $1/12$ is not $k$."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t22() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $1$ | $2$ | $3$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $\\ln P(t)$ | $\\ln 40$ | $\\ln 40+\\ln 2$ | $\\ln 40+2\\ln 2$ | $\\ln 40+3\\ln 2$ |"
    )
    return make_task(
        title="Equal log-increments diagnose constant force $\\ln 2$",
        context=(
            r"A positive level $P$ is continuous-exponential. The table records exact values of "
            r"$\ln P(t)$ at four consecutive integers."
        ),
        statements=[
            r"The first differences of the log-row are constantly $\ln 2$, so the force is $k=\ln 2$.",
            r"Consequently $P(t)=40\cdot 2^{t}$.",
            r"The level at $t=3$ is $P(3)=320$.",
            r"Because the log-row is arithmetic, $P$ itself is an arithmetic sequence on those integers.",
            r"The identity $\dfrac{1}{3}\bigl(\ln P(3)-\ln P(0)\bigr)=\ln 2$ recovers the same force.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"\Delta\ln P=\ln 2"),
                D(r"k=\ln 2"),
            ],
            [
                D(r"P(t)=e^{\ln 40+t\ln 2}=40\cdot 2^{t}"),
            ],
            [
                D(r"P(3)=40\cdot 8=320"),
            ],
            [
                r"An arithmetic log-row means a geometric level row.",
                D(r"P(0),P(1),P(2),P(3)=40,80,160,320"),
                r"Those levels double each step; they are not an arithmetic sequence.",
            ],
            [
                D(r"\frac{1}{3}\bigl(\ln 40+3\ln 2-\ln 40\bigr)=\ln 2"),
            ],
        ],
        solution_overview=(
            r"Constant log-increments diagnose force $\ln 2$ and the closed form $40\cdot 2^{t}$. "
            r"Arithmetic in $\ln P$ is geometric in $P$."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t23() -> dict[str, Any]:
    return make_task(
        title="Ordering continuous forces without solving for levels",
        context=(
            r"Two continuous paths share the start $P_0>0$: $A(t)=P_0 e^{\alpha t}$ and "
            r"$B(t)=P_0 e^{\beta t}$ with $\alpha>\beta>0$."
        ),
        statements=[
            r"For every $t>0$ one has $A(t)>B(t)$.",
            r"The ratio $A(t)/B(t)=e^{(\alpha-\beta)t}$ is strictly increasing in $t$.",
            r"The doubling time of $A$ is shorter than the doubling time of $B$.",
            r"There exists $t>0$ such that $B(t)>A(t)$.",
            r"The force of the product $A(t)B(t)$ equals $\alpha+\beta$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"\frac{A(t)}{B(t)}=e^{(\alpha-\beta)t}>1\quad(t>0)"),
            ],
            [
                D(r"\partial_t\log(A/B)=\alpha-\beta>0"),
            ],
            [
                D(r"T_A=\frac{\ln 2}{\alpha}<\frac{\ln 2}{\beta}=T_B"),
            ],
            [
                r"The ratio $A/B$ stays above $1$ for every $t>0$, so $B$ never overtakes $A$.",
            ],
            [
                D(r"A(t)B(t)=P_0^{2} e^{(\alpha+\beta)t}"),
            ],
        ],
        solution_overview=(
            r"Larger force dominates for all $t>0$, shortens doubling time, and adds in the product."
        ),
        stem_kind="symbolic",
    )


def t24() -> dict[str, Any]:
    return make_task(
        title="Per-capita letters $\\alpha$ and population $\\beta$",
        context=(
            r"Aggregate output $Y(t)=Y_0 e^{\alpha t}$ and population $N(t)=N_0 e^{\beta t}$ with "
            r"letters $\alpha,\beta\in\mathbb{R}$ and positive starts. Set $y=Y/N$."
        ),
        statements=[
            r"The per-capita force is exactly $\alpha-\beta$, for every choice of the letters.",
            r"If $\alpha=\beta$, then $y(t)$ is constant in time.",
            r"If $\alpha>\beta$, the per-capita doubling time is $\dfrac{\ln 2}{\alpha-\beta}$.",
            r"The identity $y(t)=y_0 e^{(\alpha+\beta)t}$ holds for every $\alpha,\beta$.",
            r"Solving $y(T)=4 y_0$ with $\alpha-\beta=\ln 2$ yields $T=2$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"y(t)=y_0 e^{(\alpha-\beta)t}"),
            ],
            [
                D(r"\alpha=\beta\implies y(t)=y_0"),
            ],
            [
                D(r"e^{(\alpha-\beta)T}=2\qquad T=\frac{\ln 2}{\alpha-\beta}"),
            ],
            [
                r"The correct exponent is the difference, not the sum.",
                D(r"\alpha-\beta\neq\alpha+\beta\quad(\beta\neq 0)"),
            ],
            [
                D(r"e^{(\ln 2)T}=4=2^{2}\qquad T=2"),
            ],
        ],
        solution_overview=(
            r"Per capita carries force $\alpha-\beta$. Equal letters freeze $y$; "
            r"the sum $\alpha+\beta$ is the wrong exponent."
        ),
        stem_kind="parametric",
    )


def t25() -> dict[str, Any]:
    return make_task(
        title="Rebuild decay from a lettered half-life $H$",
        context=(
            r"A mass follows $m(t)=m_0 e^{-\lambda t}$ with unknown $\lambda>0$. "
            r"The half-life is the given letter $H>0$, meaning $m(H)=\tfrac12 m_0$."
        ),
        statements=[
            r"Necessarily $\lambda=\dfrac{\ln 2}{H}$.",
            r"After three half-lives, $m(3H)=\dfrac{1}{8}m_0$.",
            r"The time to reach $\dfrac{1}{5}m_0$ equals $H\dfrac{\ln 5}{\ln 2}$.",
            r"Replacing $\lambda$ by $\dfrac{1}{H}$ leaves the half-life unchanged.",
            r"The rewrite $m(t)=m_0\cdot 2^{-t/H}$ is equivalent to the recovered model.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"e^{-\lambda H}=\tfrac12\qquad\lambda=\frac{\ln 2}{H}"),
            ],
            [
                D(r"m(3H)=m_0 e^{-3\ln 2}=\tfrac18 m_0"),
            ],
            [
                D(r"e^{-\lambda t}=\tfrac15\qquad t=\frac{\ln 5}{\lambda}=H\frac{\ln 5}{\ln 2}"),
            ],
            [
                D(r"\frac{1}{H}\neq\frac{\ln 2}{H}"),
                r"The half-life solving $e^{-t/H}=1/2$ would be $t=H\ln 2\neq H$.",
            ],
            [
                D(r"e^{-(\ln 2)t/H}=2^{-t/H}"),
            ],
        ],
        solution_overview=(
            r"Half-life $H$ forces $\lambda=\ln 2/H$ and the binary rewrite $2^{-t/H}$. "
            r"Substituting $1/H$ for $\lambda$ breaks the half-life."
        ),
        stem_kind="rebuild",
    )


def t26() -> dict[str, Any]:
    return make_task(
        title=r"Nested form $e^{k\ln(P/Q)}$ as a relative power",
        context=(
            r"Fix positives $P,Q$ and a real letter $k$. Consider the nested expression "
            r"$e^{k\ln(P/Q)}$."
        ),
        statements=[
            r"Simplifying yields $e^{k\ln(P/Q)}=\bigl(\dfrac{P}{Q}\bigr)^{k}$.",
            r"If $k=2$ and $P=2Q$, then the expression equals $4$.",
            r"The identity $e^{k\ln(P/Q)}=e^{k\ln P}/e^{k\ln Q}$ holds for every positive $P,Q$.",
            r"If $k=\log_{P/Q} 5$ (assuming $P\neq Q$), then the expression equals $5$.",
            r"Replacing $\ln(P/Q)$ by $\ln P-\ln Q$ changes the value whenever $k\neq 0$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"e^{k\ln(P/Q)}=\bigl(e^{\ln(P/Q)}\bigr)^{k}=(P/Q)^{k}"),
            ],
            [
                D(r"(2Q/Q)^{2}=2^{2}=4"),
            ],
            [
                D(r"e^{k\ln P-k\ln Q}=\frac{e^{k\ln P}}{e^{k\ln Q}}"),
            ],
            [
                D(r"\bigl(\tfrac{P}{Q}\bigr)^{\log_{P/Q} 5}=5"),
            ],
            [
                r"The logarithm difference rule is an identity.",
                D(r"\ln(P/Q)=\ln P-\ln Q"),
                r"Substitution leaves the nested expression unchanged.",
            ],
        ],
        solution_overview=(
            r"The nest $e^{k\ln(P/Q)}$ is the relative power $(P/Q)^{k}$. "
            r"Log-difference is free; change-of-base recovers prescribed values."
        ),
        stem_kind="nested",
    )


def t27() -> dict[str, Any]:
    fig = competing_populations(500, LN2 / 4, 500, LN2 / 8, 20, "Equal starts, force gap")
    return make_task(
        title="Hybrid — equal starts, letter force gap $\\delta$",
        context=(
            r"Two populations start equal: $A(t)=500\,e^{(\ln 2/4)t}$ and "
            r"$B(t)=500\,e^{(\ln 2/8)t}$. Set $\delta=\dfrac{\ln 2}{4}-\dfrac{\ln 2}{8}=\dfrac{\ln 2}{8}$."
        ),
        statements=[
            r"The ratio satisfies $A(t)/B(t)=e^{\delta t}=2^{t/8}$.",
            r"At $t=8$ one has $A(8)/B(8)=2$.",
            r"The unique positive time with $A(t)=2B(t)$ is $t=8$.",
            r"Because the starts are equal, the crossing time of $A$ and $B$ is $t=0$ only.",
            r"The force of $A/B$ equals $\delta=\dfrac{\ln 2}{8}$.",
        ],
        answer_key=[True, True, True, True, True],
        bodies=[
            [
                D(r"\frac{A(t)}{B(t)}=e^{\delta t}=e^{(\ln 2)t/8}=2^{t/8}"),
            ],
            [
                D(r"2^{8/8}=2"),
            ],
            [
                D(r"e^{\delta t}=2\qquad\delta t=\ln 2\qquad t=8"),
            ],
            [
                r"Equal starts and unequal forces meet only at the origin of time.",
                D(r"A(t)=B(t)\iff e^{\delta t}=1\iff t=0"),
            ],
            [
                D(r"\frac{A}{B}=e^{\delta t}"),
            ],
        ],
        solution_overview=(
            r"Equal starts cancel in the ratio, leaving force gap $\delta$. "
            r"Doubling of the ratio occurs at $t=\ln 2/\delta=8$."
        ),
        stem_kind="hybrid",
        figure=fig,
    )


def t28() -> dict[str, Any]:
    return make_task(
        title="Compound claims linking discrete and continuous letters",
        context=(
            r"Let $k>0$ and $r>0$. Compare $P(t)=P_0 e^{kt}$ with $Q(t)=P_0(1+r)^{t}$."
        ),
        statements=[
            r"The paths agree for all $t$ if and only if $1+r=e^{k}$.",
            r"If $r=k$, then $P(t)>Q(t)$ for every $t>0$.",
            r"The continuous doubling time $\ln 2/k$ equals the discrete doubling time $\ln 2/\ln(1+r)$ whenever $1+r=e^{k}$.",
            r"The inequality $e^{k}>1+k$ for $k>0$ is equivalent to $P$ beating the discrete path that uses factor $1+k$.",
            r"If $1+r=e^{k}$, then necessarily $r=k$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"P\equiv Q\iff e^{k}=1+r"),
            ],
            [
                D(r"e^{k}>1+k\qquad(k>0)"),
                D(r"e^{kt}>(1+k)^{t}\qquad(t>0)"),
            ],
            [
                D(r"\frac{\ln 2}{k}=\frac{\ln 2}{\ln(1+r)}\iff k=\ln(1+r)"),
            ],
            [
                r"The discrete path with factor $1+k$ is $Q(t)=P_0(1+k)^{t}$; comparing one-year factors is exactly $e^{k}>1+k$.",
            ],
            [
                D(r"r=e^{k}-1\neq k\quad(k>0)"),
            ],
        ],
        solution_overview=(
            r"Path agreement needs matching one-year factors $e^{k}=1+r$. "
            r"The trap $r=k$ undershoots because $e^{k}>1+k$. Matching factors does not force $r=k$."
        ),
        stem_kind="text_dense",
    )


def t29() -> dict[str, Any]:
    fig = piecewise_kink(64, LN2, 2, -LN2, 6, "Growth then mirror decay")
    return make_task(
        title="Piecewise growth then mirror decay",
        context=(
            r"Define $P(t)=64\,e^{(\ln 2)t}$ on $[0,2]$ and $P(t)=P(2)\,e^{-(\ln 2)(t-2)}$ for $t\ge 2$."
        ),
        statements=[
            r"Continuity gives $P(2)=256$.",
            r"At $t=4$ the level has returned to $P(4)=64=P(0)$.",
            r"The average force on $[0,4]$ is $0$.",
            r"The maximum on $[0,4]$ occurs at the switch and equals $256$.",
            r"Extending the first force to $t=4$ would give $P(4)=1024$, matching the piecewise value.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"P(2)=64\cdot 2^{2}=256"),
            ],
            [
                D(r"P(4)=256\cdot e^{-2\ln 2}=256\cdot\tfrac14=64"),
            ],
            [
                D(r"P(4)=P(0)=64=64 e^{4k_{\mathrm{avg}}}\implies k_{\mathrm{avg}}=0"),
            ],
            [
                r"Before the switch the force is positive; after it, negative. The peak is at $t=2$.",
                D(r"P(2)=256"),
            ],
            [
                D(r"64\cdot 2^{4}=1024\neq 64"),
            ],
        ],
        solution_overview=(
            r"Mirror forces $\pm\ln 2$ about $t=2$ return the level to the start at $t=4$, "
            r"forcing average force $0$ on that window."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t30() -> dict[str, Any]:
    return make_task(
        title="Applied Newton — ambient letter $T_a$ and force $k$",
        context=(
            r"Newton cooling reads $T(t)-T_a=(T_0-T_a)e^{-kt}$ with letters $T_a$, $T_0>T_a$, and $k>0$."
        ),
        statements=[
            r"The gap $G(t)=T(t)-T_a$ is continuous-exponential with force $-k$.",
            r"The half-gap time is $\dfrac{\ln 2}{k}$, independent of both $T_0$ and $T_a$.",
            r"As $t\to+\infty$, one has $T(t)\to T_a$.",
            r"If $T_0=T_a+40$ and $k=\dfrac{\ln 2}{5}$, then $T(5)=T_a+20$.",
            r"The temperature $T(t)$ itself equals $T_0 e^{-kt}$ for every choice of ambient $T_a$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"G(t)=(T_0-T_a)e^{-kt}"),
            ],
            [
                D(r"e^{-kH}=\tfrac12\qquad H=\frac{\ln 2}{k}"),
            ],
            [
                D(r"\lim_{t\to+\infty}T(t)=T_a"),
            ],
            [
                D(r"T(5)=T_a+40\cdot e^{-\ln 2}=T_a+20"),
            ],
            [
                r"Only the gap is a pure exponential; the temperature carries the ambient shift.",
                D(r"T(t)=T_a+(T_0-T_a)e^{-kt}\neq T_0 e^{-kt}"),
            ],
        ],
        solution_overview=(
            r"The gap to ambient is pure exponential with force $-k$. "
            r"Half-gap time ignores the ambient level; $T(t)$ itself is not $T_0 e^{-kt}$."
        ),
        stem_kind="applied_letter",
    )


def t31() -> dict[str, Any]:
    fig = two_models(800, LN2 / 5, 1.1, 25, "Force ln2/5 versus factor 1.1")
    return make_task(
        title="Graph comparison — force $\\ln 2/5$ versus factor $1.1$",
        context=(
            r"Compare $P(t)=800\,e^{(\ln 2/5)t}$ with $Q(t)=800\cdot(1.1)^{t}$."
        ),
        statements=[
            r"The continuous doubling time is $5$, while the discrete doubling time is $\dfrac{\ln 2}{\ln 1.1}$.",
            r"The one-year continuous multiplier satisfies $e^{\ln 2/5}=2^{1/5}>1.1$, so $P(t)>Q(t)$ for every $t>0$.",
            r"At $t=5$ one has $P(5)=1600$ while $Q(5)=800\cdot(1.1)^{5}$.",
            r"The discrete doubling time $\dfrac{\ln 2}{\ln 1.1}$ is strictly larger than $5$.",
            r"Matching the discrete path to a continuous force requires $k=\ln 1.1$, which equals $\dfrac{\ln 2}{5}$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"T_P=\frac{\ln 2}{\ln 2/5}=5"),
                D(r"T_Q=\frac{\ln 2}{\ln 1.1}"),
            ],
            [
                D(r"2^{1/5}>1.1"),
                D(r"e^{(\ln 2/5)t}>(1.1)^{t}\qquad(t>0)"),
            ],
            [
                D(r"P(5)=800\cdot 2=1600"),
                D(r"Q(5)=800\cdot(1.1)^{5}"),
            ],
            [
                D(r"\ln 1.1<\frac{\ln 2}{5}\iff \frac{\ln 2}{\ln 1.1}>5"),
            ],
            [
                D(r"\ln 1.1\neq\frac{\ln 2}{5}"),
            ],
        ],
        solution_overview=(
            r"Continuous doubling time is $5$; discrete doubling uses $\ln 1.1$. "
            r"Because $2^{1/5}>1.1$, the continuous path stays above the discrete rival."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t32() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $1$ | $2$ | $3$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $Q(t)$ | $625$ | $500$ | $400$ | $320$ |"
    )
    return make_task(
        title="Recover discrete letter $r$ from a geometric decay table",
        context=(
            r"Exact samples follow a discrete geometric law $Q(t)=Q_0(1+r)^{t}$ with unknown $r$."
        ),
        statements=[
            r"Every consecutive ratio equals $\dfrac{4}{5}$, so $1+r=\dfrac{4}{5}$ and $r=-\dfrac{1}{5}$.",
            r"The matching continuous force is $k=\ln\dfrac{4}{5}$.",
            r"The continuous model $P(t)=625\,e^{kt}$ with that $k$ agrees with every tabulated height.",
            r"Solving $625\cdot(4/5)^{t}=200$ yields $t=\dfrac{\ln(200/625)}{\ln(4/5)}$.",
            r"Because $r$ is negative, the continuous force $k=\ln(1+r)$ is positive.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"\frac{500}{625}=\frac{400}{500}=\frac{320}{400}=\frac{4}{5}"),
                D(r"r=\frac{4}{5}-1=-\frac{1}{5}"),
            ],
            [
                D(r"k=\ln\tfrac{4}{5}"),
            ],
            [
                D(r"625 e^{t\ln(4/5)}=625\cdot(4/5)^{t}"),
            ],
            [
                D(r"(4/5)^{t}=\frac{200}{625}"),
                D(r"t=\frac{\ln(200/625)}{\ln(4/5)}"),
            ],
            [
                D(r"0<\tfrac{4}{5}<1\implies\ln\tfrac{4}{5}<0"),
            ],
        ],
        solution_overview=(
            r"Constant ratio $4/5$ recovers $r=-1/5$ and continuous force $\ln(4/5)<0$. "
            r"The continuous rewrite matches the geometric table exactly."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t33() -> dict[str, Any]:
    return make_task(
        title="Domain tangle — solving $e^{2x}-3e^{x}+2=0$",
        context=(
            r"Consider the real equation $e^{2x}-3e^{x}+2=0$."
        ),
        statements=[
            r"With $u=e^{x}$ the equation factors as $(u-1)(u-2)=0$, so $x=0$ or $x=\ln 2$.",
            r"Both candidate roots are in the domain of every exponential appearing in the equation.",
            r"The product of the two real solutions equals $0$.",
            r"Substituting $x=\ln 3$ satisfies the equation.",
            r"The change of variables $u=e^{x}$ is bijective from $\mathbb{R}$ onto $(0,\infty)$, so no positive root of the quadratic in $u$ is lost.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"u^{2}-3u+2=(u-1)(u-2)=0"),
                D(r"u=1\ \text{or}\ u=2"),
                D(r"x=0\ \text{or}\ x=\ln 2"),
            ],
            [
                r"The maps $x\mapsto e^{x}$ and $x\mapsto e^{2x}$ are defined on all of $\mathbb{R}$.",
            ],
            [
                D(r"0\cdot\ln 2=0"),
            ],
            [
                D(r"e^{2\ln 3}-3e^{\ln 3}+2=9-9+2=2\neq 0"),
            ],
            [
                r"Every positive $u$ is $e^{x}$ for a unique real $x=\ln u$.",
            ],
        ],
        solution_overview=(
            r"Factor as $(e^{x}-1)(e^{x}-2)=0$. Roots $0$ and $\ln 2$ both lie in $\mathbb{R}$; "
            r"$x=\ln 3$ fails the original equation."
        ),
        stem_kind="domain_tangled",
    )


def t34() -> dict[str, Any]:
    return make_task(
        title="Parametric mix — capital, labour, and per-worker output",
        context=(
            r"Capital $K(t)=K_0 e^{gt}$, labour $L(t)=L_0 e^{pt}$, and per-worker capital "
            r"$k(t)=K(t)/L(t)$, with letters $g,p$ and positive starts."
        ),
        statements=[
            r"The per-worker force is $g-p$.",
            r"If $g=p$, then $k(t)$ is constant.",
            r"The product $K(t)L(t)$ carries force $g+p$.",
            r"Doubling time of $k$ (when $g>p$) equals $\dfrac{\ln 2}{g+p}$.",
            r"The identity $k(2t)/k(t)=e^{(g-p)t}$ holds for every $t$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"k(t)=k_0 e^{(g-p)t}"),
            ],
            [
                D(r"g=p\implies k(t)=k_0"),
            ],
            [
                D(r"K(t)L(t)=K_0 L_0 e^{(g+p)t}"),
            ],
            [
                D(r"T=\frac{\ln 2}{g-p}\neq\frac{\ln 2}{g+p}"),
            ],
            [
                D(r"\frac{k(2t)}{k(t)}=e^{(g-p)t}"),
            ],
        ],
        solution_overview=(
            r"Per-worker capital carries $g-p$; the product carries $g+p$. "
            r"Doubling time uses the difference, not the sum."
        ),
        stem_kind="parametric",
        figure=gdp_per_capita(2000, 0.05, 40, 0.02, 40, "Illustrative K and k"),
    )


def t35() -> dict[str, Any]:
    return make_task(
        title="Rebuild from one point and a letter force",
        context=(
            r"A continuous exponential $P(t)=P_0 e^{kt}$ satisfies $P(3)=54$ with known force "
            r"$k=\ln 3$."
        ),
        statements=[
            r"Back-solving yields $P_0=54\cdot e^{-3\ln 3}=2$.",
            r"Consequently $P(t)=2\cdot 3^{t}$.",
            r"The value at $t=2$ is $P(2)=18$.",
            r"Doubling time equals $\dfrac{\ln 2}{\ln 3}=\log_{3} 2$.",
            r"The same $P_0$ is recovered from the false force $k=\ln 2$ via $P_0=54 e^{-3\ln 2}$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"P_0=54 e^{-3\ln 3}=54/27=2"),
            ],
            [
                D(r"P(t)=2 e^{t\ln 3}=2\cdot 3^{t}"),
            ],
            [
                D(r"P(2)=2\cdot 9=18"),
            ],
            [
                D(r"T=\frac{\ln 2}{\ln 3}=\log_{3} 2"),
            ],
            [
                D(r"54 e^{-3\ln 2}=54/8\neq 2"),
            ],
        ],
        solution_overview=(
            r"From $P(3)=54$ and $k=\ln 3$ recover $P_0=2$ and $P(t)=2\cdot 3^{t}$. "
            r"A mismatched force corrupts the back-solve."
        ),
        stem_kind="rebuild",
    )


def t36() -> dict[str, Any]:
    return make_task(
        title="Nested $\\ln$ of a continuous path",
        context=(
            r"Let $P(t)=5 e^{2t}$. Study $\ln P(t)$ and related compositions."
        ),
        statements=[
            r"Simplifying gives $\ln P(t)=\ln 5+2t$.",
            r"The equation $\ln P(t)=0$ has solution $t=-\dfrac{1}{2}\ln 5$.",
            r"Solving $\ln P(t)=\ln 45$ yields $t=\dfrac{1}{2}\ln 9=\ln 3$.",
            r"The second derivative $(\ln P)''(t)$ equals $2$.",
            r"The force recovered from $\dfrac{\ln P(4)-\ln P(1)}{3}$ equals $2$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"\ln P(t)=\ln 5+2t"),
            ],
            [
                D(r"\ln 5+2t=0\qquad t=-\tfrac12\ln 5"),
            ],
            [
                D(r"\ln 5+2t=\ln 45=\ln 5+\ln 9"),
                D(r"2t=\ln 9\qquad t=\ln 3"),
            ],
            [
                r"The log-path is affine, so its second derivative vanishes.",
                D(r"(\ln P)''(t)=0\neq 2"),
            ],
            [
                D(r"\frac{(\ln 5+8)-(\ln 5+2)}{3}=\frac{6}{3}=2"),
            ],
        ],
        solution_overview=(
            r"Logarithms linearise $5 e^{2t}$ to $\ln 5+2t$. "
            r"Threshold solves are affine in $t$; the second derivative of $\ln P$ is $0$, not $2$."
        ),
        stem_kind="nested",
    )


def t37() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $2$ | $4$ | $6$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $\\ln P(t)$ | $0$ | $\\ln 3$ | $2\\ln 3$ | $3\\ln 3$ |"
    )
    fig = semi_log_exp(1.0, LN3 / 2, 8, "Semi-log slope ln3/2")
    return make_task(
        title="Hybrid semi-log table — slope letter force",
        context=(
            r"A continuous exponential $P$ has the semi-log samples below (exact). "
            r"The figure uses the same force."
        ),
        statements=[
            r"The semi-log slope is $k=\dfrac{\ln 3}{2}$, so $P(t)=e^{(\ln 3)t/2}=3^{t/2}$.",
            r"The level at $t=4$ is $P(4)=9$.",
            r"The identity $\ln P(6)-\ln P(2)=2\ln 3$ holds.",
            r"Because the semi-log samples are arithmetic, $P(0),P(2),P(4),P(6)$ form an arithmetic sequence.",
            r"Solving $\ln P(t)=\ln 27$ yields $t=6$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"k=\frac{\ln 3-0}{2}=\frac{\ln 3}{2}"),
                D(r"P(t)=e^{kt}=3^{t/2}"),
            ],
            [
                D(r"P(4)=3^{2}=9"),
            ],
            [
                D(r"3\ln 3-\ln 3=2\ln 3"),
            ],
            [
                D(r"P=1,\,3,\,9,\,27"),
                r"Those levels are geometric with ratio $3$, not arithmetic.",
            ],
            [
                D(r"(\ln 3)t/2=\ln 27=3\ln 3\qquad t=6"),
            ],
        ],
        solution_overview=(
            r"Arithmetic semi-log samples give force $\ln 3/2$ and levels $3^{t/2}$. "
            r"Geometric levels are the counterpart of arithmetic logs."
        ),
        stem_kind="hybrid",
        figure=fig,
        tables_markdown=table,
    )


def t38() -> dict[str, Any]:
    return make_task(
        title="For-every and exists in exponential inequalities",
        context=(
            r"Fix $P_0>0$. Let $P_k(t)=P_0 e^{kt}$."
        ),
        statements=[
            r"For every $k>0$ there exists $t>0$ with $P_k(t)>2P_0$.",
            r"There exists $k\in\mathbb{R}$ such that $P_k(t)<P_0$ for every $t>0$.",
            r"For every $t>0$ there exists $k$ with $P_k(t)=7P_0$.",
            r"There exists $k$ such that for every $t>0$ one has $P_k(t)=7P_0$.",
            r"For every $k\neq 0$, the map $t\mapsto P_k(t)$ is injective on $\mathbb{R}$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"e^{kt}>2\qquad t>\frac{\ln 2}{k}"),
            ],
            [
                r"Any negative force works: e.g. $k=-1$ gives $P_{-1}(t)=P_0 e^{-t}<P_0$ for $t>0$.",
            ],
            [
                D(r"e^{kt}=7\qquad k=\frac{\ln 7}{t}"),
            ],
            [
                r"A constant path equal to $7P_0$ for all $t>0$ would require $e^{kt}=7$ for all $t>0$, impossible.",
            ],
            [
                D(r"P_k(t_1)=P_k(t_2)\implies e^{k(t_1-t_2)}=1\implies t_1=t_2\quad(k\neq 0)"),
            ],
        ],
        solution_overview=(
            r"Quantifier order matters: hitting a level at one $t$ is easy; hitting it at every $t$ is impossible "
            r"for a non-constant target. Nonzero force makes the path injective."
        ),
        stem_kind="text_dense",
    )


def t39() -> dict[str, Any]:
    fig = piecewise_kink(100, LN2 / 3, 6, LN2 / 6, 18, "Average force across piecewise path")
    return make_task(
        title="Average force across a piecewise exponential",
        context=(
            r"A path follows $P(t)=100\,e^{(\ln 2/3)t}$ on $[0,6]$ and "
            r"$P(t)=P(6)\,e^{(\ln 2/6)(t-6)}$ for $t\ge 6$."
        ),
        statements=[
            r"Continuity gives $P(6)=400$.",
            r"At $t=18$ one has $P(18)=1600$.",
            r"The average force on $[0,18]$ defined by $P(18)=100 e^{18 k_{\mathrm{avg}}}$ equals $\dfrac{2\ln 2}{9}$.",
            r"The average force on $[0,18]$ equals the arithmetic mean of the two piece forces $\dfrac{1}{2}\bigl(\tfrac{\ln 2}{3}+\tfrac{\ln 2}{6}\bigr}$.",
            r"Had the second force equalled the first, one would still have $P(18)=1600$.",
        ],
        answer_key=[True, True, True, False, False],
        bodies=[
            [
                D(r"P(6)=100\cdot e^{2\ln 2}=400"),
            ],
            [
                D(r"P(18)=400\cdot e^{(\ln 2/6)\cdot 12}=400\cdot e^{2\ln 2}=1600"),
            ],
            [
                D(r"1600=100 e^{18 k_{\mathrm{avg}}}\qquad e^{18 k_{\mathrm{avg}}}=16=2^{4}"),
                D(r"k_{\mathrm{avg}}=\frac{4\ln 2}{18}=\frac{2\ln 2}{9}"),
            ],
            [
                D(r"\frac12\bigl(\tfrac{\ln 2}{3}+\tfrac{\ln 2}{6}\bigr)=\frac{\ln 2}{4}"),
                D(r"\frac{2\ln 2}{9}\neq\frac{\ln 2}{4}"),
                r"Unequal piece lengths require a time-weighted average, not the plain mean of the two forces.",
            ],
            [
                D(r"100\cdot e^{(\ln 2/3)\cdot 18}=100\cdot 2^{6}=6400\neq 1600"),
            ],
        ],
        solution_overview=(
            r"Match $P(6)=400$ and $P(18)=1600$. Endpoint matching recovers "
            r"$k_{\mathrm{avg}}=2\ln 2/9$, which is the time-weighted mean of the piece forces."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t40() -> dict[str, Any]:
    return make_task(
        title="Applied — when per-capita force vanishes",
        context=(
            r"GDP follows $Y(t)=Y_0 e^{gt}$ and population $N(t)=N_0 e^{pt}$ with $g=p=0.03$. "
            r"Per-capita output is $y=Y/N$."
        ),
        statements=[
            r"The per-capita force is $g-p=0$, so $y(t)$ is constant.",
            r"Aggregate output still doubles in time $T=\dfrac{\ln 2}{0.03}$.",
            r"Over that same horizon, population also doubles, keeping $y$ fixed.",
            r"If instead $p=0.01$ with the same $g=0.03$, the per-capita doubling time is $\dfrac{\ln 2}{0.02}$.",
            r"With $g=p$, the identity $y(t)=Y(t)$ holds for every $t$.",
        ],
        answer_key=[True, True, True, True, False],
        bodies=[
            [
                D(r"y(t)=y_0 e^{(g-p)t}=y_0"),
            ],
            [
                D(r"e^{0.03 T}=2\qquad T=\frac{\ln 2}{0.03}"),
            ],
            [
                D(r"N(T)=N_0 e^{0.03 T}=2N_0"),
                D(r"y(T)=\frac{2Y_0}{2N_0}=y_0"),
            ],
            [
                D(r"g-p=0.02\qquad T=\frac{\ln 2}{0.02}"),
            ],
            [
                D(r"y(t)=\frac{Y(t)}{N(t)}=y_0\neq Y(t)"),
            ],
        ],
        solution_overview=(
            r"Equal forces freeze per capita while aggregate and population still grow. "
            r"Per capita is a ratio, not equal to aggregate output."
        ),
        stem_kind="applied_letter",
    )


def t41() -> dict[str, Any]:
    fig = semi_log_exp(1000, -LN2 / 7, 28, "Semi-log decay force -ln2/7")
    return make_task(
        title="Semi-log decay graph — reading negative force",
        context=(
            r"A decaying level $m(t)=1000\,e^{kt}$ with $k<0$ is shown on semi-log axes, "
            r"consistent with $m(0)=1000$ and $m(7)=500$."
        ),
        statements=[
            r"The semi-log slope is $k=-\dfrac{\ln 2}{7}$.",
            r"At $t=21$ the mass is $m(21)=125$.",
            r"The rise $\ln m(14)-\ln m(0)$ equals $-2\ln 2$.",
            r"Because the semi-log graph has negative slope, the level $m(t)$ must be an affine function of $t$.",
            r"Solving $\ln m(t)=\ln 1000-\ln 8$ yields $t=21$.",
        ],
        answer_key=[True, True, True, False, True],
        bodies=[
            [
                D(r"e^{7k}=\tfrac12\qquad k=-\frac{\ln 2}{7}"),
            ],
            [
                D(r"m(21)=1000\cdot 2^{-3}=125"),
            ],
            [
                D(r"14k=-2\ln 2"),
            ],
            [
                r"A falling semi-log graph means exponential decay of the level, not an affine level path.",
                D(r"m(t)=1000 e^{kt}"),
            ],
            [
                D(r"kt=-\ln 8=-3\ln 2\qquad t=\frac{3\ln 2}{\ln 2/7}=21"),
            ],
        ],
        solution_overview=(
            r"Semi-log slope recovers $k=-\ln 2/7$. Powers of $1/2$ settle later masses; "
            r"the level itself remains exponential, not affine."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t42() -> dict[str, Any]:
    table = (
        "| $t$ | $0$ | $1$ | $2$ | $3$ |\n"
        "| --- | --- | --- | --- | --- |\n"
        "| $P(t)$ | $100$ | $200$ | $300$ | $600$ |"
    )
    return make_task(
        title="Table that breaks pure exponential structure",
        context=(
            r"The table records exact samples of a positive level $P$. Decide whether a single "
            r"continuous exponential can fit every column."
        ),
        statements=[
            r"The consecutive ratios $2,\ \tfrac{3}{2},\ 2$ are not constant, so no pure exponential fits all four heights.",
            r"The first three columns alone are consistent with force $k=\ln 2$ and start $100$.",
            r"Forcing $P(t)=100 e^{(\ln 2)t}$ would predict $P(2)=400$, contradicting the tabulated $300$.",
            r"The three-step ratio $\dfrac{P(3)}{P(0)}=6$ equals $e^{3k}$ for $k=\ln 2$.",
            r"Equal log-increments $\ln P(t+1)-\ln P(t)$ fail already between $t=0$ and $t=1$ versus $t=1$ and $t=2$.",
        ],
        answer_key=[True, False, True, False, True],
        bodies=[
            [
                D(r"\frac{200}{100}=2,\quad\frac{300}{200}=\tfrac32,\quad\frac{600}{300}=2"),
                r"Unequal ratios rule out a single geometric / continuous-exponential model.",
            ],
            [
                r"Columns $t=0,1$ give ratio $2$, but column $t=2$ would then need height $400$, not $300$.",
                D(r"100\cdot 2^{2}=400\neq 300"),
                r"So the first three columns are not consistent with force $\ln 2$.",
            ],
            [
                D(r"100\cdot 2^{2}=400\neq 300"),
            ],
            [
                D(r"e^{3\ln 2}=8\neq 6"),
            ],
            [
                D(r"\ln 200-\ln 100=\ln 2"),
                D(r"\ln 300-\ln 200=\ln\tfrac32\neq\ln 2"),
            ],
        ],
        solution_overview=(
            r"Non-constant ratios kill a pure exponential fit. Even the opening doubling fails by $t=2$, "
            r"and $P(3)/P(0)=6$ is not a pure power of $2$."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t43() -> dict[str, Any]:
    return make_task(
        title="Batch of continuous-exponential algebraic identities",
        context=(
            r"Let $P(t)=P_0 e^{kt}$ with $P_0>0$ and $k\in\mathbb{R}$."
        ),
        statements=[
            r"The identity $P(t+s)=P(t)e^{ks}$ holds for every real $t,s$.",
            r"Consequently $\dfrac{P(t+s)}{P(t)}$ depends on $s$ and $k$ alone, not on $t$ or $P_0$.",
            r"If $k\neq 0$, the only real period of $P$ is the trivial claim that no positive period exists.",
            r"The Wronskian-style combination $P'P-P\cdot(kP)$ vanishes identically.",
            r"The identity $P(2t)=P(t)^{2}/P_0$ holds for every $t$.",
        ],
        answer_key=[True, True, True, True, True],
        bodies=[
            [
                D(r"P(t+s)=P_0 e^{k(t+s)}=P(t)e^{ks}"),
            ],
            [
                D(r"\frac{P(t+s)}{P(t)}=e^{ks}"),
            ],
            [
                D(r"P(t+\tau)=P(t)\ \forall t\implies e^{k\tau}=1\implies\tau=0\quad(k\neq 0)"),
            ],
            [
                D(r"P'=kP\implies P'P-k P^{2}=0"),
            ],
            [
                D(r"P(2t)=P_0 e^{2kt}=\frac{(P_0 e^{kt})^{2}}{P_0}=\frac{P(t)^{2}}{P_0}"),
            ],
        ],
        solution_overview=(
            r"Translation multiplies by $e^{ks}$. Nonzero force forbids a positive period. "
            r"The quadratic identity $P(2t)=P(t)^{2}/P_0$ is the doubling-in-time rule."
        ),
        stem_kind="symbolic",
    )


def t44() -> dict[str, Any]:
    return make_task(
        title="Applied letter mix — growth, decay, and a crossing threshold",
        context=(
            r"A savings balance grows as $S(t)=1200\,e^{(\ln 2/15)t}$. A debt balance decays as "
            r"$D(t)=4800\,e^{-(\ln 2/15)t}$. Compare the two paths."
        ),
        statements=[
            r"The unique positive crossing time where $S(t)=D(t)$ is $t=15$.",
            r"At that crossing both balances equal $2400$.",
            r"The product $S(t)D(t)$ is the constant $1200\cdot 4800$ for every $t$.",
            r"The ratio $S(t)/D(t)$ equals $e^{(2\ln 2/15)t}/4$.",
            r"Solving $S(t)=2D(t)$ yields $t=\dfrac{45}{2}$.",
        ],
        answer_key=[True, True, True, True, True],
        bodies=[
            [
                D(r"1200 e^{kt}=4800 e^{-kt}\qquad e^{2kt}=4\qquad 2kt=2\ln 2"),
                D(r"k=\frac{\ln 2}{15}\implies t=15"),
            ],
            [
                D(r"S(15)=1200\cdot 2=2400=D(15)"),
            ],
            [
                D(r"S(t)D(t)=1200\cdot 4800\cdot e^{kt}e^{-kt}=1200\cdot 4800"),
            ],
            [
                D(r"\frac{S(t)}{D(t)}=\frac{1200}{4800}e^{2kt}=\frac14 e^{(2\ln 2/15)t}"),
            ],
            [
                D(r"\frac14 e^{2kt}=2\qquad e^{2kt}=8\qquad 2kt=3\ln 2"),
                D(r"t=\frac{3\ln 2}{2k}=\frac{45}{2}"),
            ],
        ],
        solution_overview=(
            r"Opposite forces $\pm\ln 2/15$ cross when $e^{2kt}=4$, i.e. at $t=15$. "
            r"The product is constant; ratio growth uses force $2k$."
        ),
        stem_kind="applied_letter",
        figure=competing_populations(1200, LN2 / 15, 4800, -LN2 / 15, 30, "Savings vs debt"),
    )


def build_exp_tasks() -> list[dict]:
    """Return exactly 44 hard exponential task dicts for subsection 10.1."""
    tasks = [
        t01(), t02(), t03(), t04(), t05(), t06(), t07(), t08(), t09(), t10(),
        t11(), t12(), t13(), t14(), t15(), t16(), t17(), t18(), t19(), t20(),
        t21(), t22(), t23(), t24(), t25(), t26(), t27(), t28(), t29(), t30(),
        t31(), t32(), t33(), t34(), t35(), t36(), t37(), t38(), t39(), t40(),
        t41(), t42(), t43(), t44(),
    ]
    assert len(tasks) == EXP_COUNT == 44

    required_kinds = {
        "graph", "table", "symbolic", "parametric", "rebuild", "nested",
        "hybrid", "text_dense", "piecewise", "applied_letter", "domain_tangled",
    }
    kinds = {t["stem_kind"] for t in tasks}
    missing = required_kinds - kinds
    assert not missing, f"missing stem_kind values: {missing}"

    for i, t in enumerate(tasks):
        assert len(t["statements"]) == 5, i
        assert len(set(t["statements"])) == 5, (i, "duplicate statements")
        assert len(t["answer_key"]) == 5, i
        assert len(t["tactical_explanations"]) == 5, i
        assert "TRUE or FALSE" in t["context"], i
        for j, ex in enumerate(t["tactical_explanations"]):
            letter = LETTERS[j]
            verd = "True" if t["answer_key"][j] else "False"
            assert ex.startswith(f"**{letter}.** → {verd}"), (i, j, ex[:80])
            assert ex.rstrip().endswith(f"So the statement is {verd}."), (i, j)
            assert "\\\\to" not in ex and "\\\\neq" not in ex and "\\\\infty" not in ex
        blob = (
            t["context"]
            + "".join(t["statements"])
            + t["solution_overview"]
            + "".join(t["tactical_explanations"])
        )
        for bad in ("\\\\to", "\\\\neq", "\\\\infty", "\\\\ln", "\\\\frac"):
            assert bad not in blob, (i, bad)
        for phrase in ("straight line", "is decreasing", "Nothing in the stem"):
            assert phrase not in blob, (i, phrase)
    return tasks


if __name__ == "__main__":
    from collections import Counter

    tasks = build_exp_tasks()
    print(f"built {len(tasks)} tasks")
    print("stem_kind:", dict(Counter(t["stem_kind"] for t in tasks)))
    print("true_counts:", dict(Counter(sum(t["answer_key"]) for t in tasks)))
    print(
        "figures:",
        sum(1 for t in tasks if t.get("figure")),
        "tables:",
        sum(1 for t in tasks if t.get("tables_markdown")),
    )
    assert len(tasks) == 44
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
    print("self-check OK")
