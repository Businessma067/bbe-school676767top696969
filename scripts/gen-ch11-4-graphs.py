#!/usr/bin/env python3
"""Generate Chapter 11.4 Interpreting graphs without algebra tasks."""

from __future__ import annotations

import json
import textwrap
from pathlib import Path

from ch11_svg import svg_single, svg_triple

OUT_TS_SNIPPET = Path("/workspace/scripts/_gen_ch11_4_tasks.ts")
OUT_JSON = Path("/workspace/scripts/_gen_ch11_4_tasks.json")


def esc_tick(s: str) -> str:
    """Escape for a TypeScript template literal."""
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def esc_dq(s: str) -> str:
    """Escape for a TypeScript double-quoted string (keep LaTeX backslashes)."""
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
    )


def task_ts(t: dict) -> str:
    stmts = ",\n".join(f'      "{esc_dq(s)}"' for s in t["statements"])
    expls = ",\n".join(f"      `{esc_tick(e)}`" for e in t["tactical_explanations"])
    fig = esc_tick(t["figure"])
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
    figure: `{fig}`,
  }}"""


def expl(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    if "so the statement is" not in body.lower():
        body = body.rstrip() + f"\n\nThe statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


def build_tasks() -> list[dict]:
    tasks: list[dict] = []
    n = 121  # MATH 11.121 …

    # ── Shared coefficient families ──────────────────────────────────────
    # Family E (exam clone): f'(x) = -x^2+6x-5, zeros 1 & 5, peak (3,4)
    fp_e = [-1, 6, -5]
    fpp_e = [-2, 6]
    f_e = [-1 / 3, 3, -5, 0]

    # Family U: f'(x) = x^2-6x+8, zeros 2 & 4, trough (3,-1)
    fp_u = [1, -6, 8]
    fpp_u = [2, -6]
    f_u = [1 / 3, -3, 8, 0]

    # Family V: f'(x) = -(x-1)(x-4) = -x^2+5x-4, zeros 1 & 4, peak (2.5, 2.25)
    fp_v = [-1, 5, -4]
    fpp_v = [-2, 5]
    f_v = [-1 / 3, 2.5, -4, 0]

    # Family W: f'(x) = (x-0)(x-4)/2 wait: 0.5x(x-4)=0.5x^2-2x, zeros 0,4 min at 2 = -2
    fp_w = [0.5, -2, 0]
    fpp_w = [1, -2]
    f_w = [1 / 6, -1, 0, 0]

    # Family X: f(x) = x^3/3 - 2x^2 + 3x  (local max/min); f'=x^2-4x+3; f''=2x-4
    f_x = [1 / 3, -2, 3, 0]
    fp_x = [1, -4, 3]
    fpp_x = [2, -4]

    def add(**kw):
        nonlocal n
        kw.setdefault("id", f"math-11-{n}")
        kw.setdefault("case_id", f"MATH 11.{n}")
        kw.setdefault("sort_order", n)
        kw.setdefault("difficulty_level", "3/5")
        tasks.append(kw)
        n += 1

    # ══════════════════════════════════════════════════════════════════════
    # TASK 1 — Exact exam clone (f' graph)
    # ══════════════════════════════════════════════════════════════════════
    fig1 = svg_single(
        fp_e,
        xmin=0,
        xmax=6,
        ymin=-6,
        ymax=5,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-6, -4, -2, 0, 2, 4],
        mark_points=[(1, 0), (5, 0), (3, 4)],
    )
    add(
        title="Reading increasing intervals from a graph of f′",
        context=(
            "The graph below shows the first derivative $f'$ of a function $f$ that is "
            "defined and differentiable on all of $\\mathbb{R}$. The curve shown is the "
            "derivative $f'$, not $f$ itself. Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ is increasing on the interval $(1,5)$.",
            "The function $f$ has a local maximum at $x=5$.",
            "The function $f$ has an inflection point at $x=1$.",
            "The function $f$ is concave up at $x=4$.",
            "The function $f$ has a local minimum at $x=3$.",
        ],
        answer_key=[True, True, False, False, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "On $(1,5)$ the graph of $f'$ lies above the horizontal axis, so $f'(x)>0$. "
                "Wherever the first derivative is positive, $f$ itself is strictly increasing. "
                "No algebra is needed — only the sign of the plotted curve.",
            ),
            expl(
                "B",
                True,
                "At $x=5$ the graph of $f'$ crosses from above the axis to below it: "
                "$f'$ changes from positive to negative. That sign change means $f$ changes "
                "from increasing to decreasing, which is exactly a local maximum of $f$.",
            ),
            expl(
                "C",
                False,
                "An inflection point of $f$ is where concavity changes, i.e. where $f'$ "
                "changes from increasing to decreasing (or the reverse). At $x=1$, $f'$ "
                "crosses the axis while still climbing toward its peak at $x=3$. So $x=1$ "
                "is a local minimum of $f$, not an inflection point of $f$.",
            ),
            expl(
                "D",
                False,
                "Concavity of $f$ is read from whether $f'$ is rising or falling. "
                "At $x=4$, the plotted $f'$ is clearly decreasing (past its peak at $x=3$), "
                "so $f''(4)<0$ and $f$ is concave down — not concave up.",
            ),
            expl(
                "E",
                False,
                "A local extremum of $f$ requires $f'=0$ (for a differentiable $f$). "
                "At $x=3$ the graph shows $f'(3)=4\\neq 0$. The point $x=3$ is where $f'$ "
                "peaks, so it is an inflection point of $f$, not a local minimum of $f$.",
            ),
        ],
        solution_overview=(
            "Read signs of $f'$ for increasing/decreasing; sign changes of $f'$ for extrema; "
            "whether $f'$ is rising/falling for concavity."
        ),
        figure=fig1,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 2 — Same f' graph, different claims (local min, decreasing, inflection)
    # ══════════════════════════════════════════════════════════════════════
    add(
        title="Local min, decreasing intervals, and inflection from f′",
        context=(
            "The graph below shows $f'$, not $f$. The function $f$ is differentiable on "
            "all of $\\mathbb{R}$. Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ has a local minimum at $x=1$.",
            "The function $f$ is decreasing on the interval $(5,6)$.",
            "The function $f$ has an inflection point at $x=3$.",
            "The function $f$ is decreasing on the whole interval $(0,3)$.",
            "At $x=2$, the slope of $f$ is positive.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "At $x=1$, $f'$ changes from negative (below the axis) to positive (above). "
                "That is the first-derivative test for a local minimum of $f$.",
            ),
            expl(
                "B",
                True,
                "On $(5,6)$ the graph of $f'$ is below the axis, so $f'<0$ and $f$ is decreasing.",
            ),
            expl(
                "C",
                True,
                "The graph of $f'$ peaks at $x=3$: $f'$ changes from increasing to decreasing. "
                "That means $f''$ changes from positive to negative, so $f$ has an inflection "
                "point at $x=3$.",
            ),
            expl(
                "D",
                False,
                "On $(0,1)$ one has $f'<0$ (decreasing), but on $(1,3)$ one has $f'>0$ "
                "(increasing). So $f$ is not decreasing on the whole of $(0,3)$.",
            ),
            expl(
                "E",
                True,
                "At $x=2$ the plotted curve is above the axis, so $f'(2)>0$: the slope of $f$ "
                "is positive there.",
            ),
        ],
        solution_overview=(
            "Sign change $-$ to $+$ at $x=1$ is a local min; $f'<0$ after $x=5$ means decreasing; "
            "peak of $f'$ at $x=3$ is an inflection of $f$."
        ),
        figure=fig1,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 3 — Upward-opening f' (local max then local min of f)
    # ══════════════════════════════════════════════════════════════════════
    fig3 = svg_single(
        fp_u,
        xmin=0,
        xmax=6,
        ymin=-3,
        ymax=9,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, 0, 2, 4, 6, 8],
        mark_points=[(2, 0), (4, 0), (3, -1)],
    )
    add(
        title="Upward-opening derivative: max then min",
        context=(
            "The graph shows $f'$ for a differentiable function $f$ on $\\mathbb{R}$. "
            "Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ has a local maximum at $x=2$.",
            "The function $f$ has a local minimum at $x=4$.",
            "The function $f$ is increasing on $(2,4)$.",
            "The function $f$ is concave up at $x=4$.",
            "The function $f$ has an inflection point at $x=3$.",
        ],
        answer_key=[True, True, False, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "At $x=2$, $f'$ changes from positive to negative, so $f$ has a local maximum.",
            ),
            expl(
                "B",
                True,
                "At $x=4$, $f'$ changes from negative to positive, so $f$ has a local minimum.",
            ),
            expl(
                "C",
                False,
                "On $(2,4)$ the graph of $f'$ is below the axis, so $f'<0$ and $f$ is decreasing "
                "— not increasing.",
            ),
            expl(
                "D",
                True,
                "At $x=4$, the graph of $f'$ is rising (past its trough at $x=3$), so $f''>0$ "
                "and $f$ is concave up there.",
            ),
            expl(
                "E",
                True,
                "The trough of $f'$ at $x=3$ means $f'$ changes from decreasing to increasing, "
                "so $f''$ changes sign and $f$ has an inflection point at $x=3$.",
            ),
        ],
        solution_overview=(
            "For an upward-opening $f'$, the left zero is a local max of $f$ and the right zero "
            "a local min; the trough of $f'$ is an inflection of $f$."
        ),
        figure=fig3,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 4 — Family V f'
    # ══════════════════════════════════════════════════════════════════════
    fig4 = svg_single(
        fp_v,
        xmin=0,
        xmax=5,
        ymin=-5,
        ymax=3,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-4, -2, 0, 2],
        mark_points=[(1, 0), (4, 0)],
    )
    add(
        title="Sign chart from a second f′ parabola",
        context=(
            "The graph shows $f'$, not $f$. Decide TRUE or FALSE for each claim about $f$."
        ),
        statements=[
            "The function $f$ is increasing on $(1,4)$.",
            "The function $f$ has a local minimum at $x=1$.",
            "The function $f$ has a local maximum at $x=4$.",
            "The function $f$ is concave down at $x=1$.",
            "The slope of $f$ at $x=0$ is positive.",
        ],
        answer_key=[True, True, True, False, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Between the zeros $x=1$ and $x=4$, $f'$ is above the axis, so $f$ is increasing.",
            ),
            expl(
                "B",
                True,
                "At $x=1$, $f'$ changes from negative to positive → local minimum of $f$.",
            ),
            expl(
                "C",
                True,
                "At $x=4$, $f'$ changes from positive to negative → local maximum of $f$.",
            ),
            expl(
                "D",
                False,
                "Near $x=1$, $f'$ is still rising toward its peak (near $x=2.5$), so $f''>0$ "
                "and $f$ is concave up at $x=1$, not concave down.",
            ),
            expl(
                "E",
                False,
                "At $x=0$ the graph is below the axis ($f'(0)=-4$), so the slope of $f$ is negative.",
            ),
        ],
        solution_overview=(
            "Positive $f'$ on $(1,4)$ means increasing; sign changes give min at $1$ and max at $4$."
        ),
        figure=fig4,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 5 — Interpret graph of f itself
    # ══════════════════════════════════════════════════════════════════════
    fig5 = svg_single(
        f_x,
        xmin=0,
        xmax=5,
        ymin=-2,
        ymax=4,
        title="Graph of the function f",
        xticks=[0, 1, 2, 3, 4, 5],
        yticks=[-2, 0, 2, 4],
        mark_points=[(1, 4 / 3), (3, 0)],
    )
    add(
        title="Reading extrema from a graph of f",
        context=(
            "The graph below shows the function $f$ itself (not a derivative). "
            "Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ has a local maximum near $x=1$.",
            "The function $f$ has a local minimum near $x=3$.",
            "The function $f$ is decreasing on the interval between its local max and local min.",
            "The function $f$ is increasing for all $x>3$ shown in the window.",
            "Because the graph of $f$ crosses the $x$-axis near $x=3$, one must have $f'(3)=0$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "The plotted curve peaks near $x=1$: values nearby on both sides are lower. "
                "That is a local maximum of $f$.",
            ),
            expl(
                "B",
                True,
                "The plotted curve bottoms near $x=3$: values nearby on both sides are higher. "
                "That is a local minimum of $f$.",
            ),
            expl(
                "C",
                True,
                "Between the peak near $x=1$ and the trough near $x=3$, the graph is falling, "
                "so $f$ is decreasing on that interval.",
            ),
            expl(
                "D",
                True,
                "After the trough near $x=3$, the graph rises through the rest of the window, "
                "so $f$ is increasing there.",
            ),
            expl(
                "E",
                False,
                "Crossing the $x$-axis means $f(3)=0$ (a root), not $f'(3)=0$. A horizontal "
                "tangent is about the slope being zero, which is a different geometric feature "
                "from intersecting the axis.",
            ),
        ],
        solution_overview=(
            "Peaks and troughs of the graph of $f$ are local extrema; axis crossings are roots, "
            "not automatically critical points."
        ),
        figure=fig5,
        difficulty_level="2/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 6 — f graph family U antiderivative shape
    # ══════════════════════════════════════════════════════════════════════
    fig6 = svg_single(
        f_u,
        xmin=0,
        xmax=6,
        ymin=-2,
        ymax=12,
        title="Graph of the function f",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[0, 4, 8, 12],
    )
    add(
        title="Increasing and decreasing from a graph of f",
        context=(
            "The figure shows $f$ (not a derivative). Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ has a local peak near $x=2$.",
            "The function $f$ has a local trough near $x=4$.",
            "On $(2,4)$ the function $f$ is decreasing.",
            "For $x>4$ in the window, $f$ is increasing.",
            "The steepest negative slope of $f$ in the window occurs near the midpoint $x=3$ "
            "between the peak and the trough.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "The curve reaches a clear local high near $x=2$.",
            ),
            expl(
                "B",
                True,
                "The curve reaches a clear local low near $x=4$.",
            ),
            expl(
                "C",
                True,
                "Between those turning points the graph falls, so $f$ is decreasing on $(2,4)$.",
            ),
            expl(
                "D",
                True,
                "After the trough the graph rises again, so $f$ is increasing for $x>4$ in view.",
            ),
            expl(
                "E",
                True,
                "Between a peak and a trough the slope of $f$ is negative; it is most negative "
                "where the graph is steepest downward — visually near the middle $x=3$. "
                "(That matches where $f'$ has its most negative value.)",
            ),
        ],
        solution_overview=(
            "Read peaks, troughs, and rising/falling stretches directly from the graph of $f$."
        ),
        figure=fig6,
        difficulty_level="2/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 7 — Triple: Family E shuffled A=f', B=f'', C=f
    # ══════════════════════════════════════════════════════════════════════
    fig7 = svg_triple(
        [
            {
                "coeffs": fp_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 5,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": fpp_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 6,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": f_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -8,
                "ymax": 6,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Match three unlabeled graphs: f, f′, and f″",
        context=(
            "The three graphs A, B, and C show a twice-differentiable function $f$ together "
            "with its first derivative $f'$ and its second derivative $f''$, but the labels "
            "have been removed. Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "Graph A is the graph of $f'$.",
            "Graph B is the graph of $f''$.",
            "Graph C is the graph of $f$.",
            "Graph A is the graph of $f$.",
            "Wherever Graph A is above the horizontal axis, Graph C is increasing.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph A is a downward-opening parabola with two zeros — the typical shape of "
                "a quadratic $f'$. Graph B is a straight line (degree drops by one under "
                "differentiation), and Graph C is the more curved cubic-looking original $f$.",
            ),
            expl(
                "B",
                True,
                "Graph B is linear. The second derivative of a cubic $f$ is linear, so Graph B "
                "is $f''$. It also crosses zero where Graph A (namely $f'$) has its peak.",
            ),
            expl(
                "C",
                True,
                "Graph C has the richest turning behaviour (a cubic shape). It is $f$: it falls, "
                "then rises, then falls again — matching the sign pattern of Graph A as $f'$.",
            ),
            expl(
                "D",
                False,
                "Graph A is quadratic-looking with two axis crossings; that is $f'$, not $f$. "
                "The original $f$ is Graph C.",
            ),
            expl(
                "E",
                True,
                "If Graph A is $f'$ and Graph C is $f$, then $f'>0$ precisely where Graph A is "
                "above the axis, and there $f$ (Graph C) must be increasing. That matches the "
                "picture.",
            ),
        ],
        solution_overview=(
            "Degree drops under differentiation: cubic $f$, quadratic $f'$, linear $f''$. "
            "Zeros of $f'$ are turning points of $f$; zeros of $f''$ are extrema of $f'$."
        ),
        figure=fig7,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 8 — Triple Family U: A=f, B=f'', C=f'
    # ══════════════════════════════════════════════════════════════════════
    fig8 = svg_triple(
        [
            {
                "coeffs": f_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2,
                "ymax": 12,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [0, 4, 8],
            },
            {
                "coeffs": fpp_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 6,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": fp_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -3,
                "ymax": 9,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2, 4, 8],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple: which graph is the second derivative?",
        context=(
            "Graphs A, B, and C are $f$, $f'$, and $f''$ in unknown order. "
            "Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "Graph B is the graph of $f''$.",
            "Graph C is the graph of $f'$.",
            "Graph A is the graph of $f$.",
            "Graph B is the graph of $f'$.",
            "The zeros of Graph C are the $x$-coordinates of the turning points of Graph A.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph B is a straight line — the second derivative of a cubic. It crosses zero "
                "where Graph C (the parabola) has its trough, confirming B $=f''$.",
            ),
            expl(
                "B",
                True,
                "Graph C is the upward-opening parabola with two zeros: that is $f'$.",
            ),
            expl(
                "C",
                True,
                "Graph A shows a peak then a trough — the original $f$ whose slopes are described "
                "by Graph C.",
            ),
            expl(
                "D",
                False,
                "Graph B is linear, so it is $f''$, not $f'$. The first derivative is Graph C.",
            ),
            expl(
                "E",
                True,
                "Turning points of $f$ occur where $f'=0$. The zeros of Graph C ($f'$) line up "
                "with the peak and trough of Graph A ($f$).",
            ),
        ],
        solution_overview=(
            "Linear graph is $f''$; quadratic with two zeros is $f'$; peak-then-trough is $f$."
        ),
        figure=fig8,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 9 — Triple Family X: A=f'', B=f, C=f'
    # ══════════════════════════════════════════════════════════════════════
    fig9 = svg_triple(
        [
            {
                "coeffs": fpp_x,
                "xmin": 0,
                "xmax": 5,
                "ymin": -5,
                "ymax": 6,
                "title": "Graph A",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": f_x,
                "xmin": 0,
                "xmax": 5,
                "ymin": -2,
                "ymax": 4,
                "title": "Graph B",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-2, 0, 2, 4],
            },
            {
                "coeffs": fp_x,
                "xmin": 0,
                "xmax": 5,
                "ymin": -2,
                "ymax": 4,
                "title": "Graph C",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-2, 0, 2, 4],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple: link zeros of f′ to turns of f",
        context=(
            "The three graphs are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is the graph of $f''$.",
            "Graph B is the graph of $f$.",
            "Graph C is the graph of $f'$.",
            "Graph A is the graph of $f'$.",
            "Graph A crosses the horizontal axis at the same $x$ where Graph C has its vertex.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph A is linear → $f''$.",
            ),
            expl(
                "B",
                True,
                "Graph B has a local max then a local min → original $f$.",
            ),
            expl(
                "C",
                True,
                "Graph C is the upward-opening parabola → $f'$, with zeros at the turning "
                "points of Graph B.",
            ),
            expl(
                "D",
                False,
                "A straight line cannot be $f'$ for this cubic family; $f'$ is Graph C.",
            ),
            expl(
                "E",
                True,
                "The vertex of $f'$ is where $f''=0$. Graph A's zero lines up with Graph C's "
                "lowest point — confirming A $=f''$ and C $=f'$.",
            ),
        ],
        solution_overview=(
            "Match by degree and by the rule: zeros of $f''$ sit under extrema of $f'$."
        ),
        figure=fig9,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 10 — f' family W
    # ══════════════════════════════════════════════════════════════════════
    fig10 = svg_single(
        fp_w,
        xmin=-1,
        xmax=5,
        ymin=-3,
        ymax=3,
        title="Graph of the first derivative f′",
        xticks=[-1, 0, 1, 2, 3, 4, 5],
        yticks=[-2, 0, 2],
        mark_points=[(0, 0), (4, 0), (2, -2)],
    )
    add(
        title="Derivative with zeros at the endpoints of an interval",
        context=(
            "The graph shows $f'$. Decide TRUE or FALSE for each claim about $f$."
        ),
        statements=[
            "The function $f$ is decreasing on $(0,4)$.",
            "The function $f$ has a local maximum at $x=0$.",
            "The function $f$ has a local minimum at $x=4$.",
            "The function $f$ has an inflection point at $x=2$.",
            "The function $f$ is concave up on $(2,4)$.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "On $(0,4)$, $f'$ is below the axis, so $f$ is decreasing.",
            ),
            expl(
                "B",
                True,
                "At $x=0$, $f'$ changes from positive (left of $0$) to negative → local max of $f$.",
            ),
            expl(
                "C",
                True,
                "At $x=4$, $f'$ changes from negative to positive → local min of $f$.",
            ),
            expl(
                "D",
                True,
                "At $x=2$, $f'$ has a trough, so $f''$ changes sign → inflection of $f$.",
            ),
            expl(
                "E",
                True,
                "On $(2,4)$, $f'$ is rising, so $f''>0$ and $f$ is concave up.",
            ),
        ],
        solution_overview=(
            "Negative $f'$ on $(0,4)$ means decreasing; trough of $f'$ at $x=2$ is an inflection."
        ),
        figure=fig10,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 11 — Concavity focus from f'
    # ══════════════════════════════════════════════════════════════════════
    add(
        title="Concavity read from whether f′ is rising or falling",
        context=(
            "Again the graph shows $f'$ (the same downward-opening parabola with zeros at "
            "$1$ and $5$ and peak at $x=3$). Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ is concave up on $(0,3)$.",
            "The function $f$ is concave down on $(3,6)$.",
            "The function $f$ is concave up at $x=5$.",
            "Because $f'(5)=0$, the function $f$ must be concave down at $x=5$.",
            "The steepest positive slope of $f$ in the window occurs at $x=3$.",
        ],
        answer_key=[True, True, False, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "On $(0,3)$ the graph of $f'$ is rising, so $f''>0$ and $f$ is concave up.",
            ),
            expl(
                "B",
                True,
                "On $(3,6)$ the graph of $f'$ is falling, so $f''<0$ and $f$ is concave down.",
            ),
            expl(
                "C",
                False,
                "At $x=5$, $f'$ is still falling (after the peak at $3$), so $f$ is concave down "
                "at $x=5$, not concave up.",
            ),
            expl(
                "D",
                False,
                "$f'(5)=0$ only says the tangent to $f$ is horizontal. Concavity is about $f''$, "
                "read from whether $f'$ is rising or falling — a separate question from $f'=0$.",
            ),
            expl(
                "E",
                True,
                "The largest positive value of $f'$ in the window is the peak at $x=3$, so that "
                "is where $f$ has its steepest upward slope.",
            ),
        ],
        solution_overview=(
            "Rising $f'$ ⇒ concave up; falling $f'$ ⇒ concave down; max of $f'$ ⇒ steepest climb of $f$."
        ),
        figure=fig1,
        difficulty_level="3/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 12 — Triple Family V: A=f', B=f, C=f''
    # ══════════════════════════════════════════════════════════════════════
    fig12 = svg_triple(
        [
            {
                "coeffs": fp_v,
                "xmin": 0,
                "xmax": 5,
                "ymin": -5,
                "ymax": 3,
                "title": "Graph A",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-4, 0, 2],
            },
            {
                "coeffs": f_v,
                "xmin": 0,
                "xmax": 5,
                "ymin": -8,
                "ymax": 4,
                "title": "Graph B",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": fpp_v,
                "xmin": 0,
                "xmax": 5,
                "ymin": -5,
                "ymax": 5,
                "title": "Graph C",
                "xticks": [0, 1, 2, 3, 4, 5],
                "yticks": [-4, 0, 4],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple: identify f′ by its two zeros",
        context=(
            "Graphs A–C are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is $f'$.",
            "Graph B is $f$.",
            "Graph C is $f''$.",
            "Graph C is $f$.",
            "Graph B has a local minimum at the left-hand zero of Graph A.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph A is the downward parabola with two zeros → $f'$.",
            ),
            expl(
                "B",
                True,
                "Graph B shows trough-then-peak behaviour matching the sign pattern of Graph A → $f$.",
            ),
            expl(
                "C",
                True,
                "Graph C is linear → $f''$.",
            ),
            expl(
                "D",
                False,
                "A line is not $f$; $f$ is the curved Graph B.",
            ),
            expl(
                "E",
                True,
                "The left zero of $f'$ (Graph A) is where $f'$ changes $-$ to $+$, so $f$ "
                "(Graph B) has a local minimum there.",
            ),
        ],
        solution_overview=(
            "Parabola with two zeros = $f'$; cubic shape = $f$; line = $f''$."
        ),
        figure=fig12,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 13 — False traps on exam-style f'
    # ══════════════════════════════════════════════════════════════════════
    add(
        title="Common traps when reading a graph of f′",
        context=(
            "The graph shows $f'$ (zeros at $1$ and $5$, peak at $(3,4)$). "
            "Several tempting claims are false. Decide TRUE or FALSE."
        ),
        statements=[
            "Because $f'$ has a maximum at $x=3$, the function $f$ has a maximum at $x=3$.",
            "Because $f'(1)=0$, the point $x=1$ is an inflection point of $f$.",
            "The function $f$ is increasing on $(0,1)$.",
            "The function $f$ changes from concave up to concave down at $x=3$.",
            "On $(1,5)$ the derivative $f'$ is positive, so $f$ is increasing there.",
        ],
        answer_key=[False, False, False, True, True],
        tactical_explanations=[
            expl(
                "A",
                False,
                "A maximum of $f'$ means $f$ has an inflection (steepest climb), not a maximum "
                "of $f$. At $x=3$ one has $f'(3)=4\\neq 0$, so $f$ is still rising.",
            ),
            expl(
                "B",
                False,
                "$f'(1)=0$ with a $-$ to $+$ sign change is a local minimum of $f$, not an "
                "inflection. Inflection tracks extrema of $f'$, not zeros of $f'$.",
            ),
            expl(
                "C",
                False,
                "On $(0,1)$, $f'$ is negative, so $f$ is decreasing — not increasing.",
            ),
            expl(
                "D",
                True,
                "At the peak of $f'$ ($x=3$), $f'$ changes from rising to falling, so concavity "
                "of $f$ changes from up to down.",
            ),
            expl(
                "E",
                True,
                "Yes: $f'>0$ on $(1,5)$ means $f$ is increasing on that interval.",
            ),
        ],
        solution_overview=(
            "Do not confuse extrema of $f'$ with extrema of $f$; zeros of $f'$ are extrema of $f$ "
            "when the sign changes."
        ),
        figure=fig1,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 14 — Triple Family W: A=f'', B=f', C=f
    # ══════════════════════════════════════════════════════════════════════
    fig14 = svg_triple(
        [
            {
                "coeffs": fpp_w,
                "xmin": -1,
                "xmax": 5,
                "ymin": -4,
                "ymax": 4,
                "title": "Graph A",
                "xticks": [0, 2, 4],
                "yticks": [-2, 0, 2],
            },
            {
                "coeffs": fp_w,
                "xmin": -1,
                "xmax": 5,
                "ymin": -3,
                "ymax": 3,
                "title": "Graph B",
                "xticks": [0, 2, 4],
                "yticks": [-2, 0, 2],
            },
            {
                "coeffs": f_w,
                "xmin": -1,
                "xmax": 5,
                "ymin": -3,
                "ymax": 3,
                "title": "Graph C",
                "xticks": [0, 2, 4],
                "yticks": [-2, 0, 2],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple with a flat stretch of f",
        context=(
            "Graphs A–C are $f$, $f'$, and $f''$ in unknown order. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is $f''$.",
            "Graph B is $f'$.",
            "Graph C is $f$.",
            "Graph B is $f''$.",
            "Where Graph B is negative, Graph C is decreasing.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph A is linear → $f''$.",
            ),
            expl(
                "B",
                True,
                "Graph B is the upward parabola dipping below the axis → $f'$.",
            ),
            expl(
                "C",
                True,
                "Graph C is the original $f$, flatter in the middle where $|f'|$ is large and "
                "negative, then rising again after $x=4$.",
            ),
            expl(
                "D",
                False,
                "Graph B has a clear parabolic bend; $f''$ is the straight Graph A.",
            ),
            expl(
                "E",
                True,
                "Negative $f'$ means decreasing $f$: where Graph B is below the axis, Graph C falls.",
            ),
        ],
        solution_overview=(
            "Line = $f''$, parabola = $f'$, remaining curve = $f$; signs of $f'$ control monotonicity of $f$."
        ),
        figure=fig14,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 15 — Interpret f' that is always positive then negative (one zero)
    # ══════════════════════════════════════════════════════════════════════
    # f'(x) = 4 - x  (zero at 4)
    fp_line = [-1, 4]
    fig15 = svg_single(
        fp_line,
        xmin=0,
        xmax=6,
        ymin=-3,
        ymax=5,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, 0, 2, 4],
        mark_points=[(4, 0)],
    )
    add(
        title="A linear graph of f′: one critical point",
        context=(
            "The graph shows $f'$, which happens to be a straight line crossing the axis "
            "at $x=4$. Decide TRUE or FALSE for each claim about $f$."
        ),
        statements=[
            "The function $f$ is increasing on $(0,4)$.",
            "The function $f$ has a local maximum at $x=4$.",
            "The function $f$ is concave down everywhere in the window.",
            "The function $f$ has an inflection point at $x=4$.",
            "At $x=2$ the slope of $f$ equals $2$.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "On $(0,4)$ the line $f'$ is above the axis, so $f$ is increasing.",
            ),
            expl(
                "B",
                True,
                "At $x=4$, $f'$ changes from $+$ to $-$ → local maximum of $f$.",
            ),
            expl(
                "C",
                True,
                "The graph of $f'$ is a decreasing line, so $f''$ is a negative constant and "
                "$f$ is concave down throughout the window.",
            ),
            expl(
                "D",
                False,
                "Inflection needs a sign change of $f''$. Here $f''$ never changes sign "
                "(always negative), so $x=4$ is a local max of $f$, not an inflection.",
            ),
            expl(
                "E",
                True,
                "Reading the graph: at $x=2$ the line is at height $2$, so $f'(2)=2$.",
            ),
        ],
        solution_overview=(
            "One zero of a decreasing linear $f'$ gives one local max of $f$; constant negative "
            "$f''$ means always concave down."
        ),
        figure=fig15,
        difficulty_level="2/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 16 — Triple mixed harder claims
    # ══════════════════════════════════════════════════════════════════════
    fig16 = svg_triple(
        [
            {
                "coeffs": f_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -8,
                "ymax": 6,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": fp_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 5,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": fpp_e,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 6,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple: reason without computing formulas",
        context=(
            "The three graphs are $f$, $f'$, and $f''$ unlabeled. Use only graphical "
            "relationships — do not try to invent algebraic formulas. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph B is $f'$.",
            "Graph C is $f''$.",
            "Graph A is $f$.",
            "The peak of Graph B occurs at the same $x$ where Graph C crosses the axis.",
            "Graph A must be $f''$ because it has the most dramatic vertical range.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Graph B is the downward parabola with two zeros → first derivative $f'$.",
            ),
            expl(
                "B",
                True,
                "Graph C is the straight line → second derivative $f''$.",
            ),
            expl(
                "C",
                True,
                "Graph A is the remaining cubic-looking curve → $f$.",
            ),
            expl(
                "D",
                True,
                "Extrema of $f'$ occur where $f''=0$. The peak of Graph B lines up with the "
                "axis crossing of Graph C.",
            ),
            expl(
                "E",
                False,
                "Vertical range is not a reliable label. $f''$ is the simplest (linear) graph "
                "here — Graph C — not Graph A.",
            ),
        ],
        solution_overview=(
            "Identify by shape and by alignment of extrema/zeros across the three graphs."
        ),
        figure=fig16,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 17 — f graph: concavity visible
    # ══════════════════════════════════════════════════════════════════════
    fig17 = svg_single(
        f_e,
        xmin=0,
        xmax=6,
        ymin=-8,
        ymax=6,
        title="Graph of the function f",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4],
    )
    add(
        title="Concavity and bends from a graph of f",
        context=(
            "The figure shows $f$ itself. Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ has a local minimum somewhere near $x=1$.",
            "The function $f$ has a local maximum somewhere near $x=5$.",
            "Near $x=3$ the graph of $f$ changes from bending upward to bending downward.",
            "On $(1,5)$ the function $f$ is decreasing.",
            "A horizontal tangent of $f$ occurs near both $x=1$ and $x=5$.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "The curve bottoms out near $x=1$ before rising — a local minimum.",
            ),
            expl(
                "B",
                True,
                "The curve peaks near $x=5$ before falling — a local maximum.",
            ),
            expl(
                "C",
                True,
                "Around $x=3$ the bend switches from cup-shaped (concave up) to cap-shaped "
                "(concave down): an inflection.",
            ),
            expl(
                "D",
                False,
                "Between the min near $1$ and the max near $5$ the graph is rising, so $f$ "
                "is increasing on $(1,5)$.",
            ),
            expl(
                "E",
                True,
                "At a smooth local min or max the tangent is horizontal, so both turning "
                "points have $f'=0$.",
            ),
        ],
        solution_overview=(
            "Read troughs, peaks, rising stretches, and bend changes directly from the graph of $f$."
        ),
        figure=fig17,
        difficulty_level="2/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 18 — Another f' similar to exam (family V claims about intervals)
    # ══════════════════════════════════════════════════════════════════════
    add(
        title="Which intervals make f increase?",
        context=(
            "The graph shows $f'$ with zeros at $x=1$ and $x=4$. Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ is increasing on $(1,4)$.",
            "The function $f$ is decreasing on $(4,5)$.",
            "The function $f$ is decreasing on $(0,1)$.",
            "The function $f$ is increasing on the whole interval $(0,4)$.",
            "At every $x$ in $(1,4)$ one has $f'(x)>0$.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Between the zeros, $f'$ is positive → $f$ increasing on $(1,4)$.",
            ),
            expl(
                "B",
                True,
                "After $x=4$, $f'$ is negative → $f$ decreasing on $(4,5)$.",
            ),
            expl(
                "C",
                True,
                "Before $x=1$, $f'$ is negative → $f$ decreasing on $(0,1)$.",
            ),
            expl(
                "D",
                False,
                "On $(0,1)$ the function decreases, so it is not increasing on all of $(0,4)$.",
            ),
            expl(
                "E",
                True,
                "The plotted $f'$ lies strictly above the axis on $(1,4)$.",
            ),
        ],
        solution_overview=(
            "Increasing precisely where the graph of $f'$ is above the axis."
        ),
        figure=fig4,
        difficulty_level="2/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 19 — Triple identification with false "Graph A is f'"
    # ══════════════════════════════════════════════════════════════════════
    fig19 = svg_triple(
        [
            {
                "coeffs": fpp_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -6,
                "ymax": 6,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
            {
                "coeffs": f_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2,
                "ymax": 12,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [0, 4, 8],
            },
            {
                "coeffs": fp_u,
                "xmin": 0,
                "xmax": 6,
                "ymin": -3,
                "ymax": 9,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2, 4, 8],
            },
        ],
        caption="Graphs A, B, C are f, f′, and f″ in some order (unlabeled)",
    )
    add(
        title="Unlabeled triple: reject the wrong f′ label",
        context=(
            "Graphs A–C are $f$, $f'$, and $f''$ unlabeled. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is $f'$.",
            "Graph C is $f'$.",
            "Graph B is $f$.",
            "Graph A is $f''$.",
            "The trough of Graph C occurs where Graph A crosses the horizontal axis.",
        ],
        answer_key=[False, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                False,
                "Graph A is a straight line. A linear graph here is $f''$, not $f'$.",
            ),
            expl(
                "B",
                True,
                "Graph C is the upward-opening parabola with two zeros → $f'$.",
            ),
            expl(
                "C",
                True,
                "Graph B shows peak-then-trough → original $f$.",
            ),
            expl(
                "D",
                True,
                "Yes: the line is $f''$.",
            ),
            expl(
                "E",
                True,
                "Where $f''=0$, the graph of $f'$ has a horizontal tangent. Graph A's zero "
                "sits under the trough of Graph C.",
            ),
        ],
        solution_overview=(
            "Do not call the linear graph $f'$; it is $f''$. The parabola is $f'$."
        ),
        figure=fig19,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TASK 20 — Mixed review like the exam image
    # ══════════════════════════════════════════════════════════════════════
    add(
        title="Exam-style review: five claims from one f′ graph",
        context=(
            "The graph below shows the first derivative $f'$ of a function $f$ defined and "
            "differentiable on all of $\\mathbb{R}$. The curve shown is $f'$, not $f$. "
            "Decide TRUE or FALSE for each claim."
        ),
        statements=[
            "The function $f$ is increasing on the interval $(1,5)$.",
            "The function $f$ has a local maximum at $x=5$.",
            "The function $f$ has a local minimum at $x=1$.",
            "The function $f$ is concave up at $x=4$.",
            "The function $f$ has an inflection point at $x=3$.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "On $(1,5)$, $f'>0$ (graph above the axis) → $f$ increasing.",
            ),
            expl(
                "B",
                True,
                "At $x=5$, $f'$ changes $+$ to $-$ → local maximum of $f$.",
            ),
            expl(
                "C",
                True,
                "At $x=1$, $f'$ changes $-$ to $+$ → local minimum of $f$.",
            ),
            expl(
                "D",
                False,
                "At $x=4$, $f'$ is decreasing → $f''<0$ → concave down, not up.",
            ),
            expl(
                "E",
                True,
                "At $x=3$, $f'$ has its peak → concavity of $f$ changes → inflection point.",
            ),
        ],
        solution_overview=(
            "Same reading rules as the classic exam item: signs of $f'$, sign changes, and "
            "whether $f'$ is rising or falling."
        ),
        figure=fig1,
        difficulty_level="3/5",
    )

    assert len(tasks) == 20, len(tasks)
    assert n == 141
    return tasks


def main() -> None:
    tasks = build_tasks()
    OUT_JSON.write_text(json.dumps([{k: v for k, v in t.items() if k != "figure"} for t in tasks], indent=2))
    blocks = [task_ts(t) for t in tasks]
    OUT_TS_SNIPPET.write_text(",\n".join(blocks) + "\n")
    print(f"Wrote {len(tasks)} tasks to {OUT_TS_SNIPPET}")
    print(f"Meta JSON (no figures): {OUT_JSON}")
    # quick sanity: figure lengths
    for t in tasks[:3]:
        print(t["case_id"], "fig chars", len(t["figure"]))


if __name__ == "__main__":
    main()
