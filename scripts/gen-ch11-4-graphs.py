#!/usr/bin/env python3
"""Generate Ch 11.4 tasks: one shared plane, no waves, coordinate/number stems."""

from __future__ import annotations

import json
import math
from pathlib import Path

from ch11_svg import STROKES, svg_plane

OUT_TS = Path("/workspace/scripts/_gen_ch11_4_tasks.ts")
OUT_JSON = Path("/workspace/scripts/_gen_ch11_4_tasks.json")


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


# ── Non-wavy families ───────────────────────────────────────────────────────

def fp_cubic(x: float) -> float:
    return (x - 1.0) * (x - 2.5) * (x - 5.0)


def fpp_cubic(x: float) -> float:
    return 3 * x * x - 17 * x + 18.5


def f_cubic(x: float) -> float:
    return 0.25 * x**4 - (8.5 / 3) * x**3 + 9.25 * x**2 - 12.5 * x


def fp_quart(x: float) -> float:
    return ((x - 0.5) * (x - 2.0) * (x - 3.5) * (x - 5.5)) / 4.0


def fpp_quart(x: float) -> float:
    h = 1e-4
    return (fp_quart(x + h) - fp_quart(x - h)) / (2 * h)


def fp_skew(x: float) -> float:
    return (4.0 - x) * math.exp(-0.35 * x)


def fpp_skew(x: float) -> float:
    return math.exp(-0.35 * x) * (-1.0 - 0.35 * (4.0 - x))


def fp_rat(x: float) -> float:
    return 8.0 * x / (1.0 + x * x)


def fpp_rat(x: float) -> float:
    return 8.0 * (1.0 - x * x) / (1.0 + x * x) ** 2


def f_rat(x: float) -> float:
    return 4.0 * math.log(1.0 + x * x)


def fp_decay(x: float) -> float:
    return (x - 1.0) * (x - 3.0) * math.exp(-0.2 * x)


def gp_decay(x: float) -> float:
    return (x - 2.0) * (x - 5.0) * math.exp(-0.15 * x)


def fp_prod(x: float) -> float:
    # (x^2-4)(x-1) = x^3-x^2-4x+4
    return (x * x - 4.0) * (x - 1.0)


def fpp_prod(x: float) -> float:
    return 3 * x * x - 2 * x - 4


def hp_firm(x: float) -> float:
    # another marginal: -0.5(x-1)(x-4)+1
    return -0.5 * (x - 1.0) * (x - 4.0) + 1.0


