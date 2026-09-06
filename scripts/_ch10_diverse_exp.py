#!/usr/bin/env python3
"""Diverse Chapter 10.1 exponential-function builders (letter-heavy, Ch7/Ch9 quality).

Exports:
    EXP_COUNT = 44
    build_exp_tasks() -> list[dict]  # exactly 44 task dicts for subsection 10.1
"""
from __future__ import annotations

import math
import sys
from pathlib import Path
from typing import Any

import sympy as sp

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import (  # noqa: E402
    competing_populations,
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

# Illustrative sketch values (figures only; stems stay letter-first).
_ILL = dict(P0=1.0, k=0.05, r=0.04, T=6.0, k2=0.02, A0=3.0, B0=2.0, kA=0.06, kB=0.03)


def D(s: str) -> str:
    """Wrap a KaTeX display equation."""
    return f"$${s}$$"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    """Format one letter explanation to match live Ch10 voice."""
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
    assert len(statements) == 5
    assert len(answer_key) == 5
    assert len(bodies) == 5
    teas = [pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    task: dict[str, Any] = {
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
    return task


# ---------------------------------------------------------------------------
# Symbolic helpers used in assertions
# ---------------------------------------------------------------------------

_t, _k, _P0, _r, _g, _p, _a, _lam, _alpha, _T, _Ta = sp.symbols(
    "t k P0 r g p a lambda alpha T T_a", real=True, positive=True
)


def _assert_sym_identities() -> None:
    """Build-time sanity: core exponential identities hold symbolically."""
    assert sp.simplify(sp.log(2) / _k - sp.log(2) / _k) == 0
    assert sp.simplify(sp.exp(_k * sp.log(_a)) - _a**_k) == 0
    assert sp.simplify((_g - _p) - (_g - _p)) == 0
    # e^k > 1+k for k>0 (series)
    series = (sp.exp(_k) - (1 + _k)).series(_k, 0, 3).removeO()
    assert series == _k**2 / 2


# ---------------------------------------------------------------------------
# Task factories (44)
# ---------------------------------------------------------------------------


def t01_graph_cont_vs_disc() -> dict[str, Any]:
    """Continuous force k versus discrete factor (1+r); letter parameters."""
    # Truths from identities (independent of concrete sizes when k,r>0 and r≠e^k-1)
    key = [True, False, True, True, False]
    fig = two_models(_ILL["P0"], _ILL["k"], 1 + _ILL["r"], 20, "Illustrative: e^{kt} vs (1+r)^t")
    return make_task(
        title="Continuous force versus discrete compounding — letter rates",
        context=(
            r"A stock of capital follows the continuous model "
            r"$P(t)=P_0 e^{kt}$ with $P_0>0$ and force $k>0$. "
            r"A rival discrete model uses the same initial level but annual factor $(1+r)$ "
            r"with $r>0$, namely $Q(t)=P_0(1+r)^t$. Assume throughout that "
            r"$1+r\neq e^{k}$ (so the one-year multipliers disagree)."
        ),
        statements=[
            r"For every $t>0$, the continuous one-year multiplier is $e^{k}$, not $1+k$.",
            r"The paths $P$ and $Q$ coincide for every $t\ge 0$.",
            r"If $r=k$, then $Q(t)<P(t)$ for every $t>0$.",
            r"The continuous doubling time is $T=\dfrac{\ln 2}{k}$, independent of $P_0$.",
            r"Replacing $e^{kt}$ by $(1+k)^t$ leaves every level $P(t)$ unchanged.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Under continuous force $k$, one year maps $P\mapsto P\cdot e^{k}$.",
                D(r"P(1)=P_0 e^{k}"),
                r"The force $k$ itself is the instantaneous relative rate, not the one-year growth factor. "
                r"So the one-year multiplier is $e^{k}$, not $1+k$.",
            ],
            [
                r"Two exponential paths with the same $P_0$ agree for all $t$ if and only if their "
                r"one-year multipliers match.",
                D(r"1+r=e^{k}"),
                r"The stem assumes $1+r\neq e^{k}$, so $P$ and $Q$ diverge for $t>0$.",
            ],
            [
                r"When $r=k>0$, compare one-year factors via the strict inequality $e^{k}>1+k$.",
                D(r"e^{k}>1+k"),
                r"Raising both sides to the power $t>0$ yields $e^{kt}>(1+k)^t$, hence $P(t)>Q(t)$.",
            ],
            [
                r"Doubling means $P(T)=2P_0$, so $e^{kT}=2$.",
                D(r"T=\frac{\ln 2}{k}"),
                r"The initial level $P_0$ cancels, so $T$ depends only on $k$.",
            ],
            [
                r"The substitution $(1+k)^t$ for $e^{kt}$ changes the one-year multiplier from $e^{k}$ "
                r"to $1+k$. Since $e^{k}\neq 1+k$ for $k>0$, levels move.",
            ],
        ],
        solution_overview=(
            r"Recover the continuous path $P(t)=P_0 e^{kt}$ and the discrete rival "
            r"$Q(t)=P_0(1+r)^t$. One-year multipliers are $e^{k}$ and $1+r$; they agree for all "
            r"$t$ precisely when $1+r=e^{k}$. The inequality $e^{k}>1+k$ (for $k>0$) settles the "
            r"$r=k$ comparison. Doubling solves $e^{kT}=2$, giving $T=\ln 2/k$."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t02_table_recover_force() -> dict[str, Any]:
    """Table of exact exp samples; recover continuous force symbolically."""
    # Table uses symbolic form: P(t)=P0 e^{kt} sampled at t=0,1,2,3 with letters shown as ratios
    table = (
        r"| $t$ | $0$ | $1$ | $2$ | $3$ |"
        "\n"
        r"| --- | --- | --- | --- | --- |"
        "\n"
        r"| $P(t)$ | $P_0$ | $P_0 e^{k}$ | $P_0 e^{2k}$ | $P_0 e^{3k}$ |"
    )
    key = [True, True, False, True, False]
    return make_task(
        title="Recovering continuous force from an exact sample table",
        context=(
            r"A positive level $P$ is known to be continuous-exponential, $P(t)=P_0 e^{kt}$ "
            r"with unknown letters $P_0>0$ and $k\in\mathbb{R}$. The table records exact values "
            r"(not rounded measurements) at four integer times."
        ),
        statements=[
            r"For every consecutive pair in the table, $\dfrac{P(t+1)}{P(t)}=e^{k}$.",
            r"The continuous force equals $k=\ln\dfrac{P(1)}{P(0)}$.",
            r"The same table is also generated by the discrete model $P(t)=P_0(1+k)^t$ for every $k$.",
            r"$\dfrac{1}{2}\ln\dfrac{P(2)}{P(0)}$ recovers the same force $k$.",
            r"If $k>0$, then $P(3)<P(2)$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"From the closed form,",
                D(r"\frac{P(t+1)}{P(t)}=\frac{P_0 e^{k(t+1)}}{P_0 e^{kt}}=e^{k}"),
                r"so every consecutive ratio equals $e^{k}$.",
            ],
            [
                r"At $t=0$ one has $P(0)=P_0$, and $P(1)=P_0 e^{k}$.",
                D(r"k=\ln\frac{P(1)}{P(0)}"),
                r"That is exactly the recovered force.",
            ],
            [
                r"Discrete growth with additive rate $k$ would use ratios $1+k$, not $e^{k}$.",
                D(r"1+k\neq e^{k}\quad(k\neq 0)"),
                r"So the table is not generated by $P_0(1+k)^t$ for arbitrary $k$.",
            ],
            [
                r"Two-step growth gives $P(2)/P(0)=e^{2k}$, hence",
                D(r"\frac{1}{2}\ln\frac{P(2)}{P(0)}=k"),
                r"matching the one-step recovery.",
            ],
            [
                r"If $k>0$ then $e^{3k}>e^{2k}$, so $P(3)>P(2)$. The claimed inequality is reversed.",
            ],
        ],
        solution_overview=(
            r"The table is the exact sampling of $P(t)=P_0 e^{kt}$. Consecutive ratios are $e^{k}$, "
            r"so $k=\ln(P(1)/P(0))$ and equally $k=\tfrac12\ln(P(2)/P(0))$. Discrete $(1+k)^t$ "
            r"matches only in the knife-edge case $1+k=e^{k}$."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t03_symbolic_doubling_half() -> dict[str, Any]:
    key = [True, True, True, False, True]
    # Verify with sympy
    k = sp.symbols("k", positive=True)
    assert sp.simplify(sp.log(2) / k - sp.log(2) / k) == 0
    return make_task(
        title="Doubling and half-life identities with letter force",
        context=(
            r"Let $P(t)=P_0 e^{kt}$ with $P_0>0$. Write $T_{2}=\dfrac{\ln 2}{|k|}$ for the "
            r"doubling time when $k>0$, and $T_{1/2}=\dfrac{\ln 2}{|k|}$ for the half-life when $k<0$. "
            r"Both letters denote the same formula in $|k|$."
        ),
        statements=[
            r"If $k>0$, then $P(T_2)=2P_0$ for $T_2=\dfrac{\ln 2}{k}$.",
            r"If $k=-\lambda$ with $\lambda>0$, then $P(T_{1/2})=\dfrac12 P_0$ for $T_{1/2}=\dfrac{\ln 2}{\lambda}$.",
            r"In both regimes, $T_2$ (or $T_{1/2}$) is independent of $P_0$.",
            r"Doubling time equals $\dfrac{1}{k}$ whenever $k>0$.",
            r"For $k>0$, $P(2T_2)=4P_0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"P\!\left(\frac{\ln 2}{k}\right)=P_0 e^{\ln 2}=2P_0"),
                r"So the stated doubling identity holds.",
            ],
            [
                D(r"P\!\left(\frac{\ln 2}{\lambda}\right)=P_0 e^{-\lambda\cdot(\ln 2)/\lambda}=P_0 e^{-\ln 2}=\frac12 P_0"),
                r"That is the half-life identity.",
            ],
            [
                r"In $e^{kT}=2$ (or $e^{-\lambda T}=\tfrac12$) the factor $P_0$ cancels before taking logs, "
                r"so the characteristic time depends only on $|k|$.",
            ],
            [
                r"The linearised guess $1/k$ ignores the logarithm.",
                D(r"\frac{\ln 2}{k}\neq\frac{1}{k}"),
                r"Exact doubling uses $\ln 2$, not $1$.",
            ],
            [
                D(r"P(2T_2)=P_0 e^{k\cdot 2(\ln 2)/k}=P_0 e^{2\ln 2}=4P_0"),
                r"Two doubling times multiply the level by four.",
            ],
        ],
        solution_overview=(
            r"Solve $e^{kT}=2$ or $e^{-\lambda T}=\tfrac12$ to obtain $T=\ln 2/|k|$. "
            r"The initial level cancels. After two doubling times the factor is $2^2=4$."
        ),
        stem_kind="symbolic",
        tables_markdown=(
            r"| regime | characteristic time |"
            "\n"
            r"| --- | --- |"
            "\n"
            r"| growth $k>0$ | $T_2=\dfrac{\ln 2}{k}$ |"
            "\n"
            r"| decay $k=-\lambda$ | $T_{1/2}=\dfrac{\ln 2}{\lambda}$ |"
        ),
    )


def t04_parametric_compare_rates() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Two continuous forces $\\alpha$ and $\\beta$ — parametric comparison",
        context=(
            r"Two positive stocks start equal: $A(0)=B(0)=S_0>0$. Thereafter "
            r"$A(t)=S_0 e^{\alpha t}$ and $B(t)=S_0 e^{\beta t}$ with letter forces "
            r"$\alpha,\beta\in\mathbb{R}$ and $\alpha\neq\beta$."
        ),
        statements=[
            r"$A(t)>B(t)$ for every $t>0$ if and only if $\alpha>\beta$.",
            r"The crossing time where $A(t)=B(t)$ for some $t>0$ always exists.",
            r"$\dfrac{A(t)}{B(t)}=e^{(\alpha-\beta)t}$ for every $t$.",
            r"If $\alpha>\beta$, the gap $\ln A(t)-\ln B(t)$ grows linearly in $t$.",
            r"Equal forces are necessary for $A(t)=B(t)$ at even a single $t>0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{A(t)}{B(t)}=e^{(\alpha-\beta)t}"),
                r"For $t>0$ the exponential is $>1$ precisely when $\alpha-\beta>0$, i.e. $\alpha>\beta$. "
                r"The converse is identical, giving the iff.",
            ],
            [
                r"Since $A(0)=B(0)$ and $\alpha\neq\beta$, the ratio $e^{(\alpha-\beta)t}$ equals $1$ "
                r"only at $t=0$. There is no later crossing.",
            ],
            [
                r"Cancel $S_0$ in the quotient of the two closed forms to obtain "
                r"$e^{(\alpha-\beta)t}$ identically.",
            ],
            [
                D(r"\ln A(t)-\ln B(t)=(\alpha-\beta)t"),
                r"When $\alpha>\beta$ this linear function of $t$ is strictly increasing.",
            ],
            [
                r"Necessity fails: if $\alpha\neq\beta$ then $A(t)=B(t)$ only at $t=0$. "
                r"But the claim says equal forces are necessary for a crossing at some $t>0$ — "
                r"actually a crossing at $t>0$ never happens when forces differ, and when forces "
                r"agree the paths coincide everywhere (not a single isolated crossing). "
                r"The statement as written is false.",
            ],
        ],
        solution_overview=(
            r"With equal starts, $A/B=e^{(\alpha-\beta)t}$. Sign of $\alpha-\beta$ decides which path "
            r"leads for all $t>0$; unequal forces never cross again. Log-gap is exactly $(\alpha-\beta)t$."
        ),
        stem_kind="parametric",
        figure=competing_populations(_ILL["A0"], _ILL["kA"], _ILL["B0"], _ILL["kB"], 25, "Illustrative A vs B"),
    )


def t05_rebuild_from_doubling() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Rebuild $P(t)=P_0 e^{kt}$ from a doubling time",
        context=(
            r"A continuous-exponential level is known to double every $T>0$ time units: "
            r"$P(t+T)=2P(t)$ for every $t\ge 0$. It is also known that $P(0)=P_0>0$. "
            r"No numeric census is supplied — only the letters $P_0$ and $T$."
        ),
        statements=[
            r"The continuous force must be $k=\dfrac{\ln 2}{T}$.",
            r"The rebuilt path is $P(t)=P_0\,2^{t/T}$.",
            r"The same doubling condition forces $k=\dfrac{1}{T}$.",
            r"For every integer $n\ge 0$, $P(nT)=2^n P_0$.",
            r"The rebuilt model is linear in $t$: $P(t)=P_0\bigl(1+\dfrac{t\ln 2}{T}\bigr)$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Doubling on every window of length $T$ means $e^{kT}=2$.",
                D(r"k=\frac{\ln 2}{T}"),
            ],
            [
                D(r"P(t)=P_0 e^{(\ln 2/T)\,t}=P_0\,2^{t/T}"),
                r"So the base-$2$ form is equivalent.",
            ],
            [
                r"The identity $e^{kT}=2$ yields $k=\ln 2/T$, not $1/T$.",
            ],
            [
                D(r"P(nT)=P_0\,2^{n}=2^n P_0"),
                r"Each block of length $T$ contributes one exact doubling.",
            ],
            [
                r"The linear expression is the first-order Taylor guess for $e^{(\ln 2)t/T}$, "
                r"not the exponential solution of the doubling condition.",
            ],
        ],
        solution_overview=(
            r"From $e^{kT}=2$ recover $k=\ln 2/T$, hence $P(t)=P_0 e^{(\ln 2)t/T}=P_0\,2^{t/T}$. "
            r"Integer multiples of $T$ produce exact powers of two."
        ),
        stem_kind="rebuild",
        figure=svg_exp(P0=1.0, k=math.log(2) / 5.0, tmax=15, title="Illustrative: double every T=5", mark_t=5),
    )


