#!/usr/bin/env python3
"""Append 20 more Ch 11.4 tasks (MATH 11.141–11.160).

Graph-only reasoning: no formula derivation in stems/explanations when the
figure already shows the needed heights and signs. Varied difficulty/style.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

from ch11_svg import STROKES, svg_plane

OUT_TS = Path("/workspace/scripts/_gen_ch11_4_more.ts")


def esc_tick(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def esc_dq(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def task_ts(t: dict) -> str:
    stmts = ",\n".join(f'      "{esc_dq(s)}"' for s in t["statements"])
    expls = ",\n".join(f"      `{esc_tick(e)}`" for e in t["tactical_explanations"])
    return f"""  {{
    id: "{t['id']}",
    case_id: "{t['case_id']}",
    title: "{esc_dq(t['title'])}",
    subsection: "11.4",
    context:
      "{esc_dq(t['context'])}",
    statements: [
{stmts}
    ],
    answer_key: {json.dumps(t['answer_key'])},
    tactical_explanations: [
{expls}
    ],
    difficulty_level: "{t['difficulty_level']}",
    sort_order: {t['sort_order']},
    solution_overview:
      "{esc_dq(t['solution_overview'])}",
    figure: `{esc_tick(t['figure'])}`,
  }}"""


def expl(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    if "The statement is" not in body:
        body = body.rstrip() + f"\n\nThe statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


# ── Families (no waves) ─────────────────────────────────────────────────────

def fp_down(x: float) -> float:
    """Downward-opening quadratic-like: zeros at 1 and 5, peak at 3 of height 4."""
    return -(x - 1.0) * (x - 5.0)


def fp_up(x: float) -> float:
    return (x - 2.0) * (x - 4.0)


def fp_bump(x: float) -> float:
    """Positive bump: 5/(1+(x-2)^2) - 1."""
    return 5.0 / (1.0 + (x - 2.0) ** 2) - 1.0


def fpp_bump(x: float) -> float:
    h = 1e-4
    return (fp_bump(x + h) - fp_bump(x - h)) / (2 * h)


def fp_xe(x: float) -> float:
    """x * exp(-x/2) — rises then falls to 0."""
    return x * math.exp(-0.5 * x)


def fpp_xe(x: float) -> float:
    # product rule: e^{-x/2} + x*(-1/2)e^{-x/2} = e^{-x/2}(1 - x/2)
    return math.exp(-0.5 * x) * (1.0 - 0.5 * x)


def fp_cub2(x: float) -> float:
    return (x + 1.0) * (x - 2.0) * (x - 4.0)


def fpp_cub2(x: float) -> float:
    h = 1e-4
    return (fp_cub2(x + h) - fp_cub2(x - h)) / (2 * h)


def f_from_down(x: float) -> float:
    # ∫ -(x-1)(x-5) = ∫ -(x^2-6x+5) = -x^3/3 + 3x^2 - 5x
    return -(x**3) / 3.0 + 3.0 * x * x - 5.0 * x


def fp_square_lin(x: float) -> float:
    """(x-1)^2 (x-4) — double zero at 1, simple at 4."""
    return (x - 1.0) ** 2 * (x - 4.0)


def gp_firm(x: float) -> float:
    return -0.4 * (x - 0.5) * (x - 5.5) - 0.5


def hp_firm(x: float) -> float:
    return 2.5 - 0.6 * x


def rp_cost(x: float) -> float:
    """Marginal cost-like: always positive, rising."""
    return 0.5 + 0.3 * x + 0.05 * x * x


def build() -> list[dict]:
    tasks: list[dict] = []
    C0, C1, C2 = STROKES

    def add(**kw):
        tasks.append(kw)

    # ── Easy singles (2/5–3/5) ─────────────────────────────────────────────

    fig = svg_plane(
        [{"fn": fp_down, "label": "f′", "stroke": C0}],
        xmin=0, xmax=6, ymin=-6, ymax=6,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, -2, 0, 2, 4],
        mark_points=[(1, 0, C0), (5, 0, C0), (3, 4, C0)],
    )
    add(
        title="Classic downward f′: signs on (1,5)",
        difficulty_level="2/5",
        context=(
            "The figure shows $f'$. Zeros are marked at $x=1$ and $x=5$; the peak is at $(3,4)$. "
            "Decide TRUE or FALSE using only the figure."
        ),
        statements=[
            "On $(1,5)$ the curve is above the axis, so $f$ is increasing on $(1,5)$.",
            "At $x=5$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=5$.",
            "At $x=3$, $f'(3)=4$, so $x=3$ is a local minimum of $f$.",
            "On $(0,1)$ the curve is below the axis, so $f$ is decreasing there.",
            "The steepest climb of $f$ in the window is at $x=3$.",
        ],
        answer_key=[True, True, False, True, True],
        tactical_explanations=[
            expl("A", True, "Between the zeros the curve sits above the axis."),
            expl("B", True, "A $+$ to $-$ crossing at $x=5$ is a local maximum of $f$."),
            expl("C", False, "At $x=3$ one has $f'=4\\neq 0$. That peak of $f'$ is an inflection of $f$, not a local min of $f$."),
            expl("D", True, "Left of $x=1$ the curve is below the axis."),
            expl("E", True, "The largest positive height of $f'$ is $4$ at $x=3$."),
        ],
        solution_overview="Read signs between the marked zeros; do not treat the peak of $f'$ as a min of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": fp_up, "label": "f′", "stroke": C0}],
        xmin=0, xmax=6, ymin=-3, ymax=6,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, 0, 2, 4],
        mark_points=[(2, 0, C0), (4, 0, C0), (3, -1, C0)],
    )
    add(
        title="Upward f′: local max then local min of f",
        difficulty_level="2/5",
        context=(
            "The figure shows $f'$ with zeros at $x=2$ and $x=4$. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=2$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=2$.",
            "At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=4$.",
            "On $(2,4)$ the curve is below the axis, so $f$ is decreasing on $(2,4)$.",
            "At $x=3$, the height of $f'$ is about $-1$.",
            "Because $f'(3)<0$, the point $x=3$ is a local minimum of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Sign change $+$ to $-$ at $x=2$."),
            expl("B", True, "Sign change $-$ to $+$ at $x=4$."),
            expl("C", True, "The curve dips below the axis between the zeros."),
            expl("D", True, "The lowest point of the curve sits near height $-1$ at $x=3$."),
            expl("E", False, "A local extremum of $f$ needs $f'=0$ (with a sign change). Here $f'(3)\\neq 0$."),
        ],
        solution_overview="Two zeros give max then min of $f$; the lowest point of $f'$ is not a critical point of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": f_from_down, "label": "f", "stroke": C0}],
        xmin=0, xmax=6, ymin=-10, ymax=8,
        title="Graph of f",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4],
    )
    add(
        title="Easy reading of f: rise between x=1 and x=5",
        difficulty_level="2/5",
        context=(
            "The figure shows $f$. Decide TRUE or FALSE from the shape alone."
        ),
        statements=[
            "The graph has a local minimum near $x=1$.",
            "The graph has a local maximum near $x=5$.",
            "Between those turning points the graph is rising.",
            "Near $x=3$ the graph is steepest upward in this window.",
            "Because the graph crosses the axis near $x=0$, one must have $f'(0)=0$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Local lowest point near $x=1$."),
            expl("B", True, "Local highest point near $x=5$."),
            expl("C", True, "The curve climbs between those turning points."),
            expl("D", True, "The middle of the climb is the steepest stretch."),
            expl("E", False, "An axis crossing is $f=0$, not $f'=0$."),
        ],
        solution_overview="Read turning points and the rising stretch directly from the graph of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": hp_firm, "label": "P′", "stroke": C0}],
        xmin=0, xmax=6, ymin=-2, ymax=3,
        title="Marginal profit P′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, -1, 0, 1, 2],
        mark_points=[(2.5 / 0.6, 0, C0)] if False else [],
    )
    # zero at 2.5/0.6 ≈ 4.17
    fig = svg_plane(
        [{"fn": hp_firm, "label": "P′", "stroke": C0}],
        xmin=0, xmax=6, ymin=-2, ymax=3,
        title="Marginal profit P′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, -1, 0, 1, 2],
        mark_points=[(2.5 / 0.6, 0, C0)],
    )
    add(
        title="Linear P′: expand left of the zero",
        difficulty_level="2/5",
        context=(
            "The figure shows marginal profit $P'$. It crosses the axis once near $x=4.2$. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "On $(0,4)$ one has $P'>0$, so a little more output raises profit.",
            "On $(5,6)$ one has $P'<0$, so a little more output lowers profit.",
            "A local profit peak occurs at the marked zero of $P'$.",
            "At $x=1$, reading the scale, $P'$ is greater than $1$.",
            "Because $P'$ is a straight line, profit $P$ itself must be a straight line.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Left of the zero the curve is above the axis."),
            expl("B", True, "Right of the zero the curve is below the axis."),
            expl("C", True, "Sign change $+$ to $-$ ⇒ local maximum of $P$."),
            expl("D", True, "At $x=1$ the height is near $1.9$."),
            expl("E", False, "A linear $P'$ means $P$ is quadratic (a parabola), not linear."),
        ],
        solution_overview="One zero of a falling linear $P'$: expand left, contract right; peak at the zero.",
        figure=fig,
    )

    # ── Medium (3/5) ───────────────────────────────────────────────────────

    fig = svg_plane(
        [{"fn": fp_bump, "label": "f′", "stroke": C0}],
        xmin=0, xmax=5, ymin=-1.5, ymax=4.5,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-1, 0, 1, 2, 3, 4],
    )
    add(
        title="Positive bump for f′: two zeros around a hill",
        difficulty_level="3/5",
        context=(
            "The figure shows $f'$: a single hill that crosses the axis twice. Decide TRUE or FALSE."
        ),
        statements=[
            "There are two zeros of $f'$ in the window, one left of $x=2$ and one right of $x=2$.",
            "Between those zeros, $f'>0$, so $f$ is increasing on that middle interval.",
            "Outside those zeros (still in the window), $f'<0$, so $f$ is decreasing there.",
            "The maximum height of $f'$ is at $x=2$, near height $4$.",
            "The maximum of $f'$ at $x=2$ is a local maximum of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "The hill crosses down through the axis on both sides of the peak."),
            expl("B", True, "The hill sits above the axis between its two zeros."),
            expl("C", True, "Outside that interval the curve is below the axis."),
            expl("D", True, "The top of the hill is at $x=2$ with height near $4$."),
            expl("E", False, "A max of $f'$ is where $f$ is steepest, not where $f$ peaks. Peaks of $f$ need zeros of $f'$."),
        ],
        solution_overview="Two zeros of a positive bump: increase in the middle; peak of $f'$ ≠ peak of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": fp_xe, "label": "f′", "stroke": C0}],
        xmin=0, xmax=8, ymin=-0.5, ymax=1.2,
        title="First derivative f′",
        xticks=[0, 2, 4, 6, 8],
        yticks=[0, 0.5, 1],
        mark_points=[(0, 0, C0)],
    )
    add(
        title="f′ starts at 0, stays non-negative, then flattens",
        difficulty_level="3/5",
        context=(
            "The figure shows $f'$. It starts at the origin, rises, then falls toward the axis from above. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "For $x>0$ in the window, $f'$ stays non-negative, so $f$ is increasing on $(0,8)$.",
            "The steepest climb of $f$ occurs at the peak of $f'$, near $x=2$.",
            "At $x=0$ one has $f'(0)=0$.",
            "Because $f'$ approaches $0$ late in the window, $f$ becomes almost flat there.",
            "A local maximum of $f$ occurs at the peak of $f'$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "The curve stays on or above the axis for $x>0$ in view."),
            expl("B", True, "Largest $f'$ is the top of the hump near $x=2$."),
            expl("C", True, "The curve starts at the origin."),
            expl("D", True, "Small positive $f'$ means a gentle rise."),
            expl("E", False, "At the peak of $f'$ one still has $f'>0$, so $f$ is still increasing."),
        ],
        solution_overview="Non-negative $f'$ ⇒ increasing $f$; peak of $f'$ = steepest climb, not a max of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": fp_square_lin, "label": "f′", "stroke": C0}],
        xmin=0, xmax=5, ymin=-8, ymax=6,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-8, -4, 0, 4],
        mark_points=[(1, 0, C0), (4, 0, C0)],
    )
    add(
        title="Double zero at x=1: does f change monotonicity?",
        difficulty_level="3/5",
        context=(
            "The figure shows $f'$ touching the axis at $x=1$ and crossing at $x=4$. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=4$.",
            "On $(1,4)$ the curve is below the axis, so $f$ is decreasing on $(1,4)$.",
            "On $(0,1)$ the curve is also below the axis (or touches at the end), so $f$ does not switch from increasing to decreasing at $x=1$ in the usual $+$ to $-$ way.",
            "At $x=2$, $f'$ is negative.",
            "Touching the axis at $x=1$ without a clear $+$ to $-$ or $-$ to $+$ change means $x=1$ need not be a local extremum of $f$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Clear $-$ to $+$ crossing at $x=4$."),
            expl("B", True, "Between $1$ and $4$ the curve is below the axis."),
            expl("C", True, "Left of $x=1$ the curve is below the axis as well."),
            expl("D", True, "Read the height at $x=2$."),
            expl("E", True, "A flat touch without a sign change fails the first-derivative test for a local extremum."),
        ],
        solution_overview="Double zero may fail a sign change; the simple zero at $x=4$ still gives a local min of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [{"fn": rp_cost, "label": "C′", "stroke": C0}],
        xmin=0, xmax=6, ymin=0, ymax=4,
        title="Marginal cost C′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[0, 1, 2, 3],
    )
    add(
        title="Always-positive rising C′",
        difficulty_level="3/5",
        context=(
            "The figure shows marginal cost $C'$. Decide TRUE or FALSE."
        ),
        statements=[
            "Throughout the window, $C'>0$, so total cost $C$ is increasing.",
            "Because $C'$ itself is rising, $C$ is concave up.",
            "At $x=4$, reading the scale, $C'$ is greater than $2$.",
            "A local minimum of cost occurs somewhere in $(0,6)$ because $C'$ is positive.",
            "At $x=0$, $C'$ is about $0.5$.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl("A", True, "The curve stays above the axis."),
            expl("B", True, "Rising $C'$ means $C''>0$."),
            expl("C", True, "At $x=4$ the height is clearly above $2$."),
            expl("D", False, "Positive $C'$ means cost keeps rising — no interior cost minimum from a sign change of $C'$."),
            expl("E", True, "The left endpoint height is near $0.5$."),
        ],
        solution_overview="Always-positive rising $C'$: cost increases and bends upward; no interior cost min.",
        figure=fig,
    )

    # ── Dual on one plane (4/5) ────────────────────────────────────────────

    fig = svg_plane(
        [
            {"fn": fp_down, "label": "f′", "stroke": C0},
            {"fn": lambda x: -2 * x + 6, "label": "f″", "stroke": C1},
        ],
        xmin=0, xmax=6, ymin=-8, ymax=6,
        title="f′ and f″ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4],
    )
    add(
        title="Exam-style f′ with its linear f″ on one plane",
        difficulty_level="4/5",
        context=(
            "Brown is $f'$ and green is $f''$ on shared axes. Decide TRUE or FALSE from the figure."
        ),
        statements=[
            "At $x=4$, brown is positive while green is negative.",
            "Green crosses zero at $x=3$, which lines up with the peak of brown.",
            "On $(3,6)$, green is negative, so brown is falling — and $f$ is concave down.",
            "At $x=2$, brown is positive, so $f$ is increasing at $x=2$.",
            "Because green is a straight line, $f$ cannot have a local maximum in the window.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Read both heights at $x=4$."),
            expl("B", True, "Peak of $f'$ sits above the zero of $f''$."),
            expl("C", True, "Negative $f''$ ⇒ decreasing $f'$ and concave-down $f$."),
            expl("D", True, "Positive $f'$ ⇒ increasing $f$."),
            expl("E", False, "Brown still changes $+$ to $-$ at $x=5$, so $f$ has a local maximum there."),
        ],
        solution_overview="Shared-plane signs at concrete $x$; linear $f''$ does not forbid a max of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_bump, "label": "f′", "stroke": C0},
            {"fn": fpp_bump, "label": "f″", "stroke": C1},
        ],
        xmin=0, xmax=5, ymin=-3, ymax=4.5,
        title="f′ and f″ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-2, 0, 2, 4],
    )
    add(
        title="Bump f′ with f″: concavity flip at the peak",
        difficulty_level="4/5",
        context=(
            "Brown is $f'$ and green is $f''$. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=2$, brown is near its maximum and green is about $0$.",
            "On $(0,2)$, green is positive, so brown is rising.",
            "On $(2,5)$, green is negative, so brown is falling.",
            "Wherever brown is positive, $f$ is increasing.",
            "Green being zero at $x=2$ means $f$ has a local maximum at $x=2$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Peak of brown aligns with a green zero."),
            expl("B", True, "Positive $f''$ ⇒ increasing $f'$."),
            expl("C", True, "Negative $f''$ ⇒ decreasing $f'$."),
            expl("D", True, "Sign of $f'$ controls monotonicity of $f$."),
            expl("E", False, "Zero of $f''$ is about $f'$, not a critical point of $f$. Critical points of $f$ are zeros of brown."),
        ],
        solution_overview="Align peak of $f'$ with zero of $f''$; keep monotonicity of $f$ tied to the sign of $f'$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_xe, "label": "f′", "stroke": C0},
            {"fn": fpp_xe, "label": "f″", "stroke": C1},
        ],
        xmin=0, xmax=8, ymin=-0.8, ymax=1.2,
        title="f′ and f″ on the same axes",
        xticks=[0, 2, 4, 6, 8],
        yticks=[-0.5, 0, 0.5, 1],
    )
    add(
        title="xe^(−x/2) family: where f′ peaks",
        difficulty_level="4/5",
        context=(
            "Brown is $f'$ and green is $f''$ on one plane. Decide TRUE or FALSE."
        ),
        statements=[
            "Green crosses from positive to negative near $x=2$, under the peak of brown.",
            "On $(0,2)$, green is positive, so brown is rising.",
            "On $(2,8)$, green is negative, so brown is falling toward the axis.",
            "At $x=6$, brown is still positive but small, so $f$ is still increasing slowly.",
            "Because brown never goes negative in the window, $f$ has no local maximum in $(0,8)$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Visible alignment of the green zero with the brown peak."),
            expl("B", True, "Positive green on the left."),
            expl("C", True, "Negative green on the right."),
            expl("D", True, "Small positive brown ⇒ slow increase of $f$."),
            expl("E", True, "No $+$ to $-$ zero of $f'$ in $(0,8)$ ⇒ no local max of $f$ there."),
        ],
        solution_overview="Peak of $f'$ at the $f''$ zero; persistent positive $f'$ ⇒ no local max of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": hp_firm, "label": "P′", "stroke": C0},
            {"fn": rp_cost, "label": "C′", "stroke": C1},
        ],
        xmin=0, xmax=6, ymin=-2, ymax=4,
        title="P′ and C′ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, 0, 2, 4],
    )
    add(
        title="Compare P′ and C′ heights at x=1 and x=5",
        difficulty_level="4/5",
        context=(
            "Brown is marginal profit $P'$ and green is marginal cost $C'$ on shared axes. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=1$, brown is above green.",
            "At $x=5$, brown is below the axis while green is still positive.",
            "Wherever brown is positive, a little more output raises profit.",
            "Green staying positive means total cost keeps rising throughout the window.",
            "The two curves meet at the profit-maximising output.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "At $x=1$, brown is near $2$ and green is near $1$."),
            expl("B", True, "Brown has crossed below zero; green remains above."),
            expl("C", True, "Positive $P'$ ⇒ expanding raises profit."),
            expl("D", True, "Positive $C'$ ⇒ increasing $C$."),
            expl("E", False, "Profit peaks where $P'=0$ (brown's zero), not where brown equals green. (Those are different conditions unless $P'=R'-C'$ is arranged that way and you also set $R'=C'$.)"),
        ],
        solution_overview="Compare $P'$ and $C'$ at concrete $x$; profit peak is at $P'=0$, not at a $P'=C'$ crossing unless the stem says so.",
        figure=fig,
    )

    # Soften E explanation - user said don't derive formulas. The false claim is enough without R'-C'.
    tasks[-1]["tactical_explanations"][4] = expl(
        "E",
        False,
        "A profit peak is where brown crosses from $+$ to $-$ (zero of $P'$). "
        "That is not the same as the place where brown equals green.",
    )

    fig = svg_plane(
        [
            {"fn": fp_cub2, "label": "f′", "stroke": C0},
            {"fn": gp_firm, "label": "g′", "stroke": C1},
        ],
        xmin=-1, xmax=5, ymin=-8, ymax=8,
        title="f′ and g′ on the same axes",
        xticks=[-1, 0, 1, 2, 3, 4, 5],
        yticks=[-8, -4, 0, 4, 8],
    )
    add(
        title="Two first derivatives: opposite advice at x=0",
        difficulty_level="4/5",
        context=(
            "Brown is $f'$ and green is $g'$ on one plane. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, brown is negative while green is also negative.",
            "Brown has three zeros in the window; green has two.",
            "At $x=3$, brown is negative.",
            "On an interval where brown is above green and both are negative, $f$ and $g$ both decrease, and $f$ decreases less steeply when brown is less negative.",
            "Equal numbers of turning points for $f$ and $g$ follow automatically from the figure.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Both curves sit below the axis at $x=0$."),
            expl("B", True, "Count the axis crossings of each colour."),
            expl("C", True, "Between brown's middle and right zeros the curve is below the axis."),
            expl("D", True, "Negative derivatives ⇒ decreasing; less negative ⇒ gentler decrease."),
            expl("E", False, "Brown has three zeros and green two, so $f$ and $g$ need not have the same number of turning points."),
        ],
        solution_overview="Compare signs and zero counts of two first-derivative graphs on shared axes.",
        figure=fig,
    )

    # ── Triples / hard (5/5) ───────────────────────────────────────────────

    fig = svg_plane(
        [
            {"fn": fp_cub2, "label": "f′", "stroke": C0},
            {"fn": fpp_cub2, "label": "f″", "stroke": C1},
            {"fn": lambda x: fp_cub2(x) - 2, "label": "f′−2", "stroke": C2},
        ],
        xmin=-1, xmax=5, ymin=-12, ymax=10,
        title="Three related curves on one plane",
        xticks=[-1, 0, 1, 2, 3, 4, 5],
        yticks=[-8, -4, 0, 4, 8],
    )
    add(
        title="f′, f″, and a vertical shift of f′",
        difficulty_level="5/5",
        context=(
            "Brown is $f'$, green is $f''$, and purple is the vertical shift $f'-2$, all on one plane. "
            "Decide TRUE or FALSE from the figure only."
        ),
        statements=[
            "At $x=0$, brown is below the axis and purple is even lower.",
            "Zeros of green sit under a local max and a local min of brown.",
            "Purple crosses the axis at different $x$-values from brown.",
            "Wherever green is positive, brown is rising.",
            "Because purple is just brown shifted down by $2$, brown and purple have the same local max/min $x$-coordinates.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Read both brown and purple at $x=0$."),
            expl("B", True, "Extrema of $f'$ align with zeros of $f''$."),
            expl("C", True, "A vertical shift moves the axis crossings."),
            expl("D", True, "Positive $f''$ ⇒ increasing $f'$."),
            expl("E", True, "A vertical shift does not move peaks left/right — only up/down."),
        ],
        solution_overview="Shift changes zeros but not the $x$-location of peaks; $f''$ still marks extrema of $f'$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_down, "label": "P′_A", "stroke": C0},
            {"fn": fp_up, "label": "P′_B", "stroke": C1},
            {"fn": hp_firm, "label": "P′_C", "stroke": C2},
        ],
        xmin=0, xmax=6, ymin=-4, ymax=6,
        title="Three marginal-profit curves on one plane",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, -2, 0, 2, 4],
    )
    add(
        title="Three firms at x=3: who should expand?",
        difficulty_level="5/5",
        context=(
            "Brown, green, and purple are three firms' marginal profits on shared axes. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=3$, brown is positive, so firm A should expand a little.",
            "At $x=3$, green is negative, so firm B should not expand.",
            "At $x=3$, purple is positive, so firm C should expand a little.",
            "Firm A has a local profit peak near $x=5$.",
            "All three firms have the same expand/contract recommendation at every $x$ in $(0,6)$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Brown is above the axis at $x=3$."),
            expl("B", True, "Green is below the axis at $x=3$."),
            expl("C", True, "Purple is still above the axis at $x=3$."),
            expl("D", True, "Brown crosses from $+$ to $-$ near $x=5$."),
            expl("E", False, "At $x=3$ already A and C want to expand while B does not."),
        ],
        solution_overview="Read each colour's sign at $x=3$; opposite signs mean opposite advice.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": f_from_down, "label": "f", "stroke": C0},
            {"fn": fp_down, "label": "f′", "stroke": C1},
        ],
        xmin=0, xmax=6, ymin=-10, ymax=8,
        title="f and f′ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4],
    )
    add(
        title="Hard consistency: f versus f′ on one plane",
        difficulty_level="5/5",
        context=(
            "Brown is $f$ and green is $f'$. Decide TRUE or FALSE using only the shared figure."
        ),
        statements=[
            "Turning points of brown line up with zeros of green.",
            "Where green is positive, brown is rising.",
            "Where green is negative, brown is falling.",
            "The highest point of green is a local maximum of brown.",
            "At $x=3$, green is near height $4$, matching the steepest climb of brown.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl("A", True, "Critical points of $f$ are zeros of $f'$."),
            expl("B", True, "Positive $f'$ ⇒ increasing $f$."),
            expl("C", True, "Negative $f'$ ⇒ decreasing $f$."),
            expl("D", False, "Highest green is steepest slope of brown, not a peak of brown. Brown's peak is near $x=5$ where green is $0$."),
            expl("E", True, "Green's peak height near $4$ at $x=3$ matches the steep middle climb of brown."),
        ],
        solution_overview="Consistency checks between $f$ and $f'$ on one plane; max of $f'$ ≠ max of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_square_lin, "label": "f′", "stroke": C0},
            {"fn": lambda x: (fp_square_lin(x + 1e-4) - fp_square_lin(x - 1e-4)) / 2e-4, "label": "f″", "stroke": C1},
        ],
        xmin=0, xmax=5, ymin=-10, ymax=8,
        title="f′ and f″ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-8, -4, 0, 4],
    )
    add(
        title="Double zero of f′: read f″ nearby",
        difficulty_level="5/5",
        context=(
            "Brown is $f'$ and green is $f''$. Brown touches the axis at $x=1$ and crosses at $x=4$. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=4$, brown changes from negative to positive.",
            "Near $x=1$, brown stays non-positive on both sides in the window, so there is no ordinary $+$ to $-$ local-max test for $f$ there.",
            "Green is zero at some interior point between $1$ and $4$ where brown has a lowest point.",
            "On $(4,5)$, brown is positive, so $f$ is increasing there.",
            "A zero of green always forces a local extremum of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Visible $-$ to $+$ crossing at $x=4$."),
            expl("B", True, "Brown does not change from above to below (or below to above) across $x=1$."),
            expl("C", True, "Lowest point of brown aligns with a green zero."),
            expl("D", True, "Positive brown ⇒ increasing $f$."),
            expl("E", False, "Zeros of $f''$ control extrema of $f'$, not of $f$. Extrema of $f$ need zeros of $f'$."),
        ],
        solution_overview="Double zero of $f'$ may skip a sign change; zeros of $f''$ are not extrema of $f$.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_bump, "label": "R′", "stroke": C0},
            {"fn": rp_cost, "label": "C′", "stroke": C1},
            {"fn": lambda x: fp_bump(x) - rp_cost(x), "label": "P′", "stroke": C2},
        ],
        xmin=0, xmax=5, ymin=-3, ymax=4.5,
        title="R′, C′, and P′=R′−C′ on one plane",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-2, 0, 2, 4],
    )
    add(
        title="Revenue, cost, and profit slopes together",
        difficulty_level="5/5",
        context=(
            "Brown is marginal revenue $R'$, green is marginal cost $C'$, and purple is marginal profit "
            "$P'=R'-C'$, drawn on one plane. Decide TRUE or FALSE from the figure."
        ),
        statements=[
            "Purple is positive precisely where brown lies above green.",
            "At $x=2$, brown is near its peak and still above green, so purple is positive there.",
            "Late in the window, green stays positive while brown falls below it, so purple becomes negative.",
            "A local profit peak occurs where purple changes from positive to negative.",
            "Because green never crosses the axis, total cost has a local maximum in the window.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "By construction on the figure, purple tracks brown minus green."),
            expl("B", True, "At $x=2$, brown is high and above green."),
            expl("C", True, "Brown drops toward/under green on the right; purple goes negative."),
            expl("D", True, "Sign change of $P'$ from $+$ to $-$ is a local max of $P$."),
            expl("E", False, "Green stays positive, so cost keeps rising — no local cost maximum from a sign change of $C'$."),
        ],
        solution_overview="Read $P'$ as the gap $R'-C'$ on one plane; profit peaks at purple's $+$ to $-$ crossing.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_up, "label": "f′", "stroke": C0},
            {"fn": lambda x: 2 * x - 6, "label": "f″", "stroke": C1},
            {"fn": lambda x: (x - 2) * (x - 4) + 1, "label": "h′", "stroke": C2},
        ],
        xmin=0, xmax=6, ymin=-4, ymax=6,
        title="Three curves on one plane",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, -2, 0, 2, 4],
    )
    add(
        title="f′, f″, and a lifted companion h′",
        difficulty_level="5/5",
        context=(
            "Brown is $f'$, green is $f''$, and purple is another derivative $h'$ on shared axes. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "Green is zero at $x=3$, under the lowest point of brown.",
            "On $(0,3)$, green is negative, so brown is falling.",
            "Purple stays above brown by about $1$ everywhere in the window.",
            "At $x=1$, brown is positive, so $f$ is increasing at $x=1$.",
            "Purple having no zero in the window means $h$ has no local extremum in $(0,6)$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Green crosses at $x=3$; brown bottoms there."),
            expl("B", True, "Negative green on the left of $x=3$."),
            expl("C", True, "Purple tracks a parallel lift of brown."),
            expl("D", True, "Positive brown ⇒ increasing $f$."),
            expl("E", False, "Purple still crosses the axis twice (lifted upward-opening shape) — look carefully near the sides; if both crossings remain visible, $h$ still has extrema. From the figure purple does cross near the left and right. So \"no zero\" is false."),
        ],
        solution_overview="Read alignments of $f''$ with extrema of $f'$; a vertical lift of $f'$ still typically keeps two zeros.",
        figure=fig,
    )

    # Fix last task E - h' = (x-2)(x-4)+1 = x^2-6x+8+1 = x^2-6x+9 = (x-3)^2 >= 0, touches at 3 only!
    # So purple touches at x=3 with value 0. So it HAS a zero (touch). Statement "no zero" is false.
    # And at a touch of h' without sign change, h may not have a local extremum.
    # Recraft E to be clearer:
    tasks[-1]["statements"][4] = (
        "Purple touches the axis at $x=3$ without changing sign, so that touch need not give a local extremum of $h$."
    )
    tasks[-1]["answer_key"][4] = True
    tasks[-1]["tactical_explanations"][4] = expl(
        "E",
        True,
        "Purple is non-negative and only touches zero at $x=3$. No sign change ⇒ the first-derivative test does not give a local extremum of $h$ there.",
    )

    # ── One more easy + one compare style to reach 20 ──────────────────────

    fig = svg_plane(
        [{"fn": lambda x: 3 - x, "label": "f′", "stroke": C0}],
        xmin=0, xmax=5, ymin=-2, ymax=4,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-2, 0, 2, 4],
        mark_points=[(3, 0, C0)],
    )
    add(
        title="Straight f′: one critical point at x=3",
        difficulty_level="2/5",
        context=(
            "The figure shows a straight-line $f'$ crossing the axis at $x=3$. Decide TRUE or FALSE."
        ),
        statements=[
            "On $(0,3)$, $f'>0$, so $f$ is increasing.",
            "On $(3,5)$, $f'<0$, so $f$ is decreasing.",
            "The function $f$ has a local maximum at $x=3$.",
            "At $x=1$, $f'$ equals $2$ on the scale.",
            "Because $f'$ is decreasing, $f$ is concave down throughout the window.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Left of the zero the line is above the axis."),
            expl("B", True, "Right of the zero the line is below the axis."),
            expl("C", True, "$+$ to $-$ at $x=3$."),
            expl("D", True, "Height $2$ at $x=1$."),
            expl("E", True, "Falling $f'$ means $f''<0$."),
        ],
        solution_overview="One falling linear $f'$: increase then decrease; always concave down.",
        figure=fig,
    )

    fig = svg_plane(
        [
            {"fn": fp_down, "label": "f′", "stroke": C0},
            {"fn": fp_up, "label": "g′", "stroke": C1},
        ],
        xmin=0, xmax=6, ymin=-4, ymax=6,
        title="f′ and g′ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, -2, 0, 2, 4],
    )
    add(
        title="Mirror-ish f′ and g′: compare at x=3",
        difficulty_level="3/5",
        context=(
            "Brown is $f'$ and green is $g'$ on one plane. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=3$, brown is positive (near $4$) while green is negative (near $-1$).",
            "So at $x=3$, $f$ is increasing while $g$ is decreasing.",
            "Brown has zeros at $x=1$ and $x=5$; green has zeros at $x=2$ and $x=4$.",
            "On $(2,4)$, green is negative, so $g$ is decreasing on $(2,4)$.",
            "Because the curves look related, $f$ and $g$ must have the same local maximum value.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Read both heights at $x=3$."),
            expl("B", True, "Opposite signs ⇒ opposite monotonicity."),
            expl("C", True, "Count each colour's axis crossings."),
            expl("D", True, "Green dips below the axis between $2$ and $4$."),
            expl("E", False, "The figure shows derivatives, not the levels of $f$ and $g$."),
        ],
        solution_overview="Pointwise sign comparison of two first-derivative graphs; levels of $f$ and $g$ are not shown.",
        figure=fig,
    )

    assert len(tasks) >= 20, len(tasks)
    tasks = tasks[:20]

    # bans
    banned = ("trough", "oscillat", "sinusoid", "Graph A is", "Graph B is $f", "which curve is $f")
    for t in tasks:
        blob = (t["title"] + t["context"] + " ".join(t["statements"]) + " ".join(t["tactical_explanations"])).lower()
        for b in banned:
            if b.lower() in blob:
                raise SystemExit(f"banned '{b}' in {t['title']}")

    for i, t in enumerate(tasks):
        n = 141 + i
        t["id"] = f"math-11-{n}"
        t["case_id"] = f"MATH 11.{n}"
        t["sort_order"] = n
    return tasks


def main() -> None:
    tasks = build()
    OUT_TS.write_text(",\n".join(task_ts(t) for t in tasks) + "\n")
    print(f"Wrote {len(tasks)} tasks to {OUT_TS}")
    for t in tasks:
        print(t["case_id"], t["difficulty_level"], t["title"][:52])


if __name__ == "__main__":
    main()
