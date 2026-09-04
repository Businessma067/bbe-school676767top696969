#!/usr/bin/env python3
"""Harder Ch 11.5 pass: fracify divisions, harden graphs, append mixed graph+story tasks."""

from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ch11_svg import STROKES, svg_plane  # noqa: E402

OUT = ROOT / "src" / "data" / "math-ch11-exam.json"
C0, C1, C2 = STROKES


# ── fraction normalisation ───────────────────────────────────────────────────

_SKIP_SLASH = re.compile(
    r"(is/are|True/False|MR/MC|max\s*/\s*min|local max\s*/\s*local min|5/5|difficulty)",
    re.I,
)


def fracify_math(text: str) -> str:
    """Rewrite slash-style divisions inside $...$ / $$...$$ as \\dfrac."""
    if not text:
        return text
    if text.startswith("data:image"):
        return text

    def fix_chunk(chunk: str) -> str:
        s = chunk
        s = re.sub(
            r"\^\{(-?)(\d+)/(\d+)\}",
            lambda m: f"^{{{m.group(1)}\\frac{{{m.group(2)}}}{{{m.group(3)}}}}}",
            s,
        )
        s = re.sub(r"\^(-?\d+)/(\d+)", r"^{\frac{\1}{\2}}", s)
        s = re.sub(
            r"(?<![\\])([A-Za-z]+(?:_\{[^}]+\}|_[A-Za-z0-9]+)?(?:\([^)]+\))?)"
            r"/([A-Za-z0-9_\\]+(?:\([^)]+\))?)",
            r"\\dfrac{\1}{\2}",
            s,
        )

        def repl_bare(m: re.Match[str]) -> str:
            left, right = m.group(1), m.group(2)
            if left.endswith("frac") or left.endswith("dfrac") or left.endswith("tfrac"):
                return m.group(0)
            return f"\\dfrac{{{left}}}{{{right}}}"

        for _ in range(6):
            news = re.sub(
                r"(?<![A-Za-z\\])"
                r"((?:\\sqrt\{[^}]+\}|[A-Za-z0-9]+(?:_\{[^}]+\})?|"
                r"\\[A-Za-z]+(?:\{[^}]*\})?|\([^)]+\)|\d+(?:\.\d+)?))"
                r"\s*/\s*"
                r"((?:\\sqrt\{[^}]+\}|[A-Za-z0-9]+(?:_\{[^}]+\})?|"
                r"\\[A-Za-z]+(?:\{[^}]*\})?|\([^)]+\)|\d+(?:\.\d+)?))",
                repl_bare,
                s,
            )
            if news == s:
                break
            s = news
        return s

    # Protect display math with placeholders so inline $...$ cannot eat $$...$$.
    slots: list[str] = []

    def stash_display(m: re.Match[str]) -> str:
        slots.append("$$" + fix_chunk(m.group(1)) + "$$")
        return f"§§DISPLAY{len(slots) - 1}§§"

    out = re.sub(r"\$\$([\s\S]+?)\$\$", stash_display, text)
    out = re.sub(r"\$([^$]+)\$", lambda m: "$" + fix_chunk(m.group(1)) + "$", out)
    for i, block in enumerate(slots):
        out = out.replace(f"§§DISPLAY{i}§§", block)
    return out


def fracify_task(task: dict) -> dict:
    t = dict(task)
    for key in ("context", "solution_overview", "title"):
        if key in t and isinstance(t[key], str):
            t[key] = fracify_math(t[key])
    t["statements"] = [fracify_math(s) for s in t["statements"]]
    t["tactical_explanations"] = [fracify_math(s) for s in t["tactical_explanations"]]
    # figure untouched
    return t


def make_task(
    number: int,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    explanations: list[str],
    overview: str,
    figure: str | None = None,
) -> dict:
    assert len(statements) == len(answer_key) == len(explanations) == 5
    tactical = []
    for letter, answer, explanation in zip("ABCDE", answer_key, explanations):
        verd = "True" if answer else "False"
        tactical.append(
            f"**{letter}.** → {verd}\n\n"
            f"{explanation.strip()}\n\nSo the statement is {verd}."
        )
    task = {
        "id": f"math-11-{160 + number}",
        "case_id": f"MATH 11.{160 + number}",
        "title": title,
        "subsection": "11.5",
        "context": context.strip(),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": tactical,
        "difficulty_level": "5/5",
        "sort_order": 160 + number,
        "solution_overview": overview.strip(),
        "placeholder": False,
    }
    if figure:
        task["figure"] = figure
    return fracify_task(task)


# ── harder replacements for existing graph tasks ─────────────────────────────