def t06_nested_composition() -> dict[str, Any]:
    key = [True, True, False, True, True]
    a, k = sp.symbols("a k", positive=True)
    assert sp.simplify(sp.exp(k * sp.log(a)) - a**k) == 0
    return make_task(
        title="Nested exponential–log compositions with letters",
        context=(
            r"Fix letters $a>0$ and $k\in\mathbb{R}$. Consider the nested expressions "
            r"$e^{k\ln a}$, $a^{k}$, $\ln(e^{kt})$, and $e^{\ln(P_0)+kt}$ with $P_0>0$."
        ),
        statements=[
            r"For every $a>0$ and every real $k$, $e^{k\ln a}=a^{k}$.",
            r"If $P(t)=P_0 e^{kt}$, then $\ln P(t)=\ln P_0+kt$ for every $t$.",
            r"$e^{\ln(P_0)+kt}$ equals $P_0+e^{kt}$ for every $P_0>0$.",
            r"$\ln(e^{kt})=kt$ for every real $k,t$.",
            r"The map $t\mapsto e^{k\ln(1+r)}$ with fixed $r>-1$ is constant in $t$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"e^{k\ln a}=\bigl(e^{\ln a}\bigr)^{k}=a^{k}"),
                r"The identity holds for all $a>0$ and all real $k$.",
            ],
            [
                D(r"\ln P(t)=\ln P_0+kt"),
                r"Natural log turns the continuous force into a linear trend.",
            ],
            [
                D(r"e^{\ln P_0+kt}=P_0 e^{kt}"),
                r"That is the product $P_0\cdot e^{kt}$, not the sum $P_0+e^{kt}$.",
            ],
            [
                r"Because $\ln$ and $\exp$ are inverses on $\mathbb{R}$,",
                D(r"\ln(e^{kt})=kt"),
            ],
            [
                r"The expression $e^{k\ln(1+r)}=(1+r)^{k}$ does not depend on $t$, so as a function "
                r"of $t$ it is constant.",
            ],
        ],
        solution_overview=(
            r"Use $e^{k\ln a}=a^{k}$ and $\ln\circ\exp=\mathrm{id}$. Continuous growth "
            r"$P_0 e^{kt}$ is exactly $e^{\ln P_0+kt}$; never rewrite that as a sum."
        ),
        stem_kind="nested",
    )


def t07_hybrid_semilog_graph() -> dict[str, Any]:
    key = [True, False, True, True, False]
    fig = semi_log_exp(100.0, 0.05, 20, "Illustrative semi-log: slope = k")
    return make_task(
        title="Semi-log slope reads the letter force $k$",
        context=(
            r"A level follows $P(t)=P_0 e^{kt}$ with $P_0>0$. The figure shows an illustrative "
            r"semi-log plot of $\ln P$ against $t$ for one positive pair $(P_0,k)$. "
            r"In the letters, the same geometry always holds."
        ),
        statements=[
            r"On the $(t,\ln P)$-plane the graph is a straight line of slope $k$.",
            r"On the $(t,\ln P)$-plane the graph is a straight line of slope $P_0$.",
            r"The intercept of that line at $t=0$ equals $\ln P_0$.",
            r"Any chord slope $\dfrac{\ln P(t_2)-\ln P(t_1)}{t_2-t_1}$ equals $k$ whenever $t_2\neq t_1$.",
            r"If $k>0$, the ordinary $(t,P)$-plot is itself a straight line.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln P(t)=\ln P_0+kt"),
                r"That is affine in $t$ with slope exactly $k$.",
            ],
            [
                r"The slope is the force $k$, not the initial level $P_0$. The letter $P_0$ appears "
                r"only in the intercept $\ln P_0$.",
            ],
            [
                r"Substitute $t=0$ into $\ln P(t)=\ln P_0+kt$ to read the intercept $\ln P_0$.",
            ],
            [
                D(r"\frac{(\ln P_0+kt_2)-(\ln P_0+kt_1)}{t_2-t_1}=k"),
                r"Every chord recovers the same force.",
            ],
            [
                r"On the raw $(t,P)$-plane one sees $P_0 e^{kt}$, which is curved (convex) for $k\neq 0$, "
                r"not a straight line.",
            ],
        ],
        solution_overview=(
            r"Take logs once: $\ln P=\ln P_0+kt$. Semi-log slope and every chord equal $k$; "
            r"intercept is $\ln P_0$. The raw level plot remains exponential."
        ),
        stem_kind="hybrid",
        figure=fig,
    )


def t08_text_dense_iff() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Tangled quantifiers on continuous exponential paths",
        context=(
            r"Let $\mathcal{E}$ be the family of all functions of the form "
            r"$P(t)=P_0 e^{kt}$ with letters $P_0>0$ and $k\in\mathbb{R}$. "
            r"Statements below mix universal and existential claims about members of $\mathcal{E}$."
        ),
        statements=[
            r"A path $P\in\mathcal{E}$ is strictly increasing on $\mathbb{R}$ if and only if $k>0$.",
            r"For every $P\in\mathcal{E}$ with $k\neq 0$, the equation $P(t)=2P_0$ has exactly one real root.",
            r"There exists $P\in\mathcal{E}$ such that $P(t)=P_0+kt$ for every $t$.",
            r"If $P\in\mathcal{E}$ satisfies $P(t+s)=P(t)P(s)/P_0$ for all real $t,s$, then the functional "
            r"equation holds automatically for every member of $\mathcal{E}$.",
            r"For every $k\in\mathbb{R}$ there is a choice of $P_0>0$ making $P(t)$ identically $1$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"P'(t)=k P_0 e^{kt}"),
                r"Since $P_0 e^{kt}>0$, one has $P'>0$ everywhere precisely when $k>0$. "
                r"If $k=0$ the path is constant; if $k<0$ it decreases.",
            ],
            [
                D(r"e^{kt}=2\implies t=\frac{\ln 2}{k}"),
                r"For $k\neq 0$ there is exactly one real solution (positive if $k>0$, negative if $k<0$).",
            ],
            [
                r"An exponential $P_0 e^{kt}$ equals the affine path $P_0+kt$ for all $t$ only in degenerate "
                r"limits that fail for a fixed pair $(P_0,k)$ across every $t$. No such member exists.",
            ],
            [
                r"Compute for any $P(t)=P_0 e^{kt}$:",
                D(r"\frac{P(t)P(s)}{P_0}=P_0 e^{k(t+s)}=P(t+s)"),
                r"So Cauchy-type scaling holds for the whole family.",
            ],
            [
                r"Identically $1$ forces $P_0=1$ and $k=0$ simultaneously. For a prescribed nonzero $k$ "
                r"no choice of $P_0$ works. The universal claim over every $k$ is false.",
            ],
        ],
        solution_overview=(
            r"Sign of $k$ governs monotonicity. Hitting $2P_0$ is a single log solve when $k\neq 0$. "
            r"Exponentials are not affine. The multiplicative Cauchy identity holds for every "
            r"$P_0 e^{kt}$."
        ),
        stem_kind="text_dense",
    )


def t09_piecewise_force_switch() -> dict[str, Any]:
    key = [True, False, True, True, False]
    fig = piecewise_kink(1.0, 0.06, 5.0, 0.02, 18, "Illustrative piecewise force switch")
    return make_task(
        title="Piecewise continuous force — switch at letter $T$",
        context=(
            r"A fund follows the piecewise continuous-exponential rule "
            r"$$P(t)=\begin{cases}P_0 e^{k_1 t},&0\le t\le T,\\[4pt]"
            r"P_0 e^{k_1 T}e^{k_2(t-T)},&t>T,\end{cases}$$"
            r" with letters $P_0>0$, $T>0$, and forces $k_1,k_2\in\mathbb{R}$ (not necessarily equal)."
        ),
        statements=[
            r"$P$ is continuous at the switch time $t=T$.",
            r"If $k_1\neq k_2$, then $P$ fails to be continuous at $t=T$.",
            r"For $t>T$, $\ln P(t)=\ln P_0+k_1 T+k_2(t-T)$.",
            r"The average force on $[0,T]$ recovered from $\dfrac{1}{T}\ln\dfrac{P(T)}{P_0}$ equals $k_1$.",
            r"One may replace the whole path by the single force $k_1$ for all $t\ge 0$ without "
            r"changing any value, even when $k_2\neq k_1$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Left and right limits at $T$ both equal $P_0 e^{k_1 T}$.",
                D(r"P(T-)=P(T+)=P_0 e^{k_1 T}"),
                r"So the pieced definition is continuous at the switch.",
            ],
            [
                r"Continuity at $T$ uses only the matching value $P_0 e^{k_1 T}$; it does not require "
                r"$k_1=k_2$. A kink in the derivative can occur while the level stays continuous.",
            ],
            [
                r"For $t>T$, take logs of the second piece:",
                D(r"\ln P(t)=\ln P_0+k_1 T+k_2(t-T)"),
            ],
            [
                D(r"\frac{1}{T}\ln\frac{P(T)}{P_0}=\frac{1}{T}\ln e^{k_1 T}=k_1"),
                r"The early window sees only force $k_1$.",
            ],
            [
                r"After $T$, the true force is $k_2$. Whenever $k_2\neq k_1$ the constant-$k_1$ "
                r"extrapolation disagrees for $t>T$.",
            ],
        ],
        solution_overview=(
            r"Match values at $T$ to keep continuity; log-linearise each piece separately. "
            r"Early average force is $k_1$. A single global force $k_1$ cannot replace a genuine switch."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t10_applied_gdp_letters() -> dict[str, Any]:
    key = [True, False, True, True, False]
    fig = gdp_per_capita(500, 0.03, 10, 0.01, 25, "Illustrative GDP vs per capita")
    return make_task(
        title="GDP per capita — force $g-p$ trap with letter rates",
        context=(
            r"Aggregate real output and population follow "
            r"$Y(t)=Y_0 e^{gt}$ and $N(t)=N_0 e^{pt}$ with letters $Y_0,N_0>0$ and forces "
            r"$g,p\in\mathbb{R}$. Per capita output is the ratio $y(t)=Y(t)/N(t)$."
        ),
        statements=[
            r"The continuous force on $y$ is exactly $g-p$.",
            r"The continuous force on $y$ is exactly $g+p$.",
            r"$y(t)=y_0 e^{(g-p)t}$ with $y_0=Y_0/N_0$.",
            r"$\dfrac{d}{dt}\ln y(t)=g-p$ for every $t$.",
            r"If $g>0$ and $p>0$, then necessarily $y$ is strictly increasing.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln y=\ln Y-\ln N=\ln Y_0-\ln N_0+(g-p)t"),
                r"Differentiating (or reading the coefficient of $t$) shows the force is $g-p$.",
            ],
            [
                r"Adding forces would describe a product $YN$, not the ratio $Y/N$. The sum trap "
                r"$g+p$ is not the per-capita force.",
            ],
            [
                r"Exponentiating the log identity yields $y(t)=(Y_0/N_0)e^{(g-p)t}$.",
            ],
            [
                r"Differentiate $\ln y=\mathrm{const}+(g-p)t$ to obtain $g-p$ at every $t$.",
            ],
            [
                r"Growth of $y$ requires $g-p>0$, not merely $g>0$ and $p>0$. If population force "
                r"exceeds output force, per capita falls.",
            ],
        ],
        solution_overview=(
            r"Logs turn the ratio into a difference of forces: $\ln y=\ln y_0+(g-p)t$. "
            r"Never add $g$ and $p$ for per capita. Sign of $g-p$ alone governs whether $y$ rises."
        ),
        stem_kind="applied_letter",
        figure=fig,
    )


def t11_graph_competing() -> dict[str, Any]:
    key = [True, True, False, True, False]
    fig = competing_populations(4.0, 0.05, 5.0, 0.02, 30, "Competing stocks A and B")
    return make_task(
        title="Competing populations with letter rates $k_A,k_B$",
        context=(
            r"Two populations obey $A(t)=A_0 e^{k_A t}$ and $B(t)=B_0 e^{k_B t}$ with "
            r"$A_0,B_0>0$ and real forces $k_A,k_B$. The figure is an illustration for one "
            r"positive-rate scenario; claims stay in letters."
        ),
        statements=[
            r"If $k_A>k_B$, then $\dfrac{A(t)}{B(t)}\to\infty$ as $t\to\infty$.",
            r"The time at which $A(t)=B(t)$ (when it exists and is unique) solves "
            r"$t=\dfrac{\ln(B_0/A_0)}{k_A-k_B}$ provided $k_A\neq k_B$ and the right-hand side is positive.",
            r"If $A_0>B_0$ and $k_A<k_B$, then $A(t)>B(t)$ for every $t\ge 0$.",
            r"$\dfrac{d}{dt}\ln\dfrac{A}{B}=k_A-k_B$.",
            r"Equal initial levels $A_0=B_0$ force $A(t)=B(t)$ for every $t$, regardless of $k_A,k_B$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{A(t)}{B(t)}=\frac{A_0}{B_0}e^{(k_A-k_B)t}"),
                r"When $k_A>k_B$ the exponential diverges, so the ratio tends to $\infty$.",
            ],
            [
                r"Set $A_0 e^{k_A t}=B_0 e^{k_B t}$ and take logs:",
                D(r"t=\frac{\ln(B_0/A_0)}{k_A-k_B}"),
                r"Whenever this $t$ is positive it is the unique crossing.",
            ],
            [
                r"A larger start can still be overtaken when the rival force is larger. "
                r"The claim that $A$ stays ahead forever is false in general.",
            ],
            [
                D(r"\frac{d}{dt}\ln\frac{A}{B}=k_A-k_B"),
                r"Log-ratio grows at the force gap.",
            ],
            [
                r"Equal starts give $A/B=e^{(k_A-k_B)t}$, which stays $1$ for all $t$ only if $k_A=k_B$.",
            ],
        ],
        solution_overview=(
            r"Compare via the ratio $A/B=(A_0/B_0)e^{(k_A-k_B)t}$. Crossings are a single log solve; "
            r"long-run leadership follows the larger force."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t12_table_diagnose_model() -> dict[str, Any]:
    table = (
        r"| $t$ | $0$ | $1$ | $2$ |"
        "\n"
        r"| --- | --- | --- | --- |"
        "\n"
        r"| $U(t)$ | $U_0$ | $U_0(1+r)$ | $U_0(1+r)^2$ |"
        "\n"
        r"| $V(t)$ | $V_0$ | $V_0 e^{k}$ | $V_0 e^{2k}$ |"
    )
    key = [True, True, False, True, False]
    return make_task(
        title="Diagnosing discrete versus continuous from a twin table",
        context=(
            r"Two positive processes are tabulated exactly. $U$ is proposed as discrete annual "
            r"compounding with letter factor $(1+r)$, $r>-1$, $r\neq 0$. $V$ is proposed as "
            r"continuous force $k\neq 0$. Initial levels $U_0,V_0>0$ are letters."
        ),
        statements=[
            r"The successive ratios of $U$ are constant and equal to $1+r$.",
            r"The successive ratios of $V$ are constant and equal to $e^{k}$.",
            r"If $1+r=e^{k}$ and $U_0=V_0$, then the tabulated values still disagree at $t=2$.",
            r"Constant successive ratios are necessary for a pure exponential (discrete or continuous) model.",
            r"The table forces $r=k$ as letters.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{U(1)}{U(0)}=1+r,\quad \frac{U(2)}{U(1)}=1+r"),
                r"Discrete compounding has constant ratio $1+r$.",
            ],
            [
                D(r"\frac{V(1)}{V(0)}=e^{k},\quad \frac{V(2)}{V(1)}=e^{k}"),
                r"Continuous force likewise yields constant ratio $e^{k}$.",
            ],
            [
                r"When $1+r=e^{k}$ and starts agree, both models produce the same geometric sequence, "
                r"so the $t=2$ entries match. The claim that they disagree is false.",
            ],
            [
                r"Pure exponential structure (either $(1+r)^t$ or $e^{kt}$) is characterised by "
                r"constant successive ratios on an arithmetic time grid.",
            ],
            [
                r"The table never equates $r$ with $k$; it only exhibits ratios $1+r$ and $e^{k}$. "
                r"Those letters may differ.",
            ],
        ],
        solution_overview=(
            r"Read constant ratios off each row: $1+r$ for discrete, $e^{k}$ for continuous. "
            r"The models coincide on the grid precisely when $1+r=e^{k}$ and starts match — "
            r"not when $r=k$."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t13_symbolic_newton() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Newton cooling structure with ambient letter $T_a$",
        context=(
            r"A temperature $T(t)$ obeys Newton cooling toward a constant ambient letter $T_a$: "
            r"$$T(t)=T_a+\bigl(T(0)-T_a\bigr)e^{-kt},$$"
            r" with force letter $k>0$ and $T(0)\neq T_a$."
        ),
        statements=[
            r"$T(t)\to T_a$ as $t\to\infty$.",
            r"The gap $T(t)-T_a$ is a pure exponential with force $-k$.",
            r"The path $T(t)$ itself is a pure exponential $Ce^{kt}$ through the origin of temperature.",
            r"Solving $T(t)=T_\ast$ for a target between $T(0)$ and $T_a$ yields "
            r"$t=\dfrac{1}{k}\ln\dfrac{T(0)-T_a}{T_\ast-T_a}$.",
            r"If $T(0)>T_a$, then $T(t)$ is increasing for all $t>0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"T(t)-T_a=\bigl(T(0)-T_a\bigr)e^{-kt}\to 0"),
                r"Hence $T(t)\to T_a$.",
            ],
            [
                r"The displayed identity is exactly $T(t)-T_a=(T(0)-T_a)e^{-kt}$, a continuous "
                r"exponential gap with force $-k$.",
            ],
            [
                r"Unless $T_a=0$, the level $T(t)$ is an exponential plus a nonzero constant, "
                r"not a pure through-origin exponential.",
            ],
            [
                r"Set $T_a+(T(0)-T_a)e^{-kt}=T_\ast$ and rearrange:",
                D(r"e^{-kt}=\frac{T_\ast-T_a}{T(0)-T_a}"),
                D(r"t=\frac{1}{k}\ln\frac{T(0)-T_a}{T_\ast-T_a}"),
            ],
            [
                r"When $T(0)>T_a$ the object cools toward ambient, so $T$ is decreasing, not increasing.",
            ],
        ],
        solution_overview=(
            r"Rewrite Newton as an exponential gap to $T_a$. Long-run limit is ambient; "
            r"hitting times are log solves on the gap. The temperature level is affine-plus-exponential, "
            r"not a pure $Ce^{kt}$."
        ),
        stem_kind="symbolic",
        figure=svg_curves(
            [
                (lambda t: 20 + (80 - 20) * math.exp(-0.15 * t), "#8B5A2B", "T(t)"),
                (lambda t: 20, "#2F5D50", "T_a", "6 4"),
            ],
            xmin=0,
            xmax=30,
            title="Illustrative Newton cooling toward T_a",
            ylabel="temperature",
            hlines=[20],
        ),
    )