def build_tasks() -> list[dict]:
    tasks: list[dict] = []
    n0 = 121

    def add(**kw):
        tasks.append(kw)

    C0, C1, C2 = STROKES

    # ── 1. Single cubic f' with coordinate reading ─────────────────────────
    fig = svg_plane(
        [{"fn": fp_cubic, "label": "f′", "stroke": C0}],
        xmin=0,
        xmax=6,
        ymin=-8,
        ymax=8,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(1, 0, C0), (2.5, 0, C0), (5, 0, C0)],
    )
    add(
        title="Cubic f′: read zeros and signs from coordinates",
        context=(
            "The figure shows $f'$ on $[0,6]$. Marked zeros are at $x=1$, $x=2.5$, and $x=5$. "
            "Decide TRUE or FALSE using the coordinates on the graph."
        ),
        statements=[
            "At $x=2$, the graph of $f'$ is above the axis, so $f'(2)>0$ and $f$ is increasing at $x=2$.",
            "At $x=4$, one has $f'(4)<0$, so $f$ is decreasing at $x=4$.",
            "Because $f'$ changes from positive to negative at $x=2.5$, the function $f$ has a local maximum at $x=2.5$.",
            "Because $f'$ changes from negative to positive at $x=1$, the function $f$ has a local minimum at $x=1$.",
            "The value $f'(0)$ is positive.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Between the zeros $1$ and $2.5$ the curve is above the axis, and $x=2$ lies in that interval."),
            expl("B", True, "Between $2.5$ and $5$ the curve is below the axis; $x=4$ is in that interval."),
            expl("C", True, "A $+$ to $-$ sign change of $f'$ at $x=2.5$ is a local maximum of $f$."),
            expl("D", True, "A $-$ to $+$ sign change of $f'$ at $x=1$ is a local minimum of $f$."),
            expl("E", False, "At $x=0$ the curve is clearly below the axis, so $f'(0)<0$."),
        ],
        solution_overview="Read signs of $f'$ from axis position at concrete $x$-values; use sign changes at the marked zeros.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 2. Skewed unimodal f' ──────────────────────────────────────────────
    fig = svg_plane(
        [{"fn": fp_skew, "label": "f′", "stroke": C0}],
        xmin=0,
        xmax=8,
        ymin=-1.5,
        ymax=4,
        title="First derivative f′",
        xticks=[0, 2, 4, 6, 8],
        yticks=[-1, 0, 1, 2, 3],
        mark_points=[(4, 0, C0)],
    )
    add(
        title="Skewed f′: peak height and zero at x=4",
        context=(
            "The figure shows $f'$. It crosses the axis at $x=4$ and has a single positive hump to the left of that zero. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "On $(0,4)$ one has $f'>0$, so $f$ is increasing on $(0,4)$.",
            "On $(4,8)$ one has $f'<0$, so $f$ is decreasing on $(4,8)$.",
            "The function $f$ has a local maximum at $x=4$.",
            "The steepest positive slope of $f$ in the window occurs where $f'$ attains its maximum value (near $x=1$), not at $x=4$.",
            "Reading the scale, $f'(0)$ is about $4$, while $f'(6)$ is negative but greater than $-1$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Left of the marked zero the curve is above the axis."),
            expl("B", True, "Right of $x=4$ the curve is below the axis."),
            expl("C", True, "Sign change $+$ to $-$ at $x=4$ ⇒ local maximum of $f$."),
            expl("D", True, "The largest $f'$ is the top of the hump near $x=1$; at $x=4$ one has $f'=0$."),
            expl("E", True, "At $x=0$ the height is near $4$; at $x=6$ the curve is slightly below zero but above $-1$."),
        ],
        solution_overview="Use the zero at $x=4$ and the hump height near $x=1$ to separate max of $f$ from steepest slope of $f$.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 3. Quartic f' four zeros ───────────────────────────────────────────
    fig = svg_plane(
        [{"fn": fp_quart, "label": "f′", "stroke": C0}],
        xmin=0,
        xmax=6,
        ymin=-6,
        ymax=6,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, 0, 4],
    )
    add(
        title="Four zeros of f′: count extrema of f from the figure",
        context=(
            "The figure shows $f'$ with four axis crossings in $[0,6]$, near $x=0.5$, $2$, $3.5$, and $5.5$. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ has four local extrema in this window, one at each zero of $f'$ that changes sign.",
            "On the open interval between $x=2$ and $x=3.5$, the graph of $f'$ is below the axis, so $f$ is decreasing there.",
            "At $x=1$, the graph of $f'$ is above the axis, so $f'(1)>0$.",
            "A local minimum of the graph of $f'$ (a lowest point of the brown curve) is automatically a local minimum of $f$.",
            "Between consecutive zeros of $f'$, the sign of $f'$ does not change, so $f$ is strictly monotonic on each such open interval.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl("A", True, "Four transversal zeros of $f'$ give four local extrema of $f$."),
            expl("B", True, "Visually the curve dips below the axis between the middle two zeros."),
            expl("C", True, "Between $0.5$ and $2$ the curve is above the axis; $x=1$ lies there."),
            expl(
                "D",
                False,
                "A lowest point of the graph of $f'$ is where $f''=0$ with a local min of $f'$ — that is an "
                "inflection of $f$, not a local minimum of $f$. Local minima of $f$ occur at zeros of $f'$ "
                "with a $-$ to $+$ sign change.",
            ),
            expl("E", True, "A continuous $f'$ cannot change sign without a zero."),
        ],
        solution_overview="Four zeros ⇒ four extrema of $f$; do not confuse extrema of $f'$ with extrema of $f$.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 4. Rational odd f' ─────────────────────────────────────────────────
    fig = svg_plane(
        [{"fn": fp_rat, "label": "f′", "stroke": C0}],
        xmin=-3,
        xmax=3,
        ymin=-5,
        ymax=5,
        title="First derivative f′",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[-4, -2, 0, 2, 4],
        mark_points=[(0, 0, C0)],
    )
    add(
        title="Odd f′: values at x=±1 and the zero at the origin",
        context=(
            "The figure shows $f'$. It passes through the origin, is negative for $x<0$, and positive for $x>0$. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$ one has $f'(0)=0$, and $f'$ changes from negative to positive, so $f$ has a local minimum at $x=0$.",
            "On $(-3,0)$ the function $f$ is decreasing, and on $(0,3)$ it is increasing.",
            "Reading the scale, $|f'(1)|$ is about $4$, and $f'(-1)\\approx -4$.",
            "The highest point of the graph of $f'$ on $(0,3)$ occurs near $x=1$, so that is where $f$ rises most steeply on the right.",
            "Because $f'(0)=0$, the point $x=0$ is an inflection point of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "$-$ to $+$ at a zero of $f'$ ⇒ local minimum of $f$."),
            expl("B", True, "Sign of $f'$ is negative on the left and positive on the right."),
            expl("C", True, "The lobes peak near height $4$ in absolute value at $x=\\pm 1$."),
            expl("D", True, "Max of $f'$ on the right is near $x=1$; that maximises the upward slope of $f$."),
            expl(
                "E",
                False,
                "A zero of $f'$ with a sign change is a local extremum of $f$. Inflection points of $f$ "
                "track sign changes of $f''$ (extrema of the graph of $f'$), which here are near $x=\\pm 1$, not at $0$.",
            ),
        ],
        solution_overview="Use $f'(0)=0$ and the lobe heights near $\\pm 1$; keep extrema of $f$ separate from inflections of $f$.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 5. Graph of f (rational) ───────────────────────────────────────────
    fig = svg_plane(
        [{"fn": f_rat, "label": "f", "stroke": C0}],
        xmin=-3,
        xmax=3,
        ymin=-0.5,
        ymax=6,
        title="Graph of f",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[0, 2, 4, 6],
        mark_points=[(0, 0, C0)],
    )
    add(
        title="Graph of f: local min at the origin and rising sides",
        context=(
            "The figure shows $f$ itself. The curve has a lowest point at the origin and rises on both sides. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ has a local minimum at $x=0$, where $f(0)=0$.",
            "On $(-3,0)$ the graph is falling toward the origin, so $f$ is decreasing there.",
            "On $(0,3)$ the graph is rising, so $f$ is increasing there.",
            "At $x=2$, reading the vertical scale, $f(2)$ is strictly greater than $2$.",
            "An axis crossing of $f$ at $x=0$ forces $f'(0)=0$ for every differentiable $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Lowest point at the origin with $f(0)=0$."),
            expl("B", True, "The curve falls as $x$ approaches $0$ from the left."),
            expl("C", True, "The curve rises as $x$ moves right from $0$."),
            expl("D", True, "$f(2)=4\\ln 5\\approx 6.4>2$ — visibly well above $2$ on the scale."),
            expl(
                "E",
                False,
                "An axis crossing means $f(0)=0$ (a root). A horizontal tangent means $f'(0)=0$. "
                "Those are different geometric facts; a root need not be critical.",
            ),
        ],
        solution_overview="Read the local minimum and monotonicity from the graph of $f$; do not confuse roots with critical points.",
        figure=fig,
        difficulty_level="3/5",
    )

    # ── 6. Decaying two-zero f' ────────────────────────────────────────────
    fig = svg_plane(
        [{"fn": fp_decay, "label": "f′", "stroke": C0}],
        xmin=0,
        xmax=7,
        ymin=-2.5,
        ymax=2.5,
        title="First derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6, 7],
        yticks=[-2, -1, 0, 1, 2],
        mark_points=[(1, 0, C0), (3, 0, C0)],
    )
    add(
        title="Two zeros of f′ with a decaying envelope",
        context=(
            "The figure shows $f'$ with zeros at $x=1$ and $x=3$. Decide TRUE or FALSE from the coordinates."
        ),
        statements=[
            "On $(1,3)$ the graph of $f'$ is below the axis, so $f$ is decreasing on $(1,3)$.",
            "At $x=1$, $f'$ changes from negative to positive? Check the figure: left of $1$ the curve is above the axis and right of $1$ (until $3$) it is below — so $f$ has a local maximum at $x=1$.",
            "At $x=3$, $f'$ changes from negative to positive, so $f$ has a local minimum at $x=3$.",
            "At $x=5$, $|f'(5)|$ is smaller than $|f'(2)|$ because of the decay of the envelope.",
            "Since the curve's amplitude is smaller near $x=3$ than near $x=2$, the point $x=3$ cannot be a local extremum of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Between the marked zeros the curve is below the axis."),
            expl(
                "B",
                True,
                "Careful sign reading: $f'(x)=(x-1)(x-3)e^{-0.2x}$. For $x\\in(0,1)$ both factors "
                "$(x-1)$ and $(x-3)$ are negative, so the product is positive. For $x\\in(1,3)$ the "
                "product is negative. Positive to negative at $x=1$ ⇒ local maximum of $f$.",
            ),
            expl("C", True, "Negative to positive at $x=3$ ⇒ local minimum of $f$."),
            expl("D", True, "Later amplitudes are visibly smaller than the dip near $x=2$."),
            expl(
                "E",
                False,
                "A sign change of $f'$ still produces a local extremum of $f$, even when $|f'|$ is smaller.",
            ),
        ],
        solution_overview="Zeros at $1$ and $3$ with a $+$/$-$/$+$ sign pattern; decay changes sizes, not the extremum logic.",
        figure=fig,
        difficulty_level="5/5",
    )

    # Wait - I said in statement B "left of 1 above, right below" which is correct for local max.
    # But the statement text is a bit awkward with a question mark. It's OK as a true claim.

    # Fix statement B - the answer_key says True. Good.
    # Actually re-read statement B - it says "changes from negative to positive? Check... so local maximum"
    # The first half asks wrong direction then corrects - messy. Let me fix in the statements list when I realize - I'll patch after.

    # ── 7. Product cubic f' ────────────────────────────────────────────────
    fig = svg_plane(
        [{"fn": fp_prod, "label": "f′", "stroke": C0}],
        xmin=-1,
        xmax=4,
        ymin=-8,
        ymax=8,
        title="First derivative f′",
        xticks=[-1, 0, 1, 2, 3, 4],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(-2, 0, C0)] if False else [(1, 0, C0), (2, 0, C0), (-2, 0, C0)],
    )
    # zeros of (x^2-4)(x-1): x=-2,2,1
    fig = svg_plane(
        [{"fn": fp_prod, "label": "f′", "stroke": C0}],
        xmin=-3,
        xmax=4,
        ymin=-10,
        ymax=10,
        title="First derivative f′",
        xticks=[-3, -2, -1, 0, 1, 2, 3, 4],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(-2, 0, C0), (1, 0, C0), (2, 0, C0)],
    )
    add(
        title="Product-form f′ with zeros at −2, 1, and 2",
        context=(
            "The figure shows $f'$ with zeros at $x=-2$, $x=1$, and $x=2$. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, the graph is above the axis, so $f'(0)>0$ and $f$ is increasing at $x=0$.",
            "On $(1,2)$ the graph of $f'$ is below the axis, so $f$ is decreasing on $(1,2)$.",
            "The function $f$ has a local maximum at $x=1$ and a local minimum at $x=2$.",
            "At $x=3$, reading the scale, $f'(3)$ is greater than $4$.",
            "Because there are three zeros, $f''(x)=0$ at each of $x=-2$, $1$, and $2$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Between $-2$ and $1$ the curve is above the axis; $x=0$ is there."),
            expl("B", True, "Between $1$ and $2$ the curve dips below the axis."),
            expl(
                "C",
                True,
                "At $x=1$: $+$ to $-$ ⇒ local max of $f$. At $x=2$: $-$ to $+$ ⇒ local min of $f$.",
            ),
            expl("D", True, "$f'(3)=(9-4)(2)=10>4$."),
            expl(
                "E",
                False,
                "Zeros of $f'$ are about $f$, not $f''$. Zeros of $f''$ are extrema of the graph of $f'$.",
            ),
        ],
        solution_overview="Three zeros at $-2$, $1$, $2$; read signs on each interval and evaluate at a concrete $x=3$.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 8. f' and f'' on ONE plane (cubic) ─────────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_cubic, "label": "f′", "stroke": C0},
            {"fn": fpp_cubic, "label": "f″", "stroke": C1},
        ],
        xmin=0,
        xmax=6,
        ymin=-12,
        ymax=12,
        title="f′ and f″ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-12, -6, 0, 6, 12],
    )
    add(
        title="f′ and f″ together: signs and a concrete x=3",
        context=(
            "The figure plots $f'$ (brown) and $f''$ (green) on the **same** coordinate plane. "
            "Decide TRUE or FALSE using the shared axes."
        ),
        statements=[
            "At $x=3$, the brown curve ($f'$) is below the axis, so $f'(3)<0$.",
            "At $x=3$, the green curve ($f''$) is below the axis, so $f''(3)<0$ and $f$ is concave down at $x=3$.",
            "Near $x=1.5$, $f'$ has a local maximum (highest point of the brown curve there), and there $f''$ is about $0$.",
            "Wherever the green curve is positive, the brown curve is rising.",
            "The brown curve has three zeros while the green curve has only two zeros in the window.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "At $x=3$ (between $2.5$ and $5$) brown is negative."),
            expl("B", True, "Green is negative through much of the middle, including $x=3$."),
            expl("C", True, "Extrema of $f'$ occur where $f''=0$; the local max of brown aligns with a green zero."),
            expl("D", True, "$f''>0$ means $f'$ is increasing."),
            expl("E", True, "Count axis crossings: brown three times, green twice."),
        ],
        solution_overview="Shared-plane reading of $f'$ and $f''$: signs at $x=3$, alignment of extrema with zeros, zero counts.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 9. f' and f'' skew on one plane ────────────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_skew, "label": "f′", "stroke": C0},
            {"fn": fpp_skew, "label": "f″", "stroke": C1},
        ],
        xmin=0,
        xmax=8,
        ymin=-2,
        ymax=4,
        title="f′ and f″ on the same axes",
        xticks=[0, 2, 4, 6, 8],
        yticks=[-2, -1, 0, 1, 2, 3],
    )
    add(
        title="Skewed pair on one plane: zero of f′ at x=4",
        context=(
            "Brown is $f'$ and green is $f''$, drawn on one shared plane. Decide TRUE or FALSE."
        ),
        statements=[
            "The brown curve crosses the axis at $x=4$, and to the left of $x=4$ it is positive.",
            "At the highest point of the brown curve (near $x=1$), the green curve is approximately zero.",
            "For $x>2$ in this window, the green curve is negative, so $f'$ is decreasing on $(2,8)$.",
            "At $x=0$, brown is near height $4$ while green is near height $-2$.",
            "Because green is negative on $(2,8)$, the function $f$ itself must be decreasing on $(2,8)$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Visible zero at $x=4$ with a positive hump on the left."),
            expl("B", True, "Peak of $f'$ ↔ zero of $f''$."),
            expl("C", True, "Negative $f''$ ⇒ decreasing $f'$."),
            expl("D", True, "Read the two heights at the left edge of the figure."),
            expl(
                "E",
                False,
                "Negative $f''$ is about concavity of $f$ / decrease of $f'$, not about whether $f$ decreases. "
                "On $(2,4)$ one still has $f'>0$, so $f$ is still increasing there.",
            ),
        ],
        solution_overview="Do not confuse the sign of $f''$ with the monotonicity of $f$; use $f'$ for that.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 10. Two firms' f' on one plane ─────────────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_decay, "label": "P′_A", "stroke": C0},
            {"fn": gp_decay, "label": "P′_B", "stroke": C1},
        ],
        xmin=0,
        xmax=7,
        ymin=-3,
        ymax=3,
        title="Marginal profit for two firms (same axes)",
        xticks=[0, 1, 2, 3, 4, 5, 6, 7],
        yticks=[-2, 0, 2],
    )
    add(
        title="Two marginal-profit curves on one plane",
        context=(
            "Brown is firm A's marginal profit $P_A'$ and green is firm B's marginal profit $P_B'$, "
            "plotted on the same axes. Decide TRUE or FALSE."
        ),
        statements=[
            "Firm A's zeros are near $x=1$ and $x=3$, while firm B's zeros are near $x=2$ and $x=5$.",
            "At $x=1.5$, brown is negative while green is still positive, so A wants to contract and B wants to expand.",
            "At $x=4$, both curves are negative, so both firms' profits are decreasing in output there.",
            "Near $x=0$, both curves are positive, and green starts higher than brown.",
            "Having two zeros each means the two firms earn the same maximal profit level.",
        ],
        answer_key=[True, True, True, False, False],
        tactical_explanations=[
            expl("A", True, "Read the axis crossings on the shared $x$-axis."),
            expl("B", True, "Opposite signs of marginal profit ⇒ opposite expand/contract advice."),
            expl("C", True, "Negative $P'$ means profit falls as output rises."),
            expl(
                "D",
                False,
                "Near $x=0$, brown is positive, but green starts negative (zeros at $2$ and $5$ ⇒ "
                "negative on $(0,2)$). Green is not positive at $x=0$.",
            ),
            expl(
                "E",
                False,
                "Critical-point counts do not determine the height of profit levels — $P$ itself is not plotted.",
            ),
        ],
        solution_overview="Compare zero locations and signs of two marginal-profit curves on shared axes.",
        figure=fig,
        difficulty_level="5/5",
    )

    # Fix D: gp_decay at 0: (0-2)(0-5)exp(0)=(-2)(-5)=10>0. Wait!
    # gp = (x-2)(x-5)e^{-0.15x}
    # at x=0: (-2)(-5)=10 > 0
    # at x=3: (1)(-2)<0
    # zeros at 2 and 5: positive on (0,2), negative on (2,5), positive after 5.
    # So near 0 both positive. Is green higher? gp(0)=10, fp(0)=(0-1)(0-3)=3, but with exp...
    # fp(0)=3, gp(0)=10 - green higher. So D should be True!
    # Let me fix answer D to True.
    
    # Actually wait fp_decay(0)=( -1)(-3)*1=3, gp=10. Green higher. D True.
    # And statement D says both positive and green higher - TRUE.

    # I'll fix answer_key when splicing - need to correct in add() call. Let me patch the last add's answer_key.

    # Recreate task 10 with correct key - I'll fix by editing the dict after build for task with that title.

    # ── 11. Quartic f' with f'' on one plane ───────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_quart, "label": "f′", "stroke": C0},
            {"fn": fpp_quart, "label": "f″", "stroke": C1},
        ],
        xmin=0,
        xmax=6,
        ymin=-10,
        ymax=10,
        title="f′ and f″ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4, 8],
    )
    add(
        title="Four-zero f′ with f″ on shared axes",
        context=(
            "Brown is $f'$ and green is $f''$ on one plane. Decide TRUE or FALSE."
        ),
        statements=[
            "The brown curve has four zeros in $[0,6]$.",
            "The green curve has three zeros in the window (one fewer than brown).",
            "At a local maximum of the brown curve, the green curve crosses or touches zero.",
            "On an interval where green is positive, brown is rising, so $f$ is concave up there.",
            "At $x=3$, brown is negative, so $f$ is decreasing at $x=3$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Four crossings of the brown curve."),
            expl("B", True, "A degree drop: three crossings for green."),
            expl("C", True, "Extrema of $f'$ occur where $f''=0$."),
            expl("D", True, "$f''>0$ ⇒ $f'$ increasing and $f$ concave up."),
            expl("E", True, "Between the middle zeros brown is below the axis; $x=3$ is there."),
        ],
        solution_overview="Shared-plane zero counts and the link extrema($f'$) ↔ zeros($f''$).",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 12. Rational f' and f'' one plane ──────────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_rat, "label": "f′", "stroke": C0},
            {"fn": fpp_rat, "label": "f″", "stroke": C1},
        ],
        xmin=-3,
        xmax=3,
        ymin=-6,
        ymax=8,
        title="f′ and f″ on the same axes",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[-4, 0, 4, 8],
    )
    add(
        title="Odd f′ with even f″ on one plane",
        context=(
            "Brown is $f'$ and green is $f''$ on shared axes. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, brown is $0$ and green is positive (near $8$ on the scale).",
            "Because green is positive near $x=0$, brown is increasing through the origin.",
            "The green curve is zero near $x=\\pm 1$, which matches the peak and the lowest point of the brown curve.",
            "For $x>1$, green is negative, so brown is falling on $(1,3)$.",
            "Brown being positive on $(0,3)$ means $f$ is increasing on $(0,3)$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Odd $f'$ vanishes at $0$; $f''(0)=8>0$."),
            expl("B", True, "$f''>0$ ⇒ $f'$ increasing."),
            expl("C", True, "Extrema of $f'$ at $x=\\pm 1$ where $f''=0$."),
            expl("D", True, "Negative $f''$ ⇒ decreasing $f'$."),
            expl("E", True, "Positive $f'$ ⇒ increasing $f$."),
        ],
        solution_overview="Read $f'(0)=0$, $f''(0)>0$, and the $\\pm 1$ alignment on one plane.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 13. Three curves: f', g', h' firms on ONE plane ────────────────────
    fig = svg_plane(
        [
            {"fn": fp_skew, "label": "P′_1", "stroke": C0},
            {"fn": hp_firm, "label": "P′_2", "stroke": C1},
            {"fn": lambda x: (3.5 - x) * math.exp(-0.25 * x) - 0.3, "label": "P′_3", "stroke": C2},
        ],
        xmin=0,
        xmax=7,
        ymin=-2,
        ymax=4,
        title="Three marginal-profit curves on one plane",
        xticks=[0, 1, 2, 3, 4, 5, 6, 7],
        yticks=[-2, -1, 0, 1, 2, 3],
    )
    add(
        title="Three firms’ P′ on one shared plane",
        context=(
            "Three marginal-profit curves $P_1'$, $P_2'$, $P_3'$ are drawn on the **same** axes "
            "(brown, green, purple). Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, brown and purple are positive while green is negative.",
            "At $x=0$, the green curve $P_2'$ is positive.",
            "At $x=5$, brown is negative, so firm 1's profit is decreasing in output at $x=5$.",
            "The first firm to hit a zero of marginal profit when moving right from $x=0$ is not necessarily firm 1.",
            "If at some $x$ one curve is above another and both are positive, that firm has the larger instantaneous profit gain per unit.",
        ],
        answer_key=[True, False, True, True, True],
        tactical_explanations=[
            expl("A", True, "All three start above the axis at $x=0$."),
            expl(
                "B",
                False,
                "Green is $P_2'(x)=-\\tfrac12(x-1)(x-4)+1$. At the vertex $x=2.5$, "
                "$P_2'(2.5)=1+\\tfrac12\\cdot(1.5)^2=2.125>0$. At $x=0$: $-\\tfrac12(-1)(-4)+1=-2+1=-1<0$. "
                "So green is **negative** near $x=0$, not positive through the whole window. "
                "The statement's reading is wrong.",
            ),
            expl("C", True, "Brown crosses at $x=4$ and is negative afterward."),
            expl("D", True, "Different zero locations mean different first sign changes."),
            expl("E", True, "The value of $P'$ is the instantaneous rate."),
        ],
        solution_overview="Compare three $P'$ graphs on shared axes at concrete $x$-values; watch firm 2 near $x=0$.",
        figure=fig,
        difficulty_level="5/5",
    )

    # Statement B is too messy. Let me replace it with a cleaner false claim when fixing.

    # ── 14. f' and g' decay pair cleaned ───────────────────────────────────
    fig = svg_plane(
        [
            {"fn": fp_decay, "label": "f′", "stroke": C0},
            {"fn": gp_decay, "label": "g′", "stroke": C1},
        ],
        xmin=0,
        xmax=7,
        ymin=-3,
        ymax=4,
        title="f′ and g′ on the same axes",
        xticks=[0, 1, 2, 3, 4, 5, 6, 7],
        yticks=[-2, 0, 2, 4],
    )
    add(
        title="Compare f′ and g′ at numbered x-values",
        context=(
            "Brown is $f'$ and green is $g'$ on one plane. Decide TRUE or FALSE."
        ),
        statements=[
            "Brown has zeros at $x=1$ and $x=3$; green has zeros at $x=2$ and $x=5$.",
            "At $x=0$, both $f'(0)$ and $g'(0)$ are positive, and $g'(0)>f'(0)$.",
            "At $x=2.5$, brown is negative while green is also negative.",
            "On $(3,5)$, brown is positive while green is negative: $f$ increases and $g$ decreases there.",
            "Equal numbers of zeros imply $\\max f = \\max g$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Read the four marked-style crossings off the shared axis."),
            expl("B", True, "$f'(0)=3$ and $g'(0)=10$, both positive with green larger."),
            expl("C", True, "At $x=2.5$: brown is in $(1,3)$ (negative); green is in $(2,5)$ (negative)."),
            expl("D", True, "After $x=3$, brown is positive; green stays negative until $x=5$."),
            expl("E", False, "Critical-point counts do not equate function values."),
        ],
        solution_overview="Coordinate-by-coordinate comparison of two first-derivative graphs on one plane.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 15. Three: f', f'', and a horizontal y=0 already there — use f', scaled f, f''? 
    # Better: plot fp_prod, fpp_prod, and a third related marginal on one plane with comparable scale
    fig = svg_plane(
        [
            {"fn": fp_prod, "label": "f′", "stroke": C0},
            {"fn": fpp_prod, "label": "f″", "stroke": C1},
            {"fn": lambda x: 0.5 * fp_prod(x) + 1, "label": "h′", "stroke": C2},
        ],
        xmin=-1,
        xmax=4,
        ymin=-10,
        ymax=12,
        title="f′, f″, and h′ on one plane",
        xticks=[-1, 0, 1, 2, 3, 4],
        yticks=[-8, -4, 0, 4, 8],
    )
    add(
        title="Three curves on one plane: values at x=0 and x=3",
        context=(
            "Brown is $f'$, green is $f''$, and purple is another derivative $h'$, all on the same axes. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, brown is positive ($f'(0)=4$) while green is negative ($f''(0)=-4$).",
            "At $x=3$, brown equals $10$ and is above purple, since purple is $0.5\\cdot f'(3)+1=6$.",
            "Green is a parabola opening upward with vertex on the positive $x$-axis side; it is negative at $x=0$.",
            "Wherever green is positive, brown is increasing as a function of $x$.",
            "Purple being a vertical shift/scaling of brown means purple and brown share the same zeros.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "$f'(0)=(0-4)(0-1)=4$ and $f''(0)=-4$."),
            expl("B", True, "$f'(3)=10$ and $h'(3)=6$."),
            expl("C", True, "$f''(x)=3x^{2}-2x-4$ opens upward and $f''(0)<0$."),
            expl("D", True, "$f''>0$ ⇒ $f'$ increasing."),
            expl(
                "E",
                False,
                "Purple is $0.5 f'+1$, so its zeros solve $f'=-2$, not $f'=0$. Zeros move.",
            ),
        ],
        solution_overview="Evaluate named curves at $x=0$ and $x=3$; scaling/shifting moves zeros.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 16. Single cubic f graph with numbers ──────────────────────────────
    fig = svg_plane(
        [{"fn": f_cubic, "label": "f", "stroke": C0}],
        xmin=0,
        xmax=6,
        ymin=-20,
        ymax=15,
        title="Graph of f",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-15, -10, -5, 0, 5, 10],
    )
    add(
        title="Graph of f: turning points at x=1, 2.5, 5",
        context=(
            "The figure shows $f$. Its turning points align with $x=1$, $x=2.5$, and $x=5$ "
            "(where $f'=0$). Decide TRUE or FALSE."
        ),
        statements=[
            "Near $x=1$ the graph has a local minimum (a lowest point in a neighbourhood).",
            "Near $x=2.5$ the graph has a local maximum.",
            "Near $x=5$ the graph has a local minimum.",
            "On $(1,2.5)$ the graph is rising, so $f$ is increasing there.",
            "Because $f(0)=0$, one must have $f'(0)=0$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Local lowest point near $x=1$."),
            expl("B", True, "Local highest point near $x=2.5$."),
            expl("C", True, "Local lowest point near $x=5$."),
            expl("D", True, "Between those turning points the curve rises."),
            expl("E", False, "$f(0)=0$ is a root, not a claim about the slope $f'(0)$."),
        ],
        solution_overview="Read local max/min from the graph of $f$ at the known critical $x$-values.",
        figure=fig,
        difficulty_level="3/5",
    )

    # ── 17. f and f' on one plane — scale carefully using f_rat and fp_rat ─
    fig = svg_plane(
        [
            {"fn": f_rat, "label": "f", "stroke": C0},
            {"fn": fp_rat, "label": "f′", "stroke": C1},
        ],
        xmin=-3,
        xmax=3,
        ymin=-5,
        ymax=7,
        title="f and f′ on the same axes",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[-4, -2, 0, 2, 4, 6],
    )
    add(
        title="f and f′ together: check consistency at x=0 and x=1",
        context=(
            "Brown is $f$ and green is $f'$ on one shared plane. Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=0$, brown has a local minimum with value $0$, and green crosses the axis there.",
            "On $(0,3)$, green is positive, matching a rising brown curve.",
            "On $(-3,0)$, green is negative, matching a falling brown curve.",
            "At $x=1$, green is near height $4$, so the slope of brown at $x=1$ is about $4$.",
            "The highest point of green on $(0,3)$ is a local maximum of brown.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Local min of $f$ at $0$ with $f'(0)=0$."),
            expl("B", True, "Positive $f'$ ↔ increasing $f$."),
            expl("C", True, "Negative $f'$ ↔ decreasing $f$."),
            expl("D", True, "$f'(1)=4$ on this model; the green height matches."),
            expl(
                "E",
                False,
                "A maximum of $f'$ is where $f$ is steepest, not where $f$ has a local maximum. "
                "Local maxima of $f$ need zeros of $f'$ with a $+$ to $-$ change.",
            ),
        ],
        solution_overview="Consistency between $f$ and $f'$ on one plane; max of $f'$ ≠ max of $f$.",
        figure=fig,
        difficulty_level="4/5",
    )

    # ── 18. Parabola-like firm vs cubic on one plane ───────────────────────
    fig = svg_plane(
        [
            {"fn": hp_firm, "label": "P′", "stroke": C0},
            {"fn": fp_cubic, "label": "Q′", "stroke": C1},
        ],
        xmin=0,
        xmax=6,
        ymin=-8,
        ymax=8,
        title="Two rate-of-change curves on one plane",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4, 8],
    )
    add(
        title="P′ versus Q′: compare at x=2 and x=5",
        context=(
            "Brown is $P'$ and green is $Q'$ for two different quantities, on the same axes. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "At $x=2$, brown is positive while green is also positive.",
            "At $x=5$, green is zero (a marked-style crossing of the green curve), while brown is negative.",
            "Brown has a single hump and two zeros near $x=0$ and $x=5$ after the $+1$ shift — from the figure, brown crosses once early and once late.",
            "On $(2.5,5)$, green is negative, so $Q$ is decreasing there.",
            "The larger of $P'(2)$ and $Q'(2)$ is brown's value if brown sits above green at $x=2$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl("A", True, "Both curves are above the axis at $x=2$."),
            expl("B", True, "Green has a zero at $x=5$; brown is below the axis near the right."),
            expl("C", True, "Read brown's two axis crossings on the shared plane."),
            expl("D", True, "Sign of $Q'$ controls monotonicity of $Q$."),
            expl("E", True, "On a shared vertical scale, higher curve ⇒ larger derivative value."),
        ],
        solution_overview="Pointwise comparison of two derivative graphs at $x=2$ and $x=5$.",
        figure=fig,
        difficulty_level="4/5",
    )

    # Fix hp_firm zeros: -0.5(x-1)(x-4)+1=0 ⇒ (x-1)(x-4)=2 ⇒ x^2-5x+4-2=0 ⇒ x^2-5x+2=0
    # zeros at (5±sqrt(17))/2 ≈ 0.44 and 4.56 — two zeros. OK.

    # ── 19. Three polynomials-related without calling them f/f'/f'' ID ─────
    fig = svg_plane(
        [
            {"fn": fp_cubic, "label": "A(x)", "stroke": C0},
            {"fn": fpp_cubic, "label": "B(x)", "stroke": C1},
            {"fn": lambda x: fp_cubic(x) - fpp_cubic(x), "label": "A−B", "stroke": C2},
        ],
        xmin=0,
        xmax=6,
        ymin=-15,
        ymax=15,
        title="A, B, and A−B on one plane",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-15, -10, -5, 0, 5, 10, 15],
    )
    add(
        title="Three named curves: signs, heights, and A vs A′",
        context=(
            "The figure shows three curves on one plane: $A$ (brown), $B$ (green), and $A-B$ (purple). "
            "In this model $B=A'$. Decide TRUE or FALSE from the coordinates."
        ),
        statements=[
            "At $x=3$, $A(3)<0$ and $B(3)<0$.",
            "At $x=3$, the purple curve lies strictly below the brown curve.",
            "Zeros of $B$ occur under a local max and a local min of $A$.",
            "Wherever $B>0$, the brown curve $A$ is rising.",
            "The purple curve having a zero means $A=B$ at that $x$, i.e. $A(x)=A'(x)$.",
        ],
        answer_key=[True, False, True, True, True],
        tactical_explanations=[
            expl("A", True, "Both brown and green are below the axis at $x=3$."),
            expl(
                "B",
                False,
                "At $x=3$, purple sits above brown on the shared scale, not below.",
            ),
            expl("C", True, "Since $B=A'$, extrema of $A$ sit at zeros of $B$."),
            expl("D", True, "$A'>0$ ⇒ $A$ increasing."),
            expl("E", True, "Purple zero ⇔ $A-B=0$ ⇔ $A=B=A'$."),
        ],
        solution_overview="Named curves with $B=A'$; compare heights at $x=3$ and use differentiation alignment.",
        figure=fig,
        difficulty_level="5/5",
    )

    # ── 20. Hard single: product with numbers ──────────────────────────────
    fig = svg_plane(
        [{"fn": fp_prod, "label": "f′", "stroke": C0}],
        xmin=-3,
        xmax=4,
        ymin=-10,
        ymax=12,
        title="First derivative f′",
        xticks=[-3, -2, -1, 0, 1, 2, 3, 4],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(-2, 0, C0), (1, 0, C0), (2, 0, C0)],
    )
    add(
        title="Compute signs and a value f′(−1) from the figure",
        context=(
            "The figure shows $f'$ with zeros at $x=-2$, $1$, and $2$. Decide TRUE or FALSE."
        ),
        statements=[
            "On $(-2,1)$ one has $f'>0$, so $f$ is increasing on $(-2,1)$.",
            "At $x=-1$, the graph is above the axis; in fact $f'(-1)=((-1)^{2}-4)(-1-1)=(-3)(-2)=6$.",
            "On $(1,2)$ one has $f'<0$, so $f$ decreases on $(1,2)$.",
            "The local maximum of $f$ among these critical points is at $x=1$.",
            "The local minimum of $f$ among these critical points is at $x=2$ (and also check $x=-2$: there $f'$ changes $+$ to $-$ from the far left? For $x<-2$, $(x^{2}-4)>0$ and $(x-1)<0$ so $f'<0$; then after $-2$, $f'>0$ — so $x=-2$ is a local minimum of $f$).",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl("A", True, "Positive between $-2$ and $1$."),
            expl("B", True, "Direct evaluation matches a positive reading on the graph."),
            expl("C", True, "Negative between $1$ and $2$."),
            expl("D", True, "$+$ to $-$ at $x=1$ ⇒ local max."),
            expl(
                "E",
                False,
                "At $x=-2$ the sign change is $-$ to $+$ ⇒ local **minimum** of $f$, not what the "
                "confused last parenthetical claims about $+\\to-$. The statement as a whole asserts "
                "an incorrect sign analysis for $x=-2$, so it is False. (The local minimum at $x=2$ is real, "
                "but the claim about $x=-2$ is wrong.)",
            ),
        ],
        solution_overview="Sign chart on $(-2,1)$, $(1,2)$, and beyond; evaluate $f'(-1)=6$.",
        figure=fig,
        difficulty_level="5/5",
    )

    # Clean up messy statements in tasks 6, 10, 13, 20 by patching dicts
    for t in tasks:
        if t["title"].startswith("Two zeros of f′ with a decaying"):
            t["statements"][1] = (
                "At $x=1$, $f'$ changes from positive to negative, so $f$ has a local maximum at $x=1$."
            )
            t["tactical_explanations"][1] = expl(
                "B",
                True,
                "For $x\\in(0,1)$ the product $(x-1)(x-3)$ is positive; for $x\\in(1,3)$ it is negative. "
                "Hence $+$ to $-$ at $x=1$ ⇒ local maximum of $f$.",
            )
        if t["title"].startswith("Two marginal-profit curves"):
            t["answer_key"] = [True, True, True, True, False]
            t["statements"][3] = (
                "Near $x=0$, both curves are positive, and green starts higher than brown."
            )
            t["tactical_explanations"][3] = expl(
                "D",
                True,
                "$f'(0)=3$ and $g'(0)=10$: both positive, green larger.",
            )
        if t["title"].startswith("Three firms"):
            t["statements"][0] = (
                "At $x=0$, brown and purple are positive while green is negative."
            )
            t["statements"][1] = (
                "At $x=0$, the green curve $P_2'$ is positive."
            )
            t["answer_key"] = [True, False, True, True, True]
            t["tactical_explanations"][0] = expl(
                "A",
                True,
                "Brown and purple start above the axis; green starts at about $-1$.",
            )
            t["tactical_explanations"][1] = expl(
                "B",
                False,
                "$P_2'(x)=-\\tfrac12(x-1)(x-4)+1$ gives $P_2'(0)=-1<0$. Green starts below the axis.",
            )
        if t["title"].startswith("Compute signs and a value"):
            t["statements"][4] = (
                "At $x=-2$, $f'$ changes from positive to negative, so $x=-2$ is a local maximum of $f$."
            )
            t["answer_key"] = [True, True, True, True, False]
            t["tactical_explanations"][4] = expl(
                "E",
                False,
                "For $x<-2$, $f'<0$; just after $x=-2$, $f'>0$. The change is $-$ to $+$, "
                "so $x=-2$ is a local **minimum** of $f$, not a local maximum.",
            )

    # ban words
    banned = ("trough", "oscillat", "sinusoid", "trigonometr")
    for t in tasks:
        blob = (t["title"] + t["context"] + " ".join(t["statements"]) + " ".join(t["tactical_explanations"])).lower()
        for b in banned:
            if b in blob:
                raise SystemExit(f"banned '{b}' in {t['title']}")

    for i, t in enumerate(tasks):
        t["id"] = f"math-11-{n0 + i}"
        t["case_id"] = f"MATH 11.{n0 + i}"
        t["sort_order"] = n0 + i

    return tasks


def main() -> None:
    tasks = build_tasks()
    OUT_JSON.write_text(
        json.dumps([{k: v for k, v in t.items() if k != "figure"} for t in tasks], indent=2)
    )
    OUT_TS.write_text(",\n".join(task_ts(t) for t in tasks) + "\n")
    print(f"Wrote {len(tasks)} tasks")
    for t in tasks:
        print(t["case_id"], t["title"][:56])


if __name__ == "__main__":
    main()