def harder_graph_replacements() -> dict[str, dict]:
    """Map case_id → replacement task (same id/number)."""
    out: dict[str, dict] = {}

    # 22 / 182 — cubic P' with three zeros; scenario mixes expand / contract / tax
    # P'(Q) = -(Q-1)(Q-4)(Q-9) = -Q^3+14Q^2-49Q+36
    def pprime(q: float) -> float:
        return -(q - 1.0) * (q - 4.0) * (q - 9.0)

    fig182 = svg_plane(
        [{"fn": pprime, "label": "P′", "stroke": C0}],
        xmin=0,
        xmax=11,
        ymin=-40,
        ymax=40,
        title="Marginal profit P′ (workshop)",
        xlabel="Q",
        xticks=[0, 1, 2, 4, 6, 8, 9, 11],
        yticks=[-30, -15, 0, 15, 30],
        mark_points=[(1, 0, C0), (4, 0, C0), (9, 0, C0)],
    )
    out["MATH 11.182"] = make_task(
        22,
        "Bike workshop: cubic P′ and a per-unit levy",
        r"""A bike workshop's weekly profit $P(Q)$ is not printed as a formula. The figure shows only marginal profit $P'(Q)$, with zeros marked at $Q=1$, $Q=4$ and $Q=9$. Later the city proposes a per-unit levy that would shift the entire $P'$ graph down by a constant $6$ units (same shape, lower by $6$). Use the figure and that proposed shift. Which of the following statements is/are correct?""",
        [
            r"On the open interval $(4,9)$, the workshop should expand a little: $P'>0$ there.",
            r"Profit has a local maximum at $Q=4$ and a local minimum at $Q=9$.",
            r"Among the three marked zeros, the global maximiser of $P$ on $[0,11]$ must be $Q=9$ if $P(0)=0$ and $P$ only changes through $P'$.",
            r"After the levy shifts $P'$ down by $6$, the old zero at $Q=4$ is no longer a zero of the new marginal profit.",
            r"Reading the scale near $Q=6$, pre-levy $P'$ exceeds $15$, so even after the $6$-unit levy the workshop would still want to expand at $Q=6$.",
        ],
        [True, False, False, True, True],
        [
            r"""Between $4$ and $9$ the cubic sits above the axis (two factors negative after $4$ until $9$), so $P'>0$ and a little more output raises profit""",
            r"""Sign chart: $P'>0$ on $(0,1)$, $P'<0$ on $(1,4)$, $P'>0$ on $(4,9)$, $P'<0$ after $9$. So $Q=4$ is a local minimum ($-$ to $+$) and $Q=9$ a local maximum ($+$ to $-$), not the other way around""",
            r"""A local max at $Q=9$ need not beat the endpoint or the local max at $Q=1$ without comparing levels. The figure alone does not give $P(1)$ versus $P(9)$; claiming $Q=9$ must be the global max is unjustified""",
            r"""A vertical shift of $-6$ moves the graph down, so the old root at height $0$ becomes height $-6\neq 0$. New zeros solve the shifted equation and generally move""",
            r"""At $Q=6$, $P'(6)=-(6-1)(6-4)(6-9)=-(5)(2)(-3)=30>15$. After subtracting $6$ one still has $24>0$, so expansion remains profitable at $Q=6$""",
        ],
        r"""Cubic $P'$ needs a full sign chart: local min at $4$, local max at $9$. Global claims need level comparisons the figure does not supply. A downward levy shift moves zeros and can be checked pointwise by subtracting $6$ from a read height.""",
        figure=fig182,
    )

    # 23 / 183 — nonlinear MC + linear MR + AC reading trap
    # MR = 36 - 2Q, MC = 0.5(Q-2)^2 + 4, cross: 36-2Q = 0.5(Q-2)^2+4
    # 32-2Q = 0.5(Q-2)^2 → 64-4Q = (Q-2)^2 → Q^2-4Q+4 = 64-4Q → Q^2=60? messy
    # Use MR=40-2Q, MC=(Q-4)^2/4 + 6. At Q=8: MR=24, MC=4+6=10 — not equal
    # Want cross at Q=8: MR(8)=MC(8). MR=32-Q → MR(8)=24. MC= (Q-2)^2/8 + 8 → at 8: 36/8+8=4.5+8=12.5
    # Simpler: MR=30-Q, MC=0.25 Q^2 - 2Q + 12. Cross: 30-Q = 0.25Q^2-2Q+12 → 0=0.25Q^2-Q-18 → Q^2-4Q-72=0 → Q=6+√(36+72)=6+√108 no
    # MR=28-Q, MC=4+Q^2/16. At Q=8: MR=20, MC=4+4=8.
    # Solve 28-Q = 4 + Q^2/16 → 24-Q = Q^2/16 → Q^2 +16Q -384=0 → Q=-8±√(64+384)=-8±√448 no
    # Use known cross Q=6: MR=24-2Q (MR(6)=12), MC=2+(Q-3)^2/3 → MC(6)=2+3=5 — no
    # MR=20-Q, MC=2+0.5 Q — linear again.
    # Stick with curved MC: MR = 36-3Q, MC = (Q^2)/12 + 3. Cross: 36-3Q = Q^2/12 + 3 → 33-3Q = Q^2/12 → Q^2 +36Q -396=0 messy
    # Cross at Q=6: need MR(6)=MC(6)=k. Let MR=30-3Q so MR(6)=12. Let MC=Q^2/6 - Q + 9; MC(6)=6-6+9=9 — no
    # MR=24-2Q, MR(6)=12. MC = Q^2/12 + 6, MC(6)=3+6=9.
    # MR=24-2Q, MC=Q^2/8: MR(8)=8, MC(8)=8. Yes! Cross at Q=8.
    # MR(4)=16, MC(4)=2. MR(12)=0, MC(12)=18.
    def mr183(q: float) -> float:
        return 24.0 - 2.0 * q

    def mc183(q: float) -> float:
        return (q * q) / 8.0

    def ac183(q: float) -> float:
        # C = ∫ MC = Q^3/24, AC = Q^2/24 — only variable part; show AC for trap
        return (q * q) / 24.0

    fig183 = svg_plane(
        [
            {"fn": mr183, "label": "MR", "stroke": C0},
            {"fn": mc183, "label": "MC", "stroke": C1},
            {"fn": ac183, "label": "AC*", "stroke": C2},
        ],
        xmin=0,
        xmax=14,
        ymin=-2,
        ymax=28,
        title="MR, MC and variable AC*",
        xlabel="Q",
        xticks=[0, 2, 4, 6, 8, 10, 12, 14],
        yticks=[0, 5, 10, 15, 20, 25],
        mark_points=[(8, 8, "#444444")],
    )
    out["MATH 11.183"] = make_task(
        23,
        "Candle maker: curved MC against MR, with AC* trap",
        r"""A candle maker plots marginal revenue (brown), marginal cost (green), and the variable part of average cost $AC^{*}$ (purple) on one plane. The marked intersection of brown and green is at $Q=8$. No algebraic formulas are printed — reason from the figure and standard optimisation logic. Which of the following statements is/are correct?""",
        [
            r"At outputs a little below $Q=8$, brown lies above green, so expanding output raises profit.",
            r"Profit is maximised where purple meets brown, because that is where average cost equals marginal revenue.",
            r"At $Q=12$, green lies above brown, so a little less output would raise profit.",
            r"Because green is convex and rising through the brown line from below, the brown–green crossing is a local profit maximum.",
            r"The height of the brown–green crossing equals maximised total profit $P(8)$.",
        ],
        [True, False, True, True, False],
        [
            r"""Left of $Q=8$, MR sits above MC on the figure, so $MR>MC$ and expanding raises profit""",
            r"""The profit first-order condition is $MR=MC$ (brown meets green), not $MR=AC$. Purple meeting brown is a different, generally wrong, locus""",
            r"""At $Q=12$, MC is clearly above MR, so $MR<MC$ and cutting output a little raises profit""",
            r"""MC crosses MR from below while MR falls, so $MR-MC$ changes $+$ to $-$ — a local profit max""",
            r"""Crossing height is the common marginal value $MR=MC$, not the stock of total profit""",
        ],
        r"""With a curved MC, still expand while MR exceeds MC and stop at their crossing. Do not confuse that crossing with an $MR=AC$ meeting, and do not read the crossing height as total profit.""",
        figure=fig183,
    )

    # 24 / 184 — f, f', f'' consistency with economic labels
    # f' = -(x-1)(x-5), f'' = -2x+6 = -2(x-3)
    def f184(x: float) -> float:
        return -(x**3) / 3.0 + 3.0 * x * x - 5.0 * x

    def fp184(x: float) -> float:
        return -(x - 1.0) * (x - 5.0)

    def fpp184(x: float) -> float:
        return -2.0 * x + 6.0

    fig184 = svg_plane(
        [
            {"fn": f184, "label": "f", "stroke": C0},
            {"fn": fp184, "label": "f′", "stroke": C1},
            {"fn": fpp184, "label": "f″", "stroke": C2},
        ],
        xmin=0,
        xmax=6,
        ymin=-14,
        ymax=12,
        title="Throughput f, f′ and f″",
        xlabel="x",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-12, -8, -4, 0, 4, 8],
        mark_points=[(1, 0, C1), (5, 0, C1), (3, 0, C2)],
    )
    out["MATH 11.184"] = make_task(
        24,
        "Clinic throughput: f, f′ and f″ on one plane",
        r"""A clinic tracks a throughput index $f$ (brown), its derivative $f'$ (green), and its second derivative $f''$ (purple) on one shared figure. Throughput is measured against a staffing intensity $x$. Which of the following statements is/are correct?""",
        [
            r"Brown has a local minimum near $x=1$ and a local maximum near $x=5$.",
            r"Purple crosses zero near $x=3$, and that is an inflection of brown: concavity of $f$ changes there.",
            r"Where purple is negative (right of $x=3$), green is decreasing — matching $f''=(f')'$.",
            r"The highest point of green is a local maximum of brown.",
            r"At $x=3$, brown is climbing, green is positive, and purple is near zero — so staffing intensity $3$ maximises throughput itself.",
        ],
        [True, True, True, False, False],
        [
            r"""Green changes $-$ to $+$ at $x=1$ (local min of brown) and $+$ to $-$ at $x=5$ (local max of brown)""",
            r"""Purple's zero is where $f''=0$; the figure shows purple changing from $+$ to $-$ there, so brown changes from concave up to concave down — an inflection""",
            r"""Negative $f''$ means $f'$ is decreasing: green slopes down wherever purple is below the axis""",
            r"""The peak of green is where brown's slope is largest, not where brown peaks. Brown peaks where green crosses through zero near $x=5$""",
            r"""At $x=3$, green is still positive (throughput still rising) and purple near zero only marks an inflection of $f$, not a max of $f$. The throughput max is near $x=5$""",
        ],
        r"""Three-curve consistency: zeros of green mark turns of brown; zero of purple marks an inflection; the peak of green is steepest climb, not a peak of throughput.""",
        figure=fig184,
    )

    # 29 / 189 — MU and a budget scenario; MU of two goods? Keep one MU but harder claims + second curve for MU of money
    # MU_c = 20 - 0.5 c, zero at 40. Also plot price line? Or MU and MU-λp
    def mu189(c: float) -> float:
        return 18.0 - 0.4 * c  # zero at 45

    def net189(c: float) -> float:
        # MU - 6 (constant marginal cost of a cup in utils)
        return 18.0 - 0.4 * c - 6.0

    fig189 = svg_plane(
        [
            {"fn": mu189, "label": "MU", "stroke": C0},
            {"fn": net189, "label": "MU−6", "stroke": C1},
        ],
        xmin=0,
        xmax=50,
        ymin=-8,
        ymax=20,
        title="MU of cups and MU−6",
        xlabel="c",
        xticks=[0, 10, 20, 30, 40, 45, 50],
        yticks=[-5, 0, 5, 10, 15],
        mark_points=[(45, 0, C0), (30, 0, C1)],
    )
    out["MATH 11.189"] = make_task(
        29,
        "Coffee subscription: MU against a constant opportunity cost",
        r"""A coffee subscription models a subscriber's marginal utility of cups $c$ per month (brown). Each cup also has a constant opportunity cost of $6$ utility units, so the green curve is $\mathrm{MU}-6$. Interior cups are worthwhile while green is positive. Which of the following statements is/are correct?""",
        [
            r"Without the opportunity cost, utility of cups would keep rising until about $c=45$.",
            r"Accounting for the opportunity cost, the subscriber's best cup count among positive green values ends near $c=30$.",
            r"At $c=10$, brown is above $12$, so green is above $6$.",
            r"Because brown is linear and falling, utility $U(c)$ is strictly concave, so the subscriber is risk-averse in cup-equivalent wealth shocks on this range.",
            r"Green lying below brown by a constant means the optimal cup count is where brown itself is maximised.",
        ],
        [True, True, False, True, False],
        [
            r"""Brown crosses zero near $c=45$, so $\mathrm{MU}>0$ on $(0,45)$ and utility rises until then""",
            r"""Green crosses zero near $c=30$; that is where $\mathrm{MU}=6$, the usual $\mathrm{MU}=\lambda p$ style stop rule with constant opportunity cost $6$""",
            r"""At $c=10$, brown height is $18-4=14$, which is above $12$, but green is $14-6=8$, which is above $6$ not merely — wait claim says green above $6$: True. Want False.

Change: claim says green is above $6$ — actually True. Use: green is above $10$ — False (8<10).""",
            r"""Falling MU means $U''<0$: strict concavity and risk aversion for mean-preserving spreads""",
            r"""Optimal cups solve $\mathrm{MU}=6$ (green zero), not a maximum of brown. Brown is decreasing on the whole plotted range and has no interior maximum""",
        ],
        r"""todo""",
        figure=fig189,
    )
    # Fix claim C and explanations
    out["MATH 11.189"] = make_task(
        29,
        "Coffee subscription: MU against a constant opportunity cost",
        r"""A coffee subscription models a subscriber's marginal utility of cups $c$ per month (brown). Each cup also has a constant opportunity cost of $6$ utility units, so the green curve is $\mathrm{MU}-6$. Interior cups are worthwhile while green is positive. Which of the following statements is/are correct?""",
        [
            r"Without the opportunity cost, utility of cups would keep rising until about $c=45$.",
            r"Accounting for the opportunity cost, the subscriber's best cup count among the plotted options is near $c=30$, where green crosses zero.",
            r"At $c=10$, green lies above height $10$.",
            r"Because brown is linear and falling, utility $U(c)$ is strictly concave on this range.",
            r"Green lying below brown by a constant means the optimal cup count is where brown itself is maximised.",
        ],
        [True, True, False, True, False],
        [
            r"""Brown crosses zero near $c=45$, so $\mathrm{MU}>0$ on $(0,45)$ and utility rises until then""",
            r"""Green crosses zero near $c=30$; that is where $\mathrm{MU}=6$, the stop rule with constant opportunity cost $6$""",
            r"""At $c=10$, brown is $18-4=14$, so green is $8$, which is below $10$""",
            r"""Constant negative slope of MU means $U''<0$: strict concavity""",
            r"""Optimal cups solve $\mathrm{MU}=6$ (green's zero), not a maximum of brown. Brown falls throughout the window and has no interior peak""",
        ],
        r"""Read brown for when utility still rises, and green for when cups beat the opportunity cost. Concavity follows from falling MU. Do not confuse a zero of $\mathrm{MU}-6$ with a peak of MU.""",
        figure=fig189,
    )

    return out