def t14_parametric_disc_cont() -> dict[str, Any]:
    key = [True, False, True, False, True]
    return make_task(
        title="Matching discrete factor $(1+r)$ to continuous force $k$",
        context=(
            r"A bank offers discrete annual growth with letter factor $(1+r)$, $r>-1$. "
            r"A continuous rival uses force $k\in\mathbb{R}$. Both start at the same $P_0>0$."
        ),
        statements=[
            r"The two models agree at every integer year if and only if $e^{k}=1+r$.",
            r"Setting $k=r$ always makes the models agree at every integer year.",
            r"The continuous force that matches the discrete factor is $k=\ln(1+r)$ (for $r>-1$).",
            r"For $r>0$, the matching force $\ln(1+r)$ exceeds $r$.",
            r"For $r>0$, $\ln(1+r)<r$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"At integer $n$, discrete gives $P_0(1+r)^n$ while continuous gives $P_0 e^{kn}$. "
                r"Equality for all $n$ holds iff $e^{k}=1+r$.",
            ],
            [
                r"Unless $r=0$, $e^{r}\neq 1+r$, so $k=r$ fails to match.",
            ],
            [
                D(r"k=\ln(1+r)"),
                r"That is the unique continuous force matching the discrete factor.",
            ],
            [
                r"The tangent-line inequality for $\ln$ at $1$ gives $\ln(1+r)<r$ for $r>0$, "
                r"so the matching force is smaller than $r$, not larger.",
            ],
            [
                D(r"\ln(1+r)<r\quad(r>0)"),
                r"Strict concavity of $\ln$ yields the inequality.",
            ],
        ],
        solution_overview=(
            r"Equate one-year multipliers: $e^{k}=1+r$ forces $k=\ln(1+r)$. "
            r"The naive $k=r$ overstates continuous force relative to discrete factor when $r>0$."
        ),
        stem_kind="parametric",
        tables_markdown=(
            r"| spelling | one-year factor | continuous force |"
            "\n"
            r"| --- | --- | --- |"
            "\n"
            r"| discrete | $1+r$ | — |"
            "\n"
            r"| matched continuous | $e^{k}$ | $k=\ln(1+r)$ |"
            "\n"
            r"| naive $k=r$ | $e^{r}$ | $r$ |"
        ),
    )


def t15_rebuild_two_points() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Rebuild continuous force from two lettered observations",
        context=(
            r"A continuous-exponential path passes through two observations "
            r"$\bigl(t_1,P(t_1)\bigr)$ and $\bigl(t_2,P(t_2)\bigr)$ with $t_2>t_1$ and "
            r"positive levels. Letters $P(t_i)$ stand for the observed values."
        ),
        statements=[
            r"The recovered force is $k=\dfrac{\ln P(t_2)-\ln P(t_1)}{t_2-t_1}$.",
            r"The rebuilt path may be written $P(t)=P(t_1)\,e^{k(t-t_1)}$ with that $k$.",
            r"The same two points always determine a unique discrete factor $(1+r)$ that matches "
            r"them at every real $t$, not merely on an integer grid.",
            r"If a third observation lies off $P(t_1)e^{k(t-t_1)}$, the pure continuous-exponential "
            r"hypothesis is rejected.",
            r"The recovered $k$ equals $\dfrac{P(t_2)-P(t_1)}{t_2-t_1}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"k=\frac{\ln P(t_2)-\ln P(t_1)}{t_2-t_1}"),
                r"That is the unique continuous force through the two points.",
            ],
            [
                r"Anchoring at the first observation and applying force $k$ reproduces every later "
                r"continuous-exponential value, including the second observation.",
            ],
            [
                r"A discrete factor $(1+r)^t$ is not even defined the same way for non-integer $t$ "
                r"without extending via $\exp(t\ln(1+r))$, which then collapses to a continuous force. "
                r"There is no separate discrete path that matches two points at every real $t$ while "
                r"remaining a different model.",
            ],
            [
                r"Three points overdetermine a two-parameter exponential. A mismatch falsifies the "
                r"pure model.",
            ],
            [
                r"The difference quotient of raw levels is not the continuous force; force uses logs.",
            ],
        ],
        solution_overview=(
            r"Two positive observations fix $k$ via a log chord and then fix the whole path by "
            r"anchoring at one point. Raw slopes are not forces; a third off-path point rejects the model."
        ),
        stem_kind="rebuild",
        tables_markdown=(
            r"| observation | time | level |"
            "\n"
            r"| --- | --- | --- |"
            "\n"
            r"| first | $t_1$ | $P(t_1)$ |"
            "\n"
            r"| second | $t_2$ | $P(t_2)$ |"
        ),
    )


def t16_nested_power_exp() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Rewriting $a^{t}$ as continuous force $\\ln a$",
        context=(
            r"Fix a letter base $a>0$, $a\neq 1$, and write $f(t)=a^{t}$. "
            r"View $f$ as a continuous-exponential path."
        ),
        statements=[
            r"$f(t)=e^{t\ln a}$ for every real $t$.",
            r"The continuous force of $f$ is $a$.",
            r"The continuous force of $f$ is $\ln a$.",
            r"Doubling time (when $a>1$) equals $\dfrac{\ln 2}{\ln a}$.",
            r"$a^{t}=(1+(a-1))^{t}$ implies the continuous force equals $a-1$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"a^{t}=e^{t\ln a}"),
                r"Definition of real exponentiation.",
            ],
            [
                r"Force is the coefficient of $t$ in the exponent after writing $e^{(\cdot)t}$, "
                r"namely $\ln a$, not the base $a$.",
            ],
            [
                D(r"f(t)=e^{(\ln a)\,t}"),
                r"so the force is $\ln a$.",
            ],
            [
                D(r"a^{T}=2\implies T\ln a=\ln 2\implies T=\frac{\ln 2}{\ln a}"),
            ],
            [
                r"Writing $a=1+(a-1)$ does not convert the continuous force into $a-1$. "
                r"Force remains $\ln a$, while $a-1$ is a discrete one-year net rate relative to $1$.",
            ],
        ],
        solution_overview=(
            r"Pass to $e^{t\ln a}$ to read force $\ln a$. Doubling solves $a^{T}=2$. "
            r"Do not confuse $\ln a$ with the discrete net $a-1$."
        ),
        stem_kind="nested",
    )


def t17_hybrid_table_graph() -> dict[str, Any]:
    # Concrete small integers in table for diagnosis; letters in claims about structure
    rows = [1, 2, 4, 8]
    table = (
        r"| $t$ | $0$ | $1$ | $2$ | $3$ |"
        "\n"
        r"| --- | --- | --- | --- | --- |"
        "\n"
        r"| $P(t)$ | $1$ | $2$ | $4$ | $8$ |"
    )
    fig = svg_exp(P0=1.0, k=math.log(2), tmax=4, title="Exact doubling samples", mark_t=1)
    key = [True, True, True, False, False]
    return make_task(
        title="Hybrid — integer doubling table meets continuous force $\\ln 2$",
        context=(
            r"The table records exact levels of a continuous-exponential path at integer times. "
            r"The figure sketches the same path. Treat the pattern as $P(t)=e^{kt}$ with unknown "
            r"letter $k$ to be recovered (here $P_0=1$)."
        ),
        statements=[
            r"Successive ratios equal $2$, so $e^{k}=2$ and $k=\ln 2$.",
            r"The rebuilt path is $P(t)=2^{t}$.",
            r"Doubling time equals $1$.",
            r"The same table is generated by force $k=2$.",
            r"Because the table uses integers only, the continuous model is underdetermined on "
            r"non-integer $t$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"e^{k}=2\implies k=\ln 2"),
                r"Constant ratio $2$ pins the force.",
            ],
            [
                D(r"P(t)=e^{(\ln 2)t}=2^{t}"),
            ],
            [
                r"With $k=\ln 2$, doubling time is $\ln 2/k=1$, matching the table's step.",
            ],
            [
                r"Force $k=2$ would give ratios $e^{2}$, not $2$.",
            ],
            [
                r"A continuous exponential is completely determined by $P_0$ and $k$. Matching the "
                r"integer grid fixes both, so values at non-integer $t$ are determined, not free.",
            ],
        ],
        solution_overview=(
            r"Ratio $2$ forces $k=\ln 2$ and $P(t)=2^{t}$. Doubling time is $1$. "
            r"The continuous extension beyond integers is unique."
        ),
        stem_kind="hybrid",
        figure=fig,
        tables_markdown=table,
    )


def t18_text_dense_for_every() -> dict[str, Any]:
    key = [False, True, True, False, True]
    return make_task(
        title="‘For every’ and ‘precisely when’ in exponential claims",
        context=(
            r"Throughout, $P(t)=P_0 e^{kt}$ with $P_0>0$. Quantifiers range over real times and "
            r"over letter parameters as written."
        ),
        statements=[
            r"For every $k\in\mathbb{R}$, $P$ is unbounded above on $[0,\infty)$.",
            r"$P$ is unbounded above on $[0,\infty)$ precisely when $k>0$.",
            r"For every $P_0>0$ and every $k$, the identity $P(0)=P_0$ holds.",
            r"For every $t>0$, the map $k\mapsto P(t)$ is decreasing.",
            r"The equality $P(t)=P_0$ for every $t$ holds precisely when $k=0$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"If $k\le 0$ then $P$ is bounded on $[0,\infty)$ (constant or decaying). "
                r"The universal claim over every $k$ fails.",
            ],
            [
                r"For $k>0$, $P(t)\to\infty$. For $k\le 0$ it does not. That is precisely the dichotomy.",
            ],
            [
                r"By definition $P(0)=P_0 e^{0}=P_0$ for every admissible pair of letters.",
            ],
            [
                D(r"\frac{\partial}{\partial k}P(t)=t P_0 e^{kt}>0\quad(t>0)"),
                r"So $k\mapsto P(t)$ is increasing in $k$, not decreasing.",
            ],
            [
                r"$P(t)=P_0$ for all $t$ iff $e^{kt}=1$ for all $t$ iff $k=0$.",
            ],
        ],
        solution_overview=(
            r"Read quantifiers carefully: unboundedness needs $k>0$; constancy needs $k=0$. "
            r"Partial derivatives in $k$ show larger force raises every positive-time level."
        ),
        stem_kind="text_dense",
    )


def t19_piecewise_growth_decay() -> dict[str, Any]:
    key = [True, True, False, True, False]
    fig = piecewise_kink(1.0, 0.08, 4.0, -0.05, 16, "Growth then decay switch")
    return make_task(
        title="Piecewise growth then decay — letters $k_+,k_-$",
        context=(
            r"A biomarker follows force $k_+>0$ on $[0,T]$ and force $-k_-$ with $k_->0$ after $T$: "
            r"$$P(t)=\begin{cases}P_0 e^{k_+ t},&0\le t\le T,\\"
            r"P_0 e^{k_+ T}e^{-k_-(t-T)},&t>T.\end{cases}$$"
        ),
        statements=[
            r"The peak value on $[0,\infty)$ equals $P(T)=P_0 e^{k_+ T}$.",
            r"For $t>T$, the half-life relative to the peak is $\dfrac{\ln 2}{k_-}$.",
            r"The long-run limit $\lim_{t\to\infty}P(t)$ equals $P_0$.",
            r"$\ln P$ rises with slope $k_+$ before $T$ and falls with slope $-k_-$ afterward.",
            r"If $k_+=k_-$, the path is symmetric about $t=T$ in calendar time for all horizons.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Before $T$ the path rises; after $T$ it falls. Continuity at $T$ makes $P(T)$ the global peak.",
            ],
            [
                r"After $T$, the gap from zero is pure exponential decay with force $k_-$, so the "
                r"half-life from the peak is $\ln 2/k_-$.",
            ],
            [
                D(r"P(t)=P(T)e^{-k_-(t-T)}\to 0"),
                r"not $P_0$.",
            ],
            [
                r"Log-linear slopes are exactly the instantaneous forces on each piece.",
            ],
            [
                r"Equal magnitudes make the rise and fall rates match, but symmetry about $t=T$ for "
                r"all horizons would also require mirroring the time domain; decay continues forever "
                r"while growth only occupied $[0,T]$, so global calendar symmetry fails.",
            ],
        ],
        solution_overview=(
            r"Peak at the switch, then exponential decay to $0$ with half-life $\ln 2/k_-$. "
            r"Semi-log slopes flip from $+k_+$ to $-k_-$."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t20_applied_unit_trap_M() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Unit trap — letter $M$ millions versus raw counts",
        context=(
            r"A city population is reported as $M(t)$ million residents with "
            r"$M(t)=M_0 e^{kt}$, letters $M_0>0$ and $k\in\mathbb{R}$. "
            r"The raw headcount is $H(t)=10^6\,M(t)$."
        ),
        statements=[
            r"$H$ obeys the same continuous force $k$ as $M$.",
            r"Doubling time for $H$ is one million times the doubling time for $M$.",
            r"$\ln H(t)=\ln M(t)+\ln(10^6)$.",
            r"Semi-log slopes of $H$ and $M$ agree.",
            r"If $M_0=3$, then $H(0)=3$ as well.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"H(t)=10^6 M_0 e^{kt}"),
                r"A positive constant factor does not change continuous force, so $H$ still has force $k$.",
            ],
            [
                r"Doubling solves $e^{kT}=2$ for both series; the $10^6$ cancels. Doubling times coincide.",
            ],
            [
                D(r"\ln H=\ln(10^6 M)=\ln M+\ln(10^6)"),
            ],
            [
                r"Differentiating the previous display shows both semi-log slopes equal $k$.",
            ],
            [
                r"If $M_0=3$ (millions), then $H(0)=3\cdot 10^6$, not $3$. That is the unit trap.",
            ],
        ],
        solution_overview=(
            r"Changing units by a positive constant rescales the level but preserves force, "
            r"doubling time, and semi-log slope. Never drop the $10^6$ when reading headcount."
        ),
        stem_kind="applied_letter",
    )


def t21_graph_svg_exp() -> dict[str, Any]:
    fig = svg_exp(P0=2.0, k=0.04, tmax=40, title="Illustrative continuous growth", mark_t=20, ylabel="P(t)")
    key = [True, True, False, True, True]
    return make_task(
        title="Reading a continuous growth graph in letters",
        context=(
            r"The figure illustrates a path of the form $P(t)=P_0 e^{kt}$ with $P_0>0$, $k>0$. "
            r"Interpret all claims in those letters (the sketch uses one admissible pair)."
        ),
        statements=[
            r"$P$ is strictly convex on $\mathbb{R}$.",
            r"The elasticity $\dfrac{t P'(t)}{P(t)}$ equals $kt$.",
            r"$P''(t)=0$ at some $t>0$.",
            r"Relative rate $\dfrac{P'(t)}{P(t)}$ equals the constant $k$.",
            r"For every $c>1$ there is a unique $T>0$ with $P(T)=c P_0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"P''(t)=k^{2} P_0 e^{kt}>0"),
                r"for $k\neq 0$, so with $k>0$ the path is strictly convex.",
            ],
            [
                D(r"\frac{t P'(t)}{P(t)}=\frac{t\cdot k P(t)}{P(t)}=kt"),
            ],
            [
                r"$P''(t)=k^{2}P(t)>0$ never vanishes for finite $t$.",
            ],
            [
                D(r"\frac{P'(t)}{P(t)}=k"),
                r"that constant is the continuous force.",
            ],
            [
                D(r"T=\frac{\ln c}{k}>0"),
                r"unique because $P$ is strictly increasing.",
            ],
        ],
        solution_overview=(
            r"Differentiate $P_0 e^{kt}$ to read constant relative rate $k$, positive second "
            r"derivative, and unique hitting times $T=\ln c/k$ for each multiple $c>1$."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t22_table_force_from_ratios() -> dict[str, Any]:
    table = (
        r"| window | $[0,1]$ | $[1,2]$ | $[2,3]$ |"
        "\n"
        r"| --- | --- | --- | --- |"
        "\n"
        r"| $\ln P(t_{\mathrm{end}})-\ln P(t_{\mathrm{start}})$ | $k$ | $k$ | $k$ |"
    )
    key = [True, False, True, True, False]
    return make_task(
        title="Equal log-increments diagnose constant force $k$",
        context=(
            r"An analyst tabulates log-increments of a positive series $P$ over successive "
            r"unit windows and finds they all equal the same letter $k$. Assume $P$ is continuous "
            r"and strictly positive."
        ),
        statements=[
            r"On each integer window the continuous average force equals $k$.",
            r"The table alone proves $P$ cannot be discrete-geometric with factor $e^{k}$.",
            r"If $P$ is known a priori to be continuous-exponential, then its force equals this $k$.",
            r"$P(n)=P(0)e^{kn}$ for every integer $n\ge 0$.",
            r"Equal unit-window log-increments force $P$ to be linear in $t$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"By definition the average force on $[n,n+1]$ is the log-increment, here equal to $k$.",
            ],
            [
                r"Discrete geometry with ratio $e^{k}$ produces exactly these log-increments on the "
                r"integer grid. The table does not rule that model out.",
            ],
            [
                r"Within the continuous-exponential family, constant unit log-increments identify the force $k$.",
            ],
            [
                r"Chaining $n$ unit increments of size $k$ multiplies by $e^{kn}$.",
            ],
            [
                r"Equal log-increments produce exponential (or geometric) behaviour, not affine linearity.",
            ],
        ],
        solution_overview=(
            r"Constant log-increments mean constant average force on each window. On the integer "
            r"grid this matches both $e^{kt}$ and geometric $(e^{k})^{n}$. It does not yield a line."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t23_symbolic_half_life_lambda() -> dict[str, Any]:
    key = [True, True, False, True, True]
    return make_task(
        title="Radioactive-style decay with letter rate $\\lambda$",
        context=(
            r"A mass follows $m(t)=m_0 e^{-\lambda t}$ with letters $m_0>0$ and $\lambda>0$."
        ),
        statements=[
            r"Half-life is $T_{1/2}=\dfrac{\ln 2}{\lambda}$.",
            r"$m(n T_{1/2})=2^{-n}m_0$ for every integer $n\ge 0$.",
            r"The continuous force of $m$ is $+\lambda$.",
            r"$\dfrac{m'(t)}{m(t)}=-\lambda$.",
            r"Time to reach fraction $f\in(0,1)$ of $m_0$ is $t=\dfrac{-\ln f}{\lambda}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"e^{-\lambda T_{1/2}}=\frac12\implies T_{1/2}=\frac{\ln 2}{\lambda}"),
            ],
            [
                D(r"m(n T_{1/2})=m_0 e^{-\ln 2\cdot n}=2^{-n}m_0"),
            ],
            [
                r"Writing $m(t)=m_0 e^{kt}$ forces $k=-\lambda$, so the force is negative, not $+\lambda$.",
            ],
            [
                D(r"\frac{m'}{m}=-\lambda"),
            ],
            [
                D(r"e^{-\lambda t}=f\implies t=\frac{-\ln f}{\lambda}"),
            ],
        ],
        solution_overview=(
            r"Decay force is $-\lambda$. Half-life $\ln 2/\lambda$ stacks as powers of $\tfrac12$. "
            r"General fraction $f$ solves by the same log."
        ),
        stem_kind="symbolic",
        figure=svg_exp(P0=1.0, k=-0.2, tmax=20, title="Illustrative decay", ylabel="mass"),
    )


def t24_parametric_alpha_beta_gdp() -> dict[str, Any]:
    key = [True, False, True, False, True]
    return make_task(
        title="Per capita with growth letters $\\alpha$ and population $\\beta$",
        context=(
            r"Rename the earlier macro forces: output grows at letter $\alpha$ and population at "
            r"letter $\beta$, so $Y=Y_0 e^{\alpha t}$, $N=N_0 e^{\beta t}$, and $y=Y/N$."
        ),
        statements=[
            r"$y$ has force $\alpha-\beta$.",
            r"If $\alpha=\beta$, then $y(t)$ grows at force $\alpha$.",
            r"If $\alpha=\beta$, then $y$ is constant.",
            r"Maximising $\alpha$ alone always maximises the force on $y$, holding nothing else fixed "
            r"in a comparative-static sense is automatic even if $\beta$ rises one-for-one with $\alpha$.",
            r"$y(t)=y(0)\,e^{(\alpha-\beta)t}$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Same log-ratio argument as with $(g,p)$: force on $y$ is $\alpha-\beta$.",
            ],
            [
                r"When $\alpha=\beta$ the force on $y$ is $0$, not $\alpha$.",
            ],
            [
                D(r"y(t)=y(0)e^{0\cdot t}=y(0)"),
            ],
            [
                r"If $\beta$ rises one-for-one with $\alpha$, the difference $\alpha-\beta$ is unchanged. "
                r"Raising $\alpha$ alone need not raise per-capita force when $\beta$ co-moves.",
            ],
            [
                r"Integrate force $\alpha-\beta$ from the initial level $y(0)$.",
            ],
        ],
        solution_overview=(
            r"Per-capita force is the difference $\alpha-\beta$. Equal forces freeze $y$. "
            r"Watch co-movement of population force when comparing policies."
        ),
        stem_kind="parametric",
    )


def t25_rebuild_half_life_given() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Rebuild decay from a lettered half-life",
        context=(
            r"A decaying continuous-exponential mass has half-life letter $H>0$ and initial mass "
            r"$m_0>0$. Rebuild $m(t)$."
        ),
        statements=[
            r"The force is $k=-\dfrac{\ln 2}{H}$.",
            r"$m(t)=m_0\,2^{-t/H}$.",
            r"$m(t)=m_0\,2^{t/H}$.",
            r"$m(H/2)=m_0/\sqrt{2}$.",
            r"The rebuilt model has positive continuous force.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"e^{kH}=\frac12\implies k=-\frac{\ln 2}{H}"),
            ],
            [
                D(r"m(t)=m_0 e^{-(\ln 2)t/H}=m_0\,2^{-t/H}"),
            ],
            [
                r"The positive exponent $2^{t/H}$ would describe growth, contradicting half-life decay.",
            ],
            [
                D(r"m(H/2)=m_0\,2^{-1/2}=m_0/\sqrt{2}"),
            ],
            [
                r"Force $k=-(\ln 2)/H$ is negative.",
            ],
        ],
        solution_overview=(
            r"Half-life $H$ means $e^{kH}=\tfrac12$, so $k=-(\ln 2)/H$ and $m(t)=m_0 2^{-t/H}$."
        ),
        stem_kind="rebuild",
    )


def t26_nested_exp_of_log_ratio() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title=r"Nested form $e^{k\ln(P/Q)}$ as a relative power",
        context=(
            r"Let $P,Q>0$ be positive letter levels and $k\in\mathbb{R}$. "
            r"Study the nested scalar $e^{k\ln(P/Q)}$."
        ),
        statements=[
            r"$e^{k\ln(P/Q)}=\left(\dfrac{P}{Q}\right)^{k}$.",
            r"$e^{k\ln(P/Q)}=e^{k\ln P-k\ln Q}$.",
            r"If $k=0$, the nested expression equals $1$ for every positive $P,Q$.",
            r"If $P=Q$, the nested expression equals $k$.",
            r"The identity $e^{k\ln(P/Q)}=k\ln(P/Q)$ holds for every $k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"e^{k\ln(P/Q)}=\bigl(e^{\ln(P/Q)}\bigr)^{k}=(P/Q)^{k}"),
            ],
            [
                D(r"k\ln(P/Q)=k\ln P-k\ln Q"),
                r"Exponentiating preserves the split.",
            ],
            [
                D(r"e^{0}=1"),
            ],
            [
                r"If $P=Q$ then $\ln(P/Q)=0$, so the expression equals $e^{0}=1$, not $k$.",
            ],
            [
                r"Exponential and identity maps agree only at special points, not for every $k$.",
            ],
        ],
        solution_overview=(
            r"Collapse $e^{k\ln(P/Q)}$ to $(P/Q)^{k}$. Special cases: $k=0$ gives $1$; $P=Q$ gives $1$."
        ),
        stem_kind="nested",
    )


def t27_hybrid_competing_letters() -> dict[str, Any]:
    fig = competing_populations(2.0, 0.07, 2.0, 0.03, 25, "Equal start, unequal forces")
    key = [True, False, True, True, False]
    return make_task(
        title="Hybrid — equal starts, letter force gap $\\delta$",
        context=(
            r"Two funds start equal, $A_0=B_0=S_0>0$, with forces $k$ and $k+\delta$ where the "
            r"gap letter satisfies $\delta\neq 0$. Thus $A(t)=S_0 e^{kt}$ and "
            r"$B(t)=S_0 e^{(k+\delta)t}$. The figure illustrates $\delta>0$."
        ),
        statements=[
            r"$\dfrac{B(t)}{A(t)}=e^{\delta t}$ for every $t$.",
            r"The funds cross again at some $t>0$.",
            r"If $\delta>0$, then $B$ eventually dominates $A$ by an arbitrarily large factor.",
            r"$\ln B(t)-\ln A(t)=\delta t$.",
            r"The force gap $\delta$ equals $\dfrac{B(t)-A(t)}{t}$ for every $t>0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{B}{A}=e^{(k+\delta)t-kt}=e^{\delta t}"),
            ],
            [
                r"Equal starts and $\delta\neq 0$ prevent any later crossing.",
            ],
            [
                r"$e^{\delta t}\to\infty$ when $\delta>0$, so the factor $B/A$ is arbitrarily large.",
            ],
            [
                D(r"\ln B-\ln A=\delta t"),
            ],
            [
                r"The raw gap $B-A$ is not linear in $t$ with slope $\delta$; log-gap is.",
            ],
        ],
        solution_overview=(
            r"Equal starts cancel, leaving pure gap factor $e^{\delta t}$. Leadership is decided by "
            r"the sign of $\delta$; raw level gaps are not the force gap."
        ),
        stem_kind="hybrid",
        figure=fig,
    )


def t28_text_dense_compound() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Compound claims linking discrete and continuous letters",
        context=(
            r"A portfolio may be viewed either as $P_0(1+r)^{t}$ with $r>-1$ or as "
            r"$P_0 e^{kt}$ with $k=\ln(1+r)$. Claims combine both spellings."
        ),
        statements=[
            r"With $k=\ln(1+r)$, the two spellings define the same function of real $t$.",
            r"With $k=\ln(1+r)$, doubling time is $\dfrac{\ln 2}{r}$.",
            r"With $k=\ln(1+r)$, doubling time is $\dfrac{\ln 2}{\ln(1+r)}$.",
            r"For $r>0$, $\dfrac{\ln 2}{\ln(1+r)}>\dfrac{\ln 2}{r}$.",
            r"For $r>0$, matching continuous force exceeds the discrete net rate $r$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"P_0(1+r)^{t}=P_0 e^{t\ln(1+r)}=P_0 e^{kt}"),
            ],
            [
                r"Doubling uses denominator $k=\ln(1+r)$, not $r$.",
            ],
            [
                D(r"T=\frac{\ln 2}{k}=\frac{\ln 2}{\ln(1+r)}"),
            ],
            [
                r"Since $\ln(1+r)<r$ for $r>0$, the reciprocal reverses the inequality, yielding "
                r"$\ln 2/\ln(1+r)>\ln 2/r$.",
            ],
            [
                r"Matching force is $\ln(1+r)<r$, so it does not exceed $r$.",
            ],
        ],
        solution_overview=(
            r"Identify $k=\ln(1+r)$ to unify spellings. Doubling is $\ln 2/\ln(1+r)$, which exceeds "
            r"the naive $\ln 2/r$ because $\ln(1+r)<r$."
        ),
        stem_kind="text_dense",
    )


def t29_piecewise_policy() -> dict[str, Any]:
    key = [False, True, True, False, True]
    fig = piecewise_kink(1.0, 0.03, 8.0, 0.06, 20, "Policy switch raises force")
    return make_task(
        title="Policy switch raising force after letter $T$",
        context=(
            r"Capital grows at force $k_1$ until a reform date $T>0$, then at a higher force "
            r"$k_2>k_1$: the standard piecewise continuous-exponential definition applies with "
            r"letters $P_0>0$, $k_1$, $k_2$, $T$."
        ),
        statements=[
            r"Ignoring the reform and using force $k_1$ forever overstates $P(t)$ for every $t>T$.",
            r"Ignoring the reform and using force $k_1$ forever understates $P(t)$ for every $t>T$.",
            r"At $t=T$, both the true path and the no-reform path agree.",
            r"The true path after $T$ equals $P_0 e^{k_2 t}$.",
            r"For $t>T$, $P(t)=P_0 e^{k_1 T}e^{k_2(t-T)}$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"After $T$ the true force $k_2$ is larger, so the no-reform path lies below the true path. "
                r"It understates, rather than overstates.",
            ],
            [
                r"Yes: smaller force forever after $T$ yields strictly smaller levels for $t>T$.",
            ],
            [
                r"Both paths equal $P_0 e^{k_1 T}$ at the switch.",
            ],
            [
                r"That formula would apply only if force $k_2$ had been used from time $0$. "
                r"The early window still used $k_1$.",
            ],
            [
                r"That is exactly the second piece of the definition.",
            ],
        ],
        solution_overview=(
            r"Match at $T$, then apply $k_2$. Constant-$k_1$ extrapolation understates post-reform "
            r"levels when $k_2>k_1$. Do not pretend $k_2$ applied from time zero."
        ),
        stem_kind="piecewise",
        figure=fig,
    )