# ── new hard tasks 191–205 (numbers 31–45) ───────────────────────────────────

def build_new_hard() -> list[dict]:
    tasks: list[dict] = []

    # 31. Graph P' + algebraic rival comparison
    def pprime_a(q: float) -> float:
        return 12.0 - 2.0 * q  # zero at 6

    def pprime_b(q: float) -> float:
        return 9.0 - q  # zero at 9

    fig31 = svg_plane(
        [
            {"fn": pprime_a, "label": "P′_A", "stroke": C0},
            {"fn": pprime_b, "label": "P′_B", "stroke": C1},
        ],
        xmin=0,
        xmax=12,
        ymin=-6,
        ymax=14,
        title="Two workshops' marginal profit",
        xlabel="Q",
        xticks=[0, 3, 6, 9, 12],
        yticks=[-4, 0, 4, 8, 12],
        mark_points=[(6, 0, C0), (9, 0, C1)],
    )
    tasks.append(
        make_task(
            31,
            "Two workshops: compare P′ graphs and levels",
            r"""Two neighbouring workshops $A$ (brown) and $B$ (green) plot marginal profit on one plane. Both start with $P_A(0)=P_B(0)=0$. Use the figure. Which of the following statements is/are correct?""",
            [
                r"Workshop $A$ has a local profit maximum at $Q=6$.",
                r"Workshop $B$ still has positive marginal profit at $Q=6$, so $B$ would expand past $A$'s stationary output.",
                r"Because both start at profit $0$ and brown lies above green on $(0,6)$, it follows that $P_A(6)>P_B(6)$.",
                r"On $(6,9)$, workshop $A$ should contract while workshop $B$ should expand.",
                r"The height where brown meets green (near $Q=3$) is the profit level $P_A(3)$.",
            ],
            [True, True, True, True, False],
            [
                r"""Brown crosses from $+$ to $-$ at $Q=6$, so $A$ has a local max there""",
                r"""Green is still positive at $Q=6$ (zero only at $9$), so $B$'s profit still rises there""",
                r"""Integrating $P_A'>P_B'$ from $0$ to $6$ with equal starts yields $P_A(6)>P_B(6)$""",
                r"""On $(6,9)$ brown is negative and green positive: $A$ contracts, $B$ expands""",
                r"""Where the marginal curves meet is a common $P'$ value, not a level of total profit""",
            ],
            r"""Sign-read each $P'$, then integrate a marginal inequality when starts match. Crossing heights of $P'$ are not profit levels.""",
            figure=fig31,
        )
    )

    # 32. Demand graph + cost formula mix
    def dem32(p: float) -> float:
        return 60.0 - 2.0 * p  # p from 0 to 30

    fig32 = svg_plane(
        [{"fn": dem32, "label": "D(p)", "stroke": C0}],
        xmin=0,
        xmax=32,
        ymin=-5,
        ymax=65,
        title="Demand D(p)",
        xlabel="p",
        xticks=[0, 5, 10, 15, 20, 25, 30],
        yticks=[0, 15, 30, 45, 60],
        mark_points=[(15, 30, C0), (10, 40, C0)],
    )
    tasks.append(
        make_task(
            32,
            "Print kiosk: demand figure plus quadratic cost",
            r"""A print kiosk faces the demand curve $D(p)$ in the figure (quantity against price $p$). Production cost for $Q$ posters is $C(Q)=4Q+\dfrac{1}{20}Q^{2}$. Revenue is $R=p\cdot D(p)$. Which of the following statements is/are correct?""",
            [
                r"Reading the figure, $D(15)=30$, so revenue at $p=15$ equals $450$.",
                r"Price elasticity of demand at $p=15$ equals $-1$.",
                r"At $p=15$, marginal cost of the corresponding output equals $0$, so profit is maximised there.",
                r"At $p=10$, demand is $40$ and $MC=C'(40)=8$, while a small price increase from $10$ still raises revenue.",
                r"Average cost $AC(Q)=\dfrac{C(Q)}{Q}$ is increasing for every $Q>0$.",
            ],
            [True, True, False, True, True],
            [
                r"""The marked point $(15,30)$ gives $R=15\cdot30=450$""",
                r"""Linear demand $D=60-2p$ has $\varepsilon=\dfrac{-2p}{60-2p}$; at $p=15$ this is $\dfrac{-30}{30}=-1$""",
                r"""At unit-elastic revenue max, $MR=0$, but $Q=30$ and $C'(30)=4+\dfrac{30}{10}=7\neq0$, so not a profit max""",
                r"""$D(10)=40$ from the figure; $C'(Q)=4+\dfrac{Q}{10}$, so $C'(40)=8$. Also $R'(p)=60-4p$, so $R'(10)=20>0$""",
                r"""$AC(Q)=4+\dfrac{Q}{20}$ has positive derivative $\dfrac{1}{20}$""",
            ],
            r"""Combine figure coordinates with the cost formula. Unit elasticity maximises revenue, not profit when MC is positive. Average cost rises with $Q$ here.""",
            figure=fig32,
        )
    )

    # 33. Tax wedge on MR/MC graph
    def mr33(q: float) -> float:
        return 30.0 - q

    def mc33(q: float) -> float:
        return 6.0 + 0.5 * q

    def mc_tax(q: float) -> float:
        return 10.0 + 0.5 * q  # +4 tax

    fig33 = svg_plane(
        [
            {"fn": mr33, "label": "MR", "stroke": C0},
            {"fn": mc33, "label": "MC", "stroke": C1},
            {"fn": mc_tax, "label": "MC+tax", "stroke": C2},
        ],
        xmin=0,
        xmax=28,
        ymin=0,
        ymax=32,
        title="MR, MC and MC after tax",
        xlabel="Q",
        xticks=[0, 4, 8, 12, 16, 20, 24],
        yticks=[0, 8, 16, 24, 32],
        mark_points=[(16, 14, "#444444"), (13.333, 16.667, C2)],
    )
    # Pre-tax: 30-Q=6+0.5Q → 24=1.5Q → Q=16, MR=14
    # Post: 30-Q=10+0.5Q → 20=1.5Q → Q=40/3≈13.33
    tasks.append(
        make_task(
            33,
            "Spice importer: per-unit tax shifts MC on the figure",
            r"""A spice importer's MR (brown) and MC (green) are shown, together with post-tax marginal cost (purple) after a specific tax of $4$ per unit. Pre-tax they meet near $Q=16$; post-tax purple meets brown nearer $Q=\dfrac{40}{3}$. Which of the following statements is/are correct?""",
            [
                r"Pre-tax, expanding a little from $Q=12$ raises profit because brown is above green there.",
                r"The tax raises the profit-maximising output.",
                r"Post-tax, at the new crossing the firm equates MR to MC plus the tax.",
                r"At $Q=20$, even pre-tax, green already exceeds brown, so that output is past the pre-tax optimum.",
                r"Because purple is a parallel upward shift of green by $4$, every post-tax optimum output must satisfy $MR=MC$ with the old green curve.",
            ],
            [True, False, True, True, False],
            [
                r"""At $Q=12$, MR is above MC on the figure""",
                r"""The purple–brown crossing is left of the green–brown crossing, so the tax lowers optimal output""",
                r"""Purple is MC plus tax; meeting brown means $MR=\mathrm{MC}+\mathrm{tax}$""",
                r"""At $Q=20>16$, MC is above MR pre-tax""",
                r"""Post-tax FOC uses purple, not the old green. Equivalently $MR=\mathrm{MC}+4$, not $MR=\mathrm{MC}$""",
            ],
            r"""A parallel MC tax shift moves the MR=MC crossing left. Read pre/post crossings separately; do not keep the untaxed FOC.""",
            figure=fig33,
        )
    )

    # 34. Elasticity algebra + enclosure mix (no graph)
    tasks.append(
        make_task(
            34,
            "Herb box: inverse demand inside a fencing budget",
            r"""A market gardener fences a three-sided herb bed with $2x+y=60$ metres of fence (river on one side) and sells the harvest under inverse demand $p=24-\dfrac{1}{2}A$ where $A=xy$ is planted area. Revenue is $R=pA$. Treat $A$ as the quantity index. Which of the following statements is/are correct?""",
            [
                r"Eliminating $y$ gives planted area $A(x)=60x-2x^{2}$ for $0<x<30$.",
                r"Area alone (ignoring price response) is maximised at $x=15$.",
                r"Revenue $R(A)=24A-\dfrac12 A^{2}$ is maximised at $A=24$.",
                r"The area-maximising fence layout automatically maximises revenue, because $A=15\cdot30=450$ exceeds $24$.",
                r"At the revenue-maximising area $A=24$, price elasticity of demand equals $-1$.",
            ],
            [True, True, True, False, True],
            [
                r"""$y=60-2x$, so $A=x(60-2x)=60x-2x^{2}$ on $(0,30)$""",
                r"""$A'=60-4x=0$ at $x=15$, and $A''<0$""",
                r"""$R'=24-A=0$ at $A=24$, $R''<0$""",
                r"""Max area is $A(15)=450$, but revenue peaks at $A=24\ll450$. Flooding the market with area destroys price; the two maximisers differ""",
                r"""$A=24-\dfrac12 p$ wait demand from $p=24-\frac12 A$ gives $A=48-2p$, $\varepsilon=\dfrac{-2p}{48-2p}$. At $A=24$, $p=12$, so $\varepsilon=\dfrac{-24}{24}=-1$""",
            ],
            r"""Fence geometry maximises area at $x=15$, but downward-sloping inverse demand maximises revenue at a much smaller $A$. Unit elasticity marks that revenue peak.""",
        )
    )

    # 35. Learning curve + graph of AC
    def ac35(q: float) -> float:
        return 80.0 / math.sqrt(max(q, 0.05))

    def mc35(q: float) -> float:
        return 40.0 / math.sqrt(max(q, 0.05))

    fig35 = svg_plane(
        [
            {"fn": ac35, "label": "AC", "stroke": C0},
            {"fn": mc35, "label": "MC", "stroke": C1},
        ],
        xmin=1,
        xmax=36,
        ymin=0,
        ymax=50,
        title="Learning: AC and MC",
        xlabel="Q",
        xticks=[1, 4, 9, 16, 25, 36],
        yticks=[0, 10, 20, 30, 40],
        mark_points=[(16, 20, C0), (16, 10, C1)],
    )
    tasks.append(
        make_task(
            35,
            "App studio: learning curve AC/MC figure plus formula check",
            r"""An app studio's cost is $C(Q)=80\sqrt{Q}$ for $Q>0$. The figure shows $AC$ (brown) and $MC$ (green). Which of the following statements is/are correct?""",
            [
                r"At $Q=16$, the figure's brown height is $20$ and green height is $10$, matching $AC=\dfrac{80}{\sqrt{Q}}$ and $MC=\dfrac{40}{\sqrt{Q}}$.",
                r"$MC=\dfrac12 AC$ at every $Q>0$ shown.",
                r"Because both curves fall, total cost $C(Q)$ is decreasing.",
                r"Doubling cumulative output from $9$ to $18$ multiplies total cost by $\sqrt{2}$.",
                r"A small increase in $Q$ near $Q=25$ lowers average cost.",
            ],
            [True, True, False, True, True],
            [
                r"""$\sqrt{16}=4$, so $AC=20$ and $MC=10$, matching the marked heights""",
                r"""Identically $MC=\dfrac12 AC$ for this square-root technology""",
                r"""Falling $AC$ and $MC$ do not make $C$ fall: $C'=MC>0$, so total cost still rises""",
                r"""$C(18)/C(9)=\sqrt{18}/\sqrt{9}=\sqrt{2}$""",
                r"""$AC'=-\dfrac{40}{Q^{3/2}}<0$, so AC is still falling at $Q=25$""",
            ],
            r"""Square-root learning: read $AC$ and $MC$ off the figure, keep $MC=\frac12 AC$, and remember falling averages can coexist with rising total cost.""",
            figure=fig35,
        )
    )

    # 36. Newton + economic interpretation mix
    tasks.append(
        make_task(
            36,
            "Pop-up gallery: Newton quotient, tax, and elasticity stub",
            r"""A pop-up gallery's profit (hundreds of euros) is $P(x)=x^{2}-8x+25$ before a flat licence fee. Staffed hours are $x>0$. After the fee, profit is $P(x)-6$. Separately, ticket demand at price $p$ is $D(p)=40-p$. Which of the following statements is/are correct?""",
            [
                r"The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ simplifies to $2a+h-8$.",
                r"The licence fee changes $P'(x)$ at every $x$.",
                r"$x=4$ is a local minimum of gallery profit, fee or no fee.",
                r"Ticket revenue $R(p)=p(40-p)$ is maximised at $p=20$, where demand elasticity equals $-1$.",
                r"At $x=5$, pre-fee marginal profit equals $2$, so staffing one more hour raises profit by about $2$ hundred euros.",
            ],
            [True, False, True, True, True],
            [
                r"""Expand and cancel: the difference quotient is $2a+h-8$""",
                r"""A constant fee vanishes upon differentiation: $P'-0=P'$""",
                r"""$P'=2x-8$ changes $-$ to $+$ at $x=4$, and the fee does not alter that""",
                r"""$R'=40-2p=0$ at $p=20$; $\varepsilon=\dfrac{-p}{40-p}=-1$ there""",
                r"""$P'(5)=2$, the usual marginal interpretation of the derivative""",
            ],
            r"""Constants shift levels not slopes. Newton recovers $P'$, and the separate ticket problem peaks at unit elasticity.""",
        )
    )

    # 37. f' and f'' graph with cost story
    def mc37(q: float) -> float:
        return 0.5 * (q - 4.0) ** 2 + 5.0  # min at q=4, height 5

    def mcprime37(q: float) -> float:
        return q - 4.0

    fig37 = svg_plane(
        [
            {"fn": mc37, "label": "MC", "stroke": C0},
            {"fn": mcprime37, "label": "MC′", "stroke": C1},
        ],
        xmin=0,
        xmax=10,
        ymin=-6,
        ymax=20,
        title="MC and its derivative MC′",
        xlabel="Q",
        xticks=[0, 2, 4, 6, 8, 10],
        yticks=[-4, 0, 4, 8, 12, 16],
        mark_points=[(4, 5, C0), (4, 0, C1)],
    )
    tasks.append(
        make_task(
            37,
            "Foundry: MC and MC′ figure for inflection of total cost",
            r"""A foundry plots marginal cost (brown) and the derivative of marginal cost (green). Total cost is $C$, so brown is $C'$ and green is $C''$. Which of the following statements is/are correct?""",
            [
                r"Total cost has an inflection near $Q=4$, where green crosses zero and brown has its minimum.",
                r"On $(0,4)$, green is negative, so marginal cost is decreasing and total cost is concave down.",
                r"Average cost is minimised exactly where brown is minimised.",
                r"At $Q=8$, green is positive and about height $4$, matching a rising MC.",
                r"Because brown stays positive on the window, total cost is increasing throughout.",
            ],
            [True, True, False, True, True],
            [
                r"""$C''=0$ with sign change is an inflection of $C$; equivalently MC has a stationary point there""",
                r"""$C''<0$ means $C'$ falls and $C$ is concave down""",
                r"""$AC$ is minimised where $AC'=0$, equivalently $MC=AC$, not where $MC$ alone is minimised""",
                r"""Green at $Q=8$ reads near $4$, and brown is climbing""",
                r"""Positive MC means $C'>0$, so $C$ rises""",
            ],
            r"""Green is the concavity meter for $C$ and the slope of MC. Do not confuse a minimum of MC with a minimum of AC.""",
            figure=fig37,
        )
    )

    # 38. Budget + graph of U'(x) after reduction
    def uprime38(x: float) -> float:
        return 10.0 - x  # from U=10x - x^2/2

    fig38 = svg_plane(
        [{"fn": uprime38, "label": "U′(x)", "stroke": C0}],
        xmin=0,
        xmax=12,
        ymin=-4,
        ymax=12,
        title="Marginal output after budget reduction",
        xlabel="x",
        xticks=[0, 2, 4, 6, 8, 10, 12],
        yticks=[-2, 0, 2, 4, 6, 8, 10],
        mark_points=[(10, 0, C0)],
    )
    tasks.append(
        make_task(
            38,
            "Design duo: budget reduction then read U′ from the figure",
            r"""A design duo has budget $2x+4y=40$ and output $U=xy$. After eliminating $y$ one obtains a single-variable $U(x)$ on $(0,20)$. The figure shows $U'(x)$ for that reduced problem. Which of the following statements is/are correct?""",
            [
                r"The reduced optimum is at $x=10$, where the figure's $U'$ crosses zero from above.",
                r"At that optimum, $y=5$.",
                r"On $(0,10)$, $U'>0$, so shifting a little budget from typesetting toward illustration raises output.",
                r"The figure shows $U'(4)=6$, matching $U(x)=10x-\dfrac12 x^{2}$.",
                r"Spending everything on $x$ ($y=0$) lands at the right endpoint where $U'$ is most negative, hence maximises $U$.",
            ],
            [True, True, True, True, False],
            [
                r"""Zero of $U'$ from $+$ to $-$ at $x=10$ is the maximum of reduced $U$""",
                r"""From $y=10-\dfrac12 x$, at $x=10$ one has $y=5$""",
                r"""Positive $U'$ means increasing $x$ (and cutting $y$ along the budget) raises $U$""",
                r"""$U'=10-x$, so $U'(4)=6$, as on the figure""",
                r"""The corner $y=0$ gives $U=0$, the worst product value, not a max""",
            ],
            r"""Budget reduction produces a one-variable $U$ whose derivative is plotted. Read the zero for the mix; corners kill $xy$.""",
            figure=fig38,
        )
    )

    # 39. EOQ + spoilage mix
    tasks.append(
        make_task(
            39,
            "Warehouse: EOQ with a spoilage penalty overlay",
            r"""Annual ordering-plus-holding cost is $TC(Q)=\dfrac{20000}{Q}+2Q$. Separately, a spoilage index along a delivery hour $t\in[0,4]$ is $S(t)=t^{3}-6t^{2}+9t$. Which of the following statements is/are correct?""",
            [
                r"The EOQ that minimises $TC$ is $Q=100$.",
                r"$TC''(Q)>0$ for all $Q>0$, so that critical point is a minimum.",
                r"$S'(t)=3(t-1)(t-3)$, so spoilage has a local max at $t=1$ and a local min at $t=3$.",
                r"On $[0,4]$, the global maximum of $S$ is uniquely attained at $t=1$.",
                r"At the EOQ, annual holding cost $\dfrac{hQ}{2}$ with $h=4$ equals annual ordering cost $\dfrac{KD}{Q}$.",
            ],
            [True, True, True, False, True],
            [
                r"""$TC'=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q=100$""",
                r"""$TC''=\dfrac{40000}{Q^{3}}>0$""",
                r"""Factoring $S'$ yields those critical points with the usual sign chart""",
                r"""$S(1)=S(4)=4$, so the global max on the closed interval is not unique to $t=1$""",
                r"""EOQ equates the two cost pieces: each equals $200$ when $Q=100$""",
            ],
            r"""Keep the inventory FOC and the spoilage sign chart separate. Endpoint ties can deny uniqueness of a closed-interval max.""",
        )
    )

    # 40. Three-curve P, P', P'' story with graph of P' and P''
    def pp40(q: float) -> float:
        return -(q - 2.0) * (q - 8.0)  # = -q^2+10q-16

    def ppp40(q: float) -> float:
        return -2.0 * q + 10.0

    fig40 = svg_plane(
        [
            {"fn": pp40, "label": "P′", "stroke": C0},
            {"fn": ppp40, "label": "P″", "stroke": C1},
        ],
        xmin=0,
        xmax=10,
        ymin=-20,
        ymax=16,
        title="Profit: P′ and P″",
        xlabel="Q",
        xticks=[0, 2, 4, 5, 6, 8, 10],
        yticks=[-15, -10, -5, 0, 5, 10],
        mark_points=[(2, 0, C0), (8, 0, C0), (5, 0, C1)],
    )
    tasks.append(
        make_task(
            40,
            "Brewery: read P′ and P″, infer P without drawing P",
            r"""A brewery shows marginal profit $P'$ (brown) and $P''$ (green) only — the level $P$ is omitted. Which of the following statements is/are correct?""",
            [
                r"Profit has a local minimum at $Q=2$ and a local maximum at $Q=8$.",
                r"Profit is concave down on $(5,10)$ because green is negative there.",
                r"The steepest climb of profit occurs near $Q=5$, where brown peaks and green crosses zero.",
                r"$Q=5$ maximises profit because that is where $P''=0$.",
                r"On $(2,8)$, brown is positive, so profit is increasing despite green changing sign at $5$.",
            ],
            [True, True, True, False, True],
            [
                r"""Brown's $-$ to $+$ at $2$ and $+$ to $-$ at $8$ give min then max of $P$""",
                r"""Negative $P''$ is concave-down profit""",
                r"""Peak of $P'$ is max slope of $P$; it lines up with $P''=0$""",
                r"""$P''=0$ is an inflection of $P$, not a max. The max is where $P'=0$ with $+$ to $-$ at $Q=8$""",
                r"""The sign of $P'$ alone governs monotonicity; an inflection inside an increasing stretch is allowed""",
            ],
            r"""Infer turns of $P$ from zeros of $P'$, concavity from $P''$, and never treat an inflection as a profit maximum.""",
            figure=fig40,
        )
    )

    # 41. Chain rule advertising + MR/MC style stop
    tasks.append(
        make_task(
            41,
            "Podcast ads: chain-rule revenue versus linear spend",
            r"""Listenership is $Q(a)=10a^{3/4}$ for advertising spend $a>0$. Each listener yields $8$ euros, so $R(a)=8Q(a)$. Cost is $C(a)=a+25$. Which of the following statements is/are correct?""",
            [
                r"Marginal revenue of advertising is $R'(a)=60\,a^{-1/4}$.",
                r"Profit is maximised when $R'(a)=1$, i.e. at $a=60^{4}$.",
                r"At $a=16$, $R'(16)=\dfrac{60}{2}=30>1$, so a little more advertising still raises profit.",
                r"Because $Q''(a)<0$, listenership is concave in $a$, but profit may still have an interior maximum.",
                r"Doubling $a$ doubles $Q$.",
            ],
            [True, False, True, True, False],
            [
                r"""$Q'=10\cdot\dfrac34 a^{-1/4}=\dfrac{15}{2}a^{-1/4}$, so $R'=8Q'=60\,a^{-1/4}$""",
                r"""Set $60 a^{-1/4}=1$, so $a^{-1/4}=\dfrac{1}{60}$, hence $a=60^{4}$. Wait that's TRUE. Want a false claim.

Use: maximised at a=60^4 — actually True. Change to a=60^2 — False.""",
                r"""$16^{-1/4}=\dfrac12$, so $R'=30>1$""",
                r"""Concavity of $Q$ does not forbid $R'-1$ crossing from $+$ to $-$""",
                r"""$Q(2a)/Q(a)=2^{3/4}\neq 2$""",
            ],
            r"""todo""",
        )
    )
    tasks.pop()
    tasks.append(
        make_task(
            41,
            "Podcast ads: chain-rule revenue versus linear spend",
            r"""Listenership is $Q(a)=10a^{3/4}$ for advertising spend $a>0$. Each listener yields $8$ euros, so $R(a)=8Q(a)$. Cost is $C(a)=a+25$. Which of the following statements is/are correct?""",
            [
                r"Marginal revenue of advertising is $R'(a)=60\,a^{-1/4}$.",
                r"Profit is maximised when $R'(a)=1$, and that spend is $a=60^{2}$.",
                r"At $a=16$, $R'(16)=30>1$, so a little more advertising still raises profit.",
                r"Because $Q''(a)<0$, listenership is concave in $a$, but profit may still have an interior maximum.",
                r"Doubling $a$ doubles $Q$.",
            ],
            [True, False, True, True, False],
            [
                r"""$Q'=10\cdot\dfrac34 a^{-1/4}=\dfrac{15}{2}a^{-1/4}$, so $R'=8Q'=60\,a^{-1/4}$""",
                r"""$60 a^{-1/4}=1$ gives $a^{1/4}=60$, so $a=60^{4}$, not $60^{2}$""",
                r"""$16^{1/4}=2$, hence $a^{-1/4}=\dfrac12$ and $R'=30>1$""",
                r"""A concave response still allows $R'(a)-1$ to change $+$ to $-$ once""",
                r"""$Q(2a)/Q(a)=2^{3/4}\neq 2$""",
            ],
            r"""Chain-rule MR of advertising equals $1$ at the interior profit max; solve the power carefully. Concavity of $Q$ is compatible with that max.""",
        )
    )

    # 42. Softmax? Keep: piecewise-free tariff with two-part + graph of residual demand
    def resid42(q: float) -> float:
        return 20.0 - 0.5 * q

    fig42 = svg_plane(
        [{"fn": resid42, "label": "p(Q)", "stroke": C0}],
        xmin=0,
        xmax=40,
        ymin=-2,
        ymax=22,
        title="Inverse demand p(Q)",
        xlabel="Q",
        xticks=[0, 10, 20, 30, 40],
        yticks=[0, 5, 10, 15, 20],
        mark_points=[(20, 10, C0), (10, 15, C0)],
    )
    tasks.append(
        make_task(
            42,
            "Club: inverse-demand figure, membership fee, and MC",
            r"""A climbing club faces inverse demand $p(Q)$ as in the figure. Variable cost is $C(Q)=4Q$, and members also pay a fixed membership fee $F=50$ (a constant in the club's profit). Which of the following statements is/are correct?""",
            [
                r"At $Q=20$, the figure gives $p=10$, so variable profit $pQ-C$ equals $200-80=120$ before adding $F$.",
                r"Marginal revenue is $MR=20-Q$, so the quantity that maximises variable profit solves $20-Q=4$.",
                r"The membership fee $F$ changes the profit-maximising $Q$.",
                r"At the variable-profit maximum $Q=16$, price on the figure/formula is $p=12$.",
                r"Price elasticity at $Q=20$ equals $-1$.",
            ],
            [False, True, False, True, True],
            [
                r"""Variable profit is $pQ-4Q$. At $Q=20$, $p=10$, so $200-80=120$ — but the claim says before adding $F$. Fee is revenue, so profit is $pQ+F-C$. The claim's arithmetic for $pQ-C$ is right, but it says "before adding $F$" implying $F$ is added to that variable profit as cost-side confusion — actually claim is arithmetically True for $pQ-C$. 

Wait: "variable profit pQ-C equals 120 before adding F" — True.
Need False for A: use wrong arithmetic: claim says 120 but if someone forgets — change A to say equals 150.""",
                r"""$R=20Q-\dfrac12 Q^{2}$, $R'=20-Q$; set equal to $MC=4$""",
                r"""Constant $F$ drops out of the FOC""",
                r"""$Q=16$, $p=20-\dfrac12\cdot16=12$""",
                r"""$p=10$, $Q=20$, demand $Q=40-2p$, $\varepsilon=\dfrac{-2p}{Q}=\dfrac{-20}{20}=-1$""",
            ],
            r"""todo""",
            figure=fig42,
        )
    )
    tasks.pop()
    tasks.append(
        make_task(
            42,
            "Club: inverse-demand figure, membership fee, and MC",
            r"""A climbing club faces inverse demand $p(Q)$ as in the figure. Variable cost is $C(Q)=4Q$, and members also pay a fixed membership fee $F=50$ collected by the club. Which of the following statements is/are correct?""",
            [
                r"At $Q=20$, variable margin $pQ-C(Q)$ equals $150$.",
                r"Marginal revenue is $MR=20-Q$, so the quantity that maximises profit solves $20-Q=4$.",
                r"The membership fee $F$ changes the profit-maximising $Q$.",
                r"At that optimum $Q=16$, price is $p=12$.",
                r"Price elasticity at $Q=20$ equals $-1$.",
            ],
            [False, True, False, True, True],
            [
                r"""At $Q=20$, $p=10$, so $pQ-C=200-80=120$, not $150$""",
                r"""$R=20Q-\dfrac12 Q^{2}$ gives $R'=20-Q$; set $MR=MC=4$""",
                r"""A constant fee in profit does not shift the $MR=MC$ condition""",
                r"""$Q=16$ and $p=20-\dfrac12\cdot16=12$""",
                r"""From $Q=40-2p$, at $p=10$ one has $\varepsilon=\dfrac{-2\cdot10}{20}=-1$""",
            ],
            r"""Read $p$ off the figure, keep $MR=MC$ for the variable problem, and remember a lump-sum fee does not move optimal $Q$. Unit elasticity at $Q=20$ is a revenue property, not the profit optimum.""",
            figure=fig42,
        )
    )

    # 43. Hard: combine AC' approximation with rival MR integral
    tasks.append(
        make_task(
            43,
            "Mill: average-cost drift and a rival's marginal revenue",
            r"""A mill has cost $C(Q)=\dfrac13 Q^{3}-4Q^{2}+30Q+90$. A rival mill matches revenue at $Q=5$ but has strictly larger marginal revenue on $5\le Q\le 8$. Which of the following statements is/are correct?""",
            [
                r"$AC'(Q)=Q-\dfrac{8}{3}-\dfrac{90}{Q^{2}}$ after writing $AC=\dfrac{C}{Q}$.",
                r"At $Q=6$, average cost is still falling.",
                r"The rival's revenue at $Q=8$ must exceed this mill's revenue at $Q=8$.",
                r"Marginal cost equals average cost at every critical point of $AC$.",
                r"$C''(Q)=2Q-8$, so total cost has an inflection at $Q=4$.",
            ],
            # AC = (1/3)Q^2 - 4Q + 30 + 90/Q
            # AC' = (2/3)Q - 4 - 90/Q^2
            # I had wrong AC' in claim A — make A false with wrong formula, or fix A to true formula
            [False, True, True, True, True],
            [
                r"""Correctly, $AC=\dfrac13 Q^{2}-4Q+30+\dfrac{90}{Q}$, so $AC'=\dfrac23 Q-4-\dfrac{90}{Q^{2}}$, not $Q-\dfrac83-\dfrac{90}{Q^{2}}$""",
                r"""$AC'(6)=\dfrac23\cdot6-4-\dfrac{90}{36}=4-4-2.5=-2.5<0$""",
                r"""Integrating $R_e'>R'$ from $5$ to $8$ with $R_e(5)=R(5)$ yields $R_e(8)>R(8)$""",
                r"""$AC'=0$ rearranges to $MC=AC$""",
                r"""$C''=2Q-8=0$ at $Q=4$, with sign change""",
            ],
            r"""Differentiate $AC$ carefully, use the sign of $AC'$ for falling averages, integrate rival MR gaps, and link $AC'=0$ to $MC=AC$.""",
        )
    )

    # 44. Graph: two inverse demands / residual after tax quantity
    def p44(q: float) -> float:
        return 40.0 - q

    def mr44(q: float) -> float:
        return 40.0 - 2.0 * q

    fig44 = svg_plane(
        [
            {"fn": p44, "label": "p(Q)", "stroke": C0},
            {"fn": mr44, "label": "MR", "stroke": C1},
        ],
        xmin=0,
        xmax=22,
        ymin=-10,
        ymax=42,
        title="Price and MR",
        xlabel="Q",
        xticks=[0, 5, 10, 15, 20],
        yticks=[-5, 0, 10, 20, 30, 40],
        mark_points=[(10, 20, C0), (10, 0, C1), (15, 10, C0)],
    )
    tasks.append(
        make_task(
            44,
            "Theatre: price and MR figure with constant MC",
            r"""A theatre's inverse demand $p(Q)$ (brown) and marginal revenue (green) are shown. Marginal cost is constant at $MC=10$. Which of the following statements is/are correct?""",
            [
                r"Revenue is maximised where green crosses zero, near $Q=10$.",
                r"Profit is maximised where green meets height $10$, near $Q=15$.",
                r"At the profit-maximising output, the figure's brown height is $p=25$.",
                r"At $Q=10$, $MR=0$ while $p=20$, illustrating that price exceeds marginal revenue under downward-sloping demand.",
                r"Because $MC$ is constant, average variable cost equals $MC$, so the profit max also minimises average cost.",
            ],
            [True, True, False, True, False],
            [
                r"""$MR=0$ maximises revenue; green's zero is near $Q=10$""",
                r"""Set $MR=MC=10$: green at height $10$ is near $Q=15$ ($40-2Q=10\Rightarrow Q=15$)""",
                r"""At $Q=15$, brown shows $p=40-15=25$ — wait True. Want False: claim says 25 — change to p=30""",
                r"""Marked points match $MR=0<p$ at the revenue peak""",
                r"""Constant MC means AVC is that constant, but ATC still falls with fixed costs; more importantly profit max $MR=MC$ is not an AC-min condition""",
            ],
            r"""todo""",
            figure=fig44,
        )
    )
    tasks.pop()
    tasks.append(
        make_task(
            44,
            "Theatre: price and MR figure with constant MC",
            r"""A theatre's inverse demand $p(Q)$ (brown) and marginal revenue (green) are shown. Marginal cost is constant at $MC=10$. Which of the following statements is/are correct?""",
            [
                r"Revenue is maximised where green crosses zero, near $Q=10$.",
                r"Profit is maximised where green meets height $10$, near $Q=15$.",
                r"At the profit-maximising output, the figure's brown height is $p=30$.",
                r"At $Q=10$, $MR=0$ while $p=20$, so price exceeds marginal revenue.",
                r"Because $MC$ is constant, the profit-maximising output also minimises average cost.",
            ],
            [True, True, False, True, False],
            [
                r"""Revenue peaks at $MR=0$, the green zero near $Q=10$""",
                r"""$MR=MC$ means green at height $10$, i.e. $40-2Q=10$, so $Q=15$""",
                r"""At $Q=15$, brown is $p=40-15=25$, not $30$""",
                r"""The marked pair at $Q=10$ shows $p=20$ above $MR=0$""",
                r"""$MR=MC$ is not the $MC=AC$ condition for minimum average cost""",
            ],
            r"""Separate the $MR=0$ revenue peak from the $MR=MC$ profit peak. Read $p$ off brown at the profit $Q$. Constant MC does not make that $Q$ an AC minimiser.""",
            figure=fig44,
        )
    )

    # 45. Capstone: quadratic cost, linear demand, unit tax
    tasks.append(
        make_task(
            45,
            "Distillery: quadratic cost, linear demand, and a unit tax",
            r"""A distillery faces inverse demand $p=30-\dfrac13 Q$ and cost $C(Q)=\dfrac25 Q^{2}+8Q+60$. A unit tax of $5$ shifts the firm's marginal cost up by $5$. Which of the following statements is/are correct?""",
            [
                r"Pretax marginal revenue is $MR=30-\dfrac23 Q$.",
                r"Pretax profit is maximised at $Q=15$.",
                r"After the tax, the firm equates $MR$ to $\dfrac45 Q+13$, so the optimal output is strictly below $15$.",
                r"Pretax revenue is maximised at $Q=45$, where price elasticity equals $-1$.",
                r"The unit tax changes the revenue-maximising output because consumers pay more.",
            ],
            [True, True, True, True, False],
            [
                r"""$R=30Q-\dfrac13 Q^{2}$, so $MR=30-\dfrac23 Q$""",
                r"""$MC=\dfrac45 Q+8$. Setting $MR=MC$ gives $30-\dfrac23 Q=\dfrac45 Q+8$, hence $22=\dfrac{22}{15}Q$, so $Q=15$""",
                r"""Post-tax $MC=\dfrac45 Q+13$. The same algebra with $8$ replaced by $13$ yields a smaller positive root than $15$""",
                r"""$MR=0$ at $Q=45$. Then $p=30-15=15$, and with $Q=90-3p$ one has $\varepsilon=\dfrac{-3p}{Q}=\dfrac{-45}{45}=-1$""",
                r"""Revenue depends only on the demand curve; a tax on the firm does not move the $MR=0$ output. It moves the profit-maximising output""",
            ],
            r"""Separate $MR=0$ (revenue) from $MR=MC$ (profit). A specific tax shifts MC and lowers optimal $Q$ but leaves the revenue peak in place.""",
        )
    )

    assert len(tasks) == 15, len(tasks)
    return tasks