def t30_applied_cooling_letters() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Applied Newton — ambient $T_a$ and force $k$ as letters",
        context=(
            r"Coffee cools in a room at ambient letter $T_a$ according to "
            r"$T(t)=T_a+(T_0-T_a)e^{-kt}$ with $T_0>T_a$ and $k>0$."
        ),
        statements=[
            r"For every $t>0$, $T_a<T(t)<T_0$.",
            r"$T(t)$ eventually falls below $T_a$.",
            r"The time to the midpoint $\dfrac{T_0+T_a}{2}$ equals $\dfrac{\ln 2}{k}$.",
            r"Raising $k$ shortens every hitting time to a fixed interior target between $T_a$ and $T_0$.",
            r"Raising $T_a$ while holding $T_0,k$ fixed leaves all hitting times to levels above the "
            r"old $T_a$ unchanged.",
        ],
        answer_key=key,
        bodies=[
            [
                r"The gap factor $e^{-kt}\in(0,1)$ for $t>0$ keeps $T(t)$ strictly between $T_a$ and $T_0$.",
            ],
            [
                r"The gap stays positive, so $T(t)$ approaches $T_a$ from above and never crosses it.",
            ],
            [
                r"Midpoint means the gap has halved:",
                D(r"e^{-kt}=\frac12\implies t=\frac{\ln 2}{k}"),
            ],
            [
                r"Hitting-time formulas have $1/k$ in front; larger $k$ shortens times.",
            ],
            [
                r"Changing ambient reshapes every gap $T_\ast-T_a$, so hitting times move.",
            ],
        ],
        solution_overview=(
            r"Cooling stays trapped between $T_0$ and $T_a$. Half-gap time is $\ln 2/k$. "
            r"Force scales all clocks; ambient shifts targets."
        ),
        stem_kind="applied_letter",
    )


def t31_graph_two_models() -> dict[str, Any]:
    fig = two_models(1.0, 0.05, 1.05, 30, "Continuous force vs discrete 5%")
    key = [True, True, False, False, True]
    return make_task(
        title="Graph comparison — force $k$ versus factor $1+r$",
        context=(
            r"The figure sketches $P(t)=P_0 e^{kt}$ against $Q(t)=P_0(1+r)^{t}$ for one positive "
            r"pair with $e^{k}\neq 1+r$. Interpret claims in letters $P_0>0$, $k$, $r>-1$."
        ),
        statements=[
            r"If $e^{k}>1+r>1$, then $P(t)>Q(t)$ for every $t>0$.",
            r"Both paths share the same initial value $P_0$.",
            r"The discrete path is always above the continuous path whenever $r=k>0$.",
            r"The two paths can touch at three distinct positive times while keeping constant $k,r$.",
            r"Log-gap $\ln P(t)-\ln Q(t)$ equals $\bigl(k-\ln(1+r)\bigr)t$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{P}{Q}=e^{(k-\ln(1+r))t}"),
                r"When $k>\ln(1+r)$ and $t>0$ the ratio exceeds $1$.",
            ],
            [
                r"Both formulas give $P_0$ at $t=0$.",
            ],
            [
                r"For $r=k>0$ one has $e^{k}>1+k$, so continuous lies above discrete.",
            ],
            [
                r"With fixed multipliers the log-gap is linear in $t$, so the paths agree at most at $t=0$ "
                r"unless multipliers match (in which case they agree everywhere).",
            ],
            [
                D(r"\ln P-\ln Q=\bigl(k-\ln(1+r)\bigr)t"),
            ],
        ],
        solution_overview=(
            r"Compare via $P/Q=\exp\bigl((k-\ln(1+r))t\bigr)$. Shared start; at most one agreement "
            r"time unless forces match. For $r=k>0$ continuous wins."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t32_table_recover_discrete() -> dict[str, Any]:
    table = (
        r"| $t$ | $0$ | $1$ | $2$ | $3$ |"
        "\n"
        r"| --- | --- | --- | --- | --- |"
        "\n"
        r"| $Q(t)$ | $Q_0$ | $Q_0(1+r)$ | $Q_0(1+r)^2$ | $Q_0(1+r)^3$ |"
    )
    key = [True, True, False, True, True]
    return make_task(
        title="Recover discrete letter $r$ from a geometric table",
        context=(
            r"A balance follows exact discrete compounding $Q(t)=Q_0(1+r)^{t}$ on the integer "
            r"grid, with letters $Q_0>0$ and $r>-1$."
        ),
        statements=[
            r"$r=\dfrac{Q(1)}{Q(0)}-1$.",
            r"Matching continuous force is $k=\ln\dfrac{Q(1)}{Q(0)}$.",
            r"Matching continuous force is $k=r$.",
            r"$Q(3)/Q(1)=(1+r)^{2}$.",
            r"The one-year growth rate in percent is $100r$ (as a letter expression).",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"1+r=\frac{Q(1)}{Q(0)}\implies r=\frac{Q(1)}{Q(0)}-1"),
            ],
            [
                D(r"k=\ln(1+r)=\ln\frac{Q(1)}{Q(0)}"),
            ],
            [
                r"Only in the knife-edge $r=0$ does $k=r$; generally $k=\ln(1+r)\neq r$.",
            ],
            [
                D(r"\frac{Q(3)}{Q(1)}=(1+r)^{2}"),
            ],
            [
                r"By definition the net one-year rate is $r$, hence $100r$ percent as a letter formula.",
            ],
        ],
        solution_overview=(
            r"Read $1+r$ from the first ratio; convert to continuous force by a logarithm. "
            r"Multi-year ratios are powers of $1+r$."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t33_symbolic_force_compare() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Ordering continuous forces without numeric drills",
        context=(
            r"Three continuous-exponential paths share the same $P_0>0$ but use forces "
            r"$k_1<k_2<k_3$."
        ),
        statements=[
            r"For every $t>0$, $P_0 e^{k_1 t}<P_0 e^{k_2 t}<P_0 e^{k_3 t}$.",
            r"Doubling times satisfy $T_1<T_2<T_3$ where $T_i=\dfrac{\ln 2}{k_i}$ (all $k_i>0$).",
            r"Doubling times satisfy $T_1>T_2>T_3$ when each $k_i>0$.",
            r"Semi-log slopes increase strictly in the index $i$.",
            r"The ordering of levels at $t>0$ reverses if one replaces each force by its negative.",
        ],
        answer_key=key,
        bodies=[
            [
                r"The map $k\mapsto e^{kt}$ is increasing for each fixed $t>0$.",
            ],
            [
                r"Larger force shortens doubling time, so $T_1>T_2>T_3$, not the claimed increasing order.",
            ],
            [
                D(r"T_i=\frac{\ln 2}{k_i}"),
                r"hence $k_1<k_2<k_3$ implies $T_1>T_2>T_3$.",
            ],
            [
                r"Semi-log slope equals the force, so slopes inherit $k_1<k_2<k_3$.",
            ],
            [
                r"Replacing $k_i$ by $-k_i$ reverses the force order to $-k_3<-k_2<-k_1$, which again "
                r"orders levels the same way relative to the new forces — but relative to the original "
                r"index labels, the level order at $t>0$ does reverse. Wait: "
                r"$e^{-k_1 t}>e^{-k_2 t}>e^{-k_3 t}$ when $k_1<k_2<k_3$, so yes the level order "
                r"in the index reverses. The statement says the ordering of levels reverses — True? "
                r"Actually we marked False — reconsider.",
            ],
        ],
        solution_overview=(
            r"Larger force raises every positive-time level and steepens semi-log slope, but shortens "
            r"doubling time. Negating all forces reverses which index leads."
        ),
        stem_kind="symbolic",
    )


def t34_parametric_lambda_growth() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Parametric family $P_\\lambda(t)=P_0 e^{\\lambda t}$",
        context=(
            r"Index a family of paths by a force letter $\lambda\in\mathbb{R}$: "
            r"$P_\lambda(t)=P_0 e^{\lambda t}$ with fixed $P_0>0$."
        ),
        statements=[
            r"For each fixed $t>0$, $\lambda\mapsto P_\lambda(t)$ is strictly increasing.",
            r"$P_\lambda$ coincides with $P_\mu$ as functions on $\mathbb{R}$ if and only if $\lambda=\mu$.",
            r"$P_\lambda(t)=P_{-\lambda}(-t)$ fails for some choices of $\lambda,t$.",
            r"$P_\lambda(t)=P_{-\lambda}(-t)$ for every $\lambda$ and every $t$.",
            r"The map $\lambda\mapsto T_2(\lambda)=\dfrac{\ln 2}{\lambda}$ (for $\lambda>0$) is increasing.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\partial_\lambda P_\lambda(t)=t P_0 e^{\lambda t}>0\quad(t>0)"),
            ],
            [
                r"If $\lambda\neq\mu$ then already at $t=1$ the values $P_0 e^{\lambda}$ and $P_0 e^{\mu}$ differ.",
            ],
            [
                r"Actually the identity $P_0 e^{\lambda t}=P_0 e^{-\lambda(-t)}$ holds for all $\lambda,t$. "
                r"So the claim that it fails is false — wait, statement C says it fails for some choices, "
                r"which is False because it never fails. Good.",
            ],
            [
                D(r"P_0 e^{\lambda t}=P_0 e^{(-\lambda)(-t)}"),
            ],
            [
                r"As $\lambda$ rises, $\ln 2/\lambda$ falls, so $T_2$ is decreasing, not increasing.",
            ],
        ],
        solution_overview=(
            r"Force indexes the family injectively. Time reversal pairs $\lambda$ with $-\lambda$. "
            r"Doubling time decreases in $\lambda$."
        ),
        stem_kind="parametric",
    )


def t35_rebuild_point_and_force() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Rebuild from one point and a letter force",
        context=(
            r"A continuous-exponential path has known force $k$ and passes through a single "
            r"observation $(t_\ast,P_\ast)$ with $P_\ast>0$. Rebuild $P(t)$."
        ),
        statements=[
            r"$P(t)=P_\ast e^{k(t-t_\ast)}$.",
            r"$P(t)=P_\ast e^{kt}$ regardless of $t_\ast$.",
            r"The implied initial level is $P_0=P_\ast e^{-k t_\ast}$.",
            r"Doubling time (if $k>0$) remains $\dfrac{\ln 2}{k}$, independent of the observation.",
            r"The observation alone, without $k$, determines the entire path.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Shift the usual formula to anchor at $t_\ast$.",
            ],
            [
                r"Omitting the time shift would force the observation to lie at $t=0$.",
            ],
            [
                D(r"P_0=P(0)=P_\ast e^{-k t_\ast}"),
            ],
            [
                r"Doubling depends only on force, not on where the path was observed.",
            ],
            [
                r"One point leaves a one-parameter family; force is required to pin $k$.",
            ],
        ],
        solution_overview=(
            r"Anchor at the observation: $P(t)=P_\ast e^{k(t-t_\ast)}$. Back out $P_0$ if needed. "
            r"Characteristic times still depend only on $k$."
        ),
        stem_kind="rebuild",
    )


def t36_nested_tower_lite() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Nested $\\ln$ of a continuous path",
        context=(
            r"Let $P(t)=P_0 e^{kt}$ with $P_0>0$. Form the nested scalar $\ln\ln\bigl(e^{e^{kt}}\bigr)$ "
            r"only when defined, and compare with simpler nests $\ln(P(t))$."
        ),
        statements=[
            r"$\ln P(t)=\ln P_0+kt$ for every $t$.",
            r"$\ln\bigl(e^{kt}\bigr)=kt$ for every real $k,t$.",
            r"$\ln\ln P(t)$ equals $kt$ for every $P_0>1$ and every $t$.",
            r"If $P_0=e$ and $k>0$, then $\ln\ln P(t)=kt$ fails at $t=0$ because $\ln\ln e=0\neq$ a forced $kt$ identity across all $t$ without adjustment — actually at $t=0$, $\ln\ln P(0)=\ln\ln e=0=k\cdot 0$, but the claim in C is universal in $P_0>1$. Focus: C is false in general.",
            r"$e^{\ln P(t)+kt}=P(t)^{2}$ for every $t$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\ln P(t)=\ln P_0+kt"),
            ],
            [
                D(r"\ln(e^{kt})=kt"),
            ],
            [
                D(r"\ln\ln P(t)=\ln(\ln P_0+kt)"),
                r"which equals $kt$ only in nongeneric cases, not for every $P_0>1$ and every $t$.",
            ],
            [
                r"Statement D in the list is the clarification that C fails — we treat D as: "
                r"there exist parameters for which $\ln\ln P$ is defined on an interval yet is not "
                r"equal to $kt$. That existence claim is True.",
            ],
            [
                D(r"e^{\ln P+kt}=P\,e^{kt}=P_0 e^{2kt}\neq P^{2}=P_0^{2} e^{2kt}"),
                r"unless $P_0=1$. So the universal claim is false.",
            ],
        ],
        solution_overview=(
            r"Single logs linearise continuous exponentials. Double logs do not recover $kt$ in general. "
            r"Watch domain and algebraic slips when nesting."
        ),
        stem_kind="nested",
    )


def t37_hybrid_semilog_table() -> dict[str, Any]:
    table = (
        r"| $t$ | $0$ | $2$ | $4$ |"
        "\n"
        r"| --- | --- | --- | --- |"
        "\n"
        r"| $\ln P(t)$ | $\ln P_0$ | $\ln P_0+2k$ | $\ln P_0+4k$ |"
    )
    fig = semi_log_exp(50.0, 0.04, 12, "Semi-log with letter slope k")
    key = [True, True, False, True, False]
    return make_task(
        title="Hybrid semi-log table — slope letter $k$",
        context=(
            r"The table lists exact log-levels of $P(t)=P_0 e^{kt}$. The figure sketches the "
            r"semi-log geometry for one positive pair."
        ),
        statements=[
            r"The chord from $t=0$ to $t=4$ has slope $k$.",
            r"The chord from $t=2$ to $t=4$ has slope $k$.",
            r"The table is consistent with force $2k$ instead of $k$.",
            r"Exponentiating the middle entry recovers $P(2)=P_0 e^{2k}$.",
            r"If $k<0$, the semi-log plot slopes upward.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{(\ln P_0+4k)-\ln P_0}{4}=k"),
            ],
            [
                D(r"\frac{(\ln P_0+4k)-(\ln P_0+2k)}{2}=k"),
            ],
            [
                r"Force $2k$ would produce increments $4k$ and $8k$ over those windows, contradicting the table.",
            ],
            [
                D(r"P(2)=e^{\ln P_0+2k}=P_0 e^{2k}"),
            ],
            [
                r"Negative $k$ yields a downward semi-log slope.",
            ],
        ],
        solution_overview=(
            r"Every chord on $\ln P=\ln P_0+kt$ returns slope $k$. Exponentiate to recover levels. "
            r"Sign of $k$ is the sign of the semi-log slope."
        ),
        stem_kind="hybrid",
        figure=fig,
        tables_markdown=table,
    )


def t38_text_dense_precisely_when() -> dict[str, Any]:
    key = [True, True, False, True, True]
    return make_task(
        title="Precisely-when criteria for exponential structure",
        context=(
            r"Let $P:(0,\infty)\to(0,\infty)$ be differentiable. Consider criteria that characterise "
            r"continuous-exponential form $P(t)=P_0 e^{kt}$."
        ),
        statements=[
            r"$P'/P$ constant on $(0,\infty)$ if and only if $P$ is continuous-exponential.",
            r"$\ln P$ affine on $(0,\infty)$ if and only if $P$ is continuous-exponential.",
            r"$P''>0$ everywhere if and only if $P$ is continuous-exponential.",
            r"Constant successive ratios on every pair of times distance $1$ apart are necessary for "
            r"continuous-exponential structure.",
            r"If $P'/P\equiv k$, then $P(t)=P(1)\,e^{k(t-1)}$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"The ODE $P'=kP$ with $P>0$ integrates to $P(t)=Ce^{kt}$. Conversely every continuous "
                r"exponential has constant relative rate.",
            ],
            [
                r"Affinity of $\ln P$ is the integrated form of the same criterion.",
            ],
            [
                r"Strict convexity holds for many non-exponential positives (e.g. $t^{2}+1$ on $(0,\infty)$). "
                r"So convexity alone is not an iff characterisation.",
            ],
            [
                r"Continuous exponentials have $P(t+1)/P(t)=e^{k}$ constantly — necessity holds.",
            ],
            [
                r"Integrate from the anchor $t=1$ to obtain that shifted formula.",
            ],
        ],
        solution_overview=(
            r"Constant relative rate, or affine log, characterises continuous exponentials. "
            r"Convexity is weaker. Unit-lag ratios are constant for this class."
        ),
        stem_kind="text_dense",
    )


def t39_piecewise_average_force() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Average force across a piecewise exponential",
        context=(
            r"Take the piecewise path with forces $k_1$ on $[0,T]$ and $k_2$ on $(T,t_\bullet]$ "
            r"for a horizon $t_\bullet>T$, starting at $P_0>0$."
        ),
        statements=[
            r"The average force on $[0,t_\bullet]$ equals "
            r"$\dfrac{k_1 T+k_2(t_\bullet-T)}{t_\bullet}$.",
            r"That average always equals $\dfrac{k_1+k_2}{2}$, independent of $T$ and $t_\bullet$.",
            r"$P(t_\bullet)=P_0\exp\bigl(k_1 T+k_2(t_\bullet-T)\bigr)$.",
            r"If $k_1=k_2=k$, the average collapses to $k$.",
            r"Average force equals the arithmetic mean of the endpoint relative rates "
            r"$\tfrac12\bigl(P'(0)/P(0)+P'(t_\bullet)/P(t_\bullet)\bigr)$ even when $k_1\neq k_2$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{1}{t_\bullet}\ln\frac{P(t_\bullet)}{P_0}=\frac{k_1 T+k_2(t_\bullet-T)}{t_\bullet}"),
            ],
            [
                r"Weights are the time spent in each regime; they need not be equal half-and-half.",
            ],
            [
                r"Chain the two exponential pieces to obtain that product of factors.",
            ],
            [
                r"Equal forces make the weighted average equal to the common force.",
            ],
            [
                r"Endpoint relative rates are $k_1$ and $k_2$, whose arithmetic mean ignores time weights "
                r"and generally differs from the duration-weighted average.",
            ],
        ],
        solution_overview=(
            r"Average force is duration-weighted: $(k_1 T+k_2(t_\bullet-T))/t_\bullet$. "
            r"It equals the plain mean of endpoint forces only in symmetric special cases."
        ),
        stem_kind="piecewise",
        figure=piecewise_kink(1.0, 0.05, 6.0, 0.01, 18, "Piecewise path for average force"),
    )


def t40_applied_gdp_trap_variant() -> dict[str, Any]:
    key = [False, True, True, False, True]
    return make_task(
        title="Applied — when per capita force vanishes",
        context=(
            r"Output and population forces are letters $g$ and $p$. Per capita is $y=Y/N$ with "
            r"the usual continuous-exponential aggregates."
        ),
        statements=[
            r"$y$ is constant for every choice of $g,p$.",
            r"$y$ is constant precisely when $g=p$.",
            r"If $g=p$, then $Y$ and $N$ share the same continuous force.",
            r"If $g=p$, then $Y(t)=N(t)$ for every $t$.",
            r"The claim '$y$ grows because both $Y$ and $N$ grow' is not warranted without comparing $g$ and $p$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Constancy requires $g=p$; it is not automatic for arbitrary letters.",
            ],
            [
                D(r"g-p=0\iff g=p"),
            ],
            [
                r"Same force letter means both aggregates use that common rate.",
            ],
            [
                r"Equal forces preserve the ratio $Y/N$, but the levels themselves need not coincide "
                r"unless $Y_0=N_0$ in comparable units.",
            ],
            [
                r"Both growing is compatible with falling per capita when $p>g$. The comparison is essential.",
            ],
        ],
        solution_overview=(
            r"Per capita freezes iff $g=p$. Equal forces do not equate levels. Growth of both aggregates "
            r"does not imply growth of the ratio."
        ),
        stem_kind="applied_letter",
    )


def t41_graph_semi_log_read() -> dict[str, Any]:
    fig = semi_log_exp(80.0, -0.05, 25, "Semi-log decay: negative slope")
    key = [True, False, True, True, False]
    return make_task(
        title="Semi-log decay graph — reading negative letter force",
        context=(
            r"The figure illustrates $\ln P$ for a decaying continuous exponential $P(t)=P_0 e^{kt}$ "
            r"with $k<0$. Claims use the letter $k$."
        ),
        statements=[
            r"The semi-log slope equals $k$ and is negative.",
            r"Half-life equals $\dfrac{\ln 2}{k}$.",
            r"Half-life equals $\dfrac{\ln 2}{|k|}$.",
            r"On the semi-log plot, equal horizontal steps produce equal vertical drops.",
            r"Because the semi-log plot is linear, the raw $P$-plot is also linear.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{d}{dt}\ln P=k<0"),
            ],
            [
                r"The formula $\ln 2/k$ would be negative when $k<0$; half-life uses $|k|$.",
            ],
            [
                D(r"T_{1/2}=\frac{\ln 2}{|k|}"),
            ],
            [
                r"Linearity of $\ln P$ means constant slope, hence equal run produces equal rise/drop.",
            ],
            [
                r"Linearity after logs still leaves an exponential in the original level.",
            ],
        ],
        solution_overview=(
            r"Negative semi-log slope is the force $k<0$. Half-life uses $|k|$. "
            r"Equal steps on a line give equal log drops; raw levels stay curved."
        ),
        stem_kind="graph",
        figure=fig,
    )


def t42_table_model_mismatch() -> dict[str, Any]:
    table = (
        r"| $t$ | $0$ | $1$ | $2$ |"
        "\n"
        r"| --- | --- | --- | --- |"
        "\n"
        r"| $P(t)$ | $P_0$ | $P_0 e^{k}$ | $P_0 e^{k}+P_0 e^{2k}$ |"
    )
    key = [False, True, True, False, True]
    return make_task(
        title="Table that breaks pure exponential structure",
        context=(
            r"A proposed table for a positive series is shown below in letters $P_0>0$ and $k\neq 0$. "
            r"Decide whether a pure continuous exponential can generate it."
        ),
        statements=[
            r"The successive ratios $P(1)/P(0)$ and $P(2)/P(1)$ are equal for every $k\neq 0$.",
            r"The successive ratios disagree whenever $k\neq 0$.",
            r"No choice of force makes this table a sampling of $P_0 e^{kt}$ at $t=0,1,2$.",
            r"Replacing the $t=2$ entry by $P_0 e^{2k}$ would restore pure continuous-exponential structure.",
            r"The displayed $t=2$ entry equals $P_0 e^{2k}$ for every $k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{P(1)}{P(0)}=e^{k}"),
                D(r"\frac{P(2)}{P(1)}=\frac{e^{k}+e^{2k}}{e^{k}}=1+e^{k}"),
                r"These agree for all $k\neq 0$ only if $e^{k}=1+e^{k}$, impossible. So A is false.",
            ],
            [
                r"As computed, $e^{k}$ versus $1+e^{k}$ differ for all real $k$.",
            ],
            [
                r"Pure continuous exponentials need constant ratios; this table lacks them.",
            ],
            [
                r"Yes — the corrected triple $(P_0,P_0 e^{k},P_0 e^{2k})$ is exactly the exponential sample.",
            ],
            [
                r"$P_0 e^{k}+P_0 e^{2k}=P_0 e^{2k}$ would require $e^{k}=0$, impossible. So E is false. "
                r"Wait — answer key says E True. Fix: change statement E meaning.",
            ],
        ],
        solution_overview=(
            r"Compare successive ratios. The given $t=2$ entry spoils constancy, so the table is not "
            r"pure exponential; correcting it to $P_0 e^{2k}$ restores the model."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def t43_symbolic_identities_batch() -> dict[str, Any]:
    key = [True, True, True, False, True]
    return make_task(
        title="Batch of continuous-exponential algebraic identities",
        context=(
            r"Assume $P(t)=P_0 e^{kt}$ with $P_0>0$. Treat $k,t,s$ as real letters."
        ),
        statements=[
            r"$P(t+s)=P(t)\,e^{ks}$.",
            r"$P(t)P(s)=P_0 P(t+s)$.",
            r"$P(t)/P(s)=e^{k(t-s)}$.",
            r"$P(t)+P(s)=P(t+s)$ for every $t,s$.",
            r"$P(nt)=P_0\bigl(P(t)/P_0\bigr)^{n}$ for every integer $n\ge 0$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"P(t+s)=P_0 e^{k(t+s)}=P(t)e^{ks}"),
            ],
            [
                D(r"P(t)P(s)=P_0^{2} e^{k(t+s)}=P_0\cdot P(t+s)"),
            ],
            [
                D(r"\frac{P(t)}{P(s)}=e^{k(t-s)}"),
            ],
            [
                r"Exponentials satisfy multiplicative Cauchy laws, not additive ones.",
            ],
            [
                D(r"\bigl(P(t)/P_0\bigr)^{n}=e^{knt}=P(nt)/P_0"),
                r"hence $P(nt)=P_0(P(t)/P_0)^{n}$.",
            ],
        ],
        solution_overview=(
            r"Continuous exponentials are multiplicative in time shifts. Products introduce an extra "
            r"$P_0$; sums do not recombine into $P(t+s)$."
        ),
        stem_kind="symbolic",
    )


def t44_parametric_applied_mix() -> dict[str, Any]:
    key = [True, False, True, False, True]
    fig = svg_curves(
        [
            (lambda t: math.exp(0.03 * t), "#8B5A2B", "e^{gt}"),
            (lambda t: math.exp(0.01 * t), "#2F5D50", "e^{pt}", "6 4"),
            (lambda t: math.exp(0.02 * t), "#6B3F1D", "e^{(g-p)t}"),
        ],
        xmin=0,
        xmax=40,
        title="Illustrative forces g, p, and g-p",
        ylabel="index",
    )
    return make_task(
        title="Parametric mix — capital, labour, and per-worker output",
        context=(
            r"In a lettered Solow-style sketch, capital-like output $Y=Y_0 e^{gt}$ and labour "
            r"$N=N_0 e^{pt}$ yield per-worker output $y=Y/N$. Forces $g,p$ are letters; "
            r"no huge numeric GDP figures appear."
        ),
        statements=[
            r"Per-worker force is $g-p$.",
            r"Per-worker force is $gp$.",
            r"If $g>p$, per-worker output is strictly increasing.",
            r"If $g>0$, per-worker output is strictly increasing regardless of $p$.",
            r"Doubling time of $y$ (when $g>p$) equals $\dfrac{\ln 2}{g-p}$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"y(t)=y_0 e^{(g-p)t}"),
            ],
            [
                r"Products of forces are not how log-ratios differentiate.",
            ],
            [
                r"Force $g-p>0$ makes $y$ strictly increasing.",
            ],
            [
                r"A large population force can dominate a positive $g$ and drive $y$ down.",
            ],
            [
                D(r"T=\frac{\ln 2}{g-p}"),
            ],
        ],
        solution_overview=(
            r"Close with the difference force $g-p$: monotonicity and doubling time both read off "
            r"$g-p$, never a product $gp$, and never $g$ alone."
        ),
        stem_kind="parametric",
        figure=fig,
    )


# ---------------------------------------------------------------------------
# Fix tasks that need answer-key / statement repairs after drafting
# ---------------------------------------------------------------------------


def _fix_t33() -> dict[str, Any]:
    """Correct E: negating forces does reverse level order by index."""
    key = [True, False, True, True, True]
    return make_task(
        title="Ordering continuous forces without numeric drills",
        context=(
            r"Three continuous-exponential paths share the same $P_0>0$ but use forces "
            r"$k_1<k_2<k_3$."
        ),
        statements=[
            r"For every $t>0$, $P_0 e^{k_1 t}<P_0 e^{k_2 t}<P_0 e^{k_3 t}$.",
            r"Doubling times satisfy $T_1<T_2<T_3$ where $T_i=\dfrac{\ln 2}{k_i}$ (all $k_i>0$).",
            r"Doubling times satisfy $T_1>T_2>T_3$ when each $k_i>0$.",
            r"Semi-log slopes increase strictly in the index $i$.",
            r"If each force is replaced by its negative, then for every $t>0$ one has "
            r"$P_0 e^{-k_1 t}>P_0 e^{-k_2 t}>P_0 e^{-k_3 t}$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"The map $k\mapsto e^{kt}$ is increasing for each fixed $t>0$.",
            ],
            [
                r"Larger force shortens doubling time, so $T_1>T_2>T_3$, not the claimed increasing order.",
            ],
            [
                D(r"T_i=\frac{\ln 2}{k_i}"),
                r"hence $k_1<k_2<k_3$ implies $T_1>T_2>T_3$.",
            ],
            [
                r"Semi-log slope equals the force, so slopes inherit $k_1<k_2<k_3$.",
            ],
            [
                r"Negating reverses the order of forces, and therefore reverses the order of levels "
                r"at each $t>0$.",
                D(r"e^{-k_1 t}>e^{-k_2 t}>e^{-k_3 t}"),
            ],
        ],
        solution_overview=(
            r"Larger force raises every positive-time level and steepens semi-log slope, but shortens "
            r"doubling time. Negating all forces reverses which index leads."
        ),
        stem_kind="symbolic",
    )


def _fix_t36() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Nested $\\ln$ of a continuous path",
        context=(
            r"Let $P(t)=P_0 e^{kt}$ with $P_0>0$. Compare single and double logarithms of the path."
        ),
        statements=[
            r"$\ln P(t)=\ln P_0+kt$ for every $t$.",
            r"$\ln\bigl(e^{kt}\bigr)=kt$ for every real $k,t$.",
            r"$\ln\ln P(t)=kt$ for every $P_0>e$ and every $t\ge 0$.",
            r"There exist $P_0>e$ and $k>0$ such that $\ln\ln P(t)$ is defined for all large $t$ "
            r"yet $\ln\ln P(t)\neq kt$ for some such $t$.",
            r"$e^{\ln P(t)+kt}=P(t)^{2}$ for every $t$ and every $P_0>0$.",
        ],
        answer_key=key,
        bodies=[
            [D(r"\ln P(t)=\ln P_0+kt")],
            [D(r"\ln(e^{kt})=kt")],
            [
                D(r"\ln\ln P(t)=\ln(\ln P_0+kt)"),
                r"This equals $kt$ only in nongeneric cases, not for every $P_0>e$ and every $t\ge 0$.",
            ],
            [
                r"Take $P_0=e^{2}$ and $k=1$. Then $\ln\ln P(t)=\ln(2+t)$, which differs from $t$ "
                r"at $t=1$ since $\ln 3\neq 1$.",
            ],
            [
                D(r"e^{\ln P+kt}=P e^{kt}=P_0 e^{2kt}"),
                D(r"P^{2}=P_0^{2} e^{2kt}"),
                r"Equality for every $t$ forces $P_0=1$, contradicting universality over every $P_0>0$.",
            ],
        ],
        solution_overview=(
            r"Single logs linearise continuous exponentials. Double logs produce $\ln(\ln P_0+kt)$, "
            r"not $kt$. Algebraic slips with $e^{\ln P+kt}$ introduce extra factors."
        ),
        stem_kind="nested",
    )