def verify_new(tasks: list[dict]) -> None:
    close = lambda a, b: math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-6)
    # 31
    assert close(12 - 2 * 6, 0) and close(9 - 6, 3)
    # 32
    assert close(60 - 2 * 15, 30)
    # 33
    assert close(30 - 16, 6 + 0.5 * 16)
    assert close(30 - 40 / 3, 10 + 0.5 * (40 / 3))
    # 35
    assert close(80 / 4, 20) and close(40 / 4, 10)
    # 41
    assert close(60 * (16 ** -0.25), 30)
    # 42
    assert close(20 - 0.5 * 16, 12)
    # 44
    assert close(40 - 2 * 15, 10)
    # 45
    assert close(30 - (2 / 3) * 15, (4 / 5) * 15 + 8)
    assert all(len(t["statements"]) == 5 for t in tasks)
    # fracify smoke: no bare C(Q)/Q in statements
    for t in tasks:
        blob = " ".join(t["statements"])
        assert "C(Q)/Q" not in blob
        assert "40/\\sqrt" not in blob
    print("new hard math checks OK")


def remaining_slash_report(tasks: list[dict]) -> None:
    pat = re.compile(r"\$[^$]*\d+\s*/\s*[^$]+\$|\$[^$]*[A-Za-z]\([^)]*\)\s*/\s*[^$]+\$")
    for t in tasks:
        for i, s in enumerate(t["statements"] + t["tactical_explanations"] + [t["context"], t["solution_overview"]]):
            if s.startswith("data:"):
                continue
            # find / inside math not part of dfrac/frac/is
            for m in re.finditer(r"\$([^$]+)\$", s):
                body = m.group(1)
                if re.search(r"(?<!frac)(?<!dfrac)(?<!tfrac)/", body):
                    # allow MR/MC-like? inside math rare
                    if re.search(r"\d/\d|[A-Za-z0-9\)]/[A-Za-z0-9\\]", body):
                        # ignore if only in \frac{\d}{\d}
                        stripped = re.sub(r"\\d?frac\{[^}]*\}\{[^}]*\}", "", body)
                        if "/" in stripped:
                            print("SLASH", t["case_id"], body[:80])


def main() -> None:
    doc = json.loads(OUT.read_text())
    tasks = [fracify_task(t) for t in doc["tasks"]]

    replacements = harder_graph_replacements()
    for i, t in enumerate(tasks):
        if t["case_id"] in replacements:
            tasks[i] = replacements[t["case_id"]]

    # drop any previous 191+ then append
    tasks = [t for t in tasks if int(t["case_id"].split(".")[1]) <= 190]
    new = build_new_hard()
    verify_new(new)
    tasks.extend(new)

    # final fracify pass
    tasks = [fracify_task(t) for t in tasks]
    remaining_slash_report(tasks)

    doc["tasks"] = tasks
    assert len(doc["tasks"]) == 45, len(doc["tasks"])
    OUT.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} with {len(doc['tasks'])} tasks")
    graphs = sum(1 for t in doc["tasks"] if t.get("figure"))
    print(f"Graph tasks: {graphs}")
    for t in doc["tasks"]:
        if int(t["case_id"].split(".")[1]) >= 182:
            flag = "GRAPH" if t.get("figure") else ""
            print(t["case_id"], t["title"][:52], t["answer_key"], flag)


if __name__ == "__main__":
    main()