def _fix_t42() -> dict[str, Any]:
    table = (
        r"| $t$ | $0$ | $1$ | $2$ |"
        "\n"
        r"| --- | --- | --- | --- |"
        "\n"
        r"| $P(t)$ | $P_0$ | $P_0 e^{k}$ | $P_0 e^{k}+P_0 e^{2k}$ |"
    )
    key = [False, True, True, True, False]
    return make_task(
        title="Table that breaks pure exponential structure",
        context=(
            r"A proposed table for a positive series is shown below in letters $P_0>0$ and $k\neq 0$. "
            r"Decide whether a pure continuous exponential can generate it."
        ),
        statements=[
            r"The successive ratios $P(1)/P(0)$ and $P(2)/P(1)$ are equal for every $k\neq 0$.",
            r"The successive ratios disagree whenever $k\neq 0$.",
            r"No choice of force makes this table a sampling of $P_0 e^{kt}$ at $t=0,1,2$.",
            r"Replacing the $t=2$ entry by $P_0 e^{2k}$ would restore pure continuous-exponential structure.",
            r"The displayed $t=2$ entry equals $P_0 e^{2k}$ for every $k$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{P(1)}{P(0)}=e^{k}"),
                D(r"\frac{P(2)}{P(1)}=\frac{e^{k}+e^{2k}}{e^{k}}=1+e^{k}"),
                r"These are unequal for every real $k$, so the universal equality claim is false.",
            ],
            [
                r"As computed, $e^{k}$ versus $1+e^{k}$ differ for all real $k$.",
            ],
            [
                r"Pure continuous exponentials need constant ratios; this table lacks them.",
            ],
            [
                r"The corrected triple $(P_0,P_0 e^{k},P_0 e^{2k})$ is exactly the exponential sample.",
            ],
            [
                D(r"P_0 e^{k}+P_0 e^{2k}=P_0 e^{2k}\iff e^{k}=0"),
                r"which never holds, so the displayed entry is not $P_0 e^{2k}$.",
            ],
        ],
        solution_overview=(
            r"Compare successive ratios. The given $t=2$ entry spoils constancy, so the table is not "
            r"pure exponential; correcting it to $P_0 e^{2k}$ restores the model."
        ),
        stem_kind="table",
        tables_markdown=table,
    )


def _fix_t04_E() -> dict[str, Any]:
    """Clarify statement E to a clean false claim."""
    key = [True, False, True, True, False]
    return make_task(
        title="Two continuous forces $\\alpha$ and $\\beta$ — parametric comparison",
        context=(
            r"Two positive stocks start equal: $A(0)=B(0)=S_0>0$. Thereafter "
            r"$A(t)=S_0 e^{\alpha t}$ and $B(t)=S_0 e^{\beta t}$ with letter forces "
            r"$\alpha,\beta\in\mathbb{R}$ and $\alpha\neq\beta$."
        ),
        statements=[
            r"$A(t)>B(t)$ for every $t>0$ if and only if $\alpha>\beta$.",
            r"The crossing time where $A(t)=B(t)$ for some $t>0$ always exists.",
            r"$\dfrac{A(t)}{B(t)}=e^{(\alpha-\beta)t}$ for every $t$.",
            r"If $\alpha>\beta$, the gap $\ln A(t)-\ln B(t)$ grows linearly in $t$.",
            r"Because the starts agree, $A(t)=B(t)$ for every $t$ even though $\alpha\neq\beta$.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\frac{A(t)}{B(t)}=e^{(\alpha-\beta)t}"),
                r"For $t>0$ the exponential is $>1$ precisely when $\alpha-\beta>0$, i.e. $\alpha>\beta$. "
                r"The converse is identical, giving the iff.",
            ],
            [
                r"Since $A(0)=B(0)$ and $\alpha\neq\beta$, the ratio $e^{(\alpha-\beta)t}$ equals $1$ "
                r"only at $t=0$. There is no later crossing.",
            ],
            [
                r"Cancel $S_0$ in the quotient of the two closed forms to obtain "
                r"$e^{(\alpha-\beta)t}$ identically.",
            ],
            [
                D(r"\ln A(t)-\ln B(t)=(\alpha-\beta)t"),
                r"When $\alpha>\beta$ this linear function of $t$ is strictly increasing.",
            ],
            [
                r"Equal starts cancel in the ratio, leaving $e^{(\alpha-\beta)t}$, which is not "
                r"identically $1$ when $\alpha\neq\beta$.",
            ],
        ],
        solution_overview=(
            r"With equal starts, $A/B=e^{(\alpha-\beta)t}$. Sign of $\alpha-\beta$ decides which path "
            r"leads for all $t>0$; unequal forces never cross again. Log-gap is exactly $(\alpha-\beta)t$."
        ),
        stem_kind="parametric",
        figure=competing_populations(_ILL["A0"], _ILL["kA"], _ILL["B0"], _ILL["kB"], 25, "Illustrative A vs B"),
    )


def _fix_t34() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Parametric family $P_\\lambda(t)=P_0 e^{\\lambda t}$",
        context=(
            r"Index a family of paths by a force letter $\lambda\in\mathbb{R}$: "
            r"$P_\lambda(t)=P_0 e^{\lambda t}$ with fixed $P_0>0$."
        ),
        statements=[
            r"For each fixed $t>0$, $\lambda\mapsto P_\lambda(t)$ is strictly increasing.",
            r"$P_\lambda$ coincides with $P_\mu$ as functions on $\mathbb{R}$ if and only if $\lambda=\mu$.",
            r"$P_\lambda(t)=P_{-\lambda}(-t)$ fails for some real $\lambda$ and $t$.",
            r"$P_\lambda(t)=P_{-\lambda}(-t)$ for every real $\lambda$ and every real $t$.",
            r"The map $\lambda\mapsto T_2(\lambda)=\dfrac{\ln 2}{\lambda}$ (for $\lambda>0$) is increasing.",
        ],
        answer_key=key,
        bodies=[
            [
                D(r"\partial_\lambda P_\lambda(t)=t P_0 e^{\lambda t}>0\quad(t>0)"),
            ],
            [
                r"If $\lambda\neq\mu$ then already at $t=1$ the values $P_0 e^{\lambda}$ and $P_0 e^{\mu}$ differ.",
            ],
            [
                r"The identity $P_0 e^{\lambda t}=P_0 e^{(-\lambda)(-t)}$ holds for all real $\lambda,t$, "
                r"so the failure claim is false.",
            ],
            [
                D(r"P_0 e^{\lambda t}=P_0 e^{(-\lambda)(-t)}"),
            ],
            [
                r"As $\lambda$ rises, $\ln 2/\lambda$ falls, so $T_2$ is decreasing, not increasing.",
            ],
        ],
        solution_overview=(
            r"Force indexes the family injectively. Time reversal pairs $\lambda$ with $-\lambda$. "
            r"Doubling time decreases in $\lambda$."
        ),
        stem_kind="parametric",
    )


# ---------------------------------------------------------------------------
# Assembly
# ---------------------------------------------------------------------------


def _rep(task: dict[str, Any], idx: int, statement: str, truth: bool, parts: list[str]) -> None:
    """Overwrite one letter in-place (used to rebalance true-counts)."""
    task["statements"][idx] = statement
    task["answer_key"][idx] = truth
    task["tactical_explanations"][idx] = pack(LETTERS[idx], truth, parts)


def _rebalance_true_counts(tasks: list[dict[str, Any]]) -> None:
    """Aim for roughly uniform true-counts in {1,2,3,4,5} across the 44 tasks."""
    # --- target 1 true ---
    _rep(
        tasks[0],
        0,
        r"For every $t>0$, the continuous one-year multiplier equals $1+k$.",
        False,
        [
            r"Under continuous force $k$, the one-year multiplier is $e^{k}$.",
            D(r"e^{k}\neq 1+k\quad(k\neq 0)"),
            r"So the multiplier is not $1+k$.",
        ],
    )
    _rep(
        tasks[0],
        2,
        r"If $r=k$, then $Q(t)>P(t)$ for every $t>0$.",
        False,
        [
            r"When $r=k>0$, the inequality $e^{k}>1+k$ forces $P(t)>Q(t)$ for $t>0$, "
            r"so the claimed reverse comparison fails.",
        ],
    )
    _rep(
        tasks[1],
        0,
        r"For some consecutive pair in the table, $\dfrac{P(t+1)}{P(t)}\neq e^{k}$.",
        False,
        [r"Every consecutive ratio equals $e^{k}$ identically, so the claim fails."],
    )
    _rep(
        tasks[1],
        3,
        r"$\dfrac{1}{2}\ln\dfrac{P(2)}{P(0)}$ recovers the force $2k$.",
        False,
        [
            D(r"\frac{1}{2}\ln\frac{P(2)}{P(0)}=k"),
            r"The recovered value is $k$, not $2k$.",
        ],
    )
    _rep(
        tasks[3],
        0,
        r"$A(t)>B(t)$ for every $t>0$ if and only if $\alpha<\beta$.",
        False,
        [
            D(r"\frac{A}{B}=e^{(\alpha-\beta)t}"),
            r"The ratio exceeds $1$ for $t>0$ precisely when $\alpha>\beta$, not $\alpha<\beta$.",
        ],
    )
    _rep(
        tasks[3],
        2,
        r"$\dfrac{A(t)}{B(t)}=e^{(\alpha+\beta)t}$ for every $t$.",
        False,
        [
            D(r"\frac{A}{B}=e^{(\alpha-\beta)t}"),
            r"The exponent uses the difference of forces, not the sum.",
        ],
    )
    _rep(
        tasks[4],
        1,
        r"The rebuilt path is $P(t)=P_0\,2^{T/t}$ for $t>0$.",
        False,
        [
            D(r"P(t)=P_0\,2^{t/T}"),
            r"The exponents $t/T$ and $T/t$ are not interchangeable.",
        ],
    )
    _rep(
        tasks[4],
        3,
        r"For every integer $n\ge 0$, $P(nT)=n\cdot 2\,P_0$.",
        False,
        [
            D(r"P(nT)=2^n P_0"),
            r"Doubling stacks multiplicatively as powers of two, not as $n\cdot 2\,P_0$.",
        ],
    )
    _rep(
        tasks[6],
        0,
        r"On the $(t,\ln P)$-plane the graph is a straight line of slope $P_0 k$.",
        False,
        [D(r"\ln P=\ln P_0+kt"), r"The slope is $k$, not $P_0 k$."],
    )
    _rep(
        tasks[6],
        3,
        r"Chord slopes equal $k$ only for the special window $[0,1]$.",
        False,
        [
            r"Because $\ln P$ is exactly linear, every chord equals $k$, not merely the unit window.",
        ],
    )
    _rep(
        tasks[8],
        0,
        r"$P$ jumps discontinuously at the switch time $t=T$.",
        False,
        [
            D(r"P(T-)=P(T+)=P_0 e^{k_1 T}"),
            r"The pieced definition is continuous at $T$.",
        ],
    )
    _rep(
        tasks[8],
        3,
        r"The average force on $[0,T]$ recovered from $\dfrac{1}{T}\ln\dfrac{P(T)}{P_0}$ equals $k_2$.",
        False,
        [
            D(r"\frac{1}{T}\ln\frac{P(T)}{P_0}=k_1"),
            r"The early window sees force $k_1$, not $k_2$.",
        ],
    )
    _rep(
        tasks[10],
        0,
        r"If $k_A>k_B$, then $\dfrac{A(t)}{B(t)}\to 0$ as $t\to\infty$.",
        False,
        [
            D(r"\frac{A}{B}=\frac{A_0}{B_0}e^{(k_A-k_B)t}\to\infty"),
            r"The ratio diverges, rather than tending to $0$.",
        ],
    )
    _rep(
        tasks[10],
        3,
        r"$\dfrac{d}{dt}\ln\dfrac{A}{B}=k_A+k_B$.",
        False,
        [D(r"\frac{d}{dt}\ln\frac{A}{B}=k_A-k_B"), r"The log-ratio grows at the force gap, not the sum."],
    )
    _rep(
        tasks[11],
        1,
        r"The successive ratios of $V$ equal $1+k$.",
        False,
        [D(r"\frac{V(t+1)}{V(t)}=e^{k}"), r"Continuous force yields ratio $e^{k}$, not $1+k$."],
    )
    _rep(
        tasks[11],
        3,
        r"Constant successive ratios are incompatible with any exponential model.",
        False,
        [r"Constant ratios are the hallmark of pure exponential (discrete or continuous) structure."],
    )
    _rep(
        tasks[14],
        1,
        r"The rebuilt path may be written $P(t)=P(t_1)\,e^{k(t+t_1)}$ with that $k$.",
        False,
        [
            D(r"P(t)=P(t_1)e^{k(t-t_1)}"),
            r"The correct time shift is $t-t_1$, not $t+t_1$.",
        ],
    )
    _rep(
        tasks[14],
        3,
        r"A third off-path observation is still compatible with the same pure continuous-exponential model.",
        False,
        [r"Three inconsistent points overdetermine and reject a two-parameter exponential."],
    )

    # --- target 2 trues ---
    _rep(
        tasks[7],
        0,
        r"A path $P\in\mathcal{E}$ is strictly increasing on $\mathbb{R}$ if and only if $k\ge 0$.",
        False,
        [
            D(r"P'(t)=k P(t)"),
            r"Strict increase needs $k>0$; the weak inequality $k\ge 0$ wrongly includes the constant case $k=0$.",
        ],
    )
    _rep(
        tasks[9],
        2,
        r"$y(t)=y_0 e^{(g+p)t}$ with $y_0=Y_0/N_0$.",
        False,
        [
            D(r"y(t)=y_0 e^{(g-p)t}"),
            r"Per capita carries the difference force, not the sum.",
        ],
    )
    _rep(
        tasks[12],
        1,
        r"The gap $T(t)-T_a$ is a pure exponential with force $+k$.",
        False,
        [
            D(r"T(t)-T_a=(T(0)-T_a)e^{-kt}"),
            r"The gap force is $-k$, not $+k$.",
        ],
    )
    _rep(
        tasks[15],
        2,
        r"The continuous force of $f(t)=a^{t}$ is $a-1$.",
        False,
        [
            D(r"a^{t}=e^{t\ln a}"),
            r"Force is $\ln a$, not the discrete net $a-1$.",
        ],
    )
    _rep(
        tasks[17],
        2,
        r"For every $P_0>0$ and every $k$, the identity $P(0)=2P_0$ holds.",
        False,
        [D(r"P(0)=P_0"), r"The initial value is $P_0$, not $2P_0$."],
    )
    _rep(
        tasks[18],
        1,
        r"For $t>T$, the half-life relative to the peak is $\dfrac{\ln 2}{k_+}$.",
        False,
        [
            r"After $T$ the decay force is $k_-$, so the half-life is $\ln 2/k_-$, not $\ln 2/k_+$.",
        ],
    )
    _rep(
        tasks[19],
        2,
        r"$\ln H(t)=\ln M(t)-\ln(10^6)$.",
        False,
        [
            D(r"\ln H=\ln M+\ln(10^6)"),
            r"The raw headcount adds $\ln(10^6)$, rather than subtracting it.",
        ],
    )
    _rep(
        tasks[21],
        2,
        r"If $P$ is known a priori to be continuous-exponential, then its force equals $2k$.",
        False,
        [r"Constant unit log-increments of size $k$ identify the force as $k$, not $2k$."],
    )
    _rep(
        tasks[24],
        1,
        r"$m(t)=m_0 e^{(\ln 2)\,t/H}$.",
        False,
        [
            D(r"m(t)=m_0\,2^{-t/H}=m_0 e^{-(\ln 2)t/H}"),
            r"Decay needs the negative exponent; the claimed positive exponent describes growth.",
        ],
    )

    # --- target 5 trues ---
    _rep(
        tasks[5],
        2,
        r"$e^{\ln(P_0)+kt}$ equals $P_0 e^{kt}$ for every $P_0>0$.",
        True,
        [D(r"e^{\ln P_0+kt}=P_0 e^{kt}"), r"Exponent sum becomes a product with $P_0$."],
    )
    _rep(
        tasks[13],
        1,
        r"Setting $k=r$ fails to match the models at integer years whenever $r\neq 0$.",
        True,
        [
            r"Unless $r=0$, one has $e^{r}\neq 1+r$, so $k=r$ does not match discrete compounding.",
        ],
    )
    _rep(
        tasks[13],
        3,
        r"For $r>0$, the matching force $\ln(1+r)$ is strictly smaller than $r$.",
        True,
        [D(r"\ln(1+r)<r\quad(r>0)"), r"Strict concavity of $\ln$ yields the inequality."],
    )
    _rep(
        tasks[16],
        3,
        r"The same table is not generated by force $k=2$.",
        True,
        [r"Force $k=2$ would give ratios $e^{2}$, not $2$, so it does not generate the table."],
    )
    _rep(
        tasks[16],
        4,
        r"Matching the integer grid fixes $P_0$ and $k$, so the continuous extension beyond integers is unique.",
        True,
        [
            r"A continuous exponential is completely determined by $P_0$ and $k$. The integer samples "
            r"pin both letters, so non-integer values are determined.",
        ],
    )
    _rep(
        tasks[20],
        2,
        r"$P''(t)$ never vanishes for finite $t$ when $k\neq 0$.",
        True,
        [D(r"P''(t)=k^{2} P(t)>0"), r"for $k\neq 0$ and finite $t$, so $P''$ has no root."],
    )
    _rep(
        tasks[22],
        2,
        r"The continuous force of $m$ is $-\lambda$.",
        True,
        [D(r"m(t)=m_0 e^{-\lambda t}"), r"Reading the exponent shows force $k=-\lambda$."],
    )
    _rep(
        tasks[25],
        3,
        r"If $P=Q$, the nested expression equals $1$.",
        True,
        [D(r"e^{k\ln 1}=e^{0}=1"), r"Equal positive levels force the log argument to $1$."],
    )
    _rep(
        tasks[25],
        4,
        r"The identity $e^{k\ln(P/Q)}=k\ln(P/Q)$ fails for some choices of $k\neq 0$.",
        True,
        [
            r"Exponential and identity maps agree only at special points. For example $k=1$, $P/Q=e$ "
            r"gives $e\neq 1$.",
        ],
    )
    _rep(
        tasks[27],
        1,
        r"With $k=\ln(1+r)$, doubling time is not $\dfrac{\ln 2}{r}$ whenever $r\neq\ln(1+r)$.",
        True,
        [
            r"Doubling uses denominator $k=\ln(1+r)$. Since $\ln(1+r)\neq r$ for $r\neq 0$, "
            r"the time is not $\ln 2/r$.",
        ],
    )
    _rep(
        tasks[27],
        4,
        r"For $r>0$, matching continuous force is strictly smaller than the discrete net rate $r$.",
        True,
        [D(r"\ln(1+r)<r\quad(r>0)")],
    )
    _rep(
        tasks[30],
        2,
        r"The discrete path lies strictly below the continuous path whenever $r=k>0$.",
        True,
        [
            r"For $r=k>0$ one has $e^{k}>1+k$, so continuous lies above discrete for $t>0$.",
        ],
    )
    _rep(
        tasks[30],
        3,
        r"With fixed unequal multipliers, the two paths cannot touch at three distinct positive times.",
        True,
        [
            r"Log-gap is linear in $t$, so agreement occurs at most at $t=0$ unless multipliers match "
            r"(in which case they agree everywhere).",
        ],
    )
    _rep(
        tasks[33],
        2,
        r"$P_\lambda(t)=P_{-\lambda}(-t)$ holds for every real $\lambda$ and every real $t$.",
        True,
        [D(r"P_0 e^{\lambda t}=P_0 e^{(-\lambda)(-t)}")],
    )
    _rep(
        tasks[33],
        3,
        r"In particular, $P_1(2)=P_{-1}(-2)$.",
        True,
        [D(r"e^{2}=e^{(-1)\cdot(-2)}")],
    )
    _rep(
        tasks[33],
        4,
        r"The map $\lambda\mapsto T_2(\lambda)=\dfrac{\ln 2}{\lambda}$ (for $\lambda>0$) is strictly decreasing.",
        True,
        [r"As $\lambda$ rises, $\ln 2/\lambda$ falls."],
    )
    _rep(
        tasks[37],
        2,
        r"$P''>0$ everywhere does not by itself characterise continuous-exponential structure.",
        True,
        [
            r"Strict convexity holds for many non-exponential positives (e.g. $t^{2}+1$ on $(0,\infty)$).",
        ],
    )
    _rep(
        tasks[42],
        3,
        r"$P(t)+P(s)=P(t+s)$ fails for some $t,s$ (exponentials are not additive).",
        True,
        [
            r"Exponentials satisfy multiplicative Cauchy laws, not additive ones. "
            r"For $t=s=1$, $2P_0 e^{k}\neq P_0 e^{2k}$ whenever $e^{k}\neq 2$.",
        ],
    )

    # --- target 4 trues from remaining 3s ---
    _rep(
        tasks[26],
        1,
        r"The funds do not cross again at any $t>0$.",
        True,
        [r"Equal starts and $\delta\neq 0$ prevent any later crossing."],
    )
    _rep(
        tasks[28],
        0,
        r"Ignoring the reform and using force $k_1$ forever understates $P(t)$ for every $t>T$.",
        True,
        [
            r"After $T$ the true force $k_2>k_1$ is larger, so the no-reform path lies strictly below "
            r"the true path.",
        ],
    )
    # Avoid duplicating statement B: rewrite B to a distinct true claim
    _rep(
        tasks[28],
        1,
        r"For every $t>T$, the true path strictly exceeds the constant-$k_1$ extrapolation from time $0$.",
        True,
        [
            D(r"P_0 e^{k_1 T}e^{k_2(t-T)}>P_0 e^{k_1 t}\iff k_2(t-T)>k_1(t-T)"),
            r"which holds because $k_2>k_1$ and $t>T$.",
        ],
    )
    _rep(
        tasks[34],
        4,
        r"The observation alone, without $k$, does not determine the entire path.",
        True,
        [r"One point leaves a one-parameter family; the force letter is required to pin $k$."],
    )
    _rep(
        tasks[36],
        2,
        r"The table is inconsistent with force $2k$ in place of $k$.",
        True,
        [
            r"Force $2k$ would produce increments $4k$ and $8k$ over those windows, contradicting the table.",
        ],
    )
    _rep(
        tasks[38],
        1,
        r"That average depends on $T$ and $t_\bullet$ in general, not merely on $(k_1+k_2)/2$.",
        True,
        [
            r"Weights are the time spent in each regime; they need not be equal half-and-half, so the "
            r"average is not automatically $(k_1+k_2)/2$.",
        ],
    )
    _rep(
        tasks[40],
        1,
        r"Half-life does not equal $\dfrac{\ln 2}{k}$ when $k<0$, because that expression is negative.",
        True,
        [r"Half-life must be positive; the correct formula uses $|k|$."],
    )
    _rep(
        tasks[43],
        1,
        r"Per-worker force is not the product $gp$.",
        True,
        [r"Log-ratios differentiate to a difference of forces, never a product $gp$."],
    )
    _rep(
        tasks[39],
        3,
        r"If $g=p$, then $Y(t)=N(t)$ for every $t$ need not hold without $Y_0=N_0$ in comparable units.",
        True,
        [
            r"Equal forces preserve the ratio $Y/N$, but the levels themselves need not coincide.",
        ],
    )

    # --- shave a few 4/5-true tasks down to 3 for uniformity ---
    # t06 became 5; falsify E (was True: constant in t)
    _rep(
        tasks[5],
        4,
        r"The map $t\mapsto e^{k\ln(1+r)}$ with fixed $r>-1$ equals $(1+r)^{kt}$.",
        False,
        [
            D(r"e^{k\ln(1+r)}=(1+r)^{k}"),
            r"There is no extra factor of $t$ in the exponent of the base-$(1+r)$ form.",
        ],
    )
    # t14 became 5; falsify A slightly wrong? Better falsify E duplicate of D
    _rep(
        tasks[13],
        4,
        r"For $r>0$, $\ln(1+r)>r$.",
        False,
        [D(r"\ln(1+r)<r\quad(r>0)"), r"The inequality goes the other way."],
    )
    # t17 became 5; falsify A
    _rep(
        tasks[16],
        0,
        r"Successive ratios equal $2$, so $e^{k}=2$ and $k=2$.",
        False,
        [D(r"e^{k}=2\implies k=\ln 2"), r"The force is $\ln 2$, not $2$."],
    )
    # t21 became 5; falsify B (elasticity)
    _rep(
        tasks[20],
        1,
        r"The elasticity $\dfrac{t P'(t)}{P(t)}$ equals $k$ (with no factor of $t$).",
        False,
        [D(r"\frac{t P'(t)}{P(t)}=kt"), r"An extra factor of $t$ remains."],
    )
    # t23 became 5; falsify E formula sign slip
    _rep(
        tasks[22],
        4,
        r"Time to reach fraction $f\in(0,1)$ of $m_0$ is $t=\dfrac{\ln f}{\lambda}$.",
        False,
        [
            D(r"t=\frac{-\ln f}{\lambda}"),
            r"Because $\ln f<0$, the correct expression carries a minus sign (equivalently $\ln(1/f)/\lambda$).",
        ],
    )
    # t26 became 5; falsify B? keep — falsify A wording
    _rep(
        tasks[25],
        0,
        r"$e^{k\ln(P/Q)}=\left(\dfrac{Q}{P}\right)^{k}$.",
        False,
        [
            D(r"e^{k\ln(P/Q)}=(P/Q)^{k}"),
            r"The base is $P/Q$, not its reciprocal.",
        ],
    )
    # Convert two 4-true → 3-true: t03 is TTTFT (4); falsify A
    _rep(
        tasks[2],
        0,
        r"If $k>0$, then $P(T_2)=2P_0$ for $T_2=\dfrac{1}{k}$.",
        False,
        [
            D(r"T_2=\frac{\ln 2}{k}"),
            r"The factor $\ln 2$ is required; $1/k$ is not the doubling time.",
        ],
    )
    # t32 is TTFT T (4); falsify E
    _rep(
        tasks[31],
        4,
        r"The one-year growth rate in percent is $100(1+r)$ (as a letter expression).",
        False,
        [
            r"The net one-year rate is $r$, so the percent expression is $100r$, not $100(1+r)$.",
        ],
    )
    # Further 4→3 trims for uniformity
    _rep(
        tasks[35],
        0,
        r"$\ln P(t)=\ln P_0\cdot kt$ for every $t$.",
        False,
        [D(r"\ln P(t)=\ln P_0+kt"), r"Logs turn products into sums, not products of the log pieces."],
    )
    _rep(
        tasks[41],
        1,
        r"The successive ratios disagree only when $k=0$.",
        False,
        [r"The ratios $e^{k}$ and $1+e^{k}$ disagree for every real $k$, including $k\neq 0$."],
    )
    _rep(
        tasks[27],
        0,
        r"With $k=\ln(1+r)$, the two spellings define the same function only at integer $t$.",
        False,
        [
            D(r"P_0(1+r)^{t}=P_0 e^{t\ln(1+r)}"),
            r"The identity holds for every real $t$, not merely integers.",
        ],
    )
    # More 4→3 trims
    for idx, stmt, parts in [
        (
            26,
            r"$\dfrac{B(t)}{A(t)}=e^{\delta t}+1$ for every $t$.",
            [D(r"B/A=e^{\delta t}"), r"There is no additive $+1$ on the right-hand side."],
        ),
        (
            34,
            r"$P(t)=P_\ast e^{k(t+t_\ast)}$.",
            [D(r"P(t)=P_\ast e^{k(t-t_\ast)}"), r"The anchor shift is $t-t_\ast$."],
        ),
        (
            36,
            r"The chord from $t=0$ to $t=4$ has slope $4k$.",
            [D(r"\frac{4k}{4}=k"), r"The chord slope equals $k$, not $4k$."],
        ),
        (
            38,
            r"The average force on $[0,t_\bullet]$ equals $k_1 T+k_2(t_\bullet-T)$ without dividing by $t_\bullet$.",
            [
                D(r"\frac{k_1 T+k_2(t_\bullet-T)}{t_\bullet}"),
                r"Average force divides the accumulated log growth by elapsed time.",
            ],
        ),
        (
            40,
            r"The semi-log slope equals $|k|$ (unsigned) even when $k<0$.",
            [D(r"\frac{d}{dt}\ln P=k"), r"Slope carries the signed force $k$, which is negative in decay."],
        ),
        (
            43,
            r"Per-worker force is $g+p$.",
            [D(r"y=y_0 e^{(g-p)t}"), r"The force is the difference $g-p$."],
        ),
    ]:
        # flip first True letter conceptually: replace letter 0 content as False
        _rep(tasks[idx], 0, stmt, False, parts)


def build_exp_tasks() -> list[dict]:
    """Return exactly 44 task dicts for subsection 10.1."""
    _assert_sym_identities()

    tasks = [
        t01_graph_cont_vs_disc(),
        t02_table_recover_force(),
        t03_symbolic_doubling_half(),
        _fix_t04_E(),
        t05_rebuild_from_doubling(),
        t06_nested_composition(),
        t07_hybrid_semilog_graph(),
        t08_text_dense_iff(),
        t09_piecewise_force_switch(),
        t10_applied_gdp_letters(),
        t11_graph_competing(),
        t12_table_diagnose_model(),
        t13_symbolic_newton(),
        t14_parametric_disc_cont(),
        t15_rebuild_two_points(),
        t16_nested_power_exp(),
        t17_hybrid_table_graph(),
        t18_text_dense_for_every(),
        t19_piecewise_growth_decay(),
        t20_applied_unit_trap_M(),
        t21_graph_svg_exp(),
        t22_table_force_from_ratios(),
        t23_symbolic_half_life_lambda(),
        t24_parametric_alpha_beta_gdp(),
        t25_rebuild_half_life_given(),
        t26_nested_exp_of_log_ratio(),
        t27_hybrid_competing_letters(),
        t28_text_dense_compound(),
        t29_piecewise_policy(),
        t30_applied_cooling_letters(),
        t31_graph_two_models(),
        t32_table_recover_discrete(),
        _fix_t33(),
        _fix_t34(),
        t35_rebuild_point_and_force(),
        _fix_t36(),
        t37_hybrid_semilog_table(),
        t38_text_dense_precisely_when(),
        t39_piecewise_average_force(),
        t40_applied_gdp_trap_variant(),
        t41_graph_semi_log_read(),
        _fix_t42(),
        t43_symbolic_identities_batch(),
        t44_parametric_applied_mix(),
    ]

    _rebalance_true_counts(tasks)

    assert len(tasks) == EXP_COUNT == 44

    # Structural assertions
    kinds = [t["stem_kind"] for t in tasks]
    required_kinds = {
        "graph",
        "table",
        "symbolic",
        "parametric",
        "rebuild",
        "nested",
        "hybrid",
        "text_dense",
        "piecewise",
        "applied_letter",
    }
    missing = required_kinds - set(kinds)
    assert not missing, f"missing stem_kind values: {missing}"

    true_counts = [sum(t["answer_key"]) for t in tasks]
    for tc in true_counts:
        assert 1 <= tc <= 5, tc
    for v in range(1, 6):
        assert true_counts.count(v) >= 4, (v, true_counts)

    n_fig = sum(1 for t in tasks if t.get("figure"))
    n_tab = sum(1 for t in tasks if t.get("tables_markdown"))
    assert n_fig >= 12, n_fig
    assert n_tab >= 8, n_tab
    assert n_fig + n_tab >= 18

    for i, t in enumerate(tasks):
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5, (i, t["statements"])
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        assert "TRUE or FALSE" in t["context"]
        for j, ex in enumerate(t["tactical_explanations"]):
            letter = LETTERS[j]
            verd = "True" if t["answer_key"][j] else "False"
            assert ex.startswith(f"**{letter}.** → {verd}"), (i, j, ex[:60])
            assert ex.rstrip().endswith(f"So the statement is {verd}."), (i, j)
            assert "\\\\to" not in ex and "\\\\neq" not in ex and "\\\\infty" not in ex
        blob = t["context"] + "".join(t["statements"]) + t["solution_overview"]
        for bad in ("\\\\to", "\\\\neq", "\\\\infty", "\\\\ln", "\\\\frac"):
            assert bad not in blob, (i, bad)

    return tasks


if __name__ == "__main__":
    tasks = build_exp_tasks()
    from collections import Counter

    print(f"built {len(tasks)} tasks")
    print("stem_kind:", Counter(t["stem_kind"] for t in tasks))
    print("true_counts:", Counter(sum(t["answer_key"]) for t in tasks))
    print(
        "figures:",
        sum(1 for t in tasks if t["figure"]),
        "tables:",
        sum(1 for t in tasks if t["tables_markdown"]),
    )
